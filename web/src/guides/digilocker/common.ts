// Shared bits for the DigiLocker guides (/service/digilocker.html hub and
// /digilocker/*.html). Facts checked on 4 Oct 2026; each guide lists its own
// sources. Sources used across the cluster:
// - IT (Preservation and Retention of Information by Intermediaries Providing
//   Digital Locker Facilities) Rules 2016, G.S.R. 711(E), 21 Jul 2016, and the
//   Amendment Rules 2017, G.S.R. 111(E), 8 Feb 2017, which inserted rule 9A
//   (issued documents shared from DigiLocker accepted "at par with the physical
//   documents"; deemed shared by the issuer directly) and substituted rule 12
//   (grievance officer to redress complaints within one month; appeal to the
//   Digital Locker Authority within 15 days). Text: cdn.digilocker.gov.in/
//   assets/img/digi_locker_rules_and_amendment.pdf.
// - DigiLocker "Ask our Experts" answers, live show of 18 Oct 2024
//   (digilocker.gov.in/assets/DIGILOCKER%20ASK%20EXPERT.pdf): name on the
//   document must match the name on Aadhaar or it cannot be fetched; only the
//   board/university/department can upload or correct records; old records are
//   available only if the issuer has pushed them (NAD for education);
//   support ticket at support.digilocker.gov.in with the listed details; up to
//   five Aadhaar-verified accounts per mobile number; app needs Android 10+;
//   website flow "Search Document" -> issuer -> document -> enter number;
//   Forgot security PIN steps; passport issuer not integrated.
// - PIB, Ministry of Railways, 6 Jul 2018 (PRID 1537986): Aadhaar/DL shown
//   from "Issued Documents" valid ID on trains; "Uploaded Documents" not valid.
// - API Setu directory (directory.apisetu.gov.in, DigiLocker issuer catalogue)
//   for issuer names and document types, read 4 Oct 2026.

export const VERIFIED = "4 अक्टूबर 2026";
export const PUBLISHED = "2026-10-04";
export const MODIFIED = "2026-10-04";

const ext = (href: string, label: string) =>
  `<a href="${href}" target="_blank" rel="noopener nofollow">${label}</a>`;

export const DL_WEB = ext("https://www.digilocker.gov.in/", "digilocker.gov.in");
export const DL_SUPPORT = ext("https://support.digilocker.gov.in/", "support.digilocker.gov.in");
export const DL_ANDROID = ext("https://play.google.com/store/apps/details?id=com.digilocker.android", "Google Play");
export const DL_IOS = ext("https://apps.apple.com/in/app/digilocker/id1320618078", "App Store");
export const RULES_PDF = ext(
  "https://cdn.digilocker.gov.in/assets/img/digi_locker_rules_and_amendment.pdf",
  "DigiLocker नियम 2016 और संशोधन 2017 (PDF)",
);

// One sentence on rule 9A, used where the page talks about validity.
export const RULE_9A =
  "IT (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules 2016 के <strong>नियम 9A</strong> (2017 के संशोधन से जोड़ा गया) के अनुसार issuer DigiLocker में डिजिटल रूप से साइन किए दस्तावेज़ जारी कर सकते हैं और requester उन्हें <strong>फिजिकल दस्तावेज़ के बराबर</strong> स्वीकार कर सकते हैं; DigiLocker से शेयर हुआ दस्तावेज़ ऐसा माना जाता है जैसे issuer ने खुद इलेक्ट्रॉनिक रूप में भेजा हो।";

export const OFFICIAL_DL = [
  { href: "https://www.digilocker.gov.in/", title: "DigiLocker (official वेबसाइट)", note: "digilocker.gov.in" },
  { href: "https://support.digilocker.gov.in/", title: "DigiLocker सपोर्ट / शिकायत", note: "टिकट दर्ज करें" },
];

export const crumbs = (label: string) => [
  { label: "होम", href: "/" },
  { label: "DigiLocker", href: "/service/digilocker.html" },
  { label },
];

type Card = { href: string; emoji: string; title: string; text: string };

