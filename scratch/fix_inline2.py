import os

files = [
    'tools/document-checklist.html',
    'tools/self-declaration-builder.html',
    'tools/savings-comparator.html',
    'tools/govt-card-clarifier.html'
]

# We need to remove these EXACT lines without matching the surrounding <script> tags.
# Since exact whitespace might differ between lines, let's use line-by-line replacement.
lines_to_remove = [
    'document.addEventListener("DOMContentLoaded", () => {',
    'fetch(\'../partials/header.html\').then(r => r.text()).then(html => {',
    'document.getElementById(\'site-header\').innerHTML = html;',
    '});',
    'fetch(\'../partials/footer.html\').then(r => r.text()).then(html => {',
    'document.getElementById(\'site-footer\').innerHTML = html;',
    '});',
    '});'
]

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            lines = file.readlines()
        
        new_lines = []
        i = 0
        while i < len(lines):
            # check if lines_to_remove matches starting at i
            match = True
            if i + len(lines_to_remove) <= len(lines):
                for j, target_line in enumerate(lines_to_remove):
                    if target_line.strip() != lines[i+j].strip():
                        match = False
                        break
            else:
                match = False
                
            if match:
                i += len(lines_to_remove)
            else:
                new_lines.append(lines[i])
                i += 1
                
        with open(f, 'w', encoding='utf-8', newline='') as file:
            file.writelines(new_lines)
            
        print(f"Processed {f}")
    except Exception as e:
        print(f"Error processing {f}: {e}")
