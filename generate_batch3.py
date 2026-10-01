import json
import os

data = {
  "ap-residence-certificate.html": {
    "titleEn": "Apply AP Residence Certificate Online: Status & Documents",
    "titleHi": "एपी निवास प्रमाण पत्र ऑनलाइन आवेदन: स्थिति और दस्तावेज",
    "descEn": "Complete guide for AP Residence Certificate (Domicile). Check eligibility, documents required, MeeSeva online application process, fees, and status check.",
    "descHi": "एपी निवास (अधिवास) प्रमाण पत्र के लिए पूरी जानकारी। पात्रता, आवश्यक दस्तावेज, मीसेवा ऑनलाइन आवेदन प्रक्रिया, शुल्क और स्थिति की जांच कैसे करें।",
    "contentEn": """<h2>Quick Overview of AP Residence Certificate</h2>
<p>The Andhra Pradesh Residence Certificate, also known as a Domicile Certificate, is an essential official document issued by the Government of Andhra Pradesh. It serves as proof of a person's continuous residence in a specific location within the state. This certificate is crucial for obtaining local preference in educational institutions, government jobs, and state-sponsored schemes.</p>
<h3>Eligibility Criteria</h3>
<ul>
<li>The applicant must be a resident of Andhra Pradesh.</li>
<li>The applicant must have been living in the state for a specified number of years (usually 7 years).</li>
<li>Women not originally from AP but married to a permanent resident are also eligible.</li>
</ul>
<h3>Documents Required</h3>
<ul>
<li>Aadhaar Card or Voter ID.</li>
<li>Ration Card or Epic Card.</li>
<li>Utility Bills (Electricity, Water, or Telephone).</li>
<li>Property tax receipt or rent agreement.</li>
<li>Passport size photographs.</li>
</ul>
<h3>Step-by-Step Online Process (MeeSeva Portal)</h3>
<p>1. Visit the official AP State Portal or MeeSeva portal.</p>
<p>2. Register for a new account or login with existing credentials.</p>
<p>3. Navigate to 'Revenue Department Services' and select 'Residence Certificate'.</p>
<p>4. Fill out the application form with accurate personal and residential details.</p>
<p>5. Upload the scanned copies of all required documents.</p>
<p>6. Pay the required application fee online.</p>
<p>7. Submit the application and save the acknowledgment number for future reference.</p>
<h3>Fees and Processing Time</h3>
<p>The application fee is generally nominal, usually around Rs. 35 to Rs. 45 if applied through MeeSeva centers. The processing time typically takes about 7 to 15 working days.</p>
<h3>How to Check Status Online</h3>
<p>Applicants can track their application status by visiting the MeeSeva portal, entering their application or transaction number in the 'Track Your Application' section, and clicking submit.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<h4>1. Is the AP Residence Certificate valid for life?</h4>
<p>Yes, usually it is valid for life unless specified otherwise or if you permanently move out of the state.</p>
<h4>2. Can I apply offline?</h4>
<p>Yes, you can apply offline by visiting the nearest MeeSeva center or Tahsildar office.</p>
<h4>3. What is the difference between domicile and residence certificate?</h4>
<p>They are generally the same, serving as proof of your residence in a state.</p>
<h4>4. How many days it takes to get domicile certificate in AP?</h4>
<p>It typically takes 7 to 15 days after successful submission and verification.</p>
<h4>5. Is Aadhaar card mandatory?</h4>
<p>While highly recommended for faster processing, other identity proofs might be accepted in exceptional cases.</p>
<h4>6. Can students apply for it for scholarships?</h4>
<p>Yes, it is often a mandatory document for state scholarship applications.</p>
""",
    "contentHi": """<h2>एपी निवास प्रमाण पत्र का संक्षिप्त अवलोकन</h2>
<p>आंध्र प्रदेश निवास प्रमाण पत्र, जिसे अधिवास प्रमाण पत्र भी कहा जाता है, आंध्र प्रदेश सरकार द्वारा जारी एक आवश्यक आधिकारिक दस्तावेज है। यह राज्य के भीतर एक विशिष्ट स्थान पर किसी व्यक्ति के निरंतर निवास के प्रमाण के रूप में कार्य करता है। यह प्रमाण पत्र शैक्षणिक संस्थानों, सरकारी नौकरियों और राज्य प्रायोजित योजनाओं में स्थानीय वरीयता प्राप्त करने के लिए महत्वपूर्ण है।</p>
<h3>पात्रता मानदंड</h3>
<ul>
<li>आवेदक आंध्र प्रदेश का निवासी होना चाहिए।</li>
<li>आवेदक को निर्दिष्ट वर्षों (आमतौर पर 7 वर्ष) के लिए राज्य में रह रहा होना चाहिए।</li>
<li>वे महिलाएं जो मूल रूप से एपी की नहीं हैं, लेकिन स्थायी निवासी से विवाहित हैं, वे भी पात्र हैं।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<ul>
<li>आधार कार्ड या वोटर आईडी।</li>
<li>राशन कार्ड या एपिक कार्ड।</li>
<li>उपयोगिता बिल (बिजली, पानी, या टेलीफोन)।</li>
<li>संपत्ति कर रसीद या किराया समझौता।</li>
<li>पासपोर्ट आकार के फोटो।</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया (मीसेवा पोर्टल)</h3>
<p>1. आधिकारिक एपी राज्य पोर्टल या मीसेवा पोर्टल पर जाएं।</p>
<p>2. एक नए खाते के लिए पंजीकरण करें या मौजूदा क्रेडेंशियल के साथ लॉगिन करें।</p>
<p>3. 'राजस्व विभाग सेवा' पर नेविगेट करें और 'निवास प्रमाण पत्र' चुनें।</p>
<p>4. सटीक व्यक्तिगत और आवासीय विवरण के साथ आवेदन पत्र भरें।</p>
<p>5. सभी आवश्यक दस्तावेजों की स्कैन की गई प्रतियां अपलोड करें।</p>
<p>6. आवश्यक आवेदन शुल्क का ऑनलाइन भुगतान करें।</p>
<p>7. आवेदन जमा करें और भविष्य के संदर्भ के लिए पावती संख्या सहेजें।</p>
<h3>शुल्क और प्रसंस्करण समय</h3>
<p>आवेदन शुल्क आम तौर पर मामूली होता है, आमतौर पर मीसेवा केंद्रों के माध्यम से आवेदन करने पर लगभग 35 से 45 रुपये। प्रसंस्करण समय में आमतौर पर लगभग 7 से 15 कार्य दिवस लगते हैं।</p>
<h3>ऑनलाइन स्थिति की जांच कैसे करें</h3>
<p>आवेदक मीसेवा पोर्टल पर जाकर, 'अपने आवेदन को ट्रैक करें' अनुभाग में अपना आवेदन या लेनदेन नंबर दर्ज करके और सबमिट पर क्लिक करके अपने आवेदन की स्थिति को ट्रैक कर सकते हैं।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<h4>1. क्या एपी निवास प्रमाण पत्र जीवन भर के लिए मान्य है?</h4>
<p>हां, आमतौर पर यह जीवन भर के लिए मान्य होता है जब तक कि अन्यथा निर्दिष्ट न हो या आप स्थायी रूप से राज्य से बाहर न चले जाएं।</p>
<h4>2. क्या मैं ऑफ़लाइन आवेदन कर सकता हूं?</h4>
<p>हां, आप निकटतम मीसेवा केंद्र या तहसीलदार कार्यालय में जाकर ऑफ़लाइन आवेदन कर सकते हैं।</p>
<h4>3. अधिवास और निवास प्रमाण पत्र के बीच क्या अंतर है?</h4>
<p>वे आम तौर पर एक ही होते हैं, जो किसी राज्य में आपके निवास के प्रमाण के रूप में कार्य करते हैं।</p>
<h4>4. एपी में अधिवास प्रमाण पत्र प्राप्त करने में कितने दिन लगते हैं?</h4>
<p>सफल सबमिशन और सत्यापन के बाद आमतौर पर 7 से 15 दिन लगते हैं।</p>
<h4>5. क्या आधार कार्ड अनिवार्य है?</h4>
<p>हालांकि तेजी से प्रसंस्करण के लिए अत्यधिक अनुशंसित है, असाधारण मामलों में अन्य पहचान प्रमाण स्वीकार किए जा सकते हैं।</p>
<h4>6. क्या छात्र छात्रवृत्ति के लिए इसके लिए आवेदन कर सकते हैं?</h4>
<p>हां, यह अक्सर राज्य छात्रवृत्ति आवेदनों के लिए एक अनिवार्य दस्तावेज है।</p>
"""
  },
  "assam-caste-certificate.html": {
    "titleEn": "Assam Caste Certificate Online Apply, Status & Download",
    "titleHi": "असम जाति प्रमाण पत्र ऑनलाइन आवेदन, स्थिति और डाउनलोड",
    "descEn": "Apply for Assam Caste Certificate (SC/ST/OBC) online via e-District portal. Find eligibility, required documents, fee details, and track application status.",
    "descHi": "ई-डिस्ट्रिक्ट पोर्टल के माध्यम से असम जाति प्रमाण पत्र (एससी/एसटी/ओबीसी) के लिए ऑनलाइन आवेदन करें। पात्रता, आवश्यक दस्तावेज, और आवेदन की स्थिति जानें।",
    "contentEn": """<h2>Quick Overview of Assam Caste Certificate</h2>
<p>The Assam Caste Certificate is a vital document provided by the Government of Assam to its residents belonging to Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC). This certificate is necessary to avail various reservations in educational institutions, government jobs, and specialized welfare schemes introduced by the state and central governments.</p>
<h3>Eligibility Criteria</h3>
<ul>
<li>The applicant must be a citizen of India and a permanent resident of Assam.</li>
<li>The applicant must belong to an SC, ST, or OBC category as recognized by the government.</li>
<li>The applicant should hold relevant proof of caste lineage.</li>
</ul>
<h3>Documents Required</h3>
<ul>
<li>Proof of Identity (Aadhaar Card, PAN Card, or Voter ID).</li>
<li>Proof of Address (Ration Card, Electricity Bill).</li>
<li>Caste Certificate of parents or relatives (if available).</li>
<li>Affidavit specifying the caste.</li>
<li>Recent passport-sized photograph.</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>1. Visit the Assam e-District portal (Sewasetu).</p>
<p>2. Log in using your credentials or register if you are a new user.</p>
<p>3. Navigate to the 'Certificates' section and select 'Caste Certificate'.</p>
<p>4. Fill in the online application form with personal and family details.</p>
<p>5. Upload all the necessary documents in the specified format.</p>
<p>6. Pay the processing fee online (if applicable) and submit the form.</p>
<p>7. Note down the application reference number to track your status.</p>
<h3>Fees</h3>
<p>The application fee is typically around Rs. 30 if applied via Common Service Centers (CSCs). Direct online applications might be free or incur nominal gateway charges.</p>
<h3>Status Check</h3>
<p>You can check the status of your Assam Caste Certificate by visiting the e-District portal and entering your application reference number under the 'Track Application' option.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<h4>1. How long does it take to get the certificate?</h4>
<p>It generally takes around 15 to 30 days after document verification.</p>
<h4>2. Is the Assam caste certificate valid across India?</h4>
<p>A state caste certificate is valid within the state, but you may need a central caste certificate for central government schemes.</p>
<h4>3. How can I download my approved certificate?</h4>
<p>Once approved, you can download the digitally signed certificate from the e-District portal using your login credentials.</p>
<h4>4. What should I do if my application is rejected?</h4>
<p>You should check the reason for rejection on the portal, rectify the issue (like missing documents), and reapply.</p>
<h4>5. Is an offline application possible?</h4>
<p>Yes, you can apply offline at the local Circle Office or CSC.</p>
<h4>6. Does a caste certificate expire?</h4>
<p>No, a caste certificate is generally valid for a lifetime unless it is revoked due to fake information.</p>
""",
    "contentHi": """<h2>असम जाति प्रमाण पत्र का संक्षिप्त अवलोकन</h2>
<p>असम जाति प्रमाण पत्र असम सरकार द्वारा अनुसूचित जाति (SC), अनुसूचित जनजाति (ST), और अन्य पिछड़ा वर्ग (OBC) से संबंधित अपने निवासियों को प्रदान किया जाने वाला एक महत्वपूर्ण दस्तावेज है। यह प्रमाण पत्र शैक्षणिक संस्थानों, सरकारी नौकरियों और राज्य और केंद्र सरकारों द्वारा शुरू की गई विशेष कल्याणकारी योजनाओं में विभिन्न आरक्षणों का लाभ उठाने के लिए आवश्यक है।</p>
<h3>पात्रता मानदंड</h3>
<ul>
<li>आवेदक भारत का नागरिक और असम का स्थायी निवासी होना चाहिए।</li>
<li>आवेदक को सरकार द्वारा मान्यता प्राप्त SC, ST या OBC श्रेणी से संबंधित होना चाहिए।</li>
<li>आवेदक के पास जाति वंश का प्रासंगिक प्रमाण होना चाहिए।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<ul>
<li>पहचान का प्रमाण (आधार कार्ड, पैन कार्ड, या वोटर आईडी)।</li>
<li>पते का प्रमाण (राशन कार्ड, बिजली बिल)।</li>
<li>माता-पिता या रिश्तेदारों का जाति प्रमाण पत्र (यदि उपलब्ध हो)।</li>
<li>जाति निर्दिष्ट करने वाला हलफनामा।</li>
<li>हाल ही का पासपोर्ट आकार का फोटो।</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>1. असम ई-डिस्ट्रिक्ट पोर्टल (सेवासेतु) पर जाएं।</p>
<p>2. अपने क्रेडेंशियल का उपयोग करके लॉग इन करें या यदि आप नए उपयोगकर्ता हैं तो पंजीकरण करें।</p>
<p>3. 'प्रमाण पत्र' अनुभाग पर जाएं और 'जाति प्रमाण पत्र' चुनें।</p>
<p>4. व्यक्तिगत और पारिवारिक विवरण के साथ ऑनलाइन आवेदन पत्र भरें।</p>
<p>5. निर्दिष्ट प्रारूप में सभी आवश्यक दस्तावेज अपलोड करें।</p>
<p>6. ऑनलाइन प्रसंस्करण शुल्क (यदि लागू हो) का भुगतान करें और फॉर्म जमा करें।</p>
<p>7. अपनी स्थिति को ट्रैक करने के लिए आवेदन संदर्भ संख्या नोट करें।</p>
<h3>शुल्क</h3>
<p>यदि सामान्य सेवा केंद्रों (CSC) के माध्यम से आवेदन किया जाता है तो आवेदन शुल्क आमतौर पर लगभग 30 रुपये होता है। प्रत्यक्ष ऑनलाइन आवेदन मुफ्त हो सकते हैं या नाममात्र गेटवे शुल्क लग सकता है।</p>
<h3>स्थिति की जांच</h3>
<p>आप ई-डिस्ट्रिक्ट पोर्टल पर जाकर और 'ट्रैक एप्लिकेशन' विकल्प के तहत अपनी आवेदन संदर्भ संख्या दर्ज करके अपने असम जाति प्रमाण पत्र की स्थिति की जांच कर सकते हैं।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<h4>1. प्रमाण पत्र प्राप्त करने में कितना समय लगता है?</h4>
<p>दस्तावेज़ सत्यापन के बाद आमतौर पर लगभग 15 से 30 दिन लगते हैं।</p>
<h4>2. क्या असम जाति प्रमाण पत्र पूरे भारत में मान्य है?</h4>
<p>एक राज्य जाति प्रमाण पत्र राज्य के भीतर मान्य है, लेकिन केंद्र सरकार की योजनाओं के लिए आपको केंद्रीय जाति प्रमाण पत्र की आवश्यकता हो सकती है।</p>
<h4>3. मैं अपना स्वीकृत प्रमाण पत्र कैसे डाउनलोड कर सकता हूं?</h4>
<p>स्वीकृत होने के बाद, आप अपने लॉगिन क्रेडेंशियल का उपयोग करके ई-डिस्ट्रिक्ट पोर्टल से डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र डाउनलोड कर सकते हैं।</p>
<h4>4. यदि मेरा आवेदन अस्वीकार कर दिया जाता है तो मुझे क्या करना चाहिए?</h4>
<p>आपको पोर्टल पर अस्वीकृति के कारण की जांच करनी चाहिए, समस्या (जैसे गायब दस्तावेज) को सुधारना चाहिए और फिर से आवेदन करना चाहिए।</p>
<h4>5. क्या ऑफ़लाइन आवेदन संभव है?</h4>
<p>हां, आप स्थानीय सर्कल कार्यालय या सीएससी में ऑफ़लाइन आवेदन कर सकते हैं।</p>
<h4>6. क्या जाति प्रमाण पत्र समाप्त होता है?</h4>
<p>नहीं, एक जाति प्रमाण पत्र आमतौर पर जीवन भर के लिए मान्य होता है जब तक कि इसे नकली जानकारी के कारण रद्द न किया जाए।</p>
"""
  },
  "assam-income-certificate.html": {
    "titleEn": "Assam Income Certificate Apply Online, Eligibility & Status",
    "titleHi": "असम आय प्रमाण पत्र ऑनलाइन आवेदन, पात्रता और स्थिति",
    "descEn": "Get your Assam Income Certificate online via Sewasetu portal. Learn about eligibility, documents required, application process, and track your status.",
    "descHi": "सेवासेतु पोर्टल के माध्यम से अपना असम आय प्रमाण पत्र ऑनलाइन प्राप्त करें। पात्रता, आवश्यक दस्तावेजों, आवेदन प्रक्रिया के बारे में जानें और स्थिति जांचें।",
    "contentEn": """<h2>Quick Overview of Assam Income Certificate</h2>
<p>The Assam Income Certificate is an official document issued by the state government certifying the annual income of an individual or family from all sources. It is highly essential for students to claim scholarships, citizens to get subsidies, and individuals applying for economically weaker section (EWS) benefits.</p>
<h3>Eligibility Criteria</h3>
<ul>
<li>The applicant must be a permanent resident of Assam.</li>
<li>The applicant should have a valid source of income in the state.</li>
<li>No pending income tax liabilities (as applicable to the bracket).</li>
</ul>
<h3>Documents Required</h3>
<ul>
<li>Identity Proof (Aadhaar, Voter ID).</li>
<li>Address Proof.</li>
<li>Salary slips or IT returns (for salaried/business individuals).</li>
<li>Certificate from Gaon Burha or Ward Commissioner (for rural/unorganized sectors).</li>
<li>Recent photograph.</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>1. Go to the Assam Sewasetu (e-District) portal.</p>
<p>2. Create a new account or sign in to your existing account.</p>
<p>3. Choose 'Revenue Services' and click on 'Income Certificate'.</p>
<p>4. Enter details like name, occupation, and family income from all sources.</p>
<p>5. Upload the required documents, especially income proof.</p>
<p>6. Submit the application and pay any applicable CSC charges.</p>
<p>7. Keep the acknowledgment receipt safe to track your application.</p>
<h3>Fees</h3>
<p>Online application via the state portal is mostly free, but if you apply through a CSC, a nominal service charge of Rs. 30 may apply.</p>
<h3>Status Check</h3>
<p>Log in to the Sewasetu portal and go to the 'Track Status' page. Enter your acknowledgment number to see the current stage of your application.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<h4>1. What is the validity of the Assam Income Certificate?</h4>
<p>The Income Certificate in Assam is typically valid for one financial year from the date of issue.</p>
<h4>2. Can I apply for an income certificate without an IT return?</h4>
<p>Yes, if you do not file ITR, you can provide an income declaration certified by the Gaon Burha or local authorities.</p>
<h4>3. Is it required for student scholarships?</h4>
<p>Yes, it is mandatory for claiming most government scholarships.</p>
<h4>4. How many days it takes to issue the certificate?</h4>
<p>It usually takes 10 to 15 days for processing and issuance.</p>
<h4>5. Can I renew it online?</h4>
<p>You cannot 'renew' it directly; you must apply for a fresh certificate every financial year.</p>
<h4>6. How to download the income certificate?</h4>
<p>Once approved, it can be downloaded directly from the Sewasetu portal dashboard.</p>
""",
    "contentHi": """<h2>असम आय प्रमाण पत्र का संक्षिप्त अवलोकन</h2>
<p>असम आय प्रमाण पत्र राज्य सरकार द्वारा जारी एक आधिकारिक दस्तावेज है जो सभी स्रोतों से किसी व्यक्ति या परिवार की वार्षिक आय को प्रमाणित करता है। यह छात्रों के लिए छात्रवृत्ति का दावा करने, नागरिकों को सब्सिडी प्राप्त करने और आर्थिक रूप से कमजोर वर्ग (EWS) के लाभों के लिए आवेदन करने वाले व्यक्तियों के लिए अत्यधिक आवश्यक है।</p>
<h3>पात्रता मानदंड</h3>
<ul>
<li>आवेदक असम का स्थायी निवासी होना चाहिए।</li>
<li>आवेदक के पास राज्य में आय का एक वैध स्रोत होना चाहिए।</li>
<li>कोई लंबित आयकर देनदारियां नहीं (ब्रैकेट के लिए लागू)।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<ul>
<li>पहचान प्रमाण (आधार, वोटर आईडी)।</li>
<li>पते का प्रमाण।</li>
<li>वेतन पर्ची या आईटी रिटर्न (वेतनभोगी/व्यावसायिक व्यक्तियों के लिए)।</li>
<li>गांव बूढ़ा या वार्ड कमिश्नर से प्रमाण पत्र (ग्रामीण/असंगठित क्षेत्रों के लिए)।</li>
<li>हाल का फोटो।</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>1. असम सेवासेतु (ई-डिस्ट्रिक्ट) पोर्टल पर जाएं।</p>
<p>2. एक नया खाता बनाएं या अपने मौजूदा खाते में साइन इन करें।</p>
<p>3. 'राजस्व सेवाएं' चुनें और 'आय प्रमाण पत्र' पर क्लिक करें।</p>
<p>4. सभी स्रोतों से नाम, व्यवसाय और पारिवारिक आय जैसे विवरण दर्ज करें।</p>
<p>5. आवश्यक दस्तावेज, विशेष रूप से आय प्रमाण अपलोड करें।</p>
<p>6. आवेदन जमा करें और किसी भी लागू सीएससी शुल्क का भुगतान करें।</p>
<p>7. अपने आवेदन को ट्रैक करने के लिए पावती रसीद सुरक्षित रखें।</p>
<h3>शुल्क</h3>
<p>राज्य पोर्टल के माध्यम से ऑनलाइन आवेदन ज्यादातर मुफ्त है, लेकिन यदि आप सीएससी के माध्यम से आवेदन करते हैं, तो 30 रुपये का मामूली सेवा शुल्क लागू हो सकता है।</p>
<h3>स्थिति की जांच</h3>
<p>सेवासेतु पोर्टल पर लॉग इन करें और 'ट्रैक स्टेटस' पेज पर जाएं। अपने आवेदन के वर्तमान चरण को देखने के लिए अपनी पावती संख्या दर्ज करें।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<h4>1. असम आय प्रमाण पत्र की वैधता क्या है?</h4>
<p>असम में आय प्रमाण पत्र आम तौर पर जारी होने की तारीख से एक वित्तीय वर्ष के लिए मान्य होता है।</p>
<h4>2. क्या मैं बिना आईटी रिटर्न के आय प्रमाण पत्र के लिए आवेदन कर सकता हूं?</h4>
<p>हां, यदि आप आईटीआर दाखिल नहीं करते हैं, तो आप गांव बूढ़ा या स्थानीय अधिकारियों द्वारा प्रमाणित आय घोषणा प्रदान कर सकते हैं।</p>
<h4>3. क्या यह छात्र छात्रवृत्ति के लिए आवश्यक है?</h4>
<p>हां, अधिकांश सरकारी छात्रवृत्ति का दावा करने के लिए यह अनिवार्य है।</p>
<h4>4. प्रमाण पत्र जारी करने में कितने दिन लगते हैं?</h4>
<p>प्रसंस्करण और जारी करने में आमतौर पर 10 से 15 दिन लगते हैं।</p>
<h4>5. क्या मैं इसे ऑनलाइन नवीनीकृत कर सकता हूं?</h4>
<p>आप इसे सीधे 'नवीनीकृत' नहीं कर सकते; आपको हर वित्तीय वर्ष में एक नए प्रमाण पत्र के लिए आवेदन करना होगा।</p>
<h4>6. आय प्रमाण पत्र कैसे डाउनलोड करें?</h4>
<p>एक बार स्वीकृत होने के बाद, इसे सीधे सेवासेतु पोर्टल डैशबोर्ड से डाउनलोड किया जा सकता है।</p>
"""
  },
  "assam-ration-card.html": {
    "titleEn": "Assam Ration Card Apply Online, List, Status & Documents",
    "titleHi": "असम राशन कार्ड ऑनलाइन आवेदन, सूची, स्थिति और दस्तावेज",
    "descEn": "Apply for a new Ration Card in Assam online. Find details on required documents, application process, adding members, downloading list and tracking status.",
    "descHi": "असम में नए राशन कार्ड के लिए ऑनलाइन आवेदन करें। आवश्यक दस्तावेजों, आवेदन प्रक्रिया, सदस्यों को जोड़ने, सूची डाउनलोड करने और स्थिति को ट्रैक करने का विवरण प्राप्त करें।",
    "contentEn": """<h2>Quick Overview of Assam Ration Card</h2>
<p>The Assam Ration Card is a critical document issued by the Department of Food, Civil Supplies, and Consumer Affairs. It enables eligible families in the state to purchase essential commodities like rice, sugar, and kerosene at subsidized rates under the Public Distribution System (PDS). It also serves as an important proof of identity and residence.</p>
<h3>Eligibility Criteria</h3>
<ul>
<li>The applicant must be an Indian citizen and a permanent resident of Assam.</li>
<li>The applicant should not already possess a ration card in any other state.</li>
<li>The family's income must fall within the limits set for AAY (Antyodaya Anna Yojana) or PHH (Priority Household) categories.</li>
</ul>
<h3>Documents Required</h3>
<ul>
<li>Detailed particulars of all family members.</li>
<li>Birth certificates for minors.</li>
<li>Voter ID / Aadhaar card for adult members.</li>
<li>Income Certificate provided by the Circle Officer.</li>
<li>Tax receipt of land/property or electricity bill.</li>
<li>Surrender certificate (if transferring from another state/district).</li>
</ul>
<h3>Step-by-Step Online/Offline Process</h3>
<p>Currently, the application for a new Ration Card in Assam primarily involves submitting documents offline, though initial steps and status tracking can be done online.</p>
<p>1. Visit the nearest Fair Price Shop (FPS), Gaon Panchayat, or Circle Office to obtain the Ration Card Application Form.</p>
<p>2. Fill in the form carefully with the head of the family's details and other members' information.</p>
<p>3. Attach all the necessary documents, including income proof and photographs.</p>
<p>4. Submit the form to the Food, Civil Supplies, and Consumer Affairs office.</p>
<p>5. The officials will conduct a verification process.</p>
<p>6. Collect the receipt number to track your application.</p>
<h3>Fees</h3>
<p>Applying for a new ration card is generally free of cost, though a very nominal fee might be charged for printing the smart card.</p>
<h3>Status Check & Downloading List</h3>
<p>Applicants can visit the official FCS & CA Assam portal to track the application status. You can also view the village-wise Ration Card list to see if your name has been included.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<h4>1. How long does it take to get a new Ration Card in Assam?</h4>
<p>It typically takes around 15 to 30 working days post verification.</p>
<h4>2. Can I apply for a ration card online in Assam?</h4>
<p>While the state is transitioning to online systems via Sewasetu, physical submission at local offices is still the standard process for new cards.</p>
<h4>3. How to add a new member's name to the ration card?</h4>
<p>You need to submit an application for 'Addition of Member' along with the birth certificate or marriage certificate at the local FCS & CA office.</p>
<h4>4. What is a PHH ration card?</h4>
<p>PHH stands for Priority Household, a category under the National Food Security Act targeted at providing subsidized food grains.</p>
<h4>5. Is Aadhaar linking mandatory?</h4>
<p>Yes, seeding Aadhaar with the ration card is mandatory for receiving PDS benefits.</p>
<h4>6. How can I correct my name on the ration card?</h4>
<p>You must fill out the correction form and submit it with valid ID proof (like Aadhaar) at your local civil supplies office.</p>
""",
    "contentHi": """<h2>असम राशन कार्ड का संक्षिप्त अवलोकन</h2>
<p>असम राशन कार्ड खाद्य, नागरिक आपूर्ति और उपभोक्ता मामले विभाग द्वारा जारी एक महत्वपूर्ण दस्तावेज है। यह राज्य में पात्र परिवारों को सार्वजनिक वितरण प्रणाली (पीडीएस) के तहत रियायती दरों पर चावल, चीनी और मिट्टी के तेल जैसी आवश्यक वस्तुएं खरीदने में सक्षम बनाता है। यह पहचान और निवास के एक महत्वपूर्ण प्रमाण के रूप में भी कार्य करता है।</p>
<h3>पात्रता मानदंड</h3>
<ul>
<li>आवेदक एक भारतीय नागरिक और असम का स्थायी निवासी होना चाहिए।</li>
<li>आवेदक के पास पहले से किसी अन्य राज्य में राशन कार्ड नहीं होना चाहिए।</li>
<li>परिवार की आय एएवाई (अंत्योदय अन्न योजना) या पीएचएच (प्राथमिकता घरेलू) श्रेणियों के लिए निर्धारित सीमा के भीतर होनी चाहिए।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<ul>
<li>सभी परिवार के सदस्यों का विस्तृत विवरण।</li>
<li>नाबालिगों के लिए जन्म प्रमाण पत्र।</li>
<li>वयस्क सदस्यों के लिए वोटर आईडी / आधार कार्ड।</li>
<li>सर्कल अधिकारी द्वारा प्रदान किया गया आय प्रमाण पत्र।</li>
<li>भूमि/संपत्ति या बिजली बिल की कर रसीद।</li>
<li>समर्पण प्रमाण पत्र (यदि किसी अन्य राज्य/जिले से स्थानांतरित हो रहे हैं)।</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन/ऑफ़लाइन प्रक्रिया</h3>
<p>वर्तमान में, असम में एक नए राशन कार्ड के लिए आवेदन करने में मुख्य रूप से ऑफ़लाइन दस्तावेज़ जमा करना शामिल है, हालांकि प्रारंभिक चरण और स्थिति ट्रैकिंग ऑनलाइन की जा सकती है।</p>
<p>1. राशन कार्ड आवेदन पत्र प्राप्त करने के लिए निकटतम उचित मूल्य की दुकान (FPS), ग्राम पंचायत, या सर्कल कार्यालय जाएँ।</p>
<p>2. परिवार के मुखिया के विवरण और अन्य सदस्यों की जानकारी के साथ फॉर्म को ध्यान से भरें।</p>
<p>3. आय प्रमाण और तस्वीरों सहित सभी आवश्यक दस्तावेज संलग्न करें।</p>
<p>4. खाद्य, नागरिक आपूर्ति और उपभोक्ता मामले कार्यालय में फॉर्म जमा करें।</p>
<p>5. अधिकारी सत्यापन प्रक्रिया आयोजित करेंगे।</p>
<p>6. अपने आवेदन को ट्रैक करने के लिए रसीद संख्या एकत्र करें।</p>
<h3>शुल्क</h3>
<p>नए राशन कार्ड के लिए आवेदन करना आम तौर पर नि:शुल्क है, हालांकि स्मार्ट कार्ड छापने के लिए बहुत ही मामूली शुल्क लिया जा सकता है।</p>
<h3>स्थिति जांचें और सूची डाउनलोड करें</h3>
<p>आवेदक आवेदन की स्थिति को ट्रैक करने के लिए आधिकारिक FCS & CA असम पोर्टल पर जा सकते हैं। आप यह देखने के लिए गांव-वार राशन कार्ड सूची भी देख सकते हैं कि आपका नाम शामिल किया गया है या नहीं।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<h4>1. असम में नया राशन कार्ड प्राप्त करने में कितना समय लगता है?</h4>
<p>सत्यापन के बाद आमतौर पर 15 से 30 कार्य दिवस लगते हैं।</p>
<h4>2. क्या मैं असम में ऑनलाइन राशन कार्ड के लिए आवेदन कर सकता हूँ?</h4>
<p>जबकि राज्य सेवासेतु के माध्यम से ऑनलाइन सिस्टम में परिवर्तित हो रहा है, नए कार्ड के लिए स्थानीय कार्यालयों में भौतिक सबमिशन अभी भी मानक प्रक्रिया है।</p>
<h4>3. राशन कार्ड में नए सदस्य का नाम कैसे जोड़ें?</h4>
<p>आपको स्थानीय FCS & CA कार्यालय में जन्म प्रमाण पत्र या विवाह प्रमाण पत्र के साथ 'सदस्य को जोड़ने' के लिए एक आवेदन जमा करना होगा।</p>
<h4>4. PHH राशन कार्ड क्या है?</h4>
<p>PHH का अर्थ प्रायोरिटी हाउसहोल्ड है, जो राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत रियायती खाद्यान्न उपलब्ध कराने के लिए लक्षित एक श्रेणी है।</p>
<h4>5. क्या आधार लिंक करना अनिवार्य है?</h4>
<p>हां, पीडीएस लाभ प्राप्त करने के लिए राशन कार्ड के साथ आधार को जोड़ना अनिवार्य है।</p>
<h4>6. मैं राशन कार्ड पर अपना नाम कैसे सही कर सकता हूँ?</h4>
<p>आपको सुधार प्रपत्र भरना होगा और इसे वैध आईडी प्रमाण (जैसे आधार) के साथ अपने स्थानीय नागरिक आपूर्ति कार्यालय में जमा करना होगा।</p>
"""
  },
  "assam-residence-certificate.html": {
    "titleEn": "Assam Permanent Resident Certificate (PRC) Apply Online",
    "titleHi": "असम स्थायी निवासी प्रमाण पत्र (PRC) ऑनलाइन आवेदन",
    "descEn": "Complete details on Assam Permanent Resident Certificate (PRC). Find out the eligibility criteria, required documents, step-by-step apply process and fees.",
    "descHi": "असम स्थायी निवासी प्रमाण पत्र (PRC) पर पूरी जानकारी। पात्रता मानदंड, आवश्यक दस्तावेज, चरण-दर-चरण आवेदन प्रक्रिया और शुल्क का पता लगाएं।",
    "contentEn": """<h2>Quick Overview of Assam Residence Certificate (PRC)</h2>
<p>The Permanent Resident Certificate (PRC) in Assam is a legal document issued by the District Administration. It certifies that a person is a permanent resident of the state. This certificate is crucial primarily for admission to educational institutions within the state, obtaining local quotas, and certain employment opportunities.</p>
<h3>Eligibility Criteria</h3>
<ul>
<li>The applicant must have resided continuously in Assam for a minimum of 20 years.</li>
<li>Parents of the applicant must have resided continuously for 20 years.</li>
<li>If not 20 years, they must meet specific criteria outlined by the state for educational/employment purposes.</li>
</ul>
<h3>Documents Required</h3>
<ul>
<li>Proof of identity (Aadhaar, PAN, Voter ID).</li>
<li>Proof of address (Electricity bill, Ration card).</li>
<li>Land documents like Jamabandi or property tax receipts.</li>
<li>Birth Certificate or HSLC Admit Card.</li>
<li>Passport-size photographs.</li>
<li>Employment certificate (if applicable).</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>1. Visit the official Sewasetu (Assam e-District) portal.</p>
<p>2. Complete the user registration and log in to the dashboard.</p>
<p>3. Search for 'Permanent Resident Certificate (PRC)'.</p>
<p>4. Fill out the application form with personal, educational, and residential details.</p>
<p>5. Upload all the required documents in the prescribed format and size.</p>
<p>6. Submit the application and pay the standard processing fee online.</p>
<p>7. An acknowledgment receipt with an application tracking number will be generated.</p>
<h3>Fees</h3>
<p>The online application is generally free from government fees, but convenience fees of around Rs. 30 may apply if applying via a CSC.</p>
<h3>Status Check</h3>
<p>Navigate to the 'Track Status' page on the Sewasetu portal and enter your application number to know if it is pending, approved, or rejected.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<h4>1. What is the use of PRC in Assam?</h4>
<p>PRC is mainly used for admission to higher educational institutions (like medical or engineering colleges) under the state quota.</p>
<h4>2. Is PRC mandatory for government jobs in Assam?</h4>
<p>While previously required, recent guidelines have relaxed PRC rules for some government job categories, but it remains essential for educational quotas.</p>
<h4>3. How many years of residence is required for PRC?</h4>
<p>Generally, a continuous residence of 20 years by the applicant or their parents is required.</p>
<h4>4. Can I apply for PRC offline?</h4>
<p>Yes, you can apply offline at the Deputy Commissioner's (DC) office or local circle office.</p>
<h4>5. What to do if the application is pending for a long time?</h4>
<p>You can visit the respective DC or Circle Office with your acknowledgment receipt for physical verification or inquiry.</p>
<h4>6. How can I download the approved PRC?</h4>
<p>Once approved, the digitally signed certificate can be downloaded directly from the Sewasetu portal.</p>
""",
    "contentHi": """<h2>असम निवास प्रमाण पत्र (PRC) का संक्षिप्त अवलोकन</h2>
<p>असम में स्थायी निवासी प्रमाण पत्र (PRC) जिला प्रशासन द्वारा जारी एक कानूनी दस्तावेज है। यह प्रमाणित करता है कि कोई व्यक्ति राज्य का स्थायी निवासी है। यह प्रमाण पत्र मुख्य रूप से राज्य के भीतर शैक्षणिक संस्थानों में प्रवेश, स्थानीय कोटा प्राप्त करने और रोजगार के कुछ अवसरों के लिए महत्वपूर्ण है।</p>
<h3>पात्रता मानदंड</h3>
<ul>
<li>आवेदक को कम से कम 20 वर्षों तक असम में लगातार निवास करना चाहिए।</li>
<li>आवेदक के माता-पिता को 20 वर्षों तक लगातार निवास करना चाहिए।</li>
<li>यदि 20 वर्ष नहीं हैं, तो उन्हें शैक्षिक/रोजगार उद्देश्यों के लिए राज्य द्वारा निर्धारित विशिष्ट मानदंडों को पूरा करना होगा।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<ul>
<li>पहचान का प्रमाण (आधार, पैन, वोटर आईडी)।</li>
<li>पते का प्रमाण (बिजली बिल, राशन कार्ड)।</li>
<li>जमाबंदी या संपत्ति कर रसीद जैसे भूमि दस्तावेज।</li>
<li>जन्म प्रमाण पत्र या एचएसएलसी एडमिट कार्ड।</li>
<li>पासपोर्ट आकार के फोटो।</li>
<li>रोजगार प्रमाण पत्र (यदि लागू हो)।</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>1. आधिकारिक सेवासेतु (असम ई-डिस्ट्रिक्ट) पोर्टल पर जाएं।</p>
<p>2. उपयोगकर्ता पंजीकरण पूरा करें और डैशबोर्ड में लॉग विजिट करें।</p>
<p>3. 'स्थायी निवासी प्रमाण पत्र (PRC)' खोजें।</p>
<p>4. व्यक्तिगत, शैक्षिक और आवासीय विवरण के साथ आवेदन पत्र भरें।</p>
<p>5. निर्धारित प्रारूप और आकार में सभी आवश्यक दस्तावेज अपलोड करें।</p>
<p>6. आवेदन जमा करें और ऑनलाइन मानक प्रसंस्करण शुल्क का भुगतान करें।</p>
<p>7. एक एप्लिकेशन ट्रैकिंग नंबर के साथ एक पावती रसीद उत्पन्न होगी।</p>
<h3>शुल्क</h3>
<p>ऑनलाइन आवेदन आमतौर पर सरकारी शुल्क से मुक्त होता है, लेकिन यदि सीएससी के माध्यम से आवेदन किया जाता है तो लगभग 30 रुपये का सुविधा शुल्क लागू हो सकता है।</p>
<h3>स्थिति की जांच</h3>
<p>सेवासेतु पोर्टल पर 'ट्रैक स्टेटस' पेज पर नेविगेट करें और यह जानने के लिए अपना आवेदन नंबर दर्ज करें कि यह लंबित है, स्वीकृत है या अस्वीकार कर दिया गया है।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<h4>1. असम में PRC का क्या उपयोग है?</h4>
<p>PRC का उपयोग मुख्य रूप से राज्य कोटा के तहत उच्च शैक्षणिक संस्थानों (जैसे मेडिकल या इंजीनियरिंग कॉलेजों) में प्रवेश के लिए किया जाता है।</p>
<h4>2. क्या असम में सरकारी नौकरियों के लिए PRC अनिवार्य है?</h4>
<p>जबकि पहले आवश्यक था, हाल के दिशानिर्देशों ने कुछ सरकारी नौकरी श्रेणियों के लिए PRC नियमों में ढील दी है, लेकिन यह शैक्षिक कोटा के लिए आवश्यक है।</p>
<h4>3. PRC के लिए कितने वर्षों के निवास की आवश्यकता है?</h4>
<p>आम तौर पर, आवेदक या उनके माता-पिता द्वारा 20 साल के निरंतर निवास की आवश्यकता होती है।</p>
<h4>4. क्या मैं PRC के लिए ऑफ़लाइन आवेदन कर सकता हूँ?</h4>
<p>हां, आप उपायुक्त (DC) कार्यालय या स्थानीय सर्कल कार्यालय में ऑफ़लाइन आवेदन कर सकते हैं।</p>
<h4>5. यदि आवेदन लंबे समय से लंबित है तो क्या करें?</h4>
<p>आप भौतिक सत्यापन या पूछताछ के लिए अपनी पावती रसीद के साथ संबंधित डीसी या सर्कल कार्यालय जा सकते हैं।</p>
<h4>6. मैं स्वीकृत PRC कैसे डाउनलोड कर सकता हूँ?</h4>
<p>एक बार स्वीकृत होने के बाद, डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र सीधे सेवासेतु पोर्टल से डाउनलोड किया जा सकता है।</p>
"""
  }
}

target_dir = r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal"
os.makedirs(target_dir, exist_ok=True)
with open(os.path.join(target_dir, "batch3.json"), "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("JSON file created successfully.")
