import { Metadata } from "next";
import { notFound } from "next/navigation";
import ModelLandingTemplate from "@/components/models/ModelLandingTemplate";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getModelLandingRedirect, modelLandingRedirectStaticParams, modelLandingSeoDescription, modelLandingSeoTitle, modelLandings } from "@/content/model-landings";
import { modelVideoSlugs } from "@/content/model-video-manifest.generated";
import { getModelVideo } from "@/content/model-videos";
import { models } from "@/content/models";
import { getLegacyModelRedirect, legacyModelStaticParams } from "@/lib/legacy-redirects";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, legacyRedirectMetadata } from "@/lib/seo";

function trimForTitle(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

const retiredModelVideoSlugSet = new Set<string>(modelVideoSlugs);

function getRetiredModelVideoRedirect(slug: string) {
    return retiredModelVideoSlugSet.has(slug) ? "/models" : undefined;
}

export async function generateStaticParams() {
    return Array.from(new Set([
        ...modelLandings.map((entry) => entry.slug),
        ...modelLandingRedirectStaticParams.map((entry) => entry.slug),
        ...legacyModelStaticParams.map((entry) => entry.slug),
        ...modelVideoSlugs,
    ])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const landing = modelLandings.find((entry) => entry.slug === params.slug);
    const modelLandingRedirect = getModelLandingRedirect(params.slug);
    const legacyRedirect = getLegacyModelRedirect(params.slug);
    const retiredVideoRedirect = getRetiredModelVideoRedirect(params.slug);
    if (!landing && modelLandingRedirect) return legacyRedirectMetadata(modelLandingRedirect);
    if (!landing && legacyRedirect) return legacyRedirectMetadata(legacyRedirect);
    if (!landing && retiredVideoRedirect) return legacyRedirectMetadata(retiredVideoRedirect);
    if (!landing) return {};

    const model = models.find((entry) => entry.id === landing.modelId);
    if (!model) return {};

    const seoTitle = trimForTitle(modelLandingSeoTitle(landing, model), 88);
    const seoDescription = modelLandingSeoDescription(landing, model);
    const video = getModelVideo(landing.slug);
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
        description: seoDescription,
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
            description: seoDescription,
            url: absoluteUrl(`/models/${landing.slug}`),
            siteName: SITE_NAME,
            images: [ogImage],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
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
    const modelLandingRedirect = getModelLandingRedirect(params.slug);
    const legacyRedirect = getLegacyModelRedirect(params.slug);
    const retiredVideoRedirect = getRetiredModelVideoRedirect(params.slug);
    if (!landing && modelLandingRedirect) return <LegacyRedirect to={modelLandingRedirect} />;
    if (!landing && legacyRedirect) return <LegacyRedirect to={legacyRedirect} />;
    if (!landing && retiredVideoRedirect) return <LegacyRedirect to={retiredVideoRedirect} />;
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

    return (
        <ModelLandingTemplate
            model={model}
            landing={landing}
            relatedLandings={relatedLandings}
            showChatSignup
        />
    );
}
