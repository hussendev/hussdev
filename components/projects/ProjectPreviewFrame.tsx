"use client";

import { getProjectIcon, projects, type Project } from "@/content/projects";
import { pick } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

interface ProjectPreviewFrameProps {
  currentSlug: string;
  locale: string;
  imageSrc: string;
  projectName: string;
  accent: string;
  accentSoft: string;
  desktopHint: string;
  detailsOpen: boolean;
  onOpenProject: (slug: string) => void;
}

function TrafficButton({
  label,
  icon,
  className,
  onClick,
  href,
}: {
  label: string;
  icon: string;
  className: string;
  onClick?: () => void;
  href?: string;
}) {
  const classes = cn(
    "group relative flex size-3 shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)] transition-transform hover:scale-110 active:scale-95",
    className,
  );

  const iconEl = (
    <span className="text-[9px] font-bold leading-none text-black/0 transition-colors group-hover:text-black/55">
      {icon}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes}>
        {iconEl}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={label} onClick={onClick} className={classes}>
      {iconEl}
    </button>
  );
}

function AppIconImage({
  project,
  label,
  size = "sm",
  active = false,
  dock = false,
}: {
  project: Project;
  label: string;
  size?: "sm" | "lg";
  active?: boolean;
  dock?: boolean;
}) {
  const sizeClass = size === "lg" ? "size-16 md:size-[4.25rem]" : "size-11 md:size-12";

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-[22%] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.06] transition-all duration-200",
        sizeClass,
        size === "lg" && "rounded-[24%] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] ring-white/20",
        active
          ? "ring-2 ring-primary/50"
          : !dock && "group-hover:-translate-y-0.5 group-hover:scale-[1.04]",
        dock && !active && "group-hover:scale-[1.04]",
      )}
    >
      <Image
        src={getProjectIcon(project)}
        alt={label}
        fill
        unoptimized
        className="object-cover"
        sizes={size === "lg" ? "68px" : "48px"}
      />
    </div>
  );
}

function ProjectSwitcher({
  locale,
  currentSlug,
  tone = "light",
  detailsOpen,
  onOpenProject,
  onRestore,
}: {
  locale: string;
  currentSlug: string;
  tone?: "light" | "dark";
  detailsOpen: boolean;
  onOpenProject: (slug: string) => void;
  onRestore?: () => void;
}) {
  const t = useTranslations("project");
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "project-switcher overflow-visible rounded-2xl border px-3 py-3 md:px-4 md:py-4",
        isDark
          ? "border-white/10 bg-white/10 backdrop-blur-xl"
          : "border-border/70 bg-white shadow-[0_8px_32px_-16px_rgba(2,35,63,0.18)]",
      )}
    >
      <div className="overflow-x-auto overflow-y-visible px-1 pb-1 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-h-[3.75rem] w-max min-w-full snap-x snap-mandatory items-end justify-center gap-2.5 md:min-h-16 md:gap-3">
          {projects.map((item) => {
            const label = pick(item.localizedName, locale);
            const active = item.slug === currentSlug;

            const inner = (
              <>
                <div className="relative pb-0.5">
                  <AppIconImage project={item} label={label} active={active} dock />
                  <span
                    className={cn(
                      "pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-medium opacity-0 shadow-md transition-all group-hover:opacity-100",
                      isDark ? "bg-white text-foreground" : "bg-foreground text-background",
                    )}
                  >
                    {label}
                  </span>
                </div>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 block size-1 shrink-0 rounded-full",
                    active ? (isDark ? "bg-white" : "bg-primary") : "bg-transparent",
                  )}
                />
              </>
            );

            const className =
              "group flex w-[3.25rem] shrink-0 snap-center flex-col items-center md:w-14";

            if (active && onRestore && detailsOpen) {
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={onRestore}
                  className={className}
                  aria-label={t("restoreApp", { name: label })}
                >
                  {inner}
                </button>
              );
            }

            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => onOpenProject(item.slug)}
                className={className}
                aria-label={label}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DesktopAppIcon({
  project,
  locale,
  onOpenProject,
}: {
  project: Project;
  locale: string;
  onOpenProject: (slug: string) => void;
}) {
  const label = pick(project.localizedName, locale);

  return (
    <button
      type="button"
      onClick={() => onOpenProject(project.slug)}
      className="desktop-app-icon group flex flex-col items-center gap-2 text-center"
    >
      <AppIconImage project={project} label={label} size="lg" />
      <span className="line-clamp-2 max-w-[5.25rem] text-[11px] font-medium leading-snug text-white/90 md:max-w-[5.75rem] md:text-xs">
        {label}
      </span>
    </button>
  );
}

