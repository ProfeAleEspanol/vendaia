"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultWorkspaceState } from "@/lib/workspace/default-state";
import type { WorkspaceState } from "@/types/workspace";

const STORAGE_KEY = "inema:ia-como-servico:workspace:v1";

function mergeWorkspaceState(value: unknown): WorkspaceState {
  if (!value || typeof value !== "object") return defaultWorkspaceState;
  return {
    ...defaultWorkspaceState,
    ...(value as Partial<WorkspaceState>),
    skillMap: {
      ...defaultWorkspaceState.skillMap,
      ...(value as Partial<WorkspaceState>).skillMap,
    },
    offer: {
      ...defaultWorkspaceState.offer,
      ...(value as Partial<WorkspaceState>).offer,
    },
    pricing: {
      ...defaultWorkspaceState.pricing,
      ...(value as Partial<WorkspaceState>).pricing,
    },
    ladder: {
      ...defaultWorkspaceState.ladder,
      ...(value as Partial<WorkspaceState>).ladder,
    },
    meeting: {
      ...defaultWorkspaceState.meeting,
      ...(value as Partial<WorkspaceState>).meeting,
    },
    proposal: {
      ...defaultWorkspaceState.proposal,
      ...(value as Partial<WorkspaceState>).proposal,
    },
  };
}

export function useWorkspaceState() {
  const [state, setState] = useState<WorkspaceState>(defaultWorkspaceState);
  const [loaded, setLoaded] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setState(mergeWorkspaceState(JSON.parse(raw)));
      } catch {
        setState(defaultWorkspaceState);
      }
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const nextState = { ...state, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    setSavedAt(nextState.updatedAt);
  }, [loaded, state]);

  const api = useMemo(
    () => ({
      state,
      setState,
      savedAt,
      reset: () => setState(defaultWorkspaceState),
    }),
    [savedAt, state],
  );

  return api;
}

