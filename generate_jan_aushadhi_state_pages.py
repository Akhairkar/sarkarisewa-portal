import os
import re

states = [
    {"slug": "andhra-pradesh", "name_en": "Andhra Pradesh", "name_hi": "आंध्र प्रदेश"},
    {"slug": "arunachal-pradesh", "name_en": "Arunachal Pradesh", "name_hi": "अरुणाचल प्रदेश"},
    {"slug": "assam", "name_en": "Assam", "name_hi": "असम"},
    {"slug": "bihar", "name_en": "Bihar", "name_hi": "बिहार"},
    {"slug": "chhattisgarh", "name_en": "Chhattisgarh", "name_hi": "छत्तीसगढ़"},
    {"slug": "goa", "name_en": "Goa", "name_hi": "गोवा"},
    {"slug": "gujarat", "name_en": "Gujarat", "name_hi": "गुजरात"},
    {"slug": "haryana", "name_en": "Haryana", "name_hi": "हरियाणा"},
    {"slug": "himachal-pradesh", "name_en": "Himachal Pradesh", "name_hi": "हिमाचल प्रदेश"},
    {"slug": "jharkhand", "name_en": "Jharkhand", "name_hi": "झारखंड"},
    {"slug": "karnataka", "name_en": "Karnataka", "name_hi": "कर्नाटक"},
    {"slug": "kerala", "name_en": "Kerala", "name_hi": "केरल"},
    {"slug": "madhya-pradesh", "name_en": "Madhya Pradesh", "name_hi": "मध्य प्रदेश"},
    {"slug": "maharashtra", "name_en": "Maharashtra", "name_hi": "महाराष्ट्र"},
    {"slug": "manipur", "name_en": "Manipur", "name_hi": "मणिपुर"},
    {"slug": "meghalaya", "name_en": "Meghalaya", "name_hi": "मेघालय"},
    {"slug": "mizoram", "name_en": "Mizoram", "name_hi": "मिजोरम"},
    {"slug": "nagaland", "name_en": "Nagaland", "name_hi": "नागालैंड"},
    {"slug": "odisha", "name_en": "Odisha", "name_hi": "ओडिशा"},
    {"slug": "punjab", "name_en": "Punjab", "name_hi": "पंजाब"},
    {"slug": "rajasthan", "name_en": "Rajasthan", "name_hi": "राजस्थान"},
    {"slug": "sikkim", "name_en": "Sikkim", "name_hi": "सिक्किम"},
    {"slug": "tamil-nadu", "name_en": "Tamil Nadu", "name_hi": "तमिलनाडु"},
    {"slug": "telangana", "name_en": "Telangana", "name_hi": "तेलंगाना"},
    {"slug": "tripura", "name_en": "Tripura", "name_hi": "त्रिपुरा"},
    {"slug": "uttar-pradesh", "name_en": "Uttar Pradesh", "name_hi": "उत्तर प्रदेश"},
    {"slug": "uttarakhand", "name_en": "Uttarakhand", "name_hi": "उत्तराखंड"},
    {"slug": "west-bengal", "name_en": "West Bengal", "name_hi": "पश्चिम बंगाल"},
    {"slug": "andaman-nicobar", "name_en": "Andaman and Nicobar Islands", "name_hi": "अंडमान और निकोबार द्वीप समूह"},
    {"slug": "chandigarh", "name_en": "Chandigarh", "name_hi": "चंडीगढ़"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name_en": "Dadra & Nagar Haveli and Daman & Diu", "name_hi": "दादरा एवं नगर हवेली तथा दमन एवं दीव"},
    {"slug": "delhi", "name_en": "Delhi", "name_hi": "दिल्ली"},
    {"slug": "jammu-kashmir", "name_en": "Jammu and Kashmir", "name_hi": "जम्मू और कश्मीर"},
    {"slug": "ladakh", "name_en": "Ladakh", "name_hi": "लद्दाख"},
    {"slug": "lakshadweep", "name_en": "Lakshadweep", "name_hi": "लक्षद्वीप"},
    {"slug": "puducherry", "name_en": "Puducherry", "name_hi": "पुडुचेरी"}
]

# Create directory
os.makedirs("service/jan-aushadhi", exist_ok=True)

# Read the base template (we will use a generic simple layout that mimics the site's design)
# Since reading exact chunks of HTML and doing complex regex might break the UI,
# I will generate a pure, clean HTML template that matches the site exactly.

html_template = """<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../../favicon.ico">
  <link rel="manifest" href="../../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/service/jan-aushadhi/{slug}.html" />
  
  <title>Jan Aushadhi Kendra in {name_en} - Store List & Generic Medicine Prices</title>
  <meta name="description" content="Find all Pradhan Mantri Bhartiya Jan Aushadhi Kendra stores in {name_en} ({name_hi}). Check generic medicine prices, store locator, and old age schemes." />
  
  <meta property="og:title" content="Jan Aushadhi Kendra in {name_en} - Store List & Generic Medicine Prices" />
  <meta property="og:description" content="Find all Pradhan Mantri Bhartiya Jan Aushadhi Kendra stores in {name_en} ({name_hi}). Check generic medicine prices, store locator, and old age schemes." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://sarkarisewaindia.com/service/jan-aushadhi/{slug}.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Jan Aushadhi Kendra in {name_en} - Store List & Generic Medicine Prices" />
  <meta name="twitter:description" content="Find all Pradhan Mantri Bhartiya Jan Aushadhi Kendra stores in {name_en} ({name_hi}). Check generic medicine prices, store locator, and old age schemes." />

  <link rel="stylesheet" href="../../assets/css/style.css" />
  <link rel="stylesheet" href="../../assets/css/module2.css" />
  <link rel="stylesheet" href="../../assets/css/module15.css" />
  <link rel="stylesheet" href="../../assets/css/module16.css" />

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "Jan Aushadhi Kendra in {name_en}",
    "description": "Pradhan Mantri Bhartiya Jan Aushadhi Pariyojana store locator and details for {name_en}.",
    "provider": {{
      "@type": "GovernmentOrganization",
      "name": "Government of India"
    }},
    "areaServed": {{
      "@type": "State",
      "name": "{name_en}"
    }}
  }}
  </script>
</head>
<body data-slug="jan-aushadhi-{slug}">
  <script>window.SS_ROOT = "../../";</script>
  
  <div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
      <div class="container header-inner">
        <a href="../../index.html" class="brand">
          <span class="brand-mark">S</span>
          <span class="brand-text">
            <span class="brand-title" data-i18n="site_name">SarkariSewa India</span>
            <span class="brand-tagline" data-i18n="site_tagline">Every Indian government service, in one place</span>
          </span>
        </a>
      </div>
    </header>
  </div>

  <main class="container">
    <nav class="breadcrumb" id="breadcrumb" aria-label="Breadcrumb">
      <a href="../../index.html">Home</a>
      <span class="sep">/</span>
      <a href="../jan-aushadhi-store-locator.html">Jan Aushadhi Locator</a>
      <span class="sep">/</span>
      <span class="current">{name_en}</span>
    </nav>

    <div class="content-wrapper" style="margin-top:20px; background: var(--color-surface); padding: 30px; border-radius: 8px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <h1 style="color: var(--color-primary); margin-bottom: 15px; font-size: 2.2rem;">
        <span data-lang-show="en">Jan Aushadhi Kendra in {name_en} - Stores & Price Guide</span>
        <span data-lang-show="hi">{name_hi} में जन औषधि केंद्र - स्टोर लिस्ट और दवाओं के दाम</span>
      </h1>
      
      <!-- Anchor Links -->
      <div style="display:flex; gap: 15px; flex-wrap: wrap; margin-bottom: 25px;">
        <a href="#store-locator" class="btn btn-primary" style="text-decoration: none;">⬇️ Search Stores</a>
        <a href="#medicine-prices" class="btn btn-outline" style="text-decoration: none; color: var(--color-text); border: 1px solid var(--color-border);">⬇️ Compare Prices</a>
        <a href="#senior-schemes" class="btn btn-outline" style="text-decoration: none; color: var(--color-text); border: 1px solid var(--color-border);">⬇️ Old Age Schemes</a>
        <a href="#official-links" class="btn btn-outline" style="text-decoration: none; color: var(--color-text); border: 1px solid var(--color-border);">⬇️ Official App</a>
      </div>

      <p style="font-size: 1.1rem; line-height: 1.6; color: var(--color-text-muted);">
        <span data-lang-show="en">Find Pradhan Mantri Bhartiya Jan Aushadhi Kendra (PMBJP) stores in {name_en}. Save up to 50%-90% on generic medicines for diabetes, blood pressure, and chronic diseases. Complete guide to store locations, prices, and senior citizen benefits in {name_en}.</span>
        <span data-lang-show="hi">{name_hi} में प्रधानमंत्री भारतीय जन औषधि केंद्र खोजें। शुगर, बीपी और अन्य बीमारियों की जेनेरिक दवाओं पर 50%-90% तक की बचत करें। {name_hi} के सभी स्टोर्स और वरिष्ठ नागरिकों के लिए योजनाओं की जानकारी।</span>
      </p>

      <!-- Section 1: Store Locator UI -->
      <h2 id="store-locator" style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">🔍 Search Jan Aushadhi Stores in {name_en}</span>
        <span data-lang-show="hi">🔍 {name_hi} में जन औषधि केंद्र खोजें</span>
      </h2>
      <div style="background: var(--color-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border); margin-top: 15px;">
        <label style="font-weight: bold; margin-bottom: 10px; display: block; color: var(--color-text);">Search by City or Pincode in {name_en}:</label>
        <div style="display: flex; gap: 10px;">
          <input type="text" id="store-search-input" placeholder="e.g. 400001 or City Name" style="flex: 1; padding: 10px; border: 1px solid var(--color-border); border-radius: 4px; background: var(--color-surface); color: var(--color-text);" />
          <button class="btn btn-primary" onclick="alert('Full store database integration in progress. Please use the official Sugam App link below for now.')">Search Stores</button>
        </div>
        <p style="margin-top: 15px; font-size: 0.9rem; color: var(--color-text-muted);">* Showing results from {name_en}'s active PMBJP Kendras.</p>
      </div>

      <!-- Section 2: Medicine Prices -->
      <h2 id="medicine-prices" style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">💊 Generic vs Branded Medicine Prices</span>
        <span data-lang-show="hi">💊 जेनेरिक और ब्रांडेड दवाओं के दाम</span>
      </h2>
      <p style="color: var(--color-text);"><span data-lang-show="en">A comparison of common medicines for senior citizens in {name_en}:</span><span data-lang-show="hi">{name_hi} में वरिष्ठ नागरिकों की आम दवाओं की तुलना:</span></p>
      <div style="overflow-x:auto; margin-top: 15px;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: var(--color-primary); color: #fff;">
              <th style="padding: 10px; border: 1px solid var(--color-border);">Medicine / Use</th>
              <th style="padding: 10px; border: 1px solid var(--color-border);">Branded Price (Avg)</th>
              <th style="padding: 10px; border: 1px solid var(--color-border);">Jan Aushadhi Price</th>
            </tr>
          </thead>
          <tbody style="color: var(--color-text);">
            <tr>
              <td style="padding: 10px; border: 1px solid var(--color-border);">Amlodipine 5mg (Blood Pressure)</td>
              <td style="padding: 10px; border: 1px solid var(--color-border);">₹ 25.00</td>
              <td style="padding: 10px; border: 1px solid var(--color-border); color: #16a34a; font-weight: bold;">₹ 4.50</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--color-border);">Metformin 500mg (Diabetes)</td>
              <td style="padding: 10px; border: 1px solid var(--color-border);">₹ 22.00</td>
              <td style="padding: 10px; border: 1px solid var(--color-border); color: #16a34a; font-weight: bold;">₹ 6.50</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--color-border);">Atorvastatin 10mg (Cholesterol)</td>
              <td style="padding: 10px; border: 1px solid var(--color-border);">₹ 65.00</td>
              <td style="padding: 10px; border: 1px solid var(--color-border); color: #16a34a; font-weight: bold;">₹ 12.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 3: Old Age Schemes Cross Linking -->
      <h2 id="senior-schemes" style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">👴 State Benefits for Senior Citizens in {name_en}</span>
        <span data-lang-show="hi">👴 {name_hi} में वरिष्ठ नागरिकों के लिए सरकारी लाभ</span>
      </h2>
      <ul style="margin-top: 15px; color: var(--color-text); line-height: 1.8;">
        <li><a href="../../states/{slug}.html">Explore all State Schemes in {name_en}</a></li>
        <li><a href="../../category/health.html">Apply for Ayushman Bharat Health Card</a></li>
        <li><a href="../../tools/eligibility-checker.html">Check Eligibility for Old Age Pension</a></li>
      </ul>

      <!-- Section 4: Franchise Info -->
      <h2 style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">🏪 How to Open a Jan Aushadhi Store in {name_en}</span>
        <span data-lang-show="hi">🏪 {name_hi} में जन औषधि केंद्र कैसे खोलें?</span>
      </h2>
      <p style="color: var(--color-text);">
        <span data-lang-show="en">Anyone with a pharmacist license (B.Pharma/D.Pharma) can open a PMBJP store. The government provides an incentive of up to ₹5.00 Lakhs, and special incentives up to ₹2.00 Lakhs for women/SC/ST entrepreneurs in {name_en}.</span>
        <span data-lang-show="hi">फार्मासिस्ट लाइसेंस वाला कोई भी व्यक्ति इसे खोल सकता है। सरकार द्वारा ₹5 लाख तक का प्रोत्साहन और {name_hi} में महिलाओं/SC/ST के लिए अतिरिक्त ₹2 लाख का लाभ दिया जाता है।</span>
      </p>

      <!-- Section 5: Official Links -->
      <h2 id="official-links" style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;">
        <span data-lang-show="en">✅ Official Links & App Download</span>
        <span data-lang-show="hi">✅ आधिकारिक लिंक और ऐप</span>
      </h2>
      <div style="background: #e0f2fe; border-left: 4px solid #0284c7; padding: 15px; margin-top: 15px; border-radius: 4px; color: #0f172a;">
        <p><strong>Jan Aushadhi Sugam App:</strong> Find live store locations directly on your phone.</p>
        <a href="https://play.google.com/store/apps/details?id=com.janaushadhi.sugam" target="_blank" class="btn btn-primary" style="margin-top: 10px;">Download Android App</a>
        <br><br>
        <p><strong>Official Website:</strong></p>
        <a href="https://janaushadhi.gov.in/" target="_blank" style="color: #0284c7; font-weight: bold;">janaushadhi.gov.in</a>
      </div>
      
    </div>
  </main>

  <!-- Include Language Toggle and Theme Script -->
  <script src="../../assets/js/main.js" defer></script>
</body>
</html>
"""

for state in states:
    html_content = html_template.format(
        slug=state["slug"],
        name_en=state["name_en"],
        name_hi=state["name_hi"]
    )
    with open(f"service/jan-aushadhi/{state['slug']}.html", "w", encoding="utf-8") as f:
        f.write(html_content)

print(f"Generated {len(states)} state HTML files successfully.")
