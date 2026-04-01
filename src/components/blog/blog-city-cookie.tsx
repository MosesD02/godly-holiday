"use client";

import { useEffect } from "react";
import { citiesMap } from "@/data/cities";

export function BlogCityCookie({
  citySlug,
  targetCity,
}: {
  citySlug?: string;
  targetCity?: string;
}) {
  useEffect(() => {
    if (citySlug && citiesMap[citySlug]) {
      document.cookie = `selectedCity=${citySlug};path=/;max-age=31536000`;
      return;
    }
    const match = Object.entries(citiesMap).find(
      ([, label]) =>
        label.toUpperCase() === (targetCity || "").toUpperCase().trim(),
    );
    if (match) {
      document.cookie = `selectedCity=${match[0]};path=/;max-age=31536000`;
    }
  }, [citySlug, targetCity]);

  return null;
}
