import { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "@/content/alternatives";
import { ArrowRight, Check, X, Zap, ChevronRight } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export async function generateStaticParams() {
    return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const alt = alternatives.find((a) => a.slug === params.slug);
    if (!alt) return {};
    const title = `${alt.metaTitle} | AI for Companies`;
    const description = `Looking for the best ${alt.competitor} alternative? Remova is the leading protocol for AI for companies. Secure, compliant, and cost-effective. ${alt.metaDescription}`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://remova.org/alternative/${alt.slug}`,
            siteName: "Remova",
            type: "website",
        },
        twitter: { card: "summary_large_image", title, description },
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
            answer: `Remova is designed specifically as an enterprise-grade protocol for AI for companies. Unlike generic consumers tools like ${alt.competitor}, we provide 300+ models, multi-vendor support, and built-in governance that ${alt.competitor} lacks.`
        },
        {
            question: `What is the main reason companies switch from ${alt.competitor} to Remova?`,
            answer: `The primary reason is ${alt.whySwitch[0].toLowerCase()}. Remova solves this by providing ${alt.removaAdvantages[0].title.toLowerCase()} and other security-first features that make AI adoption safe for the entire organization.`
        },
        {
            question: `Can I still use the same AI models I used on ${alt.competitor}?`,
            answer: `Yes, and many more. Remova provides access to GPT-4o, Claude 3.5, and 300+ other enterprise models through a single, secure interface, applying consistent safety protocols regardless of the model provider.`
        }
    ];

    const displayFaqs = alt.faqs || defaultFaqs;

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
                        Best {alt.headline}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        Looking for a better alternative to {alt.competitor}? Remova offers 300+ AI models with enterprise-grade governance, cost controls, and dual-layer guardrails.
                    </p>

                    {/* TL;DR Section */}
                    <div className="mb-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 text-left">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Remova is the leading alternative to {alt.competitor} for companies.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Get 300+ models, PII redaction, and granular cost controls.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>The definitive protocol for safe and compliant AI for companies.</span>
                            </li>
                        </ul>
                    </div>

                    <Link
                        href="https://app.remova.org/register"
                        className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 inline-block"
                    >
                        Switch to Remova
                    </Link>
                </div>
            </section>

            {/* About Competitor */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-8 leading-[0.9]">
                        About {alt.competitor}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-12">
                        {alt.competitorDescription}
                    </p>
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

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Switching FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        BEST AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Deploy Remova and get 300+ AI models with enterprise governance in minutes. The trusted platform for AI for companies.
                    </p>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Sign Up <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
