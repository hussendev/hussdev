import { Suspense } from "react";
import { getProject, projects } from "@/content/projects";
import { locales } from "@/i18n/routing";
import { pick } from "@/content/types";
import { ProjectDetailExperience } from "@/components/projects/ProjectDetailExperience";
import { ProjectNextCard } from "@/components/projects/ProjectNextCard";
import { NavHashLink } from "@/components/navigation/NavHashLink";
import { Button } from "@/components/ui/button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${pick(project.localizedName, locale)} | Hussen Ghabayen`,
    description: pick(project.summary, locale),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "project" });
  const tFilter = await getTranslations({ locale, namespace: "filter" });

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pb-16 pt-24 md:pb-24 md:pt-28">
      <Suspense fallback={null}>
        <ProjectDetailExperience
        project={project}
        locale={locale}
        categoryLabel={tFilter(`categories.${project.category}`)}
        platformLabel={tFilter(`platforms.${project.platform}`)}
        statusLabel={tFilter(`statuses.${project.status}`)}
        desktopHint={t("desktopHint")}
        labels={{
          role: t("role"),
          market: t("market"),
          platform: t("platform"),
          status: t("status"),
          download: t("download"),
          appStore: t("appStore"),
          playStore: t("playStore"),
        }}
      >
        <div className="container mt-16 md:mt-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <section>
            <h2 className="font-readex text-2xl font-medium md:text-3xl">{t("overview")}</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              {pick(project.overview, locale)}
            </p>
          </section>

          <section>
            <h2 className="font-readex text-2xl font-medium md:text-3xl">{t("highlights")}</h2>
            <ul className="mt-5 space-y-4">
              {pick(project.highlights, locale).map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm leading-6 text-muted-foreground md:text-base"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: project.accentSoft }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          </div>

          <section className="mt-16 border-t border-border pt-12">
          <h2 className="font-readex text-2xl font-medium md:text-3xl">{t("stack")}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          </section>

          <div className="mt-16 grid gap-6 border-t border-border pt-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <ProjectNextCard project={nextProject} locale={locale} label={t("nextProject")} />
          <NavHashLink href="/#contact" className="lg:justify-self-end">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              {t("discuss")}
            </Button>
          </NavHashLink>
          </div>
        </div>
        </ProjectDetailExperience>
      </Suspense>
    </article>
  );
}
