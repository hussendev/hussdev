import { ProjectsListing } from "@/components/projects/ProjectsListing";
import { setRequestLocale } from "next-intl/server";

export default async function ProjectsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const query = await searchParams;
  const get = (key: string) => {
    const value = query[key];
    return typeof value === "string" ? value : "";
  };

  return (
    <ProjectsListing
      initialPlatform={get("platform")}
      initialCategory={get("category")}
      initialStack={get("stack")}
      initialStatus={get("status")}
    />
  );
}
