import { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/content/comparisons";
import { ArrowRight, Check, X, Scale } from "lucide-react";

export async function generateStaticParams() {
    return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const comp = comparisons.find((c) => c.slug === params.slug);
    if (!comp) return {};
    return {
        title: comp.metaTitle,
        description: comp.metaDescription,
        openGraph: { title: comp.metaTitle, description: comp.metaDescription, url: `https://remova.org/compare/${comp.slug}`, siteName: "Remova", type: "website" },
        twitter: { card: "summary_large_image", title: comp.metaTitle, description: comp.metaDescription },
        alternates: { canonical: `/compare/${comp.slug}` },
    };
}

export default function ComparePage({ params }: { params: { slug: string } }) {
    const comp = comparisons.find((c) => c.slug === params.slug);
    if (!comp) return <div>Not found</div>;

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Scale className="h-4 w-4" />
                        <span className="tracking-wide uppercase">
                            {comp.type === "roundup" ? "Guide" : "Comparison"}
                        </span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.9]">
                        {comp.headline}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {comp.intro}
                    </p>
                </div>
            </section>

            {/* Contenders */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {comp.contenders.map((contender, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                                    {contender.name}
                                </h2>
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">Strengths</h3>
                                    <ul className="space-y-3">
                                        {contender.strengths.map((s, j) => (
                                            <li key={j} className="flex items-start gap-3 text-base font-bold text-slate-700 dark:text-slate-300">
                                                <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">Weaknesses</h3>
                                    <ul className="space-y-3">
                                        {contender.weaknesses.map((w, j) => (
                                            <li key={j} className="flex items-start gap-3 text-base font-bold text-slate-500 dark:text-slate-400">
                                                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                                                <span>{w}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verdict */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                        The Verdict
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-3xl">
                        {comp.verdict}
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        Try Remova Free
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        300+ AI models. Enterprise governance. Department cost controls. Deploy in minutes.
                    </p>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Start Now <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
