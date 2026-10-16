import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; upsc.gov.in not reachable from the sandbox):
// visionias.in, news.careers360.com, pw.live, anantamias (UPSC calendar 2027
// released 20 May 2026: CSE 2027 notification 13 Jan 2027, last date 2 Feb
// 2027, prelims 23 May 2027 (with IFS prelims), mains from 20 Aug 2027 for five
// days; dates "liable to alteration"). The old page's "1,100+ tentative posts"
// and "Last Date: 05 March 2027" are not supported by the calendar and were
// removed; vacancies will be known only from the notification. Eligibility,
// age band, fee and attempt rules are those of CSE 2026 (pw.live, padhai.ai)
// and long-standing CSE rules; the 2027 notice may change them.
export const upscCseRecruitment2027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "UPSC CSE 2027" },
  ],
  docHi: "UPSC CSE 2027",
  title: "UPSC Civil Services Examination (CSE) 2027 Notification",
  description: "UPSC CSE 2027: UPSC कैलेंडर के अनुसार अधिसूचना 13 जनवरी 2027, आवेदन की आखिरी तारीख 2 फरवरी 2027, प्रीलिम्स 23 मई 2027। योग्यता, उम्र, फीस और तैयारी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "UPSC CSE 2027: अधिसूचना 13 जनवरी, आखिरी तारीख 2 फरवरी, प्रीलिम्स 23 मई 2027",
  lead: "संघ लोक सेवा आयोग (UPSC) के 20 मई 2026 को जारी कैलेंडर के अनुसार सिविल सेवा परीक्षा (CSE) 2027 की अधिसूचना <strong>13 जनवरी 2027</strong> को आएगी और ऑनलाइन आवेदन की आखिरी तारीख <strong>2 फरवरी 2027</strong> है। प्रारंभिक परीक्षा <strong>23 मई 2027</strong> को और मुख्य परीक्षा <strong>20 अगस्त 2027</strong> से होगी। पदों की संख्या अधिसूचना में ही बताई जाएगी।",
  facts: [
    ["अधिसूचना", "13 जनवरी 2027"],
    ["आवेदन की आखिरी तारीख", "2 फरवरी 2027"],
    ["प्रीलिम्स", "23 मई 2027"],
    ["मेन्स", "20 अगस्त 2027 से"],
  ],
  notice: "15 अक्टूबर 2026 तक CSE 2027 की अधिसूचना जारी नहीं हुई है; ऊपर की तारीखें UPSC कैलेंडर से हैं और UPSC इन्हें बदल सकता है। पदों की संख्या अभी तय नहीं है।",
  sections: [
    {
      id: "tarikhen",
      title: "CSE 2027 की तारीखें (UPSC कैलेंडर 2027)",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["अधिसूचना जारी", "13 जनवरी 2027"],
          ["ऑनलाइन आवेदन की आखिरी तारीख", "2 फरवरी 2027"],
          ["प्रारंभिक परीक्षा (CSE और IFS)", "23 मई 2027 (रविवार)"],
          ["मुख्य परीक्षा", "20 अगस्त 2027 से (5 दिन)"],
        ],
      },
      callout: { kind: "info", html: "UPSC कैलेंडर में साफ लिखा होता है कि अधिसूचना और परीक्षा की तारीखें बदल सकती हैं। फॉर्म भरने से पहले <a href=\"https://upsc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsc.gov.in</a> पर असली अधिसूचना पढ़ें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र (पिछली परीक्षा के नियमों के अनुसार)",
      list: [
        "<strong>शिक्षा:</strong> किसी भी विषय में स्नातक; अंतिम वर्ष के छात्र प्रीलिम्स के लिए आवेदन कर सकते हैं।",
        "<strong>उम्र:</strong> CSE 2026 में 21 से 32 साल थी (कट-ऑफ तारीख 1 अगस्त)। CSE 2027 में यह तारीख आम तौर पर 1 अगस्त 2027 होगी; अधिसूचना में पुष्टि करें।",
        "<strong>छूट:</strong> OBC 3 साल, SC/ST 5 साल, दिव्यांग 10 साल।",
        "<strong>प्रयास:</strong> सामान्य/EWS 6, OBC और दिव्यांग 9; SC/ST उम्र सीमा तक बिना गिनती।",
        "<strong>फीस:</strong> CSE 2026 में ₹100 थी; महिला, SC, ST और दिव्यांग उम्मीदवारों को छूट।",
      ],
    },
    {
      id: "taiyari",
      title: "अभी से क्या तैयार रखें",
      list: [
        "<a href=\"https://upsconline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsconline.gov.in</a> पर वन टाइम रजिस्ट्रेशन (OTR) पहले से पूरा कर लें।",
        "हाल की फोटो और हस्ताक्षर की साफ स्कैन कॉपी।",
        "पहचान पत्र (आधार, वोटर ID, पासपोर्ट आदि) जिसकी जानकारी फॉर्म में भरेंगे; परीक्षा के दिन वही ले जाना होता है।",
        "आरक्षण लेना है तो SC/ST/OBC (नॉन-क्रीमी लेयर)/EWS/दिव्यांग प्रमाण पत्र तय फॉर्मेट और तारीख के हिसाब से।",
      ],
    },
  ],
  official: [
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)", note: "कैलेंडर और अधिसूचना" },
    { href: "https://upsconline.gov.in/", title: "UPSC ऑनलाइन आवेदन (OTR)" },
  ],
  faq: [
    { q: "UPSC CSE 2027 की अधिसूचना कब आएगी?", a: "UPSC कैलेंडर 2027 के अनुसार 13 जनवरी 2027 को। आवेदन की आखिरी तारीख 2 फरवरी 2027 है।" },
    { q: "CSE 2027 प्रीलिम्स कब है?", a: "23 मई 2027 को। मुख्य परीक्षा 20 अगस्त 2027 से शुरू होगी।" },
    { q: "CSE 2027 में कितने पद हैं?", a: "अभी तय नहीं। पदों की अनुमानित संख्या अधिसूचना में बताई जाएगी; इससे पहले बताए जा रहे आंकड़े अंदाज़े हैं।" },
    { q: "क्या अंतिम वर्ष के छात्र आवेदन कर सकते हैं?", a: "हां, पिछली परीक्षाओं के नियम के अनुसार अंतिम वर्ष के छात्र प्रीलिम्स दे सकते हैं, पर मुख्य परीक्षा के समय डिग्री का प्रमाण देना होता है।" },
  ],
  related: [
    { href: "/service/upsc-civil-services.html", emoji: "🏛️", title: "UPSC सिविल सेवा परीक्षा", text: "पूरी परीक्षा की जानकारी" },
    { href: "/service/ssc-cgl-recruitment-2026.html", emoji: "📝", title: "SSC CGL 2026", text: "स्नातक स्तर की भर्ती" },
    { href: "/service/rbi-grade-b-officer-recruitment-2026.html", emoji: "🏦", title: "RBI ग्रेड B", text: "RBI अधिकारी भर्ती" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "आरक्षण के लिए" },
  ],
  aside: [
    { href: "https://upsc.gov.in/", label: "🏛️ UPSC वेबसाइट" },
    { href: "https://upsconline.gov.in/", label: "📝 UPSC ऑनलाइन आवेदन" },
  ],
};
