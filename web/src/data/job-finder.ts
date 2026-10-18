// Qualification-wise sarkari naukri finder: recurring central / all-India
// recruitments. Checked 18 Oct 2026. Age = general (UR) range from the latest
// notification we could read or verify; relaxations as stated there. Pay only
// where the notice (or the standard 7th CPC level named in it) gives it.
//
// Sources per entry:
// OFFICIAL PDFs read in full from ssc.gov.in (notice board API,
// /api/attachment/uploads/masterData/NoticeBoards/<file>):
// - ssc-gd: Notice_of_CTGD_2026.pdf (published 01.12.2025): 18-23 on
//   01-01-2026 (born 02-01-2003 to 01-01-2008); SC/ST 5, OBC 3, ESM; 10th pass
//   by 01-01-2026; Pay Level-3 (₹21,700-69,100) for all posts. SSC Calendar
//   (ssc.gov.in records, 12.01.2026) lists GD 2027 window 30.09-31.10.2026
//   (tentative; not out as of 16.10.2026, see /exams/ssc-exam-calendar-2026-2027).
// - ssc-mts: Notice_of_adv_mts_2025.pdf (26-06-2025; 2026 notice not yet out):
//   MTS 18-25, Havaldar and a few MTS posts 18-27 on 01-08-2025; SC/ST 5,
//   OBC 3, PwBD 10/13/15; Matriculation; Pay Level-1.
// - ssc-chsl: Notice_of_adv_chsl_2026.pdf (07-09-2026): 18-27 on 01-08-2026
//   (born 02-08-1999 to 01-08-2008); SC/ST 5, OBC 3, PwBD 10/13/15; 12th pass
//   (DEO in some ministries: 12th Science with Maths); LDC/JSA Level-2
//   (₹19,900-63,200), DEO Level-4/5.
// - ssc-cgl: Notice_of_adv_cgl_2026.pdf (21-05-2026): age on 01-08-2026,
//   post-wise 18-27 / 18-30 / 20-30 / 18-32 (Statistical Investigator);
//   bachelor's degree; Pay Level-4 (₹25,500) to Level-8 (₹1,51,100).
// - ssc-cpo: Notice_of_adv_capf_2026.pdf (10.09.2026): SI Delhi Police / SI GD
//   CAPFs 20-25 on 01.08.2026 (SI Fire CISF, male, 18-30); bachelor's degree;
//   Level-6 (₹35,400-1,12,400).
// - ssc-steno: Notice_of_adv_steno_2026.pdf (24-04-2026): Grade C 18-30,
//   Grade D 18-27 on 01.08.2026; 12th pass. Pay not stated in notice: left out.
// - ssc-je: Notice_of_adv_je_2026.pdf (02.09.2026): up to 30 or 32 by post on
//   01.08.2026 (born not later than 01.08.2008); diploma or degree in
//   civil/mech/electrical by post (some posts diploma + 2 yrs experience);
//   Group B, Level-6 (₹35,400-1,12,400).
// - dp-constable: Notice_of_DPCE_2025.pdf (22.09.2025, extension notice
//   21.10.2025): 18-25 on 01-07-2025; SC/ST 5, OBC 3; 10+2 pass; male
//   candidates need a valid LMV licence by PE&MT; Pay Level-3 (₹21,700-69,100).
// - icg-*: advertisement_06102026.pdf (Indian Coast Guard CGEPT 01/2027 &
//   02/2027, applications 06-21 Oct 2026 via SSC): Navik GD 12th with Maths &
//   Physics, born 01 Nov 2005-01 May 2009, men and women; Navik DB 10th, born
//   01 Nov 2005-01 Oct 2009, men only; Yantrik 10th + 3/4-yr diploma (or
//   10th+12th + 2/3-yr diploma) in Electrical/Mechanical/Electronics/Telecom,
//   born 01 May 2005-01 May 2009, men only; Hygienist-I Matric or ITI, born
//   01 Nov 2002-01 Oct 2009, men only; OBC 3, SC/ST 5; Navik/Hygienist Level-3
//   basic ₹21,700, Yantrik Level-5 basic ₹29,200 + Yantrik pay ₹6,200.
// SEARCH-RESULT EXTRACTS (official sites not reachable from the sandbox):
// - rrb-group-d: CEN 09/2025 (Level 1, 22,195 posts): 18-33 on 01.01.2026,
//   10th or ITI or NAC (official CEN annexure extract + adda247, karmasandhan,
//   aglasem); one site claims 36 with Covid relaxation, not confirmed, not used.
//   Level-1 basic ₹18,000 (7th CPC), as in /exams/rrb-group-d-2026.
// - rrb-ntpc-ug: CEN 07/2026 (1,688 posts, apply to 13 Nov 2026): 18-30 on
//   01.01.2027, 12th with 50% (exemptions for SC/ST/PwBD/ESM/higher
//   qualification) (testbook, karmasandhan, freejobalert, careerindia; one site
//   said 18-33, outvoted); Level 2 and 3 (/exams/rrb-ntpc-ug-2026).
// - rrb-ntpc-grad: CEN 06/2026 (3,548 posts, apply to 6 Nov 2026): 18-33 on
//   01.01.2027, graduation, Level 5 and 6 (careerpower, oliveboard,
//   practicemock; as in /jobs/rrb-ntpc-recruitment-2026).
// - rrb-alp: CEN 01/2026 (11,127 posts, applications 15.05-14.06.2026): extract
//   of the official CEN (rrbcdg.gov.in/uploads/2026/01-ALP/012026ALP-CEN.pdf):
//   Level-2, initial ₹19,900, 18-30 on 01-07-2026; Matric + ITI (notified
//   trade) or Act Apprenticeship, or 3-yr engineering diploma (aglasem, pw.live).
// - rrb-je: CEN 04/2026 (4,029 posts): 18-33 on 01.01.2027, Level-6 ₹35,400
//   (careers360, sreedharscce, oliveboard; /jobs/rrb-junior-engineer-...).
// - rpf-constable: CEN RPF 02/2024 extract (rrbcdg.gov.in): 18-28 on
//   01.07.2024, incl. one-time 3-yr Covid relaxation (normal 18-25); 10th pass
//   (aglasem, careerpower); Level-3 basic ₹21,700 (pw.live). No 2025/2026 CEN
//   found as of 18 Oct 2026.
// - army-*: Agniveer CEE 2026-27 (apply Feb-Apr 2026, CEE June 2026): GD 10th
//   45% aggregate + 33% each subject; Clerk/SKT 12th 60% aggregate, 50% each,
//   50% in English & Maths/Accounts; Tradesman 8th pass 33% each subject
//   (Tamil Nadu govt press release pr260224_Army, mysarkarinaukri, aglasem,
//   patrika, defenceguru); age 17.5-21 (most sources; a few say 22 - noted).
//   Agnipath: 4 years, first-year package ₹30,000/month (PIB, June 2022).
// - airforce-agniveervayu: Intake 02/2027 (apply 6-26 Jul 2026): born
//   01 Jul 2005-01 Jan 2010, upper age at enrolment 22; 12th 50% aggregate and
//   50% English (Science: Maths, Physics, English) or diploma/vocational
//   (freepressjournal, testbook, careers360, pw.live).
// - navy-ssr: 01/2027 & 02/2027 (apply 14 Mar-6 Apr 2026): 12th with Maths &
//   Physics 50% or diploma/vocational; unmarried men and women; born 01 Dec
//   2004-31 May 2009 (01/2027) and 01 May 2005-31 Oct 2009 (02/2027)
//   (educationworld, pw.live, resultbharat; /jobs/indian-navy-agniveer-ssr-...).
// - upsc-nda: NDA & NA (II) 2026: unmarried, born 02-01-2008 to 01-01-2011
//   (about 16.5-19.5); 12th (Air Force/Navy wings: with Physics & Maths)
//   (ssbcrackexams, anantamias). UPSC calendar 2027: NDA (I) 2027 notification
//   2 Dec 2026 (/exams/upsc-annual-exam-calendar-2027).
// - upsc-cse: CSE 2026: 21-32 on 1 Aug, graduate, OBC 3, SC/ST 5, PwBD 10;
//   Level 10 ₹56,100 (as in /jobs/upsc-civil-services-ias-ifs-2027).
// - upsc-capf: CAPF (AC) 2026 (notification 20 Feb 2026, 349 posts): 20-25 on
//   01.08.2026, bachelor's degree, SC/ST 5, OBC 3 (freepressjournal,
//   padhai.ai, pw.live, centralstatejobs).
// - ibps-po / ibps-clerk / ibps-rrb-*: CRP PO/MT-XVI 20-30 on 01.07.2026;
//   CSA-XVI 20-28; CRP RRBs-XV OA 18-28, Officer Scale-I 18-30 on 01.09.2026
//   (aglasem, hellobanker, sreedharscce); graduation; SC/ST 5, OBC 3, PwBD 10;
//   JMGS-I basic ₹48,480 (as in the /jobs/ibps-* pages).
// - sbi-po / sbi-clerk: CRPD/PO/2026-27/09: 21-30 on 01.04.2026, basic
//   ₹48,480 + 4 increments; CRPD/CR/2026-27/17: 20-28 on 01.04.2026, starting
//   basic ₹26,730 (as in /jobs/sbi-po-... and /jobs/sbi-clerk-...).
// - india-post-gds: Schedule-I/II 2026: 10th pass (Maths & English, local
//   language), merit on 10th marks, 18-40, TRCA from ₹10,000 (ABPM/Dak Sevak)
//   and ₹12,000 (BPM) (as in /jobs/india-post-gds-recruitment-2026).
// - aiims-norcet: NORCET (Notice 103/2026): B.Sc (Hons)/B.Sc Nursing/Post-Basic
//   B.Sc Nursing, or GNM + 2 yrs in a 50-bed hospital; 18-30; Level 7
//   (₹44,900-1,42,400) (as in /jobs/aiims-norcet-11-...).
// DROPPED (could not verify current age/qualification): UPSC CDS (IMA/OTA
// birth windows conflict between sources), Navy Agniveer MR (no 2026-27
// notice details found), SSC Selection Posts (post-wise, no single rule),
// state police / state PSC (not all-India).

