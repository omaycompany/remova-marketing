import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyServiceRedirect, legacyServiceStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

type ServiceRouteProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return legacyServiceStaticParams;
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
    const { slug } = await params;
    return legacyRedirectMetadata(getLegacyServiceRedirect(slug) ?? "/features/sensitive-data-protection");
}

export default async function ServiceLegacyPage({ params }: ServiceRouteProps) {
    const { slug } = await params;
    return <LegacyRedirect to={getLegacyServiceRedirect(slug) ?? "/features/sensitive-data-protection"} />;
}
