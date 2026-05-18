import { Metadata } from "next";
import Link from "next/link";
import { allBlogPosts, type BlogPost } from "@/content/blog";
import { blogCategoryPath, getBlogCategorySeo } from "@/content/blog-taxonomy";
import { ArrowRight, Clock, Calendar, Tag, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyBlogRedirect, legacyBlogStaticParams } from "@/lib/legacy-redirects";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, legacyRedirectMetadata } from "@/lib/seo";

const ISO_42001_CLUSTER_SLUGS = new Set([
    "iso-42001-ai-governance-checklist",
    "iso-42001-certification-readiness-steps-enterprise-ai-teams",
    "iso-42001-controls-ai-governance-program",
    "iso-42001-certification-cost-drivers",
    "iso-42001-requirements-ai-management-system",
    "iso-42001-audit-evidence-items-ai-teams",
]);

const PROMPT_INJECTION_CLUSTER_SLUGS = new Set([
    "prompt-injection-defense-checklist-enterprise-ai-apps",
]);

const POST_SEO_KEYWORDS: Record<string, string[]> = {
    "ai-customer-service": ["ai customer service", "ai customer service tools", "customer support ai", "ai ticket triage", "ai chatbot for customer service"],
    "ai-chatbot-builder-customer-checklist": ["ai chatbot builder", "ai chatbot builder for website", "customer service chatbot builder", "ai chatbot for customer support", "chatbot builder", "customer support ai agent"],
    "ai-code-generator-work-source-code-secrets-review-approval-rules": ["ai code generator", "ai code generator at work", "ai coding assistant security", "ai generated code review", "source code ai tools", "ai code review rules"],
    "ai-security-risks-employees-use-ai-tools": ["ai security", "ai security risks", "employee ai tools", "shadow ai security", "ai data leakage", "ai tool security", "enterprise ai security"],
    "agentic-workflows-business-processes": ["agentic workflows", "ai agents for business", "agentic ai workflows", "business process automation ai", "ai workflow automation", "safe ai agents"],
    "ai-writing-assistant-for-teams": ["ai writing assistant", "ai writing assistant for teams", "best ai writing tools", "ai writing tools for business", "ai content assistant", "writing assistant for teams"],
    "artificial-intelligence-in-companies": ["artificial intelligence in companies", "ai in companies", "enterprise ai adoption", "ai for business operations"],
    "artificial-intelligence-tools-for-business": ["artificial intelligence tools for business", "ai tools for business", "business ai tools", "enterprise ai tools"],
    "artificial-intelligence-tools-list-enterprise-ai-stack": ["artificial intelligence tools list", "enterprise ai stack", "ai tools list", "ai software stack"],
    "best-ai-for-coding": ["best ai for coding", "ai coding tools", "ai code assistant", "ai for software development"],
    "best-artificial-intelligence-tools-for-employees": ["best artificial intelligence tools for employees", "employee ai tools", "workplace ai tools", "ai productivity tools"],
    "best-email-marketing-tools-small-sales-teams": ["best email marketing tools for small sales teams", "email marketing tools", "sales email automation", "small business email marketing tools"],
    "chatgpt-alternatives-for-work": ["chatgpt alternatives", "chatgpt alternatives for work", "claude vs chatgpt", "gemini vs chatgpt", "microsoft 365 copilot alternatives", "perplexity enterprise", "enterprise ai assistants"],
    "free-artificial-intelligence-tools-at-work": ["free artificial intelligence tools", "free ai tools for work", "free workplace ai tools", "safe free ai tools"],
    "how-to-choose-artificial-intelligence-tools-enterprise": ["how to choose artificial intelligence tools", "enterprise ai tool evaluation", "ai vendor evaluation", "ai software selection"],
};

type RelatedResourceLink = {
    label: string;
    href: string;
    description: string;
};

const DEFAULT_RESOURCE_LINKS: RelatedResourceLink[] = [
    {
        label: "Resources hub",
        href: "/resources",
        description: "Downloadable guides and operating notes for teams turning AI policy into repeatable work.",
    },
    {
        label: "Enterprise AI glossary",
        href: "/glossary",
        description: "Plain-language definitions for the governance, privacy, security, and model terms used across Remova.",
    },
];

