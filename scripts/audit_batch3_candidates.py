import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Audit Tools
tool_files = sorted(glob.glob('tools/*.html'))
print(f"Auditing {len(tool_files)} tools in tools/...")

thin_tools = []
for tf in tool_files:
    fname = os.path.basename(tf)
    with open(tf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    # word count approx
    words = len(re.findall(r'\b\w+\b', c))
    has_script = '<script' in c
    has_faq = '<details' in c or 'class="faq' in c
    if words < 300 or not has_script:
        thin_tools.append((fname, words, has_script, has_faq))

print(f"Thin or incomplete tools ({len(thin_tools)}): {thin_tools}")

# 2. Audit State Hub Pages
state_files = sorted(glob.glob('states/*.html'))
# Filter out state services (e.g. up-caste-certificate), keep state hubs (up.html, uttar-pradesh.html)
state_hubs = [f for f in state_files if '-' not in os.path.basename(f) or os.path.basename(f) in ['andaman-nicobar.html', 'andhra-pradesh.html', 'arunachal-pradesh.html', 'himachal-pradesh.html', 'jammu-kashmir.html', 'madhya-pradesh.html', 'tamil-nadu.html', 'uttar-pradesh.html', 'west-bengal.html', 'dadra-nagar-haveli-daman-diu.html']]
print(f"\nAuditing {len(state_hubs)} state hub pages...")

thin_states = []
for sf in state_hubs:
    fname = os.path.basename(sf)
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    words = len(re.findall(r'\b\w+\b', c))
    has_grid = 'service-card' in c or 'state-services' in c or 'grid' in c
    if words < 500 or not has_grid:
        thin_states.append((fname, words, has_grid))

print(f"Thin or incomplete state hubs ({len(thin_states)}): {thin_states}")

# 3. Audit Non-stub Service Pages
service_files = sorted(glob.glob('service/*.html'))
non_stubs = []
for sf in service_files:
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'window.location.replace' not in c and 'http-equiv="refresh"' not in c:
        non_stubs.append((sf, len(re.findall(r'\b\w+\b', c))))

print(f"\nAudited {len(non_stubs)} non-stub service pages in service/:")
below_500 = [s for s in non_stubs if s[1] < 500]
print(f" - Pages with < 500 words: {len(below_500)}")
if below_500:
    for s in below_500[:10]:
        print(f"   * {os.path.basename(s[0])}: {s[1]} words")
