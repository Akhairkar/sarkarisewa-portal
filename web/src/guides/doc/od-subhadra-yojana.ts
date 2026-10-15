import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; subhadra.odisha.gov.in returns 403 to the
// sandbox): myScheme (slug "subhadra": Women and Child Development Department,
// Odisha; ₹50,000 over 5 years, ₹10,000 a year from 2024-25 to 2028-29;
// SUBHADRA ATM-cum-debit card; extra ₹500 for top 100 women by digital
// transactions in each GP/ULB; eligibility: Odisha resident, NFSA/SFSS card or
// family income up to ₹2.5 lakh, age 21 to under 60; exclusions: income-tax
// payers, govt/PSU regular or contractual employees and pensioners (honorarium
// workers like ASHA/AWW allowed), current/former MP/MLA, elected
// representatives except ward members, ₹1,500+/month or ₹18,000+/year from
// other schemes, owners of 4-wheelers except tractors/light goods vehicles;
// forms at Anganwadi, block/ULB office, Mo Seba Kendra, CSC; face-auth e-KYC
// via SUBHADRA app; guideline/SOP/FAQ links on the portal). GKToday / Odisha
// Bytes (July 2026: >₹20,648 crore to >1 crore women in four instalments;
// ₹10,000 a year in two instalments of ₹5,000; fifth instalment planned for
// Rakhi Purnima, Aug 2026; new registration window from 1 April 2026 for one
// month via portal, CSC and Ama Seva Kendra). Helpline number not verified, so
// not given. Whether the Aug 2026 instalment was paid was not confirmed.
export const odSubhadraYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "ओडिशा", href: "/states/odisha.html" },
    { label: "सुभद्रा योजना" },
  ],
  docHi: "सुभद्रा योजना",
  title: "ସୁଭଦ୍ରା ଯୋଜନା (सुभद्रा योजना)",
  description: "ओडिशा की सुभद्रा योजना: पात्र महिलाओं को ₹10,000 प्रति वर्ष (5 वर्षों में ₹50,000) दो किस्तों में, SUBHADRA डेबिट कार्ड के साथ। पात्रता, आवेदन, e-KYC और स्टेटस।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "सुभद्रा योजना ओडिशा 2026: ₹10,000 सालाना, पात्रता, आवेदन, e-KYC और स्टेटस",
  lead: "सुभद्रा ओडिशा सरकार (महिला एवं बाल विकास विभाग) की योजना है, जिसमें 21 से 60 साल की पात्र महिलाओं को 2024-25 से 2028-29 तक हर साल ₹10,000, यानी कुल ₹50,000 मिलते हैं। पैसा साल में ₹5,000 की दो किस्तों में आधार से जुड़े बैंक खाते में आता है और साथ में SUBHADRA डेबिट कार्ड मिलता है। जुलाई 2026 तक एक करोड़ से ज़्यादा महिलाओं को चार किस्तें मिल चुकी थीं।",
  facts: [
    ["राज्य", "ओडिशा"],
    ["राशि", "₹10,000 प्रति वर्ष (दो किस्त × ₹5,000), 5 साल में ₹50,000"],
    ["उम्र", "21 से 60 साल से कम"],
    ["विभाग", "महिला एवं बाल विकास विभाग, ओडिशा"],
  ],
  sections: [
    {
      id: "labh",
      title: "क्या मिलता है",
      list: [
        "<strong>₹10,000 हर साल</strong>, 2024-25 से 2028-29 तक (कुल ₹50,000)। साल में ₹5,000 की दो किस्तें आती हैं; खबरों के अनुसार किस्तें आम तौर पर रक्षाबंधन (राखी पूर्णिमा) और अंतरराष्ट्रीय महिला दिवस के आसपास दी जाती हैं।",
        "<strong>SUBHADRA कार्ड:</strong> हर लाभार्थी को ATM-सह-डेबिट कार्ड।",
        "<strong>डिजिटल लेन-देन पर इनाम:</strong> हर ग्राम पंचायत/शहरी निकाय में साल में सबसे ज़्यादा डिजिटल लेन-देन करने वाली 100 महिलाओं को ₹500 अतिरिक्त।",
        "जो महिला योजना के बीच में 21 साल की होती है, उसे बचे हुए सालों का ही पैसा मिलता है।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है, कौन नहीं",
      list: [
        "ओडिशा की निवासी महिला, उम्र <strong>21 साल या ज़्यादा और 60 साल से कम</strong> (योग्यता तिथि पर)।",
        "परिवार <strong>NFSA या राज्य खाद्य सुरक्षा योजना (SFSS)</strong> के राशन कार्ड में हो; कार्ड न हो तो परिवार की आय <strong>₹2.5 लाख सालाना तक</strong> हो।",
        "<strong>अपात्र:</strong> आयकर दाता; केंद्र/राज्य सरकार, PSU या स्थानीय निकाय की नियमित या संविदा कर्मचारी और सरकारी पेंशनभोगी; वर्तमान या पूर्व सांसद/विधायक; पंचायत/नगर निकाय की निर्वाचित प्रतिनिधि (वार्ड सदस्य/पार्षद छोड़कर)।",
        "किसी दूसरी सरकारी योजना से ₹1,500 महीना या ₹18,000 साल या उससे ज़्यादा (जैसे पेंशन, छात्रवृत्ति) पाने वाली महिला अपात्र है।",
        "चार पहिया वाहन की मालिक अपात्र है; ट्रैक्टर, मिनी ट्रक और छोटे मालवाहक वाहन इसमें नहीं गिने जाते।",
        "ASHA, आंगनवाड़ी कार्यकर्ता जैसी मानदेय पाने वाली और आउटसोर्सिंग से लगी महिलाएं पात्र हो सकती हैं।",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      intro: "नया आवेदन हमेशा खुला नहीं रहता; सरकार समय-समय पर पंजीकरण की अवधि खोलती है। 2026 में 1 अप्रैल से एक महीने के लिए नया पंजीकरण खोला गया था। अगली अवधि की सूचना पोर्टल और स्थानीय कार्यालयों पर देखें।",
      steps: [
        "आवेदन फॉर्म आंगनवाड़ी केंद्र, ब्लॉक कार्यालय, शहरी निकाय कार्यालय, मो सेवा केंद्र या CSC से मुफ्त लें, या पंजीकरण खुला हो तो <a href=\"https://subhadra.odisha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">subhadra.odisha.gov.in</a> पर करें।",
        "सभी ज़रूरी खाने भरें, फोटो लगाएं और आधार, राशन कार्ड (या आय प्रमाण), बैंक खाते की कॉपी जैसे मांगे गए कागज़ लगाएं।",
        "भरा फॉर्म नज़दीकी मो सेवा केंद्र / CSC / अमा सेवा केंद्र पर जमा करें और पावती (रसीद) ज़रूर लें।",
        "<strong>e-KYC:</strong> SUBHADRA मोबाइल ऐप पर आधार नंबर डालकर चेहरे से (face authentication) e-KYC पूरा करें।",
      ],
      callout: { kind: "warn", html: "आवेदन मुफ्त है। बैंक खाता <strong>आधार से जुड़ा और DBT के लिए चालू</strong> होना चाहिए, वरना किस्त अटक सकती है।" },
    },
    {
      id: "status",
      title: "स्टेटस और किस्त न आए तो",
      list: [
        "पोर्टल पर आवेदन/भुगतान की स्थिति वाले विकल्प में आधार या आवेदन संख्या डालकर OTP से स्थिति देखें।",
        "किस्त न आए तो पहले बैंक से आधार सीडिंग और खाते की स्थिति पूछें।",
        "फिर आंगनवाड़ी कार्यकर्ता, CDPO कार्यालय या ब्लॉक कार्यालय में शिकायत दें।",
      ],
    },
  ],
  official: [
    { href: "https://subhadra.odisha.gov.in/", title: "सुभद्रा पोर्टल (महिला एवं बाल विकास विभाग, ओडिशा)", note: "दिशा-निर्देश, SOP और FAQ" },
    { href: "https://www.myscheme.gov.in/schemes/subhadra", title: "myScheme: SUBHADRA" },
  ],
  faq: [
    { q: "सुभद्रा योजना में कितने पैसे मिलते हैं?", a: "हर साल ₹10,000, दो किस्तों में ₹5,000-₹5,000; 2024-25 से 2028-29 तक कुल ₹50,000।" },
    { q: "सुभद्रा योजना के लिए उम्र सीमा क्या है?", a: "योग्यता तिथि पर 21 साल या उससे ज़्यादा और 60 साल से कम।" },
    { q: "राशन कार्ड नहीं है तो क्या आवेदन कर सकते हैं?", a: "हां, अगर परिवार की सालाना आय ₹2.5 लाख से ज़्यादा नहीं है। बाकी शर्तें भी पूरी होनी चाहिए।" },
    { q: "क्या अभी नया आवेदन हो रहा है?", a: "नया पंजीकरण सरकार तय अवधि में खोलती है; 2026 में यह 1 अप्रैल से एक महीने के लिए खुला था। अगली अवधि की जानकारी सुभद्रा पोर्टल, आंगनवाड़ी या ब्लॉक कार्यालय से लें।" },
    { q: "क्या पेंशन पाने वाली महिला पात्र है?", a: "अगर किसी सरकारी योजना से ₹1,500 महीना या ₹18,000 साल या ज़्यादा मिलता है तो वह अपात्र है। सरकारी नौकरी से रिटायर होकर पेंशन पाने वाली भी अपात्र है।" },
  ],
  related: [
    { href: "/states/odisha-ration-card.html", emoji: "🍚", title: "ओडिशा राशन कार्ड", text: "NFSA/SFSS कार्ड" },
    { href: "/states/odisha-income-certificate.html", emoji: "💰", title: "ओडिशा आय प्रमाण पत्र", text: "राशन कार्ड न हो तो आय का प्रमाण" },
    { href: "/states/odisha-domicile-certificate.html", emoji: "🏠", title: "ओडिशा निवास प्रमाण पत्र", text: "निवास का प्रमाण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "e-KYC के लिए आधार अपडेट" },
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "🏦", title: "जन धन खाता", text: "DBT के लिए बैंक खाता" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "आवेदन में मदद" },
  ],
  aside: [
    { href: "https://subhadra.odisha.gov.in/", label: "🌸 सुभद्रा पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
