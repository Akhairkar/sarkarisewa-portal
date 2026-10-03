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
| Purani site | Purani saari files Astro ke `public/` mein jaisi hain waisi rahengi. Naye pages ek-ek karke unki jagah lenge. Ek baar mein poori site nahi badlegi. |
| Bhasha | Har bhasha ka alag URL hoga, hreflang ke saath. **Hindi primary**, English saath mein. Marathi sirf wahan jahan genuinely useful ho (Maharashtra-specific). JS toggle se bhasha badalne wala tarika band hoga. |
| CSC / Jan Aushadhi | Abhi content touch nahi karna. Sirf naya **logo/brand** wahan bhi lagana hai. AdSense apply karne se pehle inke noindex/delete par faisla karna hai. |
| Payment | GST verification ka existing flow waisa hi rahega (`private/gstin-verification/` + `cloudflare/gstin-api/` worker). Nayi API services ke liye naya flow banega. |
| Brand | Naya logo aur design system banega, jo poori site par lagega (CSC/JA pages bhi). |
| Hub pages | Banenge. Har category ka ek hub page hoga, aur topic clusters usi hub se linked honge. |

## 4. Paid services
| Service | Status |
|---|---|
| GSTIN verification | Live hai (existing flow) |
| RC / challan | Agli API service |
| PAN, Aadhaar etc. | Baad mein decide hoga |

## 5. Phases
- [x] Phase 0: Targets discuss karna, purane docs hatana
- [ ] Phase 1: GSC data analysis. Kaun se pages traffic laate hain, kaun se queries par mauka hai.
- [ ] Phase 2: Site structure. Menu, hubs, URL plan aur language URL plan.
- [ ] Phase 3: Naya logo + design system + homepage mockup (user approval ke liye)
- [ ] Phase 4: Astro setup (purani site `public/` mein) + GitHub Actions deploy
- [ ] Phase 5: Hub pages + paid services pages (GST, RC/challan)
- [ ] Phase 6: Information pages, chhote batches mein
- [ ] Phase 7: CSC/JA par faisla, phir AdSense apply

## 6. Zaroori technical notes
- **Supabase:** website mein sirf `anon` key hai. `service_role` key kabhi bhi frontend mein nahi daalni.
- **Admin access:** Supabase Auth user ka `app_metadata` = `{"role":"admin"}` hona chahiye (`user_metadata` nahi). Saari admin policies `public.is_admin()` use karti hain (`supabase/security-hardening.sql`).
- **Zaroori txt files, inhe delete nahi karna:** `robots.txt`, `ads.txt`, `990cec6ab75587968bc7a43b4721e52c.txt` (IndexNow key, `scripts/submit-indexnow.py` use karta hai), `automation/requirements.txt`.
- **Known issue:** `active_sessions` ki update policy ke chalte koi bhi anon visitor kisi bhi doosre visitor ka session row update kar sakta hai. Isse sirf "online now" count par asar padta hai. Baad mein fix karna hai.
- **Root ki safai baaki hai:** root mein ~250 purane one-off scripts (`fix_*`, `inject_batch*`, `test_*`) publicly deploy ho rahe hain. Astro migration (Phase 4) mein ye deploy se bahar ho jayenge.

## 7. Log
- **2026-10-03:** Targets decide kiye. Purane 30 md/txt docs hataye. Ye PLAN.md banaya.
