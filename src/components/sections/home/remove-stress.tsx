import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { QuoteButton } from "@/components/ui/quote-button";
import ArrowRight from "@/assets/arrow-right.svg";

export function RemoveStress() {
  return (
    <section id="remove-stress" className="pb-[120px]">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-[64px] pb-16 sm:pb-20 lg:pb-[120px] px-4 sm:px-6">
        <h2 className="relative -translate-x-[12px] sm:-translate-x-[16px] md:-translate-x-[24px] text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-[28px] sm:leading-[38px] md:leading-[56px] lg:leading-[74px] max-w-fit max-h-fit tracking-[1.2px] sm:tracking-[1.6px] md:tracking-[2.4px] lg:tracking-[3.2px] font-marlton text-center pt-12 sm:pt-16 md:pt-24 lg:pt-[144px] pb-8 sm:pb-10 md:pb-16 lg:pb-[82px]">
          <span className="text-grain bg-white">REMOVE THE</span>{" "}
          <span className="text-[16px] sm:text-[20px] md:text-[32px] underline text-grain bg-[#FFE7AF]">
            STRESS
          </span>{" "}
          <br />
          <span className="ms-[45px] sm:ms-[60px] md:ms-[75px] text-grain bg-white">
            FROM HOLIDAY
          </span>
          <span
            className="font-luminaire text-[#FFE7AF] rotate-[-8.065deg] text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-[28px] sm:leading-[38px] md:leading-[56px] lg:leading-[74px] max-w-fit max-h-fit tracking-[1.2px] sm:tracking-[1.6px] md:tracking-[2.4px] lg:tracking-[3.2px] absolute bottom-4 sm:bottom-6 md:bottom-12 -right-1/2 -translate-x-1/2"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "4px sm:6px",
              WebkitTextStrokeColor: "#252323",
              paintOrder: "stroke fill",
            }}
          >
            Decorating
          </span>
        </h2>
      </div>

      <div className="relative paper-bg-1 max-w-[1400px] mx-auto rounded-[10px] text-[#2D2B2B] font-satoshi text-sm sm:text-base lg:text-xl font-medium leading-5 sm:leading-6 px-3 sm:px-5 py-4 sm:py-6">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {/* Handymen Card */}
          <div className="rounded-[12px] border-2 border-[#2D2B2B] p-4">
            <h3 className="text-center font-semibold mb-4">Handymen</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Free Custom Designs</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.check />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>All Supplies Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>High Quality Lights</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Fully Warranty</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Maintenance Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Removal & Storage Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
            </div>
          </div>

          {/* Lighting Companies Card */}
          <div className="rounded-[12px] border-2 border-[#2D2B2B] p-4">
            <h3 className="text-center font-semibold mb-4">
              Lighting Companies
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Free Custom Designs</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.check />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>All Supplies Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.check />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>High Quality Lights</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Fully Warranty</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Maintenance Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Removal & Storage Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.cross />
                </div>
              </div>
            </div>
          </div>

          {/* Godly Windows Card */}
          <div
            style={{
              boxShadow:
                "12px 12px 4px 0 rgba(0, 0, 0, 0.25), 8px 8px 20px 0 rgba(109, 109, 109, 0.20) inset",
            }}
            className="bg-[#282828] rounded-[12px] p-4"
          >
            <div className="text-center mb-4">
              <Image
                src={Logo.src}
                alt="Godly Windows"
                width={131}
                height={75}
                className="aspect-[131/75] mx-auto mb-4"
              />
            </div>
            <div className="space-y-3 text-white">
              <div className="flex items-center justify-between">
                <span>Free Custom Designs</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.checkGold />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>All Supplies Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.checkGold />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>High Quality Lights</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.checkGold />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Fully Warranty</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.checkGold />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Maintenance Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.checkGold />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Removal & Storage Included</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icons.checkGold />
                </div>
              </div>
            </div>
            <QuoteButton className="max-w-full w-full justify-center mt-6">
              <span>REQUEST A QUOTE</span>
              <Image
                src={ArrowRight.src}
                alt="Arrow Right"
                width={32}
                height={33}
              />
            </QuoteButton>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex rounded-[12px] border-2 border-[#2D2B2B] px-8.5 items-end gap-3 relative pr-[424px]">
          <div className="mt-[64px] py-10 [&_div]:py-5">
            <div>Free Custom Designs</div>
            <div>All Supplies Included</div>
            <div>High Quality Lights</div>
            <div>Fully Warranty</div>
            <div>Maintenance Included</div>
            <div>Removal & Storage Included</div>
          </div>
          <div className="py-10 flex-1 text-center space-y-8 px-6 [&_div]:p-5 [&_div]:mx-auto [&_div]:max-w-fit [&_div]:size-[64px]">
            <p>Handymen</p>
            <span className="block">
              <div>
                <Icons.check />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
            </span>
          </div>
          <div className="py-10 flex-1 text-center space-y-8 px-6 [&_div]:p-5 [&_div]:mx-auto [&_div]:max-w-fit [&_div]:size-[64px]">
            <p>Lighting Companies</p>
            <span className="block">
              <div>
                <Icons.check />
              </div>
              <div>
                <Icons.check />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
              <div>
                <Icons.cross />
              </div>
            </span>
          </div>
          <div
            style={{
              boxShadow:
                "12px 12px 4px 0 rgba(0, 0, 0, 0.25), 8px 8px 20px 0 rgba(109, 109, 109, 0.20) inset",
            }}
            className="max-w-[370px] absolute right-6 top-1/2 -translate-y-1/2 bg-[#282828] rounded-[12px] text-center space-y-10 w-full px-10 py-15 [&_div]:p-5 [&_div]:mx-auto [&_div]:max-w-fit [&_div]:size-[64px]"
          >
            <Image
              src={Logo.src}
              alt="Godly Windows"
              width={131}
              height={75}
              className="aspect-[131/75] mx-auto"
            />
            <span className="block">
              <div>
                <Icons.checkGold />
              </div>
              <div>
                <Icons.checkGold />
              </div>
              <div>
                <Icons.checkGold />
              </div>
              <div>
                <Icons.checkGold />
              </div>
              <div>
                <Icons.checkGold />
              </div>
              <div>
                <Icons.checkGold />
              </div>
            </span>
            <QuoteButton className="max-w-full w-full justify-center">
              <span>REQUEST A QUOTE</span>
              <Image
                src={ArrowRight.src}
                alt="Arrow Right"
                width={32}
                height={33}
              />
            </QuoteButton>
          </div>
          <Image
            src="/images/home/remove-stress/flowers.webp"
            alt="Flowers"
            width={180}
            height={180}
            className="hidden lg:block absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <div
            className="size-[508.07px] rounded-full absolute left-0 top-0 -translate-x-[400px] -translate-y-[400px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(31, 30, 30, 0.00) 0%, #1F1E1E 100%)",
              filter: "blur(112.78997802734375px)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

const Icons = {
  check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="33"
      viewBox="0 0 34 33"
      fill="none"
    >
      <path
        d="M26.6167 17.6529C26.6167 20.8704 25.3666 23.8937 23.0957 26.1671C20.828 28.4416 17.811 29.6943 14.6004 29.6943C7.97453 29.6943 2.58418 24.2926 2.58418 17.6529C2.58418 14.4355 3.83436 11.4117 6.10485 9.13857C8.37257 6.86382 11.3898 5.61107 14.6004 5.61107C17.4336 5.61107 20.1153 6.58785 22.2656 8.38094L14.3419 16.3211L10.2257 12.1962L6.57114 15.8585L14.3419 23.6458L25.4665 12.4977C26.2193 14.0881 26.6167 15.8394 26.6167 17.6529ZM24.0972 6.54541C21.4547 4.26742 18.1248 3.02163 14.6004 3.02163C10.6987 3.02163 7.03235 4.54408 4.27775 7.30745C1.51902 10.069 0 13.743 0 17.6529C0 25.7206 6.54961 32.284 14.6004 32.284C18.5021 32.284 22.1681 30.7615 24.9229 27.9982C27.6816 25.2367 29.2009 21.5626 29.2009 17.6529C29.2009 15.1356 28.568 12.7178 27.3831 10.5768L34 3.94646L30.3452 0.283997L24.0972 6.54541Z"
        fill="#457D61"
      />
    </svg>
  ),
  checkGold: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
    >
      <path
        d="M25.051 16.5697C25.051 19.5915 23.8744 22.431 21.7371 24.5662C19.6028 26.7024 16.7633 27.8789 13.7415 27.8789C7.50544 27.8789 2.43217 22.8056 2.43217 16.5697C2.43217 13.5479 3.60881 10.708 5.74574 8.57306C7.88007 6.43662 10.7198 5.26004 13.7415 5.26004C16.4081 5.26004 18.932 6.17744 20.9558 7.86149L13.4982 15.3189L9.62419 11.4448L6.1846 14.8843L13.4982 22.1982L23.9685 11.7279C24.677 13.2216 25.051 14.8665 25.051 16.5697ZM22.6798 6.13758C20.1927 3.99809 17.0587 2.82805 13.7415 2.82805C10.0693 2.82805 6.61868 4.25793 4.02612 6.85328C1.42966 9.44689 0 12.8975 0 16.5697C0 24.1469 6.16434 30.3112 13.7415 30.3112C17.4137 30.3112 20.8641 28.8813 23.4569 26.2859C26.0533 23.6923 27.4832 20.2417 27.4832 16.5697C27.4832 14.2055 26.8875 11.9346 25.7723 9.92387L32 3.69665L28.5602 0.256882L22.6798 6.13758Z"
        fill="#FFE4A9"
      />
    </svg>
  ),
  cross: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <g style={{ mixBlendMode: "multiply" }}>
        <path
          d="M27.3123 4.96883C26.6129 4.26938 25.845 3.63174 25.0301 3.07335C24.4448 2.67297 23.6473 2.82276 23.2475 3.40679C22.8471 3.99108 22.9963 4.78929 23.5809 5.18967C24.2657 5.65854 24.9111 6.19436 25.4994 6.78301C28.0374 9.31818 29.4351 12.6916 29.4351 16.284C29.4351 23.6923 23.4083 29.7191 16 29.7191C8.59173 29.7191 2.56492 23.6923 2.56492 16.2812C2.56492 8.87469 8.59173 2.84892 16 2.84892C16.7084 2.84892 17.2825 2.27463 17.2825 1.56646C17.2825 0.858283 16.7084 0.283997 16 0.283997C7.17769 0.283997 0 7.4604 0 16.284C0 25.1063 7.17743 32.284 16 32.284C24.8226 32.284 32 25.1066 32 16.2812C31.9997 12.006 30.3348 7.98826 27.3123 4.96883Z"
          fill="#EB3434"
        />
        <path
          d="M12.095 8.38861C10.9928 7.28672 9.20689 7.28672 8.10474 8.38861C7.00285 9.49051 7.00285 11.277 8.10474 12.3789L12.0091 16.2832L8.10474 20.1875C7.00285 21.2894 7.00285 23.0759 8.10474 24.1778C8.65568 24.7285 9.37771 25.0042 10.0997 25.0042C10.8218 25.0042 11.5438 24.7287 12.0947 24.1778L15.9991 20.2734L19.9034 24.1778C20.4543 24.7285 21.1764 25.0042 21.8984 25.0042C22.6204 25.0042 23.3424 24.7287 23.8934 24.1778C24.9953 23.0759 24.9953 21.2894 23.8934 20.1875L19.9891 16.2832L23.8934 12.3789C24.9953 11.277 24.9953 9.49051 23.8934 8.38861C22.7912 7.28672 21.0053 7.28672 19.9031 8.38861L15.9988 12.2929L12.095 8.38861Z"
          fill="#EB3434"
        />
      </g>
    </svg>
  ),
};
