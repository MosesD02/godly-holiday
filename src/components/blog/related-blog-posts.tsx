import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { BlogPost } from "@/data/sanity-content";

export function RelatedBlogPosts({
  posts,
  citySlug,
}: {
  posts: BlogPost[];
  citySlug?: string;
}) {
  if (!posts || posts.length === 0) return null;

  const blogHref = citySlug ? `/blog/${citySlug}` : "/blog";

  return (
    <section className="bg-[#fef7ea] px-4 py-16 md:px-12 md:py-[80px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-marlton text-sm tracking-[2.5px] text-[#AF8F6E]">
              HELPFUL READING
            </span>
            <h2 className="trim font-marlton text-[40px] leading-none text-[#0E0E0E] md:text-[56px]">
              From Our Blog
            </h2>
          </div>
          <Link
            href={blogHref}
            className="hidden shrink-0 font-satoshi text-sm font-normal text-[#2D2B2B] underline decoration-[#AF8F6E] underline-offset-2 transition-colors hover:text-[#AF8F6E] md:block"
          >
            View all articles →
          </Link>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 ${posts.length > 1 ? "md:grid-cols-2" : "md:max-w-[600px]"}`}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3"
            >
              {post.image && (
                <div className="overflow-hidden rounded-[6px] border-2 border-[rgba(106,100,100,0.12)] shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={450}
                    className="aspect-4/3 w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <p className="font-satoshi text-sm font-light text-[#2D2B2B]/70">
                {post.publishedAt
                  ? format(new Date(post.publishedAt), "MMMM d, yyyy")
                  : ""}
              </p>
              <h3 className="font-marlton text-xl leading-snug font-normal text-[#0E0E0E] transition-colors group-hover:text-[#AF8F6E]">
                {post.title}
              </h3>
              <p className="line-clamp-3 font-satoshi text-sm font-light leading-relaxed text-[#2D2B2B]/80">
                {post.excerpt}
              </p>
              <span className="font-satoshi text-sm font-normal text-[#2D2B2B] underline decoration-[#AF8F6E] underline-offset-2 group-hover:text-[#AF8F6E]">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <Link
          href={blogHref}
          className="mt-10 flex items-center justify-center font-satoshi text-sm font-normal text-[#2D2B2B] underline decoration-[#AF8F6E] underline-offset-2 hover:text-[#AF8F6E] md:hidden"
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}
