#!/usr/bin/env node

import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const envPath = join(root, ".env.local");

if (existsSync(envPath)) {
    const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
        const index = trimmed.indexOf("=");
        const key = trimmed.slice(0, index).trim();
        const value = trimmed.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
        if (!process.env[key]) process.env[key] = value;
    }
}

const required = [
    "R2_ACCOUNT_ID",
    "R2_BUCKET_NAME",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
    "R2_PUBLIC_BASE_URL",
];

const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
    console.error(`Missing required env vars: ${missing.join(", ")}`);
    console.error("Add them to .env.local for local uploads, or expose them to the GitHub Actions job.");
    process.exit(1);
}

const source = process.argv.includes("--models-only") ? "public/videos/models" : "public/videos";
const sourcePath = join(root, source);
if (!existsSync(sourcePath)) {
    console.error(`Missing source directory: ${source}`);
    process.exit(1);
}

const rcloneCheck = spawnSync("rclone", ["version"], { stdio: "ignore" });
if (rcloneCheck.status !== 0) {
    console.error("rclone is required for uploads. Install rclone, then rerun this command.");
    process.exit(1);
}

const tmp = mkdtempSync(join(tmpdir(), "remova-r2-"));
const configPath = join(tmp, "rclone.conf");
const endpoint = `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;

writeFileSync(
    configPath,
    [
        "[r2]",
        "type = s3",
        "provider = Cloudflare",
        `access_key_id = ${process.env.R2_ACCESS_KEY_ID}`,
        `secret_access_key = ${process.env.R2_SECRET_ACCESS_KEY}`,
        `endpoint = ${endpoint}`,
        "acl = private",
        "",
    ].join("\n")
);

const destinationPrefix = source === "public/videos/models" ? "videos/models" : "videos";
const publicBaseUrl = process.env.R2_PUBLIC_BASE_URL.replace(/\/+$/, "");
if (publicBaseUrl.includes(".r2.cloudflarestorage.com")) {
    console.warn("Warning: R2_PUBLIC_BASE_URL points to the R2 S3/API endpoint. Upload can still work, but browser playback needs a public bucket URL or custom domain.");
}

const args = [
    "copy",
    sourcePath,
    `r2:${process.env.R2_BUCKET_NAME}/${destinationPrefix}`,
    "--config",
    configPath,
    "--progress",
    "--transfers",
    "8",
    "--checkers",
    "16",
    "--s3-no-check-bucket",
    "--filter",
    "+ *.mp4",
    "--filter",
    "+ *.png",
    "--filter",
    "+ *.vtt",
    "--filter",
    "- *",
];

console.log(`Uploading ${source} to ${publicBaseUrl}/${destinationPrefix}/`);
const result = spawnSync("rclone", args, { stdio: "inherit" });
rmSync(tmp, { recursive: true, force: true });

if (result.status !== 0) {
    process.exit(result.status ?? 1);
}

console.log("Upload complete.");
