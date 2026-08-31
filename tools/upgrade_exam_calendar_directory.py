# -*- coding: utf-8 -*-
"""
Master Exams Directory Engine for SarkariSewaIndia.com
Upgrades / Generates:
1. exams/index.html (Master Exam Calendar Hub)
2. exams/ssc-exam-calendar-2026-2027.html
3. exams/upsc-annual-exam-calendar-2027.html
4. exams/railway-rrb-exam-schedule-2026-2027.html
5. exams/banking-ibps-sbi-calendar-2026-2027.html
6. exams/ssc-cgl-2026.html
7. exams/upsc-cse-2026.html
8. exams/rrb-ntpc-ug-2026.html
9. exams/rrb-group-d-2026.html
10. exams/ibps-po-2026.html
11. exams/ibps-clerk-2026.html
12. exams/exam.html (Universal dynamic fallback)
"""
import os, sys, json, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXAMS_DIR = os.path.join(ROOT, 'exams')

HEADER_PARTIAL = os.path.join(ROOT, 'partials', 'header.html')
FOOTER_PARTIAL = os.path.join(ROOT, 'partials', 'footer.html')

with open(HEADER_PARTIAL, 'r', encoding='utf-8') as f:
    RAW_HEADER = f.read()

with open(FOOTER_PARTIAL, 'r', encoding='utf-8') as f:
    RAW_FOOTER = f.read()

def get_baked_header(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_HEADER)

def get_baked_footer(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_FOOTER)

EXAMS_MASTER_LIST = [
    {
        "id": "ssc-cgl-2026",
        "slug": "ssc-cgl-2026",
        "sector": "SSC",
        "sector_color": "#2563eb",
        "name_hi": "SSC CGL 2026 (संयुक्त स्नातक स्तरीय परीक्षा)",
        "name_en": "SSC CGL 2026 (Combined Graduate Level)",
        "org_hi": "कर्मचारी चयन आयोग (SSC)",
        "org_en": "Staff Selection Commission",
        "vacancies": "17,727 Posts",
        "qualification_hi": "स्नातक (Graduation Degree)",
        "qualification_en": "Bachelor's Degree in Any Discipline",
        "notif_date": "24 जून 2026",
        "last_date": "24 जुलाई 2026",
        "exam_date": "08 से 26 सितंबर 2026",
        "status": "upcoming",
        "status_label_hi": "परीक्षा तिथि घोषित",
        "status_label_en": "Exam Dates Announced",
        "official_url": "https://ssc.gov.in",
        "job_url": "../jobs/ssc-cgl-recruitment-2026.html",
        "exam_page": "ssc-cgl-2026.html"
    },
    {
        "id": "ssc-chsl-2026",
        "slug": "ssc-chsl-2026",
        "sector": "SSC",
        "sector_color": "#2563eb",
        "name_hi": "SSC CHSL 2026 (10+2 संयुक्त उच्चतर माध्यमिक परीक्षा)",
        "name_en": "SSC CHSL 2026 (Combined Higher Secondary Level)",
        "org_hi": "कर्मचारी चयन आयोग (SSC)",
        "org_en": "Staff Selection Commission",
        "vacancies": "3,712 Posts",
        "qualification_hi": "12वीं पास (10+2 Intermediate)",
        "qualification_en": "12th Standard or Equivalent",
        "notif_date": "08 अप्रैल 2026",
        "last_date": "07 मई 2026",
        "exam_date": "01 से 12 जुलाई 2026",
        "status": "upcoming",
        "status_label_hi": "टियर-1 कार्यक्रम जारी",
        "status_label_en": "Tier-1 Scheduled",
        "official_url": "https://ssc.gov.in",
        "job_url": "#",
        "exam_page": "ssc-exam-calendar-2026-2027.html"
    },
    {
        "id": "ssc-mts-2026",
        "slug": "ssc-mts-2026",
        "sector": "SSC",
        "sector_color": "#2563eb",
        "name_hi": "SSC MTS व हवलदार 2026",
        "name_en": "SSC MTS & Havaldar 2026",
        "org_hi": "कर्मचारी चयन आयोग (SSC)",
        "org_en": "Staff Selection Commission",
        "vacancies": "9,583 Posts",
        "qualification_hi": "10वीं पास (Matriculation)",
        "qualification_en": "10th Class High School Pass",
        "notif_date": "27 जून 2026",
        "last_date": "31 जुलाई 2026",
        "exam_date": "20 अक्टूबर से 14 नवंबर 2026",
        "status": "upcoming",
        "status_label_hi": "CBT शेड्यूल जारी",
        "status_label_en": "CBT Scheduled",
        "official_url": "https://ssc.gov.in",
        "job_url": "../jobs/ssc-mts-havaldar-recruitment-2026.html",
        "exam_page": "ssc-exam-calendar-2026-2027.html"
    },
    {
        "id": "ssc-gd-2027",
        "slug": "ssc-gd-2027",
        "sector": "SSC",
        "sector_color": "#2563eb",
        "name_hi": "SSC GD कांस्टेबल भर्ती 2027",
        "name_en": "SSC GD Constable 2027 (CAPFs, SSF & Rifleman)",
        "org_hi": "कर्मचारी चयन आयोग (SSC)",
        "org_en": "Staff Selection Commission",
        "vacancies": "39,481 Posts",
        "qualification_hi": "10वीं पास (10th Pass)",
        "qualification_en": "10th Pass from recognized Board",
        "notif_date": "27 अगस्त 2026",
        "last_date": "05 अक्टूबर 2026",
        "exam_date": "05 जनवरी से 25 फरवरी 2027",
        "status": "upcoming",
        "status_label_hi": "वार्षिक कैलेंडर घोषित",
        "status_label_en": "Calendar Released",
        "official_url": "https://ssc.gov.in",
        "job_url": "#",
        "exam_page": "ssc-exam-calendar-2026-2027.html"
    },
    {
        "id": "upsc-cse-2026",
        "slug": "upsc-cse-2026",
        "sector": "UPSC",
        "sector_color": "#7c3aed",
        "name_hi": "UPSC सिविल सेवा (IAS/IFS) परीक्षा 2026",
        "name_en": "UPSC Civil Services Examination (CSE) 2026",
        "org_hi": "संघ लोक सेवा आयोग (UPSC)",
        "org_en": "Union Public Service Commission",
        "vacancies": "1,056 Posts",
        "qualification_hi": "स्नातक डिग्री (Any Graduate)",
        "qualification_en": "Bachelor's Degree in Any Discipline",
        "notif_date": "14 फरवरी 2026",
        "last_date": "05 मार्च 2026",
        "exam_date": "24 मई 2026 (Prelims) | 18 सितंबर 2026 (Mains)",
        "status": "upcoming",
        "status_label_hi": "मेन्स परीक्षा तिथि घोषित",
        "status_label_en": "Mains Scheduled",
        "official_url": "https://upsc.gov.in",
        "job_url": "../jobs/upsc-civil-services-ias-ifs-2027.html",
        "exam_page": "upsc-cse-2026.html"
    },
    {
        "id": "upsc-cse-2027",
        "slug": "upsc-cse-2027",
        "sector": "UPSC",
        "sector_color": "#7c3aed",
        "name_hi": "UPSC सिविल सेवा (IAS/IFS) परीक्षा 2027",
        "name_en": "UPSC Civil Services Examination (CSE) 2027",
        "org_hi": "संघ लोक सेवा आयोग (UPSC)",
        "org_en": "Union Public Service Commission",
        "vacancies": "1,100+ (अपेक्षित)",
        "qualification_hi": "स्नातक डिग्री (Any Graduate)",
        "qualification_en": "Bachelor's Degree in Any Discipline",
        "notif_date": "10 फरवरी 2027",
        "last_date": "02 मार्च 2027",
        "exam_date": "23 मई 2027 (Prelims)",
        "status": "upcoming",
        "status_label_hi": "आधिकारिक वार्षिक कैलेंडर",
        "status_label_en": "Annual Schedule 2027",
        "official_url": "https://upsc.gov.in",
        "job_url": "../jobs/upsc-civil-services-ias-ifs-2027.html",
        "exam_page": "upsc-annual-exam-calendar-2027.html"
    },
    {
        "id": "rrb-ntpc-ug-2026",
        "slug": "rrb-ntpc-ug-2026",
        "sector": "Railway",
        "sector_color": "#059669",
        "name_hi": "RRB NTPC (अंडरग्रेजुएट 12वीं स्तर) 2026",
        "name_en": "RRB NTPC Undergraduate (12th Level) 2026",
        "org_hi": "रेलवे भर्ती बोर्ड (RRB)",
        "org_en": "Railway Recruitment Boards",
        "vacancies": "3,445 Posts",
        "qualification_hi": "12वीं पास (50% अंक)",
        "qualification_en": "12th Standard Pass (50% Aggregate)",
        "notif_date": "21 सितंबर 2026",
        "last_date": "20 अक्टूबर 2026",
        "exam_date": "12 से 24 जनवरी 2027",
        "status": "upcoming",
        "status_label_hi": "CBT-1 शेड्यूल जारी",
        "status_label_en": "CBT-1 Scheduled",
        "official_url": "https://rrbapply.gov.in",
        "job_url": "../jobs/rrb-ntpc-recruitment-2026.html",
        "exam_page": "rrb-ntpc-ug-2026.html"
    },
    {
        "id": "rrb-ntpc-grad-2026",
        "slug": "rrb-ntpc-grad-2026",
        "sector": "Railway",
        "sector_color": "#059669",
        "name_hi": "RRB NTPC (ग्रेजुएट स्तर - CEN 05/2026)",
        "name_en": "RRB NTPC Graduate Level (Station Master, Goods Train Manager)",
        "org_hi": "रेलवे भर्ती बोर्ड (RRB)",
        "org_en": "Railway Recruitment Boards",
        "vacancies": "8,113 Posts",
        "qualification_hi": "स्नातक डिग्री (Bachelor's Degree)",
        "qualification_en": "Bachelor's Degree in Any Stream",
        "notif_date": "14 सितंबर 2026",
        "last_date": "13 अक्टूबर 2026",
        "exam_date": "18 से 29 दिसंबर 2026",
        "status": "upcoming",
        "status_label_hi": "CBT-1 शेड्यूल जारी",
        "status_label_en": "CBT-1 Scheduled",
        "official_url": "https://rrbapply.gov.in",
        "job_url": "../jobs/rrb-ntpc-recruitment-2026.html",
        "exam_page": "railway-rrb-exam-schedule-2026-2027.html"
    },
    {
        "id": "rrb-group-d-2026",
        "slug": "rrb-group-d-2026",
        "sector": "Railway",
        "sector_color": "#059669",
        "name_hi": "RRB ग्रुप डी (Level-1 Trackman, Pointsman)",
        "name_en": "RRB Group D (Level-1 7th CPC)",
        "org_hi": "रेलवे भर्ती बोर्ड (RRB)",
        "org_en": "Railway Recruitment Boards",
        "vacancies": "32,000+ Posts (अपेक्षित)",
        "qualification_hi": "10वीं पास + ITI / NCVT",
        "qualification_en": "10th Pass + ITI or NAC from NCVT",
        "notif_date": "15 अक्टूबर 2026",
        "last_date": "15 नवंबर 2026",
        "exam_date": "15 फरवरी से 28 मार्च 2027",
        "status": "upcoming",
        "status_label_hi": "वार्षिक भर्ती चक्र",
        "status_label_en": "Annual Cycle",
        "official_url": "https://rrbapply.gov.in",
        "job_url": "#",
        "exam_page": "rrb-group-d-2026.html"
    },
    {
        "id": "rrb-alp-2026",
        "slug": "rrb-alp-2026",
        "sector": "Railway",
        "sector_color": "#059669",
        "name_hi": "RRB असिस्टेंट लोको पायलट (ALP CEN 01/2026)",
        "name_en": "RRB Assistant Loco Pilot (ALP CEN 01/2026)",
        "org_hi": "रेलवे भर्ती बोर्ड (RRB)",
        "org_en": "Railway Recruitment Boards",
        "vacancies": "18,799 Posts",
        "qualification_hi": "10वीं + ITI / Diploma Mech/Elec",
        "qualification_en": "Matric + ITI / 3-Yr Diploma Engineering",
        "notif_date": "20 जनवरी 2026",
        "last_date": "19 फरवरी 2026",
        "exam_date": "25 से 29 नवंबर 2026",
        "status": "upcoming",
        "status_label_hi": "CBT-1 शेड्यूल जारी",
        "status_label_en": "CBT-1 Scheduled",
        "official_url": "https://rrbapply.gov.in",
        "job_url": "#",
        "exam_page": "railway-rrb-exam-schedule-2026-2027.html"
    },
    {
        "id": "ibps-po-2026",
        "slug": "ibps-po-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "name_hi": "IBPS PO / MT XVI (प्रोबेशनरी ऑफिसर)",
        "name_en": "IBPS PO / MT XVI (Probationary Officer)",
        "org_hi": "आईबीपीएस (IBPS)",
        "org_en": "Institute of Banking Personnel Selection",
        "vacancies": "4,455 Posts",
        "qualification_hi": "स्नातक डिग्री (Any Graduate)",
        "qualification_en": "Bachelor's Degree in Any Discipline",
        "notif_date": "01 अगस्त 2026",
        "last_date": "21 अगस्त 2026",
        "exam_date": "19 व 20 अक्टूबर 2026 (Prelims) | 30 नवंबर 2026 (Mains)",
        "status": "upcoming",
        "status_label_hi": "प्रीलिम्स व मेन्स तिथियां",
        "status_label_en": "Prelims & Mains Dates",
        "official_url": "https://ibps.in",
        "job_url": "../jobs/ibps-po-mt-recruitment-2026.html",
        "exam_page": "ibps-po-2026.html"
    },
    {
        "id": "ibps-clerk-2026",
        "slug": "ibps-clerk-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "name_hi": "IBPS क्लर्क / CSA XVI भर्ती 2026",
        "name_en": "IBPS Clerk / Customer Service Associate XVI",
        "org_hi": "आईबीपीएस (IBPS)",
        "org_en": "Institute of Banking Personnel Selection",
        "vacancies": "6,128 Posts",
        "qualification_hi": "स्नातक डिग्री (Any Graduate)",
        "qualification_en": "Bachelor's Degree in Any Discipline",
        "notif_date": "01 जुलाई 2026",
        "last_date": "21 जुलाई 2026",
        "exam_date": "24, 25 व 31 अगस्त 2026 (Prelims) | 13 अक्टूबर 2026 (Mains)",
        "status": "upcoming",
        "status_label_hi": "प्रीलिम्स व मेन्स तिथियां",
        "status_label_en": "Prelims & Mains Dates",
        "official_url": "https://ibps.in",
        "job_url": "../jobs/ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html",
        "exam_page": "ibps-clerk-2026.html"
    },
    {
        "id": "sbi-po-2026",
        "slug": "sbi-po-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "name_hi": "SBI PO भर्ती 2026-2027",
        "name_en": "SBI Probationary Officer (PO) 2026-2027",
        "org_hi": "भारतीय स्टेट बैंक (SBI)",
        "org_en": "State Bank of India",
        "vacancies": "2,000+ Posts",
        "qualification_hi": "स्नातक डिग्री (Any Graduate)",
        "qualification_en": "Graduation in any discipline",
        "notif_date": "07 सितंबर 2026",
        "last_date": "27 सितंबर 2026",
        "exam_date": "01, 02 व 03 नवंबर 2026 (Prelims) | 18 जनवरी 2027 (Mains)",
        "status": "upcoming",
        "status_label_hi": "प्रीलिम्स कार्यक्रम जारी",
        "status_label_en": "Prelims Scheduled",
        "official_url": "https://sbi.co.in",
        "job_url": "../jobs/sbi-po-recruitment-2026-2027.html",
        "exam_page": "banking-ibps-sbi-calendar-2026-2027.html"
    },
    {
        "id": "sbi-clerk-2026",
        "slug": "sbi-clerk-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "name_hi": "SBI क्लर्क (Junior Associate) 2026",
        "name_en": "SBI Clerk (Junior Associate) 2026",
        "org_hi": "भारतीय स्टेट बैंक (SBI)",
        "org_en": "State Bank of India",
        "vacancies": "8,283 Posts",
        "qualification_hi": "स्नातक डिग्री (Any Graduate)",
        "qualification_en": "Graduation in any discipline",
        "notif_date": "17 नवंबर 2026",
        "last_date": "07 दिसंबर 2026",
        "exam_date": "10, 11, 12 व 13 जनवरी 2027 (Prelims) | 28 फरवरी 2027 (Mains)",
        "status": "upcoming",
        "status_label_hi": "मेगा परीक्षा चक्र",
        "status_label_en": "Mega Exam Cycle",
        "official_url": "https://sbi.co.in",
        "job_url": "../jobs/sbi-clerk-junior-associate-recruitment-2026.html",
        "exam_page": "banking-ibps-sbi-calendar-2026-2027.html"
    },
    {
        "id": "rbi-grade-b-2026",
        "slug": "rbi-grade-b-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "name_hi": "RBI ग्रेड 'B' ऑफिसर 2026",
        "name_en": "RBI Grade 'B' Officer 2026",
        "org_hi": "भारतीय रिज़र्व बैंक (RBI)",
        "org_en": "Reserve Bank of India",
        "vacancies": "94 Posts",
        "qualification_hi": "स्नातक (60% अंक) / PG (55%)",
        "qualification_en": "Graduation (60% Marks) or PG (55%)",
        "notif_date": "25 जुलाई 2026",
        "last_date": "16 अगस्त 2026",
        "exam_date": "08 सितंबर 2026 (Phase 1) | 19 अक्टूबर 2026 (Phase 2)",
        "status": "upcoming",
        "status_label_hi": "फेज-1 व फेज-2 तिथियां",
        "status_label_en": "Phase-1 & 2 Dates",
        "official_url": "https://rbi.org.in",
        "job_url": "../jobs/rbi-grade-b-officer-recruitment-2026.html",
        "exam_page": "banking-ibps-sbi-calendar-2026-2027.html"
    }
]

