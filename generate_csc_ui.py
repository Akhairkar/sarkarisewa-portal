import os

filepath = "tools/csc-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    original_html = f.read()

head_split = original_html.split('<main class="container" style="padding-top: 32px; padding-bottom: 64px;">')
top_html = head_split[0]
bottom_html = head_split[1].split('
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>

</main>')[1]

# Fix the <title> and meta description in top_html
import re
top_html = re.sub(r'<title>.*?</title>', '<title>Find Nearest CSC & Jan Seva Kendra | Verified Locator</title>', top_html, flags=re.DOTALL)
top_html = re.sub(r'<meta name="description" content=".*?">', '<meta name="description" content="Find your nearest verified CSC (Common Service Centre) and Jan Seva Kendra by State, District, and PIN Code. View online and offline services, timings, and contact details.">', top_html, flags=re.DOTALL)

# Add JSON-LD Schema
schema = """
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a CSC or Jan Seva Kendra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Common Service Centres (CSC) or Jan Seva Kendras are physical facilities for delivering Government of India e-Services to rural and remote locations."
      }
    },
    {
      "@type": "Question",
      "name": "What services are available at a CSC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CSCs offer services like Aadhaar enrollment/update, PAN card application, passport services, income/caste certificates, bill payments, and tele-medicine."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find a CSC near me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can use the CSC Locator tool on this page to search for verified centres by selecting your state, district, or entering your PIN code."
      }
    }
  ]
}
</script>
"""
if "FAQPage" not in top_html:
    top_html = top_html.replace('</head>', schema + '\n</head>')

new_main_content = """
<main class="container">
  <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
    <a href="../index.html">Home</a>
    <span class="sep">/</span>
    <a href="index.html">Tools</a><span class="sep">/</span>
    <span class="current">CSC Locator</span>
  </nav>

  <!-- 1. HERO SECTION -->
  <section class="service-hero" id="service-hero" style="text-align: center; margin-bottom: 40px; padding: 40px 20px; background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-surface) 100%); border-radius: 16px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h1 class="service-hero__title" style="margin-bottom: 16px; font-size: 2.2rem; color: var(--color-primary);">
      <span data-lang-show="en">Find a CSC / Jan Seva Kendra Near You</span>
      <span data-lang-show="hi">अपने पास CSC / जन सेवा केंद्र खोजें</span>
    </h1>
    <p class="service-hero__desc" style="max-width: 800px; margin: 0 auto 30px auto; color: var(--color-text-muted); font-size: 1.1rem; line-height: 1.6;">
      <span data-lang-show="en">Search for verified CSCs and Jan Seva Kendras by your city, district, or PIN code. View available online/offline services, timings, and get directions.</span>
      <span data-lang-show="hi">अपने शहर, जिले या PIN code से verified CSC और Jan Seva Kendra खोजें। उपलब्ध online और offline services, समय, और संपर्क जानकारी देखें।</span>
    </p>

    <!-- SEARCH UI -->
    <div style="background: var(--color-bg); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border); max-width: 900px; margin: 0 auto; text-align: left; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div>
          <label for="state-select" class="input-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.9rem;">State (राज्य)</label>
          <select id="state-select" class="input-field" onchange="updateDistricts()" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--color-border); background: var(--color-surface);">
            <option value="">-- Select State --</option>
            <option value="ANDAMAN AND NICOBAR ISLANDS">Andaman And Nicobar Islands</option>
            <option value="ANDHRA PRADESH">Andhra Pradesh</option>
            <option value="ARUNACHAL PRADESH">Arunachal Pradesh</option>
            <option value="ASSAM">Assam</option>
            <option value="BIHAR">Bihar</option>
            <option value="CHANDIGARH">Chandigarh</option>
            <option value="CHHATTISGARH">Chhattisgarh</option>
            <option value="DADRA AND NAGAR HAVELI AND DAMAN AND DIU">Dadra And Nagar Haveli</option>
            <option value="DELHI">Delhi</option>
            <option value="GOA">Goa</option>
            <option value="GUJARAT">Gujarat</option>
            <option value="HARYANA">Haryana</option>
            <option value="HIMACHAL PRADESH">Himachal Pradesh</option>
            <option value="JAMMU AND KASHMIR">Jammu And Kashmir</option>
            <option value="JHARKHAND">Jharkhand</option>
            <option value="KARNATAKA">Karnataka</option>
            <option value="KERALA">Kerala</option>
            <option value="LADAKH">Ladakh</option>
            <option value="LAKSHADWEEP">Lakshadweep</option>
            <option value="MADHYA PRADESH">Madhya Pradesh</option>
            <option value="MAHARASHTRA">Maharashtra</option>
            <option value="MANIPUR">Manipur</option>
            <option value="MEGHALAYA">Meghalaya</option>
            <option value="MIZORAM">Mizoram</option>
            <option value="NAGALAND">Nagaland</option>
            <option value="ODISHA">Odisha</option>
            <option value="PUDUCHERRY">Puducherry</option>
            <option value="PUNJAB">Punjab</option>
            <option value="RAJASTHAN">Rajasthan</option>
            <option value="SIKKIM">Sikkim</option>
            <option value="TAMIL NADU">Tamil Nadu</option>
            <option value="TELANGANA">Telangana</option>
            <option value="TRIPURA">Tripura</option>
            <option value="UTTAR PRADESH">Uttar Pradesh</option>
            <option value="UTTARAKHAND">Uttarakhand</option>
            <option value="WEST BENGAL">West Bengal</option>
          </select>
        </div>
        <div>
          <label for="district-select" class="input-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.9rem;">District (ज़िला)</label>
          <select id="district-select" class="input-field" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--color-border); background: var(--color-surface);">
            <option value="">-- First Select State --</option>
          </select>
        </div>
        <div>
          <label for="pincode-input" class="input-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 0.9rem;">PIN Code (पिन कोड)</label>
          <input type="text" id="pincode-input" class="input-field" placeholder="e.g. 401702" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--color-border); background: var(--color-surface);">
        </div>
      </div>
      <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
        <button id="btn-search-csc" class="btn btn--primary" style="flex: 1; min-width: 200px; padding: 12px; font-size: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
          🔍 <span data-lang-show="en">Search CSC</span><span data-lang-show="hi">CSC खोजें</span>
        </button>
        <button class="btn btn--outline" style="flex: 1; min-width: 200px; padding: 12px; font-size: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="alert('Location access requires HTTPS and browser permission. Ensure you are on a secure connection.')">
          📍 <span data-lang-show="en">Use My Location</span><span data-lang-show="hi">मेरी लोकेशन इस्तेमाल करें</span>
        </button>
      </div>
    </div>
  </section>

  <!-- 2. QUICK ACTION CARDS -->
  <section style="margin-bottom: 48px;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
      <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 12px;">📍</div>
        <h3 style="margin: 0 0 8px 0; font-size: 1.2rem; color: var(--color-primary);">Nearest CSC</h3>
        <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem;">
          <span data-lang-show="en">Find CSCs around your current location instantly.</span>
          <span data-lang-show="hi">अपने लोकेशन के आसपास तुरंत CSC खोजें।</span>
        </p>
      </div>
      <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 12px;">✅</div>
        <h3 style="margin: 0 0 8px 0; font-size: 1.2rem; color: var(--color-primary);">Verified CSC</h3>
        <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem;">
          <span data-lang-show="en">View trusted, verified centres and their services.</span>
          <span data-lang-show="hi">Verified सेंटर्स और उनकी सर्विसेस देखें।</span>
        </p>
      </div>
      <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center; cursor: pointer;" id="btn-open-modal">
        <div style="font-size: 2rem; margin-bottom: 12px;">🏢</div>
        <h3 style="margin: 0 0 8px 0; font-size: 1.2rem; color: var(--color-primary);">Claim Your CSC</h3>
        <p style="margin: 0; color: var(--color-text-muted); font-size: 0.95rem;">
          <span data-lang-show="en">Are you a CSC owner? Claim & verify your centre.</span>
          <span data-lang-show="hi">CSC owner हैं? अपना सेंटर claim/verify करें।</span>
        </p>
      </div>
    </div>
  </section>

  <!-- 3. TRUST / VALUE SECTION -->
  <section style="margin-bottom: 48px; background: var(--color-bg-alt); padding: 32px; border-radius: 12px; border: 1px solid var(--color-border);">
    <h2 style="margin-top: 0; font-size: 1.5rem; text-align: center; margin-bottom: 24px; color: var(--color-primary);">
      <span data-lang-show="en">What do you get on CSC Locator?</span>
      <span data-lang-show="hi">CSC Locator पर आपको क्या मिलेगा?</span>
    </h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; text-align: center;">
      <div>
        <div style="font-size: 1.5rem; margin-bottom: 8px;">🛡️</div>
        <div style="font-weight: 600;">Verified Info</div>
      </div>
      <div>
        <div style="font-size: 1.5rem; margin-bottom: 8px;">🗺️</div>
        <div style="font-weight: 600;">Accurate Location</div>
      </div>
      <div>
        <div style="font-size: 1.5rem; margin-bottom: 8px;">⚙️</div>
        <div style="font-weight: 600;">Available Services</div>
      </div>
      <div>
        <div style="font-size: 1.5rem; margin-bottom: 8px;">🕒</div>
        <div style="font-weight: 600;">Opening Hours</div>
      </div>
    </div>
  </section>

  <!-- 4. SEARCH RESULTS -->
  <section id="csc-results-section" style="margin-bottom: 48px;">
    <h2 style="font-size: 1.6rem; border-bottom: 2px solid var(--color-border); padding-bottom: 8px; margin-bottom: 24px;">Search Results (<span id="results-count">Loading...</span>)</h2>
    <div id="results-container" class="results-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
      <!-- Populated by JS -->
      <div style="text-align:center; padding: 40px; color: var(--color-text-muted); grid-column: 1 / -1;">Loading nearest centers...</div>
    </div>
  </section>

  <!-- 6. CSC OWNER CTA -->
  <section style="margin-bottom: 48px; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 32px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
    <h2 style="margin-top: 0; color: white; font-size: 1.8rem; margin-bottom: 12px;">
      <span data-lang-show="en">Are you a CSC Operator / VLE?</span>
      <span data-lang-show="hi">क्या आप CSC Operator / VLE हैं?</span>
    </h2>
    <p style="max-width: 600px; margin-bottom: 24px; font-size: 1.1rem; opacity: 0.9;">
      <span data-lang-show="en">Claim and verify your CSC on SarkariSewaIndia. An approved profile displays your location, services, and public contact information to thousands of citizens daily.</span>
      <span data-lang-show="hi">अपने CSC को SarkariSewaIndia पर claim और verify करें। Approved CSC profile में आपकी location, services और public contact information दिखाई जा सकती है।</span>
    </p>
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; justify-content: center;">
      <button class="btn" style="background: white; color: #1e3a8a; font-weight: 700; padding: 12px 24px; border-radius: 8px; font-size: 1.1rem;" onclick="document.getElementById('operator-modal').classList.add('active')">
        Claim Your CSC
      </button>
      <a href="#" style="color: white; text-decoration: underline; font-size: 0.9rem; opacity: 0.9;">How verification works?</a>
    </div>
  </section>

  <!-- 7. INFORMATIONAL SEO CONTENT -->
  <section class="prose" style="margin-bottom: 48px; padding: 32px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px;">
    <h2>
      <span data-lang-show="en">About CSC and Jan Seva Kendras</span>
      <span data-lang-show="hi">CSC और जन सेवा केंद्र के बारे में जानकारी</span>
    </h2>
    <p>
      <span data-lang-show="en">Common Service Centres (CSC) or Jan Seva Kendras are multiple-services-single-point models for providing facilities for multiple transactions at a single geographical location. They are the access points for delivery of essential public utility services, social welfare schemes, healthcare, financial, education and agriculture services.</span>
      <span data-lang-show="hi">कॉमन सर्विस सेंटर (CSC) या जन सेवा केंद्र एक ऐसा स्थान है जहाँ से नागरिकों को आवश्यक सार्वजनिक उपयोगिता सेवाएँ, सामाजिक कल्याण योजनाएँ, स्वास्थ्य देखभाल, वित्तीय, शिक्षा और कृषि सेवाएँ प्रदान की जाती हैं। यदि आप <strong>CSC center near me</strong> खोज रहे हैं, तो हमारा लोकेटर आपको सबसे सटीक जानकारी देगा।</span>
    </p>

    <h3>
      <span data-lang-show="en">Services Available at CSC Centres</span>
      <span data-lang-show="hi">CSC सेंटर पर मिलने वाली सेवाएँ</span>
    </h3>
    <ul>
      <li><span data-lang-show="en">Aadhaar Services (Enrollment, Update, Print)</span><span data-lang-show="hi">आधार सेवाएँ (नया आधार, अपडेट, प्रिंट)</span></li>
      <li><span data-lang-show="en">PAN Card Services (New Application, Corrections)</span><span data-lang-show="hi">पैन कार्ड सेवाएँ (नया आवेदन, सुधार)</span></li>
      <li><span data-lang-show="en">Income, Caste, and Domicile Certificates</span><span data-lang-show="hi">आय, जाति और निवास प्रमाण पत्र</span></li>
      <li><span data-lang-show="en">Banking and Financial Services</span><span data-lang-show="hi">बैंकिंग और वित्तीय सेवाएँ</span></li>
      <li><span data-lang-show="en">Utility Bill Payments (Electricity, Water, Gas)</span><span data-lang-show="hi">यूटिलिटी बिल भुगतान (बिजली, पानी, गैस)</span></li>
      <li><span data-lang-show="en">Passport and Voter ID Services</span><span data-lang-show="hi">पासपोर्ट और वोटर आईडी सेवाएँ</span></li>
    </ul>

    <h3>
      <span data-lang-show="en">Difference Between Jan Seva Kendra and CSC</span>
      <span data-lang-show="hi">जन सेवा केंद्र और CSC में क्या अंतर है?</span>
    </h3>
    <p>
      <span data-lang-show="en">Functionally, there is no major difference. Both serve as digital delivery points for e-governance services. Some states refer to them locally as Maha E Seva Kendras, Atalji Janasnehi Kendras, or E-Mitra, but they operate under the overarching CSC 2.0 scheme of the Government of India.</span>
      <span data-lang-show="hi">कार्यक्षमता के आधार पर इनमें कोई बड़ा अंतर नहीं है। दोनों ही ई-गवर्नेंस सेवाओं के डिजिटल डिलीवरी पॉइंट हैं। कुछ राज्यों में इन्हें महा ई-सेवा केंद्र, ई-मित्र या जन सेवा केंद्र कहा जाता है, लेकिन ये भारत सरकार की CSC 2.0 योजना के तहत ही काम करते हैं।</span>
    </p>
  </section>

  <!-- 8. FAQ SECTION -->
  <section class="faq-section" style="margin-bottom: 48px;">
    <h2 class="faq-title" style="margin-bottom: 24px;">Frequently Asked Questions</h2>
    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question">What is a CSC or Jan Seva Kendra?</button>
        <div class="faq-answer">
          <p>Common Service Centres (CSC) or Jan Seva Kendras are physical facilities for delivering Government of India e-Services to rural and remote locations.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">What services are available at a CSC?</button>
        <div class="faq-answer">
          <p>CSCs offer services like Aadhaar enrollment/update, PAN card application, passport services, income/caste certificates, bill payments, and tele-medicine.</p>
        </div>
      </div>
      <div class="faq-item">
        <button class="faq-question">How do I find a CSC near me?</button>
        <div class="faq-answer">
          <p>You can use the CSC Locator tool on this page to search for verified centres by selecting your state, district, or entering your PIN code.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- OPERATOR MODAL (Hidden) -->
  <div class="modal-overlay" id="operator-modal">
    <div class="modal-content" style="max-width: 500px; border-radius: 12px; overflow: hidden; padding: 0;">
      <div style="background: var(--color-bg-alt); padding: 20px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
        <h3 style="margin: 0; font-size: 1.4rem;">🏢 Claim Your CSC</h3>
        <button id="btn-close-modal" class="icon-btn" style="background: none; border: none; font-size: 1.5rem; color: var(--color-text);">&times;</button>
      </div>
      <form id="operator-form" style="padding: 24px;">
        <p style="margin-bottom: 20px; color: var(--color-text-muted);">Enter your CSC details below. Our team will verify your CSC ID and publish your listing with a Verified badge.</p>
        <div style="margin-bottom: 16px;">
          <label class="input-label" for="op-name">Center Name (नाम)</label>
          <input type="text" id="op-name" class="input-field" required>
        </div>
        <div style="margin-bottom: 16px;">
          <label class="input-label" for="op-cscid">CSC ID (सीएससी आईडी)</label>
          <input type="text" id="op-cscid" class="input-field" required>
        </div>
        <div style="margin-bottom: 16px;">
          <label class="input-label" for="op-pincode">PIN Code (पिन कोड)</label>
          <input type="text" id="op-pincode" class="input-field" required>
        </div>
        <div style="margin-bottom: 24px;">
          <label class="input-label" for="op-contact">Contact Number (मोबाइल नंबर)</label>
          <input type="text" id="op-contact" class="input-field" required>
        </div>
        <button type="submit" class="btn btn--primary" style="width: 100%; padding: 14px; font-size: 1.1rem;">Submit for Verification</button>
      </form>
    </div>
  </div>

"""

final_html = top_html + new_main_content + "
    <!-- Cross-Linking Banner: CSC & Jan Aushadhi -->
    <section class="service-section" style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; border-radius: 12px; padding: 24px; margin-top: 30px; margin-bottom: 20px;">
      <h2 style="color: #166534; font-size: 1.5rem; margin-top: 0; margin-bottom: 12px;">Need Help or Cheap Medicines? 🏥</h2>
      <p style="color: #15803d; font-size: 1.05rem; margin-bottom: 16px; line-height: 1.5;">
        Save time and money by using our officially integrated location tools:
      </p>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <a href="../../tools/csc-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>📍 Find Nearest CSC Center</span>
        </a>
        <a href="../../service/jan-aushadhi-store-locator.html" style="flex: 1; min-width: 200px; background: white; border: 2px solid #22c55e; color: #166534; padding: 12px 16px; border-radius: 8px; text-decoration: none; font-weight: 600; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <span>💊 Jan Aushadhi Store Locator</span>
        </a>
      </div>
    </section>

</main>\n" + bottom_html

with open(filepath, "w", encoding="utf-8") as f:
    f.write(final_html)

print("Generated new CSC locator HTML successfully.")
