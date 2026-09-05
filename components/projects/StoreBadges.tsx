import { cn } from "@/lib/utils";

interface StoreBadgesProps {
  appStore?: string;
  playStore?: string;
  appStoreLabel: string;
  playStoreLabel: string;
  className?: string;
  tone?: "light" | "dark";
}

export function StoreBadges({
  appStore,
  playStore,
  appStoreLabel,
  playStoreLabel,
  className,
  tone = "light",
}: StoreBadgesProps) {
  if (!appStore && !playStore) return null;

  const base =
    tone === "light"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
      : "border-border bg-white text-primary hover:bg-secondary/80";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {appStore ? (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={appStoreLabel}
          className={cn(
            "inline-flex min-w-[9.5rem] items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors",
            base,
          )}
        >
          <AppleIcon />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wide opacity-70">
              Download on the
            </span>
            App Store
          </span>
        </a>
      ) : null}
      {playStore ? (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={playStoreLabel}
          className={cn(
            "inline-flex min-w-[9.5rem] items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors",
            base,
          )}
        >
          <PlayIcon />
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wide opacity-70">
              Get it on
            </span>
            Google Play
          </span>
        </a>
      ) : null}
    </div>
  );
}

function AppleIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5 shrink-0 fill-current">
      <path d="M16.365 1.43c0 1.14-.417 2.064-1.249 2.772-.832.708-1.883 1.062-3.153 1.062-.12-1.098.465-2.098 1.175-2.808.71-.71 1.902-1.248 3.227-1.026zm3.2 17.07c-.768.892-1.678 1.338-2.73 1.338-1.052 0-1.314-.525-2.455-.525-1.17 0-1.432.525-2.503.525-1.052 0-1.99-.473-2.758-1.365C4.412 16.62 3.5 13.905 3.5 11.4c0-2.925 1.9-4.485 3.768-4.485 1.11 0 2.025.577 2.715.577.66 0 1.694-.605 2.865-.605 1.11 0 2.145.525 2.925 1.425-2.565 1.425-2.145 5.13.96 6.15-.36 1.05-.825 2.025-1.425 2.925z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5 shrink-0 fill-current">
      <path d="M3.6 1.8c-.3.2-.5.5-.5.9v18.6c0 .4.2.7.5.9.3.2.7.2 1 .1l16.8-9.3c.3-.2.5-.5.5-.9s-.2-.7-.5-.9L4.6 1.7c-.3-.2-.7-.2-1 0z" />
    </svg>
  );
}
