import { Badge } from "@/components/ui/badge";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { QuoteButton } from "@/components/ui/quote-button";
import { AnimatedImagePair } from "./animated-image-pair";
import {
  commercialInstallationPhotos,
  residentialInstallationPhotos,
} from "@/data/installation-photos";

interface LightingSolutionProps {
  residentialDescription?: string;
  commercialDescription?: string;
  residentialHeading?: string;
  commercialHeading?: string;
  residentialServiceTypes?: string[];
  commercialPropertyTypes?: string[];
}

export function LightingSolution({
  residentialDescription,
  commercialDescription,
  residentialHeading,
  commercialHeading,
  residentialServiceTypes,
  commercialPropertyTypes,
}: LightingSolutionProps = {}) {
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
          <AnimatedImagePair
            photos={residentialInstallationPhotos}
          />
        </div>
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 flex-1 max-w-[521px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 flex-1">
              <h2 className="font-marlton text-[28px] sm:text-[42px] lg:text-[56px] leading-[32px] sm:leading-[48px] lg:leading-[64px] tracking-[1.68px] sm:tracking-[2.52px] lg:tracking-[3.36px] text-center lg:text-left">
                {residentialHeading || "Residential Holiday Light"}{" "}
                {!residentialHeading && (
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
                )}
              </h2>
              <p className="text-white text-base sm:text-lg leading-6 sm:leading-[26px] tracking-[0.16px] sm:tracking-[0.18px]">
                {residentialDescription ||
                  "Whether it\u2019s subtle or show-stopping, our holiday light installation services bring joy to your home all season long. We handle everything, from setup to removal for houses and estates across South Florida."}
              </p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 flex-wrap justify-center lg:justify-start">
              {(
                residentialServiceTypes || [
                  "Houses",
                  "Estates",
                  "Gated Communities",
                ]
              ).map((type) => (
                <Badge key={type} size="sm">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          <QuoteButton className="max-w-fit scale-90 sm:scale-100 mx-auto lg:mx-0">
            <span>Request a Quote</span>{" "}
            <Image
              src={ArrowRight.src}
              alt=""
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
                {commercialHeading || "Commercial HOLIDAY LIGHT"}{" "}
                {!commercialHeading && (
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
                )}
              </h2>
              <p className="text-white text-base sm:text-lg leading-6 sm:leading-[26px] tracking-[0.16px] sm:tracking-[0.18px]">
                {commercialDescription ||
                  "Make your business shine this season with our holiday Christmas light installation services. We create festive, professional displays that attract attention and bring in customers\u2014all installed safely and efficiently."}
              </p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4 flex-wrap justify-center lg:justify-start">
              {(
                commercialPropertyTypes || [
                  "Storefronts",
                  "Office Buildings",
                  "Plazas & Shopping Centers",
                  "Community Spaces",
                ]
              ).map((type) => (
                <Badge key={type} size="sm">
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          <QuoteButton className="max-w-fit scale-90 sm:scale-100 mx-auto lg:mx-0">
            <span>Request a Quote</span>{" "}
            <Image
              src={ArrowRight.src}
              alt=""
              width={32}
              height={33}
            />
          </QuoteButton>
        </div>
        <div className="p-[0_5px_13px_4px] sm:p-[0_7.5px_19px_6.5px] lg:p-[0_9.925px_25.561px_8.762px] order-first lg:order-none">
          <AnimatedImagePair
            photos={commercialInstallationPhotos}
          />
        </div>
      </div>
    </section>
  );
}
