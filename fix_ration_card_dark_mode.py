import glob
import re

# Find all ration-card HTML files in service/ and states/
files = glob.glob("service/*ration-card.html") + glob.glob("states/*ration-card.html")

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # The issue: `.v2-template .service-section { background: #fff;`
    # We change #fff to var(--color-surface)
    
    html = re.sub(
        r'\.v2-template \.service-section\s*\{\s*background:\s*#fff;',
        '.v2-template .service-section { background: var(--color-surface);',
        html
    )
    
    # Also check if there's any inline background: #fff or background-color: white that shouldn't be there
    # But usually, it's just this v2-template style.

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)

print("Fixed dark mode backgrounds for all ration card pages!")
