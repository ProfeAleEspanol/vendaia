import type { LucideIcon } from "lucide-react";
import { INEMACard } from "@/components/inema/card";

export function MetricCard({
  label,
  value,
  helper,
  icon: Icon,
}: {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
}) {
  return (
    <INEMACard className="min-h-36">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-inema-muted">{label}</p>
          <p className="mt-4 text-3xl font-black text-inema-text">{value}</p>
        </div>
        <Icon className="h-6 w-6 text-inema-primary" />
      </div>
      <p className="mt-4 text-sm leading-6 text-inema-muted">{helper}</p>
    </INEMACard>
  );
}
