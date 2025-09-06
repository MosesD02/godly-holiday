import { howItWorks } from "@/data/services/how-it-works";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 lg:py-[120px] bg-paper-8 relative"
    >
      <h2 className="text-center px-4 font-marlton leading-tight text-[40px] sm:text-[56px] lg:text-[64px] text-[#252525] relative">
        How <br />
        <span
          className="font-luminaire text-[#FFE7AF] text-[24px] sm:text-[48px] z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "6px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          Its
        </span>
        Works
      </h2>

      <div className="mt-[40px] sm:mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto max-w-[1056px] px-4">
        {howItWorks.map((item, index) => (
          <div
            key={item.title}
            className="flex h-auto md:h-[280px] flex-col p-3 sm:p-4 rounded-[20px] bg-[#E7E3DF]"
            style={{
              boxShadow:
                "0 3.015px 3.015px 0 rgba(0, 0, 0, 0.25), 0 3.015px 3.015px 0 rgba(255, 255, 255, 0.30) inset, 0 4px 4px 0 rgba(255, 255, 255, 0.30) inset",
            }}
          >
            <div className="p-4 sm:p-6 h-full border border-dashed border-[#312E2C] rounded-[8px] flex flex-col justify-between">
              <h4 className="font-marlton text-[rgba(49,49,49,0.19)] text-4xl sm:text-5xl md:text-[64px]">
                0{index + 1}.
              </h4>
              <div className="space-y-2 text-[#2D2B2B]">
                <h3 className="font-satoshi text-xl sm:text-2xl font-bold leading-8">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-medium leading-7.5">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-16 sm:mt-20">
        <Image
          src={"/images/services/how-it-works/trusted-by.svg"}
          alt={"Trusted by Homeowners and businesses"}
          width={730}
          height={300}
          className="mx-auto z-10 relative pointer-events-none w-full max-w-[730px] h-auto"
        />
        <p className="text-white -mt-4 md:-mt-6 max-w-[765px] px-4 font-marlton text-lg sm:text-2xl md:text-[32px] leading-8 md:leading-10 tracking-[0.75px] text-center mx-auto">
          Fort Lauderdale, Weston, Boca Raton, Pompano Beach, and Lighthouse
          Point.
        </p>
      </div>
    </section>
  );
}
