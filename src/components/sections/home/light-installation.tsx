import { Badge } from "@/components/ui/badge";
import { GodlyButton } from "@/components/ui/godly-button";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";

export function LightInstallation() {
  return (
    <section
      id="light-installation"
      className="flex items-center max-w-[1330px] mx-auto flex-col justify-center gap-12 sm:gap-16 lg:gap-21 pb-16 sm:pb-20 lg:pb-[113px] mt-8 sm:mt-10 lg:mt-14 px-4 sm:px-6"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-[156px] self-stretch">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 flex-1 max-w-[521px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 flex-1">
              <h2 className="font-marlton text-[28px] sm:text-[42px] lg:text-[56px] leading-[32px] sm:leading-[48px] lg:leading-[64px] tracking-[1.68px] sm:tracking-[2.52px] lg:tracking-[3.36px]">
                Commercial HOLIDAY LIGHT{" "}
                <span
                  className="font-luminaire inline-block text-[#FFE7AF] md:-translate-x-8"
                  style={{
                    transform: "rotate(-8.115deg)",
                    textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#252323",
                    paintOrder: "stroke fill",
                  }}
                >
                  Installation
                </span>
              </h2>
              <p className="text-white text-base sm:text-lg leading-6 sm:leading-[26px] tracking-[0.16px] sm:tracking-[0.18px]">
                As a trusted holiday lighting company, we specialize in outdoor
                holiday lights installation for commercial spaces; making your
                property festive without the stress.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
              <Badge size="sm">Business Buildings</Badge>
              <Badge size="sm">Stores</Badge>
              <Badge size="sm">Private Communities</Badge>
              <Badge size="sm">Entertainment Buildings</Badge>
              <Badge size="sm">Churches</Badge>
            </div>
          </div>
          <GodlyButton className="max-w-fit">
            <span>Request a Quote</span>{" "}
            <Image
              src={ArrowRight.src}
              alt="Arrow Right"
              width={32}
              height={33}
            />
          </GodlyButton>
        </div>
        <div className="p-[0_5px_13px_4px] sm:p-[0_7.5px_19px_6.5px] lg:p-[0_9.925px_25.561px_8.762px] order-first lg:order-none">
          <Image
            src="/images/home/light-installation/commercial.png"
            alt="Commercial"
            width={481.34}
            height={580.705}
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 sm:gap-12 lg:gap-[156px] self-stretch">
        <div className="p-[0_5px_13px_4px] sm:p-[0_7.5px_19px_6.5px] lg:p-[0_9.925px_25.561px_8.762px] order-first lg:order-none">
          <Image
            src="/images/home/light-installation/resident.png"
            alt="Residential"
            width={481.34}
            height={580.705}
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto"
          />
        </div>
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 flex-1 max-w-[521px]">
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 flex-1">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 flex-1">
              <h2 className="font-marlton text-[28px] sm:text-[42px] lg:text-[56px] leading-[32px] sm:leading-[48px] lg:leading-[64px] tracking-[1.68px] sm:tracking-[2.52px] lg:tracking-[3.36px]">
                Residential Holiday Light{" "}
                <span
                  className="font-luminaire inline-block text-[#FFE7AF] md:-translate-x-8"
                  style={{
                    transform: "rotate(-8.115deg)",
                    textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                    WebkitTextStrokeWidth: "2px",
                    WebkitTextStrokeColor: "#252323",
                    paintOrder: "stroke fill",
                  }}
                >
                  Installation
                </span>
              </h2>
              <p className="text-white text-base sm:text-lg leading-6 sm:leading-[26px] tracking-[0.16px] sm:tracking-[0.18px]">
                Whether it&rsquo;s subtle or show-stopping, our holiday light
                installation services bring joy to your home all season long. We
                handle everything, from setup to removal for houses and estates
                across South Florida.
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
              <Badge size="sm">Houses</Badge>
              <Badge size="sm">Estalases</Badge>
            </div>
          </div>
          <GodlyButton className="max-w-fit">
            <span>Request a Quote</span>{" "}
            <Image
              src={ArrowRight.src}
              alt="Arrow Right"
              width={32}
              height={33}
            />
          </GodlyButton>
        </div>
      </div>
    </section>
  );
}
