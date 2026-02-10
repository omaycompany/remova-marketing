import { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/content/glossary";
import { ArrowRight, BookOpen } from "lucide-react";

export async function generateStaticParams() {
    return glossaryTerms.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const term = glossaryTerms.find((g) => g.slug === params.slug);
    if (!term) return {};
    return {
        title: term.metaTitle, description: term.metaDescription,
        openGraph: { title: term.metaTitle, description: term.metaDescription, url: `https://remova.org/glossary/${term.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title: term.metaTitle, description: term.metaDescription },
        alternates: { canonical: `/glossary/${term.slug}` },
    };
}

export default function GlossaryPage({ params }: { params: { slug: string } }) {
    const term = glossaryTerms.find((g) => g.slug === params.slug);
    if (!term) return <div>Not found</div>;

    const related = term.relatedTerms
        .map((slug) => glossaryTerms.find((g) => g.slug === slug))
        .filter(Boolean);

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <BookOpen className="h-4 w-4" />
                        <span className="tracking-wide uppercase">AI Glossary</span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl leading-[0.9]">
                        {term.term}
                    </h1>
                    <p className="max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {term.definition}
                    </p>
                </div>
            </section>

            {/* Explanation */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
                        In Depth
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {term.explanation}
                    </p>
                </div>
            </section>

            {/* Related Terms */}
            {related.length > 0 && (
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                            Related Terms
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {related.map((r) => r && (
                                <Link key={r.slug} href={`/glossary/${r.slug}`}
                                    className="p-6 rounded-2xl bg-white dark:bg-[#131314] border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-colors">
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{r.term}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{r.definition}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        See It in Action
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Experience enterprise AI governance firsthand with Remova.
                    </p>
                    <Link href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                        Start Free Trial <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
