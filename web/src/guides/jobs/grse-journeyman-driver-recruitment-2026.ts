import type { DocGuide } from "../doc/types";

// Sources (checked 2 Nov 2026; official site not reachable from the sandbox,
// so only facts several reports agree on are used):
// egov.eletsonline.com (30 Oct 2026), govtjobsalert.in, indgovtjobs.in. Employment
// Notification 2026/05 (J&OP); 58 posts = 55 Journeyman (14 trades) + 3 Driver (Vehicle);
// online 30.10.2026 (2 PM) to 28.11.2026 (11:59 PM); Journeyman: 10th + NTC/NAC in the
// trade (NSQF for GRP/FRP). Fee ₹472, age limits and pay from single listings or the
// 2025 cycle only: pointed to the notification.
export const grseJourneymanDriverRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "GRSE जर्नीमैन और ड्राइवर भर्ती 2026" },
  ],
  docHi: "GRSE जर्नीमैन और ड्राइवर भर्ती 2026",
  title: "GRSE जर्नीमैन और ड्राइवर भर्ती 2026: 58 पद, 10वीं + ITI, आवेदन 28 नवंबर तक",
  description: "गार्डन रीच शिपबिल्डर्स (GRSE), कोलकाता में 55 जर्नीमैन (14 ट्रेड) और 3 ड्राइवर पद। 10वीं + ITI (NTC/NAC) वालों के लिए, ऑनलाइन आवेदन 28 नवंबर 2026 रात 11:59 तक।",
  published: "2026-11-02",
  modified: "2026-11-02",
  verified: "2 नवंबर 2026",
  h1: "GRSE जर्नीमैन और ड्राइवर भर्ती 2026: 58 पद, योग्यता और आवेदन",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> रक्षा मंत्रालय की कंपनी <strong>गार्डन रीच शिपबिल्डर्स एंड इंजीनियर्स लिमिटेड (GRSE), कोलकाता</strong> ने रोज़गार अधिसूचना 2026/05 (J&OP) से <strong>58 पद</strong> निकाले हैं: <strong>55 जर्नीमैन</strong> (14 ट्रेड) और <strong>3 ड्राइवर (वाहन)</strong>। ऑनलाइन आवेदन <strong>28 नवंबर 2026 रात 11:59 बजे</strong> तक होगा; लिंक <a href=\"https://grse.in/\" target=\"_blank\" rel=\"noopener nofollow\">grse.in</a> के Career सेक्शन में है।",
  facts: [
    ["कुल पद", "58 (जर्नीमैन 55, ड्राइवर 3)"],
    ["आखिरी तारीख", "28 नवंबर 2026, रात 11:59 बजे"],
    ["योग्यता (जर्नीमैन)", "10वीं + ट्रेड में ITI (NTC) या अप्रेंटिसशिप (NAC)"],
    ["वेबसाइट", "<a href=\"https://grse.in/\" target=\"_blank\" rel=\"noopener nofollow\">grse.in</a> → Career"],
  ],
  notice: "यह जानकारी अधिसूचना 2026/05 (J&OP) की रिपोर्टों से मिलाकर लिखी गई है। फीस, उम्र सीमा और वेतन रिपोर्टों में पक्के नहीं मिले, इसलिए आवेदन से पहले grse.in पर पूरी अधिसूचना पढ़ें। यह साइट निजी है, GRSE या सरकार की नहीं।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "30 अक्टूबर 2026, दोपहर 2 बजे"],
          ["आवेदन की आखिरी तारीख", "28 नवंबर 2026, रात 11:59 बजे"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और योग्यता",
      list: [
        "<strong>जर्नीमैन (55 पद, 14 ट्रेड):</strong> 10वीं पास + उस ट्रेड में <strong>NTC (ITI)</strong> या <strong>NAC (अप्रेंटिसशिप)</strong>। GRP/FRP ट्रेड के लिए NSQF सर्टिफिकेट।",
        "<strong>ड्राइवर (वाहन), 3 पद:</strong> योग्यता, ड्राइविंग लाइसेंस और अनुभव की शर्त अधिसूचना में देखें।",
        "कुछ पद पूर्व सैनिकों और पूर्व अग्निवीरों के लिए भी हैं (सरकारी नियम के अनुसार)।",
        "<strong>उम्र, फीस और वेतन:</strong> अधिसूचना में देखें। SC/ST/PwBD को आमतौर पर फीस नहीं देनी होती।",
      ],
      html: "अपनी उम्र <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> में अधिसूचना की कट-ऑफ तारीख डालकर देखें।",
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://grse.in/\" target=\"_blank\" rel=\"noopener nofollow\">grse.in</a> पर Career सेक्शन में अधिसूचना 2026/05 (J&OP) खोलें और पूरी पढ़ें।",
        "वहीं दिए ऑनलाइन आवेदन लिंक पर रजिस्ट्रेशन करें और ट्रेड चुनें।",
        "फोटो, हस्ताक्षर, 10वीं और ITI/NAC सर्टिफिकेट अपलोड करें (साइज़ <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> से ठीक करें)।",
        "फीस (लागू हो तो) भरें और 28 नवंबर 2026 रात 11:59 से पहले फॉर्म जमा करके प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "आवेदन सिर्फ grse.in पर दिए लिंक से करें। नौकरी दिलाने के नाम पर पैसे मांगने वालों से सावधान रहें।" },
    },
  ],
  official: [
    { href: "https://grse.in/", title: "गार्डन रीच शिपबिल्डर्स एंड इंजीनियर्स लिमिटेड (GRSE)", note: "अधिसूचना 2026/05 (J&OP)" },
  ],
  faq: [
    { q: "GRSE जर्नीमैन 2026 का फॉर्म कब तक भर सकते हैं?", a: "30 अक्टूबर से 28 नवंबर 2026 रात 11:59 बजे तक, grse.in पर दिए लिंक से।" },
    { q: "कितने पद हैं?", a: "58: जर्नीमैन 55 (14 ट्रेड) और ड्राइवर (वाहन) 3।" },
    { q: "जर्नीमैन के लिए योग्यता क्या है?", a: "10वीं पास और उस ट्रेड में ITI (NTC) या अप्रेंटिसशिप सर्टिफिकेट (NAC)।" },
    { q: "नौकरी कहां होगी?", a: "GRSE कोलकाता की कंपनी है; पोस्टिंग की जगह अधिसूचना में देखें।" },
  ],
  related: [
    { href: "/jobs/bhel-artisan-recruitment-2026.html", emoji: "🔧", title: "BHEL आर्टिज़न भर्ती", text: "ITI वालों के लिए" },
    { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता के अनुसार नौकरी", text: "10वीं / ITI की भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "कट-ऑफ तारीख पर उम्र" },
  ],
  aside: [
    { href: "https://grse.in/", label: "📝 grse.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
