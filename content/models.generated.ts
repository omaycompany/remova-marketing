// Auto-generated snapshot from model catalog source.
// Generated at 2026-03-19T09:30:05.864Z

export const generatedModelsLastUpdated = "2026-03-19";

export const generatedModels = [
    {
        "id": "xiaomi/mimo-v2-omni",
        "name": "MiMo-V2-Omni",
        "provider": "Xiaomi",
        "releasedAt": "2026-03-18",
        "contextLength": 262144,
        "inputPer1M": 0.4,
        "outputPer1M": 2,
        "summary": "MiMo-V2-Omni is a frontier omni-modal model that natively processes image, video, and audio inputs within a unified architecture.",
        "description": "MiMo-V2-Omni is a frontier omni-modal model that natively processes image, video, and audio inputs within a unified architecture. It combines strong multimodal perception with agentic capability - visual grounding, multi-step planning, tool use, and code execution - making it well-suited for complex real-world tasks that span modalities. 256K context window.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+audio+video->text",
        "inputModalities": [
            "text",
            "audio",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "xiaomi/mimo-v2-pro",
        "name": "MiMo-V2-Pro",
        "provider": "Xiaomi",
        "releasedAt": "2026-03-18",
        "contextLength": 1048576,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "MiMo-V2-Pro is Xiaomi's flagship foundation model, featuring over 1T total parameters and a 1M context length, deeply optimized for agentic scenarios.",
        "description": "MiMo-V2-Pro is Xiaomi's flagship foundation model, featuring over 1T total parameters and a 1M context length, deeply optimized for agentic scenarios. It is highly adaptable to general agent frameworks like OpenClaw. It ranks among the global top tier in the standard PinchBench and ClawBench benchmarks, with perceived performance approaching that of Opus 4.6. MiMo-V2-Pro is designed to serve as the brain of agent systems, orchestrating complex workflows, driving production engineering tasks, and delivering results reliably.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "minimax/minimax-m2.7",
        "name": "MiniMax M2.7",
        "provider": "MiniMax",
        "releasedAt": "2026-03-18",
        "contextLength": 204800,
        "inputPer1M": 0.3,
        "outputPer1M": 1.2,
        "summary": "MiniMax-M2.7 is a next-generation large language model designed for autonomous, real-world productivity and continuous improvement.",
        "description": "MiniMax-M2.7 is a next-generation large language model designed for autonomous, real-world productivity and continuous improvement. Built to actively participate in its own evolution, M2.7 integrates advanced agentic capabilities through multi-agent collaboration, enabling it to plan, execute, and refine complex tasks across dynamic environments. Trained for production-grade performance, M2.7 handles workflows such as live debugging, root cause analysis, financial modeling, and full document generation across Word, Excel, and PowerPoint. It delivers strong results on benchmarks including 56.2% on SWE-Pro and 57.0% on Terminal Bench 2, while achieving a 1495 ELO on GDPval-AA, setting a new standard for multi-agent systems operating in real-world digital workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5.4-mini",
        "name": "GPT-5.4 Mini",
        "provider": "OpenAI",
        "releasedAt": "2026-03-17",
        "contextLength": 400000,
        "inputPer1M": 0.75,
        "outputPer1M": 4.5,
        "summary": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads.",
        "description": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads. It supports text and image inputs with strong performance across reasoning, coding, and tool use, while reducing latency and cost for large-scale deployments. The model is designed for production environments that require a balance of capability and efficiency, making it well suited for chat applications, coding assistants, and agent workflows that operate at scale. GPT-5.4 mini delivers reliable instruction following, solid multi-step reasoning, and consistent performance across diverse tasks with improved cost efficiency.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.4-nano",
        "name": "GPT-5.4 Nano",
        "provider": "OpenAI",
        "releasedAt": "2026-03-17",
        "contextLength": 400000,
        "inputPer1M": 0.2,
        "outputPer1M": 1.25,
        "summary": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks.",
        "description": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks. It supports text and image inputs and is designed for low-latency use cases such as classification, data extraction, ranking, and sub-agent execution. The model prioritizes responsiveness and efficiency over deep reasoning, making it ideal for pipelines that require fast, reliable outputs at scale. GPT-5.4 nano is well suited for background tasks, real-time systems, and distributed agent architectures where minimizing cost and latency is essential.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mistral-small-2603",
        "name": "Mistral Small 4",
        "provider": "Mistral",
        "releasedAt": "2026-03-16",
        "contextLength": 262144,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "Mistral Small 4 is the next major release in the Mistral Small family, unifying the capabilities of several flagship Mistral models into a single system.",
        "description": "Mistral Small 4 is the next major release in the Mistral Small family, unifying the capabilities of several flagship Mistral models into a single system. It combines strong reasoning from Magistral, multimodal understanding from Pixtral, and agentic coding capabilities from Devstral, enabling one model to handle complex analysis, software development, and visual tasks within the same workflow.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "z-ai/glm-5-turbo",
        "name": "GLM 5 Turbo",
        "provider": "Z.ai",
        "releasedAt": "2026-03-15",
        "contextLength": 202752,
        "inputPer1M": 0.96,
        "outputPer1M": 3.2,
        "summary": "GLM-5 Turbo is a new model from Z.ai designed for fast inference and strong performance in agent-driven environments such as OpenClaw scenarios.",
        "description": "GLM-5 Turbo is a new model from Z.ai designed for fast inference and strong performance in agent-driven environments such as OpenClaw scenarios. It is deeply optimized for real-world agent workflows involving long execution chains, with improved complex instruction decomposition, tool use, scheduled and persistent execution, and overall stability across extended tasks.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "x-ai/grok-4.20-beta",
        "name": "Grok 4.20 Beta",
        "provider": "xAI",
        "releasedAt": "2026-03-12",
        "contextLength": 2000000,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Grok 4.20 Beta is xAI's newest flagship model with industry-leading speed and agentic tool calling capabilities.",
        "description": "Grok 4.20 Beta is xAI's newest flagship model with industry-leading speed and agentic tool calling capabilities. It combines the lowest hallucination rate on the market with strict prompt adherance, delivering consistently precise and truthful responses. Reasoning can be enabled/disabled using the `reasoning` `enabled` parameter in the API. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#controlling-reasoning-tokens)",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "x-ai/grok-4.20-multi-agent-beta",
        "name": "Grok 4.20 Multi-Agent Beta",
        "provider": "xAI",
        "releasedAt": "2026-03-12",
        "contextLength": 2000000,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Grok 4.20 Multi-Agent Beta is a variant of xAI’s Grok 4.20 designed for collaborative, agent-based workflows.",
        "description": "Grok 4.20 Multi-Agent Beta is a variant of xAI’s Grok 4.20 designed for collaborative, agent-based workflows. Multiple agents operate in parallel to conduct deep research, coordinate tool use, and synthesize information across complex tasks. Reasoning effort behavior: - low / medium: 4 agents - high / xhigh: 16 agents",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "nvidia/nemotron-3-super-120b-a12b",
        "name": "Nemotron 3 Super",
        "provider": "NVIDIA",
        "releasedAt": "2026-03-11",
        "contextLength": 262144,
        "inputPer1M": 0.1,
        "outputPer1M": 0.5,
        "summary": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications.",
        "description": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer Mixture-of-Experts architecture with multi-token prediction (MTP), it delivers over 50% higher token generation compared to leading open models. The model features a 1M token context window for long-term agent coherence, cross-document reasoning, and multi-step task planning. Latent MoE enables calling 4 experts for the inference cost of only one, improving intelligence and generalization. Multi-environment RL training across 10+ environments delivers leading accuracy on benchmarks including AIME 2025, TerminalBench, and SWE-Bench Verified. Fully open with weights, datasets, and recipes under the NVIDIA Open License, Nemotron 3 Super allows easy customization and secure deployment anywhere — from workstation to cloud.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "nvidia/nemotron-3-super-120b-a12b:free",
        "name": "Nemotron 3 Super (free)",
        "provider": "NVIDIA",
        "releasedAt": "2026-03-11",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications.",
        "description": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer Mixture-of-Experts architecture with multi-token prediction (MTP), it delivers over 50% higher token generation compared to leading open models. The model features a 1M token context window for long-term agent coherence, cross-document reasoning, and multi-step task planning. Latent MoE enables calling 4 experts for the inference cost of only one, improving intelligence and generalization. Multi-environment RL training across 10+ environments delivers leading accuracy on benchmarks including AIME 2025, TerminalBench, and SWE-Bench Verified. Fully open with weights, datasets, and recipes under the NVIDIA Open License, Nemotron 3 Super allows easy customization and secure deployment anywhere — from workstation to cloud.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3.5-9b",
        "name": "Qwen3.5-9B",
        "provider": "Qwen",
        "releasedAt": "2026-03-10",
        "contextLength": 256000,
        "inputPer1M": 0.05,
        "outputPer1M": 0.15,
        "summary": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture.",
        "description": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture. It uses a unified vision-language design with early fusion of multimodal tokens, allowing the model to process and reason across text and images within the same context.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "bytedance-seed/seed-2.0-lite",
        "name": "Seed-2.0-Lite",
        "provider": "ByteDance Seed",
        "releasedAt": "2026-03-10",
        "contextLength": 262144,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "Seed-2.0-Lite is a versatile, cost‑efficient enterprise workhorse that delivers strong multimodal and agent capabilities while offering noticeably lower latency, making it a practical default choice for most productio...",
        "description": "Seed-2.0-Lite is a versatile, cost‑efficient enterprise workhorse that delivers strong multimodal and agent capabilities while offering noticeably lower latency, making it a practical default choice for most production workloads across text, vision, and tools. Engineered for high-frequency visual understanding and agentic workflows, it's an ideal choice for deployment at scale with minimal latency.",
        "bestFor": [
            "Multimodal workflows",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5.4",
        "name": "GPT-5.4",
        "provider": "OpenAI",
        "releasedAt": "2026-03-05",
        "contextLength": 1050000,
        "inputPer1M": 2.5,
        "outputPer1M": 15,
        "summary": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system.",
        "description": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for text and image inputs, enabling high-context reasoning, coding, and multimodal analysis within the same workflow. The model delivers improved performance in coding, document understanding, tool use, and instruction following. It is designed as a strong default for both general-purpose tasks and software engineering, capable of generating production-quality code, synthesizing information across multiple sources, and executing complex multi-step workflows with fewer iterations and greater token efficiency.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.4-pro",
        "name": "GPT-5.4 Pro",
        "provider": "OpenAI",
        "releasedAt": "2026-03-05",
        "contextLength": 1050000,
        "inputPer1M": 30,
        "outputPer1M": 180,
        "summary": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks.",
        "description": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K output) with support for text and image inputs. Optimized for step-by-step reasoning, instruction following, and accuracy, GPT-5.4 Pro excels at agentic coding, long-context workflows, and multi-step problem solving.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "inception/mercury-2",
        "name": "Mercury 2",
        "provider": "Inception",
        "releasedAt": "2026-03-04",
        "contextLength": 128000,
        "inputPer1M": 0.25,
        "outputPer1M": 0.75,
        "summary": "Mercury 2 is an extremely fast reasoning LLM, and the first reasoning diffusion LLM (dLLM).",
        "description": "Mercury 2 is an extremely fast reasoning LLM, and the first reasoning diffusion LLM (dLLM). Instead of generating tokens sequentially, Mercury 2 produces and refines multiple tokens in parallel, achieving >1,000 tokens/sec on standard GPUs. Mercury 2 is 5x+ faster than leading speed-optimized LLMs like Claude 4.5 Haiku and GPT 5 Mini, at a fraction of the cost. Mercury 2 supports tunable reasoning levels, 128K context, native tool use, and schema-aligned JSON output. Built for coding workflows where latency compounds, real-time voice/search, and agent loops. OpenAI API compatible. Read more in the [blog post](https://www.inceptionlabs.ai/blog/introducing-mercury-2).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "google/gemini-3.1-flash-lite-preview",
        "name": "Gemini 3.1 Flash Lite Preview",
        "provider": "Google",
        "releasedAt": "2026-03-03",
        "contextLength": 1048576,
        "inputPer1M": 0.25,
        "outputPer1M": 1.5,
        "summary": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases.",
        "description": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases. It outperforms Gemini 2.5 Flash Lite on overall quality and approaches Gemini 2.5 Flash performance across key capabilities. Improvements span audio input/ASR, RAG snippet ranking, translation, data extraction, and code completion. Supports full thinking levels (minimal, low, medium, high) for fine-grained cost/performance trade-offs. Priced at half the cost of Gemini 3 Flash.",
        "bestFor": [
            "Code generation",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "video",
            "file",
            "audio"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5.3-chat",
        "name": "GPT-5.3 Chat",
        "provider": "OpenAI",
        "releasedAt": "2026-03-03",
        "contextLength": 128000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.3 Chat is an update to ChatGPT's most-used model that makes everyday conversations smoother, more useful, and more directly helpful.",
        "description": "GPT-5.3 Chat is an update to ChatGPT's most-used model that makes everyday conversations smoother, more useful, and more directly helpful. It delivers more accurate answers with better contextualization and significantly reduces unnecessary refusals, caveats, and overly cautious phrasing that can interrupt conversational flow.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "google/gemini-3.1-flash-image-preview",
        "name": "Nano Banana 2 (Gemini 3.1 Flash Image Preview)",
        "provider": "Google",
        "releasedAt": "2026-02-26",
        "contextLength": 65536,
        "inputPer1M": 0.5,
        "outputPer1M": 3,
        "summary": "Gemini 3.1 Flash Image Preview, a.k.a.",
        "description": "Gemini 3.1 Flash Image Preview, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines advanced contextual understanding with fast, cost-efficient inference, making complex image generation and iterative edits significantly more accessible. Aspect ratios can be controlled with the [image_config API Parameter](https://model catalog.ai/docs/features/multimodal/image-generation#image-aspect-ratio-configuration)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text+image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image",
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "bytedance-seed/seed-2.0-mini",
        "name": "Seed-2.0-Mini",
        "provider": "ByteDance Seed",
        "releasedAt": "2026-02-26",
        "contextLength": 262144,
        "inputPer1M": 0.1,
        "outputPer1M": 0.4,
        "summary": "Seed-2.0-mini targets latency-sensitive, high-concurrency, and cost-sensitive scenarios, emphasizing fast response and flexible inference deployment.",
        "description": "Seed-2.0-mini targets latency-sensitive, high-concurrency, and cost-sensitive scenarios, emphasizing fast response and flexible inference deployment. It delivers performance comparable to ByteDance-Seed-1.6, supports 256k context, four reasoning effort modes (minimal/low/medium/high), multimodal understanding, and is optimized for lightweight tasks where cost and speed take priority.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-3.1-pro-preview-customtools",
        "name": "Gemini 3.1 Pro Preview Custom Tools",
        "provider": "Google",
        "releasedAt": "2026-02-25",
        "contextLength": 1048576,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party or user-defined functions are avail...",
        "description": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party or user-defined functions are available. This specialized preview endpoint significantly increases function calling reliability and ensures the model selects the most appropriate tool in coding agents and complex, multi-tool workflows. It retains the core strengths of Gemini 3.1 Pro, including multimodal reasoning across text, image, video, audio, and code, a 1M-token context window, and strong software engineering performance.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "audio",
            "image",
            "video",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "liquid/lfm-2-24b-a2b",
        "name": "LFM2-24B-A2B",
        "provider": "LiquidAI",
        "releasedAt": "2026-02-25",
        "contextLength": 32768,
        "inputPer1M": 0.03,
        "outputPer1M": 0.12,
        "summary": "LFM2-24B-A2B is the largest model in the LFM2 family of hybrid architectures designed for efficient on-device deployment.",
        "description": "LFM2-24B-A2B is the largest model in the LFM2 family of hybrid architectures designed for efficient on-device deployment. Built as a 24B parameter Mixture-of-Experts model with only 2B active parameters per token, it delivers high-quality generation while maintaining low inference costs. The model fits within 32 GB of RAM, making it practical to run on consumer laptops and desktops without sacrificing capability.",
        "bestFor": [
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3.5-122b-a10b",
        "name": "Qwen3.5-122B-A10B",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 262144,
        "inputPer1M": 0.26,
        "outputPer1M": 2.08,
        "summary": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency.",
        "description": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. In terms of overall performance, this model is second only to Qwen3.5-397B-A17B. Its text capabilities significantly outperform those of Qwen3-235B-2507, and its visual capabilities surpass those of Qwen3-VL-235B.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "qwen/qwen3.5-27b",
        "name": "Qwen3.5-27B",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 262144,
        "inputPer1M": 0.195,
        "outputPer1M": 1.56,
        "summary": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance.",
        "description": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance. Its overall capabilities are comparable to those of the Qwen3.5-122B-A10B.",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "qwen/qwen3.5-35b-a3b",
        "name": "Qwen3.5-35B-A3B",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 262144,
        "inputPer1M": 0.1625,
        "outputPer1M": 1.3,
        "summary": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency.",
        "description": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency. Its overall performance is comparable to that of the Qwen3.5-27B.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "qwen/qwen3.5-flash-02-23",
        "name": "Qwen3.5-Flash",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 1000000,
        "inputPer1M": 0.065,
        "outputPer1M": 0.26,
        "summary": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency.",
        "description": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. Compared to the 3 series, these models deliver a leap forward in performance for both pure text and multimodal tasks, offering fast response times while balancing inference speed and overall performance.",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5.3-codex",
        "name": "GPT-5.3-Codex",
        "provider": "OpenAI",
        "releasedAt": "2026-02-24",
        "contextLength": 400000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2.",
        "description": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2. It achieves state-of-the-art results on SWE-Bench Pro and strong performance on Terminal-Bench 2.0 and OSWorld-Verified, reflecting improved multi-language coding, terminal proficiency, and real-world computer-use skills. The model is optimized for long-running, tool-using workflows and supports interactive steering during execution, making it suitable for complex development tasks, debugging, deployment, and iterative product work. Beyond coding, GPT-5.3-Codex performs strongly on structured knowledge-work benchmarks such as GDPval, supporting tasks like document drafting, spreadsheet analysis, slide creation, and operational research across domains. It is trained with enhanced cybersecurity awareness, including vulnerability identification capabilities, and deployed with additional safeguards for high-risk use cases. Compared to prior Codex models, it is more token-efficient and approximately 25% faster, targeting professional end-to-end workflows that span reasoning, execution, and computer interaction.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "aion-labs/aion-2.0",
        "name": "Aion-2.0",
        "provider": "AionLabs",
        "releasedAt": "2026-02-23",
        "contextLength": 131072,
        "inputPer1M": 0.8,
        "outputPer1M": 1.6,
        "summary": "Aion-2.0 is a variant of DeepSeek V3.2 optimized for immersive roleplaying and storytelling.",
        "description": "Aion-2.0 is a variant of DeepSeek V3.2 optimized for immersive roleplaying and storytelling. It is particularly strong at introducing tension, crises, and conflict into stories, making narratives feel more engaging. It also handles mature and darker themes with more nuance and depth.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-3.1-pro-preview",
        "name": "Gemini 3.1 Pro Preview",
        "provider": "Google",
        "releasedAt": "2026-02-19",
        "contextLength": 1048576,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows.",
        "description": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the multimodal foundation of the Gemini 3 series, it combines high-precision reasoning across text, image, video, audio, and code with a 1M-token context window. Reasoning Details must be preserved when using multi-turn tool calling, see our docs here: https://model catalog.ai/docs/use-cases/reasoning-tokens#preserving-reasoning. The 3.1 update introduces measurable gains in SWE benchmarks and real-world coding environments, along with stronger autonomous task execution in structured domains such as finance and spreadsheet-based workflows. Designed for advanced development and agentic systems, Gemini 3.1 Pro Preview improves long-horizon stability and tool orchestration while increasing token efficiency. It introduces a new medium thinking level to better balance cost, speed, and performance. The model excels in agentic coding, structured planning, multimodal analysis, and workflow automation, making it well-suited for autonomous agents, financial modeling, spreadsheet automation, and high-context enterprise tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "audio",
            "file",
            "image",
            "text",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "anthropic/claude-sonnet-4.6",
        "name": "Claude Sonnet 4.6",
        "provider": "Anthropic",
        "releasedAt": "2026-02-17",
        "contextLength": 1000000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work.",
        "description": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project management with memory, polished document creation, and confident computer use for web QA and workflow automation.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p",
            "verbosity"
        ]
    },
    {
        "id": "qwen/qwen3.5-397b-a17b",
        "name": "Qwen3.5 397B A17B",
        "provider": "Qwen",
        "releasedAt": "2026-02-16",
        "contextLength": 262144,
        "inputPer1M": 0.39,
        "outputPer1M": 2.34,
        "summary": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency.",
        "description": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. It delivers state-of-the-art performance comparable to leading-edge models across a wide range of tasks, including language understanding, logical reasoning, code generation, agent-based tasks, image understanding, video understanding, and graphical user interface (GUI) interactions. With its robust code-generation and agent capabilities, the model exhibits strong generalization across diverse agent.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "qwen/qwen3.5-plus-02-15",
        "name": "Qwen3.5 Plus 2026-02-15",
        "provider": "Qwen",
        "releasedAt": "2026-02-16",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 1.56,
        "summary": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency.",
        "description": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency. In a variety of task evaluations, the 3.5 series consistently demonstrates performance on par with state-of-the-art leading models. Compared to the 3 series, these models show a leap forward in both pure-text and multimodal capabilities.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "minimax/minimax-m2.5",
        "name": "MiniMax M2.5",
        "provider": "MiniMax",
        "releasedAt": "2026-02-12",
        "contextLength": 196608,
        "inputPer1M": 0.2,
        "outputPer1M": 1.2,
        "summary": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity.",
        "description": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1 to extend into general office work, reaching fluency in generating and operating Word, Excel, and Powerpoint files, context switching between diverse software environments, and working across different agent and human teams. Scoring 80.2% on SWE-Bench Verified, 51.3% on Multi-SWE-Bench, and 76.3% on BrowseComp, M2.5 is also more token efficient than previous generations, having been trained to optimize its actions and output through planning.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format"
        ]
    },
    {
        "id": "minimax/minimax-m2.5:free",
        "name": "MiniMax M2.5 (free)",
        "provider": "MiniMax",
        "releasedAt": "2026-02-12",
        "contextLength": 196608,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity.",
        "description": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1 to extend into general office work, reaching fluency in generating and operating Word, Excel, and Powerpoint files, context switching between diverse software environments, and working across different agent and human teams. Scoring 80.2% on SWE-Bench Verified, 51.3% on Multi-SWE-Bench, and 76.3% on BrowseComp, M2.5 is also more token efficient than previous generations, having been trained to optimize its actions and output through planning.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tools"
        ]
    },
    {
        "id": "z-ai/glm-5",
        "name": "GLM 5",
        "provider": "Z.ai",
        "releasedAt": "2026-02-11",
        "contextLength": 80000,
        "inputPer1M": 0.72,
        "outputPer1M": 2.3,
        "summary": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows.",
        "description": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programming tasks, rivaling leading closed-source models. With advanced agentic planning, deep backend reasoning, and iterative self-correction, GLM-5 moves beyond code generation to full-system construction and autonomous execution.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "qwen/qwen3-max-thinking",
        "name": "Qwen3 Max Thinking",
        "provider": "Qwen",
        "releasedAt": "2026-02-09",
        "contextLength": 262144,
        "inputPer1M": 0.78,
        "outputPer1M": 3.9,
        "summary": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning.",
        "description": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning. By significantly scaling model capacity and reinforcement learning compute, it delivers major gains in factual accuracy, complex reasoning, instruction following, alignment with human preferences, and agentic behavior.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "anthropic/claude-opus-4.6",
        "name": "Claude Opus 4.6",
        "provider": "Anthropic",
        "releasedAt": "2026-02-04",
        "contextLength": 1000000,
        "inputPer1M": 5,
        "outputPer1M": 25,
        "summary": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks.",
        "description": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective for large codebases, complex refactors, and multi-step debugging that unfolds over time. The model shows deeper contextual understanding, stronger problem decomposition, and greater reliability on hard engineering tasks than prior generations. Beyond coding, Opus 4.6 excels at sustained knowledge work. It produces near-production-ready documents, plans, and analyses in a single pass, and maintains coherence across very long outputs and extended sessions. This makes it a strong default for tasks that require persistence, judgment, and follow-through, such as technical design, migration planning, and end-to-end project execution. For users upgrading from earlier Opus versions, see our [official migration guide here](https://model catalog.ai/docs/guides/guides/model-migrations/claude-4-6-opus)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p",
            "verbosity"
        ]
    },
    {
        "id": "qwen/qwen3-coder-next",
        "name": "Qwen3 Coder Next",
        "provider": "Qwen",
        "releasedAt": "2026-02-04",
        "contextLength": 262144,
        "inputPer1M": 0.12,
        "outputPer1M": 0.75,
        "summary": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows.",
        "description": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows. It uses a sparse MoE design with 80B total parameters and only 3B activated per token, delivering performance comparable to models with 10 to 20x higher active compute, which makes it well suited for cost-sensitive, always-on agent deployment. The model is trained with a strong agentic focus and performs reliably on long-horizon coding tasks, complex tool usage, and recovery from execution failures. With a native 256k context window, it integrates cleanly into real-world CLI and IDE environments and adapts well to common agent scaffolds used by modern coding tools. The model operates exclusively in non-thinking mode and does not emit <think> blocks, simplifying integration for production coding agents.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "stepfun/step-3.5-flash",
        "name": "Step 3.5 Flash",
        "provider": "StepFun",
        "releasedAt": "2026-01-29",
        "contextLength": 256000,
        "inputPer1M": 0.1,
        "outputPer1M": 0.3,
        "summary": "Step 3.5 Flash is StepFun's most capable open-source foundation model.",
        "description": "Step 3.5 Flash is StepFun's most capable open-source foundation model. Built on a sparse Mixture of Experts (MoE) architecture, it selectively activates only 11B of its 196B parameters per token. It is a reasoning model that is incredibly speed efficient even at long contexts.",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "stepfun/step-3.5-flash:free",
        "name": "Step 3.5 Flash (free)",
        "provider": "StepFun",
        "releasedAt": "2026-01-29",
        "contextLength": 256000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Step 3.5 Flash is StepFun's most capable open-source foundation model.",
        "description": "Step 3.5 Flash is StepFun's most capable open-source foundation model. Built on a sparse Mixture of Experts (MoE) architecture, it selectively activates only 11B of its 196B parameters per token. It is a reasoning model that is incredibly speed efficient even at long contexts.",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "moonshotai/kimi-k2.5",
        "name": "Kimi K2.5",
        "provider": "MoonshotAI",
        "releasedAt": "2026-01-27",
        "contextLength": 262144,
        "inputPer1M": 0.45,
        "outputPer1M": 2.2,
        "summary": "Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability and a self-directed agent swarm paradigm.",
        "description": "Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability and a self-directed agent swarm paradigm. Built on Kimi K2 with continued pretraining over approximately 15T mixed visual and text tokens, it delivers strong performance in general reasoning, visual coding, and agentic tool-calling.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed"
        ]
    },
    {
        "id": "upstage/solar-pro-3",
        "name": "Solar Pro 3",
        "provider": "Upstage",
        "releasedAt": "2026-01-27",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "Solar Pro 3 is Upstage's powerful Mixture-of-Experts (MoE) language model.",
        "description": "Solar Pro 3 is Upstage's powerful Mixture-of-Experts (MoE) language model. With 102B total parameters and 12B active parameters per forward pass, it delivers exceptional performance while maintaining computational efficiency. Optimized for Korean with English and Japanese support.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "arcee-ai/trinity-large-preview:free",
        "name": "Trinity Large Preview (free)",
        "provider": "Arcee AI",
        "releasedAt": "2026-01-27",
        "contextLength": 131000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Trinity-Large-Preview is a frontier-scale open-weight language model from Arcee, built as a 400B-parameter sparse Mixture-of-Experts with 13B active parameters per token using 4-of-256 expert routing.",
        "description": "Trinity-Large-Preview is a frontier-scale open-weight language model from Arcee, built as a 400B-parameter sparse Mixture-of-Experts with 13B active parameters per token using 4-of-256 expert routing. It excels in creative writing, storytelling, role-play, chat scenarios, and real-time voice assistance, better than your average reasoning model usually can. But we’re also introducing some of our newer agentic performance. It was trained to navigate well in agent harnesses like OpenCode, Cline, and Kilo Code, and to handle complex toolchains and long, constraint-filled prompts. The architecture natively supports very long context windows up to 512k tokens, with the Preview API currently served at 128k context using 8-bit quantization for practical deployment. Trinity-Large-Preview reflects Arcee’s efficiency-first design philosophy, offering a production-oriented frontier model with open weights and permissive licensing suitable for real-world applications and experimentation.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "structured_outputs",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "minimax/minimax-m2-her",
        "name": "MiniMax M2-her",
        "provider": "MiniMax",
        "releasedAt": "2026-01-23",
        "contextLength": 65536,
        "inputPer1M": 0.3,
        "outputPer1M": 1.2,
        "summary": "MiniMax M2-her is a dialogue-first large language model built for immersive roleplay, character-driven chat, and expressive multi-turn conversations.",
        "description": "MiniMax M2-her is a dialogue-first large language model built for immersive roleplay, character-driven chat, and expressive multi-turn conversations. Designed to stay consistent in tone and personality, it supports rich message roles (user_system, group, sample_message_user, sample_message_ai) and can learn from example dialogue to better match the style and pacing of your scenario, making it a strong choice for storytelling, companions, and conversational experiences where natural flow and vivid interaction matter most.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "writer/palmyra-x5",
        "name": "Palmyra X5",
        "provider": "Writer",
        "releasedAt": "2026-01-21",
        "contextLength": 1040000,
        "inputPer1M": 0.6,
        "outputPer1M": 6,
        "summary": "Palmyra X5 is Writer's most advanced model, purpose-built for building and scaling AI agents across the enterprise.",
        "description": "Palmyra X5 is Writer's most advanced model, purpose-built for building and scaling AI agents across the enterprise. It delivers industry-leading speed and efficiency on context windows up to 1 million tokens, powered by a novel transformer architecture and hybrid attention mechanisms. This enables faster inference and expanded memory for processing large volumes of enterprise data, critical for scaling AI agents.",
        "bestFor": [
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "liquid/lfm-2.5-1.2b-instruct:free",
        "name": "LFM2.5-1.2B-Instruct (free)",
        "provider": "LiquidAI",
        "releasedAt": "2026-01-20",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "LFM2.5-1.2B-Instruct is a compact, high-performance instruction-tuned model built for fast on-device AI.",
        "description": "LFM2.5-1.2B-Instruct is a compact, high-performance instruction-tuned model built for fast on-device AI. It delivers strong chat quality in a 1.2B parameter footprint, with efficient edge inference and broad runtime support.",
        "bestFor": [
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "liquid/lfm-2.5-1.2b-thinking:free",
        "name": "LFM2.5-1.2B-Thinking (free)",
        "provider": "LiquidAI",
        "releasedAt": "2026-01-20",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "LFM2.5-1.2B-Thinking is a lightweight reasoning-focused model optimized for agentic tasks, data extraction, and RAG—while still running comfortably on edge devices.",
        "description": "LFM2.5-1.2B-Thinking is a lightweight reasoning-focused model optimized for agentic tasks, data extraction, and RAG—while still running comfortably on edge devices. It supports long context (up to 32K tokens) and is designed to provide higher-quality “thinking” responses in a small 1.2B model.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "z-ai/glm-4.7-flash",
        "name": "GLM 4.7 Flash",
        "provider": "Z.ai",
        "releasedAt": "2026-01-19",
        "contextLength": 202752,
        "inputPer1M": 0.06,
        "outputPer1M": 0.4,
        "summary": "As a 30B-class SOTA model, GLM-4.7-Flash offers a new option that balances performance and efficiency.",
        "description": "As a 30B-class SOTA model, GLM-4.7-Flash offers a new option that balances performance and efficiency. It is further optimized for agentic coding use cases, strengthening coding capabilities, long-horizon task planning, and tool collaboration, and has achieved leading performance among open-source models of the same size on several current public benchmark leaderboards.",
        "bestFor": [
            "Code generation",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "openai/gpt-audio",
        "name": "GPT Audio",
        "provider": "OpenAI",
        "releasedAt": "2026-01-19",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The gpt-audio model is OpenAI's first generally available audio model.",
        "description": "The gpt-audio model is OpenAI's first generally available audio model. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Audio is priced at $32 per million input tokens and $64 per million output tokens.",
        "bestFor": [
            "Code generation",
            "Multimodal workflows"
        ],
        "modality": "text+audio->text+audio",
        "inputModalities": [
            "text",
            "audio"
        ],
        "outputModalities": [
            "text",
            "audio"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-audio-mini",
        "name": "GPT Audio Mini",
        "provider": "OpenAI",
        "releasedAt": "2026-01-19",
        "contextLength": 128000,
        "inputPer1M": 0.6,
        "outputPer1M": 2.4,
        "summary": "A cost-efficient version of GPT Audio.",
        "description": "A cost-efficient version of GPT Audio. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Input is priced at $0.60 per million tokens and output is priced at $2.40 per million tokens.",
        "bestFor": [
            "Code generation",
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+audio->text+audio",
        "inputModalities": [
            "text",
            "audio"
        ],
        "outputModalities": [
            "text",
            "audio"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5.2-codex",
        "name": "GPT-5.2-Codex",
        "provider": "OpenAI",
        "releasedAt": "2026-01-14",
        "contextLength": 400000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows.",
        "description": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5.1-Codex, 5.2-Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://model catalog.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level) Codex integrates into developer environments including the CLI, IDE extensions, GitHub, and cloud tasks. It adapts reasoning effort dynamically—providing fast responses for small tasks while sustaining extended multi-hour runs for large projects. The model is trained to perform structured code reviews, catching critical flaws by reasoning over dependencies and validating behavior against tests. It also supports multimodal inputs such as images or screenshots for UI development and integrates tool use for search, dependency installation, and environment setup. Codex is intended specifically for agentic coding applications.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "allenai/molmo-2-8b",
        "name": "Molmo2 8B",
        "provider": "AllenAI",
        "releasedAt": "2026-01-09",
        "contextLength": 36864,
        "inputPer1M": 0.2,
        "outputPer1M": 0.2,
        "summary": "Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding.",
        "description": "Molmo2-8B is an open vision-language model developed by the Allen Institute for AI (Ai2) as part of the Molmo2 family, supporting image, video, and multi-image understanding and grounding. It is based on Qwen3-8B and uses SigLIP 2 as its vision backbone, outperforming other open-weight, open-data models on short videos, counting, and captioning, while remaining competitive on long-video tasks.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "text",
            "image",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "allenai/olmo-3.1-32b-instruct",
        "name": "Olmo 3.1 32B Instruct",
        "provider": "AllenAI",
        "releasedAt": "2026-01-06",
        "contextLength": 65536,
        "inputPer1M": 0.2,
        "outputPer1M": 0.6,
        "summary": "Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following.",
        "description": "Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the Olmo 3.1 family, this variant emphasizes responsiveness to complex user directions and robust chat interactions while retaining strong capabilities on reasoning and coding benchmarks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Instruct reflects the Olmo initiative’s commitment to openness and transparency.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "minimax/minimax-m2.1",
        "name": "MiniMax M2.1",
        "provider": "MiniMax",
        "releasedAt": "2025-12-23",
        "contextLength": 196608,
        "inputPer1M": 0.27,
        "outputPer1M": 0.95,
        "summary": "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development.",
        "description": "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in real-world capability while maintaining exceptional latency, scalability, and cost efficiency. Compared to its predecessor, M2.1 delivers cleaner, more concise outputs and faster perceived response times. It shows leading multilingual coding performance across major systems and application languages, achieving 49.4% on Multi-SWE-Bench and 72.5% on SWE-Bench Multilingual, and serves as a versatile agent “brain” for IDEs, coding tools, and general-purpose assistance. To avoid degrading this model's performance, MiniMax highly recommends preserving reasoning between turns. Learn more about using reasoning_details to pass back reasoning in our [docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "bytedance-seed/seed-1.6",
        "name": "Seed 1.6",
        "provider": "ByteDance Seed",
        "releasedAt": "2025-12-23",
        "contextLength": 262144,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "Seed 1.6 is a general-purpose model released by the ByteDance Seed team.",
        "description": "Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "image",
            "text",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "bytedance-seed/seed-1.6-flash",
        "name": "Seed 1.6 Flash",
        "provider": "ByteDance Seed",
        "releasedAt": "2025-12-23",
        "contextLength": 262144,
        "inputPer1M": 0.075,
        "outputPer1M": 0.3,
        "summary": "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding.",
        "description": "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of up to 16k tokens.",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "image",
            "text",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "z-ai/glm-4.7",
        "name": "GLM 4.7",
        "provider": "Z.ai",
        "releasedAt": "2025-12-22",
        "contextLength": 202752,
        "inputPer1M": 0.4,
        "outputPer1M": 1.75,
        "summary": "GLM-4.7 is Z.ai’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution.",
        "description": "GLM-4.7 is Z.ai’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing complex agent tasks while delivering more natural conversational experiences and superior front-end aesthetics.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "google/gemini-3-flash-preview",
        "name": "Gemini 3 Flash Preview",
        "provider": "Google",
        "releasedAt": "2025-12-17",
        "contextLength": 1048576,
        "inputPer1M": 0.5,
        "outputPer1M": 3,
        "summary": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance.",
        "description": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool use performance with substantially lower latency than larger Gemini variants, making it well suited for interactive development, long running agent loops, and collaborative coding tasks. Compared to Gemini 2.5 Flash, it provides broad quality improvements across reasoning, multimodal understanding, and reliability. The model supports a 1M token context window and multimodal inputs including text, images, audio, video, and PDFs, with text output. It includes configurable reasoning via thinking levels (minimal, low, medium, high), structured output, tool use, and automatic context caching. Gemini 3 Flash Preview is optimized for users who want strong reasoning and agentic behavior without the cost or latency of full scale frontier models.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-small-creative",
        "name": "Mistral Small Creative",
        "provider": "Mistral",
        "releasedAt": "2025-12-16",
        "contextLength": 32768,
        "inputPer1M": 0.1,
        "outputPer1M": 0.3,
        "summary": "Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and conversational agents.",
        "description": "Mistral Small Creative is an experimental small model designed for creative writing, narrative generation, roleplay and character-driven dialogue, general-purpose instruction following, and conversational agents.",
        "bestFor": [
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "allenai/olmo-3.1-32b-think",
        "name": "Olmo 3.1 32B Think",
        "provider": "AllenAI",
        "releasedAt": "2025-12-16",
        "contextLength": 65536,
        "inputPer1M": 0.15,
        "outputPer1M": 0.5,
        "summary": "Olmo 3.1 32B Think is a large-scale, 32-billion-parameter model designed for deep reasoning, complex multi-step logic, and advanced instruction following.",
        "description": "Olmo 3.1 32B Think is a large-scale, 32-billion-parameter model designed for deep reasoning, complex multi-step logic, and advanced instruction following. Building on the Olmo 3 series, version 3.1 delivers refined reasoning behavior and stronger performance across demanding evaluations and nuanced conversational tasks. Developed by Ai2 under the Apache 2.0 license, Olmo 3.1 32B Think continues the Olmo initiative’s commitment to openness, providing full transparency across model weights, code, and training methodology.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "xiaomi/mimo-v2-flash",
        "name": "MiMo-V2-Flash",
        "provider": "Xiaomi",
        "releasedAt": "2025-12-14",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 0.29,
        "summary": "MiMo-V2-Flash is an open-source foundation language model developed by Xiaomi.",
        "description": "MiMo-V2-Flash is an open-source foundation language model developed by Xiaomi. It is a Mixture-of-Experts model with 309B total parameters and 15B active parameters, adopting hybrid attention architecture. MiMo-V2-Flash supports a hybrid-thinking toggle and a 256K context window, and excels at reasoning, coding, and agent scenarios. On SWE-bench Verified and SWE-bench Multilingual, MiMo-V2-Flash ranks as the top #1 open-source model globally, delivering performance comparable to Claude Sonnet 4.5 while costing only about 3.5% as much. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "nvidia/nemotron-3-nano-30b-a3b",
        "name": "Nemotron 3 Nano 30B A3B",
        "provider": "NVIDIA",
        "releasedAt": "2025-12-14",
        "contextLength": 262144,
        "inputPer1M": 0.05,
        "outputPer1M": 0.2,
        "summary": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems.",
        "description": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully open with open-weights, datasets and recipes so developers can easily customize, optimize, and deploy the model on their infrastructure for maximum privacy and security.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "nvidia/nemotron-3-nano-30b-a3b:free",
        "name": "Nemotron 3 Nano 30B A3B (free)",
        "provider": "NVIDIA",
        "releasedAt": "2025-12-14",
        "contextLength": 256000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems.",
        "description": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully open with open-weights, datasets and recipes so developers can easily customize, optimize, and deploy the model on their infrastructure for maximum privacy and security.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5.2",
        "name": "GPT-5.2",
        "provider": "OpenAI",
        "releasedAt": "2025-12-10",
        "contextLength": 400000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1.",
        "description": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quickly to simple queries while spending more depth on complex tasks. Built for broad task coverage, GPT-5.2 delivers consistent gains across math, coding, sciende, and tool calling workloads, with more coherent long-form answers and improved tool-use reliability.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.2-chat",
        "name": "GPT-5.2 Chat",
        "provider": "OpenAI",
        "releasedAt": "2025-12-10",
        "contextLength": 128000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence.",
        "description": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on harder queries, improving accuracy on math, coding, and multi-step tasks without slowing down typical conversations. The model is warmer and more conversational by default, with better instruction following and more stable short-form reasoning. GPT-5.2 Chat is designed for high-throughput, interactive workloads where responsiveness and consistency matter more than deep deliberation.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.2-pro",
        "name": "GPT-5.2 Pro",
        "provider": "OpenAI",
        "releasedAt": "2025-12-10",
        "contextLength": 400000,
        "inputPer1M": 21,
        "outputPer1M": 168,
        "summary": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro.",
        "description": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like \"think hard about this.\" Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/devstral-2512",
        "name": "Devstral 2 2512",
        "provider": "Mistral",
        "releasedAt": "2025-12-09",
        "contextLength": 262144,
        "inputPer1M": 0.4,
        "outputPer1M": 2,
        "summary": "Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding.",
        "description": "Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window. Devstral 2 supports exploring codebases and orchestrating changes across multiple files while maintaining architecture-level context. It tracks framework dependencies, detects failures, and retries with corrections—solving challenges like bug fixing and modernizing legacy systems. The model can be fine-tuned to prioritize specific languages or optimize for large enterprise codebases. It is available under a modified MIT license.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "nex-agi/deepseek-v3.1-nex-n1",
        "name": "DeepSeek V3.1 Nex N1",
        "provider": "Nex AGI",
        "releasedAt": "2025-12-08",
        "contextLength": 131072,
        "inputPer1M": 0.27,
        "outputPer1M": 1,
        "summary": "DeepSeek V3.1 Nex-N1 is the flagship release of the Nex-N1 series — a post-trained model designed to highlight agent autonomy, tool use, and real-world productivity.",
        "description": "DeepSeek V3.1 Nex-N1 is the flagship release of the Nex-N1 series — a post-trained model designed to highlight agent autonomy, tool use, and real-world productivity. Nex-N1 demonstrates competitive performance across all evaluation scenarios, showing particularly strong results in practical coding and HTML generation tasks.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "response_format",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "z-ai/glm-4.6v",
        "name": "GLM 4.6V",
        "provider": "Z.ai",
        "releasedAt": "2025-12-08",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.9,
        "summary": "GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media.",
        "description": "GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media. It supports up to 128K tokens, processes complex page layouts and charts directly as visual inputs, and integrates native multimodal function calling to connect perception with downstream tool execution. The model also enables interleaved image-text generation and UI reconstruction workflows, including screenshot-to-HTML synthesis and iterative visual editing.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "image",
            "text",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "relace/relace-search",
        "name": "Relace Search",
        "provider": "Relace",
        "releasedAt": "2025-12-08",
        "contextLength": 256000,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "The relace-search model uses 4-12 `view_file` and `grep` tools in parallel to explore a codebase and return relevant files to the user request.",
        "description": "The relace-search model uses 4-12 `view_file` and `grep` tools in parallel to explore a codebase and return relevant files to the user request. In contrast to RAG, relace-search performs agentic multi-step reasoning to produce highly precise results 4x faster than any frontier model. It's designed to serve as a subagent that passes its findings to an \"oracle\" coding agent, who orchestrates/performs the rest of the coding task. To use relace-search you need to build an appropriate agent harness, and parse the response for relevant information to hand off to the oracle. Read more about it in the [Relace documentation](https://docs.relace.ai/docs/fast-agentic-search/agent).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "essentialai/rnj-1-instruct",
        "name": "Rnj 1 Instruct",
        "provider": "EssentialAI",
        "releasedAt": "2025-12-07",
        "contextLength": 32768,
        "inputPer1M": 0.15,
        "outputPer1M": 0.15,
        "summary": "Rnj-1 is an 8B-parameter, dense, open-weight model family developed by Essential AI and trained from scratch with a focus on programming, math, and scientific reasoning.",
        "description": "Rnj-1 is an 8B-parameter, dense, open-weight model family developed by Essential AI and trained from scratch with a focus on programming, math, and scientific reasoning. The model demonstrates strong performance across multiple programming languages, tool-use workflows, and agentic execution environments (e.g., mini-SWE-agent).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.1-codex-max",
        "name": "GPT-5.1-Codex-Max",
        "provider": "OpenAI",
        "releasedAt": "2025-12-04",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks.",
        "description": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic workflows spanning software engineering, mathematics, and research. GPT-5.1-Codex-Max delivers faster performance, improved reasoning, and higher token efficiency across the development lifecycle.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/ministral-14b-2512",
        "name": "Ministral 3 14B 2512",
        "provider": "Mistral",
        "releasedAt": "2025-12-02",
        "contextLength": 262144,
        "inputPer1M": 0.2,
        "outputPer1M": 0.2,
        "summary": "The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart.",
        "description": "The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart. A powerful and efficient language model with vision capabilities.",
        "bestFor": [
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/ministral-3b-2512",
        "name": "Ministral 3 3B 2512",
        "provider": "Mistral",
        "releasedAt": "2025-12-02",
        "contextLength": 131072,
        "inputPer1M": 0.1,
        "outputPer1M": 0.1,
        "summary": "The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.",
        "description": "The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.",
        "bestFor": [
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/ministral-8b-2512",
        "name": "Ministral 3 8B 2512",
        "provider": "Mistral",
        "releasedAt": "2025-12-02",
        "contextLength": 262144,
        "inputPer1M": 0.15,
        "outputPer1M": 0.15,
        "summary": "A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.",
        "description": "A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.",
        "bestFor": [
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "amazon/nova-2-lite-v1",
        "name": "Nova 2 Lite",
        "provider": "Amazon",
        "releasedAt": "2025-12-02",
        "contextLength": 1000000,
        "inputPer1M": 0.3,
        "outputPer1M": 2.5,
        "summary": "Nova 2 Lite is a fast, cost-effective reasoning model for everyday workloads that can process text, images, and videos to generate text.",
        "description": "Nova 2 Lite is a fast, cost-effective reasoning model for everyday workloads that can process text, images, and videos to generate text. Nova 2 Lite demonstrates standout capabilities in processing documents, extracting information from videos, generating code, providing accurate grounded answers, and automating multi-step agentic workflows.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file+video->text",
        "inputModalities": [
            "text",
            "image",
            "video",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "deepseek/deepseek-v3.2",
        "name": "DeepSeek V3.2",
        "provider": "DeepSeek",
        "releasedAt": "2025-12-01",
        "contextLength": 163840,
        "inputPer1M": 0.26,
        "outputPer1M": 0.38,
        "summary": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance.",
        "description": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism that reduces training and inference cost while preserving quality in long-context scenarios. A scalable reinforcement learning post-training framework further improves reasoning, with reported performance in the GPT-5 class, and the model has demonstrated gold-medal results on the 2025 IMO and IOI. V3.2 also uses a large-scale agentic task synthesis pipeline to better integrate reasoning into tool-use settings, boosting compliance and generalization in interactive environments. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "deepseek/deepseek-v3.2-speciale",
        "name": "DeepSeek V3.2 Speciale",
        "provider": "DeepSeek",
        "releasedAt": "2025-12-01",
        "contextLength": 163840,
        "inputPer1M": 0.4,
        "outputPer1M": 1.2,
        "summary": "DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance.",
        "description": "DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance. It builds on DeepSeek Sparse Attention (DSA) for efficient long-context processing, then scales post-training reinforcement learning to push capability beyond the base model. Reported evaluations place Speciale ahead of GPT-5 on difficult reasoning workloads, with proficiency comparable to Gemini-3.0-Pro, while retaining strong coding and tool-use reliability. Like V3.2, it benefits from a large-scale agentic task synthesis pipeline that improves compliance and generalization in interactive environments.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "mistralai/mistral-large-2512",
        "name": "Mistral Large 3 2512",
        "provider": "Mistral",
        "releasedAt": "2025-12-01",
        "contextLength": 262144,
        "inputPer1M": 0.5,
        "outputPer1M": 1.5,
        "summary": "Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.",
        "description": "Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "arcee-ai/trinity-mini",
        "name": "Trinity Mini",
        "provider": "Arcee AI",
        "releasedAt": "2025-12-01",
        "contextLength": 131072,
        "inputPer1M": 0.045,
        "outputPer1M": 0.15,
        "summary": "Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token.",
        "description": "Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token. Engineered for efficient reasoning over long contexts (131k) with robust function calling and multi-step agent workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "arcee-ai/trinity-mini:free",
        "name": "Trinity Mini (free)",
        "provider": "Arcee AI",
        "releasedAt": "2025-12-01",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token.",
        "description": "Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token. Engineered for efficient reasoning over long contexts (131k) with robust function calling and multi-step agent workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "prime-intellect/intellect-3",
        "name": "INTELLECT-3",
        "provider": "Prime Intellect",
        "releasedAt": "2025-11-27",
        "contextLength": 131072,
        "inputPer1M": 0.2,
        "outputPer1M": 1.1,
        "summary": "INTELLECT-3 is a 106B-parameter Mixture-of-Experts model (12B active) post-trained from GLM-4.5-Air-Base using supervised fine-tuning (SFT) followed by large-scale reinforcement learning (RL).",
        "description": "INTELLECT-3 is a 106B-parameter Mixture-of-Experts model (12B active) post-trained from GLM-4.5-Air-Base using supervised fine-tuning (SFT) followed by large-scale reinforcement learning (RL). It offers state-of-the-art performance for its size across math, code, science, and general reasoning, consistently outperforming many larger frontier models. Designed for strong multi-step problem solving, it maintains high accuracy on structured tasks while remaining efficient at inference thanks to its MoE architecture.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "anthropic/claude-opus-4.5",
        "name": "Claude Opus 4.5",
        "provider": "Anthropic",
        "releasedAt": "2025-11-24",
        "contextLength": 200000,
        "inputPer1M": 5,
        "outputPer1M": 25,
        "summary": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use.",
        "description": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance across real-world coding and reasoning benchmarks, and improved robustness to prompt injection. The model is designed to operate efficiently across varied effort levels, enabling developers to trade off speed, depth, and token usage depending on task requirements. It comes with a new parameter to control token efficiency, which can be accessed using the model catalog Verbosity parameter with low, medium, or high. Opus 4.5 supports advanced tool use, extended context management, and coordinated multi-agent setups, making it well-suited for autonomous research, debugging, multi-step planning, and spreadsheet/browser manipulation. It delivers substantial gains in structured reasoning, execution reliability, and alignment compared to prior Opus generations, while reducing token overhead and improving performance on long-running tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "verbosity"
        ]
    },
    {
        "id": "allenai/olmo-3-32b-think",
        "name": "Olmo 3 32B Think",
        "provider": "AllenAI",
        "releasedAt": "2025-11-21",
        "contextLength": 65536,
        "inputPer1M": 0.15,
        "outputPer1M": 0.5,
        "summary": "Olmo 3 32B Think is a large-scale, 32-billion-parameter model purpose-built for deep reasoning, complex logic chains and advanced instruction-following scenarios.",
        "description": "Olmo 3 32B Think is a large-scale, 32-billion-parameter model purpose-built for deep reasoning, complex logic chains and advanced instruction-following scenarios. Its capacity enables strong performance on demanding evaluation tasks and highly nuanced conversational reasoning. Developed by Ai2 under the Apache 2.0 license, Olmo 3 32B Think embodies the Olmo initiative’s commitment to openness, offering full transparency across weights, code and training methodology.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "allenai/olmo-3-7b-instruct",
        "name": "Olmo 3 7B Instruct",
        "provider": "AllenAI",
        "releasedAt": "2025-11-21",
        "contextLength": 65536,
        "inputPer1M": 0.1,
        "outputPer1M": 0.2,
        "summary": "Olmo 3 7B Instruct is a supervised instruction-fine-tuned variant of the Olmo 3 7B base model, optimized for instruction-following, question-answering, and natural conversational dialogue.",
        "description": "Olmo 3 7B Instruct is a supervised instruction-fine-tuned variant of the Olmo 3 7B base model, optimized for instruction-following, question-answering, and natural conversational dialogue. By leveraging high-quality instruction data and an open training pipeline, it delivers strong performance across everyday NLP tasks while remaining accessible and easy to integrate. Developed by Ai2 under the Apache 2.0 license, the model offers a transparent, community-friendly option for instruction-driven applications.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "allenai/olmo-3-7b-think",
        "name": "Olmo 3 7B Think",
        "provider": "AllenAI",
        "releasedAt": "2025-11-21",
        "contextLength": 65536,
        "inputPer1M": 0.12,
        "outputPer1M": 0.2,
        "summary": "Olmo 3 7B Think is a research-oriented language model in the Olmo family designed for advanced reasoning and instruction-driven tasks.",
        "description": "Olmo 3 7B Think is a research-oriented language model in the Olmo family designed for advanced reasoning and instruction-driven tasks. It excels at multi-step problem solving, logical inference, and maintaining coherent conversational context. Developed by Ai2 under the Apache 2.0 license, Olmo 3 7B Think supports transparent, fully open experimentation and provides a lightweight yet capable foundation for academic research and practical NLP workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "google/gemini-3-pro-image-preview",
        "name": "Nano Banana Pro (Gemini 3 Pro Image Preview)",
        "provider": "Google",
        "releasedAt": "2025-11-20",
        "contextLength": 65536,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro.",
        "description": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and high-fidelity visual synthesis. The model generates context-rich graphics, from infographics and diagrams to cinematic composites, and can incorporate real-time information via Search grounding. It offers industry-leading text rendering in images (including long passages and multilingual layouts), consistent multi-image blending, and accurate identity preservation across up to five subjects. Nano Banana Pro adds fine-grained creative controls such as localized edits, lighting and focus adjustments, camera transformations, and support for 2K/4K outputs and flexible aspect ratios. It is designed for professional-grade design, product visualization, storyboarding, and complex multi-element compositions while remaining efficient for general image creation workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text+image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image",
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "x-ai/grok-4.1-fast",
        "name": "Grok 4.1 Fast",
        "provider": "xAI",
        "releasedAt": "2025-11-19",
        "contextLength": 2000000,
        "inputPer1M": 0.2,
        "outputPer1M": 0.5,
        "summary": "Grok 4.1 Fast is xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research.",
        "description": "Grok 4.1 Fast is xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research. 2M context window. Reasoning can be enabled/disabled using the `reasoning` `enabled` parameter in the API. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#controlling-reasoning-tokens)",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-3-pro-preview",
        "name": "Gemini 3 Pro Preview",
        "provider": "Google",
        "releasedAt": "2025-11-18",
        "contextLength": 1048576,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Gemini 3 Pro is Google’s flagship frontier model for high-precision multimodal reasoning, combining strong performance across text, image, video, audio, and code with a 1M-token context window.",
        "description": "Gemini 3 Pro is Google’s flagship frontier model for high-precision multimodal reasoning, combining strong performance across text, image, video, audio, and code with a 1M-token context window. Reasoning Details must be preserved when using multi-turn tool calling, see our docs here: https://model catalog.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks. It delivers state-of-the-art benchmark results in general reasoning, STEM problem solving, factual QA, and multimodal understanding, including leading scores on LMArena, GPQA Diamond, MathArena Apex, MMMU-Pro, and Video-MMMU. Interactions emphasize depth and interpretability: the model is designed to infer intent with minimal prompting and produce direct, insight-focused responses. Built for advanced development and agentic workflows, Gemini 3 Pro provides robust tool-calling, long-horizon planning stability, and strong zero-shot generation for complex UI, visualization, and coding tasks. It excels at agentic coding (SWE-Bench Verified, Terminal-Bench 2.0), multimodal analysis, and structured long-form tasks such as research synthesis, planning, and interactive learning experiences. Suitable applications include autonomous agents, coding assistants, multimodal analytics, scientific reasoning, and high-context information processing.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "deepcogito/cogito-v2.1-671b",
        "name": "Cogito v2.1 671B",
        "provider": "Deep Cogito",
        "releasedAt": "2025-11-13",
        "contextLength": 128000,
        "inputPer1M": 1.25,
        "outputPer1M": 1.25,
        "summary": "Cogito v2.1 671B MoE represents one of the strongest open models globally, matching performance of frontier closed and open models.",
        "description": "Cogito v2.1 671B MoE represents one of the strongest open models globally, matching performance of frontier closed and open models. This model is trained using self play with reinforcement learning to reach state-of-the-art performance on multiple categories (instruction following, coding, longer queries and creative writing). This advanced system demonstrates significant progress toward scalable superintelligence through policy improvement.",
        "bestFor": [
            "Code generation"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "openai/gpt-5.1",
        "name": "GPT-5.1",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5.",
        "description": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive reasoning to allocate computation dynamically, responding quickly to simple queries while spending more depth on complex tasks. The model produces clearer, more grounded explanations with reduced jargon, making it easier to follow even on technical or multi-step problems. Built for broad task coverage, GPT-5.1 delivers consistent gains across math, coding, and structured analysis workloads, with more coherent long-form answers and improved tool-use reliability. It also features refined conversational alignment, enabling warmer, more intuitive responses without compromising precision. GPT-5.1 serves as the primary full-capability successor to GPT-5",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.1-chat",
        "name": "GPT-5.1 Chat",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 128000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence.",
        "description": "GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on harder queries, improving accuracy on math, coding, and multi-step tasks without slowing down typical conversations. The model is warmer and more conversational by default, with better instruction following and more stable short-form reasoning. GPT-5.1 Chat is designed for high-throughput, interactive workloads where responsiveness and consistency matter more than deep deliberation.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.1-codex",
        "name": "GPT-5.1-Codex",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows.",
        "description": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5.1, Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://model catalog.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level) Codex integrates into developer environments including the CLI, IDE extensions, GitHub, and cloud tasks. It adapts reasoning effort dynamically—providing fast responses for small tasks while sustaining extended multi-hour runs for large projects. The model is trained to perform structured code reviews, catching critical flaws by reasoning over dependencies and validating behavior against tests. It also supports multimodal inputs such as images or screenshots for UI development and integrates tool use for search, dependency installation, and environment setup. Codex is intended specifically for agentic coding applications.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5.1-codex-mini",
        "name": "GPT-5.1-Codex-Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 400000,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
        "description": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
        "bestFor": [
            "Code generation",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "kwaipilot/kat-coder-pro",
        "name": "KAT-Coder-Pro V1",
        "provider": "Kwaipilot",
        "releasedAt": "2025-11-10",
        "contextLength": 256000,
        "inputPer1M": 0.207,
        "outputPer1M": 0.828,
        "summary": "KAT-Coder-Pro V1 is KwaiKAT's most advanced agentic coding model in the KAT-Coder series.",
        "description": "KAT-Coder-Pro V1 is KwaiKAT's most advanced agentic coding model in the KAT-Coder series. Designed specifically for agentic coding tasks, it excels in real-world software engineering scenarios, achieving 73.4% solve rate on the SWE-Bench Verified benchmark. The model has been optimized for tool-use capability, multi-turn interaction, instruction following, generalization, and comprehensive capabilities through a multi-stage training process, including mid-training, supervised fine-tuning (SFT), reinforcement fine-tuning (RFT), and scalable agentic RL.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "moonshotai/kimi-k2-thinking",
        "name": "Kimi K2 Thinking",
        "provider": "MoonshotAI",
        "releasedAt": "2025-11-06",
        "contextLength": 131072,
        "inputPer1M": 0.47,
        "outputPer1M": 2,
        "summary": "Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning.",
        "description": "Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning. Built on the trillion-parameter Mixture-of-Experts (MoE) architecture introduced in Kimi K2, it activates 32 billion parameters per forward pass and supports 256 k-token context windows. The model is optimized for persistent step-by-step thought, dynamic tool invocation, and complex reasoning workflows that span hundreds of turns. It interleaves step-by-step reasoning with tool use, enabling autonomous research, coding, and writing that can persist for hundreds of sequential actions without drift. It sets new open-source benchmarks on HLE, BrowseComp, SWE-Multilingual, and LiveCodeBench, while maintaining stable multi-agent behavior through 200–300 tool calls. Built on a large-scale MoE architecture with MuonClip optimization, it combines strong reasoning depth with high inference efficiency for demanding agentic and analytical tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "amazon/nova-premier-v1",
        "name": "Nova Premier 1.0",
        "provider": "Amazon",
        "releasedAt": "2025-10-31",
        "contextLength": 1000000,
        "inputPer1M": 2.5,
        "outputPer1M": 12.5,
        "summary": "Amazon Nova Premier is the most capable of Amazon’s multimodal models for complex reasoning tasks and for use as the best teacher for distilling custom models.",
        "description": "Amazon Nova Premier is the most capable of Amazon’s multimodal models for complex reasoning tasks and for use as the best teacher for distilling custom models.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "perplexity/sonar-pro-search",
        "name": "Sonar Pro Search",
        "provider": "Perplexity",
        "releasedAt": "2025-10-30",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Exclusively available on the model catalog API, Sonar Pro's new Pro Search mode is Perplexity's most advanced agentic search system.",
        "description": "Exclusively available on the model catalog API, Sonar Pro's new Pro Search mode is Perplexity's most advanced agentic search system. It is designed for deeper reasoning and analysis. Pricing is based on tokens plus $18 per thousand requests. This model powers the Pro Search mode on the Perplexity platform. Sonar Pro Search adds autonomous, multi-step reasoning to Sonar Pro. So, instead of just one query + synthesis, it plans and executes entire research workflows using tools.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ]
    },
    {
        "id": "mistralai/voxtral-small-24b-2507",
        "name": "Voxtral Small 24B 2507",
        "provider": "Mistral",
        "releasedAt": "2025-10-30",
        "contextLength": 32000,
        "inputPer1M": 0.1,
        "outputPer1M": 0.3,
        "summary": "Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance.",
        "description": "Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance. It excels at speech transcription, translation and audio understanding. Input audio is priced at $100 per million seconds.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+audio->text",
        "inputModalities": [
            "text",
            "audio"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-oss-safeguard-20b",
        "name": "gpt-oss-safeguard-20b",
        "provider": "OpenAI",
        "releasedAt": "2025-10-29",
        "contextLength": 131072,
        "inputPer1M": 0.075,
        "outputPer1M": 0.3,
        "summary": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b.",
        "description": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM filtering, and trust & safety labeling. Learn more about this model in OpenAI's gpt-oss-safeguard [user guide](https://cookbook.openai.com/articles/gpt-oss-safeguard-guide).",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "nvidia/nemotron-nano-12b-v2-vl",
        "name": "Nemotron Nano 12B 2 VL",
        "provider": "NVIDIA",
        "releasedAt": "2025-10-28",
        "contextLength": 131072,
        "inputPer1M": 0.2,
        "outputPer1M": 0.6,
        "summary": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence.",
        "description": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transformer-level accuracy with Mamba’s memory-efficient sequence modeling for significantly higher throughput and lower latency. The model supports inputs of text and multi-image documents, producing natural-language outputs. It is trained on high-quality NVIDIA-curated synthetic datasets optimized for optical-character recognition, chart reasoning, and multimodal comprehension. Nemotron Nano 2 VL achieves leading results on OCRBench v2 and scores ≈ 74 average across MMMU, MathVista, AI2D, OCRBench, OCR-Reasoning, ChartQA, DocVQA, and Video-MME—surpassing prior open VL baselines. With Efficient Video Sampling (EVS), it handles long-form videos while reducing inference cost. Open-weights, training data, and fine-tuning recipes are released under a permissive NVIDIA open license, with deployment supported across NeMo, NIM, and major inference runtimes.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "image",
            "text",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k"
        ]
    },
    {
        "id": "nvidia/nemotron-nano-12b-v2-vl:free",
        "name": "Nemotron Nano 12B 2 VL (free)",
        "provider": "NVIDIA",
        "releasedAt": "2025-10-28",
        "contextLength": 128000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence.",
        "description": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transformer-level accuracy with Mamba’s memory-efficient sequence modeling for significantly higher throughput and lower latency. The model supports inputs of text and multi-image documents, producing natural-language outputs. It is trained on high-quality NVIDIA-curated synthetic datasets optimized for optical-character recognition, chart reasoning, and multimodal comprehension. Nemotron Nano 2 VL achieves leading results on OCRBench v2 and scores ≈ 74 average across MMMU, MathVista, AI2D, OCRBench, OCR-Reasoning, ChartQA, DocVQA, and Video-MME—surpassing prior open VL baselines. With Efficient Video Sampling (EVS), it handles long-form videos while reducing inference cost. Open-weights, training data, and fine-tuning recipes are released under a permissive NVIDIA open license, with deployment supported across NeMo, NIM, and major inference runtimes.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+video->text",
        "inputModalities": [
            "image",
            "text",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "minimax/minimax-m2",
        "name": "MiniMax M2",
        "provider": "MiniMax",
        "releasedAt": "2025-10-23",
        "contextLength": 196608,
        "inputPer1M": 0.255,
        "outputPer1M": 1,
        "summary": "MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows.",
        "description": "MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows. With 10 billion activated parameters (230 billion total), it delivers near-frontier intelligence across general reasoning, tool use, and multi-step task execution while maintaining low latency and deployment efficiency. The model excels in code generation, multi-file editing, compile-run-fix loops, and test-validated repair, showing strong results on SWE-Bench Verified, Multi-SWE-Bench, and Terminal-Bench. It also performs competitively in agentic evaluations such as BrowseComp and GAIA, effectively handling long-horizon planning, retrieval, and recovery from execution errors. Benchmarked by [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m2), MiniMax-M2 ranks among the top open-source models for composite intelligence, spanning mathematics, science, and instruction-following. Its small activation footprint enables fast inference, high concurrency, and improved unit economics, making it well-suited for large-scale agents, developer assistants, and reasoning-driven applications that require responsiveness and cost efficiency. To avoid degrading this model's performance, MiniMax highly recommends preserving reasoning between turns. Learn more about using reasoning_details to pass back reasoning in our [docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#preserving-reasoning-blocks).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "qwen/qwen3-vl-32b-instruct",
        "name": "Qwen3 VL 32B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-10-23",
        "contextLength": 131072,
        "inputPer1M": 0.104,
        "outputPer1M": 0.416,
        "summary": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video.",
        "description": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual perception with advanced text comprehension, enabling fine-grained spatial reasoning, document and scene analysis, and long-horizon video understanding.Robust OCR in 32 languages, and enhanced multimodal fusion through Interleaved-MRoPE and DeepStack architectures. Optimized for agentic interaction and visual tool use, Qwen3-VL-32B delivers state-of-the-art performance for complex real-world multimodal tasks.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "ibm-granite/granite-4.0-h-micro",
        "name": "Granite 4.0 Micro",
        "provider": "IBM",
        "releasedAt": "2025-10-20",
        "contextLength": 131000,
        "inputPer1M": 0.017,
        "outputPer1M": 0.11,
        "summary": "Granite-4.0-H-Micro is a 3B parameter from the Granite 4 family of models.",
        "description": "Granite-4.0-H-Micro is a 3B parameter from the Granite 4 family of models. These models are the latest in a series of models released by IBM. They are fine-tuned for long context tool calling.",
        "bestFor": [
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "liquid/lfm-2.2-6b",
        "name": "LFM2-2.6B",
        "provider": "LiquidAI",
        "releasedAt": "2025-10-20",
        "contextLength": 32768,
        "inputPer1M": 0.01,
        "outputPer1M": 0.02,
        "summary": "LFM2 is a new generation of hybrid models developed by Liquid AI, specifically designed for edge AI and on-device deployment.",
        "description": "LFM2 is a new generation of hybrid models developed by Liquid AI, specifically designed for edge AI and on-device deployment. It sets a new standard in terms of quality, speed, and memory efficiency.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "liquid/lfm2-8b-a1b",
        "name": "LFM2-8B-A1B",
        "provider": "LiquidAI",
        "releasedAt": "2025-10-20",
        "contextLength": 32768,
        "inputPer1M": 0.01,
        "outputPer1M": 0.02,
        "summary": "LFM2-8B-A1B is an efficient on-device Mixture-of-Experts (MoE) model from Liquid AI’s LFM2 family, built for fast, high-quality inference on edge hardware.",
        "description": "LFM2-8B-A1B is an efficient on-device Mixture-of-Experts (MoE) model from Liquid AI’s LFM2 family, built for fast, high-quality inference on edge hardware. It uses 8.3B total parameters with only ~1.5B active per token, delivering strong performance while keeping compute and memory usage low—making it ideal for phones, tablets, and laptops.",
        "bestFor": [
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5-image-mini",
        "name": "GPT-5 Image Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-10-16",
        "contextLength": 400000,
        "inputPer1M": 2.5,
        "outputPer1M": 2,
        "summary": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by [GPT-5 Mini](https://model catalog.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation.",
        "description": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by [GPT-5 Mini](https://model catalog.ai/openai/gpt-5-mini), with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, text rendering, and detailed image editing with reduced latency and cost. It excels at high-quality visual creation while maintaining strong text understanding, making it ideal for applications that require both efficient image generation and text processing at scale.",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text+image",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "image",
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "anthropic/claude-haiku-4.5",
        "name": "Claude Haiku 4.5",
        "provider": "Anthropic",
        "releasedAt": "2025-10-15",
        "contextLength": 200000,
        "inputPer1M": 1,
        "outputPer1M": 5,
        "summary": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models.",
        "description": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance across reasoning, coding, and computer-use tasks, Haiku 4.5 brings frontier-level capability to real-time and high-volume applications. It introduces extended thinking to the Haiku line; enabling controllable reasoning depth, summarized or interleaved thought output, and tool-assisted workflows with full support for coding, bash, web search, and computer-use tools. Scoring >73% on SWE-bench Verified, Haiku 4.5 ranks among the world’s best coding models while maintaining exceptional responsiveness for sub-agents, parallelized execution, and scaled deployment.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5-image",
        "name": "GPT-5 Image",
        "provider": "OpenAI",
        "releasedAt": "2025-10-14",
        "contextLength": 400000,
        "inputPer1M": 10,
        "outputPer1M": 10,
        "summary": "[GPT-5](https://model catalog.ai/openai/gpt-5) Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities.",
        "description": "[GPT-5](https://model catalog.ai/openai/gpt-5) Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior instruction following, text rendering, and detailed image editing.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text+image",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "image",
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "qwen/qwen3-vl-8b-instruct",
        "name": "Qwen3 VL 8B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-10-14",
        "contextLength": 131072,
        "inputPer1M": 0.08,
        "outputPer1M": 0.5,
        "summary": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video.",
        "description": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interleaved-MRoPE for long-horizon temporal reasoning, DeepStack for fine-grained visual-text alignment, and text-timestamp alignment for precise event localization. The model supports a native 256K-token context window, extensible to 1M tokens, and handles both static and dynamic media inputs for tasks like document parsing, visual question answering, spatial reasoning, and GUI control. It achieves text understanding comparable to leading LLMs while expanding OCR coverage to 32 languages and enhancing robustness under varied visual conditions.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "qwen/qwen3-vl-8b-thinking",
        "name": "Qwen3 VL 8B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-10-14",
        "contextLength": 131072,
        "inputPer1M": 0.117,
        "outputPer1M": 1.365,
        "summary": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences.",
        "description": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enhanced multimodal alignment and long-context processing (native 256K, expandable to 1M tokens) for tasks such as scientific visual analysis, causal inference, and mathematical reasoning over image or video inputs. Compared to the Instruct edition, the Thinking version introduces deeper visual-language fusion and deliberate reasoning pathways that improve performance on long-chain logic tasks, STEM problem-solving, and multi-step video understanding. It achieves stronger temporal grounding via Interleaved-MRoPE and timestamp-aware embeddings, while maintaining robust OCR, multilingual comprehension, and text generation on par with large text-only LLMs.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "nvidia/llama-3.3-nemotron-super-49b-v1.5",
        "name": "Llama 3.3 Nemotron Super 49B V1.5",
        "provider": "NVIDIA",
        "releasedAt": "2025-10-10",
        "contextLength": 131072,
        "inputPer1M": 0.1,
        "outputPer1M": 0.4,
        "summary": "Llama-3.3-Nemotron-Super-49B-v1.5 is a 49B-parameter, English-centric reasoning/chat model derived from Meta’s Llama-3.3-70B-Instruct with a 128K context.",
        "description": "Llama-3.3-Nemotron-Super-49B-v1.5 is a 49B-parameter, English-centric reasoning/chat model derived from Meta’s Llama-3.3-70B-Instruct with a 128K context. It’s post-trained for agentic workflows (RAG, tool calling) via SFT across math, code, science, and multi-turn chat, followed by multiple RL stages; Reward-aware Preference Optimization (RPO) for alignment, RL with Verifiable Rewards (RLVR) for step-wise reasoning, and iterative DPO to refine tool-use behavior. A distillation-driven Neural Architecture Search (“Puzzle”) replaces some attention blocks and varies FFN widths to shrink memory footprint and improve throughput, enabling single-GPU (H100/H200) deployment while preserving instruction following and CoT quality. In internal evaluations (NeMo-Skills, up to 16 runs, temp = 0.6, top_p = 0.95), the model reports strong reasoning/coding results, e.g., MATH500 pass@1 = 97.4, AIME-2024 = 87.5, AIME-2025 = 82.71, GPQA = 71.97, LiveCodeBench (24.10–25.02) = 73.58, and MMLU-Pro (CoT) = 79.53. The model targets practical inference efficiency (high tokens/s, reduced VRAM) with Transformers/vLLM support and explicit “reasoning on/off” modes (chat-first defaults, greedy recommended when disabled). Suitable for building agents, assistants, and long-context retrieval systems where balanced accuracy-to-cost and reliable tool use matter.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "openai/o3-deep-research",
        "name": "o3 Deep Research",
        "provider": "OpenAI",
        "releasedAt": "2025-10-10",
        "contextLength": 200000,
        "inputPer1M": 10,
        "outputPer1M": 40,
        "summary": "o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks.",
        "description": "o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks. Note: This model always uses the 'web_search' tool which adds additional cost.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "openai/o4-mini-deep-research",
        "name": "o4 Mini Deep Research",
        "provider": "OpenAI",
        "releasedAt": "2025-10-10",
        "contextLength": 200000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks.",
        "description": "o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks. Note: This model always uses the 'web_search' tool which adds additional cost.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "baidu/ernie-4.5-21b-a3b-thinking",
        "name": "ERNIE 4.5 21B A3B Thinking",
        "provider": "Baidu",
        "releasedAt": "2025-10-09",
        "contextLength": 131072,
        "inputPer1M": 0.07,
        "outputPer1M": 0.28,
        "summary": "ERNIE-4.5-21B-A3B-Thinking is Baidu's upgraded lightweight MoE model, refined to boost reasoning depth and quality for top-tier performance in logical puzzles, math, science, coding, text generation, and expert-level...",
        "description": "ERNIE-4.5-21B-A3B-Thinking is Baidu's upgraded lightweight MoE model, refined to boost reasoning depth and quality for top-tier performance in logical puzzles, math, science, coding, text generation, and expert-level academic benchmarks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-2.5-flash-image",
        "name": "Nano Banana (Gemini 2.5 Flash Image)",
        "provider": "Google",
        "releasedAt": "2025-10-07",
        "contextLength": 32768,
        "inputPer1M": 0.3,
        "outputPer1M": 2.5,
        "summary": "Gemini 2.5 Flash Image, a.k.a.",
        "description": "Gemini 2.5 Flash Image, a.k.a. \"Nano Banana,\" is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation, edits, and multi-turn conversations. Aspect ratios can be controlled with the [image_config API Parameter](https://model catalog.ai/docs/features/multimodal/image-generation#image-aspect-ratio-configuration)",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text+image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image",
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5-pro",
        "name": "GPT-5 Pro",
        "provider": "OpenAI",
        "releasedAt": "2025-10-06",
        "contextLength": 400000,
        "inputPer1M": 15,
        "outputPer1M": 120,
        "summary": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience.",
        "description": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like \"think hard about this.\" Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "qwen/qwen3-vl-30b-a3b-instruct",
        "name": "Qwen3 VL 30B A3B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-10-06",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 0.52,
        "summary": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos.",
        "description": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It excels in perception of real-world/synthetic categories, 2D/3D spatial grounding, and long-form visual comprehension, achieving competitive multimodal benchmark results. For agentic use, it handles multi-image multi-turn instructions, video timeline alignments, GUI automation, and visual coding from sketches to debugged UI. Text performance matches flagship Qwen3 models, suiting document AI, OCR, UI assistance, spatial tasks, and agent research.",
        "bestFor": [
            "Code generation",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "qwen/qwen3-vl-30b-a3b-thinking",
        "name": "Qwen3 VL 30B A3B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-10-06",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 1.56,
        "summary": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos.",
        "description": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels in perception of real-world/synthetic categories, 2D/3D spatial grounding, and long-form visual comprehension, achieving competitive multimodal benchmark results. For agentic use, it handles multi-image multi-turn instructions, video timeline alignments, GUI automation, and visual coding from sketches to debugged UI. Text performance matches flagship Qwen3 models, suiting document AI, OCR, UI assistance, spatial tasks, and agent research.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "z-ai/glm-4.6",
        "name": "GLM 4.6",
        "provider": "Z.ai",
        "releasedAt": "2025-09-30",
        "contextLength": 204800,
        "inputPer1M": 0.39,
        "outputPer1M": 1.9,
        "summary": "Compared with GLM-4.5, this generation brings several key improvements: Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex agentic tasks.",
        "description": "Compared with GLM-4.5, this generation brings several key improvements: Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex agentic tasks. Superior coding performance: The model achieves higher scores on code benchmarks and demonstrates better real-world performance in applications such as Claude Code、Cline、Roo Code and Kilo Code, including improvements in generating visually polished front-end pages. Advanced reasoning: GLM-4.6 shows a clear improvement in reasoning performance and supports tool use during inference, leading to stronger overall capability. More capable agents: GLM-4.6 exhibits stronger performance in tool using and search-based agents, and integrates more effectively within agent frameworks. Refined writing: Better aligns with human preferences in style and readability, and performs more naturally in role-playing scenarios.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "anthropic/claude-sonnet-4.5",
        "name": "Claude Sonnet 4.5",
        "provider": "Anthropic",
        "releasedAt": "2025-09-29",
        "contextLength": 1000000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows.",
        "description": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with improvements across system design, code security, and specification adherence. The model is designed for extended autonomous operation, maintaining task continuity across sessions and providing fact-based progress tracking. Sonnet 4.5 also introduces stronger agentic capabilities, including improved tool orchestration, speculative parallel execution, and more efficient context and memory management. With enhanced context tracking and awareness of token usage across tool calls, it is particularly well-suited for multi-context and long-running workflows. Use cases span software engineering, cybersecurity, financial analysis, research agents, and other domains requiring sustained reasoning and tool use.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "deepseek/deepseek-v3.2-exp",
        "name": "DeepSeek V3.2 Exp",
        "provider": "DeepSeek",
        "releasedAt": "2025-09-29",
        "contextLength": 163840,
        "inputPer1M": 0.27,
        "outputPer1M": 0.41,
        "summary": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures.",
        "description": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attention mechanism designed to improve training and inference efficiency in long-context scenarios while maintaining output quality. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config) The model was trained under conditions aligned with V3.1-Terminus to enable direct comparison. Benchmarking shows performance roughly on par with V3.1 across reasoning, coding, and agentic tool-use tasks, with minor tradeoffs and gains depending on the domain. This release focuses on validating architectural optimizations for extended context lengths rather than advancing raw task accuracy, making it primarily a research-oriented model for exploring efficient transformer designs.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "thedrummer/cydonia-24b-v4.1",
        "name": "Cydonia 24B V4.1",
        "provider": "TheDrummer",
        "releasedAt": "2025-09-27",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.5,
        "summary": "Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.",
        "description": "Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "relace/relace-apply-3",
        "name": "Relace Apply 3",
        "provider": "Relace",
        "releasedAt": "2025-09-26",
        "contextLength": 256000,
        "inputPer1M": 0.85,
        "outputPer1M": 1.25,
        "summary": "Relace Apply 3 is a specialized code-patching LLM that merges AI-suggested edits straight into your source files.",
        "description": "Relace Apply 3 is a specialized code-patching LLM that merges AI-suggested edits straight into your source files. It can apply updates from GPT-4o, Claude, and others into your files at 10,000 tokens/sec on average. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <code>{initial_code}</code> <update>{edit_snippet}</update> Zero Data Retention is enabled for Relace. Learn more about this model in their [documentation](https://docs.relace.ai/api-reference/instant-apply/apply)",
        "bestFor": [
            "Code generation"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "seed",
            "stop"
        ]
    },
    {
        "id": "google/gemini-2.5-flash-lite-preview-09-2025",
        "name": "Gemini 2.5 Flash Lite Preview 09-2025",
        "provider": "Google",
        "releasedAt": "2025-09-25",
        "contextLength": 1048576,
        "inputPer1M": 0.1,
        "outputPer1M": 0.4,
        "summary": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency.",
        "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, \"thinking\" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the [Reasoning API parameter](https://model catalog.ai/docs/use-cases/reasoning-tokens) to selectively trade off cost for intelligence.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5-codex",
        "name": "GPT-5 Codex",
        "provider": "OpenAI",
        "releasedAt": "2025-09-23",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows.",
        "description": "GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering tasks. The model supports building projects from scratch, feature development, debugging, large-scale refactoring, and code review. Compared to GPT-5, Codex is more steerable, adheres closely to developer instructions, and produces cleaner, higher-quality code outputs. Reasoning effort can be adjusted with the `reasoning.effort` parameter. Read the [docs here](https://model catalog.ai/docs/use-cases/reasoning-tokens#reasoning-effort-level) Codex integrates into developer environments including the CLI, IDE extensions, GitHub, and cloud tasks. It adapts reasoning effort dynamically—providing fast responses for small tasks while sustaining extended multi-hour runs for large projects. The model is trained to perform structured code reviews, catching critical flaws by reasoning over dependencies and validating behavior against tests. It also supports multimodal inputs such as images or screenshots for UI development and integrates tool use for search, dependency installation, and environment setup. Codex is intended specifically for agentic coding applications.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "qwen/qwen3-coder-plus",
        "name": "Qwen3 Coder Plus",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 1000000,
        "inputPer1M": 0.65,
        "outputPer1M": 3.25,
        "summary": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B.",
        "description": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and environment interaction, combining coding proficiency with versatile general-purpose abilities.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-max",
        "name": "Qwen3 Max",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 262144,
        "inputPer1M": 0.78,
        "outputPer1M": 3.9,
        "summary": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version.",
        "description": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It delivers higher accuracy in math, coding, logic, and science tasks, follows complex instructions in Chinese and English more reliably, reduces hallucinations, and produces higher-quality responses for open-ended Q&A, writing, and conversation. The model supports over 100 languages with stronger translation and commonsense reasoning, and is optimized for retrieval-augmented generation (RAG) and tool calling, though it does not include a dedicated “thinking” mode.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-vl-235b-a22b-instruct",
        "name": "Qwen3 VL 235B A22B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 262144,
        "inputPer1M": 0.2,
        "outputPer1M": 0.88,
        "summary": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video.",
        "description": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document parsing, chart/table extraction, multilingual OCR). The series emphasizes robust perception (recognition of diverse real-world and synthetic categories), spatial understanding (2D/3D grounding), and long-form visual comprehension, with competitive results on public multimodal benchmarks for both perception and reasoning. Beyond analysis, Qwen3-VL supports agentic interaction and tool use: it can follow complex instructions over multi-image, multi-turn dialogues; align text to video timelines for precise temporal queries; and operate GUI elements for automation tasks. The models also enable visual coding workflows—turning sketches or mockups into code and assisting with UI debugging—while maintaining strong text-only performance comparable to the flagship Qwen3 language models. This makes Qwen3-VL suitable for production scenarios spanning document AI, multilingual OCR, software/UI assistance, spatial/embodied tasks, and research on vision-language agents.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "qwen/qwen3-vl-235b-a22b-thinking",
        "name": "Qwen3 VL 235B A22B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 131072,
        "inputPer1M": 0.26,
        "outputPer1M": 2.6,
        "summary": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video.",
        "description": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math. The series emphasizes robust perception (recognition of diverse real-world and synthetic categories), spatial understanding (2D/3D grounding), and long-form visual comprehension, with competitive results on public multimodal benchmarks for both perception and reasoning. Beyond analysis, Qwen3-VL supports agentic interaction and tool use: it can follow complex instructions over multi-image, multi-turn dialogues; align text to video timelines for precise temporal queries; and operate GUI elements for automation tasks. The models also enable visual coding workflows, turning sketches or mockups into code and assisting with UI debugging, while maintaining strong text-only performance comparable to the flagship Qwen3 language models. This makes Qwen3-VL suitable for production scenarios spanning document AI, multilingual OCR, software/UI assistance, spatial/embodied tasks, and research on vision-language agents.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "deepseek/deepseek-v3.1-terminus",
        "name": "DeepSeek V3.1 Terminus",
        "provider": "DeepSeek",
        "releasedAt": "2025-09-22",
        "contextLength": 163840,
        "inputPer1M": 0.21,
        "outputPer1M": 0.79,
        "summary": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent...",
        "description": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent capabilities, further optimizing the model's performance in coding and search agents. It is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config) The model improves tool use, code generation, and reasoning efficiency, achieving performance comparable to DeepSeek-R1 on difficult benchmarks while responding more quickly. It supports structured tool calling, code agents, and search agents, making it suitable for research, coding, and agentic workflows.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "x-ai/grok-4-fast",
        "name": "Grok 4 Fast",
        "provider": "xAI",
        "releasedAt": "2025-09-19",
        "contextLength": 2000000,
        "inputPer1M": 0.2,
        "outputPer1M": 0.5,
        "summary": "Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window.",
        "description": "Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window. It comes in two flavors: non-reasoning and reasoning. Read more about the model on xAI's [news post](http://x.ai/news/grok-4-fast). Reasoning can be enabled/disabled using the `reasoning` `enabled` parameter in the API. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#controlling-reasoning-tokens)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "alibaba/tongyi-deepresearch-30b-a3b",
        "name": "Tongyi DeepResearch 30B A3B",
        "provider": "Alibaba",
        "releasedAt": "2025-09-18",
        "contextLength": 131072,
        "inputPer1M": 0.09,
        "outputPer1M": 0.45,
        "summary": "Tongyi DeepResearch is an agentic large language model developed by Tongyi Lab, with 30 billion total parameters activating only 3 billion per token.",
        "description": "Tongyi DeepResearch is an agentic large language model developed by Tongyi Lab, with 30 billion total parameters activating only 3 billion per token. It's optimized for long-horizon, deep information-seeking tasks and delivers state-of-the-art performance on benchmarks like Humanity's Last Exam, BrowserComp, BrowserComp-ZH, WebWalkerQA, GAIA, xbench-DeepSearch, and FRAMES. This makes it superior for complex agentic search, reasoning, and multi-step problem-solving compared to prior models. The model includes a fully automated synthetic data pipeline for scalable pre-training, fine-tuning, and reinforcement learning. It uses large-scale continual pre-training on diverse agentic data to boost reasoning and stay fresh. It also features end-to-end on-policy RL with a customized Group Relative Policy Optimization, including token-level gradients and negative sample filtering for stable training. The model supports ReAct for core ability checks and an IterResearch-based 'Heavy' mode for max performance through test-time scaling. It's ideal for advanced research agents, tool use, and heavy inference workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "qwen/qwen3-coder-flash",
        "name": "Qwen3 Coder Flash",
        "provider": "Qwen",
        "releasedAt": "2025-09-17",
        "contextLength": 1000000,
        "inputPer1M": 0.195,
        "outputPer1M": 0.975,
        "summary": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus.",
        "description": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling and environment interaction, combining coding proficiency with versatile general-purpose abilities.",
        "bestFor": [
            "Code generation",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-next-80b-a3b-instruct",
        "name": "Qwen3 Next 80B A3B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-09-11",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 1.1,
        "summary": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces.",
        "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual use, while remaining robust on alignment and formatting. Compared with prior Qwen3 instruct variants, it focuses on higher throughput and stability on ultra-long inputs and multi-turn dialogues, making it well-suited for RAG, tool use, and agentic workflows that require consistent final answers rather than visible chain-of-thought. The model employs scaling-efficient training and decoding to improve parameter efficiency and inference speed, and has been validated on a broad set of public benchmarks where it reaches or approaches larger Qwen3 systems in several categories while outperforming earlier mid-sized baselines. It is best used as a general assistant, code helper, and long-context task solver in production settings where deterministic, instruction-following outputs are preferred.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "qwen/qwen3-next-80b-a3b-instruct:free",
        "name": "Qwen3 Next 80B A3B Instruct (free)",
        "provider": "Qwen",
        "releasedAt": "2025-09-11",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces.",
        "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowledge QA, and multilingual use, while remaining robust on alignment and formatting. Compared with prior Qwen3 instruct variants, it focuses on higher throughput and stability on ultra-long inputs and multi-turn dialogues, making it well-suited for RAG, tool use, and agentic workflows that require consistent final answers rather than visible chain-of-thought. The model employs scaling-efficient training and decoding to improve parameter efficiency and inference speed, and has been validated on a broad set of public benchmarks where it reaches or approaches larger Qwen3 systems in several categories while outperforming earlier mid-sized baselines. It is best used as a general assistant, code helper, and long-context task solver in production settings where deterministic, instruction-following outputs are preferred.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-next-80b-a3b-thinking",
        "name": "Qwen3 Next 80B A3B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-09-11",
        "contextLength": 131072,
        "inputPer1M": 0.0975,
        "outputPer1M": 0.78,
        "summary": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default.",
        "description": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging, logic, and agentic planning, and reports strong results across knowledge, reasoning, coding, alignment, and multilingual evaluations. Compared with prior Qwen3 variants, it emphasizes stability under long chains of thought and efficient scaling during inference, and it is tuned to follow complex instructions while reducing repetitive or off-task behavior. The model is suitable for agent frameworks and tool use (function calling), retrieval-heavy workflows, and standardized benchmarking where step-by-step solutions are required. It supports long, detailed completions and leverages throughput-oriented techniques (e.g., multi-token prediction) for faster generation. Note that it operates in thinking-only mode.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "meituan/longcat-flash-chat",
        "name": "LongCat Flash Chat",
        "provider": "Meituan",
        "releasedAt": "2025-09-09",
        "contextLength": 131072,
        "inputPer1M": 0.2,
        "outputPer1M": 0.8,
        "summary": "LongCat-Flash-Chat is a large-scale Mixture-of-Experts (MoE) model with 560B total parameters, of which 18.6B–31.3B (≈27B on average) are dynamically activated per input.",
        "description": "LongCat-Flash-Chat is a large-scale Mixture-of-Experts (MoE) model with 560B total parameters, of which 18.6B–31.3B (≈27B on average) are dynamically activated per input. It introduces a shortcut-connected MoE design to reduce communication overhead and achieve high throughput while maintaining training stability through advanced scaling strategies such as hyperparameter transfer, deterministic computation, and multi-stage optimization. This release, LongCat-Flash-Chat, is a non-thinking foundation model optimized for conversational and agentic tasks. It supports long context windows up to 128K tokens and shows competitive performance across reasoning, coding, instruction following, and domain benchmarks, with particular strengths in tool use and complex multi-step interactions.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "qwen/qwen-plus-2025-07-28",
        "name": "Qwen Plus 0728",
        "provider": "Qwen",
        "releasedAt": "2025-09-08",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 0.78,
        "summary": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "bestFor": [
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-plus-2025-07-28:thinking",
        "name": "Qwen Plus 0728 (thinking)",
        "provider": "Qwen",
        "releasedAt": "2025-09-08",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 0.78,
        "summary": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "bestFor": [
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "nvidia/nemotron-nano-9b-v2",
        "name": "Nemotron Nano 9B V2",
        "provider": "NVIDIA",
        "releasedAt": "2025-09-05",
        "contextLength": 131072,
        "inputPer1M": 0.04,
        "outputPer1M": 0.16,
        "summary": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks.",
        "description": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and tasks by first generating a reasoning trace and then concluding with a final response. The model's reasoning capabilities can be controlled via a system prompt. If the user prefers the model to provide its final answer without intermediate reasoning traces, it can be configured to do so.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "nvidia/nemotron-nano-9b-v2:free",
        "name": "Nemotron Nano 9B V2 (free)",
        "provider": "NVIDIA",
        "releasedAt": "2025-09-05",
        "contextLength": 128000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks.",
        "description": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and tasks by first generating a reasoning trace and then concluding with a final response. The model's reasoning capabilities can be controlled via a system prompt. If the user prefers the model to provide its final answer without intermediate reasoning traces, it can be configured to do so.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "moonshotai/kimi-k2-0905",
        "name": "Kimi K2 0905",
        "provider": "MoonshotAI",
        "releasedAt": "2025-09-04",
        "contextLength": 131072,
        "inputPer1M": 0.4,
        "outputPer1M": 2,
        "summary": "Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2).",
        "description": "Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2). It is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It supports long-context inference up to 256k tokens, extended from the previous 128k. This update improves agentic coding with higher accuracy and better generalization across scaffolds, and enhances frontend coding with more aesthetic and functional outputs for web, 3D, and related tasks. Kimi K2 is optimized for agentic capabilities, including advanced tool use, reasoning, and code synthesis. It excels across coding (LiveCodeBench, SWE-bench), reasoning (ZebraLogic, GPQA), and tool-use (Tau2, AceBench) benchmarks. The model is trained with a novel stack incorporating the MuonClip optimizer for stable large-scale MoE training.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "qwen/qwen3-30b-a3b-thinking-2507",
        "name": "Qwen3 30B A3B Thinking 2507",
        "provider": "Qwen",
        "releasedAt": "2025-08-28",
        "contextLength": 131072,
        "inputPer1M": 0.08,
        "outputPer1M": 0.4,
        "summary": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking.",
        "description": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where internal reasoning traces are separated from final answers. Compared to earlier Qwen3-30B releases, this version improves performance across logical reasoning, mathematics, science, coding, and multilingual benchmarks. It also demonstrates stronger instruction following, tool use, and alignment with human preferences. With higher reasoning efficiency and extended output budgets, it is best suited for advanced research, competitive problem solving, and agentic applications requiring structured long-context reasoning.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "x-ai/grok-code-fast-1",
        "name": "Grok Code Fast 1",
        "provider": "xAI",
        "releasedAt": "2025-08-26",
        "contextLength": 256000,
        "inputPer1M": 0.2,
        "outputPer1M": 1.5,
        "summary": "Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding.",
        "description": "Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding. With reasoning traces visible in the response, developers can steer Grok Code for high-quality work flows.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs"
        ]
    },
    {
        "id": "nousresearch/hermes-4-405b",
        "name": "Hermes 4 405B",
        "provider": "Nous",
        "releasedAt": "2025-08-26",
        "contextLength": 131072,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "Hermes 4 is a large-scale reasoning model built on Meta-Llama-3.1-405B and released by Nous Research.",
        "description": "Hermes 4 is a large-scale reasoning model built on Meta-Llama-3.1-405B and released by Nous Research. It introduces a hybrid reasoning mode, where the model can choose to deliberate internally with <think>...</think> traces or respond directly, offering flexibility between speed and depth. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config) The model is instruction-tuned with an expanded post-training corpus (~60B tokens) emphasizing reasoning traces, improving performance in math, code, STEM, and logical reasoning, while retaining broad assistant utility. It also supports structured outputs, including JSON mode, schema adherence, function calling, and tool use. Hermes 4 is trained for steerability, lower refusal rates, and alignment toward neutral, user-directed behavior.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "nousresearch/hermes-4-70b",
        "name": "Hermes 4 70B",
        "provider": "Nous",
        "releasedAt": "2025-08-26",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 0.4,
        "summary": "Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B.",
        "description": "Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B. It introduces the same hybrid mode as the larger 405B release, allowing the model to either respond directly or generate explicit <think>...</think> reasoning traces before answering. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config) This 70B variant is trained with the expanded post-training corpus (~60B tokens) emphasizing verified reasoning data, leading to improvements in mathematics, coding, STEM, logic, and structured outputs while maintaining general assistant performance. It supports JSON mode, schema adherence, function calling, and tool use, and is designed for greater steerability with reduced refusal rates.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "deepseek/deepseek-chat-v3.1",
        "name": "DeepSeek V3.1",
        "provider": "DeepSeek",
        "releasedAt": "2025-08-21",
        "contextLength": 32768,
        "inputPer1M": 0.15,
        "outputPer1M": 0.75,
        "summary": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates.",
        "description": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context training process, reaching up to 128K tokens, and uses FP8 microscaling for efficient inference. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config) The model improves tool use, code generation, and reasoning efficiency, achieving performance comparable to DeepSeek-R1 on difficult benchmarks while responding more quickly. It supports structured tool calling, code agents, and search agents, making it suitable for research, coding, and agentic workflows. It succeeds the [DeepSeek V3-0324](/deepseek/deepseek-chat-v3-0324) model and performs well on a variety of tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop"
        ]
    },
    {
        "id": "openai/gpt-4o-audio-preview",
        "name": "GPT-4o Audio",
        "provider": "OpenAI",
        "releasedAt": "2025-08-15",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The gpt-4o-audio-preview model adds support for audio inputs as prompts.",
        "description": "The gpt-4o-audio-preview model adds support for audio inputs as prompts. This enhancement allows the model to detect nuances within audio recordings and add depth to generated user experiences. Audio outputs are currently not supported. Audio tokens are priced at $40 per million input and $80 per million output audio tokens.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+audio->text+audio",
        "inputModalities": [
            "audio",
            "text"
        ],
        "outputModalities": [
            "text",
            "audio"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mistral-medium-3.1",
        "name": "Mistral Medium 3.1",
        "provider": "Mistral",
        "releasedAt": "2025-08-13",
        "contextLength": 131072,
        "inputPer1M": 0.4,
        "outputPer1M": 2,
        "summary": "Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost.",
        "description": "Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal performance with 8× lower cost compared to traditional large models, making it suitable for scalable deployments across professional and industrial use cases. The model excels in domains such as coding, STEM reasoning, and enterprise adaptation. It supports hybrid, on-prem, and in-VPC deployments and is optimized for integration into custom workflows. Mistral Medium 3.1 offers competitive accuracy relative to larger models like Claude Sonnet 3.5/3.7, Llama 4 Maverick, and Command R+, while maintaining broad compatibility across cloud environments.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "baidu/ernie-4.5-21b-a3b",
        "name": "ERNIE 4.5 21B A3B",
        "provider": "Baidu",
        "releasedAt": "2025-08-12",
        "contextLength": 120000,
        "inputPer1M": 0.07,
        "outputPer1M": 0.28,
        "summary": "A sophisticated text-based Mixture-of-Experts (MoE) model featuring 21B total parameters with 3B activated per token, delivering exceptional multimodal understanding and generation through heterogeneous MoE structures...",
        "description": "A sophisticated text-based Mixture-of-Experts (MoE) model featuring 21B total parameters with 3B activated per token, delivering exceptional multimodal understanding and generation through heterogeneous MoE structures and modality-isolated routing. Supporting an extensive 131K token context length, the model achieves efficient inference via multi-expert parallel collaboration and quantization, while advanced post-training techniques including SFT, DPO, and UPO ensure optimized performance across diverse applications with specialized routing and balancing losses for superior task handling.",
        "bestFor": [
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "baidu/ernie-4.5-vl-28b-a3b",
        "name": "ERNIE 4.5 VL 28B A3B",
        "provider": "Baidu",
        "releasedAt": "2025-08-12",
        "contextLength": 30000,
        "inputPer1M": 0.14,
        "outputPer1M": 0.56,
        "summary": "A powerful multimodal Mixture-of-Experts chat model featuring 28B total parameters with 3B activated per token, delivering exceptional text and vision understanding through its innovative heterogeneous MoE structure w...",
        "description": "A powerful multimodal Mixture-of-Experts chat model featuring 28B total parameters with 3B activated per token, delivering exceptional text and vision understanding through its innovative heterogeneous MoE structure with modality-isolated routing. Built with scaling-efficient infrastructure for high-throughput training and inference, the model leverages advanced post-training techniques including SFT, DPO, and UPO for optimized performance, while supporting an impressive 131K context length and RLVR alignment for superior cross-modal reasoning and generation capabilities.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "z-ai/glm-4.5v",
        "name": "GLM 4.5V",
        "provider": "Z.ai",
        "releasedAt": "2025-08-11",
        "contextLength": 65536,
        "inputPer1M": 0.6,
        "outputPer1M": 1.8,
        "summary": "GLM-4.5V is a vision-language foundation model for multimodal agent applications.",
        "description": "GLM-4.5V is a vision-language foundation model for multimodal agent applications. Built on a Mixture-of-Experts (MoE) architecture with 106B parameters and 12B activated parameters, it achieves state-of-the-art results in video understanding, image Q&A, OCR, and document parsing, with strong gains in front-end web coding, grounding, and spatial reasoning. It offers a hybrid inference mode: a \"thinking mode\" for deep reasoning and a \"non-thinking mode\" for fast responses. Reasoning behavior can be toggled via the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "ai21/jamba-large-1.7",
        "name": "Jamba Large 1.7",
        "provider": "AI21",
        "releasedAt": "2025-08-08",
        "contextLength": 256000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "Jamba Large 1.7 is the latest model in the Jamba open family, offering improvements in grounding, instruction-following, and overall efficiency.",
        "description": "Jamba Large 1.7 is the latest model in the Jamba open family, offering improvements in grounding, instruction-following, and overall efficiency. Built on a hybrid SSM-Transformer architecture with a 256K context window, it delivers more accurate, contextually grounded responses and better steerability than previous versions.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-5",
        "name": "GPT-5",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience.",
        "description": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accuracy in high-stakes use cases. It supports test-time routing features and advanced prompt understanding, including user-specified intent like \"think hard about this.\" Improvements include reductions in hallucination, sycophancy, and better performance in coding, writing, and health-related tasks.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5-chat",
        "name": "GPT-5 Chat",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 128000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.",
        "description": "GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "file",
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs"
        ]
    },
    {
        "id": "openai/gpt-5-mini",
        "name": "GPT-5 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 400000,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks.",
        "description": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost. GPT-5 Mini is the successor to OpenAI's o4-mini model.",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-5-nano",
        "name": "GPT-5 Nano",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 400000,
        "inputPer1M": 0.05,
        "outputPer1M": 0.4,
        "summary": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments.",
        "description": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger counterparts, it retains key instruction-following and safety features. It is the successor to GPT-4.1-nano and offers a lightweight option for cost-sensitive or real-time applications.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "anthropic/claude-opus-4.1",
        "name": "Claude Opus 4.1",
        "provider": "Anthropic",
        "releasedAt": "2025-08-05",
        "contextLength": 200000,
        "inputPer1M": 15,
        "outputPer1M": 75,
        "summary": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks.",
        "description": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains in multi-file code refactoring, debugging precision, and detail-oriented reasoning. The model supports extended thinking up to 64K tokens and is optimized for tasks involving research, data analysis, and tool-assisted reasoning.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-oss-120b",
        "name": "gpt-oss-120b",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0.039,
        "outputPer1M": 0.19,
        "summary": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases.",
        "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed"
        ]
    },
    {
        "id": "openai/gpt-oss-120b:free",
        "name": "gpt-oss-120b (free)",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases.",
        "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward pass and is optimized to run on a single H100 GPU with native MXFP4 quantization. The model supports configurable reasoning depth, full chain-of-thought access, and native tool use, including function calling, browsing, and structured output generation.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-oss-20b",
        "name": "gpt-oss-20b",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0.03,
        "outputPer1M": 0.14,
        "summary": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license.",
        "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed"
        ]
    },
    {
        "id": "openai/gpt-oss-20b:free",
        "name": "gpt-oss-20b (free)",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license.",
        "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for lower-latency inference and deployability on consumer or single-GPU hardware. The model is trained in OpenAI’s Harmony response format and supports reasoning level configuration, fine-tuning, and agentic capabilities including function calling, tool use, and structured outputs.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/codestral-2508",
        "name": "Codestral 2508",
        "provider": "Mistral",
        "releasedAt": "2025-08-01",
        "contextLength": 256000,
        "inputPer1M": 0.3,
        "outputPer1M": 0.9,
        "summary": "Mistral's cutting-edge language model for coding released end of July 2025.",
        "description": "Mistral's cutting-edge language model for coding released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation. [Blog Post](https://mistral.ai/news/codestral-25-08)",
        "bestFor": [
            "Code generation",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-coder-30b-a3b-instruct",
        "name": "Qwen3 Coder 30B A3B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-07-31",
        "contextLength": 160000,
        "inputPer1M": 0.07,
        "outputPer1M": 0.27,
        "summary": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use.",
        "description": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use. Built on the Qwen3 architecture, it supports a native context length of 256K tokens (extendable to 1M with Yarn) and performs strongly in tasks involving function calls, browser use, and structured code completion. This model is optimized for instruction-following without “thinking mode”, and integrates well with OpenAI-compatible tool-use formats.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "qwen/qwen3-30b-a3b-instruct-2507",
        "name": "Qwen3 30B A3B Instruct 2507",
        "provider": "Qwen",
        "releasedAt": "2025-07-29",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 0.3,
        "summary": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference.",
        "description": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction following, multilingual understanding, and agentic tool use. Post-trained on instruction data, it demonstrates competitive performance across reasoning (AIME, ZebraLogic), coding (MultiPL-E, LiveCodeBench), and alignment (IFEval, WritingBench) benchmarks. It outperforms its non-instruct variant on subjective and open-ended tasks while retaining strong factual and coding performance.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "z-ai/glm-4.5",
        "name": "GLM 4.5",
        "provider": "Z.ai",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0.6,
        "outputPer1M": 2.2,
        "summary": "GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications.",
        "description": "GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications. It leverages a Mixture-of-Experts (MoE) architecture and supports a context length of up to 128k tokens. GLM-4.5 delivers significantly enhanced capabilities in reasoning, code generation, and agent alignment. It supports a hybrid inference mode with two options, a \"thinking mode\" designed for complex reasoning and tool use, and a \"non-thinking mode\" optimized for instant responses. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "z-ai/glm-4.5-air",
        "name": "GLM 4.5 Air",
        "provider": "Z.ai",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 0.85,
        "summary": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications.",
        "description": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact parameter size. GLM-4.5-Air also supports hybrid inference modes, offering a \"thinking mode\" for advanced reasoning and tool use, and a \"non-thinking mode\" for real-time interaction. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "z-ai/glm-4.5-air:free",
        "name": "GLM 4.5 Air (free)",
        "provider": "Z.ai",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications.",
        "description": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact parameter size. GLM-4.5-Air also supports hybrid inference modes, offering a \"thinking mode\" for advanced reasoning and tool use, and a \"non-thinking mode\" for real-time interaction. Users can control the reasoning behaviour with the `reasoning` `enabled` boolean. [Learn more in our docs](https://model catalog.ai/docs/use-cases/reasoning-tokens#enable-reasoning-with-default-config)",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-235b-a22b-thinking-2507",
        "name": "Qwen3 235B A22B Thinking 2507",
        "provider": "Qwen",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0.1495,
        "outputPer1M": 1.495,
        "summary": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks.",
        "description": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively supports up to 262,144 tokens of context. This \"thinking-only\" variant enhances structured logical reasoning, mathematics, science, and long-form generation, showing strong benchmark performance across AIME, SuperGPQA, LiveCodeBench, and MMLU-Redux. It enforces a special reasoning mode (</think>) and is designed for high-token outputs (up to 81,920 tokens) in challenging domains. The model is instruction-tuned and excels at step-by-step reasoning, tool use, agentic workflows, and multilingual tasks. This release represents the most capable open-source variant in the Qwen3-235B series, surpassing many closed models in structured reasoning use cases.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "z-ai/glm-4-32b",
        "name": "GLM 4 32B",
        "provider": "Z.ai",
        "releasedAt": "2025-07-24",
        "contextLength": 128000,
        "inputPer1M": 0.1,
        "outputPer1M": 0.1,
        "summary": "GLM 4 32B is a cost-effective foundation language model.",
        "description": "GLM 4 32B is a cost-effective foundation language model. It can efficiently perform complex tasks and has significantly enhanced capabilities in tool use, online search, and code-related intelligent tasks. It is made by the same lab behind the thudm models.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-coder",
        "name": "Qwen3 Coder 480B A35B",
        "provider": "Qwen",
        "releasedAt": "2025-07-23",
        "contextLength": 262144,
        "inputPer1M": 0.22,
        "outputPer1M": 1,
        "summary": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team.",
        "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts). Pricing for the Alibaba endpoints varies by context length. Once a request is greater than 128k input tokens, the higher pricing is used.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "qwen/qwen3-coder:free",
        "name": "Qwen3 Coder 480B A35B (free)",
        "provider": "Qwen",
        "releasedAt": "2025-07-23",
        "contextLength": 262000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team.",
        "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over repositories. The model features 480 billion total parameters, with 35 billion active per forward pass (8 out of 160 experts). Pricing for the Alibaba endpoints varies by context length. Once a request is greater than 128k input tokens, the higher pricing is used.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-2.5-flash-lite",
        "name": "Gemini 2.5 Flash Lite",
        "provider": "Google",
        "releasedAt": "2025-07-22",
        "contextLength": 1048576,
        "inputPer1M": 0.1,
        "outputPer1M": 0.4,
        "summary": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency.",
        "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance across common benchmarks compared to earlier Flash models. By default, \"thinking\" (i.e. multi-pass reasoning) is disabled to prioritize speed, but developers can enable it via the [Reasoning API parameter](https://model catalog.ai/docs/use-cases/reasoning-tokens) to selectively trade off cost for intelligence.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "bytedance/ui-tars-1.5-7b",
        "name": "UI-TARS 7B",
        "provider": "ByteDance",
        "releasedAt": "2025-07-22",
        "contextLength": 128000,
        "inputPer1M": 0.1,
        "outputPer1M": 0.2,
        "summary": "UI-TARS-1.5 is a multimodal vision-language agent optimized for GUI-based environments, including desktop interfaces, web browsers, mobile systems, and games.",
        "description": "UI-TARS-1.5 is a multimodal vision-language agent optimized for GUI-based environments, including desktop interfaces, web browsers, mobile systems, and games. Built by ByteDance, it builds upon the UI-TARS framework with reinforcement learning-based reasoning, enabling robust action planning and execution across virtual interfaces. This model achieves state-of-the-art results on a range of interactive and grounding benchmarks, including OSworld, WebVoyager, AndroidWorld, and ScreenSpot. It also demonstrates perfect task completion across diverse Poki games and outperforms prior models in Minecraft agent tasks. UI-TARS-1.5 supports thought decomposition during inference and shows strong scaling across variants, with the 1.5 version notably exceeding the performance of earlier 72B and 7B checkpoints.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-235b-a22b-2507",
        "name": "Qwen3 235B A22B Instruct 2507",
        "provider": "Qwen",
        "releasedAt": "2025-07-21",
        "contextLength": 262144,
        "inputPer1M": 0.071,
        "outputPer1M": 0.1,
        "summary": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass.",
        "description": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose text generation, including instruction following, logical reasoning, math, code, and tool usage. The model supports a native 262K context length and does not implement \"thinking mode\" (<think> blocks). Compared to its base variant, this version delivers significant gains in knowledge coverage, long-context reasoning, coding benchmarks, and alignment with open-ended tasks. It is particularly strong on multilingual understanding, math reasoning (e.g., AIME, HMMT), and alignment evaluations like Arena-Hard and WritingBench.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed"
        ]
    },
    {
        "id": "moonshotai/kimi-k2",
        "name": "Kimi K2 0711",
        "provider": "MoonshotAI",
        "releasedAt": "2025-07-11",
        "contextLength": 131000,
        "inputPer1M": 0.55,
        "outputPer1M": 2.2,
        "summary": "Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass.",
        "description": "Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for agentic capabilities, including advanced tool use, reasoning, and code synthesis. Kimi K2 excels across a broad range of benchmarks, particularly in coding (LiveCodeBench, SWE-bench), reasoning (ZebraLogic, GPQA), and tool-use (Tau2, AceBench) tasks. It supports long-context inference up to 128K tokens and is designed with a novel training stack that includes the MuonClip optimizer for stable large-scale MoE training.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "switchpoint/router",
        "name": "Switchpoint Router",
        "provider": "Switchpoint",
        "releasedAt": "2025-07-11",
        "contextLength": 131072,
        "inputPer1M": 0.85,
        "outputPer1M": 3.4,
        "summary": "Switchpoint AI's router instantly analyzes your request and directs it to the optimal AI from an ever-evolving library.",
        "description": "Switchpoint AI's router instantly analyzes your request and directs it to the optimal AI from an ever-evolving library. As the world of LLMs advances, our router gets smarter, ensuring you always benefit from the industry's newest models without changing your workflow. This model is configured for a simple, flat rate per response here on model catalog. It's powered by the full routing engine from [Switchpoint AI](https://www.switchpoint.dev).",
        "bestFor": [
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "mistralai/devstral-medium",
        "name": "Devstral Medium",
        "provider": "Mistral",
        "releasedAt": "2025-07-10",
        "contextLength": 131072,
        "inputPer1M": 0.4,
        "outputPer1M": 2,
        "summary": "Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI.",
        "description": "Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI. Positioned as a step up from Devstral Small, it achieves 61.6% on SWE-Bench Verified, placing it ahead of Gemini 2.5 Pro and GPT-4.1 in code-related tasks, at a fraction of the cost. It is designed for generalization across prompt styles and tool use in code agents and frameworks. Devstral Medium is available via API only (not open-weight), and supports enterprise deployment on private infrastructure, with optional fine-tuning capabilities.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "mistralai/devstral-small",
        "name": "Devstral Small 1.1",
        "provider": "Mistral",
        "releasedAt": "2025-07-10",
        "contextLength": 131072,
        "inputPer1M": 0.1,
        "outputPer1M": 0.3,
        "summary": "Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI.",
        "description": "Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI. Finetuned from Mistral Small 3.1 and released under the Apache 2.0 license, it features a 128k token context window and supports both Mistral-style function calling and XML output formats. Designed for agentic coding workflows, Devstral Small 1.1 is optimized for tasks such as codebase exploration, multi-file edits, and integration into autonomous development agents like OpenHands and Cline. It achieves 53.6% on SWE-Bench Verified, surpassing all other open models on this benchmark, while remaining lightweight enough to run on a single 4090 GPU or Apple silicon machine. The model uses a Tekken tokenizer with a 131k vocabulary and is deployable via vLLM, Transformers, Ollama, LM Studio, and other OpenAI-compatible runtimes.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3n-e2b-it:free",
        "name": "Gemma 3n 2B (free)",
        "provider": "Google",
        "releasedAt": "2025-07-09",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture.",
        "description": "Gemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture. Based on the MatFormer architecture, it supports nested submodels and modular composition via the Mix-and-Match framework. Gemma 3n models are optimized for low-resource deployment, offering 32K context length and strong multilingual and reasoning performance across common benchmarks. This variant is trained on a diverse corpus including code, math, web, and multimodal data.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "x-ai/grok-4",
        "name": "Grok 4",
        "provider": "xAI",
        "releasedAt": "2025-07-09",
        "contextLength": 256000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Grok 4 is xAI's latest reasoning model with a 256k context window.",
        "description": "Grok 4 is xAI's latest reasoning model with a 256k context window. It supports parallel tool calling, structured outputs, and both image and text inputs. Note that reasoning is not exposed, reasoning cannot be disabled, and the reasoning effort cannot be specified. Pricing increases once the total tokens in a given request is greater than 128k tokens. See more details on the [xAI docs](https://docs.x.ai/docs/models/grok-4-0709)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
        "name": "Uncensored (free)",
        "provider": "Venice",
        "releasedAt": "2025-07-09",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai.",
        "description": "Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai. This model is designed as an “uncensored” instruct-tuned LLM, preserving user control over alignment, system prompts, and behavior. Intended for advanced and unrestricted use cases, Venice Uncensored emphasizes steerability and transparent behavior, removing default safety and alignment layers typically found in mainstream assistant models.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "tngtech/deepseek-r1t2-chimera",
        "name": "DeepSeek R1T2 Chimera",
        "provider": "TNG",
        "releasedAt": "2025-07-08",
        "contextLength": 163840,
        "inputPer1M": 0.25,
        "outputPer1M": 0.85,
        "summary": "DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech.",
        "description": "DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech. It is a 671 B-parameter mixture-of-experts text-generation model assembled from DeepSeek-AI’s R1-0528, R1, and V3-0324 checkpoints with an Assembly-of-Experts merge. The tri-parent design yields strong reasoning performance while running roughly 20 % faster than the original R1 and more than 2× faster than R1-0528 under vLLM, giving a favorable cost-to-intelligence trade-off. The checkpoint supports contexts up to 60 k tokens in standard use (tested to ~130 k) and maintains consistent <think> token behaviour, making it suitable for long-context analysis, dialogue and other open-ended generation tasks.",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "tencent/hunyuan-a13b-instruct",
        "name": "Hunyuan A13B Instruct",
        "provider": "Tencent",
        "releasedAt": "2025-07-08",
        "contextLength": 131072,
        "inputPer1M": 0.14,
        "outputPer1M": 0.57,
        "summary": "Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought.",
        "description": "Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought. It offers competitive benchmark performance across mathematics, science, coding, and multi-turn reasoning tasks, while maintaining high inference efficiency via Grouped Query Attention (GQA) and quantization support (FP8, GPTQ, etc.).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "reasoning",
            "response_format",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "morph/morph-v3-fast",
        "name": "Morph V3 Fast",
        "provider": "Morph",
        "releasedAt": "2025-07-07",
        "contextLength": 81920,
        "inputPer1M": 0.8,
        "outputPer1M": 1.2,
        "summary": "Morph's fastest apply model for code edits.",
        "description": "Morph's fastest apply model for code edits. ~10,500 tokens/sec with 96% accuracy for rapid code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <code>{initial_code}</code> <update>{edit_snippet}</update> Zero Data Retention is enabled for Morph. Learn more about this model in their [documentation](https://docs.morphllm.com/quickstart)",
        "bestFor": [
            "Code generation",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature"
        ]
    },
    {
        "id": "morph/morph-v3-large",
        "name": "Morph V3 Large",
        "provider": "Morph",
        "releasedAt": "2025-07-07",
        "contextLength": 262144,
        "inputPer1M": 0.9,
        "outputPer1M": 1.9,
        "summary": "Morph's high-accuracy apply model for complex code edits.",
        "description": "Morph's high-accuracy apply model for complex code edits. ~4,500 tokens/sec with 98% accuracy for precise code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <code>{initial_code}</code> <update>{edit_snippet}</update> Zero Data Retention is enabled for Morph. Learn more about this model in their [documentation](https://docs.morphllm.com/quickstart)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature"
        ]
    },
    {
        "id": "baidu/ernie-4.5-300b-a47b",
        "name": "ERNIE 4.5 300B A47B",
        "provider": "Baidu",
        "releasedAt": "2025-06-30",
        "contextLength": 123000,
        "inputPer1M": 0.28,
        "outputPer1M": 1.1,
        "summary": "ERNIE-4.5-300B-A47B is a 300B parameter Mixture-of-Experts (MoE) language model developed by Baidu as part of the ERNIE 4.5 series.",
        "description": "ERNIE-4.5-300B-A47B is a 300B parameter Mixture-of-Experts (MoE) language model developed by Baidu as part of the ERNIE 4.5 series. It activates 47B parameters per token and supports text generation in both English and Chinese. Optimized for high-throughput inference and efficient scaling, it uses a heterogeneous MoE structure with advanced routing and quantization strategies, including FP8 and 2-bit formats. This version is fine-tuned for language-only tasks and supports reasoning, tool parameters, and extended context lengths up to 131k tokens. Suitable for general-purpose LLM applications with high reasoning and throughput demands.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "baidu/ernie-4.5-vl-424b-a47b",
        "name": "ERNIE 4.5 VL 424B A47B",
        "provider": "Baidu",
        "releasedAt": "2025-06-30",
        "contextLength": 123000,
        "inputPer1M": 0.42,
        "outputPer1M": 1.25,
        "summary": "ERNIE-4.5-VL-424B-A47B is a multimodal Mixture-of-Experts (MoE) model from Baidu’s ERNIE 4.5 series, featuring 424B total parameters with 47B active per token.",
        "description": "ERNIE-4.5-VL-424B-A47B is a multimodal Mixture-of-Experts (MoE) model from Baidu’s ERNIE 4.5 series, featuring 424B total parameters with 47B active per token. It is trained jointly on text and image data using a heterogeneous MoE architecture and modality-isolated routing to enable high-fidelity cross-modal reasoning, image understanding, and long-context generation (up to 131k tokens). Fine-tuned with techniques like SFT, DPO, UPO, and RLVR, this model supports both “thinking” and non-thinking inference modes. Designed for vision-language tasks in English and Chinese, it is optimized for efficient scaling and can operate under 4-bit/8-bit quantization.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "inception/mercury",
        "name": "Mercury",
        "provider": "Inception",
        "releasedAt": "2025-06-26",
        "contextLength": 128000,
        "inputPer1M": 0.25,
        "outputPer1M": 0.75,
        "summary": "Mercury is the first diffusion large language model (dLLM).",
        "description": "Mercury is the first diffusion large language model (dLLM). Applying a breakthrough discrete diffusion approach, the model runs 5-10x faster than even speed optimized models like GPT-4.1 Nano and Claude 3.5 Haiku while matching their performance. Mercury's speed enables developers to provide responsive user experiences, including with voice agents, search interfaces, and chatbots. Read more in the [blog post] (https://www.inceptionlabs.ai/blog/introducing-mercury) here.",
        "bestFor": [
            "Code generation",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mistral-small-3.2-24b-instruct",
        "name": "Mistral Small 3.2 24B",
        "provider": "Mistral",
        "releasedAt": "2025-06-20",
        "contextLength": 128000,
        "inputPer1M": 0.075,
        "outputPer1M": 0.2,
        "summary": "Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling.",
        "description": "Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling. Compared to the 3.1 release, version 3.2 significantly improves accuracy on WildBench and Arena Hard, reduces infinite generations, and delivers gains in tool use and structured output tasks. It supports image and text inputs with structured outputs, function/tool calling, and strong performance across coding (HumanEval+, MBPP), STEM (MMLU, MATH, GPQA), and vision benchmarks (ChartQA, DocVQA).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "google/gemini-2.5-flash",
        "name": "Gemini 2.5 Flash",
        "provider": "Google",
        "releasedAt": "2025-06-17",
        "contextLength": 1048576,
        "inputPer1M": 0.3,
        "outputPer1M": 2.5,
        "summary": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks.",
        "description": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provide responses with greater accuracy and nuanced context handling. Additionally, Gemini 2.5 Flash is configurable through the \"max tokens for reasoning\" parameter, as described in the documentation (https://model catalog.ai/docs/use-cases/reasoning-tokens#max-tokens-for-reasoning).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "file",
            "image",
            "text",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-2.5-pro",
        "name": "Gemini 2.5 Pro",
        "provider": "Google",
        "releasedAt": "2025-06-17",
        "contextLength": 1048576,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks.",
        "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "minimax/minimax-m1",
        "name": "MiniMax M1",
        "provider": "MiniMax",
        "releasedAt": "2025-06-17",
        "contextLength": 1000000,
        "inputPer1M": 0.4,
        "outputPer1M": 2.2,
        "summary": "MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference.",
        "description": "MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference. It leverages a hybrid Mixture-of-Experts (MoE) architecture paired with a custom \"lightning attention\" mechanism, allowing it to process long sequences—up to 1 million tokens—while maintaining competitive FLOP efficiency. With 456 billion total parameters and 45.9B active per token, this variant is optimized for complex, multi-step reasoning tasks. Trained via a custom reinforcement learning pipeline (CISPO), M1 excels in long-context understanding, software engineering, agentic tool use, and mathematical reasoning. Benchmarks show strong performance across FullStackBench, SWE-bench, MATH, GPQA, and TAU-Bench, often outperforming other open models like DeepSeek R1 and Qwen3-235B.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "x-ai/grok-3",
        "name": "Grok 3",
        "provider": "xAI",
        "releasedAt": "2025-06-10",
        "contextLength": 131072,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Grok 3 is the latest model from xAI.",
        "description": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science.",
        "bestFor": [
            "Code generation"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs"
        ]
    },
    {
        "id": "x-ai/grok-3-mini",
        "name": "Grok 3 Mini",
        "provider": "xAI",
        "releasedAt": "2025-06-10",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.5,
        "summary": "A lightweight model that thinks before responding.",
        "description": "A lightweight model that thinks before responding. Fast, smart, and great for logic-based tasks that do not require deep domain knowledge. The raw thinking traces are accessible.",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs"
        ]
    },
    {
        "id": "openai/o3-pro",
        "name": "o3 Pro",
        "provider": "OpenAI",
        "releasedAt": "2025-06-10",
        "contextLength": 200000,
        "inputPer1M": 20,
        "outputPer1M": 80,
        "summary": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning.",
        "description": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently better answers. Note that BYOK is required for this model. Set up here: https://model catalog.ai/settings/integrations",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "file",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "google/gemini-2.5-pro-preview",
        "name": "Gemini 2.5 Pro Preview 06-05",
        "provider": "Google",
        "releasedAt": "2025-06-05",
        "contextLength": 1048576,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks.",
        "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text+image+file+audio->text",
        "inputModalities": [
            "file",
            "image",
            "text",
            "audio"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "deepseek/deepseek-r1-0528",
        "name": "R1 0528",
        "provider": "DeepSeek",
        "releasedAt": "2025-05-28",
        "contextLength": 163840,
        "inputPer1M": 0.45,
        "outputPer1M": 2.15,
        "summary": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens.",
        "description": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass. Fully open-source model.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "anthropic/claude-opus-4",
        "name": "Claude Opus 4",
        "provider": "Anthropic",
        "releasedAt": "2025-05-22",
        "contextLength": 200000,
        "inputPer1M": 15,
        "outputPer1M": 75,
        "summary": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows.",
        "description": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in software engineering, achieving leading results on SWE-bench (72.5%) and Terminal-bench (43.2%). Opus 4 supports extended, agentic workflows, handling thousands of task steps continuously for hours without degradation. Read more at the [blog post here](https://www.anthropic.com/news/claude-4)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "anthropic/claude-sonnet-4",
        "name": "Claude Sonnet 4",
        "provider": "Anthropic",
        "releasedAt": "2025-05-22",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability.",
        "description": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on SWE-bench (72.7%), Sonnet 4 balances capability and computational efficiency, making it suitable for a broad range of applications from routine coding tasks to complex software development projects. Key enhancements include improved autonomous codebase navigation, reduced error rates in agent-driven workflows, and increased reliability in following intricate instructions. Sonnet 4 is optimized for practical everyday use, providing advanced reasoning capabilities while maintaining efficiency and responsiveness in diverse internal and external scenarios. Read more at the [blog post here](https://www.anthropic.com/news/claude-4)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3n-e4b-it",
        "name": "Gemma 3n 4B",
        "provider": "Google",
        "releasedAt": "2025-05-20",
        "contextLength": 32768,
        "inputPer1M": 0.02,
        "outputPer1M": 0.04,
        "summary": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets.",
        "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements. This model supports a wide linguistic range (trained in over 140 languages) and features a flexible 32K token context window. Gemma 3n can selectively load parameters, optimizing memory and computational efficiency based on the task or device capabilities, making it well-suited for privacy-focused, offline-capable applications and on-device AI solutions. [Read more in the blog post](https://developers.googleblog.com/en/introducing-gemma-3n/)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3n-e4b-it:free",
        "name": "Gemma 3n 4B (free)",
        "provider": "Google",
        "releasedAt": "2025-05-20",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets.",
        "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks such as text generation, speech recognition, translation, and image analysis. Leveraging innovations like Per-Layer Embedding (PLE) caching and the MatFormer architecture, Gemma 3n dynamically manages memory usage and computational load by selectively activating model parameters, significantly reducing runtime resource requirements. This model supports a wide linguistic range (trained in over 140 languages) and features a flexible 32K token context window. Gemma 3n can selectively load parameters, optimizing memory and computational efficiency based on the task or device capabilities, making it well-suited for privacy-focused, offline-capable applications and on-device AI solutions. [Read more in the blog post](https://developers.googleblog.com/en/introducing-gemma-3n/)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-2.5-pro-preview-05-06",
        "name": "Gemini 2.5 Pro Preview 05-06",
        "provider": "Google",
        "releasedAt": "2025-05-07",
        "contextLength": 1048576,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks.",
        "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced accuracy and nuanced context handling. Gemini 2.5 Pro achieves top-tier performance on multiple benchmarks, including first-place positioning on the LMArena leaderboard, reflecting superior human-preference alignment and complex problem-solving abilities.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-medium-3",
        "name": "Mistral Medium 3",
        "provider": "Mistral",
        "releasedAt": "2025-05-07",
        "contextLength": 131072,
        "inputPer1M": 0.4,
        "outputPer1M": 2,
        "summary": "Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost.",
        "description": "Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal performance with 8× lower cost compared to traditional large models, making it suitable for scalable deployments across professional and industrial use cases. The model excels in domains such as coding, STEM reasoning, and enterprise adaptation. It supports hybrid, on-prem, and in-VPC deployments and is optimized for integration into custom workflows. Mistral Medium 3 offers competitive accuracy relative to larger models like Claude Sonnet 3.5/3.7, Llama 4 Maverick, and Command R+, while maintaining broad compatibility across cloud environments.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "arcee-ai/coder-large",
        "name": "Coder Large",
        "provider": "Arcee AI",
        "releasedAt": "2025-05-05",
        "contextLength": 32768,
        "inputPer1M": 0.5,
        "outputPer1M": 0.8,
        "summary": "Coder‑Large is a 32 B‑parameter offspring of Qwen 2.5‑Instruct that has been further trained on permissively‑licensed GitHub, CodeSearchNet and synthetic bug‑fix corpora.",
        "description": "Coder‑Large is a 32 B‑parameter offspring of Qwen 2.5‑Instruct that has been further trained on permissively‑licensed GitHub, CodeSearchNet and synthetic bug‑fix corpora. It supports a 32k context window, enabling multi‑file refactoring or long diff review in a single call, and understands 30‑plus programming languages with special attention to TypeScript, Go and Terraform. Internal benchmarks show 5–8 pt gains over CodeLlama‑34 B‑Python on HumanEval and competitive BugFix scores thanks to a reinforcement pass that rewards compilable output. The model emits structured explanations alongside code blocks by default, making it suitable for educational tooling as well as production copilot scenarios. Cost‑wise, Together AI prices it well below proprietary incumbents, so teams can scale interactive coding without runaway spend.",
        "bestFor": [
            "Code generation",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "arcee-ai/maestro-reasoning",
        "name": "Maestro Reasoning",
        "provider": "Arcee AI",
        "releasedAt": "2025-05-05",
        "contextLength": 131072,
        "inputPer1M": 0.9,
        "outputPer1M": 3.3,
        "summary": "Maestro Reasoning is Arcee's flagship analysis model: a 32 B‑parameter derivative of Qwen 2.5‑32 B tuned with DPO and chain‑of‑thought RL for step‑by‑step logic.",
        "description": "Maestro Reasoning is Arcee's flagship analysis model: a 32 B‑parameter derivative of Qwen 2.5‑32 B tuned with DPO and chain‑of‑thought RL for step‑by‑step logic. Compared to the earlier 7 B preview, the production 32 B release widens the context window to 128 k tokens and doubles pass‑rate on MATH and GSM‑8K, while also lifting code completion accuracy. Its instruction style encourages structured \"thought → answer\" traces that can be parsed or hidden according to user preference. That transparency pairs well with audit‑focused industries like finance or healthcare where seeing the reasoning path matters. In Arcee Conductor, Maestro is automatically selected for complex, multi‑constraint queries that smaller SLMs bounce.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "arcee-ai/spotlight",
        "name": "Spotlight",
        "provider": "Arcee AI",
        "releasedAt": "2025-05-05",
        "contextLength": 131072,
        "inputPer1M": 0.18,
        "outputPer1M": 0.18,
        "summary": "Spotlight is a 7‑billion‑parameter vision‑language model derived from Qwen 2.5‑VL and fine‑tuned by Arcee AI for tight image‑text grounding tasks.",
        "description": "Spotlight is a 7‑billion‑parameter vision‑language model derived from Qwen 2.5‑VL and fine‑tuned by Arcee AI for tight image‑text grounding tasks. It offers a 32 k‑token context window, enabling rich multimodal conversations that combine lengthy documents with one or more images. Training emphasized fast inference on consumer GPUs while retaining strong captioning, visual‐question‑answering, and diagram‑analysis accuracy. As a result, Spotlight slots neatly into agent workflows where screenshots, charts or UI mock‑ups need to be interpreted on the fly. Early benchmarks show it matching or out‑scoring larger VLMs such as LLaVA‑1.6 13 B on popular VQA and POPE alignment tests.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "arcee-ai/virtuoso-large",
        "name": "Virtuoso Large",
        "provider": "Arcee AI",
        "releasedAt": "2025-05-05",
        "contextLength": 131072,
        "inputPer1M": 0.75,
        "outputPer1M": 1.2,
        "summary": "Virtuoso‑Large is Arcee's top‑tier general‑purpose LLM at 72 B parameters, tuned to tackle cross‑domain reasoning, creative writing and enterprise QA.",
        "description": "Virtuoso‑Large is Arcee's top‑tier general‑purpose LLM at 72 B parameters, tuned to tackle cross‑domain reasoning, creative writing and enterprise QA. Unlike many 70 B peers, it retains the 128 k context inherited from Qwen 2.5, letting it ingest books, codebases or financial filings wholesale. Training blended DeepSeek R1 distillation, multi‑epoch supervised fine‑tuning and a final DPO/RLHF alignment stage, yielding strong performance on BIG‑Bench‑Hard, GSM‑8K and long‑context Needle‑In‑Haystack tests. Enterprises use Virtuoso‑Large as the \"fallback\" brain in Conductor pipelines when other SLMs flag low confidence. Despite its size, aggressive KV‑cache optimizations keep first‑token latency in the low‑second range on 8× H100 nodes, making it a practical production‑grade powerhouse.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-guard-4-12b",
        "name": "Llama Guard 4 12B",
        "provider": "Meta",
        "releasedAt": "2025-04-30",
        "contextLength": 163840,
        "inputPer1M": 0.18,
        "outputPer1M": 0.18,
        "summary": "Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification.",
        "description": "Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification) and in LLM responses (response classification). It acts as an LLM—generating text in its output that indicates whether a given prompt or response is safe or unsafe, and if unsafe, it also lists the content categories violated. Llama Guard 4 was aligned to safeguard against the standardized MLCommons hazards taxonomy and designed to support multimodal Llama 4 capabilities. Specifically, it combines features from previous Llama Guard models, providing content moderation for English and multiple supported languages, along with enhanced capabilities to handle mixed text-and-image prompts, including multiple images. Additionally, Llama Guard 4 is integrated into the Llama Moderations API, extending robust safety classification to text and images.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "inception/mercury-coder",
        "name": "Mercury Coder",
        "provider": "Inception",
        "releasedAt": "2025-04-30",
        "contextLength": 128000,
        "inputPer1M": 0.25,
        "outputPer1M": 0.75,
        "summary": "Mercury Coder is the first diffusion large language model (dLLM).",
        "description": "Mercury Coder is the first diffusion large language model (dLLM). Applying a breakthrough discrete diffusion approach, the model runs 5-10x faster than even speed optimized models like Claude 3.5 Haiku and GPT-4o Mini while matching their performance. Mercury Coder's speed means that developers can stay in the flow while coding, enjoying rapid chat-based iteration and responsive code completion suggestions. On Copilot Arena, Mercury Coder ranks 1st in speed and ties for 2nd in quality. Read more in the [blog post here](https://www.inceptionlabs.ai/blog/introducing-mercury).",
        "bestFor": [
            "Code generation",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "qwen/qwen3-4b:free",
        "name": "Qwen3 4B (free)",
        "provider": "Qwen",
        "releasedAt": "2025-04-30",
        "contextLength": 40960,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen3-4B is a 4 billion parameter dense language model from the Qwen3 series, designed to support both general-purpose and reasoning-intensive tasks.",
        "description": "Qwen3-4B is a 4 billion parameter dense language model from the Qwen3 series, designed to support both general-purpose and reasoning-intensive tasks. It introduces a dual-mode architecture—thinking and non-thinking—allowing dynamic switching between high-precision logical reasoning and efficient dialogue generation. This makes it well-suited for multi-turn chat, instruction following, and complex agent workflows.",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "qwen/qwen3-14b",
        "name": "Qwen3 14B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.06,
        "outputPer1M": 0.24,
        "summary": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue.",
        "description": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for tasks like math, programming, and logical inference, and a \"non-thinking\" mode for general-purpose conversation. The model is fine-tuned for instruction-following, agent tool use, creative writing, and multilingual tasks across 100+ languages and dialects. It natively handles 32K token contexts and can extend to 131K tokens using YaRN-based scaling.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "qwen/qwen3-235b-a22b",
        "name": "Qwen3 235B A22B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 131072,
        "inputPer1M": 0.455,
        "outputPer1M": 1.82,
        "summary": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass.",
        "description": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a \"thinking\" mode for complex reasoning, math, and code tasks, and a \"non-thinking\" mode for general conversational efficiency. The model demonstrates strong reasoning ability, multilingual support (100+ languages and dialects), advanced instruction-following, and agent tool-calling capabilities. It natively handles a 32K token context window and extends up to 131K tokens using YaRN-based scaling.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen3-30b-a3b",
        "name": "Qwen3 30B A3B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.08,
        "outputPer1M": 0.28,
        "summary": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks.",
        "description": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique ability to switch seamlessly between a thinking mode for complex reasoning and a non-thinking mode for efficient dialogue ensures versatile, high-quality performance. Significantly outperforming prior models like QwQ and Qwen2.5, Qwen3 delivers superior mathematics, coding, commonsense reasoning, creative writing, and interactive dialogue capabilities. The Qwen3-30B-A3B variant includes 30.5 billion parameters (3.3 billion activated), 48 layers, 128 experts (8 activated per task), and supports up to 131K token contexts with YaRN, setting a new standard among open-source models.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "qwen/qwen3-32b",
        "name": "Qwen3 32B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.08,
        "outputPer1M": 0.24,
        "summary": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue.",
        "description": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for tasks like math, coding, and logical inference, and a \"non-thinking\" mode for faster, general-purpose conversation. The model demonstrates strong performance in instruction-following, agent tool use, creative writing, and multilingual tasks across 100+ languages and dialects. It natively handles 32K token contexts and can extend to 131K tokens using YaRN-based scaling.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "qwen/qwen3-8b",
        "name": "Qwen3 8B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.05,
        "outputPer1M": 0.4,
        "summary": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue.",
        "description": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between \"thinking\" mode for math, coding, and logical inference, and \"non-thinking\" mode for general conversation. The model is fine-tuned for instruction-following, agent integration, creative writing, and multilingual use across 100+ languages and dialects. It natively supports a 32K token context window and can extend to 131K tokens with YaRN scaling.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "openai/o3",
        "name": "o3",
        "provider": "OpenAI",
        "releasedAt": "2025-04-16",
        "contextLength": 200000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "o3 is a well-rounded and powerful model across domains.",
        "description": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following. Use it to think through multi-step problems that involve analysis across text, code, and images.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/o4-mini",
        "name": "o4 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-04-16",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities.",
        "description": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning and coding performance across benchmarks like AIME (99.5% with Python) and SWE-bench, outperforming its predecessor o3-mini and even approaching o3 in some domains. Despite its smaller size, o4-mini exhibits high accuracy in STEM tasks, visual problem solving (e.g., MathVista, MMMU), and code editing. It is especially well-suited for high-throughput scenarios where latency or cost is critical. Thanks to its efficient architecture and refined reinforcement learning training, o4-mini can chain tools, generate structured outputs, and solve multi-step tasks with minimal delay—often in under a minute.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/o4-mini-high",
        "name": "o4 Mini High",
        "provider": "OpenAI",
        "releasedAt": "2025-04-16",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high.",
        "description": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive reasoning and coding performance across benchmarks like AIME (99.5% with Python) and SWE-bench, outperforming its predecessor o3-mini and even approaching o3 in some domains. Despite its smaller size, o4-mini exhibits high accuracy in STEM tasks, visual problem solving (e.g., MathVista, MMMU), and code editing. It is especially well-suited for high-throughput scenarios where latency or cost is critical. Thanks to its efficient architecture and refined reinforcement learning training, o4-mini can chain tools, generate structured outputs, and solve multi-step tasks with minimal delay—often in under a minute.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "qwen/qwen2.5-coder-7b-instruct",
        "name": "Qwen2.5 Coder 7B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-04-15",
        "contextLength": 32768,
        "inputPer1M": 0.03,
        "outputPer1M": 0.09,
        "summary": "Qwen2.5-Coder-7B-Instruct is a 7B parameter instruction-tuned language model optimized for code-related tasks such as code generation, reasoning, and bug fixing.",
        "description": "Qwen2.5-Coder-7B-Instruct is a 7B parameter instruction-tuned language model optimized for code-related tasks such as code generation, reasoning, and bug fixing. Based on the Qwen2.5 architecture, it incorporates enhancements like RoPE, SwiGLU, RMSNorm, and GQA attention with support for up to 128K tokens using YaRN-based extrapolation. It is trained on a large corpus of source code, synthetic data, and text-code grounding, providing robust performance across programming languages and agentic coding workflows. This model is part of the Qwen2.5-Coder family and offers strong compatibility with tools like vLLM for efficient deployment. Released under the Apache 2.0 license.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "alfredpros/codellama-7b-instruct-solidity",
        "name": "CodeLLaMa 7B Instruct Solidity",
        "provider": "AlfredPros",
        "releasedAt": "2025-04-14",
        "contextLength": 8192,
        "inputPer1M": 0.8,
        "outputPer1M": 1.2,
        "summary": "A finetuned 7 billion parameters Code LLaMA - Instruct model to generate Solidity smart contract using 4-bit QLoRA finetuning provided by PEFT library.",
        "description": "A finetuned 7 billion parameters Code LLaMA - Instruct model to generate Solidity smart contract using 4-bit QLoRA finetuning provided by PEFT library.",
        "bestFor": [
            "Code generation"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4.1",
        "name": "GPT-4.1",
        "provider": "OpenAI",
        "releasedAt": "2025-04-14",
        "contextLength": 1047576,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning.",
        "description": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o and GPT-4.5 across coding (54.6% SWE-bench Verified), instruction compliance (87.4% IFEval), and multimodal understanding benchmarks. It is tuned for precise code diffs, agent reliability, and high recall in large document contexts, making it ideal for agents, IDE tooling, and enterprise knowledge retrieval.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4.1-mini",
        "name": "GPT-4.1 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-04-14",
        "contextLength": 1047576,
        "inputPer1M": 0.4,
        "outputPer1M": 1.6,
        "summary": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost.",
        "description": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard instruction evals, 35.8% on MultiChallenge, and 84.1% on IFEval. Mini also shows strong coding ability (e.g., 31.6% on Aider’s polyglot diff benchmark) and vision understanding, making it suitable for interactive applications with tight performance constraints.",
        "bestFor": [
            "Code generation",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4.1-nano",
        "name": "GPT-4.1 Nano",
        "provider": "OpenAI",
        "releasedAt": "2025-04-14",
        "contextLength": 1047576,
        "inputPer1M": 0.1,
        "outputPer1M": 0.4,
        "summary": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series.",
        "description": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million token context window, and scores 80.1% on MMLU, 50.3% on GPQA, and 9.8% on Aider polyglot coding – even higher than GPT‑4o mini. It’s ideal for tasks like classification or autocompletion.",
        "bestFor": [
            "Code generation",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "image",
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "eleutherai/llemma_7b",
        "name": "Llemma 7b",
        "provider": "EleutherAI",
        "releasedAt": "2025-04-14",
        "contextLength": 8192,
        "inputPer1M": 0.8,
        "outputPer1M": 1.2,
        "summary": "Llemma 7B is a language model for mathematics.",
        "description": "Llemma 7B is a language model for mathematics. It was initialized with Code Llama 7B weights, and trained on the Proof-Pile-2 for 200B tokens. Llemma models are particularly strong at chain-of-thought mathematical reasoning and using computational tools for mathematics, such as Python and formal theorem provers.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "x-ai/grok-3-beta",
        "name": "Grok 3 Beta",
        "provider": "xAI",
        "releasedAt": "2025-04-09",
        "contextLength": 131072,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Grok 3 is the latest model from xAI.",
        "description": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in finance, healthcare, law, and science. Excels in structured tasks and benchmarks like GPQA, LCB, and MMLU-Pro where it outperforms Grok 3 Mini even on high thinking. Note: That there are two xAI endpoints for this model. By default when using this model we will always route you to the base endpoint. If you want the fast endpoint you can add `provider: { sort: throughput}`, to sort by throughput instead.",
        "bestFor": [
            "Code generation",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "x-ai/grok-3-mini-beta",
        "name": "Grok 3 Mini Beta",
        "provider": "xAI",
        "releasedAt": "2025-04-09",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.5,
        "summary": "Grok 3 Mini is a lightweight, smaller thinking model.",
        "description": "Grok 3 Mini is a lightweight, smaller thinking model. Unlike traditional models that generate answers immediately, Grok 3 Mini thinks before responding. It’s ideal for reasoning-heavy tasks that don’t demand extensive domain knowledge, and shines in math-specific and quantitative use cases, such as solving challenging puzzles or math problems. Transparent \"thinking\" traces accessible. Defaults to low reasoning, can boost with setting `reasoning: { effort: \"high\" }` Note: That there are two xAI endpoints for this model. By default when using this model we will always route you to the base endpoint. If you want the fast endpoint you can add `provider: { sort: throughput}`, to sort by throughput instead.",
        "bestFor": [
            "Advanced reasoning",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-4-maverick",
        "name": "Llama 4 Maverick",
        "provider": "Meta",
        "releasedAt": "2025-04-05",
        "contextLength": 1048576,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward pass (400B to...",
        "description": "Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward pass (400B total). It supports multilingual text and image input, and produces multilingual text and code output across 12 supported languages. Optimized for vision-language tasks, Maverick is instruction-tuned for assistant-like behavior, image reasoning, and general-purpose multimodal interaction. Maverick features early fusion for native multimodality and a 1 million token context window. It was trained on a curated mixture of public, licensed, and Meta-platform data, covering ~22 trillion tokens, with a knowledge cutoff in August 2024. Released on April 5, 2025 under the Llama 4 Community License, Maverick is suited for research and commercial applications requiring advanced multimodal understanding and high model throughput.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "meta-llama/llama-4-scout",
        "name": "Llama 4 Scout",
        "provider": "Meta",
        "releasedAt": "2025-04-05",
        "contextLength": 327680,
        "inputPer1M": 0.08,
        "outputPer1M": 0.3,
        "summary": "Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B.",
        "description": "Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B. It supports native multimodal input (text and image) and multilingual output (text and code) across 12 supported languages. Designed for assistant-style interaction and visual reasoning, Scout uses 16 experts per forward pass and features a context length of 10 million tokens, with a training corpus of ~40 trillion tokens. Built for high efficiency and local or commercial deployment, Llama 4 Scout incorporates early fusion for seamless modality integration. It is instruction-tuned for use in multilingual chat, captioning, and image understanding tasks. Released under the Llama 4 Community License, it was last trained on data up to August 2024 and launched publicly on April 5, 2025.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "deepseek/deepseek-chat-v3-0324",
        "name": "DeepSeek V3 0324",
        "provider": "DeepSeek",
        "releasedAt": "2025-03-24",
        "contextLength": 163840,
        "inputPer1M": 0.2,
        "outputPer1M": 0.77,
        "summary": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team.",
        "description": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs really well on a variety of tasks.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs"
        ]
    },
    {
        "id": "qwen/qwen2.5-vl-32b-instruct",
        "name": "Qwen2.5 VL 32B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-03-24",
        "contextLength": 128000,
        "inputPer1M": 0.2,
        "outputPer1M": 0.6,
        "summary": "Qwen2.5-VL-32B is a multimodal vision-language model fine-tuned through reinforcement learning for enhanced mathematical reasoning, structured outputs, and visual problem-solving capabilities.",
        "description": "Qwen2.5-VL-32B is a multimodal vision-language model fine-tuned through reinforcement learning for enhanced mathematical reasoning, structured outputs, and visual problem-solving capabilities. It excels at visual analysis tasks, including object recognition, textual interpretation within images, and precise event localization in extended videos. Qwen2.5-VL-32B demonstrates state-of-the-art performance across multimodal benchmarks such as MMMU, MathVista, and VideoMME, while maintaining strong reasoning and clarity in text-based tasks like MMLU, mathematical problem-solving, and code generation.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/o1-pro",
        "name": "o1-pro",
        "provider": "OpenAI",
        "releasedAt": "2025-03-19",
        "contextLength": 200000,
        "inputPer1M": 150,
        "outputPer1M": 600,
        "summary": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning.",
        "description": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide consistently better answers.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs"
        ]
    },
    {
        "id": "mistralai/mistral-small-3.1-24b-instruct",
        "name": "Mistral Small 3.1 24B",
        "provider": "Mistral",
        "releasedAt": "2025-03-17",
        "contextLength": 128000,
        "inputPer1M": 0.35,
        "outputPer1M": 0.56,
        "summary": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities.",
        "description": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning and vision tasks, including image analysis, programming, mathematical reasoning, and multilingual support across dozens of languages. Equipped with an extensive 128k token context window and optimized for efficient local inference, it supports use cases such as conversational agents, function calling, long-document comprehension, and privacy-sensitive deployments. The updated version is [Mistral Small 3.2](mistralai/mistral-small-3.2-24b-instruct)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-small-3.1-24b-instruct:free",
        "name": "Mistral Small 3.1 24B (free)",
        "provider": "Mistral",
        "releasedAt": "2025-03-17",
        "contextLength": 128000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities.",
        "description": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning and vision tasks, including image analysis, programming, mathematical reasoning, and multilingual support across dozens of languages. Equipped with an extensive 128k token context window and optimized for efficient local inference, it supports use cases such as conversational agents, function calling, long-document comprehension, and privacy-sensitive deployments. The updated version is [Mistral Small 3.2](mistralai/mistral-small-3.2-24b-instruct)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "allenai/olmo-2-0325-32b-instruct",
        "name": "Olmo 2 32B Instruct",
        "provider": "AllenAI",
        "releasedAt": "2025-03-14",
        "contextLength": 128000,
        "inputPer1M": 0.05,
        "outputPer1M": 0.2,
        "summary": "OLMo-2 32B Instruct is a supervised instruction-finetuned variant of the OLMo-2 32B March 2025 base model.",
        "description": "OLMo-2 32B Instruct is a supervised instruction-finetuned variant of the OLMo-2 32B March 2025 base model. It excels in complex reasoning and instruction-following tasks across diverse benchmarks such as GSM8K, MATH, IFEval, and general NLP evaluation. Developed by AI2, OLMo-2 32B is part of an open, research-oriented initiative, trained primarily on English-language datasets to advance the understanding and development of open-source language models.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "cohere/command-a",
        "name": "Command A",
        "provider": "Cohere",
        "releasedAt": "2025-03-13",
        "contextLength": 256000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases.",
        "description": "Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases. Compared to other leading proprietary and open-weights models Command A delivers maximum performance with minimum hardware costs, excelling on business-critical agentic and multilingual tasks.",
        "bestFor": [
            "Code generation",
            "Agent workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3-12b-it",
        "name": "Gemma 3 12B",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 131072,
        "inputPer1M": 0.04,
        "outputPer1M": 0.13,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs.",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after [Gemma 3 27B](google/gemma-3-27b-it)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k"
        ]
    },
    {
        "id": "google/gemma-3-12b-it:free",
        "name": "Gemma 3 12B (free)",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs.",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 12B is the second largest in the family of Gemma 3 models after [Gemma 3 27B](google/gemma-3-27b-it)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "seed",
            "stop",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3-4b-it",
        "name": "Gemma 3 4B",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 131072,
        "inputPer1M": 0.04,
        "outputPer1M": 0.08,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs.",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3-4b-it:free",
        "name": "Gemma 3 4B (free)",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs.",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-3-27b-it",
        "name": "Gemma 3 27B",
        "provider": "Google",
        "releasedAt": "2025-03-12",
        "contextLength": 131072,
        "inputPer1M": 0.08,
        "outputPer1M": 0.16,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs.",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to [Gemma 2](google/gemma-2-27b-it)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k"
        ]
    },
    {
        "id": "google/gemma-3-27b-it:free",
        "name": "Gemma 3 27B (free)",
        "provider": "Google",
        "releasedAt": "2025-03-12",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs.",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabilities, including structured outputs and function calling. Gemma 3 27B is Google's latest open source model, successor to [Gemma 2](google/gemma-2-27b-it)",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4o-search-preview",
        "name": "GPT-4o Search Preview",
        "provider": "OpenAI",
        "releasedAt": "2025-03-12",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "GPT-4o Search Previewis a specialized model for web search in Chat Completions.",
        "description": "GPT-4o Search Previewis a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "structured_outputs",
            "web_search_options"
        ]
    },
    {
        "id": "openai/gpt-4o-mini-search-preview",
        "name": "GPT-4o-mini Search Preview",
        "provider": "OpenAI",
        "releasedAt": "2025-03-12",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "GPT-4o mini Search Preview is a specialized model for web search in Chat Completions.",
        "description": "GPT-4o mini Search Preview is a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "structured_outputs",
            "web_search_options"
        ]
    },
    {
        "id": "thedrummer/skyfall-36b-v2",
        "name": "Skyfall 36B V2",
        "provider": "TheDrummer",
        "releasedAt": "2025-03-10",
        "contextLength": 32768,
        "inputPer1M": 0.55,
        "outputPer1M": 0.8,
        "summary": "Skyfall 36B v2 is an enhanced iteration of Mistral Small 2501, specifically fine-tuned for improved creativity, nuanced writing, role-playing, and coherent storytelling.",
        "description": "Skyfall 36B v2 is an enhanced iteration of Mistral Small 2501, specifically fine-tuned for improved creativity, nuanced writing, role-playing, and coherent storytelling.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "perplexity/sonar-deep-research",
        "name": "Sonar Deep Research",
        "provider": "Perplexity",
        "releasedAt": "2025-03-07",
        "contextLength": 128000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "Sonar Deep Research is a research-focused model designed for multi-step retrieval, synthesis, and reasoning across complex topics.",
        "description": "Sonar Deep Research is a research-focused model designed for multi-step retrieval, synthesis, and reasoning across complex topics. It autonomously searches, reads, and evaluates sources, refining its approach as it gathers information. This enables comprehensive report generation across domains like finance, technology, health, and current events. Notes on Pricing ([Source](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-deep-research)) - Input tokens comprise of Prompt tokens (user prompt) + Citation tokens (these are processed tokens from running searches) - Deep Research runs multiple searches to conduct exhaustive research. Searches are priced at $5/1000 searches. A request that does 30 searches will cost $0.15 in this step. - Reasoning is a distinct step in Deep Research since it does extensive automated reasoning through all the material it gathers during its research phase. Reasoning tokens here are a bit different than the CoTs in the answer - these are tokens that we use to reason through the research material prior to generating the outputs via the CoTs. Reasoning tokens are priced at $3/1M tokens",
        "bestFor": [
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ]
    },
    {
        "id": "perplexity/sonar-pro",
        "name": "Sonar Pro",
        "provider": "Perplexity",
        "releasedAt": "2025-03-07",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Note: Sonar Pro pricing includes Perplexity search pricing.",
        "description": "Note: Sonar Pro pricing includes Perplexity search pricing. See [details here](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-reasoning-pro-and-sonar-pro) For enterprises seeking more advanced capabilities, the Sonar Pro API can handle in-depth, multi-step queries with added extensibility, like double the number of citations per search as Sonar on average. Plus, with a larger context window, it can handle longer and more nuanced searches and follow-up questions.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ]
    },
    {
        "id": "perplexity/sonar-reasoning-pro",
        "name": "Sonar Reasoning Pro",
        "provider": "Perplexity",
        "releasedAt": "2025-03-07",
        "contextLength": 128000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "Note: Sonar Pro pricing includes Perplexity search pricing.",
        "description": "Note: Sonar Pro pricing includes Perplexity search pricing. See [details here](https://docs.perplexity.ai/guides/pricing#detailed-pricing-breakdown-for-sonar-reasoning-pro-and-sonar-pro) Sonar Reasoning Pro is a premier reasoning model powered by DeepSeek R1 with Chain of Thought (CoT). Designed for advanced use cases, it supports in-depth, multi-step queries with a larger context window and can surface more citations per search, enabling more comprehensive and extensible responses.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ]
    },
    {
        "id": "qwen/qwq-32b",
        "name": "QwQ 32B",
        "provider": "Qwen",
        "releasedAt": "2025-03-05",
        "contextLength": 131072,
        "inputPer1M": 0.15,
        "outputPer1M": 0.58,
        "summary": "QwQ is the reasoning model of the Qwen series.",
        "description": "QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks, especially hard problems. QwQ-32B is the medium-sized reasoning model, which is capable of achieving competitive performance against state-of-the-art reasoning models, e.g., DeepSeek-R1, o1-mini.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "reasoning",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "google/gemini-2.0-flash-lite-001",
        "name": "Gemini 2.0 Flash Lite",
        "provider": "Google",
        "releasedAt": "2025-02-25",
        "contextLength": 1048576,
        "inputPer1M": 0.075,
        "outputPer1M": 0.3,
        "summary": "Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/googl...",
        "description": "Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5), all at extremely economical token prices.",
        "bestFor": [
            "Low-latency assistants"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "anthropic/claude-3.7-sonnet",
        "name": "Claude 3.7 Sonnet",
        "provider": "Anthropic",
        "releasedAt": "2025-02-24",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities.",
        "description": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. Claude 3.7 Sonnet maintains performance parity with its predecessor in standard mode while offering an extended reasoning mode for enhanced accuracy in math, coding, and instruction-following tasks. Read more at the [blog post here](https://www.anthropic.com/news/claude-3-7-sonnet)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "anthropic/claude-3.7-sonnet:thinking",
        "name": "Claude 3.7 Sonnet (thinking)",
        "provider": "Anthropic",
        "releasedAt": "2025-02-24",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities.",
        "description": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and extended, step-by-step processing for complex tasks. The model demonstrates notable improvements in coding, particularly in front-end development and full-stack updates, and excels in agentic workflows, where it can autonomously navigate multi-step processes. Claude 3.7 Sonnet maintains performance parity with its predecessor in standard mode while offering an extended reasoning mode for enhanced accuracy in math, coding, and instruction-following tasks. Read more at the [blog post here](https://www.anthropic.com/news/claude-3-7-sonnet)",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-saba",
        "name": "Saba",
        "provider": "Mistral",
        "releasedAt": "2025-02-17",
        "contextLength": 32768,
        "inputPer1M": 0.2,
        "outputPer1M": 0.6,
        "summary": "Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance.",
        "description": "Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance. Trained on curated regional datasets, it supports multiple Indian-origin languages—including Tamil and Malayalam—alongside Arabic. This makes it a versatile option for a range of regional and multilingual applications. Read more at the blog post [here](https://mistral.ai/en/news/mistral-saba)",
        "bestFor": [
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-guard-3-8b",
        "name": "Llama Guard 3 8B",
        "provider": "Meta Llama",
        "releasedAt": "2025-02-12",
        "contextLength": 131072,
        "inputPer1M": 0.02,
        "outputPer1M": 0.06,
        "summary": "Llama Guard 3 is a Llama-3.1-8B pretrained model, fine-tuned for content safety classification.",
        "description": "Llama Guard 3 is a Llama-3.1-8B pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification) and in LLM responses (response classification). It acts as an LLM – it generates text in its output that indicates whether a given prompt or response is safe or unsafe, and if unsafe, it also lists the content categories violated. Llama Guard 3 was aligned to safeguard against the MLCommons standardized hazards taxonomy and designed to support Llama 3.1 capabilities. Specifically, it provides content moderation in 8 languages, and was optimized to support safety and security for search and code interpreter tool calls.",
        "bestFor": [
            "Code generation",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/o3-mini-high",
        "name": "o3 Mini High",
        "provider": "OpenAI",
        "releasedAt": "2025-02-12",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high.",
        "description": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. The model features three adjustable reasoning effort levels and supports key developer capabilities including function calling, structured outputs, and streaming, though it does not include vision processing capabilities. The model demonstrates significant improvements over its predecessor, with expert testers preferring its responses 56% of the time and noting a 39% reduction in major errors on complex questions. With medium reasoning effort settings, o3-mini matches the performance of the larger o1 model on challenging reasoning evaluations like AIME and GPQA, while maintaining lower latency and cost.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+file->text",
        "inputModalities": [
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "google/gemini-2.0-flash-001",
        "name": "Gemini 2.0 Flash",
        "provider": "Google",
        "releasedAt": "2025-02-05",
        "contextLength": 1048576,
        "inputPer1M": 0.1,
        "outputPer1M": 0.4,
        "summary": "Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gem...",
        "description": "Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemini-pro-1.5). It introduces notable enhancements in multimodal understanding, coding capabilities, complex instruction following, and function calling. These advancements come together to deliver more seamless and robust agentic experiences.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file+audio+video->text",
        "inputModalities": [
            "text",
            "image",
            "file",
            "audio",
            "video"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-vl-plus",
        "name": "Qwen VL Plus",
        "provider": "Qwen",
        "releasedAt": "2025-02-05",
        "contextLength": 131072,
        "inputPer1M": 0.1365,
        "outputPer1M": 0.4095,
        "summary": "Qwen's Enhanced Large Visual Language Model.",
        "description": "Qwen's Enhanced Large Visual Language Model. Significantly upgraded for detailed recognition capabilities and text recognition abilities, supporting ultra-high pixel resolutions up to millions of pixels and extreme aspect ratios for image input. It delivers significant performance across a broad range of visual tasks.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "aion-labs/aion-1.0",
        "name": "Aion-1.0",
        "provider": "AionLabs",
        "releasedAt": "2025-02-04",
        "contextLength": 131072,
        "inputPer1M": 4,
        "outputPer1M": 8,
        "summary": "Aion-1.0 is a multi-model system designed for high performance across various tasks, including reasoning and coding.",
        "description": "Aion-1.0 is a multi-model system designed for high performance across various tasks, including reasoning and coding. It is built on DeepSeek-R1, augmented with additional models and techniques such as Tree of Thoughts (ToT) and Mixture of Experts (MoE). It is Aion Lab's most powerful reasoning model.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "aion-labs/aion-1.0-mini",
        "name": "Aion-1.0-Mini",
        "provider": "AionLabs",
        "releasedAt": "2025-02-04",
        "contextLength": 131072,
        "inputPer1M": 0.7,
        "outputPer1M": 1.4,
        "summary": "Aion-1.0-Mini 32B parameter model is a distilled version of the DeepSeek-R1 model, designed for strong performance in reasoning domains such as mathematics, coding, and logic.",
        "description": "Aion-1.0-Mini 32B parameter model is a distilled version of the DeepSeek-R1 model, designed for strong performance in reasoning domains such as mathematics, coding, and logic. It is a modified variant of a FuseAI model that outperforms R1-Distill-Qwen-32B and R1-Distill-Llama-70B, with benchmark results available on its [Hugging Face page](https://huggingface.co/FuseAI/FuseO1-DeepSeekR1-QwQ-SkyT1-32B-Preview), independently replicated for verification.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "aion-labs/aion-rp-llama-3.1-8b",
        "name": "Aion-RP 1.0 (8B)",
        "provider": "AionLabs",
        "releasedAt": "2025-02-04",
        "contextLength": 32768,
        "inputPer1M": 0.8,
        "outputPer1M": 1.6,
        "summary": "Aion-RP-Llama-3.1-8B ranks the highest in the character evaluation portion of the RPBench-Auto benchmark, a roleplaying-specific variant of Arena-Hard-Auto, where LLMs evaluate each other’s responses.",
        "description": "Aion-RP-Llama-3.1-8B ranks the highest in the character evaluation portion of the RPBench-Auto benchmark, a roleplaying-specific variant of Arena-Hard-Auto, where LLMs evaluate each other’s responses. It is a fine-tuned base model rather than an instruct model, designed to produce more natural and varied writing.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-vl-max",
        "name": "Qwen VL Max",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 131072,
        "inputPer1M": 0.52,
        "outputPer1M": 2.08,
        "summary": "Qwen VL Max is a visual understanding model with 7500 tokens context length.",
        "description": "Qwen VL Max is a visual understanding model with 7500 tokens context length. It excels in delivering optimal performance for a broader spectrum of complex tasks.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-max",
        "name": "Qwen-Max",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 32768,
        "inputPer1M": 1.04,
        "outputPer1M": 4.16,
        "summary": "Qwen-Max, based on Qwen2.5, provides the best inference performance among [Qwen models](/qwen), especially for complex multi-step tasks.",
        "description": "Qwen-Max, based on Qwen2.5, provides the best inference performance among [Qwen models](/qwen), especially for complex multi-step tasks. It's a large-scale MoE model that has been pretrained on over 20 trillion tokens and further post-trained with curated Supervised Fine-Tuning (SFT) and Reinforcement Learning from Human Feedback (RLHF) methodologies. The parameter count is unknown.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-plus",
        "name": "Qwen-Plus",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 0.78,
        "summary": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
        "description": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
        "bestFor": [
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-turbo",
        "name": "Qwen-Turbo",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 131072,
        "inputPer1M": 0.0325,
        "outputPer1M": 0.13,
        "summary": "Qwen-Turbo, based on Qwen2.5, is a 1M context model that provides fast speed and low cost, suitable for simple tasks.",
        "description": "Qwen-Turbo, based on Qwen2.5, is a 1M context model that provides fast speed and low cost, suitable for simple tasks.",
        "bestFor": [
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen2.5-vl-72b-instruct",
        "name": "Qwen2.5 VL 72B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 32768,
        "inputPer1M": 0.8,
        "outputPer1M": 0.8,
        "summary": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects.",
        "description": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/o3-mini",
        "name": "o3 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-01-31",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding.",
        "description": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. This model supports the `reasoning_effort` parameter, which can be set to \"high\", \"medium\", or \"low\" to control the thinking time of the model. The default is \"medium\". model catalog also offers the model slug `openai/o3-mini-high` to default the parameter to \"high\". The model features three adjustable reasoning effort levels and supports key developer capabilities including function calling, structured outputs, and streaming, though it does not include vision processing capabilities. The model demonstrates significant improvements over its predecessor, with expert testers preferring its responses 56% of the time and noting a 39% reduction in major errors on complex questions. With medium reasoning effort settings, o3-mini matches the performance of the larger o1 model on challenging reasoning evaluations like AIME and GPQA, while maintaining lower latency and cost.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+file->text",
        "inputModalities": [
            "text",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mistral-small-24b-instruct-2501",
        "name": "Mistral Small 3",
        "provider": "Mistral",
        "releasedAt": "2025-01-30",
        "contextLength": 32768,
        "inputPer1M": 0.05,
        "outputPer1M": 0.08,
        "summary": "Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks.",
        "description": "Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks. Released under the Apache 2.0 license, it features both pre-trained and instruction-tuned versions designed for efficient local deployment. The model achieves 81% accuracy on the MMLU benchmark and performs competitively with larger models like Llama 3.3 70B and Qwen 32B, while operating at three times the speed on equivalent hardware. [Read the blog post about the model here.](https://mistral.ai/news/mistral-small-3/)",
        "bestFor": [
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "deepseek/deepseek-r1-distill-qwen-32b",
        "name": "R1 Distill Qwen 32B",
        "provider": "DeepSeek",
        "releasedAt": "2025-01-29",
        "contextLength": 32768,
        "inputPer1M": 0.29,
        "outputPer1M": 0.29,
        "summary": "DeepSeek R1 Distill Qwen 32B is a distilled large language model based on [Qwen 2.5 32B](https://huggingface.co/Qwen/Qwen2.5-32B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1).",
        "description": "DeepSeek R1 Distill Qwen 32B is a distilled large language model based on [Qwen 2.5 32B](https://huggingface.co/Qwen/Qwen2.5-32B), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new state-of-the-art results for dense models.\\n\\nOther benchmark results include:\\n\\n- AIME 2024 pass@1: 72.6\\n- MATH-500 pass@1: 94.3\\n- CodeForces Rating: 1691\\n\\nThe model leverages fine-tuning from DeepSeek R1's outputs, enabling competitive performance comparable to larger frontier models.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "perplexity/sonar",
        "name": "Sonar",
        "provider": "Perplexity",
        "releasedAt": "2025-01-27",
        "contextLength": 127072,
        "inputPer1M": 1,
        "outputPer1M": 1,
        "summary": "Sonar is lightweight, affordable, fast, and simple to use — now featuring citations and the ability to customize sources.",
        "description": "Sonar is lightweight, affordable, fast, and simple to use — now featuring citations and the ability to customize sources. It is designed for companies seeking to integrate lightweight question-and-answer features optimized for speed.",
        "bestFor": [
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ]
    },
    {
        "id": "deepseek/deepseek-r1-distill-llama-70b",
        "name": "R1 Distill Llama 70B",
        "provider": "DeepSeek",
        "releasedAt": "2025-01-23",
        "contextLength": 131072,
        "inputPer1M": 0.7,
        "outputPer1M": 0.8,
        "summary": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1).",
        "description": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanced distillation techniques to achieve high performance across multiple benchmarks, including: - AIME 2024 pass@1: 70.0 - MATH-500 pass@1: 94.5 - CodeForces Rating: 1633 The model leverages fine-tuning from DeepSeek R1's outputs, enabling competitive performance comparable to larger frontier models.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "deepseek/deepseek-r1",
        "name": "R1",
        "provider": "DeepSeek",
        "releasedAt": "2025-01-20",
        "contextLength": 64000,
        "inputPer1M": 0.7,
        "outputPer1M": 2.5,
        "summary": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens.",
        "description": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass. Fully open-source model & [technical report](https://api-docs.deepseek.com/news/news250120). MIT licensed: Distill & commercialize freely!",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "include_reasoning",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "minimax/minimax-01",
        "name": "MiniMax-01",
        "provider": "MiniMax",
        "releasedAt": "2025-01-15",
        "contextLength": 1000192,
        "inputPer1M": 0.2,
        "outputPer1M": 1.1,
        "summary": "MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding.",
        "description": "MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding. It has 456 billion parameters, with 45.9 billion parameters activated per inference, and can handle a context of up to 4 million tokens. The text model adopts a hybrid architecture that combines Lightning Attention, Softmax Attention, and Mixture-of-Experts (MoE). The image model adopts the “ViT-MLP-LLM” framework and is trained on top of the text model. To read more about the release, see: https://www.minimaxi.com/en/news/minimax-01-series-2",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "microsoft/phi-4",
        "name": "Phi 4",
        "provider": "Microsoft",
        "releasedAt": "2025-01-10",
        "contextLength": 16384,
        "inputPer1M": 0.065,
        "outputPer1M": 0.14,
        "summary": "[Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed.",
        "description": "[Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed. At 14 billion parameters, it was trained on a mix of high-quality synthetic datasets, data from curated websites, and academic materials. It has undergone careful improvement to follow instructions accurately and maintain strong safety standards. It works best with English language inputs. For more information, please see [Phi-4 Technical Report](https://arxiv.org/pdf/2412.08905)",
        "bestFor": [
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k"
        ]
    },
    {
        "id": "sao10k/l3.1-70b-hanami-x1",
        "name": "Llama 3.1 70B Hanami x1",
        "provider": "Sao10K",
        "releasedAt": "2025-01-08",
        "contextLength": 16000,
        "inputPer1M": 3,
        "outputPer1M": 3,
        "summary": "This is [Sao10K](/sao10k)'s experiment over [Euryale v2.2](/sao10k/l3.1-euryale-70b).",
        "description": "This is [Sao10K](/sao10k)'s experiment over [Euryale v2.2](/sao10k/l3.1-euryale-70b).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "deepseek/deepseek-chat",
        "name": "DeepSeek V3",
        "provider": "DeepSeek",
        "releasedAt": "2024-12-26",
        "contextLength": 163840,
        "inputPer1M": 0.32,
        "outputPer1M": 0.89,
        "summary": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions.",
        "description": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations reveal that the model outperforms other open-source models and rivals leading closed-source models. For model details, please visit [the DeepSeek-V3 repo](https://github.com/deepseek-ai/DeepSeek-V3) for more information, or see the [launch announcement](https://api-docs.deepseek.com/news/news1226).",
        "bestFor": [
            "Code generation"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "sao10k/l3.3-euryale-70b",
        "name": "Llama 3.3 Euryale 70B",
        "provider": "Sao10K",
        "releasedAt": "2024-12-18",
        "contextLength": 131072,
        "inputPer1M": 0.65,
        "outputPer1M": 0.75,
        "summary": "Euryale L3.3 70B is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).",
        "description": "Euryale L3.3 70B is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). It is the successor of [Euryale L3 70B v2.2](/models/sao10k/l3-euryale-70b).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k"
        ]
    },
    {
        "id": "openai/o1",
        "name": "o1",
        "provider": "OpenAI",
        "releasedAt": "2024-12-17",
        "contextLength": 200000,
        "inputPer1M": 15,
        "outputPer1M": 60,
        "summary": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding.",
        "description": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason using chain of thought. The o1 models are optimized for math, science, programming, and other STEM-related tasks. They consistently exhibit PhD-level accuracy on benchmarks in physics, chemistry, and biology. Learn more in the [launch announcement](https://openai.com/o1).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "cohere/command-r7b-12-2024",
        "name": "Command R7B (12-2024)",
        "provider": "Cohere",
        "releasedAt": "2024-12-14",
        "contextLength": 128000,
        "inputPer1M": 0.0375,
        "outputPer1M": 0.15,
        "summary": "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024.",
        "description": "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning and multiple steps. Use of this model is subject to Cohere's [Usage Policy](https://docs.cohere.com/docs/usage-policy) and [SaaS Agreement](https://cohere.com/saas-agreement).",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-3.3-70b-instruct",
        "name": "Llama 3.3 70B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-12-06",
        "contextLength": 131072,
        "inputPer1M": 0.1,
        "outputPer1M": 0.32,
        "summary": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out).",
        "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks. Supported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai. [Model Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md)",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "meta-llama/llama-3.3-70b-instruct:free",
        "name": "Llama 3.3 70B Instruct (free)",
        "provider": "Meta",
        "releasedAt": "2024-12-06",
        "contextLength": 65536,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out).",
        "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperforms many of the available open source and closed chat models on common industry benchmarks. Supported languages: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai. [Model Card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md)",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "amazon/nova-lite-v1",
        "name": "Nova Lite 1.0",
        "provider": "Amazon",
        "releasedAt": "2024-12-05",
        "contextLength": 300000,
        "inputPer1M": 0.06,
        "outputPer1M": 0.24,
        "summary": "Amazon Nova Lite 1.0 is a very low-cost multimodal model from Amazon that focused on fast processing of image, video, and text inputs to generate text output.",
        "description": "Amazon Nova Lite 1.0 is a very low-cost multimodal model from Amazon that focused on fast processing of image, video, and text inputs to generate text output. Amazon Nova Lite can handle real-time customer interactions, document analysis, and visual question-answering tasks with high accuracy. With an input context of 300K tokens, it can analyze multiple images or up to 30 minutes of video in a single input.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "amazon/nova-micro-v1",
        "name": "Nova Micro 1.0",
        "provider": "Amazon",
        "releasedAt": "2024-12-05",
        "contextLength": 128000,
        "inputPer1M": 0.035,
        "outputPer1M": 0.14,
        "summary": "Amazon Nova Micro 1.0 is a text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost.",
        "description": "Amazon Nova Micro 1.0 is a text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost. With a context length of 128K tokens and optimized for speed and cost, Amazon Nova Micro excels at tasks such as text summarization, translation, content classification, interactive chat, and brainstorming. It has simple mathematical reasoning and coding abilities.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "amazon/nova-pro-v1",
        "name": "Nova Pro 1.0",
        "provider": "Amazon",
        "releasedAt": "2024-12-05",
        "contextLength": 300000,
        "inputPer1M": 0.8,
        "outputPer1M": 3.2,
        "summary": "Amazon Nova Pro 1.0 is a capable multimodal model from Amazon focused on providing a combination of accuracy, speed, and cost for a wide range of tasks.",
        "description": "Amazon Nova Pro 1.0 is a capable multimodal model from Amazon focused on providing a combination of accuracy, speed, and cost for a wide range of tasks. As of December 2024, it achieves state-of-the-art performance on key benchmarks including visual question answering (TextVQA) and video understanding (VATEX). Amazon Nova Pro demonstrates strong capabilities in processing both visual and textual information and at analyzing financial documents. **NOTE**: Video input is not supported at this time.",
        "bestFor": [
            "Multimodal workflows",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4o-2024-11-20",
        "name": "GPT-4o (2024-11-20)",
        "provider": "OpenAI",
        "releasedAt": "2024-11-20",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability.",
        "description": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded files, providing deeper insights & more thorough responses. GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities.",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mistral-large-2407",
        "name": "Mistral Large 2407",
        "provider": "Mistralai",
        "releasedAt": "2024-11-19",
        "contextLength": 131072,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407).",
        "description": "This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/). It supports dozens of languages including French, German, Spanish, Italian, Portuguese, Arabic, Hindi, Russian, Chinese, Japanese, and Korean, along with 80+ coding languages including Python, Java, C, C++, JavaScript, and Bash. Its long context window allows precise information recall from large documents.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-large-2411",
        "name": "Mistral Large 2411",
        "provider": "Mistralai",
        "releasedAt": "2024-11-19",
        "contextLength": 131072,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411) It provides a significant upgrade on the previous [Mistral La...",
        "description": "Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411) It provides a significant upgrade on the previous [Mistral Large 24.07](/mistralai/mistral-large-2407), with notable improvements in long context understanding, a new system prompt, and more accurate function calling.",
        "bestFor": [
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "mistralai/pixtral-large-2411",
        "name": "Pixtral Large 2411",
        "provider": "Mistral",
        "releasedAt": "2024-11-19",
        "contextLength": 131072,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411).",
        "description": "Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411). The model is able to understand documents, charts and natural images. The model is available under the Mistral Research License (MRL) for research and educational use, and the Mistral Commercial License for experimentation, testing, and production for commercial purposes.",
        "bestFor": [
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-2.5-coder-32b-instruct",
        "name": "Qwen2.5 Coder 32B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-11-11",
        "contextLength": 32768,
        "inputPer1M": 0.66,
        "outputPer1M": 1,
        "summary": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen).",
        "description": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5: - Significantly improvements in **code generation**, **code reasoning** and **code fixing**. - A more comprehensive foundation for real-world applications such as **Code Agents**. Not only enhancing coding capabilities but also maintaining its strengths in mathematics and general competencies. To read more about its evaluation results, check out [Qwen 2.5 Coder's blog](https://qwenlm.github.io/blog/qwen2.5-coder-family/).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "thedrummer/unslopnemo-12b",
        "name": "UnslopNemo 12B",
        "provider": "TheDrummer",
        "releasedAt": "2024-11-08",
        "contextLength": 32768,
        "inputPer1M": 0.4,
        "outputPer1M": 0.4,
        "summary": "UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.",
        "description": "UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "anthropic/claude-3.5-haiku",
        "name": "Claude 3.5 Haiku",
        "provider": "Anthropic",
        "releasedAt": "2024-11-04",
        "contextLength": 200000,
        "inputPer1M": 0.8,
        "outputPer1M": 4,
        "summary": "Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use.",
        "description": "Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use. Engineered to excel in real-time applications, it delivers quick response times that are essential for dynamic tasks such as chat interactions and immediate coding suggestions. This makes it highly suitable for environments that demand both speed and precision, such as software development, customer service bots, and data management systems. This model is currently pointing to [Claude 3.5 Haiku (2024-10-22)](/anthropic/claude-3-5-haiku-20241022).",
        "bestFor": [
            "Code generation",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "anthropic/claude-3.5-sonnet",
        "name": "Claude 3.5 Sonnet",
        "provider": "Anthropic",
        "releasedAt": "2024-10-22",
        "contextLength": 200000,
        "inputPer1M": 6,
        "outputPer1M": 30,
        "summary": "New Claude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices.",
        "description": "New Claude 3.5 Sonnet delivers better-than-Opus capabilities, faster-than-Sonnet speeds, at the same Sonnet prices. Sonnet is particularly good at: - Coding: Scores ~49% on SWE-Bench Verified, higher than the last best score, and without any fancy prompt scaffolding - Data science: Augments human data science expertise; navigates unstructured data while using multiple tools for insights - Visual processing: excelling at interpreting charts, graphs, and images, accurately transcribing text to derive insights beyond just the text alone - Agentic tasks: exceptional tool use, making it great at agentic tasks (i.e. complex, multi-step problem solving tasks that require engaging with other systems) #multimodal",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "anthracite-org/magnum-v4-72b",
        "name": "Magnum v4 72B",
        "provider": "Anthracite Org",
        "releasedAt": "2024-10-22",
        "contextLength": 16384,
        "inputPer1M": 3,
        "outputPer1M": 5,
        "summary": "This is a series of models designed to replicate the prose quality of the Claude 3 models, specifically Sonnet(https://model catalog.ai/anthropic/claude-3.5-sonnet) and Opus(https://model catalog.ai/anthropic/claude-3...",
        "description": "This is a series of models designed to replicate the prose quality of the Claude 3 models, specifically Sonnet(https://model catalog.ai/anthropic/claude-3.5-sonnet) and Opus(https://model catalog.ai/anthropic/claude-3-opus). The model is fine-tuned on top of [Qwen2.5 72B](https://model catalog.ai/qwen/qwen-2.5-72b-instruct).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_a"
        ]
    },
    {
        "id": "qwen/qwen-2.5-7b-instruct",
        "name": "Qwen2.5 7B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-10-16",
        "contextLength": 32768,
        "inputPer1M": 0.04,
        "outputPer1M": 0.1,
        "summary": "Qwen2.5 7B is the latest series of Qwen large language models.",
        "description": "Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and mathematics, thanks to our specialized expert models in these domains. - Significant improvements in instruction following, generating long texts (over 8K tokens), understanding structured data (e.g, tables), and generating structured outputs especially JSON. More resilient to the diversity of system prompts, enhancing role-play implementation and condition-setting for chatbots. - Long-context Support up to 128K tokens and can generate up to 8K tokens. - Multilingual support for over 29 languages, including Chinese, English, French, Spanish, Portuguese, German, Italian, Russian, Japanese, Korean, Vietnamese, Thai, Arabic, and more. Usage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "nvidia/llama-3.1-nemotron-70b-instruct",
        "name": "Llama 3.1 Nemotron 70B Instruct",
        "provider": "NVIDIA",
        "releasedAt": "2024-10-15",
        "contextLength": 131072,
        "inputPer1M": 1.2,
        "outputPer1M": 1.2,
        "summary": "NVIDIA's Llama 3.1 Nemotron 70B is a language model designed for generating precise and useful responses.",
        "description": "NVIDIA's Llama 3.1 Nemotron 70B is a language model designed for generating precise and useful responses. Leveraging [Llama 3.1 70B](/models/meta-llama/llama-3.1-70b-instruct) architecture and Reinforcement Learning from Human Feedback (RLHF), it excels in automatic alignment benchmarks. This model is tailored for applications requiring high accuracy in helpfulness and response generation, suitable for diverse user queries across multiple domains. Usage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "inflection/inflection-3-pi",
        "name": "Inflection 3 Pi",
        "provider": "Inflection",
        "releasedAt": "2024-10-11",
        "contextLength": 8192,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "Inflection 3 Pi powers Inflection's [Pi](https://pi.ai) chatbot, including backstory, emotional intelligence, productivity, and safety.",
        "description": "Inflection 3 Pi powers Inflection's [Pi](https://pi.ai) chatbot, including backstory, emotional intelligence, productivity, and safety. It has access to recent news, and excels in scenarios like customer support and roleplay. Pi has been trained to mirror your tone and style, if you use more emojis, so will Pi! Try experimenting with various prompts and conversation styles.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "inflection/inflection-3-productivity",
        "name": "Inflection 3 Productivity",
        "provider": "Inflection",
        "releasedAt": "2024-10-11",
        "contextLength": 8192,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "Inflection 3 Productivity is optimized for following instructions.",
        "description": "Inflection 3 Productivity is optimized for following instructions. It is better for tasks requiring JSON output or precise adherence to provided guidelines. It has access to recent news. For emotional intelligence similar to Pi, see [Inflect 3 Pi](/inflection/inflection-3-pi) See [Inflection's announcement](https://inflection.ai/blog/enterprise) for more details.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "thedrummer/rocinante-12b",
        "name": "Rocinante 12B",
        "provider": "TheDrummer",
        "releasedAt": "2024-09-30",
        "contextLength": 32768,
        "inputPer1M": 0.17,
        "outputPer1M": 0.43,
        "summary": "Rocinante 12B is designed for engaging storytelling and rich prose.",
        "description": "Rocinante 12B is designed for engaging storytelling and rich prose. Early testers have reported: - Expanded vocabulary with unique and expressive word choices - Enhanced creativity for vivid narratives - Adventure-filled and captivating stories",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "meta-llama/llama-3.2-11b-vision-instruct",
        "name": "Llama 3.2 11B Vision Instruct",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 131072,
        "inputPer1M": 0.049,
        "outputPer1M": 0.049,
        "summary": "Llama 3.2 11B Vision is a multimodal model with 11 billion parameters, designed to handle tasks combining visual and textual data.",
        "description": "Llama 3.2 11B Vision is a multimodal model with 11 billion parameters, designed to handle tasks combining visual and textual data. It excels in tasks such as image captioning and visual question answering, bridging the gap between language generation and visual reasoning. Pre-trained on a massive dataset of image-text pairs, it performs well in complex, high-accuracy image analysis. Its ability to integrate visual understanding with language processing makes it an ideal solution for industries requiring comprehensive visual-linguistic AI applications, such as content creation, AI-driven customer service, and research. Click here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md). Usage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-3.2-1b-instruct",
        "name": "Llama 3.2 1B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 60000,
        "inputPer1M": 0.027,
        "outputPer1M": 0.2,
        "summary": "Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis.",
        "description": "Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis. Its smaller size allows it to operate efficiently in low-resource environments while maintaining strong task performance. Supporting eight core languages and fine-tunable for more, Llama 1.3B is ideal for businesses or developers seeking lightweight yet powerful AI solutions that can operate in diverse multilingual settings without the high computational demand of larger models. Click here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md). Usage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-3.2-3b-instruct",
        "name": "Llama 3.2 3B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 80000,
        "inputPer1M": 0.051,
        "outputPer1M": 0.34,
        "summary": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization.",
        "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it supports eight languages, including English, Spanish, and Hindi, and is adaptable for additional languages. Trained on 9 trillion tokens, the Llama 3.2 3B model excels in instruction-following, complex reasoning, and tool use. Its balanced performance makes it ideal for applications needing accuracy and efficiency in text generation across multilingual settings. Click here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md). Usage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-3.2-3b-instruct:free",
        "name": "Llama 3.2 3B Instruct (free)",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization.",
        "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transformer architecture, it supports eight languages, including English, Spanish, and Hindi, and is adaptable for additional languages. Trained on 9 trillion tokens, the Llama 3.2 3B model excels in instruction-following, complex reasoning, and tool use. Its balanced performance makes it ideal for applications needing accuracy and efficiency in text generation across multilingual settings. Click here for the [original model card](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md). Usage of this model is subject to [Meta's Acceptable Use Policy](https://www.llama.com/llama3/use-policy/).",
        "bestFor": [
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "qwen/qwen-2.5-72b-instruct",
        "name": "Qwen2.5 72B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-09-19",
        "contextLength": 32768,
        "inputPer1M": 0.12,
        "outputPer1M": 0.39,
        "summary": "Qwen2.5 72B is the latest series of Qwen large language models.",
        "description": "Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and mathematics, thanks to our specialized expert models in these domains. - Significant improvements in instruction following, generating long texts (over 8K tokens), understanding structured data (e.g, tables), and generating structured outputs especially JSON. More resilient to the diversity of system prompts, enhancing role-play implementation and condition-setting for chatbots. - Long-context Support up to 128K tokens and can generate up to 8K tokens. - Multilingual support for over 29 languages, including Chinese, English, French, Spanish, Portuguese, German, Italian, Russian, Japanese, Korean, Vietnamese, Thai, Arabic, and more. Usage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "cohere/command-r-08-2024",
        "name": "Command R (08-2024)",
        "provider": "Cohere",
        "releasedAt": "2024-08-30",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use.",
        "description": "command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reasoning and is competitive with the previous version of the larger Command R+ model. Read the launch post [here](https://docs.cohere.com/changelog/command-gets-refreshed). Use of this model is subject to Cohere's [Usage Policy](https://docs.cohere.com/docs/usage-policy) and [SaaS Agreement](https://cohere.com/saas-agreement).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "cohere/command-r-plus-08-2024",
        "name": "Command R+ (08-2024)",
        "provider": "Cohere",
        "releasedAt": "2024-08-30",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardw...",
        "description": "command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardware footprint the same. Read the launch post [here](https://docs.cohere.com/changelog/command-gets-refreshed). Use of this model is subject to Cohere's [Usage Policy](https://docs.cohere.com/docs/usage-policy) and [SaaS Agreement](https://cohere.com/saas-agreement).",
        "bestFor": [
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "sao10k/l3.1-euryale-70b",
        "name": "Llama 3.1 Euryale 70B v2.2",
        "provider": "Sao10K",
        "releasedAt": "2024-08-28",
        "contextLength": 131072,
        "inputPer1M": 0.85,
        "outputPer1M": 0.85,
        "summary": "Euryale L3.1 70B v2.2 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).",
        "description": "Euryale L3.1 70B v2.2 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). It is the successor of [Euryale L3 70B v2.1](/models/sao10k/l3-euryale-70b).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "qwen/qwen-2.5-vl-7b-instruct",
        "name": "Qwen2.5-VL 7B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-08-28",
        "contextLength": 32768,
        "inputPer1M": 0.2,
        "outputPer1M": 0.2,
        "summary": "Qwen2.5 VL 7B is a multimodal LLM from the Qwen Team with the following key enhancements: - SoTA understanding of images of various resolution & ratio: Qwen2.5-VL achieves state-of-the-art performance on visual unders...",
        "description": "Qwen2.5 VL 7B is a multimodal LLM from the Qwen Team with the following key enhancements: - SoTA understanding of images of various resolution & ratio: Qwen2.5-VL achieves state-of-the-art performance on visual understanding benchmarks, including MathVista, DocVQA, RealWorldQA, MTVQA, etc. - Understanding videos of 20min+: Qwen2.5-VL can understand videos over 20 minutes for high-quality video-based question answering, dialog, content creation, etc. - Agent that can operate your mobiles, robots, etc.: with the abilities of complex reasoning and decision making, Qwen2.5-VL can be integrated with devices like mobile phones, robots, etc., for automatic operation based on visual environment and text instructions. - Multilingual Support: to serve global users, besides English and Chinese, Qwen2.5-VL now supports the understanding of texts in different languages inside images, including most European languages, Japanese, Korean, Arabic, Vietnamese, etc. For more details, see this [blog post](https://qwenlm.github.io/blog/qwen2-vl/) and [GitHub repo](https://github.com/QwenLM/Qwen2-VL). Usage of this model is subject to [Tongyi Qianwen LICENSE AGREEMENT](https://huggingface.co/Qwen/Qwen1.5-110B-Chat/blob/main/LICENSE).",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows",
            "Agent workflows"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "nousresearch/hermes-3-llama-3.1-70b",
        "name": "Hermes 3 70B Instruct",
        "provider": "Nous",
        "releasedAt": "2024-08-18",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.3,
        "summary": "Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-tur...",
        "description": "Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board. Hermes 3 70B is a competitive, if not superior finetune of the [Llama-3.1 70B foundation model](/models/meta-llama/llama-3.1-70b-instruct), focused on aligning LLMs to the user, with powerful steering capabilities and control given to the end user. The Hermes 3 series builds and expands on the Hermes 2 set of capabilities, including more powerful and reliable function calling and structured output capabilities, generalist assistant capabilities, and improved code generation skills.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "nousresearch/hermes-3-llama-3.1-405b",
        "name": "Hermes 3 405B Instruct",
        "provider": "Nous",
        "releasedAt": "2024-08-16",
        "contextLength": 131072,
        "inputPer1M": 1,
        "outputPer1M": 1,
        "summary": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improveme...",
        "description": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board. Hermes 3 405B is a frontier-level, full-parameter finetune of the Llama-3.1 405B foundation model, focused on aligning LLMs to the user, with powerful steering capabilities and control given to the end user. The Hermes 3 series builds and expands on the Hermes 2 set of capabilities, including more powerful and reliable function calling and structured output capabilities, generalist assistant capabilities, and improved code generation skills. Hermes 3 is competitive, if not superior, to Llama-3.1 Instruct models at general capabilities, with varying strengths and weaknesses attributable between the two.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "nousresearch/hermes-3-llama-3.1-405b:free",
        "name": "Hermes 3 405B Instruct (free)",
        "provider": "Nous",
        "releasedAt": "2024-08-16",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improveme...",
        "description": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvements across the board. Hermes 3 405B is a frontier-level, full-parameter finetune of the Llama-3.1 405B foundation model, focused on aligning LLMs to the user, with powerful steering capabilities and control given to the end user. The Hermes 3 series builds and expands on the Hermes 2 set of capabilities, including more powerful and reliable function calling and structured output capabilities, generalist assistant capabilities, and improved code generation skills. Hermes 3 is competitive, if not superior, to Llama-3.1 Instruct models at general capabilities, with varying strengths and weaknesses attributable between the two.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "sao10k/l3-lunaris-8b",
        "name": "Llama 3 8B Lunaris",
        "provider": "Sao10K",
        "releasedAt": "2024-08-13",
        "contextLength": 8192,
        "inputPer1M": 0.04,
        "outputPer1M": 0.05,
        "summary": "Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3.",
        "description": "Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3. It's a strategic merge of multiple models, designed to balance creativity with improved logic and general knowledge. Created by [Sao10k](https://huggingface.co/Sao10k), this model aims to offer an improved experience over Stheno v3.2, with enhanced creativity and logical reasoning. For best results, use with Llama 3 Instruct context template, temperature 1.4, and min_p 0.1.",
        "bestFor": [
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4o-2024-08-06",
        "name": "GPT-4o (2024-08-06)",
        "provider": "OpenAI",
        "releasedAt": "2024-08-06",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format.",
        "description": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more [here](https://openai.com/index/introducing-structured-outputs-in-the-api/). GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities. For benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209)",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "meta-llama/llama-3.1-405b",
        "name": "Llama 3.1 405B (base)",
        "provider": "Meta",
        "releasedAt": "2024-08-02",
        "contextLength": 32768,
        "inputPer1M": 4,
        "outputPer1M": 4,
        "summary": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors.",
        "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This is the base 405B pre-trained version. It has demonstrated strong performance compared to leading closed-source models in human evaluations. To read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-3.1-70b-instruct",
        "name": "Llama 3.1 70B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-07-23",
        "contextLength": 131072,
        "inputPer1M": 0.4,
        "outputPer1M": 0.4,
        "summary": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors.",
        "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 70B instruct-tuned version is optimized for high quality dialogue usecases. It has demonstrated strong performance compared to leading closed-source models in human evaluations. To read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3-1/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k"
        ]
    },
    {
        "id": "meta-llama/llama-3.1-8b-instruct",
        "name": "Llama 3.1 8B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-07-23",
        "contextLength": 16384,
        "inputPer1M": 0.02,
        "outputPer1M": 0.05,
        "summary": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors.",
        "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 8B instruct-tuned version is fast and efficient. It has demonstrated strong performance compared to leading closed-source models in human evaluations. To read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3-1/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "bestFor": [
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice"
        ]
    },
    {
        "id": "mistralai/mistral-nemo",
        "name": "Mistral Nemo",
        "provider": "Mistral",
        "releasedAt": "2024-07-19",
        "contextLength": 131072,
        "inputPer1M": 0.02,
        "outputPer1M": 0.04,
        "summary": "A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA.",
        "description": "A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA. The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi. It supports function calling and is released under the Apache 2.0 license.",
        "bestFor": [
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4o-mini",
        "name": "GPT-4o-mini",
        "provider": "OpenAI",
        "releasedAt": "2024-07-18",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.",
        "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable than other recent frontier models, and more than 60% cheaper than [GPT-3.5 Turbo](/models/openai/gpt-3.5-turbo). It maintains SOTA intelligence, while being significantly more cost-effective. GPT-4o mini achieves an 82% score on MMLU and presently ranks higher than GPT-4 on chat preferences [common leaderboards](https://arena.lmsys.org/). Check out the [launch announcement](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) to learn more. #multimodal",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4o-mini-2024-07-18",
        "name": "GPT-4o-mini (2024-07-18)",
        "provider": "OpenAI",
        "releasedAt": "2024-07-18",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs.",
        "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable than other recent frontier models, and more than 60% cheaper than [GPT-3.5 Turbo](/models/openai/gpt-3.5-turbo). It maintains SOTA intelligence, while being significantly more cost-effective. GPT-4o mini achieves an 82% score on MMLU and presently ranks higher than GPT-4 on chat preferences [common leaderboards](https://arena.lmsys.org/). Check out the [launch announcement](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) to learn more. #multimodal",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "google/gemma-2-27b-it",
        "name": "Gemma 2 27B",
        "provider": "Google",
        "releasedAt": "2024-07-13",
        "contextLength": 8192,
        "inputPer1M": 0.65,
        "outputPer1M": 0.65,
        "summary": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini).",
        "description": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini). Gemma models are well-suited for a variety of text generation tasks, including question answering, summarization, and reasoning. See the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details. Usage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "top_p"
        ]
    },
    {
        "id": "google/gemma-2-9b-it",
        "name": "Gemma 2 9B",
        "provider": "Google",
        "releasedAt": "2024-06-28",
        "contextLength": 8192,
        "inputPer1M": 0.03,
        "outputPer1M": 0.09,
        "summary": "Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class.",
        "description": "Gemma 2 9B by Google is an advanced, open-source language model that sets a new standard for efficiency and performance in its size class. Designed for a wide variety of tasks, it empowers developers and researchers to build innovative applications, while maintaining accessibility, safety, and cost-effectiveness. See the [launch announcement](https://blog.google/technology/developers/google-gemma-2/) for more details. Usage of Gemma is subject to Google's [Gemma Terms of Use](https://ai.google.dev/gemma/terms).",
        "bestFor": [
            "Code generation",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "sao10k/l3-euryale-70b",
        "name": "Llama 3 Euryale 70B v2.1",
        "provider": "Sao10k",
        "releasedAt": "2024-06-18",
        "contextLength": 8192,
        "inputPer1M": 1.48,
        "outputPer1M": 1.48,
        "summary": "Euryale 70B v2.1 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k).",
        "description": "Euryale 70B v2.1 is a model focused on creative roleplay from [Sao10k](https://ko-fi.com/sao10k). - Better prompt adherence. - Better anatomy / spatial awareness. - Adapts much better to unique and custom formatting / reply formats. - Very creative, lots of unique swipes. - Is not restrictive during roleplays.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "nousresearch/hermes-2-pro-llama-3-8b",
        "name": "Hermes 2 Pro - Llama-3 8B",
        "provider": "NousResearch",
        "releasedAt": "2024-05-27",
        "contextLength": 8192,
        "inputPer1M": 0.14,
        "outputPer1M": 0.14,
        "summary": "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset develop...",
        "description": "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced Function Calling and JSON Mode dataset developed in-house.",
        "bestFor": [
            "Agent workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4o",
        "name": "GPT-4o",
        "provider": "OpenAI",
        "releasedAt": "2024-05-13",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs.",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities. For benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209) #multimodal",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4o-2024-05-13",
        "name": "GPT-4o (2024-05-13)",
        "provider": "OpenAI",
        "releasedAt": "2024-05-13",
        "contextLength": 128000,
        "inputPer1M": 5,
        "outputPer1M": 15,
        "summary": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs.",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities. For benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209) #multimodal",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4o:extended",
        "name": "GPT-4o (extended)",
        "provider": "OpenAI",
        "releasedAt": "2024-05-13",
        "contextLength": 128000,
        "inputPer1M": 6,
        "outputPer1M": 18,
        "summary": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs.",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as fast and 50% more cost-effective. GPT-4o also offers improved performance in processing non-English languages and enhanced visual capabilities. For benchmarking against other models, it was briefly called [\"im-also-a-good-gpt2-chatbot\"](https://twitter.com/LiamFedus/status/1790064963966370209) #multimodal",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text+image+file->text",
        "inputModalities": [
            "text",
            "image",
            "file"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "meta-llama/llama-3-70b-instruct",
        "name": "Llama 3 70B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-04-18",
        "contextLength": 8192,
        "inputPer1M": 0.51,
        "outputPer1M": 0.74,
        "summary": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors.",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases. It has demonstrated strong performance compared to leading closed-source models in human evaluations. To read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "meta-llama/llama-3-8b-instruct",
        "name": "Llama 3 8B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-04-18",
        "contextLength": 8192,
        "inputPer1M": 0.03,
        "outputPer1M": 0.04,
        "summary": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors.",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases. It has demonstrated strong performance compared to leading closed-source models in human evaluations. To read more about the model release, [click here](https://ai.meta.com/blog/meta-llama-3/). Usage of this model is subject to [Meta's Acceptable Use Policy](https://llama.meta.com/llama3/use-policy/).",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mixtral-8x22b-instruct",
        "name": "Mixtral 8x22B Instruct",
        "provider": "Mistral",
        "releasedAt": "2024-04-17",
        "contextLength": 65536,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b).",
        "description": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include: - strong math, coding, and reasoning - large context length (64k) - fluency in English, French, Italian, German, and Spanish See benchmarks on the launch announcement [here](https://mistral.ai/news/mixtral-8x22b/). #moe",
        "bestFor": [
            "Code generation",
            "Advanced reasoning",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "microsoft/wizardlm-2-8x22b",
        "name": "WizardLM-2 8x22B",
        "provider": "Microsoft",
        "releasedAt": "2024-04-16",
        "contextLength": 65535,
        "inputPer1M": 0.62,
        "outputPer1M": 0.62,
        "summary": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model.",
        "description": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensource models. It is an instruct finetune of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). To read more about the model release, [click here](https://wizardlm.github.io/WizardLM2/). #moe",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-4-turbo",
        "name": "GPT-4 Turbo",
        "provider": "OpenAI",
        "releasedAt": "2024-04-09",
        "contextLength": 128000,
        "inputPer1M": 10,
        "outputPer1M": 30,
        "summary": "The latest GPT-4 Turbo model with vision capabilities.",
        "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Training data: up to December 2023.",
        "bestFor": [
            "Multimodal workflows",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "anthropic/claude-3-haiku",
        "name": "Claude 3 Haiku",
        "provider": "Anthropic",
        "releasedAt": "2024-03-13",
        "contextLength": 200000,
        "inputPer1M": 0.25,
        "outputPer1M": 1.25,
        "summary": "Claude 3 Haiku is Anthropic's fastest and most compact model for near-instant responsiveness.",
        "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance. See the launch announcement and benchmark results [here](https://www.anthropic.com/news/claude-3-haiku) #multimodal",
        "bestFor": [
            "Multimodal workflows",
            "Low-latency assistants"
        ],
        "modality": "text+image->text",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "max_tokens",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-large",
        "name": "Mistral Large",
        "provider": "Mistralai",
        "releasedAt": "2024-02-26",
        "contextLength": 128000,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`).",
        "description": "This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement [here](https://mistral.ai/news/mistral-large-2407/). It supports dozens of languages including French, German, Spanish, Italian, Portuguese, Arabic, Hindi, Russian, Chinese, Japanese, and Korean, along with 80+ coding languages including Python, Java, C, C++, JavaScript, and Bash. Its long context window allows precise information recall from large documents.",
        "bestFor": [
            "Code generation",
            "Advanced reasoning"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-3.5-turbo-0613",
        "name": "GPT-3.5 Turbo (older v0613)",
        "provider": "OpenAI",
        "releasedAt": "2024-01-25",
        "contextLength": 8192,
        "inputPer1M": 1,
        "outputPer1M": 2,
        "summary": "GPT-3.5 Turbo is OpenAI's fastest model.",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data up to Sep 2021.",
        "bestFor": [
            "Code generation",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4-turbo-preview",
        "name": "GPT-4 Turbo Preview",
        "provider": "OpenAI",
        "releasedAt": "2024-01-25",
        "contextLength": 128000,
        "inputPer1M": 10,
        "outputPer1M": 30,
        "summary": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more.",
        "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023. **Note:** heavily rate limited by OpenAI while in preview.",
        "bestFor": [
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mistralai/mixtral-8x7b-instruct",
        "name": "Mixtral 8x7B Instruct",
        "provider": "Mistral",
        "releasedAt": "2023-12-10",
        "contextLength": 32768,
        "inputPer1M": 0.54,
        "outputPer1M": 0.54,
        "summary": "Mixtral 8x7B Instruct is a pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use.",
        "description": "Mixtral 8x7B Instruct is a pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion parameters. Instruct model fine-tuned by Mistral. #moe",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "alpindale/goliath-120b",
        "name": "Goliath 120B",
        "provider": "Alpindale",
        "releasedAt": "2023-11-10",
        "contextLength": 8192,
        "inputPer1M": 3.75,
        "outputPer1M": 7.5,
        "summary": "A large LLM created by combining two fine-tuned Llama 70B models into one 120B model.",
        "description": "A large LLM created by combining two fine-tuned Llama 70B models into one 120B model. Combines Xwin and Euryale. Credits to - [@chargoddard](https://huggingface.co/chargoddard) for developing the framework used to merge the model - [mergekit](https://github.com/cg123/mergekit). - [@Undi95](https://huggingface.co/Undi95) for helping with the merge ratios. #merge",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_a"
        ]
    },
    {
        "id": "openai/gpt-4-1106-preview",
        "name": "GPT-4 Turbo (older v1106)",
        "provider": "OpenAI",
        "releasedAt": "2023-11-06",
        "contextLength": 128000,
        "inputPer1M": 10,
        "outputPer1M": 30,
        "summary": "The latest GPT-4 Turbo model with vision capabilities.",
        "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Training data: up to April 2023.",
        "bestFor": [
            "Multimodal workflows",
            "Agent workflows",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-3.5-turbo-instruct",
        "name": "GPT-3.5 Turbo Instruct",
        "provider": "OpenAI",
        "releasedAt": "2023-09-28",
        "contextLength": 8192,
        "inputPer1M": 1.5,
        "outputPer1M": 2,
        "summary": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations.",
        "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
        "bestFor": [
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ]
    },
    {
        "id": "mistralai/mistral-7b-instruct-v0.1",
        "name": "Mistral 7B Instruct v0.1",
        "provider": "Mistral",
        "releasedAt": "2023-09-28",
        "contextLength": 8192,
        "inputPer1M": 0.11,
        "outputPer1M": 0.19,
        "summary": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
        "description": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ]
    },
    {
        "id": "openai/gpt-3.5-turbo-16k",
        "name": "GPT-3.5 Turbo 16k",
        "provider": "OpenAI",
        "releasedAt": "2023-08-28",
        "contextLength": 16385,
        "inputPer1M": 3,
        "outputPer1M": 4,
        "summary": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost.",
        "description": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up to Sep 2021.",
        "bestFor": [
            "Low-latency assistants",
            "Cost-sensitive deployment"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "mancer/weaver",
        "name": "Weaver (alpha)",
        "provider": "Mancer",
        "releasedAt": "2023-08-02",
        "contextLength": 8192,
        "inputPer1M": 0.75,
        "outputPer1M": 1,
        "summary": "An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory.",
        "description": "An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory. Meant for use in roleplay/narrative situations.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_a"
        ]
    },
    {
        "id": "undi95/remm-slerp-l2-13b",
        "name": "ReMM SLERP 13B",
        "provider": "Undi95",
        "releasedAt": "2023-07-22",
        "contextLength": 8192,
        "inputPer1M": 0.45,
        "outputPer1M": 0.65,
        "summary": "A recreation trial of the original MythoMax-L2-B13 but with updated models.",
        "description": "A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "gryphe/mythomax-l2-13b",
        "name": "MythoMax 13B",
        "provider": "Gryphe",
        "releasedAt": "2023-07-02",
        "contextLength": 8192,
        "inputPer1M": 0.06,
        "outputPer1M": 0.06,
        "summary": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay.",
        "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature"
        ]
    },
    {
        "id": "openai/gpt-3.5-turbo",
        "name": "GPT-3.5 Turbo",
        "provider": "OpenAI",
        "releasedAt": "2023-05-28",
        "contextLength": 16385,
        "inputPer1M": 0.5,
        "outputPer1M": 1.5,
        "summary": "GPT-3.5 Turbo is OpenAI's fastest model.",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data up to Sep 2021.",
        "bestFor": [
            "Code generation",
            "Low-latency assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4",
        "name": "GPT-4",
        "provider": "OpenAI",
        "releasedAt": "2023-05-28",
        "contextLength": 8192,
        "inputPer1M": 30,
        "outputPer1M": 60,
        "summary": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning ca...",
        "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning capabilities. Training data: up to Sep 2021.",
        "bestFor": [
            "Advanced reasoning",
            "Multimodal workflows"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    },
    {
        "id": "openai/gpt-4-0314",
        "name": "GPT-4 (older v0314)",
        "provider": "OpenAI",
        "releasedAt": "2023-05-28",
        "contextLength": 8192,
        "inputPer1M": 30,
        "outputPer1M": 60,
        "summary": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14.",
        "description": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
        "bestFor": [
            "General assistants"
        ],
        "modality": "text->text",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ]
    }
];
