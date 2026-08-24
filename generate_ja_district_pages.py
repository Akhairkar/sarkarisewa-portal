import json, os, glob

# Step 1: Analyze all state JSONs to understand district distribution
all_data = {}
for filepath in sorted(glob.glob("data/jan-aushadhi/*.json")):
    basename = os.path.basename(filepath).replace(".json", "")
    if basename == "store-locator":
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        stores = json.load(f)
    
    districts = {}
    for s in stores:
        d = s.get("d", "Unknown")
        if d not in districts:
            districts[d] = []
        districts[d].append(s)
    
    all_data[basename] = {
        "total": len(stores),
        "districts": {k: len(v) for k, v in districts.items()},
        "district_data": districts
    }

# Step 2: Generate district-level HTML pages
state_names = {
    "andaman-nicobar": "Andaman & Nicobar", "andhra-pradesh": "Andhra Pradesh",
    "arunachal-pradesh": "Arunachal Pradesh", "assam": "Assam", "bihar": "Bihar",
    "chandigarh": "Chandigarh", "chhattisgarh": "Chhattisgarh",
    "dadra-nagar-haveli-daman-diu": "Dadra & Nagar Haveli", "delhi": "Delhi",
    "goa": "Goa", "gujarat": "Gujarat", "haryana": "Haryana",
    "himachal-pradesh": "Himachal Pradesh", "jammu-kashmir": "Jammu & Kashmir",
    "jharkhand": "Jharkhand", "karnataka": "Karnataka", "kerala": "Kerala",
    "ladakh": "Ladakh", "lakshadweep": "Lakshadweep", "madhya-pradesh": "Madhya Pradesh",
    "maharashtra": "Maharashtra", "manipur": "Manipur", "meghalaya": "Meghalaya",
    "mizoram": "Mizoram", "nagaland": "Nagaland", "odisha": "Odisha",
    "puducherry": "Puducherry", "punjab": "Punjab", "rajasthan": "Rajasthan",
    "sikkim": "Sikkim", "tamil-nadu": "Tamil Nadu", "telangana": "Telangana",
    "tripura": "Tripura", "uttar-pradesh": "Uttar Pradesh",
    "uttarakhand": "Uttarakhand", "west-bengal": "West Bengal"
}

def slugify(name):
    return name.lower().replace(" ", "-").replace(".", "").replace("(", "").replace(")", "").replace("'", "")

def build_store_rows(stores):
    rows = ""
    schema_items = []
    for i, s in enumerate(stores):
        name = s.get("p", "PMBJP Kendra")
        addr = s.get("a", "")
        phone = s.get("ph", "N/A")
        pin = s.get("pin", "")
        lt = s.get("lt", "")
        lg = s.get("lg", "")
        maps_link = f"https://www.google.com/maps?q={lt},{lg}" if lt and lg else "#"
        
        rows += f"""<tr>
<td><strong>{name}</strong></td>
<td>{addr} — {pin}</td>
<td><a href="tel:{phone}">{phone}</a></td>
<td><a href="{maps_link}" target="_blank" rel="noopener">Map</a></td>
</tr>
"""
        if i < 20:  # Schema for first 20
            schema_items.append({
                "@type": "ListItem", "position": i+1,
                "item": {
                    "@type": "LocalBusiness", "name": f"Jan Aushadhi Kendra - {name}",
                    "address": {"@type": "PostalAddress", "streetAddress": addr, "postalCode": str(pin), "addressCountry": "IN"},
                    "telephone": phone
                }
            })
    return rows, schema_items

def build_district_page(state_slug, state_name, district_name, stores):
    district_slug = slugify(district_name)
    count = len(stores)
    store_rows, schema_items = build_store_rows(stores)
    schema_json = json.dumps(schema_items, ensure_ascii=False)
    
    # Nearby districts for cross-linking (will be injected later)
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" type="image/png" sizes="32x32" href="../../../assets/img/favicon-32.png">
<link rel="icon" href="../../../favicon.ico">
<link rel="canonical" href="https://sarkarisewaindia.com/service/jan-aushadhi/{state_slug}/{district_slug}.html"/>
<title>{district_name} Jan Aushadhi Kendra List 2026 | 90% Discount ({count} Stores)</title>
<meta name="description" content="{district_name} ({state_name}) ke sabhi {count} Jan Aushadhi Kendra ka pata, phone number aur Google Maps link. Generic dawai 90% sasti milegi. Abhi nearest store khojein!"/>
<meta property="og:title" content="{district_name} Jan Aushadhi Kendra List 2026 | 90% Discount ({count} Stores)"/>
<meta property="og:description" content="{district_name} ({state_name}) ke sabhi {count} Jan Aushadhi Kendra ka pata aur phone number. Generic dawai 90% sasti."/>
<meta property="og:url" content="https://sarkarisewaindia.com/service/jan-aushadhi/{state_slug}/{district_slug}.html"/>
<meta property="og:type" content="article"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="{district_name} Jan Aushadhi Kendra 2026 ({count} Stores)"/>
<link rel="stylesheet" href="../../../assets/css/style.css"/>
<link rel="stylesheet" href="../../../assets/css/module2.css"/>
<script type="application/ld+json">
{{"@context":"https://schema.org","@type":"ItemList","name":"Jan Aushadhi Kendras in {district_name}, {state_name}","numberOfItems":{count},"itemListElement":{schema_json}}}
</script>
</head>
<body data-slug="jan-aushadhi-{state_slug}-{district_slug}">
<div id="site-header">
<div class="tricolor-rule"></div>
<header class="site-header">
<div class="container header-inner">
<a href="../../../index.html" class="brand"><span class="brand-mark">S</span><span class="brand-text"><span class="brand-title">SarkariSewa India</span><span class="brand-tagline">Every Indian government service, in one place</span></span></a>
<div class="header-actions">
<button type="button" id="theme-toggle" class="icon-btn" aria-label="Toggle theme"><span id="theme-icon">&#127769;</span></button>
<button type="button" id="lang-toggle" class="icon-btn"><span data-i18n="lang_toggle">Hindi</span></button>
</div>
</div>
</header>
</div>

