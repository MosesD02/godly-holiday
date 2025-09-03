import Image from "next/image";
import { Card } from "../wrapped-up/card";
import { wrappedUpCards } from "@/data/wrapped-up";

/* eslint-disable @next/next/no-img-element */
export function WrapperUp() {
  return (
    <section
      id="wrapped-up"
      className="bg-paper-16-2 flex flex-col items-center justify-center py-[120px] gap-[96px] relative"
    >
      <Image
        src="/images/home/wrapped-up/grid.png"
        alt="Grid"
        className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none max-w-[min(calc(100%-240px),1176px)]"
        width={1176}
        height={1176}
      />
      <Image
        src="/images/home/wrapped-up/lights.png"
        alt="Lights"
        width={421.576}
        height={279.646}
        className="absolute top-0 left-0 h-[280px] w-[422px] object-cover"
      />
      <h2 className="font-marlton  text-[66px] leading-[77px] tracking-[3.2px] text-center text-transparent relative">
        WRAPPED UP <br /> 3 SIMPLE STEPS
        <span
          className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-luminaire text-[#FFE7AF] rotate-[-14.351deg] text-[55px] pr-8 trim-text"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "7px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          In
        </span>
        <img
          src="/images/home/wrapped-up/title.svg"
          alt="title"
          className="absolute inset-0 left-1/2 top-0 -translate-x-1/2 translte-y-1/2 pointer-events-none"
        />
      </h2>
      <div className="flex flex-col items-center justify-center gap-[92px]">
        {wrappedUpCards.map((card) => (
          <Card key={card.index} {...card} />
        ))}
      </div>
    </section>
  );
}
