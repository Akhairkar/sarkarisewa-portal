import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Right to Information Act 2005 (indiacode.gov.in): s.6(1) request in
//   writing or electronically with the prescribed fee, s.6(2) no reason
//   needed and no personal details except for contact, s.7(1) reply within
//   30 days (48 hours where life or liberty is involved), s.7(5) no fee for
//   BPL applicants, s.19(1) first appeal within 30 days to the officer senior
//   to the CPIO.
// - RTI Rules 2012 (DoPT) r.3: application fee Rs 10 for central public
//   authorities; payment by cash against receipt, DD, banker's cheque or
//   Indian Postal Order payable to the Accounts Officer, or online.
// - rtionline.dopt.gov.in: online RTI for central ministries/departments.
// State public authorities follow their own state RTI rules (fee and mode
// differ), so the page says so instead of giving state amounts.
export const rtiApplicationFormat: Letter = {
  slug: "rti-application-format",
  category: "rti",
  emoji: "📨",
  title: "RTI Application Format in Hindi 2026: सूचना का अधिकार आवेदन पत्र",
  description: "RTI आवेदन का तैयार फॉर्मेट (हिंदी/English): अपनी जानकारी भरें, प्रिंट या PDF करें। ₹10 फीस, BPL को छूट, 30 दिन में जवाब, ऑनलाइन RTI और पहली अपील की जानकारी।",
  h1: "RTI आवेदन पत्र फॉर्मेट 2026: भरें, प्रिंट करें और भेजें",
  short: { hi: "RTI आवेदन पत्र", en: "RTI application" },
  lead: "सूचना का अधिकार (RTI) अधिनियम 2005 की <strong>धारा 6(1)</strong> के तहत कोई भी नागरिक सरकारी दफ्तर से जानकारी मांग सकता है। आवेदन संबंधित दफ्तर के <strong>जन सूचना अधिकारी (PIO)</strong> को लिखा जाता है। केंद्र सरकार के दफ्तरों में फीस <strong>₹10</strong> है, BPL कार्ड वालों से कोई फीस नहीं, और जवाब <strong>30 दिन</strong> में देना होता है। नीचे अपनी जानकारी भरें, पत्र तैयार हो जाएगा।",
  facts: [
    ["कानून", "RTI अधिनियम 2005, धारा 6(1)"],
    ["फीस (केंद्र)", "₹10; BPL को छूट"],
    ["जवाब का समय", "30 दिन (जान-माल का मामला: 48 घंटे)"],
    ["ऑनलाइन (केंद्र)", '<a href="https://rtionline.dopt.gov.in/" target="_blank" rel="noopener nofollow">rtionline.dopt.gov.in</a>'],
  ],
  to: "जिस दफ्तर से जानकारी चाहिए, उसके <strong>जन सूचना अधिकारी (PIO / CPIO)</strong> को। नाम पता न हो तो सिर्फ पद और दफ्तर का पता लिखना काफी है।",
  when: [
    "सरकारी योजना, आवेदन, शिकायत या फाइल की स्थिति जाननी हो",
    "किसी काम पर खर्च हुए पैसे, ठेके या सूची की जानकारी चाहिए",
    "अपने आवेदन पर हुई कार्रवाई (नोटशीट, आदेश) की कॉपी चाहिए",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: जिला आपूर्ति कार्यालय, पटना, बिहार", en: "e.g. District Supply Office, Patna, Bihar" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता (जवाब इसी पर आएगा)", en: "Your address (reply comes here)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर (चाहें तो)", en: "Mobile (optional)" }, type: "tel" },
    { key: "subject", label: { hi: "विषय (एक लाइन में)", en: "Subject (one line)" }, required: true, placeholder: { hi: "जैसे: मेरे राशन कार्ड आवेदन की स्थिति", en: "e.g. Status of my ration card application" } },
    { key: "info", label: { hi: "कौन सी जानकारी चाहिए (हर बात अलग लाइन में)", en: "Information needed (one point per line)" }, type: "textarea", required: true, placeholder: { hi: "1. आवेदन संख्या ___ पर अब तक क्या कार्रवाई हुई\n2. फाइल नोटिंग की प्रमाणित कॉपी", en: "1. Action taken on application no. ___\n2. Certified copy of file notings" } },
    { key: "period", label: { hi: "किस समय की जानकारी", en: "Period" }, placeholder: { hi: "जैसे: 01/04/2025 से अब तक", en: "e.g. from 01/04/2025 till date" } },
    { key: "fee", label: { hi: "फीस कैसे दी", en: "Fee paid by" }, type: "select", options: [
      { hi: "₹10 का भारतीय पोस्टल ऑर्डर संलग्न है", en: "Indian Postal Order of Rs 10 enclosed" },
      { hi: "₹10 नकद जमा, रसीद संलग्न है", en: "Rs 10 paid in cash, receipt enclosed" },
      { hi: "मैं BPL कार्डधारी हूं, फीस से छूट (कार्ड की कॉपी संलग्न)", en: "I am a BPL card holder, exempt from fee (copy enclosed)" },
      { hi: "राज्य के नियम के अनुसार फीस संलग्न है", en: "Fee enclosed as per state rules" },
    ] },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
