# -*- coding: utf-8 -*-
import os
import glob
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICE_DIR = os.path.join(ROOT, 'service')

PAIRS = [
    ('hr-caste-certificate.html', 'haryana-caste-certificate.html'),
    ('pb-caste-certificate.html', 'punjab-caste-certificate.html'),
    ('od-income-certificate.html', 'odisha-income-certificate.html'),
    ('dl-ration-card.html', 'delhi-ration-card.html'),
    ('kl-ration-card.html', 'kerala-ration-card.html'),
    ('jh-income-certificate.html', 'jharkhand-income-certificate.html'),
    ('ap-ration-card.html', 'andhra-pradesh-ration-card.html'),
    ('od-ration-card.html', 'odisha-ration-card.html'),
    ('dl-caste-certificate.html', 'delhi-caste-certificate.html'),
    ('tn-ration-card.html', 'tamil-nadu-ration-card.html'),
    ('mh-ration-card.html', 'maharashtra-ration-card.html'),
    ('mp-ration-card.html', 'madhya-pradesh-ration-card.html'),
    ('dl-domicile-certificate.html', 'delhi-domicile-certificate.html'),
    ('gj-income-certificate.html', 'gujarat-income-certificate.html'),
    ('cg-caste-certificate.html', 'chhattisgarh-caste-certificate.html'),
    ('up-ration-card.html', 'uttar-pradesh-ration-card.html'),
    ('kl-caste-certificate.html', 'kerala-caste-certificate.html'),
    ('uk-income-certificate.html', 'uttarakhand-income-certificate.html'),
    ('ka-ration-card.html', 'karnataka-ration-card.html'),
    ('od-caste-certificate.html', 'odisha-caste-certificate.html'),
    ('hr-income-certificate.html', 'haryana-income-certificate.html'),
    ('gj-ration-card.html', 'gujarat-ration-card.html'),
    ('rj-income-certificate.html', 'rajasthan-income-certificate.html'),
    ('tg-income-certificate.html', 'telangana-income-certificate.html'),
    ('rj-domicile-certificate.html', 'rajasthan-domicile-certificate.html'),
    ('tg-ration-card.html', 'telangana-ration-card.html'),
    ('up-domicile-certificate.html', 'uttar-pradesh-domicile-certificate.html'),
    ('kl-income-certificate.html', 'kerala-income-certificate.html'),
    ('hr-ration-card.html', 'haryana-ration-card.html'),
    ('gj-domicile-certificate.html', 'gujarat-domicile-certificate.html'),
    ('mh-income-certificate.html', 'maharashtra-income-certificate.html'),
    ('rj-ration-card.html', 'rajasthan-ration-card.html'),
    ('mh-caste-certificate.html', 'maharashtra-caste-certificate.html'),
    ('ka-domicile-certificate.html', 'karnataka-domicile-certificate.html'),
    ('wb-ration-card.html', 'west-bengal-ration-card.html'),
    ('mp-domicile-certificate.html', 'madhya-pradesh-domicile-certificate.html'),
    ('wb-caste-certificate.html', 'west-bengal-caste-certificate.html'),
    ('jh-caste-certificate.html', 'jharkhand-caste-certificate.html'),
    ('mp-caste-certificate.html', 'madhya-pradesh-caste-certificate.html'),
    ('rj-caste-certificate.html', 'rajasthan-caste-certificate.html'),
    ('pb-ration-card.html', 'punjab-ration-card.html'),
    ('tn-income-certificate.html', 'tamil-nadu-income-certificate.html'),
    ('up-caste-certificate.html', 'uttar-pradesh-caste-certificate.html'),
    ('dl-income-certificate.html', 'delhi-income-certificate.html'),
    ('uk-caste-certificate.html', 'uttarakhand-caste-certificate.html'),
    ('as-caste-certificate.html', 'assam-caste-certificate.html'),
    ('pb-income-certificate.html', 'punjab-income-certificate.html'),
    ('jh-ration-card.html', 'jharkhand-ration-card.html'),
    ('gj-caste-certificate.html', 'gujarat-caste-certificate.html'),
    ('ap-caste-certificate.html', 'andhra-pradesh-caste-certificate.html'),
    ('cg-income-certificate.html', 'chhattisgarh-income-certificate.html'),
    ('cg-ration-card.html', 'chhattisgarh-ration-card.html'),
    ('br-income-certificate.html', 'bihar-income-certificate.html'),
    ('mp-income-certificate.html', 'madhya-pradesh-income-certificate.html'),
    ('uk-ration-card.html', 'uttarakhand-ration-card.html'),
    ('wb-income-certificate.html', 'west-bengal-income-certificate.html'),
    ('uk-domicile-certificate.html', 'uttarakhand-domicile-certificate.html'),
    ('hr-domicile-certificate.html', 'haryana-domicile-certificate.html'),
    ('mh-domicile-certificate.html', 'maharashtra-domicile-certificate.html'),
    ('br-ration-card.html', 'bihar-ration-card.html'),
    ('as-ration-card.html', 'assam-ration-card.html'),
    ('as-income-certificate.html', 'assam-income-certificate.html'),
    ('br-caste-certificate.html', 'bihar-caste-certificate.html'),
    ('tg-caste-certificate.html', 'telangana-caste-certificate.html'),
    ('ap-income-certificate.html', 'andhra-pradesh-income-certificate.html')
]

