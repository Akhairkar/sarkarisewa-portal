import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; Sikkim government sites not reachable from the
// sandbox, search-result extracts used): rmdd.sikkim.gov.in "Program and
// Schemes" (SGAY listed as a state-sponsored housing scheme of the Rural
// Management and Development Department for underprivileged families),
// ipr.sikkim.gov.in press releases (BDO Namchi, 1 Sep 2025: four new SGAY
// houses inaugurated and handed over in 11-Namchi Singithang; BDO Daramdin:
// houses handed over under the "Jhopari Mukt Sikkim" goal), sikkim.gov.in
// Operational Guidelines for SUGAY (9 May 2024: urban scheme supplements rural
// SGAY towards a kutcha-house-free state; urban eligibility SSC/COI/RC holder,
// no pucca house anywhere in India, household income up to Rs 6 lakh, no
// regular government employee in family). Rural SGAY guidelines, unit cost and
// house size were not found, so left out.
export const sikkimSgayYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "सिक्किम", href: "/states/sikkim.html" },
    { label: "SGAY योजना" },
  ],
  docHi: "SGAY योजना",
  title: "SGAY Yojana",
  description: "sikkim राज्य सरकार की यह आवास (Housing) योजना नागरिकों के जीवन स्तर को सुधारने और उन्हें आत्मनिर्भर बनाने के लिए शुरू की गई है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "सिक्किम गरीब आवास योजना (SGAY): गांव के गरीब परिवारों को पक्का घर",
  lead: "सिक्किम गरीब आवास योजना (SGAY) सिक्किम सरकार के ग्रामीण प्रबंधन एवं विकास विभाग (RMDD) की राज्य योजना है, जिसमें गांव के कच्चे घर या झोपड़ी में रहने वाले गरीब परिवारों को पक्का घर दिया जाता है। मकसद राज्य को \"झोपड़ी मुक्त\" (कच्चा घर मुक्त) बनाना है। शहरों के लिए इसी तरह की अलग योजना <strong>SUGAY</strong> (सिक्किम अर्बन गरीब आवास योजना) है। लाभार्थी का चयन ब्लॉक/पंचायत स्तर से होता है; इसका कोई खुला ऑनलाइन आवेदन हमें नहीं मिला।",
  facts: [
    ["राज्य", "सिक्किम (ग्रामीण क्षेत्र)"],
    ["विभाग", "ग्रामीण प्रबंधन एवं विकास विभाग (RMDD)"],
    ["लाभ", "कच्चे घर की जगह पक्का घर"],
    ["कहां पूछें", "BDO कार्यालय / ग्राम पंचायत"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "योजना में क्या मिलता है",
      list: [
        "<strong>पक्का घर:</strong> सरकारी प्रेस नोट के अनुसार SGAY के तहत बने नए घरों का उद्घाटन करके उन्हें लाभार्थियों को सौंपा जाता है, जैसे 1 सितंबर 2025 को नामची सिंगीथांग क्षेत्र में चार घर।",
        "<strong>ज़रूरी सुविधाएं:</strong> प्रेस नोट में घरों को ज़रूरी सुविधाओं वाले घर बताया गया है।",
        "<strong>लक्ष्य:</strong> गांवों को कच्चे घर और झोपड़ी से मुक्त करना (\"Jhopari Mukt Sikkim\")।",
      ],
      callout: { kind: "info", html: "घर का आकार, लागत और हर साल कितने घर बनेंगे, यह हमें सरकारी स्रोत से पक्का नहीं मिला। ये बातें अपने BDO कार्यालय से पूछें।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र हो सकता है",
      intro: "ग्रामीण SGAY के पूरे दिशानिर्देश हमें नहीं मिले। आम तौर पर ये बातें देखी जाती हैं:",
      list: [
        "परिवार गांव में <strong>कच्चे घर या झोपड़ी</strong> में रहता हो",
        "परिवार गरीब/आर्थिक रूप से कमज़ोर हो",
        "सिक्किम का निवास प्रमाण (जैसे सिक्किम सब्जेक्ट/COI) हो",
      ],
      callout: { kind: "ok", html: "शहर की SUGAY योजना (मई 2024 के दिशानिर्देश) की शर्तें: लाभार्थी SSC/COI/RC धारक हो, भारत में कहीं भी अपने नाम पक्का घर न हो, परिवार की सालाना आय ₹6 लाख से ज़्यादा न हो, और परिवार में कोई नियमित सरकारी कर्मचारी न हो।" },
    },
    {
      id: "kaise",
      title: "घर के लिए कैसे पूछें",
      steps: [
        "<strong>ग्राम पंचायत या BDO कार्यालय जाएं:</strong> बताएं कि आप कच्चे घर में रहते हैं और SGAY की सूची में नाम चाहते हैं।",
        "<strong>कागज़ साथ रखें:</strong> COI/सिक्किम सब्जेक्ट, आधार, राशन कार्ड, बैंक पासबुक और ज़मीन से जुड़ा कागज़।",
        "<strong>सर्वे/जांच:</strong> विभाग के कर्मचारी घर की हालत देखते हैं; चयन के बाद सूची बनती है।",
        "<strong>शहर में रहते हैं तो:</strong> SUGAY के लिए शहरी विकास विभाग या नगर निकाय से पूछें।",
      ],
      callout: { kind: "warn", html: "घर दिलाने के नाम पर पैसे मांगने वाले बिचौलियों से बचें। शिकायत BDO या ज़िला कलेक्टर कार्यालय में करें।" },
    },
  ],
  official: [
    { href: "https://rmdd.sikkim.gov.in/", title: "ग्रामीण प्रबंधन एवं विकास विभाग, सिक्किम" },
    { href: "https://sikkim.gov.in/", title: "सिक्किम सरकार का पोर्टल", note: "SUGAY के दिशानिर्देश यहीं प्रकाशित हुए" },
    { href: "https://ipr.sikkim.gov.in/", title: "सूचना एवं जनसंपर्क विभाग, सिक्किम" },
  ],
  faq: [
    { q: "SGAY का पूरा नाम क्या है?", a: "सिक्किम गरीब आवास योजना (Sikkim Garib Awas Yojana)। यह सिक्किम सरकार के ग्रामीण प्रबंधन एवं विकास विभाग की योजना है।" },
    { q: "SGAY और SUGAY में क्या फर्क है?", a: "SGAY गांवों के लिए है। SUGAY (सिक्किम अर्बन गरीब आवास योजना) शहरों के लिए 2024 में आई, ताकि दोनों मिलकर राज्य को कच्चा घर मुक्त बनाएं।" },
    { q: "क्या SGAY का ऑनलाइन फॉर्म है?", a: "हमें इसका कोई खुला ऑनलाइन आवेदन नहीं मिला। चयन पंचायत/BDO स्तर से होता है।" },
    { q: "घर कितने रुपये का बनता है?", a: "लागत और घर का आकार हमें सरकारी स्रोत से नहीं मिला, इसलिए हम कोई राशि नहीं लिख रहे। BDO कार्यालय से पूछें।" },
  ],
  related: [
    { href: "/service/sikkim-aama-yojana.html", emoji: "👩‍👧", title: "सिक्किम आमा योजना", text: "माताओं को सालाना सहायता" },
    { href: "/service/sikkim-domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र (सिक्किम)", text: "राज्य की योजनाओं के लिए" },
    { href: "/service/sikkim-ration-card.html", emoji: "🍚", title: "राशन कार्ड (सिक्किम)", text: "गरीब परिवारों के लिए" },
    { href: "/states/sikkim.html", emoji: "🗺️", title: "सिक्किम की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://rmdd.sikkim.gov.in/", label: "🏠 RMDD सिक्किम" },
    { href: "/states/sikkim.html", label: "🗺️ सिक्किम की सेवाएं" },
  ],
};
