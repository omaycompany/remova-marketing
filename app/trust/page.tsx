import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Database, FileClock, KeyRound, LockKeyhole, Scale, ShieldCheck, UserCheck } from "lucide-react";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, SITE_URL, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Remova Trust Center",
    description: "Remova trust center for enterprise AI security, privacy, sensitive-data protection, role access, audit trails, model routing, and procurement review.",
    keywords: buildKeywords([
        "remova trust",
        "remova security",
        "remova privacy",
        "remova trust center",
        "remova procurement",
        "enterprise ai security",
    ]),
    alternates: {
        canonical: "/trust",
    },
    openGraph: {
        title: "Remova Trust Center",
        description: "Security, privacy, and procurement information for Remova, the enterprise AI control layer for companies.",
        url: absoluteUrl("/trust"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remova Trust Center",
        description: "Security, privacy, and procurement information for Remova.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
};

const trustAreas = [
    {
        title: "Sensitive data protection",
        description: "Remova can detect and mask sensitive data before AI requests reach external model routes.",
        Icon: LockKeyhole,
        href: "/features/sensitive-data-protection",
    },
    {
        title: "Role-based access",
        description: "Teams can control who can use specific models, workflows, and capabilities.",
        Icon: UserCheck,
        href: "/features/role-access-control",
    },
    {
        title: "Audit trails",
        description: "Usage, policy events, model routes, and exceptions can be preserved for review.",
        Icon: FileClock,
        href: "/features/audit-trails",
    },
    {
        title: "Model routing",
        description: "Companies can approve model routes by team, workflow, sensitivity, and cost profile.",
        Icon: KeyRound,
        href: "/models",
    },
];

const procurementPacket = [
    "DPA language and subprocessors for legal review",
    "Architecture overview and model-routing data flow",
    "Encryption, retention, redaction, and audit-record details",
    "Incident-response process and support escalation path",
    "Current SOC 2 status summary for buyer diligence",
    "Security questionnaire responses for procurement teams",
];

const controlDetails = [
    { title: "Data flow", text: "Prompts, files, logs, model routes, generated assets, and retention settings should be reviewed as one workflow.", Icon: Database },
    { title: "Access boundaries", text: "Role-based controls define who can use models, view audit evidence, manage budgets, and approve exceptions.", Icon: KeyRound },
    { title: "Evidence exports", text: "Audit records can support reviews of usage, policy decisions, model routes, sensitive-data events, and exceptions.", Icon: FileClock },
    { title: "Legal path", text: "Privacy, terms, DPA, subprocessors, and procurement questions route through explicit review channels.", Icon: Scale },
];

export default function TrustPage() {
    const trustSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/trust#webpage`,
        "url": `${SITE_URL}/trust`,
        "name": "Remova Trust Center",
        "description": metadata.description,
        "isPartOf": {
            "@id": `${SITE_URL}/#website`,
        },
        "about": {
            "@id": `${SITE_URL}/#organization`,
        },
    };

    return (
        <main className="min-h-screen bg-white text-slate-950 transition-colors dark:bg-[#131314] dark:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(trustSchema) }}
            />

            <section className="border-b-2 border-slate-950 px-4 pb-20 pt-32 dark:border-white sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        Remova trust center
                    </div>
                    <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tight sm:text-7xl lg:text-8xl">
                        Trust for company AI usage.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        Remova helps companies use AI with data protection, model access controls, role-based permissions, audit evidence, and budget visibility.
                    </p>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
                    {trustAreas.map(({ title, description, Icon, href }) => (
                        <Link
                            key={title}
                            href={href}
                            className="group rounded-3xl border border-slate-200 p-6 transition hover:border-slate-950 dark:border-white/10 dark:hover:border-white"
                        >
                            <Icon className="mb-5 h-8 w-8 text-emerald-500" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
                            <p className="mt-4 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                {description}
                            </p>
                            <span className="mt-6 inline-flex items-center text-sm font-black uppercase tracking-wide text-slate-950 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-300">
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                            Procurement review
                        </p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            Records buyers usually need.
                        </h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {controlDetails.map(({ title, text, Icon }) => (
                            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#131314]">
                                <Icon className="mb-4 h-6 w-6 text-emerald-500" />
                                <h3 className="text-lg font-black uppercase">{title}</h3>
                                <p className="mt-3 font-medium leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                            Review packet
                        </p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            Procurement materials buyers ask for.
                        </h2>
                        <p className="mt-5 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            The packet is scoped for vendor diligence and security review, so buyers can separate product controls, customer responsibilities, and deployment assumptions.
                        </p>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-2">
                        {procurementPacket.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-5 dark:border-white/10">
                                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                <span className="font-bold leading-relaxed text-slate-700 dark:text-slate-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-t border-slate-200 px-4 py-20 dark:border-white/10 sm:px-6 lg:px-8">
                <div className="container mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-slate-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                            Review packet
                        </p>
                        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
                            Need procurement details?
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/privacy"
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-emerald-100"
                        >
                            Privacy policy
                        </Link>
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-white"
                        >
                            Start in Remova
                        </ExternalAppLink>
                    </div>
                </div>
            </section>
        </main>
    );
}
