"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function SnapContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome) {
      document.documentElement.classList.add("snap-active");
    }
    return () => {
      document.documentElement.classList.remove("snap-active");
    };
  }, [isHome]);

  return <>{children}</>;
}
