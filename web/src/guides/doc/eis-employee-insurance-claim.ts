import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; esic.gov.in could not be opened from this
// sandbox, so figures come from search extracts that quote ESIC's benefit
// tables and the ESI Act/regulations):
// - Vikaspedia "ESIC eligibility in India" and other extracts: coverage for
//   monthly wages up to ₹21,000 (₹25,000 for persons with disability);
//   contribution 0.75% employee / 3.25% employer (since July 2019);
//   sickness benefit 70% of average daily wages up to 91 days a year;
//   extended sickness benefit 80% for listed long-term diseases up to 2
//   years; funeral expenses ₹15,000 (ESIC benefit table, per extracts).
// - Maternity benefit 26 weeks of full wages (ESI regulations; widely cited).
// - ESIC toll-free 1800-11-2526 (consistent across sources; scope wording
//   varies); grievances can also go to pgportal.gov.in.
// Not used from the old page: helpline "1800-11-0001 / 1947" (not ESIC),
// "15-21 दिन" processing time, "apply with Aadhaar OTP" (not how ESIC claims
// work). Disablement/dependants' percentages and unemployment allowance
// (ABVKY) terms were left general because the current terms could not be
// confirmed on an official page.
export const eisEmployeeInsuranceClaim: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "ESIC दावा" },
  ],
  docHi: "ESIC दावा",
  title: "ईएसआई कर्मचारी राज्य बीमा दावा (ESIC Claim Portal)",
  description: "ESIC (कर्मचारी राज्य बीमा) के फायदे और दावा: मुफ्त इलाज, बीमारी भत्ता, मातृत्व लाभ, दुर्घटना/अपंगता लाभ, कौन कवर है, दावा कहां करें और हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ESIC दावा: बीमारी भत्ता, मातृत्व लाभ, अपंगता और मुफ्त इलाज कैसे लें",
  lead: "कर्मचारी राज्य बीमा निगम (ESIC) केंद्र सरकार के श्रम मंत्रालय के तहत काम करता है। जिन कर्मचारियों का मासिक वेतन <strong>₹21,000 तक</strong> (दिव्यांग कर्मचारी ₹25,000 तक) है और जिनकी कंपनी ESI में पंजीकृत है, उन्हें और उनके परिवार को ESI अस्पताल/डिस्पेंसरी में इलाज के साथ बीमारी, मातृत्व और काम पर चोट जैसी हालत में नकद लाभ मिलता है। नकद लाभ का दावा अपने <strong>ESIC शाखा कार्यालय</strong> के ज़रिए होता है और पैसा सीधे बैंक खाते में आता है।",
  facts: [
    ["वेबसाइट", '<a href="https://www.esic.gov.in/" target="_blank" rel="noopener nofollow">esic.gov.in</a>'],
    ["कौन कवर", "ESI वाली कंपनी, वेतन ₹21,000/माह तक"],
    ["अंशदान", "कर्मचारी 0.75%, नियोक्ता 3.25%"],
    ["टोल-फ्री", "1800-11-2526"],
  ],
  sections: [
    {
      id: "fayde",
      title: "ESIC में कौन-कौन से लाभ हैं",
      table: {
        head: ["लाभ", "क्या मिलता है"],
        rows: [
          ["चिकित्सा लाभ", "बीमित कर्मचारी (IP) और परिवार का ESI डिस्पेंसरी/अस्पताल में इलाज"],
          ["बीमारी भत्ता (Sickness Benefit)", "औसत दैनिक वेतन का 70%, साल में अधिकतम 91 दिन"],
          ["विस्तारित बीमारी लाभ", "सूचीबद्ध लंबी बीमारियों में 80%, अधिकतम 2 साल तक"],
          ["मातृत्व लाभ", "26 हफ्ते तक पूरा वेतन (शर्तों के साथ)"],
          ["अपंगता लाभ (काम पर चोट)", "अस्थायी अपंगता में ठीक होने तक, स्थायी अपंगता में हर महीने भुगतान; दर मेडिकल बोर्ड के आकलन से तय"],
          ["आश्रितजन लाभ", "काम पर चोट से मृत्यु होने पर आश्रितों को मासिक भुगतान"],
          ["अंत्येष्टि खर्च", "₹15,000"],
        ],
      },
      callout: { kind: "info", html: "बीमारी भत्ते के लिए तय अवधि में न्यूनतम दिनों का अंशदान ज़रूरी है (आम तौर पर 78 दिन बताया जाता है)। आपके मामले में पात्रता शाखा कार्यालय तय करता है।" },
    },
    {
      id: "daawa",
      title: "नकद लाभ का दावा कैसे करें",
      steps: [
        "बीमार होने या चोट लगने पर पहले अपनी <strong>ESI डिस्पेंसरी/अस्पताल</strong> में इलाज कराएं और डॉक्टर से <strong>मेडिकल सर्टिफिकेट</strong> लें। बीमारी भत्ता इसी सर्टिफिकेट से बनता है।",
        "काम पर चोट हो तो नियोक्ता से <strong>दुर्घटना की रिपोर्ट</strong> ESIC को भिजवाएं।",
        "मेडिकल सर्टिफिकेट, ESI नंबर (IP नंबर/ई-पहचान कार्ड) और बैंक खाते की जानकारी के साथ अपने <strong>शाखा कार्यालय</strong> में दावा जमा करें।",
        "मंज़ूरी के बाद पैसा आपके बैंक खाते में आता है। बैंक खाता और आधार ESIC रिकॉर्ड में सही होना चाहिए।",
      ],
      callout: { kind: "warn", html: "ESIC का दावा किसी निजी एजेंट से न करवाएं। फॉर्म और मदद शाखा कार्यालय में मुफ्त मिलती है।" },
    },
    {
      id: "kagaz",
      title: "दावे के लिए आम तौर पर क्या चाहिए",
      list: [
        "ESI ई-पहचान कार्ड / IP नंबर।",
        "ESI डॉक्टर का मेडिकल सर्टिफिकेट (बीमारी/मातृत्व के लिए)।",
        "काम पर चोट में नियोक्ता की दुर्घटना रिपोर्ट।",
        "बैंक खाते की जानकारी (पासबुक/कैंसिल चेक) और आधार।",
        "मृत्यु के मामले में मृत्यु प्रमाण पत्र और आश्रित होने का सबूत।",
      ],
    },
    {
      id: "dikkat",
      title: "दावा अटके तो क्या करें",
      list: [
        "पहले अपने <strong>शाखा कार्यालय के प्रबंधक</strong> से मिलें और लिखित में पूछें कि क्या कमी है।",
        "ESIC टोल-फ्री <strong>1800-11-2526</strong> पर कॉल करें।",
        '<a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a> (CPGRAMS) पर ESIC के खिलाफ शिकायत दर्ज कर सकते हैं।',
        "नियोक्ता ने अंशदान जमा नहीं किया है तो यह बात भी शाखा कार्यालय को बताएं।",
      ],
    },
  ],
  official: [
    { href: "https://www.esic.gov.in/", title: "कर्मचारी राज्य बीमा निगम (ESIC)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "ESIC में कौन कवर होता है?", a: "ESI में पंजीकृत कंपनी/संस्थान का वह कर्मचारी जिसका मासिक वेतन ₹21,000 तक है (दिव्यांग कर्मचारी ₹25,000 तक)।" },
    { q: "ESIC में बीमारी भत्ता कितना मिलता है?", a: "औसत दैनिक वेतन का 70%, साल में अधिकतम 91 दिन, ESI डॉक्टर के मेडिकल सर्टिफिकेट के आधार पर।" },
    { q: "ESIC में मातृत्व लाभ कितना है?", a: "शर्तें पूरी होने पर 26 हफ्ते तक पूरा वेतन।" },
    { q: "ESIC में अंत्येष्टि के लिए कितना पैसा मिलता है?", a: "बीमित व्यक्ति की मृत्यु पर अंतिम संस्कार के खर्च के लिए ₹15,000।" },
    { q: "ESIC का हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1800-11-2526। दावा जमा करने और उसकी स्थिति के लिए अपना शाखा कार्यालय सबसे सही जगह है।" },
  ],
  related: [
    { href: "/service/esic.html", emoji: "🏥", title: "ESIC: पूरी जानकारी", text: "ई-पहचान कार्ड और इलाज" },
    { href: "/service/epfo.html", emoji: "💼", title: "EPFO / PF", text: "PF निकासी और UAN" },
    { href: "/service/e-shram-card.html", emoji: "👷", title: "ई-श्रम कार्ड", text: "असंगठित मज़दूरों के लिए" },
    { href: "/service/pm-suraksha-bima-yojana.html", emoji: "🛡️", title: "PM सुरक्षा बीमा योजना", text: "दुर्घटना बीमा" },
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
  ],
  aside: [
    { href: "https://www.esic.gov.in/", label: "🏥 ESIC वेबसाइट" },
    { href: "#daawa", label: "📋 दावा कैसे करें" },
  ],
};
