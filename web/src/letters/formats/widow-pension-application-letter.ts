import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same facts as
// /service/national-social-assistance-programme):
// - NSAP / Indira Gandhi National Widow Pension Scheme (Ministry of Rural
//   Development; Lok Sabha / Rajya Sabha replies 2025 via eparlib.sansad.in):
//   widows aged 40-79 in BPL households, central share Rs 300/month; at 80
//   they move to IGNOAPS at Rs 500; states add top-ups and many run their
//   own widow / destitute women pension with different age, income and
//   amount rules; NSAP rates not revised for 2021-26.
// - NSAP guidelines 2014 (nsap.nic.in): block / municipality Sanctioning
//   Authority; DBT to bank / post office account.
// - National Family Benefit Scheme (NSAP): Rs 20,000 lump sum to a BPL
//   household on death of the primary breadwinner aged 18-59 (myScheme).
// State forms, documents and offices differ; page says so.
export const widowPensionApplicationLetter: Letter = {
  slug: "widow-pension-application-letter",
  category: "social",
  emoji: "🤝",
  title: "Widow Pension Application in Hindi 2026: विधवा पेंशन आवेदन पत्र",
  description: "विधवा पेंशन के लिए BDO/समाज कल्याण अधिकारी को आवेदन पत्र का तैयार फॉर्मेट (हिंदी/English)। NSAP: 40-79 साल, BPL, केंद्र का हिस्सा ₹300; कागज़ और तरीका।",
  h1: "विधवा पेंशन आवेदन पत्र 2026: भरें, प्रिंट करें और राज्य के फॉर्म के साथ दें",
  short: { hi: "विधवा पेंशन आवेदन", en: "Widow pension application" },
  lead: "<strong>इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना (NSAP)</strong> में BPL परिवार की <strong>40 से 79 साल</strong> की विधवा महिला को केंद्र की ओर से <strong>₹300 महीना</strong> मिलता है (80 साल होने पर वृद्धावस्था पेंशन में ₹500)। ज़्यादातर राज्य इसमें अपनी राशि जोड़ते हैं, और कई राज्यों की अपनी विधवा/निराश्रित महिला पेंशन है जिसमें उम्र और आय की शर्तें अलग हैं। आवेदन गांव में <strong>BDO</strong>, शहर में <strong>नगर निकाय</strong> या <strong>ज़िला समाज कल्याण / महिला कल्याण अधिकारी</strong> को, राज्य के फॉर्म के साथ दिया जाता है।",
  facts: [
    ["योग्यता (NSAP)", "विधवा, 40-79 साल, BPL परिवार"],
    ["केंद्र का हिस्सा", "₹300 महीना (राज्य अलग से जोड़ता है)"],
    ["किसे दें", "BDO / नगर निकाय / ज़िला समाज या महिला कल्याण अधिकारी"],
    ["साथ में देखें", "पति कमाने वाले थे (18-59 साल) तो पारिवारिक लाभ ₹20,000 (NFBS)"],
  ],
  to: "गांव में <strong>प्रखंड विकास अधिकारी (BDO)</strong> या प्रखंड समाज कल्याण अधिकारी; शहर में <strong>नगर निगम/नगर पालिका</strong> का पेंशन विभाग। कई राज्यों में विधवा पेंशन <strong>महिला एवं बाल विकास / समाज कल्याण विभाग</strong> देखता है, और आवेदन SDM/तहसील या ऑनलाइन पोर्टल से होता है।",
  when: [
    "पति की मृत्यु के बाद आपकी आय का कोई साधन नहीं है",
    "परिवार BPL है या राज्य की आय सीमा के अंदर है",
    "आपको अभी कोई दूसरी सरकारी पेंशन नहीं मिल रही",
    "राज्य के फॉर्म के साथ लिखित आवेदन (कवरिंग लेटर) देना है",
  ],
  fields: [
    { key: "office", label: { hi: "किसे (पद, दफ्तर, ज़िला)", en: "Addressed to (designation, office, district)" }, required: true, placeholder: { hi: "जैसे: ज़िला समाज कल्याण अधिकारी, सीहोर", en: "e.g. District Social Welfare Officer, Sehore" } },
    { key: "name", label: { hi: "आवेदिका का नाम", en: "Applicant's name" }, required: true },
    { key: "husband", label: { hi: "स्वर्गीय पति का नाम", en: "Late husband's name" }, required: true },
    { key: "death", label: { hi: "पति की मृत्यु की तारीख", en: "Date of husband's death" }, required: true },
    { key: "dob", label: { hi: "आपकी जन्म तिथि या उम्र", en: "Your date of birth or age" }, required: true },
    { key: "address", label: { hi: "पूरा पता (गांव, पंचायत, वार्ड, ज़िला)", en: "Full address (village, panchayat, ward, district)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "category", label: { hi: "परिवार की श्रेणी", en: "Household category" }, type: "select", required: true, options: [
      { hi: "BPL परिवार", en: "BPL household" },
      { hi: "अंत्योदय (AAY) राशन कार्ड धारक", en: "Antyodaya (AAY) ration card holder" },
      { hi: "प्राथमिकता परिवार (PHH) राशन कार्ड धारक", en: "Priority household (PHH) ration card holder" },
      { hi: "राज्य नियम के अनुसार आय सीमा के अंदर", en: "within income limit as per state rules" },
    ] },
    { key: "bpl", label: { hi: "BPL/राशन कार्ड संख्या", en: "BPL / ration card no." } },
    { key: "children", label: { hi: "आश्रित बच्चे (संख्या और उम्र)", en: "Dependent children (number and age)" }, placeholder: { hi: "जैसे: 2 बच्चे, 8 और 12 साल", en: "e.g. 2 children, aged 8 and 12" } },
    { key: "bank", label: { hi: "बैंक/डाकघर, शाखा, IFSC और खाते के आखिरी 4 अंक", en: "Bank / post office, branch, IFSC, last 4 digits" }, required: true, hint: { hi: "खाता आपके अपने नाम पर हो; पूरा नंबर सरकारी फॉर्म में भरें, PIN/OTP किसी को न दें", en: "Account must be in your own name; full no. on the official form only" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: विधवा पेंशन (इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना / राज्य विधवा पेंशन) स्वीकृत करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पत्नी स्वर्गीय {{husband}}, निवासी {{address}}, की जन्म तिथि/उम्र {{dob}} है। मेरे पति का निधन दिनांक {{death}} को हो गया।

पति के निधन के बाद मेरे पास आय का कोई स्थायी साधन नहीं है। मेरा परिवार {{category}} श्रेणी में आता है (कार्ड संख्या: {{bpl}})। मेरे आश्रित बच्चे: {{children}}। मुझे किसी अन्य सरकारी योजना से पेंशन नहीं मिल रही है और मैंने पुनर्विवाह नहीं किया है।

अतः आपसे निवेदन है कि मुझे विधवा पेंशन योजना के तहत पेंशन स्वीकृत कर हर महीने की राशि मेरे खाते {{bank}} में भेजने की कृपा करें। राज्य का निर्धारित आवेदन फॉर्म और ज़रूरी कागज़ संलग्न हैं।

मैं घोषणा करती हूं कि ऊपर दी गई जानकारी सही है। गलत पाए जाने पर पेंशन रद्द करने और नियम के अनुसार कार्रवाई के लिए मैं ज़िम्मेदार रहूंगी।

प्रार्थिनी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. राज्य का भरा हुआ विधवा पेंशन आवेदन फॉर्म
2. पति का मृत्यु प्रमाण पत्र
3. उम्र का प्रमाण (आधार/जन्म प्रमाण पत्र/वोटर ID)
4. BPL/राशन कार्ड या आय प्रमाण पत्र की कॉपी
5. निवास प्रमाण और आधार की कॉपी
6. बैंक/डाकघर पासबुक के पहले पन्ने की कॉपी
7. पासपोर्ट साइज़ फोटो`,
    en: `To,
{{office}}

Subject: Application for sanction of widow pension (Indira Gandhi National Widow Pension Scheme / State widow pension)

Sir/Madam,

I, {{name}}, wife of late {{husband}}, resident of {{address}}, was born on / am aged {{dob}}. My husband passed away on {{death}}.

After my husband's death I have no regular source of income. My household falls in the {{category}} category (card no.: {{bpl}}). My dependent children: {{children}}. I am not receiving a pension under any other government scheme and have not remarried.

I therefore request you to sanction me pension under the widow pension scheme and to credit the monthly amount to my account {{bank}}. The prescribed state application form and the required documents are enclosed.

I declare that the above information is true. If found false, I shall be responsible for cancellation of the pension and action as per rules.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Filled state widow pension application form
2. Death certificate of husband
3. Proof of age (Aadhaar / birth certificate / voter ID)
4. Copy of BPL / ration card or income certificate
5. Proof of residence and copy of Aadhaar
6. Copy of first page of bank / post office passbook
7. Passport-size photograph`,
  },
  attach: [
    "राज्य का निर्धारित विधवा पेंशन फॉर्म (दफ्तर, CSC या राज्य पोर्टल से)",
    "पति का मृत्यु प्रमाण पत्र (न बना हो तो पहले नगर निकाय/पंचायत से बनवाएं)",
    "उम्र का प्रमाण, आधार और निवास प्रमाण",
    "BPL/राशन कार्ड या आय प्रमाण पत्र",
    "अपने नाम के बैंक/डाकघर खाते की पासबुक कॉपी (खाता आधार से जुड़ा हो)",
    "पासपोर्ट साइज़ फोटो; कुछ राज्य पुनर्विवाह न करने का शपथ पत्र भी मांगते हैं",
  ],
  submit: [
    "राज्य का विधवा पेंशन फॉर्म लें: BDO/नगर निकाय/समाज कल्याण दफ्तर, नज़दीकी CSC या राज्य पोर्टल से। कई राज्यों में आवेदन ऑनलाइन ही होता है।",
    "फॉर्म भरकर यह पत्र और कागज़ लगाएं; दफ्तर में जमा करके रिसीविंग/आवेदन संख्या लें।",
    "बैंक खाते में आधार सीडिंग (DBT के लिए NPCI मैपिंग) करा लें।",
    "पति परिवार के मुख्य कमाने वाले थे और उनकी उम्र 18-59 साल थी, तो BPL परिवार राष्ट्रीय पारिवारिक लाभ योजना (₹20,000 एकमुश्त) के लिए भी उसी दफ्तर में आवेदन करे।",
    "देर हो तो ज़िला समाज कल्याण अधिकारी को लिखें, राज्य शिकायत पोर्टल पर शिकायत करें या RTI से स्थिति पूछें।",
  ],
  tips: [
    "मृत्यु प्रमाण पत्र पर पति का नाम और आपके कागज़ों में पति का नाम एक जैसा होना चाहिए।",
    "पेंशन का खाता आपके अपने नाम पर हो, किसी रिश्तेदार के नाम पर नहीं।",
    "बिचौलियों को पैसे न दें; आवेदन मुफ्त है (CSC पर मामूली सेवा शुल्क हो सकता है)।",
    "उम्र 40 से कम हो तो भी अपने राज्य की विधवा पेंशन योजना देखें; कई राज्यों में उम्र सीमा कम है।",
  ],
  notice: "विधवा पेंशन की राशि, उम्र/आय की शर्तें, फॉर्म और विभाग हर राज्य में अलग हैं। ऊपर की राशि सिर्फ केंद्र (NSAP) का हिस्सा है; अपने राज्य का नियम दफ्तर या राज्य पोर्टल से पक्का करें।",
  official: [
    { href: "https://nsap.nic.in/", title: "NSAP पोर्टल (ग्रामीण विकास मंत्रालय)", note: "योजना और लाभार्थी स्थिति" },
    { href: "https://web.umang.gov.in/", title: "UMANG", note: "NSAP सेवाएं" },
  ],
  related: ["/service/national-social-assistance-programme.html", "/service/death-certificate.html"],
  faq: [
    { q: "विधवा पेंशन के लिए कितनी उम्र चाहिए?", a: "केंद्र की NSAP विधवा पेंशन (IGNWPS) 40 से 79 साल की BPL विधवा को मिलती है। कई राज्यों की अपनी विधवा पेंशन में 18 साल से ऊपर या अलग उम्र सीमा है; राज्य का नियम देखें।" },
    { q: "विधवा पेंशन कितनी मिलती है?", a: "केंद्र का हिस्सा ₹300 महीना है; 80 साल होने पर ₹500 (वृद्धावस्था पेंशन में)। राज्य अपनी राशि जोड़ते हैं, इसलिए कुल पेंशन राज्य के हिसाब से अलग है।" },
    { q: "विधवा पेंशन के लिए कौन से कागज़ चाहिए?", a: "राज्य का फॉर्म, पति का मृत्यु प्रमाण पत्र, उम्र और निवास प्रमाण, आधार, BPL/राशन कार्ड या आय प्रमाण, बैंक पासबुक की कॉपी और फोटो।" },
    { q: "विधवा पेंशन का आवेदन कहां करें?", a: "गांव में BDO, शहर में नगर निकाय, या ज़िला समाज/महिला कल्याण कार्यालय; कई राज्यों में राज्य पोर्टल या CSC से ऑनलाइन।" },
    { q: "पति की मृत्यु पर और कौन सी मदद मिलती है?", a: "अगर पति परिवार के मुख्य कमाने वाले थे और उम्र 18-59 साल थी, तो BPL परिवार को राष्ट्रीय पारिवारिक लाभ योजना में ₹20,000 एकमुश्त मिलते हैं। आवेदन BDO/समाज कल्याण दफ्तर में होता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
