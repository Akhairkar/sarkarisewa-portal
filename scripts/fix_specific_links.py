import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Fix 1: csc-locator/jammu-kashmir.html & jammu-and-kashmir.html district link paths
for jk_file in ['service/csc-locator/jammu-kashmir.html', 'service/csc-locator/jammu-and-kashmir.html']:
    if os.path.exists(jk_file):
        with open(jk_file, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        # replace href="district.html" with href="jammu-and-kashmir/district.html"
        c = re.sub(r'href=["\']([a-zA-Z0-9\-]+)\.html["\']', lambda m: f'href="jammu-and-kashmir/{m.group(1)}.html"' if not m.group(1).startswith(('jammu-and-kashmir/', 'index', 'http', '../')) and os.path.exists(f'service/csc-locator/jammu-and-kashmir/{m.group(1)}.html') else m.group(0), c)
        with open(jk_file, 'w', encoding='utf-8') as fp:
            fp.write(c)

# Fix 2: /states/index.html in partials/
for pf in glob.glob('partials/*.html'):
    with open(pf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    c = c.replace('href="/states/index.html"', 'href="states/index.html"')
    c = c.replace('href="/tools/index.html"', 'href="tools/index.html"')
    with open(pf, 'w', encoding='utf-8') as fp:
        fp.write(c)

# Fix 3: ncs-ncs-national-career-service.html typo
for sf in glob.glob('service/*.html') + glob.glob('states/*.html'):
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'ncs-ncs-national-career-service.html' in c:
        c = c.replace('ncs-ncs-national-career-service.html', 'ncs-national-career-service.html')
        with open(sf, 'w', encoding='utf-8') as fp:
            fp.write(c)

print("Fixed specific district link paths and typos!")
