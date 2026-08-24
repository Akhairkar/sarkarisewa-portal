import os
import json

cities_data = {
    "uttar-pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Noida", "Firozabad", "Jhansi", "Muzaffarnagar", "Mathura", "Ayodhya", "Rampur", "Shahjahanpur", "Farrukhabad", "Hapur", "Etawah", "Mirzapur", "Bulandshahr"],
    "bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai", "Katihar", "Munger", "Chhapra", "Danapur", "Saharsa", "Hajipur", "Sasaram", "Dehri", "Siwan", "Motihari", "Nawada"],
    "madhya-pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa", "Murwara", "Singrauli", "Burhanpur", "Khandwa", "Bhind", "Chhindwara", "Guna", "Shivpuri", "Vidisha", "Chhatarpur"],
    "rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar", "Pali", "Sri Ganganagar", "Kishangarh", "Baran", "Tonk"],
    "jharkhand": ["Ranchi", "Dhanbad", "Jamshedpur", "Bokaro", "Deoghar", "Phusro", "Hazaribagh", "Giridih", "Ramgarh", "Medininagar"],
    "uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Pithoragarh", "Ramnagar", "Nainital"]
}

state_display_names = {
    "uttar-pradesh": "Uttar Pradesh",
    "bihar": "Bihar",
    "madhya-pradesh": "Madhya Pradesh",
    "rajasthan": "Rajasthan",
    "jharkhand": "Jharkhand",
    "uttarakhand": "Uttarakhand"
}

state_local_names = {
    "uttar-pradesh": "Jan Seva Kendra (जन सेवा केंद्र)",
    "bihar": "Vasudha Kendra (वसुधा केंद्र)",
    "madhya-pradesh": "MP Online / Lok Seva Kendra",
    "rajasthan": "e-Mitra (ई-मित्र)",
    "jharkhand": "Pragya Kendra (प्रज्ञा केंद्र)",
    "uttarakhand": "Devbhoomi Jan Seva Kendra"
}

def generate_nearby_links(state_slug, current_city, all_cities):
    links = []
    # Pick 5 cities that are not the current city
    for c in all_cities:
        if c != current_city:
            c_slug = c.lower().replace(" ", "-")
            links.append(f'<a href="{c_slug}.html" style="text-decoration:none; padding:10px; border:1px solid var(--color-border); border-radius:8px; display:inline-block; margin:5px; background:var(--color-surface);">{c} CSC</a>')
        if len(links) >= 5:
            break
    return "\n".join(links)

def build_html(state_slug, city):
    city_slug = city.lower().replace(" ", "-")
    state_display = state_display_names[state_slug]
    local_name = state_local_names[state_slug]
    
    title = f"CSC Center in {city}, {state_display} 2026: {local_name} Near Me"
    desc = f"Find the nearest CSC Center ({local_name}) in {city}, {state_display}. Check address, WhatsApp number, and available online services like Aadhaar, PAN, and certificates."
    
    nearby_html = generate_nearby_links(state_slug, city, cities_data[state_slug])
    
    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <link href="../../../assets/img/favicon-32.png" rel="icon" sizes="32x32" type="image/png"/>
    <link href="../../../assets/img/favicon-16.png" rel="icon" sizes="16x16" type="image/png"/>
    <link href="../../../assets/img/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>
    <link href="../../../favicon.ico" rel="icon"/>
    <link href="../../../manifest.json" rel="manifest"/>
    <link href="https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{city_slug}.html" rel="canonical"/>
    <meta content="{desc}" name="description"/>
    <meta content="{title}" property="og:title"/>
    <meta content="{desc}" property="og:description"/>
    <meta content="article" property="og:type"/>
    <meta content="https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{city_slug}.html" property="og:url"/>
    <meta content="https://sarkarisewaindia.com/assets/img/og-image.png" property="og:image"/>
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="{title}" name="twitter:title"/>
    <meta content="{desc}" name="twitter:description"/>
    <title>{title}</title>
    <link href="../../../assets/css/style.css" rel="stylesheet"/>
    <link href="../../../assets/css/module2.css" rel="stylesheet"/>
    <link href="../../../assets/css/module15.css" rel="stylesheet"/>
    <link href="../../../assets/css/module16.css" rel="stylesheet"/>
    <link href="../../../assets/css/share-widget.css" rel="stylesheet"/>
    <script id="service-schema" type="application/ld+json">{{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "GovernmentService",
          "name": "{local_name} in {city}, {state_display}",
          "description": "{desc}",
          "url": "https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{city_slug}.html",
          "serviceType": "Common Service Centre",
          "provider": {{ "@type": "GovernmentOrganization", "name": "CSC e-Governance Services India Limited" }}
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html" }},
            {{ "@type": "ListItem", "position": 2, "name": "CSC Locator", "item": "https://sarkarisewaindia.com/tools/csc-locator.html" }},
            {{ "@type": "ListItem", "position": 3, "name": "{state_display}", "item": "https://sarkarisewaindia.com/service/csc-locator/{state_slug}/index.html" }},
            {{ "@type": "ListItem", "position": 4, "name": "{city}", "item": "https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{city_slug}.html" }}
          ]
        }}
      ]
    }}</script>
</head>
<body data-slug="csc-locator-{city_slug}">
<script>window.SS_ROOT = "../../../";</script>
<!-- HEADER INJECT (Assuming standard SarkariSewa header) -->
<div id="site-header">
    <div class="tricolor-rule"></div>
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="../../../index.html">
                <span class="brand-mark">S</span>
                <span class="brand-text">
                    <span class="brand-title" data-i18n="site_name">SarkariSewa India</span>
                    <span class="brand-tagline" data-i18n="site_tagline">Every Indian government service, in one place</span>
                </span>
            </a>
            <div class="header-actions">
                <button aria-label="Toggle theme" class="icon-btn" id="theme-toggle" type="button">
                    <span aria-hidden="true" id="theme-icon">🌙</span>
                </button>
                <button class="icon-btn" id="lang-toggle" type="button"><span data-i18n="lang_toggle">हिंदी</span></button>
            </div>
        </div>
    </header>
