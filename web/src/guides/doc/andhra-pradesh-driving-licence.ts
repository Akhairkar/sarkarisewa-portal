import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - sarathi.parivahan.gov.in state page (AP, 'Andhra Pradesh'): menu (Apply for LL/DL,
//   DL Renewal, Duplicate DL, Change of Address, IDP, LL/DL slot booking, Verify
//   Payment Status, Find Application Number, Mock Test, Find Doctor) and the
//   state's Contactless (eKYC) / Faceless service list used on this page;
//   ContactDet.do: Sarathi helpdesk 0120-4925505, 6 am-12 midnight,
//   helpdesk-sarathi@gov.in; fraud warning (parivahan.gov.in, Nexgen mParivahan).
// - transport.uk.gov.in/fees-structrure/: CMVR Rule 32 licence fees as revised
//   by MoRTH notification of 29 Dec 2016 (LL 150, LL test 50, driving test 300,
//   DL 200, renewal 200, late renewal 300 + 1000/yr, add class 500, IDP 1000,
//   duplicate 200, change of particulars 200, smart card +200).
// - transport.maharashtra.gov.in Learning-License page: ages 16 (<=50cc gearless,
//   guardian consent) / 18 / 20 (transport); Form 1 and Form 2.
// - Motor Vehicles (Amendment) Act 2019 text (s.14 age-based validity; s.15
//   renewal one year before expiry, competence test if more than one year after
//   expiry), via search extracts of the Bill/Gazette and Kerala HC 2024 / Delhi
//   HC 2026 reports (30-day grace removed). LL 6 months, DL after 30 days: Delhi
//   and MP transport department pages.
// - vswsonline.ap.gov.in/assets/User-Manuals/Driving-License.pdf: Sarathi
//   services in 15,004 village/ward secretariats; LL application by Aadhaar OTP,
//   address entered manually, application number + DOB.
// - aptransport.org: AP Transport Department site (seen in search results; not
//   reachable from our checker).
// Left out (not confirmable on an official page we could open): state-specific
// service/smart-card charges and totals, RTO-wise addresses, time limits under
// the state's public services act, transport-vehicle validity details.
export const andhraPradeshDrivingLicence: DocGuide = {
  state: {
    slug: "andhra-pradesh",
    hi: "आंध्र प्रदेश",
  },
  doc: "driving-licence",
  docHi: "ड्राइविंग लाइसेंस",
  title: "Andhra Pradesh Driving Licence 2026: Apply & Status",
  description: "आंध्र प्रदेश ड्राइविंग लाइसेंस 2026: Sarathi पर लर्नर और पक्का DL, कागज़, केंद्रीय फीस, टेस्ट, नवीनीकरण और डुप्लीकेट।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "आंध्र प्रदेश ड्राइविंग लाइसेंस 2026: लर्नर लाइसेंस, ड्राइविंग टेस्ट, फीस और नवीनीकरण",
  lead: "आंध्र प्रदेश में ड्राइविंग लाइसेंस केंद्र सरकार के Sarathi पोर्टल (<a href=\"https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a>) पर बनता है: राज्य में \"Andhra Pradesh\" चुनें। पहले लर्नर लाइसेंस (6 महीने वैध) बनता है, फिर कम से कम 30 दिन बाद ड्राइविंग टेस्ट देकर पक्का लाइसेंस। आंध्र प्रदेश के Sarathi पेज पर घर से लर्नर टेस्ट (आधार e-KYC/Faceless) का विकल्प हमें नहीं दिखा, इसलिए लर्नर टेस्ट परिवहन कार्यालय में होता है। केंद्रीय नियम के अनुसार लर्नर लाइसेंस ₹150 (हर वाहन श्रेणी) + टेस्ट ₹50 और ड्राइविंग टेस्ट ₹300 + लाइसेंस ₹200 है; राज्य सेवा/स्मार्ट कार्ड शुल्क अलग जोड़ सकता है।",
  facts: [
    [
      "आवेदन",
      "<a href=\"https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a>",
    ],
    ["पहला कदम", "लर्नर लाइसेंस (6 महीने वैध)"],
    ["घर से लर्नर टेस्ट", "नहीं दिखा; टेस्ट RTO/DTO में"],
    ["Sarathi हेल्पडेस्क", "0120-4925505 (सुबह 6 से रात 12 बजे)"],
  ],
  notice: "<strong>नकली वेबसाइट से बचें:</strong> Sarathi पोर्टल पर साफ लिखा है कि लाइसेंस, वाहन और ई-चालान की सेवाएं सिर्फ parivahan.gov.in (और उसके sarathi/vahan पोर्टल) और MoRTH के Nexgen mParivahan ऐप से ही लें। फीस सिर्फ पोर्टल के भुगतान पेज पर भरें; किसी एजेंट या अनजान लिंक पर पैसे न भेजें।",
  sections: [
    {
      id: "kaun",
      title: "कौन लाइसेंस बनवा सकता है (उम्र)",
      intro: "लाइसेंस दो चरण में बनता है: पहले <strong>लर्नर लाइसेंस (LL)</strong>, फिर <strong>पक्का ड्राइविंग लाइसेंस (DL)</strong>। परिवहन विभाग के पेजों के अनुसार उम्र की शर्त:",
      table: {
        head: ["वाहन", "न्यूनतम उम्र"],
        rows: [
          ["50cc तक की बिना गियर वाली मोटरसाइकिल", "16 साल (माता-पिता/अभिभावक की सहमति से)"],
          ["गियर वाली मोटरसाइकिल, कार (LMV)", "18 साल"],
          ["व्यावसायिक (Transport) वाहन", "20 साल, और दूसरी शर्तें भी"],
        ],
      },
      callout: {
        kind: "info",
        html: "व्यावसायिक (Transport) वाहन, जैसे टैक्सी, ऑटो, बस या ट्रक का लाइसेंस अलग नियमों से बनता है: मेडिकल सर्टिफिकेट, बैज और कुछ श्रेणियों में पहले से LMV लाइसेंस का अनुभव। यह गाइड मुख्य रूप से निजी बाइक/कार के लाइसेंस के लिए है।",
      },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>उम्र का प्रमाण:</strong> जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पासपोर्ट या आधार जैसे दस्तावेज़",
        "<strong>पते का प्रमाण:</strong> आधार, वोटर कार्ड, पासपोर्ट, बिजली बिल जैसे दस्तावेज़",
        "<strong>Form 1:</strong> शारीरिक फिटनेस का स्व-घोषणा पत्र (Sarathi पर फॉर्म भरते समय ही भरा जाता है)",
        "<strong>Form 1A (मेडिकल सर्टिफिकेट):</strong> व्यावसायिक वाहन के लिए और 40 साल से ज़्यादा उम्र वालों के लिए; Sarathi पर \"Find Doctor\" से पंजीकृत डॉक्टर खोज सकते हैं",
        "<strong>फोटो और हस्ताक्षर:</strong> तय साइज़ में स्कैन करके अपलोड",
        "<strong>पक्के DL के लिए:</strong> वैध लर्नर लाइसेंस (उसी वाहन श्रेणी का)",
        "<strong>मोबाइल नंबर:</strong> आधार से जुड़ा मोबाइल चालू हो; घर से टेस्ट और Contactless सेवाओं में OTP उसी पर आता है",
      ],
      callout: {
        kind: "warn",
        html: "आधार में नाम, जन्मतिथि, पिता/पति का नाम और पता सही हो। आधार e-KYC वाली सेवाओं में आधार की जानकारी ही फॉर्म में जाती है; गलत हो तो पहले आधार ठीक कराएं, वरना RTO जाकर ही काम होगा।",
      },
    },
    {
      id: "learner",
      title: "लर्नर लाइसेंस: ऑनलाइन आवेदन के स्टेप",
      steps: [
        "<a href=\"https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a> खोलें और राज्य की सूची में <strong>Andhra Pradesh</strong> चुनें।",
        "<strong>Apply for Learner Licence</strong> पर जाएं। पहला लाइसेंस है तो \"आवेदक के पास कोई ड्राइविंग/लर्नर लाइसेंस नहीं है\" वाला विकल्प चुनें।",
        "मोबाइल नंबर या आधार OTP से सत्यापन करें।",
        "नाम, पता, ब्लड ग्रुप और <strong>वाहन श्रेणी</strong> (जैसे MCWG = गियर वाली बाइक, LMV = कार) चुनें, Form 1 की स्व-घोषणा भरें और Submit करें। <strong>आवेदन नंबर</strong> नोट करें।",
        "दस्तावेज़, फोटो और हस्ताक्षर अपलोड करें (जहां मांगा जाए)।",
        "फीस ऑनलाइन भरें।",
        "<strong>LL Test Slot Booking</strong> से तारीख-समय चुनें और उस दिन मूल कागज़ व फीस रसीद लेकर परिवहन कार्यालय में टेस्ट दें। पास होने पर लर्नर लाइसेंस Sarathi से प्रिंट कर सकते हैं।",
      ],
      callout: {
        kind: "info",
        html: "आंध्र प्रदेश के Sarathi पेज पर हमें Aadhaar e-KYC / Faceless सेवाओं की सूची नहीं दिखी। इसलिए मानकर चलें कि लर्नर टेस्ट के लिए RTO कार्यालय में स्लॉट बुक करके जाना होगा; आवेदन और फीस ऑनलाइन हो जाती है। तैयारी के लिए Sarathi पर <strong>Mock Test for LL</strong> और सैंपल सवाल दिए गए हैं।",
      },
    },
    {
      id: "sachivalayam",
      title: "गांव/वार्ड सचिवालय से आवेदन",
      intro: "आंध्र प्रदेश सरकार (GSWS/VSWS विभाग) की उपयोगकर्ता पुस्तिका के अनुसार राज्य के <strong>15,004 गांव/वार्ड सचिवालयों</strong> में Sarathi की सेवाएं (लर्नर लाइसेंस, ड्राइविंग लाइसेंस आदि) दी जा रही हैं। खुद ऑनलाइन फॉर्म न भर पाएं तो अपने सचिवालय में जाएं:",
      list: [
        "आधार कार्ड, आधार से जुड़ा मोबाइल, उम्र और पते का प्रमाण साथ ले जाएं।",
        "कर्मचारी Sarathi पर आधार OTP से फॉर्म भरेगा; पुस्तिका के अनुसार वर्तमान और स्थायी पता हाथ से सही भरवाएं।",
        "आवेदन नंबर और जन्मतिथि नोट कर लें; इन्हीं से आगे दस्तावेज़ अपलोड, फीस और स्लॉट का काम होता है।",
      ],
    },
    {
      id: "pakka-dl",
      title: "पक्का ड्राइविंग लाइसेंस (DL) और ड्राइविंग टेस्ट",
      steps: [
        "लर्नर लाइसेंस बनने के <strong>कम से कम 30 दिन बाद</strong> और उसके <strong>6 महीने की वैधता के अंदर</strong> आवेदन करें।",
        "Sarathi पर <strong>Apply for Driving Licence</strong> चुनें, लर्नर लाइसेंस नंबर और जन्मतिथि डालें।",
        "फीस भरें और <strong>DL Test Slot Booking</strong> से ड्राइविंग टेस्ट की तारीख लें।",
        "तय दिन लर्नर लाइसेंस, फीस रसीद, मूल कागज़ और <strong>उसी श्रेणी का वाहन</strong> (वैध कागज़ों के साथ) लेकर टेस्ट केंद्र जाएं।",
        "पास होने पर लाइसेंस मंज़ूर होता है। Sarathi पर <strong>Application Status</strong> से स्थिति देखें और \"Print Driving Licence\" / डाक से कार्ड आने तक इंतज़ार करें।",
      ],
      callout: {
        kind: "warn",
        html: "लर्नर लाइसेंस की 6 महीने की वैधता के अंदर ड्राइविंग टेस्ट पास न किया तो लर्नर लाइसेंस खत्म हो जाता है और फिर से बनवाना पड़ सकता है। टेस्ट में फेल होने पर दोबारा टेस्ट की फीस (₹300) देकर नया स्लॉट लें।",
      },
    },
    {
      id: "fees",
      title: "फीस (केंद्रीय मोटर वाहन नियम, Rule 32)",
      intro: "केंद्रीय मोटर वाहन नियम 1989 के Rule 32 की फीस (परिवहन मंत्रालय की 29 दिसंबर 2016 की अधिसूचना से संशोधित), जैसी उत्तराखंड परिवहन विभाग की वेबसाइट पर छपी है:",
      table: {
        head: ["काम", "केंद्रीय नियम (Rule 32) की फीस"],
        rows: [
          ["लर्नर लाइसेंस (Form 3), हर वाहन श्रेणी के लिए", "₹150"],
          ["लर्नर लाइसेंस टेस्ट / दोबारा टेस्ट", "₹50"],
          ["ड्राइविंग टेस्ट / दोबारा टेस्ट, हर वाहन श्रेणी के लिए", "₹300"],
          ["ड्राइविंग लाइसेंस जारी करना", "₹200"],
          ["DL का नवीनीकरण (Renewal)", "₹200"],
          ["ग्रेस अवधि के बाद नवीनीकरण", "₹300 + देरी के हर साल (या उसके हिस्से) के ₹1,000"],
          ["DL में नई वाहन श्रेणी जोड़ना", "₹500"],
          ["डुप्लीकेट लाइसेंस", "₹200"],
          ["पता या दूसरी जानकारी बदलवाना", "₹200"],
          ["अंतरराष्ट्रीय ड्राइविंग परमिट (IDP)", "₹1,000"],
          ["स्मार्ट कार्ड वाला DL (Form 7)", "ऊपर की फीस के अलावा ₹200"],
        ],
      },
      callout: {
        kind: "info",
        html: "यह केंद्र की तय फीस है। आंध्र प्रदेश सरकार इसके ऊपर सेवा शुल्क, स्मार्ट कार्ड या पोर्टल/यूज़र चार्ज जोड़ सकती है, इसलिए असली रकम वही है जो Sarathi पर भुगतान के समय दिखे। लर्नर लाइसेंस, लर्नर टेस्ट और ड्राइविंग टेस्ट की फीस आवेदन के समय एक साथ ली जा सकती है।",
      },
    },
    {
      id: "renewal",
      title: "DL की वैधता, नवीनीकरण (Renewal) और डुप्लीकेट",
      intro: "मोटर वाहन (संशोधन) अधिनियम 2019 के बाद निजी (non-transport) लाइसेंस की वैधता उम्र के हिसाब से है:",
      table: {
        head: ["लाइसेंस बनते/नवीनीकरण के समय उम्र", "निजी (non-transport) DL कब तक वैध"],
        rows: [
          ["30 साल से कम", "40 साल की उम्र पूरी होने तक"],
          ["30 से 50 साल", "10 साल"],
          ["50 से 55 साल", "60 साल की उम्र पूरी होने तक"],
          ["55 साल से ज़्यादा", "5 साल"],
        ],
      },
      list: [
        "<strong>नवीनीकरण:</strong> लाइसेंस खत्म होने से <strong>1 साल पहले</strong> से आवेदन कर सकते हैं। Sarathi पर <strong>Apply for DL Renewal</strong> (या Services on DL) चुनें, DL नंबर व जन्मतिथि डालें, फीस भरें। 40 साल से ज़्यादा उम्र में Form 1A मेडिकल लगता है।",
        "<strong>देर होने पर:</strong> 2019 के संशोधन के बाद वैधता खत्म होने पर 30 दिन की अपने-आप छूट नहीं रही। लाइसेंस खत्म होने के <strong>1 साल से ज़्यादा</strong> बाद आवेदन करने पर दोबारा ड्राइविंग (योग्यता) टेस्ट देना होगा, और देरी का अतिरिक्त शुल्क भी लगता है। इसलिए समय पर नवीनीकरण कराएं।",
        "<strong>डुप्लीकेट DL:</strong> लाइसेंस खो जाए या खराब हो जाए तो Sarathi पर <strong>Apply for Duplicate DL</strong> चुनें। खोने पर पुलिस रिपोर्ट/शिकायत की कॉपी रखें, जहां मांगी जाए।",
        "<strong>पता या नाम बदलना:</strong> Services on DL में Change of Address / Change of Name चुनें।",
        "<strong>मोबाइल नंबर अपडेट:</strong> <a href=\"https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do\" target=\"_blank\" rel=\"noopener nofollow\">Sarathi का मोबाइल नंबर अपडेट पेज</a> बिना RTO गए नंबर बदलने के लिए है। सही नंबर रहेगा तो सारे OTP और सूचनाएं मिलेंगी।",
      ],
      callout: {
        kind: "info",
        html: "आंध्र प्रदेश के Sarathi पेज पर DL नवीनीकरण/डुप्लीकेट की Contactless (आधार e-KYC) सेवा हमें नहीं दिखी। आवेदन और फीस ऑनलाइन करें; उसके बाद बायोमेट्रिक या कागज़ जांच के लिए परिवहन कार्यालय जाना पड़ सकता है।",
      },
    },
    {
      id: "samasya",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          [
            "आधार OTP नहीं आ रहा",
            "आधार से जुड़ा मोबाइल चालू है या नहीं देखें; नंबर बदल गया है तो आधार केंद्र पर अपडेट कराएं, या आधार के बिना वाला रास्ता लेकर RTO में टेस्ट दें",
          ],
          ["आधार और DL रिकॉर्ड की जानकारी अलग", "Contactless सेवा नहीं चलेगी; RTO जाएं या पहले आधार/DL की जानकारी ठीक कराएं"],
          [
            "फीस कट गई पर आवेदन में नहीं दिखी",
            "Sarathi पर <strong>Verify Payment Status</strong> से जांचें; थोड़ी देर बाद फिर देखें, दोबारा भुगतान जल्दी न करें",
          ],
          ["आवेदन नंबर भूल गए", "Sarathi पर <strong>Find Application Number</strong> का विकल्प है"],
          ["लर्नर टेस्ट में फेल", "दोबारा टेस्ट की फीस (₹50) देकर फिर से टेस्ट दें; Mock Test से तैयारी करें"],
          ["पोर्टल पर तकनीकी दिक्कत", "Sarathi हेल्पडेस्क 0120-4925505 (सुबह 6 से रात 12 बजे) या ईमेल helpdesk-sarathi@gov.in"],
        ],
      },
    },
  ],
  official: [
    {
      href: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
      title: "Sarathi पोर्टल: राज्य चुनकर आवेदन, स्लॉट, फीस, स्टेटस",
    },
    {
      href: "https://aptransport.org/",
      title: "आंध्र प्रदेश परिवहन विभाग (aptransport.org)",
    },
    {
      href: "https://vswsonline.ap.gov.in/assets/User-Manuals/Driving-License.pdf",
      title: "गांव/वार्ड सचिवालय से लर्नर लाइसेंस: उपयोगकर्ता पुस्तिका (PDF)",
    },
    {
      href: "https://sarathi.parivahan.gov.in/sarathiservice/mobNumUpdpub.do",
      title: "Sarathi: मोबाइल नंबर अपडेट",
    },
    {
      href: "https://parivahan.gov.in/",
      title: "Parivahan Sewa (परिवहन मंत्रालय)",
    },
  ],
  faq: [
    {
      q: "आंध्र प्रदेश में लर्नर लाइसेंस के लिए कहां आवेदन करें?",
      a: "sarathi.parivahan.gov.in पर राज्य में Andhra Pradesh चुनकर, या अपने गांव/वार्ड सचिवालय से। टेस्ट के लिए RTO का स्लॉट बुक करना होता है।",
    },
    {
      q: "क्या आंध्र प्रदेश में घर से ऑनलाइन लर्नर टेस्ट हो सकता है?",
      a: "हमें आंध्र प्रदेश के Sarathi पेज पर Aadhaar e-KYC / Faceless लर्नर लाइसेंस का विकल्प नहीं दिखा। आवेदन से पहले Sarathi पर राज्य चुनकर देख लें; विकल्प न हो तो RTO में टेस्ट दें।",
    },
    {
      q: "आंध्र प्रदेश में ड्राइविंग लाइसेंस की फीस कितनी है?",
      a: "केंद्रीय मोटर वाहन नियम (Rule 32) के अनुसार लर्नर लाइसेंस ₹150 हर वाहन श्रेणी + लर्नर टेस्ट ₹50, ड्राइविंग टेस्ट ₹300 हर श्रेणी + लाइसेंस जारी करना ₹200, नवीनीकरण ₹200। राज्य सेवा/स्मार्ट कार्ड शुल्क जोड़ सकता है; असली रकम Sarathi पर भुगतान के समय दिखती है।",
    },
    {
      q: "लर्नर लाइसेंस के कितने दिन बाद पक्का लाइसेंस बनता है?",
      a: "लर्नर लाइसेंस बनने के कम से कम 30 दिन बाद और 6 महीने के अंदर ड्राइविंग टेस्ट के लिए आवेदन कर सकते हैं।",
    },
    {
      q: "ड्राइविंग लाइसेंस कितने साल तक वैध रहता है?",
      a: "2019 के संशोधन के बाद निजी लाइसेंस: 30 साल से कम उम्र में बना तो 40 साल की उम्र तक; 30 से 50 साल में 10 साल; 50 से 55 में 60 साल की उम्र तक; 55 के बाद 5 साल।",
    },
    {
      q: "लाइसेंस की वैधता खत्म हो गई, अब क्या करें?",
      a: "जल्दी से जल्दी Sarathi पर नवीनीकरण का आवेदन करें। खत्म होने के 1 साल से ज़्यादा बाद आवेदन करने पर दोबारा ड्राइविंग टेस्ट देना होगा और देरी का शुल्क भी लगेगा।",
    },
  ],
  related: [
    {
      href: "/service/driving-licence.html",
      emoji: "🚗",
      title: "ड्राइविंग लाइसेंस: पूरी जानकारी",
      text: "सभी राज्यों के लिए",
    },
    {
      href: "/service/mparivahan-virtual-rc-dl.html",
      emoji: "📱",
      title: "mParivahan में DL/RC",
      text: "मोबाइल में लाइसेंस",
    },
    {
      href: "/service/smart-card-driving-license.html",
      emoji: "💳",
      title: "स्मार्ट कार्ड ड्राइविंग लाइसेंस",
      text: "कार्ड वाला DL",
    },
    {
      href: "/service/vehicle-registration-certificate.html",
      emoji: "📄",
      title: "वाहन RC (रजिस्ट्रेशन)",
      text: "गाड़ी के कागज़",
    },
    {
      href: "/tools/photo-resizer.html",
      emoji: "🖼️",
      title: "फोटो Resizer",
      text: "अपलोड के साइज़ में, फ्री",
    },
    {
      href: "/tools/signature-resizer.html",
      emoji: "✍️",
      title: "हस्ताक्षर Resizer",
      text: "Sarathi अपलोड के लिए",
    },
  ],
  otherStatesTitle: "दूसरे राज्यों में ड्राइविंग लाइसेंस",
  aside: [
    {
      href: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
      label: "📝 Sarathi पर आवेदन करें",
    },
    {
      href: "/service/driving-licence.html",
      label: "🚗 ड्राइविंग लाइसेंस गाइड",
    },
  ],
};
