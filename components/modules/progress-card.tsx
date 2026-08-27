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
    <INEMACard className="border-inema-border">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-inema-dim">Progresso geral</p>
          <h2 className="mt-2 text-[26px] font-semibold text-inema-text">{value}%</h2>
        </div>
        <span className="rounded-[5px] border border-inema-border px-2 py-1 font-mono text-[11px] text-inema-muted">
          MVP local
        </span>
      </div>
      <INEMAProgress value={value} className="mt-5" />
      <p className="mt-5 text-[12.5px] font-semibold text-inema-text">Seu próximo passo</p>
      <p className="mt-1 text-[12.5px] leading-5 text-inema-muted">{nextStep}</p>
    </INEMACard>
  );
}
