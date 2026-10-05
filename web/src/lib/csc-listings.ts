// Approved CSC claims for the static listing pages (/csc-centre/<slug>.html).
// Fetched at build time from the public view with the anon key. The deploy
// workflow also runs daily, so a newly approved centre gets its page within a
// day; until then csc-centre.html?id=... shows it live in the browser.
// Local builds without network (or CSC_LISTINGS_FILE=path.json for testing)
// simply build no listing pages.
import fs from "node:fs";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabase-public";
import { cscPages } from "./csc";
import { jaDistricts, mapLink, nearbyDistricts } from "./ja";
import { STATES } from "../data/site";

export type Listing = {
  application_id: string; centre_name: string; centre_type: string | null; years_of_operation: number | null;
  full_address: string | null; locality: string | null; city: string | null; district: string | null; state: string | null; pincode: string | null;
  latitude: number | null; longitude: number | null;
  online_services: string[] | null; offline_services: string[] | null; custom_services: string[] | null; remote_services?: string[] | null;
  working_hours: Record<string, unknown> | null; home_visit: boolean | null; appointment_required: boolean | null;
  public_phone: string | null; public_whatsapp: string | null; public_email: string | null;
  approved_at: string | null; about: string | null; updated_at: string | null; photo_url?: string | null;
};

let cache: Listing[] | null = null;

export async function listings(): Promise<Listing[]> {
  if (cache) return cache;
  try {
    if (process.env.CSC_LISTINGS_FILE) {
      cache = JSON.parse(fs.readFileSync(process.env.CSC_LISTINGS_FILE, "utf8"));
    } else {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 15000);
      const res = await fetch(`${SUPABASE_URL}/rest/v1/csc_public_centres?select=*&order=approved_at.desc`, {
        headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        signal: ctl.signal,
      });
      clearTimeout(t);
      if (!res.ok) throw new Error(String(res.status));
      cache = await res.json();
    }
  } catch (e) {
    console.warn(`[csc-listings] no listings this build: ${(e as Error).message}`);
    cache = [];
  }
  // Drop obvious junk (no real name or contact).
  cache = (cache ?? []).filter((c) => /[a-zऀ-ॿ]{3}/i.test(c.centre_name ?? "") && (c.public_phone || c.public_whatsapp));
  return cache;
}

const slugify = (s: string) => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
/** Stable page slug: centre name + district + the number part of the application id. */
export const listingSlug = (c: Listing) =>
  [slugify(c.centre_name ?? ""), slugify(c.district ?? ""), (c.application_id.match(/\d{4,}$/)?.[0] ?? slugify(c.application_id))].filter(Boolean).join("-");

const norm = (s: string | null | undefined) => String(s ?? "").toLowerCase().replace(/district|जिला|ज़िला|[^a-zऀ-ॿ]/g, "");
/** The district CSC page that shows this centre at the top, if we have one. */
export function listingDistrictPage(c: Listing) {
  const dn = norm(c.district);
  return dn ? cscPages().find((p) => !p.canonical && (p.d.names.some((n) => norm(n) === dn) || norm(p.name) === dn)) : undefined;
}

export const digits = (s: string | null | undefined) => { const d = String(s ?? "").replace(/\D/g, ""); return d.length > 10 ? d.slice(-10) : d; };

/** Opening hours as one line (new form: {open, close, days}; old form: per weekday). */
export function hoursText(h: Listing["working_hours"]): string {
  if (!h || typeof h !== "object") return "";
  const o = h as Record<string, any>;
  const span = (a: string, b: string) => (a && b && a !== b ? `${a} - ${b}` : a ? `${a} से (बंद होने का समय फोन पर पूछें)` : "");
  if (o.open || o.close) return `${span(o.open, o.close)}${o.days ? ` (${o.days})` : ""}`;
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const hi: Record<string, string> = { monday: "सोम", tuesday: "मंगल", wednesday: "बुध", thursday: "गुरु", friday: "शुक्र", saturday: "शनि", sunday: "रवि" };
  const rows = days
    .map((d) => [d, o[d] ?? o[d[0].toUpperCase() + d.slice(1)]] as const)
    .filter(([, v]) => v && typeof v === "object")
    .map(([d, v]) => [d, /closed/i.test(v.status ?? "") ? "बंद" : span(v.open, v.close) || "खुला"] as const);
  if (!rows.length) return "";
  const open = rows.filter(([, t]) => t !== "बंद");
  if (open.length && open.every(([, t]) => t === open[0][1])) {
    const closed = rows.filter(([, t]) => t === "बंद").map(([d]) => hi[d]);
    return `${open.length === 7 ? "हर दिन" : open.map(([d]) => hi[d]).join(", ")}: ${open[0][1]}${closed.length ? `; ${closed.join(", ")} बंद` : ""}`;
  }
  return rows.map(([d, t]) => `${hi[d]}: ${t}`).join(", ");
}

