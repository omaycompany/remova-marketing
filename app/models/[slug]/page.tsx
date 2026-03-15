import { Metadata } from "next";
import { notFound } from "next/navigation";
import ModelLandingTemplate from "@/components/models/ModelLandingTemplate";
import { modelLandings } from "@/content/model-landings";
import { models } from "@/content/models";

export async function generateStaticParams() {
    return modelLandings.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const landing = modelLandings.find((entry) => entry.slug === params.slug);
    if (!landing) return {};

    return {
        title: `${landing.metaTitle} | AI for Companies`,
        description: landing.metaDescription,
        openGraph: {
            title: landing.metaTitle,
            description: landing.metaDescription,
            url: `https://remova.org/models/${landing.slug}`,
            siteName: "Remova",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: landing.metaTitle,
            description: landing.metaDescription,
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
