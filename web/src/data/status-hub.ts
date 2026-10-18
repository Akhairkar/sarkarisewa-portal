// Status Check hub: one page that lists where and how to check the status of
// the applications/benefits people search most in India. SarkariSewa India is
// a private information site; every `url` below is the department's own portal.
//
// Sources (checked 18 Oct 2026). Many .gov.in hosts do not open from the build
// sandbox; where marked "extract", search-result extracts of the official page
// or of several consistent guides were used, and the stable root URL is given.
// - pm-kisan: pmkisan.gov.in (extract: Farmers Corner > Know Your Status,
//   Know Your Registration No.; OTP); helpline 155261 / 011-24300606 as in
//   guides/doc/pm-kisan.ts; field names eKYC / Land Seeding / Aadhaar-bank
//   seeding as in tools/status-troubleshooter.astro (verified there).
// - pmfby: pmfby.gov.in (opened; extract: Application Status with receipt
//   number); Krishi Rakshak helpline 14447 (guides/doc/pm-fasal-bima-yojana.ts).
// - ration: nfsa.gov.in (opened: state portal links; CRF status); NFSA FAQ for
//   Mera Ration 2 (nfsa.gov.in/doc/FAQ_for_Mera_Ration_2.pdf: card details,
//   entitlement, transactions); impds.nic.in (opened: links to Mera Ration
//   app); 1967 state food helpline (guides/doc/ration-card.ts).
// - ayushman: beneficiary.nha.gov.in (403 to sandbox; extract: mobile OTP login,
//   search by Aadhaar / family ID / PM-JAY ID); helpline 14555 (nha.gov.in
//   Contact-Us, guides/doc/ayushman-bharat.ts). Status labels vary by source,
//   so none are listed.
// - aadhaar-update: myaadhaar.uidai.gov.in (extract: Check Enrolment & Update
//   Status with EID / URN / SRN); helpline 1947 (guides/doc/aadhaar-card.ts).
// - aadhaar-bank: UIDAI Bank Seeding Status on myAadhaar (vikaspedia extract:
//   Aadhaar/VID + OTP, shows bank name, Active/Inactive, date, checked
//   against NPCI mapper; correction is done by the bank).
// - pan: Protean status page tin.tin.proteantech.in/pantan/StatusTrack.html
//   (extracts incl. proteantech.in article "Easy ways to track your PAN card
//   status" 07.11.2024: acknowledgement number, or name + DOB; UTIITSL
//   applications are tracked on utiitsl.com with coupon number + DOB).
// - passport: passportindia.gov.in official PDF "Steps to Check Application
//   Status" (Track Application Status, file number + DOB, call centre
//   1800-258-1800).
// - voter: voters.eci.gov.in (extract: Track Application Status with
//   reference number); 1950 (PIB, guides/doc/voter-id-card.ts).
// - dl: sarathi.parivahan.gov.in (opened: state selection; extract:
//   Application Status with application number + DOB).
// - rc: parivahan.gov.in Vahan citizen services (extract: Status > Know your
//   application status with application number).
// - itr-refund: incometaxindia.gov.in "Status of Tax Refund" page (links to
//   e-filing Know Your Refund Status: PAN, assessment year, mobile OTP);
//   e-filing View Filed Returns; statuses Refund Issued / Refund Failed /
//   No Demand No Refund / Refund Adjusted (Business Standard 25.11.2025 and
//   bank guides); Refund Reissue (guides/doc/tds-refund-status.ts);
//   helpline 1800 103 0025 (guides/doc/pan-card.ts, tds-refund-status.ts).
// - pfms: scholarships.gov.in (opened) links to pfms.nic.in Know Your Payment
//   (KnowYourPayment_Dw_NewNew.aspx); extract: bank + account number + OTP;
//   PFMS toll-free 1800 118 111 (guides/doc/national-scholarship-portal.ts).
// - lpg: mylpg.in (extract; myScheme: check CTC status on mylpg.in or with
//   distributor; 17-digit LPG ID); helpline 1800-2333-555
//   (guides/doc/lpg-subsidy-pahal.ts). PMUY has no separate public status
//   page (pmuy.gov.in FAQ), so Ujjwala is covered here.
// - nsap: nsap.nic.in beneficiary reports by state/district/block
//   (guides/doc/national-social-assistance-programme.ts).
// - epf-claim: epfindia.gov.in > For Employees > Know Your Claim Status and
//   member passbook (extract); UMANG; helpline 1800-118-005
//   (guides/doc/epfo.ts).
// - vishwakarma: pmvishwakarma.gov.in (extract: login with registered mobile,
//   dashboard shows stage). Helpline conflicts between sources: omitted.
// - nsp: scholarships.gov.in (opened: OTR login, PFMS payment link); status
//   labels Pending at Institute / Defective / Rejected (consistent guides;
//   Defective covered in status-troubleshooter); NSP helpdesk 0120-6619540
//   (guides/doc/national-scholarship-portal.ts).
// - ladki-bahin: ladakibahin.maharashtra.gov.in (403 to sandbox; extract:
//   mobile OTP login > Applications made earlier). Helpline not verified.
// - ladli-behna: cmladlibahna.mp.gov.in/LBYApplicationStatus.aspx (opened:
//   "आवेदन एवं भुगतान की स्थिति", application no. / member Samagra no.,
//   mobile OTP; separate "आधार/डी.बी.टी. स्थिति"; help desk 0755-2700800).
// - maiya-samman: mmmsy.jharkhand.gov.in (timed out; extract: आवेदन की स्थिति
//   with Aadhaar / application number). Helpline seen only on one unofficial
//   site: omitted.
// - pmay-g: pmayg.dord.gov.in (401 to sandbox; extract: AwaasSoft beneficiary
//   search by registration number shows sanction and instalments).
// - pmay-u: pmay-urban.gov.in (opened) links PMAY-U 2.0 to
//   pmaymis.gov.in/PMAYMIS2_2024/PmayDefault.aspx; pmaymis FAQ (extract):
//   apply online and track application status. Exact menu labels differ
//   between guides, so steps stay general.
// - surya-ghar: pmsuryaghar.gov.in consumer login (guides/solar/pages.ts).
// Dropped: Kisan Credit Card (no single public status portal; status is with
// the bank), e-Shram (registration is instant, card download not a status),
// PMUY as a separate item (see lpg).

