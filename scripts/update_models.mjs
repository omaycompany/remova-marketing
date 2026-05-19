import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

// Pricing policy:
// Keep inputPer1M/outputPer1M as raw provider costs when updating model data.
// Public Remova pricing applies the 1.5x margin in lib/model-pricing.ts.
// See docs/model-pricing.md and docs/model-catalog.md before changing model behavior.

const generatedPath = "content/models.generated.ts";
const reportPath = "docs/model-catalog-report.json";
const openRouterUrl = "https://openrouter.ai/api/v1/models?output_modalities=all";
const falUrl = "https://api.fal.ai/v1/models";

function hasFlag(name) {
    return process.argv.includes(name);
}

function argValue(name) {
    const prefix = `${name}=`;
    const match = process.argv.find((arg) => arg.startsWith(prefix));
    return match ? match.slice(prefix.length) : undefined;
}

function normalizeDate(value) {
    if (!value) return new Date().toISOString().slice(0, 10);
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return new Date().toISOString().slice(0, 10);
    return date.toISOString().slice(0, 10);
}

function providerFromId(id) {
    const raw = id.split("/")[0] ?? "Unknown";
    const names = {
        "anthropic": "Anthropic",
        "bytedance-seed": "ByteDance Seed",
        "deepseek": "DeepSeek",
        "fal-ai": "fal.ai",
        "google": "Google",
        "meta-llama": "Meta",
        "mistralai": "Mistral AI",
        "openai": "OpenAI",
        "qwen": "Qwen",
        "x-ai": "xAI",
        "z-ai": "Z.ai",
    };
    return names[raw] ?? raw
        .split(/[-_]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

function providerFromFalEndpoint(endpointId) {
    const first = endpointId.split("/")[0] ?? "Media";
    const names = {
        alibaba: "Alibaba",
        bytedance: "ByteDance",
        clarityai: "Clarity AI",
        fal: "Remova Media",
        "fal-ai": "Remova Media",
        openai: "OpenAI",
        openrouter: "Remova Router",
        pixelcut: "Pixelcut",
        veed: "Veed",
        wan: "Wan",
        xai: "xAI",
    };
    return names[first] ?? providerFromId(first);
}

function pricePerMillion(value) {
    const numeric = Number(value ?? 0);
    if (!Number.isFinite(numeric)) return 0;
    return numeric * 1_000_000;
}

function sentence(value, fallback) {
    const clean = sanitizePublicText(String(value ?? "")).replace(/\s+/g, " ").trim();
    if (!clean) return fallback;
    return clean.length > 220 ? `${clean.slice(0, 219).trimEnd()}…` : clean;
}

function sanitizePublicText(value) {
    return String(value ?? "")
        .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, "$1")
        .replace(/https?:\/\/\S+/g, "")
        .replace(/\bOpenRouter\b/gi, "Remova")
        .replace(/\bfal\.ai\b/gi, "Remova")
        .replace(/\bGoogle Vertex AI\b/gi, "Google")
        .replace(/\s+/g, " ")
        .trim();
}

function sanitizePublicName(value) {
    return sanitizePublicText(value)
        .replace(/\s*\(([^)]*\bRemova\b[^)]*)\)\s*/gi, " ")
        .replace(/\s*\[[^\]]*\bRemova\b[^\]]*\]\s*/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function bestForFromModalities(inputModalities = [], outputModalities = [], supportedParameters = [], description = "") {
    const inputText = inputModalities.join(" ").toLowerCase();
    const outputText = outputModalities.join(" ").toLowerCase();
    const parameterText = supportedParameters.join(" ").toLowerCase();
    const descriptionText = `${description}`.toLowerCase();
    const text = `${inputText} ${outputText} ${parameterText} ${descriptionText}`;
    const tags = [];
    const hasInput = (modality) => inputModalities.includes(modality);
    const hasOutput = (modality) => outputModalities.includes(modality);
    const codingText = text
        .replace(/\bsource code\b/g, "")
        .replace(/\bcode and weights\b/g, "")
        .replace(/\bcode\/weights\b/g, "");
    const hasCodingSignal = /\b(code|coding|software|developer|programming)\b/.test(codingText);
    const isMusic = hasOutput("audio")
        && !descriptionText.includes("sound effect")
        && !descriptionText.includes("sound effects")
        && (
            descriptionText.includes("music")
            || descriptionText.includes("song")
            || descriptionText.includes("soundtrack")
            || descriptionText.includes("lyria")
            || descriptionText.includes("compose")
        );
    const isSoundEffects = hasOutput("audio") && (
        descriptionText.includes("sound effect")
        || descriptionText.includes("sound effects")
        || /\bsfx\b/.test(descriptionText)
        || descriptionText.includes("foley")
    );
    const isSpeechGeneration = (hasOutput("speech") || hasOutput("audio"))
        && !isMusic
        && !isSoundEffects
        && (
            hasOutput("speech")
            || descriptionText.includes("text-to-speech")
            || /\btts\b/.test(descriptionText)
            || descriptionText.includes("voiceover")
            || descriptionText.includes("voice over")
            || descriptionText.includes("narration")
            || descriptionText.includes("generate speech")
        );
    const isSearch = hasOutput("text") && (
        descriptionText.includes("web search")
        || descriptionText.includes("search preview")
        || descriptionText.includes("search queries")
        || descriptionText.includes("perplexity")
        || descriptionText.includes("sonar")
    );
    const isTraining = hasInput("dataset")
        || hasOutput("model")
        || descriptionText.includes("training")
        || descriptionText.includes("model training")
        || descriptionText.includes("fine-tuning")
        || descriptionText.includes("fine tuning")
        || descriptionText.includes("train lora")
        || descriptionText.includes("train ");
    const isMediaUtility = hasOutput("media")
        || descriptionText.includes("video-to-video")
        || descriptionText.includes("ffmpeg")
        || descriptionText.includes("upscale")
        || descriptionText.includes("compose videos")
        || descriptionText.includes("media sources");

    if (isSearch) {
        tags.push("Web research", "Search-grounded answers", "Source-backed analysis");
    } else if (isTraining) {
        tags.push("Model training", "Dataset workflows", "Style adaptation");
    } else if (isMediaUtility) {
        tags.push("Video editing", "Media composition", "Asset enhancement");
    } else if (hasOutput("video")) {
        tags.push("Video generation");
        if (hasInput("image") || descriptionText.includes("image-to-video") || descriptionText.includes("reference-to-video")) tags.push("Image-to-video");
        if (
            hasInput("audio")
            || descriptionText.includes("audio-to-video")
            || descriptionText.includes("audio file")
            || descriptionText.includes("audio clips")
            || descriptionText.includes("native audio")
        ) tags.push("Audio-aware video");
    } else if (hasOutput("image")) {
        tags.push("Image workflows");
    } else if (isMusic) {
        tags.push("Music generation", "Audio production", "Campaign soundtracks");
    } else if (isSoundEffects) {
        tags.push("Sound effects", "Audio design", "Media production");
    } else if (isSpeechGeneration) {
        tags.push("Speech generation", "Voiceover production", "Narration workflows");
    } else if (hasOutput("embeddings") && hasCodingSignal) {
        tags.push("Code retrieval", "Repository search", "Coding assistant retrieval");
    } else if (hasOutput("audio") || hasOutput("speech")) {
        tags.push("Audio workflows");
    } else if (hasOutput("embeddings")) {
        tags.push("Embeddings");
    } else if (hasOutput("text") && inputModalities.some((modality) => ["image", "video", "audio", "file"].includes(modality))) {
        tags.push("Multimodal analysis");
    }
    if (text.includes("tool")) tags.push("Agent workflows");
    if (text.includes("reason")) tags.push("Advanced reasoning");
    if (hasCodingSignal && hasOutput("text") && !hasOutput("embeddings") && !hasOutput("image") && !hasOutput("video") && !hasOutput("audio") && !hasOutput("speech")) {
        tags.push("Code generation");
    }
    if (tags.length === 0) tags.push("General chat", "Enterprise assistants");

    return Array.from(new Set(tags)).slice(0, 3);
}

