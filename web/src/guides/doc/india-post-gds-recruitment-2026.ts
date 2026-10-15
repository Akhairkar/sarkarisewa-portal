import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; indiapostgdsonline.gov.in not reachable from
// the sandbox, search-result extracts of coverage of the official notices
// used): careers360 / Business Standard (Schedule-I 2026: 28,740 posts,
// registration from 31 Jan 2026, last date 14 Feb 2026); careers360,
// bhaskardigital, pw.live (Schedule-II July 2026: notification 17-12/2026-GDS
// dated 27 Aug 2026, about 23,757 posts, registration 31 Aug-19 Sep,
// application 2-21 Sep 2026, correction 23-24 Sep; 10th pass, merit on Class
// 10 marks, no exam; age 18-40; fee ₹100, nil for women, SC/ST, PwD,
// transwomen as per notice); careerindia, careerpower, adda247 (Schedule-II
// List-I published 12 Oct 2026 circle-wise; document verification at the
// divisional office by 27 Oct 2026 as reported). TRCA slabs (BPM ₹12,000-
// ₹29,380; ABPM/Dak Sevak ₹10,000-₹24,470) are from the GDS (Conduct and
// Engagement) Rules/2019 pay revision as printed in each notification. The
// old page's "40,000+ posts" and "last date 20 August 2026" did not match any
// 2026 notice and were removed.
export const indiaPostGdsRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/index.html" },
    { label: "India Post GDS 2026" },
  ],
  docHi: "India Post GDS 2026",
  title: "India Post GDS (Gramin Dak Sevak) 2026",
  description: "डाक विभाग, संचार मंत्रालय: ग्रामीण डाक सेवक (BPM, ABPM, डाक सेवक) भर्ती 2026। योग्यता 10वीं पास, 10वीं के अंकों से मेरिट, उम्र 18-40, फीस, मेरिट लिस्ट और दस्तावेज़ सत्यापन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "India Post GDS भर्ती 2026: ग्रामीण डाक सेवक की योग्यता, मेरिट लिस्ट और दस्तावेज़ सत्यापन",
  lead: "ग्रामीण डाक सेवक (GDS) की भर्ती डाक विभाग (Department of Posts, संचार मंत्रालय) indiapostgdsonline.gov.in पर करता है। इसमें कोई लिखित परीक्षा नहीं होती: 10वीं के अंकों से ऑटोमैटिक मेरिट लिस्ट बनती है। 2026 में दो चरण आए: जनवरी-फरवरी में लगभग 28,740 पद और अगस्त-सितंबर (Schedule-II) में लगभग 23,757 पद; दूसरे चरण के आवेदन 21 सितंबर 2026 को बंद हो गए और रिपोर्ट के अनुसार पहली मेरिट लिस्ट 12 अक्टूबर 2026 को जारी हुई।",
  facts: [
    ["पोर्टल", '<a href="https://indiapostgdsonline.gov.in/" target="_blank" rel="noopener nofollow">indiapostgdsonline.gov.in</a>'],
    ["योग्यता", "10वीं पास (गणित और अंग्रेज़ी के साथ), स्थानीय भाषा"],
    ["उम्र", "18 से 40 साल (आरक्षित वर्ग को छूट)"],
    ["फीस", "₹100; महिला, SC/ST, PwD को छूट"],
  ],
  notice: "15 अक्टूबर 2026 तक: Schedule-II (जुलाई 2026) के आवेदन बंद हैं। जिनका नाम पहली मेरिट लिस्ट में है, वे रिपोर्ट के अनुसार 27 अक्टूबर 2026 तक चुने गए डिवीज़नल ऑफिस में दस्तावेज़ सत्यापन कराएं। सही तारीख अपने सर्कल की लिस्ट/SMS में देखें।",
  sections: [
    {
      id: "2026",
      title: "2026 की GDS भर्तियां",
      table: {
        head: ["चरण", "पद (लगभग)", "आवेदन", "स्थिति"],
        rows: [
          ["Schedule-I, 2026", "28,740", "31 जनवरी से 14 फरवरी 2026", "पूरा"],
          ["Schedule-II (जुलाई 2026)", "23,757", "2 से 21 सितंबर 2026 (रजिस्ट्रेशन 31 अगस्त से)", "मेरिट लिस्ट-I 12 अक्टूबर 2026 (रिपोर्ट के अनुसार)"],
        ],
      },
      callout: { kind: "info", html: "पदों की संख्या और तारीखें खबरों/कोचिंग साइटों पर अलग-अलग दिखती हैं। सर्कल-वार पद, आरक्षण और अंतिम तारीख सिर्फ indiapostgdsonline.gov.in पर दिए नोटिफिकेशन से मिलाएं।" },
    },
    {
      id: "pad",
      title: "पद और मानदेय (TRCA)",
      table: {
        head: ["पद", "काम", "TRCA (4 घंटे स्तर पर न्यूनतम)"],
        rows: [
          ["ब्रांच पोस्टमास्टर (BPM)", "गांव के शाखा डाकघर का प्रबंधन, IPPB, खाते", "₹12,000 से (स्लैब ₹12,000-₹29,380)"],
          ["असिस्टेंट ब्रांच पोस्टमास्टर (ABPM)", "डाक बांटना, बिक्री, IPPB", "₹10,000 से (स्लैब ₹10,000-₹24,470)"],
          ["डाक सेवक", "उप/मुख्य डाकघर में डाक का काम", "₹10,000 से (स्लैब ₹10,000-₹24,470)"],
        ],
      },
      html: "<p>GDS नियमित सरकारी कर्मचारी नहीं होते; उन्हें वेतन नहीं, <strong>TRCA</strong> (Time Related Continuity Allowance) और DA मिलता है। BPM को आमतौर पर उसी गांव में रहना होता है जहां शाखा डाकघर है।</p>",
    },
    {
      id: "yogyata",
      title: "योग्यता",
      list: [
        "मान्यता प्राप्त बोर्ड से <strong>10वीं पास</strong>, गणित और अंग्रेज़ी विषय के साथ।",
        "10वीं तक <strong>स्थानीय भाषा</strong> (सर्कल की तय भाषा) पढ़ी हो।",
        "<strong>साइकिल चलाना</strong> आना चाहिए (स्कूटर/मोटरसाइकिल आना भी साइकिल ज्ञान माना जाता है)।",
        "<strong>कंप्यूटर का बेसिक ज्ञान</strong>; कम से कम 60 दिन का कंप्यूटर कोर्स प्रमाण पत्र या 10वीं/12वीं/उच्च शिक्षा में कंप्यूटर विषय।",
        "उम्र 18 से 40 साल; SC/ST को 5 साल, OBC को 3 साल, PwD को 10 साल (श्रेणी के अनुसार और ज़्यादा) की छूट।",
      ],
    },
    {
      id: "merit",
      title: "चयन और मेरिट लिस्ट",
      steps: [
        "कोई परीक्षा या इंटरव्यू नहीं। <strong>10वीं के अंकों</strong> (प्रतिशत, 4 दशमलव तक) से सिस्टम मेरिट लिस्ट बनाता है।",
        "आवेदन में चुनी गई पोस्ट की पसंद, आरक्षण और अंकों के आधार पर सर्कल-वार लिस्ट (List-I, II, III...) जारी होती है।",
        "नाम आने पर SMS/ईमेल आता है। तय तारीख तक चुने गए <strong>डिवीज़नल हेड</strong> के पास मूल दस्तावेज़ों के साथ सत्यापन कराएं।",
        "सत्यापन और मेडिकल फिटनेस के बाद engagement मिलता है; कुछ दिन की ट्रेनिंग होती है।",
      ],
      callout: { kind: "warn", html: "सत्यापन के लिए मूल 10वीं की मार्कशीट, पहचान पत्र, जाति/EWS/PwD प्रमाण पत्र (अगर लागू), कंप्यूटर प्रमाण पत्र, मेडिकल सर्टिफिकेट और दो सेट फोटोकॉपी ले जाएं। तय तारीख तक न पहुंचने पर नाम कट सकता है। पैसे लेकर GDS नौकरी दिलाने का दावा करने वाले ठग हैं; चयन सिर्फ मेरिट से होता है।" },
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे होता है (अगली भर्ती के लिए)",
      steps: [
        '<a href="https://indiapostgdsonline.gov.in/" target="_blank" rel="noopener nofollow">indiapostgdsonline.gov.in</a> पर मोबाइल और ईमेल से <strong>रजिस्ट्रेशन</strong> करें।',
        "फीस (अगर लागू) ऑनलाइन भरें।",
        "आवेदन में 10वीं के अंक, फोटो, सिग्नेचर अपलोड करें और <strong>डिवीज़न व पदों की पसंद</strong> चुनें।",
        "सबमिट के बाद प्रिंट रखें। सुधार की खिड़की खुले तो गलती ठीक करें।",
      ],
    },
  ],
  official: [
    { href: "https://indiapostgdsonline.gov.in/", title: "India Post GDS Online Engagement", note: "नोटिफिकेशन, आवेदन, मेरिट लिस्ट" },
    { href: "https://www.indiapost.gov.in/", title: "इंडिया पोस्ट (डाक विभाग)" },
  ],
  faq: [
    { q: "GDS भर्ती में परीक्षा होती है क्या?", a: "नहीं। 10वीं के अंकों के आधार पर मेरिट लिस्ट बनती है; कोई लिखित परीक्षा या इंटरव्यू नहीं।" },
    { q: "GDS 2026 का आवेदन कब तक था?", a: "Schedule-I के आवेदन 14 फरवरी 2026 तक और Schedule-II (जुलाई 2026) के आवेदन 2 से 21 सितंबर 2026 तक हुए। दोनों बंद हैं।" },
    { q: "GDS की सैलरी कितनी है?", a: "BPM को ₹12,000 से और ABPM/डाक सेवक को ₹10,000 से TRCA शुरू होता है (काम के घंटों के स्लैब के अनुसार ज़्यादा), साथ में DA।" },
    { q: "मेरिट लिस्ट में नाम आने के बाद क्या करें?", a: "SMS/लिस्ट में दी गई तारीख तक चुने गए डिवीज़नल ऑफिस में सभी मूल दस्तावेज़ और दो सेट फोटोकॉपी लेकर सत्यापन कराएं।" },
    { q: "GDS की फीस कितनी है?", a: "₹100। महिला, SC/ST, PwD और ट्रांसवुमन उम्मीदवारों को फीस नहीं देनी होती (नोटिफिकेशन के अनुसार)।" },
  ],
  related: [
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "MTS, GD, CHSL" },
    { href: "/service/ibps-bank-recruitment.html", emoji: "🏦", title: "IBPS बैंक भर्ती", text: "PO और क्लर्क" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "कट-ऑफ तारीख पर उम्र" },
  ],
  aside: [
    { href: "https://indiapostgdsonline.gov.in/", label: "📮 GDS पोर्टल खोलें" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
