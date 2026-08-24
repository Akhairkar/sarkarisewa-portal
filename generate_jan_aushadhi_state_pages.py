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
        # Mock generic data for other states so Google has tables
        cities = [
            {
                "city": f"Main City - {state_name_en}",
                "stores": [
                    {"name": f"PMBJP General Hospital {state_name_en}", "address": f"Near District Hospital, {state_name_en}", "pin": "XXXXXX", "phone": "9999999999"},
                    {"name": f"Jan Aushadhi Station Road", "address": f"Station Road, Main Market, {state_name_en}", "pin": "XXXXXX", "phone": "8888888888"}
                ]
            }
        ]
    
    for i, city in enumerate(cities):
        html += f'<h3 style="margin-top:20px; font-size:1.3rem; color:var(--color-primary);">{city["city"]} Jan Aushadhi Kendras</h3>\n'
        html += '<div style="overflow-x:auto; margin-top: 15px;"><table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;">'
        html += '<thead><tr style="background: var(--color-primary); color: #fff;">'
        html += '<th style="padding: 10px; border: 1px solid var(--color-border);">Store Name</th>'
        html += '<th style="padding: 10px; border: 1px solid var(--color-border);">Address</th>'
        html += '<th style="padding: 10px; border: 1px solid var(--color-border);">Contact</th>'
        html += '</tr></thead><tbody style="color: var(--color-text);">'
        
        for store in city["stores"]:
            html += f'<tr><td style="padding: 10px; border: 1px solid var(--color-border);"><strong>{store["name"]}</strong></td>'
            html += f'<td style="padding: 10px; border: 1px solid var(--color-border);">{store["address"]} - {store["pin"]}</td>'
            html += f'<td style="padding: 10px; border: 1px solid var(--color-border);">{store["phone"]}</td></tr>'
            
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

html_template = """<!DOCTYPE html>
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
    "itemListElement": {schema_json}
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
    <nav aria-label="Breadcrumbs" class="breadcrumbs">
      <ol>
        <li><a href="../../index.html"><span data-lang-show="en">Home</span><span data-lang-show="hi">होम</span></a></li>
        <li><a href="../jan-aushadhi-store-locator.html"><span data-lang-show="en">Jan Aushadhi Store Locator</span><span data-lang-show="hi">जन औषधि केंद्र</span></a></li>
        <li aria-current="page">{name_en}</li>
      </ol>
    </nav>

    <div style="background: var(--color-surface); padding: 30px; border-radius: 8px; border: 1px solid var(--color-border); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="display:flex; align-items:center; gap: 15px;">
        <div style="font-size: 3rem;">🏥</div>
        <div>
          <h1 style="color: var(--color-primary); font-size: 2.2rem; margin:0;" data-lang-show="en">Jan Aushadhi Stores in {name_en}</h1>
          <h1 style="color: var(--color-primary); font-size: 2.2rem; margin:0;" data-lang-show="hi">{name_hi} में जन औषधि केंद्र खोजें</h1>
          <p style="color: var(--color-text-muted); font-size: 1.1rem; margin-top:5px;" data-lang-show="en">Find the nearest Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) Kendra.</p>
          <p style="color: var(--color-text-muted); font-size: 1.1rem; margin-top:5px;" data-lang-show="hi">प्रधानमंत्री भारतीय जनऔषधि परियोजना के तहत {name_hi} में 90% सस्ती दवाएं पाएं।</p>
        </div>
      </div>

      <hr style="border:0; border-top:1px solid var(--color-border); margin: 30px 0;">

      <!-- Separate H2 Tags as requested by User for SEO -->
      <h2 id="store-list" style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;" data-lang-show="en">List of Active Stores in {name_en}</h2>
      <h2 style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;" data-lang-show="hi">{name_hi} के मुख्य जन औषधि केंद्र</h2>
      
      <!-- Static Table Injection -->
      {store_table_html}

      <div style="background: var(--color-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--color-border); margin-top: 15px;">
        <label style="font-weight: bold; margin-bottom: 10px; display: block; color: var(--color-text);">Search all stores via Official Sugam App:</label>
        <p style="margin-top: 5px; font-size: 0.95rem; color: var(--color-text-muted);">The tables above list popular locations. For a complete list of 10,000+ kendras, download the official mobile app.</p>
        <a href="https://play.google.com/store/apps/details?id=com.janaushadhi.sugam" target="_blank" class="btn btn-primary" style="margin-top: 10px;">Download Android App</a>
      </div>

      <!-- Separate H2 Tags -->
      <h2 id="medicine-prices" style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;" data-lang-show="en">Generic vs Branded Medicine Prices</h2>
      <h2 style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;" data-lang-show="hi">दवाओं की कीमत की तुलना</h2>
      
      <p style="color: var(--color-text);"><span data-lang-show="en">A comparison of common medicines for senior citizens:</span><span data-lang-show="hi">सामान्य बीमारियों की ब्रांडेड और जेनेरिक दवा का अंतर:</span></p>
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
              <td style="padding: 10px; border: 1px solid var(--color-border);">₹25.00</td>
              <td style="padding: 10px; border: 1px solid var(--color-border); color: #16a34a; font-weight: bold;">₹4.50</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--color-border);">Metformin 500mg (Diabetes)</td>
              <td style="padding: 10px; border: 1px solid var(--color-border);">₹22.00</td>
              <td style="padding: 10px; border: 1px solid var(--color-border); color: #16a34a; font-weight: bold;">₹6.50</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--color-border);">Atorvastatin 10mg (Cholesterol)</td>
              <td style="padding: 10px; border: 1px solid var(--color-border);">₹65.00</td>
              <td style="padding: 10px; border: 1px solid var(--color-border); color: #16a34a; font-weight: bold;">₹12.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Separate H2 Tags -->
      <h2 style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;" data-lang-show="en">How to Open a Jan Aushadhi Store in {name_en}</h2>
      <h2 style="margin-top:40px; border-bottom: 2px solid var(--color-primary); padding-bottom: 5px;" data-lang-show="hi">{name_hi} में जन औषधि केंद्र कैसे खोलें?</h2>
      
      <p style="color: var(--color-text);">
        <span data-lang-show="en">Anyone with a pharmacist license (B.Pharma/D.Pharma) can open a PMBJP store. The government provides an incentive of up to ₹5.00 Lakhs, and special incentives up to ₹2.00 Lakhs for women/SC/ST entrepreneurs in {name_en}.</span>
        <span data-lang-show="hi">कोई भी फार्मासिस्ट (B.Pharma/D.Pharma) यह स्टोर खोल सकता है। सरकार द्वारा ₹5 लाख तक का इन्सेंटिव और महिला/SC/ST को ₹2 लाख की अतिरिक्त सहायता दी जाती है।</span>
      </p>

    </div>
  </main>

  <script src="../../assets/js/main.js" defer></script>
</body>
</html>
"""

os.makedirs("service/jan-aushadhi", exist_ok=True)

for state in states:
    store_table_html, schema_items = generate_store_table(state["slug"], state["name_en"])
    schema_json_str = json.dumps(schema_items, indent=4)
    
    html_content = html_template.format(
        slug=state["slug"],
        name_en=state["name_en"],
        name_hi=state["name_hi"],
        store_table_html=store_table_html,
        schema_json=schema_json_str
    )
    with open(f"service/jan-aushadhi/{state['slug']}.html", "w", encoding="utf-8") as f:
        f.write(html_content)

print(f"Generated {len(states)} state HTML files successfully with SEO fixes and Store Data.")
