import { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/content/resources";
import { ArrowRight, FileText, Download } from "lucide-react";

export const metadata: Metadata = {
    title: "Resources | Remova — Free Enterprise AI Governance Resources",
    description: "Free guides, checklists, templates, toolkits, and whitepapers for enterprise AI governance. Download and use immediately.",
    openGraph: { title: "Resources | Remova", description: "25 free enterprise AI governance resources.", url: "https://remova.org/resources", siteName: "Remova", type: "website" },
    alternates: { canonical: "/resources" },
};

const typeLabel: Record<string, string> = { guide: "Guide", checklist: "Checklist", template: "Template", whitepaper: "Whitepaper", toolkit: "Toolkit" };
const types = ["toolkit", "guide", "checklist", "template", "whitepaper"] as const;

export default function ResourcesIndex() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Download className="h-4 w-4" /> All Free
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Resources
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Free guides, checklists, templates, and toolkits for enterprise AI governance. Download and use immediately.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    {types.map(type => {
                        const items = resources.filter(r => r.type === type);
                        if (items.length === 0) return null;
                        return (
                            <div key={type} className="mb-16">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                                    {typeLabel[type]}s
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {items.map(item => (
                                        <Link key={item.slug} href={`/resources/${item.slug}`}
                                            className="group p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-lg bg-white dark:bg-white/[0.02]">
                                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                                <FileText className="h-3 w-3" /> {typeLabel[item.type]}
                                            </div>
                                            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-3 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{item.description}</p>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Get Free Access <ArrowRight className="h-3.5 w-3.5" />
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
