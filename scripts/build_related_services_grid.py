import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Step 1: Scan all 519 non-stub service pages and extract metadata
service_files = sorted(glob.glob('service/*.html'))
print(f"Total service files on disk: {len(service_files)}")

services_db = {}
non_stubs = []

for sf in service_files:
    fname = os.path.basename(sf)
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        
    if 'window.location.replace' in content or 'http-equiv="refresh"' in content or len(content) < 1500:
        continue
        
    non_stubs.append(sf)
    
    # Extract Title
    title_h1_match = re.search(r'<h1[^>]*class=["\']service-hero__title["\'][^>]*>(.*?)</h1>', content, re.DOTALL | re.IGNORECASE)
    title = title_h1_match.group(1).strip() if title_h1_match else ""
    if not title:
        title_tag_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
        title = title_tag_match.group(1).split('|')[0].strip() if title_tag_match else fname.replace('.html', '').replace('-', ' ').title()
    title = re.sub(r'<[^>]+>', '', title).strip()

    # Extract State
    state_badge_match = re.search(r'<span[^>]*class=["\']service-hero__badge["\'][^>]*>(.*?)</span>', content, re.DOTALL | re.IGNORECASE)
    state_badge = state_badge_match.group(1).strip() if state_badge_match else ""
    
    # State prefix check from filename (e.g. wb-, up-, mh-, rj-, mp-, br-, etc.)
    state_code = ""
    prefix_2 = fname.split('-')[0]
    if prefix_2 in ['wb', 'up', 'mh', 'rj', 'mp', 'br', 'cg', 'gj', 'hr', 'hp', 'jh', 'ka', 'kl', 'od', 'pb', 'tn', 'ts', 'uk', 'as', 'ap', 'dl', 'ga', 'jk', 'sk', 'tr', 'mz', 'nl', 'mn', 'ml', 'ar', 'py', 'ch']:
        state_code = prefix_2
    else:
        # Check full state name in filename (e.g. bihar-, delhi-, haryana-)
        for sname in ['andhra-pradesh', 'arunachal-pradesh', 'assam', 'bihar', 'chhattisgarh', 'delhi', 'goa', 'gujarat', 'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala', 'madhya-pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan', 'sikkim', 'tamil-nadu', 'telangana', 'tripura', 'uttar-pradesh', 'uttarakhand', 'west-bengal']:
            if fname.startswith(sname + '-'):
                state_code = sname
                break

    # Extract Desc
    desc_match = re.search(r'<p[^>]*class=["\']service-hero__desc["\'][^>]*>(.*?)</p>', content, re.DOTALL | re.IGNORECASE)
    desc = desc_match.group(1).strip() if desc_match else ""
    desc = re.sub(r'<[^>]+>', '', desc).strip()
    if len(desc) > 90:
        desc = desc[:87] + '...'
    if not desc:
        desc = "ऑनलाइन आवेदन, पात्रता नियम, आवश्यक दस्तावेज़ व स्टेटस चेक की पूरी जानकारी।"

    # Extract Category if available
    category = "general"
    if any(k in fname for k in ['caste', 'income', 'domicile', 'residence', 'birth', 'death', 'marriage', 'ration', 'aadhaar', 'pan', 'voter', 'driving']):
        category = "identity-documents"
    elif any(k in fname for k in ['yojana', 'kisan', 'pension', 'awas', 'sukanya', 'matru', 'poshan', 'subsidy', 'didi']):
        category = "government-schemes"
    elif any(k in fname for k in ['tax', 'itr', 'epf', 'nps', 'gratuity', 'salary', 'loan', 'bank', 'credit']):
        category = "finance-tax"
    elif any(k in fname for k in ['job', 'exam', 'scholarship', 'apprenticeship', 'admission', 'recruitment', 'police']):
        category = "jobs-education"
    elif any(k in fname for k in ['bill', 'electricity', 'water', 'lpg', 'gas', 'challan', 'fastag', 'property']):
        category = "utilities"
    elif any(k in fname for k in ['health', 'ayushman', 'swasthya', 'hospital', 'medicine', 'jan-aushadhi']):
        category = "health"

    services_db[fname] = {
        "filename": fname,
        "path": sf,
        "title": title,
        "state_code": state_code,
        "state_badge": state_badge,
        "desc": desc,
        "category": category
    }

print(f"Indexed {len(services_db)} non-stub services.")

# Group by state_code and category
by_state = {}
by_category = {}

for fn, info in services_db.items():
    sc = info["state_code"]
    if sc:
        if sc not in by_state:
            by_state[sc] = []
        by_state[sc].append(info)
        
    cat = info["category"]
    if cat not in by_category:
        by_category[cat] = []
    by_category[cat].append(info)

# Popular flagship fallback services
flagship_services = [
    "pm-kisan.html", "ayushman-bharat.html", "pan-card.html", "driving-licence.html",
    "ration-card.html", "pm-awas-yojana.html", "e-shram-card.html", "kisan-credit-card.html"
]

