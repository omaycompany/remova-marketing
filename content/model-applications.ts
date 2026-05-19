import type { ModelEntry } from "@/content/models";

export type ModelApplication = {
    title: string;
    description: string;
    icon: "slides" | "code" | "doc" | "chart" | "search" | "flow" | "image" | "video" | "audio" | "shield" | "layers" | "spark";
    color: string;
};

const colors = {
    teal: "#14b8a6",
    emerald: "#10b981",
    blue: "#2563eb",
    violet: "#7c3aed",
    amber: "#f59e0b",
    red: "#ef4444",
    rose: "#e11d48",
    cyan: "#0891b2",
};

const textApplications: ModelApplication[] = [
    {
        title: "Summarize long documents",
        description: "Condense contracts, policies, technical specs, RFPs, and research reports into decision-ready summaries.",
        icon: "doc",
        color: colors.violet,
    },
    {
        title: "Create presentations",
        description: "Turn notes, research, and meeting outcomes into structured slide outlines, speaker notes, and executive narratives.",
        icon: "slides",
        color: colors.teal,
    },
    {
        title: "Code and debug",
        description: "Draft features, explain unfamiliar code, generate tests, review pull requests, and reason through implementation tradeoffs.",
        icon: "code",
        color: colors.blue,
    },
    {
        title: "Analyze spreadsheets",
        description: "Interpret CSV exports, explain variance, generate formulas, and identify operational or financial patterns.",
        icon: "chart",
        color: colors.emerald,
    },
    {
        title: "Draft customer communications",
        description: "Create support replies, sales follow-ups, onboarding emails, renewal messages, and account updates.",
        icon: "spark",
        color: colors.cyan,
    },
    {
        title: "Prepare legal and compliance reviews",
        description: "Extract obligations, flag risky clauses, compare policy language, and prepare review checklists.",
        icon: "shield",
        color: colors.rose,
    },
    {
        title: "Build workflow automations",
        description: "Plan agent steps, transform data between tools, create structured outputs, and support repeatable operations.",
        icon: "flow",
        color: colors.red,
    },
    {
        title: "Research competitors and markets",
        description: "Synthesize market signals, positioning, pricing context, customer segments, and competitive risks.",
        icon: "search",
        color: colors.amber,
    },
    {
        title: "Create knowledge-base answers",
        description: "Answer employee questions from internal policies, product docs, training material, and operating procedures.",
        icon: "layers",
        color: colors.blue,
    },
    {
        title: "Support finance planning",
        description: "Draft budget narratives, explain spend drivers, create forecast assumptions, and summarize vendor costs.",
        icon: "chart",
        color: colors.emerald,
    },
    {
        title: "Improve security reviews",
        description: "Classify risk, draft incident summaries, review access patterns, and create remediation action lists.",
        icon: "shield",
        color: colors.red,
    },
    {
        title: "Generate product and marketing copy",
        description: "Create landing-page drafts, positioning variants, launch messaging, ad concepts, and campaign briefs.",
        icon: "spark",
        color: colors.violet,
    },
];

const imageApplications: ModelApplication[] = [
    { title: "Create product images", description: "Generate product visuals, concept shots, packaging mockups, and campaign-ready image variants.", icon: "image", color: colors.blue },
    { title: "Produce ad creative", description: "Create visual concepts for paid social, display campaigns, launch assets, and landing-page media.", icon: "spark", color: colors.violet },
    { title: "Edit existing images", description: "Adjust backgrounds, compositions, object placement, and style direction for approved brand workflows.", icon: "image", color: colors.teal },
    { title: "Build brand moodboards", description: "Explore visual directions, art styles, color systems, and creative references for internal review.", icon: "layers", color: colors.amber },
    { title: "Generate social media visuals", description: "Create post images, thumbnails, story graphics, and campaign variations for marketing teams.", icon: "image", color: colors.rose },
    { title: "Prototype UI imagery", description: "Create placeholder product scenes, app mockup visuals, and interface illustration concepts.", icon: "layers", color: colors.cyan },
    { title: "Localize campaign assets", description: "Adapt visual creative for regions, audiences, formats, and seasonal campaign needs.", icon: "flow", color: colors.emerald },
    { title: "Review visual safety", description: "Route image requests through approvals, usage controls, and audit trails before teams publish.", icon: "shield", color: colors.red },
    { title: "Create ecommerce assets", description: "Generate category visuals, product-background variants, and merchandising images at scale.", icon: "image", color: colors.blue },
    { title: "Explore creative concepts", description: "Turn briefs into visual options that teams can compare before production spend.", icon: "search", color: colors.amber },
];

const videoApplications: ModelApplication[] = [
    { title: "Create product demos", description: "Generate short product videos, feature explainers, and launch clips from approved creative prompts.", icon: "video", color: colors.blue },
    { title: "Produce social video ads", description: "Create short-form campaign clips, motion variants, and platform-specific visual stories.", icon: "video", color: colors.violet },
    { title: "Animate product visuals", description: "Turn still product images, mockups, or brand concepts into controlled motion assets.", icon: "flow", color: colors.teal },
    { title: "Draft explainer videos", description: "Create visual sequences for onboarding, education, support, and internal enablement workflows.", icon: "video", color: colors.emerald },
    { title: "Generate storyboard motion", description: "Convert creative briefs into motion studies before committing to full production.", icon: "layers", color: colors.amber },
    { title: "Create localization variants", description: "Adapt campaign videos for different markets, audiences, formats, and approval paths.", icon: "flow", color: colors.cyan },
    { title: "Prototype video concepts", description: "Explore scene direction, pacing, framing, and visual treatments for marketing review.", icon: "search", color: colors.rose },
    { title: "Govern media generation", description: "Keep video creation behind role access, budget controls, review workflows, and audit trails.", icon: "shield", color: colors.red },
    { title: "Create training clips", description: "Generate concise internal clips for employee enablement, process walkthroughs, and safety reminders.", icon: "video", color: colors.blue },
    { title: "Produce event teasers", description: "Create motion assets for launches, webinars, announcements, and customer communications.", icon: "spark", color: colors.violet },
];

