import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

type DeepSeekV4LandingProps = {
    modelName: string;
    headline: string;
    subheadline: string;
    contextWindow: string;
    inputPrice: string;
    outputPrice: string;
};

const colors = {
    ink: "#0f172a",
    muted: "#475569",
    soft: "#dbe3ee",
    panel: "#ffffff",
    canvas: "#f8fafc",
    teal: "#14b8a6",
    emerald: "#10b981",
    blue: "#2563eb",
    violet: "#7c3aed",
    red: "#ef4444",
};

const sceneFrames = 270;

export const DeepSeekV4Landing = ({
    modelName,
    headline,
    subheadline,
    contextWindow,
    inputPrice,
    outputPrice,
}: DeepSeekV4LandingProps) => {
    const frame = useCurrentFrame();

    return (
        <AbsoluteFill
            style={{
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                background: "linear-gradient(135deg, #f8fafc 0%, #eef8f7 100%)",
                color: colors.ink,
                overflow: "hidden",
            }}
        >
            <Grid />
            <SceneLayer start={0} end={sceneFrames} frame={frame}>
                {(localFrame) => (
                    <IntroScene
                        frame={localFrame}
                        modelName={modelName}
                        headline={headline}
                        subheadline={subheadline}
                        contextWindow={contextWindow}
                        inputPrice={inputPrice}
                        outputPrice={outputPrice}
                    />
                )}
            </SceneLayer>
            <SceneLayer start={sceneFrames} end={sceneFrames * 2} frame={frame}>
                {(localFrame) => <InterfaceScene frame={localFrame} modelName={modelName} />}
            </SceneLayer>
            <SceneLayer start={sceneFrames * 2} end={sceneFrames * 3} frame={frame}>
                {(localFrame) => <ApplicationsScene frame={localFrame} modelName={modelName} />}
            </SceneLayer>
            <SceneLayer start={sceneFrames * 3} end={sceneFrames * 4} frame={frame}>
                {(localFrame) => <CtaScene frame={localFrame} modelName={modelName} />}
            </SceneLayer>
        </AbsoluteFill>
    );
};

