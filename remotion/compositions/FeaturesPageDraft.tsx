import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

const sceneFrames = 150;

const colors = {
    ink: "#111827",
    text: "#1f2937",
    muted: "#64748b",
    faint: "#f5f7fb",
    line: "#dbe3ef",
    card: "#1f2020",
    cardMuted: "#8f949b",
    blue: "#3b82f6",
    blueSoft: "#eaf5ff",
    green: "#22c55e",
};

export const FeaturesPageDraft = () => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill
            style={{
                background: "#ffffff",
                color: colors.ink,
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                overflow: "hidden",
            }}
        >
            <ProductChrome frame={frame} />
            <Scene start={0} end={sceneFrames} frame={frame}>
                {(localFrame) => <PresetScene frame={localFrame} />}
            </Scene>
            <Scene start={sceneFrames} end={sceneFrames * 2} frame={frame}>
                {(localFrame) => <PolicyScene frame={localFrame} />}
            </Scene>
            <Scene start={sceneFrames * 2} end={sceneFrames * 3} frame={frame}>
                {(localFrame) => <AnalyticsScene frame={localFrame} />}
            </Scene>
            <Scene start={sceneFrames * 3} end={sceneFrames * 4} frame={frame}>
                {(localFrame) => <RoutingScene frame={localFrame} />}
            </Scene>
            <Scene start={sceneFrames * 4} end={sceneFrames * 5} frame={frame}>
                {(localFrame) => <AuditScene frame={localFrame} />}
            </Scene>
            <Scene start={sceneFrames * 5} end={sceneFrames * 6} frame={frame}>
                {(localFrame) => <CtaScene frame={localFrame} />}
            </Scene>
        </AbsoluteFill>
    );
};