const audioApplications: ModelApplication[] = [
    { title: "Create voiceovers", description: "Generate approved narration for product demos, support videos, training clips, and internal updates.", icon: "audio", color: colors.blue },
    { title: "Produce audio variants", description: "Create tone, pacing, and language variants for campaign and enablement workflows.", icon: "audio", color: colors.violet },
    { title: "Draft podcast segments", description: "Generate short audio scripts, intros, summaries, and narration assets for content teams.", icon: "spark", color: colors.teal },
    { title: "Localize spoken content", description: "Adapt approved narration for different audiences, regions, and accessibility needs.", icon: "flow", color: colors.emerald },
    { title: "Create training narration", description: "Produce consistent voice assets for onboarding, compliance, and internal enablement material.", icon: "audio", color: colors.amber },
    { title: "Govern audio generation", description: "Keep generated speech behind approvals, role access, budget controls, and audit logs.", icon: "shield", color: colors.red },
];

const transcriptionApplications: ModelApplication[] = [
    { title: "Transcribe meetings", description: "Convert calls, interviews, and recordings into searchable text for governed team workflows.", icon: "audio", color: colors.blue },
    { title: "Create call summaries", description: "Turn transcripts into action items, decisions, risks, and customer follow-up drafts.", icon: "doc", color: colors.violet },
    { title: "Analyze support calls", description: "Extract topics, sentiment, escalation signals, and coaching opportunities from recordings.", icon: "chart", color: colors.emerald },
    { title: "Generate captions", description: "Create accessibility captions and transcript assets for videos, demos, and training content.", icon: "video", color: colors.teal },
    { title: "Search audio archives", description: "Make recorded content easier to classify, find, summarize, and route to the right team.", icon: "search", color: colors.amber },
    { title: "Govern transcript access", description: "Apply redaction, retention controls, and audit trails to sensitive spoken content.", icon: "shield", color: colors.red },
];

const retrievalApplications: ModelApplication[] = [
    { title: "Improve enterprise search", description: "Rank documents, answers, and knowledge-base results so teams find the right information faster.", icon: "search", color: colors.blue },
    { title: "Power semantic retrieval", description: "Match user questions to relevant policies, product docs, tickets, and internal references.", icon: "layers", color: colors.violet },
    { title: "Deduplicate knowledge assets", description: "Cluster related content, similar records, and overlapping documents for cleaner operations.", icon: "flow", color: colors.teal },
    { title: "Route support requests", description: "Classify incoming questions and connect them with the most relevant internal resources.", icon: "flow", color: colors.emerald },
    { title: "Rank compliance evidence", description: "Surface the most relevant policies, logs, and documents during audits and reviews.", icon: "shield", color: colors.red },
    { title: "Measure content similarity", description: "Compare records, tickets, snippets, and documents for matching or recommendation workflows.", icon: "chart", color: colors.amber },
];

function modelText(model: ModelEntry) {
    return [
        model.name,
        model.summary,
        model.description,
        model.modelType,
        model.modality,
        ...(model.bestFor ?? []),
        ...(model.inputModalities ?? []),
        ...(model.outputModalities ?? []),
    ].filter(Boolean).join(" ").toLowerCase();
}

function applicationsByModality(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);
    const modelType = `${model.modelType ?? ""}`.toLowerCase();
    const modality = `${model.modality ?? ""}`.toLowerCase();
    const isTranscriptionModel =
        output.has("transcription")
        || modelType.includes("transcription")
        || modelType.includes("speech-to-text")
        || modelType.includes("audio-to-text")
        || modality.includes("audio->transcription")
        || text.includes("transcription")
        || text.includes("transcribe")
        || text.includes("speech-to-text")
        || text.includes("automatic speech recognition")
        || /\basr\b/.test(text)
        || text.includes("whisper");
    const isAudioGenerationModel =
        output.has("audio")
        || output.has("speech")
        || modelType.includes("audio")
        || modelType.includes("speech")
        || modelType.includes("tts")
        || modelType.includes("music")
        || modality.includes("->audio")
        || modality.includes("->speech")
        || modality.includes("->music")
        || text.includes("text-to-speech")
        || text.includes("tts");

    if (isTranscriptionModel) return transcriptionApplications;
    if (output.has("video") || modelType.includes("video") || modality.includes("->video")) return videoApplications;
    if (output.has("image") || modelType.includes("image") || modality.includes("->image")) return imageApplications;
    if (isAudioGenerationModel) return audioApplications;
    if (text.includes("embed") || text.includes("rerank") || text.includes("retrieval")) return retrievalApplications;

    return priorityTextApplications(model);
}

function priorityTextApplications(model: ModelEntry) {
    const bestFor = modelText(model);
    const applications = [...textApplications];

    if (bestFor.includes("code") || bestFor.includes("coding") || bestFor.includes("software")) {
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
    return applicationsByModality(model).slice(0, 12).map((application) => ({
        ...application,
        description: application.description.replace(/\.$/, ` with ${model.name}.`),
    }));
}
