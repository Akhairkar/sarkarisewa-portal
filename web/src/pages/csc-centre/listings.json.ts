// Which approved centres have a live page in this build, and on which pages
// they are listed. Read by the admin panel (listing status, "listed" message).
import { listings, listingSlug, listingDistrictPage, nearbyJa } from "../../lib/csc-listings";
import { typeOf } from "../../lib/centre-types";
import { cscStateHref } from "../../lib/csc";
import { jaStates } from "../../lib/ja";
import { STATES } from "../../data/site";

export async function GET() {
  const rows = (await listings()).map((c) => {
    const j = typeOf(c.centre_type).kind === "ja" ? nearbyJa(c) : null;
    const d = j ? { href: j.href, name: j.name } : listingDistrictPage(c);
    const plain = (x: string | null | undefined) => String(x ?? "").toLowerCase().replace(/[^a-z]/g, "");
    const site = STATES.find((x) => plain(x.name) === plain(c.state));
    let state: { href: string; name: string } | null = null;
    if (j) { const js = jaStates().find((x) => x.slug === site?.slug); if (js) state = { href: `/${js.rel}`, name: js.hi }; }
    else { const ld = listingDistrictPage(c); const href = ld ? cscStateHref(ld.stateDir) : null; if (href && site) state = { href, name: site.hi }; }
    return { id: c.application_id, kind: j ? "ja" : "csc", page: `/csc-centre/${listingSlug(c)}.html`, district: d ? { href: d.href, name: d.name } : null, state };
  });
  return new Response(JSON.stringify({ built: new Date().toISOString(), rows }), { headers: { "Content-Type": "application/json" } });
}
