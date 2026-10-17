// Ready-to-use application / complaint letter formats (/arzi/).
// Each format is one data file in src/letters/formats/<slug>.ts; the page,
// the live builder and the hub are generated from it.

export type Lang = "hi" | "en";
export type T = { hi: string; en: string };

export type Field = {
  key: string; // used as {{key}} in the template
  label: T;
  type?: "text" | "textarea" | "date" | "number" | "select" | "tel";
  placeholder?: T;
  options?: T[]; // for select
  required?: boolean;
  hint?: T;
};

export type LetterCategory =
  | "rti" | "bank" | "school" | "job" | "police" | "complaint" | "utility"
  | "document" | "land" | "municipal" | "social" | "personal";

export type Letter = {
  slug: string;
  category: LetterCategory;
  emoji: string;
  title: string; // <title>, keyword first, e.g. "RTI Application Format in Hindi 2026"
  description: string;
  h1: string;
  short: T; // one-line name for cards and the hub
  lead: string; // html, "सीधा जवाब"
  facts: [string, string][]; // [label, html]
  to: string; // html: who receives it
  when: string[]; // html list: when this letter is used
  fields: Field[];
  // Letter text with {{key}} placeholders; {{date}} and {{place}} are common.
  // Blank lines separate paragraphs. Keep both languages complete.
  template: T;
  attach?: string[]; // html list: what to attach
  submit?: string[]; // html steps: how and where to submit
  tips?: string[]; // html list: mistakes to avoid
  notice?: string; // html warning shown above the builder
  official?: { href: string; title: string; note?: string }[];
  related: string[]; // site paths of guides / tools this letter belongs to
  faq: { q: string; a: string }[];
  published: string;
  modified: string;
  verified: string;
};

export const CATEGORIES: Record<LetterCategory, { emoji: string; title: T; text: T }> = {
  rti: { emoji: "📨", title: { hi: "RTI आवेदन और अपील", en: "RTI application & appeal" }, text: { hi: "सूचना का अधिकार", en: "Right to Information" } },
  complaint: { emoji: "📢", title: { hi: "शिकायत पत्र", en: "Complaint letters" }, text: { hi: "विभाग, दुकान, सेवा", en: "Departments, shops, services" } },
  bank: { emoji: "🏦", title: { hi: "बैंक के आवेदन", en: "Bank applications" }, text: { hi: "KYC, ATM, खाता, स्टेटमेंट", en: "KYC, ATM, account" } },
  utility: { emoji: "💡", title: { hi: "बिजली, पानी, गैस", en: "Electricity, water, gas" }, text: { hi: "कनेक्शन, बिल, नाम बदलना", en: "Connection, bill, name change" } },
  document: { emoji: "📄", title: { hi: "दस्तावेज़ और प्रमाण पत्र", en: "Documents & certificates" }, text: { hi: "सुधार, दोबारा जारी, सत्यापन", en: "Correction, reissue" } },
  land: { emoji: "🌾", title: { hi: "ज़मीन, तहसील और किसान", en: "Land, tehsil & farmers" }, text: { hi: "खसरा-खतौनी, नापजोख, फसल नुकसान", en: "Land records, crop loss" } },
  municipal: { emoji: "🏛️", title: { hi: "नगर पालिका और पंचायत", en: "Municipality & panchayat" }, text: { hi: "सफाई, सड़क, संपत्ति कर", en: "Sanitation, roads, tax" } },
  police: { emoji: "👮", title: { hi: "पुलिस को आवेदन", en: "Police applications" }, text: { hi: "गुम सामान, शिकायत", en: "Lost items, complaints" } },
  school: { emoji: "🎓", title: { hi: "स्कूल और कॉलेज", en: "School & college" }, text: { hi: "छुट्टी, TC, फीस माफी", en: "Leave, TC, fee waiver" } },
  job: { emoji: "💼", title: { hi: "नौकरी और दफ्तर", en: "Job & office" }, text: { hi: "छुट्टी, इस्तीफा, अनुभव पत्र", en: "Leave, resignation" } },
  social: { emoji: "🤝", title: { hi: "योजना और सामाजिक सहायता", en: "Schemes & welfare" }, text: { hi: "पेंशन, राशन, सहायता", en: "Pension, ration, aid" } },
  personal: { emoji: "✍️", title: { hi: "अन्य निजी पत्र", en: "Other letters" }, text: { hi: "किरायेदार, सोसायटी, NOC", en: "Tenant, society, NOC" } },
};
