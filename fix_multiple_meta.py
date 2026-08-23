import os
import glob
from bs4 import BeautifulSoup

def fix_multiple_meta():
    files = glob.glob('**/*.html', recursive=True)
    fixed_files = 0

    valid_files = [f.replace('\\', '/') for f in files if 'node_modules' not in f and '.gemini' not in f]

    for file in valid_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            changed = False
            
            meta_descs = soup.find_all('meta', attrs={'name': 'description'})
            if len(meta_descs) > 1:
                # Keep the first, remove the rest
                for meta in meta_descs[1:]:
                    meta.extract()
                fixed_files += 1
                changed = True
                
            if changed:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                    
        except Exception as e:
            pass

    print(f"Removed duplicate meta descriptions in {fixed_files} files.")

if __name__ == '__main__':
    fix_multiple_meta()
