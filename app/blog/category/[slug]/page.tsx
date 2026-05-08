import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyBlogCategoryRedirect, legacyBlogCategoryStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyBlogCategoryStaticParams;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyBlogCategoryRedirect(params.slug) ?? "/blog");
}

export default function BlogCategoryLegacyPage({ params }: { params: { slug: string } }) {
    return <LegacyRedirect to={getLegacyBlogCategoryRedirect(params.slug) ?? "/blog"} />;
}
