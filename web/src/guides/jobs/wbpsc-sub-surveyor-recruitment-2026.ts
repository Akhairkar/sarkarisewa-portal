import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; psc.wb.gov.in not opened from the sandbox, so
// coverage of the official advertisement was used):
// - rojgarlive, firstjob24, kollegeapply, freejobalert, indiajobalerts,
//   centralstatejobs, ignoubank, sarkariresult.app: WBPSC Advt. No. 22/2024
//   (detailed advertisement dated 14 Oct 2026), 1,145 Sub-Surveyor posts
//   under the Directorate of Land Records & Surveys; online 20 Oct - 9 Nov
//   2026 up to 3:00 PM (fee same day); edit window 11-16 Nov 2026;
//   qualification: Madhyamik + 3-year Diploma in Survey Engineering, or
//   Madhyamik + Surveyor ITI certificate with prescribed experience;
//   age 21-45 as on 1 Jan 2024; relaxation: WB SC/ST 5 yrs, WB OBC (NCL) 3
//   yrs, PwBD as per rules; pay Level 7 (₹24,700-63,900); fee ₹110 + service
//   charge with exemptions; selection: qualifying Bengali/Nepali paper,
//   200-mark objective paper, document verification.
// Fee exemption categories not confirmed consistently: left to the notice.
export const wbpscSubSurveyorRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "WBPSC सब-सर्वेयर भर्ती 2026" },
  ],
  docHi: "WBPSC सब-सर्वेयर भर्ती 2026",
  title: "WBPSC सब-सर्वेयर भर्ती 2026: 1,145 पद, आवेदन 9 नवंबर तक",
  description: "पश्चिम बंगाल लोक सेवा आयोग (WBPSC) सब-सर्वेयर भर्ती 2026: 1,145 पद, सर्वे डिप्लोमा/ITI वालों के लिए। आवेदन 9 नवंबर 2026 दोपहर 3 बजे तक।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "WBPSC सब-सर्वेयर भर्ती 2026: 1,145 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> पश्चिम बंगाल लोक सेवा आयोग (WBPSC) ने भूमि अभिलेख एवं सर्वेक्षण निदेशालय में <strong>सब-सर्वेयर के 1,145 पदों</strong> की भर्ती (विज्ञापन नं. 22/2024) के लिए ऑनलाइन आवेदन <strong>20 अक्टूबर से 9 नवंबर 2026 (दोपहर 3 बजे)</strong> तक मांगे हैं। माध्यमिक के साथ सर्वे इंजीनियरिंग डिप्लोमा या सर्वेयर ITI वाले आवेदन कर सकते हैं।",
  facts: [
    ["कुल पद", "1,145 सब-सर्वेयर"],
    ["आखिरी तारीख", "9 नवंबर 2026, दोपहर 3 बजे"],
    ["वेतन", "पे लेवल 7: ₹24,700 - ₹63,900"],
    ["आवेदन", "<a href=\"https://psc.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">psc.wb.gov.in</a>"],
  ],
  notice: "23 अक्टूबर 2026 तक: आवेदन चालू है। ये जानकारी WBPSC विज्ञापन पर आधारित रिपोर्टों से है। उम्र की गणना की तारीख (1 जनवरी 2024) पुराने संक्षिप्त विज्ञापन से चली आ रही है; फॉर्म भरने से पहले psc.wb.gov.in पर पूरा विज्ञापन और कोई शुद्धिपत्र ज़रूर देखें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विस्तृत विज्ञापन", "14 अक्टूबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "20 अक्टूबर 2026"],
          ["आवेदन और फीस की आखिरी तारीख", "9 नवंबर 2026 (दोपहर 3 बजे तक)"],
          ["फॉर्म सुधार (Edit)", "11 से 16 नवंबर 2026"],
          ["लिखित परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पद संख्या", "वेतन"],
        rows: [
          ["सब-सर्वेयर (भूमि अभिलेख एवं सर्वेक्षण निदेशालय, भूमि एवं भूमि सुधार विभाग)", "1,145", "पे लेवल 7: ₹24,700 - ₹63,900 + भत्ते"],
        ],
      },
      callout: { kind: "info", html: "वर्गवार आरक्षण (SC/ST/OBC/EWS आदि) विज्ञापन में दिया है।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> माध्यमिक (10वीं) पास और सर्वे इंजीनियरिंग में 3 साल का डिप्लोमा; <strong>या</strong> माध्यमिक के साथ सर्वेयर ट्रेड का ITI प्रमाणपत्र और तय अनुभव।",
        "<strong>भाषा:</strong> बंगाली (नेपाली भाषी के लिए नेपाली) पढ़ना-लिखना आना चाहिए; इसका क्वालिफाइंग पेपर होता है।",
        "<strong>उम्र:</strong> 1 जनवरी 2024 को 21 से 45 साल।",
        "<strong>छूट:</strong> पश्चिम बंगाल के SC/ST को 5 साल, OBC (नॉन-क्रीमी लेयर) को 3 साल; दिव्यांग को नियम के अनुसार।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      list: [
        "<strong>फीस:</strong> ₹110 + सर्विस चार्ज।",
        "पश्चिम बंगाल के SC/ST और कुछ अन्य वर्गों को छूट बताई गई है; सही नियम विज्ञापन में देखें।",
        "फीस 9 नवंबर 2026 (दोपहर 3 बजे) तक जमा करनी है।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>भाषा पेपर (क्वालिफाइंग):</strong> बंगाली/नेपाली।",
        "<strong>लिखित परीक्षा:</strong> 200 अंक का ऑब्जेक्टिव पेपर।",
        "<strong>दस्तावेज़ जांच।</strong>",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://psc.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">psc.wb.gov.in</a> खोलें और विज्ञापन 22/2024 (Sub-Surveyor) पढ़ें।",
        "पहली बार हैं तो One Time Enrolment करें, फिर लॉगिन करके Sub-Surveyor का फॉर्म चुनें।",
        "शिक्षा, अनुभव और वर्ग की जानकारी भरें; फोटो और हस्ताक्षर अपलोड करें (ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> से साइज़ ठीक करें)।",
        "फीस भरें और फॉर्म का प्रिंट रखें। गलती हो तो 11 से 16 नवंबर 2026 के बीच सुधारें।",
      ],
      callout: { kind: "warn", html: "आखिरी दिन समय दोपहर 3 बजे तक है, रात तक नहीं। इसलिए पहले ही फॉर्म भरें।" },
    },
  ],
  official: [
    { href: "https://psc.wb.gov.in/", title: "पश्चिम बंगाल लोक सेवा आयोग (WBPSC)", note: "विज्ञापन 22/2024 और आवेदन" },
  ],
  faq: [
    { q: "WBPSC सब-सर्वेयर का फॉर्म कब तक भर सकते हैं?", a: "9 नवंबर 2026 को दोपहर 3 बजे तक। फॉर्म सुधार 11 से 16 नवंबर 2026 तक।" },
    { q: "कितने पद हैं?", a: "सब-सर्वेयर के 1,145 पद।" },
    { q: "क्या ITI वाले आवेदन कर सकते हैं?", a: "हां, माध्यमिक के साथ सर्वेयर ITI और तय अनुभव हो तो। वरना सर्वे इंजीनियरिंग का 3 साल का डिप्लोमा चाहिए।" },
    { q: "उम्र किस तारीख से गिनी जाएगी?", a: "1 जनवरी 2024 को; 21 से 45 साल। आरक्षित वर्ग को छूट। शुद्धिपत्र आए तो वही मानें।" },
  ],
  related: [
    { href: "/jobs/index.html", emoji: "💼", title: "सभी सरकारी नौकरियां", text: "अभी खुली भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "किसी तारीख पर उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://psc.wb.gov.in/", label: "📝 psc.wb.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
