import * as React from "react";
import { cn } from "@/lib/utils/cn";

type BadgeTone = "cyan" | "mint" | "amber" | "purple" | "rose" | "neutral";

export function INEMABadge({
  className,
  tone = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  const tones: Record<BadgeTone, string> = {
    cyan: "border-inema-primary/50 text-inema-primary",
    mint: "border-inema-mint/50 text-inema-mint",
    amber: "border-inema-amber/50 text-inema-amber",
    purple: "border-inema-purple/50 text-inema-purple",
    rose: "border-inema-rose/50 text-inema-rose",
    neutral: "border-inema-border text-inema-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-md border bg-inema-panel-high px-2.5 text-xs font-bold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
