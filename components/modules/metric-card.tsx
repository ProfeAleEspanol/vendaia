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
    <INEMACard className="min-h-32">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12.5px] font-medium text-inema-muted">{label}</p>
          <p className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-inema-text">{value}</p>
        </div>
        <Icon className="h-5 w-5 text-inema-accent" />
      </div>
      <p className="mt-3 text-[12.5px] leading-5 text-inema-muted">{helper}</p>
    </INEMACard>
  );
}
