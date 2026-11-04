import type { DocGuide } from "../doc/types";

// Sources (checked 4 Nov 2026; official sites not reachable from the sandbox,
// so only facts several reports agree on are used; anything that differs
// between reports is pointed to the official notice):
// rojgarlive.com, 24x7jobalerts.com, indiangovtjobs.co.in, freejobalert.com
// (district notices of SP Sukma, Bijapur, Narayanpur, Bastar and others).
// Chhattisgarh Police Bastar Fighter constable: separate district-wise
// recruitments, only local residents of that district; offline applications
// 2.11.2026 to 12.12.2026 (5 PM). Reported counts: Sukma 375, Bijapur 417,
// Narayanpur 383, Bastar 79 (others too); minimum 10th (relaxation for ST /
// Naxal-affected families per one listing); age 18-28 on 1.1.2026 (one
// listing). Counts differ between sources: given as "reported".
export const cgPoliceBastarFighterRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "बस्तर फाइटर आरक्षक भर्ती 2026" },
  ],
  docHi: "बस्तर फाइटर आरक्षक भर्ती 2026",
  title: "बस्तर फाइटर भर्ती 2026: छत्तीसगढ़ पुलिस, ज़िलेवार पद, आवेदन 12 दिसंबर तक",
  description: "छत्तीसगढ़ पुलिस बस्तर फाइटर आरक्षक भर्ती 2026: सुकमा, बीजापुर, नारायणपुर, बस्तर समेत ज़िलेवार पद, सिर्फ उसी ज़िले के स्थानीय निवासी, 10वीं पास, ऑफलाइन आवेदन 12 दिसंबर 2026 तक।",
  published: "2026-11-04",
  modified: "2026-11-04",
  verified: "4 नवंबर 2026",
  h1: "छत्तीसगढ़ पुलिस बस्तर फाइटर आरक्षक भर्ती 2026: ज़िलेवार पद, योग्यता और आवेदन",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> छत्तीसगढ़ पुलिस ने बस्तर संभाग के ज़िलों में <strong>बस्तर फाइटर आरक्षक (कांस्टेबल)</strong> की ज़िलेवार भर्ती निकाली है। हर ज़िले की भर्ती अलग है और उसमें <strong>सिर्फ उसी ज़िले के स्थानीय निवासी</strong> आवेदन कर सकते हैं। आवेदन <strong>ऑफलाइन</strong>, <strong>2 नवंबर से 12 दिसंबर 2026 (शाम 5 बजे)</strong> तक संबंधित ज़िले के पुलिस अधीक्षक (SP) कार्यालय में।",
  facts: [["आवेदन", "ऑफलाइन, ज़िले के SP कार्यालय में"], ["आखिरी तारीख", "12 दिसंबर 2026, शाम 5 बजे"], ["कौन", "सिर्फ उसी ज़िले के स्थानीय निवासी"], ["पढ़ाई", "10वीं पास (कुछ वर्गों को छूट)"]],
  notice: "ज़िलों के पदों की संख्या रिपोर्टों में अलग-अलग है। अपने ज़िले का विज्ञापन SP कार्यालय या ज़िले की पुलिस वेबसाइट पर ज़रूर देखें; वही अंतिम है। यह साइट निजी है, छत्तीसगढ़ पुलिस या सरकार की नहीं।",
  sections: [
    {
      id: "jile",
      title: "ज़िलेवार पद (रिपोर्टों के अनुसार)",
      table: { head: ["ज़िला", "पद (लगभग)"], rows: [["बीजापुर", "417"], ["नारायणपुर", "383"], ["सुकमा", "375"], ["बस्तर (जगदलपुर)", "79"], ["दूसरे ज़िले", "ज़िले के विज्ञापन में देखें"]] },
      callout: { kind: "info", html: "हर ज़िले का फॉर्म अलग है। आप सिर्फ अपने निवास वाले ज़िले में ही आवेदन कर सकते हैं।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: ["<strong>निवास:</strong> उसी ज़िले का स्थानीय निवासी होना ज़रूरी (निवास प्रमाण पत्र)।", "<strong>पढ़ाई:</strong> 10वीं पास; एक रिपोर्ट के अनुसार अनुसूचित जनजाति और नक्सल प्रभावित परिवारों के लिए 5वीं पास तक छूट। अपने ज़िले का विज्ञापन देखें।", "<strong>उम्र:</strong> एक रिपोर्ट के अनुसार 18 से 28 साल (1 जनवरी 2026 को); छूट नियम के अनुसार।", "<strong>शारीरिक मापदंड</strong> (ऊंचाई, सीना) और दौड़ की शर्तें विज्ञापन में दी होती हैं।"],
      html: "अपनी उम्र <a href=\"/tools/age-calculator.html\">उम्र कैलकुलेटर</a> में 1 जनवरी 2026 डालकर देखें।",
    },
    {
      id: "apply",
      title: "ऑफलाइन आवेदन कैसे करें",
      steps: ["अपने ज़िले के <strong>SP कार्यालय</strong> या ज़िले की पुलिस वेबसाइट से विज्ञापन और आवेदन फॉर्म लें।", "फॉर्म भरें; पासपोर्ट फोटो लगाएं।", "10वीं की मार्कशीट, निवास प्रमाण पत्र, जाति प्रमाण पत्र (लागू हो तो), आधार की स्व-प्रमाणित कॉपी लगाएं।", "फॉर्म 12 दिसंबर 2026 शाम 5 बजे से पहले SP कार्यालय में जमा करें (या विज्ञापन में बताए तरीके से) और पावती लें।"],
      callout: { kind: "warn", html: "पुलिस भर्ती में \"सेटिंग\" के नाम पर पैसे मांगने वाले ठग होते हैं। चयन सिर्फ शारीरिक परीक्षा, लिखित परीक्षा और मेरिट से होता है।" },
    },
    {
      id: "dastavej",
      title: "कागज़ात की लिस्ट",
      list: ["10वीं की मार्कशीट (और ऊंची पढ़ाई हो तो वह)", "ज़िले का <strong>स्थानीय निवास प्रमाण पत्र</strong> (<a href=\"/states/chhattisgarh-domicile-certificate.html\">छत्तीसगढ़ निवास प्रमाण पत्र</a>)", "<a href=\"/states/chhattisgarh-caste-certificate.html\">जाति प्रमाण पत्र</a> (आरक्षित वर्ग के लिए)", "आधार कार्ड और पासपोर्ट साइज़ फोटो"],
    },
  ],
  official: [{"href": "https://cgpolice.gov.in/", "title": "छत्तीसगढ़ पुलिस", "note": "ज़िलों की भर्ती सूचनाएं"}],
  faq: [{"q": "बस्तर फाइटर भर्ती 2026 की आखिरी तारीख क्या है?", "a": "12 दिसंबर 2026, शाम 5 बजे तक, ऑफलाइन।"}, {"q": "क्या दूसरे ज़िले वाले आवेदन कर सकते हैं?", "a": "नहीं, हर ज़िले में सिर्फ उसी ज़िले के स्थानीय निवासी आवेदन कर सकते हैं।"}, {"q": "कितनी पढ़ाई चाहिए?", "a": "10वीं पास; कुछ वर्गों को छूट बताई गई है, अपने ज़िले का विज्ञापन देखें।"}],
  related: [{"href": "/jobs/mp-police-constable-driver-recruitment-2026.html", "emoji": "👮", "title": "MP पुलिस कांस्टेबल ड्राइवर", "text": "पुलिस की दूसरी भर्ती"}, {"href": "/states/chhattisgarh-domicile-certificate.html", "emoji": "🏠", "title": "छत्तीसगढ़ निवास प्रमाण पत्र", "text": "भर्ती के लिए ज़रूरी"}, {"href": "/tools/age-calculator.html", "emoji": "🎂", "title": "उम्र कैलकुलेटर", "text": "कट-ऑफ तारीख पर उम्र"}],
  aside: [{"href": "https://cgpolice.gov.in/", "label": "👮 छत्तीसगढ़ पुलिस"}, {"href": "/jobs/index.html", "label": "💼 सभी सरकारी नौकरियां"}],
};
