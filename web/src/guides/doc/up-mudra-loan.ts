import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 7 Nov 2026):
// - PMMY categories and Tarun Plus: PIB release dated 29 Oct 2024 (Shishu up to
//   ₹50,000; Kishore ₹50,000-₹5 lakh; Tarun ₹5-10 lakh; Tarun Plus ₹10-20 lakh
//   for those who earlier took and repaid a Tarun loan; CGFMU guarantee on the
//   enhanced loans; ₹20 lakh limit effective 24 Oct 2024). Other national PMMY
//   facts are on the national page (pm-mudra-yojana) and are not repeated here.
// - ODOP margin money: Government Order 13/2018 (dated 24 Sep 2018, "Ek Janpad
//   Ek Utpad" financing support) published on odopup.in
//   (assets/document/GO/GO_Margin_Money_2018.pdf), and the odopup.in margin
//   money scheme page, which still lists the scheme with an "Apply Now" link to
//   msme.up.gov.in. The GO is from 2018; whether the scheme is open for new
//   applications today was NOT confirmed from an official notice, so the page
//   tells readers to confirm with the District Industries Centre.
// - District-wise ODOP products: odopup.in/en/districts ("Showing 75 of 75
//   districts"), copied as shown on 7 Nov 2026.
// - CM-YUVA / MYUVA: official UP MSME scheme pages could not be opened, and news
//   reports disagree on amounts and phases, so NO figures are stated.
// - Not stated anywhere: whether a Mudra loan can be combined with ODOP margin
//   money (not found in an official document). The page says so.
export const upMudraLoan: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "उत्तर प्रदेश", href: "/states/uttar-pradesh.html" },
    { label: "मुद्रा लोन और ODOP मार्जिन मनी" },
  ],
  docHi: "उत्तर प्रदेश में मुद्रा लोन",
  promo: gstinPromo,
  title: "यूपी में मुद्रा लोन 2026: ODOP मार्जिन मनी और 75 ज़िलों के उत्पाद",
  description: "उत्तर प्रदेश में कारोबार के लिए मुद्रा लोन और ODOP मार्जिन मनी: कौन सा कब लें, 75 ज़िलों के ODOP उत्पाद, मार्जिन मनी की दरें, पात्रता और आवेदन का तरीका।",
  published: "2026-11-07",
  modified: "2026-11-07",
  verified: "7 नवंबर 2026",
  h1: "उत्तर प्रदेश में मुद्रा लोन 2026: ODOP मार्जिन मनी, 75 ज़िलों के उत्पाद और आवेदन",
  lead: "उत्तर प्रदेश में अपना काम शुरू करने के लिए दो रास्ते सबसे आम हैं: केंद्र की मुद्रा योजना (PMMY), जिसमें बैंक से ₹20 लाख तक का लोन मिलता है, और राज्य की ODOP (एक जनपद एक उत्पाद) मार्जिन मनी योजना, जिसमें आपके ज़िले के तय उत्पाद पर बैंक लोन के साथ सरकार मार्जिन मनी देती है। यह गाइड बताती है कि दोनों में फ़र्क क्या है, आपके ज़िले का ODOP उत्पाद कौन सा है, और आवेदन कहां से करें।",
  facts: [
    ["मुद्रा लोन", "₹20 लाख तक (शिशु, किशोर, तरुण, तरुण प्लस)"],
    ["ODOP मार्जिन मनी", "प्रोजेक्ट लागत के हिसाब से, अधिकतम ₹20 लाख तक"],
    ["ODOP के लिए शर्त", "आपके ज़िले का तय ODOP उत्पाद, कम से कम 18 साल उम्र"],
    ["कहां आवेदन", "मुद्रा: बैंक शाखा; ODOP: ज़िला उद्योग केंद्र (DIC)"],
  ],
  notice: "<strong>ध्यान रखें:</strong> मुद्रा लोन और ODOP मार्जिन मनी अलग योजनाएं हैं। दोनों एक साथ ली जा सकती हैं या नहीं, यह हमें किसी आधिकारिक दस्तावेज़ में साफ़ नहीं मिला, इसलिए आवेदन से पहले DIC और बैंक से लिखित में पूछ लें।",
  sections: [
    {
      id: "kaun-sa",
      title: "आपके लिए कौन सा रास्ता सही है",
      table: {
        head: ["आपकी स्थिति", "विकल्प", "ध्यान रखें"],
        rows: [
          ["छोटा काम, ₹50,000 तक की ज़रूरत", "मुद्रा शिशु", "बैंक शाखा में आवेदन"],
          ["दुकान, सेवा या छोटा उत्पादन, ₹50,000 से ₹5 लाख", "मुद्रा किशोर", "बैंक आपका काम और चुकाने की क्षमता देखता है"],
          ["बड़ा काम, ₹5 से ₹10 लाख", "मुद्रा तरुण", "बैंक की शर्तों के अनुसार"],
          ["पहले तरुण लोन चुका चुके हैं, ₹10 से ₹20 लाख", "मुद्रा तरुण प्लस", "पहले का तरुण लोन समय पर चुका होना ज़रूरी"],
          ["आपके ज़िले के ODOP उत्पाद का कारखाना या इकाई", "ODOP मार्जिन मनी", "प्रोजेक्ट उसी ज़िले के तय उत्पाद का होना चाहिए"],
        ],
      },
      callout: { kind: "info", html: "मुद्रा की राशि और श्रेणियां <a href=\"/service/pm-mudra-yojana.html\">पीएम मुद्रा योजना की गाइड</a> में विस्तार से हैं। यहां सिर्फ़ उत्तर प्रदेश से जुड़ी जानकारी दी गई है।" },
    },
    {
      id: "mudra",
      title: "उत्तर प्रदेश में मुद्रा लोन कैसे मिलता है",
      intro: "मुद्रा योजना केंद्र की है, इसलिए नियम पूरे देश में एक जैसे हैं। लोन बैंक, RRB, सहकारी बैंक, NBFC और माइक्रोफाइनेंस संस्थाएं देती हैं। अक्टूबर 2024 से अधिकतम सीमा ₹20 लाख है।",
      list: [
        "<strong>शिशु:</strong> ₹50,000 तक। <strong>किशोर:</strong> ₹50,000 से ₹5 लाख। <strong>तरुण:</strong> ₹5 लाख से ₹10 लाख।",
        "<strong>तरुण प्लस:</strong> ₹10 लाख से ₹20 लाख, उन्हीं के लिए जिन्होंने पहले तरुण श्रेणी का लोन लेकर समय पर चुकाया है। इन बढ़े हुए लोन पर CGFMU की गारंटी लागू है।",
        "आवेदन अपने नज़दीकी बैंक की शाखा में या ऑनलाइन udyamimitra.in पर किया जा सकता है।",
        "आवेदन के लिए किसी एजेंट को पैसे न दें। बैंक आपका काम, आय का अंदाज़ा और दस्तावेज़ देखकर खुद फ़ैसला करता है।",
      ],
    },
    {
      id: "odop",
      title: "ODOP मार्जिन मनी योजना क्या है",
      intro: "उत्तर प्रदेश सरकार की \"एक जनपद एक उत्पाद\" योजना हर ज़िले का एक या कुछ खास उत्पाद तय करती है। उस उत्पाद की नई या बढ़ती इकाई लगाने वालों को बैंक लोन के साथ सरकार मार्जिन मनी देती है। इसका शासनादेश 24 सितंबर 2018 का है और odopup.in पर इसकी जानकारी अब भी दी गई है।",
      table: {
        head: ["प्रोजेक्ट लागत", "मार्जिन मनी"],
        rows: [
          ["₹25 लाख तक", "लागत का 25%, अधिकतम ₹6.25 लाख (जो भी कम हो)"],
          ["₹25 लाख से ₹50 लाख", "₹6.25 लाख या लागत का 20% (जो भी अधिक हो)"],
          ["₹50 लाख से ₹1.5 करोड़", "₹10 लाख या लागत का 10% (जो भी अधिक हो)"],
          ["₹1.5 करोड़ से ऊपर", "लागत का 10%, अधिकतम ₹20 लाख (जो भी कम हो)"],
        ],
      },
      list: [
        "<strong>अपना हिस्सा:</strong> सामान्य श्रेणी को प्रोजेक्ट लागत का 10%, और SC, ST, OBC, अल्पसंख्यक, महिला व दिव्यांग आवेदकों को 5% लगाना होता है।",
        "प्रोजेक्ट लागत में ज़मीन की कीमत नहीं गिनी जाती; मशीनरी जैसा पूंजीगत खर्च और कार्यशील पूंजी गिनी जाती है। किराये का वर्कशेड या कार्यशाला भी चलती है।",
        "मार्जिन मनी <strong>दो साल सफल संचालन</strong> और बिना डिफ़ॉल्ट के बाद अनुदान के रूप में समायोजित होती है। उससे पहले ज़िला उद्योग केंद्र और बैंक की संयुक्त जांच होती है।",
      ],
      callout: { kind: "warn", html: "ये दरें 2018 के शासनादेश की हैं। आवेदन से पहले ज़िला उद्योग केंद्र या <a href=\"https://odopup.in/odop-schemes/margin-money-scheme-uttar-pradesh\" target=\"_blank\" rel=\"noopener nofollow\">odopup.in</a> पर देख लें कि योजना अभी नए आवेदन ले रही है और दरें वही हैं या नहीं।" },
    },
    {
      id: "odop-patrata",
      title: "ODOP मार्जिन मनी के लिए पात्रता और प्रक्रिया",
      list: [
        "उम्र कम से कम 18 साल; किसी शैक्षिक योग्यता की ज़रूरत नहीं।",
        "इकाई आपके <strong>ज़िले के तय ODOP उत्पाद</strong> की होनी चाहिए (नीचे सूची देखें)।",
        "किसी बैंक, वित्तीय संस्था या सरकारी संस्था के डिफ़ॉल्टर न हों।",
        "पहले किसी केंद्र या राज्य सरकार की स्वरोज़गार योजना का लाभ न लिया हो। लाभ एक आवेदक या परिवार के एक सदस्य को एक बार मिलता है।",
        "पात्रता का शपथ पत्र लगता है; विशेष श्रेणी का दावा हो तो प्रमाणित जाति/श्रेणी प्रमाण पत्र लगाएं।",
      ],
      steps: [
        "तय फॉर्म, शपथ पत्र और प्रोजेक्ट रिपोर्ट अपने ज़िले के उप आयुक्त (उद्योग) के कार्यालय, यानी ज़िला उद्योग केंद्र में जमा करें और पावती लें।",
        "ज़िला स्तरीय टास्क फोर्स समिति (अध्यक्षता ज़िलाधिकारी या उनके प्रतिनिधि) साक्षात्कार और प्रोजेक्ट की उपयोगिता व वित्तीय व्यवहार्यता देखकर चयन करती है।",
        "चुनी गई फाइल 7 दिन में बैंक को भेजी जाती है और बैंक को एक महीने में फ़ैसला करना होता है।",
        "पहली किस्त से पहले कम से कम एक हफ़्ते का प्रशिक्षण अनिवार्य है।",
        "पहली किस्त के 7 दिन के भीतर मार्जिन मनी का दावा किया जाता है, और भुगतान दावे के 7 दिन में DBT से होता है।",
      ],
    },
    {
      id: "zile",
      title: "आपके ज़िले का ODOP उत्पाद (75 ज़िले)",
      intro: "नीचे हर ज़िले के ODOP उत्पाद वैसे ही दिए हैं जैसे odopup.in पर दिखते हैं (7 नवंबर 2026 को देखे गए)। सूची में बदलाव हो सकता है, इसलिए आवेदन से पहले अपने ज़िले का उत्पाद पोर्टल पर पक्का कर लें।",
      table: {
        head: ["ज़िला", "ODOP उत्पाद"],
        rows: [
          ["आगरा", "Stone/Marble Engraving Handicrafts, Leather Products & Footwear, Petha Industry"],
          ["अलीगढ़", "Locks & Hardware, Metal Craft"],
          ["अंबेडकर नगर", "Textile Products"],
          ["अमेठी", "Moonj Products, Food Processing"],
          ["अमरोहा", "Dholak (Musical Instruments), Readymade Garments, Metal & Wooden Handicrafts"],
          ["औरैया", "Dairy Processing (Desi Ghee), Dairy Products"],
          ["अयोध्या", "Jaggery Products"],
          ["आज़मगढ़", "Black Pottery, Silk Products"],
          ["बागपत", "Home Decor Products, Agricultural Implements & related accessories"],
          ["बहराइच", "Wheat Stalk Handicrafts, Food Processing"],
          ["बलिया", "Bindi, Sattu Products"],
          ["बलरामपुर", "Food Processing (Pulses)"],
          ["बांदा", "Shazar Stone Craft"],
          ["बाराबंकी", "Handloom Products, Textile Products"],
          ["बरेली", "Zari Zardozi, Goldsmith Work, Wooden Products, Bamboo Products"],
          ["बस्ती", "Wood Craft, Vinegar Products (sirka)"],
          ["भदोही", "Carpets"],
          ["बिजनौर", "Wood Craft, Brushes & Related Products"],
          ["बदायूं", "Zari Zardozi"],
          ["बुलंदशहर", "Ceramic Products"],
          ["चंदौली", "Zari Zardozi, Black Rice"],
          ["चित्रकूट", "Wooden Toys, Woodcraft Products"],
          ["देवरिया", "Decorative Products, Embroidery Weaving Related Products, Readymade Garments"],
          ["एटा", "Ghungroo Bells, Brass Products, Chicory Products"],
          ["इटावा", "Textile Embroidery, Tailoring, Textile Products"],
          ["फर्रुखाबाद", "Textile Printing, Zari Zardozi"],
          ["फतेहपुर", "Bed Sheet, Iron Fabrication"],
          ["फिरोजाबाद", "Glass Products, Food Processing"],
          ["गौतम बुद्ध नगर", "Readymade Garments, Textile Products"],
          ["गाज़ियाबाद", "Engineering Products, Textile & Apparel, Metal Products"],
          ["गाज़ीपुर", "Jute Wall Hangings"],
          ["गोंडा", "Food Processing (Pulses)"],
          ["गोरखपुर", "Terracotta, Readymade Garments"],
          ["हमीरपुर", "Footwear, Metal Products"],
          ["हापुड़", "Home Decor Products"],
          ["हरदोई", "Handloom Products, Textile Products"],
          ["हाथरस", "Heeng Processing, Readymade Garments"],
          ["जालौन", "Handmade Paper, Pea Processing"],
          ["जौनपुर", "Woolen Durrie"],
          ["झांसी", "Soft Toys, Textile Products"],
          ["कन्नौज", "Itra (Scents), Perfume Products, Incense Sticks & Dhoopbatti Products"],
          ["कानपुर देहात", "Aluminium utensils, Plastic Products"],
          ["कानपुर नगर", "Leather Products, Textile Products, Hosiery & Textile products"],
          ["कासगंज", "Zari Zardozi"],
          ["कौशांबी", "Food Processing (Guava), Food Processing (Banana)"],
          ["कुशीनगर", "Banana Fibre Products, Banana Products"],
          ["लखीमपुर खीरी", "Tribal Craft, Jaggery"],
          ["ललितपुर", "Zari-Silk Saree, Food Processing, Readymade Garments, Hosiery Products"],
          ["लखनऊ", "Chikankari, Zari Zardozi"],
          ["महराजगंज", "Furniture"],
          ["महोबा", "Gaura Stone Craft, Metal Craft"],
          ["मैनपुरी", "Tarakashi Art, Textile Products, Tailoring & Cloth Embroidery"],
          ["मथुरा", "Sanitation Related Equipment, Decorative Idols & Kanthi Mala Products, Thakur Ji Attire"],
          ["मऊ", "Textile Products"],
          ["मेरठ", "Sports Goods"],
          ["मिर्ज़ापुर", "Carpets, Metal Udyog Brass"],
          ["मुरादाबाद", "Metal Craft"],
          ["मुज़फ्फरनगर", "Jaggery"],
          ["पीलीभीत", "Flutes, Wooden Products"],
          ["प्रतापगढ़", "Amla Products, Food Processing"],
          ["प्रयागराज", "Moonj Products, Food Processing"],
          ["रायबरेली", "Woodcraft (Woodwork)"],
          ["रामपुर", "Zari Patchwork, Mentha, Patchwork With Applique Work"],
          ["सहारनपुर", "Wood Craft (Wood Carving), Hosiery Products"],
          ["संभल", "Horn & Bone Products"],
          ["संत कबीर नगर", "Brass Utensils, Hosiery Products"],
          ["शाहजहांपुर", "Zari Zardozi"],
          ["शामली", "Iron Fabrication, Rim & Axle"],
          ["श्रावस्ती", "Tribal Craft, Furniture"],
          ["सिद्धार्थनगर", "Kala Namak Chawal"],
          ["सीतापुर", "Durrie"],
          ["सोनभद्र", "Carpets"],
          ["सुल्तानपुर", "Moonj Products, Iron & Steel Fabrication"],
          ["उन्नाव", "Zari Zardozi, Leather Products"],
          ["वाराणसी", "Silk Products, Wooden Toys, Gulabi Meenakari"],
        ],
      },
    },
    {
      id: "cm-yuva",
      title: "CM-YUVA जैसी राज्य की दूसरी योजनाएं",
      intro: "उत्तर प्रदेश सरकार युवाओं के लिए मुख्यमंत्री युवा उद्यमी विकास अभियान (CM-YUVA) जैसी योजनाएं भी चलाती है। खबरों में इसकी राशि, चरण और शर्तें अलग-अलग बताई गई हैं और हम इन्हें आधिकारिक पेज से मिला नहीं सके, इसलिए यहां कोई आंकड़ा नहीं दे रहे।",
      list: [
        "ताज़ा राशि, पात्रता और आवेदन की तारीख़ के लिए <a href=\"https://msme.up.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">UP MSME विभाग के पोर्टल</a> या अपने ज़िला उद्योग केंद्र पर देखें।",
        "किसी भी योजना के नाम पर पैसे मांगने वाले एजेंट या फ़र्ज़ी वेबसाइट से बचें; आवेदन आधिकारिक पोर्टल या सरकारी कार्यालय से ही करें।",
      ],
    },
    {
      id: "dastavez",
      title: "आवेदन से पहले तैयार रखें",
      intro: "ज़रूरी दस्तावेज़ बैंक और योजना के हिसाब से बदलते हैं, इसलिए सूची बैंक या DIC से मिलान कर लें। आम तौर पर ये चीज़ें लगती हैं:",
      list: [
        "आधार, पैन और पते का प्रमाण; आधार से जुड़ा चालू बैंक खाता।",
        "काम की प्रोजेक्ट रिपोर्ट या कारोबार की योजना, और मशीनरी/सामान की कोटेशन।",
        "<a href=\"/service/udyam-registration.html\">उद्यम रजिस्ट्रेशन</a>, अगर आपके पास है।",
        "ODOP के लिए: पात्रता का शपथ पत्र और, ज़रूरत हो तो, श्रेणी प्रमाण पत्र।",
      ],
    },
  ],
  official: [
    { href: "https://odopup.in/odop-schemes/margin-money-scheme-uttar-pradesh", title: "ODOP मार्जिन मनी योजना (odopup.in)" },
    { href: "https://odopup.in/en/districts", title: "75 ज़िलों के ODOP उत्पाद (odopup.in)" },
    { href: "https://msme.up.gov.in", title: "UP MSME विभाग पोर्टल" },
    { href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/oct/doc20241029426401.pdf", title: "PIB: मुद्रा लोन की सीमा ₹20 लाख, तरुण प्लस (अक्टूबर 2024)" },
    { href: "https://www.udyamimitra.in/", title: "udyamimitra.in (मुद्रा आवेदन पोर्टल)" },
  ],
  faq: [
    { q: "उत्तर प्रदेश में मुद्रा लोन कितना मिलता है?", a: "अधिकतम ₹20 लाख। शिशु ₹50,000 तक, किशोर ₹50,000 से ₹5 लाख, तरुण ₹5 से ₹10 लाख और तरुण प्लस ₹10 से ₹20 लाख। तरुण प्लस उन्हीं को मिलता है जिन्होंने पहले तरुण लोन चुका दिया हो।" },
    { q: "मुद्रा लोन के लिए आवेदन कहां करें?", a: "अपने नज़दीकी बैंक की शाखा में या ऑनलाइन udyamimitra.in पर। किसी एजेंट को पैसे देने की ज़रूरत नहीं है।" },
    { q: "ODOP मार्जिन मनी क्या है?", a: "आपके ज़िले के तय ODOP उत्पाद की इकाई के लिए बैंक लोन के साथ मिलने वाली सरकारी मदद। यह प्रोजेक्ट लागत का एक तय हिस्सा होती है (छोटे प्रोजेक्ट पर 25%, अधिकतम ₹6.25 लाख; बड़े प्रोजेक्ट पर अधिकतम ₹20 लाख) और दो साल सफल संचालन के बाद अनुदान में बदलती है। दरें 2018 के शासनादेश की हैं।" },
    { q: "क्या ODOP के लिए अपने ज़िले का ही उत्पाद होना ज़रूरी है?", a: "हां। शासनादेश के अनुसार सिर्फ़ संबंधित ज़िले के तय ODOP उत्पाद की इकाइयां ही पात्र हैं। अपने ज़िले का उत्पाद ऊपर की सूची या odopup.in पर देखें।" },
    { q: "क्या मुद्रा लोन और ODOP मार्जिन मनी दोनों मिल सकते हैं?", a: "यह हमें किसी आधिकारिक दस्तावेज़ में साफ़ नहीं मिला। ODOP की शर्तों में पहले किसी केंद्र या राज्य की स्वरोज़गार योजना का लाभ न लेना भी शामिल है, इसलिए ज़िला उद्योग केंद्र और बैंक से लिखित में पूछकर ही आगे बढ़ें।" },
    { q: "ODOP में आवेदन कहां जमा होता है?", a: "अपने ज़िले के उप आयुक्त (उद्योग) के कार्यालय, यानी ज़िला उद्योग केंद्र में। चयन ज़िला स्तरीय टास्क फोर्स समिति करती है।" },
  ],
  related: [
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "देशभर के नियम और श्रेणियां" },
    { href: "/service/pmegp-loan-yojana.html", emoji: "🏭", title: "PMEGP लोन योजना", text: "सब्सिडी वाला उद्यम लोन" },
    { href: "/service/udyam-registration.html", emoji: "📝", title: "उद्यम रजिस्ट्रेशन", text: "कारोबार का सरकारी पंजीकरण" },
    { href: "/service/stand-up-india.html", emoji: "⬆️", title: "स्टैंड-अप इंडिया", text: "SC/ST और महिला उद्यमियों के लिए" },
    { href: "/states/uttar-pradesh.html", emoji: "🗺️", title: "उत्तर प्रदेश की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://odopup.in/en/districts", label: "🏭 ODOP ज़िला सूची" },
    { href: "https://www.udyamimitra.in/", label: "💼 udyamimitra.in" },
  ],
};
