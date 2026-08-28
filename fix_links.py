import os, glob, re

broken_count = 0
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                if re.search(r'href="[^"]*index\.html"[^>]*>Identity Documents', content):
                    broken_count += 1
            except Exception as e:
                pass
print(f"Found {broken_count} HTML files with broken links")
