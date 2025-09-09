"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { EmblaCarouselType } from "embla-carousel";

import ticketBg from "@/assets/ticket-bg.webp";

import fam1 from "@/assets/fam-1.webp";
import fam2 from "@/assets/fam-2.webp";
import img1 from "@/assets/rocket.webp";
import img2 from "@/assets/plant.webp";
import img3 from "@/assets/eagle.webp";
import { QuoteButton } from "@/components/ui/quote-button";
import Autoplay from "embla-carousel-autoplay";
import ArrowRight from "@/assets/arrow-right.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const steps = [
  {
    number: "01",
    icon: img1,
    title: "QUICK ESTIMATES",
    text: (
      <>
        We offer free estimates within{" "}
        <span className="font-bold">24 hours</span> for all jobs.
      </>
    ),
  },
  {
    number: "02",
    icon: img2,
    title: "FULLY INSURED",
    text: "No need to worry, we are insured up to $2M plus workers comp.",
  },
  {
    number: "03",
    icon: img3,
    title: "BUILT ON INTEGRITY",
    text: "If you’re ever dissatisfied with our service, we won’t stop until we’ve made it right.",
  },
];

const AboutUs = () => {
  // Add state to track active card
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Toggle function to handle touch interactions
  const toggleCard = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="about-us"
      className="bg-paper-8 flex flex-col items-center justify-items-center gap-10 px-[30px] pt-[50px] pb-[100px] md:px-[86px] md:py-[150px]"
    >
      <div
        className="relative flex h-[120px] w-full max-w-[300px] -rotate-2 flex-col items-center justify-center bg-cover bg-center bg-no-repeat sm:h-[150px] sm:max-w-[400px] sm:scale-90 md:h-[200px] md:max-w-[600px] lg:h-[210px] lg:max-w-[758px] lg:scale-100"
        style={{
          backgroundImage: `url(${ticketBg.src})`,
          backgroundSize: "contain",
        }}
      >
        <div className="flex -translate-y-3 sm:-translate-y-5 md:-translate-y-7 flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <h2 className="trim-text font-marlton -rotate-2 text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5.76px] text-[#191717]">
            old fashioned Values
          </h2>
          <h4 className="absolute top-3/5 -mt-2 sm:-mt-3 md:-mt-4 -rotate-2 text-lg sm:text-2xl md:text-3xl font-normal text-[#191717]">
            <span className="text-[16px] sm:text-[24px] md:text-[32px] underline font-marlton">
              UNRIVALED
            </span>{" "}
            <span
              className="trim-text text-grain py-12! quality-text font-luminaire text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] bg-[#B0906E] relative z-10"
              data-text="Quality"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              Quality
            </span>
          </h4>
        </div>
      </div>
      <Story />
      <div className="flex flex-col items-center justify-center py-8 sm:py-10 md:gap-10">
        <h4
          className="text-grain font-marlton trim !bg-[#191717] text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[64px] font-normal tracking-wide"
          data-text="Delivering"
        >
          Delivering
        </h4>
        <h4 className="trim text-center font-marlton text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[64px] font-normal tracking-wide md:-mt-6">
          <span
            className="md:text-grain font-marlton trim relative text-[#61503E] underline"
            data-text="Trustworthy"
          >
            Trustworthy
          </span>{" "}
          <span
            className="text-grain font-marlton trim !bg-[#191717]"
            data-text="Service"
          >
            Service
          </span>
        </h4>
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap justify-center sm:gap-3 md:gap-6 lg:gap-8 px-2 sm:px-4">
        {steps.map((step, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={index}
              className={
                "paper-bg-8 group relative flex w-full sm:w-[calc(50%-0.5rem)] lg:w-full lg:max-w-[350px] rounded-[6px] p-2 " +
                (isActive
                  ? "bg-[#E7E3E0] text-black"
                  : "bg-[#201E1E] text-[#FFFFFF]") +
                " hover:bg-[#E7E3E0] hover:text-black"
              }
              onClick={() => toggleCard(index)}
            >
              <Image
                src={step.icon.src}
                alt={step.title}
                width={500}
                height={500}
                className={`absolute top-0 object-contain object-right right-0 h-[60%] sm:h-[70%] md:h-[80%] ${
                  index === 1
                    ? (isActive ? "filter-[invert(0)]" : "filter-[invert(1)]") +
                      " group-hover:filter-[invert(0)]"
                    : (isActive ? "filter-[invert(1)]" : "") +
                      " group-hover:filter-[invert(1)]"
                }`}
              />
              <div className="relative z-10 flex min-h-[200px] sm:min-h-[220px] md:min-h-65 flex-col items-start justify-between gap-4 sm:gap-8 md:gap-15 rounded-md border border-dashed border-[#6A6464] p-3 sm:p-4">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                  <h5 className="text-sm sm:text-base font-normal font-marlton">
                    <span className="text-sm sm:text-base">{step.number}</span>
                  </h5>

                  <div
                    className={`text-grain font-marlton max-w-[170px] text-left text-2xl sm:text-3xl md:text-4xl ${
                      isActive ? "!bg-[#2D2B2B]" : "!bg-white"
                    } group-hover:bg-[#2D2B2B]!`}
                    data-text={step.title}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {step.title}
                  </div>
                </div>

                <p
                  className={`text-grain font-inter text-left text-sm sm:text-base ${
                    isActive ? "!bg-[#2D2B2B]" : "!bg-white"
                  } group-hover:bg-[#2D2B2B]!`}
                  data-text={step.text}
                >
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <QuoteButton>
        <span>Get a Free Estimate</span>
        <Image src={ArrowRight.src} alt="Arrow Right" width={32} height={32} />
      </QuoteButton>
      {/* <EstimateButton /> */}
    </div>
  );
};

export default AboutUs;

function Story() {
  const [api, setApi] = useState<EmblaCarouselType | undefined>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Setup event listeners for the carousel
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);
  return (
    <div
      className="flex w-full max-w-[1100px] flex-col gap-6 sm:gap-8 rounded-[12px] bg-[#1F1D1D] p-3 sm:p-4 md:mt-12 lg:flex-row md:gap-10"
      style={{
        boxShadow:
          "0px 4px 4px 0px rgba(255, 255, 255, 0.30) inset, 0px 3.015px 3.015px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="relative overflow-visible w-full lg:max-w-[40%]">
        <Carousel
          className="carousel-dots pointer-none: relative w-full overflow-visible"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <div className="absolute top-2 -left-6 z-50 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
          <div className="absolute -right-6 bottom-2 z-50 h-3 w-18 -rotate-45 bg-[#F3CA9ECC]"></div>
          <CarouselContent className="overflow-visible">
            <CarouselItem className="overflow-visible">
              <div className="relative min-h-[200px] overflow-visible rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image
                  src={fam1}
                  alt="family"
                  className="h-contain bg-full h-full overflow-clip"
                />
                <p className="text-center font-luminaire mt-3 text-base">
                  Our family business
                </p>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative min-h-[200px] rounded-sm bg-[#e7e3df] p-2 text-[#1c1c1c]">
                <Image src={fam2} alt="family" />
                <p className="text-center font-luminaire mt-3 text-base">
                  Quality service
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-[#F3CA9E]" : "bg-[#F3CA9E]/30"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-6 sm:gap-8 md:gap-[40px] p-2 sm:p-3">
        <h4 className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
          <span
            className="text-grain !bg-[#F3CA9E] font-['marlton'] whitespace-nowrap"
            data-text="LOCAL"
          >
            LOCAL
          </span>
          <span
            className="text-grain !bg-white font-['marlton'] whitespace-nowrap"
            data-text="FAMILY"
          >
            FAMILY
          </span>
          <span
            className="text-grain !bg-white font-['marlton'] whitespace-nowrap"
            data-text="OWNED"
          >
            OWNED
          </span>
        </h4>
        <p
          className="text-justify text-sm tracking-wide text-[#A4A4A4] md:text-base"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          Godly is founded by{" "}
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">
            Perfectionist
          </span>
          looking to bridge the gaps between honest blue-collar work, modern
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">
            Craftsmanship
          </span>
          , and a fair price.
        </p>
        <p
          className="text-justify text-sm tracking-wide text-[#A4A4A4] md:text-base"
          style={{
            fontFamily: "var(--font-inter)",
          }}
        >
          We want to ‘reverse time’ back to when you
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">Trusted</span> the
          people working on your home or Business. Back to when the standard was
          to do exactly what you said you&apos;d do, rather than using it as
          merely a
          <span className="bg-[#2D2B2B] px-1 text-[#F3CA9E]">Guideline </span>.
        </p>
      </div>
    </div>
  );
}
