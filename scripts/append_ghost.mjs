import fs from 'fs';

const altPath = 'content/alternatives.ts';
let altContent = fs.readFileSync(altPath, 'utf8');

const newAlts = `
    {
        slug: "modelop",
        competitor: "ModelOp",
        metaTitle: "Alternative to ModelOp",
        metaDescription: "Compare Remova and ModelOp for enterprise AI governance. See why teams choose Remova for deep policy control over model lifecycle management.",
        headline: "Remova vs ModelOp",
        competitorDescription: "ModelOp is a mature platform focused heavily on ModelOps and traditional machine learning lifecycle management. It helps large enterprises govern the deployment, auditing, and compliance reporting of predictive models, risk models, and classic ML pipelines.",
        whySwitch: [
            "Legacy ML Focus: Designed primarily for traditional predictive models rather than the unique challenges of generative AI, agentic systems, and LLMs.",
            "Heavy Implementation: Requires extensive professional services and complex integration cycles before demonstrating value.",
            "Developer Friction: Optimized for risk and compliance officers, often introducing bottlenecks for engineering teams trying to deploy generative AI quickly."
        ],
        removaAdvantages: [
            { title: "GenAI-Native Architecture", description: "Built specifically to govern LLMs, prompt injections, and sensitive data leakage in generative workflows." },
            { title: "Real-Time Guardrails", description: "Intercepts and evaluates prompts and responses inline before they violate organizational policy." },
            { title: "Immediate Time-to-Value", description: "Deploys in minutes with preset policies for common generative AI risks, requiring no massive integration projects." }
        ]
    },
    {
        slug: "glean",
        competitor: "Glean",
        metaTitle: "Alternative to Glean",
        metaDescription: "Compare Remova and Glean. While Glean excels at enterprise search, Remova provides the necessary governance layer for secure AI rollout.",
        headline: "Remova vs Glean",
        competitorDescription: "Glean is a powerful enterprise search and knowledge discovery platform. It connects to internal data sources to provide a unified search experience and a highly capable AI assistant grounded in company knowledge.",
        whySwitch: [
            "Search vs Governance: Glean is fundamentally an enterprise search tool. It relies on existing source-system permissions rather than providing a dedicated AI policy enforcement layer.",
            "Limited Model Choice: Ties your organization to the specific models Glean has chosen to integrate, restricting your ability to leverage the broader open-source or multi-vendor frontier ecosystem.",
            "Missing Cost Controls: Lacks granular, team-level AI FinOps controls to prevent usage spikes across diverse workflows."
        ],
        removaAdvantages: [
            { title: "Independent Governance", description: "Decouples the governance layer from the application layer, allowing you to secure any AI tool or model you choose to deploy." },
            { title: "Multi-Model Freedom", description: "Seamlessly route workloads to Anthropic, OpenAI, Google, or open-source models while maintaining consistent security policies." },
            { title: "Strict Cost Ownership", description: "Enforce hard budgets and track AI spending by department to ensure ROI on your generative AI initiatives." }
        ]
    }
`;

altContent = altContent.replace(/];\s*$/, newAlts + '\n];\n');
fs.writeFileSync(altPath, altContent);

const glossPath = 'content/glossary.ts';
let glossContent = fs.readFileSync(glossPath, 'utf8');

const newGloss = `
    t(
        "ai-transparency",
        "AI Transparency",
        "The degree to which an AI system's operations, training data, and decision-making processes are visible and understandable to stakeholders.",
        "AI transparency is a critical requirement for enterprise trust and regulatory compliance. It encompasses several dimensions: data transparency (knowing what data trained the model), algorithmic transparency (understanding the architecture and weights), and operational transparency (logging when, where, and how the model is used). Organizations require high transparency to defend automated decisions, prevent bias, and pass audits. Without transparency, AI remains a 'black box' that exposes the enterprise to unquantifiable risk.",
        ["audit-trails", "ai-governance", "ai-risk", "model-governance"]
    )
`;
glossContent = glossContent.replace(/];\s*$/, newGloss + '\n];\n');
fs.writeFileSync(glossPath, glossContent);

console.log("Correctly appended to alternatives and glossary.");
