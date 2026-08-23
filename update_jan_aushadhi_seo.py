import os
import re

filepath = "service/jan-aushadhi-store-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# New tags
new_title = "Jan Aushadhi Kendra Near Me | PMBJK Store Locator 2026"
new_desc = "Find your nearest Pradhan Mantri Jan Aushadhi Kendra (PMBJK) and save up to 90% on generic medicines. Search by State, District, or PIN code."

# Regex replacements
content = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', content, flags=re.DOTALL)
content = re.sub(r'<meta name="description" content=".*?"\s*/?>', f'<meta name="description" content="{new_desc}" />', content, flags=re.DOTALL)
content = re.sub(r'<meta property="og:title" content=".*?"\s*/?>', f'<meta property="og:title" content="{new_title}" />', content, flags=re.DOTALL)
content = re.sub(r'<meta property="og:description" content=".*?"\s*/?>', f'<meta property="og:description" content="{new_desc}" />', content, flags=re.DOTALL)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated Jan Aushadhi SEO tags.")
