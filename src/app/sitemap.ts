import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://karaoglumuhendislik.com.tr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Statik rotalar
    const routes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/hakkimizda`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/projeler`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/sosyal-sorumluluk`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/sektorler`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/haberler`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${siteUrl}/sss`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${siteUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteUrl}/kvkk`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${siteUrl}/gizlilik`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Dinamik Blog Yazılarını Çek
    const { data: blogs } = await supabase
        .from('blogs')
        .select('slug, updated_at')
        .eq('is_published', true)

    const blogRoutes: MetadataRoute.Sitemap = blogs?.map((blog) => ({
        url: `${siteUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.updated_at),
        changeFrequency: 'weekly',
        priority: 0.7,
    })) || []

    // Dinamik Projeleri Çek
    const { data: projects } = await supabase
        .from('projects')
        .select('slug, created_at') // Using created_at as backup if updated_at is missing

    const projectRoutes: MetadataRoute.Sitemap = projects?.map((project) => ({
        url: `${siteUrl}/projeler/${project.slug}`,
        lastModified: new Date(project.created_at || new Date()), // Fallback to current date
        changeFrequency: 'weekly',
        priority: 0.8,
    })) || []

    return [...routes, ...blogRoutes, ...projectRoutes]
}
