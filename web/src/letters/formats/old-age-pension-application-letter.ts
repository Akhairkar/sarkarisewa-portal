import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same facts as
// /service/national-social-assistance-programme):
// - NSAP / Indira Gandhi National Old Age Pension Scheme (Ministry of Rural
//   Development; myScheme "NSAP-IGNOAPS"; Parliament replies 2025): BPL
//   household, age 60+; central share Rs 200/month (60-79) and Rs 500/month
//   (80+); states add top-ups and many run their own old-age pension with
//   different names, amounts and age/income rules; NSAP continued 2021-26
//   without revision of rates.
// - NSAP guidelines 2014 (nsap.nic.in; CAG 2023): states designate a
//   Sanctioning Authority at block / municipality level; payment by DBT to
//   bank / post office account; online apply for NSAP also via UMANG.
// State forms and documents differ; page tells reader to use the state form
// and attach this letter as a covering application.
export const oldAgePensionApplicationLetter: Letter = {
  slug: "old-age-pension-application-letter",
  category: "social",
  emoji: "🧓",
  title: "Old Age Pension Application in Hindi 2026: वृद्धावस्था पेंशन आवेदन पत्र",
  description: "वृद्धावस्था पेंशन के लिए BDO/SDM को आवेदन पत्र का तैयार फॉर्मेट (हिंदी/English)। NSAP: 60+ BPL, केंद्र का हिस्सा ₹200-₹500, राज्य का फॉर्म और कागज़।",
  h1: "वृद्धावस्था पेंशन आवेदन पत्र 2026: BDO/नगर निकाय को ऐसे लिखें",
  short: { hi: "वृद्धावस्था पेंशन आवेदन", en: "Old-age pension application" },
  lead: "<strong>इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना (NSAP)</strong> में गरीबी रेखा से नीचे (BPL) परिवार के <strong>60 साल या ज़्यादा</strong> उम्र के व्यक्ति को हर महीने पेंशन मिलती है। केंद्र का हिस्सा <strong>₹200</strong> (60-79 साल) और <strong>₹500</strong> (80+ साल) है; राज्य अपनी तरफ से राशि जोड़ता है, इसलिए कुल पेंशन राज्य के हिसाब से अलग है। आवेदन गांव में <strong>प्रखंड विकास अधिकारी (BDO)</strong>, शहर में <strong>नगर निकाय</strong> या राज्य के बताए दफ्तर (कई जगह SDM/तहसील) में, या राज्य पोर्टल पर ऑनलाइन होता है।",
  facts: [
    ["योग्यता (NSAP)", "60+ साल, BPL परिवार"],
    ["केंद्र का हिस्सा", "60-79 साल: ₹200; 80+: ₹500 महीना (राज्य अलग से जोड़ता है)"],
    ["किसे दें", "BDO (गांव) / नगर निकाय (शहर) / राज्य का तय दफ्तर"],
    ["ऑनलाइन", "राज्य का पेंशन/e-District पोर्टल; NSAP सेवाएं UMANG पर"],
  ],
  to: "गांव में <strong>प्रखंड विकास अधिकारी (BDO)</strong> या प्रखंड समाज कल्याण अधिकारी; शहर में <strong>नगर निगम/नगर पालिका</strong> का पेंशन विभाग। कुछ राज्यों में आवेदन SDM/तहसीलदार, ज़िला समाज कल्याण अधिकारी या ग्राम पंचायत के ज़रिये लिया जाता है; अपने राज्य का नियम दफ्तर से पूछें।",
  when: [
    "आपकी उम्र 60 साल या ज़्यादा है और परिवार BPL/गरीब श्रेणी में है",
    "आपको अभी कोई दूसरी सरकारी पेंशन नहीं मिल रही",
    "राज्य का फॉर्म भरने के साथ एक लिखित आवेदन (कवरिंग लेटर) देना है",
    "ऑनलाइन आवेदन के बाद दफ्तर में कागज़ जमा करने हैं",
  ],
  fields: [
    { key: "office", label: { hi: "किसे (पद, दफ्तर, ज़िला)", en: "Addressed to (designation, office, district)" }, required: true, placeholder: { hi: "जैसे: प्रखंड विकास अधिकारी, विकास खंड मऊ, चित्रकूट", en: "e.g. Block Development Officer, Mau block, Chitrakoot" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "guardian", label: { hi: "पिता/पति का नाम", en: "Father's / husband's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि या उम्र", en: "Date of birth or age" }, required: true, placeholder: { hi: "जैसे: 01/01/1960 (66 वर्ष)", en: "e.g. 01/01/1960 (66 years)" } },
    { key: "address", label: { hi: "पूरा पता (गांव, पंचायत, वार्ड, ज़िला)", en: "Full address (village, panchayat, ward, district)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "category", label: { hi: "परिवार की श्रेणी", en: "Household category" }, type: "select", required: true, options: [
      { hi: "BPL परिवार", en: "BPL household" },
      { hi: "अंत्योदय (AAY) राशन कार्ड धारक", en: "Antyodaya (AAY) ration card holder" },
      { hi: "प्राथमिकता परिवार (PHH) राशन कार्ड धारक", en: "Priority household (PHH) ration card holder" },
      { hi: "राज्य नियम के अनुसार आय सीमा के अंदर", en: "within income limit as per state rules" },
    ] },
    { key: "bpl", label: { hi: "BPL/राशन कार्ड संख्या", en: "BPL / ration card no." } },
    { key: "bank", label: { hi: "बैंक/डाकघर, शाखा, IFSC और खाते के आखिरी 4 अंक", en: "Bank / post office, branch, IFSC, last 4 digits" }, required: true, placeholder: { hi: "जैसे: SBI, मऊ शाखा, SBIN000xxxx, खाता XXXX1234", en: "e.g. SBI, Mau branch, SBIN000xxxx, a/c XXXX1234" }, hint: { hi: "पूरा खाता नंबर फॉर्म में भरें; PIN/OTP कभी किसी को न दें", en: "Write full account no. on the official form; never share PIN/OTP" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: वृद्धावस्था पेंशन (इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना / राज्य वृद्धावस्था पेंशन) स्वीकृत करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पिता/पति {{guardian}}, निवासी {{address}}, की जन्म तिथि/उम्र {{dob}} है। मेरा परिवार {{category}} श्रेणी में आता है (कार्ड संख्या: {{bpl}})।

मेरे पास आय का कोई स्थायी साधन नहीं है और मुझे किसी अन्य सरकारी योजना से पेंशन नहीं मिल रही है। बढ़ती उम्र के कारण मैं काम करने में असमर्थ हूं।

अतः आपसे निवेदन है कि मुझे वृद्धावस्था पेंशन योजना के तहत पेंशन स्वीकृत कर हर महीने की राशि मेरे खाते {{bank}} में भेजने की कृपा करें। राज्य का निर्धारित आवेदन फॉर्म और ज़रूरी कागज़ इस पत्र के साथ संलग्न हैं।

मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी सही है। गलत पाए जाने पर पेंशन रद्द करने और नियम के अनुसार कार्रवाई के लिए मैं ज़िम्मेदार रहूंगा/रहूंगी।

प्रार्थी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. राज्य का भरा हुआ पेंशन आवेदन फॉर्म
2. उम्र का प्रमाण (आधार/जन्म प्रमाण पत्र/वोटर ID/स्कूल प्रमाण पत्र)
3. BPL/राशन कार्ड या आय प्रमाण पत्र की कॉपी
4. निवास प्रमाण
5. बैंक/डाकघर पासबुक के पहले पन्ने की कॉपी
6. पासपोर्ट साइज़ फोटो`,
    en: `To,
{{office}}

Subject: Application for sanction of old-age pension (Indira Gandhi National Old Age Pension Scheme / State old-age pension)

Sir/Madam,

I, {{name}}, son/daughter/wife of {{guardian}}, resident of {{address}}, was born on / am aged {{dob}}. My household falls in the {{category}} category (card no.: {{bpl}}).

I have no regular source of income and am not receiving a pension under any other government scheme. Due to old age I am unable to work.

I therefore request you to sanction me pension under the old-age pension scheme and to credit the monthly amount to my account {{bank}}. The prescribed state application form and the required documents are enclosed with this letter.

I declare that the above information is true. If found false, I shall be responsible for cancellation of the pension and action as per rules.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Filled state pension application form
2. Proof of age (Aadhaar / birth certificate / voter ID / school certificate)
3. Copy of BPL / ration card or income certificate
4. Proof of residence
5. Copy of first page of bank / post office passbook
6. Passport-size photograph`,
  },
  attach: [
    "राज्य का निर्धारित पेंशन आवेदन फॉर्म (दफ्तर, CSC या राज्य पोर्टल से)",
    "उम्र का प्रमाण: आधार, जन्म प्रमाण पत्र, वोटर ID या स्कूल प्रमाण पत्र (राज्य जो माने)",
    "BPL/राशन कार्ड की कॉपी, या राज्य मांगे तो आय प्रमाण पत्र",
    "निवास प्रमाण और आधार की कॉपी",
    "बैंक/डाकघर पासबुक के पहले पन्ने की कॉपी (खाता आधार से जुड़ा हो)",
    "पासपोर्ट साइज़ फोटो",
  ],
  submit: [
    "अपने राज्य का पेंशन फॉर्म लें: BDO/नगर निकाय दफ्तर, नज़दीकी CSC या राज्य के पेंशन/e-District पोर्टल से। कई राज्यों में आवेदन सिर्फ ऑनलाइन होता है।",
    "फॉर्म भरकर यह पत्र और कागज़ साथ लगाएं; दफ्तर में जमा करके रिसीविंग/आवेदन संख्या लें।",
    "बैंक खाते में आधार सीडिंग (DBT के लिए NPCI मैपिंग) करा लें, ताकि पेंशन बिना रुकावट आए।",
    "जांच (पंचायत/वार्ड स्तर पर) के बाद स्वीकृति होती है; स्थिति राज्य पोर्टल या nsap.nic.in पर देखें।",
    "लंबे समय तक कुछ न हो तो ज़िला समाज कल्याण अधिकारी को लिखें, राज्य शिकायत पोर्टल पर शिकायत करें या RTI से स्थिति पूछें।",
  ],
  tips: [
    "राज्य का अपना फॉर्म ज़रूर भरें; सिर्फ सादा पत्र देने से आवेदन दर्ज नहीं होता।",
    "आधार, बैंक खाते और फॉर्म में नाम व उम्र एक जैसी हो; फर्क होने पर आवेदन रुकता है।",
    "पेंशन दिलाने के नाम पर पैसे मांगने वाले बिचौलियों से बचें; आवेदन मुफ्त है (CSC पर मामूली सेवा शुल्क हो सकता है)।",
    "70+ उम्र वालों के लिए आयुष्मान वय वंदना कार्ड (₹5 लाख तक मुफ्त इलाज) अलग से बनवाएं।",
  ],
  notice: "पेंशन की कुल राशि, उम्र/आय की शर्तें, फॉर्म और दफ्तर हर राज्य में अलग हैं। ऊपर की राशि सिर्फ केंद्र (NSAP) का हिस्सा है। अपने राज्य का नियम दफ्तर या राज्य पोर्टल से पक्का करें।",
  official: [
    { href: "https://nsap.nic.in/", title: "NSAP पोर्टल (ग्रामीण विकास मंत्रालय)", note: "योजना और लाभार्थी स्थिति" },
    { href: "https://www.myscheme.gov.in/schemes/nsap-ignoaps", title: "myScheme: IGNOAPS", note: "योग्यता और कागज़" },
    { href: "https://web.umang.gov.in/", title: "UMANG", note: "NSAP सेवाएं" },
  ],
  related: ["/service/national-social-assistance-programme.html", "/service/senior-citizen-card.html", "/service/ayushman-bharat-vayo-vandana.html"],
  faq: [
    { q: "वृद्धावस्था पेंशन के लिए कितनी उम्र चाहिए?", a: "केंद्र की NSAP योजना (IGNOAPS) में 60 साल या ज़्यादा, और परिवार BPL होना चाहिए। कई राज्यों की अपनी योजनाओं में उम्र/आय की शर्त अलग है।" },
    { q: "वृद्धावस्था पेंशन कितनी मिलती है?", a: "केंद्र का हिस्सा 60-79 साल पर ₹200 और 80+ पर ₹500 महीना है। राज्य अपनी ओर से राशि जोड़ते हैं, इसलिए कुल पेंशन राज्य के हिसाब से अलग है।" },
    { q: "वृद्धावस्था पेंशन का आवेदन कहां करें?", a: "गांव में BDO दफ्तर, शहर में नगर निकाय, या राज्य के पेंशन/e-District पोर्टल और CSC पर। कुछ राज्यों में SDM/तहसील या ज़िला समाज कल्याण कार्यालय।" },
    { q: "वृद्धावस्था पेंशन के लिए कौन से कागज़ लगते हैं?", a: "राज्य का फॉर्म, उम्र का प्रमाण, BPL/राशन कार्ड या आय प्रमाण, निवास प्रमाण, आधार, बैंक पासबुक की कॉपी और फोटो। राज्य अतिरिक्त कागज़ मांग सकता है।" },
    { q: "आवेदन के बाद पेंशन कब शुरू होती है?", a: "जांच और स्वीकृति के बाद; समय राज्य के हिसाब से अलग है। स्वीकृति के बाद पैसा सीधे बैंक/डाकघर खाते में आता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
