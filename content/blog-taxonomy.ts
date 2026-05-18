export type BlogCategorySeo = {
    title: string;
    description: string;
    keywords: string[];
    artSlug: string;
    priority: number;
};

export type BlogCategoryHub = {
    positioning: string;
    useWhen: string;
    decisions: string[];
    fieldNotes?: string[];
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

const categoryHubGuidance: Record<string, BlogCategoryHub> = {
    Architecture: {
        positioning: "Architecture articles are for the team that has to make AI usable without turning every workflow into a one-off integration project.",
        useWhen: "Use this hub when you are deciding where prompts flow, which systems can call models, how retrieval should be isolated, and where observability belongs.",
        decisions: ["Which AI traffic needs a gateway instead of direct vendor access.", "Where RAG, MCP, routing, and logging should sit in the enterprise stack.", "How to keep architecture choices understandable to security and procurement reviewers."],
    },
    "Buyer Guide": {
        positioning: "Buyer guides are written for teams comparing vendors after the sales deck stops being useful.",
        useWhen: "Use this hub before a pilot or renewal when the real questions are about data terms, rollout burden, administrator visibility, and whether employees will actually use the tool.",
        decisions: ["Which controls are table stakes and which are vendor-specific extras.", "How to compare AI platforms without letting a polished demo define the requirements.", "What evidence should exist before a tool becomes an approved workplace system."],
    },
    Checklist: {
        positioning: "Checklist articles turn vague governance work into reviewable operating steps.",
        useWhen: "Use this hub when you need to run a control review, prepare a launch gate, or give a cross-functional team a shared list of what must be true before rollout.",
        decisions: ["What has to be documented before an AI workflow goes live.", "Which controls can be reviewed by policy owners instead of engineers.", "How to turn a checklist into recurring evidence rather than a one-time exercise."],
        fieldNotes: ["A useful checklist should name the owner of each item. If every line belongs to everyone, nothing gets reviewed when the workflow changes.", "Treat unchecked items as launch risks, not paperwork gaps. The point is to expose where policy, product behavior, and evidence are not yet aligned."],
    },
    Compliance: {
        positioning: "Compliance articles focus on the evidence layer: inventories, controls, exceptions, ownership, retention, and review records.",
        useWhen: "Use this hub when legal, security, or audit teams need to understand how AI usage maps to obligations such as ISO 42001, GDPR, EU AI Act readiness, and internal policy.",
        decisions: ["Which AI workflows need formal risk review.", "What evidence should be captured automatically instead of reconstructed later.", "How compliance ownership changes when employees use external models every day."],
    },
    "Customer Service": {
        positioning: "Customer service articles are about useful automation that does not damage trust.",
        useWhen: "Use this hub when support leaders want faster triage, better drafts, and cleaner knowledge workflows while still controlling escalation, customer data, and quality review.",
        decisions: ["Which support tasks are safe to automate and which need human review.", "How to keep customer data out of uncontrolled prompts.", "What metrics show whether AI improves support instead of just deflecting tickets."],
        fieldNotes: ["The practical test is whether support leaders can replay what happened when an answer was wrong, escalated late, or used the wrong source.", "Customer-service AI should improve the queue and the customer record. Draft quality, routing accuracy, and escalation discipline matter more than raw deflection."],
    },
    "Developer Governance": {
        positioning: "Developer governance articles are for engineering teams that already know AI coding tools are in the building.",
        useWhen: "Use this hub when the question is no longer whether developers will use AI, but how code, secrets, repositories, MCP servers, and internal context should be protected.",
        decisions: ["Which developer tools can touch source code and under what account model.", "How to prevent secrets, customer data, and private architecture from entering prompts.", "What logs and review practices are needed for AI-assisted engineering work."],
    },
    Engineering: {
        positioning: "Engineering articles focus on practical AI use inside software teams, not generic productivity claims.",
        useWhen: "Use this hub when comparing coding assistants, setting review expectations, or deciding how AI-generated code should move through normal engineering controls.",
        decisions: ["Which coding workflows are worth approving first.", "How AI output should be tested, reviewed, and attributed.", "Where developer experience and security policy need a compromise that teams will follow."],
        fieldNotes: ["Engineering controls need to respect the normal pull-request path. If AI work bypasses review, test ownership, or secret handling, it will create quiet debt.", "The goal is not to slow developers down. It is to approve the parts of AI coding that survive the same standards as human-written code."],
    },
    FinOps: {
        positioning: "AI FinOps articles deal with the part of AI adoption that finance notices after enthusiasm becomes recurring spend.",
        useWhen: "Use this hub when teams need budgets, chargeback logic, model routing, usage reporting, and a way to discuss cost without blocking useful work.",
        decisions: ["Which teams need hard budgets versus soft alerts.", "How to route routine work away from premium models.", "What reporting makes AI spend tied to work completed instead of raw token volume."],
    },
    Governance: {
        positioning: "Governance articles cover the operating model: who owns AI usage, which policies are enforceable, and how exceptions are handled.",
        useWhen: "Use this hub when AI has moved past experimentation and the company needs rules employees can follow without waiting on a committee for every prompt.",
        decisions: ["Who approves new AI tools, models, and workflows.", "Which policy events need review and which can be handled automatically.", "How to make governance visible without creating surveillance theater."],
    },
    Guide: {
        positioning: "Guides are broad, practical starting points for companies that need to make AI useful and controlled at the same time.",
        useWhen: "Use this hub when you are orienting a leadership team, choosing first workflows, or explaining why AI rollout needs ownership, controls, and measurement.",
        decisions: ["Which AI use cases deserve approval first.", "How to separate useful employee workflows from unmanaged shadow AI.", "What a realistic rollout path looks like for a company that cannot pause operations."],
    },
    Operations: {
        positioning: "Operations articles are about keeping AI workflows stable after the pilot ends.",
        useWhen: "Use this hub when teams need ownership, support paths, monitoring, incident handling, and a rhythm for improving AI workflows based on actual usage.",
        decisions: ["Which workflows need owners and operating metrics.", "How to handle exceptions without turning every case into a meeting.", "What should be reviewed weekly, monthly, and quarterly."],
    },
    Playbook: {
        positioning: "Playbooks are for teams that want a sequence, not just advice.",
        useWhen: "Use this hub when planning a pilot, creating an enablement path, or turning executive intent into a practical rollout with gates and feedback loops.",
        decisions: ["What happens in the first 30, 60, and 90 days of AI rollout.", "Which teams should pilot a control before company-wide launch.", "How to know whether a playbook is ready to scale."],
        fieldNotes: ["A playbook should make the next week obvious. If it only describes principles, it will not help the rollout owner manage blockers.", "Good rollout notes include stop conditions. Teams need to know when low adoption, policy friction, or repeated exceptions mean the plan needs revision."],
    },
    Policy: {
        positioning: "Policy articles translate company rules into controls employees can actually use.",
        useWhen: "Use this hub when acceptable use, prompt rules, preset workflows, and review paths need to be clear enough for employees and enforceable enough for administrators.",
        decisions: ["Which employee prompts are allowed, warned, blocked, or routed for review.", "How policy templates should vary by department and data class.", "Where legal language needs to become product behavior."],
    },
    Privacy: {
        positioning: "Privacy articles focus on what happens before sensitive data reaches a model or vendor.",
        useWhen: "Use this hub when reviewing prompt redaction, retention, data minimization, vendor data use, and privacy evidence for AI workflows.",
        decisions: ["Which data classes should be blocked, masked, or allowed with review.", "How to document privacy controls without exposing more data.", "What employees need to know before using AI with customer, employee, or supplier information."],
        fieldNotes: ["Privacy work should start with the data employees actually paste into tools, not only with vendor questionnaires. Real prompt behavior is where exposure shows up.", "Useful evidence proves both restraint and access. A team should be able to show what was redacted, what was retained, and who could review it."],
    },
    Procurement: {
        positioning: "Procurement articles help buyers ask harder questions before a tool becomes another unmanaged subscription.",
        useWhen: "Use this hub when vendor review needs to cover data use, subprocessors, retention, identity, logging, model access, pricing, and implementation burden.",
        decisions: ["What should be in the security questionnaire for AI tools.", "How to compare vendor promises against evidence.", "Which renewal risks show up only after usage expands."],
        fieldNotes: ["AI procurement should test the operating model, not just the feature list. The hard questions are about ownership, data terms, user provisioning, and reporting after rollout.", "A good buying process leaves fewer side channels. If employees still need unmanaged accounts to finish the work, the approved tool did not solve the workflow."],
    },
    Risk: {
        positioning: "Risk articles are for teams that need to explain AI exposure in operational terms.",
        useWhen: "Use this hub when executives, security, legal, or business owners need a shared view of model risk, vendor risk, data leakage, incidents, and control gaps.",
        decisions: ["Which AI risks are theoretical and which are already happening in daily work.", "How to prioritize controls when every team wants access.", "What risk reporting should show beyond a list of blocked prompts."],
    },
    Sales: {
        positioning: "Sales articles focus on practical communication workflows, not hype about replacing the sales team.",
        useWhen: "Use this hub when teams want better email, follow-up, CRM notes, and outreach quality without creating compliance, deliverability, or customer-trust problems.",
        decisions: ["Which sales messages can be drafted with AI and which need tighter review.", "How to keep prospect and customer data inside approved workflows.", "What automation is useful before a small team overbuilds a brittle sequence."],
        fieldNotes: ["Sales AI needs guardrails around claims, tone, personalization, and customer data. A faster sequence is not useful if it damages trust or deliverability.", "The best early workflows are narrow: summarize a call, draft a follow-up, clean CRM notes, or adapt an approved message for a known persona."],
    },
    Security: {
        positioning: "Security articles cover the controls that keep AI adoption from becoming a new leak path.",
        useWhen: "Use this hub when evaluating prompt injection, AI DLP, model access, tool permissions, incident response, and observability for real employee workflows.",
        decisions: ["Where sensitive data should be blocked before model calls.", "Which agent and tool actions require permission boundaries.", "How security teams can monitor AI usage without banning the tools people need."],
    },
    Strategy: {
        positioning: "Strategy articles help leadership choose where AI belongs and where it does not.",
        useWhen: "Use this hub when the company needs a point of view on adoption priorities, tool categories, operating ownership, and the tradeoff between speed and control.",
        decisions: ["Which AI workflows support the business strategy instead of chasing novelty.", "How to sequence adoption across departments.", "What success should mean beyond employee seat counts."],
        fieldNotes: ["Strategy should force tradeoffs. If every department, model, and workflow is equally urgent, the company has an AI wish list instead of an adoption plan.", "Good strategy connects usage to outcomes: time saved, risk reduced, quality improved, cost controlled, or a workflow that employees can now complete reliably."],
    },
    Template: {
        positioning: "Template articles are practical starting points for teams that need a document they can adapt.",
        useWhen: "Use this hub when creating policy drafts, control records, exception forms, review checklists, or operating standards that need legal and business review.",
        decisions: ["Which parts of a template should be standardized and which should be department-specific.", "How to keep templates close to the controls that enforce them.", "When a template is ready for rollout versus still a legal draft."],
        fieldNotes: ["Templates should reduce blank-page work without pretending every company has the same risk appetite. Keep the editable assumptions visible.", "A template is ready when owners can connect each clause to a control, workflow, or evidence source. Otherwise it is just policy theater."],
    },
};

export function getBlogCategoryHub(category: string): BlogCategoryHub {
    return categoryHubGuidance[category] ?? {
        positioning: `This hub collects practical Remova writing on ${category.toLowerCase()} for teams that need AI controls to work in daily operations.`,
        useWhen: "Use it to frame ownership, review paths, and the next decision your team needs to make before expanding AI usage.",
        decisions: ["Clarify who owns the workflow.", "Decide which data and model access rules apply.", "Document what will be reviewed after rollout."],
    };
}

export function getBlogCategorySeo(category: string): BlogCategorySeo {
    return categorySeo[category] ?? {
        title: `${category} AI Articles`,
        description: `Read Remova articles on ${category.toLowerCase()} for AI teams that need practical controls, workflows, and operating clarity.`,
        keywords: [`${category.toLowerCase()} ai`, "enterprise ai", "ai tools", "ai controls"],
        artSlug: "enterprise-ai-governance-guide",
        priority: 0.62,
    };
}
