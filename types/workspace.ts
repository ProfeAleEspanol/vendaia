export type NicheScoreKey =
  | "knowledge"
  | "access"
  | "pain"
  | "urgency"
  | "ticket"
  | "recurrence";

export type ProspectStage =
  | "identificado"
  | "pesquisado"
  | "contato-iniciado"
  | "reuniao"
  | "diagnostico"
  | "proposta"
  | "negociacao"
  | "ganho"
  | "perdido";

export type ProposalStatus =
  | "rascunho"
  | "enviada"
  | "negociacao"
  | "aprovada"
  | "recusada";

export type MeetingStatus =
  | "agendada"
  | "em-andamento"
  | "concluida"
  | "follow-up";

export type SkillMap = {
  tools: string;
  knowledge: string;
  experiences: string;
  processes: string;
  problems: string;
  sectors: string;
  domainLevel: number;
  projectExamples: string;
  results: string;
};

export type NicheCandidate = {
  id: string;
  sector: string;
  experience: string;
  access: string;
  companySize: string;
  mainProblems: string;
  scores: Record<NicheScoreKey, number>;
};

export type DiagnosticOpportunity = {
  id: string;
  area: string;
  problem: string;
  currentProcess: string;
  frequency: number;
  people: number;
  hours: number;
  cost: number;
  impact: number;
  risk: number;
  urgency: number;
  automationPotential: number;
  complexity: number;
};

export type ServiceTemplate = {
  id: string;
  name: string;
  category: string;
  problem: string;
  idealClient: string;
  promisedResult: string;
  deliverables: string;
  complexity: "baixa" | "media" | "alta";
  suggestedDeadline: string;
  recurringPotential: boolean;
  priceRange: string;
  examples: string;
  archived?: boolean;
};

export type Offer = {
  clientType: string;
  problem: string;
  result: string;
  solution: string;
  deliverables: string;
  deadline: string;
  investment: number;
  recurring: string;
  differentiator: string;
};

export type Pricing = {
  complexity: number;
  estimatedHours: number;
  technicalCost: number;
  toolsCost: number;
  implementationCost: number;
  risk: number;
  maintenance: number;
  support: number;
  valueGenerated: number;
  savings: number;
  revenueUpside: number;
  urgency: number;
};

export type ServiceLadder = {
  entry: string;
  initialProject: string;
  strategicProject: string;
  recurrence: string;
};

export type Meeting = {
  client: string;
  status: MeetingStatus;
  context: string;
  currentProcess: string;
  problem: string;
  problemCost: string;
  opportunities: string;
  budget: string;
  decisionMakers: string;
  nextSteps: string;
  notes: string;
};

export type Proposal = {
  title: string;
  client: string;
  context: string;
  currentSituation: string;
  identifiedProblem: string;
  opportunity: string;
  solution: string;
  flow: string;
  scope: string;
  deliverables: string;
  timeline: string;
  investment: number;
  monthlyPlan: number;
  conditions: string;
  nextSteps: string;
  status: ProposalStatus;
};

export type Prospect = {
  id: string;
  company: string;
  contact: string;
  niche: string;
  problem: string;
  service: string;
  potentialValue: number;
  stage: ProspectStage;
  nextAction: string;
  date: string;
  source: string;
  notes: string;
};

export type ProjectTask = {
  id: string;
  label: string;
  done: boolean;
  owner: string;
  dueDate: string;
  blockers: string;
};

export type RecurringContract = {
  id: string;
  client: string;
  project: string;
  monthlyFee: number;
  monthlyCost: number;
  dueDay: number;
  tools: string;
  improvements: string;
  nextReview: string;
  renewalDate: string;
};

export type WorkspaceState = {
  skillMap: SkillMap;
  niches: NicheCandidate[];
  diagnostics: DiagnosticOpportunity[];
  services: ServiceTemplate[];
  offer: Offer;
  pricing: Pricing;
  ladder: ServiceLadder;
  meeting: Meeting;
  proposal: Proposal;
  prospects: Prospect[];
  implementation: ProjectTask[];
  recurrence: RecurringContract[];
  updatedAt: string;
};

