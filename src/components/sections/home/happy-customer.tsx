import Image from "next/image";

export function HappyCustomer() {
  return (
    <div className="py-8 ms:py-10 sm:py-12 lg:py-14 flex items-center flex-col justify-center gap-1.5 ms:gap-2 rotate-[2.226deg] px-4">
      {/* Card 1: Default → Sparkle hover */}
      <div className="group relative z-10">
        <div className="font-satoshi flex items-center text-white text-lg ms:text-xl sm:text-2xl trim-text font-[900] text-center bg-[#2D2B2B] shadow-[0_4px_37.6px_0_#1C1C1C] rounded-[4px] ms:rounded-[5px] sm:rounded-[6px] py-3 ms:py-3.5 sm:py-4 px-2.5 ms:px-3 transition-all duration-300 group-hover:rotate-4 group-hover:bg-[#111010] border-transparent border-2 ms:border-3 group-hover:border-dashed group-hover:border-[#F3CA9E]">
          <Image
            src="/images/home/happy-customer/sparkle.svg"
            alt="Sparkle"
            className="size-[32px] ms:size-[36px] sm:size-[40px] rotate-[5deg] transition-transform duration-300 group-hover:rotate-[-115deg]"
            width={40}
            height={40}
          />
          <span className="font-satoshi text-[#F3CA9E] font-[900] text-2xl ms:text-2xl sm:text-3xl trim-text underline px-2 ms:px-2.5 sm:px-3 underline-offset-6 ms:underline-offset-7 sm:underline-offset-8">
            300+
          </span>{" "}
          <span className="transition-all duration-300 group-hover:text-shadow-[0_1px_2.9px_#fff]">
            Happy Customer
          </span>
        </div>
      </div>

      {/* Card 2: Default → Sparkle hover (same as card 1) */}
      <div className="group relative">
        <div className="font-satoshi flex items-center rotate-[-4deg] text-white text-lg ms:text-xl sm:text-2xl trim-text font-[900] text-center bg-[#2D2B2B] shadow-[0_4px_37.6px_0_#1C1C1C] rounded-[4px] ms:rounded-[5px] sm:rounded-[6px] py-3 ms:py-3.5 sm:py-4 px-2.5 ms:px-3 transition-all duration-300 group-hover:rotate-4 group-hover:bg-[#111010] border-transparent border-2 ms:border-3 group-hover:border-dashed group-hover:border-[#F3CA9E]">
          <Image
            src="/images/home/happy-customer/bulb.svg"
            alt="Bulb"
            className="size-[32px] ms:size-[36px] sm:size-[40px] rotate-[5deg] transition-transform duration-300 group-hover:rotate-[-115deg]"
            width={40}
            height={40}
          />
          <span className="font-satoshi text-[#F3CA9E] font-[900] text-2xl ms:text-2xl sm:text-3xl trim-text underline px-2 ms:px-2.5 sm:px-3 underline-offset-6 ms:underline-offset-7 sm:underline-offset-8">
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
