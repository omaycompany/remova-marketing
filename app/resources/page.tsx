import { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import LeadMagnetSection from "@/components/marketing/LeadMagnetSection";

export const metadata: Metadata = {
    title: "Enterprise AI Resources and Docs",
    description: "Download comprehensive guides, checklists, and documentation on enterprise AI governance and security.",
};

const resources = [
    {
        title: "Ultimate Guide to Trade Privacy 2025",
        description: "A comprehensive manual on protecting your supply chain data from being ingested by third-party models.",
        href: "/docs/ultimate-guide-trade-privacy-2025.pdf"
    },
    {
        title: "ImportYeti Removal Guide",
        description: "Step-by-step instructions for identifying and removing sensitive organizational data from public trade databases.",
        href: "/docs/importyeti-removal-guide.pdf"
    },
    {
        title: "Panjiva Removal Protocol",
        description: "Technical workflow for executing data removal requests with global trade intelligence platforms.",
        href: "/docs/resources/panjiva-removal.pdf"
    }
];

export default function ResourcesPage() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-48 pb-24 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className="mb-6 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl">
                        Resources & Docs
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 font-medium">
                        Technical guides, regulatory playbooks, and documentation for securing your enterprise AI operations.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {resources.map((res) => (
                            <Link 
                                key={res.title} 
                                href={res.href}
                                className="group block p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] hover:border-slate-400 dark:hover:border-white/30 transition-all"
                            >
                                <FileText className="h-8 w-8 mb-4 text-slate-900 dark:text-white" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {res.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">
                                    {res.description}
                                </p>
                                <div className="flex items-center text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider group-hover:underline">
                                    Download PDF <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <LeadMagnetSection magnet="policy-generator" tone="slate" />
        </div>
    );
}
