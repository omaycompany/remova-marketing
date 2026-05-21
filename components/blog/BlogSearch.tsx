"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

export type BlogSearchPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    imageSrc: string;
    imageAlt: string;
    searchText: string;
};

function normalize(value: string) {
    return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function scorePost(post: BlogSearchPost, normalizedQuery: string) {
    if (!normalizedQuery) return 0;

    const terms = normalizedQuery.split(" ").filter(Boolean);
    const title = normalize(post.title);
    const category = normalize(post.category);
    const excerpt = normalize(post.excerpt);
    const searchText = normalize(post.searchText);
    let score = 0;

    if (title === normalizedQuery) score += 120;
    if (title.includes(normalizedQuery)) score += 80;
    if (category.includes(normalizedQuery)) score += 45;
    if (excerpt.includes(normalizedQuery)) score += 35;
    if (searchText.includes(normalizedQuery)) score += 20;

    for (const term of terms) {
        if (title.includes(term)) score += 12;
        if (category.includes(term)) score += 8;
        if (excerpt.includes(term)) score += 5;
        if (searchText.includes(term)) score += 2;
    }

    return score;
}

export default function BlogSearch({ posts }: { posts: BlogSearchPost[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const [query, setQuery] = useState(searchParams.get("q") ?? "");
    const normalizedQuery = normalize(query);

    const results = useMemo(() => {
        if (!normalizedQuery) return [];

        return posts
            .map((post) => ({ post, score: scorePost(post, normalizedQuery) }))
            .filter((entry) => entry.score > 0)
            .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date) || a.post.title.localeCompare(b.post.title))
            .slice(0, 18)
            .map((entry) => entry.post);
    }, [normalizedQuery, posts]);

    function updateQuery(value: string) {
        setQuery(value);
        const params = new URLSearchParams(searchParams.toString());
        const trimmed = value.trim();
        if (trimmed) {
            params.set("q", trimmed);
        } else {
            params.delete("q");
        }
        const next = params.toString();
        router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
    }

    function clearSearch() {
        updateQuery("");
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-5">
            <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <label htmlFor="blog-search" className="sr-only">
                    Search Remova blog articles
                </label>
                <input
                    id="blog-search"
                    type="search"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    placeholder={`Search ${posts.length} articles by topic, tool, risk, or framework`}
                    className="h-14 w-full rounded-xl border border-slate-300 bg-white pl-12 pr-12 text-base font-bold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-white/15 dark:bg-[#131314] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-300 dark:focus:ring-blue-300/10"
                    autoComplete="off"
                />
                {query ? (
                    <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
                        aria-label="Clear blog search"
                    >
                        <X className="h-5 w-5" />
                    </button>
                ) : null}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                <span>
                    {normalizedQuery
                        ? `${results.length} result${results.length === 1 ? "" : "s"} for "${query.trim()}"`
                        : "Search titles, summaries, categories, section headings, and FAQs."}
                </span>
                <span className="text-blue-700 dark:text-blue-300">
                    Try: AI security, Copilot, prompt injection, ISO 42001
                </span>
            </div>

            {normalizedQuery ? (
                <div className="mt-5">
                    {results.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {results.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-[#131314] dark:hover:border-blue-300/50"
                                >
                                    <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-white/5">
                                        <img
                                            src={post.imageSrc}
                                            alt={post.imageAlt}
                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                                            <span className="text-blue-700 dark:text-blue-300">{post.category}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="line-clamp-2 text-base font-black leading-snug text-slate-950 underline-offset-4 group-hover:text-blue-700 group-hover:underline dark:text-white dark:group-hover:text-blue-300">
                                            {post.title}
                                        </h3>
                                        <p className="mt-3 line-clamp-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                            {post.excerpt}
                                        </p>
                                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-slate-950 transition group-hover:gap-3 dark:text-white">
                                            Read article <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center dark:border-white/20 dark:bg-[#131314]">
                            <h3 className="text-xl font-black text-slate-950 dark:text-white">No matching articles yet</h3>
                            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                Try a broader topic such as AI security, data protection, coding, customer service, compliance, or model routing.
                            </p>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
}
