import os
import glob

OLD_LINK = "https://whatsapp.com/channel/0029VbDjAqgEAKWFibyzWr0g"
NEW_LINK = "https://whatsapp.com/channel/0029VbDj7gCDp2Q8SYdFwj14"

def fix_whatsapp_links():
    files = glob.glob('**/*.html', recursive=True)
    fixed = 0
    for file in files:
        if 'node_modules' in file or '.gemini' in file:
            continue
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            if OLD_LINK in content:
                content = content.replace(OLD_LINK, NEW_LINK)
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed += 1
        except:
            pass
    
    # Also fix in JS files
    js_files = glob.glob('assets/js/*.js')
    for file in js_files:
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            if OLD_LINK in content:
                content = content.replace(OLD_LINK, NEW_LINK)
                with open(file, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed += 1
        except:
            pass
    
    # Fix in partials
    for partial in ['partials/header.html', 'partials/footer.html']:
        try:
            with open(partial, 'r', encoding='utf-8') as f:
                content = f.read()
            if OLD_LINK in content:
                content = content.replace(OLD_LINK, NEW_LINK)
                with open(partial, 'w', encoding='utf-8') as f:
                    f.write(content)
                fixed += 1
        except:
            pass

    print(f"Updated WhatsApp channel link in {fixed} files.")

if __name__ == '__main__':
    fix_whatsapp_links()
