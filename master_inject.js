const fs = require('fs');

const batchFile = process.argv[2];
if (!batchFile) { console.error('Usage: node master_inject.js <batchFile.json>'); process.exit(1); }

const batchData = JSON.parse(fs.readFileSync(batchFile, 'utf8'));

for (const [filename, data] of Object.entries(batchData)) {
  const filePath = `service/${filename}`;
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  if (html.includes('INJECTED SEO CONTENT')) {
    console.log(`Already injected: ${filename} - skipping`);
    continue;
  }

  // ✅ Fix Last Verified Date
  html = html.replace(
    /<strong>Last Verified:<\/strong>.*?<\/p>/g,
    '<strong>Last Verified:</strong> 18 August 2026</p>'
  );

  // ✅ Replace Title tag
  html = html.replace(/<title>.*?<\/title>/, `<title>${data.titleHi} | SarkariSewa India</title>`);
  
  // ✅ Replace Meta Description & OG tags
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${data.descHi}" />`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${data.titleHi}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${data.descHi}" />`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${data.titleHi}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${data.descHi}" />`);

  // ✅ Replace H1 Title (bilingual)
  html = html.replace(
    /<h1 class="service-hero__title">.*?<\/h1>/s,
    `<h1 class="service-hero__title"><span data-lang-show="en">${data.titleEn}</span><span data-lang-show="hi">${data.titleHi}</span></h1>`
  );

  // ✅ Replace Hero Description (bilingual)
  if (/<p class="service-hero__desc">.*?<\/p>/s.test(html)) {
    html = html.replace(
      /<p class="service-hero__desc">.*?<\/p>/s,
      `<p class="service-hero__desc"><span data-lang-show="en">${data.descEn}</span><span data-lang-show="hi">${data.descHi}</span></p>`
    );
  } else {
    html = html.replace(
      /(<\/h1>\s*(?:<p class="service-hero__dept[^>]*>.*?<\/p>)?)/s,
      `$1\n      <p class="service-hero__desc"><span data-lang-show="en">${data.descEn}</span><span data-lang-show="hi">${data.descHi}</span></p>`
    );
  }

  // ✅ Append Rich SEO Content Block inside service-sections
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
      console.log(`✅ Successfully injected: ${filename}`);
    } else {
      console.log(`⚠️  Failed to find closing div for ${filename}`);
    }
  } else {
    console.log(`❌ Could not find injection point in ${filename}`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

console.log(`\n🎉 Batch injection complete for: ${batchFile}`);
