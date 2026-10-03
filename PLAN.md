# SarkariSewa India: Master Plan

Ye repo ka **ek hi** doc hai. Har session isi file se shuru hoga aur isi file mein update hoga. Koi naya README/HANDOFF/STATUS file nahi banana.

## 1. Site ka goal
- **Information + paid services** portal.
- Free info pages par **AdSense** lagega, isliye koi page thin nahi hona chahiye.
- Paid services API se chalengi.
- **Target audience:** sabse pehle students (naukri, exam, scholarship, documents), uske baad aam citizen aur chhote business.

## 2. Kaam ke rules (pichhli galtiyon se seekh)
1. Script chala kar bulk ya random pages **nahi** banane. Har page research karke, haath se aur genuinely useful banana hai.
2. Har page par ye sab hona chahiye:
   - Upar seedha jawab
   - Step-by-step process
   - Documents, fees aur dates ki table
   - **Official link** aur "last verified" date
   - Real FAQ
   - Related services/tools grid
   - Strong internal linking
   - Sahi schema
3. Har page banane se pehle online research hogi: search intent kya hai, top results kaun se hain, unmein kya gap hai.
4. Kaam chhote batches mein hoga. Har batch user review karega, uske baad hi live hoga.
5. Header, footer aur common design ek jagah se aayega (components). Hazaron files mein find-replace scripts nahi chalane.
6. Purane pages ke URL jo traffic laate hain, wahi rahenge. Agar URL badla toh 301 redirect lagega.

## 3. Faisle (decided)
| Topic | Faisla |
|---|---|
| Tech | **Astro**. Output pure static HTML hoga, isliye indexing par koi asar nahi. Sitemap, hreflang, canonical aur schema components se automatic banenge. |
| Hosting | Abhi **GitHub Pages + GitHub Actions** (Astro build). Baad mein Cloudflare Pages par shift karenge. |
| Purani site | Purani files repo root mein hi rahengi. Deploy ke waqt `web/scripts/assemble.mjs` purani site copy karta hai (scripts, `.py`, `.md`, SQL, CSV chhod kar), phir Astro ke naye pages usi URL par overwrite karta hai, phir sitemap update karta hai. Naye pages ek-ek karke purane pages ki jagah lenge. |
| Bhasha | Har bhasha ka alag URL hoga, hreflang ke saath. **Hindi primary**, English saath mein. Marathi sirf wahan jahan genuinely useful ho (Maharashtra-specific). JS toggle se bhasha badalne wala tarika band hoga. |
| CSC / Jan Aushadhi | Ye ~25% traffic laate hain, isliye inhe **bhi upgrade karna hai**: naya design/logo, research-based title/meta, aur real data (official PMBJP / CSC data) se useful district pages. |
| Payment | GST verification ka existing flow waisa hi rahega (`private/gstin-verification/` + `cloudflare/gstin-api/` worker). Nayi API services ke liye naya flow banega. |
| Brand | Naya logo aur design system banega, jo poori site par lagega (CSC/JA pages bhi). |
| Title/meta | Saare pages ke title, description aur meta tags research karke badal sakte hain (million-visitor strategy). |
| Explore block | Har page par do block honge: (1) **Related**, jo usi topic se jude pages dikhaye; (2) **Attention-grabbing "Ye bhi dekhein"**, jo popular/trending services, tools aur paid services dikhaye, chahe topic se related na ho. Maqsad hai ki visitor site explore kare (pages/session badhe). |
| Hub pages | Banenge. Har category ka ek hub page hoga, aur topic clusters usi hub se linked honge. |

## 4. Paid services
| Service | Status |
|---|---|
| GSTIN verification | Live hai (existing flow) |
| RC / challan | Agli API service |
| PAN, Aadhaar etc. | Baad mein decide hoga |

