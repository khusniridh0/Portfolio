import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    // Gunakan URL absolut secara langsung untuk memastikan Google tidak tersesat
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