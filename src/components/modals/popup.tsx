/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import { QuoteButton } from "../ui/quote-button";

export function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    // South Florida is in Eastern Time - create end of month in ET
    const now = new Date();

    // Get current date in Eastern Time
    const easternTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const year = easternTime.getFullYear();
    const month = easternTime.getMonth();

    // Create end of current month in Eastern Time (11:59:59 PM)
    const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 999);

    setTargetDate(endOfMonth);

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-transparent border-none shadow-none text-black text-center max-w-[440px] sm:max-w-[440px] scale-90 sm:scale-100 min-h-[650px] sm:min-h-[675px]">
        <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/textures/popup-bg.png"
            alt="Popup"
            className="w-full h-full"
          />
        </div>
        <div className="w-[calc(100%-32px)] left-1/2 -translate-x-1/2 h-[1px] border-t border-dashed inset-0 absolute z-10 border-black top-1/2 -translate-y-1/2" />
        <div className="flex flex-col gap-6">
          <DialogHeader className="mx-auto text-black">
            <DialogTitle className="font-marlton text-center shadow-none text-shadow-none text-3xl">
              SOUTH FLORIDA SUMMER <br /> SPECIAL -{" "}
              <span className="text-[#eb7a55]">$59 OFF</span>
            </DialogTitle>
            <DialogDescription className="font-satoshi text-center text-base font-medium text-[#0a0a0a]">
              We&apos;re opening up limited spots for first- <br />
              time clients this{" "}
              {targetDate
                ? targetDate.toLocaleDateString("en-US", {
                    month: "long",
                    timeZone: "America/New_York",
                  })
                : "month"}
              .
            </DialogDescription>
          </DialogHeader>

          <p>⏳ Offer ends in:</p>

          <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
            <div className="flex items-center flex-col gap-2">
              <div className="bg-[#282828] inset-shadow-sm inset-shadow-white/80 text-white rounded-[12px] flex items-center justify-center font-medium font-satoshi text-[32px] text-center aspect-square size-[64px]">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="font-satoshi text-base font-medium text-[#0a0a0a]">
                DAYS
              </div>
            </div>
            <div className="flex items-center flex-col gap-2">
              <div className="bg-[#282828]  inset-shadow-sm inset-shadow-white/80 text-white rounded-[12px] flex items-center justify-center font-medium font-satoshi text-[32px] text-center aspect-square size-[64px]">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="font-satoshi text-base font-medium text-[#0a0a0a]">
                HOURS
              </div>
            </div>
            <div className="flex items-center flex-col gap-2">
              <div className="bg-[#282828]  inset-shadow-sm inset-shadow-white/80 text-white rounded-[12px] flex items-center justify-center font-medium font-satoshi text-[32px] text-center aspect-square size-[64px]">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="font-satoshi text-base font-medium text-[#0a0a0a]">
                MINUTES
              </div>
            </div>
            <div className="flex items-center flex-col gap-2">
              <div className="bg-[#282828]  inset-shadow-sm inset-shadow-white/80 text-white rounded-[12px] flex items-center justify-center font-medium font-satoshi text-[32px] text-center aspect-square size-[64px]">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="font-satoshi text-base font-medium text-[#0a0a0a]">
                SECONDS
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-4">
          <div className="border rounded-[20px] border-[#ae9d8a] p-2 h-fit">
            <div className="border rounded-[12px] border-[#ae9d8a] p-2">
              <div className="grid grid-cols-2 items-center gap-4">
                <div className="font-marlton text-[#eb7a55] text-8xl text-right">
                  $59
                </div>
                <div className="flex flex-col justify-start text-left font-marlton text-2xl">
                  OFF <br />{" "}
                  <span className="text-[#ae9d8a]">FIRST WINDOW CLEANING</span>
                </div>
              </div>
              <hr />
              <p className="font-satoshi text-base font-medium text-[#0a0a0a]">
                Just in time for summer entertaining. Expires{" "}
                {targetDate
                  ? (() => {
                      const day = targetDate.getDate();
                      const suffix =
                        day === 1 || day === 21 || day === 31
                          ? "st"
                          : day === 2 || day === 22
                          ? "nd"
                          : day === 3 || day === 23
                          ? "rd"
                          : "th";
                      return `${targetDate.toLocaleDateString("en-US", {
                        month: "long",
                        timeZone: "America/New_York",
                      })} ${day}${suffix}`;
                    })()
                  : "soon"}
                . Countdown&apos;s ticking.
              </p>
            </div>
          </div>
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
      </DialogContent>
    </Dialog>
  );
}
