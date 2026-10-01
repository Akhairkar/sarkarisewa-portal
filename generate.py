import json
import os

services = [
    {
        "id": "mp-caste-certificate.html",
        "nameEn": "Madhya Pradesh Caste Certificate",
        "nameHi": "मध्य प्रदेश जाति प्रमाण पत्र",
        "descEn": "Apply online for Madhya Pradesh Caste Certificate. Check eligibility, documents, fees, and track application status.",
        "descHi": "मध्य प्रदेश जाति प्रमाण पत्र के लिए ऑनलाइन आवेदन करें। पात्रता, दस्तावेज, फीस और स्थिति की जांच करें।",
        "overviewEn": "A Caste Certificate is a crucial document for individuals belonging to SC, ST, and OBC categories in Madhya Pradesh. It enables access to various government schemes, reservations in education, and employment opportunities.",
        "overviewHi": "जाति प्रमाण पत्र मध्य प्रदेश में एससी, एसटी और ओबीसी श्रेणियों के व्यक्तियों के लिए एक महत्वपूर्ण दस्तावेज है। यह विभिन्न सरकारी योजनाओं, शिक्षा में आरक्षण और रोजगार के अवसरों तक पहुंच को सक्षम बनाता है।",
        "related": ["mp-domicile-certificate.html", "mp-income-certificate.html", "mp-ration-card.html"]
    },
    {
        "id": "mp-domicile-certificate.html",
        "nameEn": "Madhya Pradesh Domicile Certificate",
        "nameHi": "मध्य प्रदेश मूल निवासी प्रमाण पत्र",
        "descEn": "Complete guide on MP Domicile Certificate. Learn how to apply online, check required documents, and track application status.",
        "descHi": "एमपी मूल निवासी प्रमाण पत्र पर पूरी जानकारी। ऑनलाइन आवेदन कैसे करें, आवश्यक दस्तावेज और आवेदन की स्थिति जांचें।",
        "overviewEn": "The Domicile Certificate (Mool Niwasi Praman Patra) is essential proof of residence in Madhya Pradesh. It is required for educational admissions, local government jobs, and state-sponsored scholarship programs.",
        "overviewHi": "मूल निवासी प्रमाण पत्र मध्य प्रदेश में निवास का आवश्यक प्रमाण है। यह शैक्षिक प्रवेश, स्थानीय सरकारी नौकरियों और राज्य प्रायोजित छात्रवृत्ति कार्यक्रमों के लिए आवश्यक है।",
        "related": ["mp-caste-certificate.html", "mp-income-certificate.html", "mp-ladli-laxmi-yojana.html"]
    },
    {
        "id": "mp-income-certificate.html",
        "nameEn": "Madhya Pradesh Income Certificate",
        "nameHi": "मध्य प्रदेश आय प्रमाण पत्र",
        "descEn": "Step-by-step process for MP Income Certificate online application. Find document list, eligibility, and direct status check links.",
        "descHi": "एमपी आय प्रमाण पत्र ऑनलाइन आवेदन के लिए चरण-दर-चरण प्रक्रिया। दस्तावेज़ सूची, पात्रता और स्थिति जांच लिंक खोजें।",
        "overviewEn": "An Income Certificate in Madhya Pradesh serves as official proof of an individual's or family's annual income. It is highly beneficial for securing fee concessions, scholarships, and benefits under various welfare schemes.",
        "overviewHi": "मध्य प्रदेश में एक आय प्रमाण पत्र किसी व्यक्ति या परिवार की वार्षिक आय के आधिकारिक प्रमाण के रूप में कार्य करता है। यह विभिन्न कल्याणकारी योजनाओं के तहत शुल्क रियायतें, छात्रवृत्ति और लाभ प्राप्त करने के लिए अत्यधिक फायदेमंद है।",
        "related": ["mp-domicile-certificate.html", "mp-caste-certificate.html", "mp-ration-card.html"]
    },
    {
        "id": "mp-ladli-laxmi-yojana.html",
        "nameEn": "Madhya Pradesh Ladli Laxmi Yojana",
        "nameHi": "मध्य प्रदेश लाड़ली लक्ष्मी योजना",
        "descEn": "Everything you need to know about MP Ladli Laxmi Yojana. Eligibility criteria, application process, and benefits explained.",
        "descHi": "एमपी लाड़ली लक्ष्मी योजना के बारे में वह सब कुछ जो आपको जानना चाहिए। पात्रता मानदंड, आवेदन प्रक्रिया और लाभों की व्याख्या।",
        "overviewEn": "The Ladli Laxmi Yojana is a flagship scheme by the Madhya Pradesh government aimed at improving the health and educational status of girls. It provides financial assistance to ensure a bright future for the girl child.",
        "overviewHi": "लाड़ली लक्ष्मी योजना मध्य प्रदेश सरकार की एक प्रमुख योजना है जिसका उद्देश्य लड़कियों के स्वास्थ्य और शैक्षिक स्थिति में सुधार करना है। यह बालिकाओं का उज्ज्वल भविष्य सुनिश्चित करने के लिए वित्तीय सहायता प्रदान करती है।",
        "related": ["mp-income-certificate.html", "mp-ration-card.html", "mp-domicile-certificate.html"]
    },
    {
        "id": "mp-ration-card.html",
        "nameEn": "Madhya Pradesh Ration Card",
        "nameHi": "मध्य प्रदेश राशन कार्ड",
        "descEn": "Apply for MP Ration Card (APL/BPL/AAY). Check new list, application process, required documents, and eligibility details.",
        "descHi": "एमपी राशन कार्ड (एपीएल/बीपीएल/एएवाई) के लिए आवेदन करें। नई सूची, आवेदन प्रक्रिया, आवश्यक दस्तावेज और पात्रता विवरण देखें।",
        "overviewEn": "The MP Ration Card is a vital document issued by the Food, Civil Supplies, and Consumer Protection Department. It allows eligible families to purchase essential commodities at subsidized rates.",
        "overviewHi": "एमपी राशन कार्ड खाद्य, नागरिक आपूर्ति और उपभोक्ता संरक्षण विभाग द्वारा जारी एक महत्वपूर्ण दस्तावेज है। यह पात्र परिवारों को रियायती दरों पर आवश्यक वस्तुएं खरीदने की अनुमति देता है।",
        "related": ["mp-income-certificate.html", "mp-domicile-certificate.html", "mp-caste-certificate.html"]
    }
]

