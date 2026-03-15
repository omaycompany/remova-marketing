export interface ModelLanding {
    slug: string;
    modelId: string;
    heroLabel: string;
    heroTitle: string;
    heroSubtitle: string;
    metaTitle: string;
    metaDescription: string;
    providerSummary: string;
    summaryPoints: string[];
    strengths: string[];
    tradeoffs: string[];
    useCases: string[];
    deploymentChecklist: string[];
    parameterNotes: { name: string; note: string }[];
    specNotes: { label: string; value: string }[];
    faqs: { question: string; answer: string }[];
    sourceCheckedAt: string;
}

export const modelLandings: ModelLanding[] = [
    {
        slug: "grok-4-20-multi-agent-beta",
        modelId: "x-ai/grok-4.20-multi-agent-beta",
        heroLabel: "Model Landing Template",
        heroTitle: "Grok 4.20 Multi-Agent Beta",
        heroSubtitle:
            "A high-context, multi-agent model profile for enterprise research and complex tool-driven workflows.",
        metaTitle: "Grok 4.20 Multi-Agent Beta | Enterprise Model Landing",
        metaDescription:
            "Detailed enterprise model profile for Grok 4.20 Multi-Agent Beta: strengths, constraints, deployment checklist, and governance-ready usage guidance.",
        providerSummary:
            "xAI positions Grok 4.20 Multi-Agent Beta for collaborative agent workloads, where multiple agents run in parallel for deeper research and synthesis.",
        summaryPoints: [
            "Very large context window for long documents and multi-step sessions.",
            "Parallel-agent reasoning behavior increases depth on harder tasks.",
            "Works best when teams need structured planning, synthesis, and tool orchestration.",
            "Should be paired with policy controls and spend guardrails before broad rollout.",
        ],
        strengths: [
            "Handles long-context planning and synthesis with high continuity.",
            "Strong fit for multi-step research and investigative workflows.",
            "Supports text-plus-image input for mixed evidence pipelines.",
            "Reasoning-effort controls allow deeper passes for hard prompts.",
        ],
        tradeoffs: [
            "Higher-cost profile than lightweight production models.",
            "Overkill for short, repetitive tasks that do not need deep reasoning.",
            "Requires careful budget allocation when enabling at scale.",
            "Needs explicit prompt and policy design to prevent uncontrolled tool use.",
        ],
        useCases: [
            "Deep policy and compliance research across large internal document sets.",
            "Multi-source investigation workflows for security and risk teams.",
            "Complex technical planning where iterative synthesis is required.",
            "Executive briefing generation from long, heterogeneous inputs.",
        ],
        deploymentChecklist: [
            "Start with a pilot for one high-value workflow and define success metrics.",
            "Set role-based access so only approved teams can use this model tier.",
            "Apply budget thresholds and alerts before broad enablement.",
            "Log outputs and policy events for quality and risk reviews.",
            "Review monthly usage, quality, and spend before scaling further.",
        ],
        parameterNotes: [
            {
                name: "reasoning",
                note: "Reasoning effort behavior is documented as 4 agents at low/medium and 16 agents at high/xhigh.",
            },
            {
                name: "structured_outputs",
                note: "Use schema-constrained outputs for downstream automation and auditability.",
            },
            {
                name: "response_format",
                note: "Force deterministic response shapes for production integration points.",
            },
            {
                name: "max_tokens",
                note: "Set explicit completion limits to reduce cost variance in long-context runs.",
            },
        ],
        specNotes: [
            { label: "Model ID", value: "x-ai/grok-4.20-multi-agent-beta" },
            { label: "Context Window", value: "2,000,000 tokens" },
            { label: "Input Modalities", value: "Text, Image" },
            { label: "Output Modalities", value: "Text" },
            { label: "Input Price", value: "$2 per 1M input tokens" },
            { label: "Output Price", value: "$6 per 1M output tokens" },
            { label: "Provider", value: "xAI" },
            { label: "Listing Date", value: "2026-03-12" },
        ],
        faqs: [
            {
                question: "When should teams choose Grok 4.20 Multi-Agent Beta?",
                answer:
                    "Choose it for high-complexity, research-heavy workflows where long context and deeper reasoning materially improve output quality.",
            },
            {
                question: "Is this model ideal for all enterprise traffic?",
                answer:
                    "No. It is better as a specialist tier for complex workloads. Use lower-cost models for routine tasks to keep spend predictable.",
            },
            {
                question: "What is the minimum governance setup before rollout?",
                answer:
                    "At minimum: role-based access, policy checks, usage logging, and budget limits by team or department.",
            },
        ],
        sourceCheckedAt: "2026-03-15",
    },
];
