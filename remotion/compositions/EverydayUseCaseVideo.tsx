import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

type Variant = "excel" | "documents" | "reports" | "admin";

interface SceneData {
    eyebrow: string;
    title: string;
    description: string;
    prompt: string;
    resultTitle: string;
    resultLines: string[];
}

const sceneLength = 150;

const variants: Record<Variant, { label: string; title: string; subtitle: string; scenes: SceneData[]; final: string }> = {
    excel: {
        label: "Checking Excel files",
        title: "Understand spreadsheets faster",
        subtitle: "Find errors, explain formulas, clean data, and turn tables into plain-English insights.",
        final: "Spreadsheets become easier to review, explain, and share.",
        scenes: [
            {
                eyebrow: "Step 1",
                title: "Upload the sheet",
                description: "Start with the relevant table, CSV, or workbook section instead of inspecting every row manually.",
                prompt: "Review this sales sheet for errors, duplicates, missing values, and unusual numbers.",
                resultTitle: "Initial review",
                resultLines: ["3 possible duplicate customers", "2 blank region values", "One revenue outlier", "Totals need verification"],
            },
            {
                eyebrow: "Step 2",
                title: "Explain formulas",
                description: "Complex formulas become plain-English logic that non-technical teammates can understand.",
                prompt: "Explain this formula and where it could break.",
                resultTitle: "Formula explanation",
                resultLines: ["Calculates monthly gross margin", "Depends on revenue and COGS columns", "Breaks if COGS is blank", "Check division-by-zero cases"],
            },
            {
                eyebrow: "Step 3",
                title: "Summarize trends",
                description: "Rows and columns become grouped insights, outliers, and business observations.",
                prompt: "Summarize trends by month, region, and product line.",
                resultTitle: "Plain-English insights",
                resultLines: ["West region grew fastest", "March had the strongest margin", "Two products declined", "Enterprise deals drove most revenue"],
            },
            {
                eyebrow: "Step 4",
                title: "Clean messy data",
                description: "Standardize labels, dates, names, and categories before the file is shared.",
                prompt: "Clean these customer names and normalize category labels.",
                resultTitle: "Cleanup plan",
                resultLines: ["Merge Acme Inc. variants", "Standardize date format", "Normalize product categories", "Keep original values for audit"],
            },
        ],
    },
    documents: {
        label: "Analyzing documents",
        title: "Turn long files into briefings",
        subtitle: "Summarize PDFs, Word docs, contracts, and reports into key points and action items.",
        final: "Documents become clear summaries, comparisons, and next steps.",
        scenes: [
            {
                eyebrow: "Step 1",
                title: "Add the document",
                description: "Upload the PDF, Word file, report, contract, or relevant sections that need review.",
                prompt: "Summarize this report into the five most important points.",
                resultTitle: "Document summary",
                resultLines: ["Main objective identified", "3 key findings extracted", "Risks separated", "Open questions listed"],
            },
            {
                eyebrow: "Step 2",
                title: "Extract action items",
                description: "Pull out owners, deadlines, decisions, obligations, and follow-ups.",
                prompt: "Extract all action items, owners, deadlines, and unanswered questions.",
                resultTitle: "Action list",
                resultLines: ["Owner: Finance", "Deadline: May 10", "Decision: approve option B", "Question: renewal terms"],
            },
            {
                eyebrow: "Step 3",
                title: "Compare two files",
                description: "See what changed across versions or related documents without reading both line by line.",
                prompt: "Compare these two documents and show what changed.",
                resultTitle: "Comparison table",
                resultLines: ["Pricing section changed", "Renewal term added", "Scope reduced", "Missing appendix found"],
            },
            {
                eyebrow: "Step 4",
                title: "Create a briefing",
                description: "Convert dense material into a short update for leadership, clients, or project teams.",
                prompt: "Turn this document into a one-page briefing for leadership.",
                resultTitle: "Briefing draft",
                resultLines: ["Context", "Key takeaways", "Risks", "Recommended next steps"],
            },
        ],
    },
    reports: {
        label: "Reports and decks",
        title: "Structure business content",
        subtitle: "Turn notes into reports, executive summaries, PDF-ready content, and presentation outlines.",
        final: "Raw notes become polished drafts for reports, PDFs, and presentations.",
        scenes: [
            {
                eyebrow: "Step 1",
                title: "Collect rough notes",
                description: "Start with meeting notes, research points, spreadsheet findings, or a half-written draft.",
                prompt: "Turn these project notes into a structured report.",
                resultTitle: "Report outline",
                resultLines: ["Executive summary", "Current state", "Findings", "Recommendations"],
            },
            {
                eyebrow: "Step 2",
                title: "Create the summary",
                description: "Condense long drafts into concise executive summaries for decision makers.",
                prompt: "Create an executive summary under 250 words.",
                resultTitle: "Executive summary",
                resultLines: ["Decision context", "Top finding", "Business impact", "Recommended action"],
            },
            {
                eyebrow: "Step 3",
                title: "Build slide flow",
                description: "Generate slide titles, key messages, speaker notes, and a logical narrative.",
                prompt: "Build a 10-slide presentation outline from these notes.",
                resultTitle: "Slide outline",
                resultLines: ["Problem", "Evidence", "Options", "Recommendation"],
            },
            {
                eyebrow: "Step 4",
                title: "Rewrite for the audience",
                description: "Turn dense internal language into client-friendly or executive-ready wording.",
                prompt: "Rewrite this section so a client can understand it quickly.",
                resultTitle: "Client-ready draft",
                resultLines: ["Simpler language", "Clear headings", "Shorter paragraphs", "Concrete next steps"],
            },
        ],
    },
    admin: {
        label: "Daily admin tasks",
        title: "Organize messy work",
        subtitle: "Create tasks, agendas, summaries, checklists, SOPs, tables, timelines, and next steps.",
        final: "Messy notes become organized work the team can act on.",
        scenes: [
            {
                eyebrow: "Step 1",
                title: "Paste messy notes",
                description: "Start with raw ideas, call notes, meeting notes, transcript text, or process details.",
                prompt: "Turn these messy notes into a task list with owners and deadlines.",
                resultTitle: "Task list",
                resultLines: ["Owner: Maya", "Deadline: Friday", "Dependency: pricing review", "Open question: launch date"],
            },
            {
                eyebrow: "Step 2",
                title: "Plan the meeting",
                description: "Create focused agendas, prep notes, discussion questions, and expected outcomes.",
                prompt: "Create a 30-minute meeting agenda from this context.",
                resultTitle: "Agenda draft",
                resultLines: ["5 min context", "10 min blockers", "10 min decisions", "5 min next steps"],
            },
            {
                eyebrow: "Step 3",
                title: "Summarize the call",
                description: "Transform transcripts into decisions, action items, risks, and follow-ups.",
                prompt: "Summarize this transcript into decisions and action items.",
                resultTitle: "Call summary",
                resultLines: ["Decision recorded", "3 action items", "2 risks", "Follow-up email ready"],
            },
            {
                eyebrow: "Step 4",
                title: "Draft the SOP",
                description: "Convert repeated work into a checklist, SOP, table, timeline, or step-by-step process.",
                prompt: "Draft a checklist and SOP for this repeated process.",
                resultTitle: "Process draft",
                resultLines: ["Trigger", "Steps", "Quality checks", "Escalation path"],
            },
        ],
    },
};

