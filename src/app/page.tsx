import { HappyCustomer } from "@/components/sections/home/happy-customer";
import { Hero } from "@/components/sections/home/hero";
import { LightInstallation } from "@/components/sections/home/light-installation";
import { WrapperUp } from "@/components/sections/home/wrapped-up";
import { WeGotYouCovered } from "@/components/sections/home/we-got-you-covered";
import { LightingUpNights } from "@/components/sections/home/lighting-up-nights";
import Image from "next/image";
import { RemoveStress } from "@/components/sections/home/remove-stress";
import { CTA } from "@/components/sections/home/cta";
import { Map } from "@/components/sections/home/map";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* Background Image - Absolute (only covers hero section) */}
      <Image
        src="/images/home/hero/hero.webp"
        alt="Hero"
        className="absolute top-0 left-0 w-full h-[min(100svh,960px)] object-cover z-0"
        width={1920}
        height={960}
      />

      {/* Gradient Overlay - Absolute (only covers hero section) */}
      <div
        className="absolute top-0 left-0 w-full h-[min(100svh,960px)] z-10"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #201E1E 79.64%)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 w-full">
        <Hero />
        <WeGotYouCovered />
        <HappyCustomer />
        <LightInstallation />
        <WrapperUp />
        <LightingUpNights />
        <RemoveStress />
        <CTA />
        <Map />
      </div>
    </div>
  );
}
