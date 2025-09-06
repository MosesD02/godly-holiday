import Star from "@/assets/star.svg";
import { QuoteForm } from "./hero/quote-form";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full mb-24 sm:mb-32 lg:mb-[229px] overflow-x-clip"
    >
      <div className="max-w-[1400px] w-full px-4 sm:px-8 lg:px-13.5 mx-auto relative z-10 pt-[calc(min(100svh,960px)-550px)]">
        <div className="space-y-3 sm:space-y-[11.65px] mb-6 sm:mb-8.5">
          <div>
            <Image
              src={"/google.png"}
              alt="Google"
              width={184}
              height={58}
              className="w-[184px] h-[58px] object-contain object-left"
            />
            <div className="text-[#FDE4C8] font-marlton lg:text-[20.704px] tracking-[1.4px] sm:tracking-[1.6px] lg:tracking-[2.07px] flex items-start sm:items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-0.5 sm:gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src={Star.src}
                    alt="Star"
                    width={16.981}
                    height={16.981}
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                ))}
                <div className="trim-text pt-1.5 ps-2">93 Reviews</div>
              </div>
            </div>
          </div>
          <h1 className="text-white trim-text font-marlton text-3xl sm:text-5xl lg:text-7xl leading-9 sm:leading-[60px] lg:leading-[80px] tracking-[1.8px] sm:tracking-[3px] lg:tracking-[4.32px]">
            PROFESSIONAL HOLIDAY LIGHT INSTALLATION{" "}
            <span className="font-luminaire text-2xl sm:text-4xl lg:text-6xl leading-normal tracking-normal text-[#FDE4C8]">
              In
            </span>{" "}
            SOUTH FLORIDA
          </h1>
          <p className="max-w-[1030px] text-white text-base sm:text-lg lg:text-xl font-medium leading-6 sm:leading-7 lg:leading-normal">
            Expert holiday and christmas light installation, designed,
            installed, and removed for you. No ladders, no storage stress.
            Whether it&rsquo;s your home or business, our holiday lighting
            company makes the season shine.Looking for holiday light installers
            near you? We&rsquo;ve got South Florida covered.
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
