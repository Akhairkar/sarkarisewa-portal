const fs = require('fs');

const batch1Data = JSON.parse(fs.readFileSync('batch1.json', 'utf8'));
const batch2Data = JSON.parse(fs.readFileSync('batch2.json', 'utf8'));

// Combine both batches to process all 10 files
const batchData = { ...batch1Data, ...batch2Data };

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

  // Replace Hero Desc
  html = html.replace(
    /<p class="service-hero__desc">.*?<\/p>/s,
    `<p class="service-hero__desc"><span data-lang-show="en">${data.descEn}</span><span data-lang-show="hi">${data.descHi}</span></p>`
  );

  // Append SEO Content instead of replacing the whole section
  // We find the closing </div> of <div id="service-sections">
  // Since we don't have a reliable way to find the EXACT matching closing div with regex,
  // we look for the next sibling element that always follows it, like <div class="ad-slot" or <section class="service-section" id="related-section" or <div id="subscribe-widget"
  
  const insertIndex = html.search(/\n\s*<div class="ad-slot"|\n\s*<section class="service-section" id="related-section"|\n\s*<div id="subscribe-widget"/);
  
  if (insertIndex !== -1) {
    // Find the </div> that precedes this insertIndex.
    // The structure is usually </div> \n <div class="ad-slot"...
    // Let's just do a string replacement at insertIndex. But wait, we want to put it INSIDE the service-sections.
    // So we need to put it BEFORE the `</div>` that closes service-sections.
    // The string "</div>" must be right before the insertIndex.
    const beforeInsert = html.lastIndexOf('</div>', insertIndex);
    
    if (beforeInsert !== -1 && (insertIndex - beforeInsert) < 20) {
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

console.log("Batch 1 and 2 update complete.");
