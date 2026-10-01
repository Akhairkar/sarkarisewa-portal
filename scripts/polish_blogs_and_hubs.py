import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Inject schema into blog/index.html, blog/post.html, latest-updates.html, deadline-detail.html
blog_index_schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SarkariSewa India Official Blog",
    "url": "https://sarkarisewaindia.com/blog/index.html",
    "description": "Guides, application walkthroughs, and eligibility breakdowns for Indian government welfare schemes and citizen services."
}

latest_updates_schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Latest Government Scheme Updates & Notifications",
    "url": "https://sarkarisewaindia.com/latest-updates.html",
    "description": "Daily real-time news, notifications, and policy updates on central and state government schemes in India."
}

def inject_schema(file_path, schema_obj):
    if not os.path.exists(file_path):
        return
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    if 'application/ld+json' not in html:
        script = f'\n  <script type="application/ld+json">\n{json.dumps(schema_obj, ensure_ascii=False, indent=2)}\n  </script>\n'
        idx = html.find('</head>')
        if idx != -1:
            html = html[:idx] + script + html[idx:]
            with open(file_path, 'w', encoding='utf-8') as fp:
                fp.write(html)
            print(f"Injected JSON-LD Schema into {file_path}")

inject_schema('blog/index.html', blog_index_schema)
inject_schema('latest-updates.html', latest_updates_schema)

# 2. Polish long blog titles
blog_files = sorted(glob.glob('blog/*.html'))
print(f"\nAuditing {len(blog_files)} blog files for title lengths...")

polished_blogs = 0
for bf in blog_files:
    fname = os.path.basename(bf)
    if fname in ['index.html', 'post.html']:
        continue
    with open(bf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    orig = html
    
    tm = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
    if tm:
        full_title = tm.group(1).strip()
        if len(full_title) > 68:
            # Separate brand if present
            core_title = full_title
            brand_suffix = " | SarkariSewa India"
            if " | SarkariSewa India" in full_title:
                core_title = full_title.replace(" | SarkariSewa India", "")
            elif " - SarkariSewa India" in full_title:
                core_title = full_title.replace(" - SarkariSewa India", "")
            elif " — SarkariSewa India ब्लॉग" in full_title:
                core_title = full_title.replace(" — SarkariSewa India ब्लॉग", "")
                
            # If core_title is still too long (> 45 chars), truncate cleanly at word boundary
            if len(core_title) > 45:
                core_title = core_title[:45].rsplit(' ', 1)[0]
                
            new_title = f"{core_title}{brand_suffix}"
            
            html = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', html, flags=re.IGNORECASE)
            html = re.sub(r'<meta content=".*?" property="og:title"/>', f'<meta property="og:title" content="{new_title}"/>', html)
            html = re.sub(r'<meta property="og:title" content=".*?"/?>', f'<meta property="og:title" content="{new_title}">', html)
            html = re.sub(r'<meta content=".*?" name="twitter:title"/>', f'<meta name="twitter:title" content="{new_title}"/>', html)
            html = re.sub(r'<meta name="twitter:title" content=".*?"/?>', f'<meta name="twitter:title" content="{new_title}">', html)
            
            if html != orig:
                with open(bf, 'w', encoding='utf-8') as fp:
                    fp.write(html)
                polished_blogs += 1

print(f"Polished {polished_blogs} blog titles to concise high-CTR format under 65 chars!")
