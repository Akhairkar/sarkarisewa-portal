import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - NSAP guidelines Oct 2014 (nsap.nic.in; CAG Performance Audit of NSAP,
//   Report 2023; Lok Sabha reply AU4023): pension to be paid monthly
//   (CAG found only 11 States/UTs paying monthly); each State designates a
//   Sanctioning Authority at block / municipality level; grievance redressal
//   at gram / intermediate panchayat / district / municipality level with a
//   designated officer and timelines; annual verification and social audit
//   (Tripura NSAP guideline II).
// - Central share: IGNOAPS Rs 200 (60-79) / Rs 500 (80+), IGNWPS Rs 300
//   (40-79), IGNDPS Rs 300; states add top-ups (myScheme, Parliament replies
//   2025; same facts as /service/national-social-assistance-programme).
// - Payment by DBT to bank / post office account; Aadhaar-based payment
//   needs Aadhaar seeding / NPCI mapping (see dbt-aadhaar-seeding letter).
// State pension names, amounts and offices differ; page says so.
export const pensionNotReceivedComplaint: Letter = {
  slug: "pension-not-received-complaint",
  category: "social",
  emoji: "👵",
  title: "Pension Not Received Complaint Letter in Hindi 2026: पेंशन शिकायत पत्र",
  description: "वृद्धावस्था/विधवा/दिव्यांग पेंशन कई महीनों से न आए तो BDO या ज़िला समाज कल्याण अधिकारी को शिकायत पत्र (हिंदी/English)। कारण, कागज़ और आगे का रास्ता।",
  h1: "पेंशन नहीं आने का शिकायत पत्र 2026: BDO/समाज कल्याण अधिकारी को लिखें",
  short: { hi: "पेंशन न आने की शिकायत", en: "Pension not received" },
  lead: "वृद्धावस्था, विधवा या दिव्यांग पेंशन (NSAP या राज्य योजना) कई महीनों से खाते में न आए, तो पेंशन मंज़ूर करने वाले दफ्तर, यानी गांव में <strong>प्रखंड विकास अधिकारी (BDO)</strong> और शहर में <strong>नगर निकाय/ज़िला समाज कल्याण अधिकारी</strong> को लिखित शिकायत दें। NSAP के दिशा-निर्देशों में पेंशन <strong>हर महीने</strong> देने और ब्लॉक/ज़िला स्तर पर शिकायत सुनने के अधिकारी तय करने की बात है। अक्सर पेंशन रुकने का कारण बैंक खाते में आधार न जुड़ा होना, खाता बंद होना या सालाना सत्यापन (जीवित होने की पुष्टि) न होना होता है।",
  facts: [
    ["किसे दें", "BDO (गांव) / ज़िला समाज कल्याण अधिकारी (शहर/ज़िला)"],
    ["भुगतान (NSAP)", "हर महीने, सीधे बैंक/डाकघर खाते में (DBT)"],
    ["आम कारण", "आधार-बैंक लिंक न होना, खाता बंद, सत्यापन बाकी"],
    ["स्थिति देखें", '<a href="https://nsap.nic.in/" target="_blank" rel="noopener nofollow">nsap.nic.in</a> या राज्य पेंशन पोर्टल'],
  ],
  to: "गांव में <strong>प्रखंड विकास अधिकारी (BDO)</strong> या प्रखंड/तहसील का समाज कल्याण अधिकारी; शहर में <strong>नगर निगम/नगर पालिका</strong> का पेंशन विभाग; और कॉपी <strong>ज़िला समाज कल्याण अधिकारी</strong> को। कुछ राज्यों में यह काम SDM/तहसीलदार या महिला एवं बाल विकास विभाग देखता है।",
  when: [
    "पेंशन पहले आती थी, अब कई महीनों से बंद है",
    "पेंशन मंज़ूर होने का पत्र मिला, पर पैसा कभी नहीं आया",
    "पेंशन किसी और खाते में जा रही है",
    "सत्यापन/eKYC करा दिया, फिर भी पेंशन चालू नहीं हुई",
  ],
  fields: [
    { key: "office", label: { hi: "किसे (पद, दफ्तर, ज़िला)", en: "Addressed to (designation, office, district)" }, required: true, placeholder: { hi: "जैसे: प्रखंड विकास पदाधिकारी, प्रखंड बिक्रम, पटना", en: "e.g. Block Development Officer, Bikram block, Patna" } },
    { key: "name", label: { hi: "पेंशनधारी का नाम", en: "Pensioner's name" }, required: true },
    { key: "guardian", label: { hi: "पिता/पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "पता (गांव, पंचायत, वार्ड)", en: "Address (village, panchayat, ward)" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "scheme", label: { hi: "पेंशन का प्रकार", en: "Pension type" }, type: "select", required: true, options: [
      { hi: "वृद्धावस्था पेंशन", en: "old-age pension" },
      { hi: "विधवा पेंशन", en: "widow pension" },
      { hi: "दिव्यांग पेंशन", en: "disability pension" },
    ] },
    { key: "pid", label: { hi: "पेंशन/स्वीकृति आदेश संख्या (PPO/Sanction no.)", en: "Pension ID / sanction order no." }, required: true },
    { key: "bank", label: { hi: "बैंक/डाकघर का नाम, शाखा और खाते के आखिरी 4 अंक", en: "Bank / post office, branch, last 4 digits of account" }, required: true, placeholder: { hi: "जैसे: SBI, बिक्रम शाखा, खाता XXXX4321", en: "e.g. SBI, Bikram branch, a/c XXXX4321" }, hint: { hi: "पूरा खाता नंबर, ATM PIN या OTP कभी न लिखें", en: "Never write full account no., ATM PIN or OTP" } },
    { key: "lastpaid", label: { hi: "आखिरी बार पेंशन कब आई", en: "Last pension received in" }, required: true, placeholder: { hi: "जैसे: मार्च 2026 (या \"कभी नहीं आई\")", en: "e.g. March 2026 (or \"never\")" } },
    { key: "details", label: { hi: "और जानकारी (कहां-कहां पूछा, क्या बताया गया)", en: "More details (where you asked, what you were told)" }, type: "textarea", placeholder: { hi: "बैंक ने कहा आधार लिंक है। पंचायत सचिव ने कहा सूची में नाम नहीं है...", en: "Bank says Aadhaar is linked. Panchayat secretary says name not in list..." } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{scheme}} की राशि {{lastpaid}} के बाद से प्राप्त न होने के संबंध में शिकायत

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पिता/पति {{guardian}}, निवासी {{address}}, {{scheme}} का स्वीकृत लाभार्थी हूं। मेरी पेंशन/स्वीकृति संख्या {{pid}} है और पेंशन मेरे खाते {{bank}} में आती है।

मुझे पेंशन की राशि आखिरी बार {{lastpaid}} में मिली थी। उसके बाद से आज तक कोई राशि खाते में नहीं आई है, जबकि मैं अब भी सभी शर्तें पूरी करता/करती हूं और जीवित हूं।

{{details}}

पेंशन ही मेरे जीवन-यापन का मुख्य सहारा है और इसके रुकने से मुझे भारी कठिनाई हो रही है।

अतः आपसे निवेदन है कि:
1. मेरी पेंशन रुकने का कारण जांच कर बताया जाए;
2. यदि किसी कागज़/सत्यापन की कमी है तो लिखित में बताया जाए, ताकि मैं उसे पूरा कर सकूं;
3. मेरी पेंशन फिर से चालू कर बकाया राशि सहित भुगतान कराया जाए।

प्रार्थी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
पेंशन संख्या: {{pid}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. पेंशन स्वीकृति पत्र/पेंशन कार्ड की कॉपी
2. बैंक/डाकघर पासबुक के पहले पन्ने और आखिरी एंट्री की कॉपी
3. आधार कार्ड की कॉपी`,
    en: `To,
{{office}}

Subject: Complaint regarding non-receipt of {{scheme}} since {{lastpaid}}

Sir/Madam,

I, {{name}}, son/daughter/wife of {{guardian}}, resident of {{address}}, am a sanctioned beneficiary of {{scheme}}. My pension / sanction no. is {{pid}} and the pension is credited to my account {{bank}}.

I last received the pension in {{lastpaid}}. Since then no amount has been credited, although I still fulfil all conditions and am alive.

{{details}}

The pension is my main means of livelihood and its stoppage is causing me great hardship.

I therefore request you to:
1. Inquire into and inform me of the reason for stoppage of my pension;
2. Inform me in writing if any document/verification is pending, so that I can complete it;
3. Restart my pension and release the arrears.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Pension no.: {{pid}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of pension sanction letter / pension card
2. Copy of first page and last entry of bank / post office passbook
3. Copy of Aadhaar card`,
  },
  attach: [
    "पेंशन स्वीकृति पत्र या पेंशन कार्ड की कॉपी",
    "पासबुक के पहले पन्ने और ताज़ा एंट्री की कॉपी (पेंशन न आना दिखे)",
    "आधार कार्ड की कॉपी",
    "राज्य मांगे तो जीवन प्रमाण/सत्यापन की पर्ची",
  ],
  submit: [
    "पहले बैंक/डाकघर में पूछें कि खाता चालू है और आधार जुड़ा (NPCI मैपिंग) है या नहीं; न हो तो बैंक को आधार लिंक का आवेदन दें।",
    "यह पत्र BDO/नगर निकाय के पेंशन विभाग में जमा करें और रिसीविंग लें; कॉपी ज़िला समाज कल्याण अधिकारी को दें।",
    '<a href="https://nsap.nic.in/" target="_blank" rel="noopener nofollow">nsap.nic.in</a> या अपने राज्य के पेंशन पोर्टल पर स्वीकृति संख्या से भुगतान की स्थिति देखें।',
    "एक-दो महीने में हल न हो तो ज़िलाधिकारी के जनता दरबार, राज्य के शिकायत पोर्टल/हेल्पलाइन पर शिकायत करें, या RTI से पेंशन रुकने का कारण पूछें।",
  ],
  tips: [
    "पेंशन रुकने का सबसे आम कारण बैंक में आधार सीडिंग/NPCI मैपिंग न होना है; पहले यह जांच लें।",
    "खाता लंबे समय तक इस्तेमाल न होने से बंद (inactive) हो सकता है; बैंक में KYC करा लें।",
    "पत्र में पूरा खाता नंबर, ATM PIN या OTP न लिखें; आखिरी 4 अंक काफी हैं।",
    "पेंशन चालू कराने के नाम पर पैसे मांगने वालों से बचें; यह काम मुफ्त होता है।",
  ],
  notice: "पेंशन की राशि, नियम और दफ्तर राज्य के हिसाब से अलग हैं। केंद्र (NSAP) का हिस्सा ₹200-₹500 महीना है, बाकी राज्य जोड़ता है।",
  official: [
    { href: "https://nsap.nic.in/", title: "NSAP पोर्टल", note: "लाभार्थी और भुगतान की स्थिति" },
    { href: "https://web.umang.gov.in/", title: "UMANG", note: "NSAP सेवाएं" },
  ],
  related: ["/service/national-social-assistance-programme.html", "/service/senior-citizen-card.html"],
  faq: [
    { q: "वृद्धावस्था पेंशन नहीं आ रही, कहां शिकायत करें?", a: "गांव में BDO, शहर में नगर निकाय के पेंशन विभाग और ज़िला समाज कल्याण अधिकारी को लिखित शिकायत दें। साथ में बैंक में आधार लिंक और खाते की स्थिति जांचें।" },
    { q: "पेंशन अचानक बंद क्यों हो जाती है?", a: "आम कारण: बैंक खाते में आधार न जुड़ा होना (NPCI मैपिंग), खाता बंद/निष्क्रिय होना, सालाना सत्यापन न होना, या रिकॉर्ड में गलती। शिकायत में दफ्तर से लिखित कारण मांगें।" },
    { q: "पेंशन की स्थिति कैसे देखें?", a: "nsap.nic.in पर या अपने राज्य के पेंशन/समाज कल्याण पोर्टल पर स्वीकृति संख्या या खाते से।" },
    { q: "क्या रुकी हुई पेंशन का बकाया मिलता है?", a: "आम तौर पर कारण दूर होने पर बकाया दिया जाता है, पर नियम राज्य के हिसाब से अलग हैं। पत्र में बकाया की मांग ज़रूर लिखें और दफ्तर से पुष्टि करें।" },
    { q: "NSAP पेंशन हर महीने मिलती है क्या?", a: "NSAP दिशा-निर्देशों में हर महीने भुगतान की बात है, पर CAG ने पाया कि कई राज्य तिमाही या देर से भुगतान करते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
