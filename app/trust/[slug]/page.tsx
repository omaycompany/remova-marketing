import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyTrustRedirect, legacyTrustStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyTrustStaticParams;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyTrustRedirect(params.slug) ?? "/privacy");
}

export default function TrustSlugLegacyPage({ params }: { params: { slug: string } }) {
    return <LegacyRedirect to={getLegacyTrustRedirect(params.slug) ?? "/privacy"} />;
}