def build_content_en(service):
    html = f"<h2>Quick Overview of {service['nameEn']}</h2>\n"
    html += f"<p>{service['overviewEn']} This service is crucial for all eligible citizens residing in the state of Madhya Pradesh. We have compiled comprehensive details regarding the application procedure, eligibility criteria, and more. Understanding these details will help you navigate the process without any hurdles and ensure you can avail the benefits intended by the state government seamlessly.</p>\n"
    html += "<p>The government of Madhya Pradesh has digitized many citizen services through the MP e-District portal and other platforms. This initiative brings transparency and efficiency to the system, allowing users to apply from the comfort of their homes. This digital push minimizes the need to visit government offices physically, saving considerable time and resources for the common citizen.</p>\n"
    
    html += "<h2>Eligibility Criteria</h2>\n"
    html += "<p>To apply for this service, applicants must fulfill specific eligibility requirements set by the respective department. These conditions are established to ensure that the benefits reach the intended demographic appropriately:</p>\n"
    html += "<ul>\n"
    html += "  <li>The applicant must be a permanent resident of Madhya Pradesh. Proof of residence is strictly verified.</li>\n"
    html += "  <li>Relevant category or financial conditions must be met (e.g., falling under SC/ST/OBC or BPL limits). These conditions define the core target audience of the scheme.</li>\n"
    html += "  <li>Valid identification and address proofs are mandatory. Discrepancies in these documents often lead to rejection.</li>\n"
    html += "  <li>Age limits and family income criteria may apply depending on the specific scheme or certificate, particularly for educational or financial aid programs.</li>\n"
    html += "</ul>\n"
    
    html += "<h2>Documents Required</h2>\n"
    html += "<p>Before initiating the online or offline application process, ensure you have the following documents ready. Having these organized beforehand significantly speeds up the application filing:</p>\n"
    html += "<ul>\n"
    html += "  <li>Aadhaar Card (Must be linked with an active mobile number for OTP verification)</li>\n"
    html += "  <li>Samagra ID (Both Family ID and Member ID are crucial in Madhya Pradesh for any state scheme)</li>\n"
    html += "  <li>Recent passport-sized photographs (preferably with a light background)</li>\n"
    html += "  <li>Valid Proof of Address (Voter ID, recent Electricity Bill, or Water Bill)</li>\n"
    html += "  <li>Self-declaration form or an affidavit as prescribed by the issuing authority (if required)</li>\n"
    html += "  <li>Previous certificate or related proof (e.g., Old caste certificate of a family member, or income proof like ITR/Salary slip)</li>\n"
    html += "</ul>\n"
    
    html += "<h2>Step-by-Step Online Process</h2>\n"
    html += "<p>Applying for the <strong>" + service['nameEn'] + "</strong> is straightforward using the official portals. Follow these steps carefully to submit your application without errors:</p>\n"
    html += "<ol>\n"
    html += "  <li>Visit the official MP e-District portal or the specific departmental website dedicated to this service.</li>\n"
    html += "  <li>Click on the 'Citizen Login' or 'Register' button to create a new user account if you do not already have one.</li>\n"
    html += "  <li>Login securely using your User ID and Password, or authenticate via a mobile OTP.</li>\n"
    html += "  <li>Navigate to the 'Available Services' section from the dashboard and search for the specific certificate or scheme you wish to apply for.</li>\n"
    html += "  <li>Click on 'Apply Online' and fill out the detailed application form accurately. Ensure all spellings match your official documents.</li>\n"
    html += "  <li>Upload clear, scanned copies of all the necessary documents in the prescribed format (usually PDF or JPEG) and within the specified size limits.</li>\n"
    html += "  <li>Pay the required application fee (if applicable) through the integrated secure payment gateway using UPI, Net Banking, or Credit/Debit cards.</li>\n"
    html += "  <li>Submit the final form and immediately save or print the generated Application Reference Number for future tracking and correspondence.</li>\n"
    html += "</ol>\n"
    
    html += "<h2>Fees and Charges</h2>\n"
    html += "<p>The state government has kept the fees highly nominal to ensure affordability and accessibility for all citizens across different economic backgrounds. Usually, applying through the CSC (Common Service Centre) or authorized MP Online kiosks incurs a small service charge (ranging from Rs. 30 to Rs. 50), whereas self-applications directly through the citizen portal might be completely free or attract only a minimal digital processing fee.</p>\n"
    
    html += "<h2>How to Check Application Status</h2>\n"
    html += "<p>After successfully submitting the application, it goes through a verification process. You can easily track its real-time progress online:</p>\n"
    html += "<ol>\n"
    html += "  <li>Go to the official portal where you initially submitted the application.</li>\n"
    html += "  <li>Look for the 'Track Application' or 'Status Check' link prominently displayed on the homepage.</li>\n"
    html += "  <li>Enter your unique Registration Number / Application Reference Number provided during submission.</li>\n"
    html += "  <li>Fill in the Captcha code correctly to verify you are a human and click on 'Search' or 'Track'.</li>\n"
    html += "  <li>The current status of your application (whether it is Pending, Under Processing, Approved, or Rejected) will be instantly displayed on the screen along with remarks from the verifying officer.</li>\n"
    html += "</ol>\n"
    
    html += "<h2>Frequently Asked Questions (FAQs)</h2>\n"
    html += "<div class='faq'>\n"
    html += f"  <h3>1. Who is eligible to apply for the {service['nameEn']}?</h3>\n"
    html += "  <p>Permanent residents of Madhya Pradesh who fulfill the specific departmental criteria, including income, category, and age limits, are fully eligible to apply for this service.</p>\n"
    html += f"  <h3>2. Can I apply for the {service['nameEn']} through an offline mode?</h3>\n"
    html += "  <p>Yes, while the online method is encouraged, you can certainly apply offline by visiting your nearest Tehsil office, authorized Lok Seva Kendra, or the local Gram Panchayat office and submitting a physical form.</p>\n"
    html += "  <h3>3. How much time does it usually take to receive the final certificate?</h3>\n"
    html += "  <p>The processing time can vary, but it usually takes between 15 to 30 working days after the successful submission of the application and the completion of document verification by the concerned authorities.</p>\n"
    html += "  <h3>4. Is having a Samagra ID mandatory for this application?</h3>\n"
    html += "  <p>Absolutely. The Samagra ID is a foundational requirement and is mandatory for availing almost all government services, schemes, and certificates in the state of Madhya Pradesh.</p>\n"
    html += "  <h3>5. What should be my next step if my application gets rejected?</h3>\n"
    html += "  <p>If your application is unfortunately rejected, you can check the specific reason for rejection online on the portal, rectify the mentioned issue (such as uploading clearer or missing documents), and submit a fresh application.</p>\n"
    html += "  <h3>6. How can I download the digitally approved final certificate?</h3>\n"
    html += "  <p>Once the application is approved by the competent authority, you can log in to the citizen portal, navigate to the 'My Applications' or 'Downloads' section, and download the digitally signed certificate in PDF format.</p>\n"
    html += "  <h3>7. Is the digitally signed certificate printed on plain paper valid everywhere?</h3>\n"
    html += "  <p>Yes, certificates issued with authorized digital signatures through the official state portal are legally equivalent to physical certificates and are fully valid for all official, educational, and legal purposes across the country.</p>\n"
    html += "  <h3>8. Will I need to renew this certificate periodically?</h3>\n"
    html += "  <p>This strictly depends on the certificate type. Income Certificates generally have a limited validity of 1 to 3 financial years. However, Caste and Domicile certificates are generally considered valid for a lifetime unless there are specific changes in your details or government rules.</p>\n"
    html += "</div>\n"
    
    html += "<h3>Useful Tools</h3>\n"
    html += "<ul>\n"
    html += "  <li><a href=\"../tools/eligibility-checker.html\">Govt Scheme Eligibility Checker</a></li>\n"
    html += "  <li><a href=\"../tools/document-checklist.html\">Document Checklist Tool</a></li>\n"
    html += "  <li><a href=\"../tools/status-troubleshooter.html\">Application Status Troubleshooter</a></li>\n"
    html += "</ul>\n"
    
    html += "<h3>Related Services</h3>\n"
    html += "<ul>\n"
    for r in service['related']:
        name = [s['nameEn'] for s in services if s['id'] == r][0]
        html += f"  <li><a href=\"{r}\">{name}</a></li>\n"
    html += "</ul>\n"
    
    return html