<main class="container">
<div class="content-wrapper">
<article class="service-article">

<nav aria-label="Breadcrumbs" class="breadcrumbs"><ol>
<li><a href="../../../index.html">Home</a></li>
<li><a href="../../jan-aushadhi-store-locator.html">Jan Aushadhi</a></li>
<li><a href="../{state_slug}.html">{state_name}</a></li>
<li aria-current="page">{district_name}</li>
</ol></nav>

<header class="service-header">
<h1 class="service-title">{district_name} Jan Aushadhi Kendra List 2026 ({count} Stores)</h1>
<p class="service-subtitle">{district_name}, {state_name} ke sabhi {count} Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) stores ka complete list with address, phone number aur Google Maps directions. Generic medicines 50-90% sasti milti hain branded dawai se.</p>
</header>

<div class="quick-info-grid">
<div class="info-card"><div class="info-card__icon">&#128138;</div><div class="info-card__content"><div class="info-card__label">Total Stores</div><div class="info-card__value">{count}</div></div></div>
<div class="info-card"><div class="info-card__icon">&#128176;</div><div class="info-card__content"><div class="info-card__label">Discount</div><div class="info-card__value">Up to 90%</div></div></div>
<div class="info-card"><div class="info-card__icon">&#128137;</div><div class="info-card__content"><div class="info-card__label">Medicines</div><div class="info-card__value">1900+</div></div></div>
</div>

<section class="service-section">
<h2 class="service-section__title">All {count} Jan Aushadhi Stores in {district_name}</h2>
<p>Neeche {district_name} district ke sabhi PMBJP Kendras ki complete list hai. Kisi bhi store ka phone number ya Google Maps direction dekhne ke liye table mein click karein.</p>
<div style="overflow-x:auto;">
<table class="service-table">
<thead><tr><th>Owner / Store Name</th><th>Address</th><th>Phone</th><th>Map</th></tr></thead>
<tbody>
{store_rows}
</tbody>
</table>
</div>
</section>

<section class="service-section">
<h2 class="service-section__title">Generic vs Branded Price Comparison</h2>
<table class="service-table">
<thead><tr><th>Medicine</th><th>Branded (MRP)</th><th>Jan Aushadhi</th><th>You Save</th></tr></thead>
<tbody>
<tr><td>Amlodipine 5mg (BP)</td><td>Rs.25</td><td>Rs.4.50</td><td style="color:#16a34a;font-weight:bold;">82%</td></tr>
<tr><td>Metformin 500mg (Diabetes)</td><td>Rs.22</td><td>Rs.6.50</td><td style="color:#16a34a;font-weight:bold;">70%</td></tr>
<tr><td>Atorvastatin 10mg (Cholesterol)</td><td>Rs.65</td><td>Rs.12</td><td style="color:#16a34a;font-weight:bold;">82%</td></tr>
<tr><td>Paracetamol 500mg</td><td>Rs.15</td><td>Rs.1.50</td><td style="color:#16a34a;font-weight:bold;">90%</td></tr>
</tbody>
</table>
</section>

