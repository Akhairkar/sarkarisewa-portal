import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

# Replace the Map button background
js = js.replace('background: var(--color-primary); color: white;', 'background: var(--color-brand); color: white;')

with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)

print("Fixed Map button visibility in dark mode.")
