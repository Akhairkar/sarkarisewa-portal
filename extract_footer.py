import os, re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
footer_match = re.search(r'<footer.*?</footer>', content, re.DOTALL)
if footer_match:
    footer = footer_match.group(0)
    # wrap in site-footer div if present in other files
    if '<div id="site-footer">' in content:
        footer_match = re.search(r'<div id="site-footer">.*?</footer>\s*</div>', content, re.DOTALL)
        if footer_match:
            footer = footer_match.group(0)
    with open('correct_footer.html', 'w', encoding='utf-8') as f:
        f.write(footer)
    print("Footer extracted, length:", len(footer))
else:
    print("Footer not found")
