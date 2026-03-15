"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Layers, Search, SlidersHorizontal, X } from "lucide-react";
import type { ModelEntry } from "@/content/models";

interface ModelsListViewProps {
    models: ModelEntry[];
    landingByModelId: Record<string, string>;
}

const fmtNumber = new Intl.NumberFormat("en-US");
const MODELS_PER_PAGE = 12;

function formatPrice(price: number) {
    return `$${price.toFixed(price < 1 ? 2 : 2)}`;
}

function contextTierForModel(contextLength: number) {
    if (contextLength >= 1_000_000) return "ultra";
    if (contextLength >= 200_000) return "long";
    return "standard";
}

function priceTierForModel(inputPer1M: number) {
    if (inputPer1M <= 0.25) return "budget";
    if (inputPer1M <= 2) return "balanced";
    return "premium";
}

export default function ModelsListView({ models, landingByModelId }: ModelsListViewProps) {
    const [search, setSearch] = useState("");
    const [provider, setProvider] = useState("all");
    const [contextTier, setContextTier] = useState("all");
    const [priceTier, setPriceTier] = useState("all");
    const [landingFilter, setLandingFilter] = useState("all");
    const [page, setPage] = useState(1);

    const providers = useMemo(
        () => Array.from(new Set(models.map((model) => model.provider))).sort((a, b) => a.localeCompare(b)),
        [models]
    );

    const filteredModels = useMemo(() => {
        const searchTerm = search.trim().toLowerCase();

        return models.filter((model) => {
            if (provider !== "all" && model.provider !== provider) return false;
            if (contextTier !== "all" && contextTierForModel(model.contextLength) !== contextTier) return false;
            if (priceTier !== "all" && priceTierForModel(model.inputPer1M) !== priceTier) return false;
            if (landingFilter === "with-landing" && !landingByModelId[model.id]) return false;

            if (!searchTerm) return true;

            const haystack = [
                model.name,
                model.id,
                model.provider,
                model.summary,
                model.bestFor.join(" "),
            ]
                .join(" ")
                .toLowerCase();

            return haystack.includes(searchTerm);
        });
    }, [contextTier, landingByModelId, landingFilter, models, priceTier, provider, search]);

    const hasActiveFilters =
        search.trim().length > 0 ||
        provider !== "all" ||
        contextTier !== "all" ||
        priceTier !== "all" ||
        landingFilter !== "all";

    const totalPages = Math.max(1, Math.ceil(filteredModels.length / MODELS_PER_PAGE));
    const pageStart = (page - 1) * MODELS_PER_PAGE;
    const pageEnd = Math.min(pageStart + MODELS_PER_PAGE, filteredModels.length);
    const visibleModels = filteredModels.slice(pageStart, pageStart + MODELS_PER_PAGE);

    useEffect(() => {
        setPage(1);
    }, [search, provider, contextTier, priceTier, landingFilter]);

    useEffect(() => {
        if (page > totalPages) {
            setPage(totalPages);
        }
    }, [page, totalPages]);

    return (
        <div className="container mx-auto max-w-6xl">
            <div className="mb-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-700 dark:text-slate-300">
                    <SlidersHorizontal className="h-4 w-4" /> Search and Filters
                </div>

                <div className="grid gap-4 lg:grid-cols-5">
                    <div className="relative lg:col-span-2">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search model name, provider, ID, use cases..."
                            className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] py-2.5 pl-9 pr-3 text-sm font-medium text-slate-900 dark:text-white outline-none transition focus:border-slate-400 dark:focus:border-white/30"
                        />
                    </div>

                    <select
                        value={provider}
                        onChange={(event) => setProvider(event.target.value)}
                        className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white outline-none transition focus:border-slate-400 dark:focus:border-white/30"
                    >
                        <option value="all">All providers</option>
                        {providers.map((providerName) => (
                            <option key={providerName} value={providerName}>
                                {providerName}
                            </option>
                        ))}
                    </select>

                    <select
                        value={contextTier}
                        onChange={(event) => setContextTier(event.target.value)}
                        className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white outline-none transition focus:border-slate-400 dark:focus:border-white/30"
                    >
                        <option value="all">Any context</option>
                        <option value="ultra">Ultra (1M+)</option>
                        <option value="long">Long (200K-999K)</option>
                        <option value="standard">Standard (&lt;200K)</option>
                    </select>

                    <select
                        value={priceTier}
                        onChange={(event) => setPriceTier(event.target.value)}
                        className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white outline-none transition focus:border-slate-400 dark:focus:border-white/30"
                    >
                        <option value="all">Any price tier</option>
                        <option value="budget">Budget (≤ $0.25 / 1M input)</option>
                        <option value="balanced">$0.26-$2 / 1M input</option>
                        <option value="premium">&gt; $2 / 1M input</option>
                    </select>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <select
                        value={landingFilter}
                        onChange={(event) => setLandingFilter(event.target.value)}
                        className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white outline-none transition focus:border-slate-400 dark:focus:border-white/30"
                    >
                        <option value="all">All models</option>
                        <option value="with-landing">Has landing page</option>
                    </select>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setProvider("all");
                                setContextTier("all");
                                setPriceTier("all");
                                setLandingFilter("all");
                                setPage(1);
                            }}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-[#131314]"
                        >
                            <X className="h-4 w-4" /> Clear filters
                        </button>
                    )}

                    <span className="ml-auto text-sm font-bold text-slate-600 dark:text-slate-300">
                        {filteredModels.length} model{filteredModels.length === 1 ? "" : "s"} found
                    </span>
                </div>
            </div>

            <div className="space-y-6">
                {visibleModels.map((model) => (
                    <article
                        key={model.id}
                        className="rounded-3xl border-2 border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-7 sm:p-8"
                    >
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                                {model.provider}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 dark:text-slate-400">
                                <CalendarDays className="h-3.5 w-3.5" /> {model.releasedAt}
                            </span>
                        </div>

                        <h2 className="mb-3 text-2xl font-black leading-tight text-slate-900 dark:text-white">{model.name}</h2>
                        <p className="mb-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">{model.summary}</p>

                        <div className="mb-6 grid gap-3 sm:grid-cols-3">
                            <div className="rounded-xl border border-slate-200 dark:border-white/10 p-4">
                                <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-slate-500">Context</div>
                                <div className="text-base font-black text-slate-900 dark:text-white">{fmtNumber.format(model.contextLength)}</div>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-white/10 p-4">
                                <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-slate-500">Input / 1M</div>
                                <div className="text-base font-black text-slate-900 dark:text-white">{formatPrice(model.inputPer1M)}</div>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-white/10 p-4">
                                <div className="mb-1 text-[11px] font-black uppercase tracking-wide text-slate-500">Output / 1M</div>
                                <div className="text-base font-black text-slate-900 dark:text-white">{formatPrice(model.outputPer1M)}</div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="mb-2 text-[11px] font-black uppercase tracking-wide text-slate-500">Best For</div>
                            <ul className="flex flex-wrap gap-2">
                                {model.bestFor.map((item) => (
                                    <li
                                        key={item}
                                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 dark:border-white/10 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300"
                                    >
                                        <Layers className="h-3.5 w-3.5 text-slate-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <code className="rounded-md bg-slate-100 dark:bg-white/10 px-2 py-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                                {model.id}
                            </code>

                            {landingByModelId[model.id] && (
                                <Link
                                    href={`/models/${landingByModelId[model.id]}`}
                                    className="inline-flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white hover:gap-3 transition-all"
                                >
                                    View model details <ArrowRight className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </article>
                ))}

                {filteredModels.length === 0 && (
                    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-8 text-center">
                        <h3 className="mb-2 text-xl font-black text-slate-900 dark:text-white">No models match these filters</h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                            Adjust provider, context, price, or search terms to expand results.
                        </p>
                    </div>
                )}

                {filteredModels.length > 0 && (
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3">
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                            Showing {pageStart + 1}-{pageEnd} of {filteredModels.length}
                        </span>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => setPage((current) => Math.max(1, current - 1))}
                                disabled={page === 1}
                                className="rounded-lg border border-slate-200 dark:border-white/10 px-3 py-1.5 text-sm font-bold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-white dark:hover:bg-[#131314]"
                            >
                                Previous
                            </button>
                            <span className="px-2 text-sm font-black text-slate-900 dark:text-white">
                                Page {page} / {totalPages}
                            </span>
                            <button
                                type="button"
                                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                                disabled={page === totalPages}
                                className="rounded-lg border border-slate-200 dark:border-white/10 px-3 py-1.5 text-sm font-bold text-slate-700 dark:text-slate-200 disabled:cursor-not-allowed disabled:opacity-40 hover:bg-white dark:hover:bg-[#131314]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
