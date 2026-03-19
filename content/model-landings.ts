import { models, modelsLastUpdated, type ModelEntry } from "@/content/models";

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

interface ModelLandingSeed {
    slug: string;
    modelId: string;
    heroLabel: string;
    heroSubtitle: string;
    providerSummary: string;
    summaryPoints: string[];
    strengths: string[];
    tradeoffs: string[];
    useCases: string[];
    deploymentChecklist: string[];
    parameterNotes: { name: string; note: string }[];
    faqs: { question: string; answer: string }[];
    modality: string;
    sourceCheckedAt: string;
}

const fmtNumber = new Intl.NumberFormat("en-US");

function formatPrice(price: number) {
    return `$${price.toFixed(price < 1 ? 2 : 2)} per 1M tokens`;
}

const landingSeeds: ModelLandingSeed[] = [
    {
        slug: "grok-4-20-multi-agent-beta",
        modelId: "x-ai/grok-4.20-multi-agent-beta",
        heroLabel: "Model Landing Template",
        heroSubtitle:
            "A high-context, multi-agent model profile for enterprise research and complex tool-driven workflows.",
        providerSummary:
            "xAI positions this variant for collaborative agent workflows where multiple agents run in parallel for deep research and synthesis.",
        summaryPoints: [
            "Very large context window for long document chains and multi-step sessions.",
            "Parallel-agent reasoning behavior increases depth on hard prompts.",
            "Useful when teams need structured planning and high-fidelity synthesis.",
            "Best deployed with policy guardrails and budget limits from day one.",
        ],
        strengths: [
            "High continuity across long investigations and research traces.",
            "Strong fit for multi-source synthesis and deep analysis.",
            "Text-plus-image input supports mixed evidence workflows.",
            "Reasoning-effort controls allow deeper passes on critical tasks.",
        ],
        tradeoffs: [
            "Higher cost profile than lightweight production models.",
            "Not ideal for short, repetitive, low-risk interactions.",
            "Can generate unnecessary spend if enabled broadly without limits.",
            "Requires explicit workflow design for tool-heavy operations.",
        ],
        useCases: [
            "Cross-department compliance research across large policy libraries.",
            "Incident investigation workflows that require evidence synthesis.",
            "Complex technical planning with iterative reasoning stages.",
            "Executive brief generation from long, heterogeneous inputs.",
        ],
        deploymentChecklist: [
            "Pilot with one high-value research workflow first.",
            "Enable for approved roles rather than all users.",
            "Apply department-level spend thresholds before rollout.",
            "Track policy events and output quality in weekly reviews.",
            "Scale only after cost and quality targets are stable.",
        ],
        parameterNotes: [
            {
                name: "reasoning",
                note: "Documented behavior is 4 agents at low/medium effort and 16 agents at high/xhigh effort.",
            },
            {
                name: "structured_outputs",
                note: "Use schema-constrained outputs for downstream automation and reviewability.",
            },
            {
                name: "response_format",
                note: "Set strict output format for workflow reliability and audit quality.",
            },
            {
                name: "max_tokens",
                note: "Enforce completion limits to control spend variance on long-context prompts.",
            },
        ],
        faqs: [
            {
                question: "When should teams choose Grok 4.20 Multi-Agent Beta?",
                answer:
                    "Choose it for high-complexity, research-heavy workflows where long context and deeper reasoning improve quality.",
            },
            {
                question: "Is it suitable for all traffic?",
                answer:
                    "No. It is better as a specialist tier for difficult workloads, while routine traffic should run on lower-cost models.",
            },
            {
                question: "What governance controls should be in place first?",
                answer:
                    "At minimum: role-scoped access, policy checks, usage logging, and budget controls by team.",
            },
        ],
        modality: "text+image->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "grok-4-20-beta",
        modelId: "x-ai/grok-4.20-beta",
        heroLabel: "Frontier Reasoning Profile",
        heroSubtitle:
            "A general-purpose flagship model for long-context reasoning, planning, and enterprise assistant workflows.",
        providerSummary:
            "xAI positions Grok 4.20 Beta as a broad flagship model for high-quality reasoning and agentic execution across domains.",
        summaryPoints: [
            "Built for advanced reasoning with a very large context window.",
            "Balanced for broad enterprise tasks rather than a single niche.",
            "Strong option for teams consolidating complex workloads onto one tier.",
            "Should still be scoped with budget and access controls.",
        ],
        strengths: [
            "Long-context handling for policy, legal, and technical corpora.",
            "Reliable performance in planning-heavy enterprise prompts.",
            "Works well as a premium default for high-complexity teams.",
            "Supports multimodal input where image context matters.",
        ],
        tradeoffs: [
            "Premium capability can be unnecessary for basic tasks.",
            "Higher per-token cost than efficiency-focused options.",
            "Needs stricter workload routing for cost discipline.",
            "Potential overuse if no role-based controls exist.",
        ],
        useCases: [
            "High-value internal copilots for legal and strategy functions.",
            "Advanced planning assistants for security and operations teams.",
            "Large document synthesis and response drafting.",
            "Complex internal Q&A with long historical context.",
        ],
        deploymentChecklist: [
            "Define where flagship quality is required and where it is not.",
            "Route routine requests to lower-cost tiers by policy.",
            "Enable for priority teams first with usage monitoring.",
            "Track monthly quality lift against added spend.",
            "Recalibrate routing rules after pilot results.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Lower values improve consistency for policy and compliance responses." },
            { name: "top_p", note: "Use tighter sampling for deterministic enterprise workflows." },
            { name: "response_format", note: "Prefer structured formats where outputs feed downstream systems." },
            { name: "max_tokens", note: "Set hard caps to avoid expensive long-tail completions." },
        ],
        faqs: [
            {
                question: "How is Grok 4.20 Beta different from the multi-agent variant?",
                answer:
                    "The multi-agent variant emphasizes parallel agent behavior for deep research, while this version is a more general flagship profile.",
            },
            {
                question: "Should this be the default model for every employee?",
                answer:
                    "Usually no. Most organizations reserve it for advanced workflows and keep a lower-cost default for routine tasks.",
            },
            {
                question: "What is the key rollout risk?",
                answer: "Uncontrolled usage by low-complexity workflows that do not need premium reasoning depth.",
            },
        ],
        modality: "text+image->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "seed-2-0-lite",
        modelId: "bytedance-seed/seed-2.0-lite",
        heroLabel: "Efficiency Workhorse",
        heroSubtitle:
            "A cost-efficient multimodal model for teams that need high throughput with solid quality across business workflows.",
        providerSummary:
            "ByteDance positions Seed-2.0-Lite as an enterprise workhorse model focused on balanced capability and strong cost efficiency.",
        summaryPoints: [
            "Low input cost profile supports wide internal deployment.",
            "Multimodal support covers text, image, and video input workflows.",
            "A good candidate for high-volume assistants and automation.",
            "Can act as a practical default tier in a model portfolio.",
        ],
        strengths: [
            "Strong throughput-to-cost ratio for large organizations.",
            "Flexible input modalities for mixed enterprise content.",
            "Suitable for day-to-day operational assistant use.",
            "Easy to pair with budget controls for predictable spend.",
        ],
        tradeoffs: [
            "Not the best fit for the hardest frontier reasoning tasks.",
            "May require escalation model for highly specialized prompts.",
            "Output depth can vary on complex strategic requests.",
            "Needs task routing to avoid overloading one tier.",
        ],
        useCases: [
            "High-volume internal chat assistants across departments.",
            "Operations workflows with mixed text and visual artifacts.",
            "Document triage and lightweight analysis at scale.",
            "Automated summarization pipelines for recurring reports.",
        ],
        deploymentChecklist: [
            "Set as default tier for routine enterprise traffic.",
            "Define escalation rules for high-complexity prompts.",
            "Track spend by department during first 30 days.",
            "Audit sample outputs weekly for quality drift.",
            "Tune prompt standards for repeatable workflow quality.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Use moderate values for balanced creativity and consistency." },
            { name: "max_tokens", note: "Right-size token limits to prevent hidden costs in batch jobs." },
            { name: "structured_outputs", note: "Enable structured responses for automation-heavy pipelines." },
            { name: "top_p", note: "Tighter sampling helps keep operational output stable." },
        ],
        faqs: [
            {
                question: "Is Seed-2.0-Lite a good default model?",
                answer:
                    "Yes for many organizations, especially when they need broad enablement with strong cost control and acceptable quality.",
            },
            {
                question: "When should teams escalate from this model?",
                answer:
                    "Escalate for deep strategic reasoning, complex code generation, or long-horizon analytical tasks.",
            },
            {
                question: "What should teams monitor first?",
                answer: "Monitor quality consistency by workflow type and spend per completed task." ,
            },
        ],
        modality: "text+image+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "qwen-3-5-9b",
        modelId: "qwen/qwen3.5-9b",
        heroLabel: "Lean Deployment Tier",
        heroSubtitle:
            "A compact, low-cost model profile for teams optimizing latency and budget without abandoning useful capability.",
        providerSummary:
            "Qwen3.5-9B is positioned as a smaller footprint model for practical workloads where efficiency and speed are critical.",
        summaryPoints: [
            "Very low input cost makes broad experimentation affordable.",
            "Useful for lightweight reasoning and developer support tasks.",
            "Can serve as a low-cost baseline in model routing policies.",
            "Best combined with escalation logic for complex requests.",
        ],
        strengths: [
            "Excellent economics for repetitive internal tasks.",
            "Good fit for latency-sensitive workflow steps.",
            "Enables safe pilots with minimal spend exposure.",
            "Supports multimodal inputs despite compact profile.",
        ],
        tradeoffs: [
            "Lower ceiling on difficult reasoning than frontier tiers.",
            "May need stronger prompt scaffolding for precision outputs.",
            "Not ideal for executive-grade synthesis without review.",
            "Complex prompts can require fallback routing.",
        ],
        useCases: [
            "Ticket triage and operational response drafting.",
            "Developer helper tasks and lightweight coding assistance.",
            "First-pass analysis for large inbound workloads.",
            "Low-risk automation where cost dominates model choice.",
        ],
        deploymentChecklist: [
            "Set as first-pass tier in model routing strategy.",
            "Define fallback triggers for complex or ambiguous prompts.",
            "Measure quality by workflow type rather than global averages.",
            "Use template prompts to improve output reliability.",
            "Review monthly whether selected tasks should move tiers.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Keep low for deterministic support and operational outputs." },
            { name: "top_p", note: "Use tighter sampling when downstream systems require consistency." },
            { name: "max_tokens", note: "Set conservative caps for repetitive high-volume automation." },
            { name: "response_format", note: "Prefer structured responses for parser-safe integrations." },
        ],
        faqs: [
            {
                question: "Where does Qwen3.5-9B perform best?",
                answer: "It performs best on high-volume, moderate-complexity tasks with tight cost and latency requirements.",
            },
            {
                question: "Is this model enough for strategic planning tasks?",
                answer: "Usually no. Strategic and high-stakes outputs often need a higher-capability tier.",
            },
            {
                question: "How should teams govern usage?",
                answer: "Use it as a default low-cost tier with clear escalation rules to stronger models when needed.",
            },
        ],
        modality: "text+image+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gpt-5-4-pro",
        modelId: "openai/gpt-5.4-pro",
        heroLabel: "High-Capability Tier",
        heroSubtitle:
            "A premium capability profile for the most demanding enterprise reasoning and coding workloads.",
        providerSummary:
            "GPT-5.4 Pro is positioned as a top-tier option for advanced reasoning, difficult software tasks, and high-consequence outputs.",
        summaryPoints: [
            "Designed for tasks where quality beats throughput.",
            "Very large context supports long strategic artifacts.",
            "High price point requires deliberate workload selection.",
            "Best treated as a specialist tier, not a universal default.",
        ],
        strengths: [
            "Strong performance on difficult analytical prompts.",
            "High quality for advanced coding and architectural planning.",
            "Useful for executive-grade synthesis and strategy support.",
            "Handles long, complex context with continuity.",
        ],
        tradeoffs: [
            "Most expensive option in this model set.",
            "Overuse can quickly inflate monthly spend.",
            "Requires strict access controls to stay economical.",
            "Not necessary for routine support workflows.",
        ],
        useCases: [
            "Critical policy drafting with multi-source evidence.",
            "Complex software design and refactor planning.",
            "High-stakes legal or compliance analysis.",
            "Executive planning memos with long input context.",
        ],
        deploymentChecklist: [
            "Restrict access to approved teams and roles.",
            "Define explicit criteria for when Pro tier is allowed.",
            "Set spend alerts below monthly budget thresholds.",
            "Review high-cost sessions for quality justification.",
            "Continuously route lower-complexity tasks to cheaper tiers.",
        ],
        parameterNotes: [
            { name: "reasoning", note: "Use high reasoning settings only for tasks where depth materially affects outcomes." },
            { name: "max_tokens", note: "Use guarded completion caps to avoid runaway cost on verbose requests." },
            { name: "structured_outputs", note: "Enable schemas for automation and traceable decision records." },
            { name: "temperature", note: "Lower values are preferred for policy, legal, and technical precision." },
        ],
        faqs: [
            {
                question: "When is GPT-5.4 Pro worth the cost?",
                answer: "It is worth it when output quality materially affects risk, decisions, or strategic outcomes.",
            },
            {
                question: "Should it be enabled globally?",
                answer: "No. Most organizations reserve it for specialist teams and high-consequence workflows.",
            },
            {
                question: "How do teams avoid cost overruns?",
                answer: "Use role gating, budget alerts, and routing policies that keep routine tasks on lower-cost models.",
            },
        ],
        modality: "text+image+file->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gpt-5-4",
        modelId: "openai/gpt-5.4",
        heroLabel: "Frontier General Tier",
        heroSubtitle:
            "A broad, high-capability model profile for enterprise copilots, long-context analysis, and multi-team deployments.",
        providerSummary:
            "GPT-5.4 is positioned as a frontier general model balancing high capability with lower cost than the Pro variant.",
        summaryPoints: [
            "Strong all-around quality for enterprise assistant workloads.",
            "Large context window supports long document workflows.",
            "Can operate as a premium default for advanced departments.",
            "Requires routing and budget governance for broad rollout.",
        ],
        strengths: [
            "High-quality reasoning across technical and business domains.",
            "Useful long-context support for policy and legal documents.",
            "Good fit for enterprise copilots with varied user needs.",
            "More economical than top-tier premium variants.",
        ],
        tradeoffs: [
            "Still expensive for high-volume routine operations.",
            "Can mask inefficient prompt usage if not monitored.",
            "Requires spend ownership by team to remain predictable.",
            "Not ideal as sole tier in cost-sensitive environments.",
        ],
        useCases: [
            "Enterprise knowledge copilots for cross-functional teams.",
            "Long-form synthesis from policy and process documents.",
            "Complex drafting for governance and operational playbooks.",
            "Advanced assistant workflows with mixed input formats.",
        ],
        deploymentChecklist: [
            "Define which departments qualify for this tier by default.",
            "Set cost thresholds and alerts by org unit.",
            "Benchmark against lower-cost alternatives quarterly.",
            "Track quality lift for workflows using this tier.",
            "Route repetitive tasks to efficiency models.",
        ],
        parameterNotes: [
            { name: "response_format", note: "Use strict response schemas for policy and operations workflows." },
            { name: "temperature", note: "Use lower settings when factual consistency is mandatory." },
            { name: "max_tokens", note: "Control completion size for document-heavy prompts." },
            { name: "structured_outputs", note: "Recommended for automation and compliance logging." },
        ],
        faqs: [
            {
                question: "How does GPT-5.4 compare with GPT-5.4 Pro?",
                answer: "GPT-5.4 is generally more economical and broader-purpose, while Pro is typically reserved for hardest tasks.",
            },
            {
                question: "Can this tier replace smaller models entirely?",
                answer: "Usually not. A multi-tier strategy is more cost-effective and operationally resilient.",
            },
            {
                question: "What should teams measure after launch?",
                answer: "Measure cost-per-workflow, quality uplift, and policy adherence by department.",
            },
        ],
        modality: "text+image+file->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "mercury-2",
        modelId: "inception/mercury-2",
        heroLabel: "Fast Reasoning Tier",
        heroSubtitle:
            "A speed-focused reasoning model profile for interactive assistants and low-latency enterprise workflows.",
        providerSummary:
            "Mercury 2 is positioned as a very fast reasoning model, suitable for use cases where response time is a first-class requirement.",
        summaryPoints: [
            "Strong latency profile for live assistant experiences.",
            "Cost-efficient for medium-complexity reasoning tasks.",
            "Useful for workflows needing quick iterative responses.",
            "Pairs well with escalation to deeper models when needed.",
        ],
        strengths: [
            "Fast response time for interactive employee tools.",
            "Low-cost reasoning compared with premium tiers.",
            "Good fit for high-frequency operational queries.",
            "Supports responsive UX in internal applications.",
        ],
        tradeoffs: [
            "Less suitable for deepest strategic reasoning tasks.",
            "No multimodal input in this profile.",
            "May require fallback for complex legal or code synthesis.",
            "Quality can vary on long-horizon planning prompts.",
        ],
        useCases: [
            "Real-time support assistants for operations teams.",
            "Rapid first-pass analysis for large ticket queues.",
            "Interactive workflow copilots in internal tools.",
            "Low-latency Q&A for process and policy lookup.",
        ],
        deploymentChecklist: [
            "Deploy in latency-sensitive assistant endpoints first.",
            "Define escalation path for high-complexity prompts.",
            "Track response-time and quality together.",
            "Set guardrails for unsupported long-horizon tasks.",
            "Tune prompts for concise, actionable responses.",
        ],
        parameterNotes: [
            { name: "max_tokens", note: "Keep outputs concise to preserve fast interaction loops." },
            { name: "temperature", note: "Use lower values for reliable operational responses." },
            { name: "top_p", note: "Tighter sampling often improves consistency at high volume." },
            { name: "response_format", note: "Prefer predictable structure for real-time automation." },
        ],
        faqs: [
            {
                question: "Where does Mercury 2 fit best?",
                answer: "It fits best where latency and throughput matter more than maximal reasoning depth.",
            },
            {
                question: "Can Mercury 2 handle deep strategic analysis?",
                answer: "It can assist, but most teams route deep strategic tasks to higher-capability tiers.",
            },
            {
                question: "What is the key rollout metric?",
                answer: "Monitor user-perceived latency together with task completion quality.",
            },
        ],
        modality: "text->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gpt-5-3-chat",
        modelId: "openai/gpt-5.3-chat",
        heroLabel: "Conversation-First Tier",
        heroSubtitle:
            "A high-quality conversational model profile for everyday enterprise assistants and knowledge workflows.",
        providerSummary:
            "GPT-5.3 Chat is positioned as a polished conversational tier for common assistant use with strong output quality.",
        summaryPoints: [
            "Built for broad chat-based enterprise tasks.",
            "Good balance between capability and operational usability.",
            "Suitable for internal copilots and team support bots.",
            "Works best with governance defaults and prompt standards.",
        ],
        strengths: [
            "High conversational quality for internal assistant use.",
            "Strong fit for knowledge retrieval and drafting tasks.",
            "Reliable for multi-team day-to-day operations.",
            "Supports mixed input types including files.",
        ],
        tradeoffs: [
            "Not the cheapest option for very high-volume traffic.",
            "May be unnecessary for simple automations.",
            "Requires routing controls to protect budget.",
            "Complex coding tasks may prefer code-specialized models.",
        ],
        useCases: [
            "Enterprise chat assistants for HR, IT, and operations.",
            "Policy and process Q&A with controlled prompt templates.",
            "Draft generation for internal communications.",
            "Cross-team knowledge support workflows.",
        ],
        deploymentChecklist: [
            "Define approved assistant use cases by department.",
            "Apply response templates for consistent output style.",
            "Set usage quotas for large business units.",
            "Track quality and escalation rates monthly.",
            "Continuously test against lower-cost alternatives.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Lower for policy accuracy, slightly higher for creative drafts." },
            { name: "response_format", note: "Use format constraints when outputs feed workflow systems." },
            { name: "max_tokens", note: "Cap completion size for chat stability and cost predictability." },
            { name: "structured_outputs", note: "Use where deterministic extraction is required." },
        ],
        faqs: [
            {
                question: "Is GPT-5.3 Chat a good enterprise default?",
                answer: "It can be, especially when teams prioritize conversational quality over minimal cost.",
            },
            {
                question: "When should we choose a cheaper tier instead?",
                answer: "Choose cheaper tiers for repetitive, low-risk tasks where premium quality has little impact.",
            },
            {
                question: "How do we keep responses consistent?",
                answer: "Use prompt templates, response schemas, and periodic quality review by workflow.",
            },
        ],
        modality: "text+image+file->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gemini-3-1-flash-lite-preview",
        modelId: "google/gemini-3.1-flash-lite-preview",
        heroLabel: "High-Throughput Tier",
        heroSubtitle:
            "An efficiency-focused model profile for very high-volume enterprise automation and assistant traffic.",
        providerSummary:
            "Gemini 3.1 Flash Lite Preview is positioned for large-scale workloads that need speed, multimodal input, and strong unit economics.",
        summaryPoints: [
            "Designed for scale where request volume is the core constraint.",
            "Large context with broad modality support for mixed enterprise data.",
            "Low input cost supports aggressive workflow automation.",
            "Best used with quality thresholds and escalation paths.",
        ],
        strengths: [
            "Excellent cost profile for high-concurrency environments.",
            "Multimodal coverage supports diverse content pipelines.",
            "Strong candidate for first-tier automated processing.",
            "Suitable for large organizations running many assistants.",
        ],
        tradeoffs: [
            "Preview status may require tighter operational monitoring.",
            "Not always the strongest tier for the hardest reasoning problems.",
            "Requires quality gates before high-stakes use.",
            "Can still incur spend spikes at very high throughput.",
        ],
        useCases: [
            "Mass-scale content triage and classification.",
            "High-volume service desk and internal support assistants.",
            "Multimodal intake pipelines with text, file, and media context.",
            "Automated enterprise workflow orchestration at scale.",
        ],
        deploymentChecklist: [
            "Run side-by-side quality tests on top workflow types.",
            "Set policy constraints for high-risk response categories.",
            "Track throughput cost per workflow family.",
            "Route complex tasks to a deeper reasoning tier.",
            "Create rollback criteria for preview-tier changes.",
        ],
        parameterNotes: [
            { name: "max_tokens", note: "Set defaults by workflow to avoid runaway completions at scale." },
            { name: "response_format", note: "Structured outputs improve processing reliability in bulk pipelines." },
            { name: "temperature", note: "Use low settings for deterministic classification and extraction tasks." },
            { name: "top_p", note: "Tune sampling conservatively for consistent automated output." },
        ],
        faqs: [
            {
                question: "Why use Flash Lite for enterprise workloads?",
                answer: "It is optimized for high throughput with strong economics, making it practical for broad automation.",
            },
            {
                question: "Is it suitable for critical decision workflows?",
                answer: "Only with quality gates and escalation to deeper reasoning tiers when risk is high.",
            },
            {
                question: "What should teams monitor first?",
                answer: "Monitor quality drift, exception rate, and cost per processed workflow.",
            },
        ],
        modality: "text+image+file+audio+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "qwen-3-5-flash",
        modelId: "qwen/qwen3.5-flash-02-23",
        heroLabel: "Long-Context Efficient Tier",
        heroSubtitle:
            "A high-context, low-cost model profile for organizations balancing depth, scale, and budget.",
        providerSummary:
            "Qwen3.5-Flash is positioned as a cost-efficient long-context tier for large-scale enterprise workloads.",
        summaryPoints: [
            "Large context at low token cost enables affordable depth.",
            "Good fit for scalable analysis and automation tasks.",
            "Multimodal input supports real-world business data flows.",
            "A practical middle tier between compact and premium models.",
        ],
        strengths: [
            "Strong price-performance on long-context workflows.",
            "Useful for document-heavy operational automation.",
            "Flexible multimodal profile across enterprise inputs.",
            "Low cost supports experimentation with broad coverage.",
        ],
        tradeoffs: [
            "May underperform top tiers on hardest reasoning tasks.",
            "Needs prompt discipline for high-stakes outputs.",
            "Can still produce noisy long completions without caps.",
            "Requires fallback policy for edge-case complexity.",
        ],
        useCases: [
            "Long-document summarization and synthesis pipelines.",
            "Knowledge-grounded assistants for large internal corpora.",
            "Operations analytics narrative generation.",
            "Policy and process extraction across large artifacts.",
        ],
        deploymentChecklist: [
            "Set as long-context efficiency tier in routing policy.",
            "Define escalation to stronger reasoning models.",
            "Enforce response length and schema constraints.",
            "Track quality by content class and department.",
            "Review monthly for cost-to-quality optimization.",
        ],
        parameterNotes: [
            { name: "max_tokens", note: "Use strict caps to control long-context completion spend." },
            { name: "structured_outputs", note: "Recommended for extraction and operational automation." },
            { name: "temperature", note: "Lower settings generally improve enterprise consistency." },
            { name: "top_p", note: "Conservative sampling helps in document-heavy workflows." },
        ],
        faqs: [
            {
                question: "Where does Qwen3.5-Flash fit in a model portfolio?",
                answer: "It fits well as an efficient long-context tier between compact and premium models.",
            },
            {
                question: "Can it replace premium reasoning tiers?",
                answer: "Not entirely. Premium tiers are still preferred for highest-complexity reasoning tasks.",
            },
            {
                question: "What is the biggest operational risk?",
                answer: "Letting long outputs run without token controls, which can hurt cost predictability.",
            },
        ],
        modality: "text+image+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "qwen-3-5-122b-a10b",
        modelId: "qwen/qwen3.5-122b-a10b",
        heroLabel: "Large-Capacity Reasoning Tier",
        heroSubtitle:
            "A large-capacity model profile for teams needing stronger reasoning quality at moderate enterprise pricing.",
        providerSummary:
            "Qwen3.5-122B-A10B is positioned as a high-capacity multimodal model for demanding reasoning and analysis workloads.",
        summaryPoints: [
            "Higher-capacity architecture for stronger output depth.",
            "More affordable than many premium frontier tiers.",
            "Good fit for technical analysis and complex synthesis.",
            "Needs policy routing to keep spend aligned with value.",
        ],
        strengths: [
            "Stronger reasoning than compact efficiency models.",
            "Useful for technical and analytical business workloads.",
            "Multimodal support expands workflow applicability.",
            "Practical balance of capability and cost.",
        ],
        tradeoffs: [
            "Slower and more expensive than flash-tier alternatives.",
            "Not always required for routine assistant interactions.",
            "Needs selective enablement for cost control.",
            "Long complex prompts can increase response latency.",
        ],
        useCases: [
            "Advanced technical analysis and policy interpretation.",
            "Complex enterprise research workflows.",
            "Deep comparative evaluations and recommendation generation.",
            "Multimodal reasoning across mixed data sources.",
        ],
        deploymentChecklist: [
            "Target high-complexity teams first.",
            "Set task-level criteria for when this tier is allowed.",
            "Compare outputs with cheaper alternatives regularly.",
            "Monitor latency and spend alongside quality.",
            "Route low-complexity requests away from this tier.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Lower settings improve consistency for technical and policy content." },
            { name: "top_p", note: "Control sampling to stabilize high-complexity analytical outputs." },
            { name: "max_tokens", note: "Use per-workflow caps to maintain budget predictability." },
            { name: "response_format", note: "Use explicit response structures for downstream review processes." },
        ],
        faqs: [
            {
                question: "When should teams choose Qwen3.5-122B-A10B?",
                answer: "Choose it for harder reasoning tasks where compact or flash tiers underperform.",
            },
            {
                question: "Is it economical enough for broad default usage?",
                answer: "Usually it is better as a selective high-capability tier rather than an org-wide default.",
            },
            {
                question: "What is a common governance mistake?",
                answer: "Using this tier for routine requests that do not require advanced reasoning depth.",
            },
        ],
        modality: "text+image+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gemini-3-1-pro-preview-custom-tools",
        modelId: "google/gemini-3.1-pro-preview-customtools",
        heroLabel: "Tool-Orchestration Tier",
        heroSubtitle:
            "A tool-focused pro profile for agent workflows that depend on reliable function and tool selection behavior.",
        providerSummary:
            "Gemini 3.1 Pro Preview Custom Tools is positioned to improve tool selection reliability in agentic workflows.",
        summaryPoints: [
            "Optimized for structured tool-calling behavior.",
            "High context and multimodal coverage for complex orchestration.",
            "Useful for agent pipelines with strict action semantics.",
            "Requires thorough workflow testing before broad production use.",
        ],
        strengths: [
            "Better fit for tool-heavy agent execution paths.",
            "Supports rich input modalities for complex pipelines.",
            "Strong option for orchestrated enterprise automation.",
            "Helps reduce misfires in tool selection scenarios.",
        ],
        tradeoffs: [
            "Preview status can require tighter change management.",
            "Higher cost than flash-like throughput tiers.",
            "Not necessary for non-agent conversational tasks.",
            "Needs robust observability around tool outcomes.",
        ],
        useCases: [
            "Agent workflows with deterministic tool execution needs.",
            "Multi-step business process automation with tool chains.",
            "Enterprise copilots invoking internal APIs safely.",
            "Document-plus-tool reasoning for operations teams.",
        ],
        deploymentChecklist: [
            "Validate tool selection behavior on real workflows.",
            "Define explicit failure and retry handling policies.",
            "Log tool invocation outcomes for audit review.",
            "Set budget thresholds for high-volume agent traffic.",
            "Maintain fallback path for degraded tool routing.",
        ],
        parameterNotes: [
            { name: "response_format", note: "Use strict schemas for tool call arguments and action payloads." },
            { name: "structured_outputs", note: "Required for stable orchestration in enterprise automation." },
            { name: "temperature", note: "Keep low for deterministic tool invocation behavior." },
            { name: "max_tokens", note: "Cap outputs to prevent runaway chains in agent loops." },
        ],
        faqs: [
            {
                question: "Why use the custom-tools variant?",
                answer: "It is optimized for more reliable tool-selection behavior in agentic workflows.",
            },
            {
                question: "Is this variant necessary for standard chat use?",
                answer: "Usually no. Its main value is in tool orchestration rather than plain conversation.",
            },
            {
                question: "What should teams monitor in production?",
                answer: "Monitor tool call success rates, incorrect invocations, and cost per completed automation.",
            },
        ],
        modality: "text+image+file+audio+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gpt-5-3-codex",
        modelId: "openai/gpt-5.3-codex",
        heroLabel: "Coding Specialist Tier",
        heroSubtitle:
            "A coding-focused model profile for software engineering tasks, refactoring flows, and agentic developer tooling.",
        providerSummary:
            "GPT-5.3-Codex is positioned as a software-focused model for code generation, code reasoning, and engineering automation.",
        summaryPoints: [
            "Specialized toward coding and software delivery workflows.",
            "Useful for internal developer agents and repo automation.",
            "Stronger fit for engineering tasks than general chat tiers.",
            "Should be governed with code-safety and review controls.",
        ],
        strengths: [
            "High utility for coding and technical refactoring prompts.",
            "Good fit for developer assistant and CI support workflows.",
            "Large context supports broader repository reasoning.",
            "Can improve engineering throughput with proper controls.",
        ],
        tradeoffs: [
            "Not optimized for all non-technical business use cases.",
            "Code generation without review can introduce risk.",
            "Requires strict policies around sensitive repositories.",
            "Can be overused for tasks cheaper models can handle.",
        ],
        useCases: [
            "Internal coding assistant for engineering teams.",
            "Refactor planning and dependency migration support.",
            "Test generation and code review assistance.",
            "Developer workflow automation in CI/CD environments.",
        ],
        deploymentChecklist: [
            "Define approved repositories and data access boundaries.",
            "Enforce human review for production-impacting changes.",
            "Log generated code artifacts for traceability.",
            "Set budget and token limits for engineering teams.",
            "Measure defect rate and review efficiency over time.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Lower values improve deterministic and reviewable code output." },
            { name: "max_tokens", note: "Set limits by task type to control long code generation sessions." },
            { name: "response_format", note: "Use structured output for patch or diff-oriented workflows." },
            { name: "reasoning", note: "Increase only for complex architecture or debugging tasks." },
        ],
        faqs: [
            {
                question: "Should GPT-5.3-Codex be the only model for developer workflows?",
                answer: "It can be primary for coding tasks, but many teams still use cheaper tiers for non-code operations.",
            },
            {
                question: "What governance controls matter most?",
                answer: "Repository scoping, review requirements, and logging of generated changes are key.",
            },
            {
                question: "How do we prove ROI?",
                answer: "Track engineering cycle time, review throughput, and defect escape rates before and after rollout.",
            },
        ],
        modality: "text+image->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "gemini-3-1-pro-preview",
        modelId: "google/gemini-3.1-pro-preview",
        heroLabel: "Pro Reasoning Tier",
        heroSubtitle:
            "A high-capability reasoning profile for enterprise planning, advanced analysis, and complex cross-functional workflows.",
        providerSummary:
            "Gemini 3.1 Pro Preview is positioned as a frontier reasoning tier for demanding enterprise tasks.",
        summaryPoints: [
            "Strong model depth for complex analytical prompts.",
            "Large context and broad modality support across workloads.",
            "Suitable for strategic and high-impact business workflows.",
            "Requires governance controls to avoid premium-tier sprawl.",
        ],
        strengths: [
            "High-quality reasoning for difficult enterprise questions.",
            "Broad modality handling for diverse internal inputs.",
            "Useful for planning, synthesis, and expert support flows.",
            "Can serve as a top-tier option in multi-model strategy.",
        ],
        tradeoffs: [
            "Higher cost than efficiency and flash tiers.",
            "Preview lifecycle may require tighter operational review.",
            "Not needed for repetitive low-complexity traffic.",
            "Requires clear routing policies for budget control.",
        ],
        useCases: [
            "Strategic planning copilots for leadership teams.",
            "Advanced cross-domain analysis and recommendations.",
            "Long-context policy and process synthesis.",
            "Complex decision-support workflows with mixed inputs.",
        ],
        deploymentChecklist: [
            "Define top-tier access policies by business function.",
            "Route routine requests to lower-cost model tiers.",
            "Audit output quality for high-impact decisions.",
            "Track premium-tier cost by department.",
            "Review preview-tier changes on a fixed cadence.",
        ],
        parameterNotes: [
            { name: "reasoning", note: "Use deeper reasoning settings selectively for complex tasks." },
            { name: "temperature", note: "Lower values support stable decision-support outputs." },
            { name: "max_tokens", note: "Control long-form completions with workflow-specific caps." },
            { name: "structured_outputs", note: "Use for operational systems requiring deterministic payloads." },
        ],
        faqs: [
            {
                question: "When is Gemini 3.1 Pro Preview the right choice?",
                answer: "It is appropriate for high-complexity workflows where output quality directly impacts decisions.",
            },
            {
                question: "Can it be used as the company-wide default?",
                answer: "Most organizations prefer a tiered strategy to balance quality and cost.",
            },
            {
                question: "How should teams control spend?",
                answer: "Use role-based access, routing rules, and budget alerts by department.",
            },
        ],
        modality: "text+image+file+audio+video->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "claude-sonnet-4-6",
        modelId: "anthropic/claude-sonnet-4.6",
        heroLabel: "Balanced Frontier Tier",
        heroSubtitle:
            "A high-performance balanced profile for enterprise writing, engineering collaboration, and professional analysis.",
        providerSummary:
            "Claude Sonnet 4.6 is positioned as a balanced frontier tier for coding, knowledge work, and long-context professional tasks.",
        summaryPoints: [
            "Strong quality across technical and business workflows.",
            "Large context supports long enterprise artifacts.",
            "Useful as a high-performance general tier.",
            "Best with policy controls and departmental spend boundaries.",
        ],
        strengths: [
            "Reliable output quality across diverse enterprise tasks.",
            "Strong fit for mixed writing and technical assistance.",
            "Supports multimodal context where needed.",
            "Practical balance of capability and premium cost.",
        ],
        tradeoffs: [
            "Cost may be high for broad low-complexity traffic.",
            "Can be overprovisioned for simple support tasks.",
            "Requires routing to keep unit economics stable.",
            "Complex workflows still need governance oversight.",
        ],
        useCases: [
            "Executive and policy drafting support.",
            "Engineering collaboration and technical writing.",
            "High-quality enterprise knowledge assistants.",
            "Cross-functional analytical memos and reviews.",
        ],
        deploymentChecklist: [
            "Enable in teams with clear quality-driven use cases.",
            "Define fallback model for routine tasks.",
            "Apply policy templates for high-risk output classes.",
            "Monitor quality and spend on a monthly cadence.",
            "Retune model routing with observed demand patterns.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Lower for policy and compliance outputs; higher for ideation drafts." },
            { name: "max_tokens", note: "Set task-specific completion limits for better cost control." },
            { name: "response_format", note: "Use structured output in workflows with strict downstream parsing." },
            { name: "top_p", note: "Constrain for predictable enterprise communication style." },
        ],
        faqs: [
            {
                question: "Why choose Sonnet 4.6 over a smaller tier?",
                answer: "Teams choose it when they need higher output quality across both technical and business tasks.",
            },
            {
                question: "Should Sonnet 4.6 be used for every workflow?",
                answer: "No. A tiered model strategy is usually more cost-effective.",
            },
            {
                question: "What metric indicates healthy rollout?",
                answer: "Stable quality gains with controlled spend and low policy exception rates.",
            },
        ],
        modality: "text+image->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "minimax-m2-5",
        modelId: "minimax/minimax-m2.5",
        heroLabel: "General Productivity Tier",
        heroSubtitle:
            "A practical production profile for organizations optimizing day-to-day productivity at controlled cost.",
        providerSummary:
            "MiniMax M2.5 is positioned as a general-purpose productivity model for practical enterprise deployment.",
        summaryPoints: [
            "Cost-effective for broad operational assistant scenarios.",
            "Strong candidate for medium-depth business workflows.",
            "Useful where practical throughput matters more than frontier depth.",
            "Can anchor a reliable default tier in many teams.",
        ],
        strengths: [
            "Good overall economics for recurring workflows.",
            "Suitable for broad internal productivity use.",
            "Simple text profile for predictable integration.",
            "Can reduce dependency on premium tiers.",
        ],
        tradeoffs: [
            "No multimodal support in this listed profile.",
            "May not match frontier models on hardest reasoning tasks.",
            "Requires escalation policy for complex prompts.",
            "Quality may vary for highly specialized domains.",
        ],
        useCases: [
            "Department-level productivity assistants.",
            "Operational drafting and summarization workflows.",
            "Internal process Q&A and task support.",
            "Routine automation with cost-awareness goals.",
        ],
        deploymentChecklist: [
            "Start with non-critical operational workflows.",
            "Set escalation path for complex prompt categories.",
            "Track adoption and quality by department.",
            "Add prompt templates for recurring tasks.",
            "Reassess placement in routing stack quarterly.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Use low-to-moderate settings for balanced consistency." },
            { name: "max_tokens", note: "Cap response sizes for repetitive operational workloads." },
            { name: "response_format", note: "Use structured outputs where workflows require parsing." },
            { name: "top_p", note: "Tune conservatively to keep enterprise tone stable." },
        ],
        faqs: [
            {
                question: "Is MiniMax M2.5 good for broad deployment?",
                answer: "Yes for many operational scenarios, especially when cost and throughput are key constraints.",
            },
            {
                question: "When should teams escalate beyond this model?",
                answer: "Escalate for deep strategic reasoning, advanced coding, or highly specialized analytical tasks.",
            },
            {
                question: "How should performance be measured?",
                answer: "Measure task completion quality, user satisfaction, and spend efficiency by workflow.",
            },
        ],
        modality: "text->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "glm-5",
        modelId: "z-ai/glm-5",
        heroLabel: "Open Strategy Tier",
        heroSubtitle:
            "An open-model profile for organizations prioritizing strong reasoning with flexibility in model strategy.",
        providerSummary:
            "GLM-5 is positioned as an open flagship model for long-horizon planning and complex agent workflows.",
        summaryPoints: [
            "Open-model positioning supports diversified vendor strategy.",
            "Built for planning-heavy and agentic reasoning tasks.",
            "Strong option for teams optimizing strategic flexibility.",
            "Requires governance controls equal to closed-model deployments.",
        ],
        strengths: [
            "Open ecosystem alignment for model portfolio flexibility.",
            "Good capability for complex planning tasks.",
            "Reasonable cost profile for an advanced tier.",
            "Useful in organizations reducing single-vendor concentration.",
        ],
        tradeoffs: [
            "Text-only modality in this profile can limit some workflows.",
            "May require more benchmarking against frontier proprietary tiers.",
            "Enterprise tuning and governance still mandatory.",
            "Not always the best fit for low-latency UX tasks.",
        ],
        useCases: [
            "Strategic planning assistants in operations and IT.",
            "Complex agent workflows with long reasoning chains.",
            "Open-model portfolio deployments for governance teams.",
            "Process optimization and long-horizon scenario analysis.",
        ],
        deploymentChecklist: [
            "Benchmark against both open and proprietary alternatives.",
            "Set governance baselines before broad enablement.",
            "Route text-only compatible workflows first.",
            "Track quality consistency across domain-specific prompts.",
            "Review vendor concentration metrics quarterly.",
        ],
        parameterNotes: [
            { name: "reasoning", note: "Use higher reasoning settings only on long-horizon planning tasks." },
            { name: "temperature", note: "Lower values generally improve policy and planning consistency." },
            { name: "max_tokens", note: "Use completion caps for cost discipline in multi-step tasks." },
            { name: "response_format", note: "Use structured output for workflow orchestration and audits." },
        ],
        faqs: [
            {
                question: "Why choose GLM-5 in an enterprise portfolio?",
                answer: "It can support open-model strategy while still offering strong reasoning capabilities.",
            },
            {
                question: "Is GLM-5 enough as the only model tier?",
                answer: "Most organizations still combine it with specialized low-cost and premium tiers.",
            },
            {
                question: "What rollout risk should teams watch?",
                answer: "Underestimating governance and routing needs because of open-model flexibility.",
            },
        ],
        modality: "text->text",
        sourceCheckedAt: "2026-03-15",
    },
    {
        slug: "claude-opus-4-6",
        modelId: "anthropic/claude-opus-4.6",
        heroLabel: "Premium Specialist Tier",
        heroSubtitle:
            "A top-end model profile for the most difficult enterprise reasoning, writing, and high-consequence analysis tasks.",
        providerSummary:
            "Claude Opus 4.6 is positioned as a premium capability tier for complex professional tasks requiring maximal model depth.",
        summaryPoints: [
            "High-end capability for demanding enterprise outputs.",
            "Strong fit for strategic and high-consequence work.",
            "Large context supports deep synthesis and review.",
            "Best deployed as a selective specialist tier.",
        ],
        strengths: [
            "Top-tier quality for complex reasoning workloads.",
            "Strong performance on nuanced writing and analysis.",
            "Useful for critical workflows with low error tolerance.",
            "Good option for expert-level assistant scenarios.",
        ],
        tradeoffs: [
            "Premium pricing demands strict usage governance.",
            "Not economical for broad routine deployment.",
            "Requires tight routing and role-based access.",
            "Can create unnecessary spend without workflow controls.",
        ],
        useCases: [
            "Executive strategy analysis and board-level briefing support.",
            "Complex legal and compliance synthesis tasks.",
            "High-stakes policy drafting and review.",
            "Difficult cross-domain problem solving with long context.",
        ],
        deploymentChecklist: [
            "Restrict to approved high-impact workflows.",
            "Set strict budget limits and alert thresholds.",
            "Require review checkpoints for critical outputs.",
            "Track value delivered versus premium spend.",
            "Continuously reroute routine tasks to lower tiers.",
        ],
        parameterNotes: [
            { name: "temperature", note: "Use low settings for high-consequence enterprise outputs." },
            { name: "reasoning", note: "Increase only when deeper reasoning changes outcome quality." },
            { name: "max_tokens", note: "Cap verbose responses to avoid expensive long completions." },
            { name: "structured_outputs", note: "Use schemas for deterministic systems integration." },
        ],
        faqs: [
            {
                question: "When should teams use Claude Opus 4.6?",
                answer: "Use it when the business impact of output quality clearly justifies premium spend.",
            },
            {
                question: "Can Opus 4.6 be a general default model?",
                answer: "It is usually better as a selective specialist tier for difficult, high-value workflows.",
            },
            {
                question: "What governance pattern works best?",
                answer: "Role gating, spend controls, and workflow-specific routing policies are essential.",
            },
        ],
        modality: "text+image->text",
        sourceCheckedAt: "2026-03-15",
    },
];

