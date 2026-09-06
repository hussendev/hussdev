"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useHeroStagger } from "@/components/motion/useReveal";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  useHeroStagger();

  return (
    <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white translate-y-8 sm:translate-y-10 lg:translate-y-14">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="hero-item mb-2 text-4xl font-light lg:text-6xl">
          {t("titleLight")}
        </h1>
        <h2 className="hero-item font-readex text-4xl font-medium lg:text-6xl">
          {t("titleBold")}
        </h2>
        <p className="hero-item mx-auto mt-4 max-w-xs text-lg font-light lg:max-w-2xl">
          {t("subtitle")}
        </p>
        <Link href="/projects" className="hero-item inline-block">
          <Button size="lg" className="my-4 px-12 py-5">
            {t("cta")}
            <ArrowUpRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function HeroScrollHint() {
  const t = useTranslations("hero");

  return (
    <div className="hero-item pointer-events-none absolute inset-x-0 bottom-4 z-10 flex flex-col items-center gap-2 px-2">
      <span className="text-sm font-light text-white/80">{t("scrollDown")}</span>
      <ChevronDown className="size-5 animate-scroll-hint text-white/80" />
    </div>
  );
}
