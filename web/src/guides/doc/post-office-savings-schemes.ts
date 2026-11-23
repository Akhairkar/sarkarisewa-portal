import type { DocGuide } from "./types";

// Sources (checked 23 Nov 2026): India Post savings page (scheme rates, RD
// 6.7% quarterly compounding, MIS 7.4% monthly, SCSS 8.2%, PPF 7.1% yearly,
// SSA 8.2%, TD 6.9-7.5%, KVP 7.5% / 115 months, NSC 7.7%, minimum balances,
// premature closure notes); Finance Ministry OM No. 1/4/2019-NS of 30.09.2026
// forwarded by Department of Posts SB Order 12/2026 (Oct-Dec 2026 rates
// unchanged from Jul-Sep 2026); a bank notice of the same OM for compounding
// (SCSS and TD quarterly, PPF/NSC/KVP/SSY yearly, MIS monthly payout);
// PIB 1 Apr 2023 (SCSS ₹30 lakh, MIS ₹9 / ₹15 lakh; Mahila Samman Savings
// Certificate valid only to 31 Mar 2025, so it is shown as closed).
export const postOfficeSavingsSchemes: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "डाकघर बचत योजनाएं 2026" },
  ],
  docHi: "डाकघर बचत योजनाएं 2026",
  title: "पोस्ट ऑफिस बचत योजनाएं 2026: ब्याज दर की पूरी सूची (अक्टूबर-दिसंबर)",
  description: "पोस्ट ऑफिस की सभी बचत योजनाओं की ताज़ा ब्याज दर एक जगह: PPF 7.1%, SCSS 8.2%, सुकन्या 8.2%, NSC 7.7%, KVP 7.5%, MIS 7.4%, RD 6.7%, TD। अवधि, कम से कम जमा और कौन सी किसके लिए ठीक।",
  published: "2026-11-23",
  modified: "2026-11-23",
  verified: "23 नवंबर 2026",
  h1: "पोस्ट ऑफिस बचत योजनाएं 2026: सभी योजनाओं की ब्याज दर, अवधि और कौन सी किसके लिए",
  lead: "वित्त मंत्रालय ने 30 सितंबर 2026 के आदेश में अक्टूबर-दिसंबर 2026 तिमाही की छोटी बचत ब्याज दरें पिछली तिमाही जितनी ही रखीं। यानी <strong>PPF 7.1%, SCSS 8.2%, सुकन्या 8.2%, NSC 7.7%, KVP 7.5%, MIS 7.4%</strong> और 5 साल की टाइम डिपॉज़िट 7.5%। नीचे हर योजना की दर, अवधि और कम से कम जमा एक तालिका में है।",
  facts: [
    ["सबसे ऊंची दर", "SCSS और सुकन्या समृद्धि: 8.2%"],
    ["लागू तिमाही", "1 अक्टूबर से 31 दिसंबर 2026"],
    ["हर महीने आय", "मासिक आय योजना (MIS): 7.4%"],
    ["आदेश", "वित्त मंत्रालय, 30 सितंबर 2026"],
  ],
  notice: "ये दरें अगली तिमाही (जनवरी-मार्च 2027) में बदल सकती हैं। वित्त मंत्रालय हर तिमाही के आखिर में नई दर घोषित करता है। SCSS, KVP, NSC, MIS और टाइम डिपॉज़िट में जिस तिमाही में खाता खोला जाता है, उसकी दर उस खाते पर लगती है। PPF, सुकन्या और RD की दर समय-समय पर बदलती रहती है।",
  sections: [
    {
      id: "dar",
      title: "सभी योजनाओं की ब्याज दर (अक्टूबर-दिसंबर 2026)",
      table: {
        head: ["योजना", "ब्याज दर", "ब्याज कैसे जुड़ता है", "अवधि"],
        rows: [
          ["डाकघर बचत खाता", "4.0%", "डाकघर से पूछें", "कोई तय अवधि नहीं"],
          ['<a href="/service/senior-citizen-savings-scheme.html">वरिष्ठ नागरिक बचत (SCSS)</a>', "8.2%", "तिमाही", "5 साल (3-3 साल बढ़ा सकते हैं)"],
          ['<a href="/service/sukanya-samriddhi-yojana.html">सुकन्या समृद्धि खाता</a>', "8.2%", "सालाना", "खाता खुलने से 21 साल"],
          ['<a href="/service/national-savings-certificate.html">राष्ट्रीय बचत प्रमाणपत्र (NSC)</a>', "7.7%", "सालाना, मैच्योरिटी पर", "5 साल"],
          ['<a href="/service/public-provident-fund.html">PPF</a>', "7.1%", "सालाना", "15 साल"],
          ['<a href="/service/kisan-vikas-patra.html">किसान विकास पत्र (KVP)</a>', "7.5%", "सालाना", "115 महीने में रकम दोगुनी"],
          ['<a href="/service/post-office-monthly-income-scheme.html">मासिक आय योजना (MIS)</a>', "7.4%", "हर महीने भुगतान", "5 साल"],
          ["टाइम डिपॉज़िट (TD) 1 साल", "6.9%", "तिमाही", "1 साल"],
          ["टाइम डिपॉज़िट (TD) 2 साल", "7.0%", "तिमाही", "2 साल"],
          ["टाइम डिपॉज़िट (TD) 3 साल", "7.1%", "तिमाही", "3 साल"],
          ["टाइम डिपॉज़िट (TD) 5 साल", "7.5%", "तिमाही", "5 साल"],
          ["रिकरिंग डिपॉज़िट (RD)", "6.7%", "तिमाही", "5 साल"],
        ],
      },
      callout: { kind: "info", html: "<strong>महिला सम्मान बचत पत्र:</strong> यह योजना 31 मार्च 2025 तक ही खुली थी, अब इसमें नई जमा नहीं होती। इसके बारे में <a href=\"/service/mahila-samman-bachat-patra.html\">महिला सम्मान बचत पत्र गाइड</a> में देखें।" },
    },
    {
      id: "jama",
      title: "कम से कम जमा और बीच में निकालना",
      table: {
        head: ["योजना", "कम से कम", "समय से पहले बंद"],
        rows: [
          ["MIS", "₹1,000", "1 साल के बाद, कटौती के साथ"],
          ["NSC", "₹1,000", "सामान्यतः नहीं; मृत्यु, गिरवी जब्ती या अदालत के आदेश पर"],
          ["KVP", "₹1,000", "2 साल 6 महीने के बाद"],
          ["TD", "₹1,000", "6 महीने के बाद, शुल्क के साथ"],
          ["RD", "₹100 प्रति माह", "3 साल के बाद; सिर्फ बचत खाते की दर का ब्याज"],
          ["SCSS", "₹1,000", "कभी भी, कटौती के साथ"],
        ],
      },
      intro: "ये कम से कम बचत और बंद करने की शर्तें इंडिया पोस्ट की सूची के हिसाब से हैं। हर योजना की ऊपरी सीमा अलग है: SCSS में ₹30 लाख, MIS में अकेले ₹9 लाख और संयुक्त ₹15 लाख। PPF में साल में ₹1.5 लाख। NSC और KVP में कोई सीमा नहीं।",
    },
    {
      id: "kaun-si",
      title: "कौन सी योजना किसके लिए ठीक है",
      table: {
        head: ["ज़रूरत", "इन पर विचार करें"],
        rows: [
          ["हर महीने बंधी आय", '<a href="/service/post-office-monthly-income-scheme.html">मासिक आय योजना (MIS)</a>'],
          ["60 साल के बाद की बचत", '<a href="/service/senior-citizen-savings-scheme.html">SCSS</a>'],
          ["बेटी का भविष्य", '<a href="/service/sukanya-samriddhi-yojana.html">सुकन्या समृद्धि</a>'],
          ["लंबे समय की सुरक्षित बचत", '<a href="/service/public-provident-fund.html">PPF</a>'],
          ["5 साल बाद एकमुश्त रकम", '<a href="/service/national-savings-certificate.html">NSC</a> या 5 साल की TD'],
          ["रकम दोगुनी करना, कोई सीमा नहीं", '<a href="/service/kisan-vikas-patra.html">किसान विकास पत्र</a>'],
          ["हर महीने थोड़ा-थोड़ा जोड़ना", "रिकरिंग डिपॉज़िट (RD)"],
        ],
      },
      callout: { kind: "warn", html: "यह जानकारी सामान्य है, निवेश की सलाह नहीं। अपनी उम्र, ज़रूरत और टैक्स को देखकर फैसला लें, और जिस पैसे की जल्दी ज़रूरत पड़ सकती है उसे लंबी अवधि वाली योजना में न लगाएं।" },
    },
    {
      id: "kholna",
      title: "खाता खोलने के लिए क्या चाहिए",
      list: [
        "<strong>पहचान और पता:</strong> आधार, PAN और पते का प्रमाण।",
        "<strong>फोटो</strong> और खाता खोलने का फॉर्म।",
        "<strong>नॉमिनी:</strong> हर योजना में नॉमिनी जोड़ें, ताकि बाद में परिवार को परेशानी न हो।",
        "<strong>कहां:</strong> ज़्यादातर योजनाएं नज़दीकी डाकघर में खुलती हैं। PPF, SCSS और सुकन्या अधिकृत बैंकों में भी खुल सकते हैं।",
      ],
      callout: { kind: "ok", html: 'नज़दीकी डाकघर या सेवा केंद्र खोजने के लिए <a href="/tools/csc-locator.html">नज़दीकी केंद्र खोजें</a>। अपनी योजना की तुलना के लिए <a href="/tools/savings-comparator.html">बचत योजना तुलना टूल</a> देखें।' },
    },
    {
      id: "tax",
      title: "टैक्स की बात",
      html: "<p>ज़्यादातर छोटी बचत योजनाओं के ब्याज पर आयकर के नियम अलग-अलग हैं। इसके नियम 1 अप्रैल 2026 से नए आयकर अधिनियम 2025 में आ गए हैं और धाराओं के नंबर बदले हैं। हर योजना के टैक्स का हिसाब उसके अपने पेज और incometax.gov.in पर देखें, या CA से पूछें।</p>",
    },
  ],
  official: [
    { href: "https://indiapost.gov.in/banking-services/saving", title: "इंडिया पोस्ट: बचत योजनाएं और ब्याज दर" },
    { href: "https://dea.gov.in/", title: "आर्थिक कार्य विभाग, वित्त मंत्रालय", note: "30 सितंबर 2026 का ब्याज दर आदेश" },
    { href: "https://www.nsiindia.gov.in/", title: "राष्ट्रीय बचत संस्थान (NSI)" },
    { href: "https://pib.gov.in/PressReleasePage.aspx?PRID=1912742", title: "PIB: SCSS और MIS की सीमा (1 अप्रैल 2023)" },
  ],
  faq: [
    { q: "पोस्ट ऑफिस में सबसे ज़्यादा ब्याज किस योजना में मिलता है?", a: "अक्टूबर-दिसंबर 2026 में SCSS (60 साल+ के लिए) और सुकन्या समृद्धि (बेटी के लिए) दोनों में 8.2%। आम लोगों के लिए NSC 7.7% और KVP 7.5% हैं।" },
    { q: "PPF की ब्याज दर अभी कितनी है?", a: "7.1% सालाना, जो पिछली तिमाही जितनी ही है।" },
    { q: "पोस्ट ऑफिस की ब्याज दरें कितनी बार बदलती हैं?", a: "हर तिमाही (3 महीने में) वित्त मंत्रालय दरों की समीक्षा करता है। अक्टूबर-दिसंबर 2026 के लिए दरें नहीं बदलीं। अगली घोषणा दिसंबर के आखिर में होगी।" },
    { q: "महीने की आय के लिए कौन सी योजना है?", a: "मासिक आय योजना (MIS), जिसमें 7.4% पर हर महीने ब्याज मिलता है। अकेले खाते में ₹9 लाख और संयुक्त में ₹15 लाख तक जमा हो सकते हैं।" },
    { q: "क्या महिला सम्मान बचत पत्र में अब निवेश कर सकते हैं?", a: "नहीं। यह योजना 31 मार्च 2025 तक ही उपलब्ध थी।" },
    { q: "क्या बैंक FD से पोस्ट ऑफिस योजनाएं बेहतर हैं?", a: "दोनों की दरें और नियम अलग हैं। पोस्ट ऑफिस की योजनाओं पर केंद्र सरकार की गारंटी होती है और दर हर तिमाही तय होती है। अपने बैंक की ताज़ा FD दर से तुलना करके देखें।" },
  ],
  related: [
    { href: "/service/senior-citizen-savings-scheme.html", emoji: "🧓", title: "SCSS", text: "वरिष्ठ नागरिक, 8.2%" },
    { href: "/service/post-office-monthly-income-scheme.html", emoji: "💵", title: "मासिक आय योजना", text: "हर महीने ब्याज" },
    { href: "/service/kisan-vikas-patra.html", emoji: "🌾", title: "किसान विकास पत्र", text: "रकम दोगुनी" },
    { href: "/service/national-savings-certificate.html", emoji: "📜", title: "NSC", text: "5 साल, 7.7%" },
    { href: "/service/public-provident-fund.html", emoji: "🏦", title: "PPF खाता", text: "15 साल की बचत" },
    { href: "/service/sukanya-samriddhi-yojana.html", emoji: "👧", title: "सुकन्या समृद्धि", text: "बेटी के लिए" },
  ],
  aside: [
    { href: "https://indiapost.gov.in/banking-services/saving", label: "📮 इंडिया पोस्ट" },
    { href: "/tools/savings-comparator.html", label: "📊 बचत तुलना" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
