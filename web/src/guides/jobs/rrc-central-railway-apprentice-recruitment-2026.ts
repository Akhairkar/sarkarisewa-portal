import type { DocGuide } from "../doc/types";

// Sources (checked 19 Nov 2026; rrccr.com could not be opened from the
// sandbox, so a detailed extract of the notice on govtjobsalert.in was used;
// search results from karmasandhan.com, resultbharat.com, mysarkarinaukri.com
// and freejobalert.com show the same 2,861 figure):
// - Notice RRC/CR/AA/2026 dated 03.11.2026; 2,861 Act Apprentice slots
//   (provisional); an addendum of 09.11.2026 adds Engineering (P-Way) slots
//   without a revised total; online 03 Nov - 02 Dec 2026 (17:00) at rrccr.com;
//   clusters Mumbai 1,712, Bhusawal 500, Pune 271, Nagpur 221, Solapur 157;
//   10th min 50% + NCVT ITI in the trade; age 15-24 as on 03.11.2026, SC/ST 5 /
//   OBC 3 / PwBD 10 yrs relaxation; fee Rs 100 (nil for SC/ST/PwBD/women);
//   merit = average of 10th % and ITI %; stipend reported Rs 9,600 a month for
//   one year; no right to absorption in Railways.
// Not confirmed: unit and trade totals (the source says some totals in the
// PDF do not match their rows), revised total after the addendum.
export const rrcCentralRailwayApprenticeRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "RRC मध्य रेलवे अप्रेंटिस 2026" },
  ],
  docHi: "RRC मध्य रेलवे अप्रेंटिस भर्ती",
  title: "मध्य रेलवे RRC अप्रेंटिस भर्ती 2026: 2861 पद, 10वीं+ITI",
  description: "मध्य रेलवे (RRC CR) अप्रेंटिस 2026: 2,861 सीटें, 10वीं (50%) + ITI, बिना परीक्षा मेरिट से चयन। आवेदन 2 दिसंबर 2026 तक rrccr.com पर।",
  published: "2026-11-19",
  modified: "2026-11-19",
  verified: "19 नवंबर 2026",
  h1: "मध्य रेलवे RRC अप्रेंटिस भर्ती 2026: 2,861 सीटों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> रेलवे भर्ती प्रकोष्ठ (RRC), मध्य रेलवे ने नोटिस RRC/CR/AA/2026 (3 नवंबर 2026) के तहत <strong>2,861 एक्ट अप्रेंटिस</strong> सीटें (अस्थायी संख्या) निकाली हैं। 10वीं (कम से कम 50%) और संबंधित ट्रेड में ITI पास युवा <strong>3 नवंबर से 2 दिसंबर 2026 (शाम 5 बजे)</strong> तक rrccr.com पर आवेदन कर सकते हैं। चयन बिना परीक्षा, 10वीं और ITI के अंकों की मेरिट से होगा।",
  facts: [
    ["कुल सीटें", "2,861 (अस्थायी; अप्रेंटिसशिप)"],
    ["आखिरी तारीख", "2 दिसंबर 2026 (शाम 5:00 बजे)"],
    ["योग्यता", "10वीं 50% + संबंधित ट्रेड में ITI"],
    ["आवेदन", "<a href=\"https://www.rrccr.com/\" target=\"_blank\" rel=\"noopener nofollow\">rrccr.com</a>"],
  ],
  notice: "यह अप्रेंटिसशिप (प्रशिक्षण) है, पक्की रेलवे नौकरी नहीं; नोटिस के अनुसार ट्रेनिंग के बाद रेलवे में नौकरी का अधिकार नहीं मिलता। RRC मध्य रेलवे की वेबसाइट हमारे सिस्टम से नहीं खुल सकी, इसलिए जानकारी नोटिस के विस्तृत सार से ली गई है। 9 नवंबर 2026 के संशोधन में इंजीनियरिंग (P-Way) सीटें जुड़ी हैं और कुछ यूनिट-वार आंकड़े आपस में मेल नहीं खाते, इसलिए सीटों के आंकड़े और ट्रेड नोटिस में ज़रूर मिलाएं। हम सरकारी वेबसाइट नहीं हैं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["नोटिस की तारीख", "3 नवंबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "3 नवंबर 2026 (सुबह 11:00 बजे)"],
          ["संशोधन (Addendum)", "9 नवंबर 2026"],
          ["आवेदन की आखिरी तारीख", "2 दिसंबर 2026 (शाम 5:00 बजे)"],
          ["मेरिट लिस्ट / दस्तावेज़ जांच", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "सीटें (क्लस्टर के हिसाब से)",
      table: {
        head: ["क्लस्टर", "सीटें"],
        rows: [
          ["मुंबई", "1,712"],
          ["भुसावल", "500"],
          ["पुणे", "271"],
          ["नागपुर", "221"],
          ["सोलापुर", "157"],
          ["<strong>कुल (अस्थायी)</strong>", "<strong>2,861</strong>"],
        ],
      },
      callout: { kind: "info", html: "रिपोर्टों के अनुसार सबसे ज़्यादा सीटें फिटर, इलेक्ट्रीशियन, वेल्डर, मैकेनिक (डीज़ल) और कारपेंटर में हैं। संशोधन के बाद का कुल आंकड़ा और ट्रेड-वार सीटें नोटिस में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> 10वीं कम से कम 50% कुल अंकों के साथ।",
        "<strong>ITI:</strong> संबंधित ट्रेड में NCVT का नेशनल ट्रेड सर्टिफिकेट, या NCVT/SCVT का प्रोविज़नल सर्टिफिकेट।",
        "<strong>उम्र:</strong> 3 नवंबर 2026 को 15 साल पूरे और 24 साल पूरे न हुए हों।",
        "<strong>उम्र में छूट:</strong> SC/ST को 5 साल, OBC को 3 साल, दिव्यांग (PwBD) को 10 साल; पूर्व सैनिकों को नियम के अनुसार।",
        "इंजीनियरिंग ग्रेजुएट और डिप्लोमा धारक पात्र नहीं बताए गए हैं।",
      ],
    },
    {
      id: "fees",
      title: "फीस और स्टाइपेंड",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["General, OBC (पुरुष)", "₹100"],
          ["SC, ST, दिव्यांग (PwBD), सभी महिलाएं", "कोई फीस नहीं"],
        ],
      },
      callout: { kind: "info", html: "रिपोर्टों में स्टाइपेंड ₹9,600 प्रति माह (1 साल की ट्रेनिंग) बताया गया है; पक्की राशि नोटिस में देखें।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>कोई लिखित परीक्षा नहीं।</strong>",
        "<strong>मेरिट लिस्ट:</strong> 10वीं और ITI के प्रतिशत का साधारण औसत। बराबरी पर बड़ी उम्र वाले को वरीयता।",
        "<strong>दस्तावेज़ जांच और मेडिकल:</strong> चुनी गई यूनिट पर।",
      ],
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें",
      steps: [
        "<a href=\"https://www.rrccr.com/\" target=\"_blank\" rel=\"noopener nofollow\">rrccr.com</a> खोलें और अप्रेंटिस नोटिस और संशोधन पढ़ें।",
        "ऑनलाइन आवेदन लिंक से रजिस्ट्रेशन करें और 10वीं व ITI के अंक मार्कशीट के अनुसार भरें।",
        "क्लस्टर/यूनिट और ट्रेड चुनें।",
        "फोटो, हस्ताक्षर और दस्तावेज़ अपलोड करें; ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> से साइज़ ठीक करें।",
        "लागू हो तो फीस भरें, फॉर्म सबमिट करें और प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "मेरिट केवल अंकों से बनती है; पैसे लेकर चयन कराने का दावा करने वाले धोखेबाज़ हैं।" },
    },
  ],
  official: [
    { href: "https://www.rrccr.com/", title: "RRC मध्य रेलवे", note: "नोटिस RRC/CR/AA/2026 और ऑनलाइन फॉर्म" },
  ],
  faq: [
    { q: "मध्य रेलवे अप्रेंटिस 2026 का फॉर्म कब तक भरें?", a: "2 दिसंबर 2026 को शाम 5 बजे तक rrccr.com पर।" },
    { q: "क्या कोई परीक्षा होगी?", a: "नहीं। चयन 10वीं और ITI के प्रतिशत के औसत से बनी मेरिट से होगा।" },
    { q: "क्या यह पक्की रेलवे नौकरी है?", a: "नहीं। यह अप्रेंटिसशिप है; नोटिस के अनुसार रेलवे में नौकरी का अधिकार नहीं मिलता।" },
    { q: "उम्र सीमा क्या है?", a: "3 नवंबर 2026 को 15 से 24 साल के बीच; SC/ST को 5, OBC को 3 और दिव्यांग को 10 साल की छूट।" },
    { q: "क्या इंजीनियरिंग डिप्लोमा वाले आवेदन कर सकते हैं?", a: "रिपोर्टों के अनुसार नहीं; यह 10वीं + ITI वालों के लिए है। पक्का नोटिस में देखें।" },
  ],
  related: [
    { href: "/jobs/rrc-nwr-jaipur-apprentice-recruitment-2026.html", emoji: "🚆", title: "RRC NWR अप्रेंटिस 2026", text: "उत्तर पश्चिम रेलवे की अप्रेंटिस भर्ती" },
    { href: "/jobs/rrb-ntpc-recruitment-2026.html", emoji: "🚆", title: "RRB NTPC 2026", text: "12वीं और ग्रेजुएट के लिए रेलवे भर्ती" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "उम्र सीमा जांचें" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.rrccr.com/", label: "🚆 rrccr.com पर आवेदन" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
