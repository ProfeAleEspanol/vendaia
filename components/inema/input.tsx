import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function INEMAInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded-lg border border-inema-border bg-inema-surface px-3 text-sm text-inema-text",
        "placeholder:text-inema-dim focus:border-inema-primary focus:outline-none focus:ring-2 focus:ring-inema-primary/20",
        className,
      )}
      {...props}
    />
  );
}
