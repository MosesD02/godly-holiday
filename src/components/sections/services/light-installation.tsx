import Image from "next/image";

export function RecentLightInstallation() {
  return (
    <section
      id="recent-light-installation"
      className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 gap-8 md:gap-12 lg:gap-16"
    >
      <h2 className="relative text-[32px]  sm:text-[48px] lg:text-[64px] leading-[38px] sm:leading-[56px] lg:leading-[88px] max-w-fit max-h-fit tracking-[1.6px] sm:tracking-[2.4px] lg:tracking-[3.2px] font-marlton text-center mt-16 sm:mt-24 lg:mt-[144px] mb-10 sm:mb-16 lg:mb-[82px]">
        <span className="text-grain bg-white relative">
          RECENT HOLIDAY LIGHT <br /> INSTALLATIONS IN
        </span>
        <span
          className="font-luminaire text-[#FFE7AF] rotate-[-8.115deg] absolute -bottom-6 right-6 translate-x-1/2"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "6px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          South Florida
        </span>
      </h2>

      <Image
        src="/images/services/light-installation/img.webp"
        alt="Recent Light Installation"
        width={1920}
        height={1080}
        className="w-full h-auto max-w-full object-cover"
      />
    </section>
  );
}
