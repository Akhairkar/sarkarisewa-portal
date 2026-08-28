import glob
import re

files = glob.glob("states/*-sir-voter-list.html")

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        html = f.read()

    # Replace English part
    html = html.replace('Verification Pending (25 August 2026)', '25 August 2026')
    # Replace Hindi part
    html = html.replace('सत्यापन लंबित है (25 अगस्त 2026)', '25 अगस्त 2026')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
        
print("Fixed date display in all states!")
