"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import AutoScroll from "embla-carousel-auto-scroll";

const images = [
  "/images/home/lighting-up-nights/images_1.png",
  "/images/home/lighting-up-nights/images_2.png",
  "/images/home/lighting-up-nights/images_3.png",
  "/images/home/lighting-up-nights/images_4.png",
  "/images/home/lighting-up-nights/images_2.png",
  "/images/home/lighting-up-nights/images_3.png",
  "/images/home/lighting-up-nights/images_4.png",
];

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
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 overflow-hidden"
            >
              <Image
                src={image}
                alt="Images"
                width={2100}
                height={669.884}
                className="w-full h-full mx-auto object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
