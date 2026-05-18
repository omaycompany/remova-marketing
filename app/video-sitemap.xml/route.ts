import { allBlogPosts } from "@/content/blog";
import { modelVideos } from "@/content/model-videos";
import { useCases } from "@/content/use-cases";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import { durationToSeconds, featureHeroVideo, type IndexedVideoEntry } from "@/lib/video-seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export function GET() {
    const videoEntries: IndexedVideoEntry[] = [
        ...modelVideos.map((video) => ({
            pagePath: `/models/${video.slug}`,
            title: video.title,
            description: video.description,
            contentUrl: video.contentUrl,
            thumbnailUrl: video.thumbnailUrl,
            duration: video.duration,
            durationSeconds: video.durationSeconds,
            uploadDate: video.uploadDate,
            transcript: video.transcript,
            tags: video.keywords,
        })),
        featureHeroVideo,
        ...useCases.flatMap((useCase) => {
            if (!useCase.video) return [];

            return [{
                pagePath: `/use-cases/${useCase.slug}`,
                title: useCase.video.title,
                description: useCase.video.description,
                contentUrl: useCase.video.contentUrl,
                thumbnailUrl: useCase.video.thumbnailUrl,
                duration: useCase.video.duration,
                durationSeconds: durationToSeconds(useCase.video.duration),
                uploadDate: useCase.video.uploadDate,
                transcript: useCase.video.transcript,
                tags: [
                    useCase.headline,
                    `${useCase.headline} video`,
                    "enterprise AI use case",
                    "AI governance",
                    "Remova",
                ],
            }];
        }),
        ...allBlogPosts.flatMap((post) => {
            if (!post.video) return [];

            return [{
                pagePath: `/blog/${post.slug}`,
                title: post.video.title,
                description: post.video.description,
                contentUrl: post.video.contentUrl,
                thumbnailUrl: post.video.thumbnailUrl,
                duration: post.video.duration,
                durationSeconds: durationToSeconds(post.video.duration),
                uploadDate: post.video.uploadDate,
                transcript: post.video.transcript,
                tags: [
                    post.title,
                    post.category,
                    `${post.title} video`,
                    "enterprise AI governance",
                    "Remova",
                ],
            }];
        }),
    ];

    const urls = videoEntries
        .map((video) => {
            const pageUrl = `${SITE_URL}${video.pagePath}`;
            return `
    <url>
        <loc>${escapeXml(pageUrl)}</loc>
        <video:video>
            <video:thumbnail_loc>${escapeXml(absoluteUrl(video.thumbnailUrl))}</video:thumbnail_loc>
            <video:title>${escapeXml(video.title)}</video:title>
            <video:description>${escapeXml(video.description)}</video:description>
            <video:content_loc>${escapeXml(absoluteUrl(video.contentUrl))}</video:content_loc>
            <video:duration>${video.durationSeconds}</video:duration>
            <video:publication_date>${escapeXml(`${video.uploadDate}T00:00:00+00:00`)}</video:publication_date>
            <video:family_friendly>yes</video:family_friendly>
            ${video.tags.map((keyword) => `<video:tag>${escapeXml(keyword)}</video:tag>`).join("\n            ")}
        </video:video>
    </url>`;
        })
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${urls}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
        },
    });
}
