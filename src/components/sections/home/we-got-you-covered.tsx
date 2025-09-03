import { holidayLightInstallation } from "@/data/holiday-light-installation";
import Image from "next/image";

export function WeGotYouCovered() {
  return (
    <section
      id="we-got-you-covered"
      className="flex items-center flex-col justify-center gap-12 sm:gap-16 lg:gap-21 pb-16 sm:pb-20 lg:pb-[113px] px-4 sm:px-6"
    >
      <div className="space-y-0.5">
        <h2 className="font-marlton text-[32px] sm:text-[48px] lg:text-[64px] tracking-[1.92px] sm:tracking-[2.88px] lg:tracking-[3.84px] h-[89px] sm:h-[133px] lg:h-[178px] leading-[44px] sm:leading-[66px] lg:leading-[88px] max-w-[412px] sm:max-w-[618px] lg:max-w-[824px] text-center relative">
          We&rsquo;ve got you covered <br />
          start to finish.
          <span
            className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-luminaire text-[#FFE7AF] rotate-[-14.351deg] text-[28px] sm:text-[42px] lg:text-[56px] pr-4 sm:pr-6 lg:pr-8 trim-text"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "3.5px",
              WebkitTextStrokeColor: "#252323",
              paintOrder: "stroke fill",
            }}
          >
            From
          </span>
        </h2>
        <p className="text-center font-satoshi text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-[30px]">
          Every Holiday Light Installation Includes
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] gap-4 sm:gap-5 lg:gap-6 w-full">
        {holidayLightInstallation.map((item) => (
          <div
            key={item.title}
            className="flex pr-2 sm:pr-2.5 lg:pr-3 h-full pb-2 sm:pb-2.5 flex-col items-center min-h-[250px] sm:min-h-[280px] lg:min-h-[315px]"
          >
            <div className="flex w-full h-full flex-col p-2 sm:p-2.5 lg:p-3 gap-1 sm:gap-1.5 rounded-[3px] sm:rounded-[4.304px] bg-paper-8">
              <div className="flex flex-col items-center justify-start gap-4 sm:gap-5 lg:gap-6 w-full h-full p-4 sm:p-5 lg:p-6 rounded-[4px] sm:rounded-[6px] border-2 border-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  className={`size-[48px] sm:size-[54px] lg:size-[60px] flex-shrink-0`}
                  width={60}
                  height={60}
                />
                <h3 className="text-[#1C1C1C] text-center text-[18px] sm:text-[22px] lg:text-[26px] font-[900] font-satoshi [text-box-trim:trim-both] [text-box-edge:text_alphabetic] flex-shrink-0">
                  {item.title}
                </h3>
                <p className="text-[#252323] font-satoshi text-sm sm:text-base [text-box-trim:trim-both] [text-box-edge:text_alphabetic] text-center leading-[150%] tracking-[0.16px] flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
