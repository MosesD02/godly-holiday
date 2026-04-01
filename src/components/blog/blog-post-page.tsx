import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { BlogPost } from "@/data/sanity-content";
import { BlogPostContent } from "./blog-post-content";
import { BlogPostFaq } from "./blog-post-faq";
import { BlogPostCta } from "./blog-post-cta";
import { BlogCityCookie } from "./blog-city-cookie";

export function BlogPostPage({
  post,
  basePath = "/blog",
}: {
  post: BlogPost;
  basePath?: string;
}) {
  return (
    <>
      <BlogCityCookie citySlug={post.citySlug} targetCity={post.targetCity} />
      <article className="flex w-full flex-col bg-[#fef7ea] px-4 py-12 text-[#2D2B2B] sm:px-4 md:mt-14 md:px-16 md:py-16">
        <div className="mx-auto flex w-full max-w-[800px] flex-col">
          <nav className="mb-6">
            <Link
              href={basePath}
              className="font-satoshi text-sm font-light text-[#2D2B2B] underline decoration-[#AF8F6E] underline-offset-2 transition-colors hover:text-[#AF8F6E]"
            >
              ← Back to Blog
            </Link>
          </nav>

          <header className="mb-8 border-b-4 border-double border-[#2D2B2B] pb-8">
            <p className="mb-2 font-satoshi text-sm font-light text-[#2D2B2B]/80">
              {post.publishedAt &&
                format(new Date(post.publishedAt), "MMMM d, yyyy")}
              {post.publishedAt && post.targetCity ? " · " : ""}
              {post.targetCity}
            </p>
            <h1 className="trim font-marlton text-[32px] leading-tight font-normal text-[#0E0E0E] md:text-5xl">
              {post.title}
            </h1>
          </header>

          {post.image && (
            <div className="relative mb-8 aspect-4/3 w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          )}

          <div className="w-full max-w-none">
            <BlogPostContent body={post.body} />
          </div>

          {post.ctaText && (
            <BlogPostCta ctaText={post.ctaText} citySlug={post.citySlug} />
          )}

          <BlogPostFaq faq={post.faq} />
        </div>
      </article>
    </>
  );
}
