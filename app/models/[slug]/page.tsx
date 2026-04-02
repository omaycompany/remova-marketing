import { Metadata } from "next";
import { notFound } from "next/navigation";
import ModelLandingTemplate from "@/components/models/ModelLandingTemplate";
import { modelLandings } from "@/content/model-landings";
import { models } from "@/content/models";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo";

function trimForTitle(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

export async function generateStaticParams() {
    return modelLandings.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const landing = modelLandings.find((entry) => entry.slug === params.slug);
    if (!landing) return {};

    const seoTitle = trimForTitle(landing.metaTitle, 60);

    return {
        title: { absolute: seoTitle },
        description: landing.metaDescription,
        openGraph: {
            title: seoTitle,
            description: landing.metaDescription,
            url: absoluteUrl(`/models/${landing.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: landing.metaDescription,
            images: [DEFAULT_OG_IMAGE_URL],
        },
        alternates: { canonical: `/models/${landing.slug}` },
    };
}

export default function ModelLandingPage({ params }: { params: { slug: string } }) {
    const landing = modelLandings.find((entry) => entry.slug === params.slug);
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

    return <ModelLandingTemplate model={model} landing={landing} relatedLandings={relatedLandings} />;
}
