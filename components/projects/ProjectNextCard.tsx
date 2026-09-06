import type { Project } from "@/content/projects";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectNextCardProps {
  project: Project;
  locale: string;
  label: string;
}

export function ProjectNextCard({ project, locale, label }: ProjectNextCardProps) {
  const imageSrc = project.mockup ?? project.image;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#0a1628] sm:w-48 md:w-56">
        <Image
          src={imageSrc}
          alt={project.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="224px"
        />
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
          <p className="mt-1 font-readex text-xl font-medium">
            {pick(project.localizedName, locale)}
          </p>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {pick(project.tagline, locale)}
          </p>
        </div>
        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
