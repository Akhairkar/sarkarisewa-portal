import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; tnesevai.tn.gov.in did not open from our
// checker):
// - chennai.nic.in/esevai-test/ (Chennai district e-service list, opened
//   directly, last updated 18.10.2021): "Nativity Certificate": attachments
//   photo, any address proof, birth certificate, self declaration (all
//   mandatory); work flow CSC >> VAO >> RI >> ZDT. "Residence Certificate":
//   photo, any address proof, community certificate (all mandatory); work
//   flow VAO >> RI >> ZDT.
// - Facts already verified for tamil-nadu-income-certificate.ts: chennai.nic.in
//   work-flow page (ZDT = Zonal Deputy Tahsildar, based on current address);
//   district "TN e-Sevai Portal" pages (ariyalur, nilgiris, kallakurichi,
//   pudukkottai .nic.in): citizens apply / download nativity and other revenue
//   certificates at tnesevai.tn.gov.in/Citizen/; certificate verification at
//   tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml.
// Left out (not confirmable on an official page we could open): residence
// period, fee, time limit, validity. The old description promised an
// "official fee"; it was rewritten.
export const tamilNaduDomicileCertificate: DocGuide = {
  state: { slug: "tamil-nadu", hi: "तमिलनाडु" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Tamil Nadu Domicile Certificate 2026",
  description: "तमिलनाडु नेटिविटी और रेज़िडेंस सर्टिफिकेट 2026: TN e-Sevai पर या e-Sevai केंद्र से आवेदन, ज़रूरी कागज़, VAO-RI जांच, ज़ोनल डिप्टी तहसीलदार, डाउनलोड और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "तमिलनाडु निवास प्रमाण पत्र 2026: Nativity और Residence Certificate, e-Sevai पर आवेदन",
  lead: "तमिलनाडु में \"डोमिसाइल\" के लिए आम तौर पर <strong>Nativity Certificate</strong> (मूल निवास) और पते के लिए <strong>Residence Certificate</strong> बनता है; दोनों राजस्व विभाग की सेवाएं हैं। आवेदन <strong>TN e-Sevai</strong> पोर्टल (tnesevai.tn.gov.in) पर खुद या किसी e-Sevai केंद्र से होता है। गांव के प्रशासनिक अधिकारी (VAO) और राजस्व निरीक्षक (RI) की जांच के बाद ज़ोनल डिप्टी तहसीलदार प्रमाण पत्र जारी करते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in</a>'],
    ["सेवाएं", "Nativity Certificate / Residence Certificate"],
    ["जांच", "VAO → RI"],
    ["जारी करते हैं", "ज़ोनल डिप्टी तहसीलदार (चेन्नई)"],
  ],
  notice: "<strong>सही प्रमाण पत्र चुनें:</strong> राज्य कोटे के दाखिले या भर्ती में अक्सर <strong>Nativity Certificate</strong> मांगा जाता है, जबकि <strong>Residence Certificate</strong> मौजूदा पते का सबूत है। जिस काम के लिए चाहिए, उसके नियम में लिखा नाम देखकर ही आवेदन करें।",
  sections: [
    {
      id: "do-praman",
      title: "Nativity और Residence Certificate के कागज़ (चेन्नई ज़िले की e-Sevai सूची)",
      table: {
        head: ["", "Nativity Certificate", "Residence Certificate"],
        rows: [
          ["फोटो", "अनिवार्य", "अनिवार्य"],
          ["कोई भी पते का सबूत", "अनिवार्य", "अनिवार्य"],
          ["जन्म प्रमाण पत्र", "अनिवार्य", "-"],
          ["आवेदक की स्व-घोषणा", "अनिवार्य", "-"],
          ["Community (जाति) प्रमाण पत्र", "-", "अनिवार्य (सूची में)"],
          ["जांच का क्रम", "VAO → RI → ज़ोनल डिप्टी तहसीलदार", "VAO → RI → ज़ोनल डिप्टी तहसीलदार"],
        ],
      },
      callout: { kind: "info", html: "यह सूची चेन्नई ज़िला प्रशासन की वेबसाइट (2021) से है। दूसरे ज़िलों में पोर्टल पर अपलोड के समय जो कागज़ मांगे जाएं वही लगाएं। Nativity के लिए कितने साल तमिलनाडु में रहना ज़रूरी है, यह शर्त हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली।" },
    },
    {
      id: "online",
      title: "TN e-Sevai पर आवेदन",
      steps: [
        '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in/Citizen</a> खोलें और नागरिक (Citizen) के रूप में रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>Nativity Certificate</strong> या <strong>Residence Certificate</strong> चुनें।",
        "फॉर्म भरें और ऊपर बताए कागज़ अपलोड करें।",
        "पोर्टल पर दिखा शुल्क भरें और आवेदन नंबर नोट करें।",
        "VAO और RI की जांच के बाद मंज़ूरी मिलने पर प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "खुद न कर पाएं तो नज़दीकी e-Sevai केंद्र/CSC पर कागज़ लेकर जाएं: <a href=\"/service/csc-locator/tamil-nadu.html\">CSC लोकेटर</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "e-Sevai पोर्टल पर लॉगिन करके आवेदन की स्थिति देखें और मंज़ूरी के बाद प्रमाण पत्र डाउनलोड करें।",
        "प्रमाण पत्र असली है या नहीं, यह <a href=\"https://tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml\" target=\"_blank\" rel=\"noopener nofollow\">TN e-District Verify Certificate</a> पेज पर जांचा जा सकता है।",
        "VAO जांच के लिए बुलाएं या घर आएं तो मूल कागज़ दिखाएं।",
      ],
      html: '<p>फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Nativity के साथ जन्म प्रमाण पत्र नहीं", "जन्म प्रमाण पत्र लगाएं; न हो तो पहले बनवाएं"],
          ["स्व-घोषणा नहीं लगी", "आवेदक की स्व-घोषणा भरकर, हस्ताक्षर करके लगाएं"],
          ["पते का सबूत पुराना या किसी और के नाम", "मौजूदा पते का सबूत (राशन/स्मार्ट कार्ड, बिजली बिल, किरायानामा) लगाएं"],
          ["VAO जांच में पते पर नहीं मिले", "आवेदन नंबर लेकर VAO/तालुक कार्यालय से संपर्क करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://tnesevai.tn.gov.in/Citizen/", title: "TN e-Sevai नागरिक पोर्टल" },
    { href: "https://tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml", title: "TN e-District: Verify Certificate" },
    { href: "https://chennai.nic.in/esevai-test/", title: "चेन्नई ज़िला: e-Sevai सेवाएं और कागज़ों की सूची" },
  ],
  faq: [
    { q: "तमिलनाडु में डोमिसाइल प्रमाण पत्र किसे कहते हैं?", a: "तमिलनाडु में राजस्व विभाग Nativity Certificate (मूल निवास) और Residence Certificate (मौजूदा पता) देता है। राज्य कोटे के लिए अक्सर Nativity Certificate मांगा जाता है; अपने काम के नियम में लिखा नाम देखें।" },
    { q: "Nativity Certificate के लिए कौन से कागज़ चाहिए?", a: "चेन्नई ज़िले की e-Sevai सूची के अनुसार फोटो, कोई भी पते का सबूत, जन्म प्रमाण पत्र और आवेदक की स्व-घोषणा।" },
    { q: "प्रमाण पत्र कौन जारी करता है?", a: "VAO और राजस्व निरीक्षक (RI) की जांच के बाद ज़ोनल डिप्टी तहसीलदार (चेन्नई ज़िले का क्रम)।" },
    { q: "फीस कितनी है?", a: "हमें शुल्क किसी खुलने वाले आधिकारिक पेज पर नहीं मिला। पोर्टल या e-Sevai केंद्र पर भुगतान से पहले राशि दिखती है; रसीद ज़रूर लें।" },
  ],
  related: [
    { href: "/states/tamil-nadu-caste-certificate.html", emoji: "📜", title: "तमिलनाडु जाति (Community) प्रमाण पत्र", text: "e-Sevai पर" },
    { href: "/states/tamil-nadu-income-certificate.html", emoji: "💰", title: "तमिलनाडु आय प्रमाण पत्र", text: "e-Sevai पर" },
    { href: "/states/tamil-nadu-employment-exchange.html", emoji: "💼", title: "तमिलनाडु रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://tnesevai.tn.gov.in/Citizen/", label: "📝 TN e-Sevai पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
