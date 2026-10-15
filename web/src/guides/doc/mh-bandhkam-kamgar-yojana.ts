import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; mahabocw.in not reachable from the sandbox,
// search-result extracts used): mahabocw.in worker registration page
// (eligibility 18-60, 90+ days of construction work in last 12 months;
// registration fee and yearly subscription listed as Rs 1 each, page
// undated), mahabocw.in homepage notice (registration, renewal and benefit
// applications online; document-verification date chosen online),
// mahakamgar.maharashtra.gov.in "बांधकाम कामगार" page (Form V, documents,
// board constituted 1 May 2011, contribution default condoned up to 3
// months), myScheme entries for MAHABOCW schemes (amounts below; same
// figures as web/src/guides/labour/maharashtra.ts checked 5 Oct 2026).
// A report that registration/renewal became free in August 2025 could not be
// confirmed officially, so the fee is described with that caveat.
export const mhBandhkamKamgarYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "महाराष्ट्र", href: "/states/maharashtra.html" },
    { label: "बांधकाम कामगार योजना" },
  ],
  docHi: "बांधकाम कामगार योजना",
  title: "बांधकाम कामगार कल्याण योजना (महाBOCW नोंदणी)",
  description: "बांधकाम कामगारों का राज्य कल्याण मंडळ में पंजीकरण, जिससे शिक्षा सहायता, प्रसूति/चिकित्सा सहायता, दुर्घटना बीमा और पेंशन जैसे लाभ मिलते हैं।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "महाराष्ट्र बांधकाम कामगार कल्याण योजना: MAHABOCW नोंदणी, पात्रता और मिलने वाली सहायता",
  lead: "महाराष्ट्र में निर्माण मज़दूरों (बांधकाम कामगार) के लिए योजनाएं <strong>महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडल (MAHABOCW)</strong> चलाता है। 18 से 60 साल का मज़दूर, जिसने पिछले 12 महीनों में कम से कम 90 दिन निर्माण कार्य किया है, mahabocw.in पर नोंदणी करवा सकता है। पंजीकरण के बाद बच्चों की पढ़ाई, प्रसूति, शादी, बीमारी और मृत्यु पर मंडल से आर्थिक सहायता मिलती है।",
  facts: [
    ["मंडल", "MAHABOCW (स्थापना 1 मई 2011)"],
    ["उम्र", "18 से 60 साल"],
    ["शर्त", "12 महीनों में 90 दिन निर्माण कार्य"],
    ["आवेदन", "mahabocw.in (ऑनलाइन) / कामगार कार्यालय"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन नोंदणी करवा सकता है",
      list: [
        "उम्र <strong>18 से 60 साल</strong>",
        "पिछले 12 महीनों में कम से कम <strong>90 दिन</strong> भवन/निर्माण कार्य: राजमिस्त्री, मज़दूर, बढ़ई, पेंटर, प्लंबर, इलेक्ट्रीशियन, सरिया, टाइल्स जैसे काम",
        "ठेकेदार/नियोक्ता से 90 दिन के काम का प्रमाण पत्र",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "उम्र का प्रमाण: आधार, जन्म प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र, वोटर ID, राशन कार्ड आदि",
        "ठेकेदार/नियोक्ता का 90 दिन के काम का प्रमाण पत्र",
        "निवास का प्रमाण और 3 पासपोर्ट साइज़ फोटो",
        "बैंक पासबुक (सहायता खाते में आती है)",
      ],
    },
    {
      id: "nondani",
      title: "नोंदणी कैसे करें",
      steps: [
        '<a href="https://mahabocw.in/" target="_blank" rel="noopener nofollow">mahabocw.in</a> पर ऑनलाइन नोंदणी फॉर्म भरें और कागज़ अपलोड करें।',
        "पोर्टल पर कागज़ों की जांच (document verification) के लिए अपनी सुविधा की तारीख चुनें।",
        "तय तारीख पर मूल कागज़ लेकर बताए गए केंद्र/कामगार कार्यालय में जाएं।",
        "मंज़ूरी के बाद मंडल पहचान पत्र (ओळखपत्र) देता है। हर साल समय पर नूतनीकरण (renewal) करवाएं।",
      ],
      callout: { kind: "warn", html: "मंडल की वेबसाइट पर नोंदणी फीस और सालाना अंशदान <strong>₹1</strong> लिखा है; 2025 में इसे मुफ्त किए जाने की खबरें भी आई हैं। किसी एजेंट को \"मंडल फीस\" के नाम पर ज़्यादा पैसा न दें, और कोई भी भुगतान हो तो रसीद लें।" },
    },
    {
      id: "yojana",
      title: "मुख्य योजनाएं और सहायता",
      intro: "राशि myScheme पोर्टल पर MAHABOCW योजनाओं के विवरण से है। मंडल इसे समय-समय पर बदलता है, आवेदन से पहले mahabocw.in पर देखें।",
      table: {
        head: ["योजना", "सहायता"],
        rows: [
          ["पढ़ाई: कक्षा 1-7 / 8-10", "₹2,500 / ₹5,000 प्रति वर्ष"],
          ["पढ़ाई: 11वीं-12वीं", "₹10,000 प्रति वर्ष"],
          ["स्नातक", "₹20,000 प्रति वर्ष"],
          ["इंजीनियरिंग / मेडिकल डिग्री", "₹60,000 / ₹1,00,000 प्रति वर्ष"],
          ["प्रसूति सहायता (पहले दो प्रसव)", "सामान्य ₹15,000; सिजेरियन ₹20,000"],
          ["पहली शादी", "₹30,000"],
          ["गंभीर बीमारी का इलाज", "₹1,00,000"],
          ["75% या स्थायी विकलांगता", "₹2,00,000"],
          ["प्राकृतिक मृत्यु", "वारिस को ₹2,00,000; अंत्यसंस्कार ₹10,000"],
          ["विधवा/विधुर सहायता", "₹24,000 प्रति वर्ष, 5 साल तक"],
        ],
      },
      callout: { kind: "info", html: "पढ़ाई की सहायता अधिकतम दो बच्चों (या पुरुष श्रमिक की पत्नी) को मिलती है। लाभ सिर्फ चालू (जीवित) पंजीकरण पर मिलता है; अंशदान में 3 महीने तक की चूक माफ हो सकती है।" },
    },
  ],
  official: [
    { href: "https://mahabocw.in/", title: "MAHABOCW: महाराष्ट्र इमारत व इतर बांधकाम कामगार कल्याणकारी मंडल" },
    { href: "https://mahakamgar.maharashtra.gov.in/", title: "कामगार आयुक्त, महाराष्ट्र" },
    { href: "https://grievances.maharashtra.gov.in/en", title: "महाराष्ट्र सरकार शिकायत पोर्टल" },
  ],
  faq: [
    { q: "बांधकाम कामगार नोंदणी के लिए कौन पात्र है?", a: "18 से 60 साल का मज़दूर, जिसने पिछले 12 महीनों में कम से कम 90 दिन निर्माण कार्य किया है और जिसके पास ठेकेदार/नियोक्ता का प्रमाण पत्र है।" },
    { q: "नोंदणी की फीस कितनी है?", a: "मंडल की वेबसाइट पर नोंदणी फीस और सालाना अंशदान ₹1 लिखा है। 2025 में मुफ्त किए जाने की खबरें भी हैं, इसलिए mahabocw.in या कामगार कार्यालय से पुष्टि करें।" },
    { q: "शादी के लिए कितनी सहायता मिलती है?", a: "पंजीकृत श्रमिक की अपनी पहली शादी पर ₹30,000 (myScheme पर दर्ज विवरण के अनुसार)।" },
    { q: "आवेदन ऑनलाइन होता है या ऑफलाइन?", a: "नोंदणी, नूतनीकरण और लाभ के आवेदन mahabocw.in पर ऑनलाइन भरे जा सकते हैं; कागज़ों की जांच के लिए तय तारीख पर केंद्र जाना होता है।" },
  ],
  related: [
    { href: "/states/maharashtra-labour-card.html", emoji: "👷", title: "महाराष्ट्र लेबर कार्ड", text: "नोंदणी की पूरी गाइड" },
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का कार्ड" },
    { href: "/service/mh-ladki-bahin-yojana.html", emoji: "👩", title: "लाडकी बहीण योजना", text: "महिलाओं को मासिक सहायता" },
    { href: "/states/maharashtra.html", emoji: "🗺️", title: "महाराष्ट्र की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://mahabocw.in/", label: "👷 mahabocw.in" },
    { href: "/states/maharashtra-labour-card.html", label: "📋 लेबर कार्ड गाइड" },
  ],
};
