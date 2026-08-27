import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export type INEMAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "border-inema-cyan bg-inema-cyan text-[#071018] hover:bg-[#6de0ff]",
  secondary: "border-inema-border bg-inema-panel text-inema-soft hover:border-inema-cyan",
  ghost: "border-transparent bg-transparent text-inema-muted hover:text-inema-text",
  danger: "border-inema-rose bg-inema-rose text-white hover:bg-[#ff7890]",
};

export function INEMAButton({
  className,
  variant = "primary",
  type = "button",
  ...props
}: INEMAButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-10 items-center justify-center rounded-lg border px-4 text-sm font-bold transition",
        "focus:outline-none focus:ring-2 focus:ring-inema-cyan/70 focus:ring-offset-2 focus:ring-offset-inema-bg",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

