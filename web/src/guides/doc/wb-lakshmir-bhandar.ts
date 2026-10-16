import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; wb.gov.in sites not reachable from the
// sandbox, news reports used): Business Today (12 May 2026: BJP government's
// Annapurna Bhandar, ₹3,000 a month for women); OrissaPOST and Punjab Kesari
// (state cabinet cleared the scheme in May 2026, implementation from 1 June
// 2026); The Week (27 May 2026: application forms released); Asianet Newsable
// and UNI (₹3,000 instead of ₹1,500 under Lakshmir Bhandar; Lakshmir Bhandar
// beneficiaries to be linked after verification; women aged 25-60 from
// non-income-tax-paying households); Drishti IAS (14 May 2026) and Vajiram
// (scheme replaces Lakshmir Bhandar; application window 27 May - 25 Aug 2026
// per one guide); Outlook Money (September 2026 instalment announced by CM
// Suvendu Adhikari). No official portal URL for Annapurna Bhandar was
// confirmed, so none is linked; October 2026 payment status not confirmed.
export const wbLakshmirBhandar: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "पश्चिम बंगाल", href: "/states/west-bengal.html" },
    { label: "लक्ष्मीर भंडार" },
  ],
  docHi: "लक्ष्मीर भंडार",
  title: "लक्ष्मीर भंडार",
  description: "पश्चिम बंगाल की लक्ष्मीर भंडार योजना की जगह जून 2026 से अन्नपूर्णा भंडार: महिलाओं को ₹3,000 महीना। पुराने लाभार्थियों का क्या होगा, पात्रता और आवेदन की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "लक्ष्मीर भंडार 2026: अब अन्नपूर्णा भंडार, ₹3,000 महीना; पुराने लाभार्थी क्या करें",
  lead: "पश्चिम बंगाल की लक्ष्मीर भंडार योजना में महिला मुखिया को हर महीने आर्थिक सहायता मिलती थी। मई 2026 में बनी नई राज्य सरकार ने इसकी जगह <strong>अन्नपूर्णा भंडार</strong> योजना शुरू की है, जिसमें पात्र महिलाओं को <strong>₹3,000 प्रति माह</strong> DBT से देने की घोषणा है (लक्ष्मीर भंडार में आम तौर पर ₹1,500 मिलते थे)। रिपोर्टों के अनुसार लक्ष्मीर भंडार की लाभार्थियों को जांच के बाद नई योजना से जोड़ा जा रहा है।",
  facts: [
    ["राज्य", "पश्चिम बंगाल"],
    ["अब योजना", "अन्नपूर्णा भंडार (जून 2026 से)"],
    ["राशि", "₹3,000 प्रति माह (घोषणा)"],
    ["उम्र", "25 से 60 साल (रिपोर्ट के अनुसार)"],
  ],
  notice: "लक्ष्मीर भंडार अब अन्नपूर्णा भंडार में बदल रही है। नियम और भुगतान की तारीखें राज्य सरकार की ताज़ा अधिसूचना से तय होती हैं; यहां दी गई जानकारी समाचार रिपोर्टों पर आधारित है, आधिकारिक पुष्टि BDO या नगरपालिका कार्यालय से करें।",
  sections: [
    {
      id: "kya-badla",
      title: "क्या बदला है",
      list: [
        "<strong>मई 2026:</strong> राज्य मंत्रिमंडल ने अन्नपूर्णा भंडार योजना को मंज़ूरी दी; लागू करने की तारीख 1 जून 2026 रखी गई।",
        "<strong>27 मई 2026</strong> से आवेदन फॉर्म बांटे गए; एक रिपोर्ट के अनुसार आवेदन 25 अगस्त 2026 तक लिए गए।",
        "<strong>राशि:</strong> ₹3,000 प्रति माह, आधार से जुड़े बैंक खाते में।",
        "<strong>लक्ष्मीर भंडार की लाभार्थी:</strong> सरकार के अनुसार पुरानी सूची की जांच होगी और पात्र महिलाओं को नई योजना से जोड़ा जाएगा। नई योजना पूरी तरह लागू होने तक पुरानी व्यवस्था चलने की बात भी कही गई।",
        "सितंबर 2026 की किस्त की घोषणा मुख्यमंत्री ने की थी।",
      ],
    },
    {
      id: "patrata",
      title: "कौन पात्र है (रिपोर्टों के अनुसार)",
      list: [
        "पश्चिम बंगाल की निवासी महिला, उम्र <strong>25 से 60 साल</strong>।",
        "परिवार आयकर दाता न हो; कम आय वाले परिवार।",
        "आधार से जुड़ा अपना बैंक खाता (DBT के लिए)।",
        "सरकारी नौकरी/पेंशन जैसी अपात्रता की पूरी सूची सरकारी अधिसूचना में देखें।",
      ],
      callout: { kind: "info", html: "60 साल पूरे होने पर महिलाएं आम तौर पर वृद्धावस्था पेंशन की ओर जाती हैं। देखें <a href=\"/states/west-bengal-senior-citizen-card.html\">पश्चिम बंगाल वरिष्ठ नागरिक गाइड</a>।" },
    },
    {
      id: "kya-karen",
      title: "अभी क्या करें",
      steps: [
        "बैंक जाकर पक्का करें कि आपका खाता चालू है, <strong>आधार से जुड़ा</strong> है और DBT के लिए सक्षम है।",
        "लक्ष्मीर भंडार की लाभार्थी हैं और पैसा रुका है तो BDO कार्यालय (गांव) या नगरपालिका/वार्ड कार्यालय (शहर) में अपने आवेदन की स्थिति पूछें।",
        "नया आवेदन या सुधार हो तो सरकारी कैंप/कार्यालय में ही फॉर्म जमा करें और पावती लें।",
        "पासबुक या SMS से किस्त आने की पुष्टि करें।",
      ],
      callout: { kind: "warn", html: "फॉर्म मुफ्त है। कोई पैसे लेकर नाम जुड़वाने का दावा करे तो उस पर भरोसा न करें और BDO/SDO से शिकायत करें।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "आधार कार्ड",
        "बैंक पासबुक (आधार से जुड़ा खाता)",
        "राशन कार्ड जैसे परिवार के कागज़ (जो मांगा जाए)",
        "SC/ST हों तो जाति प्रमाण पत्र",
        "फोटो और चालू मोबाइल नंबर",
      ],
    },
  ],
  official: [
    { href: "https://wb.gov.in/", title: "पश्चिम बंगाल सरकार" },
    { href: "https://edistrict.wb.gov.in/", title: "ई-डिस्ट्रिक्ट पश्चिम बंगाल (प्रमाण पत्र)" },
  ],
  faq: [
    { q: "क्या लक्ष्मीर भंडार बंद हो गई?", a: "नई सरकार ने इसकी जगह अन्नपूर्णा भंडार योजना शुरू की है, जिसमें ₹3,000 महीना देने की घोषणा है। पुरानी लाभार्थियों को जांच के बाद नई योजना से जोड़ने की बात कही गई है।" },
    { q: "अन्नपूर्णा भंडार में कितने पैसे मिलते हैं?", a: "घोषणा के अनुसार पात्र महिलाओं को ₹3,000 प्रति माह, आधार से जुड़े बैंक खाते में।" },
    { q: "कौन आवेदन कर सकता है?", a: "रिपोर्टों के अनुसार पश्चिम बंगाल की 25 से 60 साल की महिलाएं, जिनका परिवार आयकर दाता नहीं है। अंतिम नियम सरकारी अधिसूचना से तय होते हैं।" },
    { q: "पैसा नहीं आया तो क्या करें?", a: "बैंक में आधार-सीडिंग और DBT जांचें, फिर BDO या नगरपालिका कार्यालय में अपनी स्थिति पूछें।" },
  ],
  related: [
    { href: "/states/west-bengal.html", emoji: "🗺️", title: "पश्चिम बंगाल की सेवाएं", text: "राज्य की सभी गाइड" },
    { href: "/service/wb-kanyashree-prakalpa.html", emoji: "🎓", title: "कन्याश्री / कन्या रत्न", text: "छात्राओं के लिए" },
    { href: "/states/west-bengal-ration-card.html", emoji: "🍚", title: "पश्चिम बंगाल राशन कार्ड", text: "आवेदन और सुधार" },
    { href: "/states/west-bengal-caste-certificate.html", emoji: "🪪", title: "पश्चिम बंगाल जाति प्रमाण पत्र", text: "SC/ST/OBC" },
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "🏦", title: "जन धन खाता", text: "DBT के लिए बैंक खाता" },
  ],
  aside: [
    { href: "/states/west-bengal.html", label: "🗺️ पश्चिम बंगाल गाइड" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
