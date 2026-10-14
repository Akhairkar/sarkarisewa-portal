import type { DocGuide } from "./types";

// Sources (checked 13-14 Oct 2026):
// - northmiddle.andaman.nic.in/service/obc-certificate/ (last updated
//   11.09.2025): OBC Certificate, whom to apply "Concerned Tehsildar", how to
//   apply "Through e-forms via csc/e-corner/internet", documents: photo,
//   birth certificate, Local (applicant), Islander Card (applicant), Local
//   (parents), Islander Card (parents), Ration Card / family details, OBC /
//   ROR (parents), affidavit, pay certificate (Govt) / income certificate
//   (Pvt); portal https://edistrict.andamannicobar.gov.in/; Tehsildar offices
//   Mayabunder/Diglipur/Rangat.
// - southandaman.nic.in/service/obc-certificate/ (last updated 10.04.2026):
//   same OBC service and document list, Tehsildar offices Port Blair /
//   Ferrargunj / Little Andaman, portal link edistrict.andamannicobar.gov.in.
// - southandaman.nic.in/service/local-certificate/: Local Certificate (10
//   years / pre-1942 settler) from the Tehsildar, documents.
// - nicobars.andaman.nic.in services: Tehsildar offices Car Nicobar /
//   Nancowry / Great Nicobar; portal edistrict.andamannicobar.gov.in.
// - services.india.gov.in listing (search extract): online ST certificate for
//   Andaman and Nicobar Islands.
// - Constitution (Andaman and Nicobar Islands) Scheduled Tribes Order, 1959:
//   Great Andamanese, Jarawas, Nicobarese, Onges, Sentinelese, Shom Pens. No
//   Scheduled Castes order exists for the UT.
// Left out (not confirmable; the e-District portal and andaman.gov.in could not
// be opened from here): fee, time limit, validity rule, the ST certificate
// document list and issuing level, status/verification steps beyond the
// acknowledgement, a helpline. Some older district pages still show
// edistrict.andaman.gov.in; the newer ones (2025-2026) use
// edistrict.andamannicobar.gov.in, which is what we link.
export const andamanNicobarCasteCertificate: DocGuide = {
  state: { slug: "andaman-nicobar", hi: "अंडमान और निकोबार" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Andaman & Nicobar Islands Caste",
  description: "अंडमान और निकोबार जाति प्रमाण पत्र (OBC / ST) 2026: e-District या तहसीलदार कार्यालय में आवेदन, Local Certificate और Islander Card सहित ज़रूरी दस्तावेज़।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "अंडमान और निकोबार जाति प्रमाण पत्र 2026: OBC और ST प्रमाण पत्र, e-District पर आवेदन और ज़रूरी कागज़",
  lead: "अंडमान और निकोबार द्वीप समूह में OBC जाति प्रमाण पत्र आपके क्षेत्र के <strong>तहसीलदार</strong> देते हैं। आवेदन e-District पोर्टल (edistrict.andamannicobar.gov.in) पर, CSC/e-Corner से, या तहसीलदार कार्यालय में होता है। आवेदन के साथ आवेदक और माता-पिता का <strong>Local Certificate</strong> और <strong>Islander Card</strong>, और माता-पिता का OBC प्रमाण पत्र या ROR लगता है। यहां अनुसूचित जाति (SC) की कोई सूची अधिसूचित नहीं है; अनुसूचित जनजाति (ST) प्रमाण पत्र अलग सेवा है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a>'],
    ["जारी करते हैं", "संबंधित तहसीलदार"],
    ["आवेदन", "ऑनलाइन, CSC/e-Corner या तहसीलदार कार्यालय"],
    ["पहले चाहिए", "Local Certificate और Islander Card"],
  ],
  notice: "<strong>पहले Local Certificate:</strong> OBC प्रमाण पत्र के आवेदन में आवेदक और माता-पिता दोनों का Local Certificate और Islander Card मांगा जाता है। ये नहीं हैं तो पहले इन्हें बनवाएं; Local Certificate भी तहसीलदार ही देते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "अंडमान-निकोबार में कौन सा जाति प्रमाण पत्र मिलता है",
      table: {
        head: ["प्रमाण पत्र", "किसके लिए", "ध्यान दें"],
        rows: [
          ["<strong>OBC प्रमाण पत्र</strong>", "द्वीप समूह की OBC सूची में आने वाले समुदाय", "तहसीलदार देते हैं; केंद्र की नौकरी के लिए केंद्र के प्रारूप वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र मांगा जाता है"],
          ["<strong>ST प्रमाण पत्र</strong>", "अनुसूचित जनजाति: ग्रेट अंडमानीज़, जारवा, निकोबारी, ओंगे, सेंटिनलीज़ और शोम्पेन", "राष्ट्रीय सेवा पोर्टल पर अंडमान-निकोबार के लिए ऑनलाइन सेवा के रूप में दर्ज"],
          ["<strong>SC प्रमाण पत्र</strong>", "अंडमान-निकोबार के लिए कोई अनुसूचित जाति सूची अधिसूचित नहीं", "दूसरे राज्य से आए SC व्यक्ति को अपने मूल राज्य का प्रमाण पत्र देखना होगा"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी या परीक्षा में OBC आरक्षण के लिए आम तौर पर <strong>केंद्र के प्रारूप में OBC (नॉन-क्रीमी लेयर)</strong> प्रमाण पत्र मांगा जाता है, जिसमें माता-पिता की आय और पद देखकर क्रीमी लेयर तय होती है। भर्ती के विज्ञापन में लिखा प्रारूप देखकर ही आवेदन करें और तहसीलदार कार्यालय को बताएं कि प्रमाण पत्र किस काम के लिए है।" },
    },
    {
      id: "kagaz",
      title: "OBC प्रमाण पत्र के लिए ज़रूरी कागज़",
      intro: "ज़िला प्रशासन (दक्षिण अंडमान, उत्तर व मध्य अंडमान) के सेवा पेज के अनुसार:",
      list: [
        "आवेदक की फोटो।",
        "जन्म प्रमाण पत्र।",
        "आवेदक का <strong>Local Certificate</strong> और <strong>Islander Card</strong>।",
        "माता-पिता का <strong>Local Certificate</strong> और <strong>Islander Card</strong>।",
        "राशन कार्ड या परिवार का ब्योरा।",
        "माता-पिता का <strong>OBC प्रमाण पत्र</strong> या ज़मीन का रिकॉर्ड (<strong>ROR</strong>)।",
        "शपथ-पत्र (Affidavit)।",
        "आय का सबूत: माता-पिता सरकारी नौकरी में हैं तो <strong>वेतन प्रमाण पत्र (Pay Certificate)</strong>, निजी काम में हैं तो <strong>आय प्रमाण पत्र</strong>।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> सभी कागज़ पहले से साफ स्कैन करके छोटे आकार की फाइल में रखें, ताकि ऑनलाइन फॉर्म में आसानी से अपलोड हो सकें।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://edistrict.andamannicobar.gov.in/" target="_blank" rel="noopener nofollow">edistrict.andamannicobar.gov.in</a> खोलें और नागरिक (citizen) के रूप में अपना अकाउंट बनाकर लॉगिन करें।',
        "सेवाओं की सूची में <strong>OBC Certificate</strong> (या ST प्रमाण पत्र) चुनें।",
        "फॉर्म भरें और ऊपर दिए कागज़ अपलोड करें।",
        "आवेदन जमा करें और पावती/आवेदन संख्या संभाल कर रखें।",
        "खुद नहीं भर सकते तो पास के <strong>CSC या e-Corner</strong> पर यही आवेदन करवा सकते हैं; वहां कोई सेवा शुल्क लगे तो पहले पूछ लें।",
      ],
      html: "<p>ई-डिस्ट्रिक्ट पोर्टल हमारी जांच के समय यहां से नहीं खुल सका, इसलिए मेन्यू के नाम थोड़े अलग हो सकते हैं। पोर्टल का पता ज़िला प्रशासन के 2025-2026 के सेवा पेजों से लिया गया है।</p>",
    },
    {
      id: "offline",
      title: "तहसीलदार कार्यालय",
      intro: "आवेदन आपके इलाके के तहसीलदार कार्यालय में जाता है:",
      table: {
        head: ["ज़िला", "तहसीलदार कार्यालय"],
        rows: [
          ["दक्षिण अंडमान", "पोर्ट ब्लेयर (श्री विजय पुरम), फेरारगंज, लिटिल अंडमान"],
          ["उत्तर और मध्य अंडमान", "मायाबंदर, डिगलीपुर, रंगत"],
          ["निकोबार", "कार निकोबार, नानकौरी, ग्रेट निकोबार"],
        ],
      },
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और स्टेटस",
      list: [
        "<strong>फीस और समय सीमा:</strong> ज़िला प्रशासन के सेवा पेजों पर इस सेवा की कोई सरकारी फीस या तय समय सीमा नहीं लिखी है। आवेदन करते समय तहसीलदार कार्यालय या CSC पर पूछ लें।",
        "<strong>स्टेटस:</strong> पावती में मिली आवेदन संख्या से e-District पोर्टल पर स्टेटस देखें, या तहसीलदार कार्यालय में पूछें।",
        "<strong>जांच:</strong> तहसीलदार कार्यालय कागज़ों की जांच के बाद प्रमाण पत्र जारी करता है। माता-पिता के OBC प्रमाण पत्र या ROR से यह साबित होता है कि परिवार इसी समुदाय का है।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Local Certificate या Islander Card नहीं", "पहले तहसीलदार से Local Certificate और Islander Card बनवाएं"],
          ["माता-पिता का OBC प्रमाण पत्र/ROR नहीं", "परिवार के पुराने रिकॉर्ड, ज़मीन का ROR या भाई-बहन का प्रमाण पत्र जुटाएं"],
          ["आय का सबूत नहीं", "सरकारी नौकरी वाले माता-पिता का Pay Certificate, निजी काम वालों का आय प्रमाण पत्र लगाएं"],
          ["गलत प्रारूप", "केंद्र की नौकरी के लिए केंद्र का OBC (नॉन-क्रीमी लेयर) प्रारूप मांगें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "सबसे पहले अपने तहसीलदार कार्यालय या पास के CSC/e-Corner पर संपर्क करें। आवेदन लंबा अटके तो ज़िले के उपायुक्त (Deputy Commissioner) कार्यालय में शिकायत करें। इस सेवा का अलग हेल्पलाइन नंबर हमें आधिकारिक पेज पर नहीं मिला, इसलिए किसी अनौपचारिक नंबर पर अपने कागज़ न भेजें।",
    },
  ],
  official: [
    { href: "https://edistrict.andamannicobar.gov.in/", title: "e-District अंडमान और निकोबार (ऑनलाइन आवेदन)" },
    { href: "https://southandaman.nic.in/service/obc-certificate/", title: "दक्षिण अंडमान ज़िला: OBC प्रमाण पत्र, कागज़ों की सूची" },
    { href: "https://northmiddle.andaman.nic.in/service/obc-certificate/", title: "उत्तर और मध्य अंडमान ज़िला: OBC प्रमाण पत्र" },
    { href: "https://southandaman.nic.in/service/local-certificate/", title: "दक्षिण अंडमान ज़िला: Local Certificate" },
    { href: "https://nicobars.andaman.nic.in/", title: "निकोबार ज़िला प्रशासन" },
  ],
  faq: [
    { q: "अंडमान-निकोबार में OBC प्रमाण पत्र कौन देता है?", a: "आपके क्षेत्र के तहसीलदार। आवेदन e-District पोर्टल (edistrict.andamannicobar.gov.in), CSC/e-Corner या तहसीलदार कार्यालय से होता है।" },
    { q: "OBC प्रमाण पत्र के लिए कौन से कागज़ लगते हैं?", a: "फोटो, जन्म प्रमाण पत्र, आवेदक और माता-पिता का Local Certificate और Islander Card, राशन कार्ड या परिवार का ब्योरा, माता-पिता का OBC प्रमाण पत्र या ROR, शपथ-पत्र, और सरकारी नौकरी वालों का Pay Certificate या निजी काम वालों का आय प्रमाण पत्र।" },
    { q: "क्या अंडमान-निकोबार में SC प्रमाण पत्र बनता है?", a: "अंडमान और निकोबार द्वीप समूह के लिए अनुसूचित जातियों की कोई सूची अधिसूचित नहीं है। यहां ST (ग्रेट अंडमानीज़, जारवा, निकोबारी, ओंगे, सेंटिनलीज़, शोम्पेन) और OBC के प्रमाण पत्र बनते हैं।" },
    { q: "प्रमाण पत्र की फीस और समय सीमा क्या है?", a: "ज़िला प्रशासन के सेवा पेजों पर इसकी कोई सरकारी फीस या समय सीमा नहीं लिखी है। आवेदन के समय तहसीलदार कार्यालय या CSC पर पूछ लें।" },
  ],
  related: [
    { href: "/states/andaman-nicobar-income-certificate.html", emoji: "💰", title: "अंडमान-निकोबार आय प्रमाण पत्र", text: "तहसीलदार से, e-District पर आवेदन" },
    { href: "/states/andaman-nicobar-domicile-certificate.html", emoji: "🏠", title: "अंडमान-निकोबार निवास प्रमाण पत्र", text: "Local / Residence Certificate" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.andamannicobar.gov.in/", label: "📝 e-District अंडमान-निकोबार" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
