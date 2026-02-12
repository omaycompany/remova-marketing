import { Metadata } from "next";
import Link from "next/link";
import { glossaryTerms } from "@/content/glossary";
import { ArrowRight, BookOpen, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export async function generateStaticParams() {
    return glossaryTerms.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const term = glossaryTerms.find((g) => g.slug === params.slug);
    if (!term) return {};
    const title = `${term.metaTitle} | AI for Companies`;
    const description = `What is ${term.term}? Learn about this and more in our AI for companies glossary. Remova provides the best tools for enterprise AI safety. ${term.metaDescription}`;
    return {
        title, description,
        openGraph: { title, description, url: `https://remova.org/glossary/${term.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title, description },
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
            "url": "https://remova.org/glossary"
        }
    };

    // Default unique FAQs for glossary
    const defaultFaqs = [
        {
            question: `Why is ${term.term} important for AI for companies?`,
            answer: `${term.term} is a fundamental concept in the AI for companies landscape because it directly impacts how organizations manage ${term.definition.toLowerCase()}. Understanding this is crucial for maintaining AI security and compliance.`
        },
        {
            question: `How does Remova handle ${term.term}?`,
            answer: `Remova's platform is built to natively manage and optimize ${term.term} through our integrated governance layer, ensuring that your organization benefits from this technology while mitigating its inherent risks.`
        },
        {
            question: `Where can I find more terms related to AI for companies?`,
            answer: `You can explore our full AI for companies glossary, which includes detailed definitions for related concepts like ${related[0]?.term || 'Machine Learning'} and ${related[1]?.term || 'Data Privacy'}.`
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
                                <span>Understanding {term.term} is critical for effective AI for companies.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Remova helps companies implement this technology safely.</span>
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

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Glossary FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        BEST AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Experience enterprise AI governance firsthand with Remova. The trusted platform for AI for companies.
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
