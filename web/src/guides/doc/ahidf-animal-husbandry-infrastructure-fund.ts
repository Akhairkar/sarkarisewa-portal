import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 8 Nov 2026): PIB release of 6 Aug 2025 (PRID=2153134): interest
// subvention 3% for 8 years with a 2-year moratorium; term loans of up to 90% of the
// project cost from scheduled banks, NABARD, NCDC, NDDB or SIDBI; "no ceiling on the
// eligible term loan amount"; eligible beneficiaries individual entrepreneurs,
// private companies, FPOs, MSMEs, Section 8 companies, dairy cooperatives; eligible
// activities dairy and meat processing, animal feed plants, veterinary vaccine and
// drug manufacturing, breed improvement farms, animal waste-to-wealth, primary wool
// processing; 25% credit guarantee on MSME term loans via NABSanrakshan; 402
// projects / ₹14,413.88 crore project cost / ₹10,095.23 crore term loans; ₹4,575.25
// crore on 37 DIDF projects now subsumed. dahd.gov.in AHIDF page: confirms the same
// beneficiaries and that animal feed plants are included; points to a Revised SoP
// PDF for lenders. The AHIDF Udyamimitra portal exists (found by search) but its FAQ
// page could not be fetched, so NO application steps, documents, margin money or
// scheme end date are stated here.
export const ahidfAnimalHusbandryInfrastructureFund: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पशुपालन अवसंरचना विकास कोष (AHIDF)" },
  ],
  docHi: "पशुपालन अवसंरचना विकास कोष",
  promo: gstinPromo,
  title: "AHIDF 2026: डेयरी और पशु आहार यूनिट पर 3% ब्याज छूट",
  description: "AHIDF: डेयरी, मांस प्रसंस्करण, पशु आहार संयंत्र और नस्ल सुधार फ़ार्म के लिए 90% तक टर्म लोन, 3% ब्याज छूट, 25% क्रेडिट गारंटी, कौन पात्र है और कहां आवेदन करें।",
  published: "2026-11-08",
  modified: "2026-11-08",
  verified: "8 नवंबर 2026",
  h1: "पशुपालन अवसंरचना विकास कोष (AHIDF) 2026: 3% ब्याज छूट, पात्रता और कौन सी यूनिट पर लोन",
  lead: "पशुपालन अवसंरचना विकास कोष (AHIDF) केंद्र सरकार के पशुपालन और डेयरी विभाग की योजना है, जो डेयरी, मांस प्रसंस्करण, पशु आहार और नस्ल सुधार जैसी यूनिट लगाने के लिए बैंक से मिलने वाले टर्म लोन पर 3% सालाना ब्याज छूट देती है। यह गाइड PIB और पशुपालन विभाग के आधिकारिक पेज की जानकारी पर है। आवेदन की प्रक्रिया की पूरी जानकारी हमें आधिकारिक स्रोत से नहीं मिली, इसलिए उसे अलग से साफ़ बताया है।",
  facts: [
    ["ब्याज छूट", "3% सालाना, 8 साल तक (2 साल की मोहलत सहित)"],
    ["टर्म लोन", "परियोजना लागत का 90% तक, राशि की कोई ऊपरी सीमा नहीं"],
    ["क्रेडिट गारंटी", "MSME परियोजनाओं के टर्म लोन पर 25%"],
    ["कौन पात्र", "व्यक्तिगत उद्यमी, निजी कंपनी, FPO, MSME, सेक्शन-8 कंपनी, डेयरी सहकारी समिति"],
  ],
  notice: "<strong>ध्यान रखें:</strong> हमें योजना की मौजूदा अवधि, आवेदन के कदम, ज़रूरी दस्तावेज़ और आपका अपना हिस्सा आधिकारिक स्रोत से नहीं मिले। आवेदन से पहले AHIDF पोर्टल और बैंक से ये बातें पक्की करें।",
  sections: [
    {
      id: "fayde",
      title: "AHIDF में क्या मिलता है",
      table: {
        head: ["बात", "जानकारी (PIB, 6 अगस्त 2025)"],
        rows: [
          ["ब्याज छूट", "3% सालाना, 8 साल तक, 2 साल की मोहलत के साथ"],
          ["टर्म लोन", "परियोजना लागत का 90% तक; \"योजना में पात्र टर्म लोन की कोई सीमा नहीं है\""],
          ["कौन लोन देता है", "अनुसूचित बैंक, NABARD, NCDC, NDDB, SIDBI"],
          ["क्रेडिट गारंटी", "MSME परियोजनाओं के टर्म लोन पर 25%, NABSanrakshan (NABARD की सहायक कंपनी) के ज़रिए"],
        ],
      },
    },
    {
      id: "patra",
      title: "कौन पात्र है",
      list: [
        "व्यक्तिगत उद्यमी (individual entrepreneurs)",
        "निजी कंपनियां और सेक्शन-8 कंपनियां",
        "किसान उत्पादक संगठन (FPO)",
        "सूक्ष्म, लघु और मध्यम उद्यम (MSME)",
        "डेयरी सहकारी समितियां",
      ],
      callout: { kind: "info", html: "यह सूची PIB की है। हर श्रेणी की ज़्यादा विस्तृत शर्तें बैंक और योजना की लेंडर SoP में होती हैं, जो पशुपालन विभाग के पेज पर PDF के रूप में दी गई है।" },
    },
    {
      id: "gatividhi",
      title: "किन गतिविधियों के लिए लोन मिलता है",
      list: [
        "डेयरी प्रसंस्करण और वैल्यू एडिशन का ढांचा",
        "मांस प्रसंस्करण और वैल्यू एडिशन का ढांचा",
        "पशु आहार (चारा) संयंत्र",
        "पशु चिकित्सा के टीके और दवाएं बनाने की इकाइयां",
        "तकनीक की मदद से नस्ल सुधार फ़ार्म: गाय, भैंस, भेड़, बकरी, सूअर और मुर्गी",
        "पशु अपशिष्ट से संपदा (waste-to-wealth) इकाइयां",
        "प्राथमिक ऊन प्रसंस्करण ढांचा",
      ],
    },
    {
      id: "star-dikhta",
      title: "अब तक कितना काम हुआ",
      intro: "PIB की 6 अगस्त 2025 की जानकारी के अनुसार:",
      list: [
        "<strong>402 परियोजनाएं</strong> मंज़ूर हुई हैं, जिनकी कुल परियोजना लागत ₹14,413.88 करोड़ और टर्म लोन ₹10,095.23 करोड़ है।",
        "डेयरी इंफ्रास्ट्रक्चर डेवलपमेंट फंड की 37 परियोजनाएं भी इसमें शामिल की गई हैं (लागत ₹6,776.80 करोड़, टर्म लोन ₹4,575.25 करोड़)।",
        "अनुमान है कि इससे 43,372 लोगों को रोज़गार और लगभग 25 लाख किसानों को फ़ायदा होगा।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन कहां से करें",
      intro: "इस योजना का आधिकारिक आवेदन पोर्टल AHIDF का Udyami Mitra पोर्टल है। आवेदन के कदम, दस्तावेज़ों की सूची और आपका अपना हिस्सा हमें आधिकारिक पेज से नहीं मिल सके, इसलिए हम इनका अंदाज़ा नहीं लगा रहे।",
      list: [
        "पोर्टल पर जाकर खुद रजिस्टर करें और वहीं दी गई जानकारी और FAQ पढ़ें।",
        "पशुपालन और डेयरी विभाग के AHIDF पेज पर बैंकों के लिए संशोधित SoP (मानक प्रक्रिया) का PDF उपलब्ध है।",
        "बैंक से पूछें कि आपकी परियोजना के लिए कितना अपना पैसा लगेगा और कौन से कागज़ चाहिए।",
        "योजना के नाम पर किसी एजेंट को पैसे न दें; आवेदन आधिकारिक पोर्टल या बैंक से ही करें।",
      ],
    },
  ],
  official: [
    { href: "https://ahidf.udyamimitra.in/", title: "AHIDF Udyami Mitra पोर्टल (आवेदन)" },
    { href: "https://dahd.gov.in/schemes/programmes/ahidf", title: "पशुपालन और डेयरी विभाग: AHIDF पेज" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2153134", title: "PIB: AHIDF (6 अगस्त 2025)" },
  ],
  faq: [
    { q: "AHIDF में कितना लोन मिलता है?", a: "परियोजना लागत का 90% तक टर्म लोन। PIB के अनुसार पात्र टर्म लोन की कोई ऊपरी सीमा नहीं है।" },
    { q: "ब्याज छूट कितनी मिलती है?", a: "3% सालाना, 8 साल तक, जिसमें 2 साल की मोहलत शामिल है।" },
    { q: "क्या AHIDF में सब्सिडी मिलती है?", a: "योजना का फ़ायदा ब्याज छूट और MSME परियोजनाओं के लिए क्रेडिट गारंटी है। PIB की जानकारी में पूंजी सब्सिडी का ज़िक्र नहीं है।" },
    { q: "क्या कोई व्यक्ति डेयरी या चारा यूनिट के लिए आवेदन कर सकता है?", a: "हां, व्यक्तिगत उद्यमी पात्र श्रेणियों में हैं। डेयरी प्रसंस्करण और पशु आहार संयंत्र पात्र गतिविधियां हैं।" },
    { q: "क्या सिर्फ़ गाय-भैंस पालने के लिए लोन मिलेगा?", a: "PIB की सूची में प्रसंस्करण, पशु आहार, दवा-टीका, नस्ल सुधार फ़ार्म, अपशिष्ट से संपदा और ऊन प्रसंस्करण की इकाइयां हैं। सामान्य पशुपालन के लिए अलग योजनाएं (जैसे किसान क्रेडिट कार्ड) देखें।" },
    { q: "आवेदन कहां करें?", a: "AHIDF के Udyami Mitra पोर्टल पर। आवेदन के कदम और दस्तावेज़ पोर्टल और बैंक से पक्के करें।" },
  ],
  related: [
    { href: "/service/kisan-credit-card.html", emoji: "🐄", title: "किसान क्रेडिट कार्ड", text: "पशुपालन के लिए भी उपलब्ध" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🛡️", title: "CGTMSE लोन गारंटी", text: "बिना जमानत लोन का कवर" },
    { href: "/service/udyam-registration.html", emoji: "📝", title: "उद्यम रजिस्ट्रेशन", text: "MSME पंजीकरण" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "छोटे कारोबार का लोन" },
  ],
  aside: [
    { href: "https://ahidf.udyamimitra.in/", label: "🐄 AHIDF पोर्टल" },
    { href: "https://dahd.gov.in/schemes/programmes/ahidf", label: "📄 विभाग का पेज" },
  ],
};
