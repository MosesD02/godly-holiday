import { QuoteButton } from "@/components/ui/quote-button";
import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";

export function ServicesCTA() {
  return (
    <section className="bg-paper-16-2 pb-16 sm:pb-20 lg:pb-[114px] space-y-12 sm:space-y-16 lg:space-y-[96px]">
      <Image
        src="/images/services/cta/lights.png"
        alt="Lights"
        width={1452}
        height={350}
        className="w-full h-[200px] sm:h-[250px] lg:h-[350px] object-contain"
      />

      <div className="max-w-[1332px] mx-auto bg-[#1F1D1D] h-full rounded-[12px] flex flex-col p-6 sm:p-12 lg:p-20 items-center justify-center gap-8 sm:gap-12 lg:gap-[64px] shadow-[0_3.015px_3.015px_0_rgba(0,0,0,0.25),_0_4px_4px_0_rgba(255,255,255,0.30)_inset] relative">
        <Image
          src="/images/services/cta/bg.png"
          alt="cta bg"
          width={1212}
          height={928}
          className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
        />
        <div className="flex flex-col items-center justify-center">
          <h2 className="z-10 text-center relative font-marlton text-white text-3xl sm:text-4xl lg:text-[64px] leading-[1.2] sm:leading-[1.3] lg:leading-[88px]">
            BOOK YOUR <br />
            <span className="inline-flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
              <span className="py-2.5 text-lg sm:text-2xl lg:text-[32px] leading-normal tracking-[2px] sm:tracking-[3.2px]">
                Light
              </span>{" "}
              <span className="text-2xl sm:text-3xl lg:text-[56px] leading-[1.2] lg:leading-[72px]">
                Installation
              </span>{" "}
              <span className="text-2xl sm:text-3xl lg:text-[56px] leading-[1.2] lg:leading-[72px] underline text-[#FFE7AF]">
                TODAY
              </span>
            </span>
            <span
              className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-luminaire text-[#FFE7AF] rotate-[-8.351deg] text-[20px] sm:text-[30px] lg:text-[56px] mt-2 trim-text"
              style={{
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#252323",
                paintOrder: "stroke fill",
              }}
            >
              Holiday
            </span>
          </h2>
          <p className="max-w-[374px] font-satoshi text-base sm:text-lg lg:text-xl font-medium leading-5 sm:leading-6 text-center z-10 mt-4 px-4 sm:px-0">
            Limited slots available—secure your spot for the season.
          </p>
        </div>
        <QuoteButton className="text-base! sm:text-lg! lg:text-xl!">
          <span>Get a free quote</span>
          <Image
            src={ArrowRight.src}
            alt="Arrow Right"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </QuoteButton>
      </div>
    </section>
  );
}
