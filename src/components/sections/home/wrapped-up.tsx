import Image from "next/image";
import { Card } from "./wrapped-up/card";
import { wrappedUpCards } from "@/data/wrapped-up";

export function WrapperUp() {
  return (
    <section
      id="wrapped-up"
      className="bg-paper-16-2 flex flex-col items-center justify-center py-16 sm:py-20 lg:py-[120px] gap-12 sm:gap-16 lg:gap-[96px] relative px-4 sm:px-6"
    >
      <Image
        src="/images/home/wrapped-up/grid.webp"
        alt="Grid"
        className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none max-w-[min(calc(100%-60px),300px)] sm:max-w-[min(calc(100%-120px),600px)] lg:max-w-[min(calc(100%-240px),1176px)]"
        width={1176}
        height={1176}
      />
      <Image
        src="/images/home/wrapped-up/lights.webp"
        alt="Lights"
        width={421.576}
        height={279.646}
        className="absolute top-0 -left-16 sm:left-0 h-[140px] w-[211px] sm:h-[210px] sm:w-[316px] lg:h-[280px] lg:w-[422px] object-cover"
      />
      <h2 className="font-marlton text-[33px] sm:text-[50px] lg:text-[66px] leading-[39px] sm:leading-[58px] lg:leading-[77px] tracking-[1.65px] sm:tracking-[2.5px] lg:tracking-[3.2px] text-center relative">
        <span className="text-grain bg-[#191717]">WRAPPED UP</span> <br />
        <span className="text-grain bg-[#191717]">3 SIMPLE STEPS</span>
        <span
          className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-luminaire text-[#FFE7AF] rotate-[-14.351deg] text-[27px] sm:text-[41px] lg:text-[55px] pr-4 sm:pr-6 lg:pr-8 trim-text"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "3.5px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          In
        </span>
      </h2>
      <div className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-[92px]">
        {wrappedUpCards.map((card) => (
          <Card key={card.index} {...card} />
        ))}
      </div>
    </section>
  );
}
