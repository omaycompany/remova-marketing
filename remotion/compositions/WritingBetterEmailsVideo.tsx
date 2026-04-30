import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

const sceneLength = 150;

const palette = {
    ink: "#111827",
    text: "#334155",
    muted: "#64748b",
    line: "#dbe3ef",
    soft: "#f8fafc",
    panel: "#ffffff",
    blue: "#2563eb",
    blueSoft: "#dbeafe",
    green: "#16a34a",
    greenSoft: "#dcfce7",
    amber: "#f59e0b",
    slate: "#0f172a",
};

export const WritingBetterEmailsVideo = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 58%, #eaf2ff 100%)",
                color: palette.ink,
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                overflow: "hidden",
            }}
        >
            <BackgroundGrid frame={frame} />
            <TopBar />
            <Scene frame={frame} start={0} end={sceneLength}>
                {(localFrame) => (
                    <EmailWorkflowScene
                        frame={localFrame}
                        eyebrow="Step 1"
                        title="Start with rough notes"
                        description="Paste the messy version. AI turns scattered facts into a usable email structure."
                        prompt="Need to follow up with Acme. Mention proposal attached, ask for feedback by Friday, offer a 15 min call."
                        outputTitle="Context captured"
                        outputLines={["Client: Acme", "Goal: proposal follow-up", "Deadline: Friday", "Next step: offer call"]}
                        visual="notes"
                    />
                )}
            </Scene>
            <Scene frame={frame} start={sceneLength} end={sceneLength * 2}>
                {(localFrame) => (
                    <EmailWorkflowScene
                        frame={localFrame}
                        eyebrow="Step 2"
                        title="Generate the first draft"
                        description="The assistant creates a clear subject line, body, and next step without overcomplicating it."
                        prompt="Turn those notes into a concise client follow-up email."
                        outputTitle="Draft email"
                        outputLines={["Subject: Following up on the proposal", "Thanks again for the conversation.", "I attached the proposal for review.", "Could you share feedback by Friday?"]}
                        visual="draft"
                    />
                )}
            </Scene>
            <Scene frame={frame} start={sceneLength * 2} end={sceneLength * 3}>
                {(localFrame) => (
                    <EmailWorkflowScene
                        frame={localFrame}
                        eyebrow="Step 3"
                        title="Adjust the tone"
                        description="Make the message warmer, firmer, shorter, or more executive-ready in one pass."
                        prompt="Make it friendly, direct, and 30% shorter."
                        outputTitle="Rewritten version"
                        outputLines={["Hi Maya,", "I am following up on the proposal attached here.", "Could you send feedback by Friday?", "Happy to jump on a short call if useful."]}
                        visual="tone"
                    />
                )}
            </Scene>
            <Scene frame={frame} start={sceneLength * 3} end={sceneLength * 4}>
                {(localFrame) => (
                    <EmailWorkflowScene
                        frame={localFrame}
                        eyebrow="Step 4"
                        title="Summarize before replying"
                        description="Long threads become decisions, open questions, owners, and deadlines before anyone responds."
                        prompt="Summarize this thread and draft the reply."
                        outputTitle="Thread summary"
                        outputLines={["Decision: move ahead with option B", "Owner: Alex sends pricing", "Open question: start date", "Reply: confirm decision and ask for date"]}
                        visual="summary"
                    />
                )}
            </Scene>
            <Scene frame={frame} start={sceneLength * 4} end={sceneLength * 5}>
                {(localFrame) => <ReviewScene frame={localFrame} />}
            </Scene>
            <Scene frame={frame} start={sceneLength * 5} end={sceneLength * 6}>
                {(localFrame) => <CtaScene frame={localFrame} />}
            </Scene>
        </AbsoluteFill>
    );
};

