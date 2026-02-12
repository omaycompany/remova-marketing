import { Metadata } from "next";
import Link from "next/link";
import { useCases } from "@/content/use-cases";
import { ArrowRight, Briefcase, Building, Cog } from "lucide-react";

export const metadata: Metadata = {
    title: "Use Cases | Remova — Enterprise AI Governance by Industry & Role",
    description: "Explore how Remova solves AI governance challenges across 20 industries, 10 roles, and 10 functions. Find your use case.",
    openGraph: { title: "Use Cases | Remova", description: "Enterprise AI governance for every industry, role, and function.", url: "https://remova.org/use-cases", siteName: "Remova", type: "website" },
    alternates: { canonical: "/use-cases" },
};

const icons: Record<string, typeof Briefcase> = { industry: Building, role: Briefcase, function: Cog };

export default function UseCasesIndex() {
    const categories = Array.from(new Set(useCases.map(u => u.category)));

    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Use Cases
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        AI governance solutions for every industry, role, and business function. Find how Remova solves your specific challenges.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    {categories.map(cat => {
                        const items = useCases.filter(u => u.category === cat);
                        const Icon = icons[cat] || Briefcase;
                        return (
                            <div key={cat} className="mb-16">
                                <div className="flex items-center gap-3 mb-8">
                                    <Icon className="h-6 w-6 text-slate-900 dark:text-white" />
                                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">By {cat}</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {items.map(uc => (
                                        <Link key={uc.slug} href={`/use-cases/${uc.slug}`}
                                            className="group p-6 rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-lg bg-white dark:bg-white/[0.02]">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{uc.headline}</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{uc.subheadline}</p>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Explore <ArrowRight className="h-3.5 w-3.5" />
                                            </span>
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
