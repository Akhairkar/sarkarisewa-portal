const fs = require('fs');
const path = require('path');

const itrContentEn = `<h2>Complete Guide to ITR Late Filing Penalties (Section 234A, 234B, 234C, 234F)</h2>
<p>Filing your Income Tax Return (ITR) before the due date—which is typically July 31st of the assessment year for individual taxpayers not requiring an audit—is an essential financial responsibility. Missing this crucial deadline not only delays any potential tax refunds you might be owed but also attracts severe financial penalties and interest under the Income Tax Act, 1961. The Income Tax Department has strictly outlined the consequences of delayed filing to encourage timely compliance. Our advanced ITR Penalty and Late Fee Calculator is specifically designed to help you determine the exact financial implications of filing your return after the deadline, empowering you to clear your tax dues accurately and without any surprises.</p>

<h3>Understanding the Late Filing Fee Under Section 234F</h3>
<p>Introduced in the Union Budget 2017, Section 234F mandates a flat late fee if you fail to file your ITR by the specified due date. The penalty structure is designed to be progressive based on your total income, ensuring fairness while penalizing non-compliance:</p>
<ul>
  <li><strong>Zero Penalty (Basic Exemption Limit):</strong> If your total taxable income is below the basic exemption limit (currently ₹2.5 Lakhs under the old tax regime and ₹3 Lakhs under the new tax regime), you are generally not required to file an ITR, and consequently, no late fee is levied under Section 234F.</li>
  <li><strong>Penalty of ₹1,000:</strong> If your total annual income exceeds the basic exemption limit but does not exceed ₹5,00,000, the maximum late fee you can be charged is capped at ₹1,000. This provides a concession for small taxpayers.</li>
  <li><strong>Penalty of ₹5,000:</strong> If your total annual taxable income exceeds ₹5,00,000, and you file your return after the due date (but on or before December 31st of the assessment year), a strict late fee of ₹5,000 is applicable. Note that a belated return can only be filed up to December 31st of the relevant assessment year.</li>
</ul>

<h3>Penal Interest on Outstanding Tax (Sections 234A, 234B, 234C)</h3>
<p>In addition to the flat late filing fee under Section 234F, the government charges penal interest on any outstanding tax liability. This is where delays can become exceptionally expensive, as the interest compounds quickly:</p>

<h4>Section 234A: Delay in Filing ITR</h4>
<p>If you have any outstanding tax liability (tax payable after TDS, TCS, and advance tax) and you file your ITR after the original deadline, simple interest is charged under Section 234A. The rate is 1% per month or part of a month on the unpaid tax amount. The calculation of this interest begins from the day immediately following the due date and continues until the actual date of filing.</p>

<h4>Section 234B: Default in Payment of Advance Tax</h4>
<p>If your total estimated tax liability for the financial year exceeds ₹10,000, you are legally required to pay Advance Tax. If you fail to pay advance tax altogether, or if the advance tax paid by you is less than 90% of your assessed tax by March 31st, interest under Section 234B is levied. The interest rate is 1% per month or part of a month on the shortfall, calculated from April 1st of the assessment year until the date the tax is paid.</p>

<h4>Section 234C: Shortfall in Advance Tax Installments</h4>
<p>Advance tax is not meant to be paid in a lump sum; it must be paid in specific quarterly installments (15% by June 15th, 45% by September 15th, 75% by December 15th, and 100% by March 15th). If you fall short of these specific percentages at any stage, Section 234C imposes an additional interest of 1% per month for the period of default (usually 3 months per missed installment).</p>

<h3>How to Avoid Penalties</h3>
<p>The best way to avoid these penalties is proactive financial planning. Keep all your documents—Form 16, Form 26AS, AIS (Annual Information Statement), and TIS (Taxpayer Information Summary)—ready well before July. Pay your advance tax installments on time if applicable, and always file your ITR before the July 31st deadline. If you have already missed the deadline, use our calculator to estimate your exact dues, pay the outstanding tax along with the Section 234 interest via Challan 280, and file your belated return immediately to minimize further interest accumulation.</p>`;

