"use client";

import type { Project } from "@/content/projects";
import { pick } from "@/content/types";
import { hasStoreLinks, ProjectStoreLinks } from "@/components/projects/ProjectStoreLinks";
import { ProjectPreviewFrame } from "@/components/projects/ProjectPreviewFrame";
import { resetScrollPosition } from "@/lib/scroll";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectDetailExperienceProps {
  project: Project;
  locale: string;
  categoryLabel: string;
  platformLabel: string;
  statusLabel: string;
  desktopHint: string;
  labels: {
    role: string;
    market: string;
    platform: string;
    status: string;
    download: string;
    appStore: string;
    playStore: string;
  };
  children: React.ReactNode;
}

export function ProjectDetailExperience({
  project,
  locale,
  categoryLabel,
  platformLabel,
  statusLabel,
  desktopHint,
  labels,
  children,
}: ProjectDetailExperienceProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const detailsRef = useRef<HTMLDivElement>(null);
  const detailsOpen = searchParams.get("open") === "1";

  const openProject = useCallback(
    (slug: string) => {
      resetScrollPosition();
      router.push(`/projects/${slug}?open=1`);
    },
    [router],
  );

  useEffect(() => {
    if (!detailsOpen || !detailsRef.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    gsap.fromTo(
      detailsRef.current,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.1 },
    );
  }, [detailsOpen, project.slug]);

  const imageSrc = project.mockup ?? project.image;

  return (
    <>
      <ProjectPreviewFrame
        currentSlug={project.slug}
        locale={locale}
        imageSrc={imageSrc}
        projectName={project.name}
        accent={project.accent}
        accentSoft={project.accentSoft}
        desktopHint={desktopHint}
        detailsOpen={detailsOpen}
        onOpenProject={openProject}
      />

      {detailsOpen ? (
        <div ref={detailsRef}>
          <section className="container relative z-10 mt-8 px-4 sm:px-6 md:mt-12">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_80px_-32px_rgba(2,35,63,0.22)]">
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {project.year}
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {categoryLabel}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white"
                    style={{ backgroundColor: project.accent }}
                  >
                    {statusLabel}
                  </span>
                </div>

                <h1 className="mt-5 font-readex text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                  {pick(project.localizedName, locale)}
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
                  {pick(project.tagline, locale)}
                </p>

                <dl className="mt-8 grid gap-4 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: labels.role, value: pick(project.role, locale) },
                    { label: labels.market, value: pick(project.market, locale) },
                    { label: labels.platform, value: platformLabel },
                    { label: labels.status, value: statusLabel },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
                      <dd className="mt-2 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>

                {project.metrics.length ? (
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.value + pick(metric.label, locale)}
                        className="rounded-xl border border-border bg-secondary/40 px-5 py-4 text-center"
                      >
                        <p className="font-readex text-3xl font-semibold" style={{ color: project.accent }}>
                          {metric.value}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                          {pick(metric.label, locale)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {hasStoreLinks(project) ? (
                  <div className="mt-8 border-t border-border pt-8">
                    <ProjectStoreLinks
                      project={project}
                      locale={locale}
                      appStoreLabel={labels.appStore}
                      playStoreLabel={labels.playStore}
                      downloadLabel={labels.download}
                      tone="dark"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          {children}
        </div>
      ) : null}
    </>
  );
}