function toModelLanding(seed: ModelLandingSeed): ModelLanding {
    const model = models.find((entry) => entry.id === seed.modelId);
    if (!model) {
        throw new Error(`Missing model data for landing seed: ${seed.modelId}`);
    }

    const metaTitle = `${model.name} | Enterprise Model Landing`;
    const metaDescription = `Detailed enterprise profile for ${model.name}: positioning, strengths, tradeoffs, and deployment guidance.`;

    return {
        slug: seed.slug,
        modelId: seed.modelId,
        heroLabel: seed.heroLabel,
        heroTitle: model.name,
        heroSubtitle: seed.heroSubtitle,
        metaTitle,
        metaDescription,
        providerSummary: seed.providerSummary,
        summaryPoints: seed.summaryPoints,
        strengths: seed.strengths,
        tradeoffs: seed.tradeoffs,
        useCases: seed.useCases,
        deploymentChecklist: seed.deploymentChecklist,
        parameterNotes: seed.parameterNotes,
        specNotes: [
            { label: "Model ID", value: model.id },
            { label: "Context Window", value: `${fmtNumber.format(model.contextLength)} tokens` },
            { label: "Modality", value: seed.modality },
            { label: "Input Price", value: formatPrice(model.inputPer1M) },
            { label: "Output Price", value: formatPrice(model.outputPer1M) },
            { label: "Provider", value: model.provider },
            { label: "Listing Date", value: model.releasedAt },
        ],
        faqs: seed.faqs,
        sourceCheckedAt: seed.sourceCheckedAt,
    };
}

