import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; tn.gov.in / tnesevai.tn.gov.in not reachable
// from the sandbox, search-result extracts used): kygcms.tn.gov.in G.O.
// adtw_e_104_2023 (Adi Dravidar & Tribal Welfare: SC community certificate
// issued by Tahsildar under G.O.(Ms) No.1888 Revenue dt 10.11.1983; ST
// certificate by Revenue Divisional Officer / Sub-Collector under G.O.(Ms)
// No.47 dt 14.08.2001), services.india.gov.in listing for the TN community
// certificate form, TN e-Sevai helpdesk 1800-425-1333 /
// tnesevaihelpdesk@tn.gov.in (from portal extracts). Fee and processing time
// were not confirmed from an official page, so they are left general.
export const tnCommunityCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "तमिलनाडु", href: "/states/tamil-nadu.html" },
    { label: "समुदाय प्रमाणपत्र" },
  ],
  docHi: "समुदाय प्रमाणपत्र (तमिलनाडु)",
  title: "समुदाय प्रमाणपत्र (तमिलनाडु)",
  description: "तमिलनाडु में जाति प्रमाणपत्र के समान — समुदाय श्रेणी का आधिकारिक प्रमाण, आरक्षित श्रेणी प्रवेश, नौकरी और योजना लाभ के लिए ज़रूरी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "तमिलनाडु समुदाय प्रमाणपत्र (Community Certificate): कौन जारी करता है, कैसे बनवाएं",
  lead: "तमिलनाडु में जाति प्रमाण पत्र को <strong>समुदाय प्रमाणपत्र (Community Certificate)</strong> कहा जाता है। यह SC, ST, BC, MBC और DNC श्रेणी के लोगों को राजस्व विभाग के अधिकारी जारी करते हैं: SC के लिए तहसीलदार और ST के लिए राजस्व मंडल अधिकारी (RDO)। आवेदन e-Sevai केंद्र पर या TN e-Sevai पोर्टल पर अपने लॉगिन से किया जा सकता है।",
  facts: [
    ["राज्य", "तमिलनाडु"],
    ["SC प्रमाणपत्र", "तहसीलदार"],
    ["ST प्रमाणपत्र", "राजस्व मंडल अधिकारी (RDO) / सब-कलेक्टर"],
    ["आवेदन", "e-Sevai केंद्र या TN e-Sevai पोर्टल"],
  ],
  sections: [
    {
      id: "kaun-jari",
      title: "कौन सा अधिकारी प्रमाणपत्र देता है",
      table: {
        head: ["श्रेणी", "जारी करने वाला अधिकारी"],
        rows: [
          ["अनुसूचित जाति (SC)", "तहसीलदार (G.O.(Ms) No. 1888, राजस्व, 10.11.1983)"],
          ["अनुसूचित जनजाति (ST)", "राजस्व मंडल अधिकारी (RDO), सब-कलेक्टर या सहायक कलेक्टर (G.O.(Ms) No. 47, 14.08.2001)"],
          ["BC / MBC / DNC", "तालुक स्तर के राजस्व अधिकारी (डिप्टी तहसीलदार/तहसीलदार)"],
        ],
      },
      callout: { kind: "info", html: "SC/ST अधिकारियों की यह सूची तमिलनाडु के आदि द्रविड़ एवं जनजाति कल्याण विभाग के 2023 के सरकारी आदेश में दी गई है।" },
    },
    {
      id: "kab-chahiye",
      title: "समुदाय प्रमाणपत्र कब काम आता है",
      list: [
        "स्कूल-कॉलेज और प्रोफेशनल कोर्स में आरक्षित सीट पर दाखिला",
        "राज्य सरकार की नौकरियों में आरक्षण (TNPSC आदि)",
        "छात्रवृत्ति, फीस छूट और कल्याण योजनाएं",
        "केंद्र सरकार की नौकरी/संस्थान के लिए अक्सर केंद्र के फॉर्मेट में अलग प्रमाण पत्र मांगा जाता है, जैसे OBC (Non-Creamy Layer); भर्ती की अधिसूचना में फॉर्मेट देखें",
      ],
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "आधार कार्ड और राशन कार्ड (स्मार्ट कार्ड) या दूसरा पते का प्रमाण",
        "पिता/माता या करीबी रिश्तेदार का समुदाय प्रमाणपत्र (हो तो)",
        "स्कूल का ट्रांसफर सर्टिफिकेट जिसमें समुदाय लिखा हो (हो तो)",
        "तय फॉर्मेट में स्व-घोषणा पत्र और पासपोर्ट साइज़ फोटो",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>e-Sevai केंद्र जाएं</strong> या TN e-Sevai पोर्टल पर अपना नागरिक लॉगिन बनाएं (मोबाइल OTP से)।",
        "<strong>Revenue Department</strong> की सेवाओं में Community Certificate चुनें।",
        "नाम, माता-पिता का नाम, पता और समुदाय भरें; कागज़ अपलोड करें।",
        "<strong>शुल्क भरें:</strong> भुगतान पेज पर कुल राशि दिखती है; केंद्र पर रसीद ज़रूर लें।",
        "<strong>जांच:</strong> ग्राम प्रशासनिक अधिकारी (VAO) और राजस्व निरीक्षक की रिपोर्ट के बाद अधिकारी प्रमाणपत्र मंज़ूर करते हैं।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद आवेदन संख्या से प्रमाणपत्र पोर्टल/e-Sevai केंद्र से निकलवाएं।",
      ],
      callout: { kind: "warn", html: "फीस और समय-सीमा की आधिकारिक पुष्टि हमें नहीं मिली। e-Sevai केंद्र पर सिर्फ रसीद में लिखी राशि दें; दलालों को अतिरिक्त पैसे न दें।" },
    },
    {
      id: "dhyan",
      title: "ध्यान रखने की बातें",
      list: [
        "<strong>स्थायी प्रमाणपत्र:</strong> तमिलनाडु में समुदाय प्रमाणपत्र एक बार बनने पर आम तौर पर बार-बार नहीं बनवाना पड़ता, पर कुछ संस्थान ताज़ा प्रमाणपत्र मांग सकते हैं।",
        "<strong>नाम का मिलान:</strong> आधार, स्कूल रिकॉर्ड और प्रमाणपत्र में नाम-पिता का नाम एक जैसा रखें।",
        "<strong>आवेदन अटका है:</strong> तालुक कार्यालय में आवेदन संख्या के साथ पूछताछ करें या e-Sevai हेल्पडेस्क से संपर्क करें।",
        "<strong>दूसरे राज्य से आए परिवार:</strong> तमिलनाडु की सूची में समुदाय हो तभी प्रमाणपत्र बनता है; तालुक कार्यालय से पहले पूछ लें।",
      ],
    },
  ],
  official: [
    { href: "https://www.tnesevai.tn.gov.in/", title: "TN e-Sevai पोर्टल", note: "हेल्पडेस्क 1800-425-1333" },
    { href: "https://www.tn.gov.in/", title: "तमिलनाडु सरकार का पोर्टल" },
  ],
  faq: [
    { q: "तमिलनाडु में SC समुदाय प्रमाणपत्र कौन देता है?", a: "तहसीलदार। यह व्यवस्था G.O.(Ms) No. 1888 (राजस्व, 10.11.1983) से है।" },
    { q: "ST समुदाय प्रमाणपत्र कौन देता है?", a: "राजस्व मंडल अधिकारी (RDO), सब-कलेक्टर या सहायक कलेक्टर, G.O.(Ms) No. 47 (14.08.2001) के अनुसार।" },
    { q: "क्या ऑनलाइन आवेदन हो सकता है?", a: "हां, TN e-Sevai पोर्टल पर नागरिक लॉगिन से या नज़दीकी e-Sevai केंद्र से आवेदन होता है।" },
    { q: "क्या यह प्रमाणपत्र केंद्र की नौकरी में चलता है?", a: "केंद्र सरकार की नौकरियों में अक्सर अलग फॉर्मेट (जैसे OBC-NCL) मांगा जाता है। भर्ती की अधिसूचना में दिया फॉर्मेट देखें।" },
  ],
  related: [
    { href: "/service/tn-income-certificate.html", emoji: "💰", title: "आय प्रमाणपत्र (तमिलनाडु)", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/service/tn-patta-chitta.html", emoji: "🗺️", title: "पट्टा एवं चिट्टा", text: "तमिलनाडु भूमि रिकॉर्ड" },
    { href: "/service/tn-magalir-urimai-thogai.html", emoji: "👩", title: "मगलिर उरिमई थोगई", text: "महिला मुखिया को मासिक सहायता" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "सभी राज्यों की जानकारी" },
    { href: "/states/tamil-nadu.html", emoji: "🛕", title: "तमिलनाडु की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://www.tnesevai.tn.gov.in/", label: "🌐 TN e-Sevai पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