const Scene = ({
    frame,
    start,
    end,
    children,
}: {
    frame: number;
    start: number;
    end: number;
    children: (localFrame: number) => React.ReactNode;
}) => {
    const opacity = interpolate(frame, [start, start + 16, end - 18, end], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return <AbsoluteFill style={{ opacity }}>{children(frame - start)}</AbsoluteFill>;
};

const TopBar = () => (
    <div
        style={{
            position: "absolute",
            top: 34,
            left: 54,
            right: 54,
            height: 74,
            borderRadius: 24,
            background: "rgba(255,255,255,0.86)",
            border: `1px solid ${palette.line}`,
            boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
            display: "flex",
            alignItems: "center",
            padding: "0 28px",
            zIndex: 20,
        }}
    >
        <Img src={staticFile("images/remova logo (4).png")} style={{ width: 132, height: "auto", objectFit: "contain" }} />
        <div style={{ marginLeft: 24, color: palette.muted, fontSize: 24, fontWeight: 850 }}>Everyday AI use case</div>
        <div
            style={{
                marginLeft: "auto",
                borderRadius: 999,
                background: palette.slate,
                color: "#ffffff",
                padding: "12px 22px",
                fontSize: 22,
                fontWeight: 900,
            }}
        >
            Writing better emails
        </div>
    </div>
);

const BackgroundGrid = ({ frame }: { frame: number }) => {
    const glow = interpolate(Math.sin(frame / 38), [-1, 1], [0.08, 0.18]);
    return (
        <AbsoluteFill
            style={{
                backgroundImage:
                    `radial-gradient(circle at 76% 30%, rgba(37,99,235,${glow}), transparent 28%), ` +
                    "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
                backgroundSize: "auto, 72px 72px, 72px 72px",
            }}
        />
    );
};

const EmailWorkflowScene = ({
    frame,
    eyebrow,
    title,
    description,
    prompt,
    outputTitle,
    outputLines,
    visual,
}: {
    frame: number;
    eyebrow: string;
    title: string;
    description: string;
    prompt: string;
    outputTitle: string;
    outputLines: string[];
    visual: "notes" | "draft" | "tone" | "summary";
}) => {
    const { fps } = useVideoConfig();
    const leftIn = spring({ frame: frame - 8, fps, config: { damping: 18, stiffness: 90 } });
    const rightIn = spring({ frame: frame - 36, fps, config: { damping: 18, stiffness: 90 } });
    const answerIn = spring({ frame: frame - 62, fps, config: { damping: 18, stiffness: 90 } });

    return (
        <AbsoluteFill>
            <div style={stage}>
                <div
                    style={{
                        ...storyPanel,
                        opacity: leftIn,
                        transform: `translateX(${interpolate(leftIn, [0, 1], [-42, 0])}px)`,
                    }}
                >
                    <div style={eyebrowStyle}>{eyebrow}</div>
                    <h1 style={headlineStyle}>{title}</h1>
                    <p style={descriptionStyle}>{description}</p>
                    <PromptBox text={prompt} frame={frame} />
                </div>
                <div
                    style={{
                        ...productPanel,
                        opacity: rightIn,
                        transform: `translateX(${interpolate(rightIn, [0, 1], [42, 0])}px)`,
                    }}
                >
                    <MailWindow visual={visual} frame={frame} />
                    <div
                        style={{
                            ...aiResultCard,
                            opacity: answerIn,
                            transform: `translateY(${interpolate(answerIn, [0, 1], [26, 0])}px)`,
                        }}
                    >
                        <div style={resultHeader}>
                            <div style={assistantMark}>r</div>
                            <div>
                                <div style={{ fontSize: 24, fontWeight: 950 }}>{outputTitle}</div>
                                <div style={{ color: palette.muted, fontSize: 17, fontWeight: 800 }}>Ready for human review</div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
                            {outputLines.map((line, index) => (
                                <AnimatedLine key={line} frame={frame} delay={74 + index * 8} text={line} />
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
            <div style={{ color: palette.muted, fontSize: 19, fontWeight: 900, marginBottom: 12 }}>Prompt</div>
            <div style={{ fontSize: 27, lineHeight: 1.32, fontWeight: 850, color: palette.text }}>
                {text.slice(0, charCount)}
                <span style={{ color: palette.blue }}>{charCount < text.length ? "|" : ""}</span>
            </div>
        </div>
    );
};

const MailWindow = ({ visual, frame }: { visual: "notes" | "draft" | "tone" | "summary"; frame: number }) => {
    const rows = visual === "notes"
        ? ["proposal attached", "feedback by Friday", "offer short call"]
        : visual === "summary"
            ? ["Re: Launch timeline", "Re: Pricing option B", "Re: Final approval"]
            : ["To: maya@acme.com", "Subject: Following up", "Message draft"];

    return (
        <div style={mailWindow}>
            <div style={mailHeader}>
                <div style={dot("#ef4444")} />
                <div style={dot("#f59e0b")} />
                <div style={dot("#22c55e")} />
                <div style={{ marginLeft: 16, color: palette.muted, fontWeight: 900, fontSize: 18 }}>Remova AI workspace</div>
            </div>
            <div style={mailBody}>
                <div style={inboxColumn}>
                    {rows.map((row, index) => (
                        <div key={row} style={{ ...inboxItem, background: index === 0 ? palette.blueSoft : "#ffffff" }}>
                            <div style={{ width: 12, height: 12, borderRadius: 999, background: index === 0 ? palette.blue : palette.line }} />
                            <div>{row}</div>
                        </div>
                    ))}
                </div>
                <div style={emailCanvas}>
                    <VisualContent visual={visual} frame={frame} />
                </div>
            </div>
        </div>
    );
};

const VisualContent = ({ visual, frame }: { visual: "notes" | "draft" | "tone" | "summary"; frame: number }) => {
    if (visual === "tone") {
        return (
            <div style={{ display: "grid", gap: 18 }}>
                <TonePill label="Friendly" active frame={frame} delay={28} />
                <TonePill label="Direct" active frame={frame} delay={40} />
                <TonePill label="Shorter" active frame={frame} delay={52} />
                <TonePill label="Too formal" frame={frame} delay={64} />
            </div>
        );
    }

    if (visual === "summary") {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {["Decision", "Owner", "Open question", "Reply"].map((label, index) => (
                    <SummaryTile key={label} label={label} frame={frame} delay={28 + index * 12} />
                ))}
            </div>
        );
    }

    const lines = visual === "notes"
        ? ["rough note", "client name", "deadline", "next step"]
        : ["subject line", "short greeting", "clear ask", "closing line"];

    return (
        <div style={{ display: "grid", gap: 18 }}>
            {lines.map((line, index) => (
                <AnimatedLine key={line} frame={frame} delay={26 + index * 10} text={line} />
            ))}
            <div style={bigCheck}>Ready to draft</div>
        </div>
    );
};

const AnimatedLine = ({ frame, delay, text }: { frame: number; delay: number; text: string }) => {
    const { fps } = useVideoConfig();
    const progress = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 100 } });

    return (
        <div
            style={{
                ...lineRow,
                opacity: progress,
                transform: `translateY(${interpolate(progress, [0, 1], [18, 0])}px)`,
            }}
        >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: palette.green }} />
            <div>{text}</div>
        </div>
    );
};

