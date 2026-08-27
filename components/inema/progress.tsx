import { cn } from "@/lib/utils/cn";

export function INEMAProgress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn("h-2 overflow-hidden rounded-full bg-inema-surface", className)}
      aria-label={`Progresso ${safeValue}%`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
    >
      <div
        className="h-full rounded-full bg-inema-cyan transition-all"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}

