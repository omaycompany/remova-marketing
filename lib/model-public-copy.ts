import type { ModelEntry } from "@/content/models";

function normalizeComparable(value: string) {
    return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function joinHumanList(values: string[]) {
    if (values.length === 0) return "";
    if (values.length === 1) return values[0];
    if (values.length === 2) return `${values[0]} and ${values[1]}`;
    return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

function modalityTokenLabel(value: string) {
    const normalized = value.trim().toLowerCase();
    const labels: Record<string, string> = {
        "3d": "3D",
        audio: "audio",
        dataset: "dataset",
        embeddings: "embeddings",
        file: "file",
        image: "image",
        media: "media",
        model: "model",
        rerank: "reranking",
        speech: "speech",
        text: "text",
        transcription: "transcription",
        video: "video",
    };

    return labels[normalized] ?? normalized.replace(/[-_]+/g, " ");
}

function sentenceCase(value: string) {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function displayModelName(model: Pick<ModelEntry, "name" | "provider">) {
    const match = model.name.match(/^([^:]{2,80}):\s+(.+)$/);
    if (!match) return model.name;

    const prefix = normalizeComparable(match[1]);
    const provider = normalizeComparable(model.provider);
    const isProviderPrefix = Boolean(prefix && provider) && (
        prefix === provider || prefix.includes(provider) || provider.includes(prefix)
    );

    return isProviderPrefix ? match[2].trim() : model.name;
}

export function humanizeModelModality(value?: string) {
    const normalized = value?.trim();
    if (!normalized) return "Text input to text output";

    const [rawInput, rawOutput] = normalized.split("->", 2);
    if (!rawOutput) {
        return sentenceCase(joinHumanList(rawInput.split("+").filter(Boolean).map(modalityTokenLabel)));
    }

    const input = joinHumanList(rawInput.split("+").filter(Boolean).map(modalityTokenLabel));
    const output = joinHumanList(rawOutput.split("+").filter(Boolean).map(modalityTokenLabel));
    return `${sentenceCase(input)} input to ${output} output`;
}

function hasTruncatedEnding(value: string) {
    return /(?:\.{3}|…)\s*$/.test(value);
}

export function displayModelSummary(model: ModelEntry) {
    const summary = model.summary.replace(/\s+/g, " ").trim();
    if (summary && !hasTruncatedEnding(summary)) return summary;

    const description = model.description?.replace(/\s+/g, " ").trim() ?? "";
    if (description && !hasTruncatedEnding(description)) return description;

    const bestFor = joinHumanList(
        (model.bestFor ?? []).slice(0, 2).map((entry) => entry.toLowerCase())
    ) || "enterprise AI workflows";
    const pricing = model.pricingDescription || model.source === "media_catalog" || model.source === "cloud_catalog"
        ? "usage-based pricing"
        : "a published context and pricing profile";

    return `${displayModelName(model)} is suited to ${bestFor}, with ${pricing} for governed deployment.`;
}
