import re

tag_replacements = [
    # Nav dropdown titles
    ('>Categories 📁 ▾<', ' data-i18n="nav_categories">Categories 📁 ▾<'),
    ('>Updates & Support 📢 ▾<', ' data-i18n="nav_updates_support">Updates & Support 📢 ▾<'),
    ('>Image Tools 📸 ▾<', ' data-i18n="nav_image_tools">Image Tools 📸 ▾<'),
    ('>Citizen Utilities 🛠️ ▾<', ' data-i18n="nav_citizen_utilities">Citizen Utilities 🛠️ ▾<'),
    ('>Financial Calculators 💰 ▾<', ' data-i18n="nav_financial_calcs">Financial Calculators 💰 ▾<'),
    
    # Image tools
    ('>🖼️ Govt Exam Photo Resizer<', ' data-i18n="tool_photo_resizer">🖼️ Govt Exam Photo Resizer<'),
    ('>✍️ Signature Resizer<', ' data-i18n="tool_signature_resizer">✍️ Signature Resizer<'),
    ('>📄 Document Compressor<', ' data-i18n="tool_doc_compressor">📄 Document Compressor<'),
    
    # State items
    ('>🗺️ All States Hub<', ' data-i18n="state_all_hub">🗺️ All States Hub<'),
    ('>📍 Uttar Pradesh<', ' data-i18n="state_up">📍 Uttar Pradesh<'),
    ('>📍 Maharashtra<', ' data-i18n="state_mh">📍 Maharashtra<'),
    ('>📍 Bihar<', ' data-i18n="state_br">📍 Bihar<'),
    ('>📍 Rajasthan<', ' data-i18n="state_rj">📍 Rajasthan<'),
    ('>📍 Madhya Pradesh<', ' data-i18n="state_mp">📍 Madhya Pradesh<'),
    
    # Citizen Utilities
    ('>📋 Document Checklist<', ' data-i18n="tool_doc_checklist">📋 Document Checklist<'),
    ('>📝 Self-Declaration Builder<', ' data-i18n="tool_self_declaration">📝 Self-Declaration Builder<'),
    ('>⌨️ Typing Speed Test<', ' data-i18n="tool_typing_test">⌨️ Typing Speed Test<'),
    ('>📅 Deadline Calendar<', ' data-i18n="tool_deadline_cal">📅 Deadline Calendar<'),
    ('>🔗 PAN-Aadhaar Resolver<', ' data-i18n="tool_pan_aadhaar">🔗 PAN-Aadhaar Resolver<'),
    ('>🔍 Status Troubleshooter<', ' data-i18n="tool_status_troubleshooter">🔍 Status Troubleshooter<'),
    ('>💳 Govt Card Clarifier<', ' data-i18n="tool_card_clarifier">💳 Govt Card Clarifier<'),
    ('>⏳ Age & Retirement Calculator<', ' data-i18n="tool_age_calc">⏳ Age & Retirement Calculator<'),
    ('>⏳ Age &amp; Retirement Calculator<', ' data-i18n="tool_age_calc">⏳ Age & Retirement Calculator<'),
    
    # Financial calculators
    ('>📊 Savings Scheme Comparator<', ' data-i18n="tool_savings_comp">📊 Savings Scheme Comparator<'),
    ('>💰 Gratuity Calculator<', ' data-i18n="tool_gratuity_calc">💰 Gratuity Calculator<'),
    ('>📈 EPF Calculator<', ' data-i18n="tool_epf_calc">📈 EPF Calculator<'),
    ('>⚖️ Income Tax Calculator<', ' data-i18n="tool_income_tax_calc">⚖️ Income Tax Calculator<'),
    ('>⚖️ Late Filing Penalty Calculator<', ' data-i18n="tool_itr_penalty">⚖️ Late Filing Penalty Calculator<'),
    ('>🏠 HRA Exemption Calculator<', ' data-i18n="tool_hra_calc">🏠 HRA Exemption Calculator<'),
    ('>🧮 7th Pay Calculator<', ' data-i18n="tool_7th_pay">🧮 7th Pay Calculator<'),
    ('>🚀 8th Pay Projection<', ' data-i18n="tool_8th_pay">🚀 8th Pay Projection<'),
    
    # CTA Buttons
    ('>Check Now →<', ' data-i18n="btn_check_now">Check Now →<'),
    ('>Check Now &rarr;<', ' data-i18n="btn_check_now">Check Now &rarr;<'),
    ('>Use Calculator →<', ' data-i18n="btn_use_calc">Use Calculator →<'),
    ('>Use Calculator &rarr;<', ' data-i18n="btn_use_calc">Use Calculator &rarr;<'),
    ('>Calculate Now →<', ' data-i18n="btn_calc_now">Calculate Now →<'),
    ('>Calculate Now &rarr;<', ' data-i18n="btn_calc_now">Calculate Now &rarr;<'),
    ('>Use Checklist →<', ' data-i18n="btn_use_checklist">Use Checklist →<'),
    ('>Use Checklist &rarr;<', ' data-i18n="btn_use_checklist">Use Checklist &rarr;<'),
    ('>Find Now →<', ' data-i18n="btn_find_now">Find Now →<'),
    ('>Find Now &rarr;<', ' data-i18n="btn_find_now">Find Now &rarr;<'),
    ('>Use Generator →<', ' data-i18n="btn_use_generator">Use Generator →<'),
    ('>Use Generator &rarr;<', ' data-i18n="btn_use_generator">Use Generator &rarr;<'),
    ('>All Tools ▾<', ' data-i18n="btn_all_tools">All Tools ▾<'),
    ('>Join WhatsApp Channel<', ' data-i18n="btn_whatsapp_join">Join WhatsApp Channel<')
]

target_files = ['index.html', 'partials/header.html']

for target_file in target_files:
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    for old, new in tag_replacements:
        # Only replace if not already having data-i18n
        if old in content and 'data-i18n=' not in old:
            # We want to replace <a href="..." >Text< with <a href="..." data-i18n="key">Text<
            content = content.replace(old, new)

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Safely added data-i18n tags to {target_file}")
