"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useHeroStagger } from "@/components/motion/useReveal";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  useHeroStagger();

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 start-0 z-10 h-1/2 w-full bg-gradient-to-b from-black/90 to-transparent" />
        <div className="absolute bottom-0 start-0 z-10 h-1/2 w-full bg-gradient-to-t from-black/90 to-transparent" />
        <Image
          src="/hero.svg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative mt-[10vh] text-center text-white">
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

      <div className="hero-item mb-8 mt-8 flex flex-col items-center gap-2 px-2 lg:absolute lg:bottom-8 lg:start-0 lg:end-0">
        <span className="text-sm font-light text-white/80">{t("scrollDown")}</span>
        <ChevronDown className="size-5 animate-scroll-hint text-white/80" />
      </div>
    </section>
  );
}
