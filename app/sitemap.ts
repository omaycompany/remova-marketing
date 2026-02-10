import { MetadataRoute } from 'next'
import { features } from '@/content/features'
import { alternatives } from '@/content/alternatives'
import { comparisons } from '@/content/comparisons'
import { useCases } from '@/content/use-cases'
import { glossaryTerms } from '@/content/glossary'
import { integrations } from '@/content/integrations'
import { allBlogPosts } from '@/content/blog'
import { customerStories } from '@/content/customer-stories'
import { resources } from '@/content/resources'

export default function sitemap(): MetadataRoute.Sitemap {
    const b = 'https://remova.org'
    const m = (p: string, pr: number) => ({ url: `${b}${p}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: pr })
    return [
        { url: b, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${b}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${b}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        ...features.map((f) => m(`/features/${f.slug}`, 0.8)),
        ...alternatives.map((a) => m(`/alternative/${a.slug}`, 0.7)),
        ...comparisons.map((c) => m(`/compare/${c.slug}`, 0.7)),
        ...useCases.map((u) => m(`/use-cases/${u.slug}`, 0.8)),
        ...glossaryTerms.map((g) => m(`/glossary/${g.slug}`, 0.5)),
        ...integrations.map((i) => m(`/integrations/${i.slug}`, 0.6)),
        ...allBlogPosts.map((p) => m(`/blog/${p.slug}`, 0.6)),
        ...customerStories.map((s) => m(`/customers/${s.slug}`, 0.7)),
        ...resources.map((r) => m(`/resources/${r.slug}`, 0.6)),
    ]
}
