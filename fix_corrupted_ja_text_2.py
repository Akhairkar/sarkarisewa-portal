import re

filepath = "service/jan-aushadhi-store-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Fix Fees table
content = content.replace('<span class="icon">dY\'</span>', '<span class="icon">💰</span>')
content = re.sub(r'<td> " _ _ .*?</td>', '<td>आवेदन शुल्क</td>', content)
content = re.sub(r'<td> < \? Y.*?</td', '<td>सीएससी चार्ज</td', content)
content = re.sub(r'<td> "    .*?\(Free\)</td>', '<td>मुफ्त (Free)</td>', content)

# Fix Meta Description which is also garbled
good_desc = "Find the exact address and contact details of Pradhan Mantri Jan Aushadhi Kendras. Check medicine prices and get generic medicines at up to 90% discount."
good_title = "PM Jan Aushadhi Kendra | Find Store Near Me"
content = re.sub(r'<meta name="description" content="50%[^>]*>', f'<meta name="description" content="{good_desc}" />', content)
content = re.sub(r'<meta property="og:description" content="50%[^>]*>', f'<meta property="og:description" content="{good_desc}" />', content)
content = re.sub(r'<meta name="twitter:description" content="50%[^>]*>', f'<meta name="twitter:description" content="{good_desc}" />', content)
content = re.sub(r'<title> \?.*?</title>', f'<title>{good_title}</title>', content)
content = re.sub(r'<meta property="og:title" content=" \?.*?" />', f'<meta property="og:title" content="{good_title}" />', content)
content = re.sub(r'<meta name="twitter:title" content=" \?.*?" />', f'<meta name="twitter:title" content="{good_title}" />', content)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Cleaned up remaining garbled text in locator hub.")
