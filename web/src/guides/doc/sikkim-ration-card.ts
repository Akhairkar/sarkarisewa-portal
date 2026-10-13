import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/SK: Department of Food, Civil Supplies and Consumer
//   Affairs (secy-food, 03592-202708); schemes Annapurna, AAY, PHH; 1,293 FPS;
//   96,749 ration cards (AAY 16,498, PHH 80,251); helpdesk 1967 and
//   1800-345-3236; RCMS epds.nic.in/SIKKIM/epds; FEAST feastsk.gov.in ("Know
//   Your Ration Entitlement"); grievance sikkimpds.grams.nic.in.
// - sikkimfcs.sikkim.gov.in (Food & Civil Supplies Dept., Govt. of Sikkim):
//   NFSA page (NFSA in Sikkim from 1 Jan 2016; Sikkim Food Security Rules,
//   2014; AAY criteria; PHH exclusion criteria and the documents SSC / COI /
//   Voter ID / surrender certificate); Selection Criteria tabs AAY, PHH,
//   OPH(S), OPH(G), NPH; Policy & Rate Chart (AAY/PHH rice ₹0); Downloadable
//   Forms ("RATION CARD FORM"); Grievance Redressal (DGROs in all districts,
//   1967 or 03592-202489); PDS Helpline page (updated 22 Apr 2026): toll free
//   1800-345-3236, landline 03592-204439, ONORC help desk 03592-204437, in
//   English, Hindi and Nepali.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: where exactly the filled form is submitted, fees and time limits
// (no official page we could open says), and the OPH(G) quantities/prices
// (the rate chart was last updated in Sep 2023). The old page's "ServicePlus
// online apply" claim was not confirmed and is dropped. epds.nic.in/SIKKIM
// returned 404 and feastsk.gov.in did not resolve from here.
export const sikkimRationCard: DocGuide = {
  state: { slug: "sikkim", hi: "सिक्किम" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Sikkim Ration Card 2026: Apply & Status",
  description: "सिक्किम राशन कार्ड 2026: AAY, PHH और राज्य के OPH कार्ड, PHH की शर्तें, विभाग की वेबसाइट से फॉर्म, ज़रूरी कागज़, e-KYC और हेल्पलाइन 1800-345-3236 / 1967।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "सिक्किम राशन कार्ड 2026: कार्ड के प्रकार, पात्रता, आवेदन और हेल्पलाइन",
  lead: "सिक्किम में राशन कार्ड खाद्य एवं नागरिक आपूर्ति विभाग (Food & Civil Supplies Department), गंगटोक बनाता है। NFSA के तहत यहां अंत्योदय (AAY) और प्राथमिकता परिवार (PHH) कार्ड हैं, और राज्य के अपने OPH कार्ड भी हैं। राशन कार्ड का फॉर्म विभाग की वेबसाइट sikkimfcs.sikkim.gov.in पर \"Downloadable Forms\" में मिलता है।",
  facts: [
    ["राज्य में कार्ड", "96,749 (NFSA पोर्टल)"],
    ["राशन दुकानें", "1,293"],
    ["अनाज (NFSA)", "AAY: 35 किलो/परिवार, PHH: 5 किलो/व्यक्ति"],
    ["हेल्पलाइन", "1800-345-3236, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार वाली PoS मशीन पर अंगूठा/उंगली लगाकर मिलता है। परिवार के हर सदस्य का आधार राशन कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> होना चाहिए।",
  sections: [
    {
      id: "prakar",
      title: "सिक्किम में राशन कार्ड के प्रकार",
      intro: "NFSA पोर्टल के अनुसार सिक्किम में <strong>96,749 राशन कार्ड</strong> और <strong>1,293 राशन दुकानें</strong> हैं। सिक्किम में NFSA 1 जनवरी 2016 से लागू है।",
      table: {
        head: ["कार्ड", "कार्ड (NFSA पोर्टल)", "हर महीने अनाज"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "16,498", "<strong>35 किलो चावल प्रति परिवार</strong>, मुफ्त"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "80,251", "<strong>5 किलो चावल प्रति व्यक्ति</strong>, मुफ्त"],
          ["<strong>OPH(S), OPH(G), NPH</strong> (राज्य की श्रेणियां)", "—", "विभाग की रेट चार्ट के अनुसार, कीमत देकर"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की 04.12.2023 की अधिसूचना के अनुसार AAY और PHH का अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। राज्य की OPH श्रेणियों की मात्रा और दाम विभाग की <a href=\"https://sikkimfcs.sikkim.gov.in/Public/PDSSection/PolicyRateChart\" target=\"_blank\" rel=\"noopener nofollow\">Policy & Rate Chart</a> में देखें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है AAY और PHH कार्ड",
      intro: "विभाग की वेबसाइट के अनुसार <strong>AAY</strong> में भूमिहीन खेतिहर परिवार, सीमांत किसान, ग्रामीण कारीगर, झुग्गी में रहने वाले, रोज़ कमाने वाले मज़दूर, और ऐसे विधवा/गंभीर रोगी/दिव्यांग/60+ लोग आते हैं जिनका कोई पक्का सहारा नहीं है। <strong>PHH</strong> सिक्किम खाद्य सुरक्षा नियम, 2014 के अनुसार आर्थिक रूप से कमज़ोर परिवारों को मिलता है, पर ये परिवार PHH में <strong>नहीं</strong> आते:",
      list: [
        "जिसके घर में कोई केंद्र/राज्य सरकार, PSU या सेना की <strong>नियमित नौकरी</strong> या वर्क-चार्ज नौकरी में हो, या सरकारी नौकरी से <strong>रिटायर</strong> हो",
        "जिसके किसी सदस्य के नाम <strong>टैक्सी या निजी गाड़ी</strong> हो",
        "जिसका <strong>पक्का मकान</strong> हो (CMRH और REDRH मकान इसमें नहीं गिने जाते)",
        "जो घर से <strong>₹10,000 महीने से ज़्यादा किराया</strong> कमाता हो",
        "जिसका कोई सदस्य क्लास I, IA, 2 या 3 का <strong>सरकारी ठेकेदार</strong> हो",
        "जिसके पास <strong>2.5 एकड़ से ज़्यादा खेती की ज़मीन</strong> या 5 एकड़ से ज़्यादा बंजर ज़मीन हो",
        "जिसकी खेती/फूलों की खेती/पशुपालन के कारोबार या किसी और ज़रिये से <strong>₹1.20 लाख सालाना से ज़्यादा</strong> कमाई हो",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "विभाग के अनुसार चुने गए हर परिवार के पास इनमें से कोई एक कागज़ होना चाहिए:",
      list: [
        "<strong>सिक्किम सब्जेक्ट सर्टिफिकेट (SSC)</strong>, या",
        "<strong>सर्टिफिकेट ऑफ आइडेंटिफिकेशन (COI)</strong>, या",
        "चुनाव विभाग का <strong>वोटर ID कार्ड</strong>, या",
        "बाहर के राज्य से आए हों तो वहां के खाद्य विभाग का <strong>राशन कार्ड सरेंडर सर्टिफिकेट</strong>",
      ],
      html: "<p>इनके साथ परिवार के सभी सदस्यों का <strong>आधार</strong>, मुखिया की फोटो और बैंक खाते का विवरण भी तैयार रखें। अंतिम सूची वही है जो फॉर्म में मांगी गई हो।</p>",
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन कैसे करें",
      steps: [
        '<a href="https://sikkimfcs.sikkim.gov.in/" target="_blank" rel="noopener nofollow">sikkimfcs.sikkim.gov.in</a> खोलें और <strong>e-Citizen → Downloadable Forms</strong> में "RATION CARD FORM" डाउनलोड करें।',
        "फॉर्म में मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें।",
        "ऊपर बताए कागज़ों की कॉपी लगाएं।",
        "भरा हुआ फॉर्म खाद्य एवं नागरिक आपूर्ति विभाग के अपने ज़िले के कार्यालय में जमा करें और रसीद लें।",
      ],
      callout: { kind: "warn", html: "13 अक्टूबर 2026 तक हमें सिक्किम में नए राशन कार्ड का कोई चालू ऑनलाइन आवेदन पोर्टल नहीं मिला। फॉर्म कहां जमा होगा और कोई फीस है या नहीं, यह पहले विभाग (03592-202708) या अपने ज़िले के खाद्य कार्यालय से पूछ लें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना और बदलाव",
      list: [
        "नए सदस्य (बच्चा, शादी के बाद आई बहू) का नाम जोड़ने के लिए उसका <strong>आधार</strong> और जन्म प्रमाण पत्र / पुराने कार्ड से नाम हटने का सबूत रखें।",
        "किसी सदस्य की मृत्यु होने पर मृत्यु प्रमाण पत्र के साथ नाम हटवाएं।",
        "सिक्किम छोड़कर दूसरे राज्य में बस रहे हों तो विभाग से <strong>सरेंडर सर्टिफिकेट</strong> लें, ताकि वहां नया कार्ड बन सके।",
      ],
      callout: { kind: "info", html: "इन बदलावों के लिए अलग फॉर्म और समय-सीमा विभाग की वेबसाइट पर नहीं लिखी है। ज़िला खाद्य कार्यालय या हेल्पलाइन से पूछें।" },
    },
    {
      id: "status",
      title: "राशन का हक और कार्ड का विवरण कैसे देखें",
      list: [
        'NFSA पोर्टल पर सिक्किम के लिए <strong>"Know Your Ration Entitlement"</strong> (FEAST Sikkim) का लिंक दिया गया है, जिससे कार्ड पर मिलने वाला हक देखा जाता है।',
        '<strong>Mera Ration ऐप</strong> (केंद्र सरकार) में राशन कार्ड नंबर डालकर सदस्य, हर महीने का हक और लेन-देन देखें।',
        'राज्य के कार्ड की ज़िलेवार गिनती NFSA पोर्टल के <a href="https://nfsa.gov.in/State/SK" target="_blank" rel="noopener nofollow">सिक्किम पेज</a> पर मिलती है।',
      ],
      callout: { kind: "info", html: "13 अक्टूबर 2026 को विभाग की वेबसाइट का \"Ration Card\" पेज \"NIC ePDS Server Unreachable\" दिखा रहा था। न खुले तो कुछ समय बाद कोशिश करें या Mera Ration ऐप इस्तेमाल करें।" },
    },
    {
      id: "ekyc",
      title: "e-KYC, One Nation One Ration Card और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार e-KYC राशन दुकान की PoS मशीन पर अंगूठा/उंगली लगाकर होती है। सिक्किम का ONORC हेल्प डेस्क: <strong>03592-204437</strong>।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड वाले देश में कहीं भी किसी भी e-PoS दुकान से अपना हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप:</strong> कार्ड का विवरण, हर महीने का हक, नज़दीकी दुकान और शिकायत।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-345-3236</strong>: सिक्किम PDS टोल-फ्री नंबर (अंग्रेज़ी, हिंदी और नेपाली में)",
        "<strong>03592-204439</strong>: PDS हेल्पलाइन (लैंडलाइन)",
        "<strong>1967</strong> या <strong>03592-202489</strong>: शिकायत दर्ज करने का नंबर (विभाग की शिकायत पेज के अनुसार)",
        "ज़िलों में <strong>ज़िला शिकायत निवारण अधिकारी (DGRO)</strong> नियुक्त हैं",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="http://sikkimpds.grams.nic.in/" target="_blank" rel="noopener nofollow">sikkimpds.grams.nic.in</a> (NFSA पोर्टल पर दिया गया लिंक)',
      ],
    },
  ],
  official: [
    { href: "https://sikkimfcs.sikkim.gov.in/", title: "खाद्य एवं नागरिक आपूर्ति विभाग, सिक्किम: फॉर्म, पात्रता, रेट चार्ट, हेल्पलाइन" },
    { href: "https://nfsa.gov.in/State/SK", title: "NFSA पोर्टल: सिक्किम का पेज (कार्ड, दुकानें, हेल्पलाइन, लिंक)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "सिक्किम में नया राशन कार्ड कैसे बनवाएं?", a: "sikkimfcs.sikkim.gov.in के Downloadable Forms से राशन कार्ड फॉर्म लें, भरकर SSC/COI/वोटर ID जैसे कागज़ और सभी सदस्यों के आधार के साथ अपने ज़िले के खाद्य कार्यालय में जमा करें। हमें इसका ऑनलाइन आवेदन पोर्टल नहीं मिला।" },
    { q: "सिक्किम में PHH कार्ड किसे नहीं मिलता?", a: "जिनके घर में सरकारी नौकरी वाला या सरकारी पेंशनर हो, टैक्सी/निजी गाड़ी हो, पक्का मकान हो (CMRH/REDRH छोड़कर), ₹10,000 महीने से ज़्यादा किराया आता हो, 2.5 एकड़ से ज़्यादा खेती की ज़मीन हो या कारोबार से ₹1.20 लाख सालाना से ज़्यादा कमाई हो।" },
    { q: "OPH कार्ड क्या है?", a: "OPH(S), OPH(G) और NPH सिक्किम सरकार की अपनी श्रेणियां हैं, जो NFSA की AAY/PHH से अलग हैं। इन पर अनाज कीमत देकर मिलता है; मात्रा और दाम विभाग की Policy & Rate Chart में देखें।" },
    { q: "सिक्किम में राशन कार्ड पर कितना अनाज मिलता है?", a: "AAY कार्ड पर 35 किलो चावल प्रति परिवार और PHH पर 5 किलो चावल प्रति व्यक्ति हर महीने, 31 दिसंबर 2028 तक मुफ्त।" },
    { q: "सिक्किम राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1800-345-3236, लैंडलाइन 03592-204439 और ONORC हेल्प डेस्क 03592-204437। शिकायत के लिए 1967 या 03592-202489।" },
    { q: "क्या सिक्किम का राशन कार्ड दूसरे राज्य में चलता है?", a: "हाँ, One Nation One Ration Card के तहत NFSA (AAY/PHH) कार्ड से देश की किसी भी e-PoS दुकान पर आधार से अपना राशन ले सकते हैं।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/sikkim-income-certificate.html", emoji: "💰", title: "सिक्किम आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/sikkim-domicile-certificate.html", emoji: "🏠", title: "सिक्किम निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/sikkim-birth-certificate.html", emoji: "👶", title: "सिक्किम जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/service/csc-locator/sikkim.html", emoji: "📍", title: "सिक्किम CSC सेंटर", text: "नज़दीकी केंद्र" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://sikkimfcs.sikkim.gov.in/Public/eCitizenDetails/eCitizenDetails/43", label: "📝 राशन कार्ड फॉर्म" },
    { href: "/service/csc-locator/sikkim.html", label: "📍 नज़दीकी CSC" },
  ],
};
