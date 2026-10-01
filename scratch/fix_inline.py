import os

files = [
    'tools/document-checklist.html',
    'tools/self-declaration-builder.html',
    'tools/savings-comparator.html',
    'tools/govt-card-clarifier.html'
]

target = """    <script>
      document.addEventListener("DOMContentLoaded", () => {
        fetch('../partials/header.html').then(r => r.text()).then(html => {
          document.getElementById('site-header').innerHTML = html;
        });
        fetch('../partials/footer.html').then(r => r.text()).then(html => {
          document.getElementById('site-footer').innerHTML = html;
        });
      });"""

replacement = """    <script>"""

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    target_crlf = target.replace('\n', '\r\n')
    target_lf = target.replace('\r\n', '\n')
    
    if target_crlf in content:
        content = content.replace(target_crlf, replacement)
        with open(f, 'w', encoding='utf-8', newline='') as file:
            file.write(content)
        print(f'Fixed CRLF {f}')
    elif target_lf in content:
        content = content.replace(target_lf, replacement)
        with open(f, 'w', encoding='utf-8', newline='') as file:
            file.write(content)
        print(f'Fixed LF {f}')
    else:
        print(f'Not found in {f}')
