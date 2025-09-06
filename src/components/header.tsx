"use client";

import Link from "next/link";

import Logo from "@/assets/logo.svg";
import ArrowDown from "@/assets/arrow-down.svg";
import Call from "@/assets/call.svg";
import TicketHolder from "@/assets/ticket-holder.svg";
import Ticket from "@/assets/ticket.svg";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  onClick?: () => void;
  isDropdown?: boolean;
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
  return (
    <header className="w-full h-18 bg-background flex items-center justify-center sticky top-0 z-50">
      <div className="max-w-[1400px] md:px-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-21">
          <Link href="/" className="shrink-0">
            <Image
              src={Logo.src}
              alt="Godly Windows"
              width={70}
              height={40}
              className="aspect-[7/4]"
            />
          </Link>
          <nav className="flex items-center gap-6">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.label} className="relative">
                  <button className="text-[#FDE4C8] font-marlton text-base flex items-center gap-[9px] hover:text-[#FDE4C8]/80 transition-all duration-300 active:text-[#FDE4C8]/60">
                    <span className="[text-box-trim:trim-both]">
                      {item.label}
                    </span>
                    <Image
                      src={ArrowDown.src}
                      alt="Arrow Down"
                      width={14}
                      height={15}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  href={item.href}
                  key={item.label}
                  className="text-[#FDE4C8] font-marlton [text-box-trim:trim-both] text-base hover:text-[#FDE4C8]/80 transition-all duration-300 active:text-[#FDE4C8]/60"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <button className="flex p-3 items-center gap-2.5 hover:cursor-pointer rounded-[6px] border border-[rgba(243,202,158,0.11)] [background:rgba(0,0,0,0.23)] shadow-[0_3px_2px_0_rgba(97,80,62,0.20)_inset,_0_1px_4px_0_rgba(171,132,89,0.03)] hover:[background:rgba(0,0,0,0.15)] transition-all duration-300 active:[background:rgba(0,0,0,0.08)]">
                <Image src={Call.src} alt="Call" width={22} height={22} />
              </button>
              <div className="font-marlton text-[#F3C99D]">
                <p className="text-sm [text-box-trim:trim-both]">CALL US</p>
                <Link
                  href="tel:+19547514128"
                  className="text-2xl hover:text-[#F3C99D]/80 transition-all duration-300 active:text-[#F3C99D]/60 [text-box-trim:trim-both]"
                >
                  954-751-4128
                </Link>
              </div>
            </div>
          </div>

          <button className="relative hover:cursor-pointer transition-all duration-300 group shrink-0">
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
      </div>
    </header>
  );
}
