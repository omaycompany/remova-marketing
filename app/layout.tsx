import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        default: "Remova | The Safe AI for Companies",
        template: "%s | Remova — AI for Companies"
    },
    description: "Remova: enterprise AI governance with policy controls, sensitive data protection, and budget management.",
    keywords: ["ai for companies", "enterprise ai governance", "ai safety for business", "budget controls", "sensitive data protection", "policy guardrails", "ai governance"],
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
        description: "Deploy AI with policy controls, sensitive data protection, and team-level budget governance.",
        url: "https://remova.org",
        siteName: "Remova",
        images: [
            {
                url: "/images/og-image.png",
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
        description: "Deploy AI with cost controls, privacy protections, and policy guardrails.",
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
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Remova",
        "url": "https://remova.org",
        "logo": "https://remova.org/icon.png",
        "sameAs": [
            "https://twitter.com/remova_ai",
            "https://linkedin.com/company/remova"
        ],
        "description": "The enterprise control layer for AI with governance, safety, and cost management controls."
    };

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
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
