import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { SERVICE_SLUG_TO_CATEGORY } from "@/data/blog-categories";

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  image: string | null;
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  targetKeyword?: string;
  internalLink?: unknown;
  secondaryLink?: unknown;
  targetCity?: string;
  citySlug?: string;
  serviceCategory?: string;
  businessName?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaQuoteLink?: unknown;
  body: PortableTextBlock[];
  faq: BlogFaqItem[];
}

interface SanityPostDoc {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  image?: Parameters<typeof urlFor>[0];
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  targetKeyword?: string;
  internalLink?: unknown;
  secondaryLink?: unknown;
  targetCity?: string;
  citySlug?: string;
  serviceCategory?: string;
  businessName?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaQuoteLink?: unknown;
  body?: PortableTextBlock[];
  faq?: BlogFaqItem[];
}

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  image,
  publishedAt,
  metaTitle,
  metaDescription,
  targetKeyword,
  internalLink,
  secondaryLink,
  targetCity,
  citySlug,
  serviceCategory,
  businessName,
  ctaText,
  ctaLink,
  ctaQuoteLink,
  body,
  faq[] { question, answer }
}`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  image,
  publishedAt,
  metaTitle,
  metaDescription,
  targetKeyword,
  internalLink,
  secondaryLink,
  targetCity,
  citySlug,
  serviceCategory,
  businessName,
  ctaText,
  ctaLink,
  ctaQuoteLink,
  body,
  faq[] { question, answer }
}`;

function toBlogPost(doc: SanityPostDoc | null): BlogPost | null {
  if (!doc) return null;
  const imageUrl = doc.image
    ? urlFor(doc.image).width(800).height(600).url()
    : null;
  return {
    ...doc,
    image: imageUrl,
    body: Array.isArray(doc.body) ? doc.body : [],
    faq: Array.isArray(doc.faq) ? doc.faq : [],
  };
}

export async function getAllSanityPosts(): Promise<BlogPost[]> {
  try {
    const docs = await client.fetch<SanityPostDoc[]>(POSTS_QUERY);
    return (docs || [])
      .map((d) => toBlogPost(d))
      .filter((p): p is BlogPost => p !== null);
  } catch {
    return [];
  }
}

export async function getSanityPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  try {
    const doc = await client.fetch<SanityPostDoc | null>(
      POST_BY_SLUG_QUERY,
      { slug },
    );
    return toBlogPost(doc);
  } catch {
    return null;
  }
}

export async function getAllSanitySlugs(): Promise<string[]> {
  const posts = await getAllSanityPosts();
  return posts.map((p) => p.slug).filter(Boolean);
}

export async function getSanityPostsByCity(citySlug: string): Promise<BlogPost[]> {
  const posts = await getAllSanityPosts();
  return posts
    .filter((p) => p.citySlug === citySlug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt || 0).getTime() -
        new Date(a.publishedAt || 0).getTime(),
    );
}

export async function getSanityCitySlugs(): Promise<string[]> {
  const posts = await getAllSanityPosts();
  return [...new Set(posts.map((p) => p.citySlug).filter(Boolean))] as string[];
}

export async function getRelatedBlogPosts(
  citySlug: string,
  serviceSlug: string,
): Promise<BlogPost[]> {
  const category = SERVICE_SLUG_TO_CATEGORY[serviceSlug];
  if (!category) return [];
  const posts = await getAllSanityPosts();
  return posts.filter(
    (post) =>
      post.citySlug === citySlug &&
      (post.serviceCategory === category || post.serviceCategory === serviceSlug),
  );
}
