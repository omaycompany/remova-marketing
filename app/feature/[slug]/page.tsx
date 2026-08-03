import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { legacyRedirectMetadata } from "@/lib/seo";

const singularFeatureSlugs = ["policy-guardrails", "retention-controls"] as const;

type SingularFeatureRouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return singularFeatureSlugs.map((slug) => ({ slug }));
}

function targetFor(slug: string) {
    return singularFeatureSlugs.includes(slug as (typeof singularFeatureSlugs)[number])
        ? `/features/${slug}`
        : "/features";
}

export async function generateMetadata({ params }: SingularFeatureRouteProps): Promise<Metadata> {
    const { slug } = await params;
    return legacyRedirectMetadata(targetFor(slug));
}

export default async function SingularFeatureLegacyPage({ params }: SingularFeatureRouteProps) {
    const { slug } = await params;
    return <LegacyRedirect to={targetFor(slug)} />;
}
