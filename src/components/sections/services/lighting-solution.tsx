"use client";

import { Badge } from "@/components/ui/badge";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { QuoteButton } from "@/components/ui/quote-button";
import { useEffect, useState } from "react";

export function LightingSolution() {
  const [showResidentialAlt, setShowResidentialAlt] = useState(false);
  const [showCommercialAlt, setShowCommercialAlt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowResidentialAlt((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCommercialAlt((prev) => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="light-installation"
      className="flex items-center max-w-[1330px] mx-auto flex-col justify-center gap-12 sm:gap-16 lg:gap-21 pb-16 sm:pb-20 lg:pb-[113px] mt-8 sm:mt-10 lg:mt-14 px-4 sm:px-6"
    >
      <h2 className="font-marlton relative text-center lg:text-left">
        <span className="text-grain text-[18px] sm:text-[24px] md:text-[30px] bg-white absolute left-0 -top-10 sm:-top-14 md:-top-20 -translate-x-full">
          Our
        </span>{" "}
        <span className="text-[32px] sm:text-[48px] md:text-[64px] text-grain bg-white">
          Lighting
        </span>{" "}
        <span
          className="font-luminaire text-[#FFE7AF] text-[32px] sm:text-[48px] md:text-[64px] absolute -right-3 sm:-right-4 md:-right-6 -bottom-3 sm:-bottom-4 translate-y-1/2 rotate-[-8deg]"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "6px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          Solutions
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-[156px] self-stretch">
        <div className="p-[0_5px_13px_4px] sm:p-[0_7.5px_19px_6.5px] lg:p-[0_9.925px_25.561px_8.762px] order-first lg:order-none">
          <div className="relative w-full">
            <Image
              src="/images/home/light-installation/resident.png"
              alt="Residential"
              width={481.34}
              height={580.705}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: showResidentialAlt ? 0 : 1,
              }}
            />
            <Image
              src="/images/home/light-installation/residential-2.png"
              alt="Residential Alt"
              width={481.34}
              height={580.705}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                opacity: showResidentialAlt ? 1 : 0,
                transform: showResidentialAlt ? 'scale(1.02)' : 'scale(0.98)',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 flex-1 max-w-[521px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 flex-1">
              <h2 className="font-marlton text-[28px] sm:text-[42px] lg:text-[56px] leading-[32px] sm:leading-[48px] lg:leading-[64px] tracking-[1.68px] sm:tracking-[2.52px] lg:tracking-[3.36px] text-center lg:text-left">
                Residential Holiday Light{" "}
                <span
                  className="font-luminaire inline-block text-[#FFE7AF] md:-translate-x-8"
                  style={{
                    transform: "rotate(-8.115deg)",
                    textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#252323",
                    paintOrder: "stroke fill",
                  }}
                >
                  Installation
                </span>
              </h2>
              <p className="text-white text-base sm:text-lg leading-6 sm:leading-[26px] tracking-[0.16px] sm:tracking-[0.18px]">
                Whether it&rsquo;s subtle or show-stopping, our holiday light
                installation services bring joy to your home all season long. We
                handle everything, from setup to removal for houses and estates
                across South Florida.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
              <Badge size="sm">Houses</Badge>
              <Badge size="sm">Estates</Badge>
              <Badge size="sm">Gated Communities</Badge>
            </div>
          </div>
          <QuoteButton className="max-w-fit scale-90 sm:scale-100 mx-auto lg:mx-0">
            <span>Request a Quote</span>{" "}
            <Image
              src={ArrowRight.src}
              alt="Arrow Right"
              width={32}
              height={33}
            />
          </QuoteButton>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-[156px] self-stretch">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 flex-1 max-w-[521px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 flex-1">
              <h2 className="font-marlton text-[28px] sm:text-[42px] lg:text-[56px] leading-[32px] sm:leading-[48px] lg:leading-[64px] tracking-[1.68px] sm:tracking-[2.52px] lg:tracking-[3.36px] text-center lg:text-left">
                Commercial HOLIDAY LIGHT{" "}
                <span
                  className="font-luminaire inline-block text-[#FFE7AF] md:-translate-x-8"
                  style={{
                    transform: "rotate(-8.115deg)",
                    textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#252323",
                    paintOrder: "stroke fill",
                  }}
                >
                  Installation
                </span>
              </h2>
              <p className="text-white text-base sm:text-lg leading-6 sm:leading-[26px] tracking-[0.16px] sm:tracking-[0.18px]">
                Make your business shine this season with our holiday Christmas
                light installation services. We create festive, professional
                displays that attract attention and bring in customers—all
                installed safely and efficiently.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
              <Badge size="sm">Storefronts</Badge>
              <Badge size="sm">Office Buildings</Badge>
              <Badge size="sm">Plazas & Shopping Centers</Badge>
              <Badge size="sm">Community Spaces</Badge>
            </div>
          </div>
          <QuoteButton className="max-w-fit scale-90 sm:scale-100 mx-auto lg:mx-0">
            <span>Request a Quote</span>{" "}
            <Image
              src={ArrowRight.src}
              alt="Arrow Right"
              width={32}
              height={33}
            />
          </QuoteButton>
        </div>
        <div className="p-[0_5px_13px_4px] sm:p-[0_7.5px_19px_6.5px] lg:p-[0_9.925px_25.561px_8.762px] order-first lg:order-none">
          <div className="relative w-full">
            <Image
              src="/images/home/light-installation/commercial.png"
              alt="Commercial"
              width={481.34}
              height={580.705}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: showCommercialAlt ? 0 : 1,
              }}
            />
            <Image
              src="/images/home/light-installation/commercial-2.png"
              alt="Commercial Alt"
              width={481.34}
              height={580.705}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                opacity: showCommercialAlt ? 1 : 0,
                transform: showCommercialAlt ? 'scale(1.02)' : 'scale(0.98)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
