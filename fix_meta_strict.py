import os
import glob
from bs4 import BeautifulSoup

def fix_meta_strict():
    files = glob.glob('**/*.html', recursive=True)
    fixed_titles = 0
    fixed_descs = 0

    for file in files:
        if 'node_modules' in file or '.gemini' in file: continue
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            changed = False
            
            title_tag = soup.find('title')
            if title_tag and title_tag.string:
                title = title_tag.string.strip()
                if len(title) > 55:
                    title_tag.string = title[:52] + "..."
                    fixed_titles += 1
                    changed = True
                    
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc and meta_desc.get('content'):
                desc = meta_desc['content'].strip()
                if len(desc) > 150:
                    meta_desc['content'] = desc[:147] + "..."
                    fixed_descs += 1
                    changed = True
                    
            if changed:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                    
        except Exception as e:
            pass

    print(f"Fixed Long Titles (Strict 55): {fixed_titles}")
    print(f"Fixed Long Descriptions (Strict 150): {fixed_descs}")

if __name__ == '__main__':
    fix_meta_strict()
