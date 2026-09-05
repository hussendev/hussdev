"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SplashLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-splash transition-opacity duration-500"
    >
      <Image
        src="/logo-icon.svg"
        alt=""
        width={48}
        height={48}
        className="animate-pulse-soft"
        priority
      />
    </div>
  );
}
