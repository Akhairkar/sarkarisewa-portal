import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; ibps.in not reachable from the sandbox,
// search-result extracts of exam news used): careers360 news (prelims call
// letter out about 1 Oct 2026, exam from 10 Oct), karmactive (CRP CSA-XVI
// prelims 10-11 Oct 2026; vacancies 11,403 in the notification, later reported
// revised to 11,663), adda247 (shift analysis 10 and 11 Oct 2026; prelims 100
// questions / 100 marks / 60 minutes, 20-minute sections, 0.25 negative),
// mahendras, sreedharscce (mains 27 Dec 2026 tentative). Application 1-21 Aug
// 2026 and LPT/no interview as in /service/ibps-bank-recruitment. The old
// page's "notification 1 July, last date 21 July, prelims 24/25/31 Aug, mains
// 13 Oct, 6128 posts" were wrong and are removed.
export const ibpsClerk2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "IBPS क्लर्क 2026" },
  ],
  docHi: "IBPS क्लर्क 2026 परीक्षा",
  title: "IBPS क्लर्क / CSA XVI 2026 परीक्षा तिथि, प्रीलिम्स-मेन्स टाइमटेबल व एडमिट कार्ड",
  description: "IBPS क्लर्क (CRP CSA-XVI) 2026: प्रीलिम्स 10-11 अक्टूबर 2026 को हुई, मेन्स 27 दिसंबर 2026 (संभावित)। पद लगभग 11,663, परीक्षा पैटर्न, नेगेटिव मार्किंग और आगे की प्रक्रिया।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "IBPS क्लर्क 2026: प्रीलिम्स 10-11 अक्टूबर को हुई, मेन्स 27 दिसंबर (संभावित)",
  lead: "IBPS की सरकारी बैंकों में क्लर्क (Customer Service Associate, CRP CSA-XVI) भर्ती की प्रारंभिक परीक्षा <strong>10 और 11 अक्टूबर 2026</strong> को हुई। अब प्रीलिम्स रिज़ल्ट आना है, और मुख्य परीक्षा <strong>27 दिसंबर 2026</strong> को संभावित है। आवेदन 1 से 21 अगस्त 2026 तक हुए थे और अब बंद हैं।",
  facts: [
    ["प्रीलिम्स", "10-11 अक्टूबर 2026 (हो चुकी)"],
    ["मेन्स", "27 दिसंबर 2026 (संभावित)"],
    ["पद (रिपोर्ट के अनुसार)", "लगभग 11,663"],
    ["इंटरव्यू", "नहीं होता"],
  ],
  notice: "16 अक्टूबर 2026 तक: प्रीलिम्स हो चुकी है, रिज़ल्ट का इंतज़ार है। आवेदन बंद है। रिज़ल्ट और मेन्स का एडमिट कार्ड सिर्फ ibps.in पर आएगा।",
  sections: [
    {
      id: "tarikhen",
      title: "IBPS क्लर्क 2026 की तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन", "1 - 21 अगस्त 2026 (बंद)"],
          ["प्रीलिम्स एडमिट कार्ड", "लगभग 1 अक्टूबर 2026 से"],
          ["प्रीलिम्स परीक्षा", "10 और 11 अक्टूबर 2026"],
          ["प्रीलिम्स रिज़ल्ट", "अभी घोषित नहीं"],
          ["मेन्स परीक्षा", "27 दिसंबर 2026 (संभावित)"],
          ["प्रोविज़नल अलॉटमेंट", "मेन्स के बाद; तारीख IBPS बताएगा"],
        ],
      },
      callout: { kind: "info", html: "ये तारीखें परीक्षा समाचार रिपोर्टों से हैं; ibps.in यहां से नहीं खुल सका। अधिसूचना में 11,403 पद थे, जिन्हें बाद में लगभग 11,663 बताया गया। अंतिम संख्या <a href=\"https://www.ibps.in/\" target=\"_blank\" rel=\"noopener nofollow\">ibps.in</a> पर देखें।" },
    },
    {
      id: "pattern",
      title: "परीक्षा पैटर्न",
      list: [
        "<strong>प्रीलिम्स:</strong> 100 प्रश्न, 100 अंक, 60 मिनट। अंग्रेज़ी, संख्यात्मक योग्यता (Numerical Ability) और रीज़निंग; हर भाग के लिए 20 मिनट।",
        "<strong>नेगेटिव मार्किंग:</strong> हर गलत जवाब पर उस प्रश्न के 1/4 (0.25) अंक कटते हैं।",
        "प्रीलिम्स सिर्फ क्वालिफाइंग है; अंतिम मेरिट <strong>मेन्स के अंकों</strong> से बनती है।",
        "<strong>मेन्स:</strong> सामान्य/वित्तीय जागरूकता, सामान्य अंग्रेज़ी, रीज़निंग और कंप्यूटर, संख्यात्मक योग्यता। विस्तृत पैटर्न अधिसूचना में देखें।",
        "<strong>स्थानीय भाषा परीक्षा (LPT):</strong> जिस राज्य के लिए आवेदन किया, उसकी भाषा की परीक्षा। क्लर्क में इंटरव्यू नहीं होता।",
      ],
    },
    {
      id: "result",
      title: "प्रीलिम्स रिज़ल्ट और मेन्स एडमिट कार्ड कैसे देखें",
      steps: [
        "<a href=\"https://www.ibps.in/\" target=\"_blank\" rel=\"noopener nofollow\">ibps.in</a> खोलें और CRP CSA-XVI (Clerk) वाला लिंक चुनें।",
        "रजिस्ट्रेशन नंबर/रोल नंबर और पासवर्ड या जन्मतिथि डालें।",
        "रिज़ल्ट स्थिति देखें; पास होने पर मेन्स का कॉल लेटर उसी तरह डाउनलोड करें।",
        "कॉल लेटर का प्रिंट और मूल फोटो पहचान पत्र परीक्षा में साथ ले जाएं।",
      ],
      callout: { kind: "warn", html: "IBPS रिज़ल्ट या नौकरी के लिए फोन पर पैसे नहीं मांगता। \"सेटिंग\" का वादा करने वाले ठग होते हैं।" },
    },
  ],
  official: [
    { href: "https://www.ibps.in/", title: "IBPS आधिकारिक वेबसाइट", note: "रिज़ल्ट, कॉल लेटर, अलॉटमेंट" },
  ],
  faq: [
    { q: "IBPS क्लर्क 2026 प्रीलिम्स कब हुई?", a: "10 और 11 अक्टूबर 2026 को, कई शिफ्टों में।" },
    { q: "IBPS क्लर्क 2026 मेन्स कब है?", a: "रिपोर्टों के अनुसार 27 दिसंबर 2026 को (संभावित)। पक्की तारीख ibps.in पर देखें।" },
    { q: "क्या IBPS क्लर्क में इंटरव्यू होता है?", a: "नहीं। मेन्स के अंकों से मेरिट बनती है और फिर स्थानीय भाषा परीक्षा होती है।" },
    { q: "क्या अभी आवेदन कर सकते हैं?", a: "नहीं। आवेदन 1 से 21 अगस्त 2026 तक हुए थे। अगली क्लर्क भर्ती की सूचना ibps.in पर आएगी।" },
  ],
  related: [
    { href: "/service/ibps-bank-recruitment.html", emoji: "🏦", title: "IBPS बैंक भर्ती", text: "PO और क्लर्क: योग्यता, उम्र, फीस" },
    { href: "/exams/ibps-po-2026.html", emoji: "💼", title: "IBPS PO 2026 परीक्षा", text: "मेन्स और इंटरव्यू की स्थिति" },
    { href: "/exams/banking-ibps-sbi-calendar-2026-2027.html", emoji: "📅", title: "बैंकिंग परीक्षा कैलेंडर", text: "IBPS, SBI, RBI" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.ibps.in/", label: "🏦 ibps.in खोलें" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
