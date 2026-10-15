import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): the per-state income certificate guides in
// this folder (each checked Oct 2026 against the state's own portal/RTS
// notification), which give the issuing officer, portal, fee and validity per
// state, e.g. Assam ₹30, Chhattisgarh ₹30, Karnataka ₹40 (5-year validity),
// Uttarakhand ₹40, Punjab ₹75, Himachal ₹20 + ₹23.60, Delhi and Puducherry no
// fee; Bihar/Odisha/Telangana 1-year validity; Haryana income taken from PPP
// (Family ID). PIB (EWS: family gross annual income below ₹8 lakh, separate
// "Income and Asset Certificate"). The old page's "fee ₹0-₹30" was wrong
// (some states charge more) and was removed. No single national portal
// exists; the page does not claim one.
export const incomeCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "आय प्रमाण पत्र" },
  ],
  docHi: "आय प्रमाण पत्र",
  title: "Income Certificate Online Apply 2026",
  description: "आय प्रमाण पत्र (Income Certificate) 2026: कौन जारी करता है, राज्यवार पोर्टल, ज़रूरी कागज़, फीस और वैधता राज्य के अनुसार, EWS प्रमाण पत्र से अंतर और रिजेक्शन से बचने के तरीके।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "आय प्रमाण पत्र (Income Certificate) 2026: कहां और कैसे बनवाएं, राज्यवार पोर्टल",
  lead: "आय प्रमाण पत्र राज्य सरकार का राजस्व विभाग जारी करता है, आमतौर पर तहसीलदार, नायब तहसीलदार, SDM या अंचलाधिकारी, पटवारी/लेखपाल/VAO की जांच के बाद। पूरे देश के लिए कोई एक पोर्टल नहीं है: आवेदन अपने राज्य के e-District/सेवा पोर्टल, CSC या तहसील से होता है। फीस, समय सीमा और वैधता हर राज्य में अलग है (कई राज्यों में मुफ्त, कहीं ₹30 से ₹75 तक), और ज़्यादातर राज्यों में प्रमाण पत्र एक साल या चालू वित्त वर्ष तक मान्य रहता है।",
  facts: [
    ["कौन जारी करता है", "राज्य का राजस्व अधिकारी (तहसीलदार/SDM आदि)"],
    ["कहां आवेदन", "राज्य का सेवा पोर्टल, CSC या तहसील"],
    ["फीस", "राज्य के अनुसार: कहीं मुफ्त, कहीं ₹30-₹75"],
    ["वैधता", "ज़्यादातर 1 साल / चालू वित्त वर्ष (कर्नाटक 5 साल)"],
  ],
  sections: [
    {
      id: "kaam",
      title: "आय प्रमाण पत्र किस काम आता है",
      list: [
        "छात्रवृत्ति, फीस माफी और हॉस्टल में दाखिला",
        "वृद्धावस्था/विधवा पेंशन और राज्य की कल्याण योजनाएं",
        "राशन कार्ड, आवास योजना और सस्ते इलाज की योजनाएं",
        "OBC नॉन-क्रीमी लेयर प्रमाण पत्र के लिए आय का सबूत",
      ],
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी/दाखिले में <strong>EWS आरक्षण</strong> के लिए साधारण आय प्रमाण पत्र नहीं चलता। उसके लिए अलग <strong>EWS \"Income and Asset Certificate\"</strong> बनता है (परिवार की सालाना आय ₹8 लाख से कम और संपत्ति की शर्तें)। <a href=\"/service/caste-certificate.html\">जाति प्रमाण पत्र गाइड</a> भी देखें।" },
    },
    {
      id: "kagaz",
      title: "आमतौर पर लगने वाले कागज़",
      list: [
        "आधार कार्ड और फोटो",
        "निवास प्रमाण (राशन कार्ड, वोटर ID, बिजली बिल आदि)",
        "आय का सबूत: नौकरी में वेतन पर्ची/Form 16, अपना काम हो तो ITR या आय का शपथ-पत्र (स्व-घोषणा), किसान हों तो ज़मीन का कागज़",
        "परिवार के सदस्यों और उनकी आय का ब्योरा",
        "कुछ राज्यों में खास पहचान: हरियाणा में PPP (Family ID), राजस्थान में जन आधार, मध्य प्रदेश में समग्र ID",
      ],
      html: "<p>राज्य के हिसाब से पूरी सूची नीचे दी गई राज्य की गाइड में देखें।</p>",
    },
    {
      id: "steps",
      title: "आवेदन के आम स्टेप",
      steps: [
        "अपने राज्य का सेवा पोर्टल खोलें (नीचे सूची), मोबाइल/आधार से पंजीकरण करके लॉगिन करें। या नज़दीकी CSC/सेवा केंद्र जाएं।",
        "राजस्व विभाग में <strong>Income Certificate / आय प्रमाण पत्र</strong> सेवा चुनें।",
        "फॉर्म में नाम, पता, परिवार और सभी स्रोतों से सालाना आय सही-सही भरें।",
        "कागज़ और फोटो अपलोड करें, फीस (अगर हो) भरें, सबमिट करें और आवेदन नंबर रखें।",
        "पटवारी/लेखपाल/VAO जांच करते हैं; फिर तहसीलदार/SDM मंज़ूरी देते हैं।",
        "स्टेटस आवेदन नंबर से देखें और मंज़ूरी के बाद डिजिटल साइन वाला प्रमाण पत्र डाउनलोड करें। कई राज्यों में यह DigiLocker में भी आता है।",
      ],
    },
    {
      id: "rajya",
      title: "राज्यवार पोर्टल और गाइड",
      intro: "राज्य के नाम पर क्लिक करके उस राज्य की पूरी गाइड (फीस, समय सीमा, कागज़) देखें।",
      table: {
        head: ["राज्य / UT", "कहां आवेदन"],
        rows: [
          ['<a href="/states/andaman-nicobar-income-certificate.html">अंडमान-निकोबार</a>', "edistrict.andamannicobar.gov.in / तहसीलदार"],
          ['<a href="/states/andhra-pradesh-income-certificate.html">आंध्र प्रदेश</a>', "apseva.ap.gov.in / ग्राम-वार्ड सचिवालय"],
          ['<a href="/states/arunachal-pradesh-income-certificate.html">अरुणाचल प्रदेश</a>', "eservice.arunachal.gov.in / DC कार्यालय"],
          ['<a href="/states/assam-income-certificate.html">असम</a>', "sewasetu.assam.gov.in / सर्किल ऑफिस"],
          ['<a href="/states/bihar-income-certificate.html">बिहार</a>', "serviceonline.bihar.gov.in / अंचल कार्यालय (RTPS)"],
          ['<a href="/states/chandigarh-income-certificate.html">चंडीगढ़</a>', "संपर्क केंद्र / e-District"],
          ['<a href="/states/chhattisgarh-income-certificate.html">छत्तीसगढ़</a>', "sewasetu.cgstate.gov.in / सेवा सेतु केंद्र"],
          ['<a href="/states/dadra-nagar-haveli-daman-diu-income-certificate.html">दादरा-नगर हवेली, दमन-दीव</a>', "sugam.dddgov.in / मामलतदार"],
          ['<a href="/states/delhi-income-certificate.html">दिल्ली</a>', "edistrict.delhi.gov.in / SDM कार्यालय"],
          ['<a href="/states/goa-income-certificate.html">गोवा</a>', "goaonline.gov.in / मामलतदार"],
          ['<a href="/states/gujarat-income-certificate.html">गुजरात</a>', "digitalgujarat.gov.in / जन सेवा केंद्र"],
          ['<a href="/states/haryana-income-certificate.html">हरियाणा</a>', "saralharyana.gov.in (PPP की आय से)"],
          ['<a href="/states/himachal-pradesh-income-certificate.html">हिमाचल प्रदेश</a>', "himseva.hp.gov.in / लोक मित्र केंद्र"],
          ['<a href="/states/jammu-kashmir-income-certificate.html">जम्मू-कश्मीर</a>', "eunnat.jk.gov.in / तहसीलदार"],
          ['<a href="/states/jharkhand-income-certificate.html">झारखंड</a>', "jharsewa.jharkhand.gov.in / प्रज्ञा केंद्र"],
          ['<a href="/states/karnataka-income-certificate.html">कर्नाटक</a>', "nadakacheri.karnataka.gov.in / नाडकचेरी"],
          ['<a href="/states/kerala-income-certificate.html">केरल</a>', "edistrict.kerala.gov.in / विलेज ऑफिस"],
          ['<a href="/states/ladakh-income-certificate.html">लद्दाख</a>', "तहसील कार्यालय"],
          ['<a href="/states/lakshadweep-income-certificate.html">लक्षद्वीप</a>', "serviceonline.gov.in / डिप्टी कलेक्टर-BDO"],
          ['<a href="/states/madhya-pradesh-income-certificate.html">मध्य प्रदेश</a>', "mpedistrict.gov.in / लोक सेवा केंद्र"],
          ['<a href="/states/maharashtra-income-certificate.html">महाराष्ट्र</a>', "aaplesarkar.mahaonline.gov.in / आपले सरकार केंद्र"],
          ['<a href="/states/manipur-income-certificate.html">मणिपुर</a>', "esebamanipur.mn.gov.in / SDO कार्यालय"],
          ['<a href="/states/meghalaya-income-certificate.html">मेघालय</a>', "megedistrict.gov.in / DC कार्यालय"],
          ['<a href="/states/mizoram-income-certificate.html">मिज़ोरम</a>', "DC Online (CSC) / DC कार्यालय"],
          ['<a href="/states/nagaland-income-certificate.html">नागालैंड</a>', "DC / सर्कल कार्यालय"],
          ['<a href="/states/odisha-income-certificate.html">ओडिशा</a>', "edistrict.odisha.gov.in / तहसील"],
          ['<a href="/states/puducherry-income-certificate.html">पुडुचेरी</a>', "edistrict.py.gov.in / तहसीलदार"],
          ['<a href="/states/punjab-income-certificate.html">पंजाब</a>', "eservices.punjab.gov.in / सेवा केंद्र"],
          ['<a href="/states/rajasthan-income-certificate.html">राजस्थान</a>', "SSO → e-Mitra (जन आधार)"],
          ['<a href="/states/sikkim-income-certificate.html">सिक्किम</a>', "incomecertificate.sikkim.gov.in"],
          ['<a href="/states/tamil-nadu-income-certificate.html">तमिलनाडु</a>', "tnesevai.tn.gov.in / e-Sevai केंद्र"],
          ['<a href="/states/telangana-income-certificate.html">तेलंगाना</a>', "MeeSeva केंद्र / पोर्टल"],
          ['<a href="/states/tripura-income-certificate.html">त्रिपुरा</a>', "edistrict.tripura.gov.in / SDM"],
          ['<a href="/states/uttar-pradesh-income-certificate.html">उत्तर प्रदेश</a>', "edistrict.up.gov.in / जन सेवा केंद्र"],
          ['<a href="/states/uttarakhand-income-certificate.html">उत्तराखंड</a>', "eservices.uk.gov.in / CSC"],
          ['<a href="/states/west-bengal-income-certificate.html">पश्चिम बंगाल</a>', "edistrict.wb.gov.in / BDO-SDO"],
        ],
      },
    },
    {
      id: "reject",
      title: "आवेदन रिजेक्ट क्यों होता है",
      list: [
        "फॉर्म में लिखी आय और शपथ-पत्र/कागज़ की आय अलग होना।",
        "परिवार के किसी कमाने वाले सदस्य की आय छिपाना।",
        "धुंधले या अधूरे कागज़ अपलोड करना।",
        "गलत तहसील/क्षेत्र चुनना या दूसरे राज्य का निवास प्रमाण।",
        "जांच के लिए पटवारी/लेखपाल के बुलाने पर न पहुंचना।",
      ],
      callout: { kind: "warn", html: "जानबूझकर गलत आय बताकर प्रमाण पत्र बनवाना अपराध है और योजना का पैसा वसूला जा सकता है। CSC पर तय फीस से ज़्यादा न दें; रसीद ज़रूर लें।" },
    },
  ],
  official: [
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "कई राज्यों के आय प्रमाण पत्र यहां मिलते हैं" },
    { href: "https://services.india.gov.in/", title: "राष्ट्रीय सरकारी सेवा पोर्टल", note: "राज्यवार सेवाओं के लिंक" },
  ],
  faq: [
    { q: "आय प्रमाण पत्र कौन बनाता है?", a: "राज्य का राजस्व विभाग, आमतौर पर तहसीलदार/नायब तहसीलदार, SDM या अंचलाधिकारी, पटवारी/लेखपाल की जांच के बाद।" },
    { q: "आय प्रमाण पत्र की फीस कितनी है?", a: "हर राज्य की अलग: दिल्ली और पुडुचेरी में शुल्क नहीं, असम और छत्तीसगढ़ में ₹30, उत्तराखंड और कर्नाटक में ₹40, पंजाब में ₹75। CSC पर सेवा शुल्क अलग लग सकता है।" },
    { q: "आय प्रमाण पत्र कितने समय तक मान्य है?", a: "ज़्यादातर राज्यों में जारी होने से 1 साल या चालू वित्त वर्ष तक; कर्नाटक में 5 साल। कई योजनाएं हाल का (चालू साल का) प्रमाण पत्र मांगती हैं।" },
    { q: "क्या आय प्रमाण पत्र EWS के लिए चलेगा?", a: "नहीं। EWS आरक्षण के लिए अलग \"Income and Asset Certificate\" बनता है, जिसमें परिवार की आय ₹8 लाख से कम और संपत्ति की शर्तें देखी जाती हैं।" },
    { q: "क्या पूरे भारत के लिए एक ऑनलाइन पोर्टल है?", a: "नहीं। आय प्रमाण पत्र राज्य सरकार देती है, इसलिए अपने राज्य के पोर्टल, CSC या तहसील से ही आवेदन करें।" },
  ],
  related: [
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "SC/ST/OBC और नॉन-क्रीमी लेयर" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र", text: "मूल निवास कैसे बनवाएं" },
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड", text: "नया कार्ड और सुधार" },
    { href: "/tools/self-declaration-builder.html", emoji: "✍️", title: "स्व-घोषणा पत्र", text: "आय का शपथ-पत्र बनाएं" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "आवेदन में मदद" },
  ],
  aside: [
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC खोजें" },
    { href: "https://www.digilocker.gov.in/", label: "📂 DigiLocker खोलें" },
  ],
};