const RESOURCE_LINKS_BY_CATEGORY: Record<string, RelatedResourceLink[]> = {
    Architecture: [
        { label: "Models hub", href: "/models", description: "Compare model families and route AI work through approved, governed model choices." },
        { label: "Use cases", href: "/use-cases", description: "See how model access, workflow routing, and controls show up in real company workflows." },
    ],
    "Buyer Guide": [
        { label: "Features", href: "/features", description: "Review the product controls that matter when evaluating an enterprise AI governance layer." },
        { label: "Compare Remova", href: "/compare", description: "Understand how Remova compares with point tools and single-model assistants." },
    ],
    Compliance: [
        { label: "ISMS scope statement", href: "/resources/isms-scope-statement", description: "A practical note for drawing the boundary around systems, teams, vendors, and AI evidence." },
        { label: "Compliance use case", href: "/use-cases/compliance-lead", description: "How compliance teams use Remova to keep AI rollout tied to evidence and review cycles." },
    ],
    Governance: [
        { label: "Features", href: "/features", description: "The core controls for policy enforcement, model governance, budgets, and auditability." },
        { label: "Use cases", href: "/use-cases", description: "Role and function pages that show where governance work lands operationally." },
    ],
    Privacy: [
        { label: "Trade privacy guide", href: "/resources/ultimate-guide-trade-privacy-2025", description: "A field guide for mapping public exposure, evidence, removal work, and follow-up checks." },
        { label: "Coverage windows explained", href: "/resources/coverage-windows-explained", description: "How to think about recurring exposure after a removal request appears complete." },
    ],
    Security: [
        { label: "CISO use case", href: "/use-cases/ciso", description: "How security leaders keep AI adoption from becoming unmanaged data exposure." },
        { label: "Sensitive data protection", href: "/features/sensitive-data-protection", description: "Controls for identifying and reducing sensitive prompt exposure before model calls leave the workflow." },
    ],
};

type BlogInlineCta = NonNullable<BlogPost["inlineCtas"]>[number];

