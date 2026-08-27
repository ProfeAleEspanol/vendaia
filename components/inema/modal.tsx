import * as React from "react";
import { INEMAButton } from "@/components/inema/button";

export function INEMAModal({
  title,
  description,
  open,
  onClose,
  children,
}: {
  title: string;
  description?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
      <div className="w-full max-w-xl rounded-inema border border-inema-border bg-inema-panel p-5 shadow-panel">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-inema-text">{title}</h2>
            {description ? <p className="mt-1 text-sm text-inema-muted">{description}</p> : null}
          </div>
          <INEMAButton variant="ghost" onClick={onClose}>
            Fechar
          </INEMAButton>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

