import { Metadata } from "next";
import Link from "next/link";
import { features } from "@/content/features";
import { ShieldCheck, ArrowRight } from "lucide-react";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Enterprise AI Features",
    description: "Explore Remova features for enterprise AI governance, policy controls, access management, and budget oversight.",
    openGraph: {
        title: "Enterprise AI Features",
        description: "Enterprise AI governance features for policy, access, and cost control.",
        url: absoluteUrl("/features"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise AI Features",
        description: "Enterprise AI governance features for policy, access, and cost control.",
        images: [DEFAULT_OG_IMAGE_URL]
    },
    alternates: { canonical: "/features" },
};

export default function FeaturesIndex() {
    const evaluationAreas = [
        {
            title: "Control Precision",
            text: "How specifically you can tune policy behavior by role, department, and workflow context.",
        },
        {
            title: "Operational Fit",
            text: "Whether teams can adopt controls without slowing core workflows or adding heavy manual overhead.",
        },
        {
            title: "Evidence Quality",
            text: "How clearly governance activity is captured for audits, incident response, and executive reviews.",
        },
        {
            title: "Cost Accountability",
            text: "How easily usage and spending can be attributed, limited, and reviewed at team level.",
        },
    ];

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
                        Tools for deploying AI with governance: policy controls, role-based operations, usage analytics, and cost management.
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

            <LeadMagnetSection magnet="readiness-check" tone="slate" />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        How to Evaluate AI Governance Features
                    </h2>
                    <p className="mb-10 max-w-3xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Strong feature lists are not enough. Focus on enforceability, rollout reliability, and measurable outcomes
                        so governance is useful in daily operations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {evaluationAreas.map((area) => (
                            <article
                                key={area.title}
                                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6"
                            >
                                <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">{area.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{area.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="policy-generator" />
        </div>
    );
}
