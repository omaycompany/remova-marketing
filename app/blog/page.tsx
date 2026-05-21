import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import type { BlogPost } from "@/content/blog";
import { allBlogPosts } from "@/content/blog";
import { blogCategoryPath, blogCategorySlug, getBlogCategorySeo } from "@/content/blog-taxonomy";
import BlogSearch, { type BlogSearchPost } from "@/components/blog/BlogSearch";
import ItemListSchema from "@/components/seo/ItemListSchema";
import RelatedHubs from "@/components/seo/RelatedHubs";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Enterprise AI Blog: Tools, Security, Compliance, Workflows",
    description: "Practical guides on AI tools, coding, customer service, security, compliance, and workflow controls for teams running AI at work.",
    keywords: buildKeywords([
        "enterprise ai blog",
        "artificial intelligence tools",
        "best ai for coding",
        "ai customer service",
        "ai security operations",
        "ai compliance",
        "prompt engineering",
        "ai cost management",
    ]),
    openGraph: {
        title: "Enterprise AI Blog: Tools, Security, Compliance, Workflows",
        description: "Practical guides on AI tools, coding, customer service, security, compliance, and workflow controls for teams running AI at work.",
        url: absoluteUrl("/blog"),
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise AI Blog: Tools, Security, Compliance, Workflows",
        description: "Practical guides on AI tools, coding, customer service, security, compliance, and workflow controls for teams running AI at work.",
        images: [DEFAULT_OG_IMAGE_URL]
    },
    alternates: { canonical: "/blog" },
};

