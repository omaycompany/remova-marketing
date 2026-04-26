import fs from 'fs';

const modelsTsPath = 'content/models.ts';
let content = fs.readFileSync(modelsTsPath, 'utf8');

const newModels = `
    {
        id: "deepseek/deepseek-r1",
        name: "DeepSeek R1",
        provider: "DeepSeek",
        releasedAt: "2025-01-20",
        contextLength: 64000,
        inputPer1M: 0.7,
        outputPer1M: 2.5,
        summary: "The open reasoning champion. Outperforms o1 on many benchmarks at a fraction of the cost.",
        bestFor: ["Deep reasoning", "Mathematics", "Complex coding tasks"],
    },
    {
        id: "deepseek/deepseek-chat",
        name: "DeepSeek V3",
        provider: "DeepSeek",
        releasedAt: "2024-12-25",
        contextLength: 163840,
        inputPer1M: 0.32,
        outputPer1M: 0.89,
        summary: "Flagship mixture-of-experts model balancing top-tier reasoning with extreme cost efficiency.",
        bestFor: ["General chat", "High-volume generation", "Enterprise copilots"],
    },
    {
        id: "google/gemini-2.0-flash-001",
        name: "Gemini 2.0 Flash",
        provider: "Google",
        releasedAt: "2025-02-05",
        contextLength: 1000000,
        inputPer1M: 0.1,
        outputPer1M: 0.4,
        summary: "Incredibly fast multimodal frontier model with a massive context window.",
        bestFor: ["Multimodal tasks", "Long document analysis", "Agent orchestration"],
    },
    {
        id: "openai/o3-mini-high",
        name: "o3 Mini High",
        provider: "OpenAI",
        releasedAt: "2025-01-31",
        contextLength: 200000,
        inputPer1M: 1.1,
        outputPer1M: 4.4,
        summary: "OpenAI's fastest and most cost-effective reasoning model with high effort scaling.",
        bestFor: ["Coding agents", "STEM reasoning", "Fast multi-step planning"],
    },
    {
        id: "meta-llama/llama-3.3-70b-instruct",
        name: "Llama 3.3 70B Instruct",
        provider: "Meta",
        releasedAt: "2024-12-06",
        contextLength: 131072,
        inputPer1M: 0.1,
        outputPer1M: 0.32,
        summary: "Open-weights powerhouse delivering GPT-4 class performance efficiently.",
        bestFor: ["On-premise deployment", "Instruction following", "Cost-sensitive workloads"],
    },
`;

if (!content.includes("DeepSeek R1")) {
    content = content.replace("const featuredModels: ModelEntry[] = [", "const featuredModels: ModelEntry[] = [" + newModels);
    fs.writeFileSync(modelsTsPath, content);
    console.log("Successfully injected OpenRouter latest models into content/models.ts");
} else {
    console.log("Models already present.");
}
