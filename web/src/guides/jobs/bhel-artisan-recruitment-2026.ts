import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; careers.bhel.in and the official PDF could not
// be opened from the sandbox, so coverage of BHEL's short notice was used):
// testbook.com, adda247.com, careerpower.in (short notice), engineersacademy.org,
// freejobalert.com (article 3073301), karmasandhan.com, truejobalert.com,
// indiangovtjobs.co.in, centralstatejobs.in, jobsarkariupdate.in.
// Agreed facts: short advertisement 01/2026 dated 13 Oct 2026; 660 tentative
// Artisan Grade-IV posts in 7 trades across 9 units (Fitter 278, Welder 104,
// Machinist 101, Electrician 90, Turner 52, Electronics Mechanic 23,
// Foundryman 12; HPBP Tiruchirappalli the largest unit with 150); 10th + ITI
// (NTC) + NAC in the trade, 60% (55% SC/ST) in NTC and NAC; upper age 27
// (General/EWS) on 1 Oct 2026, relaxation as per rules; online only at
// careers.bhel.in; CBT + document verification (some add skill test).
// NOT settled: start date (19 Oct in some, 21 Oct in most), last date (18 Nov
// 2026 in several, "to be announced" in others), fee (one site ₹1,072), pay
// (figures from ₹24,000 to ₹65,000 conflict), exam date (December, tentative).
// These are left to the detailed notice.
export const bhelArtisanRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "BHEL आर्टिजन 2026" },
  ],
  docHi: "BHEL आर्टिजन भर्ती 2026",
  title: "बीएचईएल आर्टिजन भर्ती 2026 — 660 पद (ITI)",
  description: "BHEL आर्टिजन ग्रेड-IV भर्ती 2026: 10वीं + ITI + NAC वालों के लिए 660 पद। आवेदन अक्टूबर 2026 से careers.bhel.in पर, आखिरी तारीख संभावित 18 नवंबर।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "BHEL आर्टिजन भर्ती 2026: ITI पास के लिए 660 पद",
  lead: "<strong>स्थिति: आवेदन जल्द शुरू होगा।</strong> सरकारी कंपनी भारत हेवी इलेक्ट्रिकल्स लिमिटेड (BHEL) ने आर्टिजन ग्रेड-IV के <strong>660 पदों</strong> का संक्षिप्त विज्ञापन (01/2026) जारी किया है। फिटर, वेल्डर, मशीनिस्ट, इलेक्ट्रीशियन, टर्नर, इलेक्ट्रॉनिक्स मैकेनिक और फाउंड्रीमैन ट्रेड के <strong>10वीं + ITI + NAC</strong> पास उम्मीदवार आवेदन कर सकेंगे। ऑनलाइन आवेदन अक्टूबर 2026 के तीसरे हफ्ते से careers.bhel.in पर शुरू होने की खबर है; अधिकतर रिपोर्टों में आखिरी तारीख <strong>18 नवंबर 2026</strong> बताई गई है।",
  facts: [
    ["कुल पद", "660 (7 ट्रेड, 9 यूनिट)"],
    ["योग्यता", "10वीं + ITI (NTC) + NAC"],
    ["अधिकतम उम्र", "27 साल (सामान्य/EWS, 1 अक्टूबर 2026 को)"],
    ["आवेदन", "<a href=\"https://careers.bhel.in/\" target=\"_blank\" rel=\"noopener nofollow\">careers.bhel.in</a>"],
  ],
  notice: "18 अक्टूबर 2026 तक केवल संक्षिप्त विज्ञापन आया है। आवेदन शुरू होने की तारीख (19 या 21 अक्टूबर) और आखिरी तारीख (संभावित 18 नवंबर 2026) पर रिपोर्टों में अंतर है। फीस और वेतन विस्तृत विज्ञापन में आएंगे। आवेदन से पहले careers.bhel.in पर विस्तृत विज्ञापन ज़रूर पढ़ें। यह साइट निजी है, BHEL या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["संक्षिप्त विज्ञापन (01/2026)", "13 अक्टूबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "21 अक्टूबर 2026 (कुछ रिपोर्टों में 19 अक्टूबर)"],
          ["आवेदन की आखिरी तारीख", "18 नवंबर 2026 (संभावित, विस्तृत विज्ञापन में देखें)"],
          ["कंप्यूटर आधारित परीक्षा (CBT)", "दिसंबर 2026 (संभावित)"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["ट्रेड", "पद"],
        rows: [
          ["फिटर", "278"],
          ["वेल्डर", "104"],
          ["मशीनिस्ट", "101"],
          ["इलेक्ट्रीशियन", "90"],
          ["टर्नर", "52"],
          ["इलेक्ट्रॉनिक्स मैकेनिक", "23"],
          ["फाउंड्रीमैन", "12"],
          ["<strong>कुल</strong>", "<strong>660</strong>"],
        ],
      },
      callout: { kind: "info", html: "पद BHEL की 9 यूनिटों में हैं; सबसे ज़्यादा (150) तिरुचिरापल्ली (HPBP) में। यूनिट-वार और वर्गवार पद विस्तृत विज्ञापन में देखें। <strong>वेतन:</strong> अलग-अलग रिपोर्टों में अलग आंकड़े हैं, इसलिए सही वेतन विस्तृत विज्ञापन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> 10वीं पास + संबंधित ट्रेड में ITI (NTC) + NAC (नेशनल अप्रेंटिसशिप सर्टिफिकेट)।",
        "<strong>न्यूनतम अंक:</strong> NTC और NAC दोनों में कम से कम 60% (SC/ST के लिए 55%)।",
        "<strong>उम्र:</strong> 1 अक्टूबर 2026 को सामान्य/EWS के लिए अधिकतम 27 साल। OBC, SC/ST, दिव्यांग और पूर्व सैनिकों को सरकारी नियमों के अनुसार छूट; सही सीमा विस्तृत विज्ञापन में देखें।",
      ],
      html: "अपनी उम्र हमारे <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से 1 अक्टूबर 2026 की तारीख डालकर देखें।",
    },
    {
      id: "fees",
      title: "फीस",
      html: "फीस की राशि पर रिपोर्टें पक्की नहीं हैं: <strong>नोटिफिकेशन में देखें।</strong> फीस केवल ऑनलाइन भरें और रसीद संभालकर रखें।",
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>कंप्यूटर आधारित परीक्षा (CBT)।</strong>",
        "<strong>दस्तावेज़ जांच</strong> (कुछ रिपोर्टों के अनुसार स्किल टेस्ट भी)।",
        "<strong>मेडिकल जांच</strong> के बाद नियुक्ति।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://careers.bhel.in/\" target=\"_blank\" rel=\"noopener nofollow\">careers.bhel.in</a> खोलें और Artisan भर्ती (विज्ञापन 01/2026) का विस्तृत विज्ञापन पढ़ें।",
        "आवेदन लिंक खुलने पर मोबाइल और ईमेल से रजिस्ट्रेशन करें।",
        "ट्रेड और यूनिट चुनें, 10वीं, ITI और NAC के अंक भरें।",
        "फोटो और हस्ताक्षर तय साइज़ में अपलोड करें; ज़रूरत हो तो <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> इस्तेमाल करें।",
        "फीस भरें और फाइनल फॉर्म का प्रिंट रखें। एक से ज़्यादा आवेदन करने पर केवल आखिरी आवेदन माना जा सकता है।",
      ],
      callout: { kind: "warn", html: "आवेदन केवल careers.bhel.in पर होता है। नौकरी लगवाने के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://careers.bhel.in/", title: "BHEL करियर पोर्टल", note: "आर्टिजन भर्ती 01/2026 का विज्ञापन और आवेदन" },
    { href: "https://www.bhel.com/", title: "भारत हेवी इलेक्ट्रिकल्स लिमिटेड" },
  ],
  faq: [
    { q: "BHEL आर्टिजन 2026 का फॉर्म कब से भर सकते हैं?", a: "रिपोर्टों के अनुसार ऑनलाइन आवेदन 21 अक्टूबर 2026 से (कुछ में 19 अक्टूबर) careers.bhel.in पर शुरू होगा।" },
    { q: "आखिरी तारीख क्या है?", a: "अधिकतर रिपोर्टों में 18 नवंबर 2026। यह विस्तृत विज्ञापन में पक्की होगी, इसलिए वेबसाइट पर ज़रूर जांचें।" },
    { q: "कौन आवेदन कर सकता है?", a: "10वीं पास जिनके पास संबंधित ट्रेड में ITI (NTC) और NAC है, और दोनों में 60% अंक (SC/ST 55%) हैं।" },
    { q: "किन ट्रेड में पद हैं?", a: "फिटर 278, वेल्डर 104, मशीनिस्ट 101, इलेक्ट्रीशियन 90, टर्नर 52, इलेक्ट्रॉनिक्स मैकेनिक 23 और फाउंड्रीमैन 12।" },
    { q: "उम्र सीमा क्या है?", a: "1 अक्टूबर 2026 को सामान्य/EWS के लिए अधिकतम 27 साल; आरक्षित वर्गों को नियमों के अनुसार छूट।" },
  ],
  related: [
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "10वीं/ITI के लिए और भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 अक्टूबर 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
  ],
  aside: [
    { href: "https://careers.bhel.in/", label: "⚙️ careers.bhel.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
