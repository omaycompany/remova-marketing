import Link from "next/link";
import { AlertTriangle, ArrowRight, Check, ChevronRight, Gauge, Layers, Sparkles } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { ModelEntry } from "@/content/models";
import { ModelLanding } from "@/content/model-landings";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { absoluteUrl } from "@/lib/seo";

const fmtNumber = new Intl.NumberFormat("en-US");

function formatPrice(price: number) {
    return `$${price.toFixed(price < 1 ? 2 : 2)}`;
}

interface Props {
    model: ModelEntry;
    landing: ModelLanding;
    relatedLandings: { slug: string; title: string }[];
}

export default function ModelLandingTemplate({ model, landing, relatedLandings }: Props) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: landing.heroTitle,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: absoluteUrl(`/models/${landing.slug}`),
        description: landing.metaDescription,
        brand: { "@type": "Brand", name: model.provider },
    };

    return (
        <div className="flex flex-col">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href="/models" className="hover:text-slate-900 transition-colors">Models</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{landing.heroTitle}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Sparkles className="h-4 w-4" /> {landing.heroLabel}
                    </div>

                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        {landing.heroTitle}
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
                        {landing.heroSubtitle}
                    </p>
                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="mb-8 inline-block rounded-[2.5rem] bg-slate-900 dark:bg-white px-8 py-4 text-base font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95"
                    >
                        Try {landing.heroTitle} with your team
                    </ExternalAppLink>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Last reviewed: {landing.sourceCheckedAt}
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                        <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Context Window</div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">{fmtNumber.format(model.contextLength)}</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                        <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Input / 1M</div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">{formatPrice(model.inputPer1M)}</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                        <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Output / 1M</div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">{formatPrice(model.outputPer1M)}</div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="mb-6 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                            Why this model
                        </h2>
                        <p className="mb-8 text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                            {landing.providerSummary}
                        </p>
                        <ul className="space-y-4">
                            {landing.summaryPoints.map((point) => (
                                <li key={point} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-3xl border-2 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 p-8">
                        <h3 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                            <Gauge className="h-5 w-5" /> At a glance
                        </h3>
                        <dl className="space-y-4">
                            {landing.specNotes.map((spec) => (
                                <div key={spec.label} className="grid grid-cols-2 gap-4 border-b border-slate-200 dark:border-white/10 pb-3">
                                    <dt className="text-sm font-bold text-slate-500 dark:text-slate-400">{spec.label}</dt>
                                    <dd className="text-sm font-bold text-slate-900 dark:text-white text-right">{spec.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10">
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-8">
                        <h3 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Strengths</h3>
                        <ul className="space-y-4">
                            {landing.strengths.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300">
                                    <Check className="h-5 w-5 mt-0.5 text-emerald-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-8">
                        <h3 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">Tradeoffs</h3>
                        <ul className="space-y-4">
                            {landing.tradeoffs.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300">
                                    <AlertTriangle className="h-5 w-5 mt-0.5 text-amber-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                            Best for
                        </h2>
                        <ul className="space-y-4">
                            {landing.useCases.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <Layers className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                            Rollout checklist
                        </h2>
                        <ul className="space-y-4">
                            {landing.deploymentChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {relatedLandings.length > 0 && (
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="mb-3 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                            Related models
                        </h2>
                        <p className="mb-8 text-base font-medium text-slate-600 dark:text-slate-300">
                            Explore adjacent model profiles for routing and benchmarking decisions.
                        </p>
                        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedLandings.map((item) => (
                                <li key={item.slug}>
                                    <Link
                                        href={`/models/${item.slug}`}
                                        className="block rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <LeadMagnetSection magnet="use-case-selector" tone="slate" />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="mb-8 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        Tuning notes
                    </h2>
                    <div className="grid gap-4">
                        {landing.parameterNotes.map((item) => (
                            <article key={item.name} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-5">
                                <h3 className="mb-2 text-lg font-black text-slate-900 dark:text-white">{item.name}</h3>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.note}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="risk-test" />

            <FAQ title={`${landing.heroTitle} FAQs`} items={landing.faqs} />

            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        Deploy This Model With Governance
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Use policy controls, role-based access, and budget guardrails before enabling advanced model tiers at scale.
                    </p>
                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Try {landing.heroTitle} with your team <ArrowRight className="inline h-5 w-5 ml-2" />
                    </ExternalAppLink>
                </div>
            </section>
        </div>
    );
}
