import { Metadata } from "next";
import Link from "next/link";
import { allBlogPosts } from "@/content/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | AI for Companies — Remova Enterprise Insights",
    description: "Expert insights on AI for companies, governance, security, and cost management. Technical guides and industry analysis for safe AI deployment.",
    openGraph: { title: "Blog | AI for Companies", description: "Expert insights on AI for companies, governance, and security.", url: "https://remova.org/blog", siteName: "Remova", type: "website" },
    alternates: { canonical: "/blog" },
};

const categories = Array.from(new Set(allBlogPosts.map(p => p.category)));

export default function BlogIndex() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Blog
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Expert insights on enterprise AI governance, security, compliance, and cost management. {allBlogPosts.length} articles and growing.
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
        </div>
    );
}
