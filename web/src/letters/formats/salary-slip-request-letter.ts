import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Code on Wages 2019 (in force 21 Nov 2025) and Code on Wages (Central)
//   Rules 2026 (notified 8 May 2026, commentary: Corporate Professionals,
//   Mondaq/Lexplosion): employer to issue a wage slip (Form V, paper or
//   electronic) on or before payment of wages. Central rules apply to the
//   central sphere; states notify their own rules, so the page says
//   "कानून के तहत वेतन पर्ची देनी होती है" without form details for states.
// - Income-tax: Form 16 (TDS certificate on salary) under Rule 31 of the
//   Income-tax Rules 1962, due by 15 June after the financial year (FY
//   2025-26 -> 15 June 2026). Income-tax Act 2025 / Rules 2026 effective
//   1 April 2026 renumber it Form 130 for tax year 2026-27 onwards (Taxguru,
//   Free Press Journal, 5paisa; consistent with the site's
//   /service/form16-form26as.html guide).
// - Employer generates Form 16 from TRACES; employees see TDS in Form 26AS /
//   AIS on incometax.gov.in.
export const salarySlipRequestLetter: Letter = {
  slug: "salary-slip-request-letter",
  category: "job",
  emoji: "🧾",
  title: "Salary Slip / Form 16 Request Letter in Hindi 2026: वेतन पर्ची आवेदन",
  description: "कंपनी/HR से वेतन पर्ची (Salary Slip) या फॉर्म 16 मांगने का पत्र (हिंदी/English)। महीने चुनें, भरें, ईमेल/प्रिंट करें। फॉर्म 16 की 15 जून की तारीख भी जानें।",
  h1: "वेतन पर्ची (Salary Slip) / फॉर्म 16 मांगने का पत्र 2026",
  short: { hi: "वेतन पर्ची / फॉर्म 16 अनुरोध", en: "Salary slip / Form 16 request" },
  lead: "लोन, किराये का मकान, वीज़ा, नई नौकरी या ITR के लिए <strong>वेतन पर्ची (Salary Slip)</strong> और <strong>फॉर्म 16</strong> कंपनी के <strong>HR/अकाउंट्स विभाग</strong> से मांगे जाते हैं। 21 नवंबर 2025 से लागू <strong>वेतन संहिता</strong> के तहत नियोक्ता को कर्मचारियों को वेतन पर्ची देनी होती है (कागज़ या इलेक्ट्रॉनिक)। जिनका TDS कटता है, उन्हें फॉर्म 16 वित्त वर्ष के बाद <strong>15 जून</strong> तक मिलना चाहिए; टैक्स वर्ष 2026-27 से इसका नया नाम <strong>फॉर्म 130</strong> है।",
  facts: [
    ["किसे दें", "HR / अकाउंट्स / पेरोल विभाग"],
    ["वेतन पर्ची", "वेतन संहिता के तहत नियोक्ता देता है"],
    ["फॉर्म 16 (2025-26)", "15 जून 2026 तक"],
    ["2026-27 से", "फॉर्म 16 का नाम फॉर्म 130"],
  ],
  to: "कंपनी के <strong>HR/पेरोल/अकाउंट्स विभाग</strong> को; छोटी फर्म में <strong>मालिक या प्रबंधक</strong> को। पूर्व कर्मचारी भी यही पत्र भेज सकते हैं।",
  when: [
    "बैंक लोन, क्रेडिट कार्ड या किराये के लिए पिछले 3-6 महीने की वेतन पर्ची चाहिए",
    "ITR भरने के लिए फॉर्म 16 नहीं मिला",
    "नई नौकरी या वीज़ा के लिए वेतन का सबूत चाहिए",
    "नौकरी छोड़ने के बाद पुरानी कंपनी से वेतन पर्ची/फॉर्म 16 लेनी है",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (नाम/पद)", en: "To (name/designation)" }, required: true, placeholder: { hi: "जैसे: HR मैनेजर / अकाउंट्स विभाग", en: "e.g. HR Manager / Accounts Department" } },
    { key: "company", label: { hi: "कंपनी का नाम और पता", en: "Company name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "designation", label: { hi: "पद और कर्मचारी ID", en: "Designation and employee ID" }, required: true },
    { key: "status", label: { hi: "आप अभी", en: "You are" }, type: "select", options: [
      { hi: "कार्यरत हूं", en: "currently working" },
      { hi: "पूर्व कर्मचारी हूं", en: "a former employee" },
    ] },
    { key: "doc", label: { hi: "क्या चाहिए", en: "Documents needed" }, type: "select", options: [
      { hi: "वेतन पर्ची (सैलरी स्लिप)", en: "salary slips" },
      { hi: "फॉर्म 16", en: "Form 16" },
      { hi: "वेतन पर्ची और फॉर्म 16", en: "salary slips and Form 16" },
      { hi: "वेतन प्रमाण पत्र (Salary Certificate)", en: "a salary certificate" },
    ] },
    { key: "period", label: { hi: "किस अवधि की", en: "For which period" }, required: true, placeholder: { hi: "जैसे: अप्रैल 2026 से सितंबर 2026 / वित्त वर्ष 2025-26", en: "e.g. April 2026 to September 2026 / FY 2025-26" } },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, type: "select", options: [
      { hi: "बैंक लोन के आवेदन", en: "a bank loan application" },
      { hi: "आयकर रिटर्न (ITR) भरने", en: "filing my income tax return" },
      { hi: "नई नौकरी में दस्तावेज़ जमा करने", en: "submitting documents to a new employer" },
      { hi: "वीज़ा/किराये के आवेदन", en: "a visa/rental application" },
      { hi: "अपने रिकॉर्ड", en: "my personal records" },
    ] },
    { key: "pan", label: { hi: "PAN (सिर्फ फॉर्म 16 के लिए, चाहें तो)", en: "PAN (for Form 16 only, optional)" }, hint: { hi: "बैंक खाता नंबर, PIN या OTP कभी न लिखें", en: "Never write bank account number, PIN or OTP" } },
    { key: "email", label: { hi: "ईमेल (जिस पर भेजें)", en: "Email (to send on)" }, required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{company}}

विषय: {{doc}} उपलब्ध कराने हेतु अनुरोध

महोदय/महोदया,

मैं, {{name}}, {{designation}}, आपकी कंपनी में {{status}}।

मुझे {{purpose}} के लिए {{period}} के लिए {{doc}} की आवश्यकता है।
PAN: {{pan}}

अतः आपसे निवेदन है कि उक्त अवधि के लिए {{doc}} हस्ताक्षर/मुहर सहित या कंपनी के सिस्टम से बनी प्रति मेरी ईमेल {{email}} पर जल्द से जल्द भेजने की कृपा करें।

धन्यवाद।

भवदीय/भवदीया,
{{name}}
{{designation}}
मोबाइल: {{phone}}

दिनांक: {{date}}`,
    en: `To,
{{to}},
{{company}}

Subject: Request for {{doc}}

Dear Sir/Madam,

I, {{name}}, {{designation}}, am {{status}} of your company.

I need {{doc}} for the period {{period}} for {{purpose}}.
PAN: {{pan}}

I therefore request you kindly to send the {{doc}} for the above period, signed/stamped or system-generated, to my email {{email}} at the earliest.

Thanking you.

Yours sincerely,
{{name}}
{{designation}}
Mobile: {{phone}}

Date: {{date}}`,
  },
  submit: [
    "पत्र HR/अकाउंट्स को <strong>ईमेल</strong> से भेजें या हाथ से देकर रिसीविंग लें; कई कंपनियों में HR पोर्टल/ऐप से पर्ची खुद डाउनलोड होती है, पहले वहां देखें।",
    "बैंक/लोन के लिए पर्ची पर कंपनी की मुहर और हस्ताक्षर मांगें, अगर बैंक ऐसा कहे।",
    'फॉर्म 16 न मिले तो ITR से पहले <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">आयकर ई-फाइलिंग पोर्टल</a> पर फॉर्म 26AS/AIS में अपना TDS देखें।',
    "बार-बार मांगने पर भी वेतन पर्ची न मिले तो राज्य के श्रम विभाग में शिकायत करें; केंद्र क्षेत्र के संस्थानों के लिए <a href=\"https://samadhan.labour.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">SAMADHAN पोर्टल</a> है।",
  ],
  tips: [
    "अवधि (महीने/वित्त वर्ष) साफ लिखें; \"पिछली पर्चियां\" लिखने से अधूरी पर्चियां आती हैं।",
    "पत्र में बैंक खाता नंबर, कार्ड नंबर, PIN या OTP कभी न लिखें; HR को इनकी ज़रूरत नहीं।",
    "फॉर्म 16 मिलने पर उसका TDS फॉर्म 26AS/AIS से मिलाएं; अंतर हो तो HR को लिखें।",
    "हर महीने की पर्ची PDF में सुरक्षित रखें; नौकरी छोड़ने के बाद लेना मुश्किल हो जाता है।",
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल", note: "फॉर्म 26AS / AIS में TDS देखें" },
    { href: "https://samadhan.labour.gov.in/", title: "SAMADHAN पोर्टल (श्रम एवं रोज़गार मंत्रालय)", note: "केंद्र क्षेत्र के संस्थानों की शिकायत" },
  ],
  related: ["/service/form16-form26as.html", "/service/income-tax-return-filing.html", "/tools/income-tax-calculator.html"],
  faq: [
    { q: "सैलरी स्लिप किससे मांगें?", a: "कंपनी के HR, पेरोल या अकाउंट्स विभाग से। कई कंपनियों में HR पोर्टल से खुद डाउनलोड हो जाती है।" },
    { q: "क्या कंपनी को वेतन पर्ची देनी ज़रूरी है?", a: "हां, 21 नवंबर 2025 से लागू वेतन संहिता के तहत नियोक्ता को वेतन पर्ची देनी होती है; केंद्र के नियमों में यह कागज़ या इलेक्ट्रॉनिक दोनों तरह से दी जा सकती है।" },
    { q: "फॉर्म 16 कब तक मिलना चाहिए?", a: "वित्त वर्ष खत्म होने के बाद 15 जून तक। जैसे वित्त वर्ष 2025-26 का फॉर्म 16 15 जून 2026 तक।" },
    { q: "फॉर्म 130 क्या है?", a: "नए आयकर अधिनियम 2025 के तहत टैक्स वर्ष 2026-27 से फॉर्म 16 का नया नाम फॉर्म 130 है। 2025-26 तक के लिए फॉर्म 16 ही मिलेगा।" },
    { q: "फॉर्म 16 न मिले तो ITR कैसे भरें?", a: "वेतन पर्चियों और आयकर पोर्टल पर फॉर्म 26AS/AIS में दिख रहे TDS के आधार पर ITR भर सकते हैं। साथ ही HR से लिखित में फॉर्म 16 मांगते रहें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
