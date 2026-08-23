import json
import os

data = {
  "kl-social-security-pension.html": {
    "titleEn": "Kerala Social Security Pension (Sevana) Application 2024",
    "titleHi": "केरल सामाजिक सुरक्षा पेंशन (सेवना) ऑनलाइन आवेदन 2024",
    "descEn": "Apply online for Kerala Social Security Pension (Sevana). Check eligibility, document list, and track your Sevana pension status easily.",
    "descHi": "केरल सामाजिक सुरक्षा पेंशन (सेवना) के लिए ऑनलाइन आवेदन करें। पात्रता, आवश्यक दस्तावेज और सेवना पेंशन स्थिति की जांच करें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>The Kerala Social Security Pension, managed through the Sevana portal, provides vital financial assistance to various vulnerable groups in the state. This includes old age pensions, widow pensions, pensions for the unmarried above 50 years, and disability pensions. The state government aims to ensure social security and a dignified life for all eligible citizens.</p>

<h3>Eligibility</h3>
<ul>
  <li>Must be a permanent resident of Kerala.</li>
  <li>Age criteria varies by scheme (e.g., 60+ for old age pension).</li>
  <li>Family annual income must be below Rs. 1,00,000.</li>
  <li>Must not be receiving any other government pension.</li>
  <li>Must have an active bank account linked with Aadhaar.</li>
</ul>

<h3>Documents Required</h3>
<ul>
  <li>Aadhaar Card (Mandatory for DBT)</li>
  <li>Ration Card (BPL/AAY preferred)</li>
  <li>Income Certificate from Village Officer</li>
  <li>Age Proof (Birth Certificate, SSLC, or Voter ID)</li>
  <li>Bank Passbook (Front page copy)</li>
  <li>Passport Size Photographs</li>
  <li>Medical Certificate (for Disability Pension)</li>
</ul>

<h3>Step-by-Step Online Process</h3>
<ol>
  <li>Visit the official Sevana Pension website or the nearest Akshaya Centre.</li>
  <li>Select the relevant pension scheme under the 'Social Security Pensions' tab.</li>
  <li>Download the application form or request online entry via the Akshaya operator.</li>
  <li>Fill in your personal, family, and bank details accurately.</li>
  <li>Upload or attach all required documents as per the checklist.</li>
  <li>Submit the application to the Grama Panchayat or Municipality/Corporation Secretary.</li>
  <li>Collect the acknowledgment slip for future reference.</li>
</ol>

<h3>Fees</h3>
<p>There are no government fees for submitting the pension application. However, nominal service charges may apply if applying through an Akshaya Centre (usually Rs. 20-30).</p>

<h3>Status Check</h3>
<p>To check your application or payment status, visit the Sevana portal, click on 'Pension Search', and enter your Aadhaar number, Account Number, or Pensioner ID. The current status of your monthly disbursement will be displayed.</p>

<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>1. What is the current monthly pension amount in Kerala?</strong><br>As of the latest updates, the monthly pension amount is generally Rs. 1600, disbursed directly to bank accounts or via cooperative banks.</p>
<p><strong>2. Can I apply for multiple pensions?</strong><br>No, an individual can only avail of one social security pension at a time.</p>
<p><strong>3. How long does it take for approval?</strong><br>It usually takes 30-45 days after verification by the local body officials.</p>
<p><strong>4. Is Aadhaar linking mandatory?</strong><br>Yes, Aadhaar must be linked to your bank account for Direct Benefit Transfer (DBT) to receive the pension.</p>
<p><strong>5. What should I do if my pension stops suddenly?</strong><br>You may need to submit a life certificate or complete the annual mustering process at an Akshaya centre.</p>
<p><strong>6. Can NRIs apply for this pension?</strong><br>No, this scheme is strictly for residents living in Kerala.</p>

<h3>Useful Tools</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>Related Services</h3>
<ul>
  <li><a href="labour-card-construction-workers.html">Labour Card for Construction Workers</a></li>
  <li><a href="legal-heir-certificate.html">Legal Heir Certificate</a></li>
  <li><a href="lakhpati-didi-yojana.html">Lakhpati Didi Yojana</a></li>
</ul>""",
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>सेवना पोर्टल के माध्यम से प्रबंधित केरल सामाजिक सुरक्षा पेंशन, राज्य में विभिन्न कमजोर समूहों को महत्वपूर्ण वित्तीय सहायता प्रदान करती है। इसमें वृद्धावस्था पेंशन, विधवा पेंशन, 50 वर्ष से अधिक उम्र के अविवाहितों के लिए पेंशन और विकलांगता पेंशन शामिल हैं। राज्य सरकार का उद्देश्य सभी पात्र नागरिकों के लिए सामाजिक सुरक्षा और सम्मानजनक जीवन सुनिश्चित करना है।</p>

<h3>पात्रता (Eligibility)</h3>
<ul>
  <li>केरल का स्थायी निवासी होना चाहिए।</li>
  <li>आयु मानदंड योजना के अनुसार अलग-अलग होता है (जैसे, वृद्धावस्था पेंशन के लिए 60+)।</li>
  <li>परिवार की वार्षिक आय 1,00,000 रुपये से कम होनी चाहिए।</li>
  <li>कोई अन्य सरकारी पेंशन प्राप्त नहीं कर रहा हो।</li>
  <li>आधार से जुड़ा एक सक्रिय बैंक खाता होना चाहिए।</li>
</ul>

<h3>आवश्यक दस्तावेज (Documents Required)</h3>
<ul>
  <li>आधार कार्ड (DBT के लिए अनिवार्य)</li>
  <li>राशन कार्ड (BPL/AAY को प्राथमिकता)</li>
  <li>ग्राम अधिकारी से आय प्रमाण पत्र</li>
  <li>आयु प्रमाण (जन्म प्रमाण पत्र, एसएसएलसी, या मतदाता पहचान पत्र)</li>
  <li>बैंक पासबुक (प्रथम पृष्ठ की प्रति)</li>
  <li>पासपोर्ट साइज फोटो</li>
  <li>चिकित्सा प्रमाण पत्र (विकलांगता पेंशन के लिए)</li>
</ul>

<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h3>
<ol>
  <li>आधिकारिक सेवना पेंशन वेबसाइट या निकटतम अक्षय केंद्र पर जाएं।</li>
  <li>'सामाजिक सुरक्षा पेंशन' टैब के तहत प्रासंगिक पेंशन योजना का चयन करें।</li>
  <li>आवेदन पत्र डाउनलोड करें या अक्षय ऑपरेटर के माध्यम से ऑनलाइन प्रविष्टि का अनुरोध करें।</li>
  <li>अपना व्यक्तिगत, पारिवारिक और बैंक विवरण सटीक रूप से भरें।</li>
  <li>चेकलिस्ट के अनुसार सभी आवश्यक दस्तावेज अपलोड या संलग्न करें।</li>
  <li>ग्राम पंचायत या नगर पालिका/निगम सचिव को आवेदन जमा करें।</li>
  <li>भविष्य के संदर्भ के लिए पावती पर्ची एकत्र करें।</li>
</ol>

<h3>शुल्क (Fees)</h3>
<p>पेंशन आवेदन जमा करने के लिए कोई सरकारी शुल्क नहीं है। हालांकि, अक्षय केंद्र (आमतौर पर 20-30 रुपये) के माध्यम से आवेदन करने पर नाममात्र सेवा शुल्क लागू हो सकता है।</p>

<h3>स्थिति जांच (Status Check)</h3>
<p>अपने आवेदन या भुगतान की स्थिति की जांच करने के लिए, सेवना पोर्टल पर जाएं, 'पेंशन सर्च' पर क्लिक करें, और अपना आधार नंबर, खाता संख्या या पेंशनर आईडी दर्ज करें। आपके मासिक संवितरण की वर्तमान स्थिति प्रदर्शित की जाएगी।</p>

<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>1. केरल में वर्तमान मासिक पेंशन राशि क्या है?</strong><br>नवीनतम अपडेट के अनुसार, मासिक पेंशन राशि आम तौर पर 1600 रुपये है, जो सीधे बैंक खातों में या सहकारी बैंकों के माध्यम से वितरित की जाती है।</p>
<p><strong>2. क्या मैं कई पेंशन के लिए आवेदन कर सकता हूँ?</strong><br>नहीं, एक व्यक्ति एक समय में केवल एक सामाजिक सुरक्षा पेंशन का लाभ उठा सकता है।</p>
<p><strong>3. अनुमोदन में कितना समय लगता है?</strong><br>स्थानीय निकाय अधिकारियों द्वारा सत्यापन के बाद आमतौर पर 30-45 दिन लगते हैं।</p>
<p><strong>4. क्या आधार लिंकिंग अनिवार्य है?</strong><br>हां, पेंशन प्राप्त करने के लिए प्रत्यक्ष लाभ अंतरण (DBT) के लिए आधार को आपके बैंक खाते से जोड़ा जाना चाहिए।</p>
<p><strong>5. अगर मेरी पेंशन अचानक बंद हो जाए तो मुझे क्या करना चाहिए?</strong><br>आपको एक जीवन प्रमाण पत्र जमा करने या अक्षय केंद्र में वार्षिक मस्टरिंग प्रक्रिया को पूरा करने की आवश्यकता हो सकती है।</p>
<p><strong>6. क्या एनआरआई इस पेंशन के लिए आवेदन कर सकते हैं?</strong><br>नहीं, यह योजना केवल केरल में रहने वाले निवासियों के लिए है।</p>

<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>संबंधित सेवाएं (Related Services)</h3>
<ul>
  <li><a href="labour-card-construction-workers.html">निर्माण श्रमिकों के लिए लेबर कार्ड</a></li>
  <li><a href="legal-heir-certificate.html">कानूनी वारिस प्रमाण पत्र</a></li>
  <li><a href="lakhpati-didi-yojana.html">लखपति दीदी योजना</a></li>
</ul>"""
  },
  "labour-card-construction-workers.html": {
    "titleEn": "Labour Card Online Apply: Registration & Benefits 2024",
    "titleHi": "लेबर कार्ड ऑनलाइन आवेदन: निर्माण श्रमिक पंजीकरण 2024",
    "descEn": "Complete guide on Labour Card for construction workers. Learn how to apply online, benefits, eligibility, and status check process.",
    "descHi": "निर्माण श्रमिकों के लिए लेबर कार्ड पर पूरी जानकारी। ऑनलाइन आवेदन कैसे करें, लाभ, पात्रता और स्थिति जांच प्रक्रिया जानें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>The Labour Card (also known as BOCW Card or Shramik Card) is a vital document issued by the Building and Other Construction Workers Welfare Board of respective states. It provides registered construction workers with access to numerous government schemes, financial aid, life insurance, scholarships for children, and healthcare benefits. Registering for a Labour Card ensures that the unorganized construction sector workers get a social safety net.</p>

<h3>Eligibility</h3>
<ul>
  <li>Must be a citizen of India.</li>
  <li>Age must be between 18 and 60 years.</li>
  <li>Must have worked as a building or construction worker for at least 90 days in the preceding 12 months.</li>
  <li>Should not be a member of any other welfare fund.</li>
  <li>Must belong to the unorganized sector.</li>
</ul>

<h3>Documents Required</h3>
<ul>
  <li>Aadhaar Card</li>
  <li>Bank Account Passbook (for Direct Benefit Transfer)</li>
  <li>Employment Certificate (certifying 90 days of work, signed by contractor/employer)</li>
  <li>Passport Size Photographs</li>
  <li>Ration Card (Optional but recommended)</li>
  <li>Family Details/Nominee Aadhaar</li>
</ul>

<h3>Step-by-Step Online Process</h3>
<ol>
  <li>Visit your state's official Labour Department or BOCW Board website.</li>
  <li>Click on 'New Worker Registration' or 'Apply for Labour Card'.</li>
  <li>Register using your Aadhaar number and active mobile number to receive an OTP.</li>
  <li>Fill in the comprehensive application form with personal, family, and bank details.</li>
  <li>Upload scanned copies of all the necessary documents, including the 90-day work certificate.</li>
  <li>Pay the required registration fee online (if applicable in your state).</li>
  <li>Submit the application and save the application reference number for tracking.</li>
</ol>

<h3>Fees</h3>
<p>The registration fee varies by state but is generally very nominal, typically ranging from Rs. 20 to Rs. 50. Some states also charge a small monthly or annual renewal contribution (e.g., Rs. 5 to Rs. 10 per month).</p>

<h3>Status Check</h3>
<p>To check your application status, go to the official labour board website of your state, look for the 'Application Status' or 'Check Status' link, and enter your Application ID or Aadhaar number. The portal will show whether it is pending, approved, or rejected.</p>

<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>1. What benefits do I get with a Labour Card?</strong><br>Benefits include accidental insurance, maternity benefits, scholarships for children, housing loan assistance, pension, and financial help for daughter's marriage.</p>
<p><strong>2. Who can sign the 90-day work certificate?</strong><br>It can be signed by a registered contractor, builder, employer, or sometimes by a local government official (like a Panchayat Secretary) depending on state rules.</p>
<p><strong>3. How long is the Labour Card valid?</strong><br>It is usually valid for 1 to 3 years and must be renewed periodically by paying the small renewal contribution.</p>
<p><strong>4. Can women construction workers apply?</strong><br>Absolutely, women are equally eligible and often receive additional benefits like maternity assistance.</p>
<p><strong>5. Is the Shramik Card and e-Shram Card the same?</strong><br>No. e-Shram is a national database for all unorganized workers, while the BOCW Labour Card is specific to construction workers managed by state boards.</p>
<p><strong>6. What happens if I move to another state?</strong><br>Currently, BOCW boards are state-specific. If you permanently migrate, you may need to register in the new state, though some national portability schemes are being introduced.</p>

<h3>Useful Tools</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>Related Services</h3>
<ul>
  <li><a href="lakhpati-didi-yojana.html">Lakhpati Didi Yojana</a></li>
  <li><a href="kl-social-security-pension.html">Social Security Pension</a></li>
  <li><a href="lpg-cylinder-booking.html">LPG Cylinder Booking Subsidy</a></li>
</ul>""",
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>लेबर कार्ड (जिसे बीओसीडब्ल्यू कार्ड या श्रमिक कार्ड भी कहा जाता है) संबंधित राज्यों के भवन और अन्य निर्माण श्रमिक कल्याण बोर्ड द्वारा जारी एक महत्वपूर्ण दस्तावेज है। यह पंजीकृत निर्माण श्रमिकों को कई सरकारी योजनाओं, वित्तीय सहायता, जीवन बीमा, बच्चों के लिए छात्रवृत्ति और स्वास्थ्य सेवा लाभों तक पहुंच प्रदान करता है। लेबर कार्ड के लिए पंजीकरण यह सुनिश्चित करता है कि असंगठित निर्माण क्षेत्र के श्रमिकों को सामाजिक सुरक्षा मिले।</p>

<h3>पात्रता (Eligibility)</h3>
<ul>
  <li>भारत का नागरिक होना चाहिए।</li>
  <li>आयु 18 से 60 वर्ष के बीच होनी चाहिए।</li>
  <li>पिछले 12 महीनों में कम से कम 90 दिनों तक भवन या निर्माण श्रमिक के रूप में काम किया होना चाहिए।</li>
  <li>किसी अन्य कल्याण कोष का सदस्य नहीं होना चाहिए।</li>
  <li>असंगठित क्षेत्र से संबंधित होना चाहिए।</li>
</ul>

<h3>आवश्यक दस्तावेज (Documents Required)</h3>
<ul>
  <li>आधार कार्ड</li>
  <li>बैंक खाता पासबुक (प्रत्यक्ष लाभ अंतरण के लिए)</li>
  <li>रोजगार प्रमाण पत्र (90 दिनों के काम को प्रमाणित करने वाला, ठेकेदार/नियोक्ता द्वारा हस्ताक्षरित)</li>
  <li>पासपोर्ट साइज फोटो</li>
  <li>राशन कार्ड (वैकल्पिक लेकिन अनुशंसित)</li>
  <li>पारिवारिक विवरण / नामांकित व्यक्ति का आधार</li>
</ul>

<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h3>
<ol>
  <li>अपने राज्य के आधिकारिक श्रम विभाग या बीओसीडब्ल्यू बोर्ड की वेबसाइट पर जाएं।</li>
  <li>'न्यू वर्कर रजिस्ट्रेशन' या 'अप्लाई फॉर लेबर कार्ड' पर क्लिक करें।</li>
  <li>ओटीपी प्राप्त करने के लिए अपने आधार नंबर और सक्रिय मोबाइल नंबर का उपयोग करके पंजीकरण करें।</li>
  <li>व्यक्तिगत, पारिवारिक और बैंक विवरण के साथ व्यापक आवेदन पत्र भरें।</li>
  <li>90-दिवसीय कार्य प्रमाण पत्र सहित सभी आवश्यक दस्तावेजों की स्कैन की गई प्रतियां अपलोड करें।</li>
  <li>आवश्यक पंजीकरण शुल्क का ऑनलाइन भुगतान करें (यदि आपके राज्य में लागू हो)।</li>
  <li>आवेदन जमा करें और ट्रैकिंग के लिए आवेदन संदर्भ संख्या सहेजें।</li>
</ol>

<h3>शुल्क (Fees)</h3>
<p>पंजीकरण शुल्क राज्य के अनुसार अलग-अलग होता है लेकिन आमतौर पर बहुत मामूली होता है, आमतौर पर 20 रुपये से 50 रुपये तक। कुछ राज्य एक छोटा मासिक या वार्षिक नवीनीकरण योगदान (जैसे, 5 से 10 रुपये प्रति माह) भी लेते हैं।</p>

<h3>स्थिति जांच (Status Check)</h3>
<p>अपने आवेदन की स्थिति जांचने के लिए, अपने राज्य की आधिकारिक श्रम बोर्ड वेबसाइट पर जाएं, 'एप्लिकेशन स्टेटस' या 'चेक स्टेटस' लिंक देखें, और अपना एप्लिकेशन आईडी या आधार नंबर दर्ज करें। पोर्टल दिखाएगा कि यह लंबित है, स्वीकृत है या अस्वीकार कर दिया गया है।</p>

<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>1. लेबर कार्ड से मुझे क्या लाभ मिलता है?</strong><br>लाभों में आकस्मिक बीमा, मातृत्व लाभ, बच्चों के लिए छात्रवृत्ति, आवास ऋण सहायता, पेंशन और बेटी की शादी के लिए वित्तीय सहायता शामिल है।</p>
<p><strong>2. 90-दिवसीय कार्य प्रमाण पत्र पर कौन हस्ताक्षर कर सकता है?</strong><br>यह राज्य के नियमों के आधार पर एक पंजीकृत ठेकेदार, बिल्डर, नियोक्ता, या कभी-कभी स्थानीय सरकारी अधिकारी (जैसे पंचायत सचिव) द्वारा हस्ताक्षरित किया जा सकता है।</p>
<p><strong>3. लेबर कार्ड कितने समय के लिए वैध होता है?</strong><br>यह आमतौर पर 1 से 3 साल के लिए वैध होता है और छोटे नवीनीकरण योगदान का भुगतान करके समय-समय पर नवीनीकृत किया जाना चाहिए।</p>
<p><strong>4. क्या महिला निर्माण श्रमिक आवेदन कर सकती हैं?</strong><br>बिल्कुल, महिलाएं समान रूप से पात्र हैं और अक्सर मातृत्व सहायता जैसे अतिरिक्त लाभ प्राप्त करती हैं।</p>
<p><strong>5. क्या श्रमिक कार्ड और ई-श्रम कार्ड एक ही है?</strong><br>नहीं। ई-श्रम सभी असंगठित श्रमिकों के लिए एक राष्ट्रीय डेटाबेस है, जबकि बीओसीडब्ल्यू लेबर कार्ड राज्य बोर्डों द्वारा प्रबंधित निर्माण श्रमिकों के लिए विशिष्ट है।</p>
<p><strong>6. अगर मैं दूसरे राज्य में चला जाऊं तो क्या होगा?</strong><br>वर्तमान में, बीओसीडब्ल्यू बोर्ड राज्य-विशिष्ट हैं। यदि आप स्थायी रूप से प्रवास करते हैं, तो आपको नए राज्य में पंजीकरण करने की आवश्यकता हो सकती है, हालांकि कुछ राष्ट्रीय पोर्टेबिलिटी योजनाएं शुरू की जा रही हैं।</p>

<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>संबंधित सेवाएं (Related Services)</h3>
<ul>
  <li><a href="lakhpati-didi-yojana.html">लखपति दीदी योजना</a></li>
  <li><a href="kl-social-security-pension.html">सामाजिक सुरक्षा पेंशन</a></li>
  <li><a href="lpg-cylinder-booking.html">एलपीजी सिलेंडर बुकिंग</a></li>
</ul>"""
  },
  "lakhpati-didi-yojana.html": {
    "titleEn": "Lakhpati Didi Yojana 2024: Online Apply, Eligibility & Benefits",
    "titleHi": "लखपति दीदी योजना 2024: ऑनलाइन आवेदन, पात्रता और लाभ",
    "descEn": "Apply for Lakhpati Didi Yojana and empower rural women. Check SHG eligibility, loan benefits, required documents, and registration process.",
    "descHi": "लखपति दीदी योजना के लिए आवेदन करें और ग्रामीण महिलाओं को सशक्त बनाएं। एसएचजी पात्रता, ऋण लाभ और पंजीकरण प्रक्रिया की जांच करें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>The Lakhpati Didi Yojana is an ambitious initiative by the Government of India aimed at financially empowering women in rural areas. The goal is to encourage women associated with Self-Help Groups (SHGs) to earn a sustainable income of at least Rs. 1,00,000 per annum per household. The scheme provides skill training, financial literacy, and access to micro-credit to help women start or scale up micro-enterprises like poultry farming, tailoring, drone operations (Namo Drone Didi), and handicrafts.</p>

<h3>Eligibility</h3>
<ul>
  <li>Must be a woman residing in a rural area.</li>
  <li>Must be an active member of a Self-Help Group (SHG) under the National Rural Livelihoods Mission (NRLM).</li>
  <li>The applicant should be willing to undergo skill development training.</li>
  <li>Age should typically be between 18 and 50 years.</li>
  <li>Must have an active bank account in her name.</li>
</ul>

<h3>Documents Required</h3>
<ul>
  <li>Aadhaar Card</li>
  <li>SHG Membership Identity/Passbook</li>
  <li>Bank Account Passbook</li>
  <li>Income Certificate (if applicable)</li>
  <li>Passport Size Photographs</li>
  <li>Mobile Number (linked to Aadhaar)</li>
</ul>

<h3>Step-by-Step Online Process</h3>
<ol>
  <li>Currently, direct individual online application for Lakhpati Didi is managed through SHG networks and local NRLM offices.</li>
  <li>Contact your local Gram Panchayat or the Anganwadi/Asha worker to join an active SHG if you are not already a member.</li>
  <li>Attend the SHG meetings regularly where NRLM coordinators identify potential candidates for the Lakhpati Didi initiative.</li>
  <li>Submit your details (Aadhaar, Bank details) to the block-level NRLM coordinator.</li>
  <li>Once selected, you will be enrolled in specific skill development programs (e.g., LED bulb making, plumbing, drone piloting).</li>
  <li>After training, apply for micro-finance or business loans through your SHG bank linkage program to start your enterprise.</li>
</ol>

<h3>Fees</h3>
<p>There are no registration fees or training charges for joining the Lakhpati Didi scheme. The skill training provided by the government is completely free of cost.</p>

<h3>Status Check</h3>
<p>Women can track their training and loan approval status directly through their SHG leader (President/Secretary) or by visiting the Block Development Office (BDO). Some states also provide tracking through the NRLM digital portals using the SHG ID.</p>

<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>1. What is the main benefit of the Lakhpati Didi Yojana?</strong><br>It provides free skill training, business guidance, and easy access to loans to help rural women earn at least 1 lakh rupees annually.</p>
<p><strong>2. Is this scheme available in urban areas?</strong><br>No, the Lakhpati Didi initiative is primarily focused on rural women through the Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM).</p>
<p><strong>3. Do I have to repay the loan?</strong><br>Yes, any business loan taken through the SHG bank linkage must be repaid as per the low-interest terms agreed upon, but the training is free.</p>
<p><strong>4. Can an individual apply without an SHG?</strong><br>No, being a member of a registered Self-Help Group is mandatory to avail the benefits of this scheme.</p>
<p><strong>5. What kind of training is provided?</strong><br>Training covers various sectors including agriculture, animal husbandry, tailoring, IT skills, and even drone operation for agricultural use.</p>
<p><strong>6. How can I form a new SHG?</strong><br>A group of 10-20 women from the same village can form an SHG. You need to contact the Gram Panchayat or Block Development Officer to get it registered under NRLM.</p>

<h3>Useful Tools</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>Related Services</h3>
<ul>
  <li><a href="labour-card-construction-workers.html">Labour Card Registration</a></li>
  <li><a href="kl-social-security-pension.html">Social Security Pension</a></li>
  <li><a href="legal-heir-certificate.html">Legal Heir Certificate</a></li>
</ul>""",
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>लखपति दीदी योजना भारत सरकार की एक महत्वाकांक्षी पहल है जिसका उद्देश्य ग्रामीण क्षेत्रों में महिलाओं को आर्थिक रूप से सशक्त बनाना है। लक्ष्य स्वयं सहायता समूहों (एसएचजी) से जुड़ी महिलाओं को प्रति परिवार कम से कम 1,00,000 रुपये प्रति वर्ष की स्थायी आय अर्जित करने के लिए प्रोत्साहित करना है। यह योजना महिलाओं को मुर्गी पालन, सिलाई, ड्रोन संचालन (नमो ड्रोन दीदी) और हस्तशिल्प जैसे सूक्ष्म उद्यम शुरू करने या बढ़ाने में मदद करने के लिए कौशल प्रशिक्षण, वित्तीय साक्षरता और माइक्रो-क्रेडिट तक पहुंच प्रदान करती है।</p>

<h3>पात्रता (Eligibility)</h3>
<ul>
  <li>ग्रामीण क्षेत्र में रहने वाली महिला होनी चाहिए।</li>
  <li>राष्ट्रीय ग्रामीण आजीविका मिशन (NRLM) के तहत स्वयं सहायता समूह (SHG) की सक्रिय सदस्य होनी चाहिए।</li>
  <li>आवेदक कौशल विकास प्रशिक्षण के लिए इच्छुक होनी चाहिए।</li>
  <li>आयु आमतौर पर 18 से 50 वर्ष के बीच होनी चाहिए।</li>
  <li>उसके नाम पर एक सक्रिय बैंक खाता होना चाहिए।</li>
</ul>

<h3>आवश्यक दस्तावेज (Documents Required)</h3>
<ul>
  <li>आधार कार्ड</li>
  <li>एसएचजी सदस्यता पहचान / पासबुक</li>
  <li>बैंक खाता पासबुक</li>
  <li>आय प्रमाण पत्र (यदि लागू हो)</li>
  <li>पासपोर्ट साइज फोटो</li>
  <li>मोबाइल नंबर (आधार से जुड़ा हुआ)</li>
</ul>

<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h3>
<ol>
  <li>वर्तमान में, लखपति दीदी के लिए सीधा व्यक्तिगत ऑनलाइन आवेदन एसएचजी नेटवर्क और स्थानीय एनआरएलएम कार्यालयों के माध्यम से प्रबंधित किया जाता है।</li>
  <li>यदि आप पहले से सदस्य नहीं हैं तो एक सक्रिय एसएचजी में शामिल होने के लिए अपनी स्थानीय ग्राम पंचायत या आंगनवाड़ी/आशा कार्यकर्ता से संपर्क करें।</li>
  <li>नियमित रूप से एसएचजी की बैठकों में भाग लें जहां एनआरएलएम समन्वयक लखपति दीदी पहल के लिए संभावित उम्मीदवारों की पहचान करते हैं।</li>
  <li>ब्लॉक-स्तरीय एनआरएलएम समन्वयक को अपना विवरण (आधार, बैंक विवरण) जमा करें।</li>
  <li>चयनित होने के बाद, आपको विशिष्ट कौशल विकास कार्यक्रमों (जैसे, एलईडी बल्ब बनाना, नलसाजी, ड्रोन पायलटिंग) में नामांकित किया जाएगा।</li>
  <li>प्रशिक्षण के बाद, अपना उद्यम शुरू करने के लिए अपने एसएचजी बैंक लिंकेज कार्यक्रम के माध्यम से माइक्रो-फाइनेंस या व्यवसाय ऋण के लिए आवेदन करें।</li>
</ol>

<h3>शुल्क (Fees)</h3>
<p>लखपति दीदी योजना में शामिल होने के लिए कोई पंजीकरण शुल्क या प्रशिक्षण शुल्क नहीं है। सरकार द्वारा प्रदान किया जाने वाला कौशल प्रशिक्षण पूरी तरह से निःशुल्क है।</p>

<h3>स्थिति जांच (Status Check)</h3>
<p>महिलाएं सीधे अपने एसएचजी लीडर (अध्यक्ष/सचिव) के माध्यम से या ब्लॉक डेवलपमेंट ऑफिस (बीडीओ) जाकर अपने प्रशिक्षण और ऋण अनुमोदन की स्थिति को ट्रैक कर सकती हैं। कुछ राज्य एसएचजी आईडी का उपयोग करके एनआरएलएम डिजिटल पोर्टल के माध्यम से ट्रैकिंग भी प्रदान करते हैं।</p>

<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>1. लखपति दीदी योजना का मुख्य लाभ क्या है?</strong><br>यह ग्रामीण महिलाओं को सालाना कम से कम 1 लाख रुपये कमाने में मदद करने के लिए मुफ्त कौशल प्रशिक्षण, व्यवसाय मार्गदर्शन और ऋण तक आसान पहुंच प्रदान करता है।</p>
<p><strong>2. क्या यह योजना शहरी क्षेत्रों में उपलब्ध है?</strong><br>नहीं, लखपति दीदी पहल मुख्य रूप से दीनदयाल अंत्योदय योजना-राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM) के माध्यम से ग्रामीण महिलाओं पर केंद्रित है।</p>
<p><strong>3. क्या मुझे ऋण चुकाना होगा?</strong><br>हां, एसएचजी बैंक लिंकेज के माध्यम से लिए गए किसी भी व्यवसाय ऋण को सहमत कम ब्याज शर्तों के अनुसार चुकाया जाना चाहिए, लेकिन प्रशिक्षण मुफ्त है।</p>
<p><strong>4. क्या कोई व्यक्ति एसएचजी के बिना आवेदन कर सकता है?</strong><br>नहीं, इस योजना का लाभ उठाने के लिए एक पंजीकृत स्वयं सहायता समूह का सदस्य होना अनिवार्य है।</p>
<p><strong>5. किस तरह का प्रशिक्षण प्रदान किया जाता है?</strong><br>प्रशिक्षण में कृषि, पशुपालन, सिलाई, आईटी कौशल और यहां तक कि कृषि उपयोग के लिए ड्रोन संचालन सहित विभिन्न क्षेत्रों को शामिल किया गया है।</p>
<p><strong>6. मैं एक नया एसएचजी कैसे बना सकती हूँ?</strong><br>एक ही गांव की 10-20 महिलाओं का समूह एक एसएचजी बना सकता है। एनआरएलएम के तहत इसे पंजीकृत कराने के लिए आपको ग्राम पंचायत या खंड विकास अधिकारी से संपर्क करना होगा।</p>

<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>संबंधित सेवाएं (Related Services)</h3>
<ul>
  <li><a href="labour-card-construction-workers.html">लेबर कार्ड पंजीकरण</a></li>
  <li><a href="kl-social-security-pension.html">सामाजिक सुरक्षा पेंशन</a></li>
  <li><a href="legal-heir-certificate.html">कानूनी वारिस प्रमाण पत्र</a></li>
</ul>"""
  },
  "legal-heir-certificate.html": {
    "titleEn": "Legal Heir Certificate / Succession Certificate Online Apply",
    "titleHi": "कानूनी वारिस / उत्तराधिकार प्रमाण पत्र ऑनलाइन आवेदन",
    "descEn": "Step-by-step guide to applying for a Legal Heir or Succession Certificate. Know the required documents, fees, and processing time.",
    "descHi": "कानूनी वारिस या उत्तराधिकार प्रमाण पत्र के लिए आवेदन करने की चरण-दर-चरण मार्गदर्शिका। आवश्यक दस्तावेज, शुल्क और प्रक्रिया जानें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>A Legal Heir Certificate (also known as a Surviving Member Certificate or Varisu Certificate in some states) is an essential document issued by the local revenue authorities to establish the relationship between the deceased and their legal heirs. This document is crucial for claiming pension, insurance, provident fund, gratuity, and for the transfer of property or bank deposits. Note that for disputed properties or complex asset distributions, a Succession Certificate issued by a civil court might be required instead.</p>

<h3>Eligibility</h3>
<ul>
  <li>Only the legal heirs of the deceased person (spouse, children, parents, or siblings in specific cases) can apply.</li>
  <li>The deceased must have been a resident of the district/taluk where the application is being filed.</li>
  <li>The death of the person must have been formally registered, and a valid Death Certificate must be available.</li>
</ul>

<h3>Documents Required</h3>
<ul>
  <li>Original Death Certificate of the deceased</li>
  <li>Aadhaar Card or ID Proof of all legal heirs</li>
  <li>Address Proof of the deceased (Voter ID, Ration Card, etc.)</li>
  <li>Affidavit self-declaring the list of surviving members</li>
  <li>Proof of relationship with the deceased</li>
  <li>Passport Size Photographs of the applicant</li>
</ul>

<h3>Step-by-Step Online Process</h3>
<ol>
  <li>Visit your state's e-District portal or government citizen portal (e.g., e-Sevai in TN, Nadakacheri in Karnataka).</li>
  <li>Create an account or login using your credentials.</li>
  <li>Navigate to the 'Revenue Department' services and select 'Legal Heir Certificate' or 'Surviving Member Certificate'.</li>
  <li>Fill in the online application form with the details of the deceased and all the surviving family members.</li>
  <li>Upload scanned copies of the Death Certificate, ID proofs, and the self-declaration affidavit.</li>
  <li>Pay the required application fee online.</li>
  <li>Submit the application and note the acknowledgment/application number. The Village Administrative Officer (VAO) or Revenue Inspector will conduct an inquiry before approval.</li>
</ol>

<h3>Fees</h3>
<p>The application fee is generally minimal, usually ranging between Rs. 15 to Rs. 60 depending on the state's e-District portal charges. Court fees for a Succession Certificate, if required, are calculated based on the value of the estate.</p>

<h3>Status Check</h3>
<p>You can track the status of your Legal Heir Certificate on the same e-District portal where you applied. Look for the 'Track Application Status' option and enter your acknowledgment number. Once approved, you can digitally download the certificate.</p>

<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>1. What is the difference between a Legal Heir Certificate and a Succession Certificate?</strong><br>A Legal Heir Certificate is issued by the Revenue Department (Tehsildar) for claiming insurance, PF, and pensions. A Succession Certificate is issued by a Civil Court and is mandatory for transferring debts, securities, and complex property assets.</p>
<p><strong>2. How long does it take to get the certificate?</strong><br>It typically takes 15 to 30 days after applying, subject to field verification by the revenue inspector.</p>
<p><strong>3. Can a married daughter be considered a legal heir?</strong><br>Yes, married daughters have equal rights and are considered legal heirs of their parents.</p>
<p><strong>4. Is it mandatory to include all family members?</strong><br>Yes, it is legally required to list all surviving legal heirs (spouse, all children, and parents) in the affidavit. Hiding an heir is a legal offense.</p>
<p><strong>5. Do I need a lawyer to get a Legal Heir Certificate?</strong><br>No, a lawyer is not required for a Legal Heir Certificate obtained from the Tehsildar. However, you may need legal assistance for a Succession Certificate from the court.</p>
<p><strong>6. Is an online Legal Heir Certificate valid for bank claims?</strong><br>Yes, a digitally signed certificate downloaded from the official government portal is valid for all official purposes.</p>

<h3>Useful Tools</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>Related Services</h3>
<ul>
  <li><a href="lpg-cylinder-booking.html">LPG Cylinder Booking</a></li>
  <li><a href="kl-social-security-pension.html">Social Security Pension</a></li>
  <li><a href="labour-card-construction-workers.html">Labour Card Registration</a></li>
</ul>""",
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>कानूनी वारिस प्रमाण पत्र (जिसे कुछ राज्यों में जीवित सदस्य प्रमाण पत्र या वारिसु प्रमाण पत्र के रूप में भी जाना जाता है) मृतक और उनके कानूनी उत्तराधिकारियों के बीच संबंध स्थापित करने के लिए स्थानीय राजस्व अधिकारियों द्वारा जारी किया गया एक आवश्यक दस्तावेज है। यह दस्तावेज पेंशन, बीमा, भविष्य निधि, ग्रेच्युटी का दावा करने और संपत्ति या बैंक जमा के हस्तांतरण के लिए महत्वपूर्ण है। ध्यान दें कि विवादित संपत्तियों या जटिल संपत्ति वितरण के लिए, इसके बजाय सिविल कोर्ट द्वारा जारी उत्तराधिकार प्रमाण पत्र की आवश्यकता हो सकती है।</p>

<h3>पात्रता (Eligibility)</h3>
<ul>
  <li>केवल मृत व्यक्ति के कानूनी उत्तराधिकारी (विशिष्ट मामलों में जीवनसाथी, बच्चे, माता-पिता या भाई-बहन) ही आवेदन कर सकते हैं।</li>
  <li>मृतक उस जिले/तालुका का निवासी होना चाहिए जहां आवेदन दायर किया जा रहा है।</li>
  <li>व्यक्ति की मृत्यु औपचारिक रूप से पंजीकृत होनी चाहिए, और एक वैध मृत्यु प्रमाण पत्र उपलब्ध होना चाहिए।</li>
</ul>

<h3>आवश्यक दस्तावेज (Documents Required)</h3>
<ul>
  <li>मृतक का मूल मृत्यु प्रमाण पत्र</li>
  <li>सभी कानूनी उत्तराधिकारियों का आधार कार्ड या आईडी प्रमाण</li>
  <li>मृतक का पता प्रमाण (वोटर आईडी, राशन कार्ड, आदि)</li>
  <li>जीवित सदस्यों की सूची की स्व-घोषणा करने वाला हलफनामा (Affidavit)</li>
  <li>मृतक के साथ संबंध का प्रमाण</li>
  <li>आवेदक के पासपोर्ट साइज फोटो</li>
</ul>

<h3>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h3>
<ol>
  <li>अपने राज्य के ई-डिस्ट्रिक्ट पोर्टल या सरकारी नागरिक पोर्टल (जैसे, टीएन में ई-सेवई, कर्नाटक में नादकचेरी) पर जाएं।</li>
  <li>अपनी साख का उपयोग करके एक खाता बनाएं या लॉग इन करें।</li>
  <li>'राजस्व विभाग' सेवाओं पर नेविगेट करें और 'कानूनी वारिस प्रमाण पत्र' या 'जीवित सदस्य प्रमाण पत्र' चुनें।</li>
  <li>मृतक और परिवार के सभी जीवित सदस्यों के विवरण के साथ ऑनलाइन आवेदन पत्र भरें।</li>
  <li>मृत्यु प्रमाण पत्र, आईडी प्रमाण और स्व-घोषणा हलफनामे की स्कैन की गई प्रतियां अपलोड करें।</li>
  <li>आवश्यक आवेदन शुल्क का ऑनलाइन भुगतान करें।</li>
  <li>आवेदन जमा करें और पावती/आवेदन संख्या नोट करें। ग्राम प्रशासनिक अधिकारी (VAO) या राजस्व निरीक्षक अनुमोदन से पहले जांच करेगा।</li>
</ol>

<h3>शुल्क (Fees)</h3>
<p>आवेदन शुल्क आम तौर पर न्यूनतम होता है, जो आमतौर पर राज्य के ई-डिस्ट्रिक्ट पोर्टल शुल्क के आधार पर 15 रुपये से 60 रुपये के बीच होता है। उत्तराधिकार प्रमाण पत्र के लिए न्यायालय शुल्क, यदि आवश्यक हो, संपत्ति के मूल्य के आधार पर गणना की जाती है।</p>

<h3>स्थिति जांच (Status Check)</h3>
<p>आप उसी ई-डिस्ट्रिक्ट पोर्टल पर अपने कानूनी वारिस प्रमाण पत्र की स्थिति को ट्रैक कर सकते हैं जहां आपने आवेदन किया था। 'एप्लिकेशन स्टेटस ट्रैक करें' विकल्प देखें और अपना पावती नंबर दर्ज करें। स्वीकृत होने के बाद, आप प्रमाण पत्र को डिजिटल रूप से डाउनलोड कर सकते हैं।</p>

<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>1. कानूनी वारिस प्रमाण पत्र और उत्तराधिकार प्रमाण पत्र के बीच क्या अंतर है?</strong><br>बीमा, पीएफ और पेंशन का दावा करने के लिए राजस्व विभाग (तहसीलदार) द्वारा एक कानूनी वारिस प्रमाण पत्र जारी किया जाता है। एक उत्तराधिकार प्रमाण पत्र एक सिविल कोर्ट द्वारा जारी किया जाता है और ऋण, प्रतिभूतियों और जटिल संपत्ति संपत्तियों को स्थानांतरित करने के लिए अनिवार्य है।</p>
<p><strong>2. प्रमाण पत्र प्राप्त करने में कितना समय लगता है?</strong><br>राजस्व निरीक्षक द्वारा क्षेत्र सत्यापन के अधीन, आवेदन करने के बाद आमतौर पर 15 से 30 दिन लगते हैं।</p>
<p><strong>3. क्या एक विवाहित बेटी को कानूनी उत्तराधिकारी माना जा सकता है?</strong><br>हां, विवाहित बेटियों को समान अधिकार हैं और उन्हें उनके माता-पिता का कानूनी उत्तराधिकारी माना जाता है।</p>
<p><strong>4. क्या परिवार के सभी सदस्यों को शामिल करना अनिवार्य है?</strong><br>हां, हलफनामे में सभी जीवित कानूनी उत्तराधिकारियों (जीवनसाथी, सभी बच्चों और माता-पिता) को सूचीबद्ध करना कानूनी रूप से आवश्यक है। किसी वारिस को छिपाना कानूनी अपराध है।</p>
<p><strong>5. क्या मुझे कानूनी वारिस प्रमाण पत्र प्राप्त करने के लिए किसी वकील की आवश्यकता है?</strong><br>नहीं, तहसीलदार से प्राप्त कानूनी वारिस प्रमाण पत्र के लिए वकील की आवश्यकता नहीं है। हालांकि, आपको अदालत से उत्तराधिकार प्रमाण पत्र के लिए कानूनी सहायता की आवश्यकता हो सकती है।</p>
<p><strong>6. क्या बैंक दावों के लिए ऑनलाइन कानूनी वारिस प्रमाण पत्र मान्य है?</strong><br>हां, आधिकारिक सरकारी पोर्टल से डाउनलोड किया गया डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र सभी आधिकारिक उद्देश्यों के लिए मान्य है।</p>

<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>संबंधित सेवाएं (Related Services)</h3>
<ul>
  <li><a href="lpg-cylinder-booking.html">एलपीजी सिलेंडर बुकिंग</a></li>
  <li><a href="kl-social-security-pension.html">सामाजिक सुरक्षा पेंशन</a></li>
  <li><a href="labour-card-construction-workers.html">लेबर कार्ड पंजीकरण</a></li>
</ul>"""
  },
  "lpg-cylinder-booking.html": {
    "titleEn": "LPG Cylinder Online Booking: HP, Indane, Bharat Gas 2024",
    "titleHi": "एलपीजी सिलेंडर ऑनलाइन बुकिंग: एचपी, इंडेन, भारत गैस 2024",
    "descEn": "Book your LPG gas cylinder online easily for HP, Indane, or Bharat Gas. Check WhatsApp booking numbers, IVRS, and subsidy status.",
    "descHi": "एचपी, इंडेन या भारत गैस के लिए अपना एलपीजी गैस सिलेंडर आसानी से ऑनलाइन बुक करें। व्हाट्सएप बुकिंग नंबर और सब्सिडी की स्थिति जांचें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>Booking an LPG gas cylinder has become incredibly convenient with multiple digital channels available for Indian consumers. Whether you use HP Gas, Indane Gas, or Bharat Gas, you can now book your refill from the comfort of your home using WhatsApp, mobile apps, IVRS, or official websites. The government also facilitates tracking of LPG subsidy through the Direct Benefit Transfer (DBT) scheme via the PAHAL initiative.</p>

<h3>Eligibility</h3>
<ul>
  <li>Must be an active, registered LPG customer with an OMC (HP, Indane, or Bharat Gas).</li>
  <li>The mobile number used for booking should ideally be registered with the gas agency.</li>
  <li>For Ujjwala Scheme or DBT subsidy, the bank account must be linked with Aadhaar.</li>
</ul>

<h3>Documents Required (For New Connection/KYC)</h3>
<ul>
  <li>Aadhaar Card (Mandatory for Subsidy)</li>
  <li>Proof of Address (Electricity bill, Ration Card, etc.)</li>
  <li>Bank Passbook details (IFSC and Account number)</li>
  <li>Passport Size Photograph</li>
</ul>

<h3>Step-by-Step Online Booking Process</h3>
<ol>
  <li><strong>Via WhatsApp:</strong> Save your provider's official WhatsApp number (e.g., Indane: 7588888824, HP: 9222201122, Bharat: 1800224344). Send 'REFILL' or 'BOOK' from your registered mobile number.</li>
  <li><strong>Via Mobile App:</strong> Download the official app (IndianOil ONE, HP Pay, or Hello BPCL). Log in using your registered mobile number and click on 'Book Cylinder'.</li>
  <li><strong>Via Website:</strong> Visit mylpg.in or the specific OMC website, log in to your consumer account, and select the 'Order Refill' option.</li>
  <li><strong>Via IVRS/Missed Call:</strong> Call the specific toll-free IVRS number for your state or give a missed call to the official booking number provided by your agency.</li>
  <li>Pay online via UPI, Credit/Debit card, Net Banking, or choose Cash on Delivery (COD).</li>
</ol>

<h3>Fees</h3>
<p>Booking the cylinder is free of cost. You only pay the current market price of the LPG refill. Online payments may sometimes offer cashback or discounts through third-party apps like GPay, PhonePe, or Paytm. Any eligible subsidy will be credited to your bank account post-delivery.</p>

<h3>Status Check</h3>
<p>You can check the booking and delivery status via the respective mobile app, website, or by sending 'STATUS' to the official WhatsApp number. To check if your subsidy has been credited, visit <strong>mylpg.in</strong>, select your gas company, and use the 'Give your feedback online' or 'Subsidy Status' tool by entering your LPG ID or registered mobile number.</p>

<h3>Frequently Asked Questions (FAQs)</h3>
<p><strong>1. How can I find my 17-digit LPG ID?</strong><br>Your 17-digit LPG ID is usually printed on your gas passbook or cash memo. You can also find it online at mylpg.in by entering your state, district, distributor, and consumer number.</p>
<p><strong>2. Why am I not receiving my LPG subsidy?</strong><br>This could happen if your Aadhaar is not linked to your bank account, your KYC is incomplete, or your annual income exceeds the 10 Lakh threshold limit.</p>
<p><strong>3. Can I book a cylinder from an unregistered mobile number?</strong><br>Yes, but you will need to manually enter your LPG ID, consumer number, or distributor details on the app, website, or via WhatsApp.</p>
<p><strong>4. How many cylinders can I book in a year?</strong><br>A standard domestic consumer is entitled to 12 subsidized cylinders (14.2 kg) in a financial year.</p>
<p><strong>5. What is the missed call number for Indane Gas?</strong><br>Indane customers can give a missed call to 8454955555 from their registered mobile number to book a refill.</p>
<p><strong>6. Is e-KYC mandatory for LPG booking?</strong><br>Biometric e-KYC is being mandated by the government for all customers to weed out ghost connections and ensure subsidies reach the right people. You should complete it at your distributor's office.</p>

<h3>Useful Tools</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>Related Services</h3>
<ul>
  <li><a href="lakhpati-didi-yojana.html">Lakhpati Didi Yojana</a></li>
  <li><a href="labour-card-construction-workers.html">Labour Card Apply</a></li>
  <li><a href="legal-heir-certificate.html">Legal Heir Certificate</a></li>
</ul>""",
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>भारतीय उपभोक्ताओं के लिए उपलब्ध कई डिजिटल चैनलों के साथ एलपीजी गैस सिलेंडर की बुकिंग अविश्वसनीय रूप से सुविधाजनक हो गई है। चाहे आप एचपी गैस, इंडेन गैस, या भारत गैस का उपयोग करते हों, अब आप व्हाट्सएप, मोबाइल ऐप, आईवीआरएस (IVRS) या आधिकारिक वेबसाइटों का उपयोग करके अपने घर के आराम से अपनी रिफिल बुक कर सकते हैं। सरकार PAHAL पहल के माध्यम से प्रत्यक्ष लाभ अंतरण (DBT) योजना के माध्यम से एलपीजी सब्सिडी को ट्रैक करने की सुविधा भी प्रदान करती है।</p>

<h3>पात्रता (Eligibility)</h3>
<ul>
  <li>एक ओएमसी (एचपी, इंडेन, या भारत गैस) के साथ एक सक्रिय, पंजीकृत एलपीजी ग्राहक होना चाहिए।</li>
  <li>बुकिंग के लिए इस्तेमाल किया जाने वाला मोबाइल नंबर आदर्श रूप से गैस एजेंसी के पास पंजीकृत होना चाहिए।</li>
  <li>उज्ज्वला योजना या डीबीटी सब्सिडी के लिए बैंक खाता आधार से जुड़ा होना चाहिए।</li>
</ul>

<h3>आवश्यक दस्तावेज (नया कनेक्शन/केवाईसी के लिए)</h3>
<ul>
  <li>आधार कार्ड (सब्सिडी के लिए अनिवार्य)</li>
  <li>पते का प्रमाण (बिजली बिल, राशन कार्ड, आदि)</li>
  <li>बैंक पासबुक विवरण (IFSC और खाता संख्या)</li>
  <li>पासपोर्ट साइज फोटो</li>
</ul>

<h3>चरण-दर-चरण ऑनलाइन बुकिंग प्रक्रिया (Step-by-Step Online Booking Process)</h3>
<ol>
  <li><strong>व्हाट्सएप के माध्यम से:</strong> अपने प्रदाता का आधिकारिक व्हाट्सएप नंबर सहेजें (जैसे, इंडेन: 7588888824, एचपी: 9222201122, भारत: 1800224344)। अपने पंजीकृत मोबाइल नंबर से 'REFILL' या 'BOOK' भेजें।</li>
  <li><strong>मोबाइल ऐप के माध्यम से:</strong> आधिकारिक ऐप (IndianOil ONE, HP Pay, या Hello BPCL) डाउनलोड करें। अपने पंजीकृत मोबाइल नंबर का उपयोग करके लॉग इन करें और 'बुक सिलेंडर' पर क्लिक करें।</li>
  <li><strong>वेबसाइट के माध्यम से:</strong> mylpg.in या विशिष्ट OMC वेबसाइट पर जाएं, अपने उपभोक्ता खाते में लॉग इन करें, और 'ऑर्डर रिफिल' विकल्प चुनें।</li>
  <li><strong>आईवीआरएस/मिस्ड कॉल के माध्यम से:</strong> अपने राज्य के लिए विशिष्ट टोल-फ्री आईवीआरएस नंबर पर कॉल करें या अपनी एजेंसी द्वारा प्रदान किए गए आधिकारिक बुकिंग नंबर पर मिस्ड कॉल दें।</li>
  <li>यूपीआई, क्रेडिट/डेबिट कार्ड, नेट बैंकिंग के माध्यम से ऑनलाइन भुगतान करें या कैश ऑन डिलीवरी (COD) चुनें।</li>
</ol>

<h3>शुल्क (Fees)</h3>
<p>सिलेंडर की बुकिंग निःशुल्क है। आप केवल एलपीजी रिफिल के वर्तमान बाजार मूल्य का भुगतान करते हैं। ऑनलाइन भुगतान कभी-कभी GPay, PhonePe, या Paytm जैसे तृतीय-पक्ष ऐप के माध्यम से कैशबैक या छूट प्रदान कर सकते हैं। कोई भी पात्र सब्सिडी डिलीवरी के बाद आपके बैंक खाते में जमा कर दी जाएगी।</p>

<h3>स्थिति जांच (Status Check)</h3>
<p>आप संबंधित मोबाइल ऐप, वेबसाइट या आधिकारिक व्हाट्सएप नंबर पर 'STATUS' भेजकर बुकिंग और डिलीवरी की स्थिति की जांच कर सकते हैं। यह जांचने के लिए कि आपकी सब्सिडी जमा की गई है या नहीं, <strong>mylpg.in</strong> पर जाएं, अपनी गैस कंपनी चुनें, और अपनी एलपीजी आईडी या पंजीकृत मोबाइल नंबर दर्ज करके 'अपनी प्रतिक्रिया ऑनलाइन दें' या 'सब्सिडी स्थिति' टूल का उपयोग करें।</p>

<h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
<p><strong>1. मैं अपनी 17 अंकों की एलपीजी आईडी कैसे ढूंढ सकता हूं?</strong><br>आपकी 17 अंकों की एलपीजी आईडी आमतौर पर आपकी गैस पासबुक या कैश मेमो पर छपी होती है। आप अपना राज्य, जिला, वितरक और उपभोक्ता संख्या दर्ज करके इसे mylpg.in पर भी ऑनलाइन पा सकते हैं。</p>
<p><strong>2. मुझे मेरी एलपीजी सब्सिडी क्यों नहीं मिल रही है?</strong><br>ऐसा तब हो सकता है जब आपका आधार आपके बैंक खाते से लिंक नहीं है, आपका केवाईसी अधूरा है, या आपकी वार्षिक आय 10 लाख की सीमा से अधिक है।</p>
<p><strong>3. क्या मैं अपंजीकृत मोबाइल नंबर से सिलेंडर बुक कर सकता हूं?</strong><br>हां, लेकिन आपको ऐप, वेबसाइट या व्हाट्सएप के माध्यम से मैन्युअल रूप से अपनी एलपीजी आईडी, उपभोक्ता संख्या या वितरक विवरण दर्ज करना होगा।</p>
<p><strong>4. मैं एक साल में कितने सिलेंडर बुक कर सकता हूं?</strong><br>एक मानक घरेलू उपभोक्ता एक वित्तीय वर्ष में 12 सब्सिडी वाले सिलेंडर (14.2 किलोग्राम) का हकदार है।</p>
<p><strong>5. इंडेन गैस के लिए मिस्ड कॉल नंबर क्या है?</strong><br>इंडेन के ग्राहक रिफिल बुक करने के लिए अपने पंजीकृत मोबाइल नंबर से 8454955555 पर मिस्ड कॉल दे सकते हैं।</p>
<p><strong>6. क्या एलपीजी बुकिंग के लिए ई-केवाईसी अनिवार्य है?</strong><br>घोस्ट कनेक्शन को खत्म करने और सब्सिडी सही लोगों तक पहुंचने को सुनिश्चित करने के लिए सरकार द्वारा सभी ग्राहकों के लिए बायोमेट्रिक ई-केवाईसी अनिवार्य किया जा रहा है। आपको इसे अपने वितरक के कार्यालय में पूरा करना चाहिए।</p>

<h3>उपयोगी टूल्स (Useful Tools)</h3>
<ul>
  <li><a href="../tools/eligibility-checker.html">Govt Scheme Eligibility Checker</a></li>
  <li><a href="../tools/document-checklist.html">Document Checklist Tool</a></li>
  <li><a href="../tools/status-troubleshooter.html">Application Status Troubleshooter</a></li>
</ul>

<h3>संबंधित सेवाएं (Related Services)</h3>
<ul>
  <li><a href="lakhpati-didi-yojana.html">लखपति दीदी योजना</a></li>
  <li><a href="labour-card-construction-workers.html">लेबर कार्ड आवेदन</a></li>
  <li><a href="legal-heir-certificate.html">कानूनी वारिस प्रमाण पत्र</a></li>
</ul>"""
  }
}

os.makedirs(r'C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal', exist_ok=True)
with open(r'C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\batch24.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
