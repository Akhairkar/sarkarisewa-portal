import os
import re

source_file = "blog/maharashtra-sir-voter-list-check-name-guide.html"

with open(source_file, "r", encoding="utf-8") as f:
    content = f.read()

states = [
    {"en": "Uttar Pradesh", "hi": "उत्तर प्रदेश", "slug": "uttar-pradesh"},
    {"en": "Bihar", "hi": "बिहार", "slug": "bihar"},
    {"en": "West Bengal", "hi": "पश्चिम बंगाल", "slug": "west-bengal"},
    {"en": "Madhya Pradesh", "hi": "मध्य प्रदेश", "slug": "madhya-pradesh"},
    {"en": "Rajasthan", "hi": "राजस्थान", "slug": "rajasthan"}
]

generated_files = []

for state in states:
    new_content = content
    
    # Replace the English texts
    new_content = new_content.replace("Maharashtra", state["en"])
    new_content = new_content.replace("maharashtra", state["slug"])
    
    # Replace the Hindi texts
    # First, let's try to match the exact Hindi word used for Maharashtra.
    # Note: If the source file has mojibake in python memory, it might not match properly.
    # We will try to replace common variations or use the exact string if possible.
    # To be safe, we replace "महाराष्ट्र" with the target Hindi name.
    new_content = new_content.replace("महाराष्ट्र", state["hi"])
    
    # Some specific replacements for the CEO website urls (optional, but good for accuracy)
    # The default URL in maharashtra is ceo.maharashtra.gov.in
    # We can just leave it or replace it roughly
    new_content = new_content.replace("ceo." + state["slug"] + ".gov.in", f"ceo{state['slug'].replace('-','')}.nic.in")
    
    file_name = f"blog/{state['slug']}-sir-voter-list-check-name-guide.html"
    
    with open(file_name, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    generated_files.append(file_name)
    print(f"Generated: {file_name}")

# Also need to update sitemap.xml
sitemap_path = "sitemap.xml"
try:
    with open(sitemap_path, "r", encoding="utf-8") as f:
        sitemap_content = f.read()
        
    new_sitemap_urls = ""
    for state in states:
        url = f"https://sarkarisewaindia.com/blog/{state['slug']}-sir-voter-list-check-name-guide.html"
        if url not in sitemap_content:
            new_sitemap_urls += f"  <url>\n    <loc>{url}</loc>\n    <lastmod>2026-08-23</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>\n"
            
    if new_sitemap_urls:
        sitemap_content = sitemap_content.replace("</urlset>", f"{new_sitemap_urls}</urlset>")
        with open(sitemap_path, "w", encoding="utf-8") as f:
            f.write(sitemap_content)
        print("Sitemap updated.")
except Exception as e:
    print(f"Sitemap update failed: {e}")

