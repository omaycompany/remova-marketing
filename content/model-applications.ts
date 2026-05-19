import type { ModelEntry } from "@/content/models";
import {
    hasCodingSignal,
    isCodeRetrievalModel,
    isCreativeModel,
    isMediaUtilityModel,
    isMusicModel,
    isRetrievalModel,
    isSafetyModel,
    isSearchModel,
    isSoundEffectsModel,
    isSpeechGenerationModel,
    isTrainingModel,
    isTranscriptionModel,
    isVoiceAgentModel,
    modelText,
} from "@/lib/model-best-for";

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

const soundEffectsApplications: ModelApplication[] = [
    { title: "Create sound effects", description: "Generate approved effects, stingers, transitions, and ambient sounds for media workflows.", icon: "audio", color: colors.blue },
    { title: "Design product audio", description: "Prototype interface sounds, notification tones, demos, and branded audio moments.", icon: "spark", color: colors.violet },
    { title: "Prepare video effects", description: "Create sound beds, motion accents, and scene-specific effects for governed video production.", icon: "video", color: colors.teal },
    { title: "Localize audio assets", description: "Adapt effects and ambience for regions, campaigns, channels, and accessibility needs.", icon: "flow", color: colors.emerald },
    { title: "Review audio rights", description: "Route generated effects through brand, licensing, and publication review before release.", icon: "shield", color: colors.red },
    { title: "Govern sound generation", description: "Keep generated effects behind access controls, budgets, approvals, and audit logs.", icon: "chart", color: colors.amber },
];

const musicApplications: ModelApplication[] = [
    { title: "Generate music concepts", description: "Create music drafts, loops, and mood options for campaign and product-review workflows.", icon: "audio", color: colors.violet },
    { title: "Create campaign soundtracks", description: "Prototype soundtrack directions for ads, launch videos, explainers, and social assets.", icon: "spark", color: colors.blue },
    { title: "Explore sonic branding", description: "Draft audio identities, motif ideas, and brand-safe music directions before production.", icon: "layers", color: colors.teal },
    { title: "Localize music moods", description: "Create region, audience, or format-specific music variants for controlled creative review.", icon: "flow", color: colors.emerald },
    { title: "Review music rights", description: "Route generated music through approval, usage, rights, and attribution checks before release.", icon: "shield", color: colors.red },
    { title: "Govern music generation", description: "Keep song generation behind budget controls, audit logs, and brand review workflows.", icon: "chart", color: colors.amber },
];

