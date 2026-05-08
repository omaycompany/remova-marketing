import { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyResourceRedirect, legacyResourceStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyResourceStaticParams;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyResourceRedirect(params.slug) ?? "/resources");
}

export default function LegacyResourcePage({ params }: { params: { slug: string } }) {
    return <LegacyRedirect to={getLegacyResourceRedirect(params.slug) ?? "/resources"} />;
}