EXAM_PROBLEMS = [
    ("1. एसएससी व यूपीएससी OTR में लाइव वेबकैम फोटो व हस्ताक्षर रिजेक्शन से कैसे बचें?", "एसएससी OTR 2.0 और यूपीएससी पोर्टल पर फोटो अपलोड के समय बैकग्राउंड में सादी सफेद दीवार रखें, चश्मा व टोपी हटाकर सीधे कैमरे में देखें। हमारे मुफ्त 'Govt Exam Photo Resizer' (20-50 KB) और 'Signature Resizer' (10-20 KB) टूल्स का उपयोग करें ताकि फाइल साइज और DPI त्रुटि के कारण फॉर्म निरस्त न हो।"),
    ("2. परीक्षा केंद्र (Exam Center) आवंटन और 'First-Apply-First-Allot' नियम क्या है?", "यूपीएससी, आईबीपीएस और एसएससी की अधिकांश परीक्षाओं में पसंदीदा शहर के परीक्षा केंद्रों की क्षमता सीमित होती है। DoPT दिशा-निर्देशों के अनुसार जो उम्मीदवार आवेदन विंडो खुलने के शुरुआती दिनों में फॉर्म जमा करते हैं, उन्हें प्रथम प्राथमिकता वाला शहर आवंटित होता है। देर करने पर पड़ोसी राज्य का सेंटर मिल सकता है।"),
    ("3. आरक्षित श्रेणियों (OBC-NCL / EWS) हेतु क्रूशियल कट-ऑफ डेट (Crucial Date) की अनिवार्यता", "सरकारी भर्ती नियमों के अनुसार ओबीसी नॉन-क्रीमी लेयर (OBC-NCL) और आर्थिक रूप से कमजोर वर्ग (EWS) प्रमाण पत्र भर्ती अधिसूचना की अंतिम तिथि (Crucial Cut-off Date) या उससे पूर्व के वैध वित्तीय वर्ष में जारी होना अनिवार्य है। डीवी के समय बाद का सर्टिफिकेट प्रस्तुत करने पर उम्मीदवारी सामान्य वर्ग में बदल दी जाती है।"),
    ("4. सरकारी भर्ती टाइपिंग परीक्षा (DEST) में 35 WPM व 27 WPM की तैयारी तकनीक", "एसएससी सीजीएल/सीएचएसएल और रेलवे एनटीपीसी में टाइपिंग टेस्ट (DEST) क्वालीफाइंग होता है। हमारे 'Typing Speed Test' टूल पर प्रतिदिन मंगल इनस्क्रिप्ट और रेमिंगटन गेल फॉन्ट में 15 मिनट अभ्यास करें। शुरुआती 2 मिनट में 100% सटीकता बनाए रखें, लय बनते ही स्पीड 35+ WPM तक स्वतः पहुंच जाती है।"),
    ("5. मल्टी-शिफ्ट कंप्यूटर आधारित परीक्षा (CBT) में नॉर्मलाइजेशन और पर्सेंटाइल का गणित", "विभिन्न पालियों में प्रश्नपत्र की कठिनाई के स्तर (Difficulty Level) को संतुलित करने के लिए 'Equi-percentile Method' या DoPT स्टैंडर्ड नॉर्मलाइजेशन फॉर्मूला लागू किया जाता है। यदि आपकी शिफ्ट कठिन थी, तो कम रॉ मार्क्स होने पर भी नॉर्मलाइज्ड स्कोर 10 से 15 अंक तक बढ़ सकता है।"),
    ("6. एडमिट कार्ड डाउनलोड में सर्वर एरर या रजिस्ट्रेशन नंबर भूलने पर क्या करें?", "परीक्षा से 4 से 7 दिन पूर्व एडमिट कार्ड जारी होते हैं। यदि रजिस्ट्रेशन नंबर खो गया है, तो संबंधित भर्ती बोर्ड के 'Know Your Registration ID' लिंक पर जाएं, 10वीं का रोल नंबर, जन्म तिथि व पंजीकृत मोबाइल नंबर दर्ज कर तुरंत ओटीपी द्वारा आईडी पुनः प्राप्त करें।")
]

EXAM_FAQS = [
    ("सरकारी परीक्षा कैलेंडर (Exam Calendar) देखने के क्या लाभ हैं?", "परीक्षा कैलेंडर से अभ्यर्थियों को साल भर में होने वाली भर्तियों की अधिसूचना तिथि, आवेदन विंडो और सीबीटी परीक्षा तारीखों का पूर्व अनुमान मिल जाता है, जिससे समयबद्ध 6 से 12 महीने का स्टडी टाइमटेबल बनाना आसान होता है।"),
    ("क्या यूपीएससी और एसएससी का परीक्षा कैलेंडर तय समय पर आयोजित होता है?", "हाँ, यूपीएससी और एसएससी अपने वार्षिक कैलेंडर का 95% से अधिक समयबद्ध पालन करते हैं। केवल अपरिहार्य परिस्थितियों या राष्ट्रीय चुनावों के समय ही तिथियों में संशोधन होता है।"),
    ("रेलवे भर्ती बोर्ड (RRB) का वार्षिक भर्ती चक्र (Annual Recruitment Cycle) क्या है?", "रेलवे मंत्रालय ने जनवरी 2024 से वार्षिक भर्ती चक्र लागू किया है: जनवरी-मार्च (ALP), अप्रैल-जून (Technician), जुलाई-सितंबर (NTPC & JE), और अक्टूबर-दिसंबर (Level-1 Group D & Paramedical)।"),
    ("आईबीपीएस (IBPS) बैंकिंग परीक्षाओं का कैलेंडर कब जारी होता है?", "आईबीपीएस प्रत्येक वर्ष जनवरी के मध्य में पूरे वर्ष का कैलेंडर जारी कर देता है, जिसमें आरआरबी और सार्वजनिक क्षेत्र के बैंकों के क्लर्क व पीओ की प्रीलिम्स और मेन्स तिथियां घोषित होती हैं।"),
    ("क्या ग्रेजुएशन के अंतिम वर्ष (Final Year) के छात्र इन परीक्षाओं में बैठ सकते हैं?", "हाँ, यूपीएससी, एसएससी सीजीएल और आईबीपीएस में अंतिम वर्ष के छात्र आवेदन कर सकते हैं बशर्ते वे अधिसूचना में उल्लिखित क्रूशियल कट-ऑफ तिथि तक अपनी अंतिम मार्कशीट/डिग्री प्राप्त कर लें।"),
    ("सरकारी परीक्षा फॉर्म भरने के लिए कौन-कौन से टूल्स हमारे पोर्टल पर मुफ्त हैं?", "Govt Exam Photo Resizer (20-50 KB), Signature Resizer (10-20 KB), Document Compressor (100-500 KB), Typing Speed Test, Age & Retirement Calculator और Scheme Eligibility Engine पूरी तरह मुफ्त उपलब्ध हैं।"),
    ("मल्टी-शिफ्ट परीक्षाओं में नॉर्मलाइजेशन फॉर्मूला कैसे काम करता है?", "मल्टी-शिफ्ट सीबीटी परीक्षाओं में सभी पालियों के औसत अंक और मानक विचलन (Standard Deviation) के आधार पर पर्सेंटाइल स्कोर तैयार किया जाता है ताकि किसी भी शिफ्ट के परीक्षार्थी के साथ अन्याय न हो।"),
    ("टाइपिंग टेस्ट में स्वीकार्य गलती प्रतिशत (Error Percentage) कितना होता है?", "सामान्य वर्ग के उम्मीदवारों हेतु अधिकतम 5% से 7% और आरक्षित श्रेणियों (SC/ST/OBC/PwD) हेतु 7% से 10% तक की गलतियां क्षम्य होती हैं।"),
    ("ईडब्ल्यूएस (EWS) प्रमाण पत्र की वैधता कितने समय तक रहती है?", "ईडब्ल्यूएस प्रमाण पत्र जारी होने के वित्तीय वर्ष (Financial Year - 1 अप्रैल से 31 मार्च) तक एक वर्ष के लिए मान्य होता है। प्रत्येक नए वित्तीय वर्ष में नया आय प्रमाण पत्र बनवाना होता है।"),
    ("परीक्षा तिथियों, एडमिट कार्ड और आंसर-की के तुरंत लाइव अलर्ट कैसे पाएं?", "हमारे आधिकारिक SarkariSewa VIP Telegram चैनल से जुड़ें जहां 1,00,000+ परीक्षार्थियों को प्रत्येक आधिकारिक नोटिस का पीडीएफ और डायरेक्ट लिंक रियल-टाइम में भेजा जाता है।")
]

