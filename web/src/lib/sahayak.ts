// Build-time helpers for Seva Sahayak: district names per state (from the CSC
// district pages) for the sign-up and help-request forms.
import { cscPages } from "./csc";
import { STATES } from "../data/site";

const ALIAS: Record<string, string> = {
  "andaman-and-nicobar": "andaman-nicobar",
  "jammu-and-kashmir": "jammu-kashmir",
  "dadra-and-nagar-haveli-and-daman-and-diu": "dadra-nagar-haveli-daman-diu",
  "dnh-dd": "dadra-nagar-haveli-daman-diu",
};

let cache: Record<string, string[]> | null = null;

/** { state slug (as in STATES): sorted district names } */
export function sahayakDistricts(): Record<string, string[]> {
  if (cache) return cache;
  const known = new Set(STATES.map((s) => s.slug));
  const out: Record<string, Set<string>> = {};
  for (const p of cscPages()) {
    if (p.canonical) continue;
    const st = ALIAS[p.stateDir] ?? p.stateDir;
    if (!known.has(st)) continue;
    (out[st] ??= new Set()).add(p.name);
  }
  cache = Object.fromEntries(Object.entries(out).map(([k, v]) => [k, [...v].sort((a, b) => a.localeCompare(b))]));
  return cache;
}
