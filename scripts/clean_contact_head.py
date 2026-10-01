import os
import re

with open('contact.html', 'r', encoding='utf-8', errors='ignore') as fp:
    html = fp.read()

# Replace duplicate tags in head
head_end = html.find('</head>')
if head_end != -1:
    head_content = html[:head_end]
    rest = html[head_end:]
    
    # Keep only 1 canonical
    head_content = re.sub(r'<link rel="canonical" href="https://sarkarisewaindia.com/contact.html">\s*', '', head_content)
    head_content = re.sub(r'<meta name="description" content="Get in touch with SarkariSewa India support desk for questions, corrections, or assistance regarding government services.">\s*', '', head_content)
    
    # Ensure clean canonical and description are present
    if '<link href="https://sarkarisewaindia.com/contact.html" rel="canonical"/>' not in head_content and '<link rel="canonical"' not in head_content:
        head_content = head_content.replace('<head>', '<head>\n  <link rel="canonical" href="https://sarkarisewaindia.com/contact.html"/>\n  <meta name="description" content="Contact SarkariSewa India team for editorial feedback, report broken portal links, CSC listing queries, or scheme information assistance."/>\n')
        
    new_html = head_content + rest
    with open('contact.html', 'w', encoding='utf-8') as fp:
        fp.write(new_html)
    print("Cleaned contact.html head tags!")
