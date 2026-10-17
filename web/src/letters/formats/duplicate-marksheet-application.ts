import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - CBSE press release 25.06.2021 "DADS" (cbse.gov.in): Duplicate Academic
//   Documents System for duplicate marksheet, passing certificate and
//   migration certificate online at cbseit.in/cbse/web/dads/home.aspx;
//   digital or printed copy, printed copies sent by speed post from the
//   Regional Office; status tracking. Fee is tiered by years since passing
//   (reported in news, official circular not opened), so no amount given.
// - CBSE notice (2022, reported by Careers360/Khaleej Times): marksheets
//   and migration certificates issued in DigiLocker are digitally signed
//   and legally valid. Other boards: check the board's own notice.
// - Lost-document police report, affidavit and fee for state boards and
//   universities differ by board/university, so the page says to check
//   with the board/university.
export const duplicateMarksheetApplication: Letter = {
  slug: "duplicate-marksheet-application",
  category: "document",
  emoji: "📑",
  title: "Duplicate Marksheet Application in Hindi 2026: डुप्लीकेट अंकपत्र आवेदन",
  description: "खोई/फटी अंकतालिका के लिए डुप्लीकेट मार्कशीट का आवेदन पत्र (हिंदी/English), बोर्ड या विश्वविद्यालय को। CBSE DADS पोर्टल और DigiLocker की जानकारी भी।",
  h1: "डुप्लीकेट मार्कशीट (अंकपत्र) के लिए आवेदन पत्र 2026",
  short: { hi: "डुप्लीकेट मार्कशीट आवेदन", en: "Duplicate marksheet application" },
  lead: "अंकतालिका (मार्कशीट) या प्रमाण पत्र खो जाए, फट जाए या खराब हो जाए तो डुप्लीकेट उसी <strong>बोर्ड</strong> (क्षेत्रीय कार्यालय/सचिव) या <strong>विश्वविद्यालय</strong> (परीक्षा नियंत्रक/रजिस्ट्रार) से मिलता है जिसने परीक्षा ली थी। CBSE के छात्र <strong>DADS पोर्टल</strong> पर ऑनलाइन आवेदन करते हैं, और CBSE की <strong>DigiLocker</strong> वाली मार्कशीट भी मान्य है। राज्य बोर्ड और विश्वविद्यालय अक्सर पत्र, फीस, शपथ पत्र और खोने की पुलिस रिपोर्ट मांगते हैं; नियम हर जगह अलग है।",
  facts: [
    ["किसे दें", "बोर्ड का क्षेत्रीय कार्यालय / विश्वविद्यालय का परीक्षा विभाग"],
    ["CBSE", '<a href="https://cbseit.in/cbse/web/dads/home.aspx" target="_blank" rel="noopener nofollow">DADS पोर्टल</a> पर ऑनलाइन'],
    ["फीस", "परीक्षा के साल और बोर्ड/विश्वविद्यालय के हिसाब से अलग"],
    ["तुरंत कॉपी", '<a href="https://www.digilocker.gov.in/" target="_blank" rel="noopener nofollow">DigiLocker</a> (जहां बोर्ड जुड़ा हो)'],
  ],
  to: "स्कूल बोर्ड की मार्कशीट के लिए बोर्ड के <strong>सचिव/क्षेत्रीय अधिकारी</strong> को (कई राज्य बोर्ड में आवेदन स्कूल के प्रधानाचार्य के ज़रिए जाता है); कॉलेज/विश्वविद्यालय की मार्कशीट के लिए <strong>परीक्षा नियंत्रक (Controller of Examinations)</strong> या <strong>रजिस्ट्रार</strong> को।",
  when: [
    "मार्कशीट या पास होने का प्रमाण पत्र खो गया या चोरी हो गया",
    "पानी, आग या दीमक से मार्कशीट खराब/फट गई",
    "नौकरी या दाखिले के लिए मूल (original) मार्कशीट दिखानी है और पास नहीं है",
    "माइग्रेशन सर्टिफिकेट की भी डुप्लीकेट कॉपी चाहिए",
  ],
  fields: [
    { key: "office", label: { hi: "बोर्ड/विश्वविद्यालय का नाम और पता", en: "Board/university name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सचिव, माध्यमिक शिक्षा परिषद, क्षेत्रीय कार्यालय, प्रयागराज", en: "e.g. Secretary, Board of Secondary Education, Regional Office, Prayagraj" } },
    { key: "name", label: { hi: "आपका नाम (मार्कशीट जैसा)", en: "Your name (as on marksheet)" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's/mother's name" }, required: true },
    { key: "exam", label: { hi: "परीक्षा/कक्षा", en: "Examination/class" }, required: true, placeholder: { hi: "जैसे: हाई स्कूल (10वीं) / B.A. भाग-2", en: "e.g. High School (10th) / B.A. Part-2" } },
    { key: "year", label: { hi: "परीक्षा का वर्ष", en: "Year of exam" }, required: true, placeholder: { hi: "जैसे: 2019", en: "e.g. 2019" } },
    { key: "roll", label: { hi: "रोल नंबर", en: "Roll number" }, required: true },
    { key: "school", label: { hi: "स्कूल/कॉलेज का नाम", en: "School/college name" }, required: true },
    { key: "doc", label: { hi: "कौन सा दस्तावेज़ चाहिए", en: "Document needed" }, type: "select", options: [
      { hi: "अंकतालिका (मार्कशीट)", en: "Marksheet" },
      { hi: "अंकतालिका और उत्तीर्ण प्रमाण पत्र", en: "Marksheet and passing certificate" },
      { hi: "अंकतालिका, प्रमाण पत्र और माइग्रेशन सर्टिफिकेट", en: "Marksheet, certificate and migration certificate" },
    ] },
    { key: "reason", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", options: [
      { hi: "यात्रा के दौरान खो गई है, बहुत खोजने पर भी नहीं मिली", en: "was lost while travelling and could not be found despite searching" },
      { hi: "चोरी हो गई है", en: "has been stolen" },
      { hi: "पानी/आग से खराब होकर पढ़ने लायक नहीं रही (खराब प्रति संलग्न है)", en: "was damaged by water/fire and is no longer readable (damaged copy enclosed)" },
      { hi: "फट गई है (फटी प्रति संलग्न है)", en: "has been torn (torn copy enclosed)" },
    ] },
    { key: "report", label: { hi: "पुलिस रिपोर्ट/शपथ पत्र (चाहें तो)", en: "Police report / affidavit (optional)" }, placeholder: { hi: "जैसे: गुम होने की रिपोर्ट सं. 123/2026, थाना कोतवाली", en: "e.g. Lost report no. 123/2026, Kotwali police station" } },
    { key: "address", label: { hi: "पता (डाक से मंगाना हो)", en: "Address (for postal delivery)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: डुप्लीकेट {{doc}} जारी करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैंने वर्ष {{year}} में {{exam}} की परीक्षा {{school}} से उत्तीर्ण की थी। मेरा विवरण इस प्रकार है:
नाम: {{name}}
पिता/माता का नाम: {{father}}
रोल नंबर: {{roll}}
परीक्षा वर्ष: {{year}}

मेरी मूल {{doc}} {{reason}}।
पुलिस रिपोर्ट/शपथ पत्र: {{report}}

अतः आपसे प्रार्थना है कि मुझे डुप्लीकेट {{doc}} जारी करने की कृपा करें। निर्धारित शुल्क और आवश्यक दस्तावेज़ संलग्न हैं। कोई और दस्तावेज़ या शुल्क आवश्यक हो तो कृपया सूचित करें। दस्तावेज़ नीचे दिए पते पर डाक से भेजने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. मार्कशीट/प्रवेश पत्र की फोटोकॉपी (अगर हो) या खराब/फटी मूल प्रति
2. पहचान पत्र की स्व-प्रमाणित कॉपी
3. शुल्क की रसीद/ड्राफ्ट
4. गुम होने की पुलिस रिपोर्ट और शपथ पत्र (यदि मांगा गया हो)`,
    en: `To,
{{office}}

Subject: Application for issue of duplicate {{doc}}

Sir/Madam,

I passed the {{exam}} examination in the year {{year}} from {{school}}. My details are as follows:
Name: {{name}}
Father's/mother's name: {{father}}
Roll number: {{roll}}
Year of examination: {{year}}

My original {{doc}} {{reason}}.
Police report/affidavit: {{report}}

I therefore request you kindly to issue me a duplicate {{doc}}. The prescribed fee and the required documents are enclosed. Please let me know if any other document or fee is required. Kindly send the document by post to the address given below.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Photocopy of marksheet/admit card (if available) or the damaged/torn original
2. Self-attested copy of identity proof
3. Fee receipt/draft
4. Police lost report and affidavit (if required)`,
  },
  attach: [
    "पुरानी मार्कशीट/प्रवेश पत्र की फोटोकॉपी (रोल नंबर के सबूत के लिए); खराब हुई हो तो मूल खराब प्रति",
    "आधार या दूसरे पहचान पत्र की स्व-प्रमाणित कॉपी",
    "बोर्ड/विश्वविद्यालय की तय फीस (ऑनलाइन रसीद या ड्राफ्ट)",
    'खोने/चोरी होने पर थाने या राज्य पुलिस पोर्टल से गुम होने की रिपोर्ट, और <a href="/affidavit/lost-document.html">दस्तावेज़ खोने का शपथ पत्र</a> (अगर मांगा जाए)',
  ],
  submit: [
    '<strong>CBSE:</strong> <a href="https://cbseit.in/cbse/web/dads/home.aspx" target="_blank" rel="noopener nofollow">DADS पोर्टल</a> पर ऑनलाइन आवेदन करें, फीस भरें; डिजिटल या छपी कॉपी चुन सकते हैं, छपी कॉपी स्पीड पोस्ट से आती है। आवेदन नंबर से स्थिति देखें।',
    "<strong>राज्य बोर्ड:</strong> बोर्ड की वेबसाइट पर डुप्लीकेट का फॉर्म/ऑनलाइन सेवा देखें; कई बोर्ड में आवेदन अपने स्कूल के प्रधानाचार्य के ज़रिए क्षेत्रीय कार्यालय जाता है।",
    "<strong>विश्वविद्यालय:</strong> परीक्षा विभाग/रजिस्ट्रार ऑफिस में पत्र, फीस और कागज़ जमा करें या विश्वविद्यालय के ऑनलाइन पोर्टल से आवेदन करें; रिसीविंग लें।",
    'जल्दी ज़रूरत हो तो पहले <a href="https://www.digilocker.gov.in/" target="_blank" rel="noopener nofollow">DigiLocker</a> में देखें कि आपका बोर्ड/विश्वविद्यालय मार्कशीट जारी करता है या नहीं।',
    "तय समय में जवाब न मिले तो आवेदन संख्या के साथ बोर्ड/विश्वविद्यालय की हेल्पलाइन या शिकायत पोर्टल पर लिखें।",
  ],
  tips: [
    "रोल नंबर और परीक्षा वर्ष सही लिखें; इन्हीं से रिकॉर्ड मिलता है। रोल नंबर याद न हो तो स्कूल से पूछें।",
    "खराब/फटी मार्कशीट फेंकें नहीं; वही आवेदन के साथ जमा होती है।",
    "पुरानी मार्कशीट की फोटोकॉपी और स्कैन हमेशा सुरक्षित रखें; डुप्लीकेट जल्दी बनती है।",
    "डुप्लीकेट मिलने के बाद पुरानी मिल जाए तो उसका इस्तेमाल न करें; बोर्ड के नियम से डुप्लीकेट ही मान्य रहती है।",
  ],
  notice: "हर बोर्ड और विश्वविद्यालय का अपना फॉर्म, फीस और नियम है; कई जगह सिर्फ उनका तय फॉर्म या ऑनलाइन आवेदन ही लिया जाता है। आवेदन से पहले वेबसाइट या ऑफिस से पूछ लें; यह पत्र साथ में अनुरोध के तौर पर लगाएं।",
  official: [
    { href: "https://cbseit.in/cbse/web/dads/home.aspx", title: "CBSE DADS पोर्टल", note: "डुप्लीकेट मार्कशीट/प्रमाण पत्र/माइग्रेशन" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "बोर्ड/विश्वविद्यालय से जारी डिजिटल मार्कशीट" },
  ],
  related: ["/students/", "/digilocker/cbse-marksheet.html", "/digilocker/state-board-marksheet.html", "/affidavit/lost-document.html"],
  faq: [
    { q: "डुप्लीकेट मार्कशीट के लिए आवेदन किसे करें?", a: "जिस बोर्ड या विश्वविद्यालय ने परीक्षा ली थी, उसी को। बोर्ड में सचिव/क्षेत्रीय कार्यालय और विश्वविद्यालय में परीक्षा नियंत्रक या रजिस्ट्रार को।" },
    { q: "CBSE की डुप्लीकेट मार्कशीट कैसे बनती है?", a: "CBSE के DADS पोर्टल पर ऑनलाइन आवेदन और फीस जमा होती है। डिजिटल या छपी कॉपी ले सकते हैं; छपी कॉपी क्षेत्रीय कार्यालय से स्पीड पोस्ट से आती है।" },
    { q: "डुप्लीकेट मार्कशीट की फीस कितनी है?", a: "फीस बोर्ड/विश्वविद्यालय और परीक्षा पास किए कितने साल हुए, इस पर निर्भर है। CBSE में पुराने साल की मार्कशीट की फीस ज़्यादा है; ताज़ा राशि पोर्टल पर देखें।" },
    { q: "क्या पुलिस रिपोर्ट ज़रूरी है?", a: "कई राज्य बोर्ड और विश्वविद्यालय खोने/चोरी होने पर पुलिस की गुम होने की रिपोर्ट और शपथ पत्र मांगते हैं। CBSE के ऑनलाइन आवेदन में मांगे गए कागज़ पोर्टल पर देखें।" },
    { q: "क्या DigiLocker की मार्कशीट मान्य है?", a: "CBSE ने बताया है कि DigiLocker में जारी उसकी मार्कशीट और माइग्रेशन सर्टिफिकेट डिजिटल हस्ताक्षर वाले और मान्य हैं। दूसरे बोर्ड/विश्वविद्यालय के लिए उनकी सूचना देखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
