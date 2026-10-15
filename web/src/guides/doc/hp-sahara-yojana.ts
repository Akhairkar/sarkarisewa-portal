import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; sahara.hpsbys.in seen in search results but
// not reachable from the sandbox): sahara.hpsbys.in ("About the yojna": ₹3,000
// a month to economically weaker patients with Parkinson's, malignant cancer,
// paralysis, muscular dystrophy, haemophilia, thalassemia, renal failure etc.;
// documents incl. life certificate, BPL/income and medical certificates);
// en.vikaspedia.in (Mukhyamantri Sahara Yojana: permanent resident of HP,
// economically weaker family, support for patients/attendants); UNI report
// (administration moved from Health & Family Welfare to Social Justice &
// Empowerment Department, ₹3,000 a month by DBT continues; year not shown);
// LatestLY/IANS (CM review: applications online via e-Kalyan portal); The
// Tribune (beneficiaries in Kangra and elsewhere waiting months for grant).
// Income ceiling (₹4 lakh on a private blog) not confirmed; left out. No
// e-Kalyan URL was confirmed, so it is named but not linked.
export const hpSaharaYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "हिमाचल प्रदेश", href: "/states/himachal-pradesh.html" },
    { label: "सहारा योजना" },
  ],
  docHi: "सहारा योजना",
  title: "Sahara Yojana",
  description: "हिमाचल प्रदेश की मुख्यमंत्री सहारा योजना: कैंसर, लकवा, पार्किंसन, थैलेसीमिया, किडनी फेल जैसी गंभीर बीमारी के मरीज़ों को ₹3,000 मासिक सहायता। पात्रता, कागज़, आवेदन कहां करें और पैसा रुके तो क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मुख्यमंत्री सहारा योजना हिमाचल प्रदेश: गंभीर रोगियों को ₹3,000 हर महीने",
  lead: "मुख्यमंत्री सहारा योजना हिमाचल प्रदेश सरकार की योजना है, जिसमें कैंसर, लकवा, पार्किंसन, मस्कुलर डिस्ट्रॉफी, हीमोफीलिया, थैलेसीमिया और किडनी फेल जैसी गंभीर बीमारियों से पीड़ित आर्थिक रूप से कमज़ोर मरीज़ों को ₹3,000 प्रति माह सहायता बैंक खाते में दी जाती है। आवेदक हिमाचल का स्थायी निवासी होना चाहिए। खबरों के अनुसार योजना अब स्वास्थ्य विभाग से सामाजिक न्याय एवं अधिकारिता विभाग को सौंप दी गई है, इसलिए आवेदन और जानकारी के लिए ज़िला कल्याण अधिकारी के कार्यालय से संपर्क करें।",
  facts: [
    ["सहायता", "₹3,000 प्रति माह (DBT से बैंक खाते में)"],
    ["किसके लिए", "गंभीर/लाइलाज बीमारी वाले आर्थिक रूप से कमज़ोर मरीज़"],
    ["विभाग", "सामाजिक न्याय एवं अधिकारिता विभाग (पहले स्वास्थ्य विभाग)"],
    ["पोर्टल", '<a href="https://sahara.hpsbys.in/" target="_blank" rel="noopener nofollow">sahara.hpsbys.in</a>'],
  ],
  sections: [
    {
      id: "bimariyan",
      title: "किन बीमारियों में मिलती है",
      list: [
        "घातक कैंसर (Malignant cancer)",
        "लकवा (Paralysis)",
        "पार्किंसन रोग (Parkinson's)",
        "मस्कुलर डिस्ट्रॉफी (Muscular dystrophy)",
        "हीमोफीलिया (Haemophilia)",
        "थैलेसीमिया (Thalassemia)",
        "किडनी फेल होना (Acute/Chronic renal failure)",
        "कुछ अन्य गंभीर रोग जिनसे मरीज़ लंबे समय तक बिस्तर पर या दूसरों पर निर्भर रहता है (पूरी सूची विभाग से पूछें)",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "मरीज़ <strong>हिमाचल प्रदेश का स्थायी निवासी</strong> हो।",
        "परिवार <strong>आर्थिक रूप से कमज़ोर</strong> हो। सालाना आय की एक सीमा तय है; ताज़ा सीमा ज़िला कल्याण कार्यालय से पूछें।",
        "ऊपर दी गई किसी बीमारी का <strong>सरकारी डॉक्टर/मेडिकल बोर्ड का प्रमाण पत्र</strong> हो।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड और हिमाचली निवास का प्रमाण",
        "BPL प्रमाण या आय प्रमाण पत्र",
        "बीमारी का मेडिकल प्रमाण पत्र (सरकारी अस्पताल से)",
        "बैंक पासबुक (मरीज़ या अभिभावक के नाम)",
        "फोटो और मोबाइल नंबर",
        "भुगतान जारी रखने के लिए समय-समय पर <strong>जीवन प्रमाण पत्र (Life certificate)</strong>",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "बीमारी का प्रमाण पत्र सरकारी अस्पताल/मेडिकल कॉलेज से बनवाएं।",
        "अपने <strong>ज़िला कल्याण अधिकारी</strong> या तहसील कल्याण अधिकारी के कार्यालय से फॉर्म और ताज़ा प्रक्रिया पूछें। मुख्यमंत्री की समीक्षा बैठक की खबर के अनुसार कल्याण योजनाओं के ऑनलाइन आवेदन <strong>e-Kalyan पोर्टल</strong> पर भी लिए जाते हैं।",
        "कागज़ लगाकर आवेदन जमा करें और रसीद/आवेदन नंबर रखें।",
        "मंज़ूरी के बाद हर महीने ₹3,000 बैंक खाते में आते हैं।",
      ],
      callout: { kind: "info", html: "योजना पहले स्वास्थ्य विभाग (HPSBYS) के पास थी, इसलिए पुराने लाभार्थियों का रिकॉर्ड sahara.hpsbys.in पर है। विभाग बदलने के बाद नया आवेदन कहां होगा, यह अपने ज़िला कल्याण कार्यालय से ज़रूर पुष्टि करें।" },
    },
    {
      id: "paisa-ruka",
      title: "पैसा कई महीने से नहीं आया तो",
      list: [
        "खबरों में कई ज़िलों में बजट न मिलने से महीनों की देरी बताई गई है। ऐसे में बकाया राशि बाद में एक साथ आ सकती है।",
        "बैंक में जांचें कि खाता चालू है और आधार से जुड़ा है।",
        "जीवन प्रमाण पत्र समय पर जमा किया है या नहीं, यह देखें।",
        "ज़िला कल्याण अधिकारी के कार्यालय में लाभार्थी आईडी/आवेदन नंबर के साथ लिखित शिकायत दें।",
      ],
    },
  ],
  official: [
    { href: "https://sahara.hpsbys.in/", title: "सहारा योजना पोर्टल (HPSBYS)", note: "योजना की जानकारी और पुराने लाभार्थी" },
  ],
  faq: [
    { q: "सहारा योजना में कितने पैसे मिलते हैं?", a: "पात्र मरीज़ को ₹3,000 प्रति माह, सीधे बैंक खाते में।" },
    { q: "किन बीमारियों में सहारा योजना मिलती है?", a: "घातक कैंसर, लकवा, पार्किंसन, मस्कुलर डिस्ट्रॉफी, हीमोफीलिया, थैलेसीमिया, किडनी फेल जैसी गंभीर बीमारियों में। पूरी सूची विभाग से पूछें।" },
    { q: "आवेदन कहां करें?", a: "खबरों के अनुसार योजना अब सामाजिक न्याय एवं अधिकारिता विभाग के पास है। अपने ज़िला या तहसील कल्याण अधिकारी के कार्यालय में संपर्क करें; ऑनलाइन आवेदन e-Kalyan पोर्टल पर भी हो सकता है।" },
    { q: "क्या हिमकेयर कार्ड वाले भी सहारा ले सकते हैं?", a: "हिमकेयर अस्पताल में भर्ती के इलाज का खर्च देता है, जबकि सहारा हर महीने गुज़ारे की सहायता है। दोनों अलग योजनाएं हैं; अपनी पात्रता कल्याण कार्यालय से पुष्टि करें।" },
  ],
  related: [
    { href: "/service/hp-himcare-scheme.html", emoji: "🏥", title: "हिमकेयर योजना", text: "₹5 लाख कैशलेस इलाज" },
    { href: "/service/ayushman-bharat.html", emoji: "🩺", title: "आयुष्मान भारत", text: "PM-JAY कार्ड" },
    { href: "/states/himachal-pradesh-senior-citizen-card.html", emoji: "🧓", title: "हिमाचल वरिष्ठ नागरिक", text: "बुढ़ापा पेंशन और कार्ड" },
    { href: "/service/hp-income-certificate.html", emoji: "📄", title: "हिमाचल आय प्रमाण पत्र", text: "आय का प्रमाण" },
  ],
  aside: [
    { href: "https://sahara.hpsbys.in/", label: "🤝 सहारा पोर्टल" },
    { href: "/states/himachal-pradesh.html", label: "📍 हिमाचल की सभी सेवाएं" },
  ],
};
