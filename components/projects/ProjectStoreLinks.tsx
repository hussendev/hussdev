import type { Project } from "@/content/projects";
import { pick } from "@/content/types";
import { StoreBadges } from "@/components/projects/StoreBadges";

interface ProjectStoreLinksProps {
  project: Project;
  locale: string;
  appStoreLabel: string;
  playStoreLabel: string;
  downloadLabel: string;
  tone?: "light" | "dark";
}

export function hasStoreLinks(project: Project): boolean {
  const links = project.storeLinks;
  if (!links) return false;
  if (links.apps?.length) {
    return links.apps.some((app) => app.appStore || app.playStore);
  }
  return Boolean(links.appStore || links.playStore);
}

export function ProjectStoreLinks({
  project,
  locale,
  appStoreLabel,
  playStoreLabel,
  downloadLabel,
  tone = "dark",
}: ProjectStoreLinksProps) {
  const links = project.storeLinks;
  if (!links || !hasStoreLinks(project)) return null;

  if (links.apps?.length) {
    return (
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{downloadLabel}</p>
        {links.apps.map((app) => (
          <div key={pick(app.label, locale)}>
            <p className="mb-2 text-sm font-medium text-foreground">
              {pick(app.label, locale)}
            </p>
            <StoreBadges
              appStore={app.appStore}
              playStore={app.playStore}
              appStoreLabel={appStoreLabel}
              playStoreLabel={playStoreLabel}
              tone={tone}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
        {downloadLabel}
      </p>
      <StoreBadges
        appStore={links.appStore}
        playStore={links.playStore}
        appStoreLabel={appStoreLabel}
        playStoreLabel={playStoreLabel}
        tone={tone}
      />
    </div>
  );
}
