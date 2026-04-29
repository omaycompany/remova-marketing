#!/usr/bin/env node

import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "public/videos/models");
const manifestPath = join(process.cwd(), "content/model-video-manifest.generated.ts");

if (!existsSync(outputDir)) {
    console.error("Missing public/videos/models. Render model videos before updating the manifest.");
    process.exit(1);
}

const files = new Set(readdirSync(outputDir));
const slugs = Array.from(files)
    .filter((file) => file.endsWith(".mp4"))
    .map((file) => file.replace(/\.mp4$/, ""))
    .filter((slug) => files.has(`${slug}.png`) && files.has(`${slug}.vtt`))
    .sort((a, b) => a.localeCompare(b));

writeFileSync(
    manifestPath,
    [
        "// Generated from local public/videos/models assets.",
        "// Used to expose uploaded model videos from object storage during static builds.",
        "export const modelVideoSlugs = [",
        ...slugs.map((slug) => `    ${JSON.stringify(slug)},`),
        "] as const;",
        "",
    ].join("\n")
);

console.log(`Updated model video manifest with ${slugs.length} complete asset sets.`);
