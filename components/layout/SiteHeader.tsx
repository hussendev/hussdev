"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { QuickLinksMenu } from "@/components/layout/QuickLinksMenu";
import { useHeaderStagger } from "@/components/motion/useReveal";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", key: "home" },
  { href: "/#about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/#experience", key: "experience" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const heroGlass = isHome && !scrolled;

  useHeaderStagger();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-4 md:pt-4">
      <div
        className={cn(
          "container mx-auto overflow-hidden rounded-2xl transition-[background,box-shadow,color,border-color] duration-500 ease-out",
          heroGlass ? "glass-nav-hero text-white" : "glass-nav text-primary",
        )}
      >
        <header className="relative flex items-center justify-between px-4 py-2.5 lg:px-5 lg:py-3">
          <Link href="/" className="header-item flex items-center gap-2">
            <Image src="/logo-icon.svg" alt="" width={32} height={32} priority />
            <span className="font-readex text-lg font-medium tracking-wide">
              hussendev
            </span>
          </Link>

          <ul className="absolute start-1/2 hidden -translate-x-1/2 gap-6 lg:flex xl:gap-8">
            {navItems.map(({ href, key }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : href.startsWith("/#")
                    ? pathname === "/"
                    : pathname.startsWith(href);

              return (
                <li key={key} className="header-item">
                  <Link
                    href={href}
                    className={cn(
                      "text-sm font-medium transition-opacity duration-300 hover:opacity-100",
                      active ? "opacity-100" : "opacity-65",
                    )}
                  >
                    {t(key)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label={mobileOpen ? t("closeNavigation") : t("openNavigation")}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="header-item flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-black/5 lg:hidden dark:hover:bg-white/10"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <div className="header-item hidden items-center gap-6 lg:flex xl:gap-8">
            <LanguageSwitcher />
            <QuickLinksMenu tone={heroGlass ? "light" : "dark"} />
          </div>
        </header>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={cn(
            "overflow-hidden border-t transition-[max-height,opacity] duration-300 lg:hidden",
            heroGlass ? "border-white/10" : "border-primary/8",
            mobileOpen
              ? "pointer-events-auto max-h-[28rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0",
          )}
        >
          <ul className="flex flex-col gap-1 p-3">
            {navItems.map(({ href, key }) => (
              <li key={key}>
                <Link
                  href={href}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                    heroGlass ? "hover:bg-white/10" : "hover:bg-primary/5",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
            <li
              className={cn(
                "border-t pt-3",
                heroGlass ? "border-white/10" : "border-primary/8",
              )}
            >
              <LanguageSwitcher
                className={cn("justify-center text-base", !heroGlass && "text-primary")}
              />
            </li>
            <li className="px-1 pb-1 pt-2">
              <QuickLinksMenu
                tone={heroGlass ? "light" : "dark"}
                className={cn(
                  "w-full [&>button]:w-full [&>button]:justify-center",
                  !heroGlass && "[&>button]:text-primary",
                )}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
