import re

files = [
    'tools/document-checklist.html',
    'tools/self-declaration-builder.html',
    'tools/savings-comparator.html',
    'tools/govt-card-clarifier.html'
]

pattern = r"""\s*<script>\s*document\.addEventListener\("DOMContentLoaded", \(\) => \{\s*fetch\('\.\./partials/header\.html'\)\.then\(r => r\.text\(\)\)\.then\(html => \{\s*document\.getElementById\('site-header'\)\.innerHTML = html;\s*\}\);\s*fetch\('\.\./partials/footer\.html'\)\.then\(r => r\.text\(\)\)\.then\(html => \{\s*document\.getElementById\('site-footer'\)\.innerHTML = html;\s*\}\);\s*\}\);\s*</script>"""

for fpath in files:
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = re.sub(pattern, '', content)
        
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Fixed", fpath)
        else:
            print("Pattern not found in", fpath)
    except Exception as e:
        print(fpath, e)