/** "Years of operation": some owners typed the start year instead. */
export function sinceText(y: number | null | undefined): string {
  if (!y) return "";
  const now = new Date().getFullYear();
  if (y >= 1950 && y <= now) return `${y} से चल रहा है`;
  if (y > 0 && y <= 60) return `${y} साल से चल रहा है`;
  return "";
}

// Service names from the first claim form were in English; show them in Hindi.
const SERVICE_HI: Record<string, string> = {
  "PAN related assistance": "PAN कार्ड सहायता", "Certificate applications": "प्रमाण पत्र आवेदन", "Bill payment": "बिल भुगतान",
  "Banking-related services": "बैंकिंग सेवाएं", "Insurance-related services": "बीमा सेवाएं", "Government applications": "सरकारी आवेदन",
  "Online forms": "ऑनलाइन फॉर्म", "Exam/application assistance": "परीक्षा / आवेदन फॉर्म", "Education services": "शिक्षा सेवाएं",
  Printing: "प्रिंटिंग", Photocopy: "फोटोकॉपी", Scanning: "स्कैनिंग", Lamination: "लैमिनेशन", "Passport photo": "पासपोर्ट फोटो",
  "Document assistance": "डॉक्यूमेंट सहायता",
};
export const serviceHi = (s: string) => SERVICE_HI[s] ?? s;

// Our guides for common CSC services, matched on words in the service names.
const GUIDES: [RegExp, string, string][] = [
  [/aadhaar|आधार/i, "/service/aadhaar-card.html", "आधार कार्ड"],
  [/\bpan\b|पैन/i, "/service/pan-card.html", "PAN कार्ड"],
  [/ayushman|आयुष्मान/i, "/service/ayushman-bharat.html", "आयुष्मान कार्ड"],
  [/ration|राशन/i, "/service/ration-card.html", "राशन कार्ड"],
  [/certificate|प्रमाण/i, "/service/income-certificate.html", "आय / जाति / निवास प्रमाण पत्र"],
  [/kisan|किसान/i, "/service/pm-kisan.html", "PM-Kisan"],
  [/shram|labour|लेबर/i, "/service/e-shram-card.html", "ई-श्रम / लेबर कार्ड"],
  [/passport|पासपोर्ट/i, "/service/passport.html", "पासपोर्ट"],
  [/driving|licen|लाइसेंस/i, "/service/driving-licence.html", "ड्राइविंग लाइसेंस"],
  [/job|exam|नौकरी|परीक्षा/i, "/jobs/index.html", "सरकारी नौकरी फॉर्म"],
  [/gst|itr|tax/i, "/gst/", "GST / ITR"],
  [/voter|वोटर/i, "/service/voter-id-card.html", "वोटर ID"],
];
export function guideLinks(services: string[]): { href: string; label: string }[] {
  const seen = new Set<string>();
  const out: { href: string; label: string }[] = [];
  for (const s of services) for (const [re, href, label] of GUIDES) if (re.test(s) && !seen.has(href)) { seen.add(href); out.push({ href, label }); }
  return out;
}

/** Names typed in ALL CAPS read better in title case. */
export const niceName = (n: string | null | undefined) => {
  const t = String(n ?? "").trim();
  return /[a-z]/.test(t) || !/[A-Z]{3}/.test(t) ? t : t.toLowerCase().replace(/(^|[\s(\-/&.])([a-z])/g, (_, a, b) => a + b.toUpperCase());
};

const dist = (a: { lat: number; lng: number }, b: { lat: number | null; lng: number | null }) => {
  if (b.lat == null || b.lng == null) return Infinity;
  const r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};
const plain = (s: string | null | undefined) => String(s ?? "").toLowerCase().replace(/district|[^a-z]/g, "");

/** Jan Aushadhi kendras near a centre (same district; nearest first when the centre has a location, else same PIN first). */
export function nearbyJa(c: Listing, n = 4) {
  const st = STATES.find((s) => plain(s.name) === plain(c.state))?.slug;
  if (!st) return null;
  const ds = jaDistricts().filter((d) => d.state === st);
  const pin = String(c.pincode ?? "").trim(), dn = plain(c.district);
  const d = ds.find((x) => x.pins.some(([p]) => p === pin)) ?? ds.find((x) => { const xn = plain(x.name); return !!xn && !!dn && (xn.includes(dn) || dn.includes(xn)); });
  if (!d || !d.kendras.length) return null;
  const here = c.latitude != null && c.longitude != null ? { lat: Number(c.latitude), lng: Number(c.longitude) } : null;
  const kendras = d.kendras
    .map((k) => ({ k, km: here ? dist(here, k) : k.pin === pin ? 0 : 1 }))
    .sort((a, b) => a.km - b.km)
    .slice(0, n)
    .map(({ k, km }) => ({ ...k, km: here && Number.isFinite(km) && km < 100 ? Math.round(km * 10) / 10 : null, map: mapLink(k) }));
  return { href: `/${d.rel}`, name: d.name, count: d.kendras.length, kendras, near: nearbyDistricts(d, 6) };
}
