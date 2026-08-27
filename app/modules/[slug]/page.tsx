import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { ModuleClient } from "@/components/modules/module-client";
import { getModuleBySlug, workshopModules } from "@/config/modules";

export function generateStaticParams() {
  return workshopModules.map((module) => ({ slug: module.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = getModuleBySlug(slug);
  if (!module) notFound();

  return (
    <AppShell>
      <ModuleClient slug={module.slug} />
    </AppShell>
  );
}
