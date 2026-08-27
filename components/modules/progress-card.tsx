import { INEMACard } from "@/components/inema/card";
import { INEMAProgress } from "@/components/inema/progress";

export function ProgressCard({
  value,
  nextStep,
}: {
  value: number;
  nextStep: string;
}) {
  return (
    <INEMACard className="border-inema-primary/40">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase text-inema-primary">Progresso geral</p>
          <h2 className="mt-2 text-4xl font-black text-inema-text">{value}%</h2>
        </div>
        <span className="rounded-lg border border-inema-border bg-inema-surface px-3 py-2 text-xs font-bold text-inema-muted">
          MVP local
        </span>
      </div>
      <INEMAProgress value={value} className="mt-5" />
      <p className="mt-5 text-sm font-bold text-inema-soft">Seu próximo passo</p>
      <p className="mt-1 text-sm leading-6 text-inema-muted">{nextStep}</p>
    </INEMACard>
  );
}
