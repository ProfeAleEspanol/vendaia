"use client";

import Link from "next/link";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  ClipboardCheck,
  Handshake,
  Network,
  Target,
  Users,
} from "lucide-react";
import { workshopModules } from "@/config/modules";
import { INEMAButton } from "@/components/inema/button";
import { INEMACard } from "@/components/inema/card";
import { SaveIndicator } from "@/components/inema/save-indicator";
import { PageHeader } from "@/components/layout/page-header";
import { ModuleCard } from "@/components/modules/module-card";
import { MetricCard } from "@/components/modules/metric-card";
import { ProgressCard } from "@/components/modules/progress-card";
import { useWorkspaceState } from "@/lib/workspace/use-workspace-state";
import {
  getMonthlyCost,
  getMrr,
  getNextStep,
  getPricingScenarios,
  getWorkspaceProgress,
} from "@/lib/workspace/scoring";

export function DashboardClient() {
  const { state, savedAt } = useWorkspaceState();
  const progress = getWorkspaceProgress(state);
  const nextStep = getNextStep(state);
  const pricing = getPricingScenarios(state.pricing);
  const mrr = getMrr(state.recurrence);
  const monthlyCost = getMonthlyCost(state.recurrence);
  const activeProjects = state.implementation.filter((task) => !task.done).length;

  return (
    <div className="grid gap-8">
      <PageHeader
        eyebrow="IA como Serviço"
        title="Transforme conhecimento em oferta, proposta e cliente."
        description="Este é o painel de trabalho do workshop: preencha os módulos, salve seu progresso e construa seus materiais comerciais dentro do app."
        actions={<SaveIndicator savedAt={savedAt} />}
      />

      <section className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
        <ProgressCard value={progress} nextStep={nextStep} />
        <INEMACard className="grid content-between gap-6 border-inema-amber/40">
          <div>
            <p className="text-sm font-extrabold uppercase text-inema-amber">Continue de onde parou</p>
            <h2 className="mt-3 text-2xl font-black text-inema-text">{nextStep}</h2>
            <p className="mt-3 text-sm leading-6 text-inema-muted">
              O app salva automaticamente os dados deste navegador. Ao conectar Supabase, estes registros passam para a conta do usuário.
            </p>
          </div>
          <Link href="/modules/offer">
            <INEMAButton className="w-full">Continuar jornada</INEMAButton>
          </Link>
        </INEMACard>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Oferta principal"
          value={state.offer.solution || "Pendente"}
          helper={state.offer.clientType ? `Para ${state.offer.clientType}` : "Construa no módulo de oferta."}
          icon={BriefcaseBusiness}
        />
        <MetricCard
          label="Nicho escolhido"
          value={state.niches[0]?.sector || "Sem nicho"}
          helper="Compare nichos por acesso, dor, urgência, ticket e recorrência."
          icon={Target}
        />
        <MetricCard
          label="Propostas criadas"
          value={state.proposal.title ? "1" : "0"}
          helper={`Valor recomendado: R$ ${pricing.recommended.toLocaleString("pt-BR")}`}
          icon={ClipboardCheck}
        />
        <MetricCard
          label="Potenciais clientes"
          value={`${state.prospects.length}/20`}
          helper="Meta inicial do workshop para criar conversas reais."
          icon={Users}
        />
        <MetricCard
          label="Clientes ativos"
          value={String(state.recurrence.length)}
          helper="Contratos recorrentes registrados."
          icon={Handshake}
        />
        <MetricCard
          label="MRR previsto"
          value={`R$ ${mrr.toLocaleString("pt-BR")}`}
          helper={`Custo mensal estimado: R$ ${monthlyCost.toLocaleString("pt-BR")}`}
          icon={Network}
        />
        <MetricCard
          label="Projetos ativos"
          value={String(activeProjects)}
          helper="Tarefas de implantação ainda abertas."
          icon={ClipboardCheck}
        />
        <MetricCard
          label="Receita anual"
          value={`R$ ${pricing.annualRecurring.toLocaleString("pt-BR")}`}
          helper="Projeção apenas da recorrência cadastrada."
          icon={BadgeDollarSign}
        />
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold uppercase text-inema-cyan">Módulos</p>
            <h2 className="mt-2 text-3xl font-black text-inema-text">Sistema guiado de construção</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workshopModules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </section>
    </div>
  );
}

