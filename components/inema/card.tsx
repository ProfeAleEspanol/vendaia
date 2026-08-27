import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function INEMACard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "rounded-inema border border-inema-border bg-inema-panel p-[15px] shadow-panel transition-colors hover:border-inema-borderStrong",
        className,
      )}
      {...props}
    />
  );
}
