import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "line" | "gradient" | "dots";
}

export function SectionDivider({ className, variant = "line" }: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div className={cn("w-full py-1", className)}>
        <div className="container-premium">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("w-full py-4 flex justify-center gap-2", className)}>
        <span className="w-1.5 h-1.5 rounded-full bg-border" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-border" />
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="container-premium">
        <div className="h-px bg-border" />
      </div>
    </div>
  );
}
