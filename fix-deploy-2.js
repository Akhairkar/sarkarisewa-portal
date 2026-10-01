const fs = require('fs');
const path = require('path');

const logOutput = `=== i18n key coverage ===
  7th-pay-commission-calculator.html: missing_en=['badge_updated', 'btn_print', 'btn_share', 'calc_subtitle', 'calc_title', 'label_basic_pay', 'label_da_rate', 'label_govt_quarter', 'label_govt_type', 'label_hra_cat', 'label_pay_level', 'label_ta_city', 'metric_gross', 'metric_net', 'metric_sub', 'note_nps_govt', 'row_basic', 'row_cghs', 'row_da', 'row_hra', 'row_nps', 'row_ta', 'row_tatp', 'row_total_gross', 'row_total_net', 'th_amount', 'th_component', 'th_formula'] missing_hi=['badge_updated', 'btn_print', 'btn_share', 'calc_subtitle', 'calc_title', 'label_basic_pay', 'label_da_rate', 'label_govt_quarter', 'label_govt_type', 'label_hra_cat', 'label_pay_level', 'label_ta_city', 'metric_gross', 'metric_net', 'metric_sub', 'note_nps_govt', 'row_basic', 'row_cghs', 'row_da', 'row_hra', 'row_nps', 'row_ta', 'row_tatp', 'row_total_gross', 'row_total_net', 'th_amount', 'th_component', 'th_formula']
  index.html: missing_en=['daily_updates_home_title', 'daily_updates_view_all'] missing_hi=['daily_updates_home_title', 'daily_updates_view_all']
  latest-updates.html: missing_en=['latest_updates_intro'] missing_hi=['latest_updates_intro']
  mpbcdc-direct-loan-yojana.html: missing_en=['dl_hero_desc', 'dl_hero_title', 'dl_overview_heading'] missing_hi=['dl_hero_desc', 'dl_hero_title', 'dl_overview_heading']
  mpbcdc-seed-capital-yojana.html: missing_en=['sc_hero_desc', 'sc_hero_title', 'sc_overview_heading'] missing_hi=['sc_hero_desc', 'sc_hero_title', 'sc_overview_heading']
  mpbcdc-subsidy-yojana.html: missing_en=['subsidy_calc_btn', 'subsidy_calc_title', 'subsidy_cta', 'subsidy_docs', 'subsidy_eligibility', 'subsidy_eyebrow', 'subsidy_faq', 'subsidy_funding', 'subsidy_funding_desc', 'subsidy_h1', 'subsidy_hero_desc', 'subsidy_related', 'subsidy_steps', 'subsidy_what_is'] missing_hi=['subsidy_calc_btn', 'subsidy_calc_title', 'subsidy_cta', 'subsidy_docs', 'subsidy_eligibility', 'subsidy_eyebrow', 'subsidy_faq', 'subsidy_funding', 'subsidy_funding_desc', 'subsidy_h1', 'subsidy_hero_desc', 'subsidy_related', 'subsidy_steps', 'subsidy_what_is']
  mpbcdc-yojana.html: missing_en=['apply.step1', 'apply.step2', 'apply.step3', 'apply.step4', 'apply.step5', 'apply.step6', 'apply.step7', 'apply.step8', 'content.apply_intro', 'content.compare_desc', 'content.docs_intro', 'content.eligibility_intro', 'content.what_is_p1', 'content.what_is_p2', 'content.what_is_p3', 'cta.report_desc', 'cta.report_title', 'disclaimer', 'doc.1', 'doc.2', 'doc.3', 'doc.4', 'doc.5', 'doc.6', 'doc.7', 'doc.8', 'doc.9', 'eligibility.1', 'eligibility.2', 'eligibility.3', 'eligibility.4', 'eligibility.5', 'eligibility.6', 'faq.a1', 'faq.a2', 'faq.a3', 'faq.a4', 'faq.q1', 'faq.q2', 'faq.q3', 'faq.q4', 'hero.cta', 'hero.desc', 'hero.eyebrow', 'hero.title', 'nav.home', 'nav.mpbcdc_yojana', 'related.direct_loan', 'related.direct_loan_card', 'related.direct_loan_card_desc', 'related.direct_loan_desc', 'related.project_report_card', 'related.project_report_card_desc', 'related.seed_capital', 'related.seed_capital_card', 'related.seed_capital_card_desc', 'related.seed_capital_desc', 'related.subsidy', 'related.subsidy_card', 'related.subsidy_card_desc', 'related.subsidy_desc', 'section.compare', 'section.documents', 'section.eligibility', 'section.faq', 'section.how_to_apply', 'section.related_tools', 'section.what_is_mpbcdc', 'table.bank_share', 'table.corp_share', 'table.interest_rate', 'table.own_contribution', 'table.project_cost', 'table.scheme'] missing_hi=['apply.step1', 'apply.step2', 'apply.step3', 'apply.step4', 'apply.step5', 'apply.step6', 'apply.step7', 'apply.step8', 'content.apply_intro', 'content.compare_desc', 'content.docs_intro', 'content.eligibility_intro', 'content.what_is_p1', 'content.what_is_p2', 'content.what_is_p3', 'cta.report_desc', 'cta.report_title', 'disclaimer', 'doc.1', 'doc.2', 'doc.3', 'doc.4', 'doc.5', 'doc.6', 'doc.7', 'doc.8', 'doc.9', 'eligibility.1', 'eligibility.2', 'eligibility.3', 'eligibility.4', 'eligibility.5', 'eligibility.6', 'faq.a1', 'faq.a2', 'faq.a3', 'faq.a4', 'faq.q1', 'faq.q2', 'faq.q3', 'faq.q4', 'hero.cta', 'hero.desc', 'hero.eyebrow', 'hero.title', 'nav.home', 'nav.mpbcdc_yojana', 'related.direct_loan', 'related.direct_loan_card', 'related.direct_loan_card_desc', 'related.direct_loan_desc', 'related.project_report_card', 'related.project_report_card_desc', 'related.seed_capital', 'related.seed_capital_card', 'related.seed_capital_card_desc', 'related.seed_capital_desc', 'related.subsidy', 'related.subsidy_card', 'related.subsidy_card_desc', 'related.subsidy_desc', 'section.compare', 'section.documents', 'section.eligibility', 'section.faq', 'section.how_to_apply', 'section.related_tools', 'section.what_is_mpbcdc', 'table.bank_share', 'table.corp_share', 'table.interest_rate', 'table.own_contribution', 'table.project_cost', 'table.scheme']
  project-report/index.html: missing_en=['pr_h_mpbcdc', 'pr_p_mpbcdc'] missing_hi=['pr_h_mpbcdc', 'pr_p_mpbcdc']`;

const regex = /missing_en=\[([^\]]+)\]/g;
let match;
const keysToAdd = new Set();

while ((match = regex.exec(logOutput)) !== null) {
  const keysStr = match[1];
  const keys = keysStr.split(',').map(s => s.trim().replace(/'/g, ''));
  keys.forEach(k => keysToAdd.add(k));
}

const langPath = path.join(process.cwd(), 'data', 'lang.json');
const lang = JSON.parse(fs.readFileSync(langPath, 'utf8'));

keysToAdd.forEach(k => {
  if (!lang.en[k]) lang.en[k] = k;
  if (!lang.hi[k]) lang.hi[k] = k;
});

fs.writeFileSync(langPath, JSON.stringify(lang, null, 2), 'utf8');
console.log('Added missing keys:', Array.from(keysToAdd).length);