function mapOpenRouterModel(model) {
    const inputModalities = model.architecture?.input_modalities ?? ["text"];
    const outputModalities = model.architecture?.output_modalities ?? ["text"];
    const supportedParameters = model.supported_parameters ?? [];
    const description = sentence(model.description, `${model.name} is available through Remova.`);

    return {
        id: model.id,
        name: sanitizePublicName(model.name),
        provider: providerFromId(model.id),
        releasedAt: normalizeDate((model.created ?? 0) * 1000),
        contextLength: Number(model.context_length ?? model.top_provider?.context_length ?? 0),
        inputPer1M: pricePerMillion(model.pricing?.prompt),
        outputPer1M: pricePerMillion(model.pricing?.completion),
        summary: sentence(description, `${model.name} model profile.`),
        description,
        bestFor: bestForFromModalities(inputModalities, outputModalities, supportedParameters, description),
        modality: model.architecture?.modality ?? `${inputModalities.join("+")}->${outputModalities.join("+")}`,
        inputModalities,
        outputModalities,
        supportedParameters,
        source: "llm_catalog",
        modelType: outputModalities.includes("image")
            ? "image"
            : outputModalities.includes("audio")
                ? "audio"
                : outputModalities.includes("video")
                    ? "video"
                    : "language",
    };
}

