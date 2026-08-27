# Novo App INEMA

Use este checklist para criar outro aplicativo a partir do INEMA App Standard.

## 1. Duplicar base

```bash
cp -r ia-como-servico novo-app-inema
cd novo-app-inema
```

## 2. Atualizar marca

Arquivos:

```text
config/brand.ts
README.md
app/layout.tsx
```

## 3. Atualizar módulos

Arquivo:

```text
config/modules.ts
```

Defina:

- rotas principais;
- módulos;
- ícones;
- entregas;
- arquivos de conteúdo.

## 4. Atualizar conteúdo

Crie ou substitua:

```text
content/
```

Não espalhe textos longos dentro dos componentes.

## 5. Atualizar dados

Arquivos:

```text
types/
lib/workspace/default-state.ts
lib/workspace/scoring.ts
supabase/migrations/
```

## 6. Configurar Supabase

1. Criar projeto.
2. Aplicar migrations.
3. Ativar Auth.
4. Configurar `.env.local`.
5. Testar RLS.

## 7. Configurar Vercel

1. Criar projeto na Vercel.
2. Conectar GitHub.
3. Configurar variáveis.
4. Fazer deploy.

## 8. Checklist antes de publicar

- build passa;
- rotas principais funcionam;
- dados persistem;
- componentes usam tokens;
- sem secrets no código;
- README atualizado;
- migrations versionadas;
- responsivo em mobile e desktop.

