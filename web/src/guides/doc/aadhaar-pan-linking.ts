import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; incometax.gov.in not reachable from the
// sandbox, search-result extracts used): Business Today 26.12.2025, Business
// Standard 23.12.2025, Angel One 2026 guides (linking via "Link Aadhaar" on
// the e-Filing portal with Aadhaar OTP; late fee ₹1,000 paid first through
// e-Pay Tax, challan head shown as "Fee for delay in linking PAN with
// Aadhaar"; PAN inoperative if not linked; refunds held, no interest for the
// inoperative period, higher TDS/TCS; CBDT notification 03.04.2025 asked PANs
// allotted on Aadhaar enrolment ID to link by 31.12.2025; exempt categories:
// residents of Assam, J&K and Meghalaya, non-residents, people aged 80+,
// non-citizens). Whether the enrolment-ID group pays the fee after 31.12.2025
// was not clearly confirmed, so it is described as "check on portal".
// Exact TDS rates and section numbers were left out (new Income-tax Act from
// 2026 changes numbering).
export const aadhaarPanLinking: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "आधार-पैन लिंकिंग" },
  ],
  docHi: "आधार-पैन लिंकिंग",
  title: "आधार-पैन लिंकिंग 2026 | SarkariSewa India",
  description: "वित्तीय लेनदेन और कर फाइलिंग के लिए अपने पैन को सक्रिय रखने हेतु अपने आधार नंबर को पैन कार्ड से जोड़ना अनिवार्य है। स्टेटस जांच, ₹1,000 फीस और लिंक करने का तरीका।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "आधार-पैन लिंक 2026: स्टेटस कैसे देखें, ₹1,000 फीस भरकर कैसे लिंक करें, PAN निष्क्रिय होने पर क्या करें",
  lead: "ज़्यादातर PAN धारकों के लिए आधार से PAN जोड़ना ज़रूरी है; न जोड़ने पर PAN निष्क्रिय (inoperative) हो जाता है। अब लिंक करने के लिए पहले ₹1,000 की फीस आयकर ई-फाइलिंग पोर्टल पर e-Pay Tax से भरनी होती है, फिर \"Link Aadhaar\" में आधार OTP से अनुरोध भेजें। स्टेटस बिना लॉग-इन के उसी पोर्टल पर देखा जा सकता है।",
  facts: [
    ["कहां", "incometax.gov.in (ई-फाइलिंग पोर्टल)"],
    ["देर से लिंक की फीस", "₹1,000"],
    ["न जोड़ने पर", "PAN निष्क्रिय"],
    ["छूट", "80+ उम्र, NRI, असम/J&K/मेघालय निवासी आदि"],
  ],
  sections: [
    {
      id: "status",
      title: "पहले स्टेटस देखें",
      steps: [
        '<a href="https://www.incometax.gov.in/" target="_blank" rel="noopener nofollow">incometax.gov.in</a> खोलें; होम पेज पर <strong>Quick Links</strong> में <strong>Link Aadhaar Status</strong> चुनें।',
        "PAN और आधार नंबर डालकर देखें।",
        "\"already linked\" दिखे तो कुछ नहीं करना। अनुरोध भेजा हो तो \"under validation\" दिख सकता है; कुछ दिन बाद दोबारा देखें।",
      ],
    },
    {
      id: "link",
      title: "आधार-पैन कैसे लिंक करें (फीस सहित)",
      steps: [
        "<strong>फीस भरें:</strong> ई-फाइलिंग पोर्टल पर <strong>e-Pay Tax</strong> में PAN और मोबाइल डालें। Assessment Year और \"Other Receipts\" में \"Fee for delay in linking PAN with Aadhaar\" चुनकर ₹1,000 भरें। फीस वापस नहीं होती।",
        "भुगतान के बाद कुछ दिन रुकें ताकि चालान पोर्टल पर दिखने लगे।",
        "<strong>Quick Links</strong> में <strong>Link Aadhaar</strong> चुनें, PAN और आधार नंबर डालें।",
        "आधार में जैसा नाम है वैसा भरें और आधार से जुड़े मोबाइल पर आया OTP डालें।",
        "अनुरोध जमा होने के बाद स्टेटस में \"linked\" दिखने का इंतज़ार करें; PAN फिर से चालू (operative) हो जाता है।",
      ],
      callout: { kind: "warn", html: "फीस भरने में गलत Assessment Year या गलत मद चुनने पर लिंकिंग अटक सकती है। खुद न कर पाएं तो किसी जानकार, CA या <a href=\"/tools/csc-locator.html\">CSC</a> से मदद लें।" },
    },
    {
      id: "nishkriya",
      title: "PAN निष्क्रिय होने पर क्या होता है",
      list: [
        "आयकर रिफंड रुक जाता है; PAN चालू होने के बाद ही मिलता है और बीच के समय का ब्याज नहीं मिलता।",
        "TDS/TCS ऊंची दर से कटता है।",
        "बैंक, म्यूचुअल फंड, डीमैट जैसी जगहों पर KYC में दिक्कत आ सकती है।",
        "PAN रद्द नहीं होता; फीस भरकर लिंक करने पर फिर चालू हो जाता है।",
      ],
    },
    {
      id: "chhoot",
      title: "किसे लिंक करने की ज़रूरत नहीं",
      list: [
        "असम, जम्मू-कश्मीर और मेघालय के निवासी",
        "आयकर कानून के अनुसार अनिवासी भारतीय (NRI)",
        "पिछले वर्ष में किसी समय 80 साल या उससे ज़्यादा उम्र वाले",
        "जो भारत के नागरिक नहीं हैं",
      ],
      callout: { kind: "info", html: "छूट वाले लोगों का PAN भी पोर्टल पर \"inoperative\" दिख सकता है अगर विभाग के रिकॉर्ड में उनकी छूट दर्ज नहीं है। ऐसे में अपने आयकर क्षेत्राधिकार अधिकारी (JAO) से संपर्क करें।" },
    },
    {
      id: "enrolment-id",
      title: "आधार नामांकन ID से बने PAN",
      html: "<p>जिनका PAN आधार नंबर की जगह आधार नामांकन ID (Enrolment ID) से बना था, उन्हें CBDT की 3 अप्रैल 2025 की अधिसूचना के अनुसार 31 दिसंबर 2025 तक असली आधार नंबर से लिंक करना था। यह तारीख निकल चुकी है। ऐसे लोग पोर्टल पर स्टेटस देखें और वहां जो फीस/तरीका दिखे, उसी से लिंक करें।</p>",
    },
    {
      id: "naam",
      title: "नाम या जन्मतिथि मेल नहीं खाती",
      list: [
        "PAN और आधार में नाम, जन्मतिथि या लिंग अलग हो तो लिंकिंग फेल होती है।",
        "आधार की गलती myAadhaar या आधार केंद्र से ठीक करवाएं; PAN की गलती NSDL (Protean) या UTIITSL के PAN सुधार फॉर्म से।",
        "सुधार होने के बाद फिर से Link Aadhaar करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल", note: "Link Aadhaar, Link Aadhaar Status, e-Pay Tax" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar", note: "आधार में नाम/जन्मतिथि सुधार" },
  ],
  faq: [
    { q: "आधार-पैन लिंक करने की फीस कितनी है?", a: "अब ₹1,000 फीस भरनी होती है, जो ई-फाइलिंग पोर्टल पर e-Pay Tax से पहले जमा करनी है। फीस वापस नहीं होती।" },
    { q: "आधार-पैन लिंक है या नहीं, कैसे देखें?", a: "incometax.gov.in पर Quick Links में \"Link Aadhaar Status\" खोलें और PAN व आधार नंबर डालें। लॉग-इन की ज़रूरत नहीं।" },
    { q: "PAN निष्क्रिय होने पर क्या ITR भर सकते हैं?", a: "रिटर्न भरा जा सकता है, पर रिफंड PAN चालू होने तक नहीं मिलता और बीच के समय का ब्याज नहीं मिलता। TDS भी ऊंची दर से कट सकता है।" },
    { q: "क्या 80 साल से ऊपर के बुज़ुर्गों को लिंक करना ज़रूरी है?", a: "नहीं, 80 साल या उससे ज़्यादा उम्र वाले छूट में हैं। इसी तरह NRI, गैर-नागरिक और असम, जम्मू-कश्मीर व मेघालय के निवासी भी छूट में हैं।" },
    { q: "लिंक होने में कितना समय लगता है?", a: "OTP के बाद अनुरोध जमा हो जाता है; स्टेटस में \"linked\" दिखने में कुछ दिन से कुछ हफ्ते लग सकते हैं। फीस का चालान दिखने में भी कुछ कार्य दिवस लगते हैं।" },
  ],
  related: [
    { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड", text: "नया PAN और सुधार" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "नाम/जन्मतिथि अपडेट" },
    { href: "/service/ais-annual-information-statement.html", emoji: "📊", title: "AIS / TIS", text: "आयकर का सालाना विवरण" },
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिटर्न कैसे भरें" },
    { href: "/tools/pan-aadhaar-conflict-resolver.html", emoji: "🛠️", title: "PAN-आधार मिसमैच हल", text: "नाम/जन्मतिथि मेल न खाए तो" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "🔗 Link Aadhaar (आयकर पोर्टल)" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
