import Image from "next/image";

import Star from "@/assets/star.svg";
import { QuoteForm } from "../home/hero/quote-form";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center flex-col py-12 md:py-[96px] px-4 overflow-x-clip"
    >
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <p className="font-marlton text-[#FDE4C8] text-sm sm:text-base md:text-xl leading-[30px] tracking-[2px]">
            TOP RATED
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

        <h1 className="sr-only">
          RESIDENTIAL & COMMERCIAL HOLIDAY LIGHT INSTALLATION SOUTH FLORIDA
        </h1>
        <Image
          src={"/images/services/hero/title.svg"}
          alt="RESIDENTIAL & COMMERCIAL HOLIDAY LIGHT INSTALLATION SOUTH FLORIDA"
          width={840}
          height={160}
          className="mx-auto w-full max-w-[840px] h-auto"
        />
      </div>

      <Image
        src={"/images/services/hero/card.png"}
        alt="Hero Card"
        width={1654.5}
        height={661.002}
        className="mx-auto w-full h-auto"
      />

      <p className="text-white font-satoshi text-center text-base sm:text-lg md:text-xl font-medium max-w-[686px] my-8 md:my-[80px]">
        Full-service lighting for homes, storefronts, and buildings—designed,
        installed, maintained, and removed by your local holiday
      </p>

      <QuoteForm hideImages />

      <Image
        src={"/images/services/hero/flowers-left.png"}
        alt="Flowers Left"
        width={382.851}
        height={253.958}
        className="hidden md:block absolute bottom-0 translate-y-1/2 left-0 max-w-[253px] -z-10 pointer-events-none"
      />
      <Image
        src={"/images/services/hero/flowers-right.png"}
        alt="Flowers right"
        width={382.851}
        height={253.958}
        className="hidden md:block absolute bottom-0 translate-y-1/2 right-0 max-w-[253px] -z-10 pointer-events-none"
      />
    </section>
  );
}
