import os
import re

file_path = r"jobs\ssc-mts-havaldar-recruitment-2026.html"
with open(file_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Fix Meta Tags and Schema (With Hindi)
new_meta = """<meta name="description" content="SSC MTS Recruitment 2026 Notification Out! Apply Online for 9,583+ Havaldar Vacancies. Check exam date, syllabus, age limit, and official PDF link before the last date.">
  <meta property="og:title" content="SSC MTS & Havaldar Recruitment 2026: Apply Online (9,583 Posts)" />
  <meta property="og:description" content="URGENT: SSC MTS 2026 Notification is finally out! Massive 9,583+ vacancies for 10th pass students. Check eligibility, syllabus, and apply online today." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://sarkarisewaindia.com/jobs/ssc-mts-havaldar-recruitment-2026.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="SSC MTS & Havaldar Recruitment 2026: Apply Online (9,583 Posts)" />
  <meta name="twitter:description" content="URGENT: SSC MTS 2026 Notification is finally out! Massive 9,583+ vacancies for 10th pass students. Check eligibility, syllabus, and apply online today." />
  <title>【Alert】 SSC MTS Recruitment 2026: 9,583 Vacancies (ऑनलाइन आवेदन शुरू)</title>"""

html = re.sub(r'<meta name="description".*?<title>.*?</title>', new_meta, html, flags=re.DOTALL)

# Fix Canonical
html = re.sub(r'<link rel="canonical" href=".*?">', '<link rel="canonical" href="https://sarkarisewaindia.com/jobs/ssc-mts-havaldar-recruitment-2026.html" />', html)

# Fix Schema
new_schema = """<script type="application/ld+json" id="job-post-schema">{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "JobPosting",
          "title": "SSC MTS (Multi-Tasking Staff) & Havaldar Recruitment 2026",
          "description": "The Staff Selection Commission (SSC) has released the official notification for MTS and Havaldar recruitment 2026. Apply online for 9,583 vacancies.",
          "datePosted": "2026-08-10",
          "validThrough": "2026-09-10",
          "employmentType": "FULL_TIME",
          "hiringOrganization": { "@type": "Organization", "name": "Staff Selection Commission (SSC)" },
          "jobLocation": { "@type": "Place", "address": "All India" }
        }
      ]
    }</script>"""
html = re.sub(r'<script type="application/ld\+json" id="job-post-schema">.*?</script>', new_schema, html, flags=re.DOTALL)


# Fix H1 Tag
old_h1 = r'<h1 class="job-post-hero__title">.*?</h1>'
new_h1 = '<h1 class="job-post-hero__title"><span data-lang-show="en">SSC MTS & Havaldar Recruitment 2026: 9,583 Vacancies</span><span data-lang-show="hi">SSC MTS एवं हवलदार भर्ती 2026: 9,583 पदों पर आवेदन</span></h1>'
html = re.sub(old_h1, new_h1, html)


# The main content to replace the inner body with our highly optimized 1500 word SEO content
new_body = """
        <section class="service-section">
          <h2 class="service-section__title" style="color: #ef4444; font-weight: 800;"><span data-lang-show="en">🚨 SSC MTS 2026 Notification OUT: Apply Online for 9,583+ Vacancies</span><span data-lang-show="hi">🚨 SSC MTS 2026 नोटिफिकेशन जारी: 9,583+ पदों के लिए ऑनलाइन आवेदन करें</span></h2>
          
          <div data-lang-show="en">
            <p><strong>URGENT UPDATE (August 2026):</strong> The Staff Selection Commission (SSC) has officially released the highly anticipated notification for the <strong>Multi-Tasking (Non-Technical) Staff and Havaldar (CBIC & CBN) Examination, 2026</strong>. If you are a 10th pass student looking for a secure central government job, this is the biggest opportunity of the year!</p>
            
            <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <h4 style="margin-top:0; color: #b45309;">Key Highlights</h4>
              <ul style="margin-bottom:0;">
                <li><strong>Total Vacancies:</strong> 9,583+ (MTS: 5,665, Havaldar: 3,918)</li>
                <li><strong>Eligibility:</strong> 10th Pass (Matriculation) from any recognized board.</li>
                <li><strong>Salary/Pay Scale:</strong> Pay Level-1 (Rs. 18,000 – Rs. 56,900) + Allowances.</li>
              </ul>
            </div>

            <h3 style="margin-top: 30px;">1. Important Dates (Don't Miss the Deadline!)</h3>
            <p>Candidates are strictly advised not to wait for the last date. The SSC servers often crash during the final days due to heavy traffic. Apply as early as possible.</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background: #f1f5f9;"><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Event</th><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Date</th></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">Online Application Starts</td><td style="padding: 10px; border: 1px solid #cbd5e1;">10 August 2026</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">Last Date to Apply Online</td><td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">10 September 2026 (11:00 PM)</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">Last Date for Fee Payment</td><td style="padding: 10px; border: 1px solid #cbd5e1;">12 September 2026</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">Correction Window</td><td style="padding: 10px; border: 1px solid #cbd5e1;">16 - 17 September 2026</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">CBT Exam Date (Tier 1)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">October - November 2026</td></tr>
            </table>

            <h3>2. Detailed Eligibility Criteria & Age Limit</h3>
            <p>Before proceeding with the SSC MTS application form, verify your eligibility parameters carefully:</p>
            <ul>
              <li><strong>Educational Qualification:</strong> You must have passed the 10th Standard (Matriculation) examination or equivalent from a recognized Board on or before the cut-off date (10th Sept 2026).</li>
              <li><strong>Age Limit (As on 01-01-2026):</strong> 
                <ul>
                  <li>For MTS & Havaldar in CBN: <strong>18 to 25 years</strong>.</li>
                  <li>For Havaldar in CBIC & few MTS posts: <strong>18 to 27 years</strong>.</li>
                </ul>
              </li>
              <li><strong>Age Relaxation:</strong> SC/ST candidates get a 5-year relaxation, while OBC candidates get a 3-year relaxation according to Central Govt norms.</li>
            </ul>

            <h3>3. Application Fee Structure</h3>
            <p>The SSC MTS form fee is highly affordable. Ensure you pay the fee online via UPI, Net Banking, or Credit/Debit Card.</p>
            <ul>
              <li><strong>General / OBC / EWS:</strong> Rs. 100/-</li>
              <li><strong>Women / SC / ST / PwBD / ESM:</strong> FREE (Exempted)</li>
            </ul>

            <h3>4. Selection Process & Exam Pattern (Revised)</h3>
            <p>The selection process consists of a Computer Based Examination (CBE). For Havaldar posts, there is an additional Physical Efficiency Test (PET) / Physical Standard Test (PST).</p>
            <p>The CBE is divided into two mandatory sessions. <strong>Session-I has NO negative marking!</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background: #e2e8f0;"><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Session</th><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Subject</th><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">Questions/Marks</th></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;" rowspan="2">Session-I (45 Mins)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">Numerical & Mathematical Ability</td><td style="padding: 10px; border: 1px solid #cbd5e1;">20 / 60</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">Reasoning Ability & Problem Solving</td><td style="padding: 10px; border: 1px solid #cbd5e1;">20 / 60</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;" rowspan="2">Session-II (45 Mins)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">General Awareness</td><td style="padding: 10px; border: 1px solid #cbd5e1;">25 / 75</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">English Language & Comprehension</td><td style="padding: 10px; border: 1px solid #cbd5e1;">25 / 75</td></tr>
            </table>
            
            <h3>5. How to Apply Online? (Step-by-Step Guide)</h3>
            <p>Follow these steps to submit your application flawlessly on the new SSC portal:</p>
            <ol>
              <li>Go to the new official website of SSC: <strong>ssc.gov.in</strong>.</li>
              <li>If you are a new user, click on <strong>"Register Now"</strong> to complete your One-Time Registration (OTR).</li>
              <li>Login with your Registration Number and Password.</li>
              <li>Under the "Latest Notifications" tab, find "Multi-Tasking (Non-Technical) Staff and Havaldar Examination, 2026" and click <strong>Apply</strong>.</li>
              <li>Fill in the required details, choose your exam centers, and upload a live photograph using the SSC app or webcam.</li>
              <li>Upload your scanned signature. Ensure you use our <a href="../tools/signature-resizer.html">Signature Resizer Tool</a> to get the exact 10KB-20KB format required.</li>
              <li>Pay the application fee and submit the final form.</li>
            </ol>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">🛠️ Essential Tools for Your Application</h3>
              <p>Don't let your application get rejected due to incorrect photo/signature sizes. Use our free tools:</p>
              <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/photo-resizer.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">🖼️ Govt Exam Photo Resizer</a><br><span style="font-size: 13px; color: #64748b;">Instantly crop and resize to exactly 20KB-50KB.</span></li>
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/signature-resizer.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">✍️ Signature Resizer</a><br><span style="font-size: 13px; color: #64748b;">Convert your signature to exactly 10KB-20KB.</span></li>
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/document-compressor.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">📄 Document Compressor</a><br><span style="font-size: 13px; color: #64748b;">Compress caste/10th certificates securely.</span></li>
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/age-calculator.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">📅 Age Calculator</a><br><span style="font-size: 13px; color: #64748b;">Check if you meet the 18-25 years exact cutoff.</span></li>
              </ul>
            </div>

            <h3 style="margin-top: 40px;">Frequently Asked Questions (FAQs)</h3>
            <div class="faq-container">
              <h4>1. What is the salary of SSC MTS?</h4>
              <p>The in-hand salary of an SSC MTS employee in a Tier-1 city (like Delhi/Mumbai) is approximately Rs. 30,000 to Rs. 32,000 per month, inclusive of Basic Pay, DA, HRA, and TA.</p>
              
              <h4>2. Is there negative marking in SSC MTS 2026?</h4>
              <p>There is <strong>NO negative marking</strong> in Session-I (Maths & Reasoning). However, in Session-II (General Awareness & English), there is a negative marking of 1 mark for each wrong answer.</p>
              
              <h4>3. Do I need to take a live photo for the application?</h4>
              <p>Yes. As per the new SSC OTR rules, candidates must capture a live photo using their webcam or the official 'My SSC' mobile app. Uploading old passport-size photos is no longer allowed.</p>
              
              <h4>4. What is the work profile of MTS?</h4>
              <p>Multi-Tasking Staff is responsible for routine office duties in central government ministries, such as maintaining records, dispatching files, photocopying, and assisting section officers.</p>
              
              <h4>5. Is the exam conducted in regional languages?</h4>
              <p>Yes, the Computer Based Examination is conducted in Hindi, English, and 13 other regional languages, including Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu.</p>
            </div>

            <h3 style="margin-top: 40px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">🔗 Related Important Services</h3>
            <ul style="line-height: 1.8;">
              <li><a href="ssc-chsl-recruitment.html">SSC CHSL Recruitment (12th Pass)</a></li>
              <li><a href="rrb-ntpc-recruitment.html">RRB NTPC Recruitment Notification</a></li>
              <li><a href="../service/pan-card.html">Apply for Instant e-PAN Card</a></li>
              <li><a href="../service/digilocker.html">DigiLocker Setup Guide (For Document Fetching)</a></li>
            </ul>

          </div>
          
          <div data-lang-show="hi">
            <p><strong>तत्काल अपडेट (अगस्त 2026):</strong> कर्मचारी चयन आयोग (SSC) ने <strong>मल्टी-टास्किंग (नॉन-टेक्निकल) स्टाफ और हवलदार (CBIC & CBN) परीक्षा 2026</strong> के लिए आधिकारिक नोटिफिकेशन जारी कर दिया है। यदि आप 10वीं पास हैं और केंद्र सरकार में एक सुरक्षित सरकारी नौकरी की तलाश कर रहे हैं, तो यह साल का सबसे बड़ा अवसर है!</p>
            
            <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <h4 style="margin-top:0; color: #b45309;">मुख्य बातें (Key Highlights)</h4>
              <ul style="margin-bottom:0;">
                <li><strong>कुल पद (Vacancies):</strong> 9,583+ (MTS: 5,665, हवलदार: 3,918)</li>
                <li><strong>योग्यता (Eligibility):</strong> मान्यता प्राप्त बोर्ड से 10वीं (मैट्रिक) पास।</li>
                <li><strong>वेतन (Salary):</strong> पे लेवल-1 (18,000 – 56,900 रुपये) + भत्ते।</li>
              </ul>
            </div>

            <h3 style="margin-top: 30px;">1. महत्वपूर्ण तिथियाँ (Important Dates)</h3>
            <p>उम्मीदवारों को सलाह दी जाती है कि वे अंतिम तिथि का इंतज़ार न करें। अंतिम दिनों में भारी ट्रैफ़िक के कारण SSC का सर्वर अक्सर डाउन हो जाता है। आज ही आवेदन करें!</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background: #f1f5f9;"><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">विवरण</th><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">तारीख</th></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">ऑनलाइन आवेदन शुरू</td><td style="padding: 10px; border: 1px solid #cbd5e1;">10 अगस्त 2026</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">ऑनलाइन आवेदन की अंतिम तिथि</td><td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">10 सितंबर 2026 (रात 11:00 बजे तक)</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">फीस जमा करने की अंतिम तिथि</td><td style="padding: 10px; border: 1px solid #cbd5e1;">12 सितंबर 2026</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">सुधार विंडो (Correction)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">16 - 17 सितंबर 2026</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">परीक्षा तिथि (टियर 1)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">अक्टूबर - नवंबर 2026</td></tr>
            </table>

            <h3>2. पात्रता मानदंड और आयु सीमा (Eligibility & Age)</h3>
            <ul>
              <li><strong>शैक्षिक योग्यता:</strong> कट-ऑफ तिथि (10 सितंबर 2026) तक मान्यता प्राप्त बोर्ड से 10वीं कक्षा (मैट्रिक) पास होना अनिवार्य है।</li>
              <li><strong>आयु सीमा (01-01-2026 तक):</strong> 
                <ul>
                  <li>MTS और हवलदार (CBN) के लिए: <strong>18 से 25 वर्ष</strong>।</li>
                  <li>हवलदार (CBIC) और कुछ MTS पदों के लिए: <strong>18 से 27 वर्ष</strong>।</li>
                </ul>
              </li>
              <li><strong>आयु में छूट:</strong> सरकारी नियमों के अनुसार, SC/ST उम्मीदवारों को 5 वर्ष और OBC उम्मीदवारों को 3 वर्ष की छूट दी जाती है।</li>
            </ul>

            <h3>3. आवेदन शुल्क (Application Fee)</h3>
            <p>आप ऑनलाइन (UPI, नेट बैंकिंग, कार्ड) के माध्यम से शुल्क का भुगतान कर सकते हैं:</p>
            <ul>
              <li><strong>सामान्य / OBC / EWS:</strong> मात्र 100/- रुपये</li>
              <li><strong>महिलाएं / SC / ST / PwBD / ESM:</strong> मुफ़्त (कोई शुल्क नहीं)</li>
            </ul>

            <h3>4. परीक्षा पैटर्न (Exam Pattern)</h3>
            <p>कंप्यूटर आधारित परीक्षा (CBE) को दो अनिवार्य सत्रों (Sessions) में बाँटा गया है। <strong>सत्र-I में कोई नेगेटिव मार्किंग नहीं है!</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background: #e2e8f0;"><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">सत्र (Session)</th><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">विषय (Subject)</th><th style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">प्रश्न/अंक</th></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;" rowspan="2">सत्र-I (45 मिनट)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">गणित (Mathematics)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">20 / 60</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">रीजनिंग (Reasoning)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">20 / 60</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;" rowspan="2">सत्र-II (45 मिनट)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">सामान्य जागरूकता (GK)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">25 / 75</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #cbd5e1;">अंग्रेजी भाषा (English)</td><td style="padding: 10px; border: 1px solid #cbd5e1;">25 / 75</td></tr>
            </table>

            <h3>5. ऑनलाइन अप्लाई कैसे करें? (How to Apply)</h3>
            <ol>
              <li>SSC की नई वेबसाइट <strong>ssc.gov.in</strong> पर जाएं।</li>
              <li>यदि आप नए यूजर हैं, तो 'One-Time Registration (OTR)' पूरा करें।</li>
              <li>रजिस्ट्रेशन नंबर और पासवर्ड से लॉगिन करें।</li>
              <li>"MTS and Havaldar Examination, 2026" ढूंढें और <strong>Apply</strong> पर क्लिक करें।</li>
              <li>वेबकैम या SSC ऐप के जरिए अपनी "Live Photo" खींचें।</li>
              <li>अपना सिग्नेचर अपलोड करें। सही साइज़ के लिए हमारे <a href="../tools/signature-resizer.html">Signature Resizer Tool</a> का उपयोग करें।</li>
              <li>फीस भरें और फॉर्म सबमिट करें।</li>
            </ol>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">🛠️ फॉर्म भरने के लिए जरूरी टूल्स</h3>
              <p>गलत फोटो या सिग्नेचर के कारण अपना फॉर्म रिजेक्ट होने से बचाएं:</p>
              <ul style="list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/photo-resizer.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">🖼️ Govt Exam Photo Resizer</a><br><span style="font-size: 13px; color: #64748b;">फोटो को तुरंत 20KB-50KB में रिसाइज़ करें।</span></li>
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/signature-resizer.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">✍️ Signature Resizer</a><br><span style="font-size: 13px; color: #64748b;">सिग्नेचर को 10KB-20KB में सेट करें।</span></li>
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/document-compressor.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">📄 Document Compressor</a><br><span style="font-size: 13px; color: #64748b;">जाति/10वीं प्रमाणपत्र सुरक्षित रूप से कंप्रेस करें।</span></li>
                <li style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);"><a href="../tools/age-calculator.html" style="text-decoration: none; font-weight: 600; color: #2563eb;">📅 Age Calculator</a><br><span style="font-size: 13px; color: #64748b;">चेक करें कि आपकी आयु 18-25 वर्ष है या नहीं।</span></li>
              </ul>
            </div>

            <h3 style="margin-top: 40px;">अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
            <div class="faq-container">
              <h4>1. SSC MTS की सैलरी कितनी होती है?</h4>
              <p>टियर-1 शहर (जैसे दिल्ली/मुंबई) में एक SSC MTS कर्मचारी की इन-हैंड सैलरी लगभग 30,000 से 32,000 रुपये प्रति माह होती है, जिसमें मूल वेतन, DA, HRA और TA शामिल हैं।</p>
              
              <h4>2. क्या SSC MTS 2026 में नेगेटिव मार्किंग है?</h4>
              <p>सत्र-I (गणित और रीजनिंग) में <strong>कोई नेगेटिव मार्किंग नहीं</strong> है। लेकिन, सत्र-II (GK और English) में प्रत्येक गलत उत्तर के लिए 1 अंक काटा जाएगा।</p>
              
              <h4>3. क्या मुझे फॉर्म के लिए लाइव फोटो (Live Photo) खींचनी होगी?</h4>
              <p>हाँ। SSC के नए OTR नियमों के अनुसार, उम्मीदवारों को वेबकैम या 'My SSC' ऐप का उपयोग करके लाइव फोटो खींचनी होगी। पुरानी पासपोर्ट साइज़ फोटो अपलोड करना बंद कर दिया गया है।</p>
            </div>

            <h3 style="margin-top: 40px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">🔗 अन्य महत्वपूर्ण सेवाएँ</h3>
            <ul style="line-height: 1.8;">
              <li><a href="ssc-chsl-recruitment.html">SSC CHSL भर्ती (12वीं पास)</a></li>
              <li><a href="rrb-ntpc-recruitment.html">RRB NTPC भर्ती नोटिफिकेशन</a></li>
              <li><a href="../service/pan-card.html">तुरंत ई-पैन कार्ड के लिए आवेदन करें</a></li>
            </ul>

          </div>
        </section>
"""

html = re.sub(r'<section class="service-section">.*?</section>', new_body, html, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(html)
