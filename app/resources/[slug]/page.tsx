import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, CheckCircle2, FileText } from "lucide-react";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getResourceGuide, resourceGuides } from "@/content/resources";
import { getLegacyResourceRedirect, legacyResourceStaticParams } from "@/lib/legacy-redirects";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return [
        ...resourceGuides.map((resource) => ({ slug: resource.slug })),
        ...legacyResourceStaticParams,
    ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const resource = getResourceGuide(params.slug);

    if (!resource) {
        return legacyRedirectMetadata(getLegacyResourceRedirect(params.slug) ?? "/resources");
    }

    return {
        title: resource.title,
        description: resource.metaDescription,
        keywords: buildKeywords([
            resource.title,
            resource.eyebrow,
            "enterprise ai resources",
            "privacy controls",
            "security review",
            "remova resources",
        ]),
        openGraph: {
            title: resource.title,
            description: resource.metaDescription,
            url: absoluteUrl(`/resources/${resource.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: resource.title,
            description: resource.metaDescription,
            images: [DEFAULT_OG_IMAGE_URL],
        },
        alternates: { canonical: `/resources/${resource.slug}` },
    };
}

export default function ResourceGuidePage({ params }: { params: { slug: string } }) {
    const resource = getResourceGuide(params.slug);

    if (!resource) {
        return <LegacyRedirect to={getLegacyResourceRedirect(params.slug) ?? "/resources"} />;
    }

    return (
        <div className="bg-white px-4 pb-20 pt-36 text-slate-950 dark:bg-[#131314] dark:text-white sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
                <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">
                    <ArrowLeft className="h-4 w-4" />
                    Resources
                </Link>

                <section className="border-b border-slate-200 pb-12 dark:border-white/10">
                    <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                        {resource.eyebrow}
                    </p>
                    <h1 className="max-w-4xl text-5xl font-black tracking-tighter sm:text-6xl">
                        {resource.title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        {resource.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                        <span className="rounded-full border border-slate-200 px-4 py-2 dark:border-white/10">{resource.readTime}</span>
                        <span className="rounded-full border border-slate-200 px-4 py-2 dark:border-white/10">{resource.audience}</span>
                    </div>
                    <a
                        href={resource.pdfPath}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                        <ArrowDownToLine className="h-4 w-4" />
                        {resource.pdfLabel}
                    </a>
                </section>

                <section className="grid gap-8 border-b border-slate-200 py-12 dark:border-white/10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight">What this resource covers</h2>
                    </div>
                    <ul className="space-y-4">
                        {resource.summary.map((item) => (
                            <li key={item} className="flex gap-3 text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-300" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="space-y-10 border-b border-slate-200 py-12 dark:border-white/10">
                    {resource.sections.map((section) => (
                        <article key={section.heading} className="max-w-3xl">
                            <h2 className="mb-3 text-2xl font-black tracking-tight">{section.heading}</h2>
                            <p className="text-base font-medium leading-8 text-slate-700 dark:text-slate-300">{section.body}</p>
                        </article>
                    ))}
                </section>

                <section className="grid gap-8 py-12 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-5 text-2xl font-black tracking-tight">Before you use the PDF</h2>
                        <ul className="space-y-4">
                            {resource.checklist.map((item) => (
                                <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                        <h2 className="mb-4 text-xl font-black tracking-tight">Related reading</h2>
                        <div className="space-y-3">
                            {resource.relatedLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-slate-400 hover:text-slate-950 dark:border-white/10 dark:bg-[#131314] dark:text-slate-300 dark:hover:border-white/30 dark:hover:text-white">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
