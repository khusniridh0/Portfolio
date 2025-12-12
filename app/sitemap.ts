import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://khusniridho.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://malangdev.my.id/',
      lastModified: new Date(),
    }
  ];
}