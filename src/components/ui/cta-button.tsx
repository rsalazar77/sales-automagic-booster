import * as React from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "hero";
  size?: "default" | "lg" | "xl";
  children: React.ReactNode;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-bold uppercase tracking-wide transition-all duration-300 transform",
          "focus:outline-none focus:ring-4 focus:ring-cta/30",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-cta text-cta-foreground hover:bg-cta-hover hover:scale-105 hover:shadow-cta-glow active:scale-100 shadow-lg":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "bg-gradient-to-r from-cta to-cta-hover text-cta-foreground hover:scale-105 hover:shadow-cta-glow-lg active:scale-100 shadow-xl animate-pulse-subtle":
              variant === "hero",
          },
          {
            "px-6 py-3 text-sm rounded-lg": size === "default",
            "px-8 py-4 text-base rounded-xl": size === "lg",
            "px-10 py-5 text-lg rounded-2xl": size === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton };
