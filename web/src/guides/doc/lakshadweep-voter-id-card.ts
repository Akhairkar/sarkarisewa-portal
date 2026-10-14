import type { DocGuide } from "./types";

// National facts (checked 14 Oct 2026):
// - ECI Form 6 and Form 8 (current formats, hosted on ceo.mizoram.gov.in/storage/forms/):
//   Form 6 = inclusion of new voters (Rule 13(1) and 26, Registration of Electors
//   Rules 1960), photo 4.5 x 3.5 cm white background, DOB proof list (birth
//   certificate, Aadhaar, PAN, DL, Class X/XII certificate, passport), address
//   proof list (water/electricity/gas bill of at least 1 year, Aadhaar, bank/post
//   office passbook, passport, land records incl. Kisan Bahi, registered rent
//   lease deed, registered sale deed), Aadhaar optional ("I don't have Aadhaar"
//   option); Parliamentary Constituency used only in UTs without an assembly.
//   Form 8 = shifting of residence / correction of entries / replacement EPIC
//   without correction / marking as PwD. Form 7 = deletion/objection (Mizoram CEO
//   forms page "Deletion (Form 7)"; Arunachal CEO "Form 7 - Objection to inclusion").
// - CEO Manipur press note 1 Aug 2022: RP Act 1950 amended (notified 17 Jun 2022):
//   four qualifying dates 1 Jan, 1 Apr, 1 Jul, 1 Oct; 17+ can apply in advance;
//   Form 6B for Aadhaar via NVSP/Voter Helpline App.
// - CEO websites (Puducherry, Nagaland, Manipur, Arunachal): voters.eci.gov.in for
//   registration/status/e-EPIC, electoralsearch.eci.gov.in for name search,
//   electoralsearch.eci.gov.in/pollingstation "Know your Polling Station and
//   Officer", voters.eci.gov.in/home/ngsp for complaints, 1950 toll-free.
// - e-EPIC: OTP on mobile registered in the roll, e-KYC if not (Vikaspedia "All
//   about e-EPIC"); Voter Helpline App route (A&N CEO appeal, Nicobar Times 2024).
// - ECI Press Note ECI/PN/086/2026 (14 May 2026, copy on meghalaya.gov.in): SIR
//   Phase III schedule (Annexure-I); HP, J&K and Ladakh to be announced later.
// - CEO Sikkim press note (final roll 06.09.2026): appeal against ERO decision
//   under Section 24 RP Act 1950 / Rule 27 RER 1960 (DEO first, CEO second).
// Left out: any fee (not stated on an official page we could open), PVC card
// delivery times, exact app screen names.
// State facts:
// - ceolakshadweep.gov.in (search-result extracts of /electoral-rolls and press
//   notes; site not reachable from our checker): draft roll 16.12.2025; "SIR
//   Final Electoral Roll 2026 (Published on 14.02.2026)"; Quarter 2 Supplement
//   Electoral Roll 2026 published 10.04.2026.
// - SIR Phase II included Lakshadweep (ECI, Oct 2025; newsonair.gov.in).
export const lakshadweepVoterIdCard: DocGuide = {
  "state": {
    "slug": "lakshadweep",
    "hi": "लक्षद्वीप"
  },
  "doc": "voter-id-card",
  "docHi": "वोटर आईडी कार्ड",
  "title": "Lakshadweep Voter ID Card (e-EPIC) 2026",
  "description": "लक्षद्वीप वोटर आईडी कार्ड 2026: फॉर्म 6/7/8, e-EPIC डाउनलोड, SIR अंतिम वोटर लिस्ट (14 फरवरी 2026), नाम खोजें, BLO और हेल्पलाइन 1950।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "लक्षद्वीप वोटर आईडी कार्ड 2026: फॉर्म 6, e-EPIC और SIR की वोटर लिस्ट",
  "lead": "लक्षद्वीप में वोटर आईडी (EPIC) के लिए आवेदन भारत निर्वाचन आयोग के Voters' Service Portal (<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>) या Voter Helpline ऐप से होता है; कोई अलग UT ई-पोर्टल नहीं लगता। नया नाम फॉर्म 6 से और सुधार/पता बदलना/नया कार्ड फॉर्म 8 से होता है। लक्षद्वीप में SIR पूरा हो चुका है; अंतिम वोटर लिस्ट 14 फरवरी 2026 को छपी।",
  "facts": [
    [
      "आवेदन",
      "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>"
    ],
    [
      "नया नाम",
      "फॉर्म 6 (18 साल; 17+ पहले से आवेदन)"
    ],
    [
      "हेल्पलाइन",
      "1950"
    ],
    [
      "SIR",
      "पूरा (अंतिम सूची 14 फरवरी 2026)"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> 18 साल पूरे करने वाले युवा हर तिमाही की योग्यता तिथि के हिसाब से नाम जुड़वा सकते हैं। लक्षद्वीप में नए नाम पूरक सूची (supplement) में दिखते हैं।",
  "sections": [
    {
      "id": "kaun",
      "title": "कौन वोटर बन सकता है",
      "list": [
        "आप <strong>भारत के नागरिक</strong> हों।",
        "जिस पते पर नाम जुड़वाना है, वहां आप <strong>आम तौर पर रहते</strong> हों (ordinary resident)। नाम उसी द्वीप/मतदान केंद्र की सूची में जुड़ता है जहां आप रहते हैं।",
        "<strong>योग्यता तिथि (qualifying date) पर 18 साल</strong> पूरे हों। 2022 के कानूनी बदलाव के बाद साल में चार योग्यता तिथियां हैं: <strong>1 जनवरी, 1 अप्रैल, 1 जुलाई और 1 अक्टूबर</strong>।",
        "17 साल पूरे कर चुके युवा पहले से (advance) फॉर्म 6 भर सकते हैं; 18 साल पूरे होने वाली अगली तिथि के बाद नाम सूची में जुड़ता है।",
        "आपका नाम पहले से किसी दूसरी जगह की वोटर लिस्ट में न हो। जगह बदली है तो नया फॉर्म 6 नहीं, <strong>फॉर्म 8</strong> भरें।"
      ]
    },
    {
      "id": "form",
      "title": "कौन सा फॉर्म किस काम के लिए",
      "table": {
        "head": [
          "फॉर्म",
          "किस काम के लिए"
        ],
        "rows": [
          [
            "<strong>फॉर्म 6</strong>",
            "पहली बार नाम जुड़वाना (नया वोटर)"
          ],
          [
            "<strong>फॉर्म 6A</strong>",
            "विदेश में रहने वाले भारतीय नागरिक (Overseas Elector)"
          ],
          [
            "<strong>फॉर्म 6B</strong>",
            "पहले से बने वोटर का आधार नंबर जोड़ना"
          ],
          [
            "<strong>फॉर्म 7</strong>",
            "किसी नाम पर आपत्ति या नाम हटाना (जैसे मृत्यु, स्थायी रूप से कहीं और चले जाना, दोहरा नाम)"
          ],
          [
            "<strong>फॉर्म 8</strong>",
            "पता बदलना (shifting), नाम/उम्र/फोटो जैसी गलती सुधारना, बिना सुधार के नया (replacement) कार्ड, दिव्यांग (PwD) के रूप में दर्ज कराना"
          ]
        ]
      },
      "callout": {
        "kind": "info",
        "html": "यह UT बिना विधानसभा वाला है, इसलिए फॉर्म में विधानसभा क्षेत्र की जगह <strong>संसदीय क्षेत्र (Parliamentary Constituency)</strong> लिखा जाता है (फॉर्म 6 में यही नियम लिखा है)।"
      }
    },
    {
      "id": "kagaz",
      "title": "फॉर्म 6 के लिए ज़रूरी कागज़",
      "intro": "ECI के फॉर्म 6 में दी गई सूची के अनुसार ये तैयार रखें (हर कागज़ की स्व-प्रमाणित कॉपी):",
      "list": [
        "<strong>एक नई पासपोर्ट साइज़ रंगीन फोटो</strong> (4.5 x 3.5 सेमी, सफेद बैकग्राउंड, पूरा चेहरा सामने से)",
        "<strong>जन्मतिथि का प्रमाण</strong> (कोई एक): जन्म प्रमाण पत्र, आधार, PAN कार्ड, ड्राइविंग लाइसेंस, जन्मतिथि वाला 10वीं/12वीं का प्रमाण पत्र, या भारतीय पासपोर्ट",
        "<strong>पते का प्रमाण</strong> (कोई एक, आपके या माता-पिता/पति-पत्नी/बालिग संतान के नाम पर): उस पते का पानी/बिजली/गैस बिल (कम से कम 1 साल का), आधार, बैंक या डाकघर की चालू पासबुक, भारतीय पासपोर्ट, ज़मीन के राजस्व रिकॉर्ड, रजिस्टर्ड किरायानामा या रजिस्टर्ड बिक्री विलेख",
        "<strong>आधार नंबर</strong> देना वैकल्पिक है; आधार नहीं है तो फॉर्म में \"मेरे पास आधार नहीं है\" वाला विकल्प चुन सकते हैं",
        "परिवार का कोई सदस्य उसी पते पर पहले से वोटर है तो उसका नाम और <strong>EPIC नंबर</strong> लिख दें; इससे जांच आसान होती है"
      ],
      "callout": {
        "kind": "warn",
        "html": "ऊपर की सूची में से कोई कागज़ न हो तो फॉर्म 6 में \"कोई और दस्तावेज़\" लिखने की जगह है, पर उसे मानना या न मानना निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO) तय करता है। फॉर्म में झूठी जानकारी देना जनप्रतिनिधित्व अधिनियम 1950 की धारा 31 के तहत अपराध है।"
      }
    },
    {
      "id": "online",
      "title": "ऑनलाइन आवेदन: Voters' Service Portal या Voter Helpline ऐप",
      "steps": [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> खोलें (या फोन में ECI का <strong>Voter Helpline</strong> ऐप लें) और मोबाइल नंबर से OTP डालकर लॉगिन/रजिस्टर करें।",
        "नया नाम है तो <strong>फॉर्म 6</strong> चुनें; पता बदलना या सुधार है तो <strong>फॉर्म 8</strong>।",
        "राज्य/UT में <strong>लक्षद्वीप</strong> और अपना ज़िला व संसदीय क्षेत्र (लक्षद्वीप) चुनें।",
        "नाम, रिश्तेदार का नाम, जन्मतिथि और पूरा पता भरें; फोटो, जन्मतिथि और पते के प्रमाण अपलोड करें।",
        "जमा करने पर मिलने वाला <strong>रेफरेंस नंबर</strong> नोट करें; इसी से पोर्टल पर स्टेटस देखें।",
        "इसके बाद BLO आपके पते पर जांच कर सकता है। मंज़ूरी के बाद नाम वोटर लिस्ट में जुड़ता है और EPIC नंबर मिलता है।"
      ]
    },
    {
      "id": "offline",
      "title": "ऑफलाइन आवेदन: BLO या ERO ऑफिस",
      "intro": "ऑनलाइन न कर सकें तो फॉर्म 6/7/8 भरकर अपने इलाके के <strong>बूथ लेवल ऑफिसर (BLO)</strong> को दें या निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO) के ऑफिस में जमा करें। फॉर्म CEO की वेबसाइट से डाउनलोड हो सकते हैं। जमा करते समय फॉर्म के नीचे वाली <strong>पावती (acknowledgement)</strong> पर नंबर ज़रूर लें।",
      "list": [
        "अपना BLO कौन है, यह <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a> पर अपना मतदान केंद्र खोजकर देखें, या CEO की वेबसाइट <a href=\"https://ceolakshadweep.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceolakshadweep.gov.in</a> देखें।",
        "किसी भी सवाल के लिए वोटर हेल्पलाइन <strong>1950</strong> पर कॉल करें।"
      ]
    },
    {
      "id": "epic",
      "title": "e-EPIC डाउनलोड और नया कार्ड",
      "list": [
        "<strong>e-EPIC</strong> वोटर कार्ड का डिजिटल PDF है। इसे <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline ऐप से डाउनलोड करें; OTP उसी मोबाइल पर आता है जो वोटर लिस्ट में आपके नाम से जुड़ा है।",
        "मोबाइल नंबर वोटर रिकॉर्ड में नहीं है तो पोर्टल e-KYC (चेहरा पहचान) करवाता है, या फॉर्म 8 से मोबाइल नंबर जुड़वाएं।",
        "EPIC नंबर याद न हो तो पहले नाम खोजें (नीचे देखें), फिर नंबर डालकर डाउनलोड करें।",
        "कार्ड खो गया या खराब हो गया तो <strong>फॉर्म 8</strong> में \"बिना सुधार के replacement EPIC\" चुनें।",
        "e-EPIC को DigiLocker में भी रखा जा सकता है।"
      ]
    },
    {
      "id": "naam",
      "title": "वोटर लिस्ट में नाम कैसे देखें",
      "steps": [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC नंबर से, या नाम-रिश्तेदार का नाम-उम्र-ज़िला भरकर खोजें।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट करें।",
        "SIR की अंतिम वोटर लिस्ट और उसके बाद की पूरक (supplement) सूचियां <a href=\"https://ceolakshadweep.gov.in/electoral-rolls\" target=\"_blank\" rel=\"noopener nofollow\">ceolakshadweep.gov.in</a> पर मिलती हैं।"
      ],
      "callout": {
        "kind": "warn",
        "html": "नाम नहीं मिला तो वोटर कार्ड होने के बावजूद आप वोट नहीं डाल पाएंगे। ऐसे में फॉर्म 6 भरें या BLO/ERO से संपर्क करें। चुनाव से काफी पहले नाम जांच लें, ताकि सुधार का समय मिले।"
      }
    },
    {
      "id": "sir",
      "title": "SIR: लक्षद्वीप में क्या हुआ",
      "intro": "ECI ने अक्टूबर 2025 में SIR के दूसरे चरण में लक्षद्वीप को शामिल किया था। CEO लक्षद्वीप के पोर्टल के अनुसार:",
      "list": [
        "ड्राफ्ट वोटर लिस्ट <strong>16 दिसंबर 2025</strong> को छपी।",
        "<strong>SIR अंतिम वोटर लिस्ट 2026</strong> <strong>14 फरवरी 2026</strong> को प्रकाशित हुई।",
        "इसके बाद <strong>10 अप्रैल 2026</strong> को दूसरी तिमाही (Quarter 2) की पूरक सूची भी छपी; यानी नए नाम हर तिमाही जुड़ रहे हैं।"
      ],
      "callout": {
        "kind": "info",
        "html": "SIR पूरा है। नाम जोड़ना, हटाना और सुधार अब फॉर्म 6, 7 और 8 से सामान्य तरीके से होता है।"
      }
    },
    {
      "id": "shikayat",
      "title": "आवेदन अटका या खारिज हुआ: क्या करें",
      "table": {
        "head": [
          "समस्या",
          "क्या करें"
        ],
        "rows": [
          [
            "स्टेटस बहुत दिन से एक जगह अटका",
            "रेफरेंस नंबर लेकर BLO या ERO ऑफिस में पूछें, या 1950 पर कॉल करें"
          ],
          [
            "पते या उम्र का प्रमाण नहीं माना गया",
            "फॉर्म 6 की सूची वाला कोई दूसरा कागज़ लगाकर दोबारा आवेदन करें"
          ],
          [
            "गलत नाम/उम्र/फोटो के साथ कार्ड बना",
            "फॉर्म 8 में \"Correction of Entries\" चुनें"
          ],
          [
            "नाम कट गया",
            "फॉर्म 6 से दोबारा नाम जुड़वाएं; ERO के फैसले से असहमत हैं तो जनप्रतिनिधित्व अधिनियम 1950 की धारा 24 के तहत पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर मुख्य निर्वाचन अधिकारी (CEO) के पास अपील हो सकती है"
          ],
          [
            "कोई और शिकायत",
            "<a href=\"https://voters.eci.gov.in/home/ngsp\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in/home/ngsp</a> पर शिकायत दर्ज करें"
          ]
        ]
      }
    }
  ],
  "official": [
    {
      "href": "https://voters.eci.gov.in/",
      "title": "Voters' Service Portal (ECI)",
      "note": "फॉर्म 6, 7, 8, स्टेटस, e-EPIC"
    },
    {
      "href": "https://electoralsearch.eci.gov.in/",
      "title": "Electoral Search (ECI)",
      "note": "वोटर लिस्ट में नाम खोजें"
    },
    {
      "href": "https://ceolakshadweep.gov.in/",
      "title": "मुख्य निर्वाचन अधिकारी (CEO), लक्षद्वीप",
      "note": "वोटर लिस्ट, SIR सूचियां"
    }
  ],
  "faq": [
    {
      "q": "लक्षद्वीप में वोटर कार्ड कहां से बनता है?",
      "a": "voters.eci.gov.in या Voter Helpline ऐप पर फॉर्म 6 भरकर, या अपने BLO/ERO के पास फॉर्म जमा करके।"
    },
    {
      "q": "लक्षद्वीप में SIR के बाद मेरा नाम कट गया, अब क्या करूं?",
      "a": "SIR की अंतिम सूची 14 फरवरी 2026 को आ चुकी है। अब नाम जुड़वाने के लिए फॉर्म 6 भरें (ऑनलाइन voters.eci.gov.in पर या BLO के ज़रिए)। ERO के फैसले से असहमत हैं तो पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर CEO के पास अपील हो सकती है।"
    },
    {
      "q": "18 साल का होने से पहले आवेदन कर सकते हैं?",
      "a": "हां। 17 साल पूरे होने पर फॉर्म 6 पहले से भरा जा सकता है। साल की चार योग्यता तिथियों (1 जनवरी, 1 अप्रैल, 1 जुलाई, 1 अक्टूबर) में से जिस तिथि पर आप 18 के होंगे, उसके बाद नाम जुड़ता है।"
    },
    {
      "q": "पता बदल गया है, कौन सा फॉर्म भरें?",
      "a": "फॉर्म 8 में \"Shifting of Residence\" चुनें। इससे पुराने पते से नाम हटकर नए पते पर जुड़ता है और नया कार्ड बनता है। नया फॉर्म 6 न भरें, वरना दो जगह नाम हो सकता है।"
    },
    {
      "q": "वोटर कार्ड खो गया, क्या करें?",
      "a": "e-EPIC तुरंत voters.eci.gov.in या Voter Helpline ऐप से डाउनलोड कर सकते हैं। प्लास्टिक कार्ड दोबारा चाहिए तो फॉर्म 8 में replacement EPIC चुनें।"
    },
    {
      "q": "वोटर हेल्पलाइन नंबर क्या है?",
      "a": "राष्ट्रीय वोटर हेल्पलाइन 1950 है।"
    }
  ],
  "related": [
    {
      "href": "/service/e-voter-epic-download.html",
      "emoji": "📲",
      "title": "e-EPIC डाउनलोड",
      "text": "डिजिटल वोटर कार्ड"
    },
    {
      "href": "/service/voter-id-card.html",
      "emoji": "🪪",
      "title": "वोटर आईडी कार्ड: पूरी जानकारी",
      "text": "फॉर्म 6, 7, 8"
    },
    {
      "href": "/states/lakshadweep-birth-certificate.html",
      "emoji": "👶",
      "title": "लक्षद्वीप जन्म प्रमाण पत्र",
      "text": "उम्र के प्रमाण के लिए"
    },
    {
      "href": "/states/lakshadweep-domicile-certificate.html",
      "emoji": "🏠",
      "title": "लक्षद्वीप निवास प्रमाण पत्र",
      "text": "निवास का प्रमाण"
    },
    {
      "href": "/tools/photo-resizer.html",
      "emoji": "🖼️",
      "title": "फोटो Resizer",
      "text": "अपलोड के साइज़ में, फ्री"
    },
    {
      "href": "/states/lakshadweep-ration-card.html",
      "emoji": "🍚",
      "title": "लक्षद्वीप राशन कार्ड",
      "text": "आवेदन और स्टेटस"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में वोटर आईडी कार्ड",
  "aside": [
    {
      "href": "https://voters.eci.gov.in/",
      "label": "📝 फॉर्म 6 ऑनलाइन भरें"
    },
    {
      "href": "https://electoralsearch.eci.gov.in/",
      "label": "🔍 वोटर लिस्ट में नाम खोजें"
    },
    {
      "href": "/service/e-voter-epic-download.html",
      "label": "📲 e-EPIC डाउनलोड गाइड"
    }
  ]
};
