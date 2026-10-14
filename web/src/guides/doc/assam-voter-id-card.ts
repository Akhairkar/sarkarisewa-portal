import type { DocGuide } from "./types";

// National facts (checked 14 Oct 2026):
// - PIB 28.07.2022 (PRID 1845738): four qualifying dates 1 Jan / 1 Apr / 1 Jul /
//   1 Oct (RP Act s.14(b) amended), 17+ can apply in advance, roll updated every
//   quarter, new forms from 1 Aug 2022, Form 6B for Aadhaar (voluntary; no
//   inclusion denied / entry deleted for not giving Aadhaar).
// - PIB 29.10.2025 (PRID 2183805): National Contact Centre 1800-11-1950, 8 AM-8 PM
//   daily; State/District contact centres; 'Book-a-Call with BLO' on ECINET;
//   complaints@eci.gov.in. PIB 04.11.2025 (PRID 2186480): dial 1950 with STD code;
//   check name at voters.eci.gov.in.
// - ceogoa.nic.in (CEO site, read directly): links Form 6 = inclusion, Form 7 =
//   deletion, Form 8 = correction, Form 6A = overseas on voters.eci.gov.in;
//   name search electoralsearch.eci.gov.in; "Know your AC / BLO" at
//   electoralsearch.eci.gov.in/pollingstation; quarterly roll supplements.
// - eci.gov.in/e-epic/ (search extract): e-EPIC download after login with EPIC or
//   form reference number and OTP on the mobile registered in the roll.
// - ECI Press Note ECI/PN/120/2026 (26.09.2026): SIR completed in 20 States/UTs
//   incl. Bihar and West Bengal; Form 6 declaration only during SIR; Delhi claims
//   and objections extended to 30.10.2026, disposal to 30.11.2026.
// - ECI letter 23/2025/ERS(Vol-II) dated 01.10.2026: special drive after SIR
//   for left-out and first-time electors (BLO H2H visits, Form 6, booth camps).
// - PIB 14.05.2026 (PRID 2260955): SIR Phase-III schedule (16 States + 3 UTs);
//   Himachal Pradesh, J&K and Ladakh to be scheduled later.
// Left out: fees, processing time limits (not confirmable on an official page).
// State (checked 14 Oct 2026):
// - newsonair.gov.in (All India Radio, 10 Feb 2026) and The Week/PTI
//   (17 Nov 2025): ECI ordered Special Revision of the photo roll in Assam;
//   final roll published 10 Feb 2026 (2,49,58,139 electors).
// - Sentinel Assam (2022, quoting CEO Assam): Form 6 inclusion, Form 7
//   deletion, Form 8 correction/shifting/replacement EPIC, Form 6B Aadhaar.
// - ceoassam.nic.in: CEO site, search in electoral roll, Special Revision 2026
//   section (search results).
export const assamVoterIdCard: DocGuide = {
  state: {
    slug: "assam",
    hi: "असम"
  },
  doc: "voter-id-card",
  docHi: "वोटर आईडी कार्ड",
  title: "Assam Voter ID Card (e-EPIC) 2026: Apply & Status",
  description: "असम वोटर आईडी कार्ड 2026: Form 6 से नया नाम, Form 8 से सुधार/पता बदलें, e-EPIC डाउनलोड, वोटर लिस्ट में नाम जांचें, BLO और SIR की स्थिति।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  "h1": "असम वोटर आईडी कार्ड 2026: नया नाम (Form 6), सुधार (Form 8), e-EPIC और SIR",
  lead: "असम में नया वोटर आईडी (EPIC) बनवाने के लिए <strong>Form 6</strong> और नाम-पता सुधारने या पता बदलने के लिए <strong>Form 8</strong> भरा जाता है। आवेदन चुनाव आयोग के पोर्टल <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline ऐप पर खुद कर सकते हैं, या अपने इलाके के BLO को फॉर्म दे सकते हैं। वोटर लिस्ट का ताज़ा पुनरीक्षण पूरा हो चुका है, इसलिए नई अंतिम सूची में अपना नाम जांच लें।",
  facts: [
    [
      "नया नाम",
      "Form 6 (18 साल; 17+ पहले से आवेदन)"
    ],
    [
      "सुधार / पता",
      "Form 8"
    ],
    [
      "ऑनलाइन",
      "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>"
    ],
    [
      "SIR",
      "विशेष पुनरीक्षण पूरा; अंतिम सूची 10 फरवरी 2026"
    ]
  ],
  notice: "<strong>ध्यान दें:</strong> वोटर आईडी भारत निर्वाचन आयोग (ECI) बनाता है, राज्य का e-District/सेवा पोर्टल नहीं। फॉर्म सिर्फ voters.eci.gov.in, Voter Helpline ऐप या BLO/ERO के ज़रिए भरें; किसी बिचौलिये को OTP न बताएं।",
  sections: [
    {
      id: "sir",
      title: "असम में SIR (वोटर लिस्ट पुनरीक्षण) की स्थिति",
      intro: "असम में SIR की जगह चुनाव आयोग ने 17 नवंबर 2025 को वोटर लिस्ट के <strong>विशेष पुनरीक्षण (Special Revision)</strong> का आदेश दिया था। इसमें BLO ने घर-घर जांच की और <strong>अंतिम वोटर लिस्ट 10 फरवरी 2026</strong> को प्रकाशित हुई। नाम छूट गया हो तो अब Form 6 भरें।"
    },
    {
      id: "forms",
      title: "कौन सा फॉर्म किस काम का",
      table: {
        head: [
          "फॉर्म",
          "किस काम के लिए"
        ],
        rows: [
          [
            "<strong>Form 6</strong>",
            "वोटर लिस्ट में नया नाम जुड़वाना (पहली बार वोटर, या नाम कट गया हो)"
          ],
          [
            "<strong>Form 6A</strong>",
            "विदेश में रहने वाले भारतीय नागरिक (Overseas voter) का पंजीकरण"
          ],
          [
            "<strong>Form 6B</strong>",
            "पहले से बने वोटर का आधार नंबर देना (अपनी मर्ज़ी से)"
          ],
          [
            "<strong>Form 7</strong>",
            "वोटर लिस्ट से नाम हटाना या किसी नाम पर आपत्ति (जैसे मृत्यु, कहीं और चले जाना)"
          ],
          [
            "<strong>Form 8</strong>",
            "नाम, उम्र, फोटो जैसी जानकारी में सुधार; पता बदलना (उसी या दूसरे क्षेत्र में); खोए/खराब वोटर कार्ड की जगह नया कार्ड"
          ]
        ]
      },
      callout: {
        kind: "info",
        html: "आधार देना ज़रूरी नहीं है। चुनाव आयोग के अनुसार आधार न देने पर न तो नया नाम जोड़ने से मना किया जाएगा, न पुराना नाम काटा जाएगा।"
      }
    },
    {
      id: "umar",
      title: "उम्र और योग्यता तिथि (साल में 4 मौके)",
      list: [
        "वोटर बनने के लिए आप <strong>भारत के नागरिक</strong> हों और <strong>18 साल</strong> के हों; उसी जगह के सामान्य निवासी हों जहां नाम जुड़वा रहे हैं।",
        "2022 से साल में <strong>चार योग्यता तिथियां</strong> हैं: <strong>1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर</strong>। इनमें से जिस तारीख तक आप 18 के हो जाएंगे, उसके हिसाब से नाम जुड़ता है।",
        "<strong>17 साल पूरे</strong> होते ही पहले से (advance) Form 6 भर सकते हैं; 18 के होने वाली तिमाही में नाम जुड़ जाता है।",
        "वोटर लिस्ट अब हर तिमाही अपडेट होती है, इसलिए पूरे साल आवेदन कर सकते हैं।"
      ]
    },
    {
      id: "apply",
      title: "नया वोटर आईडी: Form 6 ऑनलाइन कैसे भरें",
      steps: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> खोलें या मोबाइल में <strong>Voter Helpline</strong> ऐप (चुनाव आयोग का) डालें।",
        "मोबाइल नंबर और OTP से अकाउंट बनाएं/लॉगिन करें।",
        "<strong>Form 6</strong> चुनें। राज्य में <strong>असम</strong>, फिर अपना ज़िला और विधानसभा क्षेत्र चुनें।",
        "नाम, जन्मतिथि, माता/पिता या पति/पत्नी का नाम, पूरा पता और मोबाइल नंबर भरें।",
        "नई पासपोर्ट साइज़ फोटो, <strong>उम्र का प्रमाण</strong> (जैसे जन्म प्रमाण पत्र या 10वीं की मार्कशीट) और <strong>पते का प्रमाण</strong> अपलोड करें।",
        "फॉर्म जांचकर जमा करें और <strong>Reference Number</strong> लिख लें। इसी नंबर से पोर्टल या ऐप पर आवेदन की स्थिति देखें।",
        "BLO आपके घर जांच के लिए आ सकता है। मंज़ूरी के बाद नाम वोटर लिस्ट में जुड़ता है और वोटर कार्ड (EPIC) जारी होता है।"
      ],
      callout: {
        kind: "ok",
        html: "ऑनलाइन नहीं भर सकते तो अपने <strong>BLO</strong> को या ERO/तहसील के निर्वाचन कार्यालय में Form 6 भरकर दें। बूथ स्तर के कैंप में भी फॉर्म भरवाए जाते हैं।"
      }
    },
    {
      id: "naam",
      title: "वोटर लिस्ट में अपना नाम कैसे जांचें",
      list: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर <strong>EPIC नंबर</strong> से, नाम-पता भरकर, या मोबाइल नंबर से खोजें।",
        "Voter Helpline ऐप में भी वोटर लिस्ट में नाम खोज सकते हैं।",
        "विधानसभा क्षेत्र और बूथ की पूरी वोटर लिस्ट (PDF) CEO Assam की वेबसाइट <a href=\"https://ceoassam.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoassam.nic.in</a> पर मिलती है।",
        "नाम नहीं मिला तो Form 6 भरें; नाम है पर गलत छपा है तो Form 8 भरें।"
      ]
    },
    {
      id: "sudhar",
      title: "सुधार, पता बदलना और नया कार्ड (Form 8)",
      list: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline ऐप पर लॉगिन करके <strong>Form 8</strong> चुनें और अपना EPIC नंबर डालें।",
        "जो बदलना है वह चुनें: नाम/उम्र/फोटो में सुधार, <strong>पता बदलना</strong> (उसी विधानसभा क्षेत्र में या दूसरे क्षेत्र/राज्य में), या <strong>replacement EPIC</strong> (कार्ड खो गया/खराब हो गया)।",
        "सुधार का प्रमाण (जैसे सही नाम/जन्मतिथि वाला दस्तावेज़ या नए पते का प्रमाण) अपलोड करें और Reference Number नोट करें।",
        "परिवार में किसी की मृत्यु हो गई हो या कोई हमेशा के लिए कहीं और चला गया हो तो उसका नाम हटाने के लिए <strong>Form 7</strong> भरें।"
      ],
      callout: {
        kind: "warn",
        html: "दूसरे राज्य या क्षेत्र में जाने पर नया Form 6 नहीं, <strong>Form 8 (पता बदलना)</strong> भरें; दो जगह नाम रखना कानूनन गलत है।"
      }
    },
    {
      id: "e-epic",
      title: "e-EPIC (डिजिटल वोटर कार्ड) डाउनलोड",
      steps: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> पर लॉगिन करें और <strong>E-EPIC Download</strong> चुनें।",
        "अपना <strong>EPIC नंबर</strong> या फॉर्म का Reference Number डालें और राज्य चुनें।",
        "वोटर रिकॉर्ड में दर्ज मोबाइल नंबर पर आया <strong>OTP</strong> डालें और PDF डाउनलोड करें।"
      ],
      callout: {
        kind: "info",
        html: "OTP उसी मोबाइल पर आता है जो वोटर लिस्ट के रिकॉर्ड में दर्ज है। नंबर दर्ज नहीं है या बदल गया है तो पहले BLO या हेल्पलाइन 1950 से मदद लें।"
      }
    },
    {
      id: "blo",
      title: "BLO और हेल्पलाइन",
      list: [
        "अपना बूथ और <strong>BLO</strong> (बूथ लेवल अधिकारी) जानने के लिए <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a> खोलें।",
        "चुनाव आयोग के <strong>ECINET</strong> ऐप/प्लेटफॉर्म पर <strong>Book-a-Call with BLO</strong> से BLO को सीधे कॉल का अनुरोध भेज सकते हैं।",
        "वोटर हेल्पलाइन: <strong>1950</strong> (अपने STD कोड के साथ)। राष्ट्रीय संपर्क केंद्र: <strong>1800-11-1950</strong> (टोल-फ्री, रोज़ सुबह 8 से रात 8 बजे)।",
        "शिकायत ईमेल: complaints@eci.gov.in"
      ]
    }
  ],
  official: [
    {
      href: "https://voters.eci.gov.in/",
      title: "Voters' Service Portal: Form 6, 7, 8 और e-EPIC (चुनाव आयोग)"
    },
    {
      href: "https://electoralsearch.eci.gov.in/",
      title: "वोटर लिस्ट में नाम खोजें (Electoral Search)"
    },
    {
      href: "https://ceoassam.nic.in/",
      title: "मुख्य निर्वाचन अधिकारी (CEO), असम"
    },
    {
      href: "https://www.eci.gov.in/",
      title: "भारत निर्वाचन आयोग"
    }
  ],
  faq: [
    {
      q: "क्या असम में अभी SIR चल रहा है?",
      a: "असम में SIR की जगह चुनाव आयोग ने 17 नवंबर 2025 को वोटर लिस्ट के विशेष पुनरीक्षण (Special Revision) का आदेश दिया था। इसमें BLO ने घर-घर जांच की और अंतिम वोटर लिस्ट 10 फरवरी 2026 को प्रकाशित हुई। नाम छूट गया हो तो अब Form 6 भरें।"
    },
    {
      q: "असम में नया वोटर आईडी कार्ड कैसे बनवाएं?",
      a: "voters.eci.gov.in या Voter Helpline ऐप पर Form 6 भरें, फोटो, उम्र और पते का प्रमाण अपलोड करें और Reference Number से स्थिति देखें। ऑनलाइन न हो सके तो BLO को फॉर्म दें।"
    },
    {
      q: "वोटर कार्ड में पता या नाम कैसे बदलें?",
      a: "Form 8 भरें। इसी फॉर्म से नाम/उम्र/फोटो का सुधार, पता बदलना (दूसरे राज्य में भी) और खोए कार्ड की जगह नया कार्ड मांगा जाता है।"
    },
    {
      q: "18 साल का होने से पहले आवेदन कर सकते हैं?",
      a: "हां। 17 साल पूरे होने पर पहले से Form 6 भर सकते हैं। 1 जनवरी, 1 अप्रैल, 1 जुलाई या 1 अक्टूबर में से जिस तारीख तक आप 18 के होंगे, उस तिमाही में नाम जुड़ेगा।"
    },
    {
      q: "e-EPIC डाउनलोड करते समय OTP नहीं आ रहा, क्या करें?",
      a: "OTP वोटर रिकॉर्ड में दर्ज मोबाइल पर ही आता है। नंबर दर्ज नहीं है या बदल गया है तो BLO से संपर्क करें या 1950 पर कॉल करें।"
    },
    {
      q: "असम के CEO की वेबसाइट कौन सी है?",
      a: "ceoassam.nic.in। यहां विधानसभा क्षेत्रवार वोटर लिस्ट और राज्य की सूचनाएं मिलती हैं। फॉर्म भरने का काम चुनाव आयोग के पोर्टल voters.eci.gov.in पर होता है।"
    }
  ],
  related: [
    {
      href: "/states/assam-sir-voter-list.html",
      emoji: "📋",
      title: "असम SIR वोटर लिस्ट",
      text: "नाम जांचें और SIR की जानकारी"
    },
    {
      href: "/service/e-voter-epic-download.html",
      emoji: "📥",
      title: "e-EPIC डाउनलोड",
      text: "डिजिटल वोटर कार्ड PDF"
    },
    {
      href: "/service/voter-id-card.html",
      emoji: "🗳️",
      title: "वोटर आईडी कार्ड: पूरी जानकारी",
      text: "सभी फॉर्म और नियम"
    },
    {
      href: "/special-intensive-revision-sir.html",
      emoji: "📝",
      title: "SIR क्या है",
      text: "वोटर लिस्ट का विशेष पुनरीक्षण"
    },
    {
      href: "/states/assam-domicile-certificate.html",
      emoji: "🏠",
      title: "असम निवास प्रमाण पत्र",
      text: "डोमिसाइल सर्टिफिकेट"
    },
    {
      href: "/tools/photo-resizer.html",
      emoji: "🖼️",
      title: "फोटो Resizer",
      text: "फॉर्म के साइज़ में, फ्री"
    }
  ],
  otherStatesTitle: "दूसरे राज्यों में वोटर आईडी कार्ड",
  aside: [
    {
      href: "https://voters.eci.gov.in/",
      label: "📝 Form 6 / Form 8 भरें"
    },
    {
      href: "https://electoralsearch.eci.gov.in/",
      label: "🔎 वोटर लिस्ट में नाम खोजें"
    }
  ]
};
