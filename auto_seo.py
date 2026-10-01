import re
import os
import sys

def clean_h1(text):
    text = re.sub(r'Complete Guide.*?202[0-9]', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\(2026\)', '', text)
    text = re.sub(r'—.*', '', text)
    text = re.sub(r'-.*', '', text)
    text = text.replace('\n', ' ').strip()
    return text

def process_file(filepath):
    if not os.path.exists(filepath): return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Skip if already processed with devanagari in title
    if 'राशन' in html or 'प्रमाण' in html or 'योजना' in html or 'ऑनलाइन' in html:
        pass # Actually, just process everything that doesn't look fully optimized or just process all passed in.
        
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1\s*>', html, flags=re.IGNORECASE|re.DOTALL)
    title_match = re.search(r'<title>(.*?)</title>', html, flags=re.IGNORECASE|re.DOTALL)
    
    if h1_match:
        topic = clean_h1(h1_match.group(1))
    elif title_match:
        topic = clean_h1(title_match.group(1))
    else:
        topic = os.path.basename(filepath).replace('.html', '').replace('-', ' ').title()
        
    if not topic:
        topic = "Sarkari Sewa"

    # Rules based on path or topic
    path_lower = filepath.lower()
    topic_lower = topic.lower()
    
    if 'ration-card' in path_lower or 'ration card' in topic_lower:
        new_title = f"{topic} List 2026: राशन कार्ड Apply Online"
        new_desc = f"{topic} नई लिस्ट (Smart Card) में अपना नाम कैसे चेक करें? नया राशन कार्ड ऑनलाइन अप्लाई प्रोसेस, documents, e-KYC और status।"
    elif 'income-certificate' in path_lower or 'income certificate' in topic_lower:
        new_title = f"{topic} Apply Online: आय प्रमाण पत्र"
        new_desc = f"{topic} (Income Certificate) ऑनलाइन कैसे बनवाएं? Fees, required documents, फॉर्म फॉर्मेट और application status चेक करने का तरीका।"
    elif 'birth-certificate' in path_lower or 'birth certificate' in topic_lower:
        new_title = f"{topic} Apply Online: जन्म प्रमाण पत्र PDF"
        new_desc = f"{topic} (Birth Certificate) ऑनलाइन कैसे अप्लाई करें? Registration process, late fee penalty और PDF सर्टिफिकेट डाउनलोड की जानकारी।"
    elif 'jobs' in path_lower:
        new_title = f"{topic} 2026: Notification, Syllabus & Apply"
        new_desc = f"{topic} Sarkari Naukri (सरकारी नौकरी) भर्ती 2026! Notification, exam date, syllabus, eligibility और online apply करने का पूरा प्रोसेस।"
    elif 'jan-aushadhi' in path_lower:
        new_title = f"{topic} Benefits, Uses & Side Effects (Jan Aushadhi)"
        new_desc = f"{topic} दवा (Medicine) के फायदे, उपयोग (uses), खुराक (dosage) और side effects। जन औषधि केंद्र से सस्ती कीमत पर खरीदें।"
    elif 'web-stories' in path_lower:
        new_title = f"{topic} Web Story 2026"
        new_desc = f"{topic} से जुड़ी ताज़ा खबर और अपडेट्स के लिए हमारी वेब स्टोरी देखें। शॉर्ट और सटीक जानकारी SarkariSewaIndia पर।"
    elif 'yojana' in topic_lower or 'scheme' in topic_lower:
        new_title = f"{topic} 2026: Apply Online & Form (सरकारी योजना)"
        new_desc = f"{topic} के लिए ऑनलाइन आवेदन कैसे करें? Registration process, eligibility, documents required और status चेक करने की पूरी जानकारी।"
    else:
        new_title = f"{topic} 2026: Apply Online & Status Check"
        new_desc = f"{topic} के बारे में पूरी जानकारी। Online apply process, eligibility, documents required, benefits और official website link यहाँ देखें।"
        
    # Truncate if too long
    if len(new_title) > 65:
        new_title = new_title[:62] + "..."
    if len(new_desc) > 160:
        new_desc = new_desc[:157] + "..."
        
    # Apply replacements
    html = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', html, flags=re.IGNORECASE|re.DOTALL)
    
    if re.search(r'<meta[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'(<meta[^>]*name=["\']description["\'][^>]*content=["\'])(.*?)(["\'][^>]*>)', 
                      rf'\g<1>{new_desc}\g<3>', html, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<head[^>]*>)', rf'\1\n  <meta name="description" content="{new_desc}">', html, flags=re.IGNORECASE)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
        
    return True

if __name__ == '__main__':
    with open('all_pages.txt', 'r', encoding='utf-16') as f:
        lines = f.readlines()
    
    # Process from line 160 to end
    count = 0
    for line in lines[159:]:
        path = line.strip()
        if path:
            if process_file(path):
                count += 1
            
    print(f"Automatically optimized {count} remaining pages with Devanagari templates!")
