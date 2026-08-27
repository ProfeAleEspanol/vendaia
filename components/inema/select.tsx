import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function INEMASelect({
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "min-h-11 w-full rounded-lg border border-inema-border bg-inema-surface px-3 text-sm text-inema-text",
        "focus:border-inema-cyan focus:outline-none focus:ring-2 focus:ring-inema-cyan/20",
        className,
      )}
      {...props}
    />
  );
}