const Scene = ({
    start,
    end,
    frame,
    children,
}: {
    start: number;
    end: number;
    frame: number;
    children: (localFrame: number) => React.ReactNode;
}) => {
    const opacity = interpolate(frame, [start, start + 18, end - 18, end], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return <AbsoluteFill style={{ opacity }}>{children(frame - start)}</AbsoluteFill>;
};

const ProductChrome = ({ frame }: { frame: number }) => {
    const shimmer = interpolate(Math.sin(frame / 42), [-1, 1], [0.12, 0.22]);

    return (
        <AbsoluteFill>
            <div style={topBar}>
                <Img src={staticFile("images/remova logo (4).png")} style={{ width: 105, height: "auto", objectFit: "contain" }} />
                <div style={modePill}>Chat⌄</div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 22, color: "#47617e" }}>
                    <MoonIcon />
                    <UserIcon />
                </div>
            </div>
            <div style={sideRail}>
                <div style={{ ...railIcon, marginTop: 98 }}>☰</div>
                <div style={{ ...railIcon, marginTop: 44, background: "#f0f4f8", fontSize: 34 }}>+</div>
            </div>
            <div style={tabBar}>
                <div style={activeTab}>New Conversation <span style={{ marginLeft: 18 }}>×</span></div>
                <div style={plusTab}>+</div>
            </div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 80% 24%, rgba(59,130,246,${shimmer}), transparent 32%)`,
                    pointerEvents: "none",
                }}
            />
        </AbsoluteFill>
    );
};

const PresetScene = ({ frame }: { frame: number }) => {
    return <NativeChatScene frame={frame} prompt="Set up safe AI workspaces for Marketing, Finance, and Legal." title="Done. I created governed workspaces for each team." body="Each workspace gets approved prompts, model access, and policy rules before anyone starts chatting." visual="workspaces" composer="Create governed AI workspaces for each department" />;
};

const PolicyScene = ({ frame }: { frame: number }) => {
    return <NativeChatScene frame={frame} prompt="Can I send this vendor contract to AI for review?" title="Yes. I checked it before routing the request." body="Sensitive data is redacted, role access is approved, budget is in range, and the event is logged." visual="policy" composer="Review this vendor agreement safely" />;
};

const AnalyticsScene = ({ frame }: { frame: number }) => {
    return <NativeChatScene frame={frame} prompt="Show me AI spend, usage, and policy risk this month." title="Here is the workspace health snapshot." body="Spend is controlled, policy pass rate is high, and protected requests are trending up across departments." visual="analytics" composer="Show policy events and model spend by department" />;
};

const RoutingScene = ({ frame }: { frame: number }) => {
    return <NativeChatScene frame={frame} prompt="Pick the safest model for a sensitive legal question." title="I selected a reasoning model with redaction enabled." body="Routine tasks stay fast, legal review gets deeper reasoning, and sensitive prompts require approval." visual="routing" composer="Choose the safest model route for this request" />;
};

const AuditScene = ({ frame }: { frame: number }) => {
    return <NativeChatScene frame={frame} prompt="What models can this workspace use?" title="This workspace has access to 300+ models." body="Research, coding, image, video, and automation models are available only through your rules." visual="models" composer="Give this workspace access to approved frontier models" />;
};

const CtaScene = ({ frame }: { frame: number }) => {
    return <NativeChatScene frame={frame} prompt="Can my team use AI without storing prompts or memory?" title="Yes. Zero data retention, no history, no memory." body="Use AI safely in Remova without keeping prompts, responses, or workspace context after the job is done." visual="privacy" composer="Use AI with zero retention, no history, and no memory" cta />;
};

const NativeChatScene = ({
    frame,
    prompt,
    title,
    body,
    visual,
    composer,
    cta,
}: {
    frame: number;
    prompt: string;
    title: string;
    body: string;
    visual: "workspaces" | "policy" | "analytics" | "routing" | "models" | "privacy";
    composer: string;
    cta?: boolean;
}) => {
    const { fps } = useVideoConfig();
    const promptIn = spring({ frame: frame - 8, fps, config: { damping: 18, stiffness: 86 } });
    const answerIn = spring({ frame: frame - 38, fps, config: { damping: 18, stiffness: 86 } });
    const visualIn = spring({ frame: frame - 68, fps, config: { damping: 18, stiffness: 86 } });

    return (
        <>
            <div style={chatStage}>
                <div
                    style={{
                        ...userBubble,
                        opacity: promptIn,
                        transform: `translateY(${interpolate(promptIn, [0, 1], [26, 0])}px)`,
                    }}
                >
                    {prompt}
                </div>
                <div
                    style={{
                        ...assistantBubble,
                        opacity: answerIn,
                        transform: `translateY(${interpolate(answerIn, [0, 1], [30, 0])}px)`,
                    }}
                >
                    <div style={assistantAvatar}>r</div>
                    <div style={{ flex: 1 }}>
                        <div style={chatAnswerTitle}>{title}</div>
                        <div style={chatAnswerBody}>{body}</div>
                    </div>
                </div>
                <div
                    style={{
                        ...chatVisualCard,
                        opacity: visualIn,
                        transform: `translateY(${interpolate(visualIn, [0, 1], [34, 0])}px) scale(${interpolate(visualIn, [0, 1], [0.98, 1])})`,
                    }}
                >
                    <ChatVisual type={visual} frame={frame} />
                    {cta ? (
                        <div style={nativeCtaRow}>
                            <div style={nativeCtaButton}>Sign up for Remova</div>
                            <div style={{ color: colors.muted, fontWeight: 850 }}>remova.org</div>
                        </div>
                    ) : null}
                </div>
            </div>
            <Composer text={composer} highlight={frame > 96} />
        </>
    );
};

const ChatVisual = ({ type, frame }: { type: "workspaces" | "policy" | "analytics" | "routing" | "models" | "privacy"; frame: number }) => {
    if (type === "workspaces") {
        return (
            <div style={nativeGrid}>
                {["Marketing", "Finance", "Legal"].map((name, index) => (
                    <NativeWorkspaceCard key={name} frame={frame} delay={index * 12} name={name} />
                ))}
            </div>
        );
    }

    if (type === "policy") {
        return (
            <div style={{ display: "grid", gap: 14 }}>
                {["Sensitive data redacted", "Role access approved", "Budget in range", "Audit event logged"].map((label, index) => (
                    <NativeCheck key={label} frame={frame} delay={index * 10} label={label} />
                ))}
            </div>
        );
    }

    if (type === "analytics") {
        return <NativeChart frame={frame} />;
    }

    if (type === "routing") {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <NativeRoute frame={frame} delay={0} label="Routine chat" value="Fast" />
                <NativeRoute frame={frame} delay={12} label="Legal review" value="Reasoning" active />
                <NativeRoute frame={frame} delay={24} label="Sensitive prompt" value="Redact" />
            </div>
        );
    }

    if (type === "models") {
        return (
            <div style={modelAccessWrap}>
                <div style={modelCount}>300+</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
                    {["Research", "Code", "Image", "Video"].map((label, index) => (
                        <NativeModelPill key={label} frame={frame} delay={index * 10} label={label} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div style={privacyPanel}>
            <ShieldSvg />
            <div style={{ display: "grid", gap: 12, flex: 1 }}>
                {["Zero data retention", "No chat history", "No memory"].map((label, index) => (
                    <NativeCheck key={label} frame={frame} delay={index * 12} label={label} />
                ))}
            </div>
        </div>
    );
};

const NativeWorkspaceCard = ({ frame, delay, name }: { frame: number; delay: number; name: string }) => {
    const { fps } = useVideoConfig();
    const cardIn = spring({ frame: frame - 76 - delay, fps, config: { damping: 18, stiffness: 90 } });
    return (
        <div style={{ ...nativeWorkspaceCard, opacity: cardIn, transform: `translateY(${interpolate(cardIn, [0, 1], [20, 0])}px)` }}>
            <MiniWorkspaceSvg />
            <div style={{ fontSize: 22, fontWeight: 950 }}>{name}</div>
            <div style={nativeMiniText}>Policy governed</div>
        </div>
    );
};

const NativeCheck = ({ frame, delay, label }: { frame: number; delay: number; label: string }) => {
    const active = frame > 82 + delay;
    return (
        <div style={nativeCheckRow}>
            <span style={{ ...checkDot, background: active ? colors.green : "#d8dee8" }}>{active ? "✓" : ""}</span>
            <span style={{ flex: 1 }}>{label}</span>
            <span style={{ color: active ? colors.green : colors.muted }}>{active ? "Complete" : "Checking"}</span>
        </div>
    );
};

const NativeChart = ({ frame }: { frame: number }) => {
    const bars = [42, 76, 58, 88, 64, 92, 70];
    const { fps } = useVideoConfig();
    return (
        <div style={nativeChartWrap}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                <Metric value="$12.4K" label="Spend" />
                <Metric value="98.7%" label="Pass rate" />
                <Metric value="1,284" label="Protected" />
            </div>
            <div style={{ ...barWrap, height: 170, marginTop: 22 }}>
                {bars.map((height, index) => {
                    const barIn = spring({ frame: frame - 76 - index * 7, fps, config: { damping: 18, stiffness: 90 } });
                    return (
                        <div key={height + index} style={barColumn}>
                            <div style={{ ...bar, height: `${interpolate(barIn, [0, 1], [8, height])}%` }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const NativeRoute = ({ frame, delay, label, value, active }: { frame: number; delay: number; label: string; value: string; active?: boolean }) => {
    const { fps } = useVideoConfig();
    const routeIn = spring({ frame: frame - 76 - delay, fps, config: { damping: 18, stiffness: 90 } });
    return (
        <div style={{ ...nativeRouteCard, opacity: routeIn, borderColor: active ? colors.blue : colors.line, background: active ? "#f8fbff" : "#fff" }}>
            <RouteSvg active={active} />
            <div style={{ fontSize: 20, fontWeight: 950 }}>{label}</div>
            <div style={{ ...statusPill, marginTop: 12, color: active ? "#1d4ed8" : colors.muted, background: active ? "#eaf5ff" : "#f4f7fb" }}>{value}</div>
        </div>
    );
};

const NativeModelPill = ({ frame, delay, label }: { frame: number; delay: number; label: string }) => {
    const { fps } = useVideoConfig();
    const itemIn = spring({ frame: frame - 78 - delay, fps, config: { damping: 18, stiffness: 90 } });
    return (
        <div style={{ ...nativeModelPill, opacity: itemIn, transform: `scale(${interpolate(itemIn, [0, 1], [0.96, 1])})` }}>
            <SparkSvg />
            <span>{label}</span>
            <span style={{ marginLeft: "auto", color: "#1d4ed8" }}>Allowed</span>
        </div>
    );
};

const RouteCard = ({
    frame,
    delay,
    title,
    model,
    active,
}: {
    frame: number;
    delay: number;
    title: string;
    model: string;
    active?: boolean;
}) => {
    const { fps } = useVideoConfig();
    const cardIn = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 88 } });

    return (
        <div
            style={{
                ...routeCard,
                opacity: cardIn,
                transform: `translateY(${interpolate(cardIn, [0, 1], [28, 0])}px)`,
                borderColor: active ? "#60a5fa" : colors.line,
                background: active ? "#f8fbff" : "#fff",
            }}
        >
            <div style={routeIcon}>↳</div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: 22, fontWeight: 950 }}>{title}</div>
                <div style={{ marginTop: 8, color: colors.muted, fontSize: 17, fontWeight: 750 }}>{model}</div>
            </div>
            <div style={{ ...statusPill, background: active ? "#eaf5ff" : "#f4f7fb", color: active ? "#1d4ed8" : colors.muted }}>
                {active ? "Selected" : "Available"}
            </div>
        </div>
    );
};

const CenterStage = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            position: "absolute",
            left: 84,
            right: 0,
            top: 126,
            bottom: 118,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 78,
            padding: "0 120px",
        }}
    >
        {children}
    </div>
);

const PresetCanvas = ({ frame }: { frame: number }) => {
    const { fps } = useVideoConfig();
    const cards = [
        { title: "Create New Workspace", ghost: true },
        { title: "Marketing", icon: "▧", active: frame > 174 },
        { title: "Finance", icon: "▱" },
        { title: "Legal Review", icon: "▱" },
    ];

    return (
        <div style={{ width: 650 }}>
            <div style={tabs}>
                <span style={{ color: "#111", background: "#fff" }}>Personal <small style={count}>3</small></span>
                <span>Department</span>
                <span>Organization <small style={count}>3</small></span>
                <span>System <small style={count}>14</small></span>
            </div>
            <div style={presetGrid}>
                {cards.map((card, index) => {
                    const cardIn = spring({ frame: frame - 34 - index * 8, fps, config: { damping: 18, stiffness: 88 } });
                    return (
                        <div
                            key={card.title}
                            style={{
                                ...(card.ghost ? ghostCard : presetCard),
                                opacity: cardIn,
                                transform: `translateY(${interpolate(cardIn, [0, 1], [28, 0])}px)`,
                                outline: card.active ? `5px solid ${colors.blue}` : "0 solid transparent",
                            }}
                        >
                            {card.ghost ? (
                                <>
                                    <div style={plusCircle}>+</div>
                                    <div style={{ color: colors.muted, fontWeight: 650, fontSize: 19 }}>Create New Workspace</div>
                                </>
                            ) : (
                                <>
                                    <div style={presetIcon}>{card.icon}</div>
                                    <div style={{ fontSize: 19, fontWeight: 850, color: "#f8fafc" }}>{card.title}</div>
                                    <div style={cardRule} />
                                    <div style={{ color: colors.cardMuted, fontSize: 13, fontWeight: 750 }}>POLICY-GOVERNED...</div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CheckRow = ({ frame, index, label, value }: { frame: number; index: number; label: string; value: string }) => {
    const active = frame > 68 + index * 38;
    return (
        <div style={checkRow}>
            <span style={{ ...checkDot, background: active ? colors.green : "#d8dee8" }}>{active ? "✓" : ""}</span>
            <span style={{ flex: 1 }}>{label}</span>
            <span style={{ color: active ? colors.green : colors.muted }}>{value}</span>
        </div>
    );
};

const Metric = ({ value, label }: { value: string; label: string }) => (
    <div style={metric}>
        <div style={{ fontSize: 46, lineHeight: 1, fontWeight: 950 }}>{value}</div>
        <div style={{ marginTop: 12, fontSize: 18, fontWeight: 750, color: colors.muted }}>{label}</div>
    </div>
);

const Composer = ({ text, highlight }: { text: string; highlight?: boolean }) => (
    <div style={{ ...composer, boxShadow: highlight ? "0 0 0 4px rgba(59,130,246,0.14), 0 18px 45px rgba(15,23,42,0.12)" : composer.boxShadow }}>
        <span style={{ fontSize: 30, color: "#637895" }}>▧</span>
        <span style={{ flex: 1 }}>{text}</span>
        <span style={composerIcon}>⌕</span>
        <span style={composerIcon}>↗</span>
        <span style={{ ...composerIcon, background: "#e8f2ff", color: "#1d4ed8" }}>✣</span>
    </div>
);

const Cursor = ({ x, y, clicked }: { x: number; y: number; clicked?: boolean }) => (
    <div
        style={{
            position: "absolute",
            left: x,
            top: y,
            width: 34,
            height: 34,
            transform: `scale(${clicked ? 0.82 : 1}) rotate(-18deg)`,
            filter: "drop-shadow(0 8px 12px rgba(15,23,42,0.25))",
        }}
    >
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M7 5L34 24L21 27L15 39L7 5Z" fill="#111827" stroke="#ffffff" strokeWidth="3" />
        </svg>
    </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => <div style={eyebrow}>{children}</div>;
const Headline = ({ children }: { children: React.ReactNode }) => <h1 style={headline}>{children}</h1>;
const Subcopy = ({ children }: { children: React.ReactNode }) => <p style={subcopy}>{children}</p>;

const chatStage: React.CSSProperties = {
    position: "absolute",
    left: 220,
    right: 190,
    top: 172,
    bottom: 138,
    display: "flex",
    flexDirection: "column",
    gap: 22,
};

const userBubble: React.CSSProperties = {
    alignSelf: "flex-end",
    maxWidth: 720,
    borderRadius: "24px 24px 8px 24px",
    background: "#111827",
    color: "#fff",
    padding: "24px 28px",
    fontSize: 27,
    lineHeight: 1.2,
    fontWeight: 760,
    boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
};

const assistantBubble: React.CSSProperties = {
    alignSelf: "flex-start",
    width: 940,
    borderRadius: "24px 24px 24px 8px",
    border: `1px solid ${colors.line}`,
    background: "rgba(255,255,255,0.96)",
    padding: 26,
    display: "flex",
    gap: 18,
    boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
};

const assistantAvatar: React.CSSProperties = {
    width: 46,
    height: 46,
    borderRadius: 14,
    background: "#111827",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    lineHeight: 1,
    fontWeight: 950,
};

const chatAnswerTitle: React.CSSProperties = {
    fontSize: 31,
    lineHeight: 1.08,
    fontWeight: 950,
    color: colors.ink,
};

const chatAnswerBody: React.CSSProperties = {
    marginTop: 10,
    color: colors.muted,
    fontSize: 22,
    lineHeight: 1.25,
    fontWeight: 670,
};

const chatVisualCard: React.CSSProperties = {
    alignSelf: "flex-start",
    width: 940,
    minHeight: 300,
    borderRadius: 28,
    border: `1px solid ${colors.line}`,
    background: "#fff",
    padding: 28,
    boxShadow: "0 28px 80px rgba(15,23,42,0.12)",
};

const nativeGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
};

const nativeWorkspaceCard: React.CSSProperties = {
    borderRadius: 22,
    border: `1px solid ${colors.line}`,
    background: "#fbfdff",
    padding: 24,
    minHeight: 245,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    justifyContent: "center",
};

const nativeMiniText: React.CSSProperties = {
    color: colors.muted,
    fontSize: 17,
    fontWeight: 750,
};

const nativeCheckRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
    border: `1px solid ${colors.line}`,
    borderRadius: 18,
    padding: "18px 20px",
    fontSize: 21,
    fontWeight: 850,
};

const nativeChartWrap: React.CSSProperties = {
    display: "grid",
    gap: 8,
};

const nativeRouteCard: React.CSSProperties = {
    minHeight: 250,
    borderRadius: 22,
    border: `2px solid ${colors.line}`,
    background: "#fff",
    padding: 22,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
};

const modelAccessWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 28,
};

const modelCount: React.CSSProperties = {
    width: 250,
    height: 250,
    borderRadius: 36,
    background: "linear-gradient(135deg, #111827, #1d4ed8)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 76,
    fontWeight: 950,
    boxShadow: "0 28px 55px rgba(29,78,216,0.22)",
};

const nativeModelPill: React.CSSProperties = {
    minHeight: 104,
    borderRadius: 20,
    border: `1px solid ${colors.line}`,
    background: "#fbfdff",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    gap: 13,
    fontSize: 20,
    fontWeight: 900,
};

const privacyPanel: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 30,
};

const nativeCtaRow: React.CSSProperties = {
    marginTop: 24,
    borderTop: `1px solid ${colors.line}`,
    paddingTop: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};

const nativeCtaButton: React.CSSProperties = {
    height: 58,
    padding: "0 28px",
    borderRadius: 999,
    background: "#111827",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 950,
};

const topBar: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 66,
    borderBottom: `1px solid ${colors.line}`,
    display: "flex",
    alignItems: "center",
    gap: 30,
    padding: "0 24px",
    background: "rgba(255,255,255,0.96)",
};

const modePill: React.CSSProperties = {
    border: `1px solid ${colors.line}`,
    borderRadius: 10,
    padding: "10px 18px",
    background: "#f8fafc",
    fontSize: 17,
    color: "#0f2d4c",
    fontWeight: 650,
};

const sideRail: React.CSSProperties = {
    position: "absolute",
    top: 66,
    left: 0,
    bottom: 0,
    width: 84,
    borderRight: `1px solid ${colors.line}`,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const railIcon: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#526985",
    fontSize: 27,
};

const tabBar: React.CSSProperties = {
    position: "absolute",
    left: 84,
    right: 0,
    top: 66,
    height: 58,
    borderBottom: `1px solid ${colors.line}`,
    display: "flex",
    alignItems: "center",
    gap: 8,
    paddingLeft: 14,
};

const activeTab: React.CSSProperties = {
    border: `1px solid #76c5ff`,
    background: "#eef8ff",
    color: "#0f2d4c",
    borderRadius: 13,
    padding: "10px 16px",
    fontSize: 17,
    fontWeight: 650,
};

