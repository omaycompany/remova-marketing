import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyCustomerRedirect, legacyCustomerStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

type CustomerRouteProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return legacyCustomerStaticParams;
}

export async function generateMetadata({ params }: CustomerRouteProps): Promise<Metadata> {
    const { slug } = await params;
    return legacyRedirectMetadata(getLegacyCustomerRedirect(slug) ?? "/use-cases");
}

export default async function CustomerLegacyPage({ params }: CustomerRouteProps) {
    const { slug } = await params;
    return <LegacyRedirect to={getLegacyCustomerRedirect(slug) ?? "/use-cases"} />;
}