def generate_exam_hub_html():
    canonical_url = "https://sarkarisewaindia.com/exams/index.html"
    
    # Table rows
    table_rows = []
    cards_html = []
    for ex in EXAMS_MASTER_LIST:
        table_rows.append(f"""
        <tr style="border-bottom: 1px solid var(--color-border);">
          <td style="padding: 12px 14px; font-weight: 700; color: var(--color-primary);">
            <a href="{ex['exam_page']}" style="color: var(--color-primary); text-decoration: none;">{ex['name_hi']}</a>
            <div style="font-size: 0.82rem; color: var(--color-text-muted); font-weight: normal;">{ex['org_hi']}</div>
          </td>
          <td style="padding: 12px 14px; text-align: center;"><span style="background: {ex['sector_color']}; color: #fff; padding: 2px 8px; border-radius: 10px; font-size: 0.78rem; font-weight: 700;">{ex['sector']}</span></td>
          <td style="padding: 12px 14px; font-size: 0.88rem; color: var(--color-text);">{ex['qualification_hi']}</td>
          <td style="padding: 12px 14px; font-size: 0.88rem; color: var(--color-text);">{ex['last_date']}</td>
          <td style="padding: 12px 14px; font-weight: 700; color: #059669; font-size: 0.9rem;">{ex['exam_date']}</td>
          <td style="padding: 12px 14px; text-align: center;">
            <a href="{ex['job_url'] if ex['job_url'] != '#' else ex['exam_page']}" style="background: #2563eb; color: #ffffff; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 0.82rem; font-weight: 700; display: inline-block;">विवरण देखें ↗</a>
          </td>
        </tr>
        """)
        
        cards_html.append(f"""
        <div class="exam-hub-card" data-sector="{ex['sector']}" data-title="{ex['name_hi']} {ex['name_en']} {ex['org_hi']} {ex['org_en']}" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.04); display: flex; flex-direction: column; justify-content: space-between; gap: 12px;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="background: {ex['sector_color']}; color: #ffffff; padding: 3px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 700;">{ex['sector']}</span>
              <span style="background: rgba(5,150,105,0.12); color: #059669; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 800;">{ex['status_label_hi']}</span>
            </div>
            <h3 style="margin: 0 0 6px 0; font-size: 1.1rem; line-height: 1.4;">
              <a href="{ex['exam_page']}" style="color: var(--color-text); text-decoration: none; font-weight: 700;">{ex['name_hi']}</a>
            </h3>
            <p style="margin: 0; color: var(--color-text-muted); font-size: 0.88rem;">{ex['org_hi']} ({ex['org_en']})</p>
            <div style="margin-top: 10px; font-size: 0.85rem; color: var(--color-text); display: flex; flex-direction: column; gap: 4px;">
              <div><strong>🎓 योग्यता:</strong> {ex['qualification_hi']}</div>
              <div><strong>📅 परीक्षा तिथि:</strong> <span style="color: #059669; font-weight: 700;">{ex['exam_date']}</span></div>
            </div>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            <a href="{ex['exam_page']}" style="flex: 1; text-align: center; background: rgba(37,99,235,0.1); color: #2563eb; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 700;">परीक्षा कार्यक्रम 📅</a>
            <a href="{ex['job_url'] if ex['job_url'] != '#' else ex['official_url']}" target="{'_blank' if ex['job_url'] == '#' else '_self'}" style="flex: 1; text-align: center; background: #059669; color: #ffffff; padding: 8px 12px; border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 700;">{ 'भर्ती विवरण 📋' if ex['job_url'] != '#' else 'ऑफिशियल पोर्टल ↗' }</a>
          </div>
        </div>
        """)

    # Problems HTML
    colors = ["#2563eb", "#059669", "#d97706", "#7c3aed", "#dc2626", "#db2777"]
    prob_html = []
    for idx, (p_title, p_desc) in enumerate(EXAM_PROBLEMS):
        c = colors[idx % len(colors)]
        prob_html.append(f"""
        <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid {c}; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">{p_title}</h3>
          <p style="color: var(--color-text); font-size: 0.95rem; line-height: 1.7; margin: 0;">{p_desc}</p>
        </div>
        """)

    # FAQs HTML & Schema
    faq_items = []
    schema_faqs = []
    for idx, (q, a) in enumerate(EXAM_FAQS, 1):
        schema_faqs.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a
            }
        })
        open_attr = "open" if idx == 1 else ""
        faq_items.append(f"""
        <details class="faq-item" {open_attr} style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
            <span>{idx}. {q}</span>
            <span style="font-size: 1.2rem;">▾</span>
          </summary>
          <div style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">
            {a}
          </div>
        </details>
        """)

    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "name": "सरकारी परीक्षा कैलेंडर 2026-2027: SSC, UPSC, Railway व Banking परीक्षा तिथियां",
                "description": "भारत की सभी राष्ट्रीय एवं राज्य स्तरीय सरकारी भर्ती परीक्षाओं का प्रामाणिक परीक्षा कैलेंडर 2026-2027: SSC, UPSC, RRB, Banking, Defence व State PSCs।",
                "url": canonical_url
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html"},
                    {"@type": "ListItem", "position": 2, "name": "Exam Calendar", "item": canonical_url}
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": schema_faqs
            }
        ]
    }, ensure_ascii=False, indent=2)

    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>सरकारी परीक्षा कैलेंडर 2026-2027: SSC, UPSC, Railway व Banking परीक्षा तिथियां | SarkariSewa India</title>
  <meta name="description" content="भारत की सभी सरकारी भर्ती परीक्षाओं का वार्षिक परीक्षा कैलेंडर 2026-2027: SSC CGL/CHSL/MTS, UPSC CSE, RRB NTPC/Group D, IBPS, SBI PO व डिफेंस परीक्षा तिथियां।">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:title" content="सरकारी परीक्षा कैलेंडर 2026-2027: SSC, UPSC, Railway व Banking परीक्षा तिथियां">
  <meta property="og:description" content="भारत की सभी सरकारी भर्ती परीक्षाओं का वार्षिक परीक्षा कैलेंडर 2026-2027: SSC CGL/CHSL/MTS, UPSC CSE, RRB NTPC/Group D, IBPS, SBI PO व डिफेंस परीक्षा तिथियां।">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module9.css">
  <link rel="stylesheet" href="../assets/css/module16.css">
  <link rel="stylesheet" href="../assets/css/module18.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">

  <style>
    /* Clean Bilingual Language Isolation */
    html[lang="hi"] [data-lang-show="en"] {{ display: none !important; }}
    html[lang="en"] [data-lang-show="hi"] {{ display: none !important; }}
    html[lang="hi"] span[data-lang-show="hi"] {{ display: inline !important; }}
    html[lang="en"] span[data-lang-show="en"] {{ display: inline !important; }}
    html[lang="hi"] div[data-lang-show="hi"], html[lang="hi"] p[data-lang-show="hi"], html[lang="hi"] h1[data-lang-show="hi"], html[lang="hi"] h2[data-lang-show="hi"], html[lang="hi"] h3[data-lang-show="hi"] {{ display: block !important; }}
    html[lang="en"] div[data-lang-show="en"], html[lang="en"] p[data-lang-show="en"], html[lang="en"] h1[data-lang-show="en"], html[lang="en"] h2[data-lang-show="en"], html[lang="en"] h3[data-lang-show="en"] {{ display: block !important; }}

    .exam-hub-hero {{
      background: linear-gradient(135deg, #10243E 0%, #1a365d 100%);
      color: #ffffff;
      padding: 42px 24px;
      border-radius: 16px;
      margin-bottom: 36px;
      box-shadow: 0 10px 30px rgba(16, 36, 62, 0.15);
      text-align: center;
    }}
    .exam-hub-hero h1 {{ font-size: 2.2rem; margin: 0 0 12px 0; color: #ffffff; }}
    .exam-hub-hero p {{ font-size: 1.1rem; margin: 0 auto 24px auto; color: #cbd5e1; max-width: 800px; line-height: 1.6; }}

    .hub-filter-tabs {{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      margin: 20px 0;
    }}
    .hub-tab-btn {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      color: var(--color-text);
      padding: 8px 18px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }}
    .hub-tab-btn.active, .hub-tab-btn:hover {{
      background: var(--color-primary);
      color: #ffffff;
      border-color: var(--color-primary);
    }}
    .exam-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
      margin: 24px 0;
    }}

    /* Dark Mode Contrast Safety */
    [data-theme="dark"] .prob-box,
    [data-theme="dark"] .faq-item,
    [data-theme="dark"] .exam-hub-card {{
      background: #101D2C !important;
      border-color: #223244 !important;
      color: #E8EDF3 !important;
    }}
    [data-theme="dark"] .prob-box h3,
    [data-theme="dark"] .faq-item summary,
    [data-theme="dark"] .exam-hub-card h3 a {{
      color: #93C5FD !important;
    }}
  </style>

  <script type="application/ld+json">
{schema_json}
  </script>
</head>
<body class="v2-template">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header">
{get_baked_header("../")}
  </div>

  <main class="container" style="max-width: 1100px; margin: 32px auto; padding: 0 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम (Home)</a> &gt;
      <a href="../jobs/index.html" style="color: var(--color-primary); text-decoration: none;">सरकारी नौकरी (Govt Jobs)</a> &gt;
      <span style="color: var(--color-text);">परीक्षा कैलेंडर 2026-2027</span>
    </nav>

    <!-- HERO SECTION WITH MASTER LIVE SEARCH BOX -->
    <div class="exam-hub-hero">
      <div style="font-size: 3rem; margin-bottom: 8px;">📅</div>
      <h1>
        <span data-lang-show="hi">सरकारी परीक्षा कैलेंडर 2026-2027</span>
        <span data-lang-show="en">All India Government Exam Calendar 2026-2027</span>
      </h1>
      <p>
        <span data-lang-show="hi">एसएससी, यूपीएससी, रेलवे (RRB), बैंकिंग (IBPS/SBI), रक्षा व राज्य लोक सेवा आयोगों की 2026-2027 परीक्षा तिथियां, आवेदन विंडो, एडमिट कार्ड व ऑफिशियल टाइमटेबल।</span>
        <span data-lang-show="en">Complete national schedule for SSC, UPSC, Railway RRB, Banking (IBPS/SBI), Defence & State PSCs: CBT dates, registration deadlines & official notification tracking.</span>
      </p>

      <!-- Master Instant Live Search Box -->
      <div style="max-width: 680px; margin: 0 auto; position: relative;">
        <div style="display: flex; background: var(--color-surface); border: 2px solid #3b82f6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.15);">
          <span style="padding: 12px 16px; font-size: 1.2rem; display: flex; align-items: center; color: var(--color-text);">🔍</span>
          <input type="text" id="catSearchInput" placeholder="परीक्षा का नाम या आयोग खोजें (उदा. SSC CGL, UPSC IAS, RRB NTPC, Banking, 10th Pass)..." style="flex: 1; border: none; padding: 14px 8px; font-size: 1rem; outline: none; background: transparent; color: var(--color-text);">
          <button id="catSearchClear" style="background: transparent; border: none; padding: 0 16px; font-size: 1.2rem; color: var(--color-muted); cursor: pointer; display: none;" title="Clear Search">✕</button>
        </div>
        <div id="catSearchSuggestions" style="position: absolute; top: calc(100% + 4px); left: 0; right: 0; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 8px; max-height: 380px; overflow-y: auto; box-shadow: 0 10px 25px rgba(0,0,0,0.2); z-index: 9999; display: none; text-align: left;"></div>
      </div>
    </div>

    <!-- SECTOR FILTER BUTTONS -->
    <div class="hub-filter-tabs">
      <button class="hub-tab-btn active" data-filter="all">🌐 सभी परीक्षाएं (All Exams)</button>
      <button class="hub-tab-btn" data-filter="SSC">🔵 SSC (कर्मचारी चयन आयोग)</button>
      <button class="hub-tab-btn" data-filter="UPSC">🟣 UPSC (संघ लोक सेवा आयोग)</button>
      <button class="hub-tab-btn" data-filter="Railway">🟢 Railway (RRB)</button>
      <button class="hub-tab-btn" data-filter="Banking">🟠 Banking (IBPS / SBI / RBI)</button>
    </div>

    <!-- FLAGSHIP ANNUAL CALENDAR QUICK HUBS -->
    <section style="margin: 32px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        🏛️ आयोग-वार वार्षिक परीक्षा कैलेंडर (Official Annual Calendars)
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="ssc-exam-calendar-2026-2027.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🔵</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #2563eb;">SSC Annual Calendar</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">CGL, CHSL, MTS, GD, Steno, CPO व JE 2026-2027 परीक्षा तिथियां।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Open SSC Schedule ↗</div>
        </a>

        <a href="upsc-annual-exam-calendar-2027.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🟣</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #7c3aed;">UPSC Annual Calendar</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">सिविल सेवा (IAS/IFS), NDA, CDS, CMS व CAPF 2026-2027 शेड्यूल।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Open UPSC Schedule ↗</div>
        </a>

        <a href="railway-rrb-exam-schedule-2026-2027.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🟢</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #059669;">Railway RRB Schedule</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">NTPC, Group D Level 1, ALP, Technician व JE भर्ती CBT तिथियां।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Open RRB Schedule ↗</div>
        </a>

        <a href="banking-ibps-sbi-calendar-2026-2027.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 18px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🟠</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: #d97706;">Banking IBPS & SBI</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">IBPS PO/Clerk, RRB, SBI PO/Clerk व RBI Grade B प्रीलिम्स-मेन्स।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Open Banking Schedule ↗</div>
        </a>
      </div>
    </section>

    <!-- MASTER EXAM SCHEDULE TABLE -->
    <section style="margin: 40px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        📋 राष्ट्रीय भर्ती परीक्षाएं 2026-2027 टाइमटेबल (Master Exam Timetable)
      </h2>
      <div style="overflow-x: auto; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
          <thead>
            <tr style="background: rgba(37,99,235,0.06); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 14px; color: var(--color-primary);">परीक्षा व आयोग (Exam & Commission)</th>
              <th style="padding: 14px; color: var(--color-primary); text-align: center;">सेक्टर</th>
              <th style="padding: 14px; color: var(--color-primary);">न्यूनतम योग्यता</th>
              <th style="padding: 14px; color: var(--color-primary);">आवेदन अंतिम तिथि</th>
              <th style="padding: 14px; color: var(--color-primary);">परीक्षा तिथि (Exam Date)</th>
              <th style="padding: 14px; color: var(--color-primary); text-align: center;">कार्यवाही</th>
            </tr>
          </thead>
          <tbody>
            {''.join(table_rows)}
          </tbody>
        </table>
      </div>
    </section>

    <!-- LIVE SEARCHABLE EXAM CARDS GRID -->
    <section style="margin: 40px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        🎯 सक्रिय व आगामी परीक्षा अलर्ट कार्ड्स (Interactive Exam Alerts)
      </h2>
      <div class="exam-grid" id="examCardsGrid">
        {''.join(cards_html)}
      </div>
    </section>

    <!-- 6 REAL WORLD PROBLEM SOLVERS -->
    <section style="margin: 44px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        🛠️ परीक्षार्थी सहायता केंद्र: 6 प्रमुख समस्याएं व प्रामाणिक समाधान
      </h2>
      {''.join(prob_html)}
    </section>

    <!-- COMPREHENSIVE STATUTORY GUIDE -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 28px; margin-bottom: 44px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-top: 0; margin-bottom: 18px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        📖 DoPT भर्ती दिशानिर्देश, नॉर्मलाइजेशन प्रक्रिया व चयन मानक 2026
      </h2>
      <div style="color: var(--color-text); line-height: 1.8; font-size: 1rem;">
        <p>भारत सरकार के कार्मिक एवं प्रशिक्षण विभाग (DoPT), संघ लोक सेवा आयोग (UPSC) और कर्मचारी चयन आयोग (SSC) द्वारा केंद्र सरकार के विभिन्न मंत्रालयों एवं विभागों में समूह 'क', 'ख' और 'ग' पदों की भर्ती परीक्षाओं के आयोजन हेतु वैधानिक मानक और समय-सारणी निर्धारित की जाती है।</p>
        
        <h3 style="color: var(--color-primary); margin-top: 24px;">1. कंप्यूटर आधारित परीक्षा (CBT) में नॉर्मलाइजेशन और पर्सेंटाइल स्कोरिंग</h3>
        <p>जब किसी प्रतियोगी परीक्षा (जैसे SSC CGL, RRB NTPC या IBPS Clerk) में लाखों अभ्यर्थी सम्मिलित होते हैं, तो परीक्षा कई दिनों और पालियों में आयोजित की जाती है। सभी पालियों के प्रश्नपत्रों की कठिनाई के स्तर में होने वाले प्राकृतिक अंतर को संतुलित करने के लिए बहु-चरणीय 'Equi-percentile Method' या DoPT स्वीकृत गणितीय नॉर्मलाइजेशन फॉर्मूला लागू किया जाता है। इससे कठिन पाली वाले परीक्षार्थियों के अंक तुलनात्मक रूप से बढ़ जाते हैं और निष्पक्ष मेरिट सुनिश्चित होती है।</p>

        <h3 style="color: var(--color-primary); margin-top: 24px;">2. वन-टाइम रजिस्ट्रेशन (OTR) और बायोमेट्रिक लाइव वेरिफिकेशन</h3>
        <p>फर्जीवाड़े और मुन्नाभाई मामलों को रोकने के लिए यूपीएससी और एसएससी द्वारा वन-टाइम रजिस्ट्रेशन (OTR) अनिवार्य कर दिया गया है। फॉर्म भरते समय लाइव वेबकैम फोटो कैप्चर और परीक्षा केंद्र पर आधार बेस्ड फिंगरप्रिंट व आइरिस बायोमेट्रिक प्रमाणीकरण किया जाता है।</p>

        <h3 style="color: var(--color-primary); margin-top: 24px;">3. आयु सीमा में संवैधानिक छूट (Age Relaxation Norms)</h3>
        <p>केंद्र सरकार के नियमों के अनुसार अनुसूचित जाति/जनजाति (SC/ST) को 5 वर्ष, अन्य पिछड़ा वर्ग (OBC-NCL) को 3 वर्ष, दिव्यांगजन (PwD) को 10 से 15 वर्ष तथा भूतपूर्व सैनिकों (Ex-Servicemen) को उनकी सेवा अवधि घटाने के उपरांत 3 वर्ष की अधिकतम आयु सीमा में छूट प्रदान की जाती है।</p>
      </div>
    </section>

    <!-- 10 FAQS ACCORDIONS -->
    <section style="margin-bottom: 44px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ अक्सर पूछे जाने वाले सवाल (Frequently Asked Questions)
      </h2>
      {''.join(faq_items)}
    </section>

    <!-- CITIZEN TOOLS GRID -->
    <section style="margin-top: 40px; margin-bottom: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        🧮 परीक्षार्थियों के लिए उपयोगी मुफ्त टूल्स व कैलकुलेटर
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="../tools/photo-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🖼️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Govt Exam Photo Resizer</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">एसएससी व यूपीएससी फॉर्म हेतु फोटो को सटीक 20-50 KB व DPI में बदलें।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Resize Photo ↗</div>
        </a>

        <a href="../tools/signature-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">✍️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Signature Resizer</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">हस्ताक्षर को 10-20 KB और निर्धारित पिक्सल अनुपात में तुरंत क्रॉप करें।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Resize Signature ↗</div>
        </a>

        <a href="../tools/document-compressor.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📄</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Document Compressor</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">10वीं/12वीं मार्कशीट व जाति प्रमाण पत्र को 100-300 KB PDF/JPG में कंप्रेस करें।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Compress Document ↗</div>
        </a>

        <a href="../tools/typing-speed-test.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">⌨️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Typing Speed Test</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">एसएससी व कोर्ट भर्ती हेतु 35 WPM / 27 WPM टाइपिंग स्पीड टेस्ट अभ्यास करें।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Test Speed ↗</div>
        </a>
      </div>
    </section>

    <!-- SUBSCRIBE WIDGET -->
    <div id="subscribe-widget" data-service-id="exam-calendar" style="margin: 40px 0;"></div>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005580 100%); border-radius: 16px; padding: 32px 24px; color: #ffffff; text-align: center; margin: 40px 0; box-shadow: 0 8px 30px rgba(0, 136, 204, 0.2);">
      <span style="font-size: 2.5rem; display: block; margin-bottom: 8px;">✈️</span>
      <h3 style="font-size: 1.5rem; margin: 0 0 10px 0; color: #ffffff;">SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
      <p style="font-size: 1rem; color: #e0f2fe; max-width: 600px; margin: 0 auto 20px auto; line-height: 1.6;">
        सभी सरकारी भर्ती परीक्षाओं के एडमिट कार्ड, परीक्षा तिथियों, आंसर-की व रिजल्ट्स की रियल-टाइम आधिकारिक सूचनाएं सीधे अपने फोन पर प्राप्त करें।
      </p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #ffffff; color: #0088cc; font-weight: 700; padding: 14px 32px; border-radius: 30px; text-decoration: none; font-size: 1.05rem; box-shadow: 0 4px 14px rgba(0,0,0,0.15); transition: transform 0.2s;">
        Join Telegram VIP Channel ↗
      </a>
    </div>

  </main>

  <div id="site-footer">
{get_baked_footer("../")}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/supabase-client.js"></script>
  <script src="../assets/js/subscribe.js"></script>
  <script src="../assets/js/share-widget.js"></script>

  <!-- MASTER LIVE SEARCH & FILTER SCRIPT -->
  <script>
    (function() {{
      const searchInput = document.getElementById('catSearchInput');
      const searchClear = document.getElementById('catSearchClear');
      const suggestionsBox = document.getElementById('catSearchSuggestions');
      const tabBtns = document.querySelectorAll('.hub-tab-btn');
      const examCards = document.querySelectorAll('.exam-hub-card');
      let activeFilter = 'all';

      // Tab Filtering
      tabBtns.forEach(btn => {{
        btn.addEventListener('click', function() {{
          tabBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          activeFilter = this.getAttribute('data-filter');
          applyFilters();
        }});
      }});

      function applyFilters() {{
        const q = searchInput.value.toLowerCase().trim();
        examCards.forEach(card => {{
          const sector = card.getAttribute('data-sector');
          const title = card.getAttribute('data-title').toLowerCase();
          const matchSector = (activeFilter === 'all' || sector === activeFilter);
          const matchQuery = (!q || title.includes(q));
          card.style.display = (matchSector && matchQuery) ? 'flex' : 'none';
        }});
      }}

      if (searchInput) {{
        searchInput.addEventListener('input', function() {{
          const val = this.value.trim().toLowerCase();
          if (searchClear) searchClear.style.display = val ? 'block' : 'none';
          applyFilters();

          if (!val) {{
            suggestionsBox.style.display = 'none';
            return;
          }}

          const matches = [];
          examCards.forEach(card => {{
            const titleText = card.getAttribute('data-title') || '';
            const cardLink = card.querySelector('h3 a');
            if (titleText.toLowerCase().includes(val) && cardLink) {{
              matches.push({{
                title: cardLink.textContent.trim(),
                url: cardLink.getAttribute('href'),
                sector: card.getAttribute('data-sector')
              }});
            }}
          }});

          if (matches.length > 0) {{
            suggestionsBox.innerHTML = matches.slice(0, 8).map(m => `
              <a href="${{m.url}}" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; border-bottom: 1px solid var(--color-border); color: var(--color-text); text-decoration: none;">
                <span style="font-weight: 600;">${{m.title}}</span>
                <span style="font-size: 0.75rem; background: var(--color-primary); color: #fff; padding: 2px 6px; border-radius: 4px;">${{m.sector}}</span>
              </a>
            `).join('');
            suggestionsBox.style.display = 'block';
          }} else {{
            suggestionsBox.style.display = 'none';
          }}
        }});

        if (searchClear) {{
          searchClear.addEventListener('click', function() {{
            searchInput.value = '';
            searchClear.style.display = 'none';
            suggestionsBox.style.display = 'none';
            applyFilters();
          }});
        }}

        document.addEventListener('click', function(e) {{
          if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {{
            suggestionsBox.style.display = 'none';
          }}
        }});
      }}
    }})();
  </script>
</body>
</html>
"""
    return html

ANNUAL_HUBS = {
    "ssc-exam-calendar-2026-2027.html": {
        "slug": "ssc-exam-calendar-2026-2027",
        "sector": "SSC",
        "sector_color": "#2563eb",
        "title_hi": "एसएससी परीक्षा कैलेंडर 2026-2027: CGL, CHSL, MTS, GD कांस्टेबल व CPO परीक्षा तिथियां",
        "title_en": "SSC Exam Calendar 2026-2027: CGL, CHSL, MTS, GD Constable & CPO Dates",
        "desc_hi": "कर्मचारी चयन आयोग (SSC) का आधिकारिक वार्षिक परीक्षा कैलेंडर 2026-2027: CGL, CHSL, MTS, GD कांस्टेबल, स्टेनोग्राफर, दिल्ली पुलिस SI व JE की अधिसूचना, आवेदन व CBT तिथियां।",
        "desc_en": "Official Staff Selection Commission (SSC) Exam Calendar 2026-2027: Check CBT dates, notification releases, and application deadlines for CGL, CHSL, MTS, GD, Steno & CPO.",
        "org_hi": "कर्मचारी चयन आयोग (Staff Selection Commission)",
        "org_en": "Staff Selection Commission (SSC)",
        "official_portal": "https://ssc.gov.in",
        "overview_hi": "कर्मचारी चयन आयोग (SSC) द्वारा केंद्र सरकार के विभिन्न मंत्रालयों, अधीनस्थ विभागों और केंद्रीय सशस्त्र पुलिस बलों (CAPFs) में ग्रुप 'बी' और 'सी' अराजपत्रित पदों पर भर्ती हेतु वार्षिक परीक्षा कैलेंडर 2026-2027 जारी किया गया है।",
        "overview_en": "Staff Selection Commission (SSC) conducts national-level recruitment examinations for Group B and C non-gazetted posts across central government ministries and armed police forces.",
        "exams": [
            ("SSC CGL 2026 (Tier 1)", "स्नातक डिग्री (Graduation)", "24 जून 2026", "24 जुलाई 2026", "08 से 26 सितंबर 2026", "CBT Online", "../jobs/ssc-cgl-recruitment-2026.html"),
            ("SSC CHSL 2026 (Tier 1)", "12वीं पास (10+2)", "08 अप्रैल 2026", "07 मई 2026", "01 से 12 जुलाई 2026", "CBT Online", "#"),
            ("SSC MTS & Havaldar 2026", "10वीं पास (Matric)", "27 जून 2026", "31 जुलाई 2026", "20 अक्टूबर से 14 नवंबर 2026", "CBT Online", "../jobs/ssc-mts-havaldar-recruitment-2026.html"),
            ("SSC GD Constable 2027", "10वीं पास", "27 अगस्त 2026", "05 अक्टूबर 2026", "05 जनवरी से 25 फरवरी 2027", "CBT Online", "#"),
            ("SSC CPO SI (Delhi Police/CAPF)", "स्नातक डिग्री", "04 मार्च 2026", "28 मार्च 2026", "27 से 29 मई 2026", "CBT Online", "#"),
            ("SSC Stenographer 'C' & 'D'", "12वीं + स्टेनो", "16 जुलाई 2026", "14 अगस्त 2026", "06 से 11 नवंबर 2026", "CBT + Skill", "#"),
            ("SSC Selection Post Phase-XIV", "10th/12th/Degree", "01 फरवरी 2026", "28 फरवरी 2026", "06 से 08 मई 2026", "CBT Online", "#"),
            ("SSC Junior Engineer (JE)", "Diploma/B.Tech", "28 मार्च 2026", "18 अप्रैल 2026", "04 से 06 जून 2026", "CBT Online", "#")
        ]
    },
    "upsc-annual-exam-calendar-2027.html": {
        "slug": "upsc-annual-exam-calendar-2027",
        "sector": "UPSC",
        "sector_color": "#7c3aed",
        "title_hi": "UPSC वार्षिक परीक्षा कैलेंडर 2026-2027: सिविल सेवा (IAS/IFS), NDA, CDS व CMS शेड्यूल",
        "title_en": "UPSC Annual Exam Calendar 2026-2027: Civil Services (IAS/IFS), NDA, CDS & CMS Schedule",
        "desc_hi": "संघ लोक सेवा आयोग (UPSC) का आधिकारिक वार्षिक परीक्षा कैलेंडर 2026-2027: CSE प्रारंभिक व मुख्य परीक्षा, NDA/NA, CDS, CAPF, ईएसई व मेडिकल सर्विसेज परीक्षा कार्यक्रम।",
        "desc_en": "Official Union Public Service Commission (UPSC) Annual Calendar 2026-2027: Check notification, registration deadlines and exam dates for Civil Services (IAS/IFS), NDA, CDS, CMS & CAPF.",
        "org_hi": "संघ लोक सेवा आयोग (Union Public Service Commission)",
        "org_en": "Union Public Service Commission (UPSC)",
        "official_portal": "https://upsc.gov.in",
        "overview_hi": "संघ लोक सेवा आयोग (UPSC) द्वारा अखिल भारतीय सेवाओं (IAS, IPS, IFS), केंद्रीय सिविल सेवाओं और रक्षा सेवाओं के शीर्ष पदों पर चयन हेतु वार्षिक परीक्षा कार्यक्रम 2026-2027 जारी किया गया है।",
        "overview_en": "UPSC conducts India's premier competitive examinations including the Civil Services Examination, NDA, CDS, CMS, and Indian Engineering Services.",
        "exams": [
            ("Civil Services (Prelims) 2026", "Graduate Degree", "14 फरवरी 2026", "05 मार्च 2026", "24 मई 2026", "Offline OMR", "../jobs/upsc-civil-services-ias-ifs-2027.html"),
            ("Civil Services (Mains) 2026", "Prelims Pass", "-", "-", "18 सितंबर 2026 (5 Days)", "Descriptive", "../jobs/upsc-civil-services-ias-ifs-2027.html"),
            ("Civil Services (Prelims) 2027", "Graduate Degree", "10 फरवरी 2027", "02 मार्च 2027", "23 मई 2027", "Offline OMR", "../jobs/upsc-civil-services-ias-ifs-2027.html"),
            ("UPSC NDA & NA (I) 2026", "12th Pass", "17 दिसंबर 2025", "06 जनवरी 2026", "12 अप्रैल 2026", "Offline OMR", "#"),
            ("UPSC NDA & NA (II) 2026", "12th Pass", "27 मई 2026", "16 जून 2026", "13 सितंबर 2026", "Offline OMR", "#"),
            ("UPSC CDS (I) 2026", "Graduate Degree", "17 दिसंबर 2025", "06 जनवरी 2026", "12 अप्रैल 2026", "Offline OMR", "#"),
            ("UPSC CDS (II) 2026", "Graduate Degree", "27 मई 2026", "16 जून 2026", "13 सितंबर 2026", "Offline OMR", "#"),
            ("UPSC CAPF (AC) 2026", "Bachelor's Degree", "22 अप्रैल 2026", "12 मई 2026", "02 अगस्त 2026", "OMR + Written", "#")
        ]
    },
    "railway-rrb-exam-schedule-2026-2027.html": {
        "slug": "railway-rrb-exam-schedule-2026-2027",
        "sector": "Railway",
        "sector_color": "#059669",
        "title_hi": "रेलवे भर्ती बोर्ड (RRB) परीक्षा कैलेंडर 2026-2027: NTPC, Group D, ALP, Technician व JE",
        "title_en": "Railway RRB Exam Calendar 2026-2027: NTPC, Group D, ALP, Technician & JE Schedule",
        "desc_hi": "भारतीय रेलवे भर्ती बोर्ड (RRB) वार्षिक परीक्षा कैलेंडर 2026-2027: NTPC (ग्रेजुएट/12वीं), ग्रुप डी Level 1, ALP, तकनीशियन व जूनियर इंजीनियर कंप्यूटर आधारित परीक्षा (CBT) कार्यक्रम।",
        "desc_en": "Complete Indian Railways RRB Recruitment Calendar 2026-2027: CBT dates, application window, syllabus and official updates for NTPC, Group D, ALP, Technician & Section Controller.",
        "org_hi": "रेलवे भर्ती बोर्ड (Railway Recruitment Boards)",
        "org_en": "Railway Recruitment Boards (RRB)",
        "official_portal": "https://rrbapply.gov.in",
        "overview_hi": "रेल मंत्रालय द्वारा भारतीय रेल के सभी 21 जोनल रेलवे भर्ती बोर्डों (RRBs) के अंतर्गत 1,00,000+ पदों पर भर्ती हेतु वार्षिक परीक्षा चक्र 2026-2027 संचालित किया जा रहा है।",
        "overview_en": "Ministry of Railways conducts annual mega recruitment cycles across 21 RRBs for technical, non-technical, and safety-category railway positions.",
        "exams": [
            ("RRB NTPC Graduate (CEN 05/2026)", "Bachelor's Degree", "14 सितंबर 2026", "13 अक्टूबर 2026", "18 से 29 दिसंबर 2026", "CBT-1 Online", "../jobs/rrb-ntpc-recruitment-2026.html"),
            ("RRB NTPC 12th Undergraduate", "12th Pass (50%)", "21 सितंबर 2026", "20 अक्टूबर 2026", "12 से 24 जनवरी 2027", "CBT-1 Online", "../jobs/rrb-ntpc-recruitment-2026.html"),
            ("RRB Group D (Level-1 Trackman)", "10th + ITI/NAC", "15 अक्टूबर 2026", "15 नवंबर 2026", "15 फरवरी से 28 मार्च 2027", "CBT Online", "#"),
            ("RRB ALP (CEN 01/2026)", "10th + ITI/Diploma", "20 जनवरी 2026", "19 फरवरी 2026", "25 से 29 नवंबर 2026", "CBT-1 Online", "#"),
            ("RRB Technician (Grade I & III)", "10th + ITI / B.Sc", "09 मार्च 2026", "08 अप्रैल 2026", "18 से 28 दिसंबर 2026", "CBT Online", "#"),
            ("RRB Junior Engineer (JE CEN 04/2026)", "Degree/Diploma Engg", "30 जुलाई 2026", "29 अगस्त 2026", "13 से 17 दिसंबर 2026", "CBT-1 Online", "../jobs/rrb-junior-engineer-recruitment-2026-mseotm9d-0.html")
        ]
    },
    "banking-ibps-sbi-calendar-2026-2027.html": {
        "slug": "banking-ibps-sbi-calendar-2026-2027",
        "sector": "Banking",
        "sector_color": "#d97706",
        "title_hi": "बैंकिंग परीक्षा कैलेंडर 2026-2027: IBPS PO, Clerk, RRB, SBI PO व RBI Grade B शेड्यूल",
        "title_en": "Banking Exam Calendar 2026-2027: IBPS PO, Clerk, RRB, SBI PO & RBI Grade B Schedule",
        "desc_hi": "भारत का सम्पूर्ण बैंकिंग परीक्षा कैलेंडर 2026-2027: IBPS PO/Clerk XVI, IBPS RRB XV, SBI PO व क्लर्क, RBI ग्रेड 'B' ऑफिसर प्रीलिम्स व मेन्स सीबीटी परीक्षा तिथियां।",
        "desc_en": "Official Banking Exam Schedule 2026-2027: Prelims and Mains examination dates, notification release and application deadlines for IBPS PO, IBPS Clerk, IBPS RRB, SBI PO, SBI Clerk & RBI Grade B.",
        "org_hi": "इंस्टीट्यूट ऑफ बैंकिंग पर्सनेल सेलेक्शन (IBPS & SBI)",
        "org_en": "Institute of Banking Personnel Selection (IBPS & SBI)",
        "official_portal": "https://ibps.in",
        "overview_hi": "भारत के सार्वजनिक क्षेत्र के 11 राष्ट्रीयकृत बैंकों, भारतीय स्टेट बैंक (SBI), क्षेत्रीय ग्रामीण बैंकों (RRBs) और रिज़र्व बैंक (RBI) में प्रोबेशनरी ऑफिसर, क्लर्क और स्पेशलिस्ट पदों का आधिकारिक परीक्षा टाइमटेबल।",
        "overview_en": "IBPS, SBI, and RBI conduct annual centralized examinations for Probationary Officers, Customer Service Associates, and Specialist Officers.",
        "exams": [
            ("IBPS PO / MT XVI (CRP PO/MT-XVI)", "Graduate Degree", "01 अगस्त 2026", "21 अगस्त 2026", "19 व 20 अक्टूबर 2026 (Prelims) | 30 नवंबर 2026 (Mains)", "Online CBT", "../jobs/ibps-po-mt-recruitment-2026.html"),
            ("IBPS Clerk / CSA XVI", "Graduate Degree", "01 जुलाई 2026", "21 जुलाई 2026", "24, 25 व 31 अगस्त 2026 (Prelims) | 13 अक्टूबर 2026 (Mains)", "Online CBT", "../jobs/ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html"),
            ("IBPS RRB XV Office Assistant", "Graduate Degree", "07 जून 2026", "27 जून 2026", "03, 04, 10, 17 व 18 अगस्त 2026 (Prelims) | 06 अक्टूबर 2026 (Mains)", "Online CBT", "../jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html"),
            ("SBI PO 2026-2027", "Graduate Degree", "07 सितंबर 2026", "27 सितंबर 2026", "01, 02 व 03 नवंबर 2026 (Prelims) | 18 जनवरी 2027 (Mains)", "Online CBT", "../jobs/sbi-po-recruitment-2026-2027.html"),
            ("SBI Clerk 2026", "Graduate Degree", "17 नवंबर 2026", "07 दिसंबर 2026", "10, 11, 12 व 13 जनवरी 2027 (Prelims) | 28 फरवरी 2027 (Mains)", "Online CBT", "../jobs/sbi-clerk-junior-associate-recruitment-2026.html"),
            ("RBI Grade 'B' Officer 2026", "Graduation 60%", "25 जुलाई 2026", "16 अगस्त 2026", "08 सितंबर 2026 (Phase 1) | 19 अक्टूबर 2026 (Phase 2)", "Online CBT", "../jobs/rbi-grade-b-officer-recruitment-2026.html")
        ]
    }
}

INDIVIDUAL_EXAM_PAGES = {
    "ssc-cgl-2026.html": {
        "slug": "ssc-cgl-2026",
        "sector": "SSC",
        "sector_color": "#2563eb",
        "title_hi": "SSC CGL 2026 परीक्षा तिथि, एडमिट कार्ड व टियर-1/2 सीबीटी टाइमटेबल | SarkariSewa",
        "title_en": "SSC CGL 2026 Exam Date, Admit Card & Tier-1/2 CBT Schedule",
        "desc_hi": "एसएससी सीजीएल 2026 परीक्षा तिथि (08-26 सितंबर 2026), टियर-1 एडमिट कार्ड स्टेटस, नेगेटिव मार्किंग नियम, 17,727 पदों का विस्तृत परीक्षा पैटर्न व आधिकारिक टाइमटेबल।",
        "desc_en": "SSC CGL 2026 examination dates announced: Tier-1 CBT scheduled from 08 to 26 September 2026. Check syllabus, exam shift timings, admit card release and exam pattern.",
        "org_hi": "कर्मचारी चयन आयोग (Staff Selection Commission)",
        "org_en": "Staff Selection Commission (SSC)",
        "post_name_hi": "संयुक्त स्नातक स्तरीय परीक्षा (CGL 2026)",
        "post_name_en": "Combined Graduate Level Examination (CGL 2026)",
        "vacancies": "17,727 Vacancies",
        "dates": [
            ("अधिसूचना जारी (Notification Released)", "24 जून 2026"),
            ("ऑनलाइन आवेदन की अंतिम तिथि (Last Date)", "24 जुलाई 2026 (रात 11:00 बजे)"),
            ("एप्लिकेशन फॉर्म सुधार विंडो (Correction Window)", "10 व 11 अगस्त 2026"),
            ("टियर-1 एडमिट कार्ड / सिटी इंटिमेशन", "परीक्षा से 7 दिन पूर्व"),
            ("टियर-1 CBT परीक्षा तिथियां (Tier-1 CBT Dates)", "08 सितंबर से 26 सितंबर 2026"),
            ("टियर-2 सीबीटी परीक्षा (Tier-2 CBT Exam)", "दिसंबर 2026 (अपेक्षित)")
        ],
        "job_url": "../jobs/ssc-cgl-recruitment-2026.html",
        "official_portal": "https://ssc.gov.in"
    },
    "upsc-cse-2026.html": {
        "slug": "upsc-cse-2026",
        "sector": "UPSC",
        "sector_color": "#7c3aed",
        "title_hi": "UPSC सिविल सेवा (IAS/IFS) 2026 परीक्षा तिथि, मेन्स टाइमटेबल व एडमिट कार्ड",
        "title_en": "UPSC CSE 2026 Exam Date, Mains Timetable & Admit Card Tracker",
        "desc_hi": "UPSC CSE 2026 परीक्षा तिथियां: प्रारंभिक परीक्षा (24 मई 2026), मुख्य परीक्षा (18 सितंबर 2026), 1056 पदों का परीक्षा पैटर्न, निगेटिव मार्किंग व टाइमटेबल।",
        "desc_en": "UPSC Civil Services Examination (CSE 2026) Schedule: Prelims exam on 24 May 2026, Mains examination from 18 September 2026. Complete timetable & admit card details.",
        "org_hi": "संघ लोक सेवा आयोग (UPSC)",
        "org_en": "Union Public Service Commission",
        "post_name_hi": "सिविल सेवा परीक्षा (IAS, IPS, IFS, IRS 2026)",
        "post_name_en": "Civil Services Examination 2026",
        "vacancies": "1,056 Posts",
        "dates": [
            ("अधिसूचना जारी तिथि", "14 फरवरी 2026"),
            ("आवेदन की अंतिम तिथि", "05 मार्च 2026"),
            ("प्रारंभिक परीक्षा (CSE Prelims 2026)", "24 मई 2026 (रविवार)"),
            ("प्रारंभिक परीक्षा परिणाम", "15 जून 2026"),
            ("DAF-1 मेन्स आवेदन विंडो", "01 से 12 जुलाई 2026"),
            ("मुख्य परीक्षा (CSE Mains 2026)", "18 सितंबर 2026 (5 दिवसीय परीक्षा)")
        ],
        "job_url": "../jobs/upsc-civil-services-ias-ifs-2027.html",
        "official_portal": "https://upsc.gov.in"
    },
    "rrb-ntpc-ug-2026.html": {
        "slug": "rrb-ntpc-ug-2026",
        "sector": "Railway",
        "sector_color": "#059669",
        "title_hi": "RRB NTPC (12वीं पास अंडरग्रेजुएट) 2026 परीक्षा तिथि, CBT-1 शेड्यूल व एडमिट कार्ड",
        "title_en": "RRB NTPC Undergraduate 2026 Exam Date, CBT-1 Schedule & Admit Card",
        "desc_hi": "रेलवे आरआरबी एनटीपीसी 12वीं स्तर (3,445 पद) सीबीटी-1 परीक्षा तिथियां (12-24 जनवरी 2027), एग्जाम सिटी स्लिप, परीक्षा पैटर्न व सिलेबस विवरण।",
        "desc_en": "Railway RRB NTPC Undergraduate 2026 CBT-1 Examination Dates: 12 to 24 January 2027. Check exam city slip release, question pattern, and negative marking.",
        "org_hi": "रेलवे भर्ती बोर्ड (RRB)",
        "org_en": "Railway Recruitment Boards",
        "post_name_hi": "आरआरबी एनटीपीसी 12वीं पास (क्लर्क, टाइपिस्ट, टिकट क्लर्क)",
        "post_name_en": "RRB NTPC 12th Level (Accounts Clerk, Junior Clerk, Ticket Clerk)",
        "vacancies": "3,445 Posts",
        "dates": [
            ("अधिसूचना जारी", "21 सितंबर 2026"),
            ("आवेदन की अंतिम तिथि", "20 अक्टूबर 2026"),
            ("एप्लीकेशन स्टेटस चेक", "दिसंबर 2026"),
            ("एग्जाम सिटी व डेट इंटिमेशन स्लिप", "परीक्षा से 10 दिन पूर्व"),
            ("सीबीटी-1 परीक्षा (CBT-1 Exam Dates)", "12 जनवरी से 24 जनवरी 2027"),
            ("टाइपिंग स्किल टेस्ट (DEST)", "मई 2027")
        ],
        "job_url": "../jobs/rrb-ntpc-recruitment-2026.html",
        "official_portal": "https://rrbapply.gov.in"
    },
    "rrb-group-d-2026.html": {
        "slug": "rrb-group-d-2026",
        "sector": "Railway",
        "sector_color": "#059669",
        "name_hi": "RRB ग्रुप डी (Level-1) 2026-2027 परीक्षा तिथि व CBT टाइमटेबल",
        "title_hi": "RRB ग्रुप डी (Level-1) 2026-2027 परीक्षा तिथि, CBT टाइमटेबल व एडमिट कार्ड",
        "title_en": "RRB Group D (Level-1) 2026-2027 Exam Date, CBT Schedule & Admit Card",
        "desc_hi": "रेलवे भर्ती बोर्ड ग्रुप डी (Level-1 Trackman, Pointsman) 32,000+ पदों की सीबीटी परीक्षा तिथि (15 फरवरी-28 मार्च 2027), फिजिकल एफिशिएंसी टेस्ट (PET) व पैटर्न।",
        "desc_en": "Railway RRB Group D (Level-1) 2026-2027 CBT Exam Schedule: 15 February to 28 March 2027. Check physical efficiency test (PET) standards, syllabus, and dates.",
        "org_hi": "रेलवे भर्ती बोर्ड (RRB)",
        "org_en": "Railway Recruitment Boards",
        "post_name_hi": "आरआरबी ग्रुप डी / लेवल-1 (ट्रैकमैन, पॉइंट्समैन, हेल्पर)",
        "post_name_en": "RRB Group D / Level-1 (Track Maintainer, Pointsman, Assistant)",
        "vacancies": "32,000+ Posts (अपेक्षित)",
        "dates": [
            ("अधिसूचना जारी तिथि", "15 अक्टूबर 2026"),
            ("आवेदन की अंतिम तिथि", "15 नवंबर 2026"),
            ("एप्लिकेशन स्टेटस चेक", "जनवरी 2027"),
            ("सीबीटी परीक्षा तिथियां (CBT Dates)", "15 फरवरी से 28 मार्च 2027"),
            ("शारीरिक दक्षता परीक्षा (PET)", "मई-जून 2027")
        ],
        "job_url": "#",
        "official_portal": "https://rrbapply.gov.in"
    },
    "ibps-po-2026.html": {
        "slug": "ibps-po-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "title_hi": "IBPS PO XVI 2026 परीक्षा तिथि, प्रीलिम्स-मेन्स शेड्यूल व एडमिट कार्ड",
        "title_en": "IBPS PO XVI 2026 Exam Date, Prelims & Mains Schedule",
        "desc_hi": "आईबीपीएस पीओ XVI 2026 परीक्षा तिथियां: प्रीलिम्स (19 व 20 अक्टूबर 2026), मेन्स (30 नवंबर 2026), 4455 पदों का परीक्षा पैटर्न, कट-ऑफ व इंटरव्यू शेड्यूल।",
        "desc_en": "IBPS PO / MT XVI 2026 Official Exam Calendar: Prelims CBT on 19 & 20 October 2026, Mains on 30 November 2026. Check syllabus, score normalization, and interview details.",
        "org_hi": "आईबीपीएस (IBPS)",
        "org_en": "Institute of Banking Personnel Selection",
        "post_name_hi": "आईबीपीएस प्रोबेशनरी ऑफिसर / मैनेजमेंट ट्रेनी (CRP PO/MT-XVI)",
        "post_name_en": "IBPS Probationary Officer / Management Trainee XVI",
        "vacancies": "4,455 Posts",
        "dates": [
            ("अधिसूचना जारी", "01 अगस्त 2026"),
            ("आवेदन अंतिम तिथि", "21 अगस्त 2026"),
            ("प्रीलिम्स परीक्षा (Prelims CBT)", "19 व 20 अक्टूबर 2026"),
            ("प्रीलिम्स स्कोरकार्ड व परिणाम", "नवंबर 2026 प्रथम सप्ताह"),
            ("मुख्य परीक्षा (Mains CBT)", "30 नवंबर 2026"),
            ("साक्षात्कार (Interview)", "जनवरी-फरवरी 2027"),
            ("प्रोविजनल अलॉटमेंट", "01 अप्रैल 2027")
        ],
        "job_url": "../jobs/ibps-po-mt-recruitment-2026.html",
        "official_portal": "https://ibps.in"
    },
    "ibps-clerk-2026.html": {
        "slug": "ibps-clerk-2026",
        "sector": "Banking",
        "sector_color": "#d97706",
        "title_hi": "IBPS क्लर्क / CSA XVI 2026 परीक्षा तिथि, प्रीलिम्स-मेन्स टाइमटेबल व एडमिट कार्ड",
        "title_en": "IBPS Clerk / CSA XVI 2026 Exam Date, Prelims & Mains Schedule",
        "desc_hi": "आईबीपीएस क्लर्क XVI 2026 परीक्षा तिथियां: प्रीलिम्स (24, 25 व 31 अगस्त 2026), मेन्स (13 अक्टूबर 2026), 6128 पदों का परीक्षा पैटर्न, राज्य-वार वैकेंसी व एडमिट कार्ड।",
        "desc_en": "IBPS Clerk / Customer Service Associate XVI 2026 Exam Schedule: Prelims on 24, 25 & 31 August 2026, Mains on 13 October 2026. Check state-wise vacancy and exam pattern.",
        "org_hi": "आईबीपीएस (IBPS)",
        "org_en": "Institute of Banking Personnel Selection",
        "post_name_hi": "आईबीपीएस कस्टमर सर्विस एसोसिएट / क्लर्क (CRP CSA-XVI)",
        "post_name_en": "IBPS Customer Service Associate / Clerk XVI",
        "vacancies": "6,128 Posts",
        "dates": [
            ("अधिसूचना जारी", "01 जुलाई 2026"),
            ("आवेदन अंतिम तिथि", "21 जुलाई 2026"),
            ("प्रीलिम्स परीक्षा (Prelims CBT)", "24, 25 व 31 अगस्त 2026"),
            ("प्रीलिम्स परिणाम", "सितंबर 2026"),
            ("मुख्य परीक्षा (Mains CBT)", "13 अक्टूबर 2026"),
            ("अंतिम आवंटन परिणाम", "01 अप्रैल 2027")
        ],
        "job_url": "../jobs/ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html",
        "official_portal": "https://ibps.in"
    }
}

def generate_annual_hub_html(filename, cfg):
    canonical_url = f"https://sarkarisewaindia.com/exams/{filename}"
    
    table_rows = []
    for (name, qual, notif, last, exam, mode, link) in cfg["exams"]:
        table_rows.append(f"""
        <tr style="border-bottom: 1px solid var(--color-border);">
          <td style="padding: 12px 14px; font-weight: 700; color: var(--color-primary);">{name}</td>
          <td style="padding: 12px 14px; font-size: 0.88rem; color: var(--color-text);">{qual}</td>
          <td style="padding: 12px 14px; font-size: 0.88rem; color: var(--color-text);">{notif}</td>
          <td style="padding: 12px 14px; font-size: 0.88rem; color: var(--color-text);">{last}</td>
          <td style="padding: 12px 14px; font-weight: 700; color: #059669; font-size: 0.9rem;">{exam}</td>
          <td style="padding: 12px 14px; text-align: center;"><span style="background: rgba(37,99,235,0.1); color: #2563eb; padding: 3px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">{mode}</span></td>
          <td style="padding: 12px 14px; text-align: center;">
            <a href="{link if link != '#' else cfg['official_portal']}" target="{'_blank' if link == '#' else '_self'}" style="background: {cfg['sector_color']}; color: #ffffff; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 0.82rem; font-weight: 700; display: inline-block;">{ 'विवरण 📋' if link != '#' else 'पोर्टल ↗' }</a>
          </td>
        </tr>
        """)

    colors = ["#2563eb", "#059669", "#d97706", "#7c3aed", "#dc2626", "#db2777"]
    prob_html = []
    for idx, (p_title, p_desc) in enumerate(EXAM_PROBLEMS):
        c = colors[idx % len(colors)]
        prob_html.append(f"""
        <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid {c}; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">{p_title}</h3>
          <p style="color: var(--color-text); font-size: 0.95rem; line-height: 1.7; margin: 0;">{p_desc}</p>
        </div>
        """)

    faq_items = []
    schema_faqs = []
    for idx, (q, a) in enumerate(EXAM_FAQS, 1):
        schema_faqs.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {"@type": "Answer", "text": a}
        })
        open_attr = "open" if idx == 1 else ""
        faq_items.append(f"""
        <details class="faq-item" {open_attr} style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
            <span>{idx}. {q}</span>
            <span style="font-size: 1.2rem;">▾</span>
          </summary>
          <div style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">{a}</div>
        </details>
        """)

    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "name": cfg["title_hi"],
                "description": cfg["desc_hi"],
                "url": canonical_url
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html"},
                    {"@type": "ListItem", "position": 2, "name": "Exam Calendar", "item": "https://sarkarisewaindia.com/exams/index.html"},
                    {"@type": "ListItem", "position": 3, "name": cfg["sector"], "item": canonical_url}
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": schema_faqs
            }
        ]
    }, ensure_ascii=False, indent=2)

    return f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{cfg["title_hi"]} | SarkariSewa India</title>
  <meta name="description" content="{cfg["desc_hi"]}">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:title" content="{cfg["title_hi"]}">
  <meta property="og:description" content="{cfg["desc_hi"]}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module9.css">
  <link rel="stylesheet" href="../assets/css/module16.css">
  <link rel="stylesheet" href="../assets/css/module18.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">

  <style>
    /* Clean Bilingual Language Isolation */
    html[lang="hi"] [data-lang-show="en"] {{ display: none !important; }}
    html[lang="en"] [data-lang-show="hi"] {{ display: none !important; }}
    html[lang="hi"] span[data-lang-show="hi"] {{ display: inline !important; }}
    html[lang="en"] span[data-lang-show="en"] {{ display: inline !important; }}
    html[lang="hi"] div[data-lang-show="hi"], html[lang="hi"] p[data-lang-show="hi"], html[lang="hi"] h1[data-lang-show="hi"], html[lang="hi"] h2[data-lang-show="hi"], html[lang="hi"] h3[data-lang-show="hi"] {{ display: block !important; }}
    html[lang="en"] div[data-lang-show="en"], html[lang="en"] p[data-lang-show="en"], html[lang="en"] h1[data-lang-show="en"], html[lang="en"] h2[data-lang-show="en"], html[lang="en"] h3[data-lang-show="en"] {{ display: block !important; }}

    .exam-hero {{
      background: linear-gradient(135deg, #10243E 0%, #1a365d 100%);
      color: #ffffff;
      padding: 38px 24px;
      border-radius: 16px;
      margin-bottom: 32px;
      box-shadow: 0 10px 30px rgba(16, 36, 62, 0.15);
    }}
    .exam-hero h1 {{ font-size: 2.1rem; margin: 8px 0 12px 0; color: #ffffff; }}
    .exam-hero p {{ font-size: 1.05rem; margin: 0 0 20px 0; color: #cbd5e1; max-width: 800px; line-height: 1.6; }}

    /* Dark Mode Contrast Safety */
    [data-theme="dark"] .prob-box,
    [data-theme="dark"] .faq-item {{
      background: #101D2C !important;
      border-color: #223244 !important;
      color: #E8EDF3 !important;
    }}
    [data-theme="dark"] .prob-box h3,
    [data-theme="dark"] .faq-item summary {{
      color: #93C5FD !important;
    }}
  </style>

  <script type="application/ld+json">
{schema_json}
  </script>
</head>
<body class="v2-template">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header">
{get_baked_header("../")}
  </div>

  <main class="container" style="max-width: 1100px; margin: 32px auto; padding: 0 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम (Home)</a> &gt;
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">परीक्षा कैलेंडर (Exam Calendar)</a> &gt;
      <span style="color: var(--color-text);">{cfg["sector"]} 2026-2027</span>
    </nav>

    <!-- HERO SECTION -->
    <div class="exam-hero">
      <div style="display: inline-block; background: {cfg['sector_color']}; color: #ffffff; padding: 4px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; margin-bottom: 12px;">
        🏛️ {cfg["org_hi"]}
      </div>
      <h1>
        <span data-lang-show="hi">{cfg["title_hi"]}</span>
        <span data-lang-show="en">{cfg["title_en"]}</span>
      </h1>
      <p>
        <span data-lang-show="hi">{cfg["overview_hi"]}</span>
        <span data-lang-show="en">{cfg["overview_en"]}</span>
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px;">
        <a href="{cfg['official_portal']}" target="_blank" rel="noopener noreferrer" style="background: #059669; color: #ffffff; padding: 10px 20px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 6px;">
          🌐 {cfg["sector"]} आधिकारिक पोर्टल ↗
        </a>
        <a href="index.html" style="background: rgba(255,255,255,0.15); color: #ffffff; padding: 10px 20px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 0.95rem;">
          📅 सभी परीक्षाओं का कैलेंडर देखें
        </a>
      </div>
    </div>

    <!-- EXAMS SCHEDULE TABLE -->
    <section style="margin: 36px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        📋 {cfg["sector"]} भर्ती परीक्षाएं 2026-2027 वार्षिक टाइमटेबल
      </h2>
      <div style="overflow-x: auto; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.92rem;">
          <thead>
            <tr style="background: rgba(37,99,235,0.06); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 14px; color: var(--color-primary);">परीक्षा का नाम (Exam Name)</th>
              <th style="padding: 14px; color: var(--color-primary);">न्यूनतम योग्यता</th>
              <th style="padding: 14px; color: var(--color-primary);">अधिसूचना तिथि</th>
              <th style="padding: 14px; color: var(--color-primary);">अंतिम तिथि</th>
              <th style="padding: 14px; color: var(--color-primary);">परीक्षा तिथि (Exam Date)</th>
              <th style="padding: 14px; color: var(--color-primary); text-align: center;">माध्यम</th>
              <th style="padding: 14px; color: var(--color-primary); text-align: center;">विवरण</th>
            </tr>
          </thead>
          <tbody>
            {''.join(table_rows)}
          </tbody>
        </table>
      </div>
    </section>

    <!-- 6 PROBLEM SOLVERS -->
    <section style="margin: 44px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        🛠️ {cfg["sector"]} परीक्षार्थी सहायता केंद्र: 6 प्रमुख समस्याएं व समाधान
      </h2>
      {''.join(prob_html)}
    </section>

    <!-- 10 FAQS -->
    <section style="margin-bottom: 44px;">
      <h2 style="color: var(--color-primary); font-size: 1.6rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        ❓ अक्सर पूछे जाने वाले सवाल (Frequently Asked Questions)
      </h2>
      {''.join(faq_items)}
    </section>

    <!-- CITIZEN TOOLS GRID -->
    <section style="margin-top: 40px; margin-bottom: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.55rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 12px;">
        🧮 {cfg["sector"]} अभ्यर्थियों हेतु उपयोगी मुफ्त टूल्स
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        <a href="../tools/photo-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">🖼️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Govt Exam Photo Resizer</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">फोटो को सटीक 20-50 KB व निर्धारित पिक्सल में बदलें।</p>
          </div>
          <div style="font-weight: 700; color: #2563eb; font-size: 0.85rem; margin-top: 12px;">Resize Photo ↗</div>
        </a>

        <a href="../tools/signature-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">✍️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Signature Resizer</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">हस्ताक्षर को 10-20 KB में तुरंत क्रॉप करें।</p>
          </div>
          <div style="font-weight: 700; color: #059669; font-size: 0.85rem; margin-top: 12px;">Resize Signature ↗</div>
        </a>

        <a href="../tools/document-compressor.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">📄</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Document Compressor</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">मार्कशीट व जाति प्रमाण पत्र को 100-300 KB में कंप्रेस करें।</p>
          </div>
          <div style="font-weight: 700; color: #d97706; font-size: 0.85rem; margin-top: 12px;">Compress Document ↗</div>
        </a>

        <a href="../tools/typing-speed-test.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; text-decoration: none; color: var(--color-text); box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: 1.8rem; margin-bottom: 8px;">⌨️</div>
            <h4 style="margin: 0 0 6px 0; font-size: 1.1rem; color: var(--color-primary);">Typing Speed Test</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: 0;">35 WPM / 27 WPM टाइपिंग स्पीड टेस्ट अभ्यास करें।</p>
          </div>
          <div style="font-weight: 700; color: #7c3aed; font-size: 0.85rem; margin-top: 12px;">Test Speed ↗</div>
        </a>
      </div>
    </section>

    <!-- SUBSCRIBE WIDGET -->
    <div id="subscribe-widget" data-service-id="{cfg['slug']}" style="margin: 40px 0;"></div>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005580 100%); border-radius: 16px; padding: 32px 24px; color: #ffffff; text-align: center; margin: 40px 0; box-shadow: 0 8px 30px rgba(0, 136, 204, 0.2);">
      <span style="font-size: 2.5rem; display: block; margin-bottom: 8px;">✈️</span>
      <h3 style="font-size: 1.5rem; margin: 0 0 10px 0; color: #ffffff;">SarkariSewa VIP Telegram चैनल से जुड़ें</h3>
      <p style="font-size: 1rem; color: #e0f2fe; max-width: 600px; margin: 0 auto 20px auto; line-height: 1.6;">
        {cfg["sector"]} के सभी एडमिट कार्ड, परीक्षा तिथियों, आंसर-की व रिजल्ट्स की रियल-टाइम सूचनाएं सीधे अपने फोन पर प्राप्त करें।
      </p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #ffffff; color: #0088cc; font-weight: 700; padding: 14px 32px; border-radius: 30px; text-decoration: none; font-size: 1.05rem; box-shadow: 0 4px 14px rgba(0,0,0,0.15); transition: transform 0.2s;">
        Join Telegram VIP Channel ↗
      </a>
    </div>

  </main>

  <div id="site-footer">
{get_baked_footer("../")}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/subscribe.js"></script>
  <script src="../assets/js/share-widget.js"></script>
</body>
</html>
"""

def generate_exam_post_html(filename, cfg):
    canonical_url = f"https://sarkarisewaindia.com/exams/{filename}"
    
    dates_rows = []
    for (event, dt) in cfg["dates"]:
        dates_rows.append(f"""
        <tr style="border-bottom: 1px solid var(--color-border);">
          <td style="padding: 12px 14px; font-weight: 600; color: var(--color-text);">{event}</td>
          <td style="padding: 12px 14px; font-weight: 700; color: var(--color-primary);">{dt}</td>
        </tr>
        """)

    colors = ["#2563eb", "#059669", "#d97706", "#7c3aed", "#dc2626", "#db2777"]
    prob_html = []
    for idx, (p_title, p_desc) in enumerate(EXAM_PROBLEMS):
        c = colors[idx % len(colors)]
        prob_html.append(f"""
        <div class="prob-box" style="background: var(--color-surface); border: 1px solid var(--color-border); border-left: 6px solid {c}; border-radius: 12px; padding: 22px; margin-bottom: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">{p_title}</h3>
          <p style="color: var(--color-text); font-size: 0.95rem; line-height: 1.7; margin: 0;">{p_desc}</p>
        </div>
        """)

    faq_items = []
    schema_faqs = []
    for idx, (q, a) in enumerate(EXAM_FAQS, 1):
        schema_faqs.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {"@type": "Answer", "text": a}
        })
        open_attr = "open" if idx == 1 else ""
        faq_items.append(f"""
        <details class="faq-item" {open_attr} style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; margin-bottom: 12px; overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 700; color: var(--color-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 1.05rem;">
            <span>{idx}. {q}</span>
            <span style="font-size: 1.2rem;">▾</span>
          </summary>
          <div style="padding: 0 20px 18px 20px; color: var(--color-text); line-height: 1.75; font-size: 0.98rem;">{a}</div>
        </details>
        """)

    schema_json = json.dumps({
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Event",
                "name": cfg["title_hi"],
                "description": cfg["desc_hi"],
                "startDate": "2026-09-01",
                "endDate": "2027-03-31",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "location": {
                    "@type": "Place",
                    "name": "All India Examination Centres",
                    "address": {"@type": "PostalAddress", "addressCountry": "IN"}
                },
                "organizer": {
                    "@type": "Organization",
                    "name": cfg["org_en"],
                    "url": cfg["official_portal"]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html"},
                    {"@type": "ListItem", "position": 2, "name": "Exam Calendar", "item": "https://sarkarisewaindia.com/exams/index.html"},
                    {"@type": "ListItem", "position": 3, "name": cfg["post_name_hi"], "item": canonical_url}
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": schema_faqs
            }
        ]
    }, ensure_ascii=False, indent=2)

    return f"""<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{cfg["title_hi"]}</title>
  <meta name="description" content="{cfg["desc_hi"]}">
  <link rel="canonical" href="{canonical_url}">
  
  <meta property="og:title" content="{cfg["title_hi"]}">
  <meta property="og:description" content="{cfg["desc_hi"]}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">
  <meta name="twitter:card" content="summary_large_image">

  <link rel="icon" type="image/png" sizes="32x32" href="../assets/img/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/img/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/img/apple-touch-icon.png">
  <link rel="icon" href="../favicon.ico">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/module9.css">
  <link rel="stylesheet" href="../assets/css/module16.css">
  <link rel="stylesheet" href="../assets/css/module18.css">
  <link rel="stylesheet" href="../assets/css/share-widget.css">

  <style>
    /* Clean Bilingual Language Isolation */
    html[lang="hi"] [data-lang-show="en"] {{ display: none !important; }}
    html[lang="en"] [data-lang-show="hi"] {{ display: none !important; }}
    html[lang="hi"] span[data-lang-show="hi"] {{ display: inline !important; }}
    html[lang="en"] span[data-lang-show="en"] {{ display: inline !important; }}
    html[lang="hi"] div[data-lang-show="hi"], html[lang="hi"] p[data-lang-show="hi"], html[lang="hi"] h1[data-lang-show="hi"], html[lang="hi"] h2[data-lang-show="hi"], html[lang="hi"] h3[data-lang-show="hi"] {{ display: block !important; }}
    html[lang="en"] div[data-lang-show="en"], html[lang="en"] p[data-lang-show="en"], html[lang="en"] h1[data-lang-show="en"], html[lang="en"] h2[data-lang-show="en"], html[lang="en"] h3[data-lang-show="en"] {{ display: block !important; }}

    .exam-post-hero {{
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 32px 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }}
    .exam-post-hero h1 {{ font-size: 2.1rem; line-height: 1.3; margin: 10px 0 14px 0; color: var(--color-primary); }}
    .exam-post-hero p {{ font-size: 1.05rem; line-height: 1.7; color: var(--color-text); margin-bottom: 20px; }}

    /* Dark Mode Contrast Safety */
    [data-theme="dark"] .prob-box,
    [data-theme="dark"] .faq-item,
    [data-theme="dark"] .exam-post-hero {{
      background: #101D2C !important;
      border-color: #223244 !important;
      color: #E8EDF3 !important;
    }}
  </style>

  <script type="application/ld+json">
{schema_json}
  </script>
</head>
<body class="v2-template">
  <script>window.SS_ROOT = "../";</script>
  
  <div id="site-header">
{get_baked_header("../")}
  </div>

  <main class="container" style="max-width: 1000px; margin: 32px auto; padding: 0 16px;">
    
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb" style="font-size: 0.9rem; margin-bottom: 20px; color: var(--color-text-muted);">
      <a href="../index.html" style="color: var(--color-primary); text-decoration: none;">होम (Home)</a> &gt;
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">परीक्षा कैलेंडर</a> &gt;
      <span style="color: var(--color-text);">{cfg["post_name_hi"]}</span>
    </nav>

    <!-- HERO SECTION -->
    <div class="exam-post-hero">
      <div style="display: inline-block; background: {cfg['sector_color']}; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 0.82rem; margin-bottom: 8px;">
        🏛️ {cfg["org_hi"]}
      </div>
      <h1>{cfg["title_hi"]}</h1>
      <p>{cfg["desc_hi"]}</p>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px;">
        <a href="{cfg['job_url'] if cfg['job_url'] != '#' else cfg['official_portal']}" style="background: #059669; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 1rem; display: inline-flex; align-items: center; gap: 8px;">
          📋 { 'विस्तृत भर्ती अधिसूचना व ऑनलाइन आवेदन ↗' if cfg['job_url'] != '#' else 'ऑफिशियल पोर्टल ↗' }
        </a>
        <a href="{cfg['official_portal']}" target="_blank" rel="noopener noreferrer" style="background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 1rem;">
          🌐 आयोग आधिकारिक वेबसाइट ↗
        </a>
      </div>
    </div>

    <!-- IMPORTANT EXAM DATES -->
    <section style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 14px; padding: 24px; margin-bottom: 32px;">
      <h2 style="color: var(--color-primary); font-size: 1.45rem; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid var(--color-border); padding-bottom: 8px;">
        📅 महत्वपूर्ण परीक्षा तिथियां व सीबीटी टाइमटेबल
      </h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <tbody>
            {''.join(dates_rows)}
          </tbody>
        </table>
      </div>
    </section>

    <!-- 6 PROBLEMS -->
    <section style="margin: 44px 0;">
      <h2 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        🛠️ परीक्षार्थी सहायता केंद्र: 6 प्रमुख समस्याएं व समाधान
      </h2>
      {''.join(prob_html)}
    </section>

    <!-- 10 FAQS -->
    <section style="margin-bottom: 44px;">
      <h2 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        ❓ अक्सर पूछे जाने वाले सवाल (FAQs)
      </h2>
      {''.join(faq_items)}
    </section>

    <!-- CITIZEN TOOLS GRID -->
    <section style="margin-top: 40px; margin-bottom: 40px;">
      <h2 style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 20px; border-bottom: 2px solid var(--color-border); padding-bottom: 10px;">
        🧮 उपयोगी ऑनलाइन टूल्स
      </h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
        <a href="../tools/photo-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem;">🖼️ Photo Resizer</div>
          <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">20-50 KB फोटो बनाएं</p>
        </a>
        <a href="../tools/signature-resizer.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem;">✍️ Signature Resizer</div>
          <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">10-20 KB हस्ताक्षर क्रॉप करें</p>
        </a>
        <a href="../tools/document-compressor.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem;">📄 Document Compressor</div>
          <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">100-300 KB PDF कंप्रेस करें</p>
        </a>
        <a href="../tools/typing-speed-test.html" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px; text-decoration: none; color: var(--color-text);">
          <div style="font-size: 1.5rem;">⌨️ Typing Test</div>
          <p style="font-size: 0.82rem; color: var(--color-text-muted); margin: 4px 0 0 0;">35 WPM स्पीड अभ्यास करें</p>
        </a>
      </div>
    </section>

    <!-- SUBSCRIBE WIDGET -->
    <div id="subscribe-widget" data-service-id="{cfg['slug']}" style="margin: 40px 0;"></div>

    <!-- VIP TELEGRAM BANNER -->
    <div style="background: linear-gradient(135deg, #0088cc 0%, #005580 100%); border-radius: 14px; padding: 24px; color: #ffffff; text-align: center; margin: 32px 0;">
      <span style="font-size: 2rem; display: block; margin-bottom: 6px;">✈️</span>
      <h3 style="font-size: 1.3rem; margin: 0 0 8px 0; color: #ffffff;">SarkariSewa VIP Telegram चैनल</h3>
      <p style="font-size: 0.92rem; color: #e0f2fe; margin: 0 auto 16px auto;">तुरंत एडमिट कार्ड व परीक्षा नोटिस के अलर्ट्स प्राप्त करें।</p>
      <a href="https://t.me/sarkarisewaindia" target="_blank" rel="noopener noreferrer" style="background: #ffffff; color: #0088cc; font-weight: 700; padding: 10px 24px; border-radius: 20px; text-decoration: none; display: inline-block;">
        Join Telegram VIP ↗
      </a>
    </div>

  </main>

  <div id="site-footer">
{get_baked_footer("../")}
  </div>

  <script src="../assets/js/main.js"></script>
  <script src="../assets/js/consent.js"></script>
  <script src="../assets/js/i18n-helper.js"></script>
  <script src="../assets/js/subscribe.js"></script>
  <script src="../assets/js/share-widget.js"></script>
</body>
</html>
"""

