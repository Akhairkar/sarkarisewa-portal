import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; goa.gov.in / wcd pages not reachable from the
// sandbox, search-result extracts used): en.vikaspedia.in (Welfare schemes of
// Goa: Griha Aadhar, Directorate of Women and Child Development; married
// women/widows/divorced women, 18+, resident of Goa 15 years or permanent
// resident, husband+wife gross income up to ₹3,00,000 a year, 2019 exclusion
// of government employees and wives of regular government employees, DSSS
// overlap); publicservicesmap.in (GAS: ₹1,500 per month, DBT; online via
// goaonline.gov.in); Herald Goa (2025: 21,000+ women missed 30 April 2025
// deadline for Aadhaar linking of bank account, ₹1,500 monthly aid suspended
// until linking; CM: about 1.8 lakh beneficiaries); The Goan (₹1.60 crore
// recovered from 304 ineligible beneficiaries, 3,000+ government-employee
// cases). A ₹2,500 figure seen on a private site was a 2021 election promise
// and is not supported by any government source found; not used.
export const goaGrihaAadharScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "गोवा", href: "/states/goa.html" },
    { label: "गृह आधार योजना" },
  ],
  docHi: "गृह आधार योजना",
  title: "Griha Aadhar Scheme",
  description: "गोवा की गृह आधार योजना: गृहिणियों को हर महीने आर्थिक सहायता। कौन पात्र है, आय सीमा, ज़रूरी कागज़, आवेदन कहां करें और बैंक खाते का आधार से जुड़ा होना क्यों ज़रूरी है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "गोवा गृह आधार योजना (Griha Aadhar): गृहिणियों को मासिक सहायता, पात्रता और आवेदन",
  lead: "गृह आधार गोवा सरकार के महिला एवं बाल विकास निदेशालय (Directorate of Women and Child Development) की योजना है। इसमें गोवा की गृहिणियों को हर महीने आर्थिक सहायता सीधे बैंक खाते में दी जाती है; 2025 की खबरों के अनुसार यह राशि ₹1,500 प्रति माह है। पति-पत्नी की कुल सालाना आय ₹3 लाख तक होनी चाहिए और सरकारी कर्मचारी या सरकारी कर्मचारी की पत्नी इसके पात्र नहीं हैं।",
  facts: [
    ["विभाग", "महिला एवं बाल विकास निदेशालय, गोवा सरकार"],
    ["सहायता", "₹1,500 प्रति माह (2025 की रिपोर्ट के अनुसार), DBT से बैंक खाते में"],
    ["आय सीमा", "पति-पत्नी की कुल आय ₹3,00,000 सालाना तक"],
    ["आवेदन", '<a href="https://goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a> या निदेशालय/ब्लॉक कार्यालय'],
  ],
  notice: "राशि सरकार बदल सकती है। कुछ निजी वेबसाइटों पर ₹2,500 लिखा है, पर हमें इसका कोई सरकारी आदेश नहीं मिला। आवेदन के समय महिला एवं बाल विकास कार्यालय से पुष्टि करें।",
  sections: [
    {
      id: "patrata",
      title: "कौन आवेदन कर सकती है",
      list: [
        "आवेदक <strong>महिला</strong> हो: विवाहित गृहिणी; विधवा और तलाकशुदा महिलाएं भी (कुछ शर्तों के साथ)।",
        "उम्र <strong>18 साल से ज़्यादा</strong>।",
        "गोवा में <strong>कम से कम 15 साल से निवास</strong>, या गोवा की स्थायी निवासी।",
        "पति और पत्नी की <strong>कुल सालाना आय ₹3,00,000 से ज़्यादा न हो</strong>।",
        "महिला खुद <strong>सरकारी नौकरी</strong> में हो या पति नियमित सरकारी कर्मचारी हो तो पात्र नहीं (2019 का नियम)।",
        "दयानंद सामाजिक सुरक्षा योजना (DSSS) की लाभार्थी आमतौर पर पात्र नहीं; कुछ विधवाओं को छूट है।",
      ],
      callout: { kind: "warn", html: "अपात्र होते हुए पैसा लेने पर सरकार वसूली करती है। खबरों के अनुसार 304 लाभार्थियों से ₹1.60 करोड़ वापस लिए गए, और हज़ारों ऐसे मामले मिले जहां महिला या उसका पति सरकारी कर्मचारी था। हालात बदलें (नौकरी लगे, आय बढ़े) तो विभाग को बताएं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड",
        "निवास प्रमाण (15 साल का निवास या स्थायी निवास दिखाने वाला कागज़)",
        "आय प्रमाण पत्र (पति-पत्नी की आय)",
        "विवाह प्रमाण पत्र / विधवा होने पर पति का मृत्यु प्रमाण पत्र / तलाक का कागज़",
        "बैंक पासबुक (खाता आधार से जुड़ा हो)",
        "राशन कार्ड, पासपोर्ट साइज़ फोटो, मोबाइल नंबर",
      ],
      html: "<p>कागज़ों की सूची विभाग बदल सकता है। आवेदन से पहले पोर्टल पर या कार्यालय में ताज़ा सूची देख लें।</p>",
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://goaonline.gov.in/" target="_blank" rel="noopener nofollow">goaonline.gov.in</a> पर अपना खाता बनाकर लॉगिन करें और विभागों की सूची में <strong>Women and Child Development</strong> के तहत Griha Aadhar सेवा खोजें।',
        "फॉर्म भरें, कागज़ अपलोड करें और सबमिट करें। रसीद/आवेदन नंबर संभालकर रखें।",
        "ऑनलाइन न कर सकें तो नज़दीकी <strong>CSC</strong> या महिला एवं बाल विकास निदेशालय के कार्यालय से फॉर्म भरवाएं।",
        "जांच के बाद मंज़ूरी मिलने पर सहायता हर महीने बैंक खाते में आती है।",
      ],
    },
    {
      id: "paisa-ruka",
      title: "पैसा रुक गया हो तो",
      list: [
        "<strong>बैंक खाता आधार से जुड़ा है या नहीं</strong>, बैंक में जांचें। 2025 में 21,000 से ज़्यादा महिलाओं की सहायता इसी कारण रुकी थी; खाता आधार से जोड़ने के बाद ही भुगतान दोबारा शुरू होता है।",
        "बैंक खाता बंद/निष्क्रिय तो नहीं हुआ, यह देखें। खाता बदला हो तो नई पासबुक के साथ विभाग को सूचना दें।",
        "पात्रता से जुड़ी जांच (सरकारी नौकरी, आय) में नाम आया हो तो विभाग के कार्यालय में जाकर कारण पूछें।",
      ],
    },
  ],
  official: [
    { href: "https://goaonline.gov.in/", title: "Goa Online (आवेदन पोर्टल)", note: "Women and Child Development की सेवाएं" },
  ],
  faq: [
    { q: "गृह आधार में हर महीने कितना पैसा मिलता है?", a: "2025 की खबरों के अनुसार ₹1,500 प्रति माह, जो सीधे बैंक खाते में आता है। राशि सरकार बदल सकती है, इसलिए विभाग से ताज़ा राशि पूछ लें। ₹2,500 का कोई सरकारी आदेश हमें नहीं मिला।" },
    { q: "आय सीमा कितनी है?", a: "पति और पत्नी की कुल सालाना आय ₹3,00,000 से ज़्यादा नहीं होनी चाहिए।" },
    { q: "क्या सरकारी कर्मचारी की पत्नी आवेदन कर सकती है?", a: "नहीं। 2019 से सरकारी नौकरी वाली महिलाएं और नियमित सरकारी कर्मचारी की पत्नियां इस योजना से बाहर हैं।" },
    { q: "मेरी सहायता अचानक बंद हो गई, क्या करूं?", a: "सबसे पहले बैंक में देखें कि खाता आधार से जुड़ा और चालू है। फिर महिला एवं बाल विकास कार्यालय में आवेदन नंबर के साथ कारण पूछें।" },
    { q: "क्या DSSS पेंशन के साथ गृह आधार मिल सकता है?", a: "आमतौर पर नहीं, क्योंकि दयानंद सामाजिक सुरक्षा योजना के लाभार्थी बाहर रखे गए हैं; कुछ विधवाओं के लिए छूट है। अपने मामले की पुष्टि विभाग से करें।" },
  ],
  related: [
    { href: "/service/goa-dayanand-social-security-scheme--dsss-.html", emoji: "🧓", title: "दयानंद सामाजिक सुरक्षा योजना", text: "गोवा की पेंशन योजना" },
    { href: "/service/goa-deen-dayal-swasthya-seva-yojana--ddssy-.html", emoji: "🏥", title: "दीन दयाल स्वास्थ्य सेवा योजना", text: "गोवा की स्वास्थ्य बीमा योजना" },
    { href: "/states/goa-income-certificate.html", emoji: "📄", title: "गोवा आय प्रमाण पत्र", text: "आय का प्रमाण कैसे बनवाएं" },
    { href: "/states/goa-ration-card.html", emoji: "🍚", title: "गोवा राशन कार्ड", text: "नया कार्ड और सुधार" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://goaonline.gov.in/", label: "🏠 Goa Online खोलें" },
    { href: "/states/goa.html", label: "📍 गोवा की सभी सेवाएं" },
  ],
};
