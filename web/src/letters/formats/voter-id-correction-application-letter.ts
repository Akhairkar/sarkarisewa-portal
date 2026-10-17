import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - ECI Form 8 guidelines (voterportal.eci.gov.in/guidelines/Form-8_en.pdf):
//   one form for shifting of residence, correction of entries, replacement
//   EPIC (without correction) and marking as PwD; only the elector can apply
//   for own entry; on approval a new EPIC is issued and the old one returned
//   to the ERO; for lost EPIC a copy of FIR/police report is needed.
// - Applications go to the Electoral Registration Officer (ERO) of the
//   assembly constituency; BLO does field verification.
// - ECINET (unified ECI app/portal, launched 2025-26, absorbed Voter Helpline
//   app and Voters' Service Portal); National Voter Helpline 1950 /
//   1800-11-1950 (newsonair.gov.in Oct 2025; ECI releases).
// - Shifting to another constituency is now done in Form 8 (not Form 6).
export const voterIdCorrectionApplicationLetter: Letter = {
  slug: "voter-id-correction-application-letter",
  category: "document",
  emoji: "🗳️",
  title: "Voter ID Correction Application in Hindi 2026: वोटर ID सुधार आवेदन",
  description: "वोटर ID में नाम, उम्र, फोटो सुधार या पता बदलने के लिए Form 8 के साथ ERO को कवर लेटर (हिंदी/English)। ऑनलाइन ECINET, BLO और हेल्पलाइन 1950।",
  h1: "वोटर ID सुधार / पता बदलने का आवेदन पत्र 2026 (Form 8 के साथ)",
  short: { hi: "वोटर ID सुधार आवेदन", en: "Voter ID correction letter" },
  lead: "वोटर लिस्ट और वोटर ID (EPIC) में नाम, उम्र, लिंग, फोटो, रिश्तेदार का नाम सुधारने, <strong>पता बदलने</strong> (उसी या दूसरे विधानसभा क्षेत्र में), नया कार्ड लेने या दिव्यांग चिह्नित कराने के लिए एक ही <strong>Form 8</strong> भरा जाता है। आवेदन विधानसभा क्षेत्र के <strong>निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO)</strong> को जाता है और <strong>BLO</strong> जांच करता है। ऑनलाइन <strong>ECINET</strong> ऐप/वोटर पोर्टल से भी होता है; मदद के लिए हेल्पलाइन <strong>1950</strong>। यह पत्र Form 8 के साथ लगने वाला कवर लेटर है।",
  facts: [
    ["फॉर्म", "Form 8 (सुधार, पता बदलना, नया EPIC, PwD)"],
    ["किसे दें", "ERO (विधानसभा क्षेत्र), BLO के ज़रिए"],
    ["ऑनलाइन", "ECINET ऐप / voters.eci.gov.in"],
    ["हेल्पलाइन", "1950 (STD कोड के साथ) / 1800-11-1950"],
  ],
  to: "अपने विधानसभा क्षेत्र के <strong>निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO)</strong> को; आम तौर पर SDM/तहसील कार्यालय में। पता बदलकर दूसरे क्षेत्र में गए हों तो <strong>नए पते वाले क्षेत्र का ERO</strong>। फॉर्म अपने BLO को भी दे सकते हैं।",
  when: [
    "वोटर ID में नाम, उम्र/जन्म तिथि, लिंग या पिता/पति का नाम गलत है",
    "घर बदल लिया है, नए पते पर नाम ट्रांसफर कराना है",
    "फोटो धुंधली/गलत है या कार्ड खो गया/फट गया है, नया कार्ड चाहिए",
    "दिव्यांग मतदाता के रूप में चिह्नित कराना है",
  ],
  fields: [
    { key: "office", label: { hi: "ERO का पद और विधानसभा क्षेत्र", en: "ERO and assembly constituency" }, required: true, placeholder: { hi: "जैसे: निर्वाचक रजिस्ट्रीकरण अधिकारी, 174-लखनऊ मध्य विधानसभा क्षेत्र", en: "e.g. Electoral Registration Officer, 174-Lucknow Central AC" } },
    { key: "name", label: { hi: "आपका नाम (जैसा वोटर लिस्ट में है)", en: "Your name (as in electoral roll)" }, required: true },
    { key: "epic", label: { hi: "EPIC (वोटर ID) नंबर", en: "EPIC (voter ID) number" }, required: true, placeholder: { hi: "जैसे: ABC1234567", en: "e.g. ABC1234567" } },
    { key: "part", label: { hi: "भाग संख्या और क्रम संख्या (पता हो तो)", en: "Part no. and serial no. (if known)" } },
    { key: "type", label: { hi: "क्या करवाना है", en: "Request type" }, type: "select", required: true, options: [
      { hi: "प्रविष्टि में सुधार", en: "correction of entries" },
      { hi: "उसी विधानसभा क्षेत्र में पता बदलना", en: "shifting of residence within the same constituency" },
      { hi: "दूसरे विधानसभा क्षेत्र में पता बदलना", en: "shifting of residence to another constituency" },
      { hi: "बिना सुधार के नया (replacement) EPIC", en: "issue of replacement EPIC without correction" },
      { hi: "दिव्यांग (PwD) के रूप में चिह्नित करना", en: "marking as person with disability (PwD)" },
    ] },
    { key: "wrong", label: { hi: "अभी क्या दर्ज है", en: "Present entry" }, type: "textarea", placeholder: { hi: "जैसे: उम्र: 52 / पता: मकान 12, वार्ड 4", en: "e.g. Age: 52 / Address: House 12, Ward 4" } },
    { key: "right", label: { hi: "सही/नया क्या होना चाहिए", en: "Correct/new entry" }, type: "textarea", required: true, placeholder: { hi: "जैसे: जन्म तिथि: 15/08/1979 / नया पता: ...", en: "e.g. DOB: 15/08/1979 / new address: ..." } },
    { key: "proof", label: { hi: "सबूत के कागज़", en: "Supporting documents" }, placeholder: { hi: "जैसे: आधार कार्ड, बिजली बिल, जन्म प्रमाण पत्र", en: "e.g. Aadhaar, electricity bill, birth certificate" } },
    { key: "address", label: { hi: "वर्तमान पता", en: "Present address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: Form 8 के साथ मतदाता सूची/EPIC में {{type}} हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपके विधानसभा क्षेत्र का पंजीकृत मतदाता हूं। मेरा EPIC नंबर {{epic}} है (भाग/क्रम संख्या: {{part}})।

मुझे मतदाता सूची में {{type}} करवाना है। विवरण इस प्रकार है:
अभी दर्ज: {{wrong}}
सही/नया: {{right}}

इसके लिए भरा हुआ Form 8 और निम्न कागज़ों की स्व-प्रमाणित प्रतियां संलग्न हैं: {{proof}}।

अतः आपसे प्रार्थना है कि BLO से जांच कराकर मतदाता सूची में आवश्यक बदलाव करें और नया EPIC जारी करने की कृपा करें। नया कार्ड मिलने पर मैं पुराना कार्ड जमा कर दूंगा/दूंगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. भरा हुआ Form 8
2. पुराने वोटर ID की प्रति
3. सबूत के कागज़ (ऊपर लिखे अनुसार)
4. पासपोर्ट साइज़ फोटो (फोटो बदलवानी हो तो)
5. कार्ड खोया हो तो पुलिस रिपोर्ट/FIR की प्रति`,
    en: `To,
{{office}}

Subject: Application with Form 8 for {{type}} in the electoral roll/EPIC

Sir/Madam,

I, {{name}}, am a registered elector of your assembly constituency. My EPIC number is {{epic}} (part/serial no.: {{part}}).

I need {{type}} in the electoral roll. The details are as follows:
Present entry: {{wrong}}
Correct/new entry: {{right}}

The filled Form 8 and self-attested copies of the following documents are enclosed: {{proof}}.

I therefore request you kindly to get the details verified by the BLO, make the necessary change in the electoral roll and issue a new EPIC. I will surrender my old card on receiving the new one.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Filled Form 8
2. Copy of old voter ID
3. Supporting documents (as listed above)
4. Passport-size photograph (if photo is to be changed)
5. Copy of police report/FIR (if card is lost)`,
  },
  attach: [
    "भरा हुआ <strong>Form 8</strong> (ECI पोर्टल या BLO/ERO दफ्तर से)",
    "उम्र/जन्म तिथि सुधार: जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पासपोर्ट या आधार",
    "पता बदलना: नए पते का प्रमाण, जैसे बिजली/पानी/गैस बिल, बैंक पासबुक, रेंट एग्रीमेंट, आधार",
    "फोटो बदलनी हो तो हाल की पासपोर्ट साइज़ फोटो; कार्ड खोया हो तो पुलिस रिपोर्ट/FIR",
  ],
  submit: [
    "सबसे आसान: <strong>ECINET</strong> ऐप या <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> पर लॉगिन करके Form 8 ऑनलाइन भरें और कागज़ अपलोड करें; रेफरेंस नंबर संभालें।",
    "ऑफलाइन: Form 8 और यह पत्र अपने <strong>BLO</strong> को या ERO कार्यालय (आम तौर पर SDM/तहसील) में दें और रसीद लें।",
    "BLO घर पर जांच के लिए आ सकता है; मूल कागज़ दिखाएं।",
    "रेफरेंस नंबर से स्थिति देखें। अटके तो <strong>1950</strong> पर कॉल करें या ECINET/NGSP पर शिकायत करें; फिर ज़िला निर्वाचन अधिकारी (DEO) को लिखें।",
  ],
  tips: [
    "Form 8 सिर्फ अपनी प्रविष्टि के लिए है; परिवार के हर सदस्य का अलग फॉर्म भरें।",
    "दूसरे क्षेत्र में शिफ्ट होने के लिए नया Form 6 न भरें; Form 8 में 'shifting' चुनें, वरना दो जगह नाम हो जाएगा।",
    "चुनाव की घोषणा के बाद सूची में बदलाव रुक जाते हैं; सुधार पहले ही करा लें।",
    "OTP या आधार नंबर किसी अनजान कॉल पर न बताएं; BLO कभी OTP नहीं मांगता।",
  ],
  official: [
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 8 ऑनलाइन, स्थिति जांच" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग" },
    { href: "https://voterportal.eci.gov.in/guidelines/Form-8_en.pdf", title: "Form 8 के दिशा-निर्देश (PDF)" },
  ],
  related: ["/service/voter-id-card.html", "/service/e-voter-epic-download.html"],
  faq: [
    { q: "वोटर ID में सुधार के लिए कौन सा फॉर्म भरें?", a: "Form 8। इसी फॉर्म से नाम, उम्र, फोटो सुधार, पता बदलना, नया कार्ड और दिव्यांग चिह्नित कराना होता है।" },
    { q: "वोटर ID का पता कैसे बदलें?", a: "ECINET ऐप या voters.eci.gov.in पर Form 8 में 'shifting of residence' चुनें। दूसरे विधानसभा क्षेत्र में गए हों तब भी Form 8 ही भरें; आवेदन नए क्षेत्र के ERO के पास जाएगा।" },
    { q: "वोटर ID सुधार में कितने दिन लगते हैं?", a: "BLO की जांच और ERO के फैसले के बाद सूची में बदलाव होता है; समय इलाके और सीज़न पर निर्भर है। रेफरेंस नंबर से स्थिति देखते रहें।" },
    { q: "खोए वोटर ID की जगह नया कैसे लें?", a: "Form 8 में replacement EPIC चुनें और पुलिस रिपोर्ट/FIR की कॉपी लगाएं। पंजीकृत मोबाइल हो तो e-EPIC भी डाउनलोड कर सकते हैं।" },
    { q: "वोटर हेल्पलाइन नंबर क्या है?", a: "1950 (मोबाइल से STD कोड के साथ) या टोल-फ्री 1800-11-1950।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
