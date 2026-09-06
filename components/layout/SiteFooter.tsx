"use client";

import { Link } from "@/i18n/navigation";
import { NavHashLink } from "@/components/navigation/NavHashLink";
import { site } from "@/content/site";
import { pick } from "@/content/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo-icon.svg" alt="" width={36} height={36} />
              <span className="font-readex text-xl font-medium">hussendev</span>
            </div>
            <div>
              <h3 className="font-readex text-lg font-medium">{t("taglineTitle")}</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                {t("taglineBody")}
              </p>
            </div>
            <div className="space-y-1 text-sm">
              <a href={`mailto:${site.email}`} className="block hover:underline">
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="block hover:underline">
                {site.phoneDisplay}
              </a>
              <p>{pick(site.location, locale)}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("sitemap")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {(["home", "about", "projects", "experience", "contact"] as const).map(
                (key) => {
                  const href =
                    key === "home"
                      ? "/"
                      : key === "projects"
                        ? "/projects"
                        : `/#${key}`;

                  return (
                    <li key={key}>
                      {href.startsWith("/#") ? (
                        <NavHashLink href={href} className="hover:underline">
                          {t(`links.${key}`)}
                        </NavHashLink>
                      ) : (
                        <Link href={href} className="hover:underline">
                          {t(`links.${key}`)}
                        </Link>
                      )}
                    </li>
                  );
                },
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("work")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {(["mushaf", "linkedwithin", "kayan"] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={`/projects/${key === "mushaf" ? "mushaf-qatar" : key === "kayan" ? "kayan-cafe" : key}`}
                    className="hover:underline"
                  >
                    {t(`links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t("connect")}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  {t("links.linkedin")}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noreferrer" className="hover:underline">
                  {t("links.github")}
                </a>
              </li>
              <li>
                <a href={site.cvPath} className="hover:underline">
                  {t("links.cv")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md space-y-3">
            <h4 className="font-medium">{t("newsletterTitle")}</h4>
            <p className="text-sm text-muted-foreground">{t("newsletterBody")}</p>
            <form
              className="flex flex-col gap-2 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input type="email" placeholder={t("emailPlaceholder")} />
              <Button type="submit" variant="secondary" className="shrink-0">
                {t("subscribe")}
              </Button>
            </form>
          </div>
          <p className="text-sm text-muted-foreground">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
