import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI press release "Periodic Updation of KYC details of customers"
//   (5 Jan 2023, rbi.org.in prid=54998): where only the address has changed,
//   the customer can give the new/updated address through non-face-to-face
//   channels (registered email, mobile, ATM, digital channels, letter) and the
//   bank verifies the declared address within two months.
// - RBI Master Direction on KYC 2016 (as amended), OVD definition: where the
//   OVD does not show the current address, documents such as a utility bill
//   not older than two months, property/municipal tax receipt, pension payment
//   order, or employer's accommodation allotment letter are deemed OVDs for
//   address, and an OVD with the current address is to be given within three
//   months.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   cms.rbi.org.in, 14448, after complaining to the bank first.
export const bankAddressChangeApplication: Letter = {
  slug: "bank-address-change-application",
  category: "bank",
  emoji: "🏠",
  title: "Bank Address Change Application in Hindi 2026: बैंक में पता बदलने का आवेदन",
  description: "बैंक खाते में पता बदलने का तैयार आवेदन पत्र (हिंदी/English)। RBI नियम: नया पता स्व-घोषणा से दें, बैंक 2 महीने में जांचे। कौन से कागज़ लगें, कैसे जमा करें।",
  h1: "बैंक खाते में पता बदलने का आवेदन पत्र 2026",
  short: { hi: "बैंक में पता बदलने का आवेदन", en: "Bank address change application" },
  lead: "बैंक खाते में पता बदलवाने के लिए <strong>होम ब्रांच के शाखा प्रबंधक</strong> को आवेदन दें। RBI के अनुसार अगर <strong>सिर्फ पता बदला</strong> है, तो आप नया पता स्व-घोषणा से बता सकते हैं (पत्र, पंजीकृत ईमेल/मोबाइल, नेट बैंकिंग आदि से) और बैंक <strong>2 महीने के अंदर</strong> उसकी जांच करता है। नए पते वाला आधार, वोटर ID या ड्राइविंग लाइसेंस साथ लगाने से काम जल्दी होता है।",
  facts: [
    ["किसे दें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["सिर्फ पता बदला", "स्व-घोषणा काफी; बैंक 2 महीने में जांच करता है"],
    ["पते का प्रमाण", "नए पते वाला आधार, वोटर ID, पासपोर्ट, ड्राइविंग लाइसेंस आदि"],
    ["शिकायत", "30 दिन में हल न हो तो RBI लोकपाल: cms.rbi.org.in"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। कई बैंक यही अनुरोध नेट बैंकिंग, मोबाइल ऐप या आधार-आधारित e-KYC से भी लेते हैं।",
  when: [
    "किराये का मकान बदला या दूसरे शहर में रहने लगे",
    "शादी के बाद ससुराल का पता दर्ज करवाना है",
    "बैंक के पत्र, चेकबुक या कार्ड पुराने पते पर जा रहे हैं",
    "आधार में पता अपडेट हो गया है और बैंक में भी वही चाहिए",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "oldaddress", label: { hi: "पुराना पता (बैंक में दर्ज)", en: "Old address (in bank records)" }, type: "textarea", required: true },
    { key: "newaddress", label: { hi: "नया पता (पिन कोड सहित)", en: "New address (with PIN code)" }, type: "textarea", required: true },
    { key: "proof", label: { hi: "नए पते का प्रमाण", en: "Proof of new address" }, type: "select", required: true, options: [
      { hi: "आधार कार्ड (नए पते वाला)", en: "Aadhaar card (with new address)" },
      { hi: "वोटर ID कार्ड", en: "Voter ID card" },
      { hi: "ड्राइविंग लाइसेंस", en: "Driving licence" },
      { hi: "पासपोर्ट", en: "Passport" },
      { hi: "बिजली/पानी/गैस बिल (2 महीने से पुराना नहीं) – मान्य पता प्रमाण 3 महीने में दूंगा/दूंगी", en: "Utility bill (not older than 2 months) – will give a valid address proof within 3 months" },
    ] },
    { key: "phone", label: { hi: "बैंक में दर्ज मोबाइल नंबर", en: "Registered mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: बचत खाते में पता बदलने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। मेरा निवास का पता बदल गया है। कृपया बैंक के रिकॉर्ड में मेरा पता इस प्रकार बदल दें:

पुराना पता:
{{oldaddress}}

नया पता:
{{newaddress}}

नए पते के प्रमाण के रूप में मैं {{proof}} की स्व-प्रमाणित प्रति संलग्न कर रहा/रही हूं। मैं घोषणा करता/करती हूं कि मेरी KYC की बाकी जानकारी में कोई बदलाव नहीं है और ऊपर दिया गया नया पता सही है।

कृपया पता बदलने के बाद इसकी सूचना मेरे पंजीकृत मोबाइल नंबर पर भेजें। आगे से सभी पत्र, चेकबुक और कार्ड नए पते पर भेजे जाएं।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: {{proof}} की स्व-प्रमाणित प्रति, पासबुक के पहले पेज की कॉपी`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Application for change of address in savings account

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. My residential address has changed. Kindly update my address in the bank records as follows:

Old address:
{{oldaddress}}

New address:
{{newaddress}}

As proof of the new address, I am enclosing a self-attested copy of my {{proof}}. I declare that there is no change in my other KYC details and that the new address given above is correct.

Kindly send an intimation of the change to my registered mobile number. All future letters, cheque books and cards may be sent to the new address.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Self-attested copy of {{proof}}, copy of passbook first page`,
  },
  attach: [
    "नए पते वाला एक मान्य दस्तावेज़ (आधार, वोटर ID, ड्राइविंग लाइसेंस, पासपोर्ट आदि) की स्व-प्रमाणित कॉपी; मूल दिखाने के लिए साथ ले जाएं",
    "नए पते वाला पहचान पत्र न हो तो 2 महीने से पुराना न हो ऐसा बिजली/पानी/गैस बिल या संपत्ति कर रसीद; RBI नियम के अनुसार बाद में 3 महीने में मान्य पता प्रमाण देना होता है",
    "पासबुक के पहले पेज की कॉपी",
  ],
  submit: [
    "पहले देखें कि आपका बैंक नेट बैंकिंग/ऐप या आधार e-KYC से पता बदलने देता है या नहीं; इससे ब्रांच जाना बच सकता है।",
    "ब्रांच में देना हो तो पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, हस्ताक्षर करें और कागज़ लगाएं।",
    "कॉपी पर बैंक की मुहर के साथ <strong>रिसीविंग</strong> लें।",
    "कुछ दिन बाद पासबुक प्रिंट करवाकर या नेट बैंकिंग में देखें कि नया पता दर्ज हो गया।",
    'काम न हो तो लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "पहले आधार में पता अपडेट करवा लें, तो बैंक, गैस, राशन सब जगह वही प्रमाण काम आएगा।",
    "पिन कोड ज़रूर लिखें; गलत पिन से चेकबुक/कार्ड लौट आते हैं।",
    "दूसरे शहर गए हैं और खाता भी वहीं चाहिए, तो पता बदलने के साथ ब्रांच ट्रांसफर का आवेदन भी दे सकते हैं।",
    "पत्र में कार्ड नंबर, PIN या OTP न लिखें।",
  ],
  notice: "कई बैंक पता बदलने के लिए अपना 'KYC/ग्राहक जानकारी परिवर्तन फॉर्म' मांगते हैं। ऐसा हो तो यही जानकारी उसमें भरें और यह पत्र साथ लगाएं।",
  official: [
    { href: "https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54998", title: "RBI: Periodic Updation of KYC (5 जनवरी 2023)", note: "सिर्फ पता बदला हो तो स्व-घोषणा" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar (UIDAI)", note: "आधार में पता अपडेट" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)" },
  ],
  related: ["/service/aadhaar-card.html", "/service/pm-jan-dhan-yojana.html"],
  faq: [
    { q: "बैंक में पता बदलने के लिए कौन से कागज़ चाहिए?", a: "नए पते वाला कोई मान्य दस्तावेज़, जैसे आधार, वोटर ID, ड्राइविंग लाइसेंस या पासपोर्ट। RBI के अनुसार सिर्फ पता बदला हो तो स्व-घोषणा से भी नया पता दिया जा सकता है, जिसकी बैंक 2 महीने में जांच करता है।" },
    { q: "क्या बैंक में पता ऑनलाइन बदल सकते हैं?", a: "कई बैंक नेट बैंकिंग, मोबाइल ऐप या आधार e-KYC से पता बदलने देते हैं। सुविधा बैंक के हिसाब से अलग है।" },
    { q: "नए पते का आधार नहीं है, क्या करें?", a: "RBI के KYC नियम में 2 महीने से पुराना न हो ऐसा बिजली/पानी/गैस बिल या संपत्ति कर रसीद अस्थायी पता प्रमाण के रूप में चलता है, पर 3 महीने के अंदर मान्य पता प्रमाण (जैसे नया आधार) देना होता है।" },
    { q: "पता बदलने में कितना समय लगता है?", a: "आम तौर पर कुछ कार्य दिवस। RBI के अनुसार स्व-घोषणा वाले नए पते की जांच बैंक 2 महीने के अंदर करता है।" },
    { q: "क्या पता बदलने से खाता नंबर बदलेगा?", a: "नहीं। सिर्फ पता बदलने से खाता नंबर और ब्रांच वही रहते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
