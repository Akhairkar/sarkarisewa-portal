import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; the SBI notice PDF could not be opened from the
// sandbox, so search-result extracts of exam-news coverage were used):
// news.careers360.com, hellobanker.in, projobalert.com, centralstatejobs.in
// (Advt. CRPD/CR/2026-27/17: 7,680 regular Junior Associate (Customer Support
// & Sales) posts plus backlog posts; online application 11-31 Aug 2026; age
// 20-28 as on 1 Apr 2026; graduation; fee ₹750 Gen/OBC/EWS, nil SC/ST/PwBD/XS;
// starting basic ₹26,730 = ₹24,050 + two increments for graduates);
// pw.live / practicemock / mahendras search extracts (prelims late Sep - early
// Oct 2026, mains tentatively November 2026). SBI careers portal moved to
// sbi.bank.in (search results of sbi.bank.in/web/careers). The old page's
// "12,100+ posts", "last date 10 Dec 2026" and the ₹19,900-47,920 scale were
// wrong and are removed. Backlog totals differ between reports and are left
// general; exact prelims shift dates and the result date are not stated.
export const sbiClerkJuniorAssociateRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "SBI Clerk 2026" },
  ],
  docHi: "SBI Clerk 2026",
  title: "एसबीआई क्लर्क (Junior Associate) भर्ती",
  description: "SBI Clerk (Junior Associate) 2026: 7,680 नियमित पद। आवेदन 31 अगस्त 2026 को बंद, प्रीलिम्स सितंबर-अक्टूबर 2026, मेन्स नवंबर 2026 (संभावित)। योग्यता, फीस, सैलरी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "SBI Clerk (Junior Associate) 2026: आवेदन बंद, प्रीलिम्स के बाद मेन्स की तैयारी",
  lead: "<strong>स्थिति: आवेदन बंद।</strong> भारतीय स्टेट बैंक (SBI) ने विज्ञापन CRPD/CR/2026-27/17 से Junior Associate (Customer Support &amp; Sales) यानी क्लर्क के <strong>7,680 नियमित पद</strong> निकाले थे, साथ में कुछ बैकलॉग पद भी। ऑनलाइन आवेदन <strong>11 से 31 अगस्त 2026</strong> तक चले। रिपोर्टों के अनुसार प्रीलिम्स सितंबर के आखिर और अक्टूबर 2026 की शुरुआत में हुई; मेन्स नवंबर 2026 में संभावित है।",
  facts: [
    ["स्थिति", "आवेदन बंद (31 अगस्त 2026)"],
    ["पद", "7,680 नियमित + बैकलॉग"],
    ["योग्यता", "किसी भी विषय में स्नातक, उम्र 20-28 साल"],
    ["शुरुआती बेसिक", "₹26,730 (स्नातक के 2 इंक्रीमेंट सहित)"],
  ],
  notice: "16 अक्टूबर 2026 तक: SBI Clerk 2026 का फॉर्म अब नहीं भरा जा सकता। प्रीलिम्स का रिजल्ट और मेन्स का एडमिट कार्ड SBI की करियर वेबसाइट पर आता है। ये तारीखें परीक्षा-समाचार रिपोर्टों से हैं, क्योंकि SBI का नोटिस यहां से नहीं खुल सका।",
  sections: [
    {
      id: "tarikhen",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["ऑनलाइन आवेदन", "11 अगस्त - 31 अगस्त 2026"],
          ["फीस भुगतान की आखिरी तारीख", "31 अगस्त 2026"],
          ["प्रारंभिक परीक्षा (प्रीलिम्स)", "सितंबर के आखिर - अक्टूबर 2026 की शुरुआत"],
          ["प्रीलिम्स रिजल्ट", "अभी तारीख घोषित नहीं; sbi.bank.in पर देखें"],
          ["मुख्य परीक्षा (मेन्स)", "नवंबर 2026 (संभावित)"],
        ],
      },
      callout: { kind: "info", html: "बैकलॉग पदों की अलग परीक्षा भी हुई थी। अपनी परीक्षा की सही तारीख और शिफ्ट अपने कॉल लेटर में ही देखें।" },
    },
    {
      id: "pad",
      title: "पद और योग्यता",
      list: [
        "<strong>पद:</strong> Junior Associate (Customer Support &amp; Sales), क्लर्क कैडर; 7,680 नियमित पद, अलग-अलग राज्यों/सर्किल में।",
        "<strong>शिक्षा:</strong> किसी भी विषय में स्नातक। रिपोर्टों के अनुसार अंतिम वर्ष/सेमेस्टर के छात्र भी शर्तों के साथ आवेदन कर सकते थे।",
        "<strong>उम्र:</strong> 1 अप्रैल 2026 को 20 से 28 साल। छूट: OBC 3 साल, SC/ST 5 साल, दिव्यांग 10 साल।",
        "<strong>स्थानीय भाषा:</strong> जिस राज्य के लिए आवेदन किया, वहां की स्थानीय भाषा पढ़ना-लिखना-बोलना आना चाहिए; इसकी जांच चयन से पहले होती है।",
        "<strong>फीस:</strong> सामान्य/OBC/EWS ₹750; SC/ST/दिव्यांग/पूर्व सैनिक को फीस नहीं।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया और सैलरी",
      list: [
        "प्रारंभिक परीक्षा (ऑनलाइन, क्वालिफाइंग) → मुख्य परीक्षा (ऑनलाइन) → स्थानीय भाषा टेस्ट → दस्तावेज़ जांच।",
        "अंतिम मेरिट मुख्य परीक्षा के अंकों से बनती है।",
        "शुरुआती बेसिक पे ₹26,730 (₹24,050 + स्नातकों को मिलने वाले 2 अग्रिम इंक्रीमेंट); इसके ऊपर DA और अन्य भत्ते। रिपोर्टों के अनुसार मेट्रो शहर में कुल वेतन लगभग ₹46,000 महीना।",
      ],
    },
    {
      id: "aage",
      title: "अब आगे क्या करें",
      steps: [
        "<a href=\"https://sbi.bank.in/web/careers/join-sbi\" target=\"_blank\" rel=\"noopener nofollow\">SBI करियर पेज</a> पर Junior Associate 2026 के नोटिस देखते रहें।",
        "प्रीलिम्स रिजल्ट आने पर रोल नंबर और जन्मतिथि/पासवर्ड से अपना स्कोर देखें।",
        "पास होने पर मेन्स का कॉल लेटर डाउनलोड करें और उसमें लिखी तारीख व सेंटर पर पहुंचें।",
        "अपना रजिस्ट्रेशन नंबर, पासवर्ड और जमा किए फॉर्म का प्रिंट संभाल कर रखें।",
      ],
      callout: { kind: "warn", html: "SBI नौकरी के लिए कोई एजेंट या पैसे लेकर चयन का वादा करने वाले लोगों से बचें। रिजल्ट और कॉल लेटर सिर्फ SBI की वेबसाइट से लें।" },
    },
  ],
  official: [
    { href: "https://sbi.bank.in/web/careers/join-sbi", title: "SBI करियर (Join SBI)", note: "नोटिस, कॉल लेटर, रिजल्ट" },
  ],
  faq: [
    { q: "क्या SBI Clerk 2026 का फॉर्म अभी भर सकते हैं?", a: "नहीं। आवेदन 11 से 31 अगस्त 2026 तक चले और अब बंद हैं। अगली भर्ती की सूचना SBI की करियर वेबसाइट पर आएगी।" },
    { q: "SBI Clerk 2026 में कितने पद हैं?", a: "रिपोर्टों के अनुसार 7,680 नियमित पद, साथ में कुछ बैकलॉग पद। बैकलॉग की संख्या अलग-अलग रिपोर्टों में अलग है, इसलिए SBI का नोटिस देखें।" },
    { q: "उम्र सीमा क्या है?", a: "1 अप्रैल 2026 को 20 से 28 साल। OBC को 3, SC/ST को 5 और दिव्यांग को 10 साल की छूट।" },
    { q: "SBI क्लर्क की सैलरी कितनी है?", a: "शुरुआती बेसिक ₹26,730 है (स्नातकों के 2 इंक्रीमेंट सहित), इसके ऊपर DA और भत्ते मिलते हैं।" },
  ],
  related: [
    { href: "/jobs/sbi-po-recruitment-2026-2027.html", emoji: "🏦", title: "SBI PO 2026", text: "प्रोबेशनरी ऑफिसर भर्ती" },
    { href: "/jobs/ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html", emoji: "🏛️", title: "IBPS Clerk 2026", text: "दूसरे सरकारी बैंकों में क्लर्क" },
    { href: "/service/ibps-bank-recruitment.html", emoji: "📋", title: "IBPS बैंक भर्ती", text: "बैंक परीक्षाओं की जानकारी" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://sbi.bank.in/web/careers/join-sbi", label: "🏦 SBI करियर" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
