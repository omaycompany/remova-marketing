import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LazyModelVideo from "@/components/video/LazyModelVideo";
import { modelLandings } from "@/content/model-landings";
import { getModelVideo, modelVideos } from "@/content/model-videos";
import { SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";
import { modelVideoWatchPath } from "@/lib/video-seo";

export const dynamic = "force-static";

function findLanding(slug: string) {
    return modelLandings.find((entry) => entry.slug === slug);
}

export async function generateStaticParams() {
    return modelVideos.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const video = getModelVideo(params.slug);
    const landing = findLanding(params.slug);
    if (!video || !landing) return {};

    const pagePath = modelVideoWatchPath(video.slug);
    const title = `${video.title} | Remova Video`;
    const videoUrl = absoluteUrl(video.contentUrl);
    const thumbnailUrl = absoluteUrl(video.thumbnailUrl);

    return {
        title: { absolute: title },
        description: video.description,
        keywords: buildKeywords([
            landing.heroTitle,
            `${landing.heroTitle} video`,
            video.title,
            ...video.keywords,
            "Remova video",
            "AI model governance video",
        ]),
        openGraph: {
            title,
            description: video.description,
            url: absoluteUrl(pagePath),
            siteName: SITE_NAME,
            images: [
                {
                    url: thumbnailUrl,
                    width: 1920,
                    height: 1080,
                    alt: video.title,
                },
            ],
            videos: [
                {
                    url: videoUrl,
                    secureUrl: videoUrl,
                    type: "video/mp4",
                    width: 1920,
                    height: 1080,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: video.description,
            images: [thumbnailUrl],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: { canonical: pagePath },
    };
}

export default function ModelVideoWatchPage({ params }: { params: { slug: string } }) {
    const video = getModelVideo(params.slug);
    const landing = findLanding(params.slug);
    if (!video || !landing) notFound();

    const pagePath = modelVideoWatchPath(video.slug);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "@id": absoluteUrl(`${pagePath}#video`),
        name: video.title,
        description: video.description,
        thumbnailUrl: [absoluteUrl(video.thumbnailUrl)],
        uploadDate: video.uploadDate,
        duration: video.duration,
        contentUrl: absoluteUrl(video.contentUrl),
        inLanguage: "en-US",
        transcript: video.transcript,
        keywords: video.keywords.join(", "),
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": absoluteUrl(pagePath),
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/icon.png"),
            },
        },
    };

    return (
        <main className="bg-white text-slate-900 dark:bg-[#131314] dark:text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="px-4 pt-32 pb-12 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <Link
                        href={`/models/${landing.slug}`}
                        className="mb-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {landing.heroTitle}
                    </Link>

                    <div className="mb-8">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            Remova model video
                        </p>
                        <h1 className="max-w-4xl text-4xl font-black leading-[0.92] tracking-tighter text-slate-900 dark:text-white sm:text-6xl">
                            {video.title}
                        </h1>
                        <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            {video.description}
                        </p>
                    </div>

                    <figure id="watch-video" className="overflow-hidden rounded-lg border-2 border-slate-900 bg-white shadow-[0_28px_90px_-45px_rgba(15,23,42,0.55)] dark:border-white dark:bg-[#131314]">
                        <LazyModelVideo video={video} />
                    </figure>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href={`/models/${landing.slug}`}
                            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-black text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            Model profile
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://app.remova.org/register"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-900 transition-colors hover:border-slate-900 dark:border-white/20 dark:text-white dark:hover:border-white"
                        >
                            Try in Remova
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-100 bg-slate-50 px-4 py-12 dark:border-white/5 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="mb-4 text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                        Transcript
                    </h2>
                    <p className="max-w-4xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        {video.transcript}
                    </p>
                </div>
            </section>
        </main>
    );
}
