import glob

state_files = glob.glob('states/*.html')
fixed_files = 0

for filepath in state_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False
    if '../../tools/' in content:
        content = content.replace('../../tools/', '../tools/')
        modified = True
    if '../../service/' in content:
        content = content.replace('../../service/', '../service/')
        modified = True

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_files += 1

print(f"Fixed broken relative links in {fixed_files} state files.")
