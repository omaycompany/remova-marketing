import type { ModelEntry } from "@/content/models";

export function modelText(model: ModelEntry) {
    return [
        model.name,
        model.id,
        model.summary,
        model.description,
        model.modelType,
        model.modality,
        ...(model.bestFor ?? []),
        ...(model.inputModalities ?? []),
        ...(model.outputModalities ?? []),
        ...(model.supportedParameters ?? []),
    ].filter(Boolean).join(" ").toLowerCase();
}

export function isTranscriptionModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const input = new Set(model.inputModalities ?? []);
    const text = modelText(model);

    return output.has("transcription")
        || (input.has("audio") && output.has("text") && (
            text.includes("transcription")
            || text.includes("transcribe")
            || text.includes("speech-to-text")
            || text.includes("audio-to-text")
            || text.includes("automatic speech recognition")
            || /\basr\b/.test(text)
            || text.includes("whisper")
        ));
}

export function isRetrievalModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);

    return output.has("embeddings")
        || text.includes("embedding")
        || text.includes("embeddings")
        || text.includes("embed ")
        || text.includes("rerank")
        || text.includes("retrieval")
        || text.includes("semantic search")
        || text.includes("vector search");
}

export function isSafetyModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);
    const isTextClassifier = output.has("text")
        && !output.has("image")
        && !output.has("video")
        && !output.has("audio")
        && !output.has("speech")
        && !output.has("embeddings");

    return isTextClassifier && (
        text.includes("llama guard")
        || text.includes("content safety")
        || text.includes("safety classifier")
        || text.includes("safety classification")
        || text.includes("moderation")
        || text.includes("moderate ")
        || text.includes("guardrail")
        || /\bguard\b/.test(text)
        || (text.includes("classif") && text.includes("safety"))
    );
}

export function isCreativeModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const isTextOnlyOutput = output.has("text")
        && !output.has("image")
        && !output.has("video")
        && !output.has("audio")
        && !output.has("speech")
        && !output.has("embeddings")
        && !output.has("transcription");
    const text = modelText(model);

    return isTextOnlyOutput && (
        text.includes("creative writing")
        || text.includes("roleplay")
        || text.includes("role-play")
        || text.includes("storytelling")
        || text.includes("narrative")
        || text.includes("character")
        || text.includes("uncensored")
    );
}

export function isMusicModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);

    return output.has("audio") && (
        text.includes("music")
        || text.includes("song")
        || text.includes("songs")
        || text.includes("soundtrack")
        || text.includes("lyria")
        || text.includes("compose")
    );
}

export function displayBestFor(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const input = new Set(model.inputModalities ?? []);
    const text = modelText(model);
    const isTextOutputModel = output.has("text")
        && !output.has("image")
        && !output.has("video")
        && !output.has("audio")
        && !output.has("speech")
        && !output.has("transcription");
    const hasMultimodalInput = input.has("image") || input.has("video") || input.has("audio") || input.has("file");

    if (isTranscriptionModel(model)) return ["Transcription workflows", "Audio analysis", "Transcript governance"];
    if (isRetrievalModel(model)) return ["Semantic retrieval", "Enterprise search", "Knowledge indexing"];
    if (isSafetyModel(model)) return ["Safety classification", "Policy enforcement", "Moderation workflows"];
    if (isCreativeModel(model)) return ["Creative writing", "Roleplay evaluation", "Narrative generation"];
    if (isMusicModel(model)) return ["Music generation", "Audio production", "Campaign soundtracks"];

    if (output.has("video")) {
        const labels = ["Video generation"];
        if (input.has("image") || text.includes("image-to-video") || text.includes("reference-to-video")) {
            labels.push("Image-to-video");
        }
        if (
            input.has("audio")
            || text.includes("audio-to-video")
            || text.includes("audio file")
            || text.includes("audio clips")
            || text.includes("native audio")
        ) {
            labels.push("Audio-aware video");
        }

        return labels;
    }

    const hasMediaWorkflowTag = model.bestFor.some((entry) => /^(image|video|audio) workflows$/i.test(entry));
    if (isTextOutputModel && (hasMultimodalInput || hasMediaWorkflowTag)) {
        const normalized = model.bestFor.map((entry) =>
            /^(image|video|audio) workflows$/i.test(entry)
                ? hasMultimodalInput ? "Multimodal analysis" : "General chat"
                : entry
        );
        if (text.includes("code") || text.includes("coding") || text.includes("software")) normalized.push("Code generation");
        if (text.includes("agent") || text.includes("tool")) normalized.push("Agent workflows");
        if (text.includes("reason")) normalized.push("Advanced reasoning");
        if (!hasMultimodalInput && (text.includes("mobile") || text.includes("low-resource") || text.includes("edge"))) {
            normalized.push("Edge-friendly workloads");
        }

        return Array.from(new Set(normalized));
    }

    return model.bestFor;
}
