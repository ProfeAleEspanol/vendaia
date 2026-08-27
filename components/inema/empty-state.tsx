import type { LucideIcon } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { INEMACard } from "@/components/inema/card";

export function EmptyState({
  title,
  description,
  icon: Icon = CircleDashed,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <INEMACard className="grid place-items-center py-12 text-center">
      <Icon className="h-10 w-10 text-inema-dim" />
      <h3 className="mt-4 text-lg font-extrabold text-inema-text">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-inema-muted">{description}</p>
    </INEMACard>
  );
}