const colors = {
    ink: "#111827",
    text: "#334155",
    muted: "#64748b",
    line: "#dbe3ef",
    soft: "#f8fafc",
    blue: "#2563eb",
    green: "#16a34a",
    greenSoft: "#dcfce7",
    slate: "#0f172a",
};

export const EverydayUseCaseVideo = ({ variant }: { variant: Variant }) => {
    const data = variants[variant];
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 58%, #eaf2ff 100%)",
                color: colors.ink,
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                overflow: "hidden",
            }}
        >
            <Background frame={frame} />
            <TopBar label={data.label} />
            {data.scenes.map((scene, index) => (
                <Scene key={scene.title} frame={frame} start={index * sceneLength} end={(index + 1) * sceneLength}>
                    {(localFrame) => <UseCaseScene frame={localFrame} scene={scene} index={index} />}
                </Scene>
            ))}
            <Scene frame={frame} start={sceneLength * 4} end={sceneLength * 5}>
                {(localFrame) => <ReviewScene frame={localFrame} title={data.title} subtitle={data.subtitle} />}
            </Scene>
            <Scene frame={frame} start={sceneLength * 5} end={sceneLength * 6}>
                {(localFrame) => <CtaScene frame={localFrame} final={data.final} />}
            </Scene>
        </AbsoluteFill>
    );
};

