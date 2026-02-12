import { Metadata } from "next";
import Link from "next/link";
import { customerStories } from "@/content/customer-stories";
import { ArrowRight, TrendingUp, Building2, Quote, ChevronRight, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export async function generateStaticParams() {
    return customerStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const story = customerStories.find((s) => s.slug === params.slug);
    if (!story) return {};
    const title = `${story.metaTitle} | AI for Companies`;
    const description = `Read how ${story.company} uses Remova. Real success stories of AI for companies. Secure deployment and ROI. ${story.metaDescription}`;
    return {
        title, description,
        openGraph: { title, description, url: `https://remova.org/customers/${story.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title, description },
        alternates: { canonical: `/customers/${story.slug}` },
    };
}

export default function CustomerStoryPage({ params }: { params: { slug: string } }) {
    const story = customerStories.find((s) => s.slug === params.slug);
    if (!story) return <div>Not found</div>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        "name": story.headline,
        "description": story.metaDescription,
        "author": { "@type": "Organization", "name": "Remova" },
        "publisher": { "@type": "Organization", "name": "Remova" }
    };

    // Default unique FAQs for customer stories
    const defaultFaqs = [
        {
            question: `How did ${story.company} benefit from AI for companies?`,
            answer: `${story.company} achieved significant measurable success, including ${story.results[0].value} ${story.results[0].metric}, by implementing Remova's leading platform for AI for companies.`
        },
        {
            question: `What was the primary challenge ${story.company} faced?`,
            answer: `The main hurdle was ${story.challenge.split('.')[0].toLowerCase()}. Remova's protocol for AI for companies provided a secure and compliant solution to overcome this obstacle.`
        },
        {
            question: `Is Remova suitable for others in the ${story.industry} industry?`,
            answer: `Absolutely. This case study demonstrates how Remova's governance layer effectively manages industry-specific safety and cost concerns for AI for companies within ${story.industry}.`
        }
    ];

    const displayFaqs = story.faqs || defaultFaqs;

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm font-bold text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <Link href="/customers" className="hover:text-slate-900 transition-colors">Customers</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{story.company} Story</span>
                    </nav>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-5 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                            <Building2 className="h-4 w-4" /> {story.industry}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{story.companySize}</span>
                    </div>
                    <h1 className="mb-8 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[0.9]">
                        {story.headline}
                    </h1>

                    {/* TL;DR Section */}
                    <div className="mt-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 text-left">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>{story.challenge.split('.')[0]}.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Successfully implemented safe AI for companies within {story.industry}.</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Key results: {story.results.map(r => `${r.value} ${r.metric}`).join(', ')}.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">Challenge</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{story.challenge}</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]">Solution</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{story.solution}</p>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-12 leading-[0.9]">Results</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {story.results.map((r, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#131314] border border-slate-200 dark:border-white/10 text-center">
                                <TrendingUp className="h-5 w-5 text-emerald-500 mx-auto mb-3" />
                                <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">{r.value}</div>
                                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">{r.metric}</div>
                                <p className="text-xs text-slate-400 dark:text-slate-500">{r.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <Quote className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto mb-8" />
                    <blockquote className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-snug mb-8">
                        &ldquo;{story.quote.text}&rdquo;
                    </blockquote>
                    <p className="text-lg font-bold text-slate-600 dark:text-slate-300">{story.quote.author}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{story.quote.role}, {story.company}</p>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ items={displayFaqs} title="Success Story FAQs" />

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        BEST AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Get similar results with Remova. The industry-leading solution for AI for companies.
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
