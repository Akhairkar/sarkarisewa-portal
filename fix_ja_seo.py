with open('generate_jan_aushadhi_state_pages.py', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '<meta name="twitter:description" content="Find the exact address and contact details of Pradhan Mantri Jan Aushadhi Kendras in {name_en}. Check medicine prices and get generic medicines at up to 90 percent discount." />',
    '<meta name="twitter:description" content="Looking for Jan Aushadhi Kendra near you in {name_en}? Get the complete 2026 list of PMBJP stores, contact numbers, and save up to 90% on generic medicines." />'
)

content = content.replace(
    '<title>Jan Aushadhi Kendra in {name_en} | Find Store Near Me</title>',
    '<title>{name_en} Jan Aushadhi Kendra Near Me (2026) | 15,000+ Stores Data</title>'
)

content = content.replace(
    '<meta name="description" content="Find the exact address and contact details of Pradhan Mantri Jan Aushadhi Kendras in {name_en}. Check medicine prices and get generic medicines at up to 90 percent discount." />',
    '<meta name="description" content="Looking for Jan Aushadhi Kendra near you in {name_en}? Get the complete 2026 list of PMBJP stores, contact numbers, and save up to 90% on generic medicines." />'
)

with open('generate_jan_aushadhi_state_pages.py', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated JA state SEO")
