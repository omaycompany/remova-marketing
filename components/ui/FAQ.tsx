"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!items || items.length === 0) return null;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto max-w-4xl">
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-1.5 text-sm font-bold text-slate-900 dark:text-white">
                        <HelpCircle className="h-4 w-4" /> <span>Knowledge Hub</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                        {title}
                    </h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group border-2 border-slate-900 dark:border-white rounded-3xl overflow-hidden bg-white dark:bg-[#131314] transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
                                    {item.question}
                                </span>
                                <div className="ml-4 shrink-0 h-10 w-10 rounded-full border-2 border-slate-900 dark:border-white flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all">
                                    {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-8 pb-8 text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed border-t-2 border-slate-900/10 dark:border-white/10 pt-6">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
