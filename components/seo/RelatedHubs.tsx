import Link from "next/link";

interface RelatedHub {
    href: string;
    label: string;
}

interface RelatedHubsProps {
    title?: string;
    hubs: RelatedHub[];
}

export default function RelatedHubs({ title = "Related Hubs", hubs }: RelatedHubsProps) {
    if (!hubs.length) return null;

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
            <div className="container mx-auto max-w-6xl">
                <h2 className="mb-6 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.92]">
                    {title}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {hubs.map((hub) => (
                        <Link
                            key={hub.href}
                            href={hub.href}
                            className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131314] px-4 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            {hub.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
