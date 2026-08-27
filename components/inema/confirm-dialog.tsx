import { INEMAButton } from "@/components/inema/button";
import { INEMAModal } from "@/components/inema/modal";

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  onConfirm,
  onClose,
}: {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <INEMAModal open={open} title={title} description={description} onClose={onClose}>
      <div className="flex justify-end gap-2">
        <INEMAButton variant="secondary" onClick={onClose}>
          Cancelar
        </INEMAButton>
        <INEMAButton variant="danger" onClick={onConfirm}>
          {confirmLabel}
        </INEMAButton>
      </div>
    </INEMAModal>
  );
}

