import { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "@/content/alternatives";
import { ArrowRight, Check, X, Zap, ChevronRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, stripTitleSuffix } from "@/lib/seo";

export async function generateStaticParams() {
    return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const alt = alternatives.find((a) => a.slug === params.slug);
    if (!alt) return {};
    const title = stripTitleSuffix(alt.metaTitle);
    const description = alt.metaDescription;
    return {
        title,
        description,
        keywords: buildKeywords([
            alt.headline,
            alt.competitor,
            "enterprise ai alternative",
            "ai governance alternative",
            "remova vs competitor"
        ]),
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/alternative/${alt.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "website",
        },
        twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE_URL] },
        alternates: { canonical: `/alternative/${alt.slug}` },
    };
}

export default function AlternativePage({ params }: { params: { slug: string } }) {
    const alt = alternatives.find((a) => a.slug === params.slug);
    if (!alt) return <div>Not found</div>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Remova - Alternative to ${alt.competitor}`,
        "description": alt.metaDescription,
        "brand": { "@type": "Brand", "name": "Remova" }
    };

    // Default unique FAQs for alternatives
    const defaultFaqs = [
        {
            question: `Is Remova really a better alternative to ${alt.competitor}?`,
            answer: `It is a better alternative when your requirements include department-level governance, consistent policy enforcement, and clearer operating ownership than ${alt.competitor} was designed to provide. If your need is only lightweight convenience, the answer may be different.`
        },
        {
            question: `What is the main reason companies switch from ${alt.competitor} to Remova?`,
            answer: `A common reason is ${alt.whySwitch[0].toLowerCase()}. Teams switch when that limitation stops being a minor annoyance and starts blocking controlled rollout, clearer ownership, or policy consistency across the organization.`
        },
        {
            question: `Can I still use the same AI models I used on ${alt.competitor}?`,
            answer: `Remova supports a broad model catalog through one governed interface, with consistent policy, access, and budget controls regardless of model selection.`
        }
    ];

    const displayFaqs = alt.faqs || defaultFaqs;
    const migrationPlan = [
        `Map current ${alt.competitor.toLowerCase()} workflows by team and risk level.`,
        "Define policy, access, and budget baselines before migration starts.",
        "Run a controlled pilot with clear success metrics and exception handling.",
        "Scale in phases and review governance outcomes every month.",
    ];
    const decisionSignals = [
        "Policy enforcement depth in real workflows",
        "Operational burden on admins and managers",
        "Cost ownership clarity at department level",
        "Audit and reporting quality for leadership reviews",
    ];

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href="/alternative" className="hover:text-slate-900 transition-colors">Alternatives</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">Vs {alt.competitor}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Zap className="h-4 w-4" />
                        <span className="tracking-wide uppercase">Alternative</span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.9]">
                        {alt.headline}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        If {alt.competitor} is no longer a fit for enterprise rollout, Remova gives teams a more structured way to govern access, policy, workflow controls, and cost ownership.
                    </p>

                    {/* TL;DR Section */}
                    <div className="mb-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 text-left">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{alt.competitor} may work for narrower usage, but teams usually switch when governance requirements outgrow the product model.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Remova combines broader model choice with policy, access, retention, and budget controls that scale across departments.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>This page focuses on the practical reasons buyers move when convenience is no longer enough.</span>
                            </li>
                        </ul>
                    </div>

                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 inline-block"
                    >
                        Switch to Remova
                    </ExternalAppLink>
                </div>
            </section>

            {/* About Competitor */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                        About {alt.competitor}
                    </h2>
                    <div className="space-y-4 mb-12">
                        {alt.competitorDescription.split('\n\n').map((paragraph, idx) => (
                             <p key={idx} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: paragraph }} />
                        ))}
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                        Common Reasons to Switch
                    </h3>
                    <ul className="space-y-4">
                        {alt.whySwitch.map((reason, i) => (
                            <li key={i} className="flex items-start gap-4 text-lg font-bold text-slate-600 dark:text-slate-400">
                                <X className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                                <span>{reason}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Remova Advantages */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-12 leading-[0.9]">
                        Why Choose Remova Over {alt.competitor}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {alt.removaAdvantages.map((adv, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white dark:bg-[#131314] border border-slate-200 dark:border-white/10 shadow-sm">
                                <div className="flex items-start gap-4 mb-4">
                                    <Check className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{adv.title}</h3>
                                </div>
                                <p className="text-base font-medium text-slate-600 dark:text-slate-400 ml-10">{adv.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="readiness-check" />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                            Decision Signals
                        </h2>
                        <ul className="space-y-4">
                            {decisionSignals.map((signal) => (
                                <li key={signal} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                                    <span>{signal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                            Migration Plan
                        </h2>
                        <ul className="space-y-4">
                            {migrationPlan.map((step) => (
                                <li key={step} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="adoption-plan" tone="slate" />

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Switching FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        ENTERPRISE AI GOVERNANCE
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Evaluate whether switching from {alt.competitor} is really about features or about needing a stronger operating model for AI adoption.
                    </p>
                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Sign Up <ArrowRight className="inline h-5 w-5 ml-2" />
                    </ExternalAppLink>
                </div>
            </section>
        </div>
    );
}
