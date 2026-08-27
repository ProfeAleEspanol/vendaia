import type { ReactNode } from "react";
import { INEMACard } from "@/components/inema/card";

export function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <INEMACard>
      <div className="mb-5">
        <h2 className="text-xl font-extrabold text-inema-text">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-inema-muted">{description}</p>
      </div>
      <div className="grid gap-4">{children}</div>
    </INEMACard>
  );
}

