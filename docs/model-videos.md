# Model Landing Videos

Model landing videos are generated from the same model metadata that powers the landing pages.

## Page loading policy

Model pages use `LazyModelVideo`, which renders the poster/play state first and does not mount the MP4 `<source>` until the video section is near the viewport or the user clicks play. Keep this behavior in place for page speed. A 36-second 1080p MP4 is usually 6-7 MB, so eager loading would be too expensive across model pages.

## Asset rules

Video assets live at:

- `public/videos/models/{slug}.mp4`
- `public/videos/models/{slug}.png`
- `public/videos/models/{slug}.vtt`

`content/model-videos.ts` only exposes video metadata when all three files exist locally, or when `R2_PUBLIC_BASE_URL` is configured and the slug is listed in `content/model-video-manifest.generated.ts`. This prevents broken embeds and keeps video SEO entries limited to pages with complete assets.

Generated model video binaries are intentionally ignored by git. Keep large MP4/poster/caption files in object storage and commit only the generated manifest plus code changes.

## Rendering

Render one model:

```bash
npm run video:render:models -- --slug=deepseek-v4-flash
```

Render every missing model video:

```bash
npm run video:render:models
```

Render missing videos for the newest 200 model detail pages first:

```bash
npm run video:render:models:latest200
```

Use the latest-200 command when curating high-priority landing pages. It sorts model pages by `releasedAt` newest first, skips complete `{slug}.mp4`, `{slug}.png`, and `{slug}.vtt` sets, and uses a minimal Remotion public directory so each render does not recopy unrelated site assets.

Force re-render an existing model:

```bash
npm run video:render:models -- --slug=deepseek-v4-pro --force
```

For the full catalog, expect a multi-hour render and roughly 2.5 GB of MP4 output at the current 36-second 1080p settings. Prefer uploading the generated MP4s to production object storage/CDN before scaling beyond a small curated set.

## Object storage upload

Local uploads read credentials from `.env.local`; production builds read the public video base URL from GitHub environment secrets.

Required variables:

- `R2_ACCOUNT_ID`
- `R2_BUCKET_NAME`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_PUBLIC_BASE_URL`

Upload all generated model video assets:

```bash
npm run video:r2:upload:models
```

`R2_PUBLIC_BASE_URL` must be the public delivery URL for the bucket, such as a Remova-controlled custom domain. Do not use the S3/API endpoint ending in `.r2.cloudflarestorage.com` as the public base URL; that endpoint is for uploads and can return HTTP 400 in browsers.

After rendering new model videos, update `content/model-video-manifest.generated.ts` so production knows which uploaded slugs are available.

```bash
npm run video:manifest:models
```

## SEO

When the asset set exists, the model page automatically gets:

- `VideoObject` JSON-LD
- Open Graph video metadata
- Twitter image metadata using the poster
- `/video-sitemap.xml` entry with 36-second duration
- transcript and captions

The metadata is generated from `modelLandings`, `models`, and `applicationsForModel`, so new models do not need manual video copy unless their messaging needs custom treatment.
