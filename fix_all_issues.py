import os
import re

def fix():
    with open("partials/header.html", "r", encoding="utf-8") as f:
        header_html = f.read()

    # The header has relative links assuming depth=1 (e.g., href="../index.html")
    # For district pages, depth is 3 (service/csc-locator/state/district.html)
    header_html = header_html.replace('href="../', 'href="../../../')
    # Use exact same structure as main.js expects
    full_header = f'<div id="site-header">\n{header_html}\n</div>'

    for script in ["generate_thick_csc.py", "generate_ja_district_pages.py"]:
        with open(script, "r", encoding="utf-8") as f:
            content = f.read()
            
        # 1. FIX HEADER
        # Replace everything between <body ...> and <main class="container"...
        content = re.sub(
            r'(<body[^>]*>).*?(<main class="container")', 
            lambda m: f"{m.group(1)}\n{full_header}\n{m.group(2)}", 
            content, 
            flags=re.DOTALL
        )
        
        # 2. FIX CSS TEXT VISIBILITY (Make text strictly --color-text instead of --color-text-muted)
        content = content.replace("color: var(--color-text-muted)", "color: var(--color-text)")
        
        with open(script, "w", encoding="utf-8") as f:
            f.write(content)

    print("Success")

if __name__ == "__main__":
    fix()