const plusTab: React.CSSProperties = {
    width: 38,
    height: 38,
    border: `1px solid #a9b7c9`,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    color: "#526985",
};

const eyebrow: React.CSSProperties = {
    color: colors.blue,
    fontSize: 22,
    fontWeight: 900,
    letterSpacing: 0,
    textTransform: "uppercase",
    marginBottom: 18,
};

const headline: React.CSSProperties = {
    margin: 0,
    width: 640,
    fontSize: 76,
    lineHeight: 0.92,
    fontWeight: 950,
    letterSpacing: 0,
};

const finalHeadline: React.CSSProperties = {
    margin: "0 auto 30px",
    maxWidth: 1120,
    fontSize: 94,
    lineHeight: 0.92,
    fontWeight: 950,
    letterSpacing: 0,
};

const subcopy: React.CSSProperties = {
    margin: "28px 0 0",
    width: 620,
    color: colors.muted,
    fontSize: 28,
    lineHeight: 1.18,
    fontWeight: 650,
};

const tabs: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 34,
};

const count: React.CSSProperties = {
    background: "#dfe3e8",
    color: "#111",
    borderRadius: 999,
    padding: "2px 7px",
    marginLeft: 9,
};

const presetGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 18,
};

const ghostCard: React.CSSProperties = {
    height: 150,
    borderRadius: 17,
    border: "1px dashed #b9c3d3",
    background: "#fbfcff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
};

