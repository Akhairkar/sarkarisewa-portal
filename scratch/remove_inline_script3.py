import os

files = [
    'tools/document-checklist.html',
    'tools/self-declaration-builder.html',
    'tools/savings-comparator.html',
    'tools/govt-card-clarifier.html'
]

snippet = """    <script>
      document.addEventListener("DOMContentLoaded", () => {
        fetch('../partials/header.html').then(r => r.text()).then(html => {
          document.getElementById('site-header').innerHTML = html;
        });
        fetch('../partials/footer.html').then(r => r.text()).then(html => {
          document.getElementById('site-footer').innerHTML = html;
        });
      });
    </script>"""

for fpath in files:
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Try finding it exactly
        if snippet in content:
            new_content = content.replace(snippet, "")
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Fixed", fpath)
        else:
            # Maybe indentation is different
            found = False
            lines = content.split('\n')
            new_lines = []
            skip = False
            for i, line in enumerate(lines):
                if '<script>' in line and 'fetch(\'../partials/header.html\')' in lines[min(i+2, len(lines)-1)]:
                    skip = True
                if skip and '</script>' in line:
                    skip = False
                    found = True
                    continue
                if not skip:
                    new_lines.append(line)
            if found:
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(new_lines))
                print("Fixed via lines in", fpath)
            else:
                print("Not found in", fpath)

    except Exception as e:
        print(fpath, e)