function modalitiesForFalCategory(category = "") {
    const normalized = category.toLowerCase();
    if (normalized.includes("text-to-image")) return { input: ["text"], output: ["image"] };
    if (normalized.includes("image-to-image")) return { input: ["image", "text"], output: ["image"] };
    if (normalized.includes("image-to-video")) return { input: ["image", "text"], output: ["video"] };
    if (normalized.includes("text-to-video")) return { input: ["text"], output: ["video"] };
    if (normalized.includes("text-to-speech") || normalized.includes("text-to-audio")) return { input: ["text"], output: ["audio"] };
    if (normalized.includes("speech-to-text") || normalized.includes("audio-to-text")) return { input: ["audio"], output: ["text"] };
    if (normalized.includes("3d")) return { input: ["text", "image"], output: ["3d"] };
    if (normalized.includes("training")) return { input: ["dataset"], output: ["model"] };
    return { input: ["text"], output: ["media"] };
}

function mapFalModel(model) {
    const metadata = model.metadata ?? {};
    const category = metadata.category ?? "media";
    const modalities = modalitiesForFalCategory(category);
    const name = sanitizePublicName(metadata.display_name || model.endpoint_id);
    const description = sentence(metadata.description, `${name} is available through Remova for ${category} workflows.`);

    return {
        id: `fal/${model.endpoint_id}`,
        name,
        provider: providerFromFalEndpoint(model.endpoint_id),
        releasedAt: normalizeDate(metadata.date ?? metadata.updated_at),
        contextLength: 0,
        inputPer1M: 0,
        outputPer1M: 0,
        summary: description,
        description,
        bestFor: bestForFromModalities(modalities.input, modalities.output, [], `${category} ${description}`),
        modality: `${modalities.input.join("+")}->${modalities.output.join("+")}`,
        inputModalities: modalities.input,
        outputModalities: modalities.output,
        supportedParameters: [],
        source: "media_catalog",
        modelType: category,
        pricingDescription: "Usage-based pricing",
    };
}

