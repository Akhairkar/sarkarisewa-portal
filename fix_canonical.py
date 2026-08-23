import os
import glob
from bs4 import BeautifulSoup

def fix_canonical():
    files = glob.glob('**/*.html', recursive=True)
    fixed_canonicals = 0

    valid_files = [f.replace('\\', '/') for f in files if 'node_modules' not in f and '.gemini' not in f]

    for file in valid_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            changed = False
            
            canonical = soup.find('link', rel='canonical')
            
            base_url = "https://sarkarisewaindia.com/"
            # Handle index.html nicely
            if file == "index.html":
                clean_path = ""
            elif file.endswith("/index.html"):
                clean_path = file[:-10]
            else:
                clean_path = file
                
            target_url = base_url + clean_path
            
            if not canonical:
                new_canonical = soup.new_tag('link', rel='canonical', href=target_url)
                if soup.head:
                    soup.head.append(new_canonical)
                    fixed_canonicals += 1
                    changed = True
            
            if changed:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                    
        except Exception as e:
            pass

    print(f"Added missing canonical tags to {fixed_canonicals} files.")

if __name__ == '__main__':
    fix_canonical()
