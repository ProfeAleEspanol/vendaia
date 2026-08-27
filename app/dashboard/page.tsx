import { AppShell } from "@/components/layout/app-shell";
import { DashboardClient } from "@/components/modules/dashboard-client";

export default function DashboardPage() {
  return (
    <AppShell>
      <DashboardClient />
    </AppShell>
  );
}

