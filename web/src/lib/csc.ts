// CSC locator data for the district/state pages.
//
// Source of truth for counts and district spellings: data/csc-districts.txt,
// an export of the Supabase table csc_centers made with:
//   select state, lower(regexp_replace(district,'[^a-zA-Z]','','g')) k, sum(n),
//          string_agg(district,';') from (select state, district, count(*) n
//          from csc_centers group by 1,2) t group by state, k having sum(n) >= 5;
// Pages query the live table by exact state + district names, which uses the
// (state, district) index; ILIKE '%…%' queries time out on 13 lakh rows.
import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT } from "./repo";

type Entry = { count: number; names: string[] };
const DATA: Record<string, Record<string, Entry>> = {};
for (const line of fs.readFileSync(path.join(process.cwd(), "src/data/csc-districts.txt"), "utf8").split("\n")) {
  if (!line.trim() || line.startsWith("#")) continue;
  const [st, key, n, names] = line.split("|");
  (DATA[st] ??= {})[key] = { count: +n, names: names.split(";") };
}

// Page folder -> state as stored in the table.
export const CSC_STATE: Record<string, string> = Object.fromEntries(
  fs.readdirSync(path.join(REPO_ROOT, "service/csc-locator"), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => [d.name, d.name.toUpperCase().replace(/-/g, " ")]),
);
CSC_STATE["andaman-and-nicobar"] = "ANDAMAN AND NICOBAR ISLANDS";
CSC_STATE["jammu-and-kashmir"] = "JAMMU AND KASHMIR";

// Spellings of the same district stored as different keys.
const GROUPS: string[][] = [
  ["southandaman", "southandamans"], ["nicobars"],
  ["spsrnellore", "sripottisriramulunellore"], ["visakhapatanam", "visakhapatnam"], ["ysr", "ysrkadapa"],
  ["kamrupmetro", "kamrupmetropolitan"], ["marigaon", "morigaon"], ["southsalmaramancachar", "southsalmaramankachar"], ["baksa", "baska"],
  ["eastchamparan", "purbichamparan"], ["westchamparan", "pashchimchamparan"], ["kaimur", "kaimurbhabua"],
  ["dantewada", "dakshinbastardantewada"], ["gariaband", "gariyaband"], ["gaurelapendramarwahi", "gaurellapendramarwahi"],
  ["kanker", "uttarbastarkanker"], ["korea", "koriya"],
  ["central", "centraldelhi"], ["east", "eastdelhi"], ["north", "northdelhi"], ["northeast", "northeastdelhi"],
  ["northwest", "northwestdelhi"], ["south", "southdelhi"], ["southeast", "southeastdelhi"], ["southwest", "southwestdelhi"], ["west", "westdelhi"],
  ["ahmadabad", "ahmedabad"], ["dahod", "dohad"],
  ["charkhidadri", "charkidadri"], ["gurgaon", "gurugram"], ["mewat", "nuh"],
  ["badgam", "budgam"], ["rajauri", "rajouri"],
  ["eastsinghbhum", "eastsinghbum", "purbisinghbhum"], ["westsinghbhum", "pashchimisinghbhum"], ["sahebganj", "sahibganj"],
  ["saraikelakharsawan", "seraikelakharsawan"],
  ["belagavi", "belgaum"], ["ballari", "bellary"], ["bengaluruurban", "bengaluru"], ["chamarajanagar", "chamarajanagara"],
  ["chikballapur", "chikkaballapur", "chikkaballapura"], ["dakshinakannada", "dakshinkannad"], ["davanagere", "davangere"],
  ["uttarakannada", "uttarkannad"], ["vijayapur", "vijayapura"],
  ["leh", "lehladakh"], ["lakshadweep", "lakshadweepdistrict"],
  ["eastnimar", "khandwa", "khandwaeastnimar"], ["khargone", "khargonewestnimar"],
  ["balasore", "baleshwar"], ["debagarh", "deogarh"], ["jagatsinghapur", "jagatsinghpur"], ["jajapur", "jajpur"],
  ["nabarangapur", "nabarangpur"], ["sonepur", "subarnapur"],
  ["pondicherry", "puducherry"],
  ["firozepur", "firozpur"], ["muktsar", "srimuktsarsahib"], ["sasnagar", "sahibzadaajitsinghnagar"],
  ["eastdistrict", "eastsikkim"],
  ["chengalpattu", "chengalpet"], ["kancheepuram", "kanchipuram"], ["thoothukudi", "tuticorin"], ["tirupathur", "tirupattur"],
  ["villupuram", "viluppuram"],
  ["jagitial", "jagtial"], ["jangaon", "jangoan"], ["kumurambheem", "kumurambheemasifabad"], ["mahabubnagar", "mahbubnagar"],
  ["medchal", "medchalmalkajgiri"],
  ["allahabad", "prayagraj"], ["faizabad", "ayodhya"], ["kheri", "lakhimpur", "lakhimpurkheri"],
  ["santkabeernagar", "santkabirnagar"], ["bhadohi", "santravidasnagarbhadohi"],
  ["udamsinghnagar", "udhamsinghnagar"], ["warangal", "warangalrural"],
  ["coochbehar", "coochbihar"], ["dakshindinajpur", "dinajpurdakshin"], ["uttardinajpur", "dinajpuruttar"],
  ["medinipureast", "purbamedinipur"], ["medinipurwest", "paschimmedinipur"],
  ["northparganas", "paraganasnorth"], ["southparganas", "paraganassouth"],
];