const batchThemes = [
    {
        heroLabel: "Capability Assessment",
        governanceLine: "Use role-based access before broad team rollout.",
        rolloutFocus: "pilot this model on one workflow before wider enablement.",
    },
    {
        heroLabel: "Production Readiness Profile",
        governanceLine: "Enforce policy checks and output review on sensitive workflows.",
        rolloutFocus: "monitor quality and spend weekly during early deployment.",
    },
    {
        heroLabel: "Enterprise Deployment Brief",
        governanceLine: "Route requests by policy tier to prevent capability overuse.",
        rolloutFocus: "define escalation rules to premium models before launch.",
    },
    {
        heroLabel: "Operational Fit Analysis",
        governanceLine: "Apply department budgets and alert thresholds from day one.",
        rolloutFocus: "measure business impact against cost before scaling usage.",
    },
    {
        heroLabel: "Governed AI Model Profile",
        governanceLine: "Keep audit logs enabled for all high-impact use cases.",
        rolloutFocus: "start with approved teams, then expand in controlled waves.",
    },
];

const fallbackParameterNotes: { name: string; note: string }[] = [
    { name: "max_tokens", note: "Set completion limits to avoid unpredictable long-output spend." },
    { name: "temperature", note: "Lower temperature for deterministic policy and compliance tasks." },
    { name: "top_p", note: "Use tighter sampling for stable outputs in repeatable operations." },
    { name: "response_format", note: "Prefer structured output where responses feed internal systems." },
];

