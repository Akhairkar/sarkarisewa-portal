import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Complete official portals and metadata for all 36 States & UTs of India
STATES_DATA_36 = {
    "andaman-nicobar": {
        "slug": "andaman-nicobar",
        "name": {"en": "Andaman and Nicobar Islands", "hi": "अंडमान और निकोबार द्वीप समूह"},
        "type": "UT",
        "icon": "🏝️",
        "capital": {"en": "Port Blair", "hi": "पोर्ट ब्लेयर"},
        "officialPortal": {
            "label": {"en": "e-District Andaman & Nicobar Administration", "hi": "ई-डिस्ट्रिक्ट अंडमान एवं निकोबार प्रशासन"},
            "url": "https://edistrict.andaman.gov.in"
        },
        "intro": {
            "en": "Andaman and Nicobar Administration provides citizen certificates, revenue records, and welfare services through its official e-District portal.",
            "hi": "अंडमान और निकोबार प्रशासन अपने आधिकारिक ई-डिस्ट्रिक्ट पोर्टल के माध्यम से नागरिक प्रमाण पत्र, राजस्व रिकॉर्ड और कल्याणकारी सेवाएं प्रदान करता है।"
        }
    },
    "andhra-pradesh": {
        "slug": "andhra-pradesh",
        "name": {"en": "Andhra Pradesh", "hi": "आंध्र प्रदेश"},
        "type": "State",
        "icon": "🏛️",
        "capital": {"en": "Amaravati", "hi": "अमरावती"},
        "officialPortal": {
            "label": {"en": "MeeSeva Andhra Pradesh Portal", "hi": "मीसेवा आंध्र प्रदेश आधिकारिक पोर्टल"},
            "url": "https://meeseva.gov.in"
        },
        "intro": {
            "en": "Andhra Pradesh delivers citizen services, certificates, and welfare schemes via MeeSeva and the Navasakam beneficiary portal.",
            "hi": "आंध्र प्रदेश सरकार मीसेवा और नवशकम पोर्टल के माध्यम से नागरिक सेवाएं, प्रमाण पत्र और कल्याणकारी योजनाएं प्रदान करती है।"
        }
    },
    "arunachal-pradesh": {
        "slug": "arunachal-pradesh",
        "name": {"en": "Arunachal Pradesh", "hi": "अरुणाचल प्रदेश"},
        "type": "State",
        "icon": "🏔️",
        "capital": {"en": "Itanagar", "hi": "ईटानगर"},
        "officialPortal": {
            "label": {"en": "Service Plus Arunachal Pradesh", "hi": "सर्विस प्लस अरुणाचल प्रदेश"},
            "url": "https://eservice.arunachal.gov.in"
        },
        "intro": {
            "en": "Government of Arunachal Pradesh provides online certificates, inner line permits (ILP), and welfare schemes via the ServicePlus e-Services portal.",
            "hi": "अरुणाचल प्रदेश सरकार सर्विसप्लस ई-सेवा पोर्टल के माध्यम से ऑनलाइन प्रमाण पत्र, इनर लाइन परमिट (आईएलपी) और कल्याणकारी योजनाएं प्रदान करती है।"
        }
    },
    "assam": {
        "slug": "assam",
        "name": {"en": "Assam", "hi": "असम"},
        "type": "State",
        "icon": "🦏",
        "capital": {"en": "Dispur", "hi": "दिसपुर"},
        "officialPortal": {
            "label": {"en": "Sewa Setu Assam (Citizen Portal)", "hi": "सेवा सेतु असम (नागरिक पोर्टल)"},
            "url": "https://sewasetu.assam.gov.in"
        },
        "intro": {
            "en": "Assam Government's Sewa Setu portal offers seamless access to 500+ citizen services including caste, income, and domicile certificates.",
            "hi": "असम सरकार का सेवा सेतु पोर्टल जाति, आय और निवास प्रमाण पत्र सहित 500 से अधिक नागरिक सेवाएं ऑनलाइन उपलब्ध कराता है।"
        }
    },
    "bihar": {
        "slug": "bihar",
        "name": {"en": "Bihar", "hi": "बिहार"},
        "type": "State",
        "icon": "🌾",
        "capital": {"en": "Patna", "hi": "पटना"},
        "officialPortal": {
            "label": {"en": "RTPS Bihar (Right to Public Services)", "hi": "आरटीपीएस बिहार (लोक सेवाओं का अधिकार)"},
            "url": "https://serviceonline.bihar.gov.in"
        },
        "intro": {
            "en": "Bihar RTPS ServiceOnline portal allows citizens to apply for caste, income, domicile certificates and ration cards with instant verification.",
            "hi": "बिहार आरटीपीएस सर्विसऑनलाइन पोर्टल नागरिकों को जाति, आय, निवास प्रमाण पत्र और राशन कार्ड के ऑनलाइन आवेदन की सुविधा देता है।"
        }
    },
    "chandigarh": {
        "slug": "chandigarh",
        "name": {"en": "Chandigarh", "hi": "चंडीगढ़"},
        "type": "UT",
        "icon": "🏙️",
        "capital": {"en": "Chandigarh", "hi": "चंडीगढ़"},
        "officialPortal": {
            "label": {"en": "e-District Chandigarh Administration", "hi": "ई-डिस्ट्रिक्ट चंडीगढ़ प्रशासन"},
            "url": "https://chdservices.gov.in"
        },
        "intro": {
            "en": "Chandigarh Administration provides centralized public utilities, resident certificates, and welfare applications via CHD Services.",
            "hi": "चंडीगढ़ प्रशासन सीएचडी सर्विसेज पोर्टल के माध्यम से नागरिक प्रमाण पत्र, सामाजिक सुरक्षा और सार्वजनिक सेवाएं प्रदान करता है।"
        }
    },
    "chhattisgarh": {
        "slug": "chhattisgarh",
        "name": {"en": "Chhattisgarh", "hi": "छत्तीसगढ़"},
        "type": "State",
        "icon": "🌳",
        "capital": {"en": "Raipur", "hi": "रायपुर"},
        "officialPortal": {
            "label": {"en": "e-District Chhattisgarh (e-Chhawni / Lok Seva Kendra)", "hi": "ई-डिस्ट्रिक्ट छत्तीसगढ़ (लोक सेवा केंद्र)"},
            "url": "https://edistrict.cgstate.gov.in"
        },
        "intro": {
            "en": "Chhattisgarh e-District portal enables online application for domicile, caste, income certificates and revenue records via Lok Seva Kendras.",
            "hi": "छत्तीसगढ़ ई-डिस्ट्रिक्ट पोर्टल लोक सेवा केंद्रों के माध्यम से निवास, जाति, आय प्रमाण पत्र और भू-अभिलेख की ऑनलाइन सुविधा देता है।"
        }
    },
    "dadra-nagar-haveli-daman-diu": {
        "slug": "dadra-nagar-haveli-daman-diu",
        "name": {"en": "Dadra and Nagar Haveli and Daman and Diu", "hi": "दादरा और नगर हवेली एवं दमन और दीव"},
        "type": "UT",
        "icon": "🏖️",
        "capital": {"en": "Daman", "hi": "दमन"},
        "officialPortal": {
            "label": {"en": "e-District DNH & Daman Diu Administration", "hi": "ई-डिस्ट्रिक्ट डीएनएच एवं दमन दीव प्रशासन"},
            "url": "https://edistrict.dd.gov.in"
        },
        "intro": {
            "en": "Online public services, residency certificates, birth/death records, and welfare schemes for Dadra & Nagar Haveli and Daman & Diu.",
            "hi": "दादरा एवं नगर हवेली और दमन व दीव के नागरिकों के लिए ऑनलाइन प्रमाण पत्र, राशन कार्ड और कल्याणकारी योजनाओं का आधिकारिक पोर्टल।"
        }
    },
    "delhi": {
        "slug": "delhi",
        "name": {"en": "Delhi (NCT)", "hi": "दिल्ली (राष्ट्रीय राजधानी क्षेत्र)"},
        "type": "UT",
        "icon": "🏛️",
        "capital": {"en": "New Delhi", "hi": "नई दिल्ली"},
        "officialPortal": {
            "label": {"en": "e-District Delhi Portal (Govt of NCT of Delhi)", "hi": "ई-डिस्ट्रिक्ट दिल्ली पोर्टल (दिल्ली सरकार)"},
            "url": "https://edistrict.delhigovt.nic.in"
        },
        "intro": {
            "en": "Delhi e-District offers 100+ doorstep delivery services, caste certificates, domicile certificates, pension schemes, and revenue records.",
            "hi": "दिल्ली ई-डिस्ट्रिक्ट पोर्टल जाति, आय, निवास प्रमाण पत्र, वृद्धावस्था पेंशन और डोरस्टेप डिलीवरी सेवाएं ऑनलाइन उपलब्ध कराता है।"
        }
    },
    "goa": {
        "slug": "goa",
        "name": {"en": "Goa", "hi": "गोवा"},
        "type": "State",
        "icon": "🌴",
        "capital": {"en": "Panaji", "hi": "पणजी"},
        "officialPortal": {
            "label": {"en": "Goa Online Citizen Services Portal", "hi": "गोवा ऑनलाइन नागरिक सेवा पोर्टल"},
            "url": "https://goaonline.gov.in"
        },
        "intro": {
            "en": "Goa Online delivers integrated government services including residence certificates, caste verification, and Dayanand Samajik Suraksha Yojana.",
            "hi": "गोवा ऑनलाइन पोर्टल निवास प्रमाण पत्र, जाति सत्यापन और दयानंद सामाजिक सुरक्षा योजना सहित विभिन्न नागरिक सेवाएं प्रदान करता है।"
        }
    },
    "gujarat": {
        "slug": "gujarat",
        "name": {"en": "Gujarat", "hi": "गुजरात"},
        "type": "State",
        "icon": "🦁",
        "capital": {"en": "Gandhinagar", "hi": "गांधीनगर"},
        "officialPortal": {
            "label": {"en": "Digital Gujarat Portal", "hi": "डिजिटल गुजरात आधिकारिक पोर्टल"},
            "url": "https://www.digitalgujarat.gov.in"
        },
        "intro": {
            "en": "Digital Gujarat provides comprehensive e-services including caste certificates, income certificates, AnyROR 7/12 land records, and scholarships.",
            "hi": "डिजिटल गुजरात पोर्टल जाति, आय प्रमाण पत्र, AnyROR 7/12 भू-अभिलेख और छात्रवृत्ति योजनाओं की ऑनलाइन सेवा उपलब्ध कराता है।"
        }
    },
    "haryana": {
        "slug": "haryana",
        "name": {"en": "Haryana", "hi": "हरियाणा"},
        "type": "State",
        "icon": "🌾",
        "capital": {"en": "Chandigarh", "hi": "चंडीगढ़"},
        "officialPortal": {
            "label": {"en": "Saral Haryana Portal (Parivar Pehchan Patra)", "hi": "सरल हरियाणा पोर्टल (परिवार पहचान पत्र)"},
            "url": "https://saralharyana.gov.in"
        },
        "intro": {
            "en": "Saral Haryana and Parivar Pehchan Patra (PPP) integrate 600+ state government schemes and certificates in one single digital window.",
            "hi": "सरल हरियाणा और परिवार पहचान पत्र (PPP) पोर्टल के माध्यम से 600 से अधिक राज्य योजनाएं और प्रमाण पत्र एक ही जगह मिलते हैं।"
        }
    },
    "himachal-pradesh": {
        "slug": "himachal-pradesh",
        "name": {"en": "Himachal Pradesh", "hi": "हिमाचल प्रदेश"},
        "type": "State",
        "icon": "🏔️",
        "capital": {"en": "Shimla", "hi": "शिमला"},
        "officialPortal": {
            "label": {"en": "e-District Himachal Pradesh (e-HimSeva)", "hi": "ई-डिस्ट्रिक्ट हिमाचल प्रदेश (ई-हिमसेवा)"},
            "url": "https://edistrict.hp.gov.in"
        },
        "intro": {
            "en": "Himachal Pradesh e-District facilitates online issuance of bonafide certificates, income certificates, BPL certificates, and revenue extracts.",
            "hi": "हिमाचल प्रदेश ई-डिस्ट्रिक्ट पोर्टल बोनाफाइड (स्थायी निवास), आय प्रमाण पत्र, बीपीएल प्रमाण पत्र और राजस्व नकल ऑनलाइन प्रदान करता है।"
        }
    },
    "jammu-kashmir": {
        "slug": "jammu-kashmir",
        "name": {"en": "Jammu and Kashmir", "hi": "जम्मू और कश्मीर"},
        "type": "UT",
        "icon": "🏔️",
        "capital": {"en": "Srinagar / Jammu", "hi": "श्रीनगर / जम्मू"},
        "officialPortal": {
            "label": {"en": "e-UNNAT Jammu & Kashmir (Jan Sugam)", "hi": "ई-उन्नत जम्मू और कश्मीर (जन सुगम)"},
            "url": "https://eunnat.jk.gov.in"
        },
        "intro": {
            "en": "e-UNNAT portal is J&K's unified digital platform delivering domicile certificates, revenue extracts, and social security pensions.",
            "hi": "ई-उन्नत पोर्टल जम्मू-कश्मीर का एकीकृत डिजिटल मंच है जो डोमिसाइल प्रमाण पत्र, राजस्व रिकॉर्ड और सामाजिक सुरक्षा पेंशन प्रदान करता है।"
        }
    },
    "jharkhand": {
        "slug": "jharkhand",
        "name": {"en": "Jharkhand", "hi": "झारखंड"},
        "type": "State",
        "icon": "🌲",
        "capital": {"en": "Ranchi", "hi": "राँची"},
        "officialPortal": {
            "label": {"en": "JharSewa Jharkhand Portal", "hi": "झारसेवा झारखंड आधिकारिक पोर्टल"},
            "url": "https://jharsewa.jharkhand.gov.in"
        },
        "intro": {
            "en": "JharSewa portal provides online application for caste, residential, income certificates, social security pensions, and Jharbhoomi land records.",
            "hi": "झारसेवा पोर्टल जाति, आवासीय, आय प्रमाण पत्र, सामाजिक सुरक्षा पेंशन और झारभूमि रिकॉर्ड ऑनलाइन प्रदान करता है।"
        }
    },
    "karnataka": {
        "slug": "karnataka",
        "name": {"en": "Karnataka", "hi": "कर्नाटक"},
        "type": "State",
        "icon": "🐘",
        "capital": {"en": "Bengaluru", "hi": "बेंगलुरु"},
        "officialPortal": {
            "label": {"en": "Seva Sindhu Karnataka Portal", "hi": "सेवा सिंधु कर्नाटक पोर्टल"},
            "url": "https://sevasindhu.karnataka.gov.in"
        },
        "intro": {
            "en": "Seva Sindhu Karnataka is the single digital gateway for Gruha Lakshmi, Gruha Jyothi, caste/income certificates, and Bhoomi RTC land records.",
            "hi": "सेवा सिंधु कर्नाटक गृह लक्ष्मी, गृह ज्योति, जाति/आय प्रमाण पत्र और भूमि आरटीसी रिकॉर्ड के लिए एकीकृत सरकारी मंच है।"
        }
    },
    "kerala": {
        "slug": "kerala",
        "name": {"en": "Kerala", "hi": "केरल"},
        "type": "State",
        "icon": "🌴",
        "capital": {"en": "Thiruvananthapuram", "hi": "तिरुवनंतपुरम"},
        "officialPortal": {
            "label": {"en": "e-District Kerala (Sevana Portal)", "hi": "ई-डिस्ट्रिक्ट केरल (सेवना पोर्टल)"},
            "url": "https://edistrict.kerala.gov.in"
        },
        "intro": {
            "en": "e-District Kerala and Sevana provide online certificates, nativity/caste certificates, social welfare pensions, and civil registration records.",
            "hi": "ई-डिस्ट्रिक्ट केरल और सेवना पोर्टल निवास, जाति प्रमाण पत्र, सामाजिक कल्याण पेंशन और नागरिक पंजीकरण सुविधाएं प्रदान करते हैं।"
        }
    },
    "ladakh": {
        "slug": "ladakh",
        "name": {"en": "Ladakh", "hi": "लद्दाख"},
        "type": "UT",
        "icon": "🏔️",
        "capital": {"en": "Leh", "hi": "लेह"},
        "officialPortal": {
            "label": {"en": "e-District Ladakh Administration", "hi": "ई-डिस्ट्रिक्ट लद्दाख प्रशासन"},
            "url": "https://edistrict.ladakh.gov.in"
        },
        "intro": {
            "en": "Ladakh Administration delivers online resident certificates, ST certificates, revenue extracts, and welfare schemes via ServicePlus e-District.",
            "hi": "लद्दाख प्रशासन सर्विसप्लस ई-डिस्ट्रिक्ट के माध्यम से निवासी प्रमाण पत्र, एसटी प्रमाण पत्र और कल्याणकारी योजनाएं उपलब्ध कराता है।"
        }
    },
    "lakshadweep": {
        "slug": "lakshadweep",
        "name": {"en": "Lakshadweep", "hi": "लक्षद्वीप"},
        "type": "UT",
        "icon": "🏝️",
        "capital": {"en": "Kavaratti", "hi": "कवरत्ती"},
        "officialPortal": {
            "label": {"en": "e-District Lakshadweep Administration", "hi": "ई-डिस्ट्रिक्ट लक्षद्वीप प्रशासन"},
            "url": "https://edistrict.lakshadweep.gov.in"
        },
        "intro": {
            "en": "Lakshadweep Administration provides public service delivery, ST certificates, domicile verification, and welfare benefits online.",
            "hi": "लक्षद्वीप प्रशासन ऑनलाइन लोक सेवा वितरण, एसटी प्रमाण पत्र, निवास सत्यापन और कल्याणकारी योजनाओं की सुविधा देता है।"
        }
    },
    "madhya-pradesh": {
        "slug": "madhya-pradesh",
        "name": {"en": "Madhya Pradesh", "hi": "मध्य प्रदेश"},
        "type": "State",
        "icon": "🐅",
        "capital": {"en": "Bhopal", "hi": "भोपाल"},
        "officialPortal": {
            "label": {"en": "MP e-District (MP e-Seva / Samagra Portal)", "hi": "एमपी ई-डिस्ट्रिक्ट (समग्र पोर्टल / लोक सेवा केंद्र)"},
            "url": "https://mpedistrict.gov.in"
        },
        "intro": {
            "en": "MP e-District and Samagra Portal provide Ladli Behna Yojana, Ladli Laxmi, domicile/income certificates, and MP Bhulekh land records.",
            "hi": "एमपी ई-डिस्ट्रिक्ट और समग्र पोर्टल लाडली बहना, लाडली लक्ष्मी, मूल निवासी/आय प्रमाण पत्र और एमपी भूलेख रिकॉर्ड उपलब्ध कराते हैं।"
        }
    },
    "maharashtra": {
        "slug": "maharashtra",
        "name": {"en": "Maharashtra", "hi": "महाराष्ट्र"},
        "type": "State",
        "icon": "🏙️",
        "capital": {"en": "Mumbai", "hi": "मुंबई"},
        "officialPortal": {
            "label": {"en": "Aaple Sarkar Maharashtra Portal", "hi": "आपले सरकार महाराष्ट्र शासन"},
            "url": "https://aaplesarkar.mahaonline.gov.in"
        },
        "intro": {
            "en": "Aaple Sarkar and Mahabhulekh provide Ladki Bahin Yojana, 7/12 extract, caste, domicile certificates, and construction worker schemes.",
            "hi": "आपले सरकार और महाभूलेख पोर्टल लाडकी बहीण योजना, 7/12 उतारा, जाति, निवास प्रमाण पत्र और बांधकाम कामगार योजनाएं प्रदान करते हैं।"
        }
    },
    "manipur": {
        "slug": "manipur",
        "name": {"en": "Manipur", "hi": "मणिपुर"},
        "type": "State",
        "icon": "🌺",
        "capital": {"en": "Imphal", "hi": "इंफाल"},
        "officialPortal": {
            "label": {"en": "e-District Manipur Portal", "hi": "ई-डिस्ट्रिक्ट मणिपुर पोर्टल"},
            "url": "https://eservicesmanipur.gov.in"
        },
        "intro": {
            "en": "Government of Manipur provides online certificates, CMHT health scheme, widow pensions, and educational support through e-Services Manipur.",
            "hi": "मणिपुर सरकार ई-सर्विसेज पोर्टल के माध्यम से ऑनलाइन प्रमाण पत्र, सीएमएचटी स्वास्थ्य योजना और छात्रवृत्ति योजनाएं प्रदान करती है।"
        }
    },
    "meghalaya": {
        "slug": "meghalaya",
        "name": {"en": "Meghalaya", "hi": "मेघालय"},
        "type": "State",
        "icon": "☁️",
        "capital": {"en": "Shillong", "hi": "शिलांग"},
        "officialPortal": {
            "label": {"en": "e-District Meghalaya (ServicePlus)", "hi": "ई-डिस्ट्रिक्ट मेघालय (सर्विसप्लस)"},
            "url": "https://megedistrict.gov.in"
        },
        "intro": {
            "en": "Meghalaya e-District provides online access to MHIS health insurance, FOCUS farmer scheme, ST/PRC certificates, and YESS Meghalaya youth grants.",
            "hi": "मेघालय ई-डिस्ट्रिक्ट पोर्टल एमएचआईएस स्वास्थ्य बीमा, फोकस योजना, एसटी/पीआरसी प्रमाण पत्र और युवा अनुदान योजनाएं ऑनलाइन देता है।"
        }
    },
    "mizoram": {
        "slug": "mizoram",
        "name": {"en": "Mizoram", "hi": "मिज़ोरम"},
        "type": "State",
        "icon": "🌄",
        "capital": {"en": "Aizawl", "hi": "आइजोल"},
        "officialPortal": {
            "label": {"en": "e-District Mizoram Portal", "hi": "ई-डिस्ट्रिक्ट मिज़ोरम पोर्टल"},
            "url": "https://edistrict.mizoram.gov.in"
        },
        "intro": {
            "en": "Mizoram e-District facilitates online application for residential certificates, tribal certificates, SEDP policy grants, and rural housing schemes.",
            "hi": "मिज़ोरम ई-डिस्ट्रिक्ट पोर्टल आवासीय प्रमाण पत्र, जनजातीय प्रमाण पत्र, एसईडीपी अनुदान और ग्रामीण आवास योजनाएं ऑनलाइन उपलब्ध कराता है।"
        }
    },
    "nagaland": {
        "slug": "nagaland",
        "name": {"en": "Nagaland", "hi": "नागालैंड"},
        "type": "State",
        "icon": "🏔️",
        "capital": {"en": "Kohima", "hi": "कोहिमा"},
        "officialPortal": {
            "label": {"en": "e-District Nagaland Portal", "hi": "ई-डिस्ट्रिक्ट नागालैंड पोर्टल"},
            "url": "https://edistrict.nagaland.gov.in"
        },
        "intro": {
            "en": "Nagaland e-District delivers indigenous inhabitant certificates, scheduled tribe certificates, CMHIS health cards, and microfinance schemes.",
            "hi": "नागालैंड ई-डिस्ट्रिक्ट पोर्टल मूल निवासी प्रमाण पत्र, एसटी प्रमाण पत्र, सीएमएचआईएस स्वास्थ्य कार्ड और माइक्रोफाइनेंस योजनाएं प्रदान करता है।"
        }
    },
    "odisha": {
        "slug": "odisha",
        "name": {"en": "Odisha", "hi": "ओडिशा"},
        "type": "State",
        "icon": "🛕",
        "capital": {"en": "Bhubaneswar", "hi": "भुवनेश्वर"},
        "officialPortal": {
            "label": {"en": "Odisha e-District (Odisha e-Governance Services)", "hi": "ओडिशा ई-डिस्ट्रिक्ट पोर्टल"},
            "url": "https://edistrict.odisha.gov.in"
        },
        "intro": {
            "en": "Odisha e-District and Subhadra Yojana portal provide caste, residence, income certificates, land records (Bhulekh Odisha), and welfare DBT.",
            "hi": "ओडिशा ई-डिस्ट्रिक्ट और सुभद्रा योजना पोर्टल जाति, निवास, आय प्रमाण पत्र, भूलेख ओडिशा और महिला सशक्तिकरण लाभ ऑनलाइन उपलब्ध कराते हैं।"
        }
    },
    "puducherry": {
        "slug": "puducherry",
        "name": {"en": "Puducherry", "hi": "पुदुचेरी"},
        "type": "UT",
        "icon": "🏖️",
        "capital": {"en": "Puducherry", "hi": "पुदुचेरी"},
        "officialPortal": {
            "label": {"en": "e-District Puducherry Administration", "hi": "ई-डिस्ट्रिक्ट पुदुचेरी प्रशासन"},
            "url": "https://edistrict.py.gov.in"
        },
        "intro": {
            "en": "Puducherry e-District offers online issuance of nationality, nativity, income, community certificates, and social welfare pensions.",
            "hi": "पुदुचेरी ई-डिस्ट्रिक्ट पोर्टल राष्ट्रीयता, निवास, आय, समुदाय प्रमाण पत्र और सामाजिक सुरक्षा पेंशन ऑनलाइन प्रदान करता है।"
        }
    },
    "punjab": {
        "slug": "punjab",
        "name": {"en": "Punjab", "hi": "पंजाब"},
        "type": "State",
        "icon": "🌾",
        "capital": {"en": "Chandigarh", "hi": "चंडीगढ़"},
        "officialPortal": {
            "label": {"en": "e-Sewa Punjab Portal (Connect Punjab)", "hi": "ई-सेवा पंजाब पोर्टल (कनेक्ट पंजाब)"},
            "url": "https://connect.punjab.gov.in"
        },
        "intro": {
            "en": "e-Sewa Punjab delivers 400+ online citizen services including Ashirwad Scheme, residence certificates, caste certificates, and Jamabandi land records.",
            "hi": "ई-सेवा पंजाब पोर्टल आशीर्वाद योजना, निवास प्रमाण पत्र, जाति प्रमाण पत्र और जमाबंदी भू-रिकॉर्ड सहित 400 से अधिक सेवाएं प्रदान करता है।"
        }
    },
    "rajasthan": {
        "slug": "rajasthan",
        "name": {"en": "Rajasthan", "hi": "राजस्थान"},
        "type": "State",
        "icon": "🏰",
        "capital": {"en": "Jaipur", "hi": "जयपुर"},
        "officialPortal": {
            "label": {"en": "e-Mitra Rajasthan Portal (Jan Soochna / Jan Aadhaar)", "hi": "ई-मित्र राजस्थान पोर्टल (जन आधार पोर्टल)"},
            "url": "https://emitra.rajasthan.gov.in"
        },
        "intro": {
            "en": "e-Mitra and Jan Aadhaar provide seamless delivery of Chiranjeevi health scheme, caste/bonafide certificates, Apna Khata land records, and pensions.",
            "hi": "ई-मित्र और जन आधार पोर्टल जाति, मूल निवास प्रमाण पत्र, अपना खाता जमाबंदी नकल और सामाजिक सुरक्षा पेंशन ऑनलाइन प्रदान करते हैं।"
        }
    },
    "sikkim": {
        "slug": "sikkim",
        "name": {"en": "Sikkim", "hi": "सिक्किम"},
        "type": "State",
        "icon": "🏔️",
        "capital": {"en": "Gangtok", "hi": "गंगटोक"},
        "officialPortal": {
            "label": {"en": "e-District Sikkim Portal (ServicePlus)", "hi": "ई-डिस्ट्रिक्ट सिक्किम पोर्टल (सर्विसप्लस)"},
            "url": "https://edistrict.sikkim.gov.in"
        },
        "intro": {
            "en": "Sikkim e-District enables citizens to apply for Certificate of Identification (COI), Sikkim Subject verification, and welfare pensions online.",
            "hi": "सिक्किम ई-डिस्ट्रिक्ट पोर्टल सर्टिफिकेट ऑफ आइडेंटिफिकेशन (COI), सिक्किम सब्जेक्ट सत्यापन और कल्याणकारी पेंशन ऑनलाइन प्रदान करता है।"
        }
    },
    "tamil-nadu": {
        "slug": "tamil-nadu",
        "name": {"en": "Tamil Nadu", "hi": "तमिलनाडु"},
        "type": "State",
        "icon": "🏛️",
        "capital": {"en": "Chennai", "hi": "चेन्नई"},
        "officialPortal": {
            "label": {"en": "e-Sevai Tamil Nadu (TNeGA Portal)", "hi": "ई-सेवई तमिलनाडु (टीएनईजीए पोर्टल)"},
            "url": "https://www.tnesevai.tn.gov.in"
        },
        "intro": {
            "en": "TNeGA e-Sevai delivers Kalaignar Magalir Urimai Thogai, community certificates, Patta Chitta land records, and smart ration cards.",
            "hi": "टीएनईजीए ई-सेवई पोर्टल कलैग्नार मगलिर उरीमई थोगाई, समुदाय प्रमाण पत्र, पट्टा चिट्टा भूमि रिकॉर्ड और स्मार्ट राशन कार्ड प्रदान करता है।"
        }
    },
    "telangana": {
        "slug": "telangana",
        "name": {"en": "Telangana", "hi": "तेलंगाना"},
        "type": "State",
        "icon": "🏛️",
        "capital": {"en": "Hyderabad", "hi": "हैदराबाद"},
        "officialPortal": {
            "label": {"en": "MeeSeva Telangana Portal", "hi": "मीसेवा तेलंगाना आधिकारिक पोर्टल"},
            "url": "https://ts.meeseva.telangana.gov.in"
        },
        "intro": {
            "en": "MeeSeva Telangana and Dharani Portal provide Mahalakshmi Scheme, caste/income certificates, Rythu Bandhu, and land passbooks.",
            "hi": "मीसेवा तेलंगाना और धरणी पोर्टल महालक्ष्मी योजना, जाति/आय प्रमाण पत्र, रायथू बंधु और भूमि पासबुक सेवाएं ऑनलाइन प्रदान करते हैं।"
        }
    },
    "tripura": {
        "slug": "tripura",
        "name": {"en": "Tripura", "hi": "त्रिपुरा"},
        "type": "State",
        "icon": "🌴",
        "capital": {"en": "Agartala", "hi": "अगरतला"},
        "officialPortal": {
            "label": {"en": "e-District Tripura Portal (e-Services Tripura)", "hi": "ई-डिस्ट्रिक्ट त्रिपुरा पोर्टल"},
            "url": "https://edistrict.tripura.gov.in"
        },
        "intro": {
            "en": "e-District Tripura offers online citizenship verification, PRTC certificates, Mukhyamantri Matru Pushti Uphaar, and student grants.",
            "hi": "ई-डिस्ट्रिक्ट त्रिपुरा पोर्टल पीआरटीसी प्रमाण पत्र, मुख्यमंत्री मातृ पुष्टि उपहार और छात्र सहायता योजनाएं ऑनलाइन उपलब्ध कराता है।"
        }
    },
    "uttar-pradesh": {
        "slug": "uttar-pradesh",
        "name": {"en": "Uttar Pradesh", "hi": "उत्तर प्रदेश"},
        "type": "State",
        "icon": "🏛️",
        "capital": {"en": "Lucknow", "hi": "लखनऊ"},
        "officialPortal": {
            "label": {"en": "e-Sathi Uttar Pradesh (e-District UP / edistrict.up.gov.in)", "hi": "ई-साथी उत्तर प्रदेश (ई-डिस्ट्रिक्ट यूपी)"},
            "url": "https://esathi.up.gov.in"
        },
        "intro": {
            "en": "e-Sathi UP provides Kanya Sumangala Yojana, Family ID, caste, domicile, income certificates, and Bhulekh UP land khatauni records.",
            "hi": "ई-साथी यूपी कन्या सुमंगला योजना, फैमिली आईडी, जाति, निवास, आय प्रमाण पत्र और भूलेख यूपी खतौनी ऑनलाइन उपलब्ध कराता है।"
        }
    },
    "uttarakhand": {
        "slug": "uttarakhand",
        "name": {"en": "Uttarakhand", "hi": "उत्तराखंड"},
        "type": "State",
        "icon": "🏔️",
        "capital": {"en": "Dehradun", "hi": "देहरादून"},
        "officialPortal": {
            "label": {"en": "Apuni Sarkar Uttarakhand (e-District UK / edistrict.uk.gov.in)", "hi": "अपनी सरकार उत्तराखंड (ई-डिस्ट्रिक्ट यूके)"},
            "url": "https://eservices.uk.gov.in"
        },
        "intro": {
            "en": "Apuni Sarkar portal provides online domicile certificates, hill area certificates, Gaura Yojana, and Bhulekh Uttarakhand records.",
            "hi": "अपनी सरकार पोर्टल स्थायी निवास प्रमाण पत्र, पर्वतीय क्षेत्र प्रमाण पत्र, गौरा योजना और भूलेख उत्तराखंड नकल ऑनलाइन प्रदान करता है।"
        }
    },
    "west-bengal": {
        "slug": "west-bengal",
        "name": {"en": "West Bengal", "hi": "पश्चिम बंगाल"},
        "type": "State",
        "icon": "🐅",
        "capital": {"en": "Kolkata", "hi": "कोलकाता"},
        "officialPortal": {
            "label": {"en": "e-District West Bengal (Banglarbhumi / Duare Sarkar)", "hi": "ई-डिस्ट्रिक्ट पश्चिम बंगाल (द्वारे सरकार / बांग्लारभूमि)"},
            "url": "https://edistrict.wb.gov.in"
        },
        "intro": {
            "en": "West Bengal e-District and Duare Sarkar deliver Lakshmir Bhandar, Kanyashree Prakalpa, caste certificates, and Banglarbhumi land records.",
            "hi": "पश्चिम बंगाल ई-डिस्ट्रिक्ट और द्वारे सरकार लक्ष्मी भंडार, कन्याश्री प्रकल्प, जाति प्रमाण पत्र और बांग्लारभूमि रिकॉर्ड ऑनलाइन प्रदान करते हैं।"
        }
    }
}

print(f"Total 36 States/UTs configured: {len(STATES_DATA_36)}")
