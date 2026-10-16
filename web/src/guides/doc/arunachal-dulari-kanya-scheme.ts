import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; state sites and myscheme.gov.in not
// reachable from the sandbox, search-result extracts used): Vikaspedia
// "Dulari Kanya Scheme" (launched 15.08.2016, Health & Family Welfare
// Department; aims: institutional delivery, lower infant mortality, end child
// marriage; ₹30,000 from 2025); Punjab Kesari 18.02.2025 and Adda247 (state
// cabinet Feb 2025: fixed deposit for institutional birth raised to ₹30,000,
// maturing at 18, plus ₹20,000 DBT on admission to Class XI, total ₹50,000);
// myscheme.gov.in/schemes/dk (deposit in the girl's minor bank account for
// births in government / government-recognised private hospitals; still shows
// the older ₹20,000). Exact maturity conditions and the 2025 GO were not
// found, so they are described generally.
export const arunachalDulariKanyaScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "अरुणाचल प्रदेश", href: "/states/arunachal-pradesh.html" },
    { label: "दुलारी कन्या योजना" },
  ],
  docHi: "दुलारी कन्या योजना",
  title: "Dulari Kanya Scheme",
  description: "अरुणाचल प्रदेश की दुलारी कन्या योजना: सरकारी/मान्य अस्पताल में जन्मी बेटी के नाम सावधि जमा (2025 से ₹30,000) और कक्षा 11 में दाखिले पर ₹20,000। पात्रता, कागज़ और आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "दुलारी कन्या योजना (अरुणाचल प्रदेश): बेटी के नाम जमा राशि, पात्रता और आवेदन",
  lead: "दुलारी कन्या योजना अरुणाचल प्रदेश सरकार के स्वास्थ्य एवं परिवार कल्याण विभाग की योजना है, जो 15 अगस्त 2016 को शुरू हुई। सरकारी या सरकार से मान्य निजी अस्पताल में जन्मी बेटी के नाम बैंक में सावधि जमा (fixed deposit) की जाती है, जो 18 साल की उम्र पर मिलती है। फरवरी 2025 में राज्य कैबिनेट ने यह जमा ₹30,000 की और कक्षा 11 में दाखिले पर ₹20,000 और देने का फैसला किया, यानी कुल ₹50,000।",
  facts: [
    ["विभाग", "स्वास्थ्य एवं परिवार कल्याण, अरुणाचल प्रदेश"],
    ["जन्म पर जमा", "₹30,000 (2025 से), 18 साल पर"],
    ["कक्षा 11 में", "₹20,000 (DBT)"],
    ["शर्त", "अस्पताल में जन्म"],
  ],
  notice: "सरकारी योजना पोर्टल myScheme पर अभी भी पुरानी राशि ₹20,000 लिखी दिखती है, जबकि 2025 के कैबिनेट फैसले में ₹30,000 बताई गई। आवेदन के समय ज़िला स्वास्थ्य कार्यालय से अपने मामले की राशि पक्की करें।",
  sections: [
    {
      id: "uddeshya",
      title: "योजना का उद्देश्य",
      list: [
        "अस्पताल में सुरक्षित प्रसव (institutional delivery) को बढ़ावा देना",
        "नवजात और शिशु मृत्यु दर कम करना",
        "बाल विवाह रोकना और बेटियों की पढ़ाई को सहारा देना",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "अरुणाचल प्रदेश की निवासी माँ की बेटी",
        "जन्म <strong>सरकारी अस्पताल या सरकार से मान्य निजी अस्पताल</strong> में हुआ हो",
        "बेटी के नाम बैंक में नाबालिग (minor) खाता खुले, जिसमें जमा राशि रखी जाती है",
        "कक्षा 11 वाली ₹20,000 की राशि के लिए बेटी का कक्षा 11 में दाखिला ज़रूरी",
      ],
      callout: { kind: "info", html: "18 साल पर राशि निकालने की पूरी शर्तें (जैसे पढ़ाई और विवाह से जुड़ी) विभाग तय करता है। ज़िला स्वास्थ्य कार्यालय या अस्पताल से लिखित जानकारी लें।" },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "प्रसव जिस अस्पताल में हुआ, वहां के स्टाफ/ASHA या ज़िला स्वास्थ्य कार्यालय (DMO/DRCHO) से दुलारी कन्या फॉर्म लें।",
        "बेटी का जन्म प्रमाण पत्र बनवाएं और बेटी के नाम बैंक में नाबालिग खाता खुलवाएं।",
        "फॉर्म के साथ कागज़ लगाकर अस्पताल या ज़िला स्वास्थ्य कार्यालय में जमा करें।",
        "जमा की रसीद/बॉन्ड संभाल कर रखें; यही 18 साल पर राशि लेने में काम आएगी।",
      ],
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "बेटी का जन्म प्रमाण पत्र और अस्पताल का डिस्चार्ज/प्रसव प्रमाण",
        "माता-पिता का आधार और निवास का प्रमाण (APST/निवास प्रमाण पत्र या राशन कार्ड)",
        "बेटी के नाबालिग बैंक खाते की पासबुक",
        "पासपोर्ट साइज़ फोटो",
      ],
    },
  ],
  official: [
    { href: "https://www.myscheme.gov.in/schemes/dk", title: "myScheme: Dulari Kanya Scheme", note: "यहां पुरानी राशि दिख सकती है" },
    { href: "https://arunachal.mygov.in/", title: "MyGov अरुणाचल प्रदेश" },
  ],
  faq: [
    { q: "दुलारी कन्या योजना में कितनी राशि मिलती है?", a: "फरवरी 2025 के कैबिनेट फैसले के अनुसार अस्पताल में जन्मी बेटी के नाम ₹30,000 की सावधि जमा (18 साल पर) और कक्षा 11 में दाखिले पर ₹20,000, कुल ₹50,000। पहले जमा राशि ₹20,000 थी।" },
    { q: "क्या घर पर जन्मी बेटी को लाभ मिलेगा?", a: "योजना का लाभ सरकारी या सरकार से मान्य निजी अस्पताल में हुए जन्म पर है। घर पर जन्म के मामले में ज़िला स्वास्थ्य कार्यालय से पूछें।" },
    { q: "आवेदन कहां करें?", a: "जिस अस्पताल में प्रसव हुआ वहां, या ज़िला स्वास्थ्य कार्यालय में। ASHA कार्यकर्ता भी मदद करती हैं।" },
    { q: "पैसा कब मिलता है?", a: "जन्म पर जमा की गई राशि बेटी के 18 साल की होने पर मिलती है; कक्षा 11 वाली राशि दाखिले के बाद सीधे खाते में (DBT) आती है।" },
  ],
  related: [
    { href: "/service/arunachal-cmaay-scheme.html", emoji: "🏥", title: "CMAAY योजना", text: "₹5 लाख तक कैशलेस इलाज" },
    { href: "/service/sukanya-samriddhi-yojana.html", emoji: "👧", title: "सुकन्या समृद्धि योजना", text: "बेटी के लिए बचत खाता" },
    { href: "/service/arunachal-pradesh-birth-certificate.html", emoji: "📄", title: "अरुणाचल प्रदेश जन्म प्रमाण पत्र", text: "योजना के लिए ज़रूरी" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बच्चे का आधार" },
  ],
  aside: [
    { href: "/states/arunachal-pradesh.html", label: "🌅 अरुणाचल की सभी सेवाएं" },
    { href: "/service/csc-locator/arunachal-pradesh.html", label: "📍 नज़दीकी CSC" },
  ],
};
