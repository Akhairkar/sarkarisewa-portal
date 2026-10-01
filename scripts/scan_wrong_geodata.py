import sys
sys.stdout.reconfigure(encoding='utf-8')
import os
import glob
import re

# ------------------------------------------------------------------------------
# Known list of problematic cross-state districts to check
# (Specifically from prompt, plus extended set of cross-state leaked districts)
# ------------------------------------------------------------------------------
PROMPT_KNOWN_DISTRICTS = {
    # Uttar Pradesh districts (must NOT appear in other states)
    "meerut": "uttar-pradesh",
    "lucknow": "uttar-pradesh",
    "varanasi": "uttar-pradesh",
    "agra": "uttar-pradesh",
    "kanpur": "uttar-pradesh",
    "kanpur-nagar": "uttar-pradesh",
    "kanpur-dehat": "uttar-pradesh",
    "prayagraj": "uttar-pradesh",
    "allahabad": "uttar-pradesh",
    "noida": "uttar-pradesh",
    "gautam-buddha-nagar": "uttar-pradesh",
    "ghaziabad": "uttar-pradesh",

    # Maharashtra districts (must NOT appear in other states)
    "mumbai": "maharashtra",
    "mumbai-city": "maharashtra",
    "mumbai-suburban": "maharashtra",
    "pune": "maharashtra",
    "nagpur": "maharashtra",

    # Bihar districts (must NOT appear in other states)
    "patna": "bihar",
    "gaya": "bihar",
    "muzaffarpur": "bihar",

    # Rajasthan districts (must NOT appear in other states)
    "jaipur": "rajasthan",
    "jodhpur": "rajasthan",
    "udaipur": "rajasthan"
}

ADDITIONAL_KNOWN_CROSS_STATE_DISTRICTS = {
    # Additional districts discovered leaking across state lines in portal data
    "bhadohi": "uttar-pradesh",
    "rampur": "uttar-pradesh",
    "hingoli": "maharashtra",
    "chhatarpur": "madhya-pradesh",
    "bongaigaon": "assam",
    "dimapur": "nagaland",
    "guntur": "andhra-pradesh",
    "badgam": "jammu-and-kashmir",
    "budgam": "jammu-and-kashmir",
    "baramulla": "jammu-and-kashmir",
    "jammu": "jammu-and-kashmir",
    "kathua": "jammu-and-kashmir",
    "doda": "jammu-and-kashmir",
    "anantnag": "jammu-and-kashmir",
    "kargil": "ladakh"
}

def normalize_name(name):
    """Normalize string by removing non-alphanumerics and lowercasing."""
    return re.sub(r'[^a-z0-9]', '', name.lower())

def normalize_state(state):
    """Normalize state identifiers (e.g. handle 'and' in names)."""
    return re.sub(r'[^a-z0-9]', '', state.lower().replace('-and-', '-'))

