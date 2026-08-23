import os
import re

files = [
    "mpbcdc-direct-loan-yojana.html",
    "mpbcdc-seed-capital-yojana.html",
    "mpbcdc-subsidy-yojana.html",
    "mpbcdc-yojana.html"
]

patterns_to_remove = [
    "hero.eyebrow", "hero.title", "hero.desc", "hero.cta",
    "section.", "content.", "table.", "related.", "faq.", "cta.report",
    "dl_hero_", "sc_hero_", "disclaimer"
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        for pat in patterns_to_remove:
            # We want to remove ` data-i18n="pattern..."`
            # Careful with regex so we don't break HTML
            regex = r' data-i18n="' + pat + r'[^"]*"'
            content = re.sub(regex, "", content)
            
        # specifically fix the disclaimer one since it doesn't have a dot
        content = re.sub(r' data-i18n="disclaimer"', '', content)
            
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Cleaned up data-i18n in {filepath}")
