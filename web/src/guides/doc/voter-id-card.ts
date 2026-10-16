import type { DocGuide } from "./types";

// Sources (national facts shared with the per-state *-voter-id-card.ts guides,
// checked 14-15 Oct 2026):
// - PIB 28.07.2022 (PRID 1845738): four qualifying dates 1 Jan / 1 Apr / 1 Jul
//   / 1 Oct; 17+ can apply in advance; roll updated every quarter; Form 6B for
//   Aadhaar is voluntary (no inclusion denied / entry deleted for not giving
//   Aadhaar).
// - PIB 29.10.2025 (PRID 2183805): National Contact Centre 1800-11-1950, 8 AM -
//   8 PM; 'Book-a-Call with BLO' on ECINET; complaints@eci.gov.in. PIB
//   04.11.2025 (PRID 2186480): dial 1950 with STD code; voters.eci.gov.in.
// - ceogoa.nic.in: Form 6 / 6A / 7 / 8 on voters.eci.gov.in; name search at
//   electoralsearch.eci.gov.in; polling station / BLO lookup.
// - eci.gov.in/e-epic/ (search extract): e-EPIC download with EPIC or reference
//   number and OTP on the mobile registered in the roll.
// - ECI Press Note ECI/PN/120/2026 (26.09.2026) and ECI letter dated
//   01.10.2026: SIR completed in 20 States/UTs; special drive for left-out and
//   first-time electors.
// No fee is charged by ECI for enrolment; no official processing-time limit
// was confirmed, so none is stated.
export const voterIdCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "वोटर आईडी कार्ड" },
  ],
  docHi: "वोटर आईडी कार्ड (EPIC)",
  title: "वोटर आईडी कार्ड (EPIC)",
  description: "इलेक्टर फोटो पहचान पत्र (EPIC) भारत निर्वाचन आयोग द्वारा पंजीकृत मतदाताओं को जारी किया जाता है, जो मतदान पात्रता और पहचान का प्रमाण है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "वोटर आईडी कार्ड (EPIC) 2026: नया नाम (Form 6), सुधार (Form 8), e-EPIC और हेल्पलाइन",
  lead: "वोटर आईडी कार्ड (EPIC, Electors Photo Identity Card) भारत निर्वाचन आयोग (ECI) जारी करता है। नया नाम जुड़वाने के लिए <strong>Form 6</strong> और नाम, पता या फोटो में सुधार के लिए <strong>Form 8</strong> भरा जाता है। आवेदन <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, चुनाव आयोग के ऐप या अपने BLO के ज़रिए मुफ्त होता है।",
  facts: [
    ["जारी करता है", "भारत निर्वाचन आयोग (ECI)"],
    ["नया नाम", "Form 6 (18 साल; 17+ पहले से आवेदन)"],
    ["सुधार / पता", "Form 8"],
    ["हेल्पलाइन", "1950 (STD कोड के साथ)"],
  ],
  notice: "वोटर लिस्ट का विशेष गहन पुनरीक्षण (SIR) कई राज्यों में पूरा हो चुका है। अपने राज्य की नई अंतिम सूची में नाम ज़रूर जांचें; नाम कट गया हो तो Form 6 से दोबारा जुड़वा सकते हैं।",
  sections: [
    {
      id: "forms",
      title: "कौन सा फॉर्म किस काम का",
      table: {
        head: ["फॉर्म", "किस काम के लिए"],
        rows: [
          ["<strong>Form 6</strong>", "वोटर लिस्ट में नया नाम (पहली बार वोटर, या नाम कट गया हो)"],
          ["<strong>Form 6A</strong>", "विदेश में रहने वाले भारतीय नागरिक (Overseas voter)"],
          ["<strong>Form 6B</strong>", "पहले से बने वोटर का आधार नंबर देना (अपनी मर्ज़ी से)"],
          ["<strong>Form 7</strong>", "नाम हटाना या किसी नाम पर आपत्ति (मृत्यु, स्थायी रूप से कहीं और जाना)"],
          ["<strong>Form 8</strong>", "सुधार, पता बदलना (उसी या दूसरे क्षेत्र/राज्य में), खोए/खराब कार्ड की जगह नया कार्ड"],
        ],
      },
      callout: { kind: "info", html: "आधार देना ज़रूरी नहीं है। चुनाव आयोग के अनुसार आधार न देने पर न नया नाम जोड़ने से मना किया जाएगा, न पुराना नाम काटा जाएगा।" },
    },
    {
      id: "patrata",
      title: "कौन वोटर बन सकता है",
      list: [
        "<strong>भारत का नागरिक</strong>, जो जिस जगह नाम जुड़वा रहा है वहां का सामान्य निवासी हो।",
        "<strong>18 साल</strong> की उम्र। साल में चार योग्यता तिथियां हैं: <strong>1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर</strong>।",
        "<strong>17 साल पूरे</strong> होते ही पहले से Form 6 भर सकते हैं; 18 के होने वाली तिमाही में नाम जुड़ता है।",
        "एक व्यक्ति का नाम सिर्फ एक जगह की वोटर लिस्ट में हो सकता है।",
      ],
    },
    {
      id: "apply",
      title: "Form 6 ऑनलाइन कैसे भरें",
      steps: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> खोलें या चुनाव आयोग का ऐप डालें।",
        "मोबाइल नंबर और OTP से अकाउंट बनाएं/लॉगिन करें।",
        "<strong>Form 6</strong> चुनें; राज्य, ज़िला और विधानसभा क्षेत्र चुनें।",
        "नाम, जन्मतिथि, रिश्तेदार का नाम, पता और मोबाइल नंबर भरें।",
        "फोटो, <strong>उम्र का प्रमाण</strong> (जन्म प्रमाण पत्र, 10वीं की मार्कशीट आदि) और <strong>पते का प्रमाण</strong> अपलोड करें।",
        "फॉर्म जमा करके <strong>Reference Number</strong> लिख लें और उसी से स्थिति देखें।",
        "BLO जांच के लिए घर आ सकता है। मंज़ूरी के बाद नाम सूची में जुड़ता है और EPIC जारी होता है।",
      ],
      callout: { kind: "ok", html: "ऑनलाइन नहीं भर सकते तो अपने <strong>BLO</strong> को या ERO/तहसील के निर्वाचन कार्यालय में Form 6 भरकर दें। अपने राज्य की गाइड के लिए <a href=\"/states/\">राज्य सेवाएं</a> देखें।" },
    },
    {
      id: "naam",
      title: "वोटर लिस्ट में नाम जांचें और e-EPIC डाउनलोड करें",
      list: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर, नाम-पता या मोबाइल नंबर से नाम खोजें।",
        "<strong>e-EPIC:</strong> voters.eci.gov.in पर लॉगिन करके \"E-EPIC Download\" चुनें, EPIC या Reference Number डालें और वोटर रिकॉर्ड वाले मोबाइल पर आया OTP डालें। पूरा तरीका हमारी <a href=\"/service/e-voter-epic-download.html\">e-EPIC गाइड</a> में है।",
        "नाम नहीं मिला तो Form 6, नाम गलत छपा है तो Form 8 भरें।",
      ],
    },
    {
      id: "helpline",
      title: "BLO और हेल्पलाइन",
      list: [
        "अपना बूथ और BLO जानने के लिए <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a> देखें।",
        "ECINET ऐप पर <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेज सकते हैं।",
        "वोटर हेल्पलाइन <strong>1950</strong> (STD कोड के साथ); राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong> (टोल-फ्री, सुबह 8 से रात 8 बजे)।",
        "शिकायत ईमेल: complaints@eci.gov.in",
      ],
      callout: { kind: "warn", html: "वोटर कार्ड बनवाने की कोई सरकारी फीस नहीं है। OTP किसी बिचौलिये को न बताएं।" },
    },
  ],
  official: [
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal: Form 6, 7, 8 और e-EPIC (चुनाव आयोग)" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें (Electoral Search)" },
    { href: "https://eci.gov.in/", title: "भारत निर्वाचन आयोग", note: "हेल्पलाइन 1950 / 1800-11-1950" },
  ],
  faq: [
    { q: "नया वोटर आईडी कैसे बनवाएं?", a: "voters.eci.gov.in या चुनाव आयोग के ऐप पर Form 6 भरें, या अपने BLO को फॉर्म दें। फोटो, उम्र और पते का प्रमाण लगता है।" },
    { q: "वोटर आईडी में पता या नाम कैसे बदलें?", a: "Form 8 भरें। इसी फॉर्म से दूसरे क्षेत्र या राज्य में पता बदलना और खोए कार्ड की जगह नया कार्ड भी मांगा जाता है।" },
    { q: "क्या वोटर कार्ड के लिए आधार ज़रूरी है?", a: "नहीं। Form 6B से आधार देना अपनी मर्ज़ी पर है; आधार न देने पर नाम न जोड़ने या काटने की अनुमति नहीं है।" },
    { q: "क्या वोटर कार्ड बनवाने में पैसे लगते हैं?", a: "नहीं, चुनाव आयोग नाम जुड़वाने या सुधार के लिए कोई फीस नहीं लेता।" },
    { q: "बिना कार्ड के वोट डाल सकते हैं?", a: "वोट डालने के लिए नाम वोटर लिस्ट में होना ज़रूरी है। कार्ड न हो तो चुनाव आयोग की मान्य वैकल्पिक पहचान पत्र सूची में से कोई पहचान पत्र दिखाया जा सकता है।" },
  ],
  related: [
    { href: "/service/e-voter-epic-download.html", emoji: "📥", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🗳️", title: "SIR (वोटर लिस्ट पुनरीक्षण)", text: "नाम जांचें, दोबारा जुड़वाएं" },
    { href: "/states/uttar-pradesh-voter-id-card.html", emoji: "🗺️", title: "उत्तर प्रदेश वोटर आईडी", text: "राज्य की गाइड" },
    { href: "/states/bihar-voter-id-card.html", emoji: "🗺️", title: "बिहार वोटर आईडी", text: "राज्य की गाइड" },
    { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड", text: "पहचान का प्रमाण" },
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र", text: "उम्र का प्रमाण" },
  ],
  aside: [
    { href: "https://voters.eci.gov.in/", label: "🗳️ Voters' Service Portal" },
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 वोटर लिस्ट में नाम" },
  ],
};
