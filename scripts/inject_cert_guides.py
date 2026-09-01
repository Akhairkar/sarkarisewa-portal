import os
import glob
import re

injection_html = """
      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">🏛️</span> अपीलीय पदानुक्रम (Appellate Hierarchy)</h2>
        <p>यदि आपका प्रमाणपत्र तय समय में जारी नहीं होता है या बिना वैध कारण के खारिज कर दिया जाता है, तो आप निम्नलिखित अधिकारियों को क्रमानुसार अपील कर सकते हैं:</p>
        <ul class="check-list">
          <li><strong>पहला स्तर (Level 1):</strong> तहसीलदार / नायब तहसीलदार / अंचल अधिकारी</li>
          <li><strong>दूसरा स्तर (Level 2):</strong> उप प्रभागीय अधिकारी (SDO / SDM)</li>
          <li><strong>तीसरा स्तर (Level 3):</strong> जिला मजिस्ट्रेट / उपायुक्त (District Collector / DC)</li>
        </ul>
      </section>

      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">📜</span> राज्य बनाम केंद्र (State vs Central Format)</h2>
        <p>ध्यान दें: प्रमाणपत्र दो फॉर्मेट में बनते हैं। यदि आप राज्य सरकार की नौकरी (जैसे पुलिस, पटवारी) के लिए आवेदन कर रहे हैं, तो <strong>State Format</strong> चुनें। यदि आप UPSC, SSC, या रेलवे (Central Govt) के लिए आवेदन कर रहे हैं, तो हमेशा <strong>Central Format</strong> (अक्सर अंग्रेजी में) का चयन करें।</p>
      </section>

      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">🏢</span> ऑफ़लाइन आवेदन प्रक्रिया (Offline Process)</h2>
        <p>यदि आप ऑनलाइन आवेदन करने में असमर्थ हैं, तो आप इन चरणों का पालन करके ऑफ़लाइन भी आवेदन कर सकते हैं:</p>
        <ul class="check-list">
          <li>अपने नज़दीकी <strong>CSC (Common Service Centre)</strong>, <strong>तहसील कार्यालय</strong>, या <strong>नागरिक सुविधा केंद्र</strong> पर जाएँ।</li>
          <li>संबंधित प्रमाणपत्र का फॉर्म लें और उसे भरें।</li>
          <li>सभी ज़रूरी दस्तावेज़ों की स्व-हस्ताक्षरित (Self-Attested) फोटोकॉपी संलग्न करें।</li>
          <li>निर्धारित शुल्क जमा करें और ऑपरेटर से <strong>रसीद (Acknowledgment Slip)</strong> अवश्य लें। इसमें दिए गए एप्लीकेशन नंबर से आप ऑनलाइन स्टेटस चेक कर सकते हैं।</li>
        </ul>
      </section>
"""

# Find target files
service_dir = 'service'
targets = [
    '*caste-certificate.html',
    '*income-certificate.html',
    '*domicile-certificate.html',
    '*residence-certificate.html'
]

files_to_update = []
for t in targets:
    files_to_update.extend(glob.glob(os.path.join(service_dir, t)))

count = 0
for filepath in files_to_update:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already injected
    if 'अपीलीय पदानुक्रम (Appellate Hierarchy)' in content:
        continue
        
    # Inject before the closing div of service-sections
    # Look for: </div>\n\n    <div class="ad-slot"
    # Fallback: look for <div class="ad-slot" and inject before the div before it
    
    # Let's use regex to find the end of the service-sections div
    # It usually ends right before <div class="ad-slot"
    new_content = re.sub(
        r'(    </div>\s*<div class="ad-slot")',
        injection_html + r'\1',
        content
    )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1

print(f"Successfully injected guide into {count} certificate files.")
