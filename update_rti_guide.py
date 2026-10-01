import os
from bs4 import BeautifulSoup

def update_rti_guide():
    file_path = "support/rti-guide.html"
    with open(file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    # 1. Update Title & Meta
    title_text = "RTI Online Kaise File Kare 2026? ₹10 Fee, Application Format & Status Check"
    desc_text = "RTI Online kaise file kare? ₹10 fee, application format, documents, status check aur First Appeal ki पूरी जानकारी. Central aur State RTI portal links dekhein."
    
    if soup.title:
        soup.title.string = title_text
    
    meta_desc = soup.find("meta", {"name": "description"})
    if meta_desc:
        meta_desc["content"] = desc_text
    else:
        new_meta = soup.new_tag("meta", attrs={"name": "description", "content": desc_text})
        soup.head.append(new_meta)
        
    og_title = soup.find("meta", property="og:title")
    if og_title: og_title["content"] = title_text
    
    og_desc = soup.find("meta", property="og:description")
    if og_desc: og_desc["content"] = desc_text
    
    # 2. Add custom CSS to <head>
    custom_style = soup.new_tag("style")
    custom_style.string = """
    .rti-quick-actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 24px 0; }
    .rti-action-btn { display: flex; align-items: center; justify-content: center; text-align: center; background: var(--color-surface); border: 2px solid var(--color-brand); color: var(--color-brand); padding: 12px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: 0.2s; }
    .rti-action-btn:hover { background: var(--color-brand); color: #fff; }
    .rti-action-primary { background: var(--color-brand); color: #fff; }
    .rti-action-primary:hover { opacity: 0.9; }
    .rti-helper-card { background: var(--color-surface-alt); border: 1px solid var(--color-border); padding: 24px; border-radius: 12px; margin: 32px 0; }
    .rti-helper-card h3 { margin-top: 0; color: var(--color-brand); font-size: 1.4rem; }
    .rti-form-group { margin-bottom: 16px; }
    .rti-form-group label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.95rem; }
    .rti-form-control { width: 100%; padding: 10px; border: 1px solid var(--color-border); border-radius: 6px; font-family: inherit; font-size: 1rem; }
    .rti-preview-box { background: var(--color-surface); border: 1px dashed var(--color-border); padding: 20px; white-space: pre-wrap; margin-top: 16px; font-family: monospace; font-size: 0.95rem; line-height: 1.6; border-radius: 8px; }
    .rti-faq-item { border: 1px solid var(--color-border); border-radius: 8px; margin-bottom: 12px; }
    .rti-faq-btn { width: 100%; text-align: left; background: none; border: none; padding: 16px; font-weight: 600; font-size: 1.05rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: var(--color-text); }
    .rti-faq-content { padding: 0 16px 16px; display: none; line-height: 1.6; color: var(--color-text-light); }
    .rti-faq-item.active .rti-faq-content { display: block; }
    .rti-faq-item.active .rti-faq-btn span { transform: rotate(180deg); }
    .rti-trust-box { border-left: 4px solid #f59e0b; background: var(--color-surface-alt); padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0; font-size: 0.95rem; }
    """
    soup.head.append(custom_style)

    # 3. Create Main Content
    main_html = """
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <a href="../index.html">Home</a><span class="sep">/</span><a href="index.html" data-i18n="support_title">Support</a><span class="sep">/</span><span class="current">RTI Guide</span>
    </nav>
    <div aria-hidden="true" class="tricolor-rule"></div>
    
    <section class="page-hero">
      <h1 class="page-hero__title">RTI Online Kaise File Kare 2026? पूरी जानकारी</h1>
      <p class="page-updated">Last updated: August 2026 | Reviewed by SarkariSewa India Team</p>
      
      <div class="rti-trust-box">
        <strong>📌 Quick Answer:</strong>
        <ul style="margin-top:8px; padding-left:20px; margin-bottom:0;">
          <li>RTI (Right to Information) किसी भी सरकारी विभाग से जानकारी मांगने का कानूनी अधिकार है।</li>
          <li>Central Govt की RTI <strong>rtionline.gov.in</strong> पर फाइल होती है।</li>
          <li>सामान्य Application Fee सिर्फ <strong>₹10</strong> है (BPL के लिए फ्री)।</li>
          <li>जवाब <strong>30 दिनों</strong> के अंदर आना चाहिए, ना आने पर First Appeal का प्रावधान है।</li>
        </ul>
      </div>

      <div class="rti-quick-actions">
        <a href="https://rtionline.gov.in/request/request.php" target="_blank" rel="noopener noreferrer" class="rti-action-btn rti-action-primary">1. RTI Online File करें</a>
        <a href="https://rtionline.gov.in/request/status.php" target="_blank" rel="noopener noreferrer" class="rti-action-btn">2. RTI Status Check</a>
        <a href="#rti-format-generator" class="rti-action-btn">3. Application Format</a>
        <a href="#first-appeal" class="rti-action-btn">4. First Appeal</a>
        <a href="#state-rti" class="rti-action-btn">5. State RTI Portals</a>
      </div>
    </section>

    <div class="content-grid" style="margin-top: 32px;">
      <div class="content-main prose">
        
        <h2 id="how-to-file">RTI Online कैसे File करें? (Step-by-Step)</h2>
        <p>भारत सरकार के मंत्रालयों और विभागों (Central Govt) के लिए RTI ऑनलाइन फाइल करना बहुत आसान है।</p>
        <ol>
          <li>सबसे पहले <a href="https://rtionline.gov.in/" target="_blank" rel="nofollow">rtionline.gov.in</a> पर जाएं और <strong>"Submit Request"</strong> पर क्लिक करें।</li>
          <li>दिशा-निर्देश (Guidelines) पढ़ें और "I have read and understood" चेकबॉक्स पर टिक करके Submit करें।</li>
          <li><strong>Select Ministry/Department/Apex body:</strong> उस मंत्रालय या विभाग का चयन करें जिससे आप जानकारी चाहते हैं।</li>
          <li>अपनी व्यक्तिगत जानकारी जैसे नाम, जेंडर, पता, ईमेल और मोबाइल नंबर भरें। (BPL श्रेणी के हैं तो "Yes" चुनें और प्रमाण पत्र अपलोड करें)।</li>
          <li><strong>Text for RTI Request application:</strong> बॉक्स में अपना प्रश्न लिखें। <em>(ध्यान दें: यहाँ अधिकतम 3000 characters ही लिखे जा सकते हैं, 3000 words नहीं!)</em></li>
          <li>अगर आपका आवेदन 3000 characters से बड़ा है, तो उसे PDF में लिखकर <strong>"Supporting document"</strong> में अपलोड करें।</li>
          <li><strong>Make Payment:</strong> ₹10 की फीस (Internet Banking, Credit/Debit card या UPI/RuPay) से जमा करें।</li>
          <li>सफलतापूर्वक पेमेंट के बाद, आपको एक <strong>Registration Number</strong> मिलेगा। इसे तुरंत सेव/प्रिंट कर लें।</li>
        </ol>

        <h2 id="rti-format-generator">RTI Application कैसे लिखें? अपना RTI तैयार करें</h2>
        <p>आप नीचे दिए गए टूल की मदद से एक स्टैंडर्ड RTI ड्राफ्ट तैयार कर सकते हैं। यह पूरी तरह से सुरक्षित है और आपका डेटा कहीं सेव नहीं होता।</p>

        <div class="rti-helper-card">
          <h3>✍️ RTI Application Generator</h3>
          <p style="font-size:0.9rem; color:var(--color-text-light);">यह एक सहायता उपकरण है। आवेदन सबमिट करने से पहले विभाग के नियमों की पुष्टि करें।</p>
          
          <div class="rti-form-group">
            <label>Public Information Officer (PIO) का पद और विभाग:</label>
            <input type="text" id="rti-dept" class="rti-form-control" placeholder="उदा: The Public Information Officer, Ministry of Railways">
          </div>
          <div class="rti-form-group">
            <label>विषय (Subject):</label>
            <input type="text" id="rti-subject" class="rti-form-control" placeholder="उदा: Information sought under RTI Act, 2005 regarding...">
          </div>
          <div class="rti-form-group">
            <label>जानकारी का विवरण (Information Required):</label>
            <textarea id="rti-info" class="rti-form-control" rows="4" placeholder="अपने प्रश्न पॉइंट्स में लिखें: \n1. \n2."></textarea>
          </div>
          <div class="rti-form-group">
            <label>आवेदक का नाम (Applicant Name):</label>
            <input type="text" id="rti-name" class="rti-form-control" placeholder="आपका पूरा नाम">
          </div>
          
          <button type="button" class="btn btn-primary" onclick="generateRTI()" style="width:100%; margin-top:10px;">Generate Application</button>

          <div id="rti-preview-section" style="display:none;">
            <div class="rti-preview-box" id="rti-output"></div>
            <div style="display:flex; gap:10px; margin-top:16px;">
              <button type="button" class="btn btn-secondary" onclick="copyRTI()">📋 Copy Text</button>
              <button type="button" class="btn btn-secondary" onclick="window.print()">🖨️ Print</button>
            </div>
            <p id="rti-copy-msg" style="color:green; font-weight:bold; display:none; margin-top:8px;">Copied to clipboard!</p>
          </div>
        </div>

        <script>
          function generateRTI() {
            const dept = document.getElementById('rti-dept').value || '[PIO/Department Name]';
            const subject = document.getElementById('rti-subject').value || '[Subject]';
            const info = document.getElementById('rti-info').value || '[Write your queries here]';
            const name = document.getElementById('rti-name').value || '[Your Name]';
            
            const today = new Date().toLocaleDateString('en-IN');

            const draft = `To,\n${dept}\n\nSubject: Information sought under Right to Information Act, 2005\n\nRespected Sir/Madam,\n\nPlease provide the following information under the RTI Act, 2005:\n\n${info}\n\nI have attached/paid the requisite fee of Rs.10/-. If the requested information does not fall under your jurisdiction, please forward this application to the concerned CPIO/PIO under section 6(3) of the RTI Act within 5 days.\n\nThanking you,\n\nYours faithfully,\n${name}\nDate: ${today}`;
            
            document.getElementById('rti-output').innerText = draft;
            document.getElementById('rti-preview-section').style.display = 'block';
          }

          function copyRTI() {
            const text = document.getElementById('rti-output').innerText;
            navigator.clipboard.writeText(text).then(() => {
              const msg = document.getElementById('rti-copy-msg');
              msg.style.display = 'block';
              setTimeout(() => msg.style.display = 'none', 3000);
            });
          }
        </script>

        <h2 id="fee-time">RTI की Fees और समय सीमा (Fee & Timeline)</h2>
        <h3>RTI Application Fee कितनी है?</h3>
        <ul>
          <li><strong>सामान्य नागरिक:</strong> ₹10 (Central Govt के लिए)। कुछ राज्यों में यह ₹10 से ₹50 तक हो सकती है।</li>
          <li><strong>BPL (Below Poverty Line):</strong> बिल्कुल मुफ्त (Free)। इसके लिए BPL कार्ड की कॉपी लगानी होती है।</li>
          <li><strong>Extra Pages:</strong> अगर जानकारी बहुत ज्यादा पेजों में है, तो विभाग आपसे ₹2 प्रति पेज (A4/A3) अतिरिक्त मांग सकता है।</li>
        </ul>

        <h3>RTI का जवाब कितने दिनों में आता है?</h3>
        <p>RTI Act के अनुसार, PIO को आवेदन मिलने के <strong>30 दिनों के भीतर</strong> जवाब देना अनिवार्य है। यदि मामला जीवन या स्वतंत्रता (Life or Liberty) से जुड़ा है, तो <strong>48 घंटे</strong> में जवाब दिया जाता है।</p>

        <h2 id="status">RTI Status कैसे Check करें?</h2>
        <p>अगर आपने rtionline.gov.in से ऑनलाइन फाइल किया है, तो:</p>
        <ol>
          <li><a href="https://rtionline.gov.in/request/status.php" target="_blank" rel="nofollow">View Status Page</a> पर जाएं।</li>
          <li>अपना <strong>Registration Number</strong> (जो सबमिट करते वक्त मिला था) दर्ज करें।</li>
          <li>अपनी <strong>Email ID</strong> डालें और Security Code भरकर Submit करें।</li>
        </ol>

        <h2 id="first-appeal">RTI का जवाब नहीं मिले तो क्या करें? (First Appeal)</h2>
        <p>यदि 30 दिन बीत जाने के बाद भी कोई जवाब न मिले, या आप मिले हुए जवाब से असंतुष्ट हैं (अधूरी या गलत जानकारी), तो आप <strong>First Appeal (प्रथम अपील)</strong> कर सकते हैं।</p>
        <ul>
          <li>First Appeal, फर्स्ट अपीलेट अथॉरिटी (FAA) को की जाती है जो PIO से सीनियर अधिकारी होता है।</li>
          <li>अपील करने की समय सीमा: जवाब मिलने के 30 दिन के भीतर (या 30 दिन की मियाद खत्म होने के 30 दिन के भीतर)।</li>
          <li>Central Govt के लिए <a href="https://rtionline.gov.in/appeal/appeal.php" target="_blank" rel="nofollow">यहाँ क्लिक करके ऑनलाइन First Appeal</a> दर्ज करें। इसके लिए कोई अतिरिक्त फीस नहीं लगती।</li>
        </ul>

        <h2 id="state-rti">Central RTI vs State RTI (राज्यों के पोर्टल)</h2>
        <p>ध्यान दें: rtionline.gov.in सिर्फ <strong>Central Government</strong> (जैसे रेलवे, इनकम टैक्स, CBSE, PMO, UPSC आदि) के लिए है।<br>
        अगर आपको <strong>State Government</strong> (जैसे राज्य पुलिस, नगर निगम, राज्य शिक्षा बोर्ड) से जानकारी चाहिए, तो आपको उनके संबंधित राज्य पोर्टल का उपयोग करना होगा, या ऑफलाइन पोस्ट से भेजना होगा।</p>
        
        <h3>प्रमुख राज्य RTI पोर्टल्स:</h3>
        <ul>
          <li><strong>Maharashtra:</strong> <a href="https://rtionline.maharashtra.gov.in/" target="_blank" rel="nofollow">rtionline.maharashtra.gov.in</a></li>
          <li><strong>Uttar Pradesh:</strong> <a href="https://rtionline.up.gov.in/" target="_blank" rel="nofollow">rtionline.up.gov.in</a></li>
          <li><strong>Bihar:</strong> <a href="https://rtionline.bihar.gov.in/" target="_blank" rel="nofollow">rtionline.bihar.gov.in</a></li>
          <li><strong>Rajasthan:</strong> <a href="https://rti.rajasthan.gov.in/" target="_blank" rel="nofollow">rti.rajasthan.gov.in</a></li>
          <li><strong>Delhi:</strong> <a href="https://rtionline.delhi.gov.in/" target="_blank" rel="nofollow">rtionline.delhi.gov.in</a></li>
          <li><strong>Madhya Pradesh:</strong> <a href="https://rtionline.mp.gov.in/" target="_blank" rel="nofollow">rtionline.mp.gov.in</a></li>
        </ul>

        <h2 id="faqs">RTI से जुड़े महत्वपूर्ण सवाल (FAQs)</h2>
        <div class="rti-faq-list">
          <!-- JS will populate FAQs -->
        </div>

      </div>

      <aside class="sidebar">
        <div class="widget">
          <h3>📌 Important Links</h3>
          <ul style="list-style:none; padding:0;">
            <li style="margin-bottom:8px;"><a href="../tools/self-declaration-builder.html">📝 Self-Declaration Builder</a></li>
            <li style="margin-bottom:8px;"><a href="../tools/eligibility-checker.html">🎯 Scheme Eligibility Checker</a></li>
            <li style="margin-bottom:8px;"><a href="../tools/document-checklist.html">📋 Document Checklist Tool</a></li>
            <li style="margin-bottom:8px;"><a href="../tools/status-troubleshooter.html">🔍 Application Status Troubleshooter</a></li>
          </ul>
        </div>
        <div class="widget">
          <h3>⚖️ Disclaimer</h3>
          <p style="font-size:0.85rem; color:var(--color-text-light);">SarkariSewaIndia is an independent information portal and is NOT affiliated with any government body. Always verify details on the official <a href="https://rtionline.gov.in" target="_blank" rel="nofollow">rtionline.gov.in</a> website.</p>
        </div>
      </aside>
    </div>

    <!-- FAQ Logic -->
    <script>
      const faqs = [
        { q: "RTI online kaise file kare?", a: "Central Govt ke liye rtionline.gov.in par jayen, 'Submit Request' par click karein, form bharein aur ₹10 fee jama karein." },
        { q: "RTI application fee kitni hai?", a: "Central Government departments ke liye RTI ki fees ₹10 hai. BPL category ke aavedakon ke liye yeh bilkul free hai." },
        { q: "RTI application mein kitne characters likh sakte hain?", a: "RTI Online portal (rtionline.gov.in) par request text box mein aap maximum 3000 characters (akshar) likh sakte hain, 3000 words nahi. Agar application bada hai toh uski PDF banakar upload karein." },
        { q: "RTI ka reply kitne din mein aata hai?", a: "Kanoon ke mutabiq, RTI ka jawab aavedan prapt hone ke 30 dino ke bheetar diya jana chahiye. Life or liberty ke mamlo mein 48 ghante ka samay hai." },
        { q: "RTI status kaise check kare?", a: "Aap rtionline.gov.in par 'View Status' section mein jaakar apna Registration Number aur Email ID daalkar status check kar sakte hain." },
        { q: "RTI ka jawab na mile to kya kare?", a: "Agar 30 din mein jawab na mile ya galat jawab mile, toh aap usi portal par 'Submit First Appeal' par click karke First Appellate Authority ko appeal kar sakte hain." },
        { q: "RTI file karne ke liye lawyer zaroori hai?", a: "Bilkul nahi. RTI aam janta ka adhikar hai aur iske liye kisi lawyer ki zarurat nahi hoti. Aap ek sadhe paper par ya online seedhe khud aavedan likh sakte hain." }
      ];

      const faqHTML = faqs.map((faq, i) => `
        <div class="rti-faq-item">
          <button class="rti-faq-btn" onclick="this.parentElement.classList.toggle('active')">
            ${faq.q} <span>▼</span>
          </button>
          <div class="rti-faq-content">${faq.a}</div>
        </div>
      `).join('');

      document.querySelector('.rti-faq-list').innerHTML = faqHTML;

      // Add FAQ Schema
      const schemaScript = document.createElement('script');
      schemaScript.type = "application/ld+json";
      schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
      document.head.appendChild(schemaScript);
    </script>
    """

    # Replace <main> content
    main_tag = soup.find("main")
    if main_tag:
        main_tag.clear()
        new_soup = BeautifulSoup(main_html, "html.parser")
        for elem in new_soup.contents:
            main_tag.append(elem)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(str(soup))
    
    print(f"Successfully updated {file_path}")

if __name__ == "__main__":
    update_rti_guide()