const parameterGuidance: Record<string, string> = {
    frequency_penalty: "Tune repetition control for long responses in multi-step workflows.",
    include_reasoning: "Enable only where reasoning traces add operational value or review quality.",
    max_tokens: "Set completion limits to avoid unpredictable long-output spend.",
    presence_penalty: "Use carefully when expanding idea diversity in exploration-heavy prompts.",
    reasoning: "Increase reasoning effort only for complex tasks that justify extra cost.",
    response_format: "Prefer structured output where responses feed internal systems.",
    stop: "Use stop sequences to keep output boundaries consistent across automations.",
    temperature: "Lower temperature for deterministic policy and compliance tasks.",
    tool_choice: "Constrain tool selection when deterministic workflow routing is required.",
    tools: "Whitelist approved tools only to reduce misuse risk in agent workflows.",
    top_p: "Use tighter sampling for stable outputs in repeatable operations.",
};

function normalizeSlug(value: string) {
    const normalized = value
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    return normalized || "model";
}

function numericHash(value: string) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
        hash = (hash * 31 + value.charCodeAt(index)) | 0;
    }
    return Math.abs(hash);
}

function shortHash(value: string) {
    return numericHash(value).toString(36).slice(0, 6);
}

function ensureUniqueSlug(model: ModelEntry, usedSlugs: Set<string>) {
    const base = normalizeSlug(model.name);
    const providerSuffix = normalizeSlug(model.provider).slice(0, 16);

    const candidates = [
        base,
        `${base}-${providerSuffix}`,
        `${base}-${shortHash(model.id)}`,
    ];

    let candidate = candidates.find((entry) => !usedSlugs.has(entry));
    if (!candidate) {
        let counter = 2;
        candidate = `${base}-${shortHash(model.id)}-${counter}`;
        while (usedSlugs.has(candidate)) {
            counter += 1;
            candidate = `${base}-${shortHash(model.id)}-${counter}`;
        }
    }

    usedSlugs.add(candidate);
    return candidate;
}

