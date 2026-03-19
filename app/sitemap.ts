import { MetadataRoute } from 'next'
import { features } from '@/content/features'
import { alternatives } from '@/content/alternatives'
import { comparisons } from '@/content/comparisons'
import { useCases } from '@/content/use-cases'
import { glossaryTerms } from '@/content/glossary'
import { allBlogPosts } from '@/content/blog'
import { modelLandings } from '@/content/model-landings'

export default function sitemap(): MetadataRoute.Sitemap {
    const b = 'https://www.remova.org'
    const m = (p: string, pr: number) => ({ url: `${b}${p}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: pr })
    return [
        { url: b, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${b}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${b}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${b}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${b}/features`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${b}/models`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${b}/glossary`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${b}/use-cases`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${b}/alternative`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${b}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        ...features.map((f) => m(`/features/${f.slug}`, 0.8)),
        ...alternatives.map((a) => m(`/alternative/${a.slug}`, 0.7)),
        ...comparisons.map((c) => m(`/compare/${c.slug}`, 0.7)),
        ...useCases.map((u) => m(`/use-cases/${u.slug}`, 0.8)),
        ...glossaryTerms.map((g) => m(`/glossary/${g.slug}`, 0.5)),
        ...allBlogPosts.map((p) => m(`/blog/${p.slug}`, 0.6)),
        ...modelLandings.map((entry) => m(`/models/${entry.slug}`, 0.7)),
    ]
}