const itrContentHi = `<h2>ITR लेट फाइलिंग पेनल्टी और लेट फीस की पूरी जानकारी (धारा 234A, 234B, 234C, 234F)</h2>
<p>अपना इनकम टैक्स रिटर्न (ITR) अंतिम तिथि (जो कि आमतौर पर व्यक्तिगत करदाताओं के लिए 31 जुलाई होती है) से पहले फाइल करना एक बहुत ही महत्वपूर्ण वित्तीय जिम्मेदारी है। इस डेडलाइन को मिस करने पर न केवल आपके संभावित टैक्स रिफंड में देरी होती है, बल्कि आयकर अधिनियम, 1961 के तहत आपको भारी लेट फीस और दंडात्मक ब्याज (Penal Interest) का भी सामना करना पड़ता है। आयकर विभाग ने समय पर रिटर्न दाखिल करने को प्रोत्साहित करने के लिए देरी से फाइल करने के परिणामों को बहुत सख्ती से लागू किया है। हमारा यह उन्नत ITR पेनल्टी और लेट फीस कैलकुलेटर विशेष रूप से आपको यह जानने में मदद करने के लिए डिज़ाइन किया गया है कि डेडलाइन के बाद फाइल करने पर आप पर कितना वित्तीय बोझ पड़ेगा, ताकि आप बिना किसी परेशानी के अपना टैक्स चुका सकें।</p>

<h3>धारा 234F के तहत लेट फाइलिंग फीस (Late Fee) को समझें</h3>
<p>केंद्रीय बजट 2017 में पेश की गई धारा 234F के अनुसार, यदि आप नियत तिथि तक ITR दाखिल करने में विफल रहते हैं, तो आप पर एक निश्चित लेट फीस लगाई जाती है। जुर्माने की यह संरचना आपकी कुल आय के आधार पर तय की गई है, ताकि छोटे करदाताओं पर अनुचित बोझ न पड़े:</p>
<ul>
  <li><strong>शून्य (Zero) जुर्माना:</strong> यदि आपकी कुल कर योग्य आय बेसिक छूट सीमा (पुरानी कर व्यवस्था में ₹2.5 लाख और नई व्यवस्था में ₹3 लाख) से कम है, तो आमतौर पर आपको ITR दाखिल करने की आवश्यकता नहीं होती है, और इसलिए धारा 234F के तहत कोई लेट फीस नहीं लगती है।</li>
  <li><strong>₹1,000 का जुर्माना:</strong> यदि आपकी कुल वार्षिक आय बेसिक छूट सीमा से अधिक है लेकिन ₹5,00,000 से अधिक नहीं है, तो आप पर अधिकतम लेट फीस ₹1,000 ही लगाई जा सकती है। यह छोटे करदाताओं के लिए एक राहत है।</li>
  <li><strong>₹5,000 का जुर्माना:</strong> यदि आपकी कुल वार्षिक आय ₹5,00,000 से अधिक है और आप नियत तिथि के बाद (लेकिन असेसमेंट ईयर के 31 दिसंबर से पहले) रिटर्न फाइल करते हैं, तो आपको ₹5,000 की सख्त लेट फीस देनी होगी। ध्यान दें कि अब बिलेटेड रिटर्न (Belated Return) केवल असेसमेंट ईयर के 31 दिसंबर तक ही दाखिल किया जा सकता है।</li>
</ul>

<h3>बकाया टैक्स पर दंडात्मक ब्याज (धारा 234A, 234B, 234C)</h3>
<p>धारा 234F के तहत फिक्स फीस के अलावा, सरकार किसी भी बकाया टैक्स देनदारी पर दंडात्मक ब्याज भी वसूलती है। यहीं पर देरी सबसे महंगी साबित होती है, क्योंकि ब्याज बहुत तेज़ी से बढ़ता है:</p>

<h4>धारा 234A: ITR फाइल करने में देरी</h4>
<p>यदि आप पर कोई टैक्स बकाया है (TDS और एडवांस टैक्स के बाद भुगतान योग्य कर) और आप डेडलाइन के बाद ITR फाइल करते हैं, तो धारा 234A के तहत साधारण ब्याज लगाया जाता है। यह ब्याज बकाया टैक्स राशि पर 1% प्रति माह (या महीने के किसी भी हिस्से के लिए पूरा 1%) की दर से लगता है। इस ब्याज की गणना अंतिम तिथि के ठीक अगले दिन से शुरू होती है और तब तक चलती है जब तक आप वास्तव में ITR फाइल नहीं कर देते।</p>

<h4>धारा 234B: एडवांस टैक्स चुकाने में चूक</h4>
<p>यदि वित्तीय वर्ष के लिए आपकी कुल अनुमानित टैक्स देनदारी ₹10,000 से अधिक है, तो कानूनी रूप से आपको एडवांस टैक्स (Advance Tax) चुकाना अनिवार्य है। यदि आप एडवांस टैक्स बिल्कुल नहीं चुकाते हैं, या 31 मार्च तक चुकाया गया एडवांस टैक्स आपकी कुल देनदारी के 90% से कम है, तो धारा 234B के तहत ब्याज लगता है। यह ब्याज असेसमेंट ईयर के 1 अप्रैल से टैक्स चुकाने की तारीख तक बकाया राशि पर 1% प्रति माह की दर से लगाया जाता है।</p>

<h4>धारा 234C: एडवांस टैक्स किश्तों में कमी</h4>
<p>एडवांस टैक्स को एकमुश्त नहीं चुकाना होता है; इसे विशिष्ट तिमाही किश्तों (15 जून तक 15%, 15 सितंबर तक 45%, 15 दिसंबर तक 75% और 15 मार्च तक 100%) में चुकाना अनिवार्य है। यदि आप किसी भी चरण में इन निर्धारित प्रतिशतों से कम टैक्स जमा करते हैं, तो धारा 234C के तहत चूक की अवधि के लिए (आमतौर पर प्रति छूटी हुई किश्त के लिए 3 महीने) 1% प्रति माह का अतिरिक्त ब्याज लगाया जाता है।</p>

<h3>जुर्माने से कैसे बचें?</h3>
<p>इन जुर्मानों से बचने का सबसे अच्छा तरीका सक्रिय वित्तीय योजना है। जुलाई से बहुत पहले अपने सभी दस्तावेज़—फॉर्म 16, फॉर्म 26AS, AIS (वार्षिक सूचना विवरण) और TIS—तैयार रखें। यदि लागू हो तो अपनी एडवांस टैक्स की किश्तें समय पर चुकाएं, और हमेशा 31 जुलाई की डेडलाइन से पहले अपना ITR फाइल करें। यदि आप पहले ही डेडलाइन मिस कर चुके हैं, तो अपने सटीक बकाए का अनुमान लगाने के लिए हमारे कैलकुलेटर का उपयोग करें, चालान 280 के माध्यम से धारा 234 के ब्याज के साथ बकाया टैक्स का भुगतान करें, और आगे के ब्याज से बचने के लिए तुरंत अपना बिलेटेड रिटर्न दाखिल करें।</p>`;

