import { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "@/content/alternatives";
import { Repeat, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Alternatives | AI for Companies — Compare & Choose",
    description: "Compare Remova vs. leading AI platforms. Discover the best solution for AI for companies, focusing on security, cost, and multi-model access.",
    openGraph: { title: "Alternatives | AI for Companies", description: "How Remova compares to leading platforms for AI for companies.", url: "https://remova.org/alternative", siteName: "Remova", type: "website" },
    alternates: { canonical: "/alternative" },
};

export default function AlternativesIndex() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Repeat className="h-4 w-4" /> Compare & Choose
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Alternatives
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        See how Remova compares to ChatGPT Enterprise, Microsoft Copilot, and other point solutions. Designed for organizations that need more than just a single model.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {alternatives.map((alt) => (
                            <Link key={alt.slug} href={`/alternative/${alt.slug}`}
                                className="group p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-xl bg-white dark:bg-white/[0.02]">
                                <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
                                    Remova vs. {alt.competitor}
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                                    {alt.metaDescription}
                                </p>
                                <div className="flex flex-col gap-2 mb-6">
                                    {alt.whySwitch.slice(0, 2).map((reason, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                                            <span className="text-red-500 font-bold shrink-0">✕</span>
                                            <span>{reason}</span>
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                                    Compare Side-by-Side <ArrowRight className="h-3.5 w-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
