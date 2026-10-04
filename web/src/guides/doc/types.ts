// A state guide built from sections: used for employment exchange, ration
// card, certificates and new state service pages. Strings marked "html" may
// contain simple inline links/bold.
export type Section = {
  id: string;
  title: string;
  intro?: string; // html
  steps?: string[]; // html, numbered
  list?: string[]; // html, checklist
  table?: { head: string[]; rows: string[][] }; // cells html
  callout?: { kind: "info" | "warn" | "ok"; html: string };
  html?: string; // free html after the parts above
};

export type DocGuide = {
  state?: { slug: string; hi: string }; // omitted for national guides
  crumbs?: { label: string; href?: string }[]; // overrides the state breadcrumb
  doc?: string; // e.g. "employment-exchange"; links the other states' pages
  docHi: string; // breadcrumb label, e.g. "रोज़गार कार्यालय"
  title: string; // keep the ranking title unless it is wrong
  description: string;
  published: string;
  modified: string;
  verified: string;
  h1: string;
  lead: string;
  facts: [string, string][]; // [label, value(html)]
  notice?: string; // html
  sections: Section[];
  official: { href: string; title: string; note?: string }[];
  faq: { q: string; a: string }[];
  related: { href: string; emoji: string; title: string; text: string }[];
  otherStatesTitle?: string;
  aside: { href: string; label: string }[]; // buttons under the table of contents
};
