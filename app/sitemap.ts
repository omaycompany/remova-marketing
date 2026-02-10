import { MetadataRoute } from 'next'
import { features } from '@/content/features'
import { alternatives } from '@/content/alternatives'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://remova.org'

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    const featurePages: MetadataRoute.Sitemap = features.map((f) => ({
        url: `${baseUrl}/features/${f.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const alternativePages: MetadataRoute.Sitemap = alternatives.map((a) => ({
        url: `${baseUrl}/alternative/${a.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...featurePages, ...alternativePages]
}
