import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; upsc.gov.in not reachable from the sandbox,
// search-result extracts of exam news used): careers360 Hindi, clearias, pw.live
// (CSE 2026 notification postponed from 14 Jan, issued 4 Feb 2026; applications
// 4-24 Feb 2026; about 933 vacancies incl. 33 PwBD as reported; prelims 24 May
// 2026; mains from 21 Aug 2026); pw.live/padhai.ai/careers360 (prelims result
// 15 Jun 2026, about 13,343 qualified; age 21-32 on 1 Aug 2026), legacyias
// (mains ran from 21 Aug 2026; mains result not yet declared, expected
// Nov-Dec 2026 - only an estimate, so not given as a date). Exam pattern
// (GS 200 + CSAT 200 qualifying 33%, 1/3 negative; mains 1750 + interview 275)
// is the long-standing CSE scheme. The old page's "notification 14 Feb, last
// date 5 Mar, mains 18 Sep 2026, 1056 posts" did not match and was removed.
export const upscCse2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "UPSC CSE 2026" },
  ],
  docHi: "UPSC CSE 2026 परीक्षा",
  title: "UPSC सिविल सेवा (IAS/IFS) 2026 परीक्षा तिथि, मेन्स टाइमटेबल व एडमिट कार्ड",
  description: "UPSC CSE 2026: प्रीलिम्स 24 मई 2026 को हुई, रिज़ल्ट 15 जून; मुख्य परीक्षा 21 अगस्त 2026 से हुई। मेन्स रिज़ल्ट और इंटरव्यू की जानकारी, परीक्षा पैटर्न और नेगेटिव मार्किंग।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "UPSC CSE 2026: प्रीलिम्स और मेन्स हो चुके, अब मेन्स रिज़ल्ट का इंतज़ार",
  lead: "संघ लोक सेवा आयोग (UPSC) की सिविल सेवा परीक्षा (CSE) 2026 की प्रारंभिक परीक्षा <strong>24 मई 2026</strong> को हुई और उसका रिज़ल्ट <strong>15 जून 2026</strong> को आया। मुख्य परीक्षा <strong>21 अगस्त 2026</strong> से हुई। 16 अक्टूबर 2026 तक मुख्य परीक्षा का रिज़ल्ट नहीं आया है; रिज़ल्ट के बाद सफल उम्मीदवारों का इंटरव्यू (व्यक्तित्व परीक्षण) होगा।",
  facts: [
    ["प्रीलिम्स", "24 मई 2026 (हो चुकी)"],
    ["प्रीलिम्स रिज़ल्ट", "15 जून 2026"],
    ["मेन्स", "21 अगस्त 2026 से (हो चुकी)"],
    ["अगला चरण", "मेन्स रिज़ल्ट, फिर इंटरव्यू"],
  ],
  notice: "16 अक्टूबर 2026 तक: CSE 2026 के आवेदन बहुत पहले बंद हो चुके हैं और मेन्स हो चुकी है। अगली परीक्षा CSE 2027 है, जिसकी अधिसूचना UPSC कैलेंडर के अनुसार 13 जनवरी 2027 को आएगी।",
  sections: [
    {
      id: "tarikhen",
      title: "CSE 2026 की तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["अधिसूचना", "4 फरवरी 2026 (14 जनवरी से टलकर)"],
          ["ऑनलाइन आवेदन", "4 - 24 फरवरी 2026"],
          ["प्रारंभिक परीक्षा (CSE और IFS)", "24 मई 2026"],
          ["प्रीलिम्स रिज़ल्ट", "15 जून 2026 (लगभग 13,343 उम्मीदवार पास)"],
          ["मुख्य परीक्षा", "21 अगस्त 2026 से"],
          ["मेन्स रिज़ल्ट", "अभी घोषित नहीं"],
          ["इंटरव्यू और अंतिम रिज़ल्ट", "मेन्स रिज़ल्ट के बाद; तारीख UPSC बताएगा"],
        ],
      },
      callout: { kind: "info", html: "ये तारीखें परीक्षा समाचार रिपोर्टों से हैं क्योंकि upsc.gov.in यहां से नहीं खुल सका। रिपोर्टों के अनुसार इस बार लगभग 933 पद हैं; अंतिम संख्या बदल सकती है। ताज़ा जानकारी <a href=\"https://upsc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsc.gov.in</a> पर देखें।" },
    },
    {
      id: "pattern",
      title: "परीक्षा पैटर्न (तीन चरण)",
      list: [
        "<strong>प्रारंभिक परीक्षा:</strong> दो वस्तुनिष्ठ पेपर, हर पेपर 200 अंक और 2 घंटे। पेपर-1 सामान्य अध्ययन (GS); पेपर-2 CSAT सिर्फ क्वालिफाइंग है (33% अंक ज़रूरी)। मेरिट सिर्फ GS के अंकों से बनती है।",
        "<strong>नेगेटिव मार्किंग:</strong> प्रीलिम्स में हर गलत जवाब पर उस प्रश्न के एक-तिहाई (1/3) अंक कटते हैं।",
        "<strong>मुख्य परीक्षा (लिखित):</strong> 9 पेपर। भारतीय भाषा और अंग्रेज़ी के 2 पेपर सिर्फ क्वालिफाइंग; निबंध, GS के 4 पेपर और वैकल्पिक विषय के 2 पेपर, कुल 1750 अंक।",
        "<strong>इंटरव्यू (व्यक्तित्व परीक्षण):</strong> 275 अंक। अंतिम मेरिट मेन्स + इंटरव्यू = 2025 अंकों से बनती है।",
      ],
    },
    {
      id: "aage",
      title: "मेन्स के बाद क्या करें",
      steps: [
        "मेन्स रिज़ल्ट upsc.gov.in पर रोल नंबर की PDF सूची में आता है। अपना रोल नंबर Ctrl+F से खोजें।",
        "पास होने पर इंटरव्यू से पहले जो विस्तृत आवेदन (DAF) या दस्तावेज़ मांगे जाएं, उन्हें तय तारीख तक <a href=\"https://upsconline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsconline.gov.in</a> पर जमा करें।",
        "इंटरव्यू का समय-पत्र (schedule) और ई-समन पत्र UPSC की वेबसाइट से डाउनलोड करें।",
        "इंटरव्यू में जाति, EWS, दिव्यांगता, शिक्षा आदि के मूल प्रमाण पत्र साथ ले जाएं।",
      ],
      callout: { kind: "warn", html: "UPSC इंटरव्यू या चयन के लिए कभी पैसे नहीं मांगता। \"सेटिंग\" का दावा करने वाले कॉल या मैसेज धोखा हैं।" },
    },
  ],
  official: [
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)", note: "रिज़ल्ट, ई-एडमिट कार्ड, इंटरव्यू शेड्यूल" },
    { href: "https://upsconline.gov.in/", title: "UPSC ऑनलाइन आवेदन (OTR, DAF)" },
  ],
  faq: [
    { q: "UPSC CSE 2026 मेन्स का रिज़ल्ट कब आएगा?", a: "16 अक्टूबर 2026 तक UPSC ने तारीख नहीं बताई है। पिछले सालों में मेन्स के लगभग 2-3 महीने बाद रिज़ल्ट आया है, पर यह सिर्फ अनुमान है; upsc.gov.in देखते रहें।" },
    { q: "CSE 2026 प्रीलिम्स कब हुई थी?", a: "24 मई 2026 को। उसका रिज़ल्ट 15 जून 2026 को आया था।" },
    { q: "क्या प्रीलिम्स में नेगेटिव मार्किंग होती है?", a: "हां, हर गलत जवाब पर उस प्रश्न के 1/3 अंक कटते हैं। CSAT पेपर सिर्फ क्वालिफाइंग है, उसमें 33% अंक चाहिए।" },
    { q: "अब फॉर्म भरना हो तो कौन सी परीक्षा है?", a: "CSE 2027। UPSC कैलेंडर के अनुसार अधिसूचना 13 जनवरी 2027 को, आवेदन की आखिरी तारीख 2 फरवरी 2027 और प्रीलिम्स 23 मई 2027 को है।" },
  ],
  related: [
    { href: "/service/upsc-cse-recruitment-2027.html", emoji: "🏛️", title: "UPSC CSE 2027", text: "अगली परीक्षा की तारीखें और योग्यता" },
    { href: "/service/upsc-civil-services.html", emoji: "📘", title: "UPSC सिविल सेवा परीक्षा", text: "योग्यता, उम्र, प्रयास" },
    { href: "/exams/upsc-annual-exam-calendar-2027.html", emoji: "📅", title: "UPSC कैलेंडर 2027", text: "NDA, CDS, CAPF, ESE" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "परीक्षा के लिए उम्र जांचें" },
  ],
  aside: [
    { href: "https://upsc.gov.in/", label: "🏛️ UPSC वेबसाइट" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
