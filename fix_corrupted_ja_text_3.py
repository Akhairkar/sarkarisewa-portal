import re

filepath = "service/jan-aushadhi-store-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

good_title = "PM Jan Aushadhi Kendra | Find Store Near Me"

content = re.sub(r'<title>.*?</title>', f'<title>{good_title}</title>', content, flags=re.DOTALL)
content = re.sub(r'<meta property="og:title" content=".*?" />', f'<meta property="og:title" content="{good_title}" />', content)
content = re.sub(r'<meta name="twitter:title" content=".*?" />', f'<meta name="twitter:title" content="{good_title}" />', content)
content = re.sub(r'"name": ".*PM Jan Aushadhi Kendra\)"', f'"name": "{good_title}"', content)
content = re.sub(r'"serviceType": ".*PM Jan Aushadhi Kendra\)"', f'"serviceType": "{good_title}"', content)
content = re.sub(r'"description": "50%.*?",', f'"description": "Find exact Jan Aushadhi Store locations and medicine prices.",', content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Cleaned up remaining garbled text in title/schema.")