## 5. Phases
- [x] Phase 0: Targets discuss karna, purane docs hatana
- [x] Phase 1: GSC data analysis (section 6 dekho)
- [ ] Phase 2: Site structure. Menu, hubs, URL plan aur language URL plan. (Draft section 7-8 mein hai, user approval baaki)
- [x] Phase 3: Naya logo (live, poori site par) + design system (`web/src/styles/global.css`)
- [~] Phase 4: Astro setup `web/` mein ho gaya + `.github/workflows/deploy-site.yml`. **User action baaki:** GitHub Settings → Pages → Source = "GitHub Actions". Iske baad hi naye pages live honge.
- [ ] Phase 5: Hub pages + paid services pages (GST, RC/challan)
- [ ] Phase 6: Information pages, chhote batches mein
- [ ] Phase 7: CSC/JA par faisla, phir AdSense apply

## 6. GSC analysis (export: 2026-10-03, last 3 months, Web)
- **Total:** 5,485 clicks, 3.7 lakh impressions. Avg position ~7.7. **85% traffic mobile** se aata hai.
- **Growth:** weekly clicks 10 (July end) se 1,561 (Sept 18 wala week) tak pahunche. Site nayi hai aur tezi se badh rahi hai.
- **Clicks kahan se aate hain** (top 1000 pages):
  | Group | Clicks | Share |
  |---|---|---|
  | `states/*` document pages (senior citizen, labour, ration, voter/SIR, birth, caste, driving, domicile, employment exchange) | ~2,800 | ~50% (core asset) |
  | CSC locator | 873 | |
  | Jan Aushadhi | 509 | |
  | CSC + JA milakar | 1,382 | ~25% (delete nahi karna) |
  | Homepage | 624 | |
  | Blog | 176 | |
  | Jobs + exams | 103 | (student content abhi lagbhag zero) |
- **"Sarkari PSA" brand confusion:** "sarkari psa / सरकारी psa" queries ke 76k+ impressions hain (saari impressions ka ~20%), CTR <1%. Log kisi doosri site ko dhoondh rahe hain. Iske liye optimize **nahi** karna.
- **Mauka (position 5-10, CTR kam):** Delhi labour card, West Bengal/Delhi/Haryana employment exchange, `exams/index` (9k impr, 0.58% CTR), Uttarakhand/MP caste certificate, UDID card download, RTI guide, Haryana domicile, SBI clerk. Page 1 ke neeche se top 3 tak aane par clicks 3-5 guna ho sakte hain.
- **Naye page ke ideas (demand hai, achha page nahi):** Sanchar Saathi/TAFCOP, Swavlamban/UDID card, state rojgar portals (CG, Haryana, Delhi), hill certificate, legal heir certificate, minority certificate, BOCW card, Vahli Dikri Yojana.
- **Hindi queries** bahut aati hain (jaise "सीनियर सिटीजन कार्ड ..."). Ye Hindi-primary wale faisle ko sahi saabit karta hai.
- **Priority:**
  1. States document cluster rebuild (URL same rakhne hain)
  2. Homepage + hubs
  3. Student cluster (jobs/exams/scholarship), jo naye sire se banana hai

## 7. Competitor analysis (2026-10-03)
Note: is environment se competitor sites khul nahi rahi (network block), isliye analysis sirf search results par based hai.

| Type | Kaun | Taakat | Kamzori (hamara mauka) |
|---|---|---|---|
| Bade brands | cleartax, bankbazaar, HDFC/Kotak/Canara blogs | Domain authority, saaf design | Ek generic national page hota hai, state-specific detail kam. Zyadatar English mein, Hindi ke liye Google Translate wala version. |
| Chhote yojana blogs | chhotitools, legaldev, yojanaschemehindi, egovtschemes, topguide, wikiprocedure | Hindi, bahut saare pages | Thin, purane (2023/2025 ka content), ads se bhare, official link aur verified date nahi |
| Job sites | sarkariresult.app, freejobalert, quicksarkari, sarkarijob, **sarkarisewa.com** (naam milta-julta hai) | Roz update, brand search | Sirf link ki list, koi explanation nahi, clutter, "eligible hun ya nahi" type tools nahi |
| "Sarkari PSA" | sarkaripsa.com (yojana, jobs, aur "Sarkari Kaam" official links page) | Brand search (yahi hamare 76k impressions hain) | Hamare jaisa hi content hai. Hamein brand query nahi, topic jeetna hai. |
| Near-me | locator.csc.gov.in, sarkariyojana.com, goodreturns | Official data | Hamare CSC pages already rank kar rahe hain |
| Scholarship | buddy4study, shiksha, selfstudys | Strong scholarship content | State-wise documents + scholarship + jobs ek jagah kahin nahi |

