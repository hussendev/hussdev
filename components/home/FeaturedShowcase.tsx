"use client";

import { featuredProjects } from "@/content/projects";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { StoreBadges } from "@/components/projects/StoreBadges";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedShowcase() {
  const t = useTranslations("showcase");
  const tFilter = useTranslations("filter");
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const slides = slidesRef.current;
    if (!section || !slides) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const panels = slides.querySelectorAll("[data-slide]");
    if (!panels.length) return;

    if (prefersReducedMotion) {
      gsap.set(panels, { autoAlpha: 1 });
      return;
    }

    gsap.set(panels, { autoAlpha: 0 });
    gsap.set(panels[0], { autoAlpha: 1 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${panels.length * 100}%`,
        pin: true,
        scrub: 0.7,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.min(
            panels.length - 1,
            Math.floor(self.progress * panels.length),
          );
          setActiveIndex(index);
        },
      },
    });

    panels.forEach((panel, index) => {
      if (index === 0) return;

      timeline.to(
        panels[index - 1],
        { autoAlpha: 0, duration: 0.55, ease: "power2.inOut" },
        index,
      );
      timeline.to(
        panel,
        { autoAlpha: 1, duration: 0.55, ease: "power2.inOut" },
        index,
      );
    });

    return () => {
      const scrollTrigger = timeline.scrollTrigger;
      timeline.kill();
      scrollTrigger?.kill(true);
      ScrollTrigger.refresh();
    };
  }, []);

  const project = featuredProjects[activeIndex] ?? featuredProjects[0];

  return (
    <section ref={sectionRef} className="relative h-[100svh] overflow-hidden text-white">
      <div ref={slidesRef} className="absolute inset-0">
        {featuredProjects.map((item, index) => (
          <div
            key={item.slug}
            data-slide
            className="absolute inset-0"
            style={{ zIndex: featuredProjects.length - index }}
          >
            <Image
              src={item.mockup ?? item.image}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#011527]/95 via-[#011527]/72 to-[#011527]/25 lg:via-[#011527]/55 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011527]/80 via-transparent to-[#011527]/40" />
          </div>
        ))}
      </div>

      <div className="container relative z-10 grid h-full grid-rows-[auto_minmax(0,1fr)_auto] px-4 pb-8 pt-28 md:pt-32">
        <header className="mx-auto max-w-2xl shrink-0 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">
            {t("eyebrow1")}
          </p>
          <h2 className="mt-2 font-readex text-3xl font-medium md:text-4xl lg:text-5xl">
            {t("eyebrow2")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
            {t("subtitle")}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/45">
            <span>{t("scrollDown")}</span>
            <ChevronDown className="size-3.5 animate-scroll-hint" />
          </div>
        </header>

        <div className="flex items-center py-6 md:py-8">
          <article
            key={project.slug}
            className="showcase-panel-enter w-full max-w-xl lg:max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-readex text-xs tabular-nums text-white/45">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(featuredProjects.length).padStart(2, "0")}
              </span>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-white/80 backdrop-blur-sm">
                {tFilter(`statuses.${project.status}`)}
              </span>
              <span className="text-xs text-white/55">
                {project.year} · {pick(project.market, locale)}
              </span>
            </div>

            <div className="mt-4 space-y-3 md:mt-5">
              <h3 className="font-readex text-3xl font-medium leading-tight md:text-4xl lg:text-5xl">
                {pick(project.localizedName, locale)}
              </h3>
              <p className="max-w-lg text-sm leading-relaxed text-white/78 md:text-base md:leading-7">
                {pick(project.tagline, locale)}
              </p>
            </div>

            {project.metrics.length ? (
              <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
                {project.metrics.slice(0, 3).map((metric) => (
                  <div
                    key={metric.value + pick(metric.label, locale)}
                    className="rounded-xl border border-white/12 bg-white/10 px-3.5 py-2.5 backdrop-blur-md"
                  >
                    <p className="font-readex text-lg font-semibold leading-none">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-white/55">
                      {pick(metric.label, locale)}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={`/projects/${project.slug}`}>
                <Button variant="default" size="lg">
                  {t("explore")}
                  <ArrowUpRight className="size-4" />
                </Button>
              </Link>
              <StoreBadges
                appStore={project.storeLinks?.appStore}
                playStore={project.storeLinks?.playStore}
                appStoreLabel={t("appStore")}
                playStoreLabel={t("playStore")}
                tone="light"
              />
            </div>
          </article>
        </div>

        <footer className="flex shrink-0 items-center justify-center gap-2 pb-2">
          {featuredProjects.map((item, index) => (
            <span
              key={item.slug}
              aria-hidden
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: index === activeIndex ? "2rem" : "0.375rem",
                backgroundColor:
                  index === activeIndex
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.22)",
              }}
            />
          ))}
        </footer>
      </div>
    </section>
  );
}
