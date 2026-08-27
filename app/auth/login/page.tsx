import Link from "next/link";
import { LogIn } from "lucide-react";
import { brand } from "@/config/brand";
import { INEMAButton } from "@/components/inema/button";
import { INEMACard } from "@/components/inema/card";
import { INEMAInput } from "@/components/inema/input";

export default function LoginPage() {
  const supabaseEnabled = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  return (
    <main className="inema-grid grid min-h-screen place-items-center p-4">
      <INEMACard className="w-full max-w-md">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-inema-accent">{brand.productLine}</p>
        <h1 className="mt-2 text-[24px] font-semibold text-inema-text">{brand.appName}</h1>
        <p className="mt-2 text-[13px] leading-6 text-inema-muted">
          Autenticação Supabase preparada. Enquanto as variáveis não estiverem configuradas, use o modo local pelo dashboard.
        </p>
        <form className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-bold text-inema-soft">
            E-mail
            <INEMAInput type="email" placeholder="voce@empresa.com" disabled={!supabaseEnabled} />
          </label>
          <label className="grid gap-2 text-sm font-bold text-inema-soft">
            Senha
            <INEMAInput type="password" placeholder="********" disabled={!supabaseEnabled} />
          </label>
          <INEMAButton disabled={!supabaseEnabled} type="submit" className="gap-2">
            <LogIn className="h-4 w-4" />
            Entrar
          </INEMAButton>
        </form>
        {!supabaseEnabled ? (
          <Link href="/dashboard" className="mt-4 block">
            <INEMAButton variant="secondary" className="w-full">
              Entrar no modo local
            </INEMAButton>
          </Link>
        ) : null}
      </INEMACard>
    </main>
  );
}
