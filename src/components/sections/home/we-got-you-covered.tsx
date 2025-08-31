import { holidayLightInstallation } from "@/data/holiday-light-installation";

export function WeGotYouCovered() {
  return (
    <section
      id="we-got-you-covered"
      className="flex items-center flex-col justify-center gap-21 pb-[113px]"
    >
      <div className="space-y-0.5">
        <h2 className="font-marlton text-[64px] tracking-[3.84px] h-[178px] leading-[88px] max-w-[824px] text-center relative">
          We&rsquo;ve got you covered <br />
          start to finish.
          <span
            className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-luminaire text-[#FFE7AF] rotate-[-14.351deg] text-[56px] pr-10"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "7px",
              WebkitTextStrokeColor: "#252323",
              paintOrder: "stroke fill",
            }}
          >
            From
          </span>
        </h2>
        <p className="text-center font-satoshi text-xl leading-[30px]">
          Every Holiday Light Installation Includes
        </p>
      </div>

      <div className="grid grid-cols-4 max-w-[1200px] gap-6">
        {holidayLightInstallation.map((item) => (
          <div
            key={item.title}
            className="flex pr-3 h-full pb-2.5 flex-col items-center min-h-[315px]"
          >
            <div className="flex w-full h-full flex-col p-3 gap-1.5 rounded-[4.304px] bg-paper-8">
              <div className="flex flex-col items-center justify-start gap-6 w-full h-full p-6 rounded-[6px] border-2 border-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`size-[60px] flex-shrink-0`}
                />
                <h3 className="text-[#1C1C1C] text-center text-[26px] font-[900] font-satoshi [text-box-trim:trim-both] [text-box-edge:text_alphabetic] flex-shrink-0">
                  {item.title}
                </h3>
                <p className="text-[#252323] font-satoshi text-base [text-box-trim:trim-both] [text-box-edge:text_alphabetic] text-center leading-[150%] tracking-[0.16px] flex-1">
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