// City pages whose district has another name in the table.
const CITY: Record<string, string> = {
  rajahmundry: "eastgodavari", vijayawada: "ntr", guwahati: "kamrupmetro", bhilai: "durg",
  jamshedpur: "eastsinghbhum", medininagar: "palamu", gulbarga: "kalaburagi", hubballi: "dharwad", kochi: "ernakulam",
  bhubaneswar: "khordha", rourkela: "sundargarh", gangtok: "eastdistrict", gyalshing: "westdistrict", namchi: "southdistrict",
  northsikkim: "northdistrict", southsikkim: "southdistrict", hanumakonda: "warangalurban",
  asansol: "paschimbardhaman", durgapur: "paschimbardhaman", siliguri: "darjeeling",
  bhiwandi: "thane", kalyan: "thane",
  nellore: "spsrnellore", mangaluru: "dakshinakannada", pudukottai: "pudukkottai", sivagangai: "sivaganga",
  thirunelveli: "tirunelveli", jayashankarbhupalpally: "jayashankarbhupalapally", kanpur: "kanpurnagar",
  noida: "gautambuddhanagar", westsikkim: "westdistrict", nicobar: "nicobars",
};
// City pages (not district names): the page says which district the city is in.
const TOWNS = new Set(["rajahmundry", "vijayawada", "guwahati", "bhilai", "jamshedpur", "hubballi", "kochi", "bhubaneswar",
  "rourkela", "gangtok", "gyalshing", "namchi", "asansol", "durgapur", "siliguri", "bhiwandi", "kalyan", "noida", "mangaluru"]);
// J&K pages for districts that are now in Ladakh.
const STATE_OVERRIDE: Record<string, string> = { "jammu-and-kashmir/kargil": "LADAKH", "jammu-and-kashmir/leh-ladakh": "LADAKH" };

export const keyOf = (s: string) => s.toLowerCase().replace(/[^a-z]/g, "");

export type CscDistrict = { dbState: string; names: string[]; count: number; town?: string };

/** Table state + district names for a page, or null if the table has no such district. */
export function districtFor(stateDir: string, slug: string): CscDistrict | null {
  const dbState = STATE_OVERRIDE[`${stateDir}/${slug}`] ?? CSC_STATE[stateDir];
  const keys = DATA[dbState];
  if (!keys) return null;
  const own = keyOf(slug);
  const key = CITY[own] ?? own;
  if (!keys[key]) return null;
  const group = GROUPS.find((g) => g.includes(key)) ?? [key];
  const found = group.filter((k) => keys[k]);
  return {
    dbState,
    names: found.flatMap((k) => keys[k].names),
    count: found.reduce((n, k) => n + keys[k].count, 0),
    town: TOWNS.has(own) ? keys[key].names.slice().sort((a, b) => b.length - a.length)[0].replace(/\b([A-Z])([A-Z]+)\b/g, (_, a, b) => a + b.toLowerCase()) : undefined,
  };
}

