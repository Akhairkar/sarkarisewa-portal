import glob

state_files = glob.glob('states/*.html')
broken_links_count = 0

for fpath in state_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    if '../../tools/' in content or '../../service/' in content:
        broken_links_count += 1

print(f"Found {broken_links_count} state files with broken '../../' relative paths!")
