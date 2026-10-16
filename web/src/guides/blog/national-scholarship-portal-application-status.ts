import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic post (same URL). Overlaps with
// /service/national-scholarship-portal.html (OTR, applying, documents); this
// post is a how-to for one situation: checking where an application is stuck
// and what each stage means. Title was cut off; completed from the old h1.
// Sources (checked 16 Oct 2026):
// - Reused from web/src/guides/doc/national-scholarship-portal.ts
//   (scholarships.gov.in: OTR login; Application Status, Track Your Payment,
//   Check Aadhaar Seeding Status links; PM-USP CSSS renewal closes 31.10.2026,
//   institute verification 15.11.2026, L2 30.11.2026; helpdesk 0120-6619540,
//   helpdesk@nsp.gov.in; PFMS 1800 118 111).
// - Verification order (Level 1 institute nodal officer INO, Level 2 district
//   DNO, then state/ministry; sanction; payment through PFMS/DBT):
//   CareerIndia 2026 articles, Assam AMDB "NSP issues" presentation,
//   socialjustice.gov.in guidelines PDF (search extracts). Exact on-screen
//   wording of each status may differ; described in plain words.
// - Other schemes' dates vary and are not listed.

const NSP = '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a>';

export const nationalScholarshipPortalApplicationStatus: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "NSP आवेदन की स्थिति" },
  ],
  docHi: "NSP स्टेटस",
  title: "नेशनल स्कॉलरशिप पोर्टल: अपने आवेदन की स्थिति कैसे चेक करें",
  description: "NSP के जरिए केंद्र या राज्य की स्कॉलरशिप के लिए आवेदन किया और कोई जवाब नहीं मिला? जानिए आपका आवेदन ठीक किस स्टेज पर अटका है।",
  published: "2026-07-03",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "NSP आवेदन की स्थिति: कैसे देखें, किस स्टेज पर अटका है और आगे क्या करें",
  lead: "NSP पर आवेदन जमा होने के बाद वह कई स्तरों से गुज़रता है: पहले आपका स्कूल/कॉलेज (Level 1), फिर ज़िला (Level 2), फिर राज्य या मंत्रालय, और मंज़ूरी के बाद पैसा PFMS से सीधे आधार से जुड़े बैंक खाते में आता है। स्थिति देखने के लिए scholarships.gov.in पर OTR नंबर से लॉग-इन करें। ज़्यादातर आवेदन संस्थान के सत्यापन (Level 1) पर अटकते हैं, जिसे सिर्फ आपका संस्थान आगे बढ़ा सकता है।",
  facts: [
    ["कहां देखें", NSP + " → OTR से लॉग-इन"],
    ["पहला सत्यापन", "आपका स्कूल/कॉलेज (Level 1)"],
    ["पैसा", "PFMS से DBT, आधार से जुड़े खाते में"],
    ["हेल्पडेस्क", "0120-6619540, helpdesk@nsp.gov.in"],
  ],
  sections: [
    {
      id: "kaise",
      title: "स्थिति कैसे देखें",
      steps: [
        `${NSP} खोलें और <strong>Login</strong> में OTR नंबर और पासवर्ड/OTP से लॉग-इन करें।`,
        "डैशबोर्ड पर <strong>Application Status</strong> (या आवेदन की स्थिति) खोलें।",
        "देखें कि आवेदन किस स्तर पर है और कोई टिप्पणी (remark) या \"Defective/Returned\" तो नहीं लिखा।",
        "मंज़ूरी के बाद पोर्टल का <strong>Track Your Payment</strong> लिंक PFMS पर भुगतान की स्थिति दिखाता है।",
      ],
      callout: { kind: "info", html: "OTR नंबर याद नहीं या फेस ऑथेंटिकेशन की दिक्कत हो तो: <a href=\"/service/national-scholarship-portal.html#otr\">OTR कैसे बनाएं/ठीक करें</a>।" },
    },
    {
      id: "stage",
      title: "हर स्टेज का मतलब और आपका काम",
      table: {
        head: ["स्थिति", "मतलब", "आप क्या करें"],
        rows: [
          ["जमा (Submitted), Level 1 पर लंबित", "आपका स्कूल/कॉलेज (Institute Nodal Officer) अभी जांच रहा है", "संस्थान के स्कॉलरशिप प्रभारी से मिलें और तय तारीख से पहले सत्यापन करवाएं"],
          ["संस्थान ने लौटाया (Defective / Returned for correction)", "आवेदन में गलती या कागज़ अधूरा", "लॉग-इन करके सुधार करें और दोबारा सबमिट करें; तारीख निकलने से पहले"],
          ["संस्थान ने रद्द किया (Rejected)", "संस्थान ने आवेदन को अपात्र माना", "कारण पढ़ें; गलती लगे तो संस्थान और ज़िला नोडल अधिकारी से बात करें"],
          ["Level 2 पर लंबित", "ज़िला नोडल अधिकारी (DNO) जांच रहे हैं", "ज़िले के नोडल अधिकारी का नाम/फोन पोर्टल की सूची में देखें"],
          ["राज्य/मंत्रालय स्तर पर, या मंज़ूर (Sanctioned)", "भुगतान की तैयारी", "बैंक खाते की आधार सीडिंग जांचें"],
          ["PFMS को भेजा / भुगतान हुआ", "पैसा बैंक की ओर गया", "पासबुक देखें; न आए तो PFMS पर भुगतान की स्थिति और बैंक से पूछें"],
        ],
      },
    },
    {
      id: "paisa-nahi",
      title: "मंज़ूर है पर पैसा नहीं आया",
      list: [
        "पोर्टल पर <strong>Check Aadhaar Seeding Status</strong> से देखें कि आपका कौन सा खाता आधार से DBT के लिए जुड़ा है। पैसा उसी खाते में जाता है।",
        "खाता बंद, निष्क्रिय या नाबालिग खाते की सीमा वाला हो तो बैंक में KYC कराकर चालू कराएं।",
        "PFMS हेल्पलाइन: टोल-फ्री <strong>1800 118 111</strong>।",
      ],
    },
    {
      id: "tarikh",
      title: "तारीखों का ध्यान रखें",
      intro: "हर योजना की आवेदन, संस्थान सत्यापन और ज़िला सत्यापन की अलग आखिरी तारीख होती है, जो पोर्टल के होम पेज पर दिखती है। उदाहरण के लिए PM-USP (कॉलेज/विश्वविद्यालय छात्रों के लिए केंद्रीय योजना) के 2026-27 रिन्यूअल आवेदन 31 अक्टूबर 2026 तक, संस्थान सत्यापन 15 नवंबर 2026 तक और Level 2 सत्यापन 30 नवंबर 2026 तक है। संस्थान की तारीख निकल गई तो आवेदन आगे नहीं बढ़ता, इसलिए Level 1 पर अटका आवेदन सबसे पहले ठीक कराएं।",
    },
    {
      id: "shikayat",
      title: "शिकायत कहां करें",
      list: [
        "<strong>NSP हेल्पडेस्क:</strong> 0120-6619540, helpdesk@nsp.gov.in (सुबह 8 से रात 8, सरकारी छुट्टी छोड़कर)।",
        "<strong>पोर्टल पर:</strong> Grievance Registration में शिकायत दर्ज करें और नंबर संभालें।",
        "<strong>नोडल अधिकारी:</strong> योजना-वार और ज़िला-वार नोडल अधिकारियों की सूची पोर्टल पर है।",
      ],
    },
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "लॉग-इन, Application Status, Track Your Payment" },
    { href: "https://scholarships.gov.in/nsphelpdesk", title: "NSP हेल्पडेस्क संपर्क" },
    { href: "https://pfms.nic.in/", title: "PFMS (भुगतान)", note: "टोल-फ्री 1800 118 111" },
  ],
  faq: [
    { q: "मेरा आवेदन महीनों से Level 1 पर क्यों अटका है?", a: "Level 1 पर आपका स्कूल/कॉलेज आवेदन जांचता है। जब तक संस्थान का नोडल अधिकारी सत्यापन नहीं करता, आवेदन ज़िले तक नहीं जाता। संस्थान के स्कॉलरशिप प्रभारी से मिलें और तय तारीख से पहले सत्यापन करवाएं।" },
    { q: "आवेदन \"Defective\" दिख रहा है, क्या करूं?", a: "संस्थान ने सुधार के लिए लौटाया है। लॉग-इन करके टिप्पणी पढ़ें, गलती सुधारें या कागज़ दोबारा अपलोड करें और तारीख से पहले फिर सबमिट करें।" },
    { q: "भुगतान हुआ दिख रहा है पर खाते में नहीं आया?", a: "पैसा उस खाते में जाता है जो आपके आधार से DBT के लिए जुड़ा है, जो दूसरा खाता भी हो सकता है। पोर्टल पर Aadhaar Seeding Status देखें और बैंक से पूछें। PFMS हेल्पलाइन 1800 118 111।" },
    { q: "क्या स्टेटस मोबाइल से देख सकते हैं?", a: "हां, scholarships.gov.in मोबाइल ब्राउज़र में खुलता है; OTR नंबर से लॉग-इन करें।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "NSP: पूरी गाइड", text: "OTR, आवेदन, दस्तावेज़" },
    { href: "/service/pm-usp-college-scholarship.html", emoji: "📘", title: "PM-USP कॉलेज स्कॉलरशिप", text: "मेरिट आधारित छात्रवृत्ति" },
    { href: "/service/post-matric-scholarship-obc-ebc.html", emoji: "📚", title: "पोस्ट मैट्रिक स्कॉलरशिप", text: "OBC/EBC छात्रों के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और अपडेट" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "आवेदन में मदद (₹30)" },
  ],
  aside: [
    { href: "https://scholarships.gov.in/", label: "🎓 NSP पोर्टल" },
    { href: "/service/national-scholarship-portal.html", label: "📘 NSP गाइड" },
  ],
};
