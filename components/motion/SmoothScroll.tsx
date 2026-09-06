"use client";

import { HashScrollSync } from "@/components/motion/HashScrollSync";
import { setLenisInstance } from "@/lib/scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
      ScrollTrigger.refresh();
    };
  }, [pathname]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.documentElement.classList.add("motion-ready");

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);
    document.documentElement.classList.add("lenis");

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
      document.documentElement.classList.remove("lenis");
    };
  }, []);

  return (
    <>
      <HashScrollSync onScroll={() => ScrollTrigger.refresh()} />
      {children}
    </>
  );
}
