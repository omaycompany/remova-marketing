import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo";
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
    metadataBase: new URL(SITE_URL),
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
        "url": SITE_URL,
        "logo": `${SITE_URL}/icon.png`,
        "sameAs": [
            "https://www.linkedin.com/company/remova.org/"
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
                        if (!window.__removaGaInitialized) {
                            window.__removaGaInitialized = true;
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-YR03QTP6EC');
                        }
                    `}
                </Script>
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        if (!window.__removaClarityInitialized) {
                            window.__removaClarityInitialized = true;
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "vy5a0rxg0o");
                        }
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
