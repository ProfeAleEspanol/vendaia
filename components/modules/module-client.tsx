"use client";

import { Plus, RotateCcw } from "lucide-react";
import { getModuleBySlug } from "@/config/modules";
import { INEMABadge } from "@/components/inema/badge";
import { INEMAButton } from "@/components/inema/button";
import { INEMACard } from "@/components/inema/card";
import { INEMAInput } from "@/components/inema/input";
import { INEMAProgress } from "@/components/inema/progress";
import { INEMASelect } from "@/components/inema/select";
import { SaveIndicator } from "@/components/inema/save-indicator";
import { INEMATextarea } from "@/components/inema/textarea";
import { FormSection } from "@/components/forms/form-section";
import { PageHeader } from "@/components/layout/page-header";
import { useWorkspaceState } from "@/lib/workspace/use-workspace-state";
import {
  classifyOpportunity,
  getMrr,
  getNicheScore,
  getOpportunityScore,
  getPricingScenarios,
} from "@/lib/workspace/scoring";
import type {
  Meeting,
  NicheCandidate,
  Offer,
  Pricing,
  Proposal,
  Prospect,
  ServiceTemplate,
  SkillMap,
} from "@/types/workspace";

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function TextField({ label, value, onChange, placeholder }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-inema-soft">
      {label}
      <INEMAInput value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-inema-soft">
      {label}
      <INEMAInput
        type="number"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange, placeholder }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-inema-soft">
      {label}
      <INEMATextarea value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function ScoreInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2 text-xs font-bold uppercase text-inema-muted">
      <span className="flex justify-between">
        {label}
        <strong className="text-inema-accent">{value}</strong>
      </span>
      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-inema-accent"
      />
    </label>
  );
}

