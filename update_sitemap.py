import os
from datetime import datetime

BASE_URL = "https://sarkarisewaindia.com"
IGNORE_DIRS = [".git", "scratch", "assets", "scripts"]

def build_sitemap():
    print("Scanning for HTML files...")
    html_files = []
    
    for root, dirs, files in os.walk("."):
        # Skip ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS and not d.startswith('.')]
        
        for file in files:
            if file.endswith(".html") and not file.startswith('temp'):
                filepath = os.path.join(root, file)
                # Normalize path for URL
                rel_path = os.path.relpath(filepath, ".").replace("\\", "/")
                html_files.append(rel_path)

    print(f"Found {len(html_files)} HTML pages.")
    
    today = datetime.now().strftime("%Y-%m-%d")
    
    xml_content = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml_content.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    
    for path in html_files:
        url = f"{BASE_URL}/{path}"
        # Make index.html map to the root of its folder
        if url.endswith("/index.html"):
            if url == f"{BASE_URL}/index.html":
                url = f"{BASE_URL}/"
            else:
                url = url[:-10]
        
        # Priority logic
        priority = "0.8"
        if url == f"{BASE_URL}/":
            priority = "1.0"
        elif "/tools/" in url or "/service/" in url:
            priority = "0.9"
            
        xml_content.append("  <url>")
        xml_content.append(f"    <loc>{url}</loc>")
        xml_content.append(f"    <lastmod>{today}</lastmod>")
        xml_content.append("    <changefreq>weekly</changefreq>")
        xml_content.append(f"    <priority>{priority}</priority>")
        xml_content.append("  </url>")
        
    xml_content.append("</urlset>")
    
    with open("sitemap.xml", "w", encoding="utf-8") as f:
        f.write("\n".join(xml_content))
    
    print("✅ sitemap.xml updated successfully!")

if __name__ == "__main__":
    build_sitemap()
