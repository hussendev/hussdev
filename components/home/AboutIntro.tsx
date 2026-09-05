"use client";

import { site } from "@/content/site";
import { useReveal } from "@/components/motion/useReveal";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutIntro() {
  const t = useTranslations("about");
  const ref = useReveal<HTMLElement>();

  const stats = ["years", "apps", "loc", "markets"] as const;

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h2 className="reveal mt-4 font-readex text-4xl font-medium leading-tight md:text-5xl">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="reveal mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            {t("body")}
          </p>
          <div className="reveal mt-8">
            <a href={site.cvPath} download>
              <Button variant="secondary" size="lg">
                <Download className="size-4" />
                {t("cta")}
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((key) => (
            <div
              key={key}
              className="reveal rounded-xl border border-border bg-secondary/60 p-6 text-center"
            >
              <p className="font-readex text-3xl font-semibold text-primary">
                {t(`stats.${key}.value`)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`stats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
