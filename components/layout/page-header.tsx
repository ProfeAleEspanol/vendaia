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
    <header className="rounded-inema border border-inema-border bg-gradient-to-b from-inema-surface to-inema-bg p-6 md:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs font-black uppercase tracking-[0.25em] text-inema-primary">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-none tracking-tight text-inema-text md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-7 text-inema-muted">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>
    </header>
  );
}
