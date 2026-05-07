import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { applicationsForModel } from "../content/model-applications";
import { modelLandings } from "../content/model-landings";
import { models } from "../content/models";
import { formatPublicModelPrice } from "../lib/model-pricing";

const outputDir = join(process.cwd(), "public/videos/models");
const propsDir = join(process.cwd(), ".remotion/model-video-props");
const renderPublicDir = join(process.cwd(), ".remotion/public-empty");
const frame = "945";
const renderTimeout = "300000";
const renderConcurrency = "2";

function argValue(name: string) {
    const prefix = `${name}=`;
    const value = process.argv.find((arg) => arg.startsWith(prefix));
    return value ? value.slice(prefix.length) : undefined;
}

function hasFlag(name: string) {
    return process.argv.includes(name);
}

function argList(name: string) {
    const value = argValue(name);
    if (!value) return [];
    return value
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
}

function modelReleasedAt(modelId: string) {
    return models.find((entry) => entry.id === modelId)?.releasedAt ?? "";
}

function needsModalitySpecificApplications(model: { name: string; summary: string; description?: string; modelType?: string; modality?: string; bestFor: string[]; inputModalities?: string[]; outputModalities?: string[] }) {
    const output = new Set(model.outputModalities ?? []);
    const input = new Set(model.inputModalities ?? []);
    const text = [
        model.name,
        model.summary,
        model.description,
        ...model.bestFor,
    ].filter(Boolean).join(" ").toLowerCase();
    const modelType = `${model.modelType ?? ""}`.toLowerCase();
    const modality = `${model.modality ?? ""}`.toLowerCase();

    return output.has("video")
        || output.has("image")
        || output.has("audio")
        || output.has("transcription")
        || (input.has("audio") && output.has("text"))
        || modelType.includes("video")
        || modelType.includes("image")
        || modelType.includes("audio")
        || modelType.includes("speech")
        || modelType.includes("tts")
        || modelType.includes("music")
        || modality.includes("->video")
        || modality.includes("->image")
        || modality.includes("->audio")
        || text.includes("transcription")
        || text.includes("transcribe")
        || text.includes("whisper")
        || text.includes("embed")
        || text.includes("rerank")
        || text.includes("retrieval");
}

function formatContextWindow(tokens: number) {
    if (tokens >= 1_000_000) return `${Math.round(tokens / 1_000_000)}M token context`;
    if (tokens >= 1_000) return `${Math.round(tokens / 1_000)}K token context`;
    return `${tokens.toLocaleString("en-US")} token context`;
}

function escapeVtt(value: string) {
    return value.replace(/\s+/g, " ").trim();
}

function shortApplicationDescription(value: string) {
    return value
        .replace(/\s+with\s+.+\.$/, ".")
        .replace(/\.$/, "")
        .slice(0, 112);
}

function run(command: string, args: string[]) {
    const result = spawnSync(command, args, {
        stdio: "inherit",
        cwd: process.cwd(),
        env: process.env,
    });

    if (result.status !== 0) {
        throw new Error(`${command} ${args.join(" ")} failed with exit code ${result.status ?? "unknown"}`);
    }
}