const voiceAgentApplications: ModelApplication[] = [
    { title: "Build voice agents", description: "Create governed spoken assistants for support, onboarding, sales, and internal workflows.", icon: "audio", color: colors.blue },
    { title: "Handle spoken requests", description: "Interpret audio input, preserve conversation context, and route requests into approved systems.", icon: "flow", color: colors.violet },
    { title: "Generate voice responses", description: "Return natural spoken answers with policy checks, review paths, and brand controls.", icon: "audio", color: colors.teal },
    { title: "Prototype voice UX", description: "Test voice tone, turn-taking, escalation points, and multimodal assistant behavior.", icon: "spark", color: colors.cyan },
    { title: "Localize voice interactions", description: "Adapt spoken assistant behavior for regions, languages, and accessibility needs.", icon: "layers", color: colors.emerald },
    { title: "Govern audio conversations", description: "Apply retention, consent, audit, and access controls to spoken interaction data.", icon: "shield", color: colors.red },
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

const codeRetrievalApplications: ModelApplication[] = [
    { title: "Search codebases", description: "Embed repositories, snippets, and technical docs so developers can find relevant implementation context.", icon: "code", color: colors.blue },
    { title: "Power coding assistants", description: "Retrieve related files, APIs, examples, and dependency context for governed developer workflows.", icon: "layers", color: colors.violet },
    { title: "Index repositories", description: "Create searchable vectors for source files, documentation, issues, and engineering knowledge bases.", icon: "search", color: colors.teal },
    { title: "Deduplicate code knowledge", description: "Cluster similar snippets, docs, tickets, and examples for cleaner engineering support systems.", icon: "flow", color: colors.emerald },
    { title: "Rank technical evidence", description: "Surface relevant code, logs, docs, and tickets during incident and compliance reviews.", icon: "shield", color: colors.red },
    { title: "Measure code similarity", description: "Compare snippets, repositories, and technical records for recommendations or migration planning.", icon: "chart", color: colors.amber },
];

const safetyApplications: ModelApplication[] = [
    { title: "Classify content safety", description: "Evaluate prompts, responses, and user-generated content against policy categories before release.", icon: "shield", color: colors.red },
    { title: "Moderate prompts and outputs", description: "Route risky requests, policy violations, and unsafe responses into review or block workflows.", icon: "flow", color: colors.violet },
    { title: "Build policy filters", description: "Create structured safety checks for chat, support, community, and content production systems.", icon: "layers", color: colors.blue },
    { title: "Review risky requests", description: "Flag sensitive user inputs for human review, escalation, or stricter response handling.", icon: "search", color: colors.amber },
    { title: "Audit safety decisions", description: "Store classifications, policy labels, and review outcomes for compliance and quality analysis.", icon: "chart", color: colors.emerald },
    { title: "Route escalations", description: "Send high-risk conversations and uncertain classifications to the right moderation or trust team.", icon: "shield", color: colors.rose },
];

const creativeApplications: ModelApplication[] = [
    { title: "Draft creative writing", description: "Generate fiction, narrative scenes, long-form prose, and exploratory writing variants.", icon: "spark", color: colors.violet },
    { title: "Develop character dialogue", description: "Create character voices, roleplay turns, scene beats, and conversational drafts for review.", icon: "doc", color: colors.blue },
    { title: "Prototype story variants", description: "Compare plot directions, tone options, pacing changes, and alternate endings before production.", icon: "layers", color: colors.teal },
    { title: "Review tone and style", description: "Evaluate drafts for voice, audience fit, emotional intent, and brand or safety constraints.", icon: "search", color: colors.amber },
    { title: "Generate campaign concepts", description: "Turn creative briefs into hooks, concepts, scripts, taglines, and message variants.", icon: "slides", color: colors.cyan },
    { title: "Evaluate chatbot personas", description: "Test persona behavior, dialogue consistency, scenario handling, and roleplay boundaries.", icon: "flow", color: colors.emerald },
];

const searchApplications: ModelApplication[] = [
    { title: "Research live topics", description: "Answer current questions with search-grounded context, citations, and review checkpoints.", icon: "search", color: colors.blue },
    { title: "Monitor market signals", description: "Track competitor, customer, policy, and industry changes with governed research workflows.", icon: "chart", color: colors.emerald },
    { title: "Prepare sourced briefs", description: "Create sourced summaries for executives, analysts, sales teams, and compliance reviews.", icon: "doc", color: colors.violet },
    { title: "Verify claims", description: "Check factual claims against current sources before content, support, or sales teams publish.", icon: "shield", color: colors.red },
    { title: "Compare vendors", description: "Gather current product, pricing, positioning, and risk signals for procurement workflows.", icon: "layers", color: colors.amber },
    { title: "Govern web research", description: "Keep source-backed answers behind citation, retention, and approval controls.", icon: "flow", color: colors.cyan },
];

const trainingApplications: ModelApplication[] = [
    { title: "Train LoRA adapters", description: "Create style, product, person, or subject adapters from approved training datasets.", icon: "layers", color: colors.violet },
    { title: "Prepare training data", description: "Package images, captions, examples, and labels for repeatable model-training runs.", icon: "doc", color: colors.blue },
    { title: "Validate training outputs", description: "Review sample generations, quality drift, and unsafe memorization before production use.", icon: "search", color: colors.amber },
    { title: "Govern dataset access", description: "Restrict sensitive training data with access controls, retention rules, and audit logs.", icon: "shield", color: colors.red },
    { title: "Manage model variants", description: "Track trained adapters, versions, prompts, and approval status across creative workflows.", icon: "flow", color: colors.emerald },
    { title: "Estimate training cost", description: "Compare dataset size, run count, and model usage before scaling training jobs.", icon: "chart", color: colors.cyan },
];

const mediaUtilityApplications: ModelApplication[] = [
    { title: "Compose media timelines", description: "Assemble source clips, images, audio, and overlays into governed video deliverables.", icon: "video", color: colors.blue },
    { title: "Enhance video assets", description: "Upscale, clean, and prepare existing footage for campaign, training, and product workflows.", icon: "spark", color: colors.violet },
    { title: "Standardize media exports", description: "Create repeatable output formats, resolutions, and review-ready versions for teams.", icon: "flow", color: colors.teal },
    { title: "Localize video versions", description: "Adapt existing assets for markets, languages, aspect ratios, and approval paths.", icon: "layers", color: colors.emerald },
    { title: "Review media quality", description: "Check visual quality, brand fit, rights, and factual accuracy before publication.", icon: "search", color: colors.amber },
    { title: "Govern media operations", description: "Keep media processing behind budget, role access, approval, and audit controls.", icon: "shield", color: colors.red },
];

function applicationsByModality(model: ModelEntry) {
    const output = new Set(model.outputModalities ?? []);
    const text = modelText(model);
    const modelType = `${model.modelType ?? ""}`.toLowerCase();
    const modality = `${model.modality ?? ""}`.toLowerCase();
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

    if (isTranscriptionModel(model)) return transcriptionApplications;
    if (isSearchModel(model)) return searchApplications;
    if (isTrainingModel(model)) return trainingApplications;
    if (isMediaUtilityModel(model)) return mediaUtilityApplications;
    if (isVoiceAgentModel(model)) return voiceAgentApplications;
    if (isSoundEffectsModel(model)) return soundEffectsApplications;
    if (isSpeechGenerationModel(model)) return audioApplications;
    if (output.has("video") || modelType.includes("video") || modality.includes("->video")) return videoApplications;
    if (output.has("image") || modelType.includes("image") || modality.includes("->image")) return imageApplications;
    if (isMusicModel(model)) return musicApplications;
    if (isAudioGenerationModel) return audioApplications;
    if (isCodeRetrievalModel(model)) return codeRetrievalApplications;
    if (isRetrievalModel(model)) return retrievalApplications;
    if (isSafetyModel(model)) return safetyApplications;
    if (isCreativeModel(model)) return creativeApplications;

    return priorityTextApplications(model);
}

function priorityTextApplications(model: ModelEntry) {
    const bestFor = modelText(model);
    const applications = [...textApplications];

    if (hasCodingSignal(model)) {
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