const presetCard: React.CSSProperties = {
    height: 150,
    borderRadius: 17,
    background: colors.card,
    padding: 26,
    display: "grid",
    gridTemplateColumns: "44px 1fr",
    columnGap: 14,
    alignItems: "start",
};

const plusCircle: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 999,
    background: "#e6ebf2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontSize: 32,
};

const presetIcon: React.CSSProperties = {
    width: 38,
    height: 38,
    borderRadius: 11,
    background: "#303232",
    color: "#a9b0b8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 21,
};

const cardRule: React.CSSProperties = {
    gridColumn: "1 / -1",
    height: 1,
    background: "#333737",
    margin: "22px 0 0",
};

const policyPanel: React.CSSProperties = {
    width: 710,
    borderRadius: 28,
    border: `1px solid ${colors.line}`,
    background: "#fff",
    boxShadow: "0 28px 80px rgba(15,23,42,0.12)",
    padding: 28,
};

const panelHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 25,
    fontWeight: 900,
    marginBottom: 22,
};

const statusPill: React.CSSProperties = {
    background: "#eafbf1",
    color: "#15803d",
    padding: "8px 14px",
    borderRadius: 999,
    fontSize: 16,
    fontWeight: 850,
};

const promptPreview: React.CSSProperties = {
    background: "#f8fafc",
    border: `1px solid ${colors.line}`,
    borderRadius: 18,
    padding: 22,
    color: colors.text,
    fontSize: 22,
    lineHeight: 1.28,
    fontWeight: 650,
    marginBottom: 24,
};

const checkRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
    border: `1px solid ${colors.line}`,
    borderRadius: 16,
    padding: "15px 18px",
    fontSize: 20,
    fontWeight: 800,
};

const checkDot: React.CSSProperties = {
    width: 28,
    height: 28,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 17,
    fontWeight: 900,
};

const dashboard: React.CSSProperties = {
    width: 760,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
};

const metric: React.CSSProperties = {
    border: `1px solid ${colors.line}`,
    borderRadius: 24,
    background: "#fff",
    padding: 28,
    boxShadow: "0 18px 48px rgba(15,23,42,0.08)",
};

const chartCard: React.CSSProperties = {
    gridColumn: "1 / -1",
    height: 310,
    border: `1px solid ${colors.line}`,
    borderRadius: 26,
    background: "#fff",
    padding: 28,
    boxShadow: "0 18px 48px rgba(15,23,42,0.08)",
};

const routingPanel: React.CSSProperties = {
    width: 720,
    borderRadius: 28,
    border: `1px solid ${colors.line}`,
    background: "#fff",
    boxShadow: "0 28px 80px rgba(15,23,42,0.12)",
    padding: 28,
    display: "grid",
    gap: 16,
};

const routeCard: React.CSSProperties = {
    minHeight: 108,
    borderRadius: 20,
    border: `2px solid ${colors.line}`,
    padding: 18,
    display: "flex",
    alignItems: "center",
    gap: 18,
};

