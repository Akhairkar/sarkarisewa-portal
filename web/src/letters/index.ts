// All letter formats, loaded from src/letters/formats/*.ts at build time.
import type { Letter } from "./types";

const mods = import.meta.glob<Record<string, Letter>>("./formats/*.ts", { eager: true });
export const LETTERS: Letter[] = Object.values(mods)
  .map((m) => Object.values(m).find((v) => v && typeof v === "object" && "template" in v) as Letter)
  .filter(Boolean)
  .sort((a, b) => a.short.hi.localeCompare(b.short.hi, "hi"));

export const letterHref = (l: Letter) => `/arzi/${l.slug}.html`;

/** Letters that list this site path among their related pages. */
export const lettersFor = (path: string) => LETTERS.filter((l) => l.related.includes(path));