function animateDesktopEnter(scope: HTMLElement | null) {
  if (!scope) return;

  gsap.fromTo(
    scope,
    { autoAlpha: 0, y: 24, scale: 0.97 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, ease: "power3.out" },
  );
  gsap.from(scope.querySelectorAll(".desktop-app-icon"), {
    autoAlpha: 0,
    y: 16,
    scale: 0.88,
    stagger: 0.035,
    duration: 0.38,
    ease: "power2.out",
    delay: 0.12,
  });
  gsap.from(scope.querySelector(".project-switcher"), {
    autoAlpha: 0,
    y: 12,
    duration: 0.32,
    ease: "power2.out",
    delay: 0.22,
  });
}

function animateWindowEnter(scope: HTMLElement | null) {
  if (!scope) return;

  gsap.fromTo(
    scope,
    { autoAlpha: 0, y: 28, scale: 0.95 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, ease: "power3.out" },
  );
  gsap.from(scope.querySelector(".project-switcher"), {
    autoAlpha: 0,
    y: 10,
    duration: 0.32,
    ease: "power2.out",
    delay: 0.18,
  });
}

export function ProjectPreviewFrame({
  currentSlug,
  locale,
  imageSrc,
  projectName,
  accent,
  accentSoft,
  desktopHint,
  detailsOpen,
  onOpenProject,
}: ProjectPreviewFrameProps) {
  const t = useTranslations("project");
  const [minimized, setMinimized] = useState(!detailsOpen);
  const [maximized, setMaximized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const windowRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  const appSlug = projectName.toLowerCase().replace(/\s+/g, "");
  const currentProject = projects.find((item) => item.slug === currentSlug);
  const currentLabel = pick(currentProject?.localizedName ?? { en: projectName, ar: projectName }, locale);
  const otherProjects = projects.filter((item) => item.slug !== currentSlug);

  useEffect(() => {
    setMaximized(false);
    setIsAnimating(false);
    setMinimized(!detailsOpen);
  }, [currentSlug, detailsOpen]);

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function minimizeToDesktop(fromDetailsToggle = false) {
    if (!fromDetailsToggle && (isAnimating || minimized)) return;

    if (prefersReducedMotion() || fromDetailsToggle) {
      setMinimized(true);
      setMaximized(false);
      return;
    }

    setIsAnimating(true);
    gsap.to(windowRef.current, {
      autoAlpha: 0,
      y: -28,
      scale: 0.94,
      duration: 0.38,
      ease: "power3.in",
      onComplete: () => {
        setMinimized(true);
        setMaximized(false);
        requestAnimationFrame(() => {
          animateDesktopEnter(desktopRef.current);
          setIsAnimating(false);
        });
      },
    });
  }

  function restoreWindow(fromDetailsToggle = false) {
    if (!fromDetailsToggle && (isAnimating || !minimized)) return;

    if (prefersReducedMotion() || fromDetailsToggle) {
      setMinimized(false);
      setMaximized(false);
      if (fromDetailsToggle && !prefersReducedMotion()) {
        requestAnimationFrame(() => animateWindowEnter(windowRef.current));
      }
      return;
    }

    setIsAnimating(true);
    gsap.to(desktopRef.current, {
      autoAlpha: 0,
      y: -16,
      scale: 0.98,
      duration: 0.32,
      ease: "power3.in",
      onComplete: () => {
        setMinimized(false);
        setMaximized(false);
        requestAnimationFrame(() => {
          animateWindowEnter(windowRef.current);
          setIsAnimating(false);
        });
      },
    });
  }

  function openProjectDetails(slug: string) {
    onOpenProject(slug);
  }

  function handleWindowAction() {
    if (detailsOpen) {
      restoreWindow();
    } else {
      openProjectDetails(currentSlug);
    }
  }

  const desktopView = (
    <div
      ref={desktopRef}
      className="overflow-hidden rounded-2xl border border-border/70 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.4)] md:rounded-[1.75rem]"
      style={{
        background: `radial-gradient(ellipse 90% 60% at 50% 0%, ${accentSoft}28 0%, transparent 60%), linear-gradient(180deg, ${accent}ee 0%, #0f172a 45%, #0b1120 100%)`,
      }}
    >
      <div className="flex h-10 items-center justify-between border-b border-white/10 px-4 md:px-6">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/30" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <p className="text-[11px] font-medium text-white/60 md:text-xs">{desktopHint}</p>
        <button
          type="button"
          onClick={handleWindowAction}
          className="rounded-md px-2 py-0.5 text-[11px] font-medium text-white/70 hover:bg-white/10 hover:text-white"
        >
          {currentLabel}
        </button>
      </div>

      <div className="flex flex-col items-center px-4 py-8 md:px-8 md:py-10">
        <button
          type="button"
          onClick={handleWindowAction}
          className="group mb-8 w-full max-w-xs"
          aria-label={detailsOpen ? t("restoreApp", { name: currentLabel }) : t("openApp", { name: currentLabel })}
        >
          <div className="overflow-hidden rounded-xl border border-white/20 bg-[#ececec] p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="flex items-center gap-1.5 rounded-t-lg bg-[#e8e8e8] px-2 py-1.5">
              <span className="size-2 rounded-full bg-[#ff5f57]" />
              <span className="size-2 rounded-full bg-[#febc2e]" />
              <span className="size-2 rounded-full bg-[#28c840]" />
              <span className="ms-1 truncate text-[10px] font-medium text-[#5f5f5f]">{appSlug}.app</span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-b-lg bg-[#0a1628]">
              <Image
                src={imageSrc}
                alt={projectName}
                fill
                unoptimized
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] font-medium text-white/50 group-hover:text-white/80">
            {detailsOpen ? t("clickToRestore") : t("clickToOpen")}
          </p>
        </button>

        <div className="grid w-full max-w-3xl grid-cols-4 gap-x-3 gap-y-7 sm:grid-cols-5 md:gap-x-5 md:gap-y-8">
          {otherProjects.map((item) => (
            <DesktopAppIcon key={item.slug} project={item} locale={locale} onOpenProject={onOpenProject} />
          ))}
        </div>
      </div>

      <div className="px-4 pb-8 pt-2 md:px-6 md:pb-10 md:pt-3">
        <ProjectSwitcher
          locale={locale}
          currentSlug={currentSlug}
          tone="dark"
          detailsOpen={detailsOpen}
          onOpenProject={onOpenProject}
          onRestore={restoreWindow}
        />
      </div>
    </div>
  );

  const windowView = (
    <div ref={windowRef}>
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-[#ececec] shadow-[0_24px_64px_-28px_rgba(2,35,63,0.28)] transition-shadow duration-500 md:rounded-[1.75rem]">
        <div className="flex items-center gap-2 bg-[#e8e8e8] px-3 py-2.5 md:px-4">
          <div className="flex items-center gap-2">
            <TrafficButton
              label={t("closeWindow")}
              icon="×"
              className="bg-[#ff5f57]"
              href="/projects"
            />
            <TrafficButton
              label={t("minimizeToDesktop")}
              icon="−"
              className="bg-[#febc2e]"
              onClick={() => minimizeToDesktop()}
            />
            <TrafficButton
              label={maximized ? "Exit full width" : "Maximize preview"}
              icon={maximized ? "⤢" : "+"}
              className="bg-[#28c840]"
              onClick={() => setMaximized((value) => !value)}
            />
          </div>
          <span className="ms-1 truncate text-xs font-medium text-[#5f5f5f]">{appSlug}.app</span>
        </div>

        <button
          type="button"
          onClick={() => !detailsOpen && openProjectDetails(currentSlug)}
          className={cn(
            "relative block w-full overflow-hidden bg-[#0a1628]",
            !detailsOpen && "cursor-pointer",
          )}
          aria-label={!detailsOpen ? t("openApp", { name: currentLabel }) : undefined}
        >
          <Image
            src={imageSrc}
            alt={projectName}
            width={1920}
            height={960}
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="block h-auto w-full"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </button>
      </div>

      <div className="mt-4 mb-2">
        <ProjectSwitcher
          locale={locale}
          currentSlug={currentSlug}
          tone="light"
          detailsOpen={detailsOpen}
          onOpenProject={onOpenProject}
        />
      </div>
    </div>
  );

  return (
    <section className="container px-4 pb-8 sm:px-6 md:pb-10">
      <div
        className={cn(
          "mx-auto transition-[max-width] duration-500 ease-out",
          maximized ? "max-w-[min(96vw,1400px)]" : "max-w-5xl",
        )}
      >
        {minimized ? desktopView : windowView}
      </div>
    </section>
  );
}
