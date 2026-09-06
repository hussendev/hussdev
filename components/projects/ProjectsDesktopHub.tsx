"use client";

import { filterProjects, projects, type Project } from "@/content/projects";
import { pick } from "@/content/types";
import { ProjectPreviewFrame } from "@/components/projects/ProjectPreviewFrame";
import { resetScrollPosition } from "@/lib/scroll";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";

export function ProjectsDesktopHub() {
  const t = useTranslations("project");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();

  const filtered = useMemo(
    () =>
      filterProjects({
        platform: searchParams.get("platform") || undefined,
        category: searchParams.get("category") || undefined,
        stack: searchParams.get("stack") || undefined,
        status: searchParams.get("status") || undefined,
      }),
    [searchParams],
  );

  const currentProject = filtered[0] ?? projects[0];

  const openProject = useCallback(
    (slug: string) => {
      resetScrollPosition();
      router.push(`/projects/${slug}`);
    },
    [router],
  );

  if (!currentProject) {
    return (
      <section className="container px-4 py-24 pt-28 text-center sm:px-6">
        <p className="text-muted-foreground">{t("noProjects")}</p>
      </section>
    );
  }

  const imageSrc = currentProject.mockup ?? currentProject.image;

  return (
    <article className="pb-16 pt-24 md:pb-24 md:pt-28">
      <ProjectPreviewFrame
        hubMode
        currentSlug={currentProject.slug}
        locale={locale}
        imageSrc={imageSrc}
        projectName={currentProject.name}
        accent={currentProject.accent}
        accentSoft={currentProject.accentSoft}
        desktopHint={t("desktopHint")}
        detailsOpen={false}
        desktopProjects={filtered}
        onOpenProject={openProject}
      />
    </article>
  );
}
