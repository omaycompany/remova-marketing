import { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/content/glossary";
import { ArrowRight, BookOpen, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, stripTitleSuffix } from "@/lib/seo";

export async function generateStaticParams() {
    return glossaryTerms.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const term = glossaryTerms.find((g) => g.slug === params.slug);
    if (!term) return {};
    const title = stripTitleSuffix(term.metaTitle);
    const description = term.metaDescription;
    return {
        title, description,
        keywords: buildKeywords([
            term.term,
            ...term.relatedTerms,
            "enterprise ai glossary",
            "ai governance terminology"
        ]),
        openGraph: {
            title,
            description,
            url: absoluteUrl(`/glossary/${term.slug}`),
            siteName: SITE_NAME,
            images: [DEFAULT_OG_IMAGE],
            type: "article"
        },
        twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE_URL] },
        alternates: { canonical: `/glossary/${term.slug}` },
    };
}

export default function GlossaryPage({ params }: { params: { slug: string } }) {
    const term = glossaryTerms.find((g) => g.slug === params.slug);
    if (!term) return <div>Not found</div>;

    const related = term.relatedTerms
        .map((slug) => glossaryTerms.find((g) => g.slug === slug))
        .filter(Boolean);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": term.term,
        "description": term.definition,
        "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "Remova AI Glossary",
            "url": absoluteUrl("/glossary")
        }
    };

    // Default unique FAQs for glossary
    const defaultFaqs = [
        {
            question: `Why is ${term.term} important for AI for companies?`,
            answer: `${term.term} matters because it directly affects how teams operationalize AI safely, how leaders assign ownership, and how controls are applied in daily workflows. Organizations that misunderstand ${term.term.toLowerCase()} usually end up with inconsistent rollout decisions and weaker governance discipline.`
        },
        {
            question: `How does Remova handle ${term.term}?`,
            answer: `Remova supports ${term.term.toLowerCase()} through policy controls, role-based access, auditability, and workflow governance features that make the concept operational rather than theoretical. The goal is to give teams a controlled way to apply the principle in production usage.`
        },
        {
            question: `Where can I find more terms related to AI for companies?`,
            answer: `You can explore related entries in the glossary, including ${related[0]?.term || 'Machine Learning'} and ${related[1]?.term || 'Data Privacy'}, to see how this concept connects to broader enterprise AI governance and operating practices.`
        }
    ];

    const displayFaqs = term.faqs || defaultFaqs;

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
                        <Link href="/glossary" className="hover:text-slate-900 transition-colors">Glossary</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{term.term}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <BookOpen className="h-4 w-4" />
                        <span className="tracking-wide uppercase">AI Glossary</span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl leading-[0.9]">
                        {term.term}
                    </h1>
                    <p className="max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {term.definition}
                    </p>

                    {/* TL;DR Section */}
                    <div className="mt-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{term.definition}</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{term.term} shapes how organizations design controls, ownership, and operating discipline around AI.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Use the related terms and explanation below to connect the definition to real enterprise rollout decisions.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Explanation */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">
                        In Depth
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {term.explanation}
                    </p>
                </div>
            </section>

            <LeadMagnetSection magnet="employee-safety-checklist" tone="slate" />

            {/* Related Terms */}
            {related.length > 0 && (
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5 text-left">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8">
                            Related Terms
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {related.map((r) => r && (
                                <Link key={r.slug} href={`/glossary/${r.slug}`}
                                    className="p-6 rounded-2xl bg-white dark:bg-[#131314] border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 transition-colors text-left">
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{r.term}</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{r.definition}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <LeadMagnetSection magnet="policy-generator" />

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Glossary FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        ENTERPRISE AI GOVERNANCE
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Turn glossary concepts like {term.term} into enforceable operating controls with Remova.
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
