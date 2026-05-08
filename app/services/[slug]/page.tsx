import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyServiceRedirect, legacyServiceStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyServiceStaticParams;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyServiceRedirect(params.slug) ?? "/features/sensitive-data-protection");
}

export default function ServiceLegacyPage({ params }: { params: { slug: string } }) {
    return <LegacyRedirect to={getLegacyServiceRedirect(params.slug) ?? "/features/sensitive-data-protection"} />;
}
