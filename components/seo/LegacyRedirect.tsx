"use client";

import { useEffect } from "react";

interface LegacyRedirectProps {
    to: string;
    preserveSearch?: boolean;
}

export default function LegacyRedirect({ to, preserveSearch = false }: LegacyRedirectProps) {
    useEffect(() => {
        const target = new URL(to, window.location.origin);
        if (preserveSearch && window.location.search && !target.search) {
            target.search = window.location.search;
        }
        window.location.replace(target.toString());
    }, [preserveSearch, to]);

    return (
        <main className="min-h-screen bg-white px-6 py-24 text-slate-900 dark:bg-[#131314] dark:text-white">
            <meta httpEquiv="refresh" content={`0;url=${to}`} />
            <div className="mx-auto max-w-xl">
                <p className="mb-3 text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Page moved
                </p>
                <h1 className="mb-5 text-4xl font-black tracking-tighter">Redirecting to Remova</h1>
                <p className="mb-8 text-base leading-7 text-slate-600 dark:text-slate-300">
                    This old URL now points to a current Remova page.
                </p>
                <a
                    href={to}
                    className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                    Continue
                </a>
            </div>
        </main>
    );
}
