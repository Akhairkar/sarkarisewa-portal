/* ==========================================================================
   7th & 8th Pay Commission Calculation Engine Data & Script
   SarkariSewa India - Native Theme & Language Switcher Integration
   ========================================================================== */

// 7th Pay Matrix Data Table (Pay Levels 1 to 18)
const PAY_MATRIX_DATA = {
    1:  { min: 18000, max: 56900,  steps: [18000, 18500, 19100, 19700, 20300, 20900, 21500, 22100, 22800, 23500, 24200, 24900, 25600, 26400, 27200, 28000, 28800, 29700, 30600, 31500, 32400, 33400, 34400, 35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900] },
    2:  { min: 19900, max: 63200,  steps: [19900, 20500, 21100, 21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200] },
    3:  { min: 21700, max: 69100,  steps: [21700, 22400, 23100, 23800, 24500, 25200, 26000, 26800, 27600, 28400, 29300, 30200, 31100, 32000, 33000, 34000, 35000, 36100, 37200, 38300, 39400, 40600, 41800, 43100, 44400, 45700, 47100, 48500, 50000, 51500, 53000, 54600, 56200, 57900, 59600, 61400, 63200, 65100, 67100, 69100] },
    4:  { min: 25500, max: 81100,  steps: [25500, 26300, 27100, 27900, 28700, 29600, 30500, 31400, 32300, 33300, 34300, 35300, 36400, 37500, 38600, 39800, 41000, 42200, 43500, 44800, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81100] },
    5:  { min: 29200, max: 92300,  steps: [29200, 30100, 31000, 31900, 32900, 33900, 34900, 35900, 37000, 38100, 39200, 40400, 41600, 42800, 44100, 45400, 46800, 48200, 49600, 51100, 52600, 54200, 55800, 57500, 59200, 61000, 62800, 64700, 66600, 68600, 70700, 72800, 75000, 77300, 79600, 82000, 84500, 87000, 89600, 92300] },
    6:  { min: 35400, max: 112400, steps: [35400, 36500, 37600, 38700, 39900, 41100, 42300, 43600, 44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81100, 83500, 86000, 88600, 91300, 94000, 96800, 99700, 102700, 105800, 109000, 112400] },
    7:  { min: 44900, max: 142400, steps: [44900, 46200, 47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81100, 83500, 86000, 88600, 91300, 94000, 96800, 99700, 102700, 105800, 109000, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400] },
    8:  { min: 47600, max: 151100, steps: [47600, 49000, 50500, 52000, 53600, 55200, 56900, 58600, 60400, 62200, 64100, 66000, 68000, 70000, 72100, 74300, 76500, 78800, 81100, 83500, 86000, 88600, 91300, 94000, 96800, 99700, 102700, 105800, 109000, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100] },
    9:  { min: 53100, max: 167800, steps: [53100, 54700, 56300, 58000, 59700, 61500, 63300, 65200, 67200, 69200, 71300, 73400, 75600, 77900, 80200, 82600, 85100, 87700, 90300, 93000, 95800, 98700, 101700, 104800, 107900, 111100, 114400, 117800, 121300, 124900, 128600, 132500, 136500, 140600, 144800, 149100, 153600, 158200, 162900, 167800] },
    10: { min: 56100, max: 177500, steps: [56100, 57800, 59500, 61300, 63100, 65000, 67000, 69000, 71100, 73200, 75400, 77700, 80000, 82400, 84900, 87400, 90000, 92700, 95500, 98400, 101400, 104400, 107500, 110700, 114000, 117400, 120900, 124500, 128200, 132000, 136000, 140100, 144300, 148600, 153100, 157700, 162400, 167300, 172300, 177500] },
    11: { min: 67700, max: 208700, steps: [67700, 69700, 71800, 74000, 76200, 78500, 80900, 83300, 85800, 88400, 91100, 93800, 96600, 99500, 102500, 105600, 108800, 112100, 115500, 119000, 122600, 126300, 130100, 134000, 138000, 142100, 146400, 150800, 155300, 160000, 164800, 169700, 174800, 180000, 185400, 191000, 196700, 202600, 208700] },
    12: { min: 78800, max: 209200, steps: [78800, 81200, 83600, 86100, 88700, 91400, 94100, 96900, 99800, 102800, 105900, 109100, 112400, 115800, 119300, 122900, 126600, 130400, 134300, 138300, 142400, 146700, 151100, 155600, 160300, 165100, 170100, 175200, 180500, 185900, 191500, 197200, 203100, 209200] },
    13: { min: 123100, max: 215900, steps: [123100, 126800, 130600, 134500, 138500, 142700, 147000, 151400, 155900, 160600, 165400, 170400, 175500, 180800, 186200, 191800, 197600, 203500, 209600, 215900] },
    14: { min: 144200, max: 218200, steps: [144200, 148500, 153000, 157600, 162300, 167200, 172200, 177400, 182700, 188200, 193800, 199600, 205600, 211800, 218200] }
};

