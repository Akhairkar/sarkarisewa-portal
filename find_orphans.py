import os
import glob
from bs4 import BeautifulSoup
import urllib.parse

def find_orphans():
    files = glob.glob('**/*.html', recursive=True)
    all_files = set(f.replace('\\', '/') for f in files if 'node_modules' not in f and '.gemini' not in f)
    
    linked_files = set()
    linked_files.add('index.html') # Root is assumed linked

    for file in all_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            
            for a in soup.find_all('a', href=True):
                href = a['href']
                if href.startswith(('http', 'mailto:', 'tel:', '#', 'javascript:')):
                    continue
                
                clean_href = urllib.parse.urlparse(href).path
                if not clean_href or clean_href.endswith('/'):
                    clean_href += 'index.html'
                    
                file_dir = os.path.dirname(file)
                if clean_href.startswith('/'):
                    target_path = clean_href.lstrip('/')
                else:
                    target_path = os.path.normpath(os.path.join(file_dir, clean_href)).replace('\\', '/')
                
                linked_files.add(target_path)
                
        except Exception as e:
            pass

    orphans = all_files - linked_files
    print(f"Total HTML files: {len(all_files)}")
    print(f"Total linked files: {len(linked_files)}")
    print(f"Orphans found: {len(orphans)}")
    
    # Save orphans to a file so we can read them
    with open('orphans.txt', 'w', encoding='utf-8') as f:
        for o in sorted(orphans):
            f.write(o + '\n')
            
if __name__ == '__main__':
    find_orphans()
