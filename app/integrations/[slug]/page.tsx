import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyIntegrationRedirect, legacyIntegrationStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

type IntegrationRouteProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return legacyIntegrationStaticParams;
}

export async function generateMetadata({ params }: IntegrationRouteProps): Promise<Metadata> {
    const { slug } = await params;
    return legacyRedirectMetadata(getLegacyIntegrationRedirect(slug) ?? "/features");
}

export default async function IntegrationLegacyPage({ params }: IntegrationRouteProps) {
    const { slug } = await params;
    return <LegacyRedirect to={getLegacyIntegrationRedirect(slug) ?? "/features"} />;
}