const TonePill = ({ label, active, frame, delay }: { label: string; active?: boolean; frame: number; delay: number }) => {
    const { fps } = useVideoConfig();
    const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 110 } });

    return (
        <div
            style={{
                borderRadius: 18,
                border: `2px solid ${active ? palette.blue : palette.line}`,
                background: active ? palette.blueSoft : "#ffffff",
                color: active ? palette.blue : palette.muted,
                padding: "18px 22px",
                fontSize: 25,
                fontWeight: 950,
                opacity: progress,
                transform: `scale(${interpolate(progress, [0, 1], [0.94, 1])})`,
            }}
        >
            {active ? "✓ " : ""}{label}
        </div>
    );
};

const SummaryTile = ({ label, frame, delay }: { label: string; frame: number; delay: number }) => {
    const { fps } = useVideoConfig();
    const progress = spring({ frame: frame - delay, fps, config: { damping: 16, stiffness: 100 } });

    return (
        <div
            style={{
                borderRadius: 20,
                background: "#ffffff",
                border: `1px solid ${palette.line}`,
                padding: 22,
                minHeight: 122,
                opacity: progress,
                transform: `translateY(${interpolate(progress, [0, 1], [18, 0])}px)`,
            }}
        >
            <div style={{ color: palette.blue, fontSize: 18, fontWeight: 950, marginBottom: 12 }}>{label}</div>
            <div style={{ height: 14, borderRadius: 999, background: palette.blueSoft, width: "84%", marginBottom: 10 }} />
            <div style={{ height: 14, borderRadius: 999, background: "#eef2f7", width: "64%" }} />
        </div>
    );
};

