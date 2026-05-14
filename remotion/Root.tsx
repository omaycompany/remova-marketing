import { Composition } from "remotion";
import { BlogKeywordVideo } from "./compositions/BlogKeywordVideo";
import { DeepSeekV4Landing } from "./compositions/DeepSeekV4Landing";
import { EverydayUseCaseVideo } from "./compositions/EverydayUseCaseVideo";
import { FeaturesPageDraft } from "./compositions/FeaturesPageDraft";
import { LandingPageTeaser } from "./compositions/LandingPageTeaser";
import { WritingBetterEmailsVideo } from "./compositions/WritingBetterEmailsVideo";

export const RemotionRoot = () => {
    return (
        <>
            <Composition
                id="BlogKeywordVideo"
                component={BlogKeywordVideo}
                durationInFrames={270}
                fps={30}
                width={1280}
                height={720}
                defaultProps={{
                    keyword: "ai governance",
                    title: "AI Governance: A Practical Enterprise Guide",
                    volume: 14800,
                    cpc: "$3.51-$28.77",
                    competition: "Medium",
                    angle: "Enterprise AI governance guide",
                    controlGoal: "Make AI adoption visible, enforceable, measurable, and useful.",
                    primaryControl: "Enterprise AI control layer",
                    checklist: [
                        "Inventory approved and unapproved AI usage across teams.",
                        "Define AI use policies by data class, department, model, and workflow.",
                        "Connect identity, access, model routing, budgets, and audit logging.",
                    ],
                    metrics: ["Approved AI adoption by department"],
                }}
            />
            <Composition
                id="LandingPageTeaser"
                component={LandingPageTeaser}
                durationInFrames={240}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    headline: "A Safer Way To Use AI",
                    subheadline: "Let teams use ChatGPT, Claude, and Gemini without exposing company data.",
                    cta: "Enterprise AI governance by Remova",
                }}
            />
            <Composition
                id="DeepSeekV4Landing"
                component={DeepSeekV4Landing}
                durationInFrames={1080}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    modelName: "DeepSeek V4 Pro",
                    headline: "DeepSeek V4 for Enterprise AI",
                    subheadline: "Route frontier reasoning, long-context analysis, and agent workflows through Remova controls.",
                    contextWindow: "1M token context",
                    inputPrice: "$0.65 / 1M input",
                    outputPrice: "$1.31 / 1M output",
                }}
            />
            <Composition
                id="ModelLandingVideo"
                component={DeepSeekV4Landing}
                durationInFrames={1080}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    modelName: "GPT-5.5",
                    headline: "GPT-5.5 for Enterprise AI",
                    subheadline: "Route model access, long-context analysis, and assistant workflows through Remova controls.",
                    contextWindow: "1M token context",
                    inputPrice: "$7.50 / 1M input",
                    outputPrice: "$45.00 / 1M output",
                }}
            />
            <Composition
                id="FeaturesPageDraft"
                component={FeaturesPageDraft}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="WritingBetterEmailsVideo"
                component={WritingBetterEmailsVideo}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="ExcelUseCaseVideo"
                component={EverydayUseCaseVideo}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ variant: "excel" }}
            />
            <Composition
                id="DocumentsUseCaseVideo"
                component={EverydayUseCaseVideo}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ variant: "documents" }}
            />
            <Composition
                id="ReportsUseCaseVideo"
                component={EverydayUseCaseVideo}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ variant: "reports" }}
            />
            <Composition
                id="AdminUseCaseVideo"
                component={EverydayUseCaseVideo}
                durationInFrames={900}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{ variant: "admin" }}
            />
        </>
    );
};
