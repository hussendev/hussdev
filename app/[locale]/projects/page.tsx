import { Suspense } from "react";
import { ProjectsDesktopHub } from "@/components/projects/ProjectsDesktopHub";
import { setRequestLocale } from "next-intl/server";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={null}>
      <ProjectsDesktopHub />
    </Suspense>
  );
}
