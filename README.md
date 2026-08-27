# IA como Serviço

Aplicação do Ecossistema INEMA para ajudar profissionais a transformar conhecimentos em IA em ofertas, propostas e projetos comercializáveis.

Este repositório também inaugura o **INEMA App Standard**, uma base reutilizável para futuros aplicativos, workshops, diagnósticos, cursos, ferramentas e sistemas internos do INEMA.

## Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Supabase Auth e Database
- Vercel
- GitHub

## Estado do MVP

O MVP já entrega uma experiência funcional em modo local:

- dashboard;
- progresso geral;
- mapa de habilidades;
- escolha de nicho;
- diagnóstico empresarial;
- cardápio de serviços;
- construtor de oferta;
- precificação;
- escada de serviços;
- roteiro de reunião;
- proposta comercial;
- pipeline dos primeiros 20 clientes;
- checklist de implantação;
- recorrência;
- persistência local com `localStorage`.

Supabase já está preparado por arquitetura, client helpers, `.env.example` e migration versionada com RLS.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abra:

```text
http://localhost:3000
```

## Variáveis

Crie `.env.local` com base em `.env.example`.

Variáveis públicas:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Não coloque service role keys ou secrets no código.

## Supabase

1. Crie um projeto Supabase.
2. Configure as variáveis públicas.
3. Rode a migration em `supabase/migrations`.
4. Ative autenticação por e-mail.
5. Evolua a persistência de `localStorage` para as tabelas versionadas.

## Deploy

O projeto é compatível com Vercel.

Fluxo recomendado:

```text
GitHub -> Vercel -> Supabase
```

## Estrutura

```text
app/                  Rotas Next.js
components/           Componentes do INEMA App Standard
config/               Marca, navegação e módulos
content/workshop/     Conteúdo centralizado do workshop
docs/                 Documentação técnica e de produto
lib/                  Supabase, IA, workspace e utilidades
public/               Assets públicos
supabase/migrations/  Banco e RLS
types/                Tipos compartilhados
```

## INEMA App Standard

Leia:

```text
docs/INEMA_APP_STANDARD.md
docs/NEW_INEMA_APP.md
```