export type Qual = "8th" | "10th" | "12th" | "iti" | "diploma" | "graduate" | "nursing" | "engineering" | "pg";

export type FinderJob = {
  id: string;
  name: string;
  body: string;
  quals: Qual[];
  qualText: string;
  age: [number, number];
  ageNote: string;
  gender?: "male" | "female";
  pay?: string;
  cycle: string;
  official: string;
  page?: string;
  source: string;
};

export const QUALS: Record<Qual, string> = {
  "8th": "8वीं पास",
  "10th": "10वीं पास",
  "12th": "12वीं पास",
  iti: "ITI पास",
  diploma: "डिप्लोमा",
  graduate: "ग्रेजुएट (स्नातक)",
  nursing: "नर्सिंग (B.Sc / GNM)",
  engineering: "इंजीनियरिंग (B.E./B.Tech)",
  pg: "पोस्ट-ग्रेजुएट",
};

const CENTRAL = "OBC 3 साल, SC/ST 5 साल, दिव्यांग (PwBD) 10 साल (OBC 13, SC/ST 15) की छूट";

export const FINDER_JOBS: FinderJob[] = [
  // ---------- SSC ----------
  {
    id: "ssc-gd",
    name: "SSC GD कांस्टेबल (CAPF, SSF, असम राइफल्स)",
    body: "SSC",
    quals: ["10th"],
    qualText: "10वीं (मैट्रिक) पास, कट-ऑफ तारीख तक।",
    age: [18, 23],
    ageNote: "OBC 3 साल, SC/ST 5 साल, पूर्व सैनिकों को नियमानुसार छूट। दिव्यांग आवेदन नहीं कर सकते। GD 2026 में उम्र 1 जनवरी 2026 को गिनी गई; हर साल की कट-ऑफ तारीख अधिसूचना में।",
    pay: "Level-3 (₹21,700–69,100)",
    cycle: "हर साल; SSC कैलेंडर में GD 2027 का फॉर्म 30 सितंबर–31 अक्टूबर 2026 (संभावित)",
    official: "https://ssc.gov.in/",
    page: "/exams/ssc-exam-calendar-2026-2027.html",
    source: "SSC Notice: Constable (GD) Examination 2026 (01.12.2025)",
  },
  {
    id: "ssc-mts",
    name: "SSC MTS और हवलदार (CBIC/CBN)",
    body: "SSC",
    quals: ["10th"],
    qualText: "10वीं (मैट्रिक) पास।",
    age: [18, 27],
    ageNote: "MTS के ज़्यादातर पद 18-25 साल; हवलदार और कुछ MTS पद 18-27 साल (1 अगस्त को)। " + CENTRAL + "। कट-ऑफ तारीख अधिसूचना में।",
    pay: "Level-1 (7वां वेतन आयोग)",
    cycle: "हर साल; 2026 की अधिसूचना 18 अक्टूबर 2026 तक नहीं आई",
    official: "https://ssc.gov.in/",
    page: "/jobs/ssc-mts-havaldar-recruitment-2026.html",
    source: "SSC Notice: MTS & Havaldar Examination 2025 (26.06.2025)",
  },
  {
    id: "ssc-chsl",
    name: "SSC CHSL (LDC/JSA, DEO)",
    body: "SSC",
    quals: ["12th"],
    qualText: "12वीं पास; कुछ मंत्रालयों के DEO पद के लिए 12वीं विज्ञान (गणित के साथ)।",
    age: [18, 27],
    ageNote: CENTRAL + "। CHSL 2026 में उम्र 1 अगस्त 2026 को गिनी गई; कट-ऑफ तारीख अधिसूचना में।",
    pay: "LDC/JSA Level-2 (₹19,900–63,200); DEO Level-4/5",
    cycle: "हर साल; CHSL 2026 का फॉर्म सितंबर-अक्टूबर 2026 में आया",
    official: "https://ssc.gov.in/",
    page: "/exams/ssc-exam-calendar-2026-2027.html",
    source: "SSC Notice: CHSL Examination 2026 (07.09.2026)",
  },
  {
    id: "ssc-steno",
    name: "SSC स्टेनोग्राफर ग्रेड C और D",
    body: "SSC",
    quals: ["12th"],
    qualText: "12वीं पास; स्टेनोग्राफी का स्किल टेस्ट पास करना होता है।",
    age: [18, 30],
    ageNote: "ग्रेड C: 18-30 साल, ग्रेड D: 18-27 साल (1 अगस्त 2026 को)। " + CENTRAL + "। कट-ऑफ तारीख अधिसूचना में।",
    cycle: "हर साल; 2026 का फॉर्म अप्रैल-मई 2026 में आया",
    official: "https://ssc.gov.in/",
    page: "/exams/ssc-exam-calendar-2026-2027.html",
    source: "SSC Notice: Stenographer Grade C & D Examination 2026 (24.04.2026)",
  },
  {
    id: "dp-constable",
    name: "दिल्ली पुलिस कांस्टेबल (Executive) पुरुष/महिला",
    body: "SSC",
    quals: ["12th"],
    qualText: "12वीं (10+2) पास। पुरुष उम्मीदवारों के पास PE&MT तक LMV (मोटरसाइकिल या कार) का पक्का ड्राइविंग लाइसेंस होना चाहिए।",
    age: [18, 25],
    ageNote: "OBC 3 साल, SC/ST 5 साल और कुछ खास वर्गों को छूट। 2025 भर्ती में उम्र 1 जुलाई 2025 को गिनी गई; कट-ऑफ तारीख अधिसूचना में।",
    pay: "Level-3 (₹21,700–69,100)",
    cycle: "नियमित नहीं; पिछली भर्ती सितंबर-अक्टूबर 2025 में",
    official: "https://ssc.gov.in/",
    source: "SSC Notice: Constable (Executive) Delhi Police Examination 2025 (22.09.2025)",
  },
  {
    id: "ssc-cgl",
    name: "SSC CGL (इंस्पेक्टर, असिस्टेंट, ऑडिटर आदि)",
    body: "SSC",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; कुछ पदों के लिए तय विषय (जैसे सांख्यिकी)।",
    age: [18, 32],
    ageNote: "पद के अनुसार 18-27, 18-30, 20-30 या 18-32 साल (1 अगस्त 2026 को)। " + CENTRAL + "। कट-ऑफ तारीख अधिसूचना में।",
    pay: "Level-4 (₹25,500) से Level-8 (₹1,51,100 तक), पद के अनुसार",
    cycle: "हर साल; 2026 का फॉर्म मई-जून 2026 में आया",
    official: "https://ssc.gov.in/",
    page: "/jobs/ssc-cgl-recruitment-2026.html",
    source: "SSC Notice: CGL Examination 2026 (21.05.2026)",
  },
  {
    id: "ssc-cpo",
    name: "SSC CPO: दिल्ली पुलिस SI और CAPF SI",
    body: "SSC",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन। CISF SI (Fire, सिर्फ पुरुष): B.Sc (PCM) या 10वीं + 3 साल का इंजीनियरिंग डिप्लोमा।",
    age: [20, 25],
    ageNote: "SI (Fire) CISF के लिए 18-30 साल। उम्र 1 अगस्त 2026 को गिनी गई। OBC 3, SC/ST 5 साल व अन्य छूट अधिसूचना के अनुसार।",
    pay: "Level-6 (₹35,400–1,12,400)",
    cycle: "हर साल; 2026 का फॉर्म सितंबर 2026 में आया",
    official: "https://ssc.gov.in/",
    page: "/exams/ssc-exam-calendar-2026-2027.html",
    source: "SSC Notice: SI in Delhi Police & CAPFs Examination 2026 (10.09.2026)",
  },
  {
    id: "ssc-je",
    name: "SSC JE (सिविल, मैकेनिकल, इलेक्ट्रिकल)",
    body: "SSC",
    quals: ["diploma", "engineering"],
    qualText: "संबंधित ब्रांच में इंजीनियरिंग डिप्लोमा या डिग्री (पद के अनुसार; कुछ विभागों में डिप्लोमा के साथ 2 साल का अनुभव)।",
    age: [18, 32],
    ageNote: "पद के अनुसार अधिकतम 30 या 32 साल (1 अगस्त 2026 को)। " + CENTRAL + "। कट-ऑफ तारीख अधिसूचना में।",
    pay: "Level-6 (₹35,400–1,12,400)",
    cycle: "हर साल; 2026 का फॉर्म सितंबर 2026 में आया",
    official: "https://ssc.gov.in/",
    page: "/exams/ssc-exam-calendar-2026-2027.html",
    source: "SSC Notice: Junior Engineer Examination 2026 (02.09.2026)",
  },
  // ---------- Railway ----------
  {
    id: "rrb-group-d",
    name: "रेलवे ग्रुप D (लेवल-1)",
    body: "RRB",
    quals: ["10th", "iti"],
    qualText: "10वीं पास या ITI या NAC (पद के अनुसार)।",
    age: [18, 33],
    ageNote: "CEN 09/2025 में उम्र 1 जनवरी 2026 को गिनी गई। OBC 3, SC/ST 5 साल, दिव्यांग को नियमानुसार छूट। कट-ऑफ तारीख CEN में।",
    pay: "Level-1 (शुरुआती बेसिक ₹18,000)",
    cycle: "लगभग हर साल; अगली भर्ती की तारीख घोषित नहीं",
    official: "https://www.rrbapply.gov.in/",
    page: "/exams/rrb-group-d-2026.html",
    source: "RRB CEN 09/2025 (Level-1), रिपोर्टों और CEN के अंश से",
  },
  {
    id: "rrb-ntpc-ug",
    name: "RRB NTPC 12वीं पास (क्लर्क, टिकट क्लर्क)",
    body: "RRB",
    quals: ["12th"],
    qualText: "12वीं पास, कम से कम 50% अंक (SC/ST, दिव्यांग, पूर्व सैनिक और ऊंची डिग्री वालों को छूट)।",
    age: [18, 30],
    ageNote: "उम्र 1 जनवरी 2027 को गिनी जाएगी। OBC 3, SC/ST 5 साल, दिव्यांग को नियमानुसार छूट। विस्तृत CEN में पुष्टि करें।",
    pay: "Level-2 और Level-3",
    cycle: "हर साल; CEN 07/2026 का फॉर्म 15 अक्टूबर–13 नवंबर 2026",
    official: "https://www.rrbapply.gov.in/",
    page: "/exams/rrb-ntpc-ug-2026.html",
    source: "RRB CEN 07/2026 (NTPC Undergraduate), रिपोर्टों से",
  },
  {
    id: "rrb-ntpc-grad",
    name: "RRB NTPC ग्रेजुएट (स्टेशन मास्टर, गुड्स ट्रेन मैनेजर आदि)",
    body: "RRB",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन (कुछ पदों के लिए टाइपिंग)।",
    age: [18, 33],
    ageNote: "उम्र 1 जनवरी 2027 को गिनी जाएगी। OBC 3, SC/ST 5 साल, दिव्यांग को नियमानुसार छूट।",
    pay: "Level-5 और Level-6",
    cycle: "हर साल; CEN 06/2026 का फॉर्म 8 अक्टूबर–6 नवंबर 2026",
    official: "https://www.rrbapply.gov.in/",
    page: "/jobs/rrb-ntpc-recruitment-2026.html",
    source: "RRB CEN 06/2026 (NTPC Graduate), रिपोर्टों से",
  },
  {
    id: "rrb-alp",
    name: "RRB असिस्टेंट लोको पायलट (ALP)",
    body: "RRB",
    quals: ["iti", "diploma"],
    qualText: "10वीं + तय ट्रेड में ITI (NCVT/SCVT) या एक्ट अप्रेंटिसशिप; या मैकेनिकल/इलेक्ट्रिकल/इलेक्ट्रॉनिक्स/ऑटोमोबाइल में 3 साल का डिप्लोमा।",
    age: [18, 30],
    ageNote: "CEN 01/2026 में उम्र 1 जुलाई 2026 को गिनी गई। OBC 3, SC/ST 5 साल की छूट। मेडिकल स्टैंडर्ड A-1 ज़रूरी; दिव्यांग आवेदन नहीं कर सकते।",
    pay: "Level-2 (शुरुआती ₹19,900)",
    cycle: "हर साल; RRB कैलेंडर में ALP का नोटिस साल की शुरुआत में (2026 का फॉर्म मई-जून 2026)",
    official: "https://www.rrbapply.gov.in/",
    page: "/exams/railway-rrb-exam-schedule-2026-2027.html",
    source: "RRB CEN 01/2026 (ALP), CEN के अंश और रिपोर्टों से",
  },
  {
    id: "rrb-je",
    name: "RRB JE, DMS, CMA",
    body: "RRB",
    quals: ["diploma", "engineering"],
    qualText: "संबंधित ब्रांच में इंजीनियरिंग डिप्लोमा या डिग्री (पद के अनुसार; CEN में देखें)।",
    age: [18, 33],
    ageNote: "CEN 04/2026 में उम्र 1 जनवरी 2027 को गिनी गई। OBC 3, SC/ST 5 साल, दिव्यांग को नियमानुसार छूट।",
    pay: "Level-6 (शुरुआती ₹35,400)",
    cycle: "लगभग हर साल; 2026 का फॉर्म अगस्त-सितंबर 2026 में आया",
    official: "https://www.rrbapply.gov.in/",
    page: "/jobs/rrb-junior-engineer-recruitment-2026-mseotm9d-0.html",
    source: "RRB CEN 04/2026 (JE/DMS/CMA), रिपोर्टों से",
  },
  {
    id: "rpf-constable",
    name: "RPF कांस्टेबल (रेलवे सुरक्षा बल)",
    body: "RRB",
    quals: ["10th"],
    qualText: "10वीं (मैट्रिक) पास।",
    age: [18, 28],
    ageNote: "पिछली भर्ती (CEN RPF 02/2024) में 1 जुलाई 2024 को 18-28 साल, जिसमें कोविड के कारण 3 साल की एक बार की छूट शामिल थी (सामान्य सीमा 18-25)। OBC 3, SC/ST 5 साल की छूट। अगली भर्ती में सीमा बदल सकती है।",
    pay: "Level-3 (शुरुआती ₹21,700)",
    cycle: "नियमित नहीं; 18 अक्टूबर 2026 तक नई CEN नहीं आई",
    official: "https://www.rrbapply.gov.in/",
    source: "RRB CEN RPF 02/2024 (Constable), CEN के अंश और रिपोर्टों से",
  },
  // ---------- Defence (Agnipath, Coast Guard, NDA) ----------
  {
    id: "army-agniveer-gd",
    name: "सेना अग्निवीर जनरल ड्यूटी (Army Agniveer GD)",
    body: "भारतीय सेना",
    quals: ["10th"],
    qualText: "10वीं पास, कुल 45% अंक और हर विषय में 33%।",
    age: [17.5, 21],
    ageNote: "ज़्यादातर रिपोर्टों में 17½ से 21 साल (कुछ में 22)। सटीक जन्म तिथि सीमा हर साल की अधिसूचना में। अविवाहित होना ज़रूरी।",
    gender: "male",
    pay: "अग्निपथ: पहले साल ₹30,000 प्रति माह का पैकेज, सेवा 4 साल",
    cycle: "हर साल; ऑनलाइन फॉर्म आम तौर पर फरवरी-अप्रैल, परीक्षा (CEE) जून के आसपास",
    official: "https://joinindianarmy.nic.in/",
    source: "Army Agniveer CEE 2026-27 (रिपोर्टें, तमिलनाडु सरकार प्रेस विज्ञप्ति); Agnipath PIB 2022",
  },
  {
    id: "army-agniveer-tradesman",
    name: "सेना अग्निवीर ट्रेड्समैन (8वीं/10वीं पास)",
    body: "भारतीय सेना",
    quals: ["8th", "10th"],
    qualText: "कुछ ट्रेड्स के लिए 8वीं पास, बाकी के लिए 10वीं पास; हर विषय में कम से कम 33%।",
    age: [17.5, 21],
    ageNote: "ज़्यादातर रिपोर्टों में 17½ से 21 साल (कुछ में 22)। सटीक जन्म तिथि सीमा अधिसूचना में। अविवाहित होना ज़रूरी।",
    gender: "male",
    pay: "अग्निपथ: पहले साल ₹30,000 प्रति माह का पैकेज, सेवा 4 साल",
    cycle: "हर साल; अग्निवीर GD के साथ एक ही अधिसूचना (फरवरी-अप्रैल)",
    official: "https://joinindianarmy.nic.in/",
    source: "Army Agniveer CEE 2026-27 (तमिलनाडु सरकार प्रेस विज्ञप्ति, रिपोर्टें); Agnipath PIB 2022",
  },
  {
    id: "army-agniveer-clerk",
    name: "सेना अग्निवीर क्लर्क / स्टोर कीपर टेक्निकल",
    body: "भारतीय सेना",
    quals: ["12th"],
    qualText: "12वीं (किसी भी स्ट्रीम) कुल 60% और हर विषय में 50%; अंग्रेज़ी और गणित/अकाउंट्स/बुक कीपिंग में 50% ज़रूरी।",
    age: [17.5, 21],
    ageNote: "ज़्यादातर रिपोर्टों में 17½ से 21 साल। सटीक जन्म तिथि सीमा अधिसूचना में। अविवाहित होना ज़रूरी।",
    gender: "male",
    pay: "अग्निपथ: पहले साल ₹30,000 प्रति माह का पैकेज, सेवा 4 साल",
    cycle: "हर साल; अग्निवीर GD के साथ एक ही अधिसूचना (फरवरी-अप्रैल)",
    official: "https://joinindianarmy.nic.in/",
    source: "Army Agniveer CEE 2026-27 (रिपोर्टें); Agnipath PIB 2022",
  },
  {
    id: "navy-agniveer-ssr",
    name: "नौसेना अग्निवीर SSR (Navy Agniveer SSR)",
    body: "भारतीय नौसेना",
    quals: ["12th", "diploma"],
    qualText: "12वीं गणित और भौतिकी के साथ कुल 50%; या 3 साल का इंजीनियरिंग डिप्लोमा / 2 साल का वोकेशनल कोर्स (50%)।",
    age: [17.5, 22],
    ageNote: "अविवाहित पुरुष और महिला। बैच 01/2027: जन्म 1 दिसंबर 2004–31 मई 2009; बैच 02/2027: 1 मई 2005–31 अक्टूबर 2009 (रिपोर्टों के अनुसार)। हर बैच की सीमा अधिसूचना में।",
    pay: "अग्निपथ: पहले साल ₹30,000 प्रति माह का पैकेज, सेवा 4 साल",
    cycle: "साल में आम तौर पर एक अधिसूचना, दो बैच के लिए (2026 में मार्च-अप्रैल)",
    official: "https://www.joinindiannavy.gov.in/",
    page: "/jobs/indian-navy-agniveer-ssr-recruitment-2026.html",
    source: "Navy Agniveer SSR 01/2027 & 02/2027 (मार्च 2026), रिपोर्टों से",
  },
  {
    id: "airforce-agniveervayu",
    name: "वायुसेना अग्निवीरवायु (Agniveervayu)",
    body: "भारतीय वायुसेना",
    quals: ["12th", "diploma"],
    qualText: "12वीं कुल 50% और अंग्रेज़ी में 50% (विज्ञान: गणित, भौतिकी, अंग्रेज़ी); या तय डिप्लोमा/वोकेशनल कोर्स।",
    age: [17.5, 22],
    ageNote: "अविवाहित पुरुष और महिला। इनटेक 02/2027: जन्म 1 जुलाई 2005–1 जनवरी 2010; भर्ती के समय उम्र 22 साल से ज़्यादा नहीं (रिपोर्टों के अनुसार)।",
    pay: "अग्निपथ: पहले साल ₹30,000 प्रति माह का पैकेज, सेवा 4 साल",
    cycle: "साल में दो इनटेक; 2026 में फॉर्म जनवरी और जुलाई में",
    official: "https://agnipathvayu.cdac.in/",
    source: "IAF Agniveervayu Intake 02/2027 (जुलाई 2026), रिपोर्टों से",
  },
  {
    id: "icg-navik-gd",
    name: "कोस्ट गार्ड नाविक (जनरल ड्यूटी)",
    body: "भारतीय तटरक्षक",
    quals: ["12th"],
    qualText: "12वीं गणित और भौतिकी के साथ पास (COBSE मान्य बोर्ड)।",
    age: [18, 22],
    ageNote: "पुरुष और महिला। बैच 01/2027 व 02/2027: जन्म 1 नवंबर 2005–1 मई 2009 के बीच। OBC 3, SC/ST 5 साल की छूट।",
    pay: "Level-3 (बेसिक ₹21,700)",
    cycle: "साल में दो बैच; 01/2027 व 02/2027 का फॉर्म 6–21 अक्टूबर 2026 (SSC के ज़रिए)",
    official: "https://ssc.gov.in/",
    source: "Indian Coast Guard CGEPT 01/2027 & 02/2027 विज्ञापन (06.10.2026)",
  },
  {
    id: "icg-navik-db",
    name: "कोस्ट गार्ड नाविक (डोमेस्टिक ब्रांच)",
    body: "भारतीय तटरक्षक",
    quals: ["10th"],
    qualText: "10वीं पास (COBSE मान्य बोर्ड)।",
    age: [18, 22],
    ageNote: "सिर्फ पुरुष। बैच 02/2027: जन्म 1 नवंबर 2005–1 अक्टूबर 2009 के बीच। OBC 3, SC/ST 5 साल की छूट।",
    gender: "male",
    pay: "Level-3 (बेसिक ₹21,700)",
    cycle: "साल में दो बैच; 02/2027 का फॉर्म 6–21 अक्टूबर 2026 (SSC के ज़रिए)",
    official: "https://ssc.gov.in/",
    source: "Indian Coast Guard CGEPT 01/2027 & 02/2027 विज्ञापन (06.10.2026)",
  },
  {
    id: "icg-hygienist",
    name: "कोस्ट गार्ड हाइजीनिस्ट-I",
    body: "भारतीय तटरक्षक",
    quals: ["10th", "iti"],
    qualText: "10वीं (मैट्रिक) या ITI या समकक्ष।",
    age: [18, 24],
    ageNote: "सिर्फ पुरुष। बैच 02/2027: जन्म 1 नवंबर 2002–1 अक्टूबर 2009 के बीच। OBC 3, SC/ST 5 साल की छूट।",
    gender: "male",
    pay: "Level-3 (बेसिक ₹21,700)",
    cycle: "पद हर बैच में नहीं आता; 02/2027 का फॉर्म 6–21 अक्टूबर 2026 (SSC के ज़रिए)",
    official: "https://ssc.gov.in/",
    source: "Indian Coast Guard CGEPT 01/2027 & 02/2027 विज्ञापन (06.10.2026)",
  },
  {
    id: "icg-yantrik",
    name: "कोस्ट गार्ड यांत्रिक (Yantrik)",
    body: "भारतीय तटरक्षक",
    quals: ["diploma"],
    qualText: "10वीं + इलेक्ट्रिकल/मैकेनिकल/इलेक्ट्रॉनिक्स/टेलीकम्युनिकेशन में 3 या 4 साल का AICTE डिप्लोमा; या 10वीं व 12वीं + 2 या 3 साल का ऐसा डिप्लोमा।",
    age: [18, 22],
    ageNote: "सिर्फ पुरुष। बैच 01/2027: जन्म 1 मई 2005–1 मई 2009 के बीच। OBC 3, SC/ST 5 साल की छूट।",
    gender: "male",
    pay: "Level-5 (बेसिक ₹29,200) + यांत्रिक वेतन ₹6,200",
    cycle: "साल में दो बैच; 01/2027 का फॉर्म 6–21 अक्टूबर 2026 (SSC के ज़रिए)",
    official: "https://ssc.gov.in/",
    source: "Indian Coast Guard CGEPT 01/2027 & 02/2027 विज्ञापन (06.10.2026)",
  },
  {
    id: "upsc-nda",
    name: "UPSC NDA और NA (सेना, नौसेना, वायुसेना अफसर)",
    body: "UPSC",
    quals: ["12th"],
    qualText: "12वीं पास (थल सेना: किसी भी स्ट्रीम; वायुसेना और नौसेना: भौतिकी और गणित के साथ)। 12वीं में पढ़ रहे छात्र भी आवेदन कर सकते हैं।",
    age: [16.5, 19.5],
    ageNote: "अविवाहित उम्मीदवार। NDA (II) 2026: जन्म 2 जनवरी 2008–1 जनवरी 2011 के बीच। हर परीक्षा की जन्म तिथि सीमा अधिसूचना में; आयु छूट नहीं।",
    cycle: "साल में दो बार; NDA (I) 2027 की अधिसूचना 2 दिसंबर 2026 (UPSC कैलेंडर)",
    official: "https://upsc.gov.in/",
    page: "/exams/upsc-annual-exam-calendar-2027.html",
    source: "UPSC NDA & NA (II) 2026, रिपोर्टों से; UPSC कैलेंडर 2027",
  },
  // ---------- UPSC (graduate) ----------
  {
    id: "upsc-cse",
    name: "UPSC सिविल सेवा (IAS, IPS, IFS)",
    body: "UPSC",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; अंतिम वर्ष के छात्र प्रीलिम्स के लिए आवेदन कर सकते हैं।",
    age: [21, 32],
    ageNote: CENTRAL + "। उम्र परीक्षा वर्ष की 1 अगस्त को गिनी जाती है।",
    pay: "Level-10 (शुरुआती ₹56,100)",
    cycle: "हर साल; CSE 2027 की अधिसूचना 13 जनवरी 2027 (UPSC कैलेंडर)",
    official: "https://upsc.gov.in/",
    page: "/jobs/upsc-civil-services-ias-ifs-2027.html",
    source: "UPSC CSE 2026 अधिसूचना (फरवरी 2026), रिपोर्टों से",
  },
  {
    id: "upsc-capf",
    name: "UPSC CAPF असिस्टेंट कमांडेंट (BSF, CRPF, CISF, ITBP, SSB)",
    body: "UPSC",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; अंतिम वर्ष के छात्र भी आवेदन कर सकते हैं।",
    age: [20, 25],
    ageNote: "CAPF (AC) 2026 में उम्र 1 अगस्त 2026 को गिनी गई। OBC 3, SC/ST 5 साल व कुछ अन्य वर्गों को छूट; कट-ऑफ तारीख अधिसूचना में।",
    cycle: "हर साल; अधिसूचना आम तौर पर फरवरी-मार्च, परीक्षा जुलाई-अगस्त (CAPF 2027 परीक्षा 4 जुलाई 2027)",
    official: "https://upsc.gov.in/",
    page: "/exams/upsc-annual-exam-calendar-2027.html",
    source: "UPSC CAPF (AC) 2026 अधिसूचना (20 फरवरी 2026), रिपोर्टों से",
  },
  // ---------- Banking ----------
  {
    id: "ibps-po",
    name: "IBPS PO (सरकारी बैंक प्रोबेशनरी ऑफिसर)",
    body: "IBPS",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन।",
    age: [20, 30],
    ageNote: CENTRAL + "। PO/MT-XVI में उम्र 1 जुलाई 2026 को गिनी गई; कट-ऑफ तारीख अधिसूचना में।",
    pay: "JMGS-I (शुरुआती बेसिक ₹48,480)",
    cycle: "हर साल; अधिसूचना आम तौर पर जून-जुलाई",
    official: "https://www.ibps.in/",
    page: "/jobs/ibps-po-mt-xvi-recruitment-2026-4455-posts.html",
    source: "IBPS CRP PO/MT-XVI (30 जून 2026), रिपोर्टों से",
  },
  {
    id: "ibps-clerk",
    name: "IBPS क्लर्क (Customer Service Associate)",
    body: "IBPS",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; कंप्यूटर चलाने का ज्ञान।",
    age: [20, 28],
    ageNote: CENTRAL + "। कट-ऑफ तारीख अधिसूचना में।",
    cycle: "हर साल; अधिसूचना आम तौर पर जुलाई-अगस्त",
    official: "https://www.ibps.in/",
    page: "/jobs/ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html",
    source: "IBPS CRP CSA-XVI (अगस्त 2026), रिपोर्टों से",
  },
  {
    id: "ibps-rrb-oa",
    name: "IBPS RRB ऑफिस असिस्टेंट (ग्रामीण बैंक क्लर्क)",
    body: "IBPS",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; स्थानीय भाषा की जानकारी ज़रूरी।",
    age: [18, 28],
    ageNote: CENTRAL + "। CRP RRBs-XV में उम्र 1 सितंबर 2026 को गिनी गई।",
    cycle: "हर साल; अधिसूचना आम तौर पर अगस्त-सितंबर",
    official: "https://www.ibps.in/",
    page: "/jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html",
    source: "IBPS CRP RRBs-XV (31 अगस्त 2026), रिपोर्टों से",
  },
  {
    id: "ibps-rrb-po",
    name: "IBPS RRB ऑफिसर स्केल-I (ग्रामीण बैंक PO)",
    body: "IBPS",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; स्थानीय भाषा की जानकारी ज़रूरी।",
    age: [18, 30],
    ageNote: CENTRAL + "। CRP RRBs-XV में उम्र 1 सितंबर 2026 को गिनी गई।",
    cycle: "हर साल; अधिसूचना आम तौर पर अगस्त-सितंबर",
    official: "https://www.ibps.in/",
    page: "/jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html",
    source: "IBPS CRP RRBs-XV (31 अगस्त 2026), रिपोर्टों से",
  },
  {
    id: "sbi-po",
    name: "SBI PO (प्रोबेशनरी ऑफिसर)",
    body: "SBI",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; अंतिम वर्ष के छात्र शर्त के साथ।",
    age: [21, 30],
    ageNote: "OBC 3 साल, SC/ST 5 साल, दिव्यांग को नियमानुसार छूट। 2026-27 भर्ती में उम्र 1 अप्रैल 2026 को गिनी गई।",
    pay: "JMGS-I बेसिक ₹48,480 + 4 अग्रिम इंक्रीमेंट",
    cycle: "हर साल; 2026 में अधिसूचना जून में",
    official: "https://sbi.bank.in/web/careers",
    page: "/jobs/sbi-po-recruitment-2026-2027.html",
    source: "SBI CRPD/PO/2026-27/09 (जून 2026), रिपोर्टों से",
  },
  {
    id: "sbi-clerk",
    name: "SBI क्लर्क (जूनियर एसोसिएट)",
    body: "SBI",
    quals: ["graduate"],
    qualText: "किसी भी विषय में ग्रेजुएशन; अंतिम वर्ष के छात्र शर्त के साथ।",
    age: [20, 28],
    ageNote: CENTRAL + "। 2026 भर्ती में उम्र 1 अप्रैल 2026 को गिनी गई।",
    pay: "शुरुआती बेसिक ₹26,730 (ग्रेजुएट के 2 इंक्रीमेंट सहित)",
    cycle: "हर साल; 2026 में फॉर्म अगस्त में",
    official: "https://sbi.bank.in/web/careers",
    page: "/jobs/sbi-clerk-junior-associate-recruitment-2026.html",
    source: "SBI CRPD/CR/2026-27/17 (अगस्त 2026), रिपोर्टों से",
  },
  // ---------- Post, Health ----------
  {
    id: "india-post-gds",
    name: "इंडिया पोस्ट GDS (ग्रामीण डाक सेवक: BPM, ABPM, डाक सेवक)",
    body: "डाक विभाग",
    quals: ["10th"],
    qualText: "10वीं पास (गणित और अंग्रेज़ी के साथ), स्थानीय भाषा पढ़ी हो; साइकिल चलाना आना चाहिए। चयन 10वीं के अंकों की मेरिट से, कोई परीक्षा नहीं।",
    age: [18, 40],
    ageNote: "SC/ST, OBC और दिव्यांग को नियमानुसार छूट (सटीक साल अधिसूचना में)। कट-ऑफ तारीख अधिसूचना में।",
    pay: "TRCA: ABPM/डाक सेवक ₹10,000 से, BPM ₹12,000 से",
    cycle: "साल में आम तौर पर 1-2 बार (2026 में जनवरी-फरवरी और अगस्त-सितंबर)",
    official: "https://indiapostgdsonline.gov.in/",
    page: "/jobs/india-post-gds-recruitment-2026.html",
    source: "India Post GDS Schedule-I और Schedule-II 2026, रिपोर्टों से",
  },
  {
    id: "aiims-norcet",
    name: "AIIMS NORCET नर्सिंग ऑफिसर",
    body: "AIIMS",
    quals: ["nursing"],
    qualText: "B.Sc (ऑनर्स) नर्सिंग / B.Sc नर्सिंग / पोस्ट-बेसिक B.Sc नर्सिंग; या GNM डिप्लोमा + 50 बेड वाले अस्पताल में 2 साल का अनुभव। नर्सिंग काउंसिल में रजिस्ट्रेशन ज़रूरी।",
    age: [18, 30],
    ageNote: "SC/ST, OBC, दिव्यांग आदि को केंद्र सरकार के नियमों के अनुसार छूट। कट-ऑफ तारीख अधिसूचना में।",
    pay: "Level-7 (₹44,900–1,42,400)",
    cycle: "साल में आम तौर पर दो बार; पिछली अधिसूचना जुलाई 2026",
    official: "https://www.aiimsexams.ac.in/",
    page: "/jobs/aiims-norcet-11-nursing-officer-recruitment-2026-2218-posts-ms8e3ooo-4.html",
    source: "AIIMS NORCET (Notice 103/2026, जुलाई 2026), रिपोर्टों से",
  },
];

export const FINDER_VERIFIED = "18 अक्टूबर 2026";
