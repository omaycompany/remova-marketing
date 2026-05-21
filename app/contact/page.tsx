import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Headphones, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import SafeEmailLink from "@/components/ui/SafeEmailLink";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, SITE_URL, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Contact Remova",
    description: "Contact Remova for enterprise AI workspace questions, pricing, security review, procurement, partnerships, and support.",
    keywords: buildKeywords([
        "contact remova",
        "remova contact",
        "remova support",
        "remova sales",
        "remova enterprise ai contact",
    ]),
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Remova",
        description: "Contact Remova for enterprise AI workspace questions, pricing, security review, procurement, partnerships, and support.",
        url: absoluteUrl("/contact"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Remova",
        description: "Contact Remova for enterprise AI workspace questions and security review.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
};

const contactOptions = [
    {
        title: "Sales and rollout",
        description: "Talk through pricing, model access, team rollout, and the right first workflows for Remova.",
        Icon: Building2,
        action: "Start workspace",
        href: "https://app.remova.org/register",
        external: true,
    },
    {
        title: "Security review",
        description: "Ask for security, privacy, procurement, data handling, and deployment review materials.",
        Icon: ShieldCheck,
        action: "Contact security",
        href: "email:security",
        external: false,
    },
    {
        title: "Customer support",
        description: "Get help with your Remova workspace, model routes, billing, or account questions.",
        Icon: Headphones,
        action: "Contact support",
        href: "email:support",
        external: false,
    },
];

export default function ContactPage() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#webpage`,
        "url": `${SITE_URL}/contact`,
        "name": "Contact Remova",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            <section className="border-b-2 border-slate-950 px-4 pb-20 pt-32 dark:border-white sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        <Mail className="h-4 w-4 text-emerald-500" />
                        Contact Remova
                    </div>
                    <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tight sm:text-7xl lg:text-8xl">
                        Talk to Remova.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        Use this page for enterprise AI workspace questions, procurement review, security requests, rollout planning, and account support.
                    </p>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
                    {contactOptions.map(({ title, description, Icon, action, href, external }) => (
                        <article key={title} className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
                            <Icon className="mb-5 h-8 w-8 text-emerald-500" />
                            <h2 className="text-2xl font-black uppercase tracking-tight">{title}</h2>
                            <p className="mt-4 min-h-24 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                {description}
                            </p>
                            {external ? (
                                <ExternalAppLink
                                    href={href}
                                    className="mt-6 inline-flex items-center text-sm font-black uppercase tracking-wide text-slate-950 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-300"
                                >
                                    {action}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </ExternalAppLink>
                            ) : (
                                <SafeEmailLink
                                    subject={title}
                                    body={`Hi Remova,\n\nI want help with ${title.toLowerCase()}.\n\nCompany:\nRole:\nQuestion:\n`}
                                    className="mt-6 inline-flex items-center text-sm font-black uppercase tracking-wide text-slate-950 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-300"
                                >
                                    {action}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </SafeEmailLink>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                            Faster routing
                        </p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            Send the context that helps us answer.
                        </h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {[
                            "Company size and departments that need AI access",
                            "Current tools such as ChatGPT, Claude, Gemini, Copilot, or APIs",
                            "Sensitive data classes that need protection",
                            "Security, privacy, or procurement review deadlines",
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#131314]">
                                <MessageSquare className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                <p className="font-bold leading-relaxed text-slate-700 dark:text-slate-200">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-slate-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
                            Learn first
                        </p>
                        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
                            New to Remova?
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/what-is-remova"
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-emerald-100"
                        >
                            What is Remova?
                        </Link>
                        <Link
                            href="/trust"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-white"
                        >
                            Trust center
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
