import os, re

def get_depth(filepath):
    filepath = filepath.replace('\\', '/')
    if filepath.startswith('./'):
        filepath = filepath[2:]
    return len(filepath.split('/')) - 1

def generate_prefix(depth):
    return "../" * depth if depth > 0 else ""

with open('correct_header.html', 'r', encoding='utf-8') as f:
    base_header = f.read()

with open('correct_footer.html', 'r', encoding='utf-8') as f:
    base_footer = f.read()

def inject_prefix(html_chunk, prefix):
    if not prefix:
        return html_chunk
    def replacer(match):
        href = match.group(1)
        if re.match(r'^(http|#|/|mailto|tel|javascript)', href):
            return f'href="{href}"'
        if href.startswith('./'):
            href = href[2:]
        return f'href="{prefix}{href}"'
    return re.sub(r'href="([^"]+)"', replacer, html_chunk)

count = 0
for root, dirs, files in os.walk('.'):
    if '.git' in root or 'node_modules' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            depth = get_depth(filepath)
            prefix = generate_prefix(depth)
            
            new_header = inject_prefix(base_header, prefix)
            new_footer = inject_prefix(base_footer, prefix)
            
            try:
                with open(filepath, 'r', encoding='utf-8') as file:
                    content = file.read()
                
                new_content = content
                
                header_pattern = r'<div id="site-header">.*?</div>\s*<nav aria-label="Primary mobile".*?</header>\s*</div>'
                if not re.search(header_pattern, new_content, re.DOTALL):
                    header_pattern = r'<div id="site-header">.*?</header>\s*</div>'
                
                if re.search(header_pattern, new_content, re.DOTALL):
                    new_content = re.sub(header_pattern, new_header.replace('\\', '\\\\'), new_content, flags=re.DOTALL)
                
                footer_pattern = r'<div id="site-footer">.*?</footer>\s*</div>'
                if re.search(footer_pattern, new_content, re.DOTALL):
                    new_content = re.sub(footer_pattern, new_footer.replace('\\', '\\\\'), new_content, flags=re.DOTALL)
                else:
                    footer_pattern2 = r'<footer class="site-footer">.*?</footer>'
                    if re.search(footer_pattern2, new_content, re.DOTALL):
                        new_content = re.sub(footer_pattern2, new_footer.replace('\\', '\\\\'), new_content, flags=re.DOTALL)

                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as file:
                        file.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f"Fixed navigation in {count} HTML files.")
