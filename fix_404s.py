import os
import glob
from bs4 import BeautifulSoup
import urllib.parse

def fix_404s():
    files = glob.glob('**/*.html', recursive=True)
    broken_links_fixed = 0
    files_modified = 0

    # Build a set of all valid html files (relative to root)
    valid_files = set(f.replace('\\', '/') for f in files if 'node_modules' not in f and '.gemini' not in f)
    valid_files.add('') # allow empty
    valid_files.add('/')

    for file in files:
        if 'node_modules' in file or '.gemini' in file: continue
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            changed = False
            
            # calculate depth to determine path to root
            depth = file.count('/') + file.count('\\')
            path_to_root = '../' * depth if depth > 0 else './'
            states_hub = path_to_root + 'states/index.html'
            
            for a in soup.find_all('a', href=True):
                href = a['href']
                
                # Ignore external, anchor, mailto, etc.
                if href.startswith(('http', 'mailto:', 'tel:', '#', 'javascript:')):
                    continue
                
                # Strip query params and fragments for file checking
                clean_href = urllib.parse.urlparse(href).path
                if not clean_href or clean_href.endswith('/'):
                    clean_href += 'index.html'
                
                # Resolve relative path
                file_dir = os.path.dirname(file)
                # handle root
                if clean_href.startswith('/'):
                    target_path = clean_href.lstrip('/')
                else:
                    target_path = os.path.normpath(os.path.join(file_dir, clean_href)).replace('\\', '/')
                
                # Check if target exists
                if target_path not in valid_files and target_path.endswith('.html'):
                    # Broken link!
                    # If it was pointing to a states page, redirect to state hub
                    # otherwise redirect to home
                    if 'states/' in target_path:
                        a['href'] = states_hub
                    else:
                        a['href'] = path_to_root + 'index.html'
                        
                    broken_links_fixed += 1
                    changed = True
                    
            if changed:
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                files_modified += 1
                
        except Exception as e:
            print(f"Error processing {file}: {e}")

    print(f"Fixed {broken_links_fixed} broken links across {files_modified} files.")

if __name__ == '__main__':
    fix_404s()
