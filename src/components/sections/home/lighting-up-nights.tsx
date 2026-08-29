import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { installationPhotos } from "@/data/installation-photos";

export const pin1Class =
  "absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42.033px] h-[46.571px] object-cover";
export const pin2Class =
  "absolute -top-1 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[42.033px] h-[46.571px] object-cover";
export const pin3Class =
  "absolute -top-1 left-6/7 -translate-x-1/2 -translate-y-1/2 w-[42.033px] h-[46.571px] object-cover";

const pinSources = [
  "/images/home/lighting-up-nights/pin-1.png",
  "/images/home/lighting-up-nights/pin-2.png",
  "/images/home/lighting-up-nights/pin-3.png",
] as const;

const rotations = [
  "rotate-[-0.102deg]",
  "rotate-[-2.494deg]",
  "rotate-[1.74deg]",
  "rotate-[-1.212deg]",
] as const;

export const images = installationPhotos.map((photo, index) => ({
  imgSrc: photo.src,
  location: photo.location,
  alt: photo.alt,
  pinSrc: pinSources[index % pinSources.length],
  className: rotations[index % rotations.length],
  imgClassName: undefined as string | undefined,
}));

export function LightingUpNights() {
  return (
    <section
      id="lighting-up-nights"
      className="flex flex-col pb-8 sm:pb-16 md:pb-24 items-center justify-center relative"
    >
      <Image
        src="/images/home/lighting-up-nights/flakes.webp"
        alt=""
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
              alt=""
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
              alt={image.alt}
              width={1500}
              height={1500}
              className={cn(
                "max-w-[287.128px] w-full max-h-[261.025px] aspect-[287.128/261.025] h-full mx-auto object-cover",
                image.imgClassName
              )}
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
