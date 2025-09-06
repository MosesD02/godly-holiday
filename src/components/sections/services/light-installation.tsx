import Image from "next/image";

export function RecentLightInstallation() {
  return (
    <section
      id="recent-light-installation"
      className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 gap-8 md:gap-12 lg:gap-16"
    >
      <h2 className="text-transparent text-center font-marlton text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-22 relative px-4">
        <Image
          src="/images/services/light-installation/title.svg"
          alt="Recent Light Installation"
          width={300}
          height={150}
          className="w-full h-full inset-0 absolute 
          scale-160 top-2 sm:top-3 md:top-5 pointer-events-none"
        />
        RECENT HOLIDAY LIGHT <br /> INSTALLATIONS IN{" "}
        <span className="sr-only">SOUTH FLORIDA</span>
      </h2>

      <Image
        src="/images/services/light-installation/img.png"
        alt="Recent Light Installation"
        width={1920}
        height={1080}
        className="w-full h-auto max-w-full object-cover"
      />
    </section>
  );
}
