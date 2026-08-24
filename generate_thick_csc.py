import os
import glob
import csv
import collections
import shutil
import urllib.parse
from string import capwords

# Constants
CSV_DIR = r"C:\Users\Lenovo\Desktop\chunks"
OUTPUT_DIR = "service/csc-locator"
MAX_CENTERS_PER_PAGE = 300 # Thick enough for SEO, small enough for performance

def slugify(text):
    return text.lower().replace(" ", "-").replace(".", "").replace("(", "").replace(")", "").replace("&", "and")

# State normalization mapping
STATE_MAP = {
    "ANDAMAN AND NICOBAR ISLANDS": "Andaman & Nicobar",
    "ANDHRA PRADESH": "Andhra Pradesh",
    "ARUNACHAL PRADESH": "Arunachal Pradesh",
    "ASSAM": "Assam", "BIHAR": "Bihar", "CHANDIGARH": "Chandigarh",
    "CHHATTISGARH": "Chhattisgarh",
    "THE DADRA AND NAGAR HAVELI AND DAMAN AND DIU": "Dadra & Nagar Haveli",
    "DELHI": "Delhi", "GOA": "Goa", "GUJARAT": "Gujarat",
    "HARYANA": "Haryana", "HIMACHAL PRADESH": "Himachal Pradesh",
    "JAMMU AND KASHMIR": "Jammu & Kashmir", "JHARKHAND": "Jharkhand",
    "KARNATAKA": "Karnataka", "KERALA": "Kerala", "LADAKH": "Ladakh",
    "LAKSHADWEEP": "Lakshadweep", "MADHYA PRADESH": "Madhya Pradesh",
    "MAHARASHTRA": "Maharashtra", "MANIPUR": "Manipur", "MEGHALAYA": "Meghalaya",
    "MIZORAM": "Mizoram", "NAGALAND": "Nagaland", "ODISHA": "Odisha",
    "PUDUCHERRY": "Puducherry", "PUNJAB": "Punjab", "RAJASTHAN": "Rajasthan",
    "SIKKIM": "Sikkim", "TAMIL NADU": "Tamil Nadu", "TELANGANA": "Telangana",
    "TRIPURA": "Tripura", "UTTAR PRADESH": "Uttar Pradesh",
    "UTTARAKHAND": "Uttarakhand", "WEST BENGAL": "West Bengal"
}

def clean_old_pages():
    print("Cleaning up old CSC pages...")
    if os.path.exists(OUTPUT_DIR):
        for item in os.listdir(OUTPUT_DIR):
            item_path = os.path.join(OUTPUT_DIR, item)
            if os.path.isdir(item_path):
                shutil.rmtree(item_path)

def load_data():
    print("Loading 5 Lakh+ CSC Data from CSVs (this may take a minute)...")
    data = collections.defaultdict(lambda: collections.defaultdict(list))
    total_processed = 0
    csv_files = glob.glob(os.path.join(CSV_DIR, "*.csv"))
    
    for file in csv_files:
        with open(file, 'r', encoding='utf-8', errors='ignore') as f:
            reader = csv.DictReader(f)
            for row in reader:
                state_raw = row.get("state", "").strip().upper()
                dist_raw = capwords(row.get("district", "").strip())
                if not state_raw or not dist_raw: continue
                
                state_clean = STATE_MAP.get(state_raw, capwords(state_raw))
                
                # Cap at MAX to prevent 10MB HTML pages
                if len(data[state_clean][dist_raw]) < MAX_CENTERS_PER_PAGE:
                    data[state_clean][dist_raw].append({
                        "name": row.get("vle_name", "CSC Center").strip() or "CSC Center",
                        "address": row.get("address", "").strip(),
                        "pin": row.get("pincode", "").strip(),
                        "lat": row.get("latitude", "").strip(),
                        "lng": row.get("longitude", "").strip()
                    })
                total_processed += 1
                
    print(f"Processed {total_processed} rows.")
    return data

