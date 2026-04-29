import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        default: "Remova | The Enterprise Control Layer for AI",
        template: "%s | Remova — AI for Companies"
    },
    description: "Remova is an enterprise AI governance platform for companies using ChatGPT, Claude, Gemini, and other AI models with policy controls, sensitive-data protection, role-based access, audit visibility, and budget management.",
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
    const organizationId = `${SITE_URL}/#organization`;
    const softwareId = `${SITE_URL}/#software`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": organizationId,
        "name": "Remova",
        "legalName": "Remova",
        "alternateName": [
            "Remova AI",
            "Remova AI governance platform"
        ],
        "url": SITE_URL,
        "logo": `${SITE_URL}/icon.png`,
        "sameAs": [
            "https://www.linkedin.com/company/remova.org/",
            "https://github.com/remova"
        ],
        "description": "Remova is an enterprise AI governance platform for companies that need policy controls, sensitive-data protection, role-based access, audit visibility, and budget management for AI usage.",
        "knowsAbout": [
            "enterprise AI governance",
            "AI policy enforcement",
            "sensitive data masking",
            "AI budget management",
            "AI audit trails",
            "role-based AI access",
            "model-agnostic AI governance",
            "governed AI workspaces"
        ]
    };
    const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": softwareId,
        "name": "Remova",
        "alternateName": "Remova Enterprise AI Governance Platform",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "AI Governance Platform",
        "operatingSystem": "Web",
        "url": SITE_URL,
        "publisher": {
            "@id": organizationId
        },
        "description": "Enterprise AI governance platform with policy controls, sensitive-data masking, role-based access, audit visibility, model access governance, and department-level budget controls.",
        "featureList": [
            "Sensitive-data masking before AI model calls",
            "Policy guardrails for prompts and responses",
            "Role-based access controls for AI usage",
            "Department-level AI budgets and spend visibility",
            "Audit trails for AI usage and policy events",
            "Model-agnostic access to approved AI providers",
            "Team AI workspaces",
            "Governed API access for internal applications"
        ],
        "audience": {
            "@type": "BusinessAudience",
            "audienceType": "Companies rolling out AI across departments"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://app.remova.org/register",
            "price": "50",
            "priceCurrency": "USD",
            "description": "Enterprise plan listed publicly at $50 per seat with a 10-seat minimum.",
            "availability": "https://schema.org/InStock"
        }
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": "Remova",
        "url": SITE_URL,
        "publisher": {
            "@id": organizationId
        },
        "description": "Remova is an enterprise AI governance platform with policy controls, sensitive-data protection, role-based access, audit visibility, and budget management.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <html lang="en">
            <head>
                {/* RSS Autodiscovery — lets crawlers and feed readers find new content */}
                <link rel="alternate" type="application/rss+xml" title="Remova Blog" href="/feed.xml" />
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
                            })(window, document, "clarity", "script", "wgp0xi17zl");
                        }
                    `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
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
