// District pages with the most visits (page_views, 30 days to 24 Oct 2026)
// get an extra section: the state's online portal for certificates, our state
// guides, and the district's official website. Every URL was checked: the
// state portals are the ones our state guides already cite, district sites
// are each district's NIC / state-government site. null = no single district
// site we could confirm (Delhi revenue districts, Kolkata).
export const STATE_PORTAL: Record<string, { name: string; url: string }> = {
  delhi: { name: "e-District Delhi", url: "https://edistrict.delhigovt.nic.in/" },
  "uttar-pradesh": { name: "e-District UP", url: "https://edistrict.up.gov.in/" },
  uttarakhand: { name: "Apuni Sarkar (e-Services Uttarakhand)", url: "https://eservices.uk.gov.in/" },
  bihar: { name: "RTPS सेवा पोर्टल (ServicePlus Bihar)", url: "https://serviceonline.bihar.gov.in/" },
  "west-bengal": { name: "e-District West Bengal", url: "https://edistrict.wb.gov.in/" },
  maharashtra: { name: "आपले सरकार (Aaple Sarkar)", url: "https://aaplesarkar.mahaonline.gov.in/" },
  gujarat: { name: "Digital Gujarat", url: "https://www.digitalgujarat.gov.in/" },
  rajasthan: { name: "e-Mitra Rajasthan", url: "https://emitra.rajasthan.gov.in/" },
  "madhya-pradesh": { name: "MP e-District", url: "https://mpedistrict.gov.in/" },
  "himachal-pradesh": { name: "e-District Himachal Pradesh", url: "https://edistrict.hp.gov.in/" },
  "tamil-nadu": { name: "TN e-Sevai", url: "https://tnesevai.tn.gov.in/" },
};

export const TOP_DISTRICTS: Record<string, string | null> = {
  "uttarakhand/dehradun": "https://dehradun.nic.in/",
  "delhi/east": null,
  "bihar/patna": "https://patna.nic.in/",
  "west-bengal/kolkata": null,
  "delhi/south-delhi": null,
  "uttar-pradesh/aligarh": "https://aligarh.nic.in/",
  "maharashtra/pune": "https://pune.gov.in/",
  "uttar-pradesh/ghaziabad": "https://ghaziabad.nic.in/",
  "uttar-pradesh/lucknow": "https://lucknow.nic.in/",
  "delhi/central-delhi": null,
  "delhi/central": null,
  "gujarat/ahmedabad": "https://ahmedabad.nic.in/",
  "rajasthan/jaipur": "https://jaipur.rajasthan.gov.in/",
  "uttar-pradesh/sambhal": "https://sambhal.nic.in/",
  "madhya-pradesh/indore": "https://indore.nic.in/",
  "himachal-pradesh/solan": "https://hpsolan.nic.in/",
  "bihar/madhubani": "https://madhubani.nic.in/",
  "tamil-nadu/coimbatore": "https://coimbatore.nic.in/",
  "madhya-pradesh/jabalpur": "https://jabalpur.nic.in/",
  "uttar-pradesh/basti": "https://basti.nic.in/",
  "maharashtra/nagpur": "https://nagpur.gov.in/",
  "delhi/new-delhi": null,
};
