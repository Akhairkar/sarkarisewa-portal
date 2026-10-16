import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic blog post (same URL). Overlaps
// with /service/abha-health-id.html and /service/abha-health-card.html, so this
// post takes the "should I make one / common problems" angle and links there.
// Sources (checked 16 Oct 2026; abdm.gov.in pages not reachable from the
// sandbox, so facts reused from the verified ABHA guides in
// web/src/guides/doc/abha-health-id.ts and abha-health-card.ts: 14-digit
// number, free and voluntary, Aadhaar OTP or driving-licence route,
// consent-based sharing, Scan and Share, helpline 1800-11-4477 / 14477).
// Deactivate/delete option and login/retrieval with mobile or Aadhaar OTP:
// ABHA FAQ (Bandhan Life PDF reproducing ABDM FAQ), Aditya Birla Health
// Insurance ABHA page, ABDM developer forum. Menu names not quoted exactly as
// they change.

export const abhaHealthIdWhatItIsHowToCreate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "ABHA हेल्थ आईडी क्या है" },
  ],
  docHi: "ABHA हेल्थ आईडी",
  title: "ABHA हेल्थ आईडी: यह क्या है और आपको इसकी जरूरत क्यों हो सकती है",
  description: "एक 14-अंकों की संख्या जो अलग-अलग अस्पतालों में आपके मेडिकल रिकॉर्ड को जोड़ सकती है। जानिए ABHA असल में क्या करता है और कुछ मिनटों में अपना कैसे बनाएं।",
  published: "2026-07-12",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "ABHA हेल्थ आईडी: क्या है, किसके काम की है और बनाते समय आने वाली दिक्कतें",
  lead: "ABHA (आयुष्मान भारत हेल्थ अकाउंट) 14 अंकों का मुफ्त स्वास्थ्य खाता नंबर है, जिससे अलग-अलग अस्पताल और लैब की रिपोर्ट एक जगह आपके फोन में जुड़ सकती हैं। इसे बनाना स्वैच्छिक है और रिपोर्ट सिर्फ आपकी सहमति से किसी डॉक्टर को दिखती हैं। आधार और आधार से जुड़ा मोबाइल हो तो abha.abdm.gov.in पर कुछ मिनट में बन जाता है। यह मुफ्त इलाज का कार्ड नहीं है; मुफ्त इलाज आयुष्मान भारत (PM-JAY) कार्ड से मिलता है।",
  facts: [
    ["क्या है", "14 अंकों का डिजिटल स्वास्थ्य खाता नंबर"],
    ["फीस", "मुफ्त, स्वैच्छिक"],
    ["कहां बनता है", "<a href=\"https://abha.abdm.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">abha.abdm.gov.in</a> या ABDM से जुड़ा स्वास्थ्य ऐप"],
    ["हेल्पलाइन", "1800-11-4477 / 14477"],
  ],
  sections: [
    {
      id: "kiske-kaam",
      title: "ABHA किसके काम की है",
      intro: "ABHA सबसे ज़्यादा उन लोगों के काम की है जो बार-बार डॉक्टर या जांच के लिए जाते हैं:",
      list: [
        "<strong>बुज़ुर्ग और लंबी बीमारी वाले</strong> (शुगर, BP, दिल, किडनी): पुरानी रिपोर्ट फोन में रहेंगी, नए डॉक्टर को फाइल ढोकर नहीं दिखानी पड़ेगी।",
        "<strong>गर्भवती महिलाएं और छोटे बच्चों के माता-पिता:</strong> जांच और टीकों का रिकॉर्ड एक जगह।",
        "<strong>जो लोग शहर बदलते रहते हैं:</strong> नया अस्पताल आपकी सहमति से पुराना रिकॉर्ड देख सकता है।",
        "<strong>बड़े सरकारी अस्पतालों में OPD:</strong> कई ABDM से जुड़े अस्पतालों में काउंटर का QR कोड स्कैन करके (Scan and Share) पर्ची के लिए जानकारी भेजी जा सकती है, जिससे लाइन कम हो सकती है।",
      ],
      callout: { kind: "info", html: "ABHA का फायदा तभी है जब आपका अस्पताल/लैब ABDM से जुड़ा हो। जो नहीं जुड़ा, उसकी रिपोर्ट अपने आप ABHA में नहीं आएगी।" },
    },
    {
      id: "kya-nahi",
      title: "ABHA क्या नहीं है",
      list: [
        "<strong>मुफ्त इलाज का कार्ड नहीं:</strong> ₹5 लाख तक मुफ्त इलाज आयुष्मान भारत PM-JAY कार्ड (या 70+ के लिए वय वंदना कार्ड) से मिलता है। ABHA बनाने से कोई योजना नहीं मिलती।",
        "<strong>बीमा नहीं:</strong> ABHA कोई पैसा या कवर नहीं देता।",
        "<strong>अनिवार्य नहीं:</strong> ABHA न होने पर किसी अस्पताल में इलाज से मना नहीं किया जा सकता; यह आपकी मर्ज़ी है।",
      ],
    },
    {
      id: "banayen",
      title: "ABHA कैसे बनाएं (संक्षेप में)",
      steps: [
        "<a href=\"https://abha.abdm.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">abha.abdm.gov.in</a> पर <strong>Create ABHA Number</strong> चुनें।",
        "आधार नंबर डालें और आधार से जुड़े मोबाइल पर आया OTP भरें।",
        "अपना मोबाइल नंबर जोड़ें और ABHA पता (जैसे naam@abdm) चुनें।",
        "ABHA कार्ड डाउनलोड करें। पूरी विधि: <a href=\"/service/abha-health-card.html\">ABHA हेल्थ कार्ड गाइड</a>।",
      ],
    },
    {
      id: "dikkat",
      title: "बनाते समय आम दिक्कतें और उपाय",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["आधार OTP नहीं आ रहा", "OTP उसी मोबाइल पर आता है जो आधार से जुड़ा है। नंबर बंद या बदला है तो पहले आधार केंद्र पर मोबाइल अपडेट कराएं, या ड्राइविंग लाइसेंस वाला तरीका अपनाएं।"],
          ["आधार नहीं है", "ड्राइविंग लाइसेंस से आवेदन शुरू होता है, पर ABHA नंबर के लिए ABDM से जुड़े स्वास्थ्य केंद्र पर पहचान की पुष्टि करवानी होती है।"],
          ["\"ABHA पहले से बना है\" दिखा रहा", "एक आधार से एक ही ABHA नंबर बनता है। पोर्टल पर लॉग-इन विकल्प में आधार/मोबाइल OTP से पुराना खाता खोलें और कार्ड फिर से डाउनलोड करें।"],
          ["ABHA नंबर भूल गए", "ABHA पोर्टल या ऐप पर मोबाइल या आधार OTP से लॉग-इन करें; प्रोफाइल में ABHA नंबर और कार्ड मिल जाएगा।"],
          ["नाम/जन्म तिथि गलत", "आधार से बने ABHA में जानकारी आधार से आती है। पहले आधार में सुधार कराएं, फिर ABHA प्रोफाइल अपडेट करें।"],
          ["अस्पताल की रिपोर्ट नहीं दिख रही", "देखें कि अस्पताल ABDM से जुड़ा है या नहीं, और रजिस्ट्रेशन के समय ABHA नंबर/पता बताया था या नहीं। ऐप में आया link अनुरोध मंज़ूर करें।"],
        ],
      },
    },
    {
      id: "band-karna",
      title: "ABHA नहीं चाहिए तो",
      intro: "ABHA स्वैच्छिक है। पोर्टल पर लॉग-इन करके प्रोफाइल/खाता सेटिंग में उसे कुछ समय के लिए बंद (deactivate) करने या हमेशा के लिए हटाने (delete) का विकल्प मिलता है। बंद किया गया खाता बाद में फिर चालू हो सकता है, लेकिन हटाने पर उससे जुड़ा रिकॉर्ड भी चला जाता है, इसलिए सोच-समझकर चुनें।",
      callout: { kind: "warn", html: "ABHA बनवाने के नाम पर पैसे मांगने वाले या फोन पर OTP पूछने वाले से सावधान रहें। ABHA मुफ्त है; CSC पर मदद लें तो सिर्फ मामूली सेवा शुल्क लग सकता है।" },
    },
  ],
  official: [
    { href: "https://abha.abdm.gov.in/", title: "ABHA पोर्टल", note: "ABHA बनाना, लॉग-इन, कार्ड डाउनलोड" },
    { href: "https://abdm.gov.in/", title: "आयुष्मान भारत डिजिटल मिशन (ABDM)", note: "हेल्पलाइन 1800-11-4477 / 14477" },
  ],
  faq: [
    { q: "क्या ABHA बनवाना ज़रूरी है?", a: "नहीं, यह स्वैच्छिक है। यह उनके काम का है जो बार-बार इलाज/जांच कराते हैं और रिपोर्ट एक जगह रखना चाहते हैं।" },
    { q: "ABHA हेल्थ आईडी और ABHA कार्ड में क्या फर्क है?", a: "कोई फर्क नहीं। पहले इसे हेल्थ आईडी कहा जाता था; अब नाम ABHA नंबर है और उसका प्रिंट/PDF ABHA कार्ड कहलाता है।" },
    { q: "क्या ABHA से मुफ्त इलाज मिलता है?", a: "नहीं। मुफ्त इलाज आयुष्मान भारत PM-JAY कार्ड से मिलता है, जिसके लिए परिवार का नाम पात्रता सूची में होना चाहिए। 70 साल से ऊपर के सभी लोगों के लिए वय वंदना कार्ड है।" },
    { q: "क्या ABHA बनाने में पैसे लगते हैं?", a: "नहीं, ABHA मुफ्त है।" },
    { q: "मेरी रिपोर्ट कौन देख सकता है?", a: "सिर्फ वही डॉक्टर या अस्पताल जिसे आप ऐप में सहमति दें, और उतने समय तक जितना आप तय करें। सहमति बाद में वापस भी ली जा सकती है।" },
  ],
  related: [
    { href: "/service/abha-health-id.html", emoji: "🏥", title: "ABHA स्वास्थ्य खाता गाइड", text: "रिकॉर्ड जोड़ना, सहमति, सुरक्षा" },
    { href: "/service/abha-health-card.html", emoji: "🪪", title: "ABHA हेल्थ कार्ड", text: "आधार से बनाएं, कार्ड डाउनलोड" },
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान भारत (PM-JAY)", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों का कार्ड" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://abha.abdm.gov.in/", label: "🏥 ABHA पोर्टल खोलें" },
    { href: "/service/abha-health-card.html", label: "🪪 ABHA कार्ड गाइड" },
  ],
};
