import type {
  DiagnosticOpportunity,
  NicheCandidate,
  Pricing,
  RecurringContract,
  WorkspaceState,
} from "@/types/workspace";

export function getNicheScore(niche: NicheCandidate) {
  const values = Object.values(niche.scores);
  return Math.round(values.reduce((sum, score) => sum + score, 0) / values.length * 20);
}

export function getOpportunityScore(opportunity: DiagnosticOpportunity) {
  const impact = opportunity.impact * 1.4;
  const urgency = opportunity.urgency * 1.2;
  const automation = opportunity.automationPotential * 1.4;
  const frequency = opportunity.frequency;
  const cost = Math.min(5, opportunity.cost / 1000);
  const complexityPenalty = opportunity.complexity * 0.9;
  const riskPenalty = opportunity.risk * 0.4;

  const raw = impact + urgency + automation + frequency + cost - complexityPenalty - riskPenalty;
  return Math.max(0, Math.min(100, Math.round(raw * 7)));
}

export function classifyOpportunity(score: number) {
  if (score >= 80) return "ação imediata";
  if (score >= 62) return "alta prioridade";
  if (score >= 42) return "oportunidade";
  return "baixa prioridade";
}

export function getPricingScenarios(pricing: Pricing) {
  const baseCost =
    pricing.technicalCost +
    pricing.toolsCost +
    pricing.implementationCost +
    pricing.estimatedHours * 85;
  const valueAnchor = (pricing.valueGenerated + pricing.savings + pricing.revenueUpside) * 0.12;
  const riskMultiplier = 1 + pricing.risk * 0.06 + pricing.urgency * 0.04 + pricing.complexity * 0.07;
  const recommended = Math.round((baseCost + valueAnchor) * riskMultiplier / 100) * 100;
  const minimum = Math.max(500, Math.round(recommended * 0.72 / 100) * 100);
  const premium = Math.round(recommended * 1.48 / 100) * 100;
  const monthly = Math.max(
    500,
    Math.round((pricing.maintenance * 120 + pricing.support * 140 + pricing.toolsCost) / 50) * 50,
  );

  return {
    minimum,
    recommended,
    premium,
    monthly,
    annualRecurring: monthly * 12,
    estimatedMargin: Math.round(((recommended - baseCost) / Math.max(recommended, 1)) * 100),
  };
}

export function getMrr(contracts: RecurringContract[]) {
  return contracts.reduce((sum, contract) => sum + contract.monthlyFee, 0);
}

export function getMonthlyCost(contracts: RecurringContract[]) {
  return contracts.reduce((sum, contract) => sum + contract.monthlyCost, 0);
}

export function getWorkspaceProgress(state: WorkspaceState) {
  const checks = [
    Boolean(state.skillMap.tools && state.skillMap.problems),
    state.niches.some((niche) => niche.sector),
    state.diagnostics.length > 0,
    state.services.length >= 4,
    Boolean(state.offer.clientType && state.offer.problem && state.offer.solution),
    state.pricing.estimatedHours > 0,
    Boolean(state.ladder.entry && state.ladder.recurrence),
    Boolean(state.meeting.client && state.meeting.nextSteps),
    Boolean(state.proposal.title && state.proposal.investment),
    state.prospects.length >= 5,
    state.implementation.some((task) => task.done),
    state.recurrence.length > 0,
  ];

  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

export function getNextStep(state: WorkspaceState) {
  if (!state.skillMap.tools) return "Complete seu mapa de habilidades.";
  if (!state.niches.some((niche) => niche.sector)) return "Compare até 3 nichos possíveis.";
  if (!state.offer.clientType || !state.offer.solution) return "Construa sua primeira oferta.";
  if (!state.proposal.title) return "Transforme sua oferta em proposta comercial.";
  if (state.prospects.length < 5) return "Cadastre pelo menos 5 potenciais clientes.";
  if (!state.recurrence.length) return "Defina sua primeira oferta recorrente.";
  return "Revise sua proposta e aborde o próximo cliente.";
}

