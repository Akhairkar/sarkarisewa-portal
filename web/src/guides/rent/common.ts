import type { Section } from "../doc/types";

// Shared bits for the rent agreement guides (/rent-agreement/). Facts were
// checked on 4 Oct 2026; each guide file lists its own sources. Central law
// used across the cluster (all read from the official text):
// - Registration Act, 1908 (indiacode.nic.in, the_registration_act,1908.pdf):
//   s.17(1)(d) leases from year to year / term exceeding one year / reserving a
//   yearly rent must be registered; s.18(c) leases not exceeding one year are
//   optionally registrable; s.23 present within four months of execution;
//   s.49 effect of non-registration; s.2(7) "lease" includes an agreement to lease.
// - Information Technology Act, 2000 (indiacode.nic.in, it_act_2000_updated.pdf):
//   s.1(4) + First Schedule; s.3A + Second Schedule. Amendments read on
//   cca.gov.in: S.O. 4720(E) of 26 Sep 2022 (First Schedule: entry 5 "contract
//   for sale or conveyance of immovable property" omitted; entries 1-2 narrowed),
//   S.O. 1119(E) of 1 Mar 2019 ("Aadhaar or other e-KYC"), S.O. 3472(E) of
//   29 Sep 2020 (entry 2, trusted third party). CCA eSign page and eSign FAQ
//   (cca.gov.in/esign.html, ESIGNFAQ.pdf).

export const VERIFIED = "4 अक्टूबर 2026";
export const PUBLISHED = "2026-10-04";
export const MODIFIED = "2026-10-04";

export const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;

export const crumbs = (label: string) => [
  { label: "होम", href: "/" },
  { label: "रेंट एग्रीमेंट", href: "/rent-agreement/" },
  { label },
];

// Product teaser: one line, no price, no link (the product is not live yet).
export const SOON: Section["callout"] = {
  kind: "info",
  html: "<strong>जल्द:</strong> ऑनलाइन रेंट एग्रीमेंट (e-Stamp + Aadhaar e-Sign) SarkariSewa पर",
};

// Every page carries this.
export const NOT_ADVICE =
  "यह पेज आम जानकारी के लिए है, कानूनी सलाह नहीं। स्टाम्प ड्यूटी और रजिस्ट्रेशन के नियम राज्य सरकारें बदलती रहती हैं; एग्रीमेंट साइन करने से पहले अपने राज्य के official पोर्टल या सब-रजिस्ट्रार ऑफिस से ताज़ा दर और प्रक्रिया पक्की करें, और ज़रूरत हो तो वकील से सलाह लें।";

type Card = { href: string; emoji: string; title: string; text: string };

export const CARDS: Record<string, Card> = {
  hub: { href: "/rent-agreement/", emoji: "🏠", title: "रेंट एग्रीमेंट गाइड", text: "11 महीने, स्टाम्प, रजिस्ट्रेशन, e-Sign" },
  format: { href: "/rent-agreement/format.html", emoji: "📝", title: "रेंट एग्रीमेंट फॉर्मेट", text: "हर क्लॉज़ का मतलब और आम गलतियां" },
  police: { href: "/rent-agreement/tenant-police-verification.html", emoji: "👮", title: "किरायेदार पुलिस वेरिफिकेशन", text: "दिल्ली, महाराष्ट्र, UP, हरियाणा" },
  maharashtra: { href: "/rent-agreement/maharashtra.html", emoji: "🏙️", title: "महाराष्ट्र Leave and License", text: "रजिस्ट्रेशन ज़रूरी, स्टाम्प ड्यूटी" },
  up: { href: "/rent-agreement/uttar-pradesh.html", emoji: "🕌", title: "उत्तर प्रदेश किरायानामा", text: "सरकारी पोर्टल पर ऑनलाइन स्टाम्पिंग" },
  gujarat: { href: "/rent-agreement/gujarat.html", emoji: "🏘️", title: "गुजरात रेंट एग्रीमेंट", text: "2025 की नई स्टाम्प ड्यूटी" },
  stMh: { href: "/states/maharashtra.html", emoji: "🗺️", title: "महाराष्ट्र की सरकारी सेवाएं", text: "राज्य की सभी गाइड" },
  stUp: { href: "/states/uttar-pradesh.html", emoji: "🗺️", title: "उत्तर प्रदेश की सरकारी सेवाएं", text: "राज्य की सभी गाइड" },
  stGj: { href: "/states/gujarat.html", emoji: "🗺️", title: "गुजरात की सरकारी सेवाएं", text: "राज्य की सभी गाइड" },
  documents: { href: "/documents/", emoji: "📂", title: "ज़रूरी दस्तावेज़", text: "सरकारी कागज़ात की गाइड" },
  aadhaar: { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड", text: "मोबाइल लिंक, अपडेट, e-KYC" },
};

export const cards = (...keys: (keyof typeof CARDS)[]) => keys.map((k) => CARDS[k]);
