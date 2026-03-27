export interface BlogPost {
    slug: string;
    title: string;
    metaDescription: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    sections: { heading: string; content: string }[];
    faqs?: { question: string; answer: string }[];
}

const p = (
    slug: string,
    title: string,
    metaDescription: string,
    category: string,
    date: string,
    readTime: string,
    excerpt: string,
    sections: [string, string][]
): BlogPost => ({
    slug,
    title,
    metaDescription,
    category,
    date,
    readTime,
    excerpt,
    sections: sections.map(([heading, content]) => ({ heading, content })),
});

const rawBlogPosts: BlogPost[] = [
    p(
        "ai-governance-program-basics",
        "How to Launch an AI Governance Program",
        "A practical starting framework for policy, access, and cost governance across enterprise AI usage.",
        "Guide",
        "2026-02-03",
        "8 min",
        "A focused approach to launch governance without slowing adoption.",
        [
            ["Start with Ownership", "Assign clear ownership across security, IT, compliance, legal, and business operations before broad rollout. The strongest programs name a single operating owner, define who approves policy changes, and make department leads accountable for adoption outcomes in their own teams."],
            ["Define the Minimum Control Set", "Before rollout, decide which controls are non-negotiable: model access, policy guardrails, sensitive-data handling, retention behavior, and spend limits. A governance program fails when teams hear principles but never see the exact defaults, thresholds, and exception paths that apply to daily work."],
            ["Pilot on Real Workflows", "Start with a pilot group using real production-adjacent tasks such as drafting customer emails, summarizing internal documents, or researching policy questions. This surfaces where controls are too loose, too restrictive, or operationally confusing before you expand to the rest of the company."],
            ["Measure More Than Adoption", "Track not only usage growth, but also policy events, exception volume, blocked tasks, budget variance, and manager sentiment. If the only KPI is adoption, teams can look successful while governance debt quietly grows underneath."],
            ["Create an Exception Process", "Document who can approve exceptions, how long they last, and what evidence is required to justify them. Temporary exceptions without review dates or ownership often become permanent shadow policy."],
            ["Review on a Cadence", "Use weekly operational reviews to inspect incidents, exception trends, and rollout friction, then hold a broader governance review each quarter. Programs stay credible when they continuously tune controls instead of treating policy as a one-time launch artifact."],
        ]
    ),
    p(
        "ai-policy-enforcement-practical",
        "Policy Enforcement in Daily AI Workflows",
        "How to move from policy documents to enforceable controls in everyday AI usage.",
        "Operations",
        "2026-02-18",
        "7 min",
        "Written policy matters, but enforcement is what changes outcomes.",
        [
            ["Map Policy to Controls", "Translate each policy statement into a concrete system behavior such as allow, warn, block, redact, route for review, or log for follow-up. A policy that cannot be expressed as a workflow decision is still governance intent, not operational enforcement."],
            ["Design for the Common Case", "Most employees should not need manual approval for normal, low-risk work. Build safe defaults for the common case so that approvals are reserved for genuinely higher-risk actions rather than routine drafting, summarization, or analysis."],
            ["Reduce Manual Exceptions", "Use predefined workflows, role-scoped approvals, and documented fallback paths so managers are not forced to improvise decisions. Ad hoc exception handling creates inconsistency, slows work, and teaches teams that policy is negotiable if they complain loudly enough."],
            ["Track High-Risk Patterns", "Monitor where blocked requests, redaction events, or repeated warnings cluster by department and task type. Those clusters show whether the policy itself is poorly tuned, whether training is missing, or whether a specific workflow should be redesigned."],
            ["Test Policy Drift", "Review whether rules behave consistently across new models, new departments, and API-based workflows. Drift often appears when one team gets a new tool or bypass path that the main governance process does not cover."],
            ["Close the Loop", "Feed incident reviews and exception analysis back into policy updates, admin settings, and user education. Enforcement gets better when governance teams treat production activity as input, not just output."],
        ]
    ),
    p(
        "department-budget-governance",
        "Department Budget Governance for AI",
        "A practical guide to structuring team-level AI budgets and spend accountability.",
        "FinOps",
        "2026-03-02",
        "9 min",
        "Budget controls help scale adoption without losing financial visibility.",
        [
            ["Set Team Budgets", "Assign baseline allocations by function, but do not stop at a single monthly number. Teams need budget owners, review thresholds, and a clear rule for how pilot budgets differ from steady-state operating budgets."],
            ["Separate Exploration from Production", "Product experimentation, executive trials, and broad employee usage should not share the same cost pool. When those categories are blended together, finance loses the ability to tell whether rising spend reflects learning, rollout success, or uncontrolled usage."],
            ["Use Alerts and Limits", "Combine early warning thresholds with hard limits, approval triggers, and temporary override paths for business-critical work. Good budget control is not only about stopping spend; it is about making escalation predictable when a legitimate need exceeds plan."],
            ["Review Utilization", "Track monthly utilization by team, workflow, and model tier so you can see whether budget is concentrated in a few users, a few tasks, or an expensive default model. Rebalancing works better when you know what is driving cost, not just where cost landed."],
            ["Tie Spend to Outcomes", "Evaluate usage alongside cycle time, throughput, quality lift, and avoided manual effort. A team that spends more while cutting review time in half may be healthy, while a low-spend team with no measurable workflow impact may still be wasteful."],
            ["Build Budget Governance into Rollout", "Budget controls should launch with access controls and workflow design, not months later after surprise invoices. Once teams normalize unrestricted usage, retroactive cost governance becomes politically and operationally harder."],
        ]
    ),
    p(
        "retention-controls-and-ai",
        "Retention Controls for Enterprise AI",
        "How to design retention behavior that aligns AI data handling with organizational policy.",
        "Compliance",
        "2026-03-14",
        "8 min",
        "Retention controls should be explicit, role-scoped, and reviewable.",
        [
            ["Define Retention Posture", "Set a default retention posture at the organization level before teams launch production workflows. If defaults are not explicit, data tends to persist indefinitely because no one owns the decision to delete it."],
            ["Differentiate by Workflow Risk", "Not every AI interaction needs the same retention treatment. Drafting customer communications, reviewing contracts, summarizing internal finance notes, and handling support escalations may require different storage duration, visibility rules, and downstream logging behavior."],
            ["Scope Access Clearly", "Pair retention settings with role-scoped visibility so stored interactions are not broadly accessible just because they exist. Retention without access control often turns into overexposure of historical prompts, outputs, and incident records."],
            ["Document Exceptions", "Track who approved exceptions, why they were needed, what data classes were involved, and when the exception expires. Exception records matter because the highest-risk retention decisions are usually the least standard ones."],
            ["Align with Investigation Needs", "Security, legal, and compliance teams often need enough history to reconstruct incidents, but that requirement should be designed intentionally instead of used as a blanket argument for keeping everything forever. Effective retention balances investigative usefulness with minimization discipline."],
            ["Revalidate Periodically", "Review retention settings whenever workflows, regulations, customer commitments, or model integrations change. Teams frequently keep yesterday's retention posture long after the business context that justified it has moved."],
        ]
    ),
    p(
        "building-ai-audit-readiness",
        "Building AI Audit Readiness",
        "What effective AI activity records should contain and how teams can operationalize review workflows.",
        "Governance",
        "2026-03-20",
        "10 min",
        "Audit readiness improves when records are consistent and operationally useful.",
        [
            ["Capture Relevant Events", "Record policy actions, admin changes, model access decisions, exception approvals, and usage outcomes that materially affect governance. If the log cannot answer who changed what, when, and under which policy context, it will disappoint the first serious review."],
            ["Preserve Useful Context", "An event record is only valuable if reviewers can interpret it later. Keep enough surrounding context to explain what workflow was attempted, what rule triggered, which model or tier was involved, and what the user or reviewer did next."],
            ["Keep Review Paths Clear", "Define which teams review operational events weekly, which issues escalate to governance leadership, and how findings are tracked to closure. Audit readiness is less about generating data and more about proving that someone examines the data and acts on it."],
            ["Support Investigations", "Investigation teams need to reconstruct sequences quickly without manually stitching together multiple systems. That means access changes, policy events, workflow metadata, and exception history should point to one another rather than live in isolated reporting silos."],
            ["Design for Executive Reporting", "Leadership rarely needs raw logs, but they do need trend summaries that show whether risk is rising, controls are effective, and specific departments require intervention. Audit readiness improves when operational evidence can roll up cleanly into management reporting."],
            ["Use Reporting Cadence", "Summarize audit trends monthly for operators and quarterly for governance committees or executive stakeholders. Consistent reporting cadence turns audit readiness into a management practice instead of a last-minute compliance scramble."],
        ]
    ),
    p(
        "safe-ai-rollout-playbook",
        "A Safe AI Rollout Playbook for Teams",
        "A step-by-step rollout sequence for enabling AI while maintaining policy and operational controls.",
        "Playbook",
        "2026-03-25",
        "9 min",
        "Rollout quality improves when governance is designed before scale.",
        [
            ["Pilot with Boundaries", "Select pilot teams with real business demand, but give them clear limits on model access, data handling, and approved workflows. A pilot should test usefulness under governance, not prove that AI feels exciting when rules are absent."],
            ["Define Success Up Front", "Write down what success means before launch: faster turnaround, lower manual effort, better consistency, safer handling of sensitive content, or some combination of these. Pilots drift when teams celebrate enthusiasm but cannot show concrete workflow impact."],
            ["Operationalize Defaults", "Create presets, access baselines, budget templates, and exception rules before expansion begins. The easiest time to standardize behavior is before each department invents its own habits and shortcuts."],
            ["Train Managers, Not Just End Users", "Managers need to understand what controls exist, what they own, and when escalation is appropriate. Many rollouts fail because end users are trained on prompts while managers are not trained on governance decisions."],
            ["Scale in Waves", "Expand in planned stages with checkpoint reviews between each wave. Those checkpoints should cover adoption quality, policy friction, support burden, and spend behavior rather than focusing only on seat count."],
            ["Sustain with Monitoring", "Use analytics, audit reviews, and periodic workflow inspection to maintain quality after launch. Safe AI rollout is an operating model, not a one-time enablement event."],
        ]
    ),
];

const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

export const allBlogPosts = rawBlogPosts
    .filter((post) => post.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
