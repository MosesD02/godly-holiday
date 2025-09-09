"use client";

import Link from "next/link";
import { useState } from "react";

import Logo from "@/assets/logo.svg";
import Call from "@/assets/call.svg";
import TicketHolder from "@/assets/ticket-holder.svg";
import Ticket from "@/assets/ticket.svg";
import Image from "next/image";
import { useQuoteModal } from "@/hooks/use-quote-modal";
import { X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "We Got You Covered",
    href: "#we-got-you-covered",
  },
  {
    label: "Light Installation",
    href: "#light-installation",
  },
  {
    label: "Our Process",
    href: "#wrapped-up",
  },
  {
    label: "Remove The Stress",
    href: "#remove-stress",
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useQuoteModal();

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="godly-button h-[48px] border-0! rounded-none! w-full! text-lg! text-center justify-center pointer-events-none shadow-none!">
        <span>
          Get Spotless Windows + a FREE RainShield Treatment this September
          Only.
        </span>
      </div>
      <header className="w-full h-16 sm:h-18 bg-background flex items-center justify-center">
        <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src={Logo.src}
              alt="Godly Windows"
              width={60}
              height={34}
              className="aspect-[7/4] sm:w-[70px] sm:h-[40px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex w-full ps-6 items-center gap-6">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="text-[#FDE4C8] font-marlton [text-box-trim:trim-both] text-base hover:text-[#FDE4C8]/80 transition-all duration-300 active:text-[#FDE4C8]/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center shrink-0 gap-8">
            <Link href="tel:+19547514128" className="flex items-center gap-3">
              <button className="flex p-3 items-center gap-2.5 hover:cursor-pointer rounded-[6px] border border-[rgba(243,202,158,0.11)] [background:rgba(0,0,0,0.23)] shadow-[0_3px_2px_0_rgba(97,80,62,0.20)_inset,_0_1px_4px_0_rgba(171,132,89,0.03)] hover:[background:rgba(0,0,0,0.15)] transition-all duration-300 active:[background:rgba(0,0,0,0.08)]">
                <Image src={Call.src} alt="Call" width={22} height={22} />
              </button>
              <div className="font-marlton text-[#F3C99D] space-y-3">
                <p className="text-sm [text-box-trim:trim-both]">CALL US</p>
                <div className="text-2xl hover:text-[#F3C99D]/80 transition-all duration-300 active:text-[#F3C99D]/60 [text-box-trim:trim-both]">
                  954-751-4128
                </div>
              </div>
            </Link>

            <button
              onClick={openModal}
              className="relative hover:cursor-pointer transition-all duration-300 group shrink-0"
            >
              <Image
                src={TicketHolder.src}
                alt="Ticket Holder"
                width={125}
                height={14.444}
              />
              <Image
                src={Ticket.src}
                alt="Ticket"
                width={110}
                height={64}
                className="absolute top-1/2 left-1/2 translate-y-0.5 -translate-x-1/2 group-hover:translate-y-1 group-active:translate-y-2 transition-all duration-300"
              />
            </button>
          </div>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute top-0 left-0 right-0 bg-background border-t border-[rgba(243,202,158,0.11)] shadow-lg">
              <nav className="px-4 py-6 flex flex-col gap-4 items-center">
                <Link href="/" className="shrink-0 mb-4">
                  <Image
                    src={Logo.src}
                    alt="Godly Windows"
                    width={60}
                    height={34}
                    className="aspect-[7/4] sm:w-[70px] sm:h-[40px]"
                  />
                </Link>
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.label}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[#FDE4C8] font-marlton [text-box-trim:trim-both] text-base py-2 hover:text-[#FDE4C8]/80 transition-all duration-300 active:text-[#FDE4C8]/60"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Call Section */}
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
                  <Image
                    src={TicketHolder.src}
                    alt="Ticket Holder"
                    width={125}
                    height={14.444}
                  />
                  <Image
                    src={Ticket.src}
                    alt="Ticket"
                    width={110}
                    height={64}
                    className="absolute top-1/2 left-1/2 translate-y-0.5 -translate-x-1/2 group-hover:translate-y-1 group-active:translate-y-2 transition-all duration-300"
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
      </header>
    </div>
  );
}
