with open('generate_top100_csc.py', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Update titles
content = re.sub(
    r'titles = \[.*?\]',
    '''titles = [
    "{city} CSC Center Near Me (2026) | 5 Lakhs+ Locations",
    "Nearest CSC / Jan Seva Kendra in {city}, {state} (2026 List)",
    "Find Aadhaar & CSC Center Near Me in {city} (5 Lakhs+ Data)"
]''',
    content,
    flags=re.DOTALL
)

with open('generate_top100_csc.py', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated top100 CSC SEO")
