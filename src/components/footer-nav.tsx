"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getActiveCitySlug, rewriteHref } from "./header-nav";

interface NavItem {
  label: string;
  href: string;
}

export function FooterNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const citySlug = getActiveCitySlug(pathname);

  return (
    <>
      {items.map((item) => (
        <li key={item.label}>
          <Link href={rewriteHref(item.href, citySlug)}>{item.label}</Link>
        </li>
      ))}
    </>
  );
}
