import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL!;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    }
  ];
}