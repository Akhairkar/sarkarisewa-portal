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
        
    for tag_type in ['og:description', 'twitter:description', 'og:title', 'twitter:title']:
        match1 = re.search(fr'<meta[^>]*property="{tag_type}"[^>]*content="([^"]*)"', content, re.IGNORECASE)
        match2 = re.search(fr'<meta[^>]*name="{tag_type}"[^>]*content="([^"]*)"', content, re.IGNORECASE)
        match3 = re.search(fr'<meta[^>]*content="([^"]*)"[^>]*(?:property|name)="{tag_type}"', content, re.IGNORECASE)
        
        for m in [match1, match2, match3]:
            if m:
                meta_content = m.group(1)
                if '<span' in meta_content or '<div' in meta_content or 'data-lang' in meta_content or '<p>' in meta_content:
                    print(f"Broken {tag_type} in: {filepath}")
                    broken_count += 1
                break
            
print(f"Found {broken_count} broken OG/Twitter meta tags.")
