import type { Promo } from "./types";

// GSTIN report box for guides read by shop owners and small businesses
// (Udyam, Mudra, SVANidhi, Vishwakarma, Stand-Up India, MPBCDC loans).
export const gstinPromo: Promo = {
  emoji: "🧾",
  title: "सप्लायर या ग्राहक का GST नंबर असली है?",
  price: "₹20 प्रति GSTIN",
  text: 'माल खरीदने, बिल लेने या उधार देने से पहले सामने वाले का GSTIN जांच लें। यह जांच GST के official पोर्टल <a href="https://services.gst.gov.in/services/searchtp" target="_blank" rel="noopener nofollow">services.gst.gov.in</a> पर <strong>फ्री</strong> भी होती है। हमारी ₹20 की सुविधा सेवा एक साफ रिपोर्ट देती है जिसे सेव या शेयर कर सकते हैं।',
  points: [
    "पैसे देने से पहले GSTIN का फॉर्मेट फ्री में जांचा जाता है, गलत नंबर पर पैसा नहीं कटता",
    "स्टेटस (चालू या बंद), कानूनी नाम और ट्रेड नाम",
    "रजिस्ट्रेशन की तारीख, करदाता का प्रकार और राज्य",
    "₹20 हमारी सेवा का शुल्क है, सरकारी फीस नहीं",
  ],
  href: "/services/gstin-verification/",
  cta: "₹20 में GSTIN रिपोर्ट देखें",
};