const Scene = ({ frame, start, end, children }: { frame: number; start: number; end: number; children: (frame: number) => React.ReactNode }) => {
    const opacity = interpolate(frame, [start, start + 16, end - 18, end], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    return <AbsoluteFill style={{ opacity }}>{children(frame - start)}</AbsoluteFill>;
};

const Background = ({ frame }: { frame: number }) => {
    const glow = interpolate(Math.sin(frame / 40), [-1, 1], [0.08, 0.18]);
    return (
        <AbsoluteFill
            style={{
                backgroundImage:
                    `radial-gradient(circle at 78% 28%, rgba(37,99,235,${glow}), transparent 28%), ` +
                    "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
                backgroundSize: "auto, 72px 72px, 72px 72px",
            }}
        />
    );
};

const TopBar = ({ label }: { label: string }) => (
    <div style={topBar}>
        <Img src={staticFile("images/remova logo (4).png")} style={{ width: 132, height: "auto", objectFit: "contain" }} />
        <div style={{ marginLeft: 24, color: colors.muted, fontSize: 24, fontWeight: 850 }}>Everyday AI use case</div>
        <div style={topPill}>{label}</div>
    </div>
);

const UseCaseScene = ({ frame, scene, index }: { frame: number; scene: SceneData; index: number }) => {
    const { fps } = useVideoConfig();
    const leftIn = spring({ frame: frame - 8, fps, config: { damping: 18, stiffness: 90 } });
    const rightIn = spring({ frame: frame - 36, fps, config: { damping: 18, stiffness: 90 } });
    const answerIn = spring({ frame: frame - 62, fps, config: { damping: 18, stiffness: 90 } });

    return (
        <AbsoluteFill>
            <div style={stage}>
                <div style={{ ...storyPanel, opacity: leftIn, transform: `translateX(${interpolate(leftIn, [0, 1], [-42, 0])}px)` }}>
                    <div style={eyebrowStyle}>{scene.eyebrow}</div>
                    <h1 style={headlineStyle}>{scene.title}</h1>
                    <p style={descriptionStyle}>{scene.description}</p>
                    <PromptBox frame={frame} text={scene.prompt} />
                </div>
                <div style={{ ...productPanel, opacity: rightIn, transform: `translateX(${interpolate(rightIn, [0, 1], [42, 0])}px)` }}>
                    <WorkspacePanel frame={frame} index={index} />
                    <div style={{ ...resultCard, opacity: answerIn, transform: `translateY(${interpolate(answerIn, [0, 1], [26, 0])}px)` }}>
                        <div style={resultHeader}>
                            <div style={assistantMark}>r</div>
                            <div>
                                <div style={{ fontSize: 24, fontWeight: 950 }}>{scene.resultTitle}</div>
                                <div style={{ color: "#94a3b8", fontSize: 17, fontWeight: 800 }}>Ready for review</div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                            {scene.resultLines.map((line, lineIndex) => (
                                <AnimatedLine key={line} frame={frame} delay={74 + lineIndex * 8} text={line} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};

const PromptBox = ({ text, frame }: { text: string; frame: number }) => {
    const charCount = Math.floor(interpolate(frame, [18, 78], [0, text.length], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    }));

    return (
        <div style={promptBox}>
            <div style={{ color: colors.muted, fontSize: 19, fontWeight: 900, marginBottom: 12 }}>Prompt</div>
            <div style={{ fontSize: 27, lineHeight: 1.32, fontWeight: 850, color: colors.text }}>
                {text.slice(0, charCount)}
                <span style={{ color: colors.blue }}>{charCount < text.length ? "|" : ""}</span>
            </div>
        </div>
    );
};

const WorkspacePanel = ({ frame, index }: { frame: number; index: number }) => {
    const labels = [
        ["Source input", "Possible issues", "Review list", "Summary"],
        ["Key points", "Action items", "Changes", "Briefing"],
        ["Notes", "Structure", "Draft", "Audience"],
        ["Raw notes", "Owners", "Timeline", "Next steps"],
    ][index] || ["Input", "Review", "Draft", "Share"];

    return (
        <div style={workspace}>
            <div style={windowHeader}>
                <div style={dot("#ef4444")} />
                <div style={dot("#f59e0b")} />
                <div style={dot("#22c55e")} />
                <div style={{ marginLeft: 16, color: colors.muted, fontWeight: 900, fontSize: 18 }}>Remova AI workspace</div>
            </div>
            <div style={{ padding: 30, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {labels.map((label, labelIndex) => (
                    <Tile key={label} frame={frame} delay={26 + labelIndex * 10} label={label} active={labelIndex === index % 4} />
                ))}
            </div>
        </div>
    );
};

const Tile = ({ frame, delay, label, active }: { frame: number; delay: number; label: string; active?: boolean }) => {
    const { fps } = useVideoConfig();
    const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 100 } });
    return (
        <div style={{ ...tile, opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [18, 0])}px)`, background: active ? "#dbeafe" : "#ffffff" }}>
            <div style={{ color: active ? colors.blue : colors.muted, fontSize: 20, fontWeight: 950, marginBottom: 18 }}>{label}</div>
            <div style={{ height: 14, borderRadius: 999, background: active ? "#93c5fd" : "#e2e8f0", width: "86%", marginBottom: 12 }} />
            <div style={{ height: 14, borderRadius: 999, background: "#eef2f7", width: "62%" }} />
        </div>
    );
};

const AnimatedLine = ({ frame, delay, text }: { frame: number; delay: number; text: string }) => {
    const { fps } = useVideoConfig();
    const progress = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 100 } });
    return (
        <div style={{ ...lineRow, opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [18, 0])}px)` }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: colors.green }} />
            <div>{text}</div>
        </div>
    );
};

