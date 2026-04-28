# Model Pricing Policy

Public model prices on Remova must include a `1.5x` margin multiplier over raw provider cost.

## Rule

- Treat `content/models.ts` and `content/models.generated.ts` prices as raw provider costs, usually sourced from OpenRouter.
- Do not show raw provider prices in customer-facing UI, metadata, model pages, generated copy, videos, or SEO text.
- Always convert raw prices through `lib/model-pricing.ts`.

```ts
publicPrice = rawProviderPricePer1M * 1.5
```

## Canonical Helper

Use:

- `publicModelPrice(rawProviderPricePer1M)` for calculations and filtering.
- `formatPublicModelPrice(rawProviderPricePer1M)` for compact UI prices.
- `formatPublicModelPricePer1M(rawProviderPricePer1M)` for copy and specification tables.

## Why Raw Prices Stay Raw

Raw model records are intentionally kept as provider costs so future OpenRouter pulls can be diffed and regenerated cleanly.
The Remova margin is applied at presentation time. This prevents future agents or scripts from accidentally multiplying already-marked-up prices.

## Future Model Pull Checklist

1. Pull or regenerate model data with raw provider costs.
2. Keep `inputPer1M` and `outputPer1M` as raw provider cost fields.
3. Use `lib/model-pricing.ts` for every public display.
4. If creating screenshots, videos, social images, or landing-page copy that includes prices, manually use the public 1.5x prices.
5. Run `rg "formatPrice|inputPer1M|outputPer1M" components app content lib remotion` and verify raw fields are not displayed directly.
