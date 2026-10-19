import type { DocGuide } from "../doc/types";

// Sources (checked 19 Oct 2026; dsssb.delhi.gov.in / dsssbonline.nic.in not
// opened from the sandbox, so coverage of Advt. 04/2026 was used):
// - testbook, careerpower, indgovtjobs, karmasandhan, freejobalert,
//   fastjobsearchers, quicksarkari: Advt. 04/2026 dated 30 Sep 2026, 641
//   posts in Delhi District & Family Courts; online 6 Oct 2026 (12 noon) -
//   4 Nov 2026 (11 PM); age 18-27 on 1 Jun 2026; fee ₹100 (women, SC, ST,
//   PwBD, ESM exempt).
// - Post split (one listing): Sr PA 27, PA 206, JJA 174, Process Server 92,
//   Peon/Orderly/Dak Peon 142 (= 641). Other listings split differently.
// - Qualifications: Sr PA graduate + shorthand 110 wpm + typing 40; PA
//   graduate + shorthand 100 + typing 40; JJA graduate + typing 40 wpm;
//   Process Server matric/12th + LMV licence + 2 yrs driving; Peon matric.
// Left vague: pay levels, post-wise age variations, exam dates.
export const dsssbDistrictCourtRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "DSSSB ज़िला अदालत भर्ती" },
  ],
  docHi: "DSSSB ज़िला अदालत भर्ती 2026",
  title: "DSSSB दिल्ली ज़िला अदालत भर्ती 2026: 641 पद, आवेदन 4 नवंबर तक",
  description: "DSSSB विज्ञापन 04/2026: दिल्ली की ज़िला और फैमिली कोर्ट में PA, JJA, प्रोसेस सर्वर और चपरासी के 641 पद। आवेदन 4 नवंबर 2026 तक, फीस ₹100।",
  published: "2026-10-19",
  modified: "2026-10-19",
  verified: "19 अक्टूबर 2026",
  h1: "DSSSB दिल्ली ज़िला अदालत भर्ती 2026: 641 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> दिल्ली अधीनस्थ सेवा चयन बोर्ड (DSSSB) ने विज्ञापन 04/2026 में दिल्ली की ज़िला और फैमिली अदालतों के <strong>641 पद</strong> निकाले हैं: सीनियर PA, PA, जूनियर ज्यूडिशियल असिस्टेंट (JJA), प्रोसेस सर्वर और चपरासी/ऑर्डरली/डाक पियन। ऑनलाइन आवेदन <strong>4 नवंबर 2026 रात 11 बजे</strong> तक dsssbonline.nic.in पर है।",
  facts: [
    ["कुल पद", "641 (विज्ञापन 04/2026)"],
    ["आवेदन की आखिरी तारीख", "4 नवंबर 2026, रात 11 बजे"],
    ["उम्र", "1 जून 2026 को 18 से 27 साल"],
    ["आवेदन", "<a href=\"https://dsssbonline.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">dsssbonline.nic.in</a>"],
  ],
  notice: "19 अक्टूबर 2026 तक: आवेदन चालू है। ये जानकारी DSSSB विज्ञापन 04/2026 पर आधारित रिपोर्टों से है; पद-वार संख्या अलग-अलग रिपोर्टों में थोड़ी अलग है। फॉर्म भरने से पहले dsssb.delhi.gov.in पर विज्ञापन ज़रूर पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन जारी", "30 सितंबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "6 अक्टूबर 2026 (दोपहर 12 बजे)"],
          ["आवेदन और फीस की आखिरी तारीख", "4 नवंबर 2026 (रात 11 बजे)"],
          ["परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और योग्यता",
      table: {
        head: ["पद", "पद संख्या*", "योग्यता"],
        rows: [
          ["सीनियर पर्सनल असिस्टेंट", "27", "स्नातक, शॉर्टहैंड 110 शब्द/मिनट, टाइपिंग 40 शब्द/मिनट"],
          ["पर्सनल असिस्टेंट (PA)", "206", "स्नातक, शॉर्टहैंड 100 शब्द/मिनट, टाइपिंग 40 शब्द/मिनट, कंप्यूटर ज्ञान"],
          ["जूनियर ज्यूडिशियल असिस्टेंट (JJA)", "174", "स्नातक, कंप्यूटर पर टाइपिंग 40 शब्द/मिनट"],
          ["प्रोसेस सर्वर", "92", "10वीं/12वीं, LMV ड्राइविंग लाइसेंस और 2 साल का ड्राइविंग अनुभव"],
          ["चपरासी/ऑर्डरली/डाक पियन", "142", "10वीं पास"],
        ],
      },
      callout: { kind: "info", html: "*पद संख्या एक रिपोर्ट के अनुसार है (कुल 641); बैकलॉग पदों के कारण दूसरी रिपोर्टों में बंटवारा थोड़ा अलग है। वेतन स्तर और वर्ग-वार पद विज्ञापन में देखें।" },
    },
    {
      id: "umr",
      title: "उम्र और फीस",
      list: [
        "<strong>उम्र:</strong> 1 जून 2026 को 18 से 27 साल (रिपोर्टों के अनुसार)। किसी पद के लिए अलग सीमा हो तो विज्ञापन में देखें।",
        "<strong>छूट:</strong> SC/ST, OBC, दिव्यांग आदि को सरकारी नियमों के अनुसार; पूरी जानकारी विज्ञापन में।",
        "<strong>फीस:</strong> ₹100। महिलाएं, SC, ST, दिव्यांग (PwBD) और पूर्व सैनिकों के लिए फीस नहीं।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>लिखित परीक्षा:</strong> वस्तुनिष्ठ (MCQ) परीक्षा; कुछ पदों में वर्णनात्मक परीक्षा भी।",
        "<strong>स्किल टेस्ट:</strong> PA/सीनियर PA के लिए शॉर्टहैंड और JJA के लिए टाइपिंग टेस्ट।",
        "<strong>इंटरव्यू:</strong> रिपोर्टों के अनुसार कुछ पदों (जैसे JJA) में।",
        "<strong>दस्तावेज़ जांच।</strong>",
      ],
      html: "टाइपिंग की तैयारी के लिए हमारा <a href=\"/tools/typing-speed-test.html\">टाइपिंग स्पीड टेस्ट</a> इस्तेमाल करें।",
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://dsssbonline.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">dsssbonline.nic.in</a> खोलें। पहली बार हैं तो OTR (वन टाइम रजिस्ट्रेशन) करें।",
        "लॉगिन करके विज्ञापन 04/2026 में अपना पद चुनें।",
        "शिक्षा, वर्ग और पता भरें; फोटो और हस्ताक्षर अपलोड करें (<a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a>, <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a>)।",
        "फीस लागू हो तो ₹100 ऑनलाइन भरें और फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "अदालत में नौकरी लगवाने के नाम पर पैसे मांगने वालों से सावधान रहें; भर्ती केवल DSSSB परीक्षा से होती है।" },
    },
  ],
  official: [
    { href: "https://dsssbonline.nic.in/", title: "DSSSB ऑनलाइन आवेदन पोर्टल", note: "विज्ञापन 04/2026 का फॉर्म" },
    { href: "https://dsssb.delhi.gov.in/", title: "दिल्ली अधीनस्थ सेवा चयन बोर्ड (DSSSB)", note: "विज्ञापन और नोटिस" },
  ],
  faq: [
    { q: "DSSSB ज़िला अदालत भर्ती का फॉर्म कब तक भरें?", a: "4 नवंबर 2026 रात 11 बजे तक, dsssbonline.nic.in पर।" },
    { q: "कितने पद हैं?", a: "कुल 641: सीनियर PA, PA, JJA, प्रोसेस सर्वर और चपरासी/ऑर्डरली/डाक पियन।" },
    { q: "10वीं पास किस पद के लिए आवेदन कर सकते हैं?", a: "चपरासी/ऑर्डरली/डाक पियन के लिए। प्रोसेस सर्वर के लिए 10वीं/12वीं के साथ LMV लाइसेंस और 2 साल ड्राइविंग अनुभव चाहिए।" },
    { q: "फीस कितनी है?", a: "₹100। महिलाओं, SC, ST, दिव्यांग और पूर्व सैनिकों के लिए फीस नहीं है।" },
    { q: "उम्र सीमा क्या है?", a: "रिपोर्टों के अनुसार 1 जून 2026 को 18 से 27 साल, आरक्षित वर्गों को नियमों के अनुसार छूट।" },
  ],
  related: [
    { href: "/jobs/punjab-court-clerk-recruitment-2026.html", emoji: "⚖️", title: "पंजाब कोर्ट क्लर्क भर्ती", text: "ज़िला अदालतों में क्लर्क" },
    { href: "/tools/typing-speed-test.html", emoji: "⌨️", title: "टाइपिंग स्पीड टेस्ट", text: "JJA टाइपिंग की तैयारी" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जून 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://dsssbonline.nic.in/", label: "⚖️ dsssbonline.nic.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
