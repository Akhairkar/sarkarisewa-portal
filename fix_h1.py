import os
import glob
from bs4 import BeautifulSoup
import re

def fix_h1():
    files = glob.glob('**/*.html', recursive=True)
    fixed_h1s = 0

    for file in files:
        if 'node_modules' in file or '.gemini' in file: continue
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            
            # Check for H1
            h1_tags = soup.find_all('h1')
            changed = False
            
            if len(h1_tags) == 0:
                # Add an H1 tag right inside the body or main
                title = soup.title.string.replace(' - SarkariSewa India', '') if soup.title else 'SarkariSewa India'
                new_h1 = soup.new_tag('h1')
                new_h1.string = title
                new_h1['style'] = "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;" # visually hidden but present for SEO
                
                main = soup.find('main')
                if main:
                    main.insert(0, new_h1)
                elif soup.body:
                    soup.body.insert(0, new_h1)
                    
                fixed_h1s += 1
                changed = True
                
            elif len(h1_tags) > 1:
                # Demote extra H1s to H2
                for h1 in h1_tags[1:]:
                    h1.name = 'h2'
                    changed = True
                    
            if changed:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                    
        except Exception as e:
            pass

    print(f"Fixed H1 missing/multiple on {fixed_h1s} files.")

if __name__ == '__main__':
    fix_h1()