**Hamara differentiation:**
1. State-specific sahi jaankari, official link + "last verified" date ke saath
2. Hindi-first, asli Hindi (translate nahi)
3. "Rejection ke kaaran aur solution" section
4. Offline ke liye nearest CSC (hamare CSC pages se internal link)
5. Students ke liye eligibility tools (age, qualification) + deadline calendar
6. Fast, mobile-first site

**Competitors se seekha format:** ek "Sarkari Kaam / सभी official links" directory page. Isme demand hai, aur ye ek strong hub banta hai.

## 8. Site structure (draft, approval baaki)
**Bhasha URL:** Hindi default rahegi, existing root URLs par. Isse purane ranking wale URL nahi badlenge. English `/en/...` par, Marathi `/mr/...` par (sirf chune hue pages).

**Main menu.** Mobile par neeche bottom nav mein 5 items honge, desktop par upar.

| Menu | Hub URL | Andar kya |
|---|---|---|
| Home | `/` | Search, popular kaam, latest jobs/deadlines, state chunein |
| दस्तावेज़ (Documents) | `/documents/` | Har document ka hub (`/documents/senior-citizen-card/`): national overview + 36 states ka grid. State pages ke URL same rahenge (`/states/<state>-<doc>.html`). |
| Students | `/students/` | Jobs (`/jobs/`), Exam calendar (`/exams/`), Admit card/Result, Scholarship (`/scholarship/`), eligibility tools |
| Yojana | `/yojana/` | Central + state schemes |
| Tools | `/tools/` | Existing calculators/tools (age, salary, tax, document compressor, eligibility checker) |
| Paid Services | `/services/` | GSTIN verification (live), RC/challan (next) |
| Near Me | `/near-me/` | CSC locator, Jan Aushadhi (existing pages) |
| Sarkari Kaam | `/sarkari-kaam/` | Saare official portals ki verified directory |
| State hub | `/states/<state>.html` (existing) | Us state ke saare documents, yojana, jobs, CSC/JA |

**Har page ka template (document x state):**
1. Seedha jawab box: fees, samay, portal, kaun apply kar sakta hai
2. Official links box (last verified date ke saath)
3. Eligibility
4. Documents checklist
5. Online apply steps
6. Offline / CSC
7. Status check
8. Download / renewal
9. Rejection ke kaaran + solution
10. Helpline
11. FAQ
12. Related services/tools grid
13. Doosre states ka grid
14. Breadcrumb + schema (HowTo/FAQ/Breadcrumb)

## 8a. Design rule (end tak same)
- Har naya page `Base.astro` layout aur `global.css` ke components se hi banega. Page-specific CSS nahi likhni, aur naye rang ya font nahi lane.
- Rang: brand blue `#1d4ed8`, saffron `#f59e0b` (CTA/highlight), green `#047857` (official/verified). Font: Mukta.
- Building blocks: hero + search, task rows, card grid, state tiles, doc list, answer box, steps, checklist, tables, callouts, official links, FAQ, "ये भी देखें" (explore). Inke alawa kuch naya chahiye toh pehle `global.css` mein component banana hai.
- Responsive: har page mobile-first banega. 320 / 360 / 768 / 1024 / 1440px par check hoga ki horizontal scroll nahi aata. Mobile par bottom nav dikhega, desktop par top nav.
- Order: homepage → main hubs (documents, students, yojana, tools, near-me, states) → paid services → guide pages.
- Design samples (homepage, documents hub, paid services hub) user approval ke liye bheje gaye: 2026-10-03.