/** All districts of a state as [key, count], merged by spelling group, largest first. */
export function stateTotals(dbState: string): { total: number; districts: number } {
  const keys = DATA[dbState] ?? {};
  const seen = new Set<string>();
  let total = 0, districts = 0;
  for (const k of Object.keys(keys)) {
    total += keys[k].count;
    const g = (GROUPS.find((x) => x.includes(k)) ?? [k]).join();
    if (!seen.has(g)) { seen.add(g); districts++; }
  }
  return { total, districts };
}

export type Centre = { name: string; address: string; pin: string; map: string };

/** Centres already listed in the old page (kept as the crawlable list). */
export function oldCentres(rel: string, max = 24): Centre[] {
  const file = path.join(REPO_ROOT, rel);
  if (!fs.existsSync(file)) return [];
  const html = fs.readFileSync(file, "utf8");
  const out: Centre[] = [];
  const re = /class="center-card"[\s\S]*?<h3[^>]*>([^<]*)<\/h3>[\s\S]*?<div>📍([^<]*)<\/div>[\s\S]*?PIN:\s*(\d{6})?[\s\S]*?href="(https:\/\/www\.google\.com\/maps[^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) && out.length < max) {
    const name = m[1].trim();
    if (!name) continue;
    out.push({ name, address: m[2].trim(), pin: m[3] ?? "", map: m[4] });
  }
  return out;
}

/** Old <title> and meta description, kept so ranking pages keep their snippet. */
export function oldMeta(rel: string): { title: string; description: string } {
  const html = fs.readFileSync(path.join(REPO_ROOT, rel), "utf8").slice(0, 12000);
  const dec = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  return {
    title: dec(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "").trim(),
    description: dec(html.match(/name="description" content="([^"]*)"/i)?.[1] ?? "").trim(),
  };
}

// PIN spread and median location of each district key (data/csc-geo.txt).
type Geo = { pins: number; lat: number; lng: number; top: [string, number][] };
const GEO: Record<string, Record<string, Geo>> = {};
for (const line of fs.readFileSync(path.join(process.cwd(), "src/data/csc-geo.txt"), "utf8").split("\n")) {
  if (!line.trim() || line.startsWith("#")) continue;
  const [st, key, pins, lat, lng, top] = line.split("|");
  (GEO[st] ??= {})[key] = {
    pins: +pins, lat: +lat, lng: +lng,
    top: (top ?? "").split(",").filter((p) => /^\d{6}:\d+$/.test(p)).map((p) => { const [a, b] = p.split(":"); return [a, +b] as [string, number]; }),
  };
}

const SELF = (rel: string) => {
  const html = fs.readFileSync(path.join(REPO_ROOT, rel), "utf8").slice(0, 6000);
  const c = html.match(/rel="canonical" href="https:\/\/sarkarisewaindia\.com\/([^"]*)"/)?.[1];
  return !c || c === rel;
};

