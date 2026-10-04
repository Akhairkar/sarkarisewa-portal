import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, crumbs, cards, NOT_ADVICE, SOON, ext } from "./common";

// /rent-agreement/maharashtra.html. Sources (checked 4 Oct 2026):
// - Maharashtra Rent Control Act, 1999 (Mah. Act 18 of 2000, w.e.f. 31-3-2000),
//   official text on maharashtra.gov.in/Upload/PDF/THE_MAHARASHTRA_RENT_CONTROL_ACT.pdf:
//   s.2 (application to areas in Schedules I and II), s.3(1) (exemptions incl.
//   premises let to banks, PSUs, corporations, foreign missions, international
//   agencies, multinational companies, and private/public limited companies
//   with paid-up capital of rupee one crore or more), s.24 (licensee for
//   residence to hand over on expiry; Competent Authority; double licence fee as
//   damages; written licence agreement is conclusive evidence), s.55 (leave and
//   licence or letting to be in writing and registered under the Registration
//   Act, 1908; landlord responsible; tenant's version prevails otherwise;
//   penalty up to 3 months' imprisonment or fine up to Rs 5,000 or both).
// - Maharashtra Stamp Act, Schedule I, Article 36A (Leave and Licence
//   Agreement; clause (a) substituted by Mah. Act 8 of 2013 w.e.f. 1-5-2013) and
//   Article 36 (Lease, substituted by Mah. 32 of 2005): read in "Schedule I and II
//   to the Maharashtra Stamp Act (as modified upto the 01st June 2022)", a
//   reference copy hosted by the Government of India IP Office
//   (ipindia.gov.in/storage/uploads/reference/AN5hvWq67hNPCYJHoo0pRTK5Y65qVagMexZo726B.pdf).
//   The state's own sites (igrmaharashtra.gov.in) and the India Code copy
//   "as on 8th April 2025" could not be opened from here; re-check Article 36A
//   against igrmaharashtra.gov.in/Home/schedules before relying on it.
// - Police: mahapolice.gov.in/instruction-regarding-tenants/ and its form.
// NOT included: registration fee and the step-by-step IGR e-registration flow
// (igrmaharashtra.gov.in not reachable from here).
const MRCA = "https://maharashtra.gov.in/Upload/PDF/THE_MAHARASHTRA_RENT_CONTROL_ACT.pdf";
const IGR = "https://igrmaharashtra.gov.in/";
const SCHED = "https://igrmaharashtra.gov.in/Home/schedules";