<section class="service-section" id="faqs">
<h2 class="service-section__title">FAQs - {district_name} Jan Aushadhi Kendra</h2>
<div class="faq-list">
<div class="faq-item"><div class="faq-question"><h3>{district_name} mein kitne Jan Aushadhi Kendra hain?</h3></div><div class="faq-answer"><p>{district_name}, {state_name} mein kul {count} Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP) stores hain jahan aapko 1900+ generic medicines 50-90% discount par mil sakti hain.</p></div></div>
<div class="faq-item"><div class="faq-question"><h3>Kya Jan Aushadhi ki dawaiyaan safe hain?</h3></div><div class="faq-answer"><p>Haan, sabhi generic medicines WHO-GMP certified laboratories se aati hain aur CDSCO dwara approved hain. Quality branded dawai jaisi hi hoti hai, sirf price kam hoti hai kyunki marketing cost nahi hota.</p></div></div>
<div class="faq-item"><div class="faq-question"><h3>{district_name} mein Jan Aushadhi Kendra kaise kholen?</h3></div><div class="faq-answer"><p>B.Pharma ya D.Pharma degree holders apply kar sakte hain. Sarkar Rs.5 Lakh tak ka incentive deti hai. SC/ST/Women entrepreneurs ko Rs.2 Lakh extra milta hai. Apply karein: janaushadhi.gov.in</p></div></div>
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
<h3 class="sidebar-widget__title">Other Services in {district_name}</h3>
<ul class="sidebar-list">
<li><a href="../../../tools/csc-locator.html">CSC Center in {district_name}</a></li>
<li><a href="../../../tools/eligibility-checker.html">Scheme Eligibility Checker</a></li>
<li><a href="../../../tools/status-troubleshooter.html">Application Status Tracker</a></li>
</ul>
</div>
<div class="sidebar-widget">
<h3 class="sidebar-widget__title">{state_name} Jan Aushadhi</h3>
<ul class="sidebar-list">
<li><a href="../{state_slug}.html">All Districts in {state_name}</a></li>
<li><a href="../../jan-aushadhi-store-locator.html">All India Store Locator</a></li>
</ul>
</div>
</aside>
</div>
</main>

<div id="site-footer"><footer class="site-footer"><div class="container"><p style="text-align:center;color:var(--color-text-muted);">&copy; 2026 SarkariSewa India. Information is for educational purposes only.</p></div></footer></div>
<script src="../../../assets/js/main.js" defer></script>
</body>
</html>"""
    return html, district_slug

# Step 3: Generate all pages + state index pages
total_pages = 0
state_index_data = {}

for state_slug, info in all_data.items():
    state_name = state_names.get(state_slug, state_slug.replace("-", " ").title())
    os.makedirs(f"service/jan-aushadhi/{state_slug}", exist_ok=True)
    
    district_links = []
    
    for district_name, stores in info["district_data"].items():
        html, district_slug = build_district_page(state_slug, state_name, district_name, stores)
        filepath = f"service/jan-aushadhi/{state_slug}/{district_slug}.html"
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        total_pages += 1
        district_links.append({"slug": district_slug, "name": district_name, "count": len(stores)})
    
    # Generate state index page listing all districts
    district_links.sort(key=lambda x: x["name"])
    links_html = ""
    for dl in district_links:
        links_html += f'<a href="{dl["slug"]}.html" style="display:block;padding:12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;text-decoration:none;color:var(--color-primary);font-weight:500;">{dl["name"]} ({dl["count"]} stores) &rarr;</a>\n'
    
    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="../../../favicon.ico">
<link rel="canonical" href="https://sarkarisewaindia.com/service/jan-aushadhi/{state_slug}/index.html"/>
<title>{state_name} Jan Aushadhi Kendra - All Districts 2026</title>
<meta name="description" content="{state_name} ke sabhi districts mein Jan Aushadhi Kendra ka complete list. District select karein aur nearest PMBJP store ka address aur phone number paayein."/>
<link rel="stylesheet" href="../../../assets/css/style.css"/>
</head>
<body>
<div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
        <div class="container header-inner">
            <a href="../../../index.html" class="brand">
                <span class="brand-mark">S</span>
                <span class="brand-text">
                    <span class="brand-title">SarkariSewa India</span>
                </span>
            </a>
            <nav class="main-nav" style="display:flex; gap:16px;">
                <a href="../../../index.html" style="color:var(--color-text); text-decoration:none; font-weight:600;">Home</a>
                <a href="../../jan-aushadhi-store-locator.html" style="color:var(--color-text); text-decoration:none; font-weight:600;">Jan Aushadhi</a>
                <a href="../../../tools/csc-locator.html" style="color:var(--color-text); text-decoration:none; font-weight:600;">CSC Locator</a>
            </nav>
        </div>
    </header>
</div>
<main class="container" style="padding-top:30px;min-height:60vh;">
<nav aria-label="Breadcrumbs" class="breadcrumbs"><ol><li><a href="../../../index.html">Home</a></li><li><a href="../../jan-aushadhi-store-locator.html">Jan Aushadhi</a></li><li aria-current="page">{state_name}</li></ol></nav>
<h1 style="margin-bottom:20px;">{state_name} — All Districts ({len(district_links)} Districts, {info['total']} Stores)</h1>
<p style="margin-bottom:30px;color:var(--color-text-muted);">Select your district below to see the complete list of Jan Aushadhi Kendras with address and phone number.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">
{links_html}
</div>
</main>
<div id="site-footer"><footer class="site-footer"><div class="container"><p style="text-align:center;">&copy; 2026 SarkariSewa India</p></div></footer></div>
<script src="../../../assets/js/main.js" defer></script>
</body>
</html>"""
    
    with open(f"service/jan-aushadhi/{state_slug}/index.html", "w", encoding="utf-8") as f:
        f.write(index_html)
    total_pages += 1

print(f"Generated {total_pages} district + index pages across {len(all_data)} states.")