</div>

<main class="container" style="padding-top: 20px;">
    <div style="margin-bottom: 20px; font-size: 0.9rem; color: var(--color-text-muted);">
        <a href="../../../index.html" style="color: var(--color-primary); text-decoration: none;">Home</a> / 
        <a href="../../../tools/csc-locator.html" style="color: var(--color-primary); text-decoration: none;">CSC Locator</a> / 
        <a href="index.html" style="color: var(--color-primary); text-decoration: none;">{state_display}</a> / 
        <strong>{city}</strong>
    </div>

    <h1 style="color: var(--color-text); margin-bottom: 15px; font-size: 2.2rem;">Nearest {local_name} in {city}, {state_display}</h1>
    <p style="font-size: 1.1rem; line-height: 1.6; color: var(--color-text-muted); margin-bottom: 30px;">
        Save time by finding the nearest <strong>Common Service Center (CSC) / {local_name} in {city}, {state_display}</strong> online. Our directory provides exact locations, WhatsApp contact details, and directions to help you access essential digital India services. Whether it's banking, insurance, PAN Card, Aadhaar updates, or income/caste certificates, locate your local e-Seva Kendra instantly.
    </p>

    <!-- The JS script csc-supabase-ui.js relies on this container and data-location -->
    <div data-location="{city}" id="csc-results-container">
        <p style="text-align: center; color: var(--color-text-muted); padding: 20px;">Fetching nearest centers securely...</p>
    </div>
    
    <!-- Dynamic Map Embed -->
    <div style="margin-top: 30px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <iframe width="100%" height="350" frameborder="0" style="border:0" 
        src="https://www.google.com/maps?q=CSC+Center+{city}+{state_display}&output=embed" allowfullscreen></iframe>
    </div>

    <div style="margin-top: 40px;">
        <h3 style="margin-bottom: 20px;">Top Services at {city} CSC Centers</h3>
        <ul style="line-height: 1.8; color: var(--color-text-muted);">
            <li>Aadhaar Card Update & Enrollment</li>
            <li>PAN Card Application & Corrections</li>
            <li>Voter ID / EPIC Card Services</li>
            <li>State Certificates (Income, Caste, Domicile)</li>
            <li>PM Kisan Samman Nidhi KYC</li>
            <li>Banking, Money Transfer, and Insurance Premiums</li>
        </ul>
    </div>

    <!-- INTERNAL LINKING: Nearby Cities -->
    <div style="margin-top: 40px; padding: 20px; background: var(--color-surface); border-radius: 12px; border: 1px solid var(--color-border);">
        <h3 style="margin-bottom: 15px;">Nearby Districts in {state_display}</h3>
        <div>
            {nearby_html}
            <a href="index.html" style="text-decoration:none; padding:10px; border:1px solid var(--color-primary); color:var(--color-primary); border-radius:8px; display:inline-block; margin:5px;">View All in {state_display}</a>
        </div>
    </div>

    <!-- Related Tools -->
    <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid var(--color-border);">
        <h3 style="margin-bottom: 20px; font-size: 1.5rem; text-align: center;">Related Government Services &amp; Tools</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; text-align: center;">
            <a href="../../../tools/eligibility-checker.html" style="text-decoration: none; padding: 15px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
                <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
                <strong style="color: var(--color-text);">Eligibility Checker</strong>
            </a>
            <a href="../../../tools/document-checklist.html" style="text-decoration: none; padding: 15px; border-radius: 12px; background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: block;">
                <div style="font-size: 2rem; margin-bottom: 10px;">📄</div>
                <strong style="color: var(--color-text);">Document Checklist</strong>
            </a>
        </div>
    </div>


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

</main>

<div id="site-footer">
    <footer class="site-footer">
        <div class="footer-bottom">
            <span>© <span id="footer-year"></span> SarkariSewa India · All content is for informational purposes only.</span>
        </div>
    </footer>
</div>

<script src="../../../assets/js/main.js?v=2.4"></script>
<script src="../../../assets/js/consent.js"></script>
<script src="../../../assets/js/i18n-helper.js"></script>
<script src="../../../assets/js/supabase-client.js"></script>
<script src="../../../assets/js/services-data.js"></script>
<script src="../../../assets/js/csc-supabase-ui.js"></script>
</body>
</html>
"""
    return html

def main():
    base_dir = "service/csc-locator"
    
    total_created = 0
    
    for state_slug, cities in cities_data.items():
        state_dir = os.path.join(base_dir, state_slug)
        os.makedirs(state_dir, exist_ok=True)
        
        # Also create/update a simple index.html for the state hub
        state_display = state_display_names[state_slug]
        hub_html = f"<html><head><title>CSC Centers in {state_display}</title></head><body><h1>All Districts in {state_display}</h1><ul>"
        
        for city in cities:
            city_slug = city.lower().replace(" ", "-")
            filepath = os.path.join(state_dir, f"{city_slug}.html")
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(build_html(state_slug, city))
                
            hub_html += f'<li><a href="{city_slug}.html">{city}</a></li>'
            total_created += 1
            
        hub_html += "</ul></body></html>"
        with open(os.path.join(state_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(hub_html)

    print(f"Successfully generated {total_created} CSC city pages across {len(cities_data)} states.")

if __name__ == "__main__":
    main()