// SarkariSewa India Bilingual I18n Dictionary
const CALCULATOR_I18N = {
    hi: {
        calc_title: "7th Pay Commission Salary Calculator",
        calc_subtitle: "Pay Level select karein aur instant Basic, DA (50%+), HRA (X/Y/Z), TA, TATP aur NPS deduction ke saath accurate In-Hand Salary check karein.",
        badge_updated: "SARKARI SEWA INDIA - 2026 RATES",
        label_govt_type: "Government Employee Type:",
        label_pay_level: "Select Pay Level (Group & Grade Pay):",
        label_basic_pay: "Basic Pay (₹):",
        label_da_rate: "Dearness Allowance (DA %):",
        label_hra_cat: "HRA City Category (Rent Allowance):",
        label_govt_quarter: "Government Quarter Allocated? (HRA will be ₹0)",
        label_ta_city: "Transport Allowance (TA) Area:",
        btn_print: "🖨️ Print Slip",
        btn_share: "💬 Share",
        metric_net: "Estimated Net In-Hand Salary",
        metric_gross: "Total Gross Salary",
        metric_sub: "Gross Salary minus NPS & Deductions",
        th_component: "Allowance / Component",
        th_formula: "Calculation Formula",
        th_amount: "Amount (₹)",
        row_basic: "Basic Pay",
        row_da: "Dearness Allowance (DA)",
        row_hra: "House Rent Allowance (HRA)",
        row_ta: "Transport Allowance (TA)",
        row_tatp: "DA on TA (TATP)",
        row_total_gross: "TOTAL GROSS SALARY",
        row_nps: "NPS Employee Contribution",
        row_cghs: "Govt Health Scheme (CGHS Estimate)",
        row_total_net: "NET IN-HAND SALARY",
        cpc8_heading: "8th Pay Commission Estimated Salary Projection",
        cpc8_sub: "Select expected Fitment Factor (2.57, 2.86 or 3.68) to preview projected basic & gross salary under upcoming 8th Pay Commission:",
        cpc8_label_fitment: "Select Expected Fitment Factor:",
        cpc8_metric_basic: "Projected 8th CPC Minimum Basic Pay",
        cpc8_metric_gross: "Projected 8th CPC Gross Salary (with 0% DA)",
        lang_toggle_btn: "English"
    },
    en: {
        calc_title: "7th Pay Commission Salary Calculator",
        calc_subtitle: "Select Pay Level and get instant accurate breakdown of Basic, DA (50%+), HRA (X/Y/Z), TA, TATP & NPS deductions for In-Hand Salary.",
        badge_updated: "SARKARI SEWA INDIA - 2026 RATES",
        label_govt_type: "Government Employee Type:",
        label_pay_level: "Select Pay Level (Group & Grade Pay):",
        label_basic_pay: "Basic Pay (₹):",
        label_da_rate: "Dearness Allowance (DA %):",
        label_hra_cat: "HRA City Category (Rent Allowance):",
        label_govt_quarter: "Government Quarter Allocated? (HRA will be ₹0)",
        label_ta_city: "Transport Allowance (TA) Area:",
        btn_print: "🖨️ Print Slip",
        btn_share: "💬 Share",
        metric_net: "Estimated Net In-Hand Salary",
        metric_gross: "Total Gross Salary",
        metric_sub: "Gross Salary minus NPS & Deductions",
        th_component: "Allowance / Component",
        th_formula: "Calculation Formula",
        th_amount: "Amount (₹)",
        row_basic: "Basic Pay",
        row_da: "Dearness Allowance (DA)",
        row_hra: "House Rent Allowance (HRA)",
        row_ta: "Transport Allowance (TA)",
        row_tatp: "DA on TA (TATP)",
        row_total_gross: "TOTAL GROSS SALARY",
        row_nps: "NPS Employee Contribution",
        row_cghs: "Govt Health Scheme (CGHS Estimate)",
        row_total_net: "NET IN-HAND SALARY",
        cpc8_heading: "8th Pay Commission Estimated Salary Projection",
        cpc8_sub: "Select expected Fitment Factor (2.57, 2.86 or 3.68) to preview projected basic & gross salary under upcoming 8th Pay Commission:",
        cpc8_label_fitment: "Select Expected Fitment Factor:",
        cpc8_metric_basic: "Projected 8th CPC Minimum Basic Pay",
        cpc8_metric_gross: "Projected 8th CPC Gross Salary (with 0% DA)",
        lang_toggle_btn: "हिंदी"
    }
};