def build_district_html(state_name, state_slug, dist_name, dist_slug, centers):
    count = len(centers)
    display_count = f"{count}+" if count == MAX_CENTERS_PER_PAGE else str(count)
    
    rows = ""
    for c in centers:
        map_link = f"https://www.google.com/maps?q={c['lat']},{c['lng']}" if c['lat'] and c['lng'] else "#"
        rows += f"""<tr>
<td><strong>{c['name']}</strong></td>
<td>{c['address']} — {c['pin']}</td>
<td><a href="{map_link}" target="_blank" rel="noopener">Get Directions</a></td>
</tr>\n"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="../../../favicon.ico">
<link rel="canonical" href="https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{dist_slug}.html"/>
<title>{dist_name} CSC Center List 2026 | FREE Services ({display_count} Centers)</title>
<meta name="description" content="{dist_name}, {state_name} ke sabhi CSC / Jan Seva Kendra ka address aur maps link. Aadhaar, PAN, Passport ₹0 mein apply karein. Abhi nearest center dekhein!"/>
<meta property="og:title" content="{dist_name} CSC Center List 2026 | FREE Services ({display_count} Centers)"/>
<meta property="og:description" content="{dist_name}, {state_name} ke sabhi CSC / Jan Seva Kendra ka address aur maps link. Aadhaar, PAN, Passport ₹0 mein apply karein."/>
<meta property="og:url" content="https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{dist_slug}.html"/>
<meta property="og:type" content="article"/>
<link rel="stylesheet" href="../../../assets/css/style.css"/>
<link rel="stylesheet" href="../../../assets/css/module2.css"/>
</head>
<body data-slug="csc-{state_slug}-{dist_slug}">
<div id="site-header"><div class="tricolor-rule"></div><header class="site-header"><div class="container header-inner"><a href="../../../index.html" class="brand"><span class="brand-mark">S</span><span class="brand-text"><span class="brand-title">SarkariSewa India</span></span></a></div></header></div>
<main class="container">
<div class="content-wrapper">
<article class="service-article">
<nav aria-label="Breadcrumbs" class="breadcrumbs"><ol>
<li><a href="../../../index.html">Home</a></li>
<li><a href="../../csc-locator.html">CSC Locator</a></li>
<li><a href="../{state_slug}.html">{state_name}</a></li>
<li aria-current="page">{dist_name}</li>
</ol></nav>

<header class="service-header">
<h1 class="service-title">{dist_name} CSC Center Near Me (List 2026)</h1>
<p class="service-subtitle">Kya aap {dist_name}, {state_name} mein apne nazdeeki Common Service Center (CSC) / Jan Seva Kendra ki talash kar rahe hain? Yahan humne top {display_count} centers ki list di hai jahan aap Government certificates, Aadhaar updates, aur banking services ka labh utha sakte hain.</p>
</header>

<section class="service-section">
<h2 class="service-section__title">Services Available at {dist_name} CSCs</h2>
<div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom: 20px;">
<span style="background:var(--color-surface); padding:8px 12px; border:1px solid var(--color-border); border-radius:4px;">Aadhaar Card Update</span>
<span style="background:var(--color-surface); padding:8px 12px; border:1px solid var(--color-border); border-radius:4px;">PAN Card Registration</span>
<span style="background:var(--color-surface); padding:8px 12px; border:1px solid var(--color-border); border-radius:4px;">Income / Caste Certificate</span>
<span style="background:var(--color-surface); padding:8px 12px; border:1px solid var(--color-border); border-radius:4px;">Passport Sewa</span>
<span style="background:var(--color-surface); padding:8px 12px; border:1px solid var(--color-border); border-radius:4px;">PM KISAN KYC</span>
</div>
<p style="color:var(--color-text-muted); font-size: 0.95rem;"><em>Note: Har center par alag-alag services uplabdh ho sakti hain. Kripya center par visit karne se pehle confirm kar lein.</em></p>
</section>

<section class="service-section">
<h2 class="service-section__title">List of Centers in {dist_name}</h2>
<div style="overflow-x:auto;">
<table class="service-table">
<thead><tr><th>Center / VLE Name</th><th>Full Address</th><th>Maps</th></tr></thead>
<tbody>
{rows}
</tbody>
</table>
</div>
</section>

<section class="service-section" id="faqs">
<h2 class="service-section__title">Frequently Asked Questions</h2>
<div class="faq-list">
<div class="faq-item"><div class="faq-question"><h3>{dist_name} mein CSC Center kaise khojein?</h3></div><div class="faq-answer"><p>Upar di gayi list se aap apne area ka Pincode ya Address dhundh sakte hain. "Get Directions" par click karke aap seedha Google Maps par center ka exact location dekh sakte hain.</p></div></div>
<div class="faq-item"><div class="faq-question"><h3>Kya CSC services FREE hoti hain?</h3></div><div class="faq-answer"><p>Government ki taraf se fees fix hoti hai. Kuch services completely FREE hoti hain, jabki certificates aur printouts ka nominal charge (Jaise ₹20 se ₹50) liya jata hai. Extra paise maangne par aap complain kar sakte hain.</p></div></div>
<div class="faq-item"><div class="faq-question"><h3>Kya main CSC me apna Naya Aadhaar Card banwa sakta hu?</h3></div><div class="faq-answer"><p>Naya Aadhaar enrollment sirf specific Aadhaar Seva Kendras par hota hai. Par Aadhaar mein mobile number update, naam change, ya print nikalne ka kaam lagbhag sabhi CSC centers karte hain.</p></div></div>
</div>
</section>

</article>

<aside class="sidebar">
<div class="sidebar-widget">
<h3 class="sidebar-widget__title">Important Links</h3>
<ul class="sidebar-list">
<li><a href="../../../tools/eligibility-checker.html">Scheme Eligibility Checker</a></li>
<li><a href="../../../tools/status-troubleshooter.html">Application Status Tracker</a></li>
<li><a href="../../../service/jan-aushadhi/{state_slug}/{dist_slug}.html">{dist_name} Jan Aushadhi (Cheap Medicine)</a></li>
</ul>
</div>
<div class="sidebar-widget">
<h3 class="sidebar-widget__title">Nearby Districts</h3>
<ul class="sidebar-list">
<li><a href="../{state_slug}.html">All Districts in {state_name}</a></li>
</ul>
</div>
</aside>
</div>
</main>
<div id="site-footer"><footer class="site-footer"><div class="container"><p style="text-align:center;">&copy; 2026 SarkariSewa India</p></div></footer></div>
<script src="../../../assets/js/main.js" defer></script>
</body>
</html>"""
    return html

