import { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/content/comparisons";
import { ArrowRight, Check, X, Scale, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, stripTitleSuffix } from "@/lib/seo";

export async function generateStaticParams() {
    return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const comp = comparisons.find((c) => c.slug === params.slug);
    if (!comp) return {};
    const title = stripTitleSuffix(comp.metaTitle);
    const description = comp.metaDescription;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/compare/${comp.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "website"
        },
        twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE_URL] },
        alternates: { canonical: `/compare/${comp.slug}` },
    };
}

export default function ComparePage({ params }: { params: { slug: string } }) {
    const comp = comparisons.find((c) => c.slug === params.slug);
    if (!comp) return <div>Not found</div>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": comp.headline,
        "description": comp.metaDescription,
        "mainEntityOfPage": absoluteUrl(`/compare/${comp.slug}`),
        "image": DEFAULT_OG_IMAGE_URL,
        "author": { "@type": "Organization", "name": "Remova" },
        "publisher": {
            "@type": "Organization",
            "name": "Remova",
            "logo": {
                "@type": "ImageObject",
                "url": absoluteUrl("/icon.png"),
            },
        }
    };

    // Default unique FAQs for comparisons
    const defaultFaqs = [
        {
            question: `How should we choose among the platforms listed?`,
            answer: `Start with the operating problem you are actually trying to solve: policy enforcement, access control, budgeting, oversight, deployment speed, or ecosystem fit. The right choice is the platform model that best matches your governance maturity, rollout complexity, and tolerance for manual control work.`
        },
        {
            question: `How does Remova compare to ${comp.contenders[0].name}?`,
            answer: `${comp.contenders[0].name} may be attractive for ${comp.contenders[0].strengths[0].toLowerCase()}, but Remova is built for buyers who care more about enforceable governance, department-level ownership, and operating consistency across teams than lowest-friction first use.`
        },
        {
            question: `Are these comparisons based on current data?`,
            answer: `Each comparison reflects the information available at publication time. Always verify current feature and pricing details directly in vendor documentation before procurement decisions.`
        }
    ];

    const displayFaqs = comp.faqs || defaultFaqs;
    const evaluationFramework = [
        {
            title: "Governance Depth",
            note: "Assess policy enforcement, access controls, and data handling guardrails in real workflows.",
        },
        {
            title: "Operational Scalability",
            note: "Check whether controls remain manageable as more teams and departments onboard.",
        },
        {
            title: "Financial Predictability",
            note: "Compare how clearly spend can be attributed, limited, and reviewed by function.",
        },
        {
            title: "Audit Readiness",
            note: "Validate evidence quality for investigations, compliance reviews, and executive reporting.",
        },
    ];
    const rolloutChecklist = [
        "Define must-have controls before procurement discussions.",
        "Run a scoped pilot with representative users and workflows.",
        "Measure control efficacy and operational overhead for each platform.",
        "Choose the platform with the best fit for governance maturity and rollout velocity.",
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
                        <Link href="/compare" className="hover:text-slate-900 transition-colors">Compare</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{comp.headline}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Scale className="h-4 w-4" />
                        <span className="tracking-wide uppercase">
                            {comp.type === "roundup" ? "Guide" : "Comparison"}
                        </span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.9]">
                        {comp.headline}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {comp.intro}
                    </p>

                    {/* TL;DR Section */}
                    <div className="mb-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 text-left">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{comp.type === "roundup" ? "This guide compares platform models, not just feature lists." : "This comparison is framed around operating fit, not surface-level convenience."}</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{comp.contenders.map(c => c.name).join(", ")} solve different parts of the enterprise AI problem and should be judged on governance depth as much as usability.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{comp.verdict}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contenders */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {comp.contenders.map((contender, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                                    {contender.name}
                                </h2>
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">Strengths</h3>
                                    <ul className="space-y-3">
                                        {contender.strengths.map((s, j) => (
                                            <li key={j} className="flex items-start gap-3 text-base font-bold text-slate-700 dark:text-slate-300">
                                                <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4">Weaknesses</h3>
                                    <ul className="space-y-3">
                                        {contender.weaknesses.map((w, j) => (
                                            <li key={j} className="flex items-start gap-3 text-base font-bold text-slate-500 dark:text-slate-400">
                                                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                                                <span>{w}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verdict */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                        The Verdict
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-3xl">
                        {comp.verdict}
                    </p>
                </div>
            </section>

            <LeadMagnetSection magnet="risk-test" />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                            Evaluation Framework
                        </h2>
                        <div className="space-y-5">
                            {evaluationFramework.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-slate-200 dark:border-white/10 p-5">
                                    <h3 className="mb-2 text-lg font-black text-slate-900 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
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
                </div>
            </section>

            <LeadMagnetSection magnet="adoption-plan" tone="slate" />

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Comparison FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        ENTERPRISE AI COMPARISON
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Use this comparison to choose the platform model that best matches your control requirements, rollout complexity, and governance maturity.
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
