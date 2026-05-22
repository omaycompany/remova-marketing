import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowRight, FileText, ShieldCheck } from "lucide-react";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { resourceGuides } from "@/content/resources";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Enterprise AI Resources and Docs",
    description: "Download practical Remova resources for AI governance, security review, procurement, and control scoping.",
    keywords: buildKeywords([
        "enterprise ai resources",
        "ai governance documents",
        "security review checklist",
        "ai policy generator",
    ]),
    openGraph: {
        title: "Enterprise AI Resources and Docs",
        description: "Practical Remova resources for AI governance, security review, procurement, and control scoping.",
        url: absoluteUrl("/resources"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise AI Resources and Docs",
        description: "Download practical Remova resources for governance, procurement, and security review.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
    alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
    return (
        <div className="flex flex-col bg-white dark:bg-[#131314]">
            <section className="relative px-4 pt-48 pb-16 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                        Remova resources
                    </p>
                    <h1 className="max-w-4xl text-5xl font-black tracking-tighter text-slate-950 dark:text-white sm:text-7xl">
                        Practical docs for AI governance and security review.
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        These are working documents, not brochureware: scope notes and review artifacts that help teams make a decision, map responsibilities, or document a control.
                    </p>
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-12 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                    {[
                        "Use the PDF when you need an offline packet for legal, operations, or procurement.",
                        "Use the landing page when you need the context, checklist, and related internal links.",
                        "Keep dates, owners, and review evidence with each control so follow-up does not become folklore.",
                    ].map((note) => (
                        <div key={note} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#131314]">
                            <ShieldCheck className="mb-4 h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                            <p className="text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">{note}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Library</p>
                            <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">Downloadable guides</h2>
                        </div>
                        <p className="max-w-md text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
                            Each guide has a short web version for scanning and a PDF for internal sharing.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {resourceGuides.map((resource) => (
                            <article key={resource.slug} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/30 sm:p-8">
                                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                                    <div>
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                                            <FileText className="h-6 w-6" />
                                        </div>
                                        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                                            {resource.eyebrow}
                                        </p>
                                        <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                                            {resource.title}
                                        </h3>
                                        <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-slate-600 dark:text-slate-300">
                                            {resource.description}
                                        </p>
                                        <p className="mt-4 text-sm font-bold text-slate-500 dark:text-slate-400">
                                            {resource.audience}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                        <Link
                                            href={`/resources/${resource.slug}`}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                        >
                                            Read guide
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                        <a
                                            href={resource.pdfPath}
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-700 transition hover:border-slate-950 hover:text-slate-950 dark:border-white/20 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
                                        >
                                            <ArrowDownToLine className="h-4 w-4" />
                                            PDF
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="policy-generator" tone="slate" />
        </div>
    );
}
