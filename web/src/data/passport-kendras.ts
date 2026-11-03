// Passport Seva Kendras by Regional Passport Office, from passportindia.gov.in
// PDFs (fetched 3 Nov 2026 by .github/workflows/data-probe.yml, branch
// data-passport): "List of 93 Operational PSKs" (PSK_List.pdf) and "List of 424
// Operational POPSKs" (POPSK_List.pdf). State grouping of the RPOs is ours.
export type PassportRpo = { rpo: string; psk: string[]; popsk: string[] };
export const PASSPORT_KENDRAS: { state: string; rpos: PassportRpo[] }[] = [
 {
  "state": "गुजरात",
  "rpos": [
   {
    "rpo": "Ahmedabad",
    "psk": [
     "PSK Mithakali Ahmedabad",
     "PSK Rajkot",
     "PSK Vadodara",
     "PSK Vijay Cross Road Ahmedabad"
    ],
    "popsk": [
     "Amreli",
     "Anand",
     "Bharuch",
     "Bhavnagar",
     "Bhuj",
     "Chhota Udaipur",
     "Dahod",
     "Gandhinagar",
     "Godhra",
     "Jamnagar",
     "Junagadh",
     "Nadiad",
     "Mehsana",
     "Palanpur",
     "Patan",
     "Porbandar",
     "Himmatnagar",
     "Surendranagar",
     "Veraval"
    ]
   },
   {
    "rpo": "Surat",
    "psk": [
     "PSK Surat"
    ],
    "popsk": [
     "Bardoli",
     "Navsari",
     "Rajpipla",
     "Valsad"
    ]
   }
  ]
 },
 {
  "state": "महाराष्ट्र (दादरा नगर हवेली, दमन सहित)",
  "rpos": [
   {
    "rpo": "Mumbai",
    "psk": [
     "PSK Andheri",
     "PSK Lower Parel",
     "PSK Malad",
     "PSK Nashik II",
     "PSK Thane II"
    ],
    "popsk": [
     "Silvasa",
     "Daman",
     "Aurangabad",
     "Bhiwandi",
     "Bhusawal",
     "Dhule",
     "Jalgaon",
     "Rajapur",
     "Santacruz",
     "Sion",
     "Vashi",
     "Vikroli"
    ]
   },
   {
    "rpo": "Pune",
    "psk": [
     "PSK Pune",
     "PSLK Solapur"
    ],
    "popsk": [
     "Ahmednagar",
     "Baramati",
     "Beed",
     "Ichalkaranji",
     "Jalna",
     "Kolhapur",
     "Latur",
     "Madha",
     "Nanded",
     "Osmanabad",
     "Pandharpur",
     "Parbhani",
     "Pimpri Chinchwad",
     "Sangli",
     "Satara",
     "Shirur",
     "Srirampur"
    ]
   },
   {
    "rpo": "Nagpur",
    "psk": [
     "PSK Nagpur"
    ],
    "popsk": [
     "Akola",
     "Amravati",
     "Bhandara",
     "Buldhana",
     "Chandrapur",
     "Gadchiroli",
     "Hingoli",
     "Katoal",
     "Wardha",
     "Yavatmal"
    ]
   }
  ]
 },
 {
  "state": "उत्तर प्रदेश",
  "rpos": [
   {
    "rpo": "Lucknow",
    "psk": [
     "PSK Gorakhpur",
     "PSK Kanpur",
     "PSK Lucknow",
     "PSK Varanasi"
    ],
    "popsk": [
     "Allahabad",
     "Ambedkar Nagar",
     "Amethi",
     "Ayodhya",
     "Azamgarh",
     "Bahraich",
     "Ballia",
     "Balrampur",
     "Banda",
     "Bhadohi",
     "Chunar",
     "Deoria",
     "Farrukhabad",
     "Fatehpur",
     "Ghazipur",
     "Gonda",
     "Mau",
     "Hamirpur",
     "Hardoi",
     "Jaunpur",
     "Jhansi",
     "Lakimpur Kheri",
     "Maharajganj",
     "Misrikh",
     "Pratapgarh",
     "Raebareli",
     "Siddharth Nagar",
     "Sitapur",
     "Sultanpur",
     "Unnao"
    ]
   },
   {
    "rpo": "Ghaziabad",
    "psk": [
     "PSK Ghaziabad"
    ],
    "popsk": [
     "Achnera",
     "Agra",
     "Aligarh",
     "Baghpat",
     "Bulandshahr",
     "Hathras",
     "Meerut",
     "Muzaffarnagar",
     "Noida",
     "Saharanpur",
     "Vrindavan"
    ]
   },
   {
    "rpo": "Bareilly",
    "psk": [
     "PSK Bareilly"
    ],
    "popsk": [
     "Amroha",
     "Badaun",
     "Bijnaur",
     "Moradabad",
     "Pilibhit",
     "Rampur",
     "Shahjahanpur"
    ]
   }
  ]
 },
 {
  "state": "बिहार",
  "rpos": [
   {
    "rpo": "Patna",
    "psk": [
     "PSK Patna"
    ],
    "popsk": [
     "Arrah",
     "Aurangabad",
     "Banka",
     "Begusarai",
     "Bettiah",
     "Bhagalpur",
     "Buxar",
     "Chapra",
     "Dalmianagar",
     "Dalsinghsarai",
     "Forbesganj",
     "Gaya",
     "Gopalganj",
     "Hajipur",
     "Jahanabad",
     "Jamui",
     "Katihar",
     "Khagaria",
     "Kishanganj",
     "Madhubani",
     "Maner",
     "Motihari",
     "Munger",
     "Muzaffarpur",
     "Nalanda",
     "Nawada",
     "Purnia",
     "Saharsa",
     "Samastipur",
     "Sasaram",
     "Sheohar",
     "Sitamarhi",
     "Siwan"
    ]
   }
  ]
 },
 {
  "state": "मध्य प्रदेश",
  "rpos": [
   {
    "rpo": "Bhopal",
    "psk": [
     "PSK Bhopal",
     "PSLK Indore"
    ],
    "popsk": [
     "Balaghat",
     "Betul",
     "Chhatarpur",
     "Chhindwara",
     "Damoh",
     "Dewas",
     "Dhar",
     "Gwalior",
     "Hoshangabad",
     "Jabalpur",
     "Ratlam",
     "Rewa",
     "Sagar",
     "Satna",
     "Tikamgarh",
     "Ujjain",
     "Vidisha"
    ]
   }
  ]
 },
 {
  "state": "राजस्थान",
  "rpos": [
   {
    "rpo": "Jaipur",
    "psk": [
     "PSK Jaipur",
     "PSK Jodhpur",
     "PSK Sikar",
     "PSLK Udaipur"
    ],
    "popsk": [
     "Ajmer",
     "Alwar",
     "Banswara",
     "Barmer",
     "Bharatpur",
     "Bhilwara",
     "Bikaner",
     "Chittorgarh",
     "Churu",
     "Dausa",
     "Hanumangarh",
     "Jaisalmer",
     "Jhalawar",
     "Jhunjhunu",
     "Kankroli",
     "Dholpur",
     "Kota",
     "Kotputli",
     "Nagaur",
     "Pali",
     "Pratapgarh",
     "Sawai Madhopur",
     "Sirohi",
     "Sriganganagar"
    ]
   }
  ]
 },
 {
  "state": "दिल्ली (गुरुग्राम सहित)",
  "rpos": [
   {
    "rpo": "Delhi",
    "psk": [
     "PSK Gurgaon",
     "PSK Herald House - ITO",
     "PSK R K Puram",
     "PSK Shalimar Place"
    ],
    "popsk": [
     "Janakpuri",
     "Mehrauli",
     "Nehru Place",
     "Patparganj",
     "Yamuna Vihar",
     "Faridabad",
     "Narnaul",
     "Rohtak",
     "Sonipat"
    ]
   }
  ]
 },
 {
  "state": "चंडीगढ़ और हरियाणा",
  "rpos": [
   {
    "rpo": "Chandigarh",
    "psk": [
     "PSK Ambala",
     "PSK Chandigarh",
     "PSK Chandigarh-II",
     "PSK Ludhiana"
    ],
    "popsk": [
     "Bhiwani",
     "Hisar",
     "Kaithal",
     "Karnal",
     "Panipat",
     "Sirsa",
     "Yamunanagar",
     "Bassi Pathanan",
     "Bathinda",
     "Malerkotla",
     "Patiala",
     "Ropar"
    ]
   }
  ]
 },
 {
  "state": "पंजाब",
  "rpos": [
   {
    "rpo": "Amritsar",
    "psk": [
     "PSK Amritsar"
    ],
    "popsk": [
     "Ferozepur"
    ]
   },
   {
    "rpo": "Jalandhar",
    "psk": [
     "PSK Hoshiarpur",
     "PSK Jalandhar-1",
     "PSK Jalandhar-2"
    ],
    "popsk": [
     "Moga",
     "Pathankot",
     "Phagwara"
    ]
   }
  ]
 },
 {
  "state": "हिमाचल प्रदेश",
  "rpos": [
   {
    "rpo": "Shimla",
    "psk": [
     "PSK Shimla"
    ],
    "popsk": [
     "Hamirpur",
     "Kangra",
     "Kullu",
     "Mandi",
     "Palampur",
     "Una"
    ]
   }
  ]
 },
 {
  "state": "उत्तराखंड",
  "rpos": [
   {
    "rpo": "Dehradun",
    "psk": [
     "PSK Dehradun"
    ],
    "popsk": [
     "Almora",
     "Kathgodam",
     "Nainital",
     "Roorkee",
     "Rudrapur",
     "Srinagar"
    ]
   }
  ]
 },
 {
  "state": "जम्मू-कश्मीर और लद्दाख",
  "rpos": [
   {
    "rpo": "Jammu",
    "psk": [
     "PSK Jammu"
    ],
    "popsk": [
     "Kathua",
     "Rajouri",
     "Udhampur"
    ]
   },
   {
    "rpo": "Srinagar",
    "psk": [
     "PSK Srinagar"
    ],
    "popsk": [
     "Anantnag",
     "Baramulla",
     "Leh"
    ]
   }
  ]
 },
 {
  "state": "झारखंड",
  "rpos": [
   {
    "rpo": "Ranchi",
    "psk": [
     "PSK Ranchi"
    ],
    "popsk": [
     "Bokaro",
     "Chaibasa",
     "Deoghar",
     "Dhanbad",
     "Dumka",
     "Giridih",
     "Gumla",
     "Hazaribagh",
     "Jamshedpur",
     "Jhumri Tilaiya",
     "Khunti",
     "Medininagar",
     "Sahibganj",
     "Simaria"
    ]
   }
  ]
 },
 {
  "state": "छत्तीसगढ़",
  "rpos": [
   {
    "rpo": "Raipur",
    "psk": [
     "PSK Raipur"
    ],
    "popsk": [
     "Bilaspur",
     "Durg",
     "Janjgir-Champa",
     "Korba",
     "Raigarh",
     "Rajnandgaon",
     "Surguja"
    ]
   }
  ]
 },
 {
  "state": "ओडिशा",
  "rpos": [
   {
    "rpo": "Bhubaneswar",
    "psk": [
     "PSK Bhubaneswar"
    ],
    "popsk": [
     "Aska",
     "Balasore",
     "Bargarh",
     "Baripada",
     "Berhampur",
     "Bhadrak",
     "Bhawanipatna",
     "Bolangir",
     "Cuttack",
     "Dhenkanal",
     "Jagatsinghpur",
     "Jajpur",
     "Kendrapara",
     "Keonjhar",
     "Koraput",
     "Nabarangpur",
     "Phulbani",
     "Puri",
     "Rourkela",
     "Sambalpur"
    ]
   }
  ]
 },
 {
  "state": "पश्चिम बंगाल, सिक्किम, त्रिपुरा",
  "rpos": [
   {
    "rpo": "Kolkata",
    "psk": [
     "PSK Berhampore",
     "PSK Kolkata",
     "PSLK Agartala",
     "PSLK Gangtok",
     "PSLK Siliguri"
    ],
    "popsk": [
     "Dhramanagar",
     "Alipurduar",
     "Amta",
     "Arambagh",
     "Asansol",
     "Ashoknagar",
     "Balurghat",
     "Bangaon",
     "Bankura",
     "Bardhaman",
     "Barrackpore",
     "Basirhat",
     "Beadon Street",
     "Bishnupur",
     "Santiniketan",
     "Canning Town Ferry Ghat",
     "Chinsurah",
     "Coochbehar",
     "Darjeeling",
     "Diamond Harbour",
     "Dum Dum",
     "Ghatal",
     "Howrah",
     "Jadavpur",
     "Jalpaiguri",
     "Jhargram",
     "Jiaganj",
     "Kakdweep",
     "Contai(Kanthi)",
     "Katwa",
     "Kharagpur",
     "Krishnanagar",
     "Makdumpur",
     "Raiganj",
     "Purulia",
     "Raghunathganj",
     "Rampurhat",
     "Ranaghat",
     "Samsi",
     "Serampore",
     "Tamluk"
    ]
   }
  ]
 },
 {
  "state": "असम और पूर्वोत्तर",
  "rpos": [
   {
    "rpo": "Guwahati",
    "psk": [
     "PSK Guwahati",
     "PSLK Aizawl",
     "PSLK Dimapur",
     "PSLK Imphal",
     "PSLK Itanagar",
     "PSLK Shillong"
    ],
    "popsk": [
     "Changlang",
     "Khonsa",
     "Barpeta",
     "Dhubri",
     "Dibrugarh",
     "Goalpara",
     "Golaghat",
     "Jorhat",
     "Karbi Anglong",
     "Karimganj",
     "Kokrajhar",
     "Mangaldoi",
     "Nagaon",
     "North Lakhimpur",
     "Silchar",
     "Tezpur",
     "Tinsukia",
     "Kakching",
     "Tura"
    ]
   }
  ]
 },
 {
  "state": "कर्नाटक",
  "rpos": [
   {
    "rpo": "Bengaluru",
    "psk": [
     "PSK Bengaluru, Lalbagh",
     "PSK Bengaluru, Sai Arcade",
     "PSK Hubballi-Dharwad",
     "PSK Mangaluru",
     "PSLK Kalaburagi"
    ],
    "popsk": [
     "Ankola",
     "Bagalkot",
     "Belagavi",
     "Ballari",
     "Bidar",
     "Chamarajanagar",
     "Channapatna",
     "Chikkaballapur",
     "Chikkodi",
     "Chitradurga",
     "Davangere",
     "Gadag",
     "Hassan",
     "Jalahalli",
     "Koppal",
     "Maddur",
     "Mysuru",
     "Raichur",
     "Robertsonpet",
     "Shivamogga",
     "Tumakuru",
     "Udupi",
     "Vijayapura"
    ]
   }
  ]
 },
 {
  "state": "केरल",
  "rpos": [
   {
    "rpo": "Cochin",
    "psk": [
     "PSK Alappuzha",
     "PSK Aluva",
     "PSK Kottayam",
     "PSK Thrissur",
     "PSK Tripunithura, Cochin"
    ],
    "popsk": [
     "Chengannur",
     "Kattappana",
     "Nenmara",
     "Palakkad",
     "Kavaratti"
    ]
   },
   {
    "rpo": "Kozhikode",
    "psk": [
     "PSK Kannur",
     "PSK Kozhikode",
     "PSK Malappuram II",
     "PSK Payyanur, Kannur",
     "PSK Vadakara, Kozhikode"
    ],
    "popsk": [
     "Kasargod"
    ]
   },
   {
    "rpo": "Trivandrum",
    "psk": [
     "PSK Kollam",
     "PSK Neyyattinkara, Trivandrum",
     "PSK Vazhuthacaud, Trivandrum"
    ],
    "popsk": [
     "Attingal",
     "Pathanamthitta"
    ]
   }
  ]
 },
 {
  "state": "तमिलनाडु और पुडुचेरी",
  "rpos": [
   {
    "rpo": "Chennai",
    "psk": [
     "PSK Aminjikarai",
     "PSK Saligramam",
     "PSK Tambaram",
     "PSLK Puducherry"
    ],
    "popsk": [
     "Arani",
     "Chennai GPO",
     "Chidambaram",
     "Cuddalore",
     "Dharmapuri",
     "Kallakurichi",
     "Kancheepuram",
     "Krishnagiri",
     "Ranipet",
     "Tiruvallur",
     "Tiruvannamalai",
     "Vellore",
     "Villupuram"
    ]
   },
   {
    "rpo": "Coimbatore",
    "psk": [
     "PSK Coimbatore"
    ],
    "popsk": [
     "Coonoor",
     "Erode",
     "Rasipuram",
     "Salem"
    ]
   },
   {
    "rpo": "Madurai",
    "psk": [
     "PSK Madurai",
     "PSK Tirunelveli City"
    ],
    "popsk": [
     "Bodineyaknur",
     "Devakottai",
     "Kodai Road",
     "Nagercoil",
     "Rajapalayam",
     "Ramanathapuram",
     "Thoothukudi",
     "Virudhunagar"
    ]
   },
   {
    "rpo": "Tiruchirappalli",
    "psk": [
     "PSK Thanjavur",
     "PSK Tiruchirappalli"
    ],
    "popsk": [
     "Karaikal",
     "Perambalur",
     "Karur",
     "Sirkali",
     "Thiruthuraipoondi"
    ]
   }
  ]
 },
 {
  "state": "तेलंगाना",
  "rpos": [
   {
    "rpo": "Hyderabad",
    "psk": [
     "PSK Ameerpet",
     "PSK Begumpet",
     "PSK Nizamabad",
     "PSK Toli Chowki",
     "PSLK Karimnagar"
    ],
    "popsk": [
     "Adilabad",
     "Bhongir",
     "Kamareddy",
     "Khammam",
     "Mahabubabad",
     "Mancherial",
     "Medak",
     "Medchal",
     "Mahaboobnagar",
     "Nalgonda",
     "Siddipet",
     "Vikarabad",
     "Wanaparthy",
     "Warangal"
    ]
   }
  ]
 },
 {
  "state": "आंध्र प्रदेश",
  "rpos": [
   {
    "rpo": "Vijayawada",
    "psk": [
     "PSK Tirupathi II",
     "PSK Vijaywada II"
    ],
    "popsk": [
     "Anantpur",
     "Bapatla",
     "Chittoor",
     "Gudivada",
     "Guntur",
     "Hindupur",
     "Kadapa",
     "Kodur",
     "Kurnool",
     "Nandyal",
     "Narasaraopet",
     "Nellore",
     "Ongole"
    ]
   },
   {
    "rpo": "Visakhapatnam",
    "psk": [
     "PSK Visakhapatnam",
     "PSLK Bhimavaram"
    ],
    "popsk": [
     "Amalapuram",
     "Eluru",
     "Kakinada",
     "Rajamundry",
     "Srikakulam",
     "Vizianagaram",
     "Yelamanchili"
    ]
   }
  ]
 },
 {
  "state": "गोवा",
  "rpos": [
   {
    "rpo": "Goa",
    "psk": [
     "PSK Panaji"
    ],
    "popsk": [
     "Margao"
    ]
   }
  ]
 }
];
