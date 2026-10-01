import re
import os

sitemap_path = 'sitemap.xml'
if os.path.exists(sitemap_path):
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove 404, admin, test-state, vsgfsaa
    # A sitemap entry looks like:
    # <url>
    #   <loc>https://sarkarisewaindia.com/404.html</loc>
    #   <lastmod>...</lastmod>
    # </url>
    
    # We will use regex to find and remove them.
    patterns_to_remove = [
        r'404\.html',
        r'admin/',
        r'test-state',
        r'vsgfsaa',
        r'#U0928'
    ]
    
    # Split by </url>
    entries = content.split('</url>')
    new_entries = []
    
    for entry in entries:
        if not entry.strip():
            continue
        
        should_remove = False
        for pattern in patterns_to_remove:
            if re.search(pattern, entry):
                should_remove = True
                break
                
        if not should_remove:
            new_entries.append(entry)
            
    # Reassemble
    new_content = '</url>'.join(new_entries)
    if not new_content.endswith('</urlset>') and new_entries:
        if '</urlset>' in content:
            new_content += '</url>\n</urlset>'
        else:
            new_content += '</url>'

    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Sitemap cleaned successfully.")
else:
    print("sitemap.xml not found!")
