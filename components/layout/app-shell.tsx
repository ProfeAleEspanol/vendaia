"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Zap } from "lucide-react";
import { primaryRoutes, workshopModules } from "@/config/modules";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils/cn";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-inema-bg lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-b border-inema-border bg-inema-bg/95 p-4 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <div className="rounded-inema border border-inema-border bg-gradient-to-b from-inema-surface to-inema-bg p-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-inema border border-inema-primary/45 bg-inema-primary text-inema-bg">
              <Zap className="h-5 w-5 fill-current" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-inema-primary">
                {brand.productLine}
              </p>
              <h1 className="text-xl font-black tracking-tight text-inema-text">{brand.appName}</h1>
            </div>
          </div>
          <p className="mt-3 text-sm text-inema-muted">{brand.tagline}</p>
        </div>

        <nav className="mt-5 grid gap-1">
          {primaryRoutes.map((route) => {
            const Icon = route.icon;
            const active = pathname === route.href || pathname.startsWith(`${route.href}/`);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg border px-3 py-3 text-sm font-bold transition",
                  active
                    ? "border-inema-primary bg-inema-surface text-inema-primary"
                    : "border-transparent text-inema-muted hover:border-inema-border hover:bg-inema-surface hover:text-inema-text",
                )}
              >
                <Icon className="h-4 w-4" />
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6">
          <p className="px-3 text-xs font-extrabold uppercase text-inema-dim">Módulos</p>
          <div className="mt-2 grid max-h-[42vh] gap-1 overflow-y-auto pr-1">
            {workshopModules.map((module) => {
              const Icon = module.icon;
              const href = `/modules/${module.slug}`;
              const active = pathname === href;
              return (
                <Link
                  key={module.slug}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition",
                    active
                      ? "border-inema-primary bg-inema-surface text-inema-primary"
                      : "border-transparent text-inema-muted hover:border-inema-border hover:text-inema-text",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {module.title}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
      <div className="inema-grid min-w-0">
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
