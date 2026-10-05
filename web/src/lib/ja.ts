// Jan Aushadhi Kendra data for the locator pages.
//
// Source: data/jan_aushadhi_stores_all.json, the PMBJP kendra list (store code,
// operator, phone, address, PIN, coordinates) as published by PMBI's store
// locator. Old URLs are kept: service/jan-aushadhi/<state>.html and
// service/jan-aushadhi/<state>/<district>.html; a district without an old page
// gets one when it has at least 3 kendras.
import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT } from "./repo";
import { STATES } from "../data/site";

export type Kendra = { code: string; person: string; phone: string; addr: string; pin: string; lat: number | null; lng: number | null };
export type JaDistrict = {
  state: string; // state slug
  slug: string;
  name: string;
  kendras: Kendra[];
  pins: [string, number][]; // PIN -> kendras, most first
  lat: number | null;
  lng: number | null;
  rel: string; // repo-relative page path
  old: boolean; // page existed in the old site
};
export type JaState = { slug: string; name: string; hi: string; districts: JaDistrict[]; total: number; rel: string };

const DIR = path.join(REPO_ROOT, "service/jan-aushadhi");
const norm = (s: string | null | undefined) => (s ?? "").toLowerCase().replace(/[^a-z]/g, "");
const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const num = (v: unknown) => {
  const m = String(v ?? "").match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : NaN;
};
// Coordinates outside India (or swapped/garbled) are dropped, not guessed.
const coord = (lat: unknown, lng: unknown): [number, number] | [null, null] => {
  const a = num(lat), b = num(lng);
  return a > 6 && a < 38 && b > 68 && b < 98 ? [a, b] : [null, null];
};
const tidy = (s: string | null | undefined) =>
  (s ?? "").replace(/\s+/g, " ").replace(/\s+,/g, ",").replace(/^[\s,.-]+|[\s,.-]+$/g, "").trim();

const STATE_KEY: Record<string, string> = {
  andamanandnicobarislands: "andaman-nicobar",
  thedadraandnagarhavelianddamananddiu: "dadra-nagar-haveli-daman-diu",
  dadraandnagarhavelianddamananddiu: "dadra-nagar-haveli-daman-diu",
  jammuandkashmir: "jammu-kashmir",
};
const stateSlug = (name: string) => STATE_KEY[norm(name)] ?? STATES.find((s) => norm(s.slug) === norm(name))?.slug;

type Raw = {
  storeCode: string; contactPerson: string | null; contactNumber: string | null; pinCode: number | string | null;
  stateName: string | null; districtName: string | null; kendraAddress: string | null; latitude: unknown; longitude: unknown; status: number;
};

let cache: JaState[] | null = null;