const routeIcon: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 16,
    background: "#edf4ff",
    color: "#1d4ed8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: 950,
};

const auditPanel: React.CSSProperties = {
    width: 760,
    borderRadius: 28,
    border: `1px solid ${colors.line}`,
    background: "#fff",
    boxShadow: "0 28px 80px rgba(15,23,42,0.12)",
    padding: 28,
};

const auditRow: React.CSSProperties = {
    borderRadius: 18,
    border: `1px solid ${colors.line}`,
    padding: 16,
    display: "flex",
    alignItems: "center",
    gap: 16,
};

const auditAvatar: React.CSSProperties = {
    width: 44,
    height: 44,
    borderRadius: 999,
    background: "#f0f4f8",
    color: "#506886",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: 950,
};

const auditStatus: React.CSSProperties = {
    borderRadius: 999,
    background: "#eef4ff",
    color: "#1d4ed8",
    padding: "8px 13px",
    fontSize: 15,
    fontWeight: 900,
};

const chartTitle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 900,
    marginBottom: 18,
};

const barWrap: React.CSSProperties = {
    height: 210,
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 18,
    alignItems: "end",
};

const barColumn: React.CSSProperties = {
    height: "100%",
    borderRadius: 999,
    background: "#eef2f7",
    display: "flex",
    alignItems: "end",
    overflow: "hidden",
};

