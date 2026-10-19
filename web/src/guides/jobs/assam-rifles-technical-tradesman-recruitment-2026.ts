import type { DocGuide } from "../doc/types";

// Sources (checked 19 Oct 2026; assamrifles.gov.in could not be opened from
// the sandbox, so coverage of the official Advertisement Memo No. I.12016/A
// Branch (Rect Cell)/2026/1310 dated 27 Aug 2026 was used):
// - sarkarijobs.com, education.sakshi.com, adda247, careerpower, pw.live,
//   resultbharat, freejobalert, indiajobalerts: 354 Group C posts (tentative)
//   in Technical and Tradesman trades; online only on assamrifles.gov.in
//   28 Sep 2026 to 28 Oct 2026 23:59; rally tentatively from 23 Nov 2026;
//   fee ₹100 UR/OBC/EWS, nil SC/ST/ESM; age on 1 Jul 2026: 18-25 for Warrant
//   Officer (Cipher/Draughtsman/OTT/Physiotherapist), 18-23 for Rifleman
//   trades and Havildar (Instrument Mechanic); SC/ST +5, OBC +3; PwBD not
//   eligible; selection PST/PET, CBT (100 marks), trade skill test, document
//   verification, medical; largest trades WO (Cipher) 124, Rifleman (EFS) 32,
//   Armourer 29, Mason 29, Electrician MV 22; category split UR 145, OBC 97,
//   SC 53, EWS 34, ST 25 (= 354).
// Not confirmed (left to the notification): exact trade count (17 vs 18),
// full trade-wise table, pay level per rank, eligibility by gender.
export const assamRiflesTechnicalTradesmanRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "असम राइफल्स ट्रेड्समैन 2026" },
  ],
  docHi: "असम राइफल्स टेक्निकल और ट्रेड्समैन भर्ती 2026",
  title: "असम राइफल्स टेक्निकल और ट्रेड्समैन भर्ती 2026: 354 पद",
  description: "असम राइफल्स टेक्निकल और ट्रेड्समैन भर्ती रैली 2026: वारंट ऑफिसर, हवलदार, राइफलमैन के 354 पद। ऑनलाइन आवेदन 28 अक्टूबर 2026 तक। उम्र, फीस, चयन।",
  published: "2026-10-19",
  modified: "2026-10-19",
  verified: "19 अक्टूबर 2026",
  h1: "असम राइफल्स टेक्निकल और ट्रेड्समैन भर्ती 2026: 354 पद, आवेदन 28 अक्टूबर तक",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> असम राइफल्स (महानिदेशालय, शिलांग) ने टेक्निकल और ट्रेड्समैन भर्ती रैली 2026 में <strong>354 पदों</strong> (Group C, संभावित) के लिए आवेदन मांगे हैं। इनमें <strong>वारंट ऑफिसर, हवलदार और राइफलमैन</strong> के अलग-अलग ट्रेड हैं; सबसे ज़्यादा पद वारंट ऑफिसर (साइफर) के 124 हैं। ऑनलाइन आवेदन <strong>28 अक्टूबर 2026 (रात 11:59)</strong> तक assamrifles.gov.in पर। रैली 23 नवंबर 2026 से (संभावित)।",
  facts: [
    ["कुल पद", "354 (संभावित), Group C"],
    ["आखिरी तारीख", "28 अक्टूबर 2026, रात 11:59"],
    ["उम्र की गणना", "1 जुलाई 2026 को"],
    ["आवेदन", "<a href=\"https://www.assamrifles.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">assamrifles.gov.in</a>"],
  ],
  notice: "19 अक्टूबर 2026 तक: आवेदन चालू है। असम राइफल्स की वेबसाइट हमारी ओर से नहीं खुल सकी, इसलिए ये जानकारी आधिकारिक विज्ञापन (27 अगस्त 2026) पर आधारित कई रिपोर्टों से मिलाकर दी गई है। ट्रेडवार पद, योग्यता और वेतन assamrifles.gov.in पर विज्ञापन में ज़रूर देखें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन जारी", "27 अगस्त 2026"],
          ["ऑनलाइन आवेदन शुरू", "28 सितंबर 2026"],
          ["आवेदन की आखिरी तारीख", "28 अक्टूबर 2026 (रात 11:59)"],
          ["भर्ती रैली", "23 नवंबर 2026 से (संभावित)"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद (मुख्य ट्रेड)",
      table: {
        head: ["पद / ट्रेड", "पद संख्या"],
        rows: [
          ["वारंट ऑफिसर (साइफर)", "124"],
          ["राइफलमैन (इलेक्ट्रिकल फिटर सिग्नल)", "32"],
          ["राइफलमैन (आर्मरर)", "29"],
          ["राइफलमैन (मेसन)", "29"],
          ["राइफलमैन (इलेक्ट्रीशियन मोटर व्हीकल)", "22"],
          ["हवलदार (इंस्ट्रूमेंट मैकेनिक)", "6"],
          ["वारंट ऑफिसर (फिज़ियोथेरेपिस्ट, ऑपरेशन थिएटर टेक्नीशियन, ड्राफ्ट्समैन) और अन्य राइफलमैन ट्रेड", "बाकी पद; ट्रेडवार संख्या नोटिफिकेशन में देखें"],
        ],
      },
      callout: { kind: "info", html: "वर्गवार कुल पद: सामान्य 145, OBC 97, SC 53, EWS 34, ST 25। हर पद का वेतन स्तर (Pay Level) नोटिफिकेशन में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>पढ़ाई:</strong> ट्रेड के अनुसार 10वीं, 12वीं, ITI या डिप्लोमा। उदाहरण: वारंट ऑफिसर (साइफर) के लिए 12वीं (फिज़िक्स, मैथ्स, अंग्रेज़ी के साथ साइंस) + संबंधित ट्रेड में 2 साल का ITI, या इलेक्ट्रॉनिक्स/ICT में बैचलर डिग्री। बाकी ट्रेड की योग्यता नोटिफिकेशन में देखें।",
        "<strong>उम्र (1 जुलाई 2026 को):</strong> वारंट ऑफिसर (साइफर, ड्राफ्ट्समैन, ऑपरेशन थिएटर टेक्नीशियन, फिज़ियोथेरेपिस्ट) के लिए 18-25 साल; राइफलमैन ट्रेड और हवलदार (इंस्ट्रूमेंट मैकेनिक) के लिए 18-23 साल।",
        "<strong>उम्र में छूट:</strong> SC/ST को 5 साल, OBC को 3 साल; पूर्व सैनिकों को नियमों के अनुसार।",
        "दिव्यांग (PwBD) उम्मीदवार इस भर्ती के लिए योग्य नहीं हैं।",
        "शारीरिक मानक (लंबाई, छाती आदि) और पुरुष/महिला पात्रता नोटिफिकेशन में देखें।",
      ],
    },
    {
      id: "fees",
      title: "आवेदन फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["सामान्य, OBC, EWS", "₹100"],
          ["SC, ST, पूर्व सैनिक", "कोई फीस नहीं"],
        ],
      },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>शारीरिक मानक परीक्षा (PST) और शारीरिक दक्षता परीक्षा (PET)</strong> रैली में।",
        "<strong>कंप्यूटर आधारित परीक्षा (CBT):</strong> 100 अंक।",
        "<strong>ट्रेड/स्किल टेस्ट:</strong> ट्रेड के अनुसार।",
        "<strong>दस्तावेज़ जांच और मेडिकल जांच।</strong>",
      ],
      html: "रैली की जगह और तारीख एडमिट कार्ड में दी जाएगी।",
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://www.assamrifles.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">assamrifles.gov.in</a> खोलें और \"Technical and Tradesman Recruitment Rally 2026\" का विज्ञापन पढ़ें।",
        "ऑनलाइन फॉर्म में मोबाइल नंबर और ईमेल से रजिस्ट्रेशन करें और अपना ट्रेड चुनें।",
        "फोटो, हस्ताक्षर और प्रमाणपत्र अपलोड करें। ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> से साइज़ ठीक करें।",
        "सामान्य/OBC/EWS उम्मीदवार ₹100 फीस ऑनलाइन भरें, फॉर्म जमा करें और प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "आवेदन केवल ऑनलाइन है। भर्ती के नाम पर पैसे मांगने वाले दलालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://www.assamrifles.gov.in/", title: "असम राइफल्स की वेबसाइट", note: "विज्ञापन और ऑनलाइन फॉर्म" },
  ],
  faq: [
    { q: "असम राइफल्स ट्रेड्समैन 2026 का फॉर्म कब तक भरें?", a: "28 अक्टूबर 2026 रात 11:59 बजे तक, केवल assamrifles.gov.in पर।" },
    { q: "कितने पद हैं?", a: "कुल 354 (संभावित)। सबसे ज़्यादा वारंट ऑफिसर (साइफर) के 124 पद हैं।" },
    { q: "उम्र सीमा क्या है?", a: "1 जुलाई 2026 को वारंट ऑफिसर ट्रेड के लिए 18-25 साल और राइफलमैन/हवलदार ट्रेड के लिए 18-23 साल। SC/ST को 5 और OBC को 3 साल की छूट।" },
    { q: "फीस कितनी है?", a: "सामान्य, OBC और EWS के लिए ₹100; SC, ST और पूर्व सैनिकों के लिए कोई फीस नहीं।" },
    { q: "भर्ती रैली कब होगी?", a: "संभावित रूप से 23 नवंबर 2026 से। सही तारीख और जगह एडमिट कार्ड में आएगी।" },
  ],
  related: [
    { href: "/jobs/itbp-constable-gd-sports-quota-recruitment-2026.html", emoji: "🏔️", title: "ITBP स्पोर्ट्स कोटा", text: "कांस्टेबल GD" },
    { href: "/jobs/indian-coast-guard-navik-yantrik-recruitment-2026.html", emoji: "⚓", title: "कोस्ट गार्ड नाविक", text: "नाविक और यांत्रिक" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जुलाई 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://www.assamrifles.gov.in/", label: "🪖 assamrifles.gov.in पर आवेदन" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
