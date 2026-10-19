# रोज़ नई भर्ती कैसे जोड़ें (5 मिनट)

हर भर्ती = इस फोल्डर (`jobs-daily/`) में **एक JSON फाइल**। फाइल जुड़ते ही साइट अपने आप बनती है और ~5 मिनट में पेज लाइव हो जाता है:
`https://sarkarisewaindia.com/jobs/<slug>.html`
यह पेज सरकारी नौकरी हब और "योग्यता से नौकरी खोजें" पेज पर भी अपने आप दिखता है।

## स्टेप 1: नोटिफिकेशन लें
भर्ती की **आधिकारिक वेबसाइट** से नोटिफिकेशन PDF डाउनलोड करें (जैसे ssc.gov.in, rrbapply.gov.in, upsc.gov.in)। किसी दूसरी साइट से जानकारी न लें।

## स्टेप 2: AI से JSON बनवाएं (ChatGPT / Claude / Gemini, फ्री वाला भी चलेगा)
1. नीचे "AI के लिए प्रॉम्प्ट" पूरा कॉपी करें।
2. AI चैट में पेस्ट करें और **नोटिफिकेशन PDF अपलोड करें** (या PDF का टेक्स्ट पेस्ट करें)।
3. AI जो JSON देगा, उसे कॉपी करें।
4. **ज़रूर जांचें:** आखिरी तारीख, कुल पद, उम्र, फीस और आवेदन का लिंक PDF से मिलाएं। AI गलती कर सकता है।

## स्टेप 3: GitHub पर फाइल बनाएं (फोन से भी)
1. GitHub पर रिपो खोलें → `jobs-daily` फोल्डर → **Add file → Create new file**।
2. फाइल का नाम: JSON में जो `slug` है वही + `.json` (जैसे `ssc-gd-constable-recruitment-2027.json`)।
3. JSON पेस्ट करें → **Commit changes** → "Commit directly to the main branch" → Commit।
4. ~5 मिनट बाद पेज खोलकर देखें।

**पेज नहीं दिखा?** GitHub में **Actions → Deploy site** का आखिरी रन खोलें और लॉग में `[jobs-daily] SKIPPED` खोजें; वहां लिखा होगा कि फाइल में क्या गलत है (जैसे JSON टूटा है, फाइल का नाम slug से नहीं मिलता, तारीख का फॉर्मेट गलत है)। फाइल ठीक करके फिर Commit करें। गलत फाइल से बाकी साइट पर कोई असर नहीं पड़ता।

**भर्ती की तारीख बढ़ी?** उसी फाइल में `lastDate` बदलें और Commit करें।
**नमूना:** `_example.json` देखें (`_` से शुरू होने वाली फाइलें पेज नहीं बनतीं)।

---

## AI के लिए प्रॉम्प्ट (पूरा कॉपी करें)

```
You are filling a job-post data file for a Hindi website from the OFFICIAL recruitment notification I attach/paste. Rules:
- Use ONLY facts written in the notification. Never guess. If something is not in it, write "नोटिफिकेशन में देखें".
- Write all text values in simple Hindi (Devanagari). Keep English only for names like SSC, CGL, Level-4, URLs.
- Output ONLY valid JSON (no markdown, no comments, no trailing commas), exactly in this shape:

{
  "slug": "keyword-first-english-lowercase-with-hyphens, e.g. ssc-gd-constable-recruitment-2027",
  "sector": "one of: SSC, UPSC, Banking, Railway, Defence, Scientific, State Govt, Health, Post, PSU, Central Govt",
  "title": "Hindi title max 70 chars, e.g. SSC GD कांस्टेबल भर्ती 2027: 25,000 पद, आखिरी तारीख",
  "description": "Hindi, max 160 chars: posts, qualification, last date",
  "h1": "Hindi heading, e.g. SSC GD कांस्टेबल भर्ती 2027: आवेदन, योग्यता, उम्र और फीस",
  "lastDate": "YYYY-MM-DD (last date of online application)",
  "lastNote": "optional short Hindi note, e.g. फीस भरने की आखिरी तारीख 5 दिसंबर",
  "organisation": "e.g. कर्मचारी चयन आयोग (SSC)",
  "totalPosts": "e.g. 25,487",
  "applyLink": "https:// official apply page from the notification",
  "officialSite": "https:// official website",
  "dates": [["आवेदन शुरू", "1 दिसंबर 2026"], ["आवेदन की आखिरी तारीख", "31 दिसंबर 2026"], ["परीक्षा", "..."]],
  "posts": [["पद का नाम", "संख्या", "वेतन / पे लेवल"]],
  "eligibility": ["शिक्षा योग्यता ...", "अन्य शर्त ..."],
  "age": "e.g. 18 से 23 साल (1 जनवरी 2027 को); OBC को 3, SC/ST को 5 साल की छूट",
  "fee": [["सामान्य / OBC / EWS", "₹100"], ["SC / ST / महिला", "कोई फीस नहीं"]],
  "selection": ["कंप्यूटर आधारित परीक्षा (CBT)", "शारीरिक परीक्षा", "मेडिकल"],
  "howToApply": ["आधिकारिक वेबसाइट खोलें ...", "रजिस्ट्रेशन ...", "फॉर्म भरें ...", "फीस भरें और प्रिंट लें"],
  "faq": [{"q": "...?", "a": "..."}, {"q": "...?", "a": "..."}, {"q": "...?", "a": "..."}, {"q": "...?", "a": "..."}],
  "sources": ["नोटिफिकेशन संख्या/तारीख, e.g. SSC नोटिस F.No. ... दिनांक 01.12.2026"],
  "verified": "today's date in Hindi, e.g. 19 अक्टूबर 2026"
}
```
