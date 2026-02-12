import { Metadata } from "next";
import Link from "next/link";
import { features } from "@/content/features";
import { ArrowRight, Check, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export async function generateStaticParams() {
    return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const feature = features.find((f) => f.slug === params.slug);
    if (!feature) return {};
    const title = `${feature.metaTitle} | AI for Companies`;
    const description = `Discover how ${feature.title} can secure your AI. Remova offers the best AI for companies with safety and cost control. ${feature.metaDescription}`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://remova.org/features/${feature.slug}`,
            siteName: "Remova",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
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
            "url": `https://remova.org/features/${feature.slug}`,
            "availability": "https://schema.org/InStock"
        }
    };

    // Default unique FAQs based on feature title if not provided
    const defaultFaqs = [
        {
            question: `How does Remova's ${feature.title} benefit my company?`,
            answer: `${feature.title} provides critical governance and safety by ${feature.subheadline.toLowerCase()}. It ensures that when your organization uses AI for companies, you maintain full control over security and costs.`
        },
        {
            question: `Is ${feature.title} compatible with all AI models?`,
            answer: `Yes. Remova's ${feature.title} layer works universally across 300+ models, including GPT-4o, Claude 3.5, and Gemini, ensuring consistent protection regardless of which AI provider you choose.`
        },
        {
            question: `How quickly can we deploy ${feature.title}?`,
            answer: `Deployment is near-instant. Once you've added your users to Remova, ${feature.title} is applied automatically to all AI interactions based on your department-level policies.`
        }
    ];

    const displayFaqs = feature.faqs || defaultFaqs;

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                                <span>Remova: The enterprise safety protocol for AI for companies.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://app.remova.org/register"
                            className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            Sign Up
                        </Link>
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

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title={`${feature.title} FAQs`} />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Deploy {feature.title.toLowerCase()} and other powerful tools with Remova&apos;s leading platform for AI for companies.
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
