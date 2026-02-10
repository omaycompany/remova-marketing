import { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/content/resources";
import { ArrowRight, Download, FileText } from "lucide-react";

export async function generateStaticParams() {
    return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const res = resources.find((r) => r.slug === params.slug);
    if (!res) return {};
    return {
        title: res.metaTitle, description: res.metaDescription,
        openGraph: { title: res.metaTitle, description: res.metaDescription, url: `https://remova.org/resources/${res.slug}`, siteName: "Remova", type: "article" },
        twitter: { card: "summary_large_image", title: res.metaTitle, description: res.metaDescription },
        alternates: { canonical: `/resources/${res.slug}` },
    };
}

const typeLabel: Record<string, string> = { guide: "Guide", checklist: "Checklist", template: "Template", whitepaper: "Whitepaper", toolkit: "Toolkit" };

export default function ResourcePage({ params }: { params: { slug: string } }) {
    const res = resources.find((r) => r.slug === params.slug);
    if (!res) return <div>Not found</div>;

    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-4xl relative z-10">
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
                    <Link href="https://app.remova.org/register"
                        className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3">
                        <Download className="h-5 w-5" /> Get Free Access
                    </Link>
                </div>
            </section>

            <article className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl space-y-12">
                    {res.sections.map((section, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
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

            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.9]">
                        Ready to Implement?
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Go from reading to doing. Deploy Remova and implement these best practices in minutes.
                    </p>
                    <Link href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                        Start Free Trial <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
