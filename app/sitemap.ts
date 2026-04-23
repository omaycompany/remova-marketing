import { MetadataRoute } from 'next'
import { features } from '@/content/features'
import { alternatives } from '@/content/alternatives'
import { comparisons } from '@/content/comparisons'
import { useCases } from '@/content/use-cases'
import { glossaryTerms } from '@/content/glossary'
import { allBlogPosts } from '@/content/blog'
import { modelsLastUpdated } from '@/content/models'
import { modelLandings } from '@/content/model-landings'
import { SITE_LAST_UPDATED_DATE, SITE_URL, dateFromIsoDate, isRecentDate } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
    const m = (p: string, pr: number, lastModified = SITE_LAST_UPDATED_DATE) => ({
        url: `${SITE_URL}${p}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: pr
    })
    const modelsLastUpdatedDate = dateFromIsoDate(modelsLastUpdated)

    // Blog index lastModified = date of most recently published post
    const latestBlogDate = allBlogPosts.length > 0
        ? dateFromIsoDate(allBlogPosts[0].date)
        : SITE_LAST_UPDATED_DATE

    return [
        { url: SITE_URL, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}/privacy`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${SITE_URL}/terms`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'yearly', priority: 0.3 },
        // Blog index: daily crawl so Google picks up new posts fast
        { url: `${SITE_URL}/blog`, lastModified: latestBlogDate, changeFrequency: 'daily', priority: 0.95 },
        { url: `${SITE_URL}/features`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${SITE_URL}/models`, lastModified: modelsLastUpdatedDate, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${SITE_URL}/glossary`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/use-cases`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/alternative`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/compare`, lastModified: SITE_LAST_UPDATED_DATE, changeFrequency: 'weekly', priority: 0.8 },
        ...modelLandings.map((landing) => m(`/models/${landing.slug}`, 0.45, dateFromIsoDate(landing.sourceCheckedAt))),
        ...features.map((f) => m(`/features/${f.slug}`, 0.8)),
        ...alternatives.map((a) => m(`/alternative/${a.slug}`, 0.7)),
        ...comparisons.map((c) => m(`/compare/${c.slug}`, 0.7)),
        ...useCases.map((u) => m(`/use-cases/${u.slug}`, 0.8)),
        ...glossaryTerms.map((g) => m(`/glossary/${g.slug}`, 0.5)),
        // Recent posts (< 30 days) get higher priority + weekly crawl frequency
        ...allBlogPosts.map((p) => {
            const recent = isRecentDate(p.date)
            const freq: MetadataRoute.Sitemap[number]['changeFrequency'] = recent ? 'weekly' : 'monthly'
            return {
                url: `${SITE_URL}/blog/${p.slug}`,
                lastModified: dateFromIsoDate(p.lastModified ?? p.date),
                changeFrequency: freq,
                priority: recent ? 0.8 : 0.65,
            }
        }),
    ]
}
