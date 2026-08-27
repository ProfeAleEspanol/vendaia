import Link from "next/link";
import type { WorkshopModule } from "@/config/modules";
import { INEMABadge } from "@/components/inema/badge";
import { INEMACard } from "@/components/inema/card";

export function ModuleCard({ module }: { module: WorkshopModule }) {
  const Icon = module.icon;
  return (
    <Link href={`/modules/${module.slug}`}>
      <INEMACard className="min-h-40 transition hover:border-inema-accent hover:bg-inema-panelHigh">
        <div className="flex items-start justify-between gap-4">
          <INEMABadge tone="cyan">{module.eyebrow}</INEMABadge>
          <Icon className="h-5 w-5 text-inema-accent" />
        </div>
        <h3 className="mt-6 text-sm font-semibold leading-snug text-inema-text">{module.title}</h3>
        <p className="mt-2 text-[12.5px] leading-5 text-inema-muted">{module.description}</p>
        <p className="mt-4 font-mono text-[11px] font-semibold text-inema-accent">{module.outcome}</p>
      </INEMACard>
    </Link>
  );
}
