"use client";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export function QuickLinksMenu({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const links = [
    { href: `mailto:${site.email}`, label: t("quickLinks.email"), icon: Mail },
    { href: site.whatsapp, label: t("quickLinks.whatsapp"), icon: MessageCircle },
    { href: site.linkedin, label: t("quickLinks.linkedin"), icon: Linkedin },
    { href: site.github, label: t("quickLinks.github"), icon: Github },
    { href: site.cvPath, label: t("quickLinks.cv"), icon: Download },
  ];

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="header-quick-links"
        aria-label={t("openQuickLinks")}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2 text-sm font-medium transition-all duration-300",
          tone === "light"
            ? "glass border border-white/20 text-white hover:bg-white/10"
            : "border border-primary/10 bg-white/50 text-primary backdrop-blur-md hover:bg-white/70",
        )}
      >
        <span>{t("contact")}</span>
        <ChevronDown
          className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        id="header-quick-links"
        className={cn(
          "absolute end-0 top-[calc(100%+0.5rem)] min-w-52 overflow-hidden rounded-md border border-white/10 bg-primary/95 p-2 text-white shadow-xl backdrop-blur-md transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            <Icon className="size-4 shrink-0" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
