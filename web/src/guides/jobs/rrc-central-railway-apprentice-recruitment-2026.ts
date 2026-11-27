import type { DocGuide } from "../doc/types";

// Sources: official RRC/CR notification RRC/CR/AA/2026 dated 03.11.2026
// and official addendum dated 09.11.2026 (Engineering P-Way). The original
// notification has 2,861 slots; the addendum adds 948 P-Way slots. Their
// combined arithmetic is 3,809 provisional slots; the addendum does not
// print a revised grand total. Both official PDFs are linked below.
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
  modified: "2026-11-27",
  verified: "27 नवंबर 2026 (आधिकारिक नोटिफिकेशन और addendum)",
  h1: "मध्य रेलवे RRC अप्रेंटिस भर्ती 2026: 2,861 सीटों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> RRC मध्य रेलवे की 3 नवंबर 2026 की अधिसूचना में <strong>2,861 स्लॉट</strong> थे। 9 नवंबर के आधिकारिक addendum ने सभी पांच clusters में Engineering (P-Way) unit जोड़कर <strong>948 अतिरिक्त स्लॉट</strong> दिए। दोनों दस्तावेज़ों को मिलाकर <strong>3,809 provisional slots</strong> होते हैं (यह जोड़ है; addendum में नया grand total नहीं छपा)। 10वीं में कम से कम 50% और संबंधित ट्रेड में ITI वाले उम्मीदवार <strong>2 दिसंबर 2026 शाम 5 बजे</strong> तक आवेदन कर सकते हैं।",
  facts: [
    ["कुल स्लॉट", "3,809 (2,861 मूल + 948 P-Way addendum; provisional)"],
    ["आखिरी तारीख", "2 दिसंबर 2026 (शाम 5:00 बजे)"],
    ["योग्यता", "10वीं 50% + संबंधित ट्रेड में ITI"],
    ["आवेदन", "<a href=\"https://www.rrccr.com/\" target=\"_blank\" rel=\"noopener nofollow\">rrccr.com</a>"],
  ],
  notice: "यह अप्रेंटिसशिप (प्रशिक्षण) है, पक्की रेलवे नौकरी नहीं; ट्रेनिंग के बाद रेलवे में नौकरी का अधिकार नहीं मिलता। मूल अधिसूचना में 2,861 स्लॉट हैं और 9 नवंबर 2026 के आधिकारिक addendum में Engineering (P-Way) के 948 अतिरिक्त स्लॉट हैं। 3,809 कुल provisional slots का आंकड़ा दोनों दस्तावेज़ जोड़कर निकाला गया है; addendum स्वयं revised grand total नहीं देता। आवेदन से पहले दोनों PDF और अपने ट्रेड/यूनिट की vacancy आधिकारिक वेबसाइट पर मिलाएं। यह निजी सूचना पेज है, रेलवे की वेबसाइट नहीं.",
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
          ["मुंबई", "1,712 मूल + 232 P-Way = 1,944"],
          ["भुसावल", "500 मूल + 212 P-Way = 712"],
          ["पुणे", "271 मूल + 163 P-Way = 434"],
          ["नागपुर", "221 मूल + 229 P-Way = 450"],
          ["सोलापुर", "157 मूल + 112 P-Way = 269"],
          ["<strong>मूल अधिसूचना</strong>", "<strong>2,861</strong>"],
          ["<strong>P-Way addendum</strong>", "<strong>948</strong>"],
          ["<strong>दोनों का जोड़ (provisional)</strong>", "<strong>3,809</strong>"],
        ],
      },
      callout: { kind: "info", html: "9 नवंबर के addendum में Engineering (P-Way) के लिए अलग trade-wise और cluster-wise slots दिए गए हैं। जिन उम्मीदवारों ने 9 नवंबर 2026 या उससे पहले आवेदन जमा किया था, वे अपने trade के अनुसार P-Way unit preference जोड़ने के लिए form edit और resubmit कर सकते हैं।" },
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
    { href: "https://rrccr.com/rrwc/Files/7131ab94-6fc8-45c1-a2ed-f9191914dcbd.pdf", title: "मूल अधिसूचना RRC/CR/AA/2026 (3 नवंबर 2026)", note: "2,861 मूल स्लॉट" },
    { href: "https://www.rrccr.com/rrwc/Files/f3eac96f-d89e-422b-8e7f-fd17de727582.pdf", title: "Engineering (P-Way) Addendum (9 नवंबर 2026)", note: "948 अतिरिक्त स्लॉट; trade-wise विवरण" },
    { href: "https://www.rrccr.com/", title: "RRC मध्य रेलवे", note: "आधिकारिक वेबसाइट और ऑनलाइन फॉर्म" },
  ],
  faq: [
    { q: "मध्य रेलवे अप्रेंटिस 2026 में कुल कितने स्लॉट हैं?", a: "मूल नोटिफिकेशन के 2,861 स्लॉट और 9 नवंबर के addendum के 948 P-Way स्लॉट मिलाकर 3,809 provisional स्लॉट होते हैं। addendum में नया grand total नहीं छपा है।" },
    { q: "अगर पहले आवेदन कर दिया है तो P-Way unit जोड़ सकते हैं?", a: "जिन उम्मीदवारों ने 9 नवंबर 2026 या उससे पहले आवेदन जमा किया था, वे अपने trade के अनुसार Engineering (P-Way) unit preference जोड़ने के लिए आवेदन edit और resubmit कर सकते हैं।" },
    { q: "मध्य रेलवे अप्रेंटिस 2026 का फॉर्म कब तक भरें?", a: "2 दिसंबर 2026 को शाम 5 बजे तक rrccr.com पर।" },
    { q: "क्या कोई परीक्षा होगी?", a: "नहीं। चयन 10वीं और ITI के प्रतिशत के औसत से बनी मेरिट से होगा।" },
    { q: "क्या यह पक्की रेलवे नौकरी है?", a: "नहीं। यह अप्रेंटिसशिप है; नोटिस के अनुसार रेलवे में नौकरी का अधिकार नहीं मिलता।" },
    { q: "उम्र सीमा क्या है?", a: "3 नवंबर 2026 को 15 से 24 साल के बीच; SC/ST को 5, OBC को 3 और दिव्यांग को 10 साल की छूट।" },
    { q: "क्या इंजीनियरिंग डिप्लोमा वाले आवेदन कर सकते हैं?", a: "रिपोर्टों के अनुसार नहीं; यह 10वीं + ITI वालों के लिए है। पक्का नोटिस में देखें।" },
  ],
  related: [
    { href: "/jobs/rrc-central-railway-act-apprentice-recruitment-2026.html", emoji: "🛤️", title: "RRC CR P-Way addendum", text: "948 अतिरिक्त स्लॉट और cluster-wise totals" },
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
