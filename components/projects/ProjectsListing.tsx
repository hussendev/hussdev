"use client";

import {
  allStackTags,
  filterProjects,
  type Category,
  type Platform,
  type Project,
  type Status,
} from "@/content/projects";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { useReveal } from "@/components/motion/useReveal";
import { Select } from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

interface ProjectsListingProps {
  initialPlatform?: string;
  initialCategory?: string;
  initialStack?: string;
  initialStatus?: string;
}

function ProjectCard({ project, locale }: { project: Project; locale: string }) {
  const t = useTranslations("projects");

  return (
    <Link
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
        {project.featured ? (
          <span className="absolute start-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
            {t("featured")}
          </span>
        ) : null}
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
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsListing({
  initialPlatform = "",
  initialCategory = "",
  initialStack = "",
  initialStatus = "",
}: ProjectsListingProps) {
  const t = useTranslations("projects");
  const tFilter = useTranslations("filter");
  const locale = useLocale();
  const ref = useReveal<HTMLElement>();

  const filtered = useMemo(
    () =>
      filterProjects({
        platform: initialPlatform || undefined,
        category: initialCategory || undefined,
        stack: initialStack || undefined,
        status: initialStatus || undefined,
      }),
    [initialPlatform, initialCategory, initialStack, initialStatus],
  );

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="reveal font-readex text-4xl font-medium md:text-5xl">
            {t("pageTitle")}
          </h1>
          <p className="reveal mt-4 text-muted-foreground">{t("pageSubtitle")}</p>
        </div>

        <form method="get" className="reveal mt-8 grid gap-3 md:grid-cols-4 xl:grid-cols-5">
          <Select name="platform" defaultValue={initialPlatform} placeholder={tFilter("platform")}>
            <option value="">{tFilter("any")}</option>
            {(["android", "ios", "both"] as Platform[]).map((value) => (
              <option key={value} value={value}>
                {tFilter(`platforms.${value}`)}
              </option>
            ))}
          </Select>
          <Select name="category" defaultValue={initialCategory} placeholder={tFilter("category")}>
            <option value="">{tFilter("any")}</option>
            {(
              [
                "social",
                "transport",
                "commerce",
                "healthcare",
                "education",
                "services",
              ] as Category[]
            ).map((value) => (
              <option key={value} value={value}>
                {tFilter(`categories.${value}`)}
              </option>
            ))}
          </Select>
          <Select name="stack" defaultValue={initialStack} placeholder={tFilter("stack")}>
            <option value="">{tFilter("any")}</option>
            {allStackTags.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
          <Select name="status" defaultValue={initialStatus} placeholder={tFilter("status")}>
            <option value="">{tFilter("any")}</option>
            {(["production", "productionReady"] as Status[]).map((value) => (
              <option key={value} value={value}>
                {tFilter(`statuses.${value}`)}
              </option>
            ))}
          </Select>
          <button
            type="submit"
            className="h-12 rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            {tFilter("search")}
          </button>
        </form>

        <p className="reveal mt-6 text-sm text-muted-foreground">
          {t("results", { count: filtered.length })}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
