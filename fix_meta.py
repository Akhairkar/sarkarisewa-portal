import os
import glob
from bs4 import BeautifulSoup
import re

def fix_meta():
    files = glob.glob('**/*.html', recursive=True)
    fixed_blogs = 0
    fixed_titles = 0
    fixed_descs = 0

    for file in files:
        if 'node_modules' in file or '.gemini' in file: continue
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            changed = False
            
            # Fix blog titles first
            title_tag = soup.find('title')
            if title_tag and title_tag.string:
                title = title_tag.string.strip()
                
                # If generic blog title
                if 'blog' in file.lower() and ("Blog Post" in title or "SarkariSewa India" == title):
                    h1 = soup.find('h1')
                    if h1 and h1.string:
                        new_title = h1.string.strip() + " - SarkariSewa India"
                        title_tag.string = new_title
                        title = new_title
                        fixed_blogs += 1
                        changed = True
                
                # Trim long titles
                if len(title) > 60:
                    # try to keep the brand if possible
                    brand_suffix = " - SarkariSewa India"
                    brand_suffix_2 = " | SarkariSewa India"
                    
                    if title.endswith(brand_suffix):
                        core = title[:-len(brand_suffix)]
                        if len(core) > (60 - len(brand_suffix)):
                            title_tag.string = core[:56 - len(brand_suffix)] + "..." + brand_suffix
                        else:
                            title_tag.string = core + brand_suffix
                    elif title.endswith(brand_suffix_2):
                        core = title[:-len(brand_suffix_2)]
                        if len(core) > (60 - len(brand_suffix_2)):
                            title_tag.string = core[:56 - len(brand_suffix_2)] + "..." + brand_suffix_2
                        else:
                            title_tag.string = core + brand_suffix_2
                    else:
                        title_tag.string = title[:57] + "..."
                        
                    fixed_titles += 1
                    changed = True
                    
            # Check description
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc and meta_desc.get('content'):
                desc = meta_desc['content'].strip()
                if len(desc) > 160:
                    meta_desc['content'] = desc[:157] + "..."
                    fixed_descs += 1
                    changed = True
                    
            if changed:
                # write back
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(str(soup))
                    
        except Exception as e:
            pass

    print(f"Fixed Generic Blog Titles: {fixed_blogs}")
    print(f"Fixed Long Titles: {fixed_titles}")
    print(f"Fixed Long Descriptions: {fixed_descs}")

if __name__ == '__main__':
    fix_meta()