const ReviewScene = ({ frame, title, subtitle }: { frame: number; title: string; subtitle: string }) => {
    const { fps } = useVideoConfig();
    const progress = spring({ frame: frame - 10, fps, config: { damping: 18, stiffness: 90 } });
    return (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div style={{ opacity: progress, transform: `translateY(${interpolate(progress, [0, 1], [32, 0])}px)` }}>
                <div style={eyebrowStyle}>Human review</div>
                <h1 style={{ ...headlineStyle, fontSize: 88, maxWidth: 1180 }}>{title}</h1>
                <p style={{ ...descriptionStyle, maxWidth: 980, margin: "34px auto 0" }}>{subtitle}</p>
                <div style={reviewGrid}>
                    {["Check facts", "Confirm numbers", "Edit tone", "Share final"].map((item, index) => (
                        <div key={item} style={reviewItem}>✓ {item}</div>
                    ))}
                </div>
            </div>
        </AbsoluteFill>
    );
};

const CtaScene = ({ frame, final }: { frame: number; final: string }) => {
    const { fps } = useVideoConfig();
    const logoIn = spring({ frame: frame - 14, fps, config: { damping: 18, stiffness: 90 } });
    const buttonIn = spring({ frame: frame - 42, fps, config: { damping: 18, stiffness: 90 } });
    return (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div style={{ opacity: logoIn, transform: `translateY(${interpolate(logoIn, [0, 1], [30, 0])}px)` }}>
                <Img src={staticFile("images/remova logo (4).png")} style={{ width: 270, height: "auto", objectFit: "contain", margin: "0 auto 36px" }} />
                <h1 style={{ margin: 0, fontSize: 84, lineHeight: 0.94, letterSpacing: 0, fontWeight: 1000 }}>Everyday AI work,<br />organized in Remova.</h1>
                <p style={{ margin: "34px auto 0", maxWidth: 920, fontSize: 32, lineHeight: 1.32, color: colors.text, fontWeight: 760 }}>{final}</p>
            </div>
            <div style={{ ...ctaButton, opacity: buttonIn, transform: `translateY(${interpolate(buttonIn, [0, 1], [24, 0])}px)` }}>Sign up for Remova</div>
        </AbsoluteFill>
    );
};

