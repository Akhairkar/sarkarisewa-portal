import os
import json
import re

def main():
    # Load the JSON map
    with open('meta_map.json', 'r', encoding='utf-8') as f:
        meta_map = json.load(f)
        
    directory = "states"
    count = 0
    
    for filename, meta in meta_map.items():
        filepath = os.path.join(directory, filename)
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        title = meta['title']
        desc = meta['description']
        
        # Replace Title
        content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', content, flags=re.IGNORECASE|re.DOTALL)
        
        # Replace Meta Description
        content = re.sub(r'<meta[^>]*name="description"[^>]*>', f'<meta name="description" content="{desc}"/>', content, flags=re.IGNORECASE)
        content = re.sub(r'<meta[^>]*content="[^"]*"[^>]*name="description"[^>]*>', f'<meta name="description" content="{desc}"/>', content, flags=re.IGNORECASE)
        
        # Replace OG and Twitter tags
        content = re.sub(r'<meta[^>]*property="og:title"[^>]*>', f'<meta property="og:title" content="{title}"/>', content, flags=re.IGNORECASE)
        content = re.sub(r'<meta[^>]*property="og:description"[^>]*>', f'<meta property="og:description" content="{desc}"/>', content, flags=re.IGNORECASE)
        content = re.sub(r'<meta[^>]*name="twitter:title"[^>]*>', f'<meta name="twitter:title" content="{title}"/>', content, flags=re.IGNORECASE)
        content = re.sub(r'<meta[^>]*name="twitter:description"[^>]*>', f'<meta name="twitter:description" content="{desc}"/>', content, flags=re.IGNORECASE)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1
        
    print(f"Successfully applied custom meta tags to {count} pages.")

if __name__ == "__main__":
    main()
