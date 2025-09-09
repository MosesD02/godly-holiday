import Image from "next/image";

export function LightingUpNights() {
  return (
    <section
      id="lighting-up-nights"
      className="flex flex-col items-center justify-center relative"
    >
      <Image
        src="/images/home/lighting-up-nights/flakes.webp"
        alt="Flakes"
        className="absolute inset-0 left-1/2 top-0 -translate-x-1/2 pointer-events-none w-full max-w-[1440px] mix-blend-overlay opacity-20"
        width={1440}
        height={1440}
      />
      <h2 className="relative text-[32px] sm:text-[48px] lg:text-[64px] leading-[38px] sm:leading-[56px] lg:leading-[74px] tracking-[1.6px] sm:tracking-[2.4px] lg:tracking-[3.2px] font-marlton text-center pt-16 sm:pt-24 lg:pt-[144px] pb-10 sm:pb-16 lg:pb-[82px]">
        <span className="text-grain bg-white">
          LIGHTING{" "}
          <span className="text-[16px] sm:text-[20px] md:text-[32px] text-grain bg-white">
            UP NIGHTS,
          </span>
        </span>{" "}
        <br />
        <span>
          <span className="text-grain-2 bg-[#ffe7af] underline decoration-[#ffe7af]">
            SPREADING
          </span>{" "}
          HOLIDAY{" "}
          <span
            className="font-luminaire text-[#FFE7AF]"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "6px",
              WebkitTextStrokeColor: "#252323",
              paintOrder: "stroke fill",
            }}
          >
            Joy
          </span>
        </span>
      </h2>
      <div className="relative w-full h-[200px] sm:h-[400px] lg:h-[700.884px] mb-16 sm:mb-20 lg:mb-[102px]">
        <Image
          src="/images/home/lighting-up-nights/images.png"
          alt="Images"
          width={2100}
          height={669.884}
          className="w-full h-full mx-auto object-cover"
        />
      </div>
    </section>
  );
}
