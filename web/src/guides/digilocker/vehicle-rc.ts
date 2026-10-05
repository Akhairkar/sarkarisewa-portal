import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - PIB, MoRTH, 9 Aug 2018 (relid=181696): DL, RC or other documents in
//   electronic form via DigiLocker/mParivahan valid under the MV Act and at
//   par with certificates; insurance data uploaded daily by the Insurance
//   Information Bureau to VAHAN and shown on mParivahan/eChallan; if the
//   registration details there show a policy in force, a physical insurance
//   copy is not to be enforced; impounding recorded electronically via eChallan.
// - CMVR rule 139 (electronic form), as verified for the /challan/ cluster.
// - API Setu directory, issuer "Ministry of Road Transport and Highways":
//   document types "Registration of Vehicles", "Fitness Certificate",
//   "Vehicle Insurance Certificate", "Vehicle Tax Receipt", "Challan".
// - DigiLocker Ask our Experts (18 Oct 2024): only documents issued in your
//   own name can be fetched; name must match Aadhaar; DigiLocker only shows
//   the issuer's data.
// - vahan.parivahan.gov.in/mobileupdate/ (mobile number update for a vehicle),
//   as verified for the /challan/ cluster.
// Left out: the exact search fields for RC (third-party sites mention part of
// the chassis number; not confirmed on an official page).
export const vehicleRc: DocGuide = {
  crumbs: crumbs("गाड़ी की RC"),
  docHi: "गाड़ी की RC",
  title: "DigiLocker में गाड़ी की RC कैसे डाउनलोड करें | SarkariSewa India",
  description: "गाड़ी की RC DigiLocker में कैसे लाएं, पुलिस जांच में मान्य है या नहीं, बीमा-फिटनेस भी दिखते हैं, रिकॉर्ड या नाम मेल न खाए तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker में गाड़ी की RC कैसे डाउनलोड करें",
  lead: "DigiLocker में परिवहन मंत्रालय (Ministry of Road Transport and Highways) का दस्तावेज़ “Registration of Vehicles” चुनें, अपनी गाड़ी का रजिस्ट्रेशन नंबर और मांगी गई जानकारी भरें; RC का रिकॉर्ड VAHAN से सीधे Issued Documents में आ जाता है। MoRTH की 2018 एडवाइज़री के अनुसार DigiLocker/mParivahan में दिखाई गई RC कागज़ी RC के बराबर मानी जानी चाहिए।",
  facts: [
    ["issuer", "Ministry of Road Transport and Highways"],
    ["DigiLocker में नाम", "Registration of Vehicles"],
    ["किसकी RC", "सिर्फ आपके नाम पर रजिस्टर्ड गाड़ी"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "steps",
      title: "DigiLocker ऐप/वेबसाइट में RC लाने के स्टेप",
      steps: [
        "DigiLocker ऐप या <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर आधार से जुड़े अकाउंट में लॉगिन करें।",
        "<strong>Search Documents</strong> में “Registration” या “Ministry of Road Transport” लिखें।",
        "Ministry of Road Transport and Highways के अंतर्गत <strong>Registration of Vehicles</strong> (Registration Certificate) चुनें।",
        "गाड़ी का <strong>रजिस्ट्रेशन नंबर</strong> और स्क्रीन पर मांगी गई पहचान की जानकारी भरें। कागज़ी RC या स्मार्ट कार्ड पास रखें, उस पर चेसिस और इंजन नंबर लिखे होते हैं।",
        "सहमति देकर दस्तावेज़ लाएं। RC <strong>Issued Documents</strong> में सेव होगी; हर गाड़ी की RC अलग से लानी होती है।",
      ],
      callout: { kind: "info", html: "परिवहन मंत्रालय के issuer खाते में RC के अलावा <strong>Fitness Certificate</strong>, <strong>Vehicle Insurance Certificate</strong>, <strong>Vehicle Tax Receipt</strong> और <strong>Challan</strong> भी दर्ज हैं। कमर्शियल गाड़ी वाले फिटनेस भी यहीं से ला सकते हैं, अगर उनका रिकॉर्ड VAHAN में है।" },
    },
    {
      id: "valid",
      title: "पुलिस जांच में DigiLocker वाली RC कितनी मान्य",
      list: [
        "<strong>MoRTH एडवाइज़री, अगस्त 2018:</strong> DigiLocker या mParivahan में दिखाई गई RC मोटर वाहन एक्ट के तहत मान्य है और परिवहन विभाग की जारी RC के बराबर है।",
        "<strong>बीमा:</strong> उसी एडवाइज़री के अनुसार बीमा का डेटा Insurance Information Bureau रोज़ VAHAN पर भेजता है। अगर mParivahan/eChallan ऐप में गाड़ी के विवरण में चालू पॉलिसी दिख रही है, तो बीमा की कागज़ी कॉपी पर ज़ोर नहीं दिया जाना है।",
        "<strong>CMVR नियम 139</strong> भी दस्तावेज़ इलेक्ट्रॉनिक रूप में दिखाने की अनुमति देता है।",
        "<strong>DigiLocker नियम 9A:</strong> " + RULE_9A,
      ],
      callout: { kind: "warn", html: "मान्यता सिर्फ Issued Documents वाली RC को है। गाड़ी के कागज़ों की फोटो या Uploaded Documents में डाली स्कैन कॉपी पर भरोसा न करें।" },
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["Record not found", "रजिस्ट्रेशन नंबर RC से मिलाकर दोबारा डालें। गाड़ी का रिकॉर्ड VAHAN में न हो (जैसे बहुत पुराना रिकॉर्ड) तो RTO से संपर्क करें।"],
          ["गाड़ी बेच दी या खरीदी", "DigiLocker वही मालिक दिखाता है जो VAHAN में है। ट्रांसफर पूरा होने के बाद ही नए मालिक के नाम RC आएगी।"],
          ["RC पति/पत्नी, पिता या कंपनी के नाम", "DigiLocker सिर्फ आपके नाम पर जारी दस्तावेज़ देता है; जिसके नाम RC है, उसी के DigiLocker में आएगी।"],
          ["नाम मेल नहीं खाता", "RC और आधार में नाम अलग हो तो RC fetch नहीं होगी। RC में सुधार VAHAN/RTO से, या आधार में सुधार करवाएं।"],
          ["पता/हाइपोथिकेशन पुराना दिख रहा", "DigiLocker डेटा नहीं बदलता। VAHAN पर बदलाव पूरा होने के बाद दस्तावेज़ दोबारा लाएं।"],
          ["तकनीकी एरर", DL_SUPPORT + " पर टिकट डालें, एरर का स्क्रीनशॉट और रजिस्ट्रेशन नंबर के साथ।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के अलावा official विकल्प",
      list: [
        "<strong>mParivahan ऐप</strong>: वर्चुअल RC। देखें <a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan वर्चुअल RC/DL</a>।",
        "<strong>VAHAN पोर्टल</strong> (<a href=\"https://vahan.parivahan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">vahan.parivahan.gov.in</a>): RC से जुड़ी सेवाएं जैसे डुप्लीकेट RC, पता बदलना, ट्रांसफर।",
        "गाड़ी का मोबाइल नंबर <a href=\"https://vahan.parivahan.gov.in/mobileupdate/\" target=\"_blank\" rel=\"noopener nofollow\">VAHAN mobile update</a> पर अपडेट करें; चालान के SMS इसी नंबर पर आते हैं।",
        "RC खो जाए तो डुप्लीकेट के लिए आवेदन VAHAN पर; कई राज्यों में FIR/शपथ पत्र मांगा जाता है (<a href=\"/affidavit/lost-document.html\">दस्तावेज़ खोने का एफिडेविट</a>)।",
      ],
    },
  ],
  official: [
    { href: "https://vahan.parivahan.gov.in/", title: "VAHAN (वाहन रजिस्ट्रेशन सेवाएं)", note: "परिवहन मंत्रालय" },
    { href: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=181696", title: "PIB: DigiLocker/mParivahan में DL-RC मान्य", note: "9 अगस्त 2018" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "DigiLocker में RC किस नाम से मिलती है?", a: "issuer “Ministry of Road Transport and Highways” के अंतर्गत दस्तावेज़ का नाम “Registration of Vehicles” है। Search में “Registration” या “RC” लिखकर खोजें।" },
    { q: "क्या DigiLocker वाली RC दिखाने पर पुलिस कागज़ी RC मांग सकती है?", a: "MoRTH की 2018 एडवाइज़री के अनुसार DigiLocker या mParivahan में दिखाई RC मान्य है और कागज़ी RC के बराबर है। ज़ब्ती की ज़रूरत हो तो वह eChallan में इलेक्ट्रॉनिक रूप से दर्ज होती है।" },
    { q: "क्या बीमा की कॉपी भी साथ रखनी होगी?", a: "MoRTH के अनुसार अगर mParivahan/eChallan ऐप में गाड़ी के विवरण में चालू बीमा पॉलिसी दिख रही है, तो कागज़ी बीमा कॉपी पर ज़ोर नहीं दिया जाना है। अपनी पॉलिसी DigiLocker में भी रख सकते हैं, देखें बीमा पॉलिसी गाइड।" },
    { q: "दूसरे के नाम की गाड़ी की RC अपने DigiLocker में ला सकते हैं?", a: "नहीं। DigiLocker सिर्फ आपके नाम पर जारी दस्तावेज़ देता है। परिवार के हर सदस्य को अपना अकाउंट बनाकर अपने दस्तावेज़ लाने होते हैं।" },
    { q: "नई गाड़ी की RC DigiLocker में कब आएगी?", a: "जब RTO में रजिस्ट्रेशन पूरा होकर रिकॉर्ड VAHAN में आ जाए। उसके बाद Search करके RC लाई जा सकती है।" },
    { q: "क्या फिटनेस और टैक्स रसीद भी DigiLocker में हैं?", a: "हां, परिवहन मंत्रालय के issuer खाते में Fitness Certificate और Vehicle Tax Receipt भी दर्ज हैं; आपकी गाड़ी का रिकॉर्ड VAHAN में होने पर ये मिल सकते हैं।" },
  ],
  related: cards("dl", "insurance", "mparivahan", "rcGuide", "challan", "hub"),
  aside: [{ href: "https://vahan.parivahan.gov.in/", label: "🚗 VAHAN पोर्टल" }, ASIDE[1]],
};
