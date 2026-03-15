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
            ["Start with Ownership", "Assign clear ownership across security, IT, compliance, and operations before broad rollout."],
            ["Define Baseline Controls", "Establish policy checks, role-based access, retention behavior, and department budget defaults."],
            ["Launch in Phases", "Start with a pilot group, collect feedback, and expand once controls are stable."],
            ["Review on a Cadence", "Use weekly operational checks and quarterly governance reviews to improve control quality."],
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
            ["Map Policy to Controls", "Translate policy statements into specific technical checks and action paths."],
            ["Reduce Manual Exceptions", "Use default workflows and role-scoped approvals to avoid ad hoc enforcement."],
            ["Track High-Risk Patterns", "Monitor recurring policy events and tune rules where exceptions repeat."],
            ["Close the Loop", "Feed review findings back into policy and training updates."],
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
            ["Set Team Budgets", "Assign baseline allocations by function, then adjust based on actual usage patterns."],
            ["Use Alerts and Limits", "Combine warning thresholds with hard limits for predictable spend behavior."],
            ["Review Utilization", "Track team utilization monthly and re-balance budgets where needed."],
            ["Tie Spend to Outcomes", "Evaluate usage alongside workflow impact, not in isolation."],
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
            ["Define Retention Posture", "Set default retention behavior at organization level, then tune by team risk profile."],
            ["Scope Access Clearly", "Pair retention settings with role-scoped visibility to reduce overexposure."],
            ["Document Exceptions", "Track exception paths and approval owners to support auditability."],
            ["Revalidate Periodically", "Review retention settings as workflows and policy requirements evolve."],
        ]
    ),
    p(
        "building-ai-audit-readiness",
        "Building AI Audit Readiness",
        "What effective AI activity records should contain and how teams can operationalize review workflows.",
        "Governance",
        "2026-03-28",
        "10 min",
        "Audit readiness improves when records are consistent and operationally useful.",
        [
            ["Capture Relevant Events", "Record policy events, admin actions, access changes, and key usage outcomes."],
            ["Keep Review Paths Clear", "Define who reviews what, how often, and how findings are resolved."],
            ["Support Investigations", "Maintain enough event context to reconstruct incidents quickly."],
            ["Use Reporting Cadence", "Summarize audit trends for leadership and governance committees."],
        ]
    ),
    p(
        "safe-ai-rollout-playbook",
        "A Safe AI Rollout Playbook for Teams",
        "A step-by-step rollout sequence for enabling AI while maintaining policy and operational controls.",
        "Playbook",
        "2026-04-08",
        "9 min",
        "Rollout quality improves when governance is designed before scale.",
        [
            ["Pilot with Boundaries", "Select pilot teams, define controls, and set clear success criteria."],
            ["Operationalize Defaults", "Create presets, access baselines, and budget templates before expansion."],
            ["Scale in Waves", "Expand team coverage in planned stages with checkpoint reviews."],
            ["Sustain with Monitoring", "Use analytics and audit reviews to maintain governance quality over time."],
        ]
    ),
];

const today = new Date().toISOString().slice(0, 10);

export const allBlogPosts = rawBlogPosts
    .filter((post) => post.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
