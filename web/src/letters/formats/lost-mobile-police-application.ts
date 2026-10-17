import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - sancharsaathi.gov.in "Block Your Lost/Stolen Mobile Handset" (CEIR) and
//   ceir.sancharsaathi.gov.in CEIR Mobile User Manual (English v02): request
//   needs the police complaint number and copy (FIR or lost report), IMEI
//   numbers, identity proof, optional purchase invoice, and an OTP on a
//   (duplicate) SIM of the lost number; a Request ID is given to check status
//   and to unblock after recovery; if a request already exists it may have
//   been entered by the state police. Same research as
//   web/src/guides/doc/sanchar-saathi.ts (4 Oct 2026).
// - Bharatiya Nyaya Sanhita 2023 s.303 (theft) and s.304 (snatching);
//   Bharatiya Nagarik Suraksha Sanhita 2023 s.173(1) (information of a
//   cognizable offence, orally or by electronic communication; e-information
//   to be signed within 3 days) and s.173(2) (free copy of FIR). In force
//   since 1 July 2024.
// - digitalpolice.gov.in (MHA): state police citizen portals offer online
//   lost-article reports / e-FIR in many states.
// - cybercrime.gov.in / 1930 for money lost through the phone.
export const lostMobilePoliceApplication: Letter = {
  slug: "lost-mobile-police-application",
  category: "police",
  emoji: "📱",
  title: "Lost Mobile Police Application in Hindi 2026: मोबाइल गुम होने का आवेदन",
  description: "मोबाइल गुम/चोरी होने पर थाने को आवेदन पत्र (हिंदी/English) और संचार साथी (CEIR) पर फोन ब्लॉक करने का तरीका: IMEI, शिकायत नंबर, SIM बंद कराना।",
  h1: "मोबाइल गुम होने पर पुलिस को आवेदन पत्र 2026 (CEIR ब्लॉक सहित)",
  short: { hi: "मोबाइल गुम होने का आवेदन", en: "Lost mobile police application" },
  lead: "मोबाइल गुम या चोरी होने पर जिस इलाके में फोन खोया उस <strong>थाने के प्रभारी (SHO)</strong> को आवेदन दें या राज्य पुलिस के पोर्टल पर ऑनलाइन लॉस्ट रिपोर्ट/e-FIR दर्ज करें। चोरी या छीना-झपटी हो तो यह <strong>BNS धारा 303/304</strong> का अपराध है और FIR होनी चाहिए। पुलिस शिकायत नंबर मिलते ही <strong>संचार साथी (CEIR)</strong> पर फोन का IMEI ब्लॉक करें, ताकि कोई दूसरा उसे भारत में इस्तेमाल न कर सके।",
  facts: [
    ["किसे दें", "जिस इलाके में फोन गुम/चोरी हुआ, उस थाने के प्रभारी (SHO); या राज्य पुलिस का ऑनलाइन पोर्टल"],
    ["फोन ब्लॉक", '<a href="https://sancharsaathi.gov.in/" target="_blank" rel="noopener nofollow">sancharsaathi.gov.in</a> पर CEIR: पुलिस शिकायत नंबर + IMEI + पहचान पत्र'],
    ["चोरी पर कानून", "BNS धारा 303 (चोरी), 304 (छीना-झपटी); FIR की कॉपी मुफ्त (BNSS 173(2))"],
    ["पैसे कटे हों", '1930 या <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener nofollow">cybercrime.gov.in</a>'],
  ],
  to: "जिस जगह फोन गुम या चोरी हुआ, उस इलाके के <strong>थाना प्रभारी (SHO)</strong> को। ट्रेन में खोया हो तो <strong>GRP थाने</strong> को। कई राज्यों में पुलिस के सिटिजन पोर्टल/ऐप पर ऑनलाइन लॉस्ट रिपोर्ट भी दर्ज होती है।",
  when: [
    "मोबाइल कहीं गिर गया या छूट गया और नहीं मिला",
    "मोबाइल चोरी हुआ या किसी ने छीन लिया",
    "CEIR पर फोन ब्लॉक करने के लिए पुलिस शिकायत नंबर चाहिए",
    "बीमा क्लेम या नए SIM के लिए पुलिस रिपोर्ट की कॉपी चाहिए",
  ],
  fields: [
    { key: "station", label: { hi: "थाने का नाम और ज़िला", en: "Police station and district" }, required: true, placeholder: { hi: "जैसे: थाना कोतवाली, ज़िला अलीगढ़", en: "e.g. Kotwali Police Station, Aligarh" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "संपर्क के लिए दूसरा मोबाइल नंबर", en: "Alternate contact number" }, type: "tel", required: true },
    { key: "how", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", options: [
      { hi: "मेरा मोबाइल कहीं गिरकर गुम हो गया", en: "my mobile phone was lost" },
      { hi: "मेरा मोबाइल चोरी हो गया", en: "my mobile phone was stolen" },
      { hi: "मेरा मोबाइल छीन लिया गया", en: "my mobile phone was snatched" },
    ] },
    { key: "when", label: { hi: "कब (तारीख और लगभग समय)", en: "When (date and approx. time)" }, required: true, placeholder: { hi: "जैसे: 14/10/2026, शाम लगभग 6 बजे", en: "e.g. 14/10/2026, around 6 pm" } },
    { key: "where", label: { hi: "कहां", en: "Where" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सब्ज़ी मंडी, रेलवे रोड, ऑटो से उतरते समय", en: "e.g. vegetable market, Railway Road, while getting off an auto" } },
    { key: "model", label: { hi: "मोबाइल कंपनी, मॉडल और रंग", en: "Make, model and colour" }, required: true, placeholder: { hi: "जैसे: Samsung Galaxy A15, काला", en: "e.g. Samsung Galaxy A15, black" } },
    { key: "imei", label: { hi: "IMEI नंबर (दोनों हों तो दोनों)", en: "IMEI number(s)" }, required: true, hint: { hi: "फोन के डिब्बे या बिल पर लिखा होता है", en: "Printed on the box or bill" } },
    { key: "sim", label: { hi: "फोन में लगा मोबाइल नंबर और कंपनी", en: "Mobile number(s) in the phone and operator" }, required: true, placeholder: { hi: "जैसे: 98XXXXXX10 (Jio)", en: "e.g. 98XXXXXX10 (Jio)" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान थाना प्रभारी महोदय,
{{station}}

विषय: मोबाइल फोन गुम/चोरी होने की सूचना और रिपोर्ट दर्ज करने हेतु आवेदन।

महोदय,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, निवासी {{address}}, आपको सूचित करना चाहता/चाहती हूं कि दिनांक व समय {{when}} को {{where}} पर {{how}}।

मोबाइल का विवरण:
कंपनी/मॉडल/रंग: {{model}}
IMEI नंबर: {{imei}}
मोबाइल नंबर (SIM): {{sim}}

काफी खोजने के बाद भी मोबाइल नहीं मिला। मुझे आशंका है कि इसका गलत इस्तेमाल हो सकता है। अतः निवेदन है कि:
1. मेरी रिपोर्ट दर्ज कर मुझे रिपोर्ट/FIR संख्या और उसकी कॉपी दी जाए, ताकि मैं संचार साथी (CEIR) पोर्टल पर फोन का IMEI ब्लॉक करा सकूं;
2. मोबाइल का पता लगाने की कार्रवाई की जाए और मिलने पर मुझे सूचित किया जाए।

इस मोबाइल का यदि कोई दुरुपयोग होता है तो उसकी ज़िम्मेदारी मेरी नहीं होगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
संपर्क: {{phone}}

संलग्न: पहचान पत्र की कॉपी, मोबाइल के बिल/डिब्बे की कॉपी

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Station House Officer,
{{station}}

Subject: Report of lost/stolen mobile phone and request to register it.

Sir,

I, {{name}}, son/daughter/wife of {{father}}, resident of {{address}}, wish to inform you that on {{when}}, at {{where}}, {{how}}.

Details of the mobile phone:
Make/model/colour: {{model}}
IMEI number(s): {{imei}}
Mobile number (SIM): {{sim}}

Despite searching, the phone has not been found. I fear it may be misused. I therefore request that:
1. My report be registered and I be given the report/FIR number and a copy, so that I can block the IMEI on the Sanchar Saathi (CEIR) portal;
2. Action be taken to trace the phone and I be informed if it is found.

I shall not be responsible for any misuse of this mobile phone.

Yours faithfully,

(Signature)
Name: {{name}}
Contact: {{phone}}

Enclosures: Copy of identity proof, copy of the phone's bill/box

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पहचान पत्र (आधार/वोटर कार्ड) की कॉपी",
    "मोबाइल का बिल या डिब्बे की फोटो/कॉपी, जिस पर IMEI लिखा हो",
  ],
  submit: [
    "सबसे पहले अपनी मोबाइल कंपनी से SIM ब्लॉक कराएं और उसी नंबर का <strong>डुप्लीकेट SIM</strong> लें (CEIR में OTP इसी पर आएगा)।",
    "थाने में यह आवेदन दें, या राज्य पुलिस के सिटिजन पोर्टल पर ऑनलाइन लॉस्ट रिपोर्ट/e-FIR दर्ज करें, और <strong>शिकायत/FIR नंबर व कॉपी</strong> लें। चोरी/छीनने में FIR की कॉपी मुफ्त मिलती है।",
    '<a href="https://sancharsaathi.gov.in/" target="_blank" rel="noopener nofollow">sancharsaathi.gov.in</a> पर "Block Your Lost/Stolen Mobile" में पुलिस शिकायत नंबर, IMEI और पहचान पत्र भरकर फोन ब्लॉक करें; मिली <strong>Request ID</strong> संभाल कर रखें।',
    "फोन मिल जाए तो उसी Request ID से संचार साथी पर फोन <strong>अनब्लॉक</strong> करें। फोन से बैंक/UPI में पैसे कटे हों तो तुरंत <strong>1930</strong> पर कॉल करें।",
  ],
  tips: [
    "IMEI फोन के डिब्बे, बिल या फोन में *#06# डायल करके पता चलता है; अभी से कहीं लिख कर रखें।",
    "चोरी को 'गुम' न लिखें; चोरी/छीनने पर FIR का हक है।",
    "UPI, बैंक ऐप और ईमेल के पासवर्ड बदलें, और बैंक को सूचना दें।",
    "पुलिस शिकायत नंबर के बिना CEIR पर फोन ब्लॉक नहीं होता।",
  ],
  notice: "कई राज्यों में गुम मोबाइल की रिपोर्ट पुलिस के ऑनलाइन पोर्टल पर ही दर्ज होती है और तुरंत नंबर मिल जाता है। थाने जाने से पहले अपने राज्य की पुलिस वेबसाइट देख लें।",
  official: [
    { href: "https://sancharsaathi.gov.in/", title: "संचार साथी (CEIR): गुम/चोरी मोबाइल ब्लॉक करें" },
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "राज्य पुलिस के सिटिजन पोर्टल" },
    { href: "https://cybercrime.gov.in/", title: "साइबर अपराध पोर्टल (पैसे कटे हों तो)" },
  ],
  related: ["/service/sanchar-saathi.html", "/support/helpline-directory.html"],
  faq: [
    { q: "मोबाइल गुम हो जाए तो क्या करें?", a: "मोबाइल कंपनी से SIM बंद कराएं और डुप्लीकेट SIM लें, थाने या पुलिस पोर्टल पर रिपोर्ट दर्ज करें, फिर शिकायत नंबर से संचार साथी (CEIR) पर IMEI ब्लॉक करें।" },
    { q: "संचार साथी पर फोन ब्लॉक करने के लिए क्या चाहिए?", a: "पुलिस शिकायत/FIR नंबर और उसकी कॉपी, फोन का IMEI, पहचान पत्र, और खोए नंबर का (डुप्लीकेट) SIM जिस पर OTP आएगा। बिल वैकल्पिक है।" },
    { q: "क्या मोबाइल गुम होने की रिपोर्ट ऑनलाइन हो सकती है?", a: "हां, कई राज्यों की पुलिस अपने सिटिजन पोर्टल या ऐप पर ऑनलाइन लॉस्ट रिपोर्ट/e-FIR लेती है। अपने राज्य की पुलिस वेबसाइट देखें; लिंक digitalpolice.gov.in पर भी हैं।" },
    { q: "फोन मिलने के बाद अनब्लॉक कैसे करें?", a: "संचार साथी पोर्टल पर अनब्लॉक का विकल्प चुनें और ब्लॉक करते समय मिली Request ID डालें।" },
    { q: "IMEI नंबर कैसे पता करें?", a: "फोन के डिब्बे या खरीद के बिल पर लिखा होता है। फोन हाथ में हो तो *#06# डायल करके देख सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
