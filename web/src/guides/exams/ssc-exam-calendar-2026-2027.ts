import type { DocGuide } from "../doc/types";

// Sources (checked 16 Oct 2026; ssc.gov.in notice board and its calendar data):
// - ssc.gov.in "SSC Calendar" records (created 12.01.2026): tentative
//   advertisement-to-closing windows for 2026-27, e.g. MTS & Havaldar 2026
//   30.06-31.07.2026, Constable (GD) 2027 30.09-31.10.2026. (Earlier years'
//   records match the real CGL notification/closing dates, so these fields
//   are the application windows.)
// - Notices of examination: CGL 2026 (21.05.2026; applications to 22.06,
//   reopened 23-25.06.2026), CHSL 2026 (07.09-07.10.2026, approx. 2,536
//   vacancies), JE 2026 (02.09-22.09.2026), SI Delhi Police & CAPF 2026
//   (10.09-30.09.2026).
// - Important Notices of schedule: 12.08.2026 (Combined Hindi Translators
//   Paper-I 08.09.2026; Steno C&D 2026), corrigendum 31.08.2026 (Steno C&D
//   2026 9-15.09.2026), 12.09.2026 (CGL 2026 Tier-I 30.09-30.10.2026),
//   01.10.2026 (JE Paper-I 2-6.11.2026; SI CPO 20-28.11.2026; CHSL Tier-I
//   30.11-31.12.2026).
// - Selection Posts Phase-XIV/2026 tentative answer keys notice 09.10.2026.
// - Exam months for MTS 2026 (Sep-Nov 2026) and GD 2027 (Jan-Mar 2027) in the
//   original calendar: time4education, mahendras (news summaries); no notice
//   for either was on ssc.gov.in by 16.10.2026, so both are marked संभावित.
// The old page's table (CGL 24 June/24 July, CHSL April-May, GD 27 Aug etc.)
// did not match SSC notices and is replaced.
export const sscExamCalendar20262027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "परीक्षा कैलेंडर", href: "/exams/" },
    { label: "SSC 2026-2027" },
  ],
  docHi: "SSC परीक्षा कैलेंडर 2026-27",
  title: "एसएससी परीक्षा कैलेंडर 2026-2027",
  description: "SSC परीक्षा कैलेंडर 2026-27: CGL टियर-1 30 सितंबर-30 अक्टूबर, JE 2-6 नवंबर, SI CPO 20-28 नवंबर, CHSL टियर-1 30 नवंबर-31 दिसंबर 2026। MTS और GD की संभावित तारीखें।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "SSC परीक्षा कैलेंडर 2026-27: CGL, CHSL, JE, CPO, MTS और GD की तारीखें",
  lead: "कर्मचारी चयन आयोग (SSC) ने जनवरी 2026 में 2026-27 का संभावित कैलेंडर दिया था, पर ज़्यादातर भर्तियां उससे देर से आईं। इसलिए नीचे की तारीखें SSC के <strong>असली नोटिसों</strong> से ली गई हैं: CGL 2026 टियर-1 <strong>30 सितंबर-30 अक्टूबर 2026</strong>, JE पेपर-1 <strong>2-6 नवंबर</strong>, दिल्ली पुलिस-CAPF SI <strong>20-28 नवंबर</strong> और CHSL टियर-1 <strong>30 नवंबर-31 दिसंबर 2026</strong>। MTS 2026 और GD 2027 का नोटिस अभी नहीं आया है।",
  facts: [
    ["CGL 2026 टियर-1", "30 सितंबर - 30 अक्टूबर 2026"],
    ["JE 2026 पेपर-1", "2 - 6 नवंबर 2026"],
    ["SI (दिल्ली पुलिस, CAPF) 2026", "20 - 28 नवंबर 2026"],
    ["CHSL 2026 टियर-1", "30 नवंबर - 31 दिसंबर 2026"],
  ],
  notice: "16 अक्टूबर 2026 तक: CHSL, JE, CPO और CGL 2026 के आवेदन बंद हैं। MTS 2026 और GD कांस्टेबल 2027 का नोटिस ssc.gov.in पर अभी नहीं आया; उनकी तारीखें सिर्फ संभावित हैं।",
  sections: [
    {
      id: "pakki",
      title: "SSC नोटिस से तय तारीखें (2026)",
      table: {
        head: ["परीक्षा", "योग्यता", "आवेदन", "परीक्षा तारीख"],
        rows: [
          ["CGL 2026 (टियर-1)", "स्नातक", "21 मई - 25 जून 2026 (बंद)", "30 सितंबर - 30 अक्टूबर 2026"],
          ["जूनियर इंजीनियर (JE) 2026, पेपर-1", "इंजीनियरिंग डिग्री/डिप्लोमा", "2 - 22 सितंबर 2026 (बंद)", "2 - 6 नवंबर 2026"],
          ["SI दिल्ली पुलिस और CAPF 2026", "स्नातक", "10 - 30 सितंबर 2026 (बंद)", "20 - 28 नवंबर 2026"],
          ["CHSL (10+2) 2026, टियर-1", "12वीं पास", "7 सितंबर - 7 अक्टूबर 2026 (बंद)", "30 नवंबर - 31 दिसंबर 2026"],
          ["स्टेनोग्राफर ग्रेड C और D 2026", "12वीं + स्टेनो", "बंद", "9 - 15 सितंबर 2026 (हो चुकी)"],
          ["संयुक्त हिंदी अनुवादक 2026, पेपर-1", "स्नातकोत्तर", "बंद", "8 सितंबर 2026 (हो चुकी)"],
          ["सेलेक्शन पोस्ट फेज़-XIV 2026", "10वीं/12वीं/स्नातक (पद के अनुसार)", "बंद", "हो चुकी; उत्तर कुंजी 9 अक्टूबर 2026 को"],
        ],
      },
      callout: { kind: "info", html: "CHSL 2026 में लगभग 2,536 पद (अस्थायी) बताए गए हैं। CGL 2026 टियर-2 दिसंबर 2026 में संभावित है। हर परीक्षा का एडमिट कार्ड परीक्षा से कुछ दिन पहले <a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> पर लॉगिन से मिलता है।" },
    },
    {
      id: "sambhavit",
      title: "जिनका नोटिस अभी नहीं आया (संभावित)",
      table: {
        head: ["परीक्षा", "योग्यता", "कैलेंडर में आवेदन का समय", "परीक्षा (संभावित)"],
        rows: [
          ["MTS (नॉन-टेक्निकल) और हवलदार 2026", "10वीं पास", "जून-जुलाई 2026 (समय निकल गया, नोटिस बाकी)", "कैलेंडर में सितंबर-नवंबर 2026; अब देर संभव"],
          ["कांस्टेबल GD (CAPF, NIA, SSF, असम राइफल्स) 2027", "10वीं पास", "30 सितंबर - 31 अक्टूबर 2026 (संभावित)", "जनवरी-मार्च 2027 (संभावित)"],
        ],
      },
      callout: { kind: "warn", html: "ये तारीखें SSC के जनवरी 2026 के संभावित कैलेंडर पर आधारित हैं, नोटिस पर नहीं। इस साल कई परीक्षाएं कैलेंडर से 1-2 महीने देर से हुई हैं। फॉर्म तभी भरें जब ssc.gov.in पर नोटिस आ जाए।" },
    },
    {
      id: "kaise-dekhen",
      title: "SSC की ताज़ा तारीख खुद कैसे देखें",
      steps: [
        "<a href=\"https://ssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ssc.gov.in</a> खोलें और \"Notice Board\" या \"Latest Notifications\" देखें।",
        "\"Important Notice - Schedule of Examination(s)\" नाम वाले नोटिस में परीक्षा की तय तारीखें होती हैं।",
        "\"Notice of ... Examination\" में आवेदन की तारीख, योग्यता, उम्र और फीस होती है।",
        "आवेदन के लिए पहले ssc.gov.in पर वन टाइम रजिस्ट्रेशन (OTR) करें; ज़्यादातर परीक्षाओं की फीस ₹100 है और महिलाएं, SC, ST, दिव्यांग व पात्र पूर्व सैनिक फीस से मुक्त हैं।",
      ],
    },
  ],
  official: [
    { href: "https://ssc.gov.in/", title: "कर्मचारी चयन आयोग (SSC)", note: "कैलेंडर, नोटिस, आवेदन, एडमिट कार्ड" },
  ],
  faq: [
    { q: "SSC CHSL 2026 परीक्षा कब है?", a: "SSC के 1 अक्टूबर 2026 के नोटिस के अनुसार टियर-1 परीक्षा 30 नवंबर से 31 दिसंबर 2026 तक होगी। आवेदन 7 सितंबर से 7 अक्टूबर 2026 तक हुए थे।" },
    { q: "SSC MTS 2026 का नोटिस कब आएगा?", a: "कैलेंडर में इसका आवेदन जून-जुलाई 2026 में होना था, पर 16 अक्टूबर 2026 तक नोटिस नहीं आया। SSC ने नई तारीख नहीं बताई है; ssc.gov.in देखते रहें।" },
    { q: "SSC GD कांस्टेबल 2027 का फॉर्म कब भरेगा?", a: "कैलेंडर के अनुसार आवेदन 30 सितंबर से 31 अक्टूबर 2026 के बीच संभावित था और परीक्षा जनवरी-मार्च 2027 में। 16 अक्टूबर 2026 तक नोटिस नहीं आया है।" },
    { q: "क्या SSC कैलेंडर की तारीखें पक्की होती हैं?", a: "नहीं। कैलेंडर संभावित (tentative) होता है। पक्की तारीख परीक्षा के नोटिस या \"Schedule of Examination\" नोटिस में ही आती है।" },
  ],
  related: [
    { href: "/exams/ssc-cgl-2026.html", emoji: "🎓", title: "SSC CGL 2026 परीक्षा", text: "टियर-1 तारीख, एडमिट कार्ड, पैटर्न" },
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "OTR, फीस, उम्र में छूट" },
    { href: "/exams/upsc-annual-exam-calendar-2027.html", emoji: "🏛️", title: "UPSC कैलेंडर 2027", text: "CSE, NDA, CDS की तारीखें" },
    { href: "/exams/railway-rrb-exam-schedule-2026-2027.html", emoji: "🚆", title: "रेलवे RRB कैलेंडर", text: "NTPC, ग्रुप डी, ALP" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://ssc.gov.in/", label: "📝 SSC वेबसाइट" },
    { href: "/exams/", label: "📅 परीक्षा कैलेंडर" },
  ],
};
