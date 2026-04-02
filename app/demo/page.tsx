import type { Metadata } from "next";
import GuestProductDemo, { DemoEntryCard } from "@/components/demo/GuestProductDemo";

export const metadata: Metadata = {
    title: "Remova Product Demo",
    description: "Explore the Remova interface in guest demo mode with synthetic data.",
    alternates: {
        canonical: "/demo",
    },
};

export default function DemoPage() {
    return (
        <div className="bg-white px-4 pb-16 pt-36 dark:bg-[#131314] sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                <DemoEntryCard />
                <GuestProductDemo />
            </div>
        </div>
    );
}
