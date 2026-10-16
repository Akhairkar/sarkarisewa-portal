import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic post (same URL). Overlaps with
// /service/pm-kisan.html; this post is a how-to for one situation: checking
// your own status / the village beneficiary list and reading each line.
// Instalment timeline and "money not received" fixes live in
// /blog/pm-kisan-19th-installment-beneficiary-status-check.html.
// Sources (checked 16 Oct 2026; pmkisan.gov.in not opened from the sandbox):
// - Scheme facts and helplines (155261 / 011-24300606, toll-free 1800-115-526,
//   pmkisan-ict@gov.in; e-KYC mandatory, OTP or CSC biometric) reused from
//   web/src/guides/doc/pm-kisan.ts.
// - Know Your Status flow (registration number + captcha + OTP to the mobile
//   registered with PM-KISAN; "Know your registration number" by mobile or
//   Aadhaar with OTP; page shows instalment-wise payment, bank, e-KYC, land
//   seeding; Beneficiary List by state/district/sub-district/block/village):
//   Lendingkart, ClearTax, Bajaj Finserv 2026 guides citing the portal. Menu
//   names may change slightly.
// - 23rd instalment 20 Jun 2026; 24th date not announced as of late Sep 2026
//   (news reports, see the 19th-instalment post).

const PMK = '<a href="https://pmkisan.gov.in/" target="_blank" rel="noopener nofollow">pmkisan.gov.in</a>';

