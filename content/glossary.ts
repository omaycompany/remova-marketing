export interface GlossaryTerm {
    slug: string;
    term: string;
    metaTitle: string;
    metaDescription: string;
    definition: string;
    explanation: string;
    relatedTerms: string[];
    faqs?: { question: string; answer: string }[];
}

const t = (
    slug: string,
    term: string,
    definition: string,
    explanation: string,
    relatedTerms: string[]
): GlossaryTerm => ({
    slug,
    term,
    metaTitle: `What is ${term}? | AI Glossary | Remova`,
    metaDescription: `${definition.slice(0, 150)}.`,
    definition,
    explanation,
    relatedTerms,
});

export const glossaryTerms: GlossaryTerm[] = [
    t(
        "ai-governance",
        "AI Governance",
        "The policies, controls, and operating practices used to manage AI usage safely at scale.",
        "AI governance combines technical controls and organizational processes so teams can use AI productively while reducing policy, privacy, and cost risk.",
        ["policy-guardrails", "audit-trails", "role-based-access-control", "ai-finops"]
    ),
    t(
        "policy-guardrails",
        "Policy Guardrails",
        "Control checks that evaluate AI inputs and outputs against organization policy.",
        "Policy guardrails help enforce approved behavior by applying rules and contextual checks before risky requests or responses are delivered.",
        ["ai-governance", "sensitive-data-protection", "audit-trails", "content-safety"]
    ),
    t(
        "sensitive-data-protection",
        "Sensitive Data Protection",
        "Controls that reduce accidental disclosure of confidential data in AI workflows.",
        "Sensitive data controls can detect, redact, block, or route high-risk interactions based on policy and team requirements.",
        ["retention-controls", "policy-guardrails", "ai-risk", "audit-trails"]
    ),
    t(
        "role-based-access-control",
        "Role-Based Access Control",
        "An access model that grants permissions according to organizational role and responsibility.",
        "Role-based access helps reduce over-permissioning by defining who can configure controls, approve exceptions, or use certain capabilities.",
        ["ai-governance", "department-management", "identity-integration", "least-privilege"]
    ),
    t(
        "retention-controls",
        "Retention Controls",
        "Configurable settings that define how long AI interaction data is stored and who can access it.",
        "Retention controls help organizations align AI data handling with policy requirements by limiting persistence and scoping visibility.",
        ["sensitive-data-protection", "ai-governance", "audit-trails", "data-minimization"]
    ),
    t(
        "audit-trails",
        "Audit Trails",
        "Traceable records of AI activity, governance actions, and control events.",
        "Audit trails support internal review, incident response, and governance reporting by preserving relevant activity history.",
        ["ai-governance", "policy-guardrails", "incident-response", "usage-analytics"]
    ),
    t(
        "ai-finops",
        "AI FinOps",
        "Operational cost governance for AI usage, including budgeting, tracking, and optimization.",
        "AI FinOps helps organizations control spend by assigning ownership, enforcing limits, and monitoring usage trends.",
        ["department-budgets", "usage-analytics", "ai-governance", "model-governance"]
    ),
    t(
        "department-budgets",
        "Department Budgets",
        "Team-level spending controls used to manage AI usage across an organization.",
        "Department budgets improve accountability by defining clear limits, alerts, and review rules for each team.",
        ["ai-finops", "usage-analytics", "ai-governance", "model-governance"]
    ),
    t(
        "model-governance",
        "Model Governance",
        "Policies that control model availability and usage behavior by team and context.",
        "Model governance helps organizations phase rollouts, limit high-risk usage, and maintain consistency across departments.",
        ["department-budgets", "policy-guardrails", "ai-governance", "role-based-access-control"]
    ),
    t(
        "knowledge-grounding",
        "Knowledge Grounding",
        "Using approved internal context to improve response relevance in AI workflows.",
        "Knowledge grounding helps teams receive more context-aware responses by referencing approved organizational information sources.",
        ["rag", "usage-analytics", "policy-guardrails", "ai-governance"]
    ),
    t(
        "rag",
        "Retrieval-Augmented Generation (RAG)",
        "A method where AI responses are informed by retrieved reference content.",
        "RAG workflows retrieve relevant documents and supply that context at response time to improve relevance and consistency.",
        ["knowledge-grounding", "embeddings", "vector-search", "ai-governance"]
    ),
    t(
        "usage-analytics",
        "Usage Analytics",
        "Operational reporting on AI adoption, policy events, and spending trends.",
        "Usage analytics supports governance decisions by showing how teams use AI, where controls trigger, and how costs evolve.",
        ["ai-finops", "audit-trails", "policy-guardrails", "department-budgets"]
    ),
    t(
        "incident-response",
        "AI Incident Response",
        "A structured process for handling high-risk AI events and policy violations.",
        "AI incident response includes detection, containment, investigation, remediation, and follow-up control improvements.",
        ["audit-trails", "policy-guardrails", "ai-risk", "usage-analytics"]
    ),
    t(
        "ai-risk",
        "AI Risk",
        "Potential negative outcomes from AI usage, including policy, privacy, financial, and operational impacts.",
        "Risk management is most effective when organizations combine preventive controls with monitoring and clear ownership.",
        ["ai-governance", "incident-response", "policy-guardrails", "ai-finops"]
    ),
];
