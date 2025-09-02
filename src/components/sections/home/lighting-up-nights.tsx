import Image from "next/image";

export function LightingUpNights() {
  return (
    <section
      id="lighting-up-nights"
      className="flex flex-col items-center justify-center relative"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home/lighting-up-nights/flakes.png"
        alt="Flakes"
        className="absolute inset-0 left-1/2 top-0 -translate-x-1/2 pointer-events-none max-w-[1440px] mix-blend-overlay opacity-20"
      />
      <h2 className="relative text-[64px] leading-[74px] tracking-[3.2px] font-marlton text-center pt-[144px] pb-[82px] text-transparent">
        <span>LIGHTING UP NIGHTS</span> <br />
        <span>SPREADING HOLIDAY JOY</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/lighting-up-nights/heading.svg"
          className="absolute top-1/2 -translate-y-9 pointer-events-none"
          alt="Heading"
        />
      </h2>
      <div className="relative w-full h-[669.884px] mb-[102px]">
        <Image
          src="/images/home/lighting-up-nights/images.png"
          alt="Images"
          width={2100}
          height={669.884}
          className="w-[2100px] h-full mx-auto object-cover"
        />
      </div>
    </section>
  );
}
