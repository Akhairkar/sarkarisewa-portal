import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; edistrict.wb.gov.in and wbxpress.com did not
// open from our checker, so we used search extracts):
// - Home & Hill Affairs Department letter No. 917-Home(Cons.)/RIM(Cons.)-114/
//   2025 dated 24.12.2025 to the Chief Electoral Officer (reproduced on
//   wbxpress.com, search extract): District Magistrate, Additional District
//   Magistrate (Gen.) and Sub-Divisional Officer are designated to issue the
//   Permanent Residence Certificate in the State, except Kolkata where the
//   Collector, Kolkata issues it; cites notification 149-P(PG)/2P(RTPSA)-02/22
//   dated 16.09.2022; applications can be made online through the West Bengal
//   e-District portal or offline to the issuing authority.
// - newsonair.gov.in (All India Radio, 8-9 Feb 2026): the Election Commission
//   allowed the Permanent Resident Certificate as an admissible document under
//   the SIR in West Bengal; EROs/AEROs accept only PRCs issued by the
//   designated authorities.
// - South 24 Parganas block citizen-services page (s24pgs.gov.in, search
//   extract): residential certificate applied through the e-District portal and
//   approved by the concerned SDO.
// - edistrict.wb.gov.in and Bangla Sahayata Kendra (bsk.wb.gov.in) as already
//   used in west-bengal-income-certificate.ts.
// Left out (not confirmable on an official page we could open): residence
// period, document list, fee, time limit, validity. The old description
// promised an "official fee"; it was rewritten.
export const westBengalDomicileCertificate: DocGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "West Bengal Domicile Certificate 2026",
  description: "पश्चिम बंगाल स्थायी निवास प्रमाण पत्र (Permanent Residence Certificate) 2026: DM/ADM/SDO (कोलकाता में कलेक्टर) कौन देता है, e-District पर ऑनलाइन या दफ्तर में आवेदन, SIR में मान्यता।",
  published: "2026-08-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पश्चिम बंगाल स्थायी निवास (डोमिसाइल) प्रमाण पत्र 2026: कौन देता है और कैसे बनवाएं",
  lead: "पश्चिम बंगाल में निवास का प्रमाण पत्र <strong>Permanent Residence Certificate</strong> कहलाता है। गृह एवं पर्वतीय मामले विभाग के 24 दिसंबर 2025 के पत्र के अनुसार इसे <strong>ज़िलाधिकारी (DM), अतिरिक्त ज़िलाधिकारी (सामान्य) और SDO</strong> जारी करते हैं; <strong>कोलकाता में कलेक्टर, कोलकाता</strong>। आवेदन <strong>e-District पोर्टल</strong> पर ऑनलाइन या जारी करने वाले अधिकारी के दफ्तर में ऑफलाइन होता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.wb.gov.in/" target="_blank" rel="noopener nofollow">edistrict.wb.gov.in</a>'],
    ["जारी करते हैं", "DM / ADM (सामान्य) / SDO"],
    ["कोलकाता में", "कलेक्टर, कोलकाता"],
    ["आवेदन", "ऑनलाइन (e-District) या ऑफलाइन"],
  ],
  notice: "<strong>मतदाता सूची (SIR) के लिए:</strong> ऑल इंडिया रेडियो (फरवरी 2026) के अनुसार चुनाव आयोग ने पश्चिम बंगाल में SIR के दौरान स्थायी निवास प्रमाण पत्र को मान्य दस्तावेज़ माना है, लेकिन सिर्फ वही प्रमाण पत्र जो तय (designated) अधिकारी ने जारी किया हो। इसलिए प्रमाण पत्र DM, ADM (सामान्य), SDO या कोलकाता में कलेक्टर से ही बनवाएं।",
  sections: [
    {
      id: "adhikari",
      title: "कौन जारी करता है",
      table: {
        head: ["इलाका", "जारी करने वाले अधिकारी"],
        rows: [
          ["कोलकाता को छोड़कर पूरा राज्य", "ज़िलाधिकारी (DM), अतिरिक्त ज़िलाधिकारी (सामान्य), सब-डिवीज़नल ऑफिसर (SDO)"],
          ["कोलकाता", "कलेक्टर, कोलकाता"],
        ],
      },
      callout: { kind: "info", html: "दक्षिण 24 परगना के एक ब्लॉक पेज के अनुसार निवास प्रमाण पत्र का आवेदन e-District पोर्टल से होता है और संबंधित SDO मंज़ूरी देते हैं। आम तौर पर आप अपने सब-डिवीज़न के SDO दफ्तर में आवेदन करेंगे।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "आधिकारिक कागज़-सूची हमें खुलने वाले पेज पर नहीं मिली; पोर्टल या दफ्तर जो मांगे वही दें। आम तौर पर ये पास रखें:",
      list: [
        "<strong>फोटो</strong> और <strong>आधार / वोटर कार्ड</strong>",
        "<strong>उम्र का सबूत</strong>: जन्म प्रमाण पत्र या स्कूल का प्रमाण पत्र",
        "<strong>निवास का सबूत</strong>: ज़मीन/मकान के कागज़ (दलील, खतियान), बिजली बिल, राशन कार्ड, पुरानी वोटर लिस्ट में नाम",
        "लंबे समय से रहने के <strong>पुराने कागज़</strong>, जितने हों",
      ],
    },
    {
      id: "online",
      title: "e-District पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.wb.gov.in/" target="_blank" rel="noopener nofollow">edistrict.wb.gov.in</a> पर रजिस्टर करें और लॉगिन करें।',
        "निवास (Residence) प्रमाण पत्र की सेवा चुनें और फॉर्म भरें।",
        "कागज़ अपलोड करें, आवेदन जमा करें और आवेदन नंबर नोट करें।",
        "जांच के बाद SDO/DM कार्यालय से मंज़ूरी मिलने पर प्रमाण पत्र पोर्टल से या दफ्तर से लें।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न कर पाएं तो <a href=\"https://bsk.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">बांग्ला सहायता केंद्र (BSK)</a> या नज़दीकी CSC से मदद लें: <a href=\"/service/csc-locator/west-bengal.html\">CSC लोकेटर</a>। या सीधे SDO/DM दफ्तर में ऑफलाइन आवेदन करें।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["निवास का पुराना सबूत नहीं", "खतियान/दलील, पुरानी वोटर लिस्ट, पुराना राशन कार्ड या स्कूल रिकॉर्ड लगाएं"],
          ["नाम/पता कागज़ों में अलग", "आधार, वोटर कार्ड और राशन कार्ड में एक जैसी जानकारी कराएं"],
          ["गलत दफ्तर/अधिकारी से प्रमाण पत्र बना", "DM, ADM (सामान्य), SDO या कोलकाता में कलेक्टर से ही बनवाएं"],
          ["जांच में देर", "आवेदन नंबर लेकर SDO दफ्तर में संपर्क करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.wb.gov.in/", title: "e-District पश्चिम बंगाल" },
    { href: "https://bsk.wb.gov.in/", title: "बांग्ला सहायता केंद्र (BSK)" },
    { href: "https://www.newsonair.gov.in/ec-allows-permanent-resident-certificate-as-admissible-eligibility-document-under-sir-in-west-bengal", title: "AIR समाचार: SIR में स्थायी निवास प्रमाण पत्र मान्य (फरवरी 2026)" },
  ],
  faq: [
    { q: "पश्चिम बंगाल में स्थायी निवास प्रमाण पत्र कौन देता है?", a: "गृह एवं पर्वतीय मामले विभाग के 24.12.2025 के पत्र के अनुसार DM, ADM (सामान्य) और SDO; कोलकाता में कलेक्टर, कोलकाता।" },
    { q: "क्या ऑनलाइन आवेदन हो सकता है?", a: "हां। उसी पत्र के अनुसार आवेदन पश्चिम बंगाल e-District पोर्टल पर ऑनलाइन या जारी करने वाले अधिकारी के दफ्तर में ऑफलाइन हो सकता है।" },
    { q: "क्या यह प्रमाण पत्र SIR (मतदाता सूची) में चलेगा?", a: "ऑल इंडिया रेडियो (फरवरी 2026) के अनुसार चुनाव आयोग ने पश्चिम बंगाल में SIR के लिए इसे मान्य दस्तावेज़ माना है, अगर यह तय अधिकारी ने जारी किया हो।" },
    { q: "फीस और समय कितना है?", a: "हमें शुल्क और समय सीमा किसी खुलने वाले आधिकारिक पेज पर नहीं मिली। आवेदन के समय पोर्टल या SDO दफ्तर से पूछ लें।" },
  ],
  related: [
    { href: "/states/west-bengal-caste-certificate.html", emoji: "📜", title: "पश्चिम बंगाल जाति प्रमाण पत्र", text: "SC/ST/OBC" },
    { href: "/states/west-bengal-income-certificate.html", emoji: "💰", title: "पश्चिम बंगाल आय प्रमाण पत्र", text: "BDO/SDO, e-District" },
    { href: "/states/west-bengal-employment-exchange.html", emoji: "💼", title: "पश्चिम बंगाल रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.wb.gov.in/", label: "📝 e-District पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
