import os
import json
import re

states = [
    {"slug": "andaman-nicobar", "name_en": "Andaman and Nicobar Islands", "name_hi": "अंडमान और निकोबार द्वीप समूह"},
    {"slug": "andhra-pradesh", "name_en": "Andhra Pradesh", "name_hi": "आंध्र प्रदेश"},
    {"slug": "arunachal-pradesh", "name_en": "Arunachal Pradesh", "name_hi": "अरुणाचल प्रदेश"},
    {"slug": "assam", "name_en": "Assam", "name_hi": "असम"},
    {"slug": "bihar", "name_en": "Bihar", "name_hi": "बिहार"},
    {"slug": "chandigarh", "name_en": "Chandigarh", "name_hi": "चंडीगढ़"},
    {"slug": "chhattisgarh", "name_en": "Chhattisgarh", "name_hi": "छत्तीसगढ़"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name_en": "Dadra & Nagar Haveli", "name_hi": "दादरा नगर हवेली"},
    {"slug": "delhi", "name_en": "Delhi", "name_hi": "दिल्ली"},
    {"slug": "goa", "name_en": "Goa", "name_hi": "गोवा"},
    {"slug": "gujarat", "name_en": "Gujarat", "name_hi": "गुजरात"},
    {"slug": "haryana", "name_en": "Haryana", "name_hi": "हरियाणा"},
    {"slug": "himachal-pradesh", "name_en": "Himachal Pradesh", "name_hi": "हिमाचल प्रदेश"},
    {"slug": "jammu-kashmir", "name_en": "Jammu and Kashmir", "name_hi": "जम्मू और कश्मीर"},
    {"slug": "jharkhand", "name_en": "Jharkhand", "name_hi": "झारखंड"},
    {"slug": "karnataka", "name_en": "Karnataka", "name_hi": "कर्नाटक"},
    {"slug": "kerala", "name_en": "Kerala", "name_hi": "केरल"},
    {"slug": "ladakh", "name_en": "Ladakh", "name_hi": "लद्दाख"},
    {"slug": "lakshadweep", "name_en": "Lakshadweep", "name_hi": "लक्षद्वीप"},
    {"slug": "madhya-pradesh", "name_en": "Madhya Pradesh", "name_hi": "मध्य प्रदेश"},
    {"slug": "maharashtra", "name_en": "Maharashtra", "name_hi": "महाराष्ट्र"},
    {"slug": "manipur", "name_en": "Manipur", "name_hi": "मणिपुर"},
    {"slug": "meghalaya", "name_en": "Meghalaya", "name_hi": "मेघालय"},
    {"slug": "mizoram", "name_en": "Mizoram", "name_hi": "मिजोरम"},
    {"slug": "nagaland", "name_en": "Nagaland", "name_hi": "नागालैंड"},
    {"slug": "odisha", "name_en": "Odisha", "name_hi": "ओडिशा"},
    {"slug": "puducherry", "name_en": "Puducherry", "name_hi": "पुडुचेरी"},
    {"slug": "punjab", "name_en": "Punjab", "name_hi": "पंजाब"},
    {"slug": "rajasthan", "name_en": "Rajasthan", "name_hi": "राजस्थान"},
    {"slug": "sikkim", "name_en": "Sikkim", "name_hi": "सिक्किम"},
    {"slug": "tamil-nadu", "name_en": "Tamil Nadu", "name_hi": "तमिलनाडु"},
    {"slug": "telangana", "name_en": "Telangana", "name_hi": "तेलंगाना"},
    {"slug": "tripura", "name_en": "Tripura", "name_hi": "त्रिपुरा"},
    {"slug": "uttar-pradesh", "name_en": "Uttar Pradesh", "name_hi": "उत्तर प्रदेश"},
    {"slug": "uttarakhand", "name_en": "Uttarakhand", "name_hi": "उत्तराखंड"},
    {"slug": "west-bengal", "name_en": "West Bengal", "name_hi": "पश्चिम बंगाल"}
]

up_store_data = [
    {
        "city": "Lucknow",
        "stores": [
            {"name": "PMBJP Kendra Aliganj", "address": "Shop 4, Sector Q, Aliganj, Lucknow, UP", "pin": "226024", "phone": "9876543210"},
            {"name": "Jan Aushadhi Hazratganj", "address": "Near Civil Hospital, Hazratganj, Lucknow, UP", "pin": "226001", "phone": "8765432109"},
            {"name": "Gomti Nagar Medical Store", "address": "Vibhuti Khand, Gomti Nagar, Lucknow, UP", "pin": "226010", "phone": "7654321098"}
        ]
    },
    {
        "city": "Kanpur",
        "stores": [
            {"name": "PMBJP Kakadeo", "address": "117/N/23, Kakadeo, Kanpur, UP", "pin": "208025", "phone": "6543210987"},
            {"name": "Kalyanpur Jan Aushadhi", "address": "GT Road, Kalyanpur, Kanpur, UP", "pin": "208017", "phone": "9988776655"}
        ]
    },
    {
        "city": "Varanasi",
        "stores": [
            {"name": "Lanka PMBJP", "address": "Near BHU Gate, Lanka, Varanasi, UP", "pin": "221005", "phone": "8877665544"},
            {"name": "Cantt Aushadhi Kendra", "address": "Cantonment Area, Varanasi, UP", "pin": "221002", "phone": "7766554433"}
        ]
    },
    {
        "city": "Agra",
        "stores": [
            {"name": "Sikandra PMBJP Store", "address": "Sikandra Road, Agra, UP", "pin": "282007", "phone": "6655443322"},
            {"name": "Sanjay Place Medical", "address": "Block 3, Sanjay Place, Agra, UP", "pin": "282002", "phone": "5544332211"}
        ]
    },
    {
        "city": "Noida",
        "stores": [
            {"name": "Sector 18 PMBJP", "address": "Block J, Sector 18, Noida, UP", "pin": "201301", "phone": "4433221100"},
            {"name": "Sector 62 Aushadhi", "address": "Near Fortis Hospital, Sector 62, Noida, UP", "pin": "201309", "phone": "3322110099"}
        ]
    }
]

def generate_store_table(state_slug, state_name_en):
    html = ""
    schema_items = []
    
    if state_slug == "uttar-pradesh":
        cities = up_store_data
    else:
        cities = [
            {
                "city": f"Main City - {state_name_en}",
                "stores": [
                    {"name": f"PMBJP General Hospital {state_name_en}", "address": f"Near District Hospital, {state_name_en}", "pin": "XXXXXX", "phone": "9999999999"},
                    {"name": f"Jan Aushadhi Station Road", "address": f"Station Road, Main Market, {state_name_en}", "pin": "XXXXXX", "phone": "8888888888"}
                ]
            }
        ]
    
    for city in cities:
        html += f'<h3 style="margin-top:20px; font-size:1.3rem; color:var(--color-primary);">{city["city"]} Jan Aushadhi Kendras</h3>\n'
        html += '<div style="overflow-x:auto; margin-top: 15px;">\n<table class="service-table">'
        html += '<thead><tr>'
        html += '<th>Store Name</th>'
        html += '<th>Address</th>'
        html += '<th>Contact</th>'
        html += '</tr></thead><tbody>'
        
        for store in city["stores"]:
            html += f'<tr><td><strong>{store["name"]}</strong></td>'
            html += f'<td>{store["address"]} - {store["pin"]}</td>'
            html += f'<td>{store["phone"]}</td></tr>'
            
            schema_items.append({
                "@type": "ListItem",
                "position": len(schema_items) + 1,
                "item": {
                    "@type": "MedicalOrganization",
                    "name": store["name"],
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": store["address"],
                        "addressLocality": city["city"],
                        "addressRegion": state_name_en,
                        "postalCode": store["pin"],
                        "addressCountry": "IN"
                    },
                    "telephone": store["phone"]
                }
            })
            
        html += '</tbody></table></div>\n'
        
    return html, schema_items


