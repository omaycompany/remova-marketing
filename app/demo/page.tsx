import type { Metadata } from "next";
import DemoFullscreenMode from "@/components/demo/DemoFullscreenMode";
import GuestProductDemo from "@/components/demo/GuestProductDemo";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Remova Product Demo",
    description: "Try a live Remova product demo with synthetic AI governance events, redaction, policy checks, and budget controls.",
    keywords: buildKeywords([
        "remova demo",
        "ai governance demo",
        "ai policy controls demo",
        "sensitive data redaction demo",
    ]),
    openGraph: {
        title: "Remova Product Demo",
        description: "Try a live Remova product demo with synthetic AI governance events, redaction, policy checks, and budget controls.",
        url: absoluteUrl("/demo"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remova Product Demo",
        description: "Try a live Remova product demo with synthetic AI governance events and policy checks.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
    alternates: { canonical: "/demo" },
};

export default function DemoPage() {
    return (
        <>
            <DemoFullscreenMode />
            <GuestProductDemo />
        </>
    );
}
