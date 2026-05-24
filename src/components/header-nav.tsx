"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { citiesMap } from "@/data/cities";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderNavProps {
  items: NavItem[];
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

export function getActiveCitySlug(pathname: string | null): string | null {
  if (!pathname) return null;
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return null;
  return citiesMap[segment] ? segment : null;
}

export function rewriteHref(href: string, citySlug: string | null): string {
  if (!citySlug) return href;
  if (href.startsWith("/#")) return `/${citySlug}${href.slice(1)}`;
  if (href === "/services") return `/services/${citySlug}`;
  if (href === "/blog") return `/blog/${citySlug}`;
  return href;
}

export function useCityAwareHref(href: string): string {
  const pathname = usePathname();
  return rewriteHref(href, getActiveCitySlug(pathname));
}

export function HeaderNav({
  items,
  variant = "desktop",
  onNavigate,
}: HeaderNavProps) {
  const pathname = usePathname();
  const citySlug = getActiveCitySlug(pathname);

  const linkClass =
    variant === "desktop"
      ? "text-[#FDE4C8] font-marlton [text-box-trim:trim-both] text-base hover:text-[#FDE4C8]/80 transition-all duration-300 active:text-[#FDE4C8]/60"
      : "block text-[#FDE4C8] font-marlton [text-box-trim:trim-both] text-base py-2 hover:text-[#FDE4C8]/80 transition-all duration-300 active:text-[#FDE4C8]/60";

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.label}
          href={rewriteHref(item.href, citySlug)}
          onClick={onNavigate}
          className={linkClass}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}
