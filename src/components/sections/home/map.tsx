import Image from "next/image";

export function Map() {
  return (
    <section
      id="map"
      className="py-12 sm:py-20 lg:py-[100px] bg-paper-16-2 flex items-center flex-col px-4 sm:px-6 lg:px-0"
    >
      <div className="pb-12 sm:pb-20 lg:pb-[120px] relative max-w-5xl mx-auto">
        <h2 className="font-marlton text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-center leading-tight sm:leading-8 md:leading-10 lg:leading-12 tracking-[1px] sm:tracking-[1.2px] md:tracking-[1.8px] lg:tracking-[2.4px]">
          <span className="text-grain-2 bg-[#61503E]">
            PROVIDING THE HIGHEST
          </span>{" "}
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] leading-tight sm:leading-8 md:leading-12 lg:leading-20 tracking-[1.2px] sm:tracking-[1.8px] md:tracking-[2.5px] lg:tracking-[3.84px] text-grain-2 bg-[#191717]">
            HOLIDAY LIGHTS INSTALLATION
          </span>
        </h2>
        <p className="font-marlton text-[#191717] text-center text-xl sm:text-2xl lg:text-[32px] flex items-end gap-2 sm:gap-3 justify-center flex-wrap">
          <span className="sm:pb-1.5 lg:pb-3">
            IN <span className="text-xl sm:text-2xl lg:text-[32px]">SOUTH</span>
          </span>
          <span
            className="font-luminaire text-2xl sm:text-4xl pt-6 lg:text-6xl leading-normal text-[#FFE7AF] tracking-normal"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "4px",
              WebkitTextStrokeColor: "#1E1C1C",
              paintOrder: "stroke fill",
            }}
          >
            Florida
          </span>
        </p>
      </div>
      <Image
        src="/images/home/map/map.webp"
        alt="Map"
        width={1140}
        height={674}
        className="object-cover w-full h-auto max-w-[90%] sm:max-w-[80%] lg:max-w-[1140px]"
      />
    </section>
  );
}
