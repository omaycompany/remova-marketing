export interface IndexedVideoEntry {
    pagePath: string;
    anchor: string;
    title: string;
    description: string;
    contentUrl: string;
    thumbnailUrl: string;
    duration: string;
    durationSeconds: number;
    uploadDate: string;
    transcript?: string;
    tags: string[];
}

export function durationToSeconds(duration: string) {
    const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
    if (!match) {
        throw new Error(`Unsupported ISO 8601 video duration: ${duration}`);
    }

    const [, hours = "0", minutes = "0", seconds = "0"] = match;
    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

export const featureHeroVideo: IndexedVideoEntry = {
    pagePath: "/features",
    anchor: "features-video",
    title: "Remova Features Overview",
    description:
        "A 30-second overview of Remova's governed AI workspace, showing model access, policy checks, analytics, routing, and zero data retention controls for enterprise teams.",
    contentUrl: "/videos/features-page-hero.mp4",
    thumbnailUrl: "/videos/features-page-hero-poster.png",
    duration: "PT30S",
    durationSeconds: 30,
    uploadDate: "2026-04-30",
    tags: [
        "Remova",
        "enterprise AI governance",
        "AI policy controls",
        "AI model routing",
        "AI audit trails",
    ],
};
