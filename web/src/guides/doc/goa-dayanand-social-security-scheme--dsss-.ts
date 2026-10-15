import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Directorate of Social Welfare, Goa scheme
// page (socialwelfare.goa.gov.in/?p=2518, via search extract; the site
// returns 403 from here): categories senior citizens, single women
// (widow, divorcee, deserted, judicially separated, unmarried 50+) and
// persons with disabilities; Goa resident by birth or 15 years' domicile;
// income limit Rs 24,000 a year; monthly Rs 2,000 (senior citizens, adults
// with disability) and Rs 2,500 (single women/widows below 60); documents:
// age proof, 15-year residence certificate, income certificate or affidavit
// on Rs 50 stamp paper, Aadhaar; apply offline at the Directorate (Panaji)
// or Dy. Director's office (Margao). Goa DIP press release 10 Mar 2026
// (dip.goa.gov.in): DSSS assistance credited by the 10th of every month;
// life and income certificate every year 1 April - 30 May; DSSS helpline
// 9322066078 (Asst. Director, Social Welfare). 2026-27 budget promise to
// raise assistance (Herald Goa, The Goan); no notified new rate found, so
// amounts are given as "listed on the department page" with a caution.
// Vikaspedia's Rs 1.5 lakh family income limit conflicts with the
// department page and is not used.
export const goaDayanandSocialSecuritySchemeDsss: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "दयानंद सामाजिक सुरक्षा योजना (गोवा)" },
  ],
  docHi: "DSSS गोवा",
  title: "Dayanand Social Security Scheme (DSSS) गोवा 2026",
  description: "गोवा की दयानंद सामाजिक सुरक्षा योजना (DSSS): वरिष्ठ नागरिक, विधवा/एकल महिला और दिव्यांगों को मासिक सहायता। पात्रता, कागज़, आवेदन कहां, हर साल जीवन प्रमाण पत्र और हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "दयानंद सामाजिक सुरक्षा योजना (DSSS), गोवा: पात्रता, राशि, आवेदन और जीवन प्रमाण पत्र",
  lead: "दयानंद सामाजिक सुरक्षा योजना (DSSS) गोवा सरकार के समाज कल्याण निदेशालय की योजना है, जिसमें वरिष्ठ नागरिकों, एकल महिलाओं (विधवा, तलाकशुदा, परित्यक्ता आदि) और दिव्यांगों को हर महीने आर्थिक सहायता सीधे बैंक खाते में मिलती है। मार्च 2026 से सहायता हर महीने की <strong>10 तारीख तक</strong> जमा करने की घोषणा हुई है। लाभ जारी रखने के लिए हर साल <strong>1 अप्रैल से 30 मई</strong> के बीच जीवन प्रमाण पत्र और आय प्रमाण पत्र देना होता है।",
  facts: [
    ["विभाग", "समाज कल्याण निदेशालय, गोवा"],
    ["किसके लिए", "वरिष्ठ नागरिक, एकल महिला/विधवा, दिव्यांग"],
    ["निवास", "जन्म से या 15 साल से गोवा निवासी"],
    ["हेल्पलाइन (DSSS)", "<a href=\"tel:9322066078\">9322066078</a>"],
  ],
  notice: "2026-27 के बजट में DSSS की राशि बढ़ाने की घोषणा हुई है। नई दर की अधिसूचना हमें नहीं मिली, इसलिए नीचे विभाग के पेज पर लिखी राशि दी गई है; आवेदन के समय ताज़ा राशि निदेशालय से पूछें।",
  sections: [
    {
      id: "kaun",
      title: "कौन पात्र है",
      list: [
        "<strong>वरिष्ठ नागरिक:</strong> तय उम्र (60 साल) पूरी कर चुके गोवा निवासी।",
        "<strong>एकल महिला:</strong> 18 साल से ऊपर की विधवा, तलाकशुदा, परित्यक्ता या न्यायिक रूप से अलग रह रही महिला, और 50 साल से ऊपर की अविवाहित महिला।",
        "<strong>दिव्यांग:</strong> दृष्टि, श्रवण/वाणी, चलने-फिरने, बौद्धिक दिव्यांगता या मानसिक बीमारी वाले व्यक्ति।",
        "<strong>निवास:</strong> जन्म से गोवा निवासी, या कम से कम 15 साल से गोवा में रह रहे हों।",
        "<strong>आय सीमा:</strong> विभाग के पेज पर ₹24,000 सालाना लिखी है; कुछ दूसरी जगह अलग सीमा लिखी मिलती है, इसलिए निदेशालय से पुष्टि करें।",
      ],
    },
    {
      id: "rashi",
      title: "कितनी सहायता मिलती है",
      table: {
        head: ["श्रेणी", "विभाग के पेज पर लिखी मासिक राशि"],
        rows: [
          ["वरिष्ठ नागरिक", "₹2,000"],
          ["वयस्क दिव्यांग", "₹2,000"],
          ["एकल महिला/विधवा (60 साल से कम)", "₹2,500"],
        ],
      },
      callout: { kind: "warn", html: "ये राशियां विभाग के योजना पेज पर लिखी हैं। 2026-27 बजट में बढ़ोतरी की घोषणा के बाद दर बदल सकती है। दिव्यांगों के लिए सहायक उपकरणों पर एकमुश्त अनुदान का प्रावधान भी पेज पर दिया है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "उम्र का प्रमाण (जन्म प्रमाण पत्र या अधिसूचित दूसरा दस्तावेज़)",
        "15 साल के निवास का प्रमाण पत्र (या जन्म से गोवा निवासी होने का प्रमाण)",
        "आय प्रमाण पत्र, या तय फॉर्मेट में ₹50 के स्टांप पेपर पर स्व-घोषणा",
        "आधार कार्ड की कॉपी और बैंक खाते का विवरण",
        "श्रेणी के अनुसार: पति का मृत्यु प्रमाण पत्र, तलाक का आदेश, या दिव्यांगता प्रमाण पत्र",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "समाज कल्याण निदेशालय, <strong>पणजी</strong> या उप निदेशक कार्यालय, <strong>मडगांव</strong> से फॉर्म लें।",
        "फॉर्म भरें और ऊपर के कागज़ों की स्व-सत्यापित कॉपी लगाएं।",
        "उसी कार्यालय में जमा करें और पावती लें।",
        "जांच के बाद मंज़ूरी पत्र मिलता है और सहायता हर महीने बैंक खाते में आने लगती है।",
      ],
    },
    {
      id: "har-saal",
      title: "हर साल क्या करना ज़रूरी है",
      list: [
        "<strong>1 अप्रैल से 30 मई</strong> के बीच जीवन प्रमाण पत्र और आय प्रमाण पत्र जमा करें, नहीं तो भुगतान रुक सकता है।",
        "बैंक खाता या पता बदले तो निदेशालय को लिखित में बताएं।",
        "भुगतान न आए तो DSSS हेल्पलाइन <a href=\"tel:9322066078\">9322066078</a> (सहायक निदेशक, समाज कल्याण) पर संपर्क करें।",
      ],
    },
  ],
  official: [
    { href: "https://socialwelfare.goa.gov.in/", title: "समाज कल्याण निदेशालय, गोवा", note: "DSSS योजना पेज और फॉर्म" },
    { href: "https://dip.goa.gov.in/", title: "सूचना एवं प्रचार विभाग, गोवा", note: "सरकारी प्रेस विज्ञप्ति" },
  ],
  faq: [
    { q: "DSSS में कितनी राशि मिलती है?", a: "विभाग के पेज पर वरिष्ठ नागरिक और वयस्क दिव्यांग को ₹2,000 और 60 से कम उम्र की एकल महिला/विधवा को ₹2,500 महीना लिखा है। 2026-27 बजट में बढ़ोतरी की घोषणा हुई है, इसलिए ताज़ा राशि निदेशालय से पूछें।" },
    { q: "DSSS का पैसा कब आता है?", a: "मार्च 2026 में मुख्यमंत्री ने घोषणा की कि DSSS और गृह आधार की सहायता हर महीने की 10 तारीख तक खाते में जमा होगी।" },
    { q: "जीवन प्रमाण पत्र कब देना है?", a: "हर साल 1 अप्रैल से 30 मई के बीच जीवन प्रमाण पत्र और आय प्रमाण पत्र देना होता है, ताकि भुगतान न रुके।" },
    { q: "आवेदन कहां करें?", a: "समाज कल्याण निदेशालय, पणजी या उप निदेशक कार्यालय, मडगांव में फॉर्म भरकर जमा करें।" },
    { q: "क्या दूसरे राज्य से आए लोग आवेदन कर सकते हैं?", a: "जन्म से गोवा निवासी या कम से कम 15 साल से गोवा में रहने वाले ही पात्र हैं।" },
  ],
  related: [
    { href: "/states/goa-senior-citizen-card.html", emoji: "👴", title: "सीनियर सिटीजन कार्ड (गोवा)", text: "समाज कल्याण निदेशालय से पहचान पत्र" },
    { href: "/service/goa-griha-aadhar-scheme.html", emoji: "🏠", title: "गृह आधार योजना (गोवा)", text: "गृहिणियों को मासिक सहायता" },
    { href: "/service/goa-deen-dayal-swasthya-seva-yojana--ddssy-.html", emoji: "🏥", title: "दीन दयाल स्वास्थ्य सेवा योजना", text: "गोवा की स्वास्थ्य बीमा योजना" },
    { href: "/states/goa-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (गोवा)", text: "हर साल जमा करना होता है" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "🩺", title: "आयुष्मान वय वंदना", text: "70+ के लिए ₹5 लाख इलाज" },
  ],
  aside: [
    { href: "https://socialwelfare.goa.gov.in/", label: "🏛️ समाज कल्याण निदेशालय" },
    { href: "tel:9322066078", label: "📞 DSSS हेल्पलाइन" },
  ],
};
