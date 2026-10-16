import type { DocGuide } from "./types";

// Sources (checked 15-16 Oct 2026; kmut.tn.gov.in and tn.gov.in not reachable
// from the sandbox, search-result extracts used): The News Minute (scheme
// expanded to about 13 lakh more women), Angel One news (Feb 2026: Rs 5,000
// credited to 1.31 crore women = Rs 1,000 x 3 months + Rs 2,000 special
// assistance), IMPRI policy note on the 2023 scheme (one woman head per ration
// card; family income, land and electricity-use limits), news reports from
// May-Sep 2026 that the new state government continues the Rs 1,000 monthly
// payment while a promised increase is "being restructured". The increased
// amount was not notified by a G.O. we could find, so it is not stated as fact.
export const tnMagalirUrimaiThogai: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "तमिलनाडु", href: "/states/tamil-nadu.html" },
    { label: "मगलिर उरिमई थोगई" },
  ],
  docHi: "कलैगनार मगलिर उरिमई थोगई",
  title: "कलैगनार मगलिर उरिमई थोगई थिट्टम",
  description: "तमिलनाडु की पात्र परिवारों की महिला मुखिया को ₹1,000 प्रतिमाह की आर्थिक सहायता, ताकि पारिवारिक आर्थिक स्वतंत्रता को बढ़ावा मिले।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "तमिलनाडु कलैगनार मगलिर उरिमई थोगई: महिला मुखिया को ₹1,000 महीना, पात्रता और स्टेटस",
  lead: "कलैगनार मगलिर उरिमई थोगई (Kalaignar Magalir Urimai Thogai) तमिलनाडु सरकार की योजना है, जिसमें पात्र परिवार की महिला मुखिया के बैंक खाते में <strong>₹1,000 हर महीने</strong> भेजे जाते हैं। यह सितंबर 2023 से चल रही है। 2026 के चुनाव के बाद बनी नई राज्य सरकार ने समाचार रिपोर्टों के अनुसार योजना जारी रखी है; राशि बढ़ाने का वादा अभी लागू नहीं हुआ है।",
  facts: [
    ["राज्य", "तमिलनाडु"],
    ["राशि", "₹1,000 प्रति माह (DBT से बैंक खाते में)"],
    ["किसे", "राशन कार्ड वाले पात्र परिवार की एक महिला मुखिया"],
    ["पोर्टल", "kmut.tn.gov.in"],
  ],
  notice: "राशि बढ़ाने (₹2,000 या ₹2,500) की खबरें चल रही हैं, पर 15 अक्टूबर 2026 तक इसका कोई सरकारी आदेश हमें नहीं मिला। नई राशि सरकारी घोषणा के बाद ही मानें।",
  sections: [
    {
      id: "kya-milta",
      title: "योजना में क्या मिलता है",
      list: [
        "<strong>₹1,000 हर महीने</strong> सीधे महिला के बैंक खाते में।",
        "<strong>फरवरी 2026:</strong> तत्कालीन सरकार ने फरवरी, मार्च और अप्रैल की तीन किस्तें (₹3,000) और ₹2,000 की विशेष सहायता, कुल ₹5,000, लगभग 1.31 करोड़ महिलाओं के खाते में एक साथ भेजे थे।",
        "<strong>2026 के बाद:</strong> नई सरकार ने मासिक किस्त समय पर जारी करने को कहा है। योजना का नाम या राशि बदलने पर हम यह पेज अपडेट करेंगे।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है (2023 के दिशानिर्देश)",
      list: [
        "परिवार के पास तमिलनाडु का राशन कार्ड हो; हर राशन कार्ड पर <strong>एक महिला मुखिया</strong> को लाभ",
        "महिला की उम्र कम से कम 21 वर्ष",
        "परिवार की सालाना आय ₹2.5 लाख से कम",
        "ज़मीन तय सीमा से कम (गीली ज़मीन 5 एकड़ / सूखी ज़मीन 10 एकड़)",
        "घर की बिजली खपत तय सीमा से कम (3,600 यूनिट सालाना)",
      ],
      callout: { kind: "warn", html: "सरकारी कर्मचारी/पेंशनभोगी, आयकर देने वाले परिवार और कुछ दूसरी श्रेणियां बाहर हैं। पूरी सूची के लिए राशन दुकान या तालुक कार्यालय से पूछें।" },
    },
    {
      id: "avedan",
      title: "आवेदन और अपील",
      steps: [
        "<strong>नया आवेदन:</strong> आवेदन राशन दुकान क्षेत्र के विशेष शिविरों में लिए जाते रहे हैं। अभी नए आवेदन खुले हैं या नहीं, यह राशन दुकान/तालुक कार्यालय से पूछें।",
        "<strong>कागज़:</strong> राशन कार्ड (स्मार्ट कार्ड), आधार, आधार से जुड़ा बैंक खाता और बिजली कनेक्शन नंबर साथ रखें।",
        "<strong>मना हो गया तो:</strong> SMS में कारण आता है। गलत कारण लगे तो RDO (राजस्व मंडल अधिकारी) के पास अपील की व्यवस्था रही है; kmut.tn.gov.in पर ताज़ा प्रक्रिया देखें।",
        "<strong>स्टेटस:</strong> kmut.tn.gov.in पर आवेदन/आधार की जानकारी से स्टेटस देखें।",
      ],
      callout: { kind: "ok", html: "पैसा न आए तो पहले बैंक में देखें कि खाता आधार से जुड़ा (NPCI mapped) और चालू है या नहीं।" },
    },
  ],
  official: [
    { href: "https://kmut.tn.gov.in/", title: "Kalaignar Magalir Urimai Thogai पोर्टल" },
    { href: "https://www.tn.gov.in/", title: "तमिलनाडु सरकार का पोर्टल" },
  ],
  faq: [
    { q: "मगलिर उरिमई थोगई में कितने पैसे मिलते हैं?", a: "₹1,000 हर महीने। राशि बढ़ाने का वादा हुआ है, पर 15 अक्टूबर 2026 तक इसका सरकारी आदेश हमें नहीं मिला।" },
    { q: "क्या नई सरकार में योजना बंद हो गई?", a: "नहीं। समाचार रिपोर्टों के अनुसार मई 2026 के बाद भी ₹1,000 की मासिक किस्त जारी है।" },
    { q: "एक परिवार में कितनी महिलाओं को पैसा मिलता है?", a: "हर राशन कार्ड पर एक महिला मुखिया को।" },
    { q: "पैसा रुक गया है, क्या करें?", a: "बैंक खाता आधार से जुड़ा है या नहीं देखें, kmut.tn.gov.in पर स्टेटस जांचें और ज़रूरत हो तो तालुक कार्यालय में पूछें।" },
  ],
  related: [
    { href: "/service/tn-ration-card.html", emoji: "🍚", title: "राशन कार्ड (तमिलनाडु)", text: "योजना के लिए ज़रूरी" },
    { href: "/service/tn-income-certificate.html", emoji: "💰", title: "आय प्रमाणपत्र (तमिलनाडु)", text: "आय का प्रमाण" },
    { href: "/service/tn-community-certificate.html", emoji: "🪪", title: "समुदाय प्रमाणपत्र", text: "तमिलनाडु का जाति प्रमाणपत्र" },
    { href: "/states/tamil-nadu.html", emoji: "🛕", title: "तमिलनाडु की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://kmut.tn.gov.in/", label: "🌐 KMUT पोर्टल" },
    { href: "/states/tamil-nadu.html", label: "🛕 तमिलनाडु की सेवाएं" },
  ],
};
