import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Call from "@/assets/call.svg";
import Image from "next/image";
import { MobileMenuButton, TicketButton } from "./header-client";

type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Our Work",
    href: "/#light-installation",
  },
  {
    label: "How it Works",
    href: "/#wrapped-up",
  },
  {
    label: "Why Choose Us",
    href: "/#remove-stress",
  },
];

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="godly-button h-[48px] border-0! rounded-none! w-full! text-[clamp(12px,3.75vw,24px)]! text-center justify-center pointer-events-none shadow-none!">
        <span>LIMITED SPOTS: $150 OFF HOLIDAY LIGHT INSTALLATIONS</span>
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
              <button className="flex p-3 items-center gap-2.5 hover:cursor-pointer rounded-[6px] border border-[rgba(243,202,158,0.11)] [background:rgba(0,0,0,0.23)] shadow-[0_3px_2px_0_rgba(97,80,62,0.20)_inset,_0_1px_4px_0_rgba(171,132,89,0.03)] hover:shadow-[0_3px_2px_0_rgba(97,80,62,0.20)_inset,_0_1px_4px_0_rgba(171,132,89,0.03),_0_0_20px_rgba(243,202,158,0.4)] transition-all duration-300 active:[background:rgba(0,0,0,0.08)]">
                <Image src={Call.src} alt="Call" width={22} height={22} />
              </button>
              <div className="font-marlton text-[#F3C99D] space-y-3">
                <p className="text-sm [text-box-trim:trim-both]">CALL US</p>
                <div className="text-2xl hover:text-[#F3C99D]/80 transition-all duration-300 active:text-[#F3C99D]/60 [text-box-trim:trim-both]">
                  954-751-4128
                </div>
              </div>
            </Link>

            <TicketButton />
          </div>

          {/* Mobile Menu */}
          <MobileMenuButton>
            <span />
          </MobileMenuButton>
        </div>
      </header>
    </div>
  );
}
