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

## 8b. Naya page kaise banta hai (Astro)
- Page file: `web/src/pages/<same-url-path>.astro`. Example: `states/jharkhand-senior-citizen-card.astro` banega `/states/jharkhand-senior-citizen-card.html`.
- Layout: `web/src/layouts/Base.astro`. Isme title, description, canonical, hreflang, OG, aur JSON-LD (Breadcrumb, Article, FAQPage) sab automatic aate hain.
- Components: `Breadcrumbs`, `OfficialLinks`, `Faq`, `CardGrid` (related), `StateGrid` (doosre states), `Explore` ("Ye bhi dekhein").
- Explore cards aur menu ek hi jagah se aate hain: `web/src/data/site.ts`.
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
- **2026-10-03:** GST verification page par naya header, footer, mobile menu, rang aur font lagaye. Payment script bilkul nahi badla. IndexNow deploy mein joda.
- **2026-10-03:** Pages source = GitHub Actions (user ne set kiya). Hubs live kiye: /students/, /yojana/, /tools/, /near-me/, /states/. Top nav naye hubs par point karta hai. Sitemap har deploy par assemble.mjs se update hota hai (naye pages add, rebuilt pages ki lastmod refresh, index.html wale duplicate URL hatate hain).
- **2026-10-03:** User ne design approve kiya. Homepage, /documents/, /paid-services/ live kiye.
- **2026-10-03:** Admin panel ko view-only banaya. Naya logo live kiya. Astro setup aur pilot page (Jharkhand senior citizen card) banaye.
- **2026-10-03:** CSC noindex bug live par fix kiya. Ab se kaam seedha `main` (live) par jayega, user ne allow kiya hai.
- **2026-10-03:** GSC export analyse kiya (section 6).
- **2026-10-03:** Targets decide kiye. Purane 30 md/txt docs hataye. Ye PLAN.md banaya.
