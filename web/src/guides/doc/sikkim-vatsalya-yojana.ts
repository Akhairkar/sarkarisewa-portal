import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; Sikkim government sites not reachable from the
// sandbox, search-result extracts used): 50yearsofstatehood.sikkim.gov.in
// "Achievements in Health and Family Welfare" (Vatsalya: financial assistance
// to childless couples of Sikkim to undergo IVF; maximum Rs 3 lakh for 2
// attempts; availed by public and employees, 535 beneficiaries), ThePrint
// ground report (Vatsalya launched 2023; Rs 3 lakh for IVF and other assisted
// fertility treatment; beneficiary account from 2024), The Star 2023 (more
// than 100 couples in the first months). Formal eligibility rules, documents
// and the per-attempt split were not found on an official source, so left
// general. The old page wrongly called it an infant-health scheme; the
// description was rewritten.
export const sikkimVatsalyaYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "सिक्किम", href: "/states/sikkim.html" },
    { label: "वात्सल्य योजना" },
  ],
  docHi: "वात्सल्य योजना",
  title: "Vatsalya Yojana",
  description: "सिक्किम सरकार की वात्सल्य योजना: निःसंतान दंपतियों को IVF इलाज के लिए अधिकतम ₹3 लाख (दो प्रयास) की मदद। कौन पात्र, कहां पूछें और ध्यान रखने की बातें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "सिक्किम वात्सल्य योजना: निःसंतान दंपतियों को IVF इलाज के लिए ₹3 लाख तक मदद",
  lead: "वात्सल्य सिक्किम सरकार की योजना है, जो राज्य के निःसंतान दंपतियों को IVF (टेस्ट-ट्यूब बेबी) इलाज के लिए पैसे देती है। राज्य सरकार के अनुसार इसमें <strong>दो प्रयासों के लिए अधिकतम ₹3 लाख</strong> मिलते हैं। यह 2023 में शुरू हुई और आम लोग व सरकारी कर्मचारी दोनों इसका लाभ ले रहे हैं। आवेदन की जानकारी सिक्किम के स्वास्थ्य एवं परिवार कल्याण विभाग या ज़िला अस्पताल से लें।",
  facts: [
    ["राज्य", "सिक्किम"],
    ["किसके लिए", "निःसंतान दंपति (IVF इलाज)"],
    ["अधिकतम मदद", "₹3 लाख, दो प्रयासों के लिए"],
    ["विभाग", "स्वास्थ्य एवं परिवार कल्याण विभाग, सिक्किम"],
  ],
  notice: "पुराने पेज में इसे शिशु स्वास्थ्य योजना बताया गया था। असल में वात्सल्य योजना IVF इलाज के खर्च में मदद की योजना है।",
  sections: [
    {
      id: "kya-hai",
      title: "योजना में क्या मिलता है",
      list: [
        "<strong>IVF के लिए पैसे:</strong> निःसंतान दंपति को IVF इलाज के खर्च में आर्थिक मदद।",
        "<strong>अधिकतम ₹3 लाख:</strong> राज्य सरकार के अनुसार कुल मदद दो प्रयासों के लिए अधिकतम ₹3 लाख है।",
        "<strong>कौन ले रहा है:</strong> राज्य सरकार के अनुसार आम लोग और सरकारी कर्मचारी दोनों इसका लाभ ले रहे हैं; 535 लाभार्थी बताए गए हैं।",
      ],
      callout: { kind: "info", html: "IVF का असली खर्च ₹3 लाख से ज़्यादा भी हो सकता है, और सिक्किम के कई दंपति इलाज के लिए सिलीगुड़ी या बड़े शहरों में जाते हैं। पहले अस्पताल से पूरा खर्च लिखित में लें।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      intro: "योजना के पूरे दिशानिर्देश हमें सरकारी स्रोत से नहीं मिले। उपलब्ध जानकारी के अनुसार:",
      list: [
        "दंपति सिक्किम के निवासी हों (आम तौर पर सिक्किम सब्जेक्ट/COI मांगा जाता है)",
        "दंपति निःसंतान हों और डॉक्टर ने IVF की सलाह दी हो",
        "उम्र, आय या पहले बच्चे से जुड़ी शर्तें विभाग से पूछें",
      ],
    },
    {
      id: "kaise",
      title: "कैसे आवेदन करें",
      steps: [
        "<strong>डॉक्टर से जांच करवाएं:</strong> सरकारी अस्पताल (जैसे STNM अस्पताल, गंगटोक) या ज़िला अस्पताल के स्त्री रोग विभाग में दिखाएं।",
        "<strong>विभाग से फॉर्म लें:</strong> स्वास्थ्य एवं परिवार कल्याण विभाग या ज़िला मुख्य चिकित्सा अधिकारी कार्यालय से वात्सल्य योजना का फॉर्म और कागज़ों की सूची पूछें।",
        "<strong>कागज़ लगाएं:</strong> आम तौर पर पति-पत्नी के पहचान व निवास प्रमाण, विवाह प्रमाण पत्र, डॉक्टर की रिपोर्ट, IVF केंद्र का खर्च का अनुमान और बैंक खाता।",
        "<strong>मंज़ूरी के बाद इलाज:</strong> भुगतान कैसे और किस किस्त में होगा, यह लिखित में समझ लें।",
      ],
      callout: { kind: "warn", html: "इस योजना का अलग ऑनलाइन पोर्टल हमें नहीं मिला। IVF केंद्र या एजेंट के कहने पर पहले से पूरा पैसा जमा करने से पहले विभाग से पुष्टि करें।" },
    },
  ],
  official: [
    { href: "https://sikkim.gov.in/", title: "सिक्किम सरकार का पोर्टल" },
    { href: "https://ipr.sikkim.gov.in/", title: "सूचना एवं जनसंपर्क विभाग, सिक्किम" },
  ],
  faq: [
    { q: "वात्सल्य योजना में कितनी मदद मिलती है?", a: "राज्य सरकार के अनुसार IVF इलाज के दो प्रयासों के लिए अधिकतम ₹3 लाख।" },
    { q: "क्या यह नवजात शिशु की योजना है?", a: "नहीं। यह निःसंतान दंपतियों के IVF इलाज के खर्च में मदद की योजना है।" },
    { q: "क्या सरकारी कर्मचारी भी ले सकते हैं?", a: "हां, राज्य सरकार के अनुसार आम लोग और कर्मचारी दोनों इसका लाभ ले रहे हैं।" },
    { q: "आवेदन कहां करें?", a: "सिक्किम के स्वास्थ्य एवं परिवार कल्याण विभाग, ज़िला मुख्य चिकित्सा अधिकारी कार्यालय या सरकारी अस्पताल से फॉर्म और प्रक्रिया पूछें।" },
  ],
  related: [
    { href: "/service/sikkim-aama-yojana.html", emoji: "👩‍👧", title: "सिक्किम आमा योजना", text: "माताओं को सालाना सहायता" },
    { href: "/service/pm-matru-vandana-yojana.html", emoji: "🤰", title: "प्रधानमंत्री मातृ वंदना योजना", text: "गर्भवती महिलाओं को सहायता" },
    { href: "/service/sikkim-birth-certificate.html", emoji: "🪪", title: "जन्म प्रमाण पत्र (सिक्किम)", text: "बच्चे का जन्म प्रमाण पत्र" },
    { href: "/states/sikkim.html", emoji: "🗺️", title: "सिक्किम की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://sikkim.gov.in/", label: "🏥 सिक्किम सरकार" },
    { href: "/states/sikkim.html", label: "🗺️ सिक्किम की सेवाएं" },
  ],
};
