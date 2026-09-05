import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassPanel({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass", className)} {...props} />;
}

export function GlassPanelDark({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("glass-dark", className)} {...props} />;
}