function InlineCtaAction({ href, label, variant }: { href: string; label: string; variant: "primary" | "secondary" }) {
    const className = variant === "primary"
        ? "inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-blue-100"
        : "inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-black text-white transition hover:border-white hover:bg-white/10";

    const content = (
        <>
            {label}
            {variant === "primary" ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
        </>
    );

    if (href.startsWith("/")) {
        return (
            <Link href={href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <ExternalAppLink href={href} className={className}>
            {content}
        </ExternalAppLink>
    );
}

function InlineArticleCta({ cta }: { cta: BlogInlineCta }) {
    return (
        <aside className="overflow-hidden rounded-lg border border-slate-900 bg-slate-950 p-6 shadow-xl shadow-slate-900/10 dark:border-white/10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                {cta.eyebrow}
            </p>
            <h3 className="max-w-2xl text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                {cta.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-300">
                {cta.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
                <InlineCtaAction href={cta.primaryHref} label={cta.primaryLabel} variant="primary" />
                {cta.secondaryHref && cta.secondaryLabel ? (
                    <InlineCtaAction href={cta.secondaryHref} label={cta.secondaryLabel} variant="secondary" />
                ) : null}
            </div>
        </aside>
    );
}

export async function generateStaticParams() {
    return [
        ...allBlogPosts.map((p) => ({ slug: p.slug })),
        ...legacyBlogStaticParams,
    ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = allBlogPosts.find((p) => p.slug === params.slug);
    const legacyRedirect = getLegacyBlogRedirect(params.slug);
    if (!post && legacyRedirect) return legacyRedirectMetadata(legacyRedirect);
    if (!post) return {};
    const title = post.title;
    const description = post.metaDescription;
    const categorySeo = getBlogCategorySeo(post.category);
    const postSeoKeywords = POST_SEO_KEYWORDS[post.slug] ?? [];
    const primarySeoTopic = categorySeo.keywords[0] ?? "enterprise ai controls";
    const isMicrosoft365CopilotSecurityPost = post.slug === "microsoft-365-copilot-security-checklist";
    const isPromptEngineeringPost = post.slug === "prompt-engineering-policy-guide";
    const isDataLossPreventionPost = post.slug === "data-loss-prevention-ai-prompts";
    const isIso42001ClusterPost = ISO_42001_CLUSTER_SLUGS.has(post.slug);
    const isPromptInjectionClusterPost = PROMPT_INJECTION_CLUSTER_SLUGS.has(post.slug);
    const publishedTime = `${post.date}T00:00:00.000Z`;
    const modifiedTime = `${post.lastModified ?? post.date}T00:00:00.000Z`;
    const heroImage = post.images?.find((image) => image.hero);
    const ogVideoUrl = post.video ? absoluteUrl(post.video.contentUrl) : undefined;
    const ogImage = post.video
        ? {
            url: absoluteUrl(post.video.thumbnailUrl),
            width: 1280,
            height: 720,
            alt: post.video.title,
        }
        : heroImage
            ? {
                url: absoluteUrl(heroImage.src),
                width: 1200,
                height: 630,
                alt: heroImage.alt,
            }
            : DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        keywords: buildKeywords([
            post.title,
            post.category,
            isDataLossPreventionPost ? "data loss prevention for AI prompts" : isPromptInjectionClusterPost ? "prompt injection defense" : isIso42001ClusterPost ? "ISO 42001 AI management system" : isPromptEngineeringPost ? "prompt engineering rules" : isMicrosoft365CopilotSecurityPost ? "Microsoft 365 Copilot security" : primarySeoTopic,
            "ai policy controls",
            "ai operations"
        ], categorySeo.keywords, postSeoKeywords, [
            categorySeo.title
        ]),
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/blog/${post.slug}`),
            siteName: SITE_NAME,
            images: [ogImage],
            videos: post.video && ogVideoUrl
                ? [
                    {
                        url: ogVideoUrl,
                        secureUrl: ogVideoUrl,
                        type: "video/mp4",
                        width: 1280,
                        height: 720,
                    },
                ]
                : undefined,
            type: "article",
            publishedTime,
            modifiedTime,
            authors: [post.author ?? "Remova"],
            section: post.category,
        },
        twitter: { card: "summary_large_image", title, description, images: [post.video ? absoluteUrl(post.video.thumbnailUrl) : heroImage ? absoluteUrl(heroImage.src) : DEFAULT_OG_IMAGE_URL] },
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
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        ...(post.articleType === "NewsArticle" && {
            other: {
                "news_keywords": [post.title, post.category, primarySeoTopic].join(", ")
            }
        }),
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = allBlogPosts.find((p) => p.slug === params.slug);
    const legacyRedirect = getLegacyBlogRedirect(params.slug);
    if (!post && legacyRedirect) return <LegacyRedirect to={legacyRedirect} />;
    if (!post) return <div>Not found</div>;
    const isDataLossPreventionPost = post.slug === "data-loss-prevention-ai-prompts";
    const categorySeo = getBlogCategorySeo(post.category);
    const postSeoKeywords = POST_SEO_KEYWORDS[post.slug] ?? [];
    const primarySeoTopic = categorySeo.keywords[0] ?? "enterprise ai controls";
    const metricsByCategory: Record<string, string[]> = {
        Guide: [
            "Control adoption rate by team",
            "Policy exception volume trend",
            "Time-to-resolution for governance issues",
            "Quarterly governance review completion rate",
        ],
        Operations: [
            "Daily policy block/allow ratio",
            "Manual exception requests per week",
            "Approval turnaround time",
            "Workflow completion rate after controls",
        ],
        FinOps: [
            "Spend vs budget by department",
            "Forecast variance month-over-month",
            "Cost per completed workflow",
            "Percentage of teams within budget threshold",
        ],
        Compliance: [
            "Audit evidence completeness",
            "Retention exception count",
            "Policy violation recurrence rate",
            "Review cycle SLA adherence",
        ],
        Security: [
            "Overshared content remediated",
            "Sensitive content events reviewed",
            "Permission drift findings by department",
            "Security report closure time",
        ],
        Policy: [
            "Approved templates by workflow",
            "Template adoption by department",
            "Sensitive prompt redactions",
            "Output review failures by template",
        ],
        Governance: [
            "Governance meeting action closure rate",
            "Control drift incidents",
            "Cross-team policy consistency score",
            "Risk signal response time",
        ],
        Playbook: [
            "Pilot-to-scale conversion rate",
            "Onboarding completion time",
            "Control pass rate in first 30 days",
            "User adoption trend after rollout",
        ],
    };
    const operationalChecklist = [
        `Assign an owner for "${post.sections[0]?.heading}".`,
        "Define baseline controls and exception paths before broad rollout.",
        "Track outcomes weekly and publish a short operational summary.",
        "Review controls monthly and adjust based on incident patterns.",
    ];
    const priorityMetrics = isDataLossPreventionPost ? [
        "Prompt DLP detections by data class",
        "Redacted versus blocked AI requests",
        "Repeat sensitive-data events by team",
        "Exception age for high-risk workflows",
    ] : metricsByCategory[post.category] || metricsByCategory.Guide;
    const relatedPosts = allBlogPosts
        .filter((candidate) => candidate.slug !== post.slug && candidate.category === post.category)
        .slice(0, 3);
    const relatedResourceLinks = RESOURCE_LINKS_BY_CATEGORY[post.category] ?? DEFAULT_RESOURCE_LINKS;

    const articleType = post.articleType ?? "BlogPosting";
    const dateModified = post.lastModified ?? post.date;
    const heroImage = post.images?.find((image) => image.hero);
    const structuredImage = post.video?.thumbnailUrl ?? heroImage?.src ?? DEFAULT_OG_IMAGE_URL;
    const isIso42001Post = post.slug === "iso-42001-ai-governance-checklist";
    const isMicrosoft365CopilotSecurityPost = post.slug === "microsoft-365-copilot-security-checklist";
    const isPromptEngineeringPost = post.slug === "prompt-engineering-policy-guide";
    const isIso42001ClusterPost = ISO_42001_CLUSTER_SLUGS.has(post.slug);
    const isPromptInjectionClusterPost = PROMPT_INJECTION_CLUSTER_SLUGS.has(post.slug);
    const structuredKeywords = buildKeywords([
        post.title,
        post.category,
        isDataLossPreventionPost ? "data loss prevention for AI prompts" : isPromptInjectionClusterPost ? "prompt injection defense" : isIso42001ClusterPost ? "ISO 42001 AI management system" : isPromptEngineeringPost ? "prompt engineering rules" : isMicrosoft365CopilotSecurityPost ? "Microsoft 365 Copilot security" : primarySeoTopic,
        "ai policy controls",
        "ai operations",
    ], categorySeo.keywords, postSeoKeywords, [
        ...(isIso42001Post ? [
            "ISO 42001",
            "AI management system",
            "AI governance checklist",
            "AI risk management",
            "audit evidence",
            "NIST AI RMF",
            "EU AI Act",
        ] : []),
        ...(isIso42001ClusterPost ? [
            "ISO 42001",
            "ISO 42001 certification",
            "AI management system",
            "AI audit evidence",
            "AI controls",
            "AI risk management",
            "AI management system audit",
        ] : []),
        ...(isMicrosoft365CopilotSecurityPost ? [
            "Microsoft 365 Copilot",
            "Microsoft Graph",
            "SharePoint permissions",
            "Microsoft Purview",
            "DLP",
            "sensitivity labels",
            "Copilot audit logs",
        ] : []),
        ...(isPromptEngineeringPost ? [
            "prompt engineering",
            "prompt templates",
            "prompt library",
            "prompt injection",
            "AI prompt rules",
            "preset workflows",
            "prompt audit trails",
        ] : []),
        ...(isDataLossPreventionPost ? [
            "data loss prevention",
            "AI DLP",
            "prompt DLP",
            "sensitive data protection",
            "prompt redaction",
            "secret detection",
            "PII redaction",
            "DLP for ChatGPT",
            "AI prompt security",
        ] : []),
        ...(isPromptInjectionClusterPost ? [
            "prompt injection",
            "prompt injection defense",
            "indirect prompt injection",
            "LLM security",
            "AI security",
            "AI guardrails",
            "agent security",
            "tool permission controls",
            "AI red team testing",
        ] : []),
    ]);
    const structuredAbout = [
        { "@type": "Thing", "name": post.category },
        { "@type": "Thing", "name": isDataLossPreventionPost ? "Data loss prevention" : isPromptInjectionClusterPost ? "Prompt injection defense" : isIso42001ClusterPost ? "ISO 42001" : isPromptEngineeringPost ? "Prompt engineering" : isMicrosoft365CopilotSecurityPost ? "Microsoft 365 Copilot security" : primarySeoTopic },
        ...categorySeo.keywords.slice(0, 4).map((keyword) => ({ "@type": "Thing", "name": keyword })),
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
        ...(isIso42001Post ? [
            { "@type": "Thing", "name": "AI risk management" },
            { "@type": "Thing", "name": "Audit evidence" },
        ] : []),
        ...(isIso42001ClusterPost ? [
            { "@type": "Thing", "name": "AI management system" },
            { "@type": "Thing", "name": "ISO 42001 certification" },
            { "@type": "Thing", "name": "AI audit evidence" },
        ] : []),
        ...(isMicrosoft365CopilotSecurityPost ? [
            { "@type": "Thing", "name": "Microsoft Graph" },
            { "@type": "Thing", "name": "SharePoint permissions" },
            { "@type": "Thing", "name": "Data loss prevention" },
        ] : []),
        ...(isPromptEngineeringPost ? [
            { "@type": "Thing", "name": "Prompt templates" },
            { "@type": "Thing", "name": "Prompt injection" },
            { "@type": "Thing", "name": "AI audit trails" },
        ] : []),
        ...(isDataLossPreventionPost ? [
            { "@type": "Thing", "name": "AI prompt DLP" },
            { "@type": "Thing", "name": "Sensitive data protection" },
            { "@type": "Thing", "name": "Prompt redaction" },
            { "@type": "Thing", "name": "Secret detection" },
        ] : []),
        ...(isPromptInjectionClusterPost ? [
            { "@type": "Thing", "name": "Prompt injection" },
            { "@type": "Thing", "name": "LLM security" },
            { "@type": "Thing", "name": "AI guardrails" },
            { "@type": "Thing", "name": "Indirect prompt injection" },
        ] : []),
    ];
    const structuredMentions = isIso42001Post ? [
        { "@type": "Thing", "name": "ISO 42001" },
        { "@type": "Thing", "name": "AI management system" },
        { "@type": "Thing", "name": "NIST AI RMF" },
        { "@type": "Thing", "name": "EU AI Act" },
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
    ] : isMicrosoft365CopilotSecurityPost ? [
        { "@type": "Thing", "name": "Microsoft 365 Copilot" },
        { "@type": "Thing", "name": "Microsoft Graph" },
        { "@type": "Thing", "name": "Microsoft Purview" },
        { "@type": "Thing", "name": "SharePoint" },
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
    ] : isPromptEngineeringPost ? [
        { "@type": "Thing", "name": "Prompt engineering" },
        { "@type": "Thing", "name": "Prompt template" },
        { "@type": "Thing", "name": "Prompt injection" },
        { "@type": "Thing", "name": "AI audit trails" },
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
    ] : isIso42001ClusterPost ? [
        { "@type": "Thing", "name": "ISO 42001" },
        { "@type": "Thing", "name": "AI management system" },
        { "@type": "Thing", "name": "AI audit evidence" },
        { "@type": "Thing", "name": "AI risk management" },
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
    ] : isDataLossPreventionPost ? [
        { "@type": "Thing", "name": "Data loss prevention" },
        { "@type": "Thing", "name": "AI DLP" },
        { "@type": "Thing", "name": "Prompt redaction" },
        { "@type": "Thing", "name": "Sensitive data" },
        { "@type": "Thing", "name": "Large language model security" },
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
    ] : isPromptInjectionClusterPost ? [
        { "@type": "Thing", "name": "Prompt injection" },
        { "@type": "Thing", "name": "Indirect prompt injection" },
        { "@type": "Thing", "name": "LLM security" },
        { "@type": "Thing", "name": "AI guardrails" },
        { "@type": "Organization", "name": "Remova", "url": absoluteUrl("/") },
    ] : undefined;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": articleType,
        "isAccessibleForFree": true,
        "headline": post.title,
        "description": post.metaDescription,
        "mainEntityOfPage": absoluteUrl(`/blog/${post.slug}`),
        "author": {
            "@type": "Organization",
            "name": post.author ?? "Remova",
            "url": absoluteUrl("/"),
        },
        "publisher": {
            "@type": "Organization",
            "name": "Remova",
            "logo": {
                "@type": "ImageObject",
                "url": absoluteUrl("/icon.png"),
            },
        },
        "datePublished": `${post.date}T00:00:00.000Z`,
        "dateModified": `${dateModified}T00:00:00.000Z`,
        "image": absoluteUrl(structuredImage),
        "keywords": structuredKeywords.join(", "),
        "articleSection": post.category,
        "inLanguage": "en-US",
        "wordCount": post.sections.reduce((acc, s) => acc + s.content.split(" ").length, 0),
        "about": structuredAbout,
        ...(structuredMentions && { "mentions": structuredMentions }),
        ...(post.video && {
            "video": {
                "@type": "VideoObject",
                "@id": absoluteUrl(`/blog/${post.slug}#article-video`),
                "name": post.video.title,
                "description": post.video.description,
                "thumbnailUrl": [absoluteUrl(post.video.thumbnailUrl)],
                "uploadDate": post.video.uploadDate,
                "duration": post.video.duration,
                "contentUrl": absoluteUrl(post.video.contentUrl),
                "embedUrl": absoluteUrl(`/blog/${post.slug}#article-video`),
                "transcript": post.video.transcript,
                "keywords": [post.title, post.category, "Remova", isDataLossPreventionPost ? "data loss prevention for AI prompts" : isPromptInjectionClusterPost ? "prompt injection defense" : isIso42001ClusterPost ? "ISO 42001 AI management system" : isPromptEngineeringPost ? "prompt engineering rules" : isMicrosoft365CopilotSecurityPost ? "Microsoft 365 Copilot security" : primarySeoTopic].join(", "),
            },
        }),
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl("/") },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": absoluteUrl("/blog") },
            { "@type": "ListItem", "position": 3, "name": post.category, "item": absoluteUrl(blogCategoryPath(post.category)) },
            { "@type": "ListItem", "position": 4, "name": post.title },
        ],
    };


    // Default unique FAQs based on blog post
    const defaultFaqs = [
        {
            question: `How does "${post.title}" apply to AI for companies?`,
            answer: `This article explains how ${post.category.toLowerCase()} decisions affect real AI for companies rollout, policy enforcement, and operating consistency across teams.`
        },
        {
            question: `What is the main takeaway regarding ${post.sections[0].heading}?`,
            answer: `${post.sections[0].content.split('.')[0]}. This highlights practical guidance for safe AI for companies rollout.`
        },
        {
            question: `Are the strategies mentioned here compatible with HIPAA or GDPR?`,
            answer: `They can support HIPAA or GDPR programs when mapped to legal requirements by your compliance and legal teams. Use controls like PII redaction, role-based access, retention policies, and audit logging as implementation foundations, not legal guarantees.`
        }
    ];

    const displayFaqs = post.faqs || defaultFaqs;

    const faqLd = displayFaqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": displayFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    } : null;

    const articleVideo = () => post.video ? (
        <figure id="article-video" className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-slate-950 shadow-2xl shadow-slate-900/10">
            <video
                className="block aspect-video w-full"
                controls
                preload="metadata"
                poster={post.video.thumbnailUrl}
                aria-label={post.video.title}
            >
                <source src={post.video.contentUrl} type="video/mp4" />
                {post.video.captionsUrl && (
                    <track src={post.video.captionsUrl} kind="captions" srcLang="en" label="English" default />
                )}
            </video>
            <figcaption className="border-t border-white/10 bg-white px-4 py-3 text-sm font-medium text-slate-600 dark:bg-[#131314] dark:text-slate-300">
                {post.video.description}
            </figcaption>
        </figure>
    ) : null;


    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            {faqLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
                />
            )}

            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href={blogCategoryPath(post.category)} className="hover:text-slate-900 transition-colors">{post.category}</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{post.title}</span>
                    </nav>

                    <div className="flex items-center gap-4 mb-8">
                        <Link href={blogCategoryPath(post.category)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-1.5 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md transition hover:border-blue-300 hover:text-blue-700 dark:hover:border-blue-300/50 dark:hover:text-blue-300">
                            <Tag className="h-3.5 w-3.5" /> {post.category}
                        </Link>
                        <time dateTime={post.date} className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(`${post.date}T00:00:00.000Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </time>
                        <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
                            <Clock className="h-3.5 w-3.5" /> {post.readTime}
                        </span>
                    </div>
                    <h1 className="mb-8 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[0.9]">
                        {post.title}
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {post.excerpt}
                    </p>

                    {heroImage && (
                        <figure className="mt-12 overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 shadow-2xl shadow-slate-900/10">
                            <img
                                src={heroImage.src}
                                alt={heroImage.alt}
                                className="h-auto w-full"
                                loading="eager"
                            />
                            <figcaption className="border-t border-slate-200 dark:border-white/10 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                                {heroImage.caption}
                            </figcaption>
                        </figure>
                    )}

                    {/* TL;DR Section */}
                    <div className="mt-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            {post.sections.slice(0, 3).map((s, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                    <span className="text-emerald-500 italic shrink-0">—</span>
                                    <span dangerouslySetInnerHTML={{ __html: `${s.heading}: ${s.content.split('.')[0]}.` }} />
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{post.excerpt}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl space-y-16">
                    {post.sections.map((section, i) => {
                        const sectionImages = post.images?.filter((image) => !image.hero && image.afterSection === i) ?? [];
                        const sectionCtas = post.inlineCtas?.filter((cta) => cta.afterSection === i) ?? [];

                        return (
                            <div key={i} className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-3xl mb-6 leading-[0.9]">
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-6">
                                        {section.content.split("\n\n").map((paragraph, paragraphIndex) => (
                                            <p
                                                key={paragraphIndex}
                                                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
                                                dangerouslySetInnerHTML={{ __html: paragraph }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {i === 0 && articleVideo()}

                                {sectionImages.map((image) => (
                                    <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="h-auto w-full"
                                            loading="lazy"
                                        />
                                        <figcaption className="border-t border-slate-200 dark:border-white/10 px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                                            {image.caption}
                                        </figcaption>
                                    </figure>
                                ))}

                                {sectionCtas.map((cta) => (
                                    <InlineArticleCta key={`${cta.afterSection}-${cta.title}`} cta={cta} />
                                ))}
                            </div>
                        );
                    })}
                </div>
            </article>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                                Keep reading
                            </p>
                            <h2 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                                More on {post.category.toLowerCase()}
                            </h2>
                        </div>
                        <Link href={blogCategoryPath(post.category)} className="inline-flex items-center gap-2 text-sm font-black text-slate-900 transition hover:text-blue-700 dark:text-white dark:hover:text-blue-300">
                            View {post.category} hub <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {relatedPosts.map((relatedPost) => (
                            <Link
                                key={relatedPost.slug}
                                href={`/blog/${relatedPost.slug}`}
                                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-lg dark:border-white/10 dark:bg-[#131314] dark:hover:border-white/30"
                            >
                                <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                                    Article
                                </span>
                                <h3 className="mt-3 text-lg font-black leading-tight text-slate-900 dark:text-white">
                                    {relatedPost.title}
                                </h3>
                                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                    {relatedPost.excerpt}
                                </p>
                            </Link>
                        ))}

                        {relatedResourceLinks.map((resource) => (
                            <Link
                                key={resource.href}
                                href={resource.href}
                                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-lg dark:border-white/10 dark:bg-[#131314] dark:hover:border-white/30"
                            >
                                <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                                    Resource
                                </span>
                                <h3 className="mt-3 text-lg font-black leading-tight text-slate-900 dark:text-white">
                                    {resource.label}
                                </h3>
                                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                    {resource.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="employee-safety-checklist" tone="slate" />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-3xl leading-[0.9]">
                            Operational Checklist
                        </h2>
                        <ul className="space-y-4">
                            {operationalChecklist.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-3xl leading-[0.9]">
                            Metrics to Track
                        </h2>
                        <ul className="space-y-4">
                            {priorityMetrics.map((metric) => (
                                <li key={metric} className="flex items-start gap-3 text-base font-medium text-slate-700 dark:text-slate-300">
                                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                                    <span>{metric}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <LeadMagnetSection magnet="readiness-check" />

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Article FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        SAFE AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Deploy AI for companies with centralized policy, safety, and cost controls.
                    </p>
                    <ExternalAppLink href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                        Sign Up <ArrowRight className="inline h-5 w-5 ml-2" />
                    </ExternalAppLink>
                </div>
            </section>
        </div>
    );
}
