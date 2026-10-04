// Language helpers. Hindi pages live at the root, English at /en/...
// Components read the language from the URL, so pages do not pass it around.

export type Lang = "hi" | "en";
export type Text = string | { hi: string; en: string };

// Sections written only in English (they rank for English searches).
const EN_ONLY = ["/gst/"];

export const langOf = (url: URL): Lang =>
  url.pathname === "/en" || url.pathname.startsWith("/en/") || EN_ONLY.some((p) => url.pathname.startsWith(p)) ? "en" : "hi";

/** Pick the string for a language. Plain strings are the same in both. */
export const t = (v: Text, lang: Lang): string => (typeof v === "string" ? v : v[lang]);

/** Pages that exist in both languages (Hindi path). */
export const BILINGUAL = new Set([
  "/", "/documents/", "/students/", "/yojana/", "/tools/", "/near-me/", "/states/", "/paid-services/",
]);

/** Link target for the current language: bilingual pages get their /en/ twin. */
export function localize(href: string, lang: Lang): string {
  if (lang !== "en" || !href.startsWith("/") || href.startsWith("/en/")) return href;
  const [p, hash] = href.split("#");
  return BILINGUAL.has(p) ? `/en${p}${hash ? "#" + hash : ""}` : href;
}

/** Hindi path of a page, whichever language URL it is given. */
export const hiPath = (path: string) => (path === "/en" || path === "/en/" ? "/" : path.replace(/^\/en\//, "/"));

/** URL of the same page in the other language, or null if it has none. */
export function twin(path: string): { hi: string; en: string } | null {
  const hi = hiPath(path);
  return BILINGUAL.has(hi) ? { hi, en: `/en${hi}` } : null;
}

// Shared UI strings
export const UI = {
  tagline: { hi: "सरकारी काम, आसान भाषा में", en: "Government services, made simple" },
  home: { hi: "होम", en: "Home" },
  search: { hi: "खोजें", en: "Search" },
  searchPh: { hi: "जैसे: राशन कार्ड, लेबर कार्ड, SSC भर्ती…", en: "e.g. ration card, labour card, SSC jobs…" },
  skip: { hi: "सीधे जानकारी पर जाएं", en: "Skip to content" },
  menu: { hi: "मुख्य मेनू", en: "Main menu" },
  mobileMenu: { hi: "मोबाइल मेनू", en: "Mobile menu" },
  telegram: { hi: "Telegram चैनल Join करें", en: "Join our Telegram channel" },
  switchTo: { hi: "Read in English", en: "हिंदी में पढ़ें" },
  faq: { hi: "अक्सर पूछे जाने वाले सवाल", en: "Frequently asked questions" },
  explore: { hi: "ये भी देखें 👀", en: "You may also like 👀" },
  exploreLead: { hi: "लोग इन्हें सबसे ज़्यादा इस्तेमाल कर रहे हैं", en: "Most used by visitors right now" },
  footerAbout: {
    hi: "सरकारी दस्तावेज़, योजनाएं और नौकरियों की सही जानकारी, आसान भाषा में। हर जानकारी के साथ official link।",
    en: "Accurate, easy-to-read guides to Indian government documents, schemes and jobs, with official links.",
  },
  footerNote: {
    hi: "SarkariSewa India एक स्वतंत्र जानकारी पोर्टल है। हम किसी भी सरकारी विभाग से जुड़े नहीं हैं। आवेदन हमेशा official वेबसाइट पर ही करें।",
    en: "SarkariSewa India is an independent information portal and is not affiliated with any government department. Always apply on the official website.",
  },
  officialTitle: { hi: "Official links", en: "Official links" },
  officialLead: {
    hi: "ये सरकारी वेबसाइट/नंबर हैं। आवेदन और भुगतान सिर्फ इन्हीं पर करें।",
    en: "These are official government websites and numbers. Apply and pay only here.",
  },
  lastChecked: { hi: "आखिरी जांच", en: "Last checked" },
} as const;
