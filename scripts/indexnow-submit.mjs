import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_SITE_URL = process.env.SITE_URL || 'https://www.remova.org';
const DEFAULT_KEY = process.env.INDEXNOW_KEY || '46ebee162258410498cda9d9445aabe3';
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
const DEFAULT_SITEMAP_PATHS = ['/sitemap.xml', '/news-sitemap.xml', '/video-sitemap.xml'];
const configuredBatchSize = Number(process.env.INDEXNOW_BATCH_SIZE || 10000);
const MAX_URLS_PER_REQUEST = Number.isFinite(configuredBatchSize) && configuredBatchSize > 0
  ? configuredBatchSize
  : 10000;
const dryRun = process.argv.includes('--dry-run') || process.env.INDEXNOW_DRY_RUN === '1';

function toHost(siteUrl) {
  return new URL(siteUrl).host;
}

function buildKeyLocation(siteUrl, key) {
  return `${siteUrl.replace(/\/$/, '')}/${key}.txt`;
}

function extractLocUrls(sitemapXml) {
  const matches = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1].trim()).filter(Boolean);
}

function sitemapUrlsFromEnv(siteUrl) {
  const configured = process.env.INDEXNOW_SITEMAP_URLS || process.env.INDEXNOW_SITEMAP_URL;
  if (configured) {
    return configured.split(',').map((url) => url.trim()).filter(Boolean);
  }

  return DEFAULT_SITEMAP_PATHS.map((pathName) => `${siteUrl.replace(/\/$/, '')}${pathName}`);
}

async function readSitemapXmls(siteUrl) {
  if (process.env.INDEXNOW_SITEMAP_FILE) {
    return [await fs.readFile(process.env.INDEXNOW_SITEMAP_FILE, 'utf8')];
  }

  const sitemapUrls = sitemapUrlsFromEnv(siteUrl);
  const explicitSitemapUrls = Boolean(process.env.INDEXNOW_SITEMAP_URLS || process.env.INDEXNOW_SITEMAP_URL);
  const sitemapXmls = [];

  for (const sitemapUrl of sitemapUrls) {
    const sitemapPath = new URL(sitemapUrl).pathname;
    const localPath = path.resolve(process.cwd(), 'out', sitemapPath.replace(/^\//, ''));

    if (!explicitSitemapUrls) {
      try {
        sitemapXmls.push(await fs.readFile(localPath, 'utf8'));
        continue;
      } catch {
        // Fall back to the live sitemap below when a local export is unavailable.
      }
    }

    const res = await fetch(sitemapUrl);
    if (!res.ok) {
      throw new Error(`Unable to fetch sitemap from ${sitemapUrl} (HTTP ${res.status})`);
    }
    sitemapXmls.push(await res.text());
  }

  return sitemapXmls;
}

function chunkUrls(urls) {
  const chunks = [];

  for (let index = 0; index < urls.length; index += MAX_URLS_PER_REQUEST) {
    chunks.push(urls.slice(index, index + MAX_URLS_PER_REQUEST));
  }

  return chunks;
}

async function main() {
  const siteUrl = DEFAULT_SITE_URL.replace(/\/$/, '');
  const host = process.env.INDEXNOW_HOST || toHost(siteUrl);
  const key = DEFAULT_KEY;
  const keyLocation = process.env.INDEXNOW_KEY_LOCATION || buildKeyLocation(siteUrl, key);

  const sitemapXmls = await readSitemapXmls(siteUrl);
  const urlList = Array.from(new Set(
    sitemapXmls.flatMap(extractLocUrls).filter((url) => {
      try {
        return new URL(url).host === host;
      } catch {
        return false;
      }
    })
  ));

  if (urlList.length === 0) {
    throw new Error('No URLs found in sitemap for the configured host.');
  }

  if (dryRun) {
    console.log('[IndexNow] Dry run enabled.');
    console.log(`[IndexNow] Host: ${host}`);
    console.log(`[IndexNow] Sitemaps loaded: ${sitemapXmls.length}`);
    console.log(`[IndexNow] Unique URLs queued: ${urlList.length}`);
    console.log(`[IndexNow] Key location: ${keyLocation}`);
    return;
  }

  const batches = chunkUrls(urlList);

  for (const [batchIndex, batchUrls] of batches.entries()) {
    const payload = {
      host,
      key,
      keyLocation,
      urlList: batchUrls,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const bodyText = await response.text();
    console.log(`[IndexNow] Batch ${batchIndex + 1}/${batches.length}: HTTP ${response.status} (${batchUrls.length} URLs)`);
    if (bodyText.trim()) {
      console.log(`[IndexNow] Body: ${bodyText}`);
    }

    if (!response.ok) {
      process.exitCode = 1;
    }
  }
}

main().catch((error) => {
  console.error('[IndexNow] Error:', error.message);
  process.exit(1);
});
