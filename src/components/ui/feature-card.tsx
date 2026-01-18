import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  result?: string;
  className?: string;
  variant?: "default" | "problem" | "solution";
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon: Icon, title, description, result, className, variant = "default" }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl",
          {
            "bg-card border border-border hover:border-primary/30 hover:-translate-y-1":
              variant === "default",
            "bg-destructive/5 border border-destructive/20 hover:border-destructive/40":
              variant === "problem",
            "bg-cta/5 border border-cta/20 hover:border-cta/40 hover:-translate-y-1":
              variant === "solution",
          },
          className
        )}
      >
        <div
          className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", {
            "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors":
              variant === "default",
            "bg-destructive/10 text-destructive": variant === "problem",
            "bg-cta/10 text-cta group-hover:bg-cta group-hover:text-cta-foreground transition-colors":
              variant === "solution",
          })}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        {result && (
          <p className="mt-3 text-sm font-semibold text-cta">→ {result}</p>
        )}
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
