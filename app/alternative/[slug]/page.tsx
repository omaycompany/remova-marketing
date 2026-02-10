import { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "@/content/alternatives";
import { ArrowRight, Check, X, Zap } from "lucide-react";

export async function generateStaticParams() {
    return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const alt = alternatives.find((a) => a.slug === params.slug);
    if (!alt) return {};
    return {
        title: alt.metaTitle,
        description: alt.metaDescription,
        openGraph: {
            title: alt.metaTitle,
            description: alt.metaDescription,
            url: `https://remova.org/alternative/${alt.slug}`,
            siteName: "Remova",
            type: "website",
        },
        twitter: { card: "summary_large_image", title: alt.metaTitle, description: alt.metaDescription },
        alternates: { canonical: `/alternative/${alt.slug}` },
    };
}

export default function AlternativePage({ params }: { params: { slug: string } }) {
    const alt = alternatives.find((a) => a.slug === params.slug);
    if (!alt) return <div>Not found</div>;

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
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

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        Ready to switch?
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Deploy Remova and get 300+ AI models with enterprise governance in minutes. No long-term contracts required.
                    </p>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Start Free Trial <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
