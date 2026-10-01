const fs = require('fs');
const path = require('path');

const batches = ['batchA.json', 'batchB.json', 'batchC.json'];
const langPath = 'data/lang.json';
let langData = JSON.parse(fs.readFileSync(langPath, 'utf8'));

const relatedToolsHTML = `
<h3 data-lang-show="en">Related Tools</h3>
<h3 data-lang-show="hi">सम्बंधित टूल्स</h3>
<div class="htc-related-grid">
    <a href="../project-report/" class="htc-related-card">
        <span class="htc-icon">📊</span>
        <div class="htc-card-title">
            <span data-lang-show="en">Project Report Generator</span>
            <span data-lang-show="hi">प्रोजेक्ट रिपोर्ट जेनरेटर</span>
        </div>
        <p class="htc-card-desc">
            <span data-lang-show="en">Create instant project reports for Mudra & PMEGP loans</span>
            <span data-lang-show="hi">मुद्रा और PMEGP लोन के लिए इंस्टेंट प्रोजेक्ट रिपोर्ट बनाएं</span>
        </p>
    </a>
    <a href="../hidden-tax-calculator.html" class="htc-related-card">
        <span class="htc-icon">🕵️</span>
        <div class="htc-card-title">
            <span data-lang-show="en">Hidden Tax Calculator</span>
            <span data-lang-show="hi">हिडन टैक्स कैलकुलेटर</span>
        </div>
        <p class="htc-card-desc">
            <span data-lang-show="en">Find out how much indirect tax you pay daily</span>
            <span data-lang-show="hi">जानें कि आप रोज़ाना कितना अप्रत्यक्ष कर चुकाते हैं</span>
        </p>
    </a>
    <a href="../tools/income-tax-calculator.html" class="htc-related-card">
        <span class="htc-icon">💰</span>
        <div class="htc-card-title">
            <span data-lang-show="en">Income Tax Calculator</span>
            <span data-lang-show="hi">इनकम टैक्स कैलकुलेटर</span>
        </div>
        <p class="htc-card-desc">
            <span data-lang-show="en">Calculate tax for Old vs New Regime</span>
            <span data-lang-show="hi">पुरानी और नई व्यवस्था के लिए टैक्स की गणना करें</span>
        </p>
    </a>
    <a href="../tools/photo-resizer.html" class="htc-related-card">
        <span class="htc-icon">🖼️</span>
        <div class="htc-card-title">
            <span data-lang-show="en">Photo Resizer</span>
            <span data-lang-show="hi">फोटो रिसाइज़र</span>
        </div>
        <p class="htc-card-desc">
            <span data-lang-show="en">Resize photos for Govt job applications</span>
            <span data-lang-show="hi">सरकारी नौकरी फॉर्म के लिए फोटो का आकार बदलें</span>
        </p>
    </a>
</div>
`;

batches.forEach(batchFile => {
    if (!fs.existsSync(batchFile)) {
        console.error("Missing batch file: " + batchFile);
        return;
    }
    const data = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
    
    for (const [filepath, seo] of Object.entries(data)) {
        // Update lang.json
        langData.en[seo.titleKey] = seo.titleEn;
        langData.hi[seo.titleKey] = seo.titleHi;
        langData.en[seo.descKey] = seo.descEn;
        langData.hi[seo.descKey] = seo.descHi;
        
        // Build the HTML block
        const seoHTML = `
<!-- SEO CONTENT START -->
<section class="htc-scope htc-section mt-5 mb-5">
    <div class="htc-wrap">
        <div data-lang-show="en">
            ${seo.contentEn}
        </div>
        <div data-lang-show="hi">
            ${seo.contentHi}
        </div>
        ${relatedToolsHTML}
    </div>
</section>
<!-- SEO CONTENT END -->
`;
        
        // Read file
        if (!fs.existsSync(filepath)) {
            console.error("File not found: " + filepath);
            continue;
        }
        let fileContent = fs.readFileSync(filepath, 'utf8');
        
        // Strip out existing old SEO blocks if any
        fileContent = fileContent.replace(/<!-- SEO CONTENT START -->[\s\S]*?<!-- SEO CONTENT END -->\s*/g, '');
        
        // Fix meta tags
        fileContent = fileContent.replace(/<title>.*?<\/title>/, `<title data-i18n-content="${seo.titleKey}">Sarkari Sewa Portal</title>`);
        fileContent = fileContent.replace(/<meta\s+name="description"\s+content="[^"]*">/, `<meta name="description" content="" data-i18n-content="${seo.descKey}">`);
        
        // Inject new SEO block before </main>
        if (fileContent.includes('</main>')) {
            fileContent = fileContent.replace('</main>', seoHTML + '\n</main>');
        } else {
            fileContent = fileContent.replace('</body>', seoHTML + '\n</body>');
        }
        
        // Ensure CSS is included
        if (!fileContent.includes('hidden-tax-theme.css')) {
            let cssPath = '../assets/css/hidden-tax-theme.css';
            if (filepath.indexOf('/') === -1 && filepath.indexOf('\\') === -1) {
                cssPath = 'assets/css/hidden-tax-theme.css';
            }
            fileContent = fileContent.replace('</head>', `  <link rel="stylesheet" href="${cssPath}">\n</head>`);
        }
        
        fs.writeFileSync(filepath, fileContent, 'utf8');
        console.log("Updated " + filepath);
    }
});

fs.writeFileSync(langPath, JSON.stringify(langData, null, 2), 'utf8');
console.log("Updated lang.json");
