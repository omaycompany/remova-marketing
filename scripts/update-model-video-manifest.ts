import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { modelLandings } from "../content/model-landings";
import { models, type ModelEntry } from "../content/models";

const outputDir = join(process.cwd(), "public/videos/models");
const manifestPath = join(process.cwd(), "content/model-video-manifest.generated.ts");
const includeNonText = process.argv.includes("--include-non-text");

if (!existsSync(outputDir)) {
    console.error("Missing public/videos/models. Render model videos before updating the manifest.");
    process.exit(1);
}

function needsModalitySpecificApplications(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const input = new Set(model.inputModalities ?? []);
    const text = [
        model.name,
        model.summary,
        model.description,
        ...model.bestFor,
    ].filter(Boolean).join(" ").toLowerCase();
    const modelType = `${model.modelType ?? ""}`.toLowerCase();
    const modality = `${model.modality ?? ""}`.toLowerCase();

    return output.has("video")
        || output.has("image")
        || output.has("audio")
        || output.has("transcription")
        || (input.has("audio") && output.has("text"))
        || modelType.includes("video")
        || modelType.includes("image")
        || modelType.includes("audio")
        || modelType.includes("speech")
        || modelType.includes("tts")
        || modelType.includes("music")
        || modality.includes("->video")
        || modality.includes("->image")
        || modality.includes("->audio")
        || text.includes("transcription")
        || text.includes("transcribe")
        || text.includes("whisper")
        || text.includes("embed")
        || text.includes("rerank")
        || text.includes("retrieval");
}

function isSafeToExpose(slug: string) {
    if (includeNonText) return true;

    const landing = modelLandings.find((entry) => entry.slug === slug);
    if (!landing) return true;

    const model = models.find((entry) => entry.id === landing.modelId);
    if (!model) return true;

    return !needsModalitySpecificApplications(model);
}

const files = new Set(readdirSync(outputDir));
const completeSlugs = Array.from(files)
    .filter((file) => file.endsWith(".mp4"))
    .map((file) => file.replace(/\.mp4$/, ""))
    .filter((slug) => files.has(`${slug}.png`) && files.has(`${slug}.vtt`));

if (completeSlugs.length === 0) {
    console.error("No complete model video asset sets found locally. Refusing to overwrite the manifest.");
    process.exit(1);
}

const slugs = completeSlugs
    .filter(isSafeToExpose)
    .sort((a, b) => a.localeCompare(b));

writeFileSync(
    manifestPath,
    [
        "// Generated from local public/videos/models assets.",
        "// Used to expose uploaded model videos from object storage during static builds.",
        "// By default, media/retrieval model videos are excluded until they are rerendered with modality-specific application copy.",
        "export const modelVideoSlugs = [",
        ...slugs.map((slug) => `    ${JSON.stringify(slug)},`),
        "] as const;",
        "",
    ].join("\n")
);

console.log(`Updated model video manifest with ${slugs.length} complete asset sets.`);
