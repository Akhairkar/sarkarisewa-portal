import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): eportal.pngrb.gov.in/consumerweb FAQ
// (PNGRB Integrated Grievance Redressal Portal for PNG/CNG/LPG/fuel stations,
// auto-routed to the entity, escalation to PNGRB, free; timelines: LPG/PNG
// service issues 7 working days, safety/leakage 24 hours; support@pngrb.gov.in);
// SCC Online 3 Apr 2026 on PNGRB (Consumer Protection) Regulations, 2025 (in
// force 24 Mar 2026: right to new connection within timeline, application
// status, complaint channels, escalation); vgl.co.in (example CGD form/security
// deposit, fees differ by company). PNG is supplied by the authorised City Gas
// Distribution (CGD) company of each area; fees, deposits and helplines differ
// by company and are not stated. The old page's helpline 1800-266-3110 could not
// be verified and was dropped.
export const pipedNaturalGasConnection: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "पाइप्ड नेचुरल गैस (PNG) कनेक्शन" },
  ],
  docHi: "पाइप्ड नेचुरल गैस (PNG) कनेक्शन",
  title: "पाइप्ड नेचुरल गैस (PNG) कनेक्शन 2026",
  description: "घर में पाइप वाली रसोई गैस (PNG) का नया कनेक्शन: अपने शहर की गैस कंपनी कैसे पहचानें, कागज़, फीस-डिपॉज़िट, कितना समय और PNGRB पोर्टल पर शिकायत।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पाइप्ड नेचुरल गैस (PNG) कनेक्शन 2026: आवेदन, कागज़, खर्च और शिकायत",
  lead: "घरेलू PNG कनेक्शन आपके इलाके की अधिकृत शहर गैस वितरण (CGD) कंपनी देती है, जैसे दिल्ली-NCR में IGL या दूसरे शहरों में GAIL Gas, Adani Total Gas, Gujarat Gas, MGL आदि। कनेक्शन तभी मिलता है जब आपकी गली/सोसाइटी तक पाइपलाइन पहुंच चुकी हो। आवेदन कंपनी की वेबसाइट, ऐप या दफ्तर में होता है; फीस और सिक्योरिटी डिपॉज़िट कंपनी तय करती है। सेवा से जुड़ी शिकायत का हल न हो तो नियामक PNGRB के पोर्टल पर शिकायत कर सकते हैं।",
  facts: [
    ["कौन देता है", "आपके इलाके की अधिकृत CGD गैस कंपनी"],
    ["शर्त", "आपके इलाके में पाइपलाइन नेटवर्क होना चाहिए"],
    ["खर्च", "रजिस्ट्रेशन/डिपॉज़िट कंपनी के अनुसार"],
    ["शिकायत", "पहले कंपनी, फिर PNGRB पोर्टल (मुफ्त)"],
  ],
  sections: [
    {
      id: "company",
      title: "अपने शहर की गैस कंपनी कैसे पहचानें",
      list: [
        "पड़ोस में जिनके घर PNG है, उनके बिल या मीटर पर कंपनी का नाम देखें।",
        "अपनी सोसाइटी/RWA या नगर निगम से पूछें कि इलाके में किस कंपनी का नेटवर्क है।",
        "हर भौगोलिक क्षेत्र के लिए CGD कंपनी PNGRB अधिकृत करता है। कंपनी की आधिकारिक वेबसाइट पर अपने पिन कोड/इलाके में उपलब्धता जांचें।",
      ],
      callout: { kind: "warn", html: "इंटरनेट पर \"PNG कस्टमर केयर\" के नाम से नकली नंबर और बिल भुगतान के झूठे लिंक घूमते हैं। हेल्पलाइन नंबर सिर्फ कंपनी की आधिकारिक वेबसाइट या अपने बिल से लें। कोई UPI PIN या OTP मांगे तो न दें।" },
    },
    {
      id: "avedan",
      title: "नए कनेक्शन के लिए आवेदन",
      steps: [
        "कंपनी की वेबसाइट/ऐप पर \"New Connection\" या \"Domestic PNG Registration\" चुनें, या कंपनी के ग्राहक सेवा केंद्र से फॉर्म लें।",
        "नाम, पता, मोबाइल भरें और कागज़ अपलोड/जमा करें।",
        "कंपनी की बताई रजिस्ट्रेशन फीस और सिक्योरिटी डिपॉज़िट भरें (कुछ कंपनियां किस्तों का विकल्प भी देती हैं)। रसीद संभालें।",
        "कंपनी सर्वे करती है, फिर घर के अंदर पाइप, मीटर और रेगुलेटर लगाती है और जांच के बाद गैस चालू करती है।",
      ],
      callout: { kind: "info", html: "किराये पर रहते हैं तो आम तौर पर मकान मालिक की अनुमति (NOC) मांगी जाती है। घर छोड़ते समय कनेक्शन बंद/ट्रांसफर करवाकर रिफंडेबल डिपॉज़िट वापस लें।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "पहचान पत्र: आधार, वोटर ID, पासपोर्ट या ड्राइविंग लाइसेंस",
        "पते/मालिकाना हक का प्रमाण: रजिस्ट्री, बिजली बिल, हाउस टैक्स रसीद या सोसाइटी का प्रमाण",
        "किरायेदार हों तो किरायानामा और मकान मालिक का NOC",
        "पासपोर्ट साइज़ फोटो",
      ],
    },
    {
      id: "shikayat",
      title: "शिकायत और गैस लीक",
      list: [
        "<strong>गैस की गंध/लीक:</strong> तुरंत मीटर वाला वाल्व बंद करें, बिजली के स्विच न छुएं, खिड़कियां खोलें और कंपनी के इमरजेंसी नंबर (बिल/मीटर पर लिखा) पर फोन करें। PNGRB के अनुसार सुरक्षा/लीक की शिकायत 24 घंटे में निपटानी होती है।",
        "<strong>कनेक्शन में देरी, बिल, मीटर की शिकायत:</strong> पहले कंपनी के ग्राहक सेवा पर शिकायत करें और नंबर लें। PNGRB के अनुसार ऐसी शिकायतें 7 कामकाजी दिनों में निपटानी होती हैं।",
        "<strong>हल न हो तो:</strong> <a href=\"https://eportal.pngrb.gov.in/consumerweb/\" target=\"_blank\" rel=\"noopener nofollow\">PNGRB इंटीग्रेटेड शिकायत पोर्टल</a> पर शिकायत दर्ज करें। शिकायत अपने आप कंपनी को जाती है और संतुष्ट न होने पर PNGRB तक बढ़ाई जा सकती है। यह सेवा मुफ्त है।",
      ],
    },
  ],
  official: [
    { href: "https://eportal.pngrb.gov.in/consumerweb/", title: "PNGRB इंटीग्रेटेड शिकायत निवारण पोर्टल", note: "तकनीकी मदद: support@pngrb.gov.in" },
    { href: "https://www.pngrb.gov.in/", title: "पेट्रोलियम और प्राकृतिक गैस विनियामक बोर्ड (PNGRB)" },
  ],
  faq: [
    { q: "PNG कनेक्शन कौन देता है?", a: "आपके इलाके के लिए अधिकृत शहर गैस वितरण (CGD) कंपनी। सरकार सीधे कनेक्शन नहीं देती।" },
    { q: "PNG कनेक्शन में कितना खर्च आता है?", a: "रजिस्ट्रेशन फीस और सिक्योरिटी डिपॉज़िट हर कंपनी और शहर में अलग है। आवेदन से पहले कंपनी की वेबसाइट पर मौजूदा फीस देखें।" },
    { q: "क्या किरायेदार PNG ले सकता है?", a: "हां, आम तौर पर किरायानामा और मकान मालिक का NOC देकर। शर्तें कंपनी के नियमों पर निर्भर हैं।" },
    { q: "शिकायत का हल नहीं हुआ तो क्या करें?", a: "PNGRB के इंटीग्रेटेड शिकायत निवारण पोर्टल (eportal.pngrb.gov.in) पर मुफ्त शिकायत करें और रेफरेंस नंबर से स्थिति देखें।" },
    { q: "क्या PNG लेने पर LPG कनेक्शन छोड़ना होगा?", a: "यह आपकी तेल कंपनी और सरकार के मौजूदा नियमों पर निर्भर है। अपने LPG वितरक से पूछें कि PNG लेने के बाद LPG कनेक्शन के बारे में क्या नियम है।" },
  ],
  related: [
    { href: "/service/png-piped-gas-connection-apply.html", emoji: "🔥", title: "PNG कनेक्शन आवेदन", text: "आवेदन के चरण" },
    { href: "/service/lpg-cylinder-booking.html", emoji: "🛢️", title: "LPG सिलेंडर बुकिंग", text: "रिफिल बुक करने के तरीके" },
    { href: "/service/lpg-subsidy-pahal.html", emoji: "💰", title: "LPG सब्सिडी (PAHAL)", text: "सब्सिडी स्टेटस" },
    { href: "/service/pm-ujjwala-yojana.html", emoji: "👩‍🍳", title: "उज्ज्वला योजना", text: "गरीब परिवारों को गैस कनेक्शन" },
  ],
  aside: [
    { href: "https://eportal.pngrb.gov.in/consumerweb/", label: "📝 PNGRB पर शिकायत" },
    { href: "/service/lpg-cylinder-booking.html", label: "🛢️ LPG बुकिंग गाइड" },
  ],
};