// Main page among spelling variants of one district: the one with more Google
// impressions (GSC, Jun-Sep 2026), else the current official name.
const PREFER = new Set([
  "andhra-pradesh/visakhapatnam", "andhra-pradesh/spsr-nellore", "andhra-pradesh/ysr-kadapa", "andhra-pradesh/ntr", "andhra-pradesh/east-godavari",
  "assam/kamrup-metropolitan", "assam/morigaon", "assam/baksa", "assam/south-salmara-mankachar", "bihar/kaimur", "bihar/purbi-champaran", "bihar/pashchim-champaran",
  "chhattisgarh/dantewada", "chhattisgarh/gariaband", "chhattisgarh/gaurela-pendra-marwahi", "chhattisgarh/kanker", "chhattisgarh/korea",
  "delhi/central-delhi", "delhi/east", "delhi/north", "delhi/north-east", "delhi/north-west", "delhi/south-delhi", "delhi/south-east", "delhi/south-west-delhi", "delhi/west-delhi",
  "gujarat/ahmedabad", "gujarat/dahod", "haryana/charkhi-dadri", "haryana/gurgaon", "haryana/nuh",
  "jammu-and-kashmir/budgam", "jammu-and-kashmir/rajouri", "ladakh/kargil", "ladakh/leh",
  "jharkhand/east-singhbhum", "jharkhand/palamu", "karnataka/ballari", "karnataka/belagavi", "karnataka/bengaluru", "karnataka/chamarajanagar",
  "karnataka/chikkaballapur", "karnataka/dakshina-kannada", "karnataka/davanagere", "karnataka/dharwad", "karnataka/gulbarga", "karnataka/uttara-kannada", "karnataka/vijayapura",
  "kerala/ernakulam", "lakshadweep/lakshadweep", "madhya-pradesh/khandwa", "madhya-pradesh/khargone", "maharashtra/thane",
  "odisha/balasore", "odisha/khordha", "odisha/debagarh", "odisha/jagatsinghpur", "odisha/jajpur", "odisha/nabarangpur", "odisha/sundargarh", "odisha/subarnapur",
  "puducherry/puducherry", "punjab/firozpur", "punjab/sri-muktsar-sahib", "punjab/sas-nagar",
  "sikkim/east-sikkim", "sikkim/west-sikkim", "sikkim/south-sikkim", "sikkim/north-sikkim",
  "tamil-nadu/chengalpattu", "tamil-nadu/kancheepuram", "tamil-nadu/pudukkottai", "tamil-nadu/sivaganga", "tamil-nadu/tirunelveli", "tamil-nadu/thoothukudi",
  "tamil-nadu/tirupathur", "tamil-nadu/villupuram",
  "telangana/hanumakonda", "telangana/jagtial", "telangana/jangaon", "telangana/jayashankar-bhupalpally", "telangana/kumuram-bheem-asifabad", "telangana/mahabubnagar",
  "telangana/medchal", "telangana/warangal",
  "uttar-pradesh/allahabad", "uttar-pradesh/ayodhya", "uttar-pradesh/sant-ravidas-nagar-bhadohi", "uttar-pradesh/gautam-buddha-nagar", "uttar-pradesh/kanpur",
  "uttar-pradesh/lakhimpur", "uttar-pradesh/sant-kabir-nagar", "uttarakhand/udham-singh-nagar",
  "west-bengal/north-24-parganas", "west-bengal/south-24-parganas", "west-bengal/paschim-bardhaman", "west-bengal/coochbehar", "west-bengal/dakshin-dinajpur",
  "west-bengal/darjeeling", "west-bengal/uttar-dinajpur", "west-bengal/purba-medinipur", "west-bengal/paschim-medinipur",
  "andaman-and-nicobar/nicobars", "andaman-and-nicobar/south-andaman",
]);

export type CscPage = {
  canonical?: string; // main page when this one is a spelling variant
  stateDir: string; slug: string; rel: string; href: string; name: string;
  d: CscDistrict; pins: number; top: [string, number][]; lat: number; lng: number;
};

