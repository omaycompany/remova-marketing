import type { ModelEntry } from "@/content/models";

export function displayBestFor(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const input = new Set(model.inputModalities ?? []);
    const isTextOutputModel = output.has("text")
        && !output.has("image")
        && !output.has("video")
        && !output.has("audio")
        && !output.has("speech")
        && !output.has("transcription");
    const hasMultimodalInput = input.has("image") || input.has("video") || input.has("audio") || input.has("file");

    if (!isTextOutputModel || !hasMultimodalInput) return model.bestFor;

    const text = [
        model.name,
        model.summary,
        model.description,
        ...(model.supportedParameters ?? []),
    ].filter(Boolean).join(" ").toLowerCase();
    const normalized = model.bestFor.map((entry) =>
        /^(image|video|audio) workflows$/i.test(entry) ? "Multimodal analysis" : entry
    );
    if (text.includes("code") || text.includes("coding") || text.includes("software")) normalized.push("Code generation");
    if (text.includes("agent") || text.includes("tool")) normalized.push("Agent workflows");
    if (text.includes("reason")) normalized.push("Advanced reasoning");

    return Array.from(new Set(normalized));
}
