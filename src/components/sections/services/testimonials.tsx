import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-[120px] flex flex-col gap-8 md:gap-12 lg:gap-[64px] items-center w-full justify-center"
    >
      <div className="relative">
        <Image
          src="/images/services/testimonials/title.svg"
          alt="Testimonials"
          width={370}
          height={175}
          className="w-full h-full inset-0 absolute scale-110 md:scale-125"
        />
        <h2 className="text-transparent text-center font-marlton text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-22">
          STORIES FROM <br /> <span className="sr-only">Happy</span>HOMES &
          BUSINESSES
        </h2>
      </div>

      <Carousel
        className="max-w-full w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="max-w-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              key={index}
            >
              <div className="bg-paper-6 rounded-[6px] shadow-[0_4px_4px_0_rgba(255,255,255,0.3)_inset] border-2 border-[rgba(106,100,100,0.12)] max-w-full w-full min-h-[271px] h-full flex flex-col items-start gap-4 px-5 py-4 mx-auto">
                <div className="space-y-7">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/services/testimonials/alex.png"
                      alt="Avatar"
                      width={48}
                      height={48}
                      className="size-12 rounded-full"
                    />

                    <div className="space-y-2.5 pt-1.5">
                      <p className="font-marlton text-base trim-text text-[#232323]">
                        ALEX T.
                      </p>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Icons.star key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="font-satoshi text-base text-[#2D2B2B] font-medium leading-6 flex-1">
                    Professional, fast, and festive. Customers loved our holiday
                    lighting company display.”
                  </p>
                </div>

                <p className="flex mt-auto items-center gap-2 relative font-marlton text-base text-[white] font-medium leading-6">
                  <Image
                    src="/images/services/testimonials/city-badge.svg"
                    alt="City Badge"
                    width={94}
                    height={35}
                    className="w-full h-full inset-0 absolute scale-125 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                  />
                  <span className="z-10 px-4 rotate-[-2deg] mb-0.5">
                    SUNRISE
                  </span>
                </p>
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
