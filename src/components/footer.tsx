"use client";

import { cities } from "@/data/cities";
import { navItems } from "./header";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-paper-16-3 w-full p-4 sm:p-8 lg:p-[54px] pt-6 sm:pt-8 lg:pt-12">
      <h2 className="font-marlton text-2xl sm:text-4xl lg:text-[64px] text-center leading-tight sm:leading-tight lg:leading-[82px] tracking-[0.6px] sm:tracking-[1.2px] lg:tracking-[2.4px] relative">
        CITIES <br />{" "}
        <span
          className="font-luminaire text-2xl sm:text-4xl lg:text-[48px] absolute rotate-[-7.9deg] left-1/2 top-1/2 text-[#FFE7AF] -translate-x-1/2 -translate-y-1/2"
          style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#252323",
            paintOrder: "stroke fill",
          }}
        >
          We
        </span>{" "}
        SERVE
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-[1332px] py-8 sm:py-12 lg:py-[60px] mx-auto gap-2 sm:gap-4">
        {cities.map((city) => (
          <div
            key={city.key}
            className="py-2 sm:py-3 max-w-[200px] w-full font-marlton text-white text-sm sm:text-lg lg:text-xl text-center sm:text-left"
          >
            {city.name}
          </div>
        ))}
      </div>

      <nav className="bg-paper-16-2 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 flex flex-col gap-8 sm:gap-12 lg:gap-[96px] rounded-xl sm:rounded-2xl w-full max-w-[1332px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-0">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-marlton text-[#2D2B2B] text-sm sm:text-base opacity-60">
              Menu
            </h3>
            <ul className="text-[#312E2C] text-sm sm:text-base font-satoshi font-medium space-y-1 sm:space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left sm:text-right">
            <Link
              href="tel:+19547514128"
              className="text-[#312E2C] text-sm sm:text-base font-satoshi font-medium block sm:inline"
            >
              954-751-4128
            </Link>
            <br />
            <Link
              href="mailto:hello@godlywindows.com"
              className="text-[#312E2C] text-sm sm:text-base font-satoshi font-medium block sm:inline"
            >
              hello@godlywindows.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <Link
              href="https://www.facebook.com/godlywindows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.facebook />
            </Link>
            <Link
              href="https://www.instagram.com/godlywindows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.instagram />
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
}

const Icons = {
  facebook: () => (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.477539" width="40" height="40" rx="20" fill="#312E2C" />
      <path
        d="M25 22.4775H22V30.4775H18V22.4775H15V18.4775H18V15.4775C18 14.1515 18.5268 12.8797 19.4645 11.942C20.4021 11.0043 21.6739 10.4775 23 10.4775H26V14.4775H23C22.3333 14.4775 22 14.8109 22 15.4775V18.4775H26L25 22.4775Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  instagram: () => (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.477539" width="40" height="40" rx="20" fill="#312E2C" />
      <path
        d="M15.8 10.4775H24.2C27.4 10.4775 30 13.0775 30 16.2775V24.6775C30 26.2158 29.3889 27.691 28.3012 28.7788C27.2135 29.8665 25.7383 30.4775 24.2 30.4775H15.8C12.6 30.4775 10 27.8775 10 24.6775V16.2775C10 14.7393 10.6111 13.264 11.6988 12.1763C12.7865 11.0886 14.2617 10.4775 15.8 10.4775ZM15.6 12.4775C14.6452 12.4775 13.7295 12.8568 13.0544 13.532C12.3793 14.2071 12 15.1228 12 16.0775V24.8775C12 26.8675 13.61 28.4775 15.6 28.4775H24.4C25.3548 28.4775 26.2705 28.0983 26.9456 27.4231C27.6207 26.748 28 25.8323 28 24.8775V16.0775C28 14.0875 26.39 12.4775 24.4 12.4775H15.6ZM25.25 13.9775C25.5815 13.9775 25.8995 14.1092 26.1339 14.3437C26.3683 14.5781 26.5 14.896 26.5 15.2275C26.5 15.5591 26.3683 15.877 26.1339 16.1114C25.8995 16.3458 25.5815 16.4775 25.25 16.4775C24.9185 16.4775 24.6005 16.3458 24.3661 16.1114C24.1317 15.877 24 15.5591 24 15.2275C24 14.896 24.1317 14.5781 24.3661 14.3437C24.6005 14.1092 24.9185 13.9775 25.25 13.9775ZM20 15.4775C21.3261 15.4775 22.5979 16.0043 23.5355 16.942C24.4732 17.8797 25 19.1515 25 20.4775C25 21.8036 24.4732 23.0754 23.5355 24.0131C22.5979 24.9508 21.3261 25.4775 20 25.4775C18.6739 25.4775 17.4021 24.9508 16.4645 24.0131C15.5268 23.0754 15 21.8036 15 20.4775C15 19.1515 15.5268 17.8797 16.4645 16.942C17.4021 16.0043 18.6739 15.4775 20 15.4775ZM20 17.4775C19.2044 17.4775 18.4413 17.7936 17.8787 18.3562C17.3161 18.9188 17 19.6819 17 20.4775C17 21.2732 17.3161 22.0363 17.8787 22.5989C18.4413 23.1615 19.2044 23.4775 20 23.4775C20.7956 23.4775 21.5587 23.1615 22.1213 22.5989C22.6839 22.0363 23 21.2732 23 20.4775C23 19.6819 22.6839 18.9188 22.1213 18.3562C21.5587 17.7936 20.7956 17.4775 20 17.4775Z"
        fill="white"
      />
    </svg>
  ),
};
