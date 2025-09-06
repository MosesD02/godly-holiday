import Image from "next/image";

export function ServicesCTA() {
  return (
    <section className="bg-paper-16-2 pb-[114px] space-y-[96px]">
      <Image
        src="/images/services/cta/lights.png"
        alt="Lights"
        width={1452}
        height={350}
        className="w-full h-[350px] object-contain"
      />

      <div className="max-w-[1332px] mx-auto bg-[#1F1D1D] h-full max-h-[536.828px] rounded-[12px] flex flex-col p-20 items-center justify-center gap-[64px] shadow-[0_3.015px_3.015px_0_rgba(0,0,0,0.25),_0_4px_4px_0_rgba(255,255,255,0.30)_inset] relative">
        <Image
          src="/images/services/cta/bg.png"
          alt="cta bg"
          width={1212}
          height={928}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <h2 className="z-10 text-center relative font-marlton text-white text-[64px] leading-[88px]">
          BOOK YOUR <br />
          <span className="inline-flex items-start gap-3">
            <span className="py-2.5 text-[32px] leading-normal tracking-[3.2px]">
              Light
            </span>{" "}
            <span className="text-[56px] leading-[72px]">Installation</span>{" "}
            <span className="text-[56px] leading-[72px] underline text-[#FFE7AF]">
              TODAY
            </span>
          </span>
          <span
            className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-luminaire text-[#FFE7AF] rotate-[-8.351deg] text-[27px] sm:text-[41px] lg:text-[56px] mt-2 trim-text"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "3.5px",
              WebkitTextStrokeColor: "#252323",
              paintOrder: "stroke fill",
            }}
          >
            Holiday
          </span>
        </h2>
      </div>
    </section>
  );
}
