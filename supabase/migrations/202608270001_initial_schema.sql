create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text default 'member',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  tools text,
  knowledge text,
  experiences text,
  processes text,
  problems text,
  sectors text,
  domain_level int default 1,
  project_examples text,
  results text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.niches (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  sector text not null,
  experience text,
  access text,
  company_size text,
  main_problems text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.niche_scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  niche_id uuid not null references public.niches(id) on delete cascade,
  knowledge int default 1,
  access int default 1,
  pain int default 1,
  urgency int default 1,
  ticket int default 1,
  recurrence int default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  category text,
  problem text,
  ideal_client text,
  promised_result text,
  deliverables text,
  complexity text,
  suggested_deadline text,
  recurring_potential boolean default false,
  price_range text,
  examples text,
  archived boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client_type text,
  problem text,
  result text,
  solution text,
  deliverables text,
  deadline text,
  investment numeric default 0,
  recurring text,
  differentiator text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.diagnostics (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client text,
  area text,
  status text default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.diagnostic_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  diagnostic_id uuid references public.diagnostics(id) on delete cascade,
  problem text,
  current_process text,
  frequency numeric default 0,
  people numeric default 0,
  hours numeric default 0,
  cost numeric default 0,
  impact int default 1,
  risk int default 1,
  urgency int default 1,
  automation_potential int default 1,
  complexity int default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.meetings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client text,
  status text default 'agendada',
  context text,
  current_process text,
  problem text,
  problem_cost text,
  opportunities text,
  budget text,
  decision_makers text,
  next_steps text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.proposals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text,
  client text,
  context text,
  current_situation text,
  identified_problem text,
  opportunity text,
  solution text,
  flow text,
  scope text,
  deliverables text,
  timeline text,
  investment numeric default 0,
  monthly_plan numeric default 0,
  conditions text,
  next_steps text,
  status text default 'rascunho',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.prospects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  company text,
  contact text,
  niche text,
  problem text,
  service text,
  potential_value numeric default 0,
  stage text default 'identificado',
  next_action text,
  date date,
  source text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.prospect_activities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  prospect_id uuid references public.prospects(id) on delete cascade,
  activity_type text,
  notes text,
  due_date date,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client text,
  title text,
  status text default 'briefing',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid references public.projects(id) on delete cascade,
  label text,
  done boolean default false,
  owner text,
  due_date date,
  blockers text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.recurring_contracts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  client text,
  project text,
  monthly_fee numeric default 0,
  monthly_cost numeric default 0,
  due_day int,
  tools text,
  improvements text,
  next_review date,
  renewal_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.app_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  module text not null,
  completed boolean default false,
  data jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, module)
);

alter table public.profiles enable row level security;
alter table public.skills enable row level security;
alter table public.niches enable row level security;
alter table public.niche_scores enable row level security;
alter table public.services enable row level security;
alter table public.offers enable row level security;
alter table public.diagnostics enable row level security;
alter table public.diagnostic_items enable row level security;
alter table public.meetings enable row level security;
alter table public.proposals enable row level security;
alter table public.prospects enable row level security;
alter table public.prospect_activities enable row level security;
alter table public.projects enable row level security;
alter table public.project_tasks enable row level security;
alter table public.recurring_contracts enable row level security;
alter table public.app_progress enable row level security;

create policy "Users can manage own profiles" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "Users can manage own skills" on public.skills
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own niches" on public.niches
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own niche scores" on public.niche_scores
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own services" on public.services
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own offers" on public.offers
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own diagnostics" on public.diagnostics
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own diagnostic items" on public.diagnostic_items
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own meetings" on public.meetings
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own proposals" on public.proposals
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own prospects" on public.prospects
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own prospect activities" on public.prospect_activities
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own projects" on public.projects
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own project tasks" on public.project_tasks
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own recurring contracts" on public.recurring_contracts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users can manage own progress" on public.app_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