## 8c. Bhasha (Hindi / English)
- Hindi pages root par hain, English pages `/en/...` par. Header ka **EN / हिं** button us page ke doosri bhasha wale version par le jaata hai. Agar doosri bhasha ka version nahi hai toh us bhasha ke homepage par.
- Saare UI shabd aur data `{ hi, en }` mein hain (`web/src/i18n.ts`, `web/src/data/site.ts`). Component URL dekh kar bhasha khud samajh leta hai.
- Hub pages `web/src/views/*.astro` mein hain. `pages/x/index.astro` (Hindi) aur `pages/en/x/index.astro` (English) dono usi view ko dikhate hain.
- Jo pages dono bhashaon mein hain, unki list `BILINGUAL` (i18n.ts) mein hai. Inke liye hreflang (hi, en, x-default) apne aap lagta hai.
- Abhi dono bhashaon mein: homepage aur 7 hubs. Guide pages ka English version baad mein banega.

## 8b. Naya page kaise banta hai (Astro)
- Page file: `web/src/pages/<same-url-path>.astro`. Example: `states/jharkhand-senior-citizen-card.astro` banega `/states/jharkhand-senior-citizen-card.html`.
- Layout: `web/src/layouts/Base.astro`. Isme title, description, canonical, hreflang, OG, aur JSON-LD (Breadcrumb, Article, FAQPage) sab automatic aate hain.
- Har page par (Base layout se): header mein Telegram button (t.me/sarkarisewaindia), footer se pehle `Subscribe` box (Telegram + mobile/email form, Supabase `subscribers` table mein save hota hai, admin → Subscribers mein dikhta hai; `source` mein page URL aur `notification_topics` mein chune hue topic jaate hain).
- Guide templates: ek document ke saare rajya ek hi template se bante hain (jaise `SeniorCitizenGuide.astro` + `guides/senior/*.ts`). Naye rajya ke liye sirf config file likhni hai.
- Components: `Breadcrumbs`, `OfficialLinks`, `Faq`, `CardGrid` (related), `StateGrid` (doosre states), `Explore` ("Ye bhi dekhein").
- Explore cards aur menu ek hi jagah se aate hain: `web/src/data/site.ts`.
- Push se pehle hamesha **clean clone** par build test karna hai (`git clone` karke `npm ci && npm run site`). Local build un files ko bhi pakad leta hai jo `.gitignore` ki wajah se GitHub tak nahi pahunchti (2026-10-03 ko `lib/` rule se 4 deploy fail hue the).
- Local build: `cd web && npm ci && npm run site`. Output `web/_site/` mein banta hai.
- Pilot page: `states/jharkhand-senior-citizen-card` (research ke baad likha, 2026-10-03).
- Duplicate `service/<state>-<doc>.html` page ka canonical `states/` wale page par point karta hai, aur use sitemap se hata diya jata hai.

## 9. Zaroori technical notes
- **Supabase:** website mein sirf `anon` key hai. `service_role` key kabhi bhi frontend mein nahi daalni.
- **Admin access:** Supabase Auth user ka `app_metadata` = `{"role":"admin"}` hona chahiye (`user_metadata` nahi). Saari admin policies `public.is_admin()` use karti hain (`supabase/security-hardening.sql`).
- **Zaroori txt files, inhe delete nahi karna:** `robots.txt`, `ads.txt`, `990cec6ab75587968bc7a43b4721e52c.txt` (IndexNow key, `scripts/submit-indexnow.py` use karta hai), `automation/requirements.txt`.
- **Known issue:** `active_sessions` ki update policy ke chalte koi bhi anon visitor kisi bhi doosre visitor ka session row update kar sakta hai. Isse sirf "online now" count par asar padta hai. Baad mein fix karna hai.
- **Bing / IndexNow:** Bing account block nahi hai, sirf password bhool gaye hain. Bing Webmaster Tools mein Google account se login karke GSC se site import ho sakti hai. IndexNow har deploy ke baad apne aap chalta hai (`web/scripts/indexnow.mjs`, workflow ka `indexnow` job): badle hue pages Bing, Yandex waghera ko bhej deta hai. Iske liye koi account nahi chahiye.
- **AdSense:** `ads.txt` mein abhi placeholder `pub-0000000000000000` hai. AdSense account milne par asli publisher ID daalni hai.
- **Root ki safai baaki hai:** root mein ~250 purane one-off scripts (`fix_*`, `inject_batch*`, `test_*`) publicly deploy ho rahe hain. Astro migration (Phase 4) mein ye deploy se bahar ho jayenge.

