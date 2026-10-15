import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB / PFRDA press release 19 Dec 2025 "Key
// amendments in PFRDA (Exits and Withdrawals under the NPS) Regulations, 2015"
// (non-govt: normal exit up to 80% lump sum, at least 20% annuity; corpus up
// to ₹8 lakh can be taken fully; ₹8-12 lakh: up to ₹6 lakh lump sum + rest as
// SUR (min 6 yrs) or annuity; premature exit 20/80, ₹5 lakh full-withdrawal
// limit; All Citizen vesting 15 years or age 60, 5-year lock-in removed;
// government sector stays 60/40; entry and exit age raised to 85; automatic
// continuation); PFRDA FAQ "NPS - All Citizen Model" (Tier I min ₹500 per
// contribution and ₹1,000 a year; account frozen if not met); NPS Trust
// corporate FAQ (80CCD(1B) extra deduction up to ₹50,000 over the ₹1.5 lakh
// 80CCE limit); NPS Trust eNPS FAQ (online opening). Returns, fund manager
// charges and new-tax-regime details are not stated.
export const nationalPensionSystem: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "राष्ट्रीय पेंशन प्रणाली (NPS)" },
  ],
  docHi: "राष्ट्रीय पेंशन प्रणाली (NPS)",
  title: "राष्ट्रीय पेंशन प्रणाली (NPS) 2026",
  description: "PFRDA द्वारा विनियमित एक स्वैच्छिक, बाज़ार-लिंक्ड सेवानिवृत्ति बचत योजना, जो सरकारी और निजी-क्षेत्र के कर्मचारियों सहित सभी भारतीय नागरिकों के लिए खुली है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "NPS (राष्ट्रीय पेंशन प्रणाली) 2026: खाता कैसे खोलें, न्यूनतम जमा, टैक्स छूट और नए निकासी नियम",
  lead: "NPS (National Pension System) पेंशन नियामक PFRDA की निगरानी में चलने वाली स्वैच्छिक रिटायरमेंट बचत योजना है। इसमें जमा पैसा बाज़ार (शेयर, बॉन्ड) में लगता है, इसलिए रिटर्न तय नहीं होता। दिसंबर 2025 के नए नियमों से गैर-सरकारी सदस्य रिटायरमेंट पर जमा राशि का <strong>80% तक एकमुश्त</strong> निकाल सकते हैं और कम से कम 20% से पेंशन (annuity) खरीदनी होती है; NPS में 85 साल की उम्र तक रह सकते हैं।",
  facts: [
    ["नियामक", "PFRDA (पेंशन निधि विनियामक और विकास प्राधिकरण)"],
    ["न्यूनतम जमा (Tier I)", "एक बार में ₹500, साल में कम से कम ₹1,000"],
    ["निकासी (गैर-सरकारी)", "80% तक एकमुश्त, कम से कम 20% annuity"],
    ["अतिरिक्त टैक्स छूट", "धारा 80CCD(1B) में ₹50,000 तक"],
  ],
  notice: "<strong>ध्यान दें:</strong> NPS में रिटर्न बाज़ार पर निर्भर है, कोई तय पेंशन की गारंटी नहीं। कम आय वाले और आयकर न भरने वाले 18-40 साल के लोग तय पेंशन के लिए <a href=\"/service/atal-pension-yojana.html\">अटल पेंशन योजना</a> देख सकते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "NPS क्या है और कौन जुड़ सकता है",
      intro: "NPS में आप नौकरी के दौरान नियमित पैसा जमा करते हैं, जो पेंशन फंड मैनेजर निवेश करते हैं। रिटायरमेंट पर जमा रकम का एक हिस्सा एकमुश्त मिलता है और बाकी से हर महीने पेंशन (annuity) मिलती है।",
      list: [
        "<strong>All Citizen Model:</strong> कोई भी भारतीय नागरिक (NRI भी) खुद खाता खोल सकता है।",
        "<strong>Corporate Model:</strong> निजी कंपनियों के कर्मचारी, कंपनी के ज़रिये।",
        "<strong>सरकारी क्षेत्र:</strong> केंद्र/राज्य सरकार के कर्मचारी (केंद्रीय कर्मचारियों के लिए 1 अप्रैल 2025 से NPS के तहत एकीकृत पेंशन योजना UPS का विकल्प भी है)।",
        "<strong>उम्र:</strong> दिसंबर 2025 के नियमों के बाद अधिकतम प्रवेश और निकास उम्र 85 साल।",
      ],
    },
    {
      id: "tier",
      title: "Tier I और Tier II खाता",
      table: {
        head: ["खाता", "क्या है"],
        rows: [
          ["Tier I", "मुख्य पेंशन खाता; निकासी पर नियम लागू; टैक्स छूट इसी पर। एक बार में कम से कम ₹500 और साल में कम से कम ₹1,000 जमा, वरना खाता फ्रीज़ हो जाता है"],
          ["Tier II", "ऐच्छिक बचत खाता; पैसा जब चाहें निकाल सकते हैं; Tier I होना ज़रूरी। <a href=\"/service/nps-tier2-account-activation.html\">Tier II कैसे चालू करें</a>"],
        ],
      },
    },
    {
      id: "khata",
      title: "NPS खाता कैसे खोलें",
      steps: [
        "<strong>ऑनलाइन (eNPS):</strong> CRA की eNPS वेबसाइट (जैसे <a href=\"https://enps.nsdl.com/\" target=\"_blank\" rel=\"noopener nofollow\">enps.nsdl.com</a>) पर आधार/PAN से KYC करके खाता खोलें।",
        "<strong>ऑफलाइन:</strong> किसी बैंक शाखा या डाकघर जो NPS का Point of Presence (POP) है, वहां फॉर्म भरकर।",
        "पेंशन फंड मैनेजर और निवेश का तरीका (Auto या Active choice) चुनें, नॉमिनी जोड़ें।",
        "पहला योगदान (कम से कम ₹500) जमा करें। आपको PRAN (Permanent Retirement Account Number) मिलता है।",
      ],
    },
    {
      id: "nikasi",
      title: "निकासी के नए नियम (गैर-सरकारी सदस्य, दिसंबर 2025 से)",
      table: {
        head: ["स्थिति", "नियम"],
        rows: [
          ["सामान्य निकास (60 साल, या All Citizen में 15 साल पूरे)", "80% तक एकमुश्त, कम से कम 20% से annuity"],
          ["कुल जमा ₹8 लाख तक", "पूरी रकम एकमुश्त ले सकते हैं (या किस्तों में)"],
          ["कुल जमा ₹8 लाख से ₹12 लाख", "₹6 लाख तक एकमुश्त, बाकी कम से कम 6 साल की किस्तों (SUR) या annuity में; या 80/20"],
          ["समय से पहले निकास", "20% तक एकमुश्त, कम से कम 80% annuity; जमा ₹5 लाख तक हो तो पूरी रकम"],
          ["सदस्य की मृत्यु", "नॉमिनी को पूरी रकम एकमुश्त"],
        ],
      },
      callout: { kind: "info", html: "सरकारी कर्मचारियों के लिए सामान्य निकास पर पहले जैसा 60% तक एकमुश्त और कम से कम 40% annuity का नियम है। सही नियम अपने CRA/नोडल कार्यालय से पक्का करें।" },
    },
    {
      id: "tax",
      title: "टैक्स छूट",
      list: [
        "धारा 80CCD(1B) में ₹50,000 तक की अतिरिक्त छूट, जो 80CCE की ₹1.5 लाख की सीमा के ऊपर है (पुरानी टैक्स व्यवस्था में)।",
        "नियोक्ता का योगदान धारा 80CCD(2) में अलग से छूट पाता है; सीमा और नई टैक्स व्यवस्था के नियम अपने टैक्स सलाहकार से पक्का करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.pfrda.org.in/", title: "PFRDA (पेंशन नियामक)" },
    { href: "https://npstrust.org.in/", title: "NPS Trust: योजना की जानकारी और FAQ" },
    { href: "https://enps.nsdl.com/", title: "eNPS (Protean CRA): ऑनलाइन खाता और योगदान" },
  ],
  faq: [
    { q: "NPS में कम से कम कितना जमा करना होता है?", a: "Tier I में एक बार में कम से कम ₹500 और साल में कम से कम ₹1,000। साल में ₹1,000 न जमा हो तो खाता फ्रीज़ हो जाता है और दोबारा चालू करने के लिए न्यूनतम राशि जमा करनी होती है।" },
    { q: "रिटायरमेंट पर NPS से कितना पैसा एकमुश्त मिलता है?", a: "दिसंबर 2025 के नियमों के अनुसार गैर-सरकारी सदस्य 80% तक एकमुश्त ले सकते हैं, कम से कम 20% से पेंशन खरीदनी होती है। कुल जमा ₹8 लाख तक हो तो पूरी रकम निकाल सकते हैं। सरकारी कर्मचारियों के लिए 60/40 नियम है।" },
    { q: "NPS में अधिकतम उम्र क्या है?", a: "दिसंबर 2025 से NPS में प्रवेश और निकास की अधिकतम उम्र 85 साल है।" },
    { q: "NPS और अटल पेंशन योजना में क्या फर्क है?", a: "NPS में पेंशन बाज़ार के रिटर्न पर निर्भर है और कोई भी नागरिक जुड़ सकता है। अटल पेंशन योजना में ₹1,000 से ₹5,000 की तय पेंशन मिलती है, लेकिन वह सिर्फ 18-40 साल के आयकर न भरने वालों के लिए है।" },
  ],
  related: [
    { href: "/service/atal-pension-yojana.html", emoji: "👴", title: "अटल पेंशन योजना", text: "₹1,000-₹5,000 तय पेंशन" },
    { href: "/service/nps-tier2-account-activation.html", emoji: "💼", title: "NPS Tier II", text: "Tier II खाता कैसे चालू करें" },
    { href: "/service/epfo-higher-pension-option.html", emoji: "🏢", title: "EPFO हायर पेंशन", text: "PF कर्मचारियों के लिए" },
    { href: "/service/sukanya-samriddhi-yojana.html", emoji: "👧", title: "सुकन्या समृद्धि", text: "बेटी के लिए बचत" },
  ],
  aside: [
    { href: "https://enps.nsdl.com/", label: "💼 eNPS खाता खोलें" },
    { href: "/service/atal-pension-yojana.html", label: "👴 अटल पेंशन योजना" },
  ],
};