const relatedHubs = [
    { href: "/features", label: "Features" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/models", label: "Models" },
    { href: "/compare", label: "Compare" },
    { href: "/alternative", label: "Alternatives" },
    { href: "/glossary", label: "Glossary" },
];

const blogItems = allBlogPosts.map((post) => ({
    name: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
}));

const latestPostPeopleArt: Record<string, { primary: string; secondary: string; alt: string }> = {
    "nist-ai-rmf-2-enterprise-update": {
        primary: "/images/blog-index/nist-ai-rmf-enterprise-guide-people-1.webp",
        secondary: "/images/blog-index/nist-ai-rmf-enterprise-guide-people-2.webp",
        alt: "Risk and compliance leaders reviewing AI risk management framework updates",
    },
    "iso-42001-ai-governance-checklist": {
        primary: "/images/blog-index/iso-42001-ai-governance-checklist-people-1.webp",
        secondary: "/images/blog-index/iso-42001-ai-governance-checklist-people-2.webp",
        alt: "Happy compliance and security leaders discussing AI governance in a bright office",
    },
    "prompt-injection-prevention-guide": {
        primary: "/images/blog-index/prompt-injection-prevention-guide-people-1.webp",
        secondary: "/images/blog-index/prompt-injection-prevention-guide-people-2.webp",
        alt: "Happy application security and AI engineering team discussing prompt injection prevention",
    },
    "enterprise-ai-governance-guide": {
        primary: "/images/blog-index/enterprise-ai-governance-guide-people-1.webp",
        secondary: "/images/blog-index/enterprise-ai-governance-guide-people-2.webp",
        alt: "Cross-functional enterprise AI governance team smiling in a collaborative workshop",
    },
    "shadow-ai-risks-and-controls": {
        primary: "/images/blog-index/shadow-ai-risks-and-controls-people-1.webp",
        secondary: "/images/blog-index/shadow-ai-risks-and-controls-people-2.webp",
        alt: "Happy IT and operations leaders discussing safer shadow AI controls",
    },
    "ai-governance-framework-template": {
        primary: "/images/blog-index/ai-governance-framework-template-people-1.webp",
        secondary: "/images/blog-index/ai-governance-framework-template-people-2.webp",
        alt: "Governance committee smiling during an AI framework planning session",
    },
    "nist-ai-rmf-enterprise-guide": {
        primary: "/images/blog-index/nist-ai-rmf-enterprise-guide-people-1.webp",
        secondary: "/images/blog-index/nist-ai-rmf-enterprise-guide-people-2.webp",
        alt: "Risk and compliance team collaborating on enterprise AI risk management",
    },
    "ai-gateway-vs-governance-platform": {
        primary: "/images/blog-index/ai-gateway-vs-governance-platform-people-1.webp",
        secondary: "/images/blog-index/ai-gateway-vs-governance-platform-people-2.webp",
        alt: "Platform engineering and security leaders discussing AI governance architecture",
    },
    "prompt-injection-attack-examples": {
        primary: "/images/blog-index/prompt-injection-attack-examples-people-1.webp",
        secondary: "/images/blog-index/prompt-injection-attack-examples-people-2.webp",
        alt: "Security engineers smiling during an AI attack defense planning meeting",
    },
    "what-is-an-llm-gateway": {
        primary: "/images/blog-index/what-is-an-llm-gateway-people-1.webp",
        secondary: "/images/blog-index/what-is-an-llm-gateway-people-2.webp",
        alt: "AI platform engineers in a friendly LLM gateway architecture discussion",
    },
    "mcp-security-enterprise-guide": {
        primary: "/images/blog-index/mcp-security-enterprise-guide-people-1.webp",
        secondary: "/images/blog-index/mcp-security-enterprise-guide-people-2.webp",
        alt: "Developer platform and security team smiling during an enterprise AI tool review",
    },
};

const categoryFallbackArt: Record<string, string> = {
    Compliance: "iso-42001-ai-governance-checklist",
    Governance: "enterprise-ai-governance-guide",
    Security: "prompt-injection-prevention-guide",
    Risk: "nist-ai-rmf-enterprise-guide",
    Privacy: "mcp-security-enterprise-guide",
    Policy: "ai-governance-framework-template",
    "Developer Governance": "ai-gateway-vs-governance-platform",
    Operations: "what-is-an-llm-gateway",
    Architecture: "ai-gateway-vs-governance-platform",
    "Buyer Guide": "enterprise-ai-governance-guide",
};

const categoryThemes = Array.from(new Set(allBlogPosts.map((post) => post.category)))
    .map((category) => {
        const seo = getBlogCategorySeo(category);
        const posts = allBlogPosts.filter((post) => post.category === category);
        return {
            title: category,
            id: blogCategorySlug(category),
            description: seo.description,
            artSlug: seo.artSlug,
            priority: seo.priority,
            postCount: posts.length,
            latestDate: posts[0]?.date ?? "1970-01-01",
        };
    })
    .sort((a, b) => b.priority - a.priority || b.postCount - a.postCount || b.latestDate.localeCompare(a.latestDate) || a.title.localeCompare(b.title));

const youtubeVideos = [
    {
        id: "ULZB1YYl6V8",
        title: "How to Create a Business Report with AI | Remova Enterprise AI",
        duration: "5:48",
        published: "May 13, 2026",
        thumbnail: "/images/video-thumbnails/remova-ai-enterprise2.png",
    },
    {
        id: "6DWMKpU4DKQ",
        title: "How to Turn Meeting Notes into Action Items with AI | Remova Enterprise AI",
        duration: "6:12",
        published: "May 13, 2026",
        thumbnail: "/images/video-thumbnails/remova-ai-enterprise3.png",
    },
    {
        id: "9vTS6pOomOw",
        title: "How to Create a Meeting Agenda in Seconds with AI | Remova Enterprise AI",
        duration: "6:19",
        published: "May 13, 2026",
        thumbnail: "/images/video-thumbnails/remova-ai-enterprise4.png",
    },
    {
        id: "WJbasO3o6qM",
        title: "How to Write Professional Emails Faster with AI | Remova Enterprise AI",
        duration: "3:24",
        published: "May 13, 2026",
        thumbnail: "/images/video-thumbnails/remova-ai-enterprise5.png",
    },
    {
        id: "aL5FLabJ6do",
        title: "How to Use AI to Summarize Emails in Seconds | Remova AI Productivity Tip",
        duration: "3:54",
        published: "May 13, 2026",
        thumbnail: "/images/video-thumbnails/remova-ai-enterprise6.png",
    },
    {
        id: "uouQuzFC94k",
        title: "What is Remova AI? Secure Enterprise AI Access for ChatGPT, Claude, and Gemini",
        duration: "18:03",
        published: "May 5, 2026",
        thumbnail: "/images/video-thumbnails/remova-ai-enterprise1.png",
    },
] satisfies { id: string; title: string; duration: string; published: string; thumbnail: string }[];

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00.000Z`));
}

function isRasterImage(src: string | undefined) {
    return Boolean(src && /\.(png|jpe?g|webp|avif)(\?|$)/i.test(src));
}

function postImageSrc(post: BlogPost) {
    const peopleArt = latestPostPeopleArt[post.slug];
    if (peopleArt) return peopleArt.primary;

    const rasterImage = post.images?.find((image) => isRasterImage(image.src));
    const fallbackArtSlug = categoryFallbackArt[post.category] ?? getBlogCategorySeo(post.category).artSlug;
    const fallbackArt = latestPostPeopleArt[fallbackArtSlug];
    return rasterImage?.src ?? fallbackArt?.primary ?? DEFAULT_OG_IMAGE_URL;
}

function postImageAlt(post: BlogPost) {
    const peopleArt = latestPostPeopleArt[post.slug];
    if (peopleArt) return peopleArt.alt;

    const rasterImage = post.images?.find((image) => isRasterImage(image.src));
    const fallbackArtSlug = categoryFallbackArt[post.category] ?? getBlogCategorySeo(post.category).artSlug;
    const fallbackArt = latestPostPeopleArt[fallbackArtSlug];
    return rasterImage?.alt ?? fallbackArt?.alt ?? post.video?.title ?? `${post.title} article visual`;
}

function categoryArt(section: { artSlug: string; title: string }) {
    const indexedArt = latestPostPeopleArt[section.artSlug];
    if (indexedArt) return indexedArt;

    const leadPost = categoryPosts(section.title, 1)[0];
    const src = leadPost ? postImageSrc(leadPost) : DEFAULT_OG_IMAGE_URL;
    return {
        primary: src,
        secondary: src,
        alt: leadPost ? postImageAlt(leadPost) : `${section.title} article visual`,
    };
}

function categoryPosts(category: string, limit = 4) {
    return allBlogPosts.filter((post) => post.category === category).slice(0, limit);
}

const CATEGORY_CTA_COPY: Record<string, { eyebrow: string; title: string; description: string; tone: string }> = {
    Security: {
        eyebrow: "Security takeaway",
        title: "Control model access before data moves.",
        description: "Use Remova to enforce role access, inspect prompts and files, redact sensitive data, and keep audit logs ready for incident review.",
        tone: "bg-slate-950",
    },
    Compliance: {
        eyebrow: "Compliance takeaway",
        title: "Keep evidence tied to real AI usage.",
        description: "Map policies to workflow events, approvals, exceptions, retention choices, and review trails that auditors and buyers can inspect.",
        tone: "bg-emerald-700",
    },
    FinOps: {
        eyebrow: "FinOps takeaway",
        title: "Make AI spend visible by workflow.",
        description: "Track model routes, department budgets, usage spikes, override patterns, and cost per completed workflow before invoices surprise finance.",
        tone: "bg-amber-600",
    },
    Engineering: {
        eyebrow: "Engineering takeaway",
        title: "Test prompts, routes, and tools before release.",
        description: "Compare model behavior, validate prompt templates, restrict tool access, and log workflow evidence across AI apps and coding assistants.",
        tone: "bg-sky-700",
    },
    Operations: {
        eyebrow: "Operations takeaway",
        title: "Turn repeated AI work into owned workflows.",
        description: "Standardize inputs, approved models, review rules, exception paths, and adoption metrics so teams do not rely on private prompt habits.",
        tone: "bg-indigo-700",
    },
    Playbook: {
        eyebrow: "Playbook takeaway",
        title: "Launch AI in controlled waves.",
        description: "Give every rollout a pilot owner, approval gate, test set, rollback path, and metrics review before expanding access.",
        tone: "bg-slate-950",
    },
    Guide: {
        eyebrow: "Guide takeaway",
        title: "Move from concept to operating rule.",
        description: "Convert each AI topic into owners, allowed data, model routes, review steps, audit events, and measurable outcomes.",
        tone: "bg-teal-700",
    },
};

function categoryCtaCopy(category: string, index: number) {
    return CATEGORY_CTA_COPY[category] ?? {
        eyebrow: `${category} takeaway`,
        title: "Turn the article into an operating control.",
        description: "Use Remova to connect model access, data rules, workflow owners, review steps, and audit evidence inside daily AI work.",
        tone: index === 1 ? "bg-emerald-700" : index === 2 ? "bg-amber-600" : "bg-slate-950",
    };
}

function stripHtml(value: string) {
    return value.replace(/<[^>]*>/g, " ");
}

function searchTextForPost(post: BlogPost) {
    return [
        post.title,
        post.excerpt,
        post.category,
        post.author,
        post.slug.replace(/-/g, " "),
        ...post.sections.map((section) => `${section.heading} ${stripHtml(section.content).slice(0, 600)}`),
        ...(post.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
    ].filter(Boolean).join(" ");
}

function ArticleMeta({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
    return (
        <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${compact ? "text-xs" : "text-sm"} text-slate-500 dark:text-slate-400`}>
            <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                {post.category}
            </span>
            <time dateTime={post.date} className="inline-flex items-center gap-1.5 font-medium">
                {formatDate(post.date)}
            </time>
            <span className="inline-flex items-center gap-1.5 font-medium">
                {post.readTime}
            </span>
        </div>
    );
}

