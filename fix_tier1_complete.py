import sys
import os
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

# Define the Tier 1 optimization matrix with high-CTR Titles, Descriptions, Canonical URLs, and WebApplication Schemas
tier1_optimizations = {
    "index.html": {
        "title": "SarkariSewa India 2026: 160+ सरकारी योजनाएं, राशन कार्ड, वोटर ID व फ्री टूल्स",
        "desc": "भारत सरकार और सभी राज्यों की 160+ सरकारी योजनाएं, राशन कार्ड लिस्ट, वोटर ID, पेंशन व आय/जाति प्रमाण पत्र की ऑनलाइन गाइड, पात्रता व आधिकारिक लिंक।",
        "canonical": "https://sarkarisewaindia.com/",
        "schema": {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebSite",
                    "name": "SarkariSewa India",
                    "url": "https://sarkarisewaindia.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://sarkarisewaindia.com/search.html?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                },
                {
                    "@type": "Organization",
                    "name": "SarkariSewa India",
                    "url": "https://sarkarisewaindia.com/",
                    "email": "sarkarisewaindia@gmail.com",
                    "logo": "https://sarkarisewaindia.com/assets/img/og-image.png"
                }
            ]
        }
    },
    "7th-pay-commission-calculator.html": {
        "title": "7th Pay Commission Salary Calculator 2026: In-Hand Pay & DA 50%+",
        "desc": "Calculate your exact 7th CPC In-Hand Salary with latest 50%+ Dearness Allowance (DA), HRA (X/Y/Z), TA & NPS deductions for central & state employees.",
        "canonical": "https://sarkarisewaindia.com/7th-pay-commission-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "7th Pay Commission Salary Calculator",
            "url": "https://sarkarisewaindia.com/7th-pay-commission-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "8th-pay-calculator.html": {
        "title": "8th Pay Commission Salary Calculator 2026: Expected Basic & Fitment",
        "desc": "Check expected salary increase under 8th Pay Commission with 1.92 to 3.68 fitment factors. Calculate projected Basic Pay and In-Hand Salary online.",
        "canonical": "https://sarkarisewaindia.com/8th-pay-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "8th Pay Commission Salary Projection Calculator",
            "url": "https://sarkarisewaindia.com/8th-pay-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/index.html": {
        "title": "Free Sarkari Tools & Calculators 2026: Salary, Photo Resizer & Eligibility",
        "desc": "Access 20+ free citizen utilities: 7th/8th Pay Salary Calculators, Govt Exam Photo/Signature Resizers, Scheme Eligibility Engine & EPF/Gratuity tools.",
        "canonical": "https://sarkarisewaindia.com/tools/",
        "schema": {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "SarkariSewa Online Citizen Tools & Calculators",
            "url": "https://sarkarisewaindia.com/tools/",
            "description": "Collection of free online calculators and document tools for Indian citizens."
        }
    },
    "tools/csc-locator.html": {
        "title": "CSC Center Locator 2026: Find Nearest Jan Seva Kendra in 1-Click",
        "desc": "Search 5 Lakh+ verified Common Service Centers (CSC / Digital Seva Kendra) across India by Pincode, District, or Name. Direct Google Maps navigation.",
        "canonical": "https://sarkarisewaindia.com/tools/csc-locator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CSC Locator - Find Nearest Jan Seva Kendra",
            "url": "https://sarkarisewaindia.com/tools/csc-locator.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/eligibility-checker.html": {
        "title": "Sarkari Yojana Eligibility Checker 2026: Check 100+ Schemes in 2 Min",
        "desc": "Enter your age, income, and state to instantly match with 100+ Central and State Government Schemes you qualify for. 100% free eligibility test.",
        "canonical": "https://sarkarisewaindia.com/tools/eligibility-checker.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Sarkari Scheme Eligibility Checker",
            "url": "https://sarkarisewaindia.com/tools/eligibility-checker.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/photo-resizer.html": {
        "title": "Govt Exam Photo Resizer 2026: Convert Passport Photo (20KB - 50KB)",
        "desc": "Free online photo resizer & compressor for SSC, UPSC, Railway, Banking & State PSC application forms. Exact 3.5x4.5 cm and 20KB-50KB output.",
        "canonical": "https://sarkarisewaindia.com/tools/photo-resizer.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Government Exam Passport Photo Resizer",
            "url": "https://sarkarisewaindia.com/tools/photo-resizer.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/signature-resizer.html": {
        "title": "Govt Exam Signature Resizer 2026: Compress to 10KB - 20KB Online",
        "desc": "Free online signature compressor for SSC, IBPS, UPSC and Railway forms. Crop, enhance, and resize signature image to 10KB-20KB in 2 clicks.",
        "canonical": "https://sarkarisewaindia.com/tools/signature-resizer.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Govt Exam Signature Resizer Tool",
            "url": "https://sarkarisewaindia.com/tools/signature-resizer.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/document-compressor.html": {
        "title": "PDF & Image Document Compressor for Govt Jobs (Under 100KB/200KB)",
        "desc": "Compress PDF documents, marksheets, caste certificates and Aadhaar scans under 100KB or 200KB without losing readability for online exam forms.",
        "canonical": "https://sarkarisewaindia.com/tools/document-compressor.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Govt Job Document PDF Compressor",
            "url": "https://sarkarisewaindia.com/tools/document-compressor.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/epf-calculator.html": {
        "title": "EPF Calculator 2026: Calculate PF Maturity Amount & Monthly Interest",
        "desc": "Free EPF Calculator with latest 8.25% interest rate. Calculate total Provident Fund maturity corpus, employer share, employee share and pension amount.",
        "canonical": "https://sarkarisewaindia.com/tools/epf-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "EPF Calculator - PF Maturity Estimator",
            "url": "https://sarkarisewaindia.com/tools/epf-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/income-tax-calculator.html": {
        "title": "Income Tax Calculator 2026-27: Old vs New Regime Comparison",
        "desc": "Compare Old vs New Tax Regime with latest budget slab rates, standard deduction ₹75,000, 80C, 80D, and HRA. Find out which regime saves more tax.",
        "canonical": "https://sarkarisewaindia.com/tools/income-tax-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Income Tax Calculator FY 2026-27",
            "url": "https://sarkarisewaindia.com/tools/income-tax-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/gratuity-calculator.html": {
        "title": "Gratuity Calculator 2026: Calculate Gratuity Amount on Retirement",
        "desc": "Calculate your Gratuity payout under the Payment of Gratuity Act 1972 based on completed years of service and last drawn basic salary.",
        "canonical": "https://sarkarisewaindia.com/tools/gratuity-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Gratuity Payout Calculator",
            "url": "https://sarkarisewaindia.com/tools/gratuity-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/hra-calculator.html": {
        "title": "HRA Exemption Calculator 2026: Calculate Tax Exemption u/s 10(13A)",
        "desc": "Calculate House Rent Allowance (HRA) tax exemption under Section 10(13A) for Metro and Non-Metro cities with actual rent paid and basic salary.",
        "canonical": "https://sarkarisewaindia.com/tools/hra-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "HRA Exemption Calculator",
            "url": "https://sarkarisewaindia.com/tools/hra-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/itr-penalty-calculator.html": {
        "title": "ITR Late Filing Fee & Penalty Calculator 2026: Section 234F & 234A",
        "desc": "Check late filing penalty fee (₹1,000 / ₹5,000) under Section 234F and interest under 234A/B/C for delayed Income Tax Return filing.",
        "canonical": "https://sarkarisewaindia.com/tools/itr-penalty-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "ITR Late Filing Penalty Calculator",
            "url": "https://sarkarisewaindia.com/tools/itr-penalty-calculator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/age-calculator.html": {
        "title": "Age Calculator for Govt Exams 2026: Exact Age on Cut-off Date",
        "desc": "Calculate your exact age in years, months, and days as of any exam cut-off date (e.g., 01/01/2026 or 01/08/2026) for UPSC, SSC, IBPS, and State PSC forms.",
        "canonical": "https://sarkarisewaindia.com/tools/age-calculator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Government Exam Age Calculator",
            "url": "https://sarkarisewaindia.com/tools/age-calculator.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/typing-speed-test.html": {
        "title": "Free Hindi & English Typing Speed Test for Govt Exams (WPM & Accuracy)",
        "desc": "Practice 1, 2, 5, or 10-minute Hindi (KrutiDev / Mangal) and English typing tests for SSC CHSL, CGL, High Court, and Railway typing tests with real-time WPM.",
        "canonical": "https://sarkarisewaindia.com/tools/typing-speed-test.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Government Exam Typing Speed Test",
            "url": "https://sarkarisewaindia.com/tools/typing-speed-test.html",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/document-checklist.html": {
        "title": "Govt Job Document Verification Checklist 2026 (Free PDF Generator)",
        "desc": "Generate a customized Document Verification (DV) checklist for central/state govt jobs, Aadhaar update, caste certificate, and passport applications.",
        "canonical": "https://sarkarisewaindia.com/tools/document-checklist.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Document Verification Checklist Tool",
            "url": "https://sarkarisewaindia.com/tools/document-checklist.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/self-declaration-builder.html": {
        "title": "Free Self Declaration Form Builder 2026: Format for Jobs & Schemes",
        "desc": "Generate and print customized self-declaration / affidavit format for government scheme applications, income verification, and unemployment certificates.",
        "canonical": "https://sarkarisewaindia.com/tools/self-declaration-builder.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Self Declaration Form Generator",
            "url": "https://sarkarisewaindia.com/tools/self-declaration-builder.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/pan-aadhaar-conflict-resolver.html": {
        "title": "PAN-Aadhaar Link Failed? Name & DOB Mismatch Troubleshooter 2026",
        "desc": "Step-by-step troubleshooter to fix PAN-Aadhaar link rejection due to name spelling, gender, or date of birth mismatch. Free guidance and direct links.",
        "canonical": "https://sarkarisewaindia.com/tools/pan-aadhaar-conflict-resolver.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PAN-Aadhaar Conflict Resolver",
            "url": "https://sarkarisewaindia.com/tools/pan-aadhaar-conflict-resolver.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/status-troubleshooter.html": {
        "title": "Govt Scheme Application Status Troubleshooter: Fix Rejected Applications",
        "desc": "Find out why your government scheme, pension, ration card or certificate application is stuck or rejected, and how to file an appeal or re-apply.",
        "canonical": "https://sarkarisewaindia.com/tools/status-troubleshooter.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Government Application Status Troubleshooter",
            "url": "https://sarkarisewaindia.com/tools/status-troubleshooter.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/govt-card-clarifier.html": {
        "title": "Govt Card Clarifier 2026: E-Shram vs Aadhaar vs PAN vs Ayushman Card",
        "desc": "Understand the difference between E-Shram, Ayushman Card, Labour Card, BPL Card, and ABHA Card. Know which card provides what benefits.",
        "canonical": "https://sarkarisewaindia.com/tools/govt-card-clarifier.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Govt Card Benefit Clarifier Tool",
            "url": "https://sarkarisewaindia.com/tools/govt-card-clarifier.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/deadline-calendar.html": {
        "title": "Govt Schemes & Exam Deadline Calendar 2026: Never Miss a Last Date",
        "desc": "Track upcoming application deadlines, last date to apply, scholarship cut-offs and scheme renewals for 2026 in an interactive calendar.",
        "canonical": "https://sarkarisewaindia.com/tools/deadline-calendar.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Government Scheme & Exam Deadline Calendar",
            "url": "https://sarkarisewaindia.com/tools/deadline-calendar.html",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/savings-comparator.html": {
        "title": "Post Office vs Bank Savings Schemes 2026: Compare Interest Rates",
        "desc": "Compare interest rates for Post Office Schemes (SCSS, MIS, TD, KVP, NSC, Sukanya Samriddhi) vs Bank FDs. Calculate maturity returns in seconds.",
        "canonical": "https://sarkarisewaindia.com/tools/savings-comparator.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Post Office vs Bank Savings Scheme Comparator",
            "url": "https://sarkarisewaindia.com/tools/savings-comparator.html",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    },
    "tools/medicine-price-checker.html": {
        "title": "Jan Aushadhi Medicine Price Checker 2026: Save 50% to 90% on Bills",
        "desc": "Search generic medicine prices at Pradhan Mantri Jan Aushadhi Kendra vs branded MRP. Compare prices for diabetes, BP, cardiac & daily medicines.",
        "canonical": "https://sarkarisewaindia.com/tools/medicine-price-checker.html",
        "schema": {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Jan Aushadhi Generic Medicine Price Comparator",
            "url": "https://sarkarisewaindia.com/tools/medicine-price-checker.html",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "All",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "INR"}
        }
    }
}

for filepath, opt in tier1_optimizations.items():
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    # 1. Replace or inject <title>
    title_html = f"<title>{opt['title']}</title>"
    if re.search(r'<title>.*?</title>', html, re.IGNORECASE | re.DOTALL):
        html = re.sub(r'<title>.*?</title>', title_html, html, count=1, flags=re.IGNORECASE | re.DOTALL)
    else:
        html = re.sub(r'(<head.*?>)', r'\1\n' + title_html, html, count=1, flags=re.IGNORECASE)

    # 2. Replace or inject <meta name="description">
    desc_html = f'<meta name="description" content="{opt["desc"]}"/>'
    if re.search(r'<meta\s+name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', desc_html, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', desc_html, html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<title>.*?</title>)', r'\1\n' + desc_html, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    # 3. Replace or inject <link rel="canonical">
    canonical_html = f'<link rel="canonical" href="{opt["canonical"]}"/>'
    if re.search(r'<link\s+rel=["\']canonical["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<link\s+rel=["\']canonical["\'][^>]*>', canonical_html, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<link\s+href=[^>]*rel=["\']canonical["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<link\s+href=[^>]*rel=["\']canonical["\'][^>]*>', canonical_html, html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<title>.*?</title>)', r'\1\n' + canonical_html, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    # 4. Inject Schema
    schema_json_str = json.dumps(opt['schema'], indent=2, ensure_ascii=False)
    schema_html = f'<script type="application/ld+json">\n{schema_json_str}\n</script>'
    
    # Remove existing application/ld+json in these specific tool pages to avoid duplicate/conflicting schemas (except homepage which we replace cleanly)
    html = re.sub(r'<script\s+type=["\']application/ld\+json["\']>.*?</script>', '', html, flags=re.IGNORECASE | re.DOTALL)
    
    # Inject before </head>
    html = re.sub(r'(</head>)', f'{schema_html}\n\\1', html, count=1, flags=re.IGNORECASE)

    # 5. OpenGraph Tags update
    og_title = f'<meta property="og:title" content="{opt["title"]}"/>'
    og_desc = f'<meta property="og:description" content="{opt["desc"]}"/>'
    og_url = f'<meta property="og:url" content="{opt["canonical"]}"/>'
    
    # Clean old og:title, og:description, og:url if present
    html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', og_title, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+content=[^>]*property=["\']og:title["\'][^>]*>', og_title, html, count=1, flags=re.IGNORECASE)
    
    html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', og_desc, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+content=[^>]*property=["\']og:description["\'][^>]*>', og_desc, html, count=1, flags=re.IGNORECASE)

    html = re.sub(r'<meta\s+property=["\']og:url["\'][^>]*>', og_url, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+content=[^>]*property=["\']og:url["\'][^>]*>', og_url, html, count=1, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"✅ Successfully optimized Tier 1 page: {filepath}")

print("\nAll Tier 1 pages updated cleanly with CTR Titles, Descs, Correct Canonicals & WebApp Schemas.")