const bar: React.CSSProperties = {
    width: "100%",
    background: "linear-gradient(180deg, #60a5fa, #1d4ed8)",
    borderRadius: 999,
};

const composer: React.CSSProperties = {
    position: "absolute",
    left: 158,
    right: 68,
    bottom: 36,
    height: 78,
    borderRadius: 34,
    border: `1px solid ${colors.line}`,
    background: "#f3f7fb",
    boxShadow: "0 14px 35px rgba(15,23,42,0.10)",
    display: "flex",
    alignItems: "center",
    gap: 22,
    padding: "0 28px",
    color: "#647895",
    fontSize: 21,
    fontWeight: 650,
};

const composerIcon: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#e9eef5",
    color: "#647895",
};

const ctaButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 46,
    height: 76,
    padding: "0 48px",
    borderRadius: 999,
    background: "#111827",
    color: "#fff",
    fontSize: 26,
    fontWeight: 950,
    boxShadow: "0 24px 60px rgba(15,23,42,0.25)",
};

const MoonIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M19 21.5A9 9 0 0 1 11.5 6a8 8 0 1 0 7.5 15.5Z" stroke="#536b89" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
);

const UserIcon = () => (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="20" fill="#f0f4f8" />
        <path d="M21 21.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12.5 31c1.7-4.4 14.3-4.4 17 0" stroke="#536b89" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
);

