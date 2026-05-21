import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    applicationName: "Remova",
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
    openGraph: {
        siteName: "Remova",
        url: SITE_URL,
        type: "website",
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
            "Remova.org",
            "Remova AI governance platform",
            "Remova enterprise AI control layer"
        ],
        "url": SITE_URL,
        "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/images/remova%20logo%20(4).png`,
            "width": 1500,
            "height": 500
        },
        "image": `${SITE_URL}/images/og-image.png`,
        "sameAs": [
            "https://www.linkedin.com/company/remova.org/",
            "https://www.youtube.com/@RemovaInc",
            "https://github.com/removainc",
            "https://www.reddit.com/user/RemovaInc/",
            "https://www.instagram.com/removainc/",
            "https://x.com/RemovaInc",
            "https://www.tiktok.com/@removainc"
        ],
        "founder": {
            "@type": "Person",
            "name": "Ozzy Ocak"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "sales",
                "url": `${SITE_URL}/contact`,
                "availableLanguage": ["en"]
            },
            {
                "@type": "ContactPoint",
                "contactType": "security",
                "url": `${SITE_URL}/trust`,
                "availableLanguage": ["en"]
            }
        ],
        "description": "Remova is an enterprise AI governance platform for companies that need policy controls, sensitive-data protection, role-based access, audit visibility, and budget management for AI usage.",
        "disambiguatingDescription": "Remova is an enterprise AI governance and control platform for companies. It is unrelated to Rimowa luggage and unrelated to generic background remover tools.",
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
        "alternateName": [
            "Remova AI",
            "Remova Enterprise AI Governance Platform",
            "Remova Enterprise AI Control Layer"
        ],
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "AI Governance Platform",
        "operatingSystem": "Web",
        "url": SITE_URL,
        "image": `${SITE_URL}/images/og-image.png`,
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
        "alternateName": [
            "Remova AI",
            "Remova.org",
            "Remova enterprise AI control layer"
        ],
        "url": SITE_URL,
        "publisher": {
            "@id": organizationId
        },
        "inLanguage": "en-US",
        "about": {
            "@id": softwareId
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
                <link rel="alternate" type="text/markdown" title="Remova AI reference" href="/llms.txt" />
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
