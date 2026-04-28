import { createReadStream, existsSync, readFileSync, writeFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { google } from "googleapis";
import { modelLandings } from "../content/model-landings";
import { models } from "../content/models";
import { buildModelVideo } from "../content/model-videos";

type UploadManifest = Record<string, {
    youtubeVideoId: string;
    youtubeUrl: string;
    uploadedAt: string;
    privacyStatus: string;
}>;

const oauthClientPath = process.env.YOUTUBE_OAUTH_CLIENT_FILE ?? join(process.cwd(), "youtube-oauth-client.json");
const oauthTokenPath = process.env.YOUTUBE_OAUTH_TOKEN_FILE ?? join(process.cwd(), "youtube-oauth-token.json");
const manifestPath = process.env.MODEL_YOUTUBE_MANIFEST_FILE ?? join(process.cwd(), "content/model-youtube-videos.generated.json");

function argValue(name: string) {
    const prefix = `${name}=`;
    const value = process.argv.find((arg) => arg.startsWith(prefix));
    return value ? value.slice(prefix.length) : undefined;
}

function hasFlag(name: string) {
    return process.argv.includes(name);
}

function readJson<T>(path: string, fallback: T): T {
    if (!existsSync(path)) return fallback;
    return JSON.parse(readFileSync(path, "utf8")) as T;
}

function writeJson(path: string, value: unknown) {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

function assetPath(slug: string, extension: "mp4" | "png" | "vtt") {
    return join(process.cwd(), "public/videos/models", `${slug}.${extension}`);
}

function requireFile(path: string, label: string) {
    if (!existsSync(path)) {
        throw new Error(`${label} not found at ${path}`);
    }
}

function getOAuthClient() {
    requireFile(oauthClientPath, "YouTube OAuth client JSON");
    requireFile(oauthTokenPath, "YouTube OAuth token JSON");

    const clientConfig = readJson<{
        installed?: { client_id: string; client_secret: string; redirect_uris?: string[] };
        web?: { client_id: string; client_secret: string; redirect_uris?: string[] };
    }>(oauthClientPath, {});
    const credentials = clientConfig.installed ?? clientConfig.web;
    if (!credentials) {
        throw new Error("OAuth client JSON must contain an installed or web client.");
    }

    const oauth2 = new google.auth.OAuth2(
        credentials.client_id,
        credentials.client_secret,
        credentials.redirect_uris?.[0] ?? "http://localhost"
    );
    oauth2.setCredentials(readJson(oauthTokenPath, {}));
    return oauth2;
}

function buildDescription(slug: string) {
    const landing = modelLandings.find((entry) => entry.slug === slug);
    const video = buildModelVideo(slug);
    if (!landing || !video) return "";

    return [
        video.description,
        "",
        `Watch the full model profile: https://www.remova.org/models/${slug}`,
        "Sign up for Remova: https://app.remova.org/register",
        "",
        "Remova helps teams use AI models with redaction, routing, budget controls, policy checks, and audit trails.",
        "",
        "Transcript:",
        video.transcript,
    ].join("\n");
}

async function uploadSlug(slug: string, privacyStatus: string, force: boolean) {
    const video = buildModelVideo(slug);
    const landing = modelLandings.find((entry) => entry.slug === slug);
    const model = landing ? models.find((entry) => entry.id === landing.modelId) : null;

    if (!video || !landing || !model) {
        throw new Error(`No model landing video metadata found for ${slug}`);
    }

    const mp4Path = assetPath(slug, "mp4");
    const posterPath = assetPath(slug, "png");
    requireFile(mp4Path, "MP4");
    requireFile(posterPath, "Poster");

    const manifest = readJson<UploadManifest>(manifestPath, {});
    if (!force && manifest[slug]?.youtubeVideoId) {
        console.log(`[youtube] Skipping ${slug}; already uploaded as ${manifest[slug].youtubeUrl}`);
        return;
    }

    const youtube = google.youtube({ version: "v3", auth: getOAuthClient() });
    const title = video.title.length > 100 ? video.title.slice(0, 97).trimEnd() + "..." : video.title;

    console.log(`[youtube] Uploading ${slug} as ${privacyStatus}`);
    const upload = await youtube.videos.insert({
        part: ["snippet", "status"],
        requestBody: {
            snippet: {
                title,
                description: buildDescription(slug),
                tags: video.keywords.slice(0, 15),
                categoryId: "28",
                defaultLanguage: "en",
                defaultAudioLanguage: "en",
            },
            status: {
                privacyStatus,
                selfDeclaredMadeForKids: false,
            },
        },
        media: {
            body: createReadStream(mp4Path),
        },
    });

    const youtubeVideoId = upload.data.id;
    if (!youtubeVideoId) {
        throw new Error(`YouTube upload did not return a video ID for ${slug}`);
    }

    console.log(`[youtube] Uploading thumbnail for ${slug}`);
    await youtube.thumbnails.set({
        videoId: youtubeVideoId,
        media: {
            body: createReadStream(posterPath),
        },
    });

    manifest[slug] = {
        youtubeVideoId,
        youtubeUrl: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        uploadedAt: new Date().toISOString(),
        privacyStatus,
    };
    writeJson(manifestPath, manifest);
    console.log(`[youtube] Uploaded ${slug}: ${manifest[slug].youtubeUrl}`);
}

async function main() {
    const onlySlug = argValue("--slug");
    const limit = Number(argValue("--limit") ?? "0");
    const privacyStatus = argValue("--privacy") ?? "private";
    const force = hasFlag("--force");
    const dryRun = hasFlag("--dry-run");

    if (!["private", "unlisted", "public"].includes(privacyStatus)) {
        throw new Error("--privacy must be private, unlisted, or public");
    }

    const targets = modelLandings
        .filter((landing) => !onlySlug || landing.slug === onlySlug)
        .filter((landing) => existsSync(assetPath(landing.slug, "mp4")) && existsSync(assetPath(landing.slug, "png")))
        .slice(0, limit > 0 ? limit : undefined);

    if (targets.length === 0) {
        console.log("[youtube] No rendered model videos found for the selected target.");
        return;
    }

    if (dryRun) {
        for (const { slug } of targets) {
            const video = buildModelVideo(slug);
            console.log(`[youtube] Would upload ${slug}: ${video?.title}`);
        }
        return;
    }

    for (const { slug } of targets) {
        await uploadSlug(slug, privacyStatus, force);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
