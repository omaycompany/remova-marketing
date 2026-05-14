import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { keywordPostData, type KeywordPostData } from "../content/keyword-post-data";

const imageDir = join(process.cwd(), "public/images/blog");
const videoDir = join(process.cwd(), "public/videos/blog");
const propsDir = join(process.cwd(), ".remotion/blog-video-props");
const renderPublicDir = join(process.cwd(), ".remotion/public-empty");
const frame = "210";
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

function xmlEscape(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function escapeVtt(value: string) {
    return value.replace(/\s+/g, " ").trim();
}

function wrapWords(value: string, maxChars: number) {
    const words = value.replace(/\s+/g, " ").trim().split(" ");
    const lines: string[] = [];
    let current = "";

    for (const word of words) {
        const next = current ? `${current} ${word}` : word;
        if (next.length > maxChars && current) {
            lines.push(current);
            current = word;
        } else {
            current = next;
        }
    }

    if (current) lines.push(current);
    return lines;
}

function multilineText({
    value,
    x,
    y,
    maxChars,
    lineHeight,
    className,
}: {
    value: string;
    x: number;
    y: number;
    maxChars: number;
    lineHeight: number;
    className: string;
}) {
    const lines = wrapWords(value, maxChars);
    const tspans = lines
        .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${xmlEscape(line)}</tspan>`)
        .join("");
    return `<text class="${className}" x="${x}" y="${y}">${tspans}</text>`;
}

function metricCard(label: string, value: string, x: number, y: number, color: string) {
    return `
        <rect x="${x}" y="${y}" width="205" height="112" rx="18" fill="#ffffff" stroke="#dbe3ef" stroke-width="2"/>
        <text class="label" x="${x + 20}" y="${y + 36}">${xmlEscape(label)}</text>
        <text class="metric" x="${x + 20}" y="${y + 78}" fill="${color}">${xmlEscape(value)}</text>
    `;
}

function baseStyles() {
    return `
        <style>
            .eyebrow { font: 900 18px Inter, Arial, sans-serif; letter-spacing: 0; text-transform: uppercase; fill: #2563eb; }
            .title { font: 950 58px Inter, Arial, sans-serif; letter-spacing: 0; fill: #111827; }
            .subtitle { font: 750 25px Inter, Arial, sans-serif; fill: #334155; }
            .body { font: 700 22px Inter, Arial, sans-serif; fill: #475569; }
            .small { font: 800 18px Inter, Arial, sans-serif; fill: #64748b; }
            .label { font: 900 16px Inter, Arial, sans-serif; fill: #64748b; }
            .metric { font: 950 28px Inter, Arial, sans-serif; }
            .node { font: 950 23px Inter, Arial, sans-serif; fill: #111827; }
            .check { font: 800 21px Inter, Arial, sans-serif; fill: #334155; }
        </style>
        <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
                <path d="M 42 0 L 0 0 0 42" fill="none" stroke="#e8eef6" stroke-width="1"/>
            </pattern>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#0f172a" flood-opacity="0.13"/>
            </filter>
        </defs>
    `;
}

function buildHeroSvg(data: KeywordPostData) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${xmlEscape(data.title)}">
        ${baseStyles()}
        <rect width="1200" height="630" fill="#ffffff"/>
        <rect width="1200" height="630" fill="url(#grid)"/>
        <rect x="70" y="76" width="1060" height="478" rx="28" fill="#ffffff" stroke="#dbe3ef" stroke-width="2" filter="url(#shadow)"/>
        <text class="eyebrow" x="112" y="132">${xmlEscape(data.keyword)} / ${xmlEscape(data.category)}</text>
        ${multilineText({ value: data.title, x: 112, y: 208, maxChars: 30, lineHeight: 62, className: "title" })}
        ${multilineText({ value: data.angle, x: 112, y: 374, maxChars: 48, lineHeight: 34, className: "subtitle" })}
        ${metricCard("Monthly searches", data.volume.toLocaleString("en-US"), 112, 442, "#2563eb")}
        ${metricCard("CPC range", data.cpc, 347, 442, "#10b981")}
        ${metricCard("Competition", data.competition, 582, 442, "#f59e0b")}
        <rect x="838" y="440" width="230" height="54" rx="27" fill="#111827"/>
        <text x="868" y="475" style="font: 950 20px Inter, Arial, sans-serif; fill: #ffffff;">Sign up for Remova</text>
        <text class="small" x="838" y="526">Policy, redaction, access, budgets, and audit trails.</text>
    </svg>`;
}

function buildControlMapSvg(data: KeywordPostData) {
    const nodes = ["Input", "Policy", "Model", "Audit"];
    const nodeMarkup = nodes
        .map((node, index) => {
            const x = 95 + index * 270;
            const connector = index < nodes.length - 1 ? `<path d="M ${x + 190} 268 L ${x + 252} 268" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/><path d="M ${x + 246} 252 L ${x + 270} 268 L ${x + 246} 284" fill="none" stroke="#2563eb" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>` : "";
            return `
                <rect x="${x}" y="205" width="190" height="126" rx="22" fill="#f8fafc" stroke="#dbe3ef" stroke-width="2"/>
                <text class="node" x="${x + 95}" y="278" text-anchor="middle">${node}</text>
                ${connector}
            `;
        })
        .join("");

    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${xmlEscape(data.keyword)} control map">
        ${baseStyles()}
        <rect width="1200" height="630" fill="#ffffff"/>
        <rect width="1200" height="630" fill="url(#grid)"/>
        <rect x="70" y="70" width="1060" height="490" rx="28" fill="#ffffff" stroke="#dbe3ef" stroke-width="2" filter="url(#shadow)"/>
        <text class="eyebrow" x="112" y="126">Runtime control map</text>
        ${multilineText({ value: data.controlGoal, x: 112, y: 180, maxChars: 66, lineHeight: 33, className: "subtitle" })}
        ${nodeMarkup}
        <rect x="112" y="388" width="976" height="98" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
        <text class="label" x="142" y="426">Primary control</text>
        ${multilineText({ value: data.primaryControl, x: 142, y: 462, maxChars: 74, lineHeight: 29, className: "body" })}
    </svg>`;
}

function buildChecklistSvg(data: KeywordPostData) {
    const items = data.checklist.slice(0, 5);
    const itemMarkup = items
        .map((item, index) => {
            const y = 180 + index * 72;
            return `
                <circle cx="128" cy="${y - 8}" r="17" fill="#dcfce7" stroke="#86efac" stroke-width="2"/>
                <text x="128" y="${y - 2}" text-anchor="middle" style="font: 950 11px Inter, Arial, sans-serif; fill: #047857;">OK</text>
                ${multilineText({ value: item, x: 168, y, maxChars: 80, lineHeight: 26, className: "check" })}
            `;
        })
        .join("");

    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${xmlEscape(data.keyword)} implementation checklist">
        ${baseStyles()}
        <rect width="1200" height="630" fill="#ffffff"/>
        <rect width="1200" height="630" fill="url(#grid)"/>
        <rect x="70" y="70" width="1060" height="490" rx="28" fill="#ffffff" stroke="#dbe3ef" stroke-width="2" filter="url(#shadow)"/>
        <text class="eyebrow" x="112" y="126">Implementation checklist</text>
        ${multilineText({ value: data.title, x: 112, y: 164, maxChars: 50, lineHeight: 35, className: "subtitle" })}
        ${itemMarkup}
        <rect x="812" y="454" width="236" height="58" rx="29" fill="#111827"/>
        <text x="844" y="491" style="font: 950 20px Inter, Arial, sans-serif; fill: #ffffff;">Start in Remova</text>
    </svg>`;
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

async function writeAssets(data: KeywordPostData) {
    await writeFile(join(imageDir, `${data.slug}-hero.svg`), buildHeroSvg(data));
    await writeFile(join(imageDir, `${data.slug}-control-map.svg`), buildControlMapSvg(data));
    await writeFile(join(imageDir, `${data.slug}-checklist.svg`), buildChecklistSvg(data));

    await writeFile(
        join(videoDir, `${data.slug}.vtt`),
        `WEBVTT

00:00.000 --> 00:03.000
${escapeVtt(`${data.title}. ${data.keyword} has ${data.volume.toLocaleString("en-US")} monthly searches and clear enterprise intent.`)}

00:03.000 --> 00:06.000
${escapeVtt(`The primary control is ${data.primaryControl.toLowerCase()}: ${data.controlGoal}.`)}

00:06.000 --> 00:09.000
${escapeVtt(`Use Remova to enforce policy, redaction, access, budgets, and audit trails. Sign up today.`)}
`
    );

    await writeFile(
        join(propsDir, `${data.slug}.json`),
        JSON.stringify({
            keyword: data.keyword,
            title: data.title,
            volume: data.volume,
            cpc: data.cpc,
            competition: data.competition,
            angle: data.angle,
            controlGoal: data.controlGoal,
            primaryControl: data.primaryControl,
            checklist: data.checklist,
            metrics: data.metrics,
        }, null, 2)
    );
}

async function main() {
    await mkdir(imageDir, { recursive: true });
    await mkdir(videoDir, { recursive: true });
    await mkdir(propsDir, { recursive: true });
    await mkdir(renderPublicDir, { recursive: true });
    await mkdir(join(renderPublicDir, "images"), { recursive: true });
    await copyFile(
        join(process.cwd(), "public/images/remova logo (4).png"),
        join(renderPublicDir, "images/remova logo (4).png")
    );

    const onlySlug = argValue("--slug");
    const limit = Number(argValue("--limit") ?? "0");
    const force = hasFlag("--force");
    const missingOnly = hasFlag("--missing-only");
    const assetsOnly = hasFlag("--assets-only");

    const targets = keywordPostData
        .filter((data) => !onlySlug || data.slug === onlySlug)
        .slice(0, limit > 0 ? limit : undefined);

    for (const data of targets) {
        const mp4Path = join(videoDir, `${data.slug}.mp4`);
        const posterPath = join(videoDir, `${data.slug}.png`);
        const captionsPath = join(videoDir, `${data.slug}.vtt`);
        const propsPath = join(propsDir, `${data.slug}.json`);

        await writeAssets(data);

        if (assetsOnly) {
            console.log(`[blog-video] Wrote images, props, and captions for ${data.slug}.`);
            continue;
        }

        const hasCompleteAssetSet = existsSync(mp4Path) && existsSync(posterPath) && existsSync(captionsPath);
        if (missingOnly && hasCompleteAssetSet) {
            console.log(`[blog-video] Skipping ${data.slug}; video assets already exist.`);
            continue;
        }

        if (!force && hasCompleteAssetSet) {
            console.log(`[blog-video] Skipping ${data.slug}; video assets already exist.`);
            continue;
        }

        console.log(`[blog-video] Rendering poster for ${data.slug}`);
        run("npx", [
            "remotion",
            "still",
            "remotion/index.ts",
            "BlogKeywordVideo",
            posterPath,
            `--frame=${frame}`,
            `--props=${propsPath}`,
            `--public-dir=${renderPublicDir}`,
            `--timeout=${renderTimeout}`,
        ]);

        console.log(`[blog-video] Rendering MP4 for ${data.slug}`);
        run("npx", [
            "remotion",
            "render",
            "remotion/index.ts",
            "BlogKeywordVideo",
            mp4Path,
            `--props=${propsPath}`,
            `--public-dir=${renderPublicDir}`,
            `--timeout=${renderTimeout}`,
            `--concurrency=${renderConcurrency}`,
        ]);
    }

    console.log(`[blog-video] Finished ${targets.length} keyword blog target(s).`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
