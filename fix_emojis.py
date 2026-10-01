import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

# Replace corrupted emojis
js = js.replace('dY"?', '🔍')
js = js.replace('dY"z', '📞')
js = js.replace('dY"\'', '🔒')
js = js.replace('o"', '✅')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)

print("Fixed emojis.")
