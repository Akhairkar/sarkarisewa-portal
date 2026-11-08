import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 8 Nov 2026): PIB release of 5 Dec 2025 (PRID=2199453, Rajya Sabha
// reply, Ministry of Food Processing Industries; figures as of 31 Oct 2025): credit-
// linked capital subsidy 35% of eligible project cost capped at ₹10 lakh per unit;
// seed capital ₹40,000 per SHG member capped at ₹4 lakh per SHG federation; common
// infrastructure 35% capped at ₹3 crore; branding and marketing grant up to 50%;
// training via EDP; 1,62,744 loans sanctioned, 3,65,935 SHG members approved for seed
// capital, 101 common-infrastructure proposals, 76 incubation centres, 27 branding
// proposals. Official PMFME FAQ PDF (pmfme.mofpi.gov.in/massets/documents/login/
// login_faq.pdf): applicant above 18 and at least class VIII pass; owns a
// proprietorship or partnership; unincorporated; fewer than 10 workers; micro
// enterprise limits plant/machinery ≤ ₹1 crore and turnover ≤ ₹5 crore; own
// contribution 10%; apply by registering on the PMFME portal, district-level
// applications on an ongoing basis, then District Resource Person, District Level
// Committee, bank decision; subsidy credited only after loan sanction and EMIs must
// be paid on time for 3 years with the unit operational; group applications go
// through the State Nodal Agency, and MoFPI too for subsidy above ₹10 lakh; new units
// supported only for ODOP products, with preference to the district's ODOP; DRPs help
// with DPR and FSSAI/Udyam/GST; help email support-pmfme@mofpi.gov.in. The scheme
// period, total outlay, the bank loan share and a documents list are NOT stated in
// these sources.
export const pmfmeMicroFoodProcessingSubsidy: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "PMFME योजना (फूड प्रोसेसिंग सब्सिडी)" },
  ],
  docHi: "PMFME योजना",
  promo: gstinPromo,
  title: "PMFME योजना 2026: फूड प्रोसेसिंग पर 35% सब्सिडी",
  description: "PM-FME योजना: सूक्ष्म फूड प्रोसेसिंग यूनिट के लिए 35% क्रेडिट-लिंक्ड सब्सिडी (अधिकतम ₹10 लाख), कौन पात्र है, 10% अपना हिस्सा, आवेदन के कदम और ज़रूरी शर्तें।",
  published: "2026-11-08",
  modified: "2026-11-08",
  verified: "8 नवंबर 2026",
  h1: "PMFME योजना 2026: फूड प्रोसेसिंग यूनिट पर 35% सब्सिडी, पात्रता और आवेदन कैसे करें",
  lead: "प्रधानमंत्री सूक्ष्म खाद्य प्रसंस्करण उद्यम औपचारिकीकरण योजना (PMFME) में अचार, मसाले, आटा, दाल, मिठाई जैसी छोटी फूड प्रोसेसिंग यूनिट लगाने या बढ़ाने के लिए बैंक लोन से जुड़ी 35% सब्सिडी मिलती है, अधिकतम ₹10 लाख प्रति यूनिट। इस गाइड में पात्रता, अपना हिस्सा, आवेदन के कदम और सब्सिडी मिलने की शर्तें आधिकारिक PIB जानकारी और PMFME FAQ से दी गई हैं।",
  facts: [
    ["सब्सिडी", "परियोजना लागत का 35%, अधिकतम ₹10 लाख प्रति यूनिट"],
    ["अपना हिस्सा", "परियोजना लागत का 10%"],
    ["उम्र और पढ़ाई", "18 साल से ऊपर, कम से कम 8वीं पास"],
    ["आवेदन", "PMFME पोर्टल पर पंजीकरण, फिर ज़िले की समिति और बैंक"],
  ],
  notice: "<strong>ध्यान रखें:</strong> सब्सिडी बैंक लोन मंज़ूर होने के बाद ही मिलती है, और यूनिट चालू रखकर 3 साल तक EMI समय पर चुकानी होती है। योजना की अवधि और बैंक के लोन का हिस्सा हमें आधिकारिक स्रोत से नहीं मिला, इसलिए बैंक से पूछ लें।",
  sections: [
    {
      id: "fayde",
      title: "PMFME में क्या-क्या मिलता है",
      table: {
        head: ["सहायता", "राशि और शर्त"],
        rows: [
          ["व्यक्तिगत या समूह की सूक्ष्म यूनिट", "परियोजना लागत का 35% क्रेडिट-लिंक्ड पूंजी सब्सिडी, अधिकतम ₹10 लाख प्रति यूनिट"],
          ["SHG सदस्यों को सीड कैपिटल", "₹40,000 प्रति सदस्य (खाद्य प्रसंस्करण में लगे), अधिकतम ₹4 लाख प्रति SHG फ़ेडरेशन"],
          ["साझा ढांचा (FPO, SHG, सहकारी समितियां, सरकारी एजेंसियां)", "35% सब्सिडी, अधिकतम ₹3 करोड़"],
          ["ब्रांडिंग और मार्केटिंग", "FPO, SHG या सहकारी समितियों के समूह को अधिकतम 50% अनुदान"],
          ["प्रशिक्षण", "उद्यमिता विकास कार्यक्रम (EDP) और उत्पाद-विशेष कौशल प्रशिक्षण"],
        ],
      },
    },
    {
      id: "patrata",
      title: "व्यक्तिगत आवेदक के लिए पात्रता",
      list: [
        "आवेदक की उम्र <strong>18 साल से ऊपर</strong> हो और कम से कम <strong>8वीं पास</strong> हो।",
        "आवेदक उद्यम का मालिक हो; उद्यम <strong>प्रोप्राइटरशिप या साझेदारी फ़र्म</strong> हो।",
        "उद्यम <strong>असंगठित (unincorporated)</strong> हो और उसमें <strong>10 से कम कर्मचारी</strong> हों।",
        "सूक्ष्म उद्यम की परिभाषा के अनुसार प्लांट और मशीनरी में निवेश <strong>₹1 करोड़ से ज़्यादा न</strong> हो और सालाना टर्नओवर <strong>₹5 करोड़ से ज़्यादा न</strong> हो।",
        "आपको परियोजना लागत का <strong>10% खुद लगाना</strong> होगा।",
      ],
      callout: { kind: "info", html: "<strong>नई यूनिट:</strong> नई यूनिट को भी मदद मिल सकती है, पर सिर्फ़ <strong>ODOP उत्पादों</strong> के लिए। पुरानी यूनिट के उन्नयन में ODOP ज़रूरी नहीं है, पर अपने ज़िले के ODOP उत्पाद वाली यूनिट को प्राथमिकता मिलती है।" },
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>PMFME पोर्टल</strong> पर पंजीकरण करें और आवेदन जमा करें। व्यक्तिगत आवेदन ज़िला स्तर पर लगातार लिए जाते हैं।",
        "<strong>ज़िला संसाधन व्यक्ति (DRP)</strong> आवेदन को आगे बढ़ाता है। DRP परियोजना रिपोर्ट (DPR) बनाने और FSSAI, उद्यम और GST जैसे पंजीकरण में मदद करता है।",
        "<strong>ज़िला स्तरीय समिति (DLC)</strong> आवेदन की जांच करती है।",
        "आपका बैंक लोन देने का फ़ैसला करता है।",
        "लोन मंज़ूर होने के बाद ही सब्सिडी आपके खाते में आती है।",
      ],
      callout: { kind: "warn", html: "समूह (FPO, SHG, सहकारी समितियां) के आवेदन राज्य नोडल एजेंसी (SNA) से होकर जाते हैं, और ₹10 लाख से ज़्यादा की सब्सिडी पर खाद्य प्रसंस्करण उद्योग मंत्रालय भी देखता है। दस्तावेज़ों की सूची आधिकारिक FAQ में नहीं दी गई है; DRP या बैंक से मांग लें।" },
    },
    {
      id: "shart",
      title: "सब्सिडी मिलने की शर्तें",
      list: [
        "सब्सिडी <strong>क्रेडिट-लिंक्ड</strong> है: पहले बैंक लोन मंज़ूर होना ज़रूरी है।",
        "लाभार्थी को <strong>3 साल तक EMI समय पर</strong> चुकानी होती है और यूनिट चालू रखनी होती है।",
        "ब्याज दर और लोन की अवधि आधिकारिक पेज पर नहीं दी गई है; ये बैंक के नियमों पर निर्भर हैं।",
        "मदद के लिए आधिकारिक ईमेल: support-pmfme@mofpi.gov.in।",
      ],
    },
    {
      id: "aankde",
      title: "अब तक का काम (31 अक्टूबर 2025 तक)",
      list: [
        "<strong>1,62,744</strong> लोन क्रेडिट-लिंक्ड सब्सिडी के लिए मंज़ूर",
        "<strong>3,65,935</strong> SHG सदस्यों को सीड कैपिटल की मंज़ूरी",
        "साझा ढांचे के <strong>101</strong> प्रस्ताव मंज़ूर, <strong>76</strong> इनक्यूबेशन सेंटर मंज़ूर",
        "ब्रांडिंग और मार्केटिंग के <strong>27</strong> प्रस्ताव मंज़ूर",
      ],
    },
  ],
  official: [
    { href: "https://pmfme.mofpi.gov.in/", title: "PMFME पोर्टल (पंजीकरण)" },
    { href: "https://pmfme.mofpi.gov.in/massets/documents/login/login_faq.pdf", title: "PMFME FAQ (आधिकारिक PDF)" },
    { href: "https://www.mofpi.gov.in/schemes/pmfme", title: "खाद्य प्रसंस्करण उद्योग मंत्रालय: PMFME" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2199453&reg=3&lang=1", title: "PIB: PMFME (5 दिसंबर 2025)" },
  ],
  faq: [
    { q: "PMFME में कितनी सब्सिडी मिलती है?", a: "परियोजना लागत का 35%, अधिकतम ₹10 लाख प्रति यूनिट। यह बैंक लोन से जुड़ी सब्सिडी है, यानी लोन मंज़ूर होने के बाद मिलती है।" },
    { q: "अपना कितना पैसा लगाना होगा?", a: "परियोजना लागत का 10%।" },
    { q: "क्या पढ़ाई की कोई शर्त है?", a: "हां, आवेदक कम से कम 8वीं पास होना चाहिए और उम्र 18 साल से ऊपर होनी चाहिए।" },
    { q: "क्या नई फूड प्रोसेसिंग यूनिट के लिए भी सब्सिडी मिलती है?", a: "हां, पर सिर्फ़ ODOP उत्पादों के लिए। पहले से चल रही यूनिट के उन्नयन में ODOP की शर्त नहीं है, पर ज़िले के ODOP उत्पाद को प्राथमिकता मिलती है।" },
    { q: "सब्सिडी कब मिलती है?", a: "बैंक लोन मंज़ूर होने के बाद। लाभार्थी को यूनिट चालू रखकर 3 साल तक EMI समय पर चुकानी होती है।" },
    { q: "आवेदन में कौन मदद करता है?", a: "ज़िला संसाधन व्यक्ति (DRP), जो परियोजना रिपोर्ट बनाने और FSSAI, उद्यम और GST पंजीकरण में सहायता करता है। मदद के लिए support-pmfme@mofpi.gov.in पर भी लिख सकते हैं।" },
  ],
  related: [
    { href: "/service/udyam-registration.html", emoji: "📝", title: "उद्यम रजिस्ट्रेशन", text: "MSME पंजीकरण, मुफ़्त" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "छोटे कारोबार का लोन" },
    { href: "/service/pmegp-loan-yojana.html", emoji: "🏭", title: "PMEGP लोन योजना", text: "सब्सिडी वाला उद्यम लोन" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🛡️", title: "CGTMSE लोन गारंटी", text: "बिना जमानत लोन का कवर" },
    { href: "/states/uttar-pradesh-mudra-loan.html", emoji: "🏭", title: "यूपी ODOP और 75 ज़िले", text: "ज़िलेवार ODOP उत्पाद" },
  ],
  aside: [
    { href: "https://pmfme.mofpi.gov.in/", label: "🍽️ PMFME पोर्टल" },
    { href: "https://pmfme.mofpi.gov.in/massets/documents/login/login_faq.pdf", label: "📄 आधिकारिक FAQ" },
  ],
};
