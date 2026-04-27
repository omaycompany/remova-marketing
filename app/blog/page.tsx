import { Metadata } from "next";
import Link from "next/link";
import { allBlogPosts } from "@/content/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import ItemListSchema from "@/components/seo/ItemListSchema";
import RelatedHubs from "@/components/seo/RelatedHubs";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Enterprise AI Governance Blog",
    description: "Practical guides on AI governance, policy enforcement, security, and cost control for enterprise teams.",
    keywords: buildKeywords([
        "enterprise ai blog",
        "ai governance guides",
        "ai policy enforcement",
        "ai security operations",
        "ai cost management"
    ]),
    openGraph: {
        title: "Enterprise AI Governance Blog",
        description: "Practical guides on AI governance, policy enforcement, security, and cost control for enterprise teams.",
        url: absoluteUrl("/blog"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise AI Governance Blog",
        description: "Practical guides on AI governance, policy enforcement, security, and cost control for enterprise teams.",
        images: [DEFAULT_OG_IMAGE_URL]
    },
    alternates: { canonical: "/blog" },
};

const categories = Array.from(new Set(allBlogPosts.map(p => p.category)));
const relatedHubs = [
    { href: "/features", label: "Features" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/models", label: "Models" },
    { href: "/compare", label: "Compare" },
    { href: "/alternative", label: "Alternatives" },
    { href: "/glossary", label: "Glossary" },
];

const blogItems = allBlogPosts.map((post) => ({
    name: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
}));

export default function BlogIndex() {
    const editorialThemes = [
        "Practical governance playbooks for enterprise rollout teams",
        "Policy enforcement patterns that reduce manual overhead",
        "Budget and cost-governance frameworks for sustainable adoption",
        "Audit and compliance operating models for AI programs",
    ];

    return (
        <div className="flex flex-col">
            <ItemListSchema name="Enterprise AI Blog" items={blogItems} />

            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Blog
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Expert insights on AI for companies: governance, security, compliance, and cost management. {allBlogPosts.length} articles and growing.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl flex flex-wrap gap-3">
                    {categories.map(cat => (
                        <span key={cat} className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                            {cat}
                        </span>
                    ))}
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allBlogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}
                                className="group p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                        <Tag className="h-3 w-3" /> {post.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                                        <Clock className="h-3 w-3" /> {post.readTime}
                                    </span>
                                </div>
                                <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                                    {post.excerpt}
                                </p>
                                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read <ArrowRight className="h-3.5 w-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedHubs hubs={relatedHubs} />

            <LeadMagnetSection magnet="employee-safety-checklist" tone="slate" />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        Editorial Focus
                    </h2>
                    <ul className="space-y-4">
                        {editorialThemes.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <LeadMagnetSection magnet="policy-generator" />
        </div>
    );
}
