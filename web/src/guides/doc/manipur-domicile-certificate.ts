import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; esebamanipur.mn.gov.in shows a "system
// maintenance" screen to our checker but its landing text is readable):
// - kangpokpi.nic.in/notice/e-seba-manipur-portal/ (06.05.2026): from
//   11-05-2026 Revenue services "Domicile Certificate", "Permanent Resident
//   Certificate", Income, OBC, SC, ST only through e-Seba Manipur
//   (https://esebamanipur.mn.gov.in); old portal eservicesmanipur.gov.in
//   discontinued for new applications.
// - esebamanipur.mn.gov.in landing page: "PRC / Domicile Certificate"
//   documents: passport size photo, voter ID, proof of identity, up-to-date
//   Jamabandi or Patta, other supportive documents (optional).
// - esebadepartment.mn.gov.in/Page/Faq: Revenue Department services listed
//   separately as "Permanent Resident Certificate (PRC)" and "Domicile
//   Certificate"; PRC/Domicile documents (photo, voter ID of applicant or
//   parents, any identity proof, up-to-date Jamabandi or Patta, optional
//   supporting documents); Jamabandi/Patta explained as land/property record
//   from the Revenue Department, get an up-to-date copy from the local Revenue
//   Office; JPG/PDF, 200 KB per file for Revenue services; Processing Office
//   typically the SDO office of the sub-division; status Submitted > In
//   Progress > Issued / Rejected (re-apply).
// - esebadepartment.mn.gov.in/Page/ServiceFeeDetails (17 Apr 2026): no
//   service fee for online G2C services. Helpdesk (0385) 2447368,
//   helpdesk.edistrictmn@nic.in (see manipur-income-certificate.ts).
// Left out (not confirmable): residence period / eligibility rules for PRC vs
// domicile, time limit, validity, appeal route.
export const manipurDomicileCertificate: DocGuide = {
  state: { slug: "manipur", hi: "मणिपुर" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Manipur Domicile Certificate 2026: Apply & Status",
  description: "मणिपुर डोमिसाइल और PRC (Permanent Resident Certificate) 2026: e-Seba Manipur पोर्टल पर ऑनलाइन आवेदन, ज़रूरी कागज़ (जमाबंदी/पट्टा), कोई सेवा शुल्क नहीं, स्टेटस और डाउनलोड।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मणिपुर डोमिसाइल / PRC प्रमाण पत्र 2026: e-Seba पर आवेदन, कागज़ और स्टेटस",
  lead: "मणिपुर में राजस्व विभाग दो अलग प्रमाण पत्र देता है: <strong>Domicile Certificate</strong> और <strong>Permanent Resident Certificate (PRC)</strong>। 11 मई 2026 से दोनों के नए आवेदन सिर्फ <strong>e-Seba Manipur</strong> पोर्टल (esebamanipur.mn.gov.in) पर होते हैं। पोर्टल के अनुसार ऑनलाइन सेवाओं पर कोई सेवा शुल्क नहीं है, और मुख्य कागज़ है ज़मीन का ताज़ा <strong>जमाबंदी या पट्टा</strong>।",
  facts: [
    ["ऑनलाइन", '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a>'],
    ["प्रमाण पत्र", "Domicile Certificate / PRC"],
    ["सेवा शुल्क", "नहीं (पोर्टल के अनुसार)"],
    ["प्रोसेसिंग", "आम तौर पर सब-डिवीज़न का SDO कार्यालय"],
  ],
  notice: "<strong>ध्यान दें:</strong> पुराना पोर्टल eservicesmanipur.gov.in नए आवेदनों के लिए बंद है। वहां पहले से जमा आवेदन उसी पर निपटाए जा रहे हैं। नया आवेदन e-Seba Manipur पर ही करें।",
  sections: [
    {
      id: "kya-hai",
      title: "Domicile और PRC: कौन सा चाहिए",
      intro: "e-Seba पोर्टल पर राजस्व विभाग की सूची में <strong>Permanent Resident Certificate (PRC)</strong> और <strong>Domicile Certificate</strong> दो अलग सेवाएं हैं, पर दोनों के कागज़ एक जैसे हैं। जिस दाखिले, भर्ती या योजना के लिए चाहिए, उसके फॉर्म में देखें कि PRC मांगा है या Domicile, और वही सेवा चुनें।",
      callout: { kind: "info", html: "यह प्रमाण पत्र निवास बताता है, जाति नहीं। आरक्षण के लिए <a href=\"/states/manipur-caste-certificate.html\">ST/SC/OBC प्रमाण पत्र</a> अलग बनता है, जो इसी पोर्टल पर है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "e-Seba पोर्टल की सूची के अनुसार (PRC और Domicile दोनों के लिए):",
      list: [
        "<strong>पासपोर्ट साइज़ फोटो</strong>",
        "<strong>वोटर ID</strong> (आवेदक या माता-पिता का)",
        "<strong>कोई पहचान पत्र</strong>",
        "<strong>ताज़ा जमाबंदी या पट्टा</strong> (ज़मीन/संपत्ति का रिकॉर्ड)",
        "दूसरे सहायक कागज़ (वैकल्पिक)",
      ],
      callout: { kind: "ok", html: "जमाबंदी/पट्टा राजस्व विभाग का ज़मीन का रिकॉर्ड है। आवेदन से पहले अपने स्थानीय राजस्व कार्यालय से इसकी <strong>ताज़ा कॉपी</strong> ले लें। हर फाइल JPG या PDF में और <strong>200 KB</strong> से छोटी हो; बड़ी फाइल को <a href=\"/tools/document-compressor.html\">छोटा करें</a>।" },
    },
    {
      id: "online",
      title: "e-Seba Manipur पर आवेदन",
      steps: [
        '<a href="https://esebamanipur.mn.gov.in/" target="_blank" rel="noopener nofollow">esebamanipur.mn.gov.in</a> खोलें और आधार व आधार से जुड़े मोबाइल नंबर से रजिस्टर करें।',
        "<strong>Apply Services</strong> में <strong>Revenue Department</strong> के तहत <strong>Domicile Certificate</strong> या <strong>Permanent Resident Certificate (PRC)</strong> चुनें।",
        "अपना ज़िला और <strong>Processing Office</strong> चुनें (राजस्व सेवाओं के लिए आम तौर पर आपके सब-डिवीज़न का SDO कार्यालय)।",
        "फॉर्म भरें, कागज़ अपलोड करें, घोषणा पर टिक करें और Submit करें।",
        "<strong>Application Number</strong> नोट कर लें। जमा करने के बाद आवेदन में बदलाव नहीं हो सकता, इसलिए Submit से पहले सब जांच लें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "स्थिति के चरण: <strong>Submitted → In Progress → Issued</strong>। खारिज होने पर <strong>Rejected</strong> दिखेगा और दोबारा आवेदन करना होगा।",
        "पोर्टल पर <strong>APPLICATION STATUS</strong> और <strong>CERTIFICATE DOWNLOAD</strong> बिना लॉगिन के भी हैं; आवेदन संख्या रखें।",
        "गलत जानकारी देने पर प्रमाण पत्र रद्द हो सकता है।",
        "मदद: DIT हेल्पडेस्क (0385) 2447368, helpdesk.edistrictmn@nic.in (सोम-शनि, सुबह 10 से शाम 5)।",
      ],
      html: "<p>फैसले की समय सीमा और प्रमाण पत्र की वैधता किसी आधिकारिक पेज पर हमें नहीं मिली।</p>",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जमाबंदी/पट्टा पुराना है", "राजस्व कार्यालय से ताज़ा कॉपी लेकर नया आवेदन करें"],
          ["फाइल 200 KB से बड़ी", "फाइल छोटी करके JPG/PDF में अपलोड करें"],
          ["गलत Processing Office चुना", "अपने सब-डिवीज़न का SDO कार्यालय चुनें"],
          ["PRC की जगह Domicile (या उल्टा) चुना", "जो प्रमाण पत्र मांगा गया है, उसी सेवा में आवेदन करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://esebamanipur.mn.gov.in/", title: "e-Seba Manipur (ऑनलाइन आवेदन)" },
    { href: "https://esebadepartment.mn.gov.in/Page/Faq", title: "e-Seba FAQ: कागज़, Processing Office, स्टेटस" },
    { href: "https://esebadepartment.mn.gov.in/Page/ServiceFeeDetails", title: "e-Seba: सेवा शुल्क की जानकारी" },
    { href: "https://kangpokpi.nic.in/notice/e-seba-manipur-portal/", title: "सूचना: 11 मई 2026 से सिर्फ e-Seba पर आवेदन (ज़िला कांगपोकपी)" },
  ],
  faq: [
    { q: "मणिपुर डोमिसाइल ऑनलाइन कहां बनता है?", a: "11 मई 2026 से e-Seba Manipur पोर्टल (esebamanipur.mn.gov.in) पर। पुराना eservicesmanipur.gov.in नए आवेदन नहीं लेता।" },
    { q: "मणिपुर PRC और Domicile में क्या फर्क है?", a: "पोर्टल पर ये दो अलग सेवाएं हैं, पर कागज़ एक जैसे हैं। जिस काम के लिए चाहिए, उसके फॉर्म में लिखा प्रमाण पत्र ही चुनें।" },
    { q: "कौन से कागज़ लगते हैं?", a: "फोटो, वोटर ID (आवेदक या माता-पिता का), पहचान पत्र और ताज़ा जमाबंदी या पट्टा। दूसरे सहायक कागज़ वैकल्पिक हैं।" },
    { q: "फीस कितनी है?", a: "e-Seba पोर्टल के अनुसार ऑनलाइन सेवाओं पर कोई सेवा शुल्क नहीं है।" },
  ],
  related: [
    { href: "/states/manipur-caste-certificate.html", emoji: "📜", title: "मणिपुर जाति प्रमाण पत्र", text: "ST, SC, OBC" },
    { href: "/states/manipur-income-certificate.html", emoji: "💰", title: "मणिपुर आय प्रमाण पत्र", text: "e-Seba पर, कोई शुल्क नहीं" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "200 KB तक, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://esebamanipur.mn.gov.in/", label: "📝 e-Seba पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
