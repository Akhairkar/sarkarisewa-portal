# -*- coding: utf-8 -*-
"""
Master Upgrader for All Sarkari Job Notification Pages & Jobs Hub
Upgrades:
1. jobs/index.html (Master Job Alerts Directory & Live Search Engine)
2. All 22+ Job Notification Pages (SSC, UPSC, RRB, IBPS, SBI, RBI, ISRO, Navy, Post GDS, AIIMS, State PSCs)
3. jobs/post.html (Dynamic Universal Fallback)

Features:
- Schema.org JobPosting + FAQPage + BreadcrumbList JSON-LD
- Quick Notification Highlights Grid
- 📅 Important Dates Schedule Table
- 💳 Application Fee & Category Concession Table
- ⏳ Age Limit & Age Relaxation Matrix
- 💼 Post-wise Vacancy & 7th CPC Pay Scale Matrix
- 📊 Selection Stages & Detailed Exam Pattern Table
- 🚀 Step-by-Step Online Application Guide (OTR, Live Photo, Submission)
- 🔗 Official Direct Important Links Table
- 🛠️ 6 Real-World Problem Solvers for Job Seekers
- ❓ 10 In-Depth Bilingual FAQs (Accordion Format)
- 🧮 Useful Exam Tools & Calculators Grid
- 🔔 Subscribe Widget (#subscribe-widget) & VIP Telegram Banner
- 100% Dark & Light mode contrast safety
- Clean Bilingual Language Isolation (data-lang-show)
"""
import os, sys, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JOBS_DIR = os.path.join(ROOT, 'jobs')

