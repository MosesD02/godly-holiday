"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { XIcon } from "lucide-react";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { QuoteButton } from "../ui/quote-button";
import { GodlyButton } from "../ui/godly-button";

export function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    // South Florida is in Eastern Time - create end of month in ET
    const now = new Date();

    // Get current date in Eastern Time
    const easternTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const year = easternTime.getFullYear();

    // Create end of october month in Eastern Time (11:59:59 PM)
    const endOfMonth = new Date(year, 9, 31, 23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date();
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isExpired) {
      return; // Don't show popup if expired
    }

    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [isExpired]);

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
          if (!isOpen) {
            setShowFloatingButton(true);
          }
        }}
      >
        <DialogContent
          hideCloseButton
          className="bg-transparent border-none shadow-none text-black text-center !max-w-[min(440px,calc(100%-2rem))] !flex !h-[650px] !min-h-0 !max-h-[650px] !flex-col !gap-0 !overflow-hidden !p-0 max-md:scale-90 max-md:origin-center md:scale-100 md:!h-[720px] md:!max-h-[720px]"
        >
          <div className="relative flex min-h-0 min-w-0 w-full flex-1 flex-col">
            <div className="pointer-events-none absolute inset-0 -z-10 left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain">
              <Image
                src="/images/textures/popup-bg.webp"
                alt="Popup"
                className="h-full w-full"
                width={1440}
                height={1440}
                priority
                loading="eager"
              />
            </div>
            <DialogClose
              type="button"
              className="ring-offset-background focus:ring-ring text-[#0a0a0a] absolute top-3 right-12 z-[120] inline-flex size-9 items-center justify-center rounded-xs opacity-80 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden md:right-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5"
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col gap-0 overflow-y-auto overflow-x-hidden px-[16px] py-4 pt-5 sm:px-[24px] sm:py-6 sm:pt-6 sm:pb-6">
            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5">
              <DialogHeader className="mx-auto text-black sm:text-center max-md:space-y-2">
                <DialogTitle className="font-marlton text-center shadow-none text-shadow-none text-3xl leading-tight sm:text-3xl md:text-4xl">
                  SOUTH FLORIDA <br />
                  <span className="text-lg sm:text-[22px] md:text-[26px]">
                    Holiday LIGHT SPECIAL -{" "}
                    <span className="text-[#eb7a55]">$150 OFF</span>
                  </span>
                </DialogTitle>
                <DialogDescription className="font-satoshi text-center text-base font-medium text-[#0a0a0a] sm:text-base max-md:leading-normal max-md:px-0.5">
                  We&apos;re opening up limited spots for holiday light
                  installations this season.
                </DialogDescription>
              </DialogHeader>

              <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-3 sm:gap-4">
                <p className="text-base">⏳ Offer ends in:</p>

                <div className="grid w-full max-w-[18.5rem] grid-cols-4 gap-1.5 sm:max-w-xs sm:gap-3 sm:mx-auto">
                  <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                    <div className="bg-[#282828] inset-shadow-sm inset-shadow-white/80 text-white rounded-[10px] sm:rounded-[12px] flex size-14 shrink-0 items-center justify-center font-medium font-satoshi text-[24px] leading-none sm:size-[58px] sm:text-[28px] md:text-[30px]">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="font-satoshi text-[10px] font-medium text-[#0a0a0a] sm:text-xs md:text-sm max-md:tracking-tight">
                      DAYS
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                    <div className="bg-[#282828]  inset-shadow-sm inset-shadow-white/80 text-white rounded-[10px] sm:rounded-[12px] flex size-14 shrink-0 items-center justify-center font-medium font-satoshi text-[24px] leading-none sm:size-[58px] sm:text-[28px] md:text-[30px]">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="font-satoshi text-[10px] font-medium text-[#0a0a0a] sm:text-xs md:text-sm max-md:tracking-tight">
                      HOURS
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                    <div className="bg-[#282828]  inset-shadow-sm inset-shadow-white/80 text-white rounded-[10px] sm:rounded-[12px] flex size-14 shrink-0 items-center justify-center font-medium font-satoshi text-[24px] leading-none sm:size-[58px] sm:text-[28px] md:text-[30px]">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="font-satoshi text-[10px] font-medium text-[#0a0a0a] sm:text-xs md:text-sm max-md:tracking-tight">
                      MINUTES
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1 sm:gap-1.5">
                    <div className="bg-[#282828]  inset-shadow-sm inset-shadow-white/80 text-white rounded-[10px] sm:rounded-[12px] flex size-14 shrink-0 items-center justify-center font-medium font-satoshi text-[24px] leading-none sm:size-[58px] sm:text-[28px] md:text-[30px]">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="font-satoshi text-[10px] font-medium text-[#0a0a0a] sm:text-xs md:text-sm max-md:tracking-tight">
                      SECONDS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="h-px w-full shrink-0 border-t border-dashed border-[#0a0a0a] pointer-events-none"
              aria-hidden
            />

            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
              <div className="h-fit w-full min-w-0 max-w-full border rounded-2xl sm:rounded-[20px] border-[#ae9d8a] p-1.5 sm:p-2">
                <div className="border rounded-[10px] sm:rounded-[12px] border-[#ae9d8a] p-1.5 sm:p-2">
                  <div className="grid grid-cols-2 items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <div className="font-marlton text-[#eb7a55] text-7xl leading-none text-right sm:text-7xl md:text-8xl">
                      $150
                    </div>
                    <div className="flex flex-col justify-start text-left font-marlton text-xl leading-tight sm:text-xl md:text-2xl">
                      OFF <br />{" "}
                      <span className="text-[#ae9d8a]">
                        NEW CLIENTS <br /> ONLY
                      </span>
                    </div>
                  </div>
                  <hr />
                  <p className="font-satoshi text-[11px] leading-snug sm:text-xs md:text-sm font-medium text-[#0a0a0a]">
                    All-inclusive holiday lighting: we provide the lights, handle
                    installation, maintenance, and takedown, and even set
                    everything on automatic timers for you. Limited spots
                    available — offer ends October 31. Countdown’s on, don’t wait.
                  </p>
                </div>
              </div>
              <QuoteButton className="!w-full !max-w-full !self-stretch justify-center !inline-flex max-md:!min-h-0 max-md:!h-14 max-md:!py-2 max-md:!px-3 max-md:!text-xl">
                <span>REQUEST A QUOTE</span>
                <Image
                  src={ArrowRight.src}
                  alt=""
                  className="max-md:h-7 max-md:w-7"
                  width={32}
                  height={33}
                />
              </QuoteButton>
            </div>
          </div>
          </div>
        </DialogContent>
      </Dialog>
      {showFloatingButton && !isOpen && !isExpired && (
        <div className="fixed right-0 sm:right-auto sm:left-0 top-1/2 z-50 h-fit w-fit -translate-y-1/2 translate-x-[75px] sm:-translate-x-[65px] rotate-90 sm:rotate-90 origin-right sm:origin-left max-md:scale-[0.8] md:scale-100">
          <GodlyButton
            onClick={() => setIsOpen(true)}
            className="rounded-t-none! sm:rounded-t-md! sm:rounded-b-none! border-0! tracking-wider!"
          >
            <span>Save $150 NOW</span>
          </GodlyButton>
        </div>
      )}
    </>
  );
}
