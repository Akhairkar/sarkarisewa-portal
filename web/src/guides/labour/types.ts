// Content for one state's labour card (BOCW construction worker) guide.
// Strings marked "html" may contain simple inline links/bold.
export type LabourGuide = {
  state: { slug: string; hi: string };
  title: string; // keep the ranking title unless it is wrong
  description: string;
  published: string; // YYYY-MM-DD
  modified: string; // YYYY-MM-DD
  verified: string; // e.g. "4 अक्टूबर 2026"
  h1: string;
  lead: string; // the direct answer
  facts: [string, string][]; // [label, value(html)] x4
  board: string; // board name, Hindi
  notice?: string; // html: important current news (callout at top)
  eligibility: string[]; // html
  documents: string[]; // html
  apply: { intro?: string; steps: string[]; offline?: string }; // html
  fees: [string, string][]; // [item, value(html)]
  status: string[]; // html steps: status + card download
  schemes: [string, string, string][]; // [scheme, benefit(html), note(html)]
  schemesNote?: string; // html under the table
  extra?: { id: string; title: string; html: string }[];
  reject: [string, string][]; // [problem, fix] html
  official: { href: string; title: string; note?: string }[];
  faq: { q: string; a: string }[];
  related: { href: string; emoji: string; title: string; text: string }[];
  csc: string; // CSC locator page for the state
  duplicates?: string[]; // old pages on the same topic (site paths) that point here
};
