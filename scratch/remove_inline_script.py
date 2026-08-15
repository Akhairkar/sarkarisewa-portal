import os
import glob
import re

files = [
    'tools/document-checklist.html',
    'tools/self-declaration-builder.html',
    'tools/savings-comparator.html',
    'tools/govt-card-clarifier.html'
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = re.sub(r'<script>\s*document\.addEventListener\("DOMContentLoaded".*?fetch\(\'\.\./partials/header\.html\'.*?</script>', '', content, flags=re.DOTALL)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed {filepath}")
