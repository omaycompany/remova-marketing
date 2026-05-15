import type { Metadata } from "next";
import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { allBlogPosts } from "@/content/blog";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyBlogCategoryRedirect, legacyBlogCategoryStaticParams } from "@/lib/legacy-redirects";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, legacyRedirectMetadata } from "@/lib/seo";

function categorySlug(category: string) {
    return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function categoryFromSlug(slug: string) {
    return Array.from(new Set(allBlogPosts.map((post) => post.category))).find((category) => categorySlug(category) === slug);
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
        slug: categorySlug(category),
    }));

    return [...currentCategoryParams, ...legacyBlogCategoryStaticParams];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const category = categoryFromSlug(params.slug);
    if (category) {
        return {
            title: `${category} AI Articles`,
            description: `Read Remova articles about ${category.toLowerCase()} for enterprise AI governance, security, compliance, and operations teams.`,
            openGraph: {
                title: `${category} AI Articles`,
                description: `Read Remova articles about ${category.toLowerCase()} for enterprise AI teams.`,
                url: absoluteUrl(`/blog/category/${params.slug}`),
                siteName: SITE_NAME,
                images: [DEFAULT_OG_IMAGE],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: `${category} AI Articles`,
                description: `Read Remova articles about ${category.toLowerCase()} for enterprise AI teams.`,
                images: [DEFAULT_OG_IMAGE_URL],
            },
            alternates: { canonical: `/blog/category/${params.slug}` },
        };
    }

    return legacyRedirectMetadata(getLegacyBlogCategoryRedirect(params.slug) ?? "/blog");
}

export default function BlogCategoryLegacyPage({ params }: { params: { slug: string } }) {
    const category = categoryFromSlug(params.slug);
    if (category) {
        const posts = allBlogPosts.filter((post) => post.category === category);

        return (
            <div className="bg-white px-4 pb-20 pt-36 dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-10 border-b border-slate-200 pb-8 dark:border-white/10">
                        <Link href="/blog" className="mb-5 inline-flex text-sm font-black text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100">
                            &lt;- Back to blog
                        </Link>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">Category</p>
                        <h1 className="text-5xl font-black tracking-tighter text-slate-950 sm:text-6xl dark:text-white">{category}</h1>
                        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            {posts.length} articles for enterprise AI teams working on {category.toLowerCase()}.
                        </p>
                    </div>

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