export const maharashtra: DocGuide = {
  crumbs: crumbs("महाराष्ट्र Leave and License"),
  docHi: "महाराष्ट्र Leave and License",
  title: "महाराष्ट्र Leave and License नियम | SarkariSewa India",
  description: "महाराष्ट्र में हर Leave and License एग्रीमेंट का रजिस्ट्रेशन ज़रूरी (रेंट कंट्रोल एक्ट धारा 55)। स्टाम्प ड्यूटी का 0.25% फॉर्मूला, उदाहरण और पुलिस सूचना।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "महाराष्ट्र रेंट एग्रीमेंट (Leave and License): रजिस्ट्रेशन और स्टाम्प ड्यूटी",
  lead: "महाराष्ट्र में घर किराए पर देने का आम दस्तावेज़ Leave and License एग्रीमेंट है। महाराष्ट्र रेंट कंट्रोल एक्ट 1999 की धारा 55 के अनुसार Leave and License या किराएदारी का हर एग्रीमेंट लिखित होना चाहिए और रजिस्ट्रेशन एक्ट 1908 के तहत रजिस्टर होना चाहिए, अवधि चाहे 11 महीने ही हो। रजिस्ट्रेशन कराने की ज़िम्मेदारी मकान मालिक की है। 60 महीने तक के Leave and License पर स्टाम्प ड्यूटी (आर्टिकल 36A) कुल लाइसेंस फीस/किराया + नॉन-रिफंडेबल डिपॉज़िट + रिफंडेबल डिपॉज़िट पर 10% सालाना ब्याज, इनके जोड़ का 0.25% है।",
  facts: [
    ["रजिस्ट्रेशन", "हर अवधि में अनिवार्य (MRCA धारा 55)"],
    ["ज़िम्मेदारी", "मकान मालिक"],
    ["स्टाम्प ड्यूटी (60 महीने तक)", "कुल किराया + नॉन-रिफंडेबल राशि + डिपॉज़िट पर 10% ब्याज का 0.25%"],
    ["न कराने पर", "3 महीने तक कैद या ₹5,000 तक जुर्माना या दोनों"],
    ["official साइट", ext(IGR, "igrmaharashtra.gov.in")],
  ],
  notice: NOT_ADVICE,
  sections: [
    {
      id: "dhara-55",
      title: "धारा 55: रजिस्ट्रेशन क्यों ज़रूरी है",
      intro: "केंद्रीय रजिस्ट्रेशन एक्ट में 1 साल तक की लीज़ का रजिस्ट्रेशन वैकल्पिक है, पर महाराष्ट्र रेंट कंट्रोल एक्ट की धारा 55 \"किसी भी दूसरे कानून के बावजूद\" लागू होती है:",
      list: [
        "<strong>55(1):</strong> इस एक्ट के लागू होने के बाद मकान मालिक और किरायेदार/लाइसेंसी के बीच हुआ Leave and License या किराए का कोई भी एग्रीमेंट लिखित होगा और रजिस्ट्रेशन एक्ट 1908 के तहत रजिस्टर होगा।",
        "<strong>55(2):</strong> रजिस्ट्रेशन कराने की ज़िम्मेदारी मकान मालिक की है। लिखित रजिस्टर्ड एग्रीमेंट न हो तो शर्तों के बारे में किरायेदार की बात मानी जाएगी, जब तक उल्टा साबित न हो।",
        "<strong>55(3):</strong> उल्लंघन करने वाले मकान मालिक को दोषी पाए जाने पर 3 महीने तक की कैद या ₹5,000 तक का जुर्माना या दोनों।",
      ],
      callout: SOON,
    },
    {
      id: "kahan-lagu",
      title: "यह एक्ट कहां और किन पर लागू है",
      list: [
        "<strong>इलाके:</strong> धारा 2 के अनुसार एक्ट उन इलाकों में रहने, शिक्षा, व्यवसाय, व्यापार या भंडारण के लिए किराए पर दी गई जगहों पर लागू है जो इसकी अनुसूची I और II में हैं (राज्य सरकार अधिसूचना से इलाके बदल सकती है)।",
        "<strong>छूट (धारा 3(1)):</strong> सरकार/स्थानीय निकाय की जगहें, और बैंक, सार्वजनिक उपक्रम, सरकारी कॉर्पोरेशन, विदेशी मिशन, अंतरराष्ट्रीय एजेंसियां, मल्टीनेशनल कंपनियां, और ₹1 करोड़ या उससे ज़्यादा paid-up capital वाली प्राइवेट/पब्लिक लिमिटेड कंपनियों को किराए पर दी गई जगहें।",
        "<strong>खाली करना (धारा 24):</strong> रहने के लिए लाइसेंस पर दी गई जगह लाइसेंस की अवधि खत्म होने पर लौटानी होती है। न लौटाने पर मकान मालिक Competent Authority के पास आवेदन कर सकता है, और लाइसेंसी को लाइसेंस फीस की दोगुनी दर से हर्जाना देना पड़ सकता है। लिखित लाइसेंस एग्रीमेंट उसमें लिखी बातों का निर्णायक सबूत है।",
      ],
    },
    {
      id: "stamp",
      title: "स्टाम्प ड्यूटी: आर्टिकल 36A का फॉर्मूला",
      intro: "महाराष्ट्र स्टाम्प एक्ट की अनुसूची-I का आर्टिकल 36A (Leave and Licence Agreement) कहता है:",
      table: {
        head: ["अवधि", "स्टाम्प ड्यूटी"],
        rows: [
          ["60 महीने तक (renewal clause के साथ या बिना)", "इन तीनों के जोड़ का <strong>0.25%</strong>:<br>(i) एग्रीमेंट के तहत देय कुल लाइसेंस फीस या किराया<br>(ii) नॉन-रिफंडेबल डिपॉज़िट / एडवांस / प्रीमियम (किसी भी नाम से)<br>(iii) रिफंडेबल सिक्योरिटी डिपॉज़िट या एडवांस पर <strong>10% सालाना</strong> की दर से ब्याज"],
          ["60 महीने से ज़्यादा", "लीज़ जितनी ड्यूटी, आर्टिकल 36 के clause (ii), (iii) या (iv) के अनुसार (बाज़ार मूल्य के 25%, 50% या 90% पर conveyance जितनी ड्यूटी, अवधि के हिसाब से)"],
        ],
      },
      callout: { kind: "warn", html: "यह फॉर्मूला \"1 जून 2022 तक संशोधित\" अनुसूची की कॉपी से लिया गया है (clause (a) 1 मई 2013 से इसी रूप में है)। भुगतान से पहले IGR महाराष्ट्र की " + ext(SCHED, "Schedule") + " या उनके कैलकुलेटर से राशि मिलाएं।" },
    },
    {
      id: "udaharan",
      title: "उदाहरण: 12 महीने का Leave and License",
      intro: "मान लीजिए किराया ₹25,000 प्रति माह, 12 महीने, रिफंडेबल डिपॉज़िट ₹1,00,000, कोई नॉन-रिफंडेबल राशि नहीं:",
      table: {
        head: ["हिस्सा", "गणना", "राशि"],
        rows: [
          ["(i) कुल किराया", "₹25,000 × 12", "₹3,00,000"],
          ["(ii) नॉन-रिफंडेबल राशि", "नहीं", "₹0"],
          ["(iii) डिपॉज़िट पर ब्याज", "₹1,00,000 का 10% (1 साल)", "₹10,000"],
          ["जोड़", "", "₹3,10,000"],
          ["स्टाम्प ड्यूटी", "₹3,10,000 × 0.25%", "<strong>₹775</strong>"],
        ],
      },
      html: "<p>अवधि 12 महीने से अलग हो (जैसे 11 या 24 महीने) तो डिपॉज़िट पर ब्याज उसी हिसाब से बदलता है; सही राशि IGR के सिस्टम से मिलाएं। स्टाम्प ड्यूटी के अलावा रजिस्ट्रेशन फीस भी लगती है, जो IGR महाराष्ट्र की साइट पर देखें।</p>",
    },
    {
      id: "kaise",
      title: "एग्रीमेंट बनाने और रजिस्टर कराने का क्रम",
      steps: [
        "शर्तें तय करें: अवधि, लाइसेंस फीस, डिपॉज़िट, लॉक-इन, नोटिस (देखें <a href=\"/rent-agreement/format.html\">फॉर्मेट</a>)।",
        "ऊपर के फॉर्मूले से स्टाम्प ड्यूटी निकालें और IGR महाराष्ट्र के सिस्टम से राशि मिलाएं।",
        `रजिस्ट्रेशन का तरीका, फीस और ऑनलाइन सुविधा ${ext(IGR, "igrmaharashtra.gov.in")} पर देखें; रजिस्ट्रेशन के लिए दस्तावेज़ साइन होने के 4 महीने के अंदर पेश करना होता है (रजिस्ट्रेशन एक्ट धारा 23)।`,
        "रजिस्टर्ड एग्रीमेंट की कॉपी दोनों पक्ष रखें।",
        "मकान मालिक स्थानीय पुलिस स्टेशन को किरायेदार की जानकारी दे (नीचे देखें)।",
      ],
    },
    {
      id: "police",
      title: "पुलिस को किरायेदार की सूचना",
      intro: "महाराष्ट्र पुलिस की वेबसाइट पर \"भाडेकरूंबद्दल सूचना\" फॉर्म है, जो पुलिस स्टेशन इंचार्ज के नाम भरकर दिया जाता है। इसमें मकान मालिक, जगह, किरायेदार, एजेंट और अवधि की जानकारी, किरायेदार की फोटो, पहचान पत्र और नौकरी का विवरण लगता है। पूरा तरीका: <a href=\"/rent-agreement/tenant-police-verification.html#maharashtra\">पुलिस वेरिफिकेशन गाइड</a>।",
    },
  ],
  official: [
    { href: MRCA, title: "महाराष्ट्र रेंट कंट्रोल एक्ट 1999 (PDF)", note: "maharashtra.gov.in, धारा 24, 55" },
    { href: SCHED, title: "IGR महाराष्ट्र: Maharashtra Stamp Act Schedules" },
    { href: IGR, title: "पंजीयन व मुद्रांक विभाग, महाराष्ट्र" },
    { href: "https://www.mahapolice.gov.in/instruction-regarding-tenants/", title: "महाराष्ट्र पुलिस: भाडेकरूंबद्दल सूचना" },
    { href: "https://www.indiacode.nic.in/bitstream/123456789/15937/1/the_registration_act,1908.pdf", title: "रजिस्ट्रेशन एक्ट 1908 (India Code)" },
  ],
  faq: [
    { q: "क्या महाराष्ट्र में 11 महीने के एग्रीमेंट का रजिस्ट्रेशन ज़रूरी है?", a: "हां। महाराष्ट्र रेंट कंट्रोल एक्ट 1999 की धारा 55(1) के अनुसार Leave and License या किराए का हर एग्रीमेंट लिखित और रजिस्ट्रेशन एक्ट 1908 के तहत रजिस्टर्ड होना चाहिए; इसमें 11 महीने की कोई छूट नहीं लिखी है। यह उन जगहों पर लागू है जिन पर यह एक्ट लागू होता है।" },
    { q: "रजिस्ट्रेशन न कराने पर क्या होगा?", a: "धारा 55(2) के अनुसार लिखित रजिस्टर्ड एग्रीमेंट न होने पर शर्तों के बारे में किरायेदार की बात मानी जाएगी, जब तक उल्टा साबित न हो। धारा 55(3) के अनुसार मकान मालिक को 3 महीने तक कैद या ₹5,000 तक जुर्माना या दोनों हो सकते हैं।" },
    { q: "Leave and License पर स्टाम्प ड्यूटी कैसे निकालें?", a: "60 महीने तक के एग्रीमेंट में कुल लाइसेंस फीस/किराया, नॉन-रिफंडेबल डिपॉज़िट या प्रीमियम, और रिफंडेबल डिपॉज़िट पर 10% सालाना ब्याज, इन तीनों को जोड़कर उसका 0.25% स्टाम्प ड्यूटी है (आर्टिकल 36A)। 12 महीने, ₹25,000 किराया और ₹1 लाख डिपॉज़िट पर यह ₹775 बनती है।" },
    { q: "रजिस्ट्रेशन कराने की ज़िम्मेदारी किसकी है?", a: "धारा 55(2) के अनुसार मकान मालिक की। खर्च कौन देगा, यह आपसी सहमति से एग्रीमेंट में लिखा जा सकता है।" },
    { q: "लाइसेंस खत्म होने पर किरायेदार जगह न छोड़े तो?", a: "धारा 24 के अनुसार रहने के लिए दी गई जगह का लाइसेंसी अवधि खत्म होने पर कब्ज़ा लौटाने को बाध्य है। मकान मालिक Competent Authority के पास आवेदन कर सकता है, और जगह न छोड़ने वाला लाइसेंसी तय लाइसेंस फीस की दोगुनी दर से हर्जाना देने का ज़िम्मेदार है।" },
    { q: "क्या कंपनी को किराए पर दी गई जगह पर भी यह एक्ट लागू है?", a: "धारा 3(1)(b) के अनुसार बैंक, सार्वजनिक उपक्रम, सरकारी कॉर्पोरेशन, विदेशी मिशन, अंतरराष्ट्रीय एजेंसी, मल्टीनेशनल कंपनी और ₹1 करोड़ या ज़्यादा paid-up capital वाली कंपनियों को दी गई जगहों पर यह एक्ट लागू नहीं होता। ऐसे मामलों में रजिस्ट्रेशन एक्ट के सामान्य नियम देखें।" },
  ],
  related: cards("hub", "format", "police", "gujarat", "up", "stMh"),
  aside: [
    { href: IGR, label: "🏛️ IGR महाराष्ट्र" },
    { href: "/rent-agreement/", label: "🏠 रेंट एग्रीमेंट गाइड" },
  ],
};
