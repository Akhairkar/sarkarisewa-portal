import re
import os

states_data = [
    {"slug": "uttar-pradesh", "name_hi": "उत्तर प्रदेश"},
    {"slug": "bihar", "name_hi": "बिहार"},
    {"slug": "west-bengal", "name_hi": "पश्चिम बंगाल"},
    {"slug": "madhya-pradesh", "name_hi": "मध्य प्रदेश"},
    {"slug": "rajasthan", "name_hi": "राजस्थान"},
    {"slug": "gujarat", "name_hi": "गुजरात"},
    {"slug": "karnataka", "name_hi": "कर्नाटक"},
    {"slug": "andhra-pradesh", "name_hi": "आंध्र प्रदेश"},
    {"slug": "tamil-nadu", "name_hi": "तमिलनाडु"},
    {"slug": "telangana", "name_hi": "तेलंगाना"}
]

for state in states_data:
    hub_path = f"states/{state['slug']}.html"
    if not os.path.exists(hub_path):
        continue
        
    with open(hub_path, "r", encoding="utf-8") as f:
        html = f.read()
        
    card_html = f"""<a class="service-card" href="../states/{state['slug']}-sir-voter-list.html" style="border: 2px solid #3b82f6; background: #eff6ff;">
          <div class="service-card__name">Voter List Name Check (SIR 2026)</div>
          <div class="service-card__desc">{state['name_hi']} में स्पेशल इंटेंसिव रिवीजन (SIR) 2026 के अंतर्गत अपनी वोटर आईडी को अपडेट करें और नाम चेक करें।</div>
          <div class="service-card__arrow">View Details &rarr;</div>
        </a>
        """
    
    if "sir-voter-list.html" not in html:
        # Insert the new card directly after <div class="service-grid">
        html = html.replace('<div class="service-grid">', f'<div class="service-grid">\n        {card_html}')
        
        with open(hub_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Updated {hub_path}")

# Now update sitemap
sitemap_path = "sitemap.xml"
if os.path.exists(sitemap_path):
    with open(sitemap_path, "r", encoding="utf-8") as f:
        sitemap_content = f.read()
        
    new_urls = ""
    for state in states_data:
        url = f"https://sarkarisewaindia.com/states/{state['slug']}-sir-voter-list.html"
        if url not in sitemap_content:
            new_urls += f"  <url>\n    <loc>{url}</loc>\n    <lastmod>2026-08-25</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>\n"
            
    if new_urls:
        sitemap_content = sitemap_content.replace("</urlset>", f"{new_urls}</urlset>")
        with open(sitemap_path, "w", encoding="utf-8") as f:
            f.write(sitemap_content)
        print("Sitemap updated.")
