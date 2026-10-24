import type { DocGuide } from "./types";

// Sources (checked 24 Oct 2026; csc.gov.in and digitalseva.csc.gov.in not
// reachable from the sandbox, search-result extracts of the official pages
// used): digitalseva.csc.gov.in (login, legal page: wallet deducted but
// service not delivered within 24 hours -> email helpdesk@csc.gov.in or
// raise a ticket, with amount, CSC transaction ID, CSC ID and date),
// support.csc.gov.in / digitalseva.csc.gov.in/support/ticket ("Digitalseva
// Connect" tickets), CSC newsletter (VLEs call 1800-121-3468 for support),
// portal footer (helpdesk Mon-Sat except public holidays, 10 AM-1 PM and
// 2-6 PM), register.csc.gov.in/register/status, csc.gov.in home notice on
// Police Verification Reports. Exact lock-out times and password rules
// differ between third-party sites, so they are not stated.
export const digitalSevaPortalLogin: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "CSC रजिस्ट्रेशन", href: "/service/csc-registration-kaise-kare.html" },
    { label: "Digital Seva पोर्टल लॉगिन" },
  ],
  docHi: "Digital Seva पोर्टल लॉगिन",
  vle: true,
  title: "Digital Seva पोर्टल लॉगिन 2026: पासवर्ड, CSC ID और वॉलेट की दिक्कतें",
  description: "CSC Digital Seva पोर्टल (digitalseva.csc.gov.in) पर लॉगिन, पासवर्ड भूलने, ID लॉक होने और वॉलेट से पैसा कटने पर क्या करें। टिकट, हेल्पलाइन और ईमेल।",
  published: "2026-10-24",
  modified: "2026-10-24",
  verified: "24 अक्टूबर 2026",
  h1: "Digital Seva पोर्टल लॉगिन: पासवर्ड, CSC ID और वॉलेट की आम दिक्कतें और हल",
  lead: "<strong>Digital Seva पोर्टल</strong> (<a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digitalseva.csc.gov.in</a>) CSC चलाने वालों (VLE) का मुख्य पोर्टल है, जहां से सरकारी और दूसरी सेवाएं दी जाती हैं। लॉगिन CSC ID से होता है। पासवर्ड भूलें तो लॉगिन पेज के <strong>Forgot Password</strong> से नया बनाएं; पैसा कटे पर सेवा न मिले तो <strong>24 घंटे के अंदर</strong> टिकट या ईमेल करें।",
  facts: [
    ["पोर्टल", "<a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digitalseva.csc.gov.in</a>"],
    ["हेल्पलाइन", "<a href=\"tel:18001213468\">1800-121-3468</a>"],
    ["ईमेल", "helpdesk@csc.gov.in"],
    ["समय", "सोम-शनि, 10-1 और 2-6 बजे (छुट्टी छोड़कर)"],
  ],
  notice: "अपना CSC ID, पासवर्ड या OTP किसी को न बताएं, चाहे वह खुद को CSC का अधिकारी बताए। CSC की असली मदद सिर्फ ऊपर दी गई हेल्पलाइन, ईमेल और पोर्टल के टिकट से लें। यह साइट निजी है, CSC की नहीं।",
  sections: [
    {
      id: "login",
      title: "Digital Seva पोर्टल पर लॉगिन कैसे करें",
      steps: [
        "<a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digitalseva.csc.gov.in</a> खोलें और लॉगिन चुनें।",
        "अपना CSC ID और पासवर्ड डालें, कैप्चा भरें।",
        "रजिस्टर्ड मोबाइल/ईमेल पर आया OTP डालें (अगर मांगा जाए)।",
        "लॉगिन के बाद सेवाएं, वॉलेट और रिपोर्ट डैशबोर्ड से खोलें।",
      ],
      callout: { kind: "info", html: "अभी CSC ID नहीं है? पहले <a href=\"/service/csc-tec-certificate.html\">TEC सर्टिफिकेट</a> लें, फिर <a href=\"/service/csc-registration-kaise-kare.html\">CSC रजिस्ट्रेशन</a> करें।" },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और क्या करें",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["पासवर्ड भूल गए", "लॉगिन पेज पर <strong>Forgot Password</strong> चुनें, CSC ID डालें और रजिस्टर्ड मोबाइल/ईमेल पर आए OTP या लिंक से नया पासवर्ड बनाएं।"],
          ["कई बार गलत पासवर्ड से ID लॉक", "कुछ देर रुककर दोबारा कोशिश करें। फिर भी न खुले तो हेल्पलाइन या टिकट से बताएं। बार-बार गलत पासवर्ड न डालें।"],
          ["OTP नहीं आ रहा", "देखें कि रजिस्टर्ड मोबाइल नंबर चालू है और SMS ब्लॉक नहीं है। मोबाइल नंबर बदल गया हो तो CSC हेल्पडेस्क या अपने ज़िले की CSC टीम से नंबर बदलवाएं।"],
          ["वॉलेट से पैसा कटा, सेवा नहीं मिली", "24 घंटे के अंदर पोर्टल पर टिकट डालें या helpdesk@csc.gov.in पर ईमेल करें: रकम, CSC ट्रांज़ैक्शन ID, CSC ID और तारीख लिखें।"],
          ["नया CSC आवेदन कहां तक पहुंचा", "<a href=\"https://register.csc.gov.in/register/status\" target=\"_blank\" rel=\"noopener nofollow\">register.csc.gov.in/register/status</a> पर आवेदन नंबर से देखें।"],
          ["ID बंद होने की सूचना", "CSC की वेबसाइट पर सूचना है कि बिना पुलिस वेरिफिकेशन रिपोर्ट वाले CSC बंद किए जाएंगे। अपनी रिपोर्ट पोर्टल पर अपडेट रखें और कारण हेल्पडेस्क से पूछें।"],
        ],
      },
    },
    {
      id: "ticket",
      title: "शिकायत (टिकट) कैसे डालें",
      steps: [
        "<a href=\"https://support.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">support.csc.gov.in</a> (Digitalseva Connect) पर अपने CSC ID से लॉगिन करें।",
        "नया टिकट बनाएं, सेवा और दिक्कत का प्रकार चुनें।",
        "ट्रांज़ैक्शन ID, तारीख, रकम और स्क्रीनशॉट लगाएं।",
        "टिकट नंबर संभालकर रखें; जवाब न आए तो हेल्पलाइन पर इसी नंबर से पूछें।",
      ],
    },
  ],
  official: [
    { href: "https://digitalseva.csc.gov.in/", title: "Digital Seva पोर्टल", note: "digitalseva.csc.gov.in" },
    { href: "https://support.csc.gov.in/", title: "Digitalseva Connect (टिकट)", note: "support.csc.gov.in" },
    { href: "tel:18001213468", title: "CSC हेल्पलाइन", note: "1800-121-3468" },
  ],
  faq: [
    { q: "Digital Seva पोर्टल का पासवर्ड कैसे रीसेट करें?", a: "digitalseva.csc.gov.in के लॉगिन पेज पर Forgot Password चुनें, CSC ID डालें और रजिस्टर्ड मोबाइल/ईमेल पर आए OTP या लिंक से नया पासवर्ड बनाएं।" },
    { q: "वॉलेट से पैसा कट गया पर सेवा नहीं मिली तो क्या करें?", a: "24 घंटे के अंदर पोर्टल पर टिकट डालें या helpdesk@csc.gov.in पर रकम, CSC ट्रांज़ैक्शन ID, CSC ID और तारीख के साथ ईमेल करें।" },
    { q: "CSC हेल्पलाइन नंबर क्या है?", a: "1800-121-3468। समय सोमवार से शनिवार, सुबह 10 से 1 और दोपहर 2 से शाम 6 बजे (सरकारी छुट्टी छोड़कर)।" },
    { q: "रजिस्टर्ड मोबाइल नंबर बदल गया है, OTP कैसे आएगा?", a: "CSC हेल्पडेस्क या अपने ज़िले की CSC टीम से संपर्क करके नंबर अपडेट करवाएं। किसी अनजान व्यक्ति को अपना ID या पासवर्ड न दें।" },
  ],
  related: [
    { href: "/service/csc-registration-kaise-kare.html", emoji: "🏪", title: "CSC रजिस्ट्रेशन", text: "CSC सेंटर कैसे खोलें" },
    { href: "/service/csc-tec-certificate.html", emoji: "🎓", title: "TEC सर्टिफिकेट", text: "कोर्स, फीस और परीक्षा" },
    { href: "/service/csc-services-list.html", emoji: "🧾", title: "CSC सेवाओं की सूची", text: "कौन सी सेवाएं और कमाई" },
  ],
  aside: [
    { href: "https://digitalseva.csc.gov.in/", label: "🔐 digitalseva.csc.gov.in" },
    { href: "/claim-your-csc.html", label: "🏪 अपना केंद्र फ्री जोड़ें" },
  ],
};
