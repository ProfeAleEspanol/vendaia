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
      <div className="mb-4">
        <h2 className="text-[15px] font-semibold text-inema-text">{title}</h2>
        <p className="mt-1 text-[12.5px] leading-5 text-inema-muted">{description}</p>
      </div>
      <div className="grid gap-3">{children}</div>
    </INEMACard>
  );
}
