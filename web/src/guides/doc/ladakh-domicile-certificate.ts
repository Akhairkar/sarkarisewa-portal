import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - ladakh.gov.in press release "Chief Secretary reviews referral of vacancies
//   ... GAD conducts training for revenue officers on Domicile Certification"
//   (Leh, 8-9 July 2025, opened directly): Tehsildars are the competent
//   authorities for issuing Domicile Certificates under the "Ladakh Civil
//   Services Decentralization and Recruitment-Grant of Domicile Certificate
//   (Procedure) Rules, 2025"; SOPs, document requirements and verification;
//   records of issuance in every tehsil.
// - ladakh.gov.in "Online Citizen Services" listing (see
//   ladakh-income-certificate.ts): domicile has its own portal
//   domicile.ladakh.gov.in (page title "UT Ladakh Domicile Certificate
//   Portal", opened 14 Oct 2026).
// - News reports, search extracts (Tribune, Voice of Ladakh, Kashmir
//   Despatch, Reach Ladakh, June-July 2025): rules notified in the Gazette of
//   3 June 2025; domicile = 15 years' residence counted from 31 Oct 2019, or
//   7 years' study plus Class 10/12 exam in Ladakh, or children of central
//   government / PSU / bank etc. officials who served 10 years in Ladakh, or
//   children of qualifying persons; Ladakh Resident Certificate holders also
//   covered; Tehsildar issues, Deputy Commissioner hears appeals; online or
//   offline at the Tehsildar office; evidence such as ration card, property
//   records, education records, voter list, utility bills. We could not open
//   the Gazette text, so the page marks these as reported.
// Left out (not confirmable): fee, time limit, appeal period, exact form names.
export const ladakhDomicileCertificate: DocGuide = {
  state: { slug: "ladakh", hi: "लद्दाख" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Ladakh Domicile Certificate 2026: Apply & Status",
  description: "लद्दाख डोमिसाइल प्रमाण पत्र 2026: 2025 के नए नियम, कौन पात्र है, तहसीलदार से प्रमाण पत्र, domicile.ladakh.gov.in पोर्टल और DC के पास अपील।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "लद्दाख डोमिसाइल प्रमाण पत्र 2026: नए नियम, पात्रता और आवेदन",
  lead: "लद्दाख में डोमिसाइल प्रमाण पत्र 2025 में बने <strong>Ladakh Civil Services Decentralization and Recruitment-Grant of Domicile Certificate (Procedure) Rules, 2025</strong> के तहत <strong>तहसीलदार</strong> जारी करते हैं। ऑनलाइन आवेदन के लिए अलग पोर्टल <strong>domicile.ladakh.gov.in</strong> है; तहसीलदार कार्यालय में भी आवेदन होता है। यह प्रमाण पत्र मुख्य रूप से लद्दाख की सरकारी नौकरियों में डोमिसाइल कोटे के लिए है।",
  facts: [
    ["नियम", "Domicile Certificate (Procedure) Rules, 2025"],
    ["जारी करते हैं", "तहसीलदार"],
    ["ऑनलाइन", '<a href="https://domicile.ladakh.gov.in/" target="_blank" rel="noopener nofollow">domicile.ladakh.gov.in</a>'],
    ["अपील", "डिप्टी कमिश्नर (समाचारों के अनुसार)"],
  ],
  notice: "<strong>ध्यान दें:</strong> पात्रता की नीचे दी गई शर्तें जून 2025 की खबरों से ली गई हैं; गजट का पूरा पाठ हम नहीं खोल सके। आवेदन से पहले तहसीलदार कार्यालय या पोर्टल पर अपनी श्रेणी की पुष्टि करें।",
  sections: [
    {
      id: "kya-hai",
      title: "लद्दाख डोमिसाइल क्या है और कहां काम आता है",
      intro: "2025 के नए नियमों के बाद लद्दाख की सरकारी भर्तियों में डोमिसाइल वालों के लिए पद आरक्षित हैं। लद्दाख प्रशासन के अनुसार जुलाई 2025 में तहसीलदारों को इन नियमों के तहत डोमिसाइल प्रमाण पत्र देने की ट्रेनिंग दी गई, ताकि सभी तहसीलों में एक जैसा तरीका रहे।",
      callout: { kind: "info", html: "डोमिसाइल प्रमाण पत्र जाति या जनजाति का सबूत नहीं है। ST प्रमाण पत्र अलग बनता है: <a href=\"/states/ladakh-caste-certificate.html\">लद्दाख ST प्रमाण पत्र</a>।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है (समाचारों के अनुसार)",
      intro: "जून 2025 में छपी खबरों के अनुसार इनमें से कोई एक शर्त पूरी करने वाला व्यक्ति लद्दाख का डोमिसाइल माना जाता है:",
      list: [
        "जो लद्दाख केंद्र शासित प्रदेश बनने की तारीख (<strong>31 अक्टूबर 2019</strong>) से <strong>15 साल</strong> या उससे ज़्यादा समय से लद्दाख में रह रहा हो",
        "जिसने लद्दाख के शिक्षण संस्थान में <strong>7 साल पढ़ाई</strong> की हो और वहीं से <strong>10वीं या 12वीं</strong> की परीक्षा दी हो",
        "केंद्र सरकार, केंद्रीय PSU, सरकारी बैंक, केंद्रीय विश्वविद्यालय आदि के उन अधिकारियों के <strong>बच्चे</strong> जिन्होंने लद्दाख में कुल <strong>10 साल</strong> सेवा दी हो",
        "ऊपर की शर्त पूरी करने वाले व्यक्ति के <strong>बच्चे</strong>",
        "खबरों के अनुसार लद्दाख में जारी पुराने <strong>Resident Certificate</strong> रखने वाले और उनके बच्चे भी शामिल हैं",
      ],
      callout: { kind: "warn", html: "15 साल की गिनती 31 अक्टूबर 2019 से होती है, ऐसा खबरों में लिखा है। इसलिए जो 2019 के बाद लद्दाख आए हैं, वे इस शर्त से अभी डोमिसाइल नहीं पा सकते। अपनी श्रेणी तहसीलदार से ज़रूर पूछें।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ काम आते हैं",
      intro: "खबरों के अनुसार निवास साबित करने के लिए इस तरह के कागज़ माने जाते हैं:",
      list: [
        "राशन कार्ड",
        "अचल संपत्ति (ज़मीन/मकान) के कागज़",
        "शिक्षा के रिकॉर्ड (स्कूल प्रमाण पत्र, 10वीं/12वीं की मार्कशीट)",
        "मतदाता सूची में नाम",
        "बिजली जैसे बिल",
        "अधिकारी के बच्चों के लिए: माता-पिता की लद्दाख में सेवा का प्रमाण",
        "पुराना Resident Certificate हो तो उसकी कॉपी",
      ],
      callout: { kind: "ok", html: "पूरी आधिकारिक सूची पोर्टल पर या तहसीलदार कार्यालय में देखें। सभी कागज़ों में नाम और पता एक जैसा हो।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://domicile.ladakh.gov.in/" target="_blank" rel="noopener nofollow">domicile.ladakh.gov.in</a> (UT Ladakh Domicile Certificate Portal) खोलें और पोर्टल के निर्देश के अनुसार रजिस्टर/लॉगिन करें।',
        "अपनी पात्रता की श्रेणी चुनें, फॉर्म भरें और कागज़ अपलोड करें।",
        "आवेदन जमा करें और आवेदन संख्या संभाल कर रखें।",
        "ऑनलाइन न कर सकें तो अपनी <strong>तहसील के तहसीलदार कार्यालय</strong> में कागज़ लेकर आवेदन करें।",
      ],
      html: "<p>फीस और फैसले की समय सीमा किसी आधिकारिक पेज पर हमें नहीं मिली। आवेदन के समय पोर्टल या तहसील कार्यालय से पूछें।</p>",
    },
    {
      id: "appeal",
      title: "आवेदन खारिज हो तो",
      intro: "खबरों के अनुसार तहसीलदार आवेदन खारिज करे तो <strong>डिप्टी कमिश्नर (DC)</strong> के पास अपील होती है (लेह या कारगिल, जहां आपकी तहसील है)। अपील कितने दिन में करनी है, यह खारिज करने वाले आदेश में या DC कार्यालय से पता करें।",
      table: {
        head: ["आम वजह", "हल"],
        rows: [
          ["निवास के 15 साल पूरे नहीं", "देखें कि पढ़ाई, माता-पिता की सेवा या Resident Certificate वाली कोई और श्रेणी लागू होती है या नहीं"],
          ["पढ़ाई के 7 साल का सबूत अधूरा", "हर साल के स्कूल रिकॉर्ड और 10वीं/12वीं की मार्कशीट लगाएं"],
          ["नाम/पता कागज़ों में अलग", "आधार, राशन कार्ड और वोटर कार्ड में एक जैसी जानकारी कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://domicile.ladakh.gov.in/", title: "UT Ladakh Domicile Certificate Portal" },
    { href: "https://ladakh.gov.in/?p=46222", title: "तहसीलदारों को डोमिसाइल प्रमाण पत्र की ट्रेनिंग (लद्दाख प्रशासन, जुलाई 2025)" },
    { href: "https://ladakh.gov.in/services/", title: "लद्दाख प्रशासन: ऑनलाइन नागरिक सेवाएं" },
  ],
  faq: [
    { q: "लद्दाख डोमिसाइल प्रमाण पत्र कौन देता है?", a: "तहसीलदार। लद्दाख प्रशासन के अनुसार 2025 के Domicile Certificate (Procedure) Rules के तहत तहसीलदार ही सक्षम अधिकारी हैं।" },
    { q: "लद्दाख डोमिसाइल ऑनलाइन कहां बनता है?", a: "domicile.ladakh.gov.in पोर्टल पर, या अपनी तहसील के तहसीलदार कार्यालय में।" },
    { q: "लद्दाख डोमिसाइल के लिए कितने साल रहना ज़रूरी है?", a: "खबरों के अनुसार 31 अक्टूबर 2019 से 15 साल का निवास, या लद्दाख में 7 साल पढ़ाई और 10वीं/12वीं की परीक्षा, या माता-पिता की 10 साल की केंद्रीय सेवा। पुराने Resident Certificate वाले भी शामिल बताए गए हैं। अपनी श्रेणी तहसीलदार से पुष्टि करें।" },
    { q: "आवेदन खारिज हो जाए तो क्या करें?", a: "खबरों के अनुसार डिप्टी कमिश्नर के पास अपील होती है। खारिज होने का आदेश लेकर DC कार्यालय (लेह या कारगिल) जाएं।" },
  ],
  related: [
    { href: "/states/ladakh-caste-certificate.html", emoji: "📜", title: "लद्दाख जाति / ST प्रमाण पत्र", text: "तहसीलदार से" },
    { href: "/states/ladakh-income-certificate.html", emoji: "💰", title: "लद्दाख आय प्रमाण पत्र", text: "तहसीलदार से" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://domicile.ladakh.gov.in/", label: "📝 डोमिसाइल पोर्टल" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