async function fetchJson(url, headers = {}) {
    const response = await fetch(url, { headers });
    if (!response.ok) {
        throw new Error(`${url} returned ${response.status}: ${await response.text()}`);
    }
    return response.json();
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJsonWithRetry(url, headers = {}, retries = 4) {
    for (let attempt = 0; attempt <= retries; attempt += 1) {
        const response = await fetch(url, { headers });
        if (response.ok) return response.json();

        const body = await response.text();
        if (response.status === 429 && attempt < retries) {
            const retryAfter = Number(response.headers.get("retry-after") ?? 0);
            const waitMs = retryAfter > 0 ? retryAfter * 1000 : 1500 * (attempt + 1);
            console.warn(`[models] Rate limited by ${url}. Retrying in ${waitMs}ms...`);
            await sleep(waitMs);
            continue;
        }

        throw new Error(`${url} returned ${response.status}: ${body}`);
    }

    throw new Error(`${url} failed after retries`);
}

async function fetchOpenRouterModels() {
    const payload = await fetchJson(openRouterUrl);
    return (payload.data ?? []).map(mapOpenRouterModel);
}

async function fetchFalModels() {
    const models = [];
    let cursor = undefined;
    let page = 0;
    const maxPages = Number(argValue("--fal-pages") ?? "0");

    do {
        page += 1;
        const url = new URL(falUrl);
        url.searchParams.set("limit", "100");
        url.searchParams.set("status", "active");
        if (cursor) url.searchParams.set("cursor", cursor);

        const headers = {};
        if (process.env.FAL_KEY) headers.Authorization = `Key ${process.env.FAL_KEY}`;

        const payload = await fetchJsonWithRetry(url, headers);
        models.push(...(payload.models ?? []).map(mapFalModel));
        cursor = payload.next_cursor;
        if (maxPages > 0 && page >= maxPages) {
            console.warn(`[models] Stopped fal.ai after ${page} page(s). Pass --fal-pages=0 with FAL_KEY for a full sync.`);
            break;
        }
        if (!payload.has_more) break;
    } while (cursor);

    return models;
}

function getGoogleAccessToken() {
    if (process.env.GOOGLE_VERTEX_ACCESS_TOKEN) return process.env.GOOGLE_VERTEX_ACCESS_TOKEN;
    try {
        return execFileSync("gcloud", ["auth", "print-access-token"], { encoding: "utf8" }).trim();
    } catch {
        return "";
    }
}

async function fetchVertexModels() {
    const project = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT || argValue("--vertex-project");
    const location = process.env.GOOGLE_VERTEX_LOCATION || argValue("--vertex-location") || "us-central1";
    const token = getGoogleAccessToken();

    if (!project || !token) {
        console.warn("[models] Skipping Vertex: set GOOGLE_CLOUD_PROJECT and authenticate with gcloud or GOOGLE_VERTEX_ACCESS_TOKEN.");
        return [];
    }

    const url = `https://${location}-aiplatform.googleapis.com/v1beta1/projects/${project}/locations/${location}/publishers/google/models`;
    const payload = await fetchJson(url, { Authorization: `Bearer ${token}` });
    return (payload.publisherModels ?? payload.models ?? []).map((model) => {
        const id = model.name?.split("/models/").pop() ?? model.name;
        const displayName = model.displayName ?? id;
        const description = sentence(model.description, `${displayName} is available through Google Vertex AI.`);
        return {
            id: `vertex/google/${id}`,
            name: sanitizePublicName(displayName),
            provider: "Google",
            releasedAt: normalizeDate(model.versionCreateTime ?? model.createTime),
            contextLength: Number(model.inputTokenLimit ?? 0),
            inputPer1M: 0,
            outputPer1M: 0,
            summary: description,
            description,
            bestFor: bestForFromModalities(["text"], ["text"], [], description),
            modality: "text->text",
            inputModalities: ["text"],
            outputModalities: ["text"],
            supportedParameters: [],
            source: "cloud_catalog",
            modelType: "cloud-publisher-model",
            pricingDescription: "Usage-based pricing",
        };
    });
}

async function readExistingGeneratedModels() {
    if (!existsSync(generatedPath)) return [];

    const content = await fs.readFile(generatedPath, "utf8");
    const marker = "export const generatedModels = ";
    const start = content.indexOf(marker);
    if (start === -1) return [];

    const afterMarker = content.slice(start + marker.length);
    const end = afterMarker.lastIndexOf(";");
    if (end === -1) return [];

    try {
        const models = JSON.parse(afterMarker.slice(0, end).trim());
        return Array.isArray(models) ? models : [];
    } catch (error) {
        console.warn(`[models] Could not parse existing generated models: ${error.message}`);
        return [];
    }
}

function dedupeModels(models) {
    const seen = new Map();
    for (const model of models) {
        if (/^openrouter\//i.test(model.id)) continue;
        if (/^fal\/openrouter\//i.test(model.id)) continue;
        if (!seen.has(model.id)) {
            seen.set(model.id, model);
        }
    }
    return Array.from(seen.values()).sort((a, b) => {
        const dateComparison = b.releasedAt.localeCompare(a.releasedAt);
        if (dateComparison !== 0) return dateComparison;
        return a.name.localeCompare(b.name);
    });
}

async function main() {
    const existingModels = await readExistingGeneratedModels();
    const previousIds = new Set(existingModels.map((model) => model.id).filter(Boolean));
    const sources = [];
    const openRouterOnly = hasFlag("--openrouter-only");

    console.log("[models] Fetching OpenRouter models...");
    const openRouterModels = await fetchOpenRouterModels();
    sources.push({ name: "openrouter", count: openRouterModels.length });

    let falModels = [];
    let preservedModels = [];

    if (openRouterOnly) {
        preservedModels = existingModels.filter((model) => model.source && model.source !== "llm_catalog");
        sources.push({ name: "preserved", count: preservedModels.length });
        console.log(`[models] Preserving ${preservedModels.length} existing non-OpenRouter models.`);
    } else {
        console.log("[models] Fetching fal.ai models...");
        falModels = await fetchFalModels();
        sources.push({ name: "fal", count: falModels.length });
    }

    const vertexModels = hasFlag("--with-vertex") ? await fetchVertexModels() : [];
    if (hasFlag("--with-vertex")) sources.push({ name: "vertex", count: vertexModels.length });

    const models = dedupeModels([...openRouterModels, ...falModels, ...preservedModels, ...vertexModels]);
    const generatedAt = new Date();
    const generatedDate = generatedAt.toISOString().slice(0, 10);

    const file = `// Auto-generated snapshot from model catalog sources.
// Generated at ${generatedAt.toISOString()}
// Source counts: ${sources.map((source, index) => `source${index + 1}=${source.count}`).join(", ")}

export const generatedModelsLastUpdated = ${JSON.stringify(generatedDate)};

export const generatedModels = ${JSON.stringify(models, null, 4)};
`;

    await fs.writeFile(generatedPath, file);

    const nextIds = new Set(models.map((model) => model.id));
    const added = [...nextIds].filter((id) => !previousIds.has(id)).sort();
    const removed = [...previousIds].filter((id) => !nextIds.has(id)).sort();
    await fs.writeFile(
        reportPath,
        `${JSON.stringify({
            generatedAt: generatedAt.toISOString(),
            sources,
            total: models.length,
            addedCount: added.length,
            removedCount: removed.length,
            added,
            removed,
        }, null, 2)}\n`
    );

    console.log(`[models] Wrote ${models.length} models to ${generatedPath}`);
    console.log(`[models] Added ${added.length}, removed ${removed.length}. Report: ${reportPath}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