function contextBand(model: ModelEntry) {
    if (model.contextLength >= 1_000_000) return "ultra-long context";
    if (model.contextLength >= 200_000) return "long context";
    return "standard context";
}

function pricingBand(model: ModelEntry) {
    if (model.inputPer1M <= 0.3) return "cost-efficient";
    if (model.inputPer1M <= 2.5) return "balanced";
    return "premium";
}

function defaultModality(model: ModelEntry) {
    if (model.modality) return model.modality;
    if (model.bestFor.some((entry) => /multimodal|image|audio|video/i.test(entry))) {
        return "text+image->text";
    }
    return "text->text";
}

function bestFitPhrase(model: ModelEntry) {
    const topTags = model.bestFor.slice(0, 2);
    if (topTags.length === 0) return "enterprise assistant operations";
    if (topTags.length === 1) return topTags[0].toLowerCase();
    return `${topTags[0].toLowerCase()} and ${topTags[1].toLowerCase()}`;
}

function articleFor(phrase: string) {
    return /^[aeiou]/i.test(phrase) ? "an" : "a";
}

function trimCopy(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function rotatePick<T>(items: T[], start: number, count: number) {
    if (items.length === 0 || count <= 0) return [];
    const selected: T[] = [];
    for (let index = 0; index < count; index += 1) {
        selected.push(items[(start + index) % items.length]);
    }
    return selected;
}

function tradeoffsForModel(model: ModelEntry, context: string, pricing: string, modality: string, autoIndex: number) {
    const commonTradeoffs = [
        "Quality and latency should be benchmarked against your internal prompt set before broad rollout.",
        "Without workload routing, teams may overuse this model for requests that fit lower-cost tiers.",
        "Governance controls are still required for regulated or sensitive workflows.",
        "Operational drift can appear over time without recurring quality evaluations.",
        "Prompt standards are still needed to keep output quality consistent across teams.",
        "Policy exceptions should be monitored and reviewed on a fixed cadence.",
    ];

    const contextTradeoffs: Record<string, string> = {
        "ultra-long context": "Very large context windows can increase token spend variance without strict limits.",
        "long context": "Long-context prompts can increase spend and latency if prompts are not scoped carefully.",
        "standard context": "Standard context limits may require chunking or retrieval strategies for large documents.",
    };

    const pricingTradeoffs: Record<string, string> = {
        "cost-efficient": "Low-cost tiers can still underperform on high-consequence decisions without escalation paths.",
        balanced: "Balanced-price tiers still need policy-based routing to protect monthly budgets.",
        premium: "Premium tiers should be restricted to high-value workflows to avoid unnecessary spend concentration.",
    };

    const modalityTradeoff = modality.includes("+")
        ? "Multimodal pipelines require strict input handling and validation policies for reliability."
        : "Text-only modality can limit workflows that rely on image, audio, or document interpretation.";

    const hash = numericHash(`${model.id}-${autoIndex}`);
    const selectedCommon = rotatePick(commonTradeoffs, hash % commonTradeoffs.length, 2);

    return [
        selectedCommon[0],
        contextTradeoffs[context] ?? selectedCommon[1],
        pricingTradeoffs[pricing] ?? "Cost governance is still required for sustainable production use.",
        modalityTradeoff,
    ];
}

function useCaseFromTag(tag: string, modelName: string) {
    const value = tag.toLowerCase();
    if (value.includes("code")) return `${modelName} for software delivery workflows with policy-enforced prompts.`;
    if (value.includes("reason")) return `${modelName} for complex analysis and long-form decision support.`;
    if (value.includes("multimodal")) return `${modelName} for document, image, or mixed-input processing pipelines.`;
    if (value.includes("agent")) return `${modelName} for tool-driven automation with governance checkpoints.`;
    if (value.includes("latency")) return `${modelName} for high-volume assistant traffic with low-response targets.`;
    if (value.includes("cost")) return `${modelName} for scaled deployment under strict budget constraints.`;
    return `${modelName} for internal productivity assistants and knowledge workflows.`;
}

function parameterNotesForModel(model: ModelEntry) {
    const supported = Array.from(new Set(model.supportedParameters ?? []));
    const notes = supported
        .map((parameter) => ({
            name: parameter,
            note: parameterGuidance[parameter] ?? "Use this parameter only with tested defaults in production workflows.",
        }))
        .slice(0, 4);

    for (const fallback of fallbackParameterNotes) {
        if (notes.length >= 4) break;
        if (notes.some((entry) => entry.name === fallback.name)) continue;
        notes.push(fallback);
    }

    return notes;
}

function autoLandingForModel(model: ModelEntry, autoIndex: number, usedSlugs: Set<string>): ModelLanding {
    const batchIndex = Math.floor(autoIndex / 20);
    const theme = batchThemes[batchIndex % batchThemes.length];
    const context = contextBand(model);
    const pricing = pricingBand(model);
    const modality = defaultModality(model);
    const slug = ensureUniqueSlug(model, usedSlugs);
    const fitPhrase = bestFitPhrase(model);
    const contextArticle = articleFor(context);
    const useCases = model.bestFor.slice(0, 4).map((entry) => useCaseFromTag(entry, model.name));
    const bestFitList = model.bestFor.length > 0 ? model.bestFor.join(", ") : "General assistants";
    const topUseCasesText =
        model.bestFor.length > 1
            ? `${model.bestFor[0].toLowerCase()} and ${model.bestFor[1].toLowerCase()}`
            : model.bestFor[0]?.toLowerCase() ?? "general assistants";
    while (useCases.length < 4) {
        useCases.push(`${model.name} for governed enterprise assistant workflows across teams.`);
    }

    const strengths = [
        `${model.name} is suited for ${model.bestFor[0]?.toLowerCase() ?? "general enterprise assistants"}.`,
        `Supports ${context} for multi-step prompts and larger working sets.`,
        `Pricing profile is ${pricing}, enabling predictable workload routing decisions.`,
        `Can be paired with policy guardrails for safer deployment at scale.`,
    ];

    const tradeoffs = tradeoffsForModel(model, context, pricing, modality, autoIndex);

    const inputModalities = (model.inputModalities ?? ["text"]).join(", ");
    const outputModalities = (model.outputModalities ?? ["text"]).join(", ");

    return {
        slug,
        modelId: model.id,
        heroLabel: theme.heroLabel,
        heroTitle: model.name,
        heroSubtitle: `${model.name} is a ${pricing} model with ${context} support, optimized for ${fitPhrase} in enterprise environments.`,
        metaTitle: `${model.name} | Enterprise Model Landing`,
        metaDescription: trimCopy(
            `${model.name} enterprise profile: ${context} support, ${pricing} pricing (${formatPrice(model.inputPer1M)} input), and deployment guidance for ${topUseCasesText}.`,
            158
        ),
        providerSummary: `${model.provider} lists ${model.name} as ${contextArticle} ${context} option with ${formatPrice(model.inputPer1M)} input pricing, ${formatPrice(model.outputPer1M)} output pricing, and ${modality} modality support for enterprise AI operations.`,
        summaryPoints: [
            `Latest profile indicates ${context} capacity for enterprise prompts and documents.`,
            `Current pricing band is ${pricing}: ${formatPrice(model.inputPer1M)} input and ${formatPrice(model.outputPer1M)} output.`,
            `Best-fit workloads include: ${bestFitList}.`,
            theme.governanceLine,
        ],
        strengths,
        tradeoffs,
        useCases,
        deploymentChecklist: [
            `Define where ${model.name} is default vs. fallback in your routing policy.`,
            "Enable role-based access and policy checks before opening access broadly.",
            "Set spend guardrails by team and monitor weekly token consumption.",
            theme.rolloutFocus,
            "Re-run quality and cost benchmarks monthly as newer releases appear.",
        ],
        parameterNotes: parameterNotesForModel(model),
        specNotes: [
            { label: "Model ID", value: model.id },
            { label: "Context Window", value: `${fmtNumber.format(model.contextLength)} tokens` },
            { label: "Modality", value: modality },
            { label: "Input Modalities", value: inputModalities },
            { label: "Output Modalities", value: outputModalities },
            { label: "Input Price", value: formatPrice(model.inputPer1M) },
            { label: "Output Price", value: formatPrice(model.outputPer1M) },
            { label: "Provider", value: model.provider },
            { label: "Listing Date", value: model.releasedAt },
        ],
        faqs: [
            {
                question: `When should teams choose ${model.name}?`,
                answer: `Choose ${model.name} when the workload aligns with ${bestFitList.toLowerCase()} and quality targets justify its pricing profile.`,
            },
            {
                question: `Can ${model.name} be used as a default model?`,
                answer: "It depends on workload mix. Most organizations use routing policies so routine traffic stays on lower-cost tiers.",
            },
            {
                question: "What should be validated before rollout?",
                answer: "Validate quality on real internal prompts, token efficiency, latency, and policy compliance behavior.",
            },
        ],
        sourceCheckedAt: modelsLastUpdated,
    };
}

const curatedLandings = landingSeeds.map(toModelLanding);
const curatedModelIds = new Set(curatedLandings.map((entry) => entry.modelId));
const usedSlugs = new Set(curatedLandings.map((entry) => entry.slug));

const autoLandings = models
    .filter((model) => !curatedModelIds.has(model.id))
    .map((model, index) => autoLandingForModel(model, index, usedSlugs));

export const modelLandings: ModelLanding[] = [...curatedLandings, ...autoLandings];
