import os

# 1. Fix the generator script
filepath = "generate_web_stories.py"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace('f"{SITE_URL}/states/mpbcdc.html"', 'f"{SITE_URL}/mpbcdc-yojana.html"')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

# 2. Fix the already generated HTML
html_path = "web-stories/mpbcdc-loan-schemes-maharashtra.html"
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

html_content = html_content.replace('href="https://sarkarisewaindia.com/states/mpbcdc.html"', 'href="https://sarkarisewaindia.com/mpbcdc-yojana.html"')

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print("Fixed CTA URLs.")
