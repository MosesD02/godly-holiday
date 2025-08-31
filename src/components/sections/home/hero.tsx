/* eslint-disable @next/next/no-img-element */
import Star from "@/assets/star.svg";
import { QuoteForm } from "./hero/quote-form";

export function Hero() {
  return (
    <section id="hero" className="relative w-full mb-[229px] overflow-x-clip">
      <div className="max-w-[1400px] w-full px-13.5 mx-auto relative z-10 pt-[calc(min(100svh,960px)-450px)]">
        <div className="space-y-[11.65px] mb-8.5">
          <div className="text-[#FDE4C8] font-marlton text-[20.704px] tracking-[2.07px] flex items-center gap-3">
            <div className="trim-text">300+ HAPPY CUSTOMERS</div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src={Star.src}
                  alt="Star"
                  width={16.981}
                  height={16.981}
                />
              ))}
            </div>
          </div>
          <h1 className="text-white trim-text font-marlton text-7xl leading-[80px] tracking-[4.32px]">
            PROFESSIONAL HOLIDAY LIGHT INSTALLATION{" "}
            <span className="font-luminaire text-6xl leading-normal tracking-normal text-[#FDE4C8]">
              In
            </span>{" "}
            SOUTH FLORIDA
          </h1>
          <p className="max-w-[1030px] text-white text-xl font-medium">
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
