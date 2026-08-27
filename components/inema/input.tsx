import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function INEMAInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-10 w-full rounded-[8px] border border-inema-border bg-inema-bg px-3 text-[13.5px] text-inema-text",
        "placeholder:text-inema-dim focus:border-inema-accent focus:outline-none focus:ring-2 focus:ring-inema-accent/15",
        className,
      )}
      {...props}
    />
  );
}
