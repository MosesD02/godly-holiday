"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/assets/arrow-right.svg";
import { GodlyButton } from "@/components/ui/godly-button";
import { QuoteButton } from "@/components/ui/quote-button";

const ctaGodlyClassName =
  "w-full max-w-full min-w-0 justify-center text-center text-sm leading-snug sm:w-fit sm:max-w-none sm:text-base md:text-lg lg:text-xl " +
  "min-h-[61px] h-auto! px-3 py-2.5 sm:h-[61px]! sm:min-h-0 sm:px-0 sm:py-0 sm:leading-none " +
  "inline-flex! flex-row! items-center gap-2 sm:gap-[10px] box-border";

export function BlogPostCta({
  ctaText,
  citySlug,
}: {
  ctaText: string;
  citySlug?: string;
}) {
  const servicesHref = citySlug ? `/services/${citySlug}` : "/services";

  return (
    <div className="my-12 border-t-2 border-[rgba(45,43,43,0.2)] pt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
        <QuoteButton className={ctaGodlyClassName}>
          <span className="min-w-0 flex-1 text-balance sm:flex-none">
            {ctaText}
          </span>
          <Image
            src={ArrowRight.src}
            alt=""
            width={32}
            height={32}
            className="h-6 w-6 shrink-0 sm:h-8 sm:w-8"
            aria-hidden
          />
        </QuoteButton>
        <GodlyButton variant="gray" asChild className={ctaGodlyClassName}>
          <Link href={servicesHref} className="no-underline!">
            <span className="max-w-full text-balance">
              Learn more about our services
            </span>
          </Link>
        </GodlyButton>
      </div>
    </div>
  );
}
