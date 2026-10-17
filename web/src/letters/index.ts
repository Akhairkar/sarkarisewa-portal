// All letter formats, loaded from src/letters/formats/*.ts at build time.
import type { Letter } from "./types";

const mods = import.meta.glob<Record<string, Letter>>("./formats/*.ts", { eager: true });
export const LETTERS: Letter[] = Object.values(mods)
  .map((m) => Object.values(m).find((v) => v && typeof v === "object" && "template" in v) as Letter)
  .filter(Boolean)
  .sort((a, b) => a.short.hi.localeCompare(b.short.hi, "hi"));

export const letterHref = (l: Letter) => `/arzi/${l.slug}.html`;

// State and state-specific guides share the letters of their national guide,
// e.g. /states/bihar-ration-card.html shows the ration card letters.
const NATIONAL: Record<string, string> = {
  "labour-card": "labour-card-construction-workers",
  "sir-voter-list": "special-intensive-revision-sir",
  "employment-exchange": "employment-exchange-registration",
};
const ALIASES: Record<string, string> = {
  "/service/mh-ration-card.html": "/service/ration-card.html",
  "/service/pb-ration-card.html": "/service/ration-card.html",
  "/service/uk-ration-card.html": "/service/ration-card.html",
  "/service/mp-caste-certificate.html": "/service/caste-certificate.html",
  "/service/uk-caste-certificate.html": "/service/caste-certificate.html",
  "/service/tn-community-certificate.html": "/service/caste-certificate.html",
  "/service/ka-caste-income-certificate.html": "/service/income-certificate.html",
  "/service/dn-income-certificate.html": "/service/income-certificate.html",
  "/service/nagpur-income-certificate.html": "/service/income-certificate.html",
  "/service/hr-domicile-certificate.html": "/service/domicile-certificate.html",
  "/service/state-domicile-praman-patra.html": "/service/domicile-certificate.html",
  "/service/kl-nativity-certificate.html": "/service/domicile-certificate.html",
  "/service/uk-hill-area-certificate.html": "/service/domicile-certificate.html",
  "/service/senior-citizen-identity-card.html": "/service/senior-citizen-card.html",
  "/service/smart-card-driving-license.html": "/service/driving-licence.html",
  "/service/mparivahan-virtual-rc-dl.html": "/service/driving-licence.html",
  "/service/e-voter-epic-download.html": "/service/voter-id-card.html",
  "/service/udid-disability-card-download.html": "/service/disability-certificate.html",
  "/service/dl-marriage-certificate.html": "/service/marriage-certificate.html",
};
const DOCS = Object.keys(NATIONAL).concat(["ration-card", "income-certificate", "caste-certificate", "domicile-certificate", "birth-certificate", "death-certificate", "voter-id-card", "driving-licence", "senior-citizen-card"]);
const national = (path: string) => {
  if (ALIASES[path]) return ALIASES[path];
  if (!path.startsWith("/states/")) return undefined;
  const doc = DOCS.find((d) => path.endsWith(`-${d}.html`));
  return doc ? `/service/${NATIONAL[doc] ?? doc}.html` : undefined;
};

/** Letters that list this site path (or its national guide) among their related pages. */
export const lettersFor = (path: string) => {
  const alt = national(path);
  return LETTERS.filter((l) => l.related.includes(path) || (alt !== undefined && l.related.includes(alt)));
};
