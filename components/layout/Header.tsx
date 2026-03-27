"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ExternalAppLink from "@/components/ui/ExternalAppLink";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = [
        { label: "Features", href: "/features" },
        { label: "Models", href: "/models" },
        { label: "Blog", href: "/blog" },
        { label: "Glossary", href: "/glossary" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#131314]/80 backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/images/remova logo (4).png"
                            alt="Remova Logo"
                            width={180}
                            height={50}
                            className="h-16 w-auto object-contain transition-transform group-hover:scale-105 dark:brightness-0 dark:invert"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-5 py-2.5 text-sm font-bold text-white dark:text-slate-900 transition hover:scale-105 active:scale-95"
                        >
                            Get Started
                        </ExternalAppLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314]">
                    <div className="space-y-1 px-4 py-6">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="block px-3 py-4 text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-6 flex flex-col gap-4 px-3">
                            <ExternalAppLink
                                href="https://app.remova.org/register"
                                className="w-full rounded-[2rem] bg-slate-900 dark:bg-white py-3 text-center text-base font-bold text-white dark:text-slate-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </ExternalAppLink>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
