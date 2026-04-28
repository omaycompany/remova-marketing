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
