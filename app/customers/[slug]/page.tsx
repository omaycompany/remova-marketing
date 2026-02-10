import { Metadata } from "next";
import Link from "next/link";
import { customerStories } from "@/content/customer-stories";
import { ArrowRight, TrendingUp, Building2, Quote } from "lucide-react";

export async function generateStaticParams() {
    return customerStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const story = customerStories.find((s) => s.slug === params.slug);
    if (!story) return {};
    return {
        title: story.metaTitle, description: story.metaDescription,
        openGraph: { title: story.metaTitle, description: story.metaDescription, url: `https://remova.org/customers/${story.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title: story.metaTitle, description: story.metaDescription },
        alternates: { canonical: `/customers/${story.slug}` },
    };
}

export default function CustomerStoryPage({ params }: { params: { slug: string } }) {
    const story = customerStories.find((s) => s.slug === params.slug);
    if (!story) return <div>Not found</div>;

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-5 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                            <Building2 className="h-4 w-4" /> {story.industry}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{story.companySize}</span>
                    </div>
                    <h1 className="mb-8 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-6xl lg:text-7xl leading-[0.9]">
                        {story.headline}
                    </h1>
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

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        Get Similar Results
                    </h2>
                    <Link href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                        Start Free Trial <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
