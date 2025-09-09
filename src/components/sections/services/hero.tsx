import Image from "next/image";

import Star from "@/assets/star.svg";
import { QuoteForm } from "../home/hero/quote-form";

export function Hero() {
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

        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-center font-marlton relative leading-[36px] sm:leading-[52px] md:leading-[70px] lg:leading-[80px] tracking-[1.6px] sm:tracking-[2.4px] md:tracking-[3.2px] lg:tracking-[3.6px]">
          <span className="text-grain bg-white">
            RESIDENTIAL & COMMERCIAL <br /> HOLIDAY LIGHT
          </span>{" "}
          <span
            className="font-luminaire text-[#FFE7AF] absolute rotate-[-8.155deg] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] -bottom-9 sm:-bottom-9 md:-bottom-5 lg:-bottom-6 right-8 sm:right-12 md:right-16 lg:right-18"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "6px",
              WebkitTextStrokeColor: "#252323",
              paintOrder: "stroke fill",
            }}
          >
            Installation
          </span>{" "}
          <span className="text-[#FDE4C8] absolute right-4 sm:-right-5 sm:top-20 md:-right-4 -bottom-2 md:bottom-3 text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 tracking-[1.5px] sm:tracking-[2px]">
            SOUTH <br /> FLORIDA
          </span>
        </h1>
      </div>

      <Image
        src={"/images/services/hero/card.png"}
        alt="Hero Card"
        width={1654.5}
        height={661.002}
        className="mx-auto w-full h-auto"
      />

      <p className="text-white px-4 md:px-0 font-satoshi text-center text-base sm:text-lg md:text-xl font-medium max-w-[686px] my-8 md:my-[80px]">
        Full-service lighting for homes, storefronts, and buildings—designed,
        installed, maintained, and removed by your local holiday
      </p>

      <div className="px-4 md:px-0">
        <QuoteForm hideImages />
      </div>

      <Image
        src={"/images/services/hero/flowers-left.webp"}
        alt="Flowers Left"
        width={382.851}
        height={253.958}
        className="hidden md:block absolute bottom-0 translate-y-1/2 left-0 max-w-[253px] -z-10 pointer-events-none"
      />
      <Image
        src={"/images/services/hero/flowers-right.webp"}
        alt="Flowers right"
        width={382.851}
        height={253.958}
        className="hidden md:block absolute bottom-0 translate-y-1/2 right-0 max-w-[253px] -z-10 pointer-events-none"
      />
    </section>
  );
}
