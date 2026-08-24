import os
import glob
import re

html_files = glob.glob('service/**/*.html', recursive=True)
count = 0

for filepath in html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        continue
        
    if '<title><span data' in content:
        # Find the H1 tag content
        h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
        if h1_match:
            h1_inner = h1_match.group(1)
            
            # Extract English text if data-lang-show="en" exists
            en_match = re.search(r'<span data-lang-show="en">(.*?)</span>', h1_inner, re.DOTALL)
            if en_match:
                title_text = en_match.group(1).strip()
            else:
                # Strip all HTML tags
                title_text = re.sub(r'<[^>]+>', '', h1_inner).strip()
            
            # Clean up the title text
            title_text = title_text.replace('\n', ' ').strip()
            # Truncate if too long (max ~55 chars before year)
            if len(title_text) > 55:
                title_text = title_text[:52] + "..."
                
            new_title = f"<title>{title_text} (2026)</title>"
            
            # Replace the broken title tag
            new_content = re.sub(r'<title><span data.*?</title>', new_title, content, flags=re.DOTALL)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed: {filepath}".encode('utf-8', 'ignore').decode('utf-8'))
            count += 1
        else:
            print(f"Could not find H1 in {filepath}")

print(f"\nSuccessfully fixed {count} broken titles.")
