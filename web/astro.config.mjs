// @ts-check
import { defineConfig } from "astro/config";

// New pages are built here and copied over the old static site at deploy time
// (see scripts/assemble.mjs). "preserve" keeps the old URL shape:
// states/x.astro -> states/x.html, documents/index.astro -> documents/index.html.
export default defineConfig({
  site: "https://sarkarisewaindia.com",
  build: { format: "preserve" },
  trailingSlash: "ignore",
  compressHTML: true,
});
