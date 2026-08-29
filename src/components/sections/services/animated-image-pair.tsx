"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { InstallationPhoto } from "@/data/installation-photos";

interface AnimatedImagePairProps {
  photos: readonly [InstallationPhoto, InstallationPhoto];
}

function PolaroidPhoto({
  photo,
  visible,
  variant,
}: {
  photo: InstallationPhoto;
  visible: boolean;
  variant: "left" | "right";
}) {
  const backCardRotation =
    variant === "left" ? "rotate-[2.5deg]" : "-rotate-[2.25deg]";
  const frontCardRotation =
    variant === "left" ? "-rotate-[1.4deg]" : "rotate-[1.6deg]";
  const backCardPosition =
    variant === "left" ? "inset-[7%_1%_2%_5%]" : "inset-[6%_5%_3%_1%]";
  const frontCardPosition =
    variant === "left" ? "inset-[8%_4%_3%_3%]" : "inset-[7%_3%_4%_5%]";
  const pinSrc =
    variant === "left"
      ? "/images/home/lighting-up-nights/pin-2.png"
      : "/images/home/lighting-up-nights/pin-3.png";
  const pinPosition =
    variant === "left"
      ? "left-1/2 top-[2%] w-[13%] -translate-x-1/2"
      : "left-[63%] top-[1%] w-[12%] -translate-x-1/2";

  return (
    <div
      aria-hidden={!visible}
      className="absolute inset-0 transition-all duration-1000 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.98)",
      }}
    >
      <div
        aria-hidden="true"
        className={`bg-paper-8-3 absolute rounded-[3px] shadow-[6px_12px_18px_rgba(0,0,0,0.34)] ${backCardPosition} ${backCardRotation}`}
      />
      <figure
        className={`bg-paper-8-3 absolute rounded-[3px] shadow-[4px_9px_12px_rgba(0,0,0,0.36)] ${frontCardPosition} ${frontCardRotation}`}
      >
        <div className="absolute inset-x-[5%] top-[6%] bottom-[20%] overflow-hidden bg-[#171717]">
          <Image
            src={photo.src}
            alt={visible ? photo.alt : ""}
            fill
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 457px"
            className="object-cover"
            style={{ objectPosition: photo.objectPosition ?? "center" }}
          />
        </div>
        <figcaption className="font-marlton-script absolute inset-x-[5%] bottom-[3%] flex h-[14%] items-center justify-center text-center text-[clamp(1.05rem,2.6vw,1.5rem)] leading-none text-[#242222]">
          {photo.location}
        </figcaption>
      </figure>
      <Image
        src={pinSrc}
        alt=""
        width={120}
        height={120}
        className={`absolute z-20 h-auto drop-shadow-[3px_5px_3px_rgba(0,0,0,0.45)] ${pinPosition}`}
      />
    </div>
  );
}

export function AnimatedImagePair({ photos }: AnimatedImagePairProps) {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[1086/1227] w-[300px] sm:w-[400px] lg:w-[457px]">
      {photos.map((photo, index) => (
        <PolaroidPhoto
          key={photo.src}
          photo={photo}
          visible={showAlt ? index === 1 : index === 0}
          variant={index === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}
