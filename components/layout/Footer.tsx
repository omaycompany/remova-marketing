import Link from "next/link";
import Image from "next/image";
import { Shield, Twitter, Linkedin, Github, Globe } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] pt-16 pb-12 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-6 lg:gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src="/images/remova logo (4).png"
                                alt="Remova Logo"
                                width={160}
                                height={45}
                                className="h-12 w-auto object-contain dark:brightness-0 dark:invert"
                            />
                        </Link>
                        <p className="mb-6 max-w-sm text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            The enterprise safety layer for LLMs. Protect your organization
                            with granular cost controls, PII redaction, and dual-layer guardrails.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github, Globe].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="rounded-full bg-slate-200 dark:bg-white/10 p-2 text-slate-600 dark:text-white transition hover:bg-slate-300 dark:hover:bg-white/20"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {[
                        {
                            title: "Product",
                            links: [
                                { name: "Cost Control", href: "/#safety" },
                                { name: "Guardrails", href: "/#safety" },
                                { name: "Data Redaction", href: "/#safety" },
                                { name: "Capabilities", href: "/#product" }
                            ],
                        },
                        {
                            title: "Company",
                            links: [
                                { name: "About Us", href: "/#resources" },
                                { name: "Careers", href: "mailto:notifications@remova.org?subject=Careers Inquiry" },
                                { name: "Blog", href: "/#resources" },
                                { name: "Contact", href: "mailto:notifications@remova.org?subject=General Inquiry" }
                            ],
                        },
                        {
                            title: "Resources",
                            links: [
                                { name: "Documentation", href: "mailto:notifications@remova.org?subject=Documentation%20Request" },
                                { name: "API Reference", href: "mailto:notifications@remova.org?subject=API%20Access%20Request" },
                                { name: "Support", href: "mailto:notifications@remova.org?subject=Support%20Request" },
                                { name: "Security", href: "mailto:notifications@remova.org?subject=Security%20Inquiry" }
                            ],
                        },
                        {
                            title: "Legal",
                            links: [
                                { name: "Privacy Policy", href: "#" },
                                { name: "Terms of Service", href: "#" },
                                { name: "Cookie Policy", href: "#" },
                                { name: "DPA", href: "#" }
                            ],
                        },
                    ].map((col, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                                {col.title}
                            </h4>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 border-t border-slate-200 dark:border-white/10 pt-8 text-center sm:text-left">
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        &copy; {currentYear} Remova Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
