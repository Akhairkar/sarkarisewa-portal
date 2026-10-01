import xml.etree.ElementTree as ET
import glob
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Check exact root admin file urls in sitemap
tree = ET.parse('sitemap.xml')
root = tree.getroot()
urls = root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url')

admin_basenames = {
    'https://sarkarisewaindia.com/dashboard.html',
    'https://sarkarisewaindia.com/analytics.html',
    'https://sarkarisewaindia.com/blog.html',
    'https://sarkarisewaindia.com/comments.html',
    'https://sarkarisewaindia.com/csc.html',
    'https://sarkarisewaindia.com/deadlines.html',
    'https://sarkarisewaindia.com/exams.html',
    'https://sarkarisewaindia.com/jobs.html',
    'https://sarkarisewaindia.com/services.html',
    'https://sarkarisewaindia.com/subscribers.html',
    'https://sarkarisewaindia.com/404.html',
    'https://sarkarisewaindia.com/service/service.html'
}

leaked_in_sitemap = []
for u in urls:
    loc = u.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
    if loc in admin_basenames:
        leaked_in_sitemap.append(loc)

print(f"Exact Leaked Admin URLs in sitemap: {len(leaked_in_sitemap)}")

# Check which admin file has 'Apply Online'
for f in ['dashboard.html', 'analytics.html', 'blog.html', 'comments.html', 'csc.html', 'deadlines.html', 'exams.html', 'jobs.html', 'services.html', 'subscribers.html']:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'Apply Online' in c:
        print(f"File {f} contains 'Apply Online'")