def main():
    clean_old_pages()
    data = load_data()
    
    total_pages = 0
    
    print("Generating HTML pages...")
    for state, districts in data.items():
        state_slug = slugify(state)
        state_dir = os.path.join(OUTPUT_DIR, state_slug)
        os.makedirs(state_dir, exist_ok=True)
        
        dist_links = []
        for dist, centers in districts.items():
            dist_slug = slugify(dist)
            html = build_district_html(state, state_slug, dist, dist_slug, centers)
            
            with open(os.path.join(state_dir, f"{dist_slug}.html"), "w", encoding="utf-8") as f:
                f.write(html)
            
            dist_links.append({"name": dist, "slug": dist_slug, "count": len(centers)})
            total_pages += 1
            
        # State Index Page
        dist_links.sort(key=lambda x: x["name"])
        links_html = "".join([f'<a href="{dl["slug"]}.html" style="display:block;padding:12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;text-decoration:none;color:var(--color-primary);font-weight:500;">{dl["name"]} ({dl["count"]}+ stores) &rarr;</a>' for dl in dist_links])
        
        index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="icon" href="../../../favicon.ico">
<title>{state} CSC Center Near Me (All Districts) | 2026 List</title>
<link rel="stylesheet" href="../../../assets/css/style.css"/>
</head>
<body>
<div id="site-header"><div class="tricolor-rule"></div><header class="site-header"><div class="container header-inner"><a href="../../../index.html" class="brand"><span class="brand-title">SarkariSewa India</span></a></div></header></div>
<main class="container" style="padding-top:30px;min-height:60vh;">
<nav aria-label="Breadcrumbs" class="breadcrumbs"><ol><li><a href="../../../index.html">Home</a></li><li><a href="../../csc-locator.html">CSC Locator</a></li><li aria-current="page">{state}</li></ol></nav>
<h1 style="margin-bottom:20px;">{state} CSC Centers — All Districts ({len(dist_links)})</h1>
<p style="margin-bottom:30px;color:var(--color-text-muted);">Apna district select karein aur apne area ke sabhi CSC/Jan Seva Kendra ka address dekhein.</p>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px;">{links_html}</div>
</main>
<script src="../../../assets/js/main.js" defer></script>
</body></html>"""
        with open(os.path.join(state_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(index_html)
        total_pages += 1

    print(f"✅ Success! Generated {total_pages} high-SEO CSC pages.")

if __name__ == "__main__":
    main()
