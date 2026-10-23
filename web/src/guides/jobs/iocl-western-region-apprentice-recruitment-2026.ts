import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; iocl.com and NAPS/NATS portals could not be
// opened from the sandbox, so coverage of the official notice was used and
// cross-checked): testbook.com, adda247.com, karmasandhan.com, freejobalert.com
// (article 3070858), sarkarijobs.com, kollegeapply.com, quicksarkari.com,
// marugujarat.in, govtexamupdate.com, skillupbihar.in.
// Agreed facts: IOCL Marketing Division, Western Region, Advt
// IOCL/MKTG/WR/APPR/2026-27; 335 seats (Graduate 174, Technician 99, Trade
// ITI 40, Data Entry Operator 22); online 05.10.2026 10:00 to 04.11.2026
// 17:00 via NAPS (trade) / NATS (graduate, technician); states: Maharashtra,
// Gujarat, Madhya Pradesh, Goa, Chhattisgarh, Dadra & Nagar Haveli and Daman &
// Diu; age 18-24 as on 30.09.2026, SC/ST +5, OBC-NCL +3; graduate = regular
// BA/B.Com/B.Sc/BBA with 50% (45% SC/ST/PwBD reserved); technician = 3-year
// diploma; trade = 10th + 2-yr ITI; DEO = 12th (+ skill certificate for the
// skill-certificate category); selection on qualifying marks merit, no written
// test or interview; no fee; 12 months. One headline saying 306/325 posts
// is treated as an error. Stipend not found in sources: left to the notice.
export const ioclWesternRegionApprenticeRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "IOCL अप्रेंटिस 2026" },
  ],
  docHi: "IOCL वेस्टर्न रीजन अप्रेंटिस 2026",
  title: "IOCL अप्रेंटिस भर्ती 2026 वेस्टर्न रीजन — 335 पद, बिना परीक्षा",
  description: "IOCL वेस्टर्न रीजन अप्रेंटिस 2026: ग्रेजुएट, डिप्लोमा, ITI और 12वीं पास के लिए 335 सीटें, बिना परीक्षा मेरिट से चयन। आवेदन 4 नवंबर 2026 शाम 5 बजे तक।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "IOCL वेस्टर्न रीजन अप्रेंटिस भर्ती 2026: 335 सीटें, आवेदन 4 नवंबर तक",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> इंडियन ऑयल (IOCL) के मार्केटिंग डिवीज़न, वेस्टर्न रीजन ने <strong>335 अप्रेंटिस सीटें</strong> निकाली हैं: ग्रेजुएट 174, टेक्नीशियन (डिप्लोमा) 99, ट्रेड (ITI) 40 और डेटा एंट्री ऑपरेटर 22। आवेदन <strong>4 नवंबर 2026 शाम 5 बजे</strong> तक NAPS/NATS पोर्टल से है। चयन बिना लिखित परीक्षा, पढ़ाई के अंकों की मेरिट से होगा। कोई फीस नहीं है।",
  facts: [
    ["कुल सीटें", "335"],
    ["आखिरी तारीख", "4 नवंबर 2026, शाम 5 बजे"],
    ["उम्र", "18 से 24 साल (30 सितंबर 2026 को)"],
    ["फीस", "कोई फीस नहीं"],
  ],
  notice: "23 अक्टूबर 2026 तक आवेदन चालू है (विज्ञापन IOCL/MKTG/WR/APPR/2026-27)। यह जानकारी IOCL के नोटिफिकेशन पर आधारित कई रिपोर्टों से जांची गई है; आवेदन से पहले iocl.com पर पूरा विज्ञापन पढ़ें। यह साइट निजी है, IOCL या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "5 अक्टूबर 2026, सुबह 10 बजे"],
          ["आवेदन की आखिरी तारीख", "4 नवंबर 2026, शाम 5 बजे"],
          ["मेरिट लिस्ट / दस्तावेज़ जांच", "बाद में IOCL की वेबसाइट पर"],
        ],
      },
    },
    {
      id: "pad",
      title: "सीटें और जगह",
      table: {
        head: ["अप्रेंटिस का प्रकार", "सीटें", "योग्यता"],
        rows: [
          ["ग्रेजुएट अप्रेंटिस", "174", "BA / B.Com / B.Sc / BBA (रेगुलर)"],
          ["टेक्नीशियन अप्रेंटिस", "99", "3 साल का इंजीनियरिंग डिप्लोमा"],
          ["ट्रेड अप्रेंटिस (ITI)", "40", "10वीं + 2 साल का ITI"],
          ["डेटा एंट्री ऑपरेटर (ट्रेड अप्रेंटिस)", "22", "12वीं पास"],
          ["<strong>कुल</strong>", "<strong>335</strong>", ""],
        ],
      },
      callout: { kind: "info", html: "ट्रेनिंग इन जगहों पर होगी: महाराष्ट्र, गुजरात, मध्य प्रदेश, गोवा, छत्तीसगढ़, दादरा-नगर हवेली और दमन-दीव। ट्रेनिंग 12 महीने की है। स्टाइपेंड अप्रेंटिस नियमों के अनुसार मिलेगा; राशि विज्ञापन में देखें। यह पक्की नौकरी नहीं है।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>ग्रेजुएट अप्रेंटिस:</strong> रेगुलर फुल-टाइम BA/B.Com/B.Sc/BBA, कम से कम 50% अंक (SC/ST/दिव्यांग के आरक्षित पदों पर 45%)।",
        "<strong>टेक्नीशियन अप्रेंटिस:</strong> संबंधित ब्रांच में 3 साल का फुल-टाइम डिप्लोमा, सामान्यतः 50% अंक (आरक्षित वर्ग 45%)।",
        "<strong>ट्रेड अप्रेंटिस:</strong> 10वीं पास और संबंधित ट्रेड में 2 साल का ITI।",
        "<strong>डेटा एंट्री ऑपरेटर:</strong> 12वीं पास; 'स्किल सर्टिफिकेट होल्डर' श्रेणी में डोमेस्टिक डेटा एंट्री ऑपरेटर का सर्टिफिकेट भी चाहिए। ग्रेजुएट इस पद के लिए पात्र हैं या नहीं, विज्ञापन में देखें।",
        "<strong>उम्र:</strong> 30 सितंबर 2026 को 18 से 24 साल। SC/ST को 5 साल, OBC (नॉन-क्रीमी लेयर) को 3 साल, दिव्यांग को नियम अनुसार छूट।",
      ],
      html: "जिन्होंने पहले अप्रेंटिसशिप कर ली है या ज़्यादा ऊंची डिग्री (जैसे इंजीनियरिंग ग्रेजुएट/MBA) है, उनकी पात्रता की शर्तें विज्ञापन में ध्यान से पढ़ें। उम्र <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से जांचें।",
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["सभी वर्ग", "कोई आवेदन फीस नहीं"],
        ],
      },
      callout: { kind: "warn", html: "IOCL अप्रेंटिसशिप के लिए कोई फीस नहीं है। कोई फीस या \"सीट पक्की\" कराने के नाम पर पैसे मांगे तो वह धोखा है।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>कोई लिखित परीक्षा या इंटरव्यू नहीं।</strong>",
        "योग्यता परीक्षा (ग्रेजुएशन/डिप्लोमा/ITI/12वीं) के अंकों से राज्यवार मेरिट लिस्ट।",
        "<strong>दस्तावेज़ जांच और मेडिकल फिटनेस</strong> के बाद ट्रेनिंग।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<strong>ट्रेड अप्रेंटिस (ITI, डेटा एंट्री):</strong> <a href=\"https://www.apprenticeshipindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">apprenticeshipindia.gov.in</a> (NAPS) पर रजिस्ट्रेशन करें।",
        "<strong>ग्रेजुएट और टेक्नीशियन अप्रेंटिस:</strong> <a href=\"https://nats.education.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nats.education.gov.in</a> (NATS) पर रजिस्ट्रेशन करें।",
        "रजिस्ट्रेशन नंबर लेकर <a href=\"https://iocl.com/apprenticeships\" target=\"_blank\" rel=\"noopener nofollow\">iocl.com/apprenticeships</a> पर वेस्टर्न रीजन (मार्केटिंग) के लिंक से आवेदन करें।",
        "राज्य और ट्रेड/विषय चुनें, अंक और दस्तावेज़ अपलोड करें, और 4 नवंबर 2026 शाम 5 बजे से पहले फॉर्म जमा करें।",
      ],
    },
  ],
  official: [
    { href: "https://iocl.com/apprenticeships", title: "इंडियन ऑयल — Apprenticeships", note: "विज्ञापन और आवेदन लिंक" },
    { href: "https://nats.education.gov.in/", title: "NATS पोर्टल", note: "ग्रेजुएट और टेक्नीशियन अप्रेंटिस" },
    { href: "https://www.apprenticeshipindia.gov.in/", title: "NAPS पोर्टल", note: "ट्रेड अप्रेंटिस" },
  ],
  faq: [
    { q: "IOCL अप्रेंटिस 2026 का फॉर्म कब तक भर सकते हैं?", a: "4 नवंबर 2026 शाम 5 बजे तक।" },
    { q: "क्या IOCL अप्रेंटिस के लिए परीक्षा होगी?", a: "नहीं। चयन ग्रेजुएशन/डिप्लोमा/ITI/12वीं के अंकों की मेरिट से होगा, फिर दस्तावेज़ जांच और मेडिकल।" },
    { q: "क्या बिहार या UP के लोग आवेदन कर सकते हैं?", a: "रिपोर्टों के अनुसार दूसरे राज्यों के उम्मीदवार भी आवेदन कर सकते हैं, पर ट्रेनिंग महाराष्ट्र, गुजरात, मध्य प्रदेश, गोवा, छत्तीसगढ़ या दादरा-नगर हवेली/दमन-दीव में ही होगी। राज्य से जुड़ी शर्तें विज्ञापन में देखें।" },
    { q: "उम्र सीमा क्या है?", a: "30 सितंबर 2026 को 18 से 24 साल; SC/ST को 5 और OBC (नॉन-क्रीमी लेयर) को 3 साल की छूट।" },
    { q: "क्या कोई फीस है?", a: "नहीं, आवेदन मुफ्त है।" },
  ],
  related: [
    { href: "/jobs/rrc-nwr-jaipur-apprentice-recruitment-2026.html", emoji: "🚆", title: "रेलवे NWR अप्रेंटिस", text: "ITI वालों के लिए अप्रेंटिसशिप" },
    { href: "/jobs/bhel-artisan-recruitment-2026.html", emoji: "🏭", title: "BHEL आर्टिज़न भर्ती", text: "ITI वालों के लिए PSU नौकरी" },
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "ITI, डिप्लोमा, ग्रेजुएट" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "30 सितंबर 2026 को उम्र" },
  ],
  aside: [
    { href: "https://iocl.com/apprenticeships", label: "⛽ iocl.com पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
