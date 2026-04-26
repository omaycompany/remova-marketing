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
    metaTitle: `What is ${term}? | AI Glossary`,
    metaDescription: `${term} explained for enterprise AI teams: ${definition.replace(/[.]+$/, "")}.`,
    definition,
    explanation,
    relatedTerms,
});

export const glossaryTerms: GlossaryTerm[] = [
    t(
        "ai-governance",
        "AI Governance",
        "The policies, controls, and operating practices used to manage AI usage safely at scale.",
        "AI governance combines technical controls, operating processes, ownership models, and review routines so teams can use AI productively without creating unmanaged policy, privacy, security, or financial risk. In practice, it covers decisions such as who can use which models, what content is blocked or reviewed, how usage is monitored, and how incidents or exceptions are handled. Strong governance is not a document library; it is the system that turns organizational policy into repeatable day-to-day behavior.",
        ["policy-guardrails", "audit-trails", "role-based-access-control", "ai-finops"]
    ),
    t(
        "policy-guardrails",
        "Policy Guardrails",
        "Control checks that evaluate AI inputs and outputs against organization policy.",
        "Policy guardrails enforce approved behavior by applying rules, classifiers, and contextual checks before risky requests or responses are delivered. They can warn, redact, block, or route interactions for review depending on the severity and workflow context. Effective guardrails reduce reliance on employee judgment alone and make policy enforcement more consistent across teams, tools, and models.",
        ["ai-governance", "sensitive-data-protection", "audit-trails", "content-safety"]
    ),
    t(
        "sensitive-data-protection",
        "Sensitive Data Protection",
        "Controls that reduce accidental disclosure of confidential data in AI workflows.",
        "Sensitive data protection in AI workflows covers the controls used to detect, redact, block, or route confidential information before it is exposed to an unauthorized system, user, or model. The exact control set usually depends on data type, department, and business context rather than one uniform global rule. Organizations usually need both preventive controls, such as prompt redaction, and review mechanisms that show where risky patterns are recurring.",
        ["retention-controls", "policy-guardrails", "ai-risk", "audit-trails"]
    ),
    t(
        "role-based-access-control",
        "Role-Based Access Control",
        "An access model that grants permissions according to organizational role and responsibility.",
        "Role-based access control reduces over-permissioning by defining who can configure controls, approve exceptions, use specific models, or view sensitive activity records. In enterprise AI programs, RBAC matters not only for admin settings but also for workflow safety because different roles should not have the same model options, data access, or budget authority. Good RBAC keeps governance decisions close to accountable owners without turning every change into a centralized bottleneck.",
        ["ai-governance", "department-management", "identity-integration", "least-privilege"]
    ),
    t(
        "retention-controls",
        "Retention Controls",
        "Configurable settings that define how long AI interaction data is stored and who can access it.",
        "Retention controls help organizations align AI data handling with internal policy, contractual commitments, and regulatory expectations by deciding how long prompts, outputs, logs, and related metadata are stored. They should be designed together with access controls, because stored data becomes more sensitive when many people can search or export it. Mature retention design balances minimization with operational needs such as incident investigation, support, and governance review.",
        ["sensitive-data-protection", "ai-governance", "audit-trails", "data-minimization"]
    ),
    t(
        "audit-trails",
        "Audit Trails",
        "Traceable records of AI activity, governance actions, and control events.",
        "Audit trails preserve the activity history needed for internal review, incident response, governance reporting, and accountability. Useful audit records show more than that an event happened; they also capture the policy context, actor, workflow, and follow-up action. Without that context, organizations may have logs but still lack evidence that controls were applied consistently or that incidents can be reconstructed quickly.",
        ["ai-governance", "policy-guardrails", "incident-response", "usage-analytics"]
    ),
    t(
        "ai-finops",
        "AI FinOps",
        "Operational cost governance for AI usage, including budgeting, tracking, and optimization.",
        "AI FinOps is the operating discipline for making AI usage financially visible, controlled, and accountable. It usually includes budget ownership, usage allocation by team, alerting, model-tier routing, and periodic review of whether spend is producing measurable workflow value. Organizations that skip AI FinOps often discover too late that broad adoption and high-cost defaults have become the same thing.",
        ["department-budgets", "usage-analytics", "ai-governance", "model-governance"]
    ),
    t(
        "department-budgets",
        "Department Budgets",
        "Team-level spending controls used to manage AI usage across an organization.",
        "Department budgets are spending controls that assign AI cost ownership to the teams actually using the service rather than leaving all spend in one shared pool. They usually include baseline allocations, warning thresholds, hard limits, and exception rules for business-critical work. Clear departmental budgeting makes adoption easier to scale because finance, IT, and line managers can see where spend is justified and where it is drifting.",
        ["ai-finops", "usage-analytics", "ai-governance", "model-governance"]
    ),
    t(
        "model-governance",
        "Model Governance",
        "Policies that control model availability and usage behavior by team and context.",
        "Model governance defines which model tiers are available to which users, under what conditions, and for what types of workflows. It helps organizations phase rollouts, limit risky or expensive usage, and maintain consistency as new providers and capabilities appear. Model governance becomes especially important when one model is suited to experimentation, another to production support, and another to high-consequence reasoning or coding work.",
        ["department-budgets", "policy-guardrails", "ai-governance", "role-based-access-control"]
    ),
    t(
        "knowledge-grounding",
        "Knowledge Grounding",
        "Using approved internal context to improve response relevance in AI workflows.",
        "Knowledge grounding improves response relevance by giving models approved internal context such as policies, SOPs, product documentation, or account information. The goal is not just better answers, but more controllable answers that reflect the organization's own sources of truth. Grounding is most useful when access to knowledge is scoped carefully and teams can distinguish between grounded output and general model reasoning.",
        ["rag", "usage-analytics", "policy-guardrails", "ai-governance"]
    ),
    t(
        "rag",
        "Retrieval-Augmented Generation (RAG)",
        "A method where AI responses are informed by retrieved reference content.",
        "RAG workflows retrieve relevant documents at response time and supply that context to the model so outputs can be informed by current reference material. In enterprise settings, RAG is often used to reduce unsupported answers, improve factual alignment with internal knowledge, and keep assistants useful without retraining a model. Good RAG design still needs governance around document quality, permissioning, and how retrieved evidence is surfaced to users.",
        ["knowledge-grounding", "embeddings", "vector-search", "ai-governance"]
    ),
    t(
        "usage-analytics",
        "Usage Analytics",
        "Operational reporting on AI adoption, policy events, and spending trends.",
        "Usage analytics shows how teams adopt AI, where controls trigger, which workflows consume budget, and how operating patterns change over time. It supports governance by revealing whether controls are actually working, whether training is needed, and whether some teams are scaling faster than policy maturity. Strong analytics connect activity, risk, and cost rather than reporting each in isolation.",
        ["ai-finops", "audit-trails", "policy-guardrails", "department-budgets"]
    ),
    t(
        "incident-response",
        "AI Incident Response",
        "A structured process for handling high-risk AI events and policy violations.",
        "AI incident response is the structured process used to detect, contain, investigate, remediate, and learn from high-risk AI events. These incidents might involve policy violations, sensitive-data exposure, misuse of model access, or harmful output reaching production workflows. Effective response requires both technical evidence and clear ownership so the organization can improve controls instead of treating each incident as a one-off exception.",
        ["audit-trails", "policy-guardrails", "ai-risk", "usage-analytics"]
    ),
    t(
        "ai-risk",
        "AI Risk",
        "Potential negative outcomes from AI usage, including policy, privacy, financial, and operational impacts.",
        "AI risk includes the potential for privacy breaches, policy violations, harmful outputs, cost overruns, unreliable automation, reputational damage, and operational disruption. It is best managed through a combination of preventive controls, monitoring, role ownership, and review processes rather than relying on users to self-govern in the moment. Mature organizations classify risk by workflow and impact level instead of treating all AI activity as equally risky or equally safe.",
        ["ai-governance", "incident-response", "policy-guardrails", "ai-finops"]
    ),

    t(
        "ai-transparency",
        "AI Transparency",
        "The degree to which an AI system's operations, training data, and decision-making processes are visible and understandable to stakeholders.",
        "AI transparency is a critical requirement for enterprise trust and regulatory compliance. It encompasses several dimensions: data transparency (knowing what data trained the model), algorithmic transparency (understanding the architecture and weights), and operational transparency (logging when, where, and how the model is used). Organizations require high transparency to defend automated decisions, prevent bias, and pass audits. Without transparency, AI remains a 'black box' that exposes the enterprise to unquantifiable risk.",
        ["audit-trails", "ai-governance", "ai-risk", "model-governance"]
    )

];