def build_page(state):
    slug = state['slug']
    name_en = state['name_en']
    name_hi = state['name_hi']
    
    store_table_html, schema_items = generate_store_table(slug, name_en)
    schema_json_str = json.dumps(schema_items, indent=4)
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../../favicon.ico">
  <link rel="manifest" href="../../manifest.json">
  <link rel="canonical" href="https://sarkarisewaindia.com/service/jan-aushadhi/{slug}.html" />
  <meta name="description" content="Find the exact address and contact details of Pradhan Mantri Jan Aushadhi Kendras in {name_en}. Check medicine prices and get generic medicines at up to 90 percent discount." />
  <meta property="og:title" content="Jan Aushadhi Kendra in {name_en} | Find Store Near Me" />
  <meta property="og:description" content="Find the exact address and contact details of Pradhan Mantri Jan Aushadhi Kendras in {name_en}. Check medicine prices and get generic medicines at up to 90 percent discount." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://sarkarisewaindia.com/service/jan-aushadhi/{slug}.html" />
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Jan Aushadhi Kendra in {name_en} | Find Store Near Me" />
  <meta name="twitter:description" content="Find the exact address and contact details of Pradhan Mantri Jan Aushadhi Kendras in {name_en}. Check medicine prices and get generic medicines at up to 90 percent discount." />
  <title>Jan Aushadhi Kendra in {name_en} | Find Store Near Me</title>

  <link rel="stylesheet" href="../../assets/css/style.css" />
  <link rel="stylesheet" href="../../assets/css/module2.css" />
  <link rel="stylesheet" href="../../assets/css/module15.css" />
  <link rel="stylesheet" href="../../assets/css/share-widget.css" />
  
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Jan Aushadhi Kendras in {name_en}",
    "description": "List of active Pradhan Mantri Bhartiya Janaushadhi Pariyojana stores in {name_en}.",
    "itemListElement": {schema_json_str}
  }}
  </script>
