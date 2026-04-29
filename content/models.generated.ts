// Auto-generated snapshot from model catalog sources.
// Generated at 2026-04-28T18:45:00.199Z
// Source counts: source1=428, source2=200

export const generatedModelsLastUpdated = "2026-04-28";

export const generatedModels = [
    {
        "id": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        "name": "NVIDIA: Nemotron 3 Nano Omni (free)",
        "provider": "Nvidia",
        "releasedAt": "2026-04-28",
        "contextLength": 256000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron™ 3 Nano Omni is a 30B-A3B open multimodal model designed to function as a perception and context sub-agent in enterprise agent systems. It accepts text, image, video, and...",
        "description": "NVIDIA Nemotron™ 3 Nano Omni is a 30B-A3B open multimodal model designed to function as a perception and context sub-agent in enterprise agent systems. It accepts text, image, video, and...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "poolside/laguna-m.1:free",
        "name": "Poolside: Laguna M.1 (free)",
        "provider": "Poolside",
        "releasedAt": "2026-04-28",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Laguna M.1 is the flagship coding agent model from Poolside, optimized for complex software engineering tasks. Designed for agentic coding workflows, it supports tool calling and reasoning, with a 128K...",
        "description": "Laguna M.1 is the flagship coding agent model from Poolside, optimized for complex software engineering tasks. Designed for agentic coding workflows, it supports tool calling and reasoning, with a 128K...",
        "bestFor": [
            "Agent workflows",
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
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "poolside/laguna-xs.2:free",
        "name": "Poolside: Laguna XS.2 (free)",
        "provider": "Poolside",
        "releasedAt": "2026-04-28",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Laguna XS.2 is the second-generation model in the XS size class from Poolside, their efficient coding agent series. It combines tool calling and reasoning capabilities with a compact footprint, offering...",
        "description": "Laguna XS.2 is the second-generation model in the XS size class from Poolside, their efficient coding agent series. It combines tool calling and reasoning capabilities with a compact footprint, offering...",
        "bestFor": [
            "Agent workflows",
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
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~anthropic/claude-haiku-latest",
        "name": "Anthropic Claude Haiku Latest",
        "provider": "~anthropic",
        "releasedAt": "2026-04-27",
        "contextLength": 200000,
        "inputPer1M": 1,
        "outputPer1M": 5,
        "summary": "This model always redirects to the latest model in the Anthropic Claude Haiku family.",
        "description": "This model always redirects to the latest model in the Anthropic Claude Haiku family.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~anthropic/claude-sonnet-latest",
        "name": "Anthropic Claude Sonnet Latest",
        "provider": "~anthropic",
        "releasedAt": "2026-04-27",
        "contextLength": 1000000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "This model always redirects to the latest model in the Anthropic Claude Sonnet family.",
        "description": "This model always redirects to the latest model in the Anthropic Claude Sonnet family.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_completion_tokens",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~google/gemini-flash-latest",
        "name": "Google Gemini Flash Latest",
        "provider": "~google",
        "releasedAt": "2026-04-27",
        "contextLength": 1048576,
        "inputPer1M": 0.5,
        "outputPer1M": 3,
        "summary": "This model always redirects to the latest model in the Google Gemini Flash family.",
        "description": "This model always redirects to the latest model in the Google Gemini Flash family.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~google/gemini-pro-latest",
        "name": "Google Gemini Pro Latest",
        "provider": "~google",
        "releasedAt": "2026-04-27",
        "contextLength": 1048576,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "This model always redirects to the latest model in the Google Gemini Pro family.",
        "description": "This model always redirects to the latest model in the Google Gemini Pro family.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/alibaba/happy-horse/reference-to-video",
        "name": "Happy Horse",
        "provider": "Alibaba",
        "releasedAt": "2026-04-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate 1080p video with synchronized native audio from a text prompt and references. Aspect ratios: 16:9, 9:16, 1:1, 4:3, 3:4. Duration: 3–15s.",
        "description": "Generate 1080p video with synchronized native audio from a text prompt and references. Aspect ratios: 16:9, 9:16, 1:1, 4:3, 3:4. Duration: 3–15s.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/alibaba/happy-horse/video-edit",
        "name": "Happy Horse Video Edit",
        "provider": "Alibaba",
        "releasedAt": "2026-04-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "HappyHorse video editing supports advanced video editing through natural language instructions. It allows for local or global editing of video elements using up to 5 reference images.",
        "description": "HappyHorse video editing supports advanced video editing through natural language instructions. It allows for local or global editing of video elements using up to 5 reference images.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "~moonshotai/kimi-latest",
        "name": "MoonshotAI Kimi Latest",
        "provider": "~moonshotai",
        "releasedAt": "2026-04-27",
        "contextLength": 256000,
        "inputPer1M": 0.7448,
        "outputPer1M": 4.655,
        "summary": "This model always redirects to the latest model in the MoonshotAI Kimi family.",
        "description": "This model always redirects to the latest model in the MoonshotAI Kimi family.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~openai/gpt-latest",
        "name": "OpenAI GPT Latest",
        "provider": "~openai",
        "releasedAt": "2026-04-27",
        "contextLength": 1050000,
        "inputPer1M": 5,
        "outputPer1M": 30,
        "summary": "This model always redirects to the latest model in the OpenAI GPT family.",
        "description": "This model always redirects to the latest model in the OpenAI GPT family.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~openai/gpt-mini-latest",
        "name": "OpenAI GPT Mini Latest",
        "provider": "~openai",
        "releasedAt": "2026-04-27",
        "contextLength": 400000,
        "inputPer1M": 0.75,
        "outputPer1M": 4.5,
        "summary": "This model always redirects to the latest model in the OpenAI GPT Mini family.",
        "description": "This model always redirects to the latest model in the OpenAI GPT Mini family.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/whisper-1",
        "name": "OpenAI: Whisper 1",
        "provider": "OpenAI",
        "releasedAt": "2026-04-27",
        "contextLength": 0,
        "inputPer1M": 6000,
        "outputPer1M": 0,
        "summary": "Whisper is OpenAI's open-source automatic speech recognition model, available via API as `whisper-1`. It supports transcription and translation across 50+ languages from audio files up to 25 MB. Accepts formats...",
        "description": "Whisper is OpenAI's open-source automatic speech recognition model, available via API as `whisper-1`. It supports transcription and translation across 50+ languages from audio files up to 25 MB. Accepts formats...",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "audio->transcription",
        "inputModalities": [
            "audio"
        ],
        "outputModalities": [
            "transcription"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-plus-20260420",
        "name": "Qwen: Qwen3.5 Plus 2026-04-20",
        "provider": "Qwen",
        "releasedAt": "2026-04-27",
        "contextLength": 1000000,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2.4,
        "summary": "Qwen3.5 Plus (April 2026) is a large-scale multimodal language model from Alibaba. It accepts text, image, and video input and produces text output, with a 1M token context window. This...",
        "description": "Qwen3.5 Plus (April 2026) is a large-scale multimodal language model from Alibaba. It accepts text, image, and video input and produces text output, with a 1M token context window. This...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.6-27b",
        "name": "Qwen: Qwen3.6 27B",
        "provider": "Qwen",
        "releasedAt": "2026-04-27",
        "contextLength": 256000,
        "inputPer1M": 0.325,
        "outputPer1M": 3.25,
        "summary": "Qwen3.6 27B is a dense 27-billion-parameter language model from the Qwen Team at Alibaba, released in April 2026. It features hybrid multimodal capabilities — accepting text, image, and video inputs...",
        "description": "Qwen3.6 27B is a dense 27-billion-parameter language model from the Qwen Team at Alibaba, released in April 2026. It features hybrid multimodal capabilities — accepting text, image, and video inputs...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.6-35b-a3b",
        "name": "Qwen: Qwen3.6 35B A3B",
        "provider": "Qwen",
        "releasedAt": "2026-04-27",
        "contextLength": 262144,
        "inputPer1M": 0.16119999999999998,
        "outputPer1M": 0.9652499999999999,
        "summary": "Qwen3.6-35B-A3B is an open-weight multimodal model from Alibaba Cloud with 35 billion total parameters and 3 billion active parameters per token. It uses a hybrid sparse mixture-of-experts architecture combining Gated...",
        "description": "Qwen3.6-35B-A3B is an open-weight multimodal model from Alibaba Cloud with 35 billion total parameters and 3 billion active parameters per token. It uses a hybrid sparse mixture-of-experts architecture combining Gated...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Advanced reasoning"
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
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.6-flash",
        "name": "Qwen: Qwen3.6 Flash",
        "provider": "Qwen",
        "releasedAt": "2026-04-27",
        "contextLength": 1000000,
        "inputPer1M": 0.25,
        "outputPer1M": 1.5,
        "summary": "Qwen3.6 Flash is a fast, efficient language model from Alibaba's Qwen 3.6 series. It supports text, image, and video input with a 1M token context window. Tiered pricing kicks in...",
        "description": "Qwen3.6 Flash is a fast, efficient language model from Alibaba's Qwen 3.6 series. It supports text, image, and video input with a 1M token context window. Tiered pricing kicks in...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.6-max-preview",
        "name": "Qwen: Qwen3.6 Max Preview",
        "provider": "Qwen",
        "releasedAt": "2026-04-27",
        "contextLength": 262144,
        "inputPer1M": 1.04,
        "outputPer1M": 6.24,
        "summary": "Qwen3.6-Max-Preview is a proprietary frontier model from Alibaba Cloud built on a sparse mixture-of-experts architecture with approximately 1 trillion total parameters. It is optimized for agentic coding, tool use, and.…",
        "description": "Qwen3.6-Max-Preview is a proprietary frontier model from Alibaba Cloud built on a sparse mixture-of-experts architecture with approximately 1 trillion total parameters. It is optimized for agentic coding, tool use, and.…",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-v4-flash",
        "name": "DeepSeek: DeepSeek V4 Flash",
        "provider": "DeepSeek",
        "releasedAt": "2026-04-24",
        "contextLength": 1048576,
        "inputPer1M": 0.14,
        "outputPer1M": 0.28,
        "summary": "DeepSeek V4 Flash is an efficiency-optimized Mixture-of-Experts model from DeepSeek with 284B total parameters and 13B activated parameters, supporting a 1M-token context window. It is designed for fast inference and...",
        "description": "DeepSeek V4 Flash is an efficiency-optimized Mixture-of-Experts model from DeepSeek with 284B total parameters and 13B activated parameters, supporting a 1M-token context window. It is designed for fast inference and...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-v4-pro",
        "name": "DeepSeek: DeepSeek V4 Pro",
        "provider": "DeepSeek",
        "releasedAt": "2026-04-24",
        "contextLength": 1048576,
        "inputPer1M": 0.435,
        "outputPer1M": 0.87,
        "summary": "DeepSeek V4 Pro is a large-scale Mixture-of-Experts model from DeepSeek with 1.6T total parameters and 49B activated parameters, supporting a 1M-token context window. It is designed for advanced reasoning, coding,...",
        "description": "DeepSeek V4 Pro is a large-scale Mixture-of-Experts model from DeepSeek with 1.6T total parameters and 49B activated parameters, supporting a 1M-token context window. It is designed for advanced reasoning, coding,...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-3.1-flash-tts-preview",
        "name": "Google: Gemini 3.1 Flash TTS Preview",
        "provider": "Google",
        "releasedAt": "2026-04-24",
        "contextLength": 8192,
        "inputPer1M": 1,
        "outputPer1M": 20,
        "summary": "Gemini 3.1 Flash TTS Preview is a text-to-speech model from Google, and a substantial generational step up from Gemini 2.5 Flash TTS. It takes text input and produces audio output...",
        "description": "Gemini 3.1 Flash TTS Preview is a text-to-speech model from Google, and a substantial generational step up from Gemini 2.5 Flash TTS. It takes text input and produces audio output...",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/veo-3.1-fast",
        "name": "Google: Veo 3.1 Fast",
        "provider": "Google",
        "releasedAt": "2026-04-24",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's mid-tier video generation model balancing speed and quality. Veo 3.1 Fast generates high-quality video from text or image prompts with native synchronized audio, offering faster turnaround than Veo 3.1...",
        "description": "Google's mid-tier video generation model balancing speed and quality. Veo 3.1 Fast generates high-quality video from text or image prompts with native synchronized audio, offering faster turnaround than Veo 3.1...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "fal/alibaba/happy-horse/image-to-video",
        "name": "Happy Horse",
        "provider": "Alibaba",
        "releasedAt": "2026-04-24",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Alibaba's #1-ranked Happy Horse 1.0 — generate 1080p video with synchronized native audio and multilingual lip-sync from text prompts or images.",
        "description": "Alibaba's #1-ranked Happy Horse 1.0 — generate 1080p video with synchronized native audio and multilingual lip-sync from text prompts or images.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/alibaba/happy-horse/text-to-video",
        "name": "Happy Horse",
        "provider": "Alibaba",
        "releasedAt": "2026-04-24",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate 1080p video with synchronized native audio from a text prompt. Aspect ratios: 16:9, 9:16, 1:1, 4:3, 3:4. Duration: 3–15s.",
        "description": "Generate 1080p video with synchronized native audio from a text prompt. Aspect ratios: 16:9, 9:16, 1:1, 4:3, 3:4. Duration: 3–15s.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-5.5",
        "name": "OpenAI: GPT-5.5",
        "provider": "OpenAI",
        "releasedAt": "2026-04-24",
        "contextLength": 1050000,
        "inputPer1M": 5,
        "outputPer1M": 30,
        "summary": "GPT-5.5 is OpenAI’s frontier model designed for complex professional workloads, building on GPT-5.4 with stronger reasoning, higher reliability, and improved token efficiency on hard tasks. It features a 1M+ token...",
        "description": "GPT-5.5 is OpenAI’s frontier model designed for complex professional workloads, building on GPT-5.4 with stronger reasoning, higher reliability, and improved token efficiency on hard tasks. It features a 1M+ token...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.5-pro",
        "name": "OpenAI: GPT-5.5 Pro",
        "provider": "OpenAI",
        "releasedAt": "2026-04-24",
        "contextLength": 1050000,
        "inputPer1M": 30,
        "outputPer1M": 180,
        "summary": "GPT-5.5 Pro is OpenAI’s high-capability model optimized for deep reasoning and accuracy on complex, high-stakes workloads. It features a 1M+ token context window (922K input, 128K output) with support for...",
        "description": "GPT-5.5 Pro is OpenAI’s high-capability model optimized for deep reasoning and accuracy on complex, high-stakes workloads. It features a 1M+ token context window (922K input, 128K output) with support for...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "canopylabs/orpheus-3b-0.1-ft",
        "name": "Canopy Labs: Orpheus 3B",
        "provider": "Canopylabs",
        "releasedAt": "2026-04-23",
        "contextLength": 4096,
        "inputPer1M": 7,
        "outputPer1M": 0,
        "summary": "Orpheus 3B is an English text-to-speech model from Canopy Labs, fine-tuned for natural prosody and expressive delivery. It offers 7 preset voices and is suited for narration, voice assistants, and...",
        "description": "Orpheus 3B is an English text-to-speech model from Canopy Labs, fine-tuned for natural prosody and expressive delivery. It offers 7 preset voices and is suited for narration, voice assistants, and...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/veo-3.1-lite",
        "name": "Google: Veo 3.1 Lite",
        "provider": "Google",
        "releasedAt": "2026-04-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's most cost-effective video generation model, designed for high-volume applications and rapid iteration. Veo 3.1 Lite generates 720p and 1080p video from text or image prompts with native synchronized audio...",
        "description": "Google's most cost-effective video generation model, designed for high-volume applications and rapid iteration. Veo 3.1 Lite generates 720p and 1080p video from text or image prompts with native synchronized audio...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "hexgrad/kokoro-82m",
        "name": "hexgrad: Kokoro 82M",
        "provider": "Hexgrad",
        "releasedAt": "2026-04-23",
        "contextLength": 4096,
        "inputPer1M": 0.62,
        "outputPer1M": 0,
        "summary": "Kokoro 82M is a lightweight, open-weight text-to-speech model from hexgrad. It converts text to speech across 8 languages (American and British English, Spanish, French, Hindi, Italian, Japanese, Portuguese, and Chinese…",
        "description": "Kokoro 82M is a lightweight, open-weight text-to-speech model from hexgrad. It converts text to speech across 8 languages (American and British English, Spanish, French, Hindi, Italian, Japanese, Portuguese, and Chinese…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "inclusionai/ling-2.6-1t:free",
        "name": "inclusionAI: Ling-2.6-1T (free)",
        "provider": "Inclusionai",
        "releasedAt": "2026-04-23",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Ling-2.6-1T is an instant (instruct) model from inclusionAI and the company’s trillion-parameter flagship, designed for real-world agents that require fast execution and high efficiency at scale. It uses a “fast...",
        "description": "Ling-2.6-1T is an instant (instruct) model from inclusionAI and the company’s trillion-parameter flagship, designed for real-world agents that require fast execution and high efficiency at scale. It uses a “fast...",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sesame/csm-1b",
        "name": "Sesame: CSM 1B",
        "provider": "Sesame",
        "releasedAt": "2026-04-23",
        "contextLength": 4096,
        "inputPer1M": 7,
        "outputPer1M": 0,
        "summary": "CSM 1B is a conversational speech model from Sesame. It accepts text input and produces English speech output, with voice options spanning conversational and read-speech styles. At 1B parameters, it...",
        "description": "CSM 1B is a conversational speech model from Sesame. It accepts text input and produces English speech output, with voice options spanning conversational and read-speech styles. At 1B parameters, it...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "zyphra/zonos-v0.1-hybrid",
        "name": "Zyphra: Zonos v0.1 Hybrid",
        "provider": "Zyphra",
        "releasedAt": "2026-04-23",
        "contextLength": 4096,
        "inputPer1M": 7,
        "outputPer1M": 0,
        "summary": "Zonos v0.1 Hybrid is a text-to-speech model from Zyphra built on a hybrid architecture. It produces English speech output with coverage across American and British accents in male and female...",
        "description": "Zonos v0.1 Hybrid is a text-to-speech model from Zyphra built on a hybrid architecture. It produces English speech output with coverage across American and British accents in male and female...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "zyphra/zonos-v0.1-transformer",
        "name": "Zyphra: Zonos v0.1 Transformer",
        "provider": "Zyphra",
        "releasedAt": "2026-04-23",
        "contextLength": 4096,
        "inputPer1M": 7,
        "outputPer1M": 0,
        "summary": "Zonos v0.1 Transformer is a text-to-speech model from Zyphra built on a pure transformer architecture. It offers the same American and British English voice coverage as the Hybrid variant, and...",
        "description": "Zonos v0.1 Transformer is a text-to-speech model from Zyphra built on a pure transformer architecture. It offers the same American and British English voice coverage as the Hybrid variant, and...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/4k/image-to-video",
        "name": "Kling Video",
        "provider": "Remova Media",
        "releasedAt": "2026-04-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling's Native 4K is a video generation model that directly outputs professional-grade 4K video in one step, eliminating the need for post-production upscaling",
        "description": "Kling's Native 4K is a video generation model that directly outputs professional-grade 4K video in one step, eliminating the need for post-production upscaling",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "tencent/hy3-preview:free",
        "name": "Tencent: Hy3 preview (free)",
        "provider": "Tencent",
        "releasedAt": "2026-04-22",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Hy3 preview is a high-efficiency Mixture-of-Experts model from Tencent designed for agentic workflows and production use. It supports configurable reasoning levels across disabled, low, and high modes, allowing it to...",
        "description": "Hy3 preview is a high-efficiency Mixture-of-Experts model from Tencent designed for agentic workflows and production use. It supports configurable reasoning levels across disabled, low, and high modes, allowing it to...",
        "bestFor": [
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "xiaomi/mimo-v2.5",
        "name": "Xiaomi: MiMo-V2.5",
        "provider": "Xiaomi",
        "releasedAt": "2026-04-22",
        "contextLength": 1048576,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "MiMo-V2.5 is a native omnimodal model by Xiaomi. It delivers Pro-level agentic performance at roughly half the inference cost, while surpassing MiMo-V2-Omni in multimodal perception across image and video understanding.…",
        "description": "MiMo-V2.5 is a native omnimodal model by Xiaomi. It delivers Pro-level agentic performance at roughly half the inference cost, while surpassing MiMo-V2-Omni in multimodal perception across image and video understanding.…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "xiaomi/mimo-v2.5-pro",
        "name": "Xiaomi: MiMo-V2.5-Pro",
        "provider": "Xiaomi",
        "releasedAt": "2026-04-22",
        "contextLength": 1048576,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "MiMo-V2.5-Pro is Xiaomi’s flagship model, delivering strong performance in general agentic capabilities, complex software engineering, and long-horizon tasks, with top rankings on benchmarks such as ClawEval, GDPVal, an…",
        "description": "MiMo-V2.5-Pro is Xiaomi’s flagship model, delivering strong performance in general agentic capabilities, complex software engineering, and long-horizon tasks, with top rankings on benchmarks such as ClawEval, GDPVal, an…",
        "bestFor": [
            "Agent workflows",
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
            "response_format",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "~anthropic/claude-opus-latest",
        "name": "Anthropic: Claude Opus Latest",
        "provider": "~anthropic",
        "releasedAt": "2026-04-21",
        "contextLength": 1000000,
        "inputPer1M": 5,
        "outputPer1M": 25,
        "summary": "This model always redirects to the latest model in the Claude Opus family.",
        "description": "This model always redirects to the latest model in the Claude Opus family.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "tool_choice",
            "tools",
            "verbosity"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "inclusionai/ling-2.6-flash:free",
        "name": "inclusionAI: Ling-2.6-flash (free)",
        "provider": "Inclusionai",
        "releasedAt": "2026-04-21",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Ling-2.6-flash is an instant (instruct) model from inclusionAI with 104B total parameters and 7.4B active parameters, designed for real-world agents that require fast responses, strong execution, and high token efficien…",
        "description": "Ling-2.6-flash is an instant (instruct) model from inclusionAI with 104B total parameters and 7.4B active parameters, designed for real-world agents that require fast responses, strong execution, and high token efficien…",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.4-image-2",
        "name": "OpenAI: GPT-5.4 Image 2",
        "provider": "OpenAI",
        "releasedAt": "2026-04-21",
        "contextLength": 272000,
        "inputPer1M": 8,
        "outputPer1M": 15,
        "summary": "GPT-5.4 Image 2 combines OpenAI's GPT-5.4 model with state-of-the-art image generation capabilities from GPT Image 2. It enables rich multimodal workflows, allowing users to seamlessly move between reasoning, coding, an…",
        "description": "GPT-5.4 Image 2 combines OpenAI's GPT-5.4 model with state-of-the-art image generation capabilities from GPT Image 2. It enables rich multimodal workflows, allowing users to seamlessly move between reasoning, coding, an…",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning"
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
            "top_logprobs"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "baidu/qianfan-ocr-fast:free",
        "name": "Baidu: Qianfan-OCR-Fast (free)",
        "provider": "Baidu",
        "releasedAt": "2026-04-20",
        "contextLength": 65536,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qianfan-OCR-Fast is a domain-specific multimodal large model purpose-built for OCR. By leveraging specialized OCR training data while preserving versatile multimodal intelligence, it provides a powerful performance upgr…",
        "description": "Qianfan-OCR-Fast is a domain-specific multimodal large model purpose-built for OCR. By leveraging specialized OCR training data while preserving versatile multimodal intelligence, it provides a powerful performance upgr…",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning"
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
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/openai/gpt-image-2/edit",
        "name": "GPT Image 2 API",
        "provider": "OpenAI",
        "releasedAt": "2026-04-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "GPT Image 2, OpenAI's latest image model, is capable of making fine-grained, detailed edits to images.",
        "description": "GPT Image 2, OpenAI's latest image model, is capable of making fine-grained, detailed edits to images.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/openai/gpt-image-2",
        "name": "GPT Image 2 API",
        "provider": "OpenAI",
        "releasedAt": "2026-04-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "GPT Image 2, OpenAI's latest image model, is capable of creating extremely detailed images with fine typography.",
        "description": "GPT Image 2, OpenAI's latest image model, is capable of creating extremely detailed images with fine typography.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "kwaivgi/kling-video-o1",
        "name": "Kling: Video O1",
        "provider": "Kwaivgi",
        "releasedAt": "2026-04-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling Video O1 is a video generation model from Kuaishou. It supports text and image inputs with video output, enabling text-to-video and image-to-video workflows. It is suited for cinematic content...",
        "description": "Kling Video O1 is a video generation model from Kuaishou. It supports text and image inputs with video output, enabling text-to-video and image-to-video workflows. It is suited for cinematic content...",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "minimax/hailuo-2.3",
        "name": "MiniMax: Hailuo 2.3",
        "provider": "Minimax",
        "releasedAt": "2026-04-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Hailuo 2.3 is a video generation model from MiniMax. It accepts text prompts and reference images as input and generates video output, supporting both text-to-video and image-to-video workflows. It is...",
        "description": "Hailuo 2.3 is a video generation model from MiniMax. It accepts text prompts and reference images as input and generates video output, supporting both text-to-video and image-to-video workflows. It is...",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "moonshotai/kimi-k2.6",
        "name": "MoonshotAI: Kimi K2.6",
        "provider": "Moonshotai",
        "releasedAt": "2026-04-20",
        "contextLength": 256000,
        "inputPer1M": 0.7448,
        "outputPer1M": 4.655,
        "summary": "Kimi K2.6 is Moonshot AI's next-generation multimodal model, designed for long-horizon coding, coding-driven UI/UX generation, and multi-agent orchestration. It handles complex end-to-end coding tasks across Python, Rus…",
        "description": "Kimi K2.6 is Moonshot AI's next-generation multimodal model, designed for long-horizon coding, coding-driven UI/UX generation, and multi-agent orchestration. It handles complex end-to-end coding tasks across Python, Rus…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/voxtral-mini-tts-2603",
        "name": "Mistral: Voxtral Mini TTS",
        "provider": "Mistral AI",
        "releasedAt": "2026-04-19",
        "contextLength": 4096,
        "inputPer1M": 16,
        "outputPer1M": 0,
        "summary": "Voxtral Mini TTS is Mistral's text-to-speech model featuring zero-shot voice cloning and multilingual support. It converts text input into natural-sounding audio output.",
        "description": "Voxtral Mini TTS is Mistral's text-to-speech model featuring zero-shot voice cloning and multilingual support. It converts text input into natural-sounding audio output.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-mini-tts-2025-12-15",
        "name": "OpenAI: GPT-4o Mini TTS",
        "provider": "OpenAI",
        "releasedAt": "2026-04-18",
        "contextLength": 4096,
        "inputPer1M": 0.6,
        "outputPer1M": 0,
        "summary": "GPT-4o Mini TTS is OpenAI's cost-efficient text-to-speech model. It converts text input into natural-sounding audio output, supporting a variety of voices and tones.",
        "description": "GPT-4o Mini TTS is OpenAI's cost-efficient text-to-speech model. It converts text input into natural-sounding audio output, supporting a variety of voices and tones.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->speech",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "speech"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-embedding-2-preview",
        "name": "Google: Gemini Embedding 2 Preview",
        "provider": "Google",
        "releasedAt": "2026-04-17",
        "contextLength": 8192,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0,
        "summary": "Gemini Embedding 2 Preview is Google's first multimodal embedding model. We currently support mapping text and images into a unified vector space for semantic search and retrieval-augmented generation (RAG). It...",
        "description": "Gemini Embedding 2 Preview is Google's first multimodal embedding model. We currently support mapping text and images into a unified vector space for semantic search and retrieval-augmented generation (RAG). It...",
        "bestFor": [
            "Image workflows",
            "Embeddings"
        ],
        "modality": "text+image->embeddings",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "embeddings"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-opus-4.7",
        "name": "Anthropic: Claude Opus 4.7",
        "provider": "Anthropic",
        "releasedAt": "2026-04-16",
        "contextLength": 1000000,
        "inputPer1M": 5,
        "outputPer1M": 25,
        "summary": "Opus 4.7 is the next generation of Anthropic's Opus family, built for long-running, asynchronous agents. Building on the coding and agentic strengths of Opus 4.6, it delivers stronger performance on...",
        "description": "Opus 4.7 is the next generation of Anthropic's Opus family, built for long-running, asynchronous agents. Building on the coding and agentic strengths of Opus 4.6, it delivers stronger performance on...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "tool_choice",
            "tools",
            "verbosity"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/gemini-3.1-flash-tts",
        "name": "Gemini 3.1 Flash Tts",
        "provider": "Remova Media",
        "releasedAt": "2026-04-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Newest audio model from Google introduces granular audio tags that give you precise control to direct AI speech for expressive audio generation.",
        "description": "Newest audio model from Google introduces granular audio tags that give you precise control to direct AI speech for expressive audio generation.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-speech",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "alibaba/wan-2.7",
        "name": "Alibaba: Wan 2.7",
        "provider": "Alibaba",
        "releasedAt": "2026-04-15",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Wan 2.7 is a video generation model from Alibaba. It supports text-to-video, image-to-video with first and last frame control, and reference-to-video, where multiple reference images guide the style and content...",
        "description": "Wan 2.7 is a video generation model from Alibaba. It supports text-to-video, image-to-video with first and last frame control, and reference-to-video, where multiple reference images guide the style and content...",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "bytedance/seedance-2.0",
        "name": "ByteDance: Seedance 2.0",
        "provider": "Bytedance",
        "releasedAt": "2026-04-15",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedance 2.0 is a video generation model from ByteDance. It supports text-to-video, image-to-video with first and last frame control, and multimodal reference-to-video. It is particularly strong at preserving character…",
        "description": "Seedance 2.0 is a video generation model from ByteDance. It supports text-to-video, image-to-video with first and last frame control, and multimodal reference-to-video. It is particularly strong at preserving character…",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "frequency_penalty"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "bytedance/seedance-2.0-fast",
        "name": "ByteDance: Seedance 2.0 Fast",
        "provider": "Bytedance",
        "releasedAt": "2026-04-15",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedance 2.0 Fast is a video generation model from ByteDance. It supports text-to-video, image-to-video with first and last frame control, and multimodal reference-to-video. It prioritizes generation speed and lower cos…",
        "description": "Seedance 2.0 Fast is a video generation model from ByteDance. It supports text-to-video, image-to-video with first and last frame control, and multimodal reference-to-video. It prioritizes generation speed and lower cos…",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "frequency_penalty"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "anthropic/claude-opus-4.6-fast",
        "name": "Anthropic: Claude Opus 4.6 (Fast)",
        "provider": "Anthropic",
        "releasedAt": "2026-04-07",
        "contextLength": 1000000,
        "inputPer1M": 30,
        "outputPer1M": 150,
        "summary": "Fast-mode variant of [Opus 4.6](/anthropic/claude-opus-4.6) - identical capabilities with higher output speed at premium 6x pricing. Learn more in Anthropic's docs:",
        "description": "Fast-mode variant of [Opus 4.6](/anthropic/claude-opus-4.6) - identical capabilities with higher output speed at premium 6x pricing. Learn more in Anthropic's docs:",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p",
            "verbosity"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "z-ai/glm-5.1",
        "name": "Z.ai: GLM 5.1",
        "provider": "Z.ai",
        "releasedAt": "2026-04-07",
        "contextLength": 202752,
        "inputPer1M": 1.0499999999999998,
        "outputPer1M": 3.5,
        "summary": "GLM-5.1 delivers a major leap in coding capability, with particularly significant gains in handling long-horizon tasks. Unlike previous models built around minute-level interactions, GLM-5.1 can work independently and c…",
        "description": "GLM-5.1 delivers a major leap in coding capability, with particularly significant gains in handling long-horizon tasks. Unlike previous models built around minute-level interactions, GLM-5.1 can work independently and c…",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cohere/rerank-4-fast",
        "name": "Cohere: Rerank 4 Fast",
        "provider": "Cohere",
        "releasedAt": "2026-04-06",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Cohere's AI search foundation model for enhancing the relevance of information surfaced within search and RAG systems. Features a 32K context window, multilingual support across 100+ languages, no data pre-processing...",
        "description": "Cohere's AI search foundation model for enhancing the relevance of information surfaced within search and RAG systems. Features a 32K context window, multilingual support across 100+ languages, no data pre-processing...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->rerank",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "rerank"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cohere/rerank-4-pro",
        "name": "Cohere: Rerank 4 Pro",
        "provider": "Cohere",
        "releasedAt": "2026-04-06",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Cohere's AI search foundation model for enhancing the relevance of information surfaced within search and RAG systems. Features a 32K context window, multilingual support across 100+ languages, no data pre-processing...",
        "description": "Cohere's AI search foundation model for enhancing the relevance of information surfaced within search and RAG systems. Features a 32K context window, multilingual support across 100+ languages, no data pre-processing...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->rerank",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "rerank"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/sync-lipsync/v3",
        "name": "sync-3 Lipsync",
        "provider": "Remova Media",
        "releasedAt": "2026-04-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "sync-3 most powerful lipsync model yet, featuring native visual intelligence for professional-quality video.",
        "description": "sync-3 most powerful lipsync model yet, featuring native visual intelligence for professional-quality video.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "cohere/rerank-v3.5",
        "name": "Cohere: Rerank v3.5",
        "provider": "Cohere",
        "releasedAt": "2026-04-05",
        "contextLength": 4096,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Rerank v3.5 is designed to reorder search results for improved relevance. It supports multi-aspect and semi-structured data reranking over 100+ languages. Ideal for refining results from semantic or keyword search...",
        "description": "Rerank v3.5 is designed to reorder search results for improved relevance. It supports multi-aspect and semi-structured data reranking over 100+ languages. Ideal for refining results from semantic or keyword search...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "text->rerank",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "rerank"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-4-26b-a4b-it",
        "name": "Google: Gemma 4 26B A4B",
        "provider": "Google",
        "releasedAt": "2026-04-03",
        "contextLength": 262144,
        "inputPer1M": 0.06,
        "outputPer1M": 0.33,
        "summary": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
        "description": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-4-26b-a4b-it:free",
        "name": "Google: Gemma 4 26B A4B (free)",
        "provider": "Google",
        "releasedAt": "2026-04-03",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
        "description": "Gemma 4 26B A4B IT is an instruction-tuned Mixture-of-Experts (MoE) model from Google DeepMind. Despite 25.2B total parameters, only 3.8B activate per token during inference — delivering near-31B quality at...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-4-31b-it",
        "name": "Google: Gemma 4 31B",
        "provider": "Google",
        "releasedAt": "2026-04-02",
        "contextLength": 262144,
        "inputPer1M": 0.13,
        "outputPer1M": 0.38,
        "summary": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
        "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-4-31b-it:free",
        "name": "Google: Gemma 4 31B (free)",
        "provider": "Google",
        "releasedAt": "2026-04-02",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
        "description": "Gemma 4 31B Instruct is Google DeepMind's 30.7B dense multimodal model supporting text and image input with text output. Features a 256K token context window, configurable thinking/reasoning mode, native function...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.6-plus",
        "name": "Qwen: Qwen3.6 Plus",
        "provider": "Qwen",
        "releasedAt": "2026-04-02",
        "contextLength": 1000000,
        "inputPer1M": 0.325,
        "outputPer1M": 1.95,
        "summary": "Qwen 3.6 Plus builds on a hybrid architecture that combines efficient linear attention with sparse mixture-of-experts routing, enabling strong scalability and high-performance inference. Compared to the 3.5 series, it d…",
        "description": "Qwen 3.6 Plus builds on a hybrid architecture that combines efficient linear attention with sparse mixture-of-experts routing, enabling strong scalability and high-performance inference. Compared to the 3.5 series, it d…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "arcee-ai/trinity-large-thinking",
        "name": "Arcee AI: Trinity Large Thinking",
        "provider": "Arcee Ai",
        "releasedAt": "2026-04-01",
        "contextLength": 262144,
        "inputPer1M": 0.22,
        "outputPer1M": 0.85,
        "summary": "Trinity Large Thinking is a powerful open source reasoning model from the team at Arcee AI. It shows strong performance in PinchBench, agentic workloads, and reasoning tasks. Launch video:",
        "description": "Trinity Large Thinking is a powerful open source reasoning model from the team at Arcee AI. It shows strong performance in PinchBench, agentic workloads, and reasoning tasks. Launch video:",
        "bestFor": [
            "Video workflows",
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/bytedance/seedance-2.0/image-to-video",
        "name": "Seedance 2 Image to Video",
        "provider": "ByteDance",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's most advanced image-to-video model. Animate still images into cinematic video with synchronized audio, start and end frame control, and motion prompts.",
        "description": "ByteDance's most advanced image-to-video model. Animate still images into cinematic video with synchronized audio, start and end frame control, and motion prompts.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/bytedance/seedance-2.0/reference-to-video",
        "name": "Seedance 2 Reference to Video",
        "provider": "ByteDance",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's most advanced reference-to-video model. Generate video from up to 9 images, 3 videos, and 3 audio clips with native audio and cinematic camera control.",
        "description": "ByteDance's most advanced reference-to-video model. Generate video from up to 9 images, 3 videos, and 3 audio clips with native audio and cinematic camera control.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/bytedance/seedance-2.0/fast/image-to-video",
        "name": "Seedance 2.0 Fast Image to Video",
        "provider": "ByteDance",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's most advanced image-to-video model, fast tier. Lower latency and cost with synchronized audio, start and end frame control, and motion prompts.",
        "description": "ByteDance's most advanced image-to-video model, fast tier. Lower latency and cost with synchronized audio, start and end frame control, and motion prompts.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/bytedance/seedance-2.0/fast/reference-to-video",
        "name": "Seedance 2.0 Fast Reference to Video",
        "provider": "ByteDance",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's most advanced reference-to-video model, fast tier. Lower latency and cost with up to 9 images, 3 videos, and 3 audio clips as inputs.",
        "description": "ByteDance's most advanced reference-to-video model, fast tier. Lower latency and cost with up to 9 images, 3 videos, and 3 audio clips as inputs.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/bytedance/seedance-2.0/fast/text-to-video",
        "name": "Seedance 2.0 Fast Text to Video",
        "provider": "ByteDance",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's most advanced text-to-video model, fast tier. Lower latency and cost with cinematic output, native audio, multi-shot editing, and director-level camera control.",
        "description": "ByteDance's most advanced text-to-video model, fast tier. Lower latency and cost with cinematic output, native audio, multi-shot editing, and director-level camera control.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/bytedance/seedance-2.0/text-to-video",
        "name": "Seedance 2.0 Text to Video API",
        "provider": "ByteDance",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's most advanced text-to-video model. Cinematic output with native audio, multi-shot editing, real-world physics, and director-level camera control.",
        "description": "ByteDance's most advanced text-to-video model. Cinematic output with native audio, multi-shot editing, real-world physics, and director-level camera control.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/wan/v2.7/pro/edit",
        "name": "Wan",
        "provider": "Remova Media",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Edit and transform images using text instructions with the WAN 2.7 Pro model for precise, professional-grade image modifications.",
        "description": "Edit and transform images using text instructions with the WAN 2.7 Pro model for precise, professional-grade image modifications.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/wan/v2.7/text-to-image",
        "name": "Wan",
        "provider": "Remova Media",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate high-quality images from text prompts using the WAN 2.7 model with advanced prompt understanding and detailed output.",
        "description": "Generate high-quality images from text prompts using the WAN 2.7 model with advanced prompt understanding and detailed output.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/wan/v2.7/edit",
        "name": "Wan",
        "provider": "Remova Media",
        "releasedAt": "2026-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transform and edit existing images with text-guided instructions using the WAN 2.7 model for creative image manipulation.",
        "description": "Transform and edit existing images with text-guided instructions using the WAN 2.7 model for creative image manipulation.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "z-ai/glm-5v-turbo",
        "name": "Z.ai: GLM 5V Turbo",
        "provider": "Z.ai",
        "releasedAt": "2026-04-01",
        "contextLength": 202752,
        "inputPer1M": 1.2,
        "outputPer1M": 4,
        "summary": "GLM-5V-Turbo is Z.ai’s first native multimodal agent foundation model, built for vision-based coding and agent-driven tasks. It natively handles image, video, and text inputs, excels at long-horizon planning, complex co…",
        "description": "GLM-5V-Turbo is Z.ai’s first native multimodal agent foundation model, built for vision-based coding and agent-driven tasks. It natively handles image, video, and text inputs, excels at long-horizon planning, complex co…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/veo3.1/lite/image-to-video",
        "name": "Veo3.1 Lite Image to Video",
        "provider": "Remova Media",
        "releasedAt": "2026-03-31",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Veo 3.1 Lite balances practical utility with professional capabilities, supporting Text-to-Video and Image-to-Video",
        "description": "Veo 3.1 Lite balances practical utility with professional capabilities, supporting Text-to-Video and Image-to-Video",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "x-ai/grok-4.20",
        "name": "xAI: Grok 4.20",
        "provider": "xAI",
        "releasedAt": "2026-03-31",
        "contextLength": 2000000,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Grok 4.20 is xAI's newest flagship model with industry-leading speed and agentic tool calling capabilities. It combines the lowest hallucination rate on the market with strict prompt adherance, delivering consistently...",
        "description": "Grok 4.20 is xAI's newest flagship model with industry-leading speed and agentic tool calling capabilities. It combines the lowest hallucination rate on the market with strict prompt adherance, delivering consistently...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "x-ai/grok-4.20-multi-agent",
        "name": "xAI: Grok 4.20 Multi-Agent",
        "provider": "xAI",
        "releasedAt": "2026-03-31",
        "contextLength": 2000000,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Grok 4.20 Multi-Agent is a variant of xAI’s Grok 4.20 designed for collaborative, agent-based workflows. Multiple agents operate in parallel to conduct deep research, coordinate tool use, and synthesize information...",
        "description": "Grok 4.20 Multi-Agent is a variant of xAI’s Grok 4.20 designed for collaborative, agent-based workflows. Multiple agents operate in parallel to conduct deep research, coordinate tool use, and synthesize information...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/lyria-3-clip-preview",
        "name": "Google: Lyria 3 Clip Preview",
        "provider": "Google",
        "releasedAt": "2026-03-30",
        "contextLength": 1048576,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "30 second duration clips are priced at $0.04 per clip. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate...",
        "description": "30 second duration clips are priced at $0.04 per clip. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate...",
        "bestFor": [
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->text+audio",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text",
            "audio"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "audio"
    },
    {
        "id": "google/lyria-3-pro-preview",
        "name": "Google: Lyria 3 Pro Preview",
        "provider": "Google",
        "releasedAt": "2026-03-30",
        "contextLength": 1048576,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Full-length songs are priced at $0.08 per song. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate high-quality, 48kHz...",
        "description": "Full-length songs are priced at $0.08 per song. Lyria 3 is Google's family of music generation models, available through the Gemini API. With Lyria 3, you can generate high-quality, 48kHz...",
        "bestFor": [
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->text+audio",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "text",
            "audio"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "audio"
    },
    {
        "id": "fal/fal-ai/pixverse/v6/image-to-video",
        "name": "PixVerse",
        "provider": "Remova Media",
        "releasedAt": "2026-03-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Pixverse's latest V6 Model",
        "description": "Pixverse's latest V6 Model",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "alibaba/wan-2.6",
        "name": "Alibaba: Wan 2.6",
        "provider": "Alibaba",
        "releasedAt": "2026-03-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Alibaba's most advanced video generation model, supporting over 10 visual creation capabilities in a unified system. Wan 2.6 generates 1080p video at 24fps from text, images, reference videos, or audio,...",
        "description": "Alibaba's most advanced video generation model, supporting over 10 visual creation capabilities in a unified system. Wan 2.6 generates 1080p video at 24fps from text, images, reference videos, or audio,...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "fal/fal-ai/wan/v2.7/image-to-video",
        "name": "Wan",
        "provider": "Remova Media",
        "releasedAt": "2026-03-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Wan 2.7 is the latest generation AI video model, delivering enhanced motion smoothness, superior scene fidelity, and greater visual coherence.",
        "description": "Wan 2.7 is the latest generation AI video model, delivering enhanced motion smoothness, superior scene fidelity, and greater visual coherence.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "kwaipilot/kat-coder-pro-v2",
        "name": "Kwaipilot: KAT-Coder-Pro V2",
        "provider": "Kwaipilot",
        "releasedAt": "2026-03-27",
        "contextLength": 256000,
        "inputPer1M": 0.3,
        "outputPer1M": 1.2,
        "summary": "KAT-Coder-Pro V2 is the latest high-performance model in KwaiKAT’s KAT-Coder series, designed for complex enterprise-grade software engineering and SaaS integration. It builds on the agentic coding strengths of earlier…",
        "description": "KAT-Coder-Pro V2 is the latest high-performance model in KwaiKAT’s KAT-Coder series, designed for complex enterprise-grade software engineering and SaaS integration. It builds on the agentic coding strengths of earlier…",
        "bestFor": [
            "Agent workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "bytedance/seedance-1-5-pro",
        "name": "ByteDance: Seedance 1.5 Pro",
        "provider": "Bytedance",
        "releasedAt": "2026-03-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ByteDance's next-generation audio-visual generation model with a 4.5B parameter Dual-Branch Diffusion Transformer architecture. Seedance 1.5 Pro generates video and audio simultaneously in a single unified pass — elimin…",
        "description": "ByteDance's next-generation audio-visual generation model with a 4.5B parameter Dual-Branch Diffusion Transformer architecture. Seedance 1.5 Pro generates video and audio simultaneously in a single unified pass — elimin…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "frequency_penalty"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "google/veo-3.1",
        "name": "Google: Veo 3.1",
        "provider": "Google",
        "releasedAt": "2026-03-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's state-of-the-art video generation model, built for maximum visual fidelity in final production cuts. Veo 3.1 generates high-quality 1080p video from text or image prompts with native synchronized audio —...",
        "description": "Google's state-of-the-art video generation model, built for maximum visual fidelity in final production cuts. Veo 3.1 generates high-quality 1080p video from text or image prompts with native synchronized audio —...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "openai/sora-2-pro",
        "name": "OpenAI: Sora 2 Pro",
        "provider": "OpenAI",
        "releasedAt": "2026-03-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "OpenAI's flagship video generation model, delivering production-quality video with physics-accurate motion, synchronized audio, and world-state persistence across shots. Sora 2 Pro follows intricate multi-shot instructi…",
        "description": "OpenAI's flagship video generation model, delivering production-quality video with physics-accurate motion, synchronized audio, and world-state persistence across shots. Sora 2 Pro follows intricate multi-shot instructi…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text+image->video",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "presence_penalty",
            "stop",
            "top_logprobs"
        ],
        "source": "llm_catalog",
        "modelType": "video"
    },
    {
        "id": "rekaai/reka-edge",
        "name": "Reka Edge",
        "provider": "Rekaai",
        "releasedAt": "2026-03-20",
        "contextLength": 16384,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.09999999999999999,
        "summary": "Reka Edge is an extremely efficient 7B multimodal vision-language model that accepts image/video+text inputs and generates text outputs. This model is optimized specifically to deliver industry-leading performance in im…",
        "description": "Reka Edge is an extremely efficient 7B multimodal vision-language model that accepts image/video+text inputs and generates text outputs. This model is optimized specifically to deliver industry-leading performance in im…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "max_tokens",
            "presence_penalty",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "minimax/minimax-m2.7",
        "name": "MiniMax: MiniMax M2.7",
        "provider": "Minimax",
        "releasedAt": "2026-03-18",
        "contextLength": 196608,
        "inputPer1M": 0.3,
        "outputPer1M": 1.2,
        "summary": "MiniMax-M2.7 is a next-generation large language model designed for autonomous, real-world productivity and continuous improvement. Built to actively participate in its own evolution, M2.7 integrates advanced agentic ca…",
        "description": "MiniMax-M2.7 is a next-generation large language model designed for autonomous, real-world productivity and continuous improvement. Built to actively participate in its own evolution, M2.7 integrates advanced agentic ca…",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "xiaomi/mimo-v2-omni",
        "name": "Xiaomi: MiMo-V2-Omni",
        "provider": "Xiaomi",
        "releasedAt": "2026-03-18",
        "contextLength": 262144,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "MiMo-V2-Omni is a frontier omni-modal model that natively processes image, video, and audio inputs within a unified architecture. It combines strong multimodal perception with agentic capability - visual grounding, mult…",
        "description": "MiMo-V2-Omni is a frontier omni-modal model that natively processes image, video, and audio inputs within a unified architecture. It combines strong multimodal perception with agentic capability - visual grounding, mult…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "xiaomi/mimo-v2-pro",
        "name": "Xiaomi: MiMo-V2-Pro",
        "provider": "Xiaomi",
        "releasedAt": "2026-03-18",
        "contextLength": 1048576,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "MiMo-V2-Pro is Xiaomi's flagship foundation model, featuring over 1T total parameters and a 1M context length, deeply optimized for agentic scenarios. It is highly adaptable to general agent frameworks like...",
        "description": "MiMo-V2-Pro is Xiaomi's flagship foundation model, featuring over 1T total parameters and a 1M context length, deeply optimized for agentic scenarios. It is highly adaptable to general agent frameworks like...",
        "bestFor": [
            "Agent workflows",
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
            "response_format",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.4-mini",
        "name": "OpenAI: GPT-5.4 Mini",
        "provider": "OpenAI",
        "releasedAt": "2026-03-17",
        "contextLength": 400000,
        "inputPer1M": 0.75,
        "outputPer1M": 4.5,
        "summary": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads. It supports text and image inputs with strong performance across reasoning, coding,...",
        "description": "GPT-5.4 mini brings the core capabilities of GPT-5.4 to a faster, more efficient model optimized for high-throughput workloads. It supports text and image inputs with strong performance across reasoning, coding,...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.4-nano",
        "name": "OpenAI: GPT-5.4 Nano",
        "provider": "OpenAI",
        "releasedAt": "2026-03-17",
        "contextLength": 400000,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 1.25,
        "summary": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks. It supports text and image inputs and is designed for low-latency...",
        "description": "GPT-5.4 nano is the most lightweight and cost-efficient variant of the GPT-5.4 family, optimized for speed-critical and high-volume tasks. It supports text and image inputs and is designed for low-latency...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-small-2603",
        "name": "Mistral: Mistral Small 4",
        "provider": "Mistral AI",
        "releasedAt": "2026-03-16",
        "contextLength": 262144,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "Mistral Small 4 is the next major release in the Mistral Small family, unifying the capabilities of several flagship Mistral models into a single system. It combines strong reasoning from...",
        "description": "Mistral Small 4 is the next major release in the Mistral Small family, unifying the capabilities of several flagship Mistral models into a single system. It combines strong reasoning from...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/pplx-embed-v1-0.6b",
        "name": "Perplexity: Embed V1 0.6B",
        "provider": "Perplexity",
        "releasedAt": "2026-03-16",
        "contextLength": 32000,
        "inputPer1M": 0.004,
        "outputPer1M": 0,
        "summary": "pplx-embed-v1-0.6B is one of Perplexity's state-of-the-art text embedding models built for real-world, web-scale retrieval. pplx-embed-v1 is optimized for standard dense text retrieval with the 0.6B parameter model targ…",
        "description": "pplx-embed-v1-0.6B is one of Perplexity's state-of-the-art text embedding models built for real-world, web-scale retrieval. pplx-embed-v1 is optimized for standard dense text retrieval with the 0.6B parameter model targ…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/pplx-embed-v1-4b",
        "name": "Perplexity: Embed V1 4B",
        "provider": "Perplexity",
        "releasedAt": "2026-03-16",
        "contextLength": 32000,
        "inputPer1M": 0.03,
        "outputPer1M": 0,
        "summary": "pplx-embed-v1 -4B is one of Perplexity's state-of-the-art text embedding models built for real-world, web-scale retrieval. pplx-embed-v1 is optimized for standard dense text retrieval with the 4B parameter model maximiz…",
        "description": "pplx-embed-v1 -4B is one of Perplexity's state-of-the-art text embedding models built for real-world, web-scale retrieval. pplx-embed-v1 is optimized for standard dense text retrieval with the 4B parameter model maximiz…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "presence_penalty",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "z-ai/glm-5-turbo",
        "name": "Z.ai: GLM 5 Turbo",
        "provider": "Z.ai",
        "releasedAt": "2026-03-15",
        "contextLength": 202752,
        "inputPer1M": 1.2,
        "outputPer1M": 4,
        "summary": "GLM-5 Turbo is a new model from Z.ai designed for fast inference and strong performance in agent-driven environments such as OpenClaw scenarios. It is deeply optimized for real-world agent workflows...",
        "description": "GLM-5 Turbo is a new model from Z.ai designed for fast inference and strong performance in agent-driven environments such as OpenClaw scenarios. It is deeply optimized for real-world agent workflows...",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-3-super-120b-a12b",
        "name": "NVIDIA: Nemotron 3 Super",
        "provider": "Nvidia",
        "releasedAt": "2026-03-11",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 0.44999999999999996,
        "summary": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer...",
        "description": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer...",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-3-super-120b-a12b:free",
        "name": "NVIDIA: Nemotron 3 Super (free)",
        "provider": "Nvidia",
        "releasedAt": "2026-03-11",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer...",
        "description": "NVIDIA Nemotron 3 Super is a 120B-parameter open hybrid MoE model, activating just 12B parameters for maximum compute efficiency and accuracy in complex multi-agent applications. Built on a hybrid Mamba-Transformer...",
        "bestFor": [
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "bytedance-seed/seed-2.0-lite",
        "name": "ByteDance Seed: Seed-2.0-Lite",
        "provider": "ByteDance Seed",
        "releasedAt": "2026-03-10",
        "contextLength": 262144,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "Seed-2.0-Lite is a versatile, cost‑efficient enterprise workhorse that delivers strong multimodal and agent capabilities while offering noticeably lower latency, making it a practical default choice for most production…",
        "description": "Seed-2.0-Lite is a versatile, cost‑efficient enterprise workhorse that delivers strong multimodal and agent capabilities while offering noticeably lower latency, making it a practical default choice for most production…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-9b",
        "name": "Qwen: Qwen3.5-9B",
        "provider": "Qwen",
        "releasedAt": "2026-03-10",
        "contextLength": 262144,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.15,
        "summary": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture. It uses a unified vision-language de…",
        "description": "Qwen3.5-9B is a multimodal foundation model from the Qwen3.5 family, designed to deliver strong reasoning, coding, and visual understanding in an efficient 9B-parameter architecture. It uses a unified vision-language de…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/pro/motion-control",
        "name": "Kling Video",
        "provider": "Remova Media",
        "releasedAt": "2026-03-05",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transfer movements from a reference video to any character image. Cost-effective mode for motion transfer, perfect for portraits and simple animations.",
        "description": "Transfer movements from a reference video to any character image. Cost-effective mode for motion transfer, perfect for portraits and simple animations.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/standard/motion-control",
        "name": "Kling Video",
        "provider": "Remova Media",
        "releasedAt": "2026-03-05",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transfer movements from a reference video to any character image. Cost-effective mode for motion transfer, perfect for portraits and simple animations.",
        "description": "Transfer movements from a reference video to any character image. Cost-effective mode for motion transfer, perfect for portraits and simple animations.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/ltx-2.3/image-to-video/fast",
        "name": "LTX 2.3 Video Fast",
        "provider": "Remova Media",
        "releasedAt": "2026-03-05",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "LTX-2.3 is a high-quality, fast AI video model available in Pro and Fast variants for text-to-video, image-to-video, and audio-to-video.",
        "description": "LTX-2.3 is a high-quality, fast AI video model available in Pro and Fast variants for text-to-video, image-to-video, and audio-to-video.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/ltx-2.3/image-to-video",
        "name": "LTX 2.3 Video Pro",
        "provider": "Remova Media",
        "releasedAt": "2026-03-05",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "LTX-2.3 is a high-quality, fast AI video model available in Pro and Fast variants for text-to-video, image-to-video, and audio-to-video.",
        "description": "LTX-2.3 is a high-quality, fast AI video model available in Pro and Fast variants for text-to-video, image-to-video, and audio-to-video.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-5.4",
        "name": "OpenAI: GPT-5.4",
        "provider": "OpenAI",
        "releasedAt": "2026-03-05",
        "contextLength": 1050000,
        "inputPer1M": 2.5,
        "outputPer1M": 15,
        "summary": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for...",
        "description": "GPT-5.4 is OpenAI’s latest frontier model, unifying the Codex and GPT lines into a single system. It features a 1M+ token context window (922K input, 128K output) with support for...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.4-pro",
        "name": "OpenAI: GPT-5.4 Pro",
        "provider": "OpenAI",
        "releasedAt": "2026-03-05",
        "contextLength": 1050000,
        "inputPer1M": 30,
        "outputPer1M": 180,
        "summary": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K...",
        "description": "GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "inception/mercury-2",
        "name": "Inception: Mercury 2",
        "provider": "Inception",
        "releasedAt": "2026-03-04",
        "contextLength": 128000,
        "inputPer1M": 0.25,
        "outputPer1M": 0.75,
        "summary": "Mercury 2 is an extremely fast reasoning LLM, and the first reasoning diffusion LLM (dLLM). Instead of generating tokens sequentially, Mercury 2 produces and refines multiple tokens in parallel, achieving...",
        "description": "Mercury 2 is an extremely fast reasoning LLM, and the first reasoning diffusion LLM (dLLM). Instead of generating tokens sequentially, Mercury 2 produces and refines multiple tokens in parallel, achieving...",
        "bestFor": [
            "Agent workflows",
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/pixelcut/background-removal",
        "name": "Pixelcut Background Remover",
        "provider": "Pixelcut",
        "releasedAt": "2026-03-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Pixelcut’s Background Remover enables fast, ultra high-quality removal of backgrounds from images. Perfect for e-commerce and image editing workflows. Powered by advanced AI for clean, perfect cutouts every time.",
        "description": "Pixelcut’s Background Remover enables fast, ultra high-quality removal of backgrounds from images. Perfect for e-commerce and image editing workflows. Powered by advanced AI for clean, perfect cutouts every time.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-3.1-flash-lite-preview",
        "name": "Google: Gemini 3.1 Flash Lite Preview",
        "provider": "Google",
        "releasedAt": "2026-03-03",
        "contextLength": 1048576,
        "inputPer1M": 0.25,
        "outputPer1M": 1.5,
        "summary": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases. It outperforms Gemini 2.5 Flash Lite on overall quality and approaches Gemini 2.5 Flash performance across...",
        "description": "Gemini 3.1 Flash Lite Preview is Google's high-efficiency model optimized for high-volume use cases. It outperforms Gemini 2.5 Flash Lite on overall quality and approaches Gemini 2.5 Flash performance across...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.3-chat",
        "name": "OpenAI: GPT-5.3 Chat",
        "provider": "OpenAI",
        "releasedAt": "2026-03-03",
        "contextLength": 128000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.3 Chat is an update to ChatGPT's most-used model that makes everyday conversations smoother, more useful, and more directly helpful. It delivers more accurate answers with better contextualization and significantl…",
        "description": "GPT-5.3 Chat is an update to ChatGPT's most-used model that makes everyday conversations smoother, more useful, and more directly helpful. It delivers more accurate answers with better contextualization and significantl…",
        "bestFor": [
            "Image workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/qwen-image-2/pro/edit",
        "name": "Qwen Image 2",
        "provider": "Remova Media",
        "releasedAt": "2026-03-03",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen-Image-2.0 is a next-generation foundational unified generation-and-editing model",
        "description": "Qwen-Image-2.0 is a next-generation foundational unified generation-and-editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/qwen-image-2/edit",
        "name": "Qwen Image 2",
        "provider": "Remova Media",
        "releasedAt": "2026-03-03",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen-Image-2.0 is a next-generation foundational unified generation-and-editing model",
        "description": "Qwen-Image-2.0 is a next-generation foundational unified generation-and-editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "bytedance-seed/seed-2.0-mini",
        "name": "ByteDance Seed: Seed-2.0-Mini",
        "provider": "ByteDance Seed",
        "releasedAt": "2026-02-26",
        "contextLength": 262144,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.39999999999999997,
        "summary": "Seed-2.0-mini targets latency-sensitive, high-concurrency, and cost-sensitive scenarios, emphasizing fast response and flexible inference deployment. It delivers performance comparable to ByteDance-Seed-1.6, supports 25…",
        "description": "Seed-2.0-mini targets latency-sensitive, high-concurrency, and cost-sensitive scenarios, emphasizing fast response and flexible inference deployment. It delivers performance comparable to ByteDance-Seed-1.6, supports 25…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/gemini-3.1-flash-image-preview/edit",
        "name": "Gemini 3.1 Flash Image Preview",
        "provider": "Remova Media",
        "releasedAt": "2026-02-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemini 3.1 Flash Image (a.k.a. Nano Banana 2) is Google's new state-of-the-art fast image generation and editing model",
        "description": "Gemini 3.1 Flash Image (a.k.a. Nano Banana 2) is Google's new state-of-the-art fast image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/gemini-3.1-flash-image-preview",
        "name": "Gemini 3.1 Flash Image Preview",
        "provider": "Remova Media",
        "releasedAt": "2026-02-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemini 3.1 Flash Image (a.k.a Nano Banana 2) is Google's new state-of-the-art fast image generation and editing model",
        "description": "Gemini 3.1 Flash Image (a.k.a Nano Banana 2) is Google's new state-of-the-art fast image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-3.1-flash-image-preview",
        "name": "Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview)",
        "provider": "Google",
        "releasedAt": "2026-02-26",
        "contextLength": 65536,
        "inputPer1M": 0.5,
        "outputPer1M": 3,
        "summary": "Gemini 3.1 Flash Image Preview, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines...",
        "description": "Gemini 3.1 Flash Image Preview, a.k.a. \"Nano Banana 2,\" is Google’s latest state of the art image generation and editing model, delivering Pro-level visual quality at Flash speed. It combines...",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "fal/fal-ai/nano-banana-2/edit",
        "name": "Nano Banana 2",
        "provider": "Remova Media",
        "releasedAt": "2026-02-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Nano Banana 2 is Google's new state-of-the-art image generation and editing model",
        "description": "Nano Banana 2 is Google's new state-of-the-art image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/nano-banana-2",
        "name": "Nano Banana 2",
        "provider": "Remova Media",
        "releasedAt": "2026-02-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Nano Banana 2 is Google's new state-of-the-art fast image generation and editing model",
        "description": "Nano Banana 2 is Google's new state-of-the-art fast image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-3.1-pro-preview-customtools",
        "name": "Google: Gemini 3.1 Pro Preview Custom Tools",
        "provider": "Google",
        "releasedAt": "2026-02-25",
        "contextLength": 1048576,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party...",
        "description": "Gemini 3.1 Pro Preview Custom Tools is a variant of Gemini 3.1 Pro that improves tool selection behavior by preventing overuse of a general bash tool when more efficient third-party...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "liquid/lfm-2-24b-a2b",
        "name": "LiquidAI: LFM2-24B-A2B",
        "provider": "Liquid",
        "releasedAt": "2026-02-25",
        "contextLength": 32768,
        "inputPer1M": 0.03,
        "outputPer1M": 0.12,
        "summary": "LFM2-24B-A2B is the largest model in the LFM2 family of hybrid architectures designed for efficient on-device deployment. Built as a 24B parameter Mixture-of-Experts model with only 2B active parameters per...",
        "description": "LFM2-24B-A2B is the largest model in the LFM2 family of hybrid architectures designed for efficient on-device deployment. Built as a 24B parameter Mixture-of-Experts model with only 2B active parameters per...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/llama-nemotron-embed-vl-1b-v2:free",
        "name": "NVIDIA: Llama Nemotron Embed VL 1B V2 (free)",
        "provider": "Nvidia",
        "releasedAt": "2026-02-25",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "The Llama Nemotron Embed VL 1B V2 embedding model is optimized for multimodal question-answering retrieval. The model can embed 'documents' in the form of image, text, or image and text...",
        "description": "The Llama Nemotron Embed VL 1B V2 embedding model is optimized for multimodal question-answering retrieval. The model can embed 'documents' in the form of image, text, or image and text...",
        "bestFor": [
            "Image workflows",
            "Embeddings"
        ],
        "modality": "text+image->embeddings",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "embeddings"
        ],
        "supportedParameters": [
            "max_tokens",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-122b-a10b",
        "name": "Qwen: Qwen3.5-122B-A10B",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 262144,
        "inputPer1M": 0.26,
        "outputPer1M": 2.08,
        "summary": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. In terms o…",
        "description": "The Qwen3.5 122B-A10B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. In terms o…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-27b",
        "name": "Qwen: Qwen3.5-27B",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 262144,
        "inputPer1M": 0.195,
        "outputPer1M": 1.56,
        "summary": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance. Its overall capabilities are comparable to th…",
        "description": "The Qwen3.5 27B native vision-language Dense model incorporates a linear attention mechanism, delivering fast response times while balancing inference speed and performance. Its overall capabilities are comparable to th…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-35b-a3b",
        "name": "Qwen: Qwen3.5-35B-A3B",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 262144,
        "inputPer1M": 0.1625,
        "outputPer1M": 1.3,
        "summary": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency.…",
        "description": "The Qwen3.5 Series 35B-A3B is a native vision-language model designed with a hybrid architecture that integrates linear attention mechanisms and a sparse mixture-of-experts model, achieving higher inference efficiency.…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-flash-02-23",
        "name": "Qwen: Qwen3.5-Flash",
        "provider": "Qwen",
        "releasedAt": "2026-02-25",
        "contextLength": 1000000,
        "inputPer1M": 0.065,
        "outputPer1M": 0.26,
        "summary": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. Compared to…",
        "description": "The Qwen3.5 native vision-language Flash models are built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. Compared to…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.3-codex",
        "name": "OpenAI: GPT-5.3-Codex",
        "provider": "OpenAI",
        "releasedAt": "2026-02-24",
        "contextLength": 400000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2. It ac…",
        "description": "GPT-5.3-Codex is OpenAI’s most advanced agentic coding model, combining the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2. It ac…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "aion-labs/aion-2.0",
        "name": "AionLabs: Aion-2.0",
        "provider": "Aion Labs",
        "releasedAt": "2026-02-23",
        "contextLength": 131072,
        "inputPer1M": 0.7999999999999999,
        "outputPer1M": 1.5999999999999999,
        "summary": "Aion-2.0 is a variant of DeepSeek V3.2 optimized for immersive roleplaying and storytelling. It is particularly strong at introducing tension, crises, and conflict into stories, making narratives feel more engaging....",
        "description": "Aion-2.0 is a variant of DeepSeek V3.2 optimized for immersive roleplaying and storytelling. It is particularly strong at introducing tension, crises, and conflict into stories, making narratives feel more engaging....",
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
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bytedance/seedream/v5/lite/edit",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2026-02-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image editing endpoint for the fast Lite version of Seedream 5.0, supporting high quality intelligent image editing with multiple inputs.",
        "description": "Image editing endpoint for the fast Lite version of Seedream 5.0, supporting high quality intelligent image editing with multiple inputs.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedream/v5/lite/text-to-image",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2026-02-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text to Image endpoint for the fast Lite version of Seedream 5.0, supporting high quality intelligent text-to-image generation.",
        "description": "Text to Image endpoint for the fast Lite version of Seedream 5.0, supporting high quality intelligent text-to-image generation.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-3.1-pro-preview",
        "name": "Google: Gemini 3.1 Pro Preview",
        "provider": "Google",
        "releasedAt": "2026-02-19",
        "contextLength": 1048576,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the m…",
        "description": "Gemini 3.1 Pro Preview is Google’s frontier reasoning model, delivering enhanced software engineering performance, improved agentic reliability, and more efficient token usage across complex workflows. Building on the m…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-sonnet-4.6",
        "name": "Anthropic: Claude Sonnet 4.6",
        "provider": "Anthropic",
        "releasedAt": "2026-02-17",
        "contextLength": 1000000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project…",
        "description": "Sonnet 4.6 is Anthropic's most capable Sonnet-class model yet, with frontier performance across coding, agents, and professional work. It excels at iterative development, complex codebase navigation, end-to-end project…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_completion_tokens",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-397b-a17b",
        "name": "Qwen: Qwen3.5 397B A17B",
        "provider": "Qwen",
        "releasedAt": "2026-02-16",
        "contextLength": 262144,
        "inputPer1M": 0.39,
        "outputPer1M": 2.34,
        "summary": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. It…",
        "description": "The Qwen3.5 series 397B-A17B native vision-language model is built on a hybrid architecture that integrates a linear attention mechanism with a sparse mixture-of-experts model, achieving higher inference efficiency. It…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3.5-plus-02-15",
        "name": "Qwen: Qwen3.5 Plus 2026-02-15",
        "provider": "Qwen",
        "releasedAt": "2026-02-16",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 1.56,
        "summary": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency. In a var…",
        "description": "The Qwen3.5 native vision-language series Plus models are built on a hybrid architecture that integrates linear attention mechanisms with sparse mixture-of-experts models, achieving higher inference efficiency. In a var…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "minimax/minimax-m2.5",
        "name": "MiniMax: MiniMax M2.5",
        "provider": "Minimax",
        "releasedAt": "2026-02-12",
        "contextLength": 196608,
        "inputPer1M": 0.15,
        "outputPer1M": 1.15,
        "summary": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1...",
        "description": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "minimax/minimax-m2.5:free",
        "name": "MiniMax: MiniMax M2.5 (free)",
        "provider": "Minimax",
        "releasedAt": "2026-02-12",
        "contextLength": 196608,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1...",
        "description": "MiniMax-M2.5 is a SOTA large language model designed for real-world productivity. Trained in a diverse range of complex real-world digital working environments, M2.5 builds upon the coding expertise of M2.1...",
        "bestFor": [
            "Agent workflows",
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
            "stop",
            "temperature",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/recraft/v4/text-to-image",
        "name": "Recraft V4",
        "provider": "Remova Media",
        "releasedAt": "2026-02-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Recraft V4 was developed with designers to bring true visual taste to AI image generation. Built for brand systems and production-ready workflows, it goes beyond prompt accuracy delivering stronger composition, refined…",
        "description": "Recraft V4 was developed with designers to bring true visual taste to AI image generation. Built for brand systems and production-ready workflows, it goes beyond prompt accuracy delivering stronger composition, refined…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/recraft/v4/pro/text-to-image",
        "name": "Recraft V4 Pro",
        "provider": "Remova Media",
        "releasedAt": "2026-02-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Recraft V4 was developed with designers to bring true visual taste to AI image generation. Built for brand systems and production-ready workflows, it goes beyond prompt accuracy — delivering stronger composition, refine…",
        "description": "Recraft V4 was developed with designers to bring true visual taste to AI image generation. Built for brand systems and production-ready workflows, it goes beyond prompt accuracy — delivering stronger composition, refine…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "z-ai/glm-5",
        "name": "Z.ai: GLM 5",
        "provider": "Z.ai",
        "releasedAt": "2026-02-11",
        "contextLength": 202752,
        "inputPer1M": 0.6,
        "outputPer1M": 2.08,
        "summary": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programm…",
        "description": "GLM-5 is Z.ai’s flagship open-source foundation model engineered for complex systems design and long-horizon agent workflows. Built for expert developers, it delivers production-grade performance on large-scale programm…",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-max-thinking",
        "name": "Qwen: Qwen3 Max Thinking",
        "provider": "Qwen",
        "releasedAt": "2026-02-09",
        "contextLength": 262144,
        "inputPer1M": 0.78,
        "outputPer1M": 3.9,
        "summary": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning. By significantly scaling model capacity and reinforcement learnin…",
        "description": "Qwen3-Max-Thinking is the flagship reasoning model in the Qwen3 series, designed for high-stakes cognitive tasks that require deep, multi-step reasoning. By significantly scaling model capacity and reinforcement learnin…",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-opus-4.6",
        "name": "Anthropic: Claude Opus 4.6",
        "provider": "Anthropic",
        "releasedAt": "2026-02-04",
        "contextLength": 1000000,
        "inputPer1M": 5,
        "outputPer1M": 25,
        "summary": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective...",
        "description": "Opus 4.6 is Anthropic’s strongest model for coding and long-running professional tasks. It is built for agents that operate across entire workflows rather than single prompts, making it especially effective...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_completion_tokens",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/o3/pro/video-to-video/edit",
        "name": "Kling O3 Edit Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Edit videos using Kling O3 from Kling Team!",
        "description": "Edit videos using Kling O3 from Kling Team!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/o3/pro/image-to-video",
        "name": "Kling O3 Image to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate a video by taking a start frame and an end frame, animating the transition between them while following text-driven style and scene guidance.",
        "description": "Generate a video by taking a start frame and an end frame, animating the transition between them while following text-driven style and scene guidance.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/o3/standard/image-to-video",
        "name": "Kling O3 Image to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate a video by taking a start frame and an end frame, animating the transition between them while following text-driven style and scene guidance.",
        "description": "Generate a video by taking a start frame and an end frame, animating the transition between them while following text-driven style and scene guidance.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/o3/pro/reference-to-video",
        "name": "Kling O3 Reference to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transform images, elements, and text into consistent, high-quality video scenes, ensuring stable character identity, object details, and environments.",
        "description": "Transform images, elements, and text into consistent, high-quality video scenes, ensuring stable character identity, object details, and environments.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/o3/standard/reference-to-video",
        "name": "Kling O3 Reference to Video [Standard]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transform images, elements, and text into consistent, high-quality video scenes, ensuring stable character identity, object details, and environments.",
        "description": "Transform images, elements, and text into consistent, high-quality video scenes, ensuring stable character identity, object details, and environments.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/o3/pro/text-to-video",
        "name": "Kling O3 Text to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate realistic videos using Kling O3 from Kling Team!",
        "description": "Generate realistic videos using Kling O3 from Kling Team!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/pro/image-to-video",
        "name": "Kling Video v3 Image to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 3.0 Pro: Top-tier image-to-video with cinematic visuals, fluid motion, and native audio generation, with custom element support.",
        "description": "Kling 3.0 Pro: Top-tier image-to-video with cinematic visuals, fluid motion, and native audio generation, with custom element support.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/standard/image-to-video",
        "name": "Kling Video v3 Image to Video [Standard]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 3.0 Standard: Top-tier image-to-video with cinematic visuals, fluid motion, and native audio generation, with custom element support.",
        "description": "Kling 3.0 Standard: Top-tier image-to-video with cinematic visuals, fluid motion, and native audio generation, with custom element support.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/pro/text-to-video",
        "name": "Kling Video v3 Text to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 3.0 Pro: Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation, with multi-shot support.",
        "description": "Kling 3.0 Pro: Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation, with multi-shot support.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v3/standard/text-to-video",
        "name": "Kling Video v3 Text to Video [Standard]",
        "provider": "Remova Media",
        "releasedAt": "2026-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 3.0 Standard: Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation, with multi-shot support.",
        "description": "Kling 3.0 Standard: Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation, with multi-shot support.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "qwen/qwen3-coder-next",
        "name": "Qwen: Qwen3 Coder Next",
        "provider": "Qwen",
        "releasedAt": "2026-02-04",
        "contextLength": 262144,
        "inputPer1M": 0.14,
        "outputPer1M": 0.7999999999999999,
        "summary": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows. It uses a sparse MoE design with 80B total parameters and only 3B activated per...",
        "description": "Qwen3-Coder-Next is an open-weight causal language model optimized for coding agents and local development workflows. It uses a sparse MoE design with 80B total parameters and only 3B activated per...",
        "bestFor": [
            "Agent workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sourceful/riverflow-v2-fast",
        "name": "Sourceful: Riverflow V2 Fast",
        "provider": "Sourceful",
        "releasedAt": "2026-02-02",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Riverflow V2 Fast is the fastest variant of Sourceful's Riverflow 2.0 lineup, best for production deployments and latency-critical workflows. The Riverflow 2.0 series represents SOTA performance on image generation and.…",
        "description": "Riverflow V2 Fast is the fastest variant of Sourceful's Riverflow 2.0 lineup, best for production deployments and latency-critical workflows. The Riverflow 2.0 series represents SOTA performance on image generation and.…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "sourceful/riverflow-v2-pro",
        "name": "Sourceful: Riverflow V2 Pro",
        "provider": "Sourceful",
        "releasedAt": "2026-02-02",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Riverflow V2 Pro is the most powerful variant of Sourceful's Riverflow 2.0 lineup, best for top-tier control and perfect text rendering. The Riverflow 2.0 series represents SOTA performance on image...",
        "description": "Riverflow V2 Pro is the most powerful variant of Sourceful's Riverflow 2.0 lineup, best for top-tier control and perfect text rendering. The Riverflow 2.0 series represents SOTA performance on image...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "fal/xai/grok-imagine-image/edit",
        "name": "Grok Imagine Image",
        "provider": "xAI",
        "releasedAt": "2026-01-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Edit images precisely with xAI's Grok Imagine model",
        "description": "Edit images precisely with xAI's Grok Imagine model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/xai/grok-imagine-image",
        "name": "Grok Imagine Image",
        "provider": "xAI",
        "releasedAt": "2026-01-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate highly aesthetic images with xAI's Grok Imagine Image generation model.",
        "description": "Generate highly aesthetic images with xAI's Grok Imagine Image generation model.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/xai/grok-imagine-video/image-to-video",
        "name": "Grok Imagine Video",
        "provider": "xAI",
        "releasedAt": "2026-01-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos from images with audio using xAI's Grok Imagine Video model.",
        "description": "Generate videos from images with audio using xAI's Grok Imagine Video model.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/xai/grok-imagine-video/text-to-video",
        "name": "Grok Imagine Video",
        "provider": "xAI",
        "releasedAt": "2026-01-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos with audio from text using Grok Imagine Video.",
        "description": "Generate videos with audio from text using Grok Imagine Video.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "stepfun/step-3.5-flash",
        "name": "StepFun: Step 3.5 Flash",
        "provider": "Stepfun",
        "releasedAt": "2026-01-29",
        "contextLength": 262144,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.3,
        "summary": "Step 3.5 Flash is StepFun's most capable open-source foundation model. Built on a sparse Mixture of Experts (MoE) architecture, it selectively activates only 11B of its 196B parameters per token....",
        "description": "Step 3.5 Flash is StepFun's most capable open-source foundation model. Built on a sparse Mixture of Experts (MoE) architecture, it selectively activates only 11B of its 196B parameters per token....",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "arcee-ai/trinity-large-preview",
        "name": "Arcee AI: Trinity Large Preview",
        "provider": "Arcee Ai",
        "releasedAt": "2026-01-27",
        "contextLength": 131000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.44999999999999996,
        "summary": "Trinity-Large-Preview is a frontier-scale open-weight language model from Arcee, built as a 400B-parameter sparse Mixture-of-Experts with 13B active parameters per token using 4-of-256 expert routing. It excels in creat…",
        "description": "Trinity-Large-Preview is a frontier-scale open-weight language model from Arcee, built as a 400B-parameter sparse Mixture-of-Experts with 13B active parameters per token using 4-of-256 expert routing. It excels in creat…",
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
            "max_tokens",
            "response_format",
            "structured_outputs",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/hunyuan-3d/v3.1/pro/image-to-3d",
        "name": "Hunyuan 3D Pro Image to 3D",
        "provider": "Remova Media",
        "releasedAt": "2026-01-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate 3D models from images with Hunyuan 3D Pro",
        "description": "Generate 3D models from images with Hunyuan 3D Pro",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->3d",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "3d"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-3d",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "moonshotai/kimi-k2.5",
        "name": "MoonshotAI: Kimi K2.5",
        "provider": "Moonshotai",
        "releasedAt": "2026-01-27",
        "contextLength": 262144,
        "inputPer1M": 0.44,
        "outputPer1M": 2,
        "summary": "Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability and a self-directed agent swarm paradigm. Built on Kimi K2 with continued pretraining over approximately 15T mixed…",
        "description": "Kimi K2.5 is Moonshot AI's native multimodal model, delivering state-of-the-art visual coding capability and a self-directed agent swarm paradigm. Built on Kimi K2 with continued pretraining over approximately 15T mixed…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "logit_bias",
            "logprobs",
            "max_tokens",
            "min_p",
            "parallel_tool_calls",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "upstage/solar-pro-3",
        "name": "Upstage: Solar Pro 3",
        "provider": "Upstage",
        "releasedAt": "2026-01-27",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "Solar Pro 3 is Upstage's powerful Mixture-of-Experts (MoE) language model. With 102B total parameters and 12B active parameters per forward pass, it delivers exceptional performance while maintaining computational effic…",
        "description": "Solar Pro 3 is Upstage's powerful Mixture-of-Experts (MoE) language model. With 102B total parameters and 12B active parameters per forward pass, it delivers exceptional performance while maintaining computational effic…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "minimax/minimax-m2-her",
        "name": "MiniMax: MiniMax M2-her",
        "provider": "Minimax",
        "releasedAt": "2026-01-23",
        "contextLength": 65536,
        "inputPer1M": 0.3,
        "outputPer1M": 1.2,
        "summary": "MiniMax M2-her is a dialogue-first large language model built for immersive roleplay, character-driven chat, and expressive multi-turn conversations. Designed to stay consistent in tone and personality, it supports rich…",
        "description": "MiniMax M2-her is a dialogue-first large language model built for immersive roleplay, character-driven chat, and expressive multi-turn conversations. Designed to stay consistent in tone and personality, it supports rich…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "writer/palmyra-x5",
        "name": "Writer: Palmyra X5",
        "provider": "Writer",
        "releasedAt": "2026-01-21",
        "contextLength": 1040000,
        "inputPer1M": 0.6,
        "outputPer1M": 6,
        "summary": "Palmyra X5 is Writer's most advanced model, purpose-built for building and scaling AI agents across the enterprise. It delivers industry-leading speed and efficiency on context windows up to 1 million...",
        "description": "Palmyra X5 is Writer's most advanced model, purpose-built for building and scaling AI agents across the enterprise. It delivers industry-leading speed and efficiency on context windows up to 1 million...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "liquid/lfm-2.5-1.2b-instruct:free",
        "name": "LiquidAI: LFM2.5-1.2B-Instruct (free)",
        "provider": "Liquid",
        "releasedAt": "2026-01-20",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "LFM2.5-1.2B-Instruct is a compact, high-performance instruction-tuned model built for fast on-device AI. It delivers strong chat quality in a 1.2B parameter footprint, with efficient edge inference and broad runtime sup…",
        "description": "LFM2.5-1.2B-Instruct is a compact, high-performance instruction-tuned model built for fast on-device AI. It delivers strong chat quality in a 1.2B parameter footprint, with efficient edge inference and broad runtime sup…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "liquid/lfm-2.5-1.2b-thinking:free",
        "name": "LiquidAI: LFM2.5-1.2B-Thinking (free)",
        "provider": "Liquid",
        "releasedAt": "2026-01-20",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "LFM2.5-1.2B-Thinking is a lightweight reasoning-focused model optimized for agentic tasks, data extraction, and RAG—while still running comfortably on edge devices. It supports long context (up to 32K tokens) and is...",
        "description": "LFM2.5-1.2B-Thinking is a lightweight reasoning-focused model optimized for agentic tasks, data extraction, and RAG—while still running comfortably on edge devices. It supports long context (up to 32K tokens) and is...",
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
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-audio",
        "name": "OpenAI: GPT Audio",
        "provider": "OpenAI",
        "releasedAt": "2026-01-19",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The gpt-audio model is OpenAI's first generally available audio model. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Audio is priced...",
        "description": "The gpt-audio model is OpenAI's first generally available audio model. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Audio is priced...",
        "bestFor": [
            "Audio workflows",
            "Agent workflows",
            "Code generation"
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
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "audio"
    },
    {
        "id": "openai/gpt-audio-mini",
        "name": "OpenAI: GPT Audio Mini",
        "provider": "OpenAI",
        "releasedAt": "2026-01-19",
        "contextLength": 128000,
        "inputPer1M": 0.6,
        "outputPer1M": 2.4,
        "summary": "A cost-efficient version of GPT Audio. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Input is priced at $0.60 per million...",
        "description": "A cost-efficient version of GPT Audio. The new snapshot features an upgraded decoder for more natural sounding voices and maintains better voice consistency. Input is priced at $0.60 per million...",
        "bestFor": [
            "Audio workflows",
            "Agent workflows",
            "Code generation"
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
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "audio"
    },
    {
        "id": "z-ai/glm-4.7-flash",
        "name": "Z.ai: GLM 4.7 Flash",
        "provider": "Z.ai",
        "releasedAt": "2026-01-19",
        "contextLength": 202752,
        "inputPer1M": 0.06,
        "outputPer1M": 0.39999999999999997,
        "summary": "As a 30B-class SOTA model, GLM-4.7-Flash offers a new option that balances performance and efficiency. It is further optimized for agentic coding use cases, strengthening coding capabilities, long-horizon task planning,…",
        "description": "As a 30B-class SOTA model, GLM-4.7-Flash offers a new option that balances performance and efficiency. It is further optimized for agentic coding use cases, strengthening coding capabilities, long-horizon task planning,…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-2/klein/9b",
        "name": "FLUX.2 [klein] 9B",
        "provider": "Remova Media",
        "releasedAt": "2026-01-15",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with FLUX.2 [klein] 9B from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities.",
        "description": "Text-to-image generation with FLUX.2 [klein] 9B from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2/klein/9b/edit",
        "name": "FLUX.2 [klein] 9B",
        "provider": "Remova Media",
        "releasedAt": "2026-01-15",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image-to-image editing with FLUX.2 [klein] 9B from Black Forest Labs. Precise modifications using natural language descriptions and hex color control.",
        "description": "Image-to-image editing with FLUX.2 [klein] 9B from Black Forest Labs. Precise modifications using natural language descriptions and hex color control.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "black-forest-labs/flux.2-klein-4b",
        "name": "Black Forest Labs: FLUX.2 Klein 4B",
        "provider": "Black Forest Labs",
        "releasedAt": "2026-01-14",
        "contextLength": 40960,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.2 [klein] 4B is the fastest and most cost-effective model in the FLUX.2 family, optimized for high-throughput use cases while maintaining excellent image quality. Pricing is based on the output...",
        "description": "FLUX.2 [klein] 4B is the fastest and most cost-effective model in the FLUX.2 family, optimized for high-throughput use cases while maintaining excellent image quality. Pricing is based on the output...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [
            "seed"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "fal/fal-ai/elevenlabs/speech-to-text/scribe-v2",
        "name": "ElevenLabs Speech to Text - Scribe V2",
        "provider": "Remova Media",
        "releasedAt": "2026-01-14",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Use Scribe-V2 from ElevenLabs to do blazingly fast speech to text inferences!",
        "description": "Use Scribe-V2 from ElevenLabs to do blazingly fast speech to text inferences!",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "audio->text",
        "inputModalities": [
            "audio"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "speech-to-text",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-5.2-codex",
        "name": "OpenAI: GPT-5.2-Codex",
        "provider": "OpenAI",
        "releasedAt": "2026-01-14",
        "contextLength": 400000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineer…",
        "description": "GPT-5.2-Codex is an upgraded version of GPT-5.1-Codex optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineer…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/qwen-image-edit-2511-multiple-angles",
        "name": "Qwen Image Edit 2511 Multiple Angles",
        "provider": "Remova Media",
        "releasedAt": "2026-01-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generates same scene from different angles (azimuth/elevation) with Qwen image Edit 2511 and the Lora Multiple Angles",
        "description": "Generates same scene from different angles (azimuth/elevation) with Qwen image Edit 2511 and the Lora Multiple Angles",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "allenai/olmo-3.1-32b-instruct",
        "name": "AllenAI: Olmo 3.1 32B Instruct",
        "provider": "Allenai",
        "releasedAt": "2026-01-06",
        "contextLength": 65536,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.6,
        "summary": "Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the O…",
        "description": "Olmo 3.1 32B Instruct is a large-scale, 32-billion-parameter instruction-tuned language model engineered for high-performance conversational AI, multi-turn dialogue, and practical instruction following. As part of the O…",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1.5/pro/image-to-video",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2025-12-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos with audio with Seedance 1.5 (supports start & end frame)",
        "description": "Generate videos with audio with Seedance 1.5 (supports start & end frame)",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1.5/pro/text-to-video",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2025-12-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos with audio with Seedance 1.5",
        "description": "Generate videos with audio with Seedance 1.5",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "bytedance-seed/seed-1.6",
        "name": "ByteDance Seed: Seed 1.6",
        "provider": "ByteDance Seed",
        "releasedAt": "2025-12-23",
        "contextLength": 262144,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.",
        "description": "Seed 1.6 is a general-purpose model released by the ByteDance Seed team. It incorporates multimodal capabilities and adaptive deep thinking with a 256K context window.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "bytedance-seed/seed-1.6-flash",
        "name": "ByteDance Seed: Seed 1.6 Flash",
        "provider": "ByteDance Seed",
        "releasedAt": "2025-12-23",
        "contextLength": 262144,
        "inputPer1M": 0.075,
        "outputPer1M": 0.3,
        "summary": "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of...",
        "description": "Seed 1.6 Flash is an ultra-fast multimodal deep thinking model by ByteDance Seed, supporting both text and visual understanding. It features a 256k context window and can generate outputs of...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "bytedance-seed/seedream-4.5",
        "name": "ByteDance Seed: Seedream 4.5",
        "provider": "ByteDance Seed",
        "releasedAt": "2025-12-23",
        "contextLength": 4096,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, including better preservation of…",
        "description": "Seedream 4.5 is the latest in-house image generation model developed by ByteDance. Compared with Seedream 4.0, it delivers comprehensive improvements, especially in editing consistency, including better preservation of…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [
            "frequency_penalty",
            "max_tokens",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "minimax/minimax-m2.1",
        "name": "MiniMax: MiniMax M2.1",
        "provider": "Minimax",
        "releasedAt": "2025-12-23",
        "contextLength": 196608,
        "inputPer1M": 0.29,
        "outputPer1M": 0.95,
        "summary": "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in re…",
        "description": "MiniMax-M2.1 is a lightweight, state-of-the-art large language model optimized for coding, agentic workflows, and modern application development. With only 10 billion activated parameters, it delivers a major jump in re…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/elevenlabs/music",
        "name": "Elevenlabs Music",
        "provider": "Remova Media",
        "releasedAt": "2025-12-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate high quality, realistic music with fine controls using Elevenlabs Music!",
        "description": "Generate high quality, realistic music with fine controls using Elevenlabs Music!",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-audio",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "z-ai/glm-4.7",
        "name": "Z.ai: GLM 4.7",
        "provider": "Z.ai",
        "releasedAt": "2025-12-22",
        "contextLength": 202752,
        "inputPer1M": 0.38,
        "outputPer1M": 1.74,
        "summary": "GLM-4.7 is Z.ai’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing compl…",
        "description": "GLM-4.7 is Z.ai’s latest flagship model, featuring upgrades in two key areas: enhanced programming capabilities and more stable multi-step reasoning/execution. It demonstrates significant improvements in executing compl…",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.6/pro/motion-control",
        "name": "Kling Video v2.6 Motion Control [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-12-21",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transfer movements from a reference video to any character image. Pro mode delivers higher quality output, ideal for complex dance moves and gestures.",
        "description": "Transfer movements from a reference video to any character image. Pro mode delivers higher quality output, ideal for complex dance moves and gestures.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.6/standard/motion-control",
        "name": "Kling Video v2.6 Motion Control [Standard]",
        "provider": "Remova Media",
        "releasedAt": "2025-12-21",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Transfer movements from a reference video to any character image. Cost-effective mode for motion transfer, perfect for portraits and simple animations.",
        "description": "Transfer movements from a reference video to any character image. Cost-effective mode for motion transfer, perfect for portraits and simple animations.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/qwen-image-edit-2511",
        "name": "Qwen Image Edit 2511",
        "provider": "Remova Media",
        "releasedAt": "2025-12-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Endpoint for Qwen's Image Editing 2511 model.",
        "description": "Endpoint for Qwen's Image Editing 2511 model.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-3-flash-preview",
        "name": "Google: Gemini 3 Flash Preview",
        "provider": "Google",
        "releasedAt": "2025-12-17",
        "contextLength": 1048576,
        "inputPer1M": 0.5,
        "outputPer1M": 3,
        "summary": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool...",
        "description": "Gemini 3 Flash Preview is a high speed, high value thinking model designed for agentic workflows, multi turn chat, and coding assistance. It delivers near Pro level reasoning and tool...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/trellis-2",
        "name": "Trellis 2",
        "provider": "Remova Media",
        "releasedAt": "2025-12-17",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate 3D models from your images using Trellis 2. A native 3D generative model enabling versatile and high-quality 3D asset creation.",
        "description": "Generate 3D models from your images using Trellis 2. A native 3D generative model enabling versatile and high-quality 3D asset creation.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->3d",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "3d"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-3d",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "black-forest-labs/flux.2-max",
        "name": "Black Forest Labs: FLUX.2 Max",
        "provider": "Black Forest Labs",
        "releasedAt": "2025-12-16",
        "contextLength": 46864,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.2 [max] is the new top-tier image model from Black Forest Labs, pushing image quality, prompt understanding, and editing consistency to the highest level yet. Pricing is as follows, [per...",
        "description": "FLUX.2 [max] is the new top-tier image model from Black Forest Labs, pushing image quality, prompt understanding, and editing consistency to the highest level yet. Pricing is as follows, [per...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [
            "seed"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "fal/fal-ai/flux-2/turbo",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with FLUX.2 [dev] from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities—all at turbo speed.",
        "description": "Text-to-image generation with FLUX.2 [dev] from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities—all at turbo speed.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2/flash",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with FLUX.2 [dev] from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities— in a flash.",
        "description": "Text-to-image generation with FLUX.2 [dev] from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities— in a flash.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2/flash/edit",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image-to-image editing with FLUX.2 [dev] from Black Forest Labs. Precise modifications using natural language descriptions and hex color control—in a flash.",
        "description": "Image-to-image editing with FLUX.2 [dev] from Black Forest Labs. Precise modifications using natural language descriptions and hex color control—in a flash.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2/turbo/edit",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image-to-image editing with FLUX.2 [dev] from Black Forest Labs. Precise modifications using natural language descriptions and hex color control—all at turbo speed.",
        "description": "Image-to-image editing with FLUX.2 [dev] from Black Forest Labs. Precise modifications using natural language descriptions and hex color control—all at turbo speed.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2-max/edit",
        "name": "Flux 2 Max",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.2 [max] delivers state-of-the-art image generation and advanced image editing with exceptional realism, precision, and consistency.",
        "description": "FLUX.2 [max] delivers state-of-the-art image generation and advanced image editing with exceptional realism, precision, and consistency.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2-max",
        "name": "Flux 2 Max",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.2 [max] delivers state-of-the-art image generation and advanced image editing with exceptional realism, precision, and consistency.",
        "description": "FLUX.2 [max] delivers state-of-the-art image generation and advanced image editing with exceptional realism, precision, and consistency.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/gpt-image-1.5/edit",
        "name": "GPT-Image 1.5",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "GPT Image 1.5 generates high-fidelity images with strong prompt adherence, preserving composition, lighting, and fine-grained detail.",
        "description": "GPT Image 1.5 generates high-fidelity images with strong prompt adherence, preserving composition, lighting, and fine-grained detail.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/gpt-image-1.5",
        "name": "GPT-Image 1.5",
        "provider": "Remova Media",
        "releasedAt": "2025-12-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "GPT Image 1.5 generates high-fidelity images with strong prompt adherence, preserving composition, lighting, and fine-grained detail.",
        "description": "GPT Image 1.5 generates high-fidelity images with strong prompt adherence, preserving composition, lighting, and fine-grained detail.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/mistral-small-creative",
        "name": "Mistral: Mistral Small Creative",
        "provider": "Mistral AI",
        "releasedAt": "2025-12-16",
        "contextLength": 32768,
        "inputPer1M": 0.09999999999999999,
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/wan/v2.6/image-to-video",
        "name": "Wan v2.6 Image to Video",
        "provider": "Wan",
        "releasedAt": "2025-12-15",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Wan 2.6 image-to-video model.",
        "description": "Wan 2.6 image-to-video model.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "nvidia/nemotron-3-nano-30b-a3b",
        "name": "NVIDIA: Nemotron 3 Nano 30B A3B",
        "provider": "Nvidia",
        "releasedAt": "2025-12-14",
        "contextLength": 262144,
        "inputPer1M": 0.049999999999999996,
        "outputPer1M": 0.19999999999999998,
        "summary": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully...",
        "description": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully...",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-3-nano-30b-a3b:free",
        "name": "NVIDIA: Nemotron 3 Nano 30B A3B (free)",
        "provider": "Nvidia",
        "releasedAt": "2025-12-14",
        "contextLength": 256000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully...",
        "description": "NVIDIA Nemotron 3 Nano 30B A3B is a small language MoE model with highest compute efficiency and accuracy for developers to build specialized agentic AI systems. The model is fully...",
        "bestFor": [
            "Agent workflows",
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
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "xiaomi/mimo-v2-flash",
        "name": "Xiaomi: MiMo-V2-Flash",
        "provider": "Xiaomi",
        "releasedAt": "2025-12-14",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 0.29,
        "summary": "MiMo-V2-Flash is an open-source foundation language model developed by Xiaomi. It is a Mixture-of-Experts model with 309B total parameters and 15B active parameters, adopting hybrid attention architecture. MiMo-V2-Flash…",
        "description": "MiMo-V2-Flash is an open-source foundation language model developed by Xiaomi. It is a Mixture-of-Experts model with 309B total parameters and 15B active parameters, adopting hybrid attention architecture. MiMo-V2-Flash…",
        "bestFor": [
            "Agent workflows",
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
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/creatify/aurora",
        "name": "Creatify Aurora",
        "provider": "Remova Media",
        "releasedAt": "2025-12-11",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate high fidelity, studio quality videos of your avatar speaking or singing using the Aurora from Creatify team!",
        "description": "Generate high fidelity, studio quality videos of your avatar speaking or singing using the Aurora from Creatify team!",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-5.2",
        "name": "OpenAI: GPT-5.2",
        "provider": "OpenAI",
        "releasedAt": "2025-12-10",
        "contextLength": 400000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quick…",
        "description": "GPT-5.2 is the latest frontier-grade model in the GPT-5 series, offering stronger agentic and long context perfomance compared to GPT-5.1. It uses adaptive reasoning to allocate computation dynamically, responding quick…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.2-chat",
        "name": "OpenAI: GPT-5.2 Chat",
        "provider": "OpenAI",
        "releasedAt": "2025-12-10",
        "contextLength": 128000,
        "inputPer1M": 1.75,
        "outputPer1M": 14,
        "summary": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
        "description": "GPT-5.2 Chat (AKA Instant) is the fast, lightweight member of the 5.2 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.2-pro",
        "name": "OpenAI: GPT-5.2 Pro",
        "provider": "OpenAI",
        "releasedAt": "2025-12-10",
        "contextLength": 400000,
        "inputPer1M": 21,
        "outputPer1M": 168,
        "summary": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning,...",
        "description": "GPT-5.2 Pro is OpenAI’s most advanced model, offering major improvements in agentic coding and long context performance over GPT-5 Pro. It is optimized for complex tasks that require step-by-step reasoning,...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/devstral-2512",
        "name": "Mistral: Devstral 2 2512",
        "provider": "Mistral AI",
        "releasedAt": "2025-12-09",
        "contextLength": 262144,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window. Devstral 2 supports exploring...",
        "description": "Devstral 2 is a state-of-the-art open-source model by Mistral AI specializing in agentic coding. It is a 123B-parameter dense transformer model supporting a 256K context window. Devstral 2 supports exploring...",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nex-agi/deepseek-v3.1-nex-n1",
        "name": "Nex AGI: DeepSeek V3.1 Nex N1",
        "provider": "Nex Agi",
        "releasedAt": "2025-12-08",
        "contextLength": 131072,
        "inputPer1M": 0.135,
        "outputPer1M": 0.5,
        "summary": "DeepSeek V3.1 Nex-N1 is the flagship release of the Nex-N1 series — a post-trained model designed to highlight agent autonomy, tool use, and real-world productivity. Nex-N1 demonstrates competitive performance across...",
        "description": "DeepSeek V3.1 Nex-N1 is the flagship release of the Nex-N1 series — a post-trained model designed to highlight agent autonomy, tool use, and real-world productivity. Nex-N1 demonstrates competitive performance across...",
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
            "response_format",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "relace/relace-search",
        "name": "Relace: Relace Search",
        "provider": "Relace",
        "releasedAt": "2025-12-08",
        "contextLength": 256000,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "The relace-search model uses 4-12 `view_file` and `grep` tools in parallel to explore a codebase and return relevant files to the user request. In contrast to RAG, relace-search performs agentic...",
        "description": "The relace-search model uses 4-12 `view_file` and `grep` tools in parallel to explore a codebase and return relevant files to the user request. In contrast to RAG, relace-search performs agentic...",
        "bestFor": [
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sourceful/riverflow-v2-fast-preview",
        "name": "Sourceful: Riverflow V2 Fast Preview",
        "provider": "Sourceful",
        "releasedAt": "2025-12-08",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Riverflow V2 Fast Preview is the fastest variant of Sourceful's Riverflow V2 preview lineup. This preview version exceeds the performance of Riverflow 1 Family and is Sourceful's first unified text-to-image...",
        "description": "Riverflow V2 Fast Preview is the fastest variant of Sourceful's Riverflow V2 preview lineup. This preview version exceeds the performance of Riverflow 1 Family and is Sourceful's first unified text-to-image...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "sourceful/riverflow-v2-max-preview",
        "name": "Sourceful: Riverflow V2 Max Preview",
        "provider": "Sourceful",
        "releasedAt": "2025-12-08",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Riverflow V2 Max Preview is the most powerful variant of Sourceful's Riverflow V2 preview lineup. This preview version exceeds the performance of Riverflow 1 Family and is Sourceful's first unified...",
        "description": "Riverflow V2 Max Preview is the most powerful variant of Sourceful's Riverflow V2 preview lineup. This preview version exceeds the performance of Riverflow 1 Family and is Sourceful's first unified...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "sourceful/riverflow-v2-standard-preview",
        "name": "Sourceful: Riverflow V2 Standard Preview",
        "provider": "Sourceful",
        "releasedAt": "2025-12-08",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Riverflow V2 Standard Preview is the standard variant of Sourceful's Riverflow V2 preview lineup. This preview version exceeds the performance of Riverflow 1 Family and is Sourceful's first unified text-to-image...",
        "description": "Riverflow V2 Standard Preview is the standard variant of Sourceful's Riverflow V2 preview lineup. This preview version exceeds the performance of Riverflow 1 Family and is Sourceful's first unified text-to-image...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "z-ai/glm-4.6v",
        "name": "Z.ai: GLM 4.6V",
        "provider": "Z.ai",
        "releasedAt": "2025-12-08",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.8999999999999999,
        "summary": "GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media. It supports up to 128K tokens, processes complex page layouts...",
        "description": "GLM-4.6V is a large multimodal model designed for high-fidelity visual understanding and long-context reasoning across images, documents, and mixed media. It supports up to 128K tokens, processes complex page layouts...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "essentialai/rnj-1-instruct",
        "name": "EssentialAI: Rnj 1 Instruct",
        "provider": "Essentialai",
        "releasedAt": "2025-12-07",
        "contextLength": 32768,
        "inputPer1M": 0.15,
        "outputPer1M": 0.15,
        "summary": "Rnj-1 is an 8B-parameter, dense, open-weight model family developed by Essential AI and trained from scratch with a focus on programming, math, and scientific reasoning. The model demonstrates strong performance...",
        "description": "Rnj-1 is an 8B-parameter, dense, open-weight model family developed by Essential AI and trained from scratch with a focus on programming, math, and scientific reasoning. The model demonstrates strong performance...",
        "bestFor": [
            "Agent workflows",
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/z-image/turbo/image-to-image",
        "name": "Z-Image Turbo",
        "provider": "Remova Media",
        "releasedAt": "2025-12-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate images from text and images using Z-Image Turbo, Tongyi-MAI's super-fast 6B model.",
        "description": "Generate images from text and images using Z-Image Turbo, Tongyi-MAI's super-fast 6B model.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/ai-avatar/v2/pro",
        "name": "Kling AI Avatar v2 Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-12-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling AI Avatar v2 Pro: The premium endpoint for creating avatar videos with realistic humans, animals, cartoons, or stylized characters",
        "description": "Kling AI Avatar v2 Pro: The premium endpoint for creating avatar videos with realistic humans, animals, cartoons, or stylized characters",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/ai-avatar/v2/standard",
        "name": "Kling AI Avatar v2 Standard",
        "provider": "Remova Media",
        "releasedAt": "2025-12-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling AI Avatar v2 Standard: Endpoint for creating avatar videos with realistic humans, animals, cartoons, or stylized characters",
        "description": "Kling AI Avatar v2 Standard: Endpoint for creating avatar videos with realistic humans, animals, cartoons, or stylized characters",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-5.1-codex-max",
        "name": "OpenAI: GPT-5.1-Codex-Max",
        "provider": "OpenAI",
        "releasedAt": "2025-12-04",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic...",
        "description": "GPT-5.1-Codex-Max is OpenAI’s latest agentic coding model, designed for long-running, high-context software development tasks. It is based on an updated version of the 5.1 reasoning stack and trained on agentic...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bytedance/seedream/v4.5/edit",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2025-12-03",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "A new-generation image creation model ByteDance, Seedream 4.5 integrates image generation and image editing capabilities into a single, unified architecture.",
        "description": "A new-generation image creation model ByteDance, Seedream 4.5 integrates image generation and image editing capabilities into a single, unified architecture.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedream/v4.5/text-to-image",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2025-12-03",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "A new-generation image creation model ByteDance, Seedream 4.5 integrates image generation and image editing capabilities into a single, unified architecture.",
        "description": "A new-generation image creation model ByteDance, Seedream 4.5 integrates image generation and image editing capabilities into a single, unified architecture.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "amazon/nova-2-lite-v1",
        "name": "Amazon: Nova 2 Lite",
        "provider": "Amazon",
        "releasedAt": "2025-12-02",
        "contextLength": 1000000,
        "inputPer1M": 0.3,
        "outputPer1M": 2.5,
        "summary": "Nova 2 Lite is a fast, cost-effective reasoning model for everyday workloads that can process text, images, and videos to generate text. Nova 2 Lite demonstrates standout capabilities in processing...",
        "description": "Nova 2 Lite is a fast, cost-effective reasoning model for everyday workloads that can process text, images, and videos to generate text. Nova 2 Lite demonstrates standout capabilities in processing...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.6/pro/image-to-video",
        "name": "Kling Video v2.6 Image to Video",
        "provider": "Remova Media",
        "releasedAt": "2025-12-02",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.6 Pro: Top-tier image-to-video with cinematic visuals, fluid motion, and native audio generation.",
        "description": "Kling 2.6 Pro: Top-tier image-to-video with cinematic visuals, fluid motion, and native audio generation.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.6/pro/text-to-video",
        "name": "Kling Video v2.6 Text to Video",
        "provider": "Remova Media",
        "releasedAt": "2025-12-02",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.6 Pro: Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation.",
        "description": "Kling 2.6 Pro: Top-tier text-to-video with cinematic visuals, fluid motion, and native audio generation.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/ministral-14b-2512",
        "name": "Mistral: Ministral 3 14B 2512",
        "provider": "Mistral AI",
        "releasedAt": "2025-12-02",
        "contextLength": 262144,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.19999999999999998,
        "summary": "The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart. A powerful and efficient language...",
        "description": "The largest model in the Ministral 3 family, Ministral 3 14B offers frontier capabilities and performance comparable to its larger Mistral Small 3.2 24B counterpart. A powerful and efficient language...",
        "bestFor": [
            "Image workflows",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/ministral-3b-2512",
        "name": "Mistral: Ministral 3 3B 2512",
        "provider": "Mistral AI",
        "releasedAt": "2025-12-02",
        "contextLength": 131072,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.09999999999999999,
        "summary": "The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.",
        "description": "The smallest model in the Ministral 3 family, Ministral 3 3B is a powerful, efficient tiny language model with vision capabilities.",
        "bestFor": [
            "Image workflows",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/ministral-8b-2512",
        "name": "Mistral: Ministral 3 8B 2512",
        "provider": "Mistral AI",
        "releasedAt": "2025-12-02",
        "contextLength": 262144,
        "inputPer1M": 0.15,
        "outputPer1M": 0.15,
        "summary": "A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.",
        "description": "A balanced model in the Ministral 3 family, Ministral 3 8B is a powerful, efficient tiny language model with vision capabilities.",
        "bestFor": [
            "Image workflows",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "arcee-ai/trinity-mini",
        "name": "Arcee AI: Trinity Mini",
        "provider": "Arcee Ai",
        "releasedAt": "2025-12-01",
        "contextLength": 131072,
        "inputPer1M": 0.045,
        "outputPer1M": 0.15,
        "summary": "Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token. Engineered for efficient reasoning over long contexts (131k) with robust function...",
        "description": "Trinity Mini is a 26B-parameter (3B active) sparse mixture-of-experts language model featuring 128 experts with 8 active per token. Engineered for efficient reasoning over long contexts (131k) with robust function...",
        "bestFor": [
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-v3.2",
        "name": "DeepSeek: DeepSeek V3.2",
        "provider": "DeepSeek",
        "releasedAt": "2025-12-01",
        "contextLength": 131072,
        "inputPer1M": 0.252,
        "outputPer1M": 0.378,
        "summary": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse at…",
        "description": "DeepSeek-V3.2 is a large language model designed to harmonize high computational efficiency with strong reasoning and agentic tool-use performance. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse at…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-v3.2-speciale",
        "name": "DeepSeek: DeepSeek V3.2 Speciale",
        "provider": "DeepSeek",
        "releasedAt": "2025-12-01",
        "contextLength": 163840,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 1.2,
        "summary": "DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance. It builds on DeepSeek Sparse Attention (DSA) for efficient long-context processing, then scales…",
        "description": "DeepSeek-V3.2-Speciale is a high-compute variant of DeepSeek-V3.2 optimized for maximum reasoning and agentic performance. It builds on DeepSeek Sparse Attention (DSA) for efficient long-context processing, then scales…",
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
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/o1/video-to-video/edit",
        "name": "Kling O1 Edit Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-12-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Edit an existing video using natural-language instructions, transforming subjects, settings, and style while retaining the original motion structure.",
        "description": "Edit an existing video using natural-language instructions, transforming subjects, settings, and style while retaining the original motion structure.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/o1/image-to-video",
        "name": "Kling O1 First Frame Last Frame to Video [Pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-12-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate a video by taking a start frame and an end frame, animating the transition between them while following text-driven style and scene guidance.",
        "description": "Generate a video by taking a start frame and an end frame, animating the transition between them while following text-driven style and scene guidance.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/mistral-large-2512",
        "name": "Mistral: Mistral Large 3 2512",
        "provider": "Mistral AI",
        "releasedAt": "2025-12-01",
        "contextLength": 262144,
        "inputPer1M": 0.5,
        "outputPer1M": 1.5,
        "summary": "Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.",
        "description": "Mistral Large 3 2512 is Mistral’s most capable model to date, featuring a sparse mixture-of-experts architecture with 41B active parameters (675B total), and released under the Apache 2.0 license.",
        "bestFor": [
            "Image workflows",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/z-image/turbo/lora",
        "name": "Z-Image Turbo",
        "provider": "Remova Media",
        "releasedAt": "2025-12-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-Image endpoint with LoRA support for Z-Image Turbo, a super fast text-to-image model of 6B parameters developed by Tongyi-MAI.",
        "description": "Text-to-Image endpoint with LoRA support for Z-Image Turbo, a super fast text-to-image model of 6B parameters developed by Tongyi-MAI.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "prime-intellect/intellect-3",
        "name": "Prime Intellect: INTELLECT-3",
        "provider": "Prime Intellect",
        "releasedAt": "2025-11-27",
        "contextLength": 131072,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 1.1,
        "summary": "INTELLECT-3 is a 106B-parameter Mixture-of-Experts model (12B active) post-trained from GLM-4.5-Air-Base using supervised fine-tuning (SFT) followed by large-scale reinforcement learning (RL). It offers state-of-the-art…",
        "description": "INTELLECT-3 is a 106B-parameter Mixture-of-Experts model (12B active) post-trained from GLM-4.5-Air-Base using supervised fine-tuning (SFT) followed by large-scale reinforcement learning (RL). It offers state-of-the-art…",
        "bestFor": [
            "Agent workflows",
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
            "response_format",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/z-image/turbo",
        "name": "Z-Image Turbo",
        "provider": "Remova Media",
        "releasedAt": "2025-11-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Z-Image Turbo is a super fast text-to-image model of 6B parameters developed by Tongyi-MAI.",
        "description": "Z-Image Turbo is a super fast text-to-image model of 6B parameters developed by Tongyi-MAI.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "black-forest-labs/flux.2-flex",
        "name": "Black Forest Labs: FLUX.2 Flex",
        "provider": "Black Forest Labs",
        "releasedAt": "2025-11-25",
        "contextLength": 67344,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.2 [flex] excels at rendering complex text, typography, and fine details, and supports multi-reference editing in the same unified architecture. Pricing is as follows, per the docs: We charge $0.06...",
        "description": "FLUX.2 [flex] excels at rendering complex text, typography, and fine details, and supports multi-reference editing in the same unified architecture. Pricing is as follows, per the docs: We charge $0.06...",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [
            "seed"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "black-forest-labs/flux.2-pro",
        "name": "Black Forest Labs: FLUX.2 Pro",
        "provider": "Black Forest Labs",
        "releasedAt": "2025-11-25",
        "contextLength": 46864,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "A high-end image generation and editing model focused on frontier-level visual quality and reliability. It delivers strong prompt adherence, stable lighting, sharp textures, and consistent character/style reproduction a…",
        "description": "A high-end image generation and editing model focused on frontier-level visual quality and reliability. It delivers strong prompt adherence, stable lighting, sharp textures, and consistent character/style reproduction a…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text+image->image",
        "inputModalities": [
            "text",
            "image"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [
            "seed"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "fal/clarityai/crystal-upscaler",
        "name": "Crystal Upscaler",
        "provider": "Clarity AI",
        "releasedAt": "2025-11-25",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "An advanced image enhancement tool designed specifically for facial details and portrait photography, utilizing Clarity AI's upscaling technology.",
        "description": "An advanced image enhancement tool designed specifically for facial details and portrait photography, utilizing Clarity AI's upscaling technology.",
        "bestFor": [
            "Image workflows",
            "Agent workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2-flex",
        "name": "Flux 2 Flex",
        "provider": "Remova Media",
        "releasedAt": "2025-11-25",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with FLUX.2 [flex] from Black Forest Labs. Features adjustable inference steps and guidance scale for fine-tuned control. Enhanced typography and text rendering capabilities.",
        "description": "Text-to-image generation with FLUX.2 [flex] from Black Forest Labs. Features adjustable inference steps and guidance scale for fine-tuned control. Enhanced typography and text rendering capabilities.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2-flex/edit",
        "name": "Flux 2 Flex",
        "provider": "Remova Media",
        "releasedAt": "2025-11-25",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image editing with FLUX.2 [flex] from Black Forest Labs. Supports multi-reference editing with customizable inference steps and enhanced text rendering.",
        "description": "Image editing with FLUX.2 [flex] from Black Forest Labs. Supports multi-reference editing with customizable inference steps and enhanced text rendering.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "anthropic/claude-opus-4.5",
        "name": "Anthropic: Claude Opus 4.5",
        "provider": "Anthropic",
        "releasedAt": "2025-11-24",
        "contextLength": 200000,
        "inputPer1M": 5,
        "outputPer1M": 25,
        "summary": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance acr…",
        "description": "Claude Opus 4.5 is Anthropic’s frontier reasoning model optimized for complex software engineering, agentic workflows, and long-horizon computer use. It offers strong multimodal capabilities, competitive performance acr…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-2",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-11-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with FLUX.2 [dev] from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities.",
        "description": "Text-to-image generation with FLUX.2 [dev] from Black Forest Labs. Enhanced realism, crisper text generation, and native editing capabilities.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2/edit",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-11-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image-to-image editing with FLUX.2 [dev] from Black Forest Labs. Precise modifications using natural language descriptions and hex color control.",
        "description": "Image-to-image editing with FLUX.2 [dev] from Black Forest Labs. Precise modifications using natural language descriptions and hex color control.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2/lora",
        "name": "Flux 2",
        "provider": "Remova Media",
        "releasedAt": "2025-11-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with LoRA support for FLUX.2 [dev] from Black Forest Labs. Custom style adaptation and fine-tuned model variations.",
        "description": "Text-to-image generation with LoRA support for FLUX.2 [dev] from Black Forest Labs. Custom style adaptation and fine-tuned model variations.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2-pro",
        "name": "Flux 2 Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-11-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image editing with FLUX.2 [pro] from Black Forest Labs. Ideal for high-quality image manipulation, style transfer, and sequential editing workflows",
        "description": "Image editing with FLUX.2 [pro] from Black Forest Labs. Ideal for high-quality image manipulation, style transfer, and sequential editing workflows",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-2-pro/edit",
        "name": "Flux 2 Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-11-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-image generation with FLUX.2 [pro] from Black Forest Labs. Optimized for maximum quality, exceptional photorealism and artistic images.",
        "description": "Text-to-image generation with FLUX.2 [pro] from Black Forest Labs. Optimized for maximum quality, exceptional photorealism and artistic images.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "allenai/olmo-3-32b-think",
        "name": "AllenAI: Olmo 3 32B Think",
        "provider": "Allenai",
        "releasedAt": "2025-11-21",
        "contextLength": 65536,
        "inputPer1M": 0.15,
        "outputPer1M": 0.5,
        "summary": "Olmo 3 32B Think is a large-scale, 32-billion-parameter model purpose-built for deep reasoning, complex logic chains and advanced instruction-following scenarios. Its capacity enables strong performance on demanding eva…",
        "description": "Olmo 3 32B Think is a large-scale, 32-billion-parameter model purpose-built for deep reasoning, complex logic chains and advanced instruction-following scenarios. Its capacity enables strong performance on demanding eva…",
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
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/gemini-3-pro-image-preview/edit",
        "name": "Gemini 3 Pro Image Preview",
        "provider": "Remova Media",
        "releasedAt": "2025-11-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemini 3 Pro Image (a.k.a Nano Banana Pro) is Google's state-of-the-art high-fidelity image generation and editing model",
        "description": "Gemini 3 Pro Image (a.k.a Nano Banana Pro) is Google's state-of-the-art high-fidelity image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/gemini-3-pro-image-preview",
        "name": "Gemini 3 Pro Image Preview",
        "provider": "Remova Media",
        "releasedAt": "2025-11-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemini 3 Pro Image (a.k.a Nano Banana Pro) is Google's state-of-the-art high-fidelity image generation and editing model",
        "description": "Gemini 3 Pro Image (a.k.a Nano Banana Pro) is Google's state-of-the-art high-fidelity image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-3-pro-image-preview",
        "name": "Google: Nano Banana Pro (Gemini 3 Pro Image Preview)",
        "provider": "Google",
        "releasedAt": "2025-11-20",
        "contextLength": 65536,
        "inputPer1M": 2,
        "outputPer1M": 12,
        "summary": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and...",
        "description": "Nano Banana Pro is Google’s most advanced image-generation and editing model, built on Gemini 3 Pro. It extends the original Nano Banana with significantly improved multimodal reasoning, real-world grounding, and...",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "fal/fal-ai/nano-banana-pro/edit",
        "name": "Nano Banana Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-11-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Nano Banana Pro is Google's new state-of-the-art image generation and editing model",
        "description": "Nano Banana Pro is Google's new state-of-the-art image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/nano-banana-pro",
        "name": "Nano Banana Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-11-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Nano Banana Pro is Google's new state-of-the-art image generation and editing model",
        "description": "Nano Banana Pro is Google's new state-of-the-art image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/sam-3/image",
        "name": "Segment Anything Model 3",
        "provider": "Remova Media",
        "releasedAt": "2025-11-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "SAM 3 is a unified foundation model for promptable segmentation in images and videos. It can detect, segment, and track objects using text or visual prompts such as points, boxes, and masks.",
        "description": "SAM 3 is a unified foundation model for promptable segmentation in images and videos. It can detect, segment, and track objects using text or visual prompts such as points, boxes, and masks.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "x-ai/grok-4.1-fast",
        "name": "xAI: Grok 4.1 Fast",
        "provider": "xAI",
        "releasedAt": "2025-11-19",
        "contextLength": 2000000,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.5,
        "summary": "Grok 4.1 Fast is xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research. 2M context window. Reasoning can be enabled/disabled using...",
        "description": "Grok 4.1 Fast is xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research. 2M context window. Reasoning can be enabled/disabled using...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baai/bge-base-en-v1.5",
        "name": "BAAI: bge-base-en-v1.5",
        "provider": "Baai",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The bge-base-en-v1.5 embedding model converts English sentences and paragraphs into 768-dimensional dense vectors, delivering efficient, high-quality semantic embeddings optimized for retrieval, semantic search, and doc…",
        "description": "The bge-base-en-v1.5 embedding model converts English sentences and paragraphs into 768-dimensional dense vectors, delivering efficient, high-quality semantic embeddings optimized for retrieval, semantic search, and doc…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baai/bge-large-en-v1.5",
        "name": "BAAI: bge-large-en-v1.5",
        "provider": "Baai",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.01,
        "outputPer1M": 0,
        "summary": "The bge-large-en-v1.5 embedding model maps English sentences, paragraphs, and documents into a 1024-dimensional dense vector space, delivering high-fidelity semantic embeddings optimized for semantic search, document re…",
        "description": "The bge-large-en-v1.5 embedding model maps English sentences, paragraphs, and documents into a 1024-dimensional dense vector space, delivering high-fidelity semantic embeddings optimized for semantic search, document re…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baai/bge-m3",
        "name": "BAAI: bge-m3",
        "provider": "Baai",
        "releasedAt": "2025-11-18",
        "contextLength": 8192,
        "inputPer1M": 0.01,
        "outputPer1M": 0,
        "summary": "The bge-m3 embedding model encodes sentences, paragraphs, and long documents into a 1024-dimensional dense vector space, delivering high-quality semantic embeddings optimized for multilingual retrieval, semantic search,…",
        "description": "The bge-m3 embedding model encodes sentences, paragraphs, and long documents into a 1024-dimensional dense vector space, delivering high-quality semantic embeddings optimized for multilingual retrieval, semantic search,…",
        "bestFor": [
            "Code generation",
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "intfloat/e5-base-v2",
        "name": "Intfloat: E5-Base-v2",
        "provider": "Intfloat",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The e5-base-v2 embedding model encodes English sentences and paragraphs into a 768-dimensional dense vector space, producing efficient and high-quality semantic embeddings optimized for tasks such as semantic search, si…",
        "description": "The e5-base-v2 embedding model encodes English sentences and paragraphs into a 768-dimensional dense vector space, producing efficient and high-quality semantic embeddings optimized for tasks such as semantic search, si…",
        "bestFor": [
            "Code generation",
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "intfloat/e5-large-v2",
        "name": "Intfloat: E5-Large-v2",
        "provider": "Intfloat",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.01,
        "outputPer1M": 0,
        "summary": "The e5-large-v2 embedding model maps English sentences, paragraphs, and documents into a 1024-dimensional dense vector space, delivering high-accuracy semantic embeddings optimized for retrieval, semantic search, rerank…",
        "description": "The e5-large-v2 embedding model maps English sentences, paragraphs, and documents into a 1024-dimensional dense vector space, delivering high-accuracy semantic embeddings optimized for retrieval, semantic search, rerank…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "intfloat/multilingual-e5-large",
        "name": "Intfloat: Multilingual-E5-Large",
        "provider": "Intfloat",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.01,
        "outputPer1M": 0,
        "summary": "The multilingual-e5-large embedding model encodes sentences, paragraphs, and documents across over 90 languages into a 1024-dimensional dense vector space, delivering robust semantic embeddings optimized for multilingua…",
        "description": "The multilingual-e5-large embedding model encodes sentences, paragraphs, and documents across over 90 languages into a 1024-dimensional dense vector space, delivering robust semantic embeddings optimized for multilingua…",
        "bestFor": [
            "Code generation",
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sentence-transformers/all-minilm-l12-v2",
        "name": "Sentence Transformers: all-MiniLM-L12-v2",
        "provider": "Sentence Transformers",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The all-MiniLM-L12-v2 embedding model maps sentences and short paragraphs into a 384-dimensional dense vector space, producing efficient and high-quality semantic embeddings optimized for tasks such as semantic search,…",
        "description": "The all-MiniLM-L12-v2 embedding model maps sentences and short paragraphs into a 384-dimensional dense vector space, producing efficient and high-quality semantic embeddings optimized for tasks such as semantic search,…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sentence-transformers/multi-qa-mpnet-base-dot-v1",
        "name": "Sentence Transformers: multi-qa-mpnet-base-dot-v1",
        "provider": "Sentence Transformers",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The multi-qa-mpnet-base-dot-v1 embedding model transforms sentences and short paragraphs into a 768-dimensional dense vector space, generating high-quality semantic embeddings optimized for question-and-answer retrieval…",
        "description": "The multi-qa-mpnet-base-dot-v1 embedding model transforms sentences and short paragraphs into a 768-dimensional dense vector space, generating high-quality semantic embeddings optimized for question-and-answer retrieval…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sentence-transformers/paraphrase-minilm-l6-v2",
        "name": "Sentence Transformers: paraphrase-MiniLM-L6-v2",
        "provider": "Sentence Transformers",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The paraphrase-MiniLM-L6-v2 embedding model converts sentences and short paragraphs into a 384-dimensional dense vector space, producing high-quality semantic embeddings optimized for paraphrase detection, semantic simi…",
        "description": "The paraphrase-MiniLM-L6-v2 embedding model converts sentences and short paragraphs into a 384-dimensional dense vector space, producing high-quality semantic embeddings optimized for paraphrase detection, semantic simi…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "thenlper/gte-base",
        "name": "Thenlper: GTE-Base",
        "provider": "Thenlper",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The gte-base embedding model encodes English sentences and paragraphs into a 768-dimensional dense vector space, delivering efficient and effective semantic embeddings optimized for textual similarity, semantic search,…",
        "description": "The gte-base embedding model encodes English sentences and paragraphs into a 768-dimensional dense vector space, delivering efficient and effective semantic embeddings optimized for textual similarity, semantic search,…",
        "bestFor": [
            "Code generation",
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "thenlper/gte-large",
        "name": "Thenlper: GTE-Large",
        "provider": "Thenlper",
        "releasedAt": "2025-11-18",
        "contextLength": 512,
        "inputPer1M": 0.01,
        "outputPer1M": 0,
        "summary": "The gte-large embedding model converts English sentences, paragraphs and moderate-length documents into a 1024-dimensional dense vector space, delivering high-quality semantic embeddings optimized for information retrie…",
        "description": "The gte-large embedding model converts English sentences, paragraphs and moderate-length documents into a 1024-dimensional dense vector space, delivering high-quality semantic embeddings optimized for information retrie…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sentence-transformers/all-minilm-l6-v2",
        "name": "Sentence Transformers: all-MiniLM-L6-v2",
        "provider": "Sentence Transformers",
        "releasedAt": "2025-11-17",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The all-MiniLM-L6-v2 embedding model maps sentences and short paragraphs into a 384-dimensional dense vector space, enabling high-quality semantic representations that are ideal for downstream tasks such as information…",
        "description": "The all-MiniLM-L6-v2 embedding model maps sentences and short paragraphs into a 384-dimensional dense vector space, enabling high-quality semantic representations that are ideal for downstream tasks such as information…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sentence-transformers/all-mpnet-base-v2",
        "name": "Sentence Transformers: all-mpnet-base-v2",
        "provider": "Sentence Transformers",
        "releasedAt": "2025-11-17",
        "contextLength": 512,
        "inputPer1M": 0.005,
        "outputPer1M": 0,
        "summary": "The all-mpnet-base-v2 embedding model encodes sentences and short paragraphs into a 768-dimensional dense vector space, providing high-fidelity semantic embeddings well suited for tasks like information retrieval, clust…",
        "description": "The all-mpnet-base-v2 embedding model encodes sentences and short paragraphs into a 768-dimensional dense vector space, providing high-fidelity semantic embeddings well suited for tasks like information retrieval, clust…",
        "bestFor": [
            "Code generation",
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepcogito/cogito-v2.1-671b",
        "name": "Deep Cogito: Cogito v2.1 671B",
        "provider": "Deepcogito",
        "releasedAt": "2025-11-13",
        "contextLength": 128000,
        "inputPer1M": 1.25,
        "outputPer1M": 1.25,
        "summary": "Cogito v2.1 671B MoE represents one of the strongest open models globally, matching performance of frontier closed and open models. This model is trained using self play with reinforcement learning...",
        "description": "Cogito v2.1 671B MoE represents one of the strongest open models globally, matching performance of frontier closed and open models. This model is trained using self play with reinforcement learning...",
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
            "stop",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.1",
        "name": "OpenAI: GPT-5.1",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive re…",
        "description": "GPT-5.1 is the latest frontier-grade model in the GPT-5 series, offering stronger general-purpose reasoning, improved instruction adherence, and a more natural conversational style compared to GPT-5. It uses adaptive re…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.1-chat",
        "name": "OpenAI: GPT-5.1 Chat",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 128000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
        "description": "GPT-5.1 Chat (AKA Instant is the fast, lightweight member of the 5.1 family, optimized for low-latency chat while retaining strong general intelligence. It uses adaptive reasoning to selectively “think” on...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.1-codex",
        "name": "OpenAI: GPT-5.1-Codex",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering…",
        "description": "GPT-5.1-Codex is a specialized version of GPT-5.1 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5.1-codex-mini",
        "name": "OpenAI: GPT-5.1-Codex-Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-11-13",
        "contextLength": 400000,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
        "description": "GPT-5.1-Codex-Mini is a smaller and faster version of GPT-5.1-Codex",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "moonshotai/kimi-k2-thinking",
        "name": "MoonshotAI: Kimi K2 Thinking",
        "provider": "Moonshotai",
        "releasedAt": "2025-11-06",
        "contextLength": 262144,
        "inputPer1M": 0.6,
        "outputPer1M": 2.5,
        "summary": "Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning. Built on the trillion-parameter Mixture-of-Experts (MoE) architecture introduce…",
        "description": "Kimi K2 Thinking is Moonshot AI’s most advanced open reasoning model to date, extending the K2 series into agentic, long-horizon reasoning. Built on the trillion-parameter Mixture-of-Experts (MoE) architecture introduce…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "amazon/nova-premier-v1",
        "name": "Amazon: Nova Premier 1.0",
        "provider": "Amazon",
        "releasedAt": "2025-10-31",
        "contextLength": 1000000,
        "inputPer1M": 2.5,
        "outputPer1M": 12.5,
        "summary": "Amazon Nova Premier is the most capable of Amazon’s multimodal models for complex reasoning tasks and for use as the best teacher for distilling custom models.",
        "description": "Amazon Nova Premier is the most capable of Amazon’s multimodal models for complex reasoning tasks and for use as the best teacher for distilling custom models.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-embedding-001",
        "name": "Google: Gemini Embedding 001",
        "provider": "Google",
        "releasedAt": "2025-10-31",
        "contextLength": 20000,
        "inputPer1M": 0.15,
        "outputPer1M": 0,
        "summary": "gemini-embedding-001 provides a unified cutting edge experience across domains, including science, legal, finance, and coding. This embedding model has consistently held a top spot on the Massive Text Embedding Benchmar…",
        "description": "gemini-embedding-001 provides a unified cutting edge experience across domains, including science, legal, finance, and coding. This embedding model has consistently held a top spot on the Massive Text Embedding Benchmar…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
        ],
        "supportedParameters": [
            "max_tokens",
            "response_format",
            "seed",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-embed-2312",
        "name": "Mistral: Mistral Embed 2312",
        "provider": "Mistral AI",
        "releasedAt": "2025-10-31",
        "contextLength": 8192,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0,
        "summary": "Mistral Embed is a specialized embedding model for text data, optimized for semantic search and RAG applications. Developed by Mistral AI in late 2023, it produces 1024-dimensional vectors that effectively...",
        "description": "Mistral Embed is a specialized embedding model for text data, optimized for semantic search and RAG applications. Developed by Mistral AI in late 2023, it produces 1024-dimensional vectors that effectively...",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/minimax-music/v2",
        "name": "Minimax Music",
        "provider": "Remova Media",
        "releasedAt": "2025-10-30",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate music from text prompts using the MiniMax Music 2.0 model, which leverages advanced AI techniques to create high-quality, diverse musical compositions.",
        "description": "Generate music from text prompts using the MiniMax Music 2.0 model, which leverages advanced AI techniques to create high-quality, diverse musical compositions.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-audio",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/codestral-embed-2505",
        "name": "Mistral: Codestral Embed 2505",
        "provider": "Mistral AI",
        "releasedAt": "2025-10-30",
        "contextLength": 8192,
        "inputPer1M": 0.15,
        "outputPer1M": 0,
        "summary": "Mistral Codestral Embed is specially designed for code, perfect for embedding code databases, repositories, and powering coding assistants with state-of-the-art retrieval.",
        "description": "Mistral Codestral Embed is specially designed for code, perfect for embedding code databases, repositories, and powering coding assistants with state-of-the-art retrieval.",
        "bestFor": [
            "Code generation",
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/voxtral-small-24b-2507",
        "name": "Mistral: Voxtral Small 24B 2507",
        "provider": "Mistral AI",
        "releasedAt": "2025-10-30",
        "contextLength": 32000,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.3,
        "summary": "Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance. It excels at speech transcription, translation and audio unders…",
        "description": "Voxtral Small is an enhancement of Mistral Small 3, incorporating state-of-the-art audio input capabilities while retaining best-in-class text performance. It excels at speech transcription, translation and audio unders…",
        "bestFor": [
            "Audio workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/text-embedding-3-large",
        "name": "OpenAI: Text Embedding 3 Large",
        "provider": "OpenAI",
        "releasedAt": "2025-10-30",
        "contextLength": 8192,
        "inputPer1M": 0.13,
        "outputPer1M": 0,
        "summary": "text-embedding-3-large is OpenAI's most capable embedding model for both english and non-english tasks. Embeddings are a numerical representation of text that can be used to measure the relatedness between two...",
        "description": "text-embedding-3-large is OpenAI's most capable embedding model for both english and non-english tasks. Embeddings are a numerical representation of text that can be used to measure the relatedness between two...",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/text-embedding-3-small",
        "name": "OpenAI: Text Embedding 3 Small",
        "provider": "OpenAI",
        "releasedAt": "2025-10-30",
        "contextLength": 8192,
        "inputPer1M": 0.02,
        "outputPer1M": 0,
        "summary": "text-embedding-3-small is OpenAI's improved, more performant version of the ada embedding model. Embeddings are a numerical representation of text that can be used to measure the relatedness between two pieces...",
        "description": "text-embedding-3-small is OpenAI's improved, more performant version of the ada embedding model. Embeddings are a numerical representation of text that can be used to measure the relatedness between two pieces...",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/text-embedding-ada-002",
        "name": "OpenAI: Text Embedding Ada 002",
        "provider": "OpenAI",
        "releasedAt": "2025-10-30",
        "contextLength": 8192,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0,
        "summary": "text-embedding-ada-002 is OpenAI's legacy text embedding model.",
        "description": "text-embedding-ada-002 is OpenAI's legacy text embedding model.",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/sonar-pro-search",
        "name": "Perplexity: Sonar Pro Search",
        "provider": "Perplexity",
        "releasedAt": "2025-10-30",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Exclusively available on the Remova API, Sonar Pro's new Pro Search mode is Perplexity's most advanced agentic search system. It is designed for deeper reasoning and analysis. Pricing is based...",
        "description": "Exclusively available on the Remova API, Sonar Pro's new Pro Search mode is Perplexity's most advanced agentic search system. It is designed for deeper reasoning and analysis. Pricing is based...",
        "bestFor": [
            "Image workflows",
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
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-oss-safeguard-20b",
        "name": "OpenAI: gpt-oss-safeguard-20b",
        "provider": "OpenAI",
        "releasedAt": "2025-10-29",
        "contextLength": 131072,
        "inputPer1M": 0.075,
        "outputPer1M": 0.3,
        "summary": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM…",
        "description": "gpt-oss-safeguard-20b is a safety reasoning model from OpenAI built upon gpt-oss-20b. This open-weight, 21B-parameter Mixture-of-Experts (MoE) model offers lower latency for safety tasks like content classification, LLM…",
        "bestFor": [
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-nano-12b-v2-vl",
        "name": "NVIDIA: Nemotron Nano 12B 2 VL",
        "provider": "Nvidia",
        "releasedAt": "2025-10-28",
        "contextLength": 131072,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.6,
        "summary": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transforme…",
        "description": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transforme…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Advanced reasoning"
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
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-nano-12b-v2-vl:free",
        "name": "NVIDIA: Nemotron Nano 12B 2 VL (free)",
        "provider": "Nvidia",
        "releasedAt": "2025-10-28",
        "contextLength": 128000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transforme…",
        "description": "NVIDIA Nemotron Nano 2 VL is a 12-billion-parameter open multimodal reasoning model designed for video understanding and document intelligence. It introduces a hybrid Transformer-Mamba architecture, combining transforme…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-embedding-4b",
        "name": "Qwen: Qwen3 Embedding 4B",
        "provider": "Qwen",
        "releasedAt": "2025-10-28",
        "contextLength": 32768,
        "inputPer1M": 0.02,
        "outputPer1M": 0,
        "summary": "The Qwen3 Embedding model series is the latest proprietary model of the Qwen family, specifically designed for text embedding and ranking tasks. This series inherits the exceptional multilingual capabilities, long-text.…",
        "description": "The Qwen3 Embedding model series is the latest proprietary model of the Qwen family, specifically designed for text embedding and ranking tasks. This series inherits the exceptional multilingual capabilities, long-text.…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-embedding-8b",
        "name": "Qwen: Qwen3 Embedding 8B",
        "provider": "Qwen",
        "releasedAt": "2025-10-28",
        "contextLength": 32000,
        "inputPer1M": 0.01,
        "outputPer1M": 0,
        "summary": "The Qwen3 Embedding model series is the latest proprietary model of the Qwen family, specifically designed for text embedding and ranking tasks. This series inherits the exceptional multilingual capabilities, long-text.…",
        "description": "The Qwen3 Embedding model series is the latest proprietary model of the Qwen family, specifically designed for text embedding and ranking tasks. This series inherits the exceptional multilingual capabilities, long-text.…",
        "bestFor": [
            "Embeddings"
        ],
        "modality": "text->embeddings",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "embeddings"
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
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1/pro/fast/image-to-video",
        "name": "Bytedance",
        "provider": "Remova Media",
        "releasedAt": "2025-10-24",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image to Video endpoint for Seedance 1.0 Pro Fast, a next-generation video model designed to deliver maximum performance at minimal cost",
        "description": "Image to Video endpoint for Seedance 1.0 Pro Fast, a next-generation video model designed to deliver maximum performance at minimal cost",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "minimax/minimax-m2",
        "name": "MiniMax: MiniMax M2",
        "provider": "Minimax",
        "releasedAt": "2025-10-23",
        "contextLength": 196608,
        "inputPer1M": 0.255,
        "outputPer1M": 1,
        "summary": "MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows. With 10 billion activated parameters (230 billion total), it delivers near-frontier intelligence acros…",
        "description": "MiniMax-M2 is a compact, high-efficiency large language model optimized for end-to-end coding and agentic workflows. With 10 billion activated parameters (230 billion total), it delivers near-frontier intelligence acros…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-vl-32b-instruct",
        "name": "Qwen: Qwen3 VL 32B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-10-23",
        "contextLength": 131072,
        "inputPer1M": 0.10400000000000001,
        "outputPer1M": 0.41600000000000004,
        "summary": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual percept…",
        "description": "Qwen3-VL-32B-Instruct is a large-scale multimodal vision-language model designed for high-precision understanding and reasoning across text, images, and video. With 32 billion parameters, it combines deep visual percept…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.5-turbo/standard/image-to-video",
        "name": "Kling Video",
        "provider": "Remova Media",
        "releasedAt": "2025-10-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.5 Turbo Standard: Top-tier image-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "description": "Kling 2.5 Turbo Standard: Top-tier image-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "ibm-granite/granite-4.0-h-micro",
        "name": "IBM: Granite 4.0 Micro",
        "provider": "Ibm Granite",
        "releasedAt": "2025-10-20",
        "contextLength": 131000,
        "inputPer1M": 0.017,
        "outputPer1M": 0.11,
        "summary": "Granite-4.0-H-Micro is a 3B parameter from the Granite 4 family of models. These models are the latest in a series of models released by IBM. They are fine-tuned for long...",
        "description": "Granite-4.0-H-Micro is a 3B parameter from the Granite 4 family of models. These models are the latest in a series of models released by IBM. They are fine-tuned for long...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5-image-mini",
        "name": "OpenAI: GPT-5 Image Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-10-16",
        "contextLength": 400000,
        "inputPer1M": 2.5,
        "outputPer1M": 2,
        "summary": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by GPT-5 Mini, with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, tex…",
        "description": "GPT-5 Image Mini combines OpenAI's advanced language capabilities, powered by GPT-5 Mini, with GPT Image 1 Mini for efficient image generation. This natively multimodal model features superior instruction following, tex…",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning"
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
            "temperature",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "anthropic/claude-haiku-4.5",
        "name": "Anthropic: Claude Haiku 4.5",
        "provider": "Anthropic",
        "releasedAt": "2025-10-15",
        "contextLength": 200000,
        "inputPer1M": 1,
        "outputPer1M": 5,
        "summary": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance...",
        "description": "Claude Haiku 4.5 is Anthropic’s fastest and most efficient model, delivering near-frontier intelligence at a fraction of the cost and latency of larger Claude models. Matching Claude Sonnet 4’s performance...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5-image",
        "name": "OpenAI: GPT-5 Image",
        "provider": "OpenAI",
        "releasedAt": "2025-10-14",
        "contextLength": 400000,
        "inputPer1M": 10,
        "outputPer1M": 10,
        "summary": "GPT-5 Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior inst…",
        "description": "GPT-5 Image combines OpenAI's GPT-5 model with state-of-the-art image generation capabilities. It offers major improvements in reasoning, code quality, and user experience while incorporating GPT Image 1's superior inst…",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning",
            "Code generation"
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
            "temperature",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "qwen/qwen3-vl-8b-instruct",
        "name": "Qwen: Qwen3 VL 8B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-10-14",
        "contextLength": 131072,
        "inputPer1M": 0.08,
        "outputPer1M": 0.5,
        "summary": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interl…",
        "description": "Qwen3-VL-8B-Instruct is a multimodal vision-language model from the Qwen3-VL series, built for high-fidelity understanding and reasoning across text, images, and video. It features improved multimodal fusion with Interl…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-vl-8b-thinking",
        "name": "Qwen: Qwen3 VL 8B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-10-14",
        "contextLength": 131072,
        "inputPer1M": 0.117,
        "outputPer1M": 1.365,
        "summary": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enh…",
        "description": "Qwen3-VL-8B-Thinking is the reasoning-optimized variant of the Qwen3-VL-8B multimodal model, designed for advanced visual and textual reasoning across complex scenes, documents, and temporal sequences. It integrates enh…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/llama-3.3-nemotron-super-49b-v1.5",
        "name": "NVIDIA: Llama 3.3 Nemotron Super 49B V1.5",
        "provider": "Nvidia",
        "releasedAt": "2025-10-10",
        "contextLength": 131072,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.39999999999999997,
        "summary": "Llama-3.3-Nemotron-Super-49B-v1.5 is a 49B-parameter, English-centric reasoning/chat model derived from Meta’s Llama-3.3-70B-Instruct with a 128K context. It’s post-trained for agentic workflows (RAG, tool calling) via…",
        "description": "Llama-3.3-Nemotron-Super-49B-v1.5 is a 49B-parameter, English-centric reasoning/chat model derived from Meta’s Llama-3.3-70B-Instruct with a 128K context. It’s post-trained for agentic workflows (RAG, tool calling) via…",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o3-deep-research",
        "name": "OpenAI: o3 Deep Research",
        "provider": "OpenAI",
        "releasedAt": "2025-10-10",
        "contextLength": 200000,
        "inputPer1M": 10,
        "outputPer1M": 40,
        "summary": "o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks. Note: This model always uses the 'web_search' tool which adds additional cost.",
        "description": "o3-deep-research is OpenAI's advanced model for deep research, designed to tackle complex, multi-step research tasks. Note: This model always uses the 'web_search' tool which adds additional cost.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o4-mini-deep-research",
        "name": "OpenAI: o4 Mini Deep Research",
        "provider": "OpenAI",
        "releasedAt": "2025-10-10",
        "contextLength": 200000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks. Note: This model always uses the 'web_search' tool which adds additional cost.",
        "description": "o4-mini-deep-research is OpenAI's faster, more affordable deep research model—ideal for tackling complex, multi-step research tasks. Note: This model always uses the 'web_search' tool which adds additional cost.",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
            "Advanced reasoning"
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
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baidu/ernie-4.5-21b-a3b-thinking",
        "name": "Baidu: ERNIE 4.5 21B A3B Thinking",
        "provider": "Baidu",
        "releasedAt": "2025-10-09",
        "contextLength": 131072,
        "inputPer1M": 0.07,
        "outputPer1M": 0.28,
        "summary": "ERNIE-4.5-21B-A3B-Thinking is Baidu's upgraded lightweight MoE model, refined to boost reasoning depth and quality for top-tier performance in logical puzzles, math, science, coding, text generation, and expert-level ac…",
        "description": "ERNIE-4.5-21B-A3B-Thinking is Baidu's upgraded lightweight MoE model, refined to boost reasoning depth and quality for top-tier performance in logical puzzles, math, science, coding, text generation, and expert-level ac…",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/veo3.1/image-to-video",
        "name": "Veo 3.1",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Veo 3.1 is the latest state-of-the art video generation model from Google DeepMind",
        "description": "Veo 3.1 is the latest state-of-the art video generation model from Google DeepMind",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3.1",
        "name": "Veo 3.1",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Veo 3.1 by Google, the most advanced AI video generation model in the world. With sound on!",
        "description": "Veo 3.1 by Google, the most advanced AI video generation model in the world. With sound on!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3.1/first-last-frame-to-video",
        "name": "Veo 3.1",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos from a first and last framed using Google's Veo 3.1",
        "description": "Generate videos from a first and last framed using Google's Veo 3.1",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3.1/reference-to-video",
        "name": "Veo 3.1",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate Videos from images using Google's Veo 3.1",
        "description": "Generate Videos from images using Google's Veo 3.1",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3.1/fast/image-to-video",
        "name": "Veo 3.1 Fast",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos from your image prompts using Veo 3.1 fast.",
        "description": "Generate videos from your image prompts using Veo 3.1 fast.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3.1/fast",
        "name": "Veo 3.1 Fast",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Faster and more cost effective version of Google's Veo 3.1!",
        "description": "Faster and more cost effective version of Google's Veo 3.1!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3.1/fast/first-last-frame-to-video",
        "name": "Veo 3.1 Fast",
        "provider": "Remova Media",
        "releasedAt": "2025-10-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate videos from a first/last frame using Google's Veo 3.1 Fast",
        "description": "Generate videos from a first/last frame using Google's Veo 3.1 Fast",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-2.5-flash-image",
        "name": "Google: Nano Banana (Gemini 2.5 Flash Image)",
        "provider": "Google",
        "releasedAt": "2025-10-07",
        "contextLength": 32768,
        "inputPer1M": 0.3,
        "outputPer1M": 2.5,
        "summary": "Gemini 2.5 Flash Image, a.k.a. \"Nano Banana,\" is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation,...",
        "description": "Gemini 2.5 Flash Image, a.k.a. \"Nano Banana,\" is now generally available. It is a state of the art image generation model with contextual understanding. It is capable of image generation,...",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "image"
    },
    {
        "id": "openai/gpt-5-pro",
        "name": "OpenAI: GPT-5 Pro",
        "provider": "OpenAI",
        "releasedAt": "2025-10-06",
        "contextLength": 400000,
        "inputPer1M": 15,
        "outputPer1M": 120,
        "summary": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and...",
        "description": "GPT-5 Pro is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-vl-30b-a3b-instruct",
        "name": "Qwen: Qwen3 VL 30B A3B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-10-06",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 0.52,
        "summary": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It…",
        "description": "Qwen3-VL-30B-A3B-Instruct is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Instruct variant optimizes instruction-following for general multimodal tasks. It…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-vl-30b-a3b-thinking",
        "name": "Qwen: Qwen3 VL 30B A3B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-10-06",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 1.56,
        "summary": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels...",
        "description": "Qwen3-VL-30B-A3B-Thinking is a multimodal model that unifies strong text generation with visual understanding for images and videos. Its Thinking variant enhances reasoning in STEM, math, and complex tasks. It excels...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/sora-2/text-to-video",
        "name": "Sora 2",
        "provider": "Remova Media",
        "releasedAt": "2025-10-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-video endpoint for Sora 2, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "description": "Text-to-video endpoint for Sora 2, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/sora-2/image-to-video",
        "name": "Sora 2",
        "provider": "Remova Media",
        "releasedAt": "2025-10-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image-to-video endpoint for Sora 2, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "description": "Image-to-video endpoint for Sora 2, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/sora-2/image-to-video/pro",
        "name": "Sora 2",
        "provider": "Remova Media",
        "releasedAt": "2025-10-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Image-to-video endpoint for Sora 2 Pro, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "description": "Image-to-video endpoint for Sora 2 Pro, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/sora-2/text-to-video/pro",
        "name": "Sora 2",
        "provider": "Remova Media",
        "releasedAt": "2025-10-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Text-to-video endpoint for Sora 2 Pro, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "description": "Text-to-video endpoint for Sora 2 Pro, OpenAI's state-of-the-art video model capable of creating richly detailed, dynamic clips with audio from natural language or images.",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "z-ai/glm-4.6",
        "name": "Z.ai: GLM 4.6",
        "provider": "Z.ai",
        "releasedAt": "2025-09-30",
        "contextLength": 204800,
        "inputPer1M": 0.39,
        "outputPer1M": 1.9,
        "summary": "Compared with GLM-4.5, this generation brings several key improvements: Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex...",
        "description": "Compared with GLM-4.5, this generation brings several key improvements: Longer context window: The context window has been expanded from 128K to 200K tokens, enabling the model to handle more complex...",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-sonnet-4.5",
        "name": "Anthropic: Claude Sonnet 4.5",
        "provider": "Anthropic",
        "releasedAt": "2025-09-29",
        "contextLength": 1000000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with...",
        "description": "Claude Sonnet 4.5 is Anthropic’s most advanced Sonnet model to date, optimized for real-world agents and coding workflows. It delivers state-of-the-art performance on coding benchmarks such as SWE-bench Verified, with...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-v3.2-exp",
        "name": "DeepSeek: DeepSeek V3.2 Exp",
        "provider": "DeepSeek",
        "releasedAt": "2025-09-29",
        "contextLength": 163840,
        "inputPer1M": 0.27,
        "outputPer1M": 0.41,
        "summary": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attentio…",
        "description": "DeepSeek-V3.2-Exp is an experimental large language model released by DeepSeek as an intermediate step between V3.1 and future architectures. It introduces DeepSeek Sparse Attention (DSA), a fine-grained sparse attentio…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "thedrummer/cydonia-24b-v4.1",
        "name": "TheDrummer: Cydonia 24B V4.1",
        "provider": "Thedrummer",
        "releasedAt": "2025-09-27",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.5,
        "summary": "Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.",
        "description": "Uncensored and creative writing model based on Mistral Small 3.2 24B with good recall, prompt adherence, and intelligence.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "relace/relace-apply-3",
        "name": "Relace: Relace Apply 3",
        "provider": "Relace",
        "releasedAt": "2025-09-26",
        "contextLength": 256000,
        "inputPer1M": 0.85,
        "outputPer1M": 1.25,
        "summary": "Relace Apply 3 is a specialized code-patching LLM that merges AI-suggested edits straight into your source files. It can apply updates from GPT-4o, Claude, and others into your files at...",
        "description": "Relace Apply 3 is a specialized code-patching LLM that merges AI-suggested edits straight into your source files. It can apply updates from GPT-4o, Claude, and others into your files at...",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-2.5-flash-lite-preview-09-2025",
        "name": "Google: Gemini 2.5 Flash Lite Preview 09-2025",
        "provider": "Google",
        "releasedAt": "2025-09-25",
        "contextLength": 1048576,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.39999999999999997,
        "summary": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
        "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/wan-25-preview/image-to-video",
        "name": "Wan 2.5 Image to Video",
        "provider": "Remova Media",
        "releasedAt": "2025-09-24",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Wan 2.5 image-to-video model.",
        "description": "Wan 2.5 image-to-video model.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/omnihuman/v1.5",
        "name": "Bytedance OmniHuman v1.5",
        "provider": "Remova Media",
        "releasedAt": "2025-09-23",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Omnihuman v1.5 is a new and improved version of Omnihuman. It generates video using an image of a human figure paired with an audio file. It produces vivid, high-quality videos where the character’s emotions and movemen…",
        "description": "Omnihuman v1.5 is a new and improved version of Omnihuman. It generates video using an image of a human figure paired with an audio file. It produces vivid, high-quality videos where the character’s emotions and movemen…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-5-codex",
        "name": "OpenAI: GPT-5 Codex",
        "provider": "OpenAI",
        "releasedAt": "2025-09-23",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering task…",
        "description": "GPT-5-Codex is a specialized version of GPT-5 optimized for software engineering and coding workflows. It is designed for both interactive development sessions and long, independent execution of complex engineering task…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "include_reasoning",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-coder-plus",
        "name": "Qwen: Qwen3 Coder Plus",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 1000000,
        "inputPer1M": 0.65,
        "outputPer1M": 3.25,
        "summary": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and...",
        "description": "Qwen3 Coder Plus is Alibaba's proprietary version of the Open Source Qwen3 Coder 480B A35B. It is a powerful coding agent model specializing in autonomous programming via tool calling and...",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-max",
        "name": "Qwen: Qwen3 Max",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 262144,
        "inputPer1M": 0.78,
        "outputPer1M": 3.9,
        "summary": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It…",
        "description": "Qwen3-Max is an updated release built on the Qwen3 series, offering major improvements in reasoning, instruction following, multilingual support, and long-tail knowledge coverage compared to the January 2025 version. It…",
        "bestFor": [
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-vl-235b-a22b-instruct",
        "name": "Qwen: Qwen3 VL 235B A22B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 262144,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.88,
        "summary": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document…",
        "description": "Qwen3-VL-235B-A22B Instruct is an open-weight multimodal model that unifies strong text generation with visual understanding across images and video. The Instruct model targets general vision-language use (VQA, document…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-vl-235b-a22b-thinking",
        "name": "Qwen: Qwen3 VL 235B A22B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-09-23",
        "contextLength": 131072,
        "inputPer1M": 0.26,
        "outputPer1M": 2.6,
        "summary": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math....",
        "description": "Qwen3-VL-235B-A22B Thinking is a multimodal model that unifies strong text generation with visual understanding across images and video. The Thinking model is optimized for multimodal reasoning in STEM and math....",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-v3.1-terminus",
        "name": "DeepSeek: DeepSeek V3.1 Terminus",
        "provider": "DeepSeek",
        "releasedAt": "2025-09-22",
        "contextLength": 163840,
        "inputPer1M": 0.21,
        "outputPer1M": 0.7899999999999999,
        "summary": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent c…",
        "description": "DeepSeek-V3.1 Terminus is an update to [DeepSeek V3.1](/deepseek/deepseek-chat-v3.1) that maintains the model's original capabilities while addressing issues reported by users, including language consistency and agent c…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.5-turbo/pro/text-to-video",
        "name": "Kling v2.5 Text to Video",
        "provider": "Remova Media",
        "releasedAt": "2025-09-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.5 Turbo Pro: Top-tier text-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "description": "Kling 2.5 Turbo Pro: Top-tier text-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.5-turbo/pro/image-to-video",
        "name": "Kling Video",
        "provider": "Remova Media",
        "releasedAt": "2025-09-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.5 Turbo Pro: Top-tier image-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "description": "Kling 2.5 Turbo Pro: Top-tier image-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/seedvr/upscale/image",
        "name": "SeedVR2",
        "provider": "Remova Media",
        "releasedAt": "2025-09-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Use SeedVR2 to upscale your images",
        "description": "Use SeedVR2 to upscale your images",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/seedvr/upscale/video",
        "name": "SeedVR2",
        "provider": "Remova Media",
        "releasedAt": "2025-09-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Upscale your videos using SeedVR2 with temporal consistency!",
        "description": "Upscale your videos using SeedVR2 with temporal consistency!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/veed/fabric-1.0",
        "name": "Fabric 1.0",
        "provider": "Veed",
        "releasedAt": "2025-09-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "VEED Fabric 1.0 is an image-to-video API that turns any image into a talking video",
        "description": "VEED Fabric 1.0 is an image-to-video API that turns any image into a talking video",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "x-ai/grok-4-fast",
        "name": "xAI: Grok 4 Fast",
        "provider": "xAI",
        "releasedAt": "2025-09-19",
        "contextLength": 2000000,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.5,
        "summary": "Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window. It comes in two flavors: non-reasoning and reasoning. Read more about the model...",
        "description": "Grok 4 Fast is xAI's latest multimodal model with SOTA cost-efficiency and a 2M token context window. It comes in two flavors: non-reasoning and reasoning. Read more about the model...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "alibaba/tongyi-deepresearch-30b-a3b",
        "name": "Tongyi DeepResearch 30B A3B",
        "provider": "Alibaba",
        "releasedAt": "2025-09-18",
        "contextLength": 131072,
        "inputPer1M": 0.09,
        "outputPer1M": 0.44999999999999996,
        "summary": "Tongyi DeepResearch is an agentic large language model developed by Tongyi Lab, with 30 billion total parameters activating only 3 billion per token. It's optimized for long-horizon, deep information-seeking tasks...",
        "description": "Tongyi DeepResearch is an agentic large language model developed by Tongyi Lab, with 30 billion total parameters activating only 3 billion per token. It's optimized for long-horizon, deep information-seeking tasks...",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-coder-flash",
        "name": "Qwen: Qwen3 Coder Flash",
        "provider": "Qwen",
        "releasedAt": "2025-09-17",
        "contextLength": 1000000,
        "inputPer1M": 0.195,
        "outputPer1M": 0.975,
        "summary": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling...",
        "description": "Qwen3 Coder Flash is Alibaba's fast and cost efficient version of their proprietary Qwen3 Coder Plus. It is a powerful coding agent model specializing in autonomous programming via tool calling...",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-next-80b-a3b-instruct",
        "name": "Qwen: Qwen3 Next 80B A3B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-09-11",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 1.1,
        "summary": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowled…",
        "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowled…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-next-80b-a3b-instruct:free",
        "name": "Qwen: Qwen3 Next 80B A3B Instruct (free)",
        "provider": "Qwen",
        "releasedAt": "2025-09-11",
        "contextLength": 262144,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowled…",
        "description": "Qwen3-Next-80B-A3B-Instruct is an instruction-tuned chat model in the Qwen3-Next series optimized for fast, stable responses without “thinking” traces. It targets complex tasks across reasoning, code generation, knowled…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "presence_penalty",
            "response_format",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-next-80b-a3b-thinking",
        "name": "Qwen: Qwen3 Next 80B A3B Thinking",
        "provider": "Qwen",
        "releasedAt": "2025-09-11",
        "contextLength": 131072,
        "inputPer1M": 0.0975,
        "outputPer1M": 0.78,
        "summary": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging,…",
        "description": "Qwen3-Next-80B-A3B-Thinking is a reasoning-first chat model in the Qwen3-Next line that outputs structured “thinking” traces by default. It’s designed for hard multi-step problems; math proofs, code synthesis/debugging,…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bytedance/seedream/v4/text-to-image",
        "name": "Bytedance Seedream v4",
        "provider": "Remova Media",
        "releasedAt": "2025-09-09",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "A new-generation image creation model ByteDance, Seedream 4.0 integrates image generation and image editing capabilities into a single, unified architecture.",
        "description": "A new-generation image creation model ByteDance, Seedream 4.0 integrates image generation and image editing capabilities into a single, unified architecture.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedream/v4/edit",
        "name": "Bytedance Seedream v4 Edit",
        "provider": "Remova Media",
        "releasedAt": "2025-09-09",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "A new-generation image creation model ByteDance, Seedream 4.0 integrates image generation and image editing capabilities into a single, unified architecture.",
        "description": "A new-generation image creation model ByteDance, Seedream 4.0 integrates image generation and image editing capabilities into a single, unified architecture.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "qwen/qwen-plus-2025-07-28",
        "name": "Qwen: Qwen Plus 0728",
        "provider": "Qwen",
        "releasedAt": "2025-09-08",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 0.78,
        "summary": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-plus-2025-07-28:thinking",
        "name": "Qwen: Qwen Plus 0728 (thinking)",
        "provider": "Qwen",
        "releasedAt": "2025-09-08",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 0.78,
        "summary": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "description": "Qwen Plus 0728, based on the Qwen3 foundation model, is a 1 million context hybrid reasoning model with a balanced performance, speed, and cost combination.",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-nano-9b-v2",
        "name": "NVIDIA: Nemotron Nano 9B V2",
        "provider": "Nvidia",
        "releasedAt": "2025-09-05",
        "contextLength": 131072,
        "inputPer1M": 0.04,
        "outputPer1M": 0.16,
        "summary": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and...",
        "description": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and...",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/nemotron-nano-9b-v2:free",
        "name": "NVIDIA: Nemotron Nano 9B V2 (free)",
        "provider": "Nvidia",
        "releasedAt": "2025-09-05",
        "contextLength": 128000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and...",
        "description": "NVIDIA-Nemotron-Nano-9B-v2 is a large language model (LLM) trained from scratch by NVIDIA, and designed as a unified model for both reasoning and non-reasoning tasks. It responds to user queries and...",
        "bestFor": [
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "moonshotai/kimi-k2-0905",
        "name": "MoonshotAI: Kimi K2 0905",
        "provider": "Moonshotai",
        "releasedAt": "2025-09-04",
        "contextLength": 262144,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2). It is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32...",
        "description": "Kimi K2 0905 is the September update of [Kimi K2 0711](moonshotai/kimi-k2). It is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32...",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/elevenlabs/sound-effects/v2",
        "name": "Elevenlabs",
        "provider": "Remova Media",
        "releasedAt": "2025-09-02",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate sound effects using ElevenLabs advanced sound effects model.",
        "description": "Generate sound effects using ElevenLabs advanced sound effects model.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-audio",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "qwen/qwen3-30b-a3b-thinking-2507",
        "name": "Qwen: Qwen3 30B A3B Thinking 2507",
        "provider": "Qwen",
        "releasedAt": "2025-08-28",
        "contextLength": 131072,
        "inputPer1M": 0.08,
        "outputPer1M": 0.39999999999999997,
        "summary": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where interna…",
        "description": "Qwen3-30B-A3B-Thinking-2507 is a 30B parameter Mixture-of-Experts reasoning model optimized for complex tasks requiring extended multi-step thinking. The model is designed specifically for “thinking mode,” where interna…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/gemini-25-flash-image/edit",
        "name": "Gemini 2.5 Flash Image",
        "provider": "Remova Media",
        "releasedAt": "2025-08-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's famous original image generation and editing model, a.k.a Nano Banana",
        "description": "Google's famous original image generation and editing model, a.k.a Nano Banana",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/gemini-25-flash-image",
        "name": "Gemini 2.5 Flash Image",
        "provider": "Remova Media",
        "releasedAt": "2025-08-26",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's famous original image generation and editing model, a.k.a Nano Banana",
        "description": "Google's famous original image generation and editing model, a.k.a Nano Banana",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "nousresearch/hermes-4-405b",
        "name": "Nous: Hermes 4 405B",
        "provider": "Nousresearch",
        "releasedAt": "2025-08-26",
        "contextLength": 131072,
        "inputPer1M": 1,
        "outputPer1M": 3,
        "summary": "Hermes 4 is a large-scale reasoning model built on Meta-Llama-3.1-405B and released by Nous Research. It introduces a hybrid reasoning mode, where the model can choose to deliberate internally with...",
        "description": "Hermes 4 is a large-scale reasoning model built on Meta-Llama-3.1-405B and released by Nous Research. It introduces a hybrid reasoning mode, where the model can choose to deliberate internally with...",
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
            "response_format",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nousresearch/hermes-4-70b",
        "name": "Nous: Hermes 4 70B",
        "provider": "Nousresearch",
        "releasedAt": "2025-08-26",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 0.39999999999999997,
        "summary": "Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B. It introduces the same hybrid mode as the larger 405B release, allowing the model to either...",
        "description": "Hermes 4 70B is a hybrid reasoning model from Nous Research, built on Meta-Llama-3.1-70B. It introduces the same hybrid mode as the larger 405B release, allowing the model to either...",
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
            "response_format",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "x-ai/grok-code-fast-1",
        "name": "xAI: Grok Code Fast 1",
        "provider": "xAI",
        "releasedAt": "2025-08-26",
        "contextLength": 256000,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 1.5,
        "summary": "Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding. With reasoning traces visible in the response, developers can steer Grok Code for high-quality...",
        "description": "Grok Code Fast 1 is a speedy and economical reasoning model that excels at agentic coding. With reasoning traces visible in the response, developers can steer Grok Code for high-quality...",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-chat-v3.1",
        "name": "DeepSeek: DeepSeek V3.1",
        "provider": "DeepSeek",
        "releasedAt": "2025-08-21",
        "contextLength": 32768,
        "inputPer1M": 0.15,
        "outputPer1M": 0.75,
        "summary": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context...",
        "description": "DeepSeek-V3.1 is a large hybrid reasoning model (671B parameters, 37B active) that supports both thinking and non-thinking modes via prompt templates. It extends the DeepSeek-V3 base with a two-phase long-context...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/elevenlabs/tts/eleven-v3",
        "name": "Elevenlabs",
        "provider": "Remova Media",
        "releasedAt": "2025-08-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate text-to-speech audio using Eleven-v3 from ElevenLabs.",
        "description": "Generate text-to-speech audio using Eleven-v3 from ElevenLabs.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-audio",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/nano-banana/edit",
        "name": "Nano Banana",
        "provider": "Remova Media",
        "releasedAt": "2025-08-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's famous original image generation and editing model",
        "description": "Google's famous original image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/nano-banana",
        "name": "Nano Banana",
        "provider": "Remova Media",
        "releasedAt": "2025-08-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google's famous original image generation and editing model",
        "description": "Google's famous original image generation and editing model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-4o-audio-preview",
        "name": "OpenAI: GPT-4o Audio",
        "provider": "OpenAI",
        "releasedAt": "2025-08-15",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The gpt-4o-audio-preview model adds support for audio inputs as prompts. This enhancement allows the model to detect nuances within audio recordings and add depth to generated user experiences. Audio outputs...",
        "description": "The gpt-4o-audio-preview model adds support for audio inputs as prompts. This enhancement allows the model to detect nuances within audio recordings and add depth to generated user experiences. Audio outputs...",
        "bestFor": [
            "Audio workflows",
            "Agent workflows"
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "audio"
    },
    {
        "id": "mistralai/mistral-medium-3.1",
        "name": "Mistral: Mistral Medium 3.1",
        "provider": "Mistral AI",
        "releasedAt": "2025-08-13",
        "contextLength": 131072,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It bal…",
        "description": "Mistral Medium 3.1 is an updated version of Mistral Medium 3, which is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It bal…",
        "bestFor": [
            "Image workflows",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baidu/ernie-4.5-21b-a3b",
        "name": "Baidu: ERNIE 4.5 21B A3B",
        "provider": "Baidu",
        "releasedAt": "2025-08-12",
        "contextLength": 120000,
        "inputPer1M": 0.07,
        "outputPer1M": 0.28,
        "summary": "A sophisticated text-based Mixture-of-Experts (MoE) model featuring 21B total parameters with 3B activated per token, delivering exceptional multimodal understanding and generation through heterogeneous MoE structures a…",
        "description": "A sophisticated text-based Mixture-of-Experts (MoE) model featuring 21B total parameters with 3B activated per token, delivering exceptional multimodal understanding and generation through heterogeneous MoE structures a…",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baidu/ernie-4.5-vl-28b-a3b",
        "name": "Baidu: ERNIE 4.5 VL 28B A3B",
        "provider": "Baidu",
        "releasedAt": "2025-08-12",
        "contextLength": 30000,
        "inputPer1M": 0.14,
        "outputPer1M": 0.56,
        "summary": "A powerful multimodal Mixture-of-Experts chat model featuring 28B total parameters with 3B activated per token, delivering exceptional text and vision understanding through its innovative heterogeneous MoE structure wit…",
        "description": "A powerful multimodal Mixture-of-Experts chat model featuring 28B total parameters with 3B activated per token, delivering exceptional text and vision understanding through its innovative heterogeneous MoE structure wit…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/ffmpeg-api/merge-videos",
        "name": "Ffmpeg Api",
        "provider": "Remova Media",
        "releasedAt": "2025-08-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Use ffmpeg capabilities to merge 2 or more videos.",
        "description": "Use ffmpeg capabilities to merge 2 or more videos.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "z-ai/glm-4.5v",
        "name": "Z.ai: GLM 4.5V",
        "provider": "Z.ai",
        "releasedAt": "2025-08-11",
        "contextLength": 65536,
        "inputPer1M": 0.6,
        "outputPer1M": 1.7999999999999998,
        "summary": "GLM-4.5V is a vision-language foundation model for multimodal agent applications. Built on a Mixture-of-Experts (MoE) architecture with 106B parameters and 12B activated parameters, it achieves state-of-the-art results…",
        "description": "GLM-4.5V is a vision-language foundation model for multimodal agent applications. Built on a Mixture-of-Experts (MoE) architecture with 106B parameters and 12B activated parameters, it achieves state-of-the-art results…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "ai21/jamba-large-1.7",
        "name": "AI21: Jamba Large 1.7",
        "provider": "Ai21",
        "releasedAt": "2025-08-08",
        "contextLength": 256000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "Jamba Large 1.7 is the latest model in the Jamba open family, offering improvements in grounding, instruction-following, and overall efficiency. Built on a hybrid SSM-Transformer architecture with a 256K context...",
        "description": "Jamba Large 1.7 is the latest model in the Jamba open family, offering improvements in grounding, instruction-following, and overall efficiency. Built on a hybrid SSM-Transformer architecture with a 256K context...",
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
            "max_tokens",
            "response_format",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5",
        "name": "OpenAI: GPT-5",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 400000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accur…",
        "description": "GPT-5 is OpenAI’s most advanced model, offering major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks that require step-by-step reasoning, instruction following, and accur…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5-chat",
        "name": "OpenAI: GPT-5 Chat",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 128000,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.",
        "description": "GPT-5 Chat is designed for advanced, natural, multimodal, and context-aware conversations for enterprise applications.",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5-mini",
        "name": "OpenAI: GPT-5 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 400000,
        "inputPer1M": 0.25,
        "outputPer1M": 2,
        "summary": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost....",
        "description": "GPT-5 Mini is a compact version of GPT-5, designed to handle lighter-weight reasoning tasks. It provides the same instruction-following and safety-tuning benefits as GPT-5, but with reduced latency and cost....",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-5-nano",
        "name": "OpenAI: GPT-5 Nano",
        "provider": "OpenAI",
        "releasedAt": "2025-08-07",
        "contextLength": 400000,
        "inputPer1M": 0.049999999999999996,
        "outputPer1M": 0.39999999999999997,
        "summary": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger...",
        "description": "GPT-5-Nano is the smallest and fastest variant in the GPT-5 system, optimized for developer tools, rapid interactions, and ultra-low latency environments. While limited in reasoning depth compared to its larger...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "reasoning",
            "response_format",
            "seed",
            "structured_outputs",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/minimax/hailuo-02-fast/image-to-video",
        "name": "Minimax",
        "provider": "Remova Media",
        "releasedAt": "2025-08-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Create blazing fast and economical videos with MiniMax Hailuo-02 Image To Video API at 512p resolution",
        "description": "Create blazing fast and economical videos with MiniMax Hailuo-02 Image To Video API at 512p resolution",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "anthropic/claude-opus-4.1",
        "name": "Anthropic: Claude Opus 4.1",
        "provider": "Anthropic",
        "releasedAt": "2025-08-05",
        "contextLength": 200000,
        "inputPer1M": 15,
        "outputPer1M": 75,
        "summary": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains...",
        "description": "Claude Opus 4.1 is an updated version of Anthropic’s flagship model, offering improved performance in coding, reasoning, and agentic tasks. It achieves 74.5% on SWE-bench Verified and shows notable gains...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-oss-120b",
        "name": "OpenAI: gpt-oss-120b",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0.039,
        "outputPer1M": 0.19,
        "summary": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward…",
        "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward…",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-oss-120b:free",
        "name": "OpenAI: gpt-oss-120b (free)",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward…",
        "description": "gpt-oss-120b is an open-weight, 117B-parameter Mixture-of-Experts (MoE) language model from OpenAI designed for high-reasoning, agentic, and general-purpose production use cases. It activates 5.1B parameters per forward…",
        "bestFor": [
            "Agent workflows",
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
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-oss-20b",
        "name": "OpenAI: gpt-oss-20b",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0.03,
        "outputPer1M": 0.14,
        "summary": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
        "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "reasoning_effort",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-oss-20b:free",
        "name": "OpenAI: gpt-oss-20b (free)",
        "provider": "OpenAI",
        "releasedAt": "2025-08-05",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
        "description": "gpt-oss-20b is an open-weight 21B parameter model released by OpenAI under the Apache 2.0 license. It uses a Mixture-of-Experts (MoE) architecture with 3.6B active parameters per forward pass, optimized for...",
        "bestFor": [
            "Agent workflows",
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
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/qwen-image",
        "name": "Qwen Image",
        "provider": "Remova Media",
        "releasedAt": "2025-08-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen-Image is an image generation foundation model in the Qwen series that achieves significant advances in complex text rendering and precise image editing.",
        "description": "Qwen-Image is an image generation foundation model in the Qwen series that achieves significant advances in complex text rendering and precise image editing.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/codestral-2508",
        "name": "Mistral: Codestral 2508",
        "provider": "Mistral AI",
        "releasedAt": "2025-08-01",
        "contextLength": 256000,
        "inputPer1M": 0.3,
        "outputPer1M": 0.8999999999999999,
        "summary": "Mistral's cutting-edge language model for coding released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation. Blog Post",
        "description": "Mistral's cutting-edge language model for coding released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM), code correction and test generation. Blog Post",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/veo3/image-to-video",
        "name": "Veo3",
        "provider": "Remova Media",
        "releasedAt": "2025-08-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Veo 3 is the latest state-of-the art video generation model from Google DeepMind",
        "description": "Veo 3 is the latest state-of-the art video generation model from Google DeepMind",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "qwen/qwen3-coder-30b-a3b-instruct",
        "name": "Qwen: Qwen3 Coder 30B A3B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-07-31",
        "contextLength": 160000,
        "inputPer1M": 0.07,
        "outputPer1M": 0.27,
        "summary": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use.…",
        "description": "Qwen3-Coder-30B-A3B-Instruct is a 30.5B parameter Mixture-of-Experts (MoE) model with 128 experts (8 active per forward pass), designed for advanced code generation, repository-scale understanding, and agentic tool use.…",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/wan/v2.2-a14b/image-to-video/turbo",
        "name": "Wan",
        "provider": "Remova Media",
        "releasedAt": "2025-07-31",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Wan-2.2 Turbo image-to-video is a video model that generates high-quality videos with high visual quality and motion diversity from text prompts.",
        "description": "Wan-2.2 Turbo image-to-video is a video model that generates high-quality videos with high visual quality and motion diversity from text prompts.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "qwen/qwen3-30b-a3b-instruct-2507",
        "name": "Qwen: Qwen3 30B A3B Instruct 2507",
        "provider": "Qwen",
        "releasedAt": "2025-07-29",
        "contextLength": 262144,
        "inputPer1M": 0.09,
        "outputPer1M": 0.3,
        "summary": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction foll…",
        "description": "Qwen3-30B-A3B-Instruct-2507 is a 30.5B-parameter mixture-of-experts language model from Qwen, with 3.3B active parameters per inference. It operates in non-thinking mode and is designed for high-quality instruction foll…",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/wan/v2.2-a14b/image-to-video",
        "name": "Wan v2.2 A14B",
        "provider": "Remova Media",
        "releasedAt": "2025-07-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "fal-ai/wan/v2.2-A14B/image-to-video",
        "description": "fal-ai/wan/v2.2-A14B/image-to-video",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "qwen/qwen3-235b-a22b-thinking-2507",
        "name": "Qwen: Qwen3 235B A22B Thinking 2507",
        "provider": "Qwen",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0.14950000000000002,
        "outputPer1M": 1.495,
        "summary": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively suppo…",
        "description": "Qwen3-235B-A22B-Thinking-2507 is a high-performance, open-weight Mixture-of-Experts (MoE) language model optimized for complex reasoning tasks. It activates 22B of its 235B parameters per forward pass and natively suppo…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "z-ai/glm-4.5",
        "name": "Z.ai: GLM 4.5",
        "provider": "Z.ai",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0.6,
        "outputPer1M": 2.2,
        "summary": "GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications. It leverages a Mixture-of-Experts (MoE) architecture and supports a context length of up to 128k tokens. GLM-4.5 delivers sign…",
        "description": "GLM-4.5 is our latest flagship foundation model, purpose-built for agent-based applications. It leverages a Mixture-of-Experts (MoE) architecture and supports a context length of up to 128k tokens. GLM-4.5 delivers sign…",
        "bestFor": [
            "Agent workflows",
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
            "response_format",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "z-ai/glm-4.5-air",
        "name": "Z.ai: GLM 4.5 Air",
        "provider": "Z.ai",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0.13,
        "outputPer1M": 0.85,
        "summary": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact pa…",
        "description": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact pa…",
        "bestFor": [
            "Agent workflows",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "z-ai/glm-4.5-air:free",
        "name": "Z.ai: GLM 4.5 Air (free)",
        "provider": "Z.ai",
        "releasedAt": "2025-07-25",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact pa…",
        "description": "GLM-4.5-Air is the lightweight variant of our latest flagship model family, also purpose-built for agent-centric applications. Like GLM-4.5, it adopts the Mixture-of-Experts (MoE) architecture but with a more compact pa…",
        "bestFor": [
            "Agent workflows",
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
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "z-ai/glm-4-32b",
        "name": "Z.ai: GLM 4 32B",
        "provider": "Z.ai",
        "releasedAt": "2025-07-24",
        "contextLength": 128000,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.09999999999999999,
        "summary": "GLM 4 32B is a cost-effective foundation language model. It can efficiently perform complex tasks and has significantly enhanced capabilities in tool use, online search, and code-related intelligent tasks. It...",
        "description": "GLM 4 32B is a cost-effective foundation language model. It can efficiently perform complex tasks and has significantly enhanced capabilities in tool use, online search, and code-related intelligent tasks. It...",
        "bestFor": [
            "Agent workflows",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-coder",
        "name": "Qwen: Qwen3 Coder 480B A35B",
        "provider": "Qwen",
        "releasedAt": "2025-07-23",
        "contextLength": 262144,
        "inputPer1M": 0.22,
        "outputPer1M": 1.7999999999999998,
        "summary": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over…",
        "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-coder:free",
        "name": "Qwen: Qwen3 Coder 480B A35B (free)",
        "provider": "Qwen",
        "releasedAt": "2025-07-23",
        "contextLength": 262000,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over…",
        "description": "Qwen3-Coder-480B-A35B-Instruct is a Mixture-of-Experts (MoE) code generation model developed by the Qwen team. It is optimized for agentic coding tasks such as function calling, tool use, and long-context reasoning over…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "presence_penalty",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "bytedance/ui-tars-1.5-7b",
        "name": "ByteDance: UI-TARS 7B",
        "provider": "Bytedance",
        "releasedAt": "2025-07-22",
        "contextLength": 128000,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.19999999999999998,
        "summary": "UI-TARS-1.5 is a multimodal vision-language agent optimized for GUI-based environments, including desktop interfaces, web browsers, mobile systems, and games. Built by ByteDance, it builds upon the UI-TARS framework wit…",
        "description": "UI-TARS-1.5 is a multimodal vision-language agent optimized for GUI-based environments, including desktop interfaces, web browsers, mobile systems, and games. Built by ByteDance, it builds upon the UI-TARS framework wit…",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-2.5-flash-lite",
        "name": "Google: Gemini 2.5 Flash Lite",
        "provider": "Google",
        "releasedAt": "2025-07-22",
        "contextLength": 1048576,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.39999999999999997,
        "summary": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
        "description": "Gemini 2.5 Flash-Lite is a lightweight reasoning model in the Gemini 2.5 family, optimized for ultra-low latency and cost efficiency. It offers improved throughput, faster token generation, and better performance...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-235b-a22b-2507",
        "name": "Qwen: Qwen3 235B A22B Instruct 2507",
        "provider": "Qwen",
        "releasedAt": "2025-07-21",
        "contextLength": 262144,
        "inputPer1M": 0.071,
        "outputPer1M": 0.09999999999999999,
        "summary": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose…",
        "description": "Qwen3-235B-A22B-Instruct-2507 is a multilingual, instruction-tuned mixture-of-experts language model based on the Qwen3-235B architecture, with 22B active parameters per forward pass. It is optimized for general-purpose…",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "moonshotai/kimi-k2",
        "name": "MoonshotAI: Kimi K2 0711",
        "provider": "Moonshotai",
        "releasedAt": "2025-07-11",
        "contextLength": 131072,
        "inputPer1M": 0.5700000000000001,
        "outputPer1M": 2.3,
        "summary": "Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for...",
        "description": "Kimi K2 Instruct is a large-scale Mixture-of-Experts (MoE) language model developed by Moonshot AI, featuring 1 trillion total parameters with 32 billion active per forward pass. It is optimized for...",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "switchpoint/router",
        "name": "Switchpoint Router",
        "provider": "Switchpoint",
        "releasedAt": "2025-07-11",
        "contextLength": 131072,
        "inputPer1M": 0.85,
        "outputPer1M": 3.4,
        "summary": "Switchpoint AI's router instantly analyzes your request and directs it to the optimal AI from an ever-evolving library. As the world of LLMs advances, our router gets smarter, ensuring you...",
        "description": "Switchpoint AI's router instantly analyzes your request and directs it to the optimal AI from an ever-evolving library. As the world of LLMs advances, our router gets smarter, ensuring you...",
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
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/devstral-medium",
        "name": "Mistral: Devstral Medium",
        "provider": "Mistral AI",
        "releasedAt": "2025-07-10",
        "contextLength": 131072,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI. Positioned as a step up from Devstral Small, it achieves...",
        "description": "Devstral Medium is a high-performance code generation and agentic reasoning model developed jointly by Mistral AI and All Hands AI. Positioned as a step up from Devstral Small, it achieves...",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/devstral-small",
        "name": "Mistral: Devstral Small 1.1",
        "provider": "Mistral AI",
        "releasedAt": "2025-07-10",
        "contextLength": 131072,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.3,
        "summary": "Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI. Finetuned from Mistral Small 3.1 and...",
        "description": "Devstral Small 1.1 is a 24B parameter open-weight language model for software engineering agents, developed by Mistral AI in collaboration with All Hands AI. Finetuned from Mistral Small 3.1 and...",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3n-e2b-it:free",
        "name": "Google: Gemma 3n 2B (free)",
        "provider": "Google",
        "releasedAt": "2025-07-09",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture. Based...",
        "description": "Gemma 3n E2B IT is a multimodal, instruction-tuned model developed by Google DeepMind, designed to operate efficiently at an effective parameter size of 2B while leveraging a 6B architecture. Based...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
        "name": "Venice: Uncensored (free)",
        "provider": "Cognitivecomputations",
        "releasedAt": "2025-07-09",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai. This model is designed as an “uncensored” instruct-t…",
        "description": "Venice Uncensored Dolphin Mistral 24B Venice Edition is a fine-tuned variant of Mistral-Small-24B-Instruct-2501, developed by dphn.ai in collaboration with Venice.ai. This model is designed as an “uncensored” instruct-t…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/veo3/fast",
        "name": "Veo 3 Fast",
        "provider": "Remova Media",
        "releasedAt": "2025-07-09",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Faster and more cost effective version of Google's Veo 3!",
        "description": "Faster and more cost effective version of Google's Veo 3!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/veo3/fast/image-to-video",
        "name": "Veo 3 Fast [Image to Video]",
        "provider": "Remova Media",
        "releasedAt": "2025-07-09",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Now with a 50% price drop. Generate videos from your image prompts using Veo 3 fast.",
        "description": "Now with a 50% price drop. Generate videos from your image prompts using Veo 3 fast.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "x-ai/grok-4",
        "name": "xAI: Grok 4",
        "provider": "xAI",
        "releasedAt": "2025-07-09",
        "contextLength": 256000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Grok 4 is xAI's latest reasoning model with a 256k context window. It supports parallel tool calling, structured outputs, and both image and text inputs. Note that reasoning is not...",
        "description": "Grok 4 is xAI's latest reasoning model with a 256k context window. It supports parallel tool calling, structured outputs, and both image and text inputs. Note that reasoning is not...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "tencent/hunyuan-a13b-instruct",
        "name": "Tencent: Hunyuan A13B Instruct",
        "provider": "Tencent",
        "releasedAt": "2025-07-08",
        "contextLength": 131072,
        "inputPer1M": 0.14,
        "outputPer1M": 0.5700000000000001,
        "summary": "Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought. It offers competitive benchmark...",
        "description": "Hunyuan-A13B is a 13B active parameter Mixture-of-Experts (MoE) language model developed by Tencent, with a total parameter count of 80B and support for reasoning via Chain-of-Thought. It offers competitive benchmark...",
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
            "reasoning",
            "response_format",
            "structured_outputs",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "tngtech/deepseek-r1t2-chimera",
        "name": "TNG: DeepSeek R1T2 Chimera",
        "provider": "Tngtech",
        "releasedAt": "2025-07-08",
        "contextLength": 163840,
        "inputPer1M": 0.3,
        "outputPer1M": 1.1,
        "summary": "DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech. It is a 671 B-parameter mixture-of-experts text-generation model assembled from DeepSeek-AI’s R1-0528, R1, and V3-0324 checkpoints with an…",
        "description": "DeepSeek-TNG-R1T2-Chimera is the second-generation Chimera model from TNG Tech. It is a 671 B-parameter mixture-of-experts text-generation model assembled from DeepSeek-AI’s R1-0528, R1, and V3-0324 checkpoints with an…",
        "bestFor": [
            "Agent workflows",
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
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "morph/morph-v3-fast",
        "name": "Morph: Morph V3 Fast",
        "provider": "Morph",
        "releasedAt": "2025-07-07",
        "contextLength": 81920,
        "inputPer1M": 0.7999999999999999,
        "outputPer1M": 1.2,
        "summary": "Morph's fastest apply model for code edits. ~10,500 tokens/sec with 96% accuracy for rapid code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <cod…",
        "description": "Morph's fastest apply model for code edits. ~10,500 tokens/sec with 96% accuracy for rapid code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</instruction> <cod…",
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
            "stop",
            "temperature"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "morph/morph-v3-large",
        "name": "Morph: Morph V3 Large",
        "provider": "Morph",
        "releasedAt": "2025-07-07",
        "contextLength": 262144,
        "inputPer1M": 0.8999999999999999,
        "outputPer1M": 1.9,
        "summary": "Morph's high-accuracy apply model for complex code edits. ~4,500 tokens/sec with 98% accuracy for precise code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</in…",
        "description": "Morph's high-accuracy apply model for complex code edits. ~4,500 tokens/sec with 98% accuracy for precise code transformations. The model requires the prompt to be in the following format: <instruction>{instruction}</in…",
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
            "stop",
            "temperature"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baidu/ernie-4.5-300b-a47b",
        "name": "Baidu: ERNIE 4.5 300B A47B",
        "provider": "Baidu",
        "releasedAt": "2025-06-30",
        "contextLength": 123000,
        "inputPer1M": 0.28,
        "outputPer1M": 1.1,
        "summary": "ERNIE-4.5-300B-A47B is a 300B parameter Mixture-of-Experts (MoE) language model developed by Baidu as part of the ERNIE 4.5 series. It activates 47B parameters per token and supports text generation in...",
        "description": "ERNIE-4.5-300B-A47B is a 300B parameter Mixture-of-Experts (MoE) language model developed by Baidu as part of the ERNIE 4.5 series. It activates 47B parameters per token and supports text generation in...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "baidu/ernie-4.5-vl-424b-a47b",
        "name": "Baidu: ERNIE 4.5 VL 424B A47B",
        "provider": "Baidu",
        "releasedAt": "2025-06-30",
        "contextLength": 123000,
        "inputPer1M": 0.42,
        "outputPer1M": 1.25,
        "summary": "ERNIE-4.5-VL-424B-A47B is a multimodal Mixture-of-Experts (MoE) model from Baidu’s ERNIE 4.5 series, featuring 424B total parameters with 47B active per token. It is trained jointly on text and image data...",
        "description": "ERNIE-4.5-VL-424B-A47B is a multimodal Mixture-of-Experts (MoE) model from Baidu’s ERNIE 4.5 series, featuring 424B total parameters with 47B active per token. It is trained jointly on text and image data...",
        "bestFor": [
            "Image workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/topaz/upscale/image",
        "name": "Topaz",
        "provider": "Remova Media",
        "releasedAt": "2025-06-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Use the powerful and accurate topaz image enhancer to enhance your images.",
        "description": "Use the powerful and accurate topaz image enhancer to enhance your images.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-kontext-lora",
        "name": "Flux Kontext Lora",
        "provider": "Remova Media",
        "releasedAt": "2025-06-25",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Fast endpoint for the FLUX.1 Kontext [dev] model with LoRA support, enabling rapid and high-quality image editing using pre-trained LoRA adaptations for specific styles, brand identities, and product-specific outputs.",
        "description": "Fast endpoint for the FLUX.1 Kontext [dev] model with LoRA support, enabling rapid and high-quality image editing using pre-trained LoRA adaptations for specific styles, brand identities, and product-specific outputs.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/fashn/tryon/v1.6",
        "name": "FASHN Virtual Try-On V1.6",
        "provider": "Remova Media",
        "releasedAt": "2025-06-24",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FASHN v1.6 delivers precise virtual try-on capabilities, accurately rendering garment details like text and patterns at 864x1296 resolution from both on-model and flat-lay photo references.",
        "description": "FASHN v1.6 delivers precise virtual try-on capabilities, accurately rendering garment details like text and patterns at 864x1296 resolution from both on-model and flat-lay photo references.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/mistral-small-3.2-24b-instruct",
        "name": "Mistral: Mistral Small 3.2 24B",
        "provider": "Mistral AI",
        "releasedAt": "2025-06-20",
        "contextLength": 128000,
        "inputPer1M": 0.075,
        "outputPer1M": 0.19999999999999998,
        "summary": "Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling. Compared to the 3.1 release, version 3.2 signi…",
        "description": "Mistral-Small-3.2-24B-Instruct-2506 is an updated 24B parameter model from Mistral optimized for instruction following, repetition reduction, and improved function calling. Compared to the 3.1 release, version 3.2 signi…",
        "bestFor": [
            "Image workflows",
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
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/minimax/hailuo-02/pro/image-to-video",
        "name": "MiniMax Hailuo 02 [Pro] (Image to Video)",
        "provider": "Remova Media",
        "releasedAt": "2025-06-18",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "MiniMax Hailuo-02 Image To Video API (Pro, 1080p): Advanced image-to-video generation model with 1080p resolution",
        "description": "MiniMax Hailuo-02 Image To Video API (Pro, 1080p): Advanced image-to-video generation model with 1080p resolution",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/minimax/hailuo-02/standard/image-to-video",
        "name": "MiniMax Hailuo 02 [Standard] (Image to Video)",
        "provider": "Remova Media",
        "releasedAt": "2025-06-18",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "MiniMax Hailuo-02 Image To Video API (Standard, 768p, 512p): Advanced image-to-video generation model with 768p and 512p resolutions",
        "description": "MiniMax Hailuo-02 Image To Video API (Standard, 768p, 512p): Advanced image-to-video generation model with 768p and 512p resolutions",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-2.5-flash",
        "name": "Google: Gemini 2.5 Flash",
        "provider": "Google",
        "releasedAt": "2025-06-17",
        "contextLength": 1048576,
        "inputPer1M": 0.3,
        "outputPer1M": 2.5,
        "summary": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provid…",
        "description": "Gemini 2.5 Flash is Google's state-of-the-art workhorse model, specifically designed for advanced reasoning, coding, mathematics, and scientific tasks. It includes built-in \"thinking\" capabilities, enabling it to provid…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-2.5-pro",
        "name": "Google: Gemini 2.5 Pro",
        "provider": "Google",
        "releasedAt": "2025-06-17",
        "contextLength": 1048576,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced…",
        "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "minimax/minimax-m1",
        "name": "MiniMax: MiniMax M1",
        "provider": "Minimax",
        "releasedAt": "2025-06-17",
        "contextLength": 1000000,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2.2,
        "summary": "MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference. It leverages a hybrid Mixture-of-Experts (MoE) architecture paired with a custom \"lightning attention…",
        "description": "MiniMax-M1 is a large-scale, open-weight reasoning model designed for extended context and high-efficiency inference. It leverages a hybrid Mixture-of-Experts (MoE) architecture paired with a custom \"lightning attention…",
        "bestFor": [
            "Agent workflows",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1/pro/image-to-video",
        "name": "Seedance 1.0 Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-06-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedance 1.0 Pro, a high quality video generation model developed by Bytedance.",
        "description": "Seedance 1.0 Pro, a high quality video generation model developed by Bytedance.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1/pro/text-to-video",
        "name": "Seedance 1.0 Pro",
        "provider": "Remova Media",
        "releasedAt": "2025-06-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedance 1.0 Pro, a high quality video generation model developed by Bytedance.",
        "description": "Seedance 1.0 Pro, a high quality video generation model developed by Bytedance.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1/lite/image-to-video",
        "name": "Seedance 1.0 Lite",
        "provider": "Remova Media",
        "releasedAt": "2025-06-13",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedance 1.0 Lite",
        "description": "Seedance 1.0 Lite",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bytedance/seedance/v1/lite/text-to-video",
        "name": "Seedance 1.0 Lite",
        "provider": "Remova Media",
        "releasedAt": "2025-06-13",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Seedance 1.0 Lite",
        "description": "Seedance 1.0 Lite",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/imagen4/preview/fast",
        "name": "Imagen 4",
        "provider": "Remova Media",
        "releasedAt": "2025-06-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google’s highest quality image generation model",
        "description": "Google’s highest quality image generation model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/recraft/vectorize",
        "name": "Recraft",
        "provider": "Remova Media",
        "releasedAt": "2025-06-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Converts a given raster image to SVG format using Recraft model.",
        "description": "Converts a given raster image to SVG format using Recraft model.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/o3-pro",
        "name": "OpenAI: o3 Pro",
        "provider": "OpenAI",
        "releasedAt": "2025-06-10",
        "contextLength": 200000,
        "inputPer1M": 20,
        "outputPer1M": 80,
        "summary": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently...",
        "description": "The o-series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o3-pro model uses more compute to think harder and provide consistently...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "x-ai/grok-3",
        "name": "xAI: Grok 3",
        "provider": "xAI",
        "releasedAt": "2025-06-10",
        "contextLength": 131072,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in...",
        "description": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in...",
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
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "x-ai/grok-3-mini",
        "name": "xAI: Grok 3 Mini",
        "provider": "xAI",
        "releasedAt": "2025-06-10",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.5,
        "summary": "A lightweight model that thinks before responding. Fast, smart, and great for logic-based tasks that do not require deep domain knowledge. The raw thinking traces are accessible.",
        "description": "A lightweight model that thinks before responding. Fast, smart, and great for logic-based tasks that do not require deep domain knowledge. The raw thinking traces are accessible.",
        "bestFor": [
            "Agent workflows",
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
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/ffmpeg-api/extract-frame",
        "name": "Ffmpeg Api",
        "provider": "Remova Media",
        "releasedAt": "2025-06-09",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "ffmpeg endpoint for first, middle and last frame extraction from videos",
        "description": "ffmpeg endpoint for first, middle and last frame extraction from videos",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/ffmpeg-api/merge-audio-video",
        "name": "Ffmpeg Api Merge Audio-Video",
        "provider": "Remova Media",
        "releasedAt": "2025-06-09",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Merge videos with standalone audio files or audio from video files.",
        "description": "Merge videos with standalone audio files or audio from video files.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-2.5-pro-preview",
        "name": "Google: Gemini 2.5 Pro Preview 06-05",
        "provider": "Google",
        "releasedAt": "2025-06-05",
        "contextLength": 1048576,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced…",
        "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced…",
        "bestFor": [
            "Image workflows",
            "Audio workflows",
            "Agent workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/veo3",
        "name": "Veo 3",
        "provider": "Remova Media",
        "releasedAt": "2025-06-05",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Veo 3 by Google, the most advanced AI video generation model in the world. With sound on!",
        "description": "Veo 3 by Google, the most advanced AI video generation model in the world. With sound on!",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-1/schnell",
        "name": "FLUX.1 [schnell]",
        "provider": "Remova Media",
        "releasedAt": "2025-06-02",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Fastest inference in the world for the 12 billion parameter FLUX.1 [schnell] text-to-image model.",
        "description": "Fastest inference in the world for the 12 billion parameter FLUX.1 [schnell] text-to-image model.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-pro/kontext/max",
        "name": "FLUX.1 Kontext [max]",
        "provider": "Remova Media",
        "releasedAt": "2025-05-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.1 Kontext [max] is a model with greatly improved prompt adherence and typography generation meet premium consistency for editing without compromise on speed.",
        "description": "FLUX.1 Kontext [max] is a model with greatly improved prompt adherence and typography generation meet premium consistency for editing without compromise on speed.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-pro/kontext/max/multi",
        "name": "FLUX.1 Kontext [max]",
        "provider": "Remova Media",
        "releasedAt": "2025-05-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Experimental version of FLUX.1 Kontext [max] with multi image handling capabilities",
        "description": "Experimental version of FLUX.1 Kontext [max] with multi image handling capabilities",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-pro/kontext/multi",
        "name": "FLUX.1 Kontext [pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-05-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Experimental version of FLUX.1 Kontext [pro] with multi image handling capabilities",
        "description": "Experimental version of FLUX.1 Kontext [pro] with multi image handling capabilities",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.1/master/image-to-video",
        "name": "Kling 2.1 Master",
        "provider": "Remova Media",
        "releasedAt": "2025-05-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.1 Master: The premium endpoint for Kling 2.1, designed for top-tier image-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "description": "Kling 2.1 Master: The premium endpoint for Kling 2.1, designed for top-tier image-to-video generation with unparalleled motion fluidity, cinematic visuals, and exceptional prompt precision.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "deepseek/deepseek-r1-0528",
        "name": "DeepSeek: R1 0528",
        "provider": "DeepSeek",
        "releasedAt": "2025-05-28",
        "contextLength": 163840,
        "inputPer1M": 0.5,
        "outputPer1M": 2.1500000000000004,
        "summary": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active.…",
        "description": "May 28th update to the [original DeepSeek R1](/deepseek/deepseek-r1) Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active.…",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-kontext/dev",
        "name": "FLUX.1 Kontext [dev]",
        "provider": "Remova Media",
        "releasedAt": "2025-05-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Frontier image editing model.",
        "description": "Frontier image editing model.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-pro/kontext",
        "name": "FLUX.1 Kontext [pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-05-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.1 Kontext [pro] handles both text and reference images as inputs, seamlessly enabling targeted, local edits and complex transformations of entire scenes.",
        "description": "FLUX.1 Kontext [pro] handles both text and reference images as inputs, seamlessly enabling targeted, local edits and complex transformations of entire scenes.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-pro/kontext/text-to-image",
        "name": "FLUX.1 Kontext [pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-05-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "The FLUX.1 Kontext [pro] text-to-image delivers state-of-the-art image generation results with unprecedented prompt following, photorealistic rendering, and flawless typography.",
        "description": "The FLUX.1 Kontext [pro] text-to-image delivers state-of-the-art image generation results with unprecedented prompt following, photorealistic rendering, and flawless typography.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.1/pro/image-to-video",
        "name": "Kling 2.1 (pro)",
        "provider": "Remova Media",
        "releasedAt": "2025-05-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.1 Pro is an advanced endpoint for the Kling 2.1 model, offering professional-grade videos with enhanced visual fidelity, precise camera movements, and dynamic motion control, perfect for cinematic storytelling.",
        "description": "Kling 2.1 Pro is an advanced endpoint for the Kling 2.1 model, offering professional-grade videos with enhanced visual fidelity, precise camera movements, and dynamic motion control, perfect for cinematic storytelling.",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v2.1/standard/image-to-video",
        "name": "Kling 2.1 (standard)",
        "provider": "Remova Media",
        "releasedAt": "2025-05-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Kling 2.1 Standard is a cost-efficient endpoint for the Kling 2.1 model, delivering high-quality image-to-video generation",
        "description": "Kling 2.1 Standard is a cost-efficient endpoint for the Kling 2.1 model, delivering high-quality image-to-video generation",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "anthropic/claude-opus-4",
        "name": "Anthropic: Claude Opus 4",
        "provider": "Anthropic",
        "releasedAt": "2025-05-22",
        "contextLength": 200000,
        "inputPer1M": 15,
        "outputPer1M": 75,
        "summary": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in...",
        "description": "Claude Opus 4 is benchmarked as the world’s best coding model, at time of release, bringing sustained performance on complex, long-running tasks and agent workflows. It sets new benchmarks in...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-sonnet-4",
        "name": "Anthropic: Claude Sonnet 4",
        "provider": "Anthropic",
        "releasedAt": "2025-05-22",
        "contextLength": 1000000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on…",
        "description": "Claude Sonnet 4 significantly enhances the capabilities of its predecessor, Sonnet 3.7, excelling in both coding and reasoning tasks with improved precision and controllability. Achieving state-of-the-art performance on…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3n-e4b-it",
        "name": "Google: Gemma 3n 4B",
        "provider": "Google",
        "releasedAt": "2025-05-20",
        "contextLength": 32768,
        "inputPer1M": 0.06,
        "outputPer1M": 0.12,
        "summary": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks.…",
        "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks.…",
        "bestFor": [
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3n-e4b-it:free",
        "name": "Google: Gemma 3n 4B (free)",
        "provider": "Google",
        "releasedAt": "2025-05-20",
        "contextLength": 8192,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks.…",
        "description": "Gemma 3n E4B-it is optimized for efficient execution on mobile and low-resource devices, such as phones, laptops, and tablets. It supports multimodal inputs—including text, visual data, and audio—enabling diverse tasks.…",
        "bestFor": [
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/imagen4/preview",
        "name": "Imagen 4",
        "provider": "Remova Media",
        "releasedAt": "2025-05-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google’s highest quality image generation model",
        "description": "Google’s highest quality image generation model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/imagen4/preview/ultra",
        "name": "Imagen 4 Ultra",
        "provider": "Remova Media",
        "releasedAt": "2025-05-20",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Google’s highest quality image generation model",
        "description": "Google’s highest quality image generation model",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-2.5-pro-preview-05-06",
        "name": "Google: Gemini 2.5 Pro Preview 05-06",
        "provider": "Google",
        "releasedAt": "2025-05-07",
        "contextLength": 1048576,
        "inputPer1M": 1.25,
        "outputPer1M": 10,
        "summary": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced…",
        "description": "Gemini 2.5 Pro is Google’s state-of-the-art AI model designed for advanced reasoning, coding, mathematics, and scientific tasks. It employs “thinking” capabilities, enabling it to reason through responses with enhanced…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-medium-3",
        "name": "Mistral: Mistral Medium 3",
        "provider": "Mistral AI",
        "releasedAt": "2025-05-07",
        "contextLength": 131072,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 2,
        "summary": "Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal per…",
        "description": "Mistral Medium 3 is a high-performance enterprise-grade language model designed to deliver frontier-level capabilities at significantly reduced operational cost. It balances state-of-the-art reasoning and multimodal per…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/recraft/upscale/crisp",
        "name": "Recraft Crisp Upscale",
        "provider": "Remova Media",
        "releasedAt": "2025-05-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Enhances a given raster image using 'crisp upscale' tool, boosting resolution with a focus on refining small details and faces.",
        "description": "Enhances a given raster image using 'crisp upscale' tool, boosting resolution with a focus on refining small details and faces.",
        "bestFor": [
            "Image workflows",
            "Agent workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/recraft/v3/text-to-image",
        "name": "Recraft V3",
        "provider": "Remova Media",
        "releasedAt": "2025-05-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Recraft V3 is a text-to-image model with the ability to generate long texts, vector art, images in brand style, and much more. As of today, it is SOTA in image generation, proven by Hugging Face's industry-leading Text-…",
        "description": "Recraft V3 is a text-to-image model with the ability to generate long texts, vector art, images in brand style, and much more. As of today, it is SOTA in image generation, proven by Hugging Face's industry-leading Text-…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/minimax/speech-02-hd",
        "name": "MiniMax Speech-02 HD",
        "provider": "Remova Media",
        "releasedAt": "2025-05-06",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate speech from text prompts and different voices using the MiniMax Speech-02 HD model, which leverages advanced AI techniques to create high-quality text-to-speech.",
        "description": "Generate speech from text prompts and different voices using the MiniMax Speech-02 HD model, which leverages advanced AI techniques to create high-quality text-to-speech.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-speech",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "arcee-ai/coder-large",
        "name": "Arcee AI: Coder Large",
        "provider": "Arcee Ai",
        "releasedAt": "2025-05-05",
        "contextLength": 32768,
        "inputPer1M": 0.5,
        "outputPer1M": 0.7999999999999999,
        "summary": "Coder‑Large is a 32 B‑parameter offspring of Qwen 2.5‑Instruct that has been further trained on permissively‑licensed GitHub, CodeSearchNet and synthetic bug‑fix corpora. It supports a 32k context window, enabling multi…",
        "description": "Coder‑Large is a 32 B‑parameter offspring of Qwen 2.5‑Instruct that has been further trained on permissively‑licensed GitHub, CodeSearchNet and synthetic bug‑fix corpora. It supports a 32k context window, enabling multi…",
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
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "arcee-ai/maestro-reasoning",
        "name": "Arcee AI: Maestro Reasoning",
        "provider": "Arcee Ai",
        "releasedAt": "2025-05-05",
        "contextLength": 131072,
        "inputPer1M": 0.8999999999999999,
        "outputPer1M": 3.3000000000000003,
        "summary": "Maestro Reasoning is Arcee's flagship analysis model: a 32 B‑parameter derivative of Qwen 2.5‑32 B tuned with DPO and chain‑of‑thought RL for step‑by‑step logic. Compared to the earlier 7 B...",
        "description": "Maestro Reasoning is Arcee's flagship analysis model: a 32 B‑parameter derivative of Qwen 2.5‑32 B tuned with DPO and chain‑of‑thought RL for step‑by‑step logic. Compared to the earlier 7 B...",
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
            "logit_bias",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "repetition_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "arcee-ai/spotlight",
        "name": "Arcee AI: Spotlight",
        "provider": "Arcee Ai",
        "releasedAt": "2025-05-05",
        "contextLength": 131072,
        "inputPer1M": 0.18,
        "outputPer1M": 0.18,
        "summary": "Spotlight is a 7‑billion‑parameter vision‑language model derived from Qwen 2.5‑VL and fine‑tuned by Arcee AI for tight image‑text grounding tasks. It offers a 32 k‑token context window, enabling rich multimodal...",
        "description": "Spotlight is a 7‑billion‑parameter vision‑language model derived from Qwen 2.5‑VL and fine‑tuned by Arcee AI for tight image‑text grounding tasks. It offers a 32 k‑token context window, enabling rich multimodal...",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "arcee-ai/virtuoso-large",
        "name": "Arcee AI: Virtuoso Large",
        "provider": "Arcee Ai",
        "releasedAt": "2025-05-05",
        "contextLength": 131072,
        "inputPer1M": 0.75,
        "outputPer1M": 1.2,
        "summary": "Virtuoso‑Large is Arcee's top‑tier general‑purpose LLM at 72 B parameters, tuned to tackle cross‑domain reasoning, creative writing and enterprise QA. Unlike many 70 B peers, it retains the 128 k...",
        "description": "Virtuoso‑Large is Arcee's top‑tier general‑purpose LLM at 72 B parameters, tuned to tackle cross‑domain reasoning, creative writing and enterprise QA. Unlike many 70 B peers, it retains the 128 k...",
        "bestFor": [
            "Agent workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/ideogram/v3",
        "name": "Ideogram Text to Image",
        "provider": "Remova Media",
        "releasedAt": "2025-05-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate high-quality images, posters, and logos with Ideogram V3. Features exceptional typography handling and realistic outputs optimized for commercial and creative use.",
        "description": "Generate high-quality images, posters, and logos with Ideogram V3. Features exceptional typography handling and realistic outputs optimized for commercial and creative use.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "meta-llama/llama-guard-4-12b",
        "name": "Meta: Llama Guard 4 12B",
        "provider": "Meta",
        "releasedAt": "2025-04-30",
        "contextLength": 163840,
        "inputPer1M": 0.18,
        "outputPer1M": 0.18,
        "summary": "Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM...",
        "description": "Llama Guard 4 is a Llama 4 Scout-derived multimodal pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM...",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-14b",
        "name": "Qwen: Qwen3 14B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.06,
        "outputPer1M": 0.24,
        "summary": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
        "description": "Qwen3-14B is a dense 14.8B parameter causal language model from the Qwen3 series, designed for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-235b-a22b",
        "name": "Qwen: Qwen3 235B A22B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 131072,
        "inputPer1M": 0.45499999999999996,
        "outputPer1M": 1.8199999999999998,
        "summary": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a \"thinking\" mode for complex reasoning, math, and…",
        "description": "Qwen3-235B-A22B is a 235B parameter mixture-of-experts (MoE) model developed by Qwen, activating 22B parameters per forward pass. It supports seamless switching between a \"thinking\" mode for complex reasoning, math, and…",
        "bestFor": [
            "Agent workflows",
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
            "presence_penalty",
            "reasoning",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-30b-a3b",
        "name": "Qwen: Qwen3 30B A3B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.08,
        "outputPer1M": 0.28,
        "summary": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique...",
        "description": "Qwen3, the latest generation in the Qwen large language model series, features both dense and mixture-of-experts (MoE) architectures to excel in reasoning, multilingual support, and advanced agent tasks. Its unique...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_tokens",
            "min_p",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-32b",
        "name": "Qwen: Qwen3 32B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.08,
        "outputPer1M": 0.24,
        "summary": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
        "description": "Qwen3-32B is a dense 32.8B parameter causal language model from the Qwen3 series, optimized for both complex reasoning and efficient dialogue. It supports seamless switching between a \"thinking\" mode for...",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen3-8b",
        "name": "Qwen: Qwen3 8B",
        "provider": "Qwen",
        "releasedAt": "2025-04-28",
        "contextLength": 40960,
        "inputPer1M": 0.049999999999999996,
        "outputPer1M": 0.39999999999999997,
        "summary": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between \"thinking\" mode for math,...",
        "description": "Qwen3-8B is a dense 8.2B parameter causal language model from the Qwen3 series, designed for both reasoning-heavy tasks and efficient dialogue. It supports seamless switching between \"thinking\" mode for math,...",
        "bestFor": [
            "Agent workflows",
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
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o3",
        "name": "OpenAI: o3",
        "provider": "OpenAI",
        "releasedAt": "2025-04-16",
        "contextLength": 200000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following....",
        "description": "o3 is a well-rounded and powerful model across domains. It sets a new standard for math, science, coding, and visual reasoning tasks. It also excels at technical writing and instruction-following....",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o4-mini",
        "name": "OpenAI: o4 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-04-16",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive r…",
        "description": "OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while retaining strong multimodal and agentic capabilities. It supports tool use and demonstrates competitive r…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o4-mini-high",
        "name": "OpenAI: o4 Mini High",
        "provider": "OpenAI",
        "releasedAt": "2025-04-16",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while re…",
        "description": "OpenAI o4-mini-high is the same model as [o4-mini](/openai/o4-mini) with reasoning_effort set to high. OpenAI o4-mini is a compact reasoning model in the o-series, optimized for fast, cost-efficient performance while re…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "alfredpros/codellama-7b-instruct-solidity",
        "name": "AlfredPros: CodeLLaMa 7B Instruct Solidity",
        "provider": "Alfredpros",
        "releasedAt": "2025-04-14",
        "contextLength": 4096,
        "inputPer1M": 0.7999999999999999,
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v2/master/image-to-video",
        "name": "Kling 2.0 Master",
        "provider": "Remova Media",
        "releasedAt": "2025-04-14",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate video clips from your images using Kling 2.0 Master",
        "description": "Generate video clips from your images using Kling 2.0 Master",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-4.1",
        "name": "OpenAI: GPT-4.1",
        "provider": "OpenAI",
        "releasedAt": "2025-04-14",
        "contextLength": 1047576,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o a…",
        "description": "GPT-4.1 is a flagship large language model optimized for advanced instruction following, real-world software engineering, and long-context reasoning. It supports a 1 million token context window and outperforms GPT-4o a…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4.1-mini",
        "name": "OpenAI: GPT-4.1 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-04-14",
        "contextLength": 1047576,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 1.5999999999999999,
        "summary": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard...",
        "description": "GPT-4.1 Mini is a mid-sized model delivering performance competitive with GPT-4o at substantially lower latency and cost. It retains a 1 million token context window and scores 45.1% on hard...",
        "bestFor": [
            "Image workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4.1-nano",
        "name": "OpenAI: GPT-4.1 Nano",
        "provider": "OpenAI",
        "releasedAt": "2025-04-14",
        "contextLength": 1047576,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.39999999999999997,
        "summary": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million...",
        "description": "For tasks that demand low latency, GPT‑4.1 nano is the fastest and cheapest model in the GPT-4.1 series. It delivers exceptional performance at a small size with its 1 million...",
        "bestFor": [
            "Image workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "response_format",
            "seed",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "x-ai/grok-3-beta",
        "name": "xAI: Grok 3 Beta",
        "provider": "xAI",
        "releasedAt": "2025-04-09",
        "contextLength": 131072,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in...",
        "description": "Grok 3 is the latest model from xAI. It's their flagship model that excels at enterprise use cases like data extraction, coding, and text summarization. Possesses deep domain knowledge in...",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "x-ai/grok-3-mini-beta",
        "name": "xAI: Grok 3 Mini Beta",
        "provider": "xAI",
        "releasedAt": "2025-04-09",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.5,
        "summary": "Grok 3 Mini is a lightweight, smaller thinking model. Unlike traditional models that generate answers immediately, Grok 3 Mini thinks before responding. It’s ideal for reasoning-heavy tasks that don’t demand...",
        "description": "Grok 3 Mini is a lightweight, smaller thinking model. Unlike traditional models that generate answers immediately, Grok 3 Mini thinks before responding. It’s ideal for reasoning-heavy tasks that don’t demand...",
        "bestFor": [
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-4-maverick",
        "name": "Meta: Llama 4 Maverick",
        "provider": "Meta",
        "releasedAt": "2025-04-05",
        "contextLength": 1048576,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward...",
        "description": "Llama 4 Maverick 17B Instruct (128E) is a high-capacity multimodal language model from Meta, built on a mixture-of-experts (MoE) architecture with 128 experts and 17 billion active parameters per forward...",
        "bestFor": [
            "Image workflows"
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-4-scout",
        "name": "Meta: Llama 4 Scout",
        "provider": "Meta",
        "releasedAt": "2025-04-05",
        "contextLength": 327680,
        "inputPer1M": 0.08,
        "outputPer1M": 0.3,
        "summary": "Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B. It supports native multimodal input...",
        "description": "Llama 4 Scout 17B Instruct (16E) is a mixture-of-experts (MoE) language model developed by Meta, activating 17 billion parameters out of a total of 109B. It supports native multimodal input...",
        "bestFor": [
            "Image workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux/dev",
        "name": "FLUX.1 [dev]",
        "provider": "Remova Media",
        "releasedAt": "2025-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.1 [dev] is a 12 billion parameter flow transformer that generates high-quality images from text. It is suitable for personal and commercial use.",
        "description": "FLUX.1 [dev] is a 12 billion parameter flow transformer that generates high-quality images from text. It is suitable for personal and commercial use.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/sync-lipsync/v2",
        "name": "Sync Lipsync 2.0",
        "provider": "Remova Media",
        "releasedAt": "2025-04-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate realistic lipsync animations from audio using advanced algorithms for high-quality synchronization with Sync Lipsync 2.0 model",
        "description": "Generate realistic lipsync animations from audio using advanced algorithms for high-quality synchronization with Sync Lipsync 2.0 model",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "deepseek/deepseek-chat-v3-0324",
        "name": "DeepSeek: DeepSeek V3 0324",
        "provider": "DeepSeek",
        "releasedAt": "2025-03-24",
        "contextLength": 163840,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.77,
        "summary": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs rea…",
        "description": "DeepSeek V3, a 685B-parameter, mixture-of-experts model, is the latest iteration of the flagship chat model family from the DeepSeek team. It succeeds the [DeepSeek V3](/deepseek/deepseek-chat-v3) model and performs rea…",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o1-pro",
        "name": "OpenAI: o1-pro",
        "provider": "OpenAI",
        "releasedAt": "2025-03-19",
        "contextLength": 200000,
        "inputPer1M": 150,
        "outputPer1M": 600,
        "summary": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide...",
        "description": "The o1 series of models are trained with reinforcement learning to think before they answer and perform complex reasoning. The o1-pro model uses more compute to think harder and provide...",
        "bestFor": [
            "Image workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-small-3.1-24b-instruct",
        "name": "Mistral: Mistral Small 3.1 24B",
        "provider": "Mistral AI",
        "releasedAt": "2025-03-17",
        "contextLength": 128000,
        "inputPer1M": 0.35,
        "outputPer1M": 0.56,
        "summary": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning an…",
        "description": "Mistral Small 3.1 24B Instruct is an upgraded variant of Mistral Small 3 (2501), featuring 24 billion parameters with advanced multimodal capabilities. It provides state-of-the-art performance in text-based reasoning an…",
        "bestFor": [
            "Image workflows",
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
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cohere/command-a",
        "name": "Cohere: Command A",
        "provider": "Cohere",
        "releasedAt": "2025-03-13",
        "contextLength": 256000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases. Compared to other leading proprietary...",
        "description": "Command A is an open-weights 111B parameter model with a 256k context window focused on delivering great performance across agentic, multilingual, and coding use cases. Compared to other leading proprietary...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3-12b-it",
        "name": "Google: Gemma 3 12B",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 131072,
        "inputPer1M": 0.04,
        "outputPer1M": 0.13,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3-12b-it:free",
        "name": "Google: Gemma 3 12B (free)",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "bestFor": [
            "Image workflows",
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
            "seed",
            "stop",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3-4b-it",
        "name": "Google: Gemma 3 4B",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 131072,
        "inputPer1M": 0.04,
        "outputPer1M": 0.08,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "bestFor": [
            "Image workflows",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3-4b-it:free",
        "name": "Google: Gemma 3 4B (free)",
        "provider": "Google",
        "releasedAt": "2025-03-13",
        "contextLength": 32768,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "bestFor": [
            "Image workflows",
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
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3-27b-it",
        "name": "Google: Gemma 3 27B",
        "provider": "Google",
        "releasedAt": "2025-03-12",
        "contextLength": 131072,
        "inputPer1M": 0.08,
        "outputPer1M": 0.16,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-3-27b-it:free",
        "name": "Google: Gemma 3 27B (free)",
        "provider": "Google",
        "releasedAt": "2025-03-12",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "description": "Gemma 3 introduces multimodality, supporting vision-language input and text outputs. It handles context windows up to 128k tokens, understands over 140 languages, and offers improved math, reasoning, and chat capabiliti…",
        "bestFor": [
            "Image workflows",
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
            "response_format",
            "seed",
            "stop",
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-search-preview",
        "name": "OpenAI: GPT-4o Search Preview",
        "provider": "OpenAI",
        "releasedAt": "2025-03-12",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "GPT-4o Search Previewis a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
        "description": "GPT-4o Search Previewis a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-mini-search-preview",
        "name": "OpenAI: GPT-4o-mini Search Preview",
        "provider": "OpenAI",
        "releasedAt": "2025-03-12",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "GPT-4o mini Search Preview is a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
        "description": "GPT-4o mini Search Preview is a specialized model for web search in Chat Completions. It is trained to understand and execute web search queries.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "rekaai/reka-flash-3",
        "name": "Reka Flash 3",
        "provider": "Rekaai",
        "releasedAt": "2025-03-12",
        "contextLength": 65536,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.19999999999999998,
        "summary": "Reka Flash 3 is a general-purpose, instruction-tuned large language model with 21 billion parameters, developed by Reka. It excels at general chat, coding tasks, instruction-following, and function calling. Featuring a.…",
        "description": "Reka Flash 3 is a general-purpose, instruction-tuned large language model with 21 billion parameters, developed by Reka. It excels at general chat, coding tasks, instruction-following, and function calling. Featuring a.…",
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
            "seed",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "thedrummer/skyfall-36b-v2",
        "name": "TheDrummer: Skyfall 36B V2",
        "provider": "Thedrummer",
        "releasedAt": "2025-03-10",
        "contextLength": 32768,
        "inputPer1M": 0.55,
        "outputPer1M": 0.7999999999999999,
        "summary": "Skyfall 36B v2 is an enhanced iteration of Mistral Small 2501, specifically fine-tuned for improved creativity, nuanced writing, role-playing, and coherent storytelling.",
        "description": "Skyfall 36B v2 is an enhanced iteration of Mistral Small 2501, specifically fine-tuned for improved creativity, nuanced writing, role-playing, and coherent storytelling.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/sonar-deep-research",
        "name": "Perplexity: Sonar Deep Research",
        "provider": "Perplexity",
        "releasedAt": "2025-03-07",
        "contextLength": 128000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "Sonar Deep Research is a research-focused model designed for multi-step retrieval, synthesis, and reasoning across complex topics. It autonomously searches, reads, and evaluates sources, refining its approach as it gath…",
        "description": "Sonar Deep Research is a research-focused model designed for multi-step retrieval, synthesis, and reasoning across complex topics. It autonomously searches, reads, and evaluates sources, refining its approach as it gath…",
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
            "temperature",
            "top_k",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/sonar-pro",
        "name": "Perplexity: Sonar Pro",
        "provider": "Perplexity",
        "releasedAt": "2025-03-07",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Note: Sonar Pro pricing includes Perplexity search pricing. See details here For enterprises seeking more advanced capabilities, the Sonar Pro API can handle in-depth, multi-step queries with added extensibility, like...",
        "description": "Note: Sonar Pro pricing includes Perplexity search pricing. See details here For enterprises seeking more advanced capabilities, the Sonar Pro API can handle in-depth, multi-step queries with added extensibility, like...",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/sonar-reasoning-pro",
        "name": "Perplexity: Sonar Reasoning Pro",
        "provider": "Perplexity",
        "releasedAt": "2025-03-07",
        "contextLength": 128000,
        "inputPer1M": 2,
        "outputPer1M": 8,
        "summary": "Note: Sonar Pro pricing includes Perplexity search pricing. See details here Sonar Reasoning Pro is a premier reasoning model powered by DeepSeek R1 with Chain of Thought (CoT). Designed for...",
        "description": "Note: Sonar Pro pricing includes Perplexity search pricing. See details here Sonar Reasoning Pro is a premier reasoning model powered by DeepSeek R1 with Chain of Thought (CoT). Designed for...",
        "bestFor": [
            "Image workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwq-32b",
        "name": "Qwen: QwQ 32B",
        "provider": "Qwen",
        "releasedAt": "2025-03-05",
        "contextLength": 131072,
        "inputPer1M": 0.15,
        "outputPer1M": 0.58,
        "summary": "QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks,...",
        "description": "QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks,...",
        "bestFor": [
            "Agent workflows",
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
            "reasoning",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/topaz/upscale/video",
        "name": "Topaz Video Upscale",
        "provider": "Remova Media",
        "releasedAt": "2025-03-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Professional-grade video upscaling using Topaz technology. Enhance your videos with high-quality upscaling.",
        "description": "Professional-grade video upscaling using Topaz technology. Enhance your videos with high-quality upscaling.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/elevenlabs/tts/multilingual-v2",
        "name": "ElevenLabs TTS Multilingual v2",
        "provider": "Remova Media",
        "releasedAt": "2025-02-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate multilingual text-to-speech audio using ElevenLabs TTS Multilingual v2.",
        "description": "Generate multilingual text-to-speech audio using ElevenLabs TTS Multilingual v2.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-audio",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/elevenlabs/tts/turbo-v2.5",
        "name": "ElevenLabs TTS Turbo v2.5",
        "provider": "Remova Media",
        "releasedAt": "2025-02-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate high-speed text-to-speech audio using ElevenLabs TTS Turbo v2.5.",
        "description": "Generate high-speed text-to-speech audio using ElevenLabs TTS Turbo v2.5.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-speech",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "google/gemini-2.0-flash-lite-001",
        "name": "Google: Gemini 2.0 Flash Lite",
        "provider": "Google",
        "releasedAt": "2025-02-25",
        "contextLength": 1048576,
        "inputPer1M": 0.075,
        "outputPer1M": 0.3,
        "summary": "Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/…",
        "description": "Gemini 2.0 Flash Lite offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-3.7-sonnet",
        "name": "Anthropic: Claude 3.7 Sonnet",
        "provider": "Anthropic",
        "releasedAt": "2025-02-24",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and...",
        "description": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "anthropic/claude-3.7-sonnet:thinking",
        "name": "Anthropic: Claude 3.7 Sonnet (thinking)",
        "provider": "Anthropic",
        "releasedAt": "2025-02-24",
        "contextLength": 200000,
        "inputPer1M": 3,
        "outputPer1M": 15,
        "summary": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and...",
        "description": "Claude 3.7 Sonnet is an advanced large language model with improved reasoning, coding, and problem-solving capabilities. It introduces a hybrid reasoning approach, allowing users to choose between rapid responses and...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-saba",
        "name": "Mistral: Saba",
        "provider": "Mistral AI",
        "releasedAt": "2025-02-17",
        "contextLength": 32768,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 0.6,
        "summary": "Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance. Trained on curate…",
        "description": "Mistral Saba is a 24B-parameter language model specifically designed for the Middle East and South Asia, delivering accurate and contextually relevant responses while maintaining efficient performance. Trained on curate…",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-guard-3-8b",
        "name": "Llama Guard 3 8B",
        "provider": "Meta",
        "releasedAt": "2025-02-12",
        "contextLength": 131072,
        "inputPer1M": 0.48,
        "outputPer1M": 0.03,
        "summary": "Llama Guard 3 is a Llama-3.1-8B pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification)...",
        "description": "Llama Guard 3 is a Llama-3.1-8B pretrained model, fine-tuned for content safety classification. Similar to previous versions, it can be used to classify content in both LLM inputs (prompt classification)...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o3-mini-high",
        "name": "OpenAI: o3 Mini High",
        "provider": "OpenAI",
        "releasedAt": "2025-02-12",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, ma…",
        "description": "OpenAI o3-mini-high is the same model as [o3-mini](/openai/o3-mini) with reasoning_effort set to high. o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, ma…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemini-2.0-flash-001",
        "name": "Google: Gemini 2.0 Flash",
        "provider": "Google",
        "releasedAt": "2025-02-05",
        "contextLength": 1000000,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.39999999999999997,
        "summary": "Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemin…",
        "description": "Gemini Flash 2.0 offers a significantly faster time to first token (TTFT) compared to [Gemini Flash 1.5](/google/gemini-flash-1.5), while maintaining quality on par with larger models like [Gemini Pro 1.5](/google/gemin…",
        "bestFor": [
            "Video workflows",
            "Image workflows",
            "Audio workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-vl-plus",
        "name": "Qwen: Qwen VL Plus",
        "provider": "Qwen",
        "releasedAt": "2025-02-05",
        "contextLength": 131072,
        "inputPer1M": 0.1365,
        "outputPer1M": 0.40950000000000003,
        "summary": "Qwen's Enhanced Large Visual Language Model. Significantly upgraded for detailed recognition capabilities and text recognition abilities, supporting ultra-high pixel resolutions up to millions of pixels and extreme aspe…",
        "description": "Qwen's Enhanced Large Visual Language Model. Significantly upgraded for detailed recognition capabilities and text recognition abilities, supporting ultra-high pixel resolutions up to millions of pixels and extreme aspe…",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "aion-labs/aion-1.0",
        "name": "AionLabs: Aion-1.0",
        "provider": "Aion Labs",
        "releasedAt": "2025-02-04",
        "contextLength": 131072,
        "inputPer1M": 4,
        "outputPer1M": 8,
        "summary": "Aion-1.0 is a multi-model system designed for high performance across various tasks, including reasoning and coding. It is built on DeepSeek-R1, augmented with additional models and techniques such as Tree...",
        "description": "Aion-1.0 is a multi-model system designed for high performance across various tasks, including reasoning and coding. It is built on DeepSeek-R1, augmented with additional models and techniques such as Tree...",
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
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "aion-labs/aion-1.0-mini",
        "name": "AionLabs: Aion-1.0-Mini",
        "provider": "Aion Labs",
        "releasedAt": "2025-02-04",
        "contextLength": 131072,
        "inputPer1M": 0.7,
        "outputPer1M": 1.4,
        "summary": "Aion-1.0-Mini 32B parameter model is a distilled version of the DeepSeek-R1 model, designed for strong performance in reasoning domains such as mathematics, coding, and logic. It is a modified variant...",
        "description": "Aion-1.0-Mini 32B parameter model is a distilled version of the DeepSeek-R1 model, designed for strong performance in reasoning domains such as mathematics, coding, and logic. It is a modified variant...",
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
            "temperature",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "aion-labs/aion-rp-llama-3.1-8b",
        "name": "AionLabs: Aion-RP 1.0 (8B)",
        "provider": "Aion Labs",
        "releasedAt": "2025-02-04",
        "contextLength": 32768,
        "inputPer1M": 0.7999999999999999,
        "outputPer1M": 1.5999999999999999,
        "summary": "Aion-RP-Llama-3.1-8B ranks the highest in the character evaluation portion of the RPBench-Auto benchmark, a roleplaying-specific variant of Arena-Hard-Auto, where LLMs evaluate each other’s responses. It is a fine-tuned…",
        "description": "Aion-RP-Llama-3.1-8B ranks the highest in the character evaluation portion of the RPBench-Auto benchmark, a roleplaying-specific variant of Arena-Hard-Auto, where LLMs evaluate each other’s responses. It is a fine-tuned…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-vl-max",
        "name": "Qwen: Qwen VL Max",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 131072,
        "inputPer1M": 0.52,
        "outputPer1M": 2.08,
        "summary": "Qwen VL Max is a visual understanding model with 7500 tokens context length. It excels in delivering optimal performance for a broader spectrum of complex tasks.",
        "description": "Qwen VL Max is a visual understanding model with 7500 tokens context length. It excels in delivering optimal performance for a broader spectrum of complex tasks.",
        "bestFor": [
            "Image workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-max",
        "name": "Qwen: Qwen-Max",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 32768,
        "inputPer1M": 1.04,
        "outputPer1M": 4.16,
        "summary": "Qwen-Max, based on Qwen2.5, provides the best inference performance among [Qwen models](/qwen), especially for complex multi-step tasks. It's a large-scale MoE model that has been pretrained on over 20 trillion...",
        "description": "Qwen-Max, based on Qwen2.5, provides the best inference performance among [Qwen models](/qwen), especially for complex multi-step tasks. It's a large-scale MoE model that has been pretrained on over 20 trillion...",
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
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-plus",
        "name": "Qwen: Qwen-Plus",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 1000000,
        "inputPer1M": 0.26,
        "outputPer1M": 0.78,
        "summary": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
        "description": "Qwen-Plus, based on the Qwen2.5 foundation model, is a 131K context model with a balanced performance, speed, and cost combination.",
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
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-turbo",
        "name": "Qwen: Qwen-Turbo",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 131072,
        "inputPer1M": 0.0325,
        "outputPer1M": 0.13,
        "summary": "Qwen-Turbo, based on Qwen2.5, is a 1M context model that provides fast speed and low cost, suitable for simple tasks.",
        "description": "Qwen-Turbo, based on Qwen2.5, is a 1M context model that provides fast speed and low cost, suitable for simple tasks.",
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
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen2.5-vl-72b-instruct",
        "name": "Qwen: Qwen2.5 VL 72B Instruct",
        "provider": "Qwen",
        "releasedAt": "2025-02-01",
        "contextLength": 32000,
        "inputPer1M": 0.25,
        "outputPer1M": 0.75,
        "summary": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.",
        "description": "Qwen2.5-VL is proficient in recognizing common objects such as flowers, birds, fish, and insects. It is also highly capable of analyzing texts, charts, icons, graphics, and layouts within images.",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/o3-mini",
        "name": "OpenAI: o3 Mini",
        "provider": "OpenAI",
        "releasedAt": "2025-01-31",
        "contextLength": 200000,
        "inputPer1M": 1.1,
        "outputPer1M": 4.4,
        "summary": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. This model supports the `reasoning_effort` parameter, which can be set to…",
        "description": "OpenAI o3-mini is a cost-efficient language model optimized for STEM reasoning tasks, particularly excelling in science, mathematics, and coding. This model supports the `reasoning_effort` parameter, which can be set to…",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-small-24b-instruct-2501",
        "name": "Mistral: Mistral Small 3",
        "provider": "Mistral AI",
        "releasedAt": "2025-01-30",
        "contextLength": 32768,
        "inputPer1M": 0.049999999999999996,
        "outputPer1M": 0.08,
        "summary": "Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks. Released under the Apache 2.0 license, it features both pre-trained and instruction-tuned versions designed…",
        "description": "Mistral Small 3 is a 24B-parameter language model optimized for low-latency performance across common AI tasks. Released under the Apache 2.0 license, it features both pre-trained and instruction-tuned versions designed…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-r1-distill-qwen-32b",
        "name": "DeepSeek: R1 Distill Qwen 32B",
        "provider": "DeepSeek",
        "releasedAt": "2025-01-29",
        "contextLength": 32768,
        "inputPer1M": 0.29,
        "outputPer1M": 0.29,
        "summary": "DeepSeek R1 Distill Qwen 32B is a distilled large language model based on Qwen 2.5 32B, using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new...",
        "description": "DeepSeek R1 Distill Qwen 32B is a distilled large language model based on Qwen 2.5 32B, using outputs from [DeepSeek R1](/deepseek/deepseek-r1). It outperforms OpenAI's o1-mini across various benchmarks, achieving new...",
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
            "logprobs",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "perplexity/sonar",
        "name": "Perplexity: Sonar",
        "provider": "Perplexity",
        "releasedAt": "2025-01-27",
        "contextLength": 127072,
        "inputPer1M": 1,
        "outputPer1M": 1,
        "summary": "Sonar is lightweight, affordable, fast, and simple to use — now featuring citations and the ability to customize sources. It is designed for companies seeking to integrate lightweight question-and-answer features...",
        "description": "Sonar is lightweight, affordable, fast, and simple to use — now featuring citations and the ability to customize sources. It is designed for companies seeking to integrate lightweight question-and-answer features...",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "deepseek/deepseek-r1-distill-llama-70b",
        "name": "DeepSeek: R1 Distill Llama 70B",
        "provider": "DeepSeek",
        "releasedAt": "2025-01-23",
        "contextLength": 131072,
        "inputPer1M": 0.7,
        "outputPer1M": 0.7999999999999999,
        "summary": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanc…",
        "description": "DeepSeek R1 Distill Llama 70B is a distilled large language model based on [Llama-3.3-70B-Instruct](/meta-llama/llama-3.3-70b-instruct), using outputs from [DeepSeek R1](/deepseek/deepseek-r1). The model combines advanc…",
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
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/ffmpeg-api/compose",
        "name": "FFmpeg API Compose",
        "provider": "Remova Media",
        "releasedAt": "2025-01-22",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Compose videos from multiple media sources using FFmpeg API.",
        "description": "Compose videos from multiple media sources using FFmpeg API.",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "deepseek/deepseek-r1",
        "name": "DeepSeek: R1",
        "provider": "DeepSeek",
        "releasedAt": "2025-01-20",
        "contextLength": 64000,
        "inputPer1M": 0.7,
        "outputPer1M": 2.5,
        "summary": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass....",
        "description": "DeepSeek R1 is here: Performance on par with [OpenAI o1](/openai/o1), but open-sourced and with fully open reasoning tokens. It's 671B parameters in size, with 37B active in an inference pass....",
        "bestFor": [
            "Agent workflows",
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
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "reasoning",
            "repetition_penalty",
            "seed",
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-pro/v1.1",
        "name": "FLUX1.1 [pro]",
        "provider": "Remova Media",
        "releasedAt": "2025-01-16",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX1.1 [pro] is an enhanced version of FLUX.1 [pro], improved image generation capabilities, delivering superior composition, detail, and artistic fidelity compared to its predecessor.",
        "description": "FLUX1.1 [pro] is an enhanced version of FLUX.1 [pro], improved image generation capabilities, delivering superior composition, detail, and artistic fidelity compared to its predecessor.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "minimax/minimax-01",
        "name": "MiniMax: MiniMax-01",
        "provider": "Minimax",
        "releasedAt": "2025-01-15",
        "contextLength": 1000192,
        "inputPer1M": 0.19999999999999998,
        "outputPer1M": 1.1,
        "summary": "MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding. It has 456 billion parameters, with 45.9 billion parameters activated per inference, and can handle a context...",
        "description": "MiniMax-01 is a combines MiniMax-Text-01 for text generation and MiniMax-VL-01 for image understanding. It has 456 billion parameters, with 45.9 billion parameters activated per inference, and can handle a context...",
        "bestFor": [
            "Image workflows"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "microsoft/phi-4",
        "name": "Microsoft: Phi 4",
        "provider": "Microsoft",
        "releasedAt": "2025-01-10",
        "contextLength": 16384,
        "inputPer1M": 0.065,
        "outputPer1M": 0.14,
        "summary": "[Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed. At 14 billion...",
        "description": "[Microsoft Research](/microsoft) Phi-4 is designed to perform well in complex reasoning tasks and can operate efficiently in situations with limited memory or where quick responses are needed. At 14 billion...",
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
            "temperature",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sao10k/l3.1-70b-hanami-x1",
        "name": "Sao10K: Llama 3.1 70B Hanami x1",
        "provider": "Sao10k",
        "releasedAt": "2025-01-08",
        "contextLength": 16000,
        "inputPer1M": 3,
        "outputPer1M": 3,
        "summary": "This is [Sao10K](/sao10k)'s experiment over [Euryale v2.2](/sao10k/l3.1-euryale-70b).",
        "description": "This is [Sao10K](/sao10k)'s experiment over [Euryale v2.2](/sao10k/l3.1-euryale-70b).",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/kling-video/v1.6/standard/image-to-video",
        "name": "Kling 1.6",
        "provider": "Remova Media",
        "releasedAt": "2025-01-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate video clips from your images using Kling 1.6 (std)",
        "description": "Generate video clips from your images using Kling 1.6 (std)",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v1.6/pro/image-to-video",
        "name": "Kling 1.6",
        "provider": "Remova Media",
        "releasedAt": "2025-01-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate video clips from your images using Kling 1.6 (pro)",
        "description": "Generate video clips from your images using Kling 1.6 (pro)",
        "bestFor": [
            "Video workflows",
            "Image workflows"
        ],
        "modality": "image+text->video",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/kling-video/v1.6/standard/text-to-video",
        "name": "Kling 1.6",
        "provider": "Remova Media",
        "releasedAt": "2025-01-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate video clips from your prompts using Kling 1.6 (std)",
        "description": "Generate video clips from your prompts using Kling 1.6 (std)",
        "bestFor": [
            "Video workflows"
        ],
        "modality": "text->video",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "video"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-lora-fast-training",
        "name": "Train Flux LoRA",
        "provider": "Remova Media",
        "releasedAt": "2025-01-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Train styles, people and other subjects at blazing speeds.",
        "description": "Train styles, people and other subjects at blazing speeds.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "dataset->model",
        "inputModalities": [
            "dataset"
        ],
        "outputModalities": [
            "model"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "training",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "deepseek/deepseek-chat",
        "name": "DeepSeek: DeepSeek V3",
        "provider": "DeepSeek",
        "releasedAt": "2024-12-26",
        "contextLength": 163840,
        "inputPer1M": 0.32,
        "outputPer1M": 0.8899999999999999,
        "summary": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations...",
        "description": "DeepSeek-V3 is the latest model from the DeepSeek team, building upon the instruction following and coding abilities of the previous versions. Pre-trained on nearly 15 trillion tokens, the reported evaluations...",
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
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/bria/expand",
        "name": "Bria Expand Image",
        "provider": "Remova Media",
        "releasedAt": "2024-12-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Bria Expand expands images beyond their borders in high quality. Trained exclusively on licensed data for safe and risk-free commercial use. Access the model's source code and weights:",
        "description": "Bria Expand expands images beyond their borders in high quality. Trained exclusively on licensed data for safe and risk-free commercial use. Access the model's source code and weights:",
        "bestFor": [
            "Image workflows",
            "Code generation"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/bria/background/remove",
        "name": "Bria RMBG 2.0",
        "provider": "Remova Media",
        "releasedAt": "2024-12-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Bria RMBG 2.0 enables seamless removal of backgrounds from images, ideal for professional editing tasks. Trained exclusively on licensed data for safe and risk-free commercial use. Model weights for commercial use are a…",
        "description": "Bria RMBG 2.0 enables seamless removal of backgrounds from images, ideal for professional editing tasks. Trained exclusively on licensed data for safe and risk-free commercial use. Model weights for commercial use are a…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "sao10k/l3.3-euryale-70b",
        "name": "Sao10K: Llama 3.3 Euryale 70B",
        "provider": "Sao10k",
        "releasedAt": "2024-12-18",
        "contextLength": 131072,
        "inputPer1M": 0.65,
        "outputPer1M": 0.75,
        "summary": "Euryale L3.3 70B is a model focused on creative roleplay from Sao10k. It is the successor of [Euryale L3 70B v2.2](/models/sao10k/l3-euryale-70b).",
        "description": "Euryale L3.3 70B is a model focused on creative roleplay from Sao10k. It is the successor of [Euryale L3 70B v2.2](/models/sao10k/l3-euryale-70b).",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "temperature",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-pro/v1.1-ultra",
        "name": "FLUX1.1 [pro] ultra",
        "provider": "Remova Media",
        "releasedAt": "2024-12-17",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX1.1 [pro] ultra is the newest version of FLUX1.1 [pro], maintaining professional-grade image quality while delivering up to 2K resolution with improved photo realism.",
        "description": "FLUX1.1 [pro] ultra is the newest version of FLUX1.1 [pro], maintaining professional-grade image quality while delivering up to 2K resolution with improved photo realism.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/o1",
        "name": "OpenAI: o1",
        "provider": "OpenAI",
        "releasedAt": "2024-12-17",
        "contextLength": 200000,
        "inputPer1M": 15,
        "outputPer1M": 60,
        "summary": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason...",
        "description": "The latest and strongest model family from OpenAI, o1 is designed to spend more time thinking before responding. The o1 model series is trained with large-scale reinforcement learning to reason...",
        "bestFor": [
            "Image workflows",
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cohere/command-r7b-12-2024",
        "name": "Cohere: Command R7B (12-2024)",
        "provider": "Cohere",
        "releasedAt": "2024-12-14",
        "contextLength": 128000,
        "inputPer1M": 0.0375,
        "outputPer1M": 0.15,
        "summary": "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning...",
        "description": "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning...",
        "bestFor": [
            "Agent workflows",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/mmaudio-v2",
        "name": "MMAudio V2",
        "provider": "Remova Media",
        "releasedAt": "2024-12-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "MMAudio generates synchronized audio given video and/or text inputs. It can be combined with video models to get videos with audio.",
        "description": "MMAudio generates synchronized audio given video and/or text inputs. It can be combined with video models to get videos with audio.",
        "bestFor": [
            "Video workflows",
            "Audio workflows"
        ],
        "modality": "text->media",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "media"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "video-to-video",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "meta-llama/llama-3.3-70b-instruct",
        "name": "Meta: Llama 3.3 70B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-12-06",
        "contextLength": 131072,
        "inputPer1M": 0.09999999999999999,
        "outputPer1M": 0.32,
        "summary": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model...",
        "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model...",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3.3-70b-instruct:free",
        "name": "Meta: Llama 3.3 70B Instruct (free)",
        "provider": "Meta",
        "releasedAt": "2024-12-06",
        "contextLength": 65536,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model...",
        "description": "The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model...",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "amazon/nova-lite-v1",
        "name": "Amazon: Nova Lite 1.0",
        "provider": "Amazon",
        "releasedAt": "2024-12-05",
        "contextLength": 300000,
        "inputPer1M": 0.06,
        "outputPer1M": 0.24,
        "summary": "Amazon Nova Lite 1.0 is a very low-cost multimodal model from Amazon that focused on fast processing of image, video, and text inputs to generate text output. Amazon Nova Lite...",
        "description": "Amazon Nova Lite 1.0 is a very low-cost multimodal model from Amazon that focused on fast processing of image, video, and text inputs to generate text output. Amazon Nova Lite...",
        "bestFor": [
            "Video workflows",
            "Image workflows",
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
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "amazon/nova-micro-v1",
        "name": "Amazon: Nova Micro 1.0",
        "provider": "Amazon",
        "releasedAt": "2024-12-05",
        "contextLength": 128000,
        "inputPer1M": 0.035,
        "outputPer1M": 0.14,
        "summary": "Amazon Nova Micro 1.0 is a text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost. With a context length...",
        "description": "Amazon Nova Micro 1.0 is a text-only model that delivers the lowest latency responses in the Amazon Nova family of models at a very low cost. With a context length...",
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
            "max_tokens",
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "amazon/nova-pro-v1",
        "name": "Amazon: Nova Pro 1.0",
        "provider": "Amazon",
        "releasedAt": "2024-12-05",
        "contextLength": 300000,
        "inputPer1M": 0.7999999999999999,
        "outputPer1M": 3.1999999999999997,
        "summary": "Amazon Nova Pro 1.0 is a capable multimodal model from Amazon focused on providing a combination of accuracy, speed, and cost for a wide range of tasks. As of December...",
        "description": "Amazon Nova Pro 1.0 is a capable multimodal model from Amazon focused on providing a combination of accuracy, speed, and cost for a wide range of tasks. As of December...",
        "bestFor": [
            "Image workflows",
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
            "stop",
            "temperature",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/ideogram/v2",
        "name": "Ideogram V2",
        "provider": "Remova Media",
        "releasedAt": "2024-12-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Generate high-quality images, posters, and logos with Ideogram V2. Features exceptional typography handling and realistic outputs optimized for commercial and creative use.",
        "description": "Generate high-quality images, posters, and logos with Ideogram V2. Features exceptional typography handling and realistic outputs optimized for commercial and creative use.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux/schnell",
        "name": "FLUX.1 [schnell]",
        "provider": "Remova Media",
        "releasedAt": "2024-11-25",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.1 [schnell] is a 12 billion parameter flow transformer that generates high-quality images from text in 1 to 4 steps, suitable for personal and commercial use.",
        "description": "FLUX.1 [schnell] is a 12 billion parameter flow transformer that generates high-quality images from text in 1 to 4 steps, suitable for personal and commercial use.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/flux-pro/v1/fill",
        "name": "FLUX.1 [pro] Fill",
        "provider": "Remova Media",
        "releasedAt": "2024-11-21",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.1 [pro] Fill is a high-performance endpoint for the FLUX.1 [pro] model that enables rapid transformation of existing images, delivering high-quality style transfers and image modifications with the core FLUX capabi…",
        "description": "FLUX.1 [pro] Fill is a high-performance endpoint for the FLUX.1 [pro] model that enables rapid transformation of existing images, delivering high-quality style transfers and image modifications with the core FLUX capabi…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-4o-2024-11-20",
        "name": "OpenAI: GPT-4o (2024-11-20)",
        "provider": "OpenAI",
        "releasedAt": "2024-11-20",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded...",
        "description": "The 2024-11-20 version of GPT-4o offers a leveled-up creative writing ability with more natural, engaging, and tailored writing to improve relevance & readability. It’s also better at working with uploaded...",
        "bestFor": [
            "Image workflows",
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
            "tools",
            "top_logprobs",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-large-2407",
        "name": "Mistral Large 2407",
        "provider": "Mistral AI",
        "releasedAt": "2024-11-19",
        "contextLength": 131072,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement here....",
        "description": "This is Mistral AI's flagship model, Mistral Large 2 (version mistral-large-2407). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement here....",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-large-2411",
        "name": "Mistral Large 2411",
        "provider": "Mistral AI",
        "releasedAt": "2024-11-19",
        "contextLength": 131072,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411) It provides a significant upgrade on the previous [Mistral Larg…",
        "description": "Mistral Large 2 2411 is an update of [Mistral Large 2](/mistralai/mistral-large) released together with [Pixtral Large 2411](/mistralai/pixtral-large-2411) It provides a significant upgrade on the previous [Mistral Larg…",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/pixtral-large-2411",
        "name": "Mistral: Pixtral Large 2411",
        "provider": "Mistral AI",
        "releasedAt": "2024-11-19",
        "contextLength": 131072,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411). The model is able to understand documents, charts and natural images. The model is...",
        "description": "Pixtral Large is a 124B parameter, open-weight, multimodal model built on top of [Mistral Large 2](/mistralai/mistral-large-2411). The model is able to understand documents, charts and natural images. The model is...",
        "bestFor": [
            "Image workflows",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-2.5-coder-32b-instruct",
        "name": "Qwen2.5 Coder 32B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-11-11",
        "contextLength": 32768,
        "inputPer1M": 0.66,
        "outputPer1M": 1,
        "summary": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5: - Significantly improvements in **code gener…",
        "description": "Qwen2.5-Coder is the latest series of Code-Specific Qwen large language models (formerly known as CodeQwen). Qwen2.5-Coder brings the following improvements upon CodeQwen1.5: - Significantly improvements in **code gener…",
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
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "thedrummer/unslopnemo-12b",
        "name": "TheDrummer: UnslopNemo 12B",
        "provider": "Thedrummer",
        "releasedAt": "2024-11-08",
        "contextLength": 32768,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 0.39999999999999997,
        "summary": "UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.",
        "description": "UnslopNemo v4.1 is the latest addition from the creator of Rocinante, designed for adventure writing and role-play scenarios.",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-lora-portrait-trainer",
        "name": "Train Flux LoRAs For Portraits",
        "provider": "Remova Media",
        "releasedAt": "2024-11-07",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX LoRA training optimized for portrait generation, with bright highlights, excellent prompt following and highly detailed results.",
        "description": "FLUX LoRA training optimized for portrait generation, with bright highlights, excellent prompt following and highly detailed results.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
        ],
        "modality": "dataset->model",
        "inputModalities": [
            "dataset"
        ],
        "outputModalities": [
            "model"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "training",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "anthropic/claude-3.5-haiku",
        "name": "Anthropic: Claude 3.5 Haiku",
        "provider": "Anthropic",
        "releasedAt": "2024-11-04",
        "contextLength": 200000,
        "inputPer1M": 0.7999999999999999,
        "outputPer1M": 4,
        "summary": "Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use. Engineered to excel in real-time applications, it delivers quick response times that are essential for dynamic...",
        "description": "Claude 3.5 Haiku features offers enhanced capabilities in speed, coding accuracy, and tool use. Engineered to excel in real-time applications, it delivers quick response times that are essential for dynamic...",
        "bestFor": [
            "Image workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-pulid",
        "name": "PuLID Flux",
        "provider": "Remova Media",
        "releasedAt": "2024-10-29",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "An endpoint for personalized image generation using Flux as per given description.",
        "description": "An endpoint for personalized image generation using Flux as per given description.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/birefnet/v2",
        "name": "Birefnet Background Removal",
        "provider": "Remova Media",
        "releasedAt": "2024-10-28",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "bilateral reference framework (BiRefNet) for high-resolution dichotomous image segmentation (DIS)",
        "description": "bilateral reference framework (BiRefNet) for high-resolution dichotomous image segmentation (DIS)",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "anthracite-org/magnum-v4-72b",
        "name": "Magnum v4 72B",
        "provider": "Anthracite Org",
        "releasedAt": "2024-10-22",
        "contextLength": 16384,
        "inputPer1M": 3,
        "outputPer1M": 5,
        "summary": "This is a series of models designed to replicate the prose quality of the Claude 3 models, specifically Sonnet( and Opus( The model is fine-tuned on top of Qwen2.5 72B.",
        "description": "This is a series of models designed to replicate the prose quality of the Claude 3 models, specifically Sonnet( and Opus( The model is fine-tuned on top of Qwen2.5 72B.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "top_a",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-2.5-7b-instruct",
        "name": "Qwen: Qwen2.5 7B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-10-16",
        "contextLength": 32768,
        "inputPer1M": 0.04,
        "outputPer1M": 0.09999999999999999,
        "summary": "Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
        "description": "Qwen2.5 7B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
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
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nvidia/llama-3.1-nemotron-70b-instruct",
        "name": "NVIDIA: Llama 3.1 Nemotron 70B Instruct",
        "provider": "Nvidia",
        "releasedAt": "2024-10-15",
        "contextLength": 131072,
        "inputPer1M": 1.2,
        "outputPer1M": 1.2,
        "summary": "NVIDIA's Llama 3.1 Nemotron 70B is a language model designed for generating precise and useful responses. Leveraging [Llama 3.1 70B](/models/meta-llama/llama-3.1-70b-instruct) architecture and Reinforcement Learning fro…",
        "description": "NVIDIA's Llama 3.1 Nemotron 70B is a language model designed for generating precise and useful responses. Leveraging [Llama 3.1 70B](/models/meta-llama/llama-3.1-70b-instruct) architecture and Reinforcement Learning fro…",
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
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "inflection/inflection-3-pi",
        "name": "Inflection: Inflection 3 Pi",
        "provider": "Inflection",
        "releasedAt": "2024-10-11",
        "contextLength": 8000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "Inflection 3 Pi powers Inflection's Pi chatbot, including backstory, emotional intelligence, productivity, and safety. It has access to recent news, and excels in scenarios like customer support and roleplay. Pi...",
        "description": "Inflection 3 Pi powers Inflection's Pi chatbot, including backstory, emotional intelligence, productivity, and safety. It has access to recent news, and excels in scenarios like customer support and roleplay. Pi...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "inflection/inflection-3-productivity",
        "name": "Inflection: Inflection 3 Productivity",
        "provider": "Inflection",
        "releasedAt": "2024-10-11",
        "contextLength": 8000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "Inflection 3 Productivity is optimized for following instructions. It is better for tasks requiring JSON output or precise adherence to provided guidelines. It has access to recent news. For emotional...",
        "description": "Inflection 3 Productivity is optimized for following instructions. It is better for tasks requiring JSON output or precise adherence to provided guidelines. It has access to recent news. For emotional...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "thedrummer/rocinante-12b",
        "name": "TheDrummer: Rocinante 12B",
        "provider": "Thedrummer",
        "releasedAt": "2024-09-30",
        "contextLength": 32768,
        "inputPer1M": 0.16999999999999998,
        "outputPer1M": 0.43,
        "summary": "Rocinante 12B is designed for engaging storytelling and rich prose. Early testers have reported: - Expanded vocabulary with unique and expressive word choices - Enhanced creativity for vivid narratives -...",
        "description": "Rocinante 12B is designed for engaging storytelling and rich prose. Early testers have reported: - Expanded vocabulary with unique and expressive word choices - Enhanced creativity for vivid narratives -...",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3.2-11b-vision-instruct",
        "name": "Meta: Llama 3.2 11B Vision Instruct",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 131072,
        "inputPer1M": 0.245,
        "outputPer1M": 0.245,
        "summary": "Llama 3.2 11B Vision is a multimodal model with 11 billion parameters, designed to handle tasks combining visual and textual data. It excels in tasks such as image captioning and...",
        "description": "Llama 3.2 11B Vision is a multimodal model with 11 billion parameters, designed to handle tasks combining visual and textual data. It excels in tasks such as image captioning and...",
        "bestFor": [
            "Image workflows"
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
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3.2-1b-instruct",
        "name": "Meta: Llama 3.2 1B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 60000,
        "inputPer1M": 0.027,
        "outputPer1M": 0.19999999999999998,
        "summary": "Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis. Its smaller size allows it to operate...",
        "description": "Llama 3.2 1B is a 1-billion-parameter language model focused on efficiently performing natural language tasks, such as summarization, dialogue, and multilingual text analysis. Its smaller size allows it to operate...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3.2-3b-instruct",
        "name": "Meta: Llama 3.2 3B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 80000,
        "inputPer1M": 0.051,
        "outputPer1M": 0.33999999999999997,
        "summary": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transfor…",
        "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transfor…",
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
            "presence_penalty",
            "repetition_penalty",
            "seed",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3.2-3b-instruct:free",
        "name": "Meta: Llama 3.2 3B Instruct (free)",
        "provider": "Meta",
        "releasedAt": "2024-09-25",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transfor…",
        "description": "Llama 3.2 3B is a 3-billion-parameter multilingual large language model, optimized for advanced natural language processing tasks like dialogue generation, reasoning, and summarization. Designed with the latest transfor…",
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
            "presence_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "qwen/qwen-2.5-72b-instruct",
        "name": "Qwen2.5 72B Instruct",
        "provider": "Qwen",
        "releasedAt": "2024-09-19",
        "contextLength": 32768,
        "inputPer1M": 0.36,
        "outputPer1M": 0.39999999999999997,
        "summary": "Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
        "description": "Qwen2.5 72B is the latest series of Qwen large language models. Qwen2.5 brings the following improvements upon Qwen2: - Significantly more knowledge and has greatly improved capabilities in coding and...",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cohere/command-r-08-2024",
        "name": "Cohere: Command R (08-2024)",
        "provider": "Cohere",
        "releasedAt": "2024-08-30",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reas…",
        "description": "command-r-08-2024 is an update of the [Command R](/models/cohere/command-r) with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reas…",
        "bestFor": [
            "Agent workflows",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "cohere/command-r-plus-08-2024",
        "name": "Cohere: Command R+ (08-2024)",
        "provider": "Cohere",
        "releasedAt": "2024-08-30",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardwar…",
        "description": "command-r-plus-08-2024 is an update of the [Command R+](/models/cohere/command-r-plus) with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardwar…",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "sao10k/l3.1-euryale-70b",
        "name": "Sao10K: Llama 3.1 Euryale 70B v2.2",
        "provider": "Sao10k",
        "releasedAt": "2024-08-28",
        "contextLength": 131072,
        "inputPer1M": 0.85,
        "outputPer1M": 0.85,
        "summary": "Euryale L3.1 70B v2.2 is a model focused on creative roleplay from Sao10k. It is the successor of [Euryale L3 70B v2.1](/models/sao10k/l3-euryale-70b).",
        "description": "Euryale L3.1 70B v2.2 is a model focused on creative roleplay from Sao10k. It is the successor of [Euryale L3 70B v2.1](/models/sao10k/l3-euryale-70b).",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nousresearch/hermes-3-llama-3.1-70b",
        "name": "Nous: Hermes 3 70B Instruct",
        "provider": "Nousresearch",
        "releasedAt": "2024-08-18",
        "contextLength": 131072,
        "inputPer1M": 0.3,
        "outputPer1M": 0.3,
        "summary": "Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn…",
        "description": "Hermes 3 is a generalist language model with many improvements over [Hermes 2](/models/nousresearch/nous-hermes-2-mistral-7b-dpo), including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn…",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nousresearch/hermes-3-llama-3.1-405b",
        "name": "Nous: Hermes 3 405B Instruct",
        "provider": "Nousresearch",
        "releasedAt": "2024-08-16",
        "contextLength": 131072,
        "inputPer1M": 1,
        "outputPer1M": 1,
        "summary": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvement…",
        "description": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvement…",
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "nousresearch/hermes-3-llama-3.1-405b:free",
        "name": "Nous: Hermes 3 405B Instruct (free)",
        "provider": "Nousresearch",
        "releasedAt": "2024-08-16",
        "contextLength": 131072,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvement…",
        "description": "Hermes 3 is a generalist language model with many improvements over Hermes 2, including advanced agentic capabilities, much better roleplaying, reasoning, multi-turn conversation, long context coherence, and improvement…",
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
            "presence_penalty",
            "stop",
            "temperature",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-lora/image-to-image",
        "name": "FLUX.1 [dev] with LoRAs",
        "provider": "Remova Media",
        "releasedAt": "2024-08-13",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX LoRA Image-to-Image is a high-performance endpoint that transforms existing images using FLUX models, leveraging LoRA adaptations to enable rapid and precise image style transfer, modifications, and artistic variat…",
        "description": "FLUX LoRA Image-to-Image is a high-performance endpoint that transforms existing images using FLUX models, leveraging LoRA adaptations to enable rapid and precise image style transfer, modifications, and artistic variat…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "sao10k/l3-lunaris-8b",
        "name": "Sao10K: Llama 3 8B Lunaris",
        "provider": "Sao10k",
        "releasedAt": "2024-08-13",
        "contextLength": 8192,
        "inputPer1M": 0.04,
        "outputPer1M": 0.049999999999999996,
        "summary": "Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3. It's a strategic merge of multiple models, designed to balance creativity with improved logic and general knowledge....",
        "description": "Lunaris 8B is a versatile generalist and roleplaying model based on Llama 3. It's a strategic merge of multiple models, designed to balance creativity with improved logic and general knowledge....",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-2024-08-06",
        "name": "OpenAI: GPT-4o (2024-08-06)",
        "provider": "OpenAI",
        "releasedAt": "2024-08-06",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more here. GPT-4o (\"o\" for \"omni\") is...",
        "description": "The 2024-08-06 version of GPT-4o offers improved performance in structured outputs, with the ability to supply a JSON schema in the respone_format. Read more here. GPT-4o (\"o\" for \"omni\") is...",
        "bestFor": [
            "Image workflows",
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
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux-lora",
        "name": "FLUX.1 [dev] with LoRAs",
        "provider": "Remova Media",
        "releasedAt": "2024-08-01",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Super fast endpoint for the FLUX.1 [dev] model with LoRA support, enabling rapid and high-quality image generation using pre-trained LoRA adaptations for personalization, specific styles, brand identities, and product-s…",
        "description": "Super fast endpoint for the FLUX.1 [dev] model with LoRA support, enabling rapid and high-quality image generation using pre-trained LoRA adaptations for personalization, specific styles, brand identities, and product-s…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "meta-llama/llama-3.1-70b-instruct",
        "name": "Meta: Llama 3.1 70B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-07-23",
        "contextLength": 131072,
        "inputPer1M": 0.39999999999999997,
        "outputPer1M": 0.39999999999999997,
        "summary": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 70B instruct-tuned version is optimized for high quality dialogue usecases. It has demonstrated strong...",
        "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 70B instruct-tuned version is optimized for high quality dialogue usecases. It has demonstrated strong...",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3.1-8b-instruct",
        "name": "Meta: Llama 3.1 8B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-07-23",
        "contextLength": 16384,
        "inputPer1M": 0.02,
        "outputPer1M": 0.049999999999999996,
        "summary": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 8B instruct-tuned version is fast and efficient. It has demonstrated strong performance compared to...",
        "description": "Meta's latest class of model (Llama 3.1) launched with a variety of sizes & flavors. This 8B instruct-tuned version is fast and efficient. It has demonstrated strong performance compared to...",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mistral-nemo",
        "name": "Mistral: Mistral Nemo",
        "provider": "Mistral AI",
        "releasedAt": "2024-07-19",
        "contextLength": 131072,
        "inputPer1M": 0.02,
        "outputPer1M": 0.04,
        "summary": "A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA. The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese,...",
        "description": "A 12B parameter model with a 128k token context length built by Mistral in collaboration with NVIDIA. The model is multilingual, supporting English, French, German, Spanish, Italian, Portuguese, Chinese, Japanese,...",
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
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-mini",
        "name": "OpenAI: GPT-4o-mini",
        "provider": "OpenAI",
        "releasedAt": "2024-07-18",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
        "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
        "bestFor": [
            "Image workflows",
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
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-mini-2024-07-18",
        "name": "OpenAI: GPT-4o-mini (2024-07-18)",
        "provider": "OpenAI",
        "releasedAt": "2024-07-18",
        "contextLength": 128000,
        "inputPer1M": 0.15,
        "outputPer1M": 0.6,
        "summary": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
        "description": "GPT-4o mini is OpenAI's newest model after [GPT-4 Omni](/models/openai/gpt-4o), supporting both text and image inputs with text outputs. As their most advanced small model, it is many multiples more affordable...",
        "bestFor": [
            "Image workflows",
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
            "tools",
            "top_logprobs",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "google/gemma-2-27b-it",
        "name": "Google: Gemma 2 27B",
        "provider": "Google",
        "releasedAt": "2024-07-13",
        "contextLength": 8192,
        "inputPer1M": 0.65,
        "outputPer1M": 0.65,
        "summary": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini). Gemma models are well-suited for a variety of...",
        "description": "Gemma 2 27B by Google is an open model built from the same research and technology used to create the [Gemini models](/models?q=gemini). Gemma models are well-suited for a variety of...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/flux/dev/image-to-image",
        "name": "FLUX.1 [dev]",
        "provider": "Remova Media",
        "releasedAt": "2024-07-11",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "FLUX.1 Image-to-Image is a high-performance endpoint for the FLUX.1 [dev] model that enables rapid transformation of existing images, delivering high-quality style transfers and image modifications with the core FLUX ca…",
        "description": "FLUX.1 Image-to-Image is a high-performance endpoint for the FLUX.1 [dev] model that enables rapid transformation of existing images, delivering high-quality style transfers and image modifications with the core FLUX ca…",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "sao10k/l3-euryale-70b",
        "name": "Sao10k: Llama 3 Euryale 70B v2.1",
        "provider": "Sao10k",
        "releasedAt": "2024-06-18",
        "contextLength": 8192,
        "inputPer1M": 1.48,
        "outputPer1M": 1.48,
        "summary": "Euryale 70B v2.1 is a model focused on creative roleplay from Sao10k. - Better prompt adherence. - Better anatomy / spatial awareness. - Adapts much better to unique and custom...",
        "description": "Euryale 70B v2.1 is a model focused on creative roleplay from Sao10k. - Better prompt adherence. - Better anatomy / spatial awareness. - Adapts much better to unique and custom...",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/fast-sdxl",
        "name": "Stable Diffusion XL",
        "provider": "Remova Media",
        "releasedAt": "2024-06-12",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Run SDXL at the speed of light",
        "description": "Run SDXL at the speed of light",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "text->image",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "nousresearch/hermes-2-pro-llama-3-8b",
        "name": "NousResearch: Hermes 2 Pro - Llama-3 8B",
        "provider": "Nousresearch",
        "releasedAt": "2024-05-27",
        "contextLength": 8192,
        "inputPer1M": 0.14,
        "outputPer1M": 0.14,
        "summary": "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced...",
        "description": "Hermes 2 Pro is an upgraded, retrained version of Nous Hermes 2, consisting of an updated and cleaned version of the OpenHermes 2.5 Dataset, as well as a newly introduced...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o",
        "name": "OpenAI: GPT-4o",
        "provider": "OpenAI",
        "releasedAt": "2024-05-13",
        "contextLength": 128000,
        "inputPer1M": 2.5,
        "outputPer1M": 10,
        "summary": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
        "bestFor": [
            "Image workflows",
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
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4o-2024-05-13",
        "name": "OpenAI: GPT-4o (2024-05-13)",
        "provider": "OpenAI",
        "releasedAt": "2024-05-13",
        "contextLength": 128000,
        "inputPer1M": 5,
        "outputPer1M": 15,
        "summary": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
        "description": "GPT-4o (\"o\" for \"omni\") is OpenAI's latest AI model, supporting both text and image inputs with text outputs. It maintains the intelligence level of [GPT-4 Turbo](/models/openai/gpt-4-turbo) while being twice as...",
        "bestFor": [
            "Image workflows",
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
            "frequency_penalty",
            "logit_bias",
            "logprobs",
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p",
            "web_search_options"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3-70b-instruct",
        "name": "Meta: Llama 3 70B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-04-18",
        "contextLength": 8192,
        "inputPer1M": 0.51,
        "outputPer1M": 0.74,
        "summary": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases. It has demonstrated strong...",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 70B instruct-tuned version was optimized for high quality dialogue usecases. It has demonstrated strong...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "meta-llama/llama-3-8b-instruct",
        "name": "Meta: Llama 3 8B Instruct",
        "provider": "Meta",
        "releasedAt": "2024-04-18",
        "contextLength": 8192,
        "inputPer1M": 0.03,
        "outputPer1M": 0.04,
        "summary": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases. It has demonstrated strong...",
        "description": "Meta's latest class of model (Llama 3) launched with a variety of sizes & flavors. This 8B instruct-tuned version was optimized for high quality dialogue usecases. It has demonstrated strong...",
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
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mistralai/mixtral-8x22b-instruct",
        "name": "Mistral: Mixtral 8x22B Instruct",
        "provider": "Mistral AI",
        "releasedAt": "2024-04-17",
        "contextLength": 65536,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include: -…",
        "description": "Mistral's official instruct fine-tuned version of [Mixtral 8x22B](/models/mistralai/mixtral-8x22b). It uses 39B active parameters out of 141B, offering unparalleled cost efficiency for its size. Its strengths include: -…",
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "microsoft/wizardlm-2-8x22b",
        "name": "WizardLM-2 8x22B",
        "provider": "Microsoft",
        "releasedAt": "2024-04-16",
        "contextLength": 65535,
        "inputPer1M": 0.62,
        "outputPer1M": 0.62,
        "summary": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensou…",
        "description": "WizardLM-2 8x22B is Microsoft AI's most advanced Wizard model. It demonstrates highly competitive performance compared to leading proprietary models, and it consistently outperforms all existing state-of-the-art opensou…",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/aura-sr",
        "name": "AuraSR",
        "provider": "Remova Media",
        "releasedAt": "2024-04-11",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Upscale your images with AuraSR.",
        "description": "Upscale your images with AuraSR.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-4-turbo",
        "name": "OpenAI: GPT-4 Turbo",
        "provider": "OpenAI",
        "releasedAt": "2024-04-09",
        "contextLength": 128000,
        "inputPer1M": 10,
        "outputPer1M": 30,
        "summary": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Training data: up to December 2023.",
        "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Training data: up to December 2023.",
        "bestFor": [
            "Image workflows",
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
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/wizper",
        "name": "Wizper",
        "provider": "Remova Media",
        "releasedAt": "2024-04-08",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "[Experimental] Whisper v3 Large -- but optimized by our inference wizards. Same WER, double the performance!",
        "description": "[Experimental] Whisper v3 Large -- but optimized by our inference wizards. Same WER, double the performance!",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "audio->text",
        "inputModalities": [
            "audio"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "speech-to-text",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "anthropic/claude-3-haiku",
        "name": "Anthropic: Claude 3 Haiku",
        "provider": "Anthropic",
        "releasedAt": "2024-03-13",
        "contextLength": 200000,
        "inputPer1M": 0.25,
        "outputPer1M": 1.25,
        "summary": "Claude 3 Haiku is Anthropic's fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance. See the launch announcement and benchmark results here #multimodal",
        "description": "Claude 3 Haiku is Anthropic's fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance. See the launch announcement and benchmark results here #multimodal",
        "bestFor": [
            "Image workflows",
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
            "stop",
            "temperature",
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/birefnet",
        "name": "Birefnet Background Removal",
        "provider": "Remova Media",
        "releasedAt": "2024-02-27",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "bilateral reference framework (BiRefNet) for high-resolution dichotomous image segmentation (DIS)",
        "description": "bilateral reference framework (BiRefNet) for high-resolution dichotomous image segmentation (DIS)",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/mistral-large",
        "name": "Mistral Large",
        "provider": "Mistral AI",
        "releasedAt": "2024-02-26",
        "contextLength": 128000,
        "inputPer1M": 2,
        "outputPer1M": 6,
        "summary": "This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement here....",
        "description": "This is Mistral AI's flagship model, Mistral Large 2 (version `mistral-large-2407`). It's a proprietary weights-available model and excels at reasoning, code, JSON, chat, and more. Read the launch announcement here....",
        "bestFor": [
            "Agent workflows",
            "Advanced reasoning",
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
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/whisper",
        "name": "Whisper",
        "provider": "Remova Media",
        "releasedAt": "2024-02-19",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Whisper is a model for speech transcription and translation.",
        "description": "Whisper is a model for speech transcription and translation.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "audio->text",
        "inputModalities": [
            "audio"
        ],
        "outputModalities": [
            "text"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "speech-to-text",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/clarity-upscaler",
        "name": "Clarity Upscaler",
        "provider": "Remova Media",
        "releasedAt": "2024-02-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Clarity upscaler for upscaling images with high very fidelity.",
        "description": "Clarity upscaler for upscaling images with high very fidelity.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "openai/gpt-3.5-turbo-0613",
        "name": "OpenAI: GPT-3.5 Turbo (older v0613)",
        "provider": "OpenAI",
        "releasedAt": "2024-01-25",
        "contextLength": 4095,
        "inputPer1M": 1,
        "outputPer1M": 2,
        "summary": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data up to Sep 2021.",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data up to Sep 2021.",
        "bestFor": [
            "Agent workflows",
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
            "logit_bias",
            "logprobs",
            "max_completion_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4-turbo-preview",
        "name": "OpenAI: GPT-4 Turbo Preview",
        "provider": "OpenAI",
        "releasedAt": "2024-01-25",
        "contextLength": 128000,
        "inputPer1M": 10,
        "outputPer1M": 30,
        "summary": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023. **Note:** heavily rate limited by OpenAI while...",
        "description": "The preview GPT-4 model with improved instruction following, JSON mode, reproducible outputs, parallel function calling, and more. Training data: up to Dec 2023. **Note:** heavily rate limited by OpenAI while...",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/stable-audio",
        "name": "Stable Audio Open",
        "provider": "Remova Media",
        "releasedAt": "2024-01-04",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Open source text-to-audio model.",
        "description": "Open source text-to-audio model.",
        "bestFor": [
            "Audio workflows"
        ],
        "modality": "text->audio",
        "inputModalities": [
            "text"
        ],
        "outputModalities": [
            "audio"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "text-to-audio",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/mixtral-8x7b-instruct",
        "name": "Mistral: Mixtral 8x7B Instruct",
        "provider": "Mistral AI",
        "releasedAt": "2023-12-10",
        "contextLength": 32768,
        "inputPer1M": 0.54,
        "outputPer1M": 0.54,
        "summary": "Mixtral 8x7B Instruct is a pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion...",
        "description": "Mixtral 8x7B Instruct is a pretrained generative Sparse Mixture of Experts, by Mistral AI, for chat and instruction use. Incorporates 8 experts (feed-forward networks) for a total of 47 billion...",
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
            "tool_choice",
            "tools",
            "top_k",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "alpindale/goliath-120b",
        "name": "Goliath 120B",
        "provider": "Alpindale",
        "releasedAt": "2023-11-10",
        "contextLength": 6144,
        "inputPer1M": 3.75,
        "outputPer1M": 7.5,
        "summary": "A large LLM created by combining two fine-tuned Llama 70B models into one 120B model. Combines Xwin and Euryale. Credits to - @chargoddard for developing the framework used to merge...",
        "description": "A large LLM created by combining two fine-tuned Llama 70B models into one 120B model. Combines Xwin and Euryale. Credits to - @chargoddard for developing the framework used to merge...",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "top_a",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4-1106-preview",
        "name": "OpenAI: GPT-4 Turbo (older v1106)",
        "provider": "OpenAI",
        "releasedAt": "2023-11-06",
        "contextLength": 128000,
        "inputPer1M": 10,
        "outputPer1M": 30,
        "summary": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Training data: up to April 2023.",
        "description": "The latest GPT-4 Turbo model with vision capabilities. Vision requests can now use JSON mode and function calling. Training data: up to April 2023.",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "fal/fal-ai/esrgan",
        "name": "Upscale Images",
        "provider": "Remova Media",
        "releasedAt": "2023-10-30",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Upscale images by a given factor.",
        "description": "Upscale images by a given factor.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "fal/fal-ai/imageutils/rembg",
        "name": "Remove Background",
        "provider": "Remova Media",
        "releasedAt": "2023-10-05",
        "contextLength": 0,
        "inputPer1M": 0,
        "outputPer1M": 0,
        "summary": "Remove the background from an image.",
        "description": "Remove the background from an image.",
        "bestFor": [
            "Image workflows"
        ],
        "modality": "image+text->image",
        "inputModalities": [
            "image",
            "text"
        ],
        "outputModalities": [
            "image"
        ],
        "supportedParameters": [],
        "source": "media_catalog",
        "modelType": "image-to-image",
        "pricingDescription": "Usage-based pricing"
    },
    {
        "id": "mistralai/mistral-7b-instruct-v0.1",
        "name": "Mistral: Mistral 7B Instruct v0.1",
        "provider": "Mistral AI",
        "releasedAt": "2023-09-28",
        "contextLength": 2824,
        "inputPer1M": 0.11,
        "outputPer1M": 0.19,
        "summary": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
        "description": "A 7.3B parameter model that outperforms Llama 2 13B on all benchmarks, with optimizations for speed and context length.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-3.5-turbo-instruct",
        "name": "OpenAI: GPT-3.5 Turbo Instruct",
        "provider": "OpenAI",
        "releasedAt": "2023-09-28",
        "contextLength": 4095,
        "inputPer1M": 1.5,
        "outputPer1M": 2,
        "summary": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
        "description": "This model is a variant of GPT-3.5 Turbo tuned for instructional prompts and omitting chat-related optimizations. Training data: up to Sep 2021.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-3.5-turbo-16k",
        "name": "OpenAI: GPT-3.5 Turbo 16k",
        "provider": "OpenAI",
        "releasedAt": "2023-08-28",
        "contextLength": 16385,
        "inputPer1M": 3,
        "outputPer1M": 4,
        "summary": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up...",
        "description": "This model offers four times the context length of gpt-3.5-turbo, allowing it to support approximately 20 pages of text in a single request at a higher cost. Training data: up...",
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
            "logit_bias",
            "logprobs",
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "mancer/weaver",
        "name": "Mancer: Weaver (alpha)",
        "provider": "Mancer",
        "releasedAt": "2023-08-02",
        "contextLength": 8000,
        "inputPer1M": 0.75,
        "outputPer1M": 1,
        "summary": "An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory. Meant for use in roleplay/narrative situations.",
        "description": "An attempt to recreate Claude-style verbosity, but don't expect the same level of coherence or memory. Meant for use in roleplay/narrative situations.",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "top_a",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "undi95/remm-slerp-l2-13b",
        "name": "ReMM SLERP 13B",
        "provider": "Undi95",
        "releasedAt": "2023-07-22",
        "contextLength": 6144,
        "inputPer1M": 0.44999999999999996,
        "outputPer1M": 0.65,
        "summary": "A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge",
        "description": "A recreation trial of the original MythoMax-L2-B13 but with updated models. #merge",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "temperature",
            "top_a",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "gryphe/mythomax-l2-13b",
        "name": "MythoMax 13B",
        "provider": "Gryphe",
        "releasedAt": "2023-07-02",
        "contextLength": 4096,
        "inputPer1M": 0.06,
        "outputPer1M": 0.06,
        "summary": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge",
        "description": "One of the highest performing and most popular fine-tunes of Llama 2 13B, with rich descriptions and roleplay. #merge",
        "bestFor": [
            "General chat",
            "Enterprise assistants"
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
            "temperature",
            "top_a",
            "top_k",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-3.5-turbo",
        "name": "OpenAI: GPT-3.5 Turbo",
        "provider": "OpenAI",
        "releasedAt": "2023-05-28",
        "contextLength": 16385,
        "inputPer1M": 0.5,
        "outputPer1M": 1.5,
        "summary": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data up to Sep 2021.",
        "description": "GPT-3.5 Turbo is OpenAI's fastest model. It can understand and generate natural language or code, and is optimized for chat and traditional completion tasks. Training data up to Sep 2021.",
        "bestFor": [
            "Agent workflows",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4",
        "name": "OpenAI: GPT-4",
        "provider": "OpenAI",
        "releasedAt": "2023-05-28",
        "contextLength": 8191,
        "inputPer1M": 30,
        "outputPer1M": 60,
        "summary": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning...",
        "description": "OpenAI's flagship model, GPT-4 is a large-scale multimodal language model capable of solving difficult problems with greater accuracy than previous models due to its broader general knowledge and advanced reasoning...",
        "bestFor": [
            "Agent workflows",
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
            "logprobs",
            "max_completion_tokens",
            "max_tokens",
            "presence_penalty",
            "response_format",
            "seed",
            "stop",
            "structured_outputs",
            "temperature",
            "tool_choice",
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    },
    {
        "id": "openai/gpt-4-0314",
        "name": "OpenAI: GPT-4 (older v0314)",
        "provider": "OpenAI",
        "releasedAt": "2023-05-28",
        "contextLength": 8191,
        "inputPer1M": 30,
        "outputPer1M": 60,
        "summary": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
        "description": "GPT-4-0314 is the first version of GPT-4 released, with a context length of 8,192 tokens, and was supported until June 14. Training data: up to Sep 2021.",
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
            "tools",
            "top_logprobs",
            "top_p"
        ],
        "source": "llm_catalog",
        "modelType": "language"
    }
];
