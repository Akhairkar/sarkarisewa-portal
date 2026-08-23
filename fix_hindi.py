import re
with open('service/jan-aushadhi-store-locator.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'<span data-lang-show="hi">.*?</span>', '<span data-lang-show="hi">🔍 राज्य के अनुसार जन औषधि केंद्र खोजें</span>', html, count=1)
html = re.sub(r'<span data-lang-show="hi">.*?</span>', '<span data-lang-show="hi">अपने राज्य का चयन करें और अपने क्षेत्र में स्टोर के स्थान, जेनेरिक दवाओं की कीमतें और अन्य जानकारी प्राप्त करें।</span>', html, count=1)
# Wait, this would just replace the FIRST instance twice... I should replace it specifically within the grid.

grid_start = html.find('<!-- JAN AUSHADHI STATE HUB GRID -->')
grid_end = html.find('<!-- /JAN AUSHADHI STATE HUB GRID -->')

if grid_start != -1 and grid_end != -1:
    grid = html[grid_start:grid_end]
    grid = re.sub(r'<span data-lang-show="hi">.*?</span>', '<span data-lang-show="hi">🔍 राज्य के अनुसार जन औषधि केंद्र खोजें</span>', grid, count=1)
    
    # second instance
    grid = re.sub(r'<span data-lang-show="hi">.*?</span>', 'SPAN_PLACEHOLDER', grid, count=1) # replace first again temporarily
    grid = re.sub(r'<span data-lang-show="hi">.*?</span>', '<span data-lang-show="hi">अपने राज्य का चयन करें और अपने क्षेत्र में स्टोर के स्थान, जेनेरिक दवाओं की कीमतें और अन्य जानकारी प्राप्त करें।</span>', grid, count=1)
    grid = grid.replace('SPAN_PLACEHOLDER', '<span data-lang-show="hi">🔍 राज्य के अनुसार जन औषधि केंद्र खोजें</span>')
    
    grid = grid.replace('dY"?', '🔍')
    
    html = html[:grid_start] + grid + html[grid_end:]
    
    with open('service/jan-aushadhi-store-locator.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Fixed mojibake!")