export const pmKisanBeneficiaryStatusCheck: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "PM-KISAN लाभार्थी स्टेटस" },
  ],
  docHi: "PM-KISAN स्टेटस",
  title: "PM-KISAN: अपना लाभार्थी स्टेटस कैसे चेक करें",
  description: "पक्का नहीं कि आपकी PM-KISAN किस्त जमा हुई या नहीं? कहाँ चेक करें और भुगतान अटका हो तो क्या करें, पूरी जानकारी यहाँ है।",
  published: "2026-05-20",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PM-KISAN लाभार्थी स्टेटस: कैसे देखें और हर लाइन का मतलब",
  lead: "PM-KISAN का स्टेटस मुफ्त में pmkisan.gov.in के Know Your Status पेज पर दिखता है। इसके लिए पंजीकरण संख्या (Registration Number) और PM-KISAN में दर्ज मोबाइल नंबर चाहिए, क्योंकि OTP उसी पर आता है। पंजीकरण संख्या भूल गए हों तो उसी पेज पर मोबाइल या आधार नंबर से निकाल सकते हैं। स्टेटस में e-KYC, ज़मीन सत्यापन (Land Seeding) और आधार-बैंक लिंकिंग तीनों Yes होने चाहिए, तभी किस्त आती है।",
  facts: [
    ["कहां देखें", PMK + " → Know Your Status"],
    ["क्या चाहिए", "पंजीकरण संख्या + दर्ज मोबाइल पर OTP"],
    ["फीस", "मुफ्त"],
    ["हेल्पलाइन", "155261 / 011-24300606"],
  ],
  sections: [
    {
      id: "steps",
      title: "स्टेटस देखने का तरीका",
      steps: [
        `${PMK} खोलें और <strong>Know Your Status</strong> पर जाएं।`,
        "अपनी <strong>पंजीकरण संख्या</strong> और स्क्रीन पर दिखा कोड (captcha) भरें, फिर <strong>Get OTP</strong> दबाएं।",
        "PM-KISAN में दर्ज मोबाइल पर आया OTP भरें।",
        "स्क्रीन पर आपका नाम, बैंक, e-KYC, Land Seeding और हर किस्त का भुगतान दिखेगा। स्क्रीनशॉट रख लें।",
      ],
      callout: { kind: "info", html: "<strong>पंजीकरण संख्या याद नहीं?</strong> उसी पेज पर <strong>Know your registration number</strong> चुनें, मोबाइल या आधार नंबर डालें और OTP से पंजीकरण संख्या देख लें।" },
    },
    {
      id: "matlab",
      title: "स्टेटस की हर लाइन का मतलब",
      table: {
        head: ["लाइन", "सही होने पर", "गलत हो तो"],
        rows: [
          ["Eligibility / Beneficiary Status", "Active / Eligible", "राज्य ने रिकॉर्ड रोका है; ब्लॉक/ज़िला कृषि अधिकारी से कारण पूछें"],
          ["e-KYC", "Yes", "पोर्टल/ऐप पर आधार OTP से या CSC पर अंगूठा लगाकर e-KYC करें"],
          ["Land Seeding", "Yes", "पटवारी/लेखपाल या तहसील में ज़मीन का रिकॉर्ड सत्यापित कराएं"],
          ["Aadhaar Bank Seeding (NPCI)", "Yes", "बैंक में आधार सीडिंग और DBT चालू कराएं"],
          ["किस्त-वार भुगतान", "तारीख और बैंक के साथ Success/Credited", "Pending हो तो राज्य/केंद्र की मंज़ूरी बाकी है; Failed हो तो बैंक खाता जांचें"],
        ],
      },
    },
    {
      id: "list",
      title: "गांव की लाभार्थी सूची (Beneficiary List)",
      intro: "अपना नाम गांव की सूची में है या नहीं, यह बिना OTP के देखा जा सकता है:",
      steps: [
        `${PMK} पर <strong>Beneficiary List</strong> खोलें।`,
        "राज्य, ज़िला, उप-ज़िला (तहसील), ब्लॉक और गांव चुनें।",
        "<strong>Get Report</strong> दबाएं और सूची में अपना नाम खोजें।",
      ],
      callout: { kind: "warn", html: "सूची में नाम होना और हर किस्त मिलना अलग बातें हैं। किस्त रुकी हो तो अपना निजी स्टेटस (ऊपर का तरीका) ज़रूर देखें।" },
    },
    {
      id: "bina-smartphone",
      title: "स्मार्टफोन नहीं है तो",
      list: [
        "हेल्पलाइन <strong>155261</strong> या 011-24300606 पर फोन करके पंजीकरण संख्या/आधार बताकर स्टेटस पूछें।",
        "नज़दीकी CSC पर स्टेटस और e-KYC दोनों हो जाते हैं। <a href=\"/tools/csc-locator.html\">नज़दीकी CSC खोजें</a>।",
        "बैंक पासबुक में PM-KISAN/DBT की ₹2,000 की एंट्री भी किस्त का सबूत है।",
      ],
    },
    {
      id: "aage",
      title: "किस्त अटकी है?",
      html: "किस्त रुकने के कारण, सुधार और शिकायत का पूरा तरीका, साथ में अब तक कौन सी किस्त कब आई: <a href=\"/blog/pm-kisan-19th-installment-beneficiary-status-check.html\">पीएम किसान किस्त: DBT स्टेटस व e-KYC गाइड</a>। योजना की पात्रता और नया पंजीकरण: <a href=\"/service/pm-kisan.html\">पीएम किसान पूरी गाइड</a>।",
    },
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल", note: "Know Your Status, Beneficiary List, e-KYC" },
    { href: "https://www.myscheme.gov.in/schemes/pm-kisan", title: "myScheme: PM-KISAN" },
  ],
  faq: [
    { q: "आधार नंबर से सीधे स्टेटस क्यों नहीं दिख रहा?", a: "अभी Know Your Status पेज पंजीकरण संख्या और OTP मांगता है। आधार या मोबाइल से पहले Know your registration number में पंजीकरण संख्या निकालें, फिर स्टेटस देखें।" },
    { q: "OTP नहीं आ रहा, क्या करें?", a: "OTP उस मोबाइल पर आता है जो PM-KISAN में दर्ज है। नंबर बदल गया हो तो CSC या कृषि कार्यालय से मोबाइल अपडेट कराएं, या हेल्पलाइन 155261 पर स्टेटस पूछें।" },
    { q: "स्टेटस देखने के पैसे लगते हैं?", a: "नहीं, पोर्टल पर स्टेटस मुफ्त है। CSC पर मदद लें तो सेवा शुल्क लग सकता है।" },
    { q: "अगली (24वीं) किस्त कब आएगी?", a: "23वीं किस्त 20 जून 2026 को आई थी। 16 अक्टूबर 2026 तक 24वीं की तारीख घोषित नहीं हुई थी।" },
  ],
  related: [
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान: पूरी गाइड", text: "पात्रता, पंजीकरण, दस्तावेज़" },
    { href: "/blog/pm-kisan-19th-installment-beneficiary-status-check.html", emoji: "💸", title: "किस्त न आए तो", text: "कारण, सुधार, शिकायत" },
    { href: "/service/farmer-id-card-agristack.html", emoji: "🪪", title: "फार्मर ID (AgriStack)", text: "किसान की डिजिटल पहचान" },
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड", text: "खेती के लिए सस्ता कर्ज़" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "स्टेटस और e-KYC में मदद" },
  ],
  aside: [
    { href: "https://pmkisan.gov.in/", label: "🌾 PM-KISAN पोर्टल" },
    { href: "/service/pm-kisan.html", label: "📘 पीएम किसान गाइड" },
  ],
};