const dot = (color: string) => ({ width: 15, height: 15, borderRadius: 999, background: color });

const topBar: React.CSSProperties = {
    position: "absolute",
    top: 34,
    left: 54,
    right: 54,
    height: 74,
    borderRadius: 24,
    background: "rgba(255,255,255,0.86)",
    border: `1px solid ${colors.line}`,
    boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
    display: "flex",
    alignItems: "center",
    padding: "0 28px",
    zIndex: 20,
};

const topPill: React.CSSProperties = {
    marginLeft: "auto",
    borderRadius: 999,
    background: colors.slate,
    color: "#ffffff",
    padding: "12px 22px",
    fontSize: 22,
    fontWeight: 900,
};

const stage: React.CSSProperties = {
    position: "absolute",
    left: 84,
    right: 84,
    top: 148,
    bottom: 76,
    display: "grid",
    gridTemplateColumns: "0.78fr 1.22fr",
    gap: 44,
    alignItems: "stretch",
};

const storyPanel: React.CSSProperties = {
    borderRadius: 34,
    background: "rgba(255,255,255,0.86)",
    border: `1px solid ${colors.line}`,
    boxShadow: "0 28px 90px rgba(15,23,42,0.09)",
    padding: 46,
};

const productPanel: React.CSSProperties = {
    borderRadius: 34,
    background: "rgba(255,255,255,0.68)",
    border: `1px solid ${colors.line}`,
    boxShadow: "0 28px 90px rgba(15,23,42,0.1)",
    padding: 30,
    display: "grid",
    gridTemplateRows: "1fr auto",
    gap: 24,
};

const eyebrowStyle: React.CSSProperties = {
    color: colors.blue,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: 1000,
    fontSize: 22,
    marginBottom: 24,
};

const headlineStyle: React.CSSProperties = {
    margin: 0,
    fontSize: 72,
    lineHeight: 0.92,
    letterSpacing: 0,
    fontWeight: 1000,
};

const descriptionStyle: React.CSSProperties = {
    margin: "30px 0 0",
    color: colors.text,
    fontSize: 29,
    lineHeight: 1.34,
    fontWeight: 760,
};

const promptBox: React.CSSProperties = {
    marginTop: 42,
    borderRadius: 24,
    background: colors.soft,
    border: `1px solid ${colors.line}`,
    padding: 28,
    minHeight: 190,
};

const workspace: React.CSSProperties = {
    borderRadius: 24,
    overflow: "hidden",
    background: "#ffffff",
    border: `1px solid ${colors.line}`,
};

const windowHeader: React.CSSProperties = {
    height: 58,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 22px",
    background: "#f8fafc",
    borderBottom: `1px solid ${colors.line}`,
};

const tile: React.CSSProperties = {
    borderRadius: 20,
    border: `1px solid ${colors.line}`,
    padding: 24,
    minHeight: 160,
};

const resultCard: React.CSSProperties = {
    borderRadius: 24,
    background: colors.slate,
    color: "#ffffff",
    padding: 28,
    boxShadow: "0 24px 70px rgba(15,23,42,0.28)",
};

const resultHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 18,
};

const assistantMark: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 16,
    background: "#ffffff",
    color: colors.slate,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: 1000,
};

const lineRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 14,
    borderRadius: 16,
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.14)",
    padding: "14px 16px",
    color: "inherit",
    fontSize: 22,
    fontWeight: 850,
};

const reviewGrid: React.CSSProperties = {
    margin: "46px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 18,
    maxWidth: 980,
};

const reviewItem: React.CSSProperties = {
    borderRadius: 20,
    background: colors.greenSoft,
    color: colors.green,
    padding: "22px 18px",
    fontSize: 25,
    fontWeight: 1000,
};

const ctaButton: React.CSSProperties = {
    marginTop: 54,
    borderRadius: 999,
    background: colors.slate,
    color: "#ffffff",
    padding: "24px 42px",
    fontSize: 30,
    fontWeight: 1000,
    boxShadow: "0 24px 70px rgba(15,23,42,0.22)",
};