def generate_exam_dynamic_fallback():
    cfg = {
        "slug": "exam",
        "sector": "All India",
        "sector_color": "#2563eb",
        "title_hi": "सरकारी परीक्षा कैलेंडर 2026-2027: SSC, UPSC, Railway, Banking परीक्षा तिथियां",
        "title_en": "Govt Exam Calendar 2026-2027: SSC, UPSC, Railway, Banking Schedule",
        "desc_hi": "भारत की सभी राष्ट्रीय एवं राज्य स्तरीय सरकारी भर्ती परीक्षाओं का प्रामाणिक परीक्षा कैलेंडर, एडमिट कार्ड, परीक्षा तिथियां व पात्रता नियम।",
        "desc_en": "Complete national schedule for all government examinations 2026-2027: SSC, UPSC, Railway, Banking, and State PSCs.",
        "org_hi": "समस्त सरकारी भर्ती आयोग (All Govt Recruitment Commissions)",
        "org_en": "All Government Recruitment Commissions",
        "post_name_hi": "सरकारी परीक्षा विवरण व टाइमटेबल",
        "post_name_en": "Government Examination Schedule & Timetable",
        "vacancies": "1,50,000+ Posts",
        "dates": [
            ("एसएससी CGL 2026 टियर-1 परीक्षा", "08 से 26 सितंबर 2026"),
            ("यूपीएससी सिविल सेवा प्रारंभिक परीक्षा 2026", "24 मई 2026"),
            ("रेलवे एनटीपीसी अंडरग्रेजुएट CBT-1", "12 से 24 जनवरी 2027"),
            ("आईबीपीएस पीओ XVI मुख्य परीक्षा", "30 नवंबर 2026"),
            ("एसबीआई पीओ 2026 प्रीलिम्स परीक्षा", "01 से 03 नवंबर 2026")
        ],
        "job_url": "index.html",
        "official_portal": "https://ssc.gov.in"
    }
    return generate_exam_post_html("exam.html", cfg)