function FeaturedListItem({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block border-b border-slate-200 py-5 first:pt-0 last:border-b-0 dark:border-white/10"
        >
            <h3 className="mb-3 text-base font-black leading-snug text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                {post.title}
            </h3>
            <div className="flex items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>{post.author ?? "Remova Editorial"}</span>
                <span>{formatDate(post.date)}</span>
            </div>
        </Link>
    );
}

function ImageCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <div className="mb-4 aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <img
                    src={postImageSrc(post)}
                    alt={postImageAlt(post)}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </div>
            <h3 className="mb-2 line-clamp-2 text-base font-black leading-snug text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                {post.title}
            </h3>
            <p className="mb-3 line-clamp-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                {post.excerpt}
            </p>
            <div className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>{post.author ?? "Remova"}</span>
                <span>{formatDate(post.date)}</span>
            </div>
        </Link>
    );
}

function CategoryArticleRow({ post, withImage = false }: { post: BlogPost; withImage?: boolean }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={`group grid gap-4 border-b border-slate-200 pb-5 dark:border-white/10 ${
                withImage ? "grid-cols-[7.5rem_1fr]" : ""
            }`}
        >
            {withImage ? (
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                    <img
                        src={postImageSrc(post)}
                        alt={postImageAlt(post)}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                        loading="lazy"
                    />
                </div>
            ) : null}
            <div className="min-w-0">
                <h3 className="mb-2 line-clamp-2 text-sm font-black leading-snug text-slate-950 underline-offset-2 group-hover:text-blue-700 group-hover:underline dark:text-white dark:group-hover:text-blue-300">
                    {post.title}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span>{post.author ?? "Remova"}</span>
                    <span>{formatDate(post.date)}</span>
                </div>
            </div>
        </Link>
    );
}

