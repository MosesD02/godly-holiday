import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

const base = BASE_URL.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
