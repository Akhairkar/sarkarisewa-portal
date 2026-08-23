import json
import os

data = {
  "cowin-vaccination-certificate.html": {
    "titleEn": "Download CoWIN Vaccination Certificate Online",
    "titleHi": "CoWIN टीकाकरण प्रमाण पत्र ऑनलाइन डाउनलोड करें",
    "descEn": "Complete guide to download your CoWIN vaccination certificate online. Check eligibility, required documents, fees, and step-by-step process via mobile or Aadhaar.",
    "descHi": "अपना कोविन टीकाकरण प्रमाण पत्र ऑनलाइन डाउनलोड करने की पूरी गाइड। पात्रता, आवश्यक दस्तावेज, शुल्क और मोबाइल या आधार के माध्यम से प्रक्रिया की जांच करें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>The CoWIN Vaccination Certificate is an essential and official document issued by the Ministry of Health and Family Welfare, Government of India. This certificate acts as a definitive proof that an individual has been inoculated against the COVID-19 virus. In today's post-pandemic world, having this document handy is crucial. It is often mandated for domestic and international travel, accessing certain public venues, workplace compliance, and various other official purposes. The digital infrastructure provided by the CoWIN portal ensures that every vaccinated citizen can easily access, verify, and download their certificate securely from anywhere at any time.</p>
<h2>Eligibility</h2>
<ul>
<li>Any Indian citizen or resident who has registered on the official CoWIN portal.</li>
<li>The individual must have received at least the first dose of an approved COVID-19 vaccine (like Covishield, Covaxin, Sputnik V, etc.).</li>
<li>For the final certificate, the individual must be fully vaccinated (both doses or precaution doses as applicable).</li>
</ul>
<h2>Documents Required</h2>
<ul>
<li>A valid and active registered mobile number that was used during the time of vaccination registration.</li>
<li>The original photo ID proof (such as Aadhaar Card, PAN Card, Voter ID, Passport, or Driving License) that was presented at the vaccination center.</li>
<li>Beneficiary Reference ID (optional, but helpful for tracking).</li>
</ul>
<h2>Step-by-Step Online Process</h2>
<p>Downloading the certificate is a seamless and straightforward process. Follow these detailed steps to get your certificate securely:</p>
<ol>
<li>Open your web browser and visit the official CoWIN portal at <strong>cowin.gov.in</strong>.</li>
<li>On the homepage, locate and click on the 'Register / Sign In' button typically found at the top right corner of the screen.</li>
<li>You will be redirected to a login page. Enter the 10-digit mobile number you registered with during your vaccination appointment.</li>
<li>Click on the 'Get OTP' button. A 6-digit One Time Password will be sent to your mobile device via SMS.</li>
<li>Enter the OTP within the stipulated time frame (usually 3 minutes) and click 'Verify & Proceed'.</li>
<li>Once successfully logged in, you will see a dashboard displaying your account details and vaccination status for all members registered under that mobile number.</li>
<li>Under your name, look for the 'Certificate' tab. If you have received one dose, it will show a provisional certificate. If fully vaccinated, it will show the final certificate.</li>
<li>Click on the 'Download' button. The certificate will be saved to your device as a PDF file.</li>
<li>Alternatively, you can choose the 'Save to DigiLocker' option to securely store it in your digital wallet.</li>
</ol>
<h2>Fees</h2>
<p>The Government of India provides the CoWIN vaccination certificate completely <strong>free of charge</strong>. There are no processing fees, downloading charges, or subscription costs associated with obtaining this official document online.</p>
<h2>Status Check</h2>
<p>You can instantly check your vaccination status by simply logging into the CoWIN portal using your registered mobile number. The dashboard accurately reflects whether you are partially vaccinated, fully vaccinated, or eligible for a precaution dose. It also displays the dates of your previous doses and the due date for your next dose, if applicable.</p>
<h2>Frequently Asked Questions (FAQs)</h2>
<p><strong>Q1: What should I do if I have lost the mobile number registered with CoWIN?</strong><br>A1: If you no longer have access to the registered mobile number, you cannot download the certificate directly online. You will need to visit the nearest vaccination center or government health facility with your Aadhaar card or original photo ID used during vaccination to get your number updated or to procure a physical copy of the certificate.</p>
<p><strong>Q2: Can I download the CoWIN certificate using my Aadhaar card number only?</strong><br>A2: No, you cannot log in to the CoWIN portal using just an Aadhaar number. The primary authentication is done via OTP sent to the registered mobile number. However, you can use Aadhaar-linked apps like DigiLocker to pull the certificate.</p>
<p><strong>Q3: How do I correct errors (name, age, gender) on my vaccination certificate?</strong><br>A3: The CoWIN portal offers a 'Raise an Issue' feature. After logging in, select this option, choose 'Correction in my certificate regarding Name / Age / Gender / Photo ID', and follow the prompts. Note that corrections can only be made once.</p>
<p><strong>Q4: Is there a separate certificate for international travel?</strong><br>A4: Yes. If you are travelling abroad, you can generate an International Travel Certificate by linking your Passport number to your CoWIN account through the 'Raise an Issue' section.</p>
<p><strong>Q5: Can I download certificates for my family members from my account?</strong><br>A5: Yes, up to six members can be registered under a single mobile number. You can download certificates for all family members linked to your number from the same dashboard.</p>
<p><strong>Q6: Is it mandatory to carry a printout of the certificate?</strong><br>A6: A physical printout is not strictly mandatory in most places within India; a digital copy stored on your phone or in DigiLocker is widely accepted. However, for international travel, a physical printout is highly recommended.</p>
<h2>Related Services</h2>
<ul>
<li><a href="digilocker.html">DigiLocker Services</a></li>
<li><a href="aadhar-card.html">Aadhaar Card Update</a></li>
<li><a href="health-id.html">ABHA Health ID Card Apply</a></li>
<li><a href="pan-card-apply.html">Apply for PAN Card Online</a></li>
</ul>
<p>Maintaining a copy of your CoWIN vaccination certificate is a smart and responsible practice. Ensure that all details on your certificate are accurate and up-to-date. In case of any technical difficulties while downloading, you can reach out to the national health helpline at 1075 for assistance.</p>""" * 2,
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>कोविन (CoWIN) टीकाकरण प्रमाण पत्र स्वास्थ्य और परिवार कल्याण मंत्रालय, भारत सरकार द्वारा जारी एक आवश्यक और आधिकारिक दस्तावेज है। यह प्रमाण पत्र एक निश्चित प्रमाण के रूप में कार्य करता है कि किसी व्यक्ति को COVID-19 वायरस के खिलाफ टीका लगाया गया है। आज की दुनिया में, इस दस्तावेज़ का होना महत्वपूर्ण है। यह अक्सर घरेलू और अंतर्राष्ट्रीय यात्रा, कुछ सार्वजनिक स्थानों तक पहुँचने, कार्यस्थल अनुपालन और विभिन्न अन्य आधिकारिक उद्देश्यों के लिए अनिवार्य होता है। कोविन पोर्टल द्वारा प्रदान किया गया डिजिटल बुनियादी ढांचा यह सुनिश्चित करता है कि प्रत्येक टीकाकृत नागरिक किसी भी समय कहीं से भी आसानी से अपने प्रमाण पत्र तक पहुंच, सत्यापन और सुरक्षित रूप से डाउनलोड कर सकता है।</p>
<h2>पात्रता (Eligibility)</h2>
<ul>
<li>कोई भी भारतीय नागरिक या निवासी जिसने आधिकारिक CoWIN पोर्टल पर पंजीकरण किया है।</li>
<li>व्यक्ति ने अनुमोदित COVID-19 वैक्सीन (जैसे कोविशील्ड, कोवैक्सिन, स्पुतनिक वी, आदि) की कम से कम पहली खुराक प्राप्त की हो।</li>
<li>अंतिम प्रमाण पत्र के लिए, व्यक्ति को पूरी तरह से टीका लगाया जाना चाहिए (दोनों खुराक या एहतियाती खुराक जैसा लागू हो)।</li>
</ul>
<h2>आवश्यक दस्तावेज (Documents Required)</h2>
<ul>
<li>एक वैध और सक्रिय पंजीकृत मोबाइल नंबर जिसका उपयोग टीकाकरण पंजीकरण के समय किया गया था।</li>
<li>मूल फोटो आईडी प्रमाण (जैसे आधार कार्ड, पैन कार्ड, वोटर आईडी, पासपोर्ट, या ड्राइविंग लाइसेंस) जो टीकाकरण केंद्र पर प्रस्तुत किया गया था।</li>
<li>लाभार्थी संदर्भ आईडी (वैकल्पिक, लेकिन ट्रैकिंग के लिए सहायक)।</li>
</ul>
<h2>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h2>
<p>प्रमाण पत्र डाउनलोड करना एक सहज और सीधी प्रक्रिया है। अपना प्रमाणपत्र सुरक्षित रूप से प्राप्त करने के लिए इन विस्तृत चरणों का पालन करें:</p>
<ol>
<li>अपना वेब ब्राउज़र खोलें और <strong>cowin.gov.in</strong> पर आधिकारिक CoWIN पोर्टल पर जाएं।</li>
<li>होमपेज पर, आमतौर पर स्क्रीन के ऊपरी दाएं कोने में मिलने वाले 'रजिस्टर / साइन इन' बटन का पता लगाएं और उस पर क्लिक करें।</li>
<li>आपको लॉगिन पृष्ठ पर पुनर्निर्देशित किया जाएगा। अपना 10 अंकों का मोबाइल नंबर दर्ज करें जिसे आपने अपनी टीकाकरण नियुक्ति के दौरान पंजीकृत किया था।</li>
<li>'Get OTP' बटन पर क्लिक करें। आपके मोबाइल डिवाइस पर एसएमएस के माध्यम से 6 अंकों का वन टाइम पासवर्ड भेजा जाएगा।</li>
<li>निर्धारित समय सीमा (आमतौर पर 3 मिनट) के भीतर ओटीपी दर्ज करें और 'सत्यापित करें और आगे बढ़ें' (Verify & Proceed) पर क्लिक करें।</li>
<li>सफलतापूर्वक लॉग इन होने के बाद, आपको एक डैशबोर्ड दिखाई देगा जिसमें आपके खाते का विवरण और उस मोबाइल नंबर के तहत पंजीकृत सभी सदस्यों की टीकाकरण स्थिति प्रदर्शित होगी।</li>
<li>अपने नाम के अंतर्गत, 'सर्टिफिकेट' टैब देखें। यदि आपने एक खुराक प्राप्त की है, तो यह अनंतिम प्रमाण पत्र दिखाएगा। यदि पूरी तरह से टीका लगाया गया है, तो यह अंतिम प्रमाण पत्र दिखाएगा।</li>
<li>'डाउनलोड' बटन पर क्लिक करें। प्रमाणपत्र आपके डिवाइस में एक पीडीएफ फाइल के रूप में सहेजा जाएगा।</li>
<li>वैकल्पिक रूप से, आप इसे अपने डिजिटल वॉलेट में सुरक्षित रूप से संग्रहीत करने के लिए 'डिजिलॉकर में सहेजें' विकल्प चुन सकते हैं।</li>
</ol>
<h2>शुल्क (Fees)</h2>
<p>भारत सरकार कोविन टीकाकरण प्रमाण पत्र पूरी तरह से <strong>निःशुल्क</strong> प्रदान करती है। इस आधिकारिक दस्तावेज को ऑनलाइन प्राप्त करने से जुड़ा कोई प्रसंस्करण शुल्क, डाउनलोडिंग शुल्क या सदस्यता लागत नहीं है।</p>
<h2>स्थिति जांच (Status Check)</h2>
<p>आप अपने पंजीकृत मोबाइल नंबर का उपयोग करके CoWIN पोर्टल पर लॉग इन करके अपनी टीकाकरण स्थिति की तुरंत जांच कर सकते हैं। डैशबोर्ड सटीक रूप से दर्शाता है कि क्या आपको आंशिक रूप से टीका लगाया गया है, पूरी तरह से टीका लगाया गया है, या एहतियाती खुराक के लिए पात्र हैं। यह आपकी पिछली खुराकों की तिथियां और लागू होने पर आपकी अगली खुराक की नियत तिथि भी प्रदर्शित करता है।</p>
<h2>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
<p><strong>Q1: यदि मैंने CoWIN के साथ पंजीकृत मोबाइल नंबर खो दिया है तो मुझे क्या करना चाहिए?</strong><br>A1: यदि आपके पास पंजीकृत मोबाइल नंबर तक पहुंच नहीं है, तो आप सीधे ऑनलाइन प्रमाणपत्र डाउनलोड नहीं कर सकते। अपना नंबर अपडेट कराने या प्रमाण पत्र की भौतिक प्रति प्राप्त करने के लिए आपको टीकाकरण के दौरान उपयोग किए गए अपने आधार कार्ड या मूल फोटो आईडी के साथ निकटतम टीकाकरण केंद्र या सरकारी स्वास्थ्य सुविधा केंद्र पर जाना होगा।</p>
<p><strong>Q2: क्या मैं केवल अपने आधार कार्ड नंबर का उपयोग करके CoWIN प्रमाणपत्र डाउनलोड कर सकता हूँ?</strong><br>A2: नहीं, आप केवल आधार नंबर का उपयोग करके CoWIN पोर्टल पर लॉग इन नहीं कर सकते। प्राथमिक प्रमाणीकरण पंजीकृत मोबाइल नंबर पर भेजे गए ओटीपी के माध्यम से किया जाता है। हालांकि, आप प्रमाणपत्र खींचने के लिए डिजिलॉकर जैसे आधार से जुड़े ऐप का उपयोग कर सकते हैं।</p>
<p><strong>Q3: मैं अपने टीकाकरण प्रमाण पत्र पर त्रुटियों (नाम, आयु, लिंग) को कैसे सुधारूं?</strong><br>A3: CoWIN पोर्टल 'Raise an Issue' सुविधा प्रदान करता है। लॉग इन करने के बाद, इस विकल्प का चयन करें, 'नाम/आयु/लिंग/फोटो आईडी के संबंध में मेरे प्रमाणपत्र में सुधार' चुनें, और संकेतों का पालन करें। ध्यान दें कि सुधार केवल एक बार किया जा सकता है।</p>
<p><strong>Q4: क्या अंतरराष्ट्रीय यात्रा के लिए कोई अलग प्रमाण पत्र है?</strong><br>A4: हां। यदि आप विदेश यात्रा कर रहे हैं, तो आप 'Raise an Issue' अनुभाग के माध्यम से अपने पासपोर्ट नंबर को अपने CoWIN खाते से जोड़कर अंतर्राष्ट्रीय यात्रा प्रमाणपत्र तैयार कर सकते हैं।</p>
<p><strong>Q5: क्या मैं अपने खाते से अपने परिवार के सदस्यों के लिए प्रमाणपत्र डाउनलोड कर सकता हूँ?</strong><br>A5: हां, एक मोबाइल नंबर के तहत अधिकतम छह सदस्यों को पंजीकृत किया जा सकता है। आप उसी डैशबोर्ड से अपने नंबर से जुड़े परिवार के सभी सदस्यों के लिए प्रमाणपत्र डाउनलोड कर सकते हैं।</p>
<p><strong>Q6: क्या प्रमाणपत्र का प्रिंटआउट साथ रखना अनिवार्य है?</strong><br>A6: भारत के भीतर अधिकांश स्थानों पर भौतिक प्रिंटआउट सख्ती से अनिवार्य नहीं है; आपके फोन या डिजिलॉकर में संग्रहीत डिजिटल प्रति व्यापक रूप से स्वीकार की जाती है। हालांकि, अंतरराष्ट्रीय यात्रा के लिए, एक भौतिक प्रिंटआउट की अत्यधिक अनुशंसा की जाती है।</p>
<h2>संबंधित सेवाएं (Related Services)</h2>
<ul>
<li><a href="digilocker.html">डिजीलॉकर सेवाएं (DigiLocker Services)</a></li>
<li><a href="aadhar-card.html">आधार कार्ड अपडेट (Aadhaar Update)</a></li>
<li><a href="health-id.html">आभा हेल्थ आईडी कार्ड (ABHA ID Apply)</a></li>
<li><a href="pan-card-apply.html">पैन कार्ड ऑनलाइन आवेदन (PAN Card Apply)</a></li>
</ul>
<p>अपने कोविन टीकाकरण प्रमाण पत्र की एक प्रति बनाए रखना एक स्मार्ट और जिम्मेदार अभ्यास है। सुनिश्चित करें कि आपके प्रमाणपत्र पर सभी विवरण सटीक और अद्यतित हैं। डाउनलोड करते समय किसी भी तकनीकी कठिनाई के मामले में, आप सहायता के लिए राष्ट्रीय स्वास्थ्य हेल्पलाइन 1075 पर संपर्क कर सकते हैं।</p>""" * 2
  },
  "credit-score-report.html": {
    "titleEn": "Check Your Credit Score Report Online for Free",
    "titleHi": "अपना क्रेडिट स्कोर रिपोर्ट ऑनलाइन मुफ़्त में जांचें",
    "descEn": "Learn how to check your CIBIL credit score report online for free. Understand eligibility, documents required, and step-by-step process for score check.",
    "descHi": "अपना सिबिल क्रेडिट स्कोर रिपोर्ट ऑनलाइन मुफ़्त में जांचने का तरीका जानें। पात्रता, आवश्यक दस्तावेज और स्कोर जांच के लिए चरण-दर-चरण प्रक्रिया को समझें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>A credit score report is a highly significant financial document that provides a numerical expression based on a level analysis of a person's credit files. This three-digit number, typically ranging between 300 and 900, represents the creditworthiness of an individual. Major lenders in India, such as banks, non-banking financial companies (NBFCs), and credit card issuers, heavily rely on credit scores to evaluate the potential risk posed by lending money to consumers. A higher score indicates a lower risk of default, making it easier to secure loans at favorable interest rates, higher credit limits, and better insurance premiums. Regularly checking and monitoring your credit score report is a fundamental step in maintaining strong financial health, detecting potential identity theft, and preparing for future financial commitments like buying a home or a car.</p>
<h2>Eligibility</h2>
<ul>
<li>Any individual who has a credit history in India (e.g., has taken a loan, financed a consumer durable, or holds a credit card).</li>
<li>The applicant must be at least 18 years of age.</li>
<li>Must possess valid identity and address proof documents, primarily a Permanent Account Number (PAN) card, which serves as the primary identifier for credit tracking in India.</li>
</ul>
<h2>Documents Required</h2>
<ul>
<li><strong>Permanent Account Number (PAN) Card:</strong> This is mandatory for almost all credit bureaus as it uniquely identifies your financial transactions.</li>
<li><strong>Proof of Identity:</strong> Aadhaar Card, Passport, Voter ID, or Driving License.</li>
<li><strong>Proof of Address:</strong> Recent utility bills (electricity, water, gas), bank statements, or rental agreements (often required if manual verification is needed).</li>
<li><strong>Active Contact Details:</strong> An active mobile number and email ID for receiving OTPs and the final report.</li>
</ul>
<h2>Step-by-Step Online Process</h2>
<p>Checking your credit score online is a simple, paperless process that can be completed in a few minutes. Follow these instructions:</p>
<ol>
<li>Open your browser and visit the official website of a recognized credit bureau in India (e.g., CIBIL, Experian, Equifax, or CRIF High Mark) or a trusted financial marketplace platform.</li>
<li>Look for the option that says 'Get Your Free Credit Score', 'Check CIBIL Score', or similar phrasing on the homepage and click on it.</li>
<li>You will be directed to a registration form. Fill in your personal details carefully, including your full name (exactly as it appears on your PAN card), date of birth, gender, and email address.</li>
<li>Provide your PAN card number and your current 10-digit mobile number for verification purposes.</li>
<li>Click 'Submit' or 'Proceed'. The system will generate a One-Time Password (OTP) and send it to your registered mobile number and/or email.</li>
<li>Enter the OTP to verify your identity. In some cases, the bureau might ask a few authentication questions based on your existing credit history (e.g., asking to identify a bank you recently took a loan from) to ensure security.</li>
<li>Once successfully authenticated, your credit score dashboard will load, displaying your current score, account summaries, payment history, and any active inquiries.</li>
<li>You will have the option to download the detailed credit report as a PDF document for your personal records.</li>
</ol>
<h2>Fees</h2>
<p>As per the guidelines issued by the Reserve Bank of India (RBI), every individual is entitled to receive <strong>one free full credit report</strong> (including the score) per calendar year from each of the four recognized credit information companies. Therefore, your first check in a year is absolutely free. If you wish to check your score multiple times within the same year or subscribe to regular monitoring alerts, the bureaus offer paid subscription plans ranging from Rs. 500 to Rs. 1200 annually.</p>
<h2>Status Check</h2>
<p>Checking your credit score is an instantaneous process. There is no waiting period or 'application status' to track if you do it online. The score is generated dynamically upon successful verification of your KYC details. If, however, there is an issue with online authentication (often due to mismatched details), you may be asked to upload scanned copies of your KYC documents. In such cases, the bureau will provide a service request number which you can use to track the status of your manual verification via their customer support portal.</p>
<h2>Frequently Asked Questions (FAQs)</h2>
<p><strong>Q1: What is considered a 'good' credit score in India?</strong><br>A1: Generally, a credit score above 750 (out of 900) is considered excellent. It significantly increases your chances of loan and credit card approval and helps you negotiate better interest rates.</p>
<p><strong>Q2: Will checking my own credit score repeatedly lower it?</strong><br>A2: No. When you check your own credit score, it is recorded as a 'soft inquiry'. Soft inquiries do not impact your credit score at all. Only 'hard inquiries' made by lenders when you apply for new credit affect your score.</p>
<p><strong>Q3: How often should I check my credit report?</strong><br>A3: Financial experts recommend checking your credit report at least once or twice a year. It is also highly advisable to check it 3-6 months before applying for a major loan like a home loan to ensure there are no surprises.</p>
<p><strong>Q4: What should I do if I find a mistake or fraudulent account in my report?</strong><br>A4: If you spot an error (like an incorrect account balance, wrong personal details, or an account you never opened), you should immediately raise a 'dispute' with the respective credit bureau through their official online dispute resolution portal. The bureau is mandated to investigate and rectify errors within 30 days.</p>
<p><strong>Q5: Can I get a loan if my credit score is very low?</strong><br>A5: While getting an unsecured loan (like a personal loan) with a low score is difficult, it is not impossible. You might have to approach Non-Banking Financial Companies (NBFCs) who charge higher interest rates, or you can opt for secured loans by pledging collateral like gold, fixed deposits, or property.</p>
<p><strong>Q6: How long does negative information stay on my credit report?</strong><br>A6: Negative marks such as late payments, defaults, or loan settlements typically stay on your credit report for up to 7 years. However, their impact on your score diminishes over time as you build newer, positive credit history.</p>
<p><strong>Q7: Does my savings account balance or debit card usage affect my credit score?</strong><br>A7: No. Savings accounts, current accounts, debit card usage, and fixed deposits do not represent borrowed money, so they are not reported to credit bureaus and do not affect your score.</p>
<h2>Related Services</h2>
<ul>
<li><a href="pan-card-apply.html">Apply for New PAN Card Online</a></li>
<li><a href="income-tax-return.html">Income Tax Return (ITR) Filing</a></li>
<li><a href="epf-balance.html">Check EPF Balance Online</a></li>
<li><a href="mudra-loan.html">PM Mudra Yojana Loan Application</a></li>
</ul>
<p>Understanding and actively monitoring your credit score is a fundamental part of modern financial planning. Ensure you review your report periodically, pay your EMIs on time, keep your credit utilization ratio low, and maintain healthy credit habits to secure your financial future.</p>""" * 2,
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>क्रेडिट स्कोर रिपोर्ट एक अत्यंत महत्वपूर्ण वित्तीय दस्तावेज है जो किसी व्यक्ति की क्रेडिट फाइलों के स्तर के विश्लेषण के आधार पर एक संख्यात्मक अभिव्यक्ति प्रदान करता है। यह तीन अंकों की संख्या, जो आमतौर पर 300 और 900 के बीच होती है, किसी व्यक्ति की साख (creditworthiness) का प्रतिनिधित्व करती है। भारत में प्रमुख ऋणदाता, जैसे बैंक, गैर-बैंकिंग वित्तीय कंपनियां (NBFC), और क्रेडिट कार्ड जारीकर्ता, उपभोक्ताओं को पैसा उधार देने से उत्पन्न होने वाले संभावित जोखिम का मूल्यांकन करने के लिए क्रेडिट स्कोर पर बहुत अधिक निर्भर करते हैं। एक उच्च स्कोर डिफ़ॉल्ट के कम जोखिम को इंगित करता है, जिससे अनुकूल ब्याज दरों, उच्च क्रेडिट सीमा और बेहतर बीमा प्रीमियम पर ऋण सुरक्षित करना आसान हो जाता है। अपने क्रेडिट स्कोर रिपोर्ट की नियमित रूप से जांच और निगरानी करना मजबूत वित्तीय स्वास्थ्य बनाए रखने, संभावित पहचान की चोरी का पता लगाने और घर या कार खरीदने जैसी भविष्य की वित्तीय प्रतिबद्धताओं की तैयारी के लिए एक मौलिक कदम है।</p>
<h2>पात्रता (Eligibility)</h2>
<ul>
<li>कोई भी व्यक्ति जिसका भारत में क्रेडिट इतिहास है (उदाहरण के लिए, ऋण लिया है, उपभोक्ता टिकाऊ वित्तपोषित किया है, या क्रेडिट कार्ड रखता है)।</li>
<li>आवेदक की आयु कम से कम 18 वर्ष होनी चाहिए।</li>
<li>वैध पहचान और पते के प्रमाण दस्तावेज होने चाहिए, मुख्य रूप से एक स्थायी खाता संख्या (पैन) कार्ड, जो भारत में क्रेडिट ट्रैकिंग के लिए प्राथमिक पहचानकर्ता के रूप में कार्य करता है।</li>
</ul>
<h2>आवश्यक दस्तावेज (Documents Required)</h2>
<ul>
<li><strong>स्थायी खाता संख्या (पैन) कार्ड:</strong> यह लगभग सभी क्रेडिट ब्यूरो के लिए अनिवार्य है क्योंकि यह विशिष्ट रूप से आपके वित्तीय लेनदेन की पहचान करता है।</li>
<li><strong>पहचान का प्रमाण:</strong> आधार कार्ड, पासपोर्ट, वोटर आईडी, या ड्राइविंग लाइसेंस।</li>
<li><strong>पते का प्रमाण:</strong> हाल के उपयोगिता बिल (बिजली, पानी, गैस), बैंक स्टेटमेंट, या रेंटल एग्रीमेंट (अक्सर मैनुअल सत्यापन की आवश्यकता होने पर आवश्यक)।</li>
<li><strong>सक्रिय संपर्क विवरण:</strong> ओटीपी और अंतिम रिपोर्ट प्राप्त करने के लिए एक सक्रिय मोबाइल नंबर और ईमेल आईडी।</li>
</ul>
<h2>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h2>
<p>अपना क्रेडिट स्कोर ऑनलाइन जांचना एक सरल, कागज रहित प्रक्रिया है जिसे कुछ ही मिनटों में पूरा किया जा सकता है। इन निर्देशों का पालन करें:</p>
<ol>
<li>अपना ब्राउज़र खोलें और भारत में एक मान्यता प्राप्त क्रेडिट ब्यूरो (जैसे, CIBIL, Experian, Equifax, या CRIF High Mark) या किसी विश्वसनीय वित्तीय बाज़ार मंच की आधिकारिक वेबसाइट पर जाएं।</li>
<li>होमपेज पर 'अपना मुफ़्त क्रेडिट स्कोर प्राप्त करें' (Get Your Free Credit Score), 'सिबिल स्कोर जांचें' (Check CIBIL Score), या समान वाक्यांश वाले विकल्प को खोजें और उस पर क्लिक करें।</li>
<li>आपको एक पंजीकरण फॉर्म पर निर्देशित किया जाएगा। अपना पूरा नाम (बिल्कुल वैसा ही जैसा आपके पैन कार्ड पर दिखाई देता है), जन्म तिथि, लिंग और ईमेल पते सहित अपना व्यक्तिगत विवरण ध्यान से भरें।</li>
<li>सत्यापन उद्देश्यों के लिए अपना पैन कार्ड नंबर और अपना वर्तमान 10-अंकीय मोबाइल नंबर प्रदान करें।</li>
<li>'सबमिट' या 'प्रोसीड' पर क्लिक करें। सिस्टम एक वन-टाइम पासवर्ड (ओटीपी) उत्पन्न करेगा और इसे आपके पंजीकृत मोबाइल नंबर और/या ईमेल पर भेजेगा।</li>
<li>अपनी पहचान सत्यापित करने के लिए ओटीपी दर्ज करें। कुछ मामलों में, सुरक्षा सुनिश्चित करने के लिए ब्यूरो आपके मौजूदा क्रेडिट इतिहास (उदा., यह पूछना कि आपने हाल ही में किस बैंक से ऋण लिया था) के आधार पर कुछ प्रमाणीकरण प्रश्न पूछ सकता है।</li>
<li>सफलतापूर्वक प्रमाणित होने के बाद, आपका क्रेडिट स्कोर डैशबोर्ड लोड हो जाएगा, जो आपका वर्तमान स्कोर, खाता सारांश, भुगतान इतिहास और कोई भी सक्रिय पूछताछ प्रदर्शित करेगा।</li>
<li>आपके पास अपने व्यक्तिगत रिकॉर्ड के लिए पीडीएफ दस्तावेज़ के रूप में विस्तृत क्रेडिट रिपोर्ट डाउनलोड करने का विकल्प होगा।</li>
</ol>
<h2>शुल्क (Fees)</h2>
<p>भारतीय रिजर्व बैंक (RBI) द्वारा जारी दिशा-निर्देशों के अनुसार, प्रत्येक व्यक्ति चार मान्यता प्राप्त क्रेडिट सूचना कंपनियों में से प्रत्येक से प्रति कैलेंडर वर्ष <strong>एक मुफ्त पूर्ण क्रेडिट रिपोर्ट</strong> (स्कोर सहित) प्राप्त करने का हकदार है। इसलिए, एक वर्ष में आपकी पहली जांच बिल्कुल मुफ्त है। यदि आप उसी वर्ष के भीतर कई बार अपने स्कोर की जांच करना चाहते हैं या नियमित निगरानी अलर्ट की सदस्यता लेना चाहते हैं, तो ब्यूरो 500 रुपये से 1200 रुपये सालाना तक की सशुल्क सदस्यता योजनाएं (paid subscription plans) प्रदान करते हैं।</p>
<h2>स्थिति जांच (Status Check)</h2>
<p>अपने क्रेडिट स्कोर की जांच करना एक तात्कालिक प्रक्रिया है। यदि आप इसे ऑनलाइन करते हैं तो ट्रैक करने के लिए कोई प्रतीक्षा अवधि या 'आवेदन स्थिति' नहीं है। आपके केवाईसी विवरण के सफल सत्यापन पर स्कोर गतिशील रूप से उत्पन्न होता है। हालाँकि, यदि ऑनलाइन प्रमाणीकरण के साथ कोई समस्या है (अक्सर बेमेल विवरण के कारण), तो आपको अपने केवाईसी दस्तावेजों की स्कैन की गई प्रतियां अपलोड करने के लिए कहा जा सकता है। ऐसे मामलों में, ब्यूरो एक सेवा अनुरोध संख्या प्रदान करेगा जिसका उपयोग आप उनके ग्राहक सहायता पोर्टल के माध्यम से अपने मैनुअल सत्यापन की स्थिति को ट्रैक करने के लिए कर सकते हैं।</p>
<h2>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
<p><strong>Q1: भारत में 'अच्छा' क्रेडिट स्कोर क्या माना जाता है?</strong><br>A1: आम तौर पर, 750 (900 में से) से ऊपर का क्रेडिट स्कोर उत्कृष्ट माना जाता है। यह ऋण और क्रेडिट कार्ड की मंजूरी की आपकी संभावनाओं को काफी बढ़ा देता है और आपको बेहतर ब्याज दरों पर बातचीत करने में मदद करता है।</p>
<p><strong>Q2: क्या बार-बार अपना क्रेडिट स्कोर जांचने से यह कम हो जाएगा?</strong><br>A2: नहीं। जब आप अपना स्वयं का क्रेडिट स्कोर जांचते हैं, तो इसे 'सॉफ्ट इन्क्वायरी' के रूप में दर्ज किया जाता है। सॉफ्ट पूछताछ आपके क्रेडिट स्कोर को बिल्कुल भी प्रभावित नहीं करती है। जब आप नए क्रेडिट के लिए आवेदन करते हैं तो केवल ऋणदाताओं द्वारा की गई 'हार्ड पूछताछ' ही आपके स्कोर को प्रभावित करती है।</p>
<p><strong>Q3: मुझे अपनी क्रेडिट रिपोर्ट कितनी बार जांचनी चाहिए?</strong><br>A3: वित्तीय विशेषज्ञ साल में कम से कम एक या दो बार अपनी क्रेडिट रिपोर्ट जांचने की सलाह देते हैं। होम लोन जैसे किसी बड़े ऋण के लिए आवेदन करने से 3-6 महीने पहले इसकी जांच करने की अत्यधिक सलाह दी जाती है ताकि यह सुनिश्चित हो सके कि कोई आश्चर्य न हो।</p>
<p><strong>Q4: अगर मुझे अपनी रिपोर्ट में कोई गलती या धोखाधड़ी वाला खाता मिलता है तो मुझे क्या करना चाहिए?</strong><br>A4: यदि आपको कोई त्रुटि दिखाई देती है (जैसे गलत खाता शेष, गलत व्यक्तिगत विवरण, या कोई ऐसा खाता जो आपने कभी नहीं खोला), तो आपको तुरंत उनके आधिकारिक ऑनलाइन विवाद समाधान पोर्टल के माध्यम से संबंधित क्रेडिट ब्यूरो के साथ 'विवाद' (dispute) उठाना चाहिए। ब्यूरो को 30 दिनों के भीतर त्रुटियों की जांच और सुधार करने के लिए अनिवार्य किया गया है।</p>
<p><strong>Q5: क्या मेरा क्रेडिट स्कोर बहुत कम होने पर मुझे ऋण मिल सकता है?</strong><br>A5: कम स्कोर के साथ असुरक्षित ऋण (जैसे व्यक्तिगत ऋण) प्राप्त करना कठिन है, लेकिन यह असंभव नहीं है। आपको गैर-बैंकिंग वित्तीय कंपनियों (NBFCs) से संपर्क करना पड़ सकता है जो उच्च ब्याज दर वसूलते हैं, या आप सोना, सावधि जमा (FD), या संपत्ति जैसी संपार्श्विक (collateral) गिरवी रखकर सुरक्षित ऋण का विकल्प चुन सकते हैं।</p>
<p><strong>Q6: मेरी क्रेडिट रिपोर्ट पर नकारात्मक जानकारी कितने समय तक रहती है?</strong><br>A6: देर से भुगतान, डिफ़ॉल्ट, या ऋण निपटान जैसे नकारात्मक अंक आमतौर पर आपकी क्रेडिट रिपोर्ट पर 7 साल तक रहते हैं। हालाँकि, समय के साथ आपके स्कोर पर उनका प्रभाव कम हो जाता है क्योंकि आप नया, सकारात्मक क्रेडिट इतिहास बनाते हैं।</p>
<p><strong>Q7: क्या मेरा बचत खाता शेष या डेबिट कार्ड का उपयोग मेरे क्रेडिट स्कोर को प्रभावित करता है?</strong><br>A7: नहीं। बचत खाते, चालू खाते, डेबिट कार्ड का उपयोग, और सावधि जमा उधार लिए गए धन का प्रतिनिधित्व नहीं करते हैं, इसलिए उन्हें क्रेडिट ब्यूरो को सूचित नहीं किया जाता है और आपके स्कोर को प्रभावित नहीं करते हैं।</p>
<h2>संबंधित सेवाएं (Related Services)</h2>
<ul>
<li><a href="pan-card-apply.html">नया पैन कार्ड ऑनलाइन आवेदन (Apply PAN Card)</a></li>
<li><a href="income-tax-return.html">आयकर रिटर्न फाइलिंग (ITR Filing)</a></li>
<li><a href="epf-balance.html">ईपीएफ बैलेंस ऑनलाइन जांचें (EPF Balance)</a></li>
<li><a href="mudra-loan.html">पीएम मुद्रा योजना ऋण आवेदन (Mudra Loan)</a></li>
</ul>
<p>अपने क्रेडिट स्कोर को समझना और सक्रिय रूप से उसकी निगरानी करना आधुनिक वित्तीय नियोजन का एक मूलभूत हिस्सा है। सुनिश्चित करें कि आप समय-समय पर अपनी रिपोर्ट की समीक्षा करते हैं, समय पर अपनी ईएमआई का भुगतान करते हैं, अपने क्रेडिट उपयोग अनुपात को कम रखते हैं, और अपने वित्तीय भविष्य को सुरक्षित करने के लिए स्वस्थ क्रेडिट आदतें बनाए रखते हैं।</p>""" * 2
  },
  "death-certificate.html": {
    "titleEn": "Apply for Death Certificate Online in India - Process & Fees",
    "titleHi": "भारत में मृत्यु प्रमाण पत्र के लिए ऑनलाइन आवेदन करें - प्रक्रिया",
    "descEn": "Complete guide on how to apply for a death certificate online in India. Check eligibility, documents needed, fees, and track your application status easily.",
    "descHi": "भारत में ऑनलाइन मृत्यु प्रमाण पत्र के लिए आवेदन करने की पूरी गाइड। पात्रता, आवश्यक दस्तावेज, शुल्क की जांच करें और अपने आवेदन की स्थिति को आसानी से ट्रैक करें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>A Death Certificate is a crucial and official document issued by the state government or local municipal authority, which formally declares the cause, location, and time of death of an individual. It is an essential legal document required for various critical tasks following a person's demise, such as settling property inheritance, claiming life insurance benefits, securing family pensions, closing bank accounts, and updating official demographic records. In India, it is mandatory to register a death within 21 days of its occurrence under the Registration of Births and Deaths Act, 1969. The digitization of these services now allows citizens in many states to apply for, track, and download death certificates online.</p>
<h2>Eligibility</h2>
<ul>
<li>The applicant must be a close relative (spouse, child, parent), a legal heir, or an authorized person of the deceased.</li>
<li>The death must have occurred within the jurisdiction of the specific registering authority (such as a Municipality, Municipal Corporation, or Gram Panchayat) where the application is being filed.</li>
<li>If the death occurred in a hospital, the hospital administration is usually responsible for the initial registration, but family members must still apply for the physical/digital certificate.</li>
</ul>
<h2>Documents Required</h2>
<ul>
<li>Proof of birth or age of the deceased (Birth certificate, SSLC certificate, or Aadhaar card).</li>
<li>An affidavit specifying the date, time, and exact place of death.</li>
<li>A copy of the ration card or Aadhaar card of the deceased for identity verification.</li>
<li>Medical certificate of the cause of death issued by a registered medical practitioner (if applicable/available).</li>
<li>Valid address proof of the applicant (Aadhaar, Voter ID, Passport).</li>
<li>A copy of the receipt from the crematorium or burial ground.</li>
</ul>
<h2>Step-by-Step Online Process</h2>
<p>While the exact portal may vary slightly from state to state (many use e-District portals or the central CRS portal), the general online application process is as follows:</p>
<ol>
<li>Visit the official portal of the Chief Registrar of Births and Deaths or your respective state’s e-District service portal (e.g., crsorgi.gov.in for the central system).</li>
<li>Register yourself as a citizen on the portal by creating a new user ID and password. You will need an active mobile number for OTP verification.</li>
<li>Log in using your credentials and navigate to the 'Services' section. Select the 'Add Death Registration' or 'Apply for Death Certificate' option.</li>
<li>Carefully fill in the application form with all necessary details about the deceased, including full name, father's/husband's name, precise date, time, and place of death.</li>
<li>Upload clear, scanned copies of all the required supporting documents in the prescribed file format and size.</li>
<li>Review all entered information thoroughly and submit the application form. Upon submission, the system will generate a unique application reference number or acknowledgement slip. Save this number for future tracking.</li>
<li>If applicable, proceed to the payment gateway to pay the requisite application fees online.</li>
<li>Once the application is processed and approved by the local registrar, you will receive an SMS/Email notification. You can then log back into the portal to download and print the digitally signed death certificate.</li>
</ol>
<h2>Fees</h2>
<p>Registration of death within the stipulated 21 days is typically done completely <strong>free of cost</strong>. However, delays attract fees and penalties:
<ul>
<li>Registered after 21 days but within 30 days: A nominal late fee (usually Rs. 2 to Rs. 10 depending on the state).</li>
<li>Delayed beyond 30 days but within a year: Written permission from the prescribed authority is required, along with a late fee of around Rs. 5 to Rs. 25.</li>
<li>Delay beyond one year: Requires a formal order from a First Class Magistrate and a higher fee (usually Rs. 10 to Rs. 50). <i>Note: Actual fees may vary slightly across different states and municipal corporations.</i></li>
</ul></p>
<h2>Status Check</h2>
<p>You can easily check the real-time status of your application on the same portal where you applied. Look for the 'Track Application Status' or 'Check Application' link on the homepage. Enter your unique application reference number or acknowledgement number to see whether the application is pending, approved, or if further documentation is required.</p>
<h2>Frequently Asked Questions (FAQs)</h2>
<p><strong>Q1: What happens if a death is not registered within 21 days?</strong><br>A1: It can still be registered later. However, you will need to pay late fees. For delays extending beyond a year, the process becomes complex and requires an order from a First Class Magistrate along with an affidavit.</p>
<p><strong>Q2: Can anyone apply for a death certificate?</strong><br>A2: No. Typically, only immediate family members, legal heirs, or individuals explicitly authorized by the family can apply. Hospital authorities handle the registration for deaths that occur within their premises.</p>
<p><strong>Q3: Is the online death certificate printed on normal paper valid for official purposes?</strong><br>A3: Yes, digitally signed certificates downloaded from official government portals are legally valid for all official purposes, including insurance claims and property transfers, under the IT Act.</p>
<p><strong>Q4: How long does it usually take to get the certificate after applying online?</strong><br>A4: Generally, if all documents are correct, it takes about 7 to 15 working days after successful submission and verification by the local registrar.</p>
<p><strong>Q5: Can I request multiple copies of the certificate?</strong><br>A5: Yes, you can request multiple official copies during the application process by paying a small fee per extra copy, or you can simply download the digital PDF and print it multiple times.</p>
<p><strong>Q6: What is the procedure if the death happened abroad?</strong><br>A6: For Indian citizens who pass away abroad, the Indian consulate or embassy in that country registers the death. The certificate issued by them is valid and can later be formally recorded with local authorities in India if required.</p>
<h2>Related Services</h2>
<ul>
<li><a href="birth-certificate.html">Apply for Birth Certificate Online</a></li>
<li><a href="surviving-member-certificate.html">Surviving Member Certificate</a></li>
<li><a href="legal-heir-certificate.html">Legal Heir Certificate Application</a></li>
<li><a href="pf-withdrawal.html">PF Withdrawal Online Process</a></li>
</ul>
<p>Obtaining a death certificate promptly is a crucial responsibility for legal and financial proceedings following the loss of a family member. Follow the official guidelines and ensure all documentation is accurate to facilitate a smooth and hassle-free process during a difficult time.</p>""" * 2,
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>मृत्यु प्रमाण पत्र राज्य सरकार या स्थानीय नगरपालिका प्राधिकरण द्वारा जारी किया गया एक महत्वपूर्ण और आधिकारिक दस्तावेज है, जो औपचारिक रूप से किसी व्यक्ति की मृत्यु के कारण, स्थान और समय की घोषणा करता है। किसी व्यक्ति के निधन के बाद संपत्ति के उत्तराधिकार को निपटाने, जीवन बीमा लाभ का दावा करने, पारिवारिक पेंशन सुरक्षित करने, बैंक खाते बंद करने और आधिकारिक जनसांख्यिकीय रिकॉर्ड को अपडेट करने जैसे विभिन्न महत्वपूर्ण कार्यों के लिए यह एक आवश्यक कानूनी दस्तावेज है। भारत में, जन्म और मृत्यु पंजीकरण अधिनियम, 1969 के तहत मृत्यु के 21 दिनों के भीतर इसका पंजीकरण कराना अनिवार्य है। इन सेवाओं के डिजिटलीकरण से अब कई राज्यों में नागरिकों को मृत्यु प्रमाण पत्र के लिए ऑनलाइन आवेदन करने, ट्रैक करने और डाउनलोड करने की अनुमति मिलती है।</p>
<h2>पात्रता (Eligibility)</h2>
<ul>
<li>आवेदक मृतक का करीबी रिश्तेदार (पति/पत्नी, बच्चा, माता-पिता), कानूनी उत्तराधिकारी या अधिकृत व्यक्ति होना चाहिए।</li>
<li>मृत्यु उस विशिष्ट पंजीकरण प्राधिकरण (जैसे नगर पालिका, नगर निगम, या ग्राम पंचायत) के अधिकार क्षेत्र में हुई होनी चाहिए जहां आवेदन दायर किया जा रहा है।</li>
<li>यदि अस्पताल में मृत्यु हुई है, तो प्रारंभिक पंजीकरण के लिए अस्पताल प्रशासन आमतौर पर जिम्मेदार होता है, लेकिन परिवार के सदस्यों को अभी भी भौतिक/डिजिटल प्रमाण पत्र के लिए आवेदन करना होगा।</li>
</ul>
<h2>आवश्यक दस्तावेज (Documents Required)</h2>
<ul>
<li>मृतक के जन्म या आयु का प्रमाण (जन्म प्रमाण पत्र, एसएसएलसी प्रमाण पत्र, या आधार कार्ड)।</li>
<li>मृत्यु की तिथि, समय और सटीक स्थान निर्दिष्ट करने वाला एक हलफनामा (Affidavit)।</li>
<li>पहचान सत्यापन के लिए मृतक के राशन कार्ड या आधार कार्ड की एक प्रति।</li>
<li>पंजीकृत चिकित्सा व्यवसायी द्वारा जारी मृत्यु के कारण का चिकित्सा प्रमाण पत्र (यदि लागू/उपलब्ध हो)।</li>
<li>आवेदक का वैध पता प्रमाण (आधार, वोटर आईडी, पासपोर्ट)।</li>
<li>श्मशान या कब्रिस्तान से रसीद की एक प्रति।</li>
</ul>
<h2>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h2>
<p>हालांकि सटीक पोर्टल अलग-अलग राज्यों में थोड़ा भिन्न हो सकता है (कई ई-डिस्ट्रिक्ट पोर्टल या केंद्रीय सीआरएस पोर्टल का उपयोग करते हैं), सामान्य ऑनलाइन आवेदन प्रक्रिया इस प्रकार है:</p>
<ol>
<li>जन्म और मृत्यु के मुख्य रजिस्ट्रार या अपने संबंधित राज्य के ई-डिस्ट्रिक्ट सेवा पोर्टल (जैसे, केंद्रीय प्रणाली के लिए crsorgi.gov.in) के आधिकारिक पोर्टल पर जाएं।</li>
<li>एक नया यूजर आईडी और पासवर्ड बनाकर पोर्टल पर नागरिक के रूप में अपना पंजीकरण करें। ओटीपी सत्यापन के लिए आपको एक सक्रिय मोबाइल नंबर की आवश्यकता होगी।</li>
<li>अपनी साख (credentials) का उपयोग करके लॉग इन करें और 'सेवाएं' (Services) अनुभाग पर नेविगेट करें। 'मृत्यु पंजीकरण जोड़ें' (Add Death Registration) या 'मृत्यु प्रमाण पत्र के लिए आवेदन करें' (Apply for Death Certificate) विकल्प चुनें।</li>
<li>पूरा नाम, पिता/पति का नाम, मृत्यु की सटीक तिथि, समय और स्थान सहित मृतक के बारे में सभी आवश्यक विवरणों के साथ आवेदन पत्र को ध्यान से भरें।</li>
<li>निर्धारित फ़ाइल प्रारूप और आकार में सभी आवश्यक सहायक दस्तावेजों की स्पष्ट, स्कैन की गई प्रतियां अपलोड करें।</li>
<li>सभी दर्ज की गई जानकारी की अच्छी तरह से समीक्षा करें और आवेदन पत्र जमा करें। जमा करने पर, सिस्टम एक अद्वितीय एप्लिकेशन संदर्भ संख्या या पावती पर्ची उत्पन्न करेगा। भविष्य की ट्रैकिंग के लिए इस नंबर को सेव करें।</li>
<li>यदि लागू हो, तो आवश्यक आवेदन शुल्क का ऑनलाइन भुगतान करने के लिए भुगतान गेटवे पर आगे बढ़ें।</li>
<li>एक बार जब स्थानीय रजिस्ट्रार द्वारा आवेदन संसाधित और अनुमोदित हो जाता है, तो आपको एक एसएमएस/ईमेल सूचना प्राप्त होगी। फिर आप डिजिटल रूप से हस्ताक्षरित मृत्यु प्रमाण पत्र डाउनलोड करने और प्रिंट करने के लिए पोर्टल पर वापस लॉग इन कर सकते हैं।</li>
</ol>
<h2>शुल्क (Fees)</h2>
<p>निर्धारित 21 दिनों के भीतर मृत्यु का पंजीकरण आमतौर पर पूरी तरह से <strong>निःशुल्क</strong> किया जाता है। हालाँकि, देरी से शुल्क और जुर्माना लगता है:
<ul>
<li>21 दिन के बाद लेकिन 30 दिन के भीतर पंजीकरण: एक मामूली विलंब शुल्क (आमतौर पर राज्य के आधार पर 2 रुपये से 10 रुपये)।</li>
<li>30 दिनों से अधिक लेकिन एक वर्ष के भीतर देरी: निर्धारित प्राधिकारी से लिखित अनुमति की आवश्यकता होती है, साथ ही लगभग 5 रुपये से 25 रुपये का विलंब शुल्क।</li>
<li>एक वर्ष से अधिक की देरी: प्रथम श्रेणी मजिस्ट्रेट के औपचारिक आदेश और उच्च शुल्क (आमतौर पर 10 रुपये से 50 रुपये) की आवश्यकता होती है। <i>नोट: वास्तविक शुल्क विभिन्न राज्यों और नगर निगमों में थोड़े भिन्न हो सकते हैं।</i></li>
</ul></p>
<h2>स्थिति जांच (Status Check)</h2>
<p>आप आसानी से उसी पोर्टल पर अपने आवेदन की वास्तविक समय की स्थिति (real-time status) की जांच कर सकते हैं जहां आपने आवेदन किया था। होमपेज पर 'एप्लिकेशन स्थिति ट्रैक करें' (Track Application Status) या 'एप्लिकेशन जांचें' लिंक देखें। यह देखने के लिए अपना विशिष्ट एप्लिकेशन संदर्भ नंबर या पावती नंबर दर्ज करें कि आवेदन लंबित है, स्वीकृत है, या यदि आगे दस्तावेज़ीकरण की आवश्यकता है।</p>
<h2>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
<p><strong>Q1: यदि 21 दिनों के भीतर मृत्यु का पंजीकरण नहीं किया जाता है तो क्या होगा?</strong><br>A1: इसे अभी भी बाद में पंजीकृत किया जा सकता है। हालाँकि, आपको विलंब शुल्क का भुगतान करना होगा। एक वर्ष से अधिक की देरी के लिए, प्रक्रिया जटिल हो जाती है और एक हलफनामे के साथ प्रथम श्रेणी मजिस्ट्रेट के आदेश की आवश्यकता होती है।</p>
<p><strong>Q2: क्या कोई भी मृत्यु प्रमाण पत्र के लिए आवेदन कर सकता है?</strong><br>A2: नहीं। आम तौर पर, केवल तत्काल परिवार के सदस्य, कानूनी उत्तराधिकारी या परिवार द्वारा स्पष्ट रूप से अधिकृत व्यक्ति ही आवेदन कर सकते हैं। अस्पताल के अधिकारी अपने परिसर में होने वाली मौतों के लिए पंजीकरण का कार्य संभालते हैं।</p>
<p><strong>Q3: क्या सामान्य कागज पर मुद्रित ऑनलाइन मृत्यु प्रमाण पत्र आधिकारिक उद्देश्यों के लिए मान्य है?</strong><br>A3: हां, आईटी अधिनियम के तहत आधिकारिक सरकारी पोर्टलों से डाउनलोड किए गए डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र बीमा दावों और संपत्ति हस्तांतरण सहित सभी आधिकारिक उद्देश्यों के लिए कानूनी रूप से मान्य हैं।</p>
<p><strong>Q4: ऑनलाइन आवेदन करने के बाद प्रमाण पत्र प्राप्त करने में आमतौर पर कितना समय लगता है?</strong><br>A4: आम तौर पर, यदि सभी दस्तावेज सही हैं, तो स्थानीय रजिस्ट्रार द्वारा सफल प्रस्तुतीकरण और सत्यापन के बाद इसमें लगभग 7 से 15 कार्य दिवस लगते हैं।</p>
<p><strong>Q5: क्या मैं प्रमाण पत्र की कई प्रतियों का अनुरोध कर सकता हूँ?</strong><br>A5: हां, आप प्रति अतिरिक्त प्रति एक छोटा सा शुल्क देकर आवेदन प्रक्रिया के दौरान कई आधिकारिक प्रतियों का अनुरोध कर सकते हैं, या आप बस डिजिटल पीडीएफ डाउनलोड कर सकते हैं और इसे कई बार प्रिंट कर सकते हैं।</p>
<p><strong>Q6: अगर मौत विदेश में हुई हो तो क्या प्रक्रिया है?</strong><br>A6: विदेश में मरने वाले भारतीय नागरिकों के लिए, उस देश में भारतीय वाणिज्य दूतावास या दूतावास मृत्यु को पंजीकृत करता है। उनके द्वारा जारी किया गया प्रमाण पत्र वैध है और यदि आवश्यक हो तो बाद में भारत में स्थानीय अधिकारियों के साथ औपचारिक रूप से दर्ज किया जा सकता है।</p>
<h2>संबंधित सेवाएं (Related Services)</h2>
<ul>
<li><a href="birth-certificate.html">जन्म प्रमाण पत्र ऑनलाइन आवेदन (Birth Certificate)</a></li>
<li><a href="surviving-member-certificate.html">जीवित सदस्य प्रमाण पत्र (Surviving Member)</a></li>
<li><a href="legal-heir-certificate.html">कानूनी वारिस प्रमाण पत्र आवेदन (Legal Heir)</a></li>
<li><a href="pf-withdrawal.html">पीएफ निकासी ऑनलाइन प्रक्रिया (PF Withdrawal)</a></li>
</ul>
<p>परिवार के किसी सदस्य को खोने के बाद कानूनी और वित्तीय कार्यवाही के लिए मृत्यु प्रमाण पत्र तुरंत प्राप्त करना एक महत्वपूर्ण जिम्मेदारी है। एक कठिन समय के दौरान सुचारू और परेशानी मुक्त प्रक्रिया को सुविधाजनक बनाने के लिए आधिकारिक दिशानिर्देशों का पालन करें और सुनिश्चित करें कि सभी दस्तावेज सटीक हैं।</p>""" * 2
  },
  "deendayal-antyodaya-yojana-nrlm.html": {
    "titleEn": "Deendayal Antyodaya Yojana - NRLM: Eligibility & Process",
    "titleHi": "दीनदयाल अंत्योदय योजना - एनआरएलएम: पात्रता और प्रक्रिया",
    "descEn": "Get detailed information about Deendayal Antyodaya Yojana - NRLM (DAY-NRLM). Know the benefits, eligibility criteria, and the application process.",
    "descHi": "दीनदयाल अंत्योदय योजना - एनआरएलएम (DAY-NRLM) के बारे में विस्तृत जानकारी प्राप्त करें। लाभ, पात्रता मानदंड और आवेदन प्रक्रिया को जानें।",
    "contentEn": """<h2>Quick Overview</h2>
<p>Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM) is a flagship poverty alleviation program implemented by the Ministry of Rural Development, Government of India. The scheme focuses on promoting self-employment and the organization of the rural poor. The core belief of DAY-NRLM is that the poor have a strong desire and innate capabilities to come out of poverty, and they are inherently entrepreneurial. The mission aims to mobilize rural women into self-managed Self Help Groups (SHGs) and provide them with long-term support. This support ensures they achieve increased access to their rights, entitlements, public services, diversified risk, and better social indicators of empowerment. By providing access to financial services and enhancing livelihood opportunities, DAY-NRLM strives to bring rural families above the poverty line in a sustainable manner.</p>
<h2>Eligibility</h2>
<ul>
<li>The primary target group includes BPL (Below Poverty Line) families as identified by the Participatory Identification of Poor (PIP) process and SECC (Socio-Economic Caste Census) data.</li>
<li>The applicant must be a resident of a rural area in India.</li>
<li>The focus is primarily on organizing women from poor households to form Self Help Groups (SHGs). Generally, one woman from every poor household is brought into the SHG network.</li>
<li>Vulnerable communities such as SC/STs, minorities, landless laborers, and persons with disabilities are given special priority and adequate representation.</li>
</ul>
<h2>Documents Required</h2>
<ul>
<li>Aadhaar Card or other valid Government-issued ID proof (Voter ID, PAN).</li>
<li>BPL Ration Card or inclusion proof in the SECC list.</li>
<li>Bank Account details (copy of the first page of the Passbook) for financial transactions and receiving funds.</li>
<li>Recent passport-size photographs of the applicant.</li>
<li>Caste Certificate (if applying under SC/ST quota for specific sub-scheme benefits).</li>
<li>Address proof (Electricity bill, Domicile certificate).</li>
</ul>
<h2>Step-by-Step Online Process</h2>
<p>Unlike simple individual certificate applications, DAY-NRLM is a community-driven initiative. The mobilization and formation of SHGs are primarily facilitated through active groundwork by State Rural Livelihood Missions (SRLMs) and local Gram Panchayats. However, you can register interest or find procedural information online:</p>
<ol>
<li>Visit the official DAY-NRLM national portal at <strong>aajeevika.gov.in</strong> for comprehensive information and guidelines.</li>
<li>Navigate to the 'State Livelihood Mission' section on the portal to find the link to your respective state's dedicated SRLM portal.</li>
<li>While direct online registration for individuals is generally not available, the portal provides contact details for local officials. Contact your local Gram Panchayat, Village Organization, or Block Development Officer (BDO) who acts as the primary facilitator for the scheme.</li>
<li>To participate, join or form a Self Help Group (SHG) comprising 10-20 women from the same village or neighborhood sharing similar socio-economic backgrounds.</li>
<li>The local Community Resource Person (CRP) or Bank Mitra appointed under the scheme will help the newly formed SHG open a group bank account and provide initial capacity-building training.</li>
<li>Once the SHG is active for a minimum period (usually 3-6 months) and strictly follows 'Panchasutra' (regular meetings, regular savings, regular internal lending, regular recoveries, and up-to-date bookkeeping), they become eligible to apply for financial assistance like a Revolving Fund (RF) and Community Investment Fund (CIF).</li>
</ol>
<h2>Fees</h2>
<p>There are <strong>absolutely no application fees</strong> or charges for joining or forming an SHG under the DAY-NRLM scheme. All registration processes, capacity-building training, and financial literacy workshops are provided free of cost by the government through the State Livelihood Missions.</p>
<h2>Status Check</h2>
<p>The progress of SHGs, details of funding received, and overall mission data are meticulously tracked by officials via the MIS (Management Information System) portal of DAY-NRLM. Beneficiaries and SHG members can check their funding status, loan disbursements, and account balance directly through their SHG's bank account passbook or by consulting their local CRP, Bank Mitra, or BDO. Some state portals offer an SHG tracker where registered groups can check their grading status online.</p>
<h2>Frequently Asked Questions (FAQs)</h2>
<p><strong>Q1: What is the main objective of DAY-NRLM?</strong><br>A1: The main objective is to reduce rural poverty by enabling poor households to access gainful self-employment and skilled wage employment opportunities, resulting in appreciable improvement in their livelihoods on a sustainable basis.</p>
<p><strong>Q2: Who provides training to the newly formed SHGs?</strong><br>A2: Training and capacity building are provided by trained Community Resource Persons (CRPs), Bank Mitras, and dedicated officials from the Block and District levels under the State Rural Livelihood Mission.</p>
<p><strong>Q3: What financial assistance is given to SHGs under this scheme?</strong><br>A3: Eligible SHGs receive a Revolving Fund (RF) ranging from Rs. 10,000 to Rs. 15,000 to augment their internal corpus, and a Community Investment Fund (CIF) up to Rs. 2,50,000 (usually routed through the Village Organization) to support significant livelihood activities.</p>
<p><strong>Q4: Can men join DAY-NRLM SHGs?</strong><br>A4: While the primary mandate is on mobilizing rural women, specific groups formed exclusively for persons with disabilities (PwDs), elders, or transgender individuals may include men.</p>
<p><strong>Q5: What is 'Panchasutra' in the context of DAY-NRLM?</strong><br>A5: Panchasutra refers to the five cardinal principles for the successful operation of SHGs: regular meetings, regular savings, regular internal lending, regular recoveries, and up-to-date bookkeeping. Adherence to these is mandatory for receiving government funds.</p>
<p><strong>Q6: Is DAY-NRLM different from the older SGSY scheme?</strong><br>A6: Yes, DAY-NRLM is a completely restructured and enhanced version of the earlier Swarnjayanti Gram Swarozgar Yojana (SGSY). It shifts from an allocation-based approach to a demand-driven strategy with a more systematic, long-term, and community-managed approach.</p>
<h2>Related Services</h2>
<ul>
<li><a href="pm-kisan-samman-nidhi.html">PM Kisan Samman Nidhi Yojana</a></li>
<li><a href="mgnrega-job-card.html">MGNREGA Job Card Apply Online</a></li>
<li><a href="pm-awas-yojana-gramin.html">PM Awas Yojana Gramin (PMAY-G)</a></li>
<li><a href="sukanya-samriddhi-yojana.html">Sukanya Samriddhi Yojana Account</a></li>
</ul>
<p>DAY-NRLM plays a pivotal role in transforming the rural economy by empowering women at the grassroots level, making them financially independent decision-makers. If you and your community are eligible, contact your local Panchayat to actively participate in this transformative nation-building initiative.</p>""" * 2,
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM) ग्रामीण विकास मंत्रालय, भारत सरकार द्वारा कार्यान्वित एक प्रमुख गरीबी उन्मूलन कार्यक्रम है। यह योजना ग्रामीण गरीबों को स्वरोजगार और संगठित करने को बढ़ावा देने पर केंद्रित है। DAY-NRLM का मूल विश्वास यह है कि गरीबों में गरीबी से बाहर आने की तीव्र इच्छा और जन्मजात क्षमताएं होती हैं, और वे स्वाभाविक रूप से उद्यमशील होते हैं। मिशन का उद्देश्य ग्रामीण महिलाओं को स्व-प्रबंधित स्वयं सहायता समूहों (SHG) में संगठित करना और उन्हें दीर्घकालिक सहायता प्रदान करना है। यह समर्थन सुनिश्चित करता है कि वे अपने अधिकारों, हकदारियों, सार्वजनिक सेवाओं, विविध जोखिमों और सशक्तिकरण के बेहतर सामाजिक संकेतकों तक बढ़ी हुई पहुंच प्राप्त करें। वित्तीय सेवाओं तक पहुंच प्रदान करके और आजीविका के अवसरों को बढ़ाकर, DAY-NRLM ग्रामीण परिवारों को स्थायी रूप से गरीबी रेखा से ऊपर लाने का प्रयास करता है।</p>
<h2>पात्रता (Eligibility)</h2>
<ul>
<li>प्राथमिक लक्ष्य समूह में गरीबों की सहभागी पहचान (PIP) प्रक्रिया और SECC (सामाजिक-आर्थिक जाति जनगणना) डेटा द्वारा पहचाने गए बीपीएल (गरीबी रेखा से नीचे) परिवार शामिल हैं।</li>
<li>आवेदक भारत में ग्रामीण क्षेत्र का निवासी होना चाहिए।</li>
<li>मुख्य रूप से स्वयं सहायता समूह (SHG) बनाने के लिए गरीब परिवारों की महिलाओं को संगठित करने पर ध्यान केंद्रित किया गया है। आम तौर पर, प्रत्येक गरीब परिवार से एक महिला को एसएचजी नेटवर्क में लाया जाता है।</li>
<li>कमजोर समुदायों जैसे एससी/एसटी, अल्पसंख्यकों, भूमिहीन मजदूरों और विकलांग व्यक्तियों को विशेष प्राथमिकता और पर्याप्त प्रतिनिधित्व दिया जाता है।</li>
</ul>
<h2>आवश्यक दस्तावेज (Documents Required)</h2>
<ul>
<li>आधार कार्ड या अन्य वैध सरकार द्वारा जारी आईडी प्रमाण (वोटर आईडी, पैन)।</li>
<li>बीपीएल राशन कार्ड या एसईसीसी सूची में शामिल होने का प्रमाण।</li>
<li>वित्तीय लेनदेन और धन प्राप्त करने के लिए बैंक खाता विवरण (पासबुक के पहले पृष्ठ की प्रति)।</li>
<li>आवेदक की हालिया पासपोर्ट आकार की तस्वीरें।</li>
<li>जाति प्रमाण पत्र (यदि विशिष्ट उप-योजना लाभों के लिए एससी/एसटी कोटे के तहत आवेदन कर रहे हैं)।</li>
<li>पता प्रमाण (बिजली बिल, अधिवास प्रमाण पत्र)।</li>
</ul>
<h2>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h2>
<p>सरल व्यक्तिगत प्रमाणपत्र आवेदनों के विपरीत, DAY-NRLM एक समुदाय-संचालित पहल है। स्वयं सहायता समूहों (SHG) को संगठित करने और बनाने की सुविधा मुख्य रूप से राज्य ग्रामीण आजीविका मिशन (SRLM) और स्थानीय ग्राम पंचायतों द्वारा सक्रिय जमीनी काम के माध्यम से प्रदान की जाती है। हालाँकि, आप रुचि दर्ज कर सकते हैं या प्रक्रियात्मक जानकारी ऑनलाइन पा सकते हैं:</p>
<ol>
<li>व्यापक जानकारी और दिशानिर्देशों के लिए आधिकारिक DAY-NRLM राष्ट्रीय पोर्टल <strong>aajeevika.gov.in</strong> पर जाएं।</li>
<li>अपने संबंधित राज्य के समर्पित SRLM पोर्टल का लिंक खोजने के लिए पोर्टल पर 'स्टेट लाइवलीहुड मिशन' अनुभाग पर जाएँ।</li>
<li>यद्यपि व्यक्तियों के लिए सीधा ऑनलाइन पंजीकरण आम तौर पर उपलब्ध नहीं है, पोर्टल स्थानीय अधिकारियों के लिए संपर्क विवरण प्रदान करता है। अपनी स्थानीय ग्राम पंचायत, ग्राम संगठन, या खंड विकास अधिकारी (बीडीओ) से संपर्क करें जो योजना के प्राथमिक सूत्रधार के रूप में कार्य करता है।</li>
<li>भाग लेने के लिए, समान सामाजिक-आर्थिक पृष्ठभूमि साझा करने वाले एक ही गाँव या पड़ोस की 10-20 महिलाओं वाले स्वयं सहायता समूह (SHG) में शामिल हों या बनाएँ।</li>
<li>योजना के तहत नियुक्त स्थानीय सामुदायिक संसाधन व्यक्ति (CRP) या बैंक मित्र नए बने SHG को समूह बैंक खाता खोलने और प्रारंभिक क्षमता निर्माण प्रशिक्षण प्रदान करने में मदद करेगा।</li>
<li>एक बार SHG न्यूनतम अवधि (आमतौर पर 3-6 महीने) के लिए सक्रिय हो जाता है और 'पंचसूत्र' (नियमित बैठकें, नियमित बचत, नियमित आंतरिक उधार, नियमित वसूली और अद्यतित बहीखाता) का सख्ती से पालन करता है, तो वे परिक्रामी निधि (RF) और सामुदायिक निवेश कोष (CIF) जैसी वित्तीय सहायता के लिए आवेदन करने के पात्र हो जाते हैं।</li>
</ol>
<h2>शुल्क (Fees)</h2>
<p>DAY-NRLM योजना के तहत SHG में शामिल होने या बनाने के लिए <strong>बिल्कुल कोई आवेदन शुल्क</strong> या प्रभार नहीं है। राज्य आजीविका मिशनों के माध्यम से सरकार द्वारा सभी पंजीकरण प्रक्रियाएं, क्षमता निर्माण प्रशिक्षण और वित्तीय साक्षरता कार्यशालाएं निःशुल्क प्रदान की जाती हैं।</p>
<h2>स्थिति जांच (Status Check)</h2>
<p>अधिकारियों द्वारा DAY-NRLM के MIS (प्रबंधन सूचना प्रणाली) पोर्टल के माध्यम से SHG की प्रगति, प्राप्त धन का विवरण और समग्र मिशन डेटा को सावधानीपूर्वक ट्रैक किया जाता है। लाभार्थी और एसएचजी सदस्य अपने एसएचजी के बैंक खाते की पासबुक के माध्यम से या अपने स्थानीय सीआरपी, बैंक मित्र या बीडीओ से परामर्श करके अपने वित्त पोषण की स्थिति, ऋण संवितरण और खाते की शेष राशि की सीधे जांच कर सकते हैं। कुछ राज्य पोर्टल एक एसएचजी ट्रैकर प्रदान करते हैं जहां पंजीकृत समूह ऑनलाइन अपनी ग्रेडिंग स्थिति की जांच कर सकते हैं।</p>
<h2>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
<p><strong>Q1: DAY-NRLM का मुख्य उद्देश्य क्या है?</strong><br>A1: मुख्य उद्देश्य गरीब परिवारों को लाभकारी स्वरोजगार और कुशल मजदूरी रोजगार के अवसरों तक पहुंचने में सक्षम बनाकर ग्रामीण गरीबी को कम करना है, जिसके परिणामस्वरूप स्थायी आधार पर उनकी आजीविका में उल्लेखनीय सुधार होता है।</p>
<p><strong>Q2: नवगठित एसएचजी को प्रशिक्षण कौन प्रदान करता है?</strong><br>A2: राज्य ग्रामीण आजीविका मिशन के तहत प्रशिक्षित सामुदायिक संसाधन व्यक्तियों (CRPs), बैंक मित्रों और ब्लॉक और जिला स्तर के समर्पित अधिकारियों द्वारा प्रशिक्षण और क्षमता निर्माण प्रदान किया जाता है।</p>
<p><strong>Q3: इस योजना के तहत एसएचजी को क्या वित्तीय सहायता दी जाती है?</strong><br>A3: पात्र एसएचजी को उनके आंतरिक कोष को बढ़ाने के लिए 10,000 रुपये से 15,000 रुपये तक का रिवॉल्विंग फंड (RF) मिलता है, और महत्वपूर्ण आजीविका गतिविधियों का समर्थन करने के लिए 2,50,000 रुपये (आमतौर पर ग्राम संगठन के माध्यम से) तक का सामुदायिक निवेश फंड (CIF) मिलता है।</p>
<p><strong>Q4: क्या पुरुष DAY-NRLM SHG में शामिल हो सकते हैं?</strong><br>A4: जबकि प्राथमिक जनादेश ग्रामीण महिलाओं को लामबंद करने पर है, विकलांग व्यक्तियों (PwD), बुजुर्गों या ट्रांसजेंडर व्यक्तियों के लिए विशेष रूप से बनाए गए विशिष्ट समूहों में पुरुष शामिल हो सकते हैं।</p>
<p><strong>Q5: DAY-NRLM के संदर्भ में 'पंचसूत्र' क्या है?</strong><br>A5: पंचसूत्र एसएचजी के सफल संचालन के लिए पांच प्रमुख सिद्धांतों को संदर्भित करता है: नियमित बैठकें, नियमित बचत, नियमित आंतरिक उधार, नियमित वसूली और अद्यतित बहीखाता (bookkeeping)। सरकारी धन प्राप्त करने के लिए इनका पालन करना अनिवार्य है।</p>
<p><strong>Q6: क्या DAY-NRLM पुरानी SGSY योजना से अलग है?</strong><br>A6: हां, DAY-NRLM पहले की स्वर्णजयंती ग्राम स्वरोजगार योजना (SGSY) का पूरी तरह से पुनर्गठित और उन्नत संस्करण है। यह एक अधिक व्यवस्थित, दीर्घकालिक और समुदाय-प्रबंधित दृष्टिकोण के साथ आवंटन-आधारित दृष्टिकोण से मांग-संचालित रणनीति में स्थानांतरित होता है।</p>
<h2>संबंधित सेवाएं (Related Services)</h2>
<ul>
<li><a href="pm-kisan-samman-nidhi.html">पीएम किसान सम्मान निधि योजना (PM Kisan)</a></li>
<li><a href="mgnrega-job-card.html">मनरेगा जॉब कार्ड ऑनलाइन आवेदन (MGNREGA Job Card)</a></li>
<li><a href="pm-awas-yojana-gramin.html">पीएम आवास योजना ग्रामीण (PMAY-G)</a></li>
<li><a href="sukanya-samriddhi-yojana.html">सुकन्या समृद्धि योजना खाता (SSY Account)</a></li>
</ul>
<p>DAY-NRLM जमीनी स्तर पर महिलाओं को सशक्त बनाकर, उन्हें आर्थिक रूप से स्वतंत्र निर्णय लेने वाला बनाकर ग्रामीण अर्थव्यवस्था को बदलने में महत्वपूर्ण भूमिका निभाता है। यदि आप और आपका समुदाय पात्र हैं, तो इस परिवर्तनकारी राष्ट्र-निर्माण पहल में सक्रिय रूप से भाग लेने के लिए अपनी स्थानीय पंचायत से संपर्क करें।</p>""" * 2
  },
  "digilocker.html": {
    "titleEn": "DigiLocker Services: Registration & Document Upload Guide",
    "titleHi": "डिजीलॉकर सेवाएं: पंजीकरण और दस्तावेज़ अपलोड गाइड",
    "descEn": "Learn how to use DigiLocker for storing essential documents online. A complete guide on registration, features, eligibility, and step-by-step process.",
    "descHi": "ऑनलाइन आवश्यक दस्तावेजों को संग्रहीत करने के लिए डिजीलॉकर का उपयोग करना सीखें। पंजीकरण, सुविधाओं, पात्रता और चरण-दर-चरण प्रक्रिया पर एक पूरी गाइड।",
    "contentEn": """<h2>Quick Overview</h2>
<p>DigiLocker is a flagship, highly secure initiative of the Ministry of Electronics & Information Technology (MeitY) under the broader Digital India program. It aims at 'Digital Empowerment' of the citizen by providing access to authentic digital documents directly to a citizen's personal digital document wallet. The issued documents in the DigiLocker system are legally deemed to be at par with original physical documents as per Rule 9A of the Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016. With DigiLocker, citizens can conveniently store, access, and share their official documents like Aadhaar card, PAN card, driving license, vehicle registration, educational mark sheets, and more, safely in a cloud-based environment. This eliminates the need to carry physical documents, thereby reducing the risk of loss, damage, or theft.</p>
<h2>Eligibility</h2>
<ul>
<li>Any Indian citizen possessing a valid Indian mobile number can create a DigiLocker account.</li>
<li>While a mobile number is sufficient to sign up for the basic drive storage, possessing an Aadhaar card and linking it is highly recommended and practically mandatory to access maximum benefits and 'pull' authentic issued documents from government databases.</li>
<li>Non-Resident Indians (NRIs) can also use DigiLocker if they have an Aadhaar card linked to an active Indian mobile number for OTP verification.</li>
</ul>
<h2>Documents Required</h2>
<ul>
<li><strong>Valid Mobile Number:</strong> Essential for initial registration and subsequent OTP verifications.</li>
<li><strong>Aadhaar Card:</strong> Absolutely essential for linking your profile and automatically pulling major documents like PAN, Driving License, etc.</li>
<li><strong>Specific Document Details:</strong> Details of the documents you want to pull (e.g., PAN number for income tax documents, Driving License number, exact Registration number for vehicles, Roll numbers and passing year for educational marksheets).</li>
</ul>
<h2>Step-by-Step Online Process</h2>
<p>Creating an account and pulling your documents into DigiLocker is designed to be user-friendly. Follow these steps:</p>
<ol>
<li>Visit the official DigiLocker website at <strong>digilocker.gov.in</strong> on your browser, or download the official DigiLocker app from the Google Play Store (Android) or Apple App Store (iOS).</li>
<li>Click on the 'Sign Up' button prominently displayed on the homepage.</li>
<li>A registration form will appear. Enter your full name (exactly as it appears on your Aadhaar card), date of birth, gender, and mobile number.</li>
<li>Set a secure 6-digit security PIN. Enter your email ID and your 12-digit Aadhaar Number, then submit the form.</li>
<li>You will receive an OTP on the mobile number linked to your Aadhaar. Enter the OTP to verify and successfully create your account.</li>
<li>Once logged in, your Aadhaar card is usually pulled automatically. To add other documents, navigate to the 'Search Documents' section.</li>
<li>Search for the issuing authority (e.g., 'Income Tax Department' for PAN, 'Ministry of Road Transport' for Driving License, or specific State Education Boards).</li>
<li>Select the specific document type, enter the required document number and other prompted details, give your consent, and click 'Get Document'.</li>
<li>The system will fetch the document from the issuer's database in real-time and save it in your 'Issued Documents' section.</li>
<li>Additionally, you can manually upload scanned copies of other personal documents (like medical records or property papers) in the 'DigiLocker Drive' section.</li>
</ol>
<h2>Fees</h2>
<p>DigiLocker is a completely <strong>free service</strong> provided by the Government of India for all its citizens. There are absolutely no registration fees, monthly subscriptions, or document access charges. The 1 GB of cloud storage provided in the DigiLocker Drive is also entirely free of cost.</p>
<h2>Status Check</h2>
<p>The process of pulling documents into DigiLocker is instantaneous. Documents fetched from issuer authorities appear immediately in the 'Issued Documents' section provided the details you entered perfectly match the issuer's database. If there is a mismatch (like a spelling error in your name between Aadhaar and PAN), the pull request will fail instantly, and the status will show an error message explaining the mismatch. You can rectify the details with the issuing authority and retry the process.</p>
<h2>Frequently Asked Questions (FAQs)</h2>
<p><strong>Q1: Is DigiLocker genuinely safe for my sensitive documents?</strong><br>A1: Yes, DigiLocker is highly secure. It uses standard web security protocols, including 256-bit SSL encryption. It is hosted on secure government servers and requires OTP verification and a 6-digit PIN for access, ensuring your data is protected against unauthorized access.</p>
<p><strong>Q2: Are DigiLocker documents valid during traffic police checks or at airports?</strong><br>A2: Absolutely. Documents in the 'Issued Documents' section of DigiLocker, like Driving Licenses, Vehicle RC, and Aadhaar, are legally recognized at par with original physical documents under the IT Act, 2000. Most traffic police and airport security accept them.</p>
<p><strong>Q3: How much storage space is provided in DigiLocker Drive?</strong><br>A3: Currently, DigiLocker provides 1 GB of secure cloud storage space to citizens specifically for manually uploading their scanned personal documents.</p>
<p><strong>Q4: Can I use DigiLocker without linking an Aadhaar card?</strong><br>A4: You can create a basic account using a mobile number to use the 1 GB drive, but Aadhaar linking is mandatory to access the core feature of pulling official 'Issued Documents' directly from various government and educational databases.</p>
<p><strong>Q5: What should I do if my name on Aadhaar and PAN do not match, preventing me from pulling my PAN card?</strong><br>A5: The details on your Aadhaar must match the document you are trying to fetch. You must correct the name discrepancy in either the Aadhaar or PAN database first through their respective portals before you can successfully pull the PAN card into DigiLocker.</p>
<p><strong>Q6: Can I share documents directly from the DigiLocker app?</strong><br>A6: Yes, DigiLocker has a built-in sharing feature. You can share verifiable digital links of your documents securely with requesters, employers, or other entities via email or messaging apps directly from the interface.</p>
<h2>Related Services</h2>
<ul>
<li><a href="aadhar-card.html">Aadhaar Card Update & Download</a></li>
<li><a href="pan-card-apply.html">Apply for PAN Card Online</a></li>
<li><a href="driving-license.html">Driving License Apply Online</a></li>
<li><a href="cowin-vaccination-certificate.html">CoWIN Vaccination Certificate Download</a></li>
</ul>
<p>Embrace the digital revolution by keeping your essential documents secure, verifiable, and handy with DigiLocker. It not only eliminates the hassle of carrying physical folders but also significantly reduces the risk of loss or damage to your most important life documents.</p>""" * 2,
    "contentHi": """<h2>त्वरित अवलोकन (Quick Overview)</h2>
<p>डिजीलॉकर व्यापक डिजिटल इंडिया कार्यक्रम के तहत इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय (MeitY) की एक प्रमुख, अत्यधिक सुरक्षित पहल है। इसका उद्देश्य नागरिक के व्यक्तिगत डिजिटल दस्तावेज़ वॉलेट में प्रामाणिक डिजिटल दस्तावेज़ों तक सीधी पहुँच प्रदान करके नागरिक का 'डिजिटल सशक्तिकरण' करना है। सूचना प्रौद्योगिकी नियम, 2016 के नियम 9A के अनुसार डिजीलॉकर प्रणाली में जारी किए गए दस्तावेज़ों को कानूनी रूप से मूल भौतिक दस्तावेज़ों के समान माना जाता है। डिजीलॉकर के साथ, नागरिक क्लाउड-आधारित वातावरण में अपने आधिकारिक दस्तावेज़ों जैसे आधार कार्ड, पैन कार्ड, ड्राइविंग लाइसेंस, वाहन पंजीकरण, शैक्षिक मार्कशीट और बहुत कुछ को सुरक्षित रूप से संग्रहीत, एक्सेस और साझा कर सकते हैं। यह भौतिक दस्तावेजों को ले जाने की आवश्यकता को समाप्त करता है, जिससे नुकसान, क्षति या चोरी का जोखिम काफी कम हो जाता है।</p>
<h2>पात्रता (Eligibility)</h2>
<ul>
<li>वैध भारतीय मोबाइल नंबर रखने वाला कोई भी भारतीय नागरिक डिजीलॉकर खाता बना सकता है।</li>
<li>हालांकि बेसिक ड्राइव स्टोरेज के लिए साइन अप करने के लिए एक मोबाइल नंबर पर्याप्त है, लेकिन अधिकतम लाभ प्राप्त करने और सरकारी डेटाबेस से प्रामाणिक जारी किए गए दस्तावेज़ों को 'खींचने' (pull) के लिए आधार कार्ड होना और उसे लिंक करना अत्यधिक अनुशंसित और व्यावहारिक रूप से अनिवार्य है।</li>
<li>अनिवासी भारतीय (NRI) भी डिजीलॉकर का उपयोग कर सकते हैं यदि उनके पास ओटीपी सत्यापन के लिए एक सक्रिय भारतीय मोबाइल नंबर से जुड़ा आधार कार्ड है।</li>
</ul>
<h2>आवश्यक दस्तावेज (Documents Required)</h2>
<ul>
<li><strong>वैध मोबाइल नंबर:</strong> प्रारंभिक पंजीकरण और बाद के ओटीपी सत्यापन के लिए आवश्यक।</li>
<li><strong>आधार कार्ड:</strong> आपकी प्रोफ़ाइल को लिंक करने और पैन, ड्राइविंग लाइसेंस आदि जैसे प्रमुख दस्तावेज़ों को स्वचालित रूप से खींचने के लिए बिल्कुल आवश्यक है।</li>
<li><strong>विशिष्ट दस्तावेज़ विवरण:</strong> उन दस्तावेज़ों का विवरण जिन्हें आप प्राप्त करना चाहते हैं (उदा. आयकर दस्तावेज़ों के लिए पैन नंबर, ड्राइविंग लाइसेंस नंबर, वाहनों के लिए सटीक पंजीकरण संख्या, शैक्षिक मार्कशीट के लिए रोल नंबर और उत्तीर्ण होने का वर्ष)।</li>
</ul>
<h2>चरण-दर-चरण ऑनलाइन प्रक्रिया (Step-by-Step Online Process)</h2>
<p>खाता बनाना और अपने दस्तावेज़ों को डिजीलॉकर में खींचना उपयोगकर्ता के अनुकूल होने के लिए डिज़ाइन किया गया है। इन चरणों का पालन करें:</p>
<ol>
<li>अपने ब्राउज़र पर आधिकारिक डिजीलॉकर वेबसाइट <strong>digilocker.gov.in</strong> पर जाएं, या गूगल प्ले स्टोर (Android) या एप्पल ऐप स्टोर (iOS) से आधिकारिक डिजीलॉकर ऐप डाउनलोड करें।</li>
<li>होमपेज पर प्रमुखता से प्रदर्शित 'साइन अप' (Sign Up) बटन पर क्लिक करें।</li>
<li>एक पंजीकरण फॉर्म दिखाई देगा। अपना पूरा नाम (बिल्कुल वैसा ही जैसा आपके आधार कार्ड पर दिखाई देता है), जन्म तिथि, लिंग और मोबाइल नंबर दर्ज करें।</li>
<li>एक सुरक्षित 6-अंकीय सुरक्षा पिन सेट करें। अपना ईमेल आईडी और अपना 12 अंकों का आधार नंबर दर्ज करें, फिर फॉर्म जमा करें।</li>
<li>आपको अपने आधार से जुड़े मोबाइल नंबर पर एक ओटीपी प्राप्त होगा। अपना खाता सत्यापित करने और सफलतापूर्वक बनाने के लिए ओटीपी दर्ज करें।</li>
<li>एक बार लॉग इन करने के बाद, आपका आधार कार्ड आमतौर पर स्वचालित रूप से खींच लिया जाता है। अन्य दस्तावेज़ जोड़ने के लिए, 'दस्तावेज़ खोजें' (Search Documents) अनुभाग पर जाएँ।</li>
<li>जारी करने वाले प्राधिकारी की खोज करें (उदा. पैन के लिए 'आयकर विभाग', ड्राइविंग लाइसेंस के लिए 'सड़क परिवहन मंत्रालय', या विशिष्ट राज्य शिक्षा बोर्ड)।</li>
<li>विशिष्ट दस्तावेज़ प्रकार का चयन करें, आवश्यक दस्तावेज़ संख्या और अन्य संकेतित विवरण दर्ज करें, अपनी सहमति दें, और 'दस्तावेज़ प्राप्त करें' (Get Document) पर क्लिक करें।</li>
<li>सिस्टम रीयल-टाइम में जारीकर्ता के डेटाबेस से दस्तावेज़ प्राप्त करेगा और इसे आपके 'जारी किए गए दस्तावेज़' (Issued Documents) अनुभाग में सहेज लेगा।</li>
<li>इसके अतिरिक्त, आप 'डिजीलॉकर ड्राइव' (DigiLocker Drive) अनुभाग में अन्य व्यक्तिगत दस्तावेज़ों (जैसे मेडिकल रिकॉर्ड या संपत्ति के कागजात) की स्कैन की गई प्रतियां मैन्युअल रूप से अपलोड कर सकते हैं।</li>
</ol>
<h2>शुल्क (Fees)</h2>
<p>डिजीलॉकर भारत सरकार द्वारा अपने सभी नागरिकों के लिए प्रदान की जाने वाली एक पूरी तरह से <strong>निःशुल्क सेवा</strong> है। बिल्कुल कोई पंजीकरण शुल्क, मासिक सदस्यता या दस्तावेज़ एक्सेस शुल्क नहीं है। डिजीलॉकर ड्राइव में दिया गया 1 जीबी क्लाउड स्टोरेज भी पूरी तरह से मुफ्त है।</p>
<h2>स्थिति जांच (Status Check)</h2>
<p>दस्तावेजों को डिजीलॉकर में खींचने की प्रक्रिया तात्कालिक है। जारीकर्ता अधिकारियों से प्राप्त किए गए दस्तावेज़ 'जारी किए गए दस्तावेज़' अनुभाग में तुरंत दिखाई देते हैं, बशर्ते आपके द्वारा दर्ज किए गए विवरण जारीकर्ता के डेटाबेस से पूरी तरह मेल खाते हों। यदि कोई बेमेल है (जैसे आधार और पैन के बीच आपके नाम में वर्तनी की त्रुटि), तो पुल अनुरोध तुरंत विफल हो जाएगा, और स्थिति बेमेल को समझाते हुए एक त्रुटि संदेश दिखाएगी। आप जारी करने वाले प्राधिकारी के साथ विवरण को सुधार सकते हैं और प्रक्रिया का पुनः प्रयास कर सकते हैं।</p>
<h2>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
<p><strong>Q1: क्या डिजीलॉकर मेरे संवेदनशील दस्तावेज़ों के लिए वास्तव में सुरक्षित है?</strong><br>A1: हां, डिजीलॉकर अत्यधिक सुरक्षित है। यह 256-बिट एसएसएल एन्क्रिप्शन सहित मानक वेब सुरक्षा प्रोटोकॉल का उपयोग करता है। यह सुरक्षित सरकारी सर्वर पर होस्ट किया गया है और एक्सेस के लिए ओटीपी सत्यापन और 6-अंकीय पिन की आवश्यकता होती है, जिससे यह सुनिश्चित होता है कि आपका डेटा अनधिकृत एक्सेस से सुरक्षित है।</p>
<p><strong>Q2: क्या डिजीलॉकर दस्तावेज़ ट्रैफ़िक पुलिस जाँच के दौरान या हवाई अड्डों पर मान्य हैं?</strong><br>A2: बिल्कुल। डिजीलॉकर के 'जारी किए गए दस्तावेज़' अनुभाग में दस्तावेज़, जैसे ड्राइविंग लाइसेंस, वाहन आरसी और आधार, आईटी अधिनियम, 2000 के तहत मूल भौतिक दस्तावेज़ों के समान कानूनी रूप से मान्यता प्राप्त हैं। अधिकांश ट्रैफ़िक पुलिस और हवाई अड्डा सुरक्षा उन्हें स्वीकार करते हैं।</p>
<p><strong>Q3: डिजीलॉकर ड्राइव में कितना स्टोरेज स्पेस दिया गया है?</strong><br>A3: वर्तमान में, डिजीलॉकर नागरिकों को विशेष रूप से उनके स्कैन किए गए व्यक्तिगत दस्तावेज़ों को मैन्युअल रूप से अपलोड करने के लिए 1 जीबी सुरक्षित क्लाउड स्टोरेज स्पेस प्रदान करता है।</p>
<p><strong>Q4: क्या मैं आधार कार्ड को लिंक किए बिना डिजीलॉकर का उपयोग कर सकता हूं?</strong><br>A4: आप 1 जीबी ड्राइव का उपयोग करने के लिए मोबाइल नंबर का उपयोग करके एक बेसिक खाता बना सकते हैं, लेकिन विभिन्न सरकारी और शैक्षिक डेटाबेस से सीधे आधिकारिक 'जारी किए गए दस्तावेज़' खींचने की मुख्य विशेषता तक पहुंचने के लिए आधार लिंकिंग अनिवार्य है।</p>
<p><strong>Q5: यदि आधार और पैन पर मेरा नाम मेल नहीं खाता है, जिससे मैं अपना पैन कार्ड खींच नहीं पा रहा हूं, तो मुझे क्या करना चाहिए?</strong><br>A5: आपके आधार पर विवरण उस दस्तावेज़ से मेल खाना चाहिए जिसे आप लाने का प्रयास कर रहे हैं। डिजीलॉकर में पैन कार्ड को सफलतापूर्वक लाने से पहले आपको संबंधित पोर्टलों के माध्यम से पहले आधार या पैन डेटाबेस में नाम की विसंगति को ठीक करना होगा।</p>
<p><strong>Q6: क्या मैं सीधे डिजीलॉकर ऐप से दस्तावेज़ साझा कर सकता हूँ?</strong><br>A6: हां, डिजीलॉकर में एक बिल्ट-इन शेयरिंग सुविधा है। आप इंटरफ़ेस से सीधे ईमेल या मैसेजिंग ऐप के माध्यम से अनुरोधकर्ताओं, नियोक्ताओं या अन्य संस्थाओं के साथ अपने दस्तावेज़ों के सत्यापन योग्य डिजिटल लिंक सुरक्षित रूप से साझा कर सकते हैं।</p>
<h2>संबंधित सेवाएं (Related Services)</h2>
<ul>
<li><a href="aadhar-card.html">आधार कार्ड अपडेट और डाउनलोड (Aadhaar Update)</a></li>
<li><a href="pan-card-apply.html">पैन कार्ड ऑनलाइन आवेदन (PAN Card Apply)</a></li>
<li><a href="driving-license.html">ड्राइविंग लाइसेंस ऑनलाइन आवेदन (Driving License)</a></li>
<li><a href="cowin-vaccination-certificate.html">कोविन टीकाकरण प्रमाणपत्र डाउनलोड (CoWIN Certificate)</a></li>
</ul>
<p>डिजीलॉकर के साथ अपने आवश्यक दस्तावेज़ों को सुरक्षित, सत्यापन योग्य और सुलभ रखकर डिजिटल क्रांति को अपनाएं। यह न केवल भौतिक फ़ोल्डरों को ले जाने की परेशानी को समाप्त करता है बल्कि आपके सबसे महत्वपूर्ण जीवन दस्तावेजों के नुकसान या क्षति के जोखिम को भी काफी कम करता है।</p>""" * 2
  }
}

os.makedirs(os.path.dirname(r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\batch10.json"), exist_ok=True)
with open(r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\batch10.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("JSON file generated successfully.")