const SceneLayer = ({
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
    const localFrame = frame - start;
    const opacity = interpolate(frame, [start, start + 18, end - 18, end], [0, 1, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill style={{ opacity, pointerEvents: "none" }}>
            {children(localFrame)}
        </AbsoluteFill>
    );
};

const IntroScene = ({
    frame,
    modelName,
    headline,
    subheadline,
    contextWindow,
    inputPrice,
    outputPrice,
}: DeepSeekV4LandingProps & { frame: number }) => {
    const { fps } = useVideoConfig();
    const intro = spring({ frame: frame + 8, fps, config: { damping: 20, stiffness: 82 } });
    const modelCard = spring({ frame: frame - 18, fps, config: { damping: 19, stiffness: 86 } });
    const routeProgress = interpolate(frame, [44, 172], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <>
            <Glow frame={frame} />
            <main style={twoColumnLayout}>
                <section style={{ opacity: intro, transform: `translateY(${interpolate(intro, [0, 1], [58, 0])}px)` }}>
                    <Pill label="MODEL LANDING VIDEO" frame={frame} />
                    <BrandLockup modelName={modelName} />
                    <h1 style={heroTitle}>{headline}</h1>
                    <p style={heroCopy}>{subheadline}</p>
                </section>
                <section
                    style={{
                        opacity: modelCard,
                        transform: `translateY(${interpolate(modelCard, [0, 1], [68, 0])}px) scale(${interpolate(modelCard, [0, 1], [0.96, 1])})`,
                    }}
                >
                    <ModelProfileCard
                        frame={frame}
                        modelName={modelName}
                        contextWindow={contextWindow}
                        inputPrice={inputPrice}
                        outputPrice={outputPrice}
                        routeProgress={routeProgress}
                    />
                </section>
            </main>
            <Footer left={`Scene 1: ${modelName} model profile`} right="remova.org/models" />
        </>
    );
};

const InterfaceScene = ({ frame, modelName }: { frame: number; modelName: string }) => {
    const { fps } = useVideoConfig();
    const intro = spring({ frame: frame + 4, fps, config: { damping: 19, stiffness: 86 } });
    const cursorX = interpolate(frame, [28, 80, 120, 166], [1110, 1288, 1288, 1400], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const cursorY = interpolate(frame, [28, 80, 120, 166], [492, 378, 378, 680], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const menuOpen = frame > 72;
    const selected = frame > 112;
    const sent = frame > 176;
    const safe = frame > 210;

    return (
        <>
            <Glow frame={frame + 90} />
            <div
                style={{
                    ...centeredLayout,
                    opacity: intro,
                    transform: `translateY(${interpolate(intro, [0, 1], [42, 0])}px)`,
                }}
            >
                <div style={browserShell}>
                    <aside style={sidebar}>
                        <Img src={staticFile("images/remova logo (4).png")} style={{ width: 190, height: "auto", marginBottom: 36 }} />
                        {["Dashboard", "Models", "Policies", "Usage", "Audit Log"].map((item) => (
                            <div
                                key={item}
                                style={{
                                    ...navItem,
                                    background: item === "Models" ? "#ecfdf5" : "transparent",
                                    color: item === "Models" ? colors.emerald : colors.muted,
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </aside>
                    <section style={appPanel}>
                        <div style={appHeader}>
                            <div>
                                <div style={eyebrow}>AI Model Router</div>
                                <h2 style={appTitle}>Select a governed model</h2>
                            </div>
                            <Badge label="Policy active" color={colors.emerald} />
                        </div>

                        <div style={composerGrid}>
                            <div style={promptCard}>
                                <div style={fieldLabel}>Employee request</div>
                                <div style={promptBox}>
                                    Summarize this vendor contract and flag risky clauses before legal review.
                                </div>
                                <div style={{ display: "grid", gap: 16 }}>
                                    <ControlRow label="Sensitive data redaction" value={safe ? "Passed" : "Checking"} active={safe} />
                                    <ControlRow label="Budget threshold" value="Within policy" active />
                                    <ControlRow label="Role access" value={selected ? "Approved" : "Pending"} active={selected} />
                                </div>
                            </div>
                            <div style={modelPickerCard}>
                                <div style={fieldLabel}>Model</div>
                                <div style={selectBox}>
                                    <span>{selected ? modelName : "Choose model"}</span>
                                    <span style={{ fontSize: 30 }}>⌄</span>
                                </div>
                                {menuOpen && (
                                    <div style={dropdown}>
                                        <DropdownItem label="GPT-5.5" sublabel="Premium reasoning" />
                                        <DropdownItem label={modelName} sublabel="1M context, governed route" selected={selected} />
                                        <DropdownItem label="DeepSeek V4 Flash" sublabel="High-throughput automation" />
                                    </div>
                                )}
                                <div style={{ marginTop: 148 }}>
                                    <button style={{ ...sendButton, opacity: selected ? 1 : 0.55 }}>
                                        {sent ? "Running safely" : "Use selected model"}
                                    </button>
                                    {sent && (
                                        <div style={safeBanner}>
                                            <span style={checkDot} />
                                            Request routed safely through Remova controls
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    <Cursor x={cursorX} y={cursorY} clicked={frame > 82 && frame < 104} />
                </div>
            </div>
            <Footer left={`Scene 2: Select ${modelName} inside Remova`} right="Policy checks before model access" />
        </>
    );
};

const ApplicationsScene = ({ frame, modelName }: { frame: number; modelName: string }) => {
    const { fps } = useVideoConfig();
    const intro = spring({ frame: frame + 8, fps, config: { damping: 18, stiffness: 82 } });
    const items = [
        { title: "Presentations", detail: "Turn research into exec-ready slide narratives", color: colors.teal, icon: "slides" },
        { title: "Code", detail: "Build, debug, test, and explain software changes", color: colors.blue, icon: "code" },
        { title: "Contracts", detail: "Summarize obligations and flag risky clauses", color: colors.violet, icon: "doc" },
        { title: "Data analysis", detail: "Explain spreadsheets, trends, and forecast drivers", color: colors.emerald, icon: "chart" },
        { title: "Market research", detail: "Synthesize competitors, customers, and positioning", color: "#f59e0b", icon: "search" },
        { title: "Workflows", detail: "Plan governed agent steps across internal tools", color: "#ef4444", icon: "flow" },
    ];

    return (
        <>
            <Glow frame={frame + 140} />
            <div
                style={{
                    ...centeredLayout,
                    flexDirection: "column",
                    opacity: intro,
                    transform: `translateY(${interpolate(intro, [0, 1], [44, 0])}px)`,
                }}
            >
                <div style={{ ...eyebrow, fontSize: 30, marginBottom: 24 }}>Real-world applications</div>
                <h2
                    style={{
                        margin: "0 auto 28px",
                        maxWidth: 1260,
                        textAlign: "center",
                        fontSize: 96,
                        lineHeight: 0.92,
                        letterSpacing: 0,
                        fontWeight: 950,
                        textTransform: "uppercase",
                    }}
                >
                    What teams can do with {modelName}
                </h2>
                <p style={{ ...heroCopy, maxWidth: 980, textAlign: "center", margin: "0 auto 48px" }}>
                    Give every department access to frontier reasoning while Remova keeps policy, budget, and audit controls in the loop.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 22,
                        width: 1360,
                    }}
                >
                    {items.map((item, index) => {
                        const itemIn = spring({
                            frame: frame - 34 - index * 9,
                            fps,
                            config: { damping: 18, stiffness: 88 },
                        });

                        return (
                            <div
                                key={item.title}
                                style={{
                                    minHeight: 188,
                                    border: `2px solid ${colors.soft}`,
                                    borderRadius: 32,
                                    background: "rgba(255,255,255,0.88)",
                                    padding: 28,
                                    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
                                    opacity: itemIn,
                                    transform: `translateY(${interpolate(itemIn, [0, 1], [34, 0])}px)`,
                                    display: "grid",
                                    gridTemplateColumns: "84px 1fr",
                                    gap: 20,
                                    alignItems: "center",
                                }}
                            >
                                <ApplicationIcon type={item.icon} color={item.color} />
                                <div>
                                    <div style={{ fontSize: 32, lineHeight: 1, fontWeight: 950, marginBottom: 10 }}>{item.title}</div>
                                    <div style={{ fontSize: 22, lineHeight: 1.18, fontWeight: 750, color: colors.muted }}>{item.detail}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer left={`Scene 3: Real-world ${modelName} applications`} right="Presentations, code, contracts, data, research, workflows" />
        </>
    );
};

const CtaScene = ({ frame, modelName }: { frame: number; modelName: string }) => {
    const { fps } = useVideoConfig();
    const intro = spring({ frame: frame + 10, fps, config: { damping: 18, stiffness: 82 } });
    const buttonIn = spring({ frame: frame - 82, fps, config: { damping: 16, stiffness: 92 } });
    const statsIn = spring({ frame: frame - 44, fps, config: { damping: 18, stiffness: 82 } });

    return (
        <>
            <Glow frame={frame + 180} />
            <div
                style={{
                    ...centeredLayout,
                    flexDirection: "column",
                    textAlign: "center",
                    opacity: intro,
                    transform: `translateY(${interpolate(intro, [0, 1], [44, 0])}px)`,
                }}
            >
                <Img src={staticFile("images/remova logo (4).png")} style={{ width: 300, height: "auto", objectFit: "contain", margin: "0 auto 42px" }} />
                <div style={{ ...eyebrow, fontSize: 31, marginBottom: 30 }}>Enterprise model access without loose ends</div>
                <h2
                    style={{
                        margin: "0 auto 40px",
                        maxWidth: 1320,
                        fontSize: 118,
                        lineHeight: 0.9,
                        letterSpacing: 0,
                        fontWeight: 950,
                        textTransform: "uppercase",
                    }}
                >
                    Use {modelName} safely on Remova
                </h2>
                <p style={{ ...heroCopy, margin: "0 auto", maxWidth: 1030 }}>
                    Give teams access to {modelName} with redaction, routing, budgets, and audit trails built in.
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 18,
                        margin: "54px auto 46px",
                        width: 1180,
                        opacity: statsIn,
                        transform: `translateY(${interpolate(statsIn, [0, 1], [30, 0])}px)`,
                    }}
                >
                    <MiniStat value="Redact" label="sensitive prompts" />
                    <MiniStat value="Route" label="approved workloads" />
                    <MiniStat value="Limit" label="team spend" />
                    <MiniStat value="Audit" label="every request" />
                </div>
                <div
                    style={{
                        opacity: buttonIn,
                        transform: `scale(${interpolate(buttonIn, [0, 1], [0.92, 1])})`,
                    }}
                >
                    <div style={ctaButton}>Sign up now</div>
                    <div style={{ marginTop: 24, fontSize: 30, fontWeight: 850, color: colors.muted }}>
                        remova.org/register
                    </div>
                </div>
            </div>
        </>
    );
};

const ApplicationIcon = ({ type, color }: { type: string; color: string }) => {
    const common = {
        width: 84,
        height: 84,
        viewBox: "0 0 84 84",
        fill: "none",
    };

    return (
        <svg {...common}>
            <rect x="4" y="4" width="76" height="76" rx="24" fill={`${color}18`} stroke={`${color}66`} strokeWidth="3" />
            {type === "slides" && (
                <>
                    <rect x="22" y="23" width="40" height="30" rx="5" stroke={color} strokeWidth="5" />
                    <path d="M31 63h22M42 53v10" stroke={color} strokeWidth="5" strokeLinecap="round" />
                    <path d="M31 33h22M31 43h14" stroke={color} strokeWidth="5" strokeLinecap="round" />
                </>
            )}
            {type === "code" && (
                <>
                    <path d="M33 29 21 42l12 13M51 29l12 13-12 13" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m46 24-8 36" stroke={color} strokeWidth="5" strokeLinecap="round" />
                </>
            )}
            {type === "doc" && (
                <>
                    <path d="M27 18h21l10 10v38H27z" stroke={color} strokeWidth="5" strokeLinejoin="round" />
                    <path d="M48 18v12h10M34 42h16M34 53h12" stroke={color} strokeWidth="5" strokeLinecap="round" />
                </>
            )}
            {type === "chart" && (
                <>
                    <path d="M23 61h39" stroke={color} strokeWidth="5" strokeLinecap="round" />
                    <rect x="28" y="43" width="8" height="18" rx="3" fill={color} />
                    <rect x="40" y="32" width="8" height="29" rx="3" fill={color} />
                    <rect x="52" y="24" width="8" height="37" rx="3" fill={color} />
                </>
            )}
            {type === "search" && (
                <>
                    <circle cx="38" cy="37" r="15" stroke={color} strokeWidth="6" />
                    <path d="m50 50 12 12" stroke={color} strokeWidth="6" strokeLinecap="round" />
                </>
            )}
            {type === "flow" && (
                <>
                    <rect x="20" y="22" width="17" height="17" rx="5" fill={color} />
                    <rect x="47" y="22" width="17" height="17" rx="5" fill={color} />
                    <rect x="34" y="50" width="17" height="17" rx="5" fill={color} />
                    <path d="M37 31h10M55 39l-9 11M29 39l10 11" stroke={color} strokeWidth="5" strokeLinecap="round" />
                </>
            )}
        </svg>
    );
};

const ModelProfileCard = ({
    frame,
    modelName,
    contextWindow,
    inputPrice,
    outputPrice,
    routeProgress,
}: {
    frame: number;
    modelName: string;
    contextWindow: string;
    inputPrice: string;
    outputPrice: string;
    routeProgress: number;
}) => {
    const checklistIn = spring({ frame: frame - 70, fps: 30, config: { damping: 18, stiffness: 78 } });

    return (
        <div style={profileCard}>
            <Sweep progress={routeProgress} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36 }}>
                <div>
                    <div style={{ fontSize: 24, fontWeight: 850, color: colors.muted, marginBottom: 10 }}>Frontier Reasoning Tier</div>
                    <div style={{ fontSize: 66, lineHeight: 0.98, fontWeight: 950 }}>{modelName}</div>
                </div>
                <Badge label="Governed" color={colors.emerald} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginBottom: 34 }}>
                <Spec label="Context" value={contextWindow} color={colors.teal} />
                <Spec label="Input" value={inputPrice} color={colors.blue} />
                <Spec label="Output" value={outputPrice} color={colors.violet} />
            </div>
            <RoutingMap progress={routeProgress} />
            <div
                style={{
                    opacity: checklistIn,
                    transform: `translateY(${interpolate(checklistIn, [0, 1], [36, 0])}px)`,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginTop: 30,
                }}
            >
                {["Policy guardrails", "Role-based routing", "Budget thresholds", "Audit-ready usage"].map((item, index) => (
                    <div
                        key={item}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                            padding: "18px 20px",
                            border: `2px solid ${colors.soft}`,
                            borderRadius: 24,
                            background: "#f8fafc",
                            fontSize: 23,
                            fontWeight: 850,
                            opacity: interpolate(frame, [78 + index * 10, 96 + index * 10], [0.25, 1], {
                                extrapolateLeft: "clamp",
                                extrapolateRight: "clamp",
                            }),
                        }}
                    >
                        <span style={{ width: 18, height: 18, borderRadius: 999, background: index % 2 === 0 ? colors.emerald : colors.teal }} />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

const RoutingMap = ({ progress }: { progress: number }) => {
    const width = interpolate(progress, [0, 1], [0, 100]);

    return (
        <div style={routingMap}>
            <div style={{ fontSize: 25, fontWeight: 900, marginBottom: 24 }}>Routing policy</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, alignItems: "center" }}>
                <Node title="Employee prompt" subtitle="Prompt + files" color={colors.blue} />
                <Node title="Remova checks" subtitle="Redact, block, route" color={colors.teal} />
                <Node title="DeepSeek V4" subtitle="Approved workload" color={colors.violet} />
            </div>
            <div style={routeTrack}>
                <div style={{ height: "100%", width: `${width}%`, borderRadius: 999, background: `linear-gradient(90deg, ${colors.blue}, ${colors.teal}, ${colors.violet})` }} />
            </div>
        </div>
    );
};

const Spec = ({ label, value, color }: { label: string; value: string; color: string }) => (
    <div style={specBox}>
        <div style={{ fontSize: 20, fontWeight: 850, color: colors.muted, marginBottom: 10 }}>{label}</div>
        <div style={{ fontSize: 27, lineHeight: 1.05, fontWeight: 950, color }}>{value}</div>
    </div>
);

const Node = ({ title, subtitle, color }: { title: string; subtitle: string; color: string }) => (
    <div style={nodeBox}>
        <div style={{ width: 22, height: 22, borderRadius: 999, background: color, marginBottom: 24, boxShadow: `0 0 0 9px ${color}22` }} />
        <div style={{ fontSize: 25, lineHeight: 1.05, fontWeight: 950, marginBottom: 8 }}>{title}</div>
        <div style={{ fontSize: 20, lineHeight: 1.15, fontWeight: 700, color: colors.muted }}>{subtitle}</div>
    </div>
);

const ControlRow = ({ label, value, active }: { label: string; value: string; active: boolean }) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", borderRadius: 22, border: `2px solid ${colors.soft}`, background: active ? "#ecfdf5" : "#f8fafc" }}>
        <span style={{ fontSize: 24, fontWeight: 850 }}>{label}</span>
        <span style={{ fontSize: 23, fontWeight: 900, color: active ? colors.emerald : colors.muted }}>{value}</span>
    </div>
);

const DropdownItem = ({ label, sublabel, selected = false }: { label: string; sublabel: string; selected?: boolean }) => (
    <div style={{ padding: 22, borderRadius: 22, background: selected ? "#ecfdf5" : "#ffffff", border: `2px solid ${selected ? "#a7f3d0" : colors.soft}`, marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontWeight: 950 }}>
            <span>{label}</span>
            {selected && <span style={{ color: colors.emerald }}>Selected</span>}
        </div>
        <div style={{ marginTop: 7, fontSize: 20, fontWeight: 750, color: colors.muted }}>{sublabel}</div>
    </div>
);

const MiniStat = ({ value, label }: { value: string; label: string }) => (
    <div style={{ padding: 28, border: `2px solid ${colors.soft}`, borderRadius: 28, background: "rgba(255,255,255,0.84)", boxShadow: "0 18px 48px rgba(15,23,42,0.08)" }}>
        <div style={{ fontSize: 41, lineHeight: 1, fontWeight: 950, color: colors.ink, marginBottom: 10 }}>{value}</div>
        <div style={{ fontSize: 21, lineHeight: 1.1, fontWeight: 800, color: colors.muted }}>{label}</div>
    </div>
);

const Cursor = ({ x, y, clicked }: { x: number; y: number; clicked: boolean }) => (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${clicked ? 0.88 : 1})`, filter: "drop-shadow(0 10px 16px rgba(15,23,42,0.24))" }}>
        <div
            style={{
                width: 0,
                height: 0,
                borderLeft: "22px solid white",
                borderTop: "17px solid transparent",
                borderBottom: "17px solid transparent",
                transform: "rotate(34deg)",
            }}
        />
        {clicked && <div style={{ position: "absolute", left: -30, top: -30, width: 86, height: 86, borderRadius: 999, border: `5px solid ${colors.teal}`, opacity: 0.55 }} />}
    </div>
);

const Pill = ({ label, frame }: { label: string; frame: number }) => {
    const pulse = interpolate(frame, [0, 90, 180, 270], [0.15, 0.72, 0.38, 0.82]);
    return (
        <div style={pill}>
            <span style={{ width: 18, height: 18, borderRadius: 999, background: colors.teal, boxShadow: `0 0 0 ${Math.round(9 + pulse * 12)}px rgba(20, 184, 166, 0.14)` }} />
            {label}
        </div>
    );
};

const BrandLockup = ({ modelName }: { modelName: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 34 }}>
        <Img src={staticFile("images/remova logo (4).png")} style={{ width: 228, height: "auto", objectFit: "contain" }} />
        <div style={{ width: 3, height: 52, background: colors.soft }} />
        <div style={{ fontSize: 31, fontWeight: 900, color: colors.muted }}>{modelName}</div>
    </div>
);

const Badge = ({ label, color }: { label: string; color: string }) => (
    <div style={{ borderRadius: 999, background: `${color}22`, color, padding: "14px 22px", fontSize: 23, fontWeight: 900, border: `2px solid ${color}55` }}>
        {label}
    </div>
);

const Sweep = ({ progress }: { progress: number }) => (
    <div style={{ position: "absolute", top: 0, bottom: 0, left: `${interpolate(progress, [0, 1], [-18, 86])}%`, width: 220, transform: "skewX(-18deg)", background: "linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.18), transparent)" }} />
);

const Glow = ({ frame }: { frame: number }) => {
    const pulse = interpolate(frame, [0, 120, 240, 360], [0.2, 0.82, 0.38, 0.72], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    return <AbsoluteFill style={{ background: `radial-gradient(circle at 74% 22%, rgba(20, 184, 166, ${pulse * 0.28}) 0, transparent 36%)` }} />;
};

const Footer = ({ left, right }: { left: string; right: string }) => (
    <div style={{ position: "absolute", left: 72, right: 72, bottom: 52, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, fontWeight: 850, color: colors.muted }}>
        <span>{left}</span>
        <span style={{ color: colors.ink }}>{right}</span>
    </div>
);

const Grid = () => (
    <AbsoluteFill
        style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.052) 2px, transparent 2px), linear-gradient(90deg, rgba(15, 23, 42, 0.052) 2px, transparent 2px)",
            backgroundSize: "96px 96px",
            maskImage: "radial-gradient(circle at 50% 35%, black 0, transparent 78%)",
        }}
    />
);

const twoColumnLayout: React.CSSProperties = {
    position: "absolute",
    inset: 72,
    display: "grid",
    gridTemplateColumns: "0.92fr 1.08fr",
    gap: 66,
    alignItems: "center",
};

const centeredLayout: React.CSSProperties = {
    position: "absolute",
    inset: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const heroTitle: React.CSSProperties = {
    margin: "0 0 34px",
    maxWidth: 820,
    fontSize: 106,
    lineHeight: 0.92,
    letterSpacing: 0,
    fontWeight: 950,
    textTransform: "uppercase",
};

const heroCopy: React.CSSProperties = {
    margin: 0,
    maxWidth: 780,
    fontSize: 38,
    lineHeight: 1.2,
    fontWeight: 650,
    color: colors.muted,
};

const profileCard: React.CSSProperties = {
    position: "relative",
    minHeight: 720,
    border: `6px solid ${colors.ink}`,
    borderRadius: 46,
    background: "rgba(255, 255, 255, 0.92)",
    boxShadow: "0 38px 100px rgba(15, 23, 42, 0.18)",
    padding: 44,
    overflow: "hidden",
};

const specBox: React.CSSProperties = {
    border: `2px solid ${colors.soft}`,
    borderRadius: 24,
    padding: 22,
    background: "#f8fafc",
};

const routingMap: React.CSSProperties = {
    position: "relative",
    borderRadius: 30,
    border: `3px solid ${colors.ink}`,
    background: "#f1f5f9",
    padding: 28,
    overflow: "hidden",
};

const routeTrack: React.CSSProperties = {
    position: "absolute",
    left: 164,
    right: 164,
    top: 126,
    height: 8,
    borderRadius: 999,
    background: "#cbd5e1",
};

const nodeBox: React.CSSProperties = {
    position: "relative",
    minHeight: 154,
    borderRadius: 28,
    border: `2px solid ${colors.soft}`,
    background: colors.panel,
    padding: 24,
    zIndex: 2,
};

const pill: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 18,
    padding: "18px 28px",
    border: `2px solid ${colors.soft}`,
    borderRadius: 999,
    background: "rgba(255, 255, 255, 0.78)",
    fontSize: 27,
    fontWeight: 850,
    marginBottom: 50,
    boxShadow: "0 16px 50px rgba(15, 23, 42, 0.07)",
};

const browserShell: React.CSSProperties = {
    position: "relative",
    width: 1650,
    height: 820,
    border: `6px solid ${colors.ink}`,
    borderRadius: 42,
    background: colors.panel,
    boxShadow: "0 38px 110px rgba(15, 23, 42, 0.18)",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "300px 1fr",
};

const sidebar: React.CSSProperties = {
    borderRight: `2px solid ${colors.soft}`,
    padding: 36,
    background: "#f8fafc",
};

const navItem: React.CSSProperties = {
    borderRadius: 20,
    padding: "18px 20px",
    fontSize: 24,
    fontWeight: 850,
    marginBottom: 10,
};

const appPanel: React.CSSProperties = {
    padding: 44,
};

const appHeader: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 34,
};

const eyebrow: React.CSSProperties = {
    fontSize: 22,
    fontWeight: 900,
    color: colors.teal,
    textTransform: "uppercase",
};

const appTitle: React.CSSProperties = {
    margin: "8px 0 0",
    fontSize: 58,
    lineHeight: 1,
    fontWeight: 950,
};

const composerGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "0.96fr 1.04fr",
    gap: 30,
};

const promptCard: React.CSSProperties = {
    border: `2px solid ${colors.soft}`,
    borderRadius: 32,
    background: "#f8fafc",
    padding: 28,
};

const modelPickerCard: React.CSSProperties = {
    position: "relative",
    border: `2px solid ${colors.soft}`,
    borderRadius: 32,
    background: "#f8fafc",
    padding: 28,
};

const fieldLabel: React.CSSProperties = {
    fontSize: 22,
    fontWeight: 900,
    color: colors.muted,
    marginBottom: 12,
};

const promptBox: React.CSSProperties = {
    minHeight: 170,
    border: `2px solid ${colors.soft}`,
    borderRadius: 24,
    background: colors.panel,
    padding: 24,
    fontSize: 28,
    lineHeight: 1.18,
    fontWeight: 750,
    marginBottom: 22,
};

const selectBox: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `3px solid ${colors.ink}`,
    borderRadius: 24,
    background: colors.panel,
    padding: "22px 24px",
    fontSize: 28,
    fontWeight: 950,
};

const dropdown: React.CSSProperties = {
    position: "absolute",
    top: 128,
    left: 28,
    right: 28,
    borderRadius: 28,
    border: `2px solid ${colors.soft}`,
    background: colors.panel,
    padding: 14,
    boxShadow: "0 22px 56px rgba(15, 23, 42, 0.14)",
    zIndex: 4,
};

const sendButton: React.CSSProperties = {
    width: "100%",
    border: 0,
    borderRadius: 999,
    background: colors.ink,
    color: "white",
    padding: "24px 30px",
    fontSize: 28,
    fontWeight: 950,
};

const safeBanner: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginTop: 18,
    padding: "18px 20px",
    borderRadius: 24,
    background: "#ecfdf5",
    border: "2px solid #a7f3d0",
    color: "#047857",
    fontSize: 23,
    fontWeight: 900,
};

const checkDot: React.CSSProperties = {
    width: 18,
    height: 18,
    borderRadius: 999,
    background: colors.emerald,
};

const ctaButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    background: colors.ink,
    color: "white",
    padding: "32px 70px",
    fontSize: 42,
    fontWeight: 950,
    boxShadow: "0 28px 70px rgba(15, 23, 42, 0.22)",
};
