import type { Metadata } from "next";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { allBlogPosts } from "@/content/blog";
import { blogCategoryPath, blogCategorySlug, getBlogCategoryHub, getBlogCategorySeo } from "@/content/blog-taxonomy";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyBlogCategoryRedirect, legacyBlogCategoryStaticParams } from "@/lib/legacy-redirects";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords, legacyRedirectMetadata } from "@/lib/seo";

function categoryFromSlug(slug: string) {
    return Array.from(new Set(allBlogPosts.map((post) => post.category))).find((category) => blogCategorySlug(category) === slug);
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00.000Z`));
}

function postImageSrc(post: BlogPost) {
    const rasterImage = post.images?.find((image) => /\.(png|jpe?g|webp|avif)(\?|$)/i.test(image.src));
    if (rasterImage) return rasterImage.src;
    if (post.video?.thumbnailUrl && /\.(png|jpe?g|webp|avif)(\?|$)/i.test(post.video.thumbnailUrl)) return post.video.thumbnailUrl;
    return DEFAULT_OG_IMAGE_URL;
}

function postImageAlt(post: BlogPost) {
    const rasterImage = post.images?.find((image) => /\.(png|jpe?g|webp|avif)(\?|$)/i.test(image.src));
    return rasterImage?.alt ?? post.video?.title ?? `${post.title} article visual`;
}

export async function generateStaticParams() {
    const currentCategoryParams = Array.from(new Set(allBlogPosts.map((post) => post.category))).map((category) => ({
        slug: blogCategorySlug(category),
    }));

    return [...currentCategoryParams, ...legacyBlogCategoryStaticParams];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const category = categoryFromSlug(params.slug);
    if (category) {
        const seo = getBlogCategorySeo(category);
        const canonicalPath = blogCategoryPath(category);
        return {
            title: seo.title,
            description: seo.description,
            keywords: buildKeywords([
                category,
                "enterprise ai blog",
                "ai tools",
                ...seo.keywords,
            ]),
            openGraph: {
                title: seo.title,
                description: seo.description,
                url: absoluteUrl(canonicalPath),
                siteName: SITE_NAME,
                images: [DEFAULT_OG_IMAGE],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: seo.title,
                description: seo.description,
                images: [DEFAULT_OG_IMAGE_URL],
            },
            alternates: { canonical: canonicalPath },
        };
    }

    return legacyRedirectMetadata(getLegacyBlogCategoryRedirect(params.slug) ?? "/blog");
}

export default function BlogCategoryLegacyPage({ params }: { params: { slug: string } }) {
    const category = categoryFromSlug(params.slug);
    if (category) {
        const posts = allBlogPosts.filter((post) => post.category === category);
        const seo = getBlogCategorySeo(category);
        const hub = getBlogCategoryHub(category);

        return (
            <div className="bg-white px-4 pb-20 pt-36 dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-10 border-b border-slate-200 pb-8 dark:border-white/10">
                        <Link href="/blog" className="mb-5 inline-flex text-sm font-black text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100">
                            &lt;- Back to blog
                        </Link>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">Category</p>
                        <h1 className="text-5xl font-black tracking-tighter text-slate-950 sm:text-6xl dark:text-white">{seo.title}</h1>
                        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            {seo.description} Browse {posts.length} articles in this topic.
                        </p>
                    </div>

                    <section className="mb-10 grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1fr_1.1fr] lg:p-8">
                        <div>
                            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                                How to use this hub
                            </p>
                            <p className="text-base font-medium leading-8 text-slate-700 dark:text-slate-300">
                                {hub.positioning}
                            </p>
                            <p className="mt-4 text-base font-medium leading-8 text-slate-700 dark:text-slate-300">
                                {hub.useWhen}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#131314]">
                            <h2 className="mb-4 text-xl font-black tracking-tight text-slate-950 dark:text-white">
                                Decisions this topic should help you make
                            </h2>
                            <ul className="space-y-3">
                                {hub.decisions.map((decision) => (
                                    <li key={decision} className="flex gap-3 text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-300" />
                                        <span>{decision}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {hub.fieldNotes?.length ? (
                            <div className="border-t border-slate-200 pt-6 dark:border-white/10 lg:col-span-2">
                                <h2 className="mb-4 text-xl font-black tracking-tight text-slate-950 dark:text-white">
                                    What good work looks like
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {hub.fieldNotes.map((note) => (
                                        <p key={note} className="text-sm font-bold leading-7 text-slate-700 dark:text-slate-300">
                                            {note}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </section>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                                <div className="mb-4 aspect-[16/9] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                                    <img
                                        src={postImageSrc(post)}
                                        alt={postImageAlt(post)}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                </div>
                                <h2 className="mb-3 line-clamp-2 text-lg font-black leading-tight text-slate-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                                    {post.title}
                                </h2>
                                <p className="mb-4 line-clamp-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                                <div className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
                                    <span>{post.author ?? "Remova"}</span>
                                    <span>{formatDate(post.date)}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return <LegacyRedirect to={getLegacyBlogCategoryRedirect(params.slug) ?? "/blog"} />;
}
