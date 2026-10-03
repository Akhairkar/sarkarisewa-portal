// Job pages in /jobs/ with the facts the hub needs. Title and description are
// read from each page; last dates were taken from each page's important-dates
// table (checked 4 Oct 2026). status "expected" = dates are only scheduled.
export type Job = { slug: string; sector: "SSC" | "UPSC" | "Banking" | "Railway" | "Defence" | "Scientific" | "State Govt" | "Health" | "Post"; last: string; lastNote?: string; status?: "expected" };

export const JOBS: Job[] = [
  { slug: "rrb-ntpc-recruitment-2026", sector: "Railway", last: "2026-10-20", lastNote: "ग्रेजुएट पद 13 अक्टूबर, 12वीं पास पद 20 अक्टूबर 2026" },
  { slug: "upsc-civil-services-ias-ifs-2027", sector: "UPSC", last: "2027-02-16" },
  { slug: "sbi-clerk-junior-associate-recruitment-2026", sector: "Banking", last: "2026-12-10", status: "expected", lastNote: "संभावित: नोटिफिकेशन 15 नवंबर, आवेदन 17 नवंबर से 10 दिसंबर 2026" },
  { slug: "upsc-advertisement-11-2026-212-posts", sector: "UPSC", last: "2026-10-02", lastNote: "लद्दाख के पद: 9 अक्टूबर 2026" },
  { slug: "rajasthan-safai-karmachari-sanitation-worker-recruitment-2026-msa62jkl-3", sector: "State Govt", last: "2026-09-28" },
  { slug: "sbi-po-recruitment-2026-2027", sector: "Banking", last: "2026-09-27" },
  { slug: "rrb-junior-engineer-recruitment-2026-mseotm9d-0", sector: "Railway", last: "2026-09-13" },
  { slug: "ibps-po-mt-xvi-recruitment-2026-4455-posts", sector: "Banking", last: "2026-08-28" },
  { slug: "ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0", sector: "Banking", last: "2026-08-21" },
  { slug: "isro-scientistengineer-recruitment-2026-mseotm9e-1", sector: "Scientific", last: "2026-08-17" },
  { slug: "isro-recruitment-2026-assistant-udc-jpa-stenographer-244-posts-ms8e3oon-0", sector: "Scientific", last: "2026-08-16" },
  { slug: "rbi-grade-b-officer-recruitment-2026", sector: "Banking", last: "2026-08-16" },
  { slug: "rrb-section-controller-recruitment-2026-cen-032026-119-posts-ms8e3ooo-1", sector: "Railway", last: "2026-08-14" },
  { slug: "upsc-principal-vice-principal-recruitment-2026-delhi-education-dept-828-posts-ms8e3ooo-2", sector: "UPSC", last: "2026-08-14" },
  { slug: "aiims-norcet-11-nursing-officer-recruitment-2026-2218-posts-ms8e3ooo-4", sector: "Health", last: "2026-08-13" },
  { slug: "rajasthan-high-court-stenographer-recruitment-2026-grade-ii-iii-163-posts-ms8e3ooo-3", sector: "State Govt", last: "2026-08-10" },
  { slug: "pnb-local-bank-officer-lbo-recruitment-2026-msa62jkl-2", sector: "Banking", last: "2026-08-09" },
  { slug: "india-post-gds-recruitment-2026", sector: "Post", last: "2026-08-05" },
  { slug: "ssc-mts-havaldar-recruitment-2026", sector: "SSC", last: "2026-07-31" },
  { slug: "ssc-cgl-recruitment-2026", sector: "SSC", last: "2026-07-24" },
  { slug: "upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1", sector: "State Govt", last: "2026-07-05" },
  { slug: "ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026", sector: "Banking", last: "2026-06-30" },
  { slug: "indian-navy-agniveer-ssr-recruitment-2026", sector: "Defence", last: "2026-06-05" },
];
