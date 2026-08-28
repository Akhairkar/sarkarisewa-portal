import re

filepath = "service/jan-aushadhi-store-locator.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Let's find the section
start_marker = '<section class="service-section" id="state-wise-stores"'
end_marker = '</section>\n    <!-- /JAN AUSHADHI STATE HUB GRID -->'

if start_marker in content:
    print("Found section.")
    
    # We will just replace the specific mangled headers instead of rewriting the whole block to preserve the grid.
    new_h2_en = '<span>🏥 Find Jan Aushadhi Stores by State</span>'
    new_h2_hi = '<span data-lang-show="hi">🏥 राज्य के अनुसार जन औषधि केंद्र खोजें</span>'
    
    new_p_en = '<span data-lang-show="en">Select your state below to find store locations, generic medicine prices, and senior citizen benefits in your area.</span>'
    new_p_hi = '<span data-lang-show="hi">अपने क्षेत्र में स्टोर के स्थान, जेनेरिक दवाओं की कीमतें और वरिष्ठ नागरिक लाभों को जानने के लिए नीचे अपना राज्य चुनें।</span>'
    
    # We use regex to replace everything inside <h2 ...> ... </h2>
    # and <p ...> ... </p> for that specific block.
    
    content = re.sub(r'<span data-lang-show="en">dY"\? Find Jan Aushadhi Stores by State</span>', new_h2_en, content)
    content = re.sub(r'<span data-lang-show="hi">dY"\?.*?</span>', new_h2_hi, content)
    content = re.sub(r'<span data-lang-show="hi"> \.  ".*?</span>', new_p_hi, content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("Fixed corrupted text.")
else:
    print("Could not find section.")

