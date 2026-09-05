"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div
      aria-label="Language selector"
      className={cn(
        "flex items-center gap-2 text-lg font-light leading-none",
        className,
      )}
      dir="ltr"
    >
      <Link
        href={pathname}
        locale="ar"
        aria-label="Switch language to Arabic"
        className={cn(
          "transition-opacity duration-300 hover:opacity-100",
          locale === "ar" ? "opacity-100" : "opacity-70",
        )}
      >
        Ar
      </Link>
      <span aria-hidden className="opacity-70">
        |
      </span>
      <Link
        href={pathname}
        locale="en"
        aria-label="Switch language to English"
        className={cn(
          "transition-opacity duration-300 hover:opacity-100",
          locale === "en" ? "opacity-100" : "opacity-70",
        )}
      >
        EN
      </Link>
    </div>
  );
}
