import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { applicationsForModel } from "../content/model-applications";
import { modelLandings } from "../content/model-landings";
import { models } from "../content/models";
import { formatPublicModelPrice } from "../lib/model-pricing";

const outputDir = join(process.cwd(), "public/videos/models");
const propsDir = join(process.cwd(), ".remotion/model-video-props");
const frame = "945";

function argValue(name: string) {
    const prefix = `${name}=`;
    const value = process.argv.find((arg) => arg.startsWith(prefix));
    return value ? value.slice(prefix.length) : undefined;
}

function hasFlag(name: string) {
    return process.argv.includes(name);
}

function formatContextWindow(tokens: number) {
    if (tokens >= 1_000_000) return `${Math.round(tokens / 1_000_000)}M token context`;
    if (tokens >= 1_000) return `${Math.round(tokens / 1_000)}K token context`;
    return `${tokens.toLocaleString("en-US")} token context`;
}

function escapeVtt(value: string) {
    return value.replace(/\s+/g, " ").trim();
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

    const onlySlug = argValue("--slug");
    const limit = Number(argValue("--limit") ?? "0");
    const force = hasFlag("--force");

    const targets = modelLandings
        .filter((landing) => !onlySlug || landing.slug === onlySlug)
        .map((landing) => {
            const model = models.find((entry) => entry.id === landing.modelId);
            return model ? { landing, model } : null;
        })
        .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
        .slice(0, limit > 0 ? limit : undefined);

    for (const { landing, model } of targets) {
        const mp4Path = join(outputDir, `${landing.slug}.mp4`);
        const posterPath = join(outputDir, `${landing.slug}.png`);
        const captionsPath = join(outputDir, `${landing.slug}.vtt`);

        if (!force && existsSync(mp4Path) && existsSync(posterPath) && existsSync(captionsPath)) {
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
        ]);

        console.log(`[video] Rendering MP4 for ${landing.slug}`);
        run("npx", [
            "remotion",
            "render",
            "remotion/index.ts",
            "ModelLandingVideo",
            mp4Path,
            `--props=${propsPath}`,
        ]);
    }

    console.log(`[video] Finished ${targets.length} model video target(s).`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
