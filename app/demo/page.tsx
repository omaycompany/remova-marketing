import type { Metadata } from "next";
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
        <div className="bg-white pb-0 pt-24 dark:bg-[#131314]">
            <GuestProductDemo />
        </div>
    );
}
