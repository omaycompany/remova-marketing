# Model Catalog Updates

The model catalog is generated into `content/models.generated.ts` and merged with curated models in `content/models.ts`.

## Sources

Current automated sources:

- OpenRouter: `https://openrouter.ai/api/v1/models?output_modalities=all`
- fal.ai: `https://api.fal.ai/v1/models`
- Google Vertex AI: optional, via Google Cloud authenticated publisher model listing

OpenRouter is the primary LLM source. fal.ai adds image, video, audio, 3D, and media-generation endpoints that are not necessarily available through OpenRouter. Vertex is optional because it requires a Google Cloud project, location, and auth token.

## Commands

Update with full OpenRouter and full fal.ai pagination:

```bash
npm run models:update
```

Use a smaller fal.ai sample while testing:

```bash
npm run models:update -- --fal-pages=2
```

Authenticated fal.ai sync:

```bash
export FAL_KEY="YOUR_FAL_KEY"
npm run models:update -- --fal-pages=0
```

Include Google Vertex publisher models:

```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_VERTEX_LOCATION="us-central1"
gcloud auth application-default login
npm run models:update:vertex
```

You can also pass a token directly:

```bash
export GOOGLE_VERTEX_ACCESS_TOKEN="$(gcloud auth print-access-token)"
npm run models:update:vertex
```

## Generated Report

Every update writes:

```text
docs/model-catalog-report.json
```

The report lists source counts, total model count, added IDs, and removed IDs. Review this before committing, especially when many models disappear because that can mean a provider API was rate-limited or changed shape.

## Pricing Policy

Keep generated model prices as raw provider costs. Public Remova pricing is applied through `lib/model-pricing.ts` with the 1.5x margin multiplier. See `docs/model-pricing.md`.

Non-token media models from fal.ai use `pricingDescription` instead of fake token pricing. Do not convert per-image, per-video, or GPU-minute pricing into token pricing unless the provider exposes a reliable normalized field.

## Public Linking and Naming

Public model pages must only link to Remova properties. Do not expose upstream catalog URLs, marketplace URLs, or third-party routing pages in public CTAs, metadata, schema, or model cards.

Provider source names are internal implementation details. When an upstream source is only an aggregator or hosting platform, map the public provider to the model owner, product family, or a neutral Remova label. For media or hosted endpoints, public model IDs should use `remova/{slug}` instead of exposing internal source prefixes.

## Adding New Sources

When adding another provider:

1. Fetch into `scripts/update_models.mjs`.
2. Map provider records into the `ModelEntry` shape.
3. Preserve raw provider pricing fields where possible.
4. Set `source`, `modelType`, `inputModalities`, and `outputModalities`.
5. Use `pricingDescription` for non-token billing.
6. Run `npm run models:update`.
7. Review `docs/model-catalog-report.json`.
8. Run `npm run build`.

The landing pages are generated automatically from `modelLandings`, so new models do not need hand-authored pages unless the model deserves custom positioning.
