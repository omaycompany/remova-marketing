import { Metadata } from "next";
import Link from "next/link";
import { features } from "@/content/features";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Features | Remova — Enterprise AI Governance Platform",
    description: "Explore Remova's 35 enterprise AI features: PII redaction, dual-layer guardrails, cost controls, multi-model access, SSO, audit logs, and more.",
    openGraph: { title: "Features | Remova", description: "35+ enterprise AI governance features.", url: "https://remova.org/features", siteName: "Remova", type: "website" },
    alternates: { canonical: "/features" },
};

export default function FeaturesIndex() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <ShieldCheck className="h-4 w-4" /> {features.length} Features
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Features
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Every tool your enterprise needs to deploy AI safely: security, governance, cost controls, and multi-model access.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <Link key={f.slug} href={`/features/${f.slug}`}
                            className="group p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-lg bg-white dark:bg-white/[0.02]">
                            <h2 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-3">{f.title}</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">{f.description}</p>
                            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                Explore <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
