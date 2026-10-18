import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; iprc.gov.in could not be opened from the
// sandbox, but its home page / ISRO careers page text in search results shows
// "IPRC/RMT/2026/01 dated 12.09.2026 ... online application last date extended
// till 24.10.2026 (up to 5 pm)" and fee payment till 29.10.2026 (5 pm)).
// Post details from coverage of the advertisement: testbook.com,
// pw.live/gate/exams/isro-iprc-recruitment-2026, kollegeapply, govtjobguru.in,
// freejobalert.com (article 3067463), karmasandhan.com, odijobinform.in.
// Agreed facts: 22 posts at ISRO Propulsion Complex, Mahendragiri (TN):
// Technical Assistant 5 (Level 7, ₹44,900-1,42,400), Technician 'B' 13
// (Level 3, ₹21,700-69,100), Cook 'A' 1 and Fireman 'A' 3 (Level 2,
// ₹19,900-63,200); online from 15 Sep 2026; age 18-35 (Fireman 18-25) on the
// original last date 5 Oct 2026; Technician B = 10th + ITI NTC/NAC; TA =
// first-class diploma in the branch; written test + skill test (Fireman also
// PET + medical). Fee/refund, Cook/Fireman qualifications, branch/trade-wise
// split and relaxations: left to the advertisement.
export const isroIprcRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "ISRO IPRC 2026" },
  ],
  docHi: "ISRO IPRC भर्ती 2026",
  title: "इसरो आईपीआरसी भर्ती 2026 — टेक्नीशियन, फायरमैन (22 पद)",
  description: "ISRO IPRC महेंद्रगिरि भर्ती 2026: टेक्निकल असिस्टेंट, टेक्नीशियन-B, कुक और फायरमैन के 22 पद। आखिरी तारीख बढ़कर 24 अक्टूबर 2026 (शाम 5 बजे)।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "ISRO IPRC भर्ती 2026: 22 पदों पर आवेदन की तारीख 24 अक्टूबर तक बढ़ी",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> इसरो के प्रणोदन परिसर (ISRO Propulsion Complex, IPRC), महेंद्रगिरि (तमिलनाडु) ने विज्ञापन IPRC/RMT/2026/01 से <strong>22 पदों</strong> की भर्ती निकाली है: टेक्निकल असिस्टेंट, टेक्नीशियन-B, कुक-A और फायरमैन-A। ऑनलाइन आवेदन की आखिरी तारीख 5 अक्टूबर से बढ़ाकर <strong>24 अक्टूबर 2026 (शाम 5 बजे)</strong> कर दी गई है।",
  facts: [
    ["कुल पद", "22"],
    ["आखिरी तारीख", "24 अक्टूबर 2026, शाम 5 बजे (फीस 29 अक्टूबर तक)"],
    ["उम्र", "18 से 35 साल (फायरमैन 18 से 25)"],
    ["आवेदन", "<a href=\"https://www.iprc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">iprc.gov.in</a>"],
  ],
  notice: "18 अक्टूबर 2026 तक: IPRC की वेबसाइट पर आखिरी तारीख 24 अक्टूबर 2026 (शाम 5 बजे) और फीस भरने की आखिरी तारीख 29 अक्टूबर 2026 (शाम 5 बजे) बताई गई है। कई पुरानी वेबसाइटें अभी भी 5 अक्टूबर दिखा रही हैं। यह साइट निजी है, ISRO या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन (IPRC/RMT/2026/01)", "12 सितंबर 2026"],
          ["ऑनलाइन आवेदन शुरू", "15 सितंबर 2026"],
          ["आवेदन की आखिरी तारीख (बढ़ी हुई)", "24 अक्टूबर 2026, शाम 5 बजे"],
          ["फीस भरने की आखिरी तारीख", "29 अक्टूबर 2026, शाम 5 बजे"],
          ["लिखित परीक्षा", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पद संख्या", "वेतन स्तर"],
        rows: [
          ["टेक्निकल असिस्टेंट", "5", "Level 7 (₹44,900 – ₹1,42,400)"],
          ["टेक्नीशियन 'B'", "13", "Level 3 (₹21,700 – ₹69,100)"],
          ["कुक 'A'", "1", "Level 2 (₹19,900 – ₹63,200)"],
          ["फायरमैन 'A'", "3", "Level 2 (₹19,900 – ₹63,200)"],
          ["<strong>कुल</strong>", "<strong>22</strong>", ""],
        ],
      },
      callout: { kind: "info", html: "ब्रांच/ट्रेड-वार और वर्गवार पद विज्ञापन में देखें। वेतन के साथ केंद्र सरकार के नियमों के अनुसार DA, HRA आदि मिलते हैं।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>टेक्निकल असिस्टेंट:</strong> संबंधित ब्रांच में फर्स्ट क्लास इंजीनियरिंग डिप्लोमा।",
        "<strong>टेक्नीशियन 'B':</strong> 10वीं पास + संबंधित ट्रेड में ITI (NCVT से NTC/NAC)।",
        "<strong>कुक 'A' और फायरमैन 'A':</strong> योग्यता और अनुभव विज्ञापन में देखें।",
        "<strong>उम्र:</strong> टेक्निकल असिस्टेंट, टेक्नीशियन-B और कुक के लिए 18 से 35 साल; फायरमैन के लिए 18 से 25 साल (5 अक्टूबर 2026 को)।",
        "<strong>उम्र में छूट:</strong> SC/ST, OBC, दिव्यांग और पूर्व सैनिकों को केंद्र सरकार के नियमों के अनुसार; विज्ञापन में देखें।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      html: "फीस और फीस वापसी (refund) के नियम: <strong>नोटिफिकेशन में देखें।</strong> फीस 29 अक्टूबर 2026 (शाम 5 बजे) तक भरनी है।",
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>लिखित परीक्षा।</strong>",
        "<strong>स्किल टेस्ट</strong> (केवल क्वालिफाइंग)।",
        "<strong>फायरमैन के लिए:</strong> शारीरिक दक्षता परीक्षा (PET) और मेडिकल भी।",
        "<strong>दस्तावेज़ जांच</strong> के बाद नियुक्ति।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://www.iprc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">iprc.gov.in</a> खोलें और Careers में विज्ञापन IPRC/RMT/2026/01 पढ़ें।",
        "ऑनलाइन आवेदन लिंक से रजिस्ट्रेशन करें और पद चुनें।",
        "शिक्षा, ITI/डिप्लोमा और वर्ग की जानकारी भरें।",
        "फोटो और हस्ताक्षर तय साइज़ में अपलोड करें; ज़रूरत हो तो <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> इस्तेमाल करें।",
        "24 अक्टूबर शाम 5 बजे से पहले फॉर्म जमा करें, फीस 29 अक्टूबर तक भरें और प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "समय शाम 5 बजे तक का है, आधी रात का नहीं। आखिरी दिन का इंतज़ार न करें।" },
    },
  ],
  official: [
    { href: "https://www.iprc.gov.in/", title: "ISRO प्रणोदन परिसर (IPRC), महेंद्रगिरि", note: "विज्ञापन IPRC/RMT/2026/01 और आवेदन" },
    { href: "https://www.isro.gov.in/CurrentOpportunities.html", title: "ISRO: वर्तमान अवसर" },
  ],
  faq: [
    { q: "ISRO IPRC 2026 का फॉर्म कब तक भर सकते हैं?", a: "बढ़ी हुई तारीख के अनुसार 24 अक्टूबर 2026 शाम 5 बजे तक। फीस 29 अक्टूबर 2026 शाम 5 बजे तक भरी जा सकती है।" },
    { q: "कितने पद हैं?", a: "कुल 22: टेक्निकल असिस्टेंट 5, टेक्नीशियन-B 13, कुक-A 1 और फायरमैन-A 3।" },
    { q: "टेक्नीशियन-B के लिए क्या योग्यता चाहिए?", a: "10वीं पास और संबंधित ट्रेड में NCVT से ITI (NTC/NAC)।" },
    { q: "नौकरी कहां होगी?", a: "ISRO प्रणोदन परिसर, महेंद्रगिरि (ज़िला तिरुनेलवेली, तमिलनाडु)।" },
    { q: "उम्र सीमा क्या है?", a: "ज़्यादातर पदों के लिए 18 से 35 साल, फायरमैन के लिए 18 से 25 साल; आरक्षित वर्गों को नियमों के अनुसार छूट।" },
  ],
  related: [
    { href: "/jobs/isro-recruitment-2026-assistant-udc-jpa-stenographer-244-posts-ms8e3oon-0.html", emoji: "🚀", title: "ISRO असिस्टेंट/UDC भर्ती", text: "ISRO की दूसरी भर्ती" },
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "ITI/डिप्लोमा के लिए भर्तियां" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "अपनी उम्र जांचें" },
  ],
  aside: [
    { href: "https://www.iprc.gov.in/", label: "🚀 iprc.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
