import { getProject, projects } from "@/content/projects";
import { locales } from "@/i18n/routing";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { hasStoreLinks, ProjectStoreLinks } from "@/components/projects/ProjectStoreLinks";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
    <article className="py-16 md:py-24">
      <div className="container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          {t("back")}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary/30 shadow-lg">
            <Image
              src={project.mockup ?? project.image}
              alt={project.name}
              fill
              className="object-contain p-2"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {project.year} · {tFilter(`categories.${project.category}`)}
            </p>
            <h1 className="mt-3 font-readex text-4xl font-medium md:text-5xl">
              {pick(project.localizedName, locale)}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {pick(project.tagline, locale)}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t("role")}
                </dt>
                <dd className="mt-1 font-medium">{pick(project.role, locale)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t("market")}
                </dt>
                <dd className="mt-1 font-medium">{pick(project.market, locale)}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t("platform")}
                </dt>
                <dd className="mt-1 font-medium">
                  {tFilter(`platforms.${project.platform}`)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t("status")}
                </dt>
                <dd className="mt-1 font-medium">
                  {tFilter(`statuses.${project.status}`)}
                </dd>
              </div>
            </dl>

            {project.metrics.length ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.value + pick(metric.label, locale)}
                    className="rounded-xl border border-border bg-secondary/50 p-4 text-center"
                  >
                    <p className="font-readex text-2xl font-semibold">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pick(metric.label, locale)}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}

            {hasStoreLinks(project) ? (
              <div className="mt-8">
                <ProjectStoreLinks
                  project={project}
                  locale={locale}
                  appStoreLabel={t("appStore")}
                  playStoreLabel={t("playStore")}
                  downloadLabel={t("download")}
                  tone="dark"
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section>
            <h2 className="font-readex text-2xl font-medium">{t("overview")}</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              {pick(project.overview, locale)}
            </p>
          </section>

          <section>
            <h2 className="font-readex text-2xl font-medium">{t("highlights")}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              {pick(project.highlights, locale).map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="font-readex text-2xl font-medium">{t("stack")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{t("nextProject")}</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="mt-1 inline-flex items-center gap-2 font-readex text-xl font-medium hover:underline"
            >
              {pick(nextProject.localizedName, locale)}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <Link href="/#contact">
            <Button variant="secondary" size="lg">
              {t("discuss")}
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
