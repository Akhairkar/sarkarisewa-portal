import type { DocGuide } from "../doc/types";

// Sources (checked 31 Oct 2026; official sites not reachable from the sandbox,
// so only facts several reports agree on are used; anything that differs
// between reports is pointed to the notification):
// UNI India (13.10.2026, official spokesperson: allotment of ration depot licences, online on
// the Antyodaya SARAL portal launched 10.10.2026, applications till 10.11.2026). Number of depots,
// fee and this round's rules not found in reliable reports: pointed to the portal. Haryana
// Assembly reply (2023) on the 2022 order: age limit up to 60 for depot holders (dated, noted).
export const haryanaRationDepotLicence2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "हरियाणा राशन डिपो लाइसेंस 2026" },
  ],
  docHi: "हरियाणा राशन डिपो लाइसेंस 2026",
  title: "हरियाणा राशन डिपो लाइसेंस 2026: सरल पोर्टल पर आवेदन 10 नवंबर तक",
  description: "हरियाणा में राशन डिपो (उचित मूल्य की दुकान) के लाइसेंस के लिए अंत्योदय सरल पोर्टल पर ऑनलाइन आवेदन 10 नवंबर 2026 तक। कौन आवेदन कर सकता है और कैसे।",
  published: "2026-10-31",
  modified: "2026-10-31",
  verified: "31 अक्टूबर 2026",
  h1: "हरियाणा राशन डिपो लाइसेंस 2026: आवेदन की आखिरी तारीख और तरीका",
  lead: "<strong>स्थिति: आवेदन चालू, 10 नवंबर 2026 तक।</strong> हरियाणा सरकार खाली <strong>राशन डिपो (उचित मूल्य की दुकान)</strong> के लाइसेंस देने के लिए <strong>अंत्योदय सरल पोर्टल</strong> पर ऑनलाइन आवेदन ले रही है। पोर्टल 10 अक्टूबर 2026 को खुला और आवेदन <strong>10 नवंबर 2026</strong> तक होंगे। ध्यान दें: यह <strong>डिपो चलाने का लाइसेंस</strong> है, सरकारी नौकरी नहीं।",
  facts: [
    ["क्या है", "राशन डिपो चलाने का लाइसेंस (नौकरी नहीं)"],
    ["आखिरी तारीख", "10 नवंबर 2026"],
    ["पोर्टल", "<a href=\"https://saralharyana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">saralharyana.gov.in</a>"],
    ["विभाग", "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले, हरियाणा"],
  ],
  notice: "किस गांव/वार्ड में कितने डिपो खाली हैं, पात्रता, प्राथमिकता और फीस इस बार की सूचना में दी गई है; आवेदन से पहले सरल पोर्टल पर पढ़ें। डिपो दिलाने के नाम पर पैसे मांगने वालों से सावधान रहें। यह साइट निजी है, हरियाणा सरकार की नहीं।",
  sections: [
    {
      id: "kya",
      title: "राशन डिपो लाइसेंस क्या है",
      list: [
        "डिपो होल्डर अपने इलाके के राशन कार्ड वालों को सरकारी दर पर अनाज बांटता है और सरकार से तय कमीशन पाता है।",
        "यह स्थायी सरकारी नौकरी नहीं, बल्कि नियम-शर्तों के साथ मिलने वाला लाइसेंस है।",
        "2022 के हरियाणा के आदेश के बारे में विधानसभा के जवाब में डिपो होल्डर की उम्र सीमा 60 साल तक बताई गई थी; इस बार की शर्तें पोर्टल पर देखें।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://saralharyana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">saralharyana.gov.in</a> पर रजिस्टर/लॉगिन करें।",
        "सेवाओं में राशन डिपो लाइसेंस आवंटन से जुड़ी सेवा खोजें और अपने ज़िले/इलाके के खाली डिपो की सूची देखें।",
        "फॉर्म भरें, मांगे गए कागज़ (जैसे परिवार पहचान पत्र, शैक्षणिक/निवास प्रमाण) अपलोड करें।",
        "10 नवंबर 2026 से पहले आवेदन जमा करें और रसीद/आवेदन नंबर संभालकर रखें।",
      ],
      callout: { kind: "warn", html: "आवेदन सिर्फ सरल पोर्टल पर होता है। \"पक्का डिपो दिला देंगे\" कहकर पैसे मांगने वालों को पैसे न दें।" },
    },
  ],
  official: [
    { href: "https://saralharyana.gov.in/", title: "अंत्योदय सरल पोर्टल, हरियाणा", note: "ऑनलाइन आवेदन" },
    { href: "https://haryanafood.gov.in/", title: "खाद्य एवं आपूर्ति विभाग, हरियाणा", note: "डिपो से जुड़ी सूचनाएं" },
  ],
  faq: [
    { q: "हरियाणा राशन डिपो के लिए आवेदन कब तक है?", a: "10 नवंबर 2026 तक अंत्योदय सरल पोर्टल पर।" },
    { q: "क्या राशन डिपो सरकारी नौकरी है?", a: "नहीं। यह डिपो चलाने का लाइसेंस है; डिपो होल्डर को अनाज बांटने पर तय कमीशन मिलता है।" },
    { q: "कितने डिपो खाली हैं?", a: "ज़िला/गांव-वार खाली डिपो की जानकारी सरल पोर्टल पर इस बार की सूचना में देखें।" },
  ],
  related: [
    { href: "/states/haryana-ration-card.html", emoji: "🍚", title: "हरियाणा राशन कार्ड", text: "आवेदन और स्टेटस" },
    { href: "/jobs/index.html", emoji: "💼", title: "सभी सरकारी नौकरियां", text: "नई भर्तियां" },
  ],
  aside: [
    { href: "https://saralharyana.gov.in/", label: "📝 saralharyana.gov.in" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
