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

    const seoTitle = `${trimForTitle(landing.heroTitle, 52)} | Remova`;

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

    return <ModelLandingTemplate model={model} landing={landing} />;
}
