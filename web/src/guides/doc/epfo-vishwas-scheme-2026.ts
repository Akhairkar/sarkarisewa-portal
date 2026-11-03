import type { DocGuide } from "./types";

// Sources (checked 3 Nov 2026; epfindia.gov.in not reachable from the
// sandbox): taxguru.in, outlookmoney.com, ujjivansfb.bank.in, teamleaseregtech.com,
// corplawupdates.in, lakonia.org. VISHWAS 2026: EPFO one-time scheme for
// pending damages (penal damages for late PF deposit) for defaults before
// 14.06.2024, incl. cases where a damages notice was issued but no final
// order; covers damages only (not contribution or interest under 7Q); reduced
// rates of 0.25%-1% per month (lower for short delays, higher beyond 4
// months) instead of the usual 5%-25% a year; apply on the EPFO employer
// portal (VISHWAS 2026 module) after paying the interest; digitally signed
// settlement certificate; pending court/tribunal case then closes. Six months
// from late June 2026: last date 28 Dec 2026 (most) or 29 Dec 2026 (one, citing
// EPFO social media). High Courts (Bombay, Madras, Kerala) have pointed
// employers to the scheme. Exact rate slabs are pointed to the notification.
export const epfoVishwasScheme2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "EPFO", href: "/service/epfo.html" },
    { label: "VISHWAS 2026" },
  ],
  docHi: "EPFO VISHWAS 2026",
  title: "EPFO VISHWAS 2026: PF डैमेज कम दर पर निपटाएं, आखिरी तारीख दिसंबर 2026",
  description: "EPFO की VISHWAS 2026 योजना नियोक्ताओं (employers) के लिए: PF देर से जमा करने पर लगे डैमेज (penalty) को 0.25%-1% महीना की कम दर पर निपटाएं। कौन पात्र, कितनी बचत, कैसे आवेदन, आखिरी तारीख और ज़रूरी सावधानियां।",
  published: "2026-11-03",
  modified: "2026-11-03",
  verified: "3 नवंबर 2026",
  h1: "EPFO VISHWAS 2026: पुराने PF डैमेज केस कम दर पर निपटाने की योजना",
  lead: "<strong>VISHWAS 2026</strong> कर्मचारी भविष्य निधि संगठन (EPFO) की एक बार की योजना है, जिसमें <strong>नियोक्ता (employer)</strong> PF देर से जमा करने पर लगे <strong>डैमेज (penal damages)</strong> को सामान्य 5%-25% सालाना की जगह <strong>0.25% से 1% प्रति माह</strong> की कम दर पर निपटा सकते हैं। यह <strong>14 जून 2024 से पहले</strong> की देरी पर लागू है और आवेदन EPFO के <a href=\"https://unifiedportal-emp.epfindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Employer Portal</a> पर होता है। योजना <strong>दिसंबर 2026 के आखिर (28/29 दिसंबर)</strong> तक खुली है।",
  facts: [
    ["किसके लिए", "PF वाले नियोक्ता (दुकान, फैक्ट्री, कंपनी)"],
    ["किस पर राहत", "सिर्फ डैमेज; PF अंशदान और ब्याज पूरा देना है"],
    ["कम दर", "0.25% से 1% प्रति माह (देरी के हिसाब से)"],
    ["आखिरी तारीख", "28 दिसंबर 2026 (कुछ स्रोतों में 29 दिसंबर)"],
  ],
  notice: "यह योजना <strong>कर्मचारियों के लिए नहीं, नियोक्ताओं के लिए</strong> है। कर्मचारी का PF बैलेंस या निकासी इससे नहीं बदलती। तारीख और दरें EPFO की अधिसूचना पर आधारित खबरों से ली गई हैं; अंतिम हिसाब पोर्टल पर ही देखें। यह साइट निजी है, EPFO की नहीं।",
  sections: [
    {
      id: "kya-hai",
      title: "VISHWAS 2026 क्या है और क्यों आई",
      intro: "जब कोई नियोक्ता कर्मचारियों का PF समय पर जमा नहीं करता, तो EPFO दो चीज़ें वसूलता है: देरी का <strong>ब्याज</strong> (धारा 7Q) और <strong>डैमेज/जुर्माना</strong> (धारा 14B)। डैमेज की दर ऊंची होने से हज़ारों मामले सालों से अदालतों और ट्रिब्यूनल में अटके हैं। VISHWAS 2026 इन्हें कम दर पर एक बार में निपटाने का मौका है, ताकि नियोक्ता का पैसा और समय बचे और मुकदमे खत्म हों। बॉम्बे, मद्रास और केरल हाई कोर्ट ने भी लंबित मामलों में नियोक्ताओं को इस योजना से निपटारा करने को कहा है।",
      table: {
        head: ["", "सामान्य नियम", "VISHWAS 2026 में"],
        rows: [
          ["डैमेज की दर", "5% से 25% सालाना (देरी के हिसाब से)", "0.25% से 1% प्रति माह"],
          ["PF अंशदान", "पूरा देना", "पूरा देना (कोई छूट नहीं)"],
          ["देरी का ब्याज (7Q)", "पूरा देना", "पूरा देना, आवेदन से पहले"],
          ["कोर्ट/ट्रिब्यूनल केस", "चलता रहता है", "भुगतान के बाद बंद"],
        ],
      },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "वे नियोक्ता जिन पर <strong>14 जून 2024 से पहले</strong> की अवधि के PF देरी के डैमेज बकाया हैं।",
        "जिन पर डैमेज का <strong>अंतिम आदेश</strong> हो चुका है और मामला अपील/कोर्ट में अटका है।",
        "जिन्हें डैमेज का <strong>नोटिस</strong> मिला है पर <strong>अंतिम आदेश अभी नहीं</strong> हुआ।",
      ],
      callout: { kind: "info", html: "किस मामले को योजना में लिया जा सकता है और किसे नहीं (जैसे धोखाधड़ी या दूसरे खास मामले), इसकी पूरी शर्तें EPFO की अधिसूचना में देखें या अपने क्षेत्रीय PF कार्यालय से पुष्टि करें।" },
    },
    {
      id: "bachat",
      title: "कितनी बचत हो सकती है: आसान उदाहरण",
      intro: "मान लीजिए किसी महीने का ₹1,00,000 PF अंशदान 6 महीने देर से जमा हुआ। सामान्य नियम में इतनी देरी पर डैमेज की सालाना दर काफी ऊंची लगती है, जबकि VISHWAS में यह प्रति माह की छोटी दर से गिना जाता है। इसलिए जितनी पुरानी और लंबी देरी, उतनी ज़्यादा बचत।",
      list: [
        "कम देरी पर सबसे कम दर (0.25% प्रति माह की तरफ) और लंबी देरी (4 महीने से ज़्यादा) पर ऊंची दर (1% प्रति माह तक) लगती है।",
        "आपके केस का सही हिसाब पोर्टल पर VISHWAS मॉड्यूल में दिखता है; उसी को मानें।",
        "ब्याज (7Q) पर कोई छूट नहीं है, इसलिए कुल रकम = PF अंशदान (अगर बकाया) + पूरा ब्याज + कम दर वाला डैमेज।",
      ],
    },
    {
      id: "aavedan",
      title: "VISHWAS 2026 में आवेदन कैसे करें",
      steps: [
        "पहले बकाया <strong>PF अंशदान</strong> और देरी का <strong>ब्याज (7Q)</strong> पूरा जमा करें; ब्याज चुकाए बिना आवेदन आगे नहीं बढ़ता।",
        "<a href=\"https://unifiedportal-emp.epfindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">EPFO Employer Portal</a> पर अपने प्रतिष्ठान (establishment) के लॉगिन से जाएं।",
        "<strong>VISHWAS 2026</strong> मॉड्यूल खोलें और जिस अवधि/केस का निपटारा करना है, उसे चुनें।",
        "पोर्टल पर दिख रही कम दर वाली डैमेज रकम जांचें और ऑनलाइन भुगतान करें।",
        "भुगतान की पुष्टि के बाद EPFO <strong>डिजिटल हस्ताक्षर वाला Settlement Certificate</strong> जारी करता है।",
        "इस सर्टिफिकेट से उस मामले की कोर्ट/ट्रिब्यूनल कार्यवाही बंद होती है; इसकी कॉपी अपने वकील और केस फाइल में रखें।",
      ],
      callout: { kind: "warn", html: "योजना की आखिरी तारीख (28/29 दिसंबर 2026) बढ़ाने की कोई घोषणा नहीं है। आखिरी हफ्ते में पोर्टल धीमा होता है, इसलिए दिसंबर के बीच तक काम पूरा कर लें।" },
    },
    {
      id: "kaagaz",
      title: "आवेदन से पहले क्या तैयार रखें",
      list: [
        "प्रतिष्ठान का <strong>Establishment ID</strong> और Employer Portal का लॉगिन",
        "डैमेज का <strong>नोटिस या आदेश</strong> (14B) और केस/अपील का नंबर, अगर कोर्ट या ट्रिब्यूनल में है",
        "देर से जमा किए गए महीनों की <strong>ECR/चालान</strong> की जानकारी",
        "7Q ब्याज के भुगतान का प्रमाण",
        "भुगतान के लिए नेट बैंकिंग",
      ],
    },
    {
      id: "dhyan",
      title: "ज़रूरी सावधानियां",
      list: [
        "योजना सिर्फ <strong>डैमेज</strong> पर राहत देती है; कर्मचारियों का पैसा (अंशदान) पूरा और सही खातों में जाना चाहिए।",
        "अगर आपका केस कोर्ट में है, तो निपटारे से पहले अपने वकील या CA से बात करें, ताकि अपील वापस लेने जैसी शर्तें समझ लें।",
        "भविष्य में देरी न हो, इसके लिए हर महीने <strong>15 तारीख</strong> तक PF जमा करने की आदत रखें।",
        "EPFO के नाम से फोन करके पैसे मांगने वालों से बचें; भुगतान सिर्फ पोर्टल पर करें।",
      ],
    },
  ],
  official: [
    { href: "https://unifiedportal-emp.epfindia.gov.in/", title: "EPFO Employer Portal", note: "VISHWAS 2026 मॉड्यूल" },
    { href: "https://www.epfindia.gov.in/", title: "EPFO (epfindia.gov.in)", note: "अधिसूचना और सर्कुलर" },
  ],
  faq: [
    { q: "EPFO VISHWAS 2026 की आखिरी तारीख क्या है?", a: "ज़्यादातर रिपोर्टों के अनुसार 28 दिसंबर 2026; कुछ में 29 दिसंबर। बढ़ने की कोई घोषणा नहीं है, इसलिए पहले आवेदन करें।" },
    { q: "क्या कर्मचारी इस योजना में आवेदन कर सकते हैं?", a: "नहीं। यह नियोक्ताओं के लिए है, जिन पर PF देर से जमा करने का डैमेज बकाया है।" },
    { q: "क्या ब्याज भी माफ होता है?", a: "नहीं। सिर्फ डैमेज कम दर पर लगता है; देरी का ब्याज (7Q) और PF अंशदान पूरा देना होता है।" },
    { q: "VISHWAS में डैमेज की दर कितनी है?", a: "0.25% से 1% प्रति माह, देरी की अवधि के हिसाब से; सामान्य नियम में यह 5% से 25% सालाना होती है।" },
    { q: "कौन सी अवधि की देरी पर लागू है?", a: "14 जून 2024 से पहले की अवधि की देरी पर।" },
    { q: "भुगतान के बाद क्या मिलता है?", a: "EPFO का डिजिटल हस्ताक्षर वाला Settlement Certificate, जिसके बाद उस मामले की कोर्ट/ट्रिब्यूनल कार्यवाही बंद होती है।" },
  ],
  related: [
    { href: "/service/epfo.html", emoji: "🏦", title: "EPFO / PF गाइड", text: "UAN, KYC, निकासी" },
    { href: "/service/epfo-higher-pension-option.html", emoji: "👴", title: "EPS हायर पेंशन", text: "ज़्यादा पेंशन का विकल्प" },
    { href: "/service/pm-viksit-bharat-rozgar-yojana.html", emoji: "💼", title: "PM विकसित भारत रोज़गार योजना", text: "पहली नौकरी पर ₹15,000" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME पंजीकरण" },
  ],
  aside: [
    { href: "https://unifiedportal-emp.epfindia.gov.in/", label: "🏦 Employer Portal" },
    { href: "/service/epfo.html", label: "📘 EPFO गाइड" },
  ],
};