const panContentEn = `<h2>Complete Guide to Resolving PAN-Aadhaar Mismatches Quickly</h2>
<p>Linking your Permanent Account Number (PAN) with your Aadhaar card is now a mandatory requirement for all eligible Indian taxpayers, as directed by the Central Board of Direct Taxes (CBDT) and the Income Tax Department. While the linking process on the e-Filing portal is generally straightforward, millions of citizens encounter frustrating errors where the linking fails. The most common culprit is a mismatch in demographic details—specifically your Name, Date of Birth (DOB), or Gender—between the two crucial documents. Our interactive PAN Aadhaar Name/DOB Conflict Resolver tool is meticulously designed to help you diagnose the exact cause of the failure and provides a clear, step-by-step resolution pathway to fix it without hassle.</p>

<h3>Why Do PAN-Aadhaar Conflicts Occur?</h3>
<p>The Income Tax Department’s linking portal uses an automated system that cross-verifies the demographic details you provide with the UIDAI (Aadhaar) database. For the link to be successful, there must be a 100% exact match. Mismatches typically occur due to the following reasons:</p>
<ul>
  <li><strong>Spelling Errors & Typos:</strong> Even a single misplaced letter (e.g., 'Kapur' vs 'Kapoor') will cause the validation to fail.</li>
  <li><strong>Initials vs. Full Names:</strong> If your Aadhaar card displays initials (e.g., 'R. K. Sharma') while your PAN card displays your full expanded name ('Raj Kumar Sharma'), the system will reject the linking request. Both documents must follow the same naming convention.</li>
  <li><strong>Date of Birth Discrepancies:</strong> Older Aadhaar cards often printed only the Year of Birth (e.g., '1985') instead of the full Date of Birth (e.g., '12-04-1985'). If your PAN has the full DOB, the mismatch will prevent linking.</li>
  <li><strong>Gender Mismatches:</strong> Errors during data entry at enrollment centers sometimes result in the wrong gender being printed, leading to an immediate mismatch error.</li>
</ul>

<h3>Step-by-Step Resolution Process</h3>
<p>If you encounter a mismatch error, you cannot force the linking process. You must first correct the document that contains the erroneous information so that both documents mirror each other perfectly.</p>

<h4>1. How to Update Your PAN Card Details</h4>
<p>If your Aadhaar details are perfectly accurate and your PAN card is the one with the error, you need to apply for a PAN correction. You can do this entirely online through the NSDL (Protean) or UTIITSL portals. By utilizing the Aadhaar e-KYC option, your Aadhaar details will automatically override the incorrect PAN details. This is the fastest method, as no physical documents need to be sent. Once the corrected PAN is dispatched (usually within 10-15 days), you can attempt the linking process again.</p>

<h4>2. How to Update Your Aadhaar Card Details</h4>
<p>If your PAN card is correct and your Aadhaar needs fixing, you have two options. For minor demographic updates like Name, DOB, or Gender, you can use the UIDAI Self-Service Update Portal (SSUP) online, provided your mobile number is linked to your Aadhaar. Alternatively, you can visit your nearest Aadhaar Seva Kendra or CSC with valid supporting documents (like a Passport, Voter ID, or 10th Marksheet) to process the correction. UIDAI charges a nominal fee of ₹50 for demographic updates.</p>

<h3>Important Note on the ₹1,000 Linking Penalty</h3>
<p>Currently, the deadline for linking PAN and Aadhaar without a fee has long passed, and a late penalty of ₹1,000 must be paid via Challan 280 (Major Head 0021, Minor Head 500) before linking. A common fear among users is whether they have to pay this ₹1,000 again if their first linking attempt fails due to a mismatch. <strong>The answer is No.</strong> Once you have successfully paid the ₹1,000 penalty, it is recorded against your PAN. After you correct the mismatch in your PAN or Aadhaar, you can revisit the e-Filing portal. The system will automatically detect your prior payment, and you can proceed to link without paying twice.</p>`;