const ReviewScene = ({ frame }: { frame: number }) => {
    const { fps } = useVideoConfig();
    const cardIn = spring({ frame: frame - 10, fps, config: { damping: 18, stiffness: 90 } });
    const checkIn = spring({ frame: frame - 66, fps, config: { damping: 16, stiffness: 110 } });

    return (
        <AbsoluteFill>
            <div style={stage}>
                <div style={{ ...storyPanel, opacity: cardIn }}>
                    <div style={eyebrowStyle}>Final check</div>
                    <h1 style={headlineStyle}>Review before sending</h1>
                    <p style={descriptionStyle}>
                        AI writes the draft. The employee confirms facts, dates, names, and commitments before sending from email.
                    </p>
                    <div style={reviewChecklist}>
                        {["Names are correct", "Deadline is correct", "No missing attachment", "Tone fits the customer"].map((item, index) => (
                            <AnimatedLine key={item} frame={frame} delay={44 + index * 10} text={item} />
                        ))}
                    </div>
                </div>
                <div style={{ ...productPanel, opacity: cardIn }}>
                    <div style={finalEmail}>
                        <div style={{ color: palette.muted, fontSize: 20, fontWeight: 900, marginBottom: 18 }}>Subject</div>
                        <div style={{ fontSize: 36, fontWeight: 950, marginBottom: 30 }}>Following up on the proposal</div>
                        <div style={{ color: palette.text, fontSize: 27, lineHeight: 1.42, fontWeight: 760 }}>
                            Hi Maya,<br /><br />
                            I am following up on the proposal attached here. Could you send feedback by Friday?
                            I am happy to jump on a short call if useful.
                        </div>
                        <div
                            style={{
                                ...sendButton,
                                opacity: checkIn,
                                transform: `translateY(${interpolate(checkIn, [0, 1], [18, 0])}px)`,
                            }}
                        >
                            Approved draft
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};

const CtaScene = ({ frame }: { frame: number }) => {
    const { fps } = useVideoConfig();
    const logoIn = spring({ frame: frame - 14, fps, config: { damping: 18, stiffness: 90 } });
    const cardIn = spring({ frame: frame - 42, fps, config: { damping: 18, stiffness: 90 } });

    return (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
            <div
                style={{
                    opacity: logoIn,
                    transform: `translateY(${interpolate(logoIn, [0, 1], [30, 0])}px)`,
                    textAlign: "center",
                }}
            >
                <Img src={staticFile("images/remova logo (4).png")} style={{ width: 270, height: "auto", objectFit: "contain", margin: "0 auto 36px" }} />
                <h1 style={{ margin: 0, fontSize: 86, lineHeight: 0.94, letterSpacing: 0, fontWeight: 1000 }}>
                    Basic AI tasks,<br />done inside one workspace.
                </h1>
                <p style={{ margin: "34px auto 0", maxWidth: 880, fontSize: 32, lineHeight: 1.32, color: palette.text, fontWeight: 760 }}>
                    Draft emails, summarize threads, rewrite tone, and keep humans in control.
                </p>
            </div>
            <div
                style={{
                    ...ctaButton,
                    opacity: cardIn,
                    transform: `translateY(${interpolate(cardIn, [0, 1], [24, 0])}px)`,
                }}
            >
                Sign up for Remova
            </div>
        </AbsoluteFill>
    );
};

const dot = (color: string) => ({ width: 15, height: 15, borderRadius: 999, background: color });

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
    border: `1px solid ${palette.line}`,
    boxShadow: "0 28px 90px rgba(15,23,42,0.09)",
    padding: 46,
};

const productPanel: React.CSSProperties = {
    borderRadius: 34,
    background: "rgba(255,255,255,0.68)",
    border: `1px solid ${palette.line}`,
    boxShadow: "0 28px 90px rgba(15,23,42,0.1)",
    padding: 30,
    display: "grid",
    gridTemplateRows: "1fr auto",
    gap: 24,
};

const eyebrowStyle: React.CSSProperties = {
    color: palette.blue,
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
    color: palette.text,
    fontSize: 29,
    lineHeight: 1.34,
    fontWeight: 760,
};

const promptBox: React.CSSProperties = {
    marginTop: 42,
    borderRadius: 24,
    background: palette.soft,
    border: `1px solid ${palette.line}`,
    padding: 28,
    minHeight: 190,
};

const mailWindow: React.CSSProperties = {
    borderRadius: 24,
    overflow: "hidden",
    background: "#ffffff",
    border: `1px solid ${palette.line}`,
};

const mailHeader: React.CSSProperties = {
    height: 58,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 22px",
    background: "#f8fafc",
    borderBottom: `1px solid ${palette.line}`,
};

const mailBody: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "250px 1fr",
    minHeight: 360,
};

const inboxColumn: React.CSSProperties = {
    borderRight: `1px solid ${palette.line}`,
    padding: 18,
    display: "grid",
    gap: 12,
    alignContent: "start",
};

const inboxItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderRadius: 14,
    padding: 15,
    color: palette.text,
    fontSize: 18,
    fontWeight: 850,
};

const emailCanvas: React.CSSProperties = {
    background: "#ffffff",
    padding: 28,
};

const aiResultCard: React.CSSProperties = {
    borderRadius: 24,
    background: palette.slate,
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
    color: palette.slate,
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

const bigCheck: React.CSSProperties = {
    marginTop: 4,
    borderRadius: 18,
    background: palette.greenSoft,
    color: palette.green,
    padding: "18px 22px",
    fontSize: 25,
    fontWeight: 1000,
};

const reviewChecklist: React.CSSProperties = {
    marginTop: 42,
    display: "grid",
    gap: 14,
    color: palette.slate,
};

const finalEmail: React.CSSProperties = {
    borderRadius: 28,
    background: "#ffffff",
    border: `1px solid ${palette.line}`,
    padding: 44,
    minHeight: 620,
    position: "relative",
};

const sendButton: React.CSSProperties = {
    position: "absolute",
    left: 44,
    bottom: 44,
    borderRadius: 999,
    background: palette.green,
    color: "#ffffff",
    padding: "18px 28px",
    fontSize: 24,
    fontWeight: 1000,
};

const ctaButton: React.CSSProperties = {
    marginTop: 54,
    borderRadius: 999,
    background: palette.slate,
    color: "#ffffff",
    padding: "24px 42px",
    fontSize: 30,
    fontWeight: 1000,
    boxShadow: "0 24px 70px rgba(15,23,42,0.22)",
};
