"use client";

import {
  certifications,
  education,
  experiences,
  languages,
} from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { pick } from "@/content/types";
import { site } from "@/content/site";
import { useReveal } from "@/components/motion/useReveal";
import { formatDateRange } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function ExperienceTimeline() {
  const t = useTranslations("experience");
  const locale = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="bg-secondary/40 py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h2 className="reveal mt-4 font-readex text-4xl font-medium md:text-5xl">
            {t("title")}
          </h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("body")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="reveal rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-readex text-xl font-medium">
                    {pick(item.title, locale)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick(item.organization, locale)} · {pick(item.location, locale)}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatDateRange(item.start, item.end, locale, t("present"))}
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {pick(item.bullets, locale).map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="reveal font-readex text-2xl font-medium">{t("skillsTitle")}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="reveal rounded-xl border border-border bg-white p-5"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {pick(group.title, locale)}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal rounded-2xl border border-border bg-white p-6">
            <h3 className="font-readex text-2xl font-medium">{t("educationTitle")}</h3>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.degree.en}>
                  <h4 className="font-medium">{pick(item.degree, locale)}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick(item.school, locale)} · {pick(item.location, locale)}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatDateRange(item.start, item.end, locale, t("present"))}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {pick(item.detail, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="reveal rounded-2xl border border-border bg-white p-6">
              <h4 className="font-medium">Certifications</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {pick(certifications, locale).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-2xl border border-border bg-white p-6">
              <h4 className="font-medium">Languages</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {pick(languages, locale).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <a href={site.cvPath} download className="reveal inline-block">
              <Button variant="secondary">
                <Download className="size-4" />
                {t("viewAll")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
