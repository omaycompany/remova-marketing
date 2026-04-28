import { modelVideos } from "@/content/model-videos";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

function escapeXml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export function GET() {
    const urls = modelVideos
        .map((video) => {
            const pageUrl = `${SITE_URL}/models/${video.slug}`;
            return `
    <url>
        <loc>${escapeXml(pageUrl)}</loc>
        <video:video>
            <video:thumbnail_loc>${escapeXml(absoluteUrl(video.thumbnailUrl))}</video:thumbnail_loc>
            <video:title>${escapeXml(video.title)}</video:title>
            <video:description>${escapeXml(video.description)}</video:description>
            <video:content_loc>${escapeXml(absoluteUrl(video.contentUrl))}</video:content_loc>
            <video:player_loc>${escapeXml(`${pageUrl}#model-video`)}</video:player_loc>
            <video:duration>${video.durationSeconds}</video:duration>
            <video:publication_date>${escapeXml(`${video.uploadDate}T00:00:00+00:00`)}</video:publication_date>
            <video:family_friendly>yes</video:family_friendly>
            ${video.keywords.map((keyword) => `<video:tag>${escapeXml(keyword)}</video:tag>`).join("\n            ")}
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
