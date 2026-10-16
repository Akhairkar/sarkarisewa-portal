import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026): eportal.pngrb.gov.in/consumerweb FAQ (PNGRB
// Integrated Grievance Redressal Portal for PNG/CNG/LPG, auto-routed to the
// entity, escalation to PNGRB, free; PNG service complaints 7 working days,
// safety/leakage 24 hours; support@pngrb.gov.in), as used in the sibling
// guide piped-natural-gas-connection.ts; SCC Online 3 Apr 2026 and TeamLease
// RegTech on the PNGRB (Consumer Protection) Regulations, 2025 (in force 24
// Mar 2026: right to a new connection within the specified timeline and to
// know application status; exact day count not verified, so not given).
// PNG is supplied by the City Gas Distribution (CGD) company authorised by
// PNGRB for each geographical area; fees, deposits, helplines and the old
// page's "24x7" supply claim differ by company and are not stated as fact.
export const pngPipedGasConnectionApply: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "PNG कनेक्शन आवेदन" },
  ],
  docHi: "PNG कनेक्शन आवेदन",
  title: "पीएनजी पाइप रसोई गैस कनेक्शन (PNG Piped Natural Gas)",
  description: "घर में पाइप वाली प्राकृतिक रसोई गैस (PNG) कनेक्शन के लिए आवेदन: इलाके की गैस कंपनी, ज़रूरी दस्तावेज़, आवेदन के चरण, स्टेटस और PNGRB पर शिकायत।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PNG पाइप गैस कनेक्शन के लिए आवेदन: चरण, कागज़, स्टेटस और शिकायत",
  lead: "घर में पाइप वाली रसोई गैस (PNG) का कनेक्शन सरकार सीधे नहीं देती; आपके इलाके के लिए PNGRB से अधिकृत शहर गैस वितरण (CGD) कंपनी देती है। पहले देखें कि आपकी गली/सोसाइटी तक कंपनी की पाइपलाइन पहुंची है, फिर कंपनी की वेबसाइट, ऐप या ग्राहक सेवा केंद्र पर आवेदन करें। फीस और सिक्योरिटी डिपॉज़िट कंपनी के हिसाब से अलग होते हैं। 24 मार्च 2026 से लागू PNGRB के उपभोक्ता संरक्षण नियमों में तय समय में नया कनेक्शन और आवेदन का स्टेटस जानने का अधिकार दिया गया है।",
  facts: [
    ["कौन देता है", "इलाके की अधिकृत CGD गैस कंपनी"],
    ["शर्त", "इलाके में पाइपलाइन नेटवर्क"],
    ["खर्च", "रजिस्ट्रेशन/डिपॉज़िट कंपनी के अनुसार"],
    ["शिकायत", '<a href="https://eportal.pngrb.gov.in/consumerweb/" target="_blank" rel="noopener nofollow">PNGRB पोर्टल</a> (मुफ्त)'],
  ],
  sections: [
    {
      id: "pehle",
      title: "आवेदन से पहले",
      list: [
        "<strong>कंपनी पहचानें:</strong> पड़ोसी के PNG बिल/मीटर पर कंपनी का नाम देखें या सोसाइटी/RWA से पूछें। फिर उसी कंपनी की आधिकारिक वेबसाइट पर अपने इलाके/पिन कोड में उपलब्धता जांचें।",
        "<strong>पाइपलाइन:</strong> अगर इलाके में नेटवर्क नहीं है तो आवेदन दर्ज हो सकता है, पर कनेक्शन पाइपलाइन बिछने के बाद ही मिलेगा।",
        "<strong>बहुमंज़िला इमारत:</strong> पाइप दीवार के बाहर से ऊपर जाता है, इसलिए सोसाइटी की अनुमति लगती है।",
        "<strong>किराये का घर:</strong> मकान मालिक का NOC तैयार रखें।",
      ],
      callout: { kind: "warn", html: "PNG \"कस्टमर केयर\" के नाम से नकली नंबर और भुगतान लिंक घूमते हैं। नंबर और लिंक सिर्फ कंपनी की आधिकारिक वेबसाइट या बिल से लें। कोई OTP या UPI PIN मांगे तो न दें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "पहचान पत्र: आधार, वोटर ID, पासपोर्ट या ड्राइविंग लाइसेंस",
        "पते/मालिकाना हक का प्रमाण: रजिस्ट्री, बिजली बिल, हाउस टैक्स रसीद या सोसाइटी का प्रमाण पत्र",
        "किरायेदार के लिए किरायानामा और मकान मालिक का NOC",
        "पासपोर्ट साइज़ फोटो",
      ],
    },
    {
      id: "steps",
      title: "आवेदन के चरण",
      steps: [
        "कंपनी की वेबसाइट/ऐप पर \"New Connection\" या \"Domestic PNG Registration\" चुनें, या ग्राहक सेवा केंद्र से फॉर्म लें।",
        "नाम, पता, मोबाइल भरें और कागज़ अपलोड/जमा करें।",
        "कंपनी की बताई रजिस्ट्रेशन फीस और सिक्योरिटी डिपॉज़िट भरें। रसीद और आवेदन/BP नंबर संभालें।",
        "कंपनी का सर्वे होता है, फिर घर के अंदर पाइप, मीटर और रेगुलेटर लगाए जाते हैं।",
        "जांच (टेस्टिंग) के बाद गैस चालू (कमीशनिंग) की जाती है और सुरक्षा के बारे में बताया जाता है। चूल्हे में बदलाव की ज़रूरत हो तो वह भी इसी समय होता है।",
      ],
      callout: { kind: "info", html: "आवेदन का स्टेटस कंपनी की वेबसाइट/ऐप या ग्राहक सेवा से पूछें। PNGRB के 2025 के उपभोक्ता संरक्षण नियमों में आवेदन का स्टेटस जानना उपभोक्ता का अधिकार है।" },
    },
    {
      id: "baad",
      title: "कनेक्शन के बाद",
      list: [
        "<strong>बिल:</strong> मीटर रीडिंग के हिसाब से इस्तेमाल हुई गैस का बिल आता है। भुगतान सिर्फ कंपनी की आधिकारिक वेबसाइट/ऐप या भरोसेमंद बिल भुगतान ऐप से करें।",
        "<strong>LPG कनेक्शन:</strong> PNG लेने के बाद LPG कनेक्शन के बारे में क्या नियम है, यह अपने LPG वितरक से पूछें।",
        "<strong>घर बदलना:</strong> कनेक्शन बंद या ट्रांसफर करवाएं और रिफंडेबल डिपॉज़िट वापस लें।",
      ],
    },
    {
      id: "shikayat",
      title: "गैस लीक और शिकायत",
      list: [
        "<strong>गैस की गंध/लीक:</strong> मीटर वाला वाल्व बंद करें, बिजली के स्विच न छुएं, खिड़कियां खोलें और बिल/मीटर पर लिखे कंपनी के इमरजेंसी नंबर पर फोन करें। PNGRB के अनुसार सुरक्षा/लीक की शिकायत 24 घंटे में निपटानी होती है।",
        "<strong>देरी, बिल या मीटर की शिकायत:</strong> पहले कंपनी के ग्राहक सेवा पर दर्ज करें और शिकायत नंबर लें। ऐसी शिकायतें 7 कामकाजी दिनों में निपटानी होती हैं।",
        '<strong>हल न हो तो:</strong> <a href="https://eportal.pngrb.gov.in/consumerweb/" target="_blank" rel="noopener nofollow">PNGRB इंटीग्रेटेड शिकायत पोर्टल</a> पर मुफ्त शिकायत करें; शिकायत कंपनी को जाती है और ज़रूरत पर PNGRB तक बढ़ाई जा सकती है।',
      ],
    },
  ],
  official: [
    { href: "https://eportal.pngrb.gov.in/consumerweb/", title: "PNGRB इंटीग्रेटेड शिकायत निवारण पोर्टल", note: "तकनीकी मदद: support@pngrb.gov.in" },
    { href: "https://www.pngrb.gov.in/", title: "पेट्रोलियम और प्राकृतिक गैस विनियामक बोर्ड (PNGRB)" },
  ],
  faq: [
    { q: "PNG कनेक्शन के लिए कहां आवेदन करें?", a: "अपने इलाके की अधिकृत CGD गैस कंपनी की आधिकारिक वेबसाइट, ऐप या ग्राहक सेवा केंद्र पर। सरकार का कोई अलग आवेदन पोर्टल नहीं है।" },
    { q: "PNG कनेक्शन का खर्च कितना है?", a: "रजिस्ट्रेशन फीस और सिक्योरिटी डिपॉज़िट हर कंपनी और शहर में अलग है। आवेदन से पहले कंपनी की वेबसाइट पर मौजूदा फीस देखें।" },
    { q: "कनेक्शन कितने दिन में मिलता है?", a: "PNGRB के उपभोक्ता संरक्षण नियम (24 मार्च 2026 से लागू) तय समय में नया कनेक्शन पाने का अधिकार देते हैं। असल समय इस पर भी निर्भर है कि आपके इलाके में पाइपलाइन पहुंची है या नहीं; कंपनी से अपेक्षित तारीख पूछें।" },
    { q: "क्या किरायेदार PNG ले सकता है?", a: "हां, आम तौर पर किरायानामा और मकान मालिक का NOC देकर। शर्तें कंपनी के नियमों पर निर्भर हैं।" },
    { q: "शिकायत का हल न हो तो?", a: "PNGRB के इंटीग्रेटेड शिकायत निवारण पोर्टल पर मुफ्त शिकायत करें और रेफरेंस नंबर से स्थिति देखें।" },
  ],
  related: [
    { href: "/service/piped-natural-gas-connection.html", emoji: "🔥", title: "PNG कनेक्शन: पूरी जानकारी", text: "कंपनी, खर्च और शिकायत" },
    { href: "/service/lpg-cylinder-booking.html", emoji: "🛢️", title: "LPG सिलेंडर बुकिंग", text: "रिफिल बुक करने के तरीके" },
    { href: "/service/lpg-subsidy-pahal.html", emoji: "💰", title: "LPG सब्सिडी (PAHAL)", text: "सब्सिडी स्टेटस" },
    { href: "/service/pm-ujjwala-yojana.html", emoji: "👩‍🍳", title: "उज्ज्वला योजना", text: "गरीब परिवारों को गैस कनेक्शन" },
  ],
  aside: [
    { href: "https://eportal.pngrb.gov.in/consumerweb/", label: "📝 PNGRB पर शिकायत" },
    { href: "/service/piped-natural-gas-connection.html", label: "🔥 PNG पूरी जानकारी" },
  ],
};
