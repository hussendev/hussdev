import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline";
type ButtonSize = "default" | "lg" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-white text-primary hover:bg-secondary border border-transparent shadow-sm",
  secondary:
    "bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent",
  ghost: "bg-transparent hover:bg-white/10 text-inherit border border-transparent",
  outline:
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-5 text-sm",
  lg: "h-12 px-8 text-sm",
  sm: "h-9 px-4 text-xs",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";
