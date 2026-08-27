import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function INEMATextarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-lg border border-inema-border bg-inema-surface px-3 py-3 text-sm text-inema-text",
        "placeholder:text-inema-dim focus:border-inema-cyan focus:outline-none focus:ring-2 focus:ring-inema-cyan/20",
        className,
      )}
      {...props}
    />
  );
}

