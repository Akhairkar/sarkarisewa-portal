import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; sewasetu.assam.gov.in does not open from our
// checker, so its pages were read through search extracts):
// - sewasetu.assam.gov.in "Issuance of Caste Certificate" (search extract):
//   stipulated time limit 30 working days; photo, proof of date of birth and
//   proof of residence mandatory; father's caste certificate, or else a
//   recommendation of an authorised caste/tribe/community organisation notified
//   by the State Government; affidavit/voter list optional; charges Rs 30 plus
//   PFC/CSC service and printing/scanning charges. Separate Sewa Setu services
//   "Non Creamy Layer Certificate" and minority/Gorkha community certificates.
// - dimahasao.assam.gov.in "Apply for ST certificate" (updated Aug 2025):
//   issued by the office of the Deputy Commissioner; permanent residence proof;
//   parents' ST certificate or other proof; Gaonburah (rural) / Ward
//   Commissioner (urban) report, skipped if parents already hold ST
//   certificates; recommendation of President/Secretary of All Assam Tribal
//   Sangha or other authorised apex tribal body; HSLC admit card/certificate or
//   birth certificate; voter ID or certified electoral roll; PFC at DC/SDO
//   office; written reasons for rejection within 30 days.
// - dimahasao.assam.gov.in SC and OBC/MOBC pages (2022): same pattern of
//   documents (parents' certificate or affidavit, Gaonburah/Ward Commissioner
//   report); SC: issue within 15 days, enquiry by Circle Officer when needed,
//   whole process within 30 days.
// - dimahasao.assam.gov.in "Apply for non creamy layer": documents: residence
//   proof, OBC/MOBC certificate, parents' income certificate from the Circle
//   Officer (agriculturists) or controlling authority/Treasury Officer.
// - Sewa Setu search extract: helpline 1800-345-3574; track with reference
//   number; download from the ARTPS portal.
// Left out (not confirmable on an official page we could open): validity
// statement, exact break-up of charges for this service, appeal officer names.
export const assamCasteCertificate: DocGuide = {
  state: { slug: "assam", hi: "असम" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Assam Caste Certificate 2026: Apply & Status",
  description: "असम जाति प्रमाण पत्र (Caste Certificate) online apply 2026 at Sewa Setu Assam. Eligibility, document list, official fee & status check guide.",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "असम जाति प्रमाण पत्र 2026: Sewa Setu पर आवेदन, SC/ST/OBC के कागज़, समय सीमा और स्टेटस",
  lead: "असम में SC, ST और OBC/MOBC जाति प्रमाण पत्र <strong>ज़िले के उपायुक्त (DC) कार्यालय</strong> से जारी होता है। आवेदन <strong>Sewa Setu</strong> पोर्टल (sewasetu.assam.gov.in) पर ऑनलाइन या DC/SDO कार्यालय के <strong>PFC</strong> और CSC से होता है। Sewa Setu पर इस सेवा की तय समय सीमा <strong>30 कार्य दिवस</strong> लिखी है। पिता का जाति प्रमाण पत्र न हो तो सरकार से मान्य जाति/जनजाति संगठन की सिफारिश लगती है।",
  facts: [
    ["पोर्टल", '<a href="https://sewasetu.assam.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.assam.gov.in</a>'],
    ["जारी करते हैं", "उपायुक्त (DC) कार्यालय"],
    ["समय सीमा", "30 कार्य दिवस (Sewa Setu)"],
    ["शुल्क", "₹30 + PFC/CSC का सेवा शुल्क"],
  ],
  notice: "<strong>पिता का प्रमाण पत्र सबसे बड़ा सबूत है:</strong> Sewa Setu के अनुसार पिता का जाति प्रमाण पत्र न होने पर <strong>सरकार द्वारा अधिसूचित जाति/जनजाति/समुदाय संगठन की सिफारिश</strong> लगाना ज़रूरी है। आवेदन से पहले यह कागज़ तैयार रखें।",
  sections: [
    {
      id: "kya-hai",
      title: "असम में कौन से जाति प्रमाण पत्र बनते हैं",
      intro: "जाति प्रमाण पत्र इस बात का सरकारी सबूत है कि आप असम की अधिसूचित अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या OBC/MOBC सूची में आते हैं। ज़िला वेबसाइटों पर हर वर्ग के लिए अलग सेवा दी गई है:",
      table: {
        head: ["प्रमाण पत्र", "किसके लिए", "ख़ास कागज़"],
        rows: [
          ["<strong>SC</strong>", "असम की अनुसूचित जाति", "माता-पिता का SC प्रमाण पत्र या शपथ-पत्र; SC संगठन की सिफारिश (पुरानी ARTPS सूची)"],
          ["<strong>ST</strong>", "असम की अनुसूचित जनजाति", "All Assam Tribal Sangha या सरकार से मान्य शीर्ष जनजाति संगठन की सिफारिश"],
          ["<strong>OBC / MOBC</strong>", "असम की OBC/MOBC सूची", "माता-पिता का जाति प्रमाण पत्र या शपथ-पत्र"],
          ["<strong>नॉन-क्रीमी लेयर</strong>", "OBC/MOBC आरक्षण (नौकरी/दाखिला)", "OBC/MOBC प्रमाण पत्र + माता-पिता का आय प्रमाण पत्र (अलग सेवा)"],
        ],
      },
      callout: { kind: "info", html: "<strong>केंद्र की नौकरी/दाखिला:</strong> केंद्र सरकार की भर्ती में OBC आरक्षण तभी मिलता है जब जाति <strong>केंद्रीय OBC सूची</strong> में हो और <strong>भारत सरकार के प्रारूप</strong> वाला नॉन-क्रीमी लेयर प्रमाण पत्र हो। भर्ती विज्ञापन में मांगा गया प्रारूप देखकर ही आवेदन करें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है",
      list: [
        "आवेदक <strong>भारत का नागरिक</strong> और <strong>असम का स्थायी निवासी</strong> हो।",
        "आवेदक की जाति/जनजाति <strong>असम की अधिसूचित सूची</strong> में हो (SC, ST या OBC/MOBC)।",
        "ज़िला वेबसाइट के अनुसार आवेदन ज़िले के <strong>DC कार्यालय</strong> में लिया जाता है; ज़रूरत हो तो फाइल <strong>सर्किल ऑफिसर</strong> या स्वायत्त परिषद के अधिकारी को जांच के लिए भेजी जाती है।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>फोटो</strong>, <strong>जन्म तिथि का प्रमाण</strong> (HSLC एडमिट कार्ड/प्रमाण पत्र या जन्म प्रमाण पत्र) और <strong>निवास का प्रमाण</strong> (स्थायी निवास प्रमाण पत्र या दूसरा प्रमाण)। Sewa Setu पर ये अनिवार्य लिखे हैं।",
        "<strong>पिता/माता का जाति प्रमाण पत्र</strong>। न हो तो <strong>सरकार से मान्य जाति/जनजाति/समुदाय संगठन की सिफारिश</strong> (ST के लिए All Assam Tribal Sangha या अन्य शीर्ष जनजाति संगठन)।",
        "<strong>गांव बूढ़ा (Gaonburah)</strong> की रिपोर्ट (गांव में) या <strong>वार्ड कमिश्नर</strong> की रिपोर्ट (शहर में)। अगर माता-पिता के पास पहले से प्रमाण पत्र है तो यह छोड़ी जा सकती है।",
        "<strong>मतदाता पहचान पत्र</strong> या मतदाता सूची की प्रमाणित कॉपी (अपनी या परिवार की)।",
        "<strong>शपथ-पत्र</strong> (माता-पिता का प्रमाण पत्र न होने पर), अगर मांगा जाए।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन साफ और छोटे साइज़ में रखें। फोटो/कागज़ छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "Sewa Setu पर आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sewasetu.assam.gov.in/" target="_blank" rel="noopener nofollow">sewasetu.assam.gov.in</a> खोलें। पहली बार हैं तो नाम, मोबाइल नंबर और पासवर्ड से रजिस्टर करें, फिर लॉगिन करें।',
        "<strong>Apply Online</strong> में <strong>Issuance of Caste Certificate</strong> सेवा चुनें (नॉन-क्रीमी लेयर के लिए उसकी अलग सेवा)।",
        "फॉर्म में अपना वर्ग (SC/ST/OBC/MOBC), जाति, पता, ज़िला, सर्किल और पिता की जानकारी भरें।",
        "ऊपर बताए कागज़ अपलोड करें और शुल्क भरें।",
        "<strong>पावती (Acknowledgement)</strong> में मिला <strong>Application Reference Number</strong> संभालकर रखें; इसी से स्टेटस देखा जाता है।",
      ],
      callout: { kind: "info", html: "ऑनलाइन नहीं कर पा रहे? DC या SDO (Civil) कार्यालय के <strong>PFC (Public Facilitation Centre)</strong> या नज़दीकी <strong>CSC</strong> से आवेदन कराएं। वहां सेवा और प्रिंट/स्कैन का अलग शुल्क लगता है।" },
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और अपील",
      list: [
        "<strong>समय सीमा:</strong> Sewa Setu पर इस सेवा की तय समय सीमा <strong>30 कार्य दिवस</strong> है। ज़िला वेबसाइट के अनुसार जांच की ज़रूरत न हो तो प्रमाण पत्र पहले भी मिल सकता है, और आवेदन खारिज हो तो कारण लिखकर बताया जाता है।",
        "<strong>शुल्क:</strong> Sewa Setu पेज पर <strong>₹30</strong> शुल्क दिया गया है; PFC/CSC से आवेदन करने पर सेवा शुल्क और प्रिंट/स्कैन शुल्क अलग। भुगतान से पहले स्क्रीन पर कुल राशि देख लें।",
        "<strong>अपील:</strong> यह सेवा असम लोक सेवा अधिकार कानून (ARTPS) में आती है। समय पर प्रमाण पत्र न मिले या गलत तरीके से खारिज हो तो उसी कानून में तय अपील अधिकारी के पास अपील करें; अधिकारी का नाम पावती/पोर्टल पर देखें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "Sewa Setu होमपेज पर <strong>Track Application Status</strong> में अपना Application Reference Number डालें।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से <strong>डाउनलोड</strong> होता है।",
        "प्रमाण पत्र मिलते ही नाम, पिता का नाम, जाति और वर्ग की वर्तनी जांच लें।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र रखने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "ncl",
      title: "OBC/MOBC के लिए नॉन-क्रीमी लेयर प्रमाण पत्र",
      intro: "Sewa Setu पर <strong>Non Creamy Layer Certificate</strong> अलग सेवा है। ज़िला वेबसाइट के अनुसार इसके लिए ये कागज़ लगते हैं:",
      list: [
        "निवास का प्रमाण",
        "सक्षम अधिकारी से बना <strong>OBC/MOBC जाति प्रमाण पत्र</strong>",
        "माता-पिता का <strong>आय प्रमाण पत्र</strong>: खेती करने वाले परिवार के लिए <strong>सर्किल ऑफिसर</strong> से; नौकरी/पेंशन वालों के लिए नियंत्रक अधिकारी या ट्रेज़री ऑफिसर से",
      ],
      callout: { kind: "warn", html: "नॉन-क्रीमी लेयर की आय सीमा और वैधता के नियम भर्ती या दाखिले की संस्था भी तय करती है। ज़्यादातर संस्थाएं <strong>हाल का</strong> NCL प्रमाण पत्र मांगती हैं, इसलिए विज्ञापन में दी तारीख के हिसाब से नया बनवाएं।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पिता का जाति प्रमाण पत्र नहीं और संगठन की सिफारिश भी नहीं", "सरकार से मान्य जाति/जनजाति संगठन से सिफारिश पत्र लें"],
          ["गांव बूढ़ा/वार्ड कमिश्नर की रिपोर्ट नहीं", "आवेदन से पहले रिपोर्ट बनवा लें (माता-पिता के पास प्रमाण पत्र हो तो ज़रूरत नहीं)"],
          ["जन्म तिथि या निवास का प्रमाण अधूरा", "HSLC प्रमाण पत्र/जन्म प्रमाण पत्र और स्थायी निवास प्रमाण पत्र लगाएं"],
          ["नाम या जाति की वर्तनी अलग-अलग", "सभी कागज़ों में एक जैसी वर्तनी रखें; अंतर हो तो शपथ-पत्र दें"],
          ["OBC आरक्षण के लिए सिर्फ जाति प्रमाण पत्र लगाया", "नॉन-क्रीमी लेयर प्रमाण पत्र अलग से बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "Sewa Setu पोर्टल पर हेल्पलाइन <strong>1800-345-3574</strong> दी गई है। आवेदन की स्थिति और कागज़ों के सवाल के लिए अपने ज़िले के DC कार्यालय के PFC में भी पूछ सकते हैं। किसी अनौपचारिक एजेंट को अपनी लॉगिन जानकारी न दें।",
    },
  ],
  official: [
    { href: "https://sewasetu.assam.gov.in/", title: "Sewa Setu Assam (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://sewasetu.assam.gov.in/site/service-apply/issuance-of-caste-certificate", title: "Sewa Setu: Issuance of Caste Certificate" },
    { href: "https://sewasetu.assam.gov.in/site/service-apply/issuance-of-non-creamy-layer-certificate", title: "Sewa Setu: Non Creamy Layer Certificate" },
    { href: "https://dimahasao.assam.gov.in/information-and-services/apply-st-certificate", title: "ST प्रमाण पत्र: कागज़ और प्रक्रिया (ज़िला दीमा हसाओ)" },
  ],
  faq: [
    { q: "असम में जाति प्रमाण पत्र कहां बनता है?", a: "ज़िले के उपायुक्त (DC) कार्यालय से। आवेदन Sewa Setu पोर्टल (sewasetu.assam.gov.in) पर ऑनलाइन, या DC/SDO कार्यालय के PFC और CSC से होता है।" },
    { q: "असम जाति प्रमाण पत्र कितने दिन में बनता है?", a: "Sewa Setu पर इस सेवा की तय समय सीमा 30 कार्य दिवस लिखी है। जांच की ज़रूरत न हो तो पहले भी मिल सकता है।" },
    { q: "पिता का जाति प्रमाण पत्र नहीं है तो क्या करें?", a: "Sewa Setu के अनुसार तब सरकार द्वारा अधिसूचित जाति/जनजाति/समुदाय संगठन की सिफारिश लगाना ज़रूरी है। ST के लिए All Assam Tribal Sangha या अन्य मान्य शीर्ष जनजाति संगठन की सिफारिश लगती है।" },
    { q: "गांव बूढ़ा की रिपोर्ट कब ज़रूरी है?", a: "ज़िला वेबसाइट के अनुसार गांव में गांव बूढ़ा और शहर में वार्ड कमिश्नर की रिपोर्ट लगती है। अगर माता-पिता के पास पहले से उसी वर्ग का प्रमाण पत्र है तो यह छोड़ी जा सकती है।" },
    { q: "OBC/MOBC आरक्षण के लिए क्या सिर्फ जाति प्रमाण पत्र काफी है?", a: "नहीं। आरक्षण के लिए नॉन-क्रीमी लेयर प्रमाण पत्र भी चाहिए, जो Sewa Setu पर अलग सेवा है। केंद्र की नौकरी के लिए भारत सरकार के प्रारूप वाला NCL प्रमाण पत्र लगता है।" },
  ],
  related: [
    { href: "/states/assam-income-certificate.html", emoji: "💰", title: "असम आय प्रमाण पत्र", text: "Sewa Setu पर आवेदन" },
    { href: "/states/assam-domicile-certificate.html", emoji: "🏠", title: "असम स्थायी निवास प्रमाण पत्र", text: "PRC / डोमिसाइल" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://sewasetu.assam.gov.in/", label: "📝 Sewa Setu पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
