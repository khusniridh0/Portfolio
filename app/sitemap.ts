import type { MetadataRoute } from "next";
import { getProjectsSlug } from "@/actions/project";
import type { SitemapResponse } from '@/types';

export const revalidate = 3600;

const BASE_URL = process.env.SITE_URL || 'https://malangdev.my.id';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await getProjectsSlug() as SitemapResponse;
    // Note: API currently only returns slugs, not updatedAt timestamps
    // If API is updated to include updatedAt/modifiedAt, use that instead of new Date()
    const projectEntries = response?.status && Array.isArray(response.data)
      ? response.data.map((slug: string) => ({
        url: `${BASE_URL}/project/${slug}`,
        lastModified: new Date(), // TODO: Use project.updatedAt when available from API
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
      : [];

    const staticPages: MetadataRoute.Sitemap = [
      {
        url: `${BASE_URL}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
      },
      {
        url: `${BASE_URL}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      },
      {
        url: `${BASE_URL}/project`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
    ];

    return [...staticPages, ...projectEntries];
  } catch {
    return [
      { url: `${BASE_URL}/`, lastModified: new Date() }
    ];
  }
}