import {
  BadgeDollarSign,
  BookOpenText,
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Handshake,
  LayoutDashboard,
  ListChecks,
  Map,
  MessageSquareText,
  Network,
  PackageCheck,
  Route,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export type ModuleSlug =
  | "skills"
  | "niches"
  | "diagnostics"
  | "services"
  | "offer"
  | "pricing"
  | "ladder"
  | "meeting"
  | "proposal"
  | "pipeline"
  | "implementation"
  | "recurrence";

export type AppRoute = {
  href: string;
  label: string;
  description: string;
  icon: typeof LayoutDashboard;
};

export type WorkshopModule = {
  slug: ModuleSlug;
  title: string;
  eyebrow: string;
  description: string;
  outcome: string;
  icon: typeof LayoutDashboard;
  contentFile?: string;
};

export const primaryRoutes: AppRoute[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    description: "Progresso, métricas e próximo passo.",
    icon: LayoutDashboard,
  },
  {
    href: "/modules/skills",
    label: "Jornada",
    description: "Construa sua oferta de IA como serviço.",
    icon: Route,
  },
  {
    href: "/modules/pipeline",
    label: "Clientes",
    description: "Primeiros 20 clientes e negociações.",
    icon: Users,
  },
  {
    href: "/modules/recurrence",
    label: "Recorrência",
    description: "Contratos, MRR e revisões.",
    icon: Network,
  },
];

export const workshopModules: WorkshopModule[] = [
  {
    slug: "skills",
    title: "Mapa de habilidades",
    eyebrow: "Módulo 1",
    description: "Mapeie ferramentas, conhecimentos, experiências e problemas que você consegue resolver.",
    outcome: "Meu Mapa de Habilidades",
    icon: Sparkles,
    contentFile: "01-mapa-de-habilidades.md",
  },
  {
    slug: "niches",
    title: "Escolha de nicho",
    eyebrow: "Módulo 2",
    description: "Compare até três nichos por conhecimento, acesso, dor, urgência, ticket e recorrência.",
    outcome: "Nicho principal e secundário",
    icon: Target,
  },
  {
    slug: "diagnostics",
    title: "Diagnóstico empresarial",
    eyebrow: "Módulo 3",
    description: "Use o Método MAPA INEMA para encontrar oportunidades reais de IA dentro de empresas.",
    outcome: "Score de oportunidade",
    icon: ClipboardCheck,
    contentFile: "02-diagnostico-empresarial.md",
  },
  {
    slug: "services",
    title: "Cardápio de serviços",
    eyebrow: "Módulo 4",
    description: "Organize serviços vendáveis como diagnóstico, atendimento, comercial, processos e bases de conhecimento.",
    outcome: "Biblioteca de serviços",
    icon: PackageCheck,
    contentFile: "03-cardapio-de-servicos.md",
  },
  {
    slug: "offer",
    title: "Construtor de oferta",
    eyebrow: "Módulo 5",
    description: "Crie uma oferta clara com cliente, problema, resultado, solução, entregáveis e recorrência.",
    outcome: "Oferta curta, comercial e pitch",
    icon: BriefcaseBusiness,
  },
  {
    slug: "pricing",
    title: "Precificação",
    eyebrow: "Módulo 6",
    description: "Calcule implantação, mensalidade e cenários considerando valor, impacto, risco e suporte.",
    outcome: "Cenários mínimo, recomendado e premium",
    icon: BadgeDollarSign,
    contentFile: "04-precificacao-e-recorrencia.md",
  },
  {
    slug: "ladder",
    title: "Escada de serviços",
    eyebrow: "Módulo 7",
    description: "Configure entrada, projeto inicial, projeto estratégico e recorrência.",
    outcome: "Escada comercial",
    icon: ListChecks,
  },
  {
    slug: "meeting",
    title: "Roteiro de reunião",
    eyebrow: "Módulo 8",
    description: "Prepare perguntas, registre notas e defina próximos passos de uma conversa comercial.",
    outcome: "Reunião pronta para proposta",
    icon: MessageSquareText,
    contentFile: "05-roteiro-de-reuniao.md",
  },
  {
    slug: "proposal",
    title: "Proposta comercial",
    eyebrow: "Módulo 9",
    description: "Monte contexto, problema, solução, escopo, cronograma, investimento e plano mensal.",
    outcome: "Proposta INEMA",
    icon: FileText,
    contentFile: "06-modelo-de-proposta-comercial.md",
  },
  {
    slug: "pipeline",
    title: "Pipeline de clientes",
    eyebrow: "Módulo 10",
    description: "Organize os primeiros 20 clientes e acompanhe etapas da prospecção até o fechamento.",
    outcome: "Mini CRM",
    icon: Handshake,
    contentFile: "07-plano-20-clientes.md",
  },
  {
    slug: "implementation",
    title: "Implantação",
    eyebrow: "Módulo 11",
    description: "Acompanhe briefing, acessos, arquitetura, testes, treinamento, entrega e documentação.",
    outcome: "Checklist de implantação",
    icon: Map,
    contentFile: "08-checklist-implantacao-e-recorrencia.md",
  },
  {
    slug: "recurrence",
    title: "Recorrência",
    eyebrow: "Operação",
    description: "Registre clientes ativos, mensalidade, custos, margem, revisões e renovações.",
    outcome: "MRR e contratos ativos",
    icon: BookOpenText,
  },
];

export function getModuleBySlug(slug: string) {
  return workshopModules.find((module) => module.slug === slug);
}

