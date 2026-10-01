import os
import re

def get_links(slug, state_name):
    return f"""
                        <h4 style="margin-top:20px; border-top:1px solid var(--color-border); padding-top:10px;"><span data-lang-show="en">Other Services in {state_name}</span><span data-lang-show="hi">{state_name} की अन्य सेवाएँ</span></h4>
                        <li><a href="{slug}-income-certificate.html">📄 {state_name} Income Certificate</a></li>
                        <li><a href="{slug}-domicile-certificate.html">🏠 {state_name} Domicile Certificate</a></li>
                        <li><a href="{slug}-caste-certificate.html">📜 {state_name} Caste Certificate</a></li>
                        <li><a href="{slug}-voter-id-card.html">🗳️ {state_name} Voter ID Card</a></li>
                        <li><a href="{slug}-ration-card.html">🍚 {state_name} Ration Card</a></li>
                        <li><a href="{slug}-driving-licence.html">🚗 {state_name} Driving Licence</a></li>
"""

def extract_state_info(filename):
    # E.g. uttar-pradesh-income-certificate.html
    services = ['-income-certificate.html', '-domicile-certificate.html', '-caste-certificate.html', '-birth-certificate.html', '-death-certificate.html', '-voter-id-card.html', '-senior-citizen-card.html', '-ration-card.html', '-driving-licence.html']
    slug = filename
    for s in services:
        if filename.endswith(s):
            slug = filename.replace(s, '')
            break
            
    # Convert slug to Title Case Name
    name = slug.replace('-', ' ').title()
    # Fix some specific names
    if name == "Andaman Nicobar": name = "Andaman & Nicobar"
    elif name == "Dadra Nagar Haveli Daman Diu": name = "Dadra & Nagar Haveli"
    elif name == "Jammu Kashmir": name = "Jammu & Kashmir"
    
    return slug, name

def main():
    directory = "states"
    count = 0
    for filename in os.listdir(directory):
        if not filename.endswith(".html"): continue
        
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check if already injected
        if "Other Services in" in content:
            continue
            
        slug, name = extract_state_info(filename)
        links_html = get_links(slug, name)
        
        # Inject before </ul>\n                </div>\n            </aside>
        # Let's use regex to find the closing </ul> inside widget-links or just the last </ul> in widget
        # The sidebar always has <ul class="widget-links"> ... </ul> or just <ul> ... </ul>
        
        # We find the sidebar section
        if '<aside class="service-sidebar">' in content:
            # Replace the first </ul> after the links
            # A safer way: Find </ul>\n                </div>\n            </aside>
            # Or just replace '</ul>\n                </div>\n            </aside>'
            # Not all templates have exact spacing.
            
            pattern = re.compile(r'(</ul>\s*</div>\s*</aside>)')
            new_content = pattern.sub(f'{links_html}\\1', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                
    print(f"Injected internal links into {count} pages.")

if __name__ == "__main__":
    main()
