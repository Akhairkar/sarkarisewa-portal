import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - sarathi.parivahan.gov.in state page for Goa (GA): header "Transport
//   Department", licence menu (LL, DL, Services on DL, slots, fee payment,
//   Online LLTest (STALL), Find Doctor, grievance) and the state's
//   contactless (eKYC) service list with its Aadhaar-match condition.
// - transport.uk.gov.in/fees-structrure/: CMVR Rule 32 licence fee table
//   (MoRTH notification 29.12.2016) incl. late renewal and smart card note.
// - Search extracts of transport.delhi.gov.in, himachal.nic.in/transport and
//   parivahan.gov.in: ages 16 (<=50cc, guardian consent) / 18 / 20 (transport),
//   LL valid 6 months, DL after 30 days and within 180 days.
// - MV Act s.14 and s.15 as amended in 2019 (validity bands, 1-year renewal
//   window, test after more than 1 year).
// - State transport site: https://goatransport.gov.in/
// Left out (not confirmed): state user/smart-card charges, RTO list, helpline.
export const goaDrivingLicence: DocGuide = {
  "state": {
    "slug": "goa",
    "hi": "गोवा"
  },
  "doc": "driving-licence",
  "docHi": "ड्राइविंग लाइसेंस",
  "title": "Goa Driving Licence 2026: Apply & Status",
  "description": "गोवा ड्राइविंग लाइसेंस 2026: Sarathi पोर्टल पर लर्नर लाइसेंस (LL) और DL आवेदन, उम्र, कागज़, केंद्रीय नियम की फीस, Aadhaar से contactless सेवाएं, नवीनीकरण, डुप्लीकेट और स्टेटस।",
  "published": "2026-08-01",
  "modified": "2026-10-14",
  "verified": "14 अक्टूबर 2026",
  "h1": "गोवा ड्राइविंग लाइसेंस 2026: लर्नर लाइसेंस, DL टेस्ट, फीस, नवीनीकरण और स्टेटस",
  "lead": "गोवा में लर्नर लाइसेंस (LL) और ड्राइविंग लाइसेंस (DL) के आवेदन केंद्र सरकार के Sarathi पोर्टल (sarathi.parivahan.gov.in) पर होते हैं; वहां राज्य में \"Goa\" चुनें। Aadhaar e-KYC से लर्नर लाइसेंस का contactless (बिना RTO जाए) विकल्प भी Sarathi पर दिखता है। पक्का DL लेने के लिए LL मिलने के 30 दिन बाद RTO में ड्राइविंग टेस्ट देना होता है।",
  "facts": [
    [
      "पोर्टल",
      "<a href=\"https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a>"
    ],
    [
      "उम्र",
      "16 साल (50cc तक बिना गियर, अभिभावक की सहमति), 18 साल (गियर बाइक/कार), 20 साल (कमर्शियल)"
    ],
    [
      "फीस (केंद्रीय नियम)",
      "LL ₹150 + टेस्ट ₹50; DL ₹200 + टेस्ट ₹300"
    ],
    [
      "LL की वैधता",
      "6 महीने; DL टेस्ट 30 दिन बाद"
    ]
  ],
  "notice": "<strong>ध्यान दें:</strong> Sarathi पर Aadhaar वाली contactless सेवाएं तभी चलती हैं जब आपके Aadhaar में नाम, जन्मतिथि और पिता/पति का नाम आपके DL रिकॉर्ड से हूबहू मिलता हो। न मिले तो पहले Aadhaar ठीक कराएं या RTO में जाकर सामान्य तरीके से आवेदन करें। किसी एजेंट या \"घर बैठे लाइसेंस\" वाले को OTP न बताएं।",
  "sections": [
    {
      "id": "online-sevaen",
      "title": "गोवा में Sarathi पर कौन सी सेवाएं बिना RTO जाए मिलती हैं",
      "intro": "Sarathi पर गोवा चुनने पर खुलने वाले पेज के अनुसार ये सेवाएं <strong>Aadhaar e-KYC</strong> से contactless तरीके से मिलती हैं (Aadhaar से जुड़े मोबाइल पर OTP आता है):",
      "list": [
        "लर्नर लाइसेंस (LL) जारी करना",
        "LL/DL में मोबाइल नंबर बदलना",
        "डुप्लीकेट DL",
        "DL नवीनीकरण (Renewal)",
        "DL में पता बदलना",
        "DL बदलवाना (Replacement)",
        "DL Extract (DL का विवरण)",
        "इंटरनेशनल ड्राइविंग परमिट (IDP)",
        "DL में नाम बदलना",
        "DL से वाहन श्रेणी हटवाना"
      ],
      "callout": {
        "kind": "info",
        "html": "नवीनीकरण या बदलाव के बाद नया DL लेने के लिए RTO तभी जाना पड़ सकता है जब SMS आए कि DL तैयार है (Sarathi पेज पर यही लिखा है)।"
      }
    },
    {
      "id": "umar-vaidhta",
      "title": "उम्र और वैधता: किसे कौन सा लाइसेंस",
      "table": {
        "head": [
          "बात",
          "नियम"
        ],
        "rows": [
          [
            "50cc तक बिना गियर वाला दोपहिया",
            "16 साल पूरे, माता-पिता/अभिभावक की सहमति से"
          ],
          [
            "गियर वाली बाइक, कार (निजी वाहन)",
            "18 साल पूरे"
          ],
          [
            "कमर्शियल (Transport) वाहन",
            "20 साल पूरे"
          ],
          [
            "लर्नर लाइसेंस (LL)",
            "6 महीने वैध"
          ],
          [
            "पक्के DL के लिए आवेदन",
            "LL मिलने के 30 दिन बाद और 180 दिन के अंदर"
          ],
          [
            "निजी वाहन का DL, 30 साल से कम उम्र में बना",
            "40 साल की उम्र तक"
          ],
          [
            "निजी वाहन का DL, 30 से 50 साल की उम्र में बना",
            "10 साल"
          ],
          [
            "निजी वाहन का DL, 50 से 55 साल की उम्र में बना",
            "60 साल की उम्र तक"
          ],
          [
            "निजी वाहन का DL, 55 साल के बाद",
            "5 साल"
          ],
          [
            "कमर्शियल (Transport) DL",
            "5 साल"
          ]
        ]
      },
      "callout": {
        "kind": "warn",
        "html": "वैधता मोटर वाहन अधिनियम की धारा 14 (2019 संशोधन के बाद) के अनुसार है। DL की तारीख खत्म होने के बाद बिना नवीनीकरण गाड़ी चलाना बिना लाइसेंस चलाने जैसा माना जा सकता है, इसलिए समय रहते Renewal कराएं।"
      }
    },
    {
      "id": "kagaz",
      "title": "ज़रूरी कागज़",
      "list": [
        "<strong>उम्र का प्रमाण</strong> (जैसे जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पासपोर्ट, Aadhaar)",
        "<strong>पते का प्रमाण</strong> (जैसे Aadhaar, वोटर कार्ड, पासपोर्ट, बिजली बिल)",
        "<strong>Form 1</strong>: शारीरिक फिटनेस की स्व-घोषणा (Sarathi पर फॉर्म भरते समय बनता है)",
        "<strong>Form 1A</strong>: डॉक्टर का मेडिकल सर्टिफिकेट, 40 साल से ज़्यादा उम्र या कमर्शियल लाइसेंस के लिए (Sarathi के \"Find Doctor\" में पंजीकृत डॉक्टर दिखते हैं)",
        "<strong>फोटो और हस्ताक्षर</strong> (Sarathi पर अपलोड; Aadhaar e-KYC में फोटो Aadhaar से भी आ सकती है)",
        "पक्के DL के लिए <strong>वैध लर्नर लाइसेंस</strong> नंबर",
        "Contactless सेवा के लिए <strong>Aadhaar नंबर</strong> और Aadhaar से जुड़ा मोबाइल"
      ],
      "callout": {
        "kind": "info",
        "html": "अपलोड के लिए फोटो/कागज़ का साइज़ घटाना हो तो हमारा <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> इस्तेमाल करें। कौन सा कागज़ मान्य है, यह आवेदन करते समय Sarathi पर दिखाई गई सूची से मिलाएं।"
      }
    },
    {
      "id": "learner-licence",
      "title": "लर्नर लाइसेंस (LL) कैसे बनवाएं",
      "steps": [
        "<a href=\"https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a> खोलें और राज्य में <strong>Goa</strong> चुनें।",
        "<strong>Apply for Learner Licence</strong> (या Learner Licence → Application for New Learner Licence) चुनें।",
        "Aadhaar से आवेदन करना हो तो Aadhaar e-KYC (contactless) वाला विकल्प चुनें और Aadhaar से जुड़े मोबाइल पर आया OTP डालें; Aadhaar न हो तो बिना Aadhaar वाला विकल्प चुनें (तब कागज़ RTO में दिखाने होंगे)।",
        "फॉर्म में नाम, पता, वाहन की श्रेणी (जैसे MCWG बाइक, LMV कार) और <strong>अपना RTO</strong> ध्यान से चुनें। Form 1 की स्व-घोषणा भरें।",
        "कागज़, फोटो और हस्ताक्षर अपलोड करें, फिर <strong>Fee Payments</strong> में ऑनलाइन फीस भरें।",
        "LL टेस्ट से पहले Sarathi पर <strong>Tutorial for LL Test</strong> और <strong>Mock Test</strong> से तैयारी करें। टेस्ट सड़क के नियम और संकेतों पर होता है।",
        "Contactless रास्ते में टेस्ट <strong>Online LLTest (STALL)</strong> से ऑनलाइन होता है; बाकी मामलों में <strong>LL Test Slot Booking</strong> से तारीख लेकर RTO में टेस्ट दें।",
        "पास होने पर <strong>Print Learner Licence (Form 3)</strong> से LL डाउनलोड करें।"
      ]
    },
    {
      "id": "driving-licence",
      "title": "पक्का ड्राइविंग लाइसेंस (DL) और ड्राइविंग टेस्ट",
      "steps": [
        "LL मिलने के <strong>30 दिन बाद</strong> (और LL की 6 महीने की वैधता के अंदर) Sarathi पर <strong>Apply for Driving Licence</strong> चुनें।",
        "LL नंबर और जन्मतिथि डालें; विवरण अपने-आप भर जाएगा। ज़रूरी कागज़ अपलोड करें और फीस भरें।",
        "<strong>DL Test Slot Booking</strong> से अपने RTO में ड्राइविंग टेस्ट की तारीख लें।",
        "तय दिन फीस रसीद, LL और मूल कागज़ लेकर <strong>उसी श्रेणी के वाहन</strong> के साथ टेस्ट देने जाएं।",
        "टेस्ट पास होने के बाद DL डाक से आता है या RTO से मिलता है; Sarathi पर <strong>Application Status</strong> से स्थिति देखें।",
        "टेस्ट में फेल हों तो दोबारा टेस्ट की फीस भरकर नई तारीख लें।"
      ],
      "callout": {
        "kind": "info",
        "html": "Sarathi पर \"Driving Training from ADTC\" सेवा भी है: मान्यता प्राप्त ड्राइविंग ट्रेनिंग सेंटर (ADTC) से कोर्स करने वालों के लिए नियम अलग हैं। ड्राइविंग स्कूल चुनने से पहले पूछें कि वह ADTC है या सामान्य ड्राइविंग स्कूल।"
      }
    },
    {
      "id": "renewal-duplicate",
      "title": "DL नवीनीकरण, डुप्लीकेट और पता बदलना",
      "intro": "नवीनीकरण, डुप्लीकेट (खोया/फटा DL), पता या नाम बदलना, IDP: ये सब Sarathi पर <strong>Apply for DL Renewal / Apply for Duplicate DL / Services on DL</strong> से होते हैं।",
      "steps": [
        "<a href=\"https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a> पर Goa चुनें और ज़रूरी सेवा (Renewal / Duplicate / Change of Address आदि) खोलें।",
        "DL नंबर और जन्मतिथि डालकर <strong>Get DL Details</strong> दबाएं, विवरण जांचें।",
        "Contactless वाली सेवा हो तो Aadhaar OTP से आगे बढ़ें; नहीं तो सामान्य आवेदन भरें।",
        "कागज़ अपलोड करें (40 साल से ऊपर नवीनीकरण पर Form 1A), फीस भरें और आवेदन नंबर सुरक्षित रखें।",
        "अगर Sarathi स्लॉट या RTO जाने को कहे, तो तय दिन मूल कागज़ लेकर जाएं।"
      ],
      "list": [
        "DL खत्म होने से <strong>1 साल पहले से</strong> नवीनीकरण के लिए आवेदन किया जा सकता है।",
        "खत्म होने के <strong>1 साल से ज़्यादा</strong> बाद आवेदन करने पर फिर से ड्राइविंग टेस्ट देना पड़ सकता है, और देर की फीस अलग लगती है।",
        "डुप्लीकेट DL के लिए खोने की स्थिति बताएं; कई RTO पुलिस में दर्ज शिकायत/रिपोर्ट मांगते हैं।"
      ]
    },
    {
      "id": "fees",
      "title": "फीस (केंद्रीय मोटर वाहन नियम, नियम 32)",
      "intro": "केंद्रीय मोटर वाहन नियम 1989 के नियम 32 की फीस (MoRTH अधिसूचना 29 दिसंबर 2016 से संशोधित), जैसी उत्तराखंड परिवहन विभाग की वेबसाइट पर छपी है:",
      "table": {
        "head": [
          "काम",
          "केंद्रीय नियम में फीस"
        ],
        "rows": [
          [
            "लर्नर लाइसेंस (हर वाहन श्रेणी के लिए)",
            "₹150"
          ],
          [
            "लर्नर लाइसेंस टेस्ट / दोबारा टेस्ट",
            "₹50"
          ],
          [
            "ड्राइविंग टेस्ट / दोबारा टेस्ट (हर वाहन श्रेणी के लिए)",
            "₹300"
          ],
          [
            "ड्राइविंग लाइसेंस जारी करना",
            "₹200"
          ],
          [
            "DL नवीनीकरण (Renewal)",
            "₹200"
          ],
          [
            "देर से नवीनीकरण (grace period के बाद)",
            "₹300 + हर साल की देरी पर ₹1,000 अतिरिक्त"
          ],
          [
            "डुप्लीकेट DL",
            "₹200"
          ],
          [
            "DL में पता या दूसरा विवरण बदलना",
            "₹200"
          ],
          [
            "DL में नई वाहन श्रेणी जोड़ना",
            "₹500"
          ],
          [
            "इंटरनेशनल ड्राइविंग परमिट (IDP)",
            "₹1,000"
          ],
          [
            "स्मार्ट कार्ड वाला DL (Form 7)",
            "₹200 अतिरिक्त"
          ]
        ]
      },
      "callout": {
        "kind": "warn",
        "html": "राज्य सरकार इसके ऊपर सेवा/यूज़र शुल्क या स्मार्ट कार्ड शुल्क जोड़ सकती है, इसलिए गोवा में असल रकम आवेदन के समय Sarathi के <strong>Fee Payments</strong> पेज पर दिखेगी। LL, LL टेस्ट और ड्राइविंग टेस्ट की फीस आवेदन के समय एक साथ ली जाती है।"
      }
    },
    {
      "id": "status-download",
      "title": "स्टेटस, LL/DL डाउनलोड और DigiLocker",
      "list": [
        "Sarathi पर <strong>Application Status</strong> में आवेदन नंबर और जन्मतिथि डालकर स्थिति देखें। नंबर भूल गए तो <strong>Find Application Number</strong> इस्तेमाल करें।",
        "पैसा कट गया पर रसीद नहीं बनी तो <strong>Check Payment Status / Verify Payment Status</strong> देखें; दोबारा भुगतान न करें।",
        "LL का प्रिंट <strong>Print Learner Licence (Form 3)</strong> से और DL का विवरण <strong>DL Extract / Print Live DL Details</strong> से मिलता है।",
        "DL की डिजिटल कॉपी <a href=\"/digilocker/driving-licence.html\">DigiLocker</a> या <a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan</a> ऐप में रखी जा सकती है।",
        "DL का मोबाइल नंबर बदलना हो तो Sarathi पर <strong>Mobile Number Update</strong> सेवा है।",
        "शिकायत के लिए Sarathi पेज पर <strong>File Your Grievance</strong> का विकल्प है।"
      ]
    },
    {
      "id": "problems",
      "title": "आम दिक्कतें और हल",
      "table": {
        "head": [
          "दिक्कत",
          "क्या करें"
        ],
        "rows": [
          [
            "Aadhaar e-KYC फेल हो रहा है",
            "Aadhaar और DL/आवेदन में नाम, जन्मतिथि, पिता का नाम एक जैसा हो। न हो तो Aadhaar ठीक कराएं या बिना Aadhaar वाला रास्ता लें।"
          ],
          [
            "OTP नहीं आ रहा",
            "Aadhaar से वही मोबाइल जुड़ा हो जो आपके पास है; नहीं तो Aadhaar केंद्र पर मोबाइल अपडेट कराएं।"
          ],
          [
            "LL की 6 महीने की वैधता खत्म",
            "Sarathi पर Expired Learner Licence Issue Again या नया LL आवेदन करें।"
          ],
          [
            "फीस कट गई, रसीद नहीं",
            "Verify Payment Status देखें; 1-2 दिन रुकें, दोबारा भुगतान न करें।"
          ],
          [
            "ड्राइविंग टेस्ट में फेल",
            "दोबारा टेस्ट फीस भरकर नया स्लॉट लें; अभ्यास बढ़ाएं।"
          ],
          [
            "गलत RTO चुन लिया",
            "फीस भरने से पहले Application Edit से ठीक करें; बाद में RTO से संपर्क करें।"
          ]
        ]
      }
    }
  ],
  "official": [
    {
      "href": "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
      "title": "Sarathi पोर्टल: LL/DL आवेदन (Goa चुनें)"
    },
    {
      "href": "https://goatransport.gov.in/",
      "title": "परिवहन विभाग, गोवा"
    },
    {
      "href": "https://transport.uk.gov.in/fees-structrure/",
      "title": "केंद्रीय नियम 32 की लाइसेंस फीस तालिका (उत्तराखंड परिवहन विभाग की प्रति)"
    },
    {
      "href": "https://parivahan.gov.in/",
      "title": "Parivahan सेवा (परिवहन मंत्रालय)"
    }
  ],
  "faq": [
    {
      "q": "गोवा में ड्राइविंग लाइसेंस ऑनलाइन कहां बनता है?",
      "a": "केंद्र सरकार के Sarathi पोर्टल sarathi.parivahan.gov.in पर, जहां राज्य में Goa चुनना होता है। पक्के DL के लिए ड्राइविंग टेस्ट RTO में ही होता है।"
    },
    {
      "q": "क्या गोवा में लर्नर लाइसेंस घर से बन सकता है?",
      "a": "Sarathi पर गोवा के लिए Aadhaar e-KYC वाली contactless सूची में लर्नर लाइसेंस दिखता है। इसके लिए Aadhaar, उससे जुड़ा मोबाइल और ऑनलाइन टेस्ट (STALL) ज़रूरी है। Aadhaar न हो तो RTO में स्लॉट लेकर टेस्ट देना होगा।"
    },
    {
      "q": "लर्नर और ड्राइविंग लाइसेंस की फीस कितनी है?",
      "a": "केंद्रीय नियम 32 के अनुसार LL ₹150 (हर वाहन श्रेणी) + LL टेस्ट ₹50, ड्राइविंग टेस्ट ₹300 (हर श्रेणी) और DL जारी करना ₹200। स्मार्ट कार्ड और राज्य के सेवा शुल्क अलग हो सकते हैं; असल रकम Sarathi पर फीस भरते समय दिखती है।"
    },
    {
      "q": "DL एक्सपायर हो गया, अब क्या करें?",
      "a": "Sarathi पर Apply for DL Renewal से आवेदन करें। खत्म होने के 1 साल के अंदर आवेदन पर सामान्य नवीनीकरण होता है; 1 साल से ज़्यादा देर पर ड्राइविंग टेस्ट दोबारा देना पड़ सकता है और देर की फीस लगती है।"
    },
    {
      "q": "LL मिलने के कितने दिन बाद DL टेस्ट दे सकते हैं?",
      "a": "LL मिलने के 30 दिन बाद और LL की 6 महीने की वैधता के अंदर।"
    }
  ],
  "related": [
    {
      "href": "/service/driving-licence.html",
      "emoji": "🪪",
      "title": "ड्राइविंग लाइसेंस: पूरी जानकारी",
      "text": "LL, DL और सभी राज्य"
    },
    {
      "href": "/digilocker/driving-licence.html",
      "emoji": "📲",
      "title": "DigiLocker में ड्राइविंग लाइसेंस",
      "text": "डिजिटल कॉपी रखें"
    },
    {
      "href": "/service/mparivahan-virtual-rc-dl.html",
      "emoji": "📱",
      "title": "mParivahan वर्चुअल DL/RC",
      "text": "मोबाइल में DL"
    },
    {
      "href": "/challan/e-challan-status-check.html",
      "emoji": "🚦",
      "title": "ई-चालान स्टेटस चेक",
      "text": "चालान, गाड़ी या DL नंबर से"
    },
    {
      "href": "/states/goa-voter-id-card.html",
      "emoji": "🗳️",
      "title": "गोवा वोटर आईडी कार्ड",
      "text": "पते के प्रमाण के लिए भी काम का"
    },
    {
      "href": "/tools/photo-resizer.html",
      "emoji": "🗜️",
      "title": "फोटो रिसाइज़र",
      "text": "अपलोड के साइज़ में, फ्री"
    }
  ],
  "otherStatesTitle": "दूसरे राज्यों में ड्राइविंग लाइसेंस",
  "aside": [
    {
      "href": "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
      "label": "📝 Sarathi पर आवेदन करें"
    },
    {
      "href": "/service/driving-licence.html",
      "label": "🪪 ड्राइविंग लाइसेंस गाइड"
    }
  ]
};
