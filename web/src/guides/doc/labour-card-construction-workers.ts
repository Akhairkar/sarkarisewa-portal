import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): indiacode.nic.in (Code on Social Security,
// 2020, Act 36 of 2020, text as of 21.11.2025; s.106: building worker aged 18
// to under 60 engaged in building work for at least 90 days in the preceding
// 12 months is eligible for registration as a beneficiary; Chapter VIII cess
// replaces the BOCW Welfare Cess Act 1996); Govt of India announcement of the
// four Labour Codes in force from 21.11.2025 (reported by EY, KPMG and
// Council for Leather Exports circular: existing laws, rules and schemes
// continue during the transition until new rules are notified); eshram.gov.in
// (helpdesk 14434, as already verified in e-shram-card.ts; e-Shram age and
// benefits in ../labour/common.ts). State board names/portals are on the
// site's per-state labour card pages. Registration fees and contribution
// differ by state and are left out.
export const labourCardConstructionWorkers: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "श्रमिक कार्ड (निर्माण मज़दूर)" },
  ],
  docHi: "श्रमिक कार्ड (निर्माण मज़दूर)",
  title: "श्रमिक कार्ड (भवन एवं निर्माण श्रमिक) 2026",
  description: "आपके राज्य के भवन एवं निर्माण श्रमिक कल्याण बोर्ड में पंजीकरण, जो दुर्घटना कवर, पेंशन, और शिक्षा सहायता जैसे कल्याणकारी लाभ देता है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "श्रमिक कार्ड (भवन एवं निर्माण श्रमिक) 2026: पात्रता, कागज़, आवेदन और राज्यवार बोर्ड",
  lead: "निर्माण मज़दूरों का श्रमिक कार्ड (लेबर कार्ड) राज्य का भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (BOCW बोर्ड) बनाता है। 18 से 60 साल का मज़दूर, जिसने पिछले 12 महीनों में कम से कम 90 दिन भवन/निर्माण का काम किया हो, पंजीकरण करवा सकता है। पंजीकरण के बाद बोर्ड की योजनाओं (जैसे बच्चों की पढ़ाई, शादी, प्रसूति, पेंशन, मृत्यु सहायता) का लाभ मिलता है; योजनाएं, राशि और फीस हर राज्य में अलग हैं।",
  facts: [
    ["कौन बनाता है", "राज्य का BOCW कल्याण बोर्ड"],
    ["उम्र", "18 से 60 साल"],
    ["शर्त", "12 महीनों में कम से कम 90 दिन निर्माण कार्य"],
    ["फीस", "राज्य के अनुसार"],
  ],
  notice: "21 नवंबर 2025 से सामाजिक सुरक्षा संहिता, 2020 (Code on Social Security) लागू है, जिसमें निर्माण मज़दूरों के पंजीकरण और कल्याण सेस के नियम शामिल हैं। नए नियम पूरी तरह लागू होने तक पुराने कानून के तहत बने बोर्ड, नियम और योजनाएं चलती रहती हैं। आपका पुराना लेबर कार्ड मान्य है; नवीनीकरण समय पर करवाते रहें।",
  sections: [
    {
      id: "kaun",
      title: "कौन बनवा सकता है",
      list: [
        "उम्र <strong>18 साल या ज़्यादा और 60 साल से कम</strong>",
        "पिछले 12 महीनों में कम से कम <strong>90 दिन</strong> भवन या दूसरे निर्माण कार्य में मज़दूरी की हो",
        "काम के प्रकार: राजमिस्त्री, बेलदार, कारपेंटर, सरिया/बार बेंडर, पेंटर, प्लंबर, इलेक्ट्रीशियन, टाइल/मार्बल, सड़क-पुल निर्माण जैसे काम (राज्य की सूची देखें)",
        "जिस राज्य में काम कर रहे हैं, आम तौर पर वहीं के बोर्ड में पंजीकरण होता है",
      ],
      callout: { kind: "info", html: "श्रमिक कार्ड और <a href=\"/service/e-shram-card.html\">e-Shram कार्ड</a> अलग हैं। e-Shram केंद्र सरकार का सभी असंगठित मज़दूरों का रजिस्ट्रेशन है (मुफ्त)। निर्माण मज़दूर दोनों बनवा सकते हैं; बोर्ड की योजनाएं सिर्फ श्रमिक कार्ड से मिलती हैं।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "<strong>आधार कार्ड</strong> (मोबाइल नंबर से जुड़ा हो तो OTP से आसानी)",
        "<strong>90 दिन काम का प्रमाण:</strong> ठेकेदार/नियोक्ता का प्रमाण पत्र, या राज्य के नियम के अनुसार पंचायत/निकाय/श्रमिक संगठन का प्रमाण या स्व-घोषणा",
        "<strong>उम्र का प्रमाण</strong>",
        "<strong>बैंक पासबुक</strong> (खाता मज़दूर के अपने नाम पर)",
        "पासपोर्ट साइज़ फोटो, परिवार/नॉमिनी का विवरण",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>अपने राज्य का बोर्ड पोर्टल खोलें:</strong> नीचे की राज्य सूची से अपने राज्य का पेज खोलें; वहां बोर्ड का सही पोर्टल और तरीका दिया है।",
        "<strong>पंजीकरण फॉर्म भरें:</strong> आधार, नाम, पता, काम का प्रकार, बैंक खाता और परिवार का विवरण भरें।",
        "<strong>कागज़ अपलोड करें</strong> और राज्य की तय पंजीकरण फीस/अंशदान भरें।",
        "<strong>सत्यापन:</strong> श्रम विभाग/बोर्ड का अधिकारी जांच करके पंजीकरण मंज़ूर करता है।",
        "<strong>कार्ड और नवीनीकरण:</strong> पंजीकरण संख्या/कार्ड मिलने के बाद राज्य के नियम के अनुसार समय पर नवीनीकरण (renewal) करवाएं, वरना योजनाओं का लाभ रुक सकता है।",
      ],
      callout: { kind: "ok", html: 'खुद ऑनलाइन न भर पाएं तो <a href="/tools/csc-locator.html">नज़दीकी CSC</a> या ज़िला श्रम कार्यालय से मदद लें। किसी बिचौलिये को फीस से ज़्यादा पैसा न दें।' },
    },
    {
      id: "rajya",
      title: "राज्यवार श्रमिक कार्ड गाइड",
      intro: "हर राज्य का बोर्ड, पोर्टल, फीस और योजनाएं अलग हैं। अपने राज्य का पेज खोलें:",
      html: '<a href="/states/uttar-pradesh-labour-card.html">उत्तर प्रदेश</a> · <a href="/states/bihar-labour-card.html">बिहार</a> · <a href="/states/madhya-pradesh-labour-card.html">मध्य प्रदेश</a> · <a href="/states/rajasthan-labour-card.html">राजस्थान</a> · <a href="/states/maharashtra-labour-card.html">महाराष्ट्र</a> · <a href="/states/delhi-labour-card.html">दिल्ली</a> · <a href="/states/haryana-labour-card.html">हरियाणा</a> · <a href="/states/punjab-labour-card.html">पंजाब</a> · <a href="/states/gujarat-labour-card.html">गुजरात</a> · <a href="/states/jharkhand-labour-card.html">झारखंड</a> · <a href="/states/chhattisgarh-labour-card.html">छत्तीसगढ़</a> · <a href="/states/odisha-labour-card.html">ओडिशा</a> · <a href="/states/west-bengal-labour-card.html">पश्चिम बंगाल</a> · <a href="/states/uttarakhand-labour-card.html">उत्तराखंड</a> · <a href="/states/himachal-pradesh-labour-card.html">हिमाचल प्रदेश</a> · <a href="/states/karnataka-labour-card.html">कर्नाटक</a> · <a href="/states/tamil-nadu-labour-card.html">तमिलनाडु</a> · <a href="/states/kerala-labour-card.html">केरल</a> · <a href="/states/andhra-pradesh-labour-card.html">आंध्र प्रदेश</a> · <a href="/states/telangana-labour-card.html">तेलंगाना</a> · <a href="/states/assam-labour-card.html">असम</a> · <a href="/states/jammu-kashmir-labour-card.html">जम्मू-कश्मीर</a>',
    },
    {
      id: "labh",
      title: "बोर्ड से आम तौर पर मिलने वाले लाभ",
      intro: "योजनाओं के नाम और राशि राज्य बोर्ड तय करता है। ज़्यादातर राज्यों में इस तरह की योजनाएं हैं:",
      list: [
        "बच्चों की पढ़ाई के लिए छात्रवृत्ति/प्रोत्साहन",
        "बेटी या मज़दूर की शादी में सहायता",
        "प्रसूति (मातृत्व) सहायता",
        "60 साल के बाद पेंशन (नियमित पंजीकरण की शर्त के साथ)",
        "दुर्घटना, दिव्यांगता या मृत्यु पर परिवार को सहायता",
        "औज़ार, साइकिल, घर या इलाज से जुड़ी सहायता (कुछ राज्यों में)",
      ],
      callout: { kind: "warn", html: "किसी वेबसाइट या वीडियो में बताई गई \"सभी राज्यों में एक जैसी\" राशि पर भरोसा न करें। अपने राज्य के बोर्ड की योजना सूची ही मानें।" },
    },
  ],
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code: सामाजिक सुरक्षा संहिता, 2020" },
    { href: "https://labour.gov.in/", title: "श्रम एवं रोज़गार मंत्रालय" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल", note: "हेल्पलाइन 14434" },
  ],
  faq: [
    { q: "श्रमिक कार्ड कौन बनवा सकता है?", a: "18 से 60 साल का निर्माण मज़दूर, जिसने पिछले 12 महीनों में कम से कम 90 दिन भवन या दूसरा निर्माण कार्य किया हो।" },
    { q: "श्रमिक कार्ड और e-Shram कार्ड में क्या फर्क है?", a: "श्रमिक कार्ड राज्य का निर्माण मज़दूर कल्याण बोर्ड बनाता है और बोर्ड की योजनाएं इसी से मिलती हैं। e-Shram केंद्र सरकार का सभी असंगठित मज़दूरों का मुफ्त रजिस्ट्रेशन है। दोनों बनवा सकते हैं।" },
    { q: "पंजीकरण फीस कितनी है?", a: "फीस और सालाना अंशदान हर राज्य के बोर्ड का अलग है। अपने राज्य के पेज या बोर्ड के पोर्टल पर देखें।" },
    { q: "नए लेबर कोड के बाद क्या पुराना कार्ड चलेगा?", a: "हाँ। सामाजिक सुरक्षा संहिता 21 नवंबर 2025 से लागू है, पर नए नियम पूरी तरह लागू होने तक पुराने बोर्ड, नियम और योजनाएं जारी हैं। समय पर नवीनीकरण करवाते रहें।" },
    { q: "दूसरे राज्य में काम करता हूँ तो कहां पंजीकरण करूं?", a: "आम तौर पर जिस राज्य में निर्माण कार्य कर रहे हैं, उसी राज्य के बोर्ड में। नियम के लिए उस राज्य के श्रम कार्यालय से पूछें।" },
  ],
  related: [
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का मुफ्त रजिस्ट्रेशन" },
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "👴", title: "PM श्रम योगी मानधन", text: "असंगठित मज़दूरों की पेंशन" },
    { href: "/states/uttar-pradesh-labour-card.html", emoji: "🏗️", title: "UP लेबर कार्ड", text: "उत्तर प्रदेश बोर्ड" },
    { href: "/states/bihar-labour-card.html", emoji: "🏗️", title: "बिहार लेबर कार्ड", text: "बिहार बोर्ड" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "आवेदन में मदद" },
  ],
  aside: [
    { href: "#rajya", label: "🗺️ अपना राज्य चुनें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