// Available Tools Directory for Search Engine & Scalable Tabs
const ALL_TOOLS_LIST = [
    { title: "7th Pay Commission Calculator", category: "pay", link: "#", tag: "Popular" },
    { title: "8th Pay Commission Estimated Salary Calculator", category: "pay", link: "8th-pay-calculator.html", tag: "Upcoming" },
    { title: "NPS Accumulation & Pension Calculator", category: "pension", link: "nps-pension-calculator.html", tag: "Pension" },
    { title: "New Regime vs Old Tax Regime Calculator", category: "tax", link: "#all-tools", tag: "Tax" },
    { title: "Govt & Private Gratuity Calculator", category: "pension", link: "#all-tools", tag: "Gratuity" },
    { title: "GPF Maturity & Interest Calculator", category: "loans", link: "#all-tools", tag: "GPF" },
    { title: "HRA Exemption Tax Calculator", category: "pay", link: "#all-tools", tag: "HRA" },
    { title: "Govt Employee TDS & Form 16 Helper", category: "tax", link: "#all-tools", tag: "TDS" }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // DOM Elements
    const payLevelSelect = document.getElementById("pay-level-select");
    const basicPaySelect = document.getElementById("basic-pay-select");
    const basicPayValDisplay = document.getElementById("basic-pay-val-display");
    const daRateSlider = document.getElementById("da-rate-slider");
    const daRateInput = document.getElementById("da-rate-input");
    const daValDisplay = document.getElementById("da-val-display");
    const govtQuarterChk = document.getElementById("govt-quarter-chk");
    const taCitySelect = document.getElementById("ta-city-select");
    const hraRadioButtons = document.querySelectorAll('input[name="hra_category"]');
    const govtTypeSelect = document.getElementById("govt-type-select");
    
    // 8th Pay Elements
    const fitmentFactorSelect = document.getElementById("fitment-factor-select");
    const cpc8BasicVal = document.getElementById("cpc8-basic-val");
    const cpc8GrossVal = document.getElementById("cpc8-gross-val");

    // Output Elements
    const netSalaryDisplay = document.getElementById("net-salary-display");
    const grossSalaryDisplay = document.getElementById("gross-salary-display");
    const resBasicPay = document.getElementById("res-basic-pay");
    const resDaPct = document.getElementById("res-da-pct");
    const resDaAmount = document.getElementById("res-da-amount");
    const resHraPct = document.getElementById("res-hra-pct");
    const resHraAmount = document.getElementById("res-hra-amount");
    const resTaAmount = document.getElementById("res-ta-amount");
    const resTatpAmount = document.getElementById("res-tatp-amount");
    const resTotalGross = document.getElementById("res-total-gross");
    const resNpsDeduction = document.getElementById("res-nps-deduction");
    const resTotalNet = document.getElementById("res-total-net");
    const resGovtNps = document.getElementById("res-govt-nps");

    // Language & Theme State
    let currentLang = localStorage.getItem("ss_lang") || "hi";
    let currentTheme = localStorage.getItem("ss_theme") || "light";

    // Initialize Pay Level Options
    function initPayLevelOptions() {
        payLevelSelect.innerHTML = "";
        for (let level = 1; level <= 14; level++) {
            const opt = document.createElement("option");
            opt.value = level;
            const data = PAY_MATRIX_DATA[level];
            let levelLabel = `Level ${level} (Min ₹${data.min.toLocaleString('en-IN')})`;
            if (level === 7) levelLabel += " - Grade Pay 4600";
            if (level === 6) levelLabel += " - Grade Pay 4200";
            if (level === 1) levelLabel += " - Grade Pay 1800";
            opt.textContent = levelLabel;
            payLevelSelect.appendChild(opt);
        }
        payLevelSelect.value = 7; // Default to Level 7
        updateBasicPayDropdown(7);
    }

    // Update Basic Pay options based on chosen Pay Level
    function updateBasicPayDropdown(level) {
        basicPaySelect.innerHTML = "";
        const steps = PAY_MATRIX_DATA[level].steps;
        steps.forEach((amount, idx) => {
            const opt = document.createElement("option");
            opt.value = amount;
            opt.textContent = `Index ${idx + 1}: ₹${amount.toLocaleString('en-IN')}`;
            basicPaySelect.appendChild(opt);
        });
        basicPaySelect.value = steps[0]; // Set first step by default
        calculateSalary();
    }

    // Core Calculation Logic
    function calculateSalary() {
        const level = parseInt(payLevelSelect.value);
        const basicPay = parseFloat(basicPaySelect.value) || 0;
        const daPct = parseFloat(daRateInput.value) || 0;
        
        // Update display text
        basicPayValDisplay.textContent = `₹${basicPay.toLocaleString('en-IN')}`;
        daValDisplay.textContent = `${daPct}%`;
        resDaPct.textContent = daPct;

        // 1. Calculate Dearness Allowance (DA)
        const daAmount = (basicPay * daPct) / 100;

        // 2. Calculate House Rent Allowance (HRA)
        let selectedHraCategory = "X";
        hraRadioButtons.forEach(radio => {
            if (radio.checked) selectedHraCategory = radio.value;
        });

        let hraPct = 10;
        if (selectedHraCategory === "X") hraPct = daPct >= 50 ? 30 : 24;
        if (selectedHraCategory === "Y") hraPct = daPct >= 50 ? 20 : 16;
        if (selectedHraCategory === "Z") hraPct = daPct >= 50 ? 10 : 8;

        let hraAmount = (basicPay * hraPct) / 100;
        if (govtQuarterChk.checked) {
            hraAmount = 0;
            resHraPct.textContent = 0;
        } else {
            resHraPct.textContent = hraPct;
        }

        // 3. Calculate Transport Allowance (TA) & TATP
        let baseTA = 0;
        const isHigherCity = taCitySelect.value === "higher";

        if (level >= 9) {
            baseTA = isHigherCity ? 7200 : 3600;
        } else if (level >= 3) {
            baseTA = isHigherCity ? 3600 : 1800;
        } else {
            baseTA = isHigherCity ? 1350 : 900;
        }

        // TATP (DA on TA)
        const tatpAmount = (baseTA * daPct) / 100;

        // 4. Gross Salary
        const grossSalary = basicPay + daAmount + hraAmount + baseTA + tatpAmount;

        // 5. Deductions (NPS 10% of Basic + DA, CGHS ₹650 standard estimate)
        const npsEmployee = ((basicPay + daAmount) * 10) / 100;
        const npsGovt = ((basicPay + daAmount) * 14) / 100;
        const cghsDeduction = level >= 7 ? 650 : (level >= 4 ? 450 : 250);

        const totalDeductions = npsEmployee + cghsDeduction;

        // 6. Net In-Hand Salary
        const netSalary = grossSalary - totalDeductions;

        // Update UI Outputs
        netSalaryDisplay.textContent = `₹${Math.round(netSalary).toLocaleString('en-IN')}`;
        grossSalaryDisplay.textContent = `₹${Math.round(grossSalary).toLocaleString('en-IN')}`;
        
        resBasicPay.textContent = `₹${basicPay.toLocaleString('en-IN')}`;
        resDaAmount.textContent = `+ ₹${Math.round(daAmount).toLocaleString('en-IN')}`;
        resHraAmount.textContent = `+ ₹${Math.round(hraAmount).toLocaleString('en-IN')}`;
        resTaAmount.textContent = `+ ₹${baseTA.toLocaleString('en-IN')}`;
        resTatpAmount.textContent = `+ ₹${Math.round(tatpAmount).toLocaleString('en-IN')}`;
        resTotalGross.textContent = `₹${Math.round(grossSalary).toLocaleString('en-IN')}`;

        resNpsDeduction.textContent = `- ₹${Math.round(npsEmployee).toLocaleString('en-IN')}`;
        document.getElementById("res-cghs-deduction").textContent = `- ₹${cghsDeduction}`;
        resTotalNet.textContent = `₹${Math.round(netSalary).toLocaleString('en-IN')}`;
        resGovtNps.textContent = `₹${Math.round(npsGovt).toLocaleString('en-IN')}`;

        // Also update 8th Pay Projection
        calculate8thPay(basicPay);
    }

    // 8th Pay Projection Logic
    function calculate8thPay(currentBasic) {
        const fitment = parseFloat(fitmentFactorSelect.value) || 2.86;
        const cpc8Basic = Math.round(currentBasic * fitment);
        const cpc8Gross = Math.round(cpc8Basic * 1.30); // 30% projected HRA & allowances
        
        cpc8BasicVal.textContent = `₹${cpc8Basic.toLocaleString('en-IN')}`;
        cpc8GrossVal.textContent = `₹${cpc8Gross.toLocaleString('en-IN')}`;
    }

    // Event Listeners for Dynamic Calculation
    payLevelSelect.addEventListener("change", (e) => {
        updateBasicPayDropdown(e.target.value);
    });

    basicPaySelect.addEventListener("change", calculateSalary);
    
    daRateSlider.addEventListener("input", (e) => {
        daRateInput.value = e.target.value;
        calculateSalary();
    });

    daRateInput.addEventListener("input", (e) => {
        daRateSlider.value = e.target.value;
        calculateSalary();
    });

    hraRadioButtons.forEach(radio => radio.addEventListener("change", calculateSalary));
    govtQuarterChk.addEventListener("change", calculateSalary);
    taCitySelect.addEventListener("change", calculateSalary);
    govtTypeSelect.addEventListener("change", calculateSalary);
    fitmentFactorSelect.addEventListener("change", () => {
        const basic = parseFloat(basicPaySelect.value) || 18000;
        calculate8thPay(basic);
    });

    // Share Button WhatsApp Click Handler
    const shareBtn = document.getElementById("share-whatsapp-btn");
    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const netVal = netSalaryDisplay.textContent;
            const grossVal = grossSalaryDisplay.textContent;
            const levelVal = payLevelSelect.value;
            const text = `📊 *My 7th Pay Commission Salary Projection (SarkariSewaIndia.com)*:\n• Pay Level: Level ${levelVal}\n• Gross Salary: ${grossVal}\n• Net In-Hand Salary: ${netVal}\n\nCheck your salary on 7th Pay Calculator: ${window.location.href}`;
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
        });
    }

    // Native SarkariSewa Theme Toggle Handler
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        document.body.setAttribute("data-theme", theme);
        const themeBtn = document.getElementById("theme-toggle-btn");
        const themeLabel = themeBtn ? themeBtn.querySelector(".theme-label") : null;
        if (themeBtn) {
            themeBtn.innerHTML = theme === "dark" ? `☀️ <span class="theme-label">Light</span>` : `🌙 <span class="theme-label">Dark</span>`;
        }
        localStorage.setItem("ss_theme", theme);
        currentTheme = theme;
    }

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
        });
    }
    applyTheme(currentTheme);

    // Native SarkariSewa Language Toggle Handler (HI | EN)
    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("ss_lang", lang);
        document.documentElement.setAttribute("lang", lang);

        const dict = CALCULATOR_I18N[lang] || CALCULATOR_I18N.hi;
        
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        const langBtn = document.getElementById("lang-toggle-btn");
        if (langBtn) {
            langBtn.textContent = dict.lang_toggle_btn;
        }
    }

    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            const nextLang = currentLang === "hi" ? "en" : "hi";
            applyLanguage(nextLang);
        });
    }
    applyLanguage(currentLang);

    // Tool Category Filter Tabs (Scalable Homepage Feature)
    const catTabs = document.querySelectorAll(".cat-tab");
    const toolCards = document.querySelectorAll(".tool-card");

    catTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            catTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const category = tab.getAttribute("data-cat");

            toolCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Header Search Bar Engine (Instant Filtering)
    const searchInput = document.getElementById("tool-search-input");
    const searchDropdown = document.getElementById("search-results-dropdown");

    if (searchInput && searchDropdown) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                searchDropdown.classList.add("hidden");
                return;
            }

            const matches = ALL_TOOLS_LIST.filter(tool => 
                tool.title.toLowerCase().includes(query) || tool.category.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                searchDropdown.innerHTML = matches.map(tool => `
                    <div class="search-dropdown-item" onclick="location.href='${tool.link}'">
                        <span>${tool.title}</span>
                        <span class="card-tag">${tool.tag}</span>
                    </div>
                `).join("");
                searchDropdown.classList.remove("hidden");
            } else {
                searchDropdown.innerHTML = `<div class="search-dropdown-item"><span>No tools found for "${query}"</span></div>`;
                searchDropdown.classList.remove("hidden");
            }
        });

        document.addEventListener("click", (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.add("hidden");
            }
        });
    }

    // FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(q => {
        q.addEventListener("click", () => {
            const item = q.parentElement;
            const isOpen = item.classList.contains("open");
            document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });

    // Initial Load
    initPayLevelOptions();
});
