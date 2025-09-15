"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

export const pin1Class =
  "absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42.033px] h-[46.571px] object-cover";
export const pin2Class =
  "absolute -top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[42.033px] h-[46.571px] object-cover";
export const pin3Class =
  "absolute -top-1 left-6/7 -translate-x-1/2 -translate-y-1/2 w-[42.033px] h-[46.571px] object-cover";

export const images = [
  {
    imgSrc: "/images/home/lighting-up-nights/images/1.webp",
    location: "Boca Raton",
    pinSrc: "/images/home/lighting-up-nights/pin-1.png",
    className: "rotate-[-0.102deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/2.webp",
    location: "Ft. Lauderdale",
    pinSrc: "/images/home/lighting-up-nights/pin-2.png",
    className: "rotate-[-2.494deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/3.webp",
    location: "Delray Beach",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[1.74deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/4.webp",
    location: "Weston",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[-1.212deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/5.webp",
    location: "Parkland",
    pinSrc: "/images/home/lighting-up-nights/pin-1.png",
    className: "rotate-[-0.102deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/6.webp",
    location: "Lighthouse Point",
    pinSrc: "/images/home/lighting-up-nights/pin-2.png",
    className: "rotate-[-2.494deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/7.webp",
    location: "Pompano Beach",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[1.74deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/8.webp",
    location: "Southwest Ranches",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[-1.212deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/9.webp",
    location: "Parkland",
    pinSrc: "/images/home/lighting-up-nights/pin-1.png",
    className: "rotate-[-0.102deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/10.webp",
    location: "Southwest Ranches",
    pinSrc: "/images/home/lighting-up-nights/pin-2.png",
    className: "rotate-[-2.494deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/11.webp",
    location: "West Palm Beach",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[1.74deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/12.webp",
    location: "Boca Raton",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[-1.212deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/13.webp",
    location: "Pompano Beach",
    pinSrc: "/images/home/lighting-up-nights/pin-1.png",
    className: "rotate-[-0.102deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/14.webp",
    location: "Boca Raton",
    pinSrc: "/images/home/lighting-up-nights/pin-2.png",
    className: "rotate-[-2.494deg]",
  },
  {
    imgSrc: "/images/home/lighting-up-nights/images/15.webp",
    location: "Delray Beach",
    pinSrc: "/images/home/lighting-up-nights/pin-3.png",
    className: "rotate-[1.74deg]",
  },
];

export function LightingUpNights() {
  return (
    <section
      id="lighting-up-nights"
      className="flex flex-col pb-8 sm:pb-16 md:pb-24 items-center justify-center relative"
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

      <Marquee className="[--duration:180s] [--gap:4rem] pt-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-paper-8-3 relative max-w-[328.27px] rounded-[4px] p-[13px] ${image.className}`}
            style={{
              boxShadow:
                "4px 8px 6px 0 rgba(0, 0, 0, 0.25), 0 3.015px 3.015px 0 rgba(0, 0, 0, 0.25), 0 3.015px 3.015px 0 rgba(255, 255, 255, 0.30) inset",
            }}
          >
            <Image
              src={image.pinSrc}
              alt="Images"
              width={1500}
              height={1500}
              className={
                image.pinSrc === "/images/home/lighting-up-nights/pin-1.png"
                  ? pin1Class
                  : image.pinSrc === "/images/home/lighting-up-nights/pin-2.png"
                  ? pin2Class
                  : pin3Class
              }
            />

            <Image
              src={image.imgSrc}
              alt="Images"
              width={1500}
              height={1500}
              className="max-w-[287.128px] w-full max-h-[261.025px] aspect-[287.128/261.025] h-full mx-auto object-cover"
            />

            <div className="flex flex-col text-center mt-4 text-[#2D2B2B] leading-6">
              <div className="flex flex-col gap-2 font-marlton-script text-2xl">
                {image.location}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