def build_content_hi(service):
    html = f"<h2>{service['nameHi']} का संक्षिप्त अवलोकन</h2>\n"
    html += f"<p>{service['overviewHi']} यह सेवा मध्य प्रदेश राज्य में रहने वाले सभी पात्र नागरिकों के लिए अत्यधिक महत्वपूर्ण है। हमने आवेदन प्रक्रिया, पात्रता मानदंड और आवश्यक दस्तावेजों के बारे में विस्तृत जानकारी संकलित की है ताकि आपको कोई परेशानी न हो। इन विवरणों को समझने से आपको बिना किसी बाधा के प्रक्रिया को नेविगेट करने में मदद मिलेगी और यह सुनिश्चित होगा कि आप राज्य सरकार द्वारा लक्षित लाभों का निर्बाध रूप से लाभ उठा सकें।</p>\n"
    html += "<p>मध्य प्रदेश सरकार ने एमपी ई-डिस्ट्रिक्ट पोर्टल और अन्य डिजिटल प्लेटफार्मों के माध्यम से कई नागरिक सेवाओं को पूरी तरह से डिजिटल कर दिया है। यह पहल सरकारी सिस्टम में अपार पारदर्शिता और दक्षता लाती है, जिससे उपयोगकर्ता सरकारी कार्यालयों के चक्कर लगाए बिना अपने घरों से आराम से आवेदन कर सकते हैं। यह डिजिटल कदम आम नागरिक के लिए काफी समय और संसाधनों की बचत करता है।</p>\n"
    
    html += "<h2>पात्रता मापदंड (Eligibility Criteria)</h2>\n"
    html += "<p>इस सेवा के लिए आवेदन करने हेतु, आवेदकों को संबंधित विभाग द्वारा निर्धारित विशिष्ट पात्रता आवश्यकताओं को पूरी तरह से पूरा करना होगा। ये शर्तें यह सुनिश्चित करने के लिए स्थापित की गई हैं कि लाभ उचित रूप से लक्षित जनसांख्यिकीय तक पहुंचें:</p>\n"
    html += "<ul>\n"
    html += "  <li>आवेदक को मध्य प्रदेश का स्थायी निवासी होना चाहिए। निवास के प्रमाण का कड़ाई से सत्यापन किया जाता है।</li>\n"
    html += "  <li>संबंधित श्रेणी या वित्तीय शर्तें पूरी होनी चाहिए (जैसे, एससी/एसटी/ओबीसी या बीपीएल सीमा के अंतर्गत आना)। ये शर्तें योजना के मुख्य लक्षित दर्शकों को परिभाषित करती हैं।</li>\n"
    html += "  <li>वैध पहचान और पता प्रमाण अनिवार्य रूप से प्रस्तुत किए जाने चाहिए। इन दस्तावेजों में विसंगतियों के कारण अक्सर आवेदन अस्वीकार कर दिया जाता है।</li>\n"
    html += "  <li>विशिष्ट योजना या प्रमाण पत्र के आधार पर आयु सीमा और पारिवारिक आय मानदंड लागू हो सकते हैं, विशेष रूप से शैक्षिक या वित्तीय सहायता कार्यक्रमों के लिए।</li>\n"
    html += "</ul>\n"
    
    html += "<h2>आवश्यक दस्तावेज (Documents Required)</h2>\n"
    html += "<p>ऑनलाइन या ऑफलाइन आवेदन प्रक्रिया शुरू करने से पहले, यह सुनिश्चित करें कि आपके पास निम्नलिखित सभी दस्तावेज अच्छी तरह से तैयार हैं। इन्हें पहले से व्यवस्थित रखने से आवेदन दाखिल करने की प्रक्रिया में काफी तेजी आती है:</p>\n"
    html += "<ul>\n"
    html += "  <li>आधार कार्ड (ओटीपी सत्यापन के लिए यह एक सक्रिय मोबाइल नंबर से लिंक होना चाहिए)</li>\n"
    html += "  <li>समग्र आईडी (मध्य प्रदेश में किसी भी राज्य योजना के लिए परिवार आईडी और सदस्य आईडी दोनों महत्वपूर्ण हैं)</li>\n"
    html += "  <li>हाल ही की पासपोर्ट आकार की तस्वीरें (अधिमानतः हल्के रंग की पृष्ठभूमि के साथ)</li>\n"
    html += "  <li>पते का वैध प्रमाण (वोटर आईडी, हालिया बिजली बिल, या पानी का बिल)</li>\n"
    html += "  <li>स्व-घोषणा पत्र या जारीकर्ता प्राधिकारी द्वारा निर्धारित हलफनामा (यदि विशेष रूप से आवश्यक हो)</li>\n"
    html += "  <li>पिछला प्रमाण पत्र या संबंधित प्रमाण (जैसे, परिवार के किसी सदस्य का पुराना जाति प्रमाण पत्र, या आईटीआर/सैलरी स्लिप जैसे आय प्रमाण)</li>\n"
    html += "</ul>\n"
    
    html += "<h2>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h2>\n"
    html += "<p>आधिकारिक पोर्टलों का उपयोग करके <strong>{service['nameHi']}</strong> के लिए आवेदन करना बहुत सीधा और सरल है। बिना किसी त्रुटि के अपना आवेदन जमा करने के लिए इन चरणों का ध्यानपूर्वक पालन करें:</p>\n"
    html += "<ol>\n"
    html += "  <li>इस सेवा को समर्पित आधिकारिक एमपी ई-डिस्ट्रिक्ट पोर्टल या विशिष्ट विभागीय वेबसाइट पर जाएं।</li>\n"
    html += "  <li>यदि आपके पास पहले से खाता नहीं है, तो नया उपयोगकर्ता खाता बनाने के लिए 'नागरिक लॉगिन' या 'रजिस्टर' बटन पर क्लिक करें।</li>\n"
    html += "  <li>अपने यूजर आईडी और पासवर्ड का उपयोग करके सुरक्षित रूप से लॉगिन करें, या मोबाइल ओटीपी के माध्यम से प्रमाणित करें।</li>\n"
    html += "  <li>डैशबोर्ड से 'उपलब्ध सेवाएं' अनुभाग पर जाएं और उस विशिष्ट प्रमाण पत्र या योजना को खोजें जिसके लिए आप आवेदन करना चाहते हैं।</li>\n"
    html += "  <li>'ऑनलाइन आवेदन करें' पर क्लिक करें और विस्तृत आवेदन पत्र को पूरी तरह से और सही ढंग से भरें। सुनिश्चित करें कि सभी स्पेलिंग आपके आधिकारिक दस्तावेजों से मेल खाती हों।</li>\n"
    html += "  <li>निर्धारित प्रारूप (आमतौर पर पीडीएफ या जेपीईजी) और निर्दिष्ट आकार सीमा के भीतर सभी आवश्यक दस्तावेजों की स्पष्ट, स्कैन की गई प्रतियां अपलोड करें।</li>\n"
    html += "  <li>यूपीआई, नेट बैंकिंग या क्रेडिट/डेबिट कार्ड का उपयोग करके एकीकृत सुरक्षित भुगतान गेटवे के माध्यम से आवश्यक आवेदन शुल्क (यदि लागू हो) का भुगतान करें।</li>\n"
    html += "  <li>अंतिम फॉर्म जमा करें और भविष्य की ट्रैकिंग और पत्राचार के लिए तुरंत उत्पन्न आवेदन संदर्भ संख्या (Application Reference Number) को सहेजें या प्रिंट करें।</li>\n"
    html += "</ol>\n"
    
    html += "<h2>शुल्क और प्रभार (Fees and Charges)</h2>\n"
    html += "<p>राज्य सरकार ने विभिन्न आर्थिक पृष्ठभूमि के सभी नागरिकों के लिए सामर्थ्य और पहुंच सुनिश्चित करने के लिए शुल्क को अत्यधिक नाममात्र रखा है। आमतौर पर, सीएससी (कॉमन सर्विस सेंटर) या अधिकृत एमपी ऑनलाइन कियोस्क के माध्यम से आवेदन करने पर एक छोटा सेवा शुल्क (30 रुपये से 50 रुपये के बीच) लगता है, जबकि नागरिक पोर्टल के माध्यम से सीधे स्वयं आवेदन करना पूरी तरह से मुफ्त हो सकता है या इसमें केवल न्यूनतम डिजिटल प्रसंस्करण शुल्क हो सकता है।</p>\n"
    
    html += "<h2>आवेदन की स्थिति कैसे जांचें (How to Check Status)</h2>\n"
    html += "<p>सफलतापूर्वक आवेदन जमा करने के बाद, यह एक सत्यापन प्रक्रिया से गुजरता है। आप ऑनलाइन इसकी वास्तविक समय की प्रगति को आसानी से ट्रैक कर सकते हैं:</p>\n"
    html += "<ol>\n"
    html += "  <li>उस आधिकारिक पोर्टल पर जाएं जहां आपने शुरू में अपना आवेदन जमा किया था।</li>\n"
    html += "  <li>होमपेज पर प्रमुखता से प्रदर्शित 'ट्रैक एप्लिकेशन' या 'स्थिति जांचें' लिंक को खोजें।</li>\n"
    html += "  <li>सबमिशन के दौरान प्रदान की गई अपनी विशिष्ट पंजीकरण संख्या / आवेदन संदर्भ संख्या दर्ज करें।</li>\n"
    html += "  <li>यह सत्यापित करने के लिए कि आप इंसान हैं, कैप्चा कोड सही ढंग से भरें और 'सर्च' या 'ट्रैक' पर क्लिक करें।</li>\n"
    html += "  <li>आपके आवेदन की वर्तमान स्थिति (चाहे वह लंबित हो, प्रक्रियाधीन हो, स्वीकृत हो, या अस्वीकृत हो) सत्यापन अधिकारी की टिप्पणियों के साथ तुरंत स्क्रीन पर प्रदर्शित होगी।</li>\n"
    html += "</ol>\n"
    
    html += "<h2>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>\n"
    html += "<div class='faq'>\n"
    html += f"  <h3>1. {service['nameHi']} के लिए आवेदन करने के लिए कौन पात्र है?</h3>\n"
    html += "  <p>मध्य प्रदेश के स्थायी निवासी जो विशिष्ट विभागीय मानदंडों को पूरा करते हैं, जिनमें आय, श्रेणी और आयु सीमा शामिल है, वे इस सेवा के लिए आवेदन करने के लिए पूरी तरह से पात्र हैं।</p>\n"
    html += f"  <h3>2. क्या मैं {service['nameHi']} के लिए ऑफलाइन मोड के माध्यम से आवेदन कर सकता हूँ?</h3>\n"
    html += "  <p>हां, हालांकि ऑनलाइन तरीके को प्रोत्साहित किया जाता है, आप निश्चित रूप से अपने निकटतम तहसील कार्यालय, अधिकृत लोक सेवा केंद्र या स्थानीय ग्राम पंचायत कार्यालय जाकर और एक भौतिक फॉर्म जमा करके ऑफलाइन आवेदन कर सकते हैं।</p>\n"
    html += "  <h3>3. अंतिम प्रमाण पत्र प्राप्त करने में आमतौर पर कितना समय लगता है?</h3>\n"
    html += "  <p>प्रसंस्करण का समय भिन्न हो सकता है, लेकिन आवेदन के सफल जमा होने और संबंधित अधिकारियों द्वारा दस्तावेज़ सत्यापन पूरा होने के बाद आमतौर पर 15 से 30 कार्य दिवस लगते हैं।</p>\n"
    html += "  <h3>4. क्या इस आवेदन के लिए समग्र आईडी होना अनिवार्य है?</h3>\n"
    html += "  <p>बिल्कुल। समग्र आईडी एक आधारभूत आवश्यकता है और मध्य प्रदेश राज्य में लगभग सभी सरकारी सेवाओं, योजनाओं और प्रमाण पत्रों का लाभ उठाने के लिए अनिवार्य है।</p>\n"
    html += "  <h3>5. यदि मेरा आवेदन अस्वीकार कर दिया जाता है तो मेरा अगला कदम क्या होना चाहिए?</h3>\n"
    html += "  <p>यदि आपका आवेदन दुर्भाग्य से अस्वीकार कर दिया जाता है, तो आप पोर्टल पर ऑनलाइन अस्वीकृति का विशिष्ट कारण देख सकते हैं, उल्लिखित समस्या को ठीक कर सकते हैं (जैसे कि स्पष्ट या गायब दस्तावेज अपलोड करना), और एक नया आवेदन जमा कर सकते हैं।</p>\n"
    html += "  <h3>6. मैं डिजिटल रूप से स्वीकृत अंतिम प्रमाण पत्र कैसे डाउनलोड कर सकता हूँ?</h3>\n"
    html += "  <p>एक बार सक्षम प्राधिकारी द्वारा आवेदन स्वीकृत हो जाने के बाद, आप नागरिक पोर्टल पर लॉग इन कर सकते हैं, 'मेरे आवेदन' या 'डाउनलोड' अनुभाग में जा सकते हैं, और पीडीएफ प्रारूप में डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र डाउनलोड कर सकते हैं।</p>\n"
    html += "  <h3>7. क्या सादे कागज पर मुद्रित डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र हर जगह मान्य है?</h3>\n"
    html += "  <p>हां, आधिकारिक राज्य पोर्टल के माध्यम से अधिकृत डिजिटल हस्ताक्षर के साथ जारी किए गए प्रमाण पत्र कानूनी रूप से भौतिक प्रमाण पत्रों के समतुल्य हैं और देश भर में सभी आधिकारिक, शैक्षिक और कानूनी उद्देश्यों के लिए पूरी तरह से मान्य हैं।</p>\n"
    html += "  <h3>8. क्या मुझे इस प्रमाण पत्र को समय-समय पर नवीनीकृत करने की आवश्यकता होगी?</h3>\n"
    html += "  <p>यह कड़ाई से प्रमाण पत्र के प्रकार पर निर्भर करता है। आय प्रमाण पत्र की आम तौर पर 1 से 3 वित्तीय वर्षों की सीमित वैधता होती है। हालांकि, जाति और मूल निवासी प्रमाण पत्र आमतौर पर जीवन भर के लिए मान्य माने जाते हैं जब तक कि आपके विवरण या सरकारी नियमों में विशिष्ट परिवर्तन न हों।</p>\n"
    html += "</div>\n"
    
    html += "<h3>उपयोगी टूल्स (Useful Tools)</h3>\n"
    html += "<ul>\n"
    html += "  <li><a href=\"../tools/eligibility-checker.html\">Govt Scheme Eligibility Checker</a></li>\n"
    html += "  <li><a href=\"../tools/document-checklist.html\">Document Checklist Tool</a></li>\n"
    html += "  <li><a href=\"../tools/status-troubleshooter.html\">Application Status Troubleshooter</a></li>\n"
    html += "</ul>\n"
    
    html += "<h3>संबंधित सेवाएं (Related Services)</h3>\n"
    html += "<ul>\n"
    for r in service['related']:
        name = [s['nameHi'] for s in services if s['id'] == r][0]
        html += f"  <li><a href=\"{r}\">{name}</a></li>\n"
    html += "</ul>\n"
    
    return html

data = {}
for svc in services:
    content_en = build_content_en(svc)
    content_hi = build_content_hi(svc)
    data[svc['id']] = {
        "titleEn": f"{svc['nameEn']} Online Apply & Status 2026",
        "titleHi": f"{svc['nameHi']} ऑनलाइन आवेदन और स्थिति 2026",
        "descEn": svc['descEn'],
        "descHi": svc['descHi'],
        "contentEn": content_en,
        "contentHi": content_hi
    }

output_path = r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\batch30.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Successfully generated batch30.json")
