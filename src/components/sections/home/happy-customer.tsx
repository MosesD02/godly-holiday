/* eslint-disable @next/next/no-img-element */

export function HappyCustomer() {
  return (
    <div className="py-14 flex items-center flex-col justify-center gap-2 rotate-[2.226deg]">
      {/* Card 1: Default → Sparkle hover */}
      <div className="group relative z-10">
        <div className="font-satoshi flex items-center text-white text-2xl trim-text font-[900] text-center bg-[#2D2B2B] shadow-[0_4px_37.6px_0_#1C1C1C] rounded-[6px] py-4 px-3 transition-all duration-300 group-hover:rotate-4 group-hover:bg-[#111010] border-transparent border-3 group-hover:border-dashed group-hover:border-[#F3CA9E]">
          <img
            src="/images/home/happy-customer/sparkle.svg"
            alt="Sparkle"
            className="size-[40px] rotate-[5deg] transition-transform duration-300 group-hover:rotate-[-115deg]"
          />
          <span className="font-satoshi text-[#F3CA9E] font-[900] text-3xl trim-text underline px-3 underline-offset-8">
            300+
          </span>{" "}
          <span className="transition-all duration-300 group-hover:text-shadow-[0_1px_2.9px_#fff]">
            Happy Customer
          </span>
        </div>
      </div>

      {/* Card 2: Default → Sparkle hover (same as card 1) */}
      <div className="group relative">
        <div className="font-satoshi flex items-center rotate-[-4deg] text-white text-2xl trim-text font-[900] text-center bg-[#2D2B2B] shadow-[0_4px_37.6px_0_#1C1C1C] rounded-[6px] py-4 px-3 transition-all duration-300 group-hover:rotate-4 group-hover:bg-[#111010] border-transparent border-3 group-hover:border-dashed group-hover:border-[#F3CA9E]">
          <img
            src="/images/home/happy-customer/bulb.svg"
            alt="Bulb"
            className="size-[40px] rotate-[5deg] transition-transform duration-300 group-hover:rotate-[-115deg]"
          />
          <span className="font-satoshi text-[#F3CA9E] font-[900] text-3xl trim-text underline px-3 underline-offset-8">
            300+
          </span>{" "}
          <span className="transition-all duration-300 group-hover:text-shadow-[0_1px_2.9px_#fff]">
            Happy Customer
          </span>
        </div>
      </div>
    </div>
  );
}
