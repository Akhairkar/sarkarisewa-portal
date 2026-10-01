import re
filepath = 'generate_web_stories.py'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('print(f"✅ Created:', 'print(f"Created:')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
