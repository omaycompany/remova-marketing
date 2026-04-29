import { Composition } from "remotion";
import { DeepSeekV4Landing } from "./compositions/DeepSeekV4Landing";
import { FeaturesPageDraft } from "./compositions/FeaturesPageDraft";
import { LandingPageTeaser } from "./compositions/LandingPageTeaser";

export const RemotionRoot = () => {
    return (
        <>
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
        </>
    );
};
