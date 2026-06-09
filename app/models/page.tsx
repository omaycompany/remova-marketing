import { Metadata } from "next";
import { BrainCircuit, ArrowRight, CalendarDays, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { models, modelsLastUpdated, type ModelEntry } from "@/content/models";
import { modelLandings } from "@/content/model-landings";
import ModelsListView from "@/components/models/ModelsListView";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import ItemListSchema from "@/components/seo/ItemListSchema";
import RelatedHubs from "@/components/seo/RelatedHubs";
import modelCatalogReport from "@/docs/model-catalog-report.json";
import { displayBestFor } from "@/lib/model-best-for";
import { formatModelInputPriceDetail } from "@/lib/model-pricing";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Enterprise AI Model Catalog",
    description: "Compare context windows, pricing, and best-fit use cases to optimize your enterprise AI model rollout.",
    keywords: buildKeywords([
        "enterprise ai model catalog",
        "llm model comparison",
        "ai model pricing",
        "context window comparison",
        "enterprise model selection"
    ]),
    openGraph: {
        title: "Enterprise AI Model Catalog",
        description: "Compare context windows, pricing, and best-fit use cases to optimize your enterprise AI model rollout.",
        url: absoluteUrl("/models"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise AI Model Catalog",
        description: "Enterprise AI model catalog for context windows, pricing, and best-fit use cases.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
    alternates: { canonical: "/models" },
};

const modelItems = [...modelLandings]
    .sort((a, b) => a.heroTitle.localeCompare(b.heroTitle))
    .map((landing) => ({
        name: landing.heroTitle,
        url: absoluteUrl(`/models/${landing.slug}`),
    }));

const fmtNumber = new Intl.NumberFormat("en-US");

const modelById = new Map(models.map((model) => [model.id, model]));

function isModelEntry(model: ModelEntry | undefined): model is ModelEntry {
    return Boolean(model);
}

function formatSnapshotDate(value: string) {
    const [year, month, day] = value.split("-").map((part) => Number(part));
    if (!year || !month || !day) return value;

    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(Date.UTC(year, month - 1, day)));
}

function formatContext(model: ModelEntry) {
    if (model.contextLength <= 0) return "Usage-specific";
    return `${fmtNumber.format(model.contextLength)} context`;
}

function modelCategoryLabel(model: ModelEntry) {
    if (!model.modelType) return "Model";
    return model.modelType
        .split(/[-_]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

const newlyAddedModels = (modelCatalogReport.added as string[])
    .map((modelId) => modelById.get(modelId))
    .filter(isModelEntry)
    .sort((a, b) => {
        const dateComparison = b.releasedAt.localeCompare(a.releasedAt);
        if (dateComparison !== 0) return dateComparison;
        return a.name.localeCompare(b.name);
    })
    .slice(0, 8);

const relatedHubs = [
    { href: "/features", label: "Features" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/compare", label: "Compare" },
    { href: "/alternative", label: "Alternatives" },
    { href: "/glossary", label: "Glossary" },
    { href: "/blog", label: "Blog" },
];

export default function ModelsPage() {
    const landingByModelId = Object.fromEntries(modelLandings.map((landing) => [landing.modelId, landing.slug]));
    const sortedLandings = [...modelLandings].sort((a, b) => a.heroTitle.localeCompare(b.heroTitle));

    return (
        <div className="flex flex-col">
            <ItemListSchema name="Enterprise AI Model Catalog" items={modelItems} />

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
                </div>
            </section>

            {newlyAddedModels.length > 0 && (
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-700 dark:text-slate-300">
                                    <Sparkles className="h-4 w-4" /> Newly Added
                                </div>
                                <h2 className="mb-3 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.92]">
                                    Latest Models Added to the Catalog
                                </h2>
                                <p className="max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                    {modelCatalogReport.addedCount} models were added in the {formatSnapshotDate(modelsLastUpdated)} snapshot.
                                    Start here when evaluating new options for research, coding, media, and automation workflows.
                                </p>
                            </div>
                            <Link
                                href="#full-catalog"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-slate-900 dark:border-white px-5 py-3 text-sm font-black text-slate-900 dark:text-white transition-colors hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
                            >
                                Browse full catalog <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {newlyAddedModels.map((model) => {
                                const landingSlug = landingByModelId[model.id];
                                const bestFor = displayBestFor(model).slice(0, 2);

                                return (
                                    <article
                                        key={model.id}
                                        className="flex min-h-[24rem] flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] p-5"
                                    >
                                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                            <span className="rounded-full border border-slate-200 dark:border-white/10 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-slate-600 dark:text-slate-300">
                                                {model.provider}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                                                <CalendarDays className="h-3.5 w-3.5" /> {model.releasedAt}
                                            </span>
                                        </div>

                                        <div className="mb-2 text-xs font-black uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            {modelCategoryLabel(model)}
                                        </div>
                                        <h3 className="mb-3 text-xl font-black leading-tight text-slate-900 dark:text-white">
                                            {model.name}
                                        </h3>
                                        <p className="mb-5 line-clamp-4 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                            {model.summary}
                                        </p>

                                        <div className="mt-auto space-y-4">
                                            <div className="grid gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                                                <div className="rounded-xl border border-slate-200 dark:border-white/10 px-3 py-2">
                                                    {formatContext(model)}
                                                </div>
                                                <div className="rounded-xl border border-slate-200 dark:border-white/10 px-3 py-2">
                                                    {formatModelInputPriceDetail(model)}
                                                </div>
                                            </div>

                                            {bestFor.length > 0 && (
                                                <ul className="flex flex-wrap gap-2">
                                                    {bestFor.map((item) => (
                                                        <li
                                                            key={item}
                                                            className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-200"
                                                        >
                                                            <Layers className="h-3 w-3 text-slate-400" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {landingSlug ? (
                                                <Link
                                                    href={`/models/${landingSlug}`}
                                                    className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-black text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                                >
                                                    View model details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                                </Link>
                                            ) : (
                                                <div className="rounded-xl bg-slate-100 dark:bg-white/10 px-3 py-2 font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300">
                                                    {model.id}
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div id="full-catalog" className="scroll-mt-24">
                    <ModelsListView models={models} landingByModelId={landingByModelId} />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-3 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                        All Model Detail Pages
                    </h2>
                    <p className="mb-8 text-base font-medium text-slate-600 dark:text-slate-300">
                        Direct links to every model profile for research and side-by-side review.
                    </p>
                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {sortedLandings.map((landing) => (
                            <li key={landing.slug}>
                                <Link
                                    href={`/models/${landing.slug}`}
                                    className="block rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    {landing.heroTitle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <RelatedHubs hubs={relatedHubs} />

            <LeadMagnetSection magnet="cost-calculator" tone="slate" />

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

            <LeadMagnetSection magnet="risk-test" />

            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        Govern Model Usage With Confidence
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Launch multi-model AI safely with centralized policy controls, role-based governance, and budget accountability.
                    </p>
                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Use top models in your company <ArrowRight className="inline h-5 w-5 ml-2" />
                    </ExternalAppLink>
                </div>
            </section>
        </div>
    );
}
