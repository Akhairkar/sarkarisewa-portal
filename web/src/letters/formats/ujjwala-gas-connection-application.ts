import type { Letter } from "../types";

// Sources (checked 17 Oct 2026), as in the repo pm-ujjwala-yojana guide
// (checked 15 Oct 2026):
// - myScheme (slugs "pmuy" / "pmuy2"), Ministry of Petroleum & Natural Gas:
//   Ujjwala 2.0; applicant an adult woman (18+) of a poor household with no
//   LPG connection in the household; eligible categories incl. SC/ST, PMAY-G,
//   AAY, most backward classes, tea and ex-tea garden tribes, forest dwellers,
//   island/river-island residents, SECC households, or any poor household
//   through a 14-point deprivation declaration; Government assistance Rs 1,600
//   (14.2 kg) / Rs 1,150 (5 kg) covering security deposit, regulator, hose,
//   DGCC and installation; first refill and stove free from OMCs; apply online
//   on pmuy.gov.in (choose Indane/Bharatgas/HP Gas) or at the distributor with
//   the KYC form; migrants may give a self-declaration for address
//   (Annexure I).
// - Refill subsidy Rs 300 per 14.2 kg cylinder (Cabinet Aug 2025); number of
//   subsidised refills a year is fixed by the government each year and is not
//   stated here.
export const ujjwalaGasConnectionApplication: Letter = {
  slug: "ujjwala-gas-connection-application",
  category: "utility",
  emoji: "🔥",
  title: "Ujjwala Gas Connection Application in Hindi 2026: उज्ज्वला कनेक्शन आवेदन पत्र",
  description: "प्रधानमंत्री उज्ज्वला योजना (PMUY) में मुफ्त गैस कनेक्शन का आवेदन पत्र हिंदी/English में, KYC फॉर्म के साथ। पात्रता, कागज़, pmuy.gov.in और गैस एजेंसी का तरीका।",
  h1: "उज्ज्वला गैस कनेक्शन आवेदन पत्र 2026: गैस एजेंसी को (KYC फॉर्म के साथ)",
  short: { hi: "उज्ज्वला गैस कनेक्शन आवेदन", en: "Ujjwala gas connection application" },
  lead: "<strong>प्रधानमंत्री उज्ज्वला योजना (PMUY)</strong> में गरीब परिवार की <strong>18 साल से ऊपर की महिला</strong>, जिसके घर में पहले से कोई LPG कनेक्शन नहीं है, मुफ्त गैस कनेक्शन ले सकती है: जमा राशि, रेगुलेटर, पाइप, <strong>पहला रिफिल और चूल्हा मुफ्त</strong>। आवेदन <strong>pmuy.gov.in</strong> पर ऑनलाइन या नज़दीकी <strong>गैस एजेंसी (डिस्ट्रीब्यूटर)</strong> पर <strong>KYC फॉर्म</strong> के साथ होता है। यह पत्र KYC फॉर्म के साथ एजेंसी को देने के लिए है।",
  facts: [
    ["किसे दें", "नज़दीकी इंडेन/भारतगैस/HP गैस एजेंसी"],
    ["कौन आवेदन करे", "18+ महिला, घर में पहले से LPG नहीं"],
    ["क्या मुफ्त", "कनेक्शन (जमा राशि, रेगुलेटर, पाइप), पहला रिफिल, चूल्हा"],
    ["रिफिल सब्सिडी", "₹300 प्रति 14.2 किलो सिलेंडर (साल में तय रिफिल तक)"],
  ],
  to: "अपने इलाके की किसी <strong>LPG गैस एजेंसी (Indane, Bharatgas या HP Gas)</strong> के प्रबंधक को, साथ में भरा हुआ <strong>PMUY KYC फॉर्म</strong>। ऑनलाइन आवेदन <a href=\"https://www.pmuy.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmuy.gov.in</a> पर भी होता है।",
  when: [
    "गरीब परिवार की महिला को मुफ्त LPG कनेक्शन चाहिए",
    "प्रवासी मज़दूर परिवार को नए शहर में कनेक्शन चाहिए (पते की स्व-घोषणा पर)",
    "ऑनलाइन आवेदन के बाद एजेंसी में कागज़ जमा करने हैं",
    "आवेदन दिए काफी समय हो गया और स्थिति जाननी है",
  ],
  fields: [
    { key: "agency", label: { hi: "गैस एजेंसी का नाम और पता", en: "Gas agency name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आवेदिका (महिला) का नाम", en: "Applicant (woman)'s name" }, required: true },
    { key: "relation", label: { hi: "पति/पिता का नाम", en: "Husband's/father's name" }, required: true },
    { key: "age", label: { hi: "उम्र", en: "Age" }, type: "number", required: true },
    { key: "address", label: { hi: "पूरा पता", en: "Full address" }, type: "textarea", required: true },
    { key: "category", label: { hi: "पात्रता की श्रेणी", en: "Eligibility category" }, type: "select", options: [
      { hi: "अनुसूचित जाति/अनुसूचित जनजाति परिवार", en: "SC/ST household" },
      { hi: "अंत्योदय अन्न योजना (AAY) राशन कार्डधारी", en: "Antyodaya Anna Yojana (AAY) card holder" },
      { hi: "प्रधानमंत्री आवास योजना-ग्रामीण लाभार्थी", en: "PMAY-Gramin beneficiary" },
      { hi: "अति पिछड़ा वर्ग / वनवासी / चाय बागान जनजाति / द्वीप निवासी", en: "Most backward class / forest dweller / tea garden tribe / island resident" },
      { hi: "गरीब परिवार (14 बिंदुओं वाली घोषणा के आधार पर)", en: "Poor household (on the 14-point declaration)" },
    ] },
    { key: "ration", label: { hi: "राशन कार्ड संख्या", en: "Ration card number" }, required: true },
    { key: "members", label: { hi: "परिवार के वयस्क सदस्य और आधार के आखिरी 4 अंक", en: "Adult family members and last 4 Aadhaar digits" }, type: "textarea", placeholder: { hi: "1. सुनीता, 32, स्वयं, XXXX1234\n2. मोहन, 36, पति, XXXX5678", en: "1. Sunita, 32, self, XXXX1234\n2. Mohan, 36, husband, XXXX5678" } },
    { key: "cylinder", label: { hi: "सिलेंडर का आकार", en: "Cylinder size" }, type: "select", options: [
      { hi: "14.2 किलो", en: "14.2 kg" },
      { hi: "5 किलो", en: "5 kg" },
    ] },
    { key: "bank", label: { hi: "बैंक का नाम और खाते के आखिरी 4 अंक", en: "Bank name and last 4 digits of account" }, required: true, hint: { hi: "पूरा खाता नंबर, PIN या OTP कभी न लिखें", en: "Never write the full account number, PIN or OTP" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रबंधक,
{{agency}}

विषय: प्रधानमंत्री उज्ज्वला योजना (PMUY) के अंतर्गत नए LPG कनेक्शन हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पत्नी/पुत्री {{relation}}, उम्र {{age}} वर्ष, निम्नलिखित पते की निवासी हूं:
{{address}}

मेरा परिवार {{category}} श्रेणी में आता है। मेरा राशन कार्ड नंबर {{ration}} है। मेरे परिवार में किसी भी सदस्य के नाम पर कहीं भी LPG कनेक्शन नहीं है।

परिवार के वयस्क सदस्य:
{{members}}

अतः आपसे निवेदन है कि मुझे प्रधानमंत्री उज्ज्वला योजना के अंतर्गत {{cylinder}} सिलेंडर वाला नया LPG कनेक्शन देने की कृपा करें। भरा हुआ PMUY KYC फॉर्म और आवश्यक दस्तावेज़ संलग्न हैं। सब्सिडी के लिए मेरा बैंक खाता: {{bank}}।

मैं घोषणा करती हूं कि ऊपर दी गई जानकारी सही है और मेरे परिवार में पहले से कोई LPG कनेक्शन नहीं है।

भवदीया,

(हस्ताक्षर/अंगूठा निशान)
नाम: {{name}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न:
1. भरा हुआ PMUY KYC फॉर्म (पासपोर्ट साइज़ फोटो सहित)
2. आवेदिका का आधार कार्ड
3. राशन कार्ड और उसमें दर्ज वयस्क सदस्यों के आधार
4. पते का प्रमाण (आधार में यही पता न हो तो)
5. बैंक पासबुक/खाते का विवरण
6. श्रेणी का प्रमाण / 14 बिंदुओं वाली घोषणा (जो लागू हो)`,
    en: `To,
The Manager,
{{agency}}

Subject: Application for a new LPG connection under Pradhan Mantri Ujjwala Yojana (PMUY)

Sir/Madam,

I, {{name}}, wife/daughter of {{relation}}, aged {{age}} years, am a resident of the following address:
{{address}}

My household belongs to the category: {{category}}. My ration card number is {{ration}}. No member of my household has an LPG connection anywhere.

Adult members of the household:
{{members}}

I therefore request you to kindly provide me a new LPG connection with a {{cylinder}} cylinder under Pradhan Mantri Ujjwala Yojana. The filled PMUY KYC form and required documents are enclosed. My bank account for subsidy: {{bank}}.

I declare that the information given above is true and that my household has no existing LPG connection.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Date: {{date}}

Enclosures:
1. Filled PMUY KYC form (with passport-size photograph)
2. Applicant's Aadhaar card
3. Ration card and Aadhaar of adult members listed in it
4. Address proof (if Aadhaar has a different address)
5. Bank passbook/account details
6. Proof of category / 14-point declaration (as applicable)`,
  },
  attach: [
    "PMUY KYC फॉर्म (एजेंसी से या pmuy.gov.in से), फोटो के साथ",
    "आवेदिका का आधार कार्ड; राशन कार्ड और उसमें दर्ज सभी वयस्कों के आधार",
    "बैंक खाते का विवरण (पासबुक), पते का प्रमाण अगर आधार का पता अलग है",
    "श्रेणी का प्रमाण (जाति प्रमाण पत्र, AAY कार्ड आदि) या 14 बिंदुओं वाली घोषणा",
    "प्रवासी परिवार: पते के लिए स्व-घोषणा (Annexure I)",
  ],
  submit: [
    "ऑनलाइन: <a href=\"https://www.pmuy.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmuy.gov.in</a> पर गैस कंपनी (Indane/Bharatgas/HP Gas) चुनें, नज़दीकी एजेंसी चुनकर फॉर्म भरें और कागज़ अपलोड करें।",
    "ऑफलाइन: KYC फॉर्म भरकर यह पत्र और कागज़ों की कॉपी के साथ गैस एजेंसी में जमा करें; रसीद/आवेदन संख्या लें।",
    "एजेंसी कागज़ों और आधार की जांच करती है; कनेक्शन मंज़ूर होने पर एजेंसी से चूल्हा, सिलेंडर और रेगुलेटर लें।",
    "देरी या मना करने पर गैस कंपनी के टोल-फ्री <strong>1800-2333-555</strong> पर शिकायत करें; फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर।",
  ],
  tips: [
    "कनेक्शन महिला के नाम पर ही बनता है; पुरुष के नाम पर उज्ज्वला आवेदन नहीं होता।",
    "परिवार में किसी के नाम पहले से LPG कनेक्शन हो तो आवेदन खारिज होगा; गलत घोषणा न करें।",
    "राशन कार्ड के सभी वयस्कों का आधार देना होता है, क्योंकि जांच पूरे परिवार की होती है।",
    "कनेक्शन मुफ्त है; एजेंसी जबरन गैस चूल्हा या दूसरा सामान खरीदने को कहे तो शिकायत करें।",
  ],
  official: [
    { href: "https://www.pmuy.gov.in/", title: "PMUY पोर्टल", note: "ऑनलाइन आवेदन, KYC फॉर्म" },
    { href: "https://www.myscheme.gov.in/schemes/pmuy2", title: "myScheme: प्रधानमंत्री उज्ज्वला योजना 2.0" },
    { href: "https://mopng.gov.in/", title: "पेट्रोलियम एवं प्राकृतिक गैस मंत्रालय" },
  ],
  related: ["/service/pm-ujjwala-yojana.html", "/service/lpg-subsidy-pahal.html"],
  faq: [
    { q: "उज्ज्वला गैस कनेक्शन के लिए कौन आवेदन कर सकता है?", a: "गरीब परिवार की 18 साल से ऊपर की महिला, जिसके घर में किसी के नाम पहले से LPG कनेक्शन नहीं है, और जो SC/ST, AAY, PMAY-G जैसी तय श्रेणियों में हो या 14 बिंदुओं वाली घोषणा से गरीब परिवार साबित हो।" },
    { q: "उज्ज्वला में क्या-क्या मुफ्त मिलता है?", a: "सिलेंडर की जमा राशि, रेगुलेटर, पाइप और लगाने का खर्च सरकार देती है; पहला रिफिल और गैस चूल्हा भी मुफ्त मिलता है।" },
    { q: "उज्ज्वला का KYC फॉर्म कहां मिलेगा?", a: "किसी भी LPG गैस एजेंसी से या pmuy.gov.in से डाउनलोड करके।" },
    { q: "उज्ज्वला सिलेंडर पर कितनी सब्सिडी मिलती है?", a: "₹300 प्रति 14.2 किलो सिलेंडर, साल में सरकार द्वारा तय संख्या के रिफिल तक। यह सीधे बैंक खाते में आती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
