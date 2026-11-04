import type { DocGuide } from "../doc/types";

// Sources (checked 4 Nov 2026; board sites not reachable from the sandbox, so
// only dates several reports agree on are used; subject-wise day-by-day
// schedules are pointed to the official PDF):
// targetpublications.org, education.sakshi.com, mediamentor.co.in (calls it
// provisional), selectyouruniversity.com, collegedwar.com. MSBSHSE 2027: HSC
// theory 8 Feb - 16 Mar 2027, practical/oral/internal 20 Jan - 6 Feb (one says
// 21 Jan); SSC theory 15 Feb - 11 Mar 2027, practical 28 Jan - 13 Feb.
export const maharashtraBoardExam2027: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "Students", href: "/students/" },
    { label: "बोर्ड परीक्षा 2027", href: "/board-exam/" },
    { label: "महाराष्ट्र बोर्ड परीक्षा 2027 (SSC/HSC)" },
  ],
  docHi: "महाराष्ट्र बोर्ड परीक्षा 2027 (SSC/HSC)",
  title: "Maharashtra Board Exam 2027: HSC 8 फरवरी, SSC 15 फरवरी से, प्रैक्टिकल और हॉल टिकट",
  description: "महाराष्ट्र बोर्ड (MSBSHSE) 2027: HSC (12वीं) 8 फरवरी से 16 मार्च, SSC (10वीं) 15 फरवरी से 11 मार्च 2027; प्रैक्टिकल/ओरल जनवरी-फरवरी, हॉल टिकट, पास मार्क्स और तैयारी।",
  published: "2026-11-04",
  modified: "2026-11-04",
  verified: "4 नवंबर 2026",
  h1: "महाराष्ट्र बोर्ड परीक्षा 2027: SSC-HSC टाइम टेबल, प्रैक्टिकल, हॉल टिकट",
  lead: "<strong>महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडल (MSBSHSE)</strong> के अनुसार 2027 में <strong>HSC (12वीं)</strong> की लिखित परीक्षा <strong>8 फरवरी से 16 मार्च 2027</strong> और <strong>SSC (10वीं)</strong> की <strong>15 फरवरी से 11 मार्च 2027</strong> तक होगी। प्रैक्टिकल, ओरल और अंतर्गत मूल्यांकन जनवरी-फरवरी में होंगे। विषयवार वेळापत्रक <a href=\"https://mahahsscboard.in/\" target=\"_blank\" rel=\"noopener nofollow\">mahahsscboard.in</a> पर देखें।",
  facts: [["HSC (12वीं) लिखित", "8 फरवरी – 16 मार्च 2027"], ["SSC (10वीं) लिखित", "15 फरवरी – 11 मार्च 2027"], ["प्रैक्टिकल/ओरल", "HSC: 20 जनवरी – 6 फरवरी; SSC: 28 जनवरी – 13 फरवरी"], ["वेबसाइट", "<a href=\"https://mahahsscboard.in/\" target=\"_blank\" rel=\"noopener nofollow\">mahahsscboard.in</a>"]],
  notice: "कुछ स्रोत इस कार्यक्रम को अंतरिम (provisional) बता रहे हैं और विषयवार तारीखें अलग-अलग दिखा रहे हैं। अंतिम वेळापत्रक mahahsscboard.in पर आने पर उसी को मानें। यह साइट निजी है, बोर्ड की नहीं।",
  sections: [
    {
      id: "time-table",
      title: "महाराष्ट्र बोर्ड टाइम टेबल 2027: मुख्य तारीखें",
      table: { head: ["क्या", "HSC (12वीं)", "SSC (10वीं)"], rows: [["प्रैक्टिकल / ओरल / अंतर्गत मूल्यांकन", "20 जनवरी – 6 फरवरी 2027", "28 जनवरी – 13 फरवरी 2027"], ["लिखित परीक्षा", "8 फरवरी – 16 मार्च 2027", "15 फरवरी – 11 मार्च 2027"]] },
      callout: { kind: "info", html: "महाराष्ट्र बोर्ड में SSC को 10वीं और HSC को 12वीं कहते हैं। विज्ञान, वाणिज्य, कला और व्यावसायिक (MCVC) शाखाओं का वेळापत्रक अलग-अलग होता है।" },
    },
    {
      id: "download",
      title: "वेळापत्रक (टाइम टेबल) कैसे डाउनलोड करें",
      steps: ["<a href=\"https://mahahsscboard.in/\" target=\"_blank\" rel=\"noopener nofollow\">mahahsscboard.in</a> खोलें।", "<strong>HSC/SSC परीक्षा वेळापत्रक 2027</strong> वाला लिंक खोलें।", "अपनी शाखा (Science/Commerce/Arts) की PDF डाउनलोड करें।"],
    },
    {
      id: "hall-ticket",
      title: "हॉल टिकट कैसे मिलेगा",
      list: ["महाराष्ट्र बोर्ड में एडमिट कार्ड को <strong>हॉल टिकट</strong> कहते हैं; यह कॉलेज/स्कूल के लॉगिन से डाउनलोड होकर छात्रों को दिया जाता है।", "हॉल टिकट पर प्रधानाचार्य का हस्ताक्षर और मुहर ज़रूरी है।", "नाम, फोटो, विषय और परीक्षा केंद्र की गलती हो तो तुरंत स्कूल/कॉलेज को बताएं।"],
      callout: { kind: "ok", html: "12वीं साइंस के जो छात्र आगे इंजीनियरिंग/मेडिकल में आरक्षित सीट चाहते हैं, वे अभी से <a href=\"/service/maharashtra-caste-validity-certificate.html\">जात वैधता प्रमाणपत्र</a> का आवेदन कर दें।" },
    },
    {
      id: "niyam",
      title: "परीक्षा के दिन के ज़रूरी नियम",
      list: ["परीक्षा शुरू होने से कम से कम <strong>30 मिनट पहले</strong> केंद्र पहुंचें।", "मोबाइल फोन, स्मार्ट घड़ी, कैलकुलेटर (जहां मना हो) और कोई भी लिखा कागज़ साथ न ले जाएं; नकल पर परीक्षा रद्द हो सकती है।", "नीले/काले पेन, पेंसिल, रबर, स्केल और पारदर्शी पानी की बोतल रखें।", "प्रश्न-पत्र पढ़ने का समय मिलता है; उसका इस्तेमाल प्रश्न चुनने में करें।"],
    },
    {
      id: "pass",
      title: "पास होने के लिए कितने नंबर चाहिए",
      intro: "महाराष्ट्र बोर्ड में हर विषय में पास होने के लिए आमतौर पर कम से कम <strong>35% अंक</strong> चाहिए (सैद्धांतिक और प्रायोगिक मिलाकर, बोर्ड के नियम अनुसार)। एक-दो विषय में कम अंक आने पर <strong>पूरक/कम्पार्टमेंट परीक्षा</strong> का मौका मिलता है।",
      callout: { kind: "info", html: "पिछले वर्षों में HSC का रिजल्ट मई की शुरुआत और SSC का मई के बीच में आया है; 2027 की तारीख बोर्ड घोषित करेगा।" },
    },
    {
      id: "taiyari",
      title: "आखिरी 3 महीने की तैयारी: आसान योजना",
      list: ["<strong>नवंबर:</strong> पूरा सिलेबस एक बार खत्म करें; कमज़ोर अध्याय लिख लें।", "<strong>दिसंबर:</strong> पिछले 5 साल के प्रश्न-पत्र हल करें; मॉडल पेपर से समय देखकर लिखने का अभ्यास करें।", "<strong>जनवरी:</strong> प्रैक्टिकल फाइलें पूरी करें; कमज़ोर अध्याय दोबारा पढ़ें।", "<strong>परीक्षा से पहले:</strong> नया कुछ न पढ़ें, सिर्फ दोहराएं; पूरी नींद लें।"],
      html: "बोर्ड का आधिकारिक टाइम टेबल PDF हमेशा <a href=\"https://mahahsscboard.in/\" target=\"_blank\" rel=\"noopener nofollow\">mahahsscboard.in</a> से ही डाउनलोड करें; WhatsApp पर घूमने वाले नकली टाइम टेबल से सावधान रहें।",
    },
  ],
  official: [{"href": "https://mahahsscboard.in/", "title": "महाराष्ट्र राज्य मंडल (MSBSHSE)", "note": "वेळापत्रक, हॉल टिकट, निकाल"}],
  faq: [{"q": "महाराष्ट्र HSC परीक्षा 2027 कब से है?", "a": "लिखित परीक्षा 8 फरवरी से 16 मार्च 2027 तक; प्रैक्टिकल 20 जनवरी से 6 फरवरी।"}, {"q": "महाराष्ट्र SSC परीक्षा 2027 कब से है?", "a": "लिखित परीक्षा 15 फरवरी से 11 मार्च 2027 तक; प्रैक्टिकल 28 जनवरी से 13 फरवरी।"}, {"q": "हॉल टिकट कहां से मिलेगा?", "a": "अपने स्कूल/कॉलेज से; वे बोर्ड की वेबसाइट से डाउनलोड करके देते हैं।"}, {"q": "पास होने के लिए कितने नंबर चाहिए?", "a": "हर विषय में आमतौर पर कम से कम 35%।"}],
  related: [{"href": "/service/maharashtra-caste-validity-certificate.html", "emoji": "📜", "title": "जात वैधता प्रमाणपत्र", "text": "12वीं साइंस वालों के लिए"}, {"href": "/board-exam/", "emoji": "📚", "title": "सभी बोर्ड परीक्षा 2027", "text": "राज्यवार टाइम टेबल"}, {"href": "/students/", "emoji": "🎓", "title": "Students Hub", "text": "छात्रवृत्ति, प्रमाण पत्र, टूल्स"}],
  aside: [{"href": "https://mahahsscboard.in/", "label": "📄 महाराष्ट्र बोर्ड वेळापत्रक"}, {"href": "/board-exam/", "label": "📚 सभी बोर्ड"}],
};
