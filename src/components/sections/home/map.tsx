import Image from "next/image";

export function Map() {
  return (
    <section
      id="map"
      className="py-12 sm:py-20 lg:py-[100px] bg-paper-16-2 flex items-center flex-col px-4 sm:px-6 lg:px-0"
    >
      <div className="text-transparent pb-12 sm:pb-20 lg:pb-[120px] relative max-w-5xl mx-auto">
        <h2 className="font-marlton text-2xl sm:text-3xl lg:text-[40px] text-center leading-tight sm:leading-10 lg:leading-12 tracking-[1.2px] sm:tracking-[1.8px] lg:tracking-[2.4px]">
          PROVIDING THE HIGHEST <br className="hidden sm:block" />
          <span className="text-3xl sm:text-4xl lg:text-[64px] leading-tight sm:leading-12 lg:leading-20 tracking-[1.8px] sm:tracking-[2.5px] lg:tracking-[3.84px]">
            HOLIDAY LIGHTS INSTALLATION
          </span>
        </h2>
        <p className="font-marlton text-center text-xl sm:text-2xl lg:text-[32px] flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
          IN <span className="text-xl sm:text-2xl lg:text-[32px]">SOUTH</span>
          <span className="font-luminaire text-2xl sm:text-4xl pt-6 lg:text-6xl leading-normal tracking-normal">
            Florida
          </span>
        </p>
        <Image
          src="/images/home/map/title.svg"
          alt="Map Title"
          width={868}
          height={188}
          className="absolute  inset-0 pointer-events-none object-contain w-full h-auto max-w-[320px] sm:max-w-[500px] lg:max-w-none"
        />
      </div>
      <Image
        src="/images/home/map/map.png"
        alt="Map"
        width={1140}
        height={674}
        className="object-cover w-full h-auto max-w-[90%] sm:max-w-[80%] lg:max-w-[1140px]"
      />
    </section>
  );
}
