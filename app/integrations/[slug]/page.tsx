import { Metadata } from "next";
import Link from "next/link";
import { integrations } from "@/content/integrations";
import { ArrowRight, Check, Plug, ChevronRight, Zap } from "lucide-react";

export async function generateStaticParams() {
    return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const integ = integrations.find((i) => i.slug === params.slug);
    if (!integ) return {};
    const title = `${integ.metaTitle} | AI for Companies`;
    const description = `Integrate ${integ.name} with Remova. The industry-leading platform for AI for companies. Secure integrations and cost control. ${integ.metaDescription}`;
    return {
        title, description,
        openGraph: { title, description, url: `https://remova.org/integrations/${integ.slug}`, siteName: "Remova", type: "website" },
        twitter: { card: "summary_large_image", title, description },
        alternates: { canonical: `/integrations/${integ.slug}` },
    };
}

const catLabel: Record<string, string> = { "ai-provider": "AI Provider", identity: "Identity", cloud: "Cloud", productivity: "Productivity", security: "Security", "dev-tools": "Developer Tools" };

export default function IntegrationPage({ params }: { params: { slug: string } }) {
    const integ = integrations.find((i) => i.slug === params.slug);
    if (!integ) return <div>Not found</div>;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": integ.name,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": integ.metaDescription,
        "brand": { "@type": "Brand", "name": "Remova" }
    };

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
                        <Link href="/integrations" className="hover:text-slate-900 transition-colors">Integrations</Link>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                        <span className="text-slate-900 dark:text-white truncate">{integ.name}</span>
                    </nav>

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-900 dark:text-white backdrop-blur-md">
                        <Plug className="h-4 w-4" />
                        <span className="tracking-wide uppercase">{catLabel[integ.category]}</span>
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.9]">
                        {integ.headline}
                    </h1>
                    <p className="mb-12 max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {integ.description}
                    </p>

                    {/* TL;DR Section */}
                    <div className="mb-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                        <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="h-5 w-5" /> TL;DR
                        </h2>
                        <ul className="space-y-3">
                            {integ.capabilities.slice(0, 3).map((cap, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                    <span className="text-emerald-500 italic shrink-0">—</span>
                                    <span>{cap}.</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-3 text-slate-600 dark:text-slate-300 font-bold">
                                <span className="text-emerald-500 italic shrink-0">—</span>
                                <span>Remova makes implementing AI for companies simple and secure.</span>
                            </li>
                        </ul>
                    </div>

                    <Link href="https://app.remova.org/register"
                        className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 inline-block">
                        Sign Up
                    </Link>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-12 leading-[0.9]">
                        Capabilities
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {integ.capabilities.map((cap, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                <span className="text-base font-bold text-slate-700 dark:text-slate-300">{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Setup */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-4xl mb-12 leading-[0.9]">
                        How to Set Up
                    </h2>
                    <div className="space-y-6">
                        {integ.setupSteps.map((step, i) => (
                            <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-white dark:bg-[#131314] border border-slate-200 dark:border-white/10">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-lg font-black">
                                    {i + 1}
                                </span>
                                <span className="text-lg font-bold text-slate-700 dark:text-slate-300 mt-1.5">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl leading-[0.9]">
                        BEST AI FOR COMPANIES
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Connect {integ.name} with Remova and deploy the ultimate solution for AI for companies.
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