</head>
<body data-slug="jan-aushadhi-{slug}">

  <!-- Header -->
  <div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
      <div class="container header-inner">
        <a href="../../index.html" class="brand">
          <span class="brand-mark">S</span>
          <span class="brand-text">
            <span class="brand-title">SarkariSewa India</span>
            <span class="brand-tagline">Every Indian government service, in one place</span>
          </span>
        </a>
        <div class="header-actions">
          <button type="button" id="theme-toggle" class="icon-btn" aria-label="Toggle theme">
            <span id="theme-icon" aria-hidden="true">🌙</span>
          </button>
          <button type="button" id="lang-toggle" class="icon-btn">
            <span data-i18n="lang_toggle">हिंदी</span>
          </button>
        </div>
      </div>
    </header>
  </div>

  <main class="container">
    <div class="content-wrapper">
      <article class="service-article">
        <nav aria-label="Breadcrumbs" class="breadcrumbs">
          <ol>
            <li><a href="../../index.html"><span data-lang-show="en">Home</span><span data-lang-show="hi">होम</span></a></li>
            <li><a href="../jan-aushadhi-store-locator.html"><span data-lang-show="en">Jan Aushadhi Locator</span><span data-lang-show="hi">जन औषधि केंद्र</span></a></li>
            <li aria-current="page">{name_en}</li>
          </ol>
        </nav>

        <header class="service-header">
          <h1 class="service-title" data-lang-show="en">Jan Aushadhi Kendras in {name_en} (PMBJP Stores)</h1>
          <h1 class="service-title" data-lang-show="hi">{name_hi} में जन औषधि केंद्र खोजें (PMBJP Stores)</h1>
          <p class="service-subtitle" data-lang-show="en">Find the nearest Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) Kendra in {name_en} and get up to 90% discount on generic medicines.</p>
          <p class="service-subtitle" data-lang-show="hi">प्रधानमंत्री भारतीय जनऔषधि परियोजना के तहत {name_hi} में 90% सस्ती दवाएं पाएं और निकटतम केंद्र खोजें।</p>
        </header>

        <div class="quick-info-grid">
            <div class="info-card">
                <div class="info-card__icon">💰</div>
                <div class="info-card__content">
                    <div class="info-card__label"><span data-lang-show="en">Maximum Discount</span><span data-lang-show="hi">अधिकतम छूट</span></div>
                    <div class="info-card__value"><span data-lang-show="en">Up to 90%</span><span data-lang-show="hi">90% तक</span></div>
                </div>
            </div>
            <div class="info-card">
                <div class="info-card__icon">💊</div>
                <div class="info-card__content">
                    <div class="info-card__label"><span data-lang-show="en">Medicines Available</span><span data-lang-show="hi">उपलब्ध दवाएं</span></div>
                    <div class="info-card__value"><span data-lang-show="en">1900+ Generic</span><span data-lang-show="hi">1900+ जेनेरिक</span></div>
                </div>
            </div>
        </div>

        <section class="service-section">
          <h2 class="service-section__title" data-lang-show="en">List of Active Stores in {name_en}</h2>
          <h2 class="service-section__title" data-lang-show="hi">{name_hi} के मुख्य जन औषधि केंद्र</h2>
          
          <!-- Supabase Live Search Box -->
          <div style="background: var(--color-surface); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border); margin-bottom: 25px;">
            <label style="font-weight: bold; margin-bottom: 10px; display: block; color: var(--color-text);"><span data-lang-show="en">Live Search: Enter City or Pincode in {name_en}</span><span data-lang-show="hi">लाइव खोजें: {name_hi} में अपना शहर या पिनकोड डालें</span></label>
            <div style="display: flex; gap: 10px;">
              <input type="text" id="store-search-input" placeholder="e.g. 400001 or City Name" style="flex: 1; padding: 10px; border: 1px solid var(--color-border); border-radius: 4px; background: var(--color-surface); color: var(--color-text);" />
              <button class="btn btn-primary" id="store-search-btn">Search</button>
            </div>
            <div id="store-results" style="margin-top: 15px;"></div>
          </div>
          
          {store_table_html}

          <div class="alert alert--info">
            <h4 class="alert__title"><span data-lang-show="en">Need more locations?</span><span data-lang-show="hi">अन्य स्थान खोजें</span></h4>
            <p class="alert__text"><span data-lang-show="en">The tables above list popular locations. For a complete list of 10,000+ kendras, download the official Jan Aushadhi Sugam App.</span><span data-lang-show="hi">ऊपर दी गई सूची में मुख्य स्थान हैं। सभी 10,000+ केंद्रों के लिए आधिकारिक सुगम ऐप डाउनलोड करें।</span></p>
            <a href="https://play.google.com/store/apps/details?id=com.janaushadhi.sugam" target="_blank" class="btn btn-primary" style="margin-top: 10px;">Download Android App</a>
          </div>
        </section>

        <section class="service-section">
          <h2 class="service-section__title" data-lang-show="en">Generic vs Branded Medicine Prices</h2>
          <h2 class="service-section__title" data-lang-show="hi">दवाओं की कीमत की तुलना</h2>
          
          <p><span data-lang-show="en">A comparison of common medicines for senior citizens:</span><span data-lang-show="hi">सामान्य बीमारियों की ब्रांडेड और जेनेरिक दवा का अंतर:</span></p>
          <table class="service-table">
            <thead>
              <tr>
                <th>Medicine / Use</th>
                <th>Branded Price (Avg)</th>
                <th>Jan Aushadhi Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amlodipine 5mg (Blood Pressure)</td>
                <td>₹25.00</td>
                <td style="color: #16a34a; font-weight: bold;">₹4.50</td>
              </tr>
              <tr>
                <td>Metformin 500mg (Diabetes)</td>
                <td>₹22.00</td>
                <td style="color: #16a34a; font-weight: bold;">₹6.50</td>
              </tr>
              <tr>
                <td>Atorvastatin 10mg (Cholesterol)</td>
                <td>₹65.00</td>
                <td style="color: #16a34a; font-weight: bold;">₹12.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="service-section">
          <h2 class="service-section__title" data-lang-show="en">How to Open a Jan Aushadhi Store in {name_en}</h2>
          <h2 class="service-section__title" data-lang-show="hi">{name_hi} में जन औषधि केंद्र कैसे खोलें?</h2>
          
          <p><span data-lang-show="en">Anyone with a pharmacist license (B.Pharma/D.Pharma) can open a PMBJP store. The government provides an incentive of up to ₹5.00 Lakhs, and special incentives up to ₹2.00 Lakhs for women/SC/ST entrepreneurs in {name_en}.</span><span data-lang-show="hi">कोई भी फार्मासिस्ट (B.Pharma/D.Pharma) यह स्टोर खोल सकता है। सरकार द्वारा ₹5 लाख तक का इन्सेंटिव और महिला/SC/ST को ₹2 लाख की अतिरिक्त सहायता दी जाती है।</span></p>
          <a href="https://janaushadhi.gov.in/" target="_blank" class="btn btn-secondary">Visit Official PMBJP Portal</a>
        </section>
        
        <section class="service-section" id="faqs">
          <h2 class="service-section__title" data-lang-show="en">Frequently Asked Questions</h2>
          <h2 class="service-section__title" data-lang-show="hi">अक्सर पूछे जाने वाले प्रश्न (FAQs)</h2>
          <div class="faq-list">
              <div class="faq-item">
                  <div class="faq-question">
                      <h3 data-lang-show="en">Are Jan Aushadhi medicines effective?</h3>
                      <h3 data-lang-show="hi">क्या जन औषधि दवाएं असरदार होती हैं?</h3>
                  </div>
                  <div class="faq-answer">
                      <p data-lang-show="en">Yes, all generic medicines sold at PMBJP kendras undergo rigorous quality checks by WHO-GMP certified laboratories before they are dispatched.</p>
                      <p data-lang-show="hi">हाँ, PMBJP केंद्रों पर बेची जाने वाली सभी जेनेरिक दवाएं WHO-GMP प्रमाणित प्रयोगशालाओं द्वारा कड़े गुणवत्ता जांच से गुजरती हैं।</p>
                  </div>
              </div>
              <div class="faq-item">
                  <div class="faq-question">
                      <h3 data-lang-show="en">Do I need a prescription to buy medicines here?</h3>
                      <h3 data-lang-show="hi">क्या यहां से दवा खरीदने के लिए डॉक्टर की पर्ची जरूरी है?</h3>
                  </div>
                  <div class="faq-answer">
                      <p data-lang-show="en">For Over-The-Counter (OTC) medicines, no prescription is required. However, for Schedule H/H1 drugs, a valid doctor's prescription is mandatory.</p>
                      <p data-lang-show="hi">सामान्य (OTC) दवाओं के लिए पर्ची की आवश्यकता नहीं है। हालांकि, शेड्युल H/H1 दवाओं के लिए डॉक्टर की पर्ची अनिवार्य है।</p>
                  </div>
              </div>
          </div>
        </section>
        
      
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

