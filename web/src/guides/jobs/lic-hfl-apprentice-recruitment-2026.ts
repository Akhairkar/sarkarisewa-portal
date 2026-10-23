import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; lichousing.com, NATS and BFSI SSC portals could
// not be opened from the sandbox, so coverage of the official notice was used
// and cross-checked): pw.live, adda247.com, testbook.com, bankersadda.com,
// careerindia.com, education.sakshi.com, karmasandhan.com, quicksarkari.com,
// rojgarresult.com, placementstore.com, freejobalert.com (article 3074488).
// Agreed facts: LIC Housing Finance Ltd Apprenticeship Program-010, 232 graduate
// apprentice seats (state-wise; e.g. Maharashtra 28, Karnataka 24, UP 16,
// Telangana 16, Rajasthan 15), 12 months; apply 20 Oct (one source 21 Oct)
// to 1 Nov 2026 via NATS + BFSI SSC fee; online exam 7 Nov 2026; age 20-25 as
// on 01.10.2026; graduate in any stream; no earlier apprenticeship; stipend
// ₹16,650 (metro) / ₹14,150 (other cities) reported; fee ₹800+GST Gen/EWS/OBC
// male, ₹600+GST women/transgender, ₹200+GST SC/ST/PwBD. Tamil Nadu and West
// Bengal seat counts differ between sources, so left to the notice; graduation
// date window and age relaxations left to the notice.
export const licHflApprenticeRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "LIC HFL अप्रेंटिस 2026" },
  ],
  docHi: "LIC HFL अप्रेंटिस 2026",
  title: "LIC HFL अप्रेंटिस भर्ती 2026 — 232 पद, 1 नवंबर तक आवेदन",
  description: "LIC हाउसिंग फाइनेंस अप्रेंटिस 2026: ग्रेजुएट्स के लिए 232 सीटें, आवेदन 1 नवंबर 2026 तक, परीक्षा 7 नवंबर। उम्र 20-25, स्टाइपेंड, फीस और आवेदन का तरीका।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "LIC HFL अप्रेंटिस भर्ती 2026: 232 सीटों पर आवेदन 1 नवंबर तक",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> LIC हाउसिंग फाइनेंस लिमिटेड (LIC HFL) ने ग्रेजुएट युवाओं के लिए <strong>232 अप्रेंटिस सीटों</strong> पर 12 महीने की ट्रेनिंग निकाली है। आवेदन <strong>1 नवंबर 2026</strong> तक NATS पोर्टल से होगा और ऑनलाइन परीक्षा <strong>7 नवंबर 2026</strong> को है। उम्र 20 से 25 साल होनी चाहिए। यह अप्रेंटिसशिप है, पक्की नौकरी नहीं।",
  facts: [
    ["कुल सीटें", "232 (राज्यवार)"],
    ["आखिरी तारीख", "1 नवंबर 2026"],
    ["उम्र", "20 से 25 साल (1 अक्टूबर 2026 को)"],
    ["परीक्षा", "7 नवंबर 2026 (ऑनलाइन)"],
  ],
  notice: "23 अक्टूबर 2026 तक आवेदन चालू है (Apprenticeship Program-010)। यह जानकारी LIC HFL के नोटिफिकेशन पर आधारित कई रिपोर्टों से जांची गई है; फॉर्म से पहले lichousing.com पर पूरा नोटिफिकेशन पढ़ें। यह साइट निजी है, LIC HFL या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["आवेदन शुरू", "20 अक्टूबर 2026"],
          ["आवेदन और फीस की आखिरी तारीख", "1 नवंबर 2026"],
          ["ऑनलाइन परीक्षा", "7 नवंबर 2026"],
        ],
      },
    },
    {
      id: "pad",
      title: "सीटें और स्टाइपेंड",
      table: {
        head: ["राज्य (उदाहरण)", "सीटें"],
        rows: [
          ["महाराष्ट्र", "28"],
          ["कर्नाटक", "24"],
          ["उत्तर प्रदेश", "16"],
          ["तेलंगाना", "16"],
          ["राजस्थान", "15"],
          ["आंध्र प्रदेश", "13"],
          ["बिहार / मध्य प्रदेश", "10-10"],
          ["बाकी राज्य", "नोटिफिकेशन में देखें"],
          ["<strong>कुल</strong>", "<strong>232</strong>"],
        ],
      },
      callout: { kind: "info", html: "रिपोर्टों के अनुसार स्टाइपेंड मेट्रो शहरों में ₹16,650 और बाकी शहरों में ₹14,150 प्रति माह है; अपनी जगह का स्टाइपेंड नोटिफिकेशन में जांचें। ट्रेनिंग 12 महीने की है और इसके बाद नौकरी की गारंटी नहीं है।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> किसी भी विषय में ग्रेजुएशन (मान्य विश्वविद्यालय से)। ग्रेजुएशन किस तारीख के बीच पूरा होना चाहिए, यह नोटिफिकेशन में देखें।",
        "<strong>उम्र:</strong> 1 अक्टूबर 2026 को 20 से 25 साल। आरक्षित वर्ग की छूट नोटिफिकेशन में देखें।",
        "जिसने पहले किसी संस्था में अप्रेंटिसशिप पूरी की है, कर रहा है या बीच में छोड़ी है, वह आवेदन नहीं कर सकता।",
        "जिस राज्य की सीट के लिए आवेदन करें, वहां की स्थानीय भाषा आनी चाहिए (शर्त नोटिफिकेशन में देखें)।",
      ],
      html: "अपनी उम्र <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> से 1 अक्टूबर 2026 की तारीख डालकर देखें।",
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["General / EWS / OBC (पुरुष)", "₹800 + GST"],
          ["General / EWS / OBC (महिला, ट्रांसजेंडर)", "₹600 + GST"],
          ["SC / ST / दिव्यांग (PwBD)", "₹200 + GST"],
        ],
      },
      callout: { kind: "info", html: "फीस BFSI SSC के पोर्टल पर ऑनलाइन, 1 नवंबर 2026 तक भरनी है। भरने से पहले नोटिफिकेशन में अपने वर्ग की फीस मिला लें।" },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>ऑनलाइन परीक्षा:</strong> 7 नवंबर 2026, BFSI सेक्टर स्किल काउंसिल द्वारा।",
        "<strong>दस्तावेज़ जांच</strong> और नोटिफिकेशन के अनुसार आगे की प्रक्रिया।",
        "राज्यवार मेरिट से सीट मिलेगी।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://nats.education.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nats.education.gov.in</a> पर छात्र (Student) के रूप में रजिस्ट्रेशन करें और प्रोफाइल पूरी करें।",
        "NATS पर LIC Housing Finance की अप्रेंटिसशिप खोजकर आवेदन करें।",
        "फिर BFSI SSC के पोर्टल (beep.bfsissc.com) पर फीस भरें और फॉर्म पूरा करें।",
        "1 नवंबर 2026 से पहले सब पूरा करें और रसीद संभालकर रखें।",
      ],
      callout: { kind: "warn", html: "NATS पर आवेदन के साथ BFSI SSC पर फीस भरना भी ज़रूरी है। परीक्षा सिर्फ 6 दिन बाद है, इसलिए फॉर्म जल्दी भरें।" },
    },
  ],
  official: [
    { href: "https://www.lichousing.com/", title: "LIC हाउसिंग फाइनेंस लिमिटेड", note: "नोटिफिकेशन" },
    { href: "https://nats.education.gov.in/", title: "NATS अप्रेंटिसशिप पोर्टल", note: "रजिस्ट्रेशन और आवेदन" },
  ],
  faq: [
    { q: "LIC HFL अप्रेंटिस का फॉर्म कब तक भर सकते हैं?", a: "1 नवंबर 2026 तक। फीस भी इसी तारीख तक BFSI SSC पोर्टल पर भरनी है।" },
    { q: "LIC HFL अप्रेंटिस की परीक्षा कब है?", a: "ऑनलाइन परीक्षा 7 नवंबर 2026 को है।" },
    { q: "उम्र सीमा क्या है?", a: "1 अक्टूबर 2026 को 20 से 25 साल।" },
    { q: "क्या यह LIC (जीवन बीमा निगम) की भर्ती है?", a: "नहीं। यह LIC हाउसिंग फाइनेंस लिमिटेड (LIC HFL) की अप्रेंटिसशिप है, जो होम लोन देने वाली कंपनी है। यह पक्की नौकरी नहीं है।" },
  ],
  related: [
    { href: "/jobs/uco-bank-apprentice-recruitment-2026.html", emoji: "🏦", title: "UCO बैंक अप्रेंटिस 2026", text: "ग्रेजुएट्स के लिए 530 सीटें" },
    { href: "/jobs/nicl-ao-recruitment-2026.html", emoji: "🛡️", title: "NICL AO भर्ती", text: "बीमा कंपनी में ऑफिसर" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 अक्टूबर 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://nats.education.gov.in/", label: "🎓 NATS पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
