import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026, via search extracts; licindia.in and
// financialservices.gov.in were not reachable from here): PIB / Cabinet
// decision May 2018 (investment limit raised from ₹7.5 lakh to ₹15 lakh,
// pension up to ₹10,000 a month, window extended to 31.03.2020); Cabinet
// decision 20 May 2020 reported by PTI/Business Standard and Drishti IAS
// (scheme extended by three years to 31 March 2023, assured 7.40% for 2020-21
// to be reset every year, run through LIC, Government pays only the gap
// between LIC's return and the assured rate); 2018 Lok Sabha answer (scheme
// launched through LIC). No extension beyond 31 March 2023 was found in any
// source; several secondary sources say the scheme closed to new
// subscriptions then and existing policies run their 10-year term. The exact
// rate locked in each policy, surrender and loan terms are not stated here;
// readers are sent to their LIC branch.
export const pmVayaVandanaYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम वय वंदना योजना (PMVVY)" },
  ],
  docHi: "पीएम वय वंदना योजना (PMVVY)",
  title: "पीएम वय वंदना योजना (PMVVY) 2026",
  description: "60+ वरिष्ठ नागरिकों की LIC द्वारा चलाई गई पेंशन योजना। नई खरीद 31 मार्च 2023 के बाद बंद; पुरानी पॉलिसी में पेंशन, स्टेटस, शिकायत और अब के विकल्प।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम वय वंदना योजना (PMVVY): नई पॉलिसी बंद, पुराने पॉलिसीधारक क्या करें",
  lead: "प्रधानमंत्री वय वंदना योजना (PMVVY) 60 साल या ज़्यादा उम्र के लोगों के लिए LIC के ज़रिए चलने वाली पेंशन योजना थी, जिसमें एकमुश्त रकम जमा करके 10 साल तक तय दर पर पेंशन मिलती है। केंद्र सरकार ने इसे आखिरी बार <strong>31 मार्च 2023</strong> तक बढ़ाया था; उसके बाद कोई नई बढ़ोतरी हमें किसी स्रोत में नहीं मिली, इसलिए अब इसमें नई पॉलिसी नहीं ली जा सकती। जिन्होंने पहले पॉलिसी ली है, उन्हें पॉलिसी की 10 साल की अवधि तक पेंशन मिलती रहती है।",
  facts: [
    ["स्थिति", "नई खरीद 31 मार्च 2023 तक ही थी"],
    ["कौन चलाता है", "LIC (भारतीय जीवन बीमा निगम)"],
    ["उम्र", "60 साल या ज़्यादा"],
    ["अधिकतम निवेश", "₹15 लाख (पेंशन ₹10,000/माह तक)"],
  ],
  notice: "PMVVY अब नए निवेश के लिए खुली नहीं है। कोई एजेंट या कॉल करने वाला \"वय वंदना\" के नाम पर नया निवेश करवाने की बात करे तो सावधान रहें। <strong>आयुष्मान वय वंदना कार्ड</strong> (70+ लोगों का स्वास्थ्य बीमा) एक अलग योजना है।",
  sections: [
    {
      id: "kya-thi",
      title: "योजना कैसे काम करती थी",
      list: [
        "60 साल या ज़्यादा उम्र का व्यक्ति LIC को एकमुश्त रकम (खरीद मूल्य) देता था।",
        "बदले में <strong>10 साल तक</strong> मासिक, तिमाही, छमाही या सालाना पेंशन मिलती है, खरीद के समय तय दर पर।",
        "2018 में अधिकतम निवेश ₹7.5 लाख से बढ़ाकर <strong>₹15 लाख</strong> किया गया, जिससे पेंशन ₹10,000 महीना तक हो सकती थी।",
        "2020-21 में सुनिश्चित दर <strong>7.40% सालाना</strong> रखी गई और आगे हर साल दर तय होनी थी। आपकी पॉलिसी में जो दर लिखी है, वही पूरे 10 साल लागू है।",
        "LIC को बाज़ार से मिलने वाले रिटर्न और तय दर के बीच का फर्क केंद्र सरकार देती है, इसलिए पेंशन की दर पॉलिसी अवधि में नहीं घटती।",
      ],
    },
    {
      id: "purane",
      title: "पुराने पॉलिसीधारक: पेंशन, स्टेटस और शिकायत",
      steps: [
        "<strong>पॉलिसी के कागज़ देखें:</strong> पॉलिसी नंबर, पेंशन की दर, पेंशन का तरीका (मासिक/सालाना) और पॉलिसी खत्म होने की तारीख वहीं लिखी है।",
        "<strong>पेंशन रुकी है:</strong> बैंक खाता चालू है या नहीं और LIC के रिकॉर्ड में सही खाता है या नहीं, यह जांचें। हर साल मांगा गया जीवन प्रमाण (Life Certificate) समय पर दें।",
        '<strong>स्टेटस:</strong> <a href="https://licindia.in/" target="_blank" rel="noopener nofollow">licindia.in</a> पर ग्राहक पोर्टल में पॉलिसी जोड़कर या जिस LIC शाखा से पॉलिसी ली थी वहां से जानकारी लें।',
        "<strong>पॉलिसी पूरी होने पर:</strong> 10 साल पूरे होने पर पॉलिसी की शर्तों के अनुसार भुगतान मिलता है। शर्तें और ज़रूरी कागज़ अपनी LIC शाखा से पूछें।",
        "<strong>पॉलिसीधारक की मृत्यु पर:</strong> नॉमिनी मृत्यु प्रमाण पत्र और पॉलिसी के कागज़ लेकर LIC शाखा में दावा करें।",
        '<strong>शिकायत:</strong> पहले LIC शाखा/ग्राहक सेवा में; हल न हो तो बीमा लोकपाल (<a href="https://www.cioins.co.in/" target="_blank" rel="noopener nofollow">cioins.co.in</a>) या <a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a> पर।',
      ],
    },
    {
      id: "vikalp",
      title: "अब नियमित आमदनी के लिए क्या विकल्प हैं",
      intro: "PMVVY बंद होने के बाद वरिष्ठ नागरिक आम तौर पर ये सरकारी बचत/पेंशन विकल्प देखते हैं। ब्याज दर सरकार हर तिमाही तय करती है, इसलिए दर बैंक या डाकघर से पूछें:",
      list: [
        "<strong>वरिष्ठ नागरिक बचत योजना (SCSS):</strong> डाकघर और बैंकों में, 60+ लोगों के लिए, तिमाही ब्याज।",
        "<strong>डाकघर मासिक आय योजना (POMIS):</strong> हर महीने ब्याज।",
        '<strong>राष्ट्रीय पेंशन प्रणाली (NPS):</strong> लंबी अवधि की पेंशन बचत। देखें <a href="/service/national-pension-system.html">NPS गाइड</a>।',
        '<strong>वृद्धावस्था पेंशन:</strong> गरीब परिवारों के बुज़ुर्गों के लिए राज्य/केंद्र की सामाजिक पेंशन अलग है। देखें <a href="/service/senior-citizen-card.html">वरिष्ठ नागरिक कार्ड और पेंशन</a>।',
      ],
      callout: { kind: "warn", html: "कोई भी योजना चुनने से पहले उसकी मौजूदा ब्याज दर, अवधि और समय से पहले निकासी की शर्तें आधिकारिक स्रोत (डाकघर/बैंक) से लिखित में देखें।" },
    },
  ],
  official: [
    { href: "https://licindia.in/", title: "भारतीय जीवन बीमा निगम (LIC)", note: "PMVVY पॉलिसी सेवा" },
    { href: "https://financialservices.gov.in/", title: "वित्तीय सेवाएं विभाग, वित्त मंत्रालय" },
    { href: "https://www.cioins.co.in/", title: "बीमा लोकपाल परिषद", note: "बीमा शिकायत" },
  ],
  faq: [
    { q: "क्या अब PMVVY में निवेश कर सकते हैं?", a: "नहीं। सरकार ने योजना को आखिरी बार 31 मार्च 2023 तक बढ़ाया था और उसके बाद कोई बढ़ोतरी हमें नहीं मिली। नई पॉलिसी नहीं मिलती।" },
    { q: "मेरी पुरानी PMVVY पॉलिसी का क्या होगा?", a: "पुरानी पॉलिसी अपनी 10 साल की अवधि तक चलती है और खरीद के समय तय दर पर पेंशन मिलती रहती है। अवधि पूरी होने पर पॉलिसी की शर्तों के अनुसार भुगतान होता है।" },
    { q: "PMVVY में ब्याज दर कितनी थी?", a: "2020-21 के लिए सरकार ने 7.40% सालाना की सुनिश्चित दर तय की थी और आगे हर साल दर तय होनी थी। आपकी पॉलिसी में लिखी दर ही आप पर लागू है।" },
    { q: "PMVVY और आयुष्मान वय वंदना कार्ड में क्या फर्क है?", a: "PMVVY LIC की पेंशन योजना थी जो नए निवेश के लिए बंद है। आयुष्मान वय वंदना कार्ड 70 साल या ज़्यादा उम्र के लोगों के लिए आयुष्मान भारत (PM-JAY) के तहत स्वास्थ्य बीमा है। दोनों अलग हैं।" },
    { q: "पेंशन नहीं आई तो कहां शिकायत करें?", a: "पहले उस LIC शाखा में जहां से पॉलिसी ली थी, फिर LIC ग्राहक सेवा, और हल न हो तो बीमा लोकपाल या pgportal.gov.in पर।" },
  ],
  related: [
    { href: "/service/national-pension-system.html", emoji: "🏦", title: "राष्ट्रीय पेंशन प्रणाली (NPS)", text: "लंबी अवधि की पेंशन बचत" },
    { href: "/service/public-provident-fund.html", emoji: "💰", title: "PPF खाता", text: "सुरक्षित लंबी बचत" },
    { href: "/service/senior-citizen-card.html", emoji: "👴", title: "वरिष्ठ नागरिक कार्ड", text: "बुज़ुर्गों के लाभ और पेंशन" },
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "🧓", title: "पीएम श्रम योगी मानधन", text: "असंगठित मज़दूरों की पेंशन" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन सेवाओं में मदद" },
  ],
  aside: [
    { href: "https://licindia.in/", label: "🏦 LIC की वेबसाइट" },
    { href: "/service/senior-citizen-card.html", label: "👴 वरिष्ठ नागरिक कार्ड" },
  ],
};
