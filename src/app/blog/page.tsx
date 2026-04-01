import { citiesMap } from "@/data/cities";
import { getAllSanityPosts } from "@/data/sanity-content";
import {
  paginateBlogPosts,
  redirectIfBlogListPageMismatch,
} from "@/lib/blog-pagination";
import { BlogIndex } from "@/components/blog/blog-index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog | Godly Holiday Lights — Holiday Lighting Tips & Ideas in South Florida",
  description:
    "Expert tips on holiday light installation and seasonal lighting for South Florida homes and businesses. Ideas, maintenance, and what to know before you hire.",
  robots: "index, follow",
  openGraph: {
    title: "Blog | Godly Holiday Lights",
    description:
      "Expert tips on holiday lighting and installation for South Florida.",
    url: "https://godlyholidaylights.com/blog",
    siteName: "Godly Holiday Lights",
    type: "website",
    images: "/og.png",
  },
  alternates: {
    canonical: "/blog",
  },
};

export const revalidate = 60;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const sp = await searchParams;
  const cityName = citiesMap["south-florida"];
  const allPosts = await getAllSanityPosts();
  const { pagePosts, currentPage, totalPages } = paginateBlogPosts(
    allPosts,
    sp?.page,
  );
  redirectIfBlogListPageMismatch("/blog", sp?.page, currentPage, totalPages);
  return (
    <BlogIndex
      posts={pagePosts}
      cityName={cityName}
      basePath="/blog"
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
