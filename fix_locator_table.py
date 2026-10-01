import re

filepath = "service/jan-aushadhi-store-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# The user is complaining about the garbled text in the header and the state cards.
# First, let's fix the grid header.
if "dY" in content or "" in content:
    content = re.sub(r'<section class="service-section".*?</section>', '', content, flags=re.DOTALL)
    # The above would delete all service sections! That's dangerous.
    
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

bad_table = """<table class="fees-table"><tbody><tr><td> " _ _  + 慝؅ ݅ "   ? ?  </td><td>N/A</td></tr><tr><td> < ? Y   , ?   ,  s _ ? o</td><td> "    ? ?   (Free)</td></tr></tbody></table>"""

good_table = """<table class="fees-table">
  <tbody>
    <tr><td>Application Fee (आवेदन शुल्क)</td><td>N/A</td></tr>
    <tr><td>CSC Charges (सीएससी चार्ज)</td><td>Free (मुफ्त)</td></tr>
  </tbody>
</table>"""

content = content.replace(bad_table, good_table)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Replaced bad table.")
