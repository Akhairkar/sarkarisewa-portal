import type { DocGuide } from "../doc/types";

// Sources (checked 23 Oct 2026; esb.mp.gov.in not opened from the sandbox, so
// coverage of the MPESB rulebook/notice was used):
// - testbook, resultbharat, sarkaricyber, kollegeapply, freejobalert,
//   indiangovtjobs, jobyaari, naukripatra: MPESB Group-3 Sub Engineer and
//   equivalent posts recruitment test 2026; first window 29 Aug - 12 Sep 2026
//   (1,040 posts); reopened after vacancy revision (Tribal Affairs Dept letter
//   of 28 Sep 2026) for about 1,700 posts (testbook: 1,715); reopened online
//   13 - 27 Oct 2026, correction till 28 Oct 2026; posts: Sub Engineer
//   (Upyantri), Draftsman/Cartographer, Surveyor, Mineral Surveyor, Lab
//   Technician, Technical Assistant etc.; diploma/degree in the trade;
//   age on 1 Jan 2026, 18-40 (UR), 45 for MP reserved/women (most sites);
//   fee ₹500 UR / ₹250 MP SC/ST/OBC/EWS/PwD + MPOnline portal charge;
//   pay Level 4-8 (Sub Engineer ₹32,800-1,03,600 in one source).
// Exam date (Dec 2026 / 20 Jan 2027) differs between sites: left open.
export const mpesbSubEngineerRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "MPESB उपयंत्री भर्ती 2026" },
  ],
  docHi: "MP उपयंत्री (सब इंजीनियर) भर्ती 2026",
  title: "MP सब इंजीनियर (उपयंत्री) भर्ती 2026: 1,700 पद, आवेदन 27 अक्टूबर तक",
  description: "MPESB समूह-3 उपयंत्री भर्ती 2026 दोबारा खुली: लगभग 1,700 पद (सब इंजीनियर, ड्राफ्ट्समैन, सर्वेयर)। आवेदन 27 अक्टूबर 2026 तक। योग्यता, उम्र, फीस।",
  published: "2026-10-23",
  modified: "2026-10-23",
  verified: "23 अक्टूबर 2026",
  h1: "MP उपयंत्री (सब इंजीनियर) भर्ती 2026: 1,700 पदों पर आवेदन फिर चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> मध्य प्रदेश कर्मचारी चयन मंडल (MPESB) ने <strong>समूह-3 उपयंत्री (Sub Engineer) एवं समकक्ष पदों</strong> की भर्ती का आवेदन दोबारा खोला है। पद बढ़कर <strong>लगभग 1,700</strong> हो गए हैं (पहले 1,040 थे)। ऑनलाइन आवेदन <strong>13 से 27 अक्टूबर 2026</strong> तक और फॉर्म सुधार 28 अक्टूबर तक होगा। डिप्लोमा/डिग्री वाले इंजीनियरिंग उम्मीदवार आवेदन कर सकते हैं।",
  facts: [
    ["कुल पद", "लगभग 1,700 (एक रिपोर्ट में 1,715)"],
    ["आखिरी तारीख", "27 अक्टूबर 2026; सुधार 28 अक्टूबर तक"],
    ["योग्यता", "संबंधित ट्रेड में डिप्लोमा/डिग्री (पद के अनुसार)"],
    ["आवेदन", "<a href=\"https://esb.mp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">esb.mp.gov.in</a> / MPOnline"],
  ],
  notice: "23 अक्टूबर 2026 तक: दोबारा खुला आवेदन 27 अक्टूबर तक चालू है। ये जानकारी MPESB नोटिस पर आधारित समाचार/शिक्षा वेबसाइटों से है; पद संख्या और परीक्षा तारीख अलग-अलग जगह थोड़ी अलग है। पहले चरण (सितंबर) में आवेदन कर चुके हैं तो दोबारा फॉर्म भरना है या नहीं, यह esb.mp.gov.in के नोटिस में ज़रूर देखें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["पहला आवेदन (1,040 पद)", "29 अगस्त से 12 सितंबर 2026 (बंद)"],
          ["दोबारा ऑनलाइन आवेदन शुरू", "13 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "27 अक्टूबर 2026"],
          ["फॉर्म सुधार की आखिरी तारीख", "28 अक्टूबर 2026"],
          ["परीक्षा", "दिसंबर 2026 / जनवरी 2027 (संभावित, MPESB घोषित करेगा)"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      list: [
        "उपयंत्री / सब इंजीनियर (सिविल, मैकेनिकल, इलेक्ट्रिकल आदि; अलग-अलग विभाग)",
        "ड्राफ्ट्समैन / मानचित्रकार (Cartographer)",
        "सर्वेयर और खनिज सर्वेयर (Mineral Surveyor)",
        "प्रयोगशाला तकनीशियन, तकनीकी सहायक और अन्य समकक्ष पद",
      ],
      callout: { kind: "info", html: "वेतन पद के अनुसार लेवल-4 से लेवल-8 तक है; उपयंत्री का वेतनमान एक रिपोर्ट में ₹32,800 - ₹1,03,600 बताया गया है। विभाग-वार पद, वर्गवार आरक्षण और वेतन नियम पुस्तिका में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> पद के अनुसार संबंधित इंजीनियरिंग/तकनीकी ट्रेड में डिप्लोमा (आम तौर पर 3 साल) या डिग्री। कुछ पदों के लिए ITI भी।",
        "<strong>उम्र की गणना:</strong> 1 जनवरी 2026 को।",
        "<strong>उम्र:</strong> ज़्यादातर रिपोर्टों के अनुसार न्यूनतम 18 और अधिकतम 40 साल (अनारक्षित); MP के आरक्षित वर्ग और महिलाओं के लिए 45 साल तक।",
        "कुछ रिपोर्टें MP रोज़गार कार्यालय में जीवित पंजीयन की बात करती हैं; यह शर्त नियम पुस्तिका में ज़रूर जांचें।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      list: [
        "<strong>अनारक्षित:</strong> ₹500 + MPOnline पोर्टल शुल्क।",
        "<strong>MP के SC/ST/OBC/EWS/दिव्यांग:</strong> ₹250 + पोर्टल शुल्क।",
        "कुछ रिपोर्टें पोर्टल शुल्क जोड़कर कुल ₹560 / ₹310 बताती हैं। सही राशि भुगतान के समय पोर्टल पर दिखेगी।",
      ],
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>ऑनलाइन लिखित परीक्षा (CBT):</strong> MPESB द्वारा।",
        "<strong>मेरिट और दस्तावेज़ जांच:</strong> संबंधित विभाग द्वारा।",
      ],
    },
    {
      id: "apply",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://esb.mp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">esb.mp.gov.in</a> पर समूह-3 उपयंत्री भर्ती की नियम पुस्तिका और पुनः आवेदन का नोटिस पढ़ें।",
        "MP ऑनलाइन (MPOnline) पर प्रोफाइल/eKYC न हो तो पहले बनाएं।",
        "आवेदन फॉर्म में पद, शिक्षा, वर्ग और परीक्षा शहर की जानकारी भरें।",
        "फोटो और हस्ताक्षर अपलोड करें; ज़रूरत हो तो हमारे <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> से साइज़ ठीक करें।",
        "फीस भरें और रसीद व फॉर्म का प्रिंट रखें। गलती हो तो 28 अक्टूबर तक सुधारें।",
      ],
      callout: { kind: "warn", html: "आखिरी तारीख 27 अक्टूबर है, यानी समय कम है। कियोस्क से भरवा रहे हैं तो फॉर्म का प्रिंट अपने पास ज़रूर लें।" },
    },
  ],
  official: [
    { href: "https://esb.mp.gov.in/", title: "मध्य प्रदेश कर्मचारी चयन मंडल (MPESB)", note: "नियम पुस्तिका और पुनः आवेदन नोटिस" },
    { href: "https://www.mponline.gov.in/", title: "MPOnline", note: "ऑनलाइन फॉर्म और फीस" },
  ],
  faq: [
    { q: "MP उपयंत्री भर्ती 2026 का फॉर्म कब तक भर सकते हैं?", a: "दोबारा खुले आवेदन 27 अक्टूबर 2026 तक; फॉर्म सुधार 28 अक्टूबर 2026 तक।" },
    { q: "कितने पद हैं?", a: "पहले 1,040 पद थे; संशोधन के बाद लगभग 1,700 पद हो गए हैं (एक रिपोर्ट में 1,715)।" },
    { q: "भर्ती दोबारा क्यों खुली?", a: "रिपोर्टों के अनुसार जनजातीय कार्य विभाग ने पदों में संशोधन भेजा, इसलिए पद बढ़े और आवेदन दोबारा खोला गया।" },
    { q: "उम्र सीमा क्या है?", a: "1 जनवरी 2026 को 18 से 40 साल (अनारक्षित); MP के आरक्षित वर्ग और महिलाओं को 45 साल तक (रिपोर्टों के अनुसार)। नियम पुस्तिका से पुष्टि करें।" },
  ],
  related: [
    { href: "/jobs/mp-police-constable-driver-recruitment-2026.html", emoji: "🚓", title: "MP पुलिस ड्राइवर भर्ती", text: "1,000 पद, MPESB" },
    { href: "/jobs/index.html", emoji: "💼", title: "सभी सरकारी नौकरियां", text: "अभी खुली भर्तियां" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://esb.mp.gov.in/", label: "📝 esb.mp.gov.in पर नोटिस" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
