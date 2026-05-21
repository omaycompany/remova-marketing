import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Bot, Building2, FileClock, LockKeyhole, Route, ShieldCheck } from "lucide-react";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, SITE_URL, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "What Is Remova?",
    description: "Remova is an enterprise AI control layer for companies using ChatGPT, Claude, Gemini, and other AI models with data protection, access controls, audit trails, and budget ownership.",
    keywords: buildKeywords([
        "what is remova",
        "remova",
        "remova ai",
        "remova.org",
        "remova enterprise ai",
        "enterprise ai control layer",
        "ai governance platform",
    ]),
    alternates: {
        canonical: "/what-is-remova",
    },
    openGraph: {
        title: "What Is Remova?",
        description: "Remova is an enterprise AI control layer for companies using multiple AI models with policy controls, sensitive-data protection, access controls, audit visibility, and budget ownership.",
        url: absoluteUrl("/what-is-remova"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "What Is Remova?",
        description: "A clear explanation of Remova, the enterprise AI control layer for companies.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
};

const capabilities = [
    {
        title: "Approved Model Access",
        description: "Teams can use approved AI models from one workspace instead of buying and managing separate accounts.",
        Icon: Route,
    },
    {
        title: "Sensitive Data Protection",
        description: "Prompts and files can be checked for sensitive data before they reach an external model route.",
        Icon: LockKeyhole,
    },
    {
        title: "Role-Based Controls",
        description: "Admins can decide which teams, users, and workflows can use specific models and capabilities.",
        Icon: Building2,
    },
    {
        title: "Audit Evidence",
        description: "Security and compliance teams can review usage, policy events, model routes, and exceptions after the fact.",
        Icon: FileClock,
    },
];

const comparisons = [
    "Remova is not a luggage company.",
    "Remova is not a consumer background-removal app.",
    "Remova is not a foundation model provider.",
    "Remova is a company AI control layer for approved model access, data protection, audit evidence, and spend visibility.",
];

export default function WhatIsRemovaPage() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${SITE_URL}/what-is-remova#webpage`,
        "url": `${SITE_URL}/what-is-remova`,
        "name": "What Is Remova?",
        "description": metadata.description,
        "isPartOf": {
            "@id": `${SITE_URL}/#website`,
        },
        "mainEntity": {
            "@id": `${SITE_URL}/#software`,
        },
    };

    return (
        <main className="min-h-screen bg-white text-slate-950 transition-colors dark:bg-[#131314] dark:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />

            <section className="border-b-2 border-slate-950 px-4 pb-20 pt-32 dark:border-white sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        <BadgeCheck className="h-4 w-4 text-emerald-500" />
                        Remova brand profile
                    </div>
                    <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tight sm:text-7xl lg:text-8xl">
                        What Is Remova?
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        Remova is an enterprise AI control layer for companies that want employees to use ChatGPT, Claude, Gemini, and other approved AI models with policy controls, sensitive-data protection, role-based access, audit trails, and budget ownership.
                    </p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                        >
                            Start in Remova
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </ExternalAppLink>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-800 transition hover:border-slate-950 dark:border-white/20 dark:text-white dark:hover:border-white"
                        >
                            About Remova
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                            Plain-English definition
                        </p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            Remova sits between company AI usage and the models employees use.
                        </h2>
                    </div>
                    <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        <p>
                            Companies often adopt AI through many surfaces at once: chat assistants, APIs, copilots, coding tools, document workflows, customer support systems, and internal agents. That creates a control problem. Legal, security, IT, finance, and business owners need to know which tools are approved, which data can be used, which model routes are allowed, who has access, and what evidence exists later.
                        </p>
                        <p>
                            Remova gives companies one controlled place to route AI work, apply rules, protect sensitive data, review usage, and understand spend. It does not replace every AI model. It helps teams use approved models through a safer operating layer.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                                Core product
                            </p>
                            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                                What Remova helps teams do
                            </h2>
                        </div>
                        <Bot className="hidden h-14 w-14 text-emerald-500 sm:block" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {capabilities.map(({ title, description, Icon }) => (
                            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#131314]">
                                <Icon className="mb-5 h-7 w-7 text-emerald-500" />
                                <h3 className="text-xl font-black uppercase">{title}</h3>
                                <p className="mt-3 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                            Disambiguation
                        </p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            Remova is the AI company at remova.org.
                        </h2>
                    </div>
                    <ul className="space-y-4">
                        {comparisons.map((item) => (
                            <li key={item} className="flex gap-4 text-lg font-bold text-slate-700 dark:text-slate-200">
                                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-t-2 border-slate-950 px-4 py-20 dark:border-white sm:px-6 lg:px-8">
                <div className="container mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-slate-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                            Next step
                        </p>
                        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
                            See Remova as a company AI workspace.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/features"
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-emerald-100"
                        >
                            View features
                        </Link>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-white"
                        >
                            View pricing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
