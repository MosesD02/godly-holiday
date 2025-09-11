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
import { FAQ } from "@/components/sections/faq";
import AboutUs from "@/components/sections/home/about-us";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen overflow-x-clip items-center justify-center relative">
      {/* Background Image - Absolute (only covers hero section) */}
      <Image
        src="/images/home/hero/hero.jpg"
        alt="Hero"
        className="absolute top-0 md:top-0 left-0 object-[50%_-200px] md:object-[50%_70%] w-full h-[min(100svh,960px)] object-cover z-0"
        width={2000}
        height={2000}
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
        <LightingUpNights />
        <WeGotYouCovered />
        <HappyCustomer />
        <LightInstallation />
        <WrapperUp />
        <AboutUs />
        <RemoveStress />
        <CTA />
        <Map />
        <FAQ />
      </div>
    </div>
  );
}
