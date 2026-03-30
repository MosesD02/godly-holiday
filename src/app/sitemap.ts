import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/data/services/city-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = getAllCitySlugs().map((slug) => ({
    url: `https://godlyholidaylights.com/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://godlyholidaylights.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://godlyholidaylights.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cityPages,
  ];
}