def scan_service_directory(service_name, glob_pattern):
    """
    Scans index.html files under a service directory for wrong geographic district listings.
    """
    files = glob.glob(glob_pattern)
    print(f"\n{'=' * 80}")
    print(f" SCANNING {service_name.upper()} ({len(files)} state hub files)")
    print(f"{'=' * 80}")

    prompt_mismatches = []
    additional_mismatches = []

    for filepath in sorted(files):
        # Extract state name from folder path
        # e.g., service/csc-locator/bihar/index.html -> bihar
        norm_path = filepath.replace('\\', '/')
        parts = norm_path.split('/')
        state = parts[-2]
        norm_state = normalize_state(state)

        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        for line_no, line in enumerate(lines, 1):
            # Extract links to district pages like <a href="districtname.html">DistrictName</a>
            # Also captures href="../state.html" style fallback links in district grid
            matches = re.findall(r'<a\s+[^>]*href="([^"]+)"[^>]*>(.*?)</a>', line)
            for href, text in matches:
                # Ignore global nav / footer / header links
                if href.startswith(('http', '/', '../../..', '#')) or any(k in href for k in ['tools/', 'states/', 'category/', 'jobs/']):
                    continue

                # Clean district text and strip store counts (e.g. 'Meerut (1 stores) &rarr;' -> 'Meerut')
                clean_text = re.sub(r'<[^>]+>', '', text).strip()
                dist_match = re.match(r'^(.*?)(?:\s*\(\d+\+?\s*stores?\))?(?:\s*&rarr;)?$', clean_text)
                district_name = dist_match.group(1).strip() if dist_match else clean_text

                # Avoid empty or non-district anchors
                if not district_name or district_name.lower() in ['home', 'csc locator', 'jan aushadhi', 'all states hub', 'search']:
                    continue

                norm_dist = normalize_name(district_name)
                norm_href = normalize_name(os.path.basename(href).replace('.html', ''))

                # 1. Check against prompt-specified known problematic districts
                for prob_dist, expected_state in PROMPT_KNOWN_DISTRICTS.items():
                    norm_prob = normalize_name(prob_dist)
                    if norm_dist == norm_prob or norm_href == norm_prob:
                        if norm_state != normalize_state(expected_state):
                            prompt_mismatches.append({
                                "service": service_name,
                                "file": filepath,
                                "line": line_no,
                                "state": state,
                                "district": district_name,
                                "href": href,
                                "expected_state": expected_state,
                                "category": "Prompt Specified"
                            })

                # 2. Check against additional discovered cross-state leaked districts
                for add_dist, expected_state in ADDITIONAL_KNOWN_CROSS_STATE_DISTRICTS.items():
                    norm_add = normalize_name(add_dist)
                    if norm_dist == norm_add or norm_href == norm_add:
                        if norm_state != normalize_state(expected_state):
                            additional_mismatches.append({
                                "service": service_name,
                                "file": filepath,
                                "line": line_no,
                                "state": state,
                                "district": district_name,
                                "href": href,
                                "expected_state": expected_state,
                                "category": "Additional Leaked District"
                            })

    # Summary report for this service
    print(f"\n[RESULTS FOR {service_name}]")
    print(f" - Prompt-specified cross-state district mismatches: {len(prompt_mismatches)}")
    print(f" - Additional cross-state leaked district mismatches: {len(additional_mismatches)}")
    print(f" - Total mismatches found: {len(prompt_mismatches) + len(additional_mismatches)}")

    if prompt_mismatches:
        print("\n--- Prompt-Specified District Mismatches Found ---")
        for idx, m in enumerate(prompt_mismatches, 1):
            print(f" {idx}. [{m['state']}] District '{m['district']}' belongs to '{m['expected_state']}'")
            print(f"    File: {m['file']} (Line {m['line']})")
            print(f"    Link: href=\"{m['href']}\"\n")

    if additional_mismatches:
        print("\n--- Additional Cross-State Leaked District Mismatches Found ---")
        for idx, m in enumerate(additional_mismatches, 1):
            print(f" {idx}. [{m['state']}] District '{m['district']}' belongs to '{m['expected_state']}'")
            print(f"    File: {m['file']} (Line {m['line']})")
            print(f"    Link: href=\"{m['href']}\"\n")

    return prompt_mismatches, additional_mismatches

def main():
    print("=" * 80)
    print("SarkariSewa Portal - Geographic Data Integrity Auditor")
    print("Checking CSC Locator and Jan Aushadhi state hub pages")
    print("=" * 80)

    # 1. CSC Locator
    csc_prompt, csc_add = scan_service_directory(
        "CSC Locator",
        r"service/csc-locator/*/index.html"
    )

    # 2. Jan Aushadhi
    jan_prompt, jan_add = scan_service_directory(
        "Jan Aushadhi",
        r"service/jan-aushadhi/*/index.html"
    )

    # Final overall summary
    print("\n" + "=" * 80)
    print("FINAL SUMMARY REPORT")
    print("=" * 80)
    print(f"Total CSC Locator files scanned:    35")
    print(f"Total Jan Aushadhi files scanned:   36")
    print(f"Total Prompt-specified Mismatches:  {len(csc_prompt) + len(jan_prompt)}")
    print(f"Total Additional Cross-State Leaks: {len(csc_add) + len(jan_add)}")
    print(f"Total Geographic Bugs Detected:     {len(csc_prompt) + len(jan_prompt) + len(csc_add) + len(jan_add)}")
    print("=" * 80)

if __name__ == "__main__":
    main()
