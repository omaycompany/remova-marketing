import type { Metadata } from "next";

export const SITE_NAME = "Remova";
export const SITE_URL = "https://www.remova.org";
export const SITE_LAST_UPDATED = "2026-03-25";

export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}/images/og-image.png`;
export const DEFAULT_OG_IMAGE = {
    url: DEFAULT_OG_IMAGE_URL,
    width: 1200,
    height: 630,
    alt: "Remova - Enterprise AI Control Layer",
} as const;

export function absoluteUrl(path: string) {
    return new URL(path, SITE_URL).toString();
}

export function buildKeywords(...groups: Array<Array<string | undefined>>): string[] {
    const seen = new Set<string>();
    for (const group of groups) {
        for (const value of group) {
            const normalized = (value ?? "").trim().toLowerCase();
            if (!normalized) continue;
            seen.add(normalized);
        }
    }
    return Array.from(seen);
}

export function stripTitleSuffix(value: string) {
    return value
        .replace(/\s+\|\s+AI for Companies$/i, "")
        .replace(/\s+[—-]\s+AI for Companies$/i, "")
        .replace(/\s+\|\s+Remova$/i, "")
        .trim();
}

export function dateFromIsoDate(value: string) {
    return new Date(`${value}T00:00:00.000Z`);
}

export const SITE_LAST_UPDATED_DATE = dateFromIsoDate(SITE_LAST_UPDATED);

export function legacyRedirectMetadata(canonicalPath: string): Metadata {
    return {
        robots: {
            index: false,
            follow: true,
            googleBot: {
                index: false,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: canonicalPath,
        },
    };
}
