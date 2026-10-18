import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; rect.crpf.gov.in could not be opened from the
// sandbox, so search extracts of coverage of the official advertisement
// R.II-21/2026-Sports were used and cross-checked):
// - pw.live/news/crpf-sports-quota-recruitment-2026, karmasandhan.com,
//   agrijob.in, helloscholar.in, freejobalert.com, odishajobnotice.in,
//   educationpost.in: 521 posts = HC (GD) 182 (M 150, F 32) + CT (GD) 339
//   (M 258, F 81); online 12 Oct - 11 Nov 2026 (23:59) at rect.crpf.gov.in;
//   correction 12-14 Nov 2026; age 18-23 on 01.08.2026; HC 12th pass, CT 10th
//   pass; HC Level-4 Rs 25,500-81,100, CT Level-3 Rs 21,700-69,100; fee Rs 100
//   for male UR/OBC/EWS, women/SC/ST/ESM exempt; selection: documents, PST,
//   sports trial, medical; 22 sports disciplines.
// Not confirmed (left to the notification): age relaxation, height/chest
// standards, exact sports-achievement period, notification date (17/21/22 Sep
// reported differently).
export const crpfSportsQuotaHeadConstableConstableRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "CRPF Sports Quota 2026" },
  ],
  docHi: "CRPF स्पोर्ट्स कोटा भर्ती",
  title: "CRPF स्पोर्ट्स कोटा भर्ती 2026: हेड कांस्टेबल, कांस्टेबल 521 पद",
  description: "CRPF स्पोर्ट्स कोटा 2026: हेड कांस्टेबल (GD) 182 और कांस्टेबल (GD) 339, कुल 521 पद। खिलाड़ी 11 नवंबर 2026 तक rect.crpf.gov.in पर आवेदन करें।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "CRPF स्पोर्ट्स कोटा भर्ती 2026: खिलाड़ियों के लिए 521 पद",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> केंद्रीय रिज़र्व पुलिस बल (CRPF) ने खेल कोटे से <strong>हेड कांस्टेबल (GD) के 182 और कांस्टेबल (GD) के 339</strong>, कुल 521 पद निकाले हैं। यह भर्ती केवल उन खिलाड़ियों के लिए है जिनके पास तय खेल उपलब्धि है। ऑनलाइन फॉर्म <strong>12 अक्टूबर से 11 नवंबर 2026</strong> तक rect.crpf.gov.in पर भरा जा सकता है।",
  facts: [
    ["कुल पद", "521 (हेड कांस्टेबल 182, कांस्टेबल 339)"],
    ["आखिरी तारीख", "11 नवंबर 2026 (रात 11:59)"],
    ["उम्र", "18 से 23 साल (1 अगस्त 2026 को)"],
    ["आवेदन", "<a href=\"https://rect.crpf.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rect.crpf.gov.in</a>"],
  ],
  notice: "CRPF की भर्ती वेबसाइट हमारे सिस्टम से नहीं खुल सकी, इसलिए यह जानकारी विज्ञापन संख्या R.II-21/2026-Sports पर आधारित कई समाचार/जॉब रिपोर्टों से मिलाकर लिखी गई है। हम सरकारी वेबसाइट नहीं हैं; फॉर्म भरने से पहले rect.crpf.gov.in पर आधिकारिक विज्ञापन ज़रूर पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "12 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "11 नवंबर 2026 (रात 11:59)"],
          ["फीस भरने की आखिरी तारीख", "नोटिफिकेशन में देखें (फीस फॉर्म के साथ ऑनलाइन)"],
          ["फॉर्म में सुधार (Correction)", "12 से 14 नवंबर 2026"],
          ["PST / स्पोर्ट्स ट्रायल", "बाद में घोषित होगा"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पुरुष", "महिला", "कुल", "वेतन"],
        rows: [
          ["हेड कांस्टेबल (GD)", "150", "32", "182", "Pay Level-4 (₹25,500 - ₹81,100)"],
          ["कांस्टेबल (GD)", "258", "81", "339", "Pay Level-3 (₹21,700 - ₹69,100)"],
        ],
      },
      callout: { kind: "info", html: "पद 22 खेलों (डिसिप्लिन) में बंटे हैं। किस खेल में कितने पद हैं, यह आधिकारिक विज्ञापन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>हेड कांस्टेबल (GD):</strong> 12वीं (10+2) या समकक्ष पास।",
        "<strong>कांस्टेबल (GD):</strong> 10वीं (मैट्रिक) या समकक्ष पास।",
        "<strong>खेल उपलब्धि:</strong> विज्ञापन में बताई गई राष्ट्रीय/अंतरराष्ट्रीय प्रतियोगिताओं में भाग लिया हो या पदक जीता हो। मान्य प्रतियोगिताओं की सूची और अवधि नोटिफिकेशन में देखें।",
        "<strong>उम्र:</strong> 1 अगस्त 2026 को 18 से 23 साल।",
        "<strong>उम्र में छूट, लंबाई और छाती का माप:</strong> नोटिफिकेशन में देखें।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["पुरुष: General (UR), OBC, EWS", "₹100"],
          ["सभी महिलाएं, SC, ST, पूर्व सैनिक", "कोई फीस नहीं"],
        ],
      },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>दस्तावेज़ जांच:</strong> शिक्षा, उम्र, वर्ग और खेल प्रमाणपत्रों की जांच।",
        "<strong>शारीरिक माप परीक्षा (PST):</strong> लंबाई, छाती और वज़न।",
        "<strong>स्पोर्ट्स ट्रायल:</strong> अपने खेल में प्रदर्शन की जांच।",
        "<strong>मेडिकल परीक्षा।</strong>",
      ],
      html: "कोई लिखित परीक्षा नहीं बताई गई है। मेरिट खेल उपलब्धियों के अंकों पर बनती है।",
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें",
      steps: [
        "<a href=\"https://rect.crpf.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">rect.crpf.gov.in</a> खोलें और Sports Quota 2026 का विज्ञापन पढ़ें।",
        "मोबाइल नंबर और ईमेल से रजिस्ट्रेशन करें, फिर लॉगिन करें।",
        "पद (हेड कांस्टेबल या कांस्टेबल), अपना खेल और उपलब्धि की जानकारी भरें।",
        "फोटो, हस्ताक्षर और खेल प्रमाणपत्र अपलोड करें; ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> से साइज़ ठीक करें।",
        "लागू हो तो ₹100 फीस ऑनलाइन भरें और फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "फॉर्म केवल ऑनलाइन भरा जाता है; डाक से भेजा गया फॉर्म नहीं माना जाएगा। भर्ती के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://rect.crpf.gov.in/", title: "CRPF भर्ती पोर्टल", note: "विज्ञापन R.II-21/2026-Sports और ऑनलाइन फॉर्म" },
    { href: "https://crpf.gov.in/", title: "CRPF की वेबसाइट" },
  ],
  faq: [
    { q: "CRPF स्पोर्ट्स कोटा 2026 का फॉर्म कब तक भरें?", a: "11 नवंबर 2026 (रात 11:59) तक rect.crpf.gov.in पर। सुधार का मौका 12 से 14 नवंबर 2026 तक बताया गया है।" },
    { q: "क्या बिना खेल उपलब्धि के आवेदन कर सकते हैं?", a: "नहीं। यह भर्ती केवल खिलाड़ियों के लिए है। विज्ञापन में बताई गई प्रतियोगिताओं में भाग लेने या पदक का प्रमाणपत्र ज़रूरी है।" },
    { q: "उम्र सीमा क्या है?", a: "1 अगस्त 2026 को 18 से 23 साल। आरक्षित वर्गों और खिलाड़ियों की छूट नोटिफिकेशन में देखें।" },
    { q: "क्या लिखित परीक्षा होगी?", a: "रिपोर्टों के अनुसार चयन दस्तावेज़ जांच, PST, स्पोर्ट्स ट्रायल और मेडिकल से होगा; लिखित परीक्षा नहीं बताई गई है।" },
    { q: "फीस कितनी है?", a: "General, OBC और EWS पुरुषों के लिए ₹100। महिलाओं, SC, ST और पूर्व सैनिकों के लिए कोई फीस नहीं।" },
  ],
  related: [
    { href: "/jobs/itbp-constable-gd-sports-quota-recruitment-2026.html", emoji: "🏔️", title: "ITBP स्पोर्ट्स कोटा", text: "कांस्टेबल GD के 126 पद" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 अगस्त 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/document-compressor.html", emoji: "📄", title: "डॉक्यूमेंट कंप्रेसर", text: "प्रमाणपत्र का साइज़ कम करें" },
  ],
  aside: [
    { href: "https://rect.crpf.gov.in/", label: "🛡️ rect.crpf.gov.in पर आवेदन" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
