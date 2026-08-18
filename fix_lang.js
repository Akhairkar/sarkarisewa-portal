const fs = require('fs');

// Read app.js
const appJs = fs.readFileSync('app.js', 'utf8');

// Extract CALCULATOR_I18N
const match = appJs.match(/const CALCULATOR_I18N = (\{[\s\S]*?\n\});/);
if (!match) {
    console.error('Could not find CALCULATOR_I18N in app.js');
    process.exit(1);
}

let calcI18n;
try {
    calcI18n = eval('(' + match[1] + ')');
} catch (e) {
    console.error('Failed to parse CALCULATOR_I18N:', e);
    process.exit(1);
}

const hiDict = calcI18n.hi;

const enDict = {
    "calc_title": "7th Pay Commission Salary Calculator",
    "calc_subtitle": "Select Pay Level and instantly check accurate In-Hand Salary with Basic, DA (50%+), HRA (X/Y/Z), TA, TATP, and NPS deduction.",
    "badge_updated": "SARKARI SEWA INDIA - 2026 RATES",
    "label_govt_type": "Government Employee Type:",
    "label_pay_level": "Select Pay Level (Group & Grade Pay):",
    "label_basic_pay": "Basic Pay (₹):",
    "label_da_rate": "Dearness Allowance (DA %):",
    "label_hra_cat": "HRA City Category (Rent Allowance):",
    "label_govt_quarter": "Government Quarter Allocated? (HRA will be ₹0)",
    "label_ta_city": "Transport Allowance (TA) Area:",
    "btn_print": "🖨️ Print Slip",
    "btn_share": "💬 Share",
    "metric_net": "Estimated Net In-Hand Salary",
    "metric_gross": "Total Gross Salary",
    "metric_sub": "Per Month",
    "th_component": "Component",
    "th_formula": "Formula",
    "th_amount": "Amount",
    "row_basic": "Basic Pay",
    "row_da": "Dearness Allowance (DA)",
    "row_hra": "House Rent Allowance (HRA)",
    "row_ta": "Transport Allowance (TA)",
    "row_tatp": "DA on TA (TATP)",
    "row_total_gross": "Gross Salary",
    "row_nps": "NPS Deduction (Employee)",
    "row_cghs": "CGHS & Other Deductions (Avg)",
    "row_total_net": "Net In-Hand Salary",
    "cpc8_heading": "8th Pay Commission Projection (2026+)",
    "cpc8_sub": "See how much your salary might increase in the 8th CPC",
    "cpc8_label_fitment": "Select Fitment Factor:",
    "cpc8_metric_basic": "Expected 8th CPC Basic Pay",
    "cpc8_metric_gross": "Expected 8th CPC Gross Salary",
    "lang_toggle_btn": "🌐 Read in Hindi",
    "note_nps_govt": "Government NPS Contribution (14%):"
};

const langJsonPath = 'data/lang.json';
const langJson = JSON.parse(fs.readFileSync(langJsonPath, 'utf8'));

let updated = 0;

for (const key of Object.keys(hiDict)) {
    if (langJson.hi[key] === key || langJson.hi[key] === undefined) {
        langJson.hi[key] = hiDict[key];
        updated++;
    }
    if (enDict[key]) {
        langJson.en[key] = enDict[key];
    }
}

if (langJson.hi['note_nps_govt'] === 'note_nps_govt' || langJson.hi['note_nps_govt'] === undefined) {
    langJson.hi['note_nps_govt'] = "सरकारी NPS योगदान (14%):";
}
if (langJson.en['note_nps_govt'] === 'note_nps_govt' || langJson.en['note_nps_govt'] === undefined) {
    langJson.en['note_nps_govt'] = enDict['note_nps_govt'];
}

fs.writeFileSync(langJsonPath, JSON.stringify(langJson, null, 2), 'utf8');
console.log(`Updated lang.json with ${updated} Hindi keys and corresponding English keys.`);
