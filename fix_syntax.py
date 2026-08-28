import re

with open('generate_top100_csc.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken re.search
content = re.sub(
    r"match_end = re\.search\(r'\(\n    <!-- Cross-Linking.*?</main>\)', base\)",
    r"match_end = re.search(r'(<main[^>]*>.*?)(</main>)', base, re.DOTALL)",
    content,
    flags=re.DOTALL
)

# And fix the titles for SEO
old_titles = """titles = [
    "Lakhs of CSC Centers Directory: Find Nearest e-Seva in {city}",
    "{city} CSC Locator: Aadhaar & Common Service Centers Near Me",
    "Maha e-Seva & CSC Kendra in {city}, {state} - Full Verified List",
    "सीएससी केंद्र {city}: Find Nearest Common Service Center",
    "{city} में अपना नजदीकी CSC / ग्राहक सेवा केंद्र खोजें"
]"""
new_titles = """titles = [
    "{city} CSC Center Near Me (2026) | 5 Lakhs+ Locations",
    "Nearest CSC / Jan Seva Kendra in {city}, {state} (2026 List)",
    "Find Aadhaar & CSC Center Near Me in {city} (5 Lakhs+ Data)"
]"""
content = content.replace(old_titles, new_titles)

with open('generate_top100_csc.py', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed and updated!")
