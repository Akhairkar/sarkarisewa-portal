import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT_PAGE_CONFIG = {
    "about.html": {
        "title": "About Us | SarkariSewa India",
        "desc": "Learn about SarkariSewa India — India's premier independent portal providing citizens with verified guides to 500+ government services and schemes.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About SarkariSewa India",
            "url": "https://sarkarisewaindia.com/about.html",
            "description": "SarkariSewa India is an independent citizen assistance portal providing free guides to Indian central and state government services."
        }
    },
    "contact.html": {
        "title": "Contact Us | SarkariSewa India",
        "desc": "Get in touch with SarkariSewa India support desk for questions, corrections, or assistance regarding government services.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SarkariSewa India",
            "url": "https://sarkarisewaindia.com/contact.html"
        }
    },
    "faq.html": {
        "title": "Frequently Asked Questions | SarkariSewa India",
        "desc": "Common questions and answers regarding SarkariSewa India portal, government scheme eligibility, CSC locator, and application tracking.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Is SarkariSewa India an official government portal?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, SarkariSewa India is an independent citizen educational guide. We are not affiliated with the government and do not charge any fees."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are the tools and calculators on SarkariSewa India free?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, 100% of the calculators, photo resizers, document compressors, and eligibility tools are completely free to use."
                    }
                }
            ]
        }
    },
    "privacy-policy.html": {
        "title": "Privacy Policy | SarkariSewa India",
        "desc": "Read our Privacy Policy to understand how SarkariSewa India protects your privacy and handles client-side data.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://sarkarisewaindia.com/privacy-policy.html"
        }
    },
    "disclaimer.html": {
        "title": "Non-Affiliation Disclaimer | SarkariSewa India",
        "desc": "Official disclaimer and terms regarding the independent informational nature of SarkariSewa India.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Disclaimer",
            "url": "https://sarkarisewaindia.com/disclaimer.html"
        }
    },
    "terms.html": {
        "title": "Terms & Conditions | SarkariSewa India",
        "desc": "Review the terms and conditions for accessing and using information, tools, and calculators on SarkariSewa India.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": "https://sarkarisewaindia.com/terms.html"
        }
    },
    "search.html": {
        "title": "Search Government Services | SarkariSewa India",
        "desc": "Instant search across 500+ Indian central and state government schemes, certificates, jobs, exam schedules, and CSC locators.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "SearchResultsPage",
            "name": "Search Services",
            "url": "https://sarkarisewaindia.com/search.html"
        }
    },
    "sitemap.html": {
        "title": "HTML Sitemap | SarkariSewa India",
        "desc": "Complete index and visual sitemap of all categories, government services, state hubs, tools, and job alerts on SarkariSewa India.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sitemap",
            "url": "https://sarkarisewaindia.com/sitemap.html"
        }
    },
    "find-services.html": {
        "title": "Find Govt Services by State & Category | SarkariSewa India",
        "desc": "Interactive directory to discover identity documents, financial schemes, scholarships, and utility services tailored to your state.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Find Govt Services",
            "url": "https://sarkarisewaindia.com/find-services.html"
        }
    },
    "claim-your-csc.html": {
        "title": "Claim / Register Your CSC Center | SarkariSewa India",
        "desc": "CSC VLE Operators can claim and verify their Jan Seva Kendra profile on SarkariSewa India to receive direct local citizen enquiries.",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Claim CSC Center",
            "url": "https://sarkarisewaindia.com/claim-your-csc.html"
        }
    }
}

for fname, cfg in ROOT_PAGE_CONFIG.items():
    if not os.path.exists(fname):
        continue
    with open(fname, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    canon_url = f"https://sarkarisewaindia.com/{fname}"
    
    # 1. Canonical tag
    if '<link rel="canonical"' not in html:
        canon_tag = f'  <link rel="canonical" href="{canon_url}">\n'
        head_idx = html.find('<head>')
        if head_idx != -1:
            html = html[:head_idx+6] + '\n' + canon_tag + html[head_idx+6:]
            
    # 2. Meta description
    if '<meta name="description"' not in html:
        desc_tag = f'  <meta name="description" content="{cfg["desc"]}">\n'
        head_idx = html.find('<head>')
        if head_idx != -1:
            html = html[:head_idx+6] + '\n' + desc_tag + html[head_idx+6:]
            
    # 3. JSON-LD Schema
    if 'application/ld+json' not in html:
        schema_json = json.dumps(cfg["schema"], ensure_ascii=False, indent=2)
        schema_script = f'  <script type="application/ld+json">\n{schema_json}\n  </script>\n'
        head_close_idx = html.find('</head>')
        if head_close_idx != -1:
            html = html[:head_close_idx] + schema_script + html[head_close_idx:]

    with open(fname, 'w', encoding='utf-8') as fp:
        fp.write(html)
        
    print(f"Enhanced SEO metadata for root page: {fname}")

print("Root pages SEO enhancement complete!")
