import { CheckCircle2 } from "lucide-react";

export function SaveIndicator({ savedAt }: { savedAt: string | null }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-[8px] border border-inema-border bg-inema-panel px-3 py-2 text-[12.5px] font-medium text-inema-muted">
      <CheckCircle2 className="h-4 w-4 text-inema-mint" />
      {savedAt ? `Salvo ${new Date(savedAt).toLocaleTimeString("pt-BR")}` : "Pronto para salvar"}
    </div>
  );
}
