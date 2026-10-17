import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - EPFiGMS (epfigms.gov.in; guides by Outlook Money, Paisabazaar,
//   PensionBazaar): "Register Grievance" for PF members, pensioners and
//   employers; unique registration number by SMS/email; "View Status" and
//   "Send Reminder"; target about 30 days. Toll-free 1800-118-005 and
//   epfigms.gov.in as listed in the repo EPFO guide (checked 15 Oct 2026).
// - EPF Scheme 1952 para 72(7) (reported widely, indianpaycalculator 2026):
//   a claim complete in all respects to be settled within 20 days.
// - CPGRAMS (pgportal.gov.in) as further escalation for central bodies.
// Office addresses differ by region; the page says to check the regional office
// on the EPFO website.
export const epfoGrievanceComplaintLetter: Letter = {
  slug: "epfo-grievance-complaint-letter",
  category: "complaint",
  emoji: "🏢",
  title: "EPFO Complaint Letter in Hindi 2026: PF शिकायत पत्र (EPFiGMS)",
  description: "PF क्लेम अटका, पैसा जमा नहीं, KYC/नाम गलत या ट्रांसफर रुका? EPFO क्षेत्रीय कार्यालय को शिकायत पत्र (हिंदी/English) और EPFiGMS पर ऑनलाइन शिकायत का तरीका।",
  h1: "EPFO / PF शिकायत पत्र 2026: क्षेत्रीय PF आयुक्त को",
  short: { hi: "PF (EPFO) शिकायत पत्र", en: "EPFO grievance letter" },
  lead: "PF से जुड़ी शिकायत (क्लेम अटका, कंपनी ने PF काटा पर जमा नहीं किया, नाम/जन्मतिथि गलत, ट्रांसफर या पेंशन रुकी) आप ऑनलाइन <strong>EPFiGMS पोर्टल (epfigms.gov.in)</strong> पर या लिखित में अपने <strong>क्षेत्रीय भविष्य निधि आयुक्त (RPFC)</strong> को दे सकते हैं। EPF योजना के अनुसार पूरा और सही क्लेम <strong>20 दिन</strong> में निपटाना होता है। EPFO का टोल-फ्री नंबर <strong>1800-118-005</strong> है। नीचे जानकारी भरें, पत्र तैयार हो जाएगा।",
  facts: [
    ["किसे दें", "क्षेत्रीय भविष्य निधि आयुक्त (जहां आपका PF खाता है)"],
    ["ऑनलाइन", '<a href="https://epfigms.gov.in/" target="_blank" rel="noopener nofollow">epfigms.gov.in</a>'],
    ["क्लेम निपटान", "पूरा क्लेम 20 दिन में (EPF योजना पैरा 72(7))"],
    ["टोल-फ्री", "1800-118-005"],
  ],
  to: "उस <strong>EPFO क्षेत्रीय कार्यालय</strong> के <strong>क्षेत्रीय भविष्य निधि आयुक्त (Regional PF Commissioner)</strong> को, जहां आपकी कंपनी का PF कोड पंजीकृत है। कार्यालय का पता आपकी PF पासबुक/UAN पोर्टल पर स्थापना (establishment) के नाम से पता चलता है।",
  when: [
    "PF निकासी (क्लेम), पेंशन या ट्रांसफर का क्लेम 20 दिन से ज़्यादा से अटका है या बिना साफ कारण के खारिज हुआ",
    "कंपनी ने वेतन से PF काटा पर पासबुक में जमा नहीं दिख रहा",
    "नाम, जन्मतिथि, पिता का नाम या KYC की गलती ठीक नहीं हो रही",
    "पुरानी कंपनी ने exit की तारीख नहीं डाली",
    "किसी सदस्य की मृत्यु के बाद परिवार का क्लेम/पेंशन रुका है",
  ],
  fields: [
    { key: "office", label: { hi: "EPFO क्षेत्रीय कार्यालय का पता", en: "EPFO regional office address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: क्षेत्रीय भविष्य निधि आयुक्त, EPFO क्षेत्रीय कार्यालय, कानपुर", en: "e.g. Regional PF Commissioner, EPFO Regional Office, Kanpur" } },
    { key: "name", label: { hi: "सदस्य का नाम", en: "Member's name" }, required: true },
    { key: "uan", label: { hi: "UAN नंबर", en: "UAN" }, required: true },
    { key: "pfno", label: { hi: "PF खाता संख्या (Member ID)", en: "PF account number (Member ID)" }, placeholder: { hi: "जैसे: UPKNP00123450000012345", en: "e.g. UPKNP00123450000012345" } },
    { key: "employer", label: { hi: "कंपनी/नियोक्ता का नाम", en: "Employer name" }, required: true },
    { key: "issue", label: { hi: "शिकायत का प्रकार", en: "Type of grievance" }, type: "select", options: [
      { hi: "PF निकासी/क्लेम का भुगतान न होना", en: "PF withdrawal/claim not paid" },
      { hi: "वेतन से PF कटा पर खाते में जमा नहीं हुआ", en: "PF deducted from salary but not deposited" },
      { hi: "PF ट्रांसफर नहीं हुआ", en: "PF transfer not done" },
      { hi: "नाम/जन्मतिथि/KYC में सुधार नहीं हुआ", en: "Name/date of birth/KYC correction not done" },
      { hi: "पेंशन (EPS) का भुगतान/क्लेम रुका है", en: "Pension (EPS) payment/claim held up" },
    ] },
    { key: "claimid", label: { hi: "क्लेम ID / पिछली शिकायत संख्या (अगर है)", en: "Claim ID / earlier grievance no. (if any)" } },
    { key: "details", label: { hi: "पूरा ब्योरा", en: "Full details" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 05/08/2026 को फॉर्म 19 का क्लेम डाला, अब तक भुगतान नहीं; स्टेटस में 'under process' दिख रहा है", en: "e.g. filed Form 19 claim on 05/08/2026, not yet paid; status shows 'under process'" } },
    { key: "address", label: { hi: "आपका पता और मोबाइल", en: "Your address and mobile" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{issue}} के संबंध में शिकायत – UAN {{uan}}

महोदय/महोदया,

मैं, {{name}}, कर्मचारी भविष्य निधि का सदस्य हूं। मेरा विवरण इस प्रकार है:
UAN: {{uan}}
PF खाता संख्या: {{pfno}}
नियोक्ता: {{employer}}
क्लेम ID / पिछली शिकायत संख्या: {{claimid}}

मेरी शिकायत: {{issue}}।

{{details}}

कर्मचारी भविष्य निधि योजना 1952 के अनुसार पूर्ण क्लेम 20 दिन के भीतर निपटाया जाना चाहिए। अतः आपसे अनुरोध है कि मेरी शिकायत की जांच कर शीघ्र समाधान करें, और यदि मेरे दस्तावेज़ में कोई कमी है तो लिखित में बताएं ताकि मैं उसे पूरा कर सकूं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता/मोबाइल: {{address}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. UAN पासबुक/क्लेम स्टेटस का प्रिंट
2. सैलरी स्लिप (जिसमें PF कटौती दिखे), यदि मामला जमा न होने का है
3. पहचान पत्र और बैंक पासबुक/कैंसिल चेक की कॉपी`,
    en: `To,
{{office}}

Subject: Grievance regarding {{issue}} – UAN {{uan}}

Sir/Madam,

I, {{name}}, am a member of the Employees' Provident Fund. My details are:
UAN: {{uan}}
PF account number: {{pfno}}
Employer: {{employer}}
Claim ID / earlier grievance no.: {{claimid}}

My grievance: {{issue}}.

{{details}}

Under the Employees' Provident Funds Scheme, 1952, a claim complete in all respects is to be settled within 20 days. I therefore request you to look into my grievance and resolve it at the earliest, and if any document is deficient, to inform me in writing so that I can complete it.

Yours faithfully,

(Signature)
Name: {{name}}
Address/Mobile: {{address}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Printout of UAN passbook/claim status
2. Salary slips showing PF deduction, if the grievance is about non-deposit
3. Copy of identity proof and bank passbook/cancelled cheque`,
  },
  attach: [
    "UAN पासबुक और क्लेम स्टेटस का प्रिंट/स्क्रीनशॉट",
    "PF कटौती वाली सैलरी स्लिप (अगर कंपनी ने जमा नहीं किया)",
    "आधार, बैंक पासबुक/कैंसिल चेक की कॉपी",
    "नाम/जन्मतिथि सुधार के लिए सही जानकारी वाला दस्तावेज़",
  ],
  submit: [
    "पहले <a href=\"https://unifiedportal-mem.epfindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">UAN पोर्टल</a> पर क्लेम स्टेटस और रिजेक्शन का कारण देखें।",
    "ऑनलाइन शिकायत: <a href=\"https://epfigms.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">epfigms.gov.in</a> पर \"Register Grievance\" चुनें, UAN डालें, यही ब्योरा लिखें और दस्तावेज़ लगाएं; मिली शिकायत संख्या संभालें।",
    "लिखित शिकायत: यह पत्र क्षेत्रीय PF कार्यालय में जमा करें (रिसीविंग लें) या स्पीड पोस्ट से भेजें। कई क्षेत्रीय कार्यालयों में शिकायत सुनवाई के लिए हेल्प डेस्क होता है।",
    "जवाब न आए तो EPFiGMS पर \"Send Reminder\" दें; फिर भी हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत कर सकते हैं।",
  ],
  tips: [
    "UAN और PF खाता संख्या सही लिखें; गलत नंबर से शिकायत गलत दफ्तर में जाती है।",
    "शिकायत पोर्टल पर एक ही मुद्दे की बार-बार नई शिकायत न डालें; पुरानी पर रिमाइंडर दें।",
    "PF निकलवाने के लिए किसी एजेंट को पैसे या UAN पासवर्ड/OTP न दें।",
    "कंपनी ने PF जमा नहीं किया तो सैलरी स्लिप सबसे अहम सबूत है, संभालकर रखें।",
  ],
  official: [
    { href: "https://epfigms.gov.in/", title: "EPFiGMS (EPFO शिकायत पोर्टल)" },
    { href: "https://unifiedportal-mem.epfindia.gov.in/", title: "UAN सदस्य पोर्टल", note: "क्लेम स्टेटस, पासबुक" },
    { href: "https://www.epfindia.gov.in/", title: "EPFO", note: "क्षेत्रीय कार्यालयों के पते; टोल-फ्री 1800-118-005" },
  ],
  related: ["/service/epfo.html", "/tools/epf-calculator.html"],
  faq: [
    { q: "PF की शिकायत ऑनलाइन कहां करें?", a: "EPFO के EPFiGMS पोर्टल (epfigms.gov.in) पर। UAN डालकर शिकायत दर्ज करें; शिकायत संख्या SMS/ईमेल पर आती है और उसी से स्टेटस देख सकते हैं।" },
    { q: "PF क्लेम कितने दिन में आना चाहिए?", a: "EPF योजना के अनुसार सभी तरह से पूरा क्लेम 20 दिन में निपटाना होता है। ज़्यादा देर हो तो EPFiGMS पर शिकायत करें।" },
    { q: "कंपनी ने PF काटा पर जमा नहीं किया, क्या करें?", a: "पहले HR से लिखित में पूछें, फिर सैलरी स्लिप के साथ EPFiGMS या क्षेत्रीय PF कार्यालय में शिकायत करें। EPFO नियोक्ता से वसूली की कार्रवाई कर सकता है।" },
    { q: "EPFO का हेल्पलाइन नंबर क्या है?", a: "EPFO का टोल-फ्री नंबर 1800-118-005 है।" },
    { q: "EPFiGMS पर शिकायत का हल न हो तो?", a: "पोर्टल पर रिमाइंडर भेजें और क्षेत्रीय कार्यालय में लिखित शिकायत दें। फिर भी हल न हो तो CPGRAMS (pgportal.gov.in) पर शिकायत कर सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
