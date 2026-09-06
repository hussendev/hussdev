"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { scrollToHashWithRetry } from "@/lib/scroll";
import { ComponentProps } from "react";

type NavHashLinkProps = ComponentProps<typeof Link>;

export function NavHashLink({ href, onClick, ...props }: NavHashLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : "";
  const hashIndex = hrefString.indexOf("#");
  const hash = hashIndex >= 0 ? hrefString.slice(hashIndex) : "";
  const basePath = hashIndex >= 0 ? hrefString.slice(0, hashIndex) || "/" : hrefString;

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !hash) return;

        const onHome = pathname === "/" || pathname === basePath;

        if (onHome) {
          event.preventDefault();
          window.history.pushState(null, "", hash);
          scrollToHashWithRetry(hash);
        }
      }}
    />
  );
}
