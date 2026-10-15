import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; cmhis.nagaland.gov.in timed out from the
// sandbox): myScheme API entry "Chief Minister's Health Insurance Scheme -
// Nagaland" (slug cmhisn; Health & Family Welfare Department, Nagaland —
// launched 16 Oct 2022; CMHIS (GEN) ₹5 lakh and CMHIS (EP) ₹20 lakh per family
// per year, family floater; cashless IPD and day-care in empanelled hospitals
// across India; OPD and standalone diagnostics not covered; GEN = indigenous
// inhabitants / permanent residents not covered under AB PM-JAY, with IIC/PRC,
// Aadhaar and mobile; EP = state employees, pensioners, legislators, PSU
// staff and dependants; enrolment at PHC/CHC, treasury offices, camps and
// hospitals; helpline 14555); Morung Express / Nagaland Economic Survey
// 2024-25 (1,35,306 CMHIS cards by Feb 2025); ipr.nagaland.gov.in (premium paid
// by the State for 2024-25); AIR Kohima Mar 2025 (open enrolment round the
// year). Premium per household and enrolment deadlines not stated.
export const nagalandCmhisScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "नागालैंड", href: "/states/nagaland.html" },
    { label: "CMHIS योजना" },
  ],
  docHi: "CMHIS योजना",
  title: "CMHIS Scheme",
  description: "नागालैंड राज्य सरकार की यह स्वास्थ्य बीमा (Health Insurance) योजना नागरिकों के जीवन स्तर को सुधारने और उन्हें आत्मनिर्भर बनाने के लिए शुरू की गई है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "नागालैंड CMHIS योजना: ₹5 लाख / ₹20 लाख तक कैशलेस इलाज, पात्रता और कार्ड कैसे बनवाएं",
  lead: "मुख्यमंत्री स्वास्थ्य बीमा योजना (CMHIS) नागालैंड सरकार के स्वास्थ्य एवं परिवार कल्याण विभाग की योजना है, जो 16 अक्टूबर 2022 को शुरू हुई। आम नागरिक परिवारों (CMHIS GEN) को साल में <strong>₹5 लाख</strong> और सरकारी कर्मचारी/पेंशनर परिवारों (CMHIS EP) को साल में <strong>₹20 लाख</strong> तक का कैशलेस इलाज सूचीबद्ध (empanelled) अस्पतालों में मिलता है।",
  facts: [
    ["पोर्टल", '<a href="https://cmhis.nagaland.gov.in/" target="_blank" rel="noopener nofollow">cmhis.nagaland.gov.in</a>'],
    ["बीमा राशि", "GEN: ₹5 लाख, EP: ₹20 लाख (प्रति परिवार प्रति साल)"],
    ["किसकी योजना", "स्वास्थ्य एवं परिवार कल्याण विभाग, नागालैंड"],
    ["हेल्पलाइन", "14555"],
  ],
  notice: "<strong>ध्यान दें:</strong> जो परिवार पहले से आयुष्मान भारत PM-JAY में हैं, वे CMHIS (GEN) में अलग से नहीं जुड़ते; उनका इलाज PM-JAY कार्ड से होता है।",
  sections: [
    {
      id: "kya-hai",
      title: "CMHIS योजना क्या है",
      intro: "CMHIS एक सरकारी स्वास्थ्य बीमा योजना है। अस्पताल में भर्ती होकर इलाज (IPD) और कुछ तय डे-केयर इलाज का खर्च बीमा से चुकाया जाता है, मरीज़ को अस्पताल में पैसे नहीं देने होते। पहले से चल रही बीमारियां भी कवर होती हैं।",
      list: [
        "<strong>पूरे देश में इलाज:</strong> नागालैंड के बाहर भी योजना से जुड़े (empanelled) अस्पतालों में इलाज हो सकता है।",
        "<strong>फैमिली फ्लोटर:</strong> बीमा राशि पूरे परिवार के लिए एक साथ होती है, हर सदस्य के लिए अलग नहीं।",
        "<strong>क्या कवर नहीं है:</strong> OPD (बिना भर्ती के डॉक्टर को दिखाना) और सिर्फ जांच (standalone diagnostics) कवर नहीं होते।",
      ],
    },
    {
      id: "shreni",
      title: "दो श्रेणियां: GEN और EP",
      table: {
        head: ["श्रेणी", "कौन", "बीमा राशि / सुविधा"],
        rows: [
          ["CMHIS (GEN)", "नागालैंड के मूल निवासी (Indigenous Inhabitant) या स्थायी निवासी परिवार, जो PM-JAY या किसी दूसरी सरकारी बीमा योजना में नहीं हैं; ठेके/एड-हॉक/फिक्स्ड पे वाले राज्य कर्मचारी भी", "₹5 लाख प्रति परिवार प्रति साल; PM-JAY जैसे पैकेज, जनरल वार्ड"],
          ["CMHIS (EP)", "राज्य सरकार के नियमित कर्मचारी, पेंशनर, वर्तमान/पूर्व विधायक, राज्य PSU/निगम/स्वायत्त संस्था के कर्मचारी और उन पर निर्भर परिवार", "₹20 लाख प्रति परिवार प्रति साल; CGHS जैसी सुविधा, पद के अनुसार कमरा"],
        ],
      },
      callout: { kind: "info", html: "सरकारी कर्मचारियों के मामले में बीमा राशि से ज़्यादा खर्च होने पर राज्य मेडिकल बोर्ड की सिफारिश पर राज्य सरकार केस-दर-केस भरपाई कर सकती है।" },
    },
    {
      id: "dastavej",
      title: "ज़रूरी दस्तावेज़",
      list: [
        "<strong>GEN श्रेणी:</strong> मूल निवासी प्रमाण पत्र (IIC) या स्थायी निवासी प्रमाण पत्र (PRC), आधार कार्ड और चालू मोबाइल नंबर।",
        "<strong>EP श्रेणी:</strong> कर्मचारी का PIMS कोड या पेंशनर की PPO बुक, आधार कार्ड और निर्भर सदस्यों के प्रमाण पत्र।",
      ],
    },
    {
      id: "kaise-bane",
      title: "CMHIS कार्ड कैसे बनवाएं",
      steps: [
        '<a href="https://cmhis.nagaland.gov.in/" target="_blank" rel="noopener nofollow">cmhis.nagaland.gov.in</a> पर <strong>Register</strong> के निर्देश पढ़ें और अपनी श्रेणी (GEN या EP) के हिसाब से जानकारी भरें।',
        "या नज़दीकी <strong>PHC/CHC, ज़िला/उप-मंडल ट्रेज़री कार्यालय, आउटरीच कैंप</strong> या योजना से जुड़े अस्पताल में जाकर नामांकन करवाएं।",
        "दस्तावेज़ों की जांच के बाद आवेदन मंज़ूर होता है और लाभार्थी कार्ड बनता है।",
        "इलाज के समय अस्पताल के हेल्प डेस्क पर कार्ड और आधार दिखाएं।",
      ],
      callout: { kind: "ok", html: "राज्य की जानकारी के अनुसार नामांकन साल भर खुला रहता है। फरवरी 2025 तक 1.35 लाख से ज़्यादा CMHIS कार्ड बन चुके थे।" },
    },
    {
      id: "madad",
      title: "मदद और शिकायत",
      list: [
        "<strong>हेल्पलाइन:</strong> 14555 (आयुष्मान/CMHIS)।",
        "<strong>ईमेल:</strong> nagaland.nhpm@gmail.com (myScheme पर दिया गया)।",
        "अस्पताल पैसे मांगे तो पर्ची/बिल रखें और हेल्पलाइन पर शिकायत करें।",
      ],
    },
  ],
  official: [
    { href: "https://cmhis.nagaland.gov.in/", title: "CMHIS नागालैंड पोर्टल" },
    { href: "https://www.myscheme.gov.in/schemes/cmhisn", title: "myScheme पर CMHIS नागालैंड" },
  ],
  faq: [
    { q: "CMHIS में कितने रुपये तक का इलाज मुफ्त है?", a: "GEN श्रेणी के परिवार को साल में ₹5 लाख और EP (सरकारी कर्मचारी/पेंशनर) परिवार को साल में ₹20 लाख तक का कैशलेस इलाज मिलता है।" },
    { q: "क्या PM-JAY कार्ड वाले CMHIS में जुड़ सकते हैं?", a: "CMHIS (GEN) उन परिवारों के लिए है जो PM-JAY या किसी दूसरी सरकारी बीमा योजना में नहीं हैं। PM-JAY वाले परिवार अपने आयुष्मान कार्ड से इलाज करवाते हैं।" },
    { q: "क्या OPD का खर्च मिलता है?", a: "नहीं। योजना में अस्पताल में भर्ती होकर इलाज और कुछ डे-केयर इलाज कवर हैं; OPD और सिर्फ जांच कवर नहीं हैं।" },
    { q: "क्या नागालैंड के बाहर इलाज हो सकता है?", a: "हां, देश भर के उन अस्पतालों में जो योजना से जुड़े (empanelled) हैं।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत PM-JAY", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ उम्र वालों के लिए" },
    { href: "/service/nagaland-domicile-certificate.html", emoji: "📄", title: "नागालैंड निवास प्रमाण पत्र", text: "PRC/IIC की जानकारी" },
    { href: "/states/nagaland.html", emoji: "🗺️", title: "नागालैंड की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://cmhis.nagaland.gov.in/", label: "🏥 CMHIS पोर्टल" },
    { href: "/states/nagaland.html", label: "🗺️ नागालैंड की सेवाएं" },
  ],
};
