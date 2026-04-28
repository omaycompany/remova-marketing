# YouTube Model Video Uploads

The model video upload script sends rendered model videos to YouTube with metadata generated from the matching model landing page.

## Files

Local credential files are intentionally ignored by git:

- `youtube-oauth-client.json`
- `youtube-oauth-token.json`

The generated upload manifest is also ignored:

- `content/model-youtube-videos.generated.json`

Keep credentials and upload IDs out of commits unless the team explicitly decides to publish a sanitized manifest.

## Google setup

1. Create a Google Cloud project.
2. Enable the YouTube Data API v3.
3. Create an OAuth client for a desktop app.
4. Save the downloaded OAuth client JSON as `youtube-oauth-client.json` in the repo root.
5. Generate an OAuth token with the `https://www.googleapis.com/auth/youtube.upload` scope and save it as `youtube-oauth-token.json`.

The upload script expects a standard Google OAuth token JSON. The first token generation step is intentionally manual because it grants upload access to the YouTube channel.

## Commands

Preview what would upload:

```bash
npm run video:youtube:upload -- --dry-run
```

Upload one rendered model video as private:

```bash
npm run video:youtube:upload -- --slug=deepseek-v4-pro
```

Upload one rendered model video as unlisted:

```bash
npm run video:youtube:upload -- --slug=deepseek-v4-pro --privacy=unlisted
```

Upload a limited batch:

```bash
npm run video:youtube:upload -- --limit=10
```

Force re-upload a model that already exists in the local manifest:

```bash
npm run video:youtube:upload -- --slug=deepseek-v4-pro --force
```

## Safety defaults

Uploads default to `private`. Use `--privacy=unlisted` or `--privacy=public` only when the video and metadata have been reviewed. The script uploads the MP4 and then sets the rendered poster as the YouTube thumbnail.

The script only uploads videos that already have local rendered assets in `public/videos/models`.
