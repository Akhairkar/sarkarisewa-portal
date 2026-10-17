import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same research as
// web/src/guides/doc/character-certificate.ts, 15 Oct 2026):
// - digitalpolice.gov.in (MHA Digital Police portal): state police citizen
//   portals provide verification / NOC services (character verification);
//   state list.
// - MP Police district sites (e.g. bhind.mppolice.gov.in "Character
//   Verification"): apply on MP Police citizen portal or at the police
//   station; fee Rs 100 where one police station is involved, waived for BPL
//   with Samagra ID.
// - saharanpur.nic.in "Police Verifications" (UP): police station, LIU and
//   crime record reports for current and permanent address; digitally signed
//   certificate issued online by the district police chief.
// - passportindia.gov.in: Police Clearance Certificate (PCC) for going abroad
//   is issued by Passport Seva, not by the police station.
// No national fee or time limit exists; states differ.
export const characterCertificatePoliceApplication: Letter = {
  slug: "character-certificate-police-application",
  category: "police",
  emoji: "🛡️",
  title: "Police Character Certificate Application Hindi 2026: चरित्र प्रमाण पत्र",
  description: "नौकरी, एडमिशन या ठेके के लिए पुलिस चरित्र प्रमाण पत्र / वेरिफिकेशन का आवेदन पत्र (हिंदी/English)। SP या थाने को कैसे दें, ऑनलाइन पोर्टल और ज़रूरी कागज़।",
  h1: "पुलिस चरित्र प्रमाण पत्र (कैरेक्टर वेरिफिकेशन) आवेदन पत्र 2026",
  short: { hi: "पुलिस चरित्र प्रमाण पत्र आवेदन", en: "Police character certificate" },
  lead: "नौकरी, संविदा, एडमिशन, लाइसेंस या ठेके के लिए मांगा जाने वाला <strong>पुलिस चरित्र प्रमाण पत्र (Character Certificate / Police Verification)</strong> ज़िले की पुलिस देती है। ज़्यादातर राज्यों में आवेदन राज्य पुलिस के <strong>सिटिजन पोर्टल पर ऑनलाइन</strong> होता है; कई जगह <strong>पुलिस अधीक्षक (SP)</strong> या थाने में लिखित आवेदन भी लिया जाता है। पुलिस आपके पते के थाने से रिकॉर्ड की जांच कराती है। विदेश जाने के लिए यह नहीं, पासपोर्ट सेवा का <strong>PCC</strong> लगता है।",
  facts: [
    ["किसे दें", "ज़िले के पुलिस अधीक्षक (SP) / वरिष्ठ पुलिस अधीक्षक या पुलिस आयुक्त कार्यालय; राज्य पुलिस का पोर्टल"],
    ["ऑनलाइन", "ज़्यादातर राज्यों के पुलिस सिटिजन पोर्टल पर 'Character Verification' सेवा"],
    ["फीस", "राज्य के हिसाब से अलग (जैसे मध्य प्रदेश ₹100, BPL को छूट); दफ्तर/पोर्टल से पूछें"],
    ["विदेश के लिए", "पासपोर्ट सेवा से पुलिस क्लीयरेंस सर्टिफिकेट (PCC)"],
  ],
  to: "जिस ज़िले में आप रहते हैं, वहां के <strong>पुलिस अधीक्षक (SP) / वरिष्ठ पुलिस अधीक्षक</strong> को, या कमिश्नरेट वाले शहरों में <strong>पुलिस आयुक्त / DCP</strong> कार्यालय को। कुछ राज्यों में आवेदन सीधे थाने में लिया जाता है।",
  when: [
    "सरकारी/निजी नौकरी या संविदा पर जॉइन करने से पहले विभाग ने मांगा",
    "सुरक्षा गार्ड, ड्राइवर, घरेलू सहायक जैसे काम के लिए",
    "ठेका, लाइसेंस, हथियार लाइसेंस या किसी संस्था में रजिस्ट्रेशन के लिए",
    "कॉलेज/हॉस्टल में एडमिशन के लिए",
  ],
  fields: [
    { key: "office", label: { hi: "किसे भेजना है (पद और ज़िला)", en: "Addressed to (post and district)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: पुलिस अधीक्षक, ज़िला सतना, मध्य प्रदेश", en: "e.g. Superintendent of Police, Satna, Madhya Pradesh" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि", en: "Date of birth" }, required: true, placeholder: { hi: "जैसे: 15/06/2000", en: "e.g. 15/06/2000" } },
    { key: "address", label: { hi: "वर्तमान पता", en: "Present address" }, type: "textarea", required: true },
    { key: "station", label: { hi: "आपके पते का थाना", en: "Police station of your address" }, required: true },
    { key: "permanent", label: { hi: "स्थायी पता (अलग हो तो)", en: "Permanent address (if different)" }, type: "textarea" },
    { key: "stay", label: { hi: "इस पते पर कब से रह रहे हैं", en: "Living at this address since" }, placeholder: { hi: "जैसे: 2015 से", en: "e.g. since 2015" } },
    { key: "purpose", label: { hi: "किस काम के लिए चाहिए", en: "Purpose" }, required: true, placeholder: { hi: "जैसे: स्वास्थ्य विभाग में संविदा नियुक्ति हेतु", en: "e.g. for contractual appointment in Health Department" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: पुलिस चरित्र प्रमाण पत्र (चरित्र सत्यापन) जारी करने हेतु आवेदन।

महोदय,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, जन्म तिथि {{dob}}, नीचे लिखे पते पर {{stay}} रह रहा/रही हूं:
{{address}}
थाना: {{station}}
स्थायी पता: {{permanent}}

मुझे {{purpose}} पुलिस चरित्र प्रमाण पत्र की आवश्यकता है। मेरे विरुद्ध किसी भी थाने में कोई आपराधिक मामला दर्ज या लंबित नहीं है, और न ही मुझे किसी न्यायालय द्वारा किसी अपराध में दोषी ठहराया गया है।

अतः निवेदन है कि मेरा चरित्र सत्यापन कराकर मुझे पुलिस चरित्र प्रमाण पत्र जारी करने की कृपा करें। मैं नियमानुसार शुल्क जमा करने को तैयार हूं। ऊपर दी गई जानकारी सत्य है; गलत पाए जाने पर मैं स्वयं ज़िम्मेदार रहूंगा/रहूंगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न:
1. पहचान पत्र (आधार / वोटर कार्ड) की स्व-प्रमाणित कॉपी
2. पते का प्रमाण (बिजली बिल / राशन कार्ड / किरायानामा)
3. पासपोर्ट साइज़ फोटो (2)
4. नियुक्ति/मांग पत्र की कॉपी (यदि हो)
5. शुल्क की रसीद (यदि लागू हो)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for issue of police character certificate (character verification).

Sir,

I, {{name}}, son/daughter/wife of {{father}}, date of birth {{dob}}, have been residing {{stay}} at the following address:
{{address}}
Police station: {{station}}
Permanent address: {{permanent}}

I require a police character certificate {{purpose}}. No criminal case is registered or pending against me at any police station, and I have not been convicted of any offence by any court.

I therefore request you to get my character verified and issue me a police character certificate. I am ready to pay the fee as per rules. The above information is true; if found false, I shall be personally responsible.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures:
1. Self-attested copy of identity proof (Aadhaar / Voter ID)
2. Address proof (electricity bill / ration card / rent agreement)
3. Passport size photographs (2)
4. Copy of appointment / requisition letter (if any)
5. Fee receipt (if applicable)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पहचान पत्र: आधार, वोटर कार्ड या पैन की स्व-प्रमाणित कॉपी",
    "वर्तमान पते का प्रमाण; किराये पर रहते हों तो किरायानामा",
    "2 पासपोर्ट साइज़ फोटो",
    "नौकरी देने वाले विभाग/कंपनी का पत्र (हो तो) और शुल्क की रसीद",
  ],
  submit: [
    "पहले अपने राज्य की पुलिस वेबसाइट/ऐप पर 'Character Certificate / Verification' सेवा देखें; ज़्यादातर राज्यों में आवेदन और शुल्क ऑनलाइन होता है।",
    "ऑफलाइन हो तो यह पत्र और कागज़ SP कार्यालय (या जहां बताया जाए, थाने) में जमा करें और रिसीविंग लें।",
    "थाने का पुलिसकर्मी पते और रिकॉर्ड की जांच कर सकता है; उस समय घर पर रहें और मूल कागज़ दिखाएं।",
    "बहुत देर हो तो पोर्टल पर आवेदन की स्थिति देखें, SP कार्यालय में लिखित अनुस्मारक दें, या राज्य के लोक शिकायत पोर्टल पर शिकायत करें।",
  ],
  tips: [
    "विदेश में नौकरी/वीज़ा के लिए यह नहीं, पासपोर्ट सेवा से PCC लें।",
    "पता वही लिखें जहां आप सच में रहते हैं; पुलिस उसी पते पर जांच करती है।",
    "कोई पुराना केस हो तो छिपाएं नहीं; गलत जानकारी पर आवेदन रद्द हो सकता है।",
    "जांच के नाम पर किसी को पैसे न दें; शुल्क सिर्फ पोर्टल या रसीद पर जमा करें।",
  ],
  official: [
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "अपने राज्य के पुलिस सिटिजन पोर्टल का लिंक" },
    { href: "https://www.passportindia.gov.in/", title: "पासपोर्ट सेवा (विदेश के लिए PCC)" },
  ],
  related: ["/service/character-certificate.html", "/service/police-clearance-certificate.html"],
  faq: [
    { q: "पुलिस चरित्र प्रमाण पत्र कैसे बनवाएं?", a: "अपने राज्य के पुलिस सिटिजन पोर्टल पर ऑनलाइन आवेदन करें, या SP कार्यालय/थाने में लिखित आवेदन दें। साथ में पहचान पत्र, पते का प्रमाण और फोटो लगाएं; पुलिस आपके पते के थाने से जांच कराकर प्रमाण पत्र देती है।" },
    { q: "चरित्र प्रमाण पत्र की फीस कितनी है?", a: "हर राज्य में अलग है। जैसे मध्य प्रदेश पुलिस में एक थाने वाले मामले में ₹100 और समग्र ID वाले BPL को छूट है। अपने राज्य का शुल्क पुलिस पोर्टल पर देखें।" },
    { q: "पुलिस चरित्र प्रमाण पत्र कितने दिन में बनता है?", a: "कोई राष्ट्रीय समय सीमा नहीं है। कई राज्य लोक सेवा गारंटी कानून में दिन तय करते हैं; पोर्टल पर आवेदन करते समय समय सीमा दिखती है।" },
    { q: "चरित्र प्रमाण पत्र और PCC में क्या अंतर है?", a: "चरित्र प्रमाण पत्र राज्य/ज़िला पुलिस देश के अंदर के काम (नौकरी, एडमिशन) के लिए देती है। PCC विदेश जाने, वीज़ा या विदेश में नौकरी के लिए पासपोर्ट सेवा से मिलता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
