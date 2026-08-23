import os
import re

sitemap_path = "sitemap.xml"

# Read sitemap
with open(sitemap_path, "r", encoding="utf-8") as f:
    sitemap = f.read()

states = [
    "andaman-nicobar", "andhra-pradesh", "arunachal-pradesh", "assam", "bihar",
    "chandigarh", "chhattisgarh", "dadra-nagar-haveli-daman-diu", "delhi", "goa",
    "gujarat", "haryana", "himachal-pradesh", "jammu-kashmir", "jharkhand",
    "karnataka", "kerala", "ladakh", "lakshadweep", "madhya-pradesh", "maharashtra",
    "manipur", "meghalaya", "mizoram", "nagaland", "odisha", "puducherry", "punjab",
    "rajasthan", "sikkim", "tamil-nadu", "telangana", "tripura", "uttar-pradesh",
    "uttarakhand", "west-bengal"
]

urls_to_add = ""
for state in states:
    url_str = f"https://sarkarisewaindia.com/service/jan-aushadhi/{state}.html"
    if url_str not in sitemap:
        urls_to_add += f'''
  <url>
    <loc>{url_str}</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>'''

if urls_to_add:
    # Insert before the closing </urlset>
    sitemap = sitemap.replace("</urlset>", urls_to_add + "\n</urlset>")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print("Sitemap updated successfully.")
else:
    print("Sitemap already up to date.")
