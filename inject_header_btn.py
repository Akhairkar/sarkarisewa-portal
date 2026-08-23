import os

def get_depth(filepath):
    # number of separators after base dir
    rel = os.path.relpath(filepath, ".")
    if rel == ".": return 0
    return rel.count(os.sep)

def inject_header_btn():
    button_template = '''
<a href="{root}tools/csc-locator.html" class="btn btn--primary header-csc-btn" style="padding: 6px 12px; font-size: 0.85rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
<span data-lang-show="en">📍 Nearest CSC</span>
<span data-lang-show="hi">📍 जन सेवा केंद्र</span>
</a>
'''
    count = 0
    for root, dirs, files in os.walk("."):
        if ".git" in root or "assets" in root:
            continue
        for f in files:
            if f.endswith(".html"):
                path = os.path.join(root, f)
                with open(path, "r", encoding="utf-8") as file:
                    content = file.read()
                
                if "header-csc-btn" in content:
                    continue
                    
                target = '<div class="header-actions">'
                if target in content:
                    depth = get_depth(path)
                    if depth == 0:
                        root_prefix = "./"
                    else:
                        root_prefix = "../" * depth
                        
                    btn = button_template.replace("{root}", root_prefix)
                    # Insert right after <div class="header-actions">
                    content = content.replace(target, target + btn)
                    
                    with open(path, "w", encoding="utf-8") as file:
                        file.write(content)
                    count += 1
    print(f"Injected button into {count} files.")

if __name__ == "__main__":
    inject_header_btn()
