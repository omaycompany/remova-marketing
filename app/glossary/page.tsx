import { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/content/glossary";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Glossary | Remova — Enterprise AI Terms Explained",
    description: "Comprehensive glossary of enterprise AI terms. Definitions for guardrails, PII redaction, LLMs, RAG, fine-tuning, prompt injection, and 50+ more concepts.",
    openGraph: { title: "AI Glossary | Remova", description: "60+ AI terms defined for enterprise teams.", url: "https://remova.org/glossary", siteName: "Remova", type: "website" },
    alternates: { canonical: "/glossary" },
};

export default function GlossaryIndex() {
    const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
    const letters = Array.from(new Set(sorted.map(t => t.term[0].toUpperCase()))).sort();

    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <BookOpen className="h-4 w-4" /> {glossaryTerms.length} Terms
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        AI Glossary
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Every enterprise AI term you need to know — defined clearly with practical context.
                    </p>
                </div>
            </section>

            {/* Letter Navigation */}
            <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5 sticky top-0 z-20 backdrop-blur-xl bg-white/80 dark:bg-[#131314]/80">
                <div className="container mx-auto max-w-5xl flex flex-wrap gap-2">
                    {letters.map(l => (
                        <a key={l} href={`#letter-${l}`} className="w-9 h-9 rounded-lg border border-slate-200 dark:border-white/10 flex items-center justify-center text-sm font-black text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                            {l}
                        </a>
                    ))}
                </div>
            </section>

            {/* Terms */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314]">
                <div className="container mx-auto max-w-5xl">
                    {letters.map(letter => {
                        const terms = sorted.filter(t => t.term[0].toUpperCase() === letter);
                        return (
                            <div key={letter} id={`letter-${letter}`} className="mb-12">
                                <h2 className="text-4xl font-black text-slate-200 dark:text-white/10 mb-6">{letter}</h2>
                                <div className="space-y-3">
                                    {terms.map(term => (
                                        <Link key={term.slug} href={`/glossary/${term.slug}`}
                                            className="group flex items-center justify-between p-5 rounded-xl border border-slate-100 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all hover:shadow-md bg-white dark:bg-white/[0.02]">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{term.term}</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{term.definition}</p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex-shrink-0 ml-4" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
