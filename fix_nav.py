import os, re

# Read index.html to extract correct header and footer
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

header_match = re.search(r'<div id="site-header">.*?</div>\n<nav aria-label="Primary mobile".*?</header>\n</div>', content, re.DOTALL)
if not header_match:
    header_match = re.search(r'<div id="site-header">.*?</header>\n</div>', content, re.DOTALL)

footer_match = re.search(r'<div id="site-footer">.*?</footer>\n</div>', content, re.DOTALL)

header_template = header_match.group(0) if header_match else ""
footer_template = footer_match.group(0) if footer_match else ""

with open('correct_header.html', 'w', encoding='utf-8') as f:
    f.write(header_template)
with open('correct_footer.html', 'w', encoding='utf-8') as f:
    f.write(footer_template)

print("Header length:", len(header_template))
print("Footer length:", len(footer_template))
