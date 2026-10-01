with open('generate_caste_birth_death.py', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Safely update the death cert title
content = re.sub(
    r'title_en = f"\{name\} Death Certificate Apply Online 2026: Process & Status"',
    r'title_en = f"{name} Death Certificate Apply Online (2026) | CRS Portal & Download"',
    content
)

with open('generate_caste_birth_death.py', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated caste birth death SEO safely")
