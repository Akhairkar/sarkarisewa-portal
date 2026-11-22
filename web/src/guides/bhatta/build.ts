import type { DocGuide } from "../doc/types";

// Shared builder for the state "berojgari bhatta" pages. Every page has the
// same shape: a quick-links list first, the scheme details table (with a
// column saying how well each fact is confirmed), eligibility, documents,
// how to apply, a grid of national skill and employment schemes, other states.
// Facts were researched on 21 Nov 2026; the source notes sit with each state
// in states.ts. We could not open most official portals, so every state page
// carries a notice and a "पुष्टि" column.

export const SKILL_SCHEMES = [
  `<a href="/service/pm-kaushal-vikas-yojana.html">स्किल इंडिया / PMKVY</a> – मुफ्त स्किल ट्रेनिंग और सर्टिफिकेट`,
  `<a href="/service/pm-internship-scheme.html">PM इंटर्नशिप योजना</a> – कंपनियों में 12 महीने की इंटर्नशिप`,
  `<a href="/service/national-apprenticeship-scheme.html">राष्ट्रीय अप्रेंटिसशिप योजना (NAPS)</a> – काम सीखते हुए वजीफा`,
  `<a href="/service/ncs-national-career-service.html">नेशनल करियर सर्विस (NCS)</a> – सरकारी पोर्टल पर नौकरी की खोज`,
  `<a href="/service/pm-viksit-bharat-rozgar-yojana.html">PM विकसित भारत रोजगार योजना</a> – पहली नौकरी पर प्रोत्साहन`,
  `<a href="/service/pmegp-loan-yojana.html">PMEGP लोन योजना</a> – अपना काम शुरू करने के लिए सब्सिडी वाला लोन`,
  `<a href="/service/pm-mudra-yojana.html">PM मुद्रा योजना</a> – छोटे कारोबार के लिए लोन`,
  `<a href="/service/stand-up-india.html">स्टैंड-अप इंडिया</a> – महिला, SC और ST उद्यमियों के लिए लोन`,
  `<a href="/service/pm-vishwakarma-yojana.html">PM विश्वकर्मा योजना</a> – कारीगरों को ट्रेनिंग और टूलकिट`,
];

export const OTHER_STATES = [
  ["bihar", "बिहार"], ["rajasthan", "राजस्थान"], ["haryana", "हरियाणा"], ["himachal-pradesh", "हिमाचल प्रदेश"],
  ["jharkhand", "झारखंड"], ["madhya-pradesh", "मध्य प्रदेश"], ["uttar-pradesh", "उत्तर प्रदेश"],
  ["chhattisgarh", "छत्तीसगढ़"], ["maharashtra", "महाराष्ट्र"],
];

export type Cfg = {
  slug: string; // state slug
  hi: string;
  scheme: string; // scheme name shown in the title
  title: string;
  description: string;
  h1: string;
  lead: string;
  facts: [string, string][];
  notice: string;
  table: string[][]; // [विषय, जानकारी, पुष्टि]
  patrata: string[];
  docs: string[];
  steps: string[];
  extra?: DocGuide["sections"]; // state-specific sections placed after "aavedan"
  callout?: { kind: "info" | "warn" | "ok"; html: string };
  faq: { q: string; a: string }[];
  official?: DocGuide["official"];
};

export function build(c: Cfg): DocGuide {
  const ex = `/states/${c.slug}-employment-exchange.html`;
  return {
    state: { slug: c.slug, hi: c.hi },
    doc: "berojgari-bhatta",
    docHi: "बेरोजगारी भत्ता",
    title: c.title,
    description: c.description,
    published: "2026-11-21",
    modified: "2026-11-21",
    verified: "21 नवंबर 2026",
    h1: c.h1,
    lead: c.lead,
    facts: c.facts,
    notice: c.notice,
    sections: [
      {
        id: "aage",
        title: "रोजगार और भत्ते से जुड़ी सेवाएं",
        intro: "भत्ते के लिए ये चीजें अक्सर पहले चाहिए होती हैं:",
        list: [
          `<a href="${ex}">${c.hi} रोजगार कार्यालय (एम्प्लॉयमेंट एक्सचेंज) रजिस्ट्रेशन</a>`,
          `<a href="/states/${c.slug}-income-certificate.html">${c.hi} आय प्रमाण पत्र</a> और <a href="/states/${c.slug}-domicile-certificate.html">निवास प्रमाण पत्र</a>`,
          `<a href="/jobs/index.html">सरकारी नौकरी और भर्ती की सूची</a>`,
          `<a href="/arzi/">आवेदन पत्र और शिकायत पत्र के तैयार फॉर्मेट</a>`,
          `<a href="/states/berojgari-bhatta-2026.html">सभी राज्यों में बेरोजगारी भत्ता की स्थिति</a>`,
          `<a href="/tools/csc-locator.html">नज़दीकी CSC खोजें</a> – फॉर्म भरने में मदद`,
        ],
      },
      {
        id: "yojana",
        title: `${c.hi}: योजना की जानकारी`,
        intro: "आखिरी कॉलम बताता है कि हमें वह बात कितनी पक्की मिली।",
        table: { head: ["विषय", "जानकारी", "पुष्टि"], rows: c.table },
        callout: c.callout,
      },
      { id: "patrata", title: "पात्रता", list: c.patrata },
      { id: "dastavez", title: "ज़रूरी दस्तावेज़", list: c.docs },
      { id: "aavedan", title: "आवेदन कैसे करें", steps: c.steps },
      ...(c.extra ?? []),
      {
        id: "training",
        title: "रोजगार और ट्रेनिंग देने वाली योजनाएं",
        intro: "भत्ता सीमित समय का होता है। नौकरी या कमाई का रास्ता बनाने के लिए ये योजनाएं भी देखें:",
        list: SKILL_SCHEMES,
      },
      {
        id: "rajya",
        title: "दूसरे राज्यों में बेरोजगारी भत्ता",
        list: OTHER_STATES.filter(([s]) => s !== c.slug).map(([s, n]) => `<a href="/states/${s}-berojgari-bhatta.html">${n} बेरोजगारी भत्ता</a>`),
      },
    ],
    official: c.official ?? [],
    faq: c.faq,
    related: [
      { href: ex, emoji: "🏢", title: "रोजगार कार्यालय रजिस्ट्रेशन", text: `${c.hi} में पंजीकरण` },
      { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🎓", title: "स्किल इंडिया (PMKVY)", text: "मुफ्त ट्रेनिंग" },
      { href: "/service/pm-internship-scheme.html", emoji: "💼", title: "PM इंटर्नशिप", text: "12 महीने की इंटर्नशिप" },
      { href: "/jobs/index.html", emoji: "📢", title: "सरकारी नौकरी", text: "नई भर्तियां" },
      { href: "/service/pmegp-loan-yojana.html", emoji: "🏭", title: "PMEGP लोन", text: "अपना काम शुरू करें" },
    ],
    aside: [
      { href: ex, label: "🏢 रोजगार कार्यालय" },
      { href: "/jobs/index.html", label: "📢 सरकारी नौकरी" },
    ],
  };
}
