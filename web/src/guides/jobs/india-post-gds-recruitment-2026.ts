import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; India Post portals not opened from the
// sandbox, search extracts of news coverage used). Overlaps the full guide
// web/src/guides/doc/india-post-gds-recruitment-2026.ts (verified 15 Oct 2026),
// whose facts are reused here: Schedule-I 2026 about 28,740 posts, applications
// to 14 Feb 2026; Schedule-II (July 2026) about 23,757 posts, application 2-21
// Sep 2026 (registration from 31 Aug); 10th pass, merit on Class 10 marks, age
// 18-40, fee ₹100 (nil for women, SC/ST, PwD, transwomen); TRCA from ₹12,000
// (BPM) and ₹10,000 (ABPM/Dak Sevak). New check: careers360 news,
// businesstoday, careerindia, careerpower (Schedule-II List-I published
// circle-wise on 12/13 Oct 2026; document verification at the divisional
// office by 27 Oct 2026; originals + two self-attested photocopy sets). This
// page takes the "after the merit list" angle. Old page's "44,228 posts" and
// "form active" were wrong and removed.
export const indiaPostGdsRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "India Post GDS 2026" },
  ],
  docHi: "India Post GDS 2026",
  title: "इंडिया पोस्ट जीडीएस भर्ती 2026",
  description: "India Post GDS 2026 (Schedule-II): लगभग 23,757 ग्रामीण डाक सेवक पदों की पहली मेरिट लिस्ट 12 अक्टूबर 2026 को आई। दस्तावेज़ सत्यापन 27 अक्टूबर तक; कौन से कागज़ ले जाएं, आगे क्या होता है।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "India Post GDS 2026: पहली मेरिट लिस्ट आई, 27 अक्टूबर तक दस्तावेज़ सत्यापन",
  lead: "डाक विभाग ने ग्रामीण डाक सेवक (BPM, ABPM, डाक सेवक) Schedule-II (जुलाई 2026) के लगभग <strong>23,757 पदों</strong> की पहली मेरिट लिस्ट (List-I) सर्कल-वार <strong>12-13 अक्टूबर 2026</strong> को जारी की। आवेदन 21 सितंबर 2026 को बंद हो चुके थे। जिनका नाम लिस्ट में है, उन्हें रिपोर्टों के अनुसार <strong>27 अक्टूबर 2026</strong> तक चुने गए डिवीज़नल ऑफिस में मूल दस्तावेज़ों के साथ सत्यापन कराना है।",
  facts: [
    ["स्थिति", "परिणाम आया (मेरिट लिस्ट-I, 12-13 अक्टूबर 2026)"],
    ["पद", "लगभग 23,757 (Schedule-II, जुलाई 2026)"],
    ["दस्तावेज़ सत्यापन", "27 अक्टूबर 2026 तक (रिपोर्ट के अनुसार)"],
    ["चयन", "10वीं के अंकों से मेरिट, कोई परीक्षा नहीं"],
  ],
  notice: "16 अक्टूबर 2026 तक: <strong>परिणाम आया</strong> (पहली मेरिट लिस्ट)। आवेदन बंद हैं। पुराने पेज के \"44,228 पद\" और \"फॉर्म चालू\" सही नहीं थे। व्हाट्सऐप पर घूम रही \"दूसरी लिस्ट\" की PDF पर भरोसा न करें; लिस्ट सिर्फ India Post के GDS पोर्टल पर देखें। यह निजी सूचना वेबसाइट है, डाक विभाग की नहीं।",
  sections: [
    {
      id: "tarikhen",
      title: "Schedule-II (जुलाई 2026) की तारीखें",
      table: {
        head: ["चरण", "तारीख (रिपोर्ट के अनुसार)"],
        rows: [
          ["अधिसूचना", "27 अगस्त 2026"],
          ["रजिस्ट्रेशन / आवेदन", "31 अगस्त से / 2 से 21 सितंबर 2026"],
          ["फॉर्म सुधार", "23-24 सितंबर 2026"],
          ["मेरिट लिस्ट-I", "12-13 अक्टूबर 2026 (सर्कल-वार)"],
          ["दस्तावेज़ सत्यापन", "27 अक्टूबर 2026 तक"],
          ["अगली लिस्ट (List-II आदि)", "खाली पद बचने पर, तारीख घोषित नहीं"],
        ],
      },
      callout: { kind: "info", html: "इस साल का पहला चरण (Schedule-I, लगभग 28,740 पद, आवेदन 14 फरवरी 2026 तक) पूरा हो चुका है। योग्यता, TRCA और आवेदन की पूरी जानकारी हमारी <a href=\"/service/india-post-gds-recruitment-2026.html\">India Post GDS 2026 गाइड</a> में है।" },
    },
    {
      id: "list",
      title: "मेरिट लिस्ट में नाम कैसे देखें",
      steps: [
        "<a href=\"https://www.indiapost.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">indiapost.gov.in</a> से GDS Online Engagement पोर्टल खोलें।",
        "अपने सर्कल (राज्य) की List-I PDF खोलें।",
        "अपना रजिस्ट्रेशन नंबर खोजें (Ctrl+F) और लिखा हुआ डिवीज़न, पद (BPM/ABPM/डाक सेवक) और शाखा मिलाएं।",
        "SMS/ईमेल भी देखें; उसमें सत्यापन वाले ऑफिस की जानकारी होती है।",
      ],
    },
    {
      id: "dv",
      title: "दस्तावेज़ सत्यापन में क्या ले जाएं",
      list: [
        "10वीं की मूल मार्कशीट (उम्र और अंकों का प्रमाण)।",
        "फोटो पहचान पत्र (आधार आदि)।",
        "जाति / EWS / दिव्यांग / ट्रांसजेंडर प्रमाण पत्र, अगर उसी आधार पर चुने गए हों।",
        "कंप्यूटर कोर्स का प्रमाण पत्र (अगर 10वीं/12वीं में कंप्यूटर विषय नहीं था)।",
        "सरकारी अस्पताल के मेडिकल ऑफिसर का मेडिकल सर्टिफिकेट (जैसा नोटिस में मांगा गया)।",
        "सभी कागज़ों की <strong>दो सेट</strong> स्व-प्रमाणित फोटोकॉपी और पासपोर्ट फोटो।",
      ],
      callout: { kind: "warn", html: "तय तारीख तक डिवीज़नल ऑफिस न पहुंचने पर नाम रद्द हो सकता है। चयन सिर्फ 10वीं के अंकों की मेरिट से होता है; पैसे लेकर GDS नौकरी दिलाने का दावा करने वाले ठग हैं।" },
    },
    {
      id: "aage",
      title: "सत्यापन के बाद क्या होता है",
      list: [
        "दस्तावेज़ सही पाए जाने पर engagement का आदेश मिलता है और कुछ दिन की ट्रेनिंग होती है।",
        "BPM को आम तौर पर उसी गांव में रहना होता है जहां शाखा डाकघर है।",
        "वेतन नहीं, TRCA मिलता है: BPM ₹12,000 से, ABPM/डाक सेवक ₹10,000 से (काम के घंटों के स्लैब के अनुसार ज़्यादा), साथ में DA।",
        "जिनका नाम List-I में नहीं है, वे आगे आने वाली लिस्ट का इंतज़ार कर सकते हैं; यह खाली रह गए पदों पर निर्भर है।",
      ],
    },
  ],
  official: [
    { href: "https://www.indiapost.gov.in/", title: "इंडिया पोस्ट (डाक विभाग)", note: "GDS Online Engagement का लिंक यहीं से" },
    { href: "https://indiapostgdsonline.gov.in/", title: "India Post GDS Online Engagement", note: "नोटिफिकेशन और मेरिट लिस्ट" },
  ],
  faq: [
    { q: "क्या GDS 2026 का फॉर्म अभी भर सकते हैं?", a: "नहीं। Schedule-II के आवेदन 21 सितंबर 2026 को बंद हो गए। अगली भर्ती की सूचना India Post के GDS पोर्टल पर आएगी।" },
    { q: "GDS मेरिट लिस्ट कब आई?", a: "Schedule-II की पहली मेरिट लिस्ट (List-I) 12-13 अक्टूबर 2026 को सर्कल-वार जारी हुई।" },
    { q: "दस्तावेज़ सत्यापन की आखिरी तारीख क्या है?", a: "रिपोर्टों के अनुसार 27 अक्टूबर 2026। अपनी सही तारीख और ऑफिस अपने सर्कल की लिस्ट/SMS में देखें।" },
    { q: "लिस्ट में नाम नहीं आया तो क्या करें?", a: "पद खाली रहने पर विभाग अगली लिस्ट (List-II, III) जारी करता है। सिर्फ आधिकारिक पोर्टल पर नज़र रखें।" },
  ],
  related: [
    { href: "/service/india-post-gds-recruitment-2026.html", emoji: "📮", title: "India Post GDS गाइड", text: "योग्यता, TRCA, आवेदन" },
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "MTS, GD, CHSL" },
    { href: "/jobs/indian-navy-agniveer-ssr-recruitment-2026.html", emoji: "⚓", title: "नौसेना अग्निवीर SSR", text: "12वीं पास के लिए" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.indiapost.gov.in/", label: "📮 indiapost.gov.in" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