export type StatusItem = {
  id: string;
  group: "kisan" | "ration" | "health" | "id" | "money" | "job" | "women" | "housing" | "other";
  name: string;
  en: string;
  url: string;
  portal: string;
  need: string;
  steps: string[];
  meanings?: [string, string][];
  helpline?: string;
  guide?: string;
  fix?: string;
};

export const STATUS_GROUPS: Record<StatusItem["group"], string> = {
  kisan: "किसान",
  ration: "राशन",
  health: "इलाज / स्वास्थ्य",
  id: "पहचान पत्र (आधार, PAN, पासपोर्ट, वोटर, DL)",
  money: "पैसा, पेंशन और सब्सिडी",
  job: "नौकरी और कामगार",
  women: "महिलाओं की राज्य योजनाएं",
  housing: "घर (आवास योजना)",
  other: "छात्रवृत्ति और अन्य",
};

const TS = "/tools/status-troubleshooter.html";

export const STATUS_ITEMS: StatusItem[] = [
  // ---- किसान ----
  {
    id: "pm-kisan",
    group: "kisan",
    name: "PM किसान किस्त स्टेटस",
    en: "PM Kisan Status",
    url: "https://pmkisan.gov.in/",
    portal: "pmkisan.gov.in",
    need: "PM-KISAN पंजीकरण संख्या (या आधार/मोबाइल से निकालें), रजिस्टर्ड मोबाइल पर OTP",
    steps: [
      "pmkisan.gov.in खोलें और Farmers Corner में \"Know Your Status\" चुनें।",
      "पंजीकरण संख्या डालें। याद न हो तो \"Know your registration no.\" से मोबाइल या आधार डालकर निकालें।",
      "मोबाइल पर आया OTP डालें।",
      "eKYC, ज़मीन सत्यापन (Land Seeding), आधार-बैंक सीडिंग और किस्तों का विवरण देखें।",
    ],
    meanings: [
      ["eKYC Status: No", "eKYC बाकी है। पोर्टल पर OTP से, CSC पर अंगूठे से या ऐप में चेहरे से eKYC करें।"],
      ["Land Seeding: No", "ज़मीन का रिकॉर्ड नहीं जुड़ा। यह राज्य सरकार करती है; पटवारी/लेखपाल या कृषि कार्यालय में पूछें।"],
      ["Aadhaar Bank Account Seeding: No", "बैंक खाता आधार से DBT के लिए नहीं जुड़ा। बैंक जाकर आधार सीडिंग करवाएं।"],
    ],
    helpline: "155261 / 011-24300606",
    guide: "/service/pm-kisan.html",
    fix: `${TS}#pmkisan`,
  },
  {
    id: "fasal-bima",
    group: "kisan",
    name: "फसल बीमा (PMFBY) आवेदन स्टेटस",
    en: "PMFBY Status",
    url: "https://pmfby.gov.in/",
    portal: "pmfby.gov.in",
    need: "बीमा की रसीद संख्या (Receipt / Application No.)",
    steps: [
      "pmfby.gov.in खोलें और \"Application Status\" चुनें।",
      "रसीद संख्या और कैप्चा डालें।",
      "देखें कि आवेदन स्वीकार होकर पॉलिसी बनी या नहीं।",
      "फसल नुकसान का दावा (क्लेम) अलग चीज़ है; उसके लिए 14447 पर बात करें।",
    ],
    helpline: "14447",
    guide: "/service/pm-fasal-bima-yojana.html",
  },

  // ---- राशन ----
  {
    id: "ration-card",
    group: "ration",
    name: "राशन कार्ड स्टेटस और e-KYC",
    en: "Ration Card Status",
    url: "https://nfsa.gov.in/",
    portal: "nfsa.gov.in / Mera Ration ऐप",
    need: "राशन कार्ड नंबर या आवेदन संख्या; ऐप के लिए आधार और उससे जुड़ा मोबाइल",
    steps: [
      "नया कार्ड या सुधार का आवेदन: nfsa.gov.in से अपने राज्य के खाद्य विभाग का पोर्टल खोलें और आवेदन संख्या से स्थिति देखें।",
      "बने हुए कार्ड की जानकारी: सरकारी \"Mera Ration\" ऐप में आधार और OTP से लॉगिन करें।",
      "ऐप में सदस्यों के नाम, हर महीने का राशन (हक) और लेन-देन देखें।",
      "किसी सदस्य की e-KYC बाकी हो तो राशन दुकान पर अंगूठा लगवाकर पूरी करें।",
    ],
    helpline: "1967 (राज्य खाद्य हेल्पलाइन)",
    guide: "/service/ration-card.html",
    fix: `${TS}#ration`,
  },

  // ---- स्वास्थ्य ----
  {
    id: "ayushman-card",
    group: "health",
    name: "आयुष्मान कार्ड स्टेटस",
    en: "Ayushman Card Status",
    url: "https://beneficiary.nha.gov.in/",
    portal: "beneficiary.nha.gov.in",
    need: "मोबाइल नंबर (OTP), आधार नंबर या परिवार/राशन कार्ड ID",
    steps: [
      "beneficiary.nha.gov.in खोलें और \"Beneficiary\" चुनकर मोबाइल OTP से लॉगिन करें।",
      "योजना (PM-JAY), राज्य और ज़िला चुनें।",
      "आधार, परिवार ID या PM-JAY ID से अपना परिवार खोजें।",
      "हर सदस्य के नाम के आगे कार्ड की स्थिति देखें; बना हो तो वहीं से डाउनलोड करें।",
    ],
    helpline: "14555",
    guide: "/service/ayushman-bharat.html",
  },

  // ---- पहचान पत्र ----
  {
    id: "aadhaar-update",
    group: "id",
    name: "आधार अपडेट / नामांकन स्टेटस",
    en: "Aadhaar Update Status",
    url: "https://myaadhaar.uidai.gov.in/",
    portal: "myaadhaar.uidai.gov.in",
    need: "पर्ची पर लिखा EID (नया आधार), URN (अपडेट) या SRN (ऑनलाइन सेवा)",
    steps: [
      "myaadhaar.uidai.gov.in खोलें।",
      "\"Check Enrolment & Update Status\" चुनें।",
      "पर्ची का EID / URN / SRN और कैप्चा डालें।",
      "स्थिति देखें। काम पूरा हो गया हो तो e-Aadhaar डाउनलोड करें।",
    ],
    helpline: "1947",
    guide: "/service/aadhaar-card.html",
  },
  {
    id: "aadhaar-bank-seeding",
    group: "id",
    name: "आधार-बैंक लिंक (DBT) स्टेटस",
    en: "Aadhaar Bank Seeding Status",
    url: "https://myaadhaar.uidai.gov.in/",
    portal: "myaadhaar.uidai.gov.in",
    need: "आधार नंबर, आधार से जुड़े मोबाइल पर OTP",
    steps: [
      "myaadhaar.uidai.gov.in पर आधार और OTP से लॉगिन करें।",
      "\"Bank Seeding Status\" खोलें।",
      "देखें कि किस बैंक में आधार जुड़ा है और वह Active है या नहीं।",
      "सरकारी योजना का पैसा (DBT) इसी बैंक खाते में आता है।",
    ],
    meanings: [
      ["Active", "इस बैंक खाते में DBT का पैसा आ सकता है।"],
      ["Inactive / कोई बैंक नहीं दिखा", "अपने बैंक जाकर आधार सीडिंग (DBT) फॉर्म भरें। सुधार बैंक ही करता है।"],
    ],
  },
  {
    id: "pan-card",
    group: "id",
    name: "PAN कार्ड स्टेटस",
    en: "PAN Card Status",
    url: "https://tin.tin.proteantech.in/pantan/StatusTrack.html",
    portal: "Protean (NSDL) / UTIITSL",
    need: "15 अंकों का पावती (Acknowledgement) नंबर, या नाम और जन्मतिथि",
    steps: [
      "पावती रसीद देखें: आवेदन Protean (NSDL) से हुआ या UTIITSL से।",
      "Protean वाले आवेदन: स्टेटस पेज पर \"PAN - New / Change Request\" चुनें और पावती नंबर डालें।",
      "UTIITSL वाले आवेदन: utiitsl.com पर कूपन नंबर और जन्मतिथि से देखें।",
      "आवेदन के 24 घंटे बाद ही स्टेटस दिखता है।",
    ],
    guide: "/service/pan-card.html",
  },
  {
    id: "passport",
    group: "id",
    name: "पासपोर्ट आवेदन स्टेटस",
    en: "Passport Status",
    url: "https://www.passportindia.gov.in/",
    portal: "passportindia.gov.in",
    need: "15 अंकों का फाइल नंबर (रसीद के ऊपर दाईं ओर), जन्मतिथि",
    steps: [
      "passportindia.gov.in खोलें।",
      "\"Track Application Status\" चुनें।",
      "फाइल नंबर और जन्मतिथि डालकर Track दबाएं।",
      "mPassport Seva ऐप में भी यही जानकारी डालकर स्टेटस देख सकते हैं।",
    ],
    helpline: "1800-258-1800",
    guide: "/service/passport.html",
  },
  {
    id: "voter-id",
    group: "id",
    name: "वोटर ID आवेदन स्टेटस",
    en: "Voter ID Status",
    url: "https://voters.eci.gov.in/",
    portal: "voters.eci.gov.in",
    need: "फॉर्म का रेफरेंस नंबर, मोबाइल",
    steps: [
      "voters.eci.gov.in खोलें (मोबाइल OTP से लॉगिन)।",
      "\"Track Application Status\" चुनें।",
      "रेफरेंस नंबर डालें और राज्य चुनें।",
      "मंज़ूरी के बाद वहीं से e-EPIC डाउनलोड करें।",
    ],
    helpline: "1950",
    guide: "/service/voter-id-card.html",
  },
  {
    id: "driving-licence",
    group: "id",
    name: "ड्राइविंग लाइसेंस (DL/LL) स्टेटस",
    en: "Driving Licence Status",
    url: "https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do",
    portal: "sarathi.parivahan.gov.in",
    need: "आवेदन संख्या, जन्मतिथि",
    steps: [
      "Sarathi पोर्टल खोलें और अपना राज्य चुनें।",
      "\"Application Status\" चुनें।",
      "आवेदन संख्या, जन्मतिथि और कैप्चा डालें।",
      "देखें कि आवेदन किस चरण पर है (टेस्ट, मंज़ूरी, डाक से भेजा गया)।",
    ],
    guide: "/service/driving-licence.html",
  },
  {
    id: "vehicle-rc",
    group: "id",
    name: "गाड़ी RC आवेदन स्टेटस",
    en: "RC Status",
    url: "https://parivahan.gov.in/",
    portal: "parivahan.gov.in (Vahan)",
    need: "Vahan आवेदन संख्या",
    steps: [
      "parivahan.gov.in पर वाहन से जुड़ी सेवाएं (Vahan) खोलें।",
      "राज्य और RTO चुनें।",
      "\"Status\" में \"Know your application status\" चुनें।",
      "आवेदन संख्या डालकर स्थिति देखें।",
    ],
    guide: "/service/vehicle-registration-certificate.html",
  },

  // ---- पैसा, पेंशन, सब्सिडी ----
  {
    id: "income-tax-refund",
    group: "money",
    name: "इनकम टैक्स रिफंड स्टेटस",
    en: "Income Tax Refund Status",
    url: "https://www.incometax.gov.in/",
    portal: "incometax.gov.in",
    need: "PAN, असेसमेंट ईयर, मोबाइल (OTP)",
    steps: [
      "incometax.gov.in पर \"Know Your Refund Status\" खोलें (बिना लॉगिन), या लॉगिन करके e-File > Income Tax Returns > View Filed Returns देखें।",
      "PAN, असेसमेंट ईयर और मोबाइल डालें; OTP भरें।",
      "रिफंड की स्थिति देखें।",
      "रिफंड ITR के e-Verify और प्रोसेस होने के बाद ही आता है।",
    ],
    meanings: [
      ["Refund Issued / Paid", "रिफंड भेज दिया गया। बैंक स्टेटमेंट में देखें।"],
      ["Refund Failed", "बैंक खाता बंद, IFSC गलत या खाता pre-validate नहीं। पोर्टल पर खाता ठीक करके \"Refund Reissue\" मांगें।"],
      ["No Demand No Refund", "न टैक्स बाकी, न रिफंड बना। गलत लगे तो सुधार (rectification) या संशोधित रिटर्न के बारे में CA से पूछें।"],
      ["Refund Adjusted", "रिफंड का पैसा पुराने बकाया टैक्स में काट लिया गया। बचा हुआ हिस्सा खाते में आता है।"],
    ],
    helpline: "1800 103 0025",
    guide: "/service/tds-refund-status.html",
  },
  {
    id: "pfms-dbt",
    group: "money",
    name: "DBT पेमेंट स्टेटस (PFMS)",
    en: "PFMS DBT Status",
    url: "https://pfms.nic.in/SitePages/KnowYourPayment_Dw_NewNew.aspx",
    portal: "pfms.nic.in",
    need: "बैंक का नाम, खाता नंबर, बैंक में दर्ज मोबाइल पर OTP",
    steps: [
      "PFMS का \"Know Your Payment\" पेज खोलें।",
      "बैंक चुनें और खाता नंबर दो बार डालें।",
      "कैप्चा भरें और OTP मंगाकर डालें।",
      "सरकारी योजनाओं (छात्रवृत्ति, पेंशन आदि) से खाते में भेजे गए पैसे की सूची देखें।",
    ],
    helpline: "1800 118 111",
  },
  {
    id: "lpg-subsidy",
    group: "money",
    name: "LPG गैस सब्सिडी / उज्ज्वला स्टेटस",
    en: "LPG Subsidy Status",
    url: "https://www.mylpg.in/",
    portal: "mylpg.in",
    need: "17 अंकों की LPG ID (गैस पासबुक/डिलीवरी रसीद पर), रजिस्टर्ड मोबाइल",
    steps: [
      "mylpg.in खोलें और अपनी कंपनी (इंडेन, भारतगैस, HP गैस) चुनें।",
      "LPG ID या रजिस्टर्ड मोबाइल से लॉगिन करें।",
      "रिफिल का इतिहास और हर रिफिल पर सब्सिडी आई या नहीं, देखें।",
      "बैंक पासबुक में सब्सिडी की एंट्री मिलाएं। उज्ज्वला कनेक्शन का स्टेटस अपने गैस वितरक से पूछें।",
    ],
    helpline: "1800-2333-555",
    guide: "/service/lpg-subsidy-pahal.html",
  },
  {
    id: "old-age-pension",
    group: "money",
    name: "वृद्धा / विधवा / विकलांग पेंशन (NSAP) स्टेटस",
    en: "NSAP Pension Status",
    url: "https://nsap.nic.in/",
    portal: "nsap.nic.in",
    need: "राज्य, ज़िला, ब्लॉक/पंचायत का नाम; पेंशन आईडी हो तो वह",
    steps: [
      "nsap.nic.in पर लाभार्थियों की रिपोर्ट खोलें।",
      "राज्य, ज़िला, ब्लॉक और पंचायत/वार्ड चुनें।",
      "सूची में अपना नाम खोजें।",
      "कई राज्यों के अपने पेंशन पोर्टल पर भी भुगतान दिखता है; पेंशन रुके तो ब्लॉक या समाज कल्याण कार्यालय में पूछें।",
    ],
    guide: "/service/national-social-assistance-programme.html",
  },

  // ---- नौकरी / कामगार ----
  {
    id: "epf-claim",
    group: "job",
    name: "PF (EPF) क्लेम स्टेटस",
    en: "EPF Claim Status",
    url: "https://www.epfindia.gov.in/",
    portal: "epfindia.gov.in",
    need: "UAN (और पासवर्ड), या PF ऑफिस और PF खाता नंबर",
    steps: [
      "epfindia.gov.in पर For Employees में \"Know Your Claim Status\" खोलें।",
      "UAN डालें और अपना Member ID चुनें।",
      "क्लेम की स्थिति देखें (मंज़ूर, लंबित या रिजेक्ट और उसका कारण)।",
      "UMANG ऐप में EPFO > Track Claim से भी देख सकते हैं।",
    ],
    helpline: "1800-118-005",
    guide: "/service/epfo.html",
    fix: `${TS}#epf`,
  },
  {
    id: "pm-vishwakarma",
    group: "job",
    name: "PM विश्वकर्मा आवेदन स्टेटस",
    en: "PM Vishwakarma Status",
    url: "https://pmvishwakarma.gov.in/",
    portal: "pmvishwakarma.gov.in",
    need: "रजिस्टर्ड मोबाइल नंबर (OTP)",
    steps: [
      "pmvishwakarma.gov.in पर रजिस्टर्ड मोबाइल से लॉगिन करें।",
      "डैशबोर्ड पर आवेदन की स्थिति देखें: किस स्तर की जांच बाकी है।",
      "लॉगिन न हो तो उसी CSC पर जाएं जहां आवेदन किया था।",
    ],
    guide: "/service/pm-vishwakarma-yojana.html",
  },

  // ---- महिलाएं (राज्य योजनाएं) ----
  {
    id: "ladki-bahin",
    group: "women",
    name: "माझी लाडकी बहीण स्टेटस (महाराष्ट्र)",
    en: "Ladki Bahin Status",
    url: "https://ladakibahin.maharashtra.gov.in/",
    portal: "ladakibahin.maharashtra.gov.in",
    need: "रजिस्टर्ड मोबाइल नंबर (OTP)",
    steps: [
      "ladakibahin.maharashtra.gov.in पर मोबाइल और OTP से लॉगिन करें।",
      "\"Applications made earlier\" (पहले किए आवेदन) खोलें।",
      "आवेदन की स्थिति देखें; अपात्र दिखे तो कारण पढ़ें।",
      "हर साल की e-KYC भी इसी पोर्टल पर होती है।",
    ],
    guide: "/service/mh-ladki-bahin-yojana.html",
    fix: `${TS}#ladki`,
  },
  {
    id: "ladli-behna",
    group: "women",
    name: "लाड़ली बहना आवेदन व भुगतान स्टेटस (मध्य प्रदेश)",
    en: "Ladli Behna Status",
    url: "https://cmladlibahna.mp.gov.in/LBYApplicationStatus.aspx",
    portal: "cmladlibahna.mp.gov.in",
    need: "लाड़ली बहना आवेदन क्रमांक या सदस्य समग्र क्रमांक, रजिस्टर्ड मोबाइल पर OTP",
    steps: [
      "cmladlibahna.mp.gov.in पर \"आवेदन एवं भुगतान की स्थिति\" खोलें।",
      "आवेदन क्रमांक या सदस्य समग्र क्रमांक और कैप्चा डालें।",
      "मोबाइल पर आया OTP डालकर खोजें।",
      "आवेदन और हर किस्त के भुगतान का विवरण देखें। बैंक-आधार लिंक के लिए पोर्टल पर \"आधार/डी.बी.टी. स्थिति\" देखें।",
    ],
    helpline: "0755-2700800",
  },
  {
    id: "maiya-samman",
    group: "women",
    name: "मंईयां सम्मान योजना स्टेटस (झारखंड)",
    en: "Maiya Samman Status",
    url: "https://mmmsy.jharkhand.gov.in/",
    portal: "mmmsy.jharkhand.gov.in",
    need: "आधार नंबर या आवेदन (पावती) संख्या, मोबाइल",
    steps: [
      "mmmsy.jharkhand.gov.in खोलें।",
      "\"आवेदन की स्थिति\" चुनें।",
      "आधार या आवेदन संख्या डालें।",
      "पैसा रुका हो तो आंगनबाड़ी या प्रखंड कार्यालय में सत्यापन और बैंक-आधार लिंक के बारे में पूछें।",
    ],
    guide: "/service/jh-maiya-samman-yojana.html",
  },

  // ---- आवास ----
  {
    id: "pmay-gramin",
    group: "housing",
    name: "PM आवास योजना ग्रामीण स्टेटस",
    en: "PMAY Gramin Status",
    url: "https://pmayg.dord.gov.in/",
    portal: "pmayg.dord.gov.in",
    need: "PMAY-G रजिस्ट्रेशन नंबर (स्वीकृति पत्र पर); न हो तो गांव/पंचायत का नाम",
    steps: [
      "pmayg.dord.gov.in खोलें और लाभार्थी खोज (AwaasSoft) चुनें।",
      "रजिस्ट्रेशन नंबर और कैप्चा डालें।",
      "मकान की स्वीकृति और हर किस्त का भुगतान देखें।",
      "नंबर न हो तो रिपोर्ट में राज्य, ज़िला, ब्लॉक, पंचायत चुनकर सूची में नाम खोजें, या पंचायत सचिव से पूछें।",
    ],
    guide: "/service/pm-awas-yojana.html",
  },
  {
    id: "pmay-urban",
    group: "housing",
    name: "PM आवास योजना शहरी (PMAY-U 2.0) स्टेटस",
    en: "PMAY Urban Status",
    url: "https://pmaymis.gov.in/PMAYMIS2_2024/PmayDefault.aspx",
    portal: "pmaymis.gov.in",
    need: "आवेदन के बाद मिली ID (पावती पर / SMS में); न हो तो आधार",
    steps: [
      "PMAY-U 2.0 पोर्टल (pmaymis.gov.in) खोलें।",
      "आवेदन की स्थिति देखने (track) का विकल्प चुनें।",
      "आवेदन की ID या आधार डालकर स्थिति देखें।",
      "जांच नगर निगम/नगर पालिका करती है; देर हो तो वहीं पूछें।",
    ],
    guide: "/service/pm-awas-yojana.html",
  },

  // ---- छात्रवृत्ति और अन्य ----
  {
    id: "nsp-scholarship",
    group: "other",
    name: "NSP छात्रवृत्ति स्टेटस",
    en: "NSP Scholarship Status",
    url: "https://scholarships.gov.in/",
    portal: "scholarships.gov.in",
    need: "14 अंकों की OTR ID और पासवर्ड",
    steps: [
      "scholarships.gov.in पर OTR ID से लॉगिन करें।",
      "शैक्षणिक वर्ष चुनें और आवेदन की स्थिति खोलें।",
      "देखें कि आवेदन संस्थान, ज़िला/राज्य या मंत्रालय में से किस स्तर पर है।",
      "मंज़ूरी के बाद पैसा देखने के लिए PFMS का \"Know Your Payment\" देखें।",
    ],
    meanings: [
      ["Pending at Institute", "आपके स्कूल/कॉलेज ने अभी जांच नहीं की। संस्थान के नोडल अधिकारी से मिलें।"],
      ["Defective", "आवेदन में सुधार चाहिए, यह रिजेक्ट नहीं है। तय तारीख से पहले सुधार कर फिर जमा करें।"],
      ["Rejected", "आवेदन नामंज़ूर। पोर्टल पर कारण देखें; गलत लगे तो शिकायत करें।"],
    ],
    helpline: "0120-6619540",
    guide: "/service/national-scholarship-portal.html",
    fix: `${TS}#scholarship`,
  },
  {
    id: "pm-surya-ghar",
    group: "other",
    name: "PM सूर्य घर सोलर सब्सिडी स्टेटस",
    en: "PM Surya Ghar Status",
    url: "https://pmsuryaghar.gov.in/",
    portal: "pmsuryaghar.gov.in",
    need: "बिजली कंज़्यूमर नंबर, रजिस्टर्ड मोबाइल",
    steps: [
      "pmsuryaghar.gov.in पर कंज़्यूमर लॉगिन करें।",
      "आवेदन की हर स्टेज देखें: मंज़ूरी, इंस्टॉलेशन, नेट मीटर, जांच, कमीशनिंग, बैंक जानकारी, सब्सिडी।",
      "जिस स्टेज पर रुका है, उसके लिए वेंडर या DISCOM से बात करें।",
    ],
    guide: "/solar/pm-surya-ghar-subsidy-status.html",
  },
];

export const STATUS_VERIFIED = "18 अक्टूबर 2026";
