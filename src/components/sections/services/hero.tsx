import Image from "next/image";

import Star from "@/assets/star.svg";
import { QuoteForm } from "../home/hero/quote-form";

interface HeroProps {
  cityName?: string;
  subheadline?: string;
  heading?: string;
}

const luminaireStyle = {
  textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
  WebkitTextStrokeWidth: "6px",
  WebkitTextStrokeColor: "#252323",
  paintOrder: "stroke fill" as const,
};

function parseCityHeading(heading: string): {
  before: string;
  highlight: string | null;
  after: string;
} {
  const installation = heading.match(/^(.*?)(\s+Installation)(\s.*)?$/i);
  if (installation) {
    return {
      before: installation[1].trim(),
      highlight: "Installation",
      after: (installation[3] ?? "").trim(),
    };
  }
  const idx = heading.indexOf("Holiday Lights");
  if (idx !== -1) {
    return {
      before: heading.slice(0, idx).trim(),
      highlight: "Holiday Lights",
      after: heading.slice(idx + "Holiday Lights".length).trim(),
    };
  }
  return { before: heading.trim(), highlight: null, after: "" };
}

export function Hero({ cityName, subheadline, heading }: HeroProps = {}) {
  const parsed = heading ? parseCityHeading(heading) : null;

  return (
    <section
      id="hero"
      className="relative w-full flex items-center flex-col py-12 md:py-[96px] overflow-x-clip"
    >
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <p className="font-marlton text-[#FDE4C8] text-sm sm:text-base md:text-xl leading-[30px] tracking-[2px]">
            5 Star Rated
          </p>
          <div className="flex items-center gap-0.5 mb-1.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={Star.src}
                alt="Star"
                width={18}
                height={18}
              />
            ))}
          </div>
        </div>

        <h1
          aria-label={heading || undefined}
          className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-center font-marlton relative leading-[36px] sm:leading-[52px] md:leading-[70px] lg:leading-[80px] tracking-[1.6px] sm:tracking-[2.4px] md:tracking-[3.2px] lg:tracking-[3.6px]"
        >
          {!heading ? (
            <>
              <span className="text-grain bg-white">
                RESIDENTIAL & COMMERCIAL <br /> HOLIDAY LIGHT
              </span>{" "}
              <span
                className="font-luminaire text-[#FFE7AF] absolute rotate-[-8.155deg] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] -bottom-9 sm:-bottom-9 md:-bottom-5 lg:-bottom-6 right-8 sm:right-12 md:right-16 lg:right-18"
                style={luminaireStyle}
              >
                Installation
              </span>{" "}
              <span className="text-[#FDE4C8] absolute right-4 sm:-right-5 sm:top-20 md:-right-4 -bottom-2 md:bottom-3 text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 tracking-[1.5px] sm:tracking-[2px]">
                {cityName ? (
                  cityName.split(" ").map((word, i) => (
                    <span key={i}>
                      {word}
                      <br />
                    </span>
                  ))
                ) : (
                  <>
                    SOUTH <br /> FLORIDA
                  </>
                )}
              </span>
            </>
          ) : parsed && parsed.highlight ? (
            <>
              <span className="text-grain bg-white">
                {(() => {
                  const fullText = [parsed.before, parsed.after]
                    .filter(Boolean)
                    .join(" ")
                    .trim();
                  const words = fullText.split(/\s+/);
                  const mid = Math.ceil(words.length / 2);
                  const line1 = words.slice(0, mid).join(" ");
                  const line2 = words.slice(mid).join(" ");
                  return line2 ? (
                    <>
                      {line1} <br /> {line2}
                    </>
                  ) : (
                    line1
                  );
                })()}
              </span>{" "}
              <span
                className="font-luminaire text-[#FFE7AF] absolute rotate-[-8.155deg] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] -bottom-9 sm:-bottom-9 md:-bottom-5 lg:-bottom-6 right-8 sm:right-12 md:right-16 lg:right-18"
                style={luminaireStyle}
              >
                {parsed.highlight}
              </span>{" "}
              <span className="text-[#FDE4C8] absolute right-4 sm:-right-5 sm:top-20 md:-right-4 -bottom-2 md:bottom-3 text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 tracking-[1.5px] sm:tracking-[2px]">
                {cityName ? (
                  cityName.split(" ").map((word, i) => (
                    <span key={i}>
                      {word}
                      <br />
                    </span>
                  ))
                ) : (
                  <>
                    SOUTH <br /> FLORIDA
                  </>
                )}
              </span>
            </>
          ) : (
            <>
              <span className="text-grain bg-white">
                {parsed?.before}
              </span>{" "}
              <span className="text-[#FDE4C8] absolute right-4 sm:-right-5 sm:top-20 md:-right-4 -bottom-2 md:bottom-3 text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 tracking-[1.5px] sm:tracking-[2px]">
                {cityName ? (
                  cityName.split(" ").map((word, i) => (
                    <span key={i}>
                      {word}
                      <br />
                    </span>
                  ))
                ) : (
                  <>
                    SOUTH <br /> FLORIDA
                  </>
                )}
              </span>
            </>
          )}
        </h1>
      </div>

      <Image
        src={"/images/services/hero/card.png"}
        alt="Hero Card"
        width={1655}
        height={662}
        className="mx-auto w-full h-auto"
      />

      <p className="text-white px-4 md:px-0 font-satoshi text-center text-base sm:text-lg md:text-xl font-medium max-w-[686px] my-8 md:my-[80px]">
        {subheadline ||
          "Full-service lighting for homes, storefronts, and buildings—designed, installed, maintained, and removed by your local holiday"}
      </p>

      <div className="px-4 md:px-0">
        <QuoteForm hideImages />
      </div>

      <Image
        src={"/images/services/hero/flowers-left.webp"}
        alt="Flowers Left"
        width={383}
        height={254}
        className="hidden md:block absolute bottom-0 translate-y-1/2 left-0 max-w-[253px] -z-10 pointer-events-none"
      />
      <Image
        src={"/images/services/hero/flowers-right.webp"}
        alt="Flowers right"
        width={383}
        height={254}
        className="hidden md:block absolute bottom-0 translate-y-1/2 right-0 max-w-[253px] -z-10 pointer-events-none"
      />
    </section>
  );
}
