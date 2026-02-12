import { Metadata } from "next";
import Link from "next/link";
import { customerStories } from "@/content/customer-stories";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Customer Stories | Remova — Enterprise AI Success Stories",
    description: "See how Fortune 500 companies, law firms, healthcare systems, and government agencies use Remova for enterprise AI governance.",
    openGraph: { title: "Customer Stories | Remova", description: "Real results from enterprise AI governance.", url: "https://remova.org/customers", siteName: "Remova", type: "website" },
    alternates: { canonical: "/customers" },
};

export default function CustomersIndex() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.85]">
                        Customer Stories
                    </h1>
                    <p className="max-w-3xl text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        See how leading organizations use Remova to govern enterprise AI — from Fortune 500 banks to clinical-stage biotechs.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
                    {customerStories.map((story) => (
                        <Link key={story.slug} href={`/customers/${story.slug}`}
                            className="group p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all hover:shadow-xl bg-white dark:bg-white/[0.02]">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300">
                                    <Building2 className="h-3 w-3" /> {story.industry}
                                </span>
                                <span className="text-xs text-slate-400 dark:text-slate-500">{story.companySize}</span>
                            </div>
                            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
                                {story.headline}
                            </h2>
                            <div className="flex flex-wrap gap-4 mb-6">
                                {story.results.slice(0, 2).map((r, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">{r.value}</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400">{r.metric}</span>
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Story <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
