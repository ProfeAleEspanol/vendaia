import Link from "next/link";
import type { WorkshopModule } from "@/config/modules";
import { INEMABadge } from "@/components/inema/badge";
import { INEMACard } from "@/components/inema/card";

export function ModuleCard({ module }: { module: WorkshopModule }) {
  const Icon = module.icon;
  return (
    <Link href={`/modules/${module.slug}`}>
      <INEMACard className="min-h-64 transition hover:border-inema-primary">
        <div className="flex items-start justify-between gap-4">
          <INEMABadge tone="cyan">{module.eyebrow}</INEMABadge>
          <Icon className="h-6 w-6 text-inema-primary" />
        </div>
        <h3 className="mt-10 text-xl font-black text-inema-text">{module.title}</h3>
        <p className="mt-3 text-sm leading-6 text-inema-muted">{module.description}</p>
        <p className="mt-5 text-xs font-extrabold uppercase text-inema-amber">{module.outcome}</p>
      </INEMACard>
    </Link>
  );
}
