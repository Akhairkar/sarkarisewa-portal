import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - chandigarhdistrict.nic.in "Right to Service" page (opened directly):
//   Department of Personnel, Chandigarh Administration notification
//   No. 28/67/1-IH(11)-2019/14032 dated 13.09.2019 under the Punjab Right to
//   Service Act 2011 (and 2014 amendment) as extended to UT Chandigarh
//   (MHA G.S.R. 1015(E) dated 14.08.2017). Certificate Branch of SDM Office:
//   "Issuance of SC certificate (Bonafide)" and "Issuance of OBC certificate
//   (Bonafide)" 40 days (letter to area Patwari/Tehsildar (Revenue) within 5
//   days; Tehsildar (R) verification report within 30 days; certificate
//   within 5 days); "(Migration)" variants: letter to the state of origin
//   for genuineness/verification within 5 days, certificate within 5 days
//   after the report. Designated officer SDA (Sub Divisional Assistant) of
//   the area; first appellate authority SDM of the area; second appellate
//   authority Deputy Commissioner.
// - Tribune (2022, search extract): e-District portal chdservices.gov.in and
//   Sampark Centres for certificate forms/submission.
// Left out (not confirmable on an official page we could open): fee, document
// checklist, validity, online tracking steps, helpline.
export const chandigarhCasteCertificate: DocGuide = {
  state: { slug: "chandigarh", hi: "चंडीगढ़" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Chandigarh Caste Certificate 2026: Apply & Status",
  description: "चंडीगढ़ जाति प्रमाण पत्र (SC/OBC) 2026: SDM ऑफिस की सर्टिफिकेट ब्रांच, Bonafide और Migration प्रमाण पत्र में फर्क, Right to Service में 40 दिन, अपील SDM / DC।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "चंडीगढ़ जाति प्रमाण पत्र 2026: SC/OBC Bonafide और Migration, समय सीमा और अपील",
  lead: "चंडीगढ़ में SC और OBC प्रमाण पत्र <strong>SDM ऑफिस की सर्टिफिकेट ब्रांच</strong> से बनते हैं। UT प्रशासन की Right to Service अधिसूचना (2019) के अनुसार चंडीगढ़ के मूल निवासियों (<strong>Bonafide</strong>) के प्रमाण पत्र की समय सीमा <strong>40 दिन</strong> है, जिसमें पटवारी/तहसीलदार (राजस्व) जांच करते हैं। दूसरे राज्य से आए लोगों का <strong>Migration</strong> प्रमाण पत्र उनके मूल राज्य की पुष्टि के बाद बनता है।",
  facts: [
    ["कहां से", "SDM ऑफिस, सर्टिफिकेट ब्रांच"],
    ["समय सीमा (Bonafide)", "40 दिन (Right to Service)"],
    ["पहली अपील", "क्षेत्र के SDM"],
    ["दूसरी अपील", "डिप्टी कमिश्नर"],
  ],
  notice: "<strong>दूसरे राज्य से आए हैं?</strong> चंडीगढ़ की सूची में Migration प्रमाण पत्र अलग सेवा है: SDM ऑफिस आपके मूल राज्य से जाति की पुष्टि मंगवाता है, और रिपोर्ट आने के 5 दिन में प्रमाण पत्र देता है। इसलिए मूल राज्य का जाति प्रमाण पत्र साथ रखें।",
  sections: [
    {
      id: "kya-hai",
      title: "चंडीगढ़ में कौन सा जाति प्रमाण पत्र",
      table: {
        head: ["सेवा (अधिसूचना में नाम)", "किसके लिए", "समय सीमा"],
        rows: [
          ["<strong>SC certificate (Bonafide)</strong>", "चंडीगढ़ के मूल निवासी, अनुसूचित जाति", "40 दिन"],
          ["<strong>OBC certificate (Bonafide)</strong>", "चंडीगढ़ के मूल निवासी, OBC", "40 दिन"],
          ["<strong>SC certificate (Migration)</strong>", "दूसरे राज्य से आकर बसे SC परिवार", "मूल राज्य की रिपोर्ट आने के बाद 5 दिन"],
          ["<strong>OBC certificate (Migration)</strong>", "दूसरे राज्य से आकर बसे OBC परिवार", "मूल राज्य की रिपोर्ट आने के बाद 5 दिन"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी में OBC आरक्षण के लिए जाति केंद्रीय सूची में होनी चाहिए और नॉन-क्रीमी लेयर वाला केंद्रीय प्रारूप मांगा जाता है। आवेदन करते समय बताएं कि प्रमाण पत्र किस काम के लिए है।" },
    },
    {
      id: "process",
      title: "40 दिन में क्या-क्या होता है (Bonafide)",
      steps: [
        "आवेदन मिलने के <strong>5 दिन</strong> में SDM ऑफिस क्षेत्र के पटवारी / तहसीलदार (राजस्व) को जांच के लिए पत्र भेजता है।",
        "तहसीलदार (राजस्व) <strong>30 दिन</strong> में जांच रिपोर्ट देते हैं।",
        "रिपोर्ट मिलने के <strong>5 दिन</strong> में प्रमाण पत्र जारी होता है।",
      ],
      html: "<p>Migration प्रमाण पत्र में SDM ऑफिस 5 दिन में आपके मूल राज्य के अधिकारियों को पुष्टि के लिए लिखता है, और वहां से रिपोर्ट आने के 5 दिन में प्रमाण पत्र देता है। मूल राज्य कितने दिन लेगा, यह अधिसूचना में तय नहीं है।</p>",
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "SDM ऑफिस की आधिकारिक चेकलिस्ट हम ऑनलाइन नहीं खोल पाए। आम तौर पर ये कागज़ मांगे जाते हैं, इसलिए साथ रखें और संपर्क केंद्र/SDM ऑफिस से पूरी सूची पूछ लें:",
      list: [
        "<strong>पहचान:</strong> आधार, मतदाता पहचान पत्र या दूसरा सरकारी पहचान पत्र, फोटो।",
        "<strong>चंडीगढ़ में निवास का सबूत</strong> (Bonafide के लिए पुराना रिकॉर्ड काम आता है)।",
        "<strong>जाति का सबूत:</strong> पिता या परिवार के किसी सदस्य का जाति प्रमाण पत्र।",
        "<strong>Migration के लिए:</strong> मूल राज्य का जाति प्रमाण पत्र और वहां का पता।",
        "<strong>OBC के लिए:</strong> परिवार की आय का ब्यौरा (क्रीमी लेयर की जांच के लिए)।",
      ],
    },
    {
      id: "apply",
      title: "आवेदन कहां करें",
      intro: "आवेदन क्षेत्र के <strong>SDM ऑफिस</strong> (सर्टिफिकेट ब्रांच) के लिए होता है। चंडीगढ़ में प्रमाण पत्रों के फॉर्म <strong>संपर्क केंद्रों (Sampark Centre)</strong> पर मिलते और जमा होते रहे हैं, और UT का e-District पोर्टल chdservices.gov.in है। हमारे चेकर से यह पोर्टल नहीं खुला, इसलिए ऑनलाइन आवेदन के कदम यहां नहीं लिख रहे; नज़दीकी संपर्क केंद्र या SDM ऑफिस से मौजूदा तरीका पूछें।",
      callout: { kind: "ok", html: "आवेदन की रसीद/आवेदन संख्या ज़रूर लें; 40 दिन की गिनती और अपील उसी से होती है। नज़दीकी केंद्र: <a href=\"/service/csc-locator/chandigarh.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "appeal",
      title: "देरी हो तो अपील",
      table: {
        head: ["स्तर", "अधिकारी"],
        rows: [
          ["नामित अधिकारी (Designated Officer)", "क्षेत्र के SDA (Sub Divisional Assistant)"],
          ["पहली अपील", "क्षेत्र के SDM"],
          ["दूसरी अपील", "डिप्टी कमिश्नर"],
        ],
      },
      html: "<p>यह व्यवस्था पंजाब Right to Service Act, 2011 के तहत है, जो केंद्र सरकार ने 2017 में चंडीगढ़ पर लागू किया। 40 दिन में प्रमाण पत्र न मिले या बिना ठोस वजह आवेदन खारिज हो, तो रसीद के साथ SDM के पास पहली अपील करें।</p>",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Bonafide की जगह Migration वाला मामला", "दूसरे राज्य से आए हैं तो Migration सेवा चुनें और मूल राज्य का प्रमाण पत्र लगाएं"],
          ["पटवारी/तहसीलदार की जांच में निवास साबित नहीं", "चंडीगढ़ में पुराने निवास के कागज़ दें"],
          ["जाति का पुराना सबूत नहीं", "परिवार के किसी सदस्य का जाति प्रमाण पत्र लगाएं"],
          ["40 दिन बीत गए", "रसीद के साथ SDM के पास पहली अपील करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://chandigarhdistrict.nic.in/right-to-service/", title: "Right to Service अधिसूचना (2019): सेवाएं, समय सीमा, अपील अधिकारी" },
    { href: "https://chandigarhdistrict.nic.in/", title: "ज़िला प्रशासन चंडीगढ़" },
  ],
  faq: [
    { q: "चंडीगढ़ में जाति प्रमाण पत्र कहां से बनता है?", a: "SDM ऑफिस की सर्टिफिकेट ब्रांच से। जांच क्षेत्र के पटवारी / तहसीलदार (राजस्व) करते हैं।" },
    { q: "चंडीगढ़ SC/OBC प्रमाण पत्र कितने दिन में बनता है?", a: "UT प्रशासन की 2019 की Right to Service अधिसूचना के अनुसार Bonafide प्रमाण पत्र 40 दिन में। Migration प्रमाण पत्र मूल राज्य की रिपोर्ट आने के 5 दिन बाद।" },
    { q: "Bonafide और Migration प्रमाण पत्र में क्या फर्क है?", a: "Bonafide चंडीगढ़ के मूल निवासियों के लिए है, जिसकी जांच यहीं के पटवारी/तहसीलदार करते हैं। Migration दूसरे राज्य से आकर बसे लोगों के लिए है, जिसमें मूल राज्य से जाति की पुष्टि मंगाई जाती है।" },
    { q: "समय पर प्रमाण पत्र न मिले तो क्या करें?", a: "पहली अपील क्षेत्र के SDM के पास और दूसरी अपील डिप्टी कमिश्नर के पास होती है।" },
  ],
  related: [
    { href: "/states/chandigarh-income-certificate.html", emoji: "💰", title: "चंडीगढ़ आय प्रमाण पत्र", text: "कहां और कैसे बनता है" },
    { href: "/states/chandigarh-domicile-certificate.html", emoji: "🏠", title: "चंडीगढ़ निवास प्रमाण पत्र", text: "रेज़िडेंस सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://chandigarhdistrict.nic.in/right-to-service/", label: "📋 Right to Service सूची" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