let _pages: CscPage[] | null = null;
/** Every old self-canonical district page that maps to districts in the table. */
export function cscPages(): CscPage[] {
  if (_pages) return _pages;
  const out: CscPage[] = [];
  const base = path.join(REPO_ROOT, "service/csc-locator");
  for (const stateDir of Object.keys(CSC_STATE).sort()) {
    for (const f of fs.readdirSync(path.join(base, stateDir)).sort()) {
      if (!f.endsWith(".html")) continue;
      const slug = f.slice(0, -5);
      const rel = `service/csc-locator/${stateDir}/${f}`;
      if (!SELF(rel)) continue;
      const d = districtFor(stateDir, slug);
      if (!d) continue;
      // Key with the most centres gives the location and PIN list.
      const keys = Object.entries(DATA[d.dbState]).filter(([, e]) => e.names.some((n) => d.names.includes(n))).map(([k]) => k);
      const geos = keys.map((k) => GEO[d.dbState]?.[k]).filter(Boolean) as Geo[];
      if (!geos.length) continue;
      const main = geos.reduce((a, b) => (b.top.reduce((s, x) => s + x[1], 0) > a.top.reduce((s, x) => s + x[1], 0) ? b : a));
      const top = new Map<string, number>();
      for (const g of geos) for (const [p, n] of g.top) top.set(p, (top.get(p) ?? 0) + n);
      const t = oldMeta(rel).title;
      const name = t.match(/^(.+?)\s*\(/)?.[1]?.trim() || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      out.push({
        stateDir, slug, rel, href: `/${rel}`, name, d,
        pins: geos.reduce((s, g) => s + g.pins, 0),
        top: [...top].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 10),
        lat: main.lat, lng: main.lng,
      });
    }
  }
  // Spelling variants of one district point to the main page; city pages stay their own.
  const groups: Record<string, CscPage[]> = {};
  for (const p of out) if (!p.d.town) (groups[p.d.dbState + p.d.names.slice().sort().join()] ??= []).push(p);
  for (const g of Object.values(groups)) {
    if (g.length < 2) continue;
    const main = g.filter((p) => PREFER.has(`${p.stateDir}/${p.slug}`));
    if (main.length !== 1) throw new Error(`CSC: pick one main page for ${g.map((p) => p.rel).join(", ")}`);
    for (const p of g) if (p !== main[0]) p.canonical = main[0].href;
  }
  return (_pages = out);
}

const km = (a: { lat: number; lng: number }, b: { lat: number; lng: number }) =>
  111.2 * Math.hypot(a.lat - b.lat, (a.lng - b.lng) * Math.cos((a.lat * Math.PI) / 180));

