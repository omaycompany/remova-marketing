import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

type LandingPageTeaserProps = {
    headline: string;
    subheadline: string;
    cta: string;
};

const colors = {
    ink: "#111827",
    muted: "#4b5563",
    border: "#d1d5db",
    emerald: "#10b981",
    blue: "#2563eb",
    red: "#ef4444",
    background: "#f8fafc",
    white: "#ffffff",
};

const rowData = [
    { label: "Engineering", value: 82, color: colors.red },
    { label: "Marketing", value: 36, color: colors.emerald },
    { label: "Sales", value: 48, color: colors.blue },
];

export const LandingPageTeaser = ({ headline, subheadline, cta }: LandingPageTeaserProps) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const intro = spring({ frame: frame + 10, fps, config: { damping: 18, stiffness: 90 } });
    const dashboardIn = spring({ frame: frame - 14, fps, config: { damping: 20, stiffness: 80 } });
    const glow = interpolate(frame, [0, 120, 240], [0.2, 0.9, 0.2]);
    const sweep = interpolate(frame, [30, 180], [-420, 1740], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            style={{
                background: `radial-gradient(circle at 78% 22%, rgba(16, 185, 129, ${glow * 0.22}) 0, transparent 34%), ${colors.background}`,
                color: colors.ink,
                fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                overflow: "hidden",
            }}
        >
            <GridBackground />
            <div
                style={{
                    position: "absolute",
                    inset: 72,
                    display: "grid",
                    gridTemplateColumns: "1.04fr 0.96fr",
                    gap: 72,
                    alignItems: "center",
                }}
            >
                <section
                    style={{
                        transform: `translateY(${interpolate(intro, [0, 1], [64, 0])}px)`,
                        opacity: intro,
                    }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 18,
                            border: `2px solid ${colors.border}`,
                            borderRadius: 999,
                            background: "rgba(255, 255, 255, 0.82)",
                            padding: "18px 28px",
                            fontSize: 28,
                            fontWeight: 800,
                            letterSpacing: 0,
                            marginBottom: 56,
                        }}
                    >
                        <span
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 999,
                                background: colors.emerald,
                                boxShadow: `0 0 0 10px rgba(16, 185, 129, ${0.12 + glow * 0.16})`,
                            }}
                        />
                        SAFER AI FOR TEAMS
                    </div>
                    <h1
                        style={{
                            fontSize: 132,
                            lineHeight: 0.9,
                            fontWeight: 950,
                            letterSpacing: 0,
                            textTransform: "uppercase",
                            margin: "0 0 42px",
                            maxWidth: 860,
                        }}
                    >
                        {headline}
                    </h1>
                    <p
                        style={{
                            fontSize: 42,
                            lineHeight: 1.22,
                            fontWeight: 600,
                            color: colors.muted,
                            margin: 0,
                            maxWidth: 820,
                        }}
                    >
                        {subheadline}
                    </p>
                </section>

                <section
                    style={{
                        transform: `translateY(${interpolate(dashboardIn, [0, 1], [80, 0])}px) scale(${interpolate(dashboardIn, [0, 1], [0.96, 1])})`,
                        opacity: dashboardIn,
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            border: `6px solid ${colors.ink}`,
                            borderRadius: 44,
                            background: colors.white,
                            padding: 44,
                            boxShadow: "0 36px 100px rgba(15, 23, 42, 0.18)",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                width: 240,
                                transform: `translateX(${sweep}px) skewX(-18deg)`,
                                background: "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.16), transparent)",
                            }}
                        />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 42 }}>
                            <Img
                                src={staticFile("images/remova logo (4).png")}
                                style={{ width: 260, height: "auto", objectFit: "contain" }}
                            />
                            <div style={{ fontSize: 24, fontWeight: 800, color: colors.muted }}>Live Controls</div>
                        </div>
                        <div style={{ display: "grid", gap: 28 }}>
                            {rowData.map((row, index) => {
                                const progress = interpolate(frame, [36 + index * 12, 96 + index * 12], [0, row.value], {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                });

                                return (
                                    <div key={row.label}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: 12,
                                                fontSize: 26,
                                                fontWeight: 850,
                                                color: colors.ink,
                                            }}
                                        >
                                            <span>{row.label}</span>
                                            <span style={{ color: row.color }}>{Math.round(progress)}%</span>
                                        </div>
                                        <div
                                            style={{
                                                height: 26,
                                                borderRadius: 999,
                                                background: "#e5e7eb",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: "100%",
                                                    width: `${progress}%`,
                                                    background: row.color,
                                                    borderRadius: 999,
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div
                            style={{
                                marginTop: 46,
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 22,
                            }}
                        >
                            <Metric label="Sensitive prompts blocked" value="247" />
                            <Metric label="Budget alerts" value="12" />
                        </div>
                    </div>
                </section>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 72,
                    right: 72,
                    bottom: 54,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 26,
                    fontWeight: 850,
                    color: colors.muted,
                }}
            >
                <span>{cta}</span>
                <span style={{ color: colors.ink }}>remova.org</span>
            </div>
        </AbsoluteFill>
    );
};

const Metric = ({ label, value }: { label: string; value: string }) => {
    return (
        <div
            style={{
                border: `2px solid ${colors.border}`,
                borderRadius: 28,
                padding: 24,
                background: "#f9fafb",
            }}
        >
            <div style={{ fontSize: 44, lineHeight: 1, fontWeight: 950, marginBottom: 10 }}>{value}</div>
            <div style={{ fontSize: 20, lineHeight: 1.2, fontWeight: 750, color: colors.muted }}>{label}</div>
        </div>
    );
};

const GridBackground = () => {
    return (
        <AbsoluteFill
            style={{
                backgroundImage:
                    "linear-gradient(rgba(17, 24, 39, 0.055) 2px, transparent 2px), linear-gradient(90deg, rgba(17, 24, 39, 0.055) 2px, transparent 2px)",
                backgroundSize: "96px 96px",
                maskImage: "radial-gradient(circle at 50% 35%, black 0, transparent 78%)",
            }}
        />
    );
};
