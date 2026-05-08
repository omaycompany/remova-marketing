import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyIntegrationRedirect, legacyIntegrationStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyIntegrationStaticParams;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyIntegrationRedirect(params.slug) ?? "/features");
}

export default function IntegrationLegacyPage({ params }: { params: { slug: string } }) {
    return <LegacyRedirect to={getLegacyIntegrationRedirect(params.slug) ?? "/features"} />;
}
