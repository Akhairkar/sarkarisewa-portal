import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026): Business Standard refund step-by-step guide,
// Bajaj Finserv / Motilal Oswal / disytax guides (status via incometax.gov.in
// e-File > Income Tax Returns > View Filed Returns; no-login status on the
// refund banker's NSDL/Protean site with PAN + year; refund only after
// e-verification and processing, to a pre-validated bank account under
// Profile > My Bank Account; Services > Refund Reissue for failed refunds).
// CBDT Circular 3/2023 (inoperative PAN: no refund, no interest for that
// period) and the 30-day e-verification rule are long-standing. e-filing
// helpdesk 1800 103 0025 as used in income-tax-return-filing.ts. Income-tax
// Act, 2025 in force from 1 Apr 2026 (renumbered sections), so no section
// numbers or interest rate on refunds are given. incometax.gov.in was not
// reachable from here; menu labels may differ slightly.
export const tdsRefundStatus: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "TDS रिफंड स्टेटस" },
  ],
  docHi: "TDS रिफंड स्टेटस",
  title: "TDS रिफंड स्टेटस 2026",
  description: "ज़्यादा TDS कटा हो तो ITR भरकर रिफंड लें। आयकर पोर्टल और PAN से रिफंड स्टेटस कैसे देखें, रिफंड क्यों अटकता है (बैंक खाता, PAN-आधार, e-Verify) और Refund Reissue कैसे करें।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "TDS रिफंड स्टेटस कैसे देखें: ज़्यादा कटा टैक्स वापस पाने का तरीका और अटके रिफंड का हल",
  lead: "अगर आपकी आय पर टैक्स से ज़्यादा TDS कट गया है, तो वह पैसा <strong>आयकर रिटर्न (ITR) भरने और उसे e-Verify करने</strong> के बाद ही रिफंड होता है। रिफंड का स्टेटस incometax.gov.in पर लॉगिन करके \"View Filed Returns\" में दिखता है। रिफंड सिर्फ उस बैंक खाते में आता है जो पोर्टल पर <strong>pre-validated</strong> हो, और PAN आधार से जुड़ा (operative) होना चाहिए।",
  facts: [
    ["रिफंड के लिए", "ITR भरना और 30 दिन में e-Verify"],
    ["स्टेटस कहां", "incometax.gov.in > View Filed Returns"],
    ["पैसा कहां आता है", "pre-validated बैंक खाते में"],
    ["हेल्पडेस्क", "1800 103 0025"],
  ],
  sections: [
    {
      id: "kaise-dekhen",
      title: "रिफंड स्टेटस कैसे देखें",
      steps: [
        "<a href=\"https://www.incometax.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">incometax.gov.in</a> पर PAN (यूज़र ID) और पासवर्ड से लॉगिन करें।",
        "\"e-File > Income Tax Returns > View Filed Returns\" खोलें।",
        "जिस साल का रिटर्न है उसे चुनें और \"View Details\" दबाएं। यहां रिटर्न की हर स्टेज और रिफंड की तारीख/राशि दिखती है।",
        "बिना लॉगिन: रिफंड बैंकर (NSDL/Protean) की वेबसाइट पर PAN और वर्ष डालकर भी स्टेटस देखा जा सकता है, पर पूरी जानकारी पोर्टल पर ही मिलती है।",
      ],
    },
    {
      id: "matlab",
      title: "स्टेटस का मतलब",
      table: {
        head: ["स्टेटस", "मतलब और क्या करें"],
        rows: [
          ["Return submitted, e-verification pending", "रिटर्न e-Verify नहीं हुआ। 30 दिन के भीतर आधार OTP/नेट बैंकिंग से e-Verify करें।"],
          ["Successfully e-Verified", "विभाग की प्रोसेसिंग बाकी है; इंतज़ार करें।"],
          ["Processed with refund due", "रिफंड तय हो गया, बैंक को भेजा जाएगा।"],
          ["Refund issued", "बैंक को भेजा गया; कुछ दिन में खाते में आना चाहिए।"],
          ["Refund failed", "बैंक खाते में दिक्कत। खाता ठीक करके Refund Reissue मांगें।"],
          ["Demand determined / Adjusted", "पुरानी बकाया मांग से रिफंड काटा गया या नई मांग बनी; पोर्टल पर \"Pending Actions\" देखें।"],
        ],
      },
    },
    {
      id: "atakna",
      title: "रिफंड क्यों अटकता है",
      list: [
        "<strong>e-Verify नहीं किया:</strong> बिना e-Verify रिटर्न अधूरा माना जाता है।",
        "<strong>बैंक खाता pre-validated नहीं:</strong> \"Profile > My Bank Account\" में खाता जोड़ें और validate करें। खाते में नाम PAN के नाम से मिलना चाहिए।",
        "<strong>PAN निष्क्रिय (inoperative):</strong> PAN आधार से नहीं जुड़ा तो रिफंड नहीं मिलता, और उस समय का ब्याज भी नहीं।",
        "<strong>TDS मेल नहीं खाता:</strong> ITR में दिखाया TDS अगर 26AS/AIS में नहीं है (कटौती करने वाले ने TDS रिटर्न नहीं भरा) तो उतना रिफंड नहीं मिलता।",
        "<strong>पुरानी बकाया मांग:</strong> विभाग पुरानी मांग से रिफंड समायोजित कर सकता है; पहले सूचना भेजता है, जवाब पोर्टल पर दें।",
      ],
      callout: { kind: "warn", html: "\"रिफंड मंज़ूर हुआ, लिंक पर क्लिक करें\" जैसे SMS/ईमेल धोखा होते हैं। आयकर विभाग रिफंड के लिए OTP, कार्ड नंबर या पासवर्ड नहीं मांगता।" },
    },
    {
      id: "reissue",
      title: "Refund failed हो तो Refund Reissue कैसे करें",
      steps: [
        "पोर्टल पर \"Profile > My Bank Account\" में सही खाता जोड़ें और pre-validate होने तक इंतज़ार करें।",
        "\"Services > Refund Reissue\" खोलें और उस वर्ष का रिफंड चुनें।",
        "validated बैंक खाता चुनें, आधार OTP या दूसरे तरीके से पुष्टि करके अनुरोध भेजें।",
      ],
    },
    {
      id: "shikayat",
      title: "फिर भी हल न हो तो",
      list: [
        "पोर्टल पर लॉगिन करके \"e-Nivaran\" (Grievance) में शिकायत दर्ज करें।",
        "ई-फाइलिंग हेल्पडेस्क 1800 103 0025 पर कॉल करें।",
        "TDS 26AS में नहीं दिख रहा तो पहले उस कंपनी/बैंक से संपर्क करें जिसने TDS काटा; वही सुधार TDS रिटर्न भर सकता है।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर विभाग ई-फाइलिंग पोर्टल", note: "स्टेटस, Refund Reissue, e-Nivaran" },
    { href: "https://incometaxindia.gov.in/", title: "आयकर विभाग: नियम और सूचनाएं" },
  ],
  faq: [
    { q: "TDS रिफंड कितने दिन में आता है?", a: "कोई एक तय समय नहीं है। ITR e-Verify होने के बाद विभाग रिटर्न प्रोसेस करता है; ज़्यादातर सामान्य मामलों में कुछ हफ्तों में रिफंड आ जाता है। स्टेटस पोर्टल पर देखें।" },
    { q: "क्या ITR भरे बिना TDS रिफंड मिल सकता है?", a: "नहीं। ज़्यादा कटे TDS का रिफंड ITR भरकर ही मांगा जाता है।" },
    { q: "PAN आधार से लिंक नहीं है तो रिफंड मिलेगा?", a: "नहीं। PAN निष्क्रिय होने पर रिफंड रुका रहता है और उस अवधि का ब्याज नहीं मिलता। पहले PAN-आधार लिंक करें।" },
    { q: "रिफंड बैंक खाते में नहीं आया, स्टेटस 'Refund failed' है?", a: "पोर्टल पर सही बैंक खाता pre-validate करें, फिर \"Refund Reissue\" से दोबारा अनुरोध करें।" },
    { q: "क्या बिना लॉगिन रिफंड स्टेटस देख सकते हैं?", a: "रिफंड बैंकर (NSDL/Protean) की साइट पर PAN और वर्ष से देख सकते हैं, पर पूरी जानकारी आयकर पोर्टल पर लॉगिन करके ही मिलती है।" },
  ],
  related: [
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिफंड के लिए रिटर्न भरें" },
    { href: "/service/form16-form26as.html", emoji: "📄", title: "फॉर्म 16 और 26AS", text: "कितना TDS कटा" },
    { href: "/service/ais-annual-information-statement.html", emoji: "📊", title: "AIS", text: "आय और TDS की जानकारी" },
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "PAN-आधार लिंक", text: "निष्क्रिय PAN ठीक करें" },
    { href: "/service/form-15g-15h-submission.html", emoji: "📝", title: "फॉर्म 15G/15H", text: "ब्याज पर TDS न कटवाएं" },
    { href: "/service/tms-advance-tax-payment.html", emoji: "💳", title: "एडवांस टैक्स", text: "किस्त में टैक्स भरें" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/", label: "🔎 आयकर पोर्टल पर स्टेटस" },
    { href: "/service/aadhaar-pan-linking.html", label: "🔗 PAN-आधार लिंक" },
  ],
};
