import { Metadata } from "next";
import { BrainCircuit, CalendarDays, Layers, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/ui/FAQ";
import { models, modelsLastUpdated } from "@/content/models";

export const metadata: Metadata = {
    title: "Models | AI for Companies — Latest Enterprise Model Catalog",
    description: "Latest AI model snapshot for enterprise teams, including context windows, pricing, and best-fit use cases.",
    openGraph: {
        title: "Models | AI for Companies",
        description: "Current model landscape for enterprise AI deployment.",
        url: "https://remova.org/models",
        siteName: "Remova",
        type: "website",
    },
    alternates: { canonical: "/models" },
};

const fmtNumber = new Intl.NumberFormat("en-US");

function formatPrice(price: number) {
    return `$${price.toFixed(price < 1 ? 2 : 2)}`;
}

export default function ModelsPage() {
    const maxContext = Math.max(...models.map((m) => m.contextLength));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Enterprise AI Models",
        "numberOfItems": models.length,
        "itemListElement": models.map((model, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: model.name,
        })),
    };

    return (
        <div className="flex flex-col">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <BrainCircuit className="h-4 w-4" /> Latest Model Snapshot
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Models
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
                        A curated view of recently released production models for enterprise AI teams. Compare context limits,
                        cost profile, and best-fit workloads before rollout.
                    </p>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Snapshot updated: {modelsLastUpdated}
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                        <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Models Tracked</div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">{models.length}</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                        <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Largest Context</div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">{fmtNumber.format(maxContext)}</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                        <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">Most Recent Release</div>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">{models[0]?.releasedAt}</div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {models.map((model) => (
                        <article key={model.id} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                                    {model.provider}
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                                    <CalendarDays className="h-3.5 w-3.5" /> {model.releasedAt}
                                </span>
                            </div>
                            <h2 className="mb-3 text-xl font-black leading-tight text-slate-900 dark:text-white">{model.name}</h2>
                            <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{model.summary}</p>

                            <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                                <div className="rounded-xl border border-slate-200 dark:border-white/10 p-3">
                                    <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-slate-500">Context</div>
                                    <div className="font-bold text-slate-900 dark:text-white">{fmtNumber.format(model.contextLength)}</div>
                                </div>
                                <div className="rounded-xl border border-slate-200 dark:border-white/10 p-3">
                                    <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-slate-500">Input / 1M</div>
                                    <div className="font-bold text-slate-900 dark:text-white">{formatPrice(model.inputPer1M)}</div>
                                </div>
                                <div className="rounded-xl border border-slate-200 dark:border-white/10 p-3 col-span-2">
                                    <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-slate-500">Output / 1M</div>
                                    <div className="font-bold text-slate-900 dark:text-white">{formatPrice(model.outputPer1M)}</div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-500">Best For</div>
                                <ul className="space-y-2">
                                    {model.bestFor.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                            <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <FAQ
                title="Model Selection FAQs"
                items={[
                    {
                        question: "How should enterprise teams shortlist models?",
                        answer: "Start from workload requirements: reasoning depth, latency target, context window, tool-calling reliability, and budget envelope. Then run a controlled benchmark on your own prompts before broad rollout.",
                    },
                    {
                        question: "Should one model be used for everything?",
                        answer: "Usually no. Most teams run a model portfolio: one for high-quality reasoning, one for high-throughput tasks, and one for coding or workflow automation.",
                    },
                    {
                        question: "How often should we refresh the model set?",
                        answer: "For fast-moving AI operations, review model choices monthly and rerun focused evaluations when new frontier releases appear.",
                    },
                ]}
            />

            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        Govern Model Usage With Confidence
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Launch multi-model AI safely with centralized policy controls, role-based governance, and budget accountability.
                    </p>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Start Free <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
