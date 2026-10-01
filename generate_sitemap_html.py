import os
import glob
from datetime import datetime

def generate_both_sitemaps():
    files = glob.glob('**/*.html', recursive=True)
    valid_files = []
    
    for f in files:
        f = f.replace('\\', '/')
        if 'node_modules' in f or '.gemini' in f or 'partials/' in f or 'admin/' in f:
            continue
        valid_files.append(f)
        
    valid_files.sort()
    
    # 1. HTML Sitemap
    html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Sitemap - SarkariSewa India</title>
    <meta name="description" content="HTML Sitemap for SarkariSewa India. Find all pages easily.">
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        .sitemap-container { max-width: 800px; margin: 40px auto; padding: 20px; }
        .sitemap-list { list-style-type: none; padding-left: 0; }
        .sitemap-list li { margin-bottom: 10px; }
        .sitemap-list a { color: var(--color-brand, #10243E); text-decoration: none; }
        .sitemap-list a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div id="site-header"></div>
    <div class="sitemap-container">
        <h1>HTML Sitemap</h1>
        <ul class="sitemap-list">
"""
    for file in valid_files:
        if file == "sitemap.html": continue
        title = file
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                import re
                m = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
                if m:
                    title = m.group(1).replace(' - SarkariSewa India', '').replace(' — SarkariSewa India', '')
        except:
            pass
        html += f'            <li><a href="{file}">{title}</a></li>\n'
        
    html += """        </ul>
    </div>
    <div id="site-footer"></div>
    <script src="assets/js/main.js?v=2.4" defer></script>
</body>
</html>"""

    with open('sitemap.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
    # 2. XML Sitemap
    today = datetime.now().strftime("%Y-%m-%d")
    xml_lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml_lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    
    for file in valid_files:
        if file == "sitemap.html": continue
        loc = f"https://sarkarisewaindia.com/{file}"
        xml_lines.append("  <url>")
        xml_lines.append(f"    <loc>{loc}</loc>")
        xml_lines.append(f"    <lastmod>{today}</lastmod>")
        xml_lines.append(f"    <changefreq>weekly</changefreq>")
        xml_lines.append(f"    <priority>0.8</priority>")
        xml_lines.append("  </url>")
        
    xml_lines.append("</urlset>")
    
    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write('\n'.join(xml_lines) + '\n')

    print(f"Generated sitemap.html and sitemap.xml with {len(valid_files)} links.")

if __name__ == '__main__':
    generate_both_sitemaps()
