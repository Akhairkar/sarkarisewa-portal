// Which approved centres have a live page in this build, and on which pages
// they are listed. Read by the admin panel (listing status, "listed" message).
import { listings, listingSlug, listingDistrictPage } from "../../lib/csc-listings";

export async function GET() {
  const rows = (await listings()).map((c) => {
    const d = listingDistrictPage(c);
    return { id: c.application_id, page: `/csc-centre/${listingSlug(c)}.html`, district: d ? { href: d.href, name: d.name } : null };
  });
  return new Response(JSON.stringify({ built: new Date().toISOString(), rows }), { headers: { "Content-Type": "application/json" } });
}
