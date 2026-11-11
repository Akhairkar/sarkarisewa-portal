import type { DocGuide } from "./types";

// Sources (checked 11 Nov 2026; epfindia.gov.in and PIB not reachable from here):
// Business Today, 18 Dec 2025: Labour Minister Mansukh Mandaviya told ABP News
// "You can already take 75% immediately, but before March 2026, we'll add ATM
// and UPI options". India TV News, 10 Feb 2026 (unnamed sources): a dedicated
// app planned "from April 2026"; the eligible EPF balance would show in the app
// and be moved to the member's seeded bank account with the linked UPI PIN; part
// of the balance stays frozen; EPFO cannot pay out directly because it has no
// banking licence; tested with 100 dummy accounts; UAN portal and UMANG stay.
// Outlook Money, 8 Oct 2026: EPFO has started testing the UPI withdrawal with
// banks as part of EPFO 3.0; "yet to be officially rolled out"; likely by the
// end of 2026; earlier expected by April 2026 so delayed; up to 75% via UPI PIN,
// minimum 25% must stay. EPF Scheme 2026 reports (c4scourses.in, officerspulse.com)
// say the scheme formally recognises digital services incl. UPI withdrawals and
// WhatsApp services. No official launch date, limit or app name was found, and
// no ATM details beyond the minister's remark.
export const epfoUpiAtmPfWithdrawal: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "EPFO", href: "/service/epfo.html" },
    { label: "PF UPI / ATM से निकासी" },
  ],
  docHi: "PF UPI / ATM से निकासी",
  title: "PF UPI और ATM से कब निकलेगा? EPFO 3.0 का हाल नवंबर 2026",
  description: "EPFO की UPI और ATM से PF निकासी अभी शुरू नहीं हुई है: टेस्टिंग चल रही है, इस साल के आखिर तक आने की खबर है। 75% सीमा, 25% बैलेंस, अब तक का सच और तब तक कैसे निकालें।",
  published: "2026-11-11",
  modified: "2026-11-11",
  verified: "11 नवंबर 2026",
  h1: "PF UPI और ATM से निकासी: शुरू हुई या नहीं? EPFO 3.0 का ताज़ा हाल",
  lead: "<strong>अभी नहीं।</strong> 8 अक्टूबर 2026 की एक रिपोर्ट के अनुसार EPFO बैंकों के साथ UPI से PF निकासी की <strong>टेस्टिंग</strong> कर रहा है, यह सुविधा आधिकारिक तौर पर <strong>अभी शुरू नहीं हुई</strong> है और इस साल के आखिर तक आने की उम्मीद है। पहले इसे मार्च-अप्रैल 2026 तक आना था, यानी इसमें देरी हुई है। इस पेज में हम बताते हैं कि अब तक क्या-क्या कहा गया है, क्या पक्का है और क्या नहीं, और तब तक PF कैसे निकालें।",
  facts: [
    ["शुरू हुई?", "नहीं, टेस्टिंग में (8 अक्टूबर 2026 की रिपोर्ट)"],
    ["उम्मीद", "2026 के आखिर तक (आधिकारिक तारीख नहीं)"],
    ["सीमा (रिपोर्ट)", "बैलेंस का 75% तक, 25% रखना ज़रूरी"],
    ["तब तक", "UAN पोर्टल या UMANG से क्लेम"],
  ],
  notice: "<strong>सावधान:</strong> अभी UPI या ATM से PF निकालने की कोई आधिकारिक सुविधा नहीं है। जो ऐप, लिंक या कॉल \"UPI से PF निकालने\" का दावा करे, उस पर भरोसा न करें और अपना UAN, OTP या UPI PIN किसी को न दें।",
  sections: [
    {
      id: "haal",
      title: "अब तक क्या हुआ: तारीख के हिसाब से",
      table: {
        head: ["कब", "क्या कहा गया", "किसने"],
        rows: [
          ["18 दिसंबर 2025", "\"आप 75% तुरंत ले सकते हैं, पर मार्च 2026 से पहले ATM और UPI के विकल्प जोड़ेंगे\"", "श्रम मंत्री मनसुख मांडविया (ABP News को, Business Today के अनुसार)"],
          ["10 फरवरी 2026", "अप्रैल 2026 से अलग ऐप की योजना, 100 नकली खातों पर टेस्टिंग; अभी लॉन्च नहीं", "India TV, अज्ञात सूत्रों के हवाले से"],
          ["29 जून 2026", "EPF Scheme 2026 में डिजिटल सेवाओं (UPI निकासी, WhatsApp सेवा) को औपचारिक मान्यता, खबरों के अनुसार", "EPF Scheme 2026 पर Business Standard-आधारित रिपोर्टें"],
          ["8 अक्टूबर 2026", "बैंकों के साथ टेस्टिंग शुरू; आधिकारिक रोलआउट बाकी; 2026 के आखिर तक आने की संभावना", "Outlook Money"],
        ],
      },
      callout: { kind: "info", html: "इनमें से कोई भी EPFO या श्रम मंत्रालय की ताज़ा आधिकारिक घोषणा नहीं है। लॉन्च की पक्की तारीख, ऐप का नाम और सीमा हमें किसी आधिकारिक स्रोत में नहीं मिली।" },
    },
    {
      id: "kaise-chalega",
      title: "रिपोर्टों के अनुसार यह कैसे काम करेगा",
      list: [
        "आपकी <strong>निकासी लायक PF राशि</strong> ऐप में दिखेगी और उसे आपके UAN से जुड़े <strong>बैंक खाते</strong> में UPI PIN से भेजा जा सकेगा।",
        "बैलेंस का <strong>कम से कम 25%</strong> खाते में रहेगा; आप लगभग <strong>75% तक</strong> निकाल सकेंगे।",
        "EPFO सीधे पैसा नहीं देगा, क्योंकि उसके पास बैंकिंग लाइसेंस नहीं है। इसलिए पैसा आपके बैंक खाते में जाएगा।",
        "UAN पोर्टल और UMANG ऐप चालू रहेंगे।",
        "ATM से निकासी के बारे में श्रम मंत्री के बयान के अलावा हमें कोई जानकारी नहीं मिली: न तरीका, न सीमा, न तारीख।",
      ],
      callout: { kind: "warn", html: "ऊपर की बातें ज़्यादातर अज्ञात सूत्रों और खबरों पर हैं। लॉन्च के समय इनमें बदलाव हो सकता है।" },
    },
    {
      id: "abhi-kya",
      title: "अभी PF कैसे निकालें",
      steps: [
        "<a href=\"https://unifiedportal-mem.epfindia.gov.in/memberinterface/\" target=\"_blank\" rel=\"noopener nofollow\">EPFO मेंबर पोर्टल</a> या UMANG ऐप में UAN से लॉगिन करें।",
        "देखें कि UAN सक्रिय है और आधार, बैंक खाता और PAN का KYC पूरा है।",
        "क्लेम का विकल्प चुनकर अपनी श्रेणी और राशि भरें और आधार OTP से जमा करें।",
        "क्लेम की स्थिति पोर्टल पर देखते रहें।",
      ],
      callout: { kind: "info", html: "निकासी के नए नियम (25% बैलेंस, 12 महीने की सेवा, 3 श्रेणी) <a href=\"/service/epf-withdrawal-new-rules-2026.html\">इस गाइड</a> में हैं।" },
    },
    {
      id: "taiyari",
      title: "लॉन्च से पहले क्या तैयार रखें",
      list: [
        "<strong>UAN सक्रिय</strong> रखें और उसका पासवर्ड याद रखें।",
        "<strong>आधार, बैंक खाता और PAN</strong> UAN से जुड़े और KYC में सत्यापित हों।",
        "UAN से जुड़ा <strong>मोबाइल नंबर चालू</strong> हो, क्योंकि OTP वहीं आता है।",
        "बैंक खाता वही हो जो UAN में दर्ज है और UPI से जुड़ा हो।",
      ],
    },
    {
      id: "thagi",
      title: "ठगी से कैसे बचें",
      list: [
        "जब तक EPFO की साइट या UMANG पर आधिकारिक घोषणा न दिखे, \"UPI से PF निकालें\" वाले किसी ऐप या लिंक पर भरोसा न करें।",
        "UAN, आधार OTP, UPI PIN या बैंक डिटेल किसी कॉल या WhatsApp संदेश पर न बताएं।",
        "ऐप सिर्फ आधिकारिक स्रोत से डाउनलोड करें; अनजान APK या लिंक न खोलें।",
        "शिकायत के लिए <a href=\"https://epfigms.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">EPFiGMS</a> पोर्टल है।",
      ],
    },
  ],
  official: [
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", title: "EPFO यूनिफाइड मेंबर पोर्टल", note: "UAN, KYC, क्लेम" },
    { href: "https://www.epfindia.gov.in/", title: "कर्मचारी भविष्य निधि संगठन (EPFO)", note: "आधिकारिक घोषणाएं" },
    { href: "https://web.umang.gov.in/", title: "UMANG ऐप", note: "EPFO पासबुक और क्लेम" },
    { href: "https://epfigms.gov.in/", title: "EPFiGMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "क्या UPI से PF निकासी शुरू हो गई है?", a: "नहीं। 8 अक्टूबर 2026 की रिपोर्ट के अनुसार EPFO बैंकों के साथ टेस्टिंग कर रहा है और सुविधा आधिकारिक रूप से शुरू नहीं हुई है। आधिकारिक घोषणा के लिए EPFO की साइट देखें।" },
    { q: "UPI से PF निकासी कब शुरू होगी?", a: "रिपोर्टों के अनुसार 2026 के आखिर तक आ सकती है। पहले इसे मार्च-अप्रैल 2026 तक आना था, इसलिए देरी हुई है। आधिकारिक तारीख की घोषणा नहीं हुई है।" },
    { q: "UPI से कितना PF निकल सकेगा?", a: "रिपोर्टों के अनुसार बैलेंस का लगभग 75% तक, क्योंकि 25% न्यूनतम बैलेंस खाते में रखना ज़रूरी है। यह सीमा आधिकारिक रूप से घोषित नहीं हुई है।" },
    { q: "क्या ATM से भी PF निकलेगा?", a: "श्रम मंत्री ने दिसंबर 2025 में ATM और UPI दोनों विकल्पों की बात कही थी। ATM पर तरीका, सीमा या तारीख की जानकारी हमें नहीं मिली।" },
    { q: "UPI से PF निकासी के लिए क्या चाहिए होगा?", a: "रिपोर्टों के अनुसार UAN से जुड़ा बैंक खाता और UPI PIN। अभी UAN सक्रिय रखें, KYC पूरा रखें और मोबाइल नंबर चालू रखें।" },
    { q: "अभी PF कैसे निकालें?", a: "EPFO मेंबर पोर्टल या UMANG ऐप पर UAN से लॉगिन करके क्लेम करें। इसके लिए UAN सक्रिय और KYC पूरा होना चाहिए।" },
    { q: "क्या \"UPI से PF निकालें\" वाले ऐप सुरक्षित हैं?", a: "अभी नहीं, क्योंकि आधिकारिक सुविधा शुरू नहीं हुई है। ऐसे ऐप या लिंक पर UAN, OTP या UPI PIN न डालें।" },
  ],
  related: [
    { href: "/service/epf-withdrawal-new-rules-2026.html", emoji: "💸", title: "PF निकासी के नए नियम 2026", text: "3 श्रेणी, 25% बैलेंस" },
    { href: "/service/epfo.html", emoji: "🏦", title: "EPFO / PF गाइड", text: "UAN, KYC, पासबुक" },
    { href: "/tools/epf-calculator.html", emoji: "🧮", title: "EPF कैलकुलेटर", text: "ब्याज और रिटायरमेंट रकम" },
    { href: "/service/upi-payments.html", emoji: "📲", title: "UPI पेमेंट", text: "UPI से सुरक्षित भुगतान" },
  ],
  aside: [
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", label: "🏦 EPFO मेंबर पोर्टल" },
    { href: "/service/epf-withdrawal-new-rules-2026.html", label: "💸 निकासी के नए नियम" },
  ],
};
