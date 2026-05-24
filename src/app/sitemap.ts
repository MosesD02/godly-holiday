import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/data/services/city-content";
import { getAllSanityPosts } from "@/data/sanity-content";
import { BASE_URL } from "@/lib/constants";

const base = BASE_URL.replace(/\/$/, "");

function url(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const allCitySlugs = getAllCitySlugs();

  const cityPages = allCitySlugs.map((slug) => ({
    url: url(`/services/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityHomePages = allCitySlugs.map((slug) => ({
    url: url(`/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await getAllSanityPosts();
    const citySlugsWithPosts = [
      ...new Set(blogPosts.map((p) => p.citySlug).filter(Boolean)),
    ] as string[];

    const postEntries = blogPosts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    const cityBlogEntries = citySlugsWithPosts.map((citySlug) => {
      const inCity = blogPosts.filter((p) => p.citySlug === citySlug);
      const latestMs = inCity.reduce((max, p) => {
        const t = p.publishedAt ? new Date(p.publishedAt).getTime() : 0;
        return Math.max(max, t);
      }, 0);
      return {
        url: url(`/blog/${citySlug}`),
        lastModified: latestMs ? new Date(latestMs) : now,
        changeFrequency: "weekly" as const,
        priority: 0.75,
      };
    });

    blogEntries = [
      {
        url: url("/blog"),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      },
      ...postEntries,
      ...cityBlogEntries,
    ];
  } catch {
    blogEntries = [
      {
        url: url("/blog"),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      },
    ];
  }

  return [
    {
      url: url("/"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: url("/services"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cityHomePages,
    ...cityPages,
    ...blogEntries,
  ];
}
