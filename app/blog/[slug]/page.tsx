import { Metadata } from "next";
import Link from "next/link";
import { allBlogPosts } from "@/content/blog";
import { ArrowRight, Clock, Calendar, Tag, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

export async function generateStaticParams() {
    return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = allBlogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    const title = post.title;
    const description = `Learn about ${post.title}. ${post.metaDescription}`;
    const publishedTime = `${post.date}T00:00:00.000Z`;
    const modifiedTime = `${post.lastModified ?? post.date}T00:00:00.000Z`;
    return {
        title,
        description,
        keywords: buildKeywords([
            post.title,
            post.category,
            "enterprise ai governance",
            "ai policy controls",
            "ai operations"
        ]),
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/blog/${post.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "article",
            publishedTime,
            modifiedTime,
            authors: [post.author ?? "Remova"],
            section: post.category,
        },
        twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE_URL] },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        ...(post.articleType === "NewsArticle" && {
            other: {
                "news_keywords": [post.title, post.category, "enterprise ai governance"].join(", ")
            }
        }),
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = allBlogPosts.find((p) => p.slug === params.slug);
    if (!post) return <div>Not found</div>;
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
    const priorityMetrics = metricsByCategory[post.category] || metricsByCategory.Guide;

    const articleType = post.articleType ?? "BlogPosting";
    const dateModified = post.lastModified ?? post.date;

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
        "image": DEFAULT_OG_IMAGE_URL,
        "keywords": post.category,
        "articleSection": post.category,
        "inLanguage": "en-US",
        "wordCount": post.sections.reduce((acc, s) => acc + s.content.split(" ").length, 0),
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": absoluteUrl("/") },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": absoluteUrl("/blog") },
            { "@type": "ListItem", "position": 3, "name": post.title },
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
                        <span className="text-slate-900 dark:text-white truncate">{post.title}</span>
                    </nav>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-4 py-1.5 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                            <Tag className="h-3.5 w-3.5" /> {post.category}
                        </span>
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
                                <span>Use these practices with governed controls for AI for companies.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl space-y-16">
                    {post.sections.map((section, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-3xl mb-6 leading-[0.9]">
                                {section.heading}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
                </div>
            </article>

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
