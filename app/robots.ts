import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.SITE_URL || "https://malangdev.my.id";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api", "/_next/", "/404"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}