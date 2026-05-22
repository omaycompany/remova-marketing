import type { ModelEntry } from "@/content/models";

export const MODEL_PRICE_MARGIN_MULTIPLIER = 1.5;

export function publicModelPrice(rawProviderPricePer1M: number) {
    return rawProviderPricePer1M * MODEL_PRICE_MARGIN_MULTIPLIER;
}

export function formatPublicModelPrice(rawProviderPricePer1M: number) {
    const publicPrice = publicModelPrice(rawProviderPricePer1M);
    const roundedCents = Math.round((publicPrice + Number.EPSILON) * 100) / 100;
    return `$${roundedCents.toFixed(2)}`;
}

export function formatPublicModelPricePer1M(rawProviderPricePer1M: number) {
    return `${formatPublicModelPrice(rawProviderPricePer1M)} per 1M tokens`;
}

const nonTokenOutputs = new Set(["image", "video", "audio", "speech", "transcription", "media"]);

function outputSet(model: ModelEntry) {
    return new Set(model.outputModalities ?? []);
}

export function isNonTokenPricedModel(model: ModelEntry) {
    const outputs = outputSet(model);
    return Array.from(outputs).some((output) => nonTokenOutputs.has(output));
}

export function isUsageBasedPriceModel(model: ModelEntry) {
    return Boolean(model.pricingDescription) || isNonTokenPricedModel(model);
}

export function modelInputPriceHeading(model: ModelEntry) {
    const outputs = outputSet(model);
    if (outputs.has("transcription")) return "Audio Input";
    if (isNonTokenPricedModel(model)) return "Input";
    return "Input / 1M";
}

export function modelOutputPriceHeading(model: ModelEntry) {
    const outputs = outputSet(model);
    if (outputs.has("transcription")) return "Transcription";
    if (outputs.has("image")) return "Image Output";
    if (outputs.has("video")) return "Video Output";
    if (outputs.has("speech") || outputs.has("audio")) return "Audio Output";
    if (isNonTokenPricedModel(model)) return "Output";
    return "Output / 1M";
}

export function formatModelInputPrice(model: ModelEntry) {
    if (model.pricingDescription) return model.pricingDescription;
    if (isNonTokenPricedModel(model)) return "Usage-based";
    return formatPublicModelPrice(model.inputPer1M);
}

export function formatModelOutputPrice(model: ModelEntry) {
    const outputs = outputSet(model);
    if (model.pricingDescription) return "Usage-based";
    if (outputs.has("transcription")) return "Included";
    if (isNonTokenPricedModel(model)) return "Usage-based";
    return formatPublicModelPrice(model.outputPer1M);
}

export function formatModelInputPriceDetail(model: ModelEntry) {
    if (model.pricingDescription) return model.pricingDescription;
    if (isNonTokenPricedModel(model)) return "Usage-based";
    return formatPublicModelPricePer1M(model.inputPer1M);
}

export function formatModelOutputPriceDetail(model: ModelEntry) {
    const outputs = outputSet(model);
    if (model.pricingDescription) return "Usage-based";
    if (outputs.has("transcription")) return "Included in transcription";
    if (isNonTokenPricedModel(model)) return "Usage-based";
    return formatPublicModelPricePer1M(model.outputPer1M);
}
