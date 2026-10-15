import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; Assam government sites not reachable from
// the sandbox, news extracts used): newkerala 28-29.09.2026 and ThePrint
// (Assam Cabinet on 24.09.2026 approved ₹1,500 instead of the regular ₹1,250
// for October 2026 as a one-time Durga Puja gesture; about 40 lakh
// recipients), GKToday "Assam Raises Orunodoi Scheme Assistance to Rs 1,500"
// (regular monthly assistance under Orunodoi 3.0 is ₹1,250; one-time increase
// for October 2026), Utkarsh (not a permanent revision), Free Press Journal
// (CM launched Orunodoi 3.0 disbursement, Aadhaar-linked payment mechanism),
// PW (instalments deferred after the new government until the budget
// passed). Income limit, eligibility categories and whether new applications
// are open could not be confirmed and are described generally. The old page
// named the "Backward Classes Welfare Directorate" as the department; this
// was not confirmed and was dropped.
export const asOrunodoiScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "असम", href: "/states/assam.html" },
    { label: "अरुणोदय योजना" },
  ],
  docHi: "अरुणोदय योजना",
  title: "অৰুণোদয় আঁচনি (अरुणोदय योजना)",
  description: "असम की प्रत्यक्ष लाभ हस्तांतरण योजना अरुणोदय (Orunodoi 3.0): आर्थिक रूप से कमज़ोर परिवारों की महिलाओं के बैंक खाते में हर महीने ₹1,250 (अक्टूबर 2026 में एक बार ₹1,500)। पात्रता, पैसा न आए तो क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "अरुणोदय योजना (असम) 2026: हर महीने ₹1,250, अक्टूबर में ₹1,500, पात्रता और स्टेटस",
  lead: "अरुणोदय (Orunodoi) असम सरकार की DBT योजना है, जिसमें आर्थिक रूप से कमज़ोर परिवारों की महिला लाभार्थी के बैंक खाते में हर महीने पैसा भेजा जाता है। अभी चल रहे Orunodoi 3.0 में नियमित राशि ₹1,250 प्रति माह है। अक्टूबर 2026 के लिए राज्य कैबिनेट ने दुर्गा पूजा के मौके पर एक बार ₹1,500 देने का फैसला किया; यह स्थायी बढ़ोतरी नहीं है।",
  facts: [
    ["राज्य", "असम"],
    ["नियमित राशि", "₹1,250 प्रति माह"],
    ["अक्टूबर 2026", "₹1,500 (एक बार)"],
    ["भुगतान", "महिला के आधार-लिंक बैंक खाते में DBT"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "योजना क्या है",
      list: [
        "परिवार की महिला (आम तौर पर मुखिया महिला) के बैंक खाते में हर महीने सीधी आर्थिक मदद, ताकि दवा, पोषण और घर के खर्च में सहारा मिले।",
        "Orunodoi 3.0 में भुगतान <strong>आधार से जुड़े बैंक खाते</strong> के ज़रिए किया जाता है।",
        "24 सितंबर 2026 की कैबिनेट बैठक में अक्टूबर 2026 के लिए ₹1,250 की जगह ₹1,500 देने का फैसला हुआ; करीब 40 लाख लाभार्थियों को यह मिलने की बात कही गई।",
      ],
      callout: { kind: "info", html: "नई सरकार बनने के बाद बजट पास होने तक किश्तें कुछ समय के लिए रुकी थीं। किसी महीने पैसा देर से आए तो पहले सरकारी घोषणा देखें।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "असम का स्थायी निवासी, आर्थिक रूप से कमज़ोर परिवार",
        "लाभ परिवार की महिला के नाम पर, जिसका बैंक खाता आधार से जुड़ा हो",
        "विधवा, अविवाहित/अकेली महिलाएं, दिव्यांग और गरीब परिवारों को प्राथमिकता दी जाती रही है",
        "सरकारी नौकरी वाले, आयकर देने वाले या बड़ी संपत्ति वाले परिवार आम तौर पर बाहर रखे जाते हैं",
      ],
      callout: { kind: "warn", html: "आय सीमा और पात्रता की पूरी सूची अलग-अलग जगह अलग बताई गई है। अपनी पात्रता गांव पंचायत/वार्ड कार्यालय या सर्कल ऑफिस (राजस्व मंडल) से पक्की करें।" },
    },
    {
      id: "naya-avedan",
      title: "नया आवेदन",
      html: "<p>15 अक्टूबर 2026 तक Orunodoi 3.0 में नए आवेदन खुलने की कोई पक्की सरकारी सूचना हमें नहीं मिली। नए नाम जुड़ने की घोषणा होने पर आवेदन आम तौर पर गांव पंचायत, नगर वार्ड या सर्कल ऑफिस के ज़रिए लिए जाते हैं। किसी एजेंट या वेबसाइट को पैसे देकर \"फॉर्म\" न भरवाएं।</p>",
    },
    {
      id: "paisa-nahi",
      title: "पैसा नहीं आया तो क्या करें",
      steps: [
        "बैंक पासबुक/SMS देखें कि DBT आया है या नहीं।",
        "बैंक में पता करें कि खाता <strong>आधार से जुड़ा (Aadhaar seeded)</strong> और चालू है; बंद या KYC अधूरा खाता सबसे आम कारण है।",
        "खाता ठीक है फिर भी पैसा नहीं आया तो सर्कल ऑफिस या ज़िला प्रशासन में लाभार्थी सूची और स्टेटस पूछें।",
        "शिकायत लिखित दें और रसीद संभालें।",
      ],
    },
  ],
  official: [
    { href: "https://assam.gov.in/", title: "असम सरकार का पोर्टल", note: "योजनाओं की सरकारी घोषणाएं" },
  ],
  faq: [
    { q: "अरुणोदय योजना में हर महीने कितना पैसा मिलता है?", a: "Orunodoi 3.0 में नियमित राशि ₹1,250 प्रति माह है। अक्टूबर 2026 में दुर्गा पूजा के लिए एक बार ₹1,500 दिए गए।" },
    { q: "क्या अब हर महीने ₹1,500 मिलेंगे?", a: "नहीं, ₹1,500 सिर्फ अक्टूबर 2026 के लिए एक बार का फैसला है। नियमित राशि ₹1,250 है, जब तक सरकार नई घोषणा न करे।" },
    { q: "अरुणोदय का पैसा किसके खाते में आता है?", a: "परिवार की महिला लाभार्थी के आधार से जुड़े बैंक खाते में, DBT से।" },
    { q: "नया आवेदन कहां करें?", a: "नए आवेदन खुलने की घोषणा होने पर गांव पंचायत, नगर वार्ड या सर्कल ऑफिस से जानकारी लें। अभी नए आवेदन की कोई पक्की सूचना नहीं मिली।" },
  ],
  related: [
    { href: "/service/as-ration-card.html", emoji: "🍚", title: "असम राशन कार्ड", text: "NFSA राशन और पात्रता" },
    { href: "/service/as-income-certificate.html", emoji: "💰", title: "असम आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/service/as-caste-certificate.html", emoji: "🪪", title: "असम जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण" },
    { href: "/service/as-residence-certificate.html", emoji: "🏠", title: "असम स्थायी निवास प्रमाण पत्र", text: "PRC" },
    { href: "/service/assam-senior-citizen-card.html", emoji: "👵", title: "असम वरिष्ठ नागरिक कार्ड", text: "बुज़ुर्गों के लिए" },
  ],
  aside: [
    { href: "/states/assam.html", label: "🍵 असम की सभी सेवाएं" },
    { href: "/service/csc-locator/assam.html", label: "📍 नज़दीकी CSC" },
  ],
};
