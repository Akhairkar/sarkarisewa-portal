import os

with open('service/jan-aushadhi-store-locator.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_tag = '<!-- JAN AUSHADHI STATE HUB GRID -->'
end_tag = '<!-- /JAN AUSHADHI STATE HUB GRID -->'
start_idx = content.find(start_tag)
end_idx = content.find(end_tag) + len(end_tag)

grid_block = content[start_idx:end_idx]
content = content[:start_idx] + content[end_idx:]

kendra_section = 'id="kendra-near-me"'
kendra_start = content.find(kendra_section)
kendra_end = content.find('</section>', kendra_start) + len('</section>')

new_content = content[:kendra_end] + '\n\n      ' + grid_block + content[kendra_end:]

with open('service/jan-aushadhi-store-locator.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
print('Moved!')
