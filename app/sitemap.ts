import type { MetadataRoute } from "next";
import { getProjectsSlug } from "@/app/actions/project";

export const revalidate = 3600;

const BASE_URL = process.env.SITE_URL || 'https://malangdev.my.id';
interface Response {
  status: string,
  data: []
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await getProjectsSlug() as Response;
    // Gunakan pengecekan yang lebih aman
    const projectEntries = response?.status && Array.isArray(response.data)
      ? response.data.map((slug: string) => ({
        url: `${BASE_URL}/project/${slug}`,
        lastModified: new Date(),
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
        url: `${BASE_URL}/readme`,
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