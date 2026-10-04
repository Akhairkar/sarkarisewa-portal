import type { Promo } from "../doc/types";

// Shared bits for the traffic challan guides (/challan/). Facts in the guides
// were checked on 4 Oct 2026; each guide file lists its own sources.

export const VERIFIED = "4 अक्टूबर 2026";
export const PUBLISHED = "2026-10-04";
export const MODIFIED = "2026-10-04";

export const ECHALLAN = '<a href="https://echallan.parivahan.gov.in/" target="_blank" rel="noopener nofollow">echallan.parivahan.gov.in</a>';
export const VCOURTS = '<a href="https://vcourts.gov.in/virtualcourt/" target="_blank" rel="noopener nofollow">vcourts.gov.in</a>';

export const crumbs = (label: string) => [
  { label: "होम", href: "/" },
  { label: "ट्रैफिक चालान", href: "/challan/" },
  { label },
];

// The paid RC e-Challan report. Keep the wording honest: the official check is free.
export const promo: Promo = {
  emoji: "🚗",
  title: "गाड़ी नंबर से बकाया चालान की रिपोर्ट",
  price: "₹49 प्रति गाड़ी",
  text: `चालान official पोर्टल ${ECHALLAN} पर <strong>फ्री</strong> में देखे और भरे जा सकते हैं। अगर आप बिना चेसिस नंबर ढूंढे, एक क्लिक में साफ रिपोर्ट चाहते हैं जिसे सेव या प्रिंट किया जा सके, तो हमारी ₹49 की सुविधा सेवा इस्तेमाल करें।`,
  points: [
    "हर बकाया ई-चालान का नंबर, तारीख, राशि, उल्लंघन और राज्य",
    "रिपोर्ट न बन सके (रिकॉर्ड न मिले या सेवा उपलब्ध न हो) तो ₹49 अपने आप रिफंड",
    "₹49 हमारी सेवा का शुल्क है, चालान की राशि नहीं; चालान official पोर्टल पर ही भरें",
    "BH सीरीज़ नंबर अभी सपोर्ट नहीं हैं",
  ],
  href: "/services/rc-challan/",
  cta: "₹49 में चालान रिपोर्ट देखें",
};

type Card = { href: string; emoji: string; title: string; text: string };

export const CARDS: Record<string, Card> = {
  hub: { href: "/challan/", emoji: "🚦", title: "ट्रैफिक चालान गाइड", text: "चेक, भुगतान, कोर्ट और शिकायत" },
  status: { href: "/challan/e-challan-status-check.html", emoji: "🔍", title: "ई-चालान स्टेटस चेक", text: "चालान, गाड़ी या DL नंबर से" },
  pay: { href: "/challan/e-challan-payment.html", emoji: "💳", title: "चालान ऑनलाइन भरें", text: "Pay Now, रसीद, पैसा कटा तो क्या करें" },
  court: { href: "/challan/virtual-court-challan.html", emoji: "⚖️", title: "वर्चुअल कोर्ट चालान", text: "कोर्ट गया चालान खोजें और भरें" },
  fines: { href: "/challan/traffic-fine-list.html", emoji: "📋", title: "ट्रैफिक जुर्माना लिस्ट", text: "मोटर वाहन एक्ट की धारा-वार सज़ा" },
  lokAdalat: { href: "/challan/lok-adalat-challan.html", emoji: "🤝", title: "लोक अदालत में चालान", text: "कौन से चालान निपटते हैं, तारीख कैसे जानें" },
  wrong: { href: "/challan/wrong-challan-complaint.html", emoji: "🛑", title: "गलत चालान की शिकायत", text: "आपत्ति, कोर्ट और फर्जी SMS से बचाव" },
  delhi: { href: "/challan/delhi-traffic-challan.html", emoji: "🏙️", title: "दिल्ली ट्रैफिक चालान", text: "नोटिस, इवनिंग कोर्ट, शिकायत" },
  maharashtra: { href: "/challan/maharashtra-e-challan.html", emoji: "🛣️", title: "महाराष्ट्र ई-चालान", text: "भुगतान, मोबाइल लिंक, grievance" },
  telangana: { href: "/challan/telangana-e-challan.html", emoji: "🚓", title: "तेलंगाना ई-चालान", text: "पेंडिंग चालान, रसीद, शिकायत" },
  tool: { href: "/services/rc-challan/", emoji: "🚗", title: "RC चालान रिपोर्ट (₹49)", text: "गाड़ी नंबर से बकाया चालान की सूची" },
  dl: { href: "/service/driving-licence.html", emoji: "🪪", title: "ड्राइविंग लाइसेंस", text: "लर्नर, पक्का लाइसेंस, रिन्यूअल" },
  mparivahan: { href: "/service/mparivahan-virtual-rc-dl.html", emoji: "📱", title: "mParivahan वर्चुअल RC/DL", text: "मोबाइल में DL और RC रखें" },
};

export const cards = (...keys: (keyof typeof CARDS)[]) => keys.map((k) => CARDS[k]);
