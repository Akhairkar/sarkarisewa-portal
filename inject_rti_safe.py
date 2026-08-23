import os
import re

def update():
    with open('support/rti-guide.html', 'r', encoding='utf-8') as f:
        html = f.read()

    with open('rti_main.html', 'r', encoding='utf-8') as f:
        main_content = f.read()

    # 1. Title
    html = re.sub(r'<title>.*?</title>', '<title>RTI Online Kaise File Kare 2026? ₹10 Fee, Application Format & Status Check</title>', html, flags=re.IGNORECASE|re.DOTALL)
    
    # 2. Meta desc
    html = re.sub(r'<meta[^>]*name="description"[^>]*>', '<meta name="description" content="RTI Online kaise file kare? ₹10 fee, application format, documents, status check aur First Appeal ki पूरी जानकारी. Central aur State RTI portal links dekhein."/>', html, flags=re.IGNORECASE)
    
    # 3. OG title
    html = re.sub(r'<meta[^>]*property="og:title"[^>]*>', '<meta property="og:title" content="RTI Online Kaise File Kare 2026? ₹10 Fee, Application Format & Status Check"/>', html, flags=re.IGNORECASE)
    
    start_idx = html.find('<main class="container">')
    end_idx = html.find('</main>') + len('</main>')
    
    head_end_idx = html.find('</head>')
    
    custom_style = """
    <style>
    .rti-quick-actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 24px 0; }
    .rti-action-btn { display: flex; align-items: center; justify-content: center; text-align: center; background: var(--color-surface); border: 2px solid var(--color-brand); color: var(--color-brand); padding: 12px; border-radius: 8px; font-weight: 600; text-decoration: none; transition: 0.2s; }
    .rti-action-btn:hover { background: var(--color-brand); color: #fff; }
    .rti-action-primary { background: var(--color-brand); color: #fff; }
    .rti-action-primary:hover { opacity: 0.9; }
    .rti-helper-card { background: var(--color-surface-alt); border: 1px solid var(--color-border); padding: 24px; border-radius: 12px; margin: 32px 0; }
    .rti-helper-card h3 { margin-top: 0; color: var(--color-brand); font-size: 1.4rem; }
    .rti-form-group { margin-bottom: 16px; }
    .rti-form-group label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.95rem; }
    .rti-form-control { width: 100%; padding: 10px; border: 1px solid var(--color-border); border-radius: 6px; font-family: inherit; font-size: 1rem; }
    .rti-preview-box { background: var(--color-surface); border: 1px dashed var(--color-border); padding: 20px; white-space: pre-wrap; margin-top: 16px; font-family: monospace; font-size: 0.95rem; line-height: 1.6; border-radius: 8px; }
    .rti-faq-item { border: 1px solid var(--color-border); border-radius: 8px; margin-bottom: 12px; }
    .rti-faq-btn { width: 100%; text-align: left; background: none; border: none; padding: 16px; font-weight: 600; font-size: 1.05rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; color: var(--color-text); }
    .rti-faq-content { padding: 0 16px 16px; display: none; line-height: 1.6; color: var(--color-text-light); }
    .rti-faq-item.active .rti-faq-content { display: block; }
    .rti-faq-item.active .rti-faq-btn span { transform: rotate(180deg); }
    .rti-trust-box { border-left: 4px solid #f59e0b; background: var(--color-surface-alt); padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0; font-size: 0.95rem; }
    </style>
    """
    
    new_html = html[:head_end_idx] + custom_style + html[head_end_idx:start_idx] + main_content + html[end_idx:]
    
    with open('support/rti-guide.html', 'w', encoding='utf-8') as f:
        f.write(new_html)

if __name__ == '__main__':
    update()