जन सूचना अधिकारी,
{{office}}

विषय: सूचना का अधिकार अधिनियम 2005 की धारा 6(1) के तहत सूचना हेतु आवेदन – {{subject}}

महोदय/महोदया,

मैं, {{name}}, भारत का नागरिक हूं। कृपया सूचना का अधिकार अधिनियम 2005 के तहत मुझे निम्नलिखित सूचना उपलब्ध कराएं:

{{info}}

सूचना की अवधि: {{period}}

फीस: {{fee}}।

यदि मांगी गई सूचना आपके कार्यालय से संबंधित नहीं है, तो कृपया धारा 6(3) के तहत आवेदन को संबंधित लोक प्राधिकरण को 5 दिन के अंदर भेजें और मुझे सूचित करें। सूचना डाक द्वारा नीचे दिए पते पर भेजें।

भवदीय,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Public Information Officer,
{{office}}

Subject: Application under Section 6(1) of the Right to Information Act, 2005 – {{subject}}

Sir/Madam,

I, {{name}}, am a citizen of India. Kindly provide me the following information under the Right to Information Act, 2005:

{{info}}

Period: {{period}}

Fee: {{fee}}.

If the information sought does not relate to your office, kindly transfer this application to the concerned public authority under Section 6(3) within 5 days and inform me. Please send the information by post to the address below.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "फीस: केंद्र के दफ्तर के लिए ₹10 का पोस्टल ऑर्डर/DD (\"Accounts Officer\" के नाम) या नकद की रसीद; राज्य के दफ्तर में राज्य के RTI नियम की फीस",
    "BPL हों तो BPL कार्ड की स्व-प्रमाणित कॉपी (तब फीस नहीं लगती)",
  ],
  submit: [
    "पत्र प्रिंट करके हस्ताक्षर करें और फीस साथ लगाएं।",
    "दफ्तर में हाथ से जमा करें और रिसीविंग लें, या <strong>स्पीड पोस्ट/रजिस्टर्ड डाक</strong> से भेजें और रसीद संभालें।",
    'केंद्र सरकार के मंत्रालय/विभाग के लिए <a href="https://rtionline.dopt.gov.in/" target="_blank" rel="noopener nofollow">rtionline.dopt.gov.in</a> पर ऑनलाइन भी आवेदन होता है; कई राज्यों के अपने RTI पोर्टल हैं।',
    "30 दिन में जवाब न मिले या जवाब से संतुष्ट न हों, तो 30 दिन के अंदर उसी दफ्तर के <strong>प्रथम अपीलीय अधिकारी</strong> को पहली अपील करें।",
  ],
  tips: [
    "सवाल छोटे और साफ लिखें; \"क्यों\" के बजाय \"क्या कार्रवाई हुई, कॉपी दें\" पूछें।",
    "जानकारी मांगने का कारण बताना ज़रूरी नहीं है (धारा 6(2))।",
    "एक आवेदन में एक ही विषय रखें, वरना आवेदन लौट सकता है।",
    "आवेदन और फीस की कॉपी/रसीद संभाल कर रखें; अपील में काम आएगी।",
  ],
  official: [
    { href: "https://rtionline.dopt.gov.in/", title: "RTI Online (केंद्र सरकार)", note: "ऑनलाइन आवेदन और पहली अपील" },
    { href: "https://www.indiacode.nic.in/handle/123456789/2065", title: "RTI अधिनियम 2005 (India Code)" },
  ],
  related: ["/support/rti-guide.html"],
  faq: [
    { q: "RTI आवेदन किसे लिखें?", a: "जिस दफ्तर से जानकारी चाहिए, उसके जन सूचना अधिकारी (PIO) को। नाम न पता हो तो सिर्फ 'जन सूचना अधिकारी' और दफ्तर का पता लिखें।" },
    { q: "RTI की फीस कितनी है?", a: "केंद्र सरकार के दफ्तरों में ₹10। BPL कार्डधारी से फीस नहीं ली जाती। राज्य सरकार के दफ्तरों में फीस और जमा करने का तरीका राज्य के नियम से तय होता है।" },
    { q: "RTI का जवाब कितने दिन में आता है?", a: "आम तौर पर 30 दिन में। अगर मामला किसी की जान या आज़ादी से जुड़ा है तो 48 घंटे में।" },
    { q: "जवाब न मिले तो क्या करें?", a: "30 दिन पूरे होने के बाद 30 दिन के अंदर उसी दफ्तर के प्रथम अपीलीय अधिकारी को पहली अपील करें; उसके बाद सूचना आयोग में दूसरी अपील होती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
