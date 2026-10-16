import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic post (same URL). Overlaps with
// /service/aadhaar-pan-linking.html; this post takes the "deadline already
// missed: what happens now and how to fix it" angle and links there. Title was
// cut off; completed from the old h1.
// Sources (checked 16 Oct 2026; incometax.gov.in not reachable from the
// sandbox):
// - Reused from web/src/guides/doc/aadhaar-pan-linking.ts: general deadline
//   30.06.2023; ₹1,000 fee paid first via e-Pay Tax ("Fee for delay in linking
//   PAN with Aadhaar"); PAN inoperative if not linked; refunds held, no
//   interest for the inoperative period, higher TDS/TCS; PANs allotted on
//   Aadhaar enrolment ID had to link by 31.12.2025 (CBDT 03.04.2025), else
//   inoperative from 1.1.2026; exempt: residents of Assam, J&K, Meghalaya,
//   non-residents, 80+, non-citizens.
// - Business Standard 23.12.2025, Angel One 2026 guides (same facts).
// - CBDT Circular 3/2023: PAN becomes operative again within 30 days of
//   intimation of Aadhaar after fee payment.
// - Whether the new Income-tax Act 2025 renumbers s.139AA was not confirmed;
//   no section numbers used. Exact TDS rates left out.

const ITD = '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a>';

