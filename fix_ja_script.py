import re

with open('generate_jan_aushadhi_state_pages.py', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to replace the table generation loop
old_code = """        html += '<div style="overflow-x:auto; margin-top: 15px;">\\n<table class="service-table">'
        html += '<thead><tr>'
        html += '<th>Store Name</th>'
        html += '<th>Address</th>'
        html += '<th>Contact</th>'
        html += '</tr></thead><tbody>'
        
        for store in city["stores"]:
            html += f'<tr><td><strong>{store["name"]}</strong></td>'
            html += f'<td>{store["address"]} - {store["pin"]}</td>'
            html += f'<td>{store["phone"]}</td></tr>'"""

new_code = """        html += '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; margin-top: 15px; margin-bottom: 30px;">\\n'
        
        for store in city["stores"]:
            html += f'''
            <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <div>
                    <h4 style="margin-top: 0; margin-bottom: 8px; color: var(--color-primary); font-size: 1.15rem;">{store["name"]}</h4>
                    <p style="margin: 0 0 8px 0; font-size: 0.95rem; color: var(--color-text); line-height: 1.4;"><strong style="color: var(--color-text-muted);">Address:</strong> {store["address"]} - {store["pin"]}</p>
                </div>
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--color-border);">
                    <p style="margin: 0; font-size: 0.95rem; color: var(--color-text);"><strong style="color: var(--color-text-muted);">Contact:</strong> {store["phone"]}</p>
                </div>
            </div>
            '''"""

if old_code in content:
    content = content.replace(old_code, new_code)
    content = content.replace("html += '</tbody></table></div>\\n'", "html += '</div>\\n'")
    with open('generate_jan_aushadhi_state_pages.py', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully replaced table with grid cards.")
else:
    print("Old code not found!")
