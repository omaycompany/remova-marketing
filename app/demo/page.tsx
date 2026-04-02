import type { Metadata } from "next";
import DemoFullscreenMode from "@/components/demo/DemoFullscreenMode";
import GuestProductDemo from "@/components/demo/GuestProductDemo";

export const metadata: Metadata = {
    title: "Remova Product Demo",
    description: "Explore the Remova interface in guest demo mode with synthetic data.",
    alternates: {
        canonical: "/demo",
    },
};

export default function DemoPage() {
    return (
        <div className="h-full min-h-[100dvh] bg-white dark:bg-[#131314]">
            <DemoFullscreenMode />
            <GuestProductDemo />
        </div>
    );
}