## 9b. Urgent issues mile (2026-10-03)
- ✅ **FIXED 2026-10-03 (live, commit fa7753c):** 855 CSC pages se galat noindex hataya aur unhe sitemap mein add kiya. 10 duplicate district pairs ka canonical theek kiya. Rajahmundry (3 centres) jaise thin pages noindex hi rahenge.
- **(Purani note) CSC pages galti se noindex ho gaye the.** 996 mein se 910 CSC pages `noindex` hain, jinmein 855 aise hain jinpe 5 se zyada centres hain (jaise Kolkata, Delhi, Mumbai, Bengaluru, Ahmedabad). Pichhle 3 mahine ke 873 CSC clicks mein se **718 clicks inhi noindex pages se aaye the**. Agar fix nahi kiya toh ye traffic khatam ho jayega.
- **Duplicate pages:** `service/<state>-<doc>.html` aur `states/<state>-<doc>.html` ek hi topic par do alag pages hain, aur dono khud ko canonical batate hain. Ye keyword cannibalization hai. Fix: `states/` wala page primary rahega (traffic wahin hai), `service/` wala duplicate page us par canonical/redirect karega.
- **`data/csc-centers.json` mein fake sample data hai** (jaise "Neha CSC", rating 4.9). Ise kahin use nahi karna. Asli CSC data Supabase `csc_centres` table mein hai.
- **Jan Aushadhi data asli hai:** `jan_aushadhi_all_india.csv` (~20,700 stores, PMBJP ka official data, lat/long ke saath). Ye ek achha data asset hai.

## 10. Log
- **2026-10-04:** User: rajya mein **nayi zaroori sevaon ke pages bana sakte hain** jo site par abhi nahi hain (sirf genuine, research ke saath; jo page pehle se hai use dobara nahi banana). Queue: UP Bhulekh/khatauni, MP Samagra ID, Rajasthan Jan Aadhaar, Bihar Bhumi jamabandi, bijli bill/connection — search demand dekh kar.
- **2026-10-04:** Network: `*.gov.in`/`*.nic.in` allow ho gaye, par kai rajya sites (Delhi labour dept, UP, Rajasthan, Jharkhand, WB, Telangana) bahar ke IP ko block karti hain. Khulti hain: dbocwwb.delhi.gov.in, bocw.punjab.gov.in, shramevjayate.cg.gov.in, labour.uk.gov.in, mahafood.gov.in, nfsa.gov.in, myscheme.gov.in. Delhi + Punjab labour card pages live (official source se).
- **2026-10-04:** 36 rajya hub pages (`states/<state>.html`) naye design mein: rajya ki saari guides (nayi wali par "नई गाइड" badge), rajya ki yojanayen, CSC ginti + top zile, Jan Aushadhi link, bujurg pension (jahan nayi guide hai), purane hub ke official portal links, FAQ. Code: `pages/states/[state].astro`, yojana list ab `data/schemes.ts` mein.
  - Labour card template (`LabourCardGuide.astro`, `guides/labour/`) bana, par pages abhi nahi: research mein **network sarkari sites (.gov.in/.nic.in) block karta hai** aur 200 web-search ki session limit khatam ho gayi. Bina official page padhe fees/rashi publish nahi karni. Research notes scratchpad mein (labour 9 rajya, employment 5, ration 6) — sab "verify karna baaki". User ko environment Network access mein `*.gov.in`, `*.nic.in` allow karne ko bola.
  - Ek hi document ke do page hain: `service/<abbr>-<doc>.html` aur `states/<state>-<doc>.html`, dono self-canonical (aapas mein compete). Har cluster rebuild karte waqt zyada impressions wala main, dusra canonical karega.
