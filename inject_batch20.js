const fs = require('fs');

const batchData = JSON.parse(fs.readFileSync('batch20.json', 'utf8'));

for (const [filename, data] of Object.entries(batchData)) {
  const filePath = `service/${filename}`;
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${data.titleHi} — SarkariSewa India</title>`);
  
  // Replace Meta Description
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${data.descHi}" />`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${data.titleHi}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${data.descHi}" />`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${data.titleHi}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${data.descHi}" />`);

  // Replace H1 Title
  html = html.replace(
    /<h1 class="service-hero__title">.*?<\/h1>/,
    `<h1 class="service-hero__title"><span data-lang-show="en">${data.titleEn}</span><span data-lang-show="hi">${data.titleHi}</span></h1>`
  );

  // Replace Hero Desc (it might be multi-line or missing)
  if (/<p class="service-hero__desc">.*?<\/p>/s.test(html)) {
      html = html.replace(
        /<p class="service-hero__desc">.*?<\/p>/s,
        `<p class="service-hero__desc"><span data-lang-show="en">${data.descEn}</span><span data-lang-show="hi">${data.descHi}</span></p>`
      );
  } else {
      // if missing, inject right after the H1 or subtitle
      html = html.replace(
        /(<\/h1>\s*(?:<p class="service-hero__dept[^>]*>.*?<\/p>)?)/,
        `$1\n      <p class="service-hero__desc"><span data-lang-show="en">${data.descEn}</span><span data-lang-show="hi">${data.descHi}</span></p>`
      );
  }

  // Append SEO Content inside service-sections
  const insertIndex = html.search(/\n\s*<div class="ad-slot"|\n\s*<section class="service-section" id="related-section"|\n\s*<div id="subscribe-widget"|<\/main>/);
  
  if (insertIndex !== -1) {
    const beforeInsert = html.lastIndexOf('</div>', insertIndex);
    
    if (beforeInsert !== -1 && (insertIndex - beforeInsert) < 30) {
        const newSections = `
    <!-- INJECTED SEO CONTENT -->
    <section class="service-section">
      <div data-lang-show="en" class="htc-seo-content" style="padding:16px;">
        ${data.contentEn}
      </div>
      <div data-lang-show="hi" class="htc-seo-content" style="padding:16px;">
        ${data.contentHi}
      </div>
    </section>
`;
        html = html.slice(0, beforeInsert) + newSections + html.slice(beforeInsert);
        console.log(`Successfully injected content for ${filename}`);
    } else {
        console.log(`Failed to find closing div for ${filename}`);
    }
  } else {
    console.log(`Could not find injection point in ${filename}`);
  }

  fs.writeFileSync(filePath, html);
}

console.log("Batch 3 update complete.");
