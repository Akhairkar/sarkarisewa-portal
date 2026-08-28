import os

states = {
    "ANDAMAN AND NICOBAR ISLANDS": "andaman-nicobar", "ANDHRA PRADESH": "andhra-pradesh", 
    "ARUNACHAL PRADESH": "arunachal-pradesh", "ASSAM": "assam", "BIHAR": "bihar", 
    "CHANDIGARH": "chandigarh", "CHHATTISGARH": "chhattisgarh", "DADRA AND NAGAR HAVELI AND DAMAN AND DIU": "dadra-nagar-haveli-daman-diu", 
    "DELHI": "delhi", "GOA": "goa", "GUJARAT": "gujarat", "HARYANA": "haryana", 
    "HIMACHAL PRADESH": "himachal-pradesh", "JAMMU AND KASHMIR": "jammu-kashmir", 
    "JHARKHAND": "jharkhand", "KARNATAKA": "karnataka", "KERALA": "kerala", 
    "LADAKH": "ladakh", "LAKSHADWEEP": "lakshadweep", "MADHYA PRADESH": "madhya-pradesh", 
    "MAHARASHTRA": "maharashtra", "MANIPUR": "manipur", "MEGHALAYA": "meghalaya", 
    "MIZORAM": "mizoram", "NAGALAND": "nagaland", "ODISHA": "odisha", 
    "PUDUCHERRY": "puducherry", "PUNJAB": "punjab", "RAJASTHAN": "rajasthan", 
    "SIKKIM": "sikkim", "TAMIL NADU": "tamil-nadu", "TELANGANA": "telangana", 
    "TRIPURA": "tripura", "UTTAR PRADESH": "uttar-pradesh", "UTTARAKHAND": "uttarakhand", 
    "WEST BENGAL": "west-bengal"
}

# 1. Update Hub Page with internal links to all states
hub_path = "tools/csc-locator.html"
with open(hub_path, "r", encoding="utf-8") as f:
    hub_html = f.read()

# Build HTML links for states
links_html = '<div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 30px;">\\n'
for name, slug in states.items():
    title = name.title()
    links_html += f'<a href="../service/csc-locator/{slug}.html" style="padding: 8px 16px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 20px; color: var(--color-primary); text-decoration: none; font-size: 0.9rem;">{title}</a>\\n'
links_html += '</div>\\n'

if "Browse by State" not in hub_html:
    inject_point = hub_html.find('<div id="csc-results-container"')
    hub_html = hub_html[:inject_point] + '<h3 style="margin-bottom: 15px;">🌐 Browse by State:</h3>\\n' + links_html + hub_html[inject_point:]
    with open(hub_path, "w", encoding="utf-8") as f:
        f.write(hub_html)

# 2. Add them to sitemap.xml
sitemap_path = "sitemap.xml"
try:
    with open(sitemap_path, "r", encoding="utf-8") as f:
        sitemap = f.read()
    
    new_urls = ""
    for name, slug in states.items():
        url = f"https://sarkarisewaindia.com/service/csc-locator/{slug}.html"
        if url not in sitemap:
            new_urls += f"""
  <url>
    <loc>{url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>"""
    
    if new_urls:
        sitemap = sitemap.replace("</urlset>", new_urls + "\\n</urlset>")
        with open(sitemap_path, "w", encoding="utf-8") as f:
            f.write(sitemap)
except Exception as e:
    print(f"Error updating sitemap: {e}")

print("Internal linking and Sitemap updated.")