export function ModuleClient({ slug }: { slug: string }) {
  const { state, setState, savedAt, reset } = useWorkspaceState();
  const module = getModuleBySlug(slug);

  if (!module) {
    return null;
  }

  const Icon = module.icon;

  function updateSkill<K extends keyof SkillMap>(field: K, value: SkillMap[K]) {
    setState((current) => ({
      ...current,
      skillMap: { ...current.skillMap, [field]: value },
    }));
  }

  function updateOffer<K extends keyof Offer>(field: K, value: Offer[K]) {
    setState((current) => ({
      ...current,
      offer: { ...current.offer, [field]: value },
    }));
  }

  function updatePricing<K extends keyof Pricing>(field: K, value: Pricing[K]) {
    setState((current) => ({
      ...current,
      pricing: { ...current.pricing, [field]: value },
    }));
  }

  function updateMeeting<K extends keyof Meeting>(field: K, value: Meeting[K]) {
    setState((current) => ({
      ...current,
      meeting: { ...current.meeting, [field]: value },
    }));
  }

  function updateProposal<K extends keyof Proposal>(field: K, value: Proposal[K]) {
    setState((current) => ({
      ...current,
      proposal: { ...current.proposal, [field]: value },
    }));
  }

  function updateNiche(index: number, next: Partial<NicheCandidate>) {
    setState((current) => ({
      ...current,
      niches: current.niches.map((niche, nicheIndex) =>
        nicheIndex === index ? { ...niche, ...next } : niche,
      ),
    }));
  }

  function updateService(index: number, next: Partial<ServiceTemplate>) {
    setState((current) => ({
      ...current,
      services: current.services.map((service, serviceIndex) =>
        serviceIndex === index ? { ...service, ...next } : service,
      ),
    }));
  }

  function updateProspect(index: number, next: Partial<Prospect>) {
    setState((current) => ({
      ...current,
      prospects: current.prospects.map((prospect, prospectIndex) =>
        prospectIndex === index ? { ...prospect, ...next } : prospect,
      ),
    }));
  }

  const generatedOffer = `Eu ajudo ${state.offer.clientType || "[cliente]"} a ${state.offer.result || "[resultado]"} através de ${state.offer.solution || "[solução]"}.`;
  const pitch = `${generatedOffer} Normalmente começo com um diagnóstico para identificar oportunidades práticas antes de propor uma implantação.`;
  const pricing = getPricingScenarios(state.pricing);
  const mainNiche = [...state.niches].sort((a, b) => getNicheScore(b) - getNicheScore(a))[0];

  return (
    <div className="grid gap-8">
      <PageHeader
        eyebrow={module.eyebrow}
        title={module.title}
        description={module.description}
        actions={
          <div className="flex flex-wrap gap-2">
            <SaveIndicator savedAt={savedAt} />
            <INEMAButton variant="secondary" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Restaurar demo
            </INEMAButton>
          </div>
        }
      />

      <INEMACard className="flex items-start gap-4 border-inema-accentBg">
        <Icon className="mt-1 h-5 w-5 shrink-0 text-inema-accent" />
        <div>
          <INEMABadge tone="amber">Entrega do módulo</INEMABadge>
          <p className="mt-3 text-[15px] font-semibold text-inema-text">{module.outcome}</p>
        </div>
      </INEMACard>

      {module.slug === "skills" ? (
        <FormSection
          title="Meu Mapa de Habilidades"
          description="Registre o que você já sabe fazer e traduza isso para problemas empresariais."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <TextAreaField label="Ferramentas que domina" value={state.skillMap.tools} onChange={(value) => updateSkill("tools", value)} />
            <TextAreaField label="Conhecimentos" value={state.skillMap.knowledge} onChange={(value) => updateSkill("knowledge", value)} />
            <TextAreaField label="Processos que consegue executar" value={state.skillMap.processes} onChange={(value) => updateSkill("processes", value)} />
            <TextAreaField label="Problemas que consegue resolver" value={state.skillMap.problems} onChange={(value) => updateSkill("problems", value)} />
            <TextAreaField label="Setores que conhece" value={state.skillMap.sectors} onChange={(value) => updateSkill("sectors", value)} />
            <TextAreaField label="Resultados já obtidos" value={state.skillMap.results} onChange={(value) => updateSkill("results", value)} />
          </div>
          <ScoreInput label="Nível de domínio" value={state.skillMap.domainLevel} onChange={(value) => updateSkill("domainLevel", value)} />
        </FormSection>
      ) : null}

      {module.slug === "niches" ? (
        <div className="grid gap-4">
          <INEMACard className="border-inema-amber/40">
            <p className="text-sm font-extrabold uppercase text-inema-amber">Nicho principal sugerido</p>
            <h2 className="mt-2 text-xl font-semibold text-inema-text">{mainNiche?.sector}</h2>
            <p className="mt-2 text-sm text-inema-muted">Score: {mainNiche ? getNicheScore(mainNiche) : 0}/100</p>
          </INEMACard>
          <div className="grid gap-4 lg:grid-cols-3">
            {state.niches.map((niche, index) => (
              <INEMACard key={niche.id}>
                <TextField label="Setor" value={niche.sector} onChange={(value) => updateNiche(index, { sector: value })} />
                <div className="mt-4 grid gap-3">
                  <TextAreaField label="Principais problemas" value={niche.mainProblems} onChange={(value) => updateNiche(index, { mainProblems: value })} />
                  <ScoreInput label="Conhecimento" value={niche.scores.knowledge} onChange={(value) => updateNiche(index, { scores: { ...niche.scores, knowledge: value } })} />
                  <ScoreInput label="Acesso" value={niche.scores.access} onChange={(value) => updateNiche(index, { scores: { ...niche.scores, access: value } })} />
                  <ScoreInput label="Dor" value={niche.scores.pain} onChange={(value) => updateNiche(index, { scores: { ...niche.scores, pain: value } })} />
                  <ScoreInput label="Urgência" value={niche.scores.urgency} onChange={(value) => updateNiche(index, { scores: { ...niche.scores, urgency: value } })} />
                  <ScoreInput label="Ticket" value={niche.scores.ticket} onChange={(value) => updateNiche(index, { scores: { ...niche.scores, ticket: value } })} />
                  <ScoreInput label="Recorrência" value={niche.scores.recurrence} onChange={(value) => updateNiche(index, { scores: { ...niche.scores, recurrence: value } })} />
                </div>
              </INEMACard>
            ))}
          </div>
        </div>
      ) : null}

      {module.slug === "diagnostics" ? (
        <div className="grid gap-4">
          {state.diagnostics.map((opportunity) => {
            const score = getOpportunityScore(opportunity);
            return (
              <INEMACard key={opportunity.id}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <INEMABadge tone={score >= 80 ? "mint" : "amber"}>{classifyOpportunity(score)}</INEMABadge>
                    <h2 className="mt-3 text-lg font-semibold text-inema-text">{opportunity.problem}</h2>
                    <p className="mt-2 text-sm leading-6 text-inema-muted">{opportunity.currentProcess}</p>
                  </div>
                  <div className="min-w-40">
                    <p className="text-sm font-bold text-inema-muted">Score</p>
                    <p className="text-[28px] font-semibold text-inema-accent">{score}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <NumberField label="Frequência" value={opportunity.frequency} onChange={(value) => setState((current) => ({ ...current, diagnostics: current.diagnostics.map((item) => item.id === opportunity.id ? { ...item, frequency: value } : item) }))} />
                  <NumberField label="Horas/mês" value={opportunity.hours} onChange={(value) => setState((current) => ({ ...current, diagnostics: current.diagnostics.map((item) => item.id === opportunity.id ? { ...item, hours: value } : item) }))} />
                  <NumberField label="Custo aproximado" value={opportunity.cost} onChange={(value) => setState((current) => ({ ...current, diagnostics: current.diagnostics.map((item) => item.id === opportunity.id ? { ...item, cost: value } : item) }))} />
                </div>
              </INEMACard>
            );
          })}
        </div>
      ) : null}

      {module.slug === "services" ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {state.services.map((service, index) => (
            <INEMACard key={service.id} className={service.archived ? "opacity-50" : ""}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <INEMABadge tone="cyan">{service.category}</INEMABadge>
                  <h2 className="mt-3 text-lg font-semibold text-inema-text">{service.name}</h2>
                </div>
                <INEMAButton variant="secondary" onClick={() => updateService(index, { archived: !service.archived })}>
                  {service.archived ? "Restaurar" : "Arquivar"}
                </INEMAButton>
              </div>
              <p className="mt-3 text-sm leading-6 text-inema-muted">{service.problem}</p>
              <div className="mt-5 grid gap-3">
                <TextAreaField label="Entregáveis" value={service.deliverables} onChange={(value) => updateService(index, { deliverables: value })} />
                <TextField label="Faixa de preço" value={service.priceRange} onChange={(value) => updateService(index, { priceRange: value })} />
              </div>
            </INEMACard>
          ))}
          <INEMACard className="grid place-items-center text-center">
            <INEMAButton
              variant="secondary"
              className="gap-2"
              onClick={() =>
                setState((current) => ({
                  ...current,
                  services: [
                    ...current.services,
                    {
                      id: `service-${Date.now()}`,
                      name: "Novo serviço",
                      category: "Personalizado",
                      problem: "Descreva o problema.",
                      idealClient: "",
                      promisedResult: "",
                      deliverables: "",
                      complexity: "media",
                      suggestedDeadline: "",
                      recurringPotential: true,
                      priceRange: "",
                      examples: "",
                    },
                  ],
                }))
              }
            >
              <Plus className="h-4 w-4" />
              Criar serviço
            </INEMAButton>
          </INEMACard>
        </div>
      ) : null}

      {module.slug === "offer" ? (
        <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
          <FormSection title="Construtor de oferta" description="Complete os campos para gerar sua frase comercial e pitch.">
            <TextField label="Quem compra?" value={state.offer.clientType} onChange={(value) => updateOffer("clientType", value)} />
            <TextAreaField label="Problema" value={state.offer.problem} onChange={(value) => updateOffer("problem", value)} />
            <TextAreaField label="Resultado" value={state.offer.result} onChange={(value) => updateOffer("result", value)} />
            <TextField label="Solução" value={state.offer.solution} onChange={(value) => updateOffer("solution", value)} />
            <TextAreaField label="Entregáveis" value={state.offer.deliverables} onChange={(value) => updateOffer("deliverables", value)} />
            <TextField label="Prazo" value={state.offer.deadline} onChange={(value) => updateOffer("deadline", value)} />
            <NumberField label="Investimento" value={state.offer.investment} onChange={(value) => updateOffer("investment", value)} />
            <TextAreaField label="Recorrência" value={state.offer.recurring} onChange={(value) => updateOffer("recurring", value)} />
            <TextAreaField label="Diferencial" value={state.offer.differentiator} onChange={(value) => updateOffer("differentiator", value)} />
          </FormSection>
          <INEMACard className="h-fit border-inema-amber/40">
            <INEMABadge tone="amber">Oferta gerada</INEMABadge>
            <p className="mt-4 text-lg font-semibold leading-snug text-inema-text">{generatedOffer}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.04em] text-inema-dim">Pitch de 30 segundos</p>
            <p className="mt-2 text-sm leading-6 text-inema-muted">{pitch}</p>
          </INEMACard>
        </div>
      ) : null}

      {module.slug === "pricing" ? (
        <div className="grid gap-4 lg:grid-cols-[1fr_.9fr]">
          <FormSection title="Calculadora de preço" description="Use valor, esforço, risco e suporte. Não use apenas horas.">
            <div className="grid gap-4 md:grid-cols-2">
              <NumberField label="Horas estimadas" value={state.pricing.estimatedHours} onChange={(value) => updatePricing("estimatedHours", value)} />
              <NumberField label="Custo técnico" value={state.pricing.technicalCost} onChange={(value) => updatePricing("technicalCost", value)} />
              <NumberField label="Ferramentas/APIs" value={state.pricing.toolsCost} onChange={(value) => updatePricing("toolsCost", value)} />
              <NumberField label="Custo de implantação" value={state.pricing.implementationCost} onChange={(value) => updatePricing("implementationCost", value)} />
              <NumberField label="Valor gerado" value={state.pricing.valueGenerated} onChange={(value) => updatePricing("valueGenerated", value)} />
              <NumberField label="Economia estimada" value={state.pricing.savings} onChange={(value) => updatePricing("savings", value)} />
            </div>
            <ScoreInput label="Complexidade" value={state.pricing.complexity} onChange={(value) => updatePricing("complexity", value)} />
            <ScoreInput label="Risco" value={state.pricing.risk} onChange={(value) => updatePricing("risk", value)} />
            <ScoreInput label="Urgência" value={state.pricing.urgency} onChange={(value) => updatePricing("urgency", value)} />
          </FormSection>
          <INEMACard>
            <INEMABadge tone="amber">Cenários</INEMABadge>
            <div className="mt-5 grid gap-3">
              <Scenario label="Mínimo" value={pricing.minimum} />
              <Scenario label="Recomendado" value={pricing.recommended} highlight />
              <Scenario label="Premium" value={pricing.premium} />
              <Scenario label="Mensalidade" value={pricing.monthly} />
            </div>
            <p className="mt-5 text-sm text-inema-muted">Receita anual recorrente: R$ {pricing.annualRecurring.toLocaleString("pt-BR")}</p>
            <p className="mt-1 text-sm text-inema-muted">Margem estimada do projeto: {pricing.estimatedMargin}%</p>
          </INEMACard>
        </div>
      ) : null}

      {module.slug === "ladder" ? (
        <FormSection title="Escada de serviços" description="Configure os caminhos de compra para o mesmo problema.">
          <TextAreaField label="Entrada" value={state.ladder.entry} onChange={(value) => setState((current) => ({ ...current, ladder: { ...current.ladder, entry: value } }))} />
          <TextAreaField label="Projeto inicial" value={state.ladder.initialProject} onChange={(value) => setState((current) => ({ ...current, ladder: { ...current.ladder, initialProject: value } }))} />
          <TextAreaField label="Projeto estratégico" value={state.ladder.strategicProject} onChange={(value) => setState((current) => ({ ...current, ladder: { ...current.ladder, strategicProject: value } }))} />
          <TextAreaField label="Recorrência" value={state.ladder.recurrence} onChange={(value) => setState((current) => ({ ...current, ladder: { ...current.ladder, recurrence: value } }))} />
        </FormSection>
      ) : null}

      {module.slug === "meeting" ? (
        <FormSection title="Roteiro de reunião" description="Registre perguntas, notas e próximos passos para transformar conversa em proposta.">
          <TextField label="Cliente" value={state.meeting.client} onChange={(value) => updateMeeting("client", value)} />
          <label className="grid gap-2 text-sm font-bold text-inema-soft">
            Status
            <INEMASelect value={state.meeting.status} onChange={(event) => updateMeeting("status", event.target.value as Meeting["status"])}>
              <option value="agendada">Agendada</option>
              <option value="em-andamento">Em andamento</option>
              <option value="concluida">Concluída</option>
              <option value="follow-up">Follow-up necessário</option>
            </INEMASelect>
          </label>
          <TextAreaField label="Processo atual" value={state.meeting.currentProcess} onChange={(value) => updateMeeting("currentProcess", value)} />
          <TextAreaField label="Problema" value={state.meeting.problem} onChange={(value) => updateMeeting("problem", value)} />
          <TextAreaField label="Custo do problema" value={state.meeting.problemCost} onChange={(value) => updateMeeting("problemCost", value)} />
          <TextAreaField label="Oportunidades" value={state.meeting.opportunities} onChange={(value) => updateMeeting("opportunities", value)} />
          <TextAreaField label="Notas da reunião" value={state.meeting.notes} onChange={(value) => updateMeeting("notes", value)} />
          <TextAreaField label="Próximos passos" value={state.meeting.nextSteps} onChange={(value) => updateMeeting("nextSteps", value)} />
        </FormSection>
      ) : null}

      {module.slug === "proposal" ? (
        <div className="grid gap-4 lg:grid-cols-[1fr_.85fr]">
          <FormSection title="Gerador de Proposta INEMA" description="A proposta começa pelo problema do cliente e só depois apresenta a solução.">
            <TextField label="Título" value={state.proposal.title} onChange={(value) => updateProposal("title", value)} />
            <TextField label="Cliente" value={state.proposal.client} onChange={(value) => updateProposal("client", value)} />
            <TextAreaField label="Situação atual" value={state.proposal.currentSituation} onChange={(value) => updateProposal("currentSituation", value)} />
            <TextAreaField label="Problema identificado" value={state.proposal.identifiedProblem} onChange={(value) => updateProposal("identifiedProblem", value)} />
            <TextAreaField label="Solução proposta" value={state.proposal.solution} onChange={(value) => updateProposal("solution", value)} />
            <TextAreaField label="Entregáveis" value={state.proposal.deliverables} onChange={(value) => updateProposal("deliverables", value)} />
            <TextField label="Cronograma" value={state.proposal.timeline} onChange={(value) => updateProposal("timeline", value)} />
            <NumberField label="Investimento" value={state.proposal.investment} onChange={(value) => updateProposal("investment", value)} />
            <NumberField label="Plano mensal" value={state.proposal.monthlyPlan} onChange={(value) => updateProposal("monthlyPlan", value)} />
          </FormSection>
          <INEMACard className="h-fit">
            <INEMABadge tone="cyan">{state.proposal.status}</INEMABadge>
            <h2 className="mt-4 text-lg font-semibold text-inema-text">{state.proposal.title}</h2>
            <p className="mt-4 text-sm leading-6 text-inema-muted">{state.proposal.currentSituation}</p>
            <p className="mt-4 text-sm leading-6 text-inema-muted">{state.proposal.solution}</p>
            <div className="mt-6 rounded-inema border border-inema-border bg-inema-bg p-4">
              <p className="text-sm text-inema-muted">Investimento</p>
              <p className="text-[24px] font-semibold text-inema-amber">R$ {state.proposal.investment.toLocaleString("pt-BR")}</p>
              <p className="mt-2 text-sm text-inema-muted">Mensalidade: R$ {state.proposal.monthlyPlan.toLocaleString("pt-BR")}</p>
            </div>
          </INEMACard>
        </div>
      ) : null}

      {module.slug === "pipeline" ? (
        <div className="grid gap-4">
          <INEMACard>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-inema-dim">Primeiros 20 clientes</p>
                <h2 className="mt-2 text-xl font-semibold text-inema-text">{state.prospects.length} / 20</h2>
              </div>
              <INEMAProgress value={(state.prospects.length / 20) * 100} className="w-48" />
            </div>
          </INEMACard>
          <div className="grid gap-4">
            {state.prospects.map((prospect, index) => (
              <INEMACard key={prospect.id}>
                <div className="grid gap-4 lg:grid-cols-4">
                  <TextField label="Empresa" value={prospect.company} onChange={(value) => updateProspect(index, { company: value })} />
                  <TextField label="Contato" value={prospect.contact} onChange={(value) => updateProspect(index, { contact: value })} />
                  <TextField label="Problema" value={prospect.problem} onChange={(value) => updateProspect(index, { problem: value })} />
                  <label className="grid gap-2 text-sm font-bold text-inema-soft">
                    Etapa
                    <INEMASelect value={prospect.stage} onChange={(event) => updateProspect(index, { stage: event.target.value as Prospect["stage"] })}>
                      {["identificado", "pesquisado", "contato-iniciado", "reuniao", "diagnostico", "proposta", "negociacao", "ganho", "perdido"].map((stage) => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </INEMASelect>
                  </label>
                </div>
              </INEMACard>
            ))}
          </div>
        </div>
      ) : null}

      {module.slug === "implementation" ? (
        <div className="grid gap-3">
          {state.implementation.map((task) => (
            <label key={task.id} className="flex items-center gap-3 rounded-inema border border-inema-border bg-inema-panel p-4">
              <input
                type="checkbox"
                checked={task.done}
                onChange={(event) =>
                  setState((current) => ({
                    ...current,
                    implementation: current.implementation.map((item) =>
                      item.id === task.id ? { ...item, done: event.target.checked } : item,
                    ),
                  }))
                }
                className="h-5 w-5 accent-inema-accent"
              />
              <span className={task.done ? "text-inema-muted line-through" : "font-bold text-inema-text"}>{task.label}</span>
            </label>
          ))}
        </div>
      ) : null}

      {module.slug === "recurrence" ? (
        <div className="grid gap-4">
          <INEMACard className="border-inema-mint/40">
            <p className="text-sm font-extrabold uppercase text-inema-mint">Receita recorrente mensal</p>
            <h2 className="mt-2 text-[28px] font-semibold text-inema-text">R$ {getMrr(state.recurrence).toLocaleString("pt-BR")}</h2>
          </INEMACard>
          {state.recurrence.map((contract) => (
            <INEMACard key={contract.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-inema-text">{contract.client}</h2>
                  <p className="mt-2 text-sm text-inema-muted">{contract.project}</p>
                  <p className="mt-3 text-sm text-inema-muted">{contract.improvements}</p>
                </div>
                <div className="rounded-inema border border-inema-border bg-inema-bg p-4">
                  <p className="text-sm text-inema-muted">Mensalidade</p>
                  <p className="text-[24px] font-semibold text-inema-mint">R$ {contract.monthlyFee.toLocaleString("pt-BR")}</p>
                  <p className="mt-1 text-xs text-inema-muted">Vencimento dia {contract.dueDay}</p>
                </div>
              </div>
            </INEMACard>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Scenario({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={highlight ? "rounded-inema border border-inema-amber bg-inema-bg p-4" : "rounded-inema border border-inema-border bg-inema-bg p-4"}>
      <p className="text-sm font-bold text-inema-muted">{label}</p>
      <p className={highlight ? "mt-1 text-[24px] font-semibold text-inema-amber" : "mt-1 text-lg font-semibold text-inema-text"}>
        R$ {value.toLocaleString("pt-BR")}
      </p>
    </div>
  );
}
