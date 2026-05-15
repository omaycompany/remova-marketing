import { Metadata } from "next";
import { notFound } from "next/navigation";
import ModelLandingTemplate from "@/components/models/ModelLandingTemplate";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { modelLandings } from "@/content/model-landings";
import { getModelVideo } from "@/content/model-videos";
import { models } from "@/content/models";
import { getLegacyModelRedirect, legacyModelStaticParams } from "@/lib/legacy-redirects";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, legacyRedirectMetadata } from "@/lib/seo";

function trimForTitle(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

export async function generateStaticParams() {
    return [
        ...modelLandings.map((entry) => ({ slug: entry.slug })),
        ...legacyModelStaticParams,
    ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const landing = modelLandings.find((entry) => entry.slug === params.slug);
    const legacyRedirect = getLegacyModelRedirect(params.slug);
    if (!landing && legacyRedirect) return legacyRedirectMetadata(legacyRedirect);
    if (!landing) return {};

    const seoTitle = trimForTitle(landing.metaTitle, 80);
    const video = getModelVideo(landing.slug);
    const ogVideoUrl = video ? absoluteUrl(video.contentUrl) : undefined;
    const ogImage = video
        ? {
            url: absoluteUrl(video.thumbnailUrl),
            width: 1920,
            height: 1080,
            alt: video.title,
        }
        : DEFAULT_OG_IMAGE;

    return {
        title: { absolute: seoTitle },
        description: landing.metaDescription,
        keywords: buildKeywords([
            landing.heroTitle,
            landing.heroLabel,
            video?.title,
            ...(video?.keywords ?? []),
            "enterprise ai models",
            "llm model profile",
            "ai model governance"
        ]),
        openGraph: {
            title: seoTitle,
            description: landing.metaDescription,
            url: absoluteUrl(`/models/${landing.slug}`),
            siteName: SITE_NAME,
            images: [ogImage],
            videos: video && ogVideoUrl
                ? [
                    {
                        url: ogVideoUrl,
                        secureUrl: ogVideoUrl,
                        type: "video/mp4",
                        width: 1920,
                        height: 1080,
                    },
                ]
                : undefined,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: landing.metaDescription,
            images: [video ? absoluteUrl(video.thumbnailUrl) : DEFAULT_OG_IMAGE_URL],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: { canonical: `/models/${landing.slug}` },
    };
}

export default function ModelLandingPage({ params }: { params: { slug: string } }) {
    const landing = modelLandings.find((entry) => entry.slug === params.slug);
    const legacyRedirect = getLegacyModelRedirect(params.slug);
    if (!landing && legacyRedirect) return <LegacyRedirect to={legacyRedirect} />;
    if (!landing) notFound();

    const model = models.find((entry) => entry.id === landing.modelId);
    if (!model) notFound();

    const relatedCandidates = modelLandings
        .filter((entry) => entry.slug !== landing.slug)
        .map((entry) => {
            const candidateModel = models.find((modelEntry) => modelEntry.id === entry.modelId);
            if (!candidateModel) return null;
            return { landing: entry, model: candidateModel };
        })
        .filter(
            (
                entry
            ): entry is {
                landing: (typeof modelLandings)[number];
                model: (typeof models)[number];
            } => Boolean(entry)
        );

    const relatedLandings = [
        ...relatedCandidates.filter((entry) => entry.model.provider === model.provider),
        ...relatedCandidates.filter((entry) => entry.model.provider !== model.provider),
    ]
        .slice(0, 8)
        .map((entry) => ({ slug: entry.landing.slug, title: entry.landing.heroTitle }));

    const showChatSignup = landing.slug === "gpt-5-4";

    return (
        <ModelLandingTemplate
            model={model}
            landing={landing}
            relatedLandings={relatedLandings}
            showChatSignup={showChatSignup}
        />
    );
}