export const panAadhaarLinkingMissedDeadline: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "PAN-आधार डेडलाइन मिस" },
  ],
  docHi: "PAN-आधार डेडलाइन मिस",
  title: "PAN-आधार लिंकिंग: डेडलाइन मिस होने पर क्या होता है",
  description: "अनलिंक्ड PAN का मतलब सिर्फ जुर्माना नहीं — इससे आपका PAN पूरी तरह काम करना बंद कर सकता है। असल में क्या होता है और इसे कैसे ठीक करें, जानिए।",
  published: "2026-04-15",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PAN-आधार लिंक की डेडलाइन निकल गई? अब क्या होता है और कैसे ठीक करें",
  lead: "आम लोगों के लिए PAN को आधार से जोड़ने की आखिरी तारीख 30 जून 2023 थी, और आधार एनरोलमेंट ID से बने PAN के लिए 31 दिसंबर 2025। इसके बाद जो PAN नहीं जुड़ा, वह निष्क्रिय (inoperative) हो जाता है: रिफंड रुकता है, उस समय का ब्याज नहीं मिलता और TDS/TCS ज़्यादा दर से कटता है। PAN रद्द नहीं होता; ₹1,000 फीस भरकर अब भी लिंक कर सकते हैं, और उसके बाद PAN फिर से चालू हो जाता है।",
  facts: [
    ["डेडलाइन (आम PAN)", "30 जून 2023 (निकल चुकी)"],
    ["देर से लिंक की फीस", "₹1,000, पहले e-Pay Tax से"],
    ["न जोड़ने पर", "PAN निष्क्रिय, रिफंड रुका, ज़्यादा TDS"],
    ["फिर चालू", "फीस + लिंक के बाद, आम तौर पर 30 दिन में"],
  ],
  sections: [
    {
      id: "kya-hota",
      title: "PAN निष्क्रिय होने पर असल में क्या होता है",
      table: {
        head: ["काम", "असर"],
        rows: [
          ["आयकर रिफंड", "रुक जाता है; PAN चालू होने के बाद ही मिलता है, और निष्क्रिय समय का ब्याज नहीं मिलता"],
          ["TDS/TCS", "सामान्य से ज़्यादा दर पर कटता है (जैसे FD ब्याज, किराया, बिक्री पर)"],
          ["ITR भरना", "रिटर्न भरा जा सकता है, पर रिफंड और प्रोसेसिंग में दिक्कत आती है"],
          ["बैंक, म्यूचुअल फंड, शेयर", "जहां चालू PAN ज़रूरी है, वहां KYC अटक सकती है"],
          ["PAN कार्ड", "रद्द नहीं होता; लिंक करने पर फिर चालू"],
        ],
      },
    },
    {
      id: "pehle-check",
      title: "पहले देखें: आपको लिंक करना ज़रूरी भी है?",
      list: [
        `${ITD} पर (बिना लॉग-इन) <strong>Link Aadhaar Status</strong> में PAN और आधार डालकर देखें कि पहले से जुड़ा है या नहीं।`,
        "इन्हें लिंक करना ज़रूरी नहीं: असम, जम्मू-कश्मीर और मेघालय के निवासी, अनिवासी (NRI), 80 साल या ज़्यादा उम्र के लोग, और भारत के नागरिक नहीं।",
        "छूट वाले व्यक्ति का PAN भी गलती से निष्क्रिय दिखे तो आयकर विभाग की हेल्पलाइन या अपने बैंक/TDS काटने वाले को स्थिति बताएं।",
      ],
    },
    {
      id: "theek",
      title: "अब कैसे ठीक करें (₹1,000 फीस के साथ)",
      steps: [
        `${ITD} पर <strong>e-Pay Tax</strong> से ₹1,000 फीस भरें। सही मद चुनें: \"Fee for delay in linking PAN with Aadhaar\"।`,
        "फीस भरने के कुछ दिन बाद पोर्टल पर <strong>Link Aadhaar</strong> खोलें, PAN और आधार डालें; फीस का भुगतान अपने आप दिख जाता है।",
        "आधार में दर्ज नाम, जन्मतिथि भरें और आधार से जुड़े मोबाइल पर आया OTP डालें।",
        "अनुरोध जमा होने के बाद <strong>Link Aadhaar Status</strong> में स्थिति देखें। PAN आम तौर पर 30 दिन के अंदर फिर से चालू हो जाता है।",
      ],
      callout: { kind: "warn", html: "फीस गलत मद (जैसे आयकर) में चली गई तो लिंक नहीं होगा। चालान ध्यान से भरें। पूरा तरीका: <a href=\"/service/aadhaar-pan-linking.html\">आधार-पैन लिंकिंग गाइड</a>।" },
    },
    {
      id: "mismatch",
      title: "फीस भर दी, फिर भी लिंक नहीं हो रहा",
      list: [
        "<strong>नाम या जन्मतिथि मेल नहीं खाती:</strong> PAN या आधार में से जिसमें गलती है, उसे पहले सुधारें। तरीका: <a href=\"/service/pan-aadhaar-conflict-resolver.html\">PAN-आधार बेमेल समाधान</a>।",
        "<strong>आधार से मोबाइल नहीं जुड़ा:</strong> OTP नहीं आएगा; पहले आधार केंद्र पर मोबाइल जुड़वाएं।",
        "<strong>आखिरी विकल्प:</strong> PAN सेवा केंद्र (Protean/UTIITSL) पर बायोमेट्रिक सत्यापन से लिंकिंग।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल", note: "Link Aadhaar, Link Aadhaar Status, e-Pay Tax; 1800 103 0025" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar", note: "आधार में नाम/जन्मतिथि सुधार" },
  ],
  faq: [
    { q: "क्या डेडलाइन मिस होने पर PAN रद्द हो गया?", a: "नहीं, PAN रद्द नहीं होता, सिर्फ निष्क्रिय होता है। ₹1,000 फीस भरकर आधार से लिंक करें, फिर वह आम तौर पर 30 दिन में चालू हो जाता है।" },
    { q: "क्या ₹1,000 से ज़्यादा जुर्माना लगेगा?", a: "लिंक करने की फीस ₹1,000 है। पर निष्क्रिय रहने के दौरान ज़्यादा कटा TDS और न मिला ब्याज भी एक तरह का नुकसान है।" },
    { q: "निष्क्रिय समय में ज़्यादा कटा TDS वापस मिलेगा?", a: "ज़्यादा कटा TDS आपके टैक्स खाते में जमा रहता है और रिटर्न में गिना जाता है; रिफंड बनता हो तो PAN चालू होने के बाद मिलता है, पर निष्क्रिय समय का ब्याज नहीं मिलता।" },
    { q: "आधार एनरोलमेंट ID से बना PAN था, अब क्या?", a: "ऐसे PAN को 31 दिसंबर 2025 तक आधार नंबर से जोड़ना था। नहीं जोड़ा तो 1 जनवरी 2026 से वह निष्क्रिय है। फीस लगेगी या नहीं, यह पोर्टल पर Link Aadhaar करते समय दिखेगा।" },
  ],
  related: [
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग: पूरी गाइड", text: "₹1,000 फीस और स्टेप्स" },
    { href: "/service/pan-aadhaar-conflict-resolver.html", emoji: "🧩", title: "PAN-आधार बेमेल समाधान", text: "नाम/जन्मतिथि मेल न खाए तो" },
    { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड", text: "नया PAN और सुधार" },
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिटर्न कैसे भरें" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "🔗 आयकर पोर्टल" },
    { href: "/service/aadhaar-pan-linking.html", label: "📘 लिंकिंग गाइड" },
  ],
};
