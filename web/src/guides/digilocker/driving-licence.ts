import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, DL_SUPPORT, RULE_9A, OFFICIAL_DL, ASIDE, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - PIB, MoRTH, 9 Aug 2018 (relid=181696): advisory to states to accept DL, RC
//   or other documents in electronic form presented through DigiLocker or
//   mParivahan as valid under the MV Act 1988, at par with certificates issued
//   by transport authorities; records deemed legally recognised under the IT
//   Act 2000; impounding to be reflected electronically through eChallan.
//   MoRTH letter dated 08/08/2018 listed on morth.nic.in.
// - CMVR rule 139 as amended by G.S.R. 584(E), 2020 (as already verified for
//   the /challan/ cluster): documents may be produced in electronic form.
// - PIB, Ministry of Railways, 6 Jul 2018 (PRID 1537986): DL/Aadhaar shown from
//   DigiLocker "Issued Documents" valid ID on trains; uploaded copies not.
// - DigiLocker Ask our Experts (18 Oct 2024) Q2: if the DL is linked to another
//   mobile number, log in to the Aadhaar-linked account on the website, use
//   "Search Document", select "Ministry of Road Transport and Highways",
//   "Driving Licence Verification Record", enter licence number. Name must
//   match Aadhaar. Traffic police refusal answers.
// - API Setu directory: issuer "Ministry of Road Transport and Highways"
//   (in.gov.transport): Driving License, Registration of Vehicles, Vehicle
//   Insurance Certificate, Fitness Certificate, Vehicle Tax Receipt, Challan.
export const drivingLicence: DocGuide = {
  crumbs: crumbs("ड्राइविंग लाइसेंस"),
  docHi: "ड्राइविंग लाइसेंस",
  title: "DigiLocker में ड्राइविंग लाइसेंस कैसे जोड़ें | SarkariSewa India",
  description: "DL नंबर से DigiLocker में ड्राइविंग लाइसेंस कैसे लाएं, ट्रैफिक पुलिस को दिखाने पर मान्य है या नहीं (MoRTH एडवाइज़री), रिकॉर्ड या नाम मेल न खाए तो क्या करें।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "DigiLocker में ड्राइविंग लाइसेंस कैसे जोड़ें और डाउनलोड करें",
  lead: "DigiLocker में Search Documents से “Ministry of Road Transport and Highways” चुनें, ड्राइविंग लाइसेंस वाला दस्तावेज़ खोलें और अपना DL नंबर डालें; रिकॉर्ड परिवहन विभाग के डेटाबेस से सीधे Issued Documents में आ जाता है। परिवहन मंत्रालय की 2018 की एडवाइज़री के अनुसार DigiLocker या mParivahan में दिखाया गया DL मूल लाइसेंस के बराबर माना जाना चाहिए।",
  facts: [
    ["issuer", "Ministry of Road Transport and Highways"],
    ["क्या डालना है", "DL नंबर (लाइसेंस पर छपा हुआ)"],
    ["मान्यता", "MoRTH एडवाइज़री 2018, CMVR नियम 139"],
    ["फीस", "DigiLocker पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "app-steps",
      title: "DigiLocker ऐप में DL जोड़ने के स्टेप",
      steps: [
        "DigiLocker ऐप खोलें और आधार/मोबाइल नंबर से लॉगिन करें (ऐप के लिए Android 10 या नया वर्ज़न चाहिए)।",
        "<strong>Search</strong> में “Driving Licence” या “Ministry of Road Transport” लिखें।",
        "Ministry of Road Transport and Highways का ड्राइविंग लाइसेंस वाला दस्तावेज़ (Driving Licence / Driving Licence Verification Record) चुनें।",
        "लाइसेंस पर छपा पूरा <strong>DL नंबर</strong> और स्क्रीन पर मांगी गई दूसरी जानकारी भरें।",
        "सहमति देकर दस्तावेज़ लाएं। DL अब <strong>Issued Documents</strong> में दिखेगा; ट्रैफिक पुलिस को यहीं से खोलकर दिखाएं।",
      ],
    },
    {
      id: "web-steps",
      title: "वेबसाइट पर (DL किसी दूसरे मोबाइल नंबर से जुड़ा हो तब भी)",
      intro: "DigiLocker के अनुसार अगर आपका DigiLocker आधार वाले एक नंबर से है और DL किसी दूसरे नंबर से जुड़ा है, तब भी DL लाया जा सकता है:",
      steps: [
        "<a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">digilocker.gov.in</a> पर आधार से जुड़े अकाउंट में लॉगिन करें।",
        "बाईं ओर <strong>Search Document</strong> चुनें।",
        "<strong>Ministry of Road Transport and Highways</strong> चुनें, फिर <strong>Driving Licence Verification Record</strong>।",
        "अपना लाइसेंस नंबर डालें और दस्तावेज़ लाएं।",
      ],
    },
    {
      id: "valid",
      title: "क्या ट्रैफिक पुलिस DigiLocker वाला DL मानेगी",
      intro: "हां, ये तीन official आधार हैं:",
      list: [
        "<strong>MoRTH एडवाइज़री (अगस्त 2018):</strong> राज्यों से कहा गया कि DigiLocker या mParivahan में दिखाया गया DL, RC या दूसरा दस्तावेज़ मोटर वाहन एक्ट 1988 के तहत मान्य मानें और परिवहन विभाग के जारी प्रमाण पत्र के बराबर समझें। ज़ब्ती (impound) की ज़रूरत हो तो वह eChallan सिस्टम में इलेक्ट्रॉनिक रूप से दर्ज होती है।",
        "<strong>CMVR नियम 139:</strong> DL, RC जैसे दस्तावेज़ पोर्टल से लिए गए इलेक्ट्रॉनिक रूप में दिखाए जा सकते हैं।",
        "<strong>DigiLocker नियम 9A:</strong> " + RULE_9A,
      ],
      callout: { kind: "warn", html: "<strong>शर्त:</strong> DL DigiLocker के <strong>Issued Documents</strong> (या mParivahan) में होना चाहिए। फोन में रखी फोटो, PDF या Uploaded Documents वाली स्कैन कॉपी को यह दर्जा नहीं मिलता। रेल मंत्रालय भी ट्रेन में पहचान के लिए Issued Documents वाला DL मानता है, Uploaded वाला नहीं।" },
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["Record not found", "DL नंबर लाइसेंस पर छपे जैसा ही डालें। DigiLocker वही दिखाता है जो परिवहन विभाग के ऑनलाइन रिकॉर्ड में है; बहुत पुराने लाइसेंस का रिकॉर्ड ऑनलाइन न हो तो अपने RTO से संपर्क करें।"],
          ["नाम मेल नहीं खाता", "DL और आधार का नाम अलग हो तो DigiLocker दस्तावेज़ नहीं देता। DL में नाम सुधार RTO/Sarathi से करवाएं या आधार सही करवाएं।"],
          ["DL किसी और मोबाइल नंबर से जुड़ा", "ऊपर वाला वेबसाइट तरीका अपनाएं। DL में मोबाइल नंबर Sarathi पोर्टल पर अपडेट होता है।"],
          ["लाइसेंस की वैधता खत्म दिख रही", "DigiLocker वही दिखाता है जो परिवहन विभाग के रिकॉर्ड में है। रिन्यूअल Sarathi पर करें; रिकॉर्ड अपडेट होते ही नया विवरण आएगा।"],
          ["पुलिस ने मानने से मना किया", "शांति से MoRTH की 2018 एडवाइज़री का हवाला दें; DigiLocker के अनुसार Issued Documents मान्य हैं। ज़रूरत हो तो " + DL_SUPPORT + " पर जानकारी दें।"],
        ],
      },
    },
    {
      id: "vikalp",
      title: "DigiLocker के अलावा official विकल्प",
      list: [
        "<strong>mParivahan ऐप</strong> (परिवहन मंत्रालय): वर्चुअल DL। देखें <a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan वर्चुअल RC/DL</a>।",
        "<strong>Sarathi पोर्टल</strong> (<a href=\"https://sarathi.parivahan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">sarathi.parivahan.gov.in</a>): DL की जानकारी, रिन्यूअल, डुप्लीकेट DL और पता/मोबाइल बदलाव।",
        "DL खो गया हो तो डुप्लीकेट Sarathi से; DigiLocker वाला DL तब तक दिखाया जा सकता है जब तक रिकॉर्ड वैध है।",
      ],
    },
  ],
  official: [
    { href: "https://sarathi.parivahan.gov.in/", title: "Sarathi (ड्राइविंग लाइसेंस सेवाएं)", note: "परिवहन मंत्रालय" },
    { href: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=181696", title: "PIB: MoRTH एडवाइज़री, DigiLocker/mParivahan दस्तावेज़ मान्य", note: "9 अगस्त 2018" },
    ...OFFICIAL_DL,
  ],
  faq: [
    { q: "DigiLocker में DL जोड़ने के लिए क्या चाहिए?", a: "आधार से जुड़ा DigiLocker अकाउंट और आपका DL नंबर। DigiLocker में Ministry of Road Transport and Highways चुनकर लाइसेंस नंबर डालना होता है।" },
    { q: "क्या DigiLocker वाला DL दिखाने पर चालान कट सकता है?", a: "MoRTH की 2018 एडवाइज़री के अनुसार DigiLocker या mParivahan में दिखाया गया DL मूल के बराबर मान्य है, इसलिए सिर्फ कागज़ी DL न होने पर चालान नहीं बनना चाहिए। शर्त यह है कि DL Issued Documents में हो।" },
    { q: "DL में फोटो की कॉपी Uploaded Documents में रख ली है, क्या चलेगी?", a: "नहीं। मान्यता सिर्फ issuer से आए Issued Document को है। खुद अपलोड की गई फोटो/स्कैन उस दर्जे की नहीं है।" },
    { q: "क्या DigiLocker वाला DL ट्रेन में पहचान पत्र के रूप में चलेगा?", a: "रेल मंत्रालय के 2018 के फैसले के अनुसार DigiLocker के Issued Documents से दिखाया गया DL या आधार ट्रेन यात्रा में पहचान के लिए मान्य है; Uploaded Documents वाला नहीं।" },
    { q: "DL का पता या नाम बदलना है, DigiLocker से हो जाएगा?", a: "नहीं, DigiLocker सिर्फ दिखाता है। बदलाव Sarathi पोर्टल/RTO से होगा, फिर DigiLocker में दस्तावेज़ दोबारा लाने पर नया विवरण दिखेगा।" },
    { q: "लर्नर लाइसेंस DigiLocker में आता है?", a: "API Setu पर परिवहन मंत्रालय के दस्तावेज़ों में Driving License दर्ज है; लर्नर लाइसेंस अलग से दर्ज नहीं दिखा। लर्नर लाइसेंस Sarathi पोर्टल से प्रिंट करें।" },
  ],
  related: cards("rc", "insurance", "mparivahan", "dlGuide", "challan", "aadhaar"),
  aside: [{ href: "https://sarathi.parivahan.gov.in/", label: "🚦 Sarathi पोर्टल" }, ASIDE[1]],
};
