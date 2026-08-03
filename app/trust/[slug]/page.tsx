import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyTrustRedirect, legacyTrustStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

type TrustRouteProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return legacyTrustStaticParams;
}

export async function generateMetadata({ params }: TrustRouteProps): Promise<Metadata> {
    const { slug } = await params;
    return legacyRedirectMetadata(getLegacyTrustRedirect(slug) ?? "/privacy");
}

export default async function TrustSlugLegacyPage({ params }: TrustRouteProps) {
    const { slug } = await params;
    return <LegacyRedirect to={getLegacyTrustRedirect(slug) ?? "/privacy"} />;
}
