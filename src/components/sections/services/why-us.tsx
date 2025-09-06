import Image from "next/image";
import { whyUs } from "@/data/services/why-us";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 lg:py-[120px] bg-paper-8 relative"
    >
      <h2 className="text-center leading-6">
        <span
          className="font-luminaire text-[#FFE7AF] text-[24px] sm:text-[48px] z-10 relative"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "6px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          Why
          <br />
        </span>
        <span className="font-marlton text-[32px] sm:text-[64px] text-[#252525]">
          Choose Us
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-[30px] max-w-[1200px] w-full mx-auto mt-8 md:mt-12 lg:mt-15 px-4 lg:px-0">
        {whyUs.map((item) => (
          <div key={item.title} className="bg-paper-8-2 rounded-[12px] p-2">
            <div className="flex flex-col h-full text-center items-center justify-center gap-8 px-4 py-6 rounded-[8px] border border-[#2D2B2B] border-dashed">
              <Image src={item.image} alt={item.title} width={40} height={40} />
              <div className="space-y-2">
                <h3 className="font-marlton text-xl text-[#2D2B2B] uppercase">
                  {item.title}
                </h3>
                <p className="font-satoshi text-center text-[#2D2B2B] text-sm font-medium leading-5">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Image
        src="/images/services/why-us/left-left.png"
        alt="Why Choose Us"
        width={320}
        height={320}
        className="absolute left-0 top-0 hidden md:block"
      />

      <Image
        src="/images/services/why-us/left-right.png"
        alt="Why Choose Us"
        width={320}
        height={320}
        className="absolute right-0 top-0 hidden md:block"
      />
    </section>
  );
}