def run():
    print("Upgrading Exam Calendar Directory...")
    
    # 1. Master Hub
    index_path = os.path.join(EXAMS_DIR, "index.html")
    index_html = generate_exam_hub_html()
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(index_html)
    print(f"Master Upgraded: exams/index.html | {len(index_html)/1024:.1f} KB")

    # 2. Annual Commission Hubs
    for filename, cfg in ANNUAL_HUBS.items():
        p = os.path.join(EXAMS_DIR, filename)
        h = generate_annual_hub_html(filename, cfg)
        with open(p, "w", encoding="utf-8") as f:
            f.write(h)
        print(f"Master Upgraded: exams/{filename} | {len(h)/1024:.1f} KB")

    # 3. Individual Exam Posts
    for filename, cfg in INDIVIDUAL_EXAM_PAGES.items():
        p = os.path.join(EXAMS_DIR, filename)
        h = generate_exam_post_html(filename, cfg)
        with open(p, "w", encoding="utf-8") as f:
            f.write(h)
        print(f"Master Upgraded: exams/{filename} | {len(h)/1024:.1f} KB")

    # 4. Universal Fallback
    fallback_path = os.path.join(EXAMS_DIR, "exam.html")
    fb_html = generate_exam_dynamic_fallback()
    with open(fallback_path, "w", encoding="utf-8") as f:
        f.write(fb_html)
    print(f"Master Upgraded: exams/exam.html | {len(fb_html)/1024:.1f} KB")

    print("SUCCESS: Upgraded all exam calendar pages!")

if __name__ == '__main__':
    run()