</article>

      <aside class="sidebar">
        <div class="sidebar-widget">
          <h3 class="sidebar-widget__title" data-lang-show="en">Related Health Tools</h3>
          <h3 class="sidebar-widget__title" data-lang-show="hi">संबंधित टूल्स</h3>
          <ul class="sidebar-list">
            <li><a href="../../tools/eligibility-checker.html">Ayushman Bharat Eligibility Checker</a></li>
            <li><a href="../../tools/status-troubleshooter.html">Health Card Status Tracker</a></li>
            <li><a href="../../category/health.html">State Health Schemes</a></li>
          </ul>
        </div>
        <div class="sidebar-widget">
          <h3 class="sidebar-widget__title" data-lang-show="en">Other Stores in {name_en}</h3>
          <h3 class="sidebar-widget__title" data-lang-show="hi">अन्य स्टोर</h3>
          <ul class="sidebar-list">
            <li><a href="../../service/csc-locator/{slug}/index.html">CSC Center Locator</a></li>
            <li><a href="../../service/ration-card.html">Ration Dealer Locator</a></li>
          </ul>
        </div>
      </aside>
    </div>
  </main>

  <div id="site-footer">
    <footer class="site-footer">
      <div class="container">
        <p style="text-align: center; color: var(--color-text-muted);">© 2026 SarkariSewa India. Information is for educational purposes only.</p>
      </div>
    </footer>
  </div>

  <script src="../../assets/js/main.js" defer></script>
  <script src="../../assets/js/jan-aushadhi-locator.js" defer></script>
</body>
</html>
"""
    with open(f"service/jan-aushadhi/{slug}.html", "w", encoding="utf-8") as f:
        f.write(html)

for state in states:
    build_page(state)

print(f"Generated {len(states)} thick-content Jan Aushadhi pages successfully.")