const panContentHi = `<h2>पैन-आधार नाम और जन्म तिथि मिसमैच (Mismatch) को जल्दी कैसे ठीक करें - पूरी गाइड</h2>
<p>केंद्रीय प्रत्यक्ष कर बोर्ड (CBDT) और आयकर विभाग के दिशा-निर्देशों के अनुसार, सभी पात्र भारतीय करदाताओं के लिए अपने परमानेंट अकाउंट नंबर (PAN) को आधार कार्ड से लिंक करना अब अनिवार्य हो गया है। वैसे तो ई-फाइलिंग पोर्टल पर लिंकिंग की प्रक्रिया काफी सरल है, लेकिन लाखों नागरिकों को तब निराशा होती है जब उनका लिंकिंग फेल हो जाता है। इसका सबसे आम कारण दोनों दस्तावेजों के बीच व्यक्तिगत जानकारी—विशेष रूप से आपका नाम, जन्म तिथि (DOB), या लिंग (Gender)—का मेल न खाना है। हमारा यह इंटरैक्टिव पैन आधार समाधान (Conflict Resolver) टूल विशेष रूप से आपको यह पहचानने में मदद करने के लिए बनाया गया है कि लिंकिंग फेल क्यों हो रही है, और इसे बिना किसी परेशानी के ठीक करने का सही तरीका क्या है।</p>

<h3>पैन-आधार में मिसमैच (Mismatch) क्यों होता है?</h3>
<p>आयकर विभाग का लिंकिंग पोर्टल एक ऑटोमेटेड सिस्टम का उपयोग करता है जो आपके द्वारा दी गई जानकारी का UIDAI (आधार) डेटाबेस के साथ मिलान करता है। लिंक सफल होने के लिए, दोनों में जानकारी 100% एक जैसी होनी चाहिए। मिसमैच आमतौर पर निम्नलिखित कारणों से होता है:</p>
<ul>
  <li><strong>स्पेलिंग की गलतियाँ:</strong> यदि नाम की स्पेलिंग में एक अक्षर का भी अंतर है (जैसे 'Kapur' बनाम 'Kapoor'), तो वैलिडेशन फेल हो जाएगा।</li>
  <li><strong>शॉर्ट नाम बनाम पूरा नाम:</strong> यदि आपके आधार कार्ड पर सिर्फ इनिशियल लिखे हैं (जैसे 'R. K. Sharma') जबकि पैन कार्ड पर आपका पूरा नाम ('Raj Kumar Sharma') है, तो सिस्टम लिंकिंग रिक्वेस्ट को रिजेक्ट कर देगा। दोनों दस्तावेजों में नाम एक ही तरीके से लिखा होना चाहिए।</li>
  <li><strong>जन्म तिथि में अंतर:</strong> पुराने आधार कार्डों पर अक्सर पूरी जन्म तिथि (जैसे 12-04-1985) के बजाय केवल जन्म का वर्ष (जैसे 1985) छपा होता था। यदि आपके पैन पर पूरी जन्म तिथि है, तो यह मिसमैच लिंकिंग को रोक देगा।</li>
  <li><strong>जेंडर (लिंग) की गलती:</strong> कभी-कभी आवेदन करते समय डेटा एंट्री की गलती के कारण गलत जेंडर प्रिंट हो जाता है, जिससे तुरंत मिसमैच एरर आ जाता है।</li>
</ul>

<h3>मिसमैच को ठीक करने की स्टेप-बाय-स्टेप प्रक्रिया</h3>
<p>यदि आपको मिसमैच का एरर आता है, तो आप जबरदस्ती लिंकिंग नहीं कर सकते। आपको पहले उस दस्तावेज़ को सुधारना होगा जिसमें गलत जानकारी है, ताकि दोनों दस्तावेज़ एक-दूसरे से पूरी तरह मेल खा सकें।</p>

<h4>1. अपने पैन कार्ड की जानकारी कैसे अपडेट करें</h4>
<p>यदि आपके आधार की जानकारी बिल्कुल सही है और गलती आपके पैन कार्ड में है, तो आपको पैन सुधार (PAN Correction) के लिए आवेदन करना होगा। आप NSDL (Protean) या UTIITSL पोर्टल के माध्यम से यह पूरी तरह से ऑनलाइन कर सकते हैं। 'आधार ई-केवाईसी' (Aadhaar e-KYC) विकल्प का उपयोग करने से, आपके आधार की सही जानकारी स्वचालित रूप से आपके पैन में अपडेट हो जाएगी। यह सबसे तेज़ तरीका है, क्योंकि इसमें कोई भौतिक दस्तावेज़ (Physical Documents) भेजने की आवश्यकता नहीं होती है। सुधार होने के बाद (आमतौर पर 10-15 दिनों के भीतर), आप दोबारा लिंक करने का प्रयास कर सकते हैं।</p>

<h4>2. अपने आधार कार्ड की जानकारी कैसे अपडेट करें</h4>
<p>यदि आपका पैन कार्ड सही है और आधार में सुधार की आवश्यकता है, तो आपके पास दो विकल्प हैं। नाम, जन्म तिथि या जेंडर जैसे छोटे बदलावों के लिए, आप UIDAI के ऑनलाइन सेल्फ-सर्विस अपडेट पोर्टल (SSUP) का उपयोग कर सकते हैं, बशर्ते आपका मोबाइल नंबर आधार से लिंक हो। इसके अलावा, आप वैध सहायक दस्तावेजों (जैसे पासपोर्ट, वोटर आईडी, या 10वीं की मार्कशीट) के साथ अपने नजदीकी आधार सेवा केंद्र (Aadhaar Seva Kendra) या सीएससी (CSC) पर जा सकते हैं। UIDAI डेमोग्राफिक अपडेट के लिए ₹50 का मामूली शुल्क लेता है।</p>

<h3>₹1,000 लिंकिंग पेनल्टी पर महत्वपूर्ण जानकारी</h3>
<p>वर्तमान में, बिना फीस के पैन और आधार को लिंक करने की समय सीमा काफी पहले समाप्त हो चुकी है, और अब लिंक करने से पहले चालान 280 (मेजर हेड 0021, माइनर हेड 500) के माध्यम से ₹1,000 का विलंब जुर्माना (Penalty) देना अनिवार्य है। उपयोगकर्ताओं के बीच एक आम डर यह होता है कि यदि मिसमैच के कारण उनका पहला लिंकिंग प्रयास विफल हो जाता है, तो क्या उन्हें यह ₹1,000 फिर से देना होगा? <strong>इसका उत्तर है - नहीं।</strong> एक बार जब आप सफलतापूर्वक ₹1,000 का जुर्माना दे देते हैं, तो यह आपके पैन के साथ दर्ज हो जाता है। पैन या आधार में मिसमैच को ठीक करने के बाद, जब आप ई-फाइलिंग पोर्टल पर वापस जाएंगे, तो सिस्टम स्वचालित रूप से आपके पिछले भुगतान का पता लगा लेगा, और आप बिना दोबारा पैसे दिए लिंकिंग प्रक्रिया पूरी कर सकेंगे।</p>`;

