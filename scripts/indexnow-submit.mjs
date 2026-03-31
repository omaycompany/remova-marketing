import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_SITE_URL = process.env.SITE_URL || 'https://www.remova.org';
const DEFAULT_KEY = process.env.INDEXNOW_KEY || '46ebee162258410498cda9d9445aabe3';
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
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

async function readSitemapXml() {
  if (process.env.INDEXNOW_SITEMAP_FILE) {
    return fs.readFile(process.env.INDEXNOW_SITEMAP_FILE, 'utf8');
  }

  const defaultPath = path.resolve(process.cwd(), 'out', 'sitemap.xml');
  try {
    return await fs.readFile(defaultPath, 'utf8');
  } catch {
    const sitemapUrl = process.env.INDEXNOW_SITEMAP_URL || `${DEFAULT_SITE_URL.replace(/\/$/, '')}/sitemap.xml`;
    const res = await fetch(sitemapUrl);
    if (!res.ok) {
      throw new Error(`Unable to fetch sitemap from ${sitemapUrl} (HTTP ${res.status})`);
    }
    return res.text();
  }
}

async function main() {
  const siteUrl = DEFAULT_SITE_URL.replace(/\/$/, '');
  const host = process.env.INDEXNOW_HOST || toHost(siteUrl);
  const key = DEFAULT_KEY;
  const keyLocation = process.env.INDEXNOW_KEY_LOCATION || buildKeyLocation(siteUrl, key);

  const sitemapXml = await readSitemapXml();
  const urlList = extractLocUrls(sitemapXml).filter((url) => {
    try {
      return new URL(url).host === host;
    } catch {
      return false;
    }
  });

  if (urlList.length === 0) {
    throw new Error('No URLs found in sitemap for the configured host.');
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  if (dryRun) {
    console.log('[IndexNow] Dry run enabled.');
    console.log(`[IndexNow] Host: ${host}`);
    console.log(`[IndexNow] URLs queued: ${urlList.length}`);
    console.log(`[IndexNow] Key location: ${keyLocation}`);
    return;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await response.text();
  console.log(`[IndexNow] Response: HTTP ${response.status}`);
  if (bodyText.trim()) {
    console.log(`[IndexNow] Body: ${bodyText}`);
  }

  if (!response.ok) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error('[IndexNow] Error:', error.message);
  process.exit(1);
});
