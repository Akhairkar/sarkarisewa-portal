import type { DocGuide } from "./types";

// Sources (checked 14-15 Oct 2026; same research as the per-state
// *-driving-licence.ts guides in this folder):
// - sarathi.parivahan.gov.in (MoRTH Sarathi portal): state selection, LL/DL
//   menus, slot booking, Online LLTest (STALL), Find Doctor, Application
//   Status, Fee Payments, grievance; Aadhaar e-KYC contactless list differs
//   by state.
// - transport.uk.gov.in/fees-structrure/: CMVR Rule 32 licence fee table
//   (MoRTH notification 29.12.2016) incl. late renewal and smart card note.
// - Search extracts of parivahan.gov.in and state transport sites: ages 16
//   (<=50cc, guardian consent) / 18 / 20 (transport); LL valid 6 months; DL
//   test after 30 days.
// - Motor Vehicles Act s.14 and s.15 as amended in 2019 (validity bands,
//   renewal up to 1 year before expiry, test if more than 1 year late).
// Left out: state user/smart-card charges, helplines, RTO lists.
export const drivingLicence: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "ड्राइविंग लाइसेंस" },
  ],
  docHi: "ड्राइविंग लाइसेंस",
  title: "ड्राइविंग लाइसेंस (DL) 2026",
  description: "राज्य परिवहन विभाग (परिवहन सेवा के माध्यम से) द्वारा जारी एक आधिकारिक प्राधिकरण जो किसी व्यक्ति को मोटर वाहन चलाने की अनुमति देता है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ड्राइविंग लाइसेंस (DL) 2026: लर्नर लाइसेंस, ड्राइविंग टेस्ट, फीस, नवीनीकरण और स्टेटस",
  lead: "भारत में लर्नर लाइसेंस (LL) और ड्राइविंग लाइसेंस (DL) राज्य का परिवहन विभाग (RTO) जारी करता है, पर आवेदन लगभग सभी राज्यों में केंद्र सरकार के <strong>Sarathi पोर्टल (sarathi.parivahan.gov.in)</strong> पर अपना राज्य चुनकर होता है। पहले लर्नर लाइसेंस बनता है (6 महीने वैध), फिर कम से कम 30 दिन बाद RTO में ड्राइविंग टेस्ट देकर पक्का DL। केंद्रीय नियम के अनुसार LL ₹150 + टेस्ट ₹50 और DL टेस्ट ₹300 + लाइसेंस ₹200 है; राज्य सेवा/स्मार्ट कार्ड शुल्क अलग जोड़ सकता है।",
  facts: [
    ["पोर्टल", '<a href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" target="_blank" rel="noopener nofollow">sarathi.parivahan.gov.in</a>'],
    ["उम्र", "16 साल (50cc तक बिना गियर, अभिभावक की सहमति), 18 साल (गियर बाइक/कार), 20 साल (कमर्शियल)"],
    ["फीस (केंद्रीय नियम)", "LL ₹150 + टेस्ट ₹50; DL ₹200 + टेस्ट ₹300"],
    ["LL की वैधता", "6 महीने; DL टेस्ट 30 दिन बाद"],
  ],
  notice: "<strong>ध्यान दें:</strong> Sarathi पर Aadhaar वाली contactless सेवाएं तभी चलती हैं जब Aadhaar में नाम, जन्मतिथि और पिता/पति का नाम आपके रिकॉर्ड से मिलता हो। कौन सी सेवा contactless है, यह हर राज्य में अलग है। किसी एजेंट या \"घर बैठे लाइसेंस\" वाले को OTP न बताएं।",
  sections: [
    {
      id: "umar-vaidhta",
      title: "उम्र और वैधता: किसे कौन सा लाइसेंस",
      table: {
        head: ["बात", "नियम"],
        rows: [
          ["50cc तक बिना गियर वाला दोपहिया", "16 साल पूरे, माता-पिता/अभिभावक की सहमति से"],
          ["गियर वाली बाइक, कार (निजी वाहन)", "18 साल पूरे"],
          ["कमर्शियल (Transport) वाहन", "20 साल पूरे"],
          ["लर्नर लाइसेंस (LL)", "6 महीने वैध"],
          ["पक्के DL के लिए आवेदन", "LL मिलने के 30 दिन बाद, LL की वैधता के अंदर"],
          ["निजी वाहन का DL, 30 साल से कम उम्र में बना", "40 साल की उम्र तक"],
          ["निजी वाहन का DL, 30 से 50 साल की उम्र में बना", "10 साल"],
          ["निजी वाहन का DL, 50 से 55 साल की उम्र में बना", "60 साल की उम्र तक"],
          ["निजी वाहन का DL, 55 साल के बाद", "5 साल"],
          ["कमर्शियल (Transport) DL", "5 साल"],
        ],
      },
      callout: { kind: "warn", html: "वैधता मोटर वाहन अधिनियम की धारा 14 (2019 संशोधन के बाद) के अनुसार है। DL की तारीख खत्म होने के बाद बिना नवीनीकरण गाड़ी न चलाएं; समय रहते Renewal कराएं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>उम्र का प्रमाण</strong> (जैसे जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पासपोर्ट, Aadhaar)",
        "<strong>पते का प्रमाण</strong> (जैसे Aadhaar, वोटर कार्ड, पासपोर्ट, बिजली बिल)",
        "<strong>Form 1</strong>: शारीरिक फिटनेस की स्व-घोषणा (Sarathi पर फॉर्म भरते समय बनता है)",
        "<strong>Form 1A</strong>: डॉक्टर का मेडिकल सर्टिफिकेट, 40 साल से ज़्यादा उम्र या कमर्शियल लाइसेंस के लिए (Sarathi के \"Find Doctor\" में पंजीकृत डॉक्टर दिखते हैं)",
        "<strong>फोटो और हस्ताक्षर</strong> (Sarathi पर अपलोड)",
        "पक्के DL के लिए <strong>वैध लर्नर लाइसेंस</strong> नंबर",
      ],
      callout: { kind: "info", html: "अपलोड के लिए फोटो/कागज़ का साइज़ घटाना हो तो <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> इस्तेमाल करें। कौन सा कागज़ मान्य है, यह आवेदन के समय Sarathi पर दिखाई गई सूची से मिलाएं।" },
    },
    {
      id: "learner-licence",
      title: "लर्नर लाइसेंस (LL) कैसे बनवाएं",
      steps: [
        '<a href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" target="_blank" rel="noopener nofollow">sarathi.parivahan.gov.in</a> खोलें और <strong>अपना राज्य</strong> चुनें।',
        "<strong>Apply for Learner Licence</strong> चुनें। आपके राज्य में Aadhaar e-KYC (contactless) विकल्प हो तो Aadhaar से जुड़े मोबाइल पर आया OTP डालें; नहीं तो सामान्य आवेदन भरें (तब कागज़ RTO में दिखाने होंगे)।",
        "फॉर्म में नाम, पता, वाहन की श्रेणी (जैसे MCWG बाइक, LMV कार) और <strong>अपना RTO</strong> ध्यान से चुनें। Form 1 की स्व-घोषणा भरें।",
        "कागज़, फोटो और हस्ताक्षर अपलोड करें, फिर <strong>Fee Payments</strong> में ऑनलाइन फीस भरें।",
        "Sarathi पर <strong>Mock Test</strong> से तैयारी करें। टेस्ट सड़क के नियम और संकेतों पर होता है।",
        "जिन राज्यों में ऑनलाइन LL टेस्ट (STALL) है, वहां घर से टेस्ट दें; बाकी जगह <strong>LL Test Slot Booking</strong> से तारीख लेकर RTO में टेस्ट दें।",
        "पास होने पर <strong>Print Learner Licence (Form 3)</strong> से LL डाउनलोड करें।",
      ],
    },
    {
      id: "driving-licence",
      title: "पक्का ड्राइविंग लाइसेंस (DL) और ड्राइविंग टेस्ट",
      steps: [
        "LL मिलने के <strong>30 दिन बाद</strong> (और LL की 6 महीने की वैधता के अंदर) Sarathi पर <strong>Apply for Driving Licence</strong> चुनें।",
        "LL नंबर और जन्मतिथि डालें, कागज़ अपलोड करें और फीस भरें।",
        "<strong>DL Test Slot Booking</strong> से अपने RTO में ड्राइविंग टेस्ट की तारीख लें।",
        "तय दिन रसीद, LL और मूल कागज़ लेकर <strong>उसी श्रेणी के वाहन</strong> के साथ टेस्ट देने जाएं।",
        "पास होने के बाद DL डाक से आता है या RTO से मिलता है; Sarathi पर <strong>Application Status</strong> से स्थिति देखें।",
        "फेल हों तो दोबारा टेस्ट की फीस (₹300) भरकर नई तारीख लें।",
      ],
    },
    {
      id: "renewal-duplicate",
      title: "DL नवीनीकरण, डुप्लीकेट और पता बदलना",
      intro: "नवीनीकरण, डुप्लीकेट (खोया/फटा DL), पता या नाम बदलना और इंटरनेशनल ड्राइविंग परमिट (IDP): ये सब Sarathi पर अपना राज्य चुनकर <strong>Services on DL</strong> से होते हैं। DL नंबर और जन्मतिथि डालकर विवरण निकालें, सेवा चुनें, कागज़ अपलोड करें (40 साल से ऊपर नवीनीकरण पर Form 1A) और फीस भरें।",
      list: [
        "DL खत्म होने से <strong>1 साल पहले से</strong> नवीनीकरण का आवेदन किया जा सकता है।",
        "खत्म होने के <strong>1 साल से ज़्यादा</strong> बाद आवेदन करने पर फिर से ड्राइविंग टेस्ट देना पड़ सकता है, और देर की फीस अलग लगती है।",
        "डुप्लीकेट DL के लिए कई RTO पुलिस में दर्ज शिकायत/रिपोर्ट मांगते हैं।",
      ],
    },
    {
      id: "fees",
      title: "फीस (केंद्रीय मोटर वाहन नियम, नियम 32)",
      intro: "केंद्रीय मोटर वाहन नियम 1989 के नियम 32 की फीस (MoRTH अधिसूचना 29 दिसंबर 2016 से संशोधित), जैसी उत्तराखंड परिवहन विभाग की वेबसाइट पर छपी है:",
      table: {
        head: ["काम", "केंद्रीय नियम में फीस"],
        rows: [
          ["लर्नर लाइसेंस (हर वाहन श्रेणी के लिए)", "₹150"],
          ["लर्नर लाइसेंस टेस्ट / दोबारा टेस्ट", "₹50"],
          ["ड्राइविंग टेस्ट / दोबारा टेस्ट (हर वाहन श्रेणी के लिए)", "₹300"],
          ["ड्राइविंग लाइसेंस जारी करना", "₹200"],
          ["DL नवीनीकरण (Renewal)", "₹200"],
          ["देर से नवीनीकरण (grace period के बाद)", "₹300 + हर साल की देरी पर ₹1,000 अतिरिक्त"],
          ["डुप्लीकेट DL", "₹200"],
          ["DL में पता या दूसरा विवरण बदलना", "₹200"],
          ["DL में नई वाहन श्रेणी जोड़ना", "₹500"],
          ["इंटरनेशनल ड्राइविंग परमिट (IDP)", "₹1,000"],
          ["स्मार्ट कार्ड वाला DL", "₹200 अतिरिक्त"],
        ],
      },
      callout: { kind: "warn", html: "राज्य सरकार इसके ऊपर सेवा/यूज़र शुल्क या स्मार्ट कार्ड शुल्क जोड़ सकती है। असल रकम आवेदन के समय Sarathi के <strong>Fee Payments</strong> पेज पर दिखेगी।" },
    },
    {
      id: "status-download",
      title: "स्टेटस, डाउनलोड और DigiLocker",
      list: [
        "Sarathi पर <strong>Application Status</strong> में आवेदन नंबर और जन्मतिथि डालकर स्थिति देखें। नंबर भूल गए तो <strong>Find Application Number</strong> इस्तेमाल करें।",
        "पैसा कट गया पर रसीद नहीं बनी तो <strong>Verify Payment Status</strong> देखें; दोबारा भुगतान न करें।",
        "DL की डिजिटल कॉपी <a href=\"/digilocker/driving-licence.html\">DigiLocker</a> या <a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan</a> ऐप में रखी जा सकती है।",
        "शिकायत के लिए Sarathi पर <strong>File Your Grievance</strong> का विकल्प है।",
      ],
    },
    {
      id: "rajya",
      title: "अपने राज्य की ड्राइविंग लाइसेंस गाइड",
      intro: "Contactless सेवाएं, स्मार्ट कार्ड शुल्क और RTO के नियम राज्य के हिसाब से अलग हैं। अपना राज्य चुनें:",
      html: "<p><a href=\"/states/andaman-nicobar-driving-licence.html\">अंडमान और निकोबार</a> · <a href=\"/states/andhra-pradesh-driving-licence.html\">आंध्र प्रदेश</a> · <a href=\"/states/arunachal-pradesh-driving-licence.html\">अरुणाचल प्रदेश</a> · <a href=\"/states/assam-driving-licence.html\">असम</a> · <a href=\"/states/bihar-driving-licence.html\">बिहार</a> · <a href=\"/states/chandigarh-driving-licence.html\">चंडीगढ़</a> · <a href=\"/states/chhattisgarh-driving-licence.html\">छत्तीसगढ़</a> · <a href=\"/states/dadra-nagar-haveli-daman-diu-driving-licence.html\">दादरा नगर हवेली और दमन दीव</a> · <a href=\"/states/delhi-driving-licence.html\">दिल्ली</a> · <a href=\"/states/goa-driving-licence.html\">गोवा</a> · <a href=\"/states/gujarat-driving-licence.html\">गुजरात</a> · <a href=\"/states/haryana-driving-licence.html\">हरियाणा</a> · <a href=\"/states/himachal-pradesh-driving-licence.html\">हिमाचल प्रदेश</a> · <a href=\"/states/jammu-kashmir-driving-licence.html\">जम्मू-कश्मीर</a> · <a href=\"/states/jharkhand-driving-licence.html\">झारखंड</a> · <a href=\"/states/karnataka-driving-licence.html\">कर्नाटक</a> · <a href=\"/states/kerala-driving-licence.html\">केरल</a> · <a href=\"/states/ladakh-driving-licence.html\">लद्दाख</a> · <a href=\"/states/lakshadweep-driving-licence.html\">लक्षद्वीप</a> · <a href=\"/states/madhya-pradesh-driving-licence.html\">मध्य प्रदेश</a> · <a href=\"/states/maharashtra-driving-licence.html\">महाराष्ट्र</a> · <a href=\"/states/manipur-driving-licence.html\">मणिपुर</a> · <a href=\"/states/meghalaya-driving-licence.html\">मेघालय</a> · <a href=\"/states/mizoram-driving-licence.html\">मिज़ोरम</a> · <a href=\"/states/nagaland-driving-licence.html\">नागालैंड</a> · <a href=\"/states/odisha-driving-licence.html\">ओडिशा</a> · <a href=\"/states/puducherry-driving-licence.html\">पुडुचेरी</a> · <a href=\"/states/punjab-driving-licence.html\">पंजाब</a> · <a href=\"/states/rajasthan-driving-licence.html\">राजस्थान</a> · <a href=\"/states/sikkim-driving-licence.html\">सिक्किम</a> · <a href=\"/states/tamil-nadu-driving-licence.html\">तमिलनाडु</a> · <a href=\"/states/telangana-driving-licence.html\">तेलंगाना</a> · <a href=\"/states/tripura-driving-licence.html\">त्रिपुरा</a> · <a href=\"/states/uttar-pradesh-driving-licence.html\">उत्तर प्रदेश</a> · <a href=\"/states/uttarakhand-driving-licence.html\">उत्तराखंड</a> · <a href=\"/states/west-bengal-driving-licence.html\">पश्चिम बंगाल</a></p>",
    },
  ],
  official: [
    { href: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do", title: "Sarathi पोर्टल: LL/DL आवेदन (अपना राज्य चुनें)" },
    { href: "https://parivahan.gov.in/", title: "Parivahan सेवा (सड़क परिवहन और राजमार्ग मंत्रालय)" },
    { href: "https://transport.uk.gov.in/fees-structrure/", title: "केंद्रीय नियम 32 की लाइसेंस फीस तालिका (उत्तराखंड परिवहन विभाग की प्रति)" },
  ],
  faq: [
    { q: "ड्राइविंग लाइसेंस ऑनलाइन कहां बनता है?", a: "केंद्र सरकार के Sarathi पोर्टल sarathi.parivahan.gov.in पर, जहां अपना राज्य चुनना होता है। पक्के DL के लिए ड्राइविंग टेस्ट RTO में ही होता है।" },
    { q: "लर्नर और ड्राइविंग लाइसेंस की फीस कितनी है?", a: "केंद्रीय नियम 32 के अनुसार LL ₹150 (हर वाहन श्रेणी) + LL टेस्ट ₹50, ड्राइविंग टेस्ट ₹300 (हर श्रेणी) और DL जारी करना ₹200। स्मार्ट कार्ड और राज्य के सेवा शुल्क अलग हो सकते हैं।" },
    { q: "LL मिलने के कितने दिन बाद DL टेस्ट दे सकते हैं?", a: "LL मिलने के 30 दिन बाद और LL की 6 महीने की वैधता के अंदर।" },
    { q: "DL एक्सपायर हो गया, अब क्या करें?", a: "Sarathi पर नवीनीकरण का आवेदन करें। खत्म होने के 1 साल के अंदर आवेदन पर सामान्य नवीनीकरण होता है; ज़्यादा देर पर ड्राइविंग टेस्ट दोबारा देना पड़ सकता है और देर की फीस लगती है।" },
    { q: "क्या लर्नर लाइसेंस घर से बन सकता है?", a: "कई राज्यों में Sarathi पर Aadhaar e-KYC और ऑनलाइन टेस्ट (STALL) से लर्नर लाइसेंस बिना RTO जाए बनता है। आपके राज्य में यह विकल्प है या नहीं, Sarathi पर राज्य चुनकर देखें या अपने राज्य की गाइड पढ़ें।" },
  ],
  related: [
    { href: "/digilocker/driving-licence.html", emoji: "📲", title: "DigiLocker में ड्राइविंग लाइसेंस", text: "डिजिटल कॉपी रखें" },
    { href: "/service/mparivahan-virtual-rc-dl.html", emoji: "📱", title: "mParivahan वर्चुअल DL/RC", text: "मोबाइल में DL" },
    { href: "/service/smart-card-driving-license.html", emoji: "💳", title: "स्मार्ट कार्ड ड्राइविंग लाइसेंस", text: "कार्ड वाला DL" },
    { href: "/service/vehicle-registration-certificate.html", emoji: "🚗", title: "वाहन RC", text: "रजिस्ट्रेशन सर्टिफिकेट" },
    { href: "/challan/e-challan-status-check.html", emoji: "🚦", title: "ई-चालान स्टेटस", text: "चालान देखें और भरें" },
    { href: "/tools/photo-resizer.html", emoji: "🗜️", title: "फोटो रिसाइज़र", text: "अपलोड के साइज़ में, फ्री" },
  ],
  aside: [
    { href: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do", label: "📝 Sarathi पर आवेदन करें" },
    { href: "#rajya", label: "🗺️ अपने राज्य की गाइड" },
  ],
};
