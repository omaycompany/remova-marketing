import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyCustomerRedirect, legacyCustomerStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyCustomerStaticParams;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyCustomerRedirect(params.slug) ?? "/use-cases");
}

export default function CustomerLegacyPage({ params }: { params: { slug: string } }) {
    return <LegacyRedirect to={getLegacyCustomerRedirect(params.slug) ?? "/use-cases"} />;
}
