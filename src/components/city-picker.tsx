"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, MapPin, MapPinHouse } from "lucide-react";

import { cities, citiesMap } from "@/data/cities";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CityPickerProps {
  variant?: "desktop" | "mobile";
  className?: string;
  onSelect?: () => void;
}

function getActiveCityLabel(pathname: string | null): string | null {
  if (!pathname) return null;
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return null;
  return citiesMap[segment] ?? null;
}

function titleCase(name: string): string {
  return name
    .split(" ")
    .map((word) =>
      word
        .split("-")
        .map((part) =>
          part.length === 0
            ? part
            : part[0].toUpperCase() + part.slice(1).toLowerCase(),
        )
        .join("-"),
    )
    .join(" ");
}

export function CityPicker({
  variant = "desktop",
  className,
  onSelect,
}: CityPickerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeLabel = getActiveCityLabel(pathname);
  const displayLabel = activeLabel
    ? titleCase(activeLabel)
    : "Pick Your City";

  const handleSelect = (slug: string) => {
    setOpen(false);
    onSelect?.();
    router.push(`/${slug}`);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Select city"
        className={cn(
          "flex gap-1 text-sm text-[#FDE4C8] hover:text-[#FFCA8F] transition-colors xl:text-base hover:cursor-pointer",
          variant === "desktop" ? "items-end" : "items-center",
          className,
        )}
      >
        <MapPinHouse strokeWidth={1.2} size={18} />
        <div className="border-b border-solid border-[#FDE4C8] font-sans text-xs font-semibold uppercase">
          {displayLabel}
        </div>
        <span>
          <ChevronDown size={18} />
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogHeader>
          <DialogTitle asChild>
            <span className="sr-only">Our Cities</span>
          </DialogTitle>
        </DialogHeader>
        <DialogContent
          hideCloseButton
          className="bg-paper-16 z-[100] overflow-y-auto border-none p-4 sm:max-w-[1050px] md:px-2 top-28 sm:top-30 translate-y-0"
        >
          <div className="grid max-h-[calc(100vh-256px)] w-full grid-cols-2 gap-1 gap-y-4 sm:grid-cols-3 md:max-h-[calc(100vh-128px)] md:grid-cols-4">
            {cities.map((city, index) => (
              <button
                key={city.key}
                type="button"
                onClick={() => handleSelect(city.key)}
                onTouchStart={() => setActiveIndex(index)}
                onTouchEnd={() => setActiveIndex(null)}
                className={cn(
                  "group flex cursor-pointer flex-col gap-1 border-b border-[#8d8477] py-1 transition-all hover:bg-[#2D2B2B] active:bg-[#2D2B2B] md:mx-5",
                  activeIndex === index && "bg-[#2D2B2B]",
                )}
              >
                <div className="flex items-center justify-start gap-3 px-2">
                  <MapPin
                    size={20}
                    className={cn(
                      "shrink-0 text-[#2D2B2B] group-hover:text-[#FDE4C8] group-active:text-[#FDE4C8]",
                      activeIndex === index && "text-[#FDE4C8]",
                    )}
                  />
                  <h3
                    className={cn(
                      "font-marlton text-sm/tight tracking-[0.5px] text-[#2D2B2B] group-hover:text-[#FDE4C8] group-active:text-[#FDE4C8] uppercase text-left",
                      activeIndex === index && "text-[#FDE4C8]",
                    )}
                  >
                    {city.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
