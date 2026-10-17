import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - TRAI Telecom Consumers Complaint Redressal Regulations 2012 (as amended)
//   via TRAI FAQ "Redressal of Consumer Grievances" (trai.gov.in) and TRAI
//   consumer advertisement Ads_15_2024: complaint to the service provider's
//   Complaint Centre (toll-free 198) gets a unique docket number; if not
//   satisfied, appeal to the provider's Appellate Authority within 30 days
//   after expiry of the redressal time limit (later appeals may be
//   entertained); appeal disposed within 39 days; no fee; appeal can also
//   be lodged by dialling 198; Appellate Authority details on the
//   provider's website / Manual of Practice.
// - TRAI does not handle individual complaints; DoT grievances via
//   CPGRAMS (pgportal.gov.in).
// Exact redressal time limits for each complaint type are in the provider's
// Manual of Practice; page does not quote them.
export const telecomNetworkComplaintLetter: Letter = {
  slug: "telecom-network-complaint-letter",
  category: "complaint",
  emoji: "📶",
  title: "Mobile Network Complaint Letter in Hindi 2026: टेलीकॉम अपील पत्र",
  description: "मोबाइल/ब्रॉडबैंड नेटवर्क, गलत बिल या रिचार्ज की शिकायत 198 पर हल न हो तो कंपनी के Appellate Authority को अपील पत्र (हिंदी/English)। 30 दिन, 39 दिन का नियम।",
  h1: "मोबाइल नेटवर्क/ब्रॉडबैंड शिकायत पत्र 2026: Appellate Authority को अपील",
  short: { hi: "मोबाइल नेटवर्क शिकायत", en: "Telecom complaint / appeal" },
  lead: "मोबाइल नेटवर्क, कॉल ड्रॉप, इंटरनेट, ब्रॉडबैंड, गलत बिल, बिना पूछे चालू हुई सेवा या रिचार्ज की शिकायत पहले कंपनी के <strong>Complaint Centre (198, टोल-फ्री)</strong> पर करें और <strong>डॉकेट नंबर</strong> लें। हल न हो तो TRAI के नियमों के तहत कंपनी के <strong>Appellate Authority</strong> को <strong>30 दिन</strong> के अंदर अपील करें; अपील <strong>39 दिन</strong> में निपटानी होती है और कोई फीस नहीं लगती।",
  facts: [
    ["पहली शिकायत", "कंपनी का Complaint Centre: 198 (टोल-फ्री), डॉकेट नंबर लें"],
    ["अपील किसे", "उसी कंपनी का Appellate Authority (पता कंपनी की वेबसाइट पर)"],
    ["अपील का समय", "शिकायत निपटाने की समय सीमा खत्म होने के 30 दिन के अंदर"],
    ["फैसला", "39 दिन में; अपील की फीस नहीं"],
  ],
  to: "आपकी मोबाइल/ब्रॉडबैंड कंपनी के <strong>Appellate Authority (अपीलीय प्राधिकारी)</strong> को, आपके सर्किल/राज्य के लिए। उनका पता, ईमेल और फोन कंपनी की वेबसाइट के \"Appellate Authority\" या \"Manual of Practice\" पेज पर, और बिल पर भी लिखा होता है।",
  when: [
    "198 पर शिकायत के बाद भी नेटवर्क/इंटरनेट की समस्या ठीक नहीं हुई",
    "बिल में गलत चार्ज लगे और कंपनी वापस नहीं कर रही",
    "बिना मांगे कॉलर ट्यून/VAS जैसी सेवा चालू करके पैसे काटे",
    "ब्रॉडबैंड बंद कराने/सिक्योरिटी वापस करने में टालमटोल",
  ],
  fields: [
    { key: "operator", label: { hi: "कंपनी और सर्किल", en: "Operator and circle" }, required: true, placeholder: { hi: "जैसे: ABC टेलीकॉम, उत्तर प्रदेश (पूर्व) सर्किल", en: "e.g. ABC Telecom, UP (East) circle" } },
    { key: "name", label: { hi: "आपका नाम (कनेक्शन जिसके नाम पर है)", en: "Your name (connection holder)" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "number", label: { hi: "मोबाइल/लैंडलाइन/ब्रॉडबैंड नंबर या अकाउंट ID", en: "Mobile / landline / broadband no. or account ID" }, required: true },
    { key: "contact", label: { hi: "संपर्क के लिए दूसरा नंबर/ईमेल", en: "Alternate contact / email" } },
    { key: "connection", label: { hi: "कनेक्शन का प्रकार", en: "Connection type" }, type: "select", options: [
      { hi: "प्रीपेड मोबाइल", en: "prepaid mobile" },
      { hi: "पोस्टपेड मोबाइल", en: "postpaid mobile" },
      { hi: "ब्रॉडबैंड/फाइबर", en: "broadband/fibre" },
      { hi: "लैंडलाइन", en: "landline" },
    ] },
    { key: "issue", label: { hi: "समस्या", en: "Problem" }, type: "select", required: true, options: [
      { hi: "नेटवर्क/कॉल ड्रॉप/इंटरनेट स्पीड की लगातार समस्या", en: "persistent network / call drop / internet speed problem" },
      { hi: "बिल में गलत चार्ज", en: "wrong charges in the bill" },
      { hi: "बिना सहमति के सेवा चालू करके पैसे काटे गए", en: "service activated and charged without consent" },
      { hi: "कनेक्शन बंद करने या पैसा वापस करने में देरी", en: "delay in disconnection or refund" },
    ] },
    { key: "docket", label: { hi: "198 शिकायत का डॉकेट नंबर और तारीख", en: "Complaint docket no. and date" }, required: true, placeholder: { hi: "जैसे: 12345678, दिनांक 20/09/2026", en: "e.g. 12345678, dated 20/09/2026" } },
    { key: "details", label: { hi: "विवरण (कब से, कहां, क्या हुआ, कंपनी ने क्या कहा)", en: "Details (since when, where, what the company said)" }, type: "textarea", required: true },
    { key: "relief", label: { hi: "आप क्या चाहते हैं", en: "Relief sought" }, type: "textarea", required: true, placeholder: { hi: "नेटवर्क ठीक किया जाए; गलत कटे ₹___ वापस हों", en: "Fix the network; refund Rs ___ wrongly charged" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
अपीलीय प्राधिकारी (Appellate Authority),
{{operator}}

विषय: टेलीकॉम उपभोक्ता शिकायत निवारण विनियम के तहत अपील – नंबर/अकाउंट {{number}}, डॉकेट नंबर {{docket}}

महोदय/महोदया,

मैं, {{name}}, आपकी कंपनी का {{connection}} उपभोक्ता हूं (नंबर/अकाउंट: {{number}})।

समस्या: {{issue}}।

मैंने इस समस्या की शिकायत आपके Complaint Centre पर की थी, जिसका डॉकेट नंबर {{docket}} है, लेकिन तय समय में मेरी शिकायत का संतोषजनक समाधान नहीं हुआ।

विवरण:
{{details}}

अतः TRAI के दूरसंचार उपभोक्ता शिकायत निवारण विनियम के तहत यह अपील प्रस्तुत है। निवेदन है कि:
{{relief}}

कृपया अपील दर्ज कर इसकी अपील संख्या मुझे SMS/ईमेल से भेजें और तय समय में लिखित निर्णय दें।

भवदीय,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
नंबर/अकाउंट: {{number}}
संपर्क: {{contact}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: डॉकेट नंबर का SMS/स्क्रीनशॉट, बिल/रिचार्ज की कॉपी, स्पीड टेस्ट/नेटवर्क के स्क्रीनशॉट`,
    en: `To,
The Appellate Authority,
{{operator}}

Subject: Appeal under the Telecom Consumers Complaint Redressal Regulations – Number/Account {{number}}, Docket No. {{docket}}

Sir/Madam,

I, {{name}}, am a {{connection}} customer of your company (number/account: {{number}}).

Problem: {{issue}}.

I complained about this at your Complaint Centre under docket no. {{docket}}, but my complaint was not satisfactorily resolved within the prescribed time.

Details:
{{details}}

I therefore submit this appeal under TRAI's Telecom Consumers Complaint Redressal Regulations and request that:
{{relief}}

Kindly register this appeal, send me the appeal number by SMS/email, and give a written decision within the prescribed time.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Number/Account: {{number}}
Contact: {{contact}}

Place: {{place}}
Date: {{date}}

Enclosures: docket SMS/screenshot, copy of bill/recharge, speed test/network screenshots`,
  },
  attach: [
    "198 शिकायत के डॉकेट नंबर वाला SMS या स्क्रीनशॉट",
    "बिल या रिचार्ज की रसीद (गलत चार्ज दिखे)",
    "नेटवर्क न होने/कम स्पीड के स्क्रीनशॉट (तारीख-समय के साथ)",
  ],
  submit: [
    "पहले <strong>198</strong> (टोल-फ्री) या कंपनी के ऐप पर शिकायत करें और <strong>डॉकेट नंबर</strong> लें।",
    "तय समय में हल न हो या हल से संतुष्ट न हों, तो यह अपील कंपनी के Appellate Authority के ईमेल/पते पर भेजें, या कंपनी की वेबसाइट के अपील फॉर्म में भरें। TRAI के अनुसार अपील 198 पर कॉल करके भी दर्ज हो सकती है।",
    "अपील संख्या ज़रूर लें; Appellate Authority को 39 दिन में फैसला देना होता है।",
    "फिर भी हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर दूरसंचार विभाग (DoT) के तहत शिकायत करें, या बिल/रिफंड के विवाद में उपभोक्ता हेल्पलाइन 1915 और उपभोक्ता आयोग का रास्ता अपनाएं।",
  ],
  tips: [
    "बिना डॉकेट नंबर के अपील कमज़ोर रहती है; हर शिकायत का नंबर लिखकर रखें।",
    "TRAI व्यक्तिगत शिकायतें नहीं निपटाता; पहले कंपनी और उसके Appellate Authority के पास जाएं।",
    "नेटवर्क की समस्या में जगह (गांव/मोहल्ला, पिन कोड) और समय साफ लिखें।",
    "बार-बार की समस्या से तंग हों तो नंबर बदले बिना दूसरी कंपनी में जाने के लिए पोर्टेबिलिटी (MNP) का विकल्प भी है।",
  ],
  official: [
    { href: "https://www.trai.gov.in/", title: "TRAI", note: "उपभोक्ता शिकायत निवारण नियम और FAQ" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS", note: "दूरसंचार विभाग के खिलाफ शिकायत" },
  ],
  related: ["/service/mobile-number-portability.html", "/service/telecom-sanchar-saathi-tafcop.html"],
  faq: [
    { q: "मोबाइल नेटवर्क की शिकायत कहां करें?", a: "पहले अपनी कंपनी के Complaint Centre पर 198 (टोल-फ्री) या ऐप से, और डॉकेट नंबर लें। हल न हो तो कंपनी के Appellate Authority को अपील करें।" },
    { q: "Appellate Authority को अपील कब तक कर सकते हैं?", a: "शिकायत निपटाने की तय समय सीमा खत्म होने के 30 दिन के अंदर। उचित कारण हो तो बाद में भी अपील ली जा सकती है।" },
    { q: "अपील पर फैसला कितने दिन में आता है?", a: "TRAI के नियमों के अनुसार 39 दिन में। अपील की कोई फीस नहीं है।" },
    { q: "क्या TRAI में सीधे शिकायत कर सकते हैं?", a: "TRAI व्यक्तिगत शिकायतों का निपटारा नहीं करता। कंपनी और उसके Appellate Authority के बाद CPGRAMS पर DoT के पास शिकायत कर सकते हैं।" },
    { q: "Appellate Authority का पता कहां मिलेगा?", a: "कंपनी की वेबसाइट के \"Appellate Authority\" या \"Manual of Practice\" पेज पर, और कई बार बिल पर भी।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
