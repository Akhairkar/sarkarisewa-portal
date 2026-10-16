import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; standupmitra.in and pib.gov.in not reachable
// from the sandbox, search-result extracts used): Stand-Up India scheme
// guidelines as summarised by PIB/Cabinet release Jan 2016 and SIDBI's
// standupmitra.in (composite loan Rs 10 lakh-1 crore for greenfield
// enterprises in manufacturing, services, trading and, from 2019, activities
// allied to agriculture; SC/ST and/or woman entrepreneur 18+; 51%
// shareholding and control in non-individual enterprises; borrower not in
// default; margin money up to 25% with at least 10% own contribution;
// repayment within 7 years with up to 18 months moratorium; collateral or
// guarantee under the Credit Guarantee Fund for Stand-Up India loans run by
// NCGTC), newsonair.gov.in 16 Mar 2026 (Lok Sabha: scheme ended March 2025,
// being redrafted), Budget 2025-26 (new term-loan scheme up to Rs 2 crore
// for 5 lakh first-time women and SC/ST entrepreneurs announced). No
// notification of the new scheme found; old description ("loan available")
// rewritten to reflect the scheme's end.
export const standupIndiaScStWomenLoan: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/category/government-schemes.html" },
    { label: "स्टैंड-अप इंडिया लोन" },
  ],
  docHi: "स्टैंड-अप इंडिया लोन",
  title: "स्टैंड-अप इंडिया लोन योजना (Stand-Up India Scheme)",
  description: "SC/ST और महिला उद्यमियों के लिए ₹10 लाख-₹1 करोड़ का स्टैंड-अप इंडिया लोन: पात्रता, मार्जिन मनी, चुकाने की अवधि। योजना मार्च 2025 में खत्म, नया रूप आना बाकी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "स्टैंड-अप इंडिया लोन (SC/ST और महिला): शर्तें, कागज़ और 2026 की स्थिति",
  lead: "स्टैंड-अप इंडिया लोन SC/ST और महिला उद्यमियों को <strong>नया उद्यम</strong> शुरू करने के लिए बैंकों से <strong>₹10 लाख से ₹1 करोड़</strong> तक का लोन दिलाने वाली केंद्र सरकार की योजना थी। योजना <strong>31 मार्च 2025 को खत्म</strong> हो गई और सरकार ने मार्च 2026 में बताया कि इसे नए सिरे से बनाया जा रहा है। नीचे पुरानी योजना की शर्तें हैं, ताकि नई योजना आने पर आप तैयारी रख सकें; नई योजना की शर्तें अलग हो सकती हैं।",
  facts: [
    ["लोन राशि", "₹10 लाख - ₹1 करोड़ (पुरानी योजना)"],
    ["किसके लिए", "18+ SC/ST या महिला, नया उद्यम"],
    ["चुकाने की अवधि", "7 साल तक, 18 महीने तक की छूट अवधि"],
    ["स्थिति", "मार्च 2025 में खत्म; नया रूप आना बाकी"],
  ],
  notice: "15 अक्टूबर 2026 तक नई स्टैंड-अप इंडिया योजना की अधिसूचना हमें नहीं मिली। लोन \"पक्का\" कराने के नाम पर फीस मांगने वाले एजेंटों से बचें; लोन सिर्फ बैंक देता है।",
  sections: [
    {
      id: "patrata",
      title: "पुरानी योजना में कौन पात्र था",
      list: [
        "18 साल से ऊपर का SC या ST व्यक्ति, या कोई भी महिला",
        "उद्यम <strong>नया (greenfield)</strong> हो: निर्माण, सेवा, व्यापार या 2019 से कृषि-सम्बद्ध काम (जैसे डेयरी, मुर्गी पालन, खाद्य प्रसंस्करण)",
        "कंपनी/साझेदारी फर्म हो तो कम से कम <strong>51% हिस्सा और नियंत्रण</strong> SC/ST या महिला उद्यमी के पास",
        "आवेदक किसी बैंक/वित्तीय संस्था का डिफॉल्टर न हो",
      ],
    },
    {
      id: "sharten",
      title: "लोन की मुख्य शर्तें (पुरानी योजना)",
      table: {
        head: ["बात", "शर्त"],
        rows: [
          ["लोन", "₹10 लाख से ₹1 करोड़; टर्म लोन + कार्यशील पूंजी मिलाकर"],
          ["अपना हिस्सा (मार्जिन मनी)", "परियोजना लागत का 25% तक मार्जिन; इसमें कम से कम 10% उद्यमी का अपना पैसा। बाकी दूसरी सरकारी योजनाओं से जोड़ा जा सकता था"],
          ["ब्याज", "बैंक की उस श्रेणी की सबसे कम दर, तय सीमा के अंदर"],
          ["गिरवी", "गिरवी या स्टैंड-अप इंडिया क्रेडिट गारंटी फंड (NCGTC) की गारंटी"],
          ["चुकाना", "7 साल के अंदर, अधिकतम 18 महीने की मोहलत (moratorium)"],
        ],
      },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "पहचान और पते का प्रमाण (आधार, PAN, वोटर ID)",
        "<a href=\"/service/caste-certificate.html\">जाति प्रमाण पत्र</a> (SC/ST आवेदक के लिए)",
        "बिज़नेस का प्रोजेक्ट रिपोर्ट: लागत, मशीन, कमाई का अनुमान",
        "दुकान/फैक्ट्री की जगह का किराया-नामा या मालिकाना कागज़, ज़रूरी लाइसेंस",
        "फर्म/कंपनी हो तो साझेदारी डीड या कंपनी के कागज़; पिछले 6-12 महीने का बैंक स्टेटमेंट",
      ],
    },
    {
      id: "ab-kya",
      title: "अब आवेदन कैसे करें",
      steps: [
        "<strong>स्थिति जांचें:</strong> अपनी बैंक शाखा या <a href=\"https://www.standupmitra.in/\" target=\"_blank\" rel=\"noopener nofollow\">standupmitra.in</a> पर पूछें कि नई योजना शुरू हुई है या नहीं।",
        "<strong>तैयारी रखें:</strong> प्रोजेक्ट रिपोर्ट, <a href=\"/service/udyam-registration.html\">Udyam रजिस्ट्रेशन</a> और ऊपर के कागज़ तैयार करें।",
        "<strong>दूसरे विकल्प देखें:</strong> तब तक <a href=\"/service/pm-mudra-yojana.html\">मुद्रा लोन</a>, पीएम विश्वकर्मा या राज्य के SC/ST/महिला विकास निगम की योजनाएं देख सकते हैं।",
        "<strong>ज़िला उद्योग केंद्र (DIC):</strong> प्रोजेक्ट रिपोर्ट बनाने और सही योजना चुनने में मदद लें।",
      ],
    },
  ],
  official: [
    { href: "https://www.standupmitra.in/", title: "Stand-Up Mitra पोर्टल (SIDBI)" },
    { href: "https://financialservices.gov.in/", title: "वित्तीय सेवाएं विभाग, वित्त मंत्रालय" },
  ],
  faq: [
    { q: "क्या अभी स्टैंड-अप इंडिया लोन मिल रहा है?", a: "योजना 31 मार्च 2025 को खत्म हो गई और नई योजना की अधिसूचना 15 अक्टूबर 2026 तक हमें नहीं मिली। अपनी बैंक शाखा से ताज़ा स्थिति पूछें।" },
    { q: "क्या पुरुष SC/ST उद्यमी भी पात्र थे?", a: "हां। SC या ST वर्ग के पुरुष और महिला दोनों, और किसी भी वर्ग की महिला पात्र थीं।" },
    { q: "क्या पुराना चल रहा बिज़नेस बढ़ाने के लिए यह लोन मिलता था?", a: "नहीं, यह सिर्फ नए (greenfield) उद्यम के लिए था।" },
    { q: "लोन चुकाने के लिए कितना समय मिलता था?", a: "7 साल तक, जिसमें अधिकतम 18 महीने की मोहलत शामिल थी।" },
  ],
  related: [
    { href: "/service/stand-up-india.html", emoji: "📜", title: "स्टैंड अप इंडिया योजना", text: "योजना की स्थिति और नया रूप" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "छोटे कारोबार के लिए लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "Udyam रजिस्ट्रेशन", text: "MSME पंजीकरण" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "SC/ST प्रमाण" },
  ],
  aside: [
    { href: "https://www.standupmitra.in/", label: "🏦 Stand-Up Mitra" },
    { href: "/service/stand-up-india.html", label: "📜 योजना की स्थिति" },
  ],
};
