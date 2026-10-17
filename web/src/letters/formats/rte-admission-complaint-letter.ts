import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same as /service/school-admission-rte):
// - Right of Children to Free and Compulsory Education Act 2009
//   (indiacode.nic.in): s.12(1)(c) private unaided and specified category
//   schools to admit at least 25% of the strength of Class 1 / pre-school from
//   weaker sections and disadvantaged groups in the neighbourhood, free till
//   elementary education is complete; s.12(2) State reimburses the school;
//   s.13 no capitation fee / screening (penalties s.13(2)); s.31 NCPCR/SCPCR
//   monitor rights under the Act; s.32(1)-(3) a person with a grievance may
//   complain in writing to the local authority, which decides within three
//   months after hearing the parties; appeal lies to the SCPCR.
// - Ministry of Education (Lok Sabha reply): complaints of non-admission
//   under 12(1)(c) are referred to the State Government, the appropriate
//   government; SCPCR/NCPCR also redress RTE grievances.
// - Delhi DoE circular: grievances may be filed in person, by post, email or
//   online. Each state names its own RTE nodal officer/portal; the page tells
//   readers to address the district education officer and copy the SCPCR.
export const rteAdmissionComplaintLetter: Letter = {
  slug: "rte-admission-complaint-letter",
  category: "complaint",
  emoji: "📢",
  title: "RTE Admission Complaint Letter in Hindi 2026: 25% सीट पर दाखिला न देना",
  description: "RTE 25% सीट पर लॉटरी में नाम आने के बाद भी प्राइवेट स्कूल दाखिला न दे या पैसे मांगे, तो ज़िला शिक्षा अधिकारी को शिकायत पत्र (हिंदी/English)। SCPCR में अपील।",
  h1: "RTE में दाखिला न देने की शिकायत पत्र 2026 (धारा 12(1)(c), 32)",
  short: { hi: "RTE दाखिला न देने की शिकायत", en: "RTE admission denied complaint" },
  lead: "RTE अधिनियम की <strong>धारा 12(1)(c)</strong> के तहत प्राइवेट (गैर-सहायता प्राप्त) स्कूलों को प्रवेश कक्षा की कम से कम <strong>25% सीटें</strong> कमज़ोर और वंचित वर्ग के बच्चों को मुफ्त देनी होती हैं। राज्य के RTE पोर्टल की लॉटरी में सीट मिलने के बाद भी स्कूल दाखिला न दे, कागज़ के बहाने टाले या फीस मांगे, तो <strong>धारा 32</strong> के तहत लिखित शिकायत करें। स्थानीय प्राधिकारी को <strong>3 महीने</strong> में फैसला करना होता है; उससे असंतुष्ट हों तो <strong>राज्य बाल अधिकार संरक्षण आयोग (SCPCR)</strong> में अपील होती है।",
  facts: [
    ["कानून", "RTE अधिनियम 2009: धारा 12(1)(c), 13, 32"],
    ["किसे दें", "ज़िला शिक्षा अधिकारी / बेसिक शिक्षा अधिकारी (RTE नोडल)"],
    ["फैसले का समय", "शिकायत पर 3 महीने के अंदर (धारा 32(2))"],
    ["अपील", "राज्य बाल अधिकार संरक्षण आयोग (SCPCR)"],
  ],
  to: "अपने ज़िले के <strong>ज़िला शिक्षा अधिकारी (DEO) / ज़िला बेसिक शिक्षा अधिकारी (BSA)</strong> या राज्य ने जिस अधिकारी को RTE शिकायत के लिए नामित किया हो (कई जगह खंड शिक्षा अधिकारी)। कॉपी स्कूल के प्रधानाचार्य और <strong>SCPCR</strong> को भेजें।",
  when: [
    "RTE लॉटरी में बच्चे का नाम आया, पर स्कूल दाखिला नहीं दे रहा",
    "स्कूल 'सीट भर गई', 'दूरी ज़्यादा है' या कागज़ की कमी बताकर टाल रहा है",
    "स्कूल RTE सीट पर फीस, डोनेशन, किताब-ड्रेस के नाम पर पैसा मांग रहा है",
    "दाखिले के बाद बच्चे को अलग बिठाना या भेदभाव हो रहा है",
  ],
  fields: [
    { key: "office", label: { hi: "शिक्षा अधिकारी का पद और पता", en: "Education officer's designation and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: ज़िला बेसिक शिक्षा अधिकारी, लखनऊ", en: "e.g. District Basic Education Officer, Lucknow" } },
    { key: "parent", label: { hi: "अभिभावक का नाम", en: "Parent's name" }, required: true },
    { key: "child", label: { hi: "बच्चे का नाम", en: "Child's name" }, required: true },
    { key: "class", label: { hi: "कक्षा (प्रवेश स्तर)", en: "Class (entry level)" }, placeholder: { hi: "जैसे: कक्षा 1 / नर्सरी", en: "e.g. Class 1 / Nursery" } },
    { key: "school", label: { hi: "स्कूल का नाम और पता", en: "School name and address" }, type: "textarea", required: true },
    { key: "appno", label: { hi: "RTE आवेदन/आवंटन संख्या और लॉटरी की तारीख", en: "RTE application/allotment no. and lottery date" }, required: true },
    { key: "issue", label: { hi: "स्कूल ने क्या किया", en: "What the school did" }, type: "select", required: true, options: [
      { hi: "स्कूल ने आवंटन पत्र लेने के बाद भी दाखिला देने से मना कर दिया", en: "The school refused admission despite the allotment letter" },
      { hi: "स्कूल बार-बार कागज़ों की कमी बताकर दाखिला टाल रहा है", en: "The school keeps delaying admission citing missing documents" },
      { hi: "स्कूल RTE सीट पर फीस/डोनेशन/अन्य शुल्क मांग रहा है", en: "The school is demanding fee/donation/other charges on the RTE seat" },
      { hi: "स्कूल ने बच्चे का इंटरव्यू/टेस्ट लेकर दाखिला मना कर दिया", en: "The school refused admission after interviewing/testing the child" },
    ] },
    { key: "details", label: { hi: "पूरा विवरण (तारीख, किससे मिले, क्या कहा)", en: "Full details (dates, whom you met, what was said)" }, type: "textarea", required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: शिक्षा का अधिकार अधिनियम 2009 की धारा 12(1)(c) के अंतर्गत आवंटित सीट पर {{school}} द्वारा प्रवेश न देने की शिकायत (धारा 32 के अंतर्गत)।

महोदय/महोदया,

मैं, {{parent}}, निवासी {{address}}, अपने बच्चे {{child}} के प्रवेश के संबंध में यह शिकायत प्रस्तुत कर रहा/रही हूं।

मेरे बच्चे को RTE पोर्टल की लॉटरी में कमज़ोर/वंचित वर्ग की 25% सीट पर {{school}} में {{class}} के लिए सीट आवंटित हुई है। आवेदन/आवंटन संख्या एवं लॉटरी तिथि: {{appno}}।

{{issue}}।

विवरण:
{{details}}

यह शिक्षा का अधिकार अधिनियम 2009 की धारा 12(1)(c) और 13 का उल्लंघन है, जिससे मेरे बच्चे की पढ़ाई का साल खराब हो रहा है।

अतः आपसे निवेदन है कि:
1. धारा 32 के तहत इस शिकायत पर सुनवाई कर स्कूल को मेरे बच्चे को तुरंत प्रवेश देने का निर्देश दें;
2. RTE सीट पर किसी भी प्रकार की फीस/शुल्क न लेने का आदेश दें;
3. नियमों के उल्लंघन पर स्कूल के विरुद्ध नियमानुसार कार्रवाई करें और मुझे लिखित में सूचित करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{parent}}
मोबाइल: {{phone}}

प्रतिलिपि: 1. प्रधानाचार्य, {{school}}  2. राज्य बाल अधिकार संरक्षण आयोग

संलग्न:
1. RTE पोर्टल का आवंटन पत्र / लॉटरी परिणाम का प्रिंट
2. स्कूल में दिए आवेदन की रिसीविंग (यदि हो)
3. आय/श्रेणी प्रमाण पत्र, निवास प्रमाण और बच्चे के जन्म प्रमाण की कॉपी
4. फीस मांगने का कोई सबूत (पर्ची, मैसेज, रिकॉर्डिंग)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint under Section 32 against {{school}} for refusing admission on a seat allotted under Section 12(1)(c) of the Right of Children to Free and Compulsory Education Act, 2009.

Sir/Madam,

I, {{parent}}, resident of {{address}}, submit this complaint regarding the admission of my child {{child}}.

My child has been allotted a seat in {{class}} at {{school}} under the 25% weaker section/disadvantaged group quota through the RTE portal lottery. Application/allotment number and lottery date: {{appno}}.

{{issue}}.

Details:
{{details}}

This violates Sections 12(1)(c) and 13 of the Right of Children to Free and Compulsory Education Act, 2009, and my child is losing an academic year.

I therefore request you to:
1. Hear this complaint under Section 32 and direct the school to admit my child immediately;
2. Order that no fee or charge of any kind be taken on the RTE seat;
3. Take action against the school as per rules for the violation and inform me in writing.

Yours faithfully,

(Signature)
Name: {{parent}}
Mobile: {{phone}}

Copy to: 1. The Principal, {{school}}  2. State Commission for Protection of Child Rights

Enclosures:
1. RTE portal allotment letter / printout of lottery result
2. Receipt of application given at the school (if any)
3. Copies of income/category certificate, residence proof and child's birth proof
4. Any proof of fee demand (slip, message, recording)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "RTE पोर्टल का आवंटन पत्र / लॉटरी रिज़ल्ट का प्रिंट",
    "स्कूल को दिए कागज़ों/आवेदन की रिसीविंग, अगर मिली हो",
    "आय या वर्ग का प्रमाण पत्र, निवास प्रमाण, बच्चे का जन्म प्रमाण पत्र",
    "फीस मांगने या मना करने का सबूत: पर्ची, व्हाट्सऐप मैसेज, कॉल रिकॉर्डिंग",
  ],
  submit: [
    "पत्र की 3 कॉपी बनाएं: शिक्षा अधिकारी कार्यालय में जमा करें, एक पर रिसीविंग लें, एक स्कूल को दें।",
    "कई राज्यों के RTE पोर्टल पर ऑनलाइन शिकायत का विकल्प है; उसे भी भरें और शिकायत संख्या संभालें।",
    "राज्य का CM हेल्पलाइन/जन शिकायत पोर्टल हो तो वहां भी यही शिकायत दर्ज कर सकते हैं।",
    "3 महीने में फैसला न हो या फैसले से असंतुष्ट हों, तो <strong>राज्य बाल अधिकार संरक्षण आयोग (SCPCR)</strong> में अपील/शिकायत करें; ज़िला विधिक सेवा प्राधिकरण से मुफ्त कानूनी मदद ले सकते हैं।",
  ],
  tips: [
    "दाखिले की समय सीमा कम होती है; सीट मिलते ही स्कूल जाएं और मना करने पर उसी हफ्ते शिकायत करें।",
    "स्कूल से मना करने का कारण लिखित में मांगें।",
    "RTE सीट पर ट्यूशन फीस नहीं लगती; किताब/ड्रेस के नियम राज्य के हिसाब से अलग हैं, राज्य का नियम देखें।",
    "पोर्टल पर भरे पते और आय की जानकारी सही हो; गलत जानकारी पर सीट रद्द हो सकती है।",
  ],
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code (RTE अधिनियम 2009 का पाठ)" },
    { href: "https://ncpcr.gov.in/", title: "राष्ट्रीय बाल अधिकार संरक्षण आयोग (NCPCR)", note: "RTE शिकायत, राज्य आयोगों की जानकारी" },
  ],
  related: ["/service/school-admission-rte.html", "/students/", "/support/rti-guide.html"],
  faq: [
    { q: "RTE में नाम आने के बाद स्कूल दाखिला न दे तो क्या करें?", a: "आवंटन पत्र के साथ ज़िला शिक्षा अधिकारी/बेसिक शिक्षा अधिकारी को RTE धारा 32 के तहत लिखित शिकायत दें और रिसीविंग लें। कॉपी SCPCR को भी भेजें।" },
    { q: "RTE शिकायत पर कितने दिन में फैसला होता है?", a: "धारा 32(2) के अनुसार स्थानीय प्राधिकारी को दोनों पक्षों को सुनकर 3 महीने के अंदर शिकायत निपटानी होती है।" },
    { q: "RTE सीट पर स्कूल फीस मांग सकता है?", a: "नहीं। 25% सीट पर बच्चे को मुफ्त पढ़ाई मिलती है और खर्च राज्य सरकार स्कूल को देती है। कैपिटेशन फीस और स्क्रीनिंग टेस्ट धारा 13 में मना हैं।" },
    { q: "शिक्षा अधिकारी भी कार्रवाई न करें तो?", a: "राज्य बाल अधिकार संरक्षण आयोग (SCPCR) में अपील करें। आप RTI से अपनी शिकायत पर हुई कार्रवाई की जानकारी भी मांग सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
