export type BlogCategorySeo = {
    title: string;
    description: string;
    keywords: string[];
    artSlug: string;
    priority: number;
};

export function blogCategorySlug(category: string) {
    return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function blogCategoryPath(category: string) {
    return `/blog/category/${blogCategorySlug(category)}`;
}

const categorySeo: Record<string, BlogCategorySeo> = {
    Architecture: {
        title: "AI Architecture Articles",
        description: "Technical guides on AI gateways, model routing, RAG architecture, MCP, and secure enterprise AI system design.",
        keywords: ["ai architecture", "llm gateway", "rag architecture", "model routing", "enterprise ai architecture"],
        artSlug: "ai-gateway-vs-governance-platform",
        priority: 0.72,
    },
    "Buyer Guide": {
        title: "AI Buyer Guides",
        description: "Vendor evaluation guides for teams choosing AI platforms, copilots, LLM gateways, and enterprise AI tools.",
        keywords: ["ai buyer guide", "enterprise ai platform", "ai tools comparison", "llm platform evaluation"],
        artSlug: "enterprise-ai-governance-guide",
        priority: 0.7,
    },
    Checklist: {
        title: "AI Checklist Articles",
        description: "Practical AI checklists for security, compliance, rollout planning, evidence collection, and team adoption.",
        keywords: ["ai checklist", "ai security checklist", "ai compliance checklist", "enterprise ai checklist"],
        artSlug: "iso-42001-ai-governance-checklist",
        priority: 0.68,
    },
    Compliance: {
        title: "AI Compliance Articles",
        description: "AI compliance guides covering ISO 42001, audit evidence, GDPR, policy records, approvals, and reporting.",
        keywords: ["ai compliance", "iso 42001", "ai audit evidence", "gdpr ai compliance", "ai management system"],
        artSlug: "iso-42001-ai-governance-checklist",
        priority: 0.8,
    },
    "Customer Service": {
        title: "AI Customer Service Articles",
        description: "Guides for using AI in customer service, ticket triage, support reply drafting, escalation, QA, and help center workflows.",
        keywords: ["ai customer service", "ai customer service tools", "customer support ai", "ai ticket triage"],
        artSlug: "artificial-intelligence-tools-for-business",
        priority: 0.76,
    },
    "Developer Governance": {
        title: "AI Developer Control Articles",
        description: "Developer-focused AI articles on coding assistants, API access, code leakage, MCP security, and engineering controls.",
        keywords: ["ai developer controls", "github copilot security", "mcp security", "code leakage controls"],
        artSlug: "ai-gateway-vs-governance-platform",
        priority: 0.72,
    },
    Engineering: {
        title: "AI Engineering Articles",
        description: "AI engineering articles for coding assistants, developer workflows, model access, secure prompts, and code review practices.",
        keywords: ["best ai for coding", "ai coding tools", "ai software development", "coding assistant"],
        artSlug: "artificial-intelligence-tools-list-enterprise-ai-stack",
        priority: 0.78,
    },
    FinOps: {
        title: "AI FinOps Articles",
        description: "AI cost control guides for model budgets, usage reporting, chargebacks, token spend, and team-level AI forecasting.",
        keywords: ["ai finops", "ai cost management", "llm cost control", "ai budget tracking"],
        artSlug: "what-is-an-llm-gateway",
        priority: 0.68,
    },
    Governance: {
        title: "AI Program Control Articles",
        description: "Operating-model articles for teams setting AI ownership, approvals, policies, risk reviews, and adoption standards.",
        keywords: ["enterprise ai controls", "ai policy", "ai operating model", "ai risk management"],
        artSlug: "enterprise-ai-governance-guide",
        priority: 0.75,
    },
    Guide: {
        title: "AI Guides for Companies",
        description: "Long-form AI guides for companies choosing tools, building workflows, reducing risk, and scaling adoption across teams.",
        keywords: ["artificial intelligence in companies", "artificial intelligence tools", "ai for companies", "enterprise ai guide"],
        artSlug: "artificial-intelligence-tools-for-business",
        priority: 0.82,
    },
    Operations: {
        title: "AI Operations Articles",
        description: "AI operations articles for rollout, workflow design, usage monitoring, approval paths, support processes, and daily controls.",
        keywords: ["ai operations", "ai workflow automation", "enterprise ai operations", "ai adoption"],
        artSlug: "what-is-an-llm-gateway",
        priority: 0.7,
    },
    Playbook: {
        title: "AI Playbooks",
        description: "Step-by-step AI playbooks for pilots, team enablement, approved workflows, exception handling, and rollout measurement.",
        keywords: ["ai playbook", "ai rollout plan", "ai adoption playbook", "enterprise ai pilot"],
        artSlug: "enterprise-ai-governance-guide",
        priority: 0.66,
    },
    Policy: {
        title: "AI Policy Articles",
        description: "AI policy articles covering prompt rules, acceptable use, template controls, approvals, exceptions, and employee guidance.",
        keywords: ["ai policy", "prompt engineering policy", "ai acceptable use policy", "ai prompt rules"],
        artSlug: "ai-governance-framework-template",
        priority: 0.72,
    },
    Privacy: {
        title: "AI Privacy Articles",
        description: "AI privacy guides for PII handling, retention, consent, prompt redaction, vendor data use, and privacy review evidence.",
        keywords: ["ai privacy", "pii redaction", "ai data privacy", "privacy controls for ai"],
        artSlug: "mcp-security-enterprise-guide",
        priority: 0.7,
    },
    Procurement: {
        title: "AI Procurement Articles",
        description: "AI procurement guides for vendor review, security questionnaires, data terms, pricing, implementation risk, and renewals.",
        keywords: ["ai procurement", "ai vendor review", "ai tools for business", "enterprise ai vendors"],
        artSlug: "how-to-choose-artificial-intelligence-tools-enterprise",
        priority: 0.74,
    },
    Risk: {
        title: "AI Risk Articles",
        description: "AI risk articles covering model risk, vendor exposure, sensitive data, access control, incidents, and executive reporting.",
        keywords: ["ai risk", "ai risk management", "model risk", "enterprise ai risk"],
        artSlug: "nist-ai-rmf-enterprise-guide",
        priority: 0.72,
    },
    Sales: {
        title: "AI Sales Articles",
        description: "AI sales articles for email workflows, outreach quality, CRM hygiene, sales productivity, and small sales team tooling.",
        keywords: ["email marketing tools", "best email marketing tools", "ai sales tools", "sales email automation"],
        artSlug: "best-email-marketing-tools-small-sales-teams",
        priority: 0.76,
    },
    Security: {
        title: "AI Security Articles",
        description: "AI security articles covering prompt injection, data leakage, model access, tool permissions, DLP, and incident response.",
        keywords: ["ai security", "prompt injection", "ai data leakage", "llm security", "ai dlp"],
        artSlug: "prompt-injection-prevention-guide",
        priority: 0.82,
    },
    Strategy: {
        title: "AI Strategy Articles",
        description: "AI strategy articles for choosing the right tools, prioritizing workflows, setting adoption plans, and measuring outcomes.",
        keywords: ["ai strategy", "enterprise ai strategy", "artificial intelligence tools", "ai adoption strategy"],
        artSlug: "best-artificial-intelligence-tools-for-employees",
        priority: 0.76,
    },
    Template: {
        title: "AI Template Articles",
        description: "Templates for AI policies, controls, evidence records, workflow planning, review checklists, and team operating standards.",
        keywords: ["ai template", "ai policy template", "ai checklist template", "prompt template"],
        artSlug: "ai-governance-framework-template",
        priority: 0.64,
    },
};

export function getBlogCategorySeo(category: string): BlogCategorySeo {
    return categorySeo[category] ?? {
        title: `${category} AI Articles`,
        description: `Read Remova articles on ${category.toLowerCase()} for AI teams that need practical controls, workflows, and operating clarity.`,
        keywords: [`${category.toLowerCase()} ai`, "enterprise ai", "ai tools", "ai controls"],
        artSlug: "enterprise-ai-governance-guide",
        priority: 0.62,
    };
}
