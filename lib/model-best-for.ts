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

function codingSignalText(text: string) {
    return text
        .replace(/\bsource code\b/g, "")
        .replace(/\bcode and weights\b/g, "")
        .replace(/\bcode\/weights\b/g, "");
}

export function hasCodingSignal(model: ModelEntry) {
    const sourceText = codingSignalText([
        model.name,
        model.id,
        model.summary,
        model.description,
        model.modelType,
        model.modality,
        ...(model.supportedParameters ?? []),
    ].filter(Boolean).join(" ").toLowerCase());
    const bestForText = codingSignalText((model.bestFor ?? [])
        .filter((entry) => !/^code generation$/i.test(entry))
        .join(" ")
        .toLowerCase());

    return /\b(code|coding|software|developer|programming|codex)\b/.test(sourceText)
        || /\b(code|coding|software|developer|programming|codex)\b/.test(bestForText);
}

function normalizeBestForLabels(labels: string[], model: ModelEntry) {
    return Array.from(new Set(labels)).filter((entry) => hasCodingSignal(model) || !/^code generation$/i.test(entry));
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

export function isCodeRetrievalModel(model: ModelEntry) {
    return isRetrievalModel(model) && hasCodingSignal(model);
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

    return output.has("audio")
        && !text.includes("sound effect")
        && !text.includes("sound effects")
        && (
            text.includes("music")
            || text.includes("song")
            || text.includes("songs")
            || text.includes("soundtrack")
            || text.includes("lyria")
            || text.includes("compose")
        );
}

export function isSoundEffectsModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);

    return output.has("audio") && (
        text.includes("sound effect")
        || text.includes("sound effects")
        || /\bsfx\b/.test(text)
        || text.includes("foley")
    );
}

export function isSpeechGenerationModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);

    return (output.has("speech") || output.has("audio"))
        && !isTranscriptionModel(model)
        && !isMusicModel(model)
        && !isSoundEffectsModel(model)
        && (
            output.has("speech")
            || text.includes("text-to-speech")
            || /\btts\b/.test(text)
            || text.includes("voiceover")
            || text.includes("voice over")
            || text.includes("narration")
            || text.includes("generate speech")
        );
}

export function isSearchModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);
    const isTextAnswerModel = output.has("text")
        && !output.has("embeddings")
        && !output.has("image")
        && !output.has("video")
        && !output.has("audio")
        && !output.has("speech");

    return isTextAnswerModel && (
        text.includes("web search")
        || text.includes("search preview")
        || text.includes("search queries")
        || text.includes("perplexity")
        || text.includes("sonar")
    );
}

export function isTrainingModel(model: ModelEntry) {
    const input = new Set(model.inputModalities ?? []);
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);

    return input.has("dataset")
        || output.has("model")
        || text.includes("training")
        || text.includes("model training")
        || text.includes("fine-tuning")
        || text.includes("fine tuning")
        || text.includes("train lora")
        || text.includes("train ");
}

export function isMediaUtilityModel(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);

    return output.has("media")
        || text.includes("video-to-video")
        || text.includes("ffmpeg")
        || text.includes("upscale")
        || text.includes("compose videos")
        || text.includes("media sources");
}

export function isVoiceAgentModel(model: ModelEntry) {
    const input = new Set(model.inputModalities ?? []);
    const output = new Set(model.outputModalities ?? []);

    return input.has("audio") && output.has("audio") && output.has("text") && !isMusicModel(model);
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
    if (isSearchModel(model)) return ["Web research", "Search-grounded answers", "Source-backed analysis"];
    if (isCodeRetrievalModel(model)) return ["Code retrieval", "Repository search", "Coding assistant retrieval"];
    if (isRetrievalModel(model)) return ["Semantic retrieval", "Enterprise search", "Knowledge indexing"];
    if (isSafetyModel(model)) return ["Safety classification", "Policy enforcement", "Moderation workflows"];
    if (isCreativeModel(model)) return ["Creative writing", "Roleplay evaluation", "Narrative generation"];
    if (isMusicModel(model)) return ["Music generation", "Audio production", "Campaign soundtracks"];
    if (isTrainingModel(model)) return ["Model training", "Dataset workflows", "Style adaptation"];
    if (isMediaUtilityModel(model)) return ["Video editing", "Media composition", "Asset enhancement"];
    if (isVoiceAgentModel(model)) return ["Voice agents", "Audio conversation", "Speech generation"];
    if (isSoundEffectsModel(model)) return ["Sound effects", "Audio design", "Media production"];
    if (isSpeechGenerationModel(model)) return ["Speech generation", "Voiceover production", "Narration workflows"];

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

        return normalizeBestForLabels(labels, model);
    }

    const hasMediaWorkflowTag = model.bestFor.some((entry) => /^(image|video|audio) workflows$/i.test(entry));
    if (isTextOutputModel && (hasMultimodalInput || hasMediaWorkflowTag)) {
        const normalized = model.bestFor.map((entry) =>
            /^(image|video|audio) workflows$/i.test(entry)
                ? hasMultimodalInput ? "Multimodal analysis" : "General chat"
                : entry
        );
        if (hasCodingSignal(model)) normalized.push("Code generation");
        if (text.includes("agent") || text.includes("tool")) normalized.push("Agent workflows");
        if (text.includes("reason")) normalized.push("Advanced reasoning");
        if (!hasMultimodalInput && (text.includes("mobile") || text.includes("low-resource") || text.includes("edge"))) {
            normalized.push("Edge-friendly workloads");
        }

        return normalizeBestForLabels(normalized, model);
    }

    if (isTextOutputModel) {
        const normalized = [...model.bestFor];
        if (hasCodingSignal(model)) normalized.push("Code generation");
        if (text.includes("agent") || text.includes("tool")) normalized.push("Agent workflows");
        if (text.includes("reason")) normalized.push("Advanced reasoning");

        return normalizeBestForLabels(normalized, model);
    }

    return normalizeBestForLabels(model.bestFor, model);
}
