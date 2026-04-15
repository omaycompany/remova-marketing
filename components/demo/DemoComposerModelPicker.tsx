"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Brain, Check, ChevronDown, Clock3, Search, X } from "lucide-react";

export type DemoModelInfo = {
    id: string;
    name: string;
    description?: string;
    contextLength?: number;
    inputPricePer1M?: string;
    outputPricePer1M?: string;
};

interface DemoComposerModelPickerProps {
    availableModels: DemoModelInfo[];
    selectedModelId: string;
    onSelectModel: (modelId: string) => void;
}

const compactNumberFormatter = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 0,
});

const humanize = (value: string) =>
    value
        .split(/[-_/]/g)
        .filter(Boolean)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

const formatContextLength = (value?: number) => (value ? `${compactNumberFormatter.format(value)} ctx` : null);

const getModelProviderLabel = (modelId: string) => {
    const vendor = modelId.includes("/") ? modelId.split("/")[0] : modelId;
    return humanize(vendor);
};

const getModelSummary = (model: DemoModelInfo) => {
    const meta = [
        getModelProviderLabel(model.id),
        formatContextLength(model.contextLength),
        model.inputPricePer1M ? `In $${model.inputPricePer1M}/1M` : null,
        model.outputPricePer1M ? `Out $${model.outputPricePer1M}/1M` : null,
    ].filter(Boolean);

    return meta.join(" · ");
};

const getModelSearchFields = (model: DemoModelInfo) => [
    model.name,
    model.id,
    model.description,
    getModelProviderLabel(model.id),
    model.id.split("/").pop(),
];

const buildMatchScore = (fields: Array<string | undefined>, query: string) => {
    if (!query) return 0;
    const normalizedFields = fields
        .filter((field): field is string => typeof field === "string" && field.trim().length > 0)
        .map((field) => field.toLowerCase());

    if (normalizedFields.some((field) => field === query)) return 0;
    if (normalizedFields.some((field) => field.startsWith(query))) return 1;
    if (normalizedFields.some((field) => field.includes(query))) return 2;
    if (normalizedFields.join(" ").includes(query)) return 3;
    return null;
};

