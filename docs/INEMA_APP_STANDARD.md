# INEMA App Standard

## Objetivo

O INEMA App Standard é a base reutilizável para aplicativos do Ecossistema INEMA.

Este projeto, **IA como Serviço**, é a primeira implementação do padrão.

## Princípios

- aplicação funcional antes de landing page;
- conteúdo centralizado em `content/`;
- componentes reutilizáveis;
- design limpo, premium e profissional;
- dados do usuário isolados por `user_id`;
- Supabase com RLS;
- camadas separadas para UI, lógica, dados e IA;
- preparado para deploy na Vercel.

## Layout

O padrão usa:

- `AppShell`;
- sidebar;
- área principal;
- dashboard;
- páginas de módulos;
- rota de autenticação;
- área futura de perfil/configurações/ajuda.

## Componentes

Componentes base:

- `INEMAButton`;
- `INEMAInput`;
- `INEMATextarea`;
- `INEMACard`;
- `INEMABadge`;
- `INEMASelect`;
- `INEMATable`;
- `INEMAModal`;
- `INEMAProgress`;
- `INEMAStepper`;
- `ConfirmDialog`;
- `EmptyState`;
- `SaveIndicator`.

Componentes de layout:

- `AppShell`;
- `PageHeader`;
- `FormSection`.

Componentes de módulo:

- `MetricCard`;
- `ProgressCard`;
- `ModuleCard`.

## Marca

Tokens centrais ficam em:

```text
config/brand.ts
tailwind.config.ts
app/globals.css
```

Evitar cores espalhadas diretamente pelos componentes.

## Conteúdo

Conteúdo do workshop fica em:

```text
content/workshop/
```

Componentes devem consumir configuração e dados estruturados sempre que possível.

## Dados

Migrações ficam em:

```text
supabase/migrations/
```

Toda tabela com dados de usuário deve ter:

- `id`;
- `user_id`;
- `created_at`;
- `updated_at`;
- RLS habilitado;
- policies baseadas em `auth.uid() = user_id`.

## IA

A camada de IA fica em:

```text
lib/ai/
```

O app não deve acoplar a experiência a um único fornecedor.

## Criando um novo módulo

1. Adicione o módulo em `config/modules.ts`.
2. Crie o conteúdo em `content/workshop/` ou outro diretório de conteúdo.
3. Adicione tipos em `types/`.
4. Adicione estado padrão em `lib/workspace/default-state.ts`.
5. Renderize a experiência em `components/modules/module-client.tsx` ou extraia para componente próprio.
6. Crie tabelas/migrations se houver persistência Supabase.

## Evolução recomendada

1. Substituir persistência local por Supabase.
2. Implementar autenticação real.
3. Criar exportação PDF de propostas.
4. Conectar provedores de IA.
5. Criar permissões para membros INEMA.PRO, INEMA.VIP, administradores e instrutores.

