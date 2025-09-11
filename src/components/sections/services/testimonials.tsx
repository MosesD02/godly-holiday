import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/services/testimonials";
import Image from "next/image";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-[120px] flex flex-col gap-8 md:gap-12 lg:gap-[64px] items-center w-full justify-center"
    >
      <div className="relative">
        <h2 className="font-marlton relative text-2xl sm:text-3xl lg:text-[40px] text-center leading-[52px] sm:leading-[64px] lg:leading-[88px] tracking-[1.2px] sm:tracking-[1.8px] lg:tracking-[2.4px]">
          <span className="text-3xl bg-[white] text-grain-2 sm:text-4xl lg:text-[64px] lg:leading-20">
            STORIES FROM
          </span>{" "}
          <br />
          <span
            className="font-luminaire text-[#FFE7AF] rotate-[-7.9deg] absolute inset-0 text-2xl sm:text-4xl pt-6 lg:text-6xl leading-normal tracking-normal"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "6px",
              WebkitTextStrokeColor: "#1E1C1C",
              paintOrder: "stroke fill",
            }}
          >
            Happy
          </span>
          <span className="text-3xl bg-[white] text-grain-2 sm:text-4xl lg:text-[64px] leading-tight sm:leading-12 lg:leading-20">
            HOMES & BUSINESSES
          </span>
        </h2>
      </div>

      <Carousel
        className="max-w-full w-full"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="max-w-full">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <CarouselItem
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              key={index}
            >
              <div className="bg-paper-6 ms-2 rounded-[6px] shadow-[0_4px_4px_0_rgba(255,255,255,0.3)_inset] border-2 border-[rgba(106,100,100,0.12)] max-w-full w-full min-h-[230px] h-full flex flex-col items-start gap-4 px-5 py-4 mx-auto">
                <div className="space-y-7">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt="Avatar"
                      width={48}
                      height={48}
                      className="size-12 rounded-full"
                    />

                    <div className="space-y-2.5 pt-1.5">
                      <p className="font-marlton text-base trim-text text-[#232323]">
                        {testimonial.name}
                      </p>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Icons.star key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="font-satoshi text-base text-[#2D2B2B] font-medium leading-6 flex-1">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="gap-3 md:gap-4 flex items-center justify-center mt-12 md:mt-16 lg:mt-[72px] w-full">
          <CarouselPrevious
            variant={"default"}
            className="static inset-0 translate-0 size-12 md:size-14 lg:size-[64px]"
          />
          <CarouselNext
            variant={"default"}
            className="static inset-0 translate-0 size-12 md:size-14 lg:size-[64px]"
          />
        </div>
      </Carousel>
    </section>
  );
}

const Icons = {
  star: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
    >
      <path
        d="M3.13535 13.7565L4.30535 8.69848L0.381348 5.29648L5.56535 4.84648L7.58135 0.0764771L9.59735 4.84648L14.7813 5.29648L10.8573 8.69848L12.0273 13.7565L7.58135 11.0745L3.13535 13.7565Z"
        fill="black"
      />
    </svg>
  ),
};
