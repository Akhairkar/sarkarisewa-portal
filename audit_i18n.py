import json
import re

with open('data/lang.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

en_keys = set(data.get('en', {}).keys())
hi_keys = set(data.get('hi', {}).keys())

missing_in_hi = en_keys - hi_keys
print(f"Total EN keys: {len(en_keys)}")
print(f"Total HI keys: {len(hi_keys)}")
print(f"Keys in EN but missing in HI: {len(missing_in_hi)}")
for k in list(missing_in_hi)[:15]:
    print(f"  - {k}: {data['en'][k]}")

# Check keys in HI that are identical to EN (untranslated English)
untranslated = {}
hinglish_keys = {}

def contains_devanagari(text):
    return bool(re.search(r'[\u0900-\u097F]', str(text)))

def is_mostly_latin(text):
    text_str = str(text)
    latin_count = len(re.findall(r'[a-zA-Z]', text_str))
    devanagari_count = len(re.findall(r'[\u0900-\u097F]', text_str))
    return latin_count > 0 and devanagari_count == 0

for k in en_keys.intersection(hi_keys):
    en_val = str(data['en'][k]).strip()
    hi_val = str(data['hi'][k]).strip()
    
    if en_val == hi_val and len(en_val) > 4 and not en_val.isdigit() and not k.startswith("color") and not k.startswith("url"):
        untranslated[k] = en_val
    elif is_mostly_latin(hi_val) and len(hi_val) > 5 and not k.startswith("url") and not k.startswith("icon"):
        hinglish_keys[k] = hi_val

print(f"\nExact English copy in HI (Untranslated): {len(untranslated)}")
for k, v in list(untranslated.items())[:20]:
    print(f"  - {k} -> '{v}'")

print(f"\nRomanized / Hinglish in HI (Latin characters instead of Devanagari): {len(hinglish_keys)}")
for k, v in list(hinglish_keys.items())[:20]:
    print(f"  - {k} -> '{v}'")
