import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t-2 border-slate-900 dark:border-white bg-white dark:bg-[#131314] pt-24 pb-12 transition-colors duration-300 overflow-hidden">
            {/* Subtle decorative element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-slate-100 dark:bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-16 lg:grid-cols-6 lg:gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-block mb-8 group">
                            <Image
                                src="/images/remova logo (4).png"
                                alt="Remova Logo"
                                width={180}
                                height={50}
                                className="h-14 w-auto object-contain dark:brightness-0 dark:invert transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="mb-8 max-w-sm text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                            The definitive enterprise protocol for LLM safety.
                            Implementing granular cost controls and real-time PII protection across the global intelligence stack.
                        </p>
                        <div className="flex gap-5">
                            <a
                                href="https://www.linkedin.com/company/remova.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-xl border border-slate-200 dark:border-white/10 p-3 text-slate-600 dark:text-slate-400 transition-all hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
                            >
                                <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {[
                        {
                            title: "System",
                            links: [
                                { name: "Safety Layer", href: "/#safety" },
                                { name: "Core Engine", href: "/#product" },
                                { name: "Compliance", href: "/#compliance" },
                                { name: "Licensing", href: "/#pricing" }
                            ],
                        },
                        {
                            title: "Organization",
                            links: [
                                { name: "Why Remova?", href: "/#resources" },
                                { name: "Careers", href: "mailto:notifications@remova.org?subject=Careers Inquiry" },
                                { name: "Contact", href: "mailto:notifications@remova.org?subject=General Inquiry" }
                            ],
                        },
                        {
                            title: "Support",
                            links: [
                                { name: "Documentation", href: "mailto:notifications@remova.org?subject=Documentation%20Request" },
                                { name: "API Reference", href: "mailto:notifications@remova.org?subject=API%20Access%20Request" },
                                { name: "Security Unit", href: "mailto:notifications@remova.org?subject=Security%20Inquiry" }
                            ],
                        },
                        {
                            title: "Legal",
                            links: [
                                { name: "Privacy Policy", href: "/privacy" },
                                { name: "Terms of Service", href: "/terms" },
                                { name: "Legal Inquiry", href: "mailto:notifications@remova.org?subject=Legal%20Inquiry" }
                            ],
                        },
                    ].map((col, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                                {col.title}
                            </h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-base font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative group inline-block"
                                        >
                                            {link.name}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 dark:bg-white transition-all group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-24 border-t-2 border-slate-900 dark:border-white pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                        &copy; {currentYear} Remova. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
