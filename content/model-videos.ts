import { applicationsForModel } from "@/content/model-applications";
import { modelLandings } from "@/content/model-landings";
import { modelVideoSlugs } from "@/content/model-video-manifest.generated";
import { models } from "@/content/models";
import { videoAssetUrl } from "@/lib/video-assets";

export interface ModelVideo {
    slug: string;
    title: string;
    description: string;
    contentUrl: string;
    thumbnailUrl: string;
    captionsUrl: string;
    duration: string;
    durationSeconds: number;
    uploadDate: string;
    transcript: string;
    keywords: string[];
}

const durationSeconds = 36;
const uploadDate = "2026-04-28";
const uploadedModelVideoSlugs = new Set<string>(modelVideoSlugs);

function assetSetExists(slug: string) {
    return uploadedModelVideoSlugs.has(slug);
}

function modelVideoAssetUrl(slug: string, extension: "mp4" | "png" | "vtt") {
    return videoAssetUrl(`/videos/models/${slug}.${extension}`);
}

export function buildModelVideo(slug: string): ModelVideo | null {
    const landing = modelLandings.find((entry) => entry.slug === slug);
    if (!landing) return null;

    const model = models.find((entry) => entry.id === landing.modelId);
    if (!model) return null;

    const applications = applicationsForModel(model).slice(0, 6).map((application) => application.title.toLowerCase());
    const applicationText = applications.join(", ");

    return {
        slug,
        title: `Use ${landing.heroTitle} Safely on Remova`,
        description:
            `A 36-second overview showing how teams can select ${landing.heroTitle} inside Remova, pass policy checks, apply it to real-world work, and use advanced AI with redaction, routing, budgets, and audit trails.`,
        contentUrl: modelVideoAssetUrl(slug, "mp4"),
        thumbnailUrl: modelVideoAssetUrl(slug, "png"),
        captionsUrl: modelVideoAssetUrl(slug, "vtt"),
        duration: "PT36S",
        durationSeconds,
        uploadDate,
        transcript:
            `${landing.heroTitle} for enterprise AI. Remova routes model access, long-context analysis, and assistant workflows through governance controls. In the Remova interface, a user selects ${landing.heroTitle}, passes sensitive data redaction, budget threshold, and role access checks, then runs the request safely. Teams can use ${landing.heroTitle} for ${applicationText}. Use ${landing.heroTitle} safely on Remova with redaction, routing, budgets, and audit trails built in. Sign up now.`,
        keywords: [
            landing.heroTitle,
            `${landing.heroTitle} enterprise AI`,
            `${landing.heroTitle} governance`,
            "AI model governance",
            "safe AI deployment",
            "Remova",
            "AI routing",
            "AI policy controls",
        ],
    };
}

export const modelVideos: ModelVideo[] = modelLandings
    .map((landing) => buildModelVideo(landing.slug))
    .filter((video): video is ModelVideo => Boolean(video && assetSetExists(video.slug)));

export function getModelVideo(slug: string) {
    const video = buildModelVideo(slug);
    if (!video || !assetSetExists(slug)) return null;
    return video;
}
