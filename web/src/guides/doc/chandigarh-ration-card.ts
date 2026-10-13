import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - chdfood.gov.in (Department of Food & Supplies and Consumer Affairs & Legal
//   Metrology, Chandigarh Administration; last modified 26-08-2026):
//   * Home/Mission: the department manages the Direct Benefit Transfer Scheme
//     for foodgrains in Chandigarh.
//   * Direct Benefit Transfer Scheme page: "Food Subsidy amount for the month
//     of July, 2026 has been released on 01.07.2026"; subsidy rates from July
//     2026 Rs 186.07 per person (Priority Households) and Rs 1302.49 per family
//     (AAY households); month-wise list of DBT households.
//   * CBDC page: on 14 Aug 2026 CBDC (Digital Rupee)-based DBT under PMGKAY
//     launched in Chandigarh (first UT at full scale; also Dadra & Nagar
//     Haveli); subsidy credited to a Digital Rupee wallet as purpose-bound
//     CBDC tokens usable only to buy entitled foodgrains from empanelled
//     merchants; QR payments, OTP mechanism for feature-phone users.
//   * Schemes: AAY enrolment (family gross annual income up to Rs 60,000 from
//     all sources; documents: signed application form, self-attested residence
//     proof (Voter ID, Aadhaar, electricity/water/BSNL bill, rent agreement,
//     house allotment, passport), Aadhaar of all members with Chandigarh
//     address, Aadhaar-linked bank account of applicant, old ration card if
//     any, two family group photographs); Addition of members (self-attested
//     form, 2 photos of all members, birth certificate for a minor, Aadhaar);
//     Deletion (form, two photos of remaining members, death certificate);
//     Change of address (form, two family photos, any 2 residence proofs);
//     Surrender (original DBT card with attested form). "PH Category" page
//     has no content.
//   * Contact Us: 0172-2703956; toll-free 1800-180-2068; consumer helpline
//     1800-180-2079; helpline 1967; office: Annexe to Municipal Corporation
//     Building, Sector 17. File Grievance: pgportal.gov.in, nfsa.gov.in,
//     ch.smartpds.nic.in. NFSA page: DGRO = Additional Deputy Commissioner,
//     Estate Office Building, Sector 17, 0172-2700218.
// - nfsa.gov.in/State/CH: schemes AAY and PHH(NFSA); Total FPS 0; 83,446 cards
//   (AAY 283, PHH 83,163); helpdesk 1967 and 18001802068; RCMS
//   epds.nic.in/CHD/epds (404 on our check); AePDS epos.nic.in/chd.
// - News (Aug 2026: newsonair.gov.in, ThePrint, Upstox): CBDC-based DBT for
//   PMGKAY launched 14 Aug 2026 in Chandigarh and Dadra & Nagar Haveli;
//   Chandigarh moved to cash DBT into Aadhaar-linked bank accounts in 2015.
// Left out: PHH income criteria (department page empty), whether every
// household has moved from bank DBT to the e-rupee wallet, the list of
// empanelled merchants, fees and time limits, and ONORC use of Chandigarh
// cards in other states.
export const chandigarhRationCard: DocGuide = {
  state: { slug: "chandigarh", hi: "चंडीगढ़" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Chandigarh Ration Card 2026: Apply & Status",
  description: "चंडीगढ़ राशन कार्ड (DBT कार्ड) 2026: अनाज की जगह सब्सिडी के पैसे, अगस्त 2026 से डिजिटल रुपया (e₹) वॉलेट, AAY/PHH, नाम जोड़ने के कागज़ और हेल्पलाइन 1800-180-2068।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "चंडीगढ़ राशन कार्ड 2026: DBT सब्सिडी, डिजिटल रुपया वॉलेट, आवेदन और नाम जोड़ना",
  lead: "चंडीगढ़ में <strong>सरकारी राशन की दुकानें नहीं हैं</strong>। यहां NFSA कार्ड वालों को अनाज की जगह <strong>खाद्य सब्सिडी का पैसा (DBT)</strong> मिलता है। विभाग के अनुसार <strong>14 अगस्त 2026</strong> से यह सब्सिडी <strong>डिजिटल रुपया (e₹) वॉलेट</strong> में भेजने की व्यवस्था शुरू हुई है, जिससे सूचीबद्ध दुकानदारों से अनाज खरीदा जाता है।",
  facts: [
    ["कुल कार्ड", "83,446 (NFSA पोर्टल)"],
    ["PHH सब्सिडी", "₹186.07 प्रति व्यक्ति/माह (जुलाई 2026)"],
    ["AAY सब्सिडी", "₹1,302.49 प्रति परिवार/माह (जुलाई 2026)"],
    ["हेल्पलाइन", "1800-180-2068, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> e₹ वॉलेट में आई सब्सिडी <strong>सिर्फ हक वाला अनाज खरीदने</strong> में इस्तेमाल हो सकती है, वह भी विभाग के सूचीबद्ध (empanelled) दुकानदारों से। आपको पैसा बैंक खाते में आएगा या e₹ वॉलेट में, और नज़दीकी सूचीबद्ध दुकान कौन सी है, यह 1800-180-2068 पर पूछें।",
  sections: [
    {
      id: "dbt",
      title: "चंडीगढ़ में राशन कैसे मिलता है: DBT और डिजिटल रुपया",
      intro: "NFSA पोर्टल पर चंडीगढ़ में <strong>राशन की दुकानों की संख्या 0</strong> दर्ज है। समाचार रिपोर्टों के अनुसार चंडीगढ़ 2015 से अनाज की जगह सब्सिडी सीधे आधार से जुड़े बैंक खाते में भेज रहा है। विभाग की वेबसाइट के अनुसार:",
      list: [
        "जुलाई 2026 की खाद्य सब्सिडी <strong>01.07.2026</strong> को जारी हुई।",
        "जुलाई 2026 से दर: <strong>PHH: ₹186.07 प्रति व्यक्ति</strong> और <strong>AAY: ₹1,302.49 प्रति परिवार</strong> (हर महीने)।",
        "<strong>14 अगस्त 2026</strong> को प्रधानमंत्री गरीब कल्याण अन्न योजना (PMGKAY) के तहत <strong>CBDC (डिजिटल रुपया) आधारित DBT</strong> शुरू हुआ। सब्सिडी e₹ वॉलेट में टोकन के रूप में आती है।",
        "यह पैसा <strong>सिर्फ हक वाला अनाज</strong> खरीदने के लिए है, <strong>सूचीबद्ध दुकानदारों</strong> से। भुगतान QR कोड स्कैन करके होता है; साधारण (कीपैड) फोन वालों के लिए <strong>OTP</strong> से भुगतान की सुविधा है।",
      ],
      callout: { kind: "info", html: "विभाग की वेबसाइट पर हर महीने की <strong>DBT लाभार्थी परिवारों की सूची</strong> (Month wise List of DBT Households) दी जाती है। सब्सिडी की दर बदल सकती है; नई दर <a href=\"https://chdfood.gov.in/index.php/direct-benefit-transfer-scheme/\" target=\"_blank\" rel=\"noopener nofollow\">DBT पेज</a> पर देखें।" },
    },
    {
      id: "prakar",
      title: "कार्ड के प्रकार और संख्या",
      intro: "NFSA पोर्टल के अनुसार चंडीगढ़ में <strong>83,446 कार्ड</strong> हैं:",
      table: {
        head: ["कार्ड", "संख्या", "किसे"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "283", "विभाग के अनुसार जिस परिवार की <strong>सभी स्रोतों से कुल सालाना आय ₹60,000 तक</strong> हो"],
          ["<strong>प्राथमिकता वाले परिवार (PHH)</strong>", "83,163", "NFSA के तहत चुने गए परिवार; आय सीमा विभाग से पूछें"],
        ],
      },
      callout: { kind: "warn", html: "विभाग की वेबसाइट पर PHH श्रेणी का पेज खाली है, इसलिए PHH की आय सीमा और शर्तें हम पक्की नहीं कर पाए। आवेदन से पहले विभाग (0172-2703956) से पूछ लें।" },
    },
    {
      id: "avedan",
      title: "नया कार्ड (AAY): आवेदन के कागज़",
      intro: "विभाग की वेबसाइट पर अंत्योदय कार्ड के लिए ये कागज़ लिखे हैं:",
      list: [
        "हस्ताक्षर किया हुआ <strong>आवेदन फॉर्म</strong>",
        "<strong>निवास का प्रमाण</strong> (खुद सत्यापित): वोटर ID, आधार, बिजली/पानी/BSNL लैंडलाइन बिल, किराया अनुबंध, मकान आवंटन पत्र या पासपोर्ट में से कोई",
        "परिवार के <strong>सभी सदस्यों का आधार</strong>, जिस पर चंडीगढ़ का पता हो",
        "आवेदक के <strong>आधार से जुड़े बैंक खाते</strong> की कॉपी",
        "पुराना राशन कार्ड, अगर बना था",
        "परिवार की <strong>दो ग्रुप फोटो</strong>",
      ],
      callout: { kind: "info", html: "चंडीगढ़ में राशन कार्ड का कोई ऑनलाइन आवेदन पोर्टल हमें विभाग की वेबसाइट पर नहीं मिला। फॉर्म और जमा करने की जगह के लिए विभाग के दफ्तर (<strong>नगर निगम भवन का एनेक्सी, सेक्टर 17</strong>) में या 0172-2703956 पर पूछें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना, पता बदलना और कार्ड सरेंडर",
      table: {
        head: ["काम", "ज़रूरी कागज़ (विभाग के अनुसार)"],
        rows: [
          ["<strong>सदस्य जोड़ना</strong>", "खुद सत्यापित आवेदन फॉर्म, सभी सदस्यों की 2 नई रंगीन पासपोर्ट फोटो, नाबालिग के लिए जन्म प्रमाण पत्र, आधार"],
          ["<strong>सदस्य हटाना</strong>", "खुद सत्यापित आवेदन फॉर्म, बाकी सदस्यों की दो फोटो, मृत्यु होने पर मृत्यु प्रमाण पत्र"],
          ["<strong>पता बदलना</strong>", "खुद सत्यापित आवेदन फॉर्म, परिवार की दो पासपोर्ट साइज़ ग्रुप फोटो, निवास के कोई 2 प्रमाण"],
          ["<strong>कार्ड सरेंडर</strong> (सरेंडर सर्टिफिकेट)", "<strong>मूल DBT कार्ड</strong> और सत्यापित आवेदन फॉर्म"],
        ],
      },
    },
    {
      id: "ekyc",
      title: "आधार, बैंक खाता और e-KYC",
      list: [
        "सब्सिडी आवेदक के <strong>आधार से जुड़े बैंक खाते</strong> या e₹ वॉलेट में आती है, इसलिए खाता चालू और आधार से जुड़ा रखें।",
        "परिवार के हर सदस्य का आधार कार्ड से जुड़ा होना चाहिए। e-KYC या आधार की दिक्कत के लिए विभाग की हेल्पलाइन पर पूछें।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार) पर NFSA कार्ड का विवरण देखा जा सकता है।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-180-2068</strong>: विभाग का टोल-फ्री नंबर (NFSA पोर्टल पर भी दर्ज)",
        "<strong>1967</strong>: खाद्य विभाग की हेल्पलाइन",
        "<strong>0172-2703956</strong>: विभाग का दफ्तर, सेक्टर 17",
        "<strong>1800-180-2079</strong>: उपभोक्ता हेल्पलाइन",
        "<strong>शिकायत अधिकारी (DGRO):</strong> अतिरिक्त उपायुक्त (ADC), एस्टेट ऑफिस बिल्डिंग, सेक्टर 17, फोन 0172-2700218",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a> (विभाग की वेबसाइट पर दिया गया)',
      ],
    },
  ],
  official: [
    { href: "https://chdfood.gov.in/", title: "खाद्य एवं आपूर्ति विभाग, चंडीगढ़ प्रशासन" },
    { href: "https://chdfood.gov.in/index.php/direct-benefit-transfer-scheme/", title: "DBT योजना: सब्सिडी की दर और लाभार्थी सूची" },
    { href: "https://chdfood.gov.in/index.php/cbdc/", title: "CBDC (डिजिटल रुपया) आधारित DBT की जानकारी" },
    { href: "https://nfsa.gov.in/State/CH", title: "NFSA पोर्टल: चंडीगढ़ का पेज" },
  ],
  faq: [
    { q: "चंडीगढ़ में राशन की दुकान क्यों नहीं है?", a: "चंडीगढ़ में NFSA कार्ड वालों को अनाज की जगह खाद्य सब्सिडी का पैसा (DBT) मिलता है। NFSA पोर्टल पर यहां राशन दुकानों की संख्या 0 दर्ज है।" },
    { q: "चंडीगढ़ राशन कार्ड पर कितने पैसे मिलते हैं?", a: "विभाग के अनुसार जुलाई 2026 से PHH कार्ड पर ₹186.07 प्रति व्यक्ति और AAY कार्ड पर ₹1,302.49 प्रति परिवार हर महीने। दर बदल सकती है; नई दर विभाग के DBT पेज पर देखें।" },
    { q: "डिजिटल रुपया (e₹) वाली सब्सिडी क्या है?", a: "14 अगस्त 2026 से चंडीगढ़ में सब्सिडी डिजिटल रुपया वॉलेट में टोकन के रूप में भेजने की शुरुआत हुई। यह पैसा सिर्फ हक वाला अनाज खरीदने में, सूचीबद्ध दुकानदारों से, QR कोड या OTP से खर्च होता है।" },
    { q: "चंडीगढ़ में अंत्योदय (AAY) कार्ड किसे मिलता है?", a: "विभाग के अनुसार जिस परिवार की सभी स्रोतों से कुल सालाना आय ₹60,000 तक है। आवेदन फॉर्म के साथ निवास प्रमाण, सभी सदस्यों का आधार, आधार से जुड़ा बैंक खाता और दो ग्रुप फोटो लगती हैं।" },
    { q: "राशन कार्ड में नाम कैसे जुड़वाएं?", a: "खुद सत्यापित आवेदन फॉर्म, सभी सदस्यों की 2 पासपोर्ट फोटो, नए सदस्य का आधार और नाबालिग के लिए जन्म प्रमाण पत्र लेकर सेक्टर 17 के विभाग के दफ्तर में आवेदन करें।" },
    { q: "चंडीगढ़ राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1800-180-2068, हेल्पलाइन 1967 और दफ्तर का नंबर 0172-2703956।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/chandigarh-income-certificate.html", emoji: "💰", title: "चंडीगढ़ आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/chandigarh-domicile-certificate.html", emoji: "🏠", title: "चंडीगढ़ निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/chandigarh-labour-card.html", emoji: "👷", title: "चंडीगढ़ लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बैंक खाते से जोड़ना" },
    { href: "/states/punjab-ration-card.html", emoji: "📋", title: "पंजाब राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://chdfood.gov.in/index.php/direct-benefit-transfer-scheme/", label: "💸 DBT सब्सिडी की दर" },
    { href: "https://chdfood.gov.in/", label: "🏛️ खाद्य विभाग चंडीगढ़" },
  ],
};
