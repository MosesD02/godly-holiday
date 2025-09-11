"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  images,
  pin1Class,
  pin2Class,
  pin3Class,
} from "../home/lighting-up-nights";

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

      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnMouseEnter: false,
            stopOnFocusIn: false,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-2/10 sm:basis-2/10 md:basis-2/10 lg:basis-2/10 xl:basis-2/10 my-8"
            >
              <div
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
                      : image.pinSrc ===
                        "/images/home/lighting-up-nights/pin-2.png"
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
                    {image.location},
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
