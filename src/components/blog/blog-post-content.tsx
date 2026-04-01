import Link from "next/link";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import type { BlogPost } from "@/data/sanity-content";

const linkClassName =
  "font-satoshi font-medium text-[#2D2B2B] underline decoration-[#AF8F6E] underline-offset-2 transition-colors hover:text-[#AF8F6E]";

const INTERNAL_PREFIXES = [
  "https://godlyholidaylights.com",
  "https://www.godlyholidaylights.com",
  "https://godlywindows.com",
];

function internalPathFromHref(href: string): string | null {
  for (const prefix of INTERNAL_PREFIXES) {
    if (href.startsWith(prefix)) {
      return href.slice(prefix.length) || "/";
    }
  }
  return null;
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).width(800).height(600).url();
      const alt = value.alt || "";
      return (
        <figure className="my-8">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center font-satoshi text-sm font-light text-[#2D2B2B]/70">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href;
      if (!href) return <span>{children}</span>;
      const path = internalPathFromHref(href);
      if (path) {
        return (
          <Link href={path} className={linkClassName}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="trim mt-8 font-marlton text-2xl font-normal text-[#0E0E0E] md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="trim mt-6 font-marlton text-xl font-normal text-[#0E0E0E] md:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-satoshi text-lg font-light leading-relaxed text-[#2D2B2B]">
        {children}
      </p>
    ),
  },
};

export function BlogPostContent({ body }: Pick<BlogPost, "body">) {
  if (!body || !Array.isArray(body) || body.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <PortableText value={body} components={components} />
    </div>
  );
}
