import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): opportunities.rbi.org.in could not be opened
// from here, so the 2026 cycle dates are from exam-news reports (edutap.in on
// the 28/29 April 2026 notification; bankersadda.com on Phase 2 results):
// 60 posts (General 40, DEPR 10, DSIM 10), applications closed 20 May 2026,
// Phase I 13 June (General) / 14 June 2026 (DEPR, DSIM), Phase II 25 July
// (General) / 26 July 2026 (DEPR, DSIM), DEPR Phase II result 25 Aug 2026 with
// interview shortlist. The old page's "250+ posts" and "last date 15 July 2026"
// were wrong and are removed. Age/marks criteria, fee and pay are not stated
// because the 2026 notification text could not be read.
export const rbiGradeBOfficerRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "RBI Grade B 2026" },
  ],
  docHi: "RBI Grade B भर्ती 2026",
  title: "RBI Grade B Officer Recruitment 2026",
  description: "RBI Grade B Officer 2026: 60 पद (General, DEPR, DSIM), आवेदन 20 मई 2026 को बंद, Phase 1 और Phase 2 परीक्षा की तारीखें, चयन प्रक्रिया और रिजल्ट कहां देखें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "RBI Grade B Officer भर्ती 2026: पद, तारीखें, चयन प्रक्रिया और रिजल्ट",
  lead: "भारतीय रिज़र्व बैंक (RBI) ने 2026 में Officers in Grade B (Direct Recruitment) के कुल 60 पदों के लिए भर्ती निकाली थी: General के 40, DEPR के 10 और DSIM के 10। ऑनलाइन आवेदन 20 मई 2026 को बंद हो चुके हैं और Phase 1 व Phase 2 परीक्षा हो चुकी है। अब इंटरव्यू और अंतिम रिजल्ट का चरण है, जिसकी सूचना RBI की भर्ती वेबसाइट पर आती है।",
  facts: [
    ["कुल पद", "60 (General 40, DEPR 10, DSIM 10)"],
    ["आवेदन", "बंद (आखिरी तारीख 20 मई 2026)"],
    ["Phase 1", "13 जून (General), 14 जून 2026 (DEPR, DSIM)"],
    ["Phase 2", "25 जुलाई (General), 26 जुलाई 2026 (DEPR, DSIM)"],
  ],
  notice: "ये तारीखें परीक्षा-समाचार वेबसाइटों की रिपोर्ट से ली गई हैं, क्योंकि RBI की भर्ती वेबसाइट यहां से नहीं खुल सकी। अंतिम जानकारी के लिए <a href=\"https://opportunities.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">opportunities.rbi.org.in</a> पर RBI का नोटिस ही देखें।",
  sections: [
    {
      id: "pad",
      title: "पद और स्ट्रीम",
      table: {
        head: ["स्ट्रीम", "पूरा नाम", "पद"],
        rows: [
          ["General", "Officers in Grade B (DR) - General", "40"],
          ["DEPR", "Department of Economic and Policy Research (अर्थशास्त्र/वित्त)", "10"],
          ["DSIM", "Department of Statistics and Information Management (सांख्यिकी)", "10"],
        ],
      },
      callout: { kind: "info", html: "2026 में पदों की संख्या पिछले साल से काफी कम रही। हर स्ट्रीम में आरक्षित वर्गों के पदों का बंटवारा RBI की अधिसूचना में दिया होता है।" },
    },
    {
      id: "tarikh",
      title: "2026 की महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["अधिसूचना", "अप्रैल 2026 के अंत में"],
          ["ऑनलाइन आवेदन की आखिरी तारीख", "20 मई 2026"],
          ["Phase 1 परीक्षा", "13 जून 2026 (General), 14 जून 2026 (DEPR, DSIM)"],
          ["Phase 2 परीक्षा", "25 जुलाई 2026 (General), 26 जुलाई 2026 (DEPR, DSIM)"],
          ["Phase 2 रिजल्ट", "DEPR का रिजल्ट 25 अगस्त 2026 को आने की खबर; General का भी जारी"],
          ["इंटरव्यू और अंतिम रिजल्ट", "RBI वेबसाइट पर सूचना देखें"],
        ],
      },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>Phase 1:</strong> ऑनलाइन objective परीक्षा। इसमें पास होने वाले Phase 2 में जाते हैं। हर स्ट्रीम का पैटर्न अलग है, अधिसूचना देखें।",
        "<strong>Phase 2:</strong> लिखित/ऑनलाइन परीक्षा, जिसमें कुछ पेपर descriptive होते हैं।",
        "<strong>इंटरव्यू:</strong> Phase 2 के अंकों से चुने गए उम्मीदवारों को बुलाया जाता है।",
        "<strong>अंतिम चयन:</strong> Phase 2 और इंटरव्यू के अंक मिलाकर मेरिट सूची बनती है।",
      ],
    },
    {
      id: "patrata",
      title: "पात्रता: कहां देखें",
      list: [
        "<strong>General:</strong> किसी भी विषय में स्नातक या स्नातकोत्तर, अधिसूचना में तय न्यूनतम अंकों के साथ।",
        "<strong>DEPR:</strong> अर्थशास्त्र, वित्त या संबंधित विषय में स्नातकोत्तर।",
        "<strong>DSIM:</strong> सांख्यिकी, गणित या संबंधित विषय में स्नातकोत्तर।",
        "उम्र सीमा, अंकों का प्रतिशत, प्रयासों की संख्या और आरक्षित वर्गों की छूट हर साल की अधिसूचना में दी जाती है। अगली भर्ती से पहले वही अधिसूचना पढ़ें।",
      ],
      callout: { kind: "warn", html: "2026 की भर्ती के आवेदन बंद हो चुके हैं। अगली भर्ती की सूचना RBI की वेबसाइट पर आएगी; किसी एजेंट या \"सीट पक्की\" का दावा करने वाले पर भरोसा न करें। RBI भर्ती के लिए कोई पैसा नहीं मांगता।" },
    },
    {
      id: "result",
      title: "रिजल्ट और कॉल लेटर कैसे देखें",
      steps: [
        "<a href=\"https://opportunities.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">opportunities.rbi.org.in</a> खोलें।",
        "\"Current Vacancies\" या \"Results\" वाले हिस्से में Officers in Grade B (DR) 2026 का नोटिस खोलें।",
        "रिजल्ट PDF में अपना रोल नंबर खोजें; कॉल लेटर के लिए रजिस्ट्रेशन नंबर और जन्मतिथि/पासवर्ड से लॉगिन करें।",
      ],
    },
  ],
  official: [
    { href: "https://opportunities.rbi.org.in/", title: "RBI भर्ती वेबसाइट (Opportunities@RBI)" },
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक" },
  ],
  faq: [
    { q: "RBI Grade B 2026 में कितने पद हैं?", a: "कुल 60: General के 40, DEPR के 10 और DSIM के 10।" },
    { q: "क्या RBI Grade B 2026 के लिए अभी आवेदन कर सकते हैं?", a: "नहीं। ऑनलाइन आवेदन 20 मई 2026 को बंद हो गए थे। अगली भर्ती का इंतज़ार करें और RBI की वेबसाइट देखते रहें।" },
    { q: "RBI Grade B 2026 की परीक्षा कब हुई?", a: "Phase 1 13 जून (General) और 14 जून 2026 (DEPR, DSIM) को, और Phase 2 25 जुलाई (General) और 26 जुलाई 2026 (DEPR, DSIM) को हुई।" },
    { q: "अंतिम रिजल्ट कहां आएगा?", a: "इंटरव्यू के बाद अंतिम रिजल्ट opportunities.rbi.org.in पर PDF के रूप में आता है।" },
  ],
  related: [
    { href: "/service/ibps-bank-recruitment.html", emoji: "🏦", title: "IBPS बैंक भर्ती", text: "PO, क्लर्क और SO भर्ती" },
    { href: "/service/ssc-recruitment.html", emoji: "📝", title: "SSC भर्ती", text: "केंद्र सरकार की नौकरियां" },
    { href: "/service/ssc-cgl-recruitment-2026.html", emoji: "🎓", title: "SSC CGL 2026", text: "स्नातकों के लिए भर्ती" },
    { href: "/service/upsc-cse-recruitment-2027.html", emoji: "🏛️", title: "UPSC सिविल सेवा", text: "IAS/IPS परीक्षा" },
  ],
  aside: [
    { href: "https://opportunities.rbi.org.in/", label: "🏦 RBI भर्ती वेबसाइट" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
