import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

update_files = sorted(glob.glob('updates/*.html'))
print(f"Enhancing {len(update_files)} updates pages...")

def slug_to_title(slug):
    words = slug.split('-')
    # capitalize words
    clean_words = []
    for w in words:
        if w.lower() in ['in', 'to', 'of', 'and', 'for', 'the', 'on', 'at', 'by', 'with', 'from', 's']:
            clean_words.append(w.lower())
        else:
            clean_words.append(w.capitalize())
    if clean_words:
        clean_words[0] = clean_words[0].capitalize()
    return " ".join(clean_words)

fixed_count = 0

for uf in update_files:
    fname = os.path.basename(uf)
    slug = fname.replace('.html', '')
    
    with open(uf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    orig_html = html
    
    # 1. Clean headline from slug
    headline = slug_to_title(slug)
    # Ensure title is max 50 chars + " | SarkariSewa India" (~65 chars total)
    if len(headline) > 42:
        short_headline = headline[:42].rsplit(' ', 1)[0]
    else:
        short_headline = headline
        
    seo_title = f"{short_headline} | SarkariSewa India"
    
    # Replace <title>
    html = re.sub(r'<title>.*?</title>', f'<title>{seo_title}</title>', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta content=".*?" property="og:title"/>', f'<meta property="og:title" content="{seo_title}"/>', html)
    html = re.sub(r'<meta property="og:title" content=".*?"/?>', f'<meta property="og:title" content="{seo_title}">', html)
    html = re.sub(r'<meta content=".*?" name="twitter:title"/>', f'<meta name="twitter:title" content="{seo_title}"/>', html)
    html = re.sub(r'<meta name="twitter:title" content=".*?"/?>', f'<meta name="twitter:title" content="{seo_title}">', html)
    
    # Fix headline in h1 if awkward
    h1_text = f"{headline}"
    html = re.sub(r'<h1 style="[^"]*">.*?</h1>', f'<h1 style="font-size:1.7rem; line-height:1.4; color:var(--color-text); margin:0 0 8px 0;">{h1_text}</h1>', html)
    html = re.sub(r'<h2 style="[^"]*">.*?</h2>', f'<h2 style="font-size:1.25rem; font-weight:500; color:var(--color-primary); margin:0;">{headline}: मुख्य विवरण व नियम</h2>', html)
    
    # 2. Fix datePublished
    html = re.sub(r'"datePublished":\s*"[^"]*"', '"datePublished": "2026-08-31T00:00:00+05:30"', html)
    html = re.sub(r'📅\s*Mon,\s*31\s*Au', '📅 31 August 2026', html)
    
    # 3. Fix breadcrumb name
    html = re.sub(r'<span style="color:var\(--color-text\);">.*?</span>\s*</nav>', f'<span style="color:var(--color-text);">{short_headline}</span></nav>', html)
    
    # 4. Fix schema headline
    html = re.sub(r'"headline":\s*"[^"]*"', f'"headline": "{short_headline}"', html)

    if html != orig_html:
        with open(uf, 'w', encoding='utf-8') as fp:
            fp.write(html)
        fixed_count += 1

print(f"Upgraded SEO titles and metadata across {fixed_count} / {len(update_files)} update pages!")
