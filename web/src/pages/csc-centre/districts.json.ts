// District CSC pages for the live centre page (csc-centre.html?id=), which
// links a newly approved centre to its district before its own page is built.
import { cscPages } from "../../lib/csc";

const norm = (s: string) => s.toLowerCase().replace(/district|जिला|ज़िला|[^a-zऀ-ॿ]/g, "");
export function GET() {
  const rows = cscPages()
    .filter((p) => !p.canonical)
    .map((p) => [[...new Set([...p.d.names, p.name].map(norm).filter(Boolean))], p.href, p.name]);
  return new Response(JSON.stringify(rows), { headers: { "Content-Type": "application/json" } });
}