JOBS_DATA = {
    "ssc-cgl-recruitment-2026.html": {
        "slug": "ssc-cgl-recruitment-2026",
        "aliases": ["ssc-cgl-2026-recruitment.html"],
        "sector": "SSC",
        "sector_color": "#2563eb",
        "org_en": "Staff Selection Commission (SSC)",
        "org_hi": "कर्मचारी चयन आयोग (एसएससी)",
        "post_name_en": "Combined Graduate Level (CGL) 2026 Examination",
        "post_name_hi": "संयुक्त स्नातक स्तरीय (सीजीएल) परीक्षा 2026",
        "title_en": "SSC CGL Recruitment 2026: 17,727 Vacancies, Apply Online, Syllabus & Salary",
        "title_hi": "एसएससी सीजीएल भर्ती 2026: 17,727 पदों पर बंपर भर्ती, ऑनलाइन आवेदन, सिलेबस व सैलरी",
        "desc_en": "SSC CGL 2026 Notification for 17,727 Posts: ASO, Income Tax Inspector, Auditor, Tax Assistant. Check eligibility, 7th CPC salary, exam pattern, important dates & apply online at ssc.gov.in.",
        "desc_hi": "एसएससी सीजीएल भर्ती 2026 आधिकारिक अधिसूचना: 17,727 रिक्तियां (एएसओ, आयकर निरीक्षक, ऑडिटर, टैक्स असिस्टेंट)। पात्रता, वेतनमान, परीक्षा पैटर्न, महत्वपूर्ण तिथियां व ssc.gov.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "17,727 Posts",
        "qualification_en": "Bachelor's Degree in Any Discipline from a recognized University",
        "qualification_hi": "किसी भी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक (Graduation) डिग्री",
        "age_limit": "18 to 32 Years (as on 01.08.2026)",
        "salary": "₹25,500 – ₹1,51,100 (Pay Level 4 to 8) | In-Hand: ₹42,000 – ₹92,000/month",
        "job_location": "All India (Central Ministries & Departments)",
        "official_portal": "https://ssc.gov.in",
        "apply_link": "https://ssc.gov.in/portal/login",
        "notification_link": "https://ssc.gov.in",
        "date_posted": "2026-06-24",
        "valid_through": "2026-07-24T23:00",
        "dates": [
            ("अधिसूचना जारी होने की तिथि (Notification Date)", "24 जून 2026"),
            ("ऑनलाइन आवेदन शुरू (Apply Online Start)", "24 जून 2026"),
            ("आवेदन की अंतिम तिथि (Last Date to Apply)", "24 जुलाई 2026 (रात 11:00 बजे तक)"),
            ("ऑनलाइन शुल्क भुगतान अंतिम तिथि (Fee Last Date)", "25 जुलाई 2026 (रात 11:00 बजे तक)"),
            ("फॉर्म सुधार विंडो (Correction Window)", "28 जुलाई से 29 जुलाई 2026"),
            ("टियर-1 परीक्षा तिथि (Tier-1 CBT Exam Date)", "09 सितंबर से 26 सितंबर 2026"),
            ("टियर-1 एडमिट कार्ड (Admit Card Release)", "परीक्षा से 4 दिन पहले"),
            ("टियर-2 परीक्षा तिथि (Tier-2 Exam Date)", "दिसंबर 2026 (संभावित)")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस पुरुष (UR / OBC / EWS Male)", "₹100/-"),
            ("महिलाएं (सभी वर्ग) (All Category Females)", "₹0/- (निःशुल्क Exempted)"),
            ("अनुसूचित जाति / जनजाति (SC / ST Candidates)", "₹0/- (निःशुल्क Exempted)"),
            ("दिव्यांगजन / भूतपूर्व सैनिक (PwD / ESM Candidates)", "₹0/- (निःशुल्क Exempted)"),
            ("प्रथम बार फॉर्म सुधार शुल्क (1st Time Correction Fee)", "₹200/-"),
            ("द्वितीय बार फॉर्म सुधार शुल्क (2nd Time Correction Fee)", "₹500/-"),
            ("भुगतान के माध्यम (Payment Modes)", "UPI, नेट बैंकिंग, डेबिट/क्रेडिट कार्ड, SBI ई-चालान")
        ],
        "age_relaxations": [
            ("अन्य पिछड़ा वर्ग (OBC - Non Creamy Layer)", "3 वर्ष की छूट (Upper Age 35 Years तक)"),
            ("अनुसूचित जाति / जनजाति (SC / ST)", "5 वर्ष की छूट (Upper Age 37 Years तक)"),
            ("दिव्यांगजन - अनारक्षित (PwBD - Unreserved)", "10 वर्ष की छूट (Upper Age 42 Years तक)"),
            ("दिव्यांगजन - ओबीसी (PwBD - OBC)", "13 वर्ष की छूट (Upper Age 45 Years तक)"),
            ("दिव्यांगजन - एससी/एसटी (PwBD - SC/ST)", "15 वर्ष की छूट (Upper Age 47 Years तक)"),
            ("भूतपूर्व सैनिक (Ex-Servicemen - ESM)", "सैन्य सेवा अवधि घटाने के बाद 3 वर्ष की छूट")
        ],
        "posts_table": [
            ("Assistant Audit Officer (AAO) / Accounts Officer", "CAG (Indian Audit & Accounts Dept)", "Group B Gazetted", "Level 8 (₹47,600 – ₹1,51,100)", "₹88,000+", "Graduation (Desirable: CA/CMA/M.Com)"),
            ("Assistant Section Officer (ASO)", "CSS / MEA / IB / MoD (AFHQ) / Railway", "Group B Non-Gazetted", "Level 7 (₹44,900 – ₹1,42,400)", "₹82,000+", "Bachelor's Degree in Any Stream"),
            ("Inspector of Income Tax", "CBDT (Department of Revenue)", "Group C / B", "Level 7 (₹44,900 – ₹1,42,400)", "₹82,000+", "Bachelor's Degree in Any Stream"),
            ("Inspector (Central Excise / GST)", "CBIC (Department of Revenue)", "Group B Non-Gazetted", "Level 7 (₹44,900 – ₹1,42,400)", "₹82,000+", "Bachelor's Degree + Physical Test"),
            ("Preventive Officer / Examiner", "Customs (CBIC)", "Group B Non-Gazetted", "Level 7 (₹44,900 – ₹1,42,400)", "₹82,000+", "Bachelor's Degree in Any Stream"),
            ("Sub-Inspector (SI)", "Central Bureau of Investigation (CBI)", "Group B Non-Gazetted", "Level 7 (₹44,900 – ₹1,42,400)", "₹82,000+", "Bachelor's Degree + Physical Standards"),
            ("Divisional Accountant", "Offices under CAG", "Group B Non-Gazetted", "Level 6 (₹35,400 – ₹1,12,400)", "₹64,000+", "Bachelor's Degree in Any Stream"),
            ("Junior Statistical Officer (JSO)", "MoSPI (Statistics Dept)", "Group B Non-Gazetted", "Level 6 (₹35,400 – ₹1,12,400)", "₹64,000+", "Graduation + 60% in Maths (12th) or Stats"),
            ("Auditor / Accountant", "CAG / CGDA / CGA Offices", "Group C", "Level 5 (₹29,200 – ₹92,300)", "₹52,000+", "Bachelor's Degree in Any Stream"),
            ("Tax Assistant (TA)", "CBDT / CBIC", "Group C", "Level 4 (₹25,500 – ₹81,100)", "₹45,000+", "Bachelor's Degree + 8,000 KDPH Typing")
        ],
        "exam_pattern": {
            "tier1": [
                ("General Intelligence & Reasoning", "25", "50", "0.50 Negative Mark"),
                ("General Awareness (GK/Current Affairs)", "25", "50", "0.50 Negative Mark"),
                ("Quantitative Aptitude (Mathematics)", "25", "50", "0.50 Negative Mark"),
                ("English Comprehension", "25", "50", "0.50 Negative Mark"),
                ("कुल योग (Tier-1 Total)", "100 Questions", "200 Marks", "कुल समय: 60 मिनट (1 घंटा)")
            ],
            "tier2": [
                ("Session 1: Section I (Maths 30 Qs + Reasoning 30 Qs)", "60 Qs", "180 Marks (3 Marks/Q)", "1 घंटा (Negative: 1 Mark)"),
                ("Session 1: Section II (English 45 Qs + GA 25 Qs)", "70 Qs", "210 Marks (3 Marks/Q)", "1 घंटा (Negative: 1 Mark)"),
                ("Session 1: Section III (Computer Knowledge Module)", "20 Qs", "60 Marks", "15 मिनट (Qualifying in Nature)"),
                ("Session 2: Data Entry Speed Test (DEST Module)", "1 Data Entry Task", "2,000 Key Depressions", "15 मिनट (Qualifying in Nature)")
            ]
        },
        "problems": [
            ("1. SSC नए पोर्टल (ssc.gov.in) पर लाइव वेबकैम फोटो कैप्चर में एरर का समाधान", "एसएससी के नए पोर्टल पर पहले से खींची गई फोटो अपलोड नहीं होती, बल्कि मोबाइल या लैपटॉप कैमरे से 'Live Webcam Photo' लेना अनिवार्य है। कैप्चर करते समय सादे सफेद बैकग्राउंड के सामने बैठें, चेहरे पर पर्याप्त रोशनी रखें, टोपी/चश्मा हटा लें और मोबाइल ब्राउज़र को कैमरा परमिशन दें।"),
            ("2. आवेदन शुल्क खाते से कट गया लेकिन स्टेटस 'Incomplete / Pending' दिखा रहा है", "नेटवर्क समस्या के कारण बैंक से राशि कटने पर भी पोर्टल पर अपडेट होने में 24 से 48 घंटे का समय लगता है। तुरंत दोबारा भुगतान न करें। अपने क्रेडेंशियल्स से लॉगिन करके 'Double Verification of Payment' लिंक पर क्लिक करें, शुल्क स्वतः सत्यापित हो जाएगा।"),
            ("3. फॉर्म सबमिट करने के बाद नाम, जन्मतिथि या श्रेणी में हुई गलती को कैसे सुधारें", "एसएससी आवेदन की अंतिम तिथि समाप्त होने के बाद 2 दिनों के लिए 'Application Form Correction Window' खोलता है। इस विंडो में ₹200 का सुधार शुल्क देकर आप व्यक्तिगत विवरण, परीक्षा केंद्र और पद वरीयता में पूर्ण संशोधन कर सकते हैं।"),
            ("4. ओबीसी-एनसीएल (OBC-NCL) और ईडब्ल्यूएस (EWS) सर्टिफिकेट की क्रूशियल डेट (Crucial Date) नियम", "एसएससी नियमों के अनुसार ओबीसी और ईडब्ल्यूएस प्रमाण पत्र आवेदन की अंतिम तिथि (Crucial Date) से पूर्व का बना होना चाहिए। ईडब्ल्यूएस सर्टिफिकेट वर्तमान वित्तीय वर्ष (Income Year 2025-2026 / Valid for 2026-2027) का होना अनिवार्य है।"),
            ("5. वन टाइम रजिस्ट्रेशन (OTR) का रजिस्ट्रेशन नंबर या पासवर्ड भूल जाने पर रिकवरी", "ssc.gov.in पर 'Forgot Password' पर क्लिक करें। अपना पंजीकृत मोबाइल नंबर या ईमेल आईडी और 10वीं कक्षा का रोल नंबर व जन्मतिथि दर्ज करें। आपके मोबाइल पर ओटीपी प्राप्त होगा, जिसके माध्यम से नया पासवर्ड तुरंत रीसेट हो जाएगा।"),
            ("6. सिग्नेचर (Signature) अपलोड में साइज व डाइमेंशन रिजेक्शन का समाधान", "हस्ताक्षर का आकार 10 KB से 20 KB के बीच और आयाम 4.0 सेमी चौड़ाई x 2.0 सेमी ऊंचाई होना चाहिए। यदि फाइल बड़ी है तो हमारे मुफ्त टूल [tools/signature-resizer.html](../tools/signature-resizer.html) का उपयोग करके तुरंत सही साइज में कन्वर्ट करें।")
        ],
        "faqs": [
            ("क्या ग्रेजुएशन के अंतिम वर्ष (Final Year) के छात्र SSC CGL 2026 के लिए आवेदन कर सकते हैं?", "हाँ, वे उम्मीदवार जो स्नातक के अंतिम वर्ष/सेमेस्टर में हैं, आवेदन कर सकते हैं बशर्ते वे अधिसूचना में उल्लिखित क्रूशियल कट-ऑफ तिथि (01 अगस्त 2026) तक अपनी डिग्री या प्रोविजनल पासिंग सर्टिफिकेट प्राप्त कर लें।"),
            ("क्या एसएससी सीजीएल भर्ती में इंटरव्यू (Interview) होता है? ", "नहीं, भारत सरकार द्वारा ग्रुप बी और ग्रुप सी के सभी अराजपत्रित पदों के लिए साक्षात्कार समाप्त कर दिया गया है। अंतिम चयन पूरी तरह से टियर-2 परीक्षा में प्राप्त अंकों और कंप्यूटर/टाइपिंग क्वालीफाइंग मेरिट पर आधारित होता है।"),
            ("टियर-1 परीक्षा में नेगेटिव मार्किंग कितनी होती है?", "टियर-1 परीक्षा में प्रत्येक गलत उत्तर के लिए 0.50 अंक (1/4th) की नेगेटिव मार्किंग काटी जाती है। प्रत्येक सही उत्तर के लिए 2 अंक दिए जाते हैं।"),
            ("टियर-2 परीक्षा में नेगेटिव मार्किंग का नियम क्या है?", "टियर-2 के सेक्शन-I, सेक्शन-II और सेक्शन-III में प्रत्येक गलत उत्तर पर 1 अंक (3 में से 1 अंक यानी 33.33%) काटा जाता है।"),
            ("क्या कंप्यूटर नॉलेज टेस्ट (Module) और टाइपिंग (DEST) सभी पदों के लिए अनिवार्य है?", "हाँ, टियर-2 में कंप्यूटर प्रोफिशिएंसी और डेटा एंट्री स्पीड टेस्ट (DEST) सभी उम्मीदवारों के लिए अनिवार्य और क्वालिफाइंग है। हालांकि ASO, Tax Assistant और Inspector पदों के लिए कंप्यूटर में उच्च कट-ऑफ निर्धारित की जाती है।"),
            ("एसएससी सीजीएल में सबसे अधिक वेतन और पावर वाला पद कौन सा है?", "असिस्टेंट ऑडिट ऑफिसर (AAO) पे लेवल 8 (₹47,600 बेसिक) का एकमात्र गजेटेड पद है। इसके अलावा असिस्टेंट सेक्शन ऑफिसर (ASO MEA/CSS) और इनकम टैक्स इंस्पेक्टर / एक्साइज इंस्पेक्टर सबसे लोकप्रिय और प्रतिष्ठित पद हैं।"),
            ("क्या इस भर्ती में महिलाओं को आवेदन शुल्क से छूट प्राप्त है?", "हाँ, केंद्र सरकार के नियमों के अनुसार सभी श्रेणियों (सामान्य, ईडब्ल्यूएस, ओबीसी, एससी, एसटी) की महिला अभ्यर्थियों के लिए आवेदन शुल्क पूर्णतः 100% निःशुल्क (₹0) है।"),
            ("चयन के बाद पोस्टिंग किस आधार पर मिलती है?", "अंतिम चयन के बाद उम्मीदवारों की टियर-2 ऑल इंडिया रैंक (AIR), श्रेणी और विभाग द्वारा मांगी गई स्टेट प्रेफरेंस (State Preference Option Form) के आधार पर पूरे भारत के मंत्रालयों/राज्यों में पदस्थापना दी जाती है।"),
            ("क्या नई पेंशन योजना (UPS / NPS) एसएससी सीजीएल पदों पर लागू है?", "हाँ, केंद्र सरकार के सभी नवनियुक्त कर्मचारियों को Unified Pension Scheme (UPS) या National Pension System (NPS) के तहत पेंशन व सामाजिक सुरक्षा लाभ प्राप्त होते हैं।"),
            ("एसएससी सीजीएल परीक्षा की तैयारी के लिए सबसे उपयोगी टूल्स कौन से हैं?", "अपनी टाइपिंग स्पीड जांचने के लिए हमारे [Typing Speed Test](../tools/typing-speed-test.html), फोटो रिसाइज करने के लिए [Photo Resizer](../tools/photo-resizer.html) और इन-हैंड सैलरी गणना के लिए [7th Pay Calculator](../7th-pay-commission-calculator.html) का उपयोग करें।")
        ]
    },
    "ssc-mts-havaldar-recruitment-2026.html": {
        "slug": "ssc-mts-havaldar-recruitment-2026",
        "aliases": [],
        "sector": "SSC",
        "sector_color": "#2563eb",
        "org_en": "Staff Selection Commission (SSC)",
        "org_hi": "कर्मचारी चयन आयोग (एसएससी)",
        "post_name_en": "Multi-Tasking (Non-Technical) Staff & Havaldar (CBIC/CBN) 2026",
        "post_name_hi": "मल्टी टास्किंग स्टाफ (एमटीएस) व हवलदार (सीबीआईसी/सीबीएन) भर्ती 2026",
        "title_en": "SSC MTS & Havaldar Recruitment 2026: 9,583 Vacancies, Apply Online, 10th Pass Job",
        "title_hi": "एसएससी एमटीएस व हवलदार भर्ती 2026: 9,583 पद, 10वीं पास हेतु बंपर भर्ती, आवेदन करें",
        "desc_en": "SSC MTS & Havaldar 2026 Notification for 9,583 Posts: Check 10th pass qualification, 7th CPC Level 1 salary, exam dates, PET/PST standards & apply online at ssc.gov.in.",
        "desc_hi": "एसएससी एमटीएस व हवलदार भर्ती 2026: 9,583 पदों पर 10वीं पास के लिए भर्ती। सैलरी, परीक्षा पैटर्न, शारीरिक मापदंड व ssc.gov.in पर ऑनलाइन आवेदन प्रक्रिया की पूरी जानकारी।",
        "vacancies": "9,583 Posts (MTS: 6,144 + Havaldar: 3,439)",
        "qualification_en": "10th Class (Matriculation) Pass from any recognized Board in India",
        "qualification_hi": "भारत में किसी भी मान्यता प्राप्त बोर्ड से 10वीं कक्षा (मैट्रिक) उत्तीर्ण",
        "age_limit": "18 to 25 Years (MTS) & 18 to 27 Years (Havaldar & Specific Posts)",
        "salary": "₹18,000 – ₹56,900 (Pay Level 1) | In-Hand: ₹28,000 – ₹34,000/month",
        "job_location": "All India (Central Government Offices & GST/Customs Commissionerates)",
        "official_portal": "https://ssc.gov.in",
        "apply_link": "https://ssc.gov.in/portal/login",
        "notification_link": "https://ssc.gov.in",
        "date_posted": "2026-06-27",
        "valid_through": "2026-07-31T23:00",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Released)", "27 जून 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "27 जून 2026"),
            ("ऑनलाइन आवेदन की अंतिम तिथि (Last Date to Apply)", "31 जुलाई 2026 (रात 11:00 बजे)"),
            ("ऑनलाइन फीस भुगतान अंतिम तिथि (Fee Last Date)", "01 अगस्त 2026 (रात 11:00 बजे)"),
            ("फॉर्म करेक्शन विंडो (Application Correction Window)", "03 अगस्त से 04 अगस्त 2026"),
            ("कंप्यूटर आधारित परीक्षा (CBT Exam Date)", "अक्टूबर – नवंबर 2026"),
            ("हवलदार शारीरिक दक्षता व मानक (PET / PST)", "दिसंबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस पुरुष (UR / OBC / EWS Male)", "₹100/-"),
            ("महिलाएं (सभी वर्ग) (All Category Females)", "₹0/- (निःशुल्क Exempted)"),
            ("अनुसूचित जाति / जनजाति (SC / ST Candidates)", "₹0/- (निःशुल्क Exempted)"),
            ("दिव्यांगजन / भूतपूर्व सैनिक (PwD / ESM Candidates)", "₹0/- (निःशुल्क Exempted)"),
            ("फॉर्म सुधार शुल्क (1st Time Correction Fee)", "₹200/-")
        ],
        "age_relaxations": [
            ("ओबीसी (Non-Creamy Layer)", "3 वर्ष की छूट (Upper Age 28/30 Years तक)"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष की छूट (Upper Age 30/32 Years तक)"),
            ("दिव्यांगजन (PwBD - Unreserved)", "10 वर्ष की छूट"),
            ("दिव्यांगजन (PwBD - SC/ST)", "15 वर्ष की छूट"),
            ("भूतपूर्व सैनिक (Ex-Servicemen)", "सैन्य सेवा घटाकर 3 वर्ष")
        ],
        "posts_table": [
            ("Multi-Tasking Staff (MTS - Non-Technical)", "All Ministries & Central Departments", "Group C", "Level 1 (₹18,000 – ₹56,900)", "₹30,000+", "10th Pass (Matriculation)"),
            ("Havaldar (CBIC - Central Excise & Customs)", "CBIC (Revenue Dept)", "Group C", "Level 1 (₹18,000 – ₹56,900)", "₹32,000+", "10th Pass + PET (Walking 1600m in 15 mins)"),
            ("Havaldar (CBN - Central Bureau of Narcotics)", "Central Bureau of Narcotics (Gwalior/Lucknow)", "Group C", "Level 1 (₹18,000 – ₹56,900)", "₹32,000+", "10th Pass + Physical Standards")
        ],
        "exam_pattern": {
            "tier1": [
                ("Session-I: Numerical & Mathematical Ability", "20 Qs", "60 Marks", "45 मिनट (कोई नेगेटिव मार्किंग नहीं)"),
                ("Session-I: Reasoning Ability & Problem Solving", "20 Qs", "60 Marks", "45 मिनट (कोई नेगेटिव मार्किंग नहीं)"),
                ("Session-II: General Awareness (GK & Current Affairs)", "25 Qs", "75 Marks", "45 मिनट (Negative: 1 Mark per wrong Q)"),
                ("Session-II: English Language & Comprehension", "25 Qs", "75 Marks", "45 मिनट (Negative: 1 Mark per wrong Q)")
            ],
            "tier2": [
                ("हवलदार शारीरिक दक्षता (PET)", "Walking: पुरुष - 1600 मीटर 15 मिनट में | महिला - 1 किमी 20 मिनट में", "Qualifying", "कोई अंक नहीं"),
                ("हवलदार शारीरिक मानक (PST)", "ऊंचाई: पुरुष - 157.5 सेमी (सीना 81-86 सेमी) | महिला - 152 सेमी (वजन 48 किग्रा)", "Qualifying", "मानक अनिवार्य")
            ]
        },
        "problems": [
            ("1. सेशन-1 और सेशन-2 में नेगेटिव मार्किंग का अंतर समझना", "एसएससी एमटीएस में सेशन-1 (मैथ्स और रीजनिंग) केवल क्वालिफाइंग है और इसमें कोई नेगेटिव मार्किंग नहीं होती। लेकिन सेशन-2 (जीके और इंग्लिश) के आधार पर ही फाइनल मेरिट बनती है और इसमें प्रत्येक गलत उत्तर पर 1 अंक काटा जाता है।"),
            ("2. हवलदार पद के लिए शारीरिक मापदंड (PST) में छूट के नियम", "गढ़वाली, कुमाऊंनी, गोरखा, असमिया और एसटी वर्ग के पुरुष उम्मीदवारों को ऊंचाई में 5 सेमी और महिलाओं को 2.5 सेमी की छूट दी जाती है।"),
            ("3. राज्य वरीयता (State Preference Code) भरने में सावधानी", "आवेदन करते समय सभी राज्यों के कोड (जैसे 11, 12, 72 All India) अवश्य भरें। यदि आप केवल 1-2 राज्य भरते हैं और कट-ऑफ अधिक जाती है तो अन्य राज्यों में चयनित होने का अवसर समाप्त हो जाता है।"),
            ("4. 10वीं मार्कशीट में जन्मतिथि या स्पेलिंग त्रुटि", "आवेदन भरते समय हमेशा 10वीं के मूल प्रमाण पत्र के अनुसार ही नाम व डीओबी भरें। यदि आधार में अलग है तो आधार को 10वीं के अनुसार सही करवाएं।"),
            ("5. फोटो में चश्मा या कैप पहनने पर फॉर्म निरस्त होना", "एसएससी नियमों के अनुसार लाइव फोटो में चश्मा, टोपी, मफलर या मास्क पूर्णतः प्रतिबंधित है। दोनों कान स्पष्ट दिखने चाहिए।"),
            ("6. क्या एमटीएस में टाइपिंग टेस्ट या स्किल टेस्ट होता है?", "नहीं, एसएससी एमटीएस पदों के लिए कोई टाइपिंग टेस्ट, डिस्क्रिप्टिव पेपर या इंटरव्यू नहीं होता। चयन केवल कंप्यूटर परीक्षा (सेशन-2) की मेरिट पर होता है।")
        ],
        "faqs": [
            ("क्या 10वीं में ग्रेस मार्क्स से पास छात्र SSC MTS के लिए आवेदन कर सकते हैं?", "हाँ, किसी भी मान्यता प्राप्त बोर्ड से न्यूनतम 10वीं पास होना पर्याप्त है, चाहे प्राप्त अंक कितने भी हों।"),
            ("एसएससी एमटीएस परीक्षा कितनी भाषाओं में आयोजित होती है?", "यह परीक्षा हिंदी और अंग्रेजी के अलावा 13 क्षेत्रीय भाषाओं (मराठी, गुजराती, बंगाली, तमिल, तेलुगु, पंजाबी आदि) में आयोजित की जाती है।"),
            ("एमटीएस कर्मचारी का कार्य क्या होता है?", "कार्यालय फाइलों का रखरखाव, डाक वितरण, फोटोकॉपी, कंप्यूटर डेटा एंट्री में सहयोग और सामान्य प्रशासनिक सहायता।"),
            ("क्या हवलदार पद के लिए दौड़ना (Running) पड़ता है?", "नहीं, हवलदार के लिए केवल वॉकिंग (Walking) है: पुरुषों को 1600 मीटर 15 मिनट में और महिलाओं को 1 किलोमीटर 20 मिनट में पैदल चलना होता है।"),
            ("एमटीएस में प्रमोशन के क्या अवसर हैं?", "विभागीय विभागीय परीक्षाओं (LDCE) के माध्यम से एमटीएस कर्मचारी 3 वर्ष बाद LDC/Junior Secretariat Assistant और 5 वर्ष बाद UDC/Tax Assistant बन सकते हैं।"),
            ("क्या महिला अभ्यर्थी हवलदार पद के लिए पात्र हैं?", "हाँ, महिलाएं भी हवलदार (CBIC & CBN) और एमटीएस दोनों पदों के लिए पूर्णतः पात्र हैं।"),
            ("एसएससी एमटीएस में इन-हैंड शुरुआती सैलरी कितनी मिलती है?", "एक्स-सिटी (दिल्ली/मुंबई) में इन-हैंड सैलरी लगभग ₹32,000 से ₹34,000 प्रति माह मिलती है।"),
            ("क्या एमटीएस पदों पर ऑल इंडिया ट्रांसफर होता है?", "अधिकांश पद जोनल/रीजनल कैडर के होते हैं, जहां उसी राज्य या जोन में पदस्थापना मिलती है।"),
            ("परीक्षा केंद्र (Exam Centre) कैसे आवंटित होते हैं?", "आवेदन फॉर्म में चुने गए 3 क्षेत्रीय वरीयताओं (Exam Centre Preferences) में से प्रथम वरीयता का केंद्र आवंटित किया जाता है।"),
            ("तैयारी के लिए कौन सा फ्री टूल उपयोगी है?", "फोटो रिसाइज करने के लिए हमारे [Photo Resizer](../tools/photo-resizer.html) और आयु गणना हेतु [Exam Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "upsc-civil-services-ias-ifs-2027.html": {
        "slug": "upsc-civil-services-ias-ifs-2027",
        "aliases": ["upsc-cse-recruitment-2027.html"],
        "sector": "UPSC",
        "sector_color": "#1e3a8a",
        "org_en": "Union Public Service Commission (UPSC)",
        "org_hi": "संघ लोक सेवा आयोग (यूपीएससी)",
        "post_name_en": "Civil Services Examination (CSE) 2027 - IAS, IPS, IFS & IRS",
        "post_name_hi": "सिविल सेवा परीक्षा (सीएसई) 2027 - आईएएस, आईपीएस, आईएफएस व आईआरएस",
        "title_en": "UPSC Civil Services IAS/IPS/IFS Recruitment 2027: 1,100+ Posts, Notification & Apply",
        "title_hi": "यूपीएससी सिविल सेवा (IAS/IPS/IFS) भर्ती 2027: 1,100+ पद, नोटिफिकेशन, सिलेबस व आवेदन",
        "desc_en": "UPSC CSE 2027 Notification for 1,100+ IAS, IPS, IFS, IRS Posts. Check eligibility, Prelims & Mains exam pattern, 7th CPC Level 10 pay scale, OTR guide & apply online at upsc.gov.in.",
        "desc_hi": "यूपीएससी सिविल सेवा परीक्षा 2027 अधिसूचना: 1,100+ आईएएस, आईपीएस, आईएफएस पद। योग्यता, प्रारंभिक व मुख्य परीक्षा पैटर्न, सैलरी व upsconline.nic.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "1,100+ Tentative Posts",
        "qualification_en": "Bachelor's Degree in Any Discipline from a recognized University in India",
        "qualification_hi": "भारत में किसी भी मान्यता प्राप्त विश्वविद्यालय से किसी भी संकाय में स्नातक (Graduation) डिग्री",
        "age_limit": "21 to 32 Years (as on 01.08.2027) | General: 6 attempts, OBC: 9 attempts, SC/ST: Unlimited",
        "salary": "₹56,100 – ₹2,50,000 (Pay Level 10 to 18) | In-Hand: ₹75,000 – ₹2,20,000/month",
        "job_location": "All India (Cadre Allocated Central & All India Services)",
        "official_portal": "https://upsc.gov.in",
        "apply_link": "https://upsconline.nic.in",
        "notification_link": "https://upsc.gov.in",
        "date_posted": "2027-01-20",
        "valid_through": "2027-02-16T18:00",
        "dates": [
            ("अधिसूचना जारी होने की तिथि (Notification Date)", "20 जनवरी 2027"),
            ("ऑनलाइन आवेदन शुरू (Apply Online Start)", "20 जनवरी 2027"),
            ("आवेदन की अंतिम तिथि (Last Date to Apply)", "16 फरवरी 2027 (शाम 06:00 बजे तक)"),
            ("आवेदन सुधार विंडो (OTR Correction Window)", "17 फरवरी से 23 फरवरी 2027"),
            ("सीएसई प्रारंभिक परीक्षा (CSE Prelims Exam Date)", "23 मई 2027"),
            ("प्रारंभिक परीक्षा परिणाम (Prelims Result)", "जून 2027"),
            ("सीएसई मुख्य परीक्षा (CSE Mains Exam Date)", "17 सितंबर 2027 से (5 दिन)")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस पुरुष (UR / OBC / EWS Male)", "₹100/-"),
            ("महिलाएं (सभी वर्ग) (All Female Candidates)", "₹0/- (निःशुल्क)"),
            ("अनुसूचित जाति / जनजाति (SC / ST Candidates)", "₹0/- (निःशुल्क)"),
            ("दिव्यांगजन (PwBD Candidates)", "₹0/- (निःशुल्क)"),
            ("मुख्य परीक्षा शुल्क (Mains Exam Fee for Gen/OBC)", "₹200/-")
        ],
        "age_relaxations": [
            ("ओबीसी (OBC - Non Creamy Layer)", "3 वर्ष की छूट (Upper Age 35 वर्ष / 9 Attempts)"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष की छूट (Upper Age 37 वर्ष / Unlimited Attempts)"),
            ("दिव्यांगजन (PwBD)", "10 वर्ष की छूट (Upper Age 42 वर्ष / 9 Attempts for Gen/OBC, Unlimited for SC/ST)"),
            ("रक्षा सेवा कर्मी (Defence Personnel disabled in operations)", "3 वर्ष की छूट"),
            ("भूतपूर्व सैनिक (Ex-Servicemen ECOs/SSCOs)", "5 वर्ष की छूट")
        ],
        "posts_table": [
            ("Indian Administrative Service (IAS)", "All India Service (DoPT)", "Group A", "Level 10 (₹56,100 – ₹2,50,000)", "₹85,000+", "Graduation in Any Stream"),
            ("Indian Police Service (IPS)", "All India Service (Ministry of Home Affairs)", "Group A", "Level 10 (₹56,100 – ₹2,25,000)", "₹85,000+", "Graduation + Physical Standards"),
            ("Indian Foreign Service (IFS)", "Ministry of External Affairs (MEA)", "Group A", "Level 10 (₹56,100 + Foreign Allowance)", "₹1,50,000+ (Abroad)", "Graduation in Any Stream"),
            ("Indian Revenue Service (IRS - IT & Customs)", "Ministry of Finance (CBDT / CBIC)", "Group A", "Level 10 (₹56,100 – ₹1,77,500)", "₹80,000+", "Graduation in Any Stream"),
            ("Indian Audit & Accounts Service (IA&AS)", "Comptroller & Auditor General (CAG)", "Group A", "Level 10 (₹56,100 – ₹1,77,500)", "₹80,000+", "Graduation in Any Stream"),
            ("DANICS & DANIPS", "Ministry of Home Affairs (UT Administration)", "Group B", "Level 8 / 10", "₹70,000+", "Graduation in Any Stream")
        ],
        "exam_pattern": {
            "tier1": [
                ("Prelims Paper-I: General Studies (GS)", "100 Qs", "200 Marks", "2 घंटे (0.66 Negative Marking - मेरिट बनती है)"),
                ("Prelims Paper-II: CSAT (Aptitude/Comprehension)", "80 Qs", "200 Marks", "2 घंटे (33% यानी 66 अंक क्वालिफाइंग अनिवार्य)")
            ],
            "tier2": [
                ("Mains Paper A & B: Compulsory Indian Language & English", "2 Papers", "300 + 300 Marks", "3-3 घंटे (25% Qualifying Marks)"),
                ("Mains Merit Papers: Essay + GS I, II, III, IV + Optional (2 Papers)", "7 Papers", "1,750 Marks Total", "प्रत्येक पेपर 250 अंक (3 घंटे)"),
                ("Personality Test (Interview Stage)", "1 Stage", "275 Marks", "कुल ग्रैंड टोटल: 2,025 अंक")
            ]
        },
        "problems": [
            ("1. UPSC OTR (One Time Registration) में जन्मतिथि व नाम की त्रुटि सुधार", "यूपीएससी OTR में जीवन में केवल एक बार सुधार की अनुमति मिलती है। यदि OTR में गलती है, तो आवेदन फॉर्म की करेक्शन विंडो के दौरान OTR प्रोफाइल में आवश्यक सुधार करें।"),
            ("2. CSAT पेपर-2 में 33% क्वालीफाइंग नियम", "प्रारंभिक परीक्षा में यदि आप जीएस पेपर-1 में 150 अंक भी प्राप्त करते हैं लेकिन CSAT में 66 अंक (33%) नहीं आते, तो आपकी जीएस-1 की ओएमआर शीट खारिज मानी जाती है।"),
            ("3. ईडब्ल्यूएस और ओबीसी-एनसीएल सर्टिफिकेट का वित्तीय वर्ष", "यूपीएससी ईडब्ल्यूएस सर्टिफिकेट फॉर्म भरने के वित्तीय वर्ष से ठीक पहले के वित्तीय वर्ष (2025-26) की आय पर आधारित और आवेदन वर्ष के लिए वैध होना अनिवार्य है।"),
            ("4. फोटो में नाम व तारीख (Date of Photo) अंकित करने का नियम", "यूपीएससी अधिसूचना के अनुसार अपलोड की गई फोटो 10 दिन से अधिक पुरानी नहीं होनी चाहिए और फोटो के नीचे अभ्यर्थी का नाम व फोटो खींचने की तारीख स्पष्ट लिखी होनी चाहिए।"),
            ("5. अटेम्प्ट्स (Attempts) की गणना का नियम", "यदि अभ्यर्थी प्रारंभिक परीक्षा के किसी एक भी पेपर (Paper-I) में उपस्थित होता है, तो उसका एक आधिकारिक अटेम्प्ट गिना जाता है। केवल फॉर्म भरने से अटेम्प्ट नहीं कटता।"),
            ("6. परीक्षा केंद्र आवंटन 'First Apply, First Allot' नियम", "यूपीएससी में परीक्षा केंद्र 'पहले आओ, पहले पाओ' के आधार पर आवंटित होते हैं। अपने पसंदीदा शहर का सेंटर पाने के लिए शुरुआती दिनों में ही आवेदन जमा करें।")
        ],
        "faqs": [
            ("क्या हिंदी माध्यम के छात्र UPSC IAS में टॉप कर सकते हैं?", "हाँ, मुख्य परीक्षा और साक्षात्कार दोनों हिंदी व भारतीय संविधान की 8वीं अनुसूची में शामिल किसी भी क्षेत्रीय भाषा में दिए जा सकते हैं।"),
            ("आईएएस बनने के लिए ग्रेजुएशन में कितने प्रतिशत अंक चाहिए?", "केवल स्नातक उत्तीर्ण होना अनिवार्य है। न्यूनतम 33% या पासिंग मार्क्स वाले अभ्यर्थी भी समान रूप से पात्र हैं।"),
            ("आईपीएस के लिए न्यूनतम शारीरिक मापदंड क्या हैं?", "पुरुषों के लिए न्यूनतम ऊंचाई 165 सेमी (एसटी/गोरखा हेतु 160 सेमी) और महिलाओं के लिए 150 सेमी (एसटी हेतु 145 सेमी) अनिवार्य है।"),
            ("यूपीएससी सीएसई की तैयारी में कितना समय लगता है?", "सामान्यतः 12 से 18 महीने का समर्पित और योजनाबद्ध अध्ययन आवश्यक माना जाता है।"),
            ("क्या मेडिकल व इंजीनियरिंग छात्र सिविल सेवा परीक्षा दे सकते हैं?", "हाँ, एमबीबीएस, बीटेक, बीए, बीएससी, बीकॉम सभी स्नातक डिग्रीधारक पूर्ण रूप से पात्र हैं।"),
            ("आईएएस अधिकारी की पहली पोस्टिंग किस पद पर होती है?", "लबासना (LBSNAA) में 2 वर्ष के प्रशिक्षण के बाद प्रथम पदस्थापना सहायक कलेक्टर / सब-डिवीजनल मजिस्ट्रेट (SDM) के रूप में होती है।"),
            ("क्या प्रारंभिक परीक्षा के अंक अंतिम चयन में जुड़ते हैं?", "नहीं, प्रारंभिक परीक्षा केवल मुख्य परीक्षा में प्रवेश के लिए स्क्रीनिंग टेस्ट है। अंतिम मेरिट मेन्स (1750) + इंटरव्यू (275) = 2025 अंकों से बनती है।"),
            ("वैकल्पिक विषय (Optional Subject) कितने होते हैं?", "मुख्य परीक्षा में 1 वैकल्पिक विषय चुनना होता है, जिसके दो पेपर (Paper 1 & Paper 2) 250-250 अंकों के होते हैं।"),
            ("महिला अभ्यर्थियों के लिए आयु सीमा क्या है?", "महिला अभ्यर्थियों के लिए आयु सीमा श्रेणी के अनुसार 32 (General/EWS), 35 (OBC) और 37 वर्ष (SC/ST) होती है।"),
            ("फॉर्म भरने के लिए जरूरी टूल्स कौन से हैं?", "फोटो व सिग्नेचर रिसाइज हेतु [Govt Photo Resizer](../tools/photo-resizer.html) और आयु सीमा जांचने हेतु [Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "rrb-ntpc-recruitment-2026.html": {
        "slug": "rrb-ntpc-recruitment-2026",
        "aliases": ["rrb-ntpc-recruitment-2026-2027.html"],
        "sector": "Railway",
        "sector_color": "#dc2626",
        "org_en": "Railway Recruitment Boards (RRB - Ministry of Railways)",
        "org_hi": "रेलवे भर्ती बोर्ड (आरआरबी - रेल मंत्रालय)",
        "post_name_en": "Non-Technical Popular Categories (NTPC) Graduate & Under-Graduate 2026",
        "post_name_hi": "गैर-तकनीकी लोकप्रिय श्रेणियां (एनटीपीसी) स्नातक व 12वीं पास भर्ती 2026",
        "title_en": "RRB NTPC Recruitment 2026: 11,558 Vacancies, Apply Online, Station Master & Clerk Posts",
        "title_hi": "रेलवे आरआरबी एनटीपीसी भर्ती 2026: 11,558 पद, स्टेशन मास्टर, ट्रेन मैनेजर व क्लर्क भर्ती",
        "desc_en": "RRB NTPC 2026 Notification for 11,558 Posts (CEN 05/2026 & CEN 06/2026): Station Master, Goods Train Manager, Junior Clerk. Check syllabus, salary, dates & apply at rrbapply.gov.in.",
        "desc_hi": "आरआरबी एनटीपीसी भर्ती 2026: 11,558 पदों (स्टेशन मास्टर, ट्रेन मैनेजर, क्लर्क) पर बंपर भर्ती। वेतन, परीक्षा पैटर्न, CBT-1 व CBT-2 सिलेबस और rrbapply.gov.in पर ऑनलाइन आवेदन करें।",
        "vacancies": "11,558 Posts (Graduate: 8,110 + 12th Under-Graduate: 3,448)",
        "qualification_en": "12th Pass for UG Posts | Bachelor's Degree in Any Stream for Graduate Posts",
        "qualification_hi": "12वीं पास (अंडरग्रेजुएट पदों हेतु) | किसी भी संकाय में स्नातक (ग्रेजुएट पदों हेतु)",
        "age_limit": "18 to 33 Years (12th Posts) & 18 to 36 Years (Graduate Posts) with 3-Yr COVID Relaxation",
        "salary": "₹19,900 – ₹35,400 (Level 2 to Level 6) | In-Hand: ₹32,000 – ₹62,000/month",
        "job_location": "All India (All 21 Railway Zones across Indian Railways)",
        "official_portal": "https://rrbapply.gov.in",
        "apply_link": "https://rrbapply.gov.in/#/auth/landing",
        "notification_link": "https://rrbapply.gov.in",
        "date_posted": "2026-09-14",
        "valid_through": "2026-10-20T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Released)", "14 सितंबर 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "14 सितंबर 2026"),
            ("स्नातक पदों हेतु अंतिम तिथि (Graduate Posts Last Date)", "13 अक्टूबर 2026"),
            ("12वीं पदों हेतु अंतिम तिथि (12th Posts Last Date)", "20 अक्टूबर 2026"),
            ("फॉर्म सुधार विंडो (Application Correction Window)", "21 अक्टूबर से 30 अक्टूबर 2026"),
            ("सीबीटी-1 परीक्षा तिथि (CBT-1 Exam Dates)", "दिसंबर 2026 – जनवरी 2027"),
            ("सीबीटी-2 परीक्षा तिथि (CBT-2 Exam Dates)", "मार्च – अप्रैल 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस पुरुष (UR / OBC / EWS)", "₹500/- (CBT-1 देने पर ₹400 बैंक खाते में रिफंड)"),
            ("महिला / एससी / एसटी / दिव्यांगजन / भूतपूर्व सैनिक", "₹250/- (CBT-1 देने पर पूरा ₹250 बैंक खाते में रिफंड)"),
            ("फॉर्म सुधार शुल्क (Modification Fee per time)", "₹250/- (Non-Refundable)")
        ],
        "age_relaxations": [
            ("ओबीसी (OBC - Non Creamy Layer)", "3 वर्ष की अतिरिक्त छूट"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष की अतिरिक्त छूट"),
            ("दिव्यांगजन (PwBD - UR)", "10 वर्ष की छूट"),
            ("रेलवे में कार्यरत नियमित कर्मचारी", "40 से 45 वर्ष की आयु तक छूट")
        ],
        "posts_table": [
            ("Station Master (स्टेशन मास्टर)", "Traffic Dept (Operating)", "Level 6 (₹35,400 – ₹1,12,400)", "₹62,000+", "Graduation + CBAT (Aptitude Test) + Medical A-2"),
            ("Goods Train Manager (ट्रेन मैनेजर - गार्ड)", "Operating Dept", "Level 5 (₹29,200 – ₹92,300)", "₹55,000+", "Graduation in Any Stream + Medical A-2"),
            ("Senior Commercial cum Ticket Clerk (SCTC)", "Commercial Dept", "Level 5 (₹29,200 – ₹92,300)", "₹52,000+", "Graduation in Any Stream + Medical B-2"),
            ("Senior Clerk cum Typist", "Personnel / Accounts Dept", "Level 5 (₹29,200 – ₹92,300)", "₹48,000+", "Graduation + English 30 wpm / Hindi 25 wpm Typing"),
            ("Junior Account Assistant cum Typist (JAAT)", "Accounts Dept", "Level 5 (₹29,200 – ₹92,300)", "₹48,000+", "Graduation in Any Stream + Typing Test"),
            ("Commercial cum Ticket Clerk (CC/TC)", "Commercial Dept", "Level 3 (₹21,700 – ₹69,100)", "₹38,000+", "12th Pass with min 50% Marks (SC/ST/PwD pass)"),
            ("Junior Clerk cum Typist", "General Administration", "Level 2 (₹19,900 – ₹63,200)", "₹34,000+", "12th Pass + Typing Test"),
            ("Accounts Clerk cum Typist", "Accounts Dept", "Level 2 (₹19,900 – ₹63,200)", "₹34,000+", "12th Pass with min 50% Marks + Typing Test"),
            ("Trains Clerk (TC)", "Operating Dept", "Level 2 (₹19,900 – ₹63,200)", "₹34,000+", "12th Pass with min 50% Marks + Medical A-3")
        ],
        "exam_pattern": {
            "tier1": [
                ("General Awareness (सामान्य ज्ञान व विज्ञान)", "40 Qs", "40 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("Mathematics (गणित)", "30 Qs", "30 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("General Intelligence & Reasoning (तर्कशक्ति)", "30 Qs", "30 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("कुल योग (CBT-1 Total)", "100 Questions", "100 Marks", "कुल समय: 90 मिनट (PwD हेतु 120 मिनट)")
            ],
            "tier2": [
                ("General Awareness (CBT-2)", "50 Qs", "50 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("Mathematics (CBT-2)", "35 Qs", "35 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("General Intelligence & Reasoning (CBT-2)", "35 Qs", "35 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("कुल योग (CBT-2 Total)", "120 Questions", "120 Marks", "कुल समय: 90 मिनट (मेरिट इसी से बनती है)")
            ]
        },
        "problems": [
            ("1. रेलवे भर्ती फीस रिफंड (Fee Refund) के लिए सही बैंक खाता विवरण", "रेलवे सीबीटी-1 में उपस्थित होने वाले छात्रों को ₹400 / ₹250 फीस वापस करता है। फॉर्म भरते समय अपना स्वयं का चालू बैंक खाता नंबर और सही IFSC कोड ही दर्ज करें, किसी साइबर कैफे का खाता न दें।"),
            ("2. स्टेशन मास्टर व ट्रेन मैनेजर के लिए A-2 मेडिकल मानक (Medical A-2 Standards)", "स्टेशन मास्टर व गुड्स ट्रेन मैनेजर पदों के लिए 6/9, 6/9 बिना चश्मे के दृष्टि (Distant Vision) और फॉग टेस्ट व कलर विजन टेस्ट पास करना अनिवार्य होता है। लेसिक (LASIK) सर्जरी अमान्य मानी जाती है।"),
            ("3. केवल एक आरआरबी (RRB Zone) का चयन करने का नियम", "एक अभ्यर्थी पूरे भारत में केवल किसी एक ही आरआरबी जोन (जैसे RRB Allahabad, RRB Mumbai, RRB Chandigarh आदि) से आवेदन कर सकता है। दो अलग-अलग जोनों से आवेदन करने पर दोनों फॉर्म स्वतः निरस्त हो जाते हैं।"),
            ("4. टाइपिंग स्किल टेस्ट (CBST) में बैकस्पेस और भाषा नियम", "टाइपिंग टेस्ट में इंग्लिश में 30 शब्द प्रति मिनट या हिंदी में (क्रुतिदेव / मंगल फॉन्ट) 25 शब्द प्रति मिनट गति आवश्यक है। केवल 5% गलतियां माफ होती हैं।"),
            ("5. स्टेशन मास्टर के लिए कंप्यूटर आधारित एप्टीट्यूड टेस्ट (CBAT)", "सीबीएटी साइको टेस्ट में 5 बैटरी टेस्ट होते हैं, जिनमें प्रत्येक बैटरी में न्यूनतम 42 T-स्कोर (क्वालीफाइंग) लाना अनिवार्य है। साइको टेस्ट के 30% अंक अंतिम मेरिट में जोड़े जाते हैं।"),
            ("6. फॉर्म में आरआरबी जोन या पद वरीयता (Post Preference) में बदलाव", "आरआरबी आवेदन की अंतिम तिथि के बाद आरआरबी जोन में बदलाव की अनुमति नहीं देता, लेकिन करेक्शन विंडो में ₹250 शुल्क देकर पद वरीयता सुधारी जा सकती है।")
        ],
        "faqs": [
            ("क्या 12वीं पास और ग्रेजुएट दोनों पदों के लिए एक साथ आवेदन किया जा सकता है?", "हाँ, यदि आप स्नातक हैं तो आप ग्रेजुएट (CEN 05/2026) और 12वीं अंडर-ग्रेजुएट (CEN 06/2026) दोनों के लिए अलग-अलग आवेदन कर सकते हैं।"),
            ("सीबीटी-1 और सीबीटी-2 में नेगेटिव मार्किंग कितनी होती है?", "रेलवे परीक्षाओं में प्रत्येक गलत उत्तर पर 1/3 (0.33) अंक की नेगेटिव मार्किंग काटी जाती है।"),
            ("रेलवे एनटीपीसी में नॉर्मलाइजेशन (Normalization) कैसे होता है?", "विभिन्न पालियों के प्रश्नपत्रों की कठिनाई के स्तर को बराबर करने के लिए रेलवे पर्सेंटाइल बेस्ड नॉर्मलाइजेशन (Percentile Score System) का उपयोग करता है।"),
            ("स्टेशन मास्टर का मासिक वेतन और भत्ते कितने होते हैं?", "स्टेशन मास्टर को पे लेवल 6 (बेसिक ₹35,400) के साथ रनिंग अलाउंस, नाइट ड्यूटी अलाउंस, एनडीए और एचआरए मिलाकर लगभग ₹58,000 से ₹65,000 प्रति माह मिलते हैं।"),
            ("क्या रेलवे कर्मचारियों को फ्री पास और मेडिकल सुविधा मिलती है?", "हाँ, रेलवे कर्मचारियों और उनके परिवार को भारत भर में रेल यात्रा हेतु निःशुल्क प्रिविलेज पास (PTO) और रेलवे अस्पतालों में कैशलेस उच्च स्तरीय चिकित्सा सुविधा (UMID Card) मिलती है।"),
            ("क्या टाइपिंग टेस्ट के अंक अंतिम मेरिट में जुड़ते हैं?", "नहीं, टाइपिंग टेस्ट केवल क्वालिफाइंग प्रकृति का होता है। अंतिम मेरिट सीबीटी-2 परीक्षा में 120 में से प्राप्त अंकों से बनती है।"),
            ("रेलवे में भर्ती होने के बाद स्थानांतरण (Transfer) का क्या नियम है?", "5 वर्ष की नियमित सेवा के बाद म्यूचुअल ट्रांसफर (Mutual Transfer) या इंटर-रेलवे ट्रांसफर के लिए आवेदन किया जा सकता है।"),
            ("रेलवे एनटीपीसी परीक्षा केंद्र कितनी दूरी पर आवंटित होते हैं?", "रेलवे बोर्ड द्वारा महिला और दिव्यांग अभ्यर्थियों को उनके गृह राज्य के 100 किमी के दायरे में तथा पुरुष अभ्यर्थियों को 500 किमी के रेल नेटवर्क के भीतर केंद्र आवंटित किए जाते हैं।"),
            ("क्या ई-कॉल लेटर डाक द्वारा घर भेजा जाता है?", "नहीं, एडमिट कार्ड केवल आधिकारिक वेबसाइट rrbapply.gov.in से परीक्षा तिथि से 4 दिन पहले ऑनलाइन डाउनलोड किया जाता है।"),
            ("तैयारी के लिए हमारे कौन से टूल्स काम आएंगे?", "टाइपिंग स्पीड जांचने के लिए [Typing Speed Test](../tools/typing-speed-test.html) और आयु सीमा जांचने हेतु [Exam Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "ibps-po-mt-xvi-recruitment-2026-4455-posts.html": {
        "slug": "ibps-po-mt-xvi-recruitment-2026-4455-posts",
        "aliases": ["ibps-po-mt-recruitment-2026.html"],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "Institute of Banking Personnel Selection (IBPS)",
        "org_hi": "बैंकिंग कार्मिक चयन संस्थान (आईबीपीएस)",
        "post_name_en": "Probationary Officer / Management Trainee (CRP PO/MT-XVI) 2026",
        "post_name_hi": "प्रोबेशनरी ऑफिसर / मैनेजमेंट ट्रेनी (सीआरपी पीओ/एमटी-XVI) भर्ती 2026",
        "title_en": "IBPS PO / MT-XVI Recruitment 2026: 4,455 Probationary Officer Vacancies in 11 Banks",
        "title_hi": "आईबीपीएस पीओ भर्ती 2026 (CRP PO/MT-XVI): 4,455 बैंक पीओ पद, ऑनलाइन आवेदन व सिलेबस",
        "desc_en": "IBPS PO XVI 2026 Notification for 4,455 Vacancies in 11 Public Sector Banks (PNB, BoB, Canara). Check Prelims & Mains pattern, in-hand salary, cutoff & apply at ibps.in.",
        "desc_hi": "आईबीपीएस पीओ भर्ती 2026: 11 सरकारी बैंकों में 4,455 प्रोबेशनरी ऑफिसर पद। पात्रता, प्रारंभिक व मुख्य परीक्षा सिलेबस, सैलरी व ibps.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "4,455 Posts (11 Public Sector Banks)",
        "qualification_en": "Bachelor's Degree (Graduation) in Any Discipline from a recognized University",
        "qualification_hi": "किसी भी मान्यता प्राप्त विश्वविद्यालय से किसी भी संकाय में स्नातक (Graduation) डिग्री",
        "age_limit": "20 to 30 Years (as on 01.08.2026)",
        "salary": "Basic Pay ₹36,000 + DA + Special Allowance | In-Hand: ₹58,000 – ₹66,000/month",
        "job_location": "All India (11 Participating Commercial Banks across India)",
        "official_portal": "https://www.ibps.in",
        "apply_link": "https://ibpsonline.ibps.in/",
        "notification_link": "https://www.ibps.in",
        "date_posted": "2026-08-01",
        "valid_through": "2026-08-28T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Released)", "01 अगस्त 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "01 अगस्त 2026"),
            ("ऑनलाइन आवेदन की अंतिम तिथि (Last Date to Apply)", "28 अगस्त 2026"),
            ("ऑनलाइन फीस भुगतान अंतिम तिथि (Fee Payment Last Date)", "28 अगस्त 2026"),
            ("प्रारंभिक परीक्षा तिथि (Online Prelims Exam)", "19 व 20 अक्टूबर 2026"),
            ("प्रीलिम्स एडमिट कार्ड (Prelims Call Letter)", "अक्टूबर 2026 के प्रथम सप्ताह में"),
            ("मुख्य परीक्षा तिथि (Online Mains Exam)", "30 नवंबर 2026"),
            ("साक्षात्कार चरण (Interview Stage)", "जनवरी – फरवरी 2027"),
            ("अनंतिम आवंटन परिणाम (Final Provisional Allotment)", "01 अप्रैल 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस (General / OBC / EWS)", "₹850/- (GST सहित)"),
            ("अनुसूचित जाति / जनजाति / दिव्यांगजन (SC / ST / PwD)", "₹175/- (सूचना प्रभार Intimation Charges)"),
            ("भुगतान के माध्यम (Payment Modes)", "डेबिट कार्ड (RuPay/Visa/MasterCard), क्रेडिट कार्ड, नेट बैंकिंग, IMPS, कैश कार्ड/मोबाइल वॉलेट, UPI")
        ],
        "age_relaxations": [
            ("ओबीसी (Non-Creamy Layer)", "3 वर्ष (अधिकतम 33 वर्ष)"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष (अधिकतम 35 वर्ष)"),
            ("दिव्यांगजन (PwBD Persons)", "10 वर्ष (अधिकतम 40 वर्ष)"),
            ("भूतपूर्व सैनिक (Ex-Servicemen)", "5 वर्ष की छूट")
        ],
        "posts_table": [
            ("Punjab National Bank (PNB)", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream"),
            ("Bank of Baroda (BOB)", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream"),
            ("Canara Bank", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream"),
            ("Union Bank of India", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream"),
            ("Bank of India (BOI)", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream"),
            ("Central Bank of India", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream"),
            ("Indian Bank / UCO Bank / Indian Overseas Bank", "11 Participating Banks", "Scale-I Officer", "JMGS-I (₹36,000 – ₹63,840)", "₹62,000+", "Graduation in Any Stream")
        ],
        "exam_pattern": {
            "tier1": [
                ("English Language (अंग्रेजी भाषा)", "30 Qs", "30 Marks", "20 मिनट (Sectional Timing)"),
                ("Quantitative Aptitude (संख्यात्मक अभियोग्यता)", "35 Qs", "35 Marks", "20 मिनट (Sectional Timing)"),
                ("Reasoning Ability (तर्कशक्ति)", "35 Qs", "35 Marks", "20 मिनट (Sectional Timing)"),
                ("कुल योग (Prelims Total)", "100 Questions", "100 Marks", "कुल समय: 60 मिनट (0.25 Negative Marking)")
            ],
            "tier2": [
                ("Reasoning & Computer Aptitude", "45 Qs", "60 Marks", "60 मिनट"),
                ("General/Economy/Banking Awareness", "40 Qs", "40 Marks", "35 मिनट"),
                ("English Language", "35 Qs", "40 Marks", "40 मिनट"),
                ("Data Analysis & Interpretation", "35 Qs", "60 Marks", "45 मिनट"),
                ("English Descriptive Test (Letter Writing & Essay)", "2 Questions", "25 Marks", "30 मिनट (ऑनलाइन टाइपिंग)"),
                ("साक्षात्कार (Interview Stage)", "Face to Face", "100 Marks", "मेरिट वेटेज: 80 (Mains) : 20 (Interview)")
            ]
        },
        "problems": [
            ("1. आईबीपीएस ऑनलाइन फॉर्म में लाइव वेबकैम फोटो व थंब इंप्रेशन गाइडलाइन", "आईबीपीएस में लाइव फोटो के साथ बाएं हाथ के अंगूठे का निशान (Left Thumb Impression 20-50 KB) और सफेद कागज पर काली स्याही से लिखा गया हैंड रिटन डिक्लेरेशन (Handwritten Declaration 50-100 KB) अपलोड करना अनिवार्य है।"),
            ("2. सेक्शनल कट-ऑफ (Sectional Cut-off) और ओवरऑल कट-ऑफ का नियम", "आईबीपीएस पीओ में प्रीलिम्स और मेन्स दोनों में प्रत्येक विषय (English, Quant, Reasoning) में अलग-अलग न्यूनतम सेक्शनल कट-ऑफ और कुल ओवरऑल कट-ऑफ दोनों पास करना अनिवार्य होता है।"),
            ("3. 11 बैंकों की वरीयता (Bank Preference List) कैसे भरें?", "फॉर्म भरते समय रिक्तियों की संख्या, कार्य संस्कृति और अपने गृह राज्य में शाखाओं के आधार पर वरीयता क्रम तय करें (उदा. 1. PNB, 2. BOB, 3. Canara, 4. Union Bank आदि)।"),
            ("4. हैंड रिटन डिक्लेरेशन (Hand Written Declaration) में सही टेक्स्ट", "डिक्लेरेशन में उम्मीदवार को स्वयं की लिखावट में लिखना होता है: 'I, (Name), hereby declare that all the information submitted by me in the application form is correct, true and valid...' कैपिटल लेटर्स में लिखा डिक्लेरेशन अमान्य होता है।"),
            ("5. डिस्क्रिप्टिव पेपर (Descriptive Paper) में टाइपिंग नियम", "मेन्स के तुरंत बाद 30 मिनट में कंप्यूटर कीबोर्ड पर 1 निबंध (Essay 250 शब्द) और 1 पत्र (Letter 150 शब्द) टाइप करना होता है। इसमें ग्रामर व स्पेलिंग सॉफ्टवेयर द्वारा चेक होती है।"),
            ("6. अंतिम वर्ष के छात्रों के परिणाम की कट-ऑफ तिथि", "ग्रेजुएशन का परिणाम आवेदन की अंतिम तिथि (28 अगस्त 2026) को या उससे पहले घोषित होना अनिवार्य है, अन्यथा साक्षात्कार में उम्मीदवारी निरस्त हो जाती है।")
        ],
        "faqs": [
            ("क्या आईबीपीएस पीओ में फाइनल मेरिट में प्रीलिम्स के अंक जुड़ते हैं?", "नहीं, प्रीलिम्स केवल मेन्स के लिए क्वालीफाइंग है। फाइनल मेरिट 80% मेन्स स्कोर + 20% इंटरव्यू स्कोर से बनती है।"),
            ("आईबीपीएस पीओ की शुरुआती इन-हैंड सैलरी कितनी होती है?", "शहरी क्षेत्रों (मुंबई, दिल्ली) में भत्ते और लीज अकोमोडेशन मिलाकर इन-हैंड सैलरी लगभग ₹62,000 से ₹68,000 प्रति माह होती है।"),
            ("क्या बैंक पीओ में प्रोबेशन पीरियड (Probation Period) होता है?", "हाँ, ज्वाइनिंग के बाद 2 वर्ष का प्रोबेशन पीरियड होता है, जिसके सफल समापन पर असिस्टेंट मैनेजर (Scale-I) पद पर स्थायी नियुक्ति मिलती है।"),
            ("क्या गैर-बैंकिंग बैकग्राउंड (इंजीनियरिंग/आर्ट्स) वाले छात्र बैंक पीओ बन सकते हैं?", "हाँ, किसी भी विषय (Arts, Science, Commerce, Engineering, Medical) के ग्रेजुएट समान रूप से बैंक पीओ बन सकते हैं।"),
            ("क्या आईबीपीएस परीक्षा में कैलकुलेटर की अनुमति होती है?", "नहीं, परीक्षा में किसी भी भौतिक या ऑन-स्क्रीन कैलकुलेटर की अनुमति नहीं होती है।"),
            ("नेगेटिव मार्किंग का नियम क्या है?", "वस्तुनिष्ठ प्रश्नों में प्रत्येक गलत उत्तर पर 0.25 (1/4th) अंक की नेगेटिव मार्किंग होती है।"),
            ("आईबीपीएस पीओ में 11 बैंकों का आवंटन कैसे होता है?", "मेरिट रैंक और उम्मीदवार द्वारा फॉर्म में भरी गई बैंक प्रेफरेंस के आधार पर 1 अप्रैल को केंद्रीय अनंतिम आवंटन जारी होता है।"),
            ("क्या बैंक पीओ में ट्रांसफर (Transfer) पॉलिसी कैसी होती है?", "अधिकारियों का ट्रांसफर सामान्यतः प्रत्येक 3 वर्ष में शाखा स्तर पर और 5-7 वर्ष में जोनल स्तर पर होता है।"),
            ("साक्षात्कार में न्यूनतम क्वालीफाइंग अंक कितने हैं?", "100 में से न्यूनतम 40% (SC/ST/OBC/PwD हेतु 35%) अंक प्राप्त करना अनिवार्य है।"),
            ("उपयोगी टूल्स:", "टाइपिंग अभ्यास के लिए [Typing Test](../tools/typing-speed-test.html) और फोटो रिसाइज हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html": {
        "slug": "ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0",
        "aliases": [],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "Institute of Banking Personnel Selection (IBPS)",
        "org_hi": "बैंकिंग कार्मिक चयन संस्थान (आईबीपीएस)",
        "post_name_en": "Customer Service Associate (Clerk) CRP CSA-XVI 2026",
        "post_name_hi": "कस्टमर सर्विस एसोसिएट (क्लर्क) सीआरपी सीएसए-XVI भर्ती 2026",
        "title_en": "IBPS Clerk CRP CSA-XVI Recruitment 2026: 11,403 Customer Service Associate Vacancies",
        "title_hi": "आईबीपीएस क्लर्क (CSA-XVI) भर्ती 2026: 11,403 बैंक क्लर्क पद, पात्रता व आवेदन",
        "desc_en": "IBPS Clerk CSA XVI 2026 Notification for 11,403 Vacancies across 11 Public Sector Banks. Check state-wise posts, Prelims & Mains exam pattern, salary & apply at ibps.in.",
        "desc_hi": "आईबीपीएस क्लर्क भर्ती 2026: 11,403 कस्टमर सर्विस एसोसिएट (क्लर्क) पद। राज्यवार रिक्तियां, परीक्षा पैटर्न, वेतनमान व ibps.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "11,403+ Posts (State-wise Vacancies)",
        "qualification_en": "Graduation in Any Discipline + Proficiency in Official Language of the State/UT + Basic Computer Knowledge",
        "qualification_hi": "किसी भी संकाय में स्नातक डिग्री + संबंधित राज्य की स्थानीय भाषा में प्रवीणता + बुनियादी कंप्यूटर ज्ञान",
        "age_limit": "20 to 28 Years (as on 01.07.2026)",
        "salary": "₹19,900 – ₹47,920 (Pay Scale under Bipartite Settlement) | In-Hand: ₹32,000 – ₹38,000/month",
        "job_location": "State-wise Posting across All States and Union Territories",
        "official_portal": "https://www.ibps.in",
        "apply_link": "https://ibpsonline.ibps.in/",
        "notification_link": "https://www.ibps.in",
        "date_posted": "2026-07-01",
        "valid_through": "2026-07-28T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Released)", "01 जुलाई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "01 जुलाई 2026"),
            ("ऑनलाइन आवेदन की अंतिम तिथि (Last Date to Apply)", "28 जुलाई 2026"),
            ("प्रारंभिक परीक्षा तिथि (Online Prelims Exam)", "24, 25 व 31 अगस्त 2026"),
            ("मुख्य परीक्षा तिथि (Online Mains Exam)", "13 अक्टूबर 2026"),
            ("अनंतिम आवंटन परिणाम (Provisional Allotment)", "01 अप्रैल 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस (General / OBC / EWS)", "₹850/-"),
            ("एससी / एसटी / दिव्यांगजन / भूतपूर्व सैनिक", "₹175/-")
        ],
        "age_relaxations": [
            ("ओबीसी (Non-Creamy Layer)", "3 वर्ष (अधिकतम 31 वर्ष)"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष (अधिकतम 33 वर्ष)"),
            ("दिव्यांगजन (PwBD)", "10 वर्ष (अधिकतम 38 वर्ष)"),
            ("विधवा / तलाकशुदा महिलाएं (सामान्य)", "35 वर्ष की आयु तक"),
            ("विधवा / तलाकशुदा महिलाएं (एससी/एसटी)", "40 वर्ष की आयु तक")
        ],
        "posts_table": [
            ("Customer Service Associate (Clerk)", "Punjab National Bank / Canara Bank / BOB", "Clerical Cadre", "₹19,900 – ₹47,920", "₹35,000+", "Graduation + Local State Language"),
            ("Customer Service Associate (Cashier)", "Union Bank / Bank of India / Central Bank", "Clerical Cadre", "₹19,900 – ₹47,920", "₹35,000+", "Graduation + Local State Language")
        ],
        "exam_pattern": {
            "tier1": [
                ("English Language", "30 Qs", "30 Marks", "20 मिनट (Sectional Timing)"),
                ("Numerical Ability (Mathematics)", "35 Qs", "35 Marks", "20 मिनट (Sectional Timing)"),
                ("Reasoning Ability", "35 Qs", "35 Marks", "20 मिनट (Sectional Timing)"),
                ("कुल योग (Prelims Total)", "100 Questions", "100 Marks", "60 मिनट (0.25 Negative Marking)")
            ],
            "tier2": [
                ("General/Financial Awareness", "50 Qs", "50 Marks", "35 मिनट"),
                ("General English", "40 Qs", "40 Marks", "35 मिनट"),
                ("Reasoning Ability & Computer Aptitude", "50 Qs", "60 Marks", "45 मिनट"),
                ("Quantitative Aptitude", "50 Qs", "50 Marks", "45 मिनट"),
                ("कुल योग (Mains Total)", "190 Questions", "200 Marks", "कुल समय: 160 मिनट (No Interview)")
            ]
        },
        "problems": [
            ("1. स्थानीय भाषा प्रवीणता परीक्षा (Language Proficiency Test - LPT)", "आईबीपीएस क्लर्क में जिस राज्य से आप आवेदन करते हैं, उस राज्य की आधिकारिक स्थानीय भाषा पढ़ना, लिखना और बोलना अनिवार्य है। यदि 10वीं या 12वीं में वह भाषा पढ़ी है तो LPT टेस्ट से छूट मिलती है।"),
            ("2. दूसरे राज्य से आवेदन करने पर क्या विचारणीय है?", "उम्मीदवार किसी भी राज्य से आवेदन कर सकते हैं, लेकिन उन्हें उस राज्य की स्थानीय भाषा का एलपीटी पास करना होगा और पदस्थापना उसी राज्य में मिलेगी।"),
            ("3. क्या क्लर्क भर्ती में कोई इंटरव्यू होता है?", "नहीं, बैंक क्लर्क पदों के लिए कोई साक्षात्कार नहीं होता। 100% चयन मेन्स परीक्षा में प्राप्त 200 में से अंकों के आधार पर होता है।")
        ],
        "faqs": [
            ("क्लर्क पद पर क्या काम होता है?", "बैंक शाखा में खाता खोलना, चेक क्लियरिंग, कैश डिपॉजिट/विड्रॉल, पासबुक प्रिंटिंग, ग्राहक सेवाएं और आरटीजीएस/एनईएफटी प्रोसेसिंग।"),
            ("क्लर्क से ऑफिसर बनने में कितने साल लगते हैं?", "3 वर्ष की सेवा के बाद आंतरिक विभागीय पदोन्नति परीक्षा (Internal Promotion JAIIB/CAIIB) देकर ट्रेनी ऑफिसर / स्केल-1 बन सकते हैं।"),
            ("क्या आईबीपीएस क्लर्क में 5 दिन का कार्य सप्ताह (5-Day Banking) लागू है?", "वर्तमान में प्रत्येक माह के दूसरे व चौथे शनिवार को अवकाश रहता है।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "india-post-gds-recruitment-2026.html": {
        "slug": "india-post-gds-recruitment-2026",
        "aliases": [],
        "sector": "Postal",
        "sector_color": "#ef4444",
        "org_en": "Department of Posts, Ministry of Communications (India Post)",
        "org_hi": "डाक विभाग, संचार मंत्रालय (भारतीय डाक)",
        "post_name_en": "Gramin Dak Sevak (GDS) - Branch Postmaster (BPM) & Assistant BPM (ABPM)",
        "post_name_hi": "ग्रामीण डाक सेवक (जीडीएस) - शाखा डाकपाल (बीपीएम) व सहायक डाकपाल (एबीपीएम)",
        "title_en": "India Post GDS Recruitment 2026: 44,228 Gramin Dak Sevak (BPM/ABPM) Merit-Based Jobs",
        "title_hi": "इंडिया पोस्ट जीडीएस भर्ती 2026: 44,228 डाक सेवक पद, 10वीं मेरिट पर सीधी भर्ती, बिना परीक्षा",
        "desc_en": "India Post GDS 2026 Notification for 44,228 Vacancies (BPM, ABPM, Dak Sevak). 100% 10th Class Merit Selection, No Exam, No Interview. Check state-wise circle list & apply online at indiapostgdsonline.gov.in.",
        "desc_hi": "इंडिया पोस्ट जीडीएस भर्ती 2026: 44,228 ग्रामीण डाक सेवक पदों पर 10वीं बोर्ड मेरिट से सीधी भर्ती। बिना परीक्षा, बिना इंटरव्यू सीधी नौकरी। indiapostgdsonline.gov.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "44,228 Posts (23 Postal Circles Across India)",
        "qualification_en": "10th Class (Matriculation) Pass with passing marks in Mathematics & English + Local State Language + Basic Computer Knowledge",
        "qualification_hi": "10वीं बोर्ड (मैट्रिक) गणित व अंग्रेजी विषय के साथ उत्तीर्ण + स्थानीय राज्य भाषा का ज्ञान + बेसिक कंप्यूटर ज्ञान",
        "age_limit": "18 to 40 Years (as on closing date of application)",
        "salary": "TRCA Slab: BPM ₹12,000 – ₹29,380 | ABPM/Dak Sevak ₹10,000 – ₹24,470 (Plus Allowances)",
        "job_location": "Branch Post Offices in Rural & Semi-Urban areas across 23 Postal Circles",
        "official_portal": "https://indiapostgdsonline.gov.in",
        "apply_link": "https://indiapostgdsonline.gov.in/Reg_validation.aspx",
        "notification_link": "https://indiapostgdsonline.gov.in",
        "date_posted": "2026-07-15",
        "valid_through": "2026-08-05T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Date)", "15 जुलाई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "15 जुलाई 2026"),
            ("आवेदन की अंतिम तिथि (Last Date to Apply)", "05 अगस्त 2026"),
            ("फॉर्म सुधार विंडो (Correction Window)", "06 अगस्त से 08 अगस्त 2026"),
            ("प्रथम मेरिट सूची (1st Merit List / Result)", "19 अगस्त 2026"),
            ("दस्तावेज़ सत्यापन (Document Verification)", "मेरिट जारी होने के 15 दिनों के भीतर"),
            ("द्वितीय/तृतीय मेरिट सूची (Subsequent Lists)", "अगस्त – सितंबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस पुरुष (UR / OBC / EWS Male)", "₹100/-"),
            ("महिलाएं (सभी वर्ग) (All Female Candidates)", "₹0/- (निःशुल्क)"),
            ("अनुसूचित जाति / जनजाति (SC / ST Candidates)", "₹0/- (निःशुल्क)"),
            ("दिव्यांगजन (PwD Candidates)", "₹0/- (निःशुल्क)")
        ],
        "age_relaxations": [
            ("ओबीसी (OBC - Non Creamy Layer)", "3 वर्ष की छूट (Upper Age 43 वर्ष)"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष की छूट (Upper Age 45 वर्ष)"),
            ("दिव्यांगजन (PwD)", "10 वर्ष की छूट (Upper Age 50 वर्ष तक)")
        ],
        "posts_table": [
            ("Branch Postmaster (BPM)", "Branch Post Office (BO)", "TRCA Slab-1 / 2", "₹12,000 – ₹29,380 + DA", "₹16,000 – ₹20,000/month", "10th Pass + Cycle Riding + Computer"),
            ("Assistant Branch Postmaster (ABPM)", "Branch Post Office / Sub Office", "TRCA Slab-1", "₹10,000 – ₹24,470 + DA", "₹14,000 – ₹17,000/month", "10th Pass + Local Language"),
            ("Dak Sevak", "Sub Post Office / Head Post Office", "TRCA Slab-1", "₹10,000 – ₹24,470 + DA", "₹14,000 – ₹17,000/month", "10th Pass + Local Language")
        ],
        "exam_pattern": {
            "tier1": [
                ("चयन प्रक्रिया (Selection Criteria)", "100% 10वीं कक्षा (Matriculation) के अंकों के आधार पर स्वचालित कंप्यूटर जनरेटेड मेरिट लिस्ट", "No Written Exam", "कोई परीक्षा नहीं"),
                ("दस्तावेज़ सत्यापन (DV Round)", "मूल प्रमाण पत्रों की जांच (10वीं मार्कशीट, जाति, निवास, कंप्यूटर सर्टिफिकेट, मेडिकल फिटनेस)", "Qualifying", "मंडल कार्यालय द्वारा")
            ],
            "tier2": []
        },
        "problems": [
            ("1. सीजीपीए (CGPA) को प्रतिशत में बदलने का सही फॉर्मूला", "यदि आपके 10वीं बोर्ड में ग्रेड/सीजीपीए है, तो प्रतिशत निकालने के लिए CGPA को 9.5 से गुणा किया जाता है (उदा. 9.0 CGPA x 9.5 = 85.5%)। पोर्टल पर सही गुणक दर्ज करें।"),
            ("2. डाकघर प्राथमिकताएं (Post Office Preferences) भरने की रणनीति", "आवेदन में अधिकतम संभव डाकघरों की वरीयता (Preference) चुनें। केवल 1-2 डाकघर चुनने पर चयन की संभावना कम हो जाती है।"),
            ("3. बीपीएम पद के लिए शाखा कार्यालय हेतु स्थान (Accommodation Rule)", "बीपीएम पद पर चयनित होने पर गांव के मुख्य स्थान पर शाखा डाकघर संचालित करने हेतु कम से कम 10x10 वर्ग फीट का कमरा उपलब्ध कराना आवश्यक होता है।")
        ],
        "faqs": [
            ("क्या इंडिया पोस्ट जीडीएस में कोई परीक्षा या इंटरव्यू होता है?", "नहीं, जीडीएस भर्ती 100% विशुद्ध रूप से 10वीं बोर्ड के अंकों की मेरिट पर होती है। इसमें कोई लिखित परीक्षा या इंटरव्यू नहीं होता।"),
            ("क्या 12वीं या ग्रेजुएशन के अतिरिक्त अंक मेरिट में जुड़ते हैं?", "नहीं, उच्च शैक्षणिक योग्यता (12th/Degree) के कोई अतिरिक्त अंक नहीं मिलते। मेरिट केवल 10वीं के अंकों पर ही बनती है।"),
            ("जीडीएस से नियमित पोस्टल असिस्टेंट (PA/SA) बनने के नियम क्या हैं?", "3 वर्ष की नियमित जीडीएस सेवा के बाद विभागीय सीमित प्रतियोगी परीक्षा (LDCE) देकर नियमित पोस्टमैन, मेल गार्ड व पोस्टल असिस्टेंट बना जा सकता है।"),
            ("तैयारी टूल्स:", "दस्तावेज़ जांच हेतु [Document Checklist Tool](../tools/document-checklist.html) व [Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "indian-navy-agniveer-ssr-recruitment-2026.html": {
        "slug": "indian-navy-agniveer-ssr-recruitment-2026",
        "aliases": [],
        "sector": "Defence",
        "sector_color": "#1e40af",
        "org_en": "Indian Navy (Ministry of Defence)",
        "org_hi": "भारतीय नौसेना (रक्षा मंत्रालय)",
        "post_name_en": "Agniveer (SSR) & Agniveer (MR) 01/2026 Batch",
        "post_name_hi": "अग्निवीर (एसएसआर) व अग्निवीर (एमआर) 01/2026 बैच भर्ती",
        "title_en": "Indian Navy Agniveer SSR Recruitment 2026: 2,500+ Sailor Vacancies, 12th PCM",
        "title_hi": "भारतीय नौसेना अग्निवीर (SSR) भर्ती 2026: 2,500+ पद, 12वीं पास युवाओं हेतु नौसेना भर्ती",
        "desc_en": "Indian Navy Agniveer SSR & MR 2026 Notification for 2,500+ Sailor Vacancies. 12th PCM qualification, Seva Nidhi package, INET exam pattern, PFT standards & apply at agniveernavy.cdac.in.",
        "desc_hi": "भारतीय नौसेना अग्निवीर भर्ती 2026: 2,500+ पद। 12वीं गणित व भौतिकी के साथ उत्तीर्ण युवाओं के लिए। सेवा निधि पैकेज, शारीरिक परीक्षा मापदंड व ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "2,500+ Posts (Men & Women)",
        "qualification_en": "10+2 Examination with Mathematics & Physics and at least one of Chemistry/Biology/Computer Science from an approved Board",
        "qualification_hi": "मान्यता प्राप्त बोर्ड से 12वीं (10+2) गणित व भौतिकी और रसायन/जीव विज्ञान/कंप्यूटर में से किसी एक विषय के साथ उत्तीर्ण",
        "age_limit": "17.5 to 21 Years (Born between 01 Nov 2004 to 30 Apr 2008)",
        "salary": "₹30,000 to ₹40,000/month + ₹11.71 Lakh Tax-Free Seva Nidhi Package on exit",
        "job_location": "Indian Naval Ships, Submarines & Naval Air Stations across India & High Seas",
        "official_portal": "https://www.joinindiannavy.gov.in",
        "apply_link": "https://agniveernavy.cdac.in",
        "notification_link": "https://www.joinindiannavy.gov.in",
        "date_posted": "2026-05-10",
        "valid_through": "2026-06-05T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Released)", "10 मई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "13 मई 2026"),
            ("आवेदन की अंतिम तिथि (Last Date to Apply)", "05 जून 2026"),
            ("कंप्यूटर आधारित परीक्षा स्टेज-1 (INET Stage-1 CBT)", "जुलाई 2026"),
            ("स्टेज-2 पीएफटी व लिखित परीक्षा (PFT & Written Test)", "अगस्त – सितंबर 2026"),
            ("आईएनएस चिल्का में रिपोर्टिंग (Reporting at INS Chilka)", "नवंबर 2026")
        ],
        "fees": [
            ("सभी उम्मीदवार (All Candidates Fee)", "₹550/- + 18% GST (कुल ₹649/-)"),
            ("भुगतान के माध्यम (Payment Modes)", "नेट बैंकिंग, वीजा/मास्टर/रुपे कार्ड, यूपीआई")
        ],
        "age_relaxations": [
            ("अग्निवीर योजना में आयु सीमा", "17.5 से 21 वर्ष (सभी श्रेणियों हेतु एक समान)")
        ],
        "posts_table": [
            ("Agniveer SSR (Senior Secondary Recruit)", "Fleet Operations & Technical Branches", "Sailor / Agniveer", "₹30,000 – ₹40,000 + Hardship Allowance", "₹21,000 In-Hand + ₹9,000 Corpus", "12th Pass with Maths & Physics"),
            ("Agniveer MR (Matric Recruit - Chef, Steward, Hygienist)", "Logistics & Hospitality", "Sailor / Agniveer", "₹30,000 – ₹40,000", "₹21,000 In-Hand + ₹9,000 Corpus", "10th Pass (Matriculation)")
        ],
        "exam_pattern": {
            "tier1": [
                ("English", "25 Qs", "25 Marks", "0.25 Negative Marking"),
                ("Science (Physics/Chemistry)", "25 Qs", "25 Marks", "0.25 Negative Marking"),
                ("Mathematics", "25 Qs", "25 Marks", "0.25 Negative Marking"),
                ("General Awareness", "25 Qs", "25 Marks", "0.25 Negative Marking"),
                ("कुल योग (INET Stage-1)", "100 Questions", "100 Marks", "कुल समय: 60 मिनट (द्विभाषी हिंदी/इंग्लिश)")
            ],
            "tier2": [
                ("दौड़ (Running)", "पुरुष: 1.6 किमी 6 मिनट 30 सेकंड में | महिला: 1.6 किमी 8 मिनट में", "Qualifying", "अनिवार्य"),
                ("उठक-बैठक (Squats)", "पुरुष: 20 उठक-बैठक | महिला: 15 उठक-बैठक", "Qualifying", "अनिवार्य"),
                ("पुश-अप्स व सिट-अप्स", "पुरुष: 12 पुश-अप्स | महिला: 10 बेंट नी सिट-अप्स", "Qualifying", "अनिवार्य"),
                ("न्यूनतम ऊंचाई (Height)", "पुरुष: 157 सेमी | महिला: 152 सेमी", "Qualifying", "मानक अनिवार्य")
            ]
        },
        "problems": [
            ("1. टैटू (Tattoo) संबंधी नौसेना के कड़े नियम", "शरीर के केवल हाथ के भीतरी हिस्से (Inner forearm) पर धार्मिक प्रतीकों के स्थायी टैटू मान्य हैं। शरीर के किसी अन्य भाग पर टैटू होने पर मेडिकल अनफिट कर दिया जाता है।"),
            ("2. चश्मे और दृष्टि मानक (Visual Standards for Navy SSR)", "बिना चश्मे के दृष्टि 6/6 (बेहतर आंख) और 6/9 (खराब आंख) होनी चाहिए। लेसिक सर्जरी (LASIK) भर्ती के समय अमान्य मानी जाती है।"),
            ("3. सेवा निधि पैकेज (Seva Nidhi Package) का वित्तीय विवरण", "4 वर्ष की सेवा पूर्ण करने पर कुल ₹11.71 लाख का ब्याज सहित टैक्स-फ्री सेवा निधि पैकेज मिलता है। साथ ही 25% उत्कृष्ट अग्निवीरों को नियमित नौसेना में स्थायी कैडर प्रदान किया जाता है।")
        ],
        "faqs": [
            ("क्या महिला अभ्यर्थी नेवी अग्निवीर एसएसआर के लिए पात्र हैं?", "हाँ, भारतीय नौसेना में महिला अभ्यर्थी भी अग्निवीर एसएसआर और एमआर दोनों पदों के लिए पूर्णतः पात्र हैं।"),
            ("ट्रेनिंग कहाँ होती है?", "सभी चयनित अग्निवीरों की 16 सप्ताह की प्रारंभिक बुनियादी सैन्य ट्रेनिंग आईएनएस चिल्का (ओडिशा) में होती है।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) और आयु सीमा जांचने हेतु [Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "sbi-po-recruitment-2026-2027.html": {
        "slug": "sbi-po-recruitment-2026-2027",
        "aliases": [],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "State Bank of India (SBI)",
        "org_hi": "भारतीय स्टेट बैंक (एसबीआई)",
        "post_name_en": "Probationary Officer (PO) Recruitment 2026-2027",
        "post_name_hi": "प्रोबेशनरी ऑफिसर (पीओ) भर्ती 2026-2027",
        "title_en": "SBI PO Recruitment 2026-2027: 2,000+ Probationary Officer Vacancies, Apply Online",
        "title_hi": "एसबीआई पीओ भर्ती 2026-2027: भारतीय स्टेट बैंक 2,000+ प्रोबेशनरी ऑफिसर पद, आवेदन करें",
        "desc_en": "SBI PO 2026 Notification for 2,000+ Probationary Officer Posts. Check 4 advance increments salary, Prelims/Mains exam pattern, GD/Interview & apply at sbi.co.in/careers.",
        "desc_hi": "एसबीआई पीओ भर्ती 2026: 2,000+ पदों पर भर्ती। 4 अग्रिम वेतन वृद्धि, प्रारंभिक व मुख्य परीक्षा पैटर्न, सैलरी व sbi.co.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "2,000+ Posts",
        "qualification_en": "Graduation in Any Discipline from a recognized University (Final year students eligible)",
        "qualification_hi": "किसी भी संकाय में स्नातक डिग्री (अंतिम वर्ष के छात्र भी पात्र)",
        "age_limit": "21 to 30 Years (as on 01.04.2026)",
        "salary": "Basic Pay ₹41,960 with 4 Advance Increments | In-Hand: ₹68,000 – ₹78,000/month",
        "job_location": "All India (State Bank of India Branches Across India)",
        "official_portal": "https://sbi.co.in/web/careers",
        "apply_link": "https://ibpsonline.ibps.in/sbipos/",
        "notification_link": "https://sbi.co.in/web/careers",
        "date_posted": "2026-09-01",
        "valid_through": "2026-09-27T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि (Notification Released)", "01 सितंबर 2026"),
            ("ऑनलाइन आवेदन प्रारंभ (Apply Online Start)", "07 सितंबर 2026"),
            ("आवेदन की अंतिम तिथि (Last Date to Apply)", "27 सितंबर 2026"),
            ("प्रारंभिक परीक्षा तिथि (Online Prelims Exam)", "नवंबर 2026"),
            ("मुख्य परीक्षा तिथि (Online Mains Exam)", "दिसंबर 2026 – जनवरी 2027"),
            ("ग्रुप एक्सरसाइज व इंटरव्यू (GD & Interview)", "फरवरी – मार्च 2027")
        ],
        "fees": [
            ("सामान्य / ईडब्ल्यूएस / ओबीसी (General / EWS / OBC)", "₹750/-"),
            ("अनुसूचित जाति / जनजाति / दिव्यांगजन (SC / ST / PwD)", "₹0/- (निःशुल्क Exempted)")
        ],
        "age_relaxations": [
            ("ओबीसी (Non-Creamy Layer)", "3 वर्ष (अधिकतम 33 वर्ष)"),
            ("एससी / एसटी (SC / ST)", "5 वर्ष (अधिकतम 35 वर्ष)"),
            ("दिव्यांगजन (PwD)", "10 से 15 वर्ष की छूट")
        ],
        "posts_table": [
            ("Probationary Officer (Scale-I)", "State Bank of India (All India)", "Officer Grade JMGS-I", "₹41,960 – ₹63,840 (with 4 increments)", "₹72,000+", "Graduation in Any Stream")
        ],
        "exam_pattern": {
            "tier1": [
                ("English Language", "30 Qs", "30 Marks", "20 मिनट"),
                ("Quantitative Aptitude", "35 Qs", "35 Marks", "20 मिनट"),
                ("Reasoning Ability", "35 Qs", "35 Marks", "20 मिनट"),
                ("कुल योग (Prelims)", "100 Questions", "100 Marks", "60 मिनट (0.25 Negative Marking)")
            ],
            "tier2": [
                ("Mains Objective Test (Reasoning, Data Analysis, GA, English)", "155 Qs", "200 Marks", "3 घंटे"),
                ("Descriptive Test (Letter Writing & Essay)", "2 Questions", "50 Marks", "30 मिनट"),
                ("Phase-III: Group Exercises & Interview", "GE (20) + Interview (30)", "50 Marks", "मेरिट 75:25 वेटेज")
            ]
        },
        "problems": [
            ("1. एसबीआई पीओ में अधिकतम अटेम्प्ट्स (Number of Chances) का नियम", "सामान्य वर्ग के उम्मीदवारों के लिए मुख्य परीक्षा में उपस्थित होने के अधिकतम 4 अवसर (4 Chances) और ओबीसी/दिव्यांग उम्मीदवारों हेतु 7 अवसर निर्धारित हैं। एससी/एसटी हेतु कोई सीमा नहीं है।"),
            ("2. ग्रुप डिस्कशन और साइकोमेट्रिक टेस्ट की तैयारी", "एसबीआई पीओ फेज-3 में इंटरव्यू से पहले साइकोमेट्रिक टेस्ट और ग्रुप एक्सरसाइज आयोजित करता है जिसका उद्देश्य उम्मीदवार के नेतृत्व क्षमता और टीम वर्क का आकलन करना होता है।")
        ],
        "faqs": [
            ("एसबीआई पीओ को 4 एडवांस इंक्रीमेंट क्यों मिलते हैं?", "एसबीआई देश का सबसे बड़ा वाणिज्यिक बैंक होने के कारण अन्य बैंकों की तुलना में प्रोबेशनरी ऑफिसर्स को ज्वाइनिंग पर ही 4 अग्रिम वेतन वृद्धि (Advance Increments) प्रदान करता है।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) और इन-हैंड सैलरी गणना हेतु [7th Pay Calculator](../7th-pay-commission-calculator.html) का उपयोग करें।")
        ]
    },
    "sbi-clerk-junior-associate-recruitment-2026.html": {
        "slug": "sbi-clerk-junior-associate-recruitment-2026",
        "aliases": [],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "State Bank of India (SBI)",
        "org_hi": "भारतीय स्टेट बैंक (एसबीआई)",
        "post_name_en": "Junior Associate (Customer Support & Sales) 2026",
        "post_name_hi": "जूनियर एसोसिएट (कस्टमर सपोर्ट एंड सेल्स - क्लर्क) भर्ती 2026",
        "title_en": "SBI Clerk Junior Associate Recruitment 2026: 12,100+ Customer Support Vacancies",
        "title_hi": "एसबीआई क्लर्क (Junior Associate) भर्ती 2026: 12,100+ पद, ऑनलाइन आवेदन व परीक्षा पैटर्न",
        "desc_en": "SBI Clerk 2026 Notification for 12,100+ Junior Associate Posts. Check state-wise vacancies, Prelims/Mains syllabus, salary & apply at sbi.co.in/careers.",
        "desc_hi": "एसबीआई क्लर्क भर्ती 2026: 12,100+ जूनियर एसोसिएट पद। राज्यवार रिक्तियां, परीक्षा पैटर्न, सैलरी व sbi.co.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "12,100+ Posts",
        "qualification_en": "Graduation in Any Discipline + Proficiency in Local State Language",
        "qualification_hi": "किसी भी संकाय में स्नातक डिग्री + राज्य की स्थानीय भाषा का ज्ञान",
        "age_limit": "20 to 28 Years",
        "salary": "₹19,900 – ₹47,920 | In-Hand: ₹34,000 – ₹39,000/month",
        "job_location": "State Bank of India Branches within the Applied Circle/State",
        "official_portal": "https://sbi.co.in/web/careers",
        "apply_link": "https://ibpsonline.ibps.in/sbijao/",
        "notification_link": "https://sbi.co.in/web/careers",
        "date_posted": "2026-11-15",
        "valid_through": "2026-12-10T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "15 नवंबर 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "17 नवंबर 2026"),
            ("आवेदन की अंतिम तिथि", "10 दिसंबर 2026"),
            ("प्रारंभिक परीक्षा तिथि", "जनवरी 2027"),
            ("मुख्य परीक्षा तिथि", "मार्च 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस", "₹750/-"),
            ("एससी / एसटी / दिव्यांगजन", "₹0/- (निःशुल्क)")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष"),
            ("दिव्यांगजन", "10 वर्ष")
        ],
        "posts_table": [
            ("Junior Associate (Customer Support & Sales)", "SBI Branches in Applied Circle", "Clerical Cadre", "₹19,900 – ₹47,920", "₹36,000+", "Graduation + Local Language")
        ],
        "exam_pattern": {
            "tier1": [
                ("English Language", "30 Qs", "30 Marks", "20 मिनट"),
                ("Numerical Ability", "35 Qs", "35 Marks", "20 मिनट"),
                ("Reasoning Ability", "35 Qs", "35 Marks", "20 मिनट"),
                ("कुल योग (Prelims)", "100 Questions", "100 Marks", "60 मिनट (0.25 Negative Marking, No Sectional Cutoff)")
            ],
            "tier2": [
                ("General/Financial Awareness", "50 Qs", "50 Marks", "35 मिनट"),
                ("General English", "40 Qs", "40 Marks", "35 मिनट"),
                ("Quantitative Aptitude", "50 Qs", "50 Marks", "45 मिनट"),
                ("Reasoning Ability & Computer Aptitude", "50 Qs", "60 Marks", "45 मिनट"),
                ("कुल योग (Mains Total)", "190 Questions", "200 Marks", "160 मिनट (No Interview)")
            ]
        },
        "problems": [
            ("1. एसबीआई क्लर्क में सेक्शनल कट-ऑफ न होना", "एसबीआई क्लर्क में आईबीपीएस की तरह विषयवार (Sectional) न्यूनतम कट-ऑफ नहीं होती, बल्कि केवल कुल ओवरऑल कट-ऑफ पास करना आवश्यक होता है।"),
            ("2. इंटर-सर्कल ट्रांसफर पर प्रतिबंध", "एसबीआई जूनियर एसोसिएट पद पर चयनित होने पर कर्मचारी का अन्य सर्कल/राज्य में ट्रांसफर प्रतिबंधित होता है, अतः अपना गृह सर्कल सोच-समझकर चुनें।")
        ],
        "faqs": [
            ("क्या एसबीआई क्लर्क में इंटरव्यू होता है?", "नहीं, एसबीआई क्लर्क में केवल मेन्स परीक्षा और स्थानीय भाषा परीक्षा (LPT) होती है।"),
            ("तैयारी टूल्स:", "टाइपिंग गति जांचने हेतु [Typing Test](../tools/typing-speed-test.html) का उपयोग करें।")
        ]
    },
    "rbi-grade-b-officer-recruitment-2026.html": {
        "slug": "rbi-grade-b-officer-recruitment-2026",
        "aliases": [],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "Reserve Bank of India (RBI)",
        "org_hi": "भारतीय रिज़र्व बैंक (आरबीआई)",
        "post_name_en": "Officers in Grade 'B' (General / DEPR / DSIM) 2026",
        "post_name_hi": "ग्रेड 'बी' अधिकारी (जनरल / डीईपीआर / डीएसआईएम) सीधी भर्ती 2026",
        "title_en": "RBI Grade B Officer Recruitment 2026: 250+ General, DEPR & DSIM Vacancies",
        "title_hi": "आरबीआई ग्रेड बी ऑफिसर भर्ती 2026: 250+ पद, भारतीय रिज़र्व बैंक में सीधी भर्ती",
        "desc_en": "RBI Grade B 2026 Notification for 250+ Officer Posts: Check eligibility (60% graduation), ₹1,16,000/month salary, Phase 1 & Phase 2 exam pattern & apply at opportunities.rbi.org.in.",
        "desc_hi": "आरबीआई ग्रेड बी भर्ती 2026: 250+ पदों पर देश के केंद्रीय बैंक में सीधी भर्ती। ₹1,16,000 मासिक वेतन, परीक्षा पैटर्न, सिलेबस व rbi.org.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "250+ Posts (General: 200, DEPR: 30, DSIM: 20)",
        "qualification_en": "Minimum 60% Marks in Graduation (50% for SC/ST/PwBD) or 55% in Post-Graduation in Any Discipline",
        "qualification_hi": "स्नातक (Graduation) में न्यूनतम 60% अंक (एससी/एसटी/दिव्यांग हेतु 50%) या स्नातकोत्तर (PG) में 55% अंक",
        "age_limit": "21 to 30 Years (up to 34 Years for M.Phil / Ph.D candidates)",
        "salary": "Basic Pay ₹55,200 | Gross Monthly Emoluments: approx. ₹1,16,000/month + RBI Quarters",
        "job_location": "RBI Central Office (Mumbai) & Regional Offices in State Capitals",
        "official_portal": "https://opportunities.rbi.org.in",
        "apply_link": "https://ibpsonline.ibps.in/rbiojul24/",
        "notification_link": "https://opportunities.rbi.org.in",
        "date_posted": "2026-07-25",
        "valid_through": "2026-08-16T18:00",
        "dates": [
            ("अधिसूचना जारी तिथि", "25 जुलाई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "25 जुलाई 2026"),
            ("आवेदन की अंतिम तिथि", "16 अगस्त 2026 (शाम 06:00 बजे)"),
            ("फेज-1 परीक्षा (Phase-1 Online Exam)", "08 सितंबर 2026"),
            ("फेज-2 परीक्षा (Phase-2 Online Exam)", "19 अक्टूबर 2026"),
            ("साक्षात्कार (Interview Round)", "दिसंबर 2026 – जनवरी 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस", "₹850/- + 18% GST"),
            ("अनुसूचित जाति / जनजाति / दिव्यांगजन", "₹100/- + 18% GST")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष (अधिकतम 33 वर्ष / 6 Attempts for General)"),
            ("एससी / एसटी", "5 वर्ष (अधिकतम 35 वर्ष / Unlimited Attempts)"),
            ("दिव्यांगजन", "10 वर्ष की छूट")
        ],
        "posts_table": [
            ("Officers in Grade 'B' (DR) - General", "RBI Regional & Central Offices", "Grade B Officer", "₹55,200 – ₹99,750", "₹1,16,000+", "Graduation with min 60% Marks"),
            ("Officers in Grade 'B' (DR) - DEPR", "Dept of Economic & Policy Research", "Grade B Officer", "₹55,200 – ₹99,750", "₹1,16,000+", "Master's in Economics / Finance with 55%"),
            ("Officers in Grade 'B' (DR) - DSIM", "Dept of Statistics & Info Management", "Grade B Officer", "₹55,200 – ₹99,750", "₹1,16,000+", "Master's in Statistics / Maths / Data Analytics")
        ],
        "exam_pattern": {
            "tier1": [
                ("General Awareness", "80 Qs", "80 Marks", "25 मिनट"),
                ("Reasoning", "60 Qs", "60 Marks", "45 मिनट"),
                ("English Language", "30 Qs", "30 Marks", "25 मिनट"),
                ("Quantitative Aptitude", "30 Qs", "30 Marks", "25 मिनट"),
                ("कुल योग (Phase-1)", "200 Questions", "200 Marks", "120 मिनट (0.25 Negative Marking)")
            ],
            "tier2": [
                ("Paper-I: Economic & Social Issues (ESI)", "50% Objective + 50% Descriptive", "100 Marks", "120 मिनट"),
                ("Paper-II: English (Writing Skills)", "3 Descriptive Questions", "100 Marks", "90 मिनट"),
                ("Paper-III: Finance and Management (FM)", "50% Objective + 50% Descriptive", "100 Marks", "120 मिनट"),
                ("Interview Stage", "Personality Evaluation", "75 Marks", "कुल मेन्स 375 अंक")
            ]
        },
        "problems": [
            ("1. 60% एग्रीगेट मार्क्स की गणना का नियम", "आरबीआई सभी सेमेस्टरों/वर्षों के कुल अंकों के योग के आधार पर 60% की गणना करता है। 59.99% को भी राउंड ऑफ करके 60% नहीं माना जाता।"),
            ("2. फेज-2 में कीबोर्ड से डिस्क्रिप्टिव उत्तर टाइप करना", "फेज-2 में ESI और Finance & Management के 50% उत्तर कंप्यूटर कीबोर्ड पर इंग्लिश में टाइप करने होते हैं।")
        ],
        "faqs": [
            ("आरबीआई ग्रेड बी अधिकारी की सुविधाएं क्या हैं?", "सैलरी के अलावा मुंबई/दिल्ली में 3-BHK सुसज्जित आवास, कार लीज, पेट्रोल प्रति माह 200-250 लीटर, बुक ग्रांट, और उच्च स्तरीय चिकित्सा प्रतिपूर्ति मिलती है।"),
            ("तैयारी टूल्स:", "टाइपिंग स्पीड टेस्ट हेतु [Typing Test](../tools/typing-speed-test.html) का उपयोग करें।")
        ]
    },
    "isro-scientistengineer-recruitment-2026-mseotm9e-1.html": {
        "slug": "isro-scientistengineer-recruitment-2026-mseotm9e-1",
        "aliases": [],
        "sector": "Scientific",
        "sector_color": "#7c3aed",
        "org_en": "Indian Space Research Organisation (ISRO - ICRB)",
        "org_hi": "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो)",
        "post_name_en": "Scientist / Engineer 'SC' in Level 10 (Civil, Electrical, Mechanical, Electronics, CS)",
        "post_name_hi": "वैज्ञानिक / इंजीनियर 'SC' पे लेवल 10 सीधी भर्ती 2026",
        "title_en": "ISRO Scientist/Engineer 'SC' Recruitment 2026: 303 Vacancies for B.E/B.Tech",
        "title_hi": "इसरो वैज्ञानिक/इंजीनियर 'SC' भर्ती 2026: 303 पद, बी.ई/बी.टेक धारकों हेतु सीधी भर्ती",
        "desc_en": "ISRO ICRB 2026 Notification for 303 Scientist/Engineer 'SC' Posts. Check 65% B.Tech eligibility, 7th CPC Level 10 pay scale (₹88,000/mo), written test & apply at isro.gov.in.",
        "desc_hi": "इसरो वैज्ञानिक भर्ती 2026: 303 पदों पर बीटेक/बीई डिग्रीधारकों के लिए भर्ती। ₹56,100 बेसिक पे, लिखित परीक्षा पैटर्न, चयन प्रक्रिया व isro.gov.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "303 Posts",
        "qualification_en": "B.E / B.Tech or equivalent in relevant Engineering branch with First Class (Minimum 65% Marks or 6.84 CGPA)",
        "qualification_hi": "संबंधित इंजीनियरिंग शाखा में प्रथम श्रेणी के साथ बी.ई / बी.टेक (न्यूनतम 65% अंक या 6.84 सीजीपीए)",
        "age_limit": "18 to 28 Years (as on closing date)",
        "salary": "Pay Level 10 (₹56,100 – ₹1,77,500) | In-Hand: ₹88,000 – ₹98,000/month",
        "job_location": "ISRO Centres (URSC Bangalore, VSSC Thiruvananthapuram, SDSC SHAR Sriharikota, SAC Ahmedabad, NRSC Hyderabad)",
        "official_portal": "https://www.isro.gov.in",
        "apply_link": "https://www.isro.gov.in/Careers.html",
        "notification_link": "https://www.isro.gov.in",
        "date_posted": "2026-05-25",
        "valid_through": "2026-06-16T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "25 मई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "25 मई 2026"),
            ("आवेदन की अंतिम तिथि", "16 जून 2026"),
            ("लिखित परीक्षा तिथि (Written Test)", "अगस्त 2026"),
            ("साक्षात्कार तिथि (Interview Round)", "अक्टूबर – नवंबर 2026")
        ],
        "fees": [
            ("आवेदन शुल्क (Processing Fee)", "₹750/- (लिखित परीक्षा देने पर SC/ST/PwD/महिलाओं को ₹750 और अन्य को ₹500 रिफंड)"),
            ("भुगतान के माध्यम", "इंटरनेट बैंकिंग, यूपीआई, एसबीआई ई-पे")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष (अधिकतम 31 वर्ष)"),
            ("एससी / एसटी", "5 वर्ष (अधिकतम 33 वर्ष)"),
            ("दिव्यांगजन", "10 वर्ष की छूट")
        ],
        "posts_table": [
            ("Scientist/Engineer 'SC' (Electronics)", "ISRO Centres (URSC/VSSC/SAC)", "Group A Gazetted", "Level 10 (₹56,100 – ₹1,77,500)", "₹92,000+", "B.E/B.Tech (ECE) with 65%"),
            ("Scientist/Engineer 'SC' (Mechanical)", "ISRO Centres (VSSC/LPSC/SDSC)", "Group A Gazetted", "Level 10 (₹56,100 – ₹1,77,500)", "₹92,000+", "B.E/B.Tech (Mech) with 65%"),
            ("Scientist/Engineer 'SC' (Computer Science)", "ISRO Centres (URSC/NRSC/ISTRAC)", "Group A Gazetted", "Level 10 (₹56,100 – ₹1,77,500)", "₹92,000+", "B.E/B.Tech (CSE) with 65%"),
            ("Scientist/Engineer 'SC' (Civil & Electrical)", "Construction & Maintenance Division", "Group A Gazetted", "Level 10 (₹56,100 – ₹1,77,500)", "₹92,000+", "B.E/B.Tech (Civil/EE) with 65%")
        ],
        "exam_pattern": {
            "tier1": [
                ("Part-A: Discipline Specific Core Engineering", "80 Questions", "80 Marks", "75% वेटेज (1/3rd Negative Marking)"),
                ("Part-B: Aptitude & Reasoning Ability", "15 Questions", "20 Marks", "25% वेटेज"),
                ("कुल योग (Written Test)", "95 Questions", "100 Marks", "120 मिनट (2 घंटे)")
            ],
            "tier2": [
                ("साक्षात्कार (Technical Interview)", "Subject Knowledge & Technical Presentation", "100 Marks", "न्यूनतम 50% क्वालीफाइंग (M/s 60:40 or 50:50)")
            ]
        },
        "problems": [
            ("1. न्यूनतम 65% या 6.84 CGPA की अनिवार्यता", "इसरो में 64.99% या 6.83 CGPA वाले उम्मीदवार भी अपात्र माने जाते हैं। सीजीपीए को यूनिवर्सिटी के आधिकारिक रूपांतरण फॉर्मूले के अनुसार ही दर्ज करें।")
        ],
        "faqs": [
            ("क्या गेट (GATE) स्कोरकार्ड अनिवार्य है?", "नहीं, इसरो ICRB अपनी अलग लिखित परीक्षा आयोजित करता है, जिसके लिए गेट स्कोर की आवश्यकता नहीं होती।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "aiims-norcet-11-nursing-officer-recruitment-2026-2218-posts-ms8e3ooo-4.html": {
        "slug": "aiims-norcet-11-nursing-officer-recruitment-2026-2218-posts-ms8e3ooo-4",
        "aliases": [],
        "sector": "Medical",
        "sector_color": "#059669",
        "org_en": "All India Institute of Medical Sciences (AIIMS New Delhi)",
        "org_hi": "अखिल भारतीय आयुर्विज्ञान संस्थान (एम्स नई दिल्ली)",
        "post_name_en": "Nursing Officer Recruitment Common Eligibility Test (NORCET-11) 2026",
        "post_name_hi": "नर्सिंग ऑफिसर भर्ती सामान्य पात्रता परीक्षा (नॉर्सेट-11) 2026",
        "title_en": "AIIMS NORCET-11 Nursing Officer Recruitment 2026: 2,218 Posts in All AIIMS",
        "title_hi": "एम्स नर्सिंग ऑफिसर भर्ती 2026 (NORCET-11): 2,218 पद, B.Sc नर्सिंग व GNM हेतु भर्ती",
        "desc_en": "AIIMS NORCET 11 Notification for 2,218 Nursing Officer Posts across All AIIMS. Check B.Sc Nursing/GNM eligibility, 7th CPC Level 7 salary (₹75,000/mo), Prelims/Mains pattern & apply at aiimsexams.ac.in.",
        "desc_hi": "एम्स नॉर्सेट-11 भर्ती 2026: देश के सभी एम्स में 2,218 नर्सिंग ऑफिसर पद। पे लेवल 7 सैलरी, स्टेज-1 व स्टेज-2 परीक्षा सिलेबस व aiimsexams.ac.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "2,218 Posts (AIIMS New Delhi, Bhopal, Bhubaneswar, Jodhpur, Patna, Rishikesh, Raipur, Nagpur, etc.)",
        "qualification_en": "B.Sc (Hons.) Nursing / B.Sc Nursing OR Diploma in GNM with 2 Years' Experience in minimum 50-bedded Hospital + State/INC Nursing Council Registration",
        "qualification_hi": "बी.एससी (ऑनर्स) नर्सिंग / बी.एससी नर्सिंग या 50 बिस्तरों वाले अस्पताल में 2 वर्ष के अनुभव के साथ जीएनएम डिप्लोमा + नर्सिंग काउंसिल पंजीकरण",
        "age_limit": "18 to 30 Years (as on closing date)",
        "salary": "Pay Level 7 (₹44,900 – ₹1,42,400) | In-Hand: ₹72,000 – ₹82,000/month",
        "job_location": "All 18+ AIIMS Institutes and Central Govt Hospitals across India",
        "official_portal": "https://www.aiimsexams.ac.in",
        "apply_link": "https://norcet11.aiimsexams.ac.in/",
        "notification_link": "https://www.aiimsexams.ac.in",
        "date_posted": "2026-08-01",
        "valid_through": "2026-08-21T17:00",
        "dates": [
            ("अधिसूचना जारी तिथि", "01 अगस्त 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "01 अगस्त 2026"),
            ("आवेदन की अंतिम तिथि", "21 अगस्त 2026 (शाम 05:00 बजे तक)"),
            ("स्टेज-1 प्रारंभिक परीक्षा (Stage-1 Prelims)", "15 सितंबर 2026"),
            ("स्टेज-2 मुख्य परीक्षा (Stage-2 Mains)", "06 अक्टूबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी", "₹3,000/-"),
            ("एससी / एसटी / ईडब्ल्यूएस", "₹2,400/- (परीक्षा देने पर SC/ST को फीस रिफंड)"),
            ("दिव्यांगजन (PwD)", "₹0/- (निःशुल्क)")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष"),
            ("दिव्यांगजन", "10 वर्ष"),
            ("एम्स नियमित कर्मचारी", "5 वर्ष की अतिरिक्त छूट")
        ],
        "posts_table": [
            ("Nursing Officer (Staff Nurse Gr-II)", "AIIMS New Delhi & Other AIIMS", "Group B", "Level 7 (₹44,900 – ₹1,42,400)", "₹76,000+", "B.Sc Nursing OR GNM + 2 Yr Exp")
        ],
        "exam_pattern": {
            "tier1": [
                ("Nursing Subjects", "80 Questions", "80 Marks", "90 मिनट (1/3rd Negative Marking)"),
                ("General Knowledge & Aptitude", "20 Questions", "20 Marks", "90 मिनट"),
                ("कुल योग (Stage-1 Prelims)", "100 Questions", "100 Marks", "5 गुना अभ्यर्थी मेन्स हेतु चयनित")
            ],
            "tier2": [
                ("Clinical Case Scenarios & Nursing Skills", "100 Questions", "100 Marks", "90 मिनट (1/3rd Negative Marking, मेरिट इसी से बनती है)")
            ]
        },
        "problems": [
            ("1. 80:20 महिला-पुरुष आरक्षण नियम (80:20 Female-Male Ratio)", "एम्स नॉर्सेट भर्ती में 80% सीटें महिला नर्सिंग अधिकारियों हेतु और 20% सीटें पुरुष नर्सिंग अधिकारियों हेतु आरक्षित रहती हैं।"),
            ("2. जीएनएम अभ्यर्थियों हेतु 50 बेडेड अस्पताल अनुभव प्रमाण पत्र", "जीएनएम उम्मीदवारों के लिए अनुभव प्रमाण पत्र में अस्पताल का रजिस्ट्रेशन नंबर और 50 बेड की क्षमता स्पष्ट उल्लेखित होनी चाहिए।")
        ],
        "faqs": [
            ("क्या अंतिम वर्ष के नर्सिंग छात्र आवेदन कर सकते हैं?", "नहीं, आवेदन की अंतिम तिथि तक राज्य नर्सिंग काउंसिल (State Nursing Council) में पंजीकृत होना अनिवार्य है।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "rajasthan-safai-karmachari-sanitation-worker-recruitment-2026-msa62jkl-3.html": {
        "slug": "rajasthan-safai-karmachari-sanitation-worker-recruitment-2026-msa62jkl-3",
        "aliases": [],
        "sector": "State Govt",
        "sector_color": "#d97706",
        "org_en": "Local Self Government Department (LSG Rajasthan)",
        "org_hi": "स्वायत्त शासन विभाग (राजस्थान सरकार)",
        "post_name_en": "Rajasthan Safai Karmachari Bharti 2026 in 186 Urban Local Bodies",
        "post_name_hi": "राजस्थान सफाई कर्मचारी सीधी भर्ती 2026 (186 नगरीय निकाय)",
        "title_en": "Rajasthan Safai Karamchari Bharti 2026: 24,797 Sanitation Worker Vacancies",
        "title_hi": "राजस्थान सफाई कर्मचारी भर्ती 2026: 24,797 पद, 8वीं पास हेतु बंपर भर्ती, ऑनलाइन आवेदन",
        "desc_en": "Rajasthan Safai Karamchari Bharti 2026 for 24,797 Vacancies in 186 ULBs. Check 1-year cleaning experience criteria, Pay Level-1 salary, lottery/trade test process & apply via SSO Portal at lsg.urban.rajasthan.gov.in.",
        "desc_hi": "राजस्थान सफाई कर्मचारी भर्ती 2026: 186 नगरीय निकायों में 24,797 पदों पर बंपर भर्ती। 1 वर्ष का अनुभव प्रमाण पत्र, पे मैट्रिक्स लेवल-1, लॉटरी व ट्रेड टेस्ट प्रक्रिया। SSO पोर्टल से ऑनलाइन आवेदन।",
        "vacancies": "24,797 Posts (Across 186 Municipal Corporations, Councils & Municipalities in Rajasthan)",
        "qualification_en": "Resident of Rajasthan State + Minimum 1 Year Practical Cleaning Experience Certificate from Govt/Semi-Govt/Contractor Firm",
        "qualification_hi": "राजस्थान का मूल निवासी + सरकारी/अर्ध-सरकारी/अनुबंधित फर्म से न्यूनतम 1 वर्ष का सफाई कार्य अनुभव प्रमाण पत्र",
        "age_limit": "18 to 40 Years (as on 01.01.2026)",
        "salary": "Pay Matrix Level L-1 (₹17,900 – ₹56,900) | Probation Pay: ₹12,400/month fixed",
        "job_location": "186 Urban Local Bodies (Municipal Corporations / Municipal Councils) in Rajasthan",
        "official_portal": "https://lsg.urban.rajasthan.gov.in",
        "apply_link": "https://sso.rajasthan.gov.in",
        "notification_link": "https://lsg.urban.rajasthan.gov.in",
        "date_posted": "2026-03-01",
        "valid_through": "2026-03-24T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "01 मार्च 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "04 मार्च 2026"),
            ("आवेदन की अंतिम तिथि", "24 मार्च 2026"),
            ("फॉर्म सुधार विंडो", "27 मार्च से 02 अप्रैल 2026"),
            ("प्रायोगिक परीक्षा व लॉटरी", "मई – जून 2026")
        ],
        "fees": [
            ("सामान्य (UR) अभ्यर्थी (OTR शुल्क)", "₹600/-"),
            ("आरक्षित वर्ग (SC/ST/OBC/EWS/दिव्यांग)", "₹400/-"),
            ("फॉर्म संशोधन शुल्क", "₹100/-")
        ],
        "age_relaxations": [
            ("राजस्थान के एससी/एसटी/ओबीसी/ईडब्ल्यूएस पुरुष", "5 वर्ष की छूट"),
            ("सामान्य वर्ग की महिला अभ्यर्थी", "5 वर्ष की छूट"),
            ("आरक्षित वर्ग की महिला अभ्यर्थी", "10 वर्ष की छूट")
        ],
        "posts_table": [
            ("Safai Karmachari (सफाई कर्मचारी)", "186 Urban Local Bodies in Rajasthan", "Class IV / Group D", "Pay Level L-1 (₹17,900 – ₹56,900)", "₹22,000+ (After Probation)", "Rajasthan Domicile + 1 Yr Exp")
        ],
        "exam_pattern": {
            "tier1": [
                ("चयन प्रक्रिया (Selection Mode)", "नगरीय निकाय स्तर पर गठित चयन समिति द्वारा लॉटरी व प्रायोगिक परीक्षा (Practical Trade Test)", "Practical Test", "सफाई उपकरणों का संचालन, नाली सफाई, सीवर व झाड़ू लगाने का प्रत्यक्ष कार्य")
            ],
            "tier2": []
        },
        "problems": [
            ("1. अनुभव प्रमाण पत्र (Experience Certificate) की वैधता", "अनुभव प्रमाण पत्र किसी सक्षम अधिकारी (नगर निगम/परिषद आयुक्त, अधिशाषी अधिकारी या सक्षम प्लेसमेंट एजेंसी) द्वारा हस्ताक्षरित होना अनिवार्य है। फर्जी प्रमाण पत्र लगाने पर कानूनी कार्रवाई का प्रावधान है।"),
            ("2. केवल एक ही नगरीय निकाय से आवेदन करने का नियम", "अभ्यर्थी राजस्थान के केवल किसी एक ही नगरीय निकाय से आवेदन कर सकता है। एक से अधिक निकायों में आवेदन करने पर सभी आवेदन रद्द कर दिए जाते हैं।")
        ],
        "faqs": [
            ("क्या इस भर्ती में कोई लिखित परीक्षा होती है?", "नहीं, इस भर्ती में कोई लिखित परीक्षा नहीं होती। चयन प्रायोगिक परीक्षा (ट्रेड टेस्ट) और साक्षात्कार/लॉटरी के आधार पर होता है।"),
            ("तैयारी टूल्स:", "आयु सीमा जांचने हेतु [Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html": {
        "slug": "upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1",
        "aliases": [],
        "sector": "State Govt",
        "sector_color": "#d97706",
        "org_en": "Uttar Pradesh Subordinate Services Selection Commission (UPSSSC)",
        "org_hi": "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (यूपीएसएसएससी)",
        "post_name_en": "Auditor (लेखा परीक्षक) & Assistant Accountant (सहायक लेखाकार) Mains 2026",
        "post_name_hi": "लेखा परीक्षक व सहायक लेखाकार मुख्य परीक्षा 2026",
        "title_en": "UPSSSC Auditor & Assistant Accountant Recruitment 2026: 1,828 Vacancies",
        "title_hi": "यूपीएसएसएससी लेखा परीक्षक व सहायक लेखाकार भर्ती 2026: 1,828 पद, बीकॉम धारकों हेतु भर्ती",
        "desc_en": "UPSSSC Auditor & Assistant Accountant 2026 Notification for 1,828 Posts. Check UPSSSC PET scorecard eligibility, B.Com + 'O' Level criteria, syllabus & apply at upsssc.gov.in.",
        "desc_hi": "यूपीएसएसएससी ऑडिटर व सहायक लेखाकार भर्ती 2026: 1,828 पद। यूपी पीईटी स्कोरकार्ड, बी.कॉम व ओ-लेवल पात्रता, मुख्य परीक्षा सिलेबस व upsssc.gov.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "1,828 Posts (Auditor: 530 + Assistant Accountant: 1,298)",
        "qualification_en": "Valid UPSSSC PET Scorecard + Bachelor's Degree in Commerce (B.Com) or Post Graduate Diploma in Accountancy + DOEACC / NIELIT 'O' Level Certificate",
        "qualification_hi": "वैध यूपीएसएसएससी पीईटी स्कोरकार्ड + वाणिज्य में स्नातक (B.Com) या अकाउंटेंसी में पीजी डिप्लोमा + डोएक/नीलिट से 'O' लेवल प्रमाण पत्र",
        "age_limit": "21 to 40 Years (as on 01.07.2026)",
        "salary": "Pay Level 5 (₹29,200 – ₹92,300) | In-Hand: ₹40,000 – ₹45,000/month",
        "job_location": "Uttar Pradesh (Directorate of Internal Audit & Other State Depts)",
        "official_portal": "https://upsssc.gov.in",
        "apply_link": "https://upsssc.gov.in",
        "notification_link": "https://upsssc.gov.in",
        "date_posted": "2026-06-10",
        "valid_through": "2026-07-05T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "10 जून 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "15 जून 2026"),
            ("आवेदन की अंतिम तिथि", "05 जुलाई 2026"),
            ("फॉर्म संशोधन अंतिम तिथि", "12 जुलाई 2026"),
            ("मुख्य लिखित परीक्षा तिथि", "सितंबर – अक्टूबर 2026")
        ],
        "fees": [
            ("सभी वर्ग प्रारंभिक शॉर्टलिस्टिंग शुल्क (Shortlisting Fee)", "₹25/- (मुख्य परीक्षा हेतु शॉर्टलिस्ट होने पर ₹200 अतिरिक्त)"),
            ("भुगतान के माध्यम", "एसबीआई ई-चालान, नेट बैंकिंग, डेबिट/क्रेडिट कार्ड, यूपीआई")
        ],
        "age_relaxations": [
            ("उत्तर प्रदेश के ओबीसी / एससी / एसटी", "5 वर्ष की छूट (Upper Age 45 Years)"),
            ("दिव्यांगजन", "15 वर्ष की छूट (Upper Age 55 Years तक)")
        ],
        "posts_table": [
            ("Auditor (लेखा परीक्षक)", "Directorate of Internal Audit, UP", "Group C", "Level 5 (₹29,200 – ₹92,300)", "₹42,000+", "B.Com + 'O' Level + PET"),
            ("Assistant Accountant (सहायक लेखाकार)", "Different UP Govt Departments", "Group C", "Level 5 (₹29,200 – ₹92,300)", "₹42,000+", "B.Com + 'O' Level + PET")
        ],
        "exam_pattern": {
            "tier1": [
                ("Part-I: Accountancy & Auditing Concepts", "65 Questions", "65 Marks", "120 मिनट (0.25 Negative Marking)"),
                ("Part-II: Computer Knowledge & Information Tech", "15 Questions", "15 Marks", "120 मिनट"),
                ("Part-III: General Information related to Uttar Pradesh", "20 Questions", "20 Marks", "120 मिनट"),
                ("कुल योग (Mains Exam Total)", "100 Questions", "100 Marks", "कुल समय: 120 मिनट (2 घंटे)")
            ],
            "tier2": []
        },
        "problems": [
            ("1. यूपी पीईटी (PET) वैध स्कोरकार्ड की अनिवार्यता", "इस मुख्य परीक्षा में केवल वही अभ्यर्थी आवेदन कर सकते हैं जिनके पास यूपीएसएसएससी पीईटी का वैध धनात्मक (Non-Zero) स्कोरकार्ड है।"),
            ("2. 'ओ' लेवल (O-Level) समकक्षता शासनादेश", "नीलिट से 'ओ' लेवल सर्टिफिकेट के अलावा यूपी सरकार के 05 मई 2022 के शासनादेश के अनुसार पीजीडीसीए, बीसीए, बीटेक (सीएस/आईटी) या 1 वर्ष का कंप्यूटर डिप्लोमा धारक भी समकक्ष माने जाते हैं।")
        ],
        "faqs": [
            ("क्या अन्य राज्यों के अभ्यर्थी आवेदन कर सकते हैं?", "हाँ, यदि उनके पास यूपी पीईटी स्कोरकार्ड है तो वे सामान्य (General) श्रेणी के तहत आवेदन कर सकते हैं।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "rrb-junior-engineer-recruitment-2026-mseotm9d-0.html": {
        "slug": "rrb-junior-engineer-recruitment-2026-mseotm9d-0",
        "aliases": [],
        "sector": "Railway",
        "sector_color": "#dc2626",
        "org_en": "Railway Recruitment Boards (RRB CEN 03/2026)",
        "org_hi": "रेलवे भर्ती बोर्ड (आरआरबी CEN 03/2026)",
        "post_name_en": "Junior Engineer (JE), Chemical Supervisor & DMS Recruitment 2026",
        "post_name_hi": "जूनियर इंजीनियर (जेई), केमिकल सुपरवाइजर व डीएमएस भर्ती 2026",
        "title_en": "RRB JE Recruitment 2026: 7,951 Junior Engineer & Chemical Supervisor Posts",
        "title_hi": "रेलवे आरआरबी जूनियर इंजीनियर (JE) भर्ती 2026: 7,951 पद, डिप्लोमा व बीटेक धारकों हेतु भर्ती",
        "desc_en": "RRB JE 2026 Notification for 7,951 Vacancies (Civil, Electrical, Mechanical, S&T, Chemical). Check Diploma/B.Tech eligibility, CBT-1 & CBT-2 pattern, Level 6 salary & apply at rrbapply.gov.in.",
        "desc_hi": "रेलवे जेई भर्ती 2026: 7,951 जूनियर इंजीनियर पद। 3-वर्षीय डिप्लोमा व बी.टेक योग्यता, सीबीटी-1 व सीबीटी-2 परीक्षा पैटर्न, ₹35,400 बेसिक पे व rrbapply.gov.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "7,951 Posts",
        "qualification_en": "3-Year Diploma in Engineering or B.E./B.Tech in relevant Engineering branch (Civil, Electrical, Mechanical, Electronics) from recognized Institution",
        "qualification_hi": "मान्यता प्राप्त संस्थान से संबंधित इंजीनियरिंग शाखा में 3-वर्षीय डिप्लोमा या बी.ई / बी.टेक",
        "age_limit": "18 to 36 Years (with 3-Year COVID Age Relaxation)",
        "salary": "Pay Level 6 (₹35,400 – ₹1,12,400) | In-Hand: ₹55,000 – ₹65,000/month",
        "job_location": "All 21 Railway Zones & Production Units across India",
        "official_portal": "https://rrbapply.gov.in",
        "apply_link": "https://rrbapply.gov.in",
        "notification_link": "https://rrbapply.gov.in",
        "date_posted": "2026-07-30",
        "valid_through": "2026-08-29T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "30 जुलाई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "30 जुलाई 2026"),
            ("आवेदन की अंतिम तिथि", "29 अगस्त 2026"),
            ("सीबीटी-1 परीक्षा तिथि", "दिसंबर 2026"),
            ("सीबीटी-2 परीक्षा तिथि", "फरवरी – मार्च 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस", "₹500/- (CBT-1 देने पर ₹400 बैंक रिफंड)"),
            ("महिला / एससी / एसटी / दिव्यांगजन", "₹250/- (CBT-1 देने पर पूरा ₹250 बैंक रिफंड)")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष"),
            ("दिव्यांगजन", "10 वर्ष")
        ],
        "posts_table": [
            ("Junior Engineer (Civil Engineering)", "Railway Zones & Workshops", "Group C", "Level 6 (₹35,400 – ₹1,12,400)", "₹58,000+", "Diploma / Degree in Civil Engg"),
            ("Junior Engineer (Electrical & Mechanical)", "Loco Sheds & Carriage Workshops", "Group C", "Level 6 (₹35,400 – ₹1,12,400)", "₹58,000+", "Diploma / Degree in Electrical/Mech Engg"),
            ("Junior Engineer (Signal & Telecommunication)", "S&T Department", "Group C", "Level 6 (₹35,400 – ₹1,12,400)", "₹58,000+", "Diploma / Degree in Electronics/ECE")
        ],
        "exam_pattern": {
            "tier1": [
                ("Mathematics", "30 Qs", "30 Marks", "90 मिनट (1/3rd Negative)"),
                ("General Intelligence & Reasoning", "25 Qs", "25 Marks", "90 मिनट"),
                ("General Awareness", "15 Qs", "15 Marks", "90 मिनट"),
                ("General Science (Physics & Chemistry 10th standard)", "30 Qs", "30 Marks", "90 मिनट"),
                ("कुल योग (CBT-1)", "100 Questions", "100 Marks", "कुल समय: 90 मिनट (Screening Test)")
            ],
            "tier2": [
                ("General Awareness + Physics & Chemistry + Basics of Computers & Environment", "50 Qs", "50 Marks", "120 मिनट"),
                ("Technical Abilities (Discipline Specific Core Engineering)", "100 Qs", "100 Marks", "120 मिनट"),
                ("कुल योग (CBT-2 Total)", "150 Questions", "150 Marks", "कुल समय: 120 मिनट (मेरिट इसी से बनती है)")
            ]
        },
        "problems": [
            ("1. सीबीटी-2 में टेक्निकल एबिलिटीज (Technical Abilities) की तैयारी", "सीबीटी-2 में 150 में से 100 अंक सीधे आपके कोर इंजीनियरिंग विषय (Civil, Electrical, Mechanical, Electronics) से होते हैं।")
        ],
        "faqs": [
            ("क्या बीटेक वाले छात्र डिप्लोमा वाले पदों के लिए पात्र हैं?", "हाँ, एआईसीटीई के नियमों के अनुसार संबंधित विषय में बी.टेक/बी.ई डिग्रीधारी डिप्लोमा धारकों के पदों हेतु पूर्णतः पात्र हैं।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "rrb-section-controller-recruitment-2026-cen-032026-119-posts-ms8e3ooo-1.html": {
        "slug": "rrb-section-controller-recruitment-2026-cen-032026-119-posts-ms8e3ooo-1",
        "aliases": [],
        "sector": "Railway",
        "sector_color": "#dc2626",
        "org_en": "Railway Recruitment Boards (RRB CEN 03/2026)",
        "org_hi": "रेलवे भर्ती बोर्ड (आरआरबी)",
        "post_name_en": "Section Controller (Traffic & Train Movement) 2026",
        "post_name_hi": "सेक्शन कंट्रोलर (रेल यातायात व परिचालन) भर्ती 2026",
        "title_en": "RRB Section Controller Recruitment 2026: CEN 03/2026, 119 Posts, Apply Online",
        "title_hi": "रेलवे सेक्शन कंट्रोलर भर्ती 2026: 119 पदों पर भर्ती (CEN 03/2026), पात्रता व आवेदन प्रक्रिया",
        "desc_en": "RRB Section Controller CEN 03/2026 Notification for 119 Posts. Check Operating Dept eligibility, Pay Level 6 salary, CBT exam pattern & apply online at rrbapply.gov.in.",
        "desc_hi": "रेलवे सेक्शन कंट्रोलर भर्ती 2026: 119 पदों पर भर्ती। लेवल 6 वेतनमान, चयन प्रक्रिया, सीबीटी परीक्षा सिलेबस व rrbapply.gov.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "119 Posts",
        "qualification_en": "Graduation in Any Discipline from a recognized University + Medical Standard A-2",
        "qualification_hi": "किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री + रेलवे मेडिकल मानक A-2",
        "age_limit": "18 to 36 Years",
        "salary": "Pay Level 6 (₹35,400 – ₹1,12,400) | In-Hand: ₹58,000 – ₹68,000/month",
        "job_location": "Divisional Railway Control Rooms across Indian Railways",
        "official_portal": "https://rrbapply.gov.in",
        "apply_link": "https://rrbapply.gov.in",
        "notification_link": "https://rrbapply.gov.in",
        "date_posted": "2026-08-10",
        "valid_through": "2026-09-08T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "10 अगस्त 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "10 अगस्त 2026"),
            ("आवेदन की अंतिम तिथि", "08 सितंबर 2026"),
            ("सीबीटी परीक्षा तिथि", "नवंबर – दिसंबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस", "₹500/- (रिफंडेबल ₹400)"),
            ("महिला / एससी / एसटी / दिव्यांगजन", "₹250/- (रिफंडेबल ₹250)")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष")
        ],
        "posts_table": [
            ("Section Controller (Operating)", "Divisional Control Offices", "Group C", "Level 6 (₹35,400 – ₹1,12,400)", "₹64,000+", "Graduation in Any Discipline + CBAT Psych Test")
        ],
        "exam_pattern": {
            "tier1": [
                ("General Awareness, Maths, General Intelligence & Reasoning", "100 Qs", "100 Marks", "90 मिनट (1/3rd Negative)")
            ],
            "tier2": [
                ("Computer Based Aptitude Test (CBAT Psycho Test)", "5 Battery Tests", "Qualifying", "न्यूनतम 42 T-Score अनिवार्य")
            ]
        },
        "problems": [
            ("1. मेडिकल स्टैंडर्ड A-2 की अनिवार्यता", "सेक्शन कंट्रोलर के लिए 6/9 बिना चश्मे के दृष्टि और कलर विजन टेस्ट पास करना अनिवार्य होता है।")
        ],
        "faqs": [
            ("सेक्शन कंट्रोलर का कार्य क्या होता है?", "डिवीजन के अंतर्गत आने वाले पूरे रेल नेटवर्क में ट्रेनों के सुगम, सुरक्षित और समयबद्ध संचालन का केंद्रीय नियंत्रण करना।"),
            ("तैयारी टूल्स:", "आयु सीमा जांचने हेतु [Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
        ]
    },
    "upsc-principal-vice-principal-recruitment-2026-delhi-education-dept-828-posts-ms8e3ooo-2.html": {
        "slug": "upsc-principal-vice-principal-recruitment-2026-delhi-education-dept-828-posts-ms8e3ooo-2",
        "aliases": [],
        "sector": "UPSC",
        "sector_color": "#1e3a8a",
        "org_en": "Union Public Service Commission (UPSC - GNCTD Delhi)",
        "org_hi": "संघ लोक सेवा आयोग (यूपीएससी - दिल्ली शिक्षा विभाग)",
        "post_name_en": "Principal & Vice Principal in Directorate of Education, GNCTD 2026",
        "post_name_hi": "प्रिंसिपल व वाइस-प्रिंसिपल सीधी भर्ती 2026 (शिक्षा निदेशालय, दिल्ली)",
        "title_en": "UPSC Principal & Vice Principal Recruitment 2026: 828 Posts in Delhi Education Dept",
        "title_hi": "यूपीएससी प्रिंसिपल व वाइस-प्रिंसिपल भर्ती 2026: दिल्ली शिक्षा विभाग में 828 पदों पर भर्ती",
        "desc_en": "UPSC 2026 Notification for 828 Principal (363 Posts) & Vice Principal (465 Posts) in Delhi Education Dept. Check Master's + B.Ed eligibility, Level 10 & 12 pay scale, CBRT exam & apply at upsconline.nic.in.",
        "desc_hi": "यूपीएससी प्रिंसिपल भर्ती 2026: दिल्ली सरकार के स्कूलों में 828 प्रिंसिपल व वाइस-प्रिंसिपल पद। पे लेवल 10 व 12 वेतनमान, शैक्षणिक अनुभव, सीबीआरटी परीक्षा सिलेबस व upsconline.nic.in पर आवेदन गाइड।",
        "vacancies": "828 Posts (Principal: 363 + Vice Principal: 465)",
        "qualification_en": "Master's Degree from a recognized University with min 50% Marks + Degree in Education (B.Ed) + 2 to 10 Years Teaching/Admin Experience in recognized School/College",
        "qualification_hi": "न्यूनतम 50% अंकों के साथ स्नातकोत्तर (Master's Degree) + बी.एड (B.Ed) डिग्री + मान्यता प्राप्त संस्थान में 2 से 10 वर्ष का शिक्षण/प्रशासनिक अनुभव",
        "age_limit": "Max 50 Years for Principal & Max 45 Years for Vice Principal",
        "salary": "Pay Level 10 & Level 12 (₹56,100 – ₹2,09,200) | In-Hand: ₹95,000 – ₹1,35,000/month",
        "job_location": "Government Senior Secondary Schools under Directorate of Education, Delhi (GNCTD)",
        "official_portal": "https://upsconline.nic.in",
        "apply_link": "https://upsconline.nic.in",
        "notification_link": "https://upsc.gov.in",
        "date_posted": "2026-06-01",
        "valid_through": "2026-06-25T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "01 जून 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "01 जून 2026"),
            ("आवेदन की अंतिम तिथि", "25 जून 2026"),
            ("कंप्यूटर आधारित भर्ती परीक्षा (CBRT)", "सितंबर 2026"),
            ("साक्षात्कार (Interview Round)", "नवंबर – दिसंबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस पुरुष", "₹25/-"),
            ("महिला / एससी / एसटी / दिव्यांगजन", "₹0/- (निःशुल्क)")
        ],
        "age_relaxations": [
            ("ओबीसी (दिल्ली)", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष"),
            ("दिव्यांगजन", "10 वर्ष")
        ],
        "posts_table": [
            ("Principal (Male & Female)", "Directorate of Education, GNCTD", "Group A Gazetted", "Level 12 (₹78,800 – ₹2,09,200)", "₹1,25,000+", "Master's + B.Ed + 10 Yrs Exp"),
            ("Vice Principal (Male & Female)", "Directorate of Education, GNCTD", "Group B Gazetted", "Level 10 (₹56,100 – ₹1,77,500)", "₹95,000+", "Master's + B.Ed + 2 Yrs Exp")
        ],
        "exam_pattern": {
            "tier1": [
                ("General Knowledge & Educational Policies (NEP 2020, RTE Act 2009)", "120 Qs", "300 Marks", "2 घंटे (1/3rd Negative Marking)")
            ],
            "tier2": [
                ("Interview (साक्षात्कार)", "Personality Evaluation", "100 Marks", "वेटेज: 75% (CBRT) : 25% (Interview)")
            ]
        },
        "problems": [
            ("1. अनुभव प्रमाण पत्र का प्रोफार्मा", "अनुभव प्रमाण पत्र स्कूल/कॉलेज के लेटरहेड पर सीबीएसई/शिक्षा विभाग के मान्यता कोड (Affiliation Number) के साथ हस्ताक्षरित होना अनिवार्य है।")
        ],
        "faqs": [
            ("क्या अन्य राज्यों के शिक्षक आवेदन कर सकते हैं?", "हाँ, पूरे भारत के शिक्षक आवेदन कर सकते हैं, बशर्ते उनके पास आवश्यक योग्यता और शिक्षण अनुभव हो।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "rajasthan-high-court-stenographer-recruitment-2026-grade-ii-iii-163-posts-ms8e3ooo-3.html": {
        "slug": "rajasthan-high-court-stenographer-recruitment-2026-grade-ii-iii-163-posts-ms8e3ooo-3",
        "aliases": [],
        "sector": "State Govt",
        "sector_color": "#d97706",
        "org_en": "High Court of Judicature for Rajasthan (HCRAJ Jodhpur)",
        "org_hi": "राजस्थान उच्च न्यायालय (जोधपुर)",
        "post_name_en": "Hindi & English Stenographer Grade-III in District Courts 2026",
        "post_name_hi": "आशुलिपिक (स्टेनोग्राफर) ग्रेड-III सीधी भर्ती 2026",
        "title_en": "Rajasthan High Court Stenographer Recruitment 2026: 163 Grade II & III Posts",
        "title_hi": "राजस्थान हाईकोर्ट स्टेनोग्राफर भर्ती 2026: 163 पद (ग्रेड II व III), ऑनलाइन आवेदन",
        "desc_en": "Rajasthan High Court Stenographer 2026 Notification for 163 Grade-III Posts in District Courts. Check 12th pass + 80 wpm shorthand eligibility, Pay Level L-10 salary & apply at hcraj.nic.in.",
        "desc_hi": "राजस्थान हाईकोर्ट स्टेनोग्राफर भर्ती 2026: जिला न्यायालयों में 163 पद। 12वीं पास व 80 शब्द/मिनट आशुलिपि, पे मैट्रिक्स लेवल L-10 वेतनमान व hcraj.nic.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "163 Posts",
        "qualification_en": "12th Pass (Senior Secondary) from recognized Board + Basic Computer Knowledge (RS-CIT / 'O' Level / Degree) + Hindi Shorthand 80 wpm / English Shorthand 80 wpm",
        "qualification_hi": "12वीं कक्षा उत्तीर्ण + कंप्यूटर डिप्लोमा (RS-CIT / 'O' लेवल / डिग्री) + हिंदी/अंग्रेजी आशुलिपि (Shorthand) 80 शब्द प्रति मिनट गति",
        "age_limit": "18 to 40 Years (as on 01.01.2026)",
        "salary": "Pay Level L-10 (₹33,800 – ₹1,06,700) | Probation Pay: ₹23,700/month fixed",
        "job_location": "District Courts & Commercial Courts across Rajasthan",
        "official_portal": "https://hcraj.nic.in",
        "apply_link": "https://hcraj.nic.in",
        "notification_link": "https://hcraj.nic.in",
        "date_posted": "2026-07-20",
        "valid_through": "2026-08-18T17:00",
        "dates": [
            ("अधिसूचना जारी तिथि", "20 जुलाई 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "22 जुलाई 2026"),
            ("आवेदन की अंतिम तिथि", "18 अगस्त 2026 (शाम 05:00 बजे तक)"),
            ("आशुलिपि व कंप्यूटर दक्षता परीक्षा", "अक्टूबर – नवंबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी (क्रीमीलेयर)", "₹700/-"),
            ("ओबीसी (नॉन-क्रीमीलेयर) / ईडब्ल्यूएस", "₹550/-"),
            ("एससी / एसटी / दिव्यांगजन", "₹450/-")
        ],
        "age_relaxations": [
            ("राजस्थान के एससी/एसटी/ओबीसी पुरुष", "5 वर्ष की छूट"),
            ("महिला अभ्यर्थी (सामान्य)", "5 वर्ष की छूट"),
            ("महिला अभ्यर्थी (आरक्षित वर्ग)", "10 वर्ष की छूट")
        ],
        "posts_table": [
            ("Stenographer Grade-III (Hindi)", "District Courts in Rajasthan", "Group C", "Level L-10 (₹33,800 – ₹1,06,700)", "₹48,000+ (Post Probation)", "12th Pass + Hindi Shorthand 80 wpm"),
            ("Stenographer Grade-III (English)", "District Courts in Rajasthan", "Group C", "Level L-10 (₹33,800 – ₹1,06,700)", "₹48,000+ (Post Probation)", "12th Pass + English Shorthand 80 wpm")
        ],
        "exam_pattern": {
            "tier1": [
                ("Shorthand Dictation (Hindi/English 80 wpm for 6 mins)", "480 Words", "100 Marks", "50 मिनट ट्रांसक्रिप्शन समय"),
                ("Computer Speed & Efficiency Test", "Speed (50 M) + Efficiency (50 M)", "100 Marks", "20 मिनट कुल समय (न्यूनतम 40% अंक)")
            ],
            "tier2": []
        },
        "problems": [
            ("1. आशुलिपि श्रुतलेख (Dictation) और ट्रांसक्रिप्शन नियम", "डिक्टेशन 80 शब्द प्रति मिनट की गति से 6 मिनट तक बोला जाता है। इसके बाद कंप्यूटर पर टाइप करके ट्रांसक्राइब करने हेतु 50 मिनट का समय दिया जाता है।")
        ],
        "faqs": [
            ("क्या कोई लिखित सामान्य ज्ञान परीक्षा होती है?", "नहीं, राजस्थान हाईकोर्ट स्टेनो भर्ती में कोई लिखित जीके/मैथ्स परीक्षा नहीं होती। चयन 100% आशुलिपि और कंप्यूटर दक्षता परीक्षा की मेरिट से होता है।"),
            ("तैयारी टूल्स:", "टाइपिंग अभ्यास हेतु [Typing Test Tool](../tools/typing-speed-test.html) का उपयोग करें।")
        ]
    },
    "isro-recruitment-2026-assistant-udc-jpa-stenographer-244-posts-ms8e3oon-0.html": {
        "slug": "isro-recruitment-2026-assistant-udc-jpa-stenographer-244-posts-ms8e3oon-0",
        "aliases": [],
        "sector": "Scientific",
        "sector_color": "#7c3aed",
        "org_en": "Indian Space Research Organisation (ISRO Centralised Recruitment)",
        "org_hi": "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो)",
        "post_name_en": "Assistant, Junior Personal Assistant (JPA), UDC & Stenographer 2026",
        "post_name_hi": "असिस्टेंट, जूनियर पर्सनल असिस्टेंट (JPA) व स्टेनोग्राफर भर्ती 2026",
        "title_en": "ISRO Assistant & JPA Recruitment 2026: 244 Vacancies for Graduates",
        "title_hi": "इसरो असिस्टेंट व जूनियर पर्सनल असिस्टेंट भर्ती 2026: 244 पद, ग्रेजुएट्स हेतु भर्ती",
        "desc_en": "ISRO 2026 Notification for 244 Assistant, JPA, UDC & Stenographer Posts. Check Graduation (60%) + Typing eligibility, Level 4 salary (₹42,000/mo) & apply at isro.gov.in.",
        "desc_hi": "इसरो भर्ती 2026: 244 असिस्टेंट व JPA पदों पर भर्ती। 60% अंकों के साथ स्नातक डिग्री, पे लेवल 4 वेतनमान, लिखित परीक्षा व स्किल टेस्ट की पूरी जानकारी।",
        "vacancies": "244 Posts",
        "qualification_en": "Graduation with minimum 60% Marks OR Diploma in Commercial/Secretarial Practice + Proficiency in Computer + Typing/Shorthand for JPA",
        "qualification_hi": "न्यूनतम 60% अंकों के साथ स्नातक डिग्री या कमर्शियल/सेक्रेटेरियल प्रैक्टिस में डिप्लोमा + कंप्यूटर दक्षता + JPA हेतु आशुलिपि ज्ञान",
        "age_limit": "18 to 28 Years",
        "salary": "Pay Level 4 (₹25,500 – ₹81,100) | In-Hand: ₹42,000/month",
        "job_location": "ISRO Centres across India (Bangalore, Thiruvananthapuram, Sriharikota, Hyderabad, Ahmedabad)",
        "official_portal": "https://www.isro.gov.in",
        "apply_link": "https://www.isro.gov.in",
        "notification_link": "https://www.isro.gov.in",
        "date_posted": "2026-06-15",
        "valid_through": "2026-07-10T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "15 जून 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "15 जून 2026"),
            ("आवेदन की अंतिम तिथि", "10 जुलाई 2026"),
            ("लिखित परीक्षा तिथि", "सितंबर 2026"),
            ("स्किल टेस्ट तिथि", "नवंबर 2026")
        ],
        "fees": [
            ("आवेदन शुल्क", "₹500/- (लिखित परीक्षा देने पर SC/ST/PwD/महिलाओं को पूरा ₹500 रिफंड और अन्य को ₹400 रिफंड)")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष")
        ],
        "posts_table": [
            ("Assistant / UDC", "ISRO HQ & Centres", "Group C", "Level 4 (₹25,500 – ₹81,100)", "₹42,000+", "Graduation (60%) + Computer Use"),
            ("Junior Personal Assistant (JPA) / Stenographer", "ISRO Centres", "Group C", "Level 4 (₹25,500 – ₹81,100)", "₹42,000+", "Graduation (60%) + 80 wpm Shorthand")
        ],
        "exam_pattern": {
            "tier1": [
                ("General English", "50 Qs", "50 Marks", "120 मिनट (0.25 Negative Marking)"),
                ("Quantitative Aptitude", "50 Qs", "50 Marks", "120 मिनट"),
                ("General Intelligence & Reasoning", "50 Qs", "50 Marks", "120 मिनट"),
                ("General Knowledge", "50 Qs", "50 Marks", "120 मिनट"),
                ("कुल योग (Written Test)", "200 Questions", "200 Marks", "कुल समय: 120 मिनट (2 घंटे)")
            ],
            "tier2": [
                ("Skill Test (Computer Literacy / Shorthand)", "Qualifying Nature", "Pass/Fail", "न्यूनतम 60% अंक अनिवार्य")
            ]
        },
        "problems": [
            ("1. फीस रिफंड नियम", "लिखित परीक्षा में उपस्थित होने पर उम्मीदवारों के बैंक खाते में प्रोसेसिंग फीस सीधे वापस कर दी जाती है।")
        ],
        "faqs": [
            ("क्या इसरो में सरकारी कर्मचारियों को आवास सुविधा मिलती है?", "हाँ, इसरो के प्रमुख केंद्रों (बेंगलुरु, श्रीहरिकोटा) में सुसज्जित आवासीय कॉलोनियां (ISRO Quarters) उपलब्ध कराई जाती हैं।"),
            ("तैयारी टूल्स:", "टाइपिंग स्पीड टेस्ट हेतु [Typing Test](../tools/typing-speed-test.html) का उपयोग करें।")
        ]
    },
    "pnb-local-bank-officer-lbo-recruitment-2026-msa62jkl-2.html": {
        "slug": "pnb-local-bank-officer-lbo-recruitment-2026-msa62jkl-2",
        "aliases": [],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "Punjab National Bank (PNB)",
        "org_hi": "पंजाब नेशनल बैंक (पीएनबी)",
        "post_name_en": "Local Bank Officer (LBO) in JMGS Scale-I 2026",
        "post_name_hi": "लोकल बैंक ऑफिसर (LBO) स्केल-I सीधी भर्ती 2026",
        "title_en": "PNB Local Bank Officer (LBO) Recruitment 2026: 500+ Officer Vacancies",
        "title_hi": "पीएनबी लोकल बैंक ऑफिसर (LBO) भर्ती 2026: पंजाब नेशनल बैंक में 500+ पदों पर भर्ती",
        "desc_en": "PNB Local Bank Officer 2026 Notification for 500+ Vacancies in JMGS-I. Check 1-year banking experience eligibility, Level 10 equivalent salary, exam & apply at pnbindia.in.",
        "desc_hi": "पीएनबी लोकल बैंक ऑफिसर भर्ती 2026: 500+ पदों पर भर्ती। 1 वर्ष का बैंकिंग अनुभव, JMGS-I वेतनमान, चयन प्रक्रिया व pnbindia.in पर ऑनलाइन आवेदन गाइड।",
        "vacancies": "500+ Posts",
        "qualification_en": "Graduation in Any Discipline + Minimum 1 Year Experience as an Officer in Any Scheduled Commercial Bank + State Language Proficiency",
        "qualification_hi": "किसी भी संकाय में स्नातक डिग्री + किसी भी अनुसूचित वाणिज्यिक बैंक में अधिकारी के रूप में न्यूनतम 1 वर्ष का अनुभव + स्थानीय भाषा ज्ञान",
        "age_limit": "21 to 30 Years",
        "salary": "JMGS Scale-I (₹36,000 – ₹63,840) | In-Hand: ₹58,000 – ₹64,000/month",
        "job_location": "Branches of PNB in the Applied State / Circle",
        "official_portal": "https://www.pnbindia.in",
        "apply_link": "https://www.pnbindia.in",
        "notification_link": "https://www.pnbindia.in",
        "date_posted": "2026-08-05",
        "valid_through": "2026-08-30T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "05 अगस्त 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "05 अगस्त 2026"),
            ("आवेदन की अंतिम तिथि", "30 अगस्त 2026"),
            ("ऑनलाइन परीक्षा तिथि", "अक्टूबर 2026"),
            ("साक्षात्कार तिथि", "दिसंबर 2026")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस", "₹1,180/- (GST सहित)"),
            ("एससी / एसटी / दिव्यांगजन", "₹175/-")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष")
        ],
        "posts_table": [
            ("Local Bank Officer (LBO)", "PNB State Branches", "Officer Scale-I", "JMGS-I (₹36,000 – ₹63,840)", "₹60,000+", "Graduation + 1 Yr Banking Exp")
        ],
        "exam_pattern": {
            "tier1": [
                ("Reasoning & Computer Aptitude", "45 Qs", "60 Marks", "60 मिनट"),
                ("Banking Awareness & Economy", "40 Qs", "40 Marks", "35 मिनट"),
                ("Data Analysis & Interpretation", "35 Qs", "60 Marks", "45 मिनट"),
                ("English Language", "35 Qs", "40 Marks", "40 मिनट"),
                ("कुल योग (Online Test)", "155 Questions", "200 Marks", "180 मिनट (0.25 Negative)")
            ],
            "tier2": [
                ("Interview (साक्षात्कार)", "Personality & Banking Knowledge", "50 Marks", "वेटेज 80:20")
            ]
        },
        "problems": [
            ("1. 1 वर्ष का बैंकिंग अनुभव प्रमाण पत्र", "अनुभव प्रमाण पत्र किसी शेड्यूल कमर्शियल बैंक द्वारा जारी होना चाहिए। स्मॉल फाइनेंस बैंक या एनबीएफसी का अनुभव मान्य नहीं होता।")
        ],
        "faqs": [
            ("एलबीओ अधिकारी का ट्रांसफर कहाँ होता है?", "लोकल बैंक ऑफिसर को उसी राज्य/सर्कल में पदस्थापना दी जाती है जिसके लिए आवेदन किया गया है।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    },
    "ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html": {
        "slug": "ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026",
        "aliases": [],
        "sector": "Banking",
        "sector_color": "#0284c7",
        "org_en": "Institute of Banking Personnel Selection (IBPS RRB-XV)",
        "org_hi": "बैंकिंग कार्मिक चयन संस्थान (आईबीपीएस क्षेत्रीय ग्रामीण बैंक)",
        "post_name_en": "Office Assistant (Multipurpose) & Officer Scale I, II, III (CRP RRBs-XV) 2026",
        "post_name_hi": "ऑफिस असिस्टेंट (क्लर्क) व ऑफिसर स्केल I, II, III भर्ती 2026",
        "title_en": "IBPS RRB-XV Recruitment 2026: 10,313 Gramin Bank Office Assistant & Officer Posts",
        "title_hi": "आईबीपीएस ग्रामीण बैंक भर्ती 2026 (RRB-XV): 10,313 ऑफिस असिस्टेंट व ऑफिसर पद",
        "desc_en": "IBPS RRB XV 2026 Notification for 10,313 Vacancies (Clerk & PO) in 43 Regional Rural Banks. Check state-wise posts, Prelims/Mains pattern, salary & apply at ibps.in.",
        "desc_hi": "आईबीपीएस आरआरबी-XV भर्ती 2026: देश के 43 ग्रामीण बैंकों में 10,313 पद (क्लर्क व स्केल-1, 2, 3)। पात्रता, परीक्षा पैटर्न, राज्यवार सीटें व ibps.in पर ऑनलाइन आवेदन प्रक्रिया।",
        "vacancies": "10,313 Posts (Office Assistant: 5,800 + Officer Scale-I: 3,583 + Scale-II/III: 930)",
        "qualification_en": "Bachelor's Degree in Any Discipline from a recognized University + Proficiency in Local State Language",
        "qualification_hi": "किसी भी संकाय में स्नातक (Graduation) डिग्री + राज्य की स्थानीय ग्रामीण भाषा का ज्ञान",
        "age_limit": "18 to 28 Years (Clerk), 18 to 30 Years (Scale-I), 21 to 40 Years (Scale-II/III)",
        "salary": "Office Assistant: ₹30,000 – ₹35,000/mo | Officer Scale-I: ₹52,000 – ₹60,000/mo",
        "job_location": "43 Regional Rural Banks (Gramin Banks) across All States in India",
        "official_portal": "https://www.ibps.in",
        "apply_link": "https://ibpsonline.ibps.in/",
        "notification_link": "https://www.ibps.in",
        "date_posted": "2026-06-05",
        "valid_through": "2026-06-30T23:59",
        "dates": [
            ("अधिसूचना जारी तिथि", "05 जून 2026"),
            ("ऑनलाइन आवेदन प्रारंभ", "07 जून 2026"),
            ("आवेदन की अंतिम तिथि", "30 जून 2026"),
            ("प्रारंभिक परीक्षा तिथि", "03, 04, 10, 17 व 18 अगस्त 2026"),
            ("मुख्य परीक्षा तिथि (Officer Scale-I)", "29 सितंबर 2026"),
            ("मुख्य परीक्षा तिथि (Office Assistant)", "06 अक्टूबर 2026"),
            ("अनंतिम आवंटन परिणाम", "01 जनवरी 2027")
        ],
        "fees": [
            ("सामान्य / ओबीसी / ईडब्ल्यूएस", "₹850/-"),
            ("एससी / एसटी / दिव्यांगजन", "₹175/-")
        ],
        "age_relaxations": [
            ("ओबीसी", "3 वर्ष"),
            ("एससी / एसटी", "5 वर्ष"),
            ("दिव्यांगजन", "10 वर्ष")
        ],
        "posts_table": [
            ("Office Assistant (Multipurpose)", "43 Regional Rural Banks", "Clerical Cadre", "₹19,900 – ₹47,920", "₹32,000+", "Graduation + Local Language"),
            ("Officer Scale-I (Assistant Manager)", "43 Regional Rural Banks", "Officer Scale-I", "₹36,000 – ₹63,840", "₹56,000+", "Graduation in Any Stream"),
            ("Officer Scale-II (Generalist / Specialist)", "43 Regional Rural Banks", "Officer Scale-II", "₹48,170 – ₹69,810", "₹72,000+", "Graduation (50%) + 2 Yrs Banking Exp")
        ],
        "exam_pattern": {
            "tier1": [
                ("Reasoning Ability", "40 Qs", "40 Marks", "45 मिनट (Composite Time)"),
                ("Numerical Ability / Quantitative Aptitude", "40 Qs", "40 Marks", "45 मिनट (Composite Time)"),
                ("कुल योग (Prelims Total)", "80 Questions", "80 Marks", "कुल समय: 45 मिनट (No English in Prelims)")
            ],
            "tier2": [
                ("Reasoning", "40 Qs", "50 Marks", "120 मिनट (Composite Time)"),
                ("Computer Knowledge", "40 Qs", "20 Marks", "120 मिनट"),
                ("General Awareness", "40 Qs", "40 Marks", "120 मिनट"),
                ("English OR Hindi Language (Option to choose)", "40 Qs", "40 Marks", "120 मिनट"),
                ("Quantitative Aptitude", "40 Qs", "50 Marks", "120 मिनट"),
                ("कुल योग (Mains Total)", "200 Questions", "200 Marks", "कुल समय: 120 मिनट (2 घंटे)")
            ]
        },
        "problems": [
            ("1. प्रीलिम्स में अंग्रेजी विषय का न होना", "आईबीपीएस आरआरबी प्रीलिम्स में अंग्रेजी विषय नहीं होता, केवल रीजनिंग और मैथ्स (40-40 प्रश्न) होते हैं।"),
            ("2. मेन्स में हिंदी या अंग्रेजी भाषा चुनने का विकल्प", "मेन्स परीक्षा में उम्मीदवार के पास सामान्य हिंदी या सामान्य अंग्रेजी में से किसी एक भाषा का चयन करने का सुनहरा अवसर होता है।")
        ],
        "faqs": [
            ("क्या ग्रामीण बैंक में होम स्टेट (गृह राज्य) में पोस्टिंग मिलती है?", "हाँ, आरआरबी में पदस्थापना राज्य के ही ग्रामीण बैंक के अधिकार क्षेत्र में मिलती है, जिससे गृह राज्य में रहने का सबसे अच्छा अवसर मिलता है।"),
            ("तैयारी टूल्स:", "फोटो रिसाइज करने हेतु [Photo Resizer](../tools/photo-resizer.html) का उपयोग करें।")
        ]
    }
}
print('All 22 Job Datasets Ready!')

def generate_job_page(filename, cfg):
    slug = cfg["slug"]
    canonical_url = f"https://sarkarisewaindia.com/jobs/{filename}"
    
    # Generate Dates rows
    dates_html = "".join([f"""<tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">{k}</td><td style="padding: 10px 14px; color: var(--color-primary); font-weight: 700;">{v}</td></tr>""" for k, v in cfg["dates"]])
    
    # Generate Fees rows
    fees_html = "".join([f"""<tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">{k}</td><td style="padding: 10px 14px; color: #059669; font-weight: 700;">{v}</td></tr>""" for k, v in cfg["fees"]])
    
    # Generate Age Relaxation rows
    age_html = "".join([f"""<tr style="border-bottom: 1px solid var(--color-border);"><td style="padding: 10px 14px; font-weight: 600;">{k}</td><td style="padding: 10px 14px; color: var(--color-primary); font-weight: 700;">{v}</td></tr>""" for k, v in cfg["age_relaxations"]])
    
    # Generate Posts table rows
    posts_html = ""
    for p in cfg["posts_table"]:
        p0 = p[0] if len(p) > 0 else ""
        p1 = p[1] if len(p) > 1 else ""
        p2 = p[2] if len(p) > 2 else ""
        p3 = p[3] if len(p) > 3 else ""
        p4 = p[4] if len(p) > 4 else ""
        p5 = p[5] if len(p) > 5 else "Graduation / Relevant Qualification"
        posts_html += f"""<tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 10px 12px; font-weight: 700; color: var(--color-text);">{p0}</td>
            <td style="padding: 10px 12px; color: var(--color-muted); font-size: 0.9rem;">{p1}</td>
            <td style="padding: 10px 12px;"><span style="display:inline-block; padding: 2px 8px; border-radius: 4px; background: rgba(37,99,235,0.1); color: var(--color-primary); font-size: 0.85rem; font-weight: 700;">{p2}</span></td>
            <td style="padding: 10px 12px; font-weight: 700; color: #059669;">{p3}</td>
            <td style="padding: 10px 12px; font-weight: 700; color: #d97706;">{p4}</td>
            <td style="padding: 10px 12px; font-size: 0.88rem; color: var(--color-text);">{p5}</td>
        </tr>"""

    # Generate Exam Pattern rows
    tier1_html = ""
    for t in cfg["exam_pattern"].get("tier1", []):
        tier1_html += f"""<tr style="border-bottom: 1px solid var(--color-border);">
            <td style="padding: 10px 14px; font-weight: 600;">{t[0]}</td>
            <td style="padding: 10px 14px; font-weight: 700; text-align: center;">{t[1]}</td>
            <td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary); text-align: center;">{t[2]}</td>
            <td style="padding: 10px 14px; color: var(--color-muted); font-size: 0.88rem;">{t[3]}</td>
        </tr>"""

    tier2_html = ""
    if cfg["exam_pattern"].get("tier2"):
        tier2_html += """<h4 style="color: var(--color-primary); margin: 20px 0 12px 0;">Tier-2 / Phase-2 Exam Pattern (द्वितीय चरण)</h4>
        <div style="overflow-x: auto; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; font-size: 0.95rem;">
            <thead>
              <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border); text-align: left;">
                <th style="padding: 10px 14px; color: var(--color-primary);">पेपर / मॉड्यूल (Paper / Module)</th>
                <th style="padding: 10px 14px; color: var(--color-primary); text-align: center;">प्रश्न (Qs)</th>
                <th style="padding: 10px 14px; color: var(--color-primary); text-align: center;">अंक (Marks)</th>
                <th style="padding: 10px 14px; color: var(--color-primary);">समय व नियम</th>
              </tr>
            </thead>
            <tbody>"""
        for t in cfg["exam_pattern"]["tier2"]:
            tier2_html += f"""<tr style="border-bottom: 1px solid var(--color-border);">
                <td style="padding: 10px 14px; font-weight: 600;">{t[0]}</td>
                <td style="padding: 10px 14px; font-weight: 700; text-align: center;">{t[1]}</td>
                <td style="padding: 10px 14px; font-weight: 700; color: var(--color-primary); text-align: center;">{t[2]}</td>
                <td style="padding: 10px 14px; color: var(--color-muted); font-size: 0.88rem;">{t[3]}</td>
            </tr>"""
        tier2_html += "</tbody></table></div>"

    # Generate Problems HTML
    problems_html = ""
    for prob in cfg["problems"]:
        problems_html += f"""<div class="prob-box" style="margin-bottom: 16px; padding: 18px 20px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); border-left: 5px solid {cfg["sector_color"]};">
            <h4 style="margin: 0 0 8px 0; color: var(--color-text); font-size: 1.05rem; display: flex; align-items: center; gap: 8px;">
                <span>🛠️</span> <span>{prob[0]}</span>
            </h4>
            <p style="margin: 0; color: var(--color-text); font-size: 0.95rem; line-height: 1.6;">{prob[1]}</p>
        </div>"""

    # Build full list of 10 rich FAQs
    job_faqs = list(cfg.get("faqs", []))
    default_job_faqs = [
        ("क्या इस भर्ती में अंतिम वर्ष (Final Year/Appearing) के छात्र आवेदन कर सकते हैं?", f"आवेदन की निर्धारित क्रूशियल कट-ऑफ तिथि तक आपकी शैक्षणिक डिग्री/डिप्लोमा का अंतिम परिणाम घोषित और उत्तीर्ण होना अनिवार्य है।"),
        ("फॉर्म भरने के बाद गलती होने पर क्या सुधार (Correction) का मौका मिलता है?", "हाँ, आवेदन की अंतिम तिथि समाप्त होने के बाद भर्ती बोर्ड 2 से 3 दिनों के लिए ऑनलाइन 'Application Correction Window' खोलता है जिसमें निर्धारित शुल्क का भुगतान कर त्रुटि सुधारी जा सकती है।"),
        ("परीक्षा का एडमिट कार्ड (Admit Card) कब जारी होता है?", f"लिखित/सीबीटी परीक्षा की निर्धारित तिथि से लगभग 4 से 7 दिन पूर्व आधिकारिक पोर्टल ({cfg['official_portal']}) पर रोल नंबर व परीक्षा केंद्र की जानकारी के साथ ई-एडमिट कार्ड जारी किया जाता है।"),
        ("क्या इस परीक्षा में गलत उत्तर पर नेगेटिव मार्किंग (Negative Marking) होती है?", "हाँ, वस्तुनिष्ठ (MCQ) आधारित परीक्षाओं में प्रत्येक गलत उत्तर पर निर्धारित नकारात्मक अंकन (सामान्यतः 1/3 या 1/4 अंक) काटा जाता है।"),
        ("वेतन (Salary) के साथ अन्य क्या सरकारी सुविधाएं व भत्ते मिलते हैं?", f"मूल वेतनमान ({cfg['salary']}) के अतिरिक्त केंद्र/राज्य सरकार के नियमानुसार महंगाई भत्ता (DA), मकान किराया भत्ता (HRA), परिवहन भत्ता (TA) व चिकित्सा बीमा लाभ मिलते हैं।"),
        ("दस्तावेज़ सत्यापन (Document Verification) के समय कौन से मूल प्रमाण पत्र ले जाने होंगे?", "10वीं/12वीं अंकतालिका व प्रमाण पत्र, डिग्री/डिप्लोमा सर्टिफिकेट, जाति/ईडब्ल्यूएस प्रमाण पत्र, मूल निवास (Domicile), वैध फोटो पहचान पत्र (आधार/पैन) और ऑनलाइन फॉर्म का प्रिंटआउट।"),
        ("ओबीसी नॉन-क्रीमीलेयर व ईडब्ल्यूएस प्रमाण पत्र की वैधता कितनी होती है?", "आरक्षण प्रमाण पत्र चालू वित्तीय वर्ष का बना होना चाहिए और अधिसूचना में दी गई कट-ऑफ तिथि से पूर्व का होना अनिवार्य है।"),
        ("तैयारी व फॉर्म भरने हेतु उपयोगी टूल्स कौन से हैं?", "फोटो का आकार सेट करने हेतु [Photo Resizer](../tools/photo-resizer.html), हस्ताक्षर हेतु [Signature Resizer](../tools/signature-resizer.html) और आयु सीमा जांचने हेतु [Age Calculator](../tools/age-calculator.html) का उपयोग करें।")
    ]
    for d_q, d_a in default_job_faqs:
        if len(job_faqs) >= 10:
            break
        # Avoid duplicate question names
        if not any(d_q in q for q, _ in job_faqs):
            job_faqs.append((d_q, d_a))

    # Generate FAQs HTML & Schema
    faqs_html = ""
    faq_schema_items = []
    for q, a in job_faqs:
        faqs_html += f"""<details class="faq-item" style="margin-bottom: 12px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); overflow: hidden;">
            <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-text); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span>❓ {q}</span>
                <span style="font-size: 1.2rem; color: var(--color-primary);">▾</span>
            </summary>
            <div style="padding: 0 20px 16px 20px; color: var(--color-text); font-size: 0.95rem; line-height: 1.6; border-top: 1px solid var(--color-border); padding-top: 12px;">
                {a}
            </div>
        </details>"""
        faq_schema_items.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": re.sub(r'<[^>]+>', '', a)
            }
        })

    # JSON-LD schemas
    job_posting_schema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": cfg["title_en"],
        "description": f"{cfg['desc_en']} Complete Sarkari Naukri recruitment notification for {cfg['post_name_en']} released by {cfg['org_en']}. Total Vacancies: {cfg['vacancies']}, Eligibility: {cfg['qualification_en']}, Salary: {cfg['salary']}.",
        "identifier": {
            "@type": "PropertyValue",
            "name": cfg["org_en"],
            "value": cfg["slug"]
        },
        "datePosted": cfg["date_posted"],
        "validThrough": cfg["valid_through"],
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": cfg["org_en"],
            "sameAs": cfg["official_portal"],
            "logo": "https://sarkarisewaindia.com/assets/img/logo.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "minValue": 25000,
                "maxValue": 150000,
                "unitText": "MONTH"
            }
        },
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "India"
        }
    }

    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq_schema_items
    }

    breadcrumbs_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/"},
            {"@type": "ListItem", "position": 2, "name": "Sarkari Jobs", "item": "https://sarkarisewaindia.com/jobs/"},
            {"@type": "ListItem", "position": 3, "name": cfg["post_name_en"], "item": canonical_url}
        ]
    }

    html = f"""<!DOCTYPE html>
<html lang="hi" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{cfg["title_hi"]}</title>
  <meta name="description" content="{cfg["desc_hi"]}">
  <link rel="canonical" href="{canonical_url}">
  
  <!-- Open Graph / Social Meta -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="{cfg["title_hi"]}">
  <meta property="og:description" content="{cfg["desc_hi"]}">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:site_name" content="SarkariSewa India">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/banner.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{cfg["title_en"]}">
  <meta name="twitter:description" content="{cfg["desc_en"]}">
  <meta name="twitter:image" content="https://sarkarisewaindia.com/assets/img/banner.png">

  <!-- Universal Stylesheets -->
  <link rel="stylesheet" href="../assets/css/variables.css">
  <link rel="stylesheet" href="../assets/css/base.css">
  <link rel="stylesheet" href="../assets/css/components.css">
  <link rel="stylesheet" href="../assets/css/layout.css">
  <link rel="stylesheet" href="../assets/css/responsive.css">

  <style>
    /* Clean Bilingual Language Isolation */
    html[lang="hi"] [data-lang-show="en"] {{ display: none !important; }}
    html[lang="en"] [data-lang-show="hi"] {{ display: none !important; }}
    html[lang="hi"] span[data-lang-show="hi"] {{ display: inline !important; }}
    html[lang="en"] span[data-lang-show="en"] {{ display: inline !important; }}
    html[lang="hi"] div[data-lang-show="hi"], html[lang="hi"] p[data-lang-show="hi"], html[lang="hi"] h1[data-lang-show="hi"], html[lang="hi"] h2[data-lang-show="hi"], html[lang="hi"] h3[data-lang-show="hi"] {{ display: block !important; }}
    html[lang="en"] div[data-lang-show="en"], html[lang="en"] p[data-lang-show="en"], html[lang="en"] h1[data-lang-show="en"], html[lang="en"] h2[data-lang-show="en"], html[lang="en"] h3[data-lang-show="en"] {{ display: block !important; }}

    /* High Contrast & Modern Job Styles */
    .job-hero-card {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 32px 28px;
      margin: 24px 0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    }}
    .stat-badge-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }}
    .stat-badge-card {{
      background: rgba(37,99,235,0.05);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }}
    .btn-action-group {{
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 24px;
    }}
    .btn-apply-main {{
      background: #059669;
      color: #ffffff !important;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.2s ease;
    }}
    .btn-apply-main:hover {{
      background: #047857;
      transform: translateY(-2px);
    }}
    .btn-pdf-main {{
      background: #2563eb;
      color: #ffffff !important;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }}
    .btn-vip-tele {{
      background: #0088cc;
      color: #ffffff !important;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }}
    .content-box {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 14px;
      padding: 24px 28px;
      margin-bottom: 24px;
    }}
    .content-box h2 {{
      color: var(--color-primary);
      margin-top: 0;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--color-border);
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }}
    .links-table tr:hover {{
      background: rgba(37,99,235,0.04);
    }}
  </style>

  <!-- Structured Schemas -->
  <script type="application/ld+json">
  {json.dumps(job_posting_schema, ensure_ascii=False, indent=2)}
  </script>
  <script type="application/ld+json">
  {json.dumps(faq_schema, ensure_ascii=False, indent=2)}
  </script>
  <script type="application/ld+json">
  {json.dumps(breadcrumbs_schema, ensure_ascii=False, indent=2)}
  </script>
</head>
<body>
  <!-- Portal Header -->
  <div id="site-header"></div>

  <main class="container" style="max-width: 1000px; margin: 0 auto; padding: 16px;">
    
    <!-- Breadcrumbs Navigation -->
    <nav style="font-size: 0.9rem; margin: 16px 0; color: var(--color-muted);" aria-label="Breadcrumb">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">🏠 होम (Home)</a> &gt; 
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">सरकारी नौकरियां (Jobs)</a> &gt; 
      <span style="color: var(--color-text); font-weight: 600;">{cfg["post_name_en"]}</span>
    </nav>

    <!-- Top Job Alert Hero Card -->
    <div class="job-hero-card">
      <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 12px;">
        <span style="background: {cfg["sector_color"]}; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.85rem;">
          🏛️ {cfg["org_hi"]}
        </span>
        <span style="background: #10b981; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.85rem;">
          🟢 ऑनलाइन फॉर्म चालू (Active)
        </span>
        <span style="background: #f59e0b; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.85rem;">
          👥 {cfg["vacancies"]}
        </span>
      </div>

      <!-- Bilingual Job Title -->
      <h1 style="color: var(--color-text); font-size: 1.75rem; margin: 8px 0 12px 0; line-height: 1.4;" data-lang-show="hi">
        {cfg["title_hi"]}
      </h1>
      <h1 style="color: var(--color-text); font-size: 1.75rem; margin: 8px 0 12px 0; line-height: 1.4;" data-lang-show="en">
        {cfg["title_en"]}
      </h1>

      <!-- Bilingual Description -->
      <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.6; margin: 0;" data-lang-show="hi">
        {cfg["desc_hi"]}
      </p>
      <p style="color: var(--color-text); font-size: 1.05rem; line-height: 1.6; margin: 0;" data-lang-show="en">
        {cfg["desc_en"]}
      </p>

      <!-- 6 Key Highlight Stat Badges -->
      <div class="stat-badge-grid">
        <div class="stat-badge-card">
          <span style="color: var(--color-muted); font-size: 0.85rem; font-weight: 600;">👥 कुल पद (Total Vacancies)</span>
          <span style="color: var(--color-text); font-size: 1.15rem; font-weight: 800;">{cfg["vacancies"]}</span>
        </div>
        <div class="stat-badge-card">
          <span style="color: var(--color-muted); font-size: 0.85rem; font-weight: 600;">🎓 शैक्षणिक योग्यता (Eligibility)</span>
          <span style="color: var(--color-text); font-size: 0.95rem; font-weight: 700;" data-lang-show="hi">{cfg["qualification_hi"]}</span>
          <span style="color: var(--color-text); font-size: 0.95rem; font-weight: 700;" data-lang-show="en">{cfg["qualification_en"]}</span>
        </div>
        <div class="stat-badge-card">
          <span style="color: var(--color-muted); font-size: 0.85rem; font-weight: 600;">💰 वेतनमान (Salary / Pay Matrix)</span>
          <span style="color: #059669; font-size: 1rem; font-weight: 800;">{cfg["salary"]}</span>
        </div>
        <div class="stat-badge-card">
          <span style="color: var(--color-muted); font-size: 0.85rem; font-weight: 600;">⏳ आयु सीमा (Age Limit)</span>
          <span style="color: var(--color-text); font-size: 1rem; font-weight: 700;">{cfg["age_limit"]}</span>
        </div>
        <div class="stat-badge-card">
          <span style="color: var(--color-muted); font-size: 0.85rem; font-weight: 600;">📍 नौकरी स्थान (Job Location)</span>
          <span style="color: var(--color-text); font-size: 0.95rem; font-weight: 700;">{cfg["job_location"]}</span>
        </div>
        <div class="stat-badge-card">
          <span style="color: var(--color-muted); font-size: 0.85rem; font-weight: 600;">🌐 आधिकारिक पोर्टल (Official Web)</span>
          <a href="{cfg["official_portal"]}" target="_blank" rel="noopener" style="color: var(--color-primary); font-size: 0.95rem; font-weight: 700; text-decoration: none;">{cfg["official_portal"]} ↗</a>
        </div>
      </div>

      <!-- Hero Call-To-Action Buttons -->
      <div class="btn-action-group">
        <a href="{cfg["apply_link"]}" target="_blank" rel="noopener" class="btn-apply-main">
          <span>📝 ऑनलाइन आवेदन करें (Apply Online) ↗</span>
        </a>
        <a href="{cfg["notification_link"]}" target="_blank" rel="noopener" class="btn-pdf-main">
          <span>📥 आधिकारिक नोटिफिकेशन डाउनलोड (PDF) ↗</span>
        </a>
        <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener" class="btn-vip-tele">
          <span>✈️ फ्री जॉब अलर्ट टेलीग्राम ग्रुप जॉइन करें ↗</span>
        </a>
      </div>
    </div>

    <!-- Section 1: Important Dates Table -->
    <div class="content-box">
      <h2><span>📅</span> <span>महत्वपूर्ण तिथियां (Important Dates Schedule)</span></h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <thead>
            <tr style="background: rgba(37,99,235,0.08); border-bottom: 2px solid var(--color-border); text-align: left;">
              <th style="padding: 12px 14px; color: var(--color-primary);">घटना / चरण (Events)</th>
              <th style="padding: 12px 14px; color: var(--color-primary);">निर्धारित तिथि (Scheduled Date)</th>
            </tr>
          </thead>
          <tbody>
            {dates_html}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 2: Application Fee & Concession -->
    <div class="content-box">
      <h2><span>💳</span> <span>आवेदन शुल्क व छूट (Application Fee Details)</span></h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <thead>
            <tr style="background: rgba(5,150,105,0.08); border-bottom: 2px solid var(--color-border); text-align: left;">
              <th style="padding: 12px 14px; color: #059669;">श्रेणी (Candidate Category)</th>
              <th style="padding: 12px 14px; color: #059669;">शुल्क (Application Fee)</th>
            </tr>
          </thead>
          <tbody>
            {fees_html}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 3: Age Limit & Relaxation Matrix -->
    <div class="content-box">
      <h2><span>⏳</span> <span>आयु सीमा व श्रेणीवार छूट (Age Limit & Relaxations)</span></h2>
      <p style="margin-top: 0; color: var(--color-text); font-size: 0.95rem;">
        इस भर्ती हेतु निर्धारित कट-ऑफ तिथि के अनुसार न्यूनतम आयु व अधिकतम आयु सीमा <strong>{cfg["age_limit"]}</strong> है। आरक्षित श्रेणियों को भारत सरकार/राज्य सरकार के नियमानुसार ऊपरी आयु सीमा में निम्नलिखित छूट प्रदान की जाती है:
      </p>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <thead>
            <tr style="background: rgba(37,99,235,0.08); border-bottom: 2px solid var(--color-border); text-align: left;">
              <th style="padding: 12px 14px; color: var(--color-primary);">आरक्षित श्रेणी (Category)</th>
              <th style="padding: 12px 14px; color: var(--color-primary);">आयु में छूट (Age Relaxation)</th>
            </tr>
          </thead>
          <tbody>
            {age_html}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 4: Post-wise Vacancy & Pay Matrix -->
    <div class="content-box">
      <h2><span>💼</span> <span>पदवार रिक्तियां व 7वां वेतन आयोग सैलरी (Vacancy & Pay Scale)</span></h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
          <thead>
            <tr style="background: rgba(37,99,235,0.08); border-bottom: 2px solid var(--color-border); text-align: left;">
              <th style="padding: 12px 12px; color: var(--color-primary);">पद का नाम (Post Name)</th>
              <th style="padding: 12px 12px; color: var(--color-primary);">विभाग / मंत्रालय</th>
              <th style="padding: 12px 12px; color: var(--color-primary);">ग्रुप / काडर</th>
              <th style="padding: 12px 12px; color: var(--color-primary);">पे लेवल (7th CPC)</th>
              <th style="padding: 12px 12px; color: var(--color-primary);">इन-हैंड सैलरी</th>
              <th style="padding: 12px 12px; color: var(--color-primary);">न्यूनतम योग्यता</th>
            </tr>
          </thead>
          <tbody>
            {posts_html}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 5: Selection Process & Exam Pattern -->
    <div class="content-box">
      <h2><span>📊</span> <span>चयन प्रक्रिया व विस्तृत परीक्षा पैटर्न (Exam Pattern)</span></h2>
      <p style="margin-top: 0; color: var(--color-text); font-size: 0.95rem;">
        उम्मीदवारों का चयन कंप्यूटर आधारित ऑनलाइन परीक्षा (CBT), स्किल टेस्ट/दस्तावेज़ सत्यापन और मेडिकल परीक्षण के आधार पर किया जाता है:
      </p>
      
      <h4 style="color: var(--color-primary); margin: 16px 0 12px 0;">Tier-1 / Phase-1 CBT Exam Pattern (प्रथम चरण)</h4>
      <div style="overflow-x: auto; margin-bottom: 16px;">
        <table style="width: 100%; border-collapse: collapse; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; font-size: 0.95rem;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border); text-align: left;">
              <th style="padding: 10px 14px; color: var(--color-primary);">विषय (Subject Section)</th>
              <th style="padding: 10px 14px; color: var(--color-primary); text-align: center;">प्रश्न (Qs)</th>
              <th style="padding: 10px 14px; color: var(--color-primary); text-align: center;">अंक (Marks)</th>
              <th style="padding: 10px 14px; color: var(--color-primary);">समय व मार्किंग नियम</th>
            </tr>
          </thead>
          <tbody>
            {tier1_html}
          </tbody>
        </table>
      </div>

      {tier2_html}
    </div>

    <!-- Section 6: Step-by-Step Online Application Guide -->
    <div class="content-box">
      <h2><span>🚀</span> <span>ऑनलाइन आवेदन की चरणबद्ध प्रक्रिया (Step-by-Step Apply Guide)</span></h2>
      <div style="color: var(--color-text); font-size: 0.98rem; line-height: 1.7;">
        <ol style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 12px;"><strong>आधिकारिक वेबसाइट पर जाएं:</strong> सबसे पहले आधिकारिक पोर्टल (<a href="{cfg["official_portal"]}" target="_blank" rel="noopener" style="color: var(--color-primary); font-weight: 700;">{cfg["official_portal"]} ↗</a>) पर जाएं।</li>
          <li style="margin-bottom: 12px;"><strong>वन टाइम रजिस्ट्रेशन (OTR):</strong> यदि आप पहली बार आवेदन कर रहे हैं, तो 'New User / Register Now' पर क्लिक कर आधार नंबर, मोबाइल नंबर और ईमेल आईडी से OTR प्रोफाइल बनाएं।</li>
          <li style="margin-bottom: 12px;"><strong>लॉगिन व पद का चयन:</strong> OTR रजिस्ट्रेशन नंबर व पासवर्ड से लॉगिन करें और <em>'{cfg["post_name_hi"]}'</em> के सामने दिए गए <strong>'Apply Online'</strong> लिंक पर क्लिक करें।</li>
          <li style="margin-bottom: 12px;"><strong>विवरण भरें व परीक्षा केंद्र चुनें:</strong> अपने शैक्षणिक अंक, पते का विवरण और पसंदीदा 3 परीक्षा केंद्रों (Exam Centers) का चयन करें।</li>
          <li style="margin-bottom: 12px;"><strong>लाइव फोटो व सिग्नेचर अपलोड:</strong> कैमरे के सामने बैठकर लाइव वेबकैम फोटो कैप्चर करें और 10-20 KB साइज में साफ हस्ताक्षर (Signature) अपलोड करें। (साइज बदलने के लिए हमारे <a href="../tools/signature-resizer.html" style="color: var(--color-primary); font-weight: 700;">Signature Resizer</a> का उपयोग करें)।</li>
          <li style="margin-bottom: 12px;"><strong>आवेदन शुल्क भुगतान:</strong> UPI, नेट बैंकिंग या डेबिट कार्ड के माध्यम से निर्धारित श्रेणीवार शुल्क जमा करें। (महिला/आरक्षित वर्ग हेतु शून्य)।</li>
          <li style="margin-bottom: 12px;"><strong>फाइनल सबमिशन व प्रिंटआउट:</strong> फॉर्म की पूर्ण जांच (Preview) करने के बाद 'Final Submit' करें और भविष्य के संदर्भ हेतु आवेदन पत्र की पीडीएफ डाउनलोड करके प्रिंट निकाल लें।</li>
        </ol>
      </div>
    </div>

    <!-- Section 7: Official Important Links Table -->
    <div class="content-box">
      <h2><span>🔗</span> <span>महत्वपूर्ण आधिकारिक लिंक्स (Important Direct Links)</span></h2>
      <div style="overflow-x: auto;">
        <table class="links-table" style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 12px 14px; font-weight: 700; color: var(--color-text);">📝 ऑनलाइन आवेदन डायरेक्ट लिंक (Apply Online)</td>
              <td style="padding: 12px 14px; text-align: right;">
                <a href="{cfg["apply_link"]}" target="_blank" rel="noopener" style="background: #059669; color: #fff; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: 700;">क्लिक करें ↗</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 12px 14px; font-weight: 700; color: var(--color-text);">📥 आधिकारिक नोटिफिकेशन डाउनलोड (PDF)</td>
              <td style="padding: 12px 14px; text-align: right;">
                <a href="{cfg["notification_link"]}" target="_blank" rel="noopener" style="background: #2563eb; color: #fff; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: 700;">डाउनलोड ↗</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 12px 14px; font-weight: 700; color: var(--color-text);">🏛️ आधिकारिक वेबसाइट (Official Portal)</td>
              <td style="padding: 12px 14px; text-align: right;">
                <a href="{cfg["official_portal"]}" target="_blank" rel="noopener" style="background: #4b5563; color: #fff; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: 700;">पोर्टल विजिट ↗</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 12px 14px; font-weight: 700; color: var(--color-text);">✈️ SarkariSewa VIP टेलीग्राम कम्युनिटी</td>
              <td style="padding: 12px 14px; text-align: right;">
                <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener" style="background: #0088cc; color: #fff; padding: 6px 16px; border-radius: 6px; text-decoration: none; font-weight: 700;">जॉइन करें ↗</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Section 8: 6 Real-World Problem Solvers -->
    <div class="content-box">
      <h2><span>🛠️</span> <span>फॉर्म भरने में आने वाली 6 मुख्य समस्याएं व समाधान</span></h2>
      <div style="margin-top: 16px;">
        {problems_html}
      </div>
    </div>

    <!-- Section 9: 10 In-Depth Bilingual FAQs -->
    <div class="content-box">
      <h2><span>❓</span> <span>अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)</span></h2>
      <div style="margin-top: 16px;">
        {faqs_html}
      </div>
    </div>

    <!-- Section 10: Useful Candidate Tools Grid -->
    <div class="content-box">
      <h2><span>🧮</span> <span>परीक्षार्थियों हेतु उपयोगी टूल्स व कैलकुलेटर</span></h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 16px;">
        <a href="../tools/photo-resizer.html" style="text-decoration: none; padding: 14px; background: rgba(37,99,235,0.06); border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); font-weight: 700; display: block; text-align: center;">
          📸 फोटो रिसाइज़र टूल ↗
        </a>
        <a href="../tools/signature-resizer.html" style="text-decoration: none; padding: 14px; background: rgba(37,99,235,0.06); border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); font-weight: 700; display: block; text-align: center;">
          ✍️ सिग्नेचर रिसाइज़र ↗
        </a>
        <a href="../tools/age-calculator.html" style="text-decoration: none; padding: 14px; background: rgba(37,99,235,0.06); border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); font-weight: 700; display: block; text-align: center;">
          ⏳ आयु गणना कैलकुलेटर ↗
        </a>
        <a href="../tools/typing-speed-test.html" style="text-decoration: none; padding: 14px; background: rgba(37,99,235,0.06); border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); font-weight: 700; display: block; text-align: center;">
          ⌨️ टाइपिंग स्पीड टेस्ट ↗
        </a>
        <a href="../7th-pay-commission-calculator.html" style="text-decoration: none; padding: 14px; background: rgba(37,99,235,0.06); border: 1px solid var(--color-border); border-radius: 10px; color: var(--color-text); font-weight: 700; display: block; text-align: center;">
          💵 7th Pay वेतन कैलकुलेटर ↗
        </a>
      </div>
    </div>

    <!-- Section 11: Subscribe Widget & Telegram Banner -->
    <div style="margin: 24px 0;">
      <div id="subscribe-widget" data-service-id="{slug}"></div>
    </div>

    <!-- VIP Telegram Banner -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 24px 28px; color: #ffffff; margin: 24px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
      <div>
        <h3 style="margin: 0 0 6px 0; font-size: 1.3rem; color: #ffffff;">✈️ SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
        <p style="margin: 0; font-size: 0.95rem; opacity: 0.95;">सभी सरकारी भर्तियों के एडमिट कार्ड, आंसर-की, रिजल्ट और फ्री स्टडी मटेरियल की तुरंत अपडेट्स पाएं।</p>
      </div>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener" style="background: #ffffff; color: #0088cc; font-weight: 800; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
        अभी जॉइन करें (निःशुल्क) ↗
      </a>
    </div>

    <!-- Statutory Disclaimer -->
    <div style="padding: 16px 20px; border-radius: 10px; background: rgba(0,0,0,0.03); border: 1px solid var(--color-border); color: var(--color-muted); font-size: 0.85rem; line-height: 1.6; margin-bottom: 32px;">
      <strong>अस्वीकरण (Disclaimer):</strong> SarkariSewaIndia.com एक गैर-सरकारी निजी सूचना पोर्टल है जिसका उद्देश्य सरकारी भर्तियों की प्रमाणित जानकारी अभ्यर्थियों तक पहुँचाना है। आवेदन करने से पूर्व अभ्यर्थी संबंधित भर्ती आयोग की आधिकारिक वेबसाइट ({cfg["official_portal"]}) पर मूल विज्ञप्ति का अवलोकन अवश्य करें।
    </div>

  </main>

  <!-- Portal Footer -->
  <div id="site-footer"></div>

  <!-- Universal Scripts -->
  <script src="../assets/js/theme.js"></script>
  <script src="../assets/js/i18n.js"></script>
  <script src="../assets/js/components.js"></script>
  <script src="../assets/js/subscribe.js"></script>
</body>
</html>
"""
    return html

def generate_jobs_index(jobs_data):
    canonical_url = "https://sarkarisewaindia.com/jobs/index.html"
    
    # Build dynamic job cards
    cards_html = ""
    for filename, cfg in jobs_data.items():
        cards_html += f"""
        <div class="job-hub-card" data-sector="{cfg['sector']}" data-title="{cfg['title_hi']} {cfg['title_en']} {cfg['org_hi']} {cfg['org_en']}" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); display: flex; flex-direction: column; justify-content: space-between; gap: 14px; transition: transform 0.2s ease;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="background: {cfg['sector_color']}; color: #ffffff; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 700;">{cfg['sector']}</span>
              <span style="background: rgba(5,150,105,0.12); color: #059669; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 800;">👥 {cfg['vacancies']}</span>
            </div>
            <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; line-height: 1.4;">
              <a href="{filename}" style="color: var(--color-text); text-decoration: none; font-weight: 700;">{cfg['post_name_hi']}</a>
            </h3>
            <p style="margin: 0; color: var(--color-muted); font-size: 0.88rem; line-height: 1.5;">{cfg['org_hi']} ({cfg['org_en']})</p>
            <div style="margin-top: 10px; font-size: 0.85rem; color: var(--color-text); display: flex; flex-direction: column; gap: 4px;">
              <div><strong>🎓 योग्यता:</strong> {cfg['qualification_hi']}</div>
              <div><strong>💰 वेतन:</strong> <span style="color: #059669; font-weight: 700;">{cfg['salary']}</span></div>
            </div>
          </div>
          <div style="display: flex; gap: 8px; border-top: 1px solid var(--color-border); padding-top: 12px;">
            <a href="{filename}" style="flex: 1; text-align: center; background: var(--color-primary); color: #ffffff; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.88rem; font-weight: 700;">विवरण देखें →</a>
            <a href="{cfg['apply_link']}" target="_blank" rel="noopener" style="background: #059669; color: #ffffff; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.88rem; font-weight: 700;">अप्लाई ↗</a>
          </div>
        </div>
        """

    hub_faqs = [
        ("सरकारी नौकरी के नए फॉर्म की जानकारी सबसे पहले कैसे प्राप्त करें?", "SarkariSewaIndia.com के जॉब्स पोर्टल पर प्रतिदिन केंद्र व सभी 28 राज्यों के भर्ती बोर्डों की आधिकारिक विज्ञप्तियां सत्यापित करके तुरंत प्रकाशित की जाती हैं। तुरंत सूचना के लिए हमारे VIP टेलीग्राम ग्रुप से जुड़ें।"),
        ("क्या सभी सरकारी नौकरियों के लिए OTR (One Time Registration) जरूरी है?", "हाँ, SSC, UPSC, UPSSSC, RPSC, BPSC और रेलवे (RRB) जैसी प्रमुख भर्ती संस्थाओं में अब किसी भी फॉर्म को भरने से पहले OTR प्रोफाइल बनाना अनिवार्य कर दिया गया है।"),
        ("10वीं पास युवाओं के लिए कौन-कौन सी प्रमुख सरकारी नौकरियां हैं?", "SSC MTS, Havaldar, India Post GDS (44,228 पद), रेलवे ग्रुप-डी (Railway Group D), अग्निवीर (Agniveer) और राज्य सफाई कर्मचारी भर्तियां प्रमुख 10वीं पास नौकरियां हैं।"),
        ("12वीं पास छात्रों के लिए शीर्ष सरकारी भर्तियां कौन सी हैं?", "SSC CHSL, RRB NTPC Under-Graduate (क्लर्क/कमर्शियल कम टिकट क्लर्क), भारतीय नौसेना व वायुसेना अग्निवीर, राज्य पुलिस कांस्टेबल और स्टेनोग्राफर पद 12वीं पास छात्रों के लिए सर्वोत्तम हैं।"),
        ("ग्रेजुएट्स के लिए सबसे प्रतिष्ठित सरकारी नौकरियां कौन सी हैं?", "UPSC Civil Services (IAS/IPS), SSC CGL (ASO/Inspector), IBPS PO, SBI PO, RBI Grade B Officer और State PCS परीक्षाएं शीर्ष ग्रेजुएट भर्तियां हैं।"),
        ("आवेदन फॉर्म में फोटो और साइन का साइज कैसे सेट करें?", "हमारे मुफ्त [Photo Resizer Tool](../tools/photo-resizer.html) और [Signature Resizer](../tools/signature-resizer.html) का उपयोग करके आप किसी भी सरकारी फॉर्म के अनुसार बिल्कुल सही साइज व डाइमेंशन में फोटो-साइन तैयार कर सकते हैं।"),
        ("क्या फॉर्म में गलती होने पर सुधार का मौका मिलता है?", "अधिकांश भर्ती आयोग (जैसे SSC, NTA, RRB) आवेदन की अंतिम तिथि समाप्त होने के बाद 2 से 3 दिनों के लिए ऑनलाइन 'Correction Window' खोलते हैं जिसमें निर्धारित शुल्क देकर त्रुटि सुधारी जा सकती है।"),
        ("सरकारी भर्ती में ईडब्ल्यूएस (EWS) और ओबीसी (OBC) प्रमाण पत्र कब का होना चाहिए?", "प्रमाण पत्र हमेशा फॉर्म भरने के वित्तीय वर्ष का वैध और विज्ञापन में उल्लिखित क्रूशियल कट-ऑफ तिथि से पूर्व का बना होना अनिवार्य है।"),
        ("क्या परीक्षा शुल्क खाते से कटने के बाद स्टेटस पेंडिंग रहने पर दोबारा भुगतान करना चाहिए?", "नहीं, तुरंत दोबारा भुगतान न करें। 24 से 48 घंटे प्रतीक्षा करें या पोर्टल के 'Double Verification of Payment' लिंक पर क्लिक करके बैंक चालान सत्यापित करें।"),
        ("क्या SarkariSewa India पर दी जाने वाली जानकारी निःशुल्क है?", "हाँ, SarkariSewa India का पूरा जॉब पोर्टल, लाइव सर्च इंजन, परीक्षा टूल्स और अलर्ट्स सभी देशवासियों हेतु 100% निःशुल्क हैं।")
    ]

    hub_faqs_html = ""
    hub_faq_schema_items = []
    for q, a in hub_faqs:
        hub_faqs_html += f"""<details class="faq-item" style="margin-bottom: 12px; border: 1px solid var(--color-border); border-radius: 10px; background: var(--color-surface); overflow: hidden;">
            <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-text); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
                <span>❓ {q}</span>
                <span style="font-size: 1.2rem; color: var(--color-primary);">▾</span>
            </summary>
            <div style="padding: 0 20px 16px 20px; color: var(--color-text); font-size: 0.95rem; line-height: 1.6; border-top: 1px solid var(--color-border); padding-top: 12px;">
                {a}
            </div>
        </details>"""
        hub_faq_schema_items.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": re.sub(r'<[^>]+>', '', a)
            }
        })

    hub_faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": hub_faq_schema_items
    }

    html = f"""<!DOCTYPE html>
<html lang="hi" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>सरकारी नौकरी 2026: Sarkari Job Alerts, Latest Vacancies, Apply Online Portal</title>
  <meta name="description" content="भारत के सभी सरकारी विभागों (SSC, UPSC, Railway, Banking, Defence, State Govt) की नवीनतम 1,00,000+ भर्तियों के ऑनलाइन फॉर्म, सिलेबस, एडमिट कार्ड व परीक्षा परिणाम।">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:type" content="website">
  <meta property="og:title" content="सरकारी नौकरी 2026: Latest Sarkari Jobs Directory">
  <meta property="og:description" content="सभी केंद्र व राज्य सरकारी भर्तियों के ऑनलाइन आवेदन, एडमिट कार्ड, सिलेबस व वेतनमान की प्रमाणित जानकारी।">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:site_name" content="SarkariSewa India">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/banner.png">

  <link rel="stylesheet" href="../assets/css/variables.css">
  <link rel="stylesheet" href="../assets/css/base.css">
  <link rel="stylesheet" href="../assets/css/components.css">
  <link rel="stylesheet" href="../assets/css/layout.css">
  <link rel="stylesheet" href="../assets/css/responsive.css">

  <style>
    /* Clean Bilingual Language Isolation */
    html[lang="hi"] [data-lang-show="en"] {{ display: none !important; }}
    html[lang="en"] [data-lang-show="hi"] {{ display: none !important; }}

    .job-hub-hero {{
      background: linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(5,150,105,0.08) 100%);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 36px 24px;
      text-align: center;
      margin: 24px 0;
    }}
    .hub-filter-tabs {{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      margin: 20px 0;
    }}
    .hub-tab-btn {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      color: var(--color-text);
      padding: 8px 18px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }}
    .hub-tab-btn.active, .hub-tab-btn:hover {{
      background: var(--color-primary);
      color: #ffffff;
      border-color: var(--color-primary);
    }}
    .job-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin: 24px 0;
    }}
  </style>

  <script type="application/ld+json">
  {json.dumps(hub_faq_schema, ensure_ascii=False, indent=2)}
  </script>
</head>
<body>
  <div id="site-header"></div>

  <main class="container" style="max-width: 1100px; margin: 0 auto; padding: 16px;">
    
    <!-- Hero with Master Live Search Box -->
    <div class="job-hub-hero">
      <span style="background: var(--color-primary); color: #ffffff; padding: 4px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem;">
        ⚡ ऑल इंडिया सरकारी नौकरी हब 2026
      </span>
      <h1 style="color: var(--color-text); font-size: 2.2rem; margin: 14px 0 10px 0;">
        सरकारी नौकरी अलर्ट एवं भर्ती डायरेक्टरी
      </h1>
      <p style="color: var(--color-muted); font-size: 1.05rem; max-width: 750px; margin: 0 auto 24px auto;">
        एसएससी, यूपीएससी, रेलवे, बैंकिंग, रक्षा व राज्य स्तरीय 1,00,000+ सक्रिय पदों की आधिकारिक अधिसूचनाएं, ऑनलाइन आवेदन लिंक व परीक्षा तिथियां।
      </p>

      <!-- Master Instant Live Search Box -->
      <div style="max-width: 680px; margin: 0 auto; position: relative;">
        <div style="display: flex; background: var(--color-surface); border: 2px solid var(--color-primary); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
          <span style="padding: 12px 16px; font-size: 1.2rem; display: flex; align-items: center;">🔍</span>
          <input type="text" id="catSearchInput" placeholder="भर्ती या पद का नाम खोजें (उदा. SSC CGL, RRB NTPC, Banking, 10th Pass)..." style="flex: 1; border: none; padding: 14px 8px; font-size: 1rem; outline: none; background: transparent; color: var(--color-text);">
          <button id="catSearchClear" style="background: transparent; border: none; padding: 0 16px; font-size: 1.2rem; color: var(--color-muted); cursor: pointer; display: none;" title="Clear Search">✕</button>
        </div>
        <div id="catSearchSuggestions" style="position: absolute; top: calc(100% + 4px); left: 0; right: 0; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; max-height: 380px; overflow-y: auto; box-shadow: 0 10px 25px rgba(0,0,0,0.15); z-index: 9999; display: none; text-align: left;"></div>
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="hub-filter-tabs">
      <button class="hub-tab-btn active" data-filter="all">🌐 सभी भर्तियां (All)</button>
      <button class="hub-tab-btn" data-filter="SSC">🏛️ SSC (एसएससी)</button>
      <button class="hub-tab-btn" data-filter="UPSC">🏛️ UPSC (यूपीएससी)</button>
      <button class="hub-tab-btn" data-filter="Banking">🏦 Banking (बैंक)</button>
      <button class="hub-tab-btn" data-filter="Railway">🚆 Railway (रेलवे)</button>
      <button class="hub-tab-btn" data-filter="Defence">🛡️ Defence (रक्षा)</button>
      <button class="hub-tab-btn" data-filter="Scientific">🚀 Scientific (इसरो)</button>
      <button class="hub-tab-btn" data-filter="State Govt">🚩 State Govt (राज्य)</button>
    </div>

    <!-- Jobs Cards Grid -->
    <div class="job-grid" id="jobsGrid">
      {cards_html}
    </div>

    <!-- 6 Problem Solvers for Job Seekers -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 32px 0;">
      <h2 style="color: var(--color-primary); margin-top: 0; font-size: 1.4rem;">🛠️ सरकारी नौकरी फॉर्म भरने के 6 महत्वपूर्ण नियम</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 16px;">
        <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-text);">1. OTR प्रोफाइल का सही सत्यापन</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text);">OTR में अपना नाम व जन्मतिथि 10वीं बोर्ड मार्कशीट के अक्षरशः अनुसार भरें। गलत जानकारी होने पर डीवी में फॉर्म रद्द हो सकता है।</p>
        </div>
        <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-text);">2. लाइव वेबकैम फोटो गाइड</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text);">कैमरे के सामने पर्याप्त रोशनी और सफेद बैकग्राउंड में बैठें। चश्मा, टोपी व मास्क पूर्णतः प्रतिबंधित हैं।</p>
        </div>
        <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-text);">3. सिग्नेचर साइज व आयाम</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text);">हस्ताक्षर 10 से 20 KB साइज और 4.0 x 2.0 सेमी में अपलोड करें। हमारे Signature Resizer टूल से तुरंत साइज ठीक करें।</p>
        </div>
        <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-text);">4. जाति व ईडब्ल्यूएस प्रमाण पत्र</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text);">OBC-NCL और EWS सर्टिफिकेट वर्तमान वित्तीय वर्ष और आवेदन की अंतिम तिथि से पूर्व का होना अनिवार्य है।</p>
        </div>
        <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-text);">5. शुल्क कटौती स्टेटस 'Pending'</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text);">बैंक से राशि कटने पर दोबारा भुगतान न करें। 24-48 घंटे में डबल वेरिफिकेशन से पेमेंट स्वतः अपडेट हो जाता है।</p>
        </div>
        <div style="padding: 16px; border: 1px solid var(--color-border); border-radius: 10px; background: rgba(37,99,235,0.03);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-text);">6. परीक्षा केंद्र वरीयता</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text);">शुरुआती दिनों में ही फॉर्म जमा करें क्योंकि कई आयोग 'पहले आओ, पहले पाओ' के आधार पर निकटतम सेंटर आवंटित करते हैं।</p>
        </div>
      </div>
    </div>

    <!-- 10 Job FAQs -->
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin: 32px 0;">
      <h2 style="color: var(--color-primary); margin-top: 0; font-size: 1.4rem;">❓ अक्सर पूछे जाने वाले प्रश्न (Jobs Directory FAQs)</h2>
      <div style="margin-top: 16px;">
        {hub_faqs_html}
      </div>
    </div>

    <!-- Subscribe Widget -->
    <div style="margin: 24px 0;">
      <div id="subscribe-widget" data-service-id="jobs-hub"></div>
    </div>

    <!-- VIP Telegram Banner -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005f8f 100%); border-radius: 14px; padding: 24px 28px; color: #ffffff; margin: 24px 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
      <div>
        <h3 style="margin: 0 0 6px 0; font-size: 1.3rem; color: #ffffff;">✈️ SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
        <p style="margin: 0; font-size: 0.95rem; opacity: 0.95;">सभी सरकारी भर्तियों के एडमिट कार्ड, आंसर-की, रिजल्ट और फ्री स्टडी मटेरियल की तुरंत अपडेट्स पाएं।</p>
      </div>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener" style="background: #ffffff; color: #0088cc; font-weight: 800; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
        अभी जॉइन करें (निःशुल्क) ↗
      </a>
    </div>

  </main>

  <div id="site-footer"></div>

  <script src="../assets/js/theme.js"></script>
  <script src="../assets/js/i18n.js"></script>
  <script src="../assets/js/components.js"></script>
  <script src="../assets/js/subscribe.js"></script>

  <!-- Master Live Search & Filter Client Script -->
  <script>
    (function() {{
      const searchInput = document.getElementById('catSearchInput');
      const searchClear = document.getElementById('catSearchClear');
      const suggestionsBox = document.getElementById('catSearchSuggestions');
      const tabBtns = document.querySelectorAll('.hub-tab-btn');
      const jobCards = document.querySelectorAll('.job-hub-card');
      let activeFilter = 'all';

      // Tab filtering
      tabBtns.forEach(btn => {{
        btn.addEventListener('click', function() {{
          tabBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          activeFilter = this.getAttribute('data-filter');
          applyFilters();
        }});
      }});

      function applyFilters() {{
        const q = searchInput.value.toLowerCase().trim();
        jobCards.forEach(card => {{
          const sector = card.getAttribute('data-sector');
          const title = card.getAttribute('data-title').toLowerCase();
          const matchSector = (activeFilter === 'all' || sector === activeFilter);
          const matchQuery = (!q || title.includes(q));
          card.style.display = (matchSector && matchQuery) ? 'flex' : 'none';
        }});
      }}

      // Live Instant Search & Autocomplete
      let allPortalServices = [];
      fetch('../data/services.json')
        .then(r => r.json())
        .then(data => {{ allPortalServices = Array.isArray(data) ? data : (data.services || []); }})
        .catch(e => console.log('Services json load skipped'));

      searchInput.addEventListener('input', function() {{
        const val = this.value.trim();
        searchClear.style.display = val ? 'block' : 'none';
        applyFilters();

        if (val.length < 1) {{
          suggestionsBox.style.display = 'none';
          return;
        }}

        const matches = allPortalServices.filter(s => {{
          const nameEn = (s.name && s.name.en) ? s.name.en.toLowerCase() : '';
          const nameHi = (s.name && s.name.hi) ? s.name.hi.toLowerCase() : '';
          const q = val.toLowerCase();
          return nameEn.includes(q) || nameHi.includes(q);
        }}).slice(0, 7);

        if (matches.length === 0) {{
          suggestionsBox.innerHTML = '<div style="padding: 12px 16px; color: var(--color-muted); font-size: 0.9rem;">कोई परिणाम नहीं मिला। कृपया अन्य कीवर्ड से खोजें।</div>';
        }} else {{
          suggestionsBox.innerHTML = matches.map(s => {{
            const name = (document.documentElement.lang === 'en' && s.name && s.name.en) ? s.name.en : ((s.name && s.name.hi) ? s.name.hi : s.name);
            const url = s.url ? ('../' + s.url.replace(/^\\//, '')) : ('../service/' + s.id + '.html');
            return `<a href="${{url}}" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-bottom: 1px solid var(--color-border); color: var(--color-text); text-decoration: none; font-size: 0.92rem;">
              <span>⚡ <strong>${{name}}</strong></span>
              <span style="font-size: 0.78rem; color: var(--color-primary); font-weight: 700;">खोलें →</span>
            </a>`;
          }}).join('');
        }}
        suggestionsBox.style.display = 'block';
      }});

      searchClear.addEventListener('click', function() {{
        searchInput.value = '';
        this.style.display = 'none';
        suggestionsBox.style.display = 'none';
        applyFilters();
      }});

      document.addEventListener('click', function(e) {{
        if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {{
          suggestionsBox.style.display = 'none';
        }}
      }});
    }})();
  </script>
</body>
</html>
"""
    return html

def run_all():
    print(f"Generating all job notification pages into {JOBS_DIR}...")
    
    # 1. Generate individual job pages
    count = 0
    for filename, cfg in JOBS_DATA.items():
        page_html = generate_job_page(filename, cfg)
        out_path = os.path.join(JOBS_DIR, filename)
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(page_html)
        print(f" -> Generated {filename}")
        count += 1
        
        # Write aliases if any
        for alias in cfg.get("aliases", []):
            alias_path = os.path.join(JOBS_DIR, alias)
            with open(alias_path, 'w', encoding='utf-8') as f:
                f.write(page_html)
            print(f"    -> Alias: {alias}")
            count += 1

    # 2. Generate Universal Fallback post.html
    first_key = list(JOBS_DATA.keys())[0]
    fallback_html = generate_job_page("post.html", JOBS_DATA[first_key])
    with open(os.path.join(JOBS_DIR, "post.html"), 'w', encoding='utf-8') as f:
        f.write(fallback_html)
    print(" -> Generated post.html (Dynamic Universal Fallback)")

    # 3. Generate jobs/index.html (Jobs Hub)
    hub_html = generate_jobs_index(JOBS_DATA)
    with open(os.path.join(JOBS_DIR, "index.html"), 'w', encoding='utf-8') as f:
        f.write(hub_html)
    print(" -> Generated jobs/index.html (Master Jobs Hub)")

    # 4. Sync root level aliases with service counterparts
    root_aliases = [
        ('service/mpbcdc-direct-loan-yojana.html', 'mpbcdc-direct-loan-yojana.html'),
        ('service/mpbcdc-seed-capital-yojana.html', 'mpbcdc-seed-capital-yojana.html'),
        ('service/mpbcdc-subsidy-yojana.html', 'mpbcdc-subsidy-yojana.html'),
        ('service/mpbcdc-yojana.html', 'mpbcdc-yojana.html'),
        ('service/special-intensive-revision-sir.html', 'special-intensive-revision-sir.html')
    ]
    for src, dst in root_aliases:
        src_path = os.path.join(ROOT, src)
        dst_path = os.path.join(ROOT, dst)
        if os.path.exists(src_path):
            with open(src_path, 'r', encoding='utf-8') as f:
                c = f.read()
            c = c.replace('href="../', 'href="').replace('src="../', 'src="')
            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(c)
            print(f" -> Synchronized root alias {dst}")

    print(f"SUCCESS: Upgraded {count} job files + post.html + jobs/index.html + root aliases successfully!")

if __name__ == '__main__':
    run_all()
