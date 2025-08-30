/* eslint-disable @next/next/no-img-element */
import { Hero } from "@/components/sections/home/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* Background Image - Absolute (only covers hero section) */}
      <img
        src="/images/home/hero/hero.jpg"
        alt="Hero"
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      />

      {/* Gradient Overlay - Absolute (only covers hero section) */}
      <div
        className="absolute top-0 left-0 w-full h-screen z-10"
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
      </div>
    </div>
  );
}