print(f'Configured {len(PAIRS)} duplicate pairs.')

def create_redirect_pages():
    print('\n--- 1. Creating 301 Meta-Refresh & Canonical Redirect Pages ---')
    count = 0
    for short_f, full_f in PAIRS:
        full_path = os.path.join(SERVICE_DIR, full_f)
        canonical_url = f"https://sarkarisewaindia.com/service/{short_f}"
        
        redirect_html = f'''<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="utf-8">
<title>Redirecting to Official Service Page...</title>
<link rel="canonical" href="{canonical_url}" />
<meta http-equiv="refresh" content="0; url=https://sarkarisewaindia.com/service/{short_f}" />
<script>window.location.replace("https://sarkarisewaindia.com/service/{short_f}");</script>
</head>
<body>
<p>Ye page yahan move ho gaya hai: <a href="https://sarkarisewaindia.com/service/{short_f}">{short_f}</a></p>
</body>
</html>'''
        with open(full_path, 'w', encoding='utf-8') as fp:
            fp.write(redirect_html)
        count += 1
    print(f'Successfully updated {count} full-name duplicate files to 301 canonical redirects.')

def generate_htaccess_rules():
    print('\n--- 2. Generating .htaccess 301 Server Redirects ---')
    rules = [
        "# =========================================================================",
        "# 65 Permanent 301 Redirects: Full-Name URLs to Canonical 2-Letter Code URLs",
        "# ========================================================================="
    ]
    for short_f, full_f in sorted(PAIRS):
        rules.append(f"Redirect 301 /service/{full_f} /service/{short_f}")
    
    htaccess_path = os.path.join(ROOT, '.htaccess')
    existing = ""
    if os.path.exists(htaccess_path):
        with open(htaccess_path, 'r', encoding='utf-8') as fp:
            existing = fp.read()
    
    marker = "# 65 Permanent 301 Redirects: Full-Name URLs to Canonical 2-Letter Code URLs"
    if marker in existing:
        # replace existing section
        pattern = re.compile(r'# =========================================================================\s*# 65 Permanent 301 Redirects:.*?(?=\n#|\Z)', re.DOTALL)
        new_content = pattern.sub("\n".join(rules), existing)
    else:
        new_content = existing.strip() + "\n\n" + "\n".join(rules) + "\n"
        
    with open(htaccess_path, 'w', encoding='utf-8') as fp:
        fp.write(new_content)
    print(f'Successfully wrote 65 301 redirect rules to .htaccess.')

def clean_sitemap():
    print('\n--- 3. Cleaning sitemap.xml ---')
    sitemap_path = os.path.join(ROOT, 'sitemap.xml')
    if not os.path.exists(sitemap_path):
        print('sitemap.xml not found, skipping.')
        return
    with open(sitemap_path, 'r', encoding='utf-8') as fp:
        sitemap = fp.read()
    
    removed = 0
    for short_f, full_f in PAIRS:
        pattern = re.compile(rf'<url>\s*<loc>https://sarkarisewaindia\.com/service/{re.escape(full_f)}</loc>.*?</url>\s*', re.DOTALL)
        if pattern.search(sitemap):
            sitemap = pattern.sub('', sitemap)
            removed += 1
            
    with open(sitemap_path, 'w', encoding='utf-8') as fp:
        fp.write(sitemap)
    print(f'Successfully removed {removed} duplicate full-name URLs from sitemap.xml.')

