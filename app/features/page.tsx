import { Metadata } from "next";
import Link from "next/link";
import { features } from "@/content/features";
import { ShieldCheck, ArrowRight, Lock, DollarSign, Users, Cpu } from "lucide-react";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import ItemListSchema from "@/components/seo/ItemListSchema";
import RelatedHubs from "@/components/seo/RelatedHubs";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Features — Safe, Governed AI for Every Team",
    description: "Give your teams access to the world's best AI models with data masking, cost controls, and safety built in. Frontier AI with on-prem security.",
    keywords: buildKeywords([
        "enterprise ai features",
        "ai data masking",
        "ai cost controls",
        "ai safety for business",
        "frontier ai models on-prem",
        "team ai workspaces",
    ]),
    openGraph: {
        title: "Features — Safe, Governed AI for Every Team",
        description: "Give your teams access to the world's best AI models with data masking, cost controls, and safety built in.",
        url: absoluteUrl("/features"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Features — Safe, Governed AI for Every Team",
        description: "Frontier AI models with data masking, cost controls, and safety built in for every department.",
        images: [DEFAULT_OG_IMAGE_URL]
    },
    alternates: { canonical: "/features" },
};

const featureItems = features.map((feature) => ({
    name: feature.title,
    url: absoluteUrl(`/features/${feature.slug}`),
}));

const relatedHubs = [
    { href: "/use-cases", label: "Use Cases" },
    { href: "/models", label: "Models" },
    { href: "/compare", label: "Compare" },
    { href: "/alternative", label: "Alternatives" },
    { href: "/glossary", label: "Glossary" },
    { href: "/blog", label: "Blog" },
];

export default function FeaturesIndex() {
    const pillars = [
        {
            icon: <Lock className="h-6 w-6" />,
            title: "Mask Sensitive Data",
            text: "Confidential information — names, financials, trade secrets — is automatically detected and masked before it reaches any AI model. Your data stays yours.",
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Keep AI Safe",
            text: "You set the rules for what AI can and can't do. Block risky outputs, flag borderline prompts, and let safe work flow through — all automatically.",
        },
        {
            icon: <DollarSign className="h-6 w-6" />,
            title: "Control Costs",
            text: "Set budgets per team, get alerts before they run out, and see exactly where every dollar goes. No more surprise AI bills.",
        },
        {
            icon: <Cpu className="h-6 w-6" />,
            title: "Frontier Models, On-Prem Safety",
            text: "Access GPT-4o, Claude, Gemini, and more — with every interaction governed, logged, and protected behind your organization's own safety layer.",
        },
    ];

    return (
        <div className="flex flex-col">
            <ItemListSchema name="Enterprise AI Features" items={featureItems} />

            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <ShieldCheck className="h-4 w-4" /> {features.length} Features
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        AI for Every Team.<br />Safe by Default.
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Give every department access to the world&apos;s best AI models — with sensitive data masked,
                        costs controlled, and safety rules enforced automatically. Frontier AI with the security of on-prem.
                    </p>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        What Makes Remova Different
                    </h2>
                    <p className="mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        We built Remova around four simple ideas that every company rolling out AI needs to get right.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {pillars.map((pillar) => (
                            <article
                                key={pillar.title}
                                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-8"
                            >
                                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white">
                                    {pillar.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">{pillar.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        Everything You Need to Roll Out AI Safely
                    </h2>
                    <p className="mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        From data protection to cost management — every feature is designed so your teams can use AI confidently, every day.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <Link key={f.slug} href={`/features/${f.slug}`}
                                className="group p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-lg bg-white dark:bg-white/[0.02]">
                                <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-3">{f.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">{f.subheadline}</p>
                                <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedHubs hubs={relatedHubs} />

            <LeadMagnetSection magnet="readiness-check" tone="slate" />

            {/* Why This Matters */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        Why Companies Choose Remova
                    </h2>
                    <p className="mb-10 max-w-3xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        The real question isn&apos;t whether your company should use AI — it&apos;s whether you can do it
                        without leaking data, overspending, or losing control. Here&apos;s what to look for.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Does it actually protect your data?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                Not just promises — does it detect and mask sensitive information before it reaches the AI model? Can you prove it in an audit?
                            </p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Can your teams actually use it?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                The best AI platform is useless if people avoid it. Look for something that fits into daily work without slowing anyone down.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Do you know what it costs?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                If you can&apos;t tell which team spent how much this month, you don&apos;t have cost control. You have a credit card bill.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Are you getting the best AI available?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                Settling for a weaker model because it&apos;s &ldquo;safer&rdquo; is a false trade-off. You should have frontier models with real safety controls.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="policy-generator" />
        </div>
    );
}
