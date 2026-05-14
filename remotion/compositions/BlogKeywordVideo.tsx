import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

export interface BlogKeywordVideoProps {
    keyword: string;
    title: string;
    volume: number;
    cpc: string;
    competition: string;
    angle: string;
    controlGoal: string;
    primaryControl: string;
    checklist: string[];
    metrics: string[];
}

const colors = {
    ink: "#111827",
    text: "#334155",
    muted: "#64748b",
    line: "#dbe3ef",
    soft: "#f8fafc",
    blue: "#2563eb",
    green: "#10b981",
    amber: "#f59e0b",
    red: "#ef4444",
};

export const BlogKeywordVideo = (rawProps: Record<string, unknown>) => {
    const {
        keyword = "ai governance",
        title = "AI Governance: A Practical Enterprise Guide",
        volume = 14800,
        cpc = "$3.51-$28.77",
        competition = "Medium",
        angle = "Enterprise AI governance guide",
        controlGoal = "Make AI adoption visible, enforceable, measurable, and useful.",
        primaryControl = "Enterprise AI control layer",
        checklist = [
            "Inventory approved and unapproved AI usage across teams.",
            "Define AI use policies by data class, department, model, and workflow.",
            "Connect identity, access, model routing, budgets, and audit logging.",
        ],
        metrics = ["Approved AI adoption by department"],
    } = rawProps as unknown as BlogKeywordVideoProps;
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const intro = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
    const flowIn = spring({ frame: frame - 82, fps, config: { damping: 20, stiffness: 90 } });
    const ctaIn = spring({ frame: frame - 178, fps, config: { damping: 20, stiffness: 90 } });
    const sweep = interpolate(frame, [0, 270], [-360, 1280], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

    return (
        <AbsoluteFill
            style={{
                background: "#ffffff",
                color: colors.ink,
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                overflow: "hidden",
            }}
        >
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#eef2f7 1px, transparent 1px), linear-gradient(90deg, #eef2f7 1px, transparent 1px)", backgroundSize: "54px 54px" }} />
            <div style={{ position: "absolute", left: sweep, top: 0, width: 260, height: 720, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.10), transparent)", transform: "skewX(-12deg)" }} />

            <Header />

            <div style={{ position: "absolute", left: 76, top: 126, right: 76, bottom: 86, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 32 }}>
                <div style={{ ...panel, opacity: intro, transform: `translateY(${interpolate(intro, [0, 1], [28, 0])}px)` }}>
                    <div style={eyebrow}>{keyword}</div>
                    <div style={{ fontSize: 56, lineHeight: 0.94, letterSpacing: 0, fontWeight: 950, maxWidth: 660 }}>{title}</div>
                    <div style={{ marginTop: 24, fontSize: 24, lineHeight: 1.24, fontWeight: 750, color: colors.text }}>{angle}</div>
                    <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                        <Metric label="Monthly searches" value={volume.toLocaleString("en-US")} color={colors.blue} />
                        <Metric label="CPC range" value={cpc} color={colors.green} />
                        <Metric label="Competition" value={competition} color={colors.amber} />
                    </div>
                </div>

                <div style={{ display: "grid", gap: 18 }}>
                    <div style={{ ...panel, opacity: flowIn, transform: `translateY(${interpolate(flowIn, [0, 1], [34, 0])}px)` }}>
                        <div style={{ ...eyebrow, color: colors.green }}>Control model</div>
                        <div style={{ fontSize: 31, lineHeight: 1.04, fontWeight: 930 }}>{primaryControl}</div>
                        <div style={{ marginTop: 16, fontSize: 19, lineHeight: 1.32, color: colors.text, fontWeight: 720 }}>{controlGoal}</div>
                        <Flow frame={frame} />
                    </div>
                    <div style={{ ...panel, opacity: ctaIn, transform: `translateY(${interpolate(ctaIn, [0, 1], [34, 0])}px)` }}>
                        <div style={{ ...eyebrow, color: colors.red }}>First controls</div>
                        <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                            {checklist.slice(0, 3).map((item, index) => (
                                <CheckItem key={item} label={item} frame={frame} delay={184 + index * 10} />
                            ))}
                        </div>
                        <div style={ctaRow}>
                            <div style={ctaButton}>Sign up for Remova</div>
                            <div style={{ color: colors.muted, fontSize: 18, fontWeight: 800 }}>{metrics[0] ?? "Audit evidence completeness"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};

const Header = () => (
    <div style={{ position: "absolute", left: 76, right: 76, top: 44, height: 54, display: "flex", alignItems: "center" }}>
        <Img src={staticFile("images/remova logo (4).png")} style={{ width: 138, height: "auto", objectFit: "contain" }} />
        <div style={{ marginLeft: "auto", fontSize: 18, fontWeight: 900, color: colors.muted, textTransform: "uppercase", letterSpacing: 0 }}>AI governance brief</div>
    </div>
);

const Metric = ({ label, value, color }: { label: string; value: string; color: string }) => (
    <div style={{ border: `2px solid ${colors.line}`, borderRadius: 14, padding: "16px 14px", background: colors.soft }}>
        <div style={{ fontSize: 15, fontWeight: 900, color: colors.muted, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 26, fontWeight: 950, color }}>{value}</div>
    </div>
);

const Flow = ({ frame }: { frame: number }) => {
    const steps = ["Input", "Policy", "Model", "Audit"];

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 24 }}>
            {steps.map((step, index) => {
                const active = interpolate(frame, [92 + index * 18, 122 + index * 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
                return (
                    <div key={step} style={{ borderRadius: 14, border: `2px solid ${active > 0.6 ? colors.blue : colors.line}`, background: active > 0.6 ? "#eff6ff" : "#ffffff", padding: "18px 10px", textAlign: "center", fontSize: 19, fontWeight: 950, color: active > 0.6 ? colors.blue : colors.text }}>
                        {step}
                    </div>
                );
            })}
        </div>
    );
};

const CheckItem = ({ label, frame, delay }: { label: string; frame: number; delay: number }) => {
    const opacity = interpolate(frame, [delay, delay + 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return (
        <div style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 12, alignItems: "start", opacity }}>
            <div style={{ width: 30, height: 30, borderRadius: 999, background: "#dcfce7", color: colors.green, display: "grid", placeItems: "center", fontSize: 11, fontWeight: 950 }}>OK</div>
            <div style={{ fontSize: 18, lineHeight: 1.24, fontWeight: 760, color: colors.text }}>{label}</div>
        </div>
    );
};

const panel = {
    border: `2px solid ${colors.line}`,
    borderRadius: 22,
    background: "rgba(255,255,255,0.94)",
    boxShadow: "0 24px 70px rgba(15,23,42,0.12)",
    padding: 28,
};

const eyebrow = {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 950,
    textTransform: "uppercase" as const,
    letterSpacing: 0,
    marginBottom: 18,
};

const ctaRow = {
    marginTop: 20,
    paddingTop: 18,
    borderTop: `2px solid ${colors.line}`,
    display: "flex",
    alignItems: "center",
    gap: 18,
};

const ctaButton = {
    borderRadius: 999,
    background: colors.ink,
    color: "#ffffff",
    padding: "13px 19px",
    fontSize: 18,
    fontWeight: 950,
};
