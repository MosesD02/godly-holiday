"use client";

import { useEffect } from "react";

export function OsDetection() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isWindows = userAgent.includes("Windows");
    const isMac = userAgent.includes("Mac");
    const isLinux = userAgent.includes("Linux");

    if (isWindows) {
      document.body.classList.add("os-windows");
    } else if (isMac) {
      document.body.classList.add("os-mac");
    } else if (isLinux) {
      document.body.classList.add("os-linux");
    }
  }, []);

  return null;
}
