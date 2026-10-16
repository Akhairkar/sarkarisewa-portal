import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; upsc.gov.in not reachable from the sandbox,
// search-result extracts of exam news on the UPSC Calendar 2027 used):
// visionias, careers360, anantamias, careerpower, padhai.ai, pw.live (calendar
// released 20 May 2026; CSE 2027 notification 13 Jan 2027, last date 2 Feb
// 2027, prelims with IFS 23 May 2027, CSE mains from 20 Aug 2027; NDA & NA (I)
// + CDS (I) 2027 notification 2 Dec 2026, last date 22 Dec 2026, exam 11 Apr
// 2027; NDA & NA (II) + CDS (II) notification 12 May 2027, last date 1 Jun
// 2027, exam 19 Sep 2027; CAPF (AC) 4 Jul 2027; CMS 18 Jul 2027; ESE prelims
// 31 Jan 2027 with notification 16 Sep 2026 and last date 6 Oct 2026 (one
// source); Combined Geo-Scientist prelims 10 Jan 2027; IFS mains 21 Nov 2027).
// CAPF/CMS notification dates were given by one source each, so left out.
// ESE mains / IES-ISS dates conflicted between sources and are left out.
// CSE 2026 facts as in /exams/upsc-cse-2026. Old page's CSE 2027
// notification "10 Feb 2027" and CSE 2026 mains "18 Sep" were wrong.
export const upscAnnualExamCalendar2027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "UPSC 2026-2027" },
  ],
  docHi: "UPSC परीक्षा कैलेंडर 2027",
  title: "UPSC वार्षिक परीक्षा कैलेंडर 2026-2027",
  description: "UPSC कैलेंडर 2027: CSE अधिसूचना 13 जनवरी, प्रीलिम्स 23 मई 2027; NDA-CDS (I) 11 अप्रैल, NDA-CDS (II) 19 सितंबर 2027; CAPF 4 जुलाई, CMS 18 जुलाई, ESE प्रीलिम्स 31 जनवरी 2027।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "UPSC परीक्षा कैलेंडर 2027: CSE, NDA, CDS, CAPF, CMS और ESE की तारीखें",
  lead: "संघ लोक सेवा आयोग (UPSC) ने 20 मई 2026 को 2027 का परीक्षा कैलेंडर जारी किया। इसके अनुसार सिविल सेवा (CSE) 2027 की अधिसूचना <strong>13 जनवरी 2027</strong> को आएगी और प्रीलिम्स <strong>23 मई 2027</strong> को होगी। NDA और CDS (I) की परीक्षा <strong>11 अप्रैल 2027</strong> को है, जिसका फॉर्म <strong>2 से 22 दिसंबर 2026</strong> के बीच भरा जाएगा। UPSC के अनुसार ये तारीखें बदल भी सकती हैं।",
  facts: [
    ["कैलेंडर जारी", "20 मई 2026"],
    ["NDA/CDS (I) 2027 फॉर्म", "2 - 22 दिसंबर 2026"],
    ["CSE 2027 प्रीलिम्स", "23 मई 2027"],
    ["NDA/CDS (II) 2027", "19 सितंबर 2027"],
  ],
  notice: "16 अक्टूबर 2026 तक: अगला बड़ा फॉर्म NDA & NA (I) और CDS (I) 2027 का है, जिसकी अधिसूचना कैलेंडर के अनुसार 2 दिसंबर 2026 को आएगी। CSE 2026 की मुख्य परीक्षा हो चुकी है, रिज़ल्ट का इंतज़ार है।",
  sections: [
    {
      id: "2027",
      title: "UPSC कैलेंडर 2027: मुख्य परीक्षाएं",
      table: {
        head: ["परीक्षा", "अधिसूचना", "आवेदन की आखिरी तारीख", "परीक्षा"],
        rows: [
          ["कंबाइंड जियो-साइंटिस्ट (प्रारंभिक) 2027", "-", "-", "10 जनवरी 2027"],
          ["इंजीनियरिंग सेवा (ESE) प्रारंभिक 2027", "16 सितंबर 2026", "6 अक्टूबर 2026 (बंद)", "31 जनवरी 2027"],
          ["NDA & NA (I) और CDS (I) 2027", "2 दिसंबर 2026", "22 दिसंबर 2026", "11 अप्रैल 2027"],
          ["सिविल सेवा (CSE) और IFS प्रारंभिक 2027", "13 जनवरी 2027", "2 फरवरी 2027", "23 मई 2027"],
          ["CAPF (असिस्टेंट कमांडेंट) 2027", "कैलेंडर देखें", "कैलेंडर देखें", "4 जुलाई 2027"],
          ["कंबाइंड मेडिकल सर्विसेज (CMS) 2027", "कैलेंडर देखें", "कैलेंडर देखें", "18 जुलाई 2027"],
          ["CSE मुख्य परीक्षा 2027", "-", "-", "20 अगस्त 2027 से (5 दिन)"],
          ["NDA & NA (II) और CDS (II) 2027", "12 मई 2027", "1 जून 2027", "19 सितंबर 2027"],
          ["भारतीय वन सेवा (IFS) मुख्य 2027", "-", "-", "21 नवंबर 2027 से"],
        ],
      },
      callout: { kind: "info", html: "ये तारीखें UPSC कैलेंडर 2027 पर आधारित समाचार रिपोर्टों से हैं; upsc.gov.in यहां से नहीं खुल सका। UPSC कैलेंडर में लिखा होता है कि अधिसूचना और परीक्षा की तारीखें ज़रूरत पड़ने पर बदल सकती हैं। फॉर्म भरने से पहले <a href=\"https://upsc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsc.gov.in</a> पर असली अधिसूचना पढ़ें।" },
    },
    {
      id: "2026",
      title: "2026 की CSE: अभी कहां तक पहुंची",
      list: [
        "CSE 2026 प्रीलिम्स 24 मई 2026 को हुई; रिज़ल्ट 15 जून 2026 को आया।",
        "मुख्य परीक्षा 21 अगस्त 2026 से हुई। 16 अक्टूबर 2026 तक मेन्स रिज़ल्ट घोषित नहीं हुआ।",
        "पूरी जानकारी: <a href=\"/exams/upsc-cse-2026.html\">UPSC CSE 2026 परीक्षा</a>।",
      ],
    },
    {
      id: "kaun",
      title: "कौन सी परीक्षा किसके लिए",
      list: [
        "<strong>NDA & NA:</strong> 12वीं पास या 12वीं में पढ़ रहे अविवाहित युवा; सेना, नौसेना, वायुसेना में अधिकारी प्रशिक्षण।",
        "<strong>CDS:</strong> स्नातक; IMA, नौसेना अकादमी, वायुसेना अकादमी और OTA।",
        "<strong>CSE:</strong> स्नातक; IAS, IPS, IFS (विदेश सेवा), IRS आदि।",
        "<strong>CAPF (AC):</strong> स्नातक; BSF, CRPF, CISF, ITBP, SSB में असिस्टेंट कमांडेंट।",
        "<strong>ESE / CMS / जियो-साइंटिस्ट:</strong> क्रमशः इंजीनियरिंग, MBBS और विज्ञान (भूविज्ञान आदि) के डिग्रीधारी।",
        "उम्र, योग्यता और फीस हर परीक्षा की अधिसूचना में अलग-अलग दी जाती है।",
      ],
    },
    {
      id: "aavedan",
      title: "UPSC का फॉर्म कैसे भरें",
      steps: [
        "<a href=\"https://upsconline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">upsconline.gov.in</a> पर एक बार वन टाइम रजिस्ट्रेशन (OTR) करें।",
        "अधिसूचना आने पर उसी OTR से संबंधित परीक्षा का फॉर्म भरें।",
        "फोटो, हस्ताक्षर और पहचान पत्र की जानकारी अधिसूचना के अनुसार दें; परीक्षा के दिन वही पहचान पत्र ले जाना होता है।",
        "आखिरी तारीख से पहले फीस जमा करें (ज़्यादातर परीक्षाओं में महिला, SC, ST, दिव्यांग उम्मीदवारों को छूट होती है; अधिसूचना में देखें)।",
      ],
    },
  ],
  official: [
    { href: "https://upsc.gov.in/", title: "संघ लोक सेवा आयोग (UPSC)", note: "कैलेंडर, अधिसूचना, रिज़ल्ट" },
    { href: "https://upsconline.gov.in/", title: "UPSC ऑनलाइन आवेदन (OTR)" },
  ],
  faq: [
    { q: "UPSC CSE 2027 की प्रीलिम्स कब है?", a: "UPSC कैलेंडर 2027 के अनुसार 23 मई 2027 को। अधिसूचना 13 जनवरी 2027 को आएगी और आखिरी तारीख 2 फरवरी 2027 है।" },
    { q: "NDA 1 2027 का फॉर्म कब भरेगा?", a: "कैलेंडर के अनुसार अधिसूचना 2 दिसंबर 2026 को आएगी और आवेदन 22 दिसंबर 2026 तक होंगे। परीक्षा 11 अप्रैल 2027 को है। CDS (I) 2027 की तारीखें भी यही हैं।" },
    { q: "NDA 2 और CDS 2 2027 कब है?", a: "19 सितंबर 2027 को। अधिसूचना 12 मई 2027 और आखिरी तारीख 1 जून 2027 बताई गई है।" },
    { q: "क्या UPSC कैलेंडर की तारीख बदल सकती है?", a: "हां। जैसे CSE 2026 की अधिसूचना 14 जनवरी की जगह 4 फरवरी 2026 को आई थी। इसलिए upsc.gov.in पर अधिसूचना देखते रहें।" },
  ],
  related: [
    { href: "/service/upsc-cse-recruitment-2027.html", emoji: "🏛️", title: "UPSC CSE 2027", text: "योग्यता, उम्र, फीस" },
    { href: "/exams/upsc-cse-2026.html", emoji: "📘", title: "UPSC CSE 2026", text: "मेन्स और रिज़ल्ट की स्थिति" },
    { href: "/exams/ssc-exam-calendar-2026-2027.html", emoji: "📝", title: "SSC कैलेंडर 2026-27", text: "CGL, CHSL, JE, CPO" },
    { href: "/exams/banking-ibps-sbi-calendar-2026-2027.html", emoji: "🏦", title: "बैंकिंग कैलेंडर", text: "IBPS, SBI, RBI" },
  ],
  aside: [
    { href: "https://upsc.gov.in/", label: "🏛️ UPSC वेबसाइट" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
