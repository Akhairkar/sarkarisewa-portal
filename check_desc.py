import glob
import re

html_files = glob.glob('service/**/*.html', recursive=True)
broken_count = 0

for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        continue
        
    # Find meta description
    desc_match = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', content, re.IGNORECASE)
    if not desc_match:
        # Check alternative attribute order
        desc_match = re.search(r'<meta[^>]*content="([^"]*)"[^>]*name="description"', content, re.IGNORECASE)
        
    if desc_match:
        desc_content = desc_match.group(1)
        if '<span' in desc_content or '<div' in desc_content or 'data-lang' in desc_content or '<p>' in desc_content:
            print(f"Broken description in: {filepath}")
            broken_count += 1
            
print(f"Found {broken_count} broken descriptions.")
