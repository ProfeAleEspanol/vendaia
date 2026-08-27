import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function INEMATable({
  className,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto rounded-inema border border-inema-border">
      <table
        className={cn(
          "min-w-full divide-y divide-inema-border bg-inema-panel text-sm",
          className,
        )}
        {...props}
      />
    </div>
  );
}

