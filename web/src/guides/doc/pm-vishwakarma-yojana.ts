import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026, via search extracts; pmvishwakarma.gov.in and
// india.gov.in pages were not reachable from here): india.gov.in spotlight
// "Pradhan Mantri Vishwakarma Scheme" and myScheme "pmv" (Ministry of MSME;
// loans up to ₹3 lakh in two tranches ₹1 lakh (18 months) and ₹2 lakh (30
// months), 5% concessional rate with Government interest subvention capped at
// 8%, credit guarantee fee borne by Government; toolkit incentive up to
// ₹15,000 as e-voucher at start of Basic Training; stipend ₹500/day; Basic
// Training 5-7 days (40 hours), Advanced Training 15 days+; second tranche
// needs standard loan account + digital transactions or advanced training);
// Drishti IAS / PSU Connect reports of the PIB release for 3 years (17 Sep
// 2026): about 30 lakh registered after three-stage verification, ~18.15 lakh
// toolkits, ~6.18 lakh loans worth ~₹5,300 crore, outlay ₹13,000 crore
// FY 2023-24 to 2027-28, 18 trades; PIB Aug 2024 annexure (enrolments by
// state). Eligibility (18+, one per family, no PMEGP/PM SVANidhi/Mudra loan
// in last 5 years, CSC-only registration, Gram Panchayat/ULB -> District
// Implementation Committee -> Screening Committee) from scheme summaries.
// Helpline numbers conflict between sources, so none is given.
export const pmVishwakarmaYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम विश्वकर्मा योजना" },
  ],
  docHi: "पीएम विश्वकर्मा योजना",
  title: "पीएम विश्वकर्मा योजना",
  description: "18 पारंपरिक व्यवसायों के कारीगरों और शिल्पकारों को कौशल प्रशिक्षण, आधुनिक औज़ार, और बिना गारंटी के ऋण देने वाली केंद्रीय योजना।",
  published: "2024-06-01",
  modified: "2026-11-27",
  verified: "18 सितंबर 2026 (PIB आंकड़े)",
  h1: "पीएम विश्वकर्मा योजना: 18 पारंपरिक कारीगरों को प्रशिक्षण, ₹15,000 टूलकिट और ₹3 लाख तक लोन",
  lead: "पीएम विश्वकर्मा सूक्ष्म, लघु और मध्यम उद्यम (MSME) मंत्रालय की योजना है, जो 17 सितंबर 2023 को शुरू हुई। इसमें बढ़ई, लोहार, सुनार, कुम्हार, दर्जी, नाई, धोबी जैसे 18 पारंपरिक कामों के हाथ के कारीगरों को पहचान पत्र, ₹500 रोज़ भत्ते के साथ प्रशिक्षण, ₹15,000 तक के औज़ार (ई-वाउचर) और 5% ब्याज पर बिना गारंटी ₹3 लाख तक का लोन (₹1 लाख + ₹2 लाख) मिलता है। रजिस्ट्रेशन मुफ्त है और नज़दीकी CSC से होता है।",
  facts: [
    ["मंत्रालय", "MSME मंत्रालय, भारत सरकार"],
    ["टूलकिट", "₹15,000 तक (ई-वाउचर)"],
    ["लोन", "₹1 लाख + ₹2 लाख, 5% ब्याज, बिना गारंटी"],
    ["रजिस्ट्रेशन", "CSC से, मुफ्त"],
  ],
  sections: [
    {
      id: "labh",
      title: "योजना में क्या-क्या मिलता है",
      table: {
        head: ["लाभ", "विवरण"],
        rows: [
          ["पहचान", "पीएम विश्वकर्मा प्रमाण पत्र और ID कार्ड"],
          ["बुनियादी प्रशिक्षण", "5-7 दिन (40 घंटे), ₹500 प्रति दिन भत्ता"],
          ["उन्नत प्रशिक्षण", "15 दिन या ज़्यादा, ₹500 प्रति दिन भत्ता (इच्छा से)"],
          ["टूलकिट", "₹15,000 तक का ई-वाउचर, बुनियादी प्रशिक्षण की शुरुआत में"],
          ["लोन पहली किस्त", "₹1 लाख तक, 18 महीने में चुकाना"],
          ["लोन दूसरी किस्त", "₹2 लाख तक, 30 महीने में चुकाना"],
          ["ब्याज", "कारीगर 5% देता है; बाकी (8% तक) सरकार देती है; गारंटी फीस भी सरकार देती है"],
          ["डिजिटल लेनदेन और मार्केटिंग", "डिजिटल लेनदेन पर प्रोत्साहन और बाज़ार से जोड़ने में मदद"],
        ],
      },
      callout: { kind: "info", html: "दूसरी किस्त तभी मिलती है जब पहली किस्त का लोन खाता सही चल रहा हो और कारीगर ने डिजिटल लेनदेन अपनाया हो या उन्नत प्रशिक्षण लिया हो।" },
    },
    {
      id: "vyavsay",
      title: "18 पारंपरिक काम",
      list: [
        "बढ़ई (सुथार), नाव बनाने वाले, अस्त्र/हथियार बनाने वाले (Armourer)",
        "लोहार, हथौड़ा और औज़ार बनाने वाले, ताला बनाने वाले",
        "सुनार, कुम्हार, मूर्तिकार/पत्थर तराशने वाले/पत्थर तोड़ने वाले",
        "मोची/जूते बनाने वाले, राजमिस्त्री",
        "टोकरी/चटाई/झाड़ू बनाने वाले और कॉयर बुनकर, पारंपरिक गुड़िया और खिलौने बनाने वाले",
        "नाई, माला बनाने वाले, धोबी, दर्जी, मछली पकड़ने का जाल बनाने वाले",
      ],
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "ऊपर के 18 में से किसी काम में <strong>हाथ और औज़ार से काम करने वाला स्वरोज़गार कारीगर</strong> (असंगठित क्षेत्र)।",
        "रजिस्ट्रेशन के दिन उम्र <strong>कम से कम 18 साल</strong>।",
        "पिछले 5 साल में समान प्रकार की सरकारी स्वरोज़गार/व्यवसाय ऋण योजना का लाभ न लिया हो। PIB के आधिकारिक विवरण के अनुसार PM MUDRA या PM SVANidhi का ऋण पूरी तरह चुका चुके लाभार्थी पात्र हो सकते हैं; अन्य योजना/बकाया ऋण की स्थिति CSC और आधिकारिक दिशानिर्देश से जांचें।",
        "एक परिवार (पति, पत्नी और अविवाहित बच्चे) से <strong>सिर्फ एक सदस्य</strong>।",
        "सरकारी नौकरी करने वाला और उसका परिवार पात्र नहीं।",
      ],
    },
    {
      id: "avedan",
      title: "रजिस्ट्रेशन और मंज़ूरी का ढांचा",
      intro: "योजना में पंजीकरण केवल Common Service Centre (CSC) के माध्यम से जमा होता है। इसके बाद आवेदन की तीन-स्तरीय जांच होती है: ग्राम पंचायत/शहरी निकाय, ज़िला कार्यान्वयन समिति और स्क्रीनिंग कमेटी। यह योजना के संचालन का संक्षिप्त परिचय है; दस्तावेज़, फॉर्म भरने और आवेदन की स्थिति देखने के चरण अलग आवेदन गाइड में दिए हैं।",
      callout: { kind: "ok", html: 'CSC पर आवेदन से पहले दस्तावेज़ और पूरा प्रक्रिया क्रम देखें: <a href="/service/pm-vishwakarma-yojana-apply.html">पीएम विश्वकर्मा आवेदन गाइड</a>।' },
    },
    {
      id: "pragati",
      title: "तीन साल में कितना काम हुआ",
      intro: "PIB के 18 सितंबर 2026 के आधिकारिक अपडेट के अनुसार योजना में 30 लाख लाभार्थी पंजीकृत हुए थे; लगभग 24.50 लाख को बुनियादी कौशल प्रशिक्षण, 18.15 लाख को आधुनिक टूलकिट और 6.18 लाख कारीगरों को ₹5,297 करोड़ का ऋण सहयोग मिला था। ये आंकड़े उस तारीख के हैं, लाइव काउंटर नहीं। योजना का कुल परिव्यय FY 2023-24 से FY 2027-28 तक ₹13,000 करोड़ है.",
    },
  ],
  official: [
    { href: "https://pmvishwakarma.gov.in/", title: "पीएम विश्वकर्मा पोर्टल", note: "रजिस्ट्रेशन CSC से; स्टेटस और संपर्क" },
    { href: "https://msme.gov.in/", title: "MSME मंत्रालय" },
    { href: "https://www.myscheme.gov.in/schemes/pmv", title: "myScheme: PM Vishwakarma" },
  ],
  faq: [
    { q: "पीएम विश्वकर्मा योजना में कितना पैसा मिलता है?", a: "सीधे नकद राशि नहीं मिलती। ₹15,000 तक का टूलकिट ई-वाउचर, प्रशिक्षण के दौरान ₹500 रोज़ का भत्ता, और 5% ब्याज पर ₹1 लाख और फिर ₹2 लाख तक का बिना गारंटी लोन मिलता है।" },
    { q: "क्या खुद ऑनलाइन आवेदन कर सकते हैं?", a: "नहीं, रजिस्ट्रेशन CSC पर आधार बायोमेट्रिक से होता है। CSC पर रजिस्ट्रेशन मुफ्त है।" },
    { q: "क्या परिवार के दो लोग आवेदन कर सकते हैं?", a: "नहीं, एक परिवार (पति, पत्नी, अविवाहित बच्चे) से सिर्फ एक सदस्य को लाभ मिलता है।" },
    { q: "मुद्रा लोन लिया है, क्या पात्र हूं?", a: "पिछले 5 साल में PMEGP, PM SVANidhi या मुद्रा से लोन लिया हो तो आम तौर पर पात्र नहीं। अपनी स्थिति CSC पर रजिस्ट्रेशन के समय जांचें।" },
    { q: "लोन पर ब्याज कितना है?", a: "कारीगर को 5% ब्याज देना होता है। बैंक की दर से फर्क (8% तक) सरकार देती है।" },
  ],
  related: [
    { href: "/service/pm-vishwakarma-yojana-apply.html", emoji: "📝", title: "पीएम विश्वकर्मा आवेदन गाइड", text: "CSC पर रजिस्ट्रेशन और स्टेटस" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "छोटे व्यवसाय के लिए लोन" },
    { href: "/service/pm-svanidhi.html", emoji: "🛒", title: "पीएम स्वनिधि", text: "रेहड़ी-पटरी वालों के लिए लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME पंजीकरण" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "रजिस्ट्रेशन यहीं होता है" },
  ],
  aside: [
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC खोजें" },
    { href: "https://pmvishwakarma.gov.in/", label: "🔗 पीएम विश्वकर्मा पोर्टल" },
  ],
};
