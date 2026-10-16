import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; pib.gov.in not reachable from the sandbox,
// facts taken from the sibling state voter-ID guides in this folder that cite
// them, plus search extracts): PIB 25 Jul 2026 (PRID=2289473: Phase I in
// Bihar in 2025 before the assembly election; names removed only for death,
// permanent shifting, duplicate entry or not found after repeated visits),
// ECI order/press note 14 May 2026 (PIB PRID=2260955; ECI/PN/086/2026: Phase
// III in 16 states + 3 UTs; HP, J&K and Ladakh to be announced later;
// qualifying dates 1 Jul / 1 Oct 2026 by state), ECI Phase II order 27 Oct
// 2025 (9 states + 3 UTs incl. Rajasthan, TN, WB, Kerala, Gujarat, MP,
// Chhattisgarh, Puducherry, A&N, Lakshadweep), state CEO / Akashvani news on
// Phase III extensions (Maharashtra final roll 16 Nov 2026; Telangana 9 Nov
// 2026; Delhi claims till 30 Oct 2026; Sikkim final roll 6 Sep 2026). The
// exact Phase III document list was not confirmed from a primary source, so
// documents are described generally.
export const specialIntensiveRevisionSir: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "SIR मतदाता सूची" },
  ],
  docHi: "SIR मतदाता सूची",
  title: "विशेष सघन पुनरीक्षण (SIR) — मतदाता सूची सत्यापन",
  description: "भारत निर्वाचन आयोग द्वारा मतदाता सूची को दोबारा सत्यापित और अपडेट करने के लिए घर-घर और ऑनलाइन चलाया जा रहा अभियान, जो फिलहाल महाराष्ट्र सहित अन्य राज्यों में जारी है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "विशेष सघन पुनरीक्षण (SIR) 2026: वोटर लिस्ट में नाम कैसे बचाएं, चरण और राज्यवार स्थिति",
  lead: "विशेष सघन पुनरीक्षण (Special Intensive Revision, SIR) भारत निर्वाचन आयोग (ECI) का अभियान है, जिसमें मतदाता सूची नए सिरे से जांची जाती है। BLO घर-घर जाकर <strong>गणना फॉर्म (Enumeration Form)</strong> देते और जमा करते हैं, फिर ड्राफ्ट सूची छपती है, दावे-आपत्ति का समय मिलता है और जांच के बाद अंतिम सूची छपती है। पहला चरण 2025 में बिहार में, दूसरा अक्टूबर 2025 से 12 राज्यों/UT में हुआ; <strong>तीसरा चरण</strong> मई 2026 में 16 राज्यों और 3 UT के लिए घोषित हुआ और कई राज्यों (जैसे महाराष्ट्र, तेलंगाना, दिल्ली) में अक्टूबर 2026 में भी चल रहा है।",
  facts: [
    ["कौन चलाता है", "भारत निर्वाचन आयोग (ECI)"],
    ["आपको क्या करना है", "BLO से गणना फॉर्म लेकर भरें और जमा करें"],
    ["ऑनलाइन", "voters.eci.gov.in / ECINET ऐप"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "charan",
      title: "SIR के चरण",
      table: {
        head: ["चरण", "कब", "कहां"],
        rows: [
          ["पहला", "2025", "बिहार"],
          ["दूसरा", "27 अक्टूबर 2025 के आदेश से (अप्रैल 2026 तक)", "9 राज्य + 3 UT, जैसे उत्तर प्रदेश, राजस्थान, मध्य प्रदेश, गुजरात, छत्तीसगढ़, गोवा, केरल, तमिलनाडु, पश्चिम बंगाल, पुदुचेरी, अंडमान-निकोबार, लक्षद्वीप"],
          ["तीसरा", "14 मई 2026 को घोषित; ज़्यादातर जगह मई-जून 2026 से", "16 राज्य + 3 UT, जैसे महाराष्ट्र, कर्नाटक, आंध्र प्रदेश, तेलंगाना, ओडिशा, हरियाणा, पंजाब, झारखंड, दिल्ली, उत्तराखंड, चंडीगढ़, सिक्किम और पूर्वोत्तर के राज्य"],
        ],
      },
      callout: { kind: "info", html: "हिमाचल प्रदेश, जम्मू-कश्मीर और लद्दाख का कार्यक्रम आयोग ने बाद में घोषित करने को कहा है। तीसरे चरण में कई राज्यों की तारीखें बढ़ी हैं; अपने राज्य की ताज़ा तारीख राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट पर देखें।" },
    },
    {
      id: "kya-karein",
      title: "SIR में आपको क्या करना है",
      steps: [
        "<strong>गणना फॉर्म लें:</strong> BLO आपके घर दो प्रति में फॉर्म देगा। घर पर न हों तो BLO से संपर्क करें; BLO का नाम-नंबर voters.eci.gov.in या CEO वेबसाइट पर मिलता है।",
        "<strong>फॉर्म भरें:</strong> नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और ताज़ा फोटो। पिछली गहन पुनरीक्षण वाली पुरानी सूची में अपना या माता-पिता का नाम हो तो उसका विवरण भरें।",
        "<strong>जमा करें:</strong> भरा फॉर्म BLO को दें और दूसरी प्रति पर पावती लें। जहां सुविधा है, voters.eci.gov.in पर ऑनलाइन भी भर सकते हैं।",
        "<strong>ड्राफ्ट सूची देखें:</strong> ड्राफ्ट छपने पर <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर नाम खोजें।",
        "<strong>नोटिस मिले तो:</strong> ERO जिनका मिलान पुरानी सूची से नहीं हो पाता, उनसे पहचान/जन्म/निवास के कागज़ मांगता है। तय समय में कागज़ BLO या ERO को दें।",
      ],
      callout: { kind: "warn", html: "ड्राफ्ट सूची में नाम न हो तो दावे-आपत्ति की अवधि में ही <strong>फॉर्म 6</strong> (घोषणा पत्र के साथ) भरें। अवधि बीतने के बाद भी फॉर्म 6 से नाम जुड़ सकता है, पर अंतिम सूची में उसी समय नहीं आएगा।" },
    },
    {
      id: "naam-katna",
      title: "नाम कब कटता है और क्या करें",
      list: [
        "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>।",
        "नाम कट गया हो तो फॉर्म 6 से नया नाम जुड़वाएं।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर राज्य के CEO के पास अपील कर सकते हैं।",
        "किसी दूसरे का गलत नाम सूची में हो तो फॉर्म 7 से आपत्ति दें।",
      ],
    },
    {
      id: "rajya",
      title: "राज्यवार SIR गाइड",
      list: [
        '<a href="/states/maharashtra-sir-voter-list.html">महाराष्ट्र</a>, <a href="/states/telangana-sir-voter-list.html">तेलंगाना</a>, <a href="/states/delhi-sir-voter-list.html">दिल्ली</a>, <a href="/states/karnataka-sir-voter-list.html">कर्नाटक</a>, <a href="/states/andhra-pradesh-sir-voter-list.html">आंध्र प्रदेश</a> (तीसरा चरण)',
        '<a href="/states/uttar-pradesh-sir-voter-list.html">उत्तर प्रदेश</a>, <a href="/states/rajasthan-sir-voter-list.html">राजस्थान</a>, <a href="/states/west-bengal-sir-voter-list.html">पश्चिम बंगाल</a>, <a href="/states/tamil-nadu-sir-voter-list.html">तमिलनाडु</a> (दूसरा चरण)',
        '<a href="/states/bihar-sir-voter-list.html">बिहार</a> (पहला चरण)',
      ],
    },
  ],
  official: [
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "फॉर्म 6/7/8, गणना फॉर्म, BLO जानकारी" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें" },
    { href: "https://eci.gov.in/", title: "भारत निर्वाचन आयोग", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    { q: "SIR क्या है?", a: "विशेष सघन पुनरीक्षण, जिसमें चुनाव आयोग BLO के ज़रिए घर-घर गणना करके मतदाता सूची नए सिरे से तैयार करता है। इसमें ड्राफ्ट सूची, दावे-आपत्ति और फिर अंतिम सूची छपती है।" },
    { q: "क्या SIR में हर किसी को कागज़ देने होंगे?", a: "नहीं। गणना फॉर्म सबको भरना है। पुरानी गहन पुनरीक्षण सूची से जिनका या जिनके माता-पिता का मिलान हो जाता है, उनसे आम तौर पर अलग कागज़ नहीं मांगे जाते; बाकी को नोटिस मिलने पर कागज़ देने होते हैं।" },
    { q: "मेरे राज्य में SIR कब है?", a: "बिहार में 2025 में, 12 राज्यों/UT में अक्टूबर 2025-अप्रैल 2026 में और 16 राज्यों व 3 UT में मई 2026 से तीसरा चरण। हिमाचल, जम्मू-कश्मीर और लद्दाख का कार्यक्रम बाद में आएगा। अपने राज्य की CEO वेबसाइट देखें।" },
    { q: "ड्राफ्ट सूची में नाम नहीं है, क्या करूं?", a: "दावे-आपत्ति की अवधि में फॉर्म 6 और घोषणा पत्र भरकर BLO को दें या voters.eci.gov.in पर ऑनलाइन भरें।" },
    { q: "SIR की शिकायत कहां करें?", a: "हेल्पलाइन 1950 पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/service/voter-id-card.html", emoji: "🗳️", title: "वोटर आईडी कार्ड", text: "फॉर्म 6, सुधार, नया कार्ड" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/states/maharashtra-sir-voter-list.html", emoji: "📋", title: "महाराष्ट्र SIR", text: "अंतिम सूची 16 नवंबर 2026 (तय)" },
    { href: "/states/delhi-sir-voter-list.html", emoji: "📋", title: "दिल्ली SIR", text: "दावे-आपत्ति 30 अक्टूबर तक" },
  ],
  aside: [
    { href: "https://voters.eci.gov.in/", label: "🗳️ Voters' Service Portal" },
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
  ],
};
