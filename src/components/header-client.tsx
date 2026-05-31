/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuoteModal } from "@/hooks/use-quote-modal";
import { X } from "lucide-react";
import Logo from "@/assets/logo.svg";
import Call from "@/assets/call.svg";
import { navItems } from "./header";
import { CityPicker } from "./city-picker";
import { HeaderNav } from "./header-nav";

export function MobileMenuButton() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useQuoteModal();

  return (
    <>
      <div className="flex lg:hidden items-center gap-3">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="flex flex-col gap-1 p-2 hover:cursor-pointer rounded-[6px]"
        >
          <div
            className={`w-5 h-0.5 bg-[#FDE4C8] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 bg-[#FDE4C8] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 bg-[#FDE4C8] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 right-0 bg-background border-t border-[rgba(243,202,158,0.11)] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-4 py-6 flex flex-col gap-4 items-center">
              <Link href="/" className="shrink-0 mb-4">
                <Image
                  src={Logo.src}
                  alt="Godly Holiday Lights"
                  width={60}
                  height={34}
                  className="aspect-[7/4] sm:w-[70px] sm:h-[40px]"
                />
              </Link>
              <CityPicker
                variant="mobile"
                className="mb-2"
                onSelect={() => setIsMobileMenuOpen(false)}
              />
              <HeaderNav
                items={navItems}
                variant="mobile"
                onNavigate={() => setIsMobileMenuOpen(false)}
              />

              <div className="flex items-center justify-between">
                <div className="pt-8">
                  <div className="flex items-center gap-3">
                    <button className="flex p-3 items-center gap-2.5 hover:cursor-pointer rounded-[6px] border border-[rgba(243,202,158,0.11)] [background:rgba(0,0,0,0.23)] shadow-[0_3px_2px_0_rgba(97,80,62,0.20)_inset,_0_1px_4px_0_rgba(171,132,89,0.03)] hover:[background:rgba(0,0,0,0.15)] transition-all duration-300 active:[background:rgba(0,0,0,0.08)]">
                      <Image
                        src={Call.src}
                        alt="Call"
                        width={22}
                        height={22}
                      />
                    </button>
                    <div className="font-marlton text-[#F3C99D]">
                      <p className="text-sm [text-box-trim:trim-both]">
                        CALL US
                      </p>
                      <Link
                        href="tel:+19547514128"
                        className="text-xl hover:text-[#F3C99D]/80 transition-all duration-300 active:text-[#F3C99D]/60 [text-box-trim:trim-both]"
                      >
                        954-751-4128
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={openModal}
                className="relative hover:cursor-pointer transition-all duration-300 group shrink-0"
              >
                <img
                  src={"/images/ticket-holder.png"}
                  alt="Get a free quote"
                  className="w-[125px] h-auto"
                />
                <img
                  src={"/images/ticket.png"}
                  alt=""
                  className="absolute w-[110px] mt-0.5 h-auto top-1/2 left-1/2 translate-y-0.5 -translate-x-1/2 group-hover:translate-y-1 group-active:translate-y-2 transition-all duration-300"
                />
              </button>

              <button
                className="mt-42 bg-[#fce4c9] text-black rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X />
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export function TicketButton() {
  const { openModal } = useQuoteModal();

  return (
    <button
      onClick={openModal}
      className="relative hover:cursor-pointer transition-all duration-300 group shrink-0"
    >
      <img
        src={"/images/ticket-holder.png"}
        alt="Get a free quote"
        className="w-[125px] h-auto"
      />
      <img
        src={"/images/ticket.png"}
        alt=""
        className="absolute w-[110px] mt-0.5 h-auto top-1/2 left-1/2 translate-y-0.5 -translate-x-1/2 group-hover:translate-y-1 group-active:translate-y-2 transition-all duration-300"
      />
    </button>
  );
}
