import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";
import {
  getSanityPostBySlug,
  getAllSanitySlugs,
  getSanityCitySlugs,
  getSanityPostsByCity,
} from "@/data/sanity-content";
import { BlogPostPage } from "@/components/blog/blog-post-page";
import { BlogIndex } from "@/components/blog/blog-index";
import { BASE_URL } from "@/lib/constants";
import { citiesMap } from "@/data/cities";
import {
  paginateBlogPosts,
  redirectIfBlogListPageMismatch,
} from "@/lib/blog-pagination";

function toCityTitle(citySlug: string): string {
  return citiesMap[citySlug]
    ? citiesMap[citySlug]
        .split(" ")
        .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
        .join(" ")
    : citySlug;
}

export async function generateStaticParams() {
  const [postSlugs, citySlugs] = await Promise.all([
    getAllSanitySlugs(),
    getSanityCitySlugs(),
  ]);
  const allSlugs = new Set([
    ...postSlugs,
    ...citySlugs,
    ...Object.keys(citiesMap),
  ]);
  return [...allSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (citiesMap[slug]) {
    const cityName = toCityTitle(slug);
    return {
      title: `${cityName} Blog | Godly Holiday Lights`,
      description: `Expert tips on holiday lighting and installation for ${cityName}. Ideas, maintenance, and what to know before you hire.`,
      openGraph: {
        title: `${cityName} Blog | Godly Holiday Lights`,
        description: `Holiday lighting tips for ${cityName} homeowners and businesses.`,
        url: `${BASE_URL}/blog/${slug}`,
        siteName: "Godly Holiday Lights",
        type: "website",
        images: "/og.png",
      },
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  const post = await getSanityPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    keywords: [post.targetKeyword, post.targetCity, "Godly Holiday Lights"].filter(
      Boolean,
    ) as string[],
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Godly Holiday Lights",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      images: post.image ? [{ url: post.image }] : ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      images: post.image ? [post.image] : ["/og.png"],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export const revalidate = 60;

export default async function BlogSlugRoute({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;

  if (citiesMap[slug]) {
    const allPosts = await getSanityPostsByCity(slug);
    const cityName = toCityTitle(slug);
    const { pagePosts, currentPage, totalPages } = paginateBlogPosts(
      allPosts,
      sp?.page,
    );
    const listBase = `/blog/${slug}`;
    redirectIfBlogListPageMismatch(listBase, sp?.page, currentPage, totalPages);
    return (
      <BlogIndex
        posts={pagePosts}
        cityName={cityName}
        basePath={listBase}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    );
  }

  const post = await getSanityPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const faqSchema =
    post.faq?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
          strategy="beforeInteractive"
        />
      )}
      <BlogPostPage post={post} />
    </>
  );
}
