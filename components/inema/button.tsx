import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export type INEMAButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-inema-accent text-inema-accentInk hover:bg-inema-accentStrong",
  secondary: "border-inema-border bg-transparent text-inema-muted hover:border-inema-borderStrong hover:text-inema-text",
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
        "inline-flex min-h-9 items-center justify-center rounded-[8px] border px-3.5 text-[12.5px] font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-inema-accent/70 focus:ring-offset-2 focus:ring-offset-inema-bg",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
