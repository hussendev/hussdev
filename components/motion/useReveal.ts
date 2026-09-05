"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseRevealOptions {
  y?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  selector?: string;
}

export function useReveal<T extends HTMLElement>(
  options: UseRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const {
    y = 32,
    delay = 0,
    stagger = 0.08,
    start = "top 85%",
    selector = ".reveal",
  } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const items = root.querySelectorAll(selector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay,
      stagger,
      scrollTrigger: {
        trigger: root,
        start,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, delay, stagger, start, selector]);

  return ref;
}

export function useHeroStagger(selector = ".hero-item", delay = 0.15) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: 28 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay,
      stagger: 0.12,
    });
  }, [selector, delay]);
}

export function useHeaderStagger(selector = ".header-item") {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y: -12 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.06,
      delay: 0.2,
    });
  }, [selector]);
}