const MiniWorkspaceSvg = () => (
    <svg width="112" height="78" viewBox="0 0 112 78" fill="none">
        <rect x="2" y="8" width="108" height="62" rx="16" fill="#eef6ff" stroke="#bfdbfe" strokeWidth="3" />
        <rect x="18" y="23" width="30" height="10" rx="5" fill="#3b82f6" />
        <rect x="18" y="42" width="76" height="8" rx="4" fill="#cbd5e1" />
        <rect x="18" y="56" width="52" height="8" rx="4" fill="#dbeafe" />
        <circle cx="82" cy="28" r="13" fill="#111827" />
        <path d="M76 28.5 80.5 33 89 23.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const RouteSvg = ({ active }: { active?: boolean }) => (
    <svg width="78" height="78" viewBox="0 0 78 78" fill="none">
        <rect x="6" y="6" width="66" height="66" rx="22" fill={active ? "#eaf5ff" : "#f1f5f9"} />
        <path d="M24 26h13c10 0 17 7 17 17v3" stroke={active ? "#1d4ed8" : "#64748b"} strokeWidth="5" strokeLinecap="round" />
        <path d="M46 38 55 47 46 56" stroke={active ? "#1d4ed8" : "#64748b"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="26" r="6" fill={active ? "#1d4ed8" : "#94a3b8"} />
    </svg>
);

const SparkSvg = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect width="34" height="34" rx="12" fill="#eaf5ff" />
        <path d="M17 7l2.6 7.4L27 17l-7.4 2.6L17 27l-2.6-7.4L7 17l7.4-2.6L17 7Z" fill="#1d4ed8" />
    </svg>
);

const ShieldSvg = () => (
    <svg width="255" height="255" viewBox="0 0 255 255" fill="none">
        <rect width="255" height="255" rx="40" fill="#f8fbff" />
        <path d="M128 39 197 66v54c0 46-27 76-69 96-42-20-69-50-69-96V66l69-27Z" fill="#111827" />
        <path d="M101 126.5 121.5 147 158 101" stroke="#fff" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M82 205h92" stroke="#bfdbfe" strokeWidth="10" strokeLinecap="round" />
    </svg>
);
