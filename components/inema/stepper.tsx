import { cn } from "@/lib/utils/cn";

export function INEMAStepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step}
          className={cn(
            "rounded-lg border px-3 py-2 text-sm font-bold",
            index <= current
              ? "border-inema-cyan text-inema-cyan"
              : "border-inema-border text-inema-muted",
          )}
        >
          <span className="mr-2 text-inema-dim">{String(index + 1).padStart(2, "0")}</span>
          {step}
        </li>
      ))}
    </ol>
  );
}

