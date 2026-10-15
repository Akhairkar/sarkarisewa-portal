import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026):
// - ncs.gov.in home page and FAQ (read directly; "Last updated 28-09-26"):
//   National Career Service, initiative of the Ministry of Labour &
//   Employment (DGE); who can register (job seekers, employers, skill
//   providers, counsellors, career centres...); free at every stage, job
//   seekers should not pay employers; NCS mobile app; toll-free helpline
//   1514, support.ncs@gov.in, cyber fraud 1930; menus: Jobseekers Register,
//   Search for Jobs (domestic/international, government, differently abled,
//   ex-servicemen), Job Fairs and Events, Find Counsellor / Career Center,
//   List of Employment Exchange / Employment Exchange Portal.
// - State employment-exchange guides in this folder (checked Oct 2026) for
//   state portals; PIB Aug 2026 e-Shram backgrounder (e-Shram links to NCS).
// The old page's helpline "1800-425-1514" was replaced by 1514 as shown on
// ncs.gov.in.
export const employmentExchangeRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "रोज़गार कार्यालय / NCS पंजीकरण" },
  ],
  docHi: "रोज़गार कार्यालय / NCS पंजीकरण",
  title: "रोजगार कार्यालय / एनसीएस पंजीकरण 2026",
  description: "नौकरी सूचियों, करियर परामर्श, और कौशल-प्रशिक्षण अवसरों तक पहुंचने के लिए राष्ट्रीय करियर सेवा (एनसीएस) पोर्टल पर पंजीकरण।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "रोज़गार कार्यालय और NCS पंजीकरण 2026: मुफ्त रजिस्ट्रेशन, नौकरी खोज और रोज़गार मेले",
  lead: "नौकरी खोजने वालों के लिए दो रास्ते हैं: केंद्र सरकार के श्रम एवं रोज़गार मंत्रालय का <strong>नेशनल करियर सर्विस (NCS) पोर्टल ncs.gov.in</strong>, और आपके राज्य का <strong>रोज़गार कार्यालय (Employment Exchange)</strong> पोर्टल। NCS पर पंजीकरण, नौकरी के लिए आवेदन और इंटरव्यू, किसी भी चरण पर कोई फीस नहीं लगती। मदद के लिए NCS की टोल-फ्री हेल्पलाइन <strong>1514</strong> है।",
  facts: [
    ["पोर्टल", '<a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a>'],
    ["किसका", "श्रम एवं रोज़गार मंत्रालय"],
    ["फीस", "बिल्कुल मुफ्त"],
    ["हेल्पलाइन", "1514 (टोल-फ्री), support.ncs@gov.in"],
  ],
  notice: "<strong>ठगी से सावधान:</strong> NCS के अनुसार कुछ वेबसाइटें और लोग NCS का नाम/लोगो इस्तेमाल करके नौकरी के बदले पैसे मांगते हैं। NCS कोई फीस नहीं लेता, और नौकरी के लिए किसी नियोक्ता को पैसे न दें। साइबर ठगी की शिकायत <strong>1930</strong> पर करें।",
  sections: [
    {
      id: "ncs-panjikaran",
      title: "NCS पर जॉबसीकर पंजीकरण कैसे करें",
      steps: [
        '<a href="https://www.ncs.gov.in/" target="_blank" rel="noopener nofollow">ncs.gov.in</a> खोलें और <strong>Jobseekers → Register</strong> चुनें।',
        "मोबाइल नंबर/ईमेल डालें और OTP से पुष्टि करें।",
        "नाम, जन्मतिथि, पता, शिक्षा, हुनर, अनुभव और पसंद की नौकरी/जगह भरें।",
        "प्रोफाइल पूरी करें; बायोडाटा (resume) अपलोड करें या पोर्टल पर बनाएं।",
        "<strong>Search for Jobs</strong> से नौकरी खोजें और आवेदन करें।",
      ],
      callout: { kind: "info", html: "NCS का मोबाइल ऐप भी है, जिससे नौकरी खोजना, आवेदन करना और रोज़गार मेले के लिए पंजीकरण किया जा सकता है। ऐप का लिंक ncs.gov.in के होम पेज पर है।" },
    },
    {
      id: "sevaen",
      title: "NCS पर क्या-क्या मिलता है",
      list: [
        "<strong>नौकरियां:</strong> सरकारी, निजी और विदेश की नौकरियां; दिव्यांगजनों और पूर्व सैनिकों के लिए अलग सूची।",
        "<strong>रोज़गार मेले:</strong> Job Fairs and Events में आने वाले मेलों की तारीख और पंजीकरण।",
        "<strong>करियर काउंसलिंग:</strong> Find Counsellor / Find Career Center से सलाहकार और मॉडल करियर सेंटर।",
        "<strong>ट्रेनिंग:</strong> Skill Courses और कौशल प्रशिक्षण देने वालों की जानकारी।",
        "<strong>रोज़गार कार्यालयों की सूची:</strong> List of Employment Exchange में अपने ज़िले का कार्यालय खोजें।",
      ],
    },
    {
      id: "rajya",
      title: "राज्य का रोज़गार कार्यालय पंजीकरण",
      intro: "कई राज्य भर्तियों और बेरोज़गारी भत्ता जैसी राज्य योजनाओं के लिए अपने रोज़गार कार्यालय का पंजीकरण मांगते हैं। हर राज्य का पोर्टल, कागज़ और नवीनीकरण का नियम अलग है। अपना राज्य चुनें:",
      html: "<p><a href=\"/states/andaman-nicobar-employment-exchange.html\">अंडमान और निकोबार</a> · <a href=\"/states/andhra-pradesh-employment-exchange.html\">आंध्र प्रदेश</a> · <a href=\"/states/arunachal-pradesh-employment-exchange.html\">अरुणाचल प्रदेश</a> · <a href=\"/states/assam-employment-exchange.html\">असम</a> · <a href=\"/states/bihar-employment-exchange.html\">बिहार</a> · <a href=\"/states/chandigarh-employment-exchange.html\">चंडीगढ़</a> · <a href=\"/states/chhattisgarh-employment-exchange.html\">छत्तीसगढ़</a> · <a href=\"/states/dadra-nagar-haveli-daman-diu-employment-exchange.html\">दादरा और नगर हवेली और दमन और दीव</a> · <a href=\"/states/delhi-employment-exchange.html\">दिल्ली</a> · <a href=\"/states/goa-employment-exchange.html\">गोवा</a> · <a href=\"/states/gujarat-employment-exchange.html\">गुजरात</a> · <a href=\"/states/haryana-employment-exchange.html\">हरियाणा</a> · <a href=\"/states/himachal-pradesh-employment-exchange.html\">हिमाचल प्रदेश</a> · <a href=\"/states/jammu-kashmir-employment-exchange.html\">जम्मू और कश्मीर</a> · <a href=\"/states/jharkhand-employment-exchange.html\">झारखंड</a> · <a href=\"/states/karnataka-employment-exchange.html\">कर्नाटक</a> · <a href=\"/states/kerala-employment-exchange.html\">केरल</a> · <a href=\"/states/ladakh-employment-exchange.html\">लद्दाख</a> · <a href=\"/states/lakshadweep-employment-exchange.html\">लक्षद्वीप</a> · <a href=\"/states/madhya-pradesh-employment-exchange.html\">मध्य प्रदेश</a> · <a href=\"/states/maharashtra-employment-exchange.html\">महाराष्ट्र</a> · <a href=\"/states/manipur-employment-exchange.html\">मणिपुर</a> · <a href=\"/states/meghalaya-employment-exchange.html\">मेघालय</a> · <a href=\"/states/mizoram-employment-exchange.html\">मिज़ोरम</a> · <a href=\"/states/nagaland-employment-exchange.html\">नागालैंड</a> · <a href=\"/states/odisha-employment-exchange.html\">ओडिशा</a> · <a href=\"/states/puducherry-employment-exchange.html\">पुदुचेरी</a> · <a href=\"/states/punjab-employment-exchange.html\">पंजाब</a> · <a href=\"/states/rajasthan-employment-exchange.html\">राजस्थान</a> · <a href=\"/states/sikkim-employment-exchange.html\">सिक्किम</a> · <a href=\"/states/tamil-nadu-employment-exchange.html\">तमिलनाडु</a> · <a href=\"/states/telangana-employment-exchange.html\">तेलंगाना</a> · <a href=\"/states/tripura-employment-exchange.html\">त्रिपुरा</a> · <a href=\"/states/uttar-pradesh-employment-exchange.html\">उत्तर प्रदेश</a> · <a href=\"/states/uttarakhand-employment-exchange.html\">उत्तराखंड</a> · <a href=\"/states/west-bengal-employment-exchange.html\">पश्चिम बंगाल</a></p>",
    },
    {
      id: "kagaz",
      title: "पंजीकरण के लिए क्या तैयार रखें",
      list: [
        "चालू मोबाइल नंबर और ईमेल (OTP के लिए)।",
        "शिक्षा के प्रमाण पत्र/मार्कशीट।",
        "पहचान पत्र (जैसे आधार) और पते का विवरण।",
        "अनुभव का विवरण और बायोडाटा।",
        "राज्य पोर्टल पर जाति/निवास प्रमाण पत्र भी मांगे जा सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://www.ncs.gov.in/", title: "नेशनल करियर सर्विस (NCS) पोर्टल" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल (असंगठित मज़दूरों के लिए, NCS से जुड़ा)" },
  ],
  faq: [
    { q: "क्या NCS पर पंजीकरण की कोई फीस है?", a: "नहीं। NCS पंजीकरण, नौकरी के आवेदन या इंटरव्यू के किसी भी चरण पर फीस नहीं लेता।" },
    { q: "NCS हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1514, ईमेल support.ncs@gov.in। साइबर ठगी की शिकायत 1930 पर।" },
    { q: "NCS पर कौन पंजीकरण कर सकता है?", a: "नौकरी खोजने वाले, नियोक्ता, कौशल प्रशिक्षण देने वाले, करियर काउंसलर, करियर सेंटर, प्लेसमेंट संस्थाएं, घरेलू नियोक्ता और सरकारी विभाग।" },
    { q: "क्या NCS पंजीकरण से राज्य रोज़गार कार्यालय का पंजीकरण हो जाता है?", a: "हर राज्य में ऐसा नहीं है। राज्य की भर्ती या भत्ते के लिए अपने राज्य के रोज़गार कार्यालय पोर्टल पर अलग पंजीकरण देखें; ऊपर अपने राज्य की गाइड खोलें।" },
  ],
  related: [
    { href: "/service/ncs-national-career-service.html", emoji: "💼", title: "नेशनल करियर सर्विस", text: "NCS पोर्टल की जानकारी" },
    { href: "/service/e-shram-card.html", emoji: "👷", title: "ई-श्रम कार्ड", text: "असंगठित मज़दूरों के लिए" },
    { href: "/jobs/", emoji: "📰", title: "सरकारी नौकरी 2026", text: "नई भर्तियां" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र", text: "आरक्षण के लिए" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र", text: "राज्य की भर्तियों के लिए" },
    { href: "/tools/photo-resizer.html", emoji: "🗜️", title: "फोटो रिसाइज़र", text: "अपलोड के साइज़ में, फ्री" },
  ],
  aside: [
    { href: "https://www.ncs.gov.in/", label: "💼 NCS पर रजिस्टर करें" },
    { href: "#rajya", label: "🗺️ अपने राज्य का रोज़गार कार्यालय" },
  ],
};
