import os

with open("partials/footer.html", "r", encoding="utf-8") as f:
    footer_html = f.read()

# Fix depths
footer_html = footer_html.replace('href="../', 'href="../../../')
# Wrap in id site-footer
final_footer = f'<div id="site-footer">\n{footer_html}\n</div>'

for script in ["generate_thick_csc.py", "generate_ja_district_pages.py"]:
    with open(script, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Replace old footer
    old_footer = '<div id="site-footer"><footer class="site-footer"><div class="container"><p style="text-align:center;">&copy; 2026 SarkariSewa India</p></div></footer></div>'
    content = content.replace(old_footer, final_footer)
    
    with open(script, "w", encoding="utf-8") as f:
        f.write(content)

print("Footer injected!")
