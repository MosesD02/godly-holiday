"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface AnimatedImagePairProps {
  src1: string;
  src2: string;
  alt1: string;
  alt2: string;
}

export function AnimatedImagePair({ src1, src2, alt1, alt2 }: AnimatedImagePairProps) {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <Image
        src={src1}
        alt={alt1}
        width={482}
        height={581}
        className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto transition-opacity duration-1000 ease-in-out"
        style={{ opacity: showAlt ? 0 : 1 }}
      />
      <Image
        src={src2}
        alt={alt2}
        width={482}
        height={581}
        className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[457px] h-auto absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          opacity: showAlt ? 1 : 0,
          transform: showAlt ? "scale(1.02)" : "scale(0.98)",
        }}
      />
    </div>
  );
}
