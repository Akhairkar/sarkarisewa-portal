import json
import os

data = {
    'jh-income-certificate.html': {
        'titleEn': 'Jharkhand Income Certificate Online Apply 2026 - Status Check',
        'titleHi': 'झारखंड आय प्रमाण पत्र ऑनलाइन आवेदन 2026 - स्थिति जांचें',
        'descEn': 'Apply for Jharkhand Income Certificate online at Jharsewa. Learn about eligibility, documents required, fees, and step-by-step application process.',
        'descHi': 'झारसेवा पर झारखंड आय प्रमाण पत्र के लिए ऑनलाइन आवेदन करें। पात्रता, आवश्यक दस्तावेज, शुल्क और आवेदन प्रक्रिया के बारे में जानें।',
        'contentEn': '''<h2>Jharkhand Income Certificate: A Complete Guide</h2>
<p>An Income Certificate is a crucial document issued by the State Government of Jharkhand that certifies the annual income of an individual or a family from all sources. It is primarily used to avail various government subsidies, scholarships, and welfare schemes. The Revenue Department through the Jharsewa portal makes the process seamless.</p>
<h3>Quick Overview</h3>
<ul>
<li><strong>Service Name:</strong> Issue of Income Certificate</li>
<li><strong>State:</strong> Jharkhand</li>
<li><strong>Department:</strong> Revenue, Registration and Land Reforms Department</li>
<li><strong>Official Portal:</strong> Jharsewa (jharsewa.jharkhand.gov.in)</li>
<li><strong>Processing Time:</strong> 15-30 Days</li>
</ul>
<h3>Eligibility Criteria</h3>
<p>To apply for a Jharkhand Income Certificate, the applicant must meet the following criteria:</p>
<ul>
<li>Must be a permanent or temporary resident of Jharkhand.</li>
<li>Must have a valid proof of identity and address.</li>
<li>Must be able to declare their family's total annual income from all sources such as salary, agriculture, business, etc.</li>
</ul>
<h3>Documents Required</h3>
<p>Keep the following documents ready before applying:</p>
<ul>
<li>Aadhar Card or Voter ID Card</li>
<li>Residential Proof (Ration Card, Electricity Bill, or Domicile Certificate)</li>
<li>Income Proof (Salary Slip, IT Return, or Affidavit from Notary)</li>
<li>Recent Passport Size Photograph</li>
<li>Self-Declaration Form</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>Follow these steps to apply for the Income Certificate online via Jharsewa:</p>
<ol>
<li>Visit the official Jharsewa portal (jharsewa.jharkhand.gov.in).</li>
<li>Click on 'Register Yourself' if you are a new user. Fill in your name, email, mobile number, and password.</li>
<li>Login using your User ID and Password.</li>
<li>Navigate to 'Apply for Services' and click on 'View all available services'.</li>
<li>Select 'Issue of Income Certificate' from the list.</li>
<li>Fill in the application form carefully with personal and income details.</li>
<li>Upload the scanned copies of all required documents in the prescribed format.</li>
<li>Submit the form and note down the Application Reference Number for future tracking.</li>
</ol>
<h3>Fees and Validity</h3>
<p>The standard application fee is usually nominal (around Rs. 15-30 if applied via Pragya Kendra/CSC). Online self-application might be free of charge. The certificate is generally valid for six months to one year from the date of issuance.</p>
<h3>How to Check Application Status</h3>
<p>To track your application, visit the Jharsewa portal and click on 'Track Application Status'. Enter your Application Reference Number and submission date to view the current status of your certificate.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>Q: Can I apply for the Income Certificate offline?</strong><br>
A: Yes, you can visit the nearest Pragya Kendra (CSC) or Circle Officer's office to apply offline.</p>
<p><strong>Q: What is the validity of the Jharkhand Income Certificate?</strong><br>
A: It is typically valid for 6 months to 1 year.</p>
<p><strong>Q: Is Aadhar mandatory for the application?</strong><br>
A: Yes, Aadhar is generally required for identity verification.</p>
<p><strong>Q: How long does it take to get the certificate?</strong><br>
A: It usually takes 15 to 30 working days after successful submission.</p>
<p><strong>Q: Can students apply for it for scholarships?</strong><br>
A: Yes, students or their parents can apply to avail educational scholarships.</p>
<p><strong>Q: What if my application gets rejected?</strong><br>
A: You will receive a remark explaining the reason. You can re-apply with correct information and documents.</p>
<h3>Useful Tools</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
<li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
<li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>
<h3>Related Services</h3>
<ul>
<li><a href="jh-residence-certificate.html">Jharkhand Residence Certificate</a></li>
<li><a href="jh-ration-card.html">Jharkhand Ration Card</a></li>
<li><a href="jh-maiya-samman-yojana.html">Jharkhand Maiya Samman Yojana</a></li>
</ul>''',
        'contentHi': '''<h2>झारखंड आय प्रमाण पत्र: संपूर्ण जानकारी</h2>
<p>आय प्रमाण पत्र झारखंड राज्य सरकार द्वारा जारी किया जाने वाला एक महत्वपूर्ण दस्तावेज है जो किसी व्यक्ति या परिवार की सभी स्रोतों से वार्षिक आय को प्रमाणित करता है। इसका उपयोग मुख्य रूप से विभिन्न सरकारी सब्सिडी, छात्रवृत्ति और कल्याणकारी योजनाओं का लाभ उठाने के लिए किया जाता है। राजस्व विभाग झारसेवा पोर्टल के माध्यम से इस प्रक्रिया को सुगम बनाता है।</p>
<h3>संक्षिप्त विवरण</h3>
<ul>
<li><strong>सेवा का नाम:</strong> आय प्रमाण पत्र जारी करना</li>
<li><strong>राज्य:</strong> झारखंड</li>
<li><strong>विभाग:</strong> राजस्व, निबंधन एवं भूमि सुधार विभाग</li>
<li><strong>आधिकारिक पोर्टल:</strong> झारसेवा (jharsewa.jharkhand.gov.in)</li>
<li><strong>प्रसंस्करण समय:</strong> 15-30 दिन</li>
</ul>
<h3>पात्रता मापदंड</h3>
<p>झारखंड आय प्रमाण पत्र के लिए आवेदन करने हेतु आवेदक को निम्नलिखित मानदंडों को पूरा करना होगा:</p>
<ul>
<li>झारखंड का स्थायी या अस्थायी निवासी होना चाहिए।</li>
<li>पहचान और पते का वैध प्रमाण होना चाहिए।</li>
<li>वेतन, कृषि, व्यवसाय आदि जैसे सभी स्रोतों से अपने परिवार की कुल वार्षिक आय घोषित करने में सक्षम होना चाहिए।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<p>आवेदन करने से पहले निम्नलिखित दस्तावेज तैयार रखें:</p>
<ul>
<li>आधार कार्ड या वोटर आईडी कार्ड</li>
<li>आवासीय प्रमाण (राशन कार्ड, बिजली बिल, या निवास प्रमाण पत्र)</li>
<li>आय प्रमाण (सैलरी स्लिप, आईटी रिटर्न, या नोटरी से हलफनामा)</li>
<li>नवीनतम पासपोर्ट साइज फोटो</li>
<li>स्व-घोषणा पत्र (Self-Declaration Form)</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>झारसेवा के माध्यम से आय प्रमाण पत्र के लिए ऑनलाइन आवेदन करने के लिए इन चरणों का पालन करें:</p>
<ol>
<li>आधिकारिक झारसेवा पोर्टल (jharsewa.jharkhand.gov.in) पर जाएं।</li>
<li>यदि आप नए उपयोगकर्ता हैं तो 'Register Yourself' पर क्लिक करें। अपना नाम, ईमेल, मोबाइल नंबर और पासवर्ड भरें।</li>
<li>अपने यूजर आईडी और पासवर्ड का उपयोग करके लॉगिन करें।</li>
<li>'Apply for Services' पर नेविगेट करें और 'View all available services' पर क्लिक करें।</li>
<li>सूची में से 'Issue of Income Certificate' चुनें।</li>
<li>व्यक्तिगत और आय विवरण के साथ आवेदन पत्र को ध्यानपूर्वक भरें।</li>
<li>निर्धारित प्रारूप में सभी आवश्यक दस्तावेजों की स्कैन की गई प्रतियां अपलोड करें।</li>
<li>फॉर्म जमा करें और भविष्य में ट्रैकिंग के लिए आवेदन संदर्भ संख्या (Application Reference Number) नोट कर लें।</li>
</ol>
<h3>शुल्क और वैधता</h3>
<p>मानक आवेदन शुल्क आमतौर पर नाममात्र (लगभग 15-30 रुपये यदि प्रज्ञा केंद्र/सीएससी के माध्यम से लागू किया गया हो) होता है। ऑनलाइन स्व-आवेदन निःशुल्क हो सकता है। प्रमाण पत्र आम तौर पर जारी होने की तारीख से छह महीने से एक वर्ष तक के लिए वैध होता है।</p>
<h3>आवेदन की स्थिति कैसे जांचें</h3>
<p>अपने आवेदन को ट्रैक करने के लिए, झारसेवा पोर्टल पर जाएं और 'Track Application Status' पर क्लिक करें। अपने प्रमाण पत्र की वर्तमान स्थिति देखने के लिए अपनी आवेदन संदर्भ संख्या और जमा करने की तिथि दर्ज करें।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>प्रश्न: क्या मैं आय प्रमाण पत्र के लिए ऑफलाइन आवेदन कर सकता हूँ?</strong><br>
उत्तर: हाँ, आप ऑफलाइन आवेदन करने के लिए निकटतम प्रज्ञा केंद्र (सीएससी) या अंचल अधिकारी कार्यालय जा सकते हैं।</p>
<p><strong>प्रश्न: झारखंड आय प्रमाण पत्र की वैधता क्या है?</strong><br>
उत्तर: यह आमतौर पर 6 महीने से 1 वर्ष के लिए वैध होता है।</p>
<p><strong>प्रश्न: क्या आवेदन के लिए आधार अनिवार्य है?</strong><br>
उत्तर: हाँ, पहचान सत्यापन के लिए आमतौर पर आधार आवश्यक है।</p>
<p><strong>प्रश्न: प्रमाण पत्र प्राप्त करने में कितना समय लगता है?</strong><br>
उत्तर: सफलतापूर्वक जमा करने के बाद इसमें आमतौर पर 15 से 30 कार्य दिवस लगते हैं।</p>
<p><strong>प्रश्न: क्या छात्र छात्रवृत्ति के लिए इसके लिए आवेदन कर सकते हैं?</strong><br>
उत्तर: हाँ, छात्र या उनके माता-पिता शैक्षिक छात्रवृत्ति का लाभ उठाने के लिए आवेदन कर सकते हैं।</p>
<p><strong>प्रश्न: यदि मेरा आवेदन अस्वीकार कर दिया जाता है तो क्या होगा?</strong><br>
उत्तर: आपको कारण बताते हुए एक टिप्पणी प्राप्त होगी। आप सही जानकारी और दस्तावेजों के साथ पुनः आवेदन कर सकते हैं।</p>
<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">पात्रता जांच टूल (Govt Scheme Eligibility Checker)</a></li>
<li><a href="../tools/document-checklist.html">दस्तावेज़ चेकलिस्ट (Document Checklist Tool)</a></li>
<li><a href="../tools/status-troubleshooter.html">आवेदन स्थिति समस्या निवारक (Application Status Troubleshooter)</a></li>
</ul>
<h3>संबंधित सेवाएं</h3>
<ul>
<li><a href="jh-residence-certificate.html">झारखंड निवास प्रमाण पत्र</a></li>
<li><a href="jh-ration-card.html">झारखंड राशन कार्ड</a></li>
<li><a href="jh-maiya-samman-yojana.html">झारखंड मंईयां सम्मान योजना</a></li>
</ul>'''
    },
    'jh-maiya-samman-yojana.html': {
        'titleEn': 'Jharkhand Maiya Samman Yojana 2026 - Apply Online, Eligibility',
        'titleHi': 'झारखंड मंईयां सम्मान योजना 2026 - ऑनलाइन आवेदन, पात्रता',
        'descEn': 'Detailed guide on Jharkhand Maiya Samman Yojana. Get Rs. 1000/month financial assistance for women. Check eligibility, documents, and application process.',
        'descHi': 'झारखंड मंईयां सम्मान योजना पर विस्तृत मार्गदर्शिका। महिलाओं के लिए 1000 रुपये/माह की वित्तीय सहायता प्राप्त करें। पात्रता, दस्तावेज और आवेदन प्रक्रिया की जांच करें।',
        'contentEn': '''<h2>Jharkhand Mukhyamantri Maiya Samman Yojana (JMMSY)</h2>
<p>The Jharkhand Mukhyamantri Maiya Samman Yojana (JMMSY) is a flagship scheme launched by the Government of Jharkhand aimed at empowering women in the state. Under this scheme, eligible women from financially weak backgrounds are provided with monthly financial assistance to help them meet their essential needs and become self-reliant.</p>
<h3>Quick Overview</h3>
<ul>
<li><strong>Scheme Name:</strong> Mukhyamantri Maiya Samman Yojana</li>
<li><strong>State:</strong> Jharkhand</li>
<li><strong>Beneficiaries:</strong> Women of Jharkhand</li>
<li><strong>Financial Assistance:</strong> Rs. 1000 per month (Rs. 12000 per year)</li>
<li><strong>Department:</strong> Department of Women, Child Development & Social Security</li>
</ul>
<h3>Eligibility Criteria</h3>
<p>To avail the benefits of the Maiya Samman Yojana, the applicant must satisfy the following conditions:</p>
<ul>
<li>The applicant must be a female and a permanent resident of Jharkhand.</li>
<li>Her age should be between 21 and 50 years.</li>
<li>The applicant's family must hold an Antyodaya Anna Yojana (AAY) or Priority Household (PHH) ration card (yellow or pink card).</li>
<li>No member of the applicant's family should be a regular government employee or an income tax payer.</li>
<li>The applicant's Aadhaar card must be linked to her single active bank account.</li>
</ul>
<h3>Documents Required</h3>
<p>The following documents are necessary for a successful application:</p>
<ul>
<li>Aadhaar Card (linked with a bank account)</li>
<li>Ration Card (AAY or PHH)</li>
<li>Voter ID Card</li>
<li>Active Bank Account Details (Passbook copy)</li>
<li>Self-Declaration Form</li>
<li>Passport Size Photograph</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>The application process for the JMMSY has been made accessible through special camps and Pragya Kendras (CSCs). Here is how you can apply:</p>
<ol>
<li><strong>Obtain the Form:</strong> Visit your nearest Pragya Kendra (CSC), Panchayat office, or the special camps set up by the government to get the free application form.</li>
<li><strong>Fill the Form:</strong> Accurately fill out the application form with your personal details, bank information, and Aadhaar number.</li>
<li><strong>Attach Documents:</strong> Attach photocopies of your Aadhaar card, ration card, voter ID, and bank passbook along with the self-declaration form.</li>
<li><strong>Submission:</strong> Submit the completed form along with documents to the camp official or Pragya Kendra operator.</li>
<li><strong>Biometric Authentication:</strong> The operator will verify your details and complete the biometric/Aadhaar authentication process on the official JMMSY portal.</li>
<li><strong>Acknowledgement:</strong> Collect the system-generated acknowledgement receipt for future reference.</li>
</ol>
<h3>Fees and Timeline</h3>
<p>The application process for the Jharkhand Maiya Samman Yojana is completely <strong>free of cost</strong>. Beneficiaries should not pay any fee for the form or submission. The verification process usually takes a few weeks, after which the monthly amount is credited directly to the beneficiary's Aadhaar-seeded bank account via Direct Benefit Transfer (DBT).</p>
<h3>How to Check Status</h3>
<p>Beneficiaries can check their payment and application status by visiting their local CSC or Panchayat office, or by tracking their Aadhaar-linked bank account statements for the DBT credits.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>Q: Who can apply for JMMSY?</strong><br>
A: Women aged 21-50 years from poor families holding AAY or PHH ration cards in Jharkhand.</p>
<p><strong>Q: How much money will be given under this scheme?</strong><br>
A: Rs. 1000 will be credited directly to the bank account every month.</p>
<p><strong>Q: Is Aadhaar seeding with bank account mandatory?</strong><br>
A: Yes, the Aadhaar card must be linked to the bank account for successful DBT transfers.</p>
<p><strong>Q: What is the official website for Maiya Samman Yojana?</strong><br>
A: The official portal is mmmsy.jharkhand.gov.in, largely used by officials and CSCs for data entry.</p>
<p><strong>Q: Can EPF pensioners apply for this?</strong><br>
A: Families receiving EPF pension or regular government pension are generally not eligible.</p>
<p><strong>Q: What if the application is rejected?</strong><br>
A: You can rectify the errors (like Aadhaar mismatch or bank KYC issues) and apply again through the Block Development Officer (BDO).</p>
<h3>Useful Tools</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
<li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
<li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>
<h3>Related Services</h3>
<ul>
<li><a href="jh-income-certificate.html">Jharkhand Income Certificate</a></li>
<li><a href="jh-ration-card.html">Jharkhand Ration Card</a></li>
<li><a href="jh-residence-certificate.html">Jharkhand Residence Certificate</a></li>
</ul>''',
        'contentHi': '''<h2>झारखंड मुख्यमंत्री मंईयां सम्मान योजना (JMMSY)</h2>
<p>झारखंड मुख्यमंत्री मंईयां सम्मान योजना (JMMSY) राज्य में महिलाओं को सशक्त बनाने के उद्देश्य से झारखंड सरकार द्वारा शुरू की गई एक प्रमुख योजना है। इस योजना के तहत, आर्थिक रूप से कमजोर पृष्ठभूमि की पात्र महिलाओं को उनकी आवश्यक जरूरतों को पूरा करने और आत्मनिर्भर बनने में मदद करने के लिए मासिक वित्तीय सहायता प्रदान की जाती है।</p>
<h3>संक्षिप्त विवरण</h3>
<ul>
<li><strong>योजना का नाम:</strong> मुख्यमंत्री मंईयां सम्मान योजना</li>
<li><strong>राज्य:</strong> झारखंड</li>
<li><strong>लाभार्थी:</strong> झारखंड की महिलाएं</li>
<li><strong>वित्तीय सहायता:</strong> 1000 रुपये प्रति माह (12000 रुपये प्रति वर्ष)</li>
<li><strong>विभाग:</strong> महिला, बाल विकास एवं सामाजिक सुरक्षा विभाग</li>
</ul>
<h3>पात्रता मापदंड</h3>
<p>मंईयां सम्मान योजना का लाभ उठाने के लिए आवेदक को निम्नलिखित शर्तों को पूरा करना होगा:</p>
<ul>
<li>आवेदक एक महिला और झारखंड की स्थायी निवासी होनी चाहिए।</li>
<li>उसकी आयु 21 से 50 वर्ष के बीच होनी चाहिए।</li>
<li>आवेदक के परिवार के पास अंत्योदय अन्न योजना (AAY) या पूर्विकता प्राप्त गृहस्थी (PHH) राशन कार्ड (पीला या गुलाबी कार्ड) होना चाहिए।</li>
<li>आवेदक के परिवार का कोई भी सदस्य नियमित सरकारी कर्मचारी या आयकर दाता नहीं होना चाहिए।</li>
<li>आवेदक का आधार कार्ड उसके एकल सक्रिय बैंक खाते से लिंक होना चाहिए।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<p>सफल आवेदन के लिए निम्नलिखित दस्तावेज आवश्यक हैं:</p>
<ul>
<li>आधार कार्ड (बैंक खाते से लिंक)</li>
<li>राशन कार्ड (AAY या PHH)</li>
<li>वोटर आईडी कार्ड</li>
<li>सक्रिय बैंक खाता विवरण (पासबुक की कॉपी)</li>
<li>स्व-घोषणा पत्र</li>
<li>पासपोर्ट साइज फोटो</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>JMMSY के लिए आवेदन प्रक्रिया विशेष शिविरों और प्रज्ञा केंद्रों (CSCs) के माध्यम से सुलभ बनाई गई है। यहां बताया गया है कि आप कैसे आवेदन कर सकती हैं:</p>
<ol>
<li><strong>फॉर्म प्राप्त करें:</strong> मुफ्त आवेदन पत्र प्राप्त करने के लिए अपने नजदीकी प्रज्ञा केंद्र (CSC), पंचायत कार्यालय या सरकार द्वारा स्थापित विशेष शिविरों में जाएं।</li>
<li><strong>फॉर्म भरें:</strong> अपने व्यक्तिगत विवरण, बैंक की जानकारी और आधार संख्या के साथ आवेदन पत्र को सटीक रूप से भरें।</li>
<li><strong>दस्तावेज संलग्न करें:</strong> स्व-घोषणा पत्र के साथ अपने आधार कार्ड, राशन कार्ड, वोटर आईडी और बैंक पासबुक की फोटोकॉपी संलग्न करें।</li>
<li><strong>जमा करें:</strong> पूर्ण किए गए फॉर्म को दस्तावेजों के साथ शिविर अधिकारी या प्रज्ञा केंद्र संचालक को जमा करें।</li>
<li><strong>बायोमेट्रिक प्रमाणीकरण:</strong> ऑपरेटर आपके विवरण को सत्यापित करेगा और आधिकारिक JMMSY पोर्टल पर बायोमेट्रिक/आधार प्रमाणीकरण प्रक्रिया को पूरा करेगा।</li>
<li><strong>पावती:</strong> भविष्य के संदर्भ के लिए सिस्टम-जनरेटेड पावती रसीद एकत्र करें।</li>
</ol>
<h3>शुल्क और समयरेखा</h3>
<p>झारखंड मंईयां सम्मान योजना के लिए आवेदन प्रक्रिया पूरी तरह से <strong>निःशुल्क</strong> है। लाभार्थियों को फॉर्म या जमा करने के लिए कोई शुल्क नहीं देना चाहिए। सत्यापन प्रक्रिया में आमतौर पर कुछ सप्ताह लगते हैं, जिसके बाद मासिक राशि डायरेक्ट बेनिफिट ट्रांसफर (DBT) के माध्यम से सीधे लाभार्थी के आधार-सीडेड बैंक खाते में जमा कर दी जाती है।</p>
<h3>स्थिति कैसे जांचें</h3>
<p>लाभार्थी अपने स्थानीय सीएससी या पंचायत कार्यालय में जाकर, या डीबीटी क्रेडिट के लिए अपने आधार-लिंक्ड बैंक खाता विवरण को ट्रैक करके अपने भुगतान और आवेदन की स्थिति की जांच कर सकते हैं।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>प्रश्न: JMMSY के लिए कौन आवेदन कर सकता है?</strong><br>
उत्तर: झारखंड में AAY या PHH राशन कार्ड रखने वाले गरीब परिवारों की 21-50 वर्ष आयु वर्ग की महिलाएं।</p>
<p><strong>प्रश्न: इस योजना के तहत कितने पैसे दिए जाएंगे?</strong><br>
उत्तर: हर महीने 1000 रुपये सीधे बैंक खाते में जमा किए जाएंगे।</p>
<p><strong>प्रश्न: क्या बैंक खाते के साथ आधार सीडिंग अनिवार्य है?</strong><br>
उत्तर: हाँ, सफल DBT ट्रांसफर के लिए आधार कार्ड को बैंक खाते से लिंक करना अनिवार्य है।</p>
<p><strong>प्रश्न: मंईयां सम्मान योजना के लिए आधिकारिक वेबसाइट क्या है?</strong><br>
उत्तर: आधिकारिक पोर्टल mmmsy.jharkhand.gov.in है, जिसका उपयोग मुख्य रूप से अधिकारियों और सीएससी द्वारा डेटा प्रविष्टि के लिए किया जाता है।</p>
<p><strong>प्रश्न: क्या EPF पेंशनभोगी इसके लिए आवेदन कर सकते हैं?</strong><br>
उत्तर: ईपीएफ पेंशन या नियमित सरकारी पेंशन प्राप्त करने वाले परिवार आम तौर पर पात्र नहीं होते हैं।</p>
<p><strong>प्रश्न: यदि आवेदन अस्वीकार कर दिया जाता है तो क्या होगा?</strong><br>
उत्तर: आप त्रुटियों (जैसे आधार बेमेल या बैंक केवाईसी मुद्दे) को सुधार सकते हैं और प्रखंड विकास पदाधिकारी (BDO) के माध्यम से फिर से आवेदन कर सकते हैं।</p>
<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">पात्रता जांच टूल (Govt Scheme Eligibility Checker)</a></li>
<li><a href="../tools/document-checklist.html">दस्तावेज़ चेकलिस्ट (Document Checklist Tool)</a></li>
<li><a href="../tools/status-troubleshooter.html">आवेदन स्थिति समस्या निवारक (Application Status Troubleshooter)</a></li>
</ul>
<h3>संबंधित सेवाएं</h3>
<ul>
<li><a href="jh-income-certificate.html">झारखंड आय प्रमाण पत्र</a></li>
<li><a href="jh-ration-card.html">झारखंड राशन कार्ड</a></li>
<li><a href="jh-residence-certificate.html">झारखंड निवास प्रमाण पत्र</a></li>
</ul>'''
    },
    'jh-ration-card.html': {
        'titleEn': 'Jharkhand Ration Card Apply Online 2026 - List & Status',
        'titleHi': 'झारखंड राशन कार्ड ऑनलाइन आवेदन 2026 - सूची और स्थिति',
        'descEn': 'Apply for a new Ration Card in Jharkhand, add members, or check RC status online at aahar.jharkhand.gov.in. Complete guide with eligibility and documents.',
        'descHi': 'झारखंड में नए राशन कार्ड के लिए आवेदन करें, सदस्य जोड़ें, या aahar.jharkhand.gov.in पर आरसी स्थिति की जांच करें। पात्रता और दस्तावेजों के साथ पूरी गाइड।',
        'contentEn': '''<h2>Jharkhand Ration Card: Complete Online Guide</h2>
<p>A Ration Card is an essential official document issued by the Food, Public Distribution, and Consumer Affairs Department of Jharkhand. It enables eligible households to purchase subsidized food grains through the Public Distribution System (PDS) and also serves as a critical proof of identity and address.</p>
<h3>Quick Overview</h3>
<ul>
<li><strong>Service Name:</strong> New Ration Card / Modification</li>
<li><strong>State:</strong> Jharkhand</li>
<li><strong>Department:</strong> Food, Public Distribution and Consumer Affairs Department</li>
<li><strong>Official Portal:</strong> aahar.jharkhand.gov.in</li>
<li><strong>Types of Cards:</strong> Green Card (State Food Security Scheme), PHH, AAY, White Card</li>
</ul>
<h3>Eligibility Criteria</h3>
<p>To apply for a Ration Card in Jharkhand, you must meet the following criteria:</p>
<ul>
<li>The applicant must be a citizen of India and a resident of Jharkhand.</li>
<li>The applicant should not possess a ration card in any other state.</li>
<li>Families living below the poverty line or falling under low-income groups are eligible for PHH or AAY cards.</li>
<li>Those not eligible under NFSA can apply for the Green Ration Card (Jharkhand State Food Security Scheme).</li>
</ul>
<h3>Documents Required</h3>
<p>Keep these documents handy before applying for a new Ration Card:</p>
<ul>
<li>Aadhaar Card of the head of the family and all members</li>
<li>Residential Proof (Electricity Bill, Water Bill, or Domicile Certificate)</li>
<li>Income Certificate</li>
<li>Bank Passbook details of the head of the family</li>
<li>Passport-size photograph of the head of the family</li>
<li>Caste Certificate (if applicable)</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>To apply for a new ration card or make modifications, follow these steps via the ERcms system:</p>
<ol>
<li>Visit the official portal: <strong>aahar.jharkhand.gov.in</strong>.</li>
<li>Go to the 'Online Seva' tab and click on 'Online Application' (ऑनलाइन आवेदन).</li>
<li>Read the instructions carefully and click on 'Proceed'.</li>
<li>Select the service you require (e.g., Application for New Ration Card, Add Family Member, Dealer Change, etc.).</li>
<li>Enter your valid mobile number to receive an OTP and verify it.</li>
<li>Fill out the detailed application form with family details, address, and bank information.</li>
<li>Enter the Aadhaar details of all family members carefully.</li>
<li>Upload the required documents in the prescribed format.</li>
<li>Submit the application. You will receive an Acknowledgement Number. Save it for tracking your application.</li>
</ol>
<h3>Fees and Processing Time</h3>
<p>The online application process on the Aahar Jharkhand portal is generally free. However, if you apply through a Pragya Kendra (CSC), they might charge a nominal processing fee. The approval process usually takes 30 to 45 days, involving verification by the Block Supply Officer (BSO).</p>
<h3>How to Check Status and Download</h3>
<p>You can track the status of your application on the Aahar portal by clicking on 'Check Application Status' under the 'Online Seva' tab. Enter your Acknowledgement Number or registered mobile number. Once approved, you can download the digital copy (E-Ration Card) or check your name in the Ration Card Beneficiary List.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>Q: What is a Green Ration Card in Jharkhand?</strong><br>
A: The Green Ration Card is issued under the State Food Security Scheme for poor families left out of the National Food Security Act (NFSA).</p>
<p><strong>Q: How can I add a new member to my Ration Card?</strong><br>
A: You can apply online through aahar.jharkhand.gov.in using the 'Add Family Member' option, or visit a Pragya Kendra with the member's Aadhaar card.</p>
<p><strong>Q: Is Aadhaar linking mandatory for receiving ration?</strong><br>
A: Yes, Aadhaar seeding with the Ration Card is mandatory to collect food grains via the POS machines at dealer shops.</p>
<p><strong>Q: Can I change my PDS dealer online?</strong><br>
A: Yes, the option to change your ration dealer is available in the online modification services.</p>
<p><strong>Q: What should I do if my ration card is lost?</strong><br>
A: You can download the E-Ration card online or apply for a duplicate ration card by submitting an application to the DMO/BSO office.</p>
<p><strong>Q: How do I surrender my ration card?</strong><br>
A: You can use the 'Surrender Ration Card' option on the portal if you no longer meet the eligibility criteria.</p>
<h3>Useful Tools</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
<li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
<li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>
<h3>Related Services</h3>
<ul>
<li><a href="jh-income-certificate.html">Jharkhand Income Certificate</a></li>
<li><a href="jh-residence-certificate.html">Jharkhand Residence Certificate</a></li>
<li><a href="jh-maiya-samman-yojana.html">Jharkhand Maiya Samman Yojana</a></li>
</ul>''',
        'contentHi': '''<h2>झारखंड राशन कार्ड: संपूर्ण ऑनलाइन गाइड</h2>
<p>राशन कार्ड झारखंड के खाद्य, सार्वजनिक वितरण और उपभोक्ता मामले विभाग द्वारा जारी किया गया एक आवश्यक आधिकारिक दस्तावेज है। यह पात्र परिवारों को सार्वजनिक वितरण प्रणाली (PDS) के माध्यम से रियायती खाद्यान्न खरीदने में सक्षम बनाता है और पहचान तथा पते के एक महत्वपूर्ण प्रमाण के रूप में भी कार्य करता है।</p>
<h3>संक्षिप्त विवरण</h3>
<ul>
<li><strong>सेवा का नाम:</strong> नया राशन कार्ड / संशोधन</li>
<li><strong>राज्य:</strong> झारखंड</li>
<li><strong>विभाग:</strong> खाद्य, सार्वजनिक वितरण एवं उपभोक्ता मामले विभाग</li>
<li><strong>आधिकारिक पोर्टल:</strong> aahar.jharkhand.gov.in</li>
<li><strong>कार्ड के प्रकार:</strong> ग्रीन कार्ड (राज्य खाद्य सुरक्षा योजना), PHH, AAY, सफेद कार्ड</li>
</ul>
<h3>पात्रता मापदंड</h3>
<p>झारखंड में राशन कार्ड के लिए आवेदन करने के लिए, आपको निम्नलिखित मानदंडों को पूरा करना होगा:</p>
<ul>
<li>आवेदक भारत का नागरिक और झारखंड का निवासी होना चाहिए।</li>
<li>आवेदक के पास किसी अन्य राज्य में राशन कार्ड नहीं होना चाहिए।</li>
<li>गरीबी रेखा से नीचे रहने वाले या कम आय वाले समूहों के अंतर्गत आने वाले परिवार PHH या AAY कार्ड के लिए पात्र हैं।</li>
<li>जो लोग NFSA के तहत पात्र नहीं हैं, वे ग्रीन राशन कार्ड (झारखंड राज्य खाद्य सुरक्षा योजना) के लिए आवेदन कर सकते हैं।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<p>नए राशन कार्ड के लिए आवेदन करने से पहले इन दस्तावेजों को तैयार रखें:</p>
<ul>
<li>परिवार के मुखिया और सभी सदस्यों का आधार कार्ड</li>
<li>आवासीय प्रमाण (बिजली बिल, पानी बिल, या निवास प्रमाण पत्र)</li>
<li>आय प्रमाण पत्र</li>
<li>परिवार के मुखिया के बैंक पासबुक का विवरण</li>
<li>परिवार के मुखिया का पासपोर्ट आकार का फोटो</li>
<li>जाति प्रमाण पत्र (यदि लागू हो)</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>नए राशन कार्ड के लिए आवेदन करने या संशोधन करने के लिए, ERcms प्रणाली के माध्यम से इन चरणों का पालन करें:</p>
<ol>
<li>आधिकारिक पोर्टल पर जाएं: <strong>aahar.jharkhand.gov.in</strong>.</li>
<li>'ऑनलाइन सेवा (Online Seva)' टैब पर जाएं और 'ऑनलाइन आवेदन (Online Application)' पर क्लिक करें।</li>
<li>निर्देशों को ध्यान से पढ़ें और 'Proceed' पर क्लिक करें।</li>
<li>वह सेवा चुनें जिसकी आपको आवश्यकता है (जैसे, नए राशन कार्ड के लिए आवेदन, परिवार का सदस्य जोड़ना, डीलर बदलना, आदि)।</li>
<li>OTP प्राप्त करने और इसे सत्यापित करने के लिए अपना वैध मोबाइल नंबर दर्ज करें।</li>
<li>परिवार के विवरण, पते और बैंक की जानकारी के साथ विस्तृत आवेदन पत्र भरें।</li>
<li>परिवार के सभी सदस्यों का आधार विवरण सावधानीपूर्वक दर्ज करें।</li>
<li>आवश्यक दस्तावेजों को निर्धारित प्रारूप में अपलोड करें।</li>
<li>आवेदन जमा करें। आपको एक पावती संख्या (Acknowledgement Number) प्राप्त होगी। अपने आवेदन को ट्रैक करने के लिए इसे सहेज लें।</li>
</ol>
<h3>शुल्क और प्रसंस्करण समय</h3>
<p>आहार झारखंड पोर्टल पर ऑनलाइन आवेदन प्रक्रिया आम तौर पर निःशुल्क है। हालांकि, यदि आप प्रज्ञा केंद्र (CSC) के माध्यम से आवेदन करते हैं, तो वे नाममात्र प्रसंस्करण शुल्क ले सकते हैं। अनुमोदन प्रक्रिया में आमतौर पर 30 से 45 दिन लगते हैं, जिसमें प्रखंड आपूर्ति पदाधिकारी (BSO) द्वारा सत्यापन शामिल होता है।</p>
<h3>स्थिति कैसे जांचें और डाउनलोड करें</h3>
<p>आप 'ऑनलाइन सेवा' टैब के अंतर्गत 'Check Application Status' पर क्लिक करके आहार पोर्टल पर अपने आवेदन की स्थिति को ट्रैक कर सकते हैं। अपना पावती संख्या या पंजीकृत मोबाइल नंबर दर्ज करें। स्वीकृत होने के बाद, आप डिजिटल कॉपी (ई-राशन कार्ड) डाउनलोड कर सकते हैं या राशन कार्ड लाभार्थी सूची में अपना नाम देख सकते हैं।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>प्रश्न: झारखंड में ग्रीन राशन कार्ड क्या है?</strong><br>
उत्तर: राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) से छूटे गरीब परिवारों के लिए राज्य खाद्य सुरक्षा योजना के तहत ग्रीन राशन कार्ड जारी किया जाता है।</p>
<p><strong>प्रश्न: मैं अपने राशन कार्ड में नया सदस्य कैसे जोड़ सकता हूँ?</strong><br>
उत्तर: आप 'परिवार के सदस्य जोड़ें' विकल्प का उपयोग करके aahar.jharkhand.gov.in के माध्यम से ऑनलाइन आवेदन कर सकते हैं, या सदस्य के आधार कार्ड के साथ प्रज्ञा केंद्र जा सकते हैं।</p>
<p><strong>प्रश्न: क्या राशन प्राप्त करने के लिए आधार लिंकिंग अनिवार्य है?</strong><br>
उत्तर: हाँ, डीलर की दुकानों पर पीओएस मशीनों के माध्यम से खाद्यान्न एकत्र करने के लिए राशन कार्ड के साथ आधार सीडिंग अनिवार्य है।</p>
<p><strong>प्रश्न: क्या मैं अपना पीडीएस डीलर ऑनलाइन बदल सकता हूँ?</strong><br>
उत्तर: हाँ, ऑनलाइन संशोधन सेवाओं में अपना राशन डीलर बदलने का विकल्प उपलब्ध है।</p>
<p><strong>प्रश्न: यदि मेरा राशन कार्ड खो जाए तो मुझे क्या करना चाहिए?</strong><br>
उत्तर: आप ई-राशन कार्ड ऑनलाइन डाउनलोड कर सकते हैं या DMO/BSO कार्यालय में आवेदन जमा करके डुप्लीकेट राशन कार्ड के लिए आवेदन कर सकते हैं।</p>
<p><strong>प्रश्न: मैं अपना राशन कार्ड कैसे सरेंडर करूँ?</strong><br>
उत्तर: यदि आप अब पात्रता मानदंडों को पूरा नहीं करते हैं, तो आप पोर्टल पर 'राशन कार्ड सरेंडर करें' विकल्प का उपयोग कर सकते हैं।</p>
<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">पात्रता जांच टूल (Govt Scheme Eligibility Checker)</a></li>
<li><a href="../tools/document-checklist.html">दस्तावेज़ चेकलिस्ट (Document Checklist Tool)</a></li>
<li><a href="../tools/status-troubleshooter.html">आवेदन स्थिति समस्या निवारक (Application Status Troubleshooter)</a></li>
</ul>
<h3>संबंधित सेवाएं</h3>
<ul>
<li><a href="jh-income-certificate.html">झारखंड आय प्रमाण पत्र</a></li>
<li><a href="jh-residence-certificate.html">झारखंड निवास प्रमाण पत्र</a></li>
<li><a href="jh-maiya-samman-yojana.html">झारखंड मंईयां सम्मान योजना</a></li>
</ul>'''
    },
    'jh-residence-certificate.html': {
        'titleEn': 'Jharkhand Local Residence Certificate Apply Online & Status',
        'titleHi': 'झारखंड स्थानीय निवासी प्रमाण पत्र ऑनलाइन आवेदन और स्थिति',
        'descEn': 'Apply for Jharkhand Local Residence (Domicile) Certificate online at Jharsewa. Find out eligibility, required documents, application process and status check.',
        'descHi': 'झारसेवा पर झारखंड स्थानीय निवासी (अधिवास) प्रमाण पत्र के लिए ऑनलाइन आवेदन करें। पात्रता, आवश्यक दस्तावेज, आवेदन प्रक्रिया और स्थिति जांचें।',
        'contentEn': '''<h2>Jharkhand Local Residence Certificate (Domicile)</h2>
<p>The Local Residence Certificate (or Domicile Certificate) is an essential official document provided by the Government of Jharkhand. It proves that the certificate holder is a permanent or local resident of the state. It is crucial for seeking admission to educational institutions, availing quotas in government jobs, and applying for state welfare schemes.</p>
<h3>Quick Overview</h3>
<ul>
<li><strong>Service Name:</strong> Issue of Local Residence Certificate</li>
<li><strong>State:</strong> Jharkhand</li>
<li><strong>Department:</strong> Revenue, Registration and Land Reforms Department</li>
<li><strong>Official Portal:</strong> Jharsewa (jharsewa.jharkhand.gov.in)</li>
<li><strong>Processing Time:</strong> 15-30 Days</li>
</ul>
<h3>Eligibility Criteria</h3>
<p>To be eligible for a Local Residence Certificate in Jharkhand, you must meet the guidelines set by the state government regarding local residential status, which typically include:</p>
<ul>
<li>The applicant or their ancestors must possess valid land records (Khatian) in the state.</li>
<li>Those who are landless but have been residing in the state for a long period identified by the Gram Sabha.</li>
<li>Employees of the Jharkhand State Government, Central Government, or state-run institutions residing in Jharkhand.</li>
<li>Persons born in Jharkhand who have completed their education in the state (subject to specific notifications).</li>
</ul>
<h3>Documents Required</h3>
<p>To process your application without delays, keep the following documents ready:</p>
<ul>
<li>Aadhar Card or Voter ID Card</li>
<li>Khatian (Land Record) or Land Tax Receipt (Lagaan Rasid)</li>
<li>Educational Certificates (if applying based on education)</li>
<li>Certificate from Gram Pradhan / Mukhiya / Mayor</li>
<li>Self-Declaration Form</li>
<li>Passport-size Photograph</li>
<li>Employment Certificate (if applying as a government employee)</li>
</ul>
<h3>Step-by-Step Online Process</h3>
<p>You can easily apply for the Local Residence Certificate online via the Jharsewa portal. Here is how:</p>
<ol>
<li>Go to the official Jharsewa website: <strong>jharsewa.jharkhand.gov.in</strong>.</li>
<li>Click on 'Register Yourself' to create an account, or 'Login' if you already have one.</li>
<li>Once logged in, click on 'Apply for Services' and select 'View all available services'.</li>
<li>Search and click on 'Issue of Local Residence Certificate'.</li>
<li>A detailed form will appear. Fill in your personal details, parent's details, address, and the basis on which you are claiming local residency.</li>
<li>Upload clear scanned copies of all required documents, including the signed self-declaration form.</li>
<li>Submit the application and note down the system-generated Application Reference Number.</li>
</ol>
<h3>Fees and Validity</h3>
<p>The application is practically free when done by yourself online. Applying through Pragya Kendras (CSC) requires a nominal processing fee as prescribed by the government (usually around Rs. 30). The certificate, once issued permanently, is usually valid for a lifetime unless specific conditions apply.</p>
<h3>How to Check Status and Download</h3>
<p>Track your application by visiting the Jharsewa portal and clicking on the 'Track Application Status' link on the homepage. Use your Application Reference Number to know if it is pending, approved, or rejected. Once approved, the digitally signed certificate can be downloaded directly from the portal.</p>
<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>Q: Is Khatiyan mandatory for a residence certificate?</strong><br>
A: Yes, having your name or your ancestors' name in the Khatiyan is one of the primary bases for obtaining the certificate. However, landless locals identified by the Gram Sabha are also eligible.</p>
<p><strong>Q: How long does it take to get the certificate?</strong><br>
A: Normally, the certificate is issued within 15 to 30 working days from the date of application.</p>
<p><strong>Q: Can I apply for it offline?</strong><br>
A: Yes, you can submit the physical application form along with documents to your Circle Officer (CO) or Block Office.</p>
<p><strong>Q: Can students from other states studying in Jharkhand get this certificate?</strong><br>
A: Residency depends on the specific guidelines. Simply studying in the state does not automatically confer local resident status without fulfilling other criteria.</p>
<p><strong>Q: Why was my application rejected?</strong><br>
A: Applications are usually rejected due to incomplete forms, blurry documents, or failure to prove residential eligibility. Check the remarks and re-apply correctly.</p>
<p><strong>Q: What is a Self-Declaration form?</strong><br>
A: It is an undertaking signed by the applicant declaring that all the information provided is true and correct.</p>
<h3>Useful Tools</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
<li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
<li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>
<h3>Related Services</h3>
<ul>
<li><a href="jh-income-certificate.html">Jharkhand Income Certificate</a></li>
<li><a href="jh-ration-card.html">Jharkhand Ration Card</a></li>
<li><a href="jh-maiya-samman-yojana.html">Jharkhand Maiya Samman Yojana</a></li>
</ul>''',
        'contentHi': '''<h2>झारखंड स्थानीय निवासी प्रमाण पत्र (अधिवास)</h2>
<p>स्थानीय निवासी प्रमाण पत्र (या अधिवास प्रमाण पत्र) झारखंड सरकार द्वारा प्रदान किया जाने वाला एक आवश्यक आधिकारिक दस्तावेज है। यह साबित करता है कि प्रमाण पत्र धारक राज्य का स्थायी या स्थानीय निवासी है। यह शैक्षणिक संस्थानों में प्रवेश पाने, सरकारी नौकरियों में कोटा का लाभ उठाने और राज्य कल्याणकारी योजनाओं के लिए आवेदन करने के लिए महत्वपूर्ण है।</p>
<h3>संक्षिप्त विवरण</h3>
<ul>
<li><strong>सेवा का नाम:</strong> स्थानीय निवासी प्रमाण पत्र जारी करना</li>
<li><strong>राज्य:</strong> झारखंड</li>
<li><strong>विभाग:</strong> राजस्व, निबंधन एवं भूमि सुधार विभाग</li>
<li><strong>आधिकारिक पोर्टल:</strong> झारसेवा (jharsewa.jharkhand.gov.in)</li>
<li><strong>प्रसंस्करण समय:</strong> 15-30 दिन</li>
</ul>
<h3>पात्रता मापदंड</h3>
<p>झारखंड में स्थानीय निवासी प्रमाण पत्र के लिए पात्र होने के लिए, आपको स्थानीय आवासीय स्थिति के संबंध में राज्य सरकार द्वारा निर्धारित दिशानिर्देशों को पूरा करना होगा, जिनमें आमतौर पर शामिल हैं:</p>
<ul>
<li>आवेदक या उनके पूर्वजों के पास राज्य में वैध भूमि रिकॉर्ड (खतियान) होना चाहिए।</li>
<li>वे लोग जो भूमिहीन हैं लेकिन ग्राम सभा द्वारा पहचाने गए लंबे समय से राज्य में रह रहे हैं।</li>
<li>झारखंड राज्य सरकार, केंद्र सरकार या झारखंड में रहने वाले राज्य द्वारा संचालित संस्थानों के कर्मचारी।</li>
<li>झारखंड में पैदा हुए व्यक्ति जिन्होंने राज्य में अपनी शिक्षा पूरी कर ली है (विशिष्ट अधिसूचनाओं के अधीन)।</li>
</ul>
<h3>आवश्यक दस्तावेज</h3>
<p>बिना किसी देरी के अपने आवेदन को संसाधित करने के लिए, निम्नलिखित दस्तावेज तैयार रखें:</p>
<ul>
<li>आधार कार्ड या वोटर आईडी कार्ड</li>
<li>खतियान (भूमि रिकॉर्ड) या भूमि कर रसीद (लगान रसीद)</li>
<li>शैक्षिक प्रमाण पत्र (यदि शिक्षा के आधार पर आवेदन कर रहे हैं)</li>
<li>ग्राम प्रधान / मुखिया / मेयर से प्रमाण पत्र</li>
<li>स्व-घोषणा पत्र (Self-Declaration Form)</li>
<li>पासपोर्ट आकार का फोटो</li>
<li>रोजगार प्रमाण पत्र (यदि सरकारी कर्मचारी के रूप में आवेदन कर रहे हैं)</li>
</ul>
<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया</h3>
<p>आप झारसेवा पोर्टल के माध्यम से स्थानीय निवासी प्रमाण पत्र के लिए आसानी से ऑनलाइन आवेदन कर सकते हैं। यहां बताया गया है कि कैसे:</p>
<ol>
<li>आधिकारिक झारसेवा वेबसाइट: <strong>jharsewa.jharkhand.gov.in</strong> पर जाएं।</li>
<li>खाता बनाने के लिए 'Register Yourself' पर क्लिक करें, या यदि आपके पास पहले से खाता है तो 'Login' करें।</li>
<li>लॉग इन करने के बाद, 'Apply for Services' पर क्लिक करें और 'View all available services' चुनें।</li>
<li>'Issue of Local Residence Certificate' खोजें और उस पर क्लिक करें।</li>
<li>एक विस्तृत फॉर्म दिखाई देगा। अपना व्यक्तिगत विवरण, माता-पिता का विवरण, पता और वह आधार भरें जिस पर आप स्थानीय निवास का दावा कर रहे हैं।</li>
<li>हस्ताक्षरित स्व-घोषणा पत्र सहित सभी आवश्यक दस्तावेजों की स्पष्ट स्कैन की गई प्रतियां अपलोड करें।</li>
<li>आवेदन जमा करें और सिस्टम जनरेटेड आवेदन संदर्भ संख्या (Application Reference Number) नोट कर लें।</li>
</ol>
<h3>शुल्क और वैधता</h3>
<p>जब आप स्वयं ऑनलाइन आवेदन करते हैं तो आवेदन व्यावहारिक रूप से निःशुल्क होता है। प्रज्ञा केंद्रों (CSC) के माध्यम से आवेदन करने पर सरकार द्वारा निर्धारित नाममात्र प्रसंस्करण शुल्क (आमतौर पर लगभग 30 रुपये) की आवश्यकता होती है। प्रमाण पत्र, एक बार स्थायी रूप से जारी होने के बाद, आमतौर पर आजीवन वैध होता है जब तक कि विशिष्ट शर्तें लागू न हों।</p>
<h3>स्थिति कैसे जांचें और डाउनलोड करें</h3>
<p>झारसेवा पोर्टल पर जाकर और होमपेज पर 'Track Application Status' लिंक पर क्लिक करके अपने आवेदन को ट्रैक करें। यह जानने के लिए अपनी आवेदन संदर्भ संख्या का उपयोग करें कि यह लंबित है, स्वीकृत है या अस्वीकार कर दिया गया है। स्वीकृत होने के बाद, डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र सीधे पोर्टल से डाउनलोड किया जा सकता है।</p>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>प्रश्न: क्या निवास प्रमाण पत्र के लिए खतियान अनिवार्य है?</strong><br>
उत्तर: हाँ, खतियान में अपना नाम या अपने पूर्वजों का नाम होना प्रमाण पत्र प्राप्त करने का प्राथमिक आधार है। हालांकि, ग्राम सभा द्वारा पहचाने गए भूमिहीन स्थानीय लोग भी पात्र हैं।</p>
<p><strong>प्रश्न: प्रमाण पत्र प्राप्त करने में कितना समय लगता है?</strong><br>
उत्तर: आम तौर पर, प्रमाण पत्र आवेदन की तारीख से 15 से 30 कार्य दिवसों के भीतर जारी किया जाता है।</p>
<p><strong>प्रश्न: क्या मैं इसके लिए ऑफलाइन आवेदन कर सकता हूँ?</strong><br>
उत्तर: हाँ, आप दस्तावेजों के साथ भौतिक आवेदन पत्र अपने अंचल अधिकारी (CO) या प्रखंड कार्यालय में जमा कर सकते हैं।</p>
<p><strong>प्रश्न: क्या झारखंड में पढ़ने वाले अन्य राज्यों के छात्र यह प्रमाण पत्र प्राप्त कर सकते हैं?</strong><br>
उत्तर: निवास विशिष्ट दिशानिर्देशों पर निर्भर करता है। केवल राज्य में अध्ययन करने से अन्य मानदंडों को पूरा किए बिना स्वचालित रूप से स्थानीय निवासी का दर्जा नहीं मिलता है।</p>
<p><strong>प्रश्न: मेरा आवेदन क्यों अस्वीकार कर दिया गया?</strong><br>
उत्तर: आवेदन आमतौर पर अपूर्ण फॉर्म, धुंधले दस्तावेजों या आवासीय पात्रता साबित करने में विफलता के कारण खारिज कर दिए जाते हैं। टिप्पणी की जांच करें और सही ढंग से फिर से आवेदन करें।</p>
<p><strong>प्रश्न: स्व-घोषणा पत्र क्या है?</strong><br>
उत्तर: यह आवेदक द्वारा हस्ताक्षरित एक वचन है जिसमें यह घोषित किया जाता है कि प्रदान की गई सभी जानकारी सत्य और सही है।</p>
<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">पात्रता जांच टूल (Govt Scheme Eligibility Checker)</a></li>
<li><a href="../tools/document-checklist.html">दस्तावेज़ चेकलिस्ट (Document Checklist Tool)</a></li>
<li><a href="../tools/status-troubleshooter.html">आवेदन स्थिति समस्या निवारक (Application Status Troubleshooter)</a></li>
</ul>
<h3>संबंधित सेवाएं</h3>
<ul>
<li><a href="jh-income-certificate.html">झारखंड आय प्रमाण पत्र</a></li>
<li><a href="jh-ration-card.html">झारखंड राशन कार्ड</a></li>
<li><a href="jh-maiya-samman-yojana.html">झारखंड मंईयां सम्मान योजना</a></li>
</ul>'''
    },
    'ka-bhoomi-rtc.html': {
        'titleEn': 'Karnataka Bhoomi RTC - View Land Records Online & MR Status',
        'titleHi': 'कर्नाटक भूमि आरटीसी - भूमि रिकॉर्ड ऑनलाइन और एमआर स्थिति देखें',
        'descEn': 'Check Karnataka Land Records online via Bhoomi RTC portal. Learn how to view Pahani, MR status, Mutation details, and download digital RTC easily.',
        'descHi': 'भूमि आरटीसी पोर्टल के माध्यम से कर्नाटक भूमि रिकॉर्ड ऑनलाइन जांचें। पहाणी, एमआर स्थिति, उत्परिवर्तन विवरण देखने और डिजिटल आरटीसी आसानी से डाउनलोड करने का तरीका जानें।',
        'contentEn': '''<h2>Karnataka Bhoomi RTC: View Land Records Online</h2>
<p>Bhoomi is the flagship land records management project of the Government of Karnataka. It has successfully digitized millions of land records, making it easier for citizens to access their RTC (Record of Rights, Tenancy, and Crops), also known as Pahani. The Bhoomi portal brings transparency and eliminates the need to visit government offices for basic land details.</p>
<h3>Quick Overview</h3>
<ul>
<li><strong>Service Name:</strong> Bhoomi RTC (Pahani) and Land Records</li>
<li><strong>State:</strong> Karnataka</li>
<li><strong>Department:</strong> Revenue Department</li>
<li><strong>Official Portal:</strong> landrecords.karnataka.gov.in/bhoomi</li>
<li><strong>Key Services:</strong> View RTC, Mutation Status, Revenue Maps</li>
</ul>
<h3>What is RTC (Pahani)?</h3>
<p>RTC stands for Record of Rights, Tenancy, and Crops. It is a crucial document that contains details about the land such as:</p>
<ul>
<li>Landowner's name and details</li>
<li>Land area, type, and assessment</li>
<li>Water rate and soil type</li>
<li>Nature of possession (tenancy)</li>
<li>Liabilities or bank loans on the land</li>
<li>Crops grown (Pahani details)</li>
</ul>
<h3>Step-by-Step Process to View RTC Online</h3>
<p>To view your RTC/Pahani online, follow these simple steps:</p>
<ol>
<li>Visit the official Bhoomi portal: <strong>landrecords.karnataka.gov.in/bhoomi</strong>.</li>
<li>Click on the 'For Citizen Services' section on the homepage.</li>
<li>Select 'View RTC and MR' from the available options.</li>
<li>A new page will open. Choose the required option: 'Current Year' or 'Old Year'.</li>
<li>Select your District, Taluk, Hobli, and Village from the dropdown menus.</li>
<li>Enter your Survey Number and click 'Fetch Details' or 'Go'.</li>
<li>Select the Surnoc, Hissa Number, and Period.</li>
<li>Click on the 'Fetch Details' button again.</li>
<li>Your RTC details will be displayed on the screen. You can click on 'View RTC' to see the complete document and take a printout for informational purposes.</li>
</ol>
<h3>How to Download Digitally Signed RTC</h3>
<p>While the informational RTC is free to view, for official purposes like bank loans, you need a digitally signed RTC:</p>
<ol>
<li>Go to the Bhoomi portal and click on 'i-RTC' under citizen services.</li>
<li>Login using your User ID and Password, or proceed as a Guest User by entering your name and mobile number.</li>
<li>Fill in the land details (District, Taluk, Hobli, Village, Survey No).</li>
<li>Click on 'Fetch Details'.</li>
<li>Pay the required fee online (usually Rs. 15 per RTC).</li>
<li>Once payment is successful, download the Digitally Signed RTC in PDF format.</li>
</ol>
<h3>How to Check Mutation Report (MR) Status</h3>
<p>Mutation is the process of transferring the title ownership of the land. To check the MR status:</p>
<ol>
<li>On the Bhoomi portal, click on 'View RTC and MR'.</li>
<li>Switch the tab to 'Mutation Report (MR)'.</li>
<li>Enter your District, Taluk, Hobli, Village, and Survey Number.</li>
<li>Click 'Fetch Details' to view the current mutation status of the property.</li>
</ol>
<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>Q: What is the fee for downloading a digitally signed RTC?</strong><br>
A: The fee is generally Rs. 15 per RTC when downloaded online.</p>
<p><strong>Q: Is the online printed RTC valid for legal purposes?</strong><br>
A: The freely viewable RTC is for information only. You must download the Digitally Signed i-RTC or get a physical copy from a Nada Kacheri center for legal and official purposes.</p>
<p><strong>Q: Can I check land records by owner name instead of Survey Number?</strong><br>
A: Yes, you can search for the Survey Number by using the owner's name under the 'View Survey No by Owner Name' option on the portal.</p>
<p><strong>Q: How do I apply for Mutation online?</strong><br>
A: Mutation applications are generally initiated during property registration. You can track the status on Bhoomi, but applying might require visiting the Nada Kacheri or sub-registrar office.</p>
<p><strong>Q: What are Revenue Maps?</strong><br>
A: Revenue Maps show the boundaries of the villages and the parcels of land (Survey Numbers). You can download them as PDF from the Bhoomi portal.</p>
<p><strong>Q: What to do if there is a mistake in my RTC?</strong><br>
A: You need to submit a dispute or correction application to the Tahsildar of your respective Taluk.</p>
<h3>Useful Tools</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
<li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
<li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>
<h3>Related Services</h3>
<ul>
<li><a href="jh-income-certificate.html">Jharkhand Income Certificate</a></li>
<li><a href="jh-ration-card.html">Jharkhand Ration Card</a></li>
<li><a href="jh-residence-certificate.html">Jharkhand Residence Certificate</a></li>
</ul>''',
        'contentHi': '''<h2>कर्नाटक भूमि आरटीसी: भूमि रिकॉर्ड ऑनलाइन देखें</h2>
<p>भूमि कर्नाटक सरकार की प्रमुख भूमि रिकॉर्ड प्रबंधन परियोजना है। इसने लाखों भूमि रिकॉर्ड को सफलतापूर्वक डिजिटल कर दिया है, जिससे नागरिकों के लिए अपने आरटीसी (रिकॉर्ड ऑफ राइट्स, टेनेंसी एंड क्रॉप्स), जिसे पहाणी के रूप में भी जाना जाता है, तक पहुंच आसान हो गई है। भूमि पोर्टल पारदर्शिता लाता है और बुनियादी भूमि विवरण के लिए सरकारी कार्यालयों के चक्कर लगाने की आवश्यकता को समाप्त करता है।</p>
<h3>संक्षिप्त विवरण</h3>
<ul>
<li><strong>सेवा का नाम:</strong> भूमि आरटीसी (पहाणी) और भूमि रिकॉर्ड</li>
<li><strong>राज्य:</strong> कर्नाटक</li>
<li><strong>विभाग:</strong> राजस्व विभाग</li>
<li><strong>आधिकारिक पोर्टल:</strong> landrecords.karnataka.gov.in/bhoomi</li>
<li><strong>प्रमुख सेवाएं:</strong> आरटीसी, म्यूटेशन स्थिति, राजस्व मानचित्र देखें</li>
</ul>
<h3>आरटीसी (पहाणी) क्या है?</h3>
<p>आरटीसी का अर्थ 'अधिकार, किरायेदारी और फसलों का रिकॉर्ड' है। यह एक महत्वपूर्ण दस्तावेज है जिसमें भूमि के बारे में विवरण होता है जैसे:</p>
<ul>
<li>जमींदार का नाम और विवरण</li>
<li>भूमि क्षेत्र, प्रकार और मूल्यांकन</li>
<li>पानी की दर और मिट्टी का प्रकार</li>
<li>कब्जे की प्रकृति (किरायेदारी)</li>
<li>भूमि पर देनदारियां या बैंक ऋण</li>
<li>उगाई जाने वाली फसलें (पहाणी विवरण)</li>
</ul>
<h3>आरटीसी ऑनलाइन देखने की चरण-दर-चरण प्रक्रिया</h3>
<p>अपना आरटीसी/पहाणी ऑनलाइन देखने के लिए, इन सरल चरणों का पालन करें:</p>
<ol>
<li>आधिकारिक भूमि पोर्टल: <strong>landrecords.karnataka.gov.in/bhoomi</strong> पर जाएं।</li>
<li>होमपेज पर 'For Citizen Services' सेक्शन पर क्लिक करें।</li>
<li>उपलब्ध विकल्पों में से 'View RTC and MR' चुनें।</li>
<li>एक नया पेज खुलेगा। आवश्यक विकल्प चुनें: 'Current Year' (वर्तमान वर्ष) या 'Old Year' (पुराना वर्ष)।</li>
<li>ड्रॉपडाउन मेनू से अपना जिला, तालुक, होबली और गांव चुनें।</li>
<li>अपना सर्वे नंबर दर्ज करें और 'Fetch Details' या 'Go' पर क्लिक करें।</li>
<li>सरनोक (Surnoc), हिस्सा नंबर (Hissa Number) और अवधि चुनें।</li>
<li>फिर से 'Fetch Details' बटन पर क्लिक करें।</li>
<li>आपका आरटीसी विवरण स्क्रीन पर प्रदर्शित होगा। आप संपूर्ण दस्तावेज़ देखने के लिए 'View RTC' पर क्लिक कर सकते हैं और सूचनात्मक उद्देश्यों के लिए प्रिंटआउट ले सकते हैं।</li>
</ol>
<h3>डिजिटली हस्ताक्षरित आरटीसी कैसे डाउनलोड करें</h3>
<p>जबकि सूचनात्मक आरटीसी देखने के लिए निःशुल्क है, बैंक ऋण जैसे आधिकारिक उद्देश्यों के लिए, आपको डिजिटल रूप से हस्ताक्षरित आरटीसी की आवश्यकता है:</p>
<ol>
<li>भूमि पोर्टल पर जाएं और नागरिक सेवाओं के तहत 'i-RTC' पर क्लिक करें।</li>
<li>अपने यूजर आईडी और पासवर्ड का उपयोग करके लॉगिन करें, या अपना नाम और मोबाइल नंबर दर्ज करके अतिथि उपयोगकर्ता के रूप में आगे बढ़ें।</li>
<li>भूमि विवरण (जिला, तालुक, होबली, गांव, सर्वे नंबर) भरें।</li>
<li>'Fetch Details' पर क्लिक करें।</li>
<li>आवश्यक शुल्क का ऑनलाइन भुगतान करें (आमतौर पर 15 रुपये प्रति आरटीसी)।</li>
<li>भुगतान सफल होने के बाद, डिजिटल रूप से हस्ताक्षरित आरटीसी को पीडीएफ प्रारूप में डाउनलोड करें।</li>
</ol>
<h3>उत्परिवर्तन रिपोर्ट (MR) स्थिति की जांच कैसे करें</h3>
<p>उत्परिवर्तन (Mutation) भूमि के स्वामित्व अधिकार को हस्तांतरित करने की प्रक्रिया है। एमआर स्थिति की जांच करने के लिए:</p>
<ol>
<li>भूमि पोर्टल पर, 'View RTC and MR' पर क्लिक करें।</li>
<li>टैब को 'Mutation Report (MR)' पर स्विच करें।</li>
<li>अपना जिला, तालुक, होबली, गांव और सर्वे नंबर दर्ज करें।</li>
<li>संपत्ति की वर्तमान उत्परिवर्तन स्थिति देखने के लिए 'Fetch Details' पर क्लिक करें।</li>
</ol>
<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>प्रश्न: डिजिटल रूप से हस्ताक्षरित आरटीसी डाउनलोड करने का शुल्क क्या है?</strong><br>
उत्तर: ऑनलाइन डाउनलोड करने पर शुल्क आमतौर पर 15 रुपये प्रति आरटीसी है।</p>
<p><strong>प्रश्न: क्या ऑनलाइन मुद्रित आरटीसी कानूनी उद्देश्यों के लिए मान्य है?</strong><br>
उत्तर: स्वतंत्र रूप से देखने योग्य आरटीसी केवल जानकारी के लिए है। कानूनी और आधिकारिक उद्देश्यों के लिए आपको डिजिटल रूप से हस्ताक्षरित i-RTC डाउनलोड करना होगा या नाडा कचेरी केंद्र से भौतिक प्रति प्राप्त करनी होगी।</p>
<p><strong>प्रश्न: क्या मैं सर्वे नंबर के बजाय मालिक के नाम से भूमि रिकॉर्ड की जांच कर सकता हूँ?</strong><br>
उत्तर: हाँ, आप पोर्टल पर 'View Survey No by Owner Name' विकल्प के तहत मालिक के नाम का उपयोग करके सर्वे नंबर खोज सकते हैं।</p>
<p><strong>प्रश्न: मैं म्यूटेशन के लिए ऑनलाइन आवेदन कैसे करूं?</strong><br>
उत्तर: उत्परिवर्तन आवेदन आम तौर पर संपत्ति पंजीकरण के दौरान शुरू किए जाते हैं। आप भूमि पर स्थिति को ट्रैक कर सकते हैं, लेकिन आवेदन करने के लिए नाडा कचेरी या उप-पंजीयक कार्यालय जाने की आवश्यकता हो सकती है।</p>
<p><strong>प्रश्न: राजस्व मानचित्र क्या हैं?</strong><br>
उत्तर: राजस्व मानचित्र गांवों और भूमि के पार्सल (सर्वे नंबर) की सीमाओं को दर्शाते हैं। आप उन्हें भूमि पोर्टल से पीडीएफ के रूप में डाउनलोड कर सकते हैं।</p>
<p><strong>प्रश्न: अगर मेरे आरटीसी में कोई गलती है तो क्या करें?</strong><br>
उत्तर: आपको अपने संबंधित तालुक के तहसीलदार को विवाद या सुधार आवेदन जमा करना होगा।</p>
<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
<li><a href="../tools/eligibility-checker.html">पात्रता जांच टूल (Govt Scheme Eligibility Checker)</a></li>
<li><a href="../tools/document-checklist.html">दस्तावेज़ चेकलिस्ट (Document Checklist Tool)</a></li>
<li><a href="../tools/status-troubleshooter.html">आवेदन स्थिति समस्या निवारक (Application Status Troubleshooter)</a></li>
</ul>
<h3>संबंधित सेवाएं</h3>
<ul>
<li><a href="jh-income-certificate.html">झारखंड आय प्रमाण पत्र</a></li>
<li><a href="jh-ration-card.html">झारखंड राशन कार्ड</a></li>
<li><a href="jh-residence-certificate.html">झारखंड निवास प्रमाण पत्र</a></li>
</ul>'''
    }
}

os.makedirs(r'C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal', exist_ok=True)
with open(r'C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\batch21.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('JSON file created successfully.')
