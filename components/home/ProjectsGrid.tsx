"use client";

import { secondaryProjects } from "@/content/projects";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { useReveal } from "@/components/motion/useReveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function ProjectsGrid() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="min-h-screen overflow-hidden px-4 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="reveal font-readex text-4xl font-medium leading-tight md:text-5xl">
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="reveal mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("body")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="reveal group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1628]">
                <Image
                  src={project.mockup ?? project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-readex text-xl font-medium">
                    {pick(project.localizedName, locale)}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {pick(project.tagline, locale)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-sm border border-primary px-8 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
          >
            {t("all")}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