/** Closest other district pages (by median centre location), any state. */
export function nearbyPages(p: CscPage, n = 8): (CscPage & { km: number })[] {
  return cscPages()
    .filter((o) => !o.canonical && o.rel !== p.rel && o.d.names.join() !== p.d.names.join())
    .map((o) => ({ ...o, km: Math.round(km(p, o)) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, n);
}

import { STATES } from "../data/site";
import { exists } from "./repo";
const STATE_SLUG: Record<string, string> = {
  "ANDAMAN AND NICOBAR ISLANDS": "andaman-nicobar",
  "JAMMU AND KASHMIR": "jammu-kashmir",
};
/** Site state entry (slug, English and Hindi name) for a table state. */
export function stateOf(dbState: string) {
  const slug = STATE_SLUG[dbState] ?? dbState.toLowerCase().replace(/ /g, "-");
  return STATES.find((s) => s.slug === slug)!;
}
/** CSC state page for a page folder, if it exists and is self-canonical. */
export function cscStateHref(stateDir: string): string | null {
  for (const rel of [`service/csc-locator/${stateDir}.html`, `service/csc-locator/${stateDir}/index.html`, `service/csc-locator/${stateOf(CSC_STATE[stateDir])?.slug}.html`]) {
    if (fs.existsSync(path.join(REPO_ROOT, rel)) && SELF(rel)) return `/${rel}`;
  }
  return null;
}
/** Jan Aushadhi page of the same district, if there is one. */
export function janAushadhiHref(stateDir: string, slug: string): string | null {
  const dir = { "andaman-and-nicobar": "andaman-nicobar", "jammu-and-kashmir": "jammu-kashmir" }[stateDir] ?? stateDir;
  const rel = `service/jan-aushadhi/${dir}/${slug}.html`;
  return fs.existsSync(path.join(REPO_ROOT, rel)) && SELF(rel) ? `/${rel}` : null;
}

/** Services offered at a CSC, linked to our guides that exist for the state. */
export function cscServices(st: { slug: string; hi: string }) {
  const doc = (s: string) => `states/${st.slug}-${s}.html`;
  const stateDocs = [
    ["income-certificate", "💰", "आय प्रमाण पत्र"],
    ["caste-certificate", "📜", "जाति प्रमाण पत्र"],
    ["domicile-certificate", "🏠", "निवास प्रमाण पत्र"],
    ["ration-card", "🍚", "राशन कार्ड"],
    ["birth-certificate", "👶", "जन्म प्रमाण पत्र"],
    ["labour-card", "👷", "लेबर कार्ड"],
    ["senior-citizen-card", "👴", "सीनियर सिटीजन कार्ड"],
  ].filter(([s]) => exists(doc(s)));

  const services: { name: string; href?: string; take: string }[] = [
    { name: "आधार अपडेट (मोबाइल, पता, फोटो)", href: "/service/aadhaar-card.html", take: "आधार कार्ड, पते/जन्मतिथि का सबूत (जो बदलना है)" },
    { name: "PAN कार्ड: नया या सुधार", href: "/service/pan-card.html", take: "आधार, फोटो, हस्ताक्षर" },
    { name: "आयुष्मान कार्ड", href: "/service/ayushman-bharat.html", take: "आधार, राशन कार्ड या PM-JAY लिस्ट में नाम" },
    { name: "e-Shram कार्ड", href: "/service/e-shram-card.html", take: "आधार, आधार से जुड़ा मोबाइल, बैंक खाता" },
    { name: "PM-Kisan रजिस्ट्रेशन / e-KYC", href: "/service/pm-kisan.html", take: "आधार, ज़मीन के कागज़, बैंक खाता" },
    { name: "पासपोर्ट आवेदन (ऑनलाइन फॉर्म)", href: "/service/passport.html", take: "आधार, जन्म का सबूत, पते का सबूत" },
    ...stateDocs.slice(0, 4).map(([s, , label]) => ({ name: `${label} (${st.hi})`, href: `/${doc(s)}`, take: "आधार, राशन कार्ड, फोटो और फॉर्म में मांगे गए कागज़" })),
    { name: "बिजली, पानी, मोबाइल बिल और बैंकिंग", take: "बिल नंबर / आधार (AePS के लिए)" },
  ].filter((s) => !s.href || exists(s.href.slice(1)));
  return { stateDocs, services, doc };
}

export type CscStatePage = { file: string; stateDir: string; dbState: string; canonical?: string };
/** State pages: <dir>.html is the main one; <dir>/index.html and old aliases point to it. */
export function cscStatePages(): CscStatePage[] {
  const out: CscStatePage[] = [];
  for (const stateDir of Object.keys(CSC_STATE).sort()) {
    const main = stateDir === "andaman-and-nicobar" ? "andaman-nicobar.html" : `${stateDir}.html`;
    const dbState = CSC_STATE[stateDir];
    if (!DATA[dbState] || !fs.existsSync(path.join(REPO_ROOT, "service/csc-locator", main))) continue;
    const href = `/service/csc-locator/${main}`;
    out.push({ file: main, stateDir, dbState });
    if (fs.existsSync(path.join(REPO_ROOT, "service/csc-locator", stateDir, "index.html")))
      out.push({ file: `${stateDir}/index.html`, stateDir, dbState, canonical: href });
    if (stateDir === "jammu-and-kashmir") out.push({ file: "jammu-kashmir.html", stateDir, dbState, canonical: href });
  }
  return out;
}

/** Old district pages of a state that have no centres in the table (kept, linked without a count). */
export function oldOnlyPages(stateDir: string): { href: string; name: string }[] {
  const built = new Set(cscPages().map((p) => p.rel));
  return fs.readdirSync(path.join(REPO_ROOT, "service/csc-locator", stateDir)).sort()
    .filter((f) => f.endsWith(".html") && f !== "index.html")
    .map((f) => `service/csc-locator/${stateDir}/${f}`)
    .filter((rel) => !built.has(rel) && SELF(rel))
    .map((rel) => ({ href: `/${rel}`, name: oldMeta(rel).title.match(/^(.+?)\s*\(/)?.[1]?.trim() || rel.split("/").pop()!.slice(0, -5) }));
}
