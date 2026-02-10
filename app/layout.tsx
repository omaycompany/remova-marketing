import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        default: "Remova | The Enterprise Control Layer for AI",
        template: "%s | Remova"
    },
    description: "Remova: The enterprise safety layer for AI. Secure your team with cost controls, PII redaction, and dual-layer guardrails. Deploy LLMs with zero fear.",
    keywords: ["AI safety", "enterprise AI", "cost controls", "PII redaction", "LLM guardrails", "ChatGPT enterprise", "Claude for business", "Gemini security", "AI governance"],
    authors: [{ name: "Remova" }],
    creator: "Remova",
    publisher: "Remova",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://remova.org"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Remova | The Enterprise Control Layer for AI",
        description: "Deploy ChatGPT, Claude, and Gemini with granular cost controls, PII redaction, and dual-layer guardrails.",
        url: "https://remova.org",
        siteName: "Remova",
        images: [
            {
                url: "/images/og-image.png", // USER should provide this, or I'll assume it exists/will exist
                width: 1200,
                height: 630,
                alt: "Remova - Enterprise AI Control Layer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remova | The Enterprise Control Layer for AI",
        description: "Deploy AI with zero fear. Cost controls, Privacy shields, and Custom models.",
        images: ["/images/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-YR03QTP6EC"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-YR03QTP6EC');
                    `}
                </Script>
            </head>
            <body className={`${inter.variable} font-sans`}>
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
