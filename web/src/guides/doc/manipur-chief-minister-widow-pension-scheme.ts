import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): socialwelfare.mn.gov.in (Directorate of
// Social Welfare, Manipur): Notification No. 11/11/2019-D(SW)Pension dated
// 21.09.2026 inviting applications for MOAPS, CMWPS and Ima Nongthangleima
// Yaipha Tengbang Scheme from 22.09.2026 to 31.10.2026 to the concerned
// District Social Welfare Officer, form from DSWO or
// socialwelfare.mn.gov.in/en/downloads/; CMWPS application form (deceased and
// widow details, income certificate from SDC/SDO/BDO, NFSA card, Aadhaar,
// bank account, death certificate from Registrar of births and deaths, two
// photos, age proof 40-59 years, HIV+ certificate if applicable). Amount
// ₹500/month: Eastern Mirror (July 2025, state providing widow pension of
// ₹500/month to 10,000 widows) and Vikaspedia; not found in an official
// order, so marked as reported. Income ceiling not stated in the form.
export const manipurChiefMinisterWidowPensionScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मणिपुर", href: "/states/manipur.html" },
    { label: "मुख्यमंत्री विधवा पेंशन" },
  ],
  docHi: "मुख्यमंत्री विधवा पेंशन (मणिपुर)",
  title: "Chief Minister Widow Pension Scheme",
  description: "manipur राज्य सरकार की यह विधवा पेंशन (Widow Pension) योजना नागरिकों के जीवन स्तर को सुधारने और उन्हें आत्मनिर्भर बनाने के लिए शुरू की गई है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मणिपुर मुख्यमंत्री विधवा पेंशन योजना (CMWPS): पात्रता, कागज़ और 2026 में आवेदन",
  lead: "मुख्यमंत्री विधवा पेंशन योजना (Chief Minister Widow Pension Scheme, CMWPS) मणिपुर सरकार के समाज कल्याण विभाग की योजना है। विभाग के आवेदन फॉर्म के अनुसार यह 40 से 59 साल की विधवा महिलाओं के लिए है। 21 सितंबर 2026 की अधिसूचना के अनुसार आवेदन <strong>22 सितंबर से 31 अक्टूबर 2026</strong> तक अपने ज़िले के ज़िला समाज कल्याण अधिकारी (DSWO) कार्यालय में जमा होंगे।",
  facts: [
    ["विभाग", "समाज कल्याण विभाग, मणिपुर"],
    ["उम्र", "40 से 59 साल (फॉर्म के अनुसार)"],
    ["आवेदन अवधि", "22 सितंबर – 31 अक्टूबर 2026"],
    ["कहां जमा करें", "ज़िला समाज कल्याण अधिकारी (DSWO)"],
  ],
  notice: "आवेदन की अंतिम तारीख 31 अक्टूबर 2026 है। विभाग के अनुसार देर से आए या अधूरे आवेदन पर विचार नहीं हो सकता।",
  sections: [
    {
      id: "rashi",
      title: "पेंशन राशि",
      intro: "समाचार रिपोर्टों (जुलाई 2025) के अनुसार राज्य सरकार इस योजना में विधवाओं को ₹500 महीना पेंशन दे रही है। हमें राशि का सरकारी आदेश नहीं मिला, इसलिए आवेदन के समय DSWO कार्यालय से राशि की पुष्टि करें।",
      callout: { kind: "info", html: "60 साल या ज़्यादा उम्र की महिलाओं के लिए अलग योजनाएं हैं, जैसे मणिपुर वृद्धावस्था पेंशन योजना (MOAPS) और केंद्र की इंदिरा गांधी राष्ट्रीय विधवा/वृद्धावस्था पेंशन (NSAP)। इनके फॉर्म भी समाज कल्याण विभाग की वेबसाइट पर हैं।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकती है",
      list: [
        "मणिपुर की निवासी विधवा महिला",
        "उम्र <strong>40 से 59 साल</strong> (सक्षम अधिकारी का उम्र प्रमाण पत्र)",
        "परिवार की सालाना आय का प्रमाण पत्र (SDC/SDO/BDO से) या NFSA राशन कार्ड का विवरण",
        "HIV पॉज़िटिव आवेदक प्रमाण पत्र लगाएं (फॉर्म में इसकी अलग जानकारी मांगी गई है)",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (फॉर्म के अनुसार)",
      list: [
        "<strong>आधार कार्ड</strong> का विवरण",
        "<strong>बैंक खाते</strong> का विवरण (खाता संख्या, शाखा, IFSC)",
        "<strong>पति का मृत्यु प्रमाण पत्र</strong>, जन्म-मृत्यु रजिस्ट्रार से जारी",
        "<strong>आय प्रमाण पत्र</strong> (सक्षम अधिकारी से) या NFSA कार्ड का विवरण",
        "<strong>उम्र का प्रमाण पत्र</strong> (40-59 साल) सक्षम अधिकारी से",
        "2 पासपोर्ट साइज़ फोटो",
        "HIV पॉज़िटिव होने पर प्रमाण पत्र",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "<strong>फॉर्म लें:</strong> अपने ज़िला समाज कल्याण कार्यालय से, या <a href=\"https://socialwelfare.mn.gov.in/en/downloads/\" target=\"_blank\" rel=\"noopener nofollow\">socialwelfare.mn.gov.in/en/downloads/</a> से \"Chief Ministergi Widow Pension Scheme (CMWPS)\" फॉर्म डाउनलोड करें।",
        "<strong>फॉर्म भरें:</strong> पहले हिस्से में स्वर्गीय पति की जानकारी, दूसरे में अपनी जानकारी, आय, NFSA कार्ड, मोबाइल, आधार और बैंक विवरण भरें; हस्ताक्षर या अंगूठा लगाएं।",
        "<strong>सत्यापन:</strong> फॉर्म पर सत्यापन अधिकारी (Verification Officer) के प्रति-हस्ताक्षर करवाएं।",
        "<strong>जमा करें:</strong> सभी कागज़ों के साथ 31 अक्टूबर 2026 तक अपने ज़िले के DSWO कार्यालय में जमा करें और पावती लें।",
      ],
      callout: { kind: "warn", html: "यह आवेदन ऑफलाइन है। विभाग ने इस योजना के लिए ऑनलाइन आवेदन की सुविधा की जानकारी नहीं दी है; किसी एजेंट को पैसे न दें।" },
    },
  ],
  official: [
    { href: "https://socialwelfare.mn.gov.in/", title: "समाज कल्याण विभाग, मणिपुर" },
    { href: "https://socialwelfare.mn.gov.in/en/downloads/", title: "डाउनलोड: CMWPS आवेदन फॉर्म और अधिसूचना" },
  ],
  faq: [
    { q: "मणिपुर मुख्यमंत्री विधवा पेंशन के लिए उम्र सीमा क्या है?", a: "समाज कल्याण विभाग के आवेदन फॉर्म में उम्र प्रमाण 40 से 59 साल मांगा गया है।" },
    { q: "2026 में आवेदन कब तक कर सकते हैं?", a: "21 सितंबर 2026 की अधिसूचना के अनुसार 22 सितंबर से 31 अक्टूबर 2026 तक, ज़िला समाज कल्याण अधिकारी (DSWO) कार्यालय में।" },
    { q: "कितनी पेंशन मिलती है?", a: "समाचार रिपोर्टों के अनुसार ₹500 महीना। सरकारी आदेश हमें नहीं मिला, इसलिए DSWO कार्यालय से पुष्टि करें।" },
    { q: "क्या ऑनलाइन आवेदन होता है?", a: "नहीं, फॉर्म डाउनलोड हो सकता है, पर भरकर DSWO कार्यालय में जमा करना होता है।" },
  ],
  related: [
    { href: "/states/manipur-senior-citizen-card.html", emoji: "👵", title: "मणिपुर वरिष्ठ नागरिक कार्ड", text: "60+ के लिए पेंशन और सुविधाएं" },
    { href: "/states/manipur-death-certificate.html", emoji: "📄", title: "मणिपुर मृत्यु प्रमाण पत्र", text: "पेंशन के लिए ज़रूरी" },
    { href: "/states/manipur-income-certificate.html", emoji: "💰", title: "मणिपुर आय प्रमाण पत्र", text: "आय का प्रमाण" },
    { href: "/service/manipur-cmht-scheme.html", emoji: "🏥", title: "CMHT योजना", text: "मणिपुर की स्वास्थ्य योजना" },
  ],
  aside: [
    { href: "https://socialwelfare.mn.gov.in/en/downloads/", label: "📄 फॉर्म डाउनलोड" },
    { href: "/states/manipur.html", label: "🗺️ मणिपुर की सेवाएं" },
  ],
};
