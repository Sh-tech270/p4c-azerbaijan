import { MetadataRoute } from 'next';
import { initialCourses, initialNews } from '@/lib/mock-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://p4cazerbaijan.az';

  const staticPages = [
    '',
    '/haqqimizda/p4c',
    '/haqqimizda/p4c-azerbaijan',
    '/kurslar',
    '/muellimler',
    '/test',
    '/layiheler',
    '/xeberler',
    '/videolar',
    '/terefdaslar',
    '/mezunlar',
    '/muraciet',
    '/elaqe',
    '/mexfilik',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const coursePages = initialCourses.map((c) => ({
    url: `${baseUrl}/kurslar/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const newsPages = initialNews.map((n) => ({
    url: `${baseUrl}/xeberler/${n.slug}`,
    lastModified: new Date(n.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...coursePages, ...newsPages];
}
