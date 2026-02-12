import { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/content/comparisons";
import { Scale, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Comparisons | Remova — Side-by-Side AI Platform Comparisons",
    description: "Detailed side-by-side comparisons of enterprise AI platforms. Head-to-head reviews and top 10 roundups for AI governance and safety.",
    openGraph: { title: "Comparisons | Remova", description: "Expert AI platform comparisons and reviews.", url: "https://remova.org/compare", siteName: "Remova", type: "website" },
    alternates: { canonical: "/compare" },
};

export default function ComparisonsIndex() {
    const roundup = comparisons.filter(c => c.type === 'roundup');
    const headToHead = comparisons.filter(c => c.type === 'head-to-head');
    const vsRemova = comparisons.filter(c => c.type === 'vs-remova');

    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Scale className="h-4 w-4" /> Expert Analysis
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Comparisons
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Unbiased, side-by-side analysis of enterprise AI platforms. From top 10 roundups to deep head-to-head reviews.
                    </p>
                </div>
            </section>

            {/* Roundup Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-12 text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white flex items-center gap-3">
                        <Zap className="h-6 w-6" /> Best-of Roundups
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {roundup.map((comp) => (
                            <Link key={comp.slug} href={`/compare/${comp.slug}`}
                                className="group p-8 rounded-3xl border-2 border-slate-900 dark:border-white hover:bg-slate-900 dark:hover:bg-white transition-all transform hover:-translate-y-1">
                                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black mb-4">
                                    {comp.headline}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-300 dark:group-hover:text-slate-600 mb-6">
                                    {comp.metaDescription}
                                </p>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black flex items-center gap-1">
                                    Read Guide <ArrowRight className="h-4 w-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Head-to-Head & VS Remova */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/[0.02]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Head-to-Head Reviews</h2>
                            <div className="space-y-4">
                                {headToHead.map((comp) => (
                                    <Link key={comp.slug} href={`/compare/${comp.slug}`}
                                        className="flex items-center justify-between p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] hover:border-slate-400 dark:hover:border-white/20 transition-all">
                                        <span className="font-bold text-slate-900 dark:text-white">{comp.headline}</span>
                                        <ArrowRight className="h-4 w-4 text-slate-400" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Remova vs Others</h2>
                            <div className="space-y-4">
                                {vsRemova.map((comp) => (
                                    <Link key={comp.slug} href={`/compare/${comp.slug}`}
                                        className="flex items-center justify-between p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] hover:border-slate-400 dark:hover:border-white/20 transition-all">
                                        <span className="font-bold text-slate-900 dark:text-white">{comp.headline}</span>
                                        <ArrowRight className="h-4 w-4 text-slate-400" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
