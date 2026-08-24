import os
import glob
from datetime import datetime

base_url = "https://sarkarisewaindia.com"
repo_root = "."

# Find all HTML files
html_files = glob.glob(os.path.join(repo_root, '**/*.html'), recursive=True)

# Ignore admin and testing directories
ignore_dirs = ['admin', '.git', 'scratch', 'components', 'test']

def should_ignore(filepath):
    # Convert path separators to forward slashes for easier checking
    clean_path = filepath.replace('\\', '/')
    for idir in ignore_dirs:
        if f'/{idir}/' in clean_path or clean_path.startswith(f'{idir}/'):
            return True
    if '404.html' in clean_path: return True
    return False

valid_urls = []
for filepath in html_files:
    if not should_ignore(filepath):
        # Clean up path to make it a relative URL
        rel_path = os.path.relpath(filepath, repo_root)
        url_path = rel_path.replace('\\', '/')
        if url_path == "index.html":
            url_path = ""
        full_url = f"{base_url}/{url_path}"
        valid_urls.append(full_url)

# Remove duplicates just in case
valid_urls = list(set(valid_urls))
valid_urls.sort()

today = datetime.now().strftime("%Y-%m-%d")

# Generate XML
xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for url in valid_urls:
    xml_content += f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>\n"""

xml_content += '</urlset>'

with open('sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(xml_content)

print(f"Generated sitemap.xml with {len(valid_urls)} URLs.")