export function jaStates(): JaState[] {
  if (cache) return cache;
  const raw: Raw[] = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "data/jan_aushadhi_stores_all.json"), "utf8"));
  const groups = new Map<string, Map<string, { name: string; list: Kendra[] }>>();
  const seen = new Set<string>();
  for (const r of raw) {
    if (r.status !== 1 || !r.districtName) continue;
    const st = stateSlug(r.stateName ?? "");
    if (!st || seen.has(r.storeCode)) continue;
    seen.add(r.storeCode);
    const [lat, lng] = coord(r.latitude, r.longitude);
    const pin = String(r.pinCode ?? "").match(/\b\d{6}\b/)?.[0] ?? "";
    const phone = String(r.contactNumber ?? "").replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
    const k: Kendra = { code: r.storeCode, person: tidy(r.contactPerson), phone: /^[6-9]\d{9}$/.test(phone) ? phone : "", addr: tidy(r.kendraAddress), pin, lat, lng };
    const dm = groups.get(st) ?? new Map();
    groups.set(st, dm);
    const key = norm(r.districtName);
    const g = dm.get(key) ?? { name: tidy(r.districtName), list: [] };
    g.list.push(k);
    dm.set(key, g);
  }

  cache = STATES.filter((s) => groups.has(s.slug)).map((s) => {
    const oldFiles = fs.existsSync(path.join(DIR, s.slug))
      ? fs.readdirSync(path.join(DIR, s.slug)).filter((f) => f.endsWith(".html") && f !== "index.html")
      : [];
    const byKey = new Map(oldFiles.map((f) => [norm(f.slice(0, -5)), f.slice(0, -5)]));
    const districts: JaDistrict[] = [];
    for (const [key, g] of groups.get(s.slug)!) {
      const oldSlug = byKey.get(key);
      if (!oldSlug && g.list.length < 3) continue;
      const slug = oldSlug ?? slugify(g.name);
      const pinCount = new Map<string, number>();
      for (const k of g.list) if (k.pin) pinCount.set(k.pin, (pinCount.get(k.pin) ?? 0) + 1);
      const pts = g.list.filter((k) => k.lat != null);
      const med = (a: number[]) => a.sort((x, y) => x - y)[Math.floor(a.length / 2)];
      districts.push({
        state: s.slug, slug, name: g.name.replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\B\w/g, (c) => c.toLowerCase()),
        kendras: g.list.sort((a, b) => a.pin.localeCompare(b.pin) || a.addr.localeCompare(b.addr)),
        pins: [...pinCount].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])),
        lat: pts.length ? med(pts.map((k) => k.lat!)) : null,
        lng: pts.length ? med(pts.map((k) => k.lng!)) : null,
        rel: `service/jan-aushadhi/${s.slug}/${slug}.html`,
        old: !!oldSlug,
      });
    }
    districts.sort((a, b) => b.kendras.length - a.kendras.length || a.name.localeCompare(b.name));
    return { slug: s.slug, name: s.name, hi: s.hi, districts, total: districts.reduce((n, d) => n + d.kendras.length, 0), rel: `service/jan-aushadhi/${s.slug}.html` };
  });
  return cache;
}

export const jaDistricts = () => jaStates().flatMap((s) => s.districts);
export const jaTotal = () => jaStates().reduce((n, s) => n + s.total, 0);

const km = (a: { lat: number | null; lng: number | null }, b: { lat: number | null; lng: number | null }) => {
  if (a.lat == null || b.lat == null || a.lng == null || b.lng == null) return Infinity;
  const r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

/** Nearest other district pages, by median kendra location. */
export function nearbyDistricts(d: JaDistrict, n: number) {
  return jaDistricts()
    .filter((o) => o !== d)
    .map((o) => ({ o, km: km(d, o) }))
    .filter((x) => x.km < 250)
    .sort((a, b) => a.km - b.km)
    .slice(0, n)
    .map(({ o, km }) => ({ href: `/${o.rel}`, name: o.name, km: Math.round(km), count: o.kendras.length }));
}

/** Kendras in other districts closest to this district's centre. */
export function nearbyKendras(d: JaDistrict, n: number) {
  if (d.lat == null) return [];
  return jaDistricts()
    .filter((o) => o !== d && o.state === d.state || (o !== d && km(d, o) < 150))
    .flatMap((o) => o.kendras.map((k) => ({ k, district: o.name, href: `/${o.rel}`, km: km(d, k) })))
    .filter((x) => x.km < 120)
    .sort((a, b) => a.km - b.km)
    .slice(0, n)
    .map((x) => ({ ...x, km: Math.round(x.km) }));
}

export const mapLink = (k: Kendra) =>
  k.lat != null
    ? `https://www.google.com/maps/search/?api=1&query=${k.lat},${k.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Jan Aushadhi Kendra ${k.addr} ${k.pin}`)}`;

/** Old page meta (titles are kept). */
export function oldTitle(rel: string): { title: string; description: string } {
  const file = path.join(REPO_ROOT, rel);
  if (!fs.existsSync(file)) return { title: "", description: "" };
  const html = fs.readFileSync(file, "utf8").slice(0, 12000);
  const dec = (s: string) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  return {
    title: dec(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "").trim(),
    description: dec(html.match(/name="description" content="([^"]*)"/i)?.[1] ?? "").trim(),
  };
}
