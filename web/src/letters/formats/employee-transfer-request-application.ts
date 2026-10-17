import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Transfers are not a legal right: government employees are transferred
//   under their department's/state's transfer policy (dates, online portals,
//   priority for spouse posting, serious illness, disability differ by state
//   and department), and private employees under company policy. Courts
//   generally treat transfer as an incident of service. The page therefore
//   gives no national rules, time limits or portals and tells readers to check
//   their own department's transfer policy / HRMS.
// - DoPT (dopt.gov.in) issues spouse-posting guidelines for central government
//   employees; mentioned only generally.
export const employeeTransferRequestApplication: Letter = {
  slug: "employee-transfer-request-application",
  category: "job",
  emoji: "🔁",
  title: "Transfer Request Application in Hindi 2026: तबादले (ट्रांसफर) के लिए आवेदन",
  description: "सरकारी/प्राइवेट कर्मचारी के लिए तबादले (transfer) का अनुरोध पत्र हिंदी/English में: बीमारी, पति-पत्नी की पोस्टिंग, माता-पिता की देखभाल। भरें और प्रिंट करें।",
  h1: "तबादले (Transfer) के लिए अनुरोध पत्र 2026: कर्मचारी के लिए",
  short: { hi: "तबादला (ट्रांसफर) अनुरोध पत्र", en: "Transfer request application" },
  lead: "तबादले का अनुरोध अपने <strong>विभागाध्यक्ष/नियंत्रक अधिकारी</strong> (सरकारी) या <strong>HR/मैनेजर</strong> (प्राइवेट) को <strong>उचित माध्यम (through proper channel)</strong> से दिया जाता है। तबादला कानूनी हक नहीं है; यह विभाग की <strong>तबादला नीति</strong> या कंपनी नीति से होता है। कई राज्य और विभाग तय समय पर ऑनलाइन (HRMS/मानव संपदा जैसे पोर्टल) आवेदन लेते हैं, इसलिए अपने विभाग का नियम पहले देखें। पत्र में ठोस कारण और उसका सबूत (मेडिकल, जीवनसाथी की नौकरी) ज़रूर दें।",
  facts: [
    ["किसे दें", "विभागाध्यक्ष/नियंत्रक अधिकारी (उचित माध्यम से) या HR"],
    ["आधार", "विभाग/राज्य की तबादला नीति या कंपनी नीति"],
    ["आम कारण", "गंभीर बीमारी, जीवनसाथी की पोस्टिंग, दिव्यांगता, माता-पिता की देखभाल"],
    ["ऑनलाइन", "कई विभागों में तबादला पोर्टल/HRMS से; अपने दफ्तर से पूछें"],
  ],
  to: "सरकारी कर्मचारी: तबादला करने वाले सक्षम अधिकारी (जैसे निदेशक, ज़िला अधिकारी, विभागाध्यक्ष) को, अपने <strong>कार्यालय प्रमुख के माध्यम से</strong>। प्राइवेट कर्मचारी: <strong>HR मैनेजर</strong> को, कॉपी रिपोर्टिंग मैनेजर को।",
  when: [
    "खुद, जीवनसाथी, बच्चे या माता-पिता की गंभीर बीमारी के कारण घर के पास पोस्टिंग चाहिए",
    "पति-पत्नी दोनों नौकरी में हैं और अलग-अलग जगह तैनात हैं",
    "किसी जगह पर तय कार्यकाल पूरा हो चुका है",
    "दिव्यांगता या बच्चों की पढ़ाई जैसे ठोस पारिवारिक कारण",
  ],
  fields: [
    { key: "authority", label: { hi: "सक्षम अधिकारी का पद और कार्यालय", en: "Competent authority's designation and office" }, type: "textarea", required: true, placeholder: { hi: "जैसे: ज़िला बेसिक शिक्षा अधिकारी, सीतापुर / HR मैनेजर, ABC लिमिटेड", en: "e.g. District Basic Education Officer, Sitapur / HR Manager, ABC Ltd" } },
    { key: "channel", label: { hi: "माध्यम (कार्यालय प्रमुख) – सरकारी के लिए", en: "Through (head of office) – for government staff" }, placeholder: { hi: "जैसे: प्रधानाध्यापक, प्राथमिक विद्यालय रामपुर", en: "e.g. Headmaster, Primary School Rampur" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "post", label: { hi: "आपका पद और कर्मचारी ID", en: "Your post and employee ID" }, required: true },
    { key: "current", label: { hi: "अभी की तैनाती की जगह", en: "Current place of posting" }, required: true },
    { key: "since", label: { hi: "यहां कब से तैनात हैं", en: "Posted here since" }, type: "date" },
    { key: "wanted", label: { hi: "कहां तबादला चाहिए (1-3 विकल्प)", en: "Where you want transfer (1-3 options)" }, required: true, placeholder: { hi: "जैसे: 1. लखनऊ 2. बाराबंकी", en: "e.g. 1. Lucknow 2. Barabanki" } },
    { key: "ground", label: { hi: "मुख्य आधार", en: "Main ground" }, type: "select", options: [
      { hi: "परिवार के सदस्य की गंभीर बीमारी", en: "serious illness of a family member" },
      { hi: "पति/पत्नी की एक ही स्थान पर तैनाती", en: "spouse posting at the same station" },
      { hi: "स्वयं का स्वास्थ्य/दिव्यांगता", en: "own health/disability" },
      { hi: "वृद्ध माता-पिता की देखभाल", en: "care of elderly parents" },
      { hi: "वर्तमान स्थान पर कार्यकाल पूरा होना", en: "completion of tenure at present station" },
    ] },
    { key: "reason", label: { hi: "कारण का पूरा ब्योरा", en: "Details of the reason" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मेरी मां को कैंसर है, इलाज लखनऊ के अस्पताल में चल रहा है; घर पर देखभाल करने वाला कोई और नहीं", en: "e.g. my mother has cancer and is being treated in Lucknow; there is no one else at home to care for her" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{authority}}

द्वारा: {{channel}}

विषय: {{ground}} के आधार पर तबादले (स्थानांतरण) हेतु अनुरोध

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, {{post}}, वर्तमान में {{current}} में दिनांक {{since}} से कार्यरत हूं।

मैं निम्नलिखित कारण से तबादले का अनुरोध कर रहा/रही हूं:

{{reason}}

उपरोक्त परिस्थिति को देखते हुए आपसे विनम्र अनुरोध है कि विभाग की तबादला नीति के अनुसार मेरा स्थानांतरण निम्नलिखित में से किसी स्थान पर करने की कृपा करें:
{{wanted}}

मैं आश्वस्त करता/करती हूं कि नई जगह पर भी पूरी निष्ठा से कार्य करूंगा/करूंगी। संबंधित प्रमाण पत्र संलग्न हैं।

भवदीय/भवदीया,

(हस्ताक्षर)
{{name}}
{{post}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न: कारण से संबंधित प्रमाण पत्रों की प्रतियां (मेडिकल/जीवनसाथी का सेवा प्रमाण पत्र आदि)`,
    en: `To,
{{authority}}

Through: {{channel}}

Subject: Request for transfer on the ground of {{ground}}

Sir/Madam,

I, {{name}}, {{post}}, am presently posted at {{current}} since {{since}}.

I request a transfer for the following reason:

{{reason}}

In view of the above circumstances, I humbly request you to kindly transfer me, as per the department's transfer policy, to any of the following places:
{{wanted}}

I assure you that I will continue to work with full dedication at the new place. Supporting documents are enclosed.

Yours faithfully,

(Signature)
{{name}}
{{post}}
Mobile: {{phone}}

Date: {{date}}

Enclosures: Copies of documents supporting the reason (medical/spouse's service certificate etc.)`,
  },
  attach: [
    "बीमारी के आधार पर: सरकारी/मान्य अस्पताल का मेडिकल प्रमाण पत्र और इलाज के कागज़",
    "जीवनसाथी के आधार पर: जीवनसाथी का सेवा/तैनाती प्रमाण पत्र और विवाह का प्रमाण",
    "दिव्यांगता के आधार पर: दिव्यांगता प्रमाण पत्र/UDID कार्ड की कॉपी",
  ],
  submit: [
    "पहले अपने विभाग की तबादला नीति/आदेश देखें: आवेदन की तारीखें, ऑनलाइन पोर्टल और प्राथमिकता वाले आधार।",
    "सरकारी कर्मचारी आवेदन अपने कार्यालय प्रमुख को दें, ताकि वे अपनी टिप्पणी के साथ आगे भेजें (उचित माध्यम)। सीधे ऊपर भेजना हो तो एक अग्रिम प्रति (advance copy) भेज सकते हैं।",
    "ऑनलाइन तबादला व्यवस्था हो तो वहीं आवेदन करें और यह पत्र व सबूत अपलोड करें।",
    "प्राइवेट कंपनी में HR को ईमेल करें और रिपोर्टिंग मैनेजर को CC करें।",
    "आवेदन की रिसीविंग/पावती संभालें और ज़रूरत हो तो कुछ समय बाद लिखित रिमाइंडर दें।",
  ],
  tips: [
    "कारण सच्चा और ठोस लिखें; झूठा मेडिकल या दस्तावेज़ देना अनुशासनात्मक कार्रवाई का कारण बन सकता है।",
    "एक से ज़्यादा विकल्प दें; सिर्फ एक जगह मांगने से मंज़ूरी मुश्किल हो सकती है।",
    "तबादले के लिए किसी को पैसा या सिफारिश न दें; यह गैरकानूनी है।",
    "आदेश आने तक मौजूदा जगह पर काम जारी रखें; बिना रिलीव हुए नई जगह न जाएं।",
  ],
  official: [
    { href: "https://dopt.gov.in/", title: "कार्मिक एवं प्रशिक्षण विभाग (DoPT)", note: "केंद्र सरकार के कर्मचारियों के सेवा नियम" },
  ],
  related: [],
  faq: [
    { q: "तबादले का आवेदन किसे दें?", a: "सरकारी कर्मचारी तबादला करने वाले सक्षम अधिकारी को अपने कार्यालय प्रमुख के माध्यम से दें। प्राइवेट कर्मचारी HR को दें।" },
    { q: "क्या तबादला मांगना कर्मचारी का अधिकार है?", a: "नहीं। तबादला विभाग की नीति और ज़रूरत पर निर्भर करता है। पर गंभीर बीमारी, जीवनसाथी की पोस्टिंग और दिव्यांगता जैसे आधारों पर कई तबादला नीतियां प्राथमिकता देती हैं।" },
    { q: "तबादले के लिए सबसे मज़बूत आधार क्या हैं?", a: "खुद या परिवार की गंभीर बीमारी (मेडिकल सबूत के साथ), पति-पत्नी दोनों का नौकरी में होना, दिव्यांगता, और किसी जगह पर तय कार्यकाल पूरा होना।" },
    { q: "ऑनलाइन तबादला आवेदन कहां होता है?", a: "यह राज्य और विभाग पर निर्भर है। कई राज्यों के शिक्षा, स्वास्थ्य और पुलिस विभागों के अपने ट्रांसफर पोर्टल हैं। अपने कार्यालय से या विभाग की तबादला नीति से पता करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