def update_internal_links():
    print('\n--- 4. Updating Internal Links across HTML and JS files ---')
    target_files = glob.glob(os.path.join(ROOT, 'category/*.html')) + \
                   glob.glob(os.path.join(ROOT, 'states/*.html')) + \
                   glob.glob(os.path.join(ROOT, 'blog/*.html')) + \
                   glob.glob(os.path.join(ROOT, 'partials/*.html')) + \
                   glob.glob(os.path.join(ROOT, 'assets/js/*.js')) + \
                   [os.path.join(ROOT, 'sitemap.html'), os.path.join(ROOT, 'index.html')]
    
    total_replaced = 0
    for fpath in target_files:
        if not os.path.isfile(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            content = fp.read()
        
        orig = content
        for short_f, full_f in PAIRS:
            # Replace service/west-bengal-caste-certificate.html with service/wb-caste-certificate.html
            content = content.replace(f'service/{full_f}', f'service/{short_f}')
            content = content.replace(f'../service/{full_f}', f'../service/{short_f}')
            content = content.replace(f'"{full_f}"', f'"{short_f}"')
            content = content.replace(f"'{full_f}'", f"'{short_f}'")
            content = content.replace(f'/{full_f}', f'/{short_f}')
            
        if content != orig:
            with open(fpath, 'w', encoding='utf-8') as fp:
                fp.write(content)
            total_replaced += 1
            print(f'  Updated internal links in: {os.path.relpath(fpath, ROOT)}')
            
    print(f'Successfully updated internal links across {total_replaced} files.')

def fix_stale_mojibake():
    print('\n--- 5. Cleaning Stale Mojibake in Category & Sitemap ---')
    # 1. category/jobs-education.html
    jobs_cat = os.path.join(ROOT, 'category', 'jobs-education.html')
    if os.path.exists(jobs_cat):
        with open(jobs_cat, 'r', encoding='utf-8', errors='ignore') as fp:
            jlines = fp.readlines()
        new_jlines = []
        for i, line in enumerate(jlines):
            if 'service/pm-usp-college-scholarship.html' in line and i > 0 and '"name"' in jlines[i-1]:
                # replace previous line
                new_jlines[-1] = '              "name": "पीएम उच्च शिक्षा छात्रवृत्ति योजना (PM-USP College Scholarship)",\n'
                new_jlines.append(line)
            elif i > 0 and 'href="../service/pm-usp-college-scholarship.html"' in jlines[i-1] and 'service-card__name' in line:
                new_jlines.append('        <div class="service-card__name">पीएम उच्च शिक्षा छात्रवृत्ति योजना (PM-USP College Scholarship)</div>\n')
            else:
                new_jlines.append(line)
        with open(jobs_cat, 'w', encoding='utf-8') as fp:
            fp.writelines(new_jlines)
        print('  Cleaned category/jobs-education.html')

    # 2. sitemap.html
    sitemap_html = os.path.join(ROOT, 'sitemap.html')
    if os.path.exists(sitemap_html):
        with open(sitemap_html, 'r', encoding='utf-8', errors='ignore') as fp:
            lines = fp.readlines()
        cleaned_lines = []
        for l in lines:
            if 'service/pm-usp-college-scholarship.html' in l:
                cleaned_lines.append('            <li><a href="service/pm-usp-college-scholarship.html">पीएम उच्च शिक्षा छात्रवृत्ति योजना (PM-USP College Scholarship)</a></li>\n')
            else:
                cleaned_lines.append(l)
        with open(sitemap_html, 'w', encoding='utf-8') as fp:
            fp.writelines(cleaned_lines)
        print('  Cleaned sitemap.html')

def scan_thin_services():
    print('\n======================================================================')
    print('HIGH PRIORITY CANDIDATES FOR NEXT UPGRADE')
    print('======================================================================')
    all_service_files = glob.glob(os.path.join(SERVICE_DIR, '*.html'))
    service_stats = []
    for fpath in all_service_files:
        fn = os.path.basename(fpath)
        if fn.startswith(('mpbcdc-', 'special-intensive-revision-sir')):
            continue
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            cont = fp.read()
        if 'http-equiv="refresh"' in cont:
            continue
        words = len(re.findall(r'\w+', cont))
        size_kb = len(cont.encode('utf-8')) / 1024
        service_stats.append((fn, words, size_kb))
    
    service_stats.sort(key=lambda x: x[1])
    for fn, words, size_kb in service_stats[:30]:
        print(f'  {fn:<48} | {words:5d} words | {size_kb:5.1f} KB')
    print('======================================================================')

if __name__ == '__main__':
    create_redirect_pages()
    clean_sitemap()
    update_internal_links()
    fix_stale_mojibake()
    scan_thin_services()



