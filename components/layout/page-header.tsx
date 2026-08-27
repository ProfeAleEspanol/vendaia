import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="border-b border-inema-border pb-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-inema-dim">{eyebrow}</p>
        ) : null}
        <h1 className="mt-1 max-w-4xl text-[21px] font-semibold leading-tight tracking-[-0.01em] text-inema-text md:text-[26px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 max-w-3xl text-[13px] leading-6 text-inema-muted">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </header>
  );
}
