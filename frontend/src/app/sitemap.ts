
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://astraveda.com'; // Replace with actual domain

    // core pages
    const routes = [
        '',
        '/about',
        '/treatments',
        '/destinations',
        '/how-it-works',
        '/contact',
        '/privacy',
        '/terms',
        '/auth/login',
        '/auth/register',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
