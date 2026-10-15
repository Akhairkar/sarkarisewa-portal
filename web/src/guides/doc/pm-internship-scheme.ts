import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB / Ministry of Corporate Affairs (pilot
// launched 3 Oct 2024 with the portal pminternship.mca.gov.in; pilot terms:
// 12-month internship in top companies, ₹5,000 a month (₹4,500 Government +
// ₹500 company), ₹6,000 one-time grant, insurance cover, age 21-24, not in
// full-time job/education, family income and government-employee exclusions).
// 2026 revamp reported by several news/explainer sites (adda247, nationalskills
// network, iasgyan; a June 2026 Ambedkar University Delhi notice) with a higher
// stipend, wider age band and shorter durations, but the figures conflict and
// no PIB release or portal text could be opened, so the new amounts are not
// stated; readers are sent to the portal. Old description (₹5,000, 12 months,
// top 500) was rewritten because it may be outdated.
export const pmInternshipScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "पीएम इंटर्नशिप योजना" },
  ],
  docHi: "पीएम इंटर्नशिप योजना",
  title: "पीएम इंटर्नशिप योजना 2026 (PM Internship Scheme)",
  description: "कंपनी मामलों के मंत्रालय की PM इंटर्नशिप योजना: बड़ी कंपनियों में इंटर्नशिप, मासिक स्टाइपेंड, पात्रता, pminternship.mca.gov.in पर आवेदन और 2026 के बदलाव।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम इंटर्नशिप योजना 2026: पात्रता, स्टाइपेंड और आवेदन का तरीका",
  lead: "प्रधानमंत्री इंटर्नशिप योजना केंद्र सरकार के कंपनी मामलों के मंत्रालय (MCA) की योजना है, जिसमें युवाओं को देश की बड़ी कंपनियों में असली काम का अनुभव (इंटर्नशिप) और हर महीने स्टाइपेंड मिलता है। आवेदन सिर्फ ऑनलाइन pminternship.mca.gov.in पर होता है और कोई फीस नहीं लगती। 2026 में योजना में बदलाव की खबरें आई हैं, इसलिए स्टाइपेंड, उम्र और अवधि आवेदन से पहले पोर्टल पर ज़रूर देखें।",
  facts: [
    ["मंत्रालय", "कंपनी मामलों का मंत्रालय (MCA)"],
    ["आवेदन", "ऑनलाइन, pminternship.mca.gov.in (मुफ्त)"],
    ["पायलट (2024) में स्टाइपेंड", "₹5,000 प्रति माह + ₹6,000 एक बार"],
    ["2026 की शर्तें", "पोर्टल पर देखें (बदलाव की खबरें)"],
  ],
  notice: "2026 में योजना के नए रूप की खबरें हैं, जिनमें ज़्यादा स्टाइपेंड, उम्र सीमा में बदलाव और कम अवधि की इंटर्नशिप की बात है। अलग-अलग स्रोतों में आंकड़े अलग हैं और हम आधिकारिक अधिसूचना नहीं देख पाए, इसलिए नए आंकड़े यहां नहीं लिखे। आवेदन से पहले पोर्टल पर दी गई शर्तें ही मानें।",
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है",
      intro: "योजना का पायलट चरण 3 अक्टूबर 2024 को शुरू हुआ। मकसद है कि पढ़ाई पूरी कर चुके युवाओं को कंपनियों में काम सीखने का मौका मिले।",
      table: {
        head: ["पायलट चरण (2024-25) में", "शर्त"],
        rows: [
          ["अवधि", "12 महीने, जिसमें कम से कम आधा समय असली काम पर"],
          ["मासिक स्टाइपेंड", "₹5,000 (₹4,500 सरकार DBT से + ₹500 कंपनी)"],
          ["एक बार की मदद", "₹6,000 (जॉइन करने पर)"],
          ["उम्र", "21 से 24 साल"],
          ["बीमा", "सरकारी बीमा योजनाओं के तहत कवर"],
        ],
      },
      callout: { kind: "warn", html: "ऊपर की तालिका पायलट चरण की है। 2026 के नए दौर में ये आंकड़े बदल सकते हैं; <a href=\"https://pminternship.mca.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pminternship.mca.gov.in</a> पर मौजूदा शर्तें देखें।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है (पायलट की शर्तें)",
      list: [
        "भारतीय नागरिक, जो पूरे समय की नौकरी या पूरे समय की पढ़ाई में न हो। ऑनलाइन/दूरस्थ पढ़ाई वाले आवेदन कर सकते थे।",
        "10वीं, 12वीं, ITI, पॉलिटेक्निक डिप्लोमा या स्नातक (BA, BSc, BCom, BBA, BCA, B.Pharma आदि) पास।",
        "IIT, IIM, IISER जैसे बड़े संस्थानों के स्नातक, CA/CMA जैसे पेशेवर और मास्टर डिग्री वाले पायलट में पात्र नहीं थे।",
        "परिवार में किसी की सालाना आय ₹8 लाख से ज़्यादा हो या कोई स्थायी सरकारी कर्मचारी हो तो पायलट में पात्रता नहीं थी।",
      ],
      callout: { kind: "info", html: "2026 के बदलाव में उम्र और योग्यता की शर्तें बदलने की खबरें हैं। पोर्टल पर रजिस्ट्रेशन करते समय पात्रता अपने आप जांची जाती है।" },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<a href=\"https://pminternship.mca.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pminternship.mca.gov.in</a> पर मोबाइल नंबर से रजिस्टर करें।",
        "आधार से e-KYC करें और पढ़ाई, पता, बैंक खाता जैसी जानकारी भरकर प्रोफाइल पूरा करें।",
        "पोर्टल अपने आप बायोडाटा (resume) बनाता है। जगह, सेक्टर और काम के हिसाब से इंटर्नशिप चुनकर आवेदन करें।",
        "कंपनी चुनने पर पोर्टल पर ऑफर आता है; तय समय में उसे स्वीकार करें।",
      ],
      callout: { kind: "warn", html: "आवेदन पूरी तरह मुफ्त है। इंटर्नशिप \"पक्की कराने\" के नाम पर पैसा मांगने वाले कॉल या मैसेज धोखा हैं।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड (आधार से जुड़ा मोबाइल)",
        "आखिरी पास की गई परीक्षा की मार्कशीट/सर्टिफिकेट",
        "आधार से जुड़ा बैंक खाता (स्टाइपेंड DBT से आता है)",
        "पासपोर्ट साइज़ फोटो",
      ],
    },
  ],
  official: [
    { href: "https://pminternship.mca.gov.in/", title: "PM इंटर्नशिप योजना पोर्टल (MCA)" },
    { href: "https://www.mca.gov.in/", title: "कंपनी मामलों का मंत्रालय" },
  ],
  faq: [
    { q: "PM इंटर्नशिप योजना में कितना स्टाइपेंड मिलता है?", a: "पायलट चरण में ₹5,000 प्रति माह और ₹6,000 एक बार मिलते थे। 2026 में स्टाइपेंड बढ़ने की खबरें हैं, पर आंकड़े अलग-अलग बताए जा रहे हैं; मौजूदा राशि pminternship.mca.gov.in पर देखें।" },
    { q: "आवेदन कहां करें?", a: "सिर्फ ऑनलाइन, pminternship.mca.gov.in पर। कोई फीस नहीं है।" },
    { q: "क्या कॉलेज में पढ़ रहे छात्र आवेदन कर सकते हैं?", a: "पायलट में पूरे समय की पढ़ाई कर रहे छात्र पात्र नहीं थे; ऑनलाइन/दूरस्थ पढ़ाई वाले कर सकते थे। नई शर्तें पोर्टल पर देखें।" },
    { q: "क्या इंटर्नशिप के बाद नौकरी पक्की है?", a: "नहीं। इंटर्नशिप काम का अनुभव और सर्टिफिकेट देती है; नौकरी देना कंपनी का फैसला है।" },
  ],
  related: [
    { href: "/service/national-apprenticeship-scheme.html", emoji: "🏭", title: "अप्रेंटिसशिप योजना", text: "काम सीखते हुए स्टाइपेंड" },
    { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🛠️", title: "PM कौशल विकास योजना", text: "मुफ्त स्किल ट्रेनिंग" },
    { href: "/service/ncs-national-career-service.html", emoji: "🔎", title: "नेशनल करियर सर्विस", text: "नौकरी खोजें" },
    { href: "/service/employment-exchange-registration.html", emoji: "📝", title: "रोज़गार कार्यालय पंजीकरण", text: "बेरोज़गार पंजीकरण" },
  ],
  aside: [
    { href: "https://pminternship.mca.gov.in/", label: "💼 इंटर्नशिप पोर्टल पर आवेदन" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
