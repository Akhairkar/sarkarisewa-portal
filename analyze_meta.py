import os
import glob
from bs4 import BeautifulSoup
import re

def analyze_meta():
    files = glob.glob('**/*.html', recursive=True)
    long_titles = 0
    long_desc = 0
    generic_blogs = 0

    for file in files:
        if 'node_modules' in file or '.gemini' in file: continue
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            soup = BeautifulSoup(content, 'html.parser')
            
            # Check title
            title_tag = soup.find('title')
            if title_tag and title_tag.string:
                title = title_tag.string.strip()
                if len(title) > 60:
                    long_titles += 1
                if "Blog Post — SarkariSewa India" in title or title == "Blog Post - SarkariSewa India":
                    generic_blogs += 1
                    
            # Check description
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc and meta_desc.get('content'):
                desc = meta_desc['content'].strip()
                if len(desc) > 160:
                    long_desc += 1
                    
        except Exception as e:
            pass

    print(f"Long Titles: {long_titles}")
    print(f"Long Descriptions: {long_desc}")
    print(f"Generic Blog Titles: {generic_blogs}")

if __name__ == '__main__':
    analyze_meta()
