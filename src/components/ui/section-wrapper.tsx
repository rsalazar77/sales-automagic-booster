import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "alternate" | "dark" | "gradient";
  id?: string;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, className, variant = "default", id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 md:py-24 px-4",
          {
            "bg-background": variant === "default",
            "bg-section-alternate": variant === "alternate",
            "bg-section-dark text-white": variant === "dark",
            "bg-gradient-to-br from-primary/5 via-background to-cta/5": variant === "gradient",
          },
          className
        )}
      >
        <div className="container mx-auto max-w-6xl">{children}</div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
