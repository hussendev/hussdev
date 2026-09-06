import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef, type SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  tone?: "default" | "onDark";
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, placeholder, tone = "default", ...props }, ref) => (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          "flex h-12 w-full appearance-none rounded-lg border px-3 pe-10 text-sm shadow-none outline-none transition-colors focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50",
          tone === "onDark"
            ? "border-transparent bg-black/40 text-white backdrop-blur-md scheme-dark focus-visible:border-transparent focus-visible:ring-white/15 [&>option]:bg-primary [&>option]:text-white"
            : "border-input bg-white/90 text-foreground focus-visible:border-primary focus-visible:ring-ring/30",
          className,
        )}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className={cn(
          "pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2",
          tone === "onDark" ? "text-white/70" : "text-muted-foreground",
        )}
      />
    </div>
  ),
);

Select.displayName = "Select";
