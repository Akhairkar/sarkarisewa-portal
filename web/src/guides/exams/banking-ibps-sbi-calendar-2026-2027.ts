import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; ibps.in, sbi.bank.in and opportunities.rbi.org.in
// not reachable from the sandbox, search-result extracts of exam news used):
// - IBPS PO/MT-XVI and CSA-XVI: as in /exams/ibps-po-2026 and
//   /exams/ibps-clerk-2026 (PO prelims 22-23 Aug, result 23 Sep, mains 4 Oct
//   2026; Clerk application 1-21 Aug, prelims 10-11 Oct, mains 27 Dec 2026
//   tentative).
// - IBPS RRB CRP-XV: hellobanker, sreedharscce, truejobs (notification 31 Aug
//   2026, application 1-21 Sep 2026; Officer Scale-I prelims 21-22 Nov 2026;
//   Office Assistant prelims 6, 12, 13 Dec 2026; Scale-I mains and Scale II/III
//   single exam 20 Dec 2026; OA mains 30 Jan 2027 - all tentative).
// - SBI PO 2026-27 (CRPD/PO/2026-27/09): careers360, Free Press Journal,
//   pw.live, mahendras (about 1,500 posts; prelims 1-2 Aug 2026; prelims result
//   28 Aug; mains 12 Sep 2026; Phase-III Oct/Nov 2026 tentative).
// - SBI Clerk (Junior Associates) 2026: pw.live / sreedharscce (applications
//   closed 31 Aug 2026); prelims date not confirmed by sources, left general;
//   vacancy figure from one source only, left out.
// - RBI Grade B 2026: as in /service/rbi-grade-b-officer-recruitment-2026.
// The old page's dates (PO 1-21 Aug, clerk 1-21 Jul, SBI PO prelims Nov,
// RBI Phase 1 8 Sep etc.) were wrong and are replaced.
export const bankingIbpsSbiCalendar20262027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "बैंकिंग 2026-2027" },
  ],
  docHi: "बैंकिंग परीक्षा कैलेंडर 2026-27",
  title: "बैंकिंग परीक्षा कैलेंडर 2026-2027",
  description: "बैंकिंग परीक्षा कैलेंडर 2026-27: IBPS PO, IBPS क्लर्क, IBPS RRB XV, SBI PO, SBI क्लर्क और RBI ग्रेड B की प्रीलिम्स-मेन्स तारीखें और अभी की स्थिति।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "बैंकिंग परीक्षा कैलेंडर 2026-27: IBPS, SBI और RBI की तारीखें",
  lead: "16 अक्टूबर 2026 तक IBPS PO 2026 की मेन्स (4 अक्टूबर) और IBPS क्लर्क की प्रीलिम्स (10-11 अक्टूबर) हो चुकी हैं। आगे <strong>IBPS RRB</strong> की प्रीलिम्स <strong>21-22 नवंबर</strong> (ऑफिसर स्केल-I) और <strong>6, 12, 13 दिसंबर 2026</strong> (ऑफिस असिस्टेंट) को और <strong>IBPS क्लर्क मेन्स 27 दिसंबर 2026</strong> को संभावित है। SBI PO 2026 का तीसरा चरण (इंटरव्यू) बाकी है।",
  facts: [
    ["IBPS RRB स्केल-I प्रीलिम्स", "21-22 नवंबर 2026 (संभावित)"],
    ["IBPS RRB ऑफिस असिस्टेंट प्रीलिम्स", "6, 12, 13 दिसंबर 2026 (संभावित)"],
    ["IBPS क्लर्क मेन्स", "27 दिसंबर 2026 (संभावित)"],
    ["अभी खुला फॉर्म", "इनमें से कोई नहीं"],
  ],
  notice: "16 अक्टूबर 2026 तक: नीचे दी गई किसी भी बैंक भर्ती का आवेदन खुला नहीं है। तारीखें परीक्षा समाचार रिपोर्टों से हैं; अपनी पक्की तारीख अपने कॉल लेटर में देखें।",
  sections: [
    {
      id: "calendar",
      title: "बैंक परीक्षाएं 2026-27: एक नज़र में",
      table: {
        head: ["परीक्षा", "आवेदन", "प्रीलिम्स", "मेन्स / आगे"],
        rows: [
          ["IBPS PO/MT-XVI", "1-21 जुलाई 2026 (बंद)", "22-23 अगस्त 2026 (हो चुकी)", "मेन्स 4 अक्टूबर 2026 (हो चुकी); इंटरव्यू बाकी"],
          ["IBPS क्लर्क CSA-XVI", "1-21 अगस्त 2026 (बंद)", "10-11 अक्टूबर 2026 (हो चुकी)", "मेन्स 27 दिसंबर 2026 (संभावित)"],
          ["IBPS RRB XV ऑफिसर स्केल-I", "1-21 सितंबर 2026 (बंद)", "21-22 नवंबर 2026 (संभावित)", "मेन्स 20 दिसंबर 2026 (संभावित)"],
          ["IBPS RRB XV ऑफिस असिस्टेंट", "1-21 सितंबर 2026 (बंद)", "6, 12, 13 दिसंबर 2026 (संभावित)", "मेन्स 30 जनवरी 2027 (संभावित)"],
          ["IBPS RRB XV ऑफिसर स्केल II और III", "1-21 सितंबर 2026 (बंद)", "एक ही परीक्षा", "20 दिसंबर 2026 (संभावित)"],
          ["SBI PO 2026-27", "बंद", "1-2 अगस्त 2026 (हो चुकी)", "मेन्स 12 सितंबर 2026 (हो चुकी); फेज़-III अक्टूबर-नवंबर (संभावित)"],
          ["SBI क्लर्क (जूनियर एसोसिएट) 2026", "31 अगस्त 2026 तक (बंद)", "SBI के कॉल लेटर/नोटिस में देखें", "-"],
          ["RBI ग्रेड B 2026", "20 मई 2026 तक (बंद)", "फेज़-I 13-14 जून 2026 (हो चुकी)", "फेज़-II 25-26 जुलाई 2026 (हो चुकी); इंटरव्यू"],
        ],
      },
      callout: { kind: "info", html: "IBPS की तारीखें <a href=\"https://www.ibps.in/\" target=\"_blank\" rel=\"noopener nofollow\">ibps.in</a>, SBI की <a href=\"https://sbi.bank.in/\" target=\"_blank\" rel=\"noopener nofollow\">sbi.bank.in</a> और RBI की <a href=\"https://opportunities.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">opportunities.rbi.org.in</a> पर पक्की होती हैं। ये साइटें यहां से नहीं खुल सकीं, इसलिए ऊपर की तारीखें समाचार रिपोर्टों पर आधारित हैं।" },
    },
    {
      id: "aage-kya",
      title: "अगली भर्ती कब आती है (आम तौर पर)",
      list: [
        "IBPS हर साल की शुरुआत में अपना संभावित कैलेंडर जारी करता है; PO, क्लर्क और RRB की अधिसूचनाएं आम तौर पर गर्मियों से सितंबर के बीच आती हैं।",
        "SBI अपनी PO और क्लर्क भर्ती खुद करता है, IBPS से नहीं।",
        "RBI ग्रेड B की भर्ती RBI खुद करता है; 2026 वाली भर्ती का फॉर्म अप्रैल-मई 2026 में भरा गया था।",
        "2027 की तारीखें तभी पक्की मानें जब IBPS/SBI/RBI का नया कैलेंडर या अधिसूचना आए।",
      ],
    },
    {
      id: "pattern",
      title: "ज़्यादातर बैंक परीक्षाओं का ढांचा",
      steps: [
        "<strong>प्रीलिम्स:</strong> अंग्रेज़ी, गणित (Quant) और रीज़निंग; आम तौर पर 100 प्रश्न, 1 घंटा, गलत जवाब पर 1/4 अंक कटते हैं। सिर्फ क्वालिफाइंग।",
        "<strong>मेन्स:</strong> रीज़निंग, बैंकिंग/सामान्य जागरूकता, अंग्रेज़ी, डेटा एनालिसिस; PO में डिस्क्रिप्टिव पेपर भी।",
        "<strong>PO/ऑफिसर:</strong> मेन्स के बाद इंटरव्यू (SBI PO में साइकोमेट्रिक टेस्ट और ग्रुप एक्सरसाइज़ भी)।",
        "<strong>क्लर्क/ऑफिस असिस्टेंट:</strong> इंटरव्यू नहीं; मेन्स से मेरिट, फिर स्थानीय भाषा परीक्षा।",
      ],
    },
  ],
  official: [
    { href: "https://www.ibps.in/", title: "IBPS", note: "PO, क्लर्क, RRB, SO" },
    { href: "https://sbi.bank.in/", title: "SBI करियर", note: "SBI PO, क्लर्क" },
    { href: "https://opportunities.rbi.org.in/", title: "RBI भर्ती", note: "RBI ग्रेड B, असिस्टेंट" },
  ],
  faq: [
    { q: "अभी कौन सी बैंक भर्ती का फॉर्म खुला है?", a: "16 अक्टूबर 2026 तक इस पेज की किसी भी भर्ती (IBPS PO, क्लर्क, RRB, SBI PO, SBI क्लर्क, RBI ग्रेड B) का आवेदन खुला नहीं है।" },
    { q: "IBPS RRB 2026 की परीक्षा कब है?", a: "रिपोर्टों के अनुसार ऑफिसर स्केल-I प्रीलिम्स 21-22 नवंबर 2026 और ऑफिस असिस्टेंट प्रीलिम्स 6, 12 और 13 दिसंबर 2026 को है। ये संभावित तारीखें हैं; पक्की तारीख कॉल लेटर में।" },
    { q: "IBPS क्लर्क 2026 मेन्स कब है?", a: "27 दिसंबर 2026 को (संभावित)। प्रीलिम्स 10-11 अक्टूबर 2026 को हो चुकी है।" },
    { q: "SBI PO 2026 कहां तक पहुंचा?", a: "प्रीलिम्स 1-2 अगस्त और मेन्स 12 सितंबर 2026 को हो चुकी है। तीसरा चरण (साइकोमेट्रिक टेस्ट, ग्रुप एक्सरसाइज़, इंटरव्यू) अक्टूबर-नवंबर 2026 में संभावित है।" },
  ],
  related: [
    { href: "/exams/ibps-po-2026.html", emoji: "💼", title: "IBPS PO 2026 परीक्षा", text: "मेन्स और इंटरव्यू" },
    { href: "/exams/ibps-clerk-2026.html", emoji: "🧾", title: "IBPS क्लर्क 2026 परीक्षा", text: "प्रीलिम्स हो चुकी, मेन्स दिसंबर" },
    { href: "/service/ibps-bank-recruitment.html", emoji: "🏦", title: "IBPS बैंक भर्ती", text: "योग्यता, उम्र, फीस" },
    { href: "/service/rbi-grade-b-officer-recruitment-2026.html", emoji: "🏛️", title: "RBI ग्रेड B 2026", text: "60 पद, चरण और स्थिति" },
    { href: "/exams/ssc-exam-calendar-2026-2027.html", emoji: "📝", title: "SSC कैलेंडर 2026-27", text: "CGL, CHSL, JE, CPO" },
  ],
  aside: [
    { href: "https://www.ibps.in/", label: "🏦 ibps.in खोलें" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
