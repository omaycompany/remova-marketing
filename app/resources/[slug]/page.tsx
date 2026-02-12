import { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/content/resources";
import { ArrowRight, Download, FileText, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export async function generateStaticParams() {
    return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const res = resources.find((r) => r.slug === params.slug);
    if (!res) return {};
    const title = `${res.metaTitle} | AI for Companies`;
    const description = `Get our ${res.type} on ${res.title}. Remova provides free tools for companies implementing AI. The safest way to deploy AI for companies. ${res.metaDescription}`;
    return {
        title, description,
        openGraph: { title, description, url: `https://remova.org/resources/${res.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title, description },
        alternates: { canonical: `/resources/${res.slug}` },
    };
}

const typeLabel: Record<string, string> = { guide: "Guide", checklist: "Checklist", template: "Template", whitepaper: "Whitepaper", toolkit: "Toolkit" };

export default function ResourcePage({ params }: { params: { slug: string } }) {
    const res = resources.find((r) => r.slug === params.slug);
    if (!res) return <div>Not found</div>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": res.title,
        "description": res.metaDescription,
        "genre": res.type,
        "publisher": { "@type": "Organization", "name": "Remova" }
    };

    // Default unique FAQs for resources
    const defaultFaqs = [
        {
            question: `Is this ${res.type} really free?`,
            answer: `Yes. Remova provides this ${res.type} as a complimentary resource to help organizations understand and implement the best practices for AI for companies.`
        },
        {
            question: `How does "${res.title}" help with AI safety?`,
            answer: `This resource covers ${res.sections[0].heading.toLowerCase()} and other key areas, providing actionable insights that you can use to secure your organization's AI for companies strategy.`
        },
        {
            question: `Can I implement these strategies using the Remova platform?`,
            answer: `Absolutely. Many of the concepts discussed in this ${res.type} are natively supported and enforced by Remova's governance layer, making it the ideal platform for executing your AI for companies plans.`
        }
    ];

    const displayFaqs = res.faqs || defaultFaqs;

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href="/resources" className="hover:text-slate-900 transition-colors">Resources</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{res.title}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <FileText className="h-4 w-4" />
                        <span className="tracking-wide uppercase">Free {typeLabel[res.type]}</span>
                    </div>
                    <h1 className="mb-8 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[0.9]">
                        {res.title}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {res.description}
                    </p>

                    {/* TL;DR Section */}
                    <div className="mb-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 text-left">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{res.description.split('.')[0]}.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Expert insights on AI for companies and security.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Complimentary resource provided by Remova.</span>
                            </li>
                        </ul>
                    </div>

                    <Link href="https://app.remova.org/register"
                        className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3">
                        <Download className="h-5 w-5" /> Sign Up
                    </Link>
                </div>
            </section>

            <article className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl space-y-12">
                    {res.sections.map((section, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-left">
                            <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-6 leading-[0.9]">
                                {section.heading}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </article>

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Resource FAQs" />

            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        BEST AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Go from reading to doing. Deploy Remova and implement the best practices for AI for companies in minutes.
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