function replaceSeo(filePath, enContent, hiContent) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace EN content
  content = content.replace(
    /<div data-lang-show=\"en\" class=\"htc-seo-content\">[\s\S]*?<\/div>\s*<div data-lang-show=\"hi\" class=\"htc-seo-content\">/,
    '<div data-lang-show="en" class="htc-seo-content">\n      ' + enContent + '\n    </div>\n    <div data-lang-show="hi" class="htc-seo-content">'
  );
  
  // Replace HI content
  content = content.replace(
    /<div data-lang-show=\"hi\" class=\"htc-seo-content\">[\s\S]*?<\/div>\s*<h2/,
    '<div data-lang-show="hi" class="htc-seo-content">\n      ' + hiContent + '\n    </div>\n    <h2'
  );
  
  // For PAN Aadhaar since it doesn't use the htc-seo-content class in its injection for some reason, let's just do a generic replace
  if (filePath.includes('pan-aadhaar')) {
      content = content.replace(
        /<div data-lang-show=\"en\">\s*<h2>[\s\S]*?<\/div>\s*<div data-lang-show=\"hi\">/,
        '<div data-lang-show="en" class="htc-seo-content">\n      ' + enContent + '\n    </div>\n    <div data-lang-show="hi" class="htc-seo-content">'
      );
      content = content.replace(
        /<div data-lang-show=\"hi\" class=\"htc-seo-content\">[\s\S]*?<\/div>\s*<h3 data-lang-show=\"en\">/,
        '<div data-lang-show="hi" class="htc-seo-content">\n      ' + hiContent + '\n    </div>\n    <h3 data-lang-show="en">'
      );
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Replaced SEO in ' + filePath);
}

replaceSeo(path.join(__dirname, 'tools', 'itr-penalty-calculator.html'), itrContentEn, itrContentHi);
replaceSeo(path.join(__dirname, 'tools', 'pan-aadhaar-conflict-resolver.html'), panContentEn, panContentHi);
