// Approved CSC claims for the static listing pages (/csc-centre/<slug>.html).
// Fetched at build time from the public view with the anon key. The deploy
// workflow also runs daily, so a newly approved centre gets its page within a
// day; until then csc-centre.html?id=... shows it live in the browser.
// Local builds without network (or CSC_LISTINGS_FILE=path.json for testing)
// simply build no listing pages.
import fs from "node:fs";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./supabase-public";

export type Listing = {
  application_id: string; centre_name: string; centre_type: string | null; years_of_operation: number | null;
  full_address: string | null; locality: string | null; city: string | null; district: string | null; state: string | null; pincode: string | null;
  latitude: number | null; longitude: number | null;
  online_services: string[] | null; offline_services: string[] | null; custom_services: string[] | null; remote_services?: string[] | null;
  working_hours: Record<string, unknown> | null; home_visit: boolean | null; appointment_required: boolean | null;
  public_phone: string | null; public_whatsapp: string | null; public_email: string | null;
  approved_at: string | null; about: string | null; updated_at: string | null;
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

export const digits = (s: string | null | undefined) => { const d = String(s ?? "").replace(/\D/g, ""); return d.length > 10 ? d.slice(-10) : d; };

/** Opening hours as one line (new form: {open, close, days}; old form: per weekday). */
export function hoursText(h: Listing["working_hours"]): string {
  if (!h || typeof h !== "object") return "";
  const o = h as Record<string, any>;
  if (o.open && o.close) return `${o.open} - ${o.close}${o.days ? ` (${o.days})` : ""}`;
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const hi: Record<string, string> = { monday: "सोम", tuesday: "मंगल", wednesday: "बुध", thursday: "गुरु", friday: "शुक्र", saturday: "शनि", sunday: "रवि" };
  const parts = days
    .map((d) => [d, o[d] ?? o[d[0].toUpperCase() + d.slice(1)]] as const)
    .filter(([, v]) => v && typeof v === "object")
    .map(([d, v]) => `${hi[d]}: ${v.status === "closed" ? "बंद" : v.open && v.close ? `${v.open}-${v.close}` : "खुला"}`);
  return parts.join(", ");
}

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
