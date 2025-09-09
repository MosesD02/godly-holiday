import Image from "next/image";

import Link from "next/link";
import { QuoteForm } from "./hero/quote-form";

export function CTA() {
  return (
    <section
      id="cta"
      className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-[96px] max-w-[1344px] mx-auto justify-center py-12 sm:py-20 lg:py-[120px] w-full relative px-4 sm:px-6 lg:px-0"
    >
      <Image
        src="/images/home/cta/flowers.webp"
        alt="Flowers"
        width={410}
        height={614}
        className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/3 -z-10 object-contain hidden lg:block"
      />
      <div className="space-y-6 lg:space-y-10 flex-1 lg:flex-none">
        <div className="">
          <h2 className="max-w-[562px] text-[28px] sm:text-4xl lg:text-[52px] font-marlton text-white leading-[50px] sm:leading-[64px] lg:leading-[88px] tracking-[1px] sm:tracking-[2px] lg:tracking-[3.12px] text-center relative">
            Together, let&apos;s make EVENINGS your Favorite part of every day
            <span
              className="absolute inset-0 left-1/2 top-1/2 -translate-y-1/2 sm:mt-1 md:mt-1 lg:-mt-2 -translate-x-1/2 font-luminaire text-[#FFE7AF] rotate-[-8.065deg] text-3xl sm:text-4xl lg:text-[52px] ps-4 sm:ps-6 lg:ps-8 trim-text"
              style={{
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                WebkitTextStrokeWidth: "6px",
                WebkitTextStrokeColor: "#252323",
                paintOrder: "stroke fill",
              }}
            >
              Holiday
            </span>
          </h2>
          <p className="text-center font-satoshi text-lg sm:text-xl font-medium leading-6 px-4 sm:px-0">
            Contact us today for your free quote
          </p>
        </div>

        <Link
          href="tel:+19547514128"
          className="relative max-w-fit mx-auto min-w-[280px] sm:min-w-[320px] lg:min-w-[336px] text-center text-[#2D2B2B] flex flex-col gap-1 px-4 sm:px-6 py-6 sm:py-8 hover:cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <Image
            src="/images/textures/cta-num-bg.webp"
            alt="CTA Background"
            width={562.141}
            height={562.141}
            className="absolute inset-0 w-full h-full -z-10"
          />
          <div className="rotate-[-2deg] font-marlton text-xl sm:text-2xl flex items-center gap-2 sm:gap-2.5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M7.83558 0.962002C8.01475 0.955695 8.19232 0.997673 8.34971 1.08354C8.50709 1.16941 8.63849 1.296 8.73016 1.45008L8.78497 1.55823L10.9582 6.48539C11.0458 6.68361 11.0665 6.90491 11.0174 7.11595C10.9683 7.327 10.852 7.51639 10.6859 7.6556L10.5884 7.72705L8.95041 8.78886L9.01697 8.8896C9.85739 10.126 10.9643 11.1583 12.2564 11.9104L12.3605 11.9688L13.3065 10.2627C13.4113 10.073 13.5749 9.92254 13.7727 9.83388C13.9705 9.74523 14.1917 9.72322 14.403 9.77117L14.5193 9.80613L19.5861 11.6304C19.7548 11.691 19.9041 11.7958 20.0184 11.9339C20.1327 12.0719 20.2078 12.2382 20.2358 12.4152L20.2471 12.5359L20.3867 16.5335C20.4445 18.1895 19.1492 19.5785 17.4332 19.6364C8.8412 19.4151 1.76769 12.819 0.944542 4.20447C0.917794 3.43973 1.18429 2.69367 1.6895 2.11894C2.1947 1.54421 2.90044 1.18426 3.6623 1.11274L3.83802 1.1016L7.83558 0.962002Z"
                fill="#2D2B2B"
              />
            </svg>
            <span className="trim-text text-lg sm:text-xl lg:text-2xl">
              (954) 751-4128
            </span>
          </div>
          <p className="rotate-[-2deg] text-base sm:text-lg font-satoshi trakcing-[0.18px]">
            For Immediate Assistance
          </p>
        </Link>
      </div>
      <div className="relative max-w-[480px] sm:max-w-[520px] lg:max-w-[562.141px] w-full">
        <QuoteForm size="sm" hideImages />
      </div>
    </section>
  );
}
