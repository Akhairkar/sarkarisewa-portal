import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; morth.gov.in and parivahan.gov.in not
// reachable from the sandbox, search-result extracts used): MoRTH "Standard
// Operating Procedure" for validation of transport related digital documents
// (morth.gov.in circular; also on Vikaspedia): Rule 139 of the Central Motor
// Vehicles Rules, 1989 amended on 02.11.2018 to allow documents in electronic
// form; DigiLocker / mParivahan records treated at par with originals under
// the IT Act, 2000; mParivahan shows DL, RC, fitness, insurance and permit
// validity in real time; enforcement officers verify with the eChallan /
// mParivahan app; if a virtual copy or validity is not shown, carry the paper
// document. Tribune (Punjab transport department accepting mParivahan /
// DigiLocker DL and RC). Old page's helpline "1800-11-0001 / 1947" and
// "application form PDF" were not verified and are dropped: there is no
// application for a virtual DL/RC.
export const mparivahanVirtualRcDl: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "mParivahan वर्चुअल RC/DL" },
  ],
  docHi: "mParivahan वर्चुअल RC/DL",
  title: "एम-परिवहन वर्चुअल आरसी व लाइसेंस (mParivahan Virtual RC/DL)",
  description: "ट्रैफिक पुलिस चैकिंग हेतु डिजिटल ड्राइविंग लाइसेंस व आरसी अपने फोन में रखें। mParivahan ऐप में वर्चुअल DL/RC कैसे जोड़ें, कानूनी मान्यता और आम दिक्कतें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "mParivahan वर्चुअल RC और ड्राइविंग लाइसेंस: फोन में कैसे रखें और कहां मान्य है",
  lead: "mParivahan सड़क परिवहन और राजमार्ग मंत्रालय (MoRTH) का मोबाइल ऐप है, जिसमें आप अपना ड्राइविंग लाइसेंस (DL) और गाड़ी की RC डिजिटल रूप में रख सकते हैं। केंद्रीय मोटर वाहन नियम के नियम 139 में 2018 के संशोधन के बाद mParivahan या DigiLocker में दिखने वाले कागज़ मूल कागज़ के बराबर माने जाते हैं। इसके लिए कोई आवेदन या फीस नहीं है; बस ऐप में मोबाइल नंबर से लॉगिन करके अपना DL/RC जोड़ना होता है।",
  facts: [
    ["ऐप", "mParivahan (MoRTH/NIC)"],
    ["कानूनी आधार", "CMVR नियम 139 (संशोधन 2 नवंबर 2018), IT अधिनियम 2000"],
    ["फीस", "कोई नहीं"],
    ["दूसरा विकल्प", "DigiLocker"],
  ],
  sections: [
    {
      id: "kaise",
      title: "ऐप में वर्चुअल DL और RC कैसे जोड़ें",
      steps: [
        "Google Play Store या Apple App Store से <strong>mParivahan</strong> ऐप डाउनलोड करें। प्रकाशक भारत सरकार/NIC है, यह जांच लें।",
        "अपने मोबाइल नंबर से OTP डालकर साइन-अप/लॉगिन करें।",
        "<strong>DL जोड़ने के लिए:</strong> ड्राइविंग लाइसेंस नंबर और जन्म तारीख डालें; रिकॉर्ड मिलने पर उसे \"My Dashboard\"/अपने प्रोफाइल में जोड़ें। इसी से वर्चुअल DL बनता है।",
        "<strong>RC जोड़ने के लिए:</strong> गाड़ी का रजिस्ट्रेशन नंबर डालें; मालिकाना पुष्टि के लिए चेसिस/इंजन नंबर के आखिरी अंक मांगे जा सकते हैं।",
        "जुड़ने के बाद वर्चुअल DL/RC पर QR कोड दिखता है, जिसे ट्रैफिक पुलिस स्कैन करके जांच सकती है।",
      ],
      callout: { kind: "info", html: "ऐप के स्क्रीन और बटन के नाम नए वर्ज़न में बदल सकते हैं; तरीका वही रहता है: लॉगिन, फिर DL/RC नंबर डालकर अपने खाते में जोड़ना।" },
    },
    {
      id: "manyata",
      title: "कहां मान्य है",
      list: [
        "केंद्रीय मोटर वाहन नियम, 1989 के <strong>नियम 139</strong> में 2 नवंबर 2018 के संशोधन से कागज़ इलेक्ट्रॉनिक रूप में दिखाने की अनुमति मिली।",
        "MoRTH की मानक प्रक्रिया (SOP) के अनुसार DigiLocker या mParivahan में दिखने वाले रिकॉर्ड IT अधिनियम, 2000 के तहत मूल कागज़ के बराबर हैं।",
        "जांच करने वाले अधिकारी eChallan या mParivahan ऐप से QR/नंबर से वैधता देखते हैं।",
        "<strong>फोटो या स्कैन कॉपी मान्य नहीं</strong> है; ऐप/DigiLocker के अंदर दिखने वाला रिकॉर्ड ही दिखाएं।",
      ],
      callout: { kind: "warn", html: "अगर ऐप या DigiLocker में आपका DL/RC या उसकी वैधता (बीमा, फिटनेस, PUC, परमिट) <strong>नहीं दिख रही</strong>, तो कागज़ी दस्तावेज़ साथ रखना ज़रूरी है। गाड़ी चलाते समय फोन में इंटरनेट न हो तो दिक्कत हो सकती है, इसलिए पहले से ऐप खोलकर देख लें।" },
    },
    {
      id: "samasya",
      title: "आम दिक्कतें और हल",
      list: [
        "<strong>DL नहीं मिल रहा:</strong> पुराना हाथ से लिखा/बुकलेट DL ऑनलाइन रिकॉर्ड (Sarathi) में न हो तो ऐप में नहीं आएगा। RTO जाकर DL का बैकलॉग/डिजिटल एंट्री करवाएं या parivahan.gov.in की Sarathi सेवाओं में देखें।",
        "<strong>RC में पुराना मालिक:</strong> गाड़ी खरीदी है तो RTO में ट्रांसफर ऑफ ओनरशिप पूरा करवाएं; उसके बाद ही आपके नाम से RC जुड़ेगी।",
        "<strong>मोबाइल नंबर गलत/पुराना:</strong> Vahan/Sarathi रिकॉर्ड में मोबाइल नंबर अपडेट करवाएं; parivahan.gov.in पर इसकी ऑनलाइन सेवा है।",
        "<strong>बीमा/PUC खत्म दिख रहा:</strong> नवीनीकरण के बाद रिकॉर्ड अपडेट होने में कुछ समय लग सकता है; तब तक कागज़ी कॉपी रखें।",
      ],
    },
  ],
  official: [
    { href: "https://parivahan.gov.in/", title: "परिवहन सेवा (MoRTH)", note: "Vahan (RC) और Sarathi (DL) सेवाएं" },
    { href: "https://morth.gov.in/", title: "सड़क परिवहन और राजमार्ग मंत्रालय" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "DL और RC का दूसरा मान्य विकल्प" },
  ],
  faq: [
    { q: "क्या mParivahan का वर्चुअल DL ट्रैफिक पुलिस मानती है?", a: "हां। CMVR नियम 139 में 2018 के संशोधन और MoRTH की SOP के अनुसार mParivahan या DigiLocker में दिखने वाले DL/RC मूल के बराबर माने जाते हैं। फोटो/स्क्रीनशॉट नहीं, ऐप का रिकॉर्ड दिखाएं।" },
    { q: "वर्चुअल DL/RC के लिए फीस या आवेदन लगता है?", a: "नहीं। ऐप में मोबाइल नंबर से लॉगिन करके अपना DL और RC नंबर जोड़ना होता है; यह मुफ्त है।" },
    { q: "mParivahan और DigiLocker में क्या फर्क है?", a: "दोनों मान्य हैं। mParivahan परिवहन मंत्रालय का ऐप है जो वाहन से जुड़ी वैधता भी दिखाता है; DigiLocker में आप दूसरे सरकारी कागज़ भी रख सकते हैं।" },
    { q: "ऐप में DL नहीं दिख रहा, क्या करूं?", a: "आपका DL Sarathi के ऑनलाइन रिकॉर्ड में न हो तो RTO से डिजिटल एंट्री करवाएं। तब तक कागज़ी DL साथ रखें।" },
  ],
  related: [
    { href: "/service/driving-licence.html", emoji: "🪪", title: "ड्राइविंग लाइसेंस", text: "नया DL और नवीनीकरण" },
    { href: "/service/digilocker.html", emoji: "🗂️", title: "डिजिलॉकर", text: "DL/RC डिजिटल रखें" },
    { href: "/service/smart-card-driving-license.html", emoji: "💳", title: "स्मार्ट कार्ड DL", text: "कार्ड वाला लाइसेंस" },
    { href: "/service/fastag-registration.html", emoji: "🚗", title: "फास्टैग", text: "टोल के लिए FASTag" },
  ],
  aside: [
    { href: "https://parivahan.gov.in/", label: "🚗 परिवहन सेवा पोर्टल" },
    { href: "/service/digilocker.html", label: "🗂️ डिजिलॉकर गाइड" },
  ],
};