async function main() {
    await mkdir(outputDir, { recursive: true });
    await mkdir(propsDir, { recursive: true });
    await mkdir(renderPublicDir, { recursive: true });
    await mkdir(join(renderPublicDir, "images"), { recursive: true });
    await copyFile(
        join(process.cwd(), "public/images/remova logo (4).png"),
        join(renderPublicDir, "images/remova logo (4).png")
    );

    const onlySlug = argValue("--slug");
    const onlySlugs = argList("--slugs");
    const onlySlugSet = new Set(onlySlugs);
    const limit = Number(argValue("--limit") ?? "0");
    const force = hasFlag("--force");
    const latest = hasFlag("--latest");
    const missingOnly = hasFlag("--missing-only");
    const nonTextOnly = hasFlag("--non-text-only");

    const selectedLandings = [...modelLandings]
        .filter((landing) => !onlySlug || landing.slug === onlySlug)
        .filter((landing) => onlySlugSet.size === 0 || onlySlugSet.has(landing.slug))
        .sort((a, b) => {
            if (!latest) return 0;
            return modelReleasedAt(b.modelId).localeCompare(modelReleasedAt(a.modelId))
                || a.heroTitle.localeCompare(b.heroTitle);
        })
        .slice(0, limit > 0 ? limit : undefined);

    const targets = selectedLandings
        .map((landing) => {
            const model = models.find((entry) => entry.id === landing.modelId);
            return model ? { landing, model } : null;
        })
        .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
        .filter((entry) => !nonTextOnly || needsModalitySpecificApplications(entry.model));

    for (const { landing, model } of targets) {
        const mp4Path = join(outputDir, `${landing.slug}.mp4`);
        const posterPath = join(outputDir, `${landing.slug}.png`);
        const captionsPath = join(outputDir, `${landing.slug}.vtt`);

        const hasCompleteAssetSet = existsSync(mp4Path) && existsSync(posterPath) && existsSync(captionsPath);
        if (missingOnly && hasCompleteAssetSet) {
            console.log(`[video] Skipping ${landing.slug}; latest target already has complete assets.`);
            continue;
        }

        if (!force && hasCompleteAssetSet) {
            console.log(`[video] Skipping ${landing.slug}; assets already exist.`);
            continue;
        }

        const applications = applicationsForModel(model);
        const applicationLabels = applications.slice(0, 6).map((item) => item.title.toLowerCase()).join(", ");
        const props = {
            modelName: landing.heroTitle,
            headline: `${landing.heroTitle} for Enterprise AI`,
            subheadline: landing.heroSubtitle,
            contextWindow: formatContextWindow(model.contextLength),
            inputPrice: `${formatPublicModelPrice(model.inputPer1M)} / 1M input`,
            outputPrice: `${formatPublicModelPrice(model.outputPer1M)} / 1M output`,
            applicationItems: applications.slice(0, 6).map((application) => ({
                title: application.title,
                description: shortApplicationDescription(application.description),
                icon: application.icon,
                color: application.color,
            })),
        };
        const propsPath = join(propsDir, `${landing.slug}.json`);

        await writeFile(propsPath, JSON.stringify(props, null, 2));
        await writeFile(
            captionsPath,
            `WEBVTT

00:00.000 --> 00:09.000
${escapeVtt(`${landing.heroTitle} for enterprise AI. Remova routes model access and assistant workflows through governance controls.`)}

00:09.000 --> 00:18.000
${escapeVtt(`In the Remova interface, a user selects ${landing.heroTitle}, passes redaction, budget, and role checks, then runs safely.`)}

00:18.000 --> 00:27.000
${escapeVtt(`Teams can use ${landing.heroTitle} for ${applicationLabels}.`)}

00:27.000 --> 00:36.000
${escapeVtt(`Use ${landing.heroTitle} safely on Remova with redaction, routing, budgets, and audit trails. Sign up now.`)}
`
        );

        console.log(`[video] Rendering poster for ${landing.slug}`);
        run("npx", [
            "remotion",
            "still",
            "remotion/index.ts",
            "ModelLandingVideo",
            posterPath,
            `--frame=${frame}`,
            `--props=${propsPath}`,
            `--public-dir=${renderPublicDir}`,
            `--timeout=${renderTimeout}`,
        ]);

        console.log(`[video] Rendering MP4 for ${landing.slug}`);
        run("npx", [
            "remotion",
            "render",
            "remotion/index.ts",
            "ModelLandingVideo",
            mp4Path,
            `--props=${propsPath}`,
            `--public-dir=${renderPublicDir}`,
            `--timeout=${renderTimeout}`,
            `--concurrency=${renderConcurrency}`,
        ]);
    }

    console.log(`[video] Finished ${targets.length} model video target(s).`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
