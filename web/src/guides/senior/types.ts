// Content for one state's senior citizen card guide. Strings marked "html"
// may contain simple inline links/bold; everything else is plain text.
export type SeniorGuide = {
  state: { slug: string; hi: string };
  title: string; // <title>; keep the ranking title unless it is wrong
  description: string;
  published: string; // YYYY-MM-DD
  modified: string; // YYYY-MM-DD
  verified: string; // shown to readers, e.g. "4 अक्टूबर 2026"
  h1: string;
  lead: string; // the direct answer
  facts: [string, string][]; // [label, value(html)] x4
  idCard: {
    office: string; // short: where the ID card is made, for the option card
    note?: string; // html callout above the steps
    steps: string[]; // html
    after?: string; // html paragraph after the steps
  };
  documents: string[]; // html
  pension: {
    name: string; // e.g. "सर्वजन पेंशन योजना"
    amount: string; // e.g. "₹1,000 / महीना"
    intro: string; // html
    rows: [string, string][]; // [label, value(html)]
    status: string; // html: how to check status / payment issues
  };
  extra?: { id: string; title: string; html: string }[]; // state-only sections
  reject: [string, string][]; // [problem, fix] html
  official: { href: string; title: string; note?: string }[];
  faq: { q: string; a: string }[];
  related: { href: string; emoji: string; title: string; text: string }[];
  csc: string; // CSC locator page for the state
};
