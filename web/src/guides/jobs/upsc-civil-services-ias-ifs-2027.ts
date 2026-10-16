import type { DocGuide } from "../doc/types";

// Overlaps web/src/guides/doc/upsc-cse-recruitment-2027.ts (/service/ page);
// this /jobs/ page focuses on status, services and the application steps and
// links to it. Facts reused from that guide (checked 15 Oct 2026; upsc.gov.in
// not reachable from the sandbox): visionias.in, news.careers360.com, pw.live,
// anantamias (UPSC calendar 2027 released 20 May 2026: CSE 2027 notification
// 13 Jan 2027, last date 2 Feb 2027, prelims 23 May 2027 with IFS prelims,
// mains from 20 Aug 2027; dates "liable to alteration"). Eligibility, age
// band, fee and attempts follow CSE 2026 rules (pw.live, padhai.ai). Level 10
// (₹56,100) entry pay for IAS/IPS/IFS is the 7th CPC pay matrix. The old
// page's "1,100+ posts", "20 Jan - 16 Feb 2027" window and "mains 17 Sep
// 2027" are not supported by the calendar and were removed.
export const upscCivilServicesIasIfs2027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "UPSC सिविल सेवा 2027" },
  ],
  docHi: "UPSC सिविल सेवा 2027",
  title: "यूपीएससी सिविल सेवा (IAS/IPS/IFS) भर्ती",
  description: "UPSC सिविल सेवा 2027 (IAS/IPS/IFS): कैलेंडर के अनुसार अधिसूचना 13 जनवरी 2027, आवेदन 2 फरवरी 2027 तक, प्रीलिम्स 23 मई 2027। सेवाएं, योग्यता, फीस, सैलरी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "UPSC सिविल सेवा 2027 (IAS/IPS/IFS): अधिसूचना जनवरी 2027 में अपेक्षित",
  lead: "<strong>स्थिति: अगली भर्ती अपेक्षित।</strong> संघ लोक सेवा आयोग (UPSC) सिविल सेवा परीक्षा (CSE) से IAS, IPS, IFS (विदेश सेवा) और IRS जैसी केंद्रीय सेवाओं में भर्ती करता है। UPSC कैलेंडर 2027 के अनुसार CSE 2027 की अधिसूचना <strong>13 जनवरी 2027</strong> को आएगी, आवेदन <strong>2 फरवरी 2027</strong> तक होंगे और प्रारंभिक परीक्षा <strong>23 मई 2027</strong> को होगी। पदों की संख्या अधिसूचना में ही बताई जाएगी।",
  facts: [
    ["स्थिति", "अधिसूचना 13 जनवरी 2027 (अपेक्षित)"],
    ["आवेदन की आखिरी तारीख", "2 फरवरी 2027"],
    ["प्रीलिम्स", "23 मई 2027"],
    ["योग्यता", "स्नातक, उम्र 21-32 साल"],
  ],
  notice: "16 अक्टूबर 2026 तक CSE 2027 का फॉर्म नहीं खुला है; ऊपर की तारीखें UPSC कैलेंडर से हैं और बदल सकती हैं। पूरी जानकारी हमारे <a href=\"/service/upsc-cse-recruitment-2027.html\">UPSC CSE 2027 गाइड</a> में भी है।",
  sections: [
    {
      id: "tarikhen",
      title: "CSE 2027 की तारीखें (UPSC कैलेंडर)",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["अधिसूचना और आवेदन शुरू", "13 जनवरी 2027 (संभावित)"],
          ["आवेदन की आखिरी तारीख", "2 फरवरी 2027 (संभावित)"],
          ["प्रारंभिक परीक्षा (CSE और IFS)", "23 मई 2027"],
          ["मुख्य परीक्षा", "20 अगस्त 2027 से (5 दिन)"],
          ["इंटरव्यू (पर्सनैलिटी टेस्ट)", "मेन्स रिजल्ट के बाद; तारीख बाद में"],
        ],
      },
    },
    {
      id: "sevayen",
      title: "कौन सी सेवाएं मिलती हैं",
      list: [
        "<strong>अखिल भारतीय सेवाएं:</strong> IAS (प्रशासनिक सेवा) और IPS (पुलिस सेवा)।",
        "<strong>ग्रुप A केंद्रीय सेवाएं:</strong> IFS (भारतीय विदेश सेवा), IRS (आयकर, कस्टम और GST), भारतीय रेलवे प्रबंधन सेवा, लेखा और ऑडिट सेवाएं आदि।",
        "<strong>ग्रुप B सेवाएं:</strong> कुछ केंद्र शासित प्रदेशों की सिविल और पुलिस सेवाएं।",
        "<strong>सैलरी:</strong> IAS/IPS/IFS की शुरुआत 7वें वेतन आयोग के पे लेवल 10 (बेसिक ₹56,100) से, साथ में DA, HRA और अन्य भत्ते।",
      ],
      callout: { kind: "info", html: "भारतीय वन सेवा (Indian Forest Service) की प्रारंभिक परीक्षा भी CSE प्रीलिम्स के साथ होती है, पर उसका फॉर्म और मेन्स अलग हैं।" },
    },
    {
      id: "patrata",
      title: "योग्यता, उम्र, फीस (CSE 2026 के नियम)",
      list: [
        "<strong>शिक्षा:</strong> किसी भी विषय में स्नातक; अंतिम वर्ष के छात्र प्रीलिम्स के लिए आवेदन कर सकते हैं।",
        "<strong>उम्र:</strong> 21 से 32 साल (1 अगस्त की स्थिति में); OBC 3, SC/ST 5, दिव्यांग 10 साल छूट।",
        "<strong>प्रयास:</strong> सामान्य/EWS 6, OBC और दिव्यांग 9; SC/ST उम्र सीमा तक।",
        "<strong>फीस:</strong> ₹100; महिलाएं, SC, ST और दिव्यांग उम्मीदवार फीस से मुक्त।",
      ],
    },
    {
      id: "kaise",
      title: "आवेदन कैसे करें (अधिसूचना आने पर)",
      steps: [
        "<a href=\"https://upsconline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsconline.gov.in</a> पर वन टाइम रजिस्ट्रेशन (OTR) पहले से कर लें।",
        "अधिसूचना आने पर लॉगिन करके CSE 2027 का फॉर्म भरें, फोटो-हस्ताक्षर और पहचान पत्र की जानकारी दें।",
        "परीक्षा केंद्र चुनें (जल्दी भरने पर पसंद का केंद्र मिलने की संभावना ज़्यादा), फीस भरें और फॉर्म का प्रिंट रखें।",
      ],
    },
  ],
  official: [
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)", note: "कैलेंडर, अधिसूचना, रिजल्ट" },
    { href: "https://upsconline.gov.in/", title: "UPSC ऑनलाइन आवेदन (OTR)" },
  ],
  faq: [
    { q: "क्या UPSC सिविल सेवा 2027 का फॉर्म अभी भर सकते हैं?", a: "नहीं। UPSC कैलेंडर के अनुसार अधिसूचना 13 जनवरी 2027 को आएगी और आवेदन 2 फरवरी 2027 तक होंगे। अभी OTR कर सकते हैं।" },
    { q: "CSE 2027 में कितने पद होंगे?", a: "अभी तय नहीं। संख्या अधिसूचना में आएगी; 1,100 जैसे आंकड़े सिर्फ अंदाज़े हैं।" },
    { q: "IAS की शुरुआती सैलरी कितनी है?", a: "पे लेवल 10 में बेसिक ₹56,100, साथ में DA, HRA और भत्ते।" },
    { q: "प्रीलिम्स कब है?", a: "23 मई 2027; मुख्य परीक्षा 20 अगस्त 2027 से।" },
  ],
  related: [
    { href: "/service/upsc-cse-recruitment-2027.html", emoji: "🏛️", title: "UPSC CSE 2027 गाइड", text: "तारीखें और तैयारी" },
    { href: "/service/upsc-civil-services.html", emoji: "📚", title: "UPSC सिविल सेवा परीक्षा", text: "पूरी परीक्षा की जानकारी" },
    { href: "/jobs/upsc-advertisement-11-2026-212-posts.html", emoji: "📝", title: "UPSC विज्ञापन 11/2026", text: "212 पद" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "आरक्षण के लिए" },
  ],
  aside: [
    { href: "https://upsc.gov.in/", label: "🏛️ UPSC वेबसाइट" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
