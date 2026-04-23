/**
 * generate-feed.mjs
 *
 * Generates a static RSS 2.0 feed at out/feed.xml after `next build`.
 * Run: node scripts/generate-feed.mjs
 * Or as part of build: "build": "next build && node scripts/generate-feed.mjs"
 *
 * Imports blog data via a JSON snapshot written during build, or falls back
 * to reading the content file directly (works in a plain Node context).
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(ROOT, 'out');

const SITE_URL = 'https://www.remova.org';
const SITE_NAME = 'Remova';

// ---------------------------------------------------------------------------
// Read blog posts from the compiled content file via a dynamic import shim
// ---------------------------------------------------------------------------
async function getBlogPosts() {
    // Try to read from a JSON snapshot first (fastest)
    const snapshotPath = path.join(OUT_DIR, 'blog-posts-snapshot.json');
    try {
        const raw = await fs.readFile(snapshotPath, 'utf8');
        return JSON.parse(raw);
    } catch {
        // Fall back to parsing the TypeScript source file manually
        const contentPath = path.resolve(ROOT, 'content', 'blog.ts');
        const src = await fs.readFile(contentPath, 'utf8');

        // Extract slug and date pairs from the rawBlogPosts array
        const slugDates = [...src.matchAll(/p\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"/g)]
            .map(m => ({
                slug: m[1],
                title: m[2],
                metaDescription: m[3],
                category: m[4],
                date: m[5],
            }));

        const today = new Date().toISOString().split('T')[0];
        return slugDates
            .filter(p => p.date <= today)
            .sort((a, b) => b.date.localeCompare(a.date));
    }
}

async function generateFeed() {
    const posts = await getBlogPosts();
    const latest = posts[0];

    if (!latest) {
        console.log('[feed] No blog posts found, skipping feed generation.');
        return;
    }

    const latestDate = new Date(`${latest.date}T00:00:00.000Z`).toUTCString();

    const items = posts.slice(0, 20).map(post => {
        const postUrl = `${SITE_URL}/blog/${post.slug}`;
        const pubDate = new Date(`${post.date}T00:00:00.000Z`).toUTCString();
        const modDate = new Date(`${(post.lastModified || post.date)}T00:00:00.000Z`).toUTCString();
        const desc = (post.metaDescription || post.excerpt || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const title = (post.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <lastBuildDate>${modDate}</lastBuildDate>
      <description><![CDATA[${desc}]]></description>
      <category><![CDATA[${post.category || ''}]]></category>
      <author>notifications@remova.org (Remova)</author>
    </item>`;
    }).join('\n');

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
>
  <channel>
    <title>${SITE_NAME} Blog — Enterprise AI Governance</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical guides on AI governance, policy enforcement, and cost control for enterprise teams.</description>
    <language>en-US</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <pubDate>${latestDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/images/og-image.png</url>
      <title>${SITE_NAME} Blog</title>
      <link>${SITE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

    await fs.mkdir(OUT_DIR, { recursive: true });
    const outPath = path.join(OUT_DIR, 'feed.xml');
    await fs.writeFile(outPath, rss, 'utf8');
    console.log(`[feed] Written ${posts.slice(0, 20).length} posts → ${outPath}`);
}

generateFeed().catch(err => {
    console.error('[feed] Error:', err.message);
    process.exit(1);
});
