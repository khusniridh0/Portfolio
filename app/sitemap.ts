export const dynamic = "force-dynamic";
import type { MetadataRoute } from "next";
import { getProjectsSlug } from "@/app/actions/project";

interface Response {
  code: number,
  status: string,
  message: string,
  data: []
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await getProjectsSlug()
  const { data, status } = response as Response

  const slugs = status ? data.map(item => ({
    url: `https://malangdev.my.id/project/${item}`,
    lastModified: new Date(),
  })) : [];

  return [
    {
      url: 'https://malangdev.my.id/',
      lastModified: new Date(),
    },
    {
      url: 'https://malangdev.my.id/readme',
      lastModified: new Date(),
    },
    {
      url: 'https://malangdev.my.id/project',
      lastModified: new Date(),
    },
    ...slugs
  ];
}