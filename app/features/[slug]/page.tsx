import { Metadata } from "next";
import Link from "next/link";
import { features } from "@/content/features";
import { ArrowRight, Check, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, stripTitleSuffix } from "@/lib/seo";

export async function generateStaticParams() {
    return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const feature = features.find((f) => f.slug === params.slug);
    if (!feature) return {};
    const title = stripTitleSuffix(feature.metaTitle);
    const description = feature.metaDescription;
    return {
        title,
        description,
        keywords: buildKeywords([
            feature.title,
            feature.headline,
            "enterprise ai feature",
            "ai governance controls",
            "ai policy enforcement"
        ]),
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/features/${feature.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [DEFAULT_OG_IMAGE_URL],
        },
        alternates: { canonical: `/features/${feature.slug}` },
    };
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
    const feature = features.find((f) => f.slug === params.slug);
    if (!feature) return <div>Not found</div>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": feature.title,
        "description": feature.metaDescription,
        "brand": { "@type": "Brand", "name": "Remova" },
        "offers": {
            "@type": "Offer",
            "url": absoluteUrl(`/features/${feature.slug}`),
            "availability": "https://schema.org/InStock"
        }
    };

    // Default unique FAQs based on feature title if not provided
    const defaultFaqs = [
        {
            question: `How does Remova's ${feature.title} benefit my company?`,
            answer: `${feature.title} helps your company operationalize governance in a specific area instead of relying on policy documents and manual review alone. It is designed to make ${feature.subheadline.toLowerCase()} a repeatable system behavior across teams.`
        },
        {
            question: `Is ${feature.title} compatible with all AI models?`,
            answer: `Remova applies ${feature.title} controls across supported providers and models, so teams get consistent governance regardless of model choice.`
        },
        {
            question: `How quickly can we deploy ${feature.title}?`,
            answer: `Teams can deploy ${feature.title.toLowerCase()} quickly once ownership, policy defaults, and rollout scope are defined. The actual timeline depends less on setup effort and more on how clearly your organization has decided which workflows and departments should be governed first.`
        }
    ];

    const displayFaqs = feature.faqs || defaultFaqs;

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl("/") },
            { "@type": "ListItem", "position": 2, "name": "Features", "item": absoluteUrl("/features") },
            { "@type": "ListItem", "position": 3, "name": feature.title },
        ],
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": displayFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };
    const rolloutChecklist = [
        `Define policy scope and ownership for ${feature.title.toLowerCase()}.`,
        `Pilot ${feature.title.toLowerCase()} with one department and measure adoption quality.`,
        `Set alert thresholds for governance events and escalation workflows.`,
        `Review outcomes monthly and tune controls based on operational feedback.`,
    ];
    const operatingMetrics = [
        "Control adoption rate by team",
        "Policy or safety event volume trend",
        "Exception turnaround time",
        "Cost impact before vs after rollout",
    ];

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />

            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href="/features" className="hover:text-slate-900 transition-colors">Features</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{feature.title}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Zap className="h-4 w-4" />
                        <span className="tracking-wide uppercase">Feature</span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.9]">
                        {feature.headline}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {feature.subheadline}
                    </p>

                    {/* TL;DR Section */}
                    <div className="mb-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            {feature.benefits.slice(0, 3).map((b, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                    <span className="text-emerald-500 italic shrink-0">—</span>
                                    <span>{b}.</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Designed for governed enterprise AI usage.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            Sign Up
                        </ExternalAppLink>
                        <Link
                            href="/features"
                            className="rounded-[2.5rem] border-2 border-slate-200 dark:border-white/10 px-10 py-5 text-lg font-black text-slate-900 dark:text-white transition hover:bg-slate-50 dark:hover:bg-white/5 text-center"
                        >
                            See All Features
                        </Link>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                                How It Works
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                                Key Benefits
                            </h3>
                            <ul className="space-y-4">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <Check className="h-6 w-6 text-emerald-500 mt-0.5 shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="readiness-check" tone="slate" />

            {/* Use Cases */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-12 leading-[0.9]">
                        Use Cases
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {feature.useCases.map((useCase, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#131314] border border-slate-200 dark:border-white/10 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 h-3 w-3 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                                    <p className="text-base font-bold text-slate-700 dark:text-slate-300">{useCase}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                            Rollout Checklist
                        </h2>
                        <ul className="space-y-4">
                            {rolloutChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                            Metrics to Track
                        </h2>
                        <ul className="space-y-4">
                            {operatingMetrics.map((metric) => (
                                <li key={metric} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                                    <span>{metric}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="policy-generator" />

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title={`${feature.title} FAQs`} />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Deploy {feature.title.toLowerCase()} and related controls with Remova&apos;s enterprise AI governance platform.
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
