# Model Landing Videos

Model landing videos are generated from the same model metadata that powers the landing pages.

## Page loading policy

Model pages use `LazyModelVideo`, which renders the poster/play state first and does not mount the MP4 `<source>` until the video section is near the viewport or the user clicks play. Keep this behavior in place for page speed. A 36-second 1080p MP4 is usually 6-7 MB, so eager loading would be too expensive across model pages.

## Asset rules

Video assets live at:

- `public/videos/models/{slug}.mp4`
- `public/videos/models/{slug}.png`
- `public/videos/models/{slug}.vtt`

`content/model-videos.ts` only exposes video metadata when all three files exist. This prevents broken embeds and keeps video SEO entries limited to pages with complete assets.

## Rendering

Render one model:

```bash
npm run video:render:models -- --slug=deepseek-v4-flash
```

Render every missing model video:

```bash
npm run video:render:models
```

Force re-render an existing model:

```bash
npm run video:render:models -- --slug=deepseek-v4-pro --force
```

For the full catalog, expect a multi-hour render and roughly 2.5 GB of MP4 output at the current 36-second 1080p settings. Prefer uploading the generated MP4s to production object storage/CDN before scaling beyond a small curated set.

## SEO

When the asset set exists, the model page automatically gets:

- `VideoObject` JSON-LD
- Open Graph video metadata
- Twitter image metadata using the poster
- `/video-sitemap.xml` entry with 36-second duration
- transcript and captions

The metadata is generated from `modelLandings`, `models`, and `applicationsForModel`, so new models do not need manual video copy unless their messaging needs custom treatment.
