import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

# Sanitize q
old_q = "const q = searchInput.value.trim();"
new_q = """const rawQ = searchInput.value.trim();
      // Remove characters that break PostgREST .or() syntax (commas, parentheses, quotes)
      const q = rawQ.replace(/[,()"]/g, ' ').replace(/\s+/g, ' ').trim();"""

js = js.replace(old_q, new_q)

# Also fix the `dY"?` characters manually just in case
js = js.replace('dY"?', '🔍')
js = js.replace('dY"z', '📞')
js = js.replace('dY"\'', '🔒')
js = js.replace('o"', '✅')
js = js.replace('o" Verified', '✅ Verified')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)

print("Fixed q sanitization and emojis.")
