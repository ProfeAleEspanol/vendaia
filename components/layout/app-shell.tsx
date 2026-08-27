"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { primaryRoutes, workshopModules } from "@/config/modules";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils/cn";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-inema-content text-inema-text">
      <nav className="sticky top-0 z-50 flex h-11 items-center gap-4 border-b border-inema-border bg-inema-sidebar px-4 text-[13px]">
        <Link
          href="/dashboard"
          className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.04em] text-inema-text"
        >
          {brand.productLine}
        </Link>
        <div className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
          {primaryRoutes.map((route) => {
            const active = pathname === route.href || pathname.startsWith(`${route.href}/`);
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "rounded-[7px] px-2.5 py-1.5 font-medium text-inema-muted transition",
                  active ? "bg-inema-accentBg text-inema-text" : "hover:bg-inema-accentHover hover:text-inema-text",
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
        <a
          href="https://inema.club"
          className="ml-auto whitespace-nowrap rounded-[7px] px-2.5 py-1.5 font-semibold text-inema-muted transition hover:bg-inema-accentHover hover:text-inema-text"
        >
          inema.<span className="text-inema-accentStrong">club</span>
        </a>
        <span className="hidden rounded-[5px] border border-inema-border px-2 py-0.5 font-mono text-xs leading-5 text-inema-muted sm:inline">
          workshop
        </span>
      </nav>

      <div className="lg:grid lg:grid-cols-[252px_1fr]">
        <aside className="border-b border-inema-border bg-inema-sidebar px-3 py-[18px] lg:sticky lg:top-11 lg:h-[calc(100vh-44px)] lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <div className="mb-5 px-2">
            <h1 className="text-[17px] font-bold text-inema-text">{brand.appName}</h1>
            <p className="mt-1 text-[11.5px] text-inema-dim">{brand.tagline}</p>
          </div>

          <nav className="mb-6">
            <p className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-inema-dim">
              Workspace
            </p>
            <div className="grid gap-0.5">
              {primaryRoutes.map((route) => {
                const Icon = route.icon;
                const active = pathname === route.href || pathname.startsWith(`${route.href}/`);
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-[7px] px-2.5 py-2 text-[13.5px] font-medium transition",
                      active
                        ? "bg-inema-accentBg text-inema-text"
                        : "text-inema-muted hover:bg-inema-accentHover hover:text-inema-text",
                    )}
                  >
                    <Icon className={cn("h-[15px] w-[15px]", active ? "text-inema-accent" : "text-inema-dim")} />
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div>
            <p className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-inema-dim">
              Módulos
            </p>
            <div className="grid max-h-[52vh] gap-0.5 overflow-y-auto pr-1">
              {workshopModules.map((module) => {
                const Icon = module.icon;
                const href = `/modules/${module.slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={module.slug}
                    href={href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-[7px] px-2.5 py-2 text-[13px] font-medium transition",
                      active
                        ? "bg-inema-accentBg text-inema-text"
                        : "text-inema-muted hover:bg-inema-accentHover hover:text-inema-text",
                    )}
                  >
                    <Icon className={cn("h-[15px] w-[15px]", active ? "text-inema-accent" : "text-inema-dim")} />
                    <span className="min-w-0 truncate">{module.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
        <main className="min-w-0 bg-inema-content px-4 py-6 sm:px-7 lg:py-[26px]">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
