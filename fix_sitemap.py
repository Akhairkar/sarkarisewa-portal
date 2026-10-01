states = [
    {'slug': 'uttar-pradesh'},
    {'slug': 'bihar'},
    {'slug': 'west-bengal'},
    {'slug': 'madhya-pradesh'},
    {'slug': 'rajasthan'}
]
sitemap_path = 'sitemap.xml'
with open(sitemap_path, 'r', encoding='utf-8') as f:
    sitemap_content = f.read()

new_sitemap_urls = ''
for state in states:
    url = f"https://sarkarisewaindia.com/blog/{state['slug']}-sir-voter-list-check-name-guide.html"
    if url not in sitemap_content:
        new_sitemap_urls += f"  <url>\n    <loc>{url}</loc>\n    <lastmod>2026-08-23</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>\n"

if new_sitemap_urls:
    sitemap_content = sitemap_content.replace('</urlset>', f"{new_sitemap_urls}</urlset>")
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    print('Sitemap updated with voter lists.')