export const CARDS: Record<string, Card> = {
  hub: { href: "/service/digilocker.html", emoji: "🗂️", title: "DigiLocker गाइड", text: "अकाउंट, Issued Documents और सभी गाइड" },
  cbse: { href: "/digilocker/cbse-marksheet.html", emoji: "📘", title: "CBSE मार्कशीट DigiLocker से", text: "10वीं-12वीं मार्कशीट, पासिंग और माइग्रेशन" },
  board: { href: "/digilocker/state-board-marksheet.html", emoji: "🏫", title: "राज्य बोर्ड मार्कशीट", text: "UP, बिहार, MP, राजस्थान आदि बोर्ड" },
  degree: { href: "/digilocker/degree-certificate.html", emoji: "🎓", title: "डिग्री सर्टिफिकेट DigiLocker से", text: "NAD, यूनिवर्सिटी मार्कशीट और डिग्री" },
  apaar: { href: "/digilocker/apaar-id.html", emoji: "🆔", title: "APAAR ID कार्ड", text: "DigiLocker में APAAR/ABC ID" },
  dl: { href: "/digilocker/driving-licence.html", emoji: "🪪", title: "ड्राइविंग लाइसेंस DigiLocker में", text: "DL नंबर से डिजिटल लाइसेंस" },
  rc: { href: "/digilocker/vehicle-rc.html", emoji: "🚗", title: "गाड़ी की RC DigiLocker में", text: "डिजिटल RC, पुलिस को दिखाना" },
  insurance: { href: "/digilocker/insurance-policy.html", emoji: "🛡️", title: "बीमा पॉलिसी DigiLocker में", text: "गाड़ी, हेल्थ और लाइफ पॉलिसी" },
  aadhaar: { href: "/digilocker/aadhaar.html", emoji: "🔐", title: "आधार कार्ड DigiLocker से", text: "Issued Documents वाला आधार" },
  pan: { href: "/digilocker/pan-card.html", emoji: "💳", title: "PAN कार्ड DigiLocker में", text: "PAN Verification Record" },
  ayushman: { href: "/digilocker/ayushman-card.html", emoji: "🏥", title: "आयुष्मान कार्ड और ABHA", text: "PMJAY कार्ड, हेल्थ लॉकर" },
  income: { href: "/digilocker/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र DigiLocker से", text: "किन राज्यों का मिलता है" },
  caste: { href: "/digilocker/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र DigiLocker से", text: "राज्य-वार issuer" },
  domicile: { href: "/digilocker/domicile-certificate.html", emoji: "🏠", title: "निवास प्रमाण पत्र DigiLocker से", text: "Domicile और Residence" },
  // existing site pages
  aadhaarGuide: { href: "/service/aadhaar-card.html", emoji: "🪪", title: "आधार कार्ड गाइड", text: "डाउनलोड, अपडेट, सेवाएं" },
  aadhaarMobile: { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल नंबर", text: "OTP न आए तो नंबर अपडेट" },
  panGuide: { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड गाइड", text: "नया PAN, सुधार, e-PAN" },
  panAadhaar: { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "PAN-आधार लिंक", text: "स्टेटस और लिंक करने का तरीका" },
  dlGuide: { href: "/service/driving-licence.html", emoji: "🚦", title: "ड्राइविंग लाइसेंस गाइड", text: "लर्नर, पक्का DL, रिन्यूअल" },
  rcGuide: { href: "/service/vehicle-registration-certificate.html", emoji: "📄", title: "वाहन RC गाइड", text: "RC, ट्रांसफर, डुप्लीकेट" },
  mparivahan: { href: "/service/mparivahan-virtual-rc-dl.html", emoji: "📲", title: "mParivahan वर्चुअल RC/DL", text: "परिवहन मंत्रालय का ऐप" },
  challan: { href: "/challan/", emoji: "🚥", title: "ट्रैफिक चालान गाइड", text: "चेक, भुगतान, शिकायत" },
  ayushmanGuide: { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत PM-JAY", text: "पात्रता, कार्ड, अस्पताल" },
  abha: { href: "/service/abha-health-card.html", emoji: "🩺", title: "ABHA हेल्थ कार्ड", text: "ABHA नंबर बनाएं" },
  abc: { href: "/service/academic-bank-of-credits.html", emoji: "🏦", title: "Academic Bank of Credits", text: "ABC क्या है, क्रेडिट कैसे जुड़ते हैं" },
  incomeGuide: { href: "/service/income-certificate.html", emoji: "📝", title: "आय प्रमाण पत्र आवेदन", text: "ऑनलाइन आवेदन, दस्तावेज़" },
  casteGuide: { href: "/service/caste-certificate.html", emoji: "📝", title: "जाति प्रमाण पत्र आवेदन", text: "SC/ST/OBC प्रमाण पत्र" },
  domicileGuide: { href: "/service/domicile-certificate.html", emoji: "📝", title: "निवास प्रमाण पत्र आवेदन", text: "Domicile कैसे बनवाएं" },
  voter: { href: "/service/e-voter-epic-download.html", emoji: "🗳️", title: "e-EPIC वोटर कार्ड", text: "डिजिटल वोटर ID डाउनलोड" },
  lost: { href: "/affidavit/lost-document.html", emoji: "✍️", title: "दस्तावेज़ खोने का एफिडेविट", text: "डुप्लीकेट के लिए शपथ पत्र" },
  nameChange: { href: "/affidavit/name-change.html", emoji: "✍️", title: "नाम बदलने का एफिडेविट", text: "नाम में अंतर हो तो" },
  oneSame: { href: "/affidavit/one-and-same-person.html", emoji: "✍️", title: "One and Same Person एफिडेविट", text: "दो दस्तावेज़ों में नाम अलग" },
  students: { href: "/students/", emoji: "🎒", title: "छात्रों के लिए सेवाएं", text: "स्कॉलरशिप, रिज़ल्ट, दस्तावेज़" },
};

export const cards = (...keys: (keyof typeof CARDS)[]) => keys.map((k) => CARDS[k]);

export const ASIDE = [
  { href: "https://www.digilocker.gov.in/", label: "🔐 DigiLocker खोलें" },
  { href: "/service/digilocker.html", label: "🗂️ सभी DigiLocker गाइड" },
];

// Common "name mismatch" row text, phrased per document by the caller.
export const NAME_RULE =
  "DigiLocker सिर्फ उसी व्यक्ति को दस्तावेज़ देता है जिसका नाम दस्तावेज़ और आधार में मेल खाए। नाम अलग है तो दस्तावेज़ fetch नहीं होगा";
