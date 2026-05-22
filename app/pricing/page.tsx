import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Coins, CreditCard, KeyRound, Layers3, Receipt, ShieldCheck, Wallet } from "lucide-react";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Remova Pricing",
    description: "Remova pricing starts at $50 per seat per month with a 10-seat minimum, monthly model credits, approved model access, policy controls, audit trails, optional $2,500/month concierge support, and private deployment estimates.",
    keywords: buildKeywords([
        "remova pricing",
        "remova price",
        "remova cost",
        "remova enterprise plan",
        "enterprise ai governance pricing",
        "ai control layer pricing",
    ]),
    alternates: {
        canonical: "/pricing",
    },
    openGraph: {
        title: "Remova Pricing",
        description: "Remova pricing for teams that need approved AI access, sensitive-data protection, audit trails, and department-level budget controls.",
        url: absoluteUrl("/pricing"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remova Pricing",
        description: "Pricing for Remova, the enterprise AI control layer for companies.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
};

const included = [
    "ChatGPT, Claude, Gemini, and other approved model routes",
    "Sensitive data detection and masking before AI model calls",
    "Policy guardrails for prompts, files, users, and workflows",
    "Role-based access controls for teams and departments",
    "Usage analytics and department-level budget visibility",
    "Audit trails for AI usage, policy events, and exceptions",
    "Bring-your-own provider keys with an active subscription",
];

const notes = [
    {
        title: "Model Credits",
        description: "Each monthly seat includes $50 in Remova model credits. Usage consumes credits at Remova model rates.",
        Icon: Wallet,
    },
    {
        title: "Minimum Seats",
        description: "The enterprise plan has a 10-seat minimum so teams can roll out controlled AI access with shared administration.",
        Icon: Layers3,
    },
    {
        title: "Budget Ownership",
        description: "Admins can understand usage by team and set budgets around the AI work that matters most.",
        Icon: Receipt,
    },
];

const optionalAddOns = [
    {
        title: "Monthly concierge",
        price: "$2,500 / month",
        description: "Strategic rollout support for workflow design, integration planning, adoption reviews, and model governance operations.",
        features: ["Dedicated AI strategy support", "Priority integration planning"],
    },
    {
        title: "On-prem AI setup",
        price: "Starting from $5,000 / month",
        description: "Private deployment planning for organizations that need dedicated infrastructure, local model serving, and tighter data-routing controls.",
        features: ["Private AI infrastructure planning", "Local model serving options"],
    },
];

export default function PricingPage() {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${absoluteUrl("/pricing")}#pricing`,
        "name": "Remova Enterprise Plan",
        "brand": {
            "@type": "Brand",
            "name": "Remova",
        },
        "description": metadata.description,
        "offers": {
            "@type": "Offer",
            "url": absoluteUrl("/pricing"),
            "price": "50",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "description": "$50 per seat per month with a 10-seat minimum. Includes monthly model credits.",
        },
    };

    return (
        <main className="min-h-screen bg-white text-slate-950 transition-colors dark:bg-[#131314] dark:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />

            <section className="border-b-2 border-slate-950 px-4 pb-20 pt-32 dark:border-white sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        <Coins className="h-4 w-4 text-emerald-500" />
                        Remova pricing
                    </div>
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                        <div>
                            <h1 className="text-5xl font-black uppercase tracking-tight sm:text-7xl">
                                Pricing for controlled company AI.
                            </h1>
                            <p className="mt-8 text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                Remova gives companies approved model access, sensitive-data protection, role access, audit visibility, and budget ownership in one enterprise AI workspace.
                            </p>
                        </div>
                        <div className="rounded-3xl border-2 border-slate-950 bg-slate-50 p-8 dark:border-white dark:bg-white/5">
                            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Enterprise plan</p>
                            <div className="mt-5 flex flex-wrap items-end gap-3">
                                <span className="text-7xl font-black tracking-tight">$50</span>
                                <span className="pb-3 text-xl font-black text-slate-500">/ seat / month</span>
                            </div>
                            <p className="mt-5 border-l-4 border-slate-950 pl-4 text-base font-black dark:border-white">
                                Minimum 10 seats required.
                            </p>
                            <ExternalAppLink
                                href="https://app.remova.org/register"
                                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                            >
                                Start in Remova
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </ExternalAppLink>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">Included</p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            What the enterprise plan includes
                        </h2>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-2">
                        {included.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-5 dark:border-white/10">
                                <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                <span className="font-bold leading-relaxed text-slate-700 dark:text-slate-200">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                            <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">How billing works</p>
                            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                                Seat price plus controlled usage.
                            </h2>
                        </div>
                        <CreditCard className="hidden h-14 w-14 text-emerald-500 sm:block" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {notes.map(({ title, description, Icon }) => (
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
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">Optional add-ons</p>
                        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl">
                            Deployment support when teams need more.
                        </h2>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {optionalAddOns.map((addOn) => (
                            <article key={addOn.title} className="rounded-3xl border border-slate-200 p-8 dark:border-white/10">
                                <h3 className="text-3xl font-black uppercase tracking-tight">{addOn.title}</h3>
                                <p className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white">{addOn.price}</p>
                                <p className="mt-5 font-medium leading-relaxed text-slate-600 dark:text-slate-300">{addOn.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {addOn.features.map((feature) => (
                                        <li key={feature} className="flex gap-3 text-sm font-bold leading-6 text-slate-700 dark:text-slate-200">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 p-8 dark:border-white/10">
                        <KeyRound className="mb-5 h-8 w-8 text-emerald-500" />
                        <h2 className="text-3xl font-black uppercase tracking-tight">Bring your own keys</h2>
                        <p className="mt-4 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            Companies can bring their own provider keys while still using Remova for workspace access, policy checks, sensitive-data protection, usage analytics, and audit records.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-8 dark:border-white/10">
                        <ShieldCheck className="mb-5 h-8 w-8 text-emerald-500" />
                        <h2 className="text-3xl font-black uppercase tracking-tight">Concierge support</h2>
                        <p className="mt-4 font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            Teams that want rollout help can add monthly concierge support at $2,500/month for strategy, workflow design, integration planning, and adoption reviews.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t-2 border-slate-950 px-4 py-20 dark:border-white sm:px-6 lg:px-8">
                <div className="container mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-slate-950 p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-300">Pricing question</p>
                        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
                            Need a deployment estimate?
                        </h2>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-emerald-100"
                        >
                            Start in Remova
                        </ExternalAppLink>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-white"
                        >
                            Contact Remova
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
