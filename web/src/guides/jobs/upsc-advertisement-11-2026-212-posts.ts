import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; upsc.gov.in not readable from the sandbox,
// search-result extracts used): organiser.org (12 Sep 2026), pw.live,
// mysarkarinaukri, sarkarijobs.com, projobalert (UPSC Advt. No. 11/2026, 212
// posts by selection; online application from 12 Sep 2026; last date 2 Oct
// 2026 6 pm, Ladakh law posts 9 Oct 2026 6 pm; Assistant Public Prosecutor
// (Directorate of Prosecution, GNCTD) 140 posts; Ladakh law posts 4;
// Asst Professor Anatomy 4, General Medicine 60, Assistant Editor IBM 2; fee
// ₹25; shortlisting then interview, Recruitment Test possible). NDMC
// specialist posts (1 + 1) are from the old page and add up to 212 with the
// verified figures. Post-wise pay levels and qualifications were not
// verified and are left general (fee exemptions are UPSC's standard rule).
export const upscAdvertisement112026212Posts: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "UPSC विज्ञापन 11/2026" },
  ],
  docHi: "UPSC विज्ञापन 11/2026",
  title: "UPSC Advertisement 11/2026: 212 पदों पर भर्ती",
  description: "UPSC Advertisement No. 11/2026: 212 पद (140 Assistant Public Prosecutor, 60 Assistant Professor General Medicine आदि)। आवेदन 2 अक्टूबर 2026 (लद्दाख पद 9 अक्टूबर) को बंद।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "UPSC विज्ञापन 11/2026: 212 पद, आवेदन बंद - आगे शॉर्टलिस्ट और इंटरव्यू",
  lead: "<strong>स्थिति: आवेदन बंद।</strong> संघ लोक सेवा आयोग (UPSC) ने विज्ञापन संख्या 11/2026 से अलग-अलग केंद्रीय और केंद्र शासित विभागों में <strong>212 पदों</strong> पर सीधी भर्ती (selection) निकाली थी। ऑनलाइन आवेदन <strong>12 सितंबर 2026</strong> से शुरू होकर <strong>2 अक्टूबर 2026</strong> शाम 6 बजे बंद हुए; लद्दाख के कानूनी पदों के लिए आखिरी तारीख <strong>9 अक्टूबर 2026</strong> थी। अब शॉर्टलिस्टिंग, ज़रूरत हो तो भर्ती परीक्षा, और फिर इंटरव्यू होगा।",
  facts: [
    ["स्थिति", "आवेदन बंद"],
    ["कुल पद", "212"],
    ["सबसे ज़्यादा पद", "Assistant Public Prosecutor (दिल्ली) - 140"],
    ["आखिरी तारीख", "2 अक्टूबर 2026 (लद्दाख पद: 9 अक्टूबर)"],
  ],
  notice: "16 अक्टूबर 2026 तक दोनों आखिरी तारीखें निकल चुकी हैं। ये जानकारी विज्ञापन पर आधारित समाचार रिपोर्टों से है; अंतिम जानकारी <a href=\"https://upsc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsc.gov.in</a> पर देखें।",
  sections: [
    {
      id: "pad",
      title: "पदों का ब्योरा",
      table: {
        head: ["पद", "विभाग", "पद संख्या"],
        rows: [
          ["Assistant Public Prosecutor", "अभियोजन निदेशालय, दिल्ली सरकार (GNCTD)", "140"],
          ["Specialist Grade III Assistant Professor (General Medicine)", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय", "60"],
          ["Specialist Grade III Assistant Professor (Anatomy)", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय", "4"],
          ["Public Law Officer / District Litigation Officer / Law Officer", "केंद्र शासित प्रदेश लद्दाख", "4"],
          ["Assistant Editor", "भारतीय खान ब्यूरो (IBM), खान मंत्रालय", "2"],
          ["Specialist Grade II (Junior Scale) - Anaesthesiology और Pediatrics", "NDMC", "1 + 1"],
        ],
      },
      callout: { kind: "info", html: "हर पद में आरक्षण (UR/EWS/OBC/SC/ST/दिव्यांग) का बंटवारा, वेतन स्तर और ज़रूरी अनुभव अलग है; ये विज्ञापन की पद-सूची में दिए हैं।" },
    },
    {
      id: "tarikhen",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन और ऑनलाइन आवेदन शुरू", "12 सितंबर 2026"],
          ["आखिरी तारीख (लद्दाख के अलावा सभी पद)", "2 अक्टूबर 2026, शाम 6 बजे"],
          ["आखिरी तारीख (लद्दाख के कानूनी पद)", "9 अक्टूबर 2026, शाम 6 बजे"],
          ["भर्ती परीक्षा / इंटरव्यू", "अभी घोषित नहीं; शॉर्टलिस्ट उम्मीदवारों को सूचना"],
        ],
      },
    },
    {
      id: "patrata",
      title: "योग्यता, फीस और चयन",
      list: [
        "<strong>योग्यता:</strong> हर पद की अलग। मेडिकल पदों के लिए संबंधित मेडिकल डिग्री/पोस्ट-ग्रेजुएशन और अनुभव; Assistant Public Prosecutor और लद्दाख पदों के लिए कानून की डिग्री और तय अनुभव; Assistant Editor के लिए विज्ञापन में बताई योग्यता।",
        "<strong>फीस:</strong> ₹25; UPSC के नियम के अनुसार महिलाएं, SC, ST और दिव्यांग उम्मीदवार फीस से मुक्त।",
        "<strong>चयन:</strong> आवेदनों की शॉर्टलिस्टिंग, फिर इंटरव्यू। आवेदन ज़्यादा होने पर UPSC पहले भर्ती परीक्षा (Recruitment Test) ले सकता है।",
        "<strong>वेतन:</strong> पद के अनुसार 7वें वेतन आयोग का पे लेवल (मेडिकल पदों पर NPA भी), विज्ञापन में देखें।",
      ],
    },
    {
      id: "aage",
      title: "आवेदन कर चुके हैं तो आगे क्या",
      steps: [
        "upsc.gov.in पर \"Recruitment\" सेक्शन में इस विज्ञापन के नोटिस देखते रहें।",
        "शॉर्टलिस्ट/भर्ती परीक्षा की सूचना आपके ईमेल पर भी आ सकती है; स्पैम फोल्डर भी देखें।",
        "इंटरव्यू के लिए डिग्री, अनुभव प्रमाण पत्र, जाति/EWS/दिव्यांग प्रमाण पत्र के मूल और कॉपी तैयार रखें; अनुभव की गिनती विज्ञापन की आखिरी तारीख तक होती है।",
      ],
    },
  ],
  official: [
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)", note: "विज्ञापन, शॉर्टलिस्ट, इंटरव्यू शेड्यूल" },
  ],
  faq: [
    { q: "UPSC विज्ञापन 11/2026 में कितने पद हैं?", a: "कुल 212 पद; सबसे ज़्यादा 140 पद दिल्ली सरकार में Assistant Public Prosecutor के हैं।" },
    { q: "आखिरी तारीख क्या थी?", a: "लद्दाख के पदों को छोड़कर सभी के लिए 2 अक्टूबर 2026 शाम 6 बजे; लद्दाख के कानूनी पदों के लिए 9 अक्टूबर 2026 शाम 6 बजे। दोनों निकल चुकी हैं।" },
    { q: "क्या इसमें लिखित परीक्षा होगी?", a: "चयन शॉर्टलिस्टिंग और इंटरव्यू से होता है। आवेदन ज़्यादा हों तो UPSC भर्ती परीक्षा ले सकता है; इसकी सूचना UPSC देगा।" },
    { q: "फीस कितनी थी?", a: "₹25; महिलाएं, SC, ST और दिव्यांग उम्मीदवार फीस से मुक्त।" },
  ],
  related: [
    { href: "/jobs/upsc-principal-vice-principal-recruitment-2026-delhi-education-dept-828-posts-ms8e3ooo-2.html", emoji: "🏫", title: "UPSC प्रिंसिपल भर्ती", text: "दिल्ली शिक्षा विभाग" },
    { href: "/jobs/upsc-civil-services-ias-ifs-2027.html", emoji: "🏛️", title: "UPSC सिविल सेवा 2027", text: "IAS/IPS/IFS" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "आरक्षण के लिए" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://upsc.gov.in/", label: "🏛️ UPSC वेबसाइट" },
    { href: "/jobs/", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