def get_related_services_for(fn):
    current = services_db[fn]
    sc = current["state_code"]
    cat = current["category"]
    
    candidates = []
    
    # 1. State candidates first
    if sc and sc in by_state:
        for s in by_state[sc]:
            if s["filename"] != fn and s not in candidates:
                candidates.append(s)
                
    # 2. Category candidates
    if len(candidates) < 4 and cat in by_category:
        for s in by_category[cat]:
            if s["filename"] != fn and s not in candidates:
                candidates.append(s)
                if len(candidates) >= 4:
                    break
                    
    # 3. Flagship fallbacks
    if len(candidates) < 4:
        for ffn in flagship_services:
            if ffn in services_db and ffn != fn and services_db[ffn] not in candidates:
                candidates.append(services_db[ffn])
                if len(candidates) >= 4:
                    break
                    
    return candidates[:4]

def build_related_grid_html(related_list, current_info):
    state_badge = current_info["state_badge"] or "प्रमुख सरकारी"
    state_badge_clean = re.sub(r'<[^>]+>', '', state_badge).strip()
    
    cards_html = ""
    for r in related_list:
        icon = "🏛️"
        if r["category"] == "identity-documents": icon = "🪪"
        elif r["category"] == "government-schemes": icon = "🌾"
        elif r["category"] == "finance-tax": icon = "💰"
        elif r["category"] == "jobs-education": icon = "🎓"
        elif r["category"] == "health": icon = "🏥"
        elif r["category"] == "utilities": icon = "⚡"
        
        cards_html += f"""
        <a href="{r['filename']}" class="service-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border: 1px solid var(--color-border); border-radius: 12px; text-decoration: none; color: inherit; background: var(--color-surface); box-shadow: 0 2px 6px rgba(0,0,0,0.03); transition: transform 0.2s ease, border-color 0.2s ease;">
          <div>
            <div style="font-size: 1.5rem; margin-bottom: 8px;">{icon}</div>
            <strong style="color: var(--color-primary); font-size: 1.05rem; display: block; margin-bottom: 6px; line-height: 1.3;">{r['title']}</strong>
            <span style="color: var(--color-text-muted); font-size: 0.85rem; line-height: 1.5; display: block;">{r['desc']}</span>
          </div>
          <span style="color: var(--color-accent-saffron, #D97F2B); font-weight: 700; font-size: 0.88rem; margin-top: 14px; display: inline-flex; align-items: center; gap: 4px;">
            पूरी गाइड देखें &rarr;
          </span>
        </a>"""

    section_html = f"""
    <!-- REAL RELATED SERVICES GRID -->
    <section class="service-section" style="margin: 36px 0;">
      <h2 class="service-section__title" style="font-size: 1.5rem; margin-bottom: 18px; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
        <span class="icon">📍</span> संबंधित प्रमुख सरकारी सेवाएं (Related Services)
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
{cards_html}
      </div>
      <div style="margin-top: 16px; text-align: right;">
        <a href="../states/index.html" style="color: var(--color-primary); font-weight: 600; font-size: 0.92rem; text-decoration: none;">
          ← सभी राज्यों की सेवाएं देखें (State Services Hub)
        </a>
      </div>
    </section>"""
    return section_html

# Step 2: Inject the related grid into all 519 non-stub pages
updated_count = 0

for fn, info in services_db.items():
    file_path = info["path"]
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    related = get_related_services_for(fn)
    if not related:
        continue
        
    grid_html = build_related_grid_html(related, info)
    
    # Target replacement for old generic text link
    # Pattern: <section class="service-section">\s*<h2[^>]*>.*?अन्य लोकप्रिय सेवाएं</h2>\s*<p><a href="[^"]*">.*?</a></p>\s*</section>
    old_section_regex = r'<section[^>]*class=["\']service-section["\'][^>]*>\s*<h2[^>]*class=["\']service-section__title["\'][^>]*>.*?अन्य लोकप्रिय सेवाएं</h2>\s*<p><a[^>]*href=["\'][^"\']*["\']>.*?</a></p>\s*</section>'
    
    if re.search(old_section_regex, html, re.DOTALL | re.IGNORECASE):
        html = re.sub(old_section_regex, grid_html, html, count=1, flags=re.DOTALL | re.IGNORECASE)
        updated_count += 1
    elif '<!-- REAL RELATED SERVICES GRID -->' in html:
        # already has grid, replace with refreshed grid
        html = re.sub(r'<!-- REAL RELATED SERVICES GRID -->.*?<!-- /REAL RELATED SERVICES GRID -->', '<!-- REAL RELATED SERVICES GRID -->' + grid_html + '<!-- /REAL RELATED SERVICES GRID -->', html, flags=re.DOTALL)
        updated_count += 1
    else:
        # Insert before problem-solvers-section or subscribe-widget or tools-grid-section
        if '<section class="problem-solvers-section"' in html:
            html = html.replace('<section class="problem-solvers-section"', grid_html + '\n    <section class="problem-solvers-section"')
            updated_count += 1
        elif '<div id="subscribe-widget"' in html:
            html = html.replace('<div id="subscribe-widget"', grid_html + '\n    <div id="subscribe-widget"')
            updated_count += 1
        elif '</main>' in html:
            html = html.replace('</main>', grid_html + '\n</main>')
            updated_count += 1

    with open(file_path, 'w', encoding='utf-8') as fp:
        fp.write(html)

print(f"==================================================")
print(f"DONE: Injected genuine Related Services Grid in {updated_count} / {len(services_db)} service pages!")
print(f"==================================================")
