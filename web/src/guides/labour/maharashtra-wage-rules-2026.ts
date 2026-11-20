import type { DocGuide } from "../doc/types";

// Sources (checked 20 Nov 2026). The Gazette notification itself could not be
// opened from the sandbox, so facts come from secondary reports and are split
// by how well they are confirmed:
// - FINAL (teamleaseregtech.com summary of the notification): Maharashtra Wage
//   Rules, 2026 notified in the Official Gazette on 5 Nov 2026 and in force from
//   that day; 48 hours a week for non-daily wage periods, 8-hour day for daily
//   paid; deductions capped at 50% (excess carried forward); dearness allowance
//   revised twice a year, before 1 April and 1 October; replaces the Maharashtra
//   Minimum Wages Rules, 1963.
// - DRAFT (scconline.com, draft of 28 Apr 2026): paid weekly rest day usually
//   Sunday with advance notice of changes; employer informs the
//   Inspector-cum-Facilitator within 10 days of a deduction; deduction for loss
//   or damage needs prior written notice and a hearing; minimum-wage formula (3
//   consumption units, 2,700 calories etc.); daily wage /8 for hourly and
//   monthly x26; VDA linked to CPI-IW; unclaimed wages to the Maharashtra
//   Labour Welfare Board after 7 years; records kept 5 years. These may differ
//   in the final text.
// - NEWS CARD (inshorts/News18 Hindi, 20 Nov): double pay for overtime, weekly
//   off, no more than 10 days of continuous work, written notice before fines,
//   nominee for unpaid wages. Not confirmed from the rule text.
export const maharashtraWageRules2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "महाराष्ट्र", href: "/states/maharashtra.html" },
    { label: "महाराष्ट्र वेतन नियम 2026" },
  ],
  docHi: "महाराष्ट्र वेतन नियम 2026",
  title: "महाराष्ट्र वेतन नियम 2026: 48 घंटे, 50% कटौती, ओवरटाइम – क्या बदला",
  description: "महाराष्ट्र वेतन नियम 2026 लागू: हफ्ते में 48 घंटे, वेतन से कटौती 50% तक, साल में दो बार महंगाई भत्ता। क्या पक्का है और क्या नहीं, आसान भाषा में।",
  published: "2026-11-20",
  modified: "2026-11-20",
  verified: "20 नवंबर 2026",
  h1: "महाराष्ट्र वेतन नियम 2026: कर्मचारियों और मजदूरों के लिए क्या बदला",
  lead: "<strong>महाराष्ट्र वेतन नियम, 2026 राजपत्र में 5 नवंबर 2026 को छपे और उसी दिन से लागू बताए गए हैं।</strong> इनके मुताबिक हफ्ते में काम के घंटे अधिकतम <strong>48</strong> हैं, दिहाड़ी वाले के लिए दिन का सामान्य काम <strong>8 घंटे</strong> का है, वेतन से कटौती <strong>50%</strong> तक सीमित है और महंगाई भत्ता साल में दो बार बदलेगा। ये नियम पुराने महाराष्ट्र न्यूनतम वेतन नियम, 1963 की जगह लेते हैं। नीचे साफ़ लिखा है कि कौन सी बात पक्की है और कौन सी सिर्फ खबरों या प्रारूप (draft) पर आधारित है।",
  facts: [
    ["लागू होने की तारीख", "5 नवंबर 2026 (राजपत्र)"],
    ["काम के घंटे", "हफ्ते में 48; दिहाड़ी में दिन के 8"],
    ["वेतन से कटौती", "अधिकतम 50%"],
    ["महंगाई भत्ता", "साल में 2 बार (1 अप्रैल और 1 अक्टूबर से पहले)"],
  ],
  notice: "राजपत्र की अधिसूचना हमारे सिस्टम से नहीं खुल सकी, इसलिए जानकारी उसके सार और खबरों से ली गई है। जो बातें सिर्फ खबरों या अप्रैल 2026 के प्रारूप में हैं, उन्हें हमने अलग लिखा है; अंतिम नियमों में वे बदल सकती हैं। यह कानूनी सलाह नहीं है; विवाद हो तो श्रम विभाग या वकील से पूछें। हम सरकारी वेबसाइट नहीं हैं।",
  sections: [
    {
      id: "aage",
      title: "इससे जुड़ी सेवाएं और फॉर्मेट",
      intro: "नौकरी और मजदूरी से जुड़ी ये चीज़ें अक्सर साथ में काम आती हैं:",
      list: [
        "<a href=\"/arzi/salary-not-paid-complaint-labour-office.html\">वेतन न मिलने की शिकायत (श्रम कार्यालय)</a> – तैयार फॉर्मेट",
        "<a href=\"/arzi/salary-slip-request-letter.html\">सैलरी स्लिप मांगने का पत्र</a> – कटौती का हिसाब देखने के लिए",
        "<a href=\"/states/maharashtra-labour-card.html\">महाराष्ट्र श्रमिक कार्ड</a> और <a href=\"/states/maharashtra-e-shram-card.html\">ई-श्रम कार्ड</a>",
        "<a href=\"/arzi/resignation-letter.html\">इस्तीफा पत्र</a> और <a href=\"/arzi/experience-certificate-request.html\">अनुभव प्रमाण पत्र का अनुरोध</a>",
        "<a href=\"/tools/epf-calculator.html\">EPF कैलकुलेटर</a>, <a href=\"/tools/gratuity-calculator.html\">ग्रेच्युटी कैलकुलेटर</a>, <a href=\"/tools/hra-calculator.html\">HRA कैलकुलेटर</a>",
        "<a href=\"/states/maharashtra-old-age-pension.html\">महाराष्ट्र वृद्धा पेंशन</a>",
      ],
    },
    {
      id: "pakka",
      title: "क्या पक्का है (अधिसूचना के अनुसार)",
      table: {
        head: ["विषय", "नियम"],
        rows: [
          ["लागू होना", "5 नवंबर 2026 से, उसी दिन राजपत्र में प्रकाशित"],
          ["साप्ताहिक घंटे", "जिनका वेतन दैनिक नहीं है, उनके लिए हफ्ते में अधिकतम 48 घंटे"],
          ["दिहाड़ी मजदूर", "दिन का सामान्य काम 8 घंटे"],
          ["वेतन से कटौती", "कुल कटौती अधिकतम 50%; इससे ऊपर की रकम अगले वेतन में आगे बढ़ती है"],
          ["महंगाई भत्ता (VDA)", "साल में दो बार, 1 अप्रैल और 1 अक्टूबर से पहले"],
          ["पुराना कानून", "महाराष्ट्र न्यूनतम वेतन नियम, 1963 की जगह"],
        ],
      },
    },
    {
      id: "khabar",
      title: "खबरों में है, पर नियम का पाठ हमें नहीं मिला",
      list: [
        "<strong>ओवरटाइम पर दोगुना वेतन:</strong> खबरों में है। केंद्र के वेतन संहिता (Code on Wages, 2019) की धारा 14 में अतिरिक्त समय के लिए सामान्य दर का दोगुना देने का प्रावधान है; महाराष्ट्र के नियमों में सटीक शब्द देखना बाकी है।",
        "<strong>हर हफ्ते छुट्टी, और छुट्टी के दिन काम पर बदले में दूसरी छुट्टी या दोगुना भुगतान।</strong>",
        "<strong>बिना छुट्टी लगातार 10 दिन से ज़्यादा काम नहीं।</strong>",
        "<strong>जुर्माने या नुकसान की कटौती से पहले लिखित नोटिस।</strong>",
        "<strong>कर्मचारी अपना नॉमिनी बना सकेगा</strong>, जिसे उसका बकाया वेतन मिलेगा।",
        "<strong>कटौती:</strong> बेसिक, महंगाई भत्ता और रिटेनिंग भत्ता को मजदूरी में गिनना और सरकार द्वारा रोज़ की न्यूनतम मजदूरी तय करना, जैसा खबर में बताया गया।",
      ],
    },
    {
      id: "prarup",
      title: "अप्रैल 2026 के प्रारूप (draft) में क्या था",
      intro: "महाराष्ट्र वेतन संहिता नियम का प्रारूप 28 अप्रैल 2026 को जनता की राय के लिए आया था। उसकी ये बातें अंतिम नियमों में बदल भी सकती हैं, इसलिए इन्हें पक्का न मानें:",
      list: [
        "हफ्ते में एक सवेतन छुट्टी, आमतौर पर रविवार; छुट्टी का दिन बदलने से पहले अग्रिम सूचना।",
        "वेतन से कटौती होने पर नियोक्ता को 10 दिन के भीतर निरीक्षक-सह-सुविधादाता (Inspector-cum-Facilitator) को बताना।",
        "काम में नुकसान या क्षति के लिए कटौती से पहले लिखित नोटिस और सुनवाई का मौका।",
        "न्यूनतम वेतन के हिसाब में एक कमाने वाले, पति/पत्नी और दो बच्चों (3 उपभोग इकाई) का परिवार मानना; दिन की मजदूरी से घंटे का हिसाब दिन को 8 से भाग देकर और महीने का हिसाब 26 से गुणा करके।",
        "महंगाई भत्ता औद्योगिक कामगारों के उपभोक्ता मूल्य सूचकांक से जुड़ा।",
        "7 साल तक दावा न किया गया वेतन महाराष्ट्र श्रम कल्याण बोर्ड को जाना और रिकॉर्ड 5 साल रखना।",
      ],
    },
    {
      id: "kya-karen",
      title: "अगर कंपनी नियम न माने तो क्या करें",
      steps: [
        "सैलरी स्लिप, नियुक्ति पत्र और बैंक स्टेटमेंट संभालकर रखें। जरूरत हो तो <a href=\"/arzi/salary-slip-request-letter.html\">सैलरी स्लिप मांगने का पत्र</a> दें।",
        "पहले HR या मालिक को लिखित में बताएं और उसकी कॉपी रखें।",
        "बात न बने तो अपने क्षेत्र के श्रम कार्यालय में <a href=\"/arzi/salary-not-paid-complaint-labour-office.html\">लिखित शिकायत</a> दें।",
        "बड़े विवाद में श्रम विभाग या वकील से सलाह लें। यह पेज कानूनी सलाह नहीं है।",
      ],
    },
  ],
  official: [],
  faq: [
    { q: "क्या महाराष्ट्र वेतन नियम 2026 लागू हो गए हैं?", a: "अधिसूचना के सार के अनुसार हां। ये 5 नवंबर 2026 को राजपत्र में छपे और उसी दिन से लागू बताए गए हैं।" },
    { q: "हफ्ते में कितने घंटे काम करवाया जा सकता है?", a: "जिनका वेतन दैनिक नहीं है उनके लिए अधिकतम 48 घंटे प्रति सप्ताह। दिहाड़ी वालों के लिए दिन का सामान्य काम 8 घंटे है।" },
    { q: "वेतन से कितनी कटौती हो सकती है?", a: "कुल कटौती अधिकतम 50%। इससे ऊपर की रकम अगले वेतन में आगे बढ़ती है।" },
    { q: "क्या ओवरटाइम पर दोगुना पैसा मिलेगा?", a: "खबरों में ऐसा बताया गया है और केंद्र के वेतन संहिता में भी अतिरिक्त समय का दोगुना वेतन का प्रावधान है। महाराष्ट्र के नियमों का सटीक पाठ हम नहीं देख सके, इसलिए अपने नियोक्ता या श्रम विभाग से पक्का करें।" },
    { q: "महंगाई भत्ता कब बदलेगा?", a: "साल में दो बार, 1 अप्रैल और 1 अक्टूबर से पहले।" },
    { q: "ये नियम किन पर लागू होते हैं?", a: "खबरों के अनुसार फैक्ट्री, निर्माण, दुकान, परिवहन और सेवा क्षेत्र के कर्मचारियों पर, असंगठित क्षेत्र समेत। अपने मामले में सही लागू होना श्रम विभाग से पूछें।" },
    { q: "वेतन न मिले तो कहां शिकायत करें?", a: "पहले नियोक्ता को लिखित में बताएं, फिर अपने क्षेत्र के श्रम कार्यालय में शिकायत दें। हमारे यहां तैयार शिकायत फॉर्मेट है।" },
  ],
  related: [
    { href: "/arzi/salary-not-paid-complaint-labour-office.html", emoji: "📝", title: "वेतन न मिलने की शिकायत", text: "श्रम कार्यालय के लिए फॉर्मेट" },
    { href: "/states/maharashtra-labour-card.html", emoji: "👷", title: "महाराष्ट्र श्रमिक कार्ड", text: "आवेदन और फायदे" },
    { href: "/states/maharashtra-e-shram-card.html", emoji: "🪪", title: "ई-श्रम कार्ड", text: "असंगठित मजदूरों के लिए" },
    { href: "/tools/gratuity-calculator.html", emoji: "🧮", title: "ग्रेच्युटी कैलकुलेटर", text: "नौकरी छोड़ने पर हिसाब" },
    { href: "/tools/epf-calculator.html", emoji: "🧮", title: "EPF कैलकुलेटर", text: "PF का हिसाब" },
  ],
  aside: [
    { href: "/arzi/salary-not-paid-complaint-labour-office.html", label: "📝 वेतन शिकायत पत्र" },
    { href: "/states/maharashtra-labour-card.html", label: "👷 श्रमिक कार्ड" },
  ],
};