function YouTubeVideoCard({ video }: { video: (typeof youtubeVideos)[number] }) {
    const href = `https://www.youtube.com/watch?v=${video.id}`;

    return (
        <a href={href} target="_blank" rel="noreferrer" className="group block min-w-0">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-slate-200">
                <img
                    src={video.thumbnail}
                    alt={`${video.title} thumbnail`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <span className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/10" aria-hidden="true" />
                <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg">
                    <span className="ml-0.5 h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-slate-950" aria-hidden="true" />
                </span>
            </div>
            <h3 className="mb-4 line-clamp-2 text-base font-black leading-snug text-slate-950 underline-offset-4 transition-colors group-hover:text-blue-700 group-hover:underline dark:text-white dark:group-hover:text-blue-300">
                {video.title}
            </h3>
            <div className="flex items-center justify-between gap-4 border-t border-slate-300 pt-3 text-sm font-bold text-slate-600 dark:border-white/15 dark:text-slate-300">
                <span className="inline-flex items-center gap-2">
                    <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-500 dark:border-slate-300">
                        <span className="ml-px h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-current" aria-hidden="true" />
                    </span>
                    {video.duration} watch
                </span>
                <span>{video.published}</span>
            </div>
        </a>
    );
}

export default function BlogIndex() {
    const heroPost = allBlogPosts[0];

    if (!heroPost) {
        return (
            <div className="bg-white px-4 py-40 dark:bg-[#131314]">
                <ItemListSchema name="Enterprise AI Blog" items={blogItems} />
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-950 dark:text-white">Blog</h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">New articles are coming soon.</p>
                </div>
            </div>
        );
    }

    const featuredPosts = allBlogPosts.slice(1, 6);
    const cardPosts = allBlogPosts.slice(6, 10);
    const categorySections = categoryThemes
        .map((theme) => ({ ...theme, posts: categoryPosts(theme.title, 4) }))
        .filter((section) => section.posts.length > 0);
    const latestPosts = allBlogPosts.slice(10, 18);
    const searchPosts: BlogSearchPost[] = allBlogPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.date,
        readTime: post.readTime,
        author: post.author ?? "Remova Editorial",
        imageSrc: postImageSrc(post),
        imageAlt: postImageAlt(post),
        searchText: searchTextForPost(post),
    }));

    return (
        <div className="flex flex-col bg-white dark:bg-[#131314]">
            <ItemListSchema name="Enterprise AI Blog" items={blogItems} />

            <section className="border-b border-slate-200 bg-white px-4 pt-36 pb-10 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#131314]">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-col gap-6 border-b border-slate-200 pb-6 dark:border-white/10 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="mb-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                                Remova blog
                            </p>
                            <h1 className="text-5xl font-black tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
                                AI reads for teams running real systems
                            </h1>
                        </div>
                        <div className="max-w-md">
                            <p className="text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                Practical guidance on AI tools, coding, support, security, compliance, architecture, and cost control. {allBlogPosts.length} articles and growing.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <ExternalAppLink
                                    href="https://app.remova.org/register"
                                    className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
                                >
                                    Start in Remova
                                </ExternalAppLink>
                                <Link
                                    href="#latest"
                                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:border-slate-950 dark:border-white/15 dark:text-white dark:hover:border-white"
                                >
                                    Browse articles
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Suspense fallback={<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">Loading blog search...</div>}>
                        <BlogSearch posts={searchPosts} />
                    </Suspense>
                </div>
            </section>

            <section className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-[1.18fr_0.88fr]">
                        <Link href={`/blog/${heroPost.slug}`} className="group block bg-slate-50 dark:bg-white/5">
                            <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-white/5">
                                <img
                                    src={postImageSrc(heroPost)}
                                    alt={postImageAlt(heroPost)}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                    loading="eager"
                                />
                            </div>
                            <div className="p-6 sm:p-8">
                                <ArticleMeta post={heroPost} />
                                <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-blue-700 sm:text-4xl dark:text-white dark:group-hover:text-blue-300">
                                    {heroPost.title}
                                </h2>
                                <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                    {heroPost.excerpt}
                                </p>
                                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition group-hover:gap-3 dark:text-white">
                                    Read the lead article <span aria-hidden="true">-&gt;</span>
                                </span>
                            </div>
                        </Link>

                        <aside className="lg:pl-4">
                            <div className="mb-4 flex items-center justify-between border-b-2 border-blue-600 pb-3">
                                <h2 className="text-lg font-black text-slate-950 dark:text-white">Featured posts</h2>
                                <span className="text-sm font-black uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">Editor picks</span>
                            </div>
                            <div>
                                {featuredPosts.map((post) => (
                                    <FeaturedListItem key={post.slug} post={post} />
                                ))}
                            </div>
                        </aside>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {cardPosts.map((post) => (
                            <ImageCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="latest" className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">Latest analysis</p>
                            <h2 className="text-4xl font-black tracking-tighter text-slate-950 dark:text-white">Fresh enterprise AI guidance</h2>
                        </div>
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950"
                        >
                            Run this in Remova
                        </ExternalAppLink>
                    </div>

                    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
                        {latestPosts.map((post) => (
                            <CategoryArticleRow key={post.slug} post={post} withImage />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f1ea] px-4 py-16 sm:px-6 lg:px-8 dark:bg-[#191715]">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-9 flex flex-col gap-4 text-center sm:items-center">
                        <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">Video library</p>
                        <h2 className="text-4xl font-black tracking-tighter text-slate-950 sm:text-5xl dark:text-white">From Remova&apos;s video library</h2>
                        <a
                            href="https://www.youtube.com/@RemovaInc/videos"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:border-slate-950 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:border-white"
                        >
                            View all videos <span aria-hidden="true" className="ml-2">-&gt;</span>
                        </a>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {youtubeVideos.map((video) => (
                            <YouTubeVideoCard key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl space-y-16">
                    {categorySections.map((section, sectionIndex) => {
                        const firstColumn = section.posts.slice(0, 2);
                        const secondColumn = section.posts.slice(2, 4);
                        const sectionArt = categoryArt(section);
                        const ctaCopy = categoryCtaCopy(section.title, sectionIndex);

                        return (
                            <div key={section.title} id={`category-${section.id}`}>
                                <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        {sectionArt ? (
                                            <div className="mb-4 h-24 w-40 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                                                <img
                                                    src={sectionArt.secondary}
                                                    alt={sectionArt.alt}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        ) : null}
                                        <h2 className="text-4xl font-black tracking-tighter text-slate-950 dark:text-white">{section.title}</h2>
                                        <p className="mt-2 max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                            {section.description}
                                        </p>
                                    </div>
                                    <Link
                                        href={blogCategoryPath(section.title)}
                                        className="inline-flex items-center gap-2 border-b-2 border-blue-600 pb-1 text-sm font-black text-slate-950 transition hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
                                    >
                                        See more articles <span aria-hidden="true">-&gt;</span>
                                    </Link>
                                </div>

                                <div className="grid gap-10 lg:grid-cols-[1fr_1fr_0.72fr]">
                                    <div className="space-y-5">
                                        {firstColumn.map((post, index) => (
                                            <CategoryArticleRow key={post.slug} post={post} withImage={index === 0 && Boolean(latestPostPeopleArt[post.slug])} />
                                        ))}
                                    </div>
                                    <div className="space-y-5">
                                        {secondColumn.map((post, index) => (
                                            <CategoryArticleRow key={post.slug} post={post} withImage={index === 0 && Boolean(latestPostPeopleArt[post.slug])} />
                                        ))}
                                    </div>
                                    <div className={`rounded-lg p-8 text-white ${ctaCopy.tone}`}>
                                        <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] opacity-80">{ctaCopy.eyebrow}</p>
                                        <h3 className="text-2xl font-black leading-tight">
                                            {ctaCopy.title}
                                        </h3>
                                        <p className="mt-4 text-sm font-medium leading-relaxed opacity-85">
                                            {ctaCopy.description}
                                        </p>
                                        <ExternalAppLink
                                            href="https://app.remova.org/register"
                                            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-blue-50"
                                        >
                                            Start in Remova
                                        </ExternalAppLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="container mx-auto max-w-6xl text-center">
                    <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">Explore more topics</p>
                    <h2 className="text-4xl font-black tracking-tighter text-slate-950 dark:text-white">Find the next AI control problem to solve</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        Jump into the areas security, legal, and platform teams usually need to align before AI scales.
                    </p>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {categoryThemes.map((topic) => {
                            const count = categoryPosts(topic.title, 100).length;
                            const topicArt = categoryArt(topic);

                            return (
                                <a
                                    key={topic.title}
                                    href={blogCategoryPath(topic.title)}
                                    className="group block rounded-lg border border-slate-200 bg-white p-6 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-[#131314] dark:hover:border-blue-300/50"
                                >
                                    {topicArt ? (
                                        <div className="mb-6 aspect-[16/9] overflow-hidden rounded-lg bg-slate-100 dark:bg-white/10">
                                            <img
                                                src={topicArt.secondary}
                                                alt={topicArt.alt}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : null}
                                    <h3 className="mb-2 text-lg font-black text-slate-950 underline-offset-4 group-hover:text-blue-700 group-hover:underline dark:text-white dark:group-hover:text-blue-300">
                                        {topic.title}
                                    </h3>
                                    <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{topic.description}</p>
                                    <span className="inline-flex items-center gap-2 text-sm font-black text-slate-950 dark:text-white">
                                        {count} articles <span aria-hidden="true">-&gt;</span>
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <RelatedHubs hubs={relatedHubs} />

            <section className="border-t border-slate-200 bg-[#f5f1ea] px-4 py-16 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#191715]">
                <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
                            Govern the work
                        </p>
                        <h2 className="max-w-3xl text-4xl font-black tracking-tighter text-slate-950 sm:text-5xl dark:text-white">
                            Turn these playbooks into live AI controls.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                            Remova helps teams route approved models, redact sensitive data, enforce policy, and keep audit evidence attached to every AI workflow.
                        </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#131314]">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-lg bg-slate-50 p-5 dark:bg-white/5">
                                <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">For security</p>
                                <p className="mt-3 text-lg font-black leading-snug text-slate-950 dark:text-white">Block risky prompts before data leaves.</p>
                            </div>
                            <div className="rounded-lg bg-slate-50 p-5 dark:bg-white/5">
                                <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">For compliance</p>
                                <p className="mt-3 text-lg font-black leading-snug text-slate-950 dark:text-white">Keep review-ready AI audit trails.</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <ExternalAppLink
                                href="https://app.remova.org/register"
                                className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700 dark:bg-white dark:text-slate-950"
                            >
                                Start in Remova
                            </ExternalAppLink>
                            <Link
                                href="/features"
                                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:border-slate-950 dark:border-white/15 dark:text-white dark:hover:border-white"
                            >
                                See platform features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
