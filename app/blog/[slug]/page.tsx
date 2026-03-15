import { Metadata } from "next";
import Link from "next/link";
import { allBlogPosts } from "@/content/blog";
import { ArrowRight, Clock, Calendar, Tag, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export async function generateStaticParams() {
    return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = allBlogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    const title = `${post.title} | AI for Companies`;
    const description = `Learn about ${post.title}. ${post.metaDescription}`;
    return {
        title,
        description,
        openGraph: { title, description, url: `https://remova.org/blog/${post.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title, description },
        alternates: { canonical: `/blog/${post.slug}` },
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
        `Assign an owner for ${post.sections[0]?.heading.toLowerCase()}.`,
        "Define baseline controls and exception paths before broad rollout.",
        "Track outcomes weekly and publish a short operational summary.",
        "Review controls monthly and adjust based on incident patterns.",
    ];
    const priorityMetrics = metricsByCategory[post.category] || metricsByCategory.Guide;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "author": { "@type": "Organization", "name": "Remova" },
        "datePublished": post.date,
        "image": "https://remova.org/images/og-image.png",
    };

    // Default unique FAQs based on blog post
    const defaultFaqs = [
        {
            question: `How does "${post.title}" apply to AI for companies?`,
            answer: `This article explores the critical intersection of ${post.category.toLowerCase()} and enterprise AI. Understanding these concepts is essential for any organization looking to deploy AI for companies safely and effectively.`
        },
        {
            question: `What is the main takeaway regarding ${post.sections[0].heading}?`,
            answer: `${post.sections[0].content.split('.')[0]}. This highlights practical guidance for safe enterprise AI adoption.`
        },
        {
            question: `Are the strategies mentioned here compatible with HIPAA or GDPR?`,
            answer: `Yes. The strategies are compatible when implemented with appropriate controls such as PII redaction, role-based access, retention policies, and audit logging.`
        }
    ];

    const displayFaqs = post.faqs || defaultFaqs;

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
                        <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
                            <Calendar className="h-3.5 w-3.5" /> {post.date}
                        </span>
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
                                    <span>{s.heading}: {s.content.split('.')[0]}.</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Use these practices with governed enterprise AI controls.</span>
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
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </article>

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

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Article FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        SAFE AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Deploy enterprise AI governance with centralized policy, safety, and cost controls.
                    </p>
                    <Link href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                        Sign Up <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
