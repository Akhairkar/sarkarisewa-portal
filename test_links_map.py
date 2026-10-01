import os
import glob
import re
import json
from bs4 import BeautifulSoup

# Official portal URLs mapping for high traffic & state scheme pages
official_links_map = {
    "pan-card.html": [
        {"name": "Protean (NSDL) PAN Portal", "url": "https://www.protean-tinpan.com/services/pan/pan-index.html"},
        {"name": "UTIITSL PAN Portal", "url": "https://www.utiitsl.com/PAN/pan.html"},
        {"name": "Income Tax e-Filing Portal", "url": "https://www.incometax.gov.in"}
    ],
    "passport.html": [
        {"name": "Passport Seva Official Portal", "url": "https://www.passportindia.gov.in/"}
    ],
    "voter-id-card.html": [
        {"name": "ECI Voters' Services Portal (NVSP)", "url": "https://voters.eci.gov.in/"}
    ],
    "ration-card.html": [
        {"name": "National Food Security Portal (NFSA)", "url": "https://nfsa.gov.in/"}
    ],
    "pm-kisan.html": [
        {"name": "PM Kisan Samman Nidhi Portal", "url": "https://pmkisan.gov.in/"}
    ],
    "pm-awas-yojana.html": [
        {"name": "PMAY Urban Portal", "url": "https://pmaymis.gov.in/"},
        {"name": "PMAY Gramin Portal", "url": "https://pmayg.nic.in/"}
    ],
    "ayushman-bharat.html": [
        {"name": "Ayushman Bharat PM-JAY Beneficiary Portal", "url": "https://beneficiary.nha.gov.in/"}
    ],
    "digilocker.html": [
        {"name": "DigiLocker Official Portal", "url": "https://www.digilocker.gov.in/"}
    ],
    "epfo.html": [
        {"name": "EPFO Member Passbook & UAN Portal", "url": "https://unifiedportal-mem.epfindia.gov.in/memberinterface/"}
    ],
    "smart-card-driving-license.html": [
        {"name": "Sarathi Parivahan Official Portal", "url": "https://sarathi.parivahan.gov.in/"}
    ],
    "arunachal-cmaay-scheme.html": [{"name": "CMAAY Portal", "url": "https://cmaay.arunachal.gov.in/"}],
    "arunachal-deen-dayal-upadhyaya-bunkar-yojana.html": [{"name": "Arunachal Govt Portal", "url": "https://arunachalpradesh.gov.in/"}],
    "arunachal-dulari-kanya-scheme.html": [{"name": "Arunachal Health & Family Welfare", "url": "https://arunachalpradesh.gov.in/"}],
    "goa-dayanand-social-security-scheme--dsss-.html": [{"name": "Goa Online Services", "url": "https://goaonline.gov.in/"}],
    "goa-deen-dayal-swasthya-seva-yojana--ddssy-.html": [{"name": "DDSSY Portal Goa", "url": "https://goaonline.gov.in/"}],
    "goa-griha-aadhar-scheme.html": [{"name": "Goa Online Portal", "url": "https://goaonline.gov.in/"}],
    "hp-himcare-scheme.html": [{"name": "HIMCARE Health Portal", "url": "https://www.hpsbys.in/"}],
    "hp-mukhya-mantri-swawalamban-yojana.html": [{"name": "MMSY HP Portal", "url": "https://mmsy.hp.gov.in/"}],
    "hp-sahara-yojana.html": [{"name": "HP Sahara Portal", "url": "https://hpsahara.hp.gov.in/"}],
    "india-post-gds-recruitment-2026.html": [{"name": "India Post GDS Online Portal", "url": "https://indiapostgdsonline.gov.in/"}],
    "indian-navy-agniveer-ssr-recruitment-2026.html": [{"name": "Join Indian Navy Official", "url": "https://www.joinindiannavy.gov.in/"}],
    "manipur-chief-minister-widow-pension-scheme.html": [{"name": "Manipur Social Welfare", "url": "https://manipur.gov.in/"}],
    "manipur-cmht-scheme.html": [{"name": "CMHT Manipur Health Portal", "url": "https://cmhtmanipur.gov.in/"}],
    "manipur-lairik-yengminnasi-scheme.html": [{"name": "Manipur Education Portal", "url": "https://manipur.gov.in/"}],
    "meghalaya-focus-scheme.html": [{"name": "Meghalaya FOCUS Portal", "url": "https://focus.meghalaya.gov.in/"}],
    "meghalaya-mhis-scheme.html": [{"name": "Meghalaya MHIS Portal", "url": "https://mhis.org.in/"}],
    "meghalaya-yess-meghalaya.html": [{"name": "YESS Meghalaya Portal", "url": "https://yessmeghalaya.in/"}],
    "mizoram-bpl-housing-scheme.html": [{"name": "Mizoram UD&PA Portal", "url": "https://mizoram.gov.in/"}],
    "mizoram-chief-minister-rural-housing-scheme.html": [{"name": "Mizoram Rural Development", "url": "https://mizoram.gov.in/"}],
    "mizoram-sedp-policy.html": [{"name": "Mizoram SEDP Portal", "url": "https://sedp.mizoram.gov.in/"}],
    "nagaland-chief-minister-micro-finance-initiative.html": [{"name": "Nagaland CMMFI Portal", "url": "https://cmmfi.nagaland.gov.in/"}],
    "nagaland-cmhis-scheme.html": [{"name": "Nagaland CMHIS Health Portal", "url": "https://cmhis.nagaland.gov.in/"}],
    "nagaland-nagaland-health-project.html": [{"name": "Nagaland Health Project (NHP)", "url": "https://nhp.nagaland.gov.in/"}],
    "rbi-grade-b-officer-recruitment-2026.html": [{"name": "RBI Official Opportunities Portal", "url": "https://www.rbi.org.in/"}],
    "sikkim-aama-yojana.html": [{"name": "Sikkim Social Welfare", "url": "https://sikkim.gov.in/"}],
    "sikkim-sgay-yojana.html": [{"name": "Sikkim Garib Awas Yojana", "url": "https://sikkim.gov.in/"}],
    "sikkim-vatsalya-yojana.html": [{"name": "Sikkim Health & Family Welfare", "url": "https://sikkim.gov.in/"}],
    "ssc-cgl-recruitment-2026.html": [{"name": "Staff Selection Commission (SSC)", "url": "https://ssc.gov.in/"}],
    "tripura-mukhyamantri-matru-pushti-uphaar.html": [{"name": "Tripura Social Welfare", "url": "https://tripura.gov.in/"}],
    "tripura-vande-tripura.html": [{"name": "Vande Tripura Education Channel", "url": "https://tripura.gov.in/"}],
    "tripura-yuba-yogayog-yojana.html": [{"name": "BMS Tripura Portal", "url": "https://bms.tripura.gov.in/"}],
    "upsc-cse-recruitment-2027.html": [{"name": "UPSC Official Portal", "url": "https://upsc.gov.in/"}],
    "itr-penalty-calculator.html": [{"name": "Income Tax e-Filing Late Filing Portal", "url": "https://www.incometax.gov.in/"}],
    "mpbcdc-direct-loan-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "mpbcdc-seed-capital-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "mpbcdc-subsidy-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "mpbcdc-yojana.html": [{"name": "MPBCDC Official Portal", "url": "https://mpbcdc.maharashtra.gov.in/"}],
    "pan-aadhaar-conflict-resolver.html": [{"name": "Income Tax e-Filing Link Aadhaar Portal", "url": "https://www.incometax.gov.in/iec/foportal/"}]
}

print(f"Loaded {len(official_links_map)} official links mappings.")
