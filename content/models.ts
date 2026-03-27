import { generatedModels, generatedModelsLastUpdated } from "./models.generated";

export interface ModelEntry {
    id: string;
    name: string;
    provider: string;
    releasedAt: string;
    contextLength: number;
    inputPer1M: number;
    outputPer1M: number;
    summary: string;
    description?: string;
    bestFor: string[];
    modality?: string;
    inputModalities?: string[];
    outputModalities?: string[];
    supportedParameters?: string[];
}

const featuredModels: ModelEntry[] = [
    {
        id: "reka/reka-edge",
        name: "Reka Edge",
        provider: "Reka",
        releasedAt: "2026-03-20",
        contextLength: 16384,
        inputPer1M: 0.1,
        outputPer1M: 0.1,
        summary: "Compact multimodal model tuned for efficient visual reasoning and fast production throughput.",
        bestFor: ["Vision-language tasks", "High-volume multimodal workflows", "Low-cost assistants"],
    },
    {
        id: "nvidia/nemotron-3-super-120b-a12b",
        name: "Nemotron 3 Super 120B-A12B",
        provider: "NVIDIA",
        releasedAt: "2026-03-11",
        contextLength: 262144,
        inputPer1M: 0.1,
        outputPer1M: 0.5,
        summary: "Open hybrid MoE model designed for strong multi-agent reasoning with efficient token economics.",
        bestFor: ["Agent workflows", "Technical reasoning", "Cost-aware enterprise copilots"],
    },
    {
        id: "x-ai/grok-4.20-multi-agent-beta",
        name: "Grok 4.20 Multi-Agent Beta",
        provider: "xAI",
        releasedAt: "2026-03-12",
        contextLength: 2000000,
        inputPer1M: 2,
        outputPer1M: 6,
        summary: "Multi-agent variant designed for coordinated research and tool-heavy workflows.",
        bestFor: ["Deep research", "Parallel-agent tasks", "Complex synthesis"],
    },
    {
        id: "x-ai/grok-4.20-beta",
        name: "Grok 4.20 Beta",
        provider: "xAI",
        releasedAt: "2026-03-12",
        contextLength: 2000000,
        inputPer1M: 2,
        outputPer1M: 6,
        summary: "General flagship model optimized for fast reasoning and broad agentic use.",
        bestFor: ["General reasoning", "Fast responses", "Long-context tasks"],
    },
    {
        id: "bytedance-seed/seed-2.0-lite",
        name: "Seed-2.0-Lite",
        provider: "ByteDance",
        releasedAt: "2026-03-10",
        contextLength: 262144,
        inputPer1M: 0.25,
        outputPer1M: 2,
        summary: "Cost-efficient enterprise model with balanced multimodal and agent capabilities.",
        bestFor: ["Cost-sensitive production", "General assistants", "High-volume tasks"],
    },
    {
        id: "qwen/qwen3.5-9b",
        name: "Qwen3.5-9B",
        provider: "Qwen",
        releasedAt: "2026-03-10",
        contextLength: 256000,
        inputPer1M: 0.05,
        outputPer1M: 0.15,
        summary: "Compact, efficient model aimed at practical reasoning and coding workloads.",
        bestFor: ["Low-cost inference", "Developer tooling", "Edge-friendly workloads"],
    },
    {
        id: "openai/gpt-5.4-pro",
        name: "GPT-5.4 Pro",
        provider: "OpenAI",
        releasedAt: "2026-03-05",
        contextLength: 1050000,
        inputPer1M: 30,
        outputPer1M: 180,
        summary: "Highest-capability option for demanding reasoning, coding, and strategic tasks.",
        bestFor: ["Hard reasoning", "High-stakes outputs", "Advanced coding agents"],
    },
    {
        id: "openai/gpt-5.4",
        name: "GPT-5.4",
        provider: "OpenAI",
        releasedAt: "2026-03-05",
        contextLength: 1050000,
        inputPer1M: 2.5,
        outputPer1M: 15,
        summary: "Frontier model for strong reasoning and broad enterprise use with very long context.",
        bestFor: ["Enterprise copilots", "Long documents", "Cross-functional workflows"],
    },
    {
        id: "inception/mercury-2",
        name: "Mercury 2",
        provider: "Inception",
        releasedAt: "2026-03-04",
        contextLength: 128000,
        inputPer1M: 0.25,
        outputPer1M: 0.75,
        summary: "Reasoning-focused model tuned for low-latency output and iterative problem solving.",
        bestFor: ["Latency-sensitive UX", "Reasoning at scale", "Interactive assistants"],
    },
    {
        id: "openai/gpt-5.3-chat",
        name: "GPT-5.3 Chat",
        provider: "OpenAI",
        releasedAt: "2026-03-03",
        contextLength: 128000,
        inputPer1M: 1.75,
        outputPer1M: 14,
        summary: "High-quality conversational model optimized for day-to-day enterprise assistants.",
        bestFor: ["General chat", "Team assistants", "Knowledge workflows"],
    },
    {
        id: "google/gemini-3.1-flash-lite-preview",
        name: "Gemini 3.1 Flash Lite Preview",
        provider: "Google",
        releasedAt: "2026-03-03",
        contextLength: 1048576,
        inputPer1M: 0.25,
        outputPer1M: 1.5,
        summary: "Efficiency-first model targeting high-throughput enterprise workloads.",
        bestFor: ["Batch processing", "Large-scale automation", "High request volume"],
    },
    {
        id: "qwen/qwen3.5-flash-02-23",
        name: "Qwen3.5-Flash",
        provider: "Qwen",
        releasedAt: "2026-02-25",
        contextLength: 1000000,
        inputPer1M: 0.1,
        outputPer1M: 0.4,
        summary: "High-context flash model balancing speed, quality, and strong cost efficiency.",
        bestFor: ["Long-context analysis", "Cost-aware assistants", "Operational automation"],
    },
    {
        id: "qwen/qwen3.5-122b-a10b",
        name: "Qwen3.5-122B-A10B",
        provider: "Qwen",
        releasedAt: "2026-02-25",
        contextLength: 262144,
        inputPer1M: 0.26,
        outputPer1M: 2.08,
        summary: "Large-capacity reasoning model for high-quality outputs across complex domains.",
        bestFor: ["Technical analysis", "Advanced reasoning", "Multimodal-heavy tasks"],
    },
    {
        id: "google/gemini-3.1-pro-preview-customtools",
        name: "Gemini 3.1 Pro Preview Custom Tools",
        provider: "Google",
        releasedAt: "2026-02-25",
        contextLength: 1048576,
        inputPer1M: 2,
        outputPer1M: 12,
        summary: "Tool-call optimized variant for reliable orchestration in agentic systems.",
        bestFor: ["Tool calling", "Structured workflows", "Agent orchestration"],
    },
    {
        id: "openai/gpt-5.3-codex",
        name: "GPT-5.3-Codex",
        provider: "OpenAI",
        releasedAt: "2026-02-24",
        contextLength: 400000,
        inputPer1M: 1.75,
        outputPer1M: 14,
        summary: "Coding-focused model optimized for software design, implementation, and refactoring.",
        bestFor: ["Code generation", "Code review", "Agentic software tasks"],
    },
    {
        id: "google/gemini-3.1-pro-preview",
        name: "Gemini 3.1 Pro Preview",
        provider: "Google",
        releasedAt: "2026-02-19",
        contextLength: 1048576,
        inputPer1M: 2,
        outputPer1M: 12,
        summary: "Frontier reasoning model for demanding decision support and production copilots.",
        bestFor: ["Complex reasoning", "Enterprise copilots", "Long-context planning"],
    },
    {
        id: "anthropic/claude-sonnet-4.6",
        name: "Claude Sonnet 4.6",
        provider: "Anthropic",
        releasedAt: "2026-02-17",
        contextLength: 1000000,
        inputPer1M: 3,
        outputPer1M: 15,
        summary: "Balanced high-performance model for coding, agents, and professional writing.",
        bestFor: ["Engineering teams", "Knowledge work", "Agent-assisted operations"],
    },
    {
        id: "minimax/minimax-m2.5",
        name: "MiniMax M2.5",
        provider: "MiniMax",
        releasedAt: "2026-02-12",
        contextLength: 196608,
        inputPer1M: 0.25,
        outputPer1M: 1.2,
        summary: "General-purpose production model focused on practical productivity workflows.",
        bestFor: ["Operational assistants", "General chat", "Cost-aware deployment"],
    },
    {
        id: "z-ai/glm-5",
        name: "GLM 5",
        provider: "Z.ai",
        releasedAt: "2026-02-11",
        contextLength: 202752,
        inputPer1M: 0.72,
        outputPer1M: 2.3,
        summary: "Open flagship model targeting strong reasoning and long-horizon agent workflows.",
        bestFor: ["Planning-heavy tasks", "Complex automation", "Open-model strategies"],
    },
    {
        id: "anthropic/claude-opus-4.6",
        name: "Claude Opus 4.6",
        provider: "Anthropic",
        releasedAt: "2026-02-04",
        contextLength: 1000000,
        inputPer1M: 5,
        outputPer1M: 25,
        summary: "Top-tier capability model for complex enterprise reasoning and deep analysis.",
        bestFor: ["Strategic analysis", "Complex writing", "Long reasoning chains"],
    },
];

const mergedModels = new Map<string, ModelEntry>();

for (const model of featuredModels) {
    mergedModels.set(model.id, model);
}

for (const model of generatedModels as ModelEntry[]) {
    if (!mergedModels.has(model.id)) {
        mergedModels.set(model.id, model);
    }
}

export const models: ModelEntry[] = Array.from(mergedModels.values()).sort((a, b) => {
    const dateComparison = b.releasedAt.localeCompare(a.releasedAt);
    if (dateComparison !== 0) return dateComparison;
    return a.name.localeCompare(b.name);
});

const latestFeaturedRelease = featuredModels.reduce(
    (latest, model) => (model.releasedAt > latest ? model.releasedAt : latest),
    "0000-00-00"
);

export const modelsLastUpdated =
    latestFeaturedRelease > generatedModelsLastUpdated ? latestFeaturedRelease : generatedModelsLastUpdated;
