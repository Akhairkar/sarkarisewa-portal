import sys
import json
import re
from bs4 import BeautifulSoup

# Ensure UTF-8 output in Windows terminal
sys.stdout.reconfigure(encoding='utf-8')

# 1. Audit lang.json
with open('data/lang.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

en_keys = set(data.get('en', {}).keys())
hi_keys = set(data.get('hi', {}).keys())

untranslated = {}
hinglish_keys = {}

def is_mostly_latin(text):
    text_str = str(text)
    latin_count = len(re.findall(r'[a-zA-Z]', text_str))
    devanagari_count = len(re.findall(r'[\u0900-\u097F]', text_str))
    return latin_count > 0 and devanagari_count == 0

for k in en_keys.intersection(hi_keys):
    en_val = str(data['en'][k]).strip()
    hi_val = str(data['hi'][k]).strip()
    
    if en_val == hi_val and len(en_val) > 4 and not en_val.isdigit() and not k.startswith("color") and not k.startswith("url") and not k.startswith("icon"):
        untranslated[k] = en_val
    elif is_mostly_latin(hi_val) and len(hi_val) > 5 and not k.startswith("url") and not k.startswith("icon") and not k.startswith("color"):
        hinglish_keys[k] = hi_val

print(f"=== 1. ISSUES IN data/lang.json ===")
print(f"Total Exact English entries in 'hi': {len(untranslated)}")
print("Sample English in 'hi':")
for k in list(untranslated.keys())[:10]:
    print(f"  - Key '{k}': {untranslated[k]}")

print(f"\nTotal Hinglish/Roman Hindi entries in 'hi': {len(hinglish_keys)}")
print("Sample Hinglish in 'hi':")
for k in list(hinglish_keys.keys())[:10]:
    print(f"  - Key '{k}': {hinglish_keys[k]}")

# 2. Audit index.html for hardcoded English elements missing data-i18n
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

missing_i18n_elements = []

for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'a', 'span', 'button', 'li']):
    if tag.name in ['script', 'style']:
        continue
    text = tag.get_text(strip=True)
    if not text or len(text) < 3:
        continue
    has_i18n = tag.has_attr('data-i18n') or bool(tag.find_parent(attrs={"data-i18n": True}))
    has_lang_show = tag.has_attr('data-lang-show') or bool(tag.find(attrs={"data-lang-show": True}))
    has_latin = bool(re.search(r'[a-zA-Z]{3,}', text))
    has_deva = bool(re.search(r'[\u0900-\u097F]', text))
    
    if not has_i18n and not has_lang_show and has_latin and not has_deva:
        if text not in ["SarkariSewa India", "S", "🌙", "☀️", "🔍", "☰"]:
            missing_i18n_elements.append((tag.name, text))

print(f"\n=== 2. HARDCODED ENGLISH SECTIONS IN index.html (Missing data-i18n) ===")
seen = set()
for tag_name, txt in missing_i18n_elements:
    clean_txt = txt[:80]
    if clean_txt not in seen:
        seen.add(clean_txt)
        print(f"  [{tag_name}] {clean_txt}")