- **2026-10-04:** CSC pages naye design mein (Astro): 862 zila/shahar pages + 36 rajya pages. Har zila page par us zile ke asli numbers (kul kendra, PIN code ke hisaab se ginti, aaspaas ke zile), live search (saare kendra, PIN, naam, "mere paas" location se), sevayen, fees (UIDAI: ₹75/₹125), asli CSC pehchanne ke tips, FAQ. Code: `web/src/lib/csc.ts`, `components/Csc*.astro`, `pages/service/csc-locator/`. Data files: `csc-districts.txt`, `csc-geo.txt` (Supabase export).
  - **Bada bug mila:** `anon` role ke paas `csc_centers` par SELECT grant hi nahi tha, isliye purane pages ki live list kabhi load nahi hoti thi. Listing columns par grant diya, aur "nearest CSC" ke liye `csc_nearby()` function + latitude index (`supabase/csc-nearby.sql`).
  - Descriptions badle: purane sab "VLE phone numbers" ka vaada karte the, jo data mein hai hi nahi.
  - Ek hi zile ke spelling wale duplicate pages (98) ka canonical main page par (zyada GSC impressions wala); shahar pages (Siliguri, Noida, Kalyan…) apne alag rahe. 5 galat rajya mein rakhe pages (maharashtra/bhadohi…) ka canonical sahi page par. J&K rajya page ka circular canonical theek kiya.
  - Rajya page `<state>.html` main hai; purane `<state>/index.html` par wahi naya page copy hota hai (assemble.mjs).
  - Abhi purane rahe (data nahi): Maharashtra ke 13 zile, Rajasthan/Arunachal/Nagaland ke naye zile, Kanyakumari, Bardhaman, Delhi/delhi.html.
- **2026-10-04:** Naya search page (`/search.html`, noindex): deploy par `search-index.json` banta hai (saare indexable pages ka URL + title). Hindi/English synonyms aur rajyon ke short forms (MP, UP…) samajhta hai.
- **2026-10-04:** CSC data jaanch: `csc_centers` mein 13.66 lakh rows; purani `%ilike%` query 4-11 sec (timeout). Exact state+district query 22 ms. Maharashtra ke 13 zile (Mumbai, Pune, Nagpur…) data mein hain hi nahi. Zila mapping `web/src/data/csc-districts.txt` mein save hai.
- **2026-10-04:** Senior citizen batch 2: Punjab, Rajasthan, UP, Chhattisgarh, Himachal.
- **2026-10-04:** Senior citizen batch 1: MP, Bihar, Uttarakhand, Delhi (+ Jharkhand naye template par). Template `SeniorCitizenGuide.astro`, content `web/src/guides/senior/<state>.ts`. Duplicate `service/` pages ka canonical states/ par hai. Header mein light/dark theme button joda (`ss-theme` localStorage mein save hota hai). Trending tiles user ke kehne par hataye.
- **2026-10-03:** English versions live kiye (/en/ + 7 hubs), header mein EN/हिं toggle. Homepage par Trending tiles aur "सभी 24 टूल्स" link joda.
- **2026-10-03:** GST verification page par naya header, footer, mobile menu, rang aur font lagaye. Payment script bilkul nahi badla. IndexNow deploy mein joda.
- **2026-10-03:** Pages source = GitHub Actions (user ne set kiya). Hubs live kiye: /students/, /yojana/, /tools/, /near-me/, /states/. Top nav naye hubs par point karta hai. Sitemap har deploy par assemble.mjs se update hota hai (naye pages add, rebuilt pages ki lastmod refresh, index.html wale duplicate URL hatate hain).
- **2026-10-03:** User ne design approve kiya. Homepage, /documents/, /paid-services/ live kiye.
- **2026-10-03:** Admin panel ko view-only banaya. Naya logo live kiya. Astro setup aur pilot page (Jharkhand senior citizen card) banaye.
- **2026-10-03:** CSC noindex bug live par fix kiya. Ab se kaam seedha `main` (live) par jayega, user ne allow kiya hai.
- **2026-10-03:** GSC export analyse kiya (section 6).
- **2026-10-03:** Targets decide kiye. Purane 30 md/txt docs hataye. Ye PLAN.md banaya.
