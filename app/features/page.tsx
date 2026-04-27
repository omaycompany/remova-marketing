import { Metadata } from "next";
import Link from "next/link";
import { features } from "@/content/features";
import { ShieldCheck, ArrowRight, Lock, DollarSign, Cpu } from "lucide-react";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import ItemListSchema from "@/components/seo/ItemListSchema";
import RelatedHubs from "@/components/seo/RelatedHubs";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Features — Safe AI for Every Team",
    description: "Give your teams access to frontier AI models with sensitive data masking, cost controls, and safety rules built in. On-prem level security.",
    keywords: buildKeywords([
        "enterprise ai features",
        "ai data masking",
        "ai cost controls",
        "ai safety for business",
        "frontier ai models enterprise",
        "team ai workspaces",
    ]),
    openGraph: {
        title: "Features — Safe AI for Every Team",
        description: "Frontier AI models with sensitive data masking, cost controls, and safety rules built in.",
        url: absoluteUrl("/features"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Features — Safe AI for Every Team",
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
            text: "Names, financials, internal identifiers. If it's in a prompt, Remova catches it and replaces it before the model sees it. Your data stays in your environment.",
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Keep AI Safe",
            text: "You set the rules: what's blocked, what's flagged, what goes through. The system enforces them on every interaction. Same rules, every team, every time.",
        },
        {
            icon: <DollarSign className="h-6 w-6" />,
            title: "Control Costs",
            text: "Each team gets a budget. You see what they spend. Alerts go out before the money runs out. If they hit the cap, usage stops. Done.",
        },
        {
            icon: <Cpu className="h-6 w-6" />,
            title: "Frontier Models, Your Rules",
            text: "GPT-4o, Claude, Gemini, Llama. Use any of them. Every message still goes through your company's masking, safety rules, and audit log.",
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
                        Give Your Teams AI.<br />Keep Everything Safe.
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Frontier AI models for every department. Sensitive data gets masked. Costs are tracked per team.
                        Safety rules apply to every interaction. All of it runs behind your own governance layer.
                    </p>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        Four Things That Matter
                    </h2>
                    <p className="mb-12 max-w-2xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Every company rolling out AI runs into the same problems. These are the four things you need to get right.
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
                        What&apos;s Included
                    </h2>
                    <p className="mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        From data masking to cost management to audit trails. Everything a company needs to roll out AI without the usual problems.
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

            <LeadMagnetSection magnet="cost-calculator" tone="slate" />

            {/* Why This Matters */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        The Questions That Actually Matter
                    </h2>
                    <p className="mb-10 max-w-3xl text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Before you pick an AI platform, ask yourself these. If the answer to any of them is &ldquo;I don&apos;t know,&rdquo; that&apos;s the problem.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Is confidential data actually protected?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                Not &ldquo;we have a policy&rdquo; protected. Actually masked at the prompt level, logged, and provable in an audit.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Can people actually use it every day?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                A tool that slows people down doesn&apos;t get used. It gets worked around. And that&apos;s how shadow AI starts.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Do you know what it costs per team?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                If you can&apos;t break down AI spend by department this month, you don&apos;t have cost control. You have a credit card bill.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-6">
                            <h3 className="mb-3 text-xl font-black text-slate-900 dark:text-white">Are you using the best models available?</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                Using a weaker model because the good ones feel risky is a bad trade. You should be able to use frontier models with real controls applied.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="policy-generator" />
        </div>
    );
}
