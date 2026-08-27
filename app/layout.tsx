import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA como Serviço | INEMA",
  description:
    "Aplicação do Ecossistema INEMA para transformar conhecimento em IA em ofertas, propostas e projetos comercializáveis.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
