// Employer of each job guide in guides/jobs/, for the JobPosting data Google
// reads (lib/job-posting.ts). Guides written as .ts files carry no separate
// "employer" field, so it is kept here. Jobs from jobs-daily/*.json do not
// need an entry: their file has the organisation. A job with no entry here
// (and no daily file) gets no JobPosting data, which is safer than a guess.
// type: Google's employmentType; default FULL_TIME.
export type JobOrg = { org: string; type?: "FULL_TIME" | "CONTRACTOR" | "OTHER" };

export const JOB_ORGS: Record<string, JobOrg> = {
  "phhc-chowkidar-recruitment-2026": { org: "Punjab and Haryana High Court, Chandigarh" },
  "rites-assistant-manager-mechanical-recruitment-2026": { org: "RITES Ltd", type: "CONTRACTOR" },
  "svsu-skill-instructor-recruitment-2026": { org: "Shri Vishwakarma Skill University, Palwal" },
  "cg-police-bastar-fighter-recruitment-2026": { org: "Chhattisgarh Police" },
  "jharkhand-home-guard-latehar-recruitment-2026": { org: "Jharkhand Home Defence Corps, Latehar", type: "OTHER" },
  "tgpsc-mpso-aso-recruitment-2026": { org: "Telangana Public Service Commission (TGPSC)" },
  "grse-journeyman-driver-recruitment-2026": { org: "Garden Reach Shipbuilders & Engineers Ltd (GRSE)" },
  "opsc-scientific-officer-recruitment-2026": { org: "Odisha Public Service Commission (OPSC)" },
  "bel-probationary-engineer-recruitment-2026": { org: "Bharat Electronics Limited (BEL)" },
  "rrb-isolated-categories-recruitment-2026": { org: "Railway Recruitment Boards (RRB), Ministry of Railways" },
  "aees-teacher-recruitment-2026": { org: "Atomic Energy Education Society (AEES)" },
  "appsc-group-2-recruitment-2026": { org: "Andhra Pradesh Public Service Commission (APPSC)" },
  "ibps-server-administrator-assistant-recruitment-2026": { org: "Institute of Banking Personnel Selection (IBPS)" },
  "kea-fda-sda-recruitment-2026": { org: "Karnataka Examinations Authority (KEA)" },
  "ongc-apprentice-recruitment-2026": { org: "Oil and Natural Gas Corporation (ONGC)", type: "OTHER" },
  "du-non-teaching-assistant-recruitment-2026": { org: "University of Delhi" },
  "uppsc-ro-aro-recruitment-2026": { org: "Uttar Pradesh Public Service Commission (UPPSC)" },
  "upessc-tgt-recruitment-2026": { org: "Uttar Pradesh Education Service Selection Commission (UPESSC)" },
  "upessc-principal-headmaster-recruitment-2026": { org: "Uttar Pradesh Education Service Selection Commission (UPESSC)" },
  "isro-ursc-technician-driver-recruitment-2026": { org: "ISRO U R Rao Satellite Centre (URSC), Bengaluru" },
  "dtu-assistant-professor-recruitment-2026": { org: "Delhi Technological University (DTU)" },
  "rrb-station-master-recruitment-2026": { org: "Railway Recruitment Boards (RRB), Ministry of Railways" },
  "tnpsc-group-4-recruitment-2026": { org: "Tamil Nadu Public Service Commission (TNPSC)" },
  "wbpsc-sub-surveyor-recruitment-2026": { org: "West Bengal Public Service Commission (WBPSC)" },
  "isro-sdsc-shar-recruitment-2026": { org: "ISRO Satish Dhawan Space Centre SHAR, Sriharikota" },
  "income-tax-delhi-sports-quota-recruitment-2026": { org: "Income Tax Department, Delhi" },
  "oavs-teacher-recruitment-2026": { org: "Odisha Adarsha Vidyalaya Sangathan (OAVS)" },
  "crpf-sports-quota-head-constable-constable-recruitment-2026": { org: "Central Reserve Police Force (CRPF)" },
  "indian-army-tes-57-recruitment-2026": { org: "Indian Army" },
  "rrc-nwr-jaipur-apprentice-recruitment-2026": { org: "Railway Recruitment Cell, North Western Railway, Jaipur", type: "OTHER" },
  "cwc-recruitment-2026": { org: "Central Warehousing Corporation (CWC)" },
};

// Pages in /jobs/ that are not a vacancy to apply for (no JobPosting data).
export const NOT_A_JOB = new Set(["haryana-ration-depot-licence-2026"]);
