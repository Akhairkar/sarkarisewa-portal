with open("states/index.html", "r", encoding="utf-8") as f:
    text = f.read()

# get the part of the text that corresponds to the seo section
import re
match = re.search(r'<section class="seo-section".*?</section>', text, re.DOTALL)
if match:
    print(match.group(0)[:500])
else:
    print("No seo-section found")
