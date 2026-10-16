import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/labour-card-construction-workers.html (web/src/guides/doc/
// labour-card-construction-workers.ts), so this post takes the "before you
// apply, and when things go wrong" angle and links to that guide and the
// per-state labour card pages for boards, portals and fees.
// Facts reused from that guide (checked 15 Oct 2026, indiacode.nic.in Code on
// Social Security 2020 s.106: building worker 18 to under 60 with 90 days of
// building work in the preceding 12 months; four Labour Codes in force from
// 21 Nov 2025 with existing boards/schemes continuing during transition) and
// from doc/e-shram-card.ts (e-Shram free, helpline 14434, BOCW data shared
// with states). Fees, renewal periods and scheme amounts differ by state and
// are deliberately not given here.

export const labourCardForConstructionWorkersCompleteRegistrationGuideMsbuo3db0: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "निर्माण श्रमिक कार्ड" },
  ],
  docHi: "निर्माण श्रमिक कार्ड",
  title: "निर्माण श्रमिकों के लिए श्रमिक कार्ड: पूरी पंजीकरण गाइड",
  description: "निर्माण श्रमिक राज्य श्रमिक कल्याण बोर्ड कार्ड के लिए कैसे पंजीकरण करें, कौन से दस्तावेज़ चाहिए, और यह असल में क्या-क्या लाभ देता है।",
  published: "2026-08-02",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "निर्माण मज़दूरों का श्रमिक कार्ड: आवेदन से पहले की तैयारी, आम गलतियां और लाभ न मिले तो क्या करें",
  lead: "राजमिस्त्री, बेलदार, कारपेंटर, पेंटर, प्लंबर जैसे निर्माण मज़दूरों का श्रमिक कार्ड (लेबर कार्ड) राज्य का <strong>भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (BOCW बोर्ड)</strong> बनाता है। 18 से 60 साल का मज़दूर, जिसने पिछले 12 महीनों में कम से कम <strong>90 दिन</strong> निर्माण कार्य किया हो, पंजीकरण करा सकता है। इसी कार्ड से बोर्ड की पढ़ाई, शादी, प्रसूति, पेंशन और मृत्यु सहायता जैसी योजनाएं मिलती हैं; फीस, नवीनीकरण और राशि हर राज्य की अलग है।",
  facts: [
    ["कौन बनाता है", "राज्य का BOCW कल्याण बोर्ड"],
    ["उम्र", "18 से 60 साल"],
    ["शर्त", "12 महीनों में 90 दिन निर्माण कार्य"],
    ["फीस और योजनाएं", "राज्य के अनुसार"],
  ],
  sections: [
    {
      id: "taiyari",
      title: "आवेदन से पहले यह तैयार रखें",
      list: [
        "<strong>आधार कार्ड</strong>, और आधार से जुड़ा चालू मोबाइल नंबर (OTP के लिए)",
        "<strong>90 दिन काम का प्रमाण:</strong> ठेकेदार/नियोक्ता का प्रमाण पत्र, या राज्य के नियम के अनुसार पंचायत, नगर निकाय या पंजीकृत श्रमिक संगठन का प्रमाण",
        "<strong>अपने नाम का बैंक खाता</strong> (पासबुक की कॉपी); सहायता की रकम इसी में आती है",
        "उम्र का प्रमाण, पासपोर्ट साइज़ फोटो, परिवार और नॉमिनी का विवरण",
      ],
      callout: { kind: "info", html: "अपने राज्य का बोर्ड, पोर्टल और फीस जानने के लिए <a href=\"/service/labour-card-construction-workers.html#rajya\">राज्यवार श्रमिक कार्ड सूची</a> से अपना राज्य खोलें।" },
    },
    {
      id: "galti",
      title: "आम गलतियां जिनसे लाभ रुक जाता है",
      table: {
        head: ["गलती", "नतीजा", "क्या करें"],
        rows: [
          ["नवीनीकरण (renewal) समय पर नहीं कराया", "पंजीकरण निष्क्रिय, योजनाओं का आवेदन रुक सकता है", "राज्य के नियम के अनुसार समय से पहले नवीनीकरण और अंशदान जमा करें"],
          ["बैंक खाता किसी और के नाम का", "सहायता की रकम अटकती है", "अपने नाम का आधार से जुड़ा खाता दें"],
          ["परिवार/नॉमिनी का नाम नहीं जोड़ा", "बच्चों की छात्रवृत्ति या मृत्यु सहायता में दिक्कत", "प्रोफाइल में परिवार के सदस्य और नॉमिनी जोड़ें"],
          ["योजना का आवेदन देर से", "ज़्यादातर योजनाओं में घटना के बाद समय-सीमा होती है", "शादी, प्रसव या मृत्यु के बाद बोर्ड की समय-सीमा में आवेदन करें"],
          ["निर्माण कार्य न करने वाले का पंजीकरण", "जांच में रद्द, वसूली भी हो सकती है", "सिर्फ असली निर्माण मज़दूर ही आवेदन करें"],
        ],
      },
    },
    {
      id: "labh-nahi",
      title: "आवेदन अटका है या लाभ नहीं मिला तो",
      steps: [
        "बोर्ड के पोर्टल पर पंजीकरण/आवेदन संख्या से <strong>स्थिति (status)</strong> देखें और आपत्ति (objection) का कारण पढ़ें।",
        "कमी वाला कागज़ तय समय में दोबारा अपलोड करें या जमा करें।",
        "फिर भी हल न हो तो आवेदन की रसीद लेकर <strong>ज़िला/तहसील श्रम कार्यालय</strong> में लिखित शिकायत दें।",
        "राज्य के जनशिकायत पोर्टल या <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर भी शिकायत कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "\"पक्का कार्ड\" या \"₹ हज़ारों की सहायता दिलाने\" के नाम पर पैसे मांगने वाले एजेंटों से बचें। सिर्फ राज्य की तय फीस दें और रसीद लें। मदद चाहिए तो <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> या श्रम कार्यालय जाएं।" },
    },
    {
      id: "eshram",
      title: "श्रमिक कार्ड, ई-श्रम और नया लेबर कोड",
      list: [
        "<strong>ई-श्रम कार्ड</strong> केंद्र का सभी असंगठित मज़दूरों का मुफ्त पंजीकरण है; बोर्ड की योजनाएं उससे नहीं मिलतीं। निर्माण मज़दूर दोनों बनवा सकते हैं: <a href=\"/service/e-shram-card.html\">ई-श्रम गाइड</a>।",
        "<strong>दूसरे राज्य में काम:</strong> आम तौर पर जिस राज्य में निर्माण कार्य कर रहे हैं, वहीं के बोर्ड में पंजीकरण होता है।",
        "<strong>नया कानून:</strong> 21 नवंबर 2025 से सामाजिक सुरक्षा संहिता 2020 लागू है। नए नियम पूरी तरह लागू होने तक पुराने बोर्ड, नियम और योजनाएं चलती रहती हैं; आपका पुराना कार्ड मान्य है।",
      ],
    },
  ],
  official: [
    { href: "https://labour.gov.in/", title: "श्रम एवं रोज़गार मंत्रालय" },
    { href: "https://www.indiacode.nic.in/", title: "India Code: सामाजिक सुरक्षा संहिता, 2020" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल", note: "हेल्पलाइन 14434" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "निर्माण श्रमिक कार्ड कौन बनवा सकता है?", a: "18 से 60 साल का मज़दूर, जिसने पिछले 12 महीनों में कम से कम 90 दिन भवन या दूसरा निर्माण कार्य किया हो।" },
    { q: "श्रमिक कार्ड बनवाने की फीस कितनी है?", a: "हर राज्य के बोर्ड की फीस और अंशदान अलग है। अपने राज्य के पेज या बोर्ड के पोर्टल पर देखें, और रसीद ज़रूर लें।" },
    { q: "नवीनीकरण नहीं कराया तो क्या होगा?", a: "पंजीकरण निष्क्रिय हो सकता है और योजनाओं का लाभ रुक सकता है। राज्य के नियम के अनुसार जल्द से जल्द नवीनीकरण कराएं।" },
    { q: "क्या ई-श्रम कार्ड से श्रमिक कार्ड की योजनाएं मिलती हैं?", a: "नहीं। बोर्ड की योजनाएं सिर्फ राज्य के श्रमिक कार्ड से मिलती हैं। ई-श्रम अलग, मुफ्त पंजीकरण है।" },
    { q: "नए लेबर कोड के बाद पुराना कार्ड चलेगा?", a: "हां। नए नियम पूरी तरह लागू होने तक पुराने बोर्ड और योजनाएं जारी हैं। नवीनीकरण समय पर कराते रहें।" },
  ],
  related: [
    { href: "/service/labour-card-construction-workers.html", emoji: "👷", title: "श्रमिक कार्ड गाइड", text: "पात्रता, कागज़, राज्यवार बोर्ड" },
    { href: "/states/uttar-pradesh-labour-card.html", emoji: "🏗️", title: "UP लेबर कार्ड", text: "उत्तर प्रदेश बोर्ड" },
    { href: "/states/bihar-labour-card.html", emoji: "🏗️", title: "बिहार लेबर कार्ड", text: "बिहार बोर्ड" },
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "ई-श्रम कार्ड", text: "असंगठित मज़दूरों का मुफ्त पंजीकरण" },
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "👴", title: "PM श्रम योगी मानधन", text: "असंगठित मज़दूरों की पेंशन" },
  ],
  aside: [
    { href: "/service/labour-card-construction-workers.html#rajya", label: "🗺️ अपना राज्य चुनें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