export default function DemoComposerModelPicker({
    availableModels,
    selectedModelId,
    onSelectModel,
}: DemoComposerModelPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [recentModels, setRecentModels] = useState<string[]>(["remova-1.0", "openai/gpt-5.4"]);
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const deferredQuery = useDeferredValue(query);
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    const recentIndexLookup = useMemo(
        () => new Map(recentModels.map((modelId, index) => [modelId, index])),
        [recentModels],
    );

    const activeModel = useMemo(
        () =>
            availableModels.find((model) => model.id === selectedModelId) ||
            availableModels.find((model) => model.id === "remova-1.0") ||
            null,
        [availableModels, selectedModelId],
    );

    const activeLabel = activeModel?.name || selectedModelId || "Remova 1.0";
    const activeCaption =
        activeModel?.description || getModelSummary(activeModel || { id: "remova-1.0", name: "" });

    const filteredModels = useMemo(() => {
        const ranked = availableModels
            .map((model, index) => ({
                model,
                index,
                score: buildMatchScore(getModelSearchFields(model), normalizedQuery),
                isSelected: selectedModelId === model.id,
                isFeatured: model.id === "remova-1.0",
                recentIndex: recentIndexLookup.get(model.id) ?? Number.MAX_SAFE_INTEGER,
            }))
            .filter((item) => item.score !== null);

        ranked.sort((left, right) => {
            if ((left.score ?? 0) !== (right.score ?? 0)) {
                return (left.score ?? 0) - (right.score ?? 0);
            }
            if (left.isSelected !== right.isSelected) return left.isSelected ? -1 : 1;
            if (left.isFeatured !== right.isFeatured) return left.isFeatured ? -1 : 1;
            if (left.recentIndex !== right.recentIndex) return left.recentIndex - right.recentIndex;
            return left.index - right.index;
        });

        return ranked.map((item) => item.model);
    }, [availableModels, normalizedQuery, recentIndexLookup, selectedModelId]);

    const recentModelCards = useMemo(
        () =>
            recentModels
                .map((modelId) => availableModels.find((model) => model.id === modelId))
                .filter((model): model is DemoModelInfo => Boolean(model))
                .slice(0, 4),
        [availableModels, recentModels],
    );

    const closePicker = () => {
        setIsOpen(false);
        setQuery("");
    };

    useEffect(() => {
        if (!isOpen) return;

        const frame = window.requestAnimationFrame(() => {
            searchInputRef.current?.focus();
        });

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                setQuery("");
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    const handleModelSelect = (model: DemoModelInfo) => {
        onSelectModel(model.id);
        setRecentModels((prev) => [model.id, ...prev.filter((id) => id !== model.id)].slice(0, 6));
        closePicker();
    };

    return (
        <div className="relative shrink-0">
            <button
                type="button"
                onClick={() => {
                    if (isOpen) {
                        closePicker();
                        return;
                    }
                    setIsOpen(true);
                }}
                aria-label={`Open model picker. Current selection: ${activeLabel}`}
                className="group relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sky-300 shadow-sm transition hover:border-white/20 hover:bg-white/[0.08] sm:h-9 sm:w-9"
                title={activeLabel}
            >
                <span className="pointer-events-none">
                    <Brain className="h-4 w-4" />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/15 bg-[#141619] text-white/50 shadow-sm transition">
                    <ChevronDown className={`h-2.5 w-2.5 transition ${isOpen ? "rotate-180" : ""}`} />
                </span>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={closePicker} />

                    <div className="absolute bottom-full right-0 z-20 mb-3 w-[min(32rem,calc(100vw-1rem))] overflow-hidden rounded-[30px] border border-white/10 bg-[#141619]/95 shadow-[0_30px_80px_-28px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                        <div className="relative overflow-hidden border-b border-white/10 px-4 py-4">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_36%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_30%)]" />
                            <div className="relative flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                                        Chat routing
                                    </p>
                                    <h3 className="mt-1 text-lg font-semibold text-white">
                                        Find the right brain faster
                                    </h3>
                                    <p className="mt-1 text-sm text-white/60">
                                        {activeCaption || "Search raw models without leaving the composer."}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={closePicker}
                                    className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/45 transition hover:border-white/20 hover:text-white"
                                    aria-label="Close model picker"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="border-b border-white/10 px-4 py-3">
                            <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 shadow-sm transition focus-within:border-sky-400/50 focus-within:bg-white/[0.07]">
                                <Search className="h-4 w-4 shrink-0 text-white/35" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search models or providers"
                                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                                />
                                {query && (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        className="rounded-full p-1 text-white/35 transition hover:bg-white/[0.08] hover:text-white"
                                        aria-label="Clear search"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                )}
                            </label>

                            <div className="mt-2 flex items-center justify-between text-[11px] text-white/40">
                                <span>{availableModels.length} models ready</span>
                                <span>Esc to close</span>
                            </div>
                        </div>

                        <div className="max-h-[26rem] overflow-y-auto px-4 py-4">
                            {!normalizedQuery && recentModelCards.length > 0 && (
                                <section className="mb-5">
                                    <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                        <Clock3 className="h-3.5 w-3.5" />
                                        Recent models
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {recentModelCards.map((model) => {
                                            const isSelected = selectedModelId === model.id;
                                            return (
                                                <button
                                                    key={model.id}
                                                    type="button"
                                                    onClick={() => handleModelSelect(model)}
                                                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${isSelected
                                                            ? "border-sky-400/40 bg-sky-500/10 text-sky-200"
                                                            : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/20 hover:text-white"
                                                        }`}
                                                >
                                                    {model.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </section>
                            )}

                            {filteredModels.length > 0 && (
                                <section>
                                    <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                        <Brain className="h-3.5 w-3.5" />
                                        Models
                                    </div>
                                    <div className="space-y-2">
                                        {filteredModels.map((model) => {
                                            const isSelected = selectedModelId === model.id;
                                            const isRecent = recentIndexLookup.has(model.id);
                                            const summary = getModelSummary(model);

                                            return (
                                                <button
                                                    key={model.id}
                                                    type="button"
                                                    onClick={() => handleModelSelect(model)}
                                                    className={`flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition ${isSelected
                                                            ? "border-sky-400/35 bg-sky-500/10 text-white"
                                                            : "border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.06]"
                                                        }`}
                                                >
                                                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-500/12 text-sky-300">
                                                        <Brain className="h-4 w-4" />
                                                    </span>
                                                    <span className="min-w-0 flex-1">
                                                        <span className="flex flex-wrap items-center gap-2">
                                                            <span className="truncate text-sm font-semibold">{model.name}</span>
                                                            {model.id === "remova-1.0" && (
                                                                <span className="rounded-full bg-sky-500/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-300">
                                                                    Recommended
                                                                </span>
                                                            )}
                                                            {isRecent && !normalizedQuery && (
                                                                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                                                                    Recent
                                                                </span>
                                                            )}
                                                            {isSelected && (
                                                                <span className="rounded-full bg-sky-500/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-300">
                                                                    Active
                                                                </span>
                                                            )}
                                                        </span>
                                                        <span className="mt-1 block text-xs text-white/45">
                                                            {model.id}
                                                        </span>
                                                        <span className="mt-1 block text-xs leading-5 text-white/60">
                                                            {model.description || "Direct model override for this chat."}
                                                        </span>
                                                        {summary && (
                                                            <span className="mt-2 block text-[11px] text-white/45">
                                                                {summary}
                                                            </span>
                                                        )}
                                                    </span>
                                                    {isSelected && (
                                                        <Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </section>
                            )}

                            {filteredModels.length === 0 && (
                                <div className="rounded-3xl border border-dashed border-white/10 px-4 py-10 text-center">
                                    <p className="text-sm font-medium text-white">
                                        Nothing matched “{deferredQuery.trim()}”
                                    </p>
                                    <p className="mt-1 text-sm text-white/45">
                                        Try a provider name or a shorter model ID.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
