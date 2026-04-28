import type { ModelEntry } from "@/content/models";

const baseApplications = [
    {
        title: "Create presentations",
        description: "Turn notes, research, and meeting outcomes into structured slide outlines, speaker notes, and executive narratives.",
    },
    {
        title: "Code and debug",
        description: "Draft features, explain unfamiliar code, generate tests, review pull requests, and reason through implementation tradeoffs.",
    },
    {
        title: "Summarize long documents",
        description: "Condense contracts, policies, technical specs, RFPs, and research reports into decision-ready summaries.",
    },
    {
        title: "Analyze spreadsheets",
        description: "Interpret CSV exports, explain variance, generate formulas, and identify operational or financial patterns.",
    },
    {
        title: "Draft customer communications",
        description: "Create support replies, sales follow-ups, onboarding emails, renewal messages, and account updates.",
    },
    {
        title: "Prepare legal and compliance reviews",
        description: "Extract obligations, flag risky clauses, compare policy language, and prepare review checklists.",
    },
    {
        title: "Build workflow automations",
        description: "Plan agent steps, transform data between tools, create structured outputs, and support repeatable operations.",
    },
    {
        title: "Research competitors and markets",
        description: "Synthesize market signals, positioning, pricing context, customer segments, and competitive risks.",
    },
    {
        title: "Create knowledge-base answers",
        description: "Answer employee questions from internal policies, product docs, training material, and operating procedures.",
    },
    {
        title: "Support finance planning",
        description: "Draft budget narratives, explain spend drivers, create forecast assumptions, and summarize vendor costs.",
    },
    {
        title: "Improve security reviews",
        description: "Classify risk, draft incident summaries, review access patterns, and create remediation action lists.",
    },
    {
        title: "Generate product and marketing copy",
        description: "Create landing-page drafts, positioning variants, launch messaging, ad concepts, and campaign briefs.",
    },
];

function priorityApplications(model: ModelEntry) {
    const bestFor = model.bestFor.join(" ").toLowerCase();
    const applications = [...baseApplications];

    if (bestFor.includes("code")) {
        return moveToFront(applications, ["Code and debug", "Build workflow automations", "Improve security reviews"]);
    }

    if (bestFor.includes("reason") || bestFor.includes("math")) {
        return moveToFront(applications, ["Summarize long documents", "Support finance planning", "Prepare legal and compliance reviews"]);
    }

    if (bestFor.includes("agent")) {
        return moveToFront(applications, ["Build workflow automations", "Create knowledge-base answers", "Improve security reviews"]);
    }

    if (bestFor.includes("multimodal") || bestFor.includes("document")) {
        return moveToFront(applications, ["Summarize long documents", "Create presentations", "Analyze spreadsheets"]);
    }

    if (bestFor.includes("cost") || bestFor.includes("volume") || bestFor.includes("throughput")) {
        return moveToFront(applications, ["Draft customer communications", "Analyze spreadsheets", "Generate product and marketing copy"]);
    }

    return applications;
}

function moveToFront<T extends { title: string }>(items: T[], titles: string[]) {
    const titleSet = new Set(titles);
    return [
        ...titles.map((title) => items.find((item) => item.title === title)).filter((item): item is T => Boolean(item)),
        ...items.filter((item) => !titleSet.has(item.title)),
    ];
}

export function applicationsForModel(model: ModelEntry) {
    return priorityApplications(model).slice(0, 12).map((application) => ({
        ...application,
        description: application.description.replace(/\.$/, ` with ${model.name}.`),
    }));
}
