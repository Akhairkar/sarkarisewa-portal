with open('tools/csc-locator.html', 'r', encoding='utf-8') as f:
    content = f.read()

# find Section 6
s6_start = content.find('<!-- 6. CSC OWNER CTA -->')
s6_end = content.find('<!-- 7. INFORMATIONAL SEO CONTENT -->')

s6_block = content[s6_start:s6_end]

# remove section 6 from its place
content = content[:s6_start] + content[s6_end:]

# insert it before Section 4
s4_start = content.find('<!-- 4. SEARCH RESULTS -->')
content = content[:s4_start] + s6_block + content[s4_start:]

with open('tools/csc-locator.html', 'w', encoding='utf-8') as f:
    f.write(content)
